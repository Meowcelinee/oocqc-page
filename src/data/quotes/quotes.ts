import rawQuotes from './quotes.json' with { type: 'json' };

type Quote = { quote: string; person: string; id: number };

const validQuotes: Quote[] = rawQuotes.map(quote =>  {
    const finalAttribute = 
        quote.attribute !== 'net.minecraft.server.events.PLAYER_DIES'
        ? quote.attribute.replaceAll(`_`, ` `)
        : quote.attribute;

    return {
        quote: quote.quote,
        person: finalAttribute,
        id: quote.id,
    }
})

export default validQuotes;
export type { Quote };
