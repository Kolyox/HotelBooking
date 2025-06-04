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

