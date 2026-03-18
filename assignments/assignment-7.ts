//Assignment-7
//Done by Sangeetha C.P on 16/3/2026


let sentence: string = "Java programming is fun and challenging";

//a) Count the number of words in the sentence
let wordsCount = sentence.split(" ");
console.log("Count the number of words in the sentence :" + wordsCount.length);

//b)Print the sentence words in reverse order.
let reverseTheSentence: string = "";
for (let i: number = wordsCount.length - 1; i >= 0; i--) {
    reverseTheSentence += wordsCount[i] + " ";

}
console.log("Print the sentence words in reverse order.:" + reverseTheSentence.trim());


//c)Convert the first character of each word to uppercase and print original sentence
let firstLetterCapInEachWordInSentence: string = "";
for (let word of wordsCount) {
    let temp: string = word.charAt(0).toUpperCase();
    word = word.replace(word.charAt(0), temp);
    firstLetterCapInEachWordInSentence += word + " ";
}
console.log("Original sentence :" + sentence.trim());
console.log("Convert the first character of each word to uppercase :" + firstLetterCapInEachWordInSentence.trim());



