"use strict";

function OnStateChanged( data )
{
	if ( data.state === 0 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_Default" );
	}
	else if ( data.state === 1 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_SaltFlats" );
	}
	else if ( data.state === 2 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_Cheerful" );
	}
	else if ( data.state === 3 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_Night" );
	}
	else if ( data.state === 4 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_SteamVR" );
	}
	else if ( data.state === 5 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_Badwater" );
	}
	else if ( data.state === 6 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_BadwaterNight" );
	}
	else if ( data.state === 7 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_Dunes" );
	}
	else if ( data.state === 8 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Sky_Plateau" );
	}
}

(function()
{
	GameEvents.Subscribe( "environment_state", OnStateChanged );
})();

