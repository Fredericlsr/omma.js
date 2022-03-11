const nomeempresa = "Sistema OMMA"
console.log(`Seja bemvindo ao ${nomeempresa}`)

const listadereceita = [{
    id: 1,
    titulo: "suco de limão",
    dificuldade: "Simples",
    ingredientes: ["1 copo de agua", "1 limão","1 colher de acucar"],
    preparo: "mistura tudo",
    link: "limao.com",
    vegano: true,
    }]

    console.log(listadereceita)

    function novareceita(id, titulo, dificuldade, ingredientes, preparo, link, vegano) 
    {
        const novareceita = {
            id,
            titulo,
            dificuldade,
            ingredientes,
            preparo,
            link,
            vegano,
        }
        listadereceita.push(novareceita)
        console.log("cadatro feito com sucesso")
    }

    novareceita(2, "batata frita", "simple", ["batata", "oleo"], "picar e fritar", "batata.com", true)

    console.log(listadereceita)