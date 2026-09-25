function testeDebug(x) {
    const y = x * 2;

    debugger;

    return y;
}

function usoDoDebugger() {
    console.log("\n===== EXERCÍCIO 11 =====");

    const resultado = testeDebug(5);

    console.log("Resultado:", resultado);

    console.log(
        "Relatório: ao atingir a instrução debugger, a execução do JavaScript é pausada quando o DevTools está aberto."
    );

    console.log(
        "Nesse momento é possível verificar valores das variáveis e avançar linha por linha usando as ferramentas de depuração."
    );
}

usoDoDebugger();

