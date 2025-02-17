document.addEventListener("DOMContentLoaded", () => {
    const produtosList = document.getElementById("produtos-list");
    const produtos = [
        { id: 1, nome: "Camiseta Primitive Blessed Preto", preco: 319.90, descricao: "PRIMITIVE241109", imagem: "https://maze.jetassets.com.br/produto/20241108162630_952999048_D.jpg", imagemHover:"https://maze.jetassets.com.br/produto/multifotos/20241108162634_5842994158_DM.jpg" },

        { id: 2, nome: "Bone Ripndip Family Tree Camper Estampado", preco: 244.93, descricao: "Referência: RND00807", imagem: "https://maze.jetassets.com.br/produto/20240503143800_8947991053_D.webp", imagemHover:"https://maze.jetassets.com.br/produto/multifotos/20240503143758_7973992027_DM.webp" },
        
        { id: 3, nome: "Shape Primitive X Tupac Moto 8.25 Preto/prateado", preco: 549.90, descricao: "Referência: PS22W0023", imagem: "https://maze.jetassets.com.br/produto/20231201112359_1235998765_D.webp", imagemHover:"https://maze.jetassets.com.br/produto/20231201112359_1235998765_D.webp" },
        
        { id: 4, nome: "Tênis Nike Air Jordan 3 Retro cement Grey Branco/cinza", preco: 1799.90, descricao: "O Air Jordan 3 Retro Cement Grey, lançado em 1988, é um dos modelos mais icônicos da linha Air Jordan, criado por Tinker Hatfield. Este design inovador foi o primeiro a apresentar uma unidade visível de Air, oferecendo maior conforto. Com couro branco e detalhes em cinza cimentado, incluindo o padrão cement na biqueira e no calcanhar, o modelo se destaca pelo estilo. O Cement Grey ganhou fama quando Michael Jordan o usou no concurso de enterradas do All-Star Game de 1988. Relançado várias vezes, mantém sua popularidade entre fãs de basquete e streetwear. Sua combinação de história e design atemporal o torna altamente desejado.     REFERENCIA: CT8532-106", imagem: "https://maze.jetassets.com.br/produto/20240926151551_40999960_D.jpg", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20240926151551_3860996140_DM.jpg" },
        
        { id: 5, nome: "Jaqueta Ripndip Illusion Jerm Coaches Preto", preco: 559.93, descricao: "Referência:RND10362", imagem: "https://maze.jetassets.com.br/produto/20240405162835_3637996363_D.webp", imagemHover:"https://maze.jetassets.com.br/produto/multifotos/20240405162855_2754997246_DM.webp"},
        
        { id: 6, nome: "Mochila Primitive Summit Preto", preco: 359.90, descricao: "REFERENCIA: PA323A02    PRIMITIVE241109", imagem: "https://maze.jetassets.com.br/produto/20241108141853_6237993763_D.jpg", imagemHover:"https://maze.jetassets.com.br/produto/20241108141853_6237993763_D.jpg"},
        
        { id: 7, nome: "Tenis Nike Sb Dunk Low Bege/vinho", preco: 999.90, descricao: "Este Nike SB Dunk Low especial inspira-se de forma distinta na história rica do cinema parisiense, combinando a elegância artística com o estilo icônico do Dunk. O tratamento vintage na parte superior em couro em dourado Celestial confere textura e caráter, enquanto evoca as fachadas atemporais dos cinemas históricos. Remetendo para as cordas e os assentos em veludo clássicos, estão equipadas com detalhes de veludo macio em vermelho Team escuro e Armory Navy luxuosos, criando um acabamento sofisticado. Com dois conjuntos de atacadores e palmilhas personalizadas, este Dunk é o seu passe de acesso total a todos os espetáculos que sempre quis ver. Feche os olhos e deixe-se envolver pela magia do cinema, a começar pelos pés.       REFERENCIA: FZ1278-200", imagem: "https://maze.jetassets.com.br/produto/20241101094841_4732995268_D.jpg", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20241101094842_2075997925_DM.jpg" },
        
        { id: 8, nome: "Tênis Vans Skate Old Skool Pro Preto/branco", preco: 449.90, descricao: "Referência: VN0A5FCBY28", imagem: "https://maze.jetassets.com.br/produto/20211209114844_3505996495_D.png", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20211209114845_8026991974_DM.png" },
        
        { id: 9, nome: "Calça Adidas X Korn Preto", preco: 599.90, descricao: "Referência: IN9110", imagem: "https://maze.jetassets.com.br/produto/20231027114321_3268996732_D.jpg", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20231027114320_2732997268_DM.jpg" },
        
        { id: 10, nome: "Tenis Vans Skate Half Cab X Pedro Delfino Marrom", preco: 599.90, descricao: "REFERENCIA: VN0A2Z34CMA", imagem: "https://maze.jetassets.com.br/produto/20241030153550_2010997990_D.jpg", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20241030153550_984999016_DM.jpg" },
        
        { id: 11, nome: "Tenis Nike Dunk Low Suede Ouro", preco: 899.90, descricao: "Você sempre pode contar com um clássico. Icônico color-block é combinado com materiais premium e acolchoamento macio para conforto inovador e duradouro. As possibilidades são infinitas - como você vai usar o seu Dunk Suede?        REFERENCIA: FQ8249-102", imagem: "https://maze.jetassets.com.br/produto/20241118104429_2417997583_D.jpg", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20241118104344_4390995610_DM.jpg" },
        
        { id: 12, nome: "Moletom Ripndip Ryu Hoodie Preto", preco: 503.93, descricao: "REFERENCIA: RND2417      RIPNDIP241109", imagem: "https://maze.jetassets.com.br/produto/20241107143937_3259996741_D.jpg", imagemHover: "https://maze.jetassets.com.br/produto/multifotos/20241107143938_9306990694_DM.jpg" },
    ];

    produtos.forEach((produto) => {
        const produtoCard = document.createElement("div");
        produtoCard.classList.add("col-md-4", "mb-4");
        produtoCard.innerHTML = `
    <div class="card h-100">
        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" data-hover="${produto.imagemHover}" data-default="${produto.imagem}">
        <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            <button class="btn btn-secondary" onclick="mostrarDescricao(${produto.id})" data-bs-toggle="modal" data-bs-target="#productModal">Ver mais</button>
        </div>
    </div>`;

        produtosList.appendChild(produtoCard);
    });

    // Eventos de hover para trocar as imagens
    document.querySelectorAll(".card-img-top").forEach((img) => {
        img.addEventListener("mouseover", (event) => {
            event.target.src = event.target.getAttribute("data-hover");
        });

        img.addEventListener("mouseout", (event) => {
            event.target.src = event.target.getAttribute("data-default");
        });
    });

    window.adicionarAoCarrinho = (id) => {
        const produto = produtos.find((p) => p.id === id);
        if (!produto) return;

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        const itemExistente = carrinho.find((item) => item.id === id);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ ...produto, quantidade: 1 });
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert(`${produto.nome} foi adicionado ao carrinho!`);
    };

    window.mostrarDescricao = (id) => {
        const produto = produtos.find((p) => p.id === id);
        if (!produto) return;
    
        document.getElementById("productModalLabel").textContent = produto.nome;
        document.getElementById("modalProductImage").src = produto.imagem;
        document.getElementById("modalProductDescription").textContent = produto.descricao;
        document.getElementById("modalProductPrice").textContent = `R$ ${produto.preco.toFixed(2)}`;
    };
    
});


