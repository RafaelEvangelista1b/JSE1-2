function soma(a, b) {
    return a + b;
}

function depuracaoComConsoleLog() {
    console.log("\n===== EXERCÍCIO 9 =====");

    const a = 2;
    const b = undefined;

    console.log("Antes da soma:");
    console.log("a =", a);
    console.log("b =", b);

    const resultado = soma(a, b);

    console.log("Depois da soma:");
    console.log("resultado =", resultado);

    // A causa de NaN é que undefined não pode ser utilizado
    // em uma operação matemática normal com o número 2.
    console.log(
        "Causa: o valor de b é undefined, portanto a operação 2 + undefined resulta em NaN."
    );
}

depuracaoComConsoleLog();

