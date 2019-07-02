import config from '../config/http.config'

export const HTTP_SERVICE_NAME = 'HttpService'
export class HttpService {
    constructor($http) {
        this.$http = $http
    }

    get(url, query, isCache) {
        query = query ? '?' + query : ''
        return this.$http.get(config.baseUrl + url + query, {
            cache: isCache ? true : false
        })
    }
}

HttpService.$inject = ['$http']