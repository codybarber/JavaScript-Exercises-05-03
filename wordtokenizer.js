var text = "Given a paragraph of text, print the number of words in the paragraph";

function wordCount(str) {
  return str.split(" ").length;
}

console.log(wordCount(text));
