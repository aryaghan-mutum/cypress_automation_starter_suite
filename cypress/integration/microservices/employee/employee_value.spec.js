import employeeServiceTestAssist from '../../../testassist/employee_service_test_assist'
import url from '../../../config/serviceconfig/service_url_config'

import {asSequence} from 'sequency'

describe('Test Values are null or undefined & test Types in Employee Service', () => {

    specify('test "id" value is null or undefined and test its type', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                employeeServiceTestAssist.validateValueIsNullOrUndefined(data.id)
                employeeServiceTestAssist.validateTypeIsString(data.id)
            })
        })
    })

    specify('test "employee_name" value is null or undefined and test its type', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                employeeServiceTestAssist.validateValueIsNullOrUndefined(data.employee_name)
                employeeServiceTestAssist.validateTypeIsString(data.employee_name)
            })
        })
    })

    specify('test "employee_age" value is null or undefined and test its type', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                employeeServiceTestAssist.validateValueIsNullOrUndefined(data.employee_age)
                employeeServiceTestAssist.validateTypeIsString(data.employee_age)
            })
        })
    })

    specify('test "employee_salary" value is null or undefined and test its type', () => {
        cy.request(url.EMPLOYEE_URL).then(response => {
            employeeServiceTestAssist.validateStatusISuccessful(response)
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                employeeServiceTestAssist.validateValueIsNullOrUndefined(data.employee_salary)
                employeeServiceTestAssist.validateTypeIsString(data.employee_salary)
            })
        })
    })
})

