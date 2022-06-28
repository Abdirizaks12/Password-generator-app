document.getElementById("btn").addEventListener("click" , function () {
    let pp1= document.getElementById("pass1")
    pp1.textContent = GetPassword()
    let pp2= document.getElementById("pass2")
    pp2.textContent = GetPassword()
    let pp3= document.getElementById("pass3")
    pp3.textContent = GetPassword()
    let pp4= document.getElementById("pass4")
    pp4.textContent = GetPassword()
 
 })
 let words = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0", "!", "£", "$", "%", "_", "*", "@", "#", "?", "~" ]
    
 function GetPassword (){
      let password = ""
      for (let i = 0; i< 8; i++) {
         let randompassword = words[Math.floor(Math.random() *72)]
         password+=randompassword
        } 
     return password
 }