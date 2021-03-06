import axios, { Method } from 'axios'
class http {
     Method: Method = "get";
     Url: string = "";
     Header: object = {
        "Access-Control-Allow-Origin":"*"
     };
     Data: any = {};
    async tel() {
        let result= await axios({
          method: this.Method,
          url: this.Url,
          params:this.Data||null
        });
        return result.data
        // return
        debugger
    }
    async get(url: string) {
        this.Method="GET";
        this.Url=url;
        return await this.tel();
    }
    async post(url: string,param:object) {
        this.Method="POST";
        this.Url=url;
        this.Data=param;
        return await this.tel();
    }
    async delete(url: string,param:object) {
        this.Method="DELETE";
        this.Url=url;
        this.Data=param;
        return await this.tel();
    }
    async update(url:string,param:object){
        this.Method="PUT";
        this.Url=url;
        this.Data=param;
        return await this.tel();
    }
}
export default new http();