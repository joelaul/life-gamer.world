export function format(arr) {
    let string = "";
    for (let el of arr) {
      string += el + "\n";
    }
    return string;
}