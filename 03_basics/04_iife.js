// Immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTION`);
})();

((name) => {
     console.log(`DB CONNECTION TWO ${name}`);
})("sudipta")