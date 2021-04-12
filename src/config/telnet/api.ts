class api {
    private ApiServer: string = "http://127.0.0.1:5001";
    private ApiUrl: string = this.ApiServer + "/api";
    private url = new Map([
        ["menu", "menu"]
    ])

    get(uri: string) {
        return `${this.ApiUrl}/${this.url.get(uri)}`
    }
}

export default new api();
