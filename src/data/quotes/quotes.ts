import rawQuotes from './rawQuotes';

interface Quote {
    quote: string;
    person: string;
}

const validQuotes = rawQuotes.map((quote: string): Quote => {
    const splitQuote = quote.split(' -');
    const finalQuote = splitQuote[0].replaceAll(`"`, ``);
    return {
        quote: finalQuote,
        person: splitQuote[1],
    };
});

export default validQuotes;
