

let input: string = "Joined the conversation";

let words:string[] = input.split(" ");
console.log("Original words: ", words);

words.forEach((word, index) => {
    let firstLetterCapAndRestReversed=word.charAt(0).toUpperCase()+word.substring(1,word.length).split("").reverse().join("");
    words[index]= firstLetterCapAndRestReversed; 
  
});
console.log("Modified words: ", words);




/* for(let i: number = 0; i < words.length; i++)
{
    //let  reverseword :string="";
    let firstLetter=words[i].charAt(0).toUpperCase(); 
    let temp=words[i].substring(1,words[i].length).split("").reverse().join("");
    //console.log("temp: ", temp);
    /* let arr:string[]=temp.split("");

    for(let j: number = arr.length-1;j>=0;j--)
    {
        reverseword+=arr[j];
        

    }
    words[i]=firstLetter  +     reverseword+=word+" ";  
; 
   
}    */
//console.log("Modified words: ",     reversewordExceptFirstLetter.trim());  

