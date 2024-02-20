import Team from '../index';
import Zombie from '../zombie';
import Bowman from '../bowman';
import Demon from '../demon';

const firstZombie = new Zombie('Jack', 'zombie');
const secondZombie = new Zombie('Lit', 'zombie');
const firstBowman = new Bowman('Pit', 'bowman');
const secondBowman = new Bowman('Pit', 'bowman');
const firstDemon = new Demon('Roo', 'demon');
const ourTeam = new Team();

const correct1 = [
  {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Jack',
    type: 'zombie',
  },
];

const correct2 = [
  {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Jack',
    type: 'zombie',
  },
  {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Pit',
    type: 'bowman',
  },
];

const correct3 = [
  {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Jack',
    type: 'zombie',
  },
  {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Pit',
    type: 'bowman',
  },
  {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Roo',
    type: 'demon',
  },
];

test('Testing Add with first character', () => {
  ourTeam.add(firstZombie);
  expect(ourTeam.toArray()).toEqual(correct1);
});

test('Testing add with not unique character', () => {
  expect(() => {
    ourTeam.add(secondZombie);
  }).toThrow(new Error('Такой персонаж уже есть'));
});

test('Testing add with second character', () => {
  ourTeam.add(firstBowman);
  expect(ourTeam.toArray()).toEqual(correct2);
});

test('Testing addAll with unique and not unique characters', () => {
  ourTeam.addAll(secondBowman, firstDemon);
  expect(ourTeam.toArray()).toEqual(correct3);
});
