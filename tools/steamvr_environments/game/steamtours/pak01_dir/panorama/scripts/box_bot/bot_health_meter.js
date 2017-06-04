"use strict";

function ReplaceSubtitle( data )
{
	//$.Msg( "Data", data );
	var newSubtitle = data.health;
	var token = "#";
	var newString = token.concat(newSubtitle);
	$.Msg( "Subtitle = '", newString, "'" );
	$("#TutorialText").text = $.Localize( newString );
}



function ChangeSubtitlePanel( data )
{
	$.Msg( "Data", data );
	var bIsHidden = data.state;
	if ( bIsHidden == 0 )
	{
		$.GetContextPanel().SetHasClass( "Hidden", true );
	}
	else if ( bIsHidden == 1 )
	{
		$.GetContextPanel().SetHasClass( "Activated", true );
	}
}



function ChangeSubtitleFontSize( data )
{
	$.Msg( "Data", data );
	var bIsBig = data.size;
	if ( bIsBig == 0 )
	{
		$.GetContextPanel().SetHasClass( "Small", true );
	}
	else if ( bIsBig == 1 )
	{
		$.GetContextPanel().SetHasClass( "Big", true );
	}
}


(function()
{
	GameEvents.Subscribe( "health", ReplaceSubtitle );
	//GameEvents.Subscribe( "state", ChangeSubtitlePanel );
	//GameEvents.Subscribe( "size", ChangeSubtitleFontSize );
})();

