function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        return null;
    }
}

function testeSafeParseBasico() {
    console.log("\n===== EXERCÍCIO 5 =====");

    console.log(
        safeParse('{"nome": "Leandromeda"}')
    );

    console.log(
        safeParse("texto inválido")
    );
}

testeSafeParseBasico();

