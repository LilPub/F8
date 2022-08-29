export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';

function loggerTest(message,type = 'TYPE_LOG') {
    console[type](message);
}

export default loggerTest;//chỉ được exprot default được 1 lần 