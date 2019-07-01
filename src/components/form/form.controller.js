export class FormController {
    
    constructor(HttpService) {
        this.http = HttpService
        this.getSymbols()
        this.getMedias()
        this.window = 10
    }

    getMedias() {
        this.http.get('social/medias/getall')
        .then((response) => {
            this.medias = response.data
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }
    getSymbols() {
        this.http.get('stock/symbols/getall')
        .then((response) => {
            this.symbols = response.data
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }
    submit() {
        this.http.get('social/getcount', 'symbol="' + this.symbol + '"&media="' + this.media)
        .then((response) => {
            this.postCount = response.data.count
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }
}
FormController.$inject = ['HttpService']
export const FORM_CONTROLLER_NAME = 'FormController'