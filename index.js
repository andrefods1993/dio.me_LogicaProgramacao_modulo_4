/* 
    # 1️⃣ Desafio Classificador de nível de Herói

    **O Que deve ser utilizado**

    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões

    ## Objetivo

    Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante

    ## Saída

    Ao final deve se exibir uma mensagem:
    "O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

// Definição da classe Hero
class Hero {
	// Construtor da classe Hero, que inicializa as propriedades name e xp
	constructor(name, xp) {
		this.name = name;
		this.xp = xp;
	}

	// Método que retorna o nível do herói com base na experiência (XP)
	getLevel() {
		// Verifica a faixa de XP para determinar o nível do herói
		if (this.xp < 1000) {
			return 'Ferro';
		} else if (this.xp >= 1000 && this.xp < 2000) {
			return 'Bronze';
		} else if (this.xp >= 2000 && this.xp < 5000) {
			return 'Prata';
		} else if (this.xp >= 5000 && this.xp < 7000) {
			return 'Ouro';
		} else if (this.xp >= 7000 && this.xp < 8000) {
			return 'Platina';
		} else if (this.xp >= 8000 && this.xp < 9000) {
			return 'Ascendente';
		} else if (this.xp >= 9000 && this.xp < 10000) {
			return 'Imortal';
		} else {
			return 'Radiante';
		}
	}

	// Método que imprime os detalhes do herói
	print() {
		// Exibe o nome do herói e o nível calculado pelo método getLevel
		console.log(
			`O Herói de nome ${this.name} está no nível de ${this.getLevel()}`
		);
	}
}

// Criação de instâncias da classe Hero
let hero1 = new Hero('Hulk', 9500);
let hero2 = new Hero('Iron Man', 1500);
let hero3 = new Hero('Thor', 7000);

// Loop para imprimir os detalhes de cada herói
for (let hero of [hero1, hero2, hero3]) {
	hero.print();
}
