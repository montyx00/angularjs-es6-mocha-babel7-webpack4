export class HomeController {
    
    constructor(HttpService) {
        this.http = HttpService
        this.getCount()
    }

    getCount() {
        this.http.get('social/getcount', 'symbol="LOGM"&media="facebook')
        .then((response) => {
            this.count = response.data.count
        })
        .catch((error) => {
            console.log("Get count error: ", error.message)
        })
    }
}
HomeController.$inject = ['HttpService']
export const HOME_CONTROLLER_NAME = 'HomeController'