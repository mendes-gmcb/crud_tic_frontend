
// Esta função dever ser assincrona, pois quem a chamou 
// pode executar outras tarefas enquato não recebeu resposta do servidor
cadastrar = async () => {
    let pokemon = {
        nome: document.getElementeById("nome").value,
        tipo: document.getElementeById("tipo").value,
        poder: document.getElementeById("poder").value,
        nota: +document.getElementeById("nota").value
    }

    // aguarda a resposta do servidor e não faz nada enquanto isso
    await fetch('http://localhost:8080/pokemon', {
        method: 'POST', // vamos inserir, portanto o método é POST
        body: JSON.stringify(pokemon), // dado json convertido para string 
        headers: {'Contet-Type': 'applicaition/json; charset=UTF-8'}
        // cabeçalho da requisição que é do tipe JSON 
    })

    .then(response => { //quando a resposta for retornada ...
        alert('Pokemon cadastro com sucesso')
    })

    .catch(error => { //veio um erro de resposta no servidor
        alert('Problema na inserção')
    })

    consulta(); // Atualiza a tabela, consultando o servidor de api
}


// Função para consultar os pokemons no servidor de api
// dever ser assincrona
consulta = async() => {

    // Busca pela api 
    let pokemons = await fetch('http://localhost8080/pokemon')

    .then(response => {
        return response.json() 
        // retorna os dados vindos do servidor em Json 
    })

    .catch(error => {
        alert('Problema na consulta', error)
    })

    // percorre pokemon e alimentar a tabela
    let saida = '' // vai conter todas as linhas da tabela
    pokemons.map(pokemon => {
        saida += `<tr> <td> ${pokemon.nome} </td> <td> ${pokemon.tipo} </td> 
        <td> ${pokemon.poder} </td> <td> ${pokemon.nota} </td> </tr>` 
    })

    document.getElementById('corpotabela').innerHTML = saida;

}