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
}

function enfantmoins(){
    let input = document.getElementById("enfant");
    let value = parseInt(input.value);

    if (value>0){
        input.value-=1;
    }
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





