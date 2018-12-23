function abre(){  
    if (document.getElementById("abre_e_fecha").style.display == "flex")
    {
        document.getElementById("abre_e_fecha").style.display = "none";
        document.getElementById("thebutton").textContent = "Saiba Mais";
    }
    else {
        document.getElementById("abre_e_fecha").style.display = "flex";
        document.getElementById("thebutton").textContent = "Fechar";
    }
}

function showmail()
{
    document.getElementById("mailline").style.display = "flex";
    document.getElementById("mailbutton").style.display = "none";

}