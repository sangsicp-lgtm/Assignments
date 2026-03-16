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



/*Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word*/
let paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

//a) Find total number of occurrences
let paraWordsCount = paragraph.split(" ");
let count: number = 0;
for (let i: number = 0; i < paraWordsCount.length; i++) {
    if (paraWordsCount[i] === "Java") {
        count++;
        console.log(`The word "Java" is found at index: ${i}`);
    }
}
console.log("Total number of occurrences :" + count);



//Write a program to print * in  left handed triangle pattern
let noOfRows = 5;
console.log("Left Handed Triangle Pattern:");
for (let i: number = 0; i < noOfRows; i++) {
    let pattern: string = "";
    for (let j: number = 0; j < noOfRows - i - 1; j++) {
        pattern += " ";
    }
    for (let k: number = 0; k <= i; k++) {
        pattern += "*";
    }

    console.log(pattern);

}
