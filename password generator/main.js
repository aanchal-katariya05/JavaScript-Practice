function generate(){
     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
 let password = "";

 for( let i = 0 ; i <= 7 ; i++){
    
    let randomIndex = Math.floor( Math.random() * characters.length);
   let randomChar = characters[randomIndex];
    password += randomChar;

  document.getElementById("password").value = password;
 }
}