import {HTTP_SERVICE_NAME} from './http.service'

export const ALGORITHM_SERVICE_NAME = 'AlgorithmService'
export class AlgorithmService {
    constructor(HttpService) {
        this.callbacks = []
        this.rangeData = null
        this.http = HttpService
    }

    getRangeData(media, days, algorithmId) {
        return this.http.get('algorithm/getrangedata', 'media=' + media + '&days=' + days + '&algorithm=' + algorithmId, true)
    }
}

AlgorithmService.$inject = [HTTP_SERVICE_NAME]