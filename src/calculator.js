//calculator.js



function add(String)
{
    const separator = ',';
    
    if(String.length == 0)
    {
        return 0;
    }

    const list = String.split(separator)

    let sum = 0;
    for(let i=0; i<list.length; i++)
    {
        sum += parseInt(list[i]);
    }
    return sum;
}
 module.exports = add;

