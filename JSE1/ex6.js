function safeParseCondicional(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    }
}

function testeSafeParseCondicional() {
    console.log("\n===== EXERCÍCIO 6 =====");

    console.log(
        safeParseCondicional('{"nome": "Leandromeda"}')
    );

    console.log(
        safeParseCondicional("texto inválido")
    );
}

testeSafeParseCondicional();

