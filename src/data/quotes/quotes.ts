import rawQuotes from './rawQuotes';

type Quote = { quote: string; person: string; id: number };

const validQuotes = rawQuotes.map(
    (quote: string, quoteIndex: number): Quote => {
        const splitQuote = quote.split(' -');

        const finalQuote = splitQuote[0].replaceAll(`"`, ``);

        const finalAttribute =
            splitQuote[1] !== 'net.minecraft.server.events.PLAYER_DIES'
                ? splitQuote[1].replaceAll(`_`, ` `)
                : splitQuote[1];

        return {
            quote: finalQuote,
            person: finalAttribute,
            id: quoteIndex + 1,
        };
    }
);

export default validQuotes;
export type { Quote };
