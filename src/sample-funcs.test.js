const myFunctions = require('./sample-funcs.js');

test('Testing sum -- success', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(target).toBe(result);
});

test('Testing sum -- failure', () => {
    const target = 31;
    const result = myFunctions.sum(12, 18);
    expect(result).not.toBe(target);
})

test('Testing sum -- non-numeric input', () => {
    const target = "h0"
    const result = myFunctions.sum("h", 0)
    expect(result).toBe(target)
})

test('Testing div -- success', () => {
    const target = 3;
    const result = myFunctions.div(9, 3);
    expect(result).toBe(target);
})

test('Testing div -- failure', () => {
    const target = 4;
    const result = myFunctions.div(9, 3);
    expect(result).not.toBe(target);
})

test('Testing div -- divide by zero', () => {
    const result = myFunctions.div(9, 0)
    expect(result).toBe(Infinity)
})

test('Testing div -- divide unequal', () => {
    const target = 2.5
    const result = myFunctions.div(10, 4)
    expect(result).toBe(target)
})

test('Testing div -- divide non-numeric input', () => {
    const result = myFunctions.div("h", 3)
    expect(result).toBeNaN()
})

test('Testing containsNumbers -- truthy success', () => {
    const result = myFunctions.containsNumbers("jack1")
    expect(result).toBeTruthy()
})

test('Testing containsNumbers -- falsey success', () => {
    const result = myFunctions.containsNumbers("jack")
    expect(result).toBeFalsy()
})

test('Testing containsNumbers -- empty input', () => {
    const result = myFunctions.containsNumbers("")
    expect(result).toBeFalsy()
})

test('Testing containsNumbers -- invalid input', ()g => {
    expect(() => myFunctions.containsNumbers()).toThrow(TypeError)
})