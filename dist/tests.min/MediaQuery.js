define(["Conditioner"],function(t){"use strict";var n=t.Test.inherit(),e=n.prototype;return e._mql=null,e.arrange=function(){var t=this;this._mql=window.matchMedia(this._rules[0].value),this._mql.addListener(function(){t.assert()})},e._test=function(){return this._mql.matches},n});