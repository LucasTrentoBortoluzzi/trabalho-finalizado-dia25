// =========================================
// BANCO DE FILMES
// =========================================

const filmes = [

  // =========================
  // COMÉDIA
  // =========================

  {
    titulo: "Todo Mundo em Pânico",
    genero: "comedia",
    nota: "6.3",
    ano: "2000",
    diretor: "Keenen Ivory Wayans",
    ondeAssistir: "Prime Video",
    descricao: "Um grupo de adolescentes se envolve em situações absurdas enquanto tenta escapar de um assassino mascarado."
  },

  {
    titulo: "Anjos da Lei",
    genero: "comedia",
    nota: "7.2",
    ano: "2012",
    diretor: "Phil Lord e Christopher Miller",
    ondeAssistir: "Prime Video",
    descricao: "Dois policiais atrapalhados se infiltram em uma escola para investigar uma quadrilha de drogas."
  },

  {
    titulo: "As Férias de Mr. Bean",
    genero: "comedia",
    nota: "6.4",
    ano: "2007",
    diretor: "Steve Bendelack",
    ondeAssistir: "Prime Video",
    descricao: "Mr. Bean ganha uma viagem para a França e transforma uma simples viagem em uma sequência de confusões."
  },

  {
    titulo: "Debi & Lóide",
    genero: "comedia",
    nota: "7.3",
    ano: "1994",
    diretor: "Peter Farrelly e Bobby Farrelly",
    ondeAssistir: "Prime Video",
    descricao: "Dois amigos extremamente atrapalhados embarcam em uma viagem para devolver uma maleta perdida."
  },

  {
    titulo: "O Máskara",
    genero: "comedia",
    nota: "7.0",
    ano: "1994",
    diretor: "Chuck Russell",
    ondeAssistir: "Max",
    descricao: "Um homem tímido encontra uma máscara misteriosa que transforma sua personalidade e lhe dá poderes incríveis."
  },

  {
    titulo: "Click",
    genero: "comedia",
    nota: "6.4",
    ano: "2006",
    diretor: "Frank Coraci",
    ondeAssistir: "Netflix",
    descricao: "Um homem encontra um controle remoto mágico capaz de controlar o tempo."
  },

  {
    titulo: "Escola de Rock",
    genero: "comedia",
    nota: "7.2",
    ano: "2003",
    diretor: "Richard Linklater",
    ondeAssistir: "Paramount+",
    descricao: "Um músico desempregado se passa por professor e transforma seus alunos em uma banda de rock."
  },


  // =========================
  // AÇÃO
  // =========================

  {
    titulo: "John Wick: De Volta ao Jogo",
    genero: "acao",
    nota: "7.4",
    ano: "2014",
    diretor: "Chad Stahelski",
    ondeAssistir: "Prime Video",
    descricao: "Um lendário assassino aposentado volta à ação depois que criminosos invadem sua casa."
  },

  {
    titulo: "Vingadores: Ultimato",
    genero: "acao",
    nota: "8.4",
    ano: "2019",
    diretor: "Anthony Russo e Joe Russo",
    ondeAssistir: "Disney+",
    descricao: "Os Vingadores restantes precisam encontrar uma maneira de reverter os acontecimentos causados por Thanos."
  },

  {
    titulo: "Homem de Ferro",
    genero: "acao",
    nota: "7.9",
    ano: "2008",
    diretor: "Jon Favreau",
    ondeAssistir: "Disney+",
    descricao: "Tony Stark constrói uma armadura tecnológica e se transforma em herói."
  },

  {
    titulo: "Missão: Impossível - Efeito Fallout",
    genero: "acao",
    nota: "7.7",
    ano: "2018",
    diretor: "Christopher McQuarrie",
    ondeAssistir: "Paramount+",
    descricao: "Ethan Hunt precisa impedir uma ameaça global."
  },

  {
    titulo: "Top Gun: Maverick",
    genero: "acao",
    nota: "8.2",
    ano: "2022",
    diretor: "Joseph Kosinski",
    ondeAssistir: "Paramount+",
    descricao: "Um experiente piloto retorna à academia Top Gun para treinar uma nova geração."
  },

  {
    titulo: "Duro de Matar",
    genero: "acao",
    nota: "8.2",
    ano: "1988",
    diretor: "John McTiernan",
    ondeAssistir: "Disney+",
    descricao: "Um policial enfrenta criminosos que tomam um arranha-céu."
  },

  {
    titulo: "300",
    genero: "acao",
    nota: "7.6",
    ano: "2006",
    diretor: "Zack Snyder",
    ondeAssistir: "Max",
    descricao: "O rei Leônidas lidera 300 guerreiros espartanos contra o exército persa."
  },


  // =========================
  // ROMANCE
  // =========================

  {
    titulo: "Diário de uma Paixão",
    genero: "romance",
    nota: "7.8",
    ano: "2004",
    diretor: "Nick Cassavetes",
    ondeAssistir: "Netflix",
    descricao: "Um casal de origens diferentes vive uma intensa história de amor."
  },

  {
    titulo: "Como Eu Era Antes de Você",
    genero: "romance",
    nota: "7.4",
    ano: "2016",
    diretor: "Thea Sharrock",
    ondeAssistir: "Prime Video",
    descricao: "Uma jovem começa a trabalhar como cuidadora e desenvolve uma relação especial com seu paciente."
  },

  {
    titulo: "La La Land",
    genero: "romance",
    nota: "8.0",
    ano: "2016",
    diretor: "Damien Chazelle",
    ondeAssistir: "Netflix",
    descricao: "Uma atriz e um músico se apaixonam enquanto tentam realizar seus sonhos."
  },

  {
    titulo: "10 Coisas que Eu Odeio em Você",
    genero: "romance",
    nota: "7.3",
    ano: "1999",
    diretor: "Gil Junger",
    ondeAssistir: "Disney+",
    descricao: "Um adolescente é contratado para conquistar uma garota considerada difícil."
  },

  {
    titulo: "Simplesmente Acontece",
    genero: "romance",
    nota: "7.1",
    ano: "2014",
    diretor: "Christian Ditter",
    ondeAssistir: "Prime Video",
    descricao: "Dois melhores amigos enfrentam relacionamentos e desencontros."
  },

  {
    titulo: "P.S. Eu Te Amo",
    genero: "romance",
    nota: "7.0",
    ano: "2007",
    diretor: "Richard LaGravenese",
    ondeAssistir: "Prime Video",
    descricao: "Uma jovem viúva recebe cartas deixadas pelo marido."
  },

  {
    titulo: "Antes do Amanhecer",
    genero: "romance",
    nota: "8.1",
    ano: "1995",
    diretor: "Richard Linklater",
    ondeAssistir: "Max",
    descricao: "Dois jovens se conhecem em um trem e passam uma noite caminhando por Viena."
  },


  // =========================
  // ANIMAÇÃO
  // =========================

  {
    titulo: "Toy Story",
    genero: "animacao",
    nota: "8.3",
    ano: "1995",
    diretor: "John Lasseter",
    ondeAssistir: "Disney+",
    descricao: "Brinquedos ganham vida quando seus donos não estão por perto."
  },

  {
    titulo: "O Rei Leão",
    genero: "animacao",
    nota: "8.5",
    ano: "1994",
    diretor: "Roger Allers e Rob Minkoff",
    ondeAssistir: "Disney+",
    descricao: "Um jovem leão precisa enfrentar seu passado e assumir seu lugar como rei."
  },

  {
    titulo: "Procurando Nemo",
    genero: "animacao",
    nota: "8.2",
    ano: "2003",
    diretor: "Andrew Stanton",
    ondeAssistir: "Disney+",
    descricao: "Um peixe-palhaço atravessa o oceano em busca de seu filho."
  },

  {
    titulo: "Os Incríveis",
    genero: "animacao",
    nota: "8.0",
    ano: "2004",
    diretor: "Brad Bird",
    ondeAssistir: "Disney+",
    descricao: "Uma família de super-heróis precisa voltar à ação."
  },

  {
    titulo: "Shrek",
    genero: "animacao",
    nota: "7.9",
    ano: "2001",
    diretor: "Andrew Adamson e Vicky Jenson",
    ondeAssistir: "Netflix",
    descricao: "Um ogro embarca em uma missão para resgatar uma princesa."
  },

  {
    titulo: "Ratatouille",
    genero: "animacao",
    nota: "8.1",
    ano: "2007",
    diretor: "Brad Bird",
    ondeAssistir: "Disney+",
    descricao: "Um rato com talento para cozinhar forma uma parceria improvável em Paris."
  },

  {
    titulo: "Como Treinar o Seu Dragão",
    genero: "animacao",
    nota: "8.1",
    ano: "2010",
    diretor: "Chris Sanders e Dean DeBlois",
    ondeAssistir: "Netflix",
    descricao: "Um jovem viking faz amizade com um dragão."
  },


  // =========================
  // FANTASIA
  // =========================

  {
    titulo: "O Senhor dos Anéis: As Duas Torres",
    genero: "fantasia",
    nota: "8.8",
    ano: "2002",
    diretor: "Peter Jackson",
    ondeAssistir: "Max",
    descricao: "A Sociedade do Anel é separada enquanto Sauron prepara seu ataque."
  },

  {
    titulo: "O Senhor dos Anéis: O Retorno do Rei",
    genero: "fantasia",
    nota: "9.0",
    ano: "2003",
    diretor: "Peter Jackson",
    ondeAssistir: "Max",
    descricao: "A batalha final pela Terra-média se aproxima."
  },

  {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    genero: "fantasia",
    nota: "7.9",
    ano: "2004",
    diretor: "Alfonso Cuarón",
    ondeAssistir: "Max",
    descricao: "Harry retorna a Hogwarts e descobre que um perigoso fugitivo está à sua procura."
  },

  {
    titulo: "As Crônicas de Nárnia",
    genero: "fantasia",
    nota: "6.9",
    ano: "2005",
    diretor: "Andrew Adamson",
    ondeAssistir: "Disney+",
    descricao: "Quatro irmãos entram em um mundo mágico através de um guarda-roupa."
  },

  {
    titulo: "Piratas do Caribe",
    genero: "fantasia",
    nota: "8.1",
    ano: "2003",
    diretor: "Gore Verbinski",
    ondeAssistir: "Disney+",
    descricao: "Jack Sparrow se junta a Will Turner em uma aventura pelos mares."
  },

  {
    titulo: "Stardust",
    genero: "fantasia",
    nota: "7.6",
    ano: "2007",
    diretor: "Matthew Vaughn",
    ondeAssistir: "Paramount+",
    descricao: "Um jovem atravessa um reino mágico para buscar uma estrela."
  },

  {
    titulo: "O Labirinto do Fauno",
    genero: "fantasia",
    nota: "8.2",
    ano: "2006",
    diretor: "Guillermo del Toro",
    ondeAssistir: "Prime Video",
    descricao: "Uma menina encontra um misterioso labirinto e um mundo fantástico."
  },


  // =========================
  // DRAMA
  // =========================

  {
    titulo: "O Poderoso Chefão",
    genero: "drama",
    nota: "9.2",
    ano: "1972",
    diretor: "Francis Ford Coppola",
    ondeAssistir: "Paramount+",
    descricao: "O filho de um poderoso chefe da máfia é envolvido nos negócios da família."
  },

  {
    titulo: "Forrest Gump",
    genero: "drama",
    nota: "8.8",
    ano: "1994",
    diretor: "Robert Zemeckis",
    ondeAssistir: "Netflix",
    descricao: "Um homem de coração simples vive acontecimentos extraordinários."
  },

  {
    titulo: "Clube da Luta",
    genero: "drama",
    nota: "8.8",
    ano: "1999",
    diretor: "David Fincher",
    ondeAssistir: "Disney+",
    descricao: "Um homem conhece um sujeito misterioso e cria um clube secreto de lutas."
  },

  {
    titulo: "À Procura da Felicidade",
    genero: "drama",
    nota: "8.0",
    ano: "2006",
    diretor: "Gabriele Muccino",
    ondeAssistir: "Netflix",
    descricao: "Um pai enfrenta dificuldades financeiras enquanto luta por uma vida melhor."
  },

  {
    titulo: "Parasita",
    genero: "drama",
    nota: "8.5",
    ano: "2019",
    diretor: "Bong Joon Ho",
    ondeAssistir: "Prime Video",
    descricao: "Uma família começa a se infiltrar na vida de uma família rica."
  },

  {
    titulo: "À Espera de um Milagre",
    genero: "drama",
    nota: "8.6",
    ano: "1999",
    diretor: "Frank Darabont",
    ondeAssistir: "Max",
    descricao: "Um agente penitenciário conhece um prisioneiro com habilidades extraordinárias."
  },

  {
    titulo: "O Pianista",
    genero: "drama",
    nota: "8.5",
    ano: "2002",
    diretor: "Roman Polanski",
    ondeAssistir: "Prime Video",
    descricao: "Um pianista judeu tenta sobreviver durante a Segunda Guerra Mundial."
  }

];


