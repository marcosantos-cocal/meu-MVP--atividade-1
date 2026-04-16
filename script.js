const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
}

formulario.addEventListener('submit', validarFormulario);

const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');
    
    // Altera o texto do botão conforme o tema
    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);

const meusProjetos = [
    {
        titulo: "Projeto 01 - Meu Portfólio",
        descricao: "Meu portfólio de apresentação feito com HTML, CSS e JavaScript.",
        link: "https://github.com/marcosantos-coca/portfolio"
    },
    {
        titulo: "Projeto 02 - MercadoLivreCOCAL",
        descricao: "Site de compra e venda de produtos, feito com tecnologias modernas.",
        link: "https://github.com/marcosantos-coca/mercadolivre-cocal"
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();