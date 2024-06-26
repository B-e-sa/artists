export default function getDate(data: string) {
    return data.split("/").slice(0, -1).join("/")
}