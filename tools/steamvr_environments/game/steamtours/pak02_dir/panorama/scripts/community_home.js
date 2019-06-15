"use strict";

// helper function
function shuffle( a ) {
	for ( var i = a.length - 1; i > 0; i--)
	{
		var j = Math.floor( Math.random() * ( i + 1 ) );
		var temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
}

// holds the items
var CItemsContext = (function()
{
	function CItemsContext()
	{
		this.m_rgItems = [];
		this.m_rgItems.push( new Array() );
	};

	CItemsContext.prototype.AddItem = function( item )
	{
		this.m_rgItems[this.m_rgItems.length - 1].push( item );
	};

	CItemsContext.prototype.RemoveAllItems = function()
	{
		this.m_rgItems[this.m_rgItems.length - 1].length = 0;
	};
	
	CItemsContext.prototype.GetItems = function()
	{
		return this.m_rgItems[this.m_rgItems.length - 1];
	};

	CItemsContext.prototype.GetNumItems = function()
	{
		return this.m_rgItems[this.m_rgItems.length - 1].length;
	}

	CItemsContext.prototype.PushItemsContext = function()
	{
		return this.m_rgItems.push( new Array() );
	};
	
	CItemsContext.prototype.PopItemsContext = function()
	{
		this.m_rgItems.pop();
	};

	CItemsContext.prototype.UpdateAllSubscriptionInfo = function()
	{
		var rgItems = this.GetItems();
		for ( var i = 0; i < rgItems.length; ++i )
		{
			var item = rgItems[i];
			item.UpdateSubscriptionInfo();
		}
	}

	return CItemsContext;
} )();


// global variables
var gChangeUGCThumbnailsEventID = null;
var gSection = "environments";
var gUGCItemsContext = new CItemsContext();
var gIsShowingHandLabCallout = false;

function OnShowHandLabCallout( handLabData )
{
	var wrapperPanel = $( "#CommunityHomeWrapper" );

	if ( !SteamVRHome.ShouldShowHandLabCallout() )
	{
		if ( gIsShowingHandLabCallout )
		{
			wrapperPanel.RemoveClass( "AppConfirm" );
			gIsShowingHandLabCallout = false;
		}

		return;
	}

	gIsShowingHandLabCallout = true;

	wrapperPanel.AddClass( "AppConfirm" );
	wrapperPanel.SetHasClass( "IsSteamApp", true );
	
	var confirmationPanel = wrapperPanel.FindChildInLayoutFile( "ConfirmationPanel" );
	confirmationPanel.SetDialogVariable( "launch_app_name", handLabData.app_name );

	var launchImagePanel = confirmationPanel.FindChildInLayoutFile( "LaunchAppImage" );
	launchImagePanel.SetImage( handLabData.app_logo_url );

	var vrAppData = VRUtils.GetVRAppPropertyData( handLabData.app_id );
	if ( vrAppData.data_valid == 0 )
		wrapperPanel.RemoveClass( "CanLaunchApp" );
	else
		wrapperPanel.AddClass( "CanLaunchApp" );

	// Launch button
	var launchButton = confirmationPanel.FindChildInLayoutFile( "LaunchAppButton" );
	var onLaunchButtonActivate = function( localAppid ) {
		return function() {
			SteamVRHome.DismissHandLabCallout();
			VRUtils.LaunchSteamApp( localAppid );
		}
	}( handLabData.app_id );
	launchButton.SetPanelEvent( "onactivate", onLaunchButtonActivate );

	// Details button
	var detailsButton = confirmationPanel.FindChildInLayoutFile( "DetailsButton" );
	var onDetailsButtonActivate = function( localAppid ) {
		return function() {
			SteamVRHome.DismissHandLabCallout();
			if ( vrAppData.data_valid == 0 )
				$.DispatchEvent( 'OpenSteamURL', 'open/bigpicture/store/' + localAppid );
			else
				$.DispatchEvent( 'OpenSteamURL', 'open/bigpicture/librarydetails/' + localAppid );
		}
	}( handLabData.app_id );
	detailsButton.SetPanelEvent( "onactivate", onDetailsButtonActivate );

	// Cancel button
	var cancelButton = confirmationPanel.FindChildInLayoutFile( "CancelButton" );
	cancelButton.SetPanelEvent( "onactivate", function() {
		SteamVRHome.DismissHandLabCallout();
		wrapperPanel.RemoveClass( "AppConfirm" ); 
	} );
}


function OnLoadMainPanel()
{
	var launchDate = new Date( 2019, 5, 24 );
	if ( Date.now() < launchDate )
		return;

	$.AsyncWebRequest(
		"http://steamcommunity.com/steamvr/ajaxgetgfxurl/",
		{
			type: "GET",
			data: {},
			success: function( data )
			{
				var handLabData = {
					app_id: 868020,
					app_name: "Aperture Hand Lab",
					app_logo_url: data.url + "apps/868020/header.jpg"
				};
	
				// If we already have Index controllers connected...
				OnShowHandLabCallout( handLabData );

				// If we don't have Index controllers right now, but connect them later in the session...
				GameEvents.Subscribe( "vr_controllers_connected", function ( localHandLabData ) {
					return function() {
						OnShowHandLabCallout( localHandLabData );
					}
				}( handLabData ) );
			},
			error: function()
			{
				$.Msg( "Failed to get GFX url." );
			}
		}
	);
}


function AddApps( parentPanelID, rgApps, maxPlayers, maxPeakPlayers )
{
	if ( rgApps && rgApps.length > 0 )
	{
		var parentPanel = $( parentPanelID );
		parentPanel.RemoveAndDeleteChildren();

		for ( var i = 0; i < rgApps.length; ++i )
		{
			var item = rgApps[i];
			var panelItem = $.CreatePanel( "Panel", parentPanel, "App" + item.appid );
			var maxCountForBar = Math.max( item.current_player_count, maxPlayers );
			panelItem.BLoadLayoutSnippet("App");
			var name = item.name.replace("&amp;", "&");
			panelItem.SetDialogVariable( "app_name", name );
			panelItem.SetAttributeString( "app_name", name);
			panelItem.SetAttributeString( "image_path", item.logo );
			panelItem.SetAttributeInt( "appid", parseInt( item.appid ) );

			var panelItemThumb = panelItem.FindChildInLayoutFile( "VRTitleImage" );
			panelItemThumb.SetImage( item.logo );

			var panelPopularity = panelItem.FindChildInLayoutFile("VRTitlePopularity");
			panelPopularity.style.width = ( parseInt( item.current_player_count ) * 100 / ( maxCountForBar > 0 ? maxCountForBar : 1 ) ) + '%;';
			panelPopularity.ApplyStyles( true );

			// when clicked on
			var onActivate = function( panel ) {
				return function() {
					var wrapperPanel = $( "#CommunityHomeWrapper" );
				wrapperPanel.AddClass( "AppConfirm" );

					wrapperPanel.SetHasClass( "IsSteamApp", true );

					var confirmationPanel = wrapperPanel.FindChildInLayoutFile( "ConfirmationPanel" );
					confirmationPanel.SetDialogVariable( "launch_app_name", panel.GetAttributeString( "app_name", "" ) );

					var launchImagePanel = confirmationPanel.FindChildInLayoutFile( "LaunchAppImage" );
					launchImagePanel.SetImage( panel.GetAttributeString( "image_path", "" ) );

					var appid = panel.GetAttributeInt( "appid", 0 );
//					$.Msg( "Clicked APP ID: " + appid );
					var vrAppData = VRUtils.GetVRAppPropertyData( appid );
					if ( vrAppData.data_valid == 0 )
					{
						wrapperPanel.RemoveClass( "CanLaunchApp" );
					}
					else
					{
						wrapperPanel.AddClass( "CanLaunchApp" );
					}

//					$.Msg( "VRAppData.app_name: " + vrAppData.app_name );

					//Launch button
					var launchButton = confirmationPanel.FindChildInLayoutFile( "LaunchAppButton" );
					var onLaunchButtonActivate = function( localAppid ) {
							return function() {
//								$.Msg( "Local APP ID: " + localAppid );
								VRUtils.LaunchSteamApp( localAppid );
							}
					}( appid );
					launchButton.SetPanelEvent( "onactivate", onLaunchButtonActivate );

					//Details button
					var detailsButton = confirmationPanel.FindChildInLayoutFile( "DetailsButton" );
					var onDetailsButtonActivate = function( localAppid ) {
							return function() {
//								$.Msg( "Local APP ID: " + localAppid );
								if ( vrAppData.data_valid == 0 )
									$.DispatchEvent( 'OpenSteamURL', 'open/bigpicture/store/' + localAppid );
								else
									$.DispatchEvent( 'OpenSteamURL', 'open/bigpicture/librarydetails/' + localAppid );
							}
					}( appid );
					detailsButton.SetPanelEvent( "onactivate", onDetailsButtonActivate );

					//Cancel button
					var cancelButton = confirmationPanel.FindChildInLayoutFile( "CancelButton" );
					cancelButton.SetPanelEvent( "onactivate", function() { wrapperPanel.RemoveClass( "AppConfirm" ) } );
				}
			}( panelItem );
			panelItem.SetPanelEvent( "onactivate", onActivate );
		}
	}
}

var CUGCItem = (function()
{
	function CUGCItem( item, panel )
	{
		this.m_item = item;
		this.m_panel = panel;
		if ( panel )
		{
			this.m_panel.SetAttributeString( "publishedfileid", item.publishedfileid );
			this.m_panelItemThumb = this.m_panel.FindChildInLayoutFile( "ItemThumbImage" );
		}
	};

	CUGCItem.prototype.ChangeToItem = function( item )
	{
		this.m_item = item;
		this.m_panel.AddClass( "FadingOut" );
		this.m_panel.SetAttributeString( "publishedfileid", item.publishedfileid );
		
		var that = this;
		$.Schedule( 0.25, function() { that.FadedOut() } );
	};

	CUGCItem.prototype.FadedOut = function()
	{
		this.m_panel.RemoveClass( "FadingOut" );
		this.m_panel.AddClass( "FadingIn" );
		this.m_panelItemThumb.SetImage( this.m_item.image_url );

		var that = this;
		$.Schedule( 0.25, function() { that.FadedIn(); } );
	};

	CUGCItem.prototype.FadedIn = function()
	{
		this.m_panel.RemoveClass( "FadingIn" );
	};

	CUGCItem.prototype.ShowItem = function()
	{
		// tell everyone what to show
		var data = {
			publishedfileid: this.m_item.publishedfileid,
			creatorSteamID : this.m_item.creator,
			creatorName: this.m_item.creator_name,
			imageURL: this.m_item.image_url,
			imageWidth : this.m_item.image_width,
			imageHeight : this.m_item.image_height,
			fullImageURL: this.m_item.full_image_url,
			itemText: this.m_item.app_name,
			fromSection: gSection
		};
		GameEvents.SendCustomGameEventToAllClients( "ShowCommunityItemDetail", data );
	};

	CUGCItem.prototype.UpdateSubscriptionInfo = function()
	{
		var subscriptionInfo = SteamUGC.GetSubscriptionInfo( this.m_item.publishedfileid );
		this.m_panel.SetHasClass( "Subscribed", subscriptionInfo.subscribed );
		this.m_panel.SetHasClass( "Installed", subscriptionInfo.installed );
		this.m_panel.SetHasClass( "Downloading", subscriptionInfo.downloading );
	};

	return CUGCItem;
} )();

function AddUGC( parentPanelID, rgUGCItems )
{
	if ( rgUGCItems )
	{
		var panelUGCContainer = $( parentPanelID );
		for ( var i = 0; i < rgUGCItems.length; i++ )
		{
			var item = rgUGCItems[i];
			
			var panelItem = $.CreatePanel( "Panel", panelUGCContainer, "UGC" + i );
			panelItem.BLoadLayoutSnippet( "ItemThumb" );
			panelItem.SetAttributeInt( "ugc_index", i );
			
			var panelItemThumb = panelItem.FindChildInLayoutFile( "ItemThumbImage" );
			panelItemThumb.SetImage( item.image_url );

			// when clicked on
			var onActivate = function( panel ) {
				return function() {
					var ugc_index = panel.GetAttributeInt( "ugc_index", 0 );
					var rgItems = gUGCItemsContext.GetItems();
					var item = rgItems[ugc_index];
//					$.Msg( "trying to show: " + item.m_item.publishedfileid );
					item.ShowItem();
				}
			}( panelItem );
			panelItem.SetPanelEvent( "onactivate", onActivate );

			gUGCItemsContext.AddItem( new CUGCItem( item, panelItem ) );
		}
	}
}

function ChangeUGCThumbnails()
{
	if ( gSection != "environments" )
	{
//		$.Msg( "ChangeUGCThumbnails" );
		var rgItems = gUGCItemsContext.GetItems();
		var rgShuffledItems = rgItems.slice();
		shuffle( rgShuffledItems );

		var limit = Math.min( 10, rgShuffledItems.length / 2 );
		for ( var i = 0; i < limit; ++i )
		{
			var idx1 = i * 2;
			var idx2 = ( i * 2 ) + 1;

			var ugcItem1 = rgShuffledItems[idx1];
			var ugcItem2 = rgShuffledItems[idx2];

			var item1 = ugcItem1.m_item;
			var item2 = ugcItem2.m_item;		
			
			ugcItem1.ChangeToItem( item2 );
			ugcItem2.ChangeToItem( item1 );
		}
	}

	ScheduleChangeUGCThumbnails();
}

function CancelChangeUGCThumbnails()
{
	if ( gChangeUGCThumbnailsEventID )
	{
		$.CancelScheduled( gChangeUGCThumbnailsEventID );
	}
	gChangeUGCThumbnailsEventID = null;
}

function ScheduleChangeUGCThumbnails()
{
	var panel = $( "#CommunityHomeWrapper" );
	if ( !panel.BHasClass( "ViewingCommunityItemDetail" ) )
	{
		gChangeUGCThumbnailsEventID = $.Schedule( 4, function() { ChangeUGCThumbnails(); } );
	}
}


function AddEnvironmentItem( detail, parentPanel )
{
	var ugcIndex = gUGCItemsContext.GetNumItems();
	
	var panelItem = $.CreatePanel( "Panel", parentPanel, "UGC" + ugcIndex );
	panelItem.BLoadLayoutSnippet( "ItemWorkshopThumb" );
	panelItem.SetAttributeInt( "ugc_index", ugcIndex );

	// subscription classes
	var subscriptionInfo = SteamUGC.GetSubscriptionInfo( detail.publishedfileid );
	panelItem.SetHasClass( "Subscribed", subscriptionInfo.subscribed );
	panelItem.SetHasClass( "Installed", subscriptionInfo.installed );
	panelItem.SetHasClass( "Downloading", subscriptionInfo.downloading );

	// set the thumbnail
	var panelItemThumb = panelItem.FindChildInLayoutFile( "ItemThumbImage" );
	var thumbURL = detail.preview_image + "300x300.resizedimage";
	panelItemThumb.SetImage( thumbURL );

	// when clicked on
	var onActivate = function( panel ) {
		return function() {
			var ugc_index = panel.GetAttributeInt( "ugc_index", 0 );
			var rgItems = gUGCItemsContext.GetItems();
			var item = rgItems[ugc_index];
//			$.Msg( "trying to show enviroment at index " + ugc_index + " => publishedfileid: " + item.m_item.publishedfileid );
			item.ShowItem();
		}
	}( panelItem );
	panelItem.SetPanelEvent( "onactivate", onActivate );

	// the actual item
	var item = {
		publishedfileid : detail.publishedfileid,
		creator : detail.creator_steamid,
		creator_name : "",
		image_url : thumbURL,
		image_width : 256,
		image_height : 256,
		full_image_url : detail.preview_image,
		app_name : "SteamVR"
	};
	gUGCItemsContext.AddItem( new CUGCItem( item, panelItem ) );
}

function PopulateEnvironments( rgChildren, onCompleteFunc )
{
	var queryHandle = SteamUGC.CreateQueryUGCDetailsRequest( rgChildren );
	var params = {
		long_description : false,
		return_children: false,
		cache_seconds : 60
	};
	SteamUGC.ConfigureQuery( queryHandle, params );
	var onQueryComplete = function( data ) {
//		$.Msg( "PopulateValveEnvironments: " + data.num_results );
		var parentPanel = $( "#ValveEnvironments" );
//		$.Msg( "PopulateValveEnvironments: " + parentPanel.id );
		
		for ( var i = 0; i < data.num_results; ++i )
		{
			if ( !data.details[i] )
				continue;

			var detail = data.details[i];
			AddEnvironmentItem( detail, parentPanel );
		}

		if ( onCompleteFunc )
		{
			onCompleteFunc();
		}
	};
	SteamUGC.SendUGCQuery( queryHandle, onQueryComplete );
}

var k_AppID_DestinationsMain = 443150;
var k_AppID_Destinations = 453170;
var k_AppID_SteamVRMain = 330050;
var k_AppID_SteamVR = 250820;

function RequestValveEnvironments()
{
	var panel = $( "#ValveEnvironments" );
	panel.RemoveAndDeleteChildren();

	// @todo Tom Bui: this is for Steam Beta's collection
	var rgCollectionByUniverseAppID = [];
	rgCollectionByUniverseAppID[SteamUniverse.Beta] = [];
	rgCollectionByUniverseAppID[SteamUniverse.Beta][k_AppID_SteamVR] = 0;
	rgCollectionByUniverseAppID[SteamUniverse.Beta][k_AppID_SteamVRMain] = 29758;
	rgCollectionByUniverseAppID[SteamUniverse.Beta][k_AppID_Destinations] = 0;
	rgCollectionByUniverseAppID[SteamUniverse.Beta][k_AppID_DestinationsMain] = 29756;
	rgCollectionByUniverseAppID[SteamUniverse.Public] = [];
	rgCollectionByUniverseAppID[SteamUniverse.Public][k_AppID_SteamVR] = 927878610;
	rgCollectionByUniverseAppID[SteamUniverse.Public][k_AppID_SteamVRMain] = 0;
	rgCollectionByUniverseAppID[SteamUniverse.Public][k_AppID_Destinations] = 0;
	rgCollectionByUniverseAppID[SteamUniverse.Public][k_AppID_DestinationsMain] = 0;
	
	var collectionID = rgCollectionByUniverseAppID[SteamUtils.GetConnectedUniverse()][SteamUtils.GetAppID()];
	if ( collectionID == 0 )
		return;

	// request the collection's children
	var queryHandle = SteamUGC.CreateQueryUGCDetailsRequest( [ collectionID ] );
	var params = {
		long_description : false,
		return_children: true,
		cache_seconds : 60
	};
	SteamUGC.ConfigureQuery( queryHandle, params );
	var onQueryComplete = function( data ) {
//		$.Msg( "RequestValveEnvironments: " + data.num_results );
		if ( data.num_results == 1 )
		{
			var details = data.details[0];
			var rgChildren = [];
			for ( var i = 0; i < details.num_children; ++i )
			{
				var child = details.children[i];
				rgChildren.push( child.publishedfileid );
			}

			PopulateEnvironments( rgChildren, null );
		}
	};
	SteamUGC.SendUGCQuery( queryHandle, onQueryComplete );
}

function OnLoadCommunityHomeData()
{
	var panel = $( "#CommunityHomeWrapper" );

	// respond to showing details
	var onShowUGCDetails = function( panel ) {
		return function( data ) {
			panel.AddClass( "ViewingCommunityItemDetail" );
			CancelChangeUGCThumbnails();
		}
	} ( panel );
	GameEvents.Subscribe( "ShowCommunityItemDetail", onShowUGCDetails );

	// respond to hiding details
	var onHideUGCDetails = function( panel ) {
		return function( data ) {
			panel.RemoveClass( "ViewingCommunityItemDetail" );
			if ( gSection == "environments" )
			{
				gUGCItemsContext.UpdateAllSubscriptionInfo();
			}
			else if ( gSection == "vive_promo_environment" )
			{
				HideViveItems();
			}
		}
	} ( panel );
	GameEvents.Subscribe( "HideCommunityItemDetail", onHideUGCDetails );

	// respond to switching between content types
	var panelHome = $( "#CommunityHomeContainer" );
	var onSelectUGCSection = function( panelHome ) {
		return function( data ) {
			panelHome.RemoveClass( "SelectedUGC_currentlyplayed" );
			panelHome.RemoveClass( "SelectedUGC_screenshots" );
			panelHome.RemoveClass( "SelectedUGC_artwork" );
			panelHome.RemoveClass( "SelectedUGC_environments" );
			panelHome.RemoveClass( "SelectedUGC_vive_promo_environment" );
			gSection = data.section;
			panelHome.AddClass( "SelectedUGC_" + gSection );
			
			var panel = $( "#CommunityContentContainer" );
			panel.RemoveAndDeleteChildren();

			gUGCItemsContext.RemoveAllItems();

			RequestCommunityHomeData( true, false );
		}
	} ( panelHome );
	GameEvents.Subscribe( "SelectUGCSection", onSelectUGCSection );

	// respond to paging
	var onShowUGCSibling = function( panel ) {
		return function( data ) {
//			$.Msg( "trying to show sibling of: " + data.publishedfileid );
			var rgItems = gUGCItemsContext.GetItems();
			for ( var i = 0; i < rgItems.length; ++i )
			{
				var item = rgItems[i];
				if ( item.m_item.publishedfileid == data.publishedfileid )
				{
					var siblingIdx = i + data.increment;
					if ( siblingIdx < 0 )
					{
						siblingIdx = rgItems.length - 1;
					}
					else if ( siblingIdx >= rgItems.length )
					{
						siblingIdx = 0;
					}
					
					var siblingItem = rgItems[siblingIdx];
					siblingItem.ShowItem();

//					$.Msg( "Found sibling: " + siblingItem.m_item.publishedfileid );
				}
			}
		}
	} ( panel );
	GameEvents.Subscribe( "ShowUGCItemSibling", onShowUGCSibling );

	var onShowValveItems = function() {
		$( "#EnvironmentsContainer" ).AddClass( "ValveDialogOn" );
		gUGCItemsContext.PushItemsContext();
		RequestValveEnvironments();
	};
	GameEvents.Subscribe( "ShowValveItems", onShowValveItems );
	var onHideValveItems = function() {
		$( "#EnvironmentsContainer" ).RemoveClass( "ValveDialogOn" );
		gUGCItemsContext.PopItemsContext();
		gUGCItemsContext.UpdateAllSubscriptionInfo();		
	};
	GameEvents.Subscribe( "HideValveItems", onHideValveItems );


	
	RequestCommunityHomeData( true, true );

	ScheduleChangeUGCThumbnails();
}

function RequestWorkshopData()
{
	var queryHandle = SteamUGC.CreateQueryAllUGCRequest( SteamUGCQuery.RankedByTrend, SteamUGCMatchingUGCType.Items_ReadyToUse, 1 );
	var params = {
		long_description : false,
		cache_seconds : 30,
		ranked_by_days : 7
	};
	SteamUGC.ConfigureQuery( queryHandle, params );
	SteamUGC.AddRequiredTagToQuery( queryHandle, "Destination" );

	var onQueryComplete = function( data ) {
		var homePanel = $( "#CommunityHomeWrapper" );
		homePanel.SetHasClass( "HasData", true );
		
		var parentPanel = $( "#TopEnvironments" );
		parentPanel.RemoveAndDeleteChildren();

		for ( var i = 0; i < data.num_results; ++i )
		{
			if ( !data.details[i] )
				continue;

			var detail = data.details[i];
			AddEnvironmentItem( detail, parentPanel );

			// we only support 32 items in the view
			if ( gUGCItemsContext.GetNumItems() >= 32 )
			{
				break;
			}
		}
		
	};
	SteamUGC.SendUGCQuery( queryHandle, onQueryComplete );
}

function RequestCommunityHomeData( bIncludeUGC, bIncludeApps )
{
	if ( gSection == "environments" && bIncludeUGC )
	{
		RequestWorkshopData();
	}

	var params = {
		include_ugc : ( bIncludeUGC && gSection != "environments" ? 1 : 0 ),
		include_apps : ( bIncludeApps ? 1 : 0 ),
		include_free_apps : 1,
		num_items : 60,
		section : gSection
	};
	$.AsyncWebRequest(
		"http://steamcommunity.com/steamvr/ajaxgethomedata/",
		//"http://tomb.valve.org/community/steamvr/ajaxgethomedata/",
		{
			type: 'GET',
			data: params,
			success: function( data )
			{			
				var parentPanel = $( "#CommunityHomeWrapper" );
				parentPanel.SetHasClass( "HasData", true );
				
				// create panels
				AddUGC( "#CommunityContentContainer", data.items );
				AddApps( "#SinglePlayerApps", data.apps_singleplayer, 200, data.apps_singleplayer_max_peak_players );
				AddApps( "#MultiPlayerApps", data.apps_multiplayer, 200, data.apps_multiplayer_max_peak_players );
				AddApps( "#FreeApps", data.apps_free, 200, data.apps_free_max_peak_players );
				
				// schedule a refresh every 10 minutes
				$.Schedule( 600, function() { RequestCommunityHomeData( false, true ); } );
			},
			error: function()
			{
				$.Msg( "Failed to get home data" );
			}
		}
	);
}

function SelectUGCSection( newSection )
{
	var data = { section: newSection };
	GameEvents.SendCustomGameEventToAllClients( "SelectUGCSection", data );
}

function ShowValveItems()
{
	var data = {};
	GameEvents.SendCustomGameEventToAllClients( "ShowValveItems", data );
}

function HideValveItems()
{
	var data = {};
	GameEvents.SendCustomGameEventToAllClients( "HideValveItems", data );
}

function ShowViveItems()
{
	gSection = "vive_promo_environment";
	gUGCItemsContext.PushItemsContext();

	PopulateEnvironments( [ "1157245485" ], function() {
		var items = gUGCItemsContext.GetItems();
		if ( items.length != 0 )
		{
			items[0].ShowItem();
		}
	} );
}

function HideViveItems()
{
	gSection = "environments";
	gUGCItemsContext.PopItemsContext();
}
