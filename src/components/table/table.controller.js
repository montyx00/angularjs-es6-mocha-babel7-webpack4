import {ALGORITHM_SERVICE_NAME} from '../../services/algorithm.service'

export class TableController {
    
    constructor(AlgorithmService) {
        this.algorithm = AlgorithmService
        this.registerCallback()
    }

    callback(data) {
        this.tableData = data
        console.log(this.tableData)
    }
    registerCallback() {
        this.algorithm.registerCallback(this.callback)
    }
}
TableController.$inject = [ALGORITHM_SERVICE_NAME]
export const TABLE_CONTROLLER_NAME = 'TableController'