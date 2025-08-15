# Instruções
## Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)</br>
se guerreiro -> no ataque exibir (usou espada) </br>
se monge -> no ataque exibir (usou artes marciais) </br>
se ninja -> no ataque exibir (usou shuriken)</br>

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

## Resolução

- Resolução 01 - Usei estruturas condicionais e estruturas de decisão. Também fiz duas funções e a própria classe Hero. </br>
- Resolução 02 - Usei JSON para criar um objeto que recebe os tipos de ataque, esse objeto está dentro de uma função. Também fiz a classe Hero junto com um método atacar. Essa resolução é mais otimizada do que a primeira, sem repetir muitas linhas de código.
