const sum = function(a, b){
    return a + b;
};

const subtract = function(a,b){
    return a-b;
};

const multiply = function(a,b){
    return a*b;
};

const divide = function(a,b){
    return a/b;
};

const modulus = function(a,b){
    return a%b;
};

const even = function(a,b){
    if (a%b === 0){
        return true;
    } 
    return false;
};

const odd = function(a,b){
    if (a%b !== 0){
        return true;
    } 
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};