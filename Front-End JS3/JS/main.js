function Check(){
    let kredit = document.getElementById('mebleg').value;
    let zaman = document.getElementById('ay').value
    let faiz = Number(document.getElementById("faiz").value);
    
    let ayliq_mebleg=(((((deyer*faiz)/100)*zaman)/12)+deyer)/zaman;
    let faiz_derecesi=((((deyer*faiz)/100)*zaman)/12);
    let ayliq_od=document.getElementById("ayliq_odenis");
    ayliq_od.innerHTML= ayliq_mebleg+" azn";
    ayliq_od.style.display="inline";
}

