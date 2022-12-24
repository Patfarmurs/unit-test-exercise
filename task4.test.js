const capitalize = require('./task4')
test('Capitalized string passed', ()=>{
    expect(capitalize('Mango')).toEqual('Mango')
})