// =========================================
// VARIÁVEIS
// =========================================

let filmeAtual = null;

let favoritos =
  JSON.parse(
    localStorage.getItem("cineSortFavoritos")
  ) || [];


// =========================================
// SORTEAR POR GÊNERO
// =========================================

function sortearFilme() {

  const generoSelecionado =
    document.getElementById("genre").value;

  let lista = filmes;

  if (generoSelecionado !== "todos") {

    lista = filmes.filter(
      filme => filme.genero === generoSelecionado
    );

  }

  executarRoleta(lista);
}


// =========================================
// SORTEIO RÁPIDO
// =========================================

function sortearAcaoRapida() {

  document.getElementById("genre").value = "todos";

  executarRoleta(filmes);
}


// =========================================
// MELHORES FILMES
// =========================================

function sortearMelhores() {

  const melhores =
    filmes.filter(
      filme => parseFloat(filme.nota) >= 8.5
    );

  executarRoleta(melhores);
}


// =========================================
// ROLETA
// =========================================

function executarRoleta(lista) {

  if (lista.length === 0) {

    alert("Nenhum filme encontrado.");

    return;
  }


  const rouletteBox =
    document.getElementById("roulette");

  const rouletteTitle =
    document.getElementById("roulette-title");

  const resultCard =
    document.getElementById("result-card");

  const favStatus =
    document.getElementById("fav-status");


  resultCard.style.display = "none";

  rouletteBox.style.display = "block";

  favStatus.innerText = "";


  let giros = 0;

  const maxGiros = 15;


  const timer =
    setInterval(() => {

      const temp =
        lista[
          Math.floor(
            Math.random() * lista.length
          )
        ];


      rouletteTitle.innerText =
        temp.titulo;


      giros++;


      if (giros >= maxGiros) {

        clearInterval(timer);


        filmeAtual =
          lista[
            Math.floor(
              Math.random() * lista.length
            )
          ];


        exibirResultado(filmeAtual);

      }

    }, 100);

}


