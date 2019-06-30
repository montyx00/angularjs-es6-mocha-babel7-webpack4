import 'angular/angular.js'
import 'font-awesome/css/font-awesome.css'
import angularUIRouter from '@uirouter/angularjs'

import home from "./home/home.module"
import routing from './app.config'

let stockAppModule = angular.module('stockApp', [
    angularUIRouter,
    home
])

stockAppModule.run(() => {
    console.log('App started')
})

stockAppModule.config(routing)

export default stockAppModule;