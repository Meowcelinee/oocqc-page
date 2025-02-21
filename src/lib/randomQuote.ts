import validQuotes, { Quote } from '@/data/quotes/quotes';

export default function randomQuote(): Quote {
    let rand = Math.floor(Math.random() * validQuotes.length);

    if (typeof window !== 'undefined') {
        // clear sessionstorage after ~400 generations
        if (sessionStorage.length >= 400) sessionStorage.clear();

        // if this quote is in sessionstorage, generate another
        if (sessionStorage.getItem(validQuotes[rand].quote))
            rand === validQuotes.length ? (rand = rand - 1) : (rand = rand + 1);

        const randQuote = validQuotes[rand];
        sessionStorage.setItem(randQuote.quote, randQuote.quote);

        return randQuote;
    }
    return validQuotes[rand];
}
