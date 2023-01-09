function encriptar(){
    //Ocultando imagen y mostrando div de resultado encriptado
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto_resultado").style.display = "inline";
    document.getElementById("texto_mensaje_title").style.display = "none";
    document.getElementById("texto_mensaje_parrafo").style.display = "none";
    document.getElementById("btn_copiar").style.display = "inline";
    document.getElementById("btn_borrar").style.display = "inline";

    //buscando letras y reemplazando

    
    const textoInicial = document.getElementById("textoRecibido").value;
    var nuevotexto = textoInicial.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    


    //Mostrando texto encriptado en el div final
    document.getElementById("texto_resultado").value = nuevotexto;

    
    
}

function desencriptar(){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto_resultado").style.display = "inline";
    document.getElementById("texto_mensaje_title").style.display = "none";
    document.getElementById("texto_mensaje_parrafo").style.display = "none";
    document.getElementById("btn_copiar").style.display = "inline";
    document.getElementById("btn_borrar").style.display = "inline";

     //buscando texto a desencriptar

    
     const textoInicial = document.getElementById("textoRecibido").value;
     var nuevotexto = textoInicial.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
     
 
 
     //Mostrando texto encriptado en el div final
     document.getElementById("texto_resultado").value = nuevotexto;
 
     
}


function copiar() {       
    var content = document.getElementById('texto_resultado');
    content.select();
    document.execCommand('copy');
  } 


function encriptar2(){
    //Ocultando imagen y mostrando div de resultado encriptado
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto_resultado").style.display = "inline";

    //buscando letras y reemplazando
    const regex = ["/e/g","/i/g"];
    const textoInicial = document.getElementById("textoRecibido").value;

    const nuevotexto = textoInicial.replace(regex, ["enter","imes"]);

    //Mostrando texto encriptado en el div final
    document.getElementById("texto_resultado").value = nuevotexto;

    
    
} 