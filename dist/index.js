var Mr = { exports: {} }, Ge = {}, hr = { exports: {} }, Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var ft;
function qt() {
  return ft || (ft = 1, function(R, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var U = "18.2.0", S = Symbol.for("react.element"), Z = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), re = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), ue = Symbol.iterator, ie = "@@iterator";
      function $(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ue && e[ue] || e[ie];
        return typeof r == "function" ? r : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, M = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ye = null;
      function Ce(e) {
        ye = e;
      }
      de.setExtraStackFrame = function(e) {
        ye = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Se = !1, K = !1, X = !1, q = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: G
      };
      q.ReactDebugCurrentFrame = de, q.ReactCurrentActQueue = M;
      function ce(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("warn", e, a);
        }
      }
      function v(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("error", e, a);
        }
      }
      function ve(e, r, a) {
        {
          var o = q.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Te[i])
            return;
          v("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, w = {};
      Object.freeze(w);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var j = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, x = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var k in j)
          j.hasOwnProperty(k) && x(k, j[k]);
      }
      function T() {
      }
      T.prototype = _.prototype;
      function Y(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      var ge = Y.prototype = new T();
      ge.constructor = Y, h(ge, _.prototype), ge.isPureReactComponent = !0;
      function gr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function $e(e) {
        return Xe(e);
      }
      function _r(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function ke(e) {
        if (Le(e))
          return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(e)), Oe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ae:
            return "Fragment";
          case Z:
            return "Portal";
          case ee:
            return "Profiler";
          case oe:
            return "StrictMode";
          case B:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case re:
              var r = e;
              return Pe(r) + ".Consumer";
            case N:
              var a = e;
              return Pe(a._context) + ".Provider";
            case W:
              return Qe(e, e.render, "ForwardRef");
            case J:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case le: {
              var i = e, p = i._payload, l = i._init;
              try {
                return pe(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, We;
      We = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
        var a = function() {
          Ze || (Ze = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && G.current && e.__self && G.current.stateNode !== e.__self) {
          var r = pe(G.current.type);
          We[r] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var xe = function(e, r, a, o, i, p, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Er(e, r, a) {
        var o, i = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), _e(r) && (ke(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          i.children = a;
        else if (P > 1) {
          for (var A = Array(P), D = 0; D < P; D++)
            A[D] = arguments[D + 2];
          Object.freeze && Object.freeze(A), i.children = A;
        }
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (o in F)
            i[o] === void 0 && (i[o] = F[o]);
        }
        if (p || l) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && br(i, V), l && rr(i, V);
        }
        return xe(e, p, l, y, E, G.current, i);
      }
      function Rr(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Cr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, P = G.current), _e(r) && (ke(r.key), p = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? i[o] = A[o] : i[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          i.children = a;
        else if (D > 1) {
          for (var F = Array(D), V = 0; V < D; V++)
            F[V] = arguments[V + 2];
          i.children = F;
        }
        return xe(e.type, p, l, y, E, P, i);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === S;
      }
      var nr = ".", wr = ":";
      function Sr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var Me = !1, ar = /\/+/g;
      function he(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Sr("" + e.key)) : r.toString(36);
      }
      function Ee(e, r, a, o, i) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case S:
                case Z:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), P = o === "" ? nr + Ae(y, 0) : o;
          if ($e(E)) {
            var A = "";
            P != null && (A = he(P) + "/"), Ee(E, r, A, "", function(Bt) {
              return Bt;
            });
          } else
            E != null && (be(E) && (E.key && (!y || y.key !== E.key) && ke(E.key), E = Rr(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                he("" + E.key) + "/"
              ) : "") + P
            )), r.push(E));
          return 1;
        }
        var D, F, V = 0, H = o === "" ? nr : o + wr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            D = e[yr], F = H + Ae(D, yr), V += Ee(D, r, a, F, i);
        else {
          var Wr = $(e);
          if (typeof Wr == "function") {
            var it = e;
            Wr === it.entries && (Me || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Ut = Wr.call(it), st, Yt = 0; !(st = Ut.next()).done; )
              D = st.value, F = H + Ae(D, Yt++), V += Ee(D, r, a, F, i);
          } else if (p === "object") {
            var ct = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ct === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ct) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return V;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return Ee(e, o, "", "", function(p) {
          return r.call(a, p, i++);
        }), o;
      }
      function Tr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Or(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: re,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: N,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var p = {
            $$typeof: re,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, v("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, v("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ie = -1, qe = 0, ze = 1, kr = 2;
      function Pr(e) {
        if (e._status === Ie) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === qe || e._status === Ie) {
              var l = e;
              l._status = ze, l._result = p;
            }
          }, function(p) {
            if (e._status === qe || e._status === Ie) {
              var l = e;
              l._status = kr, l._result = p;
            }
          }), e._status === Ie) {
            var o = e;
            o._status = qe, o._result = a;
          }
        }
        if (e._status === ze) {
          var i = e._result;
          return i === void 0 && v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function jr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ie,
          _result: e
        }, a = {
          $$typeof: le,
          _payload: r,
          _init: Pr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                v("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(p) {
                v("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === J ? v("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? v("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && v("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && v("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: W,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ae || e === ee || X || e === oe || e === B || e === te || K || e === Fe || we || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === le || e.$$typeof === J || e.$$typeof === N || e.$$typeof === re || e.$$typeof === W || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || v("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: J,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = me.current;
        return e === null && v(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? v("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && v("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function O(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function z(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function I(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function L(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function Q(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Re(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function fe(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function _t() {
        var e = f();
        return e.useTransition();
      }
      function bt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function Et() {
        var e = f();
        return e.useId();
      }
      function Rt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Ur, Yr, Br, qr, zr, Hr;
      function Gr() {
      }
      Gr.__reactDisabledLog = !0;
      function Ct() {
        {
          if (He === 0) {
            Vr = console.log, Ur = console.info, Yr = console.warn, Br = console.error, qr = console.group, zr = console.groupCollapsed, Hr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Gr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function wt() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Vr
              }),
              info: h({}, e, {
                value: Ur
              }),
              warn: h({}, e, {
                value: Yr
              }),
              error: h({}, e, {
                value: Br
              }),
              group: h({}, e, {
                value: qr
              }),
              groupCollapsed: h({}, e, {
                value: zr
              }),
              groupEnd: h({}, e, {
                value: Hr
              })
            });
          }
          He < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ar = q.ReactCurrentDispatcher, Dr;
      function cr(e, r, a) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Dr = o && o[1] || "";
            }
          return `
` + Dr + e;
        }
      }
      var Ir = !1, fr;
      {
        var St = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new St();
      }
      function Kr(e, r) {
        if (!e || Ir)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Ir = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = Ar.current, Ar.current = null, Ct();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (H) {
                o = H;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (H) {
                o = H;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (H) {
              o = H;
            }
            e();
          }
        } catch (H) {
          if (H && o && typeof H.stack == "string") {
            for (var y = H.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, A = E.length - 1; P >= 1 && A >= 0 && y[P] !== E[A]; )
              A--;
            for (; P >= 1 && A >= 0; P--, A--)
              if (y[P] !== E[A]) {
                if (P !== 1 || A !== 1)
                  do
                    if (P--, A--, A < 0 || y[P] !== E[A]) {
                      var D = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, D), D;
                    }
                  while (P >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Ir = !1, Ar.current = p, wt(), Error.prepareStackTrace = i;
        }
        var F = e ? e.displayName || e.name : "", V = F ? cr(F) : "";
        return typeof e == "function" && fr.set(e, V), V;
      }
      function Tt(e, r, a) {
        return Kr(e, !1);
      }
      function Ot(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Kr(e, Ot(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case B:
            return cr("Suspense");
          case te:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case W:
              return Tt(e.render);
            case J:
              return lr(e.type, r, a);
            case le: {
              var o = e, i = o._payload, p = o._init;
              try {
                return lr(p(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Jr = {}, Xr = q.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Xr.setExtraStackFrame(a);
        } else
          Xr.setExtraStackFrame(null);
      }
      function kt(e, r, a, o, i) {
        {
          var p = Function.call.bind(je);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (dr(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), dr(null)), y instanceof Error && !(y.message in Jr) && (Jr[y.message] = !0, dr(i), v("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Fr;
      Fr = !1;
      function Qr() {
        if (G.current) {
          var e = pe(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Pt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function jt(e) {
        return e != null ? Pt(e.__source) : "";
      }
      var Zr = {};
      function xt(e) {
        var r = Qr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function et(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = xt(r);
          if (!Zr[a]) {
            Zr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== G.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), Ve(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function rt(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && et(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = $(e);
            if (typeof i == "function" && i !== e.entries)
              for (var p = i.call(e), l; !(l = p.next()).done; )
                be(l.value) && et(l.value, r);
          }
        }
      }
      function tt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === W || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === J))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            kt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var i = pe(r);
            v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function At(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function nt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = jt(r);
          p ? i += p : i += Qr();
          var l;
          e === null ? l = "null" : $e(e) ? l = "array" : e !== void 0 && e.$$typeof === S ? (l = "<" + (pe(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = Er.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            rt(arguments[E], e);
        return e === ae ? At(y) : tt(y), y;
      }
      var at = !1;
      function Dt(e) {
        var r = nt.bind(null, e);
        return r.type = e, at || (at = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function It(e, r, a) {
        for (var o = Cr.apply(this, arguments), i = 2; i < arguments.length; i++)
          rt(arguments[i], o.type);
        return tt(o), o;
      }
      function Ft(e, r) {
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ot = !1, vr = null;
      function $t(e) {
        if (vr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = R && R[r];
            vr = a.call(R, "timers").setImmediate;
          } catch {
            vr = function(i) {
              ot === !1 && (ot = !0, typeof MessageChannel > "u" && v("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = i, p.port2.postMessage(void 0);
            };
          }
        return vr(e);
      }
      var Ue = 0, ut = !1;
      function Lt(e) {
        {
          var r = Ue;
          Ue++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var i = M.current;
              i !== null && (M.didScheduleLegacyUpdate = !1, Nr(i));
            }
          } catch (F) {
            throw pr(r), F;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function(F, V) {
                l = !0, p.then(function(H) {
                  pr(r), Ue === 0 ? $r(H, F, V) : F(H);
                }, function(H) {
                  pr(r), V(H);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ut = !0, v("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (pr(r), Ue === 0) {
              var P = M.current;
              P !== null && (Nr(P), M.current = null);
              var A = {
                then: function(F, V) {
                  M.current === null ? (M.current = [], $r(E, F, V)) : F(E);
                }
              };
              return A;
            } else {
              var D = {
                then: function(F, V) {
                  F(E);
                }
              };
              return D;
            }
          }
        }
      }
      function pr(e) {
        e !== Ue - 1 && v("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function $r(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Nr(o), $t(function() {
                o.length === 0 ? (M.current = null, r(e)) : $r(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var Lr = !1;
      function Nr(e) {
        if (!Lr) {
          Lr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Lr = !1;
          }
        }
      }
      var Nt = nt, Wt = It, Mt = Dt, Vt = {
        map: De,
        forEach: or,
        count: Tr,
        toArray: Or,
        only: ur
      };
      d.Children = Vt, d.Component = _, d.Fragment = ae, d.Profiler = ee, d.PureComponent = Y, d.StrictMode = oe, d.Suspense = B, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, d.cloneElement = Wt, d.createContext = ir, d.createElement = Nt, d.createFactory = Mt, d.createRef = gr, d.forwardRef = xr, d.isValidElement = be, d.lazy = jr, d.memo = c, d.startTransition = Ft, d.unstable_act = Lt, d.useCallback = Q, d.useContext = C, d.useDebugValue = fe, d.useDeferredValue = bt, d.useEffect = z, d.useId = Et, d.useImperativeHandle = sr, d.useInsertionEffect = I, d.useLayoutEffect = L, d.useMemo = Re, d.useReducer = b, d.useRef = m, d.useState = O, d.useSyncExternalStore = Rt, d.useTransition = _t, d.version = U, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
var g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function zt() {
  if (lt)
    return g;
  lt = 1;
  var R = Symbol.for("react.element"), d = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), oe = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), re = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), B = Symbol.iterator;
  function te(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, Fe = {};
  function ue(n, s, h) {
    this.props = n, this.context = s, this.refs = Fe, this.updater = h || J;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ue.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = ue.prototype;
  function $(n, s, h) {
    this.props = n, this.context = s, this.refs = Fe, this.updater = h || J;
  }
  var me = $.prototype = new ie();
  me.constructor = $, le(me, ue.prototype), me.isPureReactComponent = !0;
  var se = Array.isArray, M = Object.prototype.hasOwnProperty, G = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, s, h) {
    var w, _ = {}, j = null, x = null;
    if (s != null)
      for (w in s.ref !== void 0 && (x = s.ref), s.key !== void 0 && (j = "" + s.key), s)
        M.call(s, w) && !de.hasOwnProperty(w) && (_[w] = s[w]);
    var k = arguments.length - 2;
    if (k === 1)
      _.children = h;
    else if (1 < k) {
      for (var T = Array(k), Y = 0; Y < k; Y++)
        T[Y] = arguments[Y + 2];
      _.children = T;
    }
    if (n && n.defaultProps)
      for (w in k = n.defaultProps, k)
        _[w] === void 0 && (_[w] = k[w]);
    return { $$typeof: R, type: n, key: j, ref: x, props: _, _owner: G.current };
  }
  function Ce(n, s) {
    return { $$typeof: R, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === R;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var Se = /\/+/g;
  function K(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function X(n, s, h, w, _) {
    var j = typeof n;
    (j === "undefined" || j === "boolean") && (n = null);
    var x = !1;
    if (n === null)
      x = !0;
    else
      switch (j) {
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case R:
            case d:
              x = !0;
          }
      }
    if (x)
      return x = n, _ = _(x), n = w === "" ? "." + K(x, 0) : w, se(_) ? (h = "", n != null && (h = n.replace(Se, "$&/") + "/"), X(_, s, h, "", function(Y) {
        return Y;
      })) : _ != null && (we(_) && (_ = Ce(_, h + (!_.key || x && x.key === _.key ? "" : ("" + _.key).replace(Se, "$&/") + "/") + n)), s.push(_)), 1;
    if (x = 0, w = w === "" ? "." : w + ":", se(n))
      for (var k = 0; k < n.length; k++) {
        j = n[k];
        var T = w + K(j, k);
        x += X(j, s, h, T, _);
      }
    else if (T = te(n), typeof T == "function")
      for (n = T.call(n), k = 0; !(j = n.next()).done; )
        j = j.value, T = w + K(j, k++), x += X(j, s, h, T, _);
    else if (j === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return x;
  }
  function q(n, s, h) {
    if (n == null)
      return n;
    var w = [], _ = 0;
    return X(n, w, "", "", function(j) {
      return s.call(h, j, _++);
    }), w;
  }
  function ce(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var v = { current: null }, ve = { transition: null }, Te = { ReactCurrentDispatcher: v, ReactCurrentBatchConfig: ve, ReactCurrentOwner: G };
  return g.Children = { map: q, forEach: function(n, s, h) {
    q(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return q(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return q(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ue, g.Fragment = U, g.Profiler = Z, g.PureComponent = $, g.StrictMode = S, g.Suspense = N, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var w = le({}, n.props), _ = n.key, j = n.ref, x = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (j = s.ref, x = G.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var k = n.type.defaultProps;
      for (T in s)
        M.call(s, T) && !de.hasOwnProperty(T) && (w[T] = s[T] === void 0 && k !== void 0 ? k[T] : s[T]);
    }
    var T = arguments.length - 2;
    if (T === 1)
      w.children = h;
    else if (1 < T) {
      k = Array(T);
      for (var Y = 0; Y < T; Y++)
        k[Y] = arguments[Y + 2];
      w.children = k;
    }
    return { $$typeof: R, type: n.type, key: _, ref: j, props: w, _owner: x };
  }, g.createContext = function(n) {
    return n = { $$typeof: oe, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ae, _context: n }, n.Consumer = n;
  }, g.createElement = ye, g.createFactory = function(n) {
    var s = ye.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: ee, render: n };
  }, g.isValidElement = we, g.lazy = function(n) {
    return { $$typeof: W, _payload: { _status: -1, _result: n }, _init: ce };
  }, g.memo = function(n, s) {
    return { $$typeof: re, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return v.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return v.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return v.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return v.current.useEffect(n, s);
  }, g.useId = function() {
    return v.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return v.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return v.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return v.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return v.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return v.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return v.current.useRef(n);
  }, g.useState = function(n) {
    return v.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return v.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return v.current.useTransition();
  }, g.version = "18.2.0", g;
}
var dt;
function mt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? hr.exports = zt() : hr.exports = qt()), hr.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Ht() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var R = mt(), d = Symbol.for("react.element"), U = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), ee = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), le = Symbol.iterator, Fe = "@@iterator";
    function ue(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = le && t[le] || t[Fe];
      return typeof u == "function" ? u : null;
    }
    var ie = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        me("error", t, c);
      }
    }
    function me(t, u, c) {
      {
        var f = ie.ReactDebugCurrentFrame, C = f.getStackAddendum();
        C !== "" && (u += "%s", c = c.concat([C]));
        var O = c.map(function(b) {
          return String(b);
        });
        O.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, O);
      }
    }
    var se = !1, M = !1, G = !1, de = !1, ye = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === S || t === ae || ye || t === Z || t === re || t === W || de || t === J || se || M || G || typeof t == "object" && t !== null && (t.$$typeof === te || t.$$typeof === B || t.$$typeof === oe || t.$$typeof === ee || t.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var C = u.displayName || u.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function K(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case S:
          return "Fragment";
        case U:
          return "Portal";
        case ae:
          return "Profiler";
        case Z:
          return "StrictMode";
        case re:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ee:
            var u = t;
            return Se(u) + ".Consumer";
          case oe:
            var c = t;
            return Se(c._context) + ".Provider";
          case N:
            return Ye(t, t.render, "ForwardRef");
          case B:
            var f = t.displayName || null;
            return f !== null ? f : K(t.type) || "Memo";
          case te: {
            var C = t, O = C._payload, b = C._init;
            try {
              return K(b(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, q = 0, ce, v, ve, Te, n, s, h;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function _() {
      {
        if (q === 0) {
          ce = console.log, v = console.info, ve = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        q++;
      }
    }
    function j() {
      {
        if (q--, q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: ce
            }),
            info: X({}, t, {
              value: v
            }),
            warn: X({}, t, {
              value: ve
            }),
            error: X({}, t, {
              value: Te
            }),
            group: X({}, t, {
              value: n
            }),
            groupCollapsed: X({}, t, {
              value: s
            }),
            groupEnd: X({}, t, {
              value: h
            })
          });
        }
        q < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = ie.ReactCurrentDispatcher, k;
    function T(t, u, c) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (C) {
            var f = C.stack.trim().match(/\n( *(at )?)/);
            k = f && f[1] || "";
          }
        return `
` + k + t;
      }
    }
    var Y = !1, ge;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new gr();
    }
    function Xe(t, u) {
      if (!t || Y)
        return "";
      {
        var c = ge.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      Y = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = x.current, x.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (fe) {
              f = fe;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (fe) {
              f = fe;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            f = fe;
          }
          t();
        }
      } catch (fe) {
        if (fe && f && typeof fe.stack == "string") {
          for (var m = fe.stack.split(`
`), z = f.stack.split(`
`), I = m.length - 1, L = z.length - 1; I >= 1 && L >= 0 && m[I] !== z[L]; )
            L--;
          for (; I >= 1 && L >= 0; I--, L--)
            if (m[I] !== z[L]) {
              if (I !== 1 || L !== 1)
                do
                  if (I--, L--, L < 0 || m[I] !== z[L]) {
                    var Q = `
` + m[I].replace(" at new ", " at ");
                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, Q), Q;
                  }
                while (I >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        Y = !1, x.current = O, j(), Error.prepareStackTrace = C;
      }
      var Re = t ? t.displayName || t.name : "", sr = Re ? T(Re) : "";
      return typeof t == "function" && ge.set(t, sr), sr;
    }
    function $e(t, u, c) {
      return Xe(t, !1);
    }
    function _r(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, _r(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case re:
          return T("Suspense");
        case W:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case N:
            return $e(t.render);
          case B:
            return Le(t.type, u, c);
          case te: {
            var f = t, C = f._payload, O = f._init;
            try {
              return Le(O(C), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, ke = {}, Qe = ie.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function pe(t, u, c, f, C) {
      {
        var O = Function.call.bind(Oe);
        for (var b in t)
          if (O(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var z = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              m = I;
            }
            m && !(m instanceof Error) && (Pe(C), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), Pe(null)), m instanceof Error && !(m.message in ke) && (ke[m.message] = !0, Pe(C), $("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var je = Array.isArray;
    function Ne(t) {
      return je(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), We(t);
    }
    var _e = ie.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, xe;
    xe = {};
    function Er(t) {
      if (Oe.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Rr(t) {
      if (Oe.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Cr(t, u) {
      if (typeof t.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var c = K(_e.current.type);
        xe[c] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(_e.current.type), t.ref), xe[c] = !0);
      }
    }
    function be(t, u) {
      {
        var c = function() {
          rr || (rr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var c = function() {
          tr || (tr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, u, c, f, C, O, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Sr(t, u, c, f, C) {
      {
        var O, b = {}, m = null, z = null;
        c !== void 0 && (Be(c), m = "" + c), Rr(u) && (Be(u.key), m = "" + u.key), Er(u) && (z = u.ref, Cr(u, C));
        for (O in u)
          Oe.call(u, O) && !br.hasOwnProperty(O) && (b[O] = u[O]);
        if (t && t.defaultProps) {
          var I = t.defaultProps;
          for (O in I)
            b[O] === void 0 && (b[O] = I[O]);
        }
        if (m || z) {
          var L = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && be(b, L), z && nr(b, L);
        }
        return wr(t, m, z, C, f, _e.current, b);
      }
    }
    var Me = ie.ReactCurrentOwner, ar = ie.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function De() {
      {
        if (Me.current) {
          var t = K(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Tr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Or(t) {
      {
        var u = De();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Or(u);
        if (or[c])
          return;
        or[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Me.current && (f = " It was passed a child from " + K(t._owner.type) + "."), he(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), he(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            Ee(f) && ur(f, u);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ue(t);
          if (typeof C == "function" && C !== t.entries)
            for (var O = C.call(t), b; !(b = O.next()).done; )
              Ee(b.value) && ur(b.value, u);
        }
      }
    }
    function Ie(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === B))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = K(u);
          pe(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var C = K(u);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            he(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function ze(t, u, c, f, C, O) {
      {
        var b = we(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Tr(C);
          z ? m += z : m += De();
          var I;
          t === null ? I = "null" : Ne(t) ? I = "array" : t !== void 0 && t.$$typeof === d ? (I = "<" + (K(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : I = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, m);
        }
        var L = Sr(t, u, c, C, O);
        if (L == null)
          return L;
        if (b) {
          var Q = u.children;
          if (Q !== void 0)
            if (f)
              if (Ne(Q)) {
                for (var Re = 0; Re < Q.length; Re++)
                  ir(Q[Re], t);
                Object.freeze && Object.freeze(Q);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(Q, t);
        }
        return t === S ? qe(L) : Ie(L), L;
      }
    }
    function kr(t, u, c) {
      return ze(t, u, c, !0);
    }
    function Pr(t, u, c) {
      return ze(t, u, c, !1);
    }
    var jr = Pr, xr = kr;
    Ge.Fragment = S, Ge.jsx = jr, Ge.jsxs = xr;
  }()), Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Gt() {
  if (pt)
    return Ke;
  pt = 1;
  var R = mt(), d = Symbol.for("react.element"), U = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, Z = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(ee, N, re) {
    var W, B = {}, te = null, J = null;
    re !== void 0 && (te = "" + re), N.key !== void 0 && (te = "" + N.key), N.ref !== void 0 && (J = N.ref);
    for (W in N)
      S.call(N, W) && !ae.hasOwnProperty(W) && (B[W] = N[W]);
    if (ee && ee.defaultProps)
      for (W in N = ee.defaultProps, N)
        B[W] === void 0 && (B[W] = N[W]);
    return { $$typeof: d, type: ee, key: te, ref: J, props: B, _owner: Z.current };
  }
  return Ke.Fragment = U, Ke.jsx = oe, Ke.jsxs = oe, Ke;
}
process.env.NODE_ENV === "production" ? Mr.exports = Gt() : Mr.exports = Ht();
var ne = Mr.exports;
function Qt({ children: R }) {
  return /* @__PURE__ */ ne.jsx("button", { children: R });
}
var Kt = { link: "_16f9990" };
function gt(R) {
  var d, U, S = "";
  if (typeof R == "string" || typeof R == "number")
    S += R;
  else if (typeof R == "object")
    if (Array.isArray(R)) {
      var Z = R.length;
      for (d = 0; d < Z; d++)
        R[d] && (U = gt(R[d])) && (S && (S += " "), S += U);
    } else
      for (U in R)
        R[U] && (S && (S += " "), S += U);
  return S;
}
function Jt() {
  for (var R, d, U = 0, S = "", Z = arguments.length; U < Z; U++)
    (R = arguments[U]) && (d = gt(R)) && (S && (S += " "), S += d);
  return S;
}
function yt({ href: R, children: d, className: U }) {
  const S = Jt(Kt.link, U);
  return /* @__PURE__ */ ne.jsx("a", { className: S, href: R, children: d });
}
var Xt = { card: "fuc4kh0" };
function ht({ children: R }) {
  return /* @__PURE__ */ ne.jsx("div", { className: Xt.card, children: R });
}
var mr = { container: "_1qgvc5f0", textWrapper: "_1qgvc5f2", text: "_1qgvc5f6 _1qgvc5f5", linksWrapper: "_1qgvc5f9 _1qgvc5f8" };
function Zt() {
  return /* @__PURE__ */ ne.jsxs("div", { className: mr.container, children: [
    /* @__PURE__ */ ne.jsx("div", { className: mr.textWrapper, children: /* @__PURE__ */ ne.jsx("p", { className: mr.text, children: "Welcome Dev" }) }),
    /* @__PURE__ */ ne.jsxs("div", { className: mr.linksWrapper, children: [
      /* @__PURE__ */ ne.jsx(yt, { href: "http://localhost:5173/", children: /* @__PURE__ */ ne.jsx(ht, { children: /* @__PURE__ */ ne.jsx("img", { src: "vite.svg" }) }) }),
      /* @__PURE__ */ ne.jsx(yt, { href: "http://localhost:6006/", children: /* @__PURE__ */ ne.jsx(ht, { children: /* @__PURE__ */ ne.jsx("img", { src: "storybook.svg" }) }) })
    ] })
  ] });
}
export {
  Qt as Button,
  yt as Link,
  Zt as Welcome
};
