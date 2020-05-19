class Util {

    /** Returns a boolean expression true if the value is 0 */
    public isEmpty = (value): boolean => {
        return value.length === 0
    }

    /** Returns a boolean expression true if the value is null */
    public isNull = (value): boolean => {
        return value == null
    }

    /** Returns a boolean expression true if the value is undefined */
    public isUndefined = (value): boolean => {
        return typeof value == "undefined"
    }

    /** Returns a boolean expression true if the value is undefined or null*/
    public isNullOrUndefined = (value): boolean => {
        return this.isUndefined(value) || this.isNull(value)
    }

    /** Returns a boolean expression true if the value is undefined or null or 0 */
    public isEmptyOrNullOrUndefined = (value): boolean => {
        return this.isUndefined(value) || this.isEmpty(value) || this.isNull(value)
    }
}

export default new Util()