
const index = require('./index');

bill = index.bill;
bob = index.bob;
sally = index.sally;


test('Checkng if after sleeping bobs hunger goes down', () => {
  index.bob.doze()
  expect(bob.hunger).toBe(-9);
 
});

test('Testing if hunger falls below zero through sleep method hen will not be alive', () => {
  bob.hunger = 45;
  bob.doze()
  expect(bob.hunger).toBe(1);
});
test('Testing if hunger falls below zero through sleep method hen will not be alive', () => {
  bob.hunger = 45;
  bob.doze()
  expect(bob.alive).toBe(false);
});

test('Sally size increase', () => {
  console.log(bob.hunger);
  sally.size = 66;
  bob.doze(sally)
  expect(sally.size).toBe(76)
});

