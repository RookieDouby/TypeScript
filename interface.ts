/**
 * Created by sam on 17-10-11.
 */
interface Person {
    name: string;
    age?:number;
    [propName: string]: any;
}

let Sam : Person = {
    name: "Sam",
    website: 'https://www.xxx.com'
}