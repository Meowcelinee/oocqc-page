import { SkinData, MCApiResponse } from '@/data/playerHeads';

export default async function getPlayerSkin(ign: string): Promise<SkinData> {
    const errMsg = `Fatal API error when fetching player skins.\n\nContact Marceline IMMEDIATELY with error details:\n- @meowcelinee. on Discord\n- Meowcelinee on GitHub\n- marcelineeee.bsky.social on Bluesky`;

    try {
        const data = await fetch(`https://api.minetools.eu/uuid/${ign}`);
        const userJson: MCApiResponse = await data.json();

        if (userJson.id === undefined)
            throw new Error(`${errMsg}\n\nError: Unknown player.`);

        return {
            bust: `https://vzge.me/bust/256/${userJson.id}?no=ears,cape`,
            head: `https://vzge.me/face/256/${userJson.id}?no=ears`,
            ign: userJson.name,
        };
    } catch (err) {
        try {
            console.log(
                `Failed to fetch player skins using UUID, falling back to username.\n${err}`
            );
            return {
                bust: `https://vzge.me/bust/256/${ign}?no=ears,cape`,
                head: `https://vzge.me/face/256/${ign}?no=ears`,
                ign: ign,
            };
        } catch (err) {
            console.log(`${errMsg}\n\nError: ${err}`);
            throw err;
        }
    }
}
