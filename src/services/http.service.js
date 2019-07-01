import $http from 'angular'
import config from '../config/http.config'

export const HTTP_SERVICE_NAME = 'HttpService'
export class HttpService {
    constructor($http) {
        this.$http = $http
    }

    get(url, query) {
        return this.$http.get(config.baseUrl + url + '?' + query)
    }
}

HttpService.$inject = ['$http']