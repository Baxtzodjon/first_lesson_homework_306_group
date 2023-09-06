let text = 'aaa@bbb@ccc'

console.log(
    text.replaceAll('@', '!')
);

let str = "HELLOWORLD"

let str2 = 'Hello' + ' ' + 'world';
console.log(
    str2
);

let text2 = 'Hello, it is HTML'
console.log(
    text2.replace('HTML', 'not JS')
);

let a = 'alex'
console.log(
    a.charAt(0).toUpperCase() +
    a.slice(1)
);

let n = Math.random()
console.log(
    Math.random(n)
);

let str3 = 'Lex Luter has a big suit'

console.log(
    str3.slice(str3.search('a'), str3.search('a') + 1).toUpperCase() + str3.slice(str3.search('Lex'), str.search('Lex') + 3)
);
