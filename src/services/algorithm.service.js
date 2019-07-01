import {HTTP_SERVICE_NAME} from './http.service'

export const ALGORITHM_SERVICE_NAME = 'AlgorithmService'
export class AlgorithmService {
    constructor(HttpService) {
        this.callbacks = []
        this.rangeData = null
        this.http = HttpService
    }

    getRangeData(media, days, algorithmId) {
        this.http.get('algorithm/getrangedata', 'media=' + media + '&days=' + days + '&algorithm=' + algorithmId)
        .then((response) => {
            this.rangeData = response.data
            for(let i = 0; i < this.callbacks.length; ++i) {
                this.callbacks[i](this.rangeData)
            }
        })
        .catch((error) => {
            // TODO: replace exception
            console.log("Get count error: ", error.message)
        })
    }

    registerCallback(callback) {
        this.callbacks.push(callback)
    }
}

AlgorithmService.$inject = [HTTP_SERVICE_NAME]