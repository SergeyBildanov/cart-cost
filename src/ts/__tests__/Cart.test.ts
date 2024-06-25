import Cart from '../service/Cart';
import Movie from '../domain/Movie';
test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test("movie adding to the cart", () => {
  const cart = new Cart();

  const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
})
test("movie class working", () => {
    const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);

    expect(movie instanceof Movie).toBe(true);
})

test("cost calculator work without purchase", ()=>{
  const cart = new Cart();

  const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  const movie1 = new Movie(1010, "Avengers 2", "Joss Whedon", 600, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  cart.add(movie);
  cart.add(movie1);
  expect(cart.withoutPurchase()).toEqual(1100);
})

test("cost calculator work with purchase", ()=>{
  const cart = new Cart();

  const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  const movie1 = new Movie(1010, "Avengers 2", "Joss Whedon", 600, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  cart.add(movie);
  cart.add(movie1);
  expect(cart.withPurchase(50)).toEqual(1100*(1 - 0.5));
})

test("deleting from cart", ()=>{
  const cart = new Cart();

  const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  cart.add(movie);
  cart.remove(1009);
  expect(cart.items.length).toBe(0);
})


