//let baseURL = "http://localhost:3001";
let baseURL = "https://ezyserver.onrender.com";
export async function makeAPIcall(method, apiEndpoint, reqData, params, isFormData) {
    let url = params ? baseURL + apiEndpoint + params : baseURL + apiEndpoint;
    let requestOptions = prepareRequestData(reqData, method, isFormData);

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        Notific.Loading.Remove();
        return data;
    } catch (error) {
        Notific.Loading.Remove();
        console.log(error)
        Notific.Confirm.Show("Ezy Scrap!", 'Something went wrong!', "Okay")
        throw error;
    }
}


function prepareRequestData(reqData, method, isFormData) {
    if (isFormData) {
        let formdata = new FormData();
        for (const key in reqData) {
            formdata.append(key, reqData[key]);
        }
        return {
            method: method,
            body: formdata,
            redirect: 'follow'
        }
    }
    switch (method) {
        case 'POST':
        case 'PUT':
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            let urlencoded = new URLSearchParams();
            for (const key in reqData) {
                urlencoded.append(key, reqData[key]);
            }
            return {
                method: method,
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };
        case 'GET':
        case 'DELETE':
            return {
                method: method,
                redirect: 'follow'
            };
    }
}
