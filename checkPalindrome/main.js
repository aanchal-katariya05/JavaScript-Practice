function checkPalindrome() {
    let num = Number(document.getElementById("num").value);
    let original = num;
    let reverse = 0;

    if(isNaN(num)){
        document.getElementById("result").innerText = "Invalid Number";
        return;
    }

    while(num > 0){
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num/10);
    }

    if( original === reverse){
        document.getElementById("result").innerText = "It is Palindrome !!";
    }
    else{
        document.getElementById("result").innerText = "It is not Palindrome";
    }

}