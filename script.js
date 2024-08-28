// Función para encriptar el texto 
function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/E/g, "ENTER")
                               .replace(/i/g, "imes")
                               .replace(/I/g, "IMES")
                               .replace(/a/g, "ai")
                               .replace(/A/g, "AI")
                               .replace(/o/g, "ober")
                               .replace(/O/g, "OBER")
                               .replace(/u/g, "ufat")
                               .replace(/U/g, "UFAT");
    document.getElementById("output-text").value = textoEncriptado;
}

// Función para desencriptar el texto encriptado
function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/ENTER/g, "E")
                                  .replace(/imes/g, "i")
                                  .replace(/IMES/g, "I")
                                  .replace(/ai/g, "a")
                                  .replace(/AI/g, "A")
                                  .replace(/ober/g, "o")
                                  .replace(/OBER/g, "O")
                                  .replace(/ufat/g, "u")
                                  .replace(/UFAT/g, "U");
    document.getElementById("output-text").value = textoDesencriptado;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
