import moment from 'moment'
import template from './table.html'
import './table.scss'

class TableController {
    constructor() {

    }
    $onInit() {
        
    }

    $onChanges(changes) {
        angular.forEach(this.tableData, item => {
            let date = item.date
            item.date = moment(date).format('YYYY-MM-DD')
        })
    }
}

export const tableComponent = {
    bindings: {
        tableData: '<'
    },
    template,
    controller: TableController
}


export const TABLE_COMPONENT_NAME = 'tableComponent'