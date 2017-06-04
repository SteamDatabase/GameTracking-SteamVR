"use strict";

function OnStateChanged( data )
{
	if ( data.state === 0 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Patio_Default" );
	}
	else if ( data.state === 1 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Patio_Furniture" );
	}
	else if ( data.state === 2 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Patio_Statue" );
	}
	else if ( data.state === 3 )
	{
		$("#DescriptionText").text = $.Localize( "#VRHome_Patio_Bar" );
	}
}

(function()
{
	GameEvents.Subscribe( "patio_state", OnStateChanged );
})();

