const httpStatus = require('../config/constants')
import util from '../utils/util'

const {softExpect} = chai

export class BaseTestAssist {

    constructor() {
    }

    validateStatusISuccessful = (response) => {
        expect(response.status).to.eq(httpStatus.STATUS_200, `Actual Status: ${response.status}. Expected Status: ${httpStatus.STATUS_200}`)
    }

    validateTypeIsString = (value) => {
        let idType = typeof (value) === "string"
        softExpect(idType).to.eq(true, `Value: ${value} is of type: ${typeof value}`)
    }

    validateValueIsNullOrUndefined = (value) => {
        softExpect(util.isNullOrUndefined()).to.eq(true, `Value is ${value}`)
    }

}