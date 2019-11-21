"use strict";


function HideDashboardAndShowContentItems( section )
{
	RemoveTabClasses();
	$.DispatchEvent( "ShowContentItems", section );
	$.DispatchEvent( "HideAvatarCustomization" );
	$( "#BackToDashboard" ).SetFocus();
}	

function HideDashboardAndShowBackgroundItems( section )
{
	RemoveTabClasses();
	$.DispatchEvent( "ShowContentItems", section );
	$.DispatchEvent( "HideAvatarCustomization" );
	$( "#BackgroundsContainer").FindChild( "#BackToDashboard" ).SetFocus();
}	

function HideDashboardAndShowThingsDashboard()
{
	RemoveTabClasses();
	$( "#SteamToursContentBrowser" ).RemoveClass( "DashboardOn" );
	$( "#SteamToursContentBrowser" ).AddClass( "ThingsDashboardOn" );
	$( "#BackToDashboard" ).SetFocus();
}	

function ThingsDashboardBack()
{
	RemoveTabClasses();
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsDashboardOn" );		
	$( "#SteamToursContentBrowser" ).AddClass( "DashboardOn" );
}

function ShowThings( section )
{
	RemoveTabClasses();
	$.DispatchEvent( "ShowContentItems", "Props" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsDashboardOn" );
	$( "#SteamToursContentBrowser" ).AddClass( "ThingsSubpage" );
	$( "#SteamToursContentBrowser" ).AddClass( section );
}

function ShowScreenshotsByApp( section )
{
	RemoveTabClasses();
	$.DispatchEvent( "ShowContentItems", section );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsSubpage" );
}

function ShowArtworkByApp( section )
{
	RemoveTabClasses();
	$.DispatchEvent( "ShowContentItems", section );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsSubpage" );
}

function ShowContentDetail( section )
{
	RemoveTabClasses();
	$.DispatchEvent( "ShowContentItems", "Props" );
	$( "#SteamToursContentBrowser" ).AddClass( section );
}


function RemoveTabClasses()
{
	$( "#SteamToursContentBrowser" ).RemoveClass( "DashboardOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "BrowseWorkshopTab" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "MapsTab" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "BackgroundsTab" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "PropsTab" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsSubpage" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "WearablesOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ScreenshotsOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ArtworkOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ScreenshotsByApp" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ArtworkByApp" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "MyScreenshots" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "CommunityScreenshots" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "MyArtwork" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "CommunityArtwork" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ArtworkDetail" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ScreenshotDetail" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "BackgroundsOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsDashboardOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "HeadSelected" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "HandsSelected" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "WearablesSelected" );			
	$( "#SteamToursContentBrowser" ).RemoveClass( "Scrolling" );
}	

function RemoveTagClasses()
{
	$( "#SteamToursContentBrowser" ).RemoveClass( "PropsOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ToolsOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "FurnitureOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "TrophiesOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "WearablesOn" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "SpawnablePanelsOn" );
}

function EditWearables()
{
	$.DispatchEvent( "ShowPuppet" );
	$.DispatchEvent( "HideAvatarCustomization" );
	$.DispatchEvent( "EnterWearableEditMode" );
	$( "#SteamToursContentBrowser" ).RemoveClass( "ThingsSubpage" );
}

function HideDashboard()
{
	$( "#SteamToursContentBrowser" ).RemoveClass( "DashboardOn" );
}

function GoBackToAvatarDashboard()
{
	RemoveTabClasses()
	$.DispatchEvent( "ShowPuppet" );	
	$.DispatchEvent( "LeaveWearableEditMode" );
	$( "#SteamToursAvatarCustomization" ).AddClass( "Visible" );
	$( "#SteamToursAvatarCustomization" ).SetFocus();
}	

function MapsGetMoreFocus()
{
	$( "#BrowseWorkshopContainer").SetFocus();	
}

function ShowQuestDashboard()
{
	RemoveTabClasses()
	$( "#SteamToursContentBrowser" ).AddClass( "ShowQuestDashboard" );
}				

function ShowCurrentQuests()
{
	$( "#QuestDashboard" ).RemoveClass( "CompletedQuestTab" );		
	$( "#QuestDashboard" ).AddClass( "CurrentQuestTab" );	
}

function ShowCompletedQuests()
{
	$( "#QuestDashboard" ).RemoveClass( "CurrentQuestTab" );
	$( "#QuestDashboard" ).AddClass( "CompletedQuestTab" );		
}

function ShowAvatarContentItems( section )
{
	$.DispatchEvent( "ShowContentItems", section );
}

function SelectTab( TabSelection )
{
	RemoveTagClasses();
	$( "#SteamToursContentBrowser" ).AddClass( TabSelection );		
}

function SaveState()
{
	$( "#SteamToursContentBrowser" ).RemoveClass( "SavingState" );
	$.DispatchEvent( "SteamToursToggleContentBrowser", 0 );
	$.DispatchEventAsync( 0.5, "SaveGame" );
}

function ShowAvatarTutorial()
{
	$( "#SteamToursContentBrowser" ).AddClass( "AvatarTutorialOn" );				
}

function ShowScreenshotTutorial()
{
	$( "#SteamToursContentBrowser" ).AddClass( "ScreenshotTutorialOn" );				
}

function HideDialogPanel()
{
	$( "#SteamToursContentBrowser" ).RemoveClass( "AvatarTutorialOn" );	
	$( "#SteamToursContentBrowser" ).RemoveClass( "ScreenshotTutorialOn" );		
}

function HostPublicRoom()
{
	var bLoadSaveGame = $( "#SavedEnvironmentCheck" ).checked;
	$.DispatchEvent( "LoadMapFromCurrentContentItem", bLoadSaveGame, 2 );
}

function HostFriendsOnlyRoom()
{
	var bLoadSaveGame = $( "#SavedEnvironmentCheck" ).checked;
	$.DispatchEvent( "LoadMapFromCurrentContentItem", bLoadSaveGame, 1 );
}

function MoveLobby( bLoadSaveGame )
{
	if ( $( "#SteamToursContentBrowser" ).BHasClass( "IsHostingFriendsOnlyLobby" ) )
	{
		$.DispatchEvent( "LoadMapFromCurrentContentItem", bLoadSaveGame, 1 );
	}			
	else if ( $( "#SteamToursContentBrowser" ).BHasClass( "IsHostingPublicLobby" ) )
	{
		$.DispatchEvent( "LoadMapFromCurrentContentItem", bLoadSaveGame, 2 );
	}
}

function OnChooseContentItem()
{
	var bIsMap = $( "#ItemDetail" ).BHasClass( "IsMap" );
	if ( bIsMap )
	{
		var bIsHosting = $( "#SteamToursContentBrowser" ).BHasClass( "IsHostingPublicLobby" ) || $( "#SteamToursContentBrowser" ).BHasClass( "IsHostingFriendsOnlyLobby" ) || $( "#SteamToursContentBrowser" ).BHasClass( "LobbyHasVisitors" )
		$.Msg( "Is Hosting? " + bIsHosting );
		if ( bIsHosting )
		{
			PromptMoveLobby();
		}
		else
		{
			$( "#SteamToursContentBrowser" ).AddClass( "HostDialogOn" );
		}
	}
	else
	{
		$.DispatchEvent( "ActivateCurrentContentItem" );
	}
}

function PromptMoveLobby()
{
	if ( $( "#SteamToursContentBrowser" ).BHasClass( "SavedEnvironmentPresent" ) )
	{
		$( "#SteamToursContentBrowser" ).AddClass( "MoveDialogOn" );
	}
	else if ( $( "#SteamToursContentBrowser" ).BHasClass( "IsHostingFriendsOnlyLobby" ) )
	{
		$.DispatchEvent( "LoadMapFromCurrentContentItem", false, 1 );
	}			
	else if ( $( "#SteamToursContentBrowser" ).BHasClass( "IsHostingPublicLobby" ) )
	{
		$.DispatchEvent( "LoadMapFromCurrentContentItem", false, 2 );
	}
}

function PromptVisitOnMyOwn()
{
	if ( $( "#SteamToursContentBrowser" ).BHasClass( "SavedEnvironmentPresent" ) )
	{
		$( "#SteamToursContentBrowser" ).AddClass( "VisitDialogOn" );
	}
	else
	{
		$.DispatchEvent( "LoadMapFromCurrentContentItem", false, 0 );
	}
}

function VisitPrivately( bLoadSaveGame )
{
	$.DispatchEvent( "LoadMapFromCurrentContentItem", bLoadSaveGame, 0 );
}
