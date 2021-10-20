/* generazione della password utente */


/* chedi all'utente il suo nome */

let nome = prompt("Inserisci il tuo nome");
console.log(nome);

/* chiedi all'utente il suo cognome */

let cognome = prompt("Inserisci il tuo cognome")
console.log(cognome);

/* chiedi all'utente il suo colore preferito */

let colore = prompt("Inserisci il tuo colore preferito")
console.log(colore);

/* password generata */

let password = nome + cognome + colore + 21;
console.log(password);

/* generazione password su desktop */
/* document.getElementById("password_utente").innerHTML = "La password assegnata è: " + nome + cognome + colore + 21; */

document.getElementById("password_utente").innerHTML = "La password assegnata è: " + password;