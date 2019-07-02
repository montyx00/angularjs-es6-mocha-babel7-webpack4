import angular from 'angular';
import {TABLE_COMPONENT_NAME, tableComponent} from './table.component'
import './table.scss'

let tableModule = angular.module('stockApp.table', [])
tableModule.component(TABLE_COMPONENT_NAME, tableComponent)

export default tableModule = tableModule.name