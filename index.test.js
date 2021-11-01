const index = require('./index');

bill = index.bill;

test('If the name of Bill is correct', () => {
    expect(bill.name).toBe('Bill');
  });
test('If the name of Sally is correct', () => {
    expect(index.sally.name).toBe('Sally');
  });
test('If the name of Scott is correct', () => {
    expect(index.scott.name).toBe('Scott');
  });
test('If the name of Bob is correct', () => {
    expect(index.bob.name).toBe('Bob');
  });
test('If the name of Jill is correct', () => {
    expect(index.jill.name).toBe('Jill');
  });

  