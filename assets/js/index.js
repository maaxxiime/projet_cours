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
    }
    document.getElementById("inpt").value = "";



    let span = document.createElement('span');
    let dtxt = document.createTextNode('\u00D7');
    span.className = 'del';
    span.appendChild(dtxt);
    list.appendChild(span);

    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
let myNodelist = document.getElementsByTagName('LI');
let i;
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let dtxt = document.createTextNode("\u00D7");
    span.className = 'del';
    span.appendChild(dtxt);
    myNodelist[i].appendChild(span);
}

let del = document.getElementsByClassName('del');
for (i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        console.log(div);
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


function dark() {
    let element = document.body;
    element.classList.toggle("dark");
}