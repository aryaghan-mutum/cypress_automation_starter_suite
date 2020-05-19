import {BaseRequest} from '../base_request'
import httpMethod from '../../config/serviceconfig/http_methods_config'

class ServiceRequest extends BaseRequest {

    /**
     * Get HTTP header for requests or for responses
     * @returns {{Accept: string, "Content-Type": string}}
     */
    public getHeaders = () => {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    /**
     * Get Request body for the POST request
     * @param query
     * @param variable
     * @returns {{variables: *, query: *}}
     */
    public getRequestBody = (query, variable) => {
        return {query: query, variables: variable}
    }

    public postRequest = (serviceUrl, requestBody, failStatus) => {
        return {
            method: httpMethod.POST_METHOD,
            url: serviceUrl,
            headers: this.getHeaders(),
            body: requestBody,
            failOnStatusCode: failStatus,
            response: []
        }
    }
}

export default new ServiceRequest()
