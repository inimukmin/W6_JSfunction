const randomSentences = [
  "elephant stomps through the jungle .",
  "a musician composes a symphony elegantly.",
  "the astronaut explores the galaxy fearlessly.",
  "creates a cake skillfully.",
  "the detective solves the mystery quickly.",
  "an athlete trains for the marathon diligently.",
  "the bird .",
  "a scientist discovers a new element excitedly.",
  "the chef prepares a gourmet meal .",
  "the painter creates a vibrant portrait passionately.",
];

const firstLetterCapital = randomSentences.map(
  (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)
);

const sorted = firstLetterCapital.sort(function (a, b) {
  return a.length - b.length;
});
console.log(sorted);
