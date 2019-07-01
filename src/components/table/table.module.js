import angular from 'angular';
import {TABLE_CONTROLLER_NAME, TableController} from './table.controller'
import './table.scss'

let tableModule = angular.module('stockApp.table', [])
tableModule.controller(TABLE_CONTROLLER_NAME, TableController)

export default tableModule = tableModule.name