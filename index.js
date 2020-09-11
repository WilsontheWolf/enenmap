/**
 * enenmap
 * By BadBoyHaloCat
 * Enhanced Enmap | By BadBoyHaloCat | Extends Enmap by Evie.Codes
 */

// Modules
const Enmap = require('enmap');

// Main class
class EnEnmap extends Enmap {
    /**
     * Initializes a new Enenmap, with options.
     * @param {Object} [options={}] Additional options for the enenmap.
     * @param {String} [options.name=""] The name of the enenmap. If present, Enmap marks it as persistent. Represents the table name in sqlite.
     * @param {Boolean} [options.fetchAll=true] When enabled, will automatically fetch keys that have been requested via `get()` or other retrieval options.
     * @param {String} [options.dataDir="./data"] Determines where the sqlite files will be stored. Can be relative or absolute. **Windows users, __remember to escape your backslashes__!**
     * @param {String} [options.cloneLevel="deep"] Determines how objects and arrays are treated then inserting and retrieving from the database.
     * @param {Boolean} [options.polling=false] Determines whether enenmap will try to fetch changes from the Database at a regular interval. This allows multiple processes to modify the values with ease!
     * @param {String} [options.pollingInterval="1000"] How often (in *milliseconds*) to poll the database. See `options.polling`.
     * @param {Boolean} [options.ensureProps=true] If enabled and the value in the enenmap is an object, using ensure() will also ensure that every property present in the default object will be added to the value, if it's absent.
     * @param {*} [options.autoEnsure] When provided a value, essentially runs ensure(key, autoEnsure) automatically so you don't have to. This is especially useful on get(), but will also apply on set(), and any array and object methods that interact with the database.
     * @param {Boolean} [options.autoFetch=true] When enabled, attempting to get() a key or do any operation on existing keys (such as array push, etc) will automatically fetch the current key value from the database. Keys that are automatically fetched remain in memory and are not cleared.
     * @param {Boolean} [options.wal=false] Check out Write-Ahead Logging: https://www.sqlite.org/wal.html
     * 
     * @example
     * const Enenmap = require("enenmap");
     * 
     * // Non-persistent enmap:
     * const inMemory = new Enenmap();
     *
     * // Named, Persistent enenmap with string option
     * const myEnmap = new Enenmap("testing");
     *
     * // Enenmap that does not fetch everything, but does so on per-query basis:
     * const myEnmap = new Enenmap({name: "testing", fetchAll: false});
     * 
     * // Enenmap that automatically assigns a default object when getting or setting anything.
     * const autoEnmap = new Enenmap({name: "settings", autoEnsure: { setting1: false, message: "default message"}})
     */
    constructor(options = {}) { // No defaults needed, enmap does this.
        let parsedOpts = {};
        if (options) {
            // eslint-disable-next-line no-inner-declarations
            [
                'name',
                'fetchAll',
                'dataDir',
                'cloneLevel',
                'polling',
                'pollingInterval',
                'ensureProps',
                'autoEnsure',
                'autoFetch',
                'wal'
            ]
                .forEach(name => {
                    if (options[name]) {parsedOpts[name] = options[name];}
                }
                );

        }
        super(parsedOpts);
    }
}

module.exports = EnEnmap;