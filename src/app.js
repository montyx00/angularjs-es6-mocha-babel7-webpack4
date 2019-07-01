import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import homeModule from "./components/home/home.module"
import formModule from './components/form/form.module'
import router from './config/app.config'
import routes from './routes/app.routes'
import { HTTP_SERVICE_NAME, HttpService } from './services/http.service'

let stockAppModule = angular.module('stockApp', [
    uirouter,
    homeModule,
    formModule
])

stockAppModule
    .service(HTTP_SERVICE_NAME, HttpService)
    .config(router)
    .config(routes)

stockAppModule.run(() => {
    console.log('App started')
})

export default stockAppModule;