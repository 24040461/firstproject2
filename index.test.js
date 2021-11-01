const index = require('./index');


test('To have an array length of 4', () => {
    expect(index.favFilms).toHaveLength(4);
  });
  