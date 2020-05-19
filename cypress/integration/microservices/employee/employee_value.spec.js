import serviceRequest from '../../../restservices/request/service_request'
import employeeServiceTestAssist from '../../../testassist/employee_service_test_assist'
import url from '../../../config/serviceconfig/service_url_config'

import {asSequence} from 'sequency'

describe('Test Values in Employee Service', () => {
    specify('test "id" value is null or undefined', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            debugger
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateValueIsNullOrUndefined(data.id))
        })
    })

    specify('test "employee_name" value is null or undefined', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateValueIsNullOrUndefined(data.employee_name))
        })
    })

    specify('test "employee_age" value is null or undefined', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateValueIsNullOrUndefined(data.employee_age))
        })
    })

    specify('test "employee_salary" value is null or undefined', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => employeeServiceTestAssist.validateValueIsNullOrUndefined(data.employee_salary))
        })
    })
})

