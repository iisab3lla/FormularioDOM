const informacoesPessoais = document.getElementById('dadosPessoais');

informacoesPessoais.addEventListener('submit', function (evento) {

    evento.preventDefault()

    const infPessois = {
        nome: informacoesPessoais.nome.value,
        endereco: informacoesPessoais.endereco.value,
        cidade: informacoesPessoais.cidade.value,
        estado: informacoesPessoais.estado.value,
        naturezaDeCargo: informacoesPessoais.cargo.value

    }

    console.log(infPessois)
});

informacoesPessoais.addEventListener('reset', function(){
    alert('Redefinido!')
    informacoesPessoais.reset()
});
