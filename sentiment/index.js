// sentiment/index.js
const natural = require('natural');

function analyzeSentiment(text) {
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");

    // Tokenize and analyze text sentiment
    const words = new natural.WordTokenizer().tokenize(text);
    const score = analyzer.getSentiment(words);

    return score;
}

module.exports = { analyzeSentiment };