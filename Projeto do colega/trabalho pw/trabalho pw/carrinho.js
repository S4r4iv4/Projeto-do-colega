
document.addEventListener("DOMContentLoaded", () => {
    const carrinhoList = document.getElementById("carrinho-list");
    const totalContainer = document.getElementById("total-container"); // Elemento para exibir o total
    const cupomInput = document.getElementById("cupom"); // Campo para o cupom
    const aplicarCupomBtn = document.getElementById("aplicar-cupom"); // Botão para aplicar o cupom
    const mensagemCupom = document.getElementById("mensagem-cupom");
    const erroCupom = document.getElementById("erro-cupom");

    let total = 0; // Total inicial
    let descontoAplicado = false; // Controle de desconto

    const carregarCarrinho = () => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinhoList.innerHTML = "";
        total = 0; // Reinicializa o total

        if (carrinho.length === 0) {
            carrinhoList.innerHTML = '<h2 class="text-center">Seu carrinho está vazio.</h2>';
            totalContainer.innerHTML = `<h3 class="text-end mt-3">Total: R$ 0.00</h3>`;
            return;
        }

        carrinho.forEach((item, index) => {
            const carrinhoItem = document.createElement("div");
            carrinhoItem.classList.add("col-md-4", "mb-4");
            carrinhoItem.innerHTML = `
                <div class="card h-100">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">Quantidade: ${item.quantidade}</p>
                        <p class="card-text">Preço Unitário: R$ ${item.preco.toFixed(2)}</p>
                        <p class="card-text">Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
                        <button class="btn btn-danger" onclick="removerProduto(${index})">Remover</button>
                    </div>
                </div>`;
            carrinhoList.appendChild(carrinhoItem);

            // Atualiza o total
            total += item.preco * item.quantidade;
        });

        atualizarTotal(); // Atualiza o total exibido
    };

    const atualizarTotal = () => {
        let totalComDesconto = total;

        // Aplica o desconto se o cupom foi validado
        if (descontoAplicado) {
            totalComDesconto *= 0.75; // Aplica 25% de desconto
        }

        totalContainer.innerHTML = `<h3 class="text-end mt-3">Total: R$ ${totalComDesconto.toFixed(2)}</h3>`;
    };

    const aplicarCupom = () => {
        const cupom = cupomInput.value.trim().toUpperCase();

        if (cupom === "DESCONTO25" && !descontoAplicado) {
            descontoAplicado = true;
            mensagemCupom.style.display = "block";
            erroCupom.style.display = "none";
            atualizarTotal(); // Recalcula o total com desconto
        } else if (descontoAplicado) {
            erroCupom.textContent = "O cupom já foi aplicado.";
            erroCupom.style.display = "block";
            mensagemCupom.style.display = "none";
        } else {
            erroCupom.style.display = "block";
            mensagemCupom.style.display = "none";
        }
    };

    aplicarCupomBtn.addEventListener("click", aplicarCupom);

    window.removerProduto = (index) => {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        if (index >= 0 && index < carrinho.length) {
            const produtoRemovido = carrinho[index];
            if (confirm(`Tem certeza de que deseja remover "${produtoRemovido.nome}" do carrinho?`)) {
                carrinho.splice(index, 1);
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                carregarCarrinho();
                alert(`"${produtoRemovido.nome}" foi removido do carrinho.`);
            }
        } else {
            alert("Produto não encontrado no carrinho.");
        }
    };

    window.limparCarrinho = () => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio.");
        } else {
            if (confirm(`Tem certeza de que deseja remover os itens do carrinho?`)) {
                alert(`Seus itens foram removidos do carrinho.`);
                localStorage.removeItem("carrinho");
                carregarCarrinho();
            }
        }
    };

    window.finalizarCompra = () => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        } else {
            alert("Preencha seus dados para finalizar a compra.");
            window.location.href = "checkout.html";
        }
    };

    carregarCarrinho();
});

