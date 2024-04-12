async function buscar(){
    console.log("Passei por aqui");

    const resposta = await fetch("https://660f44af356b87a55c510d49.mockapi.io/agendas");
    const respostaDadosAgenda= await resposta.json()

    console.log("Resposta:", respostaDadosAgenda);

    const cards= document.getElementById("cards_games")

    //percorre os elementos da resposta, passa por cada item que percorre a respostaAgenda (array)
    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        return "TESTE "
    }); 

}
console.log("antes de buscar")
buscar();
console.log("depois de buscar")