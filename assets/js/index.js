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



function add_3() {
    let texte = document.getElementById("inpt").value;
    let list = document.createElement("li");
    let text = document.createTextNode(texte);
    list.appendChild(text);

    if (texte === "") {
        alert("champ vide");

    } else {
        document.getElementById("liste").appendChild(list);
        liste.style.display = "block"
        document.getElementById("inpt").value = "";
    }
}



function deconnexion() {
    alert("vous avez été déconnectée");
    window.location.href = '/index.html'; //fait le lien vers une nouvelle page
}



function delete_3() {
    window.location.reload();
}
l.onclick = function(){delete_3()};