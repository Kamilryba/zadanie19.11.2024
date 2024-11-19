var imie = document.getElementById("name");
var nazwisko = document.getElementById("nazwisko");
var Numer = document.getElementById("Numer_telefonu");
var mail = document.getElementById("Adres_e-mail");
var pesel = document.getElementById("pesel");
var hasło = document.getElementById("hasło");
var powtorz = document.getElementById("powtorz_hasło");


function submitnow(){
    if (!imie.value) {
        alert("Wpisz imię");
    }
    else if(!nazwisko.value){
        alert("Wpisz swoje nazwisko");
    }
    else if(!Numer.value){
        alert("wpisz Numer Telefonu");
    }
    else if(!mail.value){
        alert("Wpisz swuj email");
    }
    else if(!pesel.value){
        alert("Wpisz pesel");
    }
    else if(!hasło.value){
        alert("Wpisz hasło");
    }
    else if(!powtorz.value){
        alert("Wpisz hasło ponownie");
    }
    else if (Numer.value.length !== 9) {
        alert("Numer telefonu musi mieć dokładnie 9 cyfr.");
    }
    else if (!/^\d{9}$/.test(Numer.value)) {
        alert("Numer telefonu musi zawierać tylko cyfry.");
    }
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail.value)) {
        alert("Email niepoprawny.");
    } 
    else if (pesel.value.length !== 11) {
        alert("pesel  musi mieć dokładnie 11 cyfr.");
    } 
    else if (hasło.value.length < 8) {
        alert("Hasło musi mieć co najmniej 8 znaków.");
    }
    else if (!/(?=.*\d)/.test(hasło.value)) {
        alert("hasło ma mieć liczbę.");
    }
     else if (hasło.value != powtorz.value) {
        alert("hasła nie są takie same");
    } 
    else{
        alert("gratulacje wszystko poprawne");
    }


}