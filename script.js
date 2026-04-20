let length = 0;
let words = 1;
let vowels = 0;

// Example sentence (must end with a period)
let sentence = "This is a simple sentence.";

// Process character by character
for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];

    if (ch === ".") {
        break;
    }

    length++;

    if (ch === " ") {
        words++;
    }

    if ("aeiouAEIOU".includes(ch)) {
        vowels++;
    }
}

console.log("Length:", length);
console.log("Words:", words);
console.log("Vowels:", vowels);