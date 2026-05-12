let nomeProduto;

do {
    // A execução ocorre ao menos uma vez antes da validação
    nomeProduto = prompt("Digite o nome do produto para cadastro:");

    // Verifica se o valor é nulo (caso o usuário cancele o prompt) 
    // ou se o comprimento é menor que 3
    if (nomeProduto === null || nomeProduto.trim().length < 3) {
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres.");
    }

} while (nomeProduto === null || nomeProduto.trim().length < 3);

// Saída após validação bem-sucedida
console.log("Produto cadastrado com sucesso: " + nomeProduto);
alert("Produto '" + nomeProduto + "' cadastrado com sucesso!");