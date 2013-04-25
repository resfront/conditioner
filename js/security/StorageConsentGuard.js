define(['Conditioner','module'],function(Conditioner,module){

    'use strict';

    // StorageConsentGuard
    var StorageConsentGuard = function() {

        // current level
        this._level = null;

        // default options
        this._options = {
            'initial':'all',
            'levels':['all','none']
        };

        // set options
        this.setOptions(module.config());

        // set default level
        this._setDefaultLevel();
    };

    var p = StorageConsentGuard.prototype;

    p.setOptions = function(options) {

        if (!options) {
            return;
        }

        // sets initial options
        this._options = Conditioner.mergeObjects(this._options,options);

        this._setDefaultLevel();
    };

    p._setDefaultLevel = function() {
        this.setActiveLevel(this._options.initial);
    };

    p.getLevels = function() {
        return this._options.levels;
    };

    p.getActiveLevel = function() {
        return this._level;
    };

    p.setActiveLevel = function(level) {

        if (level == this._level) {
            return;
        }

        this._level = level;

        Conditioner.Observer.publish(this,'change',this._level);
    };


    // reference to singleton
    var _instance;

    return {
        getInstance:function() {
            if (!_instance) { _instance = new StorageConsentGuard(); }
            return _instance;
        }
    };

});