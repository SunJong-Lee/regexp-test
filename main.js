const str = `
010-1234-5678
thesjong@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
`

//메소드
// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp));

//메소드
// const regexp = /fox/gi
// console.log(regexp.test(str));
// console.log(str.replace(regexp, 'AAA'));

//플래그(옵션)
// const regexp = /the/gi
// console.log(str.match(regexp));
// console.log(str.match(/\.$/gim));

const h = `  the hello  world   !

`

// console.log(h.replace(/\s/g, ''));
console.log(
  str.match(/(?=@).{1,}/g)
);
