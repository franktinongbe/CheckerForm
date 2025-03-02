 document.getElementById("inscription").addEventListener("submit", function(event){
event.preventDefault();

const nom=document.getElementById("nom").value;
const prenom=document.getElementById("prenom").value;
const date=document.getElementById("nom").value;
const number=document.getElementById("number").value;
const motivation=document.getElementById("motivation").value;

const birthYear= new date(date).getFullYear();
const currentYear= new date().getFullYear();
const age= currentYear-birthYear;
if(age<18) {
alert("il vous faut avoir 18 ans avant de vous inscrire");
return;
}

const phoneRegex= /^01\d{8}$/;
if (!phoneRegex.test(phone)){
    alert("Votre numéro n'est pas compatible commencez par 01 et doit contenir 10 chiffres");
    return;
}

if (motivation.length<1000){
    alert("votre texte doit contenir au minimum 1000 caractères et 2500 au maximum");
    return;
}
if (motivation>2500){
    alert("votre texte doit contenir au minimum 1000 caractères et 2500 au maximum");
    return;
}

document.getElementById("resNom").textContent=nom;
document.getElementById("resPrenoms").textContent=prenom;
document.getElementById("resDate de Naissance").textContent=date;
document.getElementById("resNumero de téléphone").textContent=number;
document.getElementById("resMotivation").textContent=motivation;
document.getElementById("result").classList.remove("hidden");
alert("Inscription réussie !");
});

