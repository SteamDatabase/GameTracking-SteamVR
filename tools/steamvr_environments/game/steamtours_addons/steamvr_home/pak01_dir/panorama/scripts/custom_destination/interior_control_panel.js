"use strict";

function OnStateChanged( data )
{
	if ( data.state === 0 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Config_Default" );
	}
	else if ( data.state === 1 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Config_LivingRoom" );
	}

	else if ( data.state === 2 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Config_Bedroom" );
	}
	else if ( data.state === 3 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Config_Office" );
	}
}

(function()
{
	GameEvents.Subscribe( "room_state", OnStateChanged );
})();

