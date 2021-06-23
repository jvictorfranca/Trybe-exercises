const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = (strength) => {
  let dano = Math.floor(Math.random() * (strength + 1 - 15) + 15);
  return dano;
};

const danoWarrior = (strength, weaponDmg) => {
  let dano = Math.floor(
    Math.random() * (strength * weaponDmg + 1 - strength) + strength
  );
  return dano;
};

const danoMago = (inteligence, mana) => {
  if (mana <= 15) {
    return 'Não possui mana o suficiente';
  }
  let dano = Math.floor(Math.random() * (inteligence + 1)) + inteligence;
  return {
    dano: dano,
    mana: 15,
  };
};

const gameActions = {
  // Crie as HOFs neste objeto.
  turnoWarrior: (funcaoDano) => {
    let dano = funcaoDano(warrior.strength, warrior.weaponDmg);
    dragon.healthPoints -= dano;
    warrior.damage = dano;
  },
  turnoMago: (funcaoDano) => {
    let objeto = funcaoDano(mage.intelligence, mage.mana);
    let dano = objeto.dano;
    dragon.healthPoints -= dano;
    mage.damage = dano;
    mage.mana -= objeto.mana;
  },
  turnoDragão: (funcaoDano) => {
    dano = funcaoDano(dragon.strength);
    warrior.healthPoints -= dano;
    mage.healthPoints -= dano;
    dragon.damage = dano;
  },
  retornaBattle: () => {
    console.log(battleMembers);
  },
};
