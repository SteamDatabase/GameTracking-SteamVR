"use strict";

function OnCacheStateChanged( data )
{
	if ( data.state === 1 )
	{
		$("#InstructionText").text = $.Localize( "#VR_PropTool_CacheFinder_Find" );
		$("#CacheFinderImages").SetHasClass( "locateCacheState", true );
		$("#CacheFinderImages").SetHasClass( "retrieveCacheState", false );
		$("#CacheFinderImages").SetHasClass( "openCacheState", false );
	}
	else if ( data.state === 2 )
	{
		$("#InstructionText").text = $.Localize( "#VR_PropTool_CacheFinder_Pull" );
		$("#CacheFinderImages").SetHasClass( "retrieveCacheState", true );
		$("#CacheFinderImages").SetHasClass( "locateCacheState", false );
		$("#CacheFinderImages").SetHasClass( "openCacheState", false );
	}

	else if ( data.state === 3 )
	{
		$("#InstructionText").text = $.Localize( "#VR_PropTool_CacheFinder_Catch" );
		$("#CacheFinderImages").SetHasClass( "openCacheState", true );
		$("#CacheFinderImages").SetHasClass( "retrieveCacheState", false );
		$("#CacheFinderImages").SetHasClass( "locateCacheState", false );
	}
	else if ( data.state === 4 )
	{
		$("#InstructionText").text = $.Localize( "#VR_PropTool_CacheFinder_Captured" );
		$("#CacheFinderImages").SetHasClass( "cacheCaptured", true );
		$("#CacheFinderImages").SetHasClass( "openCacheState", false );
		$("#CacheFinderImages").SetHasClass( "retrieveCacheState", false );
		$("#CacheFinderImages").SetHasClass( "locateCacheState", false );
	}
}

function OnCaptureStateChanged( data )
{
	//$.Msg( "UpdateProgress: ", data );
	var width = data.progress;
	if (width < 100)
	{
		$("#ProgressBar").style.width = width + '%';
	}
	if (width > 2)
	{
		$("#ProgressPanel").SetHasClass( "progress_visible", true );
		$("#InstructionPanel").SetHasClass( "progress_visible", true );
	}
}

(function()
{
	GameEvents.Subscribe( "cache_state", OnCacheStateChanged );
	GameEvents.Subscribe( "capture_state", OnCaptureStateChanged );
})();

