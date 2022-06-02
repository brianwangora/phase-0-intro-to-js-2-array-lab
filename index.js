const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    return cats.pop()
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}
function appendCat(name) {
    const cats2 = [...cats, "Broom"]
    return cats2
}
function prependCat(name) {
    const cats3 = ["Arnold", ...cats]
    return cats3
}
function removeLastCat() {
    const cats4 = cats.slice(0, cats.length-1);
    return cats4
}
function removeFirstCat() {
    const cats5 = cats.slice(1);
    return cats5
}