//Requisito 1
const nomeEmpresa = "Sistema Omma";
//console.log(nomeEmpresa);


//Requisitos 2 e 3
let listaDeReceitas = [
    {
    id: 1,
    titulo: "Risoto Abóbora",
    dificuldade: "moderada",
    ingredientes: ["Abóbota", "Cebola"],
    preparo: "lave e corte",
    link: "https://www.google.com/",
    vegano: true
},
{
    id: 2,
    titulo: "Ovo frito",
    dificuldade: "simples",
    ingredientes: ["Ovo", "Azeite"],
    preparo: "Quebre o ovo",
    link: "https://www.youtube.com/",
    vegano: false
}
];

//Requisito 4 (isso é uma arrow function)
const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
};

listaDeReceitas.push(novaReceita);
console.log(`Cadastro da receita ${titulo} feito com sucesso`);
};

//lista de receitas antes de cadastrar nova receita
//console.log(listaDeReceitas)



//lista de receitas depois de cadastrar nova receita
//console.log(listaDeReceitas)

//Requisito 5
const exibirReceitas = () => {
    for (let i=0; i <listaDeReceitas.length; i++) {
       const receita = listaDeReceitas[i];

       console.log('----------------------------');
       console.log(`Titulo: ${receita.titulo}`);

       console.log("Ingredientes");
       for (let i=0; i <receita.ingredientes.length; i++) {
        console.log(`-${receita.ingredientes[i]}`);
       }
       console.log(("É vegano?", receita.vegano));
       console.log('----------------------------');
    }

}


//Requisito 6

const deletarReceita = (id) => {
    let novaListaDeReceitas =[];

    for (let i=0; i <listaDeReceitas.length; i++) {
        const receita = listaDeReceitas[i];

        if(receita.id !== id) {
            novaListaDeReceitas.push(receita);            
        }
    }

    if (novaListaDeReceitas.length === listaDeReceitas.length) {
        return console.log("Receita não encontrada");
    }
    listaDeReceitas = novaListaDeReceitas;
    console.log("Receita deletada com sucesso");

    cadastrarReceita (
        3,
        "Suco de Laranja",
        "simples",
        ["laranja", "agua"],
        "Esprema a laranja na água",
        "https://developer.mozilla.org/",
        true
    );
}

    exibirReceitas();
    deletarReceita(1);
    exibirReceitas();

//Aula dia 11 - Parte 2 Projeto Omma JS
const buscarReceita =listaDeReceitas.filter()


