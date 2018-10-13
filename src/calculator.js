//calculator.js



function add(String)
{
    const separators = [',','\\n'];
    
    if(String.length == 0)
    {
        return 0;
    }

    if(String.match(/^\/\/(D+)\n/))
    {
        separators.push(String.match(/^\/\/(\D+)\n/)[1]);
    }
    const list = String.split(new RegExp(`[${separators.join('')}]`))
    .filter(item => !isNaN(parseInt(item)));

    let sum = 0;
    for(let i=0; i<list.length; i++)
    {
        sum += parseInt(list[i]);
    }
    return sum;
}
 module.exports = add;

