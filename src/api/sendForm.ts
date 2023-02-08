import axios from 'axios'

export async function makeRequest(data: formInputs) {
    console.log(data)
    let json: string = JSON.stringify(data)
    return await axios.post("https://yandex.com", json)
        .catch(
        async (error: any) => {

            console.log("error:", error.statusCode)
        })

}