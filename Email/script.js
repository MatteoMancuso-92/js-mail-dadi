// array con le email autorizzate ad accedere
var listaAutorizzati = ["email1@example.com", "email2@example.com", "email3@example.com"];

// chiedi all'utente di inserire la sua email
var emailUtente = prompt("Inserisci la tua email:");

// controlla se l'email inserita dall'utente è nella lista degli autorizzati
if (listaAutorizzati.includes(emailUtente)) {
  // l'utente è autorizzato ad accedere
  console.log("L'accesso è consentito. Benvenuto/a " + emailUtente + "!");
} else {
    // l'utente non è autorizzato ad accedere
  console.log("Spiacente, non sei autorizzato/a ad accedere.");
}