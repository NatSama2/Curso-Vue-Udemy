describe("Example Component", () => {
  test("Debe de ser mayor a 10", () => {
    // Arreglar
    let value = 5;

    // Estimulo
    value = value + 6;

    // Observar el resulado
    expect(value).toBeGreaterThan(10);

    /* if (value > 10) {
      // TODO todo bien
    } else {
      throw `${value} no es mayor a 10`;
    } */
  });
});
