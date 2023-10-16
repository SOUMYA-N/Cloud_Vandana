function reverseWords(sentence) {
    
    const words = sentence.split(' ');

    const reversedWords = words.map(word => { 
    const reversedWord = word.split('').reverse().join('');
    
    return reversedWord;
});
const reversedSentence = reverseWords.join(' ');
return reversedSentence;
}

const inputSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWords(inputSentence);

console.log("Org Sentence: " + inputSentence);
console.log("Reversed Sentence: " + reversedSentence);


