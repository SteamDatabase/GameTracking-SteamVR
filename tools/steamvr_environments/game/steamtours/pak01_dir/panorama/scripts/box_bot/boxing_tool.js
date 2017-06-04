"use strict";

function OnToolStateChanged( data )
{
	if ( data.state === 1 )
	{
		$("#InstructionText").text = $.Localize( " ATTACK TARGET" );
	}
	else if ( data.state === 2 )
	{
		$("#InstructionText").text = $.Localize( "CHILL OUT" );
	}

	else if ( data.state === 3 )
	{
		$("#InstructionText").text = $.Localize( "#VR_PropTool_CloneMode" );
	}
	else if ( data.state === 4 )
	{
		$("#InstructionText").text = $.Localize( "#VR_PropTool_DeleteMode" );
	}
}

function OnObjectStateChanged( data )
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
	GameEvents.Subscribe( "tool_state", OnToolStateChanged );
	GameEvents.Subscribe( "object_state", OnObjectStateChanged );
})();

