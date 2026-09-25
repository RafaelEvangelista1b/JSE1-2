class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo");
    }

    return "Idade válida";
}

function testeCheckAge() {
    console.log("\n===== EXERCÍCIO 8 =====");

    const idades = [-5, 30, 200];

    for (const idade of idades) {
        try {
            console.log(`Idade ${idade}: ${checkAge(idade)}`);
        } catch (erro) {
            console.log(`Idade ${idade}: ${erro.name} - ${erro.message}`);
        }
    }
}


// ============================================================
// EXERCÍCIO 9 - DEPURAÇÃO COM CONSOLE.LOG
// ============================================================

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

testeCheckAge();

