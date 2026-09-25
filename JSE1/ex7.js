function safeParseFinally(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    } finally {
        console.log("Parse attempt finished");
    }
}

function testeSafeParseFinally() {
    console.log("\n===== EXERCÍCIO 7 =====");

    console.log("Teste com JSON válido:");

    console.log(
        safeParseFinally('{"nome": "Leandromeda"}')
    );

    console.log("\nTeste com JSON inválido:");

    console.log(
        safeParseFinally("texto inválido")
    );
}

testeSafeParseFinally();

