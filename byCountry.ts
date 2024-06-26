import data, { Artist } from "./data";

type ArtistsByCountry = Record<string, Artist[]>

const artistsByCountry: ArtistsByCountry = {};

data.language.pt.forEach(artist => {
    const birthCountry = artist.wasBorIn.split('/')[3];

    if (!artistsByCountry[birthCountry])
        artistsByCountry[birthCountry] = [];
    artistsByCountry[birthCountry].push(artist);
});

export default artistsByCountry;