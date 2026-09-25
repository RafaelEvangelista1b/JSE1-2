function interno(m) {
    return m * 3;
}

function externo(n) {
    return interno(n) + 1;
}

function stepOverStepIntoStepOut() {
    console.log("\n===== EXERCÍCIO 12 =====");

    console.log("Resultado de externo(4):", externo(4));

    console.log("\nStep Over:");
    console.log(
        "Executa a próxima linha sem entrar nos detalhes da função chamada."
    );

    console.log("\nStep Into:");
    console.log(
        "Entra na função interno() para acompanhar sua execução linha por linha."
    );

    console.log("\nStep Out:");
    console.log(
        "Sai da função interno() e retorna para a função externo()."
    );
}

stepOverStepIntoStepOut();

