// Como podemos melhorar o esse código usando TS? 

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

enum Profissao {
    Atriz,
    Padeiro
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);