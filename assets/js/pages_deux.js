function myCard() {
    // let table = document.getElementById("tbe").value;
    let input = document.getElementById('nom').value;
    let inputt = document.getElementById('name').value;
    let inputs = document.getElementById('date').value;
    let inputtt = document.getElementById('sexe').value;
    let inputss = document.getElementById('prescripteur').value;
    let td = document.createElement('td');
    let zone = document.createTextNode(input);
    td.appendChild(zone);

    if( input === "" || inputt === "" || inputs === "" || inputtt === "" || inputss === ""){
        alert("Veuillez remplir le champ")
    }else{
        alert("Vos Informations ont bien été enregistrée")
        document.getElementById('tbe').appendChild(td);
        console.log(td);
    }
    
    document.getElementById("nom").value = '';
    let span = document.createElement('span');
    td.appendChild(span);

    document.getElementById("name").value = '';
    let spann = document.createElement('span');
    td.appendChild(spann);

    document.getElementById("date").value = '';
    let spaan = document.createElement('span');
    td.appendChild(spaan);

    document.getElementById("sexe").value = '';
    let spane = document.createElement('span');
    td.appendChild(spane);

    document.getElementById("prescripteur").value = '';
    let spa = document.createElement('span');
    td.appendChild(spa);

    for (i = 0; i < del.length; i++ ) {
        del[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    } 
}

let global = document.getElementsByTagName('TD');

for (let i = 0; i < global.length; i++) {
    let span = document.createElement("span");
    span.className = "del";
    global[i].appendChild(span);
}

let del = document.getElementsByClassName("del");

for (i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}