function add(n1, n2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("Incorect input!");
    }
    return n1 + n2;
}
var number1 = "5";
var number2 = 5.6;
var result = add(number1, number2);
console.log(result);
