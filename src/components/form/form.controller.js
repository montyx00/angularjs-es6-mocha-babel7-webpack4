import {HTTP_SERVICE_NAME} from '../../services/http.service'
import {ALGORITHM_SERVICE_NAME} from '../../services/algorithm.service'
import { $q } from '@uirouter/core';
export class FormController {
    
    constructor($q, HttpService, AlgorithmService) {
        this.$q = $q
        this.http = HttpService
        this.algorithm = AlgorithmService
    }
    $onInit() {
        this.rangeData = []
        this.getAlgorithms()
        this.getSymbols()
        this.getMedias()
        this.days = 10
        this.getTopPosts()
    }

    changeAlgorithm(selectedAlgo) {
        this.getRangeData(selectedAlgo.id)
    }

    getAlgorithms() {
        this.http.get('algorithm/getall')
        .then((response) => {
            this.algorithms = response.data
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
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

    getTopPosts(qty) {
        let count = qty ? qty : 2
        this.http.get('social/topposts', 'qty=' + count)
        .then((response) => {
            this.topPosts = response.data
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }

    getRangeData(selectedAlgo) {
        this.rangeData = []
        selectedAlgo = selectedAlgo ? selectedAlgo : 'algorithm01'
        for(let i = 0; i < this.days; ++i) {
            this.algorithm.getRangeData(this.media.id, i, selectedAlgo)
            .then(response => {
                this.rangeData.push(response.data)
            })
        }
    }

    submit() {
        this.getRangeData()

        this.http.get('social/getcount', 'symbol="' + this.symbol.id + '"&media="' + this.media.id)
        .then(response => {
            this.postCount = response.data.count
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }
}
FormController.$inject = ['$q', HTTP_SERVICE_NAME, ALGORITHM_SERVICE_NAME]
export const FORM_CONTROLLER_NAME = 'FormController'