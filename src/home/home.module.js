import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import HomeController from './home.controller'
import routing from './home.routes'
import './home.scss'

let homeModule = angular.module('stockApp.home', [uirouter])
homeModule.controller('HomeController', HomeController)
homeModule.config(routing)

export default homeModule = homeModule.name