import serviceRequest from '../../../restservices/request/service_request'
import employeeServiceTestAssist from '../../../testassist/employee_service_test_assist'
import {asSequence} from 'sequency'

const url = require('../../config/url_config')

describe('Test Value Types in Employee Service', () => {
    specify('test "id" value is of type "string"', () => {
        serviceRequest.makeRequest(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateTypeIsString(data.id))
        })
    })

    specify('test "employee_name" value is of type "string"', () => {
        serviceRequest.makeRequest(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateTypeIsString(data.employee_name))
        })
    })

    specify('test "employee_age" value is of type "string"', () => {
        serviceRequest.makeRequest(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateTypeIsString(data.employee_age))
        })
    })

    specify('test "employee_salary" value is of type "string"', () => {
        serviceRequest.makeRequest(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateTypeIsString(data.employee_salary))
        })
    })
})
