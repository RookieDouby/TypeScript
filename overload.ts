/**
 * Created by sam on 17-10-11.
 */
function reverse(x:number | string):string | number {
    if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if(typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}