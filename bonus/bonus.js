/*
Bonus:
In una cartella bonus:
Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
Poi aggiungiamo un pulsante per aumentare questo numero.
: githubparrot:
11
*/

var app = new Vue ({
    el: '#app',
    data: {
    message: 'Messaggio per il bonus',
    text: '',
    place: 'Inserisci qualcosa',
    num: 5
},
    methods: {
        aggiungi: function () {
            this.num += 1;
            document.getElementById("remove").disabled = false; 
        },
        rimuovi: function () {
            if (this.num != 0) {
                this.num -= 1;
            }
            else document.getElementById("remove").disabled = true; 
        }
    }
})













