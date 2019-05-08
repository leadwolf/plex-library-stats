import { format, isValid, parseISO, isBefore, formatDistance } from 'date-fns/esm';
import { fr } from 'date-fns/esm/locale';

/**
 *
 * @param {String|Date} date - ISO format
 * @param {*} defaultValue
 * @param {Object|String} options
 * @param {Boolean} options.acceptFalsyDefault - return the 'defaultDate' even if it's falsy
 * @returns {Date} - the parsed Date, or the default date, or the current date in that order
 */
export const customParseDate = (date, defaultDate, { acceptFalsyDefault } = {}) => {
    if (typeof date === 'string' && isValid(parseISO(date))) return parseISO(date);

    if (date instanceof Date && isValid(date)) return date;

    if (acceptFalsyDefault) return defaultDate;

    return defaultDate || new Date();
};

/**
 *
 * @param {String|Date} rawDate
 * @param {String} customFormat - format to use
 * @param {*} defaultValue
 */
export const formatDateCustom = (rawDate, customFormat, defaultValue = '-') => {
    const parsedDate = customParseDate(rawDate, null, { acceptFalsyDefault: true });

    return parsedDate ? format(parsedDate, customFormat, { awareOfUnicodeTokens: true, locale: fr }) : defaultValue;
};

/**
 *
 * @param {String|Date} rawDate
 * @param {Date|Number} baseDate
 * @param {*} defaultValue
 * @param {Object|String} options
 * @param {Boolean} options.includeSeconds - distances less than a minute are more detailed
 * @param {Boolean} options.addSuffix - result indicates if the second date is earlier or later than the first
 */
export const formatDistanceCustom = (rawDate, baseDate, defaultValue = '-', { includeSeconds, addSuffix } = {}) => {
    const parsedDate = customParseDate(rawDate, null, { acceptFalsyDefault: true });

    return parsedDate ? formatDistance(parsedDate, baseDate, { includeSeconds, addSuffix, locale: fr }) : defaultValue;
};

/**
 *
 * @param {String|Date} rawDate
 * @param {*} defaultValue
 * @returns {String} the date formatted as 'dd/MM/YY' or the default value
 */
export const formatDateShort = (rawDate, defaultValue = '-') => formatDateCustom(rawDate, 'dd/MM/YY', defaultValue);

/**
 *
 * @param {String|Date} rawDate
 * @param {*} defaultValue
 * @returns {String} the date formatted as 'd MMMM Y' or the default value
 */
export const formatDateLong = (rawDate, defaultValue = '-') => formatDateCustom(rawDate, 'd MMMM Y', defaultValue);

/**
 *
 * @param {String|Date} rawDate
 * @param {Object|String} i18n - the i18n state or the 'at' label
 * @param {*} defaultValue
 * @returns {String}
 */
export const formatAtDateTime = (rawDate, i18n, defaultValue = '') => {
    const label = typeof i18n === 'string' ? i18n : i18n.messages['label.at'];

    return formatDateCustom(rawDate, `dd/MM/YYYY '${label}' HH:mm`, defaultValue);
};

/**
 *
 * @param {String|Date} rawDate
 * @param {*} defaultValue
 * @returns {String}
 */
export const formatDateTime = (rawDate, defaultValue = '') =>
    formatDateCustom(rawDate, `dd/MM/YYYY HH:mm`, defaultValue);

/**
 *
 * @param {String|Date} rawFirst
 * @param {String|Date} rawSecond
 * @returns {Boolean} if the first date is before the second. Will return false if any
 * of the two dates are not valid
 */
export const isDateBeforeWithParse = (rawFirst, rawSecond) => {
    const first = customParseDate(rawFirst, null, { acceptFalsyDefault: true });
    const second = customParseDate(rawSecond, null, { acceptFalsyDefault: true });

    if (!first || !second) return false;

    return isBefore(first, second);
};
