//calculator.js



function add(String)
{
    const separators = [',','\\n',' ;'];
    const negativeNum = [];
    const limit = 1000;
    
    if(String.length == 0)
    {
        return 0;
    }

    if(String.match(/^\/\/(D+)\n/))
    {
        separators.push(String.match(/^\/\/(\D+)\n/)[1]);
    }
    const list = String.split(new RegExp(`[${separators.join('')}]`))
    .filter(item => !isNaN(parseInt(item)) && parseInt(item) < limit);

    let sum = 0;
    for(let i=0; i<list.length; i++)
    {
        if(parseInt(list[i]) < 0)
        {
            negativeNum.push(parseInt(list[i]));
        }
        sum += parseInt(list[i]);
    }
    if(negativeNum.length > 0)
    {
        throw `Negatives not allowed: ${negativeNum.join(', ')}`;
    }

    return sum;
}
 module.exports = add;

