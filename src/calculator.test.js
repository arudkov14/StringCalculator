const add = require('./calculator');

test('Should return expected sum ',() => {
    expect(add('2, 3, 7')).toBe(12);
});

test('Should return expected sum with more numbers and larger numb ',() => {
    expect(add('2, 3, 7, 2, 4 ,5 ,78,777')).toBe(878);
});

test('Should be 1 if input is 1', () => {
    expect(add('1')).toBe(1);
    });

test('Should be 0 if no input', () =>{
    expect(add('0')).toBe(0);
});

test('Allow new line \n separators', () => {
    expect(add('1,2 \n3')).toBe(6);
});



