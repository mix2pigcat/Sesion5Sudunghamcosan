// myColor = ["Red", "Green", "White", "Black"];
// document.write(myColor.join('+'));


// var num=[-3,5,8,10,59,7,4];
// var result = [num[0]];
// for (var x = 1; x < num.length; x++) {
//     if (num[x - 1] % 2 === 0 && num[x] % 2 === 0) {
//         result.push('-',num[x]);
//     } else {
//         result.push(num[x]);
//     }
//
// }document.write(result);
//


var str = 'c';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for(let x=0; x<str.length; x++)
{
    if(UPPER.includes(str[x]))
    {
        result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
        result.push(str[x].toUpperCase());
    }
    else
    {
        result.push(str[x]);
    }
}
console.log(result.join(''));
