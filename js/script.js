const ingresotexto = document.getElementById("ingresotexto");
const botonencriptar = document.getElementById("botonencriptar");
const botondesencriptar = document.getElementById("botondesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const mensajefinal = document.getElementById("mensajefinal");
const munheco = document.getElementById("munheco");
const rigtinfo = document.getElementById("rigtinfo");
const right = document.getElementById("right");


//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajefinal.innerHTML = nuevoValor

   munheco.classList.add("oculto");
    ingresotexto.value="";
    rigtinfo.style.display = "none";
    botoncopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");
}

const reset = () => {
    mensajefinal.innerHTML = "";
    munheco.classList.remove("oculto");
    rigtinfo.style.display = "block";
    botoncopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    ingresotexto.focus();
}

botonencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase()
    if(texto != ""){
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText
        };
    } else {
        alert("Ingrese texto a encriptar")
        reset();
    }
    //const textoEncriptado = encriptar(texto)//
    remplace(encriptar(texto));
});

botondesencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText
        };
    } else {
        alert("Ingrese texto a Desencriptar")
        reset();
    }
    remplace(desencriptar(texto))  
})

botoncopiar.addEventListener("click", () => {
    let texto = mensajefinal;
   // navigator.clipboard.writeText(texto.value);//
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    reset();
})
