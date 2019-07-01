import {HOME_CONTROLLER_NAME} from '../components/home/home.controller'
import {FORM_CONTROLLER_NAME} from '../components/form/form.controller'
import {TABLE_CONTROLLER_NAME} from '../components/table/table.controller'

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
        url: '/',
        views: {
            '': {
                template: require('../components/home/home.html'),
                controller: HOME_CONTROLLER_NAME,
                controllerAs: 'home'
            },
            'inputform@home': {
                template: require('../components/form/form.html'),
                controller: FORM_CONTROLLER_NAME,
                controllerAs: 'form'
            },
            'datatable@home': {
                template: require('../components/table/table.html'),
                controller: TABLE_CONTROLLER_NAME,
                controllerAs: 'dataTable'
            }
        }
    });
}

routes.$inject = ['$stateProvider']