// =========================================
// MOSTRAR RESULTADO
// =========================================

function exibirResultado(filme) {

  document.getElementById("roulette")
    .style.display = "none";


  document.getElementById("movie-title")
    .innerText = filme.titulo;


  document.getElementById("genre-tag")
    .innerText =
    filme.genero.toUpperCase();


  document.getElementById("rating-tag")
    .innerText =
    "★ " + filme.nota;


  document.getElementById("year-tag")
    .innerText =
    filme.ano;


  document.getElementById("movie-director")
    .innerText =
    filme.diretor;


  document.getElementById("movie-description")
    .innerText =
    filme.descricao;


  document.getElementById("movie-where")
    .innerText =
    filme.ondeAssistir;


  document.getElementById("result-card")
    .style.display = "block";


  atualizarBotaoFavorito();
}


// =========================================
// FAVORITAR
// =========================================

function salvarFavorito() {

  if (!filmeAtual) {

    alert(
      "🎬 Sorteie um filme primeiro antes de favoritar!"
    );

    return;
  }


  const indice =
    favoritos.findIndex(
      filme =>
        filme.titulo === filmeAtual.titulo
    );


  // Se já existe, remove
  if (indice !== -1) {

    favoritos.splice(indice, 1);

    document.getElementById("fav-status")
      .innerText =
      "❌ Filme removido dos favoritos.";

  }

  // Se não existe, adiciona
  else {

    favoritos.push(filmeAtual);

    document.getElementById("fav-status")
      .innerText =
      "⭐ Filme adicionado aos favoritos.";

  }


  salvarFavoritos();

  atualizarFavoritos();

  atualizarBotaoFavorito();
}


