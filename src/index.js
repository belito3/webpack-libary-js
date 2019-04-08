import Cat from './cat.js';
import Dog from './dog.js';
export { Dog, Cat };

let fun = () => {
  console.log('We are ready for Tic-Tac-Toe');
};

fun();

let getScriptURL = (function () {
  let scripts = document.getElementsByTagName('script');

  // console.log(scripts[0].src);

  let index = scripts.length - 1;

  let myScript = scripts[index];

  return function () { return myScript.src; };
})();

console.log(getScriptURL());

let scripts = document.getElementsByTagName('script');
let index = scripts.length - 1;
let myScript = scripts[index];

console.log(myScript);

