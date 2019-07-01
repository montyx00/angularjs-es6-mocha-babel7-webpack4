import angular from 'angular';
import {FORM_CONTROLLER_NAME, FormController} from './form.controller'
import './form.scss'

let formModule = angular.module('stockApp.form', [])
formModule.controller(FORM_CONTROLLER_NAME, FormController)

export default formModule = formModule.name