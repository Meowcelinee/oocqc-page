import validQuotes, { Quote } from '@/data/quotes/quotes';

export default function randomQuote(): Quote {
    // let quoteCounter = Number(localStorage.getItem('quoteCounter'));

    // !quoteCounter
    //     ? localStorage.setItem('quoteCounter', '1')
    //     : localStorage.setItem('quoteCounter', String((quoteCounter += 1)));

    let rand = Math.floor(Math.random() * validQuotes.length);

    // if this quote is in localstorage, generate another
    if (localStorage.getItem(validQuotes[rand].quote))
        rand === validQuotes.length ? (rand -= 1) : (rand += 1);

    const randQuote = validQuotes[rand];
    localStorage.setItem('randomQuote', randQuote.quote);
    return randQuote;
}
