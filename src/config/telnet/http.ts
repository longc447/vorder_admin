import axios, { Method } from 'axios'
class http {
     Method: Method = "get";
     Url: string = "";
     Header: object = {
        "Access-Control-Allow-Origin":"*"
     };
     Data: any = {};
    async tel() {
        return await axios({
          method: this.Method,
          url: this.Url,
          params:this.Data||null
        });
    }
    async get(url: string) {
        this.Method="GET";
        this.Url=url;
        return await this.tel();
    }
    async post(url: string) {
        this.Method="POST";
        this.Url=url;
        return await this.tel();
    }
}
export default new http();