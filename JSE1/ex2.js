function errosSemExcecoes() {
    console.log("\n===== EXERCÍCIO 2 =====");

    console.log(
        "Exemplo: uma função pode receber um valor errado e produzir um resultado incorreto sem lançar uma exceção."
    );

    const resultado = 10 + "5";

    console.log("10 + '5' =", resultado);

    console.log(
        "Nesse caso, JavaScript transforma o número em string e o resultado vira '105'. Não ocorre uma exceção."
    );
}

errosSemExcecoes();

