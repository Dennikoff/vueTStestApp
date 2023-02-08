import axios from 'axios'

export async function makeRequest(data: formInputs) {
    console.log(data)
    let json: string = JSON.stringify(data)
    return axios.post("https://test.api.com", json)
        .catch(
        async (error: Error) => {

            console.log("error:", error)
        })

}