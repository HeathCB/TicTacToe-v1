let player1Score = 0;
let player2Score = 0;
let turn = 1;

startGame();
checkWin();
checkTie();
restartGame();
hideAlerts();

function hideAlerts() {
$( "#winAlert" ).hide();
$( "#tieAlert" ).hide();
}



function checkWin( val ) {
    if ( $( ".row-1 .box." + val ).length === 3 
    || $( ".row-2 .box." + val ).length === 3 
    || $( ".row-3 .box." + val ).length === 3 
    || $( ".colm-1." + val ).length === 3
    || $( ".colm-2." + val ).length === 3
    || $( ".colm-3." + val ).length === 3
    || ($( "#0" ).hasClass( val ) &&
         $( "#4" ).hasClass( val ) &&
         $( "#8" ).hasClass( val ) )
    || ($( "#2" ).hasClass( val ) &&  
         $( "#4" ).hasClass( val) &&
         $( "#6" ).hasClass( val ) )
    ){  
        $( "#winAlert" ).show();
        $( ".box" ).empty();
        $( ".X" ).removeClass( "X" );
        $( ".O" ).removeClass( "O" );
        return true;
    }
}

function checkTie() {
    if( $( ".X" ).length + $( ".O" ).length === 9 ) {
        $( ".box" ).empty();
        $( ".X" ).removeClass( "X" );
        $( ".O" ).removeClass( "O" );
        $( "#tieAlert" ).show();
    }
    
}


function startGame() {
    $( ".box" ).on( "click", function() {
        hideAlerts();
    if( turn == 1 && !$( this ).text() ) {
        $( this ).text( "X" );
        $( this ).addClass( "X" );
        turn = 2;
        checkWin();
        if( checkWin( "X" ) ) {
            player1Score++;
            $( "#player1wins" ).text( player1Score );
            
        } else  checkTie();
    } else if( !$( this ).text() ) {
        $( this ).text( "O" );
        $( this ).addClass( "O" );
        turn = 1;
        checkWin();
        if( checkWin( "O" ) ) {
            player2Score++;
            $( "#player2wins" ).text( player2Score );
        } else checkTie();

    }
    $( "#turn" ).text( turn );
    } );
}

function restartGame() {
    $( "#restartButton" ).on( "click", function() {
    turn = 1;
    $( "#turn" ).text( turn );
    $( ".box" ).empty();
    $( ".X" ).removeClass( "X" );
    $( ".O" ).removeClass( "O" );
    hideAlerts();
    
    }); 
}