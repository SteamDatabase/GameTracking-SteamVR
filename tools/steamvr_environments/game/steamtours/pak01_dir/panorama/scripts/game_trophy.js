"use strict";

var gbRequestedDetails = false;

function ShowDetails()
{
    var panel = $( "#GameTrophyAppLogoPanel" );
	panel.ShowDetailsPanel();
}

function HideDetails()
{
	var panel = $( "#GameTrophyDetailsPanel" );
	panel.RemoveClass( "DetailsVisible" );

	// schedule this, so the CSS transitions work
	$.Schedule( 0.26, function() {
		var panel = $( "#GameTrophyDetailsPanel" );
		panel.HideDetailsPanel();
	} );
}

function OnLoadDetailsPanel()
{
	// schedule this, because we don't have the panel attributes yet
	$.Schedule( 0.01, function() {
		LoadDetails();
	} );
}

function LoadDetails()
{
	var parentPanel = $( "#GameTrophyDetailsPanel" );
	parentPanel.AddClass( "DetailsVisible" );
	
	if ( !gbRequestedDetails )
	{
		gbRequestedDetails = true;

		var params = {
			accountid : parentPanel.GetAttributeInt( "accountid", 0 ),
			appid : parentPanel.GetAttributeInt( "appid", 0 )
		};
		
		$.AsyncWebRequest(
			"http://steamcommunity.com/steamvr/ajaxgettrophydetailsforuser/",
			//"http://tomb.valve.org/community/steamvr/ajaxgettrophydetailsforuser/",
			{
				type: 'GET',
				data: params,
				success: function( data )
				{
					// app
					parentPanel.SetDialogVariable( "app_name", data.app_name );
					var appTitlePanel = parentPanel.FindChildInLayoutFile( "AppTitlePanel" );
					appTitlePanel.SetPanelEvent( "onactivate", function() {
						parentPanel.ViewAppDetails();
					} );

					// owner
					var ownerPanel = parentPanel.FindChildInLayoutFile( "OwnerDetailsPanel" );
					ownerPanel.SetPanelEvent( "onactivate", function() {
						parentPanel.ViewOwnerSteamProfile();
					} );
					var ownerAvatarPanel = parentPanel.FindChildInLayoutFile( "OwnerAvatar" );
					ownerAvatarPanel.SetImage( data.owner_avatar_url );
					parentPanel.SetDialogVariable( "owner_name", data.owner_name );
					// expected in seconds, but we pass minutes
					parentPanel.SetDialogVariableTime( "playtime", data.playtime * 60 );

					// badge
					if ( parentPanel.BHasClass( "HasBadge" ) )
					{
						parentPanel.SetDialogVariableInt( "badge_level", parentPanel.GetAttributeInt( "badge_level", 0 ) );
						parentPanel.SetDialogVariable( "badge_name", data.badge_name );
						var badgeIconPanel = parentPanel.FindChildInLayoutFile( "BadgeIcon" );
						badgeIconPanel.SetImage( data.badge_icon );
					}
					
					// achievements
					parentPanel.SetHasClass( "HasAchievements", data.num_achievements != 0 );
					var panelAchievementProgress = parentPanel.FindChildInLayoutFile("AchievementProgress");
					panelAchievementProgress.style.width = ( data.num_achievements_completed * 100 / ( data.num_achievements > 0 ? data.num_achievements : 1 ) ) + '%;';
					panelAchievementProgress.ApplyStyles( true );
					parentPanel.SetDialogVariableInt( "num_achievements", data.num_achievements );
					parentPanel.SetDialogVariableInt( "num_achievements_completed", data.num_achievements_completed );
					var panelAchievements = parentPanel.FindChildInLayoutFile( "AchievementsPanel" );
					panelAchievements.SetPanelEvent( "onactivate", function() { parentPanel.ViewOwnerSteamAchievements(); } );

					switch(parentPanel.GetAttributeInt( "achievement_level", 0 ) )
					{
						case 0: 	
							parentPanel.AddClass( "NoAchievements");
							break; 
						case 1: 	
							parentPanel.AddClass( "BronzeTrophy");
							break; 
						case 2: 	
							parentPanel.AddClass( "SilverTrophy");
							break; 
						case 3: 	
							parentPanel.AddClass( "GoldTrophy");
							break; 
						case 4: 	
							parentPanel.AddClass( "PlatinumTrophy");
							break; 
					};

					// screenshots
					parentPanel.SetHasClass( "HasScreenshots", data.screenshots.length != 0 );
					for ( var i = 1; i <= 3; ++i )
					{
						var s = parentPanel.FindChildInLayoutFile( "Screenshot" + i );
						if ( s )
						{
							var screenshotIdx = i - 1;
							if ( screenshotIdx < data.screenshots.length )
							{
								s.SetImage( data.screenshots[screenshotIdx].image_url );
								s.AddClass( "HasScreenshot" );
							}
							else
							{
								s.RemoveClass( "HasScreenshot" );
							}
						}
					}
					var panelScreenshots = parentPanel.FindChildInLayoutFile( "ScreenshotsContainer" );
					if ( data.screenshots.length == 0 && parentPanel.BHasClass( "IsOwner" ) )
					{
						parentPanel.SetPanelEvent( "onactivate", function() {
							parentPanel.ViewLibraryScreenshots();
						} );
					}
					else
					{
						parentPanel.SetPanelEvent( "onactivate", function() {
							parentPanel.ViewOwnerSteamScreenshots();
						} );
					}

					// all done
					parentPanel.AddClass( "HasDetails" );
				},
				error: function()
				{
					$.Msg( "Failed to get trophy data for user: " + params['accountid'] + " and appid: " + params['appid'] );
				}
			}
		);		
	}
}

function LaunchApp()
{
	var parentPanel = $( "#GameTrophyDetailsPanel" );
	VRUtils.LaunchSteamApp( parentPanel.GetAttributeInt( "appid", 0 ) );
}
