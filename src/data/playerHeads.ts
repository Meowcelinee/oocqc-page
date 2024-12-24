interface HeadData {
    head: string;
    ign: string;
}

const getHead = (ign: string): HeadData => {
    return {
        head: `https://mc-heads.net/avatar/${ign}/256.png`,
        ign: ign,
    };
};

const ameliaHead = getHead('Nyameliaaaa');
const natalieHead = getHead('Natalesbian');

export { getHead, ameliaHead, natalieHead };
