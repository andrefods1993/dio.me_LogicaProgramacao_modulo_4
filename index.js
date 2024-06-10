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

let hero = {
	name: 'Hulk',
	xp: 10000,
	level: '',
};

if (hero.xp < 1000) {
	hero.level = 'Ferro';
} else if (hero.xp >= 1000 && hero.xp < 2000) {
	hero.level = 'Bronze';
} else if (hero.xp >= 2000 && hero.xp < 5000) {
	hero.level = 'Prata';
} else if (hero.xp >= 5000 && hero.xp < 7000) {
	hero.level = 'Ouro';
} else if (hero.xp >= 7000 && hero.xp < 8000) {
	hero.level = 'Platina';
} else if (hero.xp >= 8000 && hero.xp < 9000) {
	hero.level = 'Ascendente';
} else if (hero.xp >= 9000 && hero.xp < 10000) {
	hero.level = 'Imortal';
} else {
	hero.level = 'Radiante';
}

console.log(`O Herói de nome ${hero.name} está no nível de ${hero.level}`);
