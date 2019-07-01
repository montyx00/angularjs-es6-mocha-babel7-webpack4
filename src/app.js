import 'angular/angular.js'
import 'font-awesome/css/font-awesome.css'
import angularUIRouter from '@uirouter/angularjs'

import home from "./home/home.module"
import routing from './config/app.config'
import { HTTP_SERVICE_NAME, HttpService } from './services/http.service'

let stockAppModule = angular.module('stockApp', [
    angularUIRouter,
    home
])

stockAppModule.service(HTTP_SERVICE_NAME, HttpService)

stockAppModule.run(() => {
    console.log('App started')
})

stockAppModule.config(routing)

export default stockAppModule;