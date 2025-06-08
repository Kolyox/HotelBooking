function chambreplus() {
    let input = document.getElementById("chambre");
    input.value = parseInt(input.value) + 1;
}

function chambremoins(){
    let input = document.getElementById("chambre");
    let value = parseInt(input.value);
    /*condition pour eviter d'aller dans des valeurs negatives */
    if (value>0){
        input.value-=1;
    }
}

function adulteplus() {
    let input = document.getElementById("adulte");
    input.value = parseInt(input.value) + 1;
}


function adultemoins(){
    let input = document.getElementById("adulte");
    let value = parseInt(input.value);
    if (value>0){
        input.value-=1;
    }
}



function enfantplus() {
    let input = document.getElementById("enfant");
    input.value = parseInt(input.value) + 1;
    ajouterage();
}

function enfantmoins(){
    let input = document.getElementById("enfant");
    let value = parseInt(input.value);
    if (value>0){
        input.value-=1;
    }
    ajouterage();
}


function effacerChamps() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = "";
  });
  
  const zero = document.querySelectorAll("#enfant,#chambre,#adulte");
    zero.forEach(input => {
    input.value = "0";
  });

  document.getElementById("voyage").checked = false;
}





function rechercher(){

    const lieu = document.getElementById("lieu").value;
    document.getElementById("place").innerHTML=lieu;

    const nbadulte = document.getElementById("adulte").value;
    document.getElementById("nbadulte").innerHTML=nbadulte;

    const nbenfant = document.getElementById("enfant").value;
    document.getElementById("nbenfant").innerHTML=nbenfant;

    const nbchambre = document.getElementById("chambre").value;
    document.getElementById("nbchambre").innerHTML=nbchambre;

    const datearrivee = document.getElementById("date_arrivee").value;
    document.getElementById("arriver").innerHTML = datearrivee;

    const datedepart = document.getElementById("date_depart").value;
    document.getElementById("depart").innerHTML = datedepart;


    if (document.getElementById("voyage").checked == true){
        document.getElementById("travail").innerHTML="Oui";
    }else{
        document.getElementById("travail").innerHTML="Non";
    }    
}




function ajouterage() {
    const nbenfants = parseInt(document.getElementById("enfant").value);
    const sectionage = document.getElementById("zone-age");

    // supprime les anciennes lignes ajouté
    sectionage.innerHTML = ""; 

    // ajouter des nouvelles lignes en fonction de la valeur de l'input du nombre d'enfants
    for (let i = 1; i <= nbenfants; i++) {
        const ligne = document.createElement("tr");
        ligne.innerHTML =
            `<td>Âge ${i}</td>
            <td colspan="3">
                <div class="d-flex justify-content-center align-items-center">
                    <input type="number" class="form-control w-50" min="0" max="18">
                </div>
            </td>
        `;
        sectionage.appendChild(ligne);
    }
}


