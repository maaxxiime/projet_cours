function myCard() {
    // let table = document.getElementById("tbe").value;
    let input = document.getElementById('nom').value;
    let td = document.createElement('td');
    let zone = document.createTextNode(input);
    td.appendChild(zone);

    if( input === ""){
        alert("Veuillez remplir le champs")
    }else{
        alert("Vos Informations ont bien été enregistrée")
        document.getElementById('tbe').appendChild(td);
        console.log(td);
    }
    
    document.getElementById("nom").value = '';
    let span = document.createElement('span');
    let txt = document.createTextNode('/u00D7');
    span.appendChild(txt);
    td.appendChild(span);

    for (i = 0; i < del; i++ ) {
        del[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
    
}