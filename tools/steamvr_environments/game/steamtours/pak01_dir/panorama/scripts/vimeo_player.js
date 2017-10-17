"use strict";

var gVideoID = '';
var gPlayer = 0;
var gTopPanel = 0;

function ShowVideo( videoid )
{
    gVideoID = videoid;

    $.Msg( "Requesting videoid: " + videoid );
    
    var params = {};
    $.AsyncWebRequest(
		"http://steamcommunity.com/sharedfiles/ajaxgetvimeodetails/" + videoid,
		//"http://tomb.valve.org/community/sharedfiles/ajaxgetvimeodetails/" + videoid,
		{
			type: 'GET',
			data: params,
			success: function( data )
			{
				$.Msg( "Got video data" );
				$.Msg( "url:" + data.url );

				if ( data.success == 1 )
				{
					gPlayer.SetDuration( data.details.duration );
					gPlayer.LoadVideo( data.url );

					//		    parentPanel.SetDialogVariable( "title", data.details.title );
					//		    parentPanel.SetDialogVariable( "description", data.details.description );
					//		    parentPanel.SetDialogVariableInt( "duration", data.details.duration_seconds );
				}
			},
			error: function()
			{
				$.Msg( "Failed to get video data" );
			}
		}
    );
}

function StopVideo()
{
    var data = { entityid: gTopPanel.GetOwnerEntityID(), videoid: gVideoID };
    GameEvents.SendCustomGameEventToAllClients( "Vimeo_StopVideo", data );
}

function PlayVideo()
{
    var data = { entityid: gTopPanel.GetOwnerEntityID(), videoid: gVideoID, seconds: gPlayer.m_currentTime };
    GameEvents.SendCustomGameEventToAllClients( "Vimeo_PlayVideo", data );
}

function PauseVideo()
{
    var data = { entityid: gTopPanel.GetOwnerEntityID(), videoid: gVideoID, seconds: gPlayer.m_currentTime  };
    GameEvents.SendCustomGameEventToAllClients( "Vimeo_PauseVideo", data );
}

function SeekVideo()
{
    if ( gPlayer && gPlayer.m_seekbar.mousedown )
    {
		var data = { entityid: gTopPanel.GetOwnerEntityID(), videoid: gVideoID, seconds: gPlayer.m_seekbar.value };
		GameEvents.SendCustomGameEventToAllClients( "Vimeo_SeekVideo", data );
    }
}

var CVimeoPlayer = (function()
{
    function CVimeoPlayer( browser, seekbar )
    {
		this.m_browser = browser;
		this.m_seekbar = seekbar;
		this.m_seekbar.SetValueNoEvents( 0 );
		this.m_seekbar.min = 0;
		this.m_seekbar.max = 1;
		this.m_seekbar.increment = 1;
		this.m_seekbar.default = 0;
		this.m_bPlaying = false;
		this.m_currentTime = 0;
		this.m_duration = 0;
    };
    
    CVimeoPlayer.prototype.LoadVideo = function( url )
    {
		this.m_currentTime = 0;
		this.m_bPlaying = false;
		this.m_browser.SetURL( url );

		this.UpdateTime();
    }
    
    CVimeoPlayer.prototype.SetDuration = function( seconds )
    {
		this.m_duration = seconds;
		this.m_seekbar.max = seconds;
    }

    CVimeoPlayer.prototype.UpdateTime = function()
    {
		var flUpdateInterval = 1;
		if ( this.m_bPlaying )
		{
			this.m_currentTime += flUpdateInterval;
			this.m_seekbar.SetValueNoEvents( this.m_currentTime );
			if ( this.m_currentTime > this.m_duration )
			{
				this.m_bPlaying = false;
				this.SeekToTime( 0 );
			}
		}
		
		var that = this;
		this.m_scheduledID = $.Schedule( flUpdateInterval, function() { that.UpdateTime() } );
    };
    
    CVimeoPlayer.prototype.PlayVideo = function( seconds )
    {
		this.m_bPlaying = true;
		this.SeekToTime( seconds );
		this.m_browser.RunJavascript( "playVideo();" );
    };

    CVimeoPlayer.prototype.StopVideo = function()
    {
		this.m_bPlaying = false;
		this.m_currentTime = 0;
		this.m_seekbar.SetValueNoEvents( 0 );
		this.m_browser.RunJavascript( "stopVideo();" );
    };
    
    CVimeoPlayer.prototype.PauseVideo = function( seconds )
    {
		this.m_bPlaying = false;
		this.SeekToTime( seconds );
		this.m_browser.RunJavascript( "pauseVideo();" );
    };

    CVimeoPlayer.prototype.SeekToTime = function( seconds )
    {
		this.m_currentTime = seconds;
		this.m_browser.RunJavascript( "seekToTime( " + seconds + " );" );
		if ( this.m_seekbar.value != seconds )
		{
			this.m_seekbar.SetValueNoEvents( seconds );
		}
    };

    return CVimeoPlayer;
} )();

function OnStopVideo( data )
{
    if ( gTopPanel.GetOwnerEntityID() != data.entityid )
		return;
    
    gPlayer.StopVideo();
}

function OnPlayVideo( data )
{
    if ( gTopPanel.GetOwnerEntityID() != data.entityid )
		return;

    gPlayer.PlayVideo( data.seconds );
}

function OnPauseVideo( data )
{
    if ( gTopPanel.GetOwnerEntityID() != data.entityid )
		return;
    
    gPlayer.PauseVideo( data.seconds );
}

function OnSeekVideo( data )
{
    if ( gTopPanel.GetOwnerEntityID() != data.entityid )
		return;
    
    gPlayer.SeekToTime( data.seconds );
}

function OnLoad()
{
    $.Msg( "Loading video data" );

    gTopPanel = $( "#client_ui_panel" );
    
    var browser = $( "#Browser" );
    var seekbar = $( "#SeekBar" );
    gPlayer = new CVimeoPlayer( browser, seekbar );
    
    // register for events
    GameEvents.Subscribe( "Vimeo_StopVideo", OnStopVideo );
    GameEvents.Subscribe( "Vimeo_PlayVideo", OnPlayVideo );
    GameEvents.Subscribe( "Vimeo_PauseVideo", OnPauseVideo );
    GameEvents.Subscribe( "Vimeo_SeekVideo", OnSeekVideo );

    // test
    ShowVideo( "76979871" );
}
