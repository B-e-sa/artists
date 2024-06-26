export default function getBirthCountry(data: string) {
    const splitedData = data.split("/")
    return splitedData[splitedData.length - 1]
}