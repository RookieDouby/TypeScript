/**
 *
 * Created by sam on 17-10-11.
 */

// wrong defination
// function getString(something: string | number): string {
//     return something.length();
// }

function getString(something: string | number): string {
    return something.toString();
}