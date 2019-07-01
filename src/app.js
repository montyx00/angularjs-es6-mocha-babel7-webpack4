import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import homeModule from "./components/home/home.module"
import formModule from './components/form/form.module'
import tableModule from './components/table/table.module'
import router from './config/app.config'
import routes from './routes/app.routes'
import { HTTP_SERVICE_NAME, HttpService } from './services/http.service'
import { ALGORITHM_SERVICE_NAME, AlgorithmService} from './services/algorithm.service'

let stockAppModule = angular.module('stockApp', [
    uirouter,
    homeModule,
    formModule,
    tableModule
])

stockAppModule
    .service(HTTP_SERVICE_NAME, HttpService)
    .service(ALGORITHM_SERVICE_NAME, AlgorithmService)
    .config(router)
    .config(routes)

stockAppModule.run(() => {
    console.log('App started')
})

export default stockAppModule;