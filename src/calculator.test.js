const add = require('./calculator');

test('Should be 1 if input is 1', () => {

    expect(add('1')).toBe(1);
    });

test('Should be 0 if no input', () =>{
    expect(add('0')).toBE(0)
});

test('Should return expected sum ',() => {
    expect(add('2,3,7')).toBe(12)
});
