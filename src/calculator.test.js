const add = require('./calculator');

test('Should be 1 if input is 1', () => {

    expect(add("1")).toBe(1);
    });

Test('Should be 0 if no imput', () =>{
    expect(add("0")).toBE(0)
});