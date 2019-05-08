import * as loglevel from 'loglevel';

const log = loglevel.getLogger('default-logger');

log.setDefaultLevel(log.levels.SILENT);
if (process.env.NODE_ENV === 'development') {
    log.setLevel(log.levels.DEBUG);
    window.log = log;
}

export { log, log as logger };
