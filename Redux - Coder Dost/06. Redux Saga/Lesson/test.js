//explaining generator function

function* generator() {
    yield 1; //acts like return function
    yield 2;
    yield 3;
}

const gen = generator()//call function

//next method starts by calling yield 1
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())