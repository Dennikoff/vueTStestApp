import axios from 'axios'

// interface Post {
//     id: number,
//     title: string,
//     body: string,
//     userId: number,
// }

export async function makeRequest(obj:formInputs) {
    try {
        console.log(obj)
        // const response = await axios.get<Post>(
        //     'https://jsonplaceholder.typicode.com/posts/1',
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Accept: 'application/json',
        //         },
        //     },
        // );
        const json = JSON.stringify(obj)
        const response = await axios.post('http://my.test.api.com', json, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response.status)
        if(response.status == 201) {
            alert('Status code 201: Created')
        }
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            let code: number | undefined = error?.response?.status
            if(code != undefined) {
                switch(code){
                    case 400:
                        alert('Status Code 400: Bad request')
                        break;
                    case 404:
                        alert('Status Code 404: Not found')
                        break;
                    case 422:
                        alert('Status Code 422: Unprocessable entity')
                        break;
                    case 500:
                        alert('Status Code 500: Internal server error')
                        break;
                }
            }
            console.log('error message: ', error.message);
            return error;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}