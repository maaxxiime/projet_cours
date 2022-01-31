function connexion() {
    let id = document.getElementById("iduser").value;
    let pass = document.getElementById("passworduser").value;
    let i = "toto";
    let p = "azerty";

    if (id == i && pass == p) {
        alert("connexion réussi");
        window.location.href = './assets/pages/page_deux.html'; //fait le lien vers une nouvelle page

    } else if (id == i && pass != p) {
        alert("mot de passe incorrect");

    } else if (id != i && pass == p) {
        alert("identifiant incorrect");
    } 
}