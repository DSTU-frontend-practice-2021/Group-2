function solution(string) {
    var camel = '';
    for (let i = 0; i < string.length; i++) {
        var string_char = string.slice(i, i + 1);
        if (string_char === string_char.toLowerCase()) {
            camel += string_char;
        } else {
            camel += ' ' + string_char;
        }
    }
    return camel;
}