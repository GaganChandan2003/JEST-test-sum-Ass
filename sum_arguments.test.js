const sum = require('./sum_arguments');


describe("Testing Sum Function",()=>
{
    test("Add two positive number",()=>
    {
        expect(sum(1,2)).toBe(3);
    })
    test("Add two negitive number",()=>
    {
        expect(sum(-1,-2)).toBe(-3);
    })
    test("Add three number",()=>
    {
        expect(sum(1, 2, 3)).toBe(6);
    })
    test("Add two number ss string and output in integers ",()=>
    {
        expect(sum("1.5", "1.5")).toBe(3);
    })
})