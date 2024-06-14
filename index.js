//The receivesAFunction function should:

//take a callback function as an argument
//call the callback function
//it doesn't matter what this function returns, so long as it calls the callback function

receivesAFunction(misu);

function receivesAFunction(cb){
    console.log("Spy");
    cb();
}

function misu(){
    console.log("Misu");
}
 

//The returnsANamedFunction function should:

//take no arguments
//return a named function

function returnsANamedFunction(){
    function namedFunction(){
    console.log("I am a named function");
}
return namedFunction;
}

//The returnsAnAnonymousFunction function should:

//take no arguments
//return an anonymous function

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous function");
    };
}

