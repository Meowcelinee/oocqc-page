import { SkinData, MCApiResponse } from '@/data/playerHeads';

export default async function getPlayerSkin(ign: string): Promise<SkinData> {
    try {
        const data = await fetch(`https://api.minetools.eu/uuid/${ign}`);
        const userJson: MCApiResponse = await data.json();

        if (userJson.id === undefined) throw new Error('Unknown player');

        return {
            bust: `https://vzge.me/bust/256/${userJson.id}?no=ears,cape`,
            head: `https://vzge.me/face/256/${userJson.id}?no=ears`,
            ign: userJson.name,
        };
    } catch (err) {
        console.error(
            `Fatal API error when fetching player heads.\n\nContact Marceline IMMEDIATELY with error details:\n- @meowcelinee. on Discord\n- Meowcelinee on GitHub\n- marcelineeee.bsky.social on Bluesky\n\n${err}`
        );
        throw err;
    }
}
