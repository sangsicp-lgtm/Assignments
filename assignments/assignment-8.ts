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
