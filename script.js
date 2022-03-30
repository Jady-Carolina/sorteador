const btnSortear  = document.querySelector(".botaoSortear")
const textarea    = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado")
const popUpResultado = document.querySelector(".resultado")
const texto = document.querySelector(".parte1")
const voltar = document.querySelector('.voltar');
const btnBack = document.querySelector('#back');

//PEGANDO DADOS DO FOMRULÁRIO
function pegarDadosFormulario(){
    
    //RECUPERANDO VALOR DO CAMPO (TEXTAREA)
    const valorCampo  = textarea.value
    const listaNomes  = valorCampo.split(",")
    const tamanhoArray= listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome        = listaNomes[posicaoNome]
    console.log(posicaoNome);
    console.log(listaNomes[posicaoNome])
    mostrarResultado(nome)

    textarea.value = ""
    
}

//INTERCEPTANDO O CLIQUE / EXECUTANDO FUNÇÃO
btnSortear.addEventListener("click", pegarDadosFormulario)

//GERANDO NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(tamanhoArray){
    //RETORNA O NÚMERO
    return  Math.floor(Math.random() * (tamanhoArray - 1) + 0)

}

function mostrarResultado(nome){

    texto.style.display = "none";

    tagResultado.innerText = `Resultado: ${nome}`
    voltar.style.display = 'block'
    btnBack.addEventListener("click", voltandoPagina);
}

function voltandoPagina(){
    location.reload();

}

function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")

}
