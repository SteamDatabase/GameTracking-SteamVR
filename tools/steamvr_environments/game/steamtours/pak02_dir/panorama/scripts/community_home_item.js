"use strict";

function RegisterCommunityItemPanel()
{
	var parentPanel = $( "#client_ui_panel" );
	parentPanel.AddClass( "Hidden" );

	// callback to show based on event from client => server => all clients
	var onShow = function( parentPanel ) {
		return function( data ) {
//			$.Msg( "Showing ugc: " + data.publishedfileid );

			parentPanel.RemoveClass( "screenshots" );
			parentPanel.RemoveClass( "artwork" );
			parentPanel.RemoveClass( "environments" );
			parentPanel.RemoveClass( "vive_promo_environment" );
			parentPanel.AddClass( data.fromSection );
			
			var panelDetails = parentPanel.FindChildTraverse( data.fromSection == "environments" || data.fromSection == "vive_promo_environment" ? "EnvironmentDetail" : "CommunityItem" );			
			panelDetails.SetDialogVariable( "creator_name", data.creatorName );
			panelDetails.SetDialogVariable( "item_text", data.itemText );

			// show the already cached image
			var imagePanel = panelDetails.FindChildInLayoutFile( "ItemImage" );
			if ( imagePanel )
			{
				imagePanel.SetImage( data.imageURL );
			}

			// start loading the full image
			var imagePanelFull = panelDetails.FindChildInLayoutFile( "ItemImageFull" );
			imagePanelFull.SetImage( data.fullImageURL );

			// show ourselves
			parentPanel.RemoveClass( "Hidden" );

			parentPanel.SetAttributeString( "publishedfileid", data.publishedfileid );
			parentPanel.SetAttributeInt( "image_width", data.imageWidth );
			parentPanel.SetAttributeInt( "image_height", data.imageHeight );
			
			// extra stuff for Environments
			if ( data.fromSection == "environments" || data.fromSection == "vive_promo_environment" )
			{
				var queryHandle = SteamUGC.CreateQueryUGCDetailsRequest( [ data.publishedfileid] );
				var params = {
					long_description : true,
					cache_seconds : 60
				};
				SteamUGC.ConfigureQuery( queryHandle, params );
				var onQueryComplete = function( panel ) {
					return function( data ) {
						if ( data.num_results == 1 )
						{
							var details = data.details[0];
							panel.SetDialogVariable( "item_text", details.title );
							panel.SetDialogVariable( "item_detail_desc", details.description );
							var onGetPersonaName = function( panel ) {
								return function( data ) { panel.SetDialogVariable( "creator_name", data.persona_name ); };
							} ( panel );
							var strAuthor = SteamFriends.RequestPersonaName( details.creator_steamid, onGetPersonaName );
//							$.Msg( "Author: " + strAuthor );
							if ( strAuthor )
							{
								panel.SetDialogVariable( "creator_name", strAuthor );
							}

							var imgAvatar = panel.FindChildTraverse( "ItemCreatorAvatar" );
							imgAvatar.SetImage( "file://{images}/content_browser/avatar_default_image.png" );
							SteamFriends.SetLargeAvatarImage( details.creator_steamid, imgAvatar );

							// themes
							var rgThemes = {
								"Abstract" : "#Workshop_Tag_Theme_Abstract",
								"Architecture" : "#Workshop_Tag_Theme_Architecture",
								"Art" : "#Workshop_Tag_Theme_Art",
								"City" : "#Workshop_Tag_Theme_City",
								"Game" : "#Workshop_Tag_Theme_Game",
								"Nature" : "#Workshop_Tag_Theme_Nature",
								"Space" : "#Workshop_Tag_Theme_Space",
								"Tech" : "#Workshop_Tag_Theme_Tech",
								"Real" : "#Workshop_Tag_Theme_Real",
								"Imaginary" : "#Workshop_Tag_Theme_Imaginary",
								"Derelict" : "#Workshop_Tag_Theme_Derelict",
								"Small Things" : "#Workshop_Tag_Theme_SmallThings",
								"Big Things" : "#Workshop_Tag_Theme_BigThings"
							};
							if ( details.num_tags > 0 )
							{
								var strThemes = "";
								for ( var i = 0; i < details.num_tags; ++i )
								{
									var tag = details.tags[i];
									if ( rgThemes[tag] )
									{
										if ( i != 0 )
										{
											strThemes += ", ";
										}
										strThemes += $.Localize( rgThemes[tag] );
									}
								}
								if ( strThemes != "" )
								{
									panel.SetDialogVariable( "item_theme", strThemes );
								}
								else
								{
									panel.SetDialogVariable( "item_theme", $.Localize( "#ItemDetail_Theme_None" ) );
								}
							}
							else
							{
								panel.SetDialogVariable( "item_theme", $.Localize( "#ItemDetail_Theme_None" ) );
							}

							// rating
							var nTotalVotes = details.votes_up + details.votes_down;
							panel.SetDialogVariableInt( "item_num_ratings", nTotalVotes );
							if ( nTotalVotes == 1 )
							{
								panel.SetDialogVariable( "item_rating_text", $.Localize( "#ItemDetail_Rating" ) );
							}
							else
							{
								panel.SetDialogVariable( "item_rating_text", $.Localize( "#ItemDetail_Ratings" ) );
							}

							// stars
							var panelStars = panel.FindChildTraverse( "StarRatingImage" );
							var nNumStars = Math.ceil( details.score * 5 );
							if ( nTotalVotes < 25 )
							{
								nNumStars = 0;
							}
							panel.SetHasClass( "RatingNoStars", nNumStars == 0 );
							switch( nNumStars )
							{
								case 0: panelStars.SetImage( "file://{images}/content_browser/rating_nostars.png" ); break;	
								case 1: panelStars.SetImage( "file://{images}/content_browser/rating_onestar.png" ); break;	
								case 2: panelStars.SetImage( "file://{images}/content_browser/rating_twostars.png" ); break;	
								case 3: panelStars.SetImage( "file://{images}/content_browser/rating_threestars.png" ); break;	
								case 4: panelStars.SetImage( "file://{images}/content_browser/rating_fourstars.png" ); break;	
								case 5: panelStars.SetImage( "file://{images}/content_browser/rating_fivestars.png" ); break;	
							}

							var subscriptionInfo = SteamUGC.GetSubscriptionInfo( details.publishedfileid );
							panel.SetHasClass( "Subscribed", subscriptionInfo.subscribed );
							panel.SetHasClass( "Installed", subscriptionInfo.installed && !subscriptionInfo.needs_update );
							panel.SetHasClass( "Downloading", subscriptionInfo.downloading );
//							$.Msg( "onQueryComplete: SteamUGC.GetSubscriptionInfo " + details.publishedfileid + ( subscriptionInfo.installed ? "  IS installed" : " NOT installed" ) );

							// subscribe
							var subscribeBtn = panel.FindChildTraverse( "BrowseSubscribeBtn" );
							var onSubscribe = function( panel ) {
								return function( data ) {
									if ( data.success == 1 )
									{
										panel.AddClass( "Subscribed" );
									}
								}
							} ( panel );
							var onDownload = function( panel ) {
								return function( data ) {
									if ( data.success == 1 )
									{
//									    $.Msg( "onDownload: " + panel.id + " has finished downloading and is installed" );
										panel.AddClass( "Installed" );
										panel.RemoveClass( "Downloading" );
									}
								}
							} ( panel );
							var onTrySubscribe = function( publishedfileid ) {
								return function() {
									panel.AddClass( "Downloading" );
									SteamUGC.RegisterDownloadItemResultCallback( publishedfileid, onDownload );
									SteamUGC.SubscribeItem( publishedfileid, onSubscribe );
								};
							} ( details.publishedfileid );
							subscribeBtn.SetPanelEvent( "onactivate", onTrySubscribe );

                            // force it to download if you're subscribed, but haven't downloaded (otherwise dependencies may never download)
                            if ( subscriptionInfo.subscribed && ( !subscriptionInfo.installed || subscriptionInfo.needs_update ) )
							{
//							    $.Msg( "onQueryComplete: downloading " + details.publishedfileid );
							    panel.AddClass( "Downloading" );
							    SteamUGC.RegisterDownloadItemResultCallback( details.publishedfileid, onDownload );
							}

							// unsubscribe
							var unsubscribeBtn = panel.FindChildTraverse( "BrowseUnsubscribeBtn" );
							var onUnsubscribe = function( panel ) {
								return function( data ) {
									if ( data.success == 1 )
									{
										panel.SetHasClass( "Subscribed", false );
									}
								}
							} ( panel );
							var onTryUnsubscribe = function( publishedfileid ) {
								return function() { SteamUGC.UnsubscribeItem( publishedfileid, onUnsubscribe ); };
							} ( details.publishedfileid );
							unsubscribeBtn.SetPanelEvent( "onactivate", onTryUnsubscribe );

							var viewBtn = panel.FindChildTraverse( "ViewInWorkshopBtn" );
							var onViewInWorkshop = function( publishedfileid ) {
								return function() { $.DispatchEvent( "OpenSteamURL", "open/bigpicture/workshopitem/" + publishedfileid ); };
							} ( details.publishedfileid );
							viewBtn.SetPanelEvent( "onactivate", onViewInWorkshop );

							var visitBtn = panel.FindChildTraverse( "VisitBtn" );
							var onVisit = function( publishedfileid ) {
								return function() {
									$.DispatchEvent( "ShowContentBrowserSection", "Maps" );
									$.DispatchEvent( "ShowItemDetails", "workshop_" + publishedfileid );
								}
							} ( details.publishedfileid );
							visitBtn.SetPanelEvent( "onactivate", onVisit );
						}
					}
				} ( panelDetails )
				SteamUGC.SendUGCQuery( queryHandle, onQueryComplete );
			}
		}
	} (parentPanel);
	GameEvents.Subscribe( "ShowCommunityItemDetail", onShow );

	// callback to hide based on event from client => server => all clients
	var onHide = function( panel ) {
		return function( data ) {
			panel.AddClass( "Hidden" );
		}
	} (parentPanel);
	GameEvents.Subscribe( "HideCommunityItemDetail", onHide );

	var rgPanels = [ parentPanel.FindChildTraverse( "CommunityItem" ), parentPanel.FindChildTraverse( "EnvironmentDetail" ) ];
	for ( var i = 0; i < rgPanels.length; ++i )
	{		
		var panelDetails = rgPanels[i];

		// close button
		var onActivate = function( panel ) {
			return function() {
//				$.Msg( "trying to hide: " + panel.GetAttributeString( "publishedfileid", "" ) );
				var data = { publishedfileid: panel.GetAttributeString( "publishedfileid", "" ) };
				GameEvents.SendCustomGameEventToAllClients( "HideCommunityItemDetail", data );
			}
		}( parentPanel );
		if ( panelDetails )
		{
			panelDetails.SetPanelEvent( "onactivate", onActivate );
		}
		var closeButton = panelDetails.FindChildTraverse( "CloseItemDetailBtn" );
		closeButton.SetPanelEvent( "onactivate", onActivate );

		// previous
		var showPrevItem = function( panel ) {
			return function() {
				// @note: send only to host
				var data = { publishedfileid: panel.GetAttributeString( "publishedfileid", "" ), increment: -1 };
				GameEvents.SendCustomGameEventToClient( "ShowUGCItemSibling", 1, data );
			}
		}( parentPanel );
		var prevItemBtn = panelDetails.FindChildTraverse( "PrevItemBtn" );
		prevItemBtn.SetPanelEvent( "onactivate", showPrevItem );

		// next
		var showNextItem = function( panel ) {
			return function() {
				// @note: send only to host
				var data = { publishedfileid: panel.GetAttributeString( "publishedfileid", "" ), increment: 1 };
				GameEvents.SendCustomGameEventToClient( "ShowUGCItemSibling", 1, data );
			}
		}( parentPanel );
		var nextItemBtn = panelDetails.FindChildTraverse( "NextItemBtn" );
		nextItemBtn.SetPanelEvent( "onactivate", showNextItem );

		// spawn in-world copy
		if ( i == 0 )
		{
			var saveCopy = function( panel ) {
				return function() {
					// spawn the in-world panel
					var publishedfileid = panel.GetAttributeString( "publishedfileid", "" );
					var image_width = panel.GetAttributeInt( "image_width", 256 );
					var image_height = panel.GetAttributeInt( "image_height", 256 );
					SteamVRHome.SpawnImagePanel( publishedfileid, image_width, image_height );
				}
			}( parentPanel );
			var saveCopyBtn = panelDetails.FindChildTraverse( "SaveCopyBtn" );
			saveCopyBtn.SetPanelEvent( "onactivate", saveCopy );
		}
	}
}
