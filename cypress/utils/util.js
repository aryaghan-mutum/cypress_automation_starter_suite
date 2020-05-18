class Util {
    /** Returns a boolean expression true if the value is 0 */
    isEmpty = (value) => value.length === 0

    /** Returns a boolean expression true if the value is null */
    isNull = (value) => value == null

    /** Returns a boolean expression true if the value is undefined */
    isUndefined = (value) => typeof value == "undefined"

    /** Returns a boolean expression true if the value is undefined or null*/
    isNullOrUndefined = (value) => this.isUndefined(value) || this.isNull(value)

    /** Returns a boolean expression true if the value is undefined or null or 0 */
    isEmptyOrNullOrUndefined = (value) => this.isUndefined(value) || this.isEmpty(value) || this.isNull(value)
}

export default new Util()