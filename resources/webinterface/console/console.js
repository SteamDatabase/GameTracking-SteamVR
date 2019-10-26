//==================================================================================================
// (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
//==================================================================================================

var g_Console = new CConsole();

$(document).ready(
	function()
	{
		g_Console.OnReady();
	});

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
function CConsole()
{
	this.m_nInstanceId = 0;
	this.m_bShowLogName = false;
	this.m_bShowDate = true;
	this.m_bEnterKeyDown = false;
	this.m_LogLinks = { };
	this.m_LogConsoles = { };
	this.m_LogLines = { };
	this.m_aCommandHistory = [ ];
	this.m_nCommandHistoryIdx = -1;
	this.m_sCurrentCommand = "";
	this.m_elTopPanel = null;
	this.m_elBottomPanel = null;
	this.m_observerTopPanel = null;
	this.m_elBottomPanelObserver = null;
	this.m_bAllowConsoleSelectorHiding = false;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnReady = function()
{
	g_Console.m_elConsoleParent = document.getElementById( "console_parent" );
	g_Console.m_elShowLogNameCheckbox = document.getElementById( "console_show_logname" );
	g_Console.m_elShowDateCheckbox = document.getElementById( "console_show_date" );
	g_Console.m_elFilterText = document.getElementById( "filter_text" );
	g_Console.m_elConsoleCommand = document.getElementById( "console_command" );
	g_Console.m_elConsoleSelector = document.getElementById( "console_selector" );
	g_Console.m_elConsoleSelectorButton = document.getElementById( "console_selector_button" );
	g_Console.m_elConsoleClearLog = document.getElementById( "console_clear_log" );
	g_Console.m_elConsoleClearAllLogs = document.getElementById( "console_clear_all_logs" );
	g_Console.m_elConsoleSelectorButton = document.getElementById( "console_selector_button" );

	g_Console.m_elConsoleSelectorButton.onclick = function() { g_Console.ShowConsoleSelector() };
	g_Console.m_elConsoleClearLog.onclick = function() { g_Console.ClearLog() };
	g_Console.m_elConsoleClearAllLogs.onclick = function() { g_Console.ClearAllLogs() };
	g_Console.m_elShowLogNameCheckbox.onclick = function() { g_Console.OnToggleShowLogName() };
	g_Console.m_elShowDateCheckbox.onclick = function() { g_Console.OnToggleShowDate() };

	let sShowLogName = localStorage.getItem( "showlogname" );
	if ( sShowLogName != undefined )
	{
		g_Console.m_bShowLogName = ( sShowLogName == "1" ? true : false );
	}
	$( g_Console.m_elShowLogNameCheckbox ).prop( "checked", g_Console.m_bShowLogName );

	let sShowDate = localStorage.getItem( "showdate" );
	if ( sShowDate != undefined )
	{
		g_Console.m_bShowDate = ( sShowDate == "1" ? true : false );
	}
	$( g_Console.m_elShowDateCheckbox ).prop( "checked", g_Console.m_bShowDate );

	window.addEventListener( "resize", g_Console.OnResize );

	document.addEventListener( "click", g_Console.OnClick )
	window.addEventListener( "keydown", g_Console.OnKeyDown );

	g_Console.m_elConsoleCommand.addEventListener( "keyup", g_Console.OnCommandKeyUp );
	g_Console.m_elConsoleCommand.addEventListener( "keydown", g_Console.OnCommandKeyDown );

	g_Console.m_elFilterText.addEventListener( "input", g_Console.OnFilterTextChange );

	g_Console.AddLogConsole( "Combined" );
	g_Console.SetActiveLog( "Combined" );

	g_Console.ClearAllLogs();
	g_Console.OpenWebSocketToHost();

	var history = localStorage.getItem( "commandHistory" );
	if ( history )
	{
		g_Console.m_aCommandHistory = JSON.parse( history );
	}

	setInterval( g_Console.On1SecondUpdateInterval, 1000 );

	g_Console.m_elTopPanel = document.getElementById( "page_top_panel" );
	g_Console.m_elBottomPanel = document.getElementById( "page_bottom_panel" );

	var observerConfig = { childList: true, subtree: true };
	var onMutation = function( mutationsList, observer ) { g_Console.UpdateVerticalMargins(); }.bind( g_Console );

	g_Console.m_observerTopPanel = new MutationObserver( onMutation );
	g_Console.m_elBottomPanelObserver = new MutationObserver( onMutation );

	g_Console.m_observerTopPanel.observe( g_Console.m_elTopPanel, observerConfig );
	g_Console.m_elBottomPanelObserver.observe( g_Console.m_elBottomPanel, observerConfig );

	g_Console.UpdateVerticalMargins();
	g_Console.UpdateBodyClasses();

	g_Console.m_elConsoleCommand.focus();
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.UpdateVerticalMargins = function( mutationsList, observer )
{
	if ( g_Console.m_elTopPanel === null || g_Console.m_elBottomPanel === null || g_Console.m_elConsoleParent === null )
	{
		return;
	}

	let nAdditionalPadding = 15;
	g_Console.m_elConsoleParent.style.paddingTop = ( nAdditionalPadding + g_Console.m_elTopPanel.clientHeight ) + "px";
	g_Console.m_elConsoleParent.style.paddingBottom =( nAdditionalPadding + g_Console.m_elBottomPanel.clientHeight ) + "px";
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnNewServerInstance = function()
{
	g_Console.SetActiveLog( "Combined" );

	g_Console.ClearAllLogs();
	g_Console.OpenWebSocketToHost();
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.On1SecondUpdateInterval = function()
{
	$.ajax(
	{
		url: "/console_ping.action",
		dataType: "json",
		timeout: 100,
		success: function( json )
		{
			if ( json != undefined )
			{
				let nInstanceId = Number( json[ "sInstanceId" ] );
				if ( Number.isInteger( nInstanceId ) && ( nInstanceId > 0 ) )
				{
					let nLastInstanceId = g_Console.m_nInstanceId;
					g_Console.m_nInstanceId = nInstanceId;
					if ( nLastInstanceId && nInstanceId != nLastInstanceId )
					{
						g_Console.OnNewServerInstance();
					}
				}
			}
		}
	});
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OpenWebSocketToHost = function()
{
	g_Console.m_wsWebSocketToServer = new WebSocket( "ws://localhost:" + location.port );
	g_Console.m_wsWebSocketToServer.addEventListener( "open", g_Console.OnWebSocketOpen );
	g_Console.m_wsWebSocketToServer.addEventListener( "message", g_Console.OnWebSocketMessage );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnWebSocketOpen = function( event )
{
	g_Console.WebSocketSend( "console_open" );

	window.addEventListener(
		"beforeunload",
		function()
		{
			g_Console.WebSocketSend( "console_close" );
		} );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.WebSocketSend = function( sData )
{
	if ( g_Console.m_wsWebSocketToServer == undefined )
		return;

	if ( g_Console.m_wsWebSocketToServer.readyState != 1 )
		return;

	g_Console.m_wsWebSocketToServer.send( sData );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnWebSocketMessage = function( event )
{
	let jsonMessage = JSON.parse( event.data );

	if ( !( "sType" in jsonMessage ) )
			return;

	if ( jsonMessage[ "sType" ] == "logmessage" )
	{
		g_Console.OnLogMessage( jsonMessage );
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.AddLogToConsoleSelector = function( sLogName )
{
	if ( sLogName in g_Console.m_LogLinks )
		return;

	let nIndex = g_ConsoleHeaderOrder.indexOf( sLogName );
	if ( nIndex == -1 )
		nIndex = 999999;

	let elNewElement = document.createElement( "div" );

	$( elNewElement ).data( "sLogName", sLogName );
	$( elNewElement ).data( "nIndex", nIndex );

	$( elNewElement ).toggleClass( "log_link", true );
	elNewElement.style.setProperty( "--log_link_color", g_Console.GetLogColor( sLogName ) );

	elNewElement.addEventListener( "click", () =>
	{
		g_Console.SetActiveLog( sLogName );
		g_Console.OnFilterTextChange();
	} );

	elNewElement.innerHTML = sLogName;

	g_Console.m_LogLinks[ sLogName ] = elNewElement;

	let elReferenceNode = undefined;
	for ( let i = 0; i < g_Console.m_elConsoleSelector.children.length; i++ )
	{
		if ( nIndex <= $( g_Console.m_elConsoleSelector.children[ i ] ).data( "nIndex" ) )
		{
			elReferenceNode = g_Console.m_elConsoleSelector.children[ i ];
			break;
		}
	}
	g_Console.m_elConsoleSelector.insertBefore( elNewElement, elReferenceNode );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.UpdateLogLinkLabel = function( sLogName )
{
	let elLink = g_Console.m_LogLinks[ sLogName ];
	elLink.innerHTML = "<span class='label'>" + g_Console.GetLogDisplayName( sLogName ) + "</span>";

	if ( g_Console.m_LogLines[ sLogName ] )
	{
		elLink.innerHTML += "<span class='badge'>" + g_Console.m_LogLines[ sLogName ] + "</span>";
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.AddLogConsole = function( sLogName )
{
	if ( sLogName in g_Console.m_LogConsoles )
		return;

	g_Console.AddLogToConsoleSelector( sLogName );

	let elNewConsole = document.createElement( "div" );
	$( elNewConsole ).attr( "id", "console" );
	$( elNewConsole ).data( "sLogName", sLogName );

	g_Console.m_LogConsoles[ sLogName ] = elNewConsole;
	g_Console.m_LogLines[ sLogName ] = 0;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.AddLogMessageToConsole = function( sLogName, jsonLogMessage )
{
	if ( sLogName == undefined )
		return;

	let elConsole = g_Console.m_LogConsoles[ sLogName ];
	if ( elConsole == undefined )
		return;

	let bScrolledToBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight <= document.documentElement.scrollTop + 1;

	let regexDatePrefix = /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s[0-9]{2}\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}/i;
	let regexHyphenPrefix = / \- /i;
	let regexSubsystemPrefix = /^\s\-\s\[(.*?)\]/i;

	let elNewElement = document.createElement( "div" );
	$( elNewElement ).toggleClass( "row", true );

	let nTimestamp = jsonLogMessage[ "nTimestamp" ];
	$( elNewElement ).data( "nTimestamp", nTimestamp );

	elNewElement.innerHTML = "<div class='row logname'>" + jsonLogMessage["sLogName"] + "</div>";

	jsonLogMessage[ "sMessage" ] = jsonLogMessage[ "sMessage" ].replace( /</g, "&lt;" );
	jsonLogMessage[ "sMessage" ] = jsonLogMessage[ "sMessage" ].replace( />/g, "&gt;" );

	let sSystemName = jsonLogMessage[ "sLogName" ];
	let dateMatches = jsonLogMessage[ "sMessage" ].match( regexDatePrefix );
	if ( dateMatches != undefined )
	{
		let sStripped = jsonLogMessage[ "sMessage" ].slice( dateMatches[0].length );
		let systemMatches = sStripped.match( regexSubsystemPrefix );
		if ( systemMatches != undefined && systemMatches[1] != undefined )
		{
			let sAlternateName = "[" + systemMatches[1] + "]";
			if ( sAlternateName in g_ConsoleColors )
			{
				sSystemName = sAlternateName;
			}
		}
	}

	var sMessage = jsonLogMessage[ "sMessage" ];
	sMessage = sMessage.replace( regexDatePrefix, "<span class='row date'>"+"$&"+"</span>" );
	sMessage = sMessage.replace( regexHyphenPrefix, "<span class='row hyphen'>"+"$&"+"</span>" );
	elNewElement.innerHTML += sMessage;

	let sFilter = g_Console.m_elFilterText.value.toLowerCase();
	if ( sFilter.length !== 0 && elNewElement.innerText.toLowerCase().indexOf( sFilter ) < 0 )
	{
		elNewElement.classList.add( "hidden" );
	}

	if ( jsonLogMessage[ "sLogLevel" ] == "warning" )
	{
		$( elNewElement ).toggleClass( "warning", true );
	}
	else if ( jsonLogMessage[ "sLogLevel" ] == "error" )
	{
		$( elNewElement ).toggleClass( "error", true );
	}
	else if ( sSystemName in g_ConsoleColors )
	{
		$( elNewElement ).css( "color", "rgb(" + g_ConsoleColors[ sSystemName ] + ")" );
	}

	if ( !nTimestamp || ( elConsole.children.length == 0 ) || ( nTimestamp >= $( elConsole.children[ elConsole.children.length - 1 ] ).data( "nTimestamp" ) ) )
	{
		elConsole.appendChild( elNewElement );
	}
	else if ( nTimestamp <= $( elConsole.children[ 0 ] ).data( "nTimestamp" ) )
	{
		elConsole.insertBefore( elNewElement, elConsole.children[ 0 ] );
	}
	else
	{
		let elReferenceNode = undefined;
		for ( let i = elConsole.children.length - 1; i >= 0; i-- )
		{
			if ( nTimestamp >= $( elConsole.children[ i ] ).data( "nTimestamp" ) )
			{
				elReferenceNode = elConsole.children[ i + 1 ];
				break;
			}
		}
		elConsole.insertBefore( elNewElement, elReferenceNode );
	}

	if ( bScrolledToBottom )
	{
		document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	}

	g_Console.m_LogLines[ sLogName ]++;
	g_Console.UpdateLogLinkLabel( sLogName );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.IsActiveLog = function( sLogName )
{
	let elNewActiveLink = g_Console.m_LogLinks[ sLogName ];
	if ( elNewActiveLink == undefined )
		return false;

	let elNewConsole = g_Console.m_LogConsoles[ sLogName ];
	if ( elNewConsole == undefined )
		return false;

	if ( g_Console.m_elConsole != elNewConsole )
		return false;

	return true;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.GetLogDisplayName = function( sLogName )
{
	if ( sLogName == "Combined" )
	{
		return "All Logs";
	}

	return sLogName;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.GetLogColor = function( sLogName )
{
	let sLogColor = g_ConsoleColors[ sLogName ];
	if ( sLogColor == undefined )
	{
		sLogColor = "255, 255, 255";
	}

	return sLogColor;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.SetActiveLog = function( sLogName )
{
	if ( g_Console.IsActiveLog( sLogName ) )
	{
		g_Console.SetScrollToBottom();
		return;
	}

	let elNewActiveLink = g_Console.m_LogLinks[ sLogName ];
	let elNewConsole = g_Console.m_LogConsoles[ sLogName ];

	let headerLinks = document.querySelectorAll( ".log_link" );
	for ( let elLink of headerLinks )
	{
		$( elLink ).toggleClass( "active", false );
	}

	$( elNewActiveLink ).toggleClass( "active", true );

	if ( g_Console.m_elConsole != undefined )
	{
		g_Console.m_elConsole.remove();
	}

	g_Console.m_elConsoleParent.appendChild( elNewConsole );
	g_Console.m_elConsole = elNewConsole;

	g_Console.m_elConsoleSelectorButton.innerHTML = g_Console.GetLogDisplayName( sLogName );
	g_Console.m_elConsoleSelectorButton.style.setProperty( "--log_link_color", g_Console.GetLogColor( sLogName ) );

	let evResize = new Event( "resize" );
	window.dispatchEvent( evResize );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnLogMessage = function( jsonLogMessage )
{
	if ( g_Console.m_elConsole == undefined )
		return;

	if ( jsonLogMessage[ "sMessage" ] == undefined )
		return;

	let sLogName = jsonLogMessage[ "sLogName" ];
	if ( sLogName == undefined )
		return;

	g_Console.AddLogConsole( sLogName );
	g_Console.AddLogMessageToConsole( "Combined", jsonLogMessage );
	if ( sLogName != "Combined" )
	{
		g_Console.AddLogMessageToConsole( sLogName, jsonLogMessage );
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnResize = function()
{
	g_Console.UpdateVerticalMargins();
	g_Console.SetScrollToBottom();
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnClick = function()
{
	if ( g_Console.m_bAllowConsoleSelectorHiding )
	{
		g_Console.HideConsoleSelector();
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.SetScrollToBottom = function()
{
	document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnKeyDown = function( event )
{
	if ( event.key != "Enter" )
	{
		g_Console.HideConsoleSelector();
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnCommandKeyUp = function( event )
{
	if ( event.key != "Enter" )
		return;

	g_Console.m_bEnterKeyDown = false;
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnCommandKeyDown = function( event )
{
	var nPreviousCommandHistoryIdx = g_Console.m_nCommandHistoryIdx;

	var commandStr = $( g_Console.m_elConsoleCommand ).val();

	if ( event.key == "ArrowUp" || event.key == "ArrowDown" )
	{
		if ( event.key == "ArrowUp" )
		{
			g_Console.m_nCommandHistoryIdx++;
			if ( g_Console.m_nCommandHistoryIdx >= g_Console.m_aCommandHistory.length ) {
				g_Console.m_nCommandHistoryIdx = g_Console.m_aCommandHistory.length - 1;
			}
		}
		else
		{
			g_Console.m_nCommandHistoryIdx--;
			if ( g_Console.m_nCommandHistoryIdx < -1 ) {
				g_Console.m_nCommandHistoryIdx = -1;
			}
		}

		if ( g_Console.m_nCommandHistoryIdx !== nPreviousCommandHistoryIdx )
		{
			if ( g_Console.m_nCommandHistoryIdx >= 0 )
			{
				if ( nPreviousCommandHistoryIdx == -1 )
				{
					g_Console.m_sCurrentCommand = commandStr;
				}
				$( g_Console.m_elConsoleCommand ).val( g_Console.m_aCommandHistory[ g_Console.m_nCommandHistoryIdx ] );
			}
			else
			{
				$( g_Console.m_elConsoleCommand ).val( g_Console.m_sCurrentCommand );
			}
		}

		return;
	}

	if ( event.key != "Enter" || g_Console.m_bEnterKeyDown )
		return;

	g_Console.m_bEnterKeyDown = true;

	g_Console.SetActiveLog( "Combined" );

	if ( commandStr.length === 0 )
		return;

	if ( g_Console.m_nCommandHistoryIdx >= 0 )
	{
		if ( g_Console.m_aCommandHistory[ g_Console.m_nCommandHistoryIdx ] != commandStr ) {
			g_Console.m_nCommandHistoryIdx = -1;
		}
	}

	// Don't add to history if command is the same as the most recent command. We don't need consecutive duplicates.
	if ( g_Console.m_aCommandHistory.length == 0 || g_Console.m_aCommandHistory[ 0 ] != commandStr )
	{
		g_Console.m_aCommandHistory.unshift( commandStr );
		localStorage.setItem( "commandHistory", JSON.stringify( g_Console.m_aCommandHistory ) );
	}

	g_Console.m_nCommandHistoryIdx = -1;
	g_Console.m_sCurrentCommand = "";

	$.ajax(
	{
		url: "/console_command.action",
		data: { "sCommand": commandStr },
		dataType: "json",
		timeout: 100,
		success: function( json )
		{
			if ( json[ "sError" ] != undefined )
			{
				let jsonErrorMessage = { };
				jsonErrorMessage[ "nTimeout" ] = 0;
				jsonErrorMessage[ "sLogName" ] = "Combined";
				jsonErrorMessage[ "sLogLevel" ] = "error";
				jsonErrorMessage[ "sMessage" ] = "Command Rejected: " + "(" + json[ "sError" ] + ") " + $( g_Console.m_elConsoleCommand ).val();
				g_Console.OnLogMessage( jsonErrorMessage );
			}
		},
		complete: function( jqXHR, sTextStatus )
		{
			let sCommand = $( g_Console.m_elConsoleCommand ).val();
			$( g_Console.m_elConsoleCommand ).val( "" );

			if ( sTextStatus != "success" )
			{
				if ( sCommand == "restart" )
				{
					location.href = "steamvr://start";
				}
				else if ( sCommand == "restart vrserver" )
				{
					location.href = "steamvr://vrserver";
				}
				else
				{
					let jsonErrorMessage = { };
					jsonErrorMessage[ "nTimeout" ] = 0;
					jsonErrorMessage[ "sLogName" ] = "Combined";
					jsonErrorMessage[ "sLogLevel" ] = "error";
					jsonErrorMessage[ "sMessage" ] = "Command Failed To Send: " + "(" + sTextStatus + ") " + sCommand;
					g_Console.OnLogMessage( jsonErrorMessage );
				}
			}
		}
	});
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnFilterTextChange = function( event )
{
	let bScrolledToBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight <= document.documentElement.scrollTop + 1;

	let sFilter = g_Console.m_elFilterText.value.toLowerCase();

	let rows = g_Console.m_elConsole.children;
	for ( let i = 0; i < rows.length; i++ )
	{
		let row = rows[ i ];
		if ( sFilter.length === 0 || row.innerText.toLowerCase().indexOf( sFilter ) >= 0 )
		{
			row.classList.remove( "hidden" );
		}
		else
		{
			row.classList.add( "hidden" );
		}
	}

	if ( bScrolledToBottom )
	{
		document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.HideConsoleSelector = function()
{
	g_Console.m_bAllowConsoleSelectorHiding = false;
	g_Console.m_elConsoleSelector.classList.add( "hidden" );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.ShowConsoleSelector = function()
{
	g_Console.m_elConsoleSelector.classList.remove( "hidden" );

	let rectBtn = g_Console.m_elConsoleSelectorButton.getBoundingClientRect();
	g_Console.m_elConsoleSelector.style.setProperty( "--drop-down-left", rectBtn.x + "px" );
	g_Console.m_elConsoleSelector.style.setProperty( "--drop-down-top", rectBtn.y + "px" );

	setTimeout( () =>
	{
		if ( !g_Console.m_elConsoleSelector.classList.contains( "hidden" ) )
		{
			g_Console.m_bAllowConsoleSelectorHiding = true;
		}
	}, 100 );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.ToggleConsoleSelector = function()
{
	if ( g_Console.m_elConsoleSelector.classList.contains( "hidden" ) )
	{
		g_Console.ShowConsoleSelector();
	}
	else
	{
		g_Console.HideConsoleSelector();
	}
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.ClearAllLogs = function()
{
	Object.keys( g_Console.m_LogLines ).forEach( function( key )
	{
		g_Console.m_LogLines[ key ] = 0;
		g_Console.UpdateLogLinkLabel( key );
    });

	Object.keys( g_Console.m_LogConsoles ).forEach( function( key )
	{
		let elConsole = g_Console.m_LogConsoles[ key ];
		while ( elConsole.firstChild )
		{
			elConsole.removeChild( elConsole.firstChild );
		}
    });
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.ClearLog = function()
{
	while ( g_Console.m_elConsole.firstChild )
	{
		g_Console.m_elConsole.removeChild( g_Console.m_elConsole.firstChild );
	}

	let sLogName = $( g_Console.m_elConsole ).data( "sLogName" );
	g_Console.m_LogLines[ sLogName ] = 0;
	g_Console.UpdateLogLinkLabel( sLogName );
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnToggleShowLogName = function()
{
	g_Console.m_bShowLogName = $( g_Console.m_elShowLogNameCheckbox ).is( ":checked" );
	localStorage.setItem( "showlogname", g_Console.m_bShowLogName ? "1" : "0" );

	g_Console.UpdateBodyClasses();
	g_Console.OnFilterTextChange();
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.OnToggleShowDate = function()
{
	g_Console.m_bShowDate = $( g_Console.m_elShowDateCheckbox ).is( ":checked" );
	localStorage.setItem( "showdate", g_Console.m_bShowDate ? "1" : "0" );

	g_Console.UpdateBodyClasses();
	g_Console.OnFilterTextChange();
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
CConsole.prototype.UpdateBodyClasses = function()
{
	let bScrolledToBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight <= document.documentElement.scrollTop + 1;

	document.body.classList = [];

	if ( g_Console.m_bShowLogName )
	{
		document.body.classList.add( "show-log-name" );
	}

	if ( g_Console.m_bShowDate )
	{
		document.body.classList.add( "show-log-date" );
	}

	if ( bScrolledToBottom )
	{
		document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	}
}