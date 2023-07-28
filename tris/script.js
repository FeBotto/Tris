var turno = "X";
var vetTabella = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

var oriz1 = 0;
var oriz2 = 1;
var oriz3 = 2;
var vert1 = 0;
var vert2 = 3;
var vert3 = 6;
var cont = 0;
var celle = document.getElementsByClassName("blocco");

function scelta(blocco){
    if(vetTabella[blocco] == ""){
        vetTabella[blocco] = turno;
        for (let i in celle){
            celle[i].innerText = vetTabella[i];
        }
        cont = 0;
        for(let i in vetTabella){
            if(vetTabella[i] == "X" || vetTabella[i] == "O"){
                cont++;
            }
        }
        if(cont == 9){
            alert("Pareggio!!!");
            lol();
        }

        oriz1 = 0
        oriz2 = 1;
        oriz3 = 2;
        vert1 = 0;
        vert2 = 3;
        vert3 = 6;
        for(let i=0; i<3; i++){
			if(vetTabella[oriz1]==turno && vetTabella[oriz2]==turno && vetTabella[oriz3]==turno){
                alert("Vittoria giocatore: " + turno);
                lol();
            }
            if(vetTabella[vert1]==turno && vetTabella[vert2]==turno && vetTabella[vert3]==turno){
                alert("Vittoria giocatore: " + turno);
                lol();
            }
            oriz1+=3;
            oriz2+=3;
            oriz3+=3;
            vert1+=1;
            vert2+=1;
            vert3+=1;
        }
        if(vetTabella[0]==turno && vetTabella[4]==turno && vetTabella[8]==turno){
            alert("Vittoria giocatore: " + turno);
            lol();
        }
        if(vetTabella[6]==turno && vetTabella[4]==turno && vetTabella[2]==turno){
            alert("Vittoria giocatore: " + turno);
            lol();
        }            
        if(turno == "X"){
            turno = "O";
        }
        else if(turno == "O"){
            turno = "X";
        }
    }
}

function lol(){
    window.location.reload();
}