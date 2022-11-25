// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _calcTaxViewJs = require("./views/calcTaxView.js");
var _calcTaxViewJsDefault = parcelHelpers.interopDefault(_calcTaxViewJs);
var _calcTaxSummaryViewJs = require("./views/calcTaxSummaryView.js");
var _calcTaxSummaryViewJsDefault = parcelHelpers.interopDefault(_calcTaxSummaryViewJs);
var _federalSummaryViewJs = require("./views/federalSummaryView.js");
var _federalSummaryViewJsDefault = parcelHelpers.interopDefault(_federalSummaryViewJs);
var _provisionalSummaryViewJs = require("./views/provisionalSummaryView.js");
var _provisionalSummaryViewJsDefault = parcelHelpers.interopDefault(_provisionalSummaryViewJs);
"use strict";
const controlTax = function() {
    // 1) Get salary
    const salary = (0, _calcTaxViewJsDefault.default).getSalary();
    // console.log('controller - Salary:', salary);
    if (!salary) return console.error("Empty Salary");
    // 2) Calculate the Tax in Model
    // const fedralTax =
    _modelJs.calculateTax(salary);
    (0, _calcTaxSummaryViewJsDefault.default).render(_modelJs.tax);
    (0, _federalSummaryViewJsDefault.default).render(_modelJs.tax);
    (0, _provisionalSummaryViewJsDefault.default).render(_modelJs.tax);
};
const init = function() {
    (0, _calcTaxViewJsDefault.default).addHandlerRender(controlTax);
};
init();

},{"./model.js":"Y4A21","./views/calcTaxView.js":"hQ3Az","./views/calcTaxSummaryView.js":"dNtY1","./views/federalSummaryView.js":"8mcwB","./views/provisionalSummaryView.js":"600Xw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tax", ()=>tax);
parcelHelpers.export(exports, "calculateTax", ()=>calculateTax);
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
"use strict";
const tax = {
    fedTaxToPay: [],
    fedTaxRateUsed: [],
    fedIncomeTaxable: [],
    provTaxToPay: [],
    provTaxRateUsed: [],
    provIncomeTaxable: [],
    salary: 0,
    totalFedTax: 0,
    totalProvTax: 0,
    taxToPay: 0,
    takeHome: 0,
    avgTaxRate: 0,
    marginalTax: 0,
    cppMaxAnnEmpAndEmprContri: 0,
    eiMaxAnnEmpPrem: 0
};
const _calculateCPP = function(grossSalary) {
    // console.log(config.CPP.max_annual_pensionable_earning);
    let baseAmount = grossSalary;
    if (grossSalary > _configJs.CPP.max_annual_pensionable_earning) baseAmount = _configJs.CPP.max_annual_pensionable_earning;
    const maxContributionEarning = baseAmount - _configJs.CPP.basic_exemption;
    tax.cppMaxAnnEmpAndEmprContri = maxContributionEarning * (_configJs.CPP.employee_employer_contribution_rate / 100);
    console.log("Max Annual Emp and Empr Contribution:", (0, _helperJs.formatNumberInternational)(tax.cppMaxAnnEmpAndEmprContri));
};
const _calculateEI = function(grossSalary) {
    let baseAmount = grossSalary;
    if (grossSalary > _configJs.EI.max_annual_insurable_earnings) baseAmount = _configJs.EI.max_annual_insurable_earnings;
    tax.eiMaxAnnEmpPrem = baseAmount * (_configJs.EI.rate / 100);
    console.log("Max Annual Emp Premium:", (0, _helperJs.formatNumberInternational)(tax.eiMaxAnnEmpPrem));
};
/**
 * Calculates the TaxToPay for Fedral and Provincial
 * @param {number} grossSalary
 * @param {Array Object} taxArrayObj
 * @returns {Object Array} taxToPay, taxRateUsed
 */ const _calcTaxForFedAndProv = function(grossSalary, taxArrayObj) {
    let taxableIncome = grossSalary;
    const taxToPay = [];
    const taxRateUsed = [];
    const incomeTaxable = [];
    // TAKES THE ARRAY OBJECT OF THE PASSED OJECT AND FILTERS THEM BASED ON THE CONDITION.
    const limits = taxArrayObj.filter((limit)=>grossSalary > limit.lower);
    // console.log('Limits:', limits);
    limits.forEach((arrObj)=>{
        taxableIncome = grossSalary > arrObj.upper ? arrObj.upper - arrObj.lower : grossSalary - arrObj.lower;
        incomeTaxable.push(taxableIncome);
        taxToPay.push(taxableIncome * (arrObj.taxRate / 100));
        taxRateUsed.push(arrObj.taxRate);
    });
    // console.log(
    //   'TaxToPay:',
    //   taxToPay,
    //   taxToPay.reduce((acc, tax) => acc + tax)
    // );
    return {
        incomeTaxable,
        taxToPay,
        taxRateUsed
    };
};
const _fedralTax = function(grossSalary) {
    //  ======= FEDRAL TAX =======
    const { incomeTaxable , taxToPay , taxRateUsed  } = _calcTaxForFedAndProv(grossSalary, _configJs.FEDRAL_TAX);
    tax.fedIncomeTaxable = [
        ...incomeTaxable
    ];
    tax.fedTaxToPay = [
        ...taxToPay
    ];
    tax.fedTaxRateUsed = [
        ...taxRateUsed
    ];
// console.log(
//   `fedralTaxToPay: ${tax.fedTaxToPay}, fedTaxRateUsed: ${tax.fedTaxRateUsed}`
// );
};
const _provincialTax = function(grossSalary) {
    // ======= PROVINCIAL TAX.  =======
    const { incomeTaxable , taxToPay , taxRateUsed  } = _calcTaxForFedAndProv(grossSalary, _configJs.ONTARIO);
    tax.provIncomeTaxable = [
        ...incomeTaxable
    ];
    tax.provTaxToPay = [
        ...taxToPay
    ];
    tax.provTaxRateUsed = [
        ...taxRateUsed
    ];
// console.log(
//   `provTaxToPay: ${provTaxToPay}, provTaxRateUsed: ${provTaxRateUsed}`
// );
};
const calculateTax = function(grossSalary) {
    console.log(`Annual Gross Salary CAD${(0, _helperJs.formatNumberInternational)(grossSalary)}`);
    tax.salary = +grossSalary;
    // const { taxToPay: fedTaxToPay, taxRateUsed: fedTaxRateUsed } =
    _fedralTax(grossSalary);
    // const { taxToPay: provTaxToPay, taxRateUsed: provTaxRateUsed } =
    _provincialTax(grossSalary);
    _calculateCPP(grossSalary);
    _calculateEI(grossSalary);
    tax.totalFedTax = tax.provTaxToPay.reduce((acc, tax)=>acc + tax);
    tax.totalProvTax = tax.fedTaxToPay.reduce((acc, tax)=>acc + tax);
    tax.taxToPay = tax.totalFedTax + tax.totalProvTax;
    tax.takeHome = grossSalary - tax.taxToPay;
    tax.avgTaxRate = tax.taxToPay / grossSalary * 100;
    tax.marginalTax = Math.max(...tax.fedTaxRateUsed) + Math.max(...tax.provTaxRateUsed);
// console.log(
//   `Tax to pay: ${formatNumberInternational(
//     tax.taxToPay
//   )},\nTake home amount: ${formatNumberInternational(
//     tax.takeHome
//   )},\nAverage Tax Rate: ${tax.avgTaxRate.toFixed(2)}%,\nMarginal Tax Rate: ${
//     tax.marginalTax
//   }%`
// );
};

},{"./config.js":"k5Hzs","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PROV_ONTARIO", ()=>PROV_ONTARIO);
parcelHelpers.export(exports, "PROV_NEWFOUNDLAND_AND_LABRADOR", ()=>PROV_NEWFOUNDLAND_AND_LABRADOR);
parcelHelpers.export(exports, "PROV_PRINCE_EDDWARD_ISLAND", ()=>PROV_PRINCE_EDDWARD_ISLAND);
parcelHelpers.export(exports, "PROV_NOVA_SCOTIA", ()=>PROV_NOVA_SCOTIA);
parcelHelpers.export(exports, "PROV_NEW_BRUNSWICK", ()=>PROV_NEW_BRUNSWICK);
parcelHelpers.export(exports, "PROV_QUEBEC", ()=>PROV_QUEBEC);
parcelHelpers.export(exports, "PROV_MAINTOBA", ()=>PROV_MAINTOBA);
parcelHelpers.export(exports, "FEDRAL_TAX", ()=>FEDRAL_TAX);
parcelHelpers.export(exports, "ONTARIO", ()=>ONTARIO);
parcelHelpers.export(exports, "CPP", ()=>CPP);
parcelHelpers.export(exports, "EI", ()=>EI);
const PROV_ONTARIO = "Ontario";
const PROV_NEWFOUNDLAND_AND_LABRADOR = "Newfoundland and Labrador";
const PROV_PRINCE_EDDWARD_ISLAND = "Prince Edward Island";
const PROV_NOVA_SCOTIA = "Nova Scotia";
const PROV_NEW_BRUNSWICK = "New Brunswick";
const PROV_QUEBEC = "Quebec";
const PROV_MAINTOBA = "Manitoba";
const FEDRAL_TAX = [
    {
        lower: 0,
        upper: 50197,
        taxRate: 15
    },
    {
        lower: 50197,
        upper: 100392,
        taxRate: 20.5
    },
    {
        lower: 100392,
        upper: 155625,
        taxRate: 26
    },
    {
        lower: 155625,
        upper: 221708,
        taxRate: 29
    },
    {
        lower: 221708,
        upper: undefined,
        taxRate: 33
    }
];
const ONTARIO = [
    {
        lower: 0,
        upper: 46226,
        taxRate: 5.05
    },
    {
        lower: 46226,
        upper: 92454,
        taxRate: 9.15
    },
    {
        lower: 92454,
        upper: 150000,
        taxRate: 11.16
    },
    {
        lower: 150000,
        upper: 220000,
        taxRate: 12.16
    },
    {
        lower: 220000,
        upper: undefined,
        taxRate: 13.16
    }
];
const CPP = {
    max_annual_pensionable_earning: 64900,
    basic_exemption: 3500,
    max_contributory_earning: 61400,
    employee_employer_contribution_rate: 5.7,
    max_annual_employee_and_employer_contribution: 3499.8,
    max_annual_self_employed_contribution: 6999.6
};
const EI = {
    max_annual_insurable_earnings: 60300,
    rate: 1.58,
    max_annual_employee_premium: 952.74,
    max_annual_employer_premium: 1333.84
}; /* 
Provincial and territorial tax rates (combined chart)
Provinces and territories 	Rates

Newfoundland and Labrador                       	
8.7% on the portion of your taxable income that is $39,147 or less, plus
14.5% on the portion of your taxable income that is more than $39,147 but not more than $78,294, plus
15.8% on the portion of your taxable income that is more than $78,294 but not more than $139,780, plus
17.8% on the portion of your taxable income that is more than $139,780 but not more than $195,693, plus
19.8% on the portion of your taxable income that is more than $195,693 but not more than $250,000, plus
20.8% on the portion of your taxable income that is more than $250,000 but not more than $500,000, plus
21.3% on the portion of your taxable income that is more than $500,000 but not more than $1,000,000, plus
21.8% on the portion of your taxable income that is more than $1,000,000

Prince Edward Island
9.8% on the portion of your taxable income that is $31,984 or less, plus
13.8% on the portion of your taxable income that is more than $31,984 but not more than $63,969, plus
16.7% on the portion of your taxable income that is more than $63,969


Nova Scotia	
8.79% on the portion of your taxable income that is $29,590 or less, plus
14.95% on the portion of your taxable income that is more than $29,590 but not more than $59,180, plus
16.67% on the portion of your taxable income that is more than $59,180 but not more than $93,000, plus
17.5% on the portion of your taxable income that is more than $93,000 but not more than $150,000, plus
21% on the portion of your taxable income that is more than $150,000

New Brunswick	
9.4% on the portion of your taxable income that is $44,887 or less, plus
14.82% on the portion of your taxable income that is more than $44,887 but not more than $89,775, plus
16.52% on the portion of your taxable income that is more than $89,775 but not more than $145,955, plus
17.84% on the portion of your taxable income that is more than $145,955 but not more than $166,280, plus
20.3% on the portion of your taxable income that is more than $166,280

Quebec	Go to Income tax rates (Revenu Québec Web site).
$46,295 or less	15%
More than $46,295 but not more than $92,580	20%
More than $92,580 but not more than $112,655	24%
More than $112,655	25.75%

Ontario	
5.05% on the portion of your taxable income that is $46,226 or less, plus
9.15% on the portion of your taxable income that is more than $46,226 but not more than $92,454, plus
11.16% on the portion of your taxable income that is more than $92,454 but not more than $150,000, plus
12.16% on the portion of your taxable income that is more than $150,000 but not more than $220,000, plus
13.16% on the portion of your taxable income that is more than $220,000

Manitoba	
10.8% on the portion of your taxable income that is $34,431 or less, plus
12.75% on the portion of your taxable income that is more than $34,431 but not more than $74,416, plus
17.4% on the portion of your taxable income that is more than $74,416

Saskatchewan	
10.5% on the portion of your taxable income that is $46,773 or less, plus
12.5% on the portion of your taxable income that is more than $46,773 but not more than $133,638, plus
14.5% on the portion of your taxable income that is more than $133,638

Alberta	
10% on the portion of your taxable income that is $131,220 or less, plus
12% on the portion of your taxable income that is more than $131,220 but not more than $157,464, plus
13% on the portion of your taxable income that is more than $157,464 but not more than $209,952, plus
14% on the portion of your taxable income that is more than $209,952 but not more than $314,928, plus
15% on the portion of your taxable income that is more than $314,928

British Columbia	
5.06% on the portion of your taxable income that is $43,070 or less, plus
7.7% on the portion of your taxable income that is more than $43,070 but not more than $86,141, plus
10.5% on the portion of your taxable income that is more than $86,141 but not more than $98,901, plus
12.29% on the portion of your taxable income that is more than $98,901 but not more than $120,094, plus
14.7% on the portion of your taxable income that is more than $120,094 but not more than $162,832, plus
16.8% on the portion of your taxable income that is more than $162,832 but not more than $227,091, plus
20.5% on the portion of your taxable income that is more than $227,091

Yukon	
6.4% on the portion of your taxable income that is $50,197 or less, plus
9% on the portion of your taxable income that is more than $50,197 but not more than $100,392, plus
10.9% on the portion of your taxable income that is more than $100,392 but not more than $155,625, plus
12.8% on the portion of your taxable income that is more than $155,625 but not more than $500,000, plus
15% on the portion of your taxable income that is more than $500,000

Northwest Territories	
5.9% on the portion of your taxable income that is $45,462 or less, plus
8.6% on the portion of your taxable income that is more than $45,462 but not more than $90,927, plus
12.2% on the portion of your taxable income that is more than $90,927 but not more than $147,826, plus
14.05% on the portion of your taxable income that is more than $147,826

Nunavut	
4% on the portion of your taxable income that is $47,862 or less, plus
7% on the portion of your taxable income that is more than $47,862 but not more than $95,724, plus
9% on the portion of your taxable income that is more than $95,724 but not more than $155,625, plus
11.5% on the portion of your taxable income that is more than $155,625
*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
/**
 * Takes a Number and converts it into a String in International format
 * @param {number} num
 * @returns String in the INternation format of the country
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatNumberInternational", ()=>formatNumberInternational);
const formatNumberInternational = function(num) {
    const options = {
        style: "currency",
        unit: "celsius",
        currency: "CAD"
    };
    return new Intl.NumberFormat("en-CA", options).format(num);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQ3Az":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class CalcTaxView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".salary-form");
    getSalary() {
        const salary = this._parentElement.querySelector(".salary__field").value;
        this._clearInput();
        return salary;
    }
    _clearInput() {
        this._parentElement.querySelector(".salary__field").value = "";
    }
    addHandlerRender(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new CalcTaxView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data, salary) {
        // console.log(data);
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    /**
   * Documentation protected method _clear()
   * This clears the HTML elements in the sections.
   */ _clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dNtY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _helperJs = require("../helper.js");