// =========================================
// SALVAR NO NAVEGADOR
// =========================================

function salvarFavoritos() {

  localStorage.setItem(
    "cineSortFavoritos",
    JSON.stringify(favoritos)
  );

}


// =========================================
// ATUALIZAR BOTÃO
// =========================================

function atualizarBotaoFavorito() {

  const botao =
    document.getElementById(
      "btn-favorito"
    );


  if (!botao) return;


  if (!filmeAtual) {

    botao.innerHTML =
      "⭐ Favoritar Atual";

    botao.classList.remove(
      "favoritado"
    );

    return;
  }


  const favorito =
    favoritos.some(
      filme =>
        filme.titulo === filmeAtual.titulo
    );


  if (favorito) {

    botao.innerHTML =
      "💛 Favoritado";

    botao.classList.add(
      "favoritado"
    );

  }

  else {

    botao.innerHTML =
      "⭐ Favoritar Atual";

    botao.classList.remove(
      "favoritado"
    );

  }

}


// =========================================
// MOSTRAR FAVORITOS
// =========================================

function atualizarFavoritos() {

  const lista =
    document.getElementById(
      "lista-favoritos"
    );


  if (!lista) return;


  if (favoritos.length === 0) {

    lista.innerHTML = `
      <p class="sem-favoritos">
        Você ainda não possui filmes favoritos.
      </p>
    `;

    return;
  }


  lista.innerHTML =
    favoritos.map(
      (filme, index) => `

        <div class="favorito-card">

          <div class="favorito-info">

            <h3>
              ${filme.titulo}
            </h3>

            <div class="favorito-dados">

              <span>
                🎭 ${filme.genero.toUpperCase()}
              </span>

              <span>
                ⭐ ${filme.nota}
              </span>

              <span>
                📅 ${filme.ano}
              </span>

            </div>

            <p>
              ${filme.descricao}
            </p>

            <small>
              🎬 Direção:
              ${filme.diretor}
            </small>

            <small>
              📺 Onde assistir:
              ${filme.ondeAssistir}
            </small>

          </div>


          <button
            class="btn-remover"
            onclick="removerFavorito(${index})"
          >
            🗑️ Remover
          </button>

        </div>

      `
    ).join("");
}


