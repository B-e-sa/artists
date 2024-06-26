import data from "../data";

export default function getNumberOfArtworks(
    artistName: string
): number | undefined {
    const foundArtist = data.language.pt.find((artist) => (
        artist.fullName === artistName
    ))

    let result: number | undefined;

    if (foundArtist)
        result = foundArtist.artworks.length

    return result;
}