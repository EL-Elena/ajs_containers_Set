import Zombie from '../zombie';

const character = new Zombie('Jack', 'zombie');

const result = {
  name: 'Jack',
  type: 'zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Testing creating Zombie', () => {
  expect(character).toEqual(result);
});
