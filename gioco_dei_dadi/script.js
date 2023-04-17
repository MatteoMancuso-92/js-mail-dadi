function gioca() {
// Genera un numero random da 1 a 6 per il giocatore
var giocatore = Math.floor(Math.random() * 6) + 1;
        
// Genera un numero random da 1 a 6 per il computer
var computer = Math.floor(Math.random() * 6) + 1;
        
// Determina il vincitore
var vincitore;
if (giocatore > computer) {
  vincitore = "Giocatore";
  } else if (computer > giocatore) {
  vincitore = "Computer";
  } else {
  vincitore = "Nessuno";
}
        
// Mostra il risultato
var risultato = "Il Giocatore ha ottenuto " + giocatore + "<br>Il Computer ha ottenuto " + computer + "<br><br>Il vincitore è: " + vincitore;
document.getElementById("risultato").innerHTML = risultato;
}