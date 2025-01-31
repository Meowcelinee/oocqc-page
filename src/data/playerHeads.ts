interface HeadData {
    head: string;
    ign: string;
}

interface MCApiResponse {
    cache: {};
    id: string;
    name: string;
    status: string;
}

const getHead = async (ign: string): Promise<HeadData> => {
    try {
        const data = await fetch(`https://api.minetools.eu/uuid/${ign}`);
        const userJson: MCApiResponse = await data.json();

        if (userJson.id === undefined) throw new Error('Unknown player');

        return {
            head: `https://vzge.me/face/256/${userJson.id}?no=ears`,
            ign: userJson.name,
        };
    } catch (err) {
        console.error(
            `Fatal API error when fetching player heads.\n\nContact Marceline IMMEDIATELY with error details:\n- @meowcelinee. on Discord\n- Meowcelinee on GitHub\n- marcelineeee.bsky.social on Bluesky\n\n${err}`
        );
        throw err;
    }
};

export { getHead };
export type { HeadData };
