const listaSelecaoPokedev = document.querySelectorAll (".pokedev");
listaSelecaoPokedev.forEach (pokedev =>{    
    console.log(pokedev);
    pokedev.addEventListener("click", () => {
        EsconderCartaoPokedev();
        const idPokedevSelecionado = MostrarCartaoPokedevSelecionado(pokedev);
        EsconderPokedevDaListagem();
        AtivarPokedevNaListagem(idPokedevSelecionado);
    })
})

function AtivarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function EsconderPokedevDaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function MostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function EsconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
