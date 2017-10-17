"use strict";

var gbRequestedDetails = false;

function OnLoadDetailsPanel()
{
	// schedule this, because we don't have the panel attributes yet
	$.Schedule( 0.01, function() {
		LoadDetails();
	} );
}

function LoadDetails()
{
	var panel = $( "#SteamToursUGCImage" );
	panel.LoadDetails();
}
