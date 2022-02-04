decribe ('mulitple two numbers',()=>{
    it('shoul return the porduct of two numbers',()=>{
        expect(myFunction(2,6)).toBe(12)
    })
})


function myFunction(a,b){
    return a*b;
}
