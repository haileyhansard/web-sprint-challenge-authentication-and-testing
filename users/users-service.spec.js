const userService = require('./users-service');

describe('isValid', () => {
    it('should respond with Falsy if there is no username and/or password, and Truthy if there is', () => {
        const user = {
            username: 'hailey',
            password: 'pass123'
        }

        expect(userService.isValid(user)).toBeTruthy()
        expect(userService.isValid({username: 'hailey'})).toBeFalsy()
    })

    it('should respond with Falsy if password is not a string', () => {
        const user = {
            username: 'hailey',
            password: 123
        }

        expect(userService.isValid(user)).toBeFalsy()
    })
});