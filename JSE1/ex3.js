function confiabilidadeLimitada() {
    console.log("\n===== EXERCÍCIO 3 =====");

    console.log(
        "Não devemos confiar plenamente em dados digitados pelo usuário, formulários, arquivos ou informações recebidas de sistemas externos."
    );

    console.log(
        "Validação simples: antes de realizar uma operação, verificar se o valor possui o tipo esperado."
    );

    const entrada = "25";

    if (typeof entrada === "number") {
        console.log("Valor válido: número recebido.");
    } else {
        console.log("Valor inválido: era esperado um número, mas foi recebida uma string.");
    }
}

confiabilidadeLimitada();

