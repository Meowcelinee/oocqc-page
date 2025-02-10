import rawQuotes from './rawQuotes';

type Quote = { quote: string; person: string };

const validQuotes = rawQuotes.map((quote: string): Quote => {
    const splitQuote = quote.split(' -');
    const finalQuote = splitQuote[0].replaceAll(`"`, ``);
    const finalAttribute = splitQuote[1].replaceAll(`_`, ` `);
    return {
        quote: finalQuote,
        person: finalAttribute,
    };
});

export default validQuotes;
export type { Quote };
