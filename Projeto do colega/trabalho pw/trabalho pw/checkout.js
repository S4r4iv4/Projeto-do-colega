document.addEventListener("DOMContentLoaded", () => {

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

// Adicionar classes responsivas aos elementos
const inputs = document.querySelectorAll(".form-control");
inputs.forEach(input => {
    input.classList.add("mb-3");
});

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.classList.add("w-100", "p-2");
});

function validarFormulario() {
    let valido = true;

    // Obter campos do formulário
    const nome = document.getElementById("nome");
    const endereco = document.getElementById("endereco");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const cartao = document.getElementById("cartao");
    const validade = document.getElementById("validade");
    const cvv = document.getElementById("cvv");

    // Validar campos obrigatórios
    if (!nome.value.trim()) {
        valido = false;
        nome.classList.add("is-invalid");
    } else {
        nome.classList.remove("is-invalid");
    }

    if (!endereco.value.trim()) {
        valido = false;
        endereco.classList.add("is-invalid");
    } else {
        endereco.classList.remove("is-invalid");
    }

    if (!email.value.trim() || !validarEmail(email.value)) {
        valido = false;
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }

    if (!cpf.value.trim() || !validarCPF(cpf.value)) {
        valido = false;
        cpf.classList.add("is-invalid");
    } else {
        cpf.classList.remove("is-invalid");
    }

    if (!cartao.value.trim() || cartao.value.replace(/\s/g, "").length !== 16) {
        valido = false;
        cartao.classList.add("is-invalid");
    } else {
        cartao.classList.remove("is-invalid");
    }

    if (!validade.value.trim()) {
        valido = false;
        validade.classList.add("is-invalid");
    } else {
        validade.classList.remove("is-invalid");
    }

    if (!cvv.value.trim() || cvv.value.length !== 3) {
        valido = false;
        cvv.classList.add("is-invalid");
    } else {
        cvv.classList.remove("is-invalid");
    }

    return valido;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

window.finalizarCompra = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (validarFormulario()) {
        if (confirm("Deseja realmente finalizar a compra?")) {
            alert("Compra finalizada com sucesso!");
            localStorage.removeItem("carrinho");
            window.location.href = "home.html";
        }
    } else {
        alert("Por favor, preencha todos os campos corretamente antes de finalizar a compra.");
    }
};

});
