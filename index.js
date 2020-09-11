const { peachpuff } = require('color-name');
/**
 * enenmap
 * By BadBoyHaloCat
 * Enhanced Enmap | By BadBoyHaloCat | Extends Enmap by Evie.Codes
 */

// Modules
const enmap = require('enmap');

// Main class
class enenmap extends enmap {
    constructor(options) {
        let parsedopts = {};
        if (options) {
            // eslint-disable-next-line no-inner-declarations
            function addOpt(name) {
                if (options[name]) {
                    eval(`parsedopts = {...parsedopts, ${name}: ${options[name]}}`);
                }
            }
            addOpt('name');
            addOpt('fetchAll');
            addOpt('dataDir');
            addOpt('cloneLevel');
            addOpt('polling');
            addOpt('pollingInterval');
            addOpt('ensureProps');
            addOpt('autoEnsure');
            addOpt('autoFetch');
            addOpt('wal');
        }
        super(parsedopts);
    }
}

module.exports = enenmap;