var __vite_style__ = document.createElement("style");
__vite_style__.innerHTML = "#app {\r\n  font-family: Avenir, Helvetica, Arial, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-align: center;\r\n  color: #2c3e50;\r\n  margin-top: 60px;\r\n}\r\n\nh1[data-v-3835873d] {\r\n    color: red;\n}\r\n";
document.head.appendChild(__vite_style__);
System.register([], function(exports) {
  "use strict";
  return {
    execute: function() {
      var index = "";
      function makeMap(str, expectsLowerCase) {
        const map = /* @__PURE__ */ Object.create(null);
        const list = str.split(",");
        for (let i2 = 0; i2 < list.length; i2++) {
          map[list[i2]] = true;
        }
        return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
      }
      const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      function includeBooleanAttr(value) {
        return !!value || value === "";
      }
      function normalizeStyle(value) {
        if (isArray(value)) {
          const res = {};
          for (let i2 = 0; i2 < value.length; i2++) {
            const item = value[i2];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) {
              for (const key in normalized) {
                res[key] = normalized[key];
              }
            }
          }
          return res;
        } else if (isString(value)) {
          return value;
        } else if (isObject(value)) {
          return value;
        }
      }
      const listDelimiterRE = /;(?![^(]*\))/g;
      const propertyDelimiterRE = /:(.+)/;
      function parseStringStyle(cssText) {
        const ret = {};
        cssText.split(listDelimiterRE).forEach((item) => {
          if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return ret;
      }
      function normalizeClass(value) {
        let res = "";
        if (isString(value)) {
          res = value;
        } else if (isArray(value)) {
          for (let i2 = 0; i2 < value.length; i2++) {
            const normalized = normalizeClass(value[i2]);
            if (normalized) {
              res += normalized + " ";
            }
          }
        } else if (isObject(value)) {
          for (const name in value) {
            if (value[name]) {
              res += name + " ";
            }
          }
        }
        return res.trim();
      }
      const toDisplayString = (val) => {
        return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      const replacer = (_key, val) => {
        if (val && val.__v_isRef) {
          return replacer(_key, val.value);
        } else if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
          return String(val);
        }
        return val;
      };
      const EMPTY_OBJ = {};
      const EMPTY_ARR = [];
      const NOOP = () => {
      };
      const NO = () => false;
      const onRE = /^on[^a-z]/;
      const isOn = (key) => onRE.test(key);
      const isModelListener = (key) => key.startsWith("onUpdate:");
      const extend = Object.assign;
      const remove = (arr, el) => {
        const i2 = arr.indexOf(el);
        if (i2 > -1) {
          arr.splice(i2, 1);
        }
      };
      const hasOwnProperty = Object.prototype.hasOwnProperty;
      const hasOwn = (val, key) => hasOwnProperty.call(val, key);
      const isArray = Array.isArray;
      const isMap = (val) => toTypeString(val) === "[object Map]";
      const isSet = (val) => toTypeString(val) === "[object Set]";
      const isFunction = (val) => typeof val === "function";
      const isString = (val) => typeof val === "string";
      const isSymbol = (val) => typeof val === "symbol";
      const isObject = (val) => val !== null && typeof val === "object";
      const isPromise = (val) => {
        return isObject(val) && isFunction(val.then) && isFunction(val.catch);
      };
      const objectToString = Object.prototype.toString;
      const toTypeString = (value) => objectToString.call(value);
      const toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      const isPlainObject = (val) => toTypeString(val) === "[object Object]";
      const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
      const cacheStringFunction = (fn) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      const camelizeRE = /-(\w)/g;
      const camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_, c2) => c2 ? c2.toUpperCase() : "");
      });
      const hyphenateRE = /\B([A-Z])/g;
      const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
      const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
      const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
      const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
      const invokeArrayFns = (fns, arg) => {
        for (let i2 = 0; i2 < fns.length; i2++) {
          fns[i2](arg);
        }
      };
      const def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      const toNumber = (val) => {
        const n2 = parseFloat(val);
        return isNaN(n2) ? val : n2;
      };
      let _globalThis;
      const getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      let activeEffectScope;
      class EffectScope {
        constructor(detached = false) {
          this.active = true;
          this.effects = [];
          this.cleanups = [];
          if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
          }
        }
        run(fn) {
          if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
              activeEffectScope = this;
              return fn();
            } finally {
              activeEffectScope = currentEffectScope;
            }
          }
        }
        on() {
          activeEffectScope = this;
        }
        off() {
          activeEffectScope = this.parent;
        }
        stop(fromParent) {
          if (this.active) {
            let i2, l2;
            for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
              this.effects[i2].stop();
            }
            for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
              this.cleanups[i2]();
            }
            if (this.scopes) {
              for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
                this.scopes[i2].stop(true);
              }
            }
            if (this.parent && !fromParent) {
              const last = this.parent.scopes.pop();
              if (last && last !== this) {
                this.parent.scopes[this.index] = last;
                last.index = this.index;
              }
            }
            this.active = false;
          }
        }
      }
      function recordEffectScope(effect, scope = activeEffectScope) {
        if (scope && scope.active) {
          scope.effects.push(effect);
        }
      }
      const createDep = (effects) => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
      };
      const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
      const newTracked = (dep) => (dep.n & trackOpBit) > 0;
      const initDepMarkers = ({ deps }) => {
        if (deps.length) {
          for (let i2 = 0; i2 < deps.length; i2++) {
            deps[i2].w |= trackOpBit;
          }
        }
      };
      const finalizeDepMarkers = (effect) => {
        const { deps } = effect;
        if (deps.length) {
          let ptr = 0;
          for (let i2 = 0; i2 < deps.length; i2++) {
            const dep = deps[i2];
            if (wasTracked(dep) && !newTracked(dep)) {
              dep.delete(effect);
            } else {
              deps[ptr++] = dep;
            }
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
        }
      };
      const targetMap = /* @__PURE__ */ new WeakMap();
      let effectTrackDepth = 0;
      let trackOpBit = 1;
      const maxMarkerBits = 30;
      let activeEffect;
      const ITERATE_KEY = Symbol("");
      const MAP_KEY_ITERATE_KEY = Symbol("");
      class ReactiveEffect {
        constructor(fn, scheduler = null, scope) {
          this.fn = fn;
          this.scheduler = scheduler;
          this.active = true;
          this.deps = [];
          this.parent = void 0;
          recordEffectScope(this, scope);
        }
        run() {
          if (!this.active) {
            return this.fn();
          }
          let parent = activeEffect;
          let lastShouldTrack = shouldTrack;
          while (parent) {
            if (parent === this) {
              return;
            }
            parent = parent.parent;
          }
          try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
              initDepMarkers(this);
            } else {
              cleanupEffect(this);
            }
            return this.fn();
          } finally {
            if (effectTrackDepth <= maxMarkerBits) {
              finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = void 0;
            if (this.deferStop) {
              this.stop();
            }
          }
        }
        stop() {
          if (activeEffect === this) {
            this.deferStop = true;
          } else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
              this.onStop();
            }
            this.active = false;
          }
        }
      }
      function cleanupEffect(effect) {
        const { deps } = effect;
        if (deps.length) {
          for (let i2 = 0; i2 < deps.length; i2++) {
            deps[i2].delete(effect);
          }
          deps.length = 0;
        }
      }
      let shouldTrack = true;
      const trackStack = [];
      function pauseTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = false;
      }
      function resetTracking() {
        const last = trackStack.pop();
        shouldTrack = last === void 0 ? true : last;
      }
      function track(target, type, key) {
        if (shouldTrack && activeEffect) {
          let depsMap = targetMap.get(target);
          if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
          }
          let dep = depsMap.get(key);
          if (!dep) {
            depsMap.set(key, dep = createDep());
          }
          trackEffects(dep);
        }
      }
      function trackEffects(dep, debuggerEventExtraInfo) {
        let shouldTrack2 = false;
        if (effectTrackDepth <= maxMarkerBits) {
          if (!newTracked(dep)) {
            dep.n |= trackOpBit;
            shouldTrack2 = !wasTracked(dep);
          }
        } else {
          shouldTrack2 = !dep.has(activeEffect);
        }
        if (shouldTrack2) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
        }
      }
      function trigger(target, type, key, newValue, oldValue, oldTarget) {
        const depsMap = targetMap.get(target);
        if (!depsMap) {
          return;
        }
        let deps = [];
        if (type === "clear") {
          deps = [...depsMap.values()];
        } else if (key === "length" && isArray(target)) {
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || key2 >= newValue) {
              deps.push(dep);
            }
          });
        } else {
          if (key !== void 0) {
            deps.push(depsMap.get(key));
          }
          switch (type) {
            case "add":
              if (!isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (isIntegerKey(key)) {
                deps.push(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (isMap(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
        if (deps.length === 1) {
          if (deps[0]) {
            {
              triggerEffects(deps[0]);
            }
          }
        } else {
          const effects = [];
          for (const dep of deps) {
            if (dep) {
              effects.push(...dep);
            }
          }
          {
            triggerEffects(createDep(effects));
          }
        }
      }
      function triggerEffects(dep, debuggerEventExtraInfo) {
        for (const effect of isArray(dep) ? dep : [...dep]) {
          if (effect !== activeEffect || effect.allowRecurse) {
            if (effect.scheduler) {
              effect.scheduler();
            } else {
              effect.run();
            }
          }
        }
      }
      const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
      const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
      const get = /* @__PURE__ */ createGetter();
      const shallowGet = /* @__PURE__ */ createGetter(false, true);
      const readonlyGet = /* @__PURE__ */ createGetter(true);
      const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
      function createArrayInstrumentations() {
        const instrumentations = {};
        ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
          instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
              track(arr, "get", i2 + "");
            }
            const res = arr[key](...args);
            if (res === -1 || res === false) {
              return arr[key](...args.map(toRaw));
            } else {
              return res;
            }
          };
        });
        ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
          instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
          };
        });
        return instrumentations;
      }
      function createGetter(isReadonly2 = false, shallow = false) {
        return function get2(target, key, receiver) {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_isShallow") {
            return shallow;
          } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
            return target;
          }
          const targetIsArray = isArray(target);
          if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
          }
          const res = Reflect.get(target, key, receiver);
          if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
          }
          if (!isReadonly2) {
            track(target, "get", key);
          }
          if (shallow) {
            return res;
          }
          if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
          }
          if (isObject(res)) {
            return isReadonly2 ? readonly(res) : reactive(res);
          }
          return res;
        };
      }
      const set = /* @__PURE__ */ createSetter();
      const shallowSet = /* @__PURE__ */ createSetter(true);
      function createSetter(shallow = false) {
        return function set2(target, key, value, receiver) {
          let oldValue = target[key];
          if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
            return false;
          }
          if (!shallow && !isReadonly(value)) {
            if (!isShallow(value)) {
              value = toRaw(value);
              oldValue = toRaw(oldValue);
            }
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            }
          }
          const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (target === toRaw(receiver)) {
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (hasChanged(value, oldValue)) {
              trigger(target, "set", key, value);
            }
          }
          return result;
        };
      }
      function deleteProperty(target, key) {
        const hadKey = hasOwn(target, key);
        target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      }
      function has(target, key) {
        const result = Reflect.has(target, key);
        if (!isSymbol(key) || !builtInSymbols.has(key)) {
          track(target, "has", key);
        }
        return result;
      }
      function ownKeys(target) {
        track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
      }
      const mutableHandlers = {
        get,
        set,
        deleteProperty,
        has,
        ownKeys
      };
      const readonlyHandlers = {
        get: readonlyGet,
        set(target, key) {
          return true;
        },
        deleteProperty(target, key) {
          return true;
        }
      };
      const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
        get: shallowGet,
        set: shallowSet
      });
      const toShallow = (value) => value;
      const getProto = (v) => Reflect.getPrototypeOf(v);
      function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
        target = target["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (key !== rawKey) {
          !isReadonly2 && track(rawTarget, "get", key);
        }
        !isReadonly2 && track(rawTarget, "get", rawKey);
        const { has: has2 } = getProto(rawTarget);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        if (has2.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has2.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      }
      function has$1(key, isReadonly2 = false) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (key !== rawKey) {
          !isReadonly2 && track(rawTarget, "has", key);
        }
        !isReadonly2 && track(rawTarget, "has", rawKey);
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      }
      function size(target, isReadonly2 = false) {
        target = target["__v_raw"];
        !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      }
      function add(value) {
        value = toRaw(value);
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      }
      function set$1(key, value) {
        value = toRaw(value);
        const target = toRaw(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has2.call(target, key);
        }
        const oldValue = get2.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      }
      function deleteEntry(key) {
        const target = toRaw(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has2.call(target, key);
        }
        get2 ? get2.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      }
      function clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(target, "clear", void 0, void 0);
        }
        return result;
      }
      function createForEach(isReadonly2, isShallow2) {
        return function forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw(target);
          const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        };
      }
      function createIterableMethod(method, isReadonly2, isShallow2) {
        return function(...args) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const targetIsMap = isMap(rawTarget);
          const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
          const isKeyOnly = method === "keys" && targetIsMap;
          const innerIterator = target[method](...args);
          const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
          return {
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function createReadonlyMethod(type) {
        return function(...args) {
          return type === "delete" ? false : this;
        };
      }
      function createInstrumentations() {
        const mutableInstrumentations2 = {
          get(key) {
            return get$1(this, key);
          },
          get size() {
            return size(this);
          },
          has: has$1,
          add,
          set: set$1,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, false)
        };
        const shallowInstrumentations2 = {
          get(key) {
            return get$1(this, key, false, true);
          },
          get size() {
            return size(this);
          },
          has: has$1,
          add,
          set: set$1,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, true)
        };
        const readonlyInstrumentations2 = {
          get(key) {
            return get$1(this, key, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has$1.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, false)
        };
        const shallowReadonlyInstrumentations2 = {
          get(key) {
            return get$1(this, key, true, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has$1.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, true)
        };
        const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
        iteratorMethods.forEach((method) => {
          mutableInstrumentations2[method] = createIterableMethod(method, false, false);
          readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
          shallowInstrumentations2[method] = createIterableMethod(method, false, true);
          shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
        });
        return [
          mutableInstrumentations2,
          readonlyInstrumentations2,
          shallowInstrumentations2,
          shallowReadonlyInstrumentations2
        ];
      }
      const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
      function createInstrumentationGetter(isReadonly2, shallow) {
        const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
        return (target, key, receiver) => {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_raw") {
            return target;
          }
          return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
        };
      }
      const mutableCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, false)
      };
      const shallowCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, true)
      };
      const readonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, false)
      };
      const reactiveMap = /* @__PURE__ */ new WeakMap();
      const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
      const readonlyMap = /* @__PURE__ */ new WeakMap();
      const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
      function targetTypeMap(rawType) {
        switch (rawType) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function getTargetType(value) {
        return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
      }
      function reactive(target) {
        if (isReadonly(target)) {
          return target;
        }
        return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
      }
      function shallowReactive(target) {
        return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
      }
      function readonly(target) {
        return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
      }
      function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
        if (!isObject(target)) {
          return target;
        }
        if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
          return target;
        }
        const existingProxy = proxyMap.get(target);
        if (existingProxy) {
          return existingProxy;
        }
        const targetType = getTargetType(target);
        if (targetType === 0) {
          return target;
        }
        const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
        proxyMap.set(target, proxy);
        return proxy;
      }
      function isReactive(value) {
        if (isReadonly(value)) {
          return isReactive(value["__v_raw"]);
        }
        return !!(value && value["__v_isReactive"]);
      }
      function isReadonly(value) {
        return !!(value && value["__v_isReadonly"]);
      }
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function isProxy(value) {
        return isReactive(value) || isReadonly(value);
      }
      function toRaw(observed) {
        const raw = observed && observed["__v_raw"];
        return raw ? toRaw(raw) : observed;
      }
      function markRaw(value) {
        def(value, "__v_skip", true);
        return value;
      }
      const toReactive = (value) => isObject(value) ? reactive(value) : value;
      const toReadonly = (value) => isObject(value) ? readonly(value) : value;
      function trackRefValue(ref) {
        if (shouldTrack && activeEffect) {
          ref = toRaw(ref);
          {
            trackEffects(ref.dep || (ref.dep = createDep()));
          }
        }
      }
      function triggerRefValue(ref, newVal) {
        ref = toRaw(ref);
        if (ref.dep) {
          {
            triggerEffects(ref.dep);
          }
        }
      }
      function isRef(r2) {
        return !!(r2 && r2.__v_isRef === true);
      }
      function unref(ref) {
        return isRef(ref) ? ref.value : ref;
      }
      const shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      function proxyRefs(objectWithRefs) {
        return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
      }
      class ComputedRefImpl {
        constructor(getter, _setter, isReadonly2, isSSR) {
          this._setter = _setter;
          this.dep = void 0;
          this.__v_isRef = true;
          this._dirty = true;
          this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
              this._dirty = true;
              triggerRefValue(this);
            }
          });
          this.effect.computed = this;
          this.effect.active = this._cacheable = !isSSR;
          this["__v_isReadonly"] = isReadonly2;
        }
        get value() {
          const self2 = toRaw(this);
          trackRefValue(self2);
          if (self2._dirty || !self2._cacheable) {
            self2._dirty = false;
            self2._value = self2.effect.run();
          }
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      }
      function computed$1(getterOrOptions, debugOptions, isSSR = false) {
        let getter;
        let setter;
        const onlyGetter = isFunction(getterOrOptions);
        if (onlyGetter) {
          getter = getterOrOptions;
          setter = NOOP;
        } else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
        }
        const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
        return cRef;
      }
      function callWithErrorHandling(fn, instance, type, args) {
        let res;
        try {
          res = args ? fn(...args) : fn();
        } catch (err) {
          handleError(err, instance, type);
        }
        return res;
      }
      function callWithAsyncErrorHandling(fn, instance, type, args) {
        if (isFunction(fn)) {
          const res = callWithErrorHandling(fn, instance, type, args);
          if (res && isPromise(res)) {
            res.catch((err) => {
              handleError(err, instance, type);
            });
          }
          return res;
        }
        const values = [];
        for (let i2 = 0; i2 < fn.length; i2++) {
          values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
        }
        return values;
      }
      function handleError(err, instance, type, throwInDev = true) {
        const contextVNode = instance ? instance.vnode : null;
        if (instance) {
          let cur = instance.parent;
          const exposedInstance = instance.proxy;
          const errorInfo = type;
          while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
              for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
                if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
                  return;
                }
              }
            }
            cur = cur.parent;
          }
          const appErrorHandler = instance.appContext.config.errorHandler;
          if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
            return;
          }
        }
        logError(err, type, contextVNode, throwInDev);
      }
      function logError(err, type, contextVNode, throwInDev = true) {
        {
          console.error(err);
        }
      }
      let isFlushing = false;
      let isFlushPending = false;
      const queue = [];
      let flushIndex = 0;
      const pendingPreFlushCbs = [];
      let activePreFlushCbs = null;
      let preFlushIndex = 0;
      const pendingPostFlushCbs = [];
      let activePostFlushCbs = null;
      let postFlushIndex = 0;
      const resolvedPromise = /* @__PURE__ */ Promise.resolve();
      let currentFlushPromise = null;
      let currentPreFlushParentJob = null;
      function nextTick(fn) {
        const p2 = currentFlushPromise || resolvedPromise;
        return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
      }
      function findInsertionIndex(id) {
        let start = flushIndex + 1;
        let end = queue.length;
        while (start < end) {
          const middle = start + end >>> 1;
          const middleJobId = getId(queue[middle]);
          middleJobId < id ? start = middle + 1 : end = middle;
        }
        return start;
      }
      function queueJob(job) {
        if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
          if (job.id == null) {
            queue.push(job);
          } else {
            queue.splice(findInsertionIndex(job.id), 0, job);
          }
          queueFlush();
        }
      }
      function queueFlush() {
        if (!isFlushing && !isFlushPending) {
          isFlushPending = true;
          currentFlushPromise = resolvedPromise.then(flushJobs);
        }
      }
      function invalidateJob(job) {
        const i2 = queue.indexOf(job);
        if (i2 > flushIndex) {
          queue.splice(i2, 1);
        }
      }
      function queueCb(cb, activeQueue, pendingQueue, index2) {
        if (!isArray(cb)) {
          if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index2 + 1 : index2)) {
            pendingQueue.push(cb);
          }
        } else {
          pendingQueue.push(...cb);
        }
        queueFlush();
      }
      function queuePreFlushCb(cb) {
        queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
      }
      function queuePostFlushCb(cb) {
        queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
      }
      function flushPreFlushCbs(seen, parentJob = null) {
        if (pendingPreFlushCbs.length) {
          currentPreFlushParentJob = parentJob;
          activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
          pendingPreFlushCbs.length = 0;
          for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            activePreFlushCbs[preFlushIndex]();
          }
          activePreFlushCbs = null;
          preFlushIndex = 0;
          currentPreFlushParentJob = null;
          flushPreFlushCbs(seen, parentJob);
        }
      }
      function flushPostFlushCbs(seen) {
        if (pendingPostFlushCbs.length) {
          const deduped = [...new Set(pendingPostFlushCbs)];
          pendingPostFlushCbs.length = 0;
          if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
          }
          activePostFlushCbs = deduped;
          activePostFlushCbs.sort((a2, b) => getId(a2) - getId(b));
          for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            activePostFlushCbs[postFlushIndex]();
          }
          activePostFlushCbs = null;
          postFlushIndex = 0;
        }
      }
      const getId = (job) => job.id == null ? Infinity : job.id;
      function flushJobs(seen) {
        isFlushPending = false;
        isFlushing = true;
        flushPreFlushCbs(seen);
        queue.sort((a2, b) => getId(a2) - getId(b));
        const check = NOOP;
        try {
          for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
              if (false)
                ;
              callWithErrorHandling(job, null, 14);
            }
          }
        } finally {
          flushIndex = 0;
          queue.length = 0;
          flushPostFlushCbs();
          isFlushing = false;
          currentFlushPromise = null;
          if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
          }
        }
      }
      function emit$1(instance, event, ...rawArgs) {
        if (instance.isUnmounted)
          return;
        const props = instance.vnode.props || EMPTY_OBJ;
        let args = rawArgs;
        const isModelListener2 = event.startsWith("update:");
        const modelArg = isModelListener2 && event.slice(7);
        if (modelArg && modelArg in props) {
          const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
          const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
          if (trim) {
            args = rawArgs.map((a2) => a2.trim());
          } else if (number) {
            args = rawArgs.map(toNumber);
          }
        }
        let handlerName;
        let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
        if (!handler && isModelListener2) {
          handler = props[handlerName = toHandlerKey(hyphenate(event))];
        }
        if (handler) {
          callWithAsyncErrorHandling(handler, instance, 6, args);
        }
        const onceHandler = props[handlerName + `Once`];
        if (onceHandler) {
          if (!instance.emitted) {
            instance.emitted = {};
          } else if (instance.emitted[handlerName]) {
            return;
          }
          instance.emitted[handlerName] = true;
          callWithAsyncErrorHandling(onceHandler, instance, 6, args);
        }
      }
      function normalizeEmitsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.emitsCache;
        const cached = cache.get(comp);
        if (cached !== void 0) {
          return cached;
        }
        const raw = comp.emits;
        let normalized = {};
        let hasExtends = false;
        if (!isFunction(comp)) {
          const extendEmits = (raw2) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
              hasExtends = true;
              extend(normalized, normalizedFromExtend);
            }
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
          }
          if (comp.extends) {
            extendEmits(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
          }
        }
        if (!raw && !hasExtends) {
          cache.set(comp, null);
          return null;
        }
        if (isArray(raw)) {
          raw.forEach((key) => normalized[key] = null);
        } else {
          extend(normalized, raw);
        }
        cache.set(comp, normalized);
        return normalized;
      }
      function isEmitListener(options, key) {
        if (!options || !isOn(key)) {
          return false;
        }
        key = key.slice(2).replace(/Once$/, "");
        return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
      }
      let currentRenderingInstance = null;
      let currentScopeId = null;
      function setCurrentRenderingInstance(instance) {
        const prev = currentRenderingInstance;
        currentRenderingInstance = instance;
        currentScopeId = instance && instance.type.__scopeId || null;
        return prev;
      }
      function pushScopeId(id) {
        currentScopeId = id;
      }
      function popScopeId() {
        currentScopeId = null;
      }
      function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
        if (!ctx)
          return fn;
        if (fn._n) {
          return fn;
        }
        const renderFnWithContext = (...args) => {
          if (renderFnWithContext._d) {
            setBlockTracking(-1);
          }
          const prevInstance = setCurrentRenderingInstance(ctx);
          const res = fn(...args);
          setCurrentRenderingInstance(prevInstance);
          if (renderFnWithContext._d) {
            setBlockTracking(1);
          }
          return res;
        };
        renderFnWithContext._n = true;
        renderFnWithContext._c = true;
        renderFnWithContext._d = true;
        return renderFnWithContext;
      }
      function markAttrsAccessed() {
      }
      function renderComponentRoot(instance) {
        const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
        let result;
        let fallthroughAttrs;
        const prev = setCurrentRenderingInstance(instance);
        try {
          if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
          } else {
            const render2 = Component;
            if (false)
              ;
            result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
              get attrs() {
                markAttrsAccessed();
                return attrs;
              },
              slots,
              emit
            } : { attrs, slots, emit }) : render2(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
          }
        } catch (err) {
          blockStack.length = 0;
          handleError(err, instance, 1);
          result = createVNode(Comment);
        }
        let root = result;
        if (fallthroughAttrs && inheritAttrs !== false) {
          const keys = Object.keys(fallthroughAttrs);
          const { shapeFlag } = root;
          if (keys.length) {
            if (shapeFlag & (1 | 6)) {
              if (propsOptions && keys.some(isModelListener)) {
                fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
              }
              root = cloneVNode(root, fallthroughAttrs);
            }
          }
        }
        if (vnode.dirs) {
          root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        if (vnode.transition) {
          root.transition = vnode.transition;
        }
        {
          result = root;
        }
        setCurrentRenderingInstance(prev);
        return result;
      }
      const getFunctionalFallthrough = (attrs) => {
        let res;
        for (const key in attrs) {
          if (key === "class" || key === "style" || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
          }
        }
        return res;
      };
      const filterModelListeners = (attrs, props) => {
        const res = {};
        for (const key in attrs) {
          if (!isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
          }
        }
        return res;
      };
      function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
        const { props: prevProps, children: prevChildren, component } = prevVNode;
        const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
        const emits = component.emitsOptions;
        if (nextVNode.dirs || nextVNode.transition) {
          return true;
        }
        if (optimized && patchFlag >= 0) {
          if (patchFlag & 1024) {
            return true;
          }
          if (patchFlag & 16) {
            if (!prevProps) {
              return !!nextProps;
            }
            return hasPropsChanged(prevProps, nextProps, emits);
          } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i2 = 0; i2 < dynamicProps.length; i2++) {
              const key = dynamicProps[i2];
              if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
                return true;
              }
            }
          }
        } else {
          if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
              return true;
            }
          }
          if (prevProps === nextProps) {
            return false;
          }
          if (!prevProps) {
            return !!nextProps;
          }
          if (!nextProps) {
            return true;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        }
        return false;
      }
      function hasPropsChanged(prevProps, nextProps, emitsOptions) {
        const nextKeys = Object.keys(nextProps);
        if (nextKeys.length !== Object.keys(prevProps).length) {
          return true;
        }
        for (let i2 = 0; i2 < nextKeys.length; i2++) {
          const key = nextKeys[i2];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
            return true;
          }
        }
        return false;
      }
      function updateHOCHostEl({ vnode, parent }, el) {
        while (parent && parent.subTree === vnode) {
          (vnode = parent.vnode).el = el;
          parent = parent.parent;
        }
      }
      const isSuspense = (type) => type.__isSuspense;
      function queueEffectWithSuspense(fn, suspense) {
        if (suspense && suspense.pendingBranch) {
          if (isArray(fn)) {
            suspense.effects.push(...fn);
          } else {
            suspense.effects.push(fn);
          }
        } else {
          queuePostFlushCb(fn);
        }
      }
      function provide(key, value) {
        if (!currentInstance)
          ;
        else {
          let provides = currentInstance.provides;
          const parentProvides = currentInstance.parent && currentInstance.parent.provides;
          if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
          }
          provides[key] = value;
        }
      }
      function inject(key, defaultValue, treatDefaultAsFactory = false) {
        const instance = currentInstance || currentRenderingInstance;
        if (instance) {
          const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
          if (provides && key in provides) {
            return provides[key];
          } else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
          } else
            ;
        }
      }
      const INITIAL_WATCHER_VALUE = {};
      function watch(source, cb, options) {
        return doWatch(source, cb, options);
      }
      function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
        const instance = currentInstance;
        let getter;
        let forceTrigger = false;
        let isMultiSource = false;
        if (isRef(source)) {
          getter = () => source.value;
          forceTrigger = isShallow(source);
        } else if (isReactive(source)) {
          getter = () => source;
          deep = true;
        } else if (isArray(source)) {
          isMultiSource = true;
          forceTrigger = source.some(isReactive);
          getter = () => source.map((s2) => {
            if (isRef(s2)) {
              return s2.value;
            } else if (isReactive(s2)) {
              return traverse(s2);
            } else if (isFunction(s2)) {
              return callWithErrorHandling(s2, instance, 2);
            } else
              ;
          });
        } else if (isFunction(source)) {
          if (cb) {
            getter = () => callWithErrorHandling(source, instance, 2);
          } else {
            getter = () => {
              if (instance && instance.isUnmounted) {
                return;
              }
              if (cleanup) {
                cleanup();
              }
              return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
            };
          }
        } else {
          getter = NOOP;
        }
        if (cb && deep) {
          const baseGetter = getter;
          getter = () => traverse(baseGetter());
        }
        let cleanup;
        let onCleanup = (fn) => {
          cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4);
          };
        };
        if (isInSSRComponentSetup) {
          onCleanup = NOOP;
          if (!cb) {
            getter();
          } else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3, [
              getter(),
              isMultiSource ? [] : void 0,
              onCleanup
            ]);
          }
          return NOOP;
        }
        let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
        const job = () => {
          if (!effect.active) {
            return;
          }
          if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i2) => hasChanged(v, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
              if (cleanup) {
                cleanup();
              }
              callWithAsyncErrorHandling(cb, instance, 3, [
                newValue,
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
                onCleanup
              ]);
              oldValue = newValue;
            }
          } else {
            effect.run();
          }
        };
        job.allowRecurse = !!cb;
        let scheduler;
        if (flush === "sync") {
          scheduler = job;
        } else if (flush === "post") {
          scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
        } else {
          scheduler = () => {
            if (!instance || instance.isMounted) {
              queuePreFlushCb(job);
            } else {
              job();
            }
          };
        }
        const effect = new ReactiveEffect(getter, scheduler);
        if (cb) {
          if (immediate) {
            job();
          } else {
            oldValue = effect.run();
          }
        } else if (flush === "post") {
          queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
        } else {
          effect.run();
        }
        return () => {
          effect.stop();
          if (instance && instance.scope) {
            remove(instance.scope.effects, effect);
          }
        };
      }
      function instanceWatch(source, value, options) {
        const publicThis = this.proxy;
        const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
        let cb;
        if (isFunction(value)) {
          cb = value;
        } else {
          cb = value.handler;
          options = value;
        }
        const cur = currentInstance;
        setCurrentInstance(this);
        const res = doWatch(getter, cb.bind(publicThis), options);
        if (cur) {
          setCurrentInstance(cur);
        } else {
          unsetCurrentInstance();
        }
        return res;
      }
      function createPathGetter(ctx, path) {
        const segments = path.split(".");
        return () => {
          let cur = ctx;
          for (let i2 = 0; i2 < segments.length && cur; i2++) {
            cur = cur[segments[i2]];
          }
          return cur;
        };
      }
      function traverse(value, seen) {
        if (!isObject(value) || value["__v_skip"]) {
          return value;
        }
        seen = seen || /* @__PURE__ */ new Set();
        if (seen.has(value)) {
          return value;
        }
        seen.add(value);
        if (isRef(value)) {
          traverse(value.value, seen);
        } else if (isArray(value)) {
          for (let i2 = 0; i2 < value.length; i2++) {
            traverse(value[i2], seen);
          }
        } else if (isSet(value) || isMap(value)) {
          value.forEach((v) => {
            traverse(v, seen);
          });
        } else if (isPlainObject(value)) {
          for (const key in value) {
            traverse(value[key], seen);
          }
        }
        return value;
      }
      const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
      const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
      function onActivated(hook, target) {
        registerKeepAliveHook(hook, "a", target);
      }
      function onDeactivated(hook, target) {
        registerKeepAliveHook(hook, "da", target);
      }
      function registerKeepAliveHook(hook, type, target = currentInstance) {
        const wrappedHook = hook.__wdc || (hook.__wdc = () => {
          let current = target;
          while (current) {
            if (current.isDeactivated) {
              return;
            }
            current = current.parent;
          }
          return hook();
        });
        injectHook(type, wrappedHook, target);
        if (target) {
          let current = target.parent;
          while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
              injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
          }
        }
      }
      function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
        const injected = injectHook(type, hook, keepAliveRoot, true);
        onUnmounted(() => {
          remove(keepAliveRoot[type], injected);
        }, target);
      }
      function injectHook(type, hook, target = currentInstance, prepend = false) {
        if (target) {
          const hooks = target[type] || (target[type] = []);
          const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
            if (target.isUnmounted) {
              return;
            }
            pauseTracking();
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            resetTracking();
            return res;
          });
          if (prepend) {
            hooks.unshift(wrappedHook);
          } else {
            hooks.push(wrappedHook);
          }
          return wrappedHook;
        }
      }
      const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
      const onBeforeMount = createHook("bm");
      const onMounted = createHook("m");
      const onBeforeUpdate = createHook("bu");
      const onUpdated = createHook("u");
      const onBeforeUnmount = createHook("bum");
      const onUnmounted = createHook("um");
      const onServerPrefetch = createHook("sp");
      const onRenderTriggered = createHook("rtg");
      const onRenderTracked = createHook("rtc");
      function onErrorCaptured(hook, target = currentInstance) {
        injectHook("ec", hook, target);
      }
      let shouldCacheAccess = true;
      function applyOptions(instance) {
        const options = resolveMergedOptions(instance);
        const publicThis = instance.proxy;
        const ctx = instance.ctx;
        shouldCacheAccess = false;
        if (options.beforeCreate) {
          callHook(options.beforeCreate, instance, "bc");
        }
        const {
          data: dataOptions,
          computed: computedOptions,
          methods,
          watch: watchOptions,
          provide: provideOptions,
          inject: injectOptions,
          created,
          beforeMount,
          mounted,
          beforeUpdate,
          updated,
          activated,
          deactivated,
          beforeDestroy,
          beforeUnmount,
          destroyed,
          unmounted,
          render,
          renderTracked,
          renderTriggered,
          errorCaptured,
          serverPrefetch,
          expose,
          inheritAttrs,
          components,
          directives,
          filters
        } = options;
        const checkDuplicateProperties = null;
        if (injectOptions) {
          resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
        }
        if (methods) {
          for (const key in methods) {
            const methodHandler = methods[key];
            if (isFunction(methodHandler)) {
              {
                ctx[key] = methodHandler.bind(publicThis);
              }
            }
          }
        }
        if (dataOptions) {
          const data = dataOptions.call(publicThis, publicThis);
          if (!isObject(data))
            ;
          else {
            instance.data = reactive(data);
          }
        }
        shouldCacheAccess = true;
        if (computedOptions) {
          for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
            const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
            const c2 = computed({
              get: get2,
              set: set2
            });
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => c2.value,
              set: (v) => c2.value = v
            });
          }
        }
        if (watchOptions) {
          for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
          }
        }
        if (provideOptions) {
          const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
          Reflect.ownKeys(provides).forEach((key) => {
            provide(key, provides[key]);
          });
        }
        if (created) {
          callHook(created, instance, "c");
        }
        function registerLifecycleHook(register, hook) {
          if (isArray(hook)) {
            hook.forEach((_hook) => register(_hook.bind(publicThis)));
          } else if (hook) {
            register(hook.bind(publicThis));
          }
        }
        registerLifecycleHook(onBeforeMount, beforeMount);
        registerLifecycleHook(onMounted, mounted);
        registerLifecycleHook(onBeforeUpdate, beforeUpdate);
        registerLifecycleHook(onUpdated, updated);
        registerLifecycleHook(onActivated, activated);
        registerLifecycleHook(onDeactivated, deactivated);
        registerLifecycleHook(onErrorCaptured, errorCaptured);
        registerLifecycleHook(onRenderTracked, renderTracked);
        registerLifecycleHook(onRenderTriggered, renderTriggered);
        registerLifecycleHook(onBeforeUnmount, beforeUnmount);
        registerLifecycleHook(onUnmounted, unmounted);
        registerLifecycleHook(onServerPrefetch, serverPrefetch);
        if (isArray(expose)) {
          if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key) => {
              Object.defineProperty(exposed, key, {
                get: () => publicThis[key],
                set: (val) => publicThis[key] = val
              });
            });
          } else if (!instance.exposed) {
            instance.exposed = {};
          }
        }
        if (render && instance.render === NOOP) {
          instance.render = render;
        }
        if (inheritAttrs != null) {
          instance.inheritAttrs = inheritAttrs;
        }
        if (components)
          instance.components = components;
        if (directives)
          instance.directives = directives;
      }
      function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
        if (isArray(injectOptions)) {
          injectOptions = normalizeInject(injectOptions);
        }
        for (const key in injectOptions) {
          const opt = injectOptions[key];
          let injected;
          if (isObject(opt)) {
            if ("default" in opt) {
              injected = inject(opt.from || key, opt.default, true);
            } else {
              injected = inject(opt.from || key);
            }
          } else {
            injected = inject(opt);
          }
          if (isRef(injected)) {
            if (unwrapRef) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => injected.value,
                set: (v) => injected.value = v
              });
            } else {
              ctx[key] = injected;
            }
          } else {
            ctx[key] = injected;
          }
        }
      }
      function callHook(hook, instance, type) {
        callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
      }
      function createWatcher(raw, ctx, publicThis, key) {
        const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
        if (isString(raw)) {
          const handler = ctx[raw];
          if (isFunction(handler)) {
            watch(getter, handler);
          }
        } else if (isFunction(raw)) {
          watch(getter, raw.bind(publicThis));
        } else if (isObject(raw)) {
          if (isArray(raw)) {
            raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
          } else {
            const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (isFunction(handler)) {
              watch(getter, handler, raw);
            }
          }
        } else
          ;
      }
      function resolveMergedOptions(instance) {
        const base = instance.type;
        const { mixins, extends: extendsOptions } = base;
        const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
        const cached = cache.get(base);
        let resolved;
        if (cached) {
          resolved = cached;
        } else if (!globalMixins.length && !mixins && !extendsOptions) {
          {
            resolved = base;
          }
        } else {
          resolved = {};
          if (globalMixins.length) {
            globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
          }
          mergeOptions(resolved, base, optionMergeStrategies);
        }
        cache.set(base, resolved);
        return resolved;
      }
      function mergeOptions(to, from, strats, asMixin = false) {
        const { mixins, extends: extendsOptions } = from;
        if (extendsOptions) {
          mergeOptions(to, extendsOptions, strats, true);
        }
        if (mixins) {
          mixins.forEach((m) => mergeOptions(to, m, strats, true));
        }
        for (const key in from) {
          if (asMixin && key === "expose")
            ;
          else {
            const strat = internalOptionMergeStrats[key] || strats && strats[key];
            to[key] = strat ? strat(to[key], from[key]) : from[key];
          }
        }
        return to;
      }
      const internalOptionMergeStrats = {
        data: mergeDataFn,
        props: mergeObjectOptions,
        emits: mergeObjectOptions,
        methods: mergeObjectOptions,
        computed: mergeObjectOptions,
        beforeCreate: mergeAsArray,
        created: mergeAsArray,
        beforeMount: mergeAsArray,
        mounted: mergeAsArray,
        beforeUpdate: mergeAsArray,
        updated: mergeAsArray,
        beforeDestroy: mergeAsArray,
        beforeUnmount: mergeAsArray,
        destroyed: mergeAsArray,
        unmounted: mergeAsArray,
        activated: mergeAsArray,
        deactivated: mergeAsArray,
        errorCaptured: mergeAsArray,
        serverPrefetch: mergeAsArray,
        components: mergeObjectOptions,
        directives: mergeObjectOptions,
        watch: mergeWatchOptions,
        provide: mergeDataFn,
        inject: mergeInject
      };
      function mergeDataFn(to, from) {
        if (!from) {
          return to;
        }
        if (!to) {
          return from;
        }
        return function mergedDataFn() {
          return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
        };
      }
      function mergeInject(to, from) {
        return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
      }
      function normalizeInject(raw) {
        if (isArray(raw)) {
          const res = {};
          for (let i2 = 0; i2 < raw.length; i2++) {
            res[raw[i2]] = raw[i2];
          }
          return res;
        }
        return raw;
      }
      function mergeAsArray(to, from) {
        return to ? [...new Set([].concat(to, from))] : from;
      }
      function mergeObjectOptions(to, from) {
        return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
      }
      function mergeWatchOptions(to, from) {
        if (!to)
          return from;
        if (!from)
          return to;
        const merged = extend(/* @__PURE__ */ Object.create(null), to);
        for (const key in from) {
          merged[key] = mergeAsArray(to[key], from[key]);
        }
        return merged;
      }
      function initProps(instance, rawProps, isStateful, isSSR = false) {
        const props = {};
        const attrs = {};
        def(attrs, InternalObjectKey, 1);
        instance.propsDefaults = /* @__PURE__ */ Object.create(null);
        setFullProps(instance, rawProps, props, attrs);
        for (const key in instance.propsOptions[0]) {
          if (!(key in props)) {
            props[key] = void 0;
          }
        }
        if (isStateful) {
          instance.props = isSSR ? props : shallowReactive(props);
        } else {
          if (!instance.type.props) {
            instance.props = attrs;
          } else {
            instance.props = props;
          }
        }
        instance.attrs = attrs;
      }
      function updateProps(instance, rawProps, rawPrevProps, optimized) {
        const { props, attrs, vnode: { patchFlag } } = instance;
        const rawCurrentProps = toRaw(props);
        const [options] = instance.propsOptions;
        let hasAttrsChanged = false;
        if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
          if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
              let key = propsToUpdate[i2];
              if (isEmitListener(instance.emitsOptions, key)) {
                continue;
              }
              const value = rawProps[key];
              if (options) {
                if (hasOwn(attrs, key)) {
                  if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                  }
                } else {
                  const camelizedKey = camelize(key);
                  props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                }
              } else {
                if (value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              }
            }
          }
        } else {
          if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
          }
          let kebabKey;
          for (const key in rawCurrentProps) {
            if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
              if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
                  props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
                }
              } else {
                delete props[key];
              }
            }
          }
          if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
              if (!rawProps || !hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (hasAttrsChanged) {
          trigger(instance, "set", "$attrs");
        }
      }
      function setFullProps(instance, rawProps, props, attrs) {
        const [options, needCastKeys] = instance.propsOptions;
        let hasAttrsChanged = false;
        let rawCastValues;
        if (rawProps) {
          for (let key in rawProps) {
            if (isReservedProp(key)) {
              continue;
            }
            const value = rawProps[key];
            let camelKey;
            if (options && hasOwn(options, camelKey = camelize(key))) {
              if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                props[camelKey] = value;
              } else {
                (rawCastValues || (rawCastValues = {}))[camelKey] = value;
              }
            } else if (!isEmitListener(instance.emitsOptions, key)) {
              if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (needCastKeys) {
          const rawCurrentProps = toRaw(props);
          const castValues = rawCastValues || EMPTY_OBJ;
          for (let i2 = 0; i2 < needCastKeys.length; i2++) {
            const key = needCastKeys[i2];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
          }
        }
        return hasAttrsChanged;
      }
      function resolvePropValue(options, props, key, value, instance, isAbsent) {
        const opt = options[key];
        if (opt != null) {
          const hasDefault = hasOwn(opt, "default");
          if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && isFunction(defaultValue)) {
              const { propsDefaults } = instance;
              if (key in propsDefaults) {
                value = propsDefaults[key];
              } else {
                setCurrentInstance(instance);
                value = propsDefaults[key] = defaultValue.call(null, props);
                unsetCurrentInstance();
              }
            } else {
              value = defaultValue;
            }
          }
          if (opt[0]) {
            if (isAbsent && !hasDefault) {
              value = false;
            } else if (opt[1] && (value === "" || value === hyphenate(key))) {
              value = true;
            }
          }
        }
        return value;
      }
      function normalizePropsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.propsCache;
        const cached = cache.get(comp);
        if (cached) {
          return cached;
        }
        const raw = comp.props;
        const normalized = {};
        const needCastKeys = [];
        let hasExtends = false;
        if (!isFunction(comp)) {
          const extendProps = (raw2) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            extend(normalized, props);
            if (keys)
              needCastKeys.push(...keys);
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
          }
          if (comp.extends) {
            extendProps(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendProps);
          }
        }
        if (!raw && !hasExtends) {
          cache.set(comp, EMPTY_ARR);
          return EMPTY_ARR;
        }
        if (isArray(raw)) {
          for (let i2 = 0; i2 < raw.length; i2++) {
            const normalizedKey = camelize(raw[i2]);
            if (validatePropName(normalizedKey)) {
              normalized[normalizedKey] = EMPTY_OBJ;
            }
          }
        } else if (raw) {
          for (const key in raw) {
            const normalizedKey = camelize(key);
            if (validatePropName(normalizedKey)) {
              const opt = raw[key];
              const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
              if (prop) {
                const booleanIndex = getTypeIndex(Boolean, prop.type);
                const stringIndex = getTypeIndex(String, prop.type);
                prop[0] = booleanIndex > -1;
                prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
                if (booleanIndex > -1 || hasOwn(prop, "default")) {
                  needCastKeys.push(normalizedKey);
                }
              }
            }
          }
        }
        const res = [normalized, needCastKeys];
        cache.set(comp, res);
        return res;
      }
      function validatePropName(key) {
        if (key[0] !== "$") {
          return true;
        }
        return false;
      }
      function getType(ctor) {
        const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
        return match ? match[1] : ctor === null ? "null" : "";
      }
      function isSameType(a2, b) {
        return getType(a2) === getType(b);
      }
      function getTypeIndex(type, expectedTypes) {
        if (isArray(expectedTypes)) {
          return expectedTypes.findIndex((t2) => isSameType(t2, type));
        } else if (isFunction(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
        }
        return -1;
      }
      const isInternalKey = (key) => key[0] === "_" || key === "$stable";
      const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
      const normalizeSlot = (key, rawSlot, ctx) => {
        const normalized = withCtx((...args) => {
          return normalizeSlotValue(rawSlot(...args));
        }, ctx);
        normalized._c = false;
        return normalized;
      };
      const normalizeObjectSlots = (rawSlots, slots, instance) => {
        const ctx = rawSlots._ctx;
        for (const key in rawSlots) {
          if (isInternalKey(key))
            continue;
          const value = rawSlots[key];
          if (isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
          } else if (value != null) {
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
          }
        }
      };
      const normalizeVNodeSlots = (instance, children) => {
        const normalized = normalizeSlotValue(children);
        instance.slots.default = () => normalized;
      };
      const initSlots = (instance, children) => {
        if (instance.vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            instance.slots = toRaw(children);
            def(children, "_", type);
          } else {
            normalizeObjectSlots(children, instance.slots = {});
          }
        } else {
          instance.slots = {};
          if (children) {
            normalizeVNodeSlots(instance, children);
          }
        }
        def(instance.slots, InternalObjectKey, 1);
      };
      const updateSlots = (instance, children, optimized) => {
        const { vnode, slots } = instance;
        let needDeletionCheck = true;
        let deletionComparisonTarget = EMPTY_OBJ;
        if (vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            if (optimized && type === 1) {
              needDeletionCheck = false;
            } else {
              extend(slots, children);
              if (!optimized && type === 1) {
                delete slots._;
              }
            }
          } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
          }
          deletionComparisonTarget = children;
        } else if (children) {
          normalizeVNodeSlots(instance, children);
          deletionComparisonTarget = { default: 1 };
        }
        if (needDeletionCheck) {
          for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
              delete slots[key];
            }
          }
        }
      };
      function invokeDirectiveHook(vnode, prevVNode, instance, name) {
        const bindings = vnode.dirs;
        const oldBindings = prevVNode && prevVNode.dirs;
        for (let i2 = 0; i2 < bindings.length; i2++) {
          const binding = bindings[i2];
          if (oldBindings) {
            binding.oldValue = oldBindings[i2].value;
          }
          let hook = binding.dir[name];
          if (hook) {
            pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8, [
              vnode.el,
              binding,
              vnode,
              prevVNode
            ]);
            resetTracking();
          }
        }
      }
      function createAppContext() {
        return {
          app: null,
          config: {
            isNativeTag: NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: /* @__PURE__ */ Object.create(null),
          optionsCache: /* @__PURE__ */ new WeakMap(),
          propsCache: /* @__PURE__ */ new WeakMap(),
          emitsCache: /* @__PURE__ */ new WeakMap()
        };
      }
      let uid = 0;
      function createAppAPI(render, hydrate) {
        return function createApp2(rootComponent, rootProps = null) {
          if (!isFunction(rootComponent)) {
            rootComponent = Object.assign({}, rootComponent);
          }
          if (rootProps != null && !isObject(rootProps)) {
            rootProps = null;
          }
          const context = createAppContext();
          const installedPlugins = /* @__PURE__ */ new Set();
          let isMounted = false;
          const app = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
              return context.config;
            },
            set config(v) {
            },
            use(plugin, ...options) {
              if (installedPlugins.has(plugin))
                ;
              else if (plugin && isFunction(plugin.install)) {
                installedPlugins.add(plugin);
                plugin.install(app, ...options);
              } else if (isFunction(plugin)) {
                installedPlugins.add(plugin);
                plugin(app, ...options);
              } else
                ;
              return app;
            },
            mixin(mixin) {
              {
                if (!context.mixins.includes(mixin)) {
                  context.mixins.push(mixin);
                }
              }
              return app;
            },
            component(name, component) {
              if (!component) {
                return context.components[name];
              }
              context.components[name] = component;
              return app;
            },
            directive(name, directive) {
              if (!directive) {
                return context.directives[name];
              }
              context.directives[name] = directive;
              return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
              if (!isMounted) {
                const vnode = createVNode(rootComponent, rootProps);
                vnode.appContext = context;
                if (isHydrate && hydrate) {
                  hydrate(vnode, rootContainer);
                } else {
                  render(vnode, rootContainer, isSVG);
                }
                isMounted = true;
                app._container = rootContainer;
                rootContainer.__vue_app__ = app;
                return getExposeProxy(vnode.component) || vnode.component.proxy;
              }
            },
            unmount() {
              if (isMounted) {
                render(null, app._container);
                delete app._container.__vue_app__;
              }
            },
            provide(key, value) {
              context.provides[key] = value;
              return app;
            }
          };
          return app;
        };
      }
      function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
        if (isArray(rawRef)) {
          rawRef.forEach((r2, i2) => setRef(r2, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i2] : oldRawRef), parentSuspense, vnode, isUnmount));
          return;
        }
        if (isAsyncWrapper(vnode) && !isUnmount) {
          return;
        }
        const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
        const value = isUnmount ? null : refValue;
        const { i: owner, r: ref } = rawRef;
        const oldRef = oldRawRef && oldRawRef.r;
        const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
        const setupState = owner.setupState;
        if (oldRef != null && oldRef !== ref) {
          if (isString(oldRef)) {
            refs[oldRef] = null;
            if (hasOwn(setupState, oldRef)) {
              setupState[oldRef] = null;
            }
          } else if (isRef(oldRef)) {
            oldRef.value = null;
          }
        }
        if (isFunction(ref)) {
          callWithErrorHandling(ref, owner, 12, [value, refs]);
        } else {
          const _isString = isString(ref);
          const _isRef = isRef(ref);
          if (_isString || _isRef) {
            const doSet = () => {
              if (rawRef.f) {
                const existing = _isString ? refs[ref] : ref.value;
                if (isUnmount) {
                  isArray(existing) && remove(existing, refValue);
                } else {
                  if (!isArray(existing)) {
                    if (_isString) {
                      refs[ref] = [refValue];
                      if (hasOwn(setupState, ref)) {
                        setupState[ref] = refs[ref];
                      }
                    } else {
                      ref.value = [refValue];
                      if (rawRef.k)
                        refs[rawRef.k] = ref.value;
                    }
                  } else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                  }
                }
              } else if (_isString) {
                refs[ref] = value;
                if (hasOwn(setupState, ref)) {
                  setupState[ref] = value;
                }
              } else if (isRef(ref)) {
                ref.value = value;
                if (rawRef.k)
                  refs[rawRef.k] = value;
              } else
                ;
            };
            if (value) {
              doSet.id = -1;
              queuePostRenderEffect(doSet, parentSuspense);
            } else {
              doSet();
            }
          }
        }
      }
      const queuePostRenderEffect = queueEffectWithSuspense;
      function createRenderer(options) {
        return baseCreateRenderer(options);
      }
      function baseCreateRenderer(options, createHydrationFns) {
        const target = getGlobalThis();
        target.__VUE__ = true;
        const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
        const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
          if (n1 === n2) {
            return;
          }
          if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
          }
          if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
          }
          const { type, ref, shapeFlag } = n2;
          switch (type) {
            case Text:
              processText(n1, n2, container, anchor);
              break;
            case Comment:
              processCommentNode(n1, n2, container, anchor);
              break;
            case Static:
              if (n1 == null) {
                mountStaticNode(n2, container, anchor, isSVG);
              }
              break;
            case Fragment:
              processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              break;
            default:
              if (shapeFlag & 1) {
                processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else if (shapeFlag & 6) {
                processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else if (shapeFlag & 64) {
                type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
              } else if (shapeFlag & 128) {
                type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
              } else
                ;
          }
          if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
          }
        };
        const processText = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
          } else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) {
              hostSetText(el, n2.children);
            }
          }
        };
        const processCommentNode = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
          } else {
            n2.el = n1.el;
          }
        };
        const mountStaticNode = (n2, container, anchor, isSVG) => {
          [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
        };
        const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
          let next;
          while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
          }
          hostInsert(anchor, container, nextSibling);
        };
        const removeStaticNode = ({ el, anchor }) => {
          let next;
          while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
          }
          hostRemove(anchor);
        };
        const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          isSVG = isSVG || n2.type === "svg";
          if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        };
        const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let el;
          let vnodeHook;
          const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
          if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
            el = vnode.el = hostCloneNode(vnode.el);
          } else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            if (shapeFlag & 8) {
              hostSetElementText(el, vnode.children);
            } else if (shapeFlag & 16) {
              mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            if (props) {
              for (const key in props) {
                if (key !== "value" && !isReservedProp(key)) {
                  hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
              if ("value" in props) {
                hostPatchProp(el, "value", null, props.value);
              }
              if (vnodeHook = props.onVnodeBeforeMount) {
                invokeVNodeHook(vnodeHook, parentComponent, vnode);
              }
            }
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
          }
          const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
          if (needCallTransitionHooks) {
            transition.beforeEnter(el);
          }
          hostInsert(el, container, anchor);
          if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              needCallTransitionHooks && transition.enter(el);
              dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
          }
        };
        const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
          if (scopeId) {
            hostSetScopeId(el, scopeId);
          }
          if (slotScopeIds) {
            for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
              hostSetScopeId(el, slotScopeIds[i2]);
            }
          }
          if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (vnode === subTree) {
              const parentVNode = parentComponent.vnode;
              setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
          }
        };
        const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
          for (let i2 = start; i2 < children.length; i2++) {
            const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        };
        const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const el = n2.el = n1.el;
          let { patchFlag, dynamicChildren, dirs } = n2;
          patchFlag |= n1.patchFlag & 16;
          const oldProps = n1.props || EMPTY_OBJ;
          const newProps = n2.props || EMPTY_OBJ;
          let vnodeHook;
          parentComponent && toggleRecurse(parentComponent, false);
          if (vnodeHook = newProps.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          }
          if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
          }
          parentComponent && toggleRecurse(parentComponent, true);
          const areChildrenSVG = isSVG && n2.type !== "foreignObject";
          if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
          } else if (!optimized) {
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
          }
          if (patchFlag > 0) {
            if (patchFlag & 16) {
              patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            } else {
              if (patchFlag & 2) {
                if (oldProps.class !== newProps.class) {
                  hostPatchProp(el, "class", null, newProps.class, isSVG);
                }
              }
              if (patchFlag & 4) {
                hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
              }
              if (patchFlag & 8) {
                const propsToUpdate = n2.dynamicProps;
                for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
                  const key = propsToUpdate[i2];
                  const prev = oldProps[key];
                  const next = newProps[key];
                  if (next !== prev || key === "value") {
                    hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                  }
                }
              }
            }
            if (patchFlag & 1) {
              if (n1.children !== n2.children) {
                hostSetElementText(el, n2.children);
              }
            }
          } else if (!optimized && dynamicChildren == null) {
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
          }
          if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
              dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
            }, parentSuspense);
          }
        };
        const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
          for (let i2 = 0; i2 < newChildren.length; i2++) {
            const oldVNode = oldChildren[i2];
            const newVNode = newChildren[i2];
            const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
          }
        };
        const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
          if (oldProps !== newProps) {
            for (const key in newProps) {
              if (isReservedProp(key))
                continue;
              const next = newProps[key];
              const prev = oldProps[key];
              if (next !== prev && key !== "value") {
                hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
            if (oldProps !== EMPTY_OBJ) {
              for (const key in oldProps) {
                if (!isReservedProp(key) && !(key in newProps)) {
                  hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
            }
            if ("value" in newProps) {
              hostPatchProp(el, "value", oldProps.value, newProps.value);
            }
          }
        };
        const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
          const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
          let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
              if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
                traverseStaticChildren(n1, n2, true);
              }
            } else {
              patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
          }
        };
        const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          n2.slotScopeIds = slotScopeIds;
          if (n1 == null) {
            if (n2.shapeFlag & 512) {
              parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            } else {
              mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
          } else {
            updateComponent(n1, n2, optimized);
          }
        };
        const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
          const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
          if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
          }
          {
            setupComponent(instance);
          }
          if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
              const placeholder = instance.subTree = createVNode(Comment);
              processCommentNode(null, placeholder, container, anchor);
            }
            return;
          }
          setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        };
        const updateComponent = (n1, n2, optimized) => {
          const instance = n2.component = n1.component;
          if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
              updateComponentPreRender(instance, n2, optimized);
              return;
            } else {
              instance.next = n2;
              invalidateJob(instance.update);
              instance.update();
            }
          } else {
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
          }
        };
        const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
          const componentUpdateFn = () => {
            if (!instance.isMounted) {
              let vnodeHook;
              const { el, props } = initialVNode;
              const { bm, m, parent } = instance;
              const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
              toggleRecurse(instance, false);
              if (bm) {
                invokeArrayFns(bm);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHook, parent, initialVNode);
              }
              toggleRecurse(instance, true);
              if (el && hydrateNode) {
                const hydrateSubTree = () => {
                  instance.subTree = renderComponentRoot(instance);
                  hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                };
                if (isAsyncWrapperVNode) {
                  initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
                } else {
                  hydrateSubTree();
                }
              } else {
                const subTree = instance.subTree = renderComponentRoot(instance);
                patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                initialVNode.el = subTree.el;
              }
              if (m) {
                queuePostRenderEffect(m, parentSuspense);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                const scopedInitialVNode = initialVNode;
                queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
              }
              if (initialVNode.shapeFlag & 256) {
                instance.a && queuePostRenderEffect(instance.a, parentSuspense);
              }
              instance.isMounted = true;
              initialVNode = container = anchor = null;
            } else {
              let { next, bu, u: u2, parent, vnode } = instance;
              let originNext = next;
              let vnodeHook;
              toggleRecurse(instance, false);
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              } else {
                next = vnode;
              }
              if (bu) {
                invokeArrayFns(bu);
              }
              if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
                invokeVNodeHook(vnodeHook, parent, next, vnode);
              }
              toggleRecurse(instance, true);
              const nextTree = renderComponentRoot(instance);
              const prevTree = instance.subTree;
              instance.subTree = nextTree;
              patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
              next.el = nextTree.el;
              if (originNext === null) {
                updateHOCHostEl(instance, nextTree.el);
              }
              if (u2) {
                queuePostRenderEffect(u2, parentSuspense);
              }
              if (vnodeHook = next.props && next.props.onVnodeUpdated) {
                queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
              }
            }
          };
          const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
          const update = instance.update = effect.run.bind(effect);
          update.id = instance.uid;
          toggleRecurse(instance, true);
          update();
        };
        const updateComponentPreRender = (instance, nextVNode, optimized) => {
          nextVNode.component = instance;
          const prevProps = instance.vnode.props;
          instance.vnode = nextVNode;
          instance.next = null;
          updateProps(instance, nextVNode.props, prevProps, optimized);
          updateSlots(instance, nextVNode.children, optimized);
          pauseTracking();
          flushPreFlushCbs(void 0, instance.update);
          resetTracking();
        };
        const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
          const c1 = n1 && n1.children;
          const prevShapeFlag = n1 ? n1.shapeFlag : 0;
          const c2 = n2.children;
          const { patchFlag, shapeFlag } = n2;
          if (patchFlag > 0) {
            if (patchFlag & 128) {
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              return;
            } else if (patchFlag & 256) {
              patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              return;
            }
          }
          if (shapeFlag & 8) {
            if (prevShapeFlag & 16) {
              unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
              hostSetElementText(container, c2);
            }
          } else {
            if (prevShapeFlag & 16) {
              if (shapeFlag & 16) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else {
                unmountChildren(c1, parentComponent, parentSuspense, true);
              }
            } else {
              if (prevShapeFlag & 8) {
                hostSetElementText(container, "");
              }
              if (shapeFlag & 16) {
                mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
            }
          }
        };
        const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          c1 = c1 || EMPTY_ARR;
          c2 = c2 || EMPTY_ARR;
          const oldLength = c1.length;
          const newLength = c2.length;
          const commonLength = Math.min(oldLength, newLength);
          let i2;
          for (i2 = 0; i2 < commonLength; i2++) {
            const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
            patch(c1[i2], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
          if (oldLength > newLength) {
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
          } else {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
          }
        };
        const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let i2 = 0;
          const l2 = c2.length;
          let e1 = c1.length - 1;
          let e2 = l2 - 1;
          while (i2 <= e1 && i2 <= e2) {
            const n1 = c1[i2];
            const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
            if (isSameVNodeType(n1, n2)) {
              patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              break;
            }
            i2++;
          }
          while (i2 <= e1 && i2 <= e2) {
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) {
              patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              break;
            }
            e1--;
            e2--;
          }
          if (i2 > e1) {
            if (i2 <= e2) {
              const nextPos = e2 + 1;
              const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
              while (i2 <= e2) {
                patch(null, c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                i2++;
              }
            }
          } else if (i2 > e2) {
            while (i2 <= e1) {
              unmount(c1[i2], parentComponent, parentSuspense, true);
              i2++;
            }
          } else {
            const s1 = i2;
            const s2 = i2;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for (i2 = s2; i2 <= e2; i2++) {
              const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
              if (nextChild.key != null) {
                keyToNewIndexMap.set(nextChild.key, i2);
              }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i2 = 0; i2 < toBePatched; i2++)
              newIndexToOldIndexMap[i2] = 0;
            for (i2 = s1; i2 <= e1; i2++) {
              const prevChild = c1[i2];
              if (patched >= toBePatched) {
                unmount(prevChild, parentComponent, parentSuspense, true);
                continue;
              }
              let newIndex;
              if (prevChild.key != null) {
                newIndex = keyToNewIndexMap.get(prevChild.key);
              } else {
                for (j = s2; j <= e2; j++) {
                  if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                    newIndex = j;
                    break;
                  }
                }
              }
              if (newIndex === void 0) {
                unmount(prevChild, parentComponent, parentSuspense, true);
              } else {
                newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
                if (newIndex >= maxNewIndexSoFar) {
                  maxNewIndexSoFar = newIndex;
                } else {
                  moved = true;
                }
                patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                patched++;
              }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            for (i2 = toBePatched - 1; i2 >= 0; i2--) {
              const nextIndex = s2 + i2;
              const nextChild = c2[nextIndex];
              const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
              if (newIndexToOldIndexMap[i2] === 0) {
                patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else if (moved) {
                if (j < 0 || i2 !== increasingNewIndexSequence[j]) {
                  move(nextChild, container, anchor, 2);
                } else {
                  j--;
                }
              }
            }
          }
        };
        const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
          const { el, type, transition, children, shapeFlag } = vnode;
          if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
          }
          if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
          }
          if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
          }
          if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i2 = 0; i2 < children.length; i2++) {
              move(children[i2], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
          }
          if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
          }
          const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
          if (needTransition) {
            if (moveType === 0) {
              transition.beforeEnter(el);
              hostInsert(el, container, anchor);
              queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            } else {
              const { leave, delayLeave, afterLeave } = transition;
              const remove3 = () => hostInsert(el, container, anchor);
              const performLeave = () => {
                leave(el, () => {
                  remove3();
                  afterLeave && afterLeave();
                });
              };
              if (delayLeave) {
                delayLeave(el, remove3, performLeave);
              } else {
                performLeave();
              }
            }
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
          const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
          if (ref != null) {
            setRef(ref, null, parentSuspense, vnode, true);
          }
          if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
          }
          const shouldInvokeDirs = shapeFlag & 1 && dirs;
          const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
          let vnodeHook;
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
          if (shapeFlag & 6) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
          } else {
            if (shapeFlag & 128) {
              vnode.suspense.unmount(parentSuspense, doRemove);
              return;
            }
            if (shouldInvokeDirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            }
            if (shapeFlag & 64) {
              vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
              unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
              unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
              remove2(vnode);
            }
          }
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
            }, parentSuspense);
          }
        };
        const remove2 = (vnode) => {
          const { type, el, anchor, transition } = vnode;
          if (type === Fragment) {
            {
              removeFragment(el, anchor);
            }
            return;
          }
          if (type === Static) {
            removeStaticNode(vnode);
            return;
          }
          const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
              transition.afterLeave();
            }
          };
          if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
              delayLeave(vnode.el, performRemove, performLeave);
            } else {
              performLeave();
            }
          } else {
            performRemove();
          }
        };
        const removeFragment = (cur, end) => {
          let next;
          while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
          }
          hostRemove(end);
        };
        const unmountComponent = (instance, parentSuspense, doRemove) => {
          const { bum, scope, update, subTree, um } = instance;
          if (bum) {
            invokeArrayFns(bum);
          }
          scope.stop();
          if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
          }
          if (um) {
            queuePostRenderEffect(um, parentSuspense);
          }
          queuePostRenderEffect(() => {
            instance.isUnmounted = true;
          }, parentSuspense);
          if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
              parentSuspense.resolve();
            }
          }
        };
        const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
          for (let i2 = start; i2 < children.length; i2++) {
            unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
          }
        };
        const getNextHostNode = (vnode) => {
          if (vnode.shapeFlag & 6) {
            return getNextHostNode(vnode.component.subTree);
          }
          if (vnode.shapeFlag & 128) {
            return vnode.suspense.next();
          }
          return hostNextSibling(vnode.anchor || vnode.el);
        };
        const render = (vnode, container, isSVG) => {
          if (vnode == null) {
            if (container._vnode) {
              unmount(container._vnode, null, null, true);
            }
          } else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
          }
          flushPostFlushCbs();
          container._vnode = vnode;
        };
        const internals = {
          p: patch,
          um: unmount,
          m: move,
          r: remove2,
          mt: mountComponent,
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          n: getNextHostNode,
          o: options
        };
        let hydrate;
        let hydrateNode;
        if (createHydrationFns) {
          [hydrate, hydrateNode] = createHydrationFns(internals);
        }
        return {
          render,
          hydrate,
          createApp: createAppAPI(render, hydrate)
        };
      }
      function toggleRecurse({ effect, update }, allowed) {
        effect.allowRecurse = update.allowRecurse = allowed;
      }
      function traverseStaticChildren(n1, n2, shallow = false) {
        const ch1 = n1.children;
        const ch2 = n2.children;
        if (isArray(ch1) && isArray(ch2)) {
          for (let i2 = 0; i2 < ch1.length; i2++) {
            const c1 = ch1[i2];
            let c2 = ch2[i2];
            if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
              if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
                c2.el = c1.el;
              }
              if (!shallow)
                traverseStaticChildren(c1, c2);
            }
          }
        }
      }
      function getSequence(arr) {
        const p2 = arr.slice();
        const result = [0];
        let i2, j, u2, v, c2;
        const len = arr.length;
        for (i2 = 0; i2 < len; i2++) {
          const arrI = arr[i2];
          if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
              p2[i2] = j;
              result.push(i2);
              continue;
            }
            u2 = 0;
            v = result.length - 1;
            while (u2 < v) {
              c2 = u2 + v >> 1;
              if (arr[result[c2]] < arrI) {
                u2 = c2 + 1;
              } else {
                v = c2;
              }
            }
            if (arrI < arr[result[u2]]) {
              if (u2 > 0) {
                p2[i2] = result[u2 - 1];
              }
              result[u2] = i2;
            }
          }
        }
        u2 = result.length;
        v = result[u2 - 1];
        while (u2-- > 0) {
          result[u2] = v;
          v = p2[v];
        }
        return result;
      }
      const isTeleport = (type) => type.__isTeleport;
      const COMPONENTS = "components";
      function resolveComponent(name, maybeSelfReference) {
        return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
      }
      const NULL_DYNAMIC_COMPONENT = Symbol();
      function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
        const instance = currentRenderingInstance || currentInstance;
        if (instance) {
          const Component = instance.type;
          if (type === COMPONENTS) {
            const selfName = getComponentName(Component);
            if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
              return Component;
            }
          }
          const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
          if (!res && maybeSelfReference) {
            return Component;
          }
          return res;
        }
      }
      function resolve(registry, name) {
        return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
      }
      const Fragment = Symbol(void 0);
      const Text = Symbol(void 0);
      const Comment = Symbol(void 0);
      const Static = Symbol(void 0);
      const blockStack = [];
      let currentBlock = null;
      function openBlock(disableTracking = false) {
        blockStack.push(currentBlock = disableTracking ? null : []);
      }
      function closeBlock() {
        blockStack.pop();
        currentBlock = blockStack[blockStack.length - 1] || null;
      }
      let isBlockTreeEnabled = 1;
      function setBlockTracking(value) {
        isBlockTreeEnabled += value;
      }
      function setupBlock(vnode) {
        vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
        closeBlock();
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
        return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
      }
      function isVNode(value) {
        return value ? value.__v_isVNode === true : false;
      }
      function isSameVNodeType(n1, n2) {
        return n1.type === n2.type && n1.key === n2.key;
      }
      const InternalObjectKey = `__vInternal`;
      const normalizeKey = ({ key }) => key != null ? key : null;
      const normalizeRef = ({ ref, ref_key, ref_for }) => {
        return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
      };
      function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
        const vnode = {
          __v_isVNode: true,
          __v_skip: true,
          type,
          props,
          key: props && normalizeKey(props),
          ref: props && normalizeRef(props),
          scopeId: currentScopeId,
          slotScopeIds: null,
          children,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag,
          patchFlag,
          dynamicProps,
          dynamicChildren: null,
          appContext: null
        };
        if (needFullChildrenNormalization) {
          normalizeChildren(vnode, children);
          if (shapeFlag & 128) {
            type.normalize(vnode);
          }
        } else if (children) {
          vnode.shapeFlag |= isString(children) ? 8 : 16;
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      const createVNode = _createVNode;
      function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
        if (!type || type === NULL_DYNAMIC_COMPONENT) {
          type = Comment;
        }
        if (isVNode(type)) {
          const cloned = cloneVNode(type, props, true);
          if (children) {
            normalizeChildren(cloned, children);
          }
          return cloned;
        }
        if (isClassComponent(type)) {
          type = type.__vccOpts;
        }
        if (props) {
          props = guardReactiveProps(props);
          let { class: klass, style } = props;
          if (klass && !isString(klass)) {
            props.class = normalizeClass(klass);
          }
          if (isObject(style)) {
            if (isProxy(style) && !isArray(style)) {
              style = extend({}, style);
            }
            props.style = normalizeStyle(style);
          }
        }
        const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
        return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
      }
      function guardReactiveProps(props) {
        if (!props)
          return null;
        return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
      }
      function cloneVNode(vnode, extraProps, mergeRef = false) {
        const { props, ref, patchFlag, children } = vnode;
        const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
        const cloned = {
          __v_isVNode: true,
          __v_skip: true,
          type: vnode.type,
          props: mergedProps,
          key: mergedProps && normalizeKey(mergedProps),
          ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
          scopeId: vnode.scopeId,
          slotScopeIds: vnode.slotScopeIds,
          children,
          target: vnode.target,
          targetAnchor: vnode.targetAnchor,
          staticCount: vnode.staticCount,
          shapeFlag: vnode.shapeFlag,
          patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
          dynamicProps: vnode.dynamicProps,
          dynamicChildren: vnode.dynamicChildren,
          appContext: vnode.appContext,
          dirs: vnode.dirs,
          transition: vnode.transition,
          component: vnode.component,
          suspense: vnode.suspense,
          ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
          ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
          el: vnode.el,
          anchor: vnode.anchor
        };
        return cloned;
      }
      function createTextVNode(text = " ", flag = 0) {
        return createVNode(Text, null, text, flag);
      }
      function normalizeVNode(child) {
        if (child == null || typeof child === "boolean") {
          return createVNode(Comment);
        } else if (isArray(child)) {
          return createVNode(Fragment, null, child.slice());
        } else if (typeof child === "object") {
          return cloneIfMounted(child);
        } else {
          return createVNode(Text, null, String(child));
        }
      }
      function cloneIfMounted(child) {
        return child.el === null || child.memo ? child : cloneVNode(child);
      }
      function normalizeChildren(vnode, children) {
        let type = 0;
        const { shapeFlag } = vnode;
        if (children == null) {
          children = null;
        } else if (isArray(children)) {
          type = 16;
        } else if (typeof children === "object") {
          if (shapeFlag & (1 | 64)) {
            const slot = children.default;
            if (slot) {
              slot._c && (slot._d = false);
              normalizeChildren(vnode, slot());
              slot._c && (slot._d = true);
            }
            return;
          } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
              children._ctx = currentRenderingInstance;
            } else if (slotFlag === 3 && currentRenderingInstance) {
              if (currentRenderingInstance.slots._ === 1) {
                children._ = 1;
              } else {
                children._ = 2;
                vnode.patchFlag |= 1024;
              }
            }
          }
        } else if (isFunction(children)) {
          children = { default: children, _ctx: currentRenderingInstance };
          type = 32;
        } else {
          children = String(children);
          if (shapeFlag & 64) {
            type = 16;
            children = [createTextVNode(children)];
          } else {
            type = 8;
          }
        }
        vnode.children = children;
        vnode.shapeFlag |= type;
      }
      function mergeProps(...args) {
        const ret = {};
        for (let i2 = 0; i2 < args.length; i2++) {
          const toMerge = args[i2];
          for (const key in toMerge) {
            if (key === "class") {
              if (ret.class !== toMerge.class) {
                ret.class = normalizeClass([ret.class, toMerge.class]);
              }
            } else if (key === "style") {
              ret.style = normalizeStyle([ret.style, toMerge.style]);
            } else if (isOn(key)) {
              const existing = ret[key];
              const incoming = toMerge[key];
              if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
                ret[key] = existing ? [].concat(existing, incoming) : incoming;
              }
            } else if (key !== "") {
              ret[key] = toMerge[key];
            }
          }
        }
        return ret;
      }
      function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
        callWithAsyncErrorHandling(hook, instance, 7, [
          vnode,
          prevVNode
        ]);
      }
      const getPublicInstance = (i2) => {
        if (!i2)
          return null;
        if (isStatefulComponent(i2))
          return getExposeProxy(i2) || i2.proxy;
        return getPublicInstance(i2.parent);
      };
      const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
        $: (i2) => i2,
        $el: (i2) => i2.vnode.el,
        $data: (i2) => i2.data,
        $props: (i2) => i2.props,
        $attrs: (i2) => i2.attrs,
        $slots: (i2) => i2.slots,
        $refs: (i2) => i2.refs,
        $parent: (i2) => getPublicInstance(i2.parent),
        $root: (i2) => getPublicInstance(i2.root),
        $emit: (i2) => i2.emit,
        $options: (i2) => resolveMergedOptions(i2),
        $forceUpdate: (i2) => () => queueJob(i2.update),
        $nextTick: (i2) => nextTick.bind(i2.proxy),
        $watch: (i2) => instanceWatch.bind(i2)
      });
      const PublicInstanceProxyHandlers = {
        get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          let normalizedProps;
          if (key[0] !== "$") {
            const n2 = accessCache[key];
            if (n2 !== void 0) {
              switch (n2) {
                case 1:
                  return setupState[key];
                case 2:
                  return data[key];
                case 4:
                  return ctx[key];
                case 3:
                  return props[key];
              }
            } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
              accessCache[key] = 1;
              return setupState[key];
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
              accessCache[key] = 2;
              return data[key];
            } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
              accessCache[key] = 3;
              return props[key];
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (shouldCacheAccess) {
              accessCache[key] = 0;
            }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          if (publicGetter) {
            if (key === "$attrs") {
              track(instance, "get", key);
            }
            return publicGetter(instance);
          } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
            return cssModule;
          } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
            {
              return globalProperties[key];
            }
          } else
            ;
        },
        set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
          } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value;
            return true;
          } else if (hasOwn(instance.props, key)) {
            return false;
          }
          if (key[0] === "$" && key.slice(1) in instance) {
            return false;
          } else {
            {
              ctx[key] = value;
            }
          }
          return true;
        },
        has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
          let normalizedProps;
          return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
        },
        defineProperty(target, key, descriptor) {
          if (descriptor.get != null) {
            target._.accessCache[key] = 0;
          } else if (hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
          }
          return Reflect.defineProperty(target, key, descriptor);
        }
      };
      const emptyAppContext = createAppContext();
      let uid$1 = 0;
      function createComponentInstance(vnode, parent, suspense) {
        const type = vnode.type;
        const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
        const instance = {
          uid: uid$1++,
          vnode,
          type,
          parent,
          appContext,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          scope: new EffectScope(true),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: parent ? parent.provides : Object.create(appContext.provides),
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: normalizePropsOptions(type, appContext),
          emitsOptions: normalizeEmitsOptions(type, appContext),
          emit: null,
          emitted: null,
          propsDefaults: EMPTY_OBJ,
          inheritAttrs: type.inheritAttrs,
          ctx: EMPTY_OBJ,
          data: EMPTY_OBJ,
          props: EMPTY_OBJ,
          attrs: EMPTY_OBJ,
          slots: EMPTY_OBJ,
          refs: EMPTY_OBJ,
          setupState: EMPTY_OBJ,
          setupContext: null,
          suspense,
          suspenseId: suspense ? suspense.pendingId : 0,
          asyncDep: null,
          asyncResolved: false,
          isMounted: false,
          isUnmounted: false,
          isDeactivated: false,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          da: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
        };
        {
          instance.ctx = { _: instance };
        }
        instance.root = parent ? parent.root : instance;
        instance.emit = emit$1.bind(null, instance);
        if (vnode.ce) {
          vnode.ce(instance);
        }
        return instance;
      }
      let currentInstance = null;
      const setCurrentInstance = (instance) => {
        currentInstance = instance;
        instance.scope.on();
      };
      const unsetCurrentInstance = () => {
        currentInstance && currentInstance.scope.off();
        currentInstance = null;
      };
      function isStatefulComponent(instance) {
        return instance.vnode.shapeFlag & 4;
      }
      let isInSSRComponentSetup = false;
      function setupComponent(instance, isSSR = false) {
        isInSSRComponentSetup = isSSR;
        const { props, children } = instance.vnode;
        const isStateful = isStatefulComponent(instance);
        initProps(instance, props, isStateful, isSSR);
        initSlots(instance, children);
        const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
        isInSSRComponentSetup = false;
        return setupResult;
      }
      function setupStatefulComponent(instance, isSSR) {
        const Component = instance.type;
        instance.accessCache = /* @__PURE__ */ Object.create(null);
        instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
        const { setup } = Component;
        if (setup) {
          const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
          setCurrentInstance(instance);
          pauseTracking();
          const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
          resetTracking();
          unsetCurrentInstance();
          if (isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
              return setupResult.then((resolvedResult) => {
                handleSetupResult(instance, resolvedResult, isSSR);
              }).catch((e2) => {
                handleError(e2, instance, 0);
              });
            } else {
              instance.asyncDep = setupResult;
            }
          } else {
            handleSetupResult(instance, setupResult, isSSR);
          }
        } else {
          finishComponentSetup(instance, isSSR);
        }
      }
      function handleSetupResult(instance, setupResult, isSSR) {
        if (isFunction(setupResult)) {
          if (instance.type.__ssrInlineRender) {
            instance.ssrRender = setupResult;
          } else {
            instance.render = setupResult;
          }
        } else if (isObject(setupResult)) {
          instance.setupState = proxyRefs(setupResult);
        } else
          ;
        finishComponentSetup(instance, isSSR);
      }
      let compile;
      function finishComponentSetup(instance, isSSR, skipOptions) {
        const Component = instance.type;
        if (!instance.render) {
          if (!isSSR && compile && !Component.render) {
            const template = Component.template;
            if (template) {
              const { isCustomElement, compilerOptions } = instance.appContext.config;
              const { delimiters, compilerOptions: componentCompilerOptions } = Component;
              const finalCompilerOptions = extend(extend({
                isCustomElement,
                delimiters
              }, compilerOptions), componentCompilerOptions);
              Component.render = compile(template, finalCompilerOptions);
            }
          }
          instance.render = Component.render || NOOP;
        }
        {
          setCurrentInstance(instance);
          pauseTracking();
          applyOptions(instance);
          resetTracking();
          unsetCurrentInstance();
        }
      }
      function createAttrsProxy(instance) {
        return new Proxy(instance.attrs, {
          get(target, key) {
            track(instance, "get", "$attrs");
            return target[key];
          }
        });
      }
      function createSetupContext(instance) {
        const expose = (exposed) => {
          instance.exposed = exposed || {};
        };
        let attrs;
        {
          return {
            get attrs() {
              return attrs || (attrs = createAttrsProxy(instance));
            },
            slots: instance.slots,
            emit: instance.emit,
            expose
          };
        }
      }
      function getExposeProxy(instance) {
        if (instance.exposed) {
          return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
            get(target, key) {
              if (key in target) {
                return target[key];
              } else if (key in publicPropertiesMap) {
                return publicPropertiesMap[key](instance);
              }
            }
          }));
        }
      }
      function getComponentName(Component) {
        return isFunction(Component) ? Component.displayName || Component.name : Component.name;
      }
      function isClassComponent(value) {
        return isFunction(value) && "__vccOpts" in value;
      }
      const computed = (getterOrOptions, debugOptions) => {
        return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
      };
      function h(type, propsOrChildren, children) {
        const l2 = arguments.length;
        if (l2 === 2) {
          if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
            if (isVNode(propsOrChildren)) {
              return createVNode(type, null, [propsOrChildren]);
            }
            return createVNode(type, propsOrChildren);
          } else {
            return createVNode(type, null, propsOrChildren);
          }
        } else {
          if (l2 > 3) {
            children = Array.prototype.slice.call(arguments, 2);
          } else if (l2 === 3 && isVNode(children)) {
            children = [children];
          }
          return createVNode(type, propsOrChildren, children);
        }
      }
      const version = "3.2.33";
      const svgNS = "http://www.w3.org/2000/svg";
      const doc = typeof document !== "undefined" ? document : null;
      const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      const nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, isSVG, is, props) => {
          const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
          if (tag === "select" && props && props.multiple != null) {
            el.setAttribute("multiple", props.multiple);
          }
          return el;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el, text) => {
          el.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector) => doc.querySelector(selector),
        setScopeId(el, id) {
          el.setAttribute(id, "");
        },
        cloneNode(el) {
          const cloned = el.cloneNode(true);
          if (`_value` in el) {
            cloned._value = el._value;
          }
          return cloned;
        },
        insertStaticContent(content, parent, anchor, isSVG, start, end) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start && (start === end || start.nextSibling)) {
            while (true) {
              parent.insertBefore(start.cloneNode(true), anchor);
              if (start === end || !(start = start.nextSibling))
                break;
            }
          } else {
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            before ? before.nextSibling : parent.firstChild,
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };
      function patchClass(el, value, isSVG) {
        const transitionClasses = el._vtc;
        if (transitionClasses) {
          value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
        }
        if (value == null) {
          el.removeAttribute("class");
        } else if (isSVG) {
          el.setAttribute("class", value);
        } else {
          el.className = value;
        }
      }
      function patchStyle(el, prev, next) {
        const style = el.style;
        const isCssString = isString(next);
        if (next && !isCssString) {
          for (const key in next) {
            setStyle(style, key, next[key]);
          }
          if (prev && !isString(prev)) {
            for (const key in prev) {
              if (next[key] == null) {
                setStyle(style, key, "");
              }
            }
          }
        } else {
          const currentDisplay = style.display;
          if (isCssString) {
            if (prev !== next) {
              style.cssText = next;
            }
          } else if (prev) {
            el.removeAttribute("style");
          }
          if ("_vod" in el) {
            style.display = currentDisplay;
          }
        }
      }
      const importantRE = /\s*!important$/;
      function setStyle(style, name, val) {
        if (isArray(val)) {
          val.forEach((v) => setStyle(style, name, v));
        } else {
          if (val == null)
            val = "";
          if (name.startsWith("--")) {
            style.setProperty(name, val);
          } else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
              style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
            } else {
              style[prefixed] = val;
            }
          }
        }
      }
      const prefixes = ["Webkit", "Moz", "ms"];
      const prefixCache = {};
      function autoPrefix(style, rawName) {
        const cached = prefixCache[rawName];
        if (cached) {
          return cached;
        }
        let name = camelize(rawName);
        if (name !== "filter" && name in style) {
          return prefixCache[rawName] = name;
        }
        name = capitalize(name);
        for (let i2 = 0; i2 < prefixes.length; i2++) {
          const prefixed = prefixes[i2] + name;
          if (prefixed in style) {
            return prefixCache[rawName] = prefixed;
          }
        }
        return rawName;
      }
      const xlinkNS = "http://www.w3.org/1999/xlink";
      function patchAttr(el, key, value, isSVG, instance) {
        if (isSVG && key.startsWith("xlink:")) {
          if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          const isBoolean = isSpecialBooleanAttr(key);
          if (value == null || isBoolean && !includeBooleanAttr(value)) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(key, isBoolean ? "" : value);
          }
        }
      }
      function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
        if (key === "innerHTML" || key === "textContent") {
          if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
          }
          el[key] = value == null ? "" : value;
          return;
        }
        if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
          el._value = value;
          const newValue = value == null ? "" : value;
          if (el.value !== newValue || el.tagName === "OPTION") {
            el.value = newValue;
          }
          if (value == null) {
            el.removeAttribute(key);
          }
          return;
        }
        let needRemove = false;
        if (value === "" || value == null) {
          const type = typeof el[key];
          if (type === "boolean") {
            value = includeBooleanAttr(value);
          } else if (value == null && type === "string") {
            value = "";
            needRemove = true;
          } else if (type === "number") {
            value = 0;
            needRemove = true;
          }
        }
        try {
          el[key] = value;
        } catch (e2) {
        }
        needRemove && el.removeAttribute(key);
      }
      const [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
        let _getNow2 = Date.now;
        let skipTimestampCheck2 = false;
        if (typeof window !== "undefined") {
          if (Date.now() > document.createEvent("Event").timeStamp) {
            _getNow2 = () => performance.now();
          }
          const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
          skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
        }
        return [_getNow2, skipTimestampCheck2];
      })();
      let cachedNow = 0;
      const p$1 = /* @__PURE__ */ Promise.resolve();
      const reset = () => {
        cachedNow = 0;
      };
      const getNow = () => cachedNow || (p$1.then(reset), cachedNow = _getNow());
      function addEventListener(el, event, handler, options) {
        el.addEventListener(event, handler, options);
      }
      function removeEventListener(el, event, handler, options) {
        el.removeEventListener(event, handler, options);
      }
      function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
        const invokers = el._vei || (el._vei = {});
        const existingInvoker = invokers[rawName];
        if (nextValue && existingInvoker) {
          existingInvoker.value = nextValue;
        } else {
          const [name, options] = parseName(rawName);
          if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
          } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
          }
        }
      }
      const optionsModifierRE = /(?:Once|Passive|Capture)$/;
      function parseName(name) {
        let options;
        if (optionsModifierRE.test(name)) {
          options = {};
          let m;
          while (m = name.match(optionsModifierRE)) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
          }
        }
        return [hyphenate(name.slice(2)), options];
      }
      function createInvoker(initialValue, instance) {
        const invoker = (e2) => {
          const timeStamp = e2.timeStamp || _getNow();
          if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, invoker.value), instance, 5, [e2]);
          }
        };
        invoker.value = initialValue;
        invoker.attached = getNow();
        return invoker;
      }
      function patchStopImmediatePropagation(e2, value) {
        if (isArray(value)) {
          const originalStop = e2.stopImmediatePropagation;
          e2.stopImmediatePropagation = () => {
            originalStop.call(e2);
            e2._stopped = true;
          };
          return value.map((fn) => (e3) => !e3._stopped && fn && fn(e3));
        } else {
          return value;
        }
      }
      const nativeOnRE = /^on[a-z]/;
      const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
        if (key === "class") {
          patchClass(el, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el, prevValue, nextValue);
        } else if (isOn(key)) {
          if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
        } else {
          if (key === "true-value") {
            el._trueValue = nextValue;
          } else if (key === "false-value") {
            el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
        }
      };
      function shouldSetAsProp(el, key, value, isSVG) {
        if (isSVG) {
          if (key === "innerHTML" || key === "textContent") {
            return true;
          }
          if (key in el && nativeOnRE.test(key) && isFunction(value)) {
            return true;
          }
          return false;
        }
        if (key === "spellcheck" || key === "draggable" || key === "translate") {
          return false;
        }
        if (key === "form") {
          return false;
        }
        if (key === "list" && el.tagName === "INPUT") {
          return false;
        }
        if (key === "type" && el.tagName === "TEXTAREA") {
          return false;
        }
        if (nativeOnRE.test(key) && isString(value)) {
          return false;
        }
        return key in el;
      }
      const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
      let renderer;
      function ensureRenderer() {
        return renderer || (renderer = createRenderer(rendererOptions));
      }
      const createApp = (...args) => {
        const app = ensureRenderer().createApp(...args);
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
            return;
          const component = app._component;
          if (!isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          container.innerHTML = "";
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      };
      function normalizeContainer(container) {
        if (isString(container)) {
          const res = document.querySelector(container);
          return res;
        }
        return container;
      }
      var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "";
      var _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };
      const _sfc_main$1 = {
        name: "HelloWorld",
        props: {
          msg: String
        },
        data() {
          return {
            count: 0
          };
        }
      };
      const _withScopeId = (n2) => (pushScopeId("data-v-3835873d"), n2 = n2(), popScopeId(), n2);
      const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, [
        /* @__PURE__ */ createTextVNode("Edit "),
        /* @__PURE__ */ createBaseVNode("code", null, "components/HelloWorld.vue"),
        /* @__PURE__ */ createTextVNode(" to test hot module replacement.")
      ], -1));
      function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
        return openBlock(), createElementBlock(Fragment, null, [
          createBaseVNode("h1", null, toDisplayString($props.msg), 1),
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => $data.count++)
          }, "count is: " + toDisplayString($data.count), 1),
          _hoisted_1$1
        ], 64);
      }
      var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3835873d"]]);
      const _sfc_main = {
        name: "App",
        components: {
          HelloWorld
        }
      };
      const _hoisted_1 = /* @__PURE__ */ createBaseVNode("img", {
        alt: "Vue logo",
        src: "/private/app/vitya/assets/logo.png"
      }, null, -1);
      function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_HelloWorld = resolveComponent("HelloWorld");
        return openBlock(), createElementBlock("div", null, [
          _hoisted_1,
          createVNode(_component_HelloWorld, { msg: "Hello Vue 3.0 + Vite" })
        ]);
      }
      var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
      var e, n, t = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
      function r(e2, n2) {
        var t2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          n2 && (r2 = r2.filter(function(n3) {
            return Object.getOwnPropertyDescriptor(e2, n3).enumerable;
          })), t2.push.apply(t2, r2);
        }
        return t2;
      }
      function o(e2) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var t2 = arguments[n2] != null ? arguments[n2] : {};
          n2 % 2 ? r(Object(t2), true).forEach(function(n3) {
            a(e2, n3, t2[n3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : r(Object(t2)).forEach(function(n3) {
            Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t2, n3));
          });
        }
        return e2;
      }
      function a(e2, n2, t2) {
        return n2 in e2 ? Object.defineProperty(e2, n2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[n2] = t2, e2;
      }
      function i(e2) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      (function(e2, n2) {
        var r2;
        r2 = t, e2.exports = function(e3) {
          if (e3.CSS && e3.CSS.escape)
            return e3.CSS.escape;
          var n3 = function(e4) {
            if (arguments.length == 0)
              throw new TypeError("`CSS.escape` requires an argument.");
            for (var n4, t2 = String(e4), r3 = t2.length, o2 = -1, a2 = "", i2 = t2.charCodeAt(0); ++o2 < r3; )
              (n4 = t2.charCodeAt(o2)) != 0 ? a2 += n4 >= 1 && n4 <= 31 || n4 == 127 || o2 == 0 && n4 >= 48 && n4 <= 57 || o2 == 1 && n4 >= 48 && n4 <= 57 && i2 == 45 ? "\\" + n4.toString(16) + " " : o2 == 0 && r3 == 1 && n4 == 45 || !(n4 >= 128 || n4 == 45 || n4 == 95 || n4 >= 48 && n4 <= 57 || n4 >= 65 && n4 <= 90 || n4 >= 97 && n4 <= 122) ? "\\" + t2.charAt(o2) : t2.charAt(o2) : a2 += "\uFFFD";
            return a2;
          };
          return e3.CSS || (e3.CSS = {}), e3.CSS.escape = n3, n3;
        }(r2);
      })(n = { path: e, exports: {}, require: function(e2, t2) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t2 == null && n.path);
      } }, n.exports), n.exports;
      var p = { appOptions: null, template: null, Vue: null, createApp: null, handleInstance: null };
      function u(e2) {
        if (i(e2) !== "object")
          throw new Error("single-spa-vue requires a configuration object");
        var n2 = o(o({}, p), e2);
        if (!n2.Vue && !n2.createApp)
          throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");
        if (!n2.appOptions)
          throw Error("single-spa-vue must be passed opts.appOptions");
        if (n2.appOptions.el && typeof n2.appOptions.el != "string" && !(n2.appOptions.el instanceof HTMLElement))
          throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(i(n2.appOptions.el)));
        n2.createApp = n2.createApp || n2.Vue && n2.Vue.createApp;
        var t2 = {};
        return { bootstrap: c.bind(null, n2, t2), mount: l.bind(null, n2, t2), unmount: f.bind(null, n2, t2), update: s.bind(null, n2, t2) };
      }
      function c(e2) {
        return e2.loadRootComponent ? e2.loadRootComponent().then(function(n2) {
          return e2.rootComponent = n2;
        }) : Promise.resolve();
      }
      function l(e2, n2, t2) {
        var r2 = {};
        return Promise.resolve().then(function() {
          return function(e3, n3) {
            return typeof e3.appOptions == "function" ? e3.appOptions(n3) : Promise.resolve(o({}, e3.appOptions));
          }(e2, t2).then(function(a2) {
            var i2;
            if (t2.domElement && !a2.el && (a2.el = t2.domElement), a2.el)
              if (typeof a2.el == "string") {
                if (!(i2 = document.querySelector(a2.el)))
                  throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(a2.el));
              } else
                (i2 = a2.el).id || (i2.id = "single-spa-application:".concat(t2.name)), a2.el = "#".concat(CSS.escape(i2.id));
            else {
              var p2 = "single-spa-application:".concat(t2.name);
              a2.el = "#".concat(CSS.escape(p2)), (i2 = document.getElementById(p2)) || ((i2 = document.createElement("div")).id = p2, document.body.appendChild(i2));
            }
            if (e2.replaceMode || (a2.el = a2.el + " .single-spa-container"), !i2.querySelector(".single-spa-container")) {
              var u2 = document.createElement("div");
              u2.className = "single-spa-container", i2.appendChild(u2);
            }
            if (r2.domEl = i2, a2.render || a2.template || !e2.rootComponent || (a2.render = function(n3) {
              return n3(e2.rootComponent);
            }), a2.data || (a2.data = {}), a2.data = function() {
              return o(o({}, a2.data), t2);
            }, e2.createApp) {
              if (r2.vueInstance = e2.createApp(a2), e2.handleInstance)
                return Promise.resolve(e2.handleInstance(r2.vueInstance, t2)).then(function() {
                  return r2.root = r2.vueInstance.mount(a2.el), n2[t2.name] = r2, r2.vueInstance;
                });
              r2.root = r2.vueInstance.mount(a2.el);
            } else if (r2.vueInstance = new e2.Vue(a2), r2.vueInstance.bind && (r2.vueInstance = r2.vueInstance.bind(r2.vueInstance)), e2.handleInstance)
              return Promise.resolve(e2.handleInstance(r2.vueInstance, t2)).then(function() {
                return n2[t2.name] = r2, r2.vueInstance;
              });
            return n2[t2.name] = r2, r2.vueInstance;
          });
        });
      }
      function s(e2, n2, t2) {
        return Promise.resolve().then(function() {
          var r2 = n2[t2.name], a2 = o(o({}, e2.appOptions.data || {}), t2), i2 = r2.root || r2.vueInstance;
          for (var p2 in a2)
            i2[p2] = a2[p2];
        });
      }
      function f(e2, n2, t2) {
        return Promise.resolve().then(function() {
          var r2 = n2[t2.name];
          e2.createApp ? r2.vueInstance.unmount(r2.domEl) : (r2.vueInstance.$destroy(), r2.vueInstance.$el.innerHTML = ""), delete r2.vueInstance, r2.domEl && (r2.domEl.innerHTML = "", delete r2.domEl);
        });
      }
      const vueLifecycles = u({
        createApp,
        appOptions: {
          render() {
            return h(App, {
              props: {
                name: this.name,
                mountParcel: this.mountParcel,
                singleSpa: this.singleSpa
              }
            });
          }
        },
        handleInstance: (app) => {
        }
      });
      let appPromise = exports("appPromise", new Promise((r2) => setTimeout(() => {
        r2(vueLifecycles);
      }, 2e3)));
    }
  };
});
