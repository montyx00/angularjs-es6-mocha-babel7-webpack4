import angular from 'angular';
import {HOME_CONTROLLER_NAME, HomeController} from './home.controller'
import './home.scss'

let homeModule = angular.module('stockApp.home', [])
homeModule.controller(HOME_CONTROLLER_NAME, HomeController)

export default homeModule = homeModule.name