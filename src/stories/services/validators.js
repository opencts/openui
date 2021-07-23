/**
 * @returns {boolean} true if email is valid
 * @param {string} value email value
 */
function v_email(value) {
    return /.+@.+\..{2,8}/.test(value);
}

/**
 * @returns {boolean} true if value >= limit
 * @param {number | string} value value
 * @param {number | string} limit limit
 */
function v_min(value, limit) {
    return Number(value) >= Number(limit);
}

/**
 * @returns {boolean} true if value <= limit
 * @param {number | string} value value
 * @param {number | string} limit limit
 */
function v_max(value, limit) {
    return Number(value) <= Number(limit);
}

/**
 * @returns {boolean} true if length of value is greater or equal to limit
 * @param {string} value value
 * @param {number | string} limit limit
 */
function v_minLength(value, limit) {
    return value.length >= Number(limit);
}

/**
 * @returns {boolean} true if length of value is less or equal to limit
 * @param {string} value value
 * @param {number | string} limit limit
 */
function v_maxLength(value, limit) {
    return value.length <= Number(limit);
}

/**
 * @returns {boolean} true if pattern matches value
 * @param {string} value value
 * @param {pattern} pattern pattern
 */
function v_pattern(value, pattern) {
    return (new RegExp(pattern)).test(value);
}

/**
 * @returns {boolean} true if value is not empty
 * @param {string} value value
 */
function v_required(value) {
    return String(value).length > 0;
}

/**
 * @returns {boolean} true if file's mime-type corresponds to one of specified in accepted list
 * @param {File} file file object to test
 * @param {string} accepted accepted extension string list separated by space or comma
 */
function v_accept(file, accepted) {
    if (accepted.trim() === '*') {
        return true;
    }
    const extensions = accepted.split(/[ ,;-]/);
    const foundedExtension = extensions.filter(el => el.indexOf(file.type) !== -1);
    return foundedExtension.length > 0;
}

/**
 * @returns {boolean} true if file's size is less or equal to limit
 * @param {File} file file object to test
 * @param {number | string} limit file's size limit
 */
function v_maxSize(file, limit) {
    return file.size <= Number(limit);
}

/**
 * @returns {boolean} true if value passed all conditions
 * @param {string} value password value
 * @param {{
 *  {boolean} strong,
 *  {boolean} lowerChars,
 *  {boolean} upperChars,
 *  {boolean} numericChars,
 *  {boolean} specialChars,
 *  {number} min,
 * }} conditions conditions
 */
function v_password(value, conditions) {
    let condLC = true, condUC = true, condSC = true, condMin = conditions.strong ? 8 : true;

    if (conditions.lowerChars || conditions.strong) {
        condLC = /[a-z]+/.test(value);
    }

    if (conditions.upperChars || conditions.strong) {
        condUC = /[A-Z]+/.test(value);
    }

    if (conditions.numericChars || conditions.strong) {
        condUC = /\d+/.test(value);
    }

    if (conditions.specialChars || conditions.strong) {
        condSC = /[!@#%^&*_ =]+/.test(value);
    }

    if (conditions.min) {
        condMin = String(value).length >= Number(conditions.min);
    }

    return condLC && condUC && condSC && condMin;
}

const Validator = {
    email: v_email,
    min: v_min,
    max: v_max,
    minLength: v_minLength,
    maxLength: v_maxLength,
    pattern: v_pattern,
    required: v_required,
    accept: v_accept,
    maxSize: v_maxSize,
    password: v_password
};

/**
 * @param {string} value 
 * @param {object} schema 
 */
export function validate(value, schema) {
    let valid = true, errors = [];
    for (const attr in schema) {
        valid = valid && Validator[attr](value, schema[attr]);
        if (!Validator[attr](value, schema[attr])) {
            errors.push(attr);
        }
    }
    return { valid, errors };
}

export const _ERROR_MSGS = {
    email: 'Need a valid email address',
    min: value => `Your value must be greater than ${value - 1}`,
    max: value => `Your value must be less than ${value + 1}`,
    minLength: value => `${value} characters at least`,
    maxLength: value => `${value} characters at most`,
    pattern: 'Invalid format',
    required: 'This field is required',
    password: ({min, strong}) => strong ? 
        '8 characters at least - Lowercase, upperCase, number and character among -- !@#%^&*_ = -- are required':
        `${min} characters at least`,
    date: 'Year is required'
};