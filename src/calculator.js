//calculator.js



function add(String)
{
    const separators = [',','\\n',' ;'];
    const negativeNum = [];
    const limit = 1000;
    
    if(String.length == 0)   //return 0 for empty string
    {
        return 0;
    }
    const list = String.split(new RegExp(`[${separators.join('')}]`))  //setting up List string and RegExp 
    .filter(item => !isNaN(parseInt(item)) && parseInt(item) < limit); //Also checking so input num is not bigger than 1000

    if(String.match(/^\/\/(D+)\n/))
    {
        separators.push(String.match(/^\/\/(\D+)\n/)[1]);
    }

    let sum = 0;
    for(let i=0; i<list.length; i++)
    {                                                   //checks if number is negative or positive 
                                                        //Negative number go intp NegativeNum array and pos go to sum
        if(parseInt(list[i]) < 0)
        {
            negativeNum.push(parseInt(list[i]));
        }
        sum += parseInt(list[i]);
    }
    if(negativeNum.length > 0)                                      //Checks if NegativeNum array is empty or not if it is not empty then
    {                                                               //Then it thow a error
        throw `Negatives not allowed: ${negativeNum.join(', ')}`;
    }

    return sum;
}
 module.exports = add;

