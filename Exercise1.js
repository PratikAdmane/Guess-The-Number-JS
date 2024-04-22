let number = Math.floor(Math.random() *(100-1)+1);
var chances = 0;
let a = prompt("Enter a number");
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

do{
    if (a < number) {
        a= prompt("Your number is less than the actual number. Please enter the gretter number!");
        chances++;
        } else if (a > number) {
        a= prompt("Your number is greater than the actual number. Please enter the smaller number!");
        chances++;
        } else {
        console.log("Congratulations..!!!! You gussed the correct number in your  first Attempt.");
        }
}while(a!=number)
// Eventually after the game is over, display the (100 - Number of chances) and the actual number
console.log("Congratulations...! You gussed the correct number. The Actual number is,"+ number +" and you took "+ chances + " Chances to gussed it correct.");
console.log("Your score is " + (100 - chances));
a=alert("Congratulations...! You gussed the correct number. The Actual number is,"+ number +" and you took "+ chances + " Chances to gussed it correct.");


// let n=Math.floor(Math.random()*100)
// let m=prompt("enter the nuber")
// let c=0,
// while(m!=n){
//   if(m>n){
//     m=prompt("enter lesser number")
//     c++
//   }
//   if(m<n){
//     m=prompt("enter greater number")
//     c++
//   }
// }
// console.log("your score is "+(100-c))