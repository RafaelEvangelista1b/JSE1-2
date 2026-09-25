function callStack() {
    console.log("\n===== EXERCÍCIO 13 =====");

    console.log(
        "Quando interno() está sendo executada, a Call Stack pode ser representada assim:"
    );

    console.log(`
    ▶ interno
      ▶ externo
        ▶ callStack
    `);

    console.log(
        "A função interno está no topo da pilha porque é a função que está sendo executada naquele momento."
    );
}

callStack();