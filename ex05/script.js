let total = 0;
let opcao;

do {
    // Agora mostramos o total atual dentro do menu para o usuário saber quanto já gastou
    opcao = prompt(
        "Carrinho: R$ " + total.toFixed(2) + "\n\n" +
        "1 - Café (R$ 5)\n" +
        "2 - Capuccino (R$ 7)\n" +
        "3 - Pão de Queijo (R$ 4)\n" +
        "0 - Finalizar Pedido"
    );

    if (opcao === "1") {
        total += 5;
    } else if (opcao === "2") {
        total += 7;
    } else if (opcao === "3") {
        total += 4;
    } else if (opcao !== "0") {
        alert("Opção inválida");
    }

} while (opcao !== "0");

alert("Pedido encerrado!\nTotal final: R$ " + total.toFixed(2));