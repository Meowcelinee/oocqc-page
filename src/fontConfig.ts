import {
    Hind_Vadodara,
    IBM_Plex_Sans,
    JetBrains_Mono,
    Jost,
    Merriweather_Sans,
} from 'next/font/google';

const vadodara = Hind_Vadodara({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const plexSans = IBM_Plex_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const jetbrains = JetBrains_Mono({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const jost = Jost({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const merriweather = Merriweather_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const fonts = {
    vadodara,
    plexSans,
    jetbrains,
    jost,
    merriweather,
};

export default fonts;
