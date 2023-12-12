function generet() {
    let i = document.querySelector("#i").value;
    let ii = document.querySelector("#ii").value;
    let iii = document.querySelector("#iii").value;
    let iiii = document.querySelector("#iiii").value;
    
    let story =`Reiz dzīvoja vīrs vārdā ${i}. Viņam ļoti garšoja ${ii}. Kad viņš ēda ${ii} viņš jutās ${iii}. Reiz viņam apriebās ${ii}, jo ${iiii}`
    
    document.querySelector("#text").innerText = story;

    if(i == "" || ii == "" || iii == "" || iiii == "") {
        alert("Kāds lauciņš ir tukšs!")
    } else {
        document.querySelector("#text").style.display = "block";
        document.querySelector("#text").innerText = story;
    }
}
function stop() {
    document.querySelector("#text").style.display = "none";
    document.querySelector("#i").value = "";
    document.querySelector("#ii").value = "";
    document.querySelector("#iii").value = "";
    document.querySelector("#iiii").value = "";
}
