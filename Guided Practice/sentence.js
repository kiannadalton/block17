// Create a class named Sentence
// Add a constructor that takes a parameter named data, which sets the this.data property for an instance of a sentence
class Sentence {
  constructor(data) {
    this.data = data;
  }
  // Add a method to the Sentence class that counts the number of words in your sentence
  wordCounter() {
    console.log(this.data.split(" ").length);
  }

  // Add a method to the Sentence class called hasLetter, which takes a letter and returns true or false if the letter is in your sentence
  hasLetter(letter) {
    if (this.data.indexOf(letter) == -1) {
      return false;
    } else {
      return true;
    }
  }

  // Add a method to the Sentence class that takes a letter and returns the number of times that letter is in the sentence.
  letterCounter(letter) {
    let count = 0;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] == letter) {
        count += 1;
      } else {
        continue;
      }
    }
    return count;
  }

  // Add a method to the Sentence class called stats. It will return an object with a key for each word in your sentence and a value for how many times the word appears. Example: For 'foo bar bar' it would return an object with keys, 'foo' and 'bar' with values 1 and 2 respectively.
  stat() {
    let strObject = {};
    let lowStr = this.data.toLowerCase();
    let splitStr = lowStr.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      let strElement = splitStr[i];
      if (strObject[strElement]) {
        strObject[strElement]++;
      } else {
        strObject[strElement] = 1;
      }
    }
    return strObject;
  }
}

// Use the window.prompt to get some data that you can use to create a sentence
let dataResponse = window.prompt("Enter in a sentence: ");

let item = new Sentence(dataResponse);

console.log(item.data);
item.wordCounter();
console.log(item.hasLetter("h"));
console.log(item.letterCounter("t"));
console.log(item.stat());
