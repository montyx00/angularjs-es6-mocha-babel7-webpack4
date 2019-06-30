import {assert, expect} from 'chai'

import UserService from '../src/services/user.service'

let service
const USERNAME = 'Joe'

describe('UserService', () => {
    beforeEach(() => {
        service = new UserService
    })

    it('should give back a username', () => {
        assert.equal(service.getUsername(), USERNAME)
    });
})