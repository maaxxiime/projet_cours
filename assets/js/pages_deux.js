function myCard() {
    let input = document.getElementById('nom').value;
    let inputt = document.getElementById('name').value;
    let inputs = document.getElementById('date').value;
    let inputtt = document.getElementById('sexe').value;
    let inputss = document.getElementById('prescripteur').value;
    let td = document.createElement('td');
    let tdd = document.createElement('td');
    let ttd = document.createElement('td');
    let ttdd = document.createElement('td');
    let dd = document.createElement('td');
    let zone = document.createTextNode(input);
    let zon = document.createTextNode(inputt);
    let zonn = document.createTextNode(inputs);
    let zonne = document.createTextNode(inputtt);
    let zozo = document.createTextNode(inputss);
    let but = document.getElementById("button");

    td.appendChild(zone);
    tdd.appendChild(zon);
    ttd.appendChild(zonn);
    ttdd.appendChild(zonne);
    dd.appendChild(zozo);

    if(input === ""){
        alert("Veuillez remplir le champ")
    }else{
        alert("Vos Informations ont bien été enregistrée")
        document.getElementById('tbe').appendChild(td);
        console.log(td)
    }
    
    if(inputt === ""){
        alert("Veuillez remplir le champ")
    }else {
        document.getElementById('tr').appendChild(tdd);
        console.log(tdd);
    }

    if(inputs === ""){
        alert("Veuillez remplir le champ")
    }else{
        document.getElementById('tr').appendChild(ttd);
        console.log(ttd);
    }

    if(inputtt === ""){
        alert("Veuillez remplir le champ")
    }else{
        document.getElementById('tr').appendChild(ttdd);
        console.log(ttdd);
    }

    if(inputss === ""){
        alert("Veuillez remplir le champ")
    }else{
        document.getElementById('tr').appendChild(dd);
        console.log(dd);
        but.style.display = "none";

    }
    
    document.getElementById("nom").value = '';
    let span = document.createElement('span');
    td.appendChild(span);

    document.getElementById("name").value = '';
    let spann = document.createElement('span');
    tdd.appendChild(spann);

    document.getElementById("date").value = '';
    let spaan = document.createElement('span');
    ttd.appendChild(spaan);

    document.getElementById("sexe").value = '';
    let spane = document.createElement('span');
    ttdd.appendChild(spane);

    document.getElementById("prescripteur").value = '';
    let spa = document.createElement('span');
    dd.appendChild(spa);

    for (i = 0; i < del.length; i++ ) {
        del[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    } 
    
}

let del = document.getElementsByClassName("del");

for (i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}