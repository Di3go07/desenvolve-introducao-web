//BOTÃO INTEGRANTES

const button = document.getElementById('botãoIntegrante');
const proximo = document.getElementById('proximo');
const voltar = document.getElementById('voltar');
const listaMusicas = document.getElementById('listaMusicas')


button.addEventListener("click", buscarIntegrante);

function buscarIntegrante() {
    const escolha = document.querySelector('#integrante').value;
    const imagem = document.querySelector('#imagemIntegrante');
    if (escolha == 'Rodrigo') {
        dados = ["Rodrigo Alves Lima", "Nascimento: Vitória, 6 de fevereiro de 1973", "Ocupação: Vocalista e compositor", "Atividade: 1991 - atualmente"];
        imagem.src = 'https://github.com/Di3go07/desenvolve-introducao-web/blob/main/Tributo/imagens/vocal_card.png?raw=true';
        preencherCampos(dados);
    }
    else if (escolha == 'Ric') {
        dados = ["Ricardo 'Ric' Mastria Takeuti", "Nascimento: São Paulo, 29 de julho de 1985", "Ocupação: Guitarrista", "Atividade: 2013 - atualmente"];
        imagem.src = 'https://github.com/Di3go07/desenvolve-introducao-web/blob/main/Tributo/imagens/guitarra_card.png?raw=true';
        preencherCampos(dados);
    }
    else if (escolha == 'Marcao') {
        dados = ["Marcão Melloni", "Nascimento: São Paulo, 20 de novembro de 1971", "Ocupação: Baterista", "Atividade: 2009 - atualmente"];
        preencherCampos(dados);
        imagem.src = 'https://github.com/Di3go07/desenvolve-introducao-web/blob/main/Tributo/imagens/bateria.png?raw=true';
    }
    else if (escolha == 'Igor') {
        dados = ["Igor 'Moderno' Tsurumaki", "Nascimento: Não encontrado", "Ocupação: Baixista", "Atividade: 2018 - atualmente"];
        imagem.src = 'https://github.com/Di3go07/desenvolve-introducao-web/blob/main/Tributo/imagens/baixo_card.png?raw=true';
        preencherCampos(dados);
    }
    function preencherCampos(infos) {
        document.getElementById("Nome").innerText = infos[0];
        document.getElementById("Nascimento").innerText = infos[1];
        document.getElementById("Ocupação").innerText = infos[2];
        document.getElementById("Atividade").innerText = infos[3];
    }
}


//CUSTOMIZAÇÃO
const atrasaMudancas = () => 
    setTimeout(() => {
        const elemento = document.getElementsByTagName('h1');
        elemento[0].style.fontSize = '80px';
        elemento[0].style.color = 'red';
        button.style.cursor = 'pointer';
        proximo.style.cursor = 'pointer';
        voltar.style.cursor = 'pointer';

    }, 3000);

atrasaMudancas();


//BOTÃO MUSICAS

let i = 0;

const chamarProximo = () => { 
    i++;
    voltar.disabled = false
    if (i == 1) { 
        const novasMusicas = ['Zero e Um', 'Dentes Amarelos', 'Você', 'Doutrina do Choque', 'Roubando Comida'];
        for (li = 0; li < novasMusicas.length; li++) { 
            const musica = listaMusicas.querySelectorAll('li')[li];
            musica.innerText = novasMusicas[li];
        }
    }
    if (i == 2) { 
        const novasMusicas = ['Tão Iguais', 'A Urgência', 'Não Termina Assim','Avenida Maruípe', 'Contra Todos'];
        for (li = 0; li < novasMusicas.length; li++) { 
            const musica = listaMusicas.querySelectorAll('li')[li];
            musica.innerText = novasMusicas[li];
        }
    }
    if (i >= 2) { 
        proximo.disabled = true;
    }
    console.log(i)

};

const chamarVoltar = () => {
    proximo.disabled = false;
    i--;
    if (i == 0) { 
        const novasMusicas = ['Queda Livre', 'Sonho Médio', 'Gigante Inseguro', '49', 'Sangue nas Mãos'];
        for (li = 0; li < novasMusicas.length; li++) { 
            const musica = listaMusicas.querySelectorAll('li')[li];
            musica.innerText = novasMusicas[li];
        }
    }
    if (i == 1) { 
        const novasMusicas = ['Zero e Um', 'Dentes Amarelos', 'Você', 'Doutrina do Choque', 'Roubando Comida'];
        for (li = 0; li < novasMusicas.length; li++) { 
            const musica = listaMusicas.querySelectorAll('li')[li];
            musica.innerText = novasMusicas[li];
        }
    }
    if (i == 2) { 
        const novasMusicas = ['Tão Iguais', 'A Urgência', 'Não Termina Assim','Avenida Maruípe', 'Contra Todos'];
        for (li = 0; li < novasMusicas.length; li++) { 
            const musica = listaMusicas.querySelectorAll('li')[li];
            musica.innerText = novasMusicas[li];
        }
    }
    if (i == 0) { 
        voltar.disabled = true;
    }
    console.log(i)

};