// let key = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с'];
let key = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let request = prompt('text, please', '');
let result;
for(let i = 0; i <= request.length; i++) {
    let code = request[i].charCodeAt(0);
    let num = code - 60;
    result += key[num];
    return result;
}
console.log(result);
