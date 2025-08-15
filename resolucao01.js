class Hero { //criando classe Hero
    constructor(nome, idade, tipo){ //definindo o construtor e os atributos da classe
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    tiposDeAtaques(){ //criando os ataques que cada tipo de Hero vai receber 
        let attack = " "
        if(this.tipo === "mago"){
            attack = "magia"
        }else if(this.tipo === "guerreiro"){
            attack = "espada"
        }else if(this.tipo === "monge"){
            attack = "artes marciais"
        }else if(this.tipo === "ninja"){
            attack = "shuriken"
        }else{
            console.log("ERRO - Digite novamente o tipo do Hero")
        }
        return attack; // retornando a variável attack para poder exibir o valor correspondente na function "atacar()"
    }
    atacar(){ //criando o método atacar dentro da classe Hero. Para fazer isso, não é necessário usar o "function"
        switch(true){
            case this.tipo === "mago": //usando o this para acessar os atributos do objeto (ou seja, da classe Hero)
                console.log(`o ${this.tipo} atacou usando ${this.tiposDeAtaques()}`);
                break;
            case this.tipo === "guerreiro":
                console.log(`o ${this.tipo} atacou usando ${this.tiposDeAtaques()} `);
                break;
            case this.tipo === "monge":
                console.log(`o ${this.tipo} atacou usando ${this.tiposDeAtaques()} `);
                break;
            case this.tipo === "ninja":
                console.log(`o ${this.tipo} atacou usando ${this.tiposDeAtaques()} `);
                break;
            default:
                console.log(`Digite novamente o tipo do Hero`);

        }
    }
}


let hero1 = new Hero("Garen", 28, "mago") //instanciando a classe e passando os valores correspondente aos dados do construtor como parâmetros
hero1.atacar() //chamando o método atacar()