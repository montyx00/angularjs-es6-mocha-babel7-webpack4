import {HTTP_SERVICE_NAME} from '../../services/http.service'
import {ALGORITHM_SERVICE_NAME} from '../../services/algorithm.service'
export class FormController {
    
    constructor(HttpService, AlgorithmService) {
        this.http = HttpService
        this.algorithm = AlgorithmService
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
        this.algorithm.getRangeData(this.media.id, this.days, 'algorithm01')

        this.http.get('social/getcount', 'symbol="' + this.symbol.id + '"&media="' + this.media.id)
        .then(response => {
            this.postCount = response.data.count
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }
}
FormController.$inject = [HTTP_SERVICE_NAME, ALGORITHM_SERVICE_NAME]
export const FORM_CONTROLLER_NAME = 'FormController'