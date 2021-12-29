
export class HTTPService {
    constructor(url){
        this.url = url
    }

    async get(content) {
        const res = await fetch(this.url+content)

        if(!res.ok){
            throw new Error('OOPS. Some problems with fetch ' + this.url+content+'. SWAPI.SERvice')
        }

        return await res.json()
    }
}
