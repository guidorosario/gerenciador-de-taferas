import axiox, {type Method} from "axios"

export const executeRequiest = (endpoint: string, metohd: Method, body? : any) => {
    const headers = {'Content-Type' : 'application/json'} as any

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken){
        headers['Authorization'] = 'Bearer ' + accessToken;
    }
}