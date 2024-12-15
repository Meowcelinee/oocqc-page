import rawQuotes from './rawQuotes';

interface Quote {
    quote: string;
    person: string;
}

const validQuotes = rawQuotes.map(quote => {
    const splitQuote = quote.split(' -');
    const quoteObj: Quote = {
        quote: splitQuote[0],
        person: splitQuote[1],
    };
    return quoteObj;
});

export default validQuotes;
