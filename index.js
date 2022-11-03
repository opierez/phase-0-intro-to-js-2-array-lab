// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    let newArray = [...cats, name];
    return newArray;
}

function prependCat(name) {
    let newArray = [name, ...cats];
    return newArray;
}

function removeLastCat() {
    let newArray = cats.slice(0, -1);
    return newArray;
}

function removeFirstCat() {
    let newArray = cats.slice(1);
    return newArray;
}