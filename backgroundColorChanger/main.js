function changeColor() {
    let arr = [ "red" , "lightyellow" , "skyblue" , "brown" , "pink" , "purple"];

   let randomIndex =  Math.floor( Math.random() * arr.length );
    let sameColor =  arr[randomIndex];
    document.body.style.backgroundColor = sameColor;
}