// =========================================
// REMOVER UM FAVORITO
// =========================================

function removerFavorito(index) {

  const filmeRemovido =
    favoritos[index];


  favoritos.splice(index, 1);


  salvarFavoritos();

  atualizarFavoritos();

  atualizarBotaoFavorito();


  if (
    filmeAtual &&
    filmeRemovido &&
    filmeAtual.titulo ===
      filmeRemovido.titulo
  ) {

    document.getElementById("fav-status")
      .innerText =
      "❌ Filme removido dos favoritos.";

  }

}


// =========================================
// LIMPAR TODOS OS FAVORITOS
// =========================================

function limparFavoritos() {

  if (favoritos.length === 0) {

    alert(
      "Você não possui favoritos para apagar."
    );

    return;
  }


  const confirmar =
    confirm(
      "Tem certeza que deseja apagar todos os favoritos?"
    );


  if (!confirmar) return;


  favoritos = [];


  localStorage.removeItem(
    "cineSortFavoritos"
  );


  atualizarFavoritos();

  atualizarBotaoFavorito();


  document.getElementById("fav-status")
    .innerText =
    "🗑️ Todos os favoritos foram removidos.";
}


// =========================================
// RESETAR
// =========================================

function resetarTudo() {

  document.getElementById("genre")
    .value = "todos";


  document.getElementById("result-card")
    .style.display = "none";


  document.getElementById("roulette")
    .style.display = "none";


  document.getElementById("fav-status")
    .innerText = "";


  filmeAtual = null;


  atualizarBotaoFavorito();
}


// =========================================
// INICIALIZAÇÃO
// =========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    atualizarFavoritos();

    atualizarBotaoFavorito();

  }
);
