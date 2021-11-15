//write your code here
const findLongestWord = (words) =>{
 let longestWord = "";
//  let currentWord = "";   
 for (let word of words) {
     if (word.length > longestWord.length){
    //  return currentWord;
        longestWord = word
    }
    
}
return longestWord
}
console.log(findLongestWord(["jazzy", "jumpy", "quaky"]))