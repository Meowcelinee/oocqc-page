import validQuotes, { Quote } from '@/data/quotes/quotes';

export default function randomQuote(): Quote {
    return validQuotes[Math.floor(Math.random() * validQuotes.length)];
}
