

    // Função para calcular o total do carrinho
    function calcularTotalCarrinho(carrinho) {
        let subtotal = 0;
        carrinho.forEach(item => {
            subtotal += item.preco * item.quantidade;
        });

        const desconto = calcularDesconto(subtotal);
        const frete = calcularFrete(subtotal);

        const total = subtotal - desconto + frete;

        console.log(`Subtotal: R$${subtotal.toFixed(2)}`);
        console.log(`Desconto: R$${desconto.toFixed(2)}`);
        console.log(`Frete: R$${frete.toFixed(2)}`);
        console.log(`Total: R$${total.toFixed(2)}`);

        return total;
    }

    // Função para simular cálculo de desconto (ex: 10% se o subtotal for maior que R$200)
    function calcularDesconto(subtotal) {
        return subtotal > 200 ? subtotal * 0.1 : 0;
    }

    // Função para simular cálculo de frete (ex: R$20 fixo para pedidos abaixo de R$100, grátis acima disso)
    function calcularFrete(subtotal) {
        return subtotal < 100 ? 20 : 0;
    }


    // Responsividade e melhorias
    const checkoutSection = document.getElementById("checkout");
    checkoutSection.style.maxWidth = "800px";
    checkoutSection.style.margin = "auto";
    checkoutSection.classList.add("rounded", "shadow-sm", "p-4");

    // Formatação de inputs
    const cpfInput = document.getElementById("cpf");
    cpfInput.addEventListener("input", formatCPF);

    const cardInput = document.getElementById("cartao");
    cardInput.addEventListener("input", formatCardNumber);

    function formatCPF(event) {
        const value = event.target.value.replace(/\D/g, "");
        event.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4").substr(0, 14);
    }

    function formatCardNumber(event) {
        const value = event.target.value.replace(/\D/g, "");
        event.target.value = value.replace(/(\d{4})(?=\d)/g, "$1 ").substr(0, 19);
    }

    // Submissão do formulário para uma API
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch("https://api.sandbox.cel.cash/v2", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert("Compra finalizada com sucesso!");
                } else {
                    const error = await response.json();
                    alert(`Erro: ${error.message}`);
                }
            } catch (error) {
                console.error("Erro ao processar o pagamento:", error);
                alert("Erro de conexão com o servidor.");
            }
        });
    });

    // Adicionar classes responsivas aos elementos
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach(input => {
        input.classList.add("mb-3");
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.add("w-100", "p-2");
    });



