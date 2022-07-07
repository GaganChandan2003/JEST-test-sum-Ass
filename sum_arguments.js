function sum(...args)
{
    const sum=[...args].reduce((a,c)=>a+Number(c),0);
    return Number(sum.toFixed(1));
}
module.exports=sum;