class CalcTaxSummaryView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".tax-takehome-results");
    _generateMarkup() {
        document.querySelector(".gross-salary").textContent = (0, _helperJs.formatNumberInternational)(this._data.salary);
        // console.log(`
        // <th>Fedral Tax: ${formatNumberInternational(this._data.totalFedTax)}</th>
        // <th>Provincial Tax: ${formatNumberInternational(
        //   this._data.totalProvTax
        // )}</th>
        // <th>Tax to Pay: ${formatNumberInternational(this._data.taxToPay)}</th>
        // <th>Take Home Amount: ${formatNumberInternational(this._data.takeHome)}</th>
        // <th>Average Tax Rate: ${this._data.avgTaxRate.toFixed(2)}%</th>
        // <th>Marginal Tax Rate: ${this._data.marginalTax.toFixed(2)}%</th>
        // `);
        return `
          <tr>
            <td>${(0, _helperJs.formatNumberInternational)(this._data.totalFedTax)}</td>
            <td>${(0, _helperJs.formatNumberInternational)(this._data.totalProvTax)}</td>
            <td>${(0, _helperJs.formatNumberInternational)(this._data.taxToPay)}</td>
            <td>${(0, _helperJs.formatNumberInternational)(this._data.takeHome)}</td>
            <td>${this._data.avgTaxRate.toFixed(2)}%</td>
            <td>${this._data.marginalTax.toFixed(2)}%</td>
            <td>${(0, _helperJs.formatNumberInternational)(this._data.cppMaxAnnEmpAndEmprContri)}</td>
            <td>${(0, _helperJs.formatNumberInternational)(this._data.eiMaxAnnEmpPrem)}</td>
          </tr>
    `;
    }
}
exports.default = new CalcTaxSummaryView();

},{"./View.js":"5cUXS","../helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mcwB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _helperJs = require("../helper.js");
var _configJs = require("../config.js");
class FederalSummaryView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".federal-breakdown");
    _generateMarkup() {
        let markup = "";
        for(let i = 0; i < _configJs.FEDRAL_TAX.length; i++){
            const ZERO = (0, _helperJs.formatNumberInternational)(0);
            markup += `
          <tr>
            <td>${_configJs.FEDRAL_TAX[i].taxRate}%</td>       <!-- Tax Rate -->
            <td>${_configJs.FEDRAL_TAX[i].lower ? (0, _helperJs.formatNumberInternational)(_configJs.FEDRAL_TAX[i].lower) : ZERO}</td> <!-- Bracket Lower Limit -->
            <td>${_configJs.FEDRAL_TAX[i].upper ? (0, _helperJs.formatNumberInternational)(_configJs.FEDRAL_TAX[i].upper) : ZERO}</td>    <!-- Bracket Upper Limit -->
            <td>${this._data.fedIncomeTaxable[i] ? (0, _helperJs.formatNumberInternational)(this._data.fedIncomeTaxable[i]) : ZERO}</td>  <!-- Taxable Income -->
            <td>${this._data.fedTaxToPay[i] ? (0, _helperJs.formatNumberInternational)(this._data.fedTaxToPay[i]) : ZERO}</td>      <!-- Tax to Pay -->
          </tr>
          `;
        }
        return markup;
    }
}
exports.default = new FederalSummaryView();

},{"./View.js":"5cUXS","../helper.js":"lVRAz","../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"600Xw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _helperJs = require("../helper.js");
var _configJs = require("../config.js");
class FederalSummaryView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".provisional-breakdown");
    _generateMarkup() {
        let markup = "";
        for(let i = 0; i < _configJs.ONTARIO.length; i++){
            const ZERO = (0, _helperJs.formatNumberInternational)(0);
            markup += `
          <tr>
            <td>${_configJs.ONTARIO[i].taxRate}%</td>       <!-- Tax Rate -->
            <td>${_configJs.ONTARIO[i].lower ? (0, _helperJs.formatNumberInternational)(_configJs.ONTARIO[i].lower) : ZERO}</td> <!-- Bracket Lower Limit -->
            <td>${_configJs.ONTARIO[i].upper ? (0, _helperJs.formatNumberInternational)(_configJs.ONTARIO[i].upper) : ZERO}</td>    <!-- Bracket Upper Limit -->
            <td>${this._data.provIncomeTaxable[i] ? (0, _helperJs.formatNumberInternational)(this._data.provIncomeTaxable[i]) : ZERO}</td>  <!-- Taxable Income -->
            <td>${this._data.provTaxToPay[i] ? (0, _helperJs.formatNumberInternational)(this._data.provTaxToPay[i]) : ZERO}</td>      <!-- Tax to Pay -->
          </tr>
          `;
        }
        return markup;
    }
}
exports.default = new FederalSummaryView();

},{"./View.js":"5cUXS","../helper.js":"lVRAz","../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequiredd32")

//# sourceMappingURL=index.e37f48ea.js.map
