! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 40)
}([function(e, t, n) {
    "use strict";
    var i, r = "object" == typeof Reflect ? Reflect : null,
        s = r && "function" == typeof r.apply ? r.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        };
    i = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function(e) {
        return Object.getOwnPropertyNames(e)
    };
    var o = Number.isNaN || function(e) {
        return e != e
    };

    function a() {
        a.init.call(this)
    }
    e.exports = a, e.exports.once = function(e, t) {
        return new Promise((function(n, i) {
            function r() {
                void 0 !== s && e.removeListener("error", s), n([].slice.call(arguments))
            }
            var s;
            "error" !== t && (s = function(n) {
                e.removeListener(t, r), i(n)
            }, e.once("error", s)), e.once(t, r)
        }))
    }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var c = 10;

    function l(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }

    function u(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function d(e, t, n, i) {
        var r, s, o, a;
        if (l(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), o = s[t]), void 0 === o) o = s[t] = n, ++e._eventsCount;
        else if ("function" == typeof o ? o = s[t] = i ? [n, o] : [o, n] : i ? o.unshift(n) : o.push(n), (r = u(e)) > 0 && o.length > r && !o.warned) {
            o.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, a = c, console && console.warn && console.warn(a)
        }
        return e
    }

    function h() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function f(e, t, n) {
        var i = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            },
            r = h.bind(i);
        return r.listener = n, i.wrapFn = r, r
    }

    function p(e, t, n) {
        var i = e._events;
        if (void 0 === i) return [];
        var r = i[t];
        return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }(r) : v(r, r.length)
    }

    function g(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length
        }
        return 0
    }

    function v(e, t) {
        for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
        return n
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return c
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            c = e
        }
    }), a.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function() {
        return u(this)
    }, a.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var i = "error" === e,
            r = this._events;
        if (void 0 !== r) i = i && void 0 === r.error;
        else if (!i) return !1;
        if (i) {
            var o;
            if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
            var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw a.context = o, a
        }
        var c = r[e];
        if (void 0 === c) return !1;
        if ("function" == typeof c) s(c, this, t);
        else {
            var l = c.length,
                u = v(c, l);
            for (n = 0; n < l; ++n) s(u[n], this, t)
        }
        return !0
    }, a.prototype.addListener = function(e, t) {
        return d(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
        return d(this, e, t, !0)
    }, a.prototype.once = function(e, t) {
        return l(t), this.on(e, f(this, e, t)), this
    }, a.prototype.prependOnceListener = function(e, t) {
        return l(t), this.prependListener(e, f(this, e, t)), this
    }, a.prototype.removeListener = function(e, t) {
        var n, i, r, s, o;
        if (l(t), void 0 === (i = this._events)) return this;
        if (void 0 === (n = i[e])) return this;
        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (r = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === t || n[s].listener === t) {
                    o = n[s].listener, r = s;
                    break
                }
            if (r < 0) return this;
            0 === r ? n.shift() : function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(n, r), 1 === n.length && (i[e] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
        var t, n, i;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
        if (0 === arguments.length) {
            var r, s = Object.keys(n);
            for (i = 0; i < s.length; ++i) "removeListener" !== (r = s[i]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof(t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this
    }, a.prototype.listeners = function(e) {
        return p(this, e, !0)
    }, a.prototype.rawListeners = function(e) {
        return p(this, e, !1)
    }, a.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
    }, a.prototype.listenerCount = g, a.prototype.eventNames = function() {
        return this._eventsCount > 0 ? i(this._events) : []
    }
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }
}, function(e, t, n) {
    "use strict";
    var i, r, s, o = [n(45), n(46), n(47), n(48), n(49), n(50)],
        a = -1,
        c = [],
        l = !1;

    function u() {
        i && r && (i = !1, r.length ? c = r.concat(c) : a = -1, c.length && d())
    }

    function d() {
        if (!i) {
            l = !1, i = !0;
            for (var e = c.length, t = setTimeout(u); e;) {
                for (r = c, c = []; r && ++a < e;) r[a].run();
                a = -1, e = c.length
            }
            r = null, a = -1, i = !1, clearTimeout(t)
        }
    }
    for (var h = -1, f = o.length; ++h < f;)
        if (o[h] && o[h].test && o[h].test()) {
            s = o[h].install(d);
            break
        }
    function p(e, t) {
        this.fun = e, this.array = t
    }
    p.prototype.run = function() {
        var e = this.fun,
            t = this.array;
        switch (t.length) {
            case 0:
                return e();
            case 1:
                return e(t[0]);
            case 2:
                return e(t[0], t[1]);
            case 3:
                return e(t[0], t[1], t[2]);
            default:
                return e.apply(null, t)
        }
    }, e.exports = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new p(e, t)), l || i || (l = !0, s())
    }
}, function(e, t) {
    e.exports = d3
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.selectAll = t.selectLayerElement = t.selectStaff = t.selectNn = t.selectBBox = t.getStaffBBox = t.sharedSecondLevelParent = t.isLigature = t.selectNcs = t.select = t.unselect = t.getSelectionType = void 0;
    const i = n(10),
        r = n(8),
        s = n(36),
        o = n(37),
        a = n(11),
        c = n(3);

    function l() {
        const e = document.getElementsByClassName("sel-by is-active");
        return 0 !== e.length ? e[0].id : null
    }

    function u() {
        document.querySelectorAll(".selected").forEach(e => {
            e.classList.remove("selected"), e.classList.contains("staff") ? (e.removeAttribute("style"), i.unhighlight(e)) : (e.removeAttribute("style"), e.style.fill = "")
        }), Array.from(document.getElementsByClassName("text-select")).forEach(e => {
            e.style.color = "", e.style.fontWeight = "", e.classList.remove("text-select")
        }), Array.from(document.getElementsByClassName("sylTextRect-display")).forEach(e => {
            e.style.fill = "blue"
        }), Array.from(document.getElementsByClassName("syllable-highlighted")).forEach(e => {
            e.style.fill = "", e.classList.add("syllable"), e.classList.remove("syllable-highlighted")
        }), c.selectAll("#resizeRect").remove(), c.selectAll(".resizePoint").remove(), c.selectAll(".rotatePoint").remove(), document.getElementById("selByStaff").classList.contains("is-active") ? a.endOptionsSelection() : s.endGroupingSelection(), document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible"), r.updateHighlight()
    }

    function d(e, t) {
        if (e.classList.contains("staff")) return g(e, t);
        if (e.classList.contains("layer")) return v(e, t);
        if (!e.classList.contains("selected") && !e.classList.contains("sylTextRect") && !e.classList.contains("sylTextRect-display")) {
            let t;
            if (e.classList.add("selected"), e.style.fill = "#d00", e.querySelectorAll(".sylTextRect-display").length && e.querySelectorAll(".sylTextRect-display").forEach(e => {
                    e.style.fill = "red"
                }), e.classList.contains("syllable") ? t = e.id : null !== e.closest(".syllable") && (t = e.closest(".syllable").id), void 0 !== t) {
                document.querySelectorAll("span." + t).forEach(e => {
                    e.style.color = "#d00", e.style.fontWeight = "bold", e.classList.add("text-select")
                })
            }
        }
        r.updateHighlight()
    }
    async function h(e, t) {
        return (await t.getElementAttr(e.id, t.view.getCurrentPageURI())).ligated
    }

    function f(e) {
        const t = Array.from(e),
            n = t.pop().parentElement.parentElement;
        for (const e of t) {
            if (e.parentElement.parentElement.id !== n.id) return !1
        }
        return !0
    }

    function p(e, t, n) {
        const i = e,
            r = i.closest(".syl");
        if (!r.classList.contains("selected")) {
            r.classList.add("selected"), i.style.fill = "#d00";
            const s = e.closest(".syllable");
            s.style.fill = "red", s.classList.add("syllable-highlighted"), void 0 !== n && o.resize(r, n, t), void 0 !== t && t.dragInit();
            const a = e.closest(".syllable").id;
            if (void 0 !== a) {
                const e = document.querySelector("span." + a);
                e && (e.style.color = "#d00", e.style.fontWeight = "bold", e.classList.add("text-select"))
            }
        }
    }

    function g(e, t) {
        e.classList.contains("selected") || (e.classList.add("selected"), i.unhighlight(e), i.highlight(e, "#d00"), t.dragInit())
    }

    function v(e, t) {
        e.classList.contains("selected") || (e.classList.add("selected"), i.unhighlight(e), i.highlight(e, "#d00"), t.dragInit())
    }
    t.getSelectionType = l, t.unselect = u, t.select = d, t.selectNcs = async function(e, t, n) {
        if (!e.parentElement.classList.contains("selected")) {
            const i = e.parentElement;
            if (u(), d(i), await h(i, t)) {
                const e = i.previousSibling;
                if (await h(e, t)) d(e);
                else {
                    const e = i.nextSibling;
                    await h(e, t) ? d(e) : console.warn("Error: Neither prev or next nc are ligatures")
                }
                s.triggerGrouping("ligature")
            } else i.classList.contains("nc") ? a.triggerNcActions(i) : console.warn("No action triggered!");
            n.dragInit()
        }
    }, t.isLigature = h, t.sharedSecondLevelParent = f, t.getStaffBBox = function(e) {
        let t, n, i, r, s;
        return e.querySelectorAll("path").forEach(e => {
            const o = e.getAttribute("d").match(/\d+/g).map(e => Number(e));
            void 0 === s && (s = Math.atan((o[3] - o[1]) / (o[2] - o[0]))), (void 0 === n || Math.min(o[1], o[3]) < n) && (n = Math.min(o[1], o[3])), (void 0 === t || o[0] < t) && (t = o[0]), (void 0 === r || Math.max(o[1], o[3]) > r) && (r = Math.max(o[1], o[3])), (void 0 === i || o[2] > i) && (i = o[2])
        }), {
            ulx: t,
            uly: n,
            lrx: i,
            lry: r,
            rotate: s
        }
    }, t.selectBBox = p, t.selectNn = function(e) {
        return !(e.length > 0) || (e.forEach(e => {
            d(e)
        }), !1)
    }, t.selectStaff = g, t.selectLayerElement = v, t.selectAll = async function(e, t, n) {
        const i = l();
        if (u(), 0 === e.length) return;
        let r, c = !1;
        switch (i) {
            case "selBySyl":
                r = ".syllable";
                break;
            case "selByNeume":
                r = ".neume";
                break;
            case "selByNc":
                r = ".nc";
                break;
            case "selByStaff":
                r = ".staff";
                break;
            case "selByBBox":
                r = ".sylTextRect-display";
                break;
            case "selByLayerElement":
                r = ".accid";
                break;
            default:
                return void console.error("Unknown selection type " + i)
        }
        const g = new Set;
        for (const t of e) {
            let e = t.closest(r);
            if (null === e) {
                if (e = t.closest(".clef, .custos"), null === e) {
                    console.warn("Element " + t.id + " is not part of specified group and is not a clef or custos.");
                    continue
                }
                c = c || !0
            }
            g.add(e);
            const n = e.getAttribute("mei:follows");
            n && g.add(document.getElementById(n.slice(1)));
            const i = e.getAttribute("mei:precedes");
            i && g.add(document.getElementById(i.slice(1)))
        }
        g.forEach(e => {
            d(e, n)
        });
        const v = Array.from(g.values());
        if (c) 1 === g.size && v[0].classList.contains("clef") ? a.triggerClefActions(v[0]) : 1 === g.size && v[0].classList.contains("custos") ? a.triggerCustosActions() : "selBySyl" == i ? a.triggerDefaultSylActions() : a.triggerDefaultActions();
        else switch (i) {
            case "selByStaff":
                switch (v.length) {
                    case 1:
                        a.triggerSplitActions(), o.resize(v[0], t, n);
                        break;
                    default:
                        a.triggerStaffActions()
                }
                break;
            case "selByLayerElement":
                a.triggerLayerElementActions();
                break;
            case "selBySyl":
                switch (v.length) {
                    case 1:
                        a.triggerSylActions();
                        break;
                    case 2:
                        if (v[0].getAttribute("mei:follows") === "#" + v[1].id || v[0].getAttribute("mei:precedes") === "#" + v[1].id) s.triggerGrouping("splitSyllable");
                        else if (f(v)) s.triggerGrouping("syl");
                        else {
                            const e = v[0].closest(".staff"),
                                t = v[1].closest(".staff"),
                                n = Array.from(e.parentElement.children);
                            if (1 === Math.abs(n.indexOf(e) - n.indexOf(t))) {
                                const i = n.indexOf(e) < n.indexOf(t) ? e : t,
                                    r = i.id === e.id ? t : e,
                                    o = i.querySelector(".layer"),
                                    a = r.querySelector(".layer"),
                                    c = Array.from(o.children).filter(e => e.classList.contains("syllable")),
                                    l = Array.from(a.children).filter(e => e.classList.contains("syllable")),
                                    u = c[c.length - 1],
                                    d = l[0];
                                if (u.id === v[0].id && d.id === v[1].id) {
                                    s.triggerGrouping("splitSyllable");
                                    break
                                }
                                if (u.id === v[1].id && d.id === v[0].id) {
                                    s.triggerGrouping("splitSyllable");
                                    break
                                }
                            }
                            a.triggerDefaultSylActions(), a.triggerSylActions()
                        }
                        break;
                    default:
                        f(v) ? (s.triggerGrouping("syl"), a.triggerSylActions()) : (a.triggerDefaultSylActions(), a.triggerSylActions())
                }
                break;
            case "selByNeume":
                switch (v.length) {
                    case 1:
                        a.triggerNeumeActions();
                        break;
                    default:
                        f(v) ? s.triggerGrouping("neume") : a.triggerDefaultActions()
                }
                break;
            case "selByNc":
                switch (v.length) {
                    case 1:
                        a.triggerNcActions(v[0]);
                        break;
                    case 2:
                        if (f(v)) {
                            if (v[0].parentElement === v[1].parentElement) {
                                const e = Array.from(v[0].parentElement.children);
                                if (1 === Math.abs(e.indexOf(v[0]) - e.indexOf(v[1]))) {
                                    let e, n;
                                    v[0].children[0].x.baseVal.value < v[1].children[0].x.baseVal.value ? (e = v[0].children[0].y.baseVal.value, n = v[1].children[0].y.baseVal.value) : (e = v[1].children[0].y.baseVal.value, n = v[0].children[0].y.baseVal.value);
                                    const i = await h(v[0], t),
                                        r = await h(v[1], t);
                                    if (n > e && i === r) {
                                        s.triggerGrouping("ligature");
                                        break
                                    }
                                }
                            }
                            s.triggerGrouping("nc")
                        } else a.triggerDefaultActions();
                        break;
                    default:
                        f(v) ? s.triggerGrouping("nc") : a.triggerDefaultActions()
                }
                break;
            case "selByBBox":
                switch (v.length) {
                    case 1:
                        p(v[0], n, t), a.triggerDefaultActions();
                        break;
                    default:
                        v.forEach(e => p(e, n, void 0))
                }
                break;
            default:
                console.error("Unknown selection type. This should not have occurred.")
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function() {
            var t = arguments.length;
            if (t) {
                for (var n = [], i = -1; ++i < t;) n[i] = arguments[i];
                return e.call(this, n)
            }
            return e.call(this, [])
        }
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var i = n(16),
        r = t.ValidationError = function(e, t, n, i, r, s) {
            i && (this.property = i), e && (this.message = e), n && (n.id ? this.schema = n.id : this.schema = n), t && (this.instance = t), this.name = r, this.argument = s, this.stack = this.toString()
        };
    r.prototype.toString = function() {
        return this.property + " " + this.message
    };
    var s = t.ValidatorResult = function(e, t, n, i) {
        this.instance = e, this.schema = t, this.propertyPath = i.propertyPath, this.errors = [], this.throwError = n && n.throwError, this.disableFormat = n && !0 === n.disableFormat
    };

    function o(e, t) {
        return t + ": " + e.toString() + "\n"
    }
    s.prototype.addError = function(e) {
        var t;
        if ("string" == typeof e) t = new r(e, this.instance, this.schema, this.propertyPath);
        else {
            if (!e) throw new Error("Missing error detail");
            if (!e.message) throw new Error("Missing error message");
            if (!e.name) throw new Error("Missing validator type");
            t = new r(e.message, this.instance, this.schema, this.propertyPath, e.name, e.argument)
        }
        if (this.throwError) throw t;
        return this.errors.push(t), t
    }, s.prototype.importErrors = function(e) {
        "string" == typeof e || e && e.validatorType ? this.addError(e) : e && e.errors && Array.prototype.push.apply(this.errors, e.errors)
    }, s.prototype.toString = function(e) {
        return this.errors.map(o).join("")
    }, Object.defineProperty(s.prototype, "valid", {
        get: function() {
            return !this.errors.length
        }
    });
    var a = t.SchemaError = function e(t, n) {
        this.message = t, this.schema = n, Error.call(this, t), Error.captureStackTrace(this, e)
    };
    a.prototype = Object.create(Error.prototype, {
        constructor: {
            value: a,
            enumerable: !1
        },
        name: {
            value: "SchemaError",
            enumerable: !1
        }
    });
    var c = t.SchemaContext = function(e, t, n, i, r) {
        this.schema = e, this.options = t, this.propertyPath = n, this.base = i, this.schemas = r
    };
    c.prototype.resolve = function(e) {
        return i.resolve(this.base, e)
    }, c.prototype.makeChild = function(e, t) {
        var n = void 0 === t ? this.propertyPath : this.propertyPath + u(t),
            r = i.resolve(this.base, e.id || ""),
            s = new c(e, this.options, n, r, Object.create(this.schemas));
        return e.id && !s.schemas[r] && (s.schemas[r] = e), s
    };
    var l = t.FORMAT_REGEXPS = {
        "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
        date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
        time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
        email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
        "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
        uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
        color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
        hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
        "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
        alpha: /^[a-zA-Z]+$/,
        alphanumeric: /^[a-zA-Z0-9]+$/,
        "utc-millisec": function(e) {
            return "string" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e)
        },
        regex: function(e) {
            var t = !0;
            try {
                new RegExp(e)
            } catch (e) {
                t = !1
            }
            return t
        },
        style: /\s*(.+?):\s*([^;]+);?/,
        phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
    };
    l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], t.isFormat = function(e, t, n) {
        if ("string" == typeof e && void 0 !== l[t]) {
            if (l[t] instanceof RegExp) return l[t].test(e);
            if ("function" == typeof l[t]) return l[t](e)
        } else if (n && n.customFormats && "function" == typeof n.customFormats[t]) return n.customFormats[t](e);
        return !0
    };
    var u = t.makeSuffix = function(e) {
        return (e = e.toString()).match(/[.\s\[\]]/) || e.match(/^[\d]/) ? e.match(/^\d+$/) ? "[" + e + "]" : "[" + JSON.stringify(e) + "]" : "." + e
    };

    function d(e, t, n, i) {
        "object" == typeof n ? t[i] = p(e[i], n) : -1 === e.indexOf(n) && t.push(n)
    }

    function h(e, t, n) {
        t[n] = e[n]
    }

    function f(e, t, n, i) {
        "object" == typeof t[i] && t[i] && e[i] ? n[i] = p(e[i], t[i]) : n[i] = t[i]
    }

    function p(e, t) {
        var n = Array.isArray(t),
            i = n && [] || {};
        return n ? (e = e || [], i = i.concat(e), t.forEach(d.bind(null, e, i))) : (e && "object" == typeof e && Object.keys(e).forEach(h.bind(null, e, i)), Object.keys(t).forEach(f.bind(null, e, t, i))), i
    }

    function g(e) {
        return "/" + encodeURIComponent(e).replace(/~/g, "%7E")
    }
    t.deepCompareStrict = function e(t, n) {
        if (typeof t != typeof n) return !1;
        if (Array.isArray(t)) return !!Array.isArray(n) && (t.length === n.length && t.every((function(i, r) {
            return e(t[r], n[r])
        })));
        if ("object" == typeof t) {
            if (!t || !n) return t === n;
            var i = Object.keys(t),
                r = Object.keys(n);
            return i.length === r.length && i.every((function(i) {
                return e(t[i], n[i])
            }))
        }
        return t === n
    }, e.exports.deepMerge = p, t.objectGetPath = function(e, t) {
        for (var n, i = t.split("/").slice(1);
            "string" == typeof(n = i.shift());) {
            var r = decodeURIComponent(n.replace(/~0/, "~").replace(/~1/g, "/"));
            if (!(r in e)) return;
            e = e[r]
        }
        return e
    }, t.encodePath = function(e) {
        return e.map(g).join("")
    }, t.getDecimalPlaces = function(e) {
        var t = 0;
        if (isNaN(e)) return t;
        "number" != typeof e && (e = Number(e));
        var n = e.toString().split("e");
        if (2 === n.length) {
            if ("-" !== n[1][0]) return t;
            t = Number(n[1].slice(1))
        }
        var i = n[0].split(".");
        return 2 === i.length && (t += i[1].length), t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.updateHighlight = t.setHighlightSelectionControls = t.setHighlightControls = t.setOpacityFromSlider = t.setZoomControls = t.initDisplayControls = void 0;
    const i = n(10);
    let r, s;

    function o(e) {
        const t = document.getElementById("opacityOutput");
        t.value = document.getElementById("opacitySlider").value;
        try {
            document.querySelectorAll("." + e).forEach(e => {
                e.style.opacity = (Number(t.value) / 100).toString()
            })
        } catch (e) {
            console.warn("Unable to properly set opacity to pages")
        }
    }

    function a() {
        const e = document.getElementById("highlight-dropdown"),
            t = document.getElementById("highlight-staff"),
            n = document.getElementById("highlight-syllable"),
            r = document.getElementById("highlight-neume"),
            s = document.getElementById("highlight-layerElement"),
            o = document.getElementById("highlight-none"),
            a = document.getElementById("highlight-type");
        document.getElementById("highlight-button").addEventListener("click", l => {
            l.stopPropagation(), e.classList.toggle("is-active"), e.classList.contains("is-active") ? (document.body.addEventListener("click", c), t.addEventListener("click", () => {
                e.classList.remove("is-active"), document.querySelectorAll(".highlight-selected").forEach(e => {
                    e.classList.remove("highlight-selected")
                }), t.classList.add("highlight-selected"), a.textContent = " - Staff", i.setGroupingHighlight("staff")
            }), n.addEventListener("click", () => {
                e.classList.remove("is-active"), document.querySelectorAll(".highlight-selected").forEach(e => {
                    e.classList.remove("highlight-selected")
                }), n.classList.add("highlight-selected"), a.textContent = " - Syllable", i.setGroupingHighlight("syllable")
            }), r.addEventListener("click", () => {
                e.classList.remove("is-active"), document.querySelectorAll(".highlight-selected").forEach(e => {
                    e.classList.remove("highlight-selected")
                }), r.classList.add("highlight-selected"), a.textContent = " - Neume", i.setGroupingHighlight("neume")
            }), s.addEventListener("click", () => {
                e.classList.remove("is-active"), document.querySelectorAll(".highlight-selected").forEach(e => {
                    e.classList.remove("highlight-selected")
                }), s.classList.add("highlight-selected"), a.textContent = " - LayerElement", i.setGroupingHighlight("accid")
            }), o.addEventListener("click", () => {
                e.classList.remove("is-active"), document.querySelectorAll(".highlight-selected").forEach(e => {
                    e.classList.remove("highlight-selected")
                }), a.textContent = " - Off", i.unsetGroupingHighlight()
            })) : document.body.removeEventListener("click", c)
        })
    }

    function c() {
        document.body.removeEventListener("click", c), document.getElementById("highlight-dropdown").classList.remove("is-active")
    }
    t.initDisplayControls = function(e, t) {
        ! function(e) {
            r = 100;
            const t = document.getElementById("opacitySlider"),
                n = document.getElementById("opacityOutput");

            function i() {
                n.value = t.value, r = Number(t.value), o(e)
            }
            t.value = "100", document.getElementById("reset-opacity").addEventListener("click", () => {
                const i = r < 95 ? r / 100 : 0,
                    s = "100" === t.value ? i : 1;
                document.querySelectorAll("." + e).forEach(e => {
                    e.style.opacity = s.toString()
                }), r = Number(t.value), t.value = String(100 * s), n.value = String(Math.round(100 * s))
            }), t.addEventListener("input", i), t.addEventListener("change", i)
        }(e),
        function(e) {
            s = 100;
            const t = document.getElementById("bgOpacitySlider"),
                n = document.getElementById("bgOpacityOutput");

            function i() {
                n.value = t.value, s = Number(t.value), document.getElementsByClassName(e)[0].style.opacity = (Number(n.value) / 100).toString()
            }
            t.value = "100", document.getElementById("reset-bg-opacity").addEventListener("click", () => {
                const i = s < 95 ? s / 100 : 0,
                    r = "100" === t.value ? i : 1;
                document.getElementsByClassName(e)[0].style.opacity = r.toString(), s = Number(t.value), t.value = String(100 * r), n.value = String(Math.round(100 * r))
            }), t.addEventListener("input", i), t.addEventListener("change", i)
        }(t), a(), document.getElementById("burgerMenu").addEventListener("click", () => {
            document.getElementById("burgerMenu").classList.toggle("is-active"), document.getElementById("navMenu").classList.toggle("is-active")
        });
        const n = document.getElementById("displayContents"),
            i = document.getElementById("toggleDisplay");
        i.parentElement.addEventListener("click", () => {
            "none" === n.style.display ? (n.style.display = "", i.setAttribute("xlink:href", "/Neon/Neon-gh/assets/img/icons.svg#dropdown-down")) : (n.style.display = "none", i.setAttribute("xlink:href", "/Neon/Neon-gh/assets/img/icons.svg#dropdown-side"))
        })
    }, t.setZoomControls = function(e) {
        if (void 0 === e) return;
        const t = document.getElementById("zoomSlider"),
            n = document.getElementById("zoomOutput");

        function i() {
            n.value = t.value, e.zoomTo(Number(n.value) / 100)
        }
        t.value = "100", document.getElementById("reset-zoom").addEventListener("click", () => {
            n.value = "100", t.value = "100", e.resetZoomAndPan()
        }), t.addEventListener("input", i), t.addEventListener("change", i), document.body.addEventListener("keydown", i => {
            const r = parseInt(n.value);
            if ("+" === i.key) {
                const i = Math.min(r + 20, parseInt(t.getAttribute("max")));
                e.zoomTo(i / 100), n.value = String(i), t.value = String(i)
            } else if ("-" === i.key) {
                const i = Math.max(r - 20, parseInt(t.getAttribute("min")));
                e.zoomTo(i / 100), n.value = String(Math.round(i)), t.value = String(i)
            } else "0" === i.key && (n.value = "100", t.value = "100", e.resetZoomAndPan())
        })
    }, t.setOpacityFromSlider = o, t.setHighlightControls = a, t.setHighlightSelectionControls = function() {
        const e = document.getElementById("highlight-selection");
        e.addEventListener("click", () => {
            document.getElementById("highlight-dropdown").classList.remove("is-active"), document.querySelectorAll(".highlight-selected").forEach(e => {
                e.classList.remove("highlight-selected")
            }), e.classList.add("highlight-selected"), document.getElementById("highlight-type").textContent = " - Selection", i.setGroupingHighlight("selection")
        })
    }, t.updateHighlight = function() {
        let e;
        try {
            e = document.querySelector(".highlight-selected").id
        } catch (t) {
            e = ""
        }
        switch (e) {
            case "highlight-staff":
                i.setGroupingHighlight("staff");
                break;
            case "highlight-syllable":
                i.setGroupingHighlight("syllable");
                break;
            case "highlight-neume":
                i.setGroupingHighlight("neume");
                break;
            case "highlight-layerElement":
                i.setGroupingHighlight("accid");
                break;
            case "highlight-selection":
                i.setGroupingHighlight("selection");
                break;
            default:
                i.unsetGroupingHighlight()
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.queueNotification = void 0;
    const i = n(15),
        r = new Array(0);
    let s = null,
        o = !1;

    function a() {
        if (r.length > 0) {
            o = !0;
            const e = r.pop();
            ! function(e) {
                if (e.isModeMessage) {
                    if (null !== s) return window.clearTimeout(s.timeoutID), r.push(e), void c(s.getId());
                    s = e
                }
                const t = document.getElementById("notification-content");
                t.innerHTML += "<div class='neon-notification' id='" + e.getId() + "'>" + e.message + "</div> ", t.style.display = "", e.display()
            }(e), e.setTimeoutId(window.setTimeout(c, 5e3, e.getId())), document.getElementById(e.getId()).addEventListener("click", () => {
                window.clearTimeout(e.timeoutID), c(e.getId())
            })
        }
    }

    function c(e) {
        document.getElementById(e).remove(), null !== s && s.getId() === e && (s = null), r.length > 0 ? a() : 0 === document.querySelectorAll(".neon-notification").length && (document.getElementById("notification-content").style.display = "none", o = !1)
    }
    t.queueNotification = function(e) {
        const t = new l(e);
        r.push(t), (!o || document.getElementById("notification-content").querySelectorAll(".neon-notification").length < 3) && a()
    };
    class l {
        constructor(e) {
            this.message = e, this.displayed = !1, this.id = i.uuidv4(), this.isModeMessage = -1 !== e.search("Mode"), this.timeoutID = -1
        }
        setTimeoutId(e) {
            this.timeoutID = Math.max(e, -1)
        }
        display() {
            this.displayed = !0
        }
        getId() {
            return this.id
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setGroupingHighlight = t.setStaffHighlight = t.highlight = t.unsetGroupingHighlight = t.unsetStaffHighlight = t.unhighlight = void 0;
    const i = ["rgb(230, 159, 0)", "rgb(86, 180, 233)", "rgb(0, 158, 115)", "rgb(240, 228, 66)", "rgb(0, 114, 178)", "rgb(213, 94, 0)", "rgb(204, 121, 167)"];

    function r(e) {
        let t;
        t = e ? e.querySelectorAll(":not(.selected) .highlighted") : document.querySelectorAll(":not(.selected) .highlighted"), t.forEach(e => {
            if ("path" !== e.tagName || e.closest(".staff").classList.contains("selected")) {
                e.removeAttribute("fill");
                let t = e.querySelectorAll(".sylTextRect-display");
                if (!t.length) try {
                    t = e.closest(".syllable").querySelectorAll(".sylTextRect-display")
                } catch (e) {
                    t = []
                }
                t.forEach((function(e) {
                    e.closest(".syllable").classList.contains("selected") || e.closest(".staff").classList.contains("selected") || e.closest(".syl").classList.contains("selected") ? e.style.fill = "red" : e.style.fill = "blue", e.classList.remove("highlighted")
                }))
            } else e.setAttribute("stroke", "#000000");
            e.classList.remove("highlighted")
        })
    }

    function s() {
        r()
    }

    function o() {
        s();
        Array.from(document.getElementsByClassName("highlighted")).filter(e => !e.parentElement.classList.contains("selected")).forEach(e => {
            e.setAttribute("fill", null);
            let t = e.querySelectorAll(".sylTextRect-display");
            t.length || null !== e.closest(".syllable") && (t = e.closest(".syllable").querySelectorAll("sylTextRect-display")), t.forEach((function(e) {
                e.closest(".syllable").classList.contains("selected") || e.closest(".syl").classList.contains("selected") ? e.style.fill = "red" : e.style.fill = "blue", e.classList.remove("highlighted")
            })), e.classList.remove("highlighted"), e.querySelectorAll("sylTextRect-display").forEach(e => {
                e.classList.remove("highlighted")
            })
        }), Array.from(document.getElementsByClassName("selected")).forEach(e => {
            e.setAttribute("fill", "")
        })
    }

    function a(e, t) {
        const n = Array.from(e.children);
        for (let e = 0; e < n.length; e++) {
            const i = n[e];
            if ("path" === i.tagName) i.setAttribute("stroke", t);
            else {
                if (i.classList.contains("resizePoint") || "resizeRect" === i.id || i.classList.contains("rotatePoint")) return;
                if (i.classList.contains("layer")) Array.from(i.children).forEach(e => {
                    n.push(e)
                });
                else if (document.getElementsByClassName("highlight-selected").length && "highlight-neume" === document.getElementsByClassName("highlight-selected")[0].id && i.classList.contains("syllable")) Array.from(i.children).filter(e => e.classList.contains("neume")).forEach(e => {
                    n.push(e)
                });
                else {
                    i.setAttribute("fill", t);
                    let e = i.querySelectorAll(".sylTextRect-display");
                    if (!e.length) try {
                        e = i.closest(".syllable").querySelectorAll(".sylTextRect-display")
                    } catch (t) {
                        e = []
                    }
                    e.forEach((function(e) {
                        e.closest(".syllable").classList.contains("selected") || e.closest(".syl").classList.contains("selected") || e.closest(".staff").classList.contains("selected") || (e.style.fill = t, e.classList.add("highlighted"))
                    }))
                }
            }
            i.classList.add("highlighted")
        }
        let i;
        i = "30px", e.querySelectorAll(".nc, .custos, .clef").forEach(e => {
            e.setAttribute("stroke", "black"), e.setAttribute("stroke-width", i)
        })
    }

    function c() {
        const e = Array.from(document.getElementsByClassName("staff"));
        for (let t = 0; t < e.length; t++) {
            const n = i[t % i.length];
            a(e[t], n)
        }
    }
    t.unhighlight = r, t.unsetStaffHighlight = s, t.unsetGroupingHighlight = o, t.highlight = a, t.setStaffHighlight = c, t.setGroupingHighlight = function e(t) {
        if (o(), "staff" === t) return void c();
        if ("selection" === t) {
            switch (document.querySelector(".sel-by.is-active").id) {
                case "selBySyl":
                case "selByBBox":
                    t = "syllable";
                    break;
                case "selByStaff":
                    t = "staff";
                    break;
                case "selByLayerElement":
                    t = "accid";
                    break;
                case "selByNeume":
                default:
                    t = "neume"
            }
            return void e(t)
        }
        const n = document.getElementsByClassName(t);
        for (let e = 0; e < n.length; e++) {
            const t = i[e % i.length];
            if (null !== n[e].closest(".selected") || n[e].classList.contains("selected")) n[e].classList.contains("selected") ? n[e].setAttribute("fill", "#d00") : n[e].setAttribute("fill", null), n[e].classList.remove("highlighted");
            else {
                n[e].setAttribute("fill", t);
                n[e].querySelectorAll(".sylTextRect-display").forEach((function(e) {
                    e.closest(".syl").classList.contains("selected") || e.closest(".syllable").classList.contains("selected") || e.closest(".staff").classList.contains("selected") || (e.style.fill = t)
                })), n[e].classList.add("highlighted"), n[e].querySelectorAll(".sylTextRect-display").forEach(e => {
                    e.classList.add("highlighted")
                })
            }
        }
        document.querySelectorAll(".nc, .custos, .clef").forEach(e => {
            e.setAttribute("stroke", "black"), e.setAttribute("stroke-width", "30px")
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deleteButtonHandler = t.endOptionsSelection = t.triggerDefaultActions = t.triggerDefaultSylActions = t.triggerSplitActions = t.triggerStaffActions = t.triggerCustosActions = t.triggerClefActions = t.triggerSylActions = t.triggerNeumeActions = t.triggerNcActions = t.triggerLayerElementActions = t.changeStaffHandler = t.removeHandler = t.unsetLiquescentAnticlockwiseAction = t.unsetLiquescentClockwiseAction = t.unsetVirgaReversedAction = t.unsetVirgaAction = t.unsetInclinatumAction = t.initNeonView = void 0;
    const i = n(18),
        r = n(36),
        s = n(9),
        o = n(71),
        a = n(4);
    let c;

    function l(e) {
        return {
            action: "set",
            param: {
                elementId: e,
                attrType: "tilt",
                attrValue: ""
            }
        }
    }

    function u(e) {
        return {
            action: "set",
            param: {
                elementId: e,
                attrType: "tilt",
                attrValue: ""
            }
        }
    }

    function d(e) {
        return {
            action: "set",
            param: {
                elementId: e,
                attrType: "tilt",
                attrValue: ""
            }
        }
    }

    function h(e) {
        return {
            action: "set",
            param: {
                elementId: e,
                attrType: "curve",
                attrValue: ""
            }
        }
    }

    function f(e) {
        return {
            action: "set",
            param: {
                elementId: e,
                attrType: "curve",
                attrValue: ""
            }
        }
    }

    function p() {
        const e = [];
        Array.from(document.getElementsByClassName("selected")).forEach(t => {
            t.classList.contains("syl") && (t = t.closest(".syllable")), t.classList.contains("accid") && (t = t.closest(".accid")), e.push({
                action: "remove",
                param: {
                    elementId: t.id
                }
            })
        });
        const t = {
            action: "chain",
            param: e
        };
        v(), c.edit(t, c.view.getCurrentPageURI()).then(() => {
            c.updateForCurrentPage()
        })
    }

    function g() {
        const e = [];
        Array.from(document.getElementsByClassName("selected")).forEach(t => {
            e.push({
                action: "changeStaff",
                param: {
                    elementId: t.id
                }
            })
        });
        const t = {
            action: "chain",
            param: e
        };
        v(), c.edit(t, c.view.getCurrentPageURI()).then(() => {
            c.updateForCurrentPage()
        })
    }

    function v() {
        try {
            const e = document.getElementById("moreEdit");
            e.innerHTML = "", e.classList.add("is-invisible")
        } catch (e) {}
        document.body.removeEventListener("keydown", y)
    }

    function m() {
        document.getElementById("drop_select").addEventListener("click", (function() {
            this.classList.toggle("is-active")
        }))
    }

    function y(e) {
        "d" !== e.key && "Backspace" !== e.key || (p(), e.preventDefault())
    }
    t.initNeonView = function(e) {
        c = e, r.initNeonView(e)
    }, t.unsetInclinatumAction = l, t.unsetVirgaAction = u, t.unsetVirgaReversedAction = d, t.unsetLiquescentClockwiseAction = h, t.unsetLiquescentAnticlockwiseAction = f, t.removeHandler = p, t.changeStaffHandler = g, t.triggerLayerElementActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.defaultActionContents
        } catch (e) {}
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y), m()
    }, t.triggerNcActions = function(e) {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.defaultActionContents
        } catch (e) {}
        try {
            const e = document.getElementById("extraEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.ncActionContents
        } catch (e) {}
        document.querySelector("#Punctum.dropdown-item").addEventListener("click", () => {
            const t = l(e.id),
                n = u(e.id),
                i = d(e.id),
                r = h(e.id),
                o = f(e.id);
            c.edit({
                action: "chain",
                param: [t, n, i, r, o]
            }, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        }), document.querySelector("#Inclinatum.dropdown-item").addEventListener("click", () => {
            const t = u(e.id),
                n = d(e.id),
                i = h(e.id),
                r = f(e.id),
                o = {
                    action: "set",
                    param: {
                        elementId: e.id,
                        attrType: "tilt",
                        attrValue: "se"
                    }
                };
            c.edit({
                action: "chain",
                param: [t, n, i, r, o]
            }, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        }), document.querySelector("#Virga.dropdown-item").addEventListener("click", () => {
            const t = d(e.id),
                n = l(e.id),
                i = h(e.id),
                r = f(e.id),
                o = {
                    action: "set",
                    param: {
                        elementId: e.id,
                        attrType: "tilt",
                        attrValue: "s"
                    }
                };
            c.edit({
                action: "chain",
                param: [t, n, i, r, o]
            }, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        }), document.querySelector("#VirgaReversed.dropdown-item").addEventListener("click", () => {
            const t = l(e.id),
                n = u(e.id),
                i = h(e.id),
                r = f(e.id),
                o = {
                    action: "set",
                    param: {
                        elementId: e.id,
                        attrType: "tilt",
                        attrValue: "n"
                    }
                };
            c.edit({
                action: "chain",
                param: [t, n, i, r, o]
            }, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        }), document.querySelector("#LiquescentClockwise.dropdown-item").addEventListener("click", () => {
            const t = l(e.id),
                n = u(e.id),
                i = d(e.id),
                r = f(e.id),
                o = {
                    action: "set",
                    param: {
                        elementId: e.id,
                        attrType: "curve",
                        attrValue: "c"
                    }
                };
            c.edit({
                action: "chain",
                param: [t, n, i, r, o]
            }, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        }), document.querySelector("#LiquescentAnticlockwise.dropdown-item").addEventListener("click", () => {
            const t = l(e.id),
                n = u(e.id),
                i = d(e.id),
                r = h(e.id),
                o = {
                    action: "set",
                    param: {
                        elementId: e.id,
                        attrType: "curve",
                        attrValue: "a"
                    }
                };
            c.edit({
                action: "chain",
                param: [t, n, i, r, o]
            }, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        });
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y), m()
    }, t.triggerNeumeActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.defaultActionContents
        } catch (e) {}
        try {
            const e = document.getElementById("extraEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.neumeActionContents
        } catch (e) {}
        const e = document.querySelectorAll(".selected");
        if (1 === e.length) {
            document.querySelector(".grouping").addEventListener("click", t => {
                ! function(t) {
                    const n = {
                        action: "changeGroup",
                        param: {
                            elementId: e[0].id,
                            contour: t
                        }
                    };
                    c.edit(n, c.view.getCurrentPageURI()).then(e => {
                        e ? s.queueNotification("Grouping Changed") : s.queueNotification("Grouping Failed"), v(), c.updateForCurrentPage()
                    })
                }(c.info.getContourByValue(t.target.id))
            });
            try {
                const e = document.getElementById("delete");
                e.removeEventListener("click", p), e.addEventListener("click", p)
            } catch (e) {}
            document.body.addEventListener("keydown", y), m(), r.initGroupingListeners()
        } else console.warn("More than one neume selected! Cannot trigger Neume ClickSelect actions.")
    }, t.triggerSylActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = "<div><p class='control'><button class='button' id='mergeSyls'>Merge Syllables</button></p></div><div><p class='control'><button class='button' id='ungroupNeumes'>Ungroup</button></p></div><div><p class='control'><button class='button' id='delete'>Delete</button></p></div><div><p class='control'><button class='button' id='changeStaff'>Re-associate to nearest staff</button></p></div>", document.getElementById("changeStaff").addEventListener("click", g)
        } catch (e) {
            console.debug(e)
        }
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y), r.initGroupingListeners()
    }, t.triggerClefActions = function(e) {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.custosActionContents
        } catch (e) {}
        try {
            const e = document.getElementById("extraEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.clefActionContents
        } catch (e) {}
        document.querySelector("#CClef.dropdown-item").addEventListener("click", () => {
            const t = {
                action: "setClef",
                param: {
                    elementId: e.id,
                    shape: "C"
                }
            };
            c.edit(t, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        }), document.querySelector("#FClef.dropdown-item").addEventListener("click", () => {
            const t = {
                action: "setClef",
                param: {
                    elementId: e.id,
                    shape: "F"
                }
            };
            c.edit(t, c.view.getCurrentPageURI()).then(e => {
                e ? s.queueNotification("Shape Changed") : s.queueNotification("Shape Change Failed"), v(), c.updateForCurrentPage()
            })
        });
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p), document.getElementById("changeStaff").addEventListener("click", g)
        } catch (e) {
            console.debug(e)
        }
        document.body.addEventListener("keydown", y), m()
    }, t.triggerCustosActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML += i.custosActionContents
        } catch (e) {}
        try {
            document.getElementById("changeStaff").addEventListener("click", g)
        } catch (e) {
            console.debug(e)
        }
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p), document.body.addEventListener("keydown", y)
        } catch (e) {}
    }, t.triggerStaffActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.staffActionContents
        } catch (e) {}
        document.getElementById("merge-systems").addEventListener("click", () => {
            const e = document.querySelectorAll(".staff.selected"),
                t = [];
            e.forEach(e => {
                t.push(e.id)
            });
            const n = {
                action: "merge",
                param: {
                    elementIds: t
                }
            };
            c.edit(n, c.view.getCurrentPageURI()).then(e => {
                e ? (s.queueNotification("Staff Merged"), v(), c.updateForCurrentPage()) : s.queueNotification("Merge Failed")
            })
        });
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y)
    }, t.triggerSplitActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.splitActionContents
        } catch (e) {}
        document.getElementById("split-system").addEventListener("click", () => {
            const e = document.querySelector(".staff.selected");
            if (null !== e) {
                new o.SplitHandler(c, e).startSplit(), v()
            } else console.error("No staff was selected!"), v()
        }), document.getElementById("reset-rotate").addEventListener("click", () => {
            const e = document.querySelector(".staff.selected"),
                t = e.querySelector("#resizeRect").getAttribute("points").split(" ");
            parseInt(t[0].split(",")[1]), parseInt(t[1].split(",")[1]);
            let n = a.getStaffBBox(e),
                i = Math.tan(n.rotate) * (n.lrx - n.ulx);
            if (null !== e) {
                const t = {
                    action: "resizeRotate",
                    param: {
                        elementId: e.id,
                        ulx: n.ulx,
                        uly: n.rotate > 0 ? n.uly + i / 2 : n.uly - i / 2,
                        lrx: n.lrx,
                        lry: n.rotate > 0 ? n.lry - i / 2 : n.lry + i / 2,
                        rotate: 0
                    }
                };
                c.edit(t, c.view.getCurrentPageURI()).then(async e => {
                    e && await c.updateForCurrentPage()
                }), v()
            } else console.error("No staff was selected"), v()
        });
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y)
    }, t.triggerDefaultSylActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.defaultSylActionContents
        } catch (e) {}
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y);
        try {
            const e = document.getElementById("changeStaff");
            e.removeEventListener("click", g), e.addEventListener("click", g)
        } catch (e) {
            console.debug(e)
        }
    }, t.triggerDefaultActions = function() {
        v();
        try {
            const e = document.getElementById("moreEdit");
            e.classList.remove("is-invisible"), e.innerHTML = i.defaultActionContents
        } catch (e) {}
        try {
            const e = document.getElementById("delete");
            e.removeEventListener("click", p), e.addEventListener("click", p)
        } catch (e) {}
        document.body.addEventListener("keydown", y)
    }, t.endOptionsSelection = v, t.deleteButtonHandler = y
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(3);
    t.default = class {
        constructor(e, t) {
            this.neonView = e, this.selector = t
        }
        dragInit() {
            const e = i.drag().on("start", function() {
                    this.dragStartCoords = [i.event.x, i.event.y], this.dx = 0, this.dy = 0;
                    i.event.sourceEvent.target.classList.contains("staff") && i.select(this.selector).call(e)
                }.bind(this)).on("drag", this.dragging.bind(this)).on("end", this.dragEnded.bind(this)),
                t = i.selectAll(".selected"),
                n = Array.from(document.getElementsByClassName("selected"));
            this.selection = n.concat(Array.from(document.getElementsByClassName("resizePoint"))), this.dragStartCoords = new Array(t.size()), t.call(e)
        }
        dragging() {
            const e = i.event.y - this.dragStartCoords[1],
                t = i.event.x - this.dragStartCoords[0];
            this.dx = i.event.x - this.dragStartCoords[0], this.dy = i.event.y - this.dragStartCoords[1], this.selection.forEach(n => {
                i.select(n).attr("transform", (function() {
                    return "translate(" + [t, e] + ")"
                }))
            }), 0 === this.selection.filter(e => e.classList.contains("syl")).length && i.selectAll(".syllable.selected").selectAll(".sylTextRect-display").attr("transform", (function() {
                return "translate(" + [-1 * t, -1 * e] + ")"
            }))
        }
        dragEnded() {
            const e = [];
            this.selection.filter(e => !e.classList.contains("resizePoint")).forEach(t => {
                const n = {
                    action: "drag",
                    param: {
                        elementId: "rect" === t.tagName ? t.closest(".syl").id : t.id,
                        x: this.dx,
                        y: -1 * this.dy
                    }
                };
                e.push(n)
            });
            const t = {
                    action: "chain",
                    param: e
                },
                n = Math.abs(this.dx),
                i = Math.abs(this.dy);
            n > 5 || i > 5 ? this.neonView.edit(t, this.neonView.view.getCurrentPageURI()).then(() => {
                this.neonView.updateForCurrentPage(), this.endOptionsSelection(), this.reset(), this.dragInit()
            }) : (this.reset(), this.dragInit())
        }
        resetTo(e) {
            this.resetToAction = e
        }
        reset() {
            void 0 !== this.resetToAction && i.select(this.selector).call(this.resetToAction)
        }
        endOptionsSelection() {
            try {
                document.getElementById("moreEdit").innerHTML = "", document.getElementById("moreEdit").classList.add("is-invisible")
            } catch (e) {}
        }
    }
}, function(e, t, n) {
    (function(e, i) {
        var r;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */
        (function() {
            var s = "Expected a function",
                o = "__lodash_placeholder__",
                a = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ],
                c = "[object Arguments]",
                l = "[object Array]",
                u = "[object Boolean]",
                d = "[object Date]",
                h = "[object Error]",
                f = "[object Function]",
                p = "[object GeneratorFunction]",
                g = "[object Map]",
                v = "[object Number]",
                m = "[object Object]",
                y = "[object RegExp]",
                b = "[object Set]",
                w = "[object String]",
                _ = "[object Symbol]",
                E = "[object WeakMap]",
                S = "[object ArrayBuffer]",
                x = "[object DataView]",
                L = "[object Float32Array]",
                k = "[object Float64Array]",
                C = "[object Int8Array]",
                I = "[object Int16Array]",
                A = "[object Int32Array]",
                P = "[object Uint8Array]",
                O = "[object Uint16Array]",
                B = "[object Uint32Array]",
                T = /\b__p \+= '';/g,
                j = /\b(__p \+=) '' \+/g,
                M = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                N = /&(?:amp|lt|gt|quot|#39);/g,
                D = /[&<>"']/g,
                R = RegExp(N.source),
                q = RegExp(D.source),
                V = /<%-([\s\S]+?)%>/g,
                z = /<%([\s\S]+?)%>/g,
                F = /<%=([\s\S]+?)%>/g,
                H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                U = /^\w*$/,
                G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                $ = /[\\^$.*+?()[\]{}|]/g,
                Z = RegExp($.source),
                W = /^\s+|\s+$/g,
                K = /^\s+/,
                Y = /\s+$/,
                J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                X = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Q = /,? & /,
                ee = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                te = /\\(\\)?/g,
                ne = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                ie = /\w*$/,
                re = /^[-+]0x[0-9a-f]+$/i,
                se = /^0b[01]+$/i,
                oe = /^\[object .+?Constructor\]$/,
                ae = /^0o[0-7]+$/i,
                ce = /^(?:0|[1-9]\d*)$/,
                le = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                ue = /($^)/,
                de = /['\n\r\u2028\u2029\\]/g,
                he = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                fe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                pe = "[\\ud800-\\udfff]",
                ge = "[" + fe + "]",
                ve = "[" + he + "]",
                me = "\\d+",
                ye = "[\\u2700-\\u27bf]",
                be = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                we = "[^\\ud800-\\udfff" + fe + me + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                _e = "\\ud83c[\\udffb-\\udfff]",
                Ee = "[^\\ud800-\\udfff]",
                Se = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                xe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                Le = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                ke = "(?:" + be + "|" + we + ")",
                Ce = "(?:" + Le + "|" + we + ")",
                Ie = "(?:" + ve + "|" + _e + ")" + "?",
                Ae = "[\\ufe0e\\ufe0f]?" + Ie + ("(?:\\u200d(?:" + [Ee, Se, xe].join("|") + ")[\\ufe0e\\ufe0f]?" + Ie + ")*"),
                Pe = "(?:" + [ye, Se, xe].join("|") + ")" + Ae,
                Oe = "(?:" + [Ee + ve + "?", ve, Se, xe, pe].join("|") + ")",
                Be = RegExp("['???]", "g"),
                Te = RegExp(ve, "g"),
                je = RegExp(_e + "(?=" + _e + ")|" + Oe + Ae, "g"),
                Me = RegExp([Le + "?" + be + "+(?:['???](?:d|ll|m|re|s|t|ve))?(?=" + [ge, Le, "$"].join("|") + ")", Ce + "+(?:['???](?:D|LL|M|RE|S|T|VE))?(?=" + [ge, Le + ke, "$"].join("|") + ")", Le + "?" + ke + "+(?:['???](?:d|ll|m|re|s|t|ve))?", Le + "+(?:['???](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", me, Pe].join("|"), "g"),
                Ne = RegExp("[\\u200d\\ud800-\\udfff" + he + "\\ufe0e\\ufe0f]"),
                De = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Re = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                qe = -1,
                Ve = {};
            Ve[L] = Ve[k] = Ve[C] = Ve[I] = Ve[A] = Ve[P] = Ve["[object Uint8ClampedArray]"] = Ve[O] = Ve[B] = !0, Ve[c] = Ve[l] = Ve[S] = Ve[u] = Ve[x] = Ve[d] = Ve[h] = Ve[f] = Ve[g] = Ve[v] = Ve[m] = Ve[y] = Ve[b] = Ve[w] = Ve[E] = !1;
            var ze = {};
            ze[c] = ze[l] = ze[S] = ze[x] = ze[u] = ze[d] = ze[L] = ze[k] = ze[C] = ze[I] = ze[A] = ze[g] = ze[v] = ze[m] = ze[y] = ze[b] = ze[w] = ze[_] = ze[P] = ze["[object Uint8ClampedArray]"] = ze[O] = ze[B] = !0, ze[h] = ze[f] = ze[E] = !1;
            var Fe = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                He = parseFloat,
                Ue = parseInt,
                Ge = "object" == typeof e && e && e.Object === Object && e,
                $e = "object" == typeof self && self && self.Object === Object && self,
                Ze = Ge || $e || Function("return this")(),
                We = t && !t.nodeType && t,
                Ke = We && "object" == typeof i && i && !i.nodeType && i,
                Ye = Ke && Ke.exports === We,
                Je = Ye && Ge.process,
                Xe = function() {
                    try {
                        var e = Ke && Ke.require && Ke.require("util").types;
                        return e || Je && Je.binding && Je.binding("util")
                    } catch (e) {}
                }(),
                Qe = Xe && Xe.isArrayBuffer,
                et = Xe && Xe.isDate,
                tt = Xe && Xe.isMap,
                nt = Xe && Xe.isRegExp,
                it = Xe && Xe.isSet,
                rt = Xe && Xe.isTypedArray;

            function st(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function ot(e, t, n, i) {
                for (var r = -1, s = null == e ? 0 : e.length; ++r < s;) {
                    var o = e[r];
                    t(i, o, n(o), e)
                }
                return i
            }

            function at(e, t) {
                for (var n = -1, i = null == e ? 0 : e.length; ++n < i && !1 !== t(e[n], n, e););
                return e
            }

            function ct(e, t) {
                for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                return e
            }

            function lt(e, t) {
                for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                    if (!t(e[n], n, e)) return !1;
                return !0
            }

            function ut(e, t) {
                for (var n = -1, i = null == e ? 0 : e.length, r = 0, s = []; ++n < i;) {
                    var o = e[n];
                    t(o, n, e) && (s[r++] = o)
                }
                return s
            }

            function dt(e, t) {
                return !!(null == e ? 0 : e.length) && _t(e, t, 0) > -1
            }

            function ht(e, t, n) {
                for (var i = -1, r = null == e ? 0 : e.length; ++i < r;)
                    if (n(t, e[i])) return !0;
                return !1
            }

            function ft(e, t) {
                for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i;) r[n] = t(e[n], n, e);
                return r
            }

            function pt(e, t) {
                for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
                return e
            }

            function gt(e, t, n, i) {
                var r = -1,
                    s = null == e ? 0 : e.length;
                for (i && s && (n = e[++r]); ++r < s;) n = t(n, e[r], r, e);
                return n
            }

            function vt(e, t, n, i) {
                var r = null == e ? 0 : e.length;
                for (i && r && (n = e[--r]); r--;) n = t(n, e[r], r, e);
                return n
            }

            function mt(e, t) {
                for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }
            var yt = Lt("length");

            function bt(e, t, n) {
                var i;
                return n(e, (function(e, n, r) {
                    if (t(e, n, r)) return i = n, !1
                })), i
            }

            function wt(e, t, n, i) {
                for (var r = e.length, s = n + (i ? 1 : -1); i ? s-- : ++s < r;)
                    if (t(e[s], s, e)) return s;
                return -1
            }

            function _t(e, t, n) {
                return t == t ? function(e, t, n) {
                    var i = n - 1,
                        r = e.length;
                    for (; ++i < r;)
                        if (e[i] === t) return i;
                    return -1
                }(e, t, n) : wt(e, St, n)
            }

            function Et(e, t, n, i) {
                for (var r = n - 1, s = e.length; ++r < s;)
                    if (i(e[r], t)) return r;
                return -1
            }

            function St(e) {
                return e != e
            }

            function xt(e, t) {
                var n = null == e ? 0 : e.length;
                return n ? It(e, t) / n : NaN
            }

            function Lt(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function kt(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }

            function Ct(e, t, n, i, r) {
                return r(e, (function(e, r, s) {
                    n = i ? (i = !1, e) : t(n, e, r, s)
                })), n
            }

            function It(e, t) {
                for (var n, i = -1, r = e.length; ++i < r;) {
                    var s = t(e[i]);
                    void 0 !== s && (n = void 0 === n ? s : n + s)
                }
                return n
            }

            function At(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }

            function Pt(e) {
                return function(t) {
                    return e(t)
                }
            }

            function Ot(e, t) {
                return ft(t, (function(t) {
                    return e[t]
                }))
            }

            function Bt(e, t) {
                return e.has(t)
            }

            function Tt(e, t) {
                for (var n = -1, i = e.length; ++n < i && _t(t, e[n], 0) > -1;);
                return n
            }

            function jt(e, t) {
                for (var n = e.length; n-- && _t(t, e[n], 0) > -1;);
                return n
            }

            function Mt(e, t) {
                for (var n = e.length, i = 0; n--;) e[n] === t && ++i;
                return i
            }
            var Nt = kt({
                    "??": "A",
                    "??": "A",
                    "??": "A",
                    "??": "A",
                    "??": "A",
                    "??": "A",
                    "??": "a",
                    "??": "a",
                    "??": "a",
                    "??": "a",
                    "??": "a",
                    "??": "a",
                    "??": "C",
                    "??": "c",
                    "??": "D",
                    "??": "d",
                    "??": "E",
                    "??": "E",
                    "??": "E",
                    "??": "E",
                    "??": "e",
                    "??": "e",
                    "??": "e",
                    "??": "e",
                    "??": "I",
                    "??": "I",
                    "??": "I",
                    "??": "I",
                    "??": "i",
                    "??": "i",
                    "??": "i",
                    "??": "i",
                    "??": "N",
                    "??": "n",
                    "??": "O",
                    "??": "O",
                    "??": "O",
                    "??": "O",
                    "??": "O",
                    "??": "O",
                    "??": "o",
                    "??": "o",
                    "??": "o",
                    "??": "o",
                    "??": "o",
                    "??": "o",
                    "??": "U",
                    "??": "U",
                    "??": "U",
                    "??": "U",
                    "??": "u",
                    "??": "u",
                    "??": "u",
                    "??": "u",
                    "??": "Y",
                    "??": "y",
                    "??": "y",
                    "??": "Ae",
                    "??": "ae",
                    "??": "Th",
                    "??": "th",
                    "??": "ss",
                    "??": "A",
                    "??": "A",
                    "??": "A",
                    "??": "a",
                    "??": "a",
                    "??": "a",
                    "??": "C",
                    "??": "C",
                    "??": "C",
                    "??": "C",
                    "??": "c",
                    "??": "c",
                    "??": "c",
                    "??": "c",
                    "??": "D",
                    "??": "D",
                    "??": "d",
                    "??": "d",
                    "??": "E",
                    "??": "E",
                    "??": "E",
                    "??": "E",
                    "??": "E",
                    "??": "e",
                    "??": "e",
                    "??": "e",
                    "??": "e",
                    "??": "e",
                    "??": "G",
                    "??": "G",
                    "??": "G",
                    "??": "G",
                    "??": "g",
                    "??": "g",
                    "??": "g",
                    "??": "g",
                    "??": "H",
                    "??": "H",
                    "??": "h",
                    "??": "h",
                    "??": "I",
                    "??": "I",
                    "??": "I",
                    "??": "I",
                    "??": "I",
                    "??": "i",
                    "??": "i",
                    "??": "i",
                    "??": "i",
                    "??": "i",
                    "??": "J",
                    "??": "j",
                    "??": "K",
                    "??": "k",
                    "??": "k",
                    "??": "L",
                    "??": "L",
                    "??": "L",
                    "??": "L",
                    "??": "L",
                    "??": "l",
                    "??": "l",
                    "??": "l",
                    "??": "l",
                    "??": "l",
                    "??": "N",
                    "??": "N",
                    "??": "N",
                    "??": "N",
                    "??": "n",
                    "??": "n",
                    "??": "n",
                    "??": "n",
                    "??": "O",
                    "??": "O",
                    "??": "O",
                    "??": "o",
                    "??": "o",
                    "??": "o",
                    "??": "R",
                    "??": "R",
                    "??": "R",
                    "??": "r",
                    "??": "r",
                    "??": "r",
                    "??": "S",
                    "??": "S",
                    "??": "S",
                    "??": "S",
                    "??": "s",
                    "??": "s",
                    "??": "s",
                    "??": "s",
                    "??": "T",
                    "??": "T",
                    "??": "T",
                    "??": "t",
                    "??": "t",
                    "??": "t",
                    "??": "U",
                    "??": "U",
                    "??": "U",
                    "??": "U",
                    "??": "U",
                    "??": "U",
                    "??": "u",
                    "??": "u",
                    "??": "u",
                    "??": "u",
                    "??": "u",
                    "??": "u",
                    "??": "W",
                    "??": "w",
                    "??": "Y",
                    "??": "y",
                    "??": "Y",
                    "??": "Z",
                    "??": "Z",
                    "??": "Z",
                    "??": "z",
                    "??": "z",
                    "??": "z",
                    "??": "IJ",
                    "??": "ij",
                    "??": "Oe",
                    "??": "oe",
                    "??": "'n",
                    "??": "s"
                }),
                Dt = kt({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });

            function Rt(e) {
                return "\\" + Fe[e]
            }

            function qt(e) {
                return Ne.test(e)
            }

            function Vt(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, i) {
                    n[++t] = [i, e]
                })), n
            }

            function zt(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }

            function Ft(e, t) {
                for (var n = -1, i = e.length, r = 0, s = []; ++n < i;) {
                    var a = e[n];
                    a !== t && a !== o || (e[n] = o, s[r++] = n)
                }
                return s
            }

            function Ht(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }

            function Ut(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = [e, e]
                })), n
            }

            function Gt(e) {
                return qt(e) ? function(e) {
                    var t = je.lastIndex = 0;
                    for (; je.test(e);) ++t;
                    return t
                }(e) : yt(e)
            }

            function $t(e) {
                return qt(e) ? function(e) {
                    return e.match(je) || []
                }(e) : function(e) {
                    return e.split("")
                }(e)
            }
            var Zt = kt({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            });
            var Wt = function e(t) {
                var n, i = (t = null == t ? Ze : Wt.defaults(Ze.Object(), t, Wt.pick(Ze, Re))).Array,
                    r = t.Date,
                    he = t.Error,
                    fe = t.Function,
                    pe = t.Math,
                    ge = t.Object,
                    ve = t.RegExp,
                    me = t.String,
                    ye = t.TypeError,
                    be = i.prototype,
                    we = fe.prototype,
                    _e = ge.prototype,
                    Ee = t["__core-js_shared__"],
                    Se = we.toString,
                    xe = _e.hasOwnProperty,
                    Le = 0,
                    ke = (n = /[^.]+$/.exec(Ee && Ee.keys && Ee.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                    Ce = _e.toString,
                    Ie = Se.call(ge),
                    Ae = Ze._,
                    Pe = ve("^" + Se.call(xe).replace($, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Oe = Ye ? t.Buffer : void 0,
                    je = t.Symbol,
                    Ne = t.Uint8Array,
                    Fe = Oe ? Oe.allocUnsafe : void 0,
                    Ge = zt(ge.getPrototypeOf, ge),
                    $e = ge.create,
                    We = _e.propertyIsEnumerable,
                    Ke = be.splice,
                    Je = je ? je.isConcatSpreadable : void 0,
                    Xe = je ? je.iterator : void 0,
                    yt = je ? je.toStringTag : void 0,
                    kt = function() {
                        try {
                            var e = Qr(ge, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {}
                    }(),
                    Kt = t.clearTimeout !== Ze.clearTimeout && t.clearTimeout,
                    Yt = r && r.now !== Ze.Date.now && r.now,
                    Jt = t.setTimeout !== Ze.setTimeout && t.setTimeout,
                    Xt = pe.ceil,
                    Qt = pe.floor,
                    en = ge.getOwnPropertySymbols,
                    tn = Oe ? Oe.isBuffer : void 0,
                    nn = t.isFinite,
                    rn = be.join,
                    sn = zt(ge.keys, ge),
                    on = pe.max,
                    an = pe.min,
                    cn = r.now,
                    ln = t.parseInt,
                    un = pe.random,
                    dn = be.reverse,
                    hn = Qr(t, "DataView"),
                    fn = Qr(t, "Map"),
                    pn = Qr(t, "Promise"),
                    gn = Qr(t, "Set"),
                    vn = Qr(t, "WeakMap"),
                    mn = Qr(ge, "create"),
                    yn = vn && new vn,
                    bn = {},
                    wn = ks(hn),
                    _n = ks(fn),
                    En = ks(pn),
                    Sn = ks(gn),
                    xn = ks(vn),
                    Ln = je ? je.prototype : void 0,
                    kn = Ln ? Ln.valueOf : void 0,
                    Cn = Ln ? Ln.toString : void 0;

                function In(e) {
                    if (Uo(e) && !To(e) && !(e instanceof Bn)) {
                        if (e instanceof On) return e;
                        if (xe.call(e, "__wrapped__")) return Cs(e)
                    }
                    return new On(e)
                }
                var An = function() {
                    function e() {}
                    return function(t) {
                        if (!Ho(t)) return {};
                        if ($e) return $e(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();

                function Pn() {}

                function On(e, t) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
                }

                function Bn(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                }

                function Tn(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var i = e[t];
                        this.set(i[0], i[1])
                    }
                }

                function jn(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var i = e[t];
                        this.set(i[0], i[1])
                    }
                }

                function Mn(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var i = e[t];
                        this.set(i[0], i[1])
                    }
                }

                function Nn(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.__data__ = new Mn; ++t < n;) this.add(e[t])
                }

                function Dn(e) {
                    var t = this.__data__ = new jn(e);
                    this.size = t.size
                }

                function Rn(e, t) {
                    var n = To(e),
                        i = !n && Bo(e),
                        r = !n && !i && Do(e),
                        s = !n && !i && !r && Xo(e),
                        o = n || i || r || s,
                        a = o ? At(e.length, me) : [],
                        c = a.length;
                    for (var l in e) !t && !xe.call(e, l) || o && ("length" == l || r && ("offset" == l || "parent" == l) || s && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || os(l, c)) || a.push(l);
                    return a
                }

                function qn(e) {
                    var t = e.length;
                    return t ? e[Ni(0, t - 1)] : void 0
                }

                function Vn(e, t) {
                    return Ss(mr(e), Kn(t, 0, e.length))
                }

                function zn(e) {
                    return Ss(mr(e))
                }

                function Fn(e, t, n) {
                    (void 0 !== n && !Ao(e[t], n) || void 0 === n && !(t in e)) && Zn(e, t, n)
                }

                function Hn(e, t, n) {
                    var i = e[t];
                    xe.call(e, t) && Ao(i, n) && (void 0 !== n || t in e) || Zn(e, t, n)
                }

                function Un(e, t) {
                    for (var n = e.length; n--;)
                        if (Ao(e[n][0], t)) return n;
                    return -1
                }

                function Gn(e, t, n, i) {
                    return ei(e, (function(e, r, s) {
                        t(i, e, n(e), s)
                    })), i
                }

                function $n(e, t) {
                    return e && yr(t, wa(t), e)
                }

                function Zn(e, t, n) {
                    "__proto__" == t && kt ? kt(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : e[t] = n
                }

                function Wn(e, t) {
                    for (var n = -1, r = t.length, s = i(r), o = null == e; ++n < r;) s[n] = o ? void 0 : ga(e, t[n]);
                    return s
                }

                function Kn(e, t, n) {
                    return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
                }

                function Yn(e, t, n, i, r, s) {
                    var o, a = 1 & t,
                        l = 2 & t,
                        h = 4 & t;
                    if (n && (o = r ? n(e, i, r, s) : n(e)), void 0 !== o) return o;
                    if (!Ho(e)) return e;
                    var E = To(e);
                    if (E) {
                        if (o = function(e) {
                                var t = e.length,
                                    n = new e.constructor(t);
                                t && "string" == typeof e[0] && xe.call(e, "index") && (n.index = e.index, n.input = e.input);
                                return n
                            }(e), !a) return mr(e, o)
                    } else {
                        var T = ns(e),
                            j = T == f || T == p;
                        if (Do(e)) return dr(e, a);
                        if (T == m || T == c || j && !r) {
                            if (o = l || j ? {} : rs(e), !a) return l ? function(e, t) {
                                return yr(e, ts(e), t)
                            }(e, function(e, t) {
                                return e && yr(t, _a(t), e)
                            }(o, e)) : function(e, t) {
                                return yr(e, es(e), t)
                            }(e, $n(o, e))
                        } else {
                            if (!ze[T]) return r ? e : {};
                            o = function(e, t, n) {
                                var i = e.constructor;
                                switch (t) {
                                    case S:
                                        return hr(e);
                                    case u:
                                    case d:
                                        return new i(+e);
                                    case x:
                                        return function(e, t) {
                                            var n = t ? hr(e.buffer) : e.buffer;
                                            return new e.constructor(n, e.byteOffset, e.byteLength)
                                        }(e, n);
                                    case L:
                                    case k:
                                    case C:
                                    case I:
                                    case A:
                                    case P:
                                    case "[object Uint8ClampedArray]":
                                    case O:
                                    case B:
                                        return fr(e, n);
                                    case g:
                                        return new i;
                                    case v:
                                    case w:
                                        return new i(e);
                                    case y:
                                        return function(e) {
                                            var t = new e.constructor(e.source, ie.exec(e));
                                            return t.lastIndex = e.lastIndex, t
                                        }(e);
                                    case b:
                                        return new i;
                                    case _:
                                        return r = e, kn ? ge(kn.call(r)) : {}
                                }
                                var r
                            }(e, T, a)
                        }
                    }
                    s || (s = new Dn);
                    var M = s.get(e);
                    if (M) return M;
                    s.set(e, o), Ko(e) ? e.forEach((function(i) {
                        o.add(Yn(i, t, n, i, e, s))
                    })) : Go(e) && e.forEach((function(i, r) {
                        o.set(r, Yn(i, t, n, r, e, s))
                    }));
                    var N = E ? void 0 : (h ? l ? $r : Gr : l ? _a : wa)(e);
                    return at(N || e, (function(i, r) {
                        N && (i = e[r = i]), Hn(o, r, Yn(i, t, n, r, e, s))
                    })), o
                }

                function Jn(e, t, n) {
                    var i = n.length;
                    if (null == e) return !i;
                    for (e = ge(e); i--;) {
                        var r = n[i],
                            s = t[r],
                            o = e[r];
                        if (void 0 === o && !(r in e) || !s(o)) return !1
                    }
                    return !0
                }

                function Xn(e, t, n) {
                    if ("function" != typeof e) throw new ye(s);
                    return bs((function() {
                        e.apply(void 0, n)
                    }), t)
                }

                function Qn(e, t, n, i) {
                    var r = -1,
                        s = dt,
                        o = !0,
                        a = e.length,
                        c = [],
                        l = t.length;
                    if (!a) return c;
                    n && (t = ft(t, Pt(n))), i ? (s = ht, o = !1) : t.length >= 200 && (s = Bt, o = !1, t = new Nn(t));
                    e: for (; ++r < a;) {
                        var u = e[r],
                            d = null == n ? u : n(u);
                        if (u = i || 0 !== u ? u : 0, o && d == d) {
                            for (var h = l; h--;)
                                if (t[h] === d) continue e;
                            c.push(u)
                        } else s(t, d, i) || c.push(u)
                    }
                    return c
                }
                In.templateSettings = {
                    escape: V,
                    evaluate: z,
                    interpolate: F,
                    variable: "",
                    imports: {
                        _: In
                    }
                }, In.prototype = Pn.prototype, In.prototype.constructor = In, On.prototype = An(Pn.prototype), On.prototype.constructor = On, Bn.prototype = An(Pn.prototype), Bn.prototype.constructor = Bn, Tn.prototype.clear = function() {
                    this.__data__ = mn ? mn(null) : {}, this.size = 0
                }, Tn.prototype.delete = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }, Tn.prototype.get = function(e) {
                    var t = this.__data__;
                    if (mn) {
                        var n = t[e];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return xe.call(t, e) ? t[e] : void 0
                }, Tn.prototype.has = function(e) {
                    var t = this.__data__;
                    return mn ? void 0 !== t[e] : xe.call(t, e)
                }, Tn.prototype.set = function(e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = mn && void 0 === t ? "__lodash_hash_undefined__" : t, this
                }, jn.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, jn.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = Un(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : Ke.call(t, n, 1), --this.size, !0)
                }, jn.prototype.get = function(e) {
                    var t = this.__data__,
                        n = Un(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }, jn.prototype.has = function(e) {
                    return Un(this.__data__, e) > -1
                }, jn.prototype.set = function(e, t) {
                    var n = this.__data__,
                        i = Un(n, e);
                    return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
                }, Mn.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Tn,
                        map: new(fn || jn),
                        string: new Tn
                    }
                }, Mn.prototype.delete = function(e) {
                    var t = Jr(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }, Mn.prototype.get = function(e) {
                    return Jr(this, e).get(e)
                }, Mn.prototype.has = function(e) {
                    return Jr(this, e).has(e)
                }, Mn.prototype.set = function(e, t) {
                    var n = Jr(this, e),
                        i = n.size;
                    return n.set(e, t), this.size += n.size == i ? 0 : 1, this
                }, Nn.prototype.add = Nn.prototype.push = function(e) {
                    return this.__data__.set(e, "__lodash_hash_undefined__"), this
                }, Nn.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, Dn.prototype.clear = function() {
                    this.__data__ = new jn, this.size = 0
                }, Dn.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = t.delete(e);
                    return this.size = t.size, n
                }, Dn.prototype.get = function(e) {
                    return this.__data__.get(e)
                }, Dn.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, Dn.prototype.set = function(e, t) {
                    var n = this.__data__;
                    if (n instanceof jn) {
                        var i = n.__data__;
                        if (!fn || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
                        n = this.__data__ = new Mn(i)
                    }
                    return n.set(e, t), this.size = n.size, this
                };
                var ei = _r(ci),
                    ti = _r(li, !0);

                function ni(e, t) {
                    var n = !0;
                    return ei(e, (function(e, i, r) {
                        return n = !!t(e, i, r)
                    })), n
                }

                function ii(e, t, n) {
                    for (var i = -1, r = e.length; ++i < r;) {
                        var s = e[i],
                            o = t(s);
                        if (null != o && (void 0 === a ? o == o && !Jo(o) : n(o, a))) var a = o,
                            c = s
                    }
                    return c
                }

                function ri(e, t) {
                    var n = [];
                    return ei(e, (function(e, i, r) {
                        t(e, i, r) && n.push(e)
                    })), n
                }

                function si(e, t, n, i, r) {
                    var s = -1,
                        o = e.length;
                    for (n || (n = ss), r || (r = []); ++s < o;) {
                        var a = e[s];
                        t > 0 && n(a) ? t > 1 ? si(a, t - 1, n, i, r) : pt(r, a) : i || (r[r.length] = a)
                    }
                    return r
                }
                var oi = Er(),
                    ai = Er(!0);

                function ci(e, t) {
                    return e && oi(e, t, wa)
                }

                function li(e, t) {
                    return e && ai(e, t, wa)
                }

                function ui(e, t) {
                    return ut(t, (function(t) {
                        return Vo(e[t])
                    }))
                }

                function di(e, t) {
                    for (var n = 0, i = (t = ar(t, e)).length; null != e && n < i;) e = e[Ls(t[n++])];
                    return n && n == i ? e : void 0
                }

                function hi(e, t, n) {
                    var i = t(e);
                    return To(e) ? i : pt(i, n(e))
                }

                function fi(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : yt && yt in ge(e) ? function(e) {
                        var t = xe.call(e, yt),
                            n = e[yt];
                        try {
                            e[yt] = void 0;
                            var i = !0
                        } catch (e) {}
                        var r = Ce.call(e);
                        i && (t ? e[yt] = n : delete e[yt]);
                        return r
                    }(e) : function(e) {
                        return Ce.call(e)
                    }(e)
                }

                function pi(e, t) {
                    return e > t
                }

                function gi(e, t) {
                    return null != e && xe.call(e, t)
                }

                function vi(e, t) {
                    return null != e && t in ge(e)
                }

                function mi(e, t, n) {
                    for (var r = n ? ht : dt, s = e[0].length, o = e.length, a = o, c = i(o), l = 1 / 0, u = []; a--;) {
                        var d = e[a];
                        a && t && (d = ft(d, Pt(t))), l = an(d.length, l), c[a] = !n && (t || s >= 120 && d.length >= 120) ? new Nn(a && d) : void 0
                    }
                    d = e[0];
                    var h = -1,
                        f = c[0];
                    e: for (; ++h < s && u.length < l;) {
                        var p = d[h],
                            g = t ? t(p) : p;
                        if (p = n || 0 !== p ? p : 0, !(f ? Bt(f, g) : r(u, g, n))) {
                            for (a = o; --a;) {
                                var v = c[a];
                                if (!(v ? Bt(v, g) : r(e[a], g, n))) continue e
                            }
                            f && f.push(g), u.push(p)
                        }
                    }
                    return u
                }

                function yi(e, t, n) {
                    var i = null == (e = gs(e, t = ar(t, e))) ? e : e[Ls(Rs(t))];
                    return null == i ? void 0 : st(i, e, n)
                }

                function bi(e) {
                    return Uo(e) && fi(e) == c
                }

                function wi(e, t, n, i, r) {
                    return e === t || (null == e || null == t || !Uo(e) && !Uo(t) ? e != e && t != t : function(e, t, n, i, r, s) {
                        var o = To(e),
                            a = To(t),
                            f = o ? l : ns(e),
                            p = a ? l : ns(t),
                            E = (f = f == c ? m : f) == m,
                            L = (p = p == c ? m : p) == m,
                            k = f == p;
                        if (k && Do(e)) {
                            if (!Do(t)) return !1;
                            o = !0, E = !1
                        }
                        if (k && !E) return s || (s = new Dn), o || Xo(e) ? Hr(e, t, n, i, r, s) : function(e, t, n, i, r, s, o) {
                            switch (n) {
                                case x:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case S:
                                    return !(e.byteLength != t.byteLength || !s(new Ne(e), new Ne(t)));
                                case u:
                                case d:
                                case v:
                                    return Ao(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case y:
                                case w:
                                    return e == t + "";
                                case g:
                                    var a = Vt;
                                case b:
                                    var c = 1 & i;
                                    if (a || (a = Ht), e.size != t.size && !c) return !1;
                                    var l = o.get(e);
                                    if (l) return l == t;
                                    i |= 2, o.set(e, t);
                                    var f = Hr(a(e), a(t), i, r, s, o);
                                    return o.delete(e), f;
                                case _:
                                    if (kn) return kn.call(e) == kn.call(t)
                            }
                            return !1
                        }(e, t, f, n, i, r, s);
                        if (!(1 & n)) {
                            var C = E && xe.call(e, "__wrapped__"),
                                I = L && xe.call(t, "__wrapped__");
                            if (C || I) {
                                var A = C ? e.value() : e,
                                    P = I ? t.value() : t;
                                return s || (s = new Dn), r(A, P, n, i, s)
                            }
                        }
                        if (!k) return !1;
                        return s || (s = new Dn),
                            function(e, t, n, i, r, s) {
                                var o = 1 & n,
                                    a = Gr(e),
                                    c = a.length,
                                    l = Gr(t).length;
                                if (c != l && !o) return !1;
                                var u = c;
                                for (; u--;) {
                                    var d = a[u];
                                    if (!(o ? d in t : xe.call(t, d))) return !1
                                }
                                var h = s.get(e),
                                    f = s.get(t);
                                if (h && f) return h == t && f == e;
                                var p = !0;
                                s.set(e, t), s.set(t, e);
                                var g = o;
                                for (; ++u < c;) {
                                    d = a[u];
                                    var v = e[d],
                                        m = t[d];
                                    if (i) var y = o ? i(m, v, d, t, e, s) : i(v, m, d, e, t, s);
                                    if (!(void 0 === y ? v === m || r(v, m, n, i, s) : y)) {
                                        p = !1;
                                        break
                                    }
                                    g || (g = "constructor" == d)
                                }
                                if (p && !g) {
                                    var b = e.constructor,
                                        w = t.constructor;
                                    b == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w || (p = !1)
                                }
                                return s.delete(e), s.delete(t), p
                            }(e, t, n, i, r, s)
                    }(e, t, n, i, wi, r))
                }

                function _i(e, t, n, i) {
                    var r = n.length,
                        s = r,
                        o = !i;
                    if (null == e) return !s;
                    for (e = ge(e); r--;) {
                        var a = n[r];
                        if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
                    }
                    for (; ++r < s;) {
                        var c = (a = n[r])[0],
                            l = e[c],
                            u = a[1];
                        if (o && a[2]) {
                            if (void 0 === l && !(c in e)) return !1
                        } else {
                            var d = new Dn;
                            if (i) var h = i(l, u, c, e, t, d);
                            if (!(void 0 === h ? wi(u, l, 3, i, d) : h)) return !1
                        }
                    }
                    return !0
                }

                function Ei(e) {
                    return !(!Ho(e) || (t = e, ke && ke in t)) && (Vo(e) ? Pe : oe).test(ks(e));
                    var t
                }

                function Si(e) {
                    return "function" == typeof e ? e : null == e ? $a : "object" == typeof e ? To(e) ? Ai(e[0], e[1]) : Ii(e) : tc(e)
                }

                function xi(e) {
                    if (!ds(e)) return sn(e);
                    var t = [];
                    for (var n in ge(e)) xe.call(e, n) && "constructor" != n && t.push(n);
                    return t
                }

                function Li(e) {
                    if (!Ho(e)) return function(e) {
                        var t = [];
                        if (null != e)
                            for (var n in ge(e)) t.push(n);
                        return t
                    }(e);
                    var t = ds(e),
                        n = [];
                    for (var i in e)("constructor" != i || !t && xe.call(e, i)) && n.push(i);
                    return n
                }

                function ki(e, t) {
                    return e < t
                }

                function Ci(e, t) {
                    var n = -1,
                        r = Mo(e) ? i(e.length) : [];
                    return ei(e, (function(e, i, s) {
                        r[++n] = t(e, i, s)
                    })), r
                }

                function Ii(e) {
                    var t = Xr(e);
                    return 1 == t.length && t[0][2] ? fs(t[0][0], t[0][1]) : function(n) {
                        return n === e || _i(n, e, t)
                    }
                }

                function Ai(e, t) {
                    return cs(e) && hs(t) ? fs(Ls(e), t) : function(n) {
                        var i = ga(n, e);
                        return void 0 === i && i === t ? va(n, e) : wi(t, i, 3)
                    }
                }

                function Pi(e, t, n, i, r) {
                    e !== t && oi(t, (function(s, o) {
                        if (r || (r = new Dn), Ho(s)) ! function(e, t, n, i, r, s, o) {
                            var a = ms(e, n),
                                c = ms(t, n),
                                l = o.get(c);
                            if (l) return void Fn(e, n, l);
                            var u = s ? s(a, c, n + "", e, t, o) : void 0,
                                d = void 0 === u;
                            if (d) {
                                var h = To(c),
                                    f = !h && Do(c),
                                    p = !h && !f && Xo(c);
                                u = c, h || f || p ? To(a) ? u = a : No(a) ? u = mr(a) : f ? (d = !1, u = dr(c, !0)) : p ? (d = !1, u = fr(c, !0)) : u = [] : Zo(c) || Bo(c) ? (u = a, Bo(a) ? u = oa(a) : Ho(a) && !Vo(a) || (u = rs(c))) : d = !1
                            }
                            d && (o.set(c, u), r(u, c, i, s, o), o.delete(c));
                            Fn(e, n, u)
                        }(e, t, o, n, Pi, i, r);
                        else {
                            var a = i ? i(ms(e, o), s, o + "", e, t, r) : void 0;
                            void 0 === a && (a = s), Fn(e, o, a)
                        }
                    }), _a)
                }

                function Oi(e, t) {
                    var n = e.length;
                    if (n) return os(t += t < 0 ? n : 0, n) ? e[t] : void 0
                }

                function Bi(e, t, n) {
                    t = t.length ? ft(t, (function(e) {
                        return To(e) ? function(t) {
                            return di(t, 1 === e.length ? e[0] : e)
                        } : e
                    })) : [$a];
                    var i = -1;
                    return t = ft(t, Pt(Yr())),
                        function(e, t) {
                            var n = e.length;
                            for (e.sort(t); n--;) e[n] = e[n].value;
                            return e
                        }(Ci(e, (function(e, n, r) {
                            return {
                                criteria: ft(t, (function(t) {
                                    return t(e)
                                })),
                                index: ++i,
                                value: e
                            }
                        })), (function(e, t) {
                            return function(e, t, n) {
                                var i = -1,
                                    r = e.criteria,
                                    s = t.criteria,
                                    o = r.length,
                                    a = n.length;
                                for (; ++i < o;) {
                                    var c = pr(r[i], s[i]);
                                    if (c) {
                                        if (i >= a) return c;
                                        var l = n[i];
                                        return c * ("desc" == l ? -1 : 1)
                                    }
                                }
                                return e.index - t.index
                            }(e, t, n)
                        }))
                }

                function Ti(e, t, n) {
                    for (var i = -1, r = t.length, s = {}; ++i < r;) {
                        var o = t[i],
                            a = di(e, o);
                        n(a, o) && zi(s, ar(o, e), a)
                    }
                    return s
                }

                function ji(e, t, n, i) {
                    var r = i ? Et : _t,
                        s = -1,
                        o = t.length,
                        a = e;
                    for (e === t && (t = mr(t)), n && (a = ft(e, Pt(n))); ++s < o;)
                        for (var c = 0, l = t[s], u = n ? n(l) : l;
                            (c = r(a, u, c, i)) > -1;) a !== e && Ke.call(a, c, 1), Ke.call(e, c, 1);
                    return e
                }

                function Mi(e, t) {
                    for (var n = e ? t.length : 0, i = n - 1; n--;) {
                        var r = t[n];
                        if (n == i || r !== s) {
                            var s = r;
                            os(r) ? Ke.call(e, r, 1) : Qi(e, r)
                        }
                    }
                    return e
                }

                function Ni(e, t) {
                    return e + Qt(un() * (t - e + 1))
                }

                function Di(e, t) {
                    var n = "";
                    if (!e || t < 1 || t > 9007199254740991) return n;
                    do {
                        t % 2 && (n += e), (t = Qt(t / 2)) && (e += e)
                    } while (t);
                    return n
                }

                function Ri(e, t) {
                    return ws(ps(e, t, $a), e + "")
                }

                function qi(e) {
                    return qn(Aa(e))
                }

                function Vi(e, t) {
                    var n = Aa(e);
                    return Ss(n, Kn(t, 0, n.length))
                }

                function zi(e, t, n, i) {
                    if (!Ho(e)) return e;
                    for (var r = -1, s = (t = ar(t, e)).length, o = s - 1, a = e; null != a && ++r < s;) {
                        var c = Ls(t[r]),
                            l = n;
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;
                        if (r != o) {
                            var u = a[c];
                            void 0 === (l = i ? i(u, c, a) : void 0) && (l = Ho(u) ? u : os(t[r + 1]) ? [] : {})
                        }
                        Hn(a, c, l), a = a[c]
                    }
                    return e
                }
                var Fi = yn ? function(e, t) {
                        return yn.set(e, t), e
                    } : $a,
                    Hi = kt ? function(e, t) {
                        return kt(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Ha(t),
                            writable: !0
                        })
                    } : $a;

                function Ui(e) {
                    return Ss(Aa(e))
                }

                function Gi(e, t, n) {
                    var r = -1,
                        s = e.length;
                    t < 0 && (t = -t > s ? 0 : s + t), (n = n > s ? s : n) < 0 && (n += s), s = t > n ? 0 : n - t >>> 0, t >>>= 0;
                    for (var o = i(s); ++r < s;) o[r] = e[r + t];
                    return o
                }

                function $i(e, t) {
                    var n;
                    return ei(e, (function(e, i, r) {
                        return !(n = t(e, i, r))
                    })), !!n
                }

                function Zi(e, t, n) {
                    var i = 0,
                        r = null == e ? i : e.length;
                    if ("number" == typeof t && t == t && r <= 2147483647) {
                        for (; i < r;) {
                            var s = i + r >>> 1,
                                o = e[s];
                            null !== o && !Jo(o) && (n ? o <= t : o < t) ? i = s + 1 : r = s
                        }
                        return r
                    }
                    return Wi(e, t, $a, n)
                }

                function Wi(e, t, n, i) {
                    var r = 0,
                        s = null == e ? 0 : e.length;
                    if (0 === s) return 0;
                    for (var o = (t = n(t)) != t, a = null === t, c = Jo(t), l = void 0 === t; r < s;) {
                        var u = Qt((r + s) / 2),
                            d = n(e[u]),
                            h = void 0 !== d,
                            f = null === d,
                            p = d == d,
                            g = Jo(d);
                        if (o) var v = i || p;
                        else v = l ? p && (i || h) : a ? p && h && (i || !f) : c ? p && h && !f && (i || !g) : !f && !g && (i ? d <= t : d < t);
                        v ? r = u + 1 : s = u
                    }
                    return an(s, 4294967294)
                }

                function Ki(e, t) {
                    for (var n = -1, i = e.length, r = 0, s = []; ++n < i;) {
                        var o = e[n],
                            a = t ? t(o) : o;
                        if (!n || !Ao(a, c)) {
                            var c = a;
                            s[r++] = 0 === o ? 0 : o
                        }
                    }
                    return s
                }

                function Yi(e) {
                    return "number" == typeof e ? e : Jo(e) ? NaN : +e
                }

                function Ji(e) {
                    if ("string" == typeof e) return e;
                    if (To(e)) return ft(e, Ji) + "";
                    if (Jo(e)) return Cn ? Cn.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function Xi(e, t, n) {
                    var i = -1,
                        r = dt,
                        s = e.length,
                        o = !0,
                        a = [],
                        c = a;
                    if (n) o = !1, r = ht;
                    else if (s >= 200) {
                        var l = t ? null : Dr(e);
                        if (l) return Ht(l);
                        o = !1, r = Bt, c = new Nn
                    } else c = t ? [] : a;
                    e: for (; ++i < s;) {
                        var u = e[i],
                            d = t ? t(u) : u;
                        if (u = n || 0 !== u ? u : 0, o && d == d) {
                            for (var h = c.length; h--;)
                                if (c[h] === d) continue e;
                            t && c.push(d), a.push(u)
                        } else r(c, d, n) || (c !== a && c.push(d), a.push(u))
                    }
                    return a
                }

                function Qi(e, t) {
                    return null == (e = gs(e, t = ar(t, e))) || delete e[Ls(Rs(t))]
                }

                function er(e, t, n, i) {
                    return zi(e, t, n(di(e, t)), i)
                }

                function tr(e, t, n, i) {
                    for (var r = e.length, s = i ? r : -1;
                        (i ? s-- : ++s < r) && t(e[s], s, e););
                    return n ? Gi(e, i ? 0 : s, i ? s + 1 : r) : Gi(e, i ? s + 1 : 0, i ? r : s)
                }

                function nr(e, t) {
                    var n = e;
                    return n instanceof Bn && (n = n.value()), gt(t, (function(e, t) {
                        return t.func.apply(t.thisArg, pt([e], t.args))
                    }), n)
                }

                function ir(e, t, n) {
                    var r = e.length;
                    if (r < 2) return r ? Xi(e[0]) : [];
                    for (var s = -1, o = i(r); ++s < r;)
                        for (var a = e[s], c = -1; ++c < r;) c != s && (o[s] = Qn(o[s] || a, e[c], t, n));
                    return Xi(si(o, 1), t, n)
                }

                function rr(e, t, n) {
                    for (var i = -1, r = e.length, s = t.length, o = {}; ++i < r;) {
                        var a = i < s ? t[i] : void 0;
                        n(o, e[i], a)
                    }
                    return o
                }

                function sr(e) {
                    return No(e) ? e : []
                }

                function or(e) {
                    return "function" == typeof e ? e : $a
                }

                function ar(e, t) {
                    return To(e) ? e : cs(e, t) ? [e] : xs(aa(e))
                }
                var cr = Ri;

                function lr(e, t, n) {
                    var i = e.length;
                    return n = void 0 === n ? i : n, !t && n >= i ? e : Gi(e, t, n)
                }
                var ur = Kt || function(e) {
                    return Ze.clearTimeout(e)
                };

                function dr(e, t) {
                    if (t) return e.slice();
                    var n = e.length,
                        i = Fe ? Fe(n) : new e.constructor(n);
                    return e.copy(i), i
                }

                function hr(e) {
                    var t = new e.constructor(e.byteLength);
                    return new Ne(t).set(new Ne(e)), t
                }

                function fr(e, t) {
                    var n = t ? hr(e.buffer) : e.buffer;
                    return new e.constructor(n, e.byteOffset, e.length)
                }

                function pr(e, t) {
                    if (e !== t) {
                        var n = void 0 !== e,
                            i = null === e,
                            r = e == e,
                            s = Jo(e),
                            o = void 0 !== t,
                            a = null === t,
                            c = t == t,
                            l = Jo(t);
                        if (!a && !l && !s && e > t || s && o && c && !a && !l || i && o && c || !n && c || !r) return 1;
                        if (!i && !s && !l && e < t || l && n && r && !i && !s || a && n && r || !o && r || !c) return -1
                    }
                    return 0
                }

                function gr(e, t, n, r) {
                    for (var s = -1, o = e.length, a = n.length, c = -1, l = t.length, u = on(o - a, 0), d = i(l + u), h = !r; ++c < l;) d[c] = t[c];
                    for (; ++s < a;)(h || s < o) && (d[n[s]] = e[s]);
                    for (; u--;) d[c++] = e[s++];
                    return d
                }

                function vr(e, t, n, r) {
                    for (var s = -1, o = e.length, a = -1, c = n.length, l = -1, u = t.length, d = on(o - c, 0), h = i(d + u), f = !r; ++s < d;) h[s] = e[s];
                    for (var p = s; ++l < u;) h[p + l] = t[l];
                    for (; ++a < c;)(f || s < o) && (h[p + n[a]] = e[s++]);
                    return h
                }

                function mr(e, t) {
                    var n = -1,
                        r = e.length;
                    for (t || (t = i(r)); ++n < r;) t[n] = e[n];
                    return t
                }

                function yr(e, t, n, i) {
                    var r = !n;
                    n || (n = {});
                    for (var s = -1, o = t.length; ++s < o;) {
                        var a = t[s],
                            c = i ? i(n[a], e[a], a, n, e) : void 0;
                        void 0 === c && (c = e[a]), r ? Zn(n, a, c) : Hn(n, a, c)
                    }
                    return n
                }

                function br(e, t) {
                    return function(n, i) {
                        var r = To(n) ? ot : Gn,
                            s = t ? t() : {};
                        return r(n, e, Yr(i, 2), s)
                    }
                }

                function wr(e) {
                    return Ri((function(t, n) {
                        var i = -1,
                            r = n.length,
                            s = r > 1 ? n[r - 1] : void 0,
                            o = r > 2 ? n[2] : void 0;
                        for (s = e.length > 3 && "function" == typeof s ? (r--, s) : void 0, o && as(n[0], n[1], o) && (s = r < 3 ? void 0 : s, r = 1), t = ge(t); ++i < r;) {
                            var a = n[i];
                            a && e(t, a, i, s)
                        }
                        return t
                    }))
                }

                function _r(e, t) {
                    return function(n, i) {
                        if (null == n) return n;
                        if (!Mo(n)) return e(n, i);
                        for (var r = n.length, s = t ? r : -1, o = ge(n);
                            (t ? s-- : ++s < r) && !1 !== i(o[s], s, o););
                        return n
                    }
                }

                function Er(e) {
                    return function(t, n, i) {
                        for (var r = -1, s = ge(t), o = i(t), a = o.length; a--;) {
                            var c = o[e ? a : ++r];
                            if (!1 === n(s[c], c, s)) break
                        }
                        return t
                    }
                }

                function Sr(e) {
                    return function(t) {
                        var n = qt(t = aa(t)) ? $t(t) : void 0,
                            i = n ? n[0] : t.charAt(0),
                            r = n ? lr(n, 1).join("") : t.slice(1);
                        return i[e]() + r
                    }
                }

                function xr(e) {
                    return function(t) {
                        return gt(Va(Ba(t).replace(Be, "")), e, "")
                    }
                }

                function Lr(e) {
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var n = An(e.prototype),
                            i = e.apply(n, t);
                        return Ho(i) ? i : n
                    }
                }

                function kr(e) {
                    return function(t, n, i) {
                        var r = ge(t);
                        if (!Mo(t)) {
                            var s = Yr(n, 3);
                            t = wa(t), n = function(e) {
                                return s(r[e], e, r)
                            }
                        }
                        var o = e(t, n, i);
                        return o > -1 ? r[s ? t[o] : o] : void 0
                    }
                }

                function Cr(e) {
                    return Ur((function(t) {
                        var n = t.length,
                            i = n,
                            r = On.prototype.thru;
                        for (e && t.reverse(); i--;) {
                            var o = t[i];
                            if ("function" != typeof o) throw new ye(s);
                            if (r && !a && "wrapper" == Wr(o)) var a = new On([], !0)
                        }
                        for (i = a ? i : n; ++i < n;) {
                            var c = Wr(o = t[i]),
                                l = "wrapper" == c ? Zr(o) : void 0;
                            a = l && ls(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? a[Wr(l[0])].apply(a, l[3]) : 1 == o.length && ls(o) ? a[c]() : a.thru(o)
                        }
                        return function() {
                            var e = arguments,
                                i = e[0];
                            if (a && 1 == e.length && To(i)) return a.plant(i).value();
                            for (var r = 0, s = n ? t[r].apply(this, e) : i; ++r < n;) s = t[r].call(this, s);
                            return s
                        }
                    }))
                }

                function Ir(e, t, n, r, s, o, a, c, l, u) {
                    var d = 128 & t,
                        h = 1 & t,
                        f = 2 & t,
                        p = 24 & t,
                        g = 512 & t,
                        v = f ? void 0 : Lr(e);
                    return function m() {
                        for (var y = arguments.length, b = i(y), w = y; w--;) b[w] = arguments[w];
                        if (p) var _ = Kr(m),
                            E = Mt(b, _);
                        if (r && (b = gr(b, r, s, p)), o && (b = vr(b, o, a, p)), y -= E, p && y < u) {
                            var S = Ft(b, _);
                            return Mr(e, t, Ir, m.placeholder, n, b, S, c, l, u - y)
                        }
                        var x = h ? n : this,
                            L = f ? x[e] : e;
                        return y = b.length, c ? b = vs(b, c) : g && y > 1 && b.reverse(), d && l < y && (b.length = l), this && this !== Ze && this instanceof m && (L = v || Lr(L)), L.apply(x, b)
                    }
                }

                function Ar(e, t) {
                    return function(n, i) {
                        return function(e, t, n, i) {
                            return ci(e, (function(e, r, s) {
                                t(i, n(e), r, s)
                            })), i
                        }(n, e, t(i), {})
                    }
                }

                function Pr(e, t) {
                    return function(n, i) {
                        var r;
                        if (void 0 === n && void 0 === i) return t;
                        if (void 0 !== n && (r = n), void 0 !== i) {
                            if (void 0 === r) return i;
                            "string" == typeof n || "string" == typeof i ? (n = Ji(n), i = Ji(i)) : (n = Yi(n), i = Yi(i)), r = e(n, i)
                        }
                        return r
                    }
                }

                function Or(e) {
                    return Ur((function(t) {
                        return t = ft(t, Pt(Yr())), Ri((function(n) {
                            var i = this;
                            return e(t, (function(e) {
                                return st(e, i, n)
                            }))
                        }))
                    }))
                }

                function Br(e, t) {
                    var n = (t = void 0 === t ? " " : Ji(t)).length;
                    if (n < 2) return n ? Di(t, e) : t;
                    var i = Di(t, Xt(e / Gt(t)));
                    return qt(t) ? lr($t(i), 0, e).join("") : i.slice(0, e)
                }

                function Tr(e) {
                    return function(t, n, r) {
                        return r && "number" != typeof r && as(t, n, r) && (n = r = void 0), t = na(t), void 0 === n ? (n = t, t = 0) : n = na(n),
                            function(e, t, n, r) {
                                for (var s = -1, o = on(Xt((t - e) / (n || 1)), 0), a = i(o); o--;) a[r ? o : ++s] = e, e += n;
                                return a
                            }(t, n, r = void 0 === r ? t < n ? 1 : -1 : na(r), e)
                    }
                }

                function jr(e) {
                    return function(t, n) {
                        return "string" == typeof t && "string" == typeof n || (t = sa(t), n = sa(n)), e(t, n)
                    }
                }

                function Mr(e, t, n, i, r, s, o, a, c, l) {
                    var u = 8 & t;
                    t |= u ? 32 : 64, 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                    var d = [e, t, r, u ? s : void 0, u ? o : void 0, u ? void 0 : s, u ? void 0 : o, a, c, l],
                        h = n.apply(void 0, d);
                    return ls(e) && ys(h, d), h.placeholder = i, _s(h, e, t)
                }

                function Nr(e) {
                    var t = pe[e];
                    return function(e, n) {
                        if (e = sa(e), (n = null == n ? 0 : an(ia(n), 292)) && nn(e)) {
                            var i = (aa(e) + "e").split("e");
                            return +((i = (aa(t(i[0] + "e" + (+i[1] + n))) + "e").split("e"))[0] + "e" + (+i[1] - n))
                        }
                        return t(e)
                    }
                }
                var Dr = gn && 1 / Ht(new gn([, -0]))[1] == 1 / 0 ? function(e) {
                    return new gn(e)
                } : Ja;

                function Rr(e) {
                    return function(t) {
                        var n = ns(t);
                        return n == g ? Vt(t) : n == b ? Ut(t) : function(e, t) {
                            return ft(t, (function(t) {
                                return [t, e[t]]
                            }))
                        }(t, e(t))
                    }
                }

                function qr(e, t, n, r, a, c, l, u) {
                    var d = 2 & t;
                    if (!d && "function" != typeof e) throw new ye(s);
                    var h = r ? r.length : 0;
                    if (h || (t &= -97, r = a = void 0), l = void 0 === l ? l : on(ia(l), 0), u = void 0 === u ? u : ia(u), h -= a ? a.length : 0, 64 & t) {
                        var f = r,
                            p = a;
                        r = a = void 0
                    }
                    var g = d ? void 0 : Zr(e),
                        v = [e, t, n, r, a, f, p, c, l, u];
                    if (g && function(e, t) {
                            var n = e[1],
                                i = t[1],
                                r = n | i,
                                s = r < 131,
                                a = 128 == i && 8 == n || 128 == i && 256 == n && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == n;
                            if (!s && !a) return e;
                            1 & i && (e[2] = t[2], r |= 1 & n ? 0 : 4);
                            var c = t[3];
                            if (c) {
                                var l = e[3];
                                e[3] = l ? gr(l, c, t[4]) : c, e[4] = l ? Ft(e[3], o) : t[4]
                            }(c = t[5]) && (l = e[5], e[5] = l ? vr(l, c, t[6]) : c, e[6] = l ? Ft(e[5], o) : t[6]);
                            (c = t[7]) && (e[7] = c);
                            128 & i && (e[8] = null == e[8] ? t[8] : an(e[8], t[8]));
                            null == e[9] && (e[9] = t[9]);
                            e[0] = t[0], e[1] = r
                        }(v, g), e = v[0], t = v[1], n = v[2], r = v[3], a = v[4], !(u = v[9] = void 0 === v[9] ? d ? 0 : e.length : on(v[9] - h, 0)) && 24 & t && (t &= -25), t && 1 != t) m = 8 == t || 16 == t ? function(e, t, n) {
                        var r = Lr(e);
                        return function s() {
                            for (var o = arguments.length, a = i(o), c = o, l = Kr(s); c--;) a[c] = arguments[c];
                            var u = o < 3 && a[0] !== l && a[o - 1] !== l ? [] : Ft(a, l);
                            if ((o -= u.length) < n) return Mr(e, t, Ir, s.placeholder, void 0, a, u, void 0, void 0, n - o);
                            var d = this && this !== Ze && this instanceof s ? r : e;
                            return st(d, this, a)
                        }
                    }(e, t, u) : 32 != t && 33 != t || a.length ? Ir.apply(void 0, v) : function(e, t, n, r) {
                        var s = 1 & t,
                            o = Lr(e);
                        return function t() {
                            for (var a = -1, c = arguments.length, l = -1, u = r.length, d = i(u + c), h = this && this !== Ze && this instanceof t ? o : e; ++l < u;) d[l] = r[l];
                            for (; c--;) d[l++] = arguments[++a];
                            return st(h, s ? n : this, d)
                        }
                    }(e, t, n, r);
                    else var m = function(e, t, n) {
                        var i = 1 & t,
                            r = Lr(e);
                        return function t() {
                            var s = this && this !== Ze && this instanceof t ? r : e;
                            return s.apply(i ? n : this, arguments)
                        }
                    }(e, t, n);
                    return _s((g ? Fi : ys)(m, v), e, t)
                }

                function Vr(e, t, n, i) {
                    return void 0 === e || Ao(e, _e[n]) && !xe.call(i, n) ? t : e
                }

                function zr(e, t, n, i, r, s) {
                    return Ho(e) && Ho(t) && (s.set(t, e), Pi(e, t, void 0, zr, s), s.delete(t)), e
                }

                function Fr(e) {
                    return Zo(e) ? void 0 : e
                }

                function Hr(e, t, n, i, r, s) {
                    var o = 1 & n,
                        a = e.length,
                        c = t.length;
                    if (a != c && !(o && c > a)) return !1;
                    var l = s.get(e),
                        u = s.get(t);
                    if (l && u) return l == t && u == e;
                    var d = -1,
                        h = !0,
                        f = 2 & n ? new Nn : void 0;
                    for (s.set(e, t), s.set(t, e); ++d < a;) {
                        var p = e[d],
                            g = t[d];
                        if (i) var v = o ? i(g, p, d, t, e, s) : i(p, g, d, e, t, s);
                        if (void 0 !== v) {
                            if (v) continue;
                            h = !1;
                            break
                        }
                        if (f) {
                            if (!mt(t, (function(e, t) {
                                    if (!Bt(f, t) && (p === e || r(p, e, n, i, s))) return f.push(t)
                                }))) {
                                h = !1;
                                break
                            }
                        } else if (p !== g && !r(p, g, n, i, s)) {
                            h = !1;
                            break
                        }
                    }
                    return s.delete(e), s.delete(t), h
                }

                function Ur(e) {
                    return ws(ps(e, void 0, Ts), e + "")
                }

                function Gr(e) {
                    return hi(e, wa, es)
                }

                function $r(e) {
                    return hi(e, _a, ts)
                }
                var Zr = yn ? function(e) {
                    return yn.get(e)
                } : Ja;

                function Wr(e) {
                    for (var t = e.name + "", n = bn[t], i = xe.call(bn, t) ? n.length : 0; i--;) {
                        var r = n[i],
                            s = r.func;
                        if (null == s || s == e) return r.name
                    }
                    return t
                }

                function Kr(e) {
                    return (xe.call(In, "placeholder") ? In : e).placeholder
                }

                function Yr() {
                    var e = In.iteratee || Za;
                    return e = e === Za ? Si : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function Jr(e, t) {
                    var n, i, r = e.__data__;
                    return ("string" == (i = typeof(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
                }

                function Xr(e) {
                    for (var t = wa(e), n = t.length; n--;) {
                        var i = t[n],
                            r = e[i];
                        t[n] = [i, r, hs(r)]
                    }
                    return t
                }

                function Qr(e, t) {
                    var n = function(e, t) {
                        return null == e ? void 0 : e[t]
                    }(e, t);
                    return Ei(n) ? n : void 0
                }
                var es = en ? function(e) {
                        return null == e ? [] : (e = ge(e), ut(en(e), (function(t) {
                            return We.call(e, t)
                        })))
                    } : rc,
                    ts = en ? function(e) {
                        for (var t = []; e;) pt(t, es(e)), e = Ge(e);
                        return t
                    } : rc,
                    ns = fi;

                function is(e, t, n) {
                    for (var i = -1, r = (t = ar(t, e)).length, s = !1; ++i < r;) {
                        var o = Ls(t[i]);
                        if (!(s = null != e && n(e, o))) break;
                        e = e[o]
                    }
                    return s || ++i != r ? s : !!(r = null == e ? 0 : e.length) && Fo(r) && os(o, r) && (To(e) || Bo(e))
                }

                function rs(e) {
                    return "function" != typeof e.constructor || ds(e) ? {} : An(Ge(e))
                }

                function ss(e) {
                    return To(e) || Bo(e) || !!(Je && e && e[Je])
                }

                function os(e, t) {
                    var n = typeof e;
                    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && ce.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function as(e, t, n) {
                    if (!Ho(n)) return !1;
                    var i = typeof t;
                    return !!("number" == i ? Mo(n) && os(t, n.length) : "string" == i && t in n) && Ao(n[t], e)
                }

                function cs(e, t) {
                    if (To(e)) return !1;
                    var n = typeof e;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Jo(e)) || (U.test(e) || !H.test(e) || null != t && e in ge(t))
                }

                function ls(e) {
                    var t = Wr(e),
                        n = In[t];
                    if ("function" != typeof n || !(t in Bn.prototype)) return !1;
                    if (e === n) return !0;
                    var i = Zr(n);
                    return !!i && e === i[0]
                }(hn && ns(new hn(new ArrayBuffer(1))) != x || fn && ns(new fn) != g || pn && "[object Promise]" != ns(pn.resolve()) || gn && ns(new gn) != b || vn && ns(new vn) != E) && (ns = function(e) {
                    var t = fi(e),
                        n = t == m ? e.constructor : void 0,
                        i = n ? ks(n) : "";
                    if (i) switch (i) {
                        case wn:
                            return x;
                        case _n:
                            return g;
                        case En:
                            return "[object Promise]";
                        case Sn:
                            return b;
                        case xn:
                            return E
                    }
                    return t
                });
                var us = Ee ? Vo : sc;

                function ds(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || _e)
                }

                function hs(e) {
                    return e == e && !Ho(e)
                }

                function fs(e, t) {
                    return function(n) {
                        return null != n && (n[e] === t && (void 0 !== t || e in ge(n)))
                    }
                }

                function ps(e, t, n) {
                    return t = on(void 0 === t ? e.length - 1 : t, 0),
                        function() {
                            for (var r = arguments, s = -1, o = on(r.length - t, 0), a = i(o); ++s < o;) a[s] = r[t + s];
                            s = -1;
                            for (var c = i(t + 1); ++s < t;) c[s] = r[s];
                            return c[t] = n(a), st(e, this, c)
                        }
                }

                function gs(e, t) {
                    return t.length < 2 ? e : di(e, Gi(t, 0, -1))
                }

                function vs(e, t) {
                    for (var n = e.length, i = an(t.length, n), r = mr(e); i--;) {
                        var s = t[i];
                        e[i] = os(s, n) ? r[s] : void 0
                    }
                    return e
                }

                function ms(e, t) {
                    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                }
                var ys = Es(Fi),
                    bs = Jt || function(e, t) {
                        return Ze.setTimeout(e, t)
                    },
                    ws = Es(Hi);

                function _s(e, t, n) {
                    var i = t + "";
                    return ws(e, function(e, t) {
                        var n = t.length;
                        if (!n) return e;
                        var i = n - 1;
                        return t[i] = (n > 1 ? "& " : "") + t[i], t = t.join(n > 2 ? ", " : " "), e.replace(J, "{\n/* [wrapped with " + t + "] */\n")
                    }(i, function(e, t) {
                        return at(a, (function(n) {
                            var i = "_." + n[0];
                            t & n[1] && !dt(e, i) && e.push(i)
                        })), e.sort()
                    }(function(e) {
                        var t = e.match(X);
                        return t ? t[1].split(Q) : []
                    }(i), n)))
                }

                function Es(e) {
                    var t = 0,
                        n = 0;
                    return function() {
                        var i = cn(),
                            r = 16 - (i - n);
                        if (n = i, r > 0) {
                            if (++t >= 800) return arguments[0]
                        } else t = 0;
                        return e.apply(void 0, arguments)
                    }
                }

                function Ss(e, t) {
                    var n = -1,
                        i = e.length,
                        r = i - 1;
                    for (t = void 0 === t ? i : t; ++n < t;) {
                        var s = Ni(n, r),
                            o = e[s];
                        e[s] = e[n], e[n] = o
                    }
                    return e.length = t, e
                }
                var xs = function(e) {
                    var t = So(e, (function(e) {
                            return 500 === n.size && n.clear(), e
                        })),
                        n = t.cache;
                    return t
                }((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(G, (function(e, n, i, r) {
                        t.push(i ? r.replace(te, "$1") : n || e)
                    })), t
                }));

                function Ls(e) {
                    if ("string" == typeof e || Jo(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function ks(e) {
                    if (null != e) {
                        try {
                            return Se.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }

                function Cs(e) {
                    if (e instanceof Bn) return e.clone();
                    var t = new On(e.__wrapped__, e.__chain__);
                    return t.__actions__ = mr(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }
                var Is = Ri((function(e, t) {
                        return No(e) ? Qn(e, si(t, 1, No, !0)) : []
                    })),
                    As = Ri((function(e, t) {
                        var n = Rs(t);
                        return No(n) && (n = void 0), No(e) ? Qn(e, si(t, 1, No, !0), Yr(n, 2)) : []
                    })),
                    Ps = Ri((function(e, t) {
                        var n = Rs(t);
                        return No(n) && (n = void 0), No(e) ? Qn(e, si(t, 1, No, !0), void 0, n) : []
                    }));

                function Os(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    if (!i) return -1;
                    var r = null == n ? 0 : ia(n);
                    return r < 0 && (r = on(i + r, 0)), wt(e, Yr(t, 3), r)
                }

                function Bs(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    if (!i) return -1;
                    var r = i - 1;
                    return void 0 !== n && (r = ia(n), r = n < 0 ? on(i + r, 0) : an(r, i - 1)), wt(e, Yr(t, 3), r, !0)
                }

                function Ts(e) {
                    return (null == e ? 0 : e.length) ? si(e, 1) : []
                }

                function js(e) {
                    return e && e.length ? e[0] : void 0
                }
                var Ms = Ri((function(e) {
                        var t = ft(e, sr);
                        return t.length && t[0] === e[0] ? mi(t) : []
                    })),
                    Ns = Ri((function(e) {
                        var t = Rs(e),
                            n = ft(e, sr);
                        return t === Rs(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? mi(n, Yr(t, 2)) : []
                    })),
                    Ds = Ri((function(e) {
                        var t = Rs(e),
                            n = ft(e, sr);
                        return (t = "function" == typeof t ? t : void 0) && n.pop(), n.length && n[0] === e[0] ? mi(n, void 0, t) : []
                    }));

                function Rs(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? e[t - 1] : void 0
                }
                var qs = Ri(Vs);

                function Vs(e, t) {
                    return e && e.length && t && t.length ? ji(e, t) : e
                }
                var zs = Ur((function(e, t) {
                    var n = null == e ? 0 : e.length,
                        i = Wn(e, t);
                    return Mi(e, ft(t, (function(e) {
                        return os(e, n) ? +e : e
                    })).sort(pr)), i
                }));

                function Fs(e) {
                    return null == e ? e : dn.call(e)
                }
                var Hs = Ri((function(e) {
                        return Xi(si(e, 1, No, !0))
                    })),
                    Us = Ri((function(e) {
                        var t = Rs(e);
                        return No(t) && (t = void 0), Xi(si(e, 1, No, !0), Yr(t, 2))
                    })),
                    Gs = Ri((function(e) {
                        var t = Rs(e);
                        return t = "function" == typeof t ? t : void 0, Xi(si(e, 1, No, !0), void 0, t)
                    }));

                function $s(e) {
                    if (!e || !e.length) return [];
                    var t = 0;
                    return e = ut(e, (function(e) {
                        if (No(e)) return t = on(e.length, t), !0
                    })), At(t, (function(t) {
                        return ft(e, Lt(t))
                    }))
                }

                function Zs(e, t) {
                    if (!e || !e.length) return [];
                    var n = $s(e);
                    return null == t ? n : ft(n, (function(e) {
                        return st(t, void 0, e)
                    }))
                }
                var Ws = Ri((function(e, t) {
                        return No(e) ? Qn(e, t) : []
                    })),
                    Ks = Ri((function(e) {
                        return ir(ut(e, No))
                    })),
                    Ys = Ri((function(e) {
                        var t = Rs(e);
                        return No(t) && (t = void 0), ir(ut(e, No), Yr(t, 2))
                    })),
                    Js = Ri((function(e) {
                        var t = Rs(e);
                        return t = "function" == typeof t ? t : void 0, ir(ut(e, No), void 0, t)
                    })),
                    Xs = Ri($s);
                var Qs = Ri((function(e) {
                    var t = e.length,
                        n = t > 1 ? e[t - 1] : void 0;
                    return n = "function" == typeof n ? (e.pop(), n) : void 0, Zs(e, n)
                }));

                function eo(e) {
                    var t = In(e);
                    return t.__chain__ = !0, t
                }

                function to(e, t) {
                    return t(e)
                }
                var no = Ur((function(e) {
                    var t = e.length,
                        n = t ? e[0] : 0,
                        i = this.__wrapped__,
                        r = function(t) {
                            return Wn(t, e)
                        };
                    return !(t > 1 || this.__actions__.length) && i instanceof Bn && os(n) ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                        func: to,
                        args: [r],
                        thisArg: void 0
                    }), new On(i, this.__chain__).thru((function(e) {
                        return t && !e.length && e.push(void 0), e
                    }))) : this.thru(r)
                }));
                var io = br((function(e, t, n) {
                    xe.call(e, n) ? ++e[n] : Zn(e, n, 1)
                }));
                var ro = kr(Os),
                    so = kr(Bs);

                function oo(e, t) {
                    return (To(e) ? at : ei)(e, Yr(t, 3))
                }

                function ao(e, t) {
                    return (To(e) ? ct : ti)(e, Yr(t, 3))
                }
                var co = br((function(e, t, n) {
                    xe.call(e, n) ? e[n].push(t) : Zn(e, n, [t])
                }));
                var lo = Ri((function(e, t, n) {
                        var r = -1,
                            s = "function" == typeof t,
                            o = Mo(e) ? i(e.length) : [];
                        return ei(e, (function(e) {
                            o[++r] = s ? st(t, e, n) : yi(e, t, n)
                        })), o
                    })),
                    uo = br((function(e, t, n) {
                        Zn(e, n, t)
                    }));

                function ho(e, t) {
                    return (To(e) ? ft : Ci)(e, Yr(t, 3))
                }
                var fo = br((function(e, t, n) {
                    e[n ? 0 : 1].push(t)
                }), (function() {
                    return [
                        [],
                        []
                    ]
                }));
                var po = Ri((function(e, t) {
                        if (null == e) return [];
                        var n = t.length;
                        return n > 1 && as(e, t[0], t[1]) ? t = [] : n > 2 && as(t[0], t[1], t[2]) && (t = [t[0]]), Bi(e, si(t, 1), [])
                    })),
                    go = Yt || function() {
                        return Ze.Date.now()
                    };

                function vo(e, t, n) {
                    return t = n ? void 0 : t, qr(e, 128, void 0, void 0, void 0, void 0, t = e && null == t ? e.length : t)
                }

                function mo(e, t) {
                    var n;
                    if ("function" != typeof t) throw new ye(s);
                    return e = ia(e),
                        function() {
                            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
                        }
                }
                var yo = Ri((function(e, t, n) {
                        var i = 1;
                        if (n.length) {
                            var r = Ft(n, Kr(yo));
                            i |= 32
                        }
                        return qr(e, i, t, n, r)
                    })),
                    bo = Ri((function(e, t, n) {
                        var i = 3;
                        if (n.length) {
                            var r = Ft(n, Kr(bo));
                            i |= 32
                        }
                        return qr(t, i, e, n, r)
                    }));

                function wo(e, t, n) {
                    var i, r, o, a, c, l, u = 0,
                        d = !1,
                        h = !1,
                        f = !0;
                    if ("function" != typeof e) throw new ye(s);

                    function p(t) {
                        var n = i,
                            s = r;
                        return i = r = void 0, u = t, a = e.apply(s, n)
                    }

                    function g(e) {
                        return u = e, c = bs(m, t), d ? p(e) : a
                    }

                    function v(e) {
                        var n = e - l;
                        return void 0 === l || n >= t || n < 0 || h && e - u >= o
                    }

                    function m() {
                        var e = go();
                        if (v(e)) return y(e);
                        c = bs(m, function(e) {
                            var n = t - (e - l);
                            return h ? an(n, o - (e - u)) : n
                        }(e))
                    }

                    function y(e) {
                        return c = void 0, f && i ? p(e) : (i = r = void 0, a)
                    }

                    function b() {
                        var e = go(),
                            n = v(e);
                        if (i = arguments, r = this, l = e, n) {
                            if (void 0 === c) return g(l);
                            if (h) return ur(c), c = bs(m, t), p(l)
                        }
                        return void 0 === c && (c = bs(m, t)), a
                    }
                    return t = sa(t) || 0, Ho(n) && (d = !!n.leading, o = (h = "maxWait" in n) ? on(sa(n.maxWait) || 0, t) : o, f = "trailing" in n ? !!n.trailing : f), b.cancel = function() {
                        void 0 !== c && ur(c), u = 0, i = l = r = c = void 0
                    }, b.flush = function() {
                        return void 0 === c ? a : y(go())
                    }, b
                }
                var _o = Ri((function(e, t) {
                        return Xn(e, 1, t)
                    })),
                    Eo = Ri((function(e, t, n) {
                        return Xn(e, sa(t) || 0, n)
                    }));

                function So(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new ye(s);
                    var n = function() {
                        var i = arguments,
                            r = t ? t.apply(this, i) : i[0],
                            s = n.cache;
                        if (s.has(r)) return s.get(r);
                        var o = e.apply(this, i);
                        return n.cache = s.set(r, o) || s, o
                    };
                    return n.cache = new(So.Cache || Mn), n
                }

                function xo(e) {
                    if ("function" != typeof e) throw new ye(s);
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }
                So.Cache = Mn;
                var Lo = cr((function(e, t) {
                        var n = (t = 1 == t.length && To(t[0]) ? ft(t[0], Pt(Yr())) : ft(si(t, 1), Pt(Yr()))).length;
                        return Ri((function(i) {
                            for (var r = -1, s = an(i.length, n); ++r < s;) i[r] = t[r].call(this, i[r]);
                            return st(e, this, i)
                        }))
                    })),
                    ko = Ri((function(e, t) {
                        return qr(e, 32, void 0, t, Ft(t, Kr(ko)))
                    })),
                    Co = Ri((function(e, t) {
                        return qr(e, 64, void 0, t, Ft(t, Kr(Co)))
                    })),
                    Io = Ur((function(e, t) {
                        return qr(e, 256, void 0, void 0, void 0, t)
                    }));

                function Ao(e, t) {
                    return e === t || e != e && t != t
                }
                var Po = jr(pi),
                    Oo = jr((function(e, t) {
                        return e >= t
                    })),
                    Bo = bi(function() {
                        return arguments
                    }()) ? bi : function(e) {
                        return Uo(e) && xe.call(e, "callee") && !We.call(e, "callee")
                    },
                    To = i.isArray,
                    jo = Qe ? Pt(Qe) : function(e) {
                        return Uo(e) && fi(e) == S
                    };

                function Mo(e) {
                    return null != e && Fo(e.length) && !Vo(e)
                }

                function No(e) {
                    return Uo(e) && Mo(e)
                }
                var Do = tn || sc,
                    Ro = et ? Pt(et) : function(e) {
                        return Uo(e) && fi(e) == d
                    };

                function qo(e) {
                    if (!Uo(e)) return !1;
                    var t = fi(e);
                    return t == h || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !Zo(e)
                }

                function Vo(e) {
                    if (!Ho(e)) return !1;
                    var t = fi(e);
                    return t == f || t == p || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }

                function zo(e) {
                    return "number" == typeof e && e == ia(e)
                }

                function Fo(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                }

                function Ho(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function Uo(e) {
                    return null != e && "object" == typeof e
                }
                var Go = tt ? Pt(tt) : function(e) {
                    return Uo(e) && ns(e) == g
                };

                function $o(e) {
                    return "number" == typeof e || Uo(e) && fi(e) == v
                }

                function Zo(e) {
                    if (!Uo(e) || fi(e) != m) return !1;
                    var t = Ge(e);
                    if (null === t) return !0;
                    var n = xe.call(t, "constructor") && t.constructor;
                    return "function" == typeof n && n instanceof n && Se.call(n) == Ie
                }
                var Wo = nt ? Pt(nt) : function(e) {
                    return Uo(e) && fi(e) == y
                };
                var Ko = it ? Pt(it) : function(e) {
                    return Uo(e) && ns(e) == b
                };

                function Yo(e) {
                    return "string" == typeof e || !To(e) && Uo(e) && fi(e) == w
                }

                function Jo(e) {
                    return "symbol" == typeof e || Uo(e) && fi(e) == _
                }
                var Xo = rt ? Pt(rt) : function(e) {
                    return Uo(e) && Fo(e.length) && !!Ve[fi(e)]
                };
                var Qo = jr(ki),
                    ea = jr((function(e, t) {
                        return e <= t
                    }));

                function ta(e) {
                    if (!e) return [];
                    if (Mo(e)) return Yo(e) ? $t(e) : mr(e);
                    if (Xe && e[Xe]) return function(e) {
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        return n
                    }(e[Xe]());
                    var t = ns(e);
                    return (t == g ? Vt : t == b ? Ht : Aa)(e)
                }

                function na(e) {
                    return e ? (e = sa(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                }

                function ia(e) {
                    var t = na(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }

                function ra(e) {
                    return e ? Kn(ia(e), 0, 4294967295) : 0
                }

                function sa(e) {
                    if ("number" == typeof e) return e;
                    if (Jo(e)) return NaN;
                    if (Ho(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = Ho(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(W, "");
                    var n = se.test(e);
                    return n || ae.test(e) ? Ue(e.slice(2), n ? 2 : 8) : re.test(e) ? NaN : +e
                }

                function oa(e) {
                    return yr(e, _a(e))
                }

                function aa(e) {
                    return null == e ? "" : Ji(e)
                }
                var ca = wr((function(e, t) {
                        if (ds(t) || Mo(t)) yr(t, wa(t), e);
                        else
                            for (var n in t) xe.call(t, n) && Hn(e, n, t[n])
                    })),
                    la = wr((function(e, t) {
                        yr(t, _a(t), e)
                    })),
                    ua = wr((function(e, t, n, i) {
                        yr(t, _a(t), e, i)
                    })),
                    da = wr((function(e, t, n, i) {
                        yr(t, wa(t), e, i)
                    })),
                    ha = Ur(Wn);
                var fa = Ri((function(e, t) {
                        e = ge(e);
                        var n = -1,
                            i = t.length,
                            r = i > 2 ? t[2] : void 0;
                        for (r && as(t[0], t[1], r) && (i = 1); ++n < i;)
                            for (var s = t[n], o = _a(s), a = -1, c = o.length; ++a < c;) {
                                var l = o[a],
                                    u = e[l];
                                (void 0 === u || Ao(u, _e[l]) && !xe.call(e, l)) && (e[l] = s[l])
                            }
                        return e
                    })),
                    pa = Ri((function(e) {
                        return e.push(void 0, zr), st(Sa, void 0, e)
                    }));

                function ga(e, t, n) {
                    var i = null == e ? void 0 : di(e, t);
                    return void 0 === i ? n : i
                }

                function va(e, t) {
                    return null != e && is(e, t, vi)
                }
                var ma = Ar((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = Ce.call(t)), e[t] = n
                    }), Ha($a)),
                    ya = Ar((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = Ce.call(t)), xe.call(e, t) ? e[t].push(n) : e[t] = [n]
                    }), Yr),
                    ba = Ri(yi);

                function wa(e) {
                    return Mo(e) ? Rn(e) : xi(e)
                }

                function _a(e) {
                    return Mo(e) ? Rn(e, !0) : Li(e)
                }
                var Ea = wr((function(e, t, n) {
                        Pi(e, t, n)
                    })),
                    Sa = wr((function(e, t, n, i) {
                        Pi(e, t, n, i)
                    })),
                    xa = Ur((function(e, t) {
                        var n = {};
                        if (null == e) return n;
                        var i = !1;
                        t = ft(t, (function(t) {
                            return t = ar(t, e), i || (i = t.length > 1), t
                        })), yr(e, $r(e), n), i && (n = Yn(n, 7, Fr));
                        for (var r = t.length; r--;) Qi(n, t[r]);
                        return n
                    }));
                var La = Ur((function(e, t) {
                    return null == e ? {} : function(e, t) {
                        return Ti(e, t, (function(t, n) {
                            return va(e, n)
                        }))
                    }(e, t)
                }));

                function ka(e, t) {
                    if (null == e) return {};
                    var n = ft($r(e), (function(e) {
                        return [e]
                    }));
                    return t = Yr(t), Ti(e, n, (function(e, n) {
                        return t(e, n[0])
                    }))
                }
                var Ca = Rr(wa),
                    Ia = Rr(_a);

                function Aa(e) {
                    return null == e ? [] : Ot(e, wa(e))
                }
                var Pa = xr((function(e, t, n) {
                    return t = t.toLowerCase(), e + (n ? Oa(t) : t)
                }));

                function Oa(e) {
                    return qa(aa(e).toLowerCase())
                }

                function Ba(e) {
                    return (e = aa(e)) && e.replace(le, Nt).replace(Te, "")
                }
                var Ta = xr((function(e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase()
                    })),
                    ja = xr((function(e, t, n) {
                        return e + (n ? " " : "") + t.toLowerCase()
                    })),
                    Ma = Sr("toLowerCase");
                var Na = xr((function(e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase()
                }));
                var Da = xr((function(e, t, n) {
                    return e + (n ? " " : "") + qa(t)
                }));
                var Ra = xr((function(e, t, n) {
                        return e + (n ? " " : "") + t.toUpperCase()
                    })),
                    qa = Sr("toUpperCase");

                function Va(e, t, n) {
                    return e = aa(e), void 0 === (t = n ? void 0 : t) ? function(e) {
                        return De.test(e)
                    }(e) ? function(e) {
                        return e.match(Me) || []
                    }(e) : function(e) {
                        return e.match(ee) || []
                    }(e) : e.match(t) || []
                }
                var za = Ri((function(e, t) {
                        try {
                            return st(e, void 0, t)
                        } catch (e) {
                            return qo(e) ? e : new he(e)
                        }
                    })),
                    Fa = Ur((function(e, t) {
                        return at(t, (function(t) {
                            t = Ls(t), Zn(e, t, yo(e[t], e))
                        })), e
                    }));

                function Ha(e) {
                    return function() {
                        return e
                    }
                }
                var Ua = Cr(),
                    Ga = Cr(!0);

                function $a(e) {
                    return e
                }

                function Za(e) {
                    return Si("function" == typeof e ? e : Yn(e, 1))
                }
                var Wa = Ri((function(e, t) {
                        return function(n) {
                            return yi(n, e, t)
                        }
                    })),
                    Ka = Ri((function(e, t) {
                        return function(n) {
                            return yi(e, n, t)
                        }
                    }));

                function Ya(e, t, n) {
                    var i = wa(t),
                        r = ui(t, i);
                    null != n || Ho(t) && (r.length || !i.length) || (n = t, t = e, e = this, r = ui(t, wa(t)));
                    var s = !(Ho(n) && "chain" in n && !n.chain),
                        o = Vo(e);
                    return at(r, (function(n) {
                        var i = t[n];
                        e[n] = i, o && (e.prototype[n] = function() {
                            var t = this.__chain__;
                            if (s || t) {
                                var n = e(this.__wrapped__),
                                    r = n.__actions__ = mr(this.__actions__);
                                return r.push({
                                    func: i,
                                    args: arguments,
                                    thisArg: e
                                }), n.__chain__ = t, n
                            }
                            return i.apply(e, pt([this.value()], arguments))
                        })
                    })), e
                }

                function Ja() {}
                var Xa = Or(ft),
                    Qa = Or(lt),
                    ec = Or(mt);

                function tc(e) {
                    return cs(e) ? Lt(Ls(e)) : function(e) {
                        return function(t) {
                            return di(t, e)
                        }
                    }(e)
                }
                var nc = Tr(),
                    ic = Tr(!0);

                function rc() {
                    return []
                }

                function sc() {
                    return !1
                }
                var oc = Pr((function(e, t) {
                        return e + t
                    }), 0),
                    ac = Nr("ceil"),
                    cc = Pr((function(e, t) {
                        return e / t
                    }), 1),
                    lc = Nr("floor");
                var uc, dc = Pr((function(e, t) {
                        return e * t
                    }), 1),
                    hc = Nr("round"),
                    fc = Pr((function(e, t) {
                        return e - t
                    }), 0);
                return In.after = function(e, t) {
                    if ("function" != typeof t) throw new ye(s);
                    return e = ia(e),
                        function() {
                            if (--e < 1) return t.apply(this, arguments)
                        }
                }, In.ary = vo, In.assign = ca, In.assignIn = la, In.assignInWith = ua, In.assignWith = da, In.at = ha, In.before = mo, In.bind = yo, In.bindAll = Fa, In.bindKey = bo, In.castArray = function() {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return To(e) ? e : [e]
                }, In.chain = eo, In.chunk = function(e, t, n) {
                    t = (n ? as(e, t, n) : void 0 === t) ? 1 : on(ia(t), 0);
                    var r = null == e ? 0 : e.length;
                    if (!r || t < 1) return [];
                    for (var s = 0, o = 0, a = i(Xt(r / t)); s < r;) a[o++] = Gi(e, s, s += t);
                    return a
                }, In.compact = function(e) {
                    for (var t = -1, n = null == e ? 0 : e.length, i = 0, r = []; ++t < n;) {
                        var s = e[t];
                        s && (r[i++] = s)
                    }
                    return r
                }, In.concat = function() {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = i(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                    return pt(To(n) ? mr(n) : [n], si(t, 1))
                }, In.cond = function(e) {
                    var t = null == e ? 0 : e.length,
                        n = Yr();
                    return e = t ? ft(e, (function(e) {
                        if ("function" != typeof e[1]) throw new ye(s);
                        return [n(e[0]), e[1]]
                    })) : [], Ri((function(n) {
                        for (var i = -1; ++i < t;) {
                            var r = e[i];
                            if (st(r[0], this, n)) return st(r[1], this, n)
                        }
                    }))
                }, In.conforms = function(e) {
                    return function(e) {
                        var t = wa(e);
                        return function(n) {
                            return Jn(n, e, t)
                        }
                    }(Yn(e, 1))
                }, In.constant = Ha, In.countBy = io, In.create = function(e, t) {
                    var n = An(e);
                    return null == t ? n : $n(n, t)
                }, In.curry = function e(t, n, i) {
                    var r = qr(t, 8, void 0, void 0, void 0, void 0, void 0, n = i ? void 0 : n);
                    return r.placeholder = e.placeholder, r
                }, In.curryRight = function e(t, n, i) {
                    var r = qr(t, 16, void 0, void 0, void 0, void 0, void 0, n = i ? void 0 : n);
                    return r.placeholder = e.placeholder, r
                }, In.debounce = wo, In.defaults = fa, In.defaultsDeep = pa, In.defer = _o, In.delay = Eo, In.difference = Is, In.differenceBy = As, In.differenceWith = Ps, In.drop = function(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    return i ? Gi(e, (t = n || void 0 === t ? 1 : ia(t)) < 0 ? 0 : t, i) : []
                }, In.dropRight = function(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    return i ? Gi(e, 0, (t = i - (t = n || void 0 === t ? 1 : ia(t))) < 0 ? 0 : t) : []
                }, In.dropRightWhile = function(e, t) {
                    return e && e.length ? tr(e, Yr(t, 3), !0, !0) : []
                }, In.dropWhile = function(e, t) {
                    return e && e.length ? tr(e, Yr(t, 3), !0) : []
                }, In.fill = function(e, t, n, i) {
                    var r = null == e ? 0 : e.length;
                    return r ? (n && "number" != typeof n && as(e, t, n) && (n = 0, i = r), function(e, t, n, i) {
                        var r = e.length;
                        for ((n = ia(n)) < 0 && (n = -n > r ? 0 : r + n), (i = void 0 === i || i > r ? r : ia(i)) < 0 && (i += r), i = n > i ? 0 : ra(i); n < i;) e[n++] = t;
                        return e
                    }(e, t, n, i)) : []
                }, In.filter = function(e, t) {
                    return (To(e) ? ut : ri)(e, Yr(t, 3))
                }, In.flatMap = function(e, t) {
                    return si(ho(e, t), 1)
                }, In.flatMapDeep = function(e, t) {
                    return si(ho(e, t), 1 / 0)
                }, In.flatMapDepth = function(e, t, n) {
                    return n = void 0 === n ? 1 : ia(n), si(ho(e, t), n)
                }, In.flatten = Ts, In.flattenDeep = function(e) {
                    return (null == e ? 0 : e.length) ? si(e, 1 / 0) : []
                }, In.flattenDepth = function(e, t) {
                    return (null == e ? 0 : e.length) ? si(e, t = void 0 === t ? 1 : ia(t)) : []
                }, In.flip = function(e) {
                    return qr(e, 512)
                }, In.flow = Ua, In.flowRight = Ga, In.fromPairs = function(e) {
                    for (var t = -1, n = null == e ? 0 : e.length, i = {}; ++t < n;) {
                        var r = e[t];
                        i[r[0]] = r[1]
                    }
                    return i
                }, In.functions = function(e) {
                    return null == e ? [] : ui(e, wa(e))
                }, In.functionsIn = function(e) {
                    return null == e ? [] : ui(e, _a(e))
                }, In.groupBy = co, In.initial = function(e) {
                    return (null == e ? 0 : e.length) ? Gi(e, 0, -1) : []
                }, In.intersection = Ms, In.intersectionBy = Ns, In.intersectionWith = Ds, In.invert = ma, In.invertBy = ya, In.invokeMap = lo, In.iteratee = Za, In.keyBy = uo, In.keys = wa, In.keysIn = _a, In.map = ho, In.mapKeys = function(e, t) {
                    var n = {};
                    return t = Yr(t, 3), ci(e, (function(e, i, r) {
                        Zn(n, t(e, i, r), e)
                    })), n
                }, In.mapValues = function(e, t) {
                    var n = {};
                    return t = Yr(t, 3), ci(e, (function(e, i, r) {
                        Zn(n, i, t(e, i, r))
                    })), n
                }, In.matches = function(e) {
                    return Ii(Yn(e, 1))
                }, In.matchesProperty = function(e, t) {
                    return Ai(e, Yn(t, 1))
                }, In.memoize = So, In.merge = Ea, In.mergeWith = Sa, In.method = Wa, In.methodOf = Ka, In.mixin = Ya, In.negate = xo, In.nthArg = function(e) {
                    return e = ia(e), Ri((function(t) {
                        return Oi(t, e)
                    }))
                }, In.omit = xa, In.omitBy = function(e, t) {
                    return ka(e, xo(Yr(t)))
                }, In.once = function(e) {
                    return mo(2, e)
                }, In.orderBy = function(e, t, n, i) {
                    return null == e ? [] : (To(t) || (t = null == t ? [] : [t]), To(n = i ? void 0 : n) || (n = null == n ? [] : [n]), Bi(e, t, n))
                }, In.over = Xa, In.overArgs = Lo, In.overEvery = Qa, In.overSome = ec, In.partial = ko, In.partialRight = Co, In.partition = fo, In.pick = La, In.pickBy = ka, In.property = tc, In.propertyOf = function(e) {
                    return function(t) {
                        return null == e ? void 0 : di(e, t)
                    }
                }, In.pull = qs, In.pullAll = Vs, In.pullAllBy = function(e, t, n) {
                    return e && e.length && t && t.length ? ji(e, t, Yr(n, 2)) : e
                }, In.pullAllWith = function(e, t, n) {
                    return e && e.length && t && t.length ? ji(e, t, void 0, n) : e
                }, In.pullAt = zs, In.range = nc, In.rangeRight = ic, In.rearg = Io, In.reject = function(e, t) {
                    return (To(e) ? ut : ri)(e, xo(Yr(t, 3)))
                }, In.remove = function(e, t) {
                    var n = [];
                    if (!e || !e.length) return n;
                    var i = -1,
                        r = [],
                        s = e.length;
                    for (t = Yr(t, 3); ++i < s;) {
                        var o = e[i];
                        t(o, i, e) && (n.push(o), r.push(i))
                    }
                    return Mi(e, r), n
                }, In.rest = function(e, t) {
                    if ("function" != typeof e) throw new ye(s);
                    return Ri(e, t = void 0 === t ? t : ia(t))
                }, In.reverse = Fs, In.sampleSize = function(e, t, n) {
                    return t = (n ? as(e, t, n) : void 0 === t) ? 1 : ia(t), (To(e) ? Vn : Vi)(e, t)
                }, In.set = function(e, t, n) {
                    return null == e ? e : zi(e, t, n)
                }, In.setWith = function(e, t, n, i) {
                    return i = "function" == typeof i ? i : void 0, null == e ? e : zi(e, t, n, i)
                }, In.shuffle = function(e) {
                    return (To(e) ? zn : Ui)(e)
                }, In.slice = function(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    return i ? (n && "number" != typeof n && as(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : ia(t), n = void 0 === n ? i : ia(n)), Gi(e, t, n)) : []
                }, In.sortBy = po, In.sortedUniq = function(e) {
                    return e && e.length ? Ki(e) : []
                }, In.sortedUniqBy = function(e, t) {
                    return e && e.length ? Ki(e, Yr(t, 2)) : []
                }, In.split = function(e, t, n) {
                    return n && "number" != typeof n && as(e, t, n) && (t = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (e = aa(e)) && ("string" == typeof t || null != t && !Wo(t)) && !(t = Ji(t)) && qt(e) ? lr($t(e), 0, n) : e.split(t, n) : []
                }, In.spread = function(e, t) {
                    if ("function" != typeof e) throw new ye(s);
                    return t = null == t ? 0 : on(ia(t), 0), Ri((function(n) {
                        var i = n[t],
                            r = lr(n, 0, t);
                        return i && pt(r, i), st(e, this, r)
                    }))
                }, In.tail = function(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? Gi(e, 1, t) : []
                }, In.take = function(e, t, n) {
                    return e && e.length ? Gi(e, 0, (t = n || void 0 === t ? 1 : ia(t)) < 0 ? 0 : t) : []
                }, In.takeRight = function(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    return i ? Gi(e, (t = i - (t = n || void 0 === t ? 1 : ia(t))) < 0 ? 0 : t, i) : []
                }, In.takeRightWhile = function(e, t) {
                    return e && e.length ? tr(e, Yr(t, 3), !1, !0) : []
                }, In.takeWhile = function(e, t) {
                    return e && e.length ? tr(e, Yr(t, 3)) : []
                }, In.tap = function(e, t) {
                    return t(e), e
                }, In.throttle = function(e, t, n) {
                    var i = !0,
                        r = !0;
                    if ("function" != typeof e) throw new ye(s);
                    return Ho(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), wo(e, t, {
                        leading: i,
                        maxWait: t,
                        trailing: r
                    })
                }, In.thru = to, In.toArray = ta, In.toPairs = Ca, In.toPairsIn = Ia, In.toPath = function(e) {
                    return To(e) ? ft(e, Ls) : Jo(e) ? [e] : mr(xs(aa(e)))
                }, In.toPlainObject = oa, In.transform = function(e, t, n) {
                    var i = To(e),
                        r = i || Do(e) || Xo(e);
                    if (t = Yr(t, 4), null == n) {
                        var s = e && e.constructor;
                        n = r ? i ? new s : [] : Ho(e) && Vo(s) ? An(Ge(e)) : {}
                    }
                    return (r ? at : ci)(e, (function(e, i, r) {
                        return t(n, e, i, r)
                    })), n
                }, In.unary = function(e) {
                    return vo(e, 1)
                }, In.union = Hs, In.unionBy = Us, In.unionWith = Gs, In.uniq = function(e) {
                    return e && e.length ? Xi(e) : []
                }, In.uniqBy = function(e, t) {
                    return e && e.length ? Xi(e, Yr(t, 2)) : []
                }, In.uniqWith = function(e, t) {
                    return t = "function" == typeof t ? t : void 0, e && e.length ? Xi(e, void 0, t) : []
                }, In.unset = function(e, t) {
                    return null == e || Qi(e, t)
                }, In.unzip = $s, In.unzipWith = Zs, In.update = function(e, t, n) {
                    return null == e ? e : er(e, t, or(n))
                }, In.updateWith = function(e, t, n, i) {
                    return i = "function" == typeof i ? i : void 0, null == e ? e : er(e, t, or(n), i)
                }, In.values = Aa, In.valuesIn = function(e) {
                    return null == e ? [] : Ot(e, _a(e))
                }, In.without = Ws, In.words = Va, In.wrap = function(e, t) {
                    return ko(or(t), e)
                }, In.xor = Ks, In.xorBy = Ys, In.xorWith = Js, In.zip = Xs, In.zipObject = function(e, t) {
                    return rr(e || [], t || [], Hn)
                }, In.zipObjectDeep = function(e, t) {
                    return rr(e || [], t || [], zi)
                }, In.zipWith = Qs, In.entries = Ca, In.entriesIn = Ia, In.extend = la, In.extendWith = ua, Ya(In, In), In.add = oc, In.attempt = za, In.camelCase = Pa, In.capitalize = Oa, In.ceil = ac, In.clamp = function(e, t, n) {
                    return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = sa(n)) == n ? n : 0), void 0 !== t && (t = (t = sa(t)) == t ? t : 0), Kn(sa(e), t, n)
                }, In.clone = function(e) {
                    return Yn(e, 4)
                }, In.cloneDeep = function(e) {
                    return Yn(e, 5)
                }, In.cloneDeepWith = function(e, t) {
                    return Yn(e, 5, t = "function" == typeof t ? t : void 0)
                }, In.cloneWith = function(e, t) {
                    return Yn(e, 4, t = "function" == typeof t ? t : void 0)
                }, In.conformsTo = function(e, t) {
                    return null == t || Jn(e, t, wa(t))
                }, In.deburr = Ba, In.defaultTo = function(e, t) {
                    return null == e || e != e ? t : e
                }, In.divide = cc, In.endsWith = function(e, t, n) {
                    e = aa(e), t = Ji(t);
                    var i = e.length,
                        r = n = void 0 === n ? i : Kn(ia(n), 0, i);
                    return (n -= t.length) >= 0 && e.slice(n, r) == t
                }, In.eq = Ao, In.escape = function(e) {
                    return (e = aa(e)) && q.test(e) ? e.replace(D, Dt) : e
                }, In.escapeRegExp = function(e) {
                    return (e = aa(e)) && Z.test(e) ? e.replace($, "\\$&") : e
                }, In.every = function(e, t, n) {
                    var i = To(e) ? lt : ni;
                    return n && as(e, t, n) && (t = void 0), i(e, Yr(t, 3))
                }, In.find = ro, In.findIndex = Os, In.findKey = function(e, t) {
                    return bt(e, Yr(t, 3), ci)
                }, In.findLast = so, In.findLastIndex = Bs, In.findLastKey = function(e, t) {
                    return bt(e, Yr(t, 3), li)
                }, In.floor = lc, In.forEach = oo, In.forEachRight = ao, In.forIn = function(e, t) {
                    return null == e ? e : oi(e, Yr(t, 3), _a)
                }, In.forInRight = function(e, t) {
                    return null == e ? e : ai(e, Yr(t, 3), _a)
                }, In.forOwn = function(e, t) {
                    return e && ci(e, Yr(t, 3))
                }, In.forOwnRight = function(e, t) {
                    return e && li(e, Yr(t, 3))
                }, In.get = ga, In.gt = Po, In.gte = Oo, In.has = function(e, t) {
                    return null != e && is(e, t, gi)
                }, In.hasIn = va, In.head = js, In.identity = $a, In.includes = function(e, t, n, i) {
                    e = Mo(e) ? e : Aa(e), n = n && !i ? ia(n) : 0;
                    var r = e.length;
                    return n < 0 && (n = on(r + n, 0)), Yo(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && _t(e, t, n) > -1
                }, In.indexOf = function(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    if (!i) return -1;
                    var r = null == n ? 0 : ia(n);
                    return r < 0 && (r = on(i + r, 0)), _t(e, t, r)
                }, In.inRange = function(e, t, n) {
                    return t = na(t), void 0 === n ? (n = t, t = 0) : n = na(n),
                        function(e, t, n) {
                            return e >= an(t, n) && e < on(t, n)
                        }(e = sa(e), t, n)
                }, In.invoke = ba, In.isArguments = Bo, In.isArray = To, In.isArrayBuffer = jo, In.isArrayLike = Mo, In.isArrayLikeObject = No, In.isBoolean = function(e) {
                    return !0 === e || !1 === e || Uo(e) && fi(e) == u
                }, In.isBuffer = Do, In.isDate = Ro, In.isElement = function(e) {
                    return Uo(e) && 1 === e.nodeType && !Zo(e)
                }, In.isEmpty = function(e) {
                    if (null == e) return !0;
                    if (Mo(e) && (To(e) || "string" == typeof e || "function" == typeof e.splice || Do(e) || Xo(e) || Bo(e))) return !e.length;
                    var t = ns(e);
                    if (t == g || t == b) return !e.size;
                    if (ds(e)) return !xi(e).length;
                    for (var n in e)
                        if (xe.call(e, n)) return !1;
                    return !0
                }, In.isEqual = function(e, t) {
                    return wi(e, t)
                }, In.isEqualWith = function(e, t, n) {
                    var i = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
                    return void 0 === i ? wi(e, t, void 0, n) : !!i
                }, In.isError = qo, In.isFinite = function(e) {
                    return "number" == typeof e && nn(e)
                }, In.isFunction = Vo, In.isInteger = zo, In.isLength = Fo, In.isMap = Go, In.isMatch = function(e, t) {
                    return e === t || _i(e, t, Xr(t))
                }, In.isMatchWith = function(e, t, n) {
                    return n = "function" == typeof n ? n : void 0, _i(e, t, Xr(t), n)
                }, In.isNaN = function(e) {
                    return $o(e) && e != +e
                }, In.isNative = function(e) {
                    if (us(e)) throw new he("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return Ei(e)
                }, In.isNil = function(e) {
                    return null == e
                }, In.isNull = function(e) {
                    return null === e
                }, In.isNumber = $o, In.isObject = Ho, In.isObjectLike = Uo, In.isPlainObject = Zo, In.isRegExp = Wo, In.isSafeInteger = function(e) {
                    return zo(e) && e >= -9007199254740991 && e <= 9007199254740991
                }, In.isSet = Ko, In.isString = Yo, In.isSymbol = Jo, In.isTypedArray = Xo, In.isUndefined = function(e) {
                    return void 0 === e
                }, In.isWeakMap = function(e) {
                    return Uo(e) && ns(e) == E
                }, In.isWeakSet = function(e) {
                    return Uo(e) && "[object WeakSet]" == fi(e)
                }, In.join = function(e, t) {
                    return null == e ? "" : rn.call(e, t)
                }, In.kebabCase = Ta, In.last = Rs, In.lastIndexOf = function(e, t, n) {
                    var i = null == e ? 0 : e.length;
                    if (!i) return -1;
                    var r = i;
                    return void 0 !== n && (r = (r = ia(n)) < 0 ? on(i + r, 0) : an(r, i - 1)), t == t ? function(e, t, n) {
                        for (var i = n + 1; i--;)
                            if (e[i] === t) return i;
                        return i
                    }(e, t, r) : wt(e, St, r, !0)
                }, In.lowerCase = ja, In.lowerFirst = Ma, In.lt = Qo, In.lte = ea, In.max = function(e) {
                    return e && e.length ? ii(e, $a, pi) : void 0
                }, In.maxBy = function(e, t) {
                    return e && e.length ? ii(e, Yr(t, 2), pi) : void 0
                }, In.mean = function(e) {
                    return xt(e, $a)
                }, In.meanBy = function(e, t) {
                    return xt(e, Yr(t, 2))
                }, In.min = function(e) {
                    return e && e.length ? ii(e, $a, ki) : void 0
                }, In.minBy = function(e, t) {
                    return e && e.length ? ii(e, Yr(t, 2), ki) : void 0
                }, In.stubArray = rc, In.stubFalse = sc, In.stubObject = function() {
                    return {}
                }, In.stubString = function() {
                    return ""
                }, In.stubTrue = function() {
                    return !0
                }, In.multiply = dc, In.nth = function(e, t) {
                    return e && e.length ? Oi(e, ia(t)) : void 0
                }, In.noConflict = function() {
                    return Ze._ === this && (Ze._ = Ae), this
                }, In.noop = Ja, In.now = go, In.pad = function(e, t, n) {
                    e = aa(e);
                    var i = (t = ia(t)) ? Gt(e) : 0;
                    if (!t || i >= t) return e;
                    var r = (t - i) / 2;
                    return Br(Qt(r), n) + e + Br(Xt(r), n)
                }, In.padEnd = function(e, t, n) {
                    e = aa(e);
                    var i = (t = ia(t)) ? Gt(e) : 0;
                    return t && i < t ? e + Br(t - i, n) : e
                }, In.padStart = function(e, t, n) {
                    e = aa(e);
                    var i = (t = ia(t)) ? Gt(e) : 0;
                    return t && i < t ? Br(t - i, n) + e : e
                }, In.parseInt = function(e, t, n) {
                    return n || null == t ? t = 0 : t && (t = +t), ln(aa(e).replace(K, ""), t || 0)
                }, In.random = function(e, t, n) {
                    if (n && "boolean" != typeof n && as(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = na(e), void 0 === t ? (t = e, e = 0) : t = na(t)), e > t) {
                        var i = e;
                        e = t, t = i
                    }
                    if (n || e % 1 || t % 1) {
                        var r = un();
                        return an(e + r * (t - e + He("1e-" + ((r + "").length - 1))), t)
                    }
                    return Ni(e, t)
                }, In.reduce = function(e, t, n) {
                    var i = To(e) ? gt : Ct,
                        r = arguments.length < 3;
                    return i(e, Yr(t, 4), n, r, ei)
                }, In.reduceRight = function(e, t, n) {
                    var i = To(e) ? vt : Ct,
                        r = arguments.length < 3;
                    return i(e, Yr(t, 4), n, r, ti)
                }, In.repeat = function(e, t, n) {
                    return t = (n ? as(e, t, n) : void 0 === t) ? 1 : ia(t), Di(aa(e), t)
                }, In.replace = function() {
                    var e = arguments,
                        t = aa(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                }, In.result = function(e, t, n) {
                    var i = -1,
                        r = (t = ar(t, e)).length;
                    for (r || (r = 1, e = void 0); ++i < r;) {
                        var s = null == e ? void 0 : e[Ls(t[i])];
                        void 0 === s && (i = r, s = n), e = Vo(s) ? s.call(e) : s
                    }
                    return e
                }, In.round = hc, In.runInContext = e, In.sample = function(e) {
                    return (To(e) ? qn : qi)(e)
                }, In.size = function(e) {
                    if (null == e) return 0;
                    if (Mo(e)) return Yo(e) ? Gt(e) : e.length;
                    var t = ns(e);
                    return t == g || t == b ? e.size : xi(e).length
                }, In.snakeCase = Na, In.some = function(e, t, n) {
                    var i = To(e) ? mt : $i;
                    return n && as(e, t, n) && (t = void 0), i(e, Yr(t, 3))
                }, In.sortedIndex = function(e, t) {
                    return Zi(e, t)
                }, In.sortedIndexBy = function(e, t, n) {
                    return Wi(e, t, Yr(n, 2))
                }, In.sortedIndexOf = function(e, t) {
                    var n = null == e ? 0 : e.length;
                    if (n) {
                        var i = Zi(e, t);
                        if (i < n && Ao(e[i], t)) return i
                    }
                    return -1
                }, In.sortedLastIndex = function(e, t) {
                    return Zi(e, t, !0)
                }, In.sortedLastIndexBy = function(e, t, n) {
                    return Wi(e, t, Yr(n, 2), !0)
                }, In.sortedLastIndexOf = function(e, t) {
                    if (null == e ? 0 : e.length) {
                        var n = Zi(e, t, !0) - 1;
                        if (Ao(e[n], t)) return n
                    }
                    return -1
                }, In.startCase = Da, In.startsWith = function(e, t, n) {
                    return e = aa(e), n = null == n ? 0 : Kn(ia(n), 0, e.length), t = Ji(t), e.slice(n, n + t.length) == t
                }, In.subtract = fc, In.sum = function(e) {
                    return e && e.length ? It(e, $a) : 0
                }, In.sumBy = function(e, t) {
                    return e && e.length ? It(e, Yr(t, 2)) : 0
                }, In.template = function(e, t, n) {
                    var i = In.templateSettings;
                    n && as(e, t, n) && (t = void 0), e = aa(e), t = ua({}, t, i, Vr);
                    var r, s, o = ua({}, t.imports, i.imports, Vr),
                        a = wa(o),
                        c = Ot(o, a),
                        l = 0,
                        u = t.interpolate || ue,
                        d = "__p += '",
                        h = ve((t.escape || ue).source + "|" + u.source + "|" + (u === F ? ne : ue).source + "|" + (t.evaluate || ue).source + "|$", "g"),
                        f = "//# sourceURL=" + (xe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qe + "]") + "\n";
                    e.replace(h, (function(t, n, i, o, a, c) {
                        return i || (i = o), d += e.slice(l, c).replace(de, Rt), n && (r = !0, d += "' +\n__e(" + n + ") +\n'"), a && (s = !0, d += "';\n" + a + ";\n__p += '"), i && (d += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), l = c + t.length, t
                    })), d += "';\n";
                    var p = xe.call(t, "variable") && t.variable;
                    p || (d = "with (obj) {\n" + d + "\n}\n"), d = (s ? d.replace(T, "") : d).replace(j, "$1").replace(M, "$1;"), d = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                    var g = za((function() {
                        return fe(a, f + "return " + d).apply(void 0, c)
                    }));
                    if (g.source = d, qo(g)) throw g;
                    return g
                }, In.times = function(e, t) {
                    if ((e = ia(e)) < 1 || e > 9007199254740991) return [];
                    var n = 4294967295,
                        i = an(e, 4294967295);
                    e -= 4294967295;
                    for (var r = At(i, t = Yr(t)); ++n < e;) t(n);
                    return r
                }, In.toFinite = na, In.toInteger = ia, In.toLength = ra, In.toLower = function(e) {
                    return aa(e).toLowerCase()
                }, In.toNumber = sa, In.toSafeInteger = function(e) {
                    return e ? Kn(ia(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                }, In.toString = aa, In.toUpper = function(e) {
                    return aa(e).toUpperCase()
                }, In.trim = function(e, t, n) {
                    if ((e = aa(e)) && (n || void 0 === t)) return e.replace(W, "");
                    if (!e || !(t = Ji(t))) return e;
                    var i = $t(e),
                        r = $t(t);
                    return lr(i, Tt(i, r), jt(i, r) + 1).join("")
                }, In.trimEnd = function(e, t, n) {
                    if ((e = aa(e)) && (n || void 0 === t)) return e.replace(Y, "");
                    if (!e || !(t = Ji(t))) return e;
                    var i = $t(e);
                    return lr(i, 0, jt(i, $t(t)) + 1).join("")
                }, In.trimStart = function(e, t, n) {
                    if ((e = aa(e)) && (n || void 0 === t)) return e.replace(K, "");
                    if (!e || !(t = Ji(t))) return e;
                    var i = $t(e);
                    return lr(i, Tt(i, $t(t))).join("")
                }, In.truncate = function(e, t) {
                    var n = 30,
                        i = "...";
                    if (Ho(t)) {
                        var r = "separator" in t ? t.separator : r;
                        n = "length" in t ? ia(t.length) : n, i = "omission" in t ? Ji(t.omission) : i
                    }
                    var s = (e = aa(e)).length;
                    if (qt(e)) {
                        var o = $t(e);
                        s = o.length
                    }
                    if (n >= s) return e;
                    var a = n - Gt(i);
                    if (a < 1) return i;
                    var c = o ? lr(o, 0, a).join("") : e.slice(0, a);
                    if (void 0 === r) return c + i;
                    if (o && (a += c.length - a), Wo(r)) {
                        if (e.slice(a).search(r)) {
                            var l, u = c;
                            for (r.global || (r = ve(r.source, aa(ie.exec(r)) + "g")), r.lastIndex = 0; l = r.exec(u);) var d = l.index;
                            c = c.slice(0, void 0 === d ? a : d)
                        }
                    } else if (e.indexOf(Ji(r), a) != a) {
                        var h = c.lastIndexOf(r);
                        h > -1 && (c = c.slice(0, h))
                    }
                    return c + i
                }, In.unescape = function(e) {
                    return (e = aa(e)) && R.test(e) ? e.replace(N, Zt) : e
                }, In.uniqueId = function(e) {
                    var t = ++Le;
                    return aa(e) + t
                }, In.upperCase = Ra, In.upperFirst = qa, In.each = oo, In.eachRight = ao, In.first = js, Ya(In, (uc = {}, ci(In, (function(e, t) {
                    xe.call(In.prototype, t) || (uc[t] = e)
                })), uc), {
                    chain: !1
                }), In.VERSION = "4.17.20", at(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                    In[e].placeholder = In
                })), at(["drop", "take"], (function(e, t) {
                    Bn.prototype[e] = function(n) {
                        n = void 0 === n ? 1 : on(ia(n), 0);
                        var i = this.__filtered__ && !t ? new Bn(this) : this.clone();
                        return i.__filtered__ ? i.__takeCount__ = an(n, i.__takeCount__) : i.__views__.push({
                            size: an(n, 4294967295),
                            type: e + (i.__dir__ < 0 ? "Right" : "")
                        }), i
                    }, Bn.prototype[e + "Right"] = function(t) {
                        return this.reverse()[e](t).reverse()
                    }
                })), at(["filter", "map", "takeWhile"], (function(e, t) {
                    var n = t + 1,
                        i = 1 == n || 3 == n;
                    Bn.prototype[e] = function(e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: Yr(e, 3),
                            type: n
                        }), t.__filtered__ = t.__filtered__ || i, t
                    }
                })), at(["head", "last"], (function(e, t) {
                    var n = "take" + (t ? "Right" : "");
                    Bn.prototype[e] = function() {
                        return this[n](1).value()[0]
                    }
                })), at(["initial", "tail"], (function(e, t) {
                    var n = "drop" + (t ? "" : "Right");
                    Bn.prototype[e] = function() {
                        return this.__filtered__ ? new Bn(this) : this[n](1)
                    }
                })), Bn.prototype.compact = function() {
                    return this.filter($a)
                }, Bn.prototype.find = function(e) {
                    return this.filter(e).head()
                }, Bn.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }, Bn.prototype.invokeMap = Ri((function(e, t) {
                    return "function" == typeof e ? new Bn(this) : this.map((function(n) {
                        return yi(n, e, t)
                    }))
                })), Bn.prototype.reject = function(e) {
                    return this.filter(xo(Yr(e)))
                }, Bn.prototype.slice = function(e, t) {
                    e = ia(e);
                    var n = this;
                    return n.__filtered__ && (e > 0 || t < 0) ? new Bn(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), void 0 !== t && (n = (t = ia(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                }, Bn.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }, Bn.prototype.toArray = function() {
                    return this.take(4294967295)
                }, ci(Bn.prototype, (function(e, t) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(t),
                        i = /^(?:head|last)$/.test(t),
                        r = In[i ? "take" + ("last" == t ? "Right" : "") : t],
                        s = i || /^find/.test(t);
                    r && (In.prototype[t] = function() {
                        var t = this.__wrapped__,
                            o = i ? [1] : arguments,
                            a = t instanceof Bn,
                            c = o[0],
                            l = a || To(t),
                            u = function(e) {
                                var t = r.apply(In, pt([e], o));
                                return i && d ? t[0] : t
                            };
                        l && n && "function" == typeof c && 1 != c.length && (a = l = !1);
                        var d = this.__chain__,
                            h = !!this.__actions__.length,
                            f = s && !d,
                            p = a && !h;
                        if (!s && l) {
                            t = p ? t : new Bn(this);
                            var g = e.apply(t, o);
                            return g.__actions__.push({
                                func: to,
                                args: [u],
                                thisArg: void 0
                            }), new On(g, d)
                        }
                        return f && p ? e.apply(this, o) : (g = this.thru(u), f ? i ? g.value()[0] : g.value() : g)
                    })
                })), at(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                    var t = be[e],
                        n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        i = /^(?:pop|shift)$/.test(e);
                    In.prototype[e] = function() {
                        var e = arguments;
                        if (i && !this.__chain__) {
                            var r = this.value();
                            return t.apply(To(r) ? r : [], e)
                        }
                        return this[n]((function(n) {
                            return t.apply(To(n) ? n : [], e)
                        }))
                    }
                })), ci(Bn.prototype, (function(e, t) {
                    var n = In[t];
                    if (n) {
                        var i = n.name + "";
                        xe.call(bn, i) || (bn[i] = []), bn[i].push({
                            name: t,
                            func: n
                        })
                    }
                })), bn[Ir(void 0, 2).name] = [{
                    name: "wrapper",
                    func: void 0
                }], Bn.prototype.clone = function() {
                    var e = new Bn(this.__wrapped__);
                    return e.__actions__ = mr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = mr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = mr(this.__views__), e
                }, Bn.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var e = new Bn(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else(e = this.clone()).__dir__ *= -1;
                    return e
                }, Bn.prototype.value = function() {
                    var e = this.__wrapped__.value(),
                        t = this.__dir__,
                        n = To(e),
                        i = t < 0,
                        r = n ? e.length : 0,
                        s = function(e, t, n) {
                            var i = -1,
                                r = n.length;
                            for (; ++i < r;) {
                                var s = n[i],
                                    o = s.size;
                                switch (s.type) {
                                    case "drop":
                                        e += o;
                                        break;
                                    case "dropRight":
                                        t -= o;
                                        break;
                                    case "take":
                                        t = an(t, e + o);
                                        break;
                                    case "takeRight":
                                        e = on(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, r, this.__views__),
                        o = s.start,
                        a = s.end,
                        c = a - o,
                        l = i ? a : o - 1,
                        u = this.__iteratees__,
                        d = u.length,
                        h = 0,
                        f = an(c, this.__takeCount__);
                    if (!n || !i && r == c && f == c) return nr(e, this.__actions__);
                    var p = [];
                    e: for (; c-- && h < f;) {
                        for (var g = -1, v = e[l += t]; ++g < d;) {
                            var m = u[g],
                                y = m.iteratee,
                                b = m.type,
                                w = y(v);
                            if (2 == b) v = w;
                            else if (!w) {
                                if (1 == b) continue e;
                                break e
                            }
                        }
                        p[h++] = v
                    }
                    return p
                }, In.prototype.at = no, In.prototype.chain = function() {
                    return eo(this)
                }, In.prototype.commit = function() {
                    return new On(this.value(), this.__chain__)
                }, In.prototype.next = function() {
                    void 0 === this.__values__ && (this.__values__ = ta(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {
                        done: e,
                        value: e ? void 0 : this.__values__[this.__index__++]
                    }
                }, In.prototype.plant = function(e) {
                    for (var t, n = this; n instanceof Pn;) {
                        var i = Cs(n);
                        i.__index__ = 0, i.__values__ = void 0, t ? r.__wrapped__ = i : t = i;
                        var r = i;
                        n = n.__wrapped__
                    }
                    return r.__wrapped__ = e, t
                }, In.prototype.reverse = function() {
                    var e = this.__wrapped__;
                    if (e instanceof Bn) {
                        var t = e;
                        return this.__actions__.length && (t = new Bn(this)), (t = t.reverse()).__actions__.push({
                            func: to,
                            args: [Fs],
                            thisArg: void 0
                        }), new On(t, this.__chain__)
                    }
                    return this.thru(Fs)
                }, In.prototype.toJSON = In.prototype.valueOf = In.prototype.value = function() {
                    return nr(this.__wrapped__, this.__actions__)
                }, In.prototype.first = In.prototype.head, Xe && (In.prototype[Xe] = function() {
                    return this
                }), In
            }();
            Ze._ = Wt, void 0 === (r = function() {
                return Wt
            }.call(t, n, t, i)) || (i.exports = r)
        }).call(this)
    }).call(this, n(6), n(33)(e))
}, function(e, t, n) {
    e.exports = function(e) {
        "use strict";
        var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

        function n(e, t) {
            var n = e[0],
                i = e[1],
                r = e[2],
                s = e[3];
            i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & r | ~i & s) + t[0] - 680876936 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[1] - 389564586 | 0) << 12 | s >>> 20) + n | 0) & n | ~s & i) + t[2] + 606105819 | 0) << 17 | r >>> 15) + s | 0) & s | ~r & n) + t[3] - 1044525330 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & r | ~i & s) + t[4] - 176418897 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[5] + 1200080426 | 0) << 12 | s >>> 20) + n | 0) & n | ~s & i) + t[6] - 1473231341 | 0) << 17 | r >>> 15) + s | 0) & s | ~r & n) + t[7] - 45705983 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & r | ~i & s) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[9] - 1958414417 | 0) << 12 | s >>> 20) + n | 0) & n | ~s & i) + t[10] - 42063 | 0) << 17 | r >>> 15) + s | 0) & s | ~r & n) + t[11] - 1990404162 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & r | ~i & s) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[13] - 40341101 | 0) << 12 | s >>> 20) + n | 0) & n | ~s & i) + t[14] - 1502002290 | 0) << 17 | r >>> 15) + s | 0) & s | ~r & n) + t[15] + 1236535329 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & s | r & ~s) + t[1] - 165796510 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[6] - 1069501632 | 0) << 9 | s >>> 23) + n | 0) & i | n & ~i) + t[11] + 643717713 | 0) << 14 | r >>> 18) + s | 0) & n | s & ~n) + t[0] - 373897302 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & s | r & ~s) + t[5] - 701558691 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[10] + 38016083 | 0) << 9 | s >>> 23) + n | 0) & i | n & ~i) + t[15] - 660478335 | 0) << 14 | r >>> 18) + s | 0) & n | s & ~n) + t[4] - 405537848 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & s | r & ~s) + t[9] + 568446438 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[14] - 1019803690 | 0) << 9 | s >>> 23) + n | 0) & i | n & ~i) + t[3] - 187363961 | 0) << 14 | r >>> 18) + s | 0) & n | s & ~n) + t[8] + 1163531501 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i & s | r & ~s) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[2] - 51403784 | 0) << 9 | s >>> 23) + n | 0) & i | n & ~i) + t[7] + 1735328473 | 0) << 14 | r >>> 18) + s | 0) & n | s & ~n) + t[12] - 1926607734 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i ^ r ^ s) + t[5] - 378558 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[8] - 2022574463 | 0) << 11 | s >>> 21) + n | 0) ^ n ^ i) + t[11] + 1839030562 | 0) << 16 | r >>> 16) + s | 0) ^ s ^ n) + t[14] - 35309556 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i ^ r ^ s) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[4] + 1272893353 | 0) << 11 | s >>> 21) + n | 0) ^ n ^ i) + t[7] - 155497632 | 0) << 16 | r >>> 16) + s | 0) ^ s ^ n) + t[10] - 1094730640 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i ^ r ^ s) + t[13] + 681279174 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[0] - 358537222 | 0) << 11 | s >>> 21) + n | 0) ^ n ^ i) + t[3] - 722521979 | 0) << 16 | r >>> 16) + s | 0) ^ s ^ n) + t[6] + 76029189 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((s = ((s += ((n = ((n += (i ^ r ^ s) + t[9] - 640364487 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[12] - 421815835 | 0) << 11 | s >>> 21) + n | 0) ^ n ^ i) + t[15] + 530742520 | 0) << 16 | r >>> 16) + s | 0) ^ s ^ n) + t[2] - 995338651 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((s = ((s += (i ^ ((n = ((n += (r ^ (i | ~s)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[7] + 1126891415 | 0) << 10 | s >>> 22) + n | 0) ^ ((r = ((r += (n ^ (s | ~i)) + t[14] - 1416354905 | 0) << 15 | r >>> 17) + s | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((s = ((s += (i ^ ((n = ((n += (r ^ (i | ~s)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[3] - 1894986606 | 0) << 10 | s >>> 22) + n | 0) ^ ((r = ((r += (n ^ (s | ~i)) + t[10] - 1051523 | 0) << 15 | r >>> 17) + s | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((s = ((s += (i ^ ((n = ((n += (r ^ (i | ~s)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[15] - 30611744 | 0) << 10 | s >>> 22) + n | 0) ^ ((r = ((r += (n ^ (s | ~i)) + t[6] - 1560198380 | 0) << 15 | r >>> 17) + s | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((s = ((s += (i ^ ((n = ((n += (r ^ (i | ~s)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[11] - 1120210379 | 0) << 10 | s >>> 22) + n | 0) ^ ((r = ((r += (n ^ (s | ~i)) + t[2] + 718787259 | 0) << 15 | r >>> 17) + s | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | i >>> 11) + r | 0, e[0] = n + e[0] | 0, e[1] = i + e[1] | 0, e[2] = r + e[2] | 0, e[3] = s + e[3] | 0
        }

        function i(e) {
            var t, n = [];
            for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
            return n
        }

        function r(e) {
            var t, n = [];
            for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
            return n
        }

        function s(e) {
            var t, r, s, o, a, c, l = e.length,
                u = [1732584193, -271733879, -1732584194, 271733878];
            for (t = 64; t <= l; t += 64) n(u, i(e.substring(t - 64, t)));
            for (r = (e = e.substring(t - 64)).length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < r; t += 1) s[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
            if (s[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                for (n(u, s), t = 0; t < 16; t += 1) s[t] = 0;
            return o = (o = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), c = parseInt(o[1], 16) || 0, s[14] = a, s[15] = c, n(u, s), u
        }

        function o(e) {
            var n, i = "";
            for (n = 0; n < 4; n += 1) i += t[e >> 8 * n + 4 & 15] + t[e >> 8 * n & 15];
            return i
        }

        function a(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t] = o(e[t]);
            return e.join("")
        }

        function c(e) {
            return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
        }

        function l(e) {
            var t, n = [],
                i = e.length;
            for (t = 0; t < i - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
            return String.fromCharCode.apply(String, n)
        }

        function u() {
            this.reset()
        }
        return a(s("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
            function t(e, t) {
                return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
            }
            ArrayBuffer.prototype.slice = function(n, i) {
                var r, s, o, a, c = this.byteLength,
                    l = t(n, c),
                    u = c;
                return i !== e && (u = t(i, c)), l > u ? new ArrayBuffer(0) : (r = u - l, s = new ArrayBuffer(r), o = new Uint8Array(s), a = new Uint8Array(this, l, r), o.set(a), s)
            }
        }(), u.prototype.append = function(e) {
            return this.appendBinary(c(e)), this
        }, u.prototype.appendBinary = function(e) {
            this._buff += e, this._length += e.length;
            var t, r = this._buff.length;
            for (t = 64; t <= r; t += 64) n(this._hash, i(this._buff.substring(t - 64, t)));
            return this._buff = this._buff.substring(t - 64), this
        }, u.prototype.end = function(e) {
            var t, n, i = this._buff,
                r = i.length,
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < r; t += 1) s[t >> 2] |= i.charCodeAt(t) << (t % 4 << 3);
            return this._finish(s, r), n = a(this._hash), e && (n = l(n)), this.reset(), n
        }, u.prototype.reset = function() {
            return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
        }, u.prototype.getState = function() {
            return {
                buff: this._buff,
                length: this._length,
                hash: this._hash.slice()
            }
        }, u.prototype.setState = function(e) {
            return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
        }, u.prototype.destroy = function() {
            delete this._hash, delete this._buff, delete this._length
        }, u.prototype._finish = function(e, t) {
            var i, r, s, o = t;
            if (e[o >> 2] |= 128 << (o % 4 << 3), o > 55)
                for (n(this._hash, e), o = 0; o < 16; o += 1) e[o] = 0;
            i = (i = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(i[2], 16), s = parseInt(i[1], 16) || 0, e[14] = r, e[15] = s, n(this._hash, e)
        }, u.hash = function(e, t) {
            return u.hashBinary(c(e), t)
        }, u.hashBinary = function(e, t) {
            var n = a(s(e));
            return t ? l(n) : n
        }, u.ArrayBuffer = function() {
            this.reset()
        }, u.ArrayBuffer.prototype.append = function(e) {
            var t, i, s, o, a, c = (i = this._buff.buffer, s = e, o = !0, (a = new Uint8Array(i.byteLength + s.byteLength)).set(new Uint8Array(i)), a.set(new Uint8Array(s), i.byteLength), o ? a : a.buffer),
                l = c.length;
            for (this._length += e.byteLength, t = 64; t <= l; t += 64) n(this._hash, r(c.subarray(t - 64, t)));
            return this._buff = t - 64 < l ? new Uint8Array(c.buffer.slice(t - 64)) : new Uint8Array(0), this
        }, u.ArrayBuffer.prototype.end = function(e) {
            var t, n, i = this._buff,
                r = i.length,
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < r; t += 1) s[t >> 2] |= i[t] << (t % 4 << 3);
            return this._finish(s, r), n = a(this._hash), e && (n = l(n)), this.reset(), n
        }, u.ArrayBuffer.prototype.reset = function() {
            return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
        }, u.ArrayBuffer.prototype.getState = function() {
            var e, t = u.prototype.getState.call(this);
            return t.buff = (e = t.buff, String.fromCharCode.apply(null, new Uint8Array(e))), t
        }, u.ArrayBuffer.prototype.setState = function(e) {
            return e.buff = function(e, t) {
                var n, i = e.length,
                    r = new ArrayBuffer(i),
                    s = new Uint8Array(r);
                for (n = 0; n < i; n += 1) s[n] = e.charCodeAt(n);
                return t ? s : r
            }(e.buff, !0), u.prototype.setState.call(this, e)
        }, u.ArrayBuffer.prototype.destroy = u.prototype.destroy, u.ArrayBuffer.prototype._finish = u.prototype._finish, u.ArrayBuffer.hash = function(e, t) {
            var i = a(function(e) {
                var t, i, s, o, a, c, l = e.length,
                    u = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= l; t += 64) n(u, r(e.subarray(t - 64, t)));
                for (e = t - 64 < l ? e.subarray(t - 64) : new Uint8Array(0), i = e.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < i; t += 1) s[t >> 2] |= e[t] << (t % 4 << 3);
                if (s[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                    for (n(u, s), t = 0; t < 16; t += 1) s[t] = 0;
                return o = (o = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), c = parseInt(o[1], 16) || 0, s[14] = a, s[15] = c, n(u, s), u
            }(new Uint8Array(e)));
            return t ? l(i) : i
        }, u
    }()
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (16 !== e.length) return "";

        function t(e, t) {
            return e + t.toString(16).padStart(2, "0")
        }
        return e.slice(0, 4).reduce(t, "") + "-" + e.slice(4, 6).reduce(t, "") + "-" + e.slice(6, 8).reduce(t, "") + "-" + e.slice(8, 10).reduce(t, "") + "-" + e.slice(10).reduce(t, "")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.uuidv4 = void 0, t.uuidv4 = function() {
        if (void 0 === window.crypto) return i(new Uint8Array(16));
        const e = new Uint8Array(16),
            t = Uint8Array.from([parseInt("01000000", 2), parseInt("10000000", 2), parseInt("00001111", 2), parseInt("00111111", 2)]);
        return window.crypto.getRandomValues(e), e[6] = e[6] & t[2] | t[0], e[8] = e[8] & t[3] | t[1], i(e)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(56),
        r = n(57);

    function s() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    t.parse = b, t.resolve = function(e, t) {
        return b(e, !1, !0).resolve(t)
    }, t.resolveObject = function(e, t) {
        return e ? b(e, !1, !0).resolveObject(t) : t
    }, t.format = function(e) {
        r.isString(e) && (e = b(e));
        return e instanceof s ? e.format() : s.prototype.format.call(e)
    }, t.Url = s;
    var o = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        u = ["'"].concat(l),
        d = ["%", "/", "?", ";", "#"].concat(u),
        h = ["/", "?", "#"],
        f = /^[+a-z0-9A-Z_-]{0,63}$/,
        p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        g = {
            javascript: !0,
            "javascript:": !0
        },
        v = {
            javascript: !0,
            "javascript:": !0
        },
        m = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        y = n(58);

    function b(e, t, n) {
        if (e && r.isObject(e) && e instanceof s) return e;
        var i = new s;
        return i.parse(e, t, n), i
    }
    s.prototype.parse = function(e, t, n) {
        if (!r.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var s = e.indexOf("?"),
            a = -1 !== s && s < e.indexOf("#") ? "?" : "#",
            l = e.split(a);
        l[0] = l[0].replace(/\\/g, "/");
        var b = e = l.join(a);
        if (b = b.trim(), !n && 1 === e.split("#").length) {
            var w = c.exec(b);
            if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var _ = o.exec(b);
        if (_) {
            var E = (_ = _[0]).toLowerCase();
            this.protocol = E, b = b.substr(_.length)
        }
        if (n || _ || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var S = "//" === b.substr(0, 2);
            !S || _ && v[_] || (b = b.substr(2), this.slashes = !0)
        }
        if (!v[_] && (S || _ && !m[_])) {
            for (var x, L, k = -1, C = 0; C < h.length; C++) {
                -1 !== (I = b.indexOf(h[C])) && (-1 === k || I < k) && (k = I)
            } - 1 !== (L = -1 === k ? b.lastIndexOf("@") : b.lastIndexOf("@", k)) && (x = b.slice(0, L), b = b.slice(L + 1), this.auth = decodeURIComponent(x)), k = -1;
            for (C = 0; C < d.length; C++) {
                var I; - 1 !== (I = b.indexOf(d[C])) && (-1 === k || I < k) && (k = I)
            } - 1 === k && (k = b.length), this.host = b.slice(0, k), b = b.slice(k), this.parseHost(), this.hostname = this.hostname || "";
            var A = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!A)
                for (var P = this.hostname.split(/\./), O = (C = 0, P.length); C < O; C++) {
                    var B = P[C];
                    if (B && !B.match(f)) {
                        for (var T = "", j = 0, M = B.length; j < M; j++) B.charCodeAt(j) > 127 ? T += "x" : T += B[j];
                        if (!T.match(f)) {
                            var N = P.slice(0, C),
                                D = P.slice(C + 1),
                                R = B.match(p);
                            R && (N.push(R[1]), D.unshift(R[2])), D.length && (b = "/" + D.join(".") + b), this.hostname = N.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), A || (this.hostname = i.toASCII(this.hostname));
            var q = this.port ? ":" + this.port : "",
                V = this.hostname || "";
            this.host = V + q, this.href += this.host, A && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
        }
        if (!g[E])
            for (C = 0, O = u.length; C < O; C++) {
                var z = u[C];
                if (-1 !== b.indexOf(z)) {
                    var F = encodeURIComponent(z);
                    F === z && (F = escape(z)), b = b.split(z).join(F)
                }
            }
        var H = b.indexOf("#"); - 1 !== H && (this.hash = b.substr(H), b = b.slice(0, H));
        var U = b.indexOf("?");
        if (-1 !== U ? (this.search = b.substr(U), this.query = b.substr(U + 1), t && (this.query = y.parse(this.query)), b = b.slice(0, U)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), m[E] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            q = this.pathname || "";
            var G = this.search || "";
            this.path = q + G
        }
        return this.href = this.format(), this
    }, s.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            i = this.hash || "",
            s = !1,
            o = "";
        this.host ? s = e + this.host : this.hostname && (s = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && r.isObject(this.query) && Object.keys(this.query).length && (o = y.stringify(this.query));
        var a = this.search || o && "?" + o || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== s ? (s = "//" + (s || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : s || (s = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), t + s + (n = n.replace(/[?#]/g, (function(e) {
            return encodeURIComponent(e)
        }))) + (a = a.replace("#", "%23")) + i
    }, s.prototype.resolve = function(e) {
        return this.resolveObject(b(e, !1, !0)).format()
    }, s.prototype.resolveObject = function(e) {
        if (r.isString(e)) {
            var t = new s;
            t.parse(e, !1, !0), e = t
        }
        for (var n = new s, i = Object.keys(this), o = 0; o < i.length; o++) {
            var a = i[o];
            n[a] = this[a]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var c = Object.keys(e), l = 0; l < c.length; l++) {
                var u = c[l];
                "protocol" !== u && (n[u] = e[u])
            }
            return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!m[e.protocol]) {
                for (var d = Object.keys(e), h = 0; h < d.length; h++) {
                    var f = d[h];
                    n[f] = e[f]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || v[e.protocol]) n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var g = n.pathname || "",
                    y = n.search || "";
                n.path = g + y
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var b = n.pathname && "/" === n.pathname.charAt(0),
            w = e.host || e.pathname && "/" === e.pathname.charAt(0),
            _ = w || b || n.host && e.pathname,
            E = _,
            S = n.pathname && n.pathname.split("/") || [],
            x = (p = e.pathname && e.pathname.split("/") || [], n.protocol && !m[n.protocol]);
        if (x && (n.hostname = "", n.port = null, n.host && ("" === S[0] ? S[0] = n.host : S.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), _ = _ && ("" === p[0] || "" === S[0])), w) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, S = p;
        else if (p.length) S || (S = []), S.pop(), S = S.concat(p), n.search = e.search, n.query = e.query;
        else if (!r.isNullOrUndefined(e.search)) {
            if (x) n.hostname = n.host = S.shift(), (A = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = A.shift(), n.host = n.hostname = A.shift());
            return n.search = e.search, n.query = e.query, r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!S.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var L = S.slice(-1)[0], k = (n.host || e.host || S.length > 1) && ("." === L || ".." === L) || "" === L, C = 0, I = S.length; I >= 0; I--) "." === (L = S[I]) ? S.splice(I, 1) : ".." === L ? (S.splice(I, 1), C++) : C && (S.splice(I, 1), C--);
        if (!_ && !E)
            for (; C--; C) S.unshift("..");
        !_ || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""), k && "/" !== S.join("/").substr(-1) && S.push("");
        var A, P = "" === S[0] || S[0] && "/" === S[0].charAt(0);
        x && (n.hostname = n.host = P ? "" : S.length ? S.shift() : "", (A = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = A.shift(), n.host = n.hostname = A.shift()));
        return (_ = _ || n.host && S.length) && !P && S.unshift(""), S.length ? n.pathname = S.join("/") : (n.pathname = null, n.path = null), r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, s.prototype.parseHost = function() {
        var e = this.host,
            t = a.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t, n) {
    var i = n(16),
        r = n(7);

    function s(e, t) {
        this.id = e, this.ref = t
    }
    e.exports.SchemaScanResult = s, e.exports.scan = function(e, t) {
        function n(e, t) {
            if (t && "object" == typeof t)
                if (t.$ref) {
                    var s = i.resolve(e, t.$ref);
                    l[s] = l[s] ? l[s] + 1 : 0
                } else {
                    var u = t.id ? i.resolve(e, t.id) : e;
                    if (u) {
                        if (u.indexOf("#") < 0 && (u += "#"), c[u]) {
                            if (!r.deepCompareStrict(c[u], t)) throw new Error("Schema <" + t + "> already exists with different definition");
                            return c[u]
                        }
                        c[u] = t, "#" == u[u.length - 1] && (c[u.substring(0, u.length - 1)] = t)
                    }
                    o(u + "/items", Array.isArray(t.items) ? t.items : [t.items]), o(u + "/extends", Array.isArray(t.extends) ? t.extends : [t.extends]), n(u + "/additionalItems", t.additionalItems), a(u + "/properties", t.properties), n(u + "/additionalProperties", t.additionalProperties), a(u + "/definitions", t.definitions), a(u + "/patternProperties", t.patternProperties), a(u + "/dependencies", t.dependencies), o(u + "/disallow", t.disallow), o(u + "/allOf", t.allOf), o(u + "/anyOf", t.anyOf), o(u + "/oneOf", t.oneOf), n(u + "/not", t.not)
                }
        }

        function o(e, t) {
            if (Array.isArray(t))
                for (var i = 0; i < t.length; i++) n(e + "/" + i, t[i])
        }

        function a(e, t) {
            if (t && "object" == typeof t)
                for (var i in t) n(e + "/" + i, t[i])
        }
        var c = {},
            l = {};
        return n(e, t), new s(c, l)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.groupingMenu = t.clefActionContents = t.splitActionContents = t.custosActionContents = t.defaultSylActionContents = t.defaultActionContents = t.staffActionContents = t.neumeActionContents = t.ncActionContents = t.editControlsPanel = t.insertControlsPanel = t.insertTabHtml = void 0, t.insertTabHtml = {
        primitiveTab: "<p class='control'><button id='punctum' class='button insertel smallel' aria-label='punctum' title='punctum'><img src='/neonSchenker3/Neon-gh/assets/img/punctum.png' class='image'/></button></p><p class='control'><button id='virga' class='button insertel smallel' aria-label='virga' title='virga'><img src='/Neon/Neon-gh/assets/img/virga.png' class='image'/></button></p><p class='control'><button id='virgaReversed' class='button insertel smallel' aria-label='Reversed Virga' title='Reversed Virga'><img src='/Neon/Neon-gh/assets/img/virga_reversed.png' class='image'/></button></p><p class='control'><button id='diamond' class='button insertel smallel' aria-label='inclinatum' title='inclinatum'><img src='/Neon/Neon-gh/assets/img/diamond.png' class='image'/></button></p><p class='control'><button id='custos' class='button insertel smallel' aria-label='custos' title='custos'><img src='/Neon/Neon-gh/assets/img/custos.png' class='image'/></button></p><p class='control'><button id='cClef' class='button insertel smallel' aria-label='C Clef' title=' C Clef'><img src='/Neon/Neon-gh/assets/img/cClef.png' class='image' /></button></p><p class='control'><button id='fClef' class='button insertel smallel' aria-label='F Clef' title='F Clef'><img src='/Neon/Neon-gh/assets/img/fClef.png' class='image'/></button></p><p class='control'><button id='liquescentA' class='button insertel smallel' aria-label='Liquescent A' title='Liquescent A'><img src='/Neon/Neon-gh/assets/img/liquescentA.png' class='image'/></button></p><p class='control'><button id='liquescentC' class='button insertel smallel' aria-label='Liquescent C' title='Liquescent C'><img src='/Neon/Neon-gh/assets/img/liquescentC.png' class='image'/></button></p><p class='control'><button id='flat' class='button insertel smallel' aria-label='Flat' title='Flat'><img src='/Neon/Neon-gh/assets/img/accidFlat.png' class='image'/></button></p><p class='control'><button id='natural' class='button insertel smallel' aria-label='Natural' title='Natural'><img src='/Neon/Neon-gh/assets/img/accidNatural.png' class='image'/></button></p>",
        groupingTab: "<p class='control'><button id='pes' class='button insertel smallel' aria-label='pes' title='pes'><img src='/Neon/Neon-gh/assets/img/pes.png' class='image'/></button></p><p class='control'><button id='clivis' class='button insertel smallel' aria-label='clivis' title='clivis'><img src='/Neon/Neon-gh/assets/img/clivis.png' class='image'/></button></p><p class='control'><button id='scandicus' class='button insertel smallel' aria-label='scandicus' title='scandicus'><img src='/Neon/Neon-gh/assets/img/scandicus.png' class='image'/></button></p><p class='control'><button id='climacus' class='button insertel smallel' aria-label='climacus' title='climacus'><img src='/Neon/Neon-gh/assets/img/climacus.png' class='image'/></button></p><p class='control'><button id='torculus' class='button insertel smallel' aria-label='toculus' title='toculus'><img src='/Neon/Neon-gh/assets/img/torculus.png' class='image'/></button></p><p class='control'><button id='porrectus' class='button insertel smallel' aria-label='porrectus' title='porrectus'><img src='/Neon/Neon-gh/assets/img/porrectus.png' class='image'/></button></p><p class='control'><button id='pressus' class='button insertel smallel' aria-label='pressus' title='pressus'><img src='/Neon/Neon-gh/assets/img/pressus.png' class='image'/></button></p>",
        systemTab: "<p class='control'><button id='staff' class='button insertel longel' aria-label='system' title='system'><img src='/Neon/Neon-gh/assets/img/staff.png' class='image' /></button></p><p>Click upper left and lower right corners of new staff.</p>"
    }, t.insertControlsPanel = "<p class='panel-heading' id='insertMenu'>Insert<svg class='icon is-pulled-right'><use id='toggleInsert' xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></p><div id='insertContents' style='overflow-y: hidden;'><p class='panel-tabs'><a id='primitiveTab' class='insertTab'>Primitive Elements</a><a id='groupingTab' class='insertTab'>Grouping</a><a id='systemTab' class='insertTab'>System</a></p><a class='panel-block has-text-centered'><div id='insert_data' class='field is-grouped buttons'></div></a></div>", t.editControlsPanel = "<p class='panel-heading' id='editMenu'>Edit<svg class='icon is-pulled-right'><use id='toggleEdit' xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></p><div id='editContents'><a class='panel-block'><label>Select By:&nbsp;</label><div class='field has-addons buttons' style='overflow-x: auto;'><p class='control'><button class='button sel-by is-active' id='selBySyl'>Syllable</button></p><p class='control'><button class='button sel-by' id='selByNeume'>Neume</button></p><p class='control'><button class='button sel-by' id='selByNc'>Neume Component</button></p><p class='control'><button class='button sel-by' id='selByStaff'>Staff</button></p><p class='control'><button class='button sel-by' id='selByLayerElement'>Layer Element</button></p></div></a><div class='field is-grouped buttons'><p class='control'><a id='moreEdit' class='panel-block is-invisible'><a id='extraEdit' class='panel-block is-invisible'><a id='neumeEdit' class='panel-block is-invisible'></div>", t.ncActionContents = "<label>Change Head Shape:&nbsp;</label><div id='drop_select' class='dropdown'><div class='dropdown-trigger'><button id='select-options' class='button' aria-haspopup='true' aria-controls='dropdown-menu'><span>Head Shapes</span><svg class='icon'><use xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></button></div><div class='dropdown-menu' id='dropdown-menu' role='menu'><div class='dropdown-content'><a id='Punctum' class='dropdown-item'>Punctum</a><a id='Virga' class='dropdown-item'>Virga</a><a id='VirgaReversed' class='dropdown-item'>Reversed Virga</a><a id='LiquescentClockwise' class='dropdown-item'>Liquescent C</a><a id='LiquescentAnticlockwise' class='dropdown-item'>Liquescent A</a><a id='Inclinatum' class='dropdown-item'>Inclinatum</a></div></div></div><p class='control'></p></div>", t.neumeActionContents = "<label>Change Grouping:&nbsp;</label><div id='drop_select' class='dropdown'><div class='dropdown-trigger'><button id='select-options' class='button' aria-haspopup='true' aria-controls='dropdown-menu'><span>Groupings</span><svg class='icon'><use xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></button></div><div class='dropdown-menu' id='dropdown-menu' role='menu'><div class='dropdown-content scrollable-dropdown'><a id='Pes' class='dropdown-item grouping'>Pes</a><a id='Pes subpunctis' class='dropdown-item grouping'>Pes Subpunctis</a><a id='Clivis' class='dropdown-item grouping'>Clivis</a><a id='Scandicus' class='dropdown-item grouping'>Scandicus</a><a id='Scandicus flexus' class='dropdown-item grouping'>Scandicus Flexus</a><a id='Scandicus subpunctis' class='dropdown-item grouping'>Scandicus Subpunctis</a><a id='Climacus' class='dropdown-item grouping'>Climacus</a><a id='Climacus resupinus' class='dropdown-item grouping'>Climacus Resupinus</a><a id='Torculus' class='dropdown-item grouping'>Torculus</a><a id='Torculus resupinus' class='dropdown-item grouping'>Torculus Resupinus</a><a id='Porrectus' class='dropdown-item grouping'>Porrectus</a><a id='Porrectus flexus' class='dropdown-item grouping'>Porrectus Flexus</a><a id='Porrectus subpunctis' class='dropdown-item grouping'>Porrectus Subpunctis</a><a id='Pressus' class='dropdown-item grouping'>Pressus</a></div></div></div><div><p class='control'><button class='button' id='ungroupNcs'>Ungroup</button></p></div>", t.staffActionContents = "<label>Merge Systems:&nbsp;</label><div><p class='control'><button id='merge-systems' class='button'>Merge</button><button class='button' id='delete'>Delete</button></p></div>", t.defaultActionContents = "<div><p class='control'><button class='button' id='delete'>Delete</button></p></div>", t.defaultSylActionContents = "<div><p class='control'><button class='button' id='delete'>Delete</button><button class='button' id='changeStaff'>Re-associate to nearest staff</button></p></div>", t.custosActionContents = "<div><p class='control'><button class='button' id='delete'>Delete</button><button class='button' id='changeStaff'>Re-associate to nearest staff</button></p></div>", t.splitActionContents = "<label>Split System:&nbsp;</label><div><p class='control'><button id='split-system' class='button'>Split</button><button id='reset-rotate' class='button'>Reset Rotate</button><button class='button' id='delete'>Delete</button></p></div>", t.clefActionContents = "<label>Change Clef Shape:&nbsp;</label><div id='drop_select' class='dropdown'><div class='dropdown-trigger'overflow='auto'><button id='select-options' class='button' aria-haspopup='true' aria-controls='dropdown-menu'><span>Clef Shapes</span><svg class='icon'><use xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></button></div><div class='dropdown-menu' id='dropdown-menu' role='menu'><div class='dropdown-content'><a id='CClef' class='dropdown-item'>C Clef</a><a id='FClef' class='dropdown-item'>F Clef</a></div></div></div></div>", t.groupingMenu = {
        nc: "<div class='field is-grouped'><div><p class='control'><button class='button' id='groupNcs'>Group Neume Components</button><button class='button' id='delete'>Delete</button></p></div>",
        neume: "<div class='field is-grouped'><div><p class='control'><button class='button' id='groupNeumes'>Group Neumes</button><button class='button' id='delete'>Delete</button></p></div>",
        syl: "<div class='field is-grouped'><div><p class='control'><button class='button' id='mergeSyls'>Merge Syllables</button><button class='button' id='delete'>Delete</button><button class='button' id='changeStaff'>Re-associate to nearest staff</button></p></div>",
        ligatureNc: "<div class='field is-grouped'><div><p class='control'><button class='button' id='groupNcs'>Group Neume Components</button></p></div><div><p class='control'><button class='button' id='toggle-ligature'>Toggle Ligature</button><button class='button' id='delete'>Delete</button></p></div></div>",
        ligature: "<div class='field is-grouped'><div><p class='control'><button class='button' id='toggle-ligature'>Toggle Ligature</button><button class='button' id='delete'>Delete</button></p></div></div>",
        splitSyllable: "<div class='field is-grouped'><div><p class='control'><button class='button' id='toggle-link'>Toggle Linked Syllables</button><button class='button' id='delete'>Delete</button></p></div></div>"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.dragSelect = t.clickSelect = t.setSelectHelperObjects = t.setSelectStrokeWidth = void 0;
    const i = n(4),
        r = n(37),
        s = n(3);
    let o, a, c, l, u = 7;

    function d(e) {
        "Escape" === e.key && (document.getElementsByClassName("selected").length > 0 && c.infoListeners(), i.unselect())
    }

    function h() {
        const e = document.getElementById("selByBBox");
        return !!e && e.classList.contains("is-active")
    }

    function f(e) {
        e.stopPropagation()
    }

    function p(e) {
        if (!a) return;
        if ("insert" !== a.getUserMode() && !e.shiftKey)
            if ("use" === this.tagName && "selByBBox" !== i.getSelectionType())
                if (null === this.closest(".selected")) {
                    let t = [this];
                    const n = /E9B[45678]/,
                        r = /E9B[9ABC]/;
                    if (this.getAttribute("xlink:href").match(r)) {
                        const e = this.closest(".nc"),
                            i = this.closest(".neume"),
                            r = Array.from(i.children).indexOf(e),
                            s = i.children[r - 1].children[0];
                        console.assert(s.getAttribute("xlink:href").match(n), "First glyph of ligature unexpected!"), null === s.closest(".selected") && t.unshift(s)
                    } else if (this.getAttribute("xlink:href").match(n)) {
                        const e = this.closest(".nc"),
                            n = this.closest(".neume"),
                            i = Array.from(n.children).indexOf(e),
                            s = n.children[i + 1].children[0];
                        console.assert(s.getAttribute("xlink:href").match(r), "Second glyph of ligature unexpected!"), null === s.closest(".selected") && t.push(s)
                    }(window.navigator.userAgent.match(/Mac/) ? e.metaKey : e.ctrlKey) && (t = t.concat(Array.from(document.getElementsByClassName("selected")))), i.selectAll(t, a, o), o && o.dragInit()
                } else {
                    let t = [];
                    if (window.navigator.userAgent.match(/Mac/) ? e.metaKey : e.ctrlKey) {
                        let e = "";
                        switch (document.querySelector(".sel-by.is-active").id) {
                            case "selByStaff":
                                e = ".staff";
                                break;
                            case "selByNeume":
                                e = ".neume";
                                break;
                            case "selByNc":
                                e = ".nc";
                                break;
                            case "selByLayerElement":
                                e = ".accid";
                                break;
                            default:
                                e = ".syllable"
                        }
                        const n = [this.closest(e)];
                        t = Array.from(document.getElementsByClassName("selected")), t = t.filter(e => !n.includes(e)), i.selectAll(t, a, o), o && o.dragInit()
                    }
                }
        else if ("rect" === e.target.tagName && "selByBBox" === i.getSelectionType())
            if (null === this.closest(".selected")) {
                let t = [e.target];
                (window.navigator.userAgent.match(/Mac/) ? e.metaKey : e.ctrlKey) && (t = t.concat(Array.from(document.getElementsByClassName("selected"))), t = t.map(e => "rect" == e.tagName ? e : e.querySelector(".sylTextRect-Display"))), i.selectAll(t, a, o), o && o.dragInit()
            } else {
                let t = [];
                if (window.navigator.userAgent.match(/Mac/) ? e.metaKey : e.ctrlKey) {
                    const e = [this];
                    t = Array.from(document.getElementsByClassName("selected")), t = t.map(e => "rect" == e.tagName ? e : e.querySelector(".sylTextRect-Display")), t = t.filter(t => !e.includes(t)), i.selectAll(t, a, o), o && o.dragInit()
                }
            }
        else {
            if ("selByStaff" !== i.getSelectionType()) return void c.infoListeners();
            const t = document.getElementsByClassName("active-page")[0].getElementsByClassName("definition-scale")[0];
            let n = t.createSVGPoint();
            n.x = e.clientX, n.y = e.clientY;
            const s = t.getElementsByClassName("system")[0].getScreenCTM();
            n = n.matrixTransform(s.inverse());
            const l = Array.from(document.getElementsByClassName("staff")).filter(e => {
                const t = i.getStaffBBox(e),
                    r = t.ulx,
                    s = t.uly,
                    o = t.lrx,
                    a = t.lry,
                    c = t.rotate;
                return n.x > r && n.x < o && n.y > s + (n.x - r) * Math.tan(c) && n.y < a - (o - n.x) * Math.tan(c)
            });
            if (i.unselect(), 0 == l.length) return;
            const u = l[0];
            u.classList.contains("selected") || (i.selectStaff(u, o), r.resize(u, a, o), o && o.dragInit()), u.dispatchEvent(new MouseEvent("mousedown", {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                altKey: e.altKey,
                metaKey: e.metaKey,
                view: e.view
            }))
        }
    }
    t.setSelectStrokeWidth = function(e) {
        u = e
    }, t.setSelectHelperObjects = function(e, t) {
        o = t, a = e, c = a.info, l = a.view.zoomHandler
    }, t.clickSelect = function(e) {
        document.querySelectorAll(e).forEach(e => {
            e.removeEventListener("mousedown", p), e.addEventListener("mousedown", p)
        }), document.body.removeEventListener("keydown", d), document.body.addEventListener("keydown", d), document.getElementById("container").addEventListener("contextmenu", e => {
            e.preventDefault()
        }), document.querySelectorAll("use,rect,#moreEdit").forEach(e => {
            e.removeEventListener("click", f), e.addEventListener("click", f)
        })
    }, t.dragSelect = function(e) {
        let t = 0,
            n = 0,
            r = !1,
            c = !1;
        s.selectAll(e.replace(".active-page", "").trim()).on(".drag", null);
        const d = s.select(e),
            f = s.drag().on("start", (function() {
                if (!a) return;
                const e = a.getUserMode();
                if ("use" !== s.event.sourceEvent.target.nodeName && "insert" !== e && "rect" !== s.event.sourceEvent.target.nodeName) {
                    if (s.event.sourceEvent.shiftKey) r = !0, void 0 !== l && l.startDrag();
                    else if (!document.getElementById("selByStaff").classList.contains("is-active") || function(e) {
                            const t = Array.from(document.getElementsByClassName("staff"));
                            return 0 === t.filter(t => {
                                const n = i.getStaffBBox(t),
                                    r = n.ulx,
                                    s = n.uly,
                                    o = n.lrx,
                                    a = n.lry,
                                    c = n.rotate;
                                return e[0] > r && e[0] < o && e[1] > s + (e[0] - r) * Math.tan(c) && e[1] < a - (o - e[0]) * Math.tan(c)
                            }).length
                        }(s.mouse(this))) {
                        i.unselect(), c = !0;
                        const e = s.mouse(this);
                        t = e[0], n = e[1], o = t, h = n, d.append("rect").attr("x", o).attr("y", h).attr("width", 0).attr("height", 0).attr("id", "selectRect").attr("stroke", "black").attr("stroke-width", u).attr("fill", "none")
                    }
                } else s.event.sourceEvent.shiftKey && (r = !0, void 0 !== l && l.startDrag());
                var o, h
            })).on("drag", (function() {
                if (!r && c) {
                    const e = s.mouse(this),
                        i = e[0],
                        r = e[1];
                    ! function(e, t, n, i) {
                        s.select("#selectRect").attr("x", e).attr("y", t).attr("width", n).attr("height", i)
                    }(i < t ? i : t, r < n ? r : n, i < t ? t - i : i - t, r < n ? n - r : r - n)
                } else r && void 0 !== l && l.dragging()
            })).on("end", (function() {
                if (!r && c) {
                    const t = parseInt(document.getElementById("selectRect").getAttribute("x")),
                        n = parseInt(document.getElementById("selectRect").getAttribute("y")),
                        r = parseInt(document.getElementById("selectRect").getAttribute("x")) + parseInt(document.getElementById("selectRect").getAttribute("width")),
                        l = parseInt(document.getElementById("selectRect").getAttribute("y")) + parseInt(document.getElementById("selectRect").getAttribute("height")),
                        u = d.node();
                    let f = u.createSVGPoint();
                    f.x = t, f.y = n;
                    let p = u.createSVGPoint();
                    p.x = r, p.y = l;
                    const g = u.getScreenCTM().inverse().multiply(d.select(".system").node().getScreenCTM()).inverse();
                    let v;
                    f = f.matrixTransform(g), p = p.matrixTransform(g), v = document.getElementById("selByStaff").classList.contains("is-active") ? document.querySelectorAll(e + " use, " + e + " .staff") : h() ? document.querySelectorAll(e + " .sylTextRect-display") : document.querySelectorAll(e + " use");
                    const m = Array.from(v).filter((function(e) {
                        let t, n, r, s;
                        if (h()) return t = Number(e.getAttribute("x")), n = Number(e.getAttribute("y")), r = +t + +e.getAttribute("width").slice(0, -2), s = +n + +e.getAttribute("height").slice(0, -2), !(f.x < t && p.x < t || f.x > r && p.x > r || f.y < n && p.y < n || f.y > s && p.y > s);
                        if ("use" === e.tagName) {
                            const i = e.parentNode.getBBox();
                            return t = i.x, n = i.y, r = i.x + i.width, s = i.y + i.height, !(f.x < t && p.x < t || f.x > r && p.x > r || f.y < n && p.y < n || f.y > s && p.y > s)
                        } {
                            const t = i.getStaffBBox(e);
                            return !(f.x < t.ulx && p.x < t.ulx || f.x > t.lrx && p.x > t.lrx || f.y < t.uly + Math.abs(t.ulx - f.x) * Math.tan(t.rotate) && p.y < t.uly + Math.abs(t.ulx - f.x) * Math.tan(t.rotate) || f.y > t.lry + Math.abs(t.lry - p.y) * Math.tan(t.rotate) && p.y > t.lry + Math.abs(t.lry - p.y) * Math.tan(t.rotate))
                        }
                    }));
                    m.forEach(e => {
                        if ("use" === e.tagName && e.getAttribute("xlink:href").match(/E9B[456789ABC]/)) {
                            const t = e.closest(".neume"),
                                n = Array.from(t.children).indexOf(e.closest(".nc"));
                            if (e.getAttribute("xlink:href").match(/E9B[45678]/)) {
                                const e = t.children[n + 1].querySelector("use");
                                m.indexOf(e) < 0 && m.push(e)
                            } else {
                                const e = t.children[n - 1].querySelector("use");
                                m.indexOf(e) < 0 && m.push(e)
                            }
                        }
                    }), i.selectAll(m, a, o), o && o.dragInit(), s.selectAll("#selectRect").remove(), c = !1
                }
                r = !1
            }));
        d.call(f), o && o.resetTo(f)
    }
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            var i, r, s = n(2),
                o = n.n(s),
                a = n(39),
                c = n(14),
                l = n.n(c),
                u = n(22),
                d = n.n(u),
                h = n(5),
                f = n.n(h),
                p = n(1),
                g = n.n(p),
                v = n(0),
                m = n.n(v);

            function y(e) {
                return "$" + e
            }

            function b(e) {
                return e.substring(1)
            }

            function w() {
                this._store = {}
            }

            function _(e) {
                if (this._store = new w, e && Array.isArray(e))
                    for (var t = 0, n = e.length; t < n; t++) this.add(e[t])
            }

            function E(e) {
                if (e instanceof ArrayBuffer) return function(e) {
                    if ("function" == typeof e.slice) return e.slice(0);
                    var t = new ArrayBuffer(e.byteLength),
                        n = new Uint8Array(t),
                        i = new Uint8Array(e);
                    return n.set(i), t
                }(e);
                var t = e.size,
                    n = e.type;
                return "function" == typeof e.slice ? e.slice(0, t, n) : e.webkitSlice(0, t, n)
            }
            w.prototype.get = function(e) {
                var t = y(e);
                return this._store[t]
            }, w.prototype.set = function(e, t) {
                var n = y(e);
                return this._store[n] = t, !0
            }, w.prototype.has = function(e) {
                return y(e) in this._store
            }, w.prototype.delete = function(e) {
                var t = y(e),
                    n = t in this._store;
                return delete this._store[t], n
            }, w.prototype.forEach = function(e) {
                for (var t = Object.keys(this._store), n = 0, i = t.length; n < i; n++) {
                    var r = t[n];
                    e(this._store[r], r = b(r))
                }
            }, Object.defineProperty(w.prototype, "size", {
                get: function() {
                    return Object.keys(this._store).length
                }
            }), _.prototype.add = function(e) {
                return this._store.set(e, !0)
            }, _.prototype.has = function(e) {
                return this._store.has(e)
            }, _.prototype.forEach = function(e) {
                this._store.forEach((function(t, n) {
                    e(n)
                }))
            }, Object.defineProperty(_.prototype, "size", {
                get: function() {
                    return this._store.size
                }
            }), ! function() {
                if ("undefined" == typeof Symbol || "undefined" == typeof Map || "undefined" == typeof Set) return !1;
                var e = Object.getOwnPropertyDescriptor(Map, Symbol.species);
                return e && "get" in e && Map[Symbol.species] === Map
            }() ? (i = _, r = w) : (i = Set, r = Map);
            var S = Function.prototype.toString,
                x = S.call(Object);

            function L(e) {
                var t, n, i;
                if (!e || "object" != typeof e) return e;
                if (Array.isArray(e)) {
                    for (t = [], n = 0, i = e.length; n < i; n++) t[n] = L(e[n]);
                    return t
                }
                if (e instanceof Date) return e.toISOString();
                if (function(e) {
                        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer || "undefined" != typeof Blob && e instanceof Blob
                    }(e)) return E(e);
                if (! function(e) {
                        var t = Object.getPrototypeOf(e);
                        if (null === t) return !0;
                        var n = t.constructor;
                        return "function" == typeof n && n instanceof n && S.call(n) == x
                    }(e)) return e;
                for (n in t = {}, e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = L(e[n]);
                        void 0 !== r && (t[n] = r)
                    }
                return t
            }

            function k(e) {
                var t = !1;
                return f()((function(n) {
                    if (t) throw new Error("once called more than once");
                    t = !0, e.apply(this, n)
                }))
            }

            function C(e) {
                return f()((function(t) {
                    t = L(t);
                    var n = this,
                        i = "function" == typeof t[t.length - 1] && t.pop(),
                        r = new Promise((function(i, r) {
                            var s;
                            try {
                                var o = k((function(e, t) {
                                    e ? r(e) : i(t)
                                }));
                                t.push(o), (s = e.apply(n, t)) && "function" == typeof s.then && i(s)
                            } catch (e) {
                                r(e)
                            }
                        }));
                    return i && r.then((function(e) {
                        i(null, e)
                    }), i), r
                }))
            }

            function I(e, t) {
                return C(f()((function(n) {
                    if (this._closed) return Promise.reject(new Error("database is closed"));
                    if (this._destroyed) return Promise.reject(new Error("database is destroyed"));
                    var i = this;
                    return function(e, t, n) {
                        if (e.constructor.listeners("debug").length) {
                            for (var i = ["api", e.name, t], r = 0; r < n.length - 1; r++) i.push(n[r]);
                            e.constructor.emit("debug", i);
                            var s = n[n.length - 1];
                            n[n.length - 1] = function(n, i) {
                                var r = ["api", e.name, t];
                                r = r.concat(n ? ["error", n] : ["success", i]), e.constructor.emit("debug", r), s(n, i)
                            }
                        }
                    }(i, e, n), this.taskqueue.isReady ? t.apply(this, n) : new Promise((function(t, r) {
                        i.taskqueue.addTask((function(s) {
                            s ? r(s) : t(i[e].apply(i, n))
                        }))
                    }))
                })))
            }

            function A(e, t) {
                for (var n = {}, i = 0, r = t.length; i < r; i++) {
                    var s = t[i];
                    s in e && (n[s] = e[s])
                }
                return n
            }
            var P;

            function O(e) {
                return e
            }

            function B(e) {
                return [{
                    ok: e
                }]
            }

            function T(e, t, n) {
                var i = t.docs,
                    s = new r;
                i.forEach((function(e) {
                    s.has(e.id) ? s.get(e.id).push(e) : s.set(e.id, [e])
                }));
                var o = s.size,
                    a = 0,
                    c = new Array(o);

                function l() {
                    var e;
                    ++a === o && (e = [], c.forEach((function(t) {
                        t.docs.forEach((function(n) {
                            e.push({
                                id: t.id,
                                docs: [n]
                            })
                        }))
                    })), n(null, {
                        results: e
                    }))
                }
                var u = [];
                s.forEach((function(e, t) {
                    u.push(t)
                }));
                var d = 0;

                function h() {
                    if (!(d >= u.length)) {
                        var n = Math.min(d + 6, u.length),
                            i = u.slice(d, n);
                        ! function(n, i) {
                            n.forEach((function(n, r) {
                                var o = i + r,
                                    a = s.get(n),
                                    u = A(a[0], ["atts_since", "attachments"]);
                                u.open_revs = a.map((function(e) {
                                    return e.rev
                                })), u.open_revs = u.open_revs.filter(O);
                                var d = O;
                                0 === u.open_revs.length && (delete u.open_revs, d = B), ["revs", "attachments", "binary", "ajax", "latest"].forEach((function(e) {
                                    e in t && (u[e] = t[e])
                                })), e.get(n, u, (function(e, t) {
                                    var i, r, s;
                                    i = e ? [{
                                        error: e
                                    }] : d(t), r = n, s = i, c[o] = {
                                        id: r,
                                        docs: s
                                    }, l(), h()
                                }))
                            }))
                        }(i, d), d += i.length
                    }
                }
                h()
            }
            try {
                localStorage.setItem("_pouch_check_localstorage", 1), P = !!localStorage.getItem("_pouch_check_localstorage")
            } catch (e) {
                P = !1
            }

            function j() {
                return P
            }

            function M() {
                m.a.call(this), this._listeners = {},
                    function(e) {
                        j() && addEventListener("storage", (function(t) {
                            e.emit(t.key)
                        }))
                    }(this)
            }

            function N(e) {
                if ("undefined" != typeof console && "function" == typeof console[e]) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    console[e].apply(console, t)
                }
            }

            function D(e) {
                var t = 0;
                return e || (t = 2e3),
                    function(e, t) {
                        return e = parseInt(e, 10) || 0, (t = parseInt(t, 10)) != t || t <= e ? t = (e || 1) << 1 : t += 1, t > 6e5 && (e = 3e5, t = 6e5), ~~((t - e) * Math.random() + e)
                    }(e, t)
            }

            function R(e, t) {
                N("info", "The above " + e + " is totally normal. " + t)
            }
            g()(M, m.a), M.prototype.addListener = function(e, t, n, i) {
                if (!this._listeners[t]) {
                    var r = this,
                        s = !1;
                    this._listeners[t] = a, this.on(e, a)
                }

                function a() {
                    if (r._listeners[t])
                        if (s) s = "waiting";
                        else {
                            s = !0;
                            var e = A(i, ["style", "include_docs", "attachments", "conflicts", "filter", "doc_ids", "view", "since", "query_params", "binary", "return_docs"]);
                            n.changes(e).on("change", (function(e) {
                                e.seq > i.since && !i.cancelled && (i.since = e.seq, i.onChange(e))
                            })).on("complete", (function() {
                                "waiting" === s && o()(a), s = !1
                            })).on("error", (function() {
                                s = !1
                            }))
                        }
                }
            }, M.prototype.removeListener = function(e, t) {
                t in this._listeners && (m.a.prototype.removeListener.call(this, e, this._listeners[t]), delete this._listeners[t])
            }, M.prototype.notifyLocalWindows = function(e) {
                j() && (localStorage[e] = "a" === localStorage[e] ? "b" : "a")
            }, M.prototype.notify = function(e) {
                this.emit(e), this.notifyLocalWindows(e)
            };
            var q = "function" == typeof Object.assign ? Object.assign : function(e) {
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (null != i)
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            };

            function V(e, t, n) {
                Error.call(this, n), this.status = e, this.name = t, this.message = n, this.error = !0
            }
            g()(V, Error), V.prototype.toString = function() {
                return JSON.stringify({
                    status: this.status,
                    name: this.name,
                    message: this.message,
                    reason: this.reason
                })
            };
            new V(401, "unauthorized", "Name or password is incorrect.");
            var z = new V(400, "bad_request", "Missing JSON list of 'docs'"),
                F = new V(404, "not_found", "missing"),
                H = new V(409, "conflict", "Document update conflict"),
                U = new V(400, "bad_request", "_id field must contain a string"),
                G = new V(412, "missing_id", "_id is required for puts"),
                $ = new V(400, "bad_request", "Only reserved document ids may start with underscore."),
                Z = (new V(412, "precondition_failed", "Database not open"), new V(500, "unknown_error", "Database encountered an unknown error")),
                W = new V(500, "badarg", "Some query argument is invalid"),
                K = (new V(400, "invalid_request", "Request was invalid"), new V(400, "query_parse_error", "Some query parameter is invalid")),
                Y = new V(500, "doc_validation", "Bad special document member"),
                J = new V(400, "bad_request", "Something wrong with the request"),
                X = new V(400, "bad_request", "Document must be a JSON object"),
                Q = (new V(404, "not_found", "Database not found"), new V(500, "indexed_db_went_bad", "unknown")),
                ee = (new V(500, "web_sql_went_bad", "unknown"), new V(500, "levelDB_went_went_bad", "unknown"), new V(403, "forbidden", "Forbidden by design doc validate_doc_update function"), new V(400, "bad_request", "Invalid rev format")),
                te = (new V(412, "file_exists", "The database could not be created, the file already exists."), new V(412, "missing_stub", "A pre-existing attachment stub wasn't found"));
            new V(413, "invalid_url", "Provided URL is invalid");

            function ne(e, t) {
                function n(t) {
                    for (var n = Object.getOwnPropertyNames(e), i = 0, r = n.length; i < r; i++) "function" != typeof e[n[i]] && (this[n[i]] = e[n[i]]);
                    void 0 !== t && (this.reason = t)
                }
                return n.prototype = V.prototype, new n(t)
            }

            function ie(e) {
                if ("object" != typeof e) {
                    var t = e;
                    (e = Z).data = t
                }
                return "error" in e && "conflict" === e.error && (e.name = "conflict", e.status = 409), "name" in e || (e.name = e.error || "unknown"), "status" in e || (e.status = 500), "message" in e || (e.message = e.message || e.reason), e
            }

            function re(e) {
                var t = {},
                    n = e.filter && "function" == typeof e.filter;
                return t.query = e.query_params,
                    function(i) {
                        i.doc || (i.doc = {});
                        var r = n && function(e, t, n) {
                            try {
                                return !e(t, n)
                            } catch (e) {
                                var i = "Filter function threw: " + e.toString();
                                return ne(J, i)
                            }
                        }(e.filter, i.doc, t);
                        if ("object" == typeof r) return r;
                        if (r) return !1;
                        if (e.include_docs) {
                            if (!e.attachments)
                                for (var s in i.doc._attachments) i.doc._attachments.hasOwnProperty(s) && (i.doc._attachments[s].stub = !0)
                        } else delete i.doc;
                        return !0
                    }
            }

            function se(e) {
                for (var t = [], n = 0, i = e.length; n < i; n++) t = t.concat(e[n]);
                return t
            }

            function oe(e) {
                var t;
                if (e ? "string" != typeof e ? t = ne(U) : /^_/.test(e) && !/^_(design|local)/.test(e) && (t = ne($)) : t = ne(G), t) throw t
            }

            function ae(e) {
                return "boolean" == typeof e._remote ? e._remote : "function" == typeof e.type && (N("warn", "db.type() is deprecated and will be removed in a future version of PouchDB"), "http" === e.type())
            }

            function ce(e) {
                if (!e) return null;
                var t = e.split("/");
                return 2 === t.length ? t : 1 === t.length ? [e, e] : null
            }

            function le(e) {
                var t = ce(e);
                return t ? t.join("/") : null
            }
            var ue = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                de = /(?:^|&)([^&=]*)=?([^&]*)/g,
                he = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

            function fe(e) {
                for (var t = he.exec(e), n = {}, i = 14; i--;) {
                    var r = ue[i],
                        s = t[i] || "",
                        o = -1 !== ["user", "password"].indexOf(r);
                    n[r] = o ? decodeURIComponent(s) : s
                }
                return n.queryKey = {}, n[ue[12]].replace(de, (function(e, t, i) {
                    t && (n.queryKey[t] = i)
                })), n
            }

            function pe(e, t) {
                var n = [],
                    i = [];
                for (var r in t) t.hasOwnProperty(r) && (n.push(r), i.push(t[r]));
                return n.push(e), Function.apply(null, n).apply(null, i)
            }

            function ge(e, t, n) {
                return new Promise((function(i, r) {
                    e.get(t, (function(s, o) {
                        if (s) {
                            if (404 !== s.status) return r(s);
                            o = {}
                        }
                        var a = o._rev,
                            c = n(o);
                        if (!c) return i({
                            updated: !1,
                            rev: a
                        });
                        c._id = t, c._rev = a, i(function(e, t, n) {
                            return e.put(t).then((function(e) {
                                return {
                                    updated: !0,
                                    rev: e.rev
                                }
                            }), (function(i) {
                                if (409 !== i.status) throw i;
                                return ge(e, t._id, n)
                            }))
                        }(e, c, n))
                    }))
                }))
            }
            var ve = function(e) {
                    return atob(e)
                },
                me = function(e) {
                    return btoa(e)
                };

            function ye(e, t) {
                e = e || [], t = t || {};
                try {
                    return new Blob(e, t)
                } catch (r) {
                    if ("TypeError" !== r.name) throw r;
                    for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), i = 0; i < e.length; i += 1) n.append(e[i]);
                    return n.getBlob(t.type)
                }
            }

            function be(e) {
                for (var t = e.length, n = new ArrayBuffer(t), i = new Uint8Array(n), r = 0; r < t; r++) i[r] = e.charCodeAt(r);
                return n
            }

            function we(e, t) {
                return ye([be(e)], {
                    type: t
                })
            }

            function _e(e, t) {
                return we(ve(e), t)
            }

            function Ee(e, t) {
                var n = new FileReader,
                    i = "function" == typeof n.readAsBinaryString;
                n.onloadend = function(e) {
                    var n = e.target.result || "";
                    if (i) return t(n);
                    t(function(e) {
                        for (var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; r < i; r++) t += String.fromCharCode(n[r]);
                        return t
                    }(n))
                }, i ? n.readAsBinaryString(e) : n.readAsArrayBuffer(e)
            }

            function Se(e, t) {
                Ee(e, (function(e) {
                    t(e)
                }))
            }

            function xe(e, t) {
                Se(e, (function(e) {
                    t(me(e))
                }))
            }
            var Le = self.setImmediate || self.setTimeout;

            function ke(e, t, n, i, r) {
                (n > 0 || i < t.size) && (t = function(e, t, n) {
                    return e.webkitSlice ? e.webkitSlice(t, n) : e.slice(t, n)
                }(t, n, i)),
                function(e, t) {
                    var n = new FileReader;
                    n.onloadend = function(e) {
                        var n = e.target.result || new ArrayBuffer(0);
                        t(n)
                    }, n.readAsArrayBuffer(e)
                }(t, (function(t) {
                    e.append(t), r()
                }))
            }

            function Ce(e, t, n, i, r) {
                (n > 0 || i < t.length) && (t = t.substring(n, i)), e.appendBinary(t), r()
            }

            function Ie(e, t) {
                var n = "string" == typeof e,
                    i = n ? e.length : e.size,
                    r = Math.min(32768, i),
                    s = Math.ceil(i / r),
                    o = 0,
                    a = n ? new l.a : new l.a.ArrayBuffer,
                    c = n ? Ce : ke;

                function u() {
                    Le(h)
                }

                function d() {
                    var e = function(e) {
                        return me(e)
                    }(a.end(!0));
                    t(e), a.destroy()
                }

                function h() {
                    var t = o * r,
                        n = t + r;
                    o++, c(a, e, t, n, o < s ? u : d)
                }
                h()
            }

            function Ae(e) {
                return l.a.hash(e)
            }

            function Pe(e, t) {
                var n = L(e);
                return t ? (delete n._rev_tree, Ae(JSON.stringify(n))) : Object(a.a)().replace(/-/g, "").toLowerCase()
            }
            var Oe = a.a;

            function Be(e) {
                for (var t, n, i, r, s = e.rev_tree.slice(); r = s.pop();) {
                    var o = r.ids,
                        a = o[2],
                        c = r.pos;
                    if (a.length)
                        for (var l = 0, u = a.length; l < u; l++) s.push({
                            pos: c + 1,
                            ids: a[l]
                        });
                    else {
                        var d = !!o[1].deleted,
                            h = o[0];
                        t && !(i !== d ? i : n !== c ? n < c : t < h) || (t = h, n = c, i = d)
                    }
                }
                return n + "-" + t
            }

            function Te(e, t) {
                for (var n, i = e.slice(); n = i.pop();)
                    for (var r = n.pos, s = n.ids, o = s[2], a = t(0 === o.length, r, s[0], n.ctx, s[1]), c = 0, l = o.length; c < l; c++) i.push({
                        pos: r + 1,
                        ids: o[c],
                        ctx: a
                    })
            }

            function je(e, t) {
                return e.pos - t.pos
            }

            function Me(e) {
                var t = [];
                Te(e, (function(e, n, i, r, s) {
                    e && t.push({
                        rev: n + "-" + i,
                        pos: n,
                        opts: s
                    })
                })), t.sort(je).reverse();
                for (var n = 0, i = t.length; n < i; n++) delete t[n].pos;
                return t
            }

            function Ne(e) {
                for (var t = Be(e), n = Me(e.rev_tree), i = [], r = 0, s = n.length; r < s; r++) {
                    var o = n[r];
                    o.rev === t || o.opts.deleted || i.push(o.rev)
                }
                return i
            }

            function De(e) {
                for (var t, n = [], i = e.slice(); t = i.pop();) {
                    var r = t.pos,
                        s = t.ids,
                        o = s[0],
                        a = s[1],
                        c = s[2],
                        l = 0 === c.length,
                        u = t.history ? t.history.slice() : [];
                    u.push({
                        id: o,
                        opts: a
                    }), l && n.push({
                        pos: r + 1 - u.length,
                        ids: u
                    });
                    for (var d = 0, h = c.length; d < h; d++) i.push({
                        pos: r + 1,
                        ids: c[d],
                        history: u
                    })
                }
                return n.reverse()
            }

            function Re(e, t) {
                return e.pos - t.pos
            }

            function qe(e, t, n) {
                var i = function(e, t, n) {
                    for (var i, r = 0, s = e.length; r < s;) n(e[i = r + s >>> 1], t) < 0 ? r = i + 1 : s = i;
                    return r
                }(e, t, n);
                e.splice(i, 0, t)
            }

            function Ve(e, t) {
                for (var n, i, r = t, s = e.length; r < s; r++) {
                    var o = e[r],
                        a = [o.id, o.opts, []];
                    i ? (i[2].push(a), i = a) : n = i = a
                }
                return n
            }

            function ze(e, t) {
                return e[0] < t[0] ? -1 : 1
            }

            function Fe(e, t) {
                for (var n = [{
                        tree1: e,
                        tree2: t
                    }], i = !1; n.length > 0;) {
                    var r = n.pop(),
                        s = r.tree1,
                        o = r.tree2;
                    (s[1].status || o[1].status) && (s[1].status = "available" === s[1].status || "available" === o[1].status ? "available" : "missing");
                    for (var a = 0; a < o[2].length; a++)
                        if (s[2][0]) {
                            for (var c = !1, l = 0; l < s[2].length; l++) s[2][l][0] === o[2][a][0] && (n.push({
                                tree1: s[2][l],
                                tree2: o[2][a]
                            }), c = !0);
                            c || (i = "new_branch", qe(s[2], o[2][a], ze))
                        } else i = "new_leaf", s[2][0] = o[2][a]
                }
                return {
                    conflicts: i,
                    tree: e
                }
            }

            function He(e, t, n) {
                var i, r = [],
                    s = !1,
                    o = !1;
                if (!e.length) return {
                    tree: [t],
                    conflicts: "new_leaf"
                };
                for (var a = 0, c = e.length; a < c; a++) {
                    var l = e[a];
                    if (l.pos === t.pos && l.ids[0] === t.ids[0]) i = Fe(l.ids, t.ids), r.push({
                        pos: l.pos,
                        ids: i.tree
                    }), s = s || i.conflicts, o = !0;
                    else if (!0 !== n) {
                        var u = l.pos < t.pos ? l : t,
                            d = l.pos < t.pos ? t : l,
                            h = d.pos - u.pos,
                            f = [],
                            p = [];
                        for (p.push({
                                ids: u.ids,
                                diff: h,
                                parent: null,
                                parentIdx: null
                            }); p.length > 0;) {
                            var g = p.pop();
                            if (0 !== g.diff)
                                for (var v = g.ids[2], m = 0, y = v.length; m < y; m++) p.push({
                                    ids: v[m],
                                    diff: g.diff - 1,
                                    parent: g.ids,
                                    parentIdx: m
                                });
                            else g.ids[0] === d.ids[0] && f.push(g)
                        }
                        var b = f[0];
                        b ? (i = Fe(b.ids, d.ids), b.parent[2][b.parentIdx] = i.tree, r.push({
                            pos: u.pos,
                            ids: u.ids
                        }), s = s || i.conflicts, o = !0) : r.push(l)
                    } else r.push(l)
                }
                return o || r.push(t), r.sort(Re), {
                    tree: r,
                    conflicts: s || "internal_node"
                }
            }

            function Ue(e, t, n) {
                var i = He(e, t),
                    r = function(e, t) {
                        for (var n, i, r = De(e), s = 0, o = r.length; s < o; s++) {
                            var a, c = r[s],
                                l = c.ids;
                            if (l.length > t) {
                                n || (n = {});
                                var u = l.length - t;
                                a = {
                                    pos: c.pos + u,
                                    ids: Ve(l, u)
                                };
                                for (var d = 0; d < u; d++) {
                                    var h = c.pos + d + "-" + l[d].id;
                                    n[h] = !0
                                }
                            } else a = {
                                pos: c.pos,
                                ids: Ve(l, 0)
                            };
                            i = i ? He(i, a, !0).tree : [a]
                        }
                        return n && Te(i, (function(e, t, i) {
                            delete n[t + "-" + i]
                        })), {
                            tree: i,
                            revs: n ? Object.keys(n) : []
                        }
                    }(i.tree, n);
                return {
                    tree: r.tree,
                    stemmedRevs: r.revs,
                    conflicts: i.conflicts
                }
            }

            function Ge(e) {
                return e.ids
            }

            function $e(e, t) {
                t || (t = Be(e));
                for (var n, i = t.substring(t.indexOf("-") + 1), r = e.rev_tree.map(Ge); n = r.pop();) {
                    if (n[0] === i) return !!n[1].deleted;
                    r = r.concat(n[2])
                }
            }

            function Ze(e) {
                return /^_local/.test(e)
            }

            function We(e, t, n) {
                m.a.call(this);
                var i = this;
                this.db = e;
                var r = (t = t ? L(t) : {}).complete = k((function(t, n) {
                    var r, o;
                    t ? (o = "error", ("listenerCount" in (r = i) ? r.listenerCount(o) : m.a.listenerCount(r, o)) > 0 && i.emit("error", t)) : i.emit("complete", n), i.removeAllListeners(), e.removeListener("destroyed", s)
                }));

                function s() {
                    i.cancel()
                }
                n && (i.on("complete", (function(e) {
                    n(null, e)
                })), i.on("error", n)), e.once("destroyed", s), t.onChange = function(e, t, n) {
                    i.isCancelled || function(e, t, n, i) {
                        try {
                            e.emit("change", t, n, i)
                        } catch (e) {
                            N("error", 'Error in .on("change", function):', e)
                        }
                    }(i, e, t, n)
                };
                var o = new Promise((function(e, n) {
                    t.complete = function(t, i) {
                        t ? n(t) : e(i)
                    }
                }));
                i.once("cancel", (function() {
                    e.removeListener("destroyed", s), t.complete(null, {
                        status: "cancelled"
                    })
                })), this.then = o.then.bind(o), this.catch = o.catch.bind(o), this.then((function(e) {
                    r(null, e)
                }), r), e.taskqueue.isReady ? i.validateChanges(t) : e.taskqueue.addTask((function(e) {
                    e ? t.complete(e) : i.isCancelled ? i.emit("cancel") : i.validateChanges(t)
                }))
            }

            function Ke(e, t, n) {
                var i = [{
                    rev: e._rev
                }];
                "all_docs" === n.style && (i = Me(t.rev_tree).map((function(e) {
                    return {
                        rev: e.rev
                    }
                })));
                var r = {
                    id: t.id,
                    changes: i,
                    doc: e
                };
                return $e(t, e._rev) && (r.deleted = !0), n.conflicts && (r.doc._conflicts = Ne(t), r.doc._conflicts.length || delete r.doc._conflicts), r
            }

            function Ye(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function Je(e, t) {
                return function(n, i) {
                    n || i[0] && i[0].error ? ((n = n || i[0]).docId = t, e(n)) : e(null, i.length ? i[0] : i)
                }
            }

            function Xe(e, t) {
                var n = Ye(e._id, t._id);
                return 0 !== n ? n : Ye(e._revisions ? e._revisions.start : 0, t._revisions ? t._revisions.start : 0)
            }

            function Qe() {
                for (var e in m.a.call(this), Qe.prototype) "function" == typeof this[e] && (this[e] = this[e].bind(this))
            }

            function et() {
                this.isReady = !1, this.failed = !1, this.queue = []
            }

            function tt(e, t) {
                if (!(this instanceof tt)) return new tt(e, t);
                var n = this;
                if (t = t || {}, e && "object" == typeof e && (e = (t = e).name, delete t.name), void 0 === t.deterministic_revs && (t.deterministic_revs = !0), this.__opts = t = L(t), n.auto_compaction = t.auto_compaction, n.prefix = tt.prefix, "string" != typeof e) throw new Error("Missing/invalid DB name");
                var i = function(e, t) {
                    var n = e.match(/([a-z-]*):\/\/(.*)/);
                    if (n) return {
                        name: /https?/.test(n[1]) ? n[1] + "://" + n[2] : n[2],
                        adapter: n[1]
                    };
                    var i = tt.adapters,
                        r = tt.preferredAdapters,
                        s = tt.prefix,
                        o = t.adapter;
                    if (!o)
                        for (var a = 0; a < r.length && ("idb" === (o = r[a]) && "websql" in i && j() && localStorage["_pouch__websqldb_" + s + e]); ++a) N("log", 'PouchDB is downgrading "' + e + '" to WebSQL to avoid data loss, because it was already opened with WebSQL.');
                    var c = i[o];
                    return {
                        name: !c || !("use_prefix" in c) || c.use_prefix ? s + e : e,
                        adapter: o
                    }
                }((t.prefix || "") + e, t);
                if (t.name = i.name, t.adapter = t.adapter || i.adapter, n.name = e, n._adapter = t.adapter, tt.emit("debug", ["adapter", "Picked adapter: ", t.adapter]), !tt.adapters[t.adapter] || !tt.adapters[t.adapter].valid()) throw new Error("Invalid Adapter: " + t.adapter);
                Qe.call(n), n.taskqueue = new et, n.adapter = t.adapter, tt.adapters[t.adapter].call(n, t, (function(e) {
                    if (e) return n.taskqueue.fail(e);
                    ! function(e) {
                        function t(t) {
                            e.removeListener("closed", n), t || e.constructor.emit("destroyed", e.name)
                        }

                        function n() {
                            e.removeListener("destroyed", t), e.constructor.emit("unref", e)
                        }
                        e.once("destroyed", t), e.once("closed", n), e.constructor.emit("ref", e)
                    }(n), n.emit("created", n), tt.emit("created", n.name), n.taskqueue.ready(n)
                }))
            }
            g()(We, m.a), We.prototype.cancel = function() {
                this.isCancelled = !0, this.db.taskqueue.isReady && this.emit("cancel")
            }, We.prototype.validateChanges = function(e) {
                var t = e.complete,
                    n = this;
                tt._changesFilterPlugin ? tt._changesFilterPlugin.validate(e, (function(i) {
                    if (i) return t(i);
                    n.doChanges(e)
                })) : n.doChanges(e)
            }, We.prototype.doChanges = function(e) {
                var t = this,
                    n = e.complete;
                if ("live" in (e = L(e)) && !("continuous" in e) && (e.continuous = e.live), e.processChange = Ke, "latest" === e.since && (e.since = "now"), e.since || (e.since = 0), "now" !== e.since) {
                    if (tt._changesFilterPlugin) {
                        if (tt._changesFilterPlugin.normalize(e), tt._changesFilterPlugin.shouldFilter(this, e)) return tt._changesFilterPlugin.filter(this, e)
                    } else ["doc_ids", "filter", "selector", "view"].forEach((function(t) {
                        t in e && N("warn", 'The "' + t + '" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')
                    }));
                    "descending" in e || (e.descending = !1), e.limit = 0 === e.limit ? 1 : e.limit, e.complete = n;
                    var i = this.db._changes(e);
                    if (i && "function" == typeof i.cancel) {
                        var r = t.cancel;
                        t.cancel = f()((function(e) {
                            i.cancel(), r.apply(this, e)
                        }))
                    }
                } else this.db.info().then((function(i) {
                    t.isCancelled ? n(null, {
                        status: "cancelled"
                    }) : (e.since = i.update_seq, t.doChanges(e))
                }), n)
            }, g()(Qe, m.a), Qe.prototype.post = I("post", (function(e, t, n) {
                if ("function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e)) return n(ne(X));
                this.bulkDocs({
                    docs: [e]
                }, t, Je(n, e._id))
            })), Qe.prototype.put = I("put", (function(e, t, n) {
                if ("function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e)) return n(ne(X));
                if (oe(e._id), Ze(e._id) && "function" == typeof this._putLocal) return e._deleted ? this._removeLocal(e, n) : this._putLocal(e, n);
                var i, r, s, o, a = this;

                function c(n) {
                    "function" == typeof a._put && !1 !== t.new_edits ? a._put(e, t, n) : a.bulkDocs({
                        docs: [e]
                    }, t, Je(n, e._id))
                }
                t.force && e._rev ? (i = e._rev.split("-"), r = i[1], s = parseInt(i[0], 10) + 1, o = Pe(), e._revisions = {
                    start: s,
                    ids: [o, r]
                }, e._rev = s + "-" + o, t.new_edits = !1, c((function(t) {
                    var i = t ? null : {
                        ok: !0,
                        id: e._id,
                        rev: e._rev
                    };
                    n(t, i)
                }))) : c(n)
            })), Qe.prototype.putAttachment = I("putAttachment", (function(e, t, n, i, r) {
                var s = this;

                function o(e) {
                    var n = "_rev" in e ? parseInt(e._rev, 10) : 0;
                    return e._attachments = e._attachments || {}, e._attachments[t] = {
                        content_type: r,
                        data: i,
                        revpos: ++n
                    }, s.put(e)
                }
                return "function" == typeof r && (r = i, i = n, n = null), void 0 === r && (r = i, i = n, n = null), r || N("warn", "Attachment", t, "on document", e, "is missing content_type"), s.get(e).then((function(e) {
                    if (e._rev !== n) throw ne(H);
                    return o(e)
                }), (function(t) {
                    if (t.reason === F.message) return o({
                        _id: e
                    });
                    throw t
                }))
            })), Qe.prototype.removeAttachment = I("removeAttachment", (function(e, t, n, i) {
                var r = this;
                r.get(e, (function(e, s) {
                    if (e) i(e);
                    else if (s._rev === n) {
                        if (!s._attachments) return i();
                        delete s._attachments[t], 0 === Object.keys(s._attachments).length && delete s._attachments, r.put(s, i)
                    } else i(ne(H))
                }))
            })), Qe.prototype.remove = I("remove", (function(e, t, n, i) {
                var r;
                "string" == typeof t ? (r = {
                    _id: e,
                    _rev: t
                }, "function" == typeof n && (i = n, n = {})) : (r = e, "function" == typeof t ? (i = t, n = {}) : (i = n, n = t)), (n = n || {}).was_delete = !0;
                var s = {
                    _id: r._id,
                    _rev: r._rev || n.rev,
                    _deleted: !0
                };
                if (Ze(s._id) && "function" == typeof this._removeLocal) return this._removeLocal(r, i);
                this.bulkDocs({
                    docs: [s]
                }, n, Je(i, s._id))
            })), Qe.prototype.revsDiff = I("revsDiff", (function(e, t, n) {
                "function" == typeof t && (n = t, t = {});
                var i = Object.keys(e);
                if (!i.length) return n(null, {});
                var s = 0,
                    o = new r;

                function a(e, t) {
                    o.has(e) || o.set(e, {
                        missing: []
                    }), o.get(e).missing.push(t)
                }
                i.map((function(t) {
                    this._getRevisionTree(t, (function(r, c) {
                        if (r && 404 === r.status && "missing" === r.message) o.set(t, {
                            missing: e[t]
                        });
                        else {
                            if (r) return n(r);
                            ! function(t, n) {
                                var i = e[t].slice(0);
                                Te(n, (function(e, n, r, s, o) {
                                    var c = n + "-" + r,
                                        l = i.indexOf(c); - 1 !== l && (i.splice(l, 1), "available" !== o.status && a(t, c))
                                })), i.forEach((function(e) {
                                    a(t, e)
                                }))
                            }(t, c)
                        }
                        if (++s === i.length) {
                            var l = {};
                            return o.forEach((function(e, t) {
                                l[t] = e
                            })), n(null, l)
                        }
                    }))
                }), this)
            })), Qe.prototype.bulkGet = I("bulkGet", (function(e, t) {
                T(this, e, t)
            })), Qe.prototype.compactDocument = I("compactDocument", (function(e, t, n) {
                var i = this;
                this._getRevisionTree(e, (function(r, s) {
                    if (r) return n(r);
                    var o = function(e) {
                            var t = {},
                                n = [];
                            return Te(e, (function(e, i, r, s) {
                                var o = i + "-" + r;
                                return e && (t[o] = 0), void 0 !== s && n.push({
                                    from: s,
                                    to: o
                                }), o
                            })), n.reverse(), n.forEach((function(e) {
                                void 0 === t[e.from] ? t[e.from] = 1 + t[e.to] : t[e.from] = Math.min(t[e.from], 1 + t[e.to])
                            })), t
                        }(s),
                        a = [],
                        c = [];
                    Object.keys(o).forEach((function(e) {
                        o[e] > t && a.push(e)
                    })), Te(s, (function(e, t, n, i, r) {
                        var s = t + "-" + n;
                        "available" === r.status && -1 !== a.indexOf(s) && c.push(s)
                    })), i._doCompaction(e, c, n)
                }))
            })), Qe.prototype.compact = I("compact", (function(e, t) {
                "function" == typeof e && (t = e, e = {});
                e = e || {}, this._compactionQueue = this._compactionQueue || [], this._compactionQueue.push({
                    opts: e,
                    callback: t
                }), 1 === this._compactionQueue.length && function e(t) {
                    var n = t._compactionQueue[0],
                        i = n.opts,
                        r = n.callback;
                    t.get("_local/compaction").catch((function() {
                        return !1
                    })).then((function(n) {
                        n && n.last_seq && (i.last_seq = n.last_seq), t._compact(i, (function(n, i) {
                            n ? r(n) : r(null, i), o()((function() {
                                t._compactionQueue.shift(), t._compactionQueue.length && e(t)
                            }))
                        }))
                    }))
                }(this)
            })), Qe.prototype._compact = function(e, t) {
                var n = this,
                    i = {
                        return_docs: !1,
                        last_seq: e.last_seq || 0
                    },
                    r = [];
                n.changes(i).on("change", (function(e) {
                    r.push(n.compactDocument(e.id, 0))
                })).on("complete", (function(e) {
                    var i = e.last_seq;
                    Promise.all(r).then((function() {
                        return ge(n, "_local/compaction", (function(e) {
                            return (!e.last_seq || e.last_seq < i) && (e.last_seq = i, e)
                        }))
                    })).then((function() {
                        t(null, {
                            ok: !0
                        })
                    })).catch(t)
                })).on("error", t)
            }, Qe.prototype.get = I("get", (function(e, t, n) {
                if ("function" == typeof t && (n = t, t = {}), "string" != typeof e) return n(ne(U));
                if (Ze(e) && "function" == typeof this._getLocal) return this._getLocal(e, n);
                var i = [],
                    r = this;

                function s() {
                    var s = [],
                        o = i.length;
                    if (!o) return n(null, s);
                    i.forEach((function(i) {
                        r.get(e, {
                            rev: i,
                            revs: t.revs,
                            latest: t.latest,
                            attachments: t.attachments,
                            binary: t.binary
                        }, (function(e, t) {
                            if (e) s.push({
                                missing: i
                            });
                            else {
                                for (var r, a = 0, c = s.length; a < c; a++)
                                    if (s[a].ok && s[a].ok._rev === t._rev) {
                                        r = !0;
                                        break
                                    }
                                r || s.push({
                                    ok: t
                                })
                            }--o || n(null, s)
                        }))
                    }))
                }
                if (!t.open_revs) return this._get(e, t, (function(i, s) {
                    if (i) return i.docId = e, n(i);
                    var o = s.doc,
                        a = s.metadata,
                        c = s.ctx;
                    if (t.conflicts) {
                        var l = Ne(a);
                        l.length && (o._conflicts = l)
                    }
                    if ($e(a, o._rev) && (o._deleted = !0), t.revs || t.revs_info) {
                        for (var u = o._rev.split("-"), d = parseInt(u[0], 10), h = u[1], f = De(a.rev_tree), p = null, g = 0; g < f.length; g++) {
                            var v = f[g],
                                m = v.ids.map((function(e) {
                                    return e.id
                                })).indexOf(h);
                            (m === d - 1 || !p && -1 !== m) && (p = v)
                        }
                        if (!p) return (i = new Error("invalid rev tree")).docId = e, n(i);
                        var y = p.ids.map((function(e) {
                                return e.id
                            })).indexOf(o._rev.split("-")[1]) + 1,
                            b = p.ids.length - y;
                        if (p.ids.splice(y, b), p.ids.reverse(), t.revs && (o._revisions = {
                                start: p.pos + p.ids.length - 1,
                                ids: p.ids.map((function(e) {
                                    return e.id
                                }))
                            }), t.revs_info) {
                            var w = p.pos + p.ids.length;
                            o._revs_info = p.ids.map((function(e) {
                                return {
                                    rev: --w + "-" + e.id,
                                    status: e.opts.status
                                }
                            }))
                        }
                    }
                    if (t.attachments && o._attachments) {
                        var _ = o._attachments,
                            E = Object.keys(_).length;
                        if (0 === E) return n(null, o);
                        Object.keys(_).forEach((function(e) {
                            this._getAttachment(o._id, e, _[e], {
                                rev: o._rev,
                                binary: t.binary,
                                ctx: c
                            }, (function(t, i) {
                                var r = o._attachments[e];
                                r.data = i, delete r.stub, delete r.length, --E || n(null, o)
                            }))
                        }), r)
                    } else {
                        if (o._attachments)
                            for (var S in o._attachments) o._attachments.hasOwnProperty(S) && (o._attachments[S].stub = !0);
                        n(null, o)
                    }
                }));
                if ("all" === t.open_revs) this._getRevisionTree(e, (function(e, t) {
                    if (e) return n(e);
                    i = Me(t).map((function(e) {
                        return e.rev
                    })), s()
                }));
                else {
                    if (!Array.isArray(t.open_revs)) return n(ne(Z, "function_clause"));
                    i = t.open_revs;
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o];
                        if ("string" != typeof a || !/^\d+-/.test(a)) return n(ne(ee))
                    }
                    s()
                }
            })), Qe.prototype.getAttachment = I("getAttachment", (function(e, t, n, i) {
                var r = this;
                n instanceof Function && (i = n, n = {}), this._get(e, n, (function(s, o) {
                    return s ? i(s) : o.doc._attachments && o.doc._attachments[t] ? (n.ctx = o.ctx, n.binary = !0, void r._getAttachment(e, t, o.doc._attachments[t], n, i)) : i(ne(F))
                }))
            })), Qe.prototype.allDocs = I("allDocs", (function(e, t) {
                if ("function" == typeof e && (t = e, e = {}), e.skip = void 0 !== e.skip ? e.skip : 0, e.start_key && (e.startkey = e.start_key), e.end_key && (e.endkey = e.end_key), "keys" in e) {
                    if (!Array.isArray(e.keys)) return t(new TypeError("options.keys must be an array"));
                    var n = ["startkey", "endkey", "key"].filter((function(t) {
                        return t in e
                    }))[0];
                    if (n) return void t(ne(K, "Query parameter `" + n + "` is not compatible with multi-get"));
                    if (!ae(this) && (function(e) {
                            var t = "limit" in e ? e.keys.slice(e.skip, e.limit + e.skip) : e.skip > 0 ? e.keys.slice(e.skip) : e.keys;
                            e.keys = t, e.skip = 0, delete e.limit, e.descending && (t.reverse(), e.descending = !1)
                        }(e), 0 === e.keys.length)) return this._allDocs({
                        limit: 0
                    }, t)
                }
                return this._allDocs(e, t)
            })), Qe.prototype.changes = function(e, t) {
                return "function" == typeof e && (t = e, e = {}), (e = e || {}).return_docs = "return_docs" in e ? e.return_docs : !e.live, new We(this, e, t)
            }, Qe.prototype.close = I("close", (function(e) {
                return this._closed = !0, this.emit("closed"), this._close(e)
            })), Qe.prototype.info = I("info", (function(e) {
                var t = this;
                this._info((function(n, i) {
                    if (n) return e(n);
                    i.db_name = i.db_name || t.name, i.auto_compaction = !(!t.auto_compaction || ae(t)), i.adapter = t.adapter, e(null, i)
                }))
            })), Qe.prototype.id = I("id", (function(e) {
                return this._id(e)
            })), Qe.prototype.type = function() {
                return "function" == typeof this._type ? this._type() : this.adapter
            }, Qe.prototype.bulkDocs = I("bulkDocs", (function(e, t, n) {
                if ("function" == typeof t && (n = t, t = {}), t = t || {}, Array.isArray(e) && (e = {
                        docs: e
                    }), !e || !e.docs || !Array.isArray(e.docs)) return n(ne(z));
                for (var i = 0; i < e.docs.length; ++i)
                    if ("object" != typeof e.docs[i] || Array.isArray(e.docs[i])) return n(ne(X));
                var r;
                if (e.docs.forEach((function(e) {
                        e._attachments && Object.keys(e._attachments).forEach((function(t) {
                            r = r || function(e) {
                                return "_" === e.charAt(0) && e + " is not a valid attachment name, attachment names cannot start with '_'"
                            }(t), e._attachments[t].content_type || N("warn", "Attachment", t, "on document", e._id, "is missing content_type")
                        }))
                    })), r) return n(ne(J, r));
                "new_edits" in t || (t.new_edits = !("new_edits" in e) || e.new_edits);
                var s = this;
                t.new_edits || ae(s) || e.docs.sort(Xe),
                    function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (n._deleted) delete n._attachments;
                            else if (n._attachments)
                                for (var i = Object.keys(n._attachments), r = 0; r < i.length; r++) {
                                    var s = i[r];
                                    n._attachments[s] = A(n._attachments[s], ["data", "digest", "content_type", "length", "revpos", "stub"])
                                }
                        }
                    }(e.docs);
                var o = e.docs.map((function(e) {
                    return e._id
                }));
                return this._bulkDocs(e, t, (function(e, i) {
                    if (e) return n(e);
                    if (t.new_edits || (i = i.filter((function(e) {
                            return e.error
                        }))), !ae(s))
                        for (var r = 0, a = i.length; r < a; r++) i[r].id = i[r].id || o[r];
                    n(null, i)
                }))
            })), Qe.prototype.registerDependentDatabase = I("registerDependentDatabase", (function(e, t) {
                var n = new this.constructor(e, this.__opts);
                ge(this, "_local/_pouch_dependentDbs", (function(t) {
                    return t.dependentDbs = t.dependentDbs || {}, !t.dependentDbs[e] && (t.dependentDbs[e] = !0, t)
                })).then((function() {
                    t(null, {
                        db: n
                    })
                })).catch(t)
            })), Qe.prototype.destroy = I("destroy", (function(e, t) {
                "function" == typeof e && (t = e, e = {});
                var n = this,
                    i = !("use_prefix" in n) || n.use_prefix;

                function r() {
                    n._destroy(e, (function(e, i) {
                        if (e) return t(e);
                        n._destroyed = !0, n.emit("destroyed"), t(null, i || {
                            ok: !0
                        })
                    }))
                }
                if (ae(n)) return r();
                n.get("_local/_pouch_dependentDbs", (function(e, s) {
                    if (e) return 404 !== e.status ? t(e) : r();
                    var o = s.dependentDbs,
                        a = n.constructor,
                        c = Object.keys(o).map((function(e) {
                            var t = i ? e.replace(new RegExp("^" + a.prefix), "") : e;
                            return new a(t, n.__opts).destroy()
                        }));
                    Promise.all(c).then(r, t)
                }))
            })), et.prototype.execute = function() {
                var e;
                if (this.failed)
                    for (; e = this.queue.shift();) e(this.failed);
                else
                    for (; e = this.queue.shift();) e()
            }, et.prototype.fail = function(e) {
                this.failed = e, this.execute()
            }, et.prototype.ready = function(e) {
                this.isReady = !0, this.db = e, this.execute()
            }, et.prototype.addTask = function(e) {
                this.queue.push(e), this.failed && this.execute()
            }, g()(tt, Qe);
            var nt = "undefined" != typeof AbortController ? AbortController : function() {
                    return {
                        abort: function() {}
                    }
                },
                it = fetch,
                rt = Headers;
            tt.adapters = {}, tt.preferredAdapters = [], tt.prefix = "_pouch_";
            var st = new m.a;
            ! function(e) {
                Object.keys(m.a.prototype).forEach((function(t) {
                    "function" == typeof m.a.prototype[t] && (e[t] = st[t].bind(st))
                }));
                var t = e._destructionListeners = new r;
                e.on("ref", (function(e) {
                    t.has(e.name) || t.set(e.name, []), t.get(e.name).push(e)
                })), e.on("unref", (function(e) {
                    if (t.has(e.name)) {
                        var n = t.get(e.name),
                            i = n.indexOf(e);
                        i < 0 || (n.splice(i, 1), n.length > 1 ? t.set(e.name, n) : t.delete(e.name))
                    }
                })), e.on("destroyed", (function(e) {
                    if (t.has(e)) {
                        var n = t.get(e);
                        t.delete(e), n.forEach((function(e) {
                            e.emit("destroyed", !0)
                        }))
                    }
                }))
            }(tt), tt.adapter = function(e, t, n) {
                t.valid() && (tt.adapters[e] = t, n && tt.preferredAdapters.push(e))
            }, tt.plugin = function(e) {
                if ("function" == typeof e) e(tt);
                else {
                    if ("object" != typeof e || 0 === Object.keys(e).length) throw new Error('Invalid plugin: got "' + e + '", expected an object or a function');
                    Object.keys(e).forEach((function(t) {
                        tt.prototype[t] = e[t]
                    }))
                }
                return this.__defaults && (tt.__defaults = q({}, this.__defaults)), tt
            }, tt.defaults = function(e) {
                function t(e, n) {
                    if (!(this instanceof t)) return new t(e, n);
                    n = n || {}, e && "object" == typeof e && (e = (n = e).name, delete n.name), n = q({}, t.__defaults, n), tt.call(this, e, n)
                }
                return g()(t, tt), t.preferredAdapters = tt.preferredAdapters.slice(), Object.keys(tt).forEach((function(e) {
                    e in t || (t[e] = tt[e])
                })), t.__defaults = q({}, this.__defaults, e), t
            }, tt.fetch = function(e, t) {
                return it(e, t)
            };

            function ot(e, t) {
                for (var n = e, i = 0, r = t.length; i < r; i++) {
                    if (!(n = n[t[i]])) break
                }
                return n
            }

            function at(e) {
                for (var t = [], n = "", i = 0, r = e.length; i < r; i++) {
                    var s = e[i];
                    "." === s ? i > 0 && "\\" === e[i - 1] ? n = n.substring(0, n.length - 1) + "." : (t.push(n), n = "") : n += s
                }
                return t.push(n), t
            }
            var ct = ["$or", "$nor", "$not"];

            function lt(e) {
                return ct.indexOf(e) > -1
            }

            function ut(e) {
                return Object.keys(e)[0]
            }

            function dt(e) {
                var t = {};
                return e.forEach((function(e) {
                    Object.keys(e).forEach((function(n) {
                        var i = e[n];
                        if ("object" != typeof i && (i = {
                                $eq: i
                            }), lt(n)) t[n] = i instanceof Array ? i.map((function(e) {
                            return dt([e])
                        })) : dt([i]);
                        else {
                            var r = t[n] = t[n] || {};
                            Object.keys(i).forEach((function(e) {
                                var t = i[e];
                                return "$gt" === e || "$gte" === e ? function(e, t, n) {
                                    if (void 0 !== n.$eq) return;
                                    void 0 !== n.$gte ? "$gte" === e ? t > n.$gte && (n.$gte = t) : t >= n.$gte && (delete n.$gte, n.$gt = t) : void 0 !== n.$gt ? "$gte" === e ? t > n.$gt && (delete n.$gt, n.$gte = t) : t > n.$gt && (n.$gt = t) : n[e] = t
                                }(e, t, r) : "$lt" === e || "$lte" === e ? function(e, t, n) {
                                    if (void 0 !== n.$eq) return;
                                    void 0 !== n.$lte ? "$lte" === e ? t < n.$lte && (n.$lte = t) : t <= n.$lte && (delete n.$lte, n.$lt = t) : void 0 !== n.$lt ? "$lte" === e ? t < n.$lt && (delete n.$lt, n.$lte = t) : t < n.$lt && (n.$lt = t) : n[e] = t
                                }(e, t, r) : "$ne" === e ? function(e, t) {
                                    "$ne" in t ? t.$ne.push(e) : t.$ne = [e]
                                }(t, r) : "$eq" === e ? function(e, t) {
                                    delete t.$gt, delete t.$gte, delete t.$lt, delete t.$lte, delete t.$ne, t.$eq = e
                                }(t, r) : void(r[e] = t)
                            }))
                        }
                    }))
                })), t
            }

            function ht(e) {
                var t = L(e),
                    n = !1;
                (function e(t, n) {
                    for (var i in t) {
                        "$and" === i && (n = !0);
                        var r = t[i];
                        "object" == typeof r && (n = e(r, n))
                    }
                    return n
                })(t, !1) && ("$and" in (t = function e(t) {
                    for (var n in t) {
                        if (Array.isArray(t))
                            for (var i in t) t[i].$and && (t[i] = dt(t[i].$and));
                        var r = t[n];
                        "object" == typeof r && e(r)
                    }
                    return t
                }(t)) && (t = dt(t.$and)), n = !0), ["$or", "$nor"].forEach((function(e) {
                    e in t && t[e].forEach((function(e) {
                        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                            var i = t[n],
                                r = e[i];
                            "object" == typeof r && null !== r || (e[i] = {
                                $eq: r
                            })
                        }
                    }))
                })), "$not" in t && (t.$not = dt([t.$not]));
                for (var i = Object.keys(t), r = 0; r < i.length; r++) {
                    var s = i[r],
                        o = t[s];
                    "object" != typeof o || null === o ? o = {
                        $eq: o
                    } : "$ne" in o && !n && (o.$ne = [o.$ne]), t[s] = o
                }
                return t
            }

            function ft(e, t) {
                if (e === t) return 0;
                e = pt(e), t = pt(t);
                var n = bt(e),
                    i = bt(t);
                if (n - i != 0) return n - i;
                switch (typeof e) {
                    case "number":
                        return e - t;
                    case "boolean":
                        return e < t ? -1 : 1;
                    case "string":
                        return function(e, t) {
                            return e === t ? 0 : e > t ? 1 : -1
                        }(e, t)
                }
                return Array.isArray(e) ? function(e, t) {
                    for (var n = Math.min(e.length, t.length), i = 0; i < n; i++) {
                        var r = ft(e[i], t[i]);
                        if (0 !== r) return r
                    }
                    return e.length === t.length ? 0 : e.length > t.length ? 1 : -1
                }(e, t) : function(e, t) {
                    for (var n = Object.keys(e), i = Object.keys(t), r = Math.min(n.length, i.length), s = 0; s < r; s++) {
                        var o = ft(n[s], i[s]);
                        if (0 !== o) return o;
                        if (0 !== (o = ft(e[n[s]], t[i[s]]))) return o
                    }
                    return n.length === i.length ? 0 : n.length > i.length ? 1 : -1
                }(e, t)
            }

            function pt(e) {
                switch (typeof e) {
                    case "undefined":
                        return null;
                    case "number":
                        return e === 1 / 0 || e === -1 / 0 || isNaN(e) ? null : e;
                    case "object":
                        var t = e;
                        if (Array.isArray(e)) {
                            var n = e.length;
                            e = new Array(n);
                            for (var i = 0; i < n; i++) e[i] = pt(t[i])
                        } else {
                            if (e instanceof Date) return e.toJSON();
                            if (null !== e)
                                for (var r in e = {}, t)
                                    if (t.hasOwnProperty(r)) {
                                        var s = t[r];
                                        void 0 !== s && (e[r] = pt(s))
                                    }
                        }
                }
                return e
            }

            function gt(e) {
                if (null !== e) switch (typeof e) {
                    case "boolean":
                        return e ? 1 : 0;
                    case "number":
                        return function(e) {
                            if (0 === e) return "1";
                            var t = e.toExponential().split(/e\+?/),
                                n = parseInt(t[1], 10),
                                i = e < 0,
                                r = i ? "0" : "2",
                                s = (o = ((i ? -n : n) - -324).toString(), a = "0", c = 3, function(e, t, n) {
                                    for (var i = "", r = n - e.length; i.length < r;) i += t;
                                    return i
                                }(o, a, c) + o);
                            var o, a, c;
                            r += "" + s;
                            var l = Math.abs(parseFloat(t[0]));
                            i && (l = 10 - l);
                            var u = l.toFixed(20);
                            return u = u.replace(/\.?0+$/, ""), r += "" + u
                        }(e);
                    case "string":
                        return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "");
                    case "object":
                        var t = Array.isArray(e),
                            n = t ? e : Object.keys(e),
                            i = -1,
                            r = n.length,
                            s = "";
                        if (t)
                            for (; ++i < r;) s += vt(n[i]);
                        else
                            for (; ++i < r;) {
                                var o = n[i];
                                s += vt(o) + vt(e[o])
                            }
                        return s
                }
                return ""
            }

            function vt(e) {
                return bt(e = pt(e)) + "" + gt(e) + "\0"
            }

            function mt(e, t) {
                var n, i = t;
                if ("1" === e[t]) n = 0, t++;
                else {
                    var r = "0" === e[t];
                    t++;
                    var s = "",
                        o = e.substring(t, t + 3),
                        a = parseInt(o, 10) + -324;
                    for (r && (a = -a), t += 3;;) {
                        var c = e[t];
                        if ("\0" === c) break;
                        s += c, t++
                    }
                    n = 1 === (s = s.split(".")).length ? parseInt(s, 10) : parseFloat(s[0] + "." + s[1]), r && (n -= 10), 0 !== a && (n = parseFloat(n + "e" + a))
                }
                return {
                    num: n,
                    length: t - i
                }
            }

            function yt(e, t) {
                var n = e.pop();
                if (t.length) {
                    var i = t[t.length - 1];
                    n === i.element && (t.pop(), i = t[t.length - 1]);
                    var r = i.element,
                        s = i.index;
                    if (Array.isArray(r)) r.push(n);
                    else if (s === e.length - 2) {
                        r[e.pop()] = n
                    } else e.push(n)
                }
            }

            function bt(e) {
                var t = ["boolean", "number", "string", "object"].indexOf(typeof e);
                return ~t ? null === e ? 1 : Array.isArray(e) ? 5 : t < 3 ? t + 2 : t + 3 : Array.isArray(e) ? 5 : void 0
            }

            function wt(e, t, n) {
                if (e = e.filter((function(e) {
                        return _t(e.doc, t.selector, n)
                    })), t.sort) {
                    var i = function(e) {
                        function t(t) {
                            return e.map((function(e) {
                                var n = at(ut(e));
                                return ot(t, n)
                            }))
                        }
                        return function(e, n) {
                            var i, r, s = ft(t(e.doc), t(n.doc));
                            return 0 !== s ? s : (i = e.doc._id, r = n.doc._id, i < r ? -1 : i > r ? 1 : 0)
                        }
                    }(t.sort);
                    e = e.sort(i), "string" != typeof t.sort[0] && "desc" === (r = t.sort[0])[ut(r)] && (e = e.reverse())
                }
                var r;
                if ("limit" in t || "skip" in t) {
                    var s = t.skip || 0,
                        o = ("limit" in t ? t.limit : e.length) + s;
                    e = e.slice(s, o)
                }
                return e
            }

            function _t(e, t, n) {
                return n.every((function(n) {
                    var i = t[n],
                        r = at(n),
                        s = ot(e, r);
                    return lt(n) ? function(e, t, n) {
                        if ("$or" === e) return t.some((function(e) {
                            return _t(n, e, Object.keys(e))
                        }));
                        if ("$not" === e) return !_t(n, t, Object.keys(t));
                        return !t.find((function(e) {
                            return _t(n, e, Object.keys(e))
                        }))
                    }(n, i, e) : Et(i, e, r, s)
                }))
            }

            function Et(e, t, n, i) {
                return !e || ("object" == typeof e ? Object.keys(e).every((function(r) {
                    var s = e[r];
                    return function(e, t, n, i, r) {
                        if (!kt[e]) throw new Error('unknown operator "' + e + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
                        return kt[e](t, n, i, r)
                    }(r, t, s, n, i)
                })) : e === i)
            }

            function St(e) {
                return null != e
            }

            function xt(e) {
                return void 0 !== e
            }

            function Lt(e, t) {
                return t.some((function(t) {
                    return e instanceof Array ? e.indexOf(t) > -1 : e === t
                }))
            }
            var kt = {
                $elemMatch: function(e, t, n, i) {
                    return !!Array.isArray(i) && (0 !== i.length && ("object" == typeof i[0] ? i.some((function(e) {
                        return _t(e, t, Object.keys(t))
                    })) : i.some((function(i) {
                        return Et(t, e, n, i)
                    }))))
                },
                $allMatch: function(e, t, n, i) {
                    return !!Array.isArray(i) && (0 !== i.length && ("object" == typeof i[0] ? i.every((function(e) {
                        return _t(e, t, Object.keys(t))
                    })) : i.every((function(i) {
                        return Et(t, e, n, i)
                    }))))
                },
                $eq: function(e, t, n, i) {
                    return xt(i) && 0 === ft(i, t)
                },
                $gte: function(e, t, n, i) {
                    return xt(i) && ft(i, t) >= 0
                },
                $gt: function(e, t, n, i) {
                    return xt(i) && ft(i, t) > 0
                },
                $lte: function(e, t, n, i) {
                    return xt(i) && ft(i, t) <= 0
                },
                $lt: function(e, t, n, i) {
                    return xt(i) && ft(i, t) < 0
                },
                $exists: function(e, t, n, i) {
                    return t ? xt(i) : !xt(i)
                },
                $mod: function(e, t, n, i) {
                    return St(i) && function(e, t) {
                        var n = t[0],
                            i = t[1];
                        if (0 === n) throw new Error("Bad divisor, cannot divide by zero");
                        if (parseInt(n, 10) !== n) throw new Error("Divisor is not an integer");
                        if (parseInt(i, 10) !== i) throw new Error("Modulus is not an integer");
                        return parseInt(e, 10) === e && e % n === i
                    }(i, t)
                },
                $ne: function(e, t, n, i) {
                    return t.every((function(e) {
                        return 0 !== ft(i, e)
                    }))
                },
                $in: function(e, t, n, i) {
                    return St(i) && Lt(i, t)
                },
                $nin: function(e, t, n, i) {
                    return St(i) && !Lt(i, t)
                },
                $size: function(e, t, n, i) {
                    return St(i) && function(e, t) {
                        return e.length === t
                    }(i, t)
                },
                $all: function(e, t, n, i) {
                    return Array.isArray(i) && function(e, t) {
                        return t.every((function(t) {
                            return e.indexOf(t) > -1
                        }))
                    }(i, t)
                },
                $regex: function(e, t, n, i) {
                    return St(i) && function(e, t) {
                        return new RegExp(t).test(e)
                    }(i, t)
                },
                $type: function(e, t, n, i) {
                    return function(e, t) {
                        switch (t) {
                            case "null":
                                return null === e;
                            case "boolean":
                                return "boolean" == typeof e;
                            case "number":
                                return "number" == typeof e;
                            case "string":
                                return "string" == typeof e;
                            case "array":
                                return e instanceof Array;
                            case "object":
                                return "[object Object]" === {}.toString.call(e)
                        }
                        throw new Error(t + " not supported as a type.Please use one of object, string, array, number, boolean or null.")
                    }(i, t)
                }
            };

            function Ct(e, t) {
                if (e.selector && e.filter && "_selector" !== e.filter) {
                    var n = "string" == typeof e.filter ? e.filter : "function";
                    return t(new Error('selector invalid for filter "' + n + '"'))
                }
                t()
            }

            function It(e) {
                e.view && !e.filter && (e.filter = "_view"), e.selector && !e.filter && (e.filter = "_selector"), e.filter && "string" == typeof e.filter && ("_view" === e.filter ? e.view = le(e.view) : e.filter = le(e.filter))
            }

            function At(e, t) {
                return t.filter && "string" == typeof t.filter && !t.doc_ids && !ae(e.db)
            }

            function Pt(e, t) {
                var n = t.complete;
                if ("_view" === t.filter) {
                    if (!t.view || "string" != typeof t.view) {
                        var i = ne(J, "`view` filter parameter not found or invalid.");
                        return n(i)
                    }
                    var r = ce(t.view);
                    e.db.get("_design/" + r[0], (function(i, s) {
                        if (e.isCancelled) return n(null, {
                            status: "cancelled"
                        });
                        if (i) return n(ie(i));
                        var o = s && s.views && s.views[r[1]] && s.views[r[1]].map;
                        if (!o) return n(ne(F, s.views ? "missing json key: " + r[1] : "missing json key: views"));
                        t.filter = pe(["return function(doc) {", '  "use strict";', "  var emitted = false;", "  var emit = function (a, b) {", "    emitted = true;", "  };", "  var view = " + o + ";", "  view(doc);", "  if (emitted) {", "    return true;", "  }", "};"].join("\n"), {}), e.doChanges(t)
                    }))
                } else if (t.selector) t.filter = function(e) {
                    return function(e, t) {
                        if ("object" != typeof t) throw new Error("Selector error: expected a JSON object");
                        var n = wt([{
                            doc: e
                        }], {
                            selector: t = ht(t)
                        }, Object.keys(t));
                        return n && 1 === n.length
                    }(e, t.selector)
                }, e.doChanges(t);
                else {
                    var s = ce(t.filter);
                    e.db.get("_design/" + s[0], (function(i, r) {
                        if (e.isCancelled) return n(null, {
                            status: "cancelled"
                        });
                        if (i) return n(ie(i));
                        var o = r && r.filters && r.filters[s[1]];
                        if (!o) return n(ne(F, r && r.filters ? "missing json key: " + s[1] : "missing json key: filters"));
                        t.filter = pe('"use strict";\nreturn ' + o + ";", {}), e.doChanges(t)
                    }))
                }
            }

            function Ot(e) {
                return e.reduce((function(e, t) {
                    return e[t] = !0, e
                }), {})
            }
            tt.plugin((function(e) {
                e._changesFilterPlugin = {
                    validate: Ct,
                    normalize: It,
                    shouldFilter: At,
                    filter: Pt
                }
            })), tt.version = "7.2.2";
            var Bt = Ot(["_id", "_rev", "_attachments", "_deleted", "_revisions", "_revs_info", "_conflicts", "_deleted_conflicts", "_local_seq", "_rev_tree", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats", "_removed"]),
                Tt = Ot(["_attachments", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats"]);

            function jt(e) {
                if (!/^\d+-/.test(e)) return ne(ee);
                var t = e.indexOf("-"),
                    n = e.substring(0, t),
                    i = e.substring(t + 1);
                return {
                    prefix: parseInt(n, 10),
                    id: i
                }
            }

            function Mt(e, t, n) {
                var i, r, s;
                n || (n = {
                    deterministic_revs: !0
                });
                var o = {
                    status: "available"
                };
                if (e._deleted && (o.deleted = !0), t)
                    if (e._id || (e._id = Oe()), r = Pe(e, n.deterministic_revs), e._rev) {
                        if ((s = jt(e._rev)).error) return s;
                        e._rev_tree = [{
                            pos: s.prefix,
                            ids: [s.id, {
                                    status: "missing"
                                },
                                [
                                    [r, o, []]
                                ]
                            ]
                        }], i = s.prefix + 1
                    } else e._rev_tree = [{
                        pos: 1,
                        ids: [r, o, []]
                    }], i = 1;
                else if (e._revisions && (e._rev_tree = function(e, t) {
                        for (var n = e.start - e.ids.length + 1, i = e.ids, r = [i[0], t, []], s = 1, o = i.length; s < o; s++) r = [i[s], {
                                status: "missing"
                            },
                            [r]
                        ];
                        return [{
                            pos: n,
                            ids: r
                        }]
                    }(e._revisions, o), i = e._revisions.start, r = e._revisions.ids[0]), !e._rev_tree) {
                    if ((s = jt(e._rev)).error) return s;
                    i = s.prefix, r = s.id, e._rev_tree = [{
                        pos: i,
                        ids: [r, o, []]
                    }]
                }
                oe(e._id), e._rev = i + "-" + r;
                var a = {
                    metadata: {},
                    data: {}
                };
                for (var c in e)
                    if (Object.prototype.hasOwnProperty.call(e, c)) {
                        var l = "_" === c[0];
                        if (l && !Bt[c]) {
                            var u = ne(Y, c);
                            throw u.message = Y.message + ": " + c, u
                        }
                        l && !Tt[c] ? a.metadata[c.slice(1)] = e[c] : a.data[c] = e[c]
                    }
                return a
            }

            function Nt(e, t, n) {
                var i = function(e) {
                    try {
                        return ve(e)
                    } catch (e) {
                        return {
                            error: ne(W, "Attachment is not a valid base64 string")
                        }
                    }
                }(e.data);
                if (i.error) return n(i.error);
                e.length = i.length, e.data = "blob" === t ? we(i, e.content_type) : "base64" === t ? me(i) : i, Ie(i, (function(t) {
                    e.digest = "md5-" + t, n()
                }))
            }

            function Dt(e, t, n) {
                if (e.stub) return n();
                "string" == typeof e.data ? Nt(e, t, n) : function(e, t, n) {
                    Ie(e.data, (function(i) {
                        e.digest = "md5-" + i, e.length = e.data.size || e.data.length || 0, "binary" === t ? Se(e.data, (function(t) {
                            e.data = t, n()
                        })) : "base64" === t ? xe(e.data, (function(t) {
                            e.data = t, n()
                        })) : n()
                    }))
                }(e, t, n)
            }

            function Rt(e, t, n, i, r, s, o, a) {
                if (function(e, t) {
                        for (var n, i = e.slice(), r = t.split("-"), s = parseInt(r[0], 10), o = r[1]; n = i.pop();) {
                            if (n.pos === s && n.ids[0] === o) return !0;
                            for (var a = n.ids[2], c = 0, l = a.length; c < l; c++) i.push({
                                pos: n.pos + 1,
                                ids: a[c]
                            })
                        }
                        return !1
                    }(t.rev_tree, n.metadata.rev) && !a) return i[r] = n, s();
                var c = t.winningRev || Be(t),
                    l = "deleted" in t ? t.deleted : $e(t, c),
                    u = "deleted" in n.metadata ? n.metadata.deleted : $e(n.metadata),
                    d = /^1-/.test(n.metadata.rev);
                if (l && !u && a && d) {
                    var h = n.data;
                    h._rev = c, h._id = n.metadata.id, n = Mt(h, a)
                }
                var f = Ue(t.rev_tree, n.metadata.rev_tree[0], e);
                if (a && (l && u && "new_leaf" !== f.conflicts || !l && "new_leaf" !== f.conflicts || l && !u && "new_branch" === f.conflicts)) {
                    var p = ne(H);
                    return i[r] = p, s()
                }
                var g = n.metadata.rev;
                n.metadata.rev_tree = f.tree, n.stemmedRevs = f.stemmedRevs || [], t.rev_map && (n.metadata.rev_map = t.rev_map);
                var v = Be(n.metadata),
                    m = $e(n.metadata, v),
                    y = l === m ? 0 : l < m ? -1 : 1;
                o(n, v, m, g === v ? m : $e(n.metadata, g), !0, y, r, s)
            }

            function qt(e, t, n, i, s, o, a, c, l) {
                e = e || 1e3;
                var u = c.new_edits,
                    d = new r,
                    h = 0,
                    f = t.length;

                function p() {
                    ++h === f && l && l()
                }
                t.forEach((function(e, t) {
                    if (e._id && Ze(e._id)) {
                        var i = e._deleted ? "_removeLocal" : "_putLocal";
                        n[i](e, {
                            ctx: s
                        }, (function(e, n) {
                            o[t] = e || n, p()
                        }))
                    } else {
                        var r = e.metadata.id;
                        d.has(r) ? (f--, d.get(r).push([e, t])) : d.set(r, [
                            [e, t]
                        ])
                    }
                })), d.forEach((function(t, n) {
                    var r = 0;

                    function s() {
                        ++r < t.length ? l() : p()
                    }

                    function l() {
                        var l = t[r],
                            d = l[0],
                            h = l[1];
                        if (i.has(n)) Rt(e, i.get(n), d, o, h, s, a, u);
                        else {
                            var f = Ue([], d.metadata.rev_tree[0], e);
                            d.metadata.rev_tree = f.tree, d.stemmedRevs = f.stemmedRevs || [],
                                function(e, t, n) {
                                    var i = Be(e.metadata),
                                        r = $e(e.metadata, i);
                                    if ("was_delete" in c && r) return o[t] = ne(F, "deleted"), n();
                                    if (u && function(e) {
                                            return "missing" === e.metadata.rev_tree[0].ids[1].status
                                        }(e)) {
                                        var s = ne(H);
                                        return o[t] = s, n()
                                    }
                                    a(e, i, r, r, !1, r ? 0 : 1, t, n)
                                }(d, h, s)
                        }
                    }
                    l()
                }))
            }
            var Vt = "document-store",
                zt = "meta-store";

            function Ft(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return d.a.stringify(e)
                }
            }

            function Ht(e) {
                return function(t) {
                    var n = "unknown_error";
                    t.target && t.target.error && (n = t.target.error.name || t.target.error.message), e(ne(Q, n, t.type))
                }
            }

            function Ut(e, t, n) {
                return {
                    data: Ft(e),
                    winningRev: t,
                    deletedOrLocal: n ? "1" : "0",
                    seq: e.seq,
                    id: e.id
                }
            }

            function Gt(e) {
                if (!e) return null;
                var t = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return d.a.parse(e)
                    }
                }(e.data);
                return t.winningRev = e.winningRev, t.deleted = "1" === e.deletedOrLocal, t.seq = e.seq, t
            }

            function $t(e) {
                if (!e) return e;
                var t = e._doc_id_rev.lastIndexOf(":");
                return e._id = e._doc_id_rev.substring(0, t - 1), e._rev = e._doc_id_rev.substring(t + 1), delete e._doc_id_rev, e
            }

            function Zt(e, t, n, i) {
                n ? i(e ? "string" != typeof e ? e : _e(e, t) : ye([""], {
                    type: t
                })) : e ? "string" != typeof e ? Ee(e, (function(e) {
                    i(me(e))
                })) : i(e) : i("")
            }

            function Wt(e, t, n, i) {
                var r = Object.keys(e._attachments || {});
                if (!r.length) return i && i();
                var s = 0;

                function o() {
                    ++s === r.length && i && i()
                }
                r.forEach((function(i) {
                    t.attachments && t.include_docs ? function(e, t) {
                        var i = e._attachments[t],
                            r = i.digest;
                        n.objectStore("attach-store").get(r).onsuccess = function(e) {
                            i.body = e.target.result.body, o()
                        }
                    }(e, i) : (e._attachments[i].stub = !0, o())
                }))
            }

            function Kt(e, t) {
                return Promise.all(e.map((function(e) {
                    if (e.doc && e.doc._attachments) {
                        var n = Object.keys(e.doc._attachments);
                        return Promise.all(n.map((function(n) {
                            var i = e.doc._attachments[n];
                            if ("body" in i) {
                                var r = i.body,
                                    s = i.content_type;
                                return new Promise((function(o) {
                                    Zt(r, s, t, (function(t) {
                                        e.doc._attachments[n] = q(A(i, ["digest", "content_type"]), {
                                            data: t
                                        }), o()
                                    }))
                                }))
                            }
                        })))
                    }
                })))
            }

            function Yt(e, t, n) {
                var i = [],
                    r = n.objectStore("by-sequence"),
                    s = n.objectStore("attach-store"),
                    o = n.objectStore("attach-seq-store"),
                    a = e.length;

                function c() {
                    --a || function() {
                        if (!i.length) return;
                        i.forEach((function(e) {
                            o.index("digestSeq").count(IDBKeyRange.bound(e + "::", e + "::???", !1, !1)).onsuccess = function(t) {
                                t.target.result || s.delete(e)
                            }
                        }))
                    }()
                }
                e.forEach((function(e) {
                    var n = r.index("_doc_id_rev"),
                        s = t + "::" + e;
                    n.getKey(s).onsuccess = function(e) {
                        var t = e.target.result;
                        if ("number" != typeof t) return c();
                        r.delete(t), o.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess = function(e) {
                            var t = e.target.result;
                            if (t) {
                                var n = t.value.digestSeq.split("::")[0];
                                i.push(n), o.delete(t.primaryKey), t.continue()
                            } else c()
                        }
                    }
                }))
            }

            function Jt(e, t, n) {
                try {
                    return {
                        txn: e.transaction(t, n)
                    }
                } catch (e) {
                    return {
                        error: e
                    }
                }
            }
            var Xt = new M;

            function Qt(e, t, n, i, s, o) {
                for (var a, c, l, u, d, h, f, p, g = t.docs, v = 0, m = g.length; v < m; v++) {
                    var y = g[v];
                    y._id && Ze(y._id) || (y = g[v] = Mt(y, n.new_edits, e)).error && !f && (f = y)
                }
                if (f) return o(f);
                var b = !1,
                    w = 0,
                    _ = new Array(g.length),
                    E = new r,
                    S = !1,
                    x = i._meta.blobSupport ? "blob" : "base64";

                function L() {
                    b = !0, k()
                }

                function k() {
                    p && b && (p.docCount += w, h.put(p))
                }

                function C() {
                    S || (Xt.notify(i._meta.name), o(null, _))
                }

                function I(e, t, n, i, r, s, o, a) {
                    e.metadata.winningRev = t, e.metadata.deleted = n;
                    var c = e.data;
                    if (c._id = e.metadata.id, c._rev = e.metadata.rev, i && (c._deleted = !0), c._attachments && Object.keys(c._attachments).length) return function(e, t, n, i, r, s) {
                        var o = e.data,
                            a = 0,
                            c = Object.keys(o._attachments);

                        function l() {
                            a === c.length && A(e, t, n, i, r, s)
                        }

                        function d() {
                            a++, l()
                        }
                        c.forEach((function(n) {
                            var i = e.data._attachments[n];
                            if (i.stub) a++, l();
                            else {
                                var r = i.data;
                                delete i.data, i.revpos = parseInt(t, 10),
                                    function(e, t, n) {
                                        u.count(e).onsuccess = function(i) {
                                            if (i.target.result) return n();
                                            var r = {
                                                digest: e,
                                                body: t
                                            };
                                            u.put(r).onsuccess = n
                                        }
                                    }(i.digest, r, d)
                            }
                        }))
                    }(e, t, n, r, o, a);
                    w += s, k(), A(e, t, n, r, o, a)
                }

                function A(e, t, n, r, s, o) {
                    var u = e.data,
                        h = e.metadata;

                    function f(s) {
                        var o = e.stemmedRevs || [];
                        r && i.auto_compaction && (o = o.concat(function(e) {
                            var t = [];
                            return Te(e.rev_tree, (function(e, n, i, r, s) {
                                "available" !== s.status || e || (t.push(n + "-" + i), s.status = "missing")
                            })), t
                        }(e.metadata))), o && o.length && Yt(o, e.metadata.id, a), h.seq = s.target.result;
                        var l = Ut(h, t, n);
                        c.put(l).onsuccess = p
                    }

                    function p() {
                        _[s] = {
                                ok: !0,
                                id: h.id,
                                rev: h.rev
                            }, E.set(e.metadata.id, e.metadata),
                            function(e, t, n) {
                                var i = 0,
                                    r = Object.keys(e.data._attachments || {});
                                if (!r.length) return n();

                                function s() {
                                    ++i === r.length && n()
                                }

                                function o(n) {
                                    var i = e.data._attachments[n].digest,
                                        r = d.put({
                                            seq: t,
                                            digestSeq: i + "::" + t
                                        });
                                    r.onsuccess = s, r.onerror = function(e) {
                                        e.preventDefault(), e.stopPropagation(), s()
                                    }
                                }
                                for (var a = 0; a < r.length; a++) o(r[a])
                            }(e, h.seq, o)
                    }
                    u._doc_id_rev = h.id + "::" + h.rev, delete u._id, delete u._rev;
                    var g = l.put(u);
                    g.onsuccess = f, g.onerror = function(e) {
                        e.preventDefault(), e.stopPropagation(), l.index("_doc_id_rev").getKey(u._doc_id_rev).onsuccess = function(e) {
                            l.put(u, e.target.result).onsuccess = f
                        }
                    }
                }! function(e, t, n) {
                    if (!e.length) return n();
                    var i, r = 0;

                    function s() {
                        r++, e.length === r && (i ? n(i) : n())
                    }
                    e.forEach((function(e) {
                        var n = e.data && e.data._attachments ? Object.keys(e.data._attachments) : [],
                            r = 0;
                        if (!n.length) return s();

                        function o(e) {
                            i = e, ++r === n.length && s()
                        }
                        for (var a in e.data._attachments) e.data._attachments.hasOwnProperty(a) && Dt(e.data._attachments[a], t, o)
                    }))
                }(g, x, (function(t) {
                    if (t) return o(t);
                    ! function() {
                        var t = Jt(s, [Vt, "by-sequence", "attach-store", "local-store", "attach-seq-store", zt], "readwrite");
                        if (t.error) return o(t.error);
                        (a = t.txn).onabort = Ht(o), a.ontimeout = Ht(o), a.oncomplete = C, c = a.objectStore(Vt), l = a.objectStore("by-sequence"), u = a.objectStore("attach-store"), d = a.objectStore("attach-seq-store"), (h = a.objectStore(zt)).get(zt).onsuccess = function(e) {
                                p = e.target.result, k()
                            },
                            function(e) {
                                var t = [];
                                if (g.forEach((function(e) {
                                        e.data && e.data._attachments && Object.keys(e.data._attachments).forEach((function(n) {
                                            var i = e.data._attachments[n];
                                            i.stub && t.push(i.digest)
                                        }))
                                    })), !t.length) return e();
                                var n, i = 0;
                                t.forEach((function(r) {
                                    ! function(e, t) {
                                        u.get(e).onsuccess = function(n) {
                                            if (n.target.result) t();
                                            else {
                                                var i = ne(te, "unknown stub attachment with digest " + e);
                                                i.status = 412, t(i)
                                            }
                                        }
                                    }(r, (function(r) {
                                        r && !n && (n = r), ++i === t.length && e(n)
                                    }))
                                }))
                            }((function(t) {
                                if (t) return S = !0, o(t);
                                ! function() {
                                    if (!g.length) return;
                                    var t = 0;

                                    function r() {
                                        ++t === g.length && qt(e.revs_limit, g, i, E, a, _, I, n, L)
                                    }

                                    function s(e) {
                                        var t = Gt(e.target.result);
                                        t && E.set(t.id, t), r()
                                    }
                                    for (var o = 0, l = g.length; o < l; o++) {
                                        var u = g[o];
                                        if (u._id && Ze(u._id)) r();
                                        else c.get(u.metadata.id).onsuccess = s
                                    }
                                }()
                            }))
                    }()
                }))
            }

            function en(e, t, n, i, r) {
                var s, o, a;

                function c(e) {
                    o = e.target.result, s && r(s, o, a)
                }

                function l(e) {
                    s = e.target.result, o && r(s, o, a)
                }

                function u(e) {
                    var t = e.target.result;
                    if (!t) return r();
                    r([t.key], [t.value], t)
                } - 1 === i && (i = 1e3), "function" == typeof e.getAll && "function" == typeof e.getAllKeys && i > 1 && !n ? (a = {
                    continue: function() {
                        if (!s.length) return r();
                        var n, a = s[s.length - 1];
                        if (t && t.upper) try {
                            n = IDBKeyRange.bound(a, t.upper, !0, t.upperOpen)
                        } catch (e) {
                            if ("DataError" === e.name && 0 === e.code) return r()
                        } else n = IDBKeyRange.lowerBound(a, !0);
                        t = n, s = null, o = null, e.getAll(t, i).onsuccess = c, e.getAllKeys(t, i).onsuccess = l
                    }
                }, e.getAll(t, i).onsuccess = c, e.getAllKeys(t, i).onsuccess = l) : n ? e.openCursor(t, "prev").onsuccess = u : e.openCursor(t).onsuccess = u
            }

            function tn(e, t, n) {
                var i, r, s = "startkey" in e && e.startkey,
                    o = "endkey" in e && e.endkey,
                    a = "key" in e && e.key,
                    c = "keys" in e && e.keys,
                    l = e.skip || 0,
                    u = "number" == typeof e.limit ? e.limit : -1,
                    d = !1 !== e.inclusive_end;
                if (!c && (r = (i = function(e, t, n, i, r) {
                        try {
                            if (e && t) return r ? IDBKeyRange.bound(t, e, !n, !1) : IDBKeyRange.bound(e, t, !1, !n);
                            if (e) return r ? IDBKeyRange.upperBound(e) : IDBKeyRange.lowerBound(e);
                            if (t) return r ? IDBKeyRange.lowerBound(t, !n) : IDBKeyRange.upperBound(t, !n);
                            if (i) return IDBKeyRange.only(i)
                        } catch (e) {
                            return {
                                error: e
                            }
                        }
                        return null
                    }(s, o, d, a, e.descending)) && i.error) && ("DataError" !== r.name || 0 !== r.code)) return n(ne(Q, r.name, r.message));
                var h = [Vt, "by-sequence", zt];
                e.attachments && h.push("attach-store");
                var f = Jt(t, h, "readonly");
                if (f.error) return n(f.error);
                var p = f.txn;
                p.oncomplete = function() {
                    e.attachments ? Kt(E, e.binary).then(k) : k()
                }, p.onabort = Ht(n);
                var g, v, m, y = p.objectStore(Vt),
                    b = p.objectStore("by-sequence"),
                    w = p.objectStore(zt),
                    _ = b.index("_doc_id_rev"),
                    E = [];

                function S(t, n) {
                    var i = {
                        id: n.id,
                        key: n.id,
                        value: {
                            rev: t
                        }
                    };
                    n.deleted ? c && (E.push(i), i.value.deleted = !0, i.doc = null) : l-- <= 0 && (E.push(i), e.include_docs && function(t, n, i) {
                        var r = t.id + "::" + i;
                        _.get(r).onsuccess = function(i) {
                            if (n.doc = $t(i.target.result) || {}, e.conflicts) {
                                var r = Ne(t);
                                r.length && (n.doc._conflicts = r)
                            }
                            Wt(n.doc, e, p)
                        }
                    }(n, i, t))
                }

                function x(e) {
                    for (var t = 0, n = e.length; t < n && E.length !== u; t++) {
                        var i = e[t];
                        if (i.error && c) E.push(i);
                        else {
                            var r = Gt(i);
                            S(r.winningRev, r)
                        }
                    }
                }

                function L(e, t, n) {
                    n && (x(t), E.length < u && n.continue())
                }

                function k() {
                    var t = {
                        total_rows: g,
                        offset: e.skip,
                        rows: E
                    };
                    e.update_seq && void 0 !== v && (t.update_seq = v), n(null, t)
                }
                return w.get(zt).onsuccess = function(e) {
                    g = e.target.result.docCount
                }, e.update_seq && (m = function(e) {
                    e.target.result && e.target.result.length > 0 && (v = e.target.result[0])
                }, b.openCursor(null, "prev").onsuccess = function(e) {
                    var t = e.target.result,
                        n = void 0;
                    return t && t.key && (n = t.key), m({
                        target: {
                            result: [n]
                        }
                    })
                }), r || 0 === u ? void 0 : c ? function(e, t, n) {
                    var i = new Array(e.length),
                        r = 0;
                    e.forEach((function(s, o) {
                        t.get(s).onsuccess = function(t) {
                            t.target.result ? i[o] = t.target.result : i[o] = {
                                key: s,
                                error: "not_found"
                            }, ++r === e.length && n(e, i, {})
                        }
                    }))
                }(e.keys, y, L) : -1 === u ? function(e, t, n) {
                    if ("function" != typeof e.getAll) {
                        var i = [];
                        e.openCursor(t).onsuccess = function(e) {
                            var t = e.target.result;
                            t ? (i.push(t.value), t.continue()) : n({
                                target: {
                                    result: i
                                }
                            })
                        }
                    } else e.getAll(t).onsuccess = n
                }(y, i, (function(t) {
                    var n = t.target.result;
                    e.descending && (n = n.reverse()), x(n)
                })) : void en(y, i, e.descending, u + l, L)
            }
            var nn = !1,
                rn = [];

            function sn() {
                !nn && rn.length && (nn = !0, rn.shift()())
            }

            function on(e, t, n, s) {
                if ((e = L(e)).continuous) {
                    var o = n + ":" + Oe();
                    return Xt.addListener(n, o, t, e), Xt.notify(n), {
                        cancel: function() {
                            Xt.removeListener(n, o)
                        }
                    }
                }
                var a = e.doc_ids && new i(e.doc_ids);
                e.since = e.since || 0;
                var c = e.since,
                    l = "limit" in e ? e.limit : -1;
                0 === l && (l = 1);
                var u, d, h, f, p = [],
                    g = 0,
                    v = re(e),
                    m = new r;

                function y(e, t, n, i) {
                    if (n.seq !== t) return i();
                    if (n.winningRev === e._rev) return i(n, e);
                    var r = e._id + "::" + n.winningRev;
                    f.get(r).onsuccess = function(e) {
                        i(n, $t(e.target.result))
                    }
                }

                function b() {
                    e.complete(null, {
                        results: p,
                        last_seq: c
                    })
                }
                var w = [Vt, "by-sequence"];
                e.attachments && w.push("attach-store");
                var _ = Jt(s, w, "readonly");
                if (_.error) return e.complete(_.error);
                (u = _.txn).onabort = Ht(e.complete), u.oncomplete = function() {
                    !e.continuous && e.attachments ? Kt(p).then(b) : b()
                }, d = u.objectStore("by-sequence"), h = u.objectStore(Vt), f = d.index("_doc_id_rev"), en(d, e.since && !e.descending ? IDBKeyRange.lowerBound(e.since, !0) : null, e.descending, l, (function(t, n, i) {
                    if (i && t.length) {
                        var r = new Array(t.length),
                            s = new Array(t.length),
                            o = 0;
                        n.forEach((function(n, c) {
                            ! function(e, t, n) {
                                if (a && !a.has(e._id)) return n();
                                var i = m.get(e._id);
                                if (i) return y(e, t, i, n);
                                h.get(e._id).onsuccess = function(r) {
                                    i = Gt(r.target.result), m.set(e._id, i), y(e, t, i, n)
                                }
                            }($t(n), t[c], (function(n, a) {
                                s[c] = n, r[c] = a, ++o === t.length && function() {
                                    for (var t = [], n = 0, o = r.length; n < o && g !== l; n++) {
                                        var a = r[n];
                                        if (a) {
                                            var c = s[n];
                                            t.push(d(c, a))
                                        }
                                    }
                                    Promise.all(t).then((function(t) {
                                        for (var n = 0, i = t.length; n < i; n++) t[n] && e.onChange(t[n])
                                    })).catch(e.complete), g !== l && i.continue()
                                }()
                            }))
                        }))
                    }

                    function d(t, n) {
                        var i = e.processChange(n, t, e);
                        c = i.seq = t.seq;
                        var r = v(i);
                        return "object" == typeof r ? Promise.reject(r) : r ? (g++, e.return_docs && p.push(i), e.attachments && e.include_docs ? new Promise((function(t) {
                            Wt(n, e, u, (function() {
                                Kt([i], e.binary).then((function() {
                                    t(i)
                                }))
                            }))
                        })) : Promise.resolve(i)) : Promise.resolve()
                    }
                }))
            }
            var an, cn = new r,
                ln = new r;

            function un(e, t) {
                var n = this;
                ! function(e, t, n) {
                    rn.push((function() {
                        e((function(e, i) {
                            ! function(e, t, n, i) {
                                try {
                                    e(t, n)
                                } catch (t) {
                                    i.emit("error", t)
                                }
                            }(t, e, i, n), nn = !1, o()((function() {
                                sn()
                            }))
                        }))
                    })), sn()
                }((function(t) {
                    ! function(e, t, n) {
                        var i = t.name,
                            r = null;

                        function s(e, t) {
                            var n = e.objectStore(Vt);
                            n.createIndex("deletedOrLocal", "deletedOrLocal", {
                                unique: !1
                            }), n.openCursor().onsuccess = function(e) {
                                var i = e.target.result;
                                if (i) {
                                    var r = i.value,
                                        s = $e(r);
                                    r.deletedOrLocal = s ? "1" : "0", n.put(r), i.continue()
                                } else t()
                            }
                        }

                        function a(e, t) {
                            var n = e.objectStore("local-store"),
                                i = e.objectStore(Vt),
                                r = e.objectStore("by-sequence");
                            i.openCursor().onsuccess = function(e) {
                                var s = e.target.result;
                                if (s) {
                                    var o = s.value,
                                        a = o.id,
                                        c = Ze(a),
                                        l = Be(o);
                                    if (c) {
                                        var u = a + "::" + l,
                                            d = a + "::",
                                            h = a + "::~",
                                            f = r.index("_doc_id_rev"),
                                            p = IDBKeyRange.bound(d, h, !1, !1),
                                            g = f.openCursor(p);
                                        g.onsuccess = function(e) {
                                            if (g = e.target.result) {
                                                var t = g.value;
                                                t._doc_id_rev === u && n.put(t), r.delete(g.primaryKey), g.continue()
                                            } else i.delete(s.primaryKey), s.continue()
                                        }
                                    } else s.continue()
                                } else t && t()
                            }
                        }

                        function c(e, t) {
                            var n = e.objectStore("by-sequence"),
                                i = e.objectStore("attach-store"),
                                r = e.objectStore("attach-seq-store");
                            i.count().onsuccess = function(e) {
                                if (!e.target.result) return t();
                                n.openCursor().onsuccess = function(e) {
                                    var n = e.target.result;
                                    if (!n) return t();
                                    for (var i = n.value, s = n.primaryKey, o = Object.keys(i._attachments || {}), a = {}, c = 0; c < o.length; c++) {
                                        a[i._attachments[o[c]].digest] = !0
                                    }
                                    var l = Object.keys(a);
                                    for (c = 0; c < l.length; c++) {
                                        var u = l[c];
                                        r.put({
                                            seq: s,
                                            digestSeq: u + "::" + s
                                        })
                                    }
                                    n.continue()
                                }
                            }
                        }

                        function l(e) {
                            var t = e.objectStore("by-sequence"),
                                n = e.objectStore(Vt);
                            n.openCursor().onsuccess = function(e) {
                                var i = e.target.result;
                                if (i) {
                                    var r, s = (r = i.value).data ? Gt(r) : (r.deleted = "1" === r.deletedOrLocal, r);
                                    if (s.winningRev = s.winningRev || Be(s), s.seq) return o();
                                    ! function() {
                                        var e = s.id + "::",
                                            n = s.id + "::???",
                                            i = t.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e, n)),
                                            r = 0;
                                        i.onsuccess = function(e) {
                                            var t = e.target.result;
                                            if (!t) return s.seq = r, o();
                                            var n = t.primaryKey;
                                            n > r && (r = n), t.continue()
                                        }
                                    }()
                                }

                                function o() {
                                    var e = Ut(s, s.winningRev, s.deleted);
                                    n.put(e).onsuccess = function() {
                                        i.continue()
                                    }
                                }
                            }
                        }
                        e._meta = null, e._remote = !1, e.type = function() {
                            return "idb"
                        }, e._id = C((function(t) {
                            t(null, e._meta.instanceId)
                        })), e._bulkDocs = function(n, i, s) {
                            Qt(t, n, i, e, r, s)
                        }, e._get = function(e, t, n) {
                            var i, s, o, a = t.ctx;
                            if (!a) {
                                var c = Jt(r, [Vt, "by-sequence", "attach-store"], "readonly");
                                if (c.error) return n(c.error);
                                a = c.txn
                            }

                            function l() {
                                n(o, {
                                    doc: i,
                                    metadata: s,
                                    ctx: a
                                })
                            }
                            a.objectStore(Vt).get(e).onsuccess = function(e) {
                                if (!(s = Gt(e.target.result))) return o = ne(F, "missing"), l();
                                var n;
                                if (t.rev) n = t.latest ? function(e, t) {
                                    for (var n, i = t.rev_tree.slice(); n = i.pop();) {
                                        var r = n.pos,
                                            s = n.ids,
                                            o = s[0],
                                            a = s[1],
                                            c = s[2],
                                            l = 0 === c.length,
                                            u = n.history ? n.history.slice() : [];
                                        if (u.push({
                                                id: o,
                                                pos: r,
                                                opts: a
                                            }), l)
                                            for (var d = 0, h = u.length; d < h; d++) {
                                                var f = u[d];
                                                if (f.pos + "-" + f.id === e) return r + "-" + o
                                            }
                                        for (var p = 0, g = c.length; p < g; p++) i.push({
                                            pos: r + 1,
                                            ids: c[p],
                                            history: u
                                        })
                                    }
                                    throw new Error("Unable to resolve latest revision for id " + t.id + ", rev " + e)
                                }(t.rev, s) : t.rev;
                                else if (n = s.winningRev, $e(s)) return o = ne(F, "deleted"), l();
                                var r = a.objectStore("by-sequence"),
                                    c = s.id + "::" + n;
                                r.index("_doc_id_rev").get(c).onsuccess = function(e) {
                                    if ((i = e.target.result) && (i = $t(i)), !i) return o = ne(F, "missing"), l();
                                    l()
                                }
                            }
                        }, e._getAttachment = function(e, t, n, i, s) {
                            var o;
                            if (i.ctx) o = i.ctx;
                            else {
                                var a = Jt(r, [Vt, "by-sequence", "attach-store"], "readonly");
                                if (a.error) return s(a.error);
                                o = a.txn
                            }
                            var c = n.digest,
                                l = n.content_type;
                            o.objectStore("attach-store").get(c).onsuccess = function(e) {
                                Zt(e.target.result.body, l, i.binary, (function(e) {
                                    s(null, e)
                                }))
                            }
                        }, e._info = function(t) {
                            var n, i, s = Jt(r, [zt, "by-sequence"], "readonly");
                            if (s.error) return t(s.error);
                            var o = s.txn;
                            o.objectStore(zt).get(zt).onsuccess = function(e) {
                                i = e.target.result.docCount
                            }, o.objectStore("by-sequence").openCursor(null, "prev").onsuccess = function(e) {
                                var t = e.target.result;
                                n = t ? t.key : 0
                            }, o.oncomplete = function() {
                                t(null, {
                                    doc_count: i,
                                    update_seq: n,
                                    idb_attachment_format: e._meta.blobSupport ? "binary" : "base64"
                                })
                            }
                        }, e._allDocs = function(e, t) {
                            tn(e, r, t)
                        }, e._changes = function(t) {
                            return on(t, e, i, r)
                        }, e._close = function(e) {
                            r.close(), cn.delete(i), e()
                        }, e._getRevisionTree = function(e, t) {
                            var n = Jt(r, [Vt], "readonly");
                            if (n.error) return t(n.error);
                            n.txn.objectStore(Vt).get(e).onsuccess = function(e) {
                                var n = Gt(e.target.result);
                                n ? t(null, n.rev_tree) : t(ne(F))
                            }
                        }, e._doCompaction = function(e, t, n) {
                            var i = Jt(r, [Vt, "by-sequence", "attach-store", "attach-seq-store"], "readwrite");
                            if (i.error) return n(i.error);
                            var s = i.txn;
                            s.objectStore(Vt).get(e).onsuccess = function(n) {
                                var i = Gt(n.target.result);
                                Te(i.rev_tree, (function(e, n, i, r, s) {
                                    var o = n + "-" + i; - 1 !== t.indexOf(o) && (s.status = "missing")
                                })), Yt(t, e, s);
                                var r = i.winningRev,
                                    o = i.deleted;
                                s.objectStore(Vt).put(Ut(i, r, o))
                            }, s.onabort = Ht(n), s.oncomplete = function() {
                                n()
                            }
                        }, e._getLocal = function(e, t) {
                            var n = Jt(r, ["local-store"], "readonly");
                            if (n.error) return t(n.error);
                            var i = n.txn.objectStore("local-store").get(e);
                            i.onerror = Ht(t), i.onsuccess = function(e) {
                                var n = e.target.result;
                                n ? (delete n._doc_id_rev, t(null, n)) : t(ne(F))
                            }
                        }, e._putLocal = function(e, t, n) {
                            "function" == typeof t && (n = t, t = {}), delete e._revisions;
                            var i = e._rev,
                                s = e._id;
                            e._rev = i ? "0-" + (parseInt(i.split("-")[1], 10) + 1) : "0-1";
                            var o, a = t.ctx;
                            if (!a) {
                                var c = Jt(r, ["local-store"], "readwrite");
                                if (c.error) return n(c.error);
                                (a = c.txn).onerror = Ht(n), a.oncomplete = function() {
                                    o && n(null, o)
                                }
                            }
                            var l, u = a.objectStore("local-store");
                            i ? (l = u.get(s)).onsuccess = function(r) {
                                var s = r.target.result;
                                s && s._rev === i ? u.put(e).onsuccess = function() {
                                    o = {
                                        ok: !0,
                                        id: e._id,
                                        rev: e._rev
                                    }, t.ctx && n(null, o)
                                } : n(ne(H))
                            } : ((l = u.add(e)).onerror = function(e) {
                                n(ne(H)), e.preventDefault(), e.stopPropagation()
                            }, l.onsuccess = function() {
                                o = {
                                    ok: !0,
                                    id: e._id,
                                    rev: e._rev
                                }, t.ctx && n(null, o)
                            })
                        }, e._removeLocal = function(e, t, n) {
                            "function" == typeof t && (n = t, t = {});
                            var i, s = t.ctx;
                            if (!s) {
                                var o = Jt(r, ["local-store"], "readwrite");
                                if (o.error) return n(o.error);
                                (s = o.txn).oncomplete = function() {
                                    i && n(null, i)
                                }
                            }
                            var a = e._id,
                                c = s.objectStore("local-store"),
                                l = c.get(a);
                            l.onerror = Ht(n), l.onsuccess = function(r) {
                                var s = r.target.result;
                                s && s._rev === e._rev ? (c.delete(a), i = {
                                    ok: !0,
                                    id: a,
                                    rev: "0-0"
                                }, t.ctx && n(null, i)) : n(ne(F))
                            }
                        }, e._destroy = function(e, t) {
                            Xt.removeAllListeners(i);
                            var n = ln.get(i);
                            n && n.result && (n.result.close(), cn.delete(i));
                            var r = indexedDB.deleteDatabase(i);
                            r.onsuccess = function() {
                                ln.delete(i), j() && i in localStorage && delete localStorage[i], t(null, {
                                    ok: !0
                                })
                            }, r.onerror = Ht(t)
                        };
                        var u = cn.get(i);
                        if (u) return r = u.idb, e._meta = u.global, o()((function() {
                            n(null, e)
                        }));
                        var d = indexedDB.open(i, 5);
                        ln.set(i, d), d.onupgradeneeded = function(e) {
                            var t = e.target.result;
                            if (e.oldVersion < 1) return function(e) {
                                var t = e.createObjectStore(Vt, {
                                    keyPath: "id"
                                });
                                e.createObjectStore("by-sequence", {
                                    autoIncrement: !0
                                }).createIndex("_doc_id_rev", "_doc_id_rev", {
                                    unique: !0
                                }), e.createObjectStore("attach-store", {
                                    keyPath: "digest"
                                }), e.createObjectStore(zt, {
                                    keyPath: "id",
                                    autoIncrement: !1
                                }), e.createObjectStore("detect-blob-support"), t.createIndex("deletedOrLocal", "deletedOrLocal", {
                                    unique: !1
                                }), e.createObjectStore("local-store", {
                                    keyPath: "_id"
                                });
                                var n = e.createObjectStore("attach-seq-store", {
                                    autoIncrement: !0
                                });
                                n.createIndex("seq", "seq"), n.createIndex("digestSeq", "digestSeq", {
                                    unique: !0
                                })
                            }(t);
                            var n = e.currentTarget.transaction;
                            e.oldVersion < 3 && function(e) {
                                e.createObjectStore("local-store", {
                                    keyPath: "_id"
                                }).createIndex("_doc_id_rev", "_doc_id_rev", {
                                    unique: !0
                                })
                            }(t), e.oldVersion < 4 && function(e) {
                                var t = e.createObjectStore("attach-seq-store", {
                                    autoIncrement: !0
                                });
                                t.createIndex("seq", "seq"), t.createIndex("digestSeq", "digestSeq", {
                                    unique: !0
                                })
                            }(t);
                            var i = [s, a, c, l],
                                r = e.oldVersion;
                            ! function e() {
                                var t = i[r - 1];
                                r++, t && t(n, e)
                            }()
                        }, d.onsuccess = function(t) {
                            (r = t.target.result).onversionchange = function() {
                                r.close(), cn.delete(i)
                            }, r.onabort = function(e) {
                                N("error", "Database has a global failure", e.target.error), r.close(), cn.delete(i)
                            };
                            var s, o, a, c, l = r.transaction([zt, "detect-blob-support", Vt], "readwrite"),
                                u = !1;

                            function d() {
                                void 0 !== a && u && (e._meta = {
                                    name: i,
                                    instanceId: c,
                                    blobSupport: a
                                }, cn.set(i, {
                                    idb: r,
                                    global: e._meta
                                }), n(null, e))
                            }

                            function h() {
                                if (void 0 !== o && void 0 !== s) {
                                    var e = i + "_id";
                                    e in s ? c = s[e] : s[e] = c = Oe(), s.docCount = o, l.objectStore(zt).put(s)
                                }
                            }
                            l.objectStore(zt).get(zt).onsuccess = function(e) {
                                    s = e.target.result || {
                                        id: zt
                                    }, h()
                                },
                                function(e, t) {
                                    e.objectStore(Vt).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess = function(e) {
                                        t(e.target.result)
                                    }
                                }(l, (function(e) {
                                    o = e, h()
                                })), an || (an = function(e) {
                                    return new Promise((function(t) {
                                        var n = ye([""]),
                                            i = e.objectStore("detect-blob-support").put(n, "key");
                                        i.onsuccess = function() {
                                            var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                                n = navigator.userAgent.match(/Edge\//);
                                            t(n || !e || parseInt(e[1], 10) >= 43)
                                        }, i.onerror = e.onabort = function(e) {
                                            e.preventDefault(), e.stopPropagation(), t(!1)
                                        }
                                    })).catch((function() {
                                        return !1
                                    }))
                                }(l)), an.then((function(e) {
                                    a = e, d()
                                })), l.oncomplete = function() {
                                    u = !0, d()
                                }, l.onabort = Ht(n)
                        }, d.onerror = function(e) {
                            var t = e.target.error && e.target.error.message;
                            t ? -1 !== t.indexOf("stored database is a higher version") && (t = new Error('This DB was created with the newer "indexeddb" adapter, but you are trying to open it with the older "idb" adapter')) : t = "Failed to open indexedDB, are you in private browsing mode?", N("error", t), n(ne(Q, t))
                        }
                    }(n, e, t)
                }), t, n.constructor)
            }
            un.valid = function() {
                try {
                    return "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                } catch (e) {
                    return !1
                }
            };
            var dn = {};

            function hn(e) {
                var t = e.doc || e.ok,
                    n = t && t._attachments;
                n && Object.keys(n).forEach((function(e) {
                    var t = n[e];
                    t.data = _e(t.data, t.content_type)
                }))
            }

            function fn(e) {
                return /^_design/.test(e) ? "_design/" + encodeURIComponent(e.slice(8)) : /^_local/.test(e) ? "_local/" + encodeURIComponent(e.slice(7)) : encodeURIComponent(e)
            }

            function pn(e) {
                return e._attachments && Object.keys(e._attachments) ? Promise.all(Object.keys(e._attachments).map((function(t) {
                    var n = e._attachments[t];
                    if (n.data && "string" != typeof n.data) return new Promise((function(e) {
                        xe(n.data, e)
                    })).then((function(e) {
                        n.data = e
                    }))
                }))) : Promise.resolve()
            }

            function gn(e, t) {
                if (function(e) {
                        if (!e.prefix) return !1;
                        var t = fe(e.prefix).protocol;
                        return "http" === t || "https" === t
                    }(t)) {
                    var n = t.name.substr(t.prefix.length);
                    e = t.prefix.replace(/\/?$/, "/") + encodeURIComponent(n)
                }
                var i = fe(e);
                (i.user || i.password) && (i.auth = {
                    username: i.user,
                    password: i.password
                });
                var r = i.path.replace(/(^\/|\/$)/g, "").split("/");
                return i.db = r.pop(), -1 === i.db.indexOf("%") && (i.db = encodeURIComponent(i.db)), i.path = r.join("/"), i
            }

            function vn(e, t) {
                return mn(e, e.db + "/" + t)
            }

            function mn(e, t) {
                var n = e.path ? "/" : "";
                return e.protocol + "://" + e.host + (e.port ? ":" + e.port : "") + "/" + e.path + n + t
            }

            function yn(e) {
                return "?" + Object.keys(e).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join("&")
            }

            function bn(t, n) {
                var i = this,
                    r = gn(t.name, t),
                    s = vn(r, "");
                t = L(t);
                var a, c = function(e, n) {
                    if ((n = n || {}).headers = n.headers || new rt, n.credentials = "include", t.auth || r.auth) {
                        var i = t.auth || r.auth,
                            s = i.username + ":" + i.password,
                            o = me(unescape(encodeURIComponent(s)));
                        n.headers.set("Authorization", "Basic " + o)
                    }
                    var a = t.headers || {};
                    return Object.keys(a).forEach((function(e) {
                            n.headers.append(e, a[e])
                        })),
                        function(e) {
                            var t = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                                n = -1 !== t.indexOf("msie"),
                                i = -1 !== t.indexOf("trident"),
                                r = -1 !== t.indexOf("edge"),
                                s = !("method" in e) || "GET" === e.method;
                            return (n || i || r) && s
                        }(n) && (e += (-1 === e.indexOf("?") ? "?" : "&") + "_nonce=" + Date.now()), (t.fetch || it)(e, n)
                };

                function l(e, t) {
                    return I(e, f()((function(e) {
                        d().then((function() {
                            return t.apply(this, e)
                        })).catch((function(t) {
                            e.pop()(t)
                        }))
                    }))).bind(i)
                }

                function u(e, t, n) {
                    var i = {};
                    return (t = t || {}).headers = t.headers || new rt, t.headers.get("Content-Type") || t.headers.set("Content-Type", "application/json"), t.headers.get("Accept") || t.headers.set("Accept", "application/json"), c(e, t).then((function(e) {
                        return i.ok = e.ok, i.status = e.status, e.json()
                    })).then((function(e) {
                        if (i.data = e, !i.ok) {
                            i.data.status = i.status;
                            var t = ie(i.data);
                            if (n) return n(t);
                            throw t
                        }
                        if (Array.isArray(i.data) && (i.data = i.data.map((function(e) {
                                return e.error || e.missing ? ie(e) : e
                            }))), !n) return i;
                        n(null, i.data)
                    }))
                }

                function d() {
                    return t.skip_setup ? Promise.resolve() : a || ((a = u(s).catch((function(e) {
                        return e && e.status && 404 === e.status ? (R(404, "PouchDB is just detecting if the remote exists."), u(s, {
                            method: "PUT"
                        })) : Promise.reject(e)
                    })).catch((function(e) {
                        return !(!e || !e.status || 412 !== e.status) || Promise.reject(e)
                    }))).catch((function() {
                        a = null
                    })), a)
                }

                function h(e) {
                    return e.split("/").map(encodeURIComponent).join("/")
                }
                o()((function() {
                    n(null, i)
                })), i._remote = !0, i.type = function() {
                    return "http"
                }, i.id = l("id", (function(e) {
                    c(mn(r, "")).then((function(e) {
                        return e.json()
                    })).catch((function() {
                        return {}
                    })).then((function(t) {
                        var n = t && t.uuid ? t.uuid + r.db : vn(r, "");
                        e(null, n)
                    }))
                })), i.compact = l("compact", (function(e, t) {
                    "function" == typeof e && (t = e, e = {}), e = L(e), u(vn(r, "_compact"), {
                        method: "POST"
                    }).then((function() {
                        ! function n() {
                            i.info((function(i, r) {
                                r && !r.compact_running ? t(null, {
                                    ok: !0
                                }) : setTimeout(n, e.interval || 200)
                            }))
                        }()
                    }))
                })), i.bulkGet = I("bulkGet", (function(e, t) {
                    var n = this;

                    function i(t) {
                        var n = {};
                        e.revs && (n.revs = !0), e.attachments && (n.attachments = !0), e.latest && (n.latest = !0), u(vn(r, "_bulk_get" + yn(n)), {
                            method: "POST",
                            body: JSON.stringify({
                                docs: e.docs
                            })
                        }).then((function(n) {
                            e.attachments && e.binary && n.data.results.forEach((function(e) {
                                e.docs.forEach(hn)
                            })), t(null, n.data)
                        })).catch(t)
                    }

                    function s() {
                        var i = Math.ceil(e.docs.length / 50),
                            r = 0,
                            s = new Array(i);

                        function o(e) {
                            return function(n, o) {
                                s[e] = o.results, ++r === i && t(null, {
                                    results: se(s)
                                })
                            }
                        }
                        for (var a = 0; a < i; a++) {
                            var c = A(e, ["revs", "attachments", "binary", "latest"]);
                            c.docs = e.docs.slice(50 * a, Math.min(e.docs.length, 50 * (a + 1))), T(n, c, o(a))
                        }
                    }
                    var o = mn(r, ""),
                        a = dn[o];
                    "boolean" != typeof a ? i((function(e, n) {
                        e ? (dn[o] = !1, R(e.status, "PouchDB is just detecting if the remote supports the _bulk_get API."), s()) : (dn[o] = !0, t(null, n))
                    })) : a ? i(t) : s()
                })), i._info = function(e) {
                    d().then((function() {
                        return c(vn(r, ""))
                    })).then((function(e) {
                        return e.json()
                    })).then((function(t) {
                        t.host = vn(r, ""), e(null, t)
                    })).catch(e)
                }, i.fetch = function(e, t) {
                    return d().then((function() {
                        var n = "/" === e.substring(0, 1) ? mn(r, e.substring(1)) : vn(r, e);
                        return c(n, t)
                    }))
                }, i.get = l("get", (function(e, t, n) {
                    "function" == typeof t && (n = t, t = {});
                    var i = {};

                    function s(e) {
                        var n = e._attachments,
                            i = n && Object.keys(n);
                        if (n && i.length) return function(e, t) {
                            return new Promise((function(n, i) {
                                var r, s = 0,
                                    o = 0,
                                    a = 0,
                                    c = e.length;

                                function l() {
                                    ++a === c ? r ? i(r) : n() : h()
                                }

                                function u() {
                                    s--, l()
                                }

                                function d(e) {
                                    s--, r = r || e, l()
                                }

                                function h() {
                                    for (; s < t && o < c;) s++, e[o++]().then(u, d)
                                }
                                h()
                            }))
                        }(i.map((function(i) {
                            return function() {
                                return function(i) {
                                    var s = n[i],
                                        o = fn(e._id) + "/" + h(i) + "?rev=" + e._rev;
                                    return c(vn(r, o)).then((function(e) {
                                        return "buffer" in e ? e.buffer() : e.blob()
                                    })).then((function(e) {
                                        if (t.binary) {
                                            var n = Object.getOwnPropertyDescriptor(e.__proto__, "type");
                                            return n && !n.set || (e.type = s.content_type), e
                                        }
                                        return new Promise((function(t) {
                                            xe(e, t)
                                        }))
                                    })).then((function(e) {
                                        delete s.stub, delete s.length, s.data = e
                                    }))
                                }(i)
                            }
                        })), 5)
                    }(t = L(t)).revs && (i.revs = !0), t.revs_info && (i.revs_info = !0), t.latest && (i.latest = !0), t.open_revs && ("all" !== t.open_revs && (t.open_revs = JSON.stringify(t.open_revs)), i.open_revs = t.open_revs), t.rev && (i.rev = t.rev), t.conflicts && (i.conflicts = t.conflicts), t.update_seq && (i.update_seq = t.update_seq), e = fn(e), u(vn(r, e + yn(i))).then((function(e) {
                        return Promise.resolve().then((function() {
                            if (t.attachments) return n = e.data, Array.isArray(n) ? Promise.all(n.map((function(e) {
                                if (e.ok) return s(e.ok)
                            }))) : s(n);
                            var n
                        })).then((function() {
                            n(null, e.data)
                        }))
                    })).catch((function(t) {
                        t.docId = e, n(t)
                    }))
                })), i.remove = l("remove", (function(e, t, n, i) {
                    var s;
                    "string" == typeof t ? (s = {
                        _id: e,
                        _rev: t
                    }, "function" == typeof n && (i = n, n = {})) : (s = e, "function" == typeof t ? (i = t, n = {}) : (i = n, n = t));
                    var o = s._rev || n.rev;
                    u(vn(r, fn(s._id)) + "?rev=" + o, {
                        method: "DELETE"
                    }, i).catch(i)
                })), i.getAttachment = l("getAttachment", (function(t, n, i, s) {
                    "function" == typeof i && (s = i, i = {});
                    var o, a = i.rev ? "?rev=" + i.rev : "",
                        l = vn(r, fn(t)) + "/" + h(n) + a;
                    c(l, {
                        method: "GET"
                    }).then((function(t) {
                        if (o = t.headers.get("content-type"), t.ok) return void 0 === e || e.browser || "function" != typeof t.buffer ? t.blob() : t.buffer();
                        throw t
                    })).then((function(t) {
                        void 0 === e || e.browser || (t.type = o), s(null, t)
                    })).catch((function(e) {
                        s(e)
                    }))
                })), i.removeAttachment = l("removeAttachment", (function(e, t, n, i) {
                    u(vn(r, fn(e) + "/" + h(t)) + "?rev=" + n, {
                        method: "DELETE"
                    }, i).catch(i)
                })), i.putAttachment = l("putAttachment", (function(e, t, n, i, s, o) {
                    "function" == typeof s && (o = s, s = i, i = n, n = null);
                    var a = fn(e) + "/" + h(t),
                        c = vn(r, a);
                    if (n && (c += "?rev=" + n), "string" == typeof i) {
                        var l;
                        try {
                            l = ve(i)
                        } catch (e) {
                            return o(ne(W, "Attachment is not a valid base64 string"))
                        }
                        i = l ? we(l, s) : ""
                    }
                    u(c, {
                        headers: new rt({
                            "Content-Type": s
                        }),
                        method: "PUT",
                        body: i
                    }, o).catch(o)
                })), i._bulkDocs = function(e, t, n) {
                    e.new_edits = t.new_edits, d().then((function() {
                        return Promise.all(e.docs.map(pn))
                    })).then((function() {
                        return u(vn(r, "_bulk_docs"), {
                            method: "POST",
                            body: JSON.stringify(e)
                        }, n)
                    })).catch(n)
                }, i._put = function(e, t, n) {
                    d().then((function() {
                        return pn(e)
                    })).then((function() {
                        return u(vn(r, fn(e._id)), {
                            method: "PUT",
                            body: JSON.stringify(e)
                        })
                    })).then((function(e) {
                        n(null, e.data)
                    })).catch((function(t) {
                        t.docId = e && e._id, n(t)
                    }))
                }, i.allDocs = l("allDocs", (function(e, t) {
                    "function" == typeof e && (t = e, e = {});
                    var n, i = {},
                        s = "GET";
                    (e = L(e)).conflicts && (i.conflicts = !0), e.update_seq && (i.update_seq = !0), e.descending && (i.descending = !0), e.include_docs && (i.include_docs = !0), e.attachments && (i.attachments = !0), e.key && (i.key = JSON.stringify(e.key)), e.start_key && (e.startkey = e.start_key), e.startkey && (i.startkey = JSON.stringify(e.startkey)), e.end_key && (e.endkey = e.end_key), e.endkey && (i.endkey = JSON.stringify(e.endkey)), void 0 !== e.inclusive_end && (i.inclusive_end = !!e.inclusive_end), void 0 !== e.limit && (i.limit = e.limit), void 0 !== e.skip && (i.skip = e.skip);
                    var o = yn(i);
                    void 0 !== e.keys && (s = "POST", n = {
                        keys: e.keys
                    }), u(vn(r, "_all_docs" + o), {
                        method: s,
                        body: JSON.stringify(n)
                    }).then((function(n) {
                        e.include_docs && e.attachments && e.binary && n.data.rows.forEach(hn), t(null, n.data)
                    })).catch(t)
                })), i._changes = function(e) {
                    var t = "batch_size" in e ? e.batch_size : 25;
                    (e = L(e)).continuous && !("heartbeat" in e) && (e.heartbeat = 1e4);
                    var n = "timeout" in e ? e.timeout : 3e4;
                    "timeout" in e && e.timeout && n - e.timeout < 5e3 && (n = e.timeout + 5e3), "heartbeat" in e && e.heartbeat && n - e.heartbeat < 5e3 && (n = e.heartbeat + 5e3);
                    var i = {};
                    "timeout" in e && e.timeout && (i.timeout = e.timeout);
                    var s = void 0 !== e.limit && e.limit,
                        a = s;
                    if (e.style && (i.style = e.style), (e.include_docs || e.filter && "function" == typeof e.filter) && (i.include_docs = !0), e.attachments && (i.attachments = !0), e.continuous && (i.feed = "longpoll"), e.seq_interval && (i.seq_interval = e.seq_interval), e.conflicts && (i.conflicts = !0), e.descending && (i.descending = !0), e.update_seq && (i.update_seq = !0), "heartbeat" in e && e.heartbeat && (i.heartbeat = e.heartbeat), e.filter && "string" == typeof e.filter && (i.filter = e.filter), e.view && "string" == typeof e.view && (i.filter = "_view", i.view = e.view), e.query_params && "object" == typeof e.query_params)
                        for (var c in e.query_params) e.query_params.hasOwnProperty(c) && (i[c] = e.query_params[c]);
                    var l, h = "GET";
                    e.doc_ids ? (i.filter = "_doc_ids", h = "POST", l = {
                        doc_ids: e.doc_ids
                    }) : e.selector && (i.filter = "_selector", h = "POST", l = {
                        selector: e.selector
                    });
                    var f, p = new nt,
                        g = function(n, o) {
                            if (!e.aborted) {
                                i.since = n, "object" == typeof i.since && (i.since = JSON.stringify(i.since)), e.descending ? s && (i.limit = a) : i.limit = !s || a > t ? t : a;
                                var c = vn(r, "_changes" + yn(i)),
                                    g = {
                                        signal: p.signal,
                                        method: h,
                                        body: JSON.stringify(l)
                                    };
                                f = n, e.aborted || d().then((function() {
                                    return u(c, g, o)
                                })).catch(o)
                            }
                        },
                        v = {
                            results: []
                        },
                        m = function(n, i) {
                            if (!e.aborted) {
                                var r = 0;
                                if (i && i.results) {
                                    r = i.results.length, v.last_seq = i.last_seq;
                                    var c = null,
                                        l = null;
                                    "number" == typeof i.pending && (c = i.pending), "string" != typeof v.last_seq && "number" != typeof v.last_seq || (l = v.last_seq);
                                    e.query_params, i.results = i.results.filter((function(t) {
                                        a--;
                                        var n = re(e)(t);
                                        return n && (e.include_docs && e.attachments && e.binary && hn(t), e.return_docs && v.results.push(t), e.onChange(t, c, l)), n
                                    }))
                                } else if (n) return e.aborted = !0, void e.complete(n);
                                i && i.last_seq && (f = i.last_seq);
                                var u = s && a <= 0 || i && r < t || e.descending;
                                (!e.continuous || s && a <= 0) && u ? e.complete(null, v) : o()((function() {
                                    g(f, m)
                                }))
                            }
                        };
                    return g(e.since || 0, m), {
                        cancel: function() {
                            e.aborted = !0, p.abort()
                        }
                    }
                }, i.revsDiff = l("revsDiff", (function(e, t, n) {
                    "function" == typeof t && (n = t, t = {}), u(vn(r, "_revs_diff"), {
                        method: "POST",
                        body: JSON.stringify(e)
                    }, n).catch(n)
                })), i._close = function(e) {
                    e()
                }, i._destroy = function(e, t) {
                    u(vn(r, ""), {
                        method: "DELETE"
                    }).then((function(e) {
                        t(null, e)
                    })).catch((function(e) {
                        404 === e.status ? t(null, {
                            ok: !0
                        }) : t(e)
                    }))
                }
            }

            function wn(e) {
                this.status = 400, this.name = "query_parse_error", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, wn)
                } catch (e) {}
            }

            function _n(e) {
                this.status = 404, this.name = "not_found", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, _n)
                } catch (e) {}
            }

            function En(e) {
                this.status = 500, this.name = "invalid_value", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, En)
                } catch (e) {}
            }

            function Sn(e, t) {
                return t && e.then((function(e) {
                    o()((function() {
                        t(null, e)
                    }))
                }), (function(e) {
                    o()((function() {
                        t(e)
                    }))
                })), e
            }

            function xn(e, t) {
                return function() {
                    var n = arguments,
                        i = this;
                    return e.add((function() {
                        return t.apply(i, n)
                    }))
                }
            }

            function Ln(e) {
                var t = new i(e),
                    n = new Array(t.size),
                    r = -1;
                return t.forEach((function(e) {
                    n[++r] = e
                })), n
            }

            function kn(e) {
                var t = new Array(e.size),
                    n = -1;
                return e.forEach((function(e, i) {
                    t[++n] = i
                })), t
            }

            function Cn(e) {
                return new En("builtin " + e + " function requires map values to be numbers or number arrays")
            }

            function In(e) {
                for (var t = 0, n = 0, i = e.length; n < i; n++) {
                    var r = e[n];
                    if ("number" != typeof r) {
                        if (!Array.isArray(r)) throw Cn("_sum");
                        t = "number" == typeof t ? [t] : t;
                        for (var s = 0, o = r.length; s < o; s++) {
                            var a = r[s];
                            if ("number" != typeof a) throw Cn("_sum");
                            void 0 === t[s] ? t.push(a) : t[s] += a
                        }
                    } else "number" == typeof t ? t += r : t[0] += r
                }
                return t
            }
            bn.valid = function() {
                return !0
            }, g()(wn, Error), g()(_n, Error), g()(En, Error);
            var An = N.bind(null, "log"),
                Pn = Array.isArray,
                On = JSON.parse;

            function Bn(e, t) {
                return pe("return (" + e.replace(/;\s*$/, "") + ");", {
                    emit: t,
                    sum: In,
                    log: An,
                    isArray: Pn,
                    toJSON: On
                })
            }

            function Tn() {
                this.promise = new Promise((function(e) {
                    e()
                }))
            }

            function jn(e) {
                if (!e) return "undefined";
                switch (typeof e) {
                    case "function":
                    case "string":
                        return e.toString();
                    default:
                        return JSON.stringify(e)
                }
            }

            function Mn(e, t, n, i, r, s) {
                var o, a = function(e, t) {
                    return jn(e) + jn(t) + "undefined"
                }(n, i);
                if (!r && (o = e._cachedViews = e._cachedViews || {})[a]) return o[a];
                var c = e.info().then((function(c) {
                    var l = c.db_name + "-mrview-" + (r ? "temp" : Ae(a));
                    return ge(e, "_local/" + s, (function(e) {
                        e.views = e.views || {};
                        var n = t; - 1 === n.indexOf("/") && (n = t + "/" + t);
                        var i = e.views[n] = e.views[n] || {};
                        if (!i[l]) return i[l] = !0, e
                    })).then((function() {
                        return e.registerDependentDatabase(l).then((function(t) {
                            var r = t.db;
                            r.auto_compaction = !0;
                            var s = {
                                name: l,
                                db: r,
                                sourceDB: e,
                                adapter: e.adapter,
                                mapFun: n,
                                reduceFun: i
                            };
                            return s.db.get("_local/lastSeq").catch((function(e) {
                                if (404 !== e.status) throw e
                            })).then((function(e) {
                                return s.seq = e ? e.seq : 0, o && s.db.once("destroyed", (function() {
                                    delete o[a]
                                })), s
                            }))
                        }))
                    }))
                }));
                return o && (o[a] = c), c
            }
            Tn.prototype.add = function(e) {
                return this.promise = this.promise.catch((function() {})).then((function() {
                    return e()
                })), this.promise
            }, Tn.prototype.finish = function() {
                return this.promise
            };
            var Nn = {},
                Dn = new Tn;

            function Rn(e) {
                return -1 === e.indexOf("/") ? [e, e] : e.split("/")
            }

            function qn(e, t) {
                try {
                    e.emit("error", t)
                } catch (e) {
                    N("error", "The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."), N("error", t)
                }
            }
            var Vn = function(e, t) {
                    return In(t)
                },
                zn = function(e, t) {
                    return t.length
                },
                Fn = function(e, t) {
                    return {
                        sum: In(t),
                        min: Math.min.apply(null, t),
                        max: Math.max.apply(null, t),
                        count: t.length,
                        sumsqr: function(e) {
                            for (var t = 0, n = 0, i = e.length; n < i; n++) {
                                var r = e[n];
                                t += r * r
                            }
                            return t
                        }(t)
                    }
                };
            var Hn = function(e, t, n, s) {
                function a(e, t, n) {
                    try {
                        t(n)
                    } catch (t) {
                        qn(e, t)
                    }
                }

                function c(e, t, n, i, r) {
                    try {
                        return {
                            output: t(n, i, r)
                        }
                    } catch (t) {
                        return qn(e, t), {
                            error: t
                        }
                    }
                }

                function l(e, t) {
                    var n = ft(e.key, t.key);
                    return 0 !== n ? n : ft(e.value, t.value)
                }

                function u(e, t, n) {
                    return n = n || 0, "number" == typeof t ? e.slice(n, t + n) : n > 0 ? e.slice(n) : e
                }

                function d(e) {
                    var t = e.value;
                    return t && "object" == typeof t && t._id || e.id
                }

                function h(e) {
                    return function(t) {
                        return e.include_docs && e.attachments && e.binary && function(e) {
                            e.rows.forEach((function(e) {
                                var t = e.doc && e.doc._attachments;
                                t && Object.keys(t).forEach((function(e) {
                                    var n = t[e];
                                    t[e].data = _e(n.data, n.content_type)
                                }))
                            }))
                        }(t), t
                    }
                }

                function p(e, t, n, i) {
                    var r = t[e];
                    void 0 !== r && (i && (r = encodeURIComponent(JSON.stringify(r))), n.push(e + "=" + r))
                }

                function g(e) {
                    if (void 0 !== e) {
                        var t = Number(e);
                        return isNaN(t) || t !== parseInt(e, 10) ? e : t
                    }
                }

                function v(e, t) {
                    var n = e.descending ? "endkey" : "startkey",
                        i = e.descending ? "startkey" : "endkey";
                    if (void 0 !== e[n] && void 0 !== e[i] && ft(e[n], e[i]) > 0) throw new wn("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");
                    if (t.reduce && !1 !== e.reduce) {
                        if (e.include_docs) throw new wn("{include_docs:true} is invalid for reduce");
                        if (e.keys && e.keys.length > 1 && !e.group && !e.group_level) throw new wn("Multi-key fetches for reduce views must use {group: true}")
                    }["group_level", "limit", "skip"].forEach((function(t) {
                        var n = function(e) {
                            if (e) {
                                if ("number" != typeof e) return new wn('Invalid value for integer: "' + e + '"');
                                if (e < 0) return new wn('Invalid value for positive integer: "' + e + '"')
                            }
                        }(e[t]);
                        if (n) throw n
                    }))
                }

                function m(e) {
                    return function(t) {
                        if (404 === t.status) return e;
                        throw t
                    }
                }

                function y(e, t, n) {
                    var r = "_local/doc_" + e,
                        s = {
                            _id: r,
                            keys: []
                        },
                        o = n.get(e),
                        a = o[0];
                    return (function(e) {
                        return 1 === e.length && /^1-/.test(e[0].rev)
                    }(o[1]) ? Promise.resolve(s) : t.db.get(r).catch(m(s))).then((function(e) {
                        return function(e) {
                            return e.keys.length ? t.db.allDocs({
                                keys: e.keys,
                                include_docs: !0
                            }) : Promise.resolve({
                                rows: []
                            })
                        }(e).then((function(t) {
                            return function(e, t) {
                                for (var n = [], r = new i, s = 0, o = t.rows.length; s < o; s++) {
                                    var c = t.rows[s].doc;
                                    if (c && (n.push(c), r.add(c._id), c._deleted = !a.has(c._id), !c._deleted)) {
                                        var l = a.get(c._id);
                                        "value" in l && (c.value = l.value)
                                    }
                                }
                                var u = kn(a);
                                return u.forEach((function(e) {
                                    if (!r.has(e)) {
                                        var t = {
                                                _id: e
                                            },
                                            i = a.get(e);
                                        "value" in i && (t.value = i.value), n.push(t)
                                    }
                                })), e.keys = Ln(u.concat(e.keys)), n.push(e), n
                            }(e, t)
                        }))
                    }))
                }

                function b(e) {
                    var t = "string" == typeof e ? e : e.name,
                        n = Nn[t];
                    return n || (n = Nn[t] = new Tn), n
                }

                function w(e) {
                    return xn(b(e), (function() {
                        return function(e) {
                            var n, i;
                            var s = t(e.mapFun, (function(e, t) {
                                    var r = {
                                        id: i._id,
                                        key: pt(e)
                                    };
                                    null != t && (r.value = pt(t)), n.push(r)
                                })),
                                o = e.seq || 0;

                            function c(t, n) {
                                return function() {
                                    return function(e, t, n) {
                                        return e.db.get("_local/lastSeq").catch(m({
                                            _id: "_local/lastSeq",
                                            seq: 0
                                        })).then((function(i) {
                                            var r = kn(t);
                                            return Promise.all(r.map((function(n) {
                                                return y(n, e, t)
                                            }))).then((function(t) {
                                                var r = se(t);
                                                return i.seq = n, r.push(i), e.db.bulkDocs({
                                                    docs: r
                                                })
                                            }))
                                        }))
                                    }(e, t, n)
                                }
                            }
                            var u = new Tn;

                            function d() {
                                return e.sourceDB.changes({
                                    return_docs: !0,
                                    conflicts: !0,
                                    include_docs: !0,
                                    style: "all_docs",
                                    since: o,
                                    limit: 50
                                }).then(h)
                            }

                            function h(t) {
                                var h = t.results;
                                if (h.length) {
                                    var p = function(t) {
                                        for (var c = new r, u = 0, d = t.length; u < d; u++) {
                                            var h = t[u];
                                            if ("_" !== h.doc._id[0]) {
                                                n = [], (i = h.doc)._deleted || a(e.sourceDB, s, i), n.sort(l);
                                                var p = f(n);
                                                c.set(h.doc._id, [p, h.changes])
                                            }
                                            o = h.seq
                                        }
                                        return c
                                    }(h);
                                    if (u.add(c(p, o)), !(h.length < 50)) return d()
                                }
                            }

                            function f(e) {
                                for (var t, n = new r, i = 0, s = e.length; i < s; i++) {
                                    var o = e[i],
                                        a = [o.key, o.id];
                                    i > 0 && 0 === ft(o.key, t) && a.push(i), n.set(vt(a), o), t = o.key
                                }
                                return n
                            }
                            return d().then((function() {
                                return u.finish()
                            })).then((function() {
                                e.seq = o
                            }))
                        }(e)
                    }))()
                }

                function _(e, t) {
                    return xn(b(e), (function() {
                        return function(e, t) {
                            var i, s = e.reduceFun && !1 !== t.reduce,
                                o = t.skip || 0;
                            void 0 === t.keys || t.keys.length || (t.limit = 0, delete t.keys);

                            function a(t) {
                                return t.include_docs = !0, e.db.allDocs(t).then((function(e) {
                                    return i = e.total_rows, e.rows.map((function(e) {
                                        if ("value" in e.doc && "object" == typeof e.doc.value && null !== e.doc.value) {
                                            var t = Object.keys(e.doc.value).sort(),
                                                n = ["id", "key", "value"];
                                            if (!(t < n || t > n)) return e.doc.value
                                        }
                                        var i = function(e) {
                                            for (var t = [], n = [], i = 0;;) {
                                                var r = e[i++];
                                                if ("\0" !== r) switch (r) {
                                                    case "1":
                                                        t.push(null);
                                                        break;
                                                    case "2":
                                                        t.push("1" === e[i]), i++;
                                                        break;
                                                    case "3":
                                                        var s = mt(e, i);
                                                        t.push(s.num), i += s.length;
                                                        break;
                                                    case "4":
                                                        for (var o = "";;) {
                                                            var a = e[i];
                                                            if ("\0" === a) break;
                                                            o += a, i++
                                                        }
                                                        o = o.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, ""), t.push(o);
                                                        break;
                                                    case "5":
                                                        var c = {
                                                            element: [],
                                                            index: t.length
                                                        };
                                                        t.push(c.element), n.push(c);
                                                        break;
                                                    case "6":
                                                        var l = {
                                                            element: {},
                                                            index: t.length
                                                        };
                                                        t.push(l.element), n.push(l);
                                                        break;
                                                    default:
                                                        throw new Error("bad collationIndex or unexpectedly reached end of input: " + r)
                                                } else {
                                                    if (1 === t.length) return t.pop();
                                                    yt(t, n)
                                                }
                                            }
                                        }(e.doc._id);
                                        return {
                                            key: i[0],
                                            id: i[1],
                                            value: "value" in e.doc ? e.doc.value : null
                                        }
                                    }))
                                }))
                            }

                            function l(a) {
                                var l;
                                if (l = s ? function(e, t, i) {
                                        0 === i.group_level && delete i.group_level;
                                        var r = i.group || i.group_level,
                                            s = n(e.reduceFun),
                                            o = [],
                                            a = isNaN(i.group_level) ? Number.POSITIVE_INFINITY : i.group_level;
                                        t.forEach((function(e) {
                                            var t = o[o.length - 1],
                                                n = r ? e.key : null;
                                            if (r && Array.isArray(n) && (n = n.slice(0, a)), t && 0 === ft(t.groupKey, n)) return t.keys.push([e.key, e.id]), void t.values.push(e.value);
                                            o.push({
                                                keys: [
                                                    [e.key, e.id]
                                                ],
                                                values: [e.value],
                                                groupKey: n
                                            })
                                        })), t = [];
                                        for (var l = 0, d = o.length; l < d; l++) {
                                            var h = o[l],
                                                f = c(e.sourceDB, s, h.keys, h.values, !1);
                                            if (f.error && f.error instanceof En) throw f.error;
                                            t.push({
                                                value: f.error ? null : f.output,
                                                key: h.groupKey
                                            })
                                        }
                                        return {
                                            rows: u(t, i.limit, i.skip)
                                        }
                                    }(e, a, t) : {
                                        total_rows: i,
                                        offset: o,
                                        rows: a
                                    }, t.update_seq && (l.update_seq = e.seq), t.include_docs) {
                                    var h = Ln(a.map(d));
                                    return e.sourceDB.allDocs({
                                        keys: h,
                                        include_docs: !0,
                                        conflicts: t.conflicts,
                                        attachments: t.attachments,
                                        binary: t.binary
                                    }).then((function(e) {
                                        var t = new r;
                                        return e.rows.forEach((function(e) {
                                            t.set(e.id, e.doc)
                                        })), a.forEach((function(e) {
                                            var n = d(e),
                                                i = t.get(n);
                                            i && (e.doc = i)
                                        })), l
                                    }))
                                }
                                return l
                            }
                            if (void 0 !== t.keys) {
                                var h = t.keys.map((function(e) {
                                    var n = {
                                        startkey: vt([e]),
                                        endkey: vt([e, {}])
                                    };
                                    return t.update_seq && (n.update_seq = !0), a(n)
                                }));
                                return Promise.all(h).then(se).then(l)
                            }
                            var f, p, g = {
                                descending: t.descending
                            };
                            if (t.update_seq && (g.update_seq = !0), "start_key" in t && (f = t.start_key), "startkey" in t && (f = t.startkey), "end_key" in t && (p = t.end_key), "endkey" in t && (p = t.endkey), void 0 !== f && (g.startkey = t.descending ? vt([f, {}]) : vt([f])), void 0 !== p) {
                                var v = !1 !== t.inclusive_end;
                                t.descending && (v = !v), g.endkey = vt(v ? [p, {}] : [p])
                            }
                            if (void 0 !== t.key) {
                                var m = vt([t.key]),
                                    y = vt([t.key, {}]);
                                g.descending ? (g.endkey = m, g.startkey = y) : (g.startkey = m, g.endkey = y)
                            }
                            return s || ("number" == typeof t.limit && (g.limit = t.limit), g.skip = o), a(g).then(l)
                        }(e, t)
                    }))()
                }

                function E(t, n, i) {
                    if ("function" == typeof t._query) return function(e, t, n) {
                        return new Promise((function(i, r) {
                            e._query(t, n, (function(e, t) {
                                if (e) return r(e);
                                i(t)
                            }))
                        }))
                    }(t, n, i);
                    if (ae(t)) return function(e, t, n) {
                        var i, r, s, o = [],
                            a = "GET";
                        if (p("reduce", n, o), p("include_docs", n, o), p("attachments", n, o), p("limit", n, o), p("descending", n, o), p("group", n, o), p("group_level", n, o), p("skip", n, o), p("stale", n, o), p("conflicts", n, o), p("startkey", n, o, !0), p("start_key", n, o, !0), p("endkey", n, o, !0), p("end_key", n, o, !0), p("inclusive_end", n, o), p("key", n, o, !0), p("update_seq", n, o), o = "" === (o = o.join("&")) ? "" : "?" + o, void 0 !== n.keys) {
                            var c = "keys=" + encodeURIComponent(JSON.stringify(n.keys));
                            c.length + o.length + 1 <= 2e3 ? o += ("?" === o[0] ? "&" : "?") + c : (a = "POST", "string" == typeof t ? i = {
                                keys: n.keys
                            } : t.keys = n.keys)
                        }
                        if ("string" == typeof t) {
                            var l = Rn(t);
                            return e.fetch("_design/" + l[0] + "/_view/" + l[1] + o, {
                                headers: new rt({
                                    "Content-Type": "application/json"
                                }),
                                method: a,
                                body: JSON.stringify(i)
                            }).then((function(e) {
                                return r = e.ok, s = e.status, e.json()
                            })).then((function(e) {
                                if (!r) throw e.status = s, ie(e);
                                return e.rows.forEach((function(e) {
                                    if (e.value && e.value.error && "builtin_reduce_error" === e.value.error) throw new Error(e.reason)
                                })), e
                            })).then(h(n))
                        }
                        return i = i || {}, Object.keys(t).forEach((function(e) {
                            Array.isArray(t[e]) ? i[e] = t[e] : i[e] = t[e].toString()
                        })), e.fetch("_temp_view" + o, {
                            headers: new rt({
                                "Content-Type": "application/json"
                            }),
                            method: "POST",
                            body: JSON.stringify(i)
                        }).then((function(e) {
                            return r = e.ok, s = e.status, e.json()
                        })).then((function(e) {
                            if (!r) throw e.status = s, ie(e);
                            return e
                        })).then(h(n))
                    }(t, n, i);
                    if ("string" != typeof n) return v(i, n), Dn.add((function() {
                        return Mn(t, "temp_view/temp_view", n.map, n.reduce, !0, e).then((function(e) {
                            return t = w(e).then((function() {
                                return _(e, i)
                            })), n = function() {
                                return e.db.destroy()
                            }, t.then((function(e) {
                                return n().then((function() {
                                    return e
                                }))
                            }), (function(e) {
                                return n().then((function() {
                                    throw e
                                }))
                            }));
                            var t, n
                        }))
                    })), Dn.finish();
                    var r = n,
                        a = Rn(r),
                        c = a[0],
                        l = a[1];
                    return t.get("_design/" + c).then((function(n) {
                        var a = n.views && n.views[l];
                        if (!a) throw new _n("ddoc " + n._id + " has no view named " + l);
                        return s(n, l), v(i, a), Mn(t, r, a.map, a.reduce, !1, e).then((function(e) {
                            return "ok" === i.stale || "update_after" === i.stale ? ("update_after" === i.stale && o()((function() {
                                w(e)
                            })), _(e, i)) : w(e).then((function() {
                                return _(e, i)
                            }))
                        }))
                    }))
                }
                var S;
                return {
                    query: function(e, t, n) {
                        var i = this;
                        "function" == typeof t && (n = t, t = {}), t = t ? function(e) {
                            return e.group_level = g(e.group_level), e.limit = g(e.limit), e.skip = g(e.skip), e
                        }(t) : {}, "function" == typeof e && (e = {
                            map: e
                        });
                        var r = Promise.resolve().then((function() {
                            return E(i, e, t)
                        }));
                        return Sn(r, n), r
                    },
                    viewCleanup: (S = function() {
                        var t = this;
                        return "function" == typeof t._viewCleanup ? function(e) {
                            return new Promise((function(t, n) {
                                e._viewCleanup((function(e, i) {
                                    if (e) return n(e);
                                    t(i)
                                }))
                            }))
                        }(t) : ae(t) ? function(e) {
                            return e.fetch("_view_cleanup", {
                                headers: new rt({
                                    "Content-Type": "application/json"
                                }),
                                method: "POST"
                            }).then((function(e) {
                                return e.json()
                            }))
                        }(t) : function(t) {
                            return t.get("_local/" + e).then((function(e) {
                                var n = new r;
                                Object.keys(e.views).forEach((function(e) {
                                    var t = Rn(e),
                                        r = "_design/" + t[0],
                                        s = t[1],
                                        o = n.get(r);
                                    o || (o = new i, n.set(r, o)), o.add(s)
                                }));
                                var s = {
                                    keys: kn(n),
                                    include_docs: !0
                                };
                                return t.allDocs(s).then((function(i) {
                                    var r = {};
                                    i.rows.forEach((function(t) {
                                        var i = t.key.substring(8);
                                        n.get(t.key).forEach((function(n) {
                                            var s = i + "/" + n;
                                            e.views[s] || (s = n);
                                            var o = Object.keys(e.views[s]),
                                                a = t.doc && t.doc.views && t.doc.views[n];
                                            o.forEach((function(e) {
                                                r[e] = r[e] || a
                                            }))
                                        }))
                                    }));
                                    var s = Object.keys(r).filter((function(e) {
                                        return !r[e]
                                    })).map((function(e) {
                                        return xn(b(e), (function() {
                                            return new t.constructor(e, t.__opts).destroy()
                                        }))()
                                    }));
                                    return Promise.all(s).then((function() {
                                        return {
                                            ok: !0
                                        }
                                    }))
                                }))
                            }), m({
                                ok: !0
                            }))
                        }(t)
                    }, f()((function(e) {
                        var t = e.pop(),
                            n = S.apply(this, e);
                        return "function" == typeof t && Sn(n, t), n
                    })))
                }
            }("mrviews", (function(e, t) {
                if ("function" == typeof e && 2 === e.length) {
                    var n = e;
                    return function(e) {
                        return n(e, t)
                    }
                }
                return Bn(e.toString(), t)
            }), (function(e) {
                var t = e.toString(),
                    n = function(e) {
                        if (/^_sum/.test(e)) return Vn;
                        if (/^_count/.test(e)) return zn;
                        if (/^_stats/.test(e)) return Fn;
                        if (/^_/.test(e)) throw new Error(e + " is not a supported reduce function.")
                    }(t);
                return n || Bn(t)
            }), (function(e, t) {
                var n = e.views && e.views[t];
                if ("string" != typeof n.map) throw new _n("ddoc " + e._id + " has no string view named " + t + ", instead found object of type: " + typeof n.map)
            }));
            var Un = {
                query: function(e, t, n) {
                    return Hn.query.call(this, e, t, n)
                },
                viewCleanup: function(e) {
                    return Hn.viewCleanup.call(this, e)
                }
            };

            function Gn(e) {
                return /^1-/.test(e)
            }

            function $n(e, t) {
                var n = Object.keys(t._attachments);
                return Promise.all(n.map((function(n) {
                    return e.getAttachment(t._id, n, {
                        rev: t._rev
                    })
                })))
            }

            function Zn(e, t, n, i) {
                n = L(n);
                var r = [],
                    s = !0;

                function o(t) {
                    return e.allDocs({
                        keys: t,
                        include_docs: !0,
                        conflicts: !0
                    }).then((function(e) {
                        if (i.cancelled) throw new Error("cancelled");
                        e.rows.forEach((function(e) {
                            var t;
                            e.deleted || !e.doc || !Gn(e.value.rev) || (t = e.doc, t._attachments && Object.keys(t._attachments).length > 0) || function(e) {
                                return e._conflicts && e._conflicts.length > 0
                            }(e.doc) || (e.doc._conflicts && delete e.doc._conflicts, r.push(e.doc), delete n[e.id])
                        }))
                    }))
                }
                return Promise.resolve().then((function() {
                    var e = Object.keys(n).filter((function(e) {
                        var t = n[e].missing;
                        return 1 === t.length && Gn(t[0])
                    }));
                    if (e.length > 0) return o(e)
                })).then((function() {
                    var o = function(e) {
                        var t = [];
                        return Object.keys(e).forEach((function(n) {
                            e[n].missing.forEach((function(e) {
                                t.push({
                                    id: n,
                                    rev: e
                                })
                            }))
                        })), {
                            docs: t,
                            revs: !0,
                            latest: !0
                        }
                    }(n);
                    if (o.docs.length) return e.bulkGet(o).then((function(n) {
                        if (i.cancelled) throw new Error("cancelled");
                        return Promise.all(n.results.map((function(n) {
                            return Promise.all(n.docs.map((function(n) {
                                var i = n.ok;
                                return n.error && (s = !1), i && i._attachments ? function(e, t, n) {
                                    var i = ae(t) && !ae(e),
                                        r = Object.keys(n._attachments);
                                    return i ? e.get(n._id).then((function(i) {
                                        return Promise.all(r.map((function(r) {
                                            return function(e, t, n) {
                                                return !e._attachments || !e._attachments[n] || e._attachments[n].digest !== t._attachments[n].digest
                                            }(i, n, r) ? t.getAttachment(n._id, r) : e.getAttachment(i._id, r)
                                        })))
                                    })).catch((function(e) {
                                        if (404 !== e.status) throw e;
                                        return $n(t, n)
                                    })) : $n(t, n)
                                }(t, e, i).then((function(e) {
                                    var t = Object.keys(i._attachments);
                                    return e.forEach((function(e, n) {
                                        var r = i._attachments[t[n]];
                                        delete r.stub, delete r.length, r.data = e
                                    })), i
                                })) : i
                            })))
                        }))).then((function(e) {
                            r = r.concat(se(e).filter(Boolean))
                        }))
                    }))
                })).then((function() {
                    return {
                        ok: s,
                        docs: r
                    }
                }))
            }

            function Wn(e, t, n, i, r) {
                return e.get(t).catch((function(n) {
                    if (404 === n.status) return "http" !== e.adapter && "https" !== e.adapter || R(404, "PouchDB is just checking if a remote checkpoint exists."), {
                        session_id: i,
                        _id: t,
                        history: [],
                        replicator: "pouchdb",
                        version: 1
                    };
                    throw n
                })).then((function(s) {
                    if (!r.cancelled && s.last_seq !== n) return s.history = (s.history || []).filter((function(e) {
                        return e.session_id !== i
                    })), s.history.unshift({
                        last_seq: n,
                        session_id: i
                    }), s.history = s.history.slice(0, 5), s.version = 1, s.replicator = "pouchdb", s.session_id = i, s.last_seq = n, e.put(s).catch((function(s) {
                        if (409 === s.status) return Wn(e, t, n, i, r);
                        throw s
                    }))
                }))
            }

            function Kn(e, t, n, i, r) {
                this.src = e, this.target = t, this.id = n, this.returnValue = i, this.opts = r || {}
            }
            Kn.prototype.writeCheckpoint = function(e, t) {
                var n = this;
                return this.updateTarget(e, t).then((function() {
                    return n.updateSource(e, t)
                }))
            }, Kn.prototype.updateTarget = function(e, t) {
                return this.opts.writeTargetCheckpoint ? Wn(this.target, this.id, e, t, this.returnValue) : Promise.resolve(!0)
            }, Kn.prototype.updateSource = function(e, t) {
                if (this.opts.writeSourceCheckpoint) {
                    var n = this;
                    return Wn(this.src, this.id, e, t, this.returnValue).catch((function(e) {
                        if (Xn(e)) return n.opts.writeSourceCheckpoint = !1, !0;
                        throw e
                    }))
                }
                return Promise.resolve(!0)
            };
            var Yn = {
                undefined: function(e, t) {
                    return 0 === ft(e.last_seq, t.last_seq) ? t.last_seq : 0
                },
                1: function(e, t) {
                    return function(e, t) {
                        if (e.session_id === t.session_id) return {
                            last_seq: e.last_seq,
                            history: e.history
                        };
                        return function e(t, n) {
                            var i = t[0],
                                r = t.slice(1),
                                s = n[0],
                                o = n.slice(1);
                            if (!i || 0 === n.length) return {
                                last_seq: 0,
                                history: []
                            };
                            if (Jn(i.session_id, n)) return {
                                last_seq: i.last_seq,
                                history: t
                            };
                            if (Jn(s.session_id, r)) return {
                                last_seq: s.last_seq,
                                history: o
                            };
                            return e(r, o)
                        }(e.history, t.history)
                    }(t, e).last_seq
                }
            };

            function Jn(e, t) {
                var n = t[0],
                    i = t.slice(1);
                return !(!e || 0 === t.length) && (e === n.session_id || Jn(e, i))
            }

            function Xn(e) {
                return "number" == typeof e.status && 4 === Math.floor(e.status / 100)
            }
            Kn.prototype.getCheckpoint = function() {
                var e = this;
                return e.opts && e.opts.writeSourceCheckpoint && !e.opts.writeTargetCheckpoint ? e.src.get(e.id).then((function(e) {
                    return e.last_seq || 0
                })).catch((function(e) {
                    if (404 !== e.status) throw e;
                    return 0
                })) : e.target.get(e.id).then((function(t) {
                    return e.opts && e.opts.writeTargetCheckpoint && !e.opts.writeSourceCheckpoint ? t.last_seq || 0 : e.src.get(e.id).then((function(e) {
                        return t.version !== e.version ? 0 : (n = t.version ? t.version.toString() : "undefined") in Yn ? Yn[n](t, e) : 0;
                        var n
                    }), (function(n) {
                        if (404 === n.status && t.last_seq) return e.src.put({
                            _id: e.id,
                            last_seq: 0
                        }).then((function() {
                            return 0
                        }), (function(n) {
                            return Xn(n) ? (e.opts.writeSourceCheckpoint = !1, t.last_seq) : 0
                        }));
                        throw n
                    }))
                })).catch((function(e) {
                    if (404 !== e.status) throw e;
                    return 0
                }))
            };

            function Qn(e, t, n) {
                var i = n.doc_ids ? n.doc_ids.sort(ft) : "",
                    r = n.filter ? n.filter.toString() : "",
                    s = "",
                    o = "",
                    a = "";
                return n.selector && (a = JSON.stringify(n.selector)), n.filter && n.query_params && (s = JSON.stringify(function(e) {
                    return Object.keys(e).sort(ft).reduce((function(t, n) {
                        return t[n] = e[n], t
                    }), {})
                }(n.query_params))), n.filter && "_view" === n.filter && (o = n.view.toString()), Promise.all([e.id(), t.id()]).then((function(e) {
                    var t = e[0] + e[1] + r + o + s + i + a;
                    return new Promise((function(e) {
                        Ie(t, e)
                    }))
                })).then((function(e) {
                    return "_local/" + (e = e.replace(/\//g, ".").replace(/\+/g, "_"))
                }))
            }

            function ei(e, t, n, i, r) {
                var s, a, c, l = [],
                    u = {
                        seq: 0,
                        changes: [],
                        docs: []
                    },
                    d = !1,
                    h = !1,
                    f = !1,
                    p = 0,
                    g = n.continuous || n.live || !1,
                    v = n.batch_size || 100,
                    m = n.batches_limit || 10,
                    y = !1,
                    b = n.doc_ids,
                    w = n.selector,
                    _ = [],
                    E = Oe();
                r = r || {
                    ok: !0,
                    start_time: (new Date).toISOString(),
                    docs_read: 0,
                    docs_written: 0,
                    doc_write_failures: 0,
                    errors: []
                };
                var S = {};

                function x() {
                    return c ? Promise.resolve() : Qn(e, t, n).then((function(r) {
                        a = r;
                        var s = {};
                        s = !1 === n.checkpoint ? {
                            writeSourceCheckpoint: !1,
                            writeTargetCheckpoint: !1
                        } : "source" === n.checkpoint ? {
                            writeSourceCheckpoint: !0,
                            writeTargetCheckpoint: !1
                        } : "target" === n.checkpoint ? {
                            writeSourceCheckpoint: !1,
                            writeTargetCheckpoint: !0
                        } : {
                            writeSourceCheckpoint: !0,
                            writeTargetCheckpoint: !0
                        }, c = new Kn(e, t, a, i, s)
                    }))
                }

                function k() {
                    if (_ = [], 0 !== s.docs.length) {
                        var e = s.docs,
                            o = {
                                timeout: n.timeout
                            };
                        return t.bulkDocs({
                            docs: e,
                            new_edits: !1
                        }, o).then((function(t) {
                            if (i.cancelled) throw B(), new Error("cancelled");
                            var n = Object.create(null);
                            t.forEach((function(e) {
                                e.error && (n[e.id] = e)
                            }));
                            var s = Object.keys(n).length;
                            r.doc_write_failures += s, r.docs_written += e.length - s, e.forEach((function(e) {
                                var t = n[e._id];
                                if (t) {
                                    r.errors.push(t);
                                    var s = (t.name || "").toLowerCase();
                                    if ("unauthorized" !== s && "forbidden" !== s) throw t;
                                    i.emit("denied", L(t))
                                } else _.push(e)
                            }))
                        }), (function(t) {
                            throw r.doc_write_failures += e.length, t
                        }))
                    }
                }

                function C() {
                    if (s.error) throw new Error("There was a problem getting docs.");
                    r.last_seq = p = s.seq;
                    var e = L(r);
                    return _.length && (e.docs = _, "number" == typeof s.pending && (e.pending = s.pending, delete s.pending), i.emit("change", e)), d = !0, c.writeCheckpoint(s.seq, E).then((function() {
                        if (d = !1, i.cancelled) throw B(), new Error("cancelled");
                        s = void 0, N()
                    })).catch((function(e) {
                        throw q(e), e
                    }))
                }

                function I() {
                    return Zn(e, t, s.diffs, i).then((function(e) {
                        s.error = !e.ok, e.docs.forEach((function(e) {
                            delete s.diffs[e._id], r.docs_read++, s.docs.push(e)
                        }))
                    }))
                }

                function A() {
                    var e;
                    i.cancelled || s || (0 !== l.length ? (s = l.shift(), (e = {}, s.changes.forEach((function(t) {
                        "_user/" !== t.id && (e[t.id] = t.changes.map((function(e) {
                            return e.rev
                        })))
                    })), t.revsDiff(e).then((function(e) {
                        if (i.cancelled) throw B(), new Error("cancelled");
                        s.diffs = e
                    }))).then(I).then(k).then(C).then(A).catch((function(e) {
                        O("batch processing terminated with error", e)
                    }))) : P(!0))
                }

                function P(e) {
                    0 !== u.changes.length ? (e || h || u.changes.length >= v) && (l.push(u), u = {
                        seq: 0,
                        changes: [],
                        docs: []
                    }, "pending" !== i.state && "stopped" !== i.state || (i.state = "active", i.emit("active")), A()) : 0 !== l.length || s || ((g && S.live || h) && (i.state = "pending", i.emit("paused")), h && B())
                }

                function O(e, t) {
                    f || (t.message || (t.message = e), r.ok = !1, r.status = "aborting", l = [], u = {
                        seq: 0,
                        changes: [],
                        docs: []
                    }, B(t))
                }

                function B(s) {
                    if (!(f || i.cancelled && (r.status = "cancelled", d)))
                        if (r.status = r.status || "complete", r.end_time = (new Date).toISOString(), r.last_seq = p, f = !0, s) {
                            (s = ne(s)).result = r;
                            var o = (s.name || "").toLowerCase();
                            "unauthorized" === o || "forbidden" === o ? (i.emit("error", s), i.removeAllListeners()) : function(e, t, n, i) {
                                if (!1 === e.retry) return t.emit("error", n), void t.removeAllListeners();
                                if ("function" != typeof e.back_off_function && (e.back_off_function = D), t.emit("requestError", n), "active" === t.state || "pending" === t.state) {
                                    t.emit("paused", n), t.state = "stopped";
                                    var r = function() {
                                        e.current_back_off = 0
                                    };
                                    t.once("paused", (function() {
                                        t.removeListener("active", r)
                                    })), t.once("active", r)
                                }
                                e.current_back_off = e.current_back_off || 0, e.current_back_off = e.back_off_function(e.current_back_off), setTimeout(i, e.current_back_off)
                            }(n, i, s, (function() {
                                ei(e, t, n, i)
                            }))
                        } else i.emit("complete", r), i.removeAllListeners()
                }

                function T(e, t, r) {
                    if (i.cancelled) return B();
                    "number" == typeof t && (u.pending = t), re(n)(e) && (u.seq = e.seq || r, u.changes.push(e), o()((function() {
                        P(0 === l.length && S.live)
                    })))
                }

                function j(e) {
                    if (y = !1, i.cancelled) return B();
                    if (e.results.length > 0) S.since = e.results[e.results.length - 1].seq, N(), P(!0);
                    else {
                        var t = function() {
                            g ? (S.live = !0, N()) : h = !0, P(!0)
                        };
                        s || 0 !== e.results.length ? t() : (d = !0, c.writeCheckpoint(e.last_seq, E).then((function() {
                            d = !1, r.last_seq = p = e.last_seq, t()
                        })).catch(q))
                    }
                }

                function M(e) {
                    if (y = !1, i.cancelled) return B();
                    O("changes rejected", e)
                }

                function N() {
                    if (!y && !h && l.length < m) {
                        y = !0, i._changes && (i.removeListener("cancel", i._abortChanges), i._changes.cancel()), i.once("cancel", r);
                        var t = e.changes(S).on("change", T);
                        t.then(s, s), t.then(j).catch(M), n.retry && (i._changes = t, i._abortChanges = r)
                    }

                    function r() {
                        t.cancel()
                    }

                    function s() {
                        i.removeListener("cancel", r)
                    }
                }

                function R() {
                    x().then((function() {
                        if (!i.cancelled) return c.getCheckpoint().then((function(e) {
                            S = {
                                since: p = e,
                                limit: v,
                                batch_size: v,
                                style: "all_docs",
                                doc_ids: b,
                                selector: w,
                                return_docs: !0
                            }, n.filter && ("string" != typeof n.filter ? S.include_docs = !0 : S.filter = n.filter), "heartbeat" in n && (S.heartbeat = n.heartbeat), "timeout" in n && (S.timeout = n.timeout), n.query_params && (S.query_params = n.query_params), n.view && (S.view = n.view), N()
                        }));
                        B()
                    })).catch((function(e) {
                        O("getCheckpoint rejected with ", e)
                    }))
                }

                function q(e) {
                    d = !1, O("writeCheckpoint completed with error", e)
                }
                i.ready(e, t), i.cancelled ? B() : (i._addedListeners || (i.once("cancel", B), "function" == typeof n.complete && (i.once("error", n.complete), i.once("complete", (function(e) {
                    n.complete(null, e)
                }))), i._addedListeners = !0), void 0 === n.since ? R() : x().then((function() {
                    return d = !0, c.writeCheckpoint(n.since, E)
                })).then((function() {
                    d = !1, i.cancelled ? B() : (p = n.since, R())
                })).catch(q))
            }

            function ti() {
                m.a.call(this), this.cancelled = !1, this.state = "pending";
                var e = this,
                    t = new Promise((function(t, n) {
                        e.once("complete", t), e.once("error", n)
                    }));
                e.then = function(e, n) {
                    return t.then(e, n)
                }, e.catch = function(e) {
                    return t.catch(e)
                }, e.catch((function() {}))
            }

            function ni(e, t) {
                var n = t.PouchConstructor;
                return "string" == typeof e ? new n(e, t) : e
            }

            function ii(e, t, n, i) {
                if ("function" == typeof n && (i = n, n = {}), void 0 === n && (n = {}), n.doc_ids && !Array.isArray(n.doc_ids)) throw ne(J, "`doc_ids` filter parameter is not a list.");
                n.complete = i, (n = L(n)).continuous = n.continuous || n.live, n.retry = "retry" in n && n.retry, n.PouchConstructor = n.PouchConstructor || this;
                var r = new ti(n);
                return ei(ni(e, n), ni(t, n), n, r), r
            }

            function ri(e, t, n, i) {
                return "function" == typeof n && (i = n, n = {}), void 0 === n && (n = {}), (n = L(n)).PouchConstructor = n.PouchConstructor || this, new si(e = ni(e, n), t = ni(t, n), n, i)
            }

            function si(e, t, n, i) {
                var r = this;
                this.canceled = !1;
                var s = n.push ? q({}, n, n.push) : n,
                    o = n.pull ? q({}, n, n.pull) : n;

                function a(e) {
                    r.emit("change", {
                        direction: "pull",
                        change: e
                    })
                }

                function c(e) {
                    r.emit("change", {
                        direction: "push",
                        change: e
                    })
                }

                function l(e) {
                    r.emit("denied", {
                        direction: "push",
                        doc: e
                    })
                }

                function u(e) {
                    r.emit("denied", {
                        direction: "pull",
                        doc: e
                    })
                }

                function d() {
                    r.pushPaused = !0, r.pullPaused && r.emit("paused")
                }

                function h() {
                    r.pullPaused = !0, r.pushPaused && r.emit("paused")
                }

                function f() {
                    r.pushPaused = !1, r.pullPaused && r.emit("active", {
                        direction: "push"
                    })
                }

                function p() {
                    r.pullPaused = !1, r.pushPaused && r.emit("active", {
                        direction: "pull"
                    })
                }
                this.push = ii(e, t, s), this.pull = ii(t, e, o), this.pushPaused = !0, this.pullPaused = !0;
                var g = {};

                function v(e) {
                    return function(t, n) {
                        ("change" === t && (n === a || n === c) || "denied" === t && (n === u || n === l) || "paused" === t && (n === h || n === d) || "active" === t && (n === p || n === f)) && (t in g || (g[t] = {}), g[t][e] = !0, 2 === Object.keys(g[t]).length && r.removeAllListeners(t))
                    }
                }

                function m(e, t, n) {
                    -1 == e.listeners(t).indexOf(n) && e.on(t, n)
                }
                n.live && (this.push.on("complete", r.pull.cancel.bind(r.pull)), this.pull.on("complete", r.push.cancel.bind(r.push))), this.on("newListener", (function(e) {
                    "change" === e ? (m(r.pull, "change", a), m(r.push, "change", c)) : "denied" === e ? (m(r.pull, "denied", u), m(r.push, "denied", l)) : "active" === e ? (m(r.pull, "active", p), m(r.push, "active", f)) : "paused" === e && (m(r.pull, "paused", h), m(r.push, "paused", d))
                })), this.on("removeListener", (function(e) {
                    "change" === e ? (r.pull.removeListener("change", a), r.push.removeListener("change", c)) : "denied" === e ? (r.pull.removeListener("denied", u), r.push.removeListener("denied", l)) : "active" === e ? (r.pull.removeListener("active", p), r.push.removeListener("active", f)) : "paused" === e && (r.pull.removeListener("paused", h), r.push.removeListener("paused", d))
                })), this.pull.on("removeListener", v("pull")), this.push.on("removeListener", v("push"));
                var y = Promise.all([this.push, this.pull]).then((function(e) {
                    var t = {
                        push: e[0],
                        pull: e[1]
                    };
                    return r.emit("complete", t), i && i(null, t), r.removeAllListeners(), t
                }), (function(e) {
                    if (r.cancel(), i ? i(e) : r.emit("error", e), r.removeAllListeners(), i) throw e
                }));
                this.then = function(e, t) {
                    return y.then(e, t)
                }, this.catch = function(e) {
                    return y.catch(e)
                }
            }
            g()(ti, m.a), ti.prototype.cancel = function() {
                this.cancelled = !0, this.state = "cancelled", this.emit("cancel")
            }, ti.prototype.ready = function(e, t) {
                var n = this;

                function i() {
                    n.cancel()
                }
                n._readyCalled || (n._readyCalled = !0, e.once("destroyed", i), t.once("destroyed", i), n.once("complete", (function() {
                    e.removeListener("destroyed", i), t.removeListener("destroyed", i)
                })))
            }, g()(si, m.a), si.prototype.cancel = function() {
                this.canceled || (this.canceled = !0, this.push.cancel(), this.pull.cancel())
            }, tt.plugin((function(e) {
                e.adapter("idb", un, !0)
            })).plugin((function(e) {
                e.adapter("http", bn, !1), e.adapter("https", bn, !1)
            })).plugin(Un).plugin((function(e) {
                e.replicate = ii, e.sync = ri, Object.defineProperty(e.prototype, "replicate", {
                    get: function() {
                        var e = this;
                        return void 0 === this.replicateMethods && (this.replicateMethods = {
                            from: function(t, n, i) {
                                return e.constructor.replicate(t, e, n, i)
                            },
                            to: function(t, n, i) {
                                return e.constructor.replicate(e, t, n, i)
                            }
                        }), this.replicateMethods
                    }
                }), e.prototype.sync = function(e, t, n) {
                    return this.constructor.sync(this, e, t, n)
                }
            })), t.default = tt
        }.call(this, n(32))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(41),
        r = n(51),
        s = n(62),
        o = n(64);
    t.default = class {
        constructor(e) {
            r.parseManifest(e.manifest) || console.error("Unable to parse the manifest"), this.params = e, this.manifest = e.manifest
        }
        setupEdit(e) {
            (void 0 !== e.NeumeEdit || void 0 !== e.TextEdit && void 0 !== e.TextView) && s.prepareEditMode(this), void 0 !== e.NeumeEdit && (this.NeumeEdit = new e.NeumeEdit(this)), void 0 !== e.TextView && (this.textView = new e.TextView(this), void 0 !== e.TextEdit && (this.TextEdit = new e.TextEdit(this)))
        }
        start() {
            o.default().then(() => (this.view = new this.params.View(this, this.params.Display, this.manifest.image), this.name = this.manifest.title, this.core = new i.default(this.manifest), this.info = new this.params.Info(this), window.setTimeout(this.setupEdit.bind(this), 2e3, this.params), this.core.initDb())).then(() => {
                this.updateForCurrentPage(!0)
            })
        }
        updateForCurrentPage(e = !1) {
            const t = this.view.getCurrentPage();
            return this.view.changePage(t, e)
        }
        redo() {
            return this.core.redo(this.view.getCurrentPageURI())
        }
        undo() {
            return this.core.undo(this.view.getCurrentPageURI())
        }
        getUserMode() {
            return void 0 !== this.NeumeEdit ? this.NeumeEdit.getUserMode() : void 0 !== this.TextEdit ? "edit" : "viewer"
        }
        edit(e, t) {
            return this.core.edit(e, t)
        }
        getElementAttr(e, t) {
            return this.core.getElementAttr(e, t)
        }
        export () {
            return new Promise((e, t) => {
                this.core.updateDatabase().then(() => {
                    this.manifest.mei_annotations = this.core.getAnnotations(), this.manifest.timestamp = (new Date).toISOString();
                    const t = new window.Blob([JSON.stringify(this.manifest, null, 2)], {
                            type: "application/ld+json"
                        }),
                        n = new FileReader;
                    n.addEventListener("load", () => {
                        e(n.result)
                    }), n.readAsDataURL(t)
                }).catch(e => {
                    t(e)
                })
            })
        }
        save() {
            return this.core.updateDatabase()
        }
        deleteDb() {
            return this.core.deleteDb()
        }
        getPageURI(e) {
            return void 0 === e && (e = this.view.getCurrentPageURI()), new Promise(t => {
                this.core.getMEI(e).then(e => {
                    t("data:application/mei+xml;charset=utf-8," + encodeURIComponent(e))
                })
            })
        }
        getPageMEI(e) {
            return this.core.getMEI(e)
        }
        getPageSVG(e) {
            return this.core.getSVG(e)
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        var i = n[n.length - 1];
        e === i.element && (n.pop(), i = n[n.length - 1]);
        var r = i.element,
            s = i.index;
        if (Array.isArray(r)) r.push(e);
        else if (s === t.length - 2) {
            r[t.pop()] = e
        } else t.push(e)
    }
    t.stringify = function(e) {
        var t = [];
        t.push({
            obj: e
        });
        for (var n, i, r, s, o, a, c, l, u, d, h = ""; n = t.pop();)
            if (i = n.obj, h += n.prefix || "", r = n.val || "") h += r;
            else if ("object" != typeof i) h += void 0 === i ? null : JSON.stringify(i);
        else if (null === i) h += "null";
        else if (Array.isArray(i)) {
            for (t.push({
                    val: "]"
                }), s = i.length - 1; s >= 0; s--) o = 0 === s ? "" : ",", t.push({
                obj: i[s],
                prefix: o
            });
            t.push({
                val: "["
            })
        } else {
            for (c in a = [], i) i.hasOwnProperty(c) && a.push(c);
            for (t.push({
                    val: "}"
                }), s = a.length - 1; s >= 0; s--) u = i[l = a[s]], d = s > 0 ? "," : "", d += JSON.stringify(l) + ":", t.push({
                obj: u,
                prefix: d
            });
            t.push({
                val: "{"
            })
        }
        return h
    }, t.parse = function(e) {
        for (var t, n, r, s, o, a, c, l, u, d = [], h = [], f = 0;;)
            if ("}" !== (t = e[f++]) && "]" !== t && void 0 !== t) switch (t) {
                case " ":
                case "\t":
                case "\n":
                case ":":
                case ",":
                    break;
                case "n":
                    f += 3, i(null, d, h);
                    break;
                case "t":
                    f += 3, i(!0, d, h);
                    break;
                case "f":
                    f += 4, i(!1, d, h);
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "-":
                    for (n = "", f--;;) {
                        if (r = e[f++], !/[\d\.\-e\+]/.test(r)) {
                            f--;
                            break
                        }
                        n += r
                    }
                    i(parseFloat(n), d, h);
                    break;
                case '"':
                    for (s = "", o = void 0, a = 0;
                        '"' !== (c = e[f++]) || "\\" === o && a % 2 == 1;) s += c, "\\" === (o = c) ? a++ : a = 0;
                    i(JSON.parse('"' + s + '"'), d, h);
                    break;
                case "[":
                    l = {
                        element: [],
                        index: d.length
                    }, d.push(l.element), h.push(l);
                    break;
                case "{":
                    u = {
                        element: {},
                        index: d.length
                    }, d.push(u.element), h.push(u);
                    break;
                default:
                    throw new Error("unexpectedly reached end of input: " + t)
            } else {
                if (1 === d.length) return d.pop();
                i(d.pop(), d, h)
            }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(8);
    t.default = class {
        constructor(e, t, n, i) {
            this.view = e, this.className = t, this.background = n, this.zoomHandler = i;
            document.getElementById("display_controls").innerHTML = function(e) {
                let t = "<p class='panel-heading' id='displayHeader'>Display<svg class='icon is-pulled-right'><use id='toggleDisplay' xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></p><div id='displayContents'>";
                return void 0 !== e && (t += "<a class='panel-block has-text-centered'><button class='button' id='reset-zoom'>Zoom</button><input aria-labelledby='reset-zoom' class='slider is-fullwidth' id='zoomSlider' step='5' min='25' max='400' value='100' type='range'/><output id='zoomOutput' for='zoomSlider'>100</output></a>"), t += "<a class='panel-block has-text-centered'><button class='button' id='reset-opacity'>unitTest013 Glyph Opacity</button><input aria-labelledby='reset-opacity' class='slider is-fullwidth' id='opacitySlider' step='5' min='0' max='100' value='100' type='range'/><output id='opacityOutput' for='opacitySlider'>100</output></a><a class='panel-block has-text-centered'><button class='button' id='reset-bg-opacity'>Image Opacity</button><input aria-labelledby='reset-bg-opacity' class='slider is-fullwidth' id='bgOpacitySlider' step='5' min='0' max='100' value='100' type='range'/><output id='bgOpacityOutput' for='bgOpacitySlider'>100</output></a><div class='panel-block' id='extensible-block'><div class='dropdown' id='highlight-dropdown'><div class='dropdown-trigger'><button class='button' id='highlight-button' aria-haspopup='true' aria-controls='highlight-menu' style='width: auto'><span>Highlight</span><span id='highlight-type'>&nbsp;- Off</span><svg class='icon'><use id='toggleDisplay' xlink:href='/Neon/Neon-gh/assets/img/icons.svg#dropdown-down'></use></svg></button></div><div class='dropdown-menu' id='highlight-menu' role='menu'><div class='dropdown-content'><a aria-role='menuitem' class='dropdown-item' id='highlight-staff'>Staff</a><a aria-role='menuitem' class='dropdown-item' id='highlight-syllable'>Syllable</a><a aria-role='menuitem' class='dropdown-item' id='highlight-neume'>Neume</a><a aria-role='menuitem' class='dropdown-item' id='highlight-layerElement'>LayerElement</a><hr class='dropdown-divider'/><a aria-role='menuitem' class='dropdown-item' id='highlight-none'>None</a></div></div></div></div></div>", t
            }(this.zoomHandler), this.view.addUpdateCallback(this.updateVisualization.bind(this))
        }
        setDisplayListeners() {
            this.zoomHandler && i.setZoomControls(this.zoomHandler), i.initDisplayControls(this.className, this.background)
        }
        updateVisualization() {
            i.setOpacityFromSlider(this.className), i.updateHighlight()
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(72);
    t.default = class {
        constructor(e, t, n) {
            this.neonView = e, this.updateCallbacks = [], this.divaReady = !1, this.diva = new i.default("container", {
                objectData: n
            }), document.getElementById("container").style.minHeight = "100%", this.indexMap = new Map, this.diva.disableDragScrollable(), this.displayPanel = new t(this, "neon-container", "diva-viewer-canvas"), this.loadDelay = 500, this.initDivaEvents(), this.setViewEventHandlers(), window.onresize = () => {
                const e = window.innerHeight,
                    t = window.innerWidth;
                window.setTimeout(() => {
                    e === window.innerHeight && t === window.innerWidth && this.changePage(this.getCurrentPage(), !1)
                }, this.loadDelay)
            }
        }
        initDivaEvents() {
            i.default.Events.subscribe("ManifestDidLoad", this.parseManifest.bind(this), this.diva.settings.ID), i.default.Events.subscribe("ObjectDidLoad", this.didLoad.bind(this), this.diva.settings.ID), i.default.Events.subscribe("ActivePageDidChange", this.changePage.bind(this), this.diva.settings.ID), i.default.Events.subscribe("ZoomLevelDidChange", this.adjustZoom.bind(this), this.diva.settings.ID)
        }
        async changePage(e, t = !0) {
            function n(e) {
                if (e === this.getCurrentPage()) {
                    const t = this.indexMap.get(e);
                    this.neonView.getPageSVG(t).then(t => {
                        this.updateSVG(t, e);
                        const n = "neon-container-" + e,
                            i = document.getElementById(n);
                        null !== i && i.classList.add("active-page"), this.updateCallbacks.forEach(e => e())
                    }).catch(e => {
                        "not_found" !== e.name && "missing_mei" !== e.name && console.error(e)
                    })
                }
            }
            const i = [e];
            Array.from(document.getElementsByClassName("active-page")).forEach(e => {
                e.classList.remove("active-page")
            });
            for (const e of i) t ? window.setTimeout(n.bind(this), this.loadDelay, e) : n.bind(this)(e)
        }
        getCurrentPage() {
            return this.diva.getActivePageIndex()
        }
        getCurrentPageURI() {
            return this.indexMap.get(this.getCurrentPage())
        }
        adjustZoom() {
            new Promise(e => {
                Array.from(document.getElementsByClassName("neon-container")).forEach(e => {
                    e.style.display = "none"
                }), setTimeout(e, this.diva.settings.zoomDuration + 100)
            }).then(() => {
                this.changePage(this.diva.getActivePageIndex(), !0), Array.from(document.getElementsByClassName("neon-container")).forEach(e => {
                    const t = e.firstChild,
                        n = parseInt(e.id.match(/\d+/)[0]);
                    this.updateSVG(t, n), e.style.display = ""
                })
            })
        }
        updateSVG(e, t) {
            const n = document.getElementById("diva-1-inner"),
                i = this.diva.getPageDimensionsAtCurrentZoomLevel(t),
                r = this.diva.settings.viewHandler._viewerCore.getPageRegion(t, {
                    includePadding: !0,
                    incorporateViewport: !0
                }),
                s = window.getComputedStyle(n, null).getPropertyValue("margin-left"),
                o = "neon-container-" + t.toString();
            let a = document.getElementById(o);
            for (null === a && (a = document.createElement("div"), a.id = o, a.classList.add("neon-container"), n.appendChild(a)); a.firstChild;) a.removeChild(a.firstChild);
            e.setAttribute("width", i.width.toString()), e.setAttribute("height", i.height.toString()), a.style.position = "absolute", a.style.top = r.top + "px", a.style.left = r.left - parseInt(s) + "px", a.appendChild(e)
        }
        didLoad() {
            this.divaReady = !0, this.displayPanel.setDisplayListeners(), document.getElementById("loading").style.display = "none", console.log(this.diva)
        }
        addUpdateCallback(e) {
            this.updateCallbacks.push(e)
        }
        removeUpdateCallback(e) {
            const t = this.updateCallbacks.findIndex(t => t === e); - 1 !== t && this.updateCallbacks.splice(t, 1)
        }
        setViewEventHandlers() {
            document.body.addEventListener("keydown", e => {
                switch (e.key) {
                    case "h":
                        for (const e of document.getElementsByClassName("neon-container")) e.style.visibility = "hidden"
                }
            }), document.body.addEventListener("keyup", e => {
                switch (e.key) {
                    case "h":
                        for (const e of document.getElementsByClassName("neon-container")) e.style.visibility = ""
                }
            })
        }
        parseManifest(e) {
            this.indexMap.clear();
            for (const t of e.sequences)
                for (const e of t.canvases) this.indexMap.set(t.canvases.indexOf(e), e["@id"])
        }
        getPageName() {
            return this.diva.settings.manifest.itemTitle + " ??? " + this.diva.settings.manifest.pages[this.getCurrentPage()].l
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(8),
        r = n(69),
        s = n(3);
    t.default = class {
        constructor(e, t, n) {
            this.neonView = e, this.container = document.getElementById("container"), this.updateCallbacks = new Array(0), this.group = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.group.id = "svg_group", this.group.setAttribute("height", window.innerHeight.toString()), this.group.setAttribute("width", "100%"), this.bg = document.createElementNS("http://www.w3.org/2000/svg", "image"), this.bg.id = "bgimg", this.bg.classList.add("background"), this.bg.setAttribute("x", "0"), this.bg.setAttribute("y", "0");
            const i = new FileReader;
            fetch(n).then(e => {
                if (e.ok) return i.addEventListener("load", () => {
                    this.bg.setAttributeNS("http://www.w3.org/1999/xlink", "href", i.result.toString());
                    const e = this.bg.getBBox();
                    this.group.hasAttribute("viewBox") || this.group.setAttribute("viewBox", "0 0 " + e.width.toString() + " " + e.height.toString())
                }), e.blob()
            }).then(e => {
                i.readAsDataURL(e)
            }), this.mei = document.createElementNS("http://www.w3.org/svg", "svg"), this.mei.id = "mei_output", this.mei.classList.add("neon-container", "active-page"), this.group.appendChild(this.bg), this.group.appendChild(this.mei), this.container.appendChild(this.group), this.zoomHandler = new r.default, this.displayPanel = new t(this, "neon-container", "background", this.zoomHandler), this.setViewEventHandlers(), this.displayPanel.setDisplayListeners(), this.pageURI = n, document.getElementById("loading").style.display = "none"
        }
        updateSVG(e) {
            this.group.replaceChild(e, this.mei), this.mei = e, this.mei.id = "mei_output", this.mei.classList.add("neon-container", "active-page");
            const t = parseInt(this.mei.getAttribute("height")),
                n = parseInt(this.mei.getAttribute("width"));
            this.bg.setAttribute("height", t.toString()), this.bg.setAttribute("width", n.toString()), this.group.setAttribute("viewBox", "0 0 " + n + " " + t), i.updateHighlight(), this.resetTransformations(), this.updateCallbacks.forEach(e => e())
        }
        async changePage(e, t) {
            const n = await this.neonView.getPageSVG(this.getCurrentPageURI());
            this.updateSVG(n)
        }
        addUpdateCallback(e) {
            this.updateCallbacks.push(e)
        }
        removeUpdateCallback(e) {
            const t = this.updateCallbacks.findIndex(t => t === e); - 1 !== t && this.updateCallbacks.splice(t, 1)
        }
        resetTransformations() {
            this.displayPanel.zoomHandler.restoreTransformation(), i.setOpacityFromSlider()
        }
        getCurrentPage() {
            return 0
        }
        getCurrentPageURI() {
            return this.pageURI
        }
        setViewEventHandlers() {
            document.body.addEventListener("keydown", e => {
                switch (e.key) {
                    case "Shift":
                        s.select("#svg_group").on(".drag", null), s.select("#svg_group").call(s.drag().on("start", this.displayPanel.zoomHandler.startDrag.bind(this.displayPanel.zoomHandler)).on("drag", this.displayPanel.zoomHandler.dragging.bind(this.displayPanel.zoomHandler)));
                        break;
                    case "h":
                        document.getElementById("mei_output").setAttribute("visibility", "hidden")
                }
            }), document.body.addEventListener("keyup", e => {
                switch (e.key) {
                    case "Shift":
                        s.select("#svg_group").on(".drag", null), "viewer" !== this.neonView.getUserMode() && this.neonView.NeumeEdit.setSelectListeners();
                        break;
                    case "h":
                        document.getElementById("mei_output").setAttribute("visibility", "visible")
                }
            }), s.select("#container").on("touchstart", () => {
                2 === s.event.touches.length && (this.displayPanel.zoomHandler.startDrag(), s.select("#container").on("touchmove", this.displayPanel.zoomHandler.dragging.bind(this.displayPanel.zoomHandler)), s.select("#container").on("touchend", () => {
                    s.select("#container").on("touchmove", null)
                }))
            }), s.select("#container").on("wheel", this.displayPanel.zoomHandler.scrollZoom.bind(this.displayPanel.zoomHandler), !1), window.onresize = () => {
                const e = window.innerHeight,
                    t = document.getElementById("container");
                e > Number(t.getAttribute("height")) && t.setAttribute("height", e.toString())
            }
        }
        getPageName() {
            return this.neonView.name
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(35),
        r = n(19),
        s = n(38),
        o = n(11),
        a = n(8),
        c = n(12);
    t.default = class {
        constructor(e) {
            this.neonView = e, i.initEditModeControls(this)
        }
        initEditMode() {
            this.dragHandler = new c.default(this.neonView, ".active-page > svg"), this.insertHandler = new s.default(this.neonView, ".active-page > svg"), i.bindInsertTabs(this.insertHandler), document.getElementById("primitiveTab").click(), r.setSelectHelperObjects(this.neonView, this.dragHandler), this.setSelectListeners(), o.initNeonView(this.neonView), i.initInsertEditControls();
            const e = document.getElementById("editMenu");
            e.style.backgroundColor = "#ffc7c7", e.style.fontWeight = "bold", r.setSelectStrokeWidth(1), i.initSelectionButtons(), a.setHighlightSelectionControls(), this.neonView.view.addUpdateCallback(this.setSelectListeners.bind(this))
        }
        getUserMode() {
            return void 0 !== this.insertHandler ? this.insertHandler.isInsertMode() ? "insert" : "edit" : "viewer"
        }
        setSelectListeners() {
            r.clickSelect(".active-page > svg > svg, .active-page > svg > svg use, .active-page > svg > svg rect"), r.dragSelect(".active-page svg")
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(35),
        r = n(8),
        s = n(19),
        o = n(38),
        a = n(11),
        c = n(12);
    t.default = class {
        constructor(e) {
            this.neonView = e, i.initEditModeControls(this)
        }
        initEditMode() {
            this.dragHandler = new c.default(this.neonView, "#svg_group"), this.insertHandler = new o.default(this.neonView, "#svg_group"), i.bindInsertTabs(this.insertHandler), document.getElementById("primitiveTab").click(), s.setSelectHelperObjects(this.neonView, this.dragHandler), this.setSelectListeners(), a.initNeonView(this.neonView), i.initInsertEditControls();
            const e = document.getElementById("editMenu");
            e.style.backgroundColor = "#ffc7c7", e.style.fontWeight = "bold", i.initSelectionButtons(), r.setHighlightSelectionControls(), this.neonView.view.addUpdateCallback(this.setSelectListeners.bind(this))
        }
        getUserMode() {
            return void 0 !== this.insertHandler ? this.insertHandler.isInsertMode() ? "insert" : "edit" : "viewer"
        }
        setSelectListeners() {
            s.clickSelect("#svg_group, #svg_group use, #svg_group rect"), s.dragSelect("#svg_group")
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = new Map([
        ["", "Punctum"],
        ["u", "Pes"],
        ["d", "Clivis"],
        ["uu", "Scandicus"],
        ["ud", "Torculus"],
        ["du", "Porrectus"],
        ["s", "Distropha"],
        ["ss", "Tristopha"],
        ["sd", "Pressus"],
        ["dd", "Climacus"],
        ["ddu", "Climacus resupinus"],
        ["udu", "Torculus resupinus"],
        ["dud", "Porrectus flexus"],
        ["udd", "Pes subpunctis"],
        ["uud", "Scandicus flexus"],
        ["uudd", "Scandicus subpunctis"],
        ["dudd", "Porrectus subpunctis"]
    ]);

    function r() {
        const e = document.getElementById("neume_info");
        document.getElementById("displayInfo").checked ? e.setAttribute("style", "") : e.setAttribute("style", "display: none")
    }

    function s() {
        document.getElementById("neume_info").innerHTML = "<article class='message'><div class='message-header'><p></p></div><div class='message-body'></div>", document.getElementById("neume_info").setAttribute("style", "display: none"), r(), document.getElementById("displayInfo").addEventListener("click", r)
    }
    t.default = class {
        constructor(e) {
            this.neonView = e;
            const t = document.getElementById("extensible-block"),
                n = document.createElement("label");
            n.classList.add("checkbox"), n.textContent = "Display Info: ";
            const i = document.createElement("input");
            i.classList.add("checkbox"), i.id = "displayInfo", i.type = "checkbox", i.checked = !1, n.appendChild(i), t.prepend(n), this.neonView.view.addUpdateCallback(this.resetInfoListeners.bind(this)), s(), this.resetInfoListeners()
        }
        infoListeners() {
            try {
                document.getElementsByClassName("active-page")[0].querySelectorAll(".neume,.custos,.clef,.accid").forEach(e => {
                    e.addEventListener("mouseover", this.updateInfo.bind(this))
                })
            } catch (e) {}
        }
        stopListeners() {
            document.querySelectorAll(".neume,.custos,.clef,.accid").forEach(e => {
                e.removeEventListener("mouseover", this.updateInfo.bind(this))
            })
        }
        resetInfoListeners() {
            this.stopListeners(), this.infoListeners()
        }
        async updateInfo(e) {
            const t = e.currentTarget.id;
            if ("" === t) return Array.from(document.getElementById("neume_info").children).forEach(e => {
                e.remove()
            }), void console.log("No id!");
            const n = document.getElementById(t),
                i = n.getAttribute("class").match(/neume|nc|clef|custos|staff|liquescent|accid/)[0];
            let r, s = "";
            switch (i) {
                case "neume":
                    const e = n.querySelectorAll(".nc");
                    if (1 === e.length) {
                        const t = await this.neonView.getElementAttr(e[0].id, this.neonView.view.getCurrentPageURI());
                        if ("a" === t.curve || "c" === t.curve) {
                            let t = await this.getPitches(e);
                            t = t.trim().toUpperCase(), s = "Shape: Liquescent\r\nPitch(es): " + t;
                            break
                        }
                    }
                    let i = await this.getContour(e);
                    if (1 === e.length) {
                        const t = await this.neonView.getElementAttr(e[0].id, this.neonView.view.getCurrentPageURI());
                        if ("s" === t.tilt) {
                            let t = await this.getPitches(e);
                            t = t.trim().toUpperCase(), s = "Shape: Virga \r\nPitch(es): " + t;
                            break
                        }
                        if ("n" === t.tilt) {
                            let t = await this.getPitches(e);
                            t = t.trim().toUpperCase(), s = "Shape: Reversed Virga \r\nPitch(es): " + t;
                            break
                        }
                    }
                    if ("Clivis" === i) {
                        (await this.neonView.getElementAttr(e[0].id, this.neonView.view.getCurrentPageURI())).ligated && (i = "Ligature")
                    }
                    let o = await this.getPitches(e);
                    o = o.trim().toUpperCase(), s = "Shape: " + (void 0 === i ? "Compound" : i) + "\r\nPitch(es): " + o;
                    break;
                case "custos":
                    r = await this.neonView.getElementAttr(t, this.neonView.view.getCurrentPageURI()), s += "Pitch: " + r.pname.toUpperCase() + r.oct;
                    break;
                case "accid":
                    r = await this.neonView.getElementAttr(t, this.neonView.view.getCurrentPageURI());
                    let a = "";
                    "F" == r.accid.toUpperCase() ? a = "Flat" : "N" == r.accid.toUpperCase() && (a = "Natural"), s += "Accid Type: " + a;
                    break;
                case "clef":
                    r = await this.neonView.getElementAttr(t, this.neonView.view.getCurrentPageURI()), s += "Shape: " + r.shape + "\r\nLine: " + r.line;
                    break;
                default:
                    s += "nothing"
            }
            this.updateInfoModule(i, s)
        }
        async getPitches(e) {
            let t = "";
            for (const n of e) {
                const e = await this.neonView.getElementAttr(n.id, this.neonView.view.getCurrentPageURI());
                t += e.pname + e.oct + " "
            }
            return t
        }
        async getContour(e) {
            let t = "",
                n = null;
            for (const i of e) {
                const e = await this.neonView.getElementAttr(i.id, this.neonView.view.getCurrentPageURI());
                null !== n && (n.oct > e.oct ? t += "d" : n.oct < e.oct || this.pitchNameToNum(n.pname) < this.pitchNameToNum(e.pname) ? t += "u" : this.pitchNameToNum(n.pname) > this.pitchNameToNum(e.pname) ? t += "d" : t += "s"), n = e
            }
            return void 0 === i.get(t) && console.warn("Unknown contour: " + t), i.get(t)
        }
        updateInfoModule(e, t) {
            document.getElementsByClassName("message-header")[0].querySelector("p").textContent = e, document.getElementsByClassName("message-body")[0].innerText = t, document.getElementById("displayInfo").checked && (document.getElementsByClassName("message")[0].style.display = "")
        }
        pitchNameToNum(e) {
            switch (e) {
                case "c":
                    return 1;
                case "d":
                    return 2;
                case "e":
                    return 3;
                case "f":
                    return 4;
                case "g":
                    return 5;
                case "a":
                    return 6;
                case "b":
                    return 7;
                default:
                    console.log("Unknown pitch name")
            }
        }
        getContourByValue(e) {
            for (const [t, n] of i.entries())
                if (n === e) return t
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(9),
        r = n(4),
        s = n(8);
    t.default = class {
        constructor(e) {
            this.neonView = e, this.notificationSent = !1;
            const t = document.getElementById("extensible-block"),
                n = document.createElement("label"),
                i = document.createElement("label"),
                r = document.createElement("input"),
                s = document.createElement("input");
            n.classList.add("checkbox"), i.classList.add("checkbox"), n.textContent = "Display Text: ", i.textContent = "Display Text BBoxes: ", r.classList.add("checkbox"), s.classList.add("checkbox"), r.id = "displayText", r.type = "checkbox", s.id = "displayBBox", s.type = "checkbox", r.checked = !1, s.checked = !1, n.appendChild(r), i.appendChild(s), t.prepend(i), t.prepend(n), this.setTextViewControls(), this.neonView.view.addUpdateCallback(this.updateTextViewVisibility.bind(this)), this.neonView.view.addUpdateCallback(this.updateBBoxViewVisibility.bind(this))
        }
        setTextViewControls() {
            this.updateTextViewVisibility(), this.updateBBoxViewVisibility(), document.getElementById("displayText").addEventListener("click", function() {
                this.updateTextViewVisibility()
            }.bind(this)), document.getElementById("displayBBox").addEventListener("click", function() {
                this.updateBBoxViewVisibility()
            }.bind(this))
        }
        updateBBoxViewVisibility() {
            if (document.getElementById("displayBBox").checked) document.querySelectorAll(".sylTextRect").forEach(e => {
                e.classList.add("sylTextRect-display"), e.classList.remove("sylTextRect")
            }), document.querySelectorAll(".syl.selected .sylTextRect-display").forEach(e => {
                e.style.fill = "red"
            }), "viewer" !== this.neonView.getUserMode() && void 0 !== this.neonView.TextEdit && this.neonView.TextEdit.initSelectByBBoxButton();
            else {
                null !== document.getElementById("selByBBox") && document.getElementById("selByBBox").classList.contains("is-active") && (r.unselect(), document.getElementById("selByBBox").classList.remove("is-active"), document.getElementById("selBySyl").classList.add("is-active")), document.querySelectorAll(".sylTextRect-display").forEach(e => {
                    e.classList.add("sylTextRect"), e.classList.remove("sylTextRect-display")
                }), document.querySelectorAll(".syl.selected .sylTextRect").forEach(e => {
                    e.style.fill = "none"
                });
                try {
                    document.getElementById("selByBBox").style.display = "none"
                } catch (e) {}
            }
            s.updateHighlight()
        }
        updateTextViewVisibility() {
            if (document.getElementById("displayText").checked) {
                const e = document.getElementById("syl_text");
                e.style.display = "", e.innerHTML = "<p>" + this.getSylText() + "</p>";
                e.querySelectorAll("p > span").forEach(e => {
                    const t = document.getElementById(e.className),
                        n = t.querySelector(".syl"),
                        i = n.querySelector("text"),
                        r = n.querySelector("rect");
                    0 === i.classList.length && i.classList.add("text"), e.addEventListener("mouseover", () => {
                        t.classList.add("selected"), t.querySelectorAll(".neume").forEach(e => {
                            e.classList.add("selected")
                        }), null !== r && (r.style.fill = "#d00")
                    }), e.addEventListener("mouseleave", () => {
                        t.classList.remove("selected"), t.querySelectorAll(".neume").forEach(e => {
                            e.classList.remove("selected")
                        }), null !== r && ("rgb(0, 0, 0)" !== t.style.fill ? r.style.fill = t.getAttribute("fill") : r.style.fill = "blue")
                    })
                }), "viewer" !== this.neonView.getUserMode() && void 0 !== this.neonView.TextEdit && this.neonView.TextEdit.initTextEdit()
            } else document.getElementById("syl_text").style.display = "none"
        }
        getSylText() {
            let e = "";
            return document.querySelectorAll(".active-page .syllable").forEach(t => {
                if (null !== t.querySelector(".syl")) {
                    const n = t.querySelector(".syl");
                    e += "<span class='" + t.id + "'>", "" === n.textContent.trim() ? e += "&#x25CA; " : Array.from(n.children[0].children[0].children).forEach(t => {
                        e += "" !== t.textContent ? t.textContent : "&#x25CA; "
                    }), e += " </span>"
                }
            }), this.notificationSent || (i.queueNotification("Blank syllables are represented by &#x25CA;!"), this.notificationSent = !0), e.replace(/\ue551/g, "-")
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(4),
        r = n(12),
        s = n(19),
        o = n(10);

    function a() {
        if (!document.getElementById("selByBBox").classList.contains("is-active")) {
            i.unselect();
            try {
                document.getElementById("moreEdit").innerHTML = "", document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible")
            } catch (e) {}
            document.getElementById("selByBBox").classList.add("is-active");
            try {
                document.getElementById("selByNc").classList.remove("is-active"), document.getElementById("selByNeume").classList.remove("is-active"), document.getElementById("selByStaff").classList.remove("is-active"), document.getElementById("selBySyl").classList.remove("is-active"), document.getElementById("selByLayerElement").classList.remove("is-active")
            } catch (e) {}
            try {
                "highlight-selection" === document.querySelector(".highlight-selected").id && o.setGroupingHighlight("syllable")
            } catch (e) {}
        }
        this.addBBoxListeners()
    }
    t.default = class {
        constructor(e) {
            this.neonView = e, this.initEditModeControls()
        }
        initEditModeControls() {
            document.getElementById("edit_mode").addEventListener("click", () => {
                this.initTextEdit(), document.getElementById("displayBBox").checked && this.initSelectByBBoxButton()
            })
        }
        initTextEdit() {
            document.getElementById("syl_text").querySelectorAll("p > span").forEach(e => {
                function t() {
                    this.updateSylText(e)
                }
                e.removeEventListener("click", t.bind(this)), e.addEventListener("click", t.bind(this))
            })
        }
        initSelectByBBoxButton() {
            if (void 0 !== this.neonView.NeumeEdit) {
                const e = document.getElementById("selByBBox");
                if (e) return void(e.style.display = "");
                const t = document.getElementById("selBySyl").closest(".control").closest(".field"),
                    n = document.createElement("p");
                n.classList.add("control");
                const i = document.createElement("button");
                i.classList.add("button", "sel-by"), i.id = "selByBBox", i.textContent = "BBox", n.appendChild(i), t.appendChild(n), i.addEventListener("click", a.bind(this)), document.body.addEventListener("keydown", e => {
                    "6" === e.key && "" === document.getElementById("selByBBox").style.display && a.bind(this)()
                }), this.neonView.view.addUpdateCallback(this.addBBoxListeners.bind(this))
            } else {
                const e = document.getElementById("undo").closest(".control"),
                    t = document.createElement("p");
                t.classList.add("control");
                const n = document.createElement("button");
                n.classList.add("button", "sel-by"), n.id = "selByBBox", n.textContent = "BBox", t.appendChild(n), e.appendChild(t), n.classList.add("is-active"), n.style.display = "none", this.addBBoxListeners(), this.neonView.view.addUpdateCallback(this.addBBoxListeners.bind(this))
            }
        }
        addBBoxListeners() {
            document.getElementById("selByBBox").classList.contains("is-active") && (i.unselect(), void 0 === this.neonView.NeumeEdit && (this.dragHandler = new r.default(this.neonView, ".sylTextRect-display"), s.setSelectHelperObjects(this.neonView, this.dragHandler), "SingleView" === this.neonView.view.constructor.name ? (s.clickSelect("#mei_output, #mei_output rect"), s.dragSelect("#svg_group")) : (s.clickSelect(".active-page > svg > svg, .active-page > svg > svg rect"), s.dragSelect(".active-page svg"))))
        }
        updateSylText(e) {
            const t = e.textContent.replace(/\u{25CA}/u, "").trim();
            const n = window.prompt("", t);
            if (null !== n && n !== t) {
                const t = {
                    action: "setText",
                    param: {
                        elementId: [...e.classList.entries()].filter(e => "text-select" !== e[1])[0][1],
                        text: n
                    }
                };
                this.neonView.edit(t, this.neonView.view.getCurrentPageURI()).then(e => {
                    e && this.neonView.updateForCurrentPage()
                })
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertSbToStaff = t.convertStaffToSb = t.zip = void 0;
    const i = n(15),
        r = n(42);

    function s(e, t) {
        for (const n of e.attributes) t.setAttribute(n.name, n.value)
    }
    t.zip = function(e, t) {
        const n = [];
        for (let i = 0; i < (e.length > t.length ? t.length : e.length); i++) n.push([e[i], t[i]]);
        return n
    }, t.convertStaffToSb = function(e) {
        const t = new DOMParser,
            n = new XMLSerializer,
            i = t.parseFromString(e, "text/xml"),
            s = i.documentElement,
            o = new Set;
        for (const e of s.getElementsByTagName("section")) {
            const t = i.createElementNS("http://www.music-encoding.org/ns/mei", "staff"),
                n = i.createElementNS("http://www.music-encoding.org/ns/mei", "layer");
            t.setAttribute("n", "1"), n.setAttribute("n", "1"), t.appendChild(n);
            const r = Array.from(e.getElementsByTagName("staff"));
            for (const e of r) {
                const t = e.getElementsByTagName("layer")[0],
                    r = i.createElementNS("http://www.music-encoding.org/ns/mei", "sb");
                r.setAttribute("n", e.getAttribute("n")), r.setAttribute("facs", e.getAttribute("facs")), r.setAttribute("xml:id", e.getAttribute("xml:id"));
                let s = void 0;
                null !== n.lastElementChild && "custos" === n.lastElementChild.tagName && (s = n.removeChild(n.lastElementChild));
                const a = n.lastElementChild;
                null !== a && "syllable" === a.tagName && a.hasAttribute("precedes") ? (void 0 !== s && a.appendChild(s), a.appendChild(r)) : (void 0 !== s && n.appendChild(s), n.appendChild(r));
                for (const e of o) {
                    const n = e.getAttribute("precedes"),
                        i = Array.from(t.getElementsByTagName("syllable")).filter(e => "#" + e.getAttribute("xml:id") === n).pop();
                    if (void 0 !== i) {
                        for (null !== i.previousElementSibling && "clef" === i.previousElementSibling.tagName && e.append(i.previousElementSibling); null !== i.firstChild;) e.append(i.firstChild);
                        i.remove(), e.removeAttribute("precedes"), o.delete(e)
                    }
                }
                for (; null !== t.firstElementChild;) t.firstElementChild.hasAttribute("precedes") && o.add(t.firstElementChild), n.appendChild(t.firstElementChild);
                e.remove()
            }
            e.appendChild(t)
        }
        return r.xml(n.serializeToString(i))
    }, t.convertSbToStaff = function(e) {
        const t = (new DOMParser).parseFromString(e, "text/xml"),
            n = t.documentElement,
            o = Array.from(n.getElementsByTagName("syllable"));
        for (const e of o) 0 === e.getElementsByTagName("neume").length && e.remove();
        for (const e of n.getElementsByTagName("section")) {
            const n = Array.from(e.getElementsByTagName("staff"));
            for (const r of n) {
                const n = r.getElementsByTagName("layer")[0],
                    o = Array.from(n.getElementsByTagName("sb"));
                for (const e of o)
                    if ("layer" !== e.parentElement.tagName) {
                        const n = e.parentElement;
                        let r = !1,
                            s = !1;
                        const o = Array.from(n.children),
                            a = o.indexOf(e);
                        for (const e of n.getElementsByTagName("neume")) {
                            const t = o.indexOf(e);
                            t < a ? r = !0 : t > a && (s = !0)
                        }
                        if (!r && s) n.insertAdjacentElement("beforebegin", e);
                        else if (r && !s) n.insertAdjacentElement("afterend", e);
                        else if (r && s) {
                            const r = t.createElementNS("http://www.music-encoding.org/ns/mei", "syllable");
                            r.setAttribute("xml:id", "m-" + i.uuidv4()), r.setAttribute("follows", "#" + n.getAttribute("xml:id")), n.setAttribute("precedes", "#" + r.getAttribute("xml:id"));
                            const s = o.indexOf(e);
                            for (const e of o) {
                                o.indexOf(e) > s && r.appendChild(e)
                            }
                            n.insertAdjacentElement("afterend", e), e.insertAdjacentElement("afterend", r);
                            for (const e of n.getElementsByTagName("custos")) n.insertAdjacentElement("afterend", e);
                            for (const e of r.getElementsByTagName("clef")) r.insertAdjacentElement("beforebegin", e)
                        } else console.warn("NONE BEHIND NONE AHEAD"), console.debug(n)
                    }
                const a = Array.from(n.getElementsByTagName("sb"));
                for (let o = 0; o < a.length; o++) {
                    const c = a[o],
                        l = a.length > o + 1 ? a[o + 1] : void 0,
                        u = t.createElementNS("http://www.music-encoding.org/ns/mei", "staff");
                    s(c, u);
                    const d = t.createElementNS("http://www.music-encoding.org/ns/mei", "layer");
                    d.setAttribute("n", "1"), d.setAttribute("xml:id", "m-" + i.uuidv4()), u.appendChild(d);
                    const h = Array.from(n.children),
                        f = h.slice(h.indexOf(c) + 1, h.indexOf(l));
                    for (const e of f) d.appendChild(e);
                    e.insertBefore(u, r)
                }
                r.remove()
            }
        }
        for (const e of n.querySelectorAll("syllable")) {
            for (const t of e.querySelectorAll("clef")) e.insertAdjacentElement("beforebegin", t);
            for (const t of e.querySelectorAll("custos")) e.insertAdjacentElement("afterend", t)
        }
        const a = new XMLSerializer;
        return r.xml(a.serializeToString(t))
    }
}, function(e, t) {
    var n, i, r = e.exports = {};

    function s() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
            n = s
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            i = o
        }
    }();
    var c, l = [],
        u = !1,
        d = -1;

    function h() {
        u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && f())
    }

    function f() {
        if (!u) {
            var e = a(h);
            u = !0;
            for (var t = l.length; t;) {
                for (c = l, l = []; ++d < t;) c && c[d].run();
                d = -1, t = l.length
            }
            c = null, u = !1,
                function(e) {
                    if (i === clearTimeout) return clearTimeout(e);
                    if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function g() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new p(e, t)), 1 !== l.length || u || a(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function(e) {
        return []
    }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    (function(i) {
        function r() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e
        }(t = e.exports = n(67)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
            var i = "color: " + this.color;
            e.splice(1, 0, i, "color: inherit");
            var r = 0,
                s = 0;
            e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                "%%" !== e && (r++, "%c" === e && (s = r))
            })), e.splice(s, 0, i)
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }, t.load = r, t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(r())
    }).call(this, n(32))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initSelectionButtons = t.initInsertEditControls = t.bindInsertTabs = t.initEditModeControls = void 0;
    const i = n(18),
        r = n(10),
        s = n(4);

    function o(e, t) {
        document.getElementById(e).classList.add("is-active"), document.getElementById(e).classList.contains("insertel") && t.insertActive(e)
    }

    function a(e) {
        document.querySelectorAll(e).forEach(e => {
            e.classList.remove("is-active")
        })
    }
    t.initEditModeControls = function(e) {
        document.getElementById("edit_mode").addEventListener("click", (function() {
            document.getElementById("insert_controls").innerHTML += i.insertControlsPanel, document.getElementById("edit_controls").innerHTML += i.editControlsPanel, e.initEditMode()
        }))
    }, t.bindInsertTabs = function(e) {
        const t = Array.from(document.getElementsByClassName("insertTab")).map(e => e.id);
        document.body.addEventListener("keydown", t => {
            if (t.code.match(/^Digit\d$/) && t.shiftKey) try {
                const n = Number(t.code[t.code.length - 1]) - 1,
                    i = document.getElementsByClassName("insertel")[n];
                a(".insertel"), e.insertDisabled(), o(i.id, e)
            } catch (e) {
                console.debug(e)
            }
        }), t.forEach(t => {
            document.getElementById(t).addEventListener("click", () => {
                a(".insertTab"), o(t, e), document.getElementById("insert_data").innerHTML = i.insertTabHtml[t],
                    function(e) {
                        const t = Array.from(document.getElementsByClassName("insertel"));
                        t.map(e => e.id).forEach(t => {
                            document.getElementById(t).addEventListener("click", () => {
                                a(".insertel"), o(t, e)
                            })
                        })
                    }(e), a(".insertel");
                o(document.getElementsByClassName("insertel")[0].id, e)
            })
        })
    }, t.initInsertEditControls = function() {
        const e = document.getElementById("toggleInsert"),
            t = document.getElementById("toggleEdit"),
            n = document.getElementById("insertContents"),
            i = document.getElementById("editContents");
        e.parentElement.addEventListener("click", () => {
            "none" === n.style.display ? (n.style.display = "", e.setAttribute("xlink:href", "/Neon/Neon-gh/assets/img/icons.svg#dropdown-down")) : (n.style.display = "none", e.setAttribute("xlink:href", "/Neon/Neon-gh/assets/img/icons.svg#dropdown-side"))
        }), t.parentElement.addEventListener("click", () => {
            "none" === i.style.display ? (i.style.display = "", t.setAttribute("xlink:href", "/Neon/Neon-gh/assets/img/icons.svg#dropdown-down")) : (i.style.display = "none", t.setAttribute("xlink:href", "/Neon/Neon-gh/assets/img/icons.svg#dropdown-side"))
        })
    }, t.initSelectionButtons = function() {
        const e = document.getElementById("selBySyl"),
            t = document.getElementById("selByNeume"),
            n = document.getElementById("selByNc"),
            i = document.getElementById("selByStaff"),
            o = document.getElementById("selByLayerElement");

        function a() {
            if (!e.classList.contains("is-active")) {
                s.unselect(), document.getElementById("moreEdit").innerHTML = "", document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible"), e.classList.add("is-active"), t.classList.remove("is-active"), n.classList.remove("is-active"), i.classList.remove("is-active"), o.classList.remove("is-active");
                try {
                    document.getElementById("selByBBox").classList.remove("is-active")
                } catch (e) {}
                try {
                    "highlight-selection" === document.querySelector(".highlight-selected").id && r.setGroupingHighlight("syllable")
                } catch (e) {}
            }
        }

        function c() {
            if (!t.classList.contains("is-active")) {
                s.unselect(), document.getElementById("moreEdit").innerHTML = "", document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible"), t.classList.add("is-active"), n.classList.remove("is-active"), e.classList.remove("is-active"), i.classList.remove("is-active"), o.classList.remove("is-active");
                try {
                    document.getElementById("selByBBox").classList.remove("is-active")
                } catch (e) {}
                try {
                    "highlight-selection" === document.querySelector(".highlight-selected").id && r.setGroupingHighlight("neume")
                } catch (e) {}
            }
        }

        function l() {
            if (!n.classList.contains("is-active")) {
                s.unselect(), document.getElementById("moreEdit").innerHTML = "", document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible"), n.classList.add("is-active"), t.classList.remove("is-active"), e.classList.remove("is-active"), i.classList.remove("is-active"), o.classList.remove("is-active");
                try {
                    document.getElementById("selByBBox").classList.remove("is-active")
                } catch (e) {}
                try {
                    "highlight-selection" === document.querySelector(".highlight-selected").id && r.setGroupingHighlight("neume")
                } catch (e) {}
            }
        }

        function u() {
            if (!i.classList.contains("is-active")) {
                s.unselect(), document.getElementById("moreEdit").innerHTML = "", document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible"), i.classList.add("is-active"), t.classList.remove("is-active"), n.classList.remove("is-active"), e.classList.remove("is-active"), o.classList.remove("is-active");
                try {
                    document.getElementById("selByBBox").classList.remove("is-active")
                } catch (e) {}
                try {
                    "highlight-selection" === document.querySelector(".highlight-selected").id && r.setGroupingHighlight("staff")
                } catch (e) {}
            }
        }

        function d() {
            if (!o.classList.contains("is-active")) {
                s.unselect(), document.getElementById("moreEdit").innerHTML = "", document.getElementById("extraEdit").innerHTML = "", document.getElementById("extraEdit").classList.add("is-invisible"), o.classList.add("is-active"), t.classList.remove("is-active"), n.classList.remove("is-active"), i.classList.remove("is-active"), e.classList.remove("is-active");
                try {
                    document.getElementById("selByBBox").classList.remove("is-active")
                } catch (e) {}
                try {
                    "highlight-selection" === document.querySelector(".highlight-selected").id && r.setGroupingHighlight("accid")
                } catch (e) {}
            }
        }
        e.addEventListener("click", a), document.body.addEventListener("keydown", e => {
            "1" === e.key && a()
        }), t.addEventListener("click", c), document.body.addEventListener("keydown", e => {
            "2" === e.key && c()
        }), n.addEventListener("click", l), document.body.addEventListener("keydown", e => {
            "3" === e.key && l()
        }), i.addEventListener("click", u), document.body.addEventListener("keydown", e => {
            "4" === e.key && u()
        }), o.addEventListener("click", d), document.body.addEventListener("keydown", e => {
            "5" === e.key && d()
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initGroupingListeners = t.endGroupingSelection = t.triggerGrouping = t.initNeonView = void 0;
    const i = n(18),
        r = n(70),
        s = n(9),
        o = n(11);
    let a;

    function c() {
        const e = document.getElementById("moreEdit");
        e.innerHTML = "", e.classList.add("is-invisible"), document.body.removeEventListener("keydown", o.deleteButtonHandler)
    }

    function l() {
        const e = document.getElementById("delete");
        e.removeEventListener("click", o.removeHandler), e.addEventListener("click", o.removeHandler), document.body.addEventListener("keydown", o.deleteButtonHandler);
        try {
            document.getElementById("mergeSyls").addEventListener("click", () => {
                u("group", "neume", h().filter(e => document.getElementById(e).classList.contains("neume")))
            })
        } catch (e) {}
        try {
            document.getElementById("groupNeumes").addEventListener("click", () => {
                u("group", "neume", d())
            })
        } catch (e) {}
        try {
            document.getElementById("groupNcs").addEventListener("click", () => {
                u("group", "nc", d())
            })
        } catch (e) {}
        try {
            document.getElementById("ungroupNeumes").addEventListener("click", () => {
                u("ungroup", "neume", h())
            })
        } catch (e) {}
        try {
            document.getElementById("ungroupNcs").addEventListener("click", () => {
                u("ungroup", "nc", h())
            })
        } catch (e) {}
        try {
            document.getElementById("toggle-ligature").addEventListener("click", async () => {
                const e = d();
                let t;
                if (/#E99[016]/.test(document.getElementById(e[0]).children[0].getAttribute("xlink:href"))) {
                    t = !1;
                    const n = {
                        action: "chain",
                        param: [o.unsetInclinatumAction(e[0]), o.unsetVirgaAction(e[0]), o.unsetInclinatumAction(e[1]), o.unsetVirgaAction(e[1])]
                    };
                    await a.edit(n, a.view.getCurrentPageURI())
                } else t = !0;
                const n = {
                    action: "toggleLigature",
                    param: {
                        elementIds: e,
                        isLigature: t.toString()
                    }
                };
                a.edit(n, a.view.getCurrentPageURI()).then(e => {
                    e ? s.queueNotification("Ligature Toggled") : s.queueNotification("Ligature Toggle Failed"), c(), a.updateForCurrentPage()
                })
            })
        } catch (e) {}
        try {
            document.getElementById("toggle-link").addEventListener("click", () => {
                const e = d(),
                    t = {
                        action: "chain",
                        param: []
                    },
                    n = new Array;
                if (document.getElementById(e[0]).getAttribute("mei:precedes")) n.push({
                    action: "set",
                    param: {
                        elementId: e[0],
                        attrType: "precedes",
                        attrValue: ""
                    }
                }), n.push({
                    action: "set",
                    param: {
                        elementId: e[1],
                        attrType: "follows",
                        attrValue: ""
                    }
                }), n.push({
                    action: "setText",
                    param: {
                        elementId: e[1],
                        text: ""
                    }
                });
                else if (document.getElementById(e[0]).getAttribute("mei:follows")) n.push({
                    action: "set",
                    param: {
                        elementId: e[0],
                        attrType: "follows",
                        attrValue: ""
                    }
                }), n.push({
                    action: "set",
                    param: {
                        elementId: e[1],
                        attrType: "precedes",
                        attrValue: ""
                    }
                }), n.push({
                    action: "setText",
                    param: {
                        elementId: e[0],
                        text: ""
                    }
                });
                else {
                    const t = document.getElementById(e[0]),
                        i = document.getElementById(e[1]),
                        r = t.closest(".staff"),
                        s = i.closest(".staff"),
                        o = Array.from(r.parentElement.children).filter(e => e.classList.contains("staff"));
                    let a, c;
                    o.indexOf(r) < o.indexOf(s) ? (a = t, c = i) : (a = i, c = t), n.push({
                        action: "set",
                        param: {
                            elementId: a.id,
                            attrType: "precedes",
                            attrValue: "#" + c.id
                        }
                    }), n.push({
                        action: "set",
                        param: {
                            elementId: c.id,
                            attrType: "follows",
                            attrValue: "#" + a.id
                        }
                    });
                    const l = c.querySelector(".syl");
                    null !== l && n.push({
                        action: "remove",
                        param: {
                            elementId: l.id
                        }
                    })
                }
                t.param = n, a.edit(t, a.view.getCurrentPageURI()).then(e => {
                    e ? s.queueNotification("Toggled Syllable Link") : s.queueNotification("Failed to Toggle Syllable Link"), c(), a.updateForCurrentPage()
                })
            })
        } catch (e) {}
    }

    function u(e, t, n) {
        const i = {
            action: e,
            param: {
                groupType: t,
                elementIds: n
            }
        };
        a.edit(i, a.view.getCurrentPageURI()).then(i => {
            if (i ? "group" === e ? s.queueNotification("Grouping Success") : s.queueNotification("Ungrouping Success") : "group" === e ? s.queueNotification("Grouping Failed") : s.queueNotification("Ungrouping Failed"), a.updateForCurrentPage(), "nc" === t) {
                const e = document.getElementById(n[0]).parentElement,
                    t = Array.from(e.children);
                void 0 === a.info.getContour(t) && r.groupingNotRecognized()
            }
            c()
        })
    }

    function d() {
        const e = [];
        return Array.from(document.getElementsByClassName("selected")).forEach(t => {
            e.push(t.id)
        }), e
    }

    function h() {
        const e = [];
        return Array.from(document.getElementsByClassName("selected")).forEach(t => {
            Array.from(t.children).forEach(t => {
                e.push(t.id)
            })
        }), e
    }
    t.initNeonView = function(e) {
        a = e
    }, t.triggerGrouping = function(e) {
        const t = document.getElementById("moreEdit");
        t.classList.remove("is-invisible"), t.innerHTML += i.groupingMenu[e], l()
    }, t.endGroupingSelection = c, t.initGroupingListeners = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resize = void 0;
    const i = n(4),
        r = n(3),
        s = {
            TopLeft: 0,
            Top: 1,
            TopRight: 2,
            Right: 3,
            BottomRight: 4,
            Bottom: 5,
            BottomLeft: 6,
            Left: 7
        };

    function o(e, t, n, i, r) {
        let o;
        if (r >= 0) o = [{
            x: e,
            y: t,
            name: s.TopLeft
        }, {
            x: (e + n) / 2,
            y: t + (n - e) / 2 * Math.sin(r),
            name: s.Top
        }, {
            x: n,
            y: t + (n - e) * Math.sin(r),
            name: s.TopRight
        }, {
            x: n,
            y: (t + i + (n - e) * Math.sin(r)) / 2,
            name: s.Right
        }, {
            x: n,
            y: i,
            name: s.BottomRight
        }, {
            x: (e + n) / 2,
            y: i - (n - e) / 2 * Math.sin(r),
            name: s.Bottom
        }, {
            x: e,
            y: i - (n - e) * Math.sin(r),
            name: s.BottomLeft
        }, {
            x: e,
            y: (t + i - (n - e) * Math.sin(r)) / 2,
            name: s.Left
        }];
        else {
            const a = (n - e) * Math.tan(Math.abs(r)),
                c = i - t - a;
            o = [{
                x: e,
                y: t + a,
                name: s.TopLeft
            }, {
                x: (e + n) / 2,
                y: t + a / 2,
                name: s.Top
            }, {
                x: n,
                y: t,
                name: s.TopRight
            }, {
                x: n,
                y: t + c / 2,
                name: s.Right
            }, {
                x: n,
                y: t + c,
                name: s.BottomRight
            }, {
                x: (e + n) / 2,
                y: i - a / 2,
                name: s.Bottom
            }, {
                x: e,
                y: i,
                name: s.BottomLeft
            }, {
                x: e,
                y: i - c / 2,
                name: s.Left
            }]
        }
        return o
    }
    t.resize = function(e, t, n) {
        let a, c, l, u, d, h, f, p, g, v, m, y, b;

        function w() {
            const e = o(a, c, l, u, d),
                t = e.filter((e, t) => t % 2 == 0).map(e => e.x + "," + e.y).join(" ");
            r.select("#resizeRect").attr("points", t);
            for (const t in s) {
                const n = e[s[t]];
                r.select("#p-" + t).filter(".resizePoint").attr("cx", n.x).attr("cy", n.y)
            }
            let n = e[3].x,
                i = e[3].y;
            const h = n + 100 + "," + (i + 85) + " " + (n + 70) + "," + (i + 50) + " " + (n + 100) + "," + (i + 15) + " " + (n + 130) + "," + (i + 50);
            n = e[7].x, i = e[7].y;
            const f = n - 100 + "," + (i - 15) + " " + (n - 130) + "," + (i - 50) + " " + (n - 100) + "," + (i - 85) + " " + (n - 70) + "," + (i - 50);
            r.select("#rotateLeft").attr("points", f), r.select("#rotateRight").attr("points", h)
        }! function _() {
            if (null === e) return;
            if (e.classList.contains("syl")) {
                const t = e.querySelector(".sylTextRect-display");
                if (null === t) return void console.warn("Tried to draw resize rect for a sylTextRect that doesn't exist (or isn't displaying)");
                a = Number(t.getAttribute("x")), c = Number(t.getAttribute("y")), l = +a + +t.getAttribute("width"), u = +c + +t.getAttribute("height"), d = 0
            }
            if (e.classList.contains("staff")) {
                const t = i.getStaffBBox(e);
                a = t.ulx, c = t.uly, l = t.lrx, u = t.lry;
                const n = e.querySelector("path").getAttribute("d").match(/\d+/g).map(e => Number(e));
                d = Math.atan((n[3] - n[1]) / (n[2] - n[0]))
            }
            let E;
            const S = o(a, c, l, u, d);
            m = S[2].x - S[0].x;
            const x = S.filter((e, t) => t % 2 == 0).map(e => e.x + "," + e.y).join(" ");
            r.select("#" + e.id).append("polygon").attr("points", x).attr("id", "resizeRect").attr("stroke", "black").attr("stroke-width", 10).attr("fill", "none").style("cursor", "move").style("stroke-dasharray", "20 10");
            for (const t in s) {
                const n = S[s[t]];
                r.select(e.viewportElement).append("circle").attr("cx", n.x).attr("cy", n.y).attr("r", 25).attr("stroke", "black").attr("stroke-width", 4).attr("fill", "#0099ff").attr("class", "resizePoint").attr("id", "p-" + t)
            }
            for (const e in s) r.select("#p-" + e).filter(".resizePoint").call(r.drag().on("start", () => {
                C(e)
            }).on("drag", I).on("end", A.bind(this)));
            if (e.classList.contains("staff")) {
                let t = S[3].x,
                    n = S[3].y;
                const i = t + 100 + "," + (n + 85) + " " + (t + 70) + "," + (n + 50) + " " + (t + 100) + "," + (n + 15) + " " + (t + 130) + "," + (n + 50);
                t = S[7].x, n = S[7].y;
                const o = t - 100 + "," + (n - 15) + " " + (t - 130) + "," + (n - 50) + " " + (t - 100) + "," + (n - 85) + " " + (t - 70) + "," + (n - 50);
                r.select("#" + e.id).append("polygon").attr("points", i).attr("id", "rotateRight").attr("stroke", "black").attr("stroke-width", 7).attr("fill", "#0099ff").attr("class", "rotatePoint"), r.select("#" + e.id).append("polygon").attr("points", o).attr("id", "rotateLeft").attr("stroke", "black").attr("stroke-width", 7).attr("fill", "#0099ff").attr("class", "rotatePoint"), r.select("#rotateLeft").call(r.drag().on("start", L).on("drag", (function() {
                    const e = r.mouse(this)[1] - g,
                        t = b - Math.atan(e / m);
                    t > -.2 && t < .2 && (y = e, c = v + y, d = t, d >= 0 ? (c = y + S.filter(e => e.name === s.TopLeft)[0].y, u = S.filter(e => e.name === s.BottomRight)[0].y) : (c = S.filter(e => e.name === s.TopRight)[0].y, u = y + S.filter(e => e.name === s.BottomLeft)[0].y));
                    w()
                })).on("end", k)), r.select("#rotateRight").call(r.drag().on("start", L).on("drag", (function() {
                    const e = r.mouse(this)[1] - g,
                        t = b + Math.atan(e / m);
                    t > -.2 && t < .2 && (y = e, d = t, d >= 0 ? (u = y + S.filter(e => e.name === s.BottomRight)[0].y, c = S.filter(e => e.name === s.TopLeft)[0].y) : (c = y + S.filter(e => e.name === s.TopRight)[0].y, u = S.filter(e => e.name === s.BottomLeft)[0].y));
                    w()
                })).on("end", k))
            }

            function L() {
                const e = r.event.sourceEvent.target.id;
                g = r.mouse(this)[1], p = u, f = c, v = "rotateRight" === e ? u : c, b = d
            }

            function k() {
                void 0 === y && (y = 0);
                const r = {
                    action: "resizeRotate",
                    param: {
                        elementId: e.id,
                        ulx: a,
                        uly: c,
                        lrx: l,
                        lry: u,
                        rotate: 180 * d / Math.PI
                    }
                };
                t.edit(r, t.view.getCurrentPageURI()).then(async r => {
                    r && await t.updateForCurrentPage(), e = document.getElementById(e.id), a = void 0, c = void 0, l = void 0, u = void 0, y = void 0, _(), e.classList.contains("syl") ? i.selectBBox(e.querySelector(".sylTextRect-display"), n, this) : i.selectStaff(e, n)
                })
            }

            function C(e) {
                E = e;
                const t = S.find(t => t.name === s[e]);
                h = [t.x, t.y], f = c, p = u
            }

            function I() {
                const e = r.mouse(this);
                switch (s[E]) {
                    case s.TopLeft:
                        a = e[0], c = e[1];
                        break;
                    case s.Top:
                        c = e[1] - (l - a) * Math.tan(d) / 2;
                        break;
                    case s.TopRight:
                        l = e[0], c = e[1] - (l - a) * Math.tan(d);
                        break;
                    case s.Right:
                        l = e[0], u = p + (e[0] - h[0]) * Math.tan(d);
                        break;
                    case s.BottomRight:
                        l = e[0], u = e[1];
                        break;
                    case s.Bottom:
                        u = e[1] + (l - a) * Math.tan(d) / 2;
                        break;
                    case s.BottomLeft:
                        a = e[0], u = e[1] + (l - a) * Math.tan(d);
                        break;
                    case s.Left:
                        a = e[0], c = f + (e[0] - h[0]) * Math.tan(d);
                        break;
                    default:
                        console.error("Something that wasn't a side of the rectangle was dragged. This shouldn't happen.")
                }
                w()
            }

            function A() {
                const s = {
                    action: "resize",
                    param: {
                        elementId: e.id,
                        ulx: a,
                        uly: c,
                        lrx: l,
                        lry: u
                    }
                };
                t.edit(s, t.view.getCurrentPageURI()).then(async s => {
                    if (s && await t.updateForCurrentPage(), e = document.getElementById(e.id), a = void 0, c = void 0, l = void 0, u = void 0, r.selectAll(".resizePoint").remove(), r.selectAll("#resizeRect").remove(), r.selectAll(".rotatePoint").remove(), _(), e.classList.contains("syl")) i.selectBBox(e.querySelector(".sylTextRect-display"), n, this);
                    else try {
                        document.getElementById("moreEdit").innerHTML = "", document.getElementById("moreEdit").classList.add("is-invisible")
                    } catch (e) {}
                })
            }
        }()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(3);
    t.default = class {
        constructor(e, t) {
            this.firstClick = !0, this.insertDisabled = function() {
                this.type = "", this.removeInsertClickHandlers(), document.body.removeEventListener("keydown", this.keydownListener), document.body.removeEventListener("keyup", this.resetInsertHandler), document.body.removeEventListener("click", this.clickawayHandler);
                const e = document.querySelector(".insertel.is-active");
                null !== e && e.classList.remove("is-active"), this.firstClick = !0;
                try {
                    document.getElementById("returnToEditMode").remove()
                } catch (e) {}
                const t = document.getElementById("editMenu"),
                    n = document.getElementById("insertMenu");
                t.style.backgroundColor = "#ffc7c7", t.style.fontWeight = "bold", n.style.backgroundColor = "whitesmoke", n.style.fontWeight = ""
            }.bind(this), this.clickawayHandler = function(e) {
                const t = e.target;
                null === t.closest(".active-page") && null === t.closest("#insert_controls") && null === t.closest("#svg_group") && (this.insertDisabled(), document.body.removeEventListener("keydown", this.staffHandler), document.body.removeEventListener("keydown", this.handler))
            }.bind(this), this.resetInsertHandler = function(e) {
                "Shift" === e.key && document.querySelector(this.selector).addEventListener("click", "staff" === this.type ? this.staffHandler : this.handler)
            }.bind(this), this.keydownListener = function(e) {
                "Escape" === e.key ? (this.insertDisabled(), document.body.removeEventListener("keydown", this.staffHandler), document.body.removeEventListener("keydown", this.handler)) : "Shift" === e.key && this.removeInsertClickHandlers()
            }.bind(this), this.handler = function(e) {
                e.stopPropagation();
                const t = document.getElementsByClassName("active-page")[0].getElementsByClassName("definition-scale")[0],
                    n = t.createSVGPoint();
                n.x = e.clientX, n.y = e.clientY;
                const i = t.getElementsByClassName("system")[0].getScreenCTM(),
                    r = n.matrixTransform(i.inverse()),
                    s = {
                        action: "insert",
                        param: {
                            elementType: this.type,
                            staffId: "auto",
                            ulx: r.x,
                            uly: r.y
                        }
                    };
                null !== this.attributes && (s.param.attributes = this.attributes, "F" === this.attributes.shape && (s.param.ulx -= 50)), this.neonView.edit(s, this.neonView.view.getCurrentPageURI()).then(() => this.neonView.updateForCurrentPage()).then(() => {
                    document.querySelector(this.selector).addEventListener("click", this.handler)
                })
            }.bind(this), this.staffHandler = function(e) {
                const t = document.getElementsByClassName("active-page")[0].getElementsByClassName("definition-scale")[0],
                    n = t.createSVGPoint();
                n.x = e.clientX, n.y = e.clientY;
                const r = t.getElementsByClassName("system")[0].getScreenCTM(),
                    s = n.matrixTransform(r.inverse());
                if (this.firstClick) this.coord = s, i.select(t).append("circle").attr("cx", s.x).attr("cy", s.y).attr("r", 10).attr("id", "staff-circle").attr("fill", "green"), this.firstClick = !1;
                else {
                    let e, t;
                    s.x < this.coord.x || s.y < this.coord.y ? (e = s, t = this.coord) : (e = this.coord, t = s), document.getElementById("staff-circle").remove();
                    const n = {
                        action: "insert",
                        param: {
                            elementType: "staff",
                            staffId: "auto",
                            ulx: e.x,
                            uly: e.y,
                            lrx: t.x,
                            lry: t.y
                        }
                    };
                    this.neonView.edit(n, this.neonView.view.getCurrentPageURI()).then(() => {
                        this.neonView.updateForCurrentPage(), this.firstClick = !0
                    })
                }
            }.bind(this), this.removeInsertClickHandlers = function() {
                try {
                    document.querySelector(this.selector).removeEventListener("click", this.staffHandler), document.querySelector(this.selector).removeEventListener("click", this.handler)
                } catch (e) {}
            }.bind(this), this.neonView = e, this.selector = t
        }
        insertActive(e) {
            const t = this.isInsertMode();
            switch (e) {
                case "punctum":
                    this.type = "nc", this.attributes = null;
                    break;
                case "diamond":
                    this.type = "nc", this.attributes = {
                        tilt: "se"
                    };
                    break;
                case "virga":
                    this.type = "nc", this.attributes = {
                        tilt: "s"
                    };
                    break;
                case "liquescentA":
                    this.type = "nc", this.attributes = {
                        curve: "a"
                    };
                    break;
                case "liquescentC":
                    this.type = "nc", this.attributes = {
                        curve: "c"
                    };
                    break;
                case "virgaReversed":
                    this.type = "nc", this.attributes = {
                        tilt: "n"
                    };
                    break;
                case "pes":
                case "clivis":
                case "scandicus":
                case "climacus":
                case "torculus":
                case "porrectus":
                case "pressus":
                    const t = this.neonView.info.getContourByValue(e.charAt(0).toUpperCase() + e.slice(1));
                    this.type = "grouping", this.attributes = {
                        contour: t
                    };
                    break;
                case "cClef":
                case "fClef":
                    this.type = "clef", this.attributes = {
                        shape: e.charAt(0).toUpperCase()
                    };
                    break;
                case "custos":
                    this.type = "custos", this.attributes = null;
                    break;
                case "staff":
                    this.type = "staff", this.attributes = null;
                    break;
                case "flat":
                    this.type = "accid", this.attributes = {
                        accid: "f"
                    };
                    break;
                case "natural":
                    this.type = "accid", this.attributes = {
                        accid: "n"
                    };
                    break;
                default:
                    return this.type = "", this.attributes = null, void console.error("Invalid button for insertion: " + e + ".")
            }
            this.removeInsertClickHandlers();
            try {
                "staff" === this.type ? document.querySelector(this.selector).addEventListener("click", this.staffHandler) : document.querySelector(this.selector).addEventListener("click", this.handler)
            } catch (e) {}
            if (document.body.addEventListener("keydown", this.keydownListener), document.body.addEventListener("keyup", this.resetInsertHandler), document.body.addEventListener("click", this.clickawayHandler), !t) {
                const e = document.createElement("button");
                e.id = "returnToEditMode", e.classList.add("button"), e.innerHTML = "Return to Edit Mode", document.getElementById("redo").parentNode.appendChild(e), e.addEventListener("click", this.insertDisabled)
            }
            const n = document.getElementById("editMenu");
            n.style.backgroundColor = "whitesmoke", n.style.fontWeight = "";
            const i = document.getElementById("insertMenu");
            i.style.backgroundColor = "#ffc7c7", i.style.fontWeight = "bold"
        }
        isInsertMode() {
            return "" !== this.type
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
        r = new Uint8Array(16);

    function s() {
        if (!i) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(r)
    }
    for (var o = [], a = 0; a < 256; ++a) o.push((a + 256).toString(16).substr(1));
    var c = function(e, t) {
        var n = t || 0,
            i = o;
        return (i[e[n + 0]] + i[e[n + 1]] + i[e[n + 2]] + i[e[n + 3]] + "-" + i[e[n + 4]] + i[e[n + 5]] + "-" + i[e[n + 6]] + i[e[n + 7]] + "-" + i[e[n + 8]] + i[e[n + 9]] + "-" + i[e[n + 10]] + i[e[n + 11]] + i[e[n + 12]] + i[e[n + 13]] + i[e[n + 14]] + i[e[n + 15]]).toLowerCase()
    };
    t.a = function(e, t, n) {
        "string" == typeof e && (t = "binary" === e ? new Uint8Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
            for (var r = n || 0, o = 0; o < 16; ++o) t[r + o] = i[o];
            return t
        }
        return c(i)
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(21),
        r = n.n(i),
        s = n(23),
        o = n.n(s),
        a = n(24),
        c = n.n(a),
        l = n(25),
        u = n.n(l),
        d = n(26),
        h = n.n(d),
        f = n(27),
        p = n.n(f),
        g = n(28),
        v = n.n(g),
        m = n(29),
        y = n.n(m),
        b = n(30),
        w = n.n(b),
        _ = n(20);
    let E = L("manifest"),
        S = "manifests/" + E + ".jsonld",
        x = L("storage");
    if (E) window.fetch(S).then(e => {
        if (e.ok) return e.text();
        throw new Error(e.statusText)
    }).then(async e => {
        let t;
        try {
            t = JSON.parse(e)
        } catch (t) {
            return console.error(t), void console.debug(e)
        }
        let n = {
            manifest: t,
            Display: o.a,
            Info: v.a,
            TextView: y.a,
            TextEdit: w.a
        };
        (await new Promise((e, n) => {
            window.fetch(t.image).then(t => {
                e(t.headers.get("Content-Type"))
            }).catch(e => {
                n(e)
            })
        })).match(/image\/*/) ? (n.View = u.a, n.NeumeEdit = p.a) : (n.View = c.a, n.NeumeEdit = h.a), new r.a(n).start()
    });
    else {
        new _.default("Neon-User-Storage").getAttachment(x, "manifest").then(e => new window.Response(e).json()).then(async e => {
            console.log(e);
            let t = {
                manifest: e,
                Display: o.a,
                Info: v.a,
                TextView: y.a,
                TextEdit: w.a
            };
            (await new Promise((t, n) => {
                window.fetch(e.image).then(e => {
                    t(e.headers.get("Content-Type"))
                }).catch(e => {
                    n(e)
                })
            })).match(/image\/*/) ? (t.View = u.a, t.NeumeEdit = p.a) : (t.View = c.a, t.NeumeEdit = h.a), new r.a(t).start()
        })
    }

    function L(e) {
        let t = null,
            n = [];
        return window.location.search.substr(1).split("&").forEach(i => {
            n = i.split("="), n[0] === e && (t = decodeURIComponent(n[1]))
        }), t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = n(31),
        r = n(43),
        s = n(44),
        o = n(15),
        a = n(20);
    t.default = class {
        constructor(e) {
            this.verovioWrapper = new s.default, r.init(), this.undoStacks = new Map, this.redoStacks = new Map, this.neonCache = new Map, this.parser = new DOMParser, this.db = new a.default("Neon"), this.blankPages = [], this.manifest = e, this.annotations = e.mei_annotations, this.lastPageLoaded = ""
        }
        getAnnotations() {
            return this.annotations
        }
        async initDb(e = !1) {
            return await new Promise((t, n) => {
                this.db.get(this.manifest["@id"]).catch(e => {
                    if ("not_found" === e.name) {
                        const e = {
                            _id: this.manifest["@id"],
                            timestamp: this.manifest.timestamp,
                            image: this.manifest.image,
                            title: this.manifest.title,
                            annotations: []
                        };
                        return this.annotations.forEach(t => {
                            e.annotations.push(t.id)
                        }), e
                    }
                    return console.error(e), n(e)
                }).then(async i => {
                    const r = /(.+[-+\u2212]\d\d)(\d\d)$/;
                    if (new Date(i.timestamp).getTime() > (r.test(this.manifest.timestamp) ? new Date(this.manifest.timestamp.replace(r, "$1:$2")).getTime() : new Date(this.manifest.timestamp).getTime()) && !e) {
                        this.annotations = [];
                        const e = i.annotations.map(e => new Promise(t => {
                            this.db.get(e).then(e => {
                                this.annotations.push({
                                    id: e._id,
                                    type: "Annotation",
                                    body: e.body,
                                    target: e.target
                                }), t()
                            }).catch(e => {
                                console.error(e), t()
                            })
                        }));
                        return await Promise.all(e), t(!1)
                    }
                    for (const e of this.annotations) await this.db.get(e.id).catch(t => "not_found" === t.name ? {
                        _id: e.id
                    } : (console.error(t), n(t))).then(t => (t.body = e.body, t.target = e.target, this.db.put(t))).catch(e => {
                        n(e), console.error(e)
                    });
                    return this.db.put(i)
                }).then(() => t(!0)).catch(e => {
                    n(e), console.error(e)
                })
            })
        }
        loadPage(e) {
            return new Promise((t, n) => {
                if (this.lastPageLoaded === e && this.neonCache.has(e)) t(this.neonCache.get(e));
                else if (this.neonCache.has(e)) this.loadData(e, this.neonCache.get(e).mei).then(() => {
                    t(this.neonCache.get(e))
                });
                else if (this.blankPages.includes(e)) {
                    r.blankPage();
                    const t = new Error("No MEI file for page " + e);
                    t.name = "missing_mei", n(t)
                } else {
                    const s = this.annotations.find(t => t.target === e);
                    s ? window.fetch(s.body).then(e => {
                        if (e.ok) return e.text();
                        throw new Error(e.statusText)
                    }).then(n => {
                        n.match(/<sb .+>/) && (n = i.convertSbToStaff(n)), this.loadData(e, n).then(() => {
                            t(this.neonCache.get(e))
                        })
                    }).catch(e => {
                        n(e)
                    }) : (r.blankPage(), this.blankPages.push(e))
                }
            })
        }
        loadData(e, t, n = !1) {
            return r.sendForValidation(t), this.lastPageLoaded = e, new Promise(i => {
                const r = {
                    id: o.uuidv4(),
                    action: "renderData",
                    mei: t
                };
                this.verovioWrapper.addEventListener("message", function s(o) {
                    if (o.data.id === r.id) {
                        const r = this.parser.parseFromString(o.data.svg, "image/svg+xml").documentElement;
                        this.neonCache.set(e, {
                            svg: r,
                            mei: t,
                            dirty: n
                        }), o.target.removeEventListener("message", s), i()
                    }
                }.bind(this)), this.verovioWrapper.postMessage(r)
            })
        }
        getSVG(e) {
            return new Promise((t, n) => {
                this.loadPage(e).then(e => {
                    t(e.svg)
                }).catch(e => {
                    n(e)
                })
            })
        }
        getMEI(e) {
            return new Promise((t, n) => {
                this.loadPage(e).then(e => {
                    t(e.mei)
                }).catch(e => {
                    n(e)
                })
            })
        }
        getElementAttr(e, t) {
            return new Promise(n => {
                this.loadPage(t).then(() => {
                    const t = {
                        id: o.uuidv4(),
                        action: "getElementAttr",
                        elementId: e
                    };
                    this.verovioWrapper.addEventListener("message", (function e(i) {
                        i.data.id === t.id && (i.target.removeEventListener("message", e), n(i.data.attributes))
                    })), this.verovioWrapper.postMessage(t)
                })
            })
        }
        edit(e, t) {
            let n;
            return n = this.lastPageLoaded === t ? Promise.resolve(this.neonCache.get(t)) : this.loadPage(t), new Promise(i => {
                n.then(n => {
                    const r = n.mei,
                        s = {
                            id: o.uuidv4(),
                            action: "edit",
                            editorAction: e
                        };
                    this.verovioWrapper.addEventListener("message", function e(n) {
                        n.data.id === s.id && (n.data.result && (this.undoStacks.has(t) || this.undoStacks.set(t, []), this.undoStacks.get(t).push(r), this.redoStacks.set(t, [])), n.target.removeEventListener("message", e), this.updateCache(t, !0).then(() => {
                            i(n.data.result)
                        }))
                    }.bind(this)), this.verovioWrapper.postMessage(s)
                })
            })
        }
        updateCache(e, t) {
            return new Promise(n => {
                let i, s;
                const a = new Promise(e => {
                        const t = {
                            id: o.uuidv4(),
                            action: "getMEI"
                        };
                        this.verovioWrapper.addEventListener("message", (function n(s) {
                            s.data.id === t.id && (i = s.data.mei, s.target.removeEventListener("message", n), r.sendForValidation(i), e())
                        })), this.verovioWrapper.postMessage(t)
                    }),
                    c = new Promise(e => {
                        const t = {
                            id: o.uuidv4(),
                            action: "renderToSVG"
                        };
                        this.verovioWrapper.addEventListener("message", (function n(i) {
                            i.data.id === t.id && (s = i.data.svg, i.target.removeEventListener("message", n), e())
                        })), this.verovioWrapper.postMessage(t)
                    });
                a.then(() => c).then(() => {
                    const r = this.parser.parseFromString(s, "image/svg+xml").documentElement;
                    this.neonCache.set(e, {
                        mei: i,
                        svg: r,
                        dirty: t
                    }), n()
                })
            })
        }
        info(e) {
            let t;
            return t = this.lastPageLoaded === e ? Promise.resolve() : this.loadPage(e), new Promise(e => {
                t.then(() => {
                    const t = {
                        id: o.uuidv4(),
                        action: "editInfo"
                    };
                    this.verovioWrapper.addEventListener("message", (function n(i) {
                        i.data.id === t.id && (i.target.removeEventListener("message", n), e(i.data.info))
                    })), this.verovioWrapper.postMessage(t)
                })
            })
        }
        undo(e) {
            return new Promise(t => {
                if (this.undoStacks.has(e)) {
                    const n = this.undoStacks.get(e).pop();
                    if (void 0 !== n) return void this.getMEI(e).then(t => (this.redoStacks.get(e).push(t), this.loadData(e, n, !0))).then(() => {
                        t(!0)
                    })
                }
                t(!1)
            })
        }
        redo(e) {
            return new Promise(t => {
                if (this.redoStacks.has(e)) {
                    const n = this.redoStacks.get(e).pop();
                    if (void 0 !== n) return void this.getMEI(e).then(t => (this.undoStacks.get(e).push(t), this.loadData(e, n, !0))).then(() => {
                        t(!0)
                    })
                }
                t(!1)
            })
        }
        async updateDatabase() {
            let e = !1;
            for (const t of this.neonCache) {
                const n = t[0],
                    i = t[1];
                if (i.dirty) {
                    e = !0;
                    const t = this.annotations.findIndex(e => e.target === n);
                    let r;
                    this.annotations[t].body.match(/^data:/) ? r = "data:application/mei+xml;base64," + window.btoa(i.mei) : await window.fetch(this.annotations[t].body, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/mei+xml"
                        },
                        body: i.mei
                    }).then(e => {
                        r = e.ok ? this.annotations[t].body : "data:application/mei+xml;base64," + window.btoa(i.mei)
                    }).catch(e => {
                        console.error(e), console.warn("Falling back to data URI"), r = "data:application/mei+xml;base64," + window.btoa(i.mei)
                    }), this.annotations[t].body = r, await this.db.get(this.annotations[t].id).then(e => (e.body = r, this.db.put(e))).then(() => {
                        i.dirty = !1
                    }).catch(e => {
                        console.error(e)
                    })
                }
            }
            e && await this.db.get(this.manifest["@id"]).then(e => (e.timestamp = (new Date).toISOString(), this.db.put(e))).catch(e => {
                console.error(e)
            })
        }
        async deleteDb() {
            const e = await this.db.get(this.manifest["@id"]).then(e => e.annotations);
            e.push(this.manifest["@id"]);
            const t = e.map(e => new Promise(t => {
                this.db.get(e).then(e => this.db.remove(e)).then(() => t())
            }));
            return Promise.all(t)
        }
    }
}, function(e, t) {
    /**
     * vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
     *
     * Copyright (c) 2012 Vadim Kiryukhin
     * vkiryukhin @ gmail.com
     * http://www.eslinstructor.net/vkbeautify/
     *
     * Dual licensed under the MIT and GPL licenses:
     *   http://www.opensource.org/licenses/mit-license.php
     *   http://www.gnu.org/licenses/gpl.html
     *
     *   Pretty print
     *
     *        vkbeautify.xml(text [,indent_pattern]);
     *        vkbeautify.json(text [,indent_pattern]);
     *        vkbeautify.css(text [,indent_pattern]);
     *        vkbeautify.sql(text [,indent_pattern]);
     *
     *        @text - String; text to beatufy;
     *        @indent_pattern - Integer | String;
     *                Integer:  number of white spaces;
     *                String:   character string to visualize indentation ( can also be a set of white spaces )
     *   Minify
     *
     *        vkbeautify.xmlmin(text [,preserve_comments]);
     *        vkbeautify.jsonmin(text);
     *        vkbeautify.cssmin(text [,preserve_comments]);
     *        vkbeautify.sqlmin(text);
     *
     *        @text - String; text to minify;
     *        @preserve_comments - Bool; [optional];
     *                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
     *
     *   Examples:
     *        vkbeautify.xml(text); // pretty print XML
     *        vkbeautify.json(text, 4 ); // pretty print JSON
     *        vkbeautify.css(text, '. . . .'); // pretty print CSS
     *        vkbeautify.sql(text, '----'); // pretty print SQL
     *
     *        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
     *        vkbeautify.jsonmin(text);// minify JSON
     *        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
     *        vkbeautify.sqlmin(text);// minify SQL
     *
     */
    function n(e) {
        var t = "    ";
        if (isNaN(parseInt(e))) t = e;
        else switch (e) {
            case 1:
                t = " ";
                break;
            case 2:
                t = "  ";
                break;
            case 3:
                t = "   ";
                break;
            case 4:
                t = "    ";
                break;
            case 5:
                t = "     ";
                break;
            case 6:
                t = "      ";
                break;
            case 7:
                t = "       ";
                break;
            case 8:
                t = "        ";
                break;
            case 9:
                t = "         ";
                break;
            case 10:
                t = "          ";
                break;
            case 11:
                t = "           ";
                break;
            case 12:
                t = "            "
        }
        for (var n = ["\n"], i = 0; i < 100; i++) n.push(n[i] + t);
        return n
    }

    function i() {
        this.step = "    ", this.shift = n(this.step)
    }

    function r(e, t) {
        return t - (e.replace(/\(/g, "").length - e.replace(/\)/g, "").length)
    }

    function s(e, t) {
        return e.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + t + t + "AND ").replace(/ BETWEEN /gi, "~::~" + t + "BETWEEN ").replace(/ CASE /gi, "~::~" + t + "CASE ").replace(/ ELSE /gi, "~::~" + t + "ELSE ").replace(/ END /gi, "~::~" + t + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + t + "ON ").replace(/ OR /gi, "~::~" + t + t + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + t + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + t).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + t + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/\s{0,}UPDATE /gi, "UPDATE ").replace(/ SET /gi, " SET ").replace(/~::~{1,}/g, "~::~").split("~::~")
    }
    i.prototype.xml = function(e, t) {
        var i = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns\:/g, "~::~xmlns:").replace(/\s*xmlns\=/g, "~::~xmlns=").split("~::~"),
            r = i.length,
            s = !1,
            o = 0,
            a = "",
            c = 0,
            l = t ? n(t) : this.shift;
        for (c = 0; c < r; c++) i[c].search(/<!/) > -1 ? (a += l[o] + i[c], s = !0, (i[c].search(/-->/) > -1 || i[c].search(/\]>/) > -1 || i[c].search(/!DOCTYPE/) > -1) && (s = !1)) : i[c].search(/-->/) > -1 || i[c].search(/\]>/) > -1 ? (a += i[c], s = !1) : /^<\w/.exec(i[c - 1]) && /^<\/\w/.exec(i[c]) && /^<[\w:\-\.\,]+/.exec(i[c - 1]) == /^<\/[\w:\-\.\,]+/.exec(i[c])[0].replace("/", "") ? (a += i[c], s || o--) : i[c].search(/<\w/) > -1 && -1 == i[c].search(/<\//) && -1 == i[c].search(/\/>/) ? a = a += s ? i[c] : l[o++] + i[c] : i[c].search(/<\w/) > -1 && i[c].search(/<\//) > -1 ? a = a += s ? i[c] : l[o] + i[c] : i[c].search(/<\//) > -1 ? a = a += s ? i[c] : l[--o] + i[c] : i[c].search(/\/>/) > -1 ? a = a += s ? i[c] : l[o] + i[c] : i[c].search(/<\?/) > -1 || i[c].search(/xmlns\:/) > -1 || i[c].search(/xmlns\=/) > -1 ? a += l[o] + i[c] : a += i[c];
        return "\n" == a[0] ? a.slice(1) : a
    }, i.prototype.json = function(e, t) {
        t = t || this.step;
        return "undefined" == typeof JSON ? e : "string" == typeof e ? JSON.stringify(JSON.parse(e), null, t) : "object" == typeof e ? JSON.stringify(e, null, t) : e
    }, i.prototype.css = function(e, t) {
        var i = e.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"),
            r = i.length,
            s = 0,
            o = "",
            a = 0,
            c = t ? n(t) : this.shift;
        for (a = 0; a < r; a++) /\{/.exec(i[a]) ? o += c[s++] + i[a] : /\}/.exec(i[a]) ? o += c[--s] + i[a] : (/\*\\/.exec(i[a]), o += c[s] + i[a]);
        return o.replace(/^\n{1,}/, "")
    }, i.prototype.sql = function(e, t) {
        var i = e.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"),
            o = i.length,
            a = [],
            c = 0,
            l = this.step,
            u = 0,
            d = "",
            h = 0,
            f = t ? n(t) : this.shift;
        for (h = 0; h < o; h++) a = h % 2 ? a.concat(i[h]) : a.concat(s(i[h], l));
        for (o = a.length, h = 0; h < o; h++) {
            u = r(a[h], u), /\s{0,}\s{0,}SELECT\s{0,}/.exec(a[h]) && (a[h] = a[h].replace(/\,/g, ",\n" + l + l)), /\s{0,}\s{0,}SET\s{0,}/.exec(a[h]) && (a[h] = a[h].replace(/\,/g, ",\n" + l + l)), /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(a[h]) ? d += f[++c] + a[h] : /\'/.exec(a[h]) ? (u < 1 && c && c--, d += a[h]) : (d += f[c] + a[h], u < 1 && c && c--)
        }
        return d = d.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n")
    }, i.prototype.xmlmin = function(e, t) {
        return (t ? e : e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "").replace(/[ \r\n\t]{1,}xmlns/g, " xmlns")).replace(/>\s{0,}</g, "><")
    }, i.prototype.jsonmin = function(e) {
        return "undefined" == typeof JSON ? e : JSON.stringify(JSON.parse(e), null, 0)
    }, i.prototype.cssmin = function(e, t) {
        return (t ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "")).replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/")
    }, i.prototype.sqlmin = function(e) {
        return e.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")")
    }, e.exports = new i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blankPage = t.sendForValidation = t.init = void 0;
    const i = fetch("/Neon/Neon-gh/assets/mei-all.rng");
    let r, s, o;

    function a(e) {
        const t = e.data;
        if (null === t) {
            o.textContent = "VALID", o.style.color = "green";
            for (const e of o.children) e.remove()
        } else {
            let e = "";
            t.forEach(t => {
                e += t + "\n"
            }), o.textContent = "", o.style.color = "red";
            const n = document.createElement("a");
            n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(e)), n.setAttribute("download", "validation.log"), n.textContent = "INVALID", o.appendChild(n)
        }
    }
    t.init = async function() {
        const e = document.getElementById("displayContents");
        if (null !== e) {
            const t = document.createElement("div");
            t.classList.add("panel-block");
            const n = document.createElement("p");
            n.textContent = "MEI Status: ";
            const i = document.createElement("span");
            i.id = "validation_status", i.textContent = "unknown", n.appendChild(i), t.appendChild(n), e.appendChild(t), o = document.getElementById("validation_status"), r = new Worker("/Neon/Neon-gh/workers/Worker.js"), r.onmessage = a
        }
    }, t.sendForValidation = async function(e) {
        if (void 0 !== o) {
            if (void 0 === s) {
                const e = await i;
                s = await e.text()
            }
            o.textContent = "checking...", o.style.color = "gray", r.postMessage({
                mei: e,
                schema: s
            })
        }
    }, t.blankPage = function() {
        for (const e of o.children) e.remove();
        o.textContent = "No MEI", o.style.color = "color:gray"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = class {
        constructor() {
            this.verovioWorker = new Worker("/Neon/Neon-gh/workers/VerovioWorker.js")
        }
        addEventListener(e, t) {
            return this.verovioWorker.addEventListener(e, t)
        }
        postMessage(e) {
            return this.verovioWorker.postMessage(e)
        }
    }
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.test = function() {
            return "function" == typeof e.queueMicrotask
        }, t.install = function(t) {
            return function() {
                e.queueMicrotask(t)
            }
        }
    }).call(this, n(6))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = e.MutationObserver || e.WebKitMutationObserver;
        t.test = function() {
            return n
        }, t.install = function(t) {
            var i = 0,
                r = new n(t),
                s = e.document.createTextNode("");
            return r.observe(s, {
                    characterData: !0
                }),
                function() {
                    s.data = i = ++i % 2
                }
        }
    }).call(this, n(6))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.test = function() {
            return !e.setImmediate && void 0 !== e.MessageChannel
        }, t.install = function(t) {
            var n = new e.MessageChannel;
            return n.port1.onmessage = t,
                function() {
                    n.port2.postMessage(0)
                }
        }
    }).call(this, n(6))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.test = function() {
            return "document" in e && "onreadystatechange" in e.document.createElement("script")
        }, t.install = function(t) {
            return function() {
                var n = e.document.createElement("script");
                return n.onreadystatechange = function() {
                    t(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null
                }, e.document.documentElement.appendChild(n), t
            }
        }
    }).call(this, n(6))
}, function(e, t, n) {
    "use strict";
    t.test = function() {
        return !0
    }, t.install = function(e) {
        return function() {
            setTimeout(e, 0)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parseManifest = void 0;
    const i = n(52),
        r = n(53),
        s = n(54);
    t.parseManifest = function(e) {
        const t = s.validate(e, i),
            n = t.instance;
        if (t.errors.length > 0) return console.error(t.errors), !1;
        const o = n["@context"];
        return "https://ddmal.music.mcgill.ca/Neon/contexts/1/manifest.jsonld" === o || (o[0] === r[0] && o[1].schema === r[1].schema && o[1].title === r[1].title && o[1].timestamp === r[1].timestamp && o[1].image["@id"] === r[1].image["@id"] && o[1].image["@type"] === r[1].image["@type"] && o[1].mei_annotations["@id"] === r[1].mei_annotations["@id"] && o[1].mei_annotations["@type"] === r[1].mei_annotations["@type"] && o[1].mei_annotations["@container"] === r[1].mei_annotations["@container"] || (console.error("Context mismatch"), console.error(o), console.error(r), !1))
    }
}, function(e) {
    e.exports = JSON.parse('{"type":"object","required":["@context","title","timestamp","image","mei_annotations"],"properties":{"@context":{"type":["array","string"]},"title":{"type":"string"},"timestamp":{"type":"string"},"image":{"type":"string"},"mei_annotations":{"type":"array","items":{"type":"object","required":["id","type","body","target"],"properties":{"id":{"type":"string"},"type":{"type":"string"},"body":{"type":"string"},"target":{"type":"string"}}}}}}')
}, function(e) {
    e.exports = JSON.parse('["http://www.w3.org/ns/anno.jsonld",{"schema":"http://schema.org/","title":"schema:name","timestamp":"schema:dateModified","image":{"@id":"schema:image","@type":"@id"},"mei_annotations":{"@id":"Annotation","@type":"@id","@container":"@list"}}]')
}, function(e, t, n) {
    "use strict";
    var i = e.exports.Validator = n(55);
    e.exports.ValidatorResult = n(7).ValidatorResult, e.exports.ValidationError = n(7).ValidationError, e.exports.SchemaError = n(7).SchemaError, e.exports.SchemaScanResult = n(17).SchemaScanResult, e.exports.scan = n(17).scan, e.exports.validate = function(e, t, n) {
        return (new i).validate(e, t, n)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(16),
        r = n(61),
        s = n(7),
        o = n(17).scan,
        a = s.ValidatorResult,
        c = s.SchemaError,
        l = s.SchemaContext,
        u = function e() {
            this.customFormats = Object.create(e.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(h), this.attributes = Object.create(r.validators)
        };

    function d(e) {
        var t = "string" == typeof e ? e : e.$ref;
        return "string" == typeof t && t
    }
    u.prototype.customFormats = {}, u.prototype.schemas = null, u.prototype.types = null, u.prototype.attributes = null, u.prototype.unresolvedRefs = null, u.prototype.addSchema = function(e, t) {
        var n = this;
        if (!e) return null;
        var i = o(t || "/", e),
            r = t || e.id;
        for (var s in i.id) this.schemas[s] = i.id[s];
        for (var s in i.ref) this.unresolvedRefs.push(s);
        return this.unresolvedRefs = this.unresolvedRefs.filter((function(e) {
            return void 0 === n.schemas[e]
        })), this.schemas[r]
    }, u.prototype.addSubSchemaArray = function(e, t) {
        if (Array.isArray(t))
            for (var n = 0; n < t.length; n++) this.addSubSchema(e, t[n])
    }, u.prototype.addSubSchemaObject = function(e, t) {
        if (t && "object" == typeof t)
            for (var n in t) this.addSubSchema(e, t[n])
    }, u.prototype.setSchemas = function(e) {
        this.schemas = e
    }, u.prototype.getSchema = function(e) {
        return this.schemas[e]
    }, u.prototype.validate = function(e, t, n, r) {
        n || (n = {});
        var s = n.propertyName || "instance",
            a = i.resolve(n.base || "/", t.id || "");
        if (!r) {
            (r = new l(t, n, s, a, Object.create(this.schemas))).schemas[a] || (r.schemas[a] = t);
            var u = o(a, t);
            for (var d in u.id) {
                var h = u.id[d];
                r.schemas[d] = h
            }
        }
        if (t) {
            var f = this.validateSchema(e, t, n, r);
            if (!f) throw new Error("Result undefined");
            return f
        }
        throw new c("no schema specified", t)
    }, u.prototype.validateSchema = function(e, t, n, i) {
        var o, u = new a(e, t, n, i);
        if ("boolean" == typeof t) !0 === t ? t = {} : !1 === t && (t = {
            type: []
        });
        else if (!t) throw new Error("schema is undefined");
        if (t.extends)
            if (Array.isArray(t.extends)) {
                var h = {
                    schema: t,
                    ctx: i
                };
                t.extends.forEach(this.schemaTraverser.bind(this, h)), t = h.schema, h.schema = null, h.ctx = null, h = null
            } else t = s.deepMerge(t, this.superResolve(t.extends, i));
        if (o = d(t)) {
            var f = this.resolve(t, o, i),
                p = new l(f.subschema, n, i.propertyPath, f.switchSchema, i.schemas);
            return this.validateSchema(e, f.subschema, n, p)
        }
        var g = n && n.skipAttributes || [];
        for (var v in t)
            if (!r.ignoreProperties[v] && g.indexOf(v) < 0) {
                var m = null,
                    y = this.attributes[v];
                if (y) m = y.call(this, e, t, n, i);
                else if (!1 === n.allowUnknownAttributes) throw new c("Unsupported attribute: " + v, t);
                m && u.importErrors(m)
            }
        if ("function" == typeof n.rewrite) {
            var b = n.rewrite.call(this, e, t, n, i);
            u.instance = b
        }
        return u
    }, u.prototype.schemaTraverser = function(e, t) {
        e.schema = s.deepMerge(e.schema, this.superResolve(t, e.ctx))
    }, u.prototype.superResolve = function(e, t) {
        var n;
        return (n = d(e)) ? this.resolve(e, n, t).subschema : e
    }, u.prototype.resolve = function(e, t, n) {
        if (t = n.resolve(t), n.schemas[t]) return {
            subschema: n.schemas[t],
            switchSchema: t
        };
        var r = i.parse(t),
            o = r && r.hash,
            a = o && o.length && t.substr(0, t.length - o.length);
        if (!a || !n.schemas[a]) throw new c("no such schema <" + t + ">", e);
        var l = s.objectGetPath(n.schemas[a], o.substr(1));
        if (void 0 === l) throw new c("no such schema " + o + " located in <" + a + ">", e);
        return {
            subschema: l,
            switchSchema: t
        }
    }, u.prototype.testType = function(e, t, n, i, r) {
        if ("function" == typeof this.types[r]) return this.types[r].call(this, e);
        if (r && "object" == typeof r) {
            var s = this.validateSchema(e, r, n, i);
            return void 0 === s || !(s && s.errors.length)
        }
        return !0
    };
    var h = u.prototype.types = {};
    h.string = function(e) {
        return "string" == typeof e
    }, h.number = function(e) {
        return "number" == typeof e && isFinite(e)
    }, h.integer = function(e) {
        return "number" == typeof e && e % 1 == 0
    }, h.boolean = function(e) {
        return "boolean" == typeof e
    }, h.array = function(e) {
        return Array.isArray(e)
    }, h.null = function(e) {
        return null === e
    }, h.date = function(e) {
        return e instanceof Date
    }, h.any = function(e) {
        return !0
    }, h.object = function(e) {
        return e && "object" == typeof e && !Array.isArray(e) && !(e instanceof Date)
    }, e.exports = u
}, function(e, t, n) {
    (function(e, i) {
        var r; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(s) {
            t && t.nodeType, e && e.nodeType;
            var o = "object" == typeof i && i;
            o.global !== o && o.window !== o && o.self;
            var a, c = 2147483647,
                l = /^xn--/,
                u = /[^\x20-\x7E]/,
                d = /[\x2E\u3002\uFF0E\uFF61]/g,
                h = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                f = Math.floor,
                p = String.fromCharCode;

            function g(e) {
                throw new RangeError(h[e])
            }

            function v(e, t) {
                for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
                return i
            }

            function m(e, t) {
                var n = e.split("@"),
                    i = "";
                return n.length > 1 && (i = n[0] + "@", e = n[1]), i + v((e = e.replace(d, ".")).split("."), t).join(".")
            }

            function y(e) {
                for (var t, n, i = [], r = 0, s = e.length; r < s;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < s ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--) : i.push(t);
                return i
            }

            function b(e) {
                return v(e, (function(e) {
                    var t = "";
                    return e > 65535 && (t += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += p(e)
                })).join("")
            }

            function w(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function _(e, t, n) {
                var i = 0;
                for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; i += 36) e = f(e / 35);
                return f(i + 36 * e / (e + 38))
            }

            function E(e) {
                var t, n, i, r, s, o, a, l, u, d, h, p = [],
                    v = e.length,
                    m = 0,
                    y = 128,
                    w = 72;
                for ((n = e.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && g("not-basic"), p.push(e.charCodeAt(i));
                for (r = n > 0 ? n + 1 : 0; r < v;) {
                    for (s = m, o = 1, a = 36; r >= v && g("invalid-input"), ((l = (h = e.charCodeAt(r++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : 36) >= 36 || l > f((c - m) / o)) && g("overflow"), m += l * o, !(l < (u = a <= w ? 1 : a >= w + 26 ? 26 : a - w)); a += 36) o > f(c / (d = 36 - u)) && g("overflow"), o *= d;
                    w = _(m - s, t = p.length + 1, 0 == s), f(m / t) > c - y && g("overflow"), y += f(m / t), m %= t, p.splice(m++, 0, y)
                }
                return b(p)
            }

            function S(e) {
                var t, n, i, r, s, o, a, l, u, d, h, v, m, b, E, S = [];
                for (v = (e = y(e)).length, t = 128, n = 0, s = 72, o = 0; o < v; ++o)(h = e[o]) < 128 && S.push(p(h));
                for (i = r = S.length, r && S.push("-"); i < v;) {
                    for (a = c, o = 0; o < v; ++o)(h = e[o]) >= t && h < a && (a = h);
                    for (a - t > f((c - n) / (m = i + 1)) && g("overflow"), n += (a - t) * m, t = a, o = 0; o < v; ++o)
                        if ((h = e[o]) < t && ++n > c && g("overflow"), h == t) {
                            for (l = n, u = 36; !(l < (d = u <= s ? 1 : u >= s + 26 ? 26 : u - s)); u += 36) E = l - d, b = 36 - d, S.push(p(w(d + E % b, 0))), l = f(E / b);
                            S.push(p(w(l, 0))), s = _(n, m, i == r), n = 0, ++i
                        }++n, ++t
                }
                return S.join("")
            }
            a = {
                version: "1.4.1",
                ucs2: {
                    decode: y,
                    encode: b
                },
                decode: E,
                encode: S,
                toASCII: function(e) {
                    return m(e, (function(e) {
                        return u.test(e) ? "xn--" + S(e) : e
                    }))
                },
                toUnicode: function(e) {
                    return m(e, (function(e) {
                        return l.test(e) ? E(e.slice(4).toLowerCase()) : e
                    }))
                }
            }, void 0 === (r = function() {
                return a
            }.call(t, n, t, e)) || (e.exports = r)
        }()
    }).call(this, n(33)(e), n(6))
}, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(59), t.encode = t.stringify = n(60)
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, s) {
        t = t || "&", n = n || "=";
        var o = {};
        if ("string" != typeof e || 0 === e.length) return o;
        var a = /\+/g;
        e = e.split(t);
        var c = 1e3;
        s && "number" == typeof s.maxKeys && (c = s.maxKeys);
        var l = e.length;
        c > 0 && l > c && (l = c);
        for (var u = 0; u < l; ++u) {
            var d, h, f, p, g = e[u].replace(a, "%20"),
                v = g.indexOf(n);
            v >= 0 ? (d = g.substr(0, v), h = g.substr(v + 1)) : (d = g, h = ""), f = decodeURIComponent(d), p = decodeURIComponent(h), i(o, f) ? r(o[f]) ? o[f].push(p) : o[f] = [o[f], p] : o[f] = p
        }
        return o
    };
    var r = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, a) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? s(o(e), (function(o) {
            var a = encodeURIComponent(i(o)) + n;
            return r(e[o]) ? s(e[o], (function(e) {
                return a + encodeURIComponent(i(e))
            })).join(t) : a + encodeURIComponent(i(e[o]))
        })).join(t) : a ? encodeURIComponent(i(a)) + n + encodeURIComponent(i(e)) : ""
    };
    var r = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function s(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
        return n
    }
    var o = Object.keys || function(e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}, function(e, t, n) {
    "use strict";
    var i = n(7),
        r = i.ValidatorResult,
        s = i.SchemaError,
        o = {
            ignoreProperties: {
                id: !0,
                default: !0,
                description: !0,
                title: !0,
                exclusiveMinimum: !0,
                exclusiveMaximum: !0,
                additionalItems: !0,
                $schema: !0,
                $ref: !0,
                extends: !0
            }
        },
        a = o.validators = {};

    function c(e, t, n, i, r) {
        var s = t.throwError;
        t.throwError = !1;
        var o = this.validateSchema(e, r, t, n);
        return t.throwError = s, !o.valid && i instanceof Function && i(o), o.valid
    }

    function l(e, t, n, i, r, s) {
        if (this.types.object(e) && (!t.properties || void 0 === t.properties[r]))
            if (!1 === t.additionalProperties) s.addError({
                name: "additionalProperties",
                argument: r,
                message: "additionalProperty " + JSON.stringify(r) + " exists in instance when not allowed"
            });
            else {
                var o = t.additionalProperties || {};
                "function" == typeof n.preValidateProperty && n.preValidateProperty(e, r, o, n, i);
                var a = this.validateSchema(e[r], o, n, i.makeChild(o, r));
                a.instance !== s.instance[r] && (s.instance[r] = a.instance), s.importErrors(a)
            }
    }
    a.type = function(e, t, n, i) {
        if (void 0 === e) return null;
        var s = new r(e, t, n, i),
            o = Array.isArray(t.type) ? t.type : [t.type];
        if (!o.some(this.testType.bind(this, e, t, n, i))) {
            var a = o.map((function(e) {
                return e.id && "<" + e.id + ">" || e + ""
            }));
            s.addError({
                name: "type",
                argument: a,
                message: "is not of a type(s) " + a
            })
        }
        return s
    }, a.anyOf = function(e, t, n, i) {
        if (void 0 === e) return null;
        var o = new r(e, t, n, i),
            a = new r(e, t, n, i);
        if (!Array.isArray(t.anyOf)) throw new s("anyOf must be an array");
        if (!t.anyOf.some(c.bind(this, e, n, i, (function(e) {
                a.importErrors(e)
            })))) {
            var l = t.anyOf.map((function(e, t) {
                return e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]"
            }));
            n.nestedErrors && o.importErrors(a), o.addError({
                name: "anyOf",
                argument: l,
                message: "is not any of " + l.join(",")
            })
        }
        return o
    }, a.allOf = function(e, t, n, i) {
        if (void 0 === e) return null;
        if (!Array.isArray(t.allOf)) throw new s("allOf must be an array");
        var o = new r(e, t, n, i),
            a = this;
        return t.allOf.forEach((function(t, r) {
            var s = a.validateSchema(e, t, n, i);
            if (!s.valid) {
                var c = t.id && "<" + t.id + ">" || t.title && JSON.stringify(t.title) || t.$ref && "<" + t.$ref + ">" || "[subschema " + r + "]";
                o.addError({
                    name: "allOf",
                    argument: {
                        id: c,
                        length: s.errors.length,
                        valid: s
                    },
                    message: "does not match allOf schema " + c + " with " + s.errors.length + " error[s]:"
                }), o.importErrors(s)
            }
        })), o
    }, a.oneOf = function(e, t, n, i) {
        if (void 0 === e) return null;
        if (!Array.isArray(t.oneOf)) throw new s("oneOf must be an array");
        var o = new r(e, t, n, i),
            a = new r(e, t, n, i),
            l = t.oneOf.filter(c.bind(this, e, n, i, (function(e) {
                a.importErrors(e)
            }))).length,
            u = t.oneOf.map((function(e, t) {
                return e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]"
            }));
        return 1 !== l && (n.nestedErrors && o.importErrors(a), o.addError({
            name: "oneOf",
            argument: u,
            message: "is not exactly one from " + u.join(",")
        })), o
    }, a.properties = function(e, t, n, i) {
        if (this.types.object(e)) {
            var s = new r(e, t, n, i),
                o = t.properties || {};
            for (var a in o) {
                "function" == typeof n.preValidateProperty && n.preValidateProperty(e, a, o[a], n, i);
                var c = Object.hasOwnProperty.call(e, a) ? e[a] : void 0,
                    l = this.validateSchema(c, o[a], n, i.makeChild(o[a], a));
                l.instance !== s.instance[a] && (s.instance[a] = l.instance), s.importErrors(l)
            }
            return s
        }
    }, a.patternProperties = function(e, t, n, i) {
        if (this.types.object(e)) {
            var s = new r(e, t, n, i),
                o = t.patternProperties || {};
            for (var a in e) {
                var c = !0;
                for (var u in o) {
                    if (new RegExp(u).test(a)) {
                        c = !1, "function" == typeof n.preValidateProperty && n.preValidateProperty(e, a, o[u], n, i);
                        var d = this.validateSchema(e[a], o[u], n, i.makeChild(o[u], a));
                        d.instance !== s.instance[a] && (s.instance[a] = d.instance), s.importErrors(d)
                    }
                }
                c && l.call(this, e, t, n, i, a, s)
            }
            return s
        }
    }, a.additionalProperties = function(e, t, n, i) {
        if (this.types.object(e)) {
            if (t.patternProperties) return null;
            var s = new r(e, t, n, i);
            for (var o in e) l.call(this, e, t, n, i, o, s);
            return s
        }
    }, a.minProperties = function(e, t, n, i) {
        if (this.types.object(e)) {
            var s = new r(e, t, n, i);
            return Object.keys(e).length >= t.minProperties || s.addError({
                name: "minProperties",
                argument: t.minProperties,
                message: "does not meet minimum property length of " + t.minProperties
            }), s
        }
    }, a.maxProperties = function(e, t, n, i) {
        if (this.types.object(e)) {
            var s = new r(e, t, n, i);
            return Object.keys(e).length <= t.maxProperties || s.addError({
                name: "maxProperties",
                argument: t.maxProperties,
                message: "does not meet maximum property length of " + t.maxProperties
            }), s
        }
    }, a.items = function(e, t, n, i) {
        var s = this;
        if (this.types.array(e) && t.items) {
            var o = new r(e, t, n, i);
            return e.every((function(e, r) {
                var a = Array.isArray(t.items) ? t.items[r] || t.additionalItems : t.items;
                if (void 0 === a) return !0;
                if (!1 === a) return o.addError({
                    name: "items",
                    message: "additionalItems not permitted"
                }), !1;
                var c = s.validateSchema(e, a, n, i.makeChild(a, r));
                return c.instance !== o.instance[r] && (o.instance[r] = c.instance), o.importErrors(c), !0
            })), o
        }
    }, a.minimum = function(e, t, n, i) {
        if (this.types.number(e)) {
            var s = new r(e, t, n, i);
            return (t.exclusiveMinimum && !0 === t.exclusiveMinimum ? e > t.minimum : e >= t.minimum) || s.addError({
                name: "minimum",
                argument: t.minimum,
                message: "must have a minimum value of " + t.minimum
            }), s
        }
    }, a.maximum = function(e, t, n, i) {
        if (this.types.number(e)) {
            var s = new r(e, t, n, i);
            return (t.exclusiveMaximum && !0 === t.exclusiveMaximum ? e < t.maximum : e <= t.maximum) || s.addError({
                name: "maximum",
                argument: t.maximum,
                message: "must have a maximum value of " + t.maximum
            }), s
        }
    };
    var u = function(e, t, n, o, a, c) {
        if (this.types.number(e)) {
            var l = t[a];
            if (0 == l) throw new s(a + " cannot be zero");
            var u = new r(e, t, n, o),
                d = i.getDecimalPlaces(e),
                h = i.getDecimalPlaces(l),
                f = Math.max(d, h),
                p = Math.pow(10, f);
            return Math.round(e * p) % Math.round(l * p) != 0 && u.addError({
                name: a,
                argument: l,
                message: c + JSON.stringify(l)
            }), u
        }
    };

    function d(e, t, n) {
        var r, s = n.length;
        for (r = t + 1; r < s; r++)
            if (i.deepCompareStrict(e, n[r])) return !1;
        return !0
    }
    a.multipleOf = function(e, t, n, i) {
        return u.call(this, e, t, n, i, "multipleOf", "is not a multiple of (divisible by) ")
    }, a.divisibleBy = function(e, t, n, i) {
        return u.call(this, e, t, n, i, "divisibleBy", "is not divisible by (multiple of) ")
    }, a.required = function(e, t, n, i) {
        var s = new r(e, t, n, i);
        return void 0 === e && !0 === t.required ? s.addError({
            name: "required",
            message: "is required"
        }) : this.types.object(e) && Array.isArray(t.required) && t.required.forEach((function(t) {
            void 0 === e[t] && s.addError({
                name: "required",
                argument: t,
                message: "requires property " + JSON.stringify(t)
            })
        })), s
    }, a.pattern = function(e, t, n, i) {
        if (this.types.string(e)) {
            var s = new r(e, t, n, i);
            return e.match(t.pattern) || s.addError({
                name: "pattern",
                argument: t.pattern,
                message: "does not match pattern " + JSON.stringify(t.pattern.toString())
            }), s
        }
    }, a.format = function(e, t, n, s) {
        if (void 0 !== e) {
            var o = new r(e, t, n, s);
            return o.disableFormat || i.isFormat(e, t.format, this) || o.addError({
                name: "format",
                argument: t.format,
                message: "does not conform to the " + JSON.stringify(t.format) + " format"
            }), o
        }
    }, a.minLength = function(e, t, n, i) {
        if (this.types.string(e)) {
            var s = new r(e, t, n, i),
                o = e.match(/[\uDC00-\uDFFF]/g);
            return e.length - (o ? o.length : 0) >= t.minLength || s.addError({
                name: "minLength",
                argument: t.minLength,
                message: "does not meet minimum length of " + t.minLength
            }), s
        }
    }, a.maxLength = function(e, t, n, i) {
        if (this.types.string(e)) {
            var s = new r(e, t, n, i),
                o = e.match(/[\uDC00-\uDFFF]/g);
            return e.length - (o ? o.length : 0) <= t.maxLength || s.addError({
                name: "maxLength",
                argument: t.maxLength,
                message: "does not meet maximum length of " + t.maxLength
            }), s
        }
    }, a.minItems = function(e, t, n, i) {
        if (this.types.array(e)) {
            var s = new r(e, t, n, i);
            return e.length >= t.minItems || s.addError({
                name: "minItems",
                argument: t.minItems,
                message: "does not meet minimum length of " + t.minItems
            }), s
        }
    }, a.maxItems = function(e, t, n, i) {
        if (this.types.array(e)) {
            var s = new r(e, t, n, i);
            return e.length <= t.maxItems || s.addError({
                name: "maxItems",
                argument: t.maxItems,
                message: "does not meet maximum length of " + t.maxItems
            }), s
        }
    }, a.uniqueItems = function(e, t, n, s) {
        if (this.types.array(e)) {
            var o = new r(e, t, n, s);
            return e.every((function(e, t, n) {
                for (var r = t + 1; r < n.length; r++)
                    if (i.deepCompareStrict(e, n[r])) return !1;
                return !0
            })) || o.addError({
                name: "uniqueItems",
                message: "contains duplicate item"
            }), o
        }
    }, a.uniqueItems = function(e, t, n, i) {
        if (this.types.array(e)) {
            var s = new r(e, t, n, i);
            return e.every(d) || s.addError({
                name: "uniqueItems",
                message: "contains duplicate item"
            }), s
        }
    }, a.dependencies = function(e, t, n, i) {
        if (this.types.object(e)) {
            var s = new r(e, t, n, i);
            for (var o in t.dependencies)
                if (void 0 !== e[o]) {
                    var a = t.dependencies[o],
                        c = i.makeChild(a, o);
                    if ("string" == typeof a && (a = [a]), Array.isArray(a)) a.forEach((function(t) {
                        void 0 === e[t] && s.addError({
                            name: "dependencies",
                            argument: c.propertyPath,
                            message: "property " + t + " not found, required by " + c.propertyPath
                        })
                    }));
                    else {
                        var l = this.validateSchema(e, a, n, c);
                        s.instance !== l.instance && (s.instance = l.instance), l && l.errors.length && (s.addError({
                            name: "dependencies",
                            argument: c.propertyPath,
                            message: "does not meet dependency required by " + c.propertyPath
                        }), s.importErrors(l))
                    }
                }
            return s
        }
    }, a.enum = function(e, t, n, o) {
        if (void 0 === e) return null;
        if (!Array.isArray(t.enum)) throw new s("enum expects an array", t);
        var a = new r(e, t, n, o);
        return t.enum.some(i.deepCompareStrict.bind(null, e)) || a.addError({
            name: "enum",
            argument: t.enum,
            message: "is not one of enum values: " + t.enum.map(String).join(",")
        }), a
    }, a.const = function(e, t, n, s) {
        if (void 0 === e) return null;
        var o = new r(e, t, n, s);
        return i.deepCompareStrict(t.const, e) || o.addError({
            name: "const",
            argument: t.const,
            message: "does not exactly match expected constant: " + t.const
        }), o
    }, a.not = a.disallow = function(e, t, n, i) {
        var s = this;
        if (void 0 === e) return null;
        var o = new r(e, t, n, i),
            a = t.not || t.disallow;
        return a ? (Array.isArray(a) || (a = [a]), a.forEach((function(r) {
            if (s.testType(e, t, n, i, r)) {
                var a = r && r.id && "<" + r.id + ">" || r;
                o.addError({
                    name: "not",
                    argument: a,
                    message: "is of prohibited type " + a
                })
            }
        })), o) : null
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initUndoRedoPanel = t.initNavbar = t.startEditMode = t.prepareEditMode = void 0;
    const i = n(9),
        r = n(63),
        s = n(31);

    function o(e) {
        const t = document.getElementById("dropdown_toggle").parentElement;
        document.getElementById("dropdown_toggle").remove(), t.prepend(r.navbarDropdownMenu), document.getElementById("undoRedo_controls").innerHTML = r.undoRedoPanel, a(e), c(e);
        const n = document.createElement("a"),
            i = document.createElement("hr");
        i.classList.add("dropdown-divider"), n.classList.add("dropdown-item"), n.id = "highlight-selection", n.textContent = "By Selection Mode", document.getElementsByClassName("dropdown-content")[0].appendChild(i), document.getElementsByClassName("dropdown-content")[0].appendChild(n)
    }

    function a(e) {
        document.getElementById("save").addEventListener("click", () => {
            e.save().then(() => {
                i.queueNotification("Saved")
            })
        }), document.body.addEventListener("keydown", t => {
            "s" === t.key && e.save().then(() => {
                i.queueNotification("Saved")
            })
        }), document.getElementById("export").addEventListener("click", () => {
            e.export().then(t => {
                const n = document.createElement("a");
                n.href = t, n.download = e.name + ".jsonld", document.body.appendChild(n), n.click(), n.remove(), i.queueNotification("Saved")
            })
        }), document.getElementById("revert").addEventListener("click", (function() {
            window.confirm("Reverting will cause all changes to be lost. Press OK to continue.") && e.deleteDb().then(() => {
                window.location.reload()
            })
        })), document.getElementById("getmei").addEventListener("click", () => {
            const t = e.view.getCurrentPageURI();
            e.getPageMEI(t).then(t => {
                const n = "data:application/mei+xml;base64," + window.btoa(s.convertStaffToSb(t));
                document.getElementById("getmei").setAttribute("href", n), document.getElementById("getmei").setAttribute("download", e.view.getPageName() + ".mei")
            })
        })
    }

    function c(e) {
        function t() {
            e.undo().then(t => {
                t ? e.updateForCurrentPage() : console.error("Failed to undo action")
            })
        }

        function n() {
            e.redo().then(t => {
                t ? e.updateForCurrentPage() : console.error("Failed to redo action")
            })
        }
        document.getElementById("undo").addEventListener("click", t), document.body.addEventListener("keydown", e => {
            "z" === e.key && (e.ctrlKey || e.metaKey) && t()
        }), document.getElementById("redo").addEventListener("click", n), document.body.addEventListener("keydown", e => {
            ("Z" === e.key || "z" === e.key && e.shiftKey) && (e.ctrlKey || e.metaKey) && n()
        })
    }
    t.prepareEditMode = function(e) {
        const t = document.getElementById("dropdown_toggle"),
            n = document.createElement("a");
        n.classList.add("navbar-item");
        const i = document.createElement("button");
        i.classList.add("button"), i.id = "edit_mode", i.textContent = "Edit MEI", n.appendChild(i), t.appendChild(n), i.addEventListener("click", () => {
            o(e)
        })
    }, t.startEditMode = o, t.initNavbar = a, t.initUndoRedoPanel = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.undoRedoPanel = t.navbarFinalize = t.navbarDropdownMenu = void 0, t.navbarDropdownMenu = document.createElement("div"), t.navbarDropdownMenu.classList.add("navbar-item", "has-dropdown", "is-hoverable");
    const i = document.createElement("a");
    i.classList.add("navbar-link"), i.textContent = "File";
    const r = document.createElement("div");
    r.classList.add("navbar-dropdown"), r.id = "navbar-dropdown-options";
    [
        ["save", "Save"],
        ["export", "Save and Export to File"],
        ["getmei", "Download MEI"],
        ["revert", "Revert"]
    ].forEach(e => {
        const t = document.createElement("a");
        t.id = e[0], t.classList.add("navbar-item"), t.textContent = e[1], r.appendChild(t)
    }), t.navbarDropdownMenu.appendChild(i), t.navbarDropdownMenu.appendChild(r), t.navbarFinalize = "<a id='finalize' class='navbar-item'> Finalize MEI </a>", t.undoRedoPanel = "<div class='field has-addons buttons' style='overflow-x: auto;'><p class='control'><button class='button' id='undo'>Undo</button><button class='button' id='redo'>Redo</button></p></a></div>"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, t.default = async function() {
        const e = await fetch("/Neon/Neon-gh/assets/template.html");
        document.body.innerHTML = await e.text(), document.getElementById("home-link").href = "https://ddmal.music.mcgill.ca/Neon", document.getElementById("neon-version").textContent = "475c1e59\n"
    }
}, function(e, t) {
    var n, i, r, s;
    n = window.requestAnimationFrame, i = "ontouchend" in document, r = function() {
        for (var e = 1; e < arguments.length; e++)
            for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
        return arguments[0]
    }, (s = function(e, t) {
        return this.settings = r({}, s.DEFAULTS, t), this.el = e, this.ACTIVE_CLASS = "kinetic-active", this._initElements(), this.el._VanillaKinetic = this, this
    }).DEFAULTS = {
        cursor: "move",
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: .9,
        maxvelocity: 40,
        throttleFPS: 60,
        invert: !1,
        movingClass: {
            up: "kinetic-moving-up",
            down: "kinetic-moving-down",
            left: "kinetic-moving-left",
            right: "kinetic-moving-right"
        },
        deceleratingClass: {
            up: "kinetic-decelerating-up",
            down: "kinetic-decelerating-down",
            left: "kinetic-decelerating-left",
            right: "kinetic-decelerating-right"
        }
    }, s.prototype.start = function(e) {
        this.settings = r(this.settings, e), this.velocity = e.velocity || this.velocity, this.velocityY = e.velocityY || this.velocityY, this.settings.decelerate = !1, this._move()
    }, s.prototype.end = function() {
        this.settings.decelerate = !0
    }, s.prototype.stop = function() {
        this.velocity = 0, this.velocityY = 0, this.settings.decelerate = !0, "function" == typeof this.settings.stopped && this.settings.stopped.call(this)
    }, s.prototype.detach = function() {
        this._detachListeners(), this.el.classList.remove(this.ACTIVE_CLASS), this.el.style.cursor = ""
    }, s.prototype.attach = function() {
        this.el.classList.contains(this.ACTIVE_CLASS) || (this._attachListeners(), this.el.classList.add(this.ACTIVE_CLASS), this.el.style.cursor = this.settings.cursor)
    }, s.prototype._initElements = function() {
        this.el.classList.add(this.ACTIVE_CLASS), r(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null
        }), this.velocity = 0, this.velocityY = 0;
        var e = this;
        this.documentResetHandler = function() {
            e._resetMouse.apply(e)
        };
        var t = document.documentElement;
        if (t.addEventListener("mouseup", this.documentResetHandler, !1), t.addEventListener("click", this.documentResetHandler, !1), this._initEvents(), this.el.style.cursor = this.settings.cursor, this.settings.triggerHardware)
            for (var n = ["", "-ms-", "-webkit-", "-moz-"], i = {
                    transform: "translate3d(0,0,0)",
                    perspective: "1000",
                    "backface-visibility": "hidden"
                }, s = 0; s < n.length; s++) {
                var o = n[s];
                for (var a in i) i.hasOwnProperty(a) && (this.el.style[o + a] = i[a])
            }
    }, s.prototype._initEvents = function() {
        var e = this;
        this.settings.events = {
            touchStart: function(t) {
                var n;
                e._useTarget(t.target, t) && (n = t.originalEvent.touches[0], e.threshold = e._threshold(t.target, t), e._start(n.clientX, n.clientY), t.stopPropagation())
            },
            touchMove: function(t) {
                var n;
                e.mouseDown && (n = t.originalEvent.touches[0], e._inputmove(n.clientX, n.clientY), t.preventDefault && t.preventDefault())
            },
            inputDown: function(t) {
                e._useTarget(t.target, t) && (e.threshold = e._threshold(t.target, t), e._start(t.clientX, t.clientY), e.elementFocused = t.target, "IMG" === t.target.nodeName && t.preventDefault(), t.stopPropagation())
            },
            inputEnd: function(t) {
                e._useTarget(t.target, t) && (e._end(), e.elementFocused = null, t.preventDefault && t.preventDefault())
            },
            inputMove: function(t) {
                e.mouseDown && (e._inputmove(t.clientX, t.clientY), t.preventDefault && t.preventDefault())
            },
            scroll: function(t) {
                "function" == typeof e.settings.moved && e.settings.moved.call(e, e.settings), t.preventDefault && t.preventDefault()
            },
            inputClick: function(t) {
                if (Math.abs(e.velocity) > 0 || Math.abs(e.velocityY) > 0) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1
            },
            dragStart: function(t) {
                if (e._useTarget(t.target, t) && e.elementFocused) return t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1
            },
            selectStart: function(t) {
                return "function" == typeof e.settings.selectStart ? e.settings.selectStart.apply(e, arguments) : e._useTarget(t.target, t) ? (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1) : void 0
            }
        }, this._attachListeners()
    }, s.prototype._inputmove = function(e, t) {
        if ((!this.lastMove || new Date > new Date(this.lastMove.getTime() + this.throttleTimeout)) && (this.lastMove = new Date, this.mouseDown && (this.xpos || this.ypos))) {
            var n = e - this.xpos,
                i = t - this.ypos;
            if (this.settings.invert && (n *= -1, i *= -1), this.threshold > 0) {
                var r = Math.sqrt(n * n + i * i);
                if (this.threshold > r) return;
                this.threshold = 0
            }
            this.elementFocused && (this.elementFocused.blur(), this.elementFocused = null, this.el.focus()), this.settings.decelerate = !1, this.velocity = this.velocityY = 0;
            var s = this.scrollLeft(),
                o = this.scrollTop();
            this.scrollLeft(this.settings.x ? s - n : s), this.scrollTop(this.settings.y ? o - i : o), this.prevXPos = this.xpos, this.prevYPos = this.ypos, this.xpos = e, this.ypos = t, this._calculateVelocities(), this._setMoveClasses(this.settings.movingClass), "function" == typeof this.settings.moved && this.settings.moved.call(this, this.settings)
        }
    }, s.prototype._calculateVelocities = function() {
        this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity), this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity), this.settings.invert && (this.velocity *= -1, this.velocityY *= -1)
    }, s.prototype._end = function() {
        this.xpos && this.prevXPos && !1 === this.settings.decelerate && (this.settings.decelerate = !0, this._calculateVelocities(), this.xpos = this.prevXPos = this.mouseDown = !1, this._move())
    }, s.prototype._useTarget = function(e, t) {
        return "function" != typeof this.settings.filterTarget || !1 !== this.settings.filterTarget.call(this, e, t)
    }, s.prototype._threshold = function(e, t) {
        return "function" == typeof this.settings.threshold ? this.settings.threshold.call(this, e, t) : this.settings.threshold
    }, s.prototype._start = function(e, t) {
        this.mouseDown = !0, this.velocity = this.prevXPos = 0, this.velocityY = this.prevYPos = 0, this.xpos = e, this.ypos = t
    }, s.prototype._resetMouse = function() {
        this.xpos = !1, this.ypos = !1, this.mouseDown = !1
    }, s.prototype._decelerateVelocity = function(e, t) {
        return 0 === Math.floor(Math.abs(e)) ? 0 : e * t
    }, s.prototype._capVelocity = function(e, t) {
        var n = e;
        return e > 0 ? e > t && (n = t) : e < 0 - t && (n = 0 - t), n
    }, s.prototype._setMoveClasses = function(e) {
        var t = this.settings,
            n = this.el;
        n.classList.remove(t.movingClass.up), n.classList.remove(t.movingClass.down), n.classList.remove(t.movingClass.left), n.classList.remove(t.movingClass.right), n.classList.remove(t.deceleratingClass.up), n.classList.remove(t.deceleratingClass.down), n.classList.remove(t.deceleratingClass.left), n.classList.remove(t.deceleratingClass.right), this.velocity > 0 && n.classList.add(e.right), this.velocity < 0 && n.classList.add(e.left), this.velocityY > 0 && n.classList.add(e.down), this.velocityY < 0 && n.classList.add(e.up)
    }, s.prototype._move = function() {
        var e = this._getScroller(),
            t = this,
            i = this.settings;
        i.x && e.scrollWidth > 0 ? (this.scrollLeft(this.scrollLeft() + this.velocity), Math.abs(this.velocity) > 0 && (this.velocity = i.decelerate ? t._decelerateVelocity(this.velocity, i.slowdown) : this.velocity)) : this.velocity = 0, i.y && e.scrollHeight > 0 ? (this.scrollTop(this.scrollTop() + this.velocityY), Math.abs(this.velocityY) > 0 && (this.velocityY = i.decelerate ? t._decelerateVelocity(this.velocityY, i.slowdown) : this.velocityY)) : this.velocityY = 0, t._setMoveClasses(i.deceleratingClass), "function" == typeof i.moved && i.moved.call(this, i), Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0 ? this.moving || (this.moving = !0, n((function() {
            t.moving = !1, t._move()
        }))) : t.stop()
    }, s.prototype._getScroller = function() {
        return this.el
    }, s.prototype.scrollLeft = function(e) {
        var t = this._getScroller();
        if ("number" != typeof e) return t.scrollLeft;
        t.scrollLeft = e, this.settings.scrollLeft = e
    }, s.prototype.scrollTop = function(e) {
        var t = this._getScroller();
        if ("number" != typeof e) return t.scrollTop;
        t.scrollTop = e, this.settings.scrollTop = e
    }, s.prototype._attachListeners = function() {
        var e = this.el,
            t = this.settings;
        i && (e.addEventListener("touchstart", t.events.touchStart, !1), e.addEventListener("touchend", t.events.inputEnd, !1), e.addEventListener("touchmove", t.events.touchMove, !1)), e.addEventListener("mousedown", t.events.inputDown, !1), e.addEventListener("mouseup", t.events.inputEnd, !1), e.addEventListener("mousemove", t.events.inputMove, !1), e.addEventListener("click", t.events.inputClick, !1), e.addEventListener("scroll", t.events.scroll, !1), e.addEventListener("selectstart", t.events.selectStart, !1), e.addEventListener("dragstart", t.events.dragStart, !1)
    }, s.prototype._detachListeners = function() {
        var e = this.el,
            t = this.settings;
        i && (e.removeEventListener("touchstart", t.events.touchStart, !1), e.removeEventListener("touchend", t.events.inputEnd, !1), e.removeEventListener("touchmove", t.events.touchMove, !1)), e.removeEventListener("mousedown", t.events.inputDown, !1), e.removeEventListener("mouseup", t.events.inputEnd, !1), e.removeEventListener("mousemove", t.events.inputMove, !1), e.removeEventListener("click", t.events.inputClick, !1), e.removeEventListener("scroll", t.events.scroll, !1), e.removeEventListener("selectstart", t.events.selectStart, !1), e.removeEventListener("dragstart", t.events.dragStart, !1)
    }, window.VanillaKinetic = s
}, function(e, t, n) {
    var i, r, s;
    /**
     * @fileoverview dragscroll - scroll area by dragging
     * @version 0.0.8
     *
     * @license MIT, see http://github.com/asvd/dragscroll
     * @copyright 2015 asvd <heliosframework@gmail.com>
     */
    r = [t], void 0 === (s = "function" == typeof(i = function(e) {
        var t, n, i = window,
            r = document,
            s = [],
            o = function(e, o) {
                for (e = 0; e < s.length;)(o = (o = s[e++]).container || o).removeEventListener("mousedown", o.md, 0), i.removeEventListener("mouseup", o.mu, 0), i.removeEventListener("mousemove", o.mm, 0);
                for (s = [].slice.call(r.getElementsByClassName("dragscroll")), e = 0; e < s.length;) ! function(e, s, o, a, c, l) {
                    (l = e.container || e).addEventListener("mousedown", l.md = function(t) {
                        e.hasAttribute("nochilddrag") && r.elementFromPoint(t.pageX, t.pageY) !== l || (a = 1, s = t.clientX, o = t.clientY, t.preventDefault())
                    }, 0), i.addEventListener("mouseup", l.mu = function() {
                        a = 0
                    }, 0), i.addEventListener("mousemove", l.mm = function(i) {
                        a && ((c = e.scroller || e).scrollLeft -= t = -s + (s = i.clientX), c.scrollTop -= n = -o + (o = i.clientY), e === r.body && ((c = r.documentElement).scrollLeft -= t, c.scrollTop -= n))
                    }, 0)
                }(s[e++])
            };
        "complete" === r.readyState ? o() : i.addEventListener("load", o, 0), e.reset = o, window.resetDragscroll = o
    }) ? i.apply(t, r) : i) || (e.exports = s)
}, function(e, t, n) {
    var i;

    function r(e) {
        function n() {
            if (n.enabled) {
                var e = n,
                    r = +new Date,
                    s = r - (i || r);
                e.diff = s, e.prev = i, e.curr = r, i = r;
                for (var o = new Array(arguments.length), a = 0; a < o.length; a++) o[a] = arguments[a];
                o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
                var c = 0;
                o[0] = o[0].replace(/%([a-zA-Z%])/g, (function(n, i) {
                    if ("%%" === n) return n;
                    c++;
                    var r = t.formatters[i];
                    if ("function" == typeof r) {
                        var s = o[c];
                        n = r.call(e, s), o.splice(c, 1), c--
                    }
                    return n
                })), t.formatArgs.call(e, o);
                var l = n.log || t.log || console.log.bind(console);
                l.apply(e, o)
            }
        }
        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
            var n, i = 0;
            for (n in e) i = (i << 5) - i + e.charCodeAt(n), i |= 0;
            return t.colors[Math.abs(i) % t.colors.length]
        }(e), "function" == typeof t.init && t.init(n), n
    }(t = e.exports = r.debug = r.default = r).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable("")
    }, t.enable = function(e) {
        t.save(e), t.names = [], t.skips = [];
        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), i = n.length, r = 0; r < i; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }, t.enabled = function(e) {
        var n, i;
        for (n = 0, i = t.skips.length; n < i; n++)
            if (t.skips[n].test(e)) return !1;
        for (n = 0, i = t.names.length; n < i; n++)
            if (t.names[n].test(e)) return !0;
        return !1
    }, t.humanize = n(68), t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
    var n = 1e3,
        i = 6e4,
        r = 60 * i,
        s = 24 * r;

    function o(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var a, c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var o = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * o;
                case "days":
                case "day":
                case "d":
                    return o * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return o * r;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return o * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return o * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return o;
                default:
                    return
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? o(a = e, s, "day") || o(a, r, "hour") || o(a, i, "minute") || o(a, n, "second") || a + " ms" : function(e) {
            if (e >= s) return Math.round(e / s) + "d";
            if (e >= r) return Math.round(e / r) + "h";
            if (e >= i) return Math.round(e / i) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.ZoomHandler = t.ViewBox = void 0;
    const i = n(3);
    class r {
        constructor(e, t) {
            this.a = 0, this.b = 0, this.c = e, this.d = t, this.imageWidth = e, this.imageHeight = t
        }
        set(e, t, n, i) {
            this.a = e, this.b = t, this.c = n, this.d = i
        }
        get() {
            return this.a.toString() + " " + this.b.toString() + " " + this.c + " " + this.d
        }
        zoomTo(e) {
            const t = this.imageHeight / e,
                n = this.imageWidth / e;
            this.c = n, this.d = t
        }
        getZoom() {
            return this.imageWidth / this.c
        }
        translate(e, t) {
            this.a += e, this.b += t
        }
    }
    t.ViewBox = r;
    class s {
        resetZoomAndPan() {
            const e = document.getElementById("bgimg");
            this.viewBox = new r(parseInt(e.getAttribute("width")), parseInt(e.getAttribute("height"))), this.updateViewBox()
        }
        zoomTo(e) {
            this.getViewBox(), this.viewBox.zoomTo(e), this.updateViewBox()
        }
        translate(e, t) {
            this.getViewBox(), this.viewBox.translate(e, t), this.updateViewBox()
        }
        restoreTransformation() {
            void 0 === this.viewBox ? this.resetZoomAndPan() : this.updateViewBox()
        }
        getViewBox() {
            if (void 0 === this.viewBox) {
                const e = document.getElementById("bgimg");
                this.viewBox = new r(parseInt(e.getAttribute("width")), parseInt(e.getAttribute("height")))
            }
            const e = document.getElementById("svg_group").getAttribute("viewBox").split(" ");
            this.viewBox.set(parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), parseInt(e[3]))
        }
        updateViewBox() {
            document.getElementById("svg_group").setAttribute("viewBox", this.viewBox.get())
        }
        startDrag() {
            const e = document.getElementById("svg_group");
            this.dragCoordinates = e.createSVGPoint(), "touchstart" === i.event.type ? (this.dragCoordinates.x = i.event.touches[0].screenX, this.dragCoordinates.y = i.event.touches[0].screenY) : (this.dragCoordinates.x = i.event.x, this.dragCoordinates.y = i.event.y), this.matrix = e.getScreenCTM().inverse()
        }
        dragging() {
            const e = document.getElementById("svg_group"),
                t = e.createSVGPoint();
            "touchmove" === i.event.type ? (t.x = i.event.touches[0].screenX, t.y = i.event.touches[0].screenY) : "wheel" === i.event.type && !1 === i.event.shiftKey ? (void 0 === this.matrix && (this.matrix = e.getScreenCTM().inverse()), void 0 === this.dragCoordinates && (this.dragCoordinates = e.createSVGPoint()), this.dragCoordinates.x = i.event.x, this.dragCoordinates.y = i.event.y, t.x = this.dragCoordinates.x - i.event.deltaX, t.y = this.dragCoordinates.y - i.event.deltaY, i.event.preventDefault()) : (t.x = i.event.x, t.y = i.event.y);
            const n = t.matrixTransform(this.matrix),
                r = this.dragCoordinates.matrixTransform(this.matrix);
            this.translate(-n.x + r.x, -n.y + r.y), this.dragCoordinates = t
        }
        scrollZoom() {
            if ("wheel" !== i.event.type) return;
            if (!i.event.shiftKey) return void this.dragging();
            const e = document.getElementById("zoomSlider");
            this.getViewBox();
            let t = this.viewBox.getZoom() - i.event.deltaX / 100;
            t < parseInt(e.getAttribute("min")) / 100 && (t = .25), t > parseInt(e.getAttribute("max")) / 100 && (t = 4), this.zoomTo(t), e.value = (100 * t).toString(), document.getElementById("zoomOutput").value = String(Math.round(100 * t))
        }
    }
    t.ZoomHandler = s, t.default = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.groupingNotRecognized = void 0, t.groupingNotRecognized = function() {
        window.confirm("Neon does not recognize this neume grouping. Would you like to create a compound neume?") || document.getElementById("undo").click()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SplitHandler = void 0;
    const i = n(9),
        r = n(4),
        s = n(12);
    t.SplitHandler = class {
        constructor(e, t) {
            this.handler = (e => {
                const t = this.staff.id,
                    n = this.staff.closest(".definition-scale"),
                    o = n.createSVGPoint();
                o.x = e.clientX, o.y = e.clientY;
                const a = n.getElementsByClassName("system")[0].getScreenCTM().inverse(),
                    c = o.matrixTransform(a),
                    l = {
                        action: "split",
                        param: {
                            elementId: t,
                            x: c.x
                        }
                    };
                this.neonView.edit(l, this.neonView.view.getCurrentPageURI()).then(async e => {
                    e && (await this.neonView.updateForCurrentPage(), i.queueNotification("Split action successful"));
                    const n = new s.default(this.neonView, ".staff");
                    this.splitDisable(), r.selectAll([document.querySelector("#" + t)], this.neonView, n);
                    try {
                        document.getElementById("moreEdit").innerHTML = "", document.getElementById("moreEdit").classList.add("is-invisible")
                    } catch (e) {}
                })
            }).bind(this), this.keydownListener = (e => {
                "Escape" === e.key ? this.splitDisable() : "Shift" === e.key && document.body.removeEventListener("click", this.handler, {
                    capture: !0
                })
            }).bind(this), this.clickawayHandler = (e => {
                null === e.target.closest(".active-page") && (this.splitDisable(), document.body.removeEventListener("click", this.handler, {
                    capture: !0
                }))
            }).bind(this), this.resetHandler = (e => {
                "Shift" === e.key && document.body.addEventListener("click", this.handler, {
                    capture: !0
                })
            }).bind(this), this.neonView = e, this.staff = t
        }
        startSplit() {
            this.splitDisable(), document.body.addEventListener("click", this.handler, {
                capture: !0
            }), document.body.addEventListener("keydown", this.keydownListener), document.body.addEventListener("keyup", this.resetHandler), document.body.addEventListener("click", this.clickawayHandler), i.queueNotification("Click Where to Split")
        }
        splitDisable() {
            document.body.removeEventListener("keydown", this.keydownListener), document.body.removeEventListener("keyup", this.resetHandler), document.body.removeEventListener("click", this.clickawayHandler), document.body.removeEventListener("click", this.handler, {
                capture: !0
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(65), n(66);

    function i(e) {
        const t = document.createElement(e),
            n = Array.prototype.slice.call(arguments, 1);
        for (; n.length;) {
            r(t, n.shift())
        }
        return t
    }

    function r(e, t) {
        if (null != t)
            if ("object" != typeof t && "function" != typeof t) e.appendChild(document.createTextNode(t));
            else if (t instanceof window.Node) e.appendChild(t);
        else if (t instanceof Array) {
            const n = t.length;
            for (let i = 0; i < n; i++) r(e, t[i])
        } else s(e, t)
    }

    function s(e, t) {
        for (const n in t) t.hasOwnProperty(n) && ("style" === n ? o(e, t.style) : e.setAttribute(n, t[n]))
    }

    function o(e, t) {
        if (t)
            if ("object" == typeof t)
                for (const n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
            else e.style.cssText = t
    }

    function a(e) {
        this.name = "DivaParentElementNotFoundException", this.message = e, this.stack = (new Error).stack
    }

    function c(e) {
        this.name = "NotAnIIIFManifestException", this.message = e, this.stack = (new Error).stack
    }

    function l(e) {
        this.name = "ObjectDataNotSuppliedException", this.message = e, this.stack = (new Error).stack
    }
    a.prototype = new Error, c.prototype = new Error, l.prototype = new Error;
    var u = {
        Events: new class {
            constructor() {
                this._cache = {}
            }
            publish(e, t, n) {
                if (this._cache[e]) {
                    const i = this._cache[e];
                    if (void 0 !== i.global) {
                        const e = i.global,
                            r = e.length;
                        for (let i = 0; i < r; i++) e[i].apply(n || null, t || [])
                    }
                    if (n && void 0 !== n.getInstanceId) {
                        const i = n.getInstanceId();
                        if (this._cache[e][i]) {
                            const r = this._cache[e][i],
                                s = r.length;
                            for (let e = 0; e < s; e++) r[e].apply(n, t || [])
                        }
                    }
                }
            }
            subscribe(e, t, n) {
                return this._cache[e] || (this._cache[e] = {}), "string" == typeof n ? (this._cache[e][n] || (this._cache[e][n] = []), this._cache[e][n].push(t)) : (this._cache[e].global || (this._cache[e].global = []), this._cache[e].global.push(t)), n ? [e, t, n] : [e, t]
            }
            unsubscribe(e, t) {
                const n = e[0];
                if (this._cache[n]) {
                    let i;
                    const r = 3 === e.length ? e[2] : "global";
                    if (i = this._cache[n][r], !i) return !1;
                    if (t) return delete this._cache[n][r], i.length > 0;
                    let s = i.length;
                    for (; s--;)
                        if (i[s] === e[1]) return this._cache[n][r].splice(s, 1), !0
                }
                return !1
            }
            unsubscribeAll(e) {
                if (e) {
                    const t = Object.keys(this._cache);
                    let n, i = t.length;
                    for (; i--;) n = t[i], void 0 !== this._cache[n][e] && delete this._cache[n][e]
                } else this._cache = {}
            }
        }
    };
    var d = {
        onDoubleClick: function(e, t) {
            e.addEventListener("dblclick", (function(e) {
                e.ctrlKey || t(e, p(e.currentTarget, e))
            }));
            const n = f(500);
            e.addEventListener("contextmenu", (function(e) {
                e.preventDefault(), e.ctrlKey && (n.isTriggered() ? (n.reset(), t(e, p(e.currentTarget, e))) : n.trigger())
            }))
        },
        onPinch: function(e, t) {
            let n = 0;
            e.addEventListener("touchstart", (function(e) {
                e.preventDefault(), 2 === e.originalEvent.touches.length && (n = h(e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY, e.originalEvent.touches[1].clientX, e.originalEvent.touches[1].clientY))
            })), e.addEventListener("touchmove", (function(e) {
                if (e.preventDefault(), 2 === e.originalEvent.touches.length) {
                    const i = e.originalEvent.touches,
                        r = h(i[0].clientX, i[0].clientY, i[1].clientX, i[1].clientY),
                        s = r - n;
                    if (Math.abs(s) > 0) {
                        const s = {
                            pageX: (i[0].clientX + i[1].clientX) / 2,
                            pageY: (i[0].clientY + i[1].clientY) / 2
                        };
                        t(e, p(e.currentTarget, s), n, r)
                    }
                }
            }))
        },
        onDoubleTap: function(e, t) {
            const n = f(250);
            let i = null;
            e.addEventListener("touchend", e => {
                if (e.preventDefault(), n.isTriggered()) {
                    n.reset();
                    const r = {
                        pageX: e.originalEvent.changedTouches[0].clientX,
                        pageY: e.originalEvent.changedTouches[0].clientY
                    };
                    h(i.pageX, i.pageY, r.pageX, r.pageY) < 50 && t(e, p(e.currentTarget, r)), i = null
                } else i = {
                    pageX: e.originalEvent.changedTouches[0].clientX,
                    pageY: e.originalEvent.changedTouches[0].clientY
                }, n.trigger()
            })
        }
    };

    function h(e, t, n, i) {
        return Math.sqrt((n - e) * (n - e) + (i - t) * (i - t))
    }

    function f(e) {
        let t = !1,
            n = null;
        return {
            trigger() {
                t = !0, i(), n = setTimeout((function() {
                    t = !1, n = null
                }), e)
            },
            isTriggered: () => t,
            reset() {
                t = !1, i()
            }
        };

        function i() {
            null !== n && (clearTimeout(n), n = null)
        }
    }

    function p(e, t) {
        const n = e.getBoundingClientRect();
        return {
            left: t.pageX - n.left,
            top: t.pageY - n.top
        }
    }
    var g = n(13);
    class v {
        constructor(e, t) {
            this.page = e, this._viewerCore = t, this._innerElement = this._viewerCore.getSettings().innerElement, this._pageToolsElem = null, this.labelWidth = 0
        }
        mount() {
            null === this._pageToolsElem && (this._buttons = this._initializePageToolButtons(), this._pageToolsElem = i("div", {
                class: "diva-page-tools-wrapper"
            }, i("div", {
                class: "diva-page-tools"
            }, this._buttons)), this._pageLabelsElem = i("div", {
                class: "diva-page-labels-wrapper"
            }, i("div", {
                class: "diva-page-labels"
            }, this._viewerCore.settings.manifest.pages[this.page].l))), this.refresh(), this._innerElement.appendChild(this._pageToolsElem), this._innerElement.appendChild(this._pageLabelsElem)
        }
        _initializePageToolButtons() {
            const e = this._viewerCore.getSettings(),
                t = this._viewerCore.getPublicInstance(),
                n = this.page;
            return this._viewerCore.getPageTools().map(i => {
                const r = i.pageToolsIcon.cloneNode(!0);
                return r.addEventListener("click", r => {
                    i.handleClick.call(i, r, e, t, n)
                }, !1), r.addEventListener("touchend", r => {
                    r.preventDefault(), i.handleClick.call(i, r, e, t, n)
                }, !1), r
            })
        }
        unmount() {
            this._innerElement.removeChild(this._pageToolsElem), this._innerElement.removeChild(this._pageLabelsElem)
        }
        refresh() {
            const e = this._viewerCore.getPageRegion(this.page, {
                includePadding: !0,
                incorporateViewport: !0
            });
            let t = window.getComputedStyle(this._innerElement, null).getPropertyValue("margin-left");
            this._pageToolsElem.style.top = e.top + "px", this._pageToolsElem.style.left = e.left - parseInt(t) + "px", this._pageLabelsElem.style.top = e.top + "px", this._pageLabelsElem.style.left = e.right - parseInt(t) - this.labelWidth - 5 + "px"
        }
    }
    class m {
        constructor(e) {
            if (this._viewerCore = e, this._viewerState = e.getInternalState(), this._overlays = [], this._viewerCore.getPageTools().length) {
                const t = e.getSettings().numPages;
                for (let n = 0; n < t; n++) {
                    const t = new v(n, e);
                    this._overlays.push(t), this._viewerCore.addPageOverlay(t);
                    let i = document.createElement("span");
                    i.innerHTML = e.settings.manifest.pages[n].l, i.classList.add("diva-page-labels"), i.setAttribute("style", "display: inline-block;"), document.body.appendChild(i);
                    let r = i.clientWidth;
                    document.body.removeChild(i), t.labelWidth = r
                }
            }
        }
        onDoubleClick(e, t) {
            const n = this._viewerCore.getSettings(),
                i = e.ctrlKey ? n.zoomLevel - 1 : n.zoomLevel + 1,
                r = this._viewerCore.getPagePositionAtViewportOffset(t);
            this._viewerCore.zoom(i, r)
        }
        onPinch(e, t, n, i) {
            const r = this._viewerCore.getInternalState(),
                s = this._viewerCore.getSettings();
            let o = Math.log(Math.pow(2, s.zoomLevel) * i / (n * Math.log(2))) / Math.log(2);
            if (o = Math.max(s.minZoomLevel, o), o = Math.min(s.maxZoomLevel, o), o === s.zoomLevel) return;
            const a = this._viewerCore.getPagePositionAtViewportOffset(t),
                c = this._viewerCore.getCurrentLayout().getPageToViewportCenterOffset(a.anchorPage, r.viewport),
                l = 1 / Math.pow(2, s.zoomLevel - o);
            this._viewerCore.reload({
                zoomLevel: o,
                goDirectlyTo: a.anchorPage,
                horizontalOffset: c.x - a.offset.left + a.offset.left * l,
                verticalOffset: c.y - a.offset.top + a.offset.top * l
            })
        }
        onViewWillLoad() {
            this._viewerCore.publish("DocumentWillLoad", this._viewerCore.getSettings())
        }
        onViewDidLoad() {
            this._handleZoomLevelChange();
            const e = this._viewerCore.getSettings().activePageIndex,
                t = this._viewerCore.getPageName(e);
            this._viewerCore.publish("DocumentDidLoad", e, t)
        }
        onViewDidUpdate(e, t) {
            const n = null !== t ? t : function(e, t, n) {
                const i = n.top + n.height / 2,
                    r = n.left + n.width / 2,
                    s = Object(g.maxBy)(e, e => {
                        const n = t.getPageDimensions(e),
                            s = t.getPageOffset(e, {
                                includePadding: !0
                            }),
                            o = s.left + n.width / 2,
                            a = s.top + n.height / 2,
                            c = Math.max(Math.abs(r - o) - n.width / 2, 0),
                            l = Math.max(Math.abs(i - a) - n.height / 2, 0);
                        return -(c * c + l * l)
                    });
                return null != s ? s : null
            }(e, this._viewerCore.getCurrentLayout(), this._viewerCore.getViewport());
            let i = this._viewerState.viewport.intersectionTolerance;
            this._viewerState.viewport.intersectionTolerance = 0;
            let r = e.filter(e => this._viewerState.renderer.isPageVisible(e));
            this._viewerState.viewport.intersectionTolerance = i, null !== n && this._viewerCore.setCurrentPages(n, r), null !== t && this._viewerCore.publish("ViewerDidJump", t), this._handleZoomLevelChange()
        }
        _handleZoomLevelChange() {
            const e = this._viewerState,
                t = e.options.zoomLevel;
            e.oldZoomLevel !== t && e.oldZoomLevel >= 0 && (e.oldZoomLevel < t ? this._viewerCore.publish("ViewerDidZoomIn", t) : this._viewerCore.publish("ViewerDidZoomOut", t), this._viewerCore.publish("ViewerDidZoom", t)), e.oldZoomLevel = t
        }
        destroy() {
            this._overlays.forEach(e => {
                this._viewerCore.removePageOverlay(e)
            }, this)
        }
    }
    class y {
        constructor(e) {
            this._viewerCore = e
        }
        onDoubleClick(e, t) {
            const n = this._viewerCore.getPagePositionAtViewportOffset(t),
                i = this._viewerCore.getCurrentLayout(),
                r = this._viewerCore.getViewport(),
                s = i.getPageToViewportCenterOffset(n.anchorPage, r);
            this._viewerCore.reload({
                inGrid: !1,
                goDirectlyTo: n.anchorPage,
                horizontalOffset: s.x + n.offset.left,
                verticalOffset: s.y + n.offset.top
            })
        }
        onPinch() {
            this._viewerCore.reload({
                inGrid: !1
            })
        }
        onViewWillLoad() {}
        onViewDidLoad() {}
        onViewDidUpdate(e, t) {
            if (0 === e.length) return;
            let n = this._viewerCore.viewerState.viewport.intersectionTolerance;
            this._viewerCore.viewerState.viewport.intersectionTolerance = 0;
            let i = e.filter(e => this._viewerCore.viewerState.renderer.isPageVisible(e));
            if (this._viewerCore.viewerState.viewport.intersectionTolerance = n, null !== t) return void this._viewerCore.setCurrentPages(t, i);
            const r = this._viewerCore.getCurrentLayout(),
                s = [];
            e.forEach(e => {
                const t = r.getPageInfo(e).group;
                0 !== s.length && t === s[s.length - 1] || s.push(t)
            });
            const o = this._viewerCore.getViewport();
            let a;
            a = 1 === s.length || s[0].region.top >= o.top ? s[0] : s[1].region.bottom <= o.bottom ? s[1] : function(e, t) {
                const n = t.top + t.height / 2;
                return Object(g.maxBy)(e, e => {
                    const t = e.region.top + e.dimensions.height / 2;
                    return -Math.abs(n - t)
                })
            }(s, o);
            const c = this._viewerCore.getSettings().activePageIndex;
            a.pages.some(e => e.index === c) || this._viewerCore.setCurrentPages(a.pages[0].index, i)
        }
        destroy() {}
    }
    class b {
        constructor() {
            this._pages = {}, this._renderedPages = [], this._renderedPageMap = {}
        }
        addOverlay(e) {
            (this._pages[e.page] || (this._pages[e.page] = [])).push(e), this._renderedPageMap[e.page] && e.mount()
        }
        removeOverlay(e) {
            const t = e.page,
                n = this._pages[t];
            if (!n) return;
            const i = n.indexOf(e); - 1 !== i && (this._renderedPageMap[t] && n[i].unmount(), n.splice(i, 1), 0 === n.length && delete this._pages[t])
        }
        updateOverlays(e) {
            const t = this._renderedPages,
                n = {};
            e.map(e => {
                n[e] = !0, this._renderedPageMap[e] || (this._renderedPageMap[e] = !0, this._invokeOnOverlays(e, e => {
                    e.mount()
                }))
            }), t.map(e => {
                n[e] ? this._invokeOnOverlays(e, e => {
                    e.refresh()
                }) : (delete this._renderedPageMap[e], this._invokeOnOverlays(e, e => {
                    e.unmount()
                }))
            }), this._renderedPages = e
        }
        _invokeOnOverlays(e, t) {
            const n = this._pages[e];
            n && n.map(e => t(e))
        }
    }
    class w {
        constructor(e, t) {
            this._rows = e, this._cols = t, this._map = new Array(e).fill(null).map(() => new Array(t).fill(!1))
        }
        isLoaded(e, t) {
            return e >= this._rows || t >= this._cols || this._map[e][t]
        }
        set(e, t, n) {
            this._map[e][t] = n
        }
    }
    class _ {
        constructor(e) {
            this._levels = e;
            const t = this._urlsToTiles = {};
            e.forEach(e => {
                e.tiles.forEach(n => {
                    t[n.url] = {
                        zoomLevel: e.zoomLevel,
                        row: n.row,
                        col: n.col
                    }
                })
            }), this.clear()
        }
        clear() {
            const e = this._loadedByLevel = {};
            this._levels.forEach(t => {
                e[t.zoomLevel] = new w(t.rows, t.cols)
            })
        }
        getTiles(e) {
            const t = [],
                n = this._levels[0].zoomLevel,
                i = new w(this._levels[0].rows, this._levels[0].cols);
            let r;
            if (null === e) r = 0;
            else {
                const t = Math.ceil(e);
                r = function(e, t) {
                    const n = e.length;
                    for (let i = 0; i < n; i++)
                        if (t(e[i], i)) return i;
                    return -1
                }(this._levels, e => e.zoomLevel <= t)
            }
            this._levels.slice(0, r + 1).reverse().concat(this._levels.slice(r + 1)).forEach(e => {
                const r = this._loadedByLevel[e.zoomLevel];
                let s = e.tiles.filter(e => r.isLoaded(e.row, e.col));
                const o = Math.pow(2, n - e.zoomLevel);
                s = s.filter(e => {
                    let t = !1;
                    const n = e.row * o,
                        r = e.col * o;
                    for (let e = 0; e < o; e++)
                        for (let s = 0; s < o; s++) i.isLoaded(n + e, r + s) || (t = !0, i.set(n + e, r + s, !0));
                    return t
                }), t.push(s)
            }, this), t.reverse();
            const s = [];
            return t.forEach(e => {
                s.push.apply(s, e)
            }), s
        }
        updateFromCache(e) {
            this.clear(), this._levels.forEach(t => {
                const n = this._loadedByLevel[t.zoomLevel];
                t.tiles.forEach(t => {
                    e.has(t.url) && n.set(t.row, t.col, !0)
                })
            }, this)
        }
        updateWithLoadedUrls(e) {
            e.forEach(e => {
                const t = this._urlsToTiles[e];
                this._loadedByLevel[t.zoomLevel].set(t.row, t.col, !0)
            }, this)
        }
    }
    class E {
        constructor(e, t) {
            const n = function(e, t) {
                const n = null === t ? e.pageLayouts : function(e, t) {
                        const n = Math.pow(2, t - e.maxZoomLevel);
                        return e.pageLayouts.map(e => ({
                            dimensions: x(e.dimensions, n),
                            pages: e.pages.map(e => ({
                                index: e.index,
                                groupOffset: {
                                    top: Math.floor(e.groupOffset.top * n),
                                    left: Math.floor(e.groupOffset.left * n)
                                },
                                dimensions: x(e.dimensions, n)
                            }))
                        }))
                    }(e, t),
                    i = function(e, t) {
                        let n, i;
                        const r = e.padding.document;
                        e.verticallyOriented ? (n = "width", i = r.left + r.right) : (n = "height", i = r.top + r.bottom);
                        return i + t.reduce((e, t) => Math.max(t.dimensions[n], e), 0)
                    }(e, n);
                let r = e.verticallyOriented ? e.padding.document.top : e.padding.document.left;
                const s = [],
                    o = {
                        top: e.padding.page.top,
                        left: e.padding.page.left
                    };
                let a, c;
                n.forEach((t, n) => {
                    let a, c;
                    e.verticallyOriented ? (a = r, c = (i - t.dimensions.width) / 2) : (a = (i - t.dimensions.height) / 2, c = r);
                    const l = {
                        top: a,
                        bottom: a + o.top + t.dimensions.height,
                        left: c,
                        right: c + o.left + t.dimensions.width
                    };
                    s.push({
                        index: n,
                        dimensions: t.dimensions,
                        pages: t.pages,
                        region: l,
                        padding: o
                    }), r = e.verticallyOriented ? l.bottom : l.right
                }), e.verticallyOriented ? (a = r + o.top, c = i) : (a = i, c = r + o.left);
                return {
                    dimensions: {
                        height: a,
                        width: c
                    },
                    pageGroups: s
                }
            }(e, t);
            this.dimensions = n.dimensions, this.pageGroups = n.pageGroups, this._pageLookup = function(e) {
                const t = {};
                return e.forEach(e => {
                    e.pages.forEach(n => {
                        t[n.index] = {
                            index: n.index,
                            group: e,
                            dimensions: n.dimensions,
                            groupOffset: n.groupOffset
                        }
                    })
                }), t
            }(n.pageGroups)
        }
        getPageInfo(e) {
            return this._pageLookup[e] || null
        }
        getPageDimensions(e) {
            if (!this._pageLookup || !this._pageLookup[e]) return null;
            const t = S(this._pageLookup[e]);
            return {
                height: t.bottom - t.top,
                width: t.right - t.left
            }
        }
        getPageOffset(e, t) {
            const n = this.getPageRegion(e, t);
            return n ? {
                top: n.top,
                left: n.left
            } : null
        }
        getPageRegion(e, t) {
            const n = this._pageLookup[e];
            if (!n) return null;
            const i = S(n),
                r = n.group.padding;
            return t && t.includePadding ? {
                top: i.top + r.top,
                left: i.left + r.left,
                bottom: i.bottom,
                right: i.right
            } : {
                top: i.top,
                left: i.left,
                bottom: i.bottom + r.top,
                right: i.right
            }
        }
        getPageToViewportCenterOffset(e, t) {
            const n = t.left,
                i = t.right - t.left,
                r = this.getPageOffset(e),
                s = n - r.left + parseInt(i / 2, 10),
                o = t.top,
                a = t.bottom - t.top;
            return {
                x: s,
                y: o - r.top + parseInt(a / 2, 10)
            }
        }
    }

    function S(e) {
        const t = e.groupOffset.top + e.group.region.top,
            n = t + e.dimensions.height,
            i = e.groupOffset.left + e.group.region.left;
        return {
            top: t,
            bottom: n,
            left: i,
            right: i + e.dimensions.width
        }
    }

    function x(e, t) {
        return {
            height: Math.floor(e.height * t),
            width: Math.floor(e.width * t)
        }
    }
    const L = n(34)("diva:ImageCache");
    class k {
        constructor(e) {
            e = e || {
                maxKeys: 100
            }, this.maxKeys = e.maxKeys || 100, this._held = {}, this._urls = {}, this._lru = []
        }
        get(e) {
            const t = this._urls[e];
            return t ? t.img : null
        }
        has(e) {
            return !!this._urls[e]
        }
        put(e, t) {
            let n = this._urls[e];
            n ? (n.img = t, this._promote(n)) : (n = {
                img: t,
                url: e
            }, this._urls[e] = n, this._tryEvict(1), this._lru.unshift(n))
        }
        _promote(e) {
            const t = this._lru.indexOf(e);
            this._lru.splice(t, 1), this._lru.unshift(e)
        }
        _tryEvict(e) {
            const t = this.maxKeys - e;
            if (this._lru.length <= t) return;
            let n = this._lru.length - 1;
            for (;;) {
                const e = this._lru[n];
                if (!this._held[e.url] && (L("Evicting image %s", e.url), this._lru.splice(n, 1), delete this._urls[e.url], this._lru.length <= t)) break;
                if (0 === n) {
                    L.enabled && L("Cache overfull by %s (all entries are being held)", this._lru.length - t);
                    break
                }
                n--
            }
        }
        acquire(e) {
            this._held[e] = (this._held[e] || 0) + 1, this._promote(this._urls[e])
        }
        release(e) {
            this._held[e] > 1 ? this._held[e]-- : delete this._held[e], this._tryEvict(0)
        }
    }
    class C {
        constructor(e) {
            this._url = e.url, this._callback = e.load, this._errorCallback = e.error, this.timeoutTime = e.timeoutTime || 0, this._aborted = this._complete = !1, this._crossOrigin = e.settings.imageCrossOrigin, this.timeout = setTimeout(() => {
                this._image = new Image, this._image.crossOrigin = this._crossOrigin, this._image.onload = this._handleLoad.bind(this), this._image.onerror = this._handleError.bind(this), this._image.src = e.url
            }, this.timeoutTime)
        }
        abort() {
            clearTimeout(this.timeout), this._image && (this._image.onload = this._image.onerror = null, this._image.src = ""), this._aborted = !0
        }
        _handleLoad() {
            this._aborted ? console.error("ImageRequestHandler invoked on cancelled request for " + this._url) : this._complete ? console.error("ImageRequestHandler invoked on completed request for " + this._url) : (this._complete = !0, this._callback(this._image))
        }
        _handleError() {
            this._errorCallback(this._image)
        }
    }
    var I = {
        animate: function(e) {
            const t = e.duration,
                n = e.parameters,
                i = e.onUpdate,
                r = e.onEnd,
                s = A(),
                o = s + t,
                a = {},
                c = {},
                l = Object.keys(n);
            l.forEach(e => {
                const t = n[e];
                a[e] = function(e, t, n) {
                    return i => e + (t - e) * n(i)
                }(t.from, t.to, t.easing || P)
            });
            let u = requestAnimationFrame((function e() {
                const n = A();
                (function(e) {
                    l.forEach(t => {
                        c[t] = a[t](e)
                    })
                })(Math.min((n - s) / t, 1)), i(c), n < o ? u = requestAnimationFrame(e) : d({
                    interrupted: !1
                })
            }));
            return {
                cancel() {
                    null !== u && (cancelAnimationFrame(u), d({
                        interrupted: !0
                    }))
                }
            };

            function d(e) {
                u = null, r && r(e)
            }
        },
        easing: {
            linear: function(e) {
                return e
            },
            cubic: P
        }
    };
    let A;

    function P(e) {
        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
    }
    A = "undefined" != typeof performance && performance.now ? () => performance.now() : () => Date.now();
    class O {
        constructor(e, t) {
            this._viewport = e.viewport, this._outerElement = e.outerElement, this._documentElement = e.innerElement, this._settings = e.settings, this._hooks = t || {}, this._canvas = i("canvas", {
                class: "diva-viewer-canvas"
            }), this._ctx = this._canvas.getContext("2d"), this.layout = null, this._sourceResolver = null, this._renderedPages = null, this._config = null, this._zoomLevel = null, this._compositeImages = null, this._renderedTiles = null, this._animation = null, this._cache = new k, this._pendingRequests = {}
        }
        static getCompatibilityErrors() {
            return "undefined" != typeof HTMLCanvasElement ? null : ["Your browser lacks support for the ", i("pre", "canvas"), " element. Please upgrade your browser."]
        }
        load(e, t, n) {
            if (this._clearAnimation(), this._hooks.onViewWillLoad && this._hooks.onViewWillLoad(), this._sourceResolver = n, this._config = e, this._compositeImages = {}, this._setLayoutToZoomLevel(t.zoomLevel), !this.layout.getPageInfo(t.anchorPage)) throw new Error("invalid page: " + t.anchorPage);
            this._canvas.width === this._viewport.width && this._canvas.height === this._viewport.height || (this._canvas.width = this._viewport.width, this._canvas.height = this._viewport.height), this.goto(t.anchorPage, t.verticalOffset, t.horizontalOffset), this._canvas.parentNode !== this._outerElement && this._outerElement.insertBefore(this._canvas, this._outerElement.firstChild), this._hooks.onViewDidLoad && this._hooks.onViewDidLoad()
        }
        _setViewportPosition(e) {
            if (e.zoomLevel !== this._zoomLevel) {
                if (null === this._zoomLevel) throw new TypeError("The current view is not zoomable");
                if (null === e.zoomLevel) throw new TypeError("The current view requires a zoom level");
                this._setLayoutToZoomLevel(e.zoomLevel)
            }
            this._goto(e.anchorPage, e.verticalOffset, e.horizontalOffset)
        }
        _setLayoutToZoomLevel(e) {
            this.layout = new E(this._config, e), this._zoomLevel = e, s(this._documentElement, {
                style: {
                    height: this.layout.dimensions.height + "px",
                    width: this.layout.dimensions.width + "px"
                }
            }), this._viewport.setInnerDimensions(this.layout.dimensions)
        }
        adjust() {
            this._clearAnimation(), this._render(), this._hooks.onViewDidUpdate && this._hooks.onViewDidUpdate(this._renderedPages.slice(), null)
        }
        _render() {
            const e = [];
            this.layout.pageGroups.forEach(t => {
                if (!this._viewport.intersectsRegion(t.region)) return;
                const n = t.pages.filter((function(e) {
                    return this.isPageVisible(e.index)
                }), this).map(e => e.index);
                e.push.apply(e, n)
            }, this), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._paintOutline(e), e.forEach(e => {
                if (!this._compositeImages[e]) {
                    const t = this.layout.getPageInfo(e),
                        n = this._sourceResolver.getAllZoomLevelsForPage(t),
                        i = new _(n);
                    i.updateFromCache(this._cache), this._compositeImages[e] = i
                }
            }, this), this._initiateTileRequests(e);
            const t = T(this._renderedPages || [], e);
            t.removed.forEach(e => {
                delete this._compositeImages[e]
            }, this), this._renderedPages = e, this._paint(), this._hooks.onPageWillLoad && t.added.forEach(e => {
                this._hooks.onPageWillLoad(e)
            }, this)
        }
        _paint() {
            const e = [];
            this._renderedPages.forEach(t => {
                this._compositeImages[t].getTiles(this._zoomLevel).forEach(n => {
                    const i = B(n, this._zoomLevel);
                    this._isTileVisible(t, i) && (e.push(n.url), this._drawTile(t, i, this._cache.get(n.url)))
                })
            });
            const t = this._cache,
                n = T(this._renderedTiles || [], e);
            n.added.forEach(e => {
                t.acquire(e)
            }), n.removed.forEach(e => {
                t.release(e)
            }), n.removed && this._renderedPages.forEach(e => {
                this._compositeImages[e].updateFromCache(this._cache)
            }, this), this._renderedTiles = e
        }
        _paintOutline(e) {
            e.forEach(e => {
                let t = this.layout.getPageInfo(e),
                    n = this._getImageOffset(e),
                    i = Math.max(0, (this._viewport.width - this.layout.dimensions.width) / 2),
                    r = Math.max(0, (this._viewport.height - this.layout.dimensions.height) / 2),
                    s = n.left - this._viewport.left + i,
                    o = n.top - this._viewport.top + r,
                    a = s < 0 ? -s : 0,
                    c = o < 0 ? -o : 0,
                    l = Math.max(0, s),
                    u = Math.max(0, o),
                    d = t.dimensions.width - a,
                    h = t.dimensions.height - c;
                this._ctx.strokeStyle = "#AAA", this._ctx.strokeRect(l + .5, u + .5, d, h)
            })
        }
        _initiateTileRequests(e) {
            const t = {},
                n = (e, n) => {
                    const i = this._compositeImages[n];
                    t[e.url] = new C({
                        url: e.url,
                        timeoutTime: 250,
                        settings: this._settings,
                        load: t => {
                            delete this._pendingRequests[e.url], this._cache.put(e.url, t), i === this._compositeImages[n] ? (i.updateWithLoadedUrls([e.url]), this._isTileForSourceVisible(n, e) && this._paint()) : this._isTileForSourceVisible(n, e) && this._paint()
                        },
                        error: () => {
                            delete this._pendingRequests[e.url]
                        }
                    })
                };
            for (let i = 0; i < e.length; i++) {
                const r = e[i],
                    s = this._sourceResolver.getBestZoomLevelForPage(this.layout.getPageInfo(r)).tiles;
                for (let e = 0; e < s.length; e++) {
                    const i = s[e];
                    !this._cache.has(i.url) && this._isTileForSourceVisible(r, i) && (this._pendingRequests[i.url] ? (t[i.url] = this._pendingRequests[i.url], delete this._pendingRequests[i.url]) : n(i, r))
                }
            }
            for (const e in this._pendingRequests) this._pendingRequests[e].abort();
            this._pendingRequests = t
        }
        _drawTile(e, t, n) {
            let i = this._getTileToDocumentOffset(e, t),
                r = Math.max(0, (this._viewport.width - this.layout.dimensions.width) / 2),
                s = Math.max(0, (this._viewport.height - this.layout.dimensions.height) / 2),
                o = i.left - this._viewport.left + r,
                a = i.top - this._viewport.top + s,
                c = o < 0 ? -o : 0,
                l = a < 0 ? -a : 0,
                u = Math.max(0, o),
                d = Math.max(0, a),
                h = c / t.scaleRatio,
                f = l / t.scaleRatio,
                p = Math.min(t.dimensions.width, n.width * t.scaleRatio) - c,
                g = Math.min(t.dimensions.height, n.height * t.scaleRatio) - l,
                v = Math.max(1, Math.round(p)),
                m = Math.max(1, Math.round(g)),
                y = v / t.scaleRatio,
                b = m / t.scaleRatio;
            this._ctx.drawImage(n, h, f, y, b, u, d, v, m)
        }
        _isTileForSourceVisible(e, t) {
            return this._isTileVisible(e, B(t, this._zoomLevel))
        }
        _isTileVisible(e, t) {
            const n = this._getTileToDocumentOffset(e, t);
            return this._viewport.intersectsRegion({
                top: n.top,
                bottom: n.top + t.dimensions.height,
                left: n.left,
                right: n.left + t.dimensions.width
            })
        }
        _getTileToDocumentOffset(e, t) {
            const n = this._getImageOffset(e);
            return {
                top: n.top + t.offset.top,
                left: n.left + t.offset.left
            }
        }
        _getImageOffset(e) {
            return this.layout.getPageOffset(e, {
                includePadding: !0
            })
        }
        goto(e, t, n) {
            this._clearAnimation(), this._goto(e, t, n), this._hooks.onViewDidUpdate && this._hooks.onViewDidUpdate(this._renderedPages.slice(), e)
        }
        _goto(e, t, n) {
            const i = this.layout.getPageOffset(e),
                r = i.top + t - Math.round(this._viewport.height / 2),
                s = i.left + n - Math.round(this._viewport.width / 2);
            this._viewport.top = r, this._viewport.left = s, this._render()
        }
        transitionViewportPosition(e) {
            this._clearAnimation();
            const t = e.getPosition,
                n = this._hooks.onViewDidTransition;
            this._animation = I.animate({
                duration: e.duration,
                parameters: e.parameters,
                onUpdate: e => {
                    this._setViewportPosition(t(e)), this._hooks.onZoomLevelWillChange(e.zoomLevel), n && n()
                },
                onEnd: t => {
                    e.onEnd && e.onEnd(t), this._hooks.onViewDidUpdate && !t.interrupted && this._hooks.onViewDidUpdate(this._renderedPages.slice(), null)
                }
            })
        }
        _clearAnimation() {
            this._animation && (this._animation.cancel(), this._animation = null)
        }
        isPageVisible(e) {
            if (!this.layout) return !1;
            return !!this.layout.getPageInfo(e) && this._viewport.intersectsRegion(this.layout.getPageRegion(e))
        }
        getRenderedPages() {
            return this._renderedPages.slice()
        }
        destroy() {
            this._clearAnimation(), Object.keys(this._pendingRequests).forEach(e => {
                const t = this._pendingRequests[e];
                delete this._pendingRequests[e], t.abort()
            }, this), this._canvas.parentNode.removeChild(this._canvas)
        }
    }

    function B(e, t) {
        let n;
        return n = null === t ? 1 : Math.pow(2, t - e.zoomLevel), {
            sourceZoomLevel: e.zoomLevel,
            scaleRatio: n,
            row: e.row,
            col: e.col,
            dimensions: {
                width: e.dimensions.width * n,
                height: e.dimensions.height * n
            },
            offset: {
                left: e.offset.left * n,
                top: e.offset.top * n
            },
            url: e.url
        }
    }

    function T(e, t) {
        if (e === t) return {
            added: [],
            removed: []
        };
        const n = e.filter(e => -1 === t.indexOf(e));
        return {
            added: t.filter(t => -1 === e.indexOf(t)),
            removed: n
        }
    }

    function j(e, t) {
        const n = t.getMaxPageDimensions(e);
        return {
            width: Math.floor(n.width),
            height: Math.floor(n.height)
        }
    }

    function M(e) {
        return function(e) {
            const t = e.manifest,
                n = [];
            let i = null,
                r = [];
            const s = () => {
                for (let e = 0, t = r.length; e < t; e++) n.push([r[e]]);
                r = []
            };
            t.pages.forEach((o, a) => {
                const c = {
                    index: a,
                    dimensions: j(a, t),
                    paged: !t.paged || o.paged
                };
                (e.showNonPagedPages || c.paged) && (c.paged ? 0 === a || o.facingPages ? (n.push([c]), s()) : null === i ? i = c : (n.push([i, c]), i = null, s()) : r.push(c))
            }), null !== i && (n.push([i]), s());
            return n
        }(e).map(t => function(e, t) {
            const n = e.verticallyOriented;
            if (2 === t.length) return function(e, t, n) {
                const i = e.dimensions,
                    r = t.dimensions,
                    s = Math.max(i.height, r.height);
                let o, a, c;
                if (n) {
                    const e = Math.max(i.width, r.width);
                    o = 2 * e, a = e - i.width, c = e
                } else o = i.width + r.width, a = 0, c = i.width;
                return {
                    dimensions: {
                        height: s,
                        width: o
                    },
                    pages: [{
                        index: e.index,
                        dimensions: i,
                        groupOffset: {
                            top: 0,
                            left: a
                        }
                    }, {
                        index: t.index,
                        dimensions: r,
                        groupOffset: {
                            top: 0,
                            left: c
                        }
                    }]
                }
            }(t[0], t[1], n);
            const i = t[0],
                r = i.dimensions;
            let s;
            s = i.paged ? 0 === i.index && n ? r.width : 0 : n ? r.width / 2 : 0;
            const o = n && !e.manifest.pages[i.index].facingPages;
            return {
                dimensions: {
                    height: r.height,
                    width: o ? 2 * r.width : r.width
                },
                pages: [{
                    index: i.index,
                    groupOffset: {
                        top: 0,
                        left: s
                    },
                    dimensions: r
                }]
            }
        }(e, t))
    }

    function N(e) {
        const t = e.viewport.width,
            n = e.manifest,
            i = e.pagesPerRow,
            r = e.fixedHeightGrid,
            s = e.fixedPadding,
            o = e.showNonPagedPages,
            a = (t - s * (i + 1)) / i,
            c = a,
            l = r ? s + n.minRatio * a : s + n.maxRatio * a,
            u = [];
        let d = [];
        const h = {
            height: l,
            width: t
        };
        return n.pages.forEach((e, t) => {
            if (!o && n.paged && !e.paged) return;
            const a = (e => {
                const t = e.d[e.d.length - 1],
                    n = t.h / t.w;
                let i, o;
                return r ? (i = (l - s) / n, o = l - s) : (i = c, o = i * n), {
                    width: Math.round(i),
                    height: Math.round(o)
                }
            })(e);
            let f = Math.floor(d.length * (s + c) + s);
            r && (f += (c - a.width) / 2), d.push({
                index: t,
                dimensions: a,
                groupOffset: {
                    top: 0,
                    left: f
                }
            }), d.length === i && (u.push({
                dimensions: h,
                pages: d
            }), d = [])
        }), d.length > 0 && u.push({
            dimensions: h,
            pages: d
        }), u
    }

    function D(e) {
        if (e.inGrid) return N(R(e, ["manifest", "viewport", "pagesPerRow", "fixedHeightGrid", "fixedPadding", "showNonPagedPages"])); {
            const t = R(e, ["manifest", "verticallyOriented", "showNonPagedPages"]);
            return e.inBookLayout ? M(t) : function(e) {
                const t = e.manifest,
                    n = [];
                return t.pages.forEach((i, r) => {
                    if (!e.showNonPagedPages && t.paged && !i.paged) return;
                    const s = j(r, t);
                    n.push({
                        dimensions: s,
                        pages: [{
                            index: r,
                            groupOffset: {
                                top: 0,
                                left: 0
                            },
                            dimensions: s
                        }]
                    })
                }), n
            }(t)
        }
    }

    function R(e, t) {
        const n = {};
        return t.forEach((function(t) {
            n[t] = e[t]
        })), n
    }

    function q(e) {
        const t = {};
        return e.forEach(e => {
            ! function(e, t) {
                Object.keys(t).forEach(n => {
                    Object.defineProperty(e, n, {
                        get: () => t[n],
                        set: () => {
                            throw new TypeError("Cannot set settings." + n)
                        }
                    })
                })
            }(t, e)
        }), t
    }
    class V {
        constructor(e) {
            this.whitelistedKeys = e.whitelistedKeys || [], this.additionalProperties = e.additionalProperties || [], this.validations = e.validations
        }
        isValid(e, t, n) {
            let i = null;
            if (this.validations.some((t, n) => t.key === e && (i = n, !0)), null === i) return !0;
            const r = {};
            r[e] = t;
            const s = z(n, r, this);
            return !this._runValidation(i, t, s)
        }
        validate(e) {
            this._validateOptions({}, e)
        }
        getValidatedOptions(e, t) {
            const n = Object.assign({}, t);
            return this._validateOptions(e, n), n
        }
        _validateOptions(e, t) {
            const n = z(e, t, this);
            this._applyValidations(t, n)
        }
        _applyValidations(e, t) {
            this.validations.forEach((n, i) => {
                if (!e.hasOwnProperty(n.key)) return;
                const r = e[n.key],
                    s = this._runValidation(i, r, t);
                s && (s.warningSuppressed || function(e, t, n) {
                    console.warn("Invalid value for " + e + ": " + t + ". Using " + n + " instead.")
                }(n.key, r, s.value), e[n.key] = s.value)
            }, this)
        }
        _runValidation(e, t, n) {
            const i = this.validations[e];
            n.index = e;
            let r = !1;
            const s = {
                    suppressWarning: () => {
                        r = !0
                    }
                },
                o = i.validate(t, n.proxy, s);
            return void 0 === o || o === t ? null : {
                value: o,
                warningSuppressed: r
            }
        }
    }

    function z(e, t, n) {
        const i = {
                proxy: {},
                index: null
            },
            r = F.bind(null, e, t),
            s = {};
        return n.whitelistedKeys.forEach(e => {
            s[e] = {
                get: r.bind(null, e)
            }
        }), n.additionalProperties.forEach(e => {
            s[e.key] = {
                get: e.get
            }
        }), n.validations.forEach((e, t) => {
            s[e.key] = {
                get: () => {
                    if (t < i.index) return r(e.key);
                    const s = n.validations[i.index].key;
                    throw new TypeError("Cannot access setting " + e.key + " while validating " + s)
                }
            }
        }), Object.defineProperties(i.proxy, s), i
    }

    function F(e, t, n) {
        return n in t ? t[n] : e[n]
    }
    class H {
        constructor(e, t) {
            t = t || {}, this.intersectionTolerance = t.intersectionTolerance || 0, this.outer = e, this._top = this._left = this._width = this._height = this._innerDimensions = null, this.invalidate()
        }
        intersectsRegion(e) {
            return this.hasHorizontalOverlap(e) && this.hasVerticalOverlap(e)
        }
        hasVerticalOverlap(e) {
            const t = this.top - this.intersectionTolerance,
                n = this.bottom + this.intersectionTolerance;
            return $(e.top, t, n) || $(e.bottom, t, n) || e.top <= t && e.bottom >= n
        }
        hasHorizontalOverlap(e) {
            const t = this.left - this.intersectionTolerance,
                n = this.right + this.intersectionTolerance;
            return $(e.left, t, n) || $(e.right, t, n) || e.left <= t && e.right >= n
        }
        invalidate() {
            this._width = this.outer.clientWidth, this._height = this.outer.clientHeight, this._top = this.outer.scrollTop, this._left = this.outer.scrollLeft
        }
        setInnerDimensions(e) {
            this._innerDimensions = e, e && (this._top = Z(this._top, 0, e.height - this._height), this._left = Z(this._left, 0, e.width - this._width))
        }
    }

    function U(e, t) {
        const n = "_" + e,
            i = "scroll" + e.charAt(0).toUpperCase() + e.slice(1);
        return {
            get: function() {
                return this[n]
            },
            set: function(e) {
                let r;
                if (this._innerDimensions) {
                    r = Z(e, 0, this._innerDimensions[t] - this[t])
                } else r = W(e, 0);
                this[n] = this.outer[i] = r
            }
        }
    }

    function G(e) {
        return {
            get: function() {
                return this["_" + e]
            }
        }
    }

    function $(e, t, n) {
        return e >= t && e <= n
    }

    function Z(e, t, n) {
        return W(function(e, t) {
            return Math.min(e, t)
        }(e, n), t)
    }

    function W(e, t) {
        return Math.max(e, t)
    }
    Object.defineProperties(H.prototype, {
        top: U("top", "height"),
        left: U("left", "width"),
        width: G("width"),
        height: G("height"),
        bottom: {
            get: function() {
                return this._top + this._height
            }
        },
        right: {
            get: function() {
                return this._left + this._width
            }
        }
    });
    const K = n(34)("diva:ViewerCore");

    function Y() {
        return Y.counter++
    }
    Y.counter = 1;
    const J = [{
        key: "goDirectlyTo",
        validate: (e, t) => {
            if (e < 0 || e >= t.manifest.pages.length) return 0
        }
    }, {
        key: "minPagesPerRow",
        validate: e => Math.max(2, e)
    }, {
        key: "maxPagesPerRow",
        validate: (e, t) => Math.max(e, t.minPagesPerRow)
    }, {
        key: "pagesPerRow",
        validate: (e, t) => {
            if (e < t.minPagesPerRow || e > t.maxPagesPerRow) return t.maxPagesPerRow
        }
    }, {
        key: "maxZoomLevel",
        validate: (e, t, n) => {
            if (n.suppressWarning(), e < 0 || e > t.manifest.maxZoom) return t.manifest.maxZoom
        }
    }, {
        key: "minZoomLevel",
        validate: (e, t, n) => e > t.manifest.maxZoom ? (n.suppressWarning(), 0) : e < 0 || e > t.maxZoomLevel ? 0 : void 0
    }, {
        key: "zoomLevel",
        validate: (e, t, n) => e > t.manifest.maxZoom ? (n.suppressWarning(), 0) : e < t.minZoomLevel || e > t.maxZoomLevel ? t.minZoomLevel : void 0
    }];
    class X {
        constructor(e, t, n) {
            this.parentObject = e, this.publicInstance = n, this.viewerState = {
                currentPageIndices: [0],
                activePageIndex: 0,
                horizontalOffset: 0,
                horizontalPadding: 0,
                ID: null,
                initialKeyScroll: !1,
                initialSpaceScroll: !1,
                innerElement: null,
                innerObject: {},
                isActiveDiva: !0,
                isScrollable: !0,
                isZooming: !1,
                loaded: !1,
                manifest: null,
                mobileWebkit: !1,
                numPages: 0,
                oldZoomLevel: -1,
                options: t,
                outerElement: null,
                outerObject: {},
                pageOverlays: new b,
                pageTools: [],
                parentObject: this.parentObject,
                pendingManifestRequest: null,
                pluginInstances: [],
                renderer: null,
                resizeTimer: -1,
                scrollbarWidth: 0,
                selector: "",
                throbberTimeoutID: -1,
                toolbar: null,
                verticalOffset: 0,
                verticalPadding: 0,
                viewHandler: null,
                viewport: null,
                viewportElement: null,
                viewportObject: null,
                zoomDuration: 400
            }, this.settings = q([t, this.viewerState]);
            const r = Y();
            this.viewerState.ID = "diva-" + r + "-", this.viewerState.selector = this.settings.ID, Object.defineProperties(this.settings, {
                panelHeight: {
                    get: () => this.viewerState.viewport.height
                },
                panelWidth: {
                    get: () => this.viewerState.viewport.width
                }
            }), this.optionsValidator = new V({
                additionalProperties: [{
                    key: "manifest",
                    get: () => this.viewerState.manifest
                }],
                validations: J
            }), this.viewerState.scrollbarWidth = function() {
                let e = document.createElement("p");
                e.style.width = "100%", e.style.height = "200px";
                let t = document.createElement("div");
                t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
                let n = e.offsetWidth;
                t.style.overflow = "scroll";
                let i = e.offsetWidth;
                return n === i && (i = t.clientWidth), document.body.removeChild(t), n - i
            }(), this.viewerState.mobileWebkit = void 0 !== window.orientation, null === t.hashParamSuffix && (t.hashParamSuffix = 1 === r ? "" : r + "");
            const s = i("div", this.elemAttrs("inner", {
                    class: "diva-inner"
                })),
                o = i("div", this.elemAttrs("viewport"), s),
                a = i("div", this.elemAttrs("outer"), o, i("div", this.elemAttrs("throbber"), [i("div", {
                    class: "cube cube1"
                }), i("div", {
                    class: "cube cube2"
                }), i("div", {
                    class: "cube cube3"
                }), i("div", {
                    class: "cube cube4"
                }), i("div", {
                    class: "cube cube5"
                }), i("div", {
                    class: "cube cube6"
                }), i("div", {
                    class: "cube cube7"
                }), i("div", {
                    class: "cube cube8"
                }), i("div", {
                    class: "cube cube9"
                })]));
            this.viewerState.innerElement = s, this.viewerState.viewportElement = o, this.viewerState.outerElement = a, this.viewerState.innerObject = s, this.viewerState.viewportObject = o, this.viewerState.outerObject = a, this.settings.parentObject.append(a), this.viewerState.viewport = new H(this.viewerState.viewportElement, {
                intersectionTolerance: this.settings.viewportMargin
            }), this.boundScrollFunction = this.scrollFunction.bind(this), this.boundEscapeListener = this.escapeListener.bind(this), this.initPlugins(), this.handleEvents(), this.showThrobber()
        }
        isValidOption(e, t) {
            return this.optionsValidator.isValid(e, t, this.viewerState.options)
        }
        elemAttrs(e, t) {
            const n = {
                id: this.settings.ID + e,
                class: "diva-" + e
            };
            return t ? Object.assign(n, t) : n
        }
        getPageData(e, t) {
            return this.settings.manifest.pages[e].d[this.settings.zoomLevel][t]
        }
        clearViewer() {
            this.viewerState.viewport.top = 0, clearTimeout(this.viewerState.resizeTimer)
        }
        hasChangedOption(e, t) {
            return t in e && e[t] !== this.settings[t]
        }
        escapeListener(e) {
            27 === e.keyCode && this.publicInstance.leaveFullscreenMode()
        }
        reloadViewer(e) {
            const t = [];
            if (e = this.optionsValidator.getValidatedOptions(this.settings, e), this.hasChangedOption(e, "zoomLevel") && (this.viewerState.oldZoomLevel = this.settings.zoomLevel, this.viewerState.options.zoomLevel = e.zoomLevel, t.push(["ZoomLevelDidChange", e.zoomLevel])), this.hasChangedOption(e, "pagesPerRow") && (this.viewerState.options.pagesPerRow = e.pagesPerRow, t.push(["GridRowNumberDidChange", e.pagesPerRow])), this.hasChangedOption(e, "verticallyOriented") && (this.viewerState.options.verticallyOriented = e.verticallyOriented), this.hasChangedOption(e, "showNonPagedPages") && (this.viewerState.options.showNonPagedPages = e.showNonPagedPages), "goDirectlyTo" in e ? (this.viewerState.options.goDirectlyTo = e.goDirectlyTo, "verticalOffset" in e && (this.viewerState.verticalOffset = e.verticalOffset), "horizontalOffset" in e && (this.viewerState.horizontalOffset = e.horizontalOffset)) : this.viewerState.options.goDirectlyTo = this.settings.activePageIndex, (this.hasChangedOption(e, "inGrid") || this.hasChangedOption(e, "inBookLayout")) && ("inGrid" in e && (this.viewerState.options.inGrid = e.inGrid), "inBookLayout" in e && (this.viewerState.options.inBookLayout = e.inBookLayout), t.push(["ViewDidSwitch", this.settings.inGrid])), this.hasChangedOption(e, "inFullscreen") && (this.viewerState.options.inFullscreen = e.inFullscreen, this.prepareModeChange(e), t.push(["ModeDidSwitch", this.settings.inFullscreen])), this.clearViewer(), this.updateViewHandlerAndRendering(), this.viewerState.renderer) {
                const e = {
                        pageLayouts: D(this.settings),
                        padding: this.getPadding(),
                        maxZoomLevel: this.settings.inGrid ? null : this.viewerState.manifest.maxZoom,
                        verticallyOriented: this.settings.verticallyOriented || this.settings.inGrid
                    },
                    t = {
                        zoomLevel: this.settings.inGrid ? null : this.settings.zoomLevel,
                        anchorPage: this.settings.goDirectlyTo,
                        verticalOffset: this.viewerState.verticalOffset,
                        horizontalOffset: this.viewerState.horizontalOffset
                    },
                    n = this.getCurrentSourceProvider();
                if (K.enabled) {
                    const t = Object.keys(e).filter((function(e) {
                        return "pageLayouts" !== e && "padding" !== e
                    })).map((function(t) {
                        const n = e[t];
                        return t + ": " + JSON.stringify(n)
                    })).join(", ");
                    K("reload with %s", t)
                }
                this.viewerState.renderer.load(e, t, n)
            }
            return t.forEach(e => {
                this.publish.apply(this, e)
            }), !0
        }
        prepareModeChange(e) {
            const t = e.inFullscreen ? "add" : "remove";
            this.viewerState.outerObject.classList[t]("diva-fullscreen"), document.body.classList[t]("diva-hide-scrollbar"), this.settings.parentObject.classList[t]("diva-full-width");
            const n = this.settings.panelHeight,
                i = this.settings.panelWidth;
            if (this.viewerState.viewport.invalidate(), !this.viewerState.loaded && !this.settings.inGrid && !("verticalOffset" in e)) {
                const e = this.settings.panelHeight,
                    t = this.settings.panelWidth;
                this.viewerState.verticalOffset += (n - e) / 2, this.viewerState.horizontalOffset += (i - t) / 2
            }
            e.inFullscreen ? document.addEventListener("keyup", this.boundEscapeListener) : document.removeEventListener("keyup", this.boundEscapeListener)
        }
        updateViewHandlerAndRendering() {
            const e = this.settings.inGrid ? y : m;
            !this.viewerState.viewHandler || this.viewerState.viewHandler instanceof e || (this.viewerState.viewHandler.destroy(), this.viewerState.viewHandler = null), this.viewerState.viewHandler || (this.viewerState.viewHandler = new e(this)), this.viewerState.renderer || this.initializeRenderer()
        }
        initializeRenderer() {
            const e = O.getCompatibilityErrors();
            if (e) this.showError(e);
            else {
                const e = {
                        viewport: this.viewerState.viewport,
                        outerElement: this.viewerState.outerElement,
                        innerElement: this.viewerState.innerElement,
                        settings: this.settings
                    },
                    t = {
                        onViewWillLoad: () => {
                            this.viewerState.viewHandler.onViewWillLoad()
                        },
                        onViewDidLoad: () => {
                            this.updatePageOverlays(), this.viewerState.viewHandler.onViewDidLoad()
                        },
                        onViewDidUpdate: (e, t) => {
                            this.updatePageOverlays(), this.viewerState.viewHandler.onViewDidUpdate(e, t)
                        },
                        onViewDidTransition: () => {
                            this.updatePageOverlays()
                        },
                        onPageWillLoad: e => {
                            this.publish("PageWillLoad", e)
                        },
                        onZoomLevelWillChange: e => {
                            this.publish("ZoomLevelWillChange", e)
                        }
                    };
                this.viewerState.renderer = new O(e, t)
            }
        }
        getCurrentSourceProvider() {
            if (this.settings.inGrid) {
                const e = {
                    getAllZoomLevelsForPage: t => [e.getBestZoomLevelForPage(t)],
                    getBestZoomLevelForPage: e => ({
                        zoomLevel: 1,
                        rows: 1,
                        cols: 1,
                        tiles: [{
                            url: this.settings.manifest.getPageImageURL(e.index, {
                                width: e.dimensions.width
                            }),
                            zoomLevel: 1,
                            row: 0,
                            col: 0,
                            dimensions: e.dimensions,
                            offset: {
                                top: 0,
                                left: 0
                            }
                        }]
                    })
                };
                return e
            }
            const e = {
                width: this.settings.tileWidth,
                height: this.settings.tileHeight
            };
            return {
                getBestZoomLevelForPage: t => this.settings.manifest.getPageImageTiles(t.index, Math.ceil(this.settings.zoomLevel), e),
                getAllZoomLevelsForPage: t => {
                    const n = [],
                        i = this.viewerState.manifest.maxZoom;
                    for (let r = 0; r <= i; r++) n.push(this.settings.manifest.getPageImageTiles(t.index, r, e));
                    return n.reverse(), n
                }
            }
        }
        getPadding() {
            let e, t, n, i;
            return this.settings.inGrid ? (n = this.settings.fixedPadding, e = t = i = 0) : (e = this.settings.verticallyOriented ? this.viewerState.verticalPadding : 0, t = this.settings.verticallyOriented ? 0 : this.viewerState.horizontalPadding, n = this.settings.verticallyOriented ? 0 : this.viewerState.verticalPadding, i = this.settings.verticallyOriented ? this.viewerState.horizontalPadding : 0), {
                document: {
                    top: n,
                    bottom: n,
                    left: i,
                    right: i
                },
                page: {
                    top: e,
                    bottom: 0,
                    left: t,
                    right: 0
                }
            }
        }
        updatePageOverlays() {
            this.viewerState.pageOverlays.updateOverlays(this.viewerState.renderer.getRenderedPages())
        }
        handleZoom(e, t) {
            if (!this.isValidOption("zoomLevel", e)) return !1;
            if (this.viewerState.viewportObject.removeEventListener("scroll", this.boundScrollFunction), !t) {
                const e = this.viewerState.viewport,
                    n = this.viewerState.renderer.layout.getPageRegion(this.settings.activePageIndex);
                t = {
                    anchorPage: this.settings.activePageIndex,
                    offset: {
                        left: e.width / 2 - (n.left - e.left),
                        top: e.height / 2 - (n.top - e.top)
                    }
                }
            }
            const n = this.viewerState.renderer.layout.getPageRegion(t.anchorPage),
                i = n.left + t.offset.left - (this.settings.viewport.left + this.settings.viewport.width / 2),
                r = n.top + t.offset.top - (this.settings.viewport.top + this.settings.viewport.height / 2),
                s = (e, n) => {
                    const s = Math.pow(2, e - n),
                        o = t.offset.left * s - i,
                        a = t.offset.top * s - r;
                    return {
                        zoomLevel: e,
                        anchorPage: t.anchorPage,
                        verticalOffset: a,
                        horizontalOffset: o
                    }
                };
            this.viewerState.options.zoomLevel = e;
            let o = this.viewerState.oldZoomLevel;
            this.viewerState.oldZoomLevel = this.settings.zoomLevel;
            const a = s(e, o);
            this.viewerState.options.goDirectlyTo = a.anchorPage, this.viewerState.verticalOffset = a.verticalOffset, this.viewerState.horizontalOffset = a.horizontalOffset, this.viewerState.renderer.transitionViewportPosition({
                duration: this.settings.zoomDuration,
                parameters: {
                    zoomLevel: {
                        from: o,
                        to: e
                    }
                },
                getPosition: e => s(e.zoomLevel, o),
                onEnd: t => {
                    this.viewerState.viewportObject.addEventListener("scroll", this.boundScrollFunction), t.interrupted && (this.viewerState.oldZoomLevel = e)
                }
            });
            let c = document.getElementById(this.settings.selector + "zoom-in-button"),
                l = document.getElementById(this.settings.selector + "zoom-out-button");
            return c.disabled = !0, l.disabled = !0, setTimeout(() => {
                c.disabled = !1, l.disabled = !1
            }, this.settings.zoomDuration), this.publish("ZoomLevelDidChange", e), !0
        }
        getYOffset(e, t) {
            let n = void 0 === e ? this.settings.activePageIndex : e;
            return "center" === t || "centre" === t ? parseInt(this.getPageData(n, "h") / 2, 10) : "bottom" === t ? parseInt(this.getPageData(n, "h") - this.settings.panelHeight / 2, 10) : parseInt(this.settings.panelHeight / 2, 10)
        }
        getXOffset(e, t) {
            let n = void 0 === e ? this.settings.activePageIndex : e;
            return "left" === t ? parseInt(this.settings.panelWidth / 2, 10) : "right" === t ? parseInt(this.getPageData(n, "w") - this.settings.panelWidth / 2, 10) : parseInt(this.getPageData(n, "w") / 2, 10)
        }
        updatePanelSize() {
            return this.viewerState.viewport.invalidate(), this.viewerState.renderer && (this.updateOffsets(), this.viewerState.renderer.goto(this.settings.activePageIndex, this.viewerState.verticalOffset, this.viewerState.horizontalOffset)), !0
        }
        updateOffsets() {
            const e = this.viewerState.renderer.layout.getPageToViewportCenterOffset(this.settings.activePageIndex, this.viewerState.viewport);
            e && (this.viewerState.horizontalOffset = e.x, this.viewerState.verticalOffset = e.y)
        }
        bindMouseEvents() {
            this.viewerState.viewportObject.classList.add("dragscroll"), d.onDoubleClick(this.viewerState.viewportObject, (e, t) => {
                K("Double click at %s, %s", t.left, t.top), this.viewerState.viewHandler.onDoubleClick(e, t)
            })
        }
        onResize() {
            this.updatePanelSize(), clearTimeout(this.viewerState.resizeTimer), this.viewerState.resizeTimer = setTimeout(() => {
                const e = this.viewerState.renderer.layout.getPageToViewportCenterOffset(this.settings.activePageIndex, this.viewerState.viewport);
                e ? this.reloadViewer({
                    goDirectlyTo: this.settings.activePageIndex,
                    verticalOffset: e.y,
                    horizontalOffset: e.x
                }) : this.reloadViewer({
                    goDirectlyTo: this.settings.activePageIndex
                })
            }, 200)
        }
        bindTouchEvents() {
            this.settings.blockMobileMove && document.body.addEventListener("touchmove", e => (e.originalEvent.preventDefault(), !1)), d.onPinch(this.viewerState.viewportObject, (function(e, t, n, i) {
                K("Pinch %s at %s, %s", i - n, t.left, t.top), this.viewerState.viewHandler.onPinch(e, t, n, i)
            })), d.onDoubleTap(this.viewerState.viewportObject, (function(e, t) {
                K("Double tap at %s, %s", t.left, t.top), this.viewerState.viewHandler.onDoubleClick(e, t)
            }))
        }
        scrollFunction() {
            const e = this.viewerState.viewport.top,
                t = this.viewerState.viewport.left;
            let n;
            this.viewerState.viewport.invalidate();
            const i = this.viewerState.viewport.top,
                r = this.viewerState.viewport.left;
            n = this.settings.verticallyOriented || this.settings.inGrid ? i - e : r - t, this.viewerState.renderer.adjust();
            const s = this.settings.verticallyOriented || this.settings.inGrid ? i : r;
            this.publish("ViewerDidScroll", s), n > 0 ? this.publish("ViewerDidScrollDown", s) : n < 0 && this.publish("ViewerDidScrollUp", s), this.updateOffsets()
        }
        handleEvents() {
            this.viewerState.innerObject.addEventListener("mousedown", () => {
                this.viewerState.innerObject.classList.add("diva-grabbing")
            }), this.viewerState.innerObject.addEventListener("mouseup", () => {
                this.viewerState.innerObject.classList.remove("diva-grabbing")
            }), this.bindMouseEvents(), this.viewerState.viewportObject.addEventListener("scroll", this.boundScrollFunction);
            document.addEventListener("keydown.diva", e => {
                if (!this.viewerState.isActiveDiva) return !0;
                if (this.settings.enableSpaceScroll && !e.shiftKey && 32 === e.keyCode || this.settings.enableKeyScroll && 34 === e.keyCode) return this.viewerState.viewport.top += this.settings.panelHeight, !1;
                if (this.settings.enableSpaceScroll || 32 !== e.keyCode || e.preventDefault(), this.settings.enableKeyScroll) {
                    if (e.shiftKey || e.ctrlKey || e.metaKey) return !0;
                    switch (e.keyCode) {
                        case 33:
                            return this.viewerState.viewport.top -= this.settings.panelHeight, !1;
                        case 38:
                            return this.viewerState.viewport.top -= this.settings.arrowScrollAmount, !1;
                        case 40:
                            return this.viewerState.viewport.top += this.settings.arrowScrollAmount, !1;
                        case 37:
                            return this.viewerState.viewport.left -= this.settings.arrowScrollAmount, !1;
                        case 39:
                            return this.viewerState.viewport.left += this.settings.arrowScrollAmount, !1;
                        case 36:
                            return this.viewerState.viewport.top = 0, !1;
                        case 35:
                            return this.settings.verticallyOriented ? this.viewerState.viewport.top = 1 / 0 : this.viewerState.viewport.left = 1 / 0, !1;
                        default:
                            return !0
                    }
                }
                return !0
            }), u.Events.subscribe("ViewerDidTerminate", (function() {
                document.removeEventListener("keydown.diva")
            }), this.settings.ID), window.addEventListener("resize", this.onResize.bind(this), !1), u.Events.subscribe("ViewerDidTerminate", (function() {
                window.removeEventListener("resize", this.onResize, !1)
            }), this.settings.ID), "onorientationchange" in window && (window.addEventListener("orientationchange", this.onResize, !1), u.Events.subscribe("ViewerDidTerminate", (function() {
                window.removeEventListener("orientationchange", this.onResize, !1)
            }), this.settings.ID)), u.Events.subscribe("PanelSizeDidChange", this.updatePanelSize, this.settings.ID), u.Events.subscribe("ViewerDidTerminate", () => {
                this.viewerState.renderer && this.viewerState.renderer.destroy(), clearTimeout(this.viewerState.resizeTimer)
            }, this.settings.ID)
        }
        initPlugins() {
            if (!this.settings.hasOwnProperty("plugins")) return null;
            this.viewerState.pluginInstances = this.settings.plugins.map(e => {
                const t = new e(this);
                return t.isPageTool && this.viewerState.pageTools.push(t), t
            })
        }
        showThrobber() {
            this.hideThrobber(), this.viewerState.throbberTimeoutID = setTimeout(() => {
                let e = document.getElementById(this.settings.selector + "throbber");
                e && (e.style.display = "block")
            }, this.settings.throbberTimeout)
        }
        hideThrobber() {
            clearTimeout(this.viewerState.throbberTimeoutID);
            let e = document.getElementById(this.settings.selector + "throbber");
            e && (e.style.display = "none")
        }
        showError(e) {
            const t = i("div", this.elemAttrs("error"), [i("button", this.elemAttrs("error-close", {
                "aria-label": "Close dialog"
            })), i("p", i("strong", "Error")), i("div", e)]);
            this.viewerState.outerObject.appendChild(t), document.getElementById(this.settings.selector + "error-close").addEventListener("click", () => {
                t.parentNode.removeChild(t)
            })
        }
        setManifest(e, t) {
            if (this.viewerState.manifest = e, this.hideThrobber(), this.viewerState.numPages = this.settings.manifest.pages.length, this.optionsValidator.validate(this.viewerState.options), this.publish("NumberOfPagesDidChange", this.settings.numPages), this.settings.adaptivePadding > 0) {
                const e = Math.floor((this.settings.minZoomLevel + this.settings.maxZoomLevel) / 2);
                this.viewerState.horizontalPadding = parseInt(this.settings.manifest.getAverageWidth(e) * this.settings.adaptivePadding, 10), this.viewerState.verticalPadding = parseInt(this.settings.manifest.getAverageHeight(e) * this.settings.adaptivePadding, 10)
            } else this.viewerState.horizontalPadding = this.settings.fixedPadding, this.viewerState.verticalPadding = this.settings.fixedPadding;
            let n, r;
            this.viewerState.pageTools.length && (this.viewerState.verticalPadding = Math.max(40, this.viewerState.verticalPadding)), this.settings.manifest.paged && (this.viewerState.options.inBookLayout = !0), this.publish("ObjectDidLoad", this.settings), this.updatePanelSize();
            let s = !1,
                o = !1;
            if (null == t.goDirectlyTo ? (t.goDirectlyTo = this.settings.goDirectlyTo, n = r = !0) : (n = null == t.horizontalOffset || isNaN(t.horizontalOffset), r = null == t.verticalOffset || isNaN(t.verticalOffset)), n && (0 === t.goDirectlyTo && this.settings.inBookLayout && this.settings.verticallyOriented ? t.horizontalOffset = this.viewerState.horizontalPadding : (o = !0, t.horizontalOffset = this.getXOffset(t.goDirectlyTo, "center"))), r && (s = !0, t.verticalOffset = this.getYOffset(t.goDirectlyTo, "top")), this.reloadViewer(t), this.updatePanelSize(), this.settings.enableAutoTitle) {
                let e = document.getElementById(this.settings.selector + "title");
                e ? e.innerHTML = this.settings.manifest.itemTitle : this.settings.parentObject.insertBefore(i("div", this.elemAttrs("title"), [this.settings.manifest.itemTitle]), this.settings.parentObject.firstChild)
            }
            this.settings.verticallyOriented ? this.viewerState.innerElement.style.minWidth = this.settings.panelWidth + "px" : this.viewerState.innerElement.style.minHeight = this.settings.panelHeight + "px", (s || o) && (s && (this.viewerState.verticalOffset = this.getYOffset(this.settings.activePageIndex, "top")), o && (this.viewerState.horizontalOffset = this.getXOffset(this.settings.activePageIndex, "center")), this.viewerState.renderer.goto(this.settings.activePageIndex, this.viewerState.verticalOffset, this.viewerState.horizontalOffset)), this.viewerState.loaded = !0, this.publish("ViewerDidLoad", this.settings)
        }
        publish(e) {
            const t = Array.prototype.slice.call(arguments, 1);
            u.Events.publish(e, t, this.publicInstance)
        }
        getSettings() {
            return this.settings
        }
        getInternalState() {
            return this.viewerState
        }
        getPublicInstance() {
            return this.publicInstance
        }
        getPageTools() {
            return this.viewerState.pageTools
        }
        getCurrentLayout() {
            return this.viewerState.renderer ? this.viewerState.renderer.layout : null
        }
        getViewport() {
            const e = this.viewerState.viewport;
            return {
                top: e.top,
                left: e.left,
                bottom: e.bottom,
                right: e.right,
                width: e.width,
                height: e.height
            }
        }
        addPageOverlay(e) {
            this.viewerState.pageOverlays.addOverlay(e)
        }
        removePageOverlay(e) {
            this.viewerState.pageOverlays.removeOverlay(e)
        }
        getPageRegion(e, t) {
            const n = this.viewerState.renderer.layout,
                i = n.getPageRegion(e, t);
            if (t && t.incorporateViewport) {
                const e = this.settings.verticallyOriented ? "width" : "height";
                if (this.viewerState.viewport[e] > n.dimensions[e]) {
                    const t = (this.viewerState.viewport[e] - n.dimensions[e]) / 2;
                    return this.settings.verticallyOriented ? {
                        top: i.top,
                        bottom: i.bottom,
                        left: i.left + t,
                        right: i.right + t
                    } : {
                        top: i.top + t,
                        bottom: i.bottom + t,
                        left: i.left,
                        right: i.right
                    }
                }
            }
            return i
        }
        getPagePositionAtViewportOffset(e) {
            const t = e.left + this.viewerState.viewport.left,
                n = e.top + this.viewerState.viewport.top,
                i = this.viewerState.renderer.getRenderedPages(),
                r = i.length;
            for (let e = 0; e < r; e++) {
                const r = i[e],
                    s = this.viewerState.renderer.layout.getPageRegion(r);
                if (s.left <= t && s.right >= t && s.top <= n && s.bottom >= n) return {
                    anchorPage: r,
                    offset: {
                        left: t - s.left,
                        top: n - s.top
                    }
                }
            }
            const s = this.viewerState.renderer.layout.getPageRegion(this.settings.activePageIndex);
            return {
                anchorPage: this.settings.activePageIndex,
                offset: {
                    left: t - s.left,
                    top: n - s.top
                }
            }
        }
        setCurrentPages(e, t) {
            ! function(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0, i = e.length; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }(this.viewerState.currentPageIndices, t) ? (this.viewerState.currentPageIndices = t, this.viewerState.activePageIndex !== e && (this.viewerState.activePageIndex = e, this.publish("ActivePageDidChange", e)), this.publish("VisiblePageDidChange", t), this.viewerState.manifest.pages[e].otherImages.length > 0 && this.publish("VisiblePageHasAlternateViews", e)) : this.viewerState.activePageIndex !== e && (this.viewerState.activePageIndex = e, this.publish("ActivePageDidChange", e))
        }
        getPageName(e) {
            return this.viewerState.manifest.pages[e].f
        }
        reload(e) {
            this.reloadViewer(e)
        }
        zoom(e, t) {
            return this.handleZoom(e, t)
        }
        enableScrollable() {
            this.viewerState.isScrollable || (this.bindMouseEvents(), this.enableDragScrollable(), this.viewerState.options.enableKeyScroll = this.viewerState.initialKeyScroll, this.viewerState.options.enableSpaceScroll = this.viewerState.initialSpaceScroll, this.viewerState.viewportElement.style.overflow = "auto", this.viewerState.isScrollable = !0)
        }
        enableDragScrollable() {
            this.viewerState.viewportObject.hasAttribute("nochilddrag") && this.viewerState.viewportObject.removeAttribute("nochilddrag")
        }
        disableScrollable() {
            this.viewerState.isScrollable && (this.disableDragScrollable(), this.viewerState.outerObject.dblclick = null, this.viewerState.outerObject.contextmenu = null, this.viewerState.viewportElement.style.overflow = "hidden", this.viewerState.initialKeyScroll = this.settings.enableKeyScroll, this.viewerState.initialSpaceScroll = this.settings.enableSpaceScroll, this.viewerState.options.enableKeyScroll = !1, this.viewerState.options.enableSpaceScroll = !1, this.viewerState.isScrollable = !1)
        }
        disableDragScrollable() {
            this.viewerState.viewportObject.hasAttribute("nochilddrag") || this.viewerState.viewportObject.setAttribute("nochilddrag", "")
        }
        clear() {
            this.clearViewer()
        }
        setPendingManifestRequest(e) {
            this.viewerState.pendingManifestRequest = e
        }
        destroy() {
            this.publish("ViewerWillTerminate", this.settings), this.settings.pendingManifestRequest && this.settings.pendingManifestRequest.abort(), document.body.removeClass("diva-hide-scrollbar"), this.settings.parentObject.parent().empty().removeData("diva"), this.settings.parentObject.parent().removeAttr("style").removeAttr("class"), this.publish("ViewerDidTerminate", this.settings), u.Events.unsubscribeAll(this.settings.ID)
        }
    }

    function Q(e) {
        let t, n = e.label,
            i = "object" == typeof n ? n[Object.keys(n)[0]][0] : n,
            r = e.value;
        return t = Array.isArray(r) ? r.map(e => e[Object.keys(e)[0]]) : "object" == typeof r ? r[Object.keys(r)[0]] : r, Array.isArray(t) && (t = t.join(", ")), {
            label: i,
            value: t
        }
    }
    const ee = (e, t) => {
            const n = Math.max(e, t);
            return n < 128 ? 0 : Math.ceil(Math.log((n + 1) / 257) / Math.log(2))
        },
        te = (e, t) => e / Math.pow(2, t),
        ne = (e, t) => e.map(e => {
            const n = e.width,
                i = e.height,
                r = re(e),
                s = "/" !== r.url.slice(-1) ? r.url + "/" : r.url,
                o = new Array(t + 1);
            for (let e = 0; e < t + 1; e++) o[e] = {
                h: Math.floor(te(i, t - e)),
                w: Math.floor(te(n, t - e))
            };
            return {
                f: r.url,
                url: s,
                il: e.label || "",
                d: o
            }
        });

    function ie(e) {
        let t = e["@context"];
        if (!t) return console.error("Invalid IIIF Manifest; No @context found."), null;
        const n = (e => "http://iiif.io/api/presentation/2/context.json" === e || Array.isArray(e) && e.includes("http://iiif.io/api/presentation/2/context.json") ? 2 : Array.isArray(e) && e.includes("http://iiif.io/api/presentation/3/context.json") ? 3 : 2)(t),
            i = e.sequences ? e.sequences[0] : null,
            r = i ? i.canvases : e.items,
            s = r.length,
            o = new Array(r.length);
        let a, c, l, u, d, h, f, p, g, v, m, y, b, w, _, E, S, x = [],
            L = 100,
            k = 0,
            C = 100;
        for (let e = 0; e < s; e++) {
            const t = r[e],
                n = t.width,
                i = t.height,
                s = ee(n, i),
                o = i / n;
            k = Math.max(o, k), C = Math.min(o, C), L = Math.min(L, s)
        }
        const I = new Array(L + 1).fill(0),
            A = new Array(L + 1).fill(0),
            P = new Array(L + 1).fill(0),
            O = new Array(L + 1).fill(0);
        for (let e = 0; e < s; e++) {
            if (a = r[e], y = a["@id"] || a.id, b = a.label, c = a.images ? a.images[0].resource : a.items[0].items[0].body, x = [], "oa:Choice" === c["@type"] || "Choice" === c.type ? (l = c.default || c.items[0], u = c.item || c.items.slice(1), x = ne(u, L)) : l = c, g = a.width || l.width, v = a.height || l.height, g <= 0 || v <= 0) {
                console.warn("Invalid width or height for canvas " + b + ". Skipping");
                continue
            }
            m = ee(g, v), w = l.label || null, f = re(l), h = "/" !== f.url.slice(-1) ? f.url + "/" : f.url, d = l.service["@context"] || l.service.type, p = "http://iiif.io/api/image/2/context.json" === d || "ImageService2" === d ? 2 : "http://library.stanford.edu/iiif/image-api/1.1/context.json" === d ? 1.1 : 1, _ = new Array(L + 1);
            for (let e = 0; e < L + 1; e++) E = Math.floor(te(g, L - e)), S = Math.floor(te(v, L - e)), _[e] = {
                h: S,
                w: E
            }, I[e] += E, A[e] += S, P[e] = Math.max(E, P[e]), O[e] = Math.max(S, O[e]);
            let t = "non-paged" !== a.viewingHint || !!a.behavior && "non-paged" !== a.behavior[0],
                n = "facing-pages" === a.viewingHint || !!a.behavior && "facing-pages" === a.behavior[0];
            o[e] = {
                d: _,
                m: m,
                l: b,
                il: w,
                f: f.url,
                url: h,
                api: p,
                paged: t,
                facingPages: n,
                canvas: y,
                otherImages: x,
                xoffset: f.x || null,
                yoffset: f.y || null
            }
        }
        const B = new Array(L + 1),
            T = new Array(L + 1);
        for (let e = 0; e < L + 1; e++) B[e] = I[e] / s, T[e] = A[e] / s;
        const j = {
            a_wid: B,
            a_hei: T,
            max_w: P,
            max_h: O,
            max_ratio: k,
            min_ratio: C,
            t_hei: A,
            t_wid: I
        };
        return {
            version: n,
            item_title: Q(e).label,
            metadata: e.metadata || null,
            dims: j,
            max_zoom: L,
            pgs: o,
            paged: "paged" === e.viewingHint || !!e.behaviour && "paged" === e.behaviour[0] || !!i && "paged" === i.viewingHint
        }
    }

    function re(e) {
        let t = e["@id"] || e.id;
        const n = /#xywh=([0-9]+,[0-9]+,[0-9]+,[0-9]+)/;
        let i = "",
            r = !0;
        if (/\/([0-9]+,[0-9]+,[0-9]+,[0-9]+)\//.test(t)) {
            const e = t.split("/");
            i = e[e.length - 4]
        } else if (n.test(t)) {
            i = n.exec(t)[1]
        } else e.service && (e.service["@id"] || e.service.id) && (t = e.service["@id"] || e.service.id, r = !1);
        r && (t = t.split("/").slice(0, -4).join("/"));
        const s = {
            url: t
        };
        if (i.length) {
            const e = i.split(",");
            s.x = parseInt(e[0], 10), s.y = parseInt(e[1], 10), s.w = parseInt(e[2], 10), s.h = parseInt(e[3], 10)
        }
        return s
    }
    class se {
        getPageImageURL(e, t, n) {
            let i;
            i = !n || null == n.width && null == n.height ? "full" : (null == n.width ? "" : n.width) + "," + (null == n.height ? "" : n.height);
            const r = e.pages[t],
                s = r.api > 1.1 ? "default" : "native";
            return encodeURI(r.url + "full/" + i + "/0/" + s + ".jpg")
        }
        getTileImageURL(e, t, n) {
            const i = e.pages[t];
            let r, s;
            r = n.row === n.rowCount - 1 ? i.d[n.zoomLevel].h - (n.rowCount - 1) * n.tileDimensions.height : n.tileDimensions.height, s = n.col === n.colCount - 1 ? i.d[n.zoomLevel].w - (n.colCount - 1) * n.tileDimensions.width : n.tileDimensions.width;
            const o = Math.pow(2, e.maxZoom - n.zoomLevel);
            let a = n.col * n.tileDimensions.width * o,
                c = n.row * n.tileDimensions.height * o;
            i.hasOwnProperty("xoffset") && (a += i.xoffset, c += i.yoffset);
            const l = [a, c, s * o, r * o].join(","),
                u = i.api > 1.1 ? "default" : "native";
            return encodeURI(i.url + l + "/" + s + "," + r + "/0/" + u + ".jpg")
        }
    }
    class oe {
        constructor(e, t) {
            this.pages = e.pgs, this.maxZoom = e.max_zoom, this.maxRatio = e.dims.max_ratio, this.minRatio = e.dims.min_ratio, this.itemTitle = e.item_title, this.metadata = e.metadata, this.paged = !!e.paged, this._maxWidths = e.dims.max_w, this._maxHeights = e.dims.max_h, this._averageWidths = e.dims.a_wid, this._averageHeights = e.dims.a_hei, this._totalHeights = e.dims.t_hei, this._totalWidths = e.dims.t_wid, this._urlAdapter = t
        }
        static fromIIIF(e) {
            const t = ie(e);
            return new oe(t, new se)
        }
        isPageValid(e, t) {
            return !(!t && this.paged && !this.pages[e].paged) && (e >= 0 && e < this.pages.length)
        }
        getMaxPageDimensions(e) {
            const t = this.pages[e].d[this.maxZoom];
            return {
                height: t.h,
                width: t.w
            }
        }
        getPageDimensionsAtZoomLevel(e, t) {
            const n = this.pages[e].d[this.maxZoom],
                i = (r = this.maxZoom, s = t, 1 / Math.pow(2, r - s));
            var r, s;
            return {
                height: n.h * i,
                width: n.w * i
            }
        }
        getPageImageURL(e, t) {
            return this._urlAdapter.getPageImageURL(this, e, t)
        }
        getPageImageTiles(e, t, n) {
            const i = this.pages[e];
            if (!isFinite(t) || t % 1 != 0) throw new TypeError("Zoom level must be an integer: " + t);
            const r = Math.ceil(i.d[t].h / n.height),
                s = Math.ceil(i.d[t].w / n.width),
                o = [];
            let a, c, l;
            for (a = 0; a < r; a++)
                for (c = 0; c < s; c++) l = this._urlAdapter.getTileImageURL(this, e, {
                    row: a,
                    col: c,
                    rowCount: r,
                    colCount: s,
                    zoomLevel: t,
                    tileDimensions: n
                }), o.push({
                    row: a,
                    col: c,
                    zoomLevel: t,
                    dimensions: {
                        height: n.height,
                        width: n.width
                    },
                    offset: {
                        top: a * n.height,
                        left: c * n.width
                    },
                    url: l
                });
            return {
                zoomLevel: t,
                rows: r,
                cols: s,
                tiles: o
            }
        }
    }

    function ae(e) {
        return function(t) {
            return this[e][t]
        }
    }
    oe.prototype.getMaxWidth = ae("_maxWidths"), oe.prototype.getMaxHeight = ae("_maxHeights"), oe.prototype.getAverageWidth = ae("_averageWidths"), oe.prototype.getAverageHeight = ae("_averageHeights"), oe.prototype.getTotalWidth = ae("_totalWidths"), oe.prototype.getTotalHeight = ae("_totalHeights");
    class ce {
        constructor(e) {
            this.viewer = e, this.settings = e.settings
        }
        _elemAttrs(e, t) {
            const n = {
                id: this.settings.ID + e,
                class: "diva-" + e
            };
            return t ? Object.assign(n, t) : n
        }
        _subscribe(e, t) {
            u.Events.subscribe(e, t, this.settings.ID)
        }
        createButton(e, t, n, r) {
            const s = i("button", {
                type: "button",
                id: this.settings.ID + e,
                class: "diva-" + e + " diva-button",
                title: t,
                "aria-label": t
            });
            return r && s.appendChild(r), n && s.addEventListener("click", n), s
        }
        createLabel(e, t, n, r, s) {
            return i("div", {
                id: this.settings.ID + t,
                class: e + " diva-label"
            }, [n, i("span", {
                id: this.settings.ID + r
            }, s)])
        }
        createZoomButtons() {
            let e = this._createZoomOutIcon(),
                t = this._createZoomInIcon(),
                n = [this.createButton("zoom-out-button", "Zoom Out", () => {
                    this.viewer.setZoomLevel(this.settings.zoomLevel - 1)
                }, e), this.createButton("zoom-in-button", "Zoom In", () => {
                    this.viewer.setZoomLevel(this.settings.zoomLevel + 1)
                }, t), this.createLabel("diva-zoom-label", "zoom-label", "Zoom level: ", "zoom-level", this.settings.zoomLevel + 1)],
                r = function() {
                    document.getElementById(this.settings.ID + "zoom-level").textContent = this.settings.zoomLevel + 1
                };
            return this._subscribe("ZoomLevelDidChange", r), this._subscribe("ViewerDidLoad", r), i("div", {
                id: this.settings.ID + "zoom-controls",
                style: "display: none"
            }, n)
        }
        createGridControls() {
            let e = this._createGridMoreIcon(),
                t = this._createGridFewerIcon(),
                n = [this.createButton("grid-out-button", "Fewer", () => {
                    this.viewer.setGridPagesPerRow(this.settings.pagesPerRow - 1)
                }, t), this.createButton("grid-in-button", "More", () => {
                    this.viewer.setGridPagesPerRow(this.settings.pagesPerRow + 1)
                }, e), this.createLabel("diva-grid-label", "grid-label", "Pages per row: ", "pages-per-row", this.settings.pagesPerRow)];
            return this._subscribe("GridRowNumberDidChange", (function() {
                document.getElementById(this.settings.ID + "pages-per-row").textContent = this.settings.pagesPerRow
            })), i("div", {
                id: this.settings.ID + "grid-controls",
                style: "display:none"
            }, n)
        }
        createPageLabel() {
            const e = i("span", {
                    id: this.settings.ID + "current-page"
                }),
                t = () => {
                    let t = this.viewer.getCurrentPageIndices(),
                        n = t[0],
                        i = t[t.length - 1],
                        r = this.settings.manifest.pages[n].l,
                        s = this.settings.manifest.pages[i].l;
                    n !== i ? this.settings.enableIndexAsLabel ? e.textContent = n + " - " + i : e.textContent = r + " - " + s : this.settings.enableIndexAsLabel ? e.textContent = n : e.textContent = r
                };
            return this._subscribe("VisiblePageDidChange", t), this._subscribe("ViewerDidLoad", t), this._subscribe("ViewDidSwitch", t), i("span", {
                class: "diva-page-label diva-label"
            }, e)
        }
        createGotoPageForm() {
            const e = i("input", {
                    id: this.settings.ID + "goto-page-input",
                    class: "diva-input diva-goto-page-input",
                    autocomplete: "off",
                    type: "text",
                    "aria-label": "Page Input"
                }),
                t = i("input", {
                    id: this.settings.ID + "goto-page-submit",
                    class: "diva-button diva-button-text",
                    type: "submit",
                    value: "Go"
                }),
                n = i("div", {
                    id: this.settings.ID + "input-suggestions",
                    class: "diva-input-suggestions"
                }),
                r = i("form", {
                    id: this.settings.ID + "goto-page",
                    class: "diva-goto-form"
                }, e, t, n);
            var s, o, a;
            return r.addEventListener("submit", t => {
                t.preventDefault();
                const i = e.value;
                if (this.settings.onGotoSubmit && "function" == typeof this.settings.onGotoSubmit) {
                    const e = this.settings.onGotoSubmit(i);
                    this.viewer.gotoPageByIndex(e) || window.alert("No page could be found with that label or page number")
                } else this.viewer.gotoPageByLabel(i) || window.alert("No page could be found with that label or page number");
                return n.style.display = "none", !1
            }), ["input", "focus"].forEach(t => {
                e.addEventListener(t, () => {
                    n.innerHTML = "";
                    const t = e.value;
                    let r = 0;
                    if (this.settings.enableGotoSuggestions && t) {
                        const e = this.settings.manifest.pages;
                        for (let s = 0, o = e.length; s < o && r < 10; s++)
                            if (e[s].l.toLowerCase().indexOf(t.toLowerCase()) > -1) {
                                const t = i("div", {
                                    class: "diva-input-suggestion"
                                }, e[s].l);
                                n.appendChild(t), r++
                            }
                        r > 0 && (n.style.display = "block")
                    } else n.style.display = "none"
                })
            }), e.addEventListener("keydown", t => {
                let n;
                if (13 === t.keyCode) {
                    const t = document.getElementsByClassName("active")[0];
                    void 0 !== t && (e.value = t.innerText)
                }
                if (38 === t.keyCode) {
                    n = document.getElementsByClassName("active")[0];
                    const e = n ? n.previousSibling : void 0;
                    if (void 0 !== e) n.classList.remove("active"), null !== e && e.classList.add("active");
                    else {
                        let e = document.getElementsByClassName("diva-input-suggestion").length - 1;
                        document.getElementsByClassName("diva-input-suggestion")[e].classList.add("active")
                    }
                } else if (40 === t.keyCode) {
                    n = document.getElementsByClassName("active")[0];
                    const e = n ? n.nextSibling : void 0;
                    void 0 !== e ? (n.classList.remove("active"), null !== e && e.classList.add("active")) : document.getElementsByClassName("diva-input-suggestion")[0].classList.add("active")
                }
            }), s = "mousedown", o = ".diva-input-suggestion", a = function() {
                e.value = this.textContent, n.style.display = "none";
                let t = new Event("submit", {
                    cancelable: !0
                });
                r.dispatchEvent(t)
            }, n.addEventListener(s, (function(e) {
                for (var t = e.target; t && t !== this;) t.matches(o) && a.call(t, e), t = t.parentNode
            })), e.addEventListener("blur", () => {
                n.style.display = "none"
            }), r
        }
        createViewMenu() {
            const e = i("div", this._elemAttrs("view-options")),
                t = this._createGridViewIcon(),
                n = this._createBookViewIcon(),
                r = this._createPageViewIcon(),
                s = this.createButton("view-icon", "Change view", () => {
                    e.style.display = "none" === e.style.display ? "block" : "none"
                }),
                o = t => {
                    this.viewer.changeView(t), e.style.display = "none"
                },
                a = () => {
                    this.settings.inGrid ? (s.appendChild(t), s.className = "diva-grid-icon diva-view-icon diva-button") : this.settings.inBookLayout ? (s.appendChild(n), s.className = "diva-book-icon diva-view-icon diva-button") : (s.appendChild(r), s.className = "diva-document-icon diva-view-icon diva-button");
                    const i = document.createDocumentFragment();
                    for ((this.settings.inGrid || this.settings.inBookLayout) && i.appendChild(this.createButton("document-icon", "Document View", o.bind(null, "document"), r)), !this.settings.inGrid && this.settings.inBookLayout || i.appendChild(this.createButton("book-icon", "Book View", o.bind(null, "book"), n)), this.settings.inGrid || i.appendChild(this.createButton("grid-icon", "Grid View", o.bind(null, "grid"), t)); e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(i)
                };
            return document.addEventListener("mouseup", t => {
                e !== t.target && (e.style.display = "none")
            }), this._subscribe("ViewDidSwitch", a), this._subscribe("ObjectDidLoad", a), i("div", this._elemAttrs("view-menu"), s, e)
        }
        createFullscreenButton() {
            let e = this._createFullscreenIcon();
            return this.createButton("fullscreen-icon", "Toggle fullscreen mode", () => {
                this.viewer.toggleFullscreenMode()
            }, e)
        }
        toggleZoomGridControls() {
            this.settings.inGrid ? (document.getElementById(this.settings.ID + "zoom-controls").style.display = "none", document.getElementById(this.settings.ID + "grid-controls").style.display = "block") : (document.getElementById(this.settings.ID + "zoom-controls").style.display = "block", document.getElementById(this.settings.ID + "grid-controls").style.display = "none")
        }
        render() {
            this._subscribe("ViewDidSwitch", this.toggleZoomGridControls), this._subscribe("ObjectDidLoad", this.toggleZoomGridControls);
            let e = [this.createZoomButtons(), this.createGridControls()],
                t = [this.createPageLabel(), this.createViewMenu()];
            this.settings.enableFullscreen && t.push(this.createFullscreenButton()), this.settings.enableGotoPage && t.splice(1, 0, this.createGotoPageForm());
            let n = this.viewer.viewerState.pluginInstances;
            for (let i = 0, s = n.length; i < s; i++) {
                let s = n[i];
                s.toolbarSide && (s.toolbarIcon = s.createIcon(), s.toolbarIcon && ("right" === s.toolbarSide ? t.splice(2, 0, s.toolbarIcon) : "left" === s.toolbarSide && e.splice(2, 0, s.toolbarIcon), s.toolbarIcon.addEventListener("click", r.bind(this, s))))
            }

            function r(e) {
                e.handleClick(this.viewer)
            }
            const s = i("div", this._elemAttrs("tools"), i("div", this._elemAttrs("tools-left"), e), i("div", this._elemAttrs("tools-right"), t));
            this.settings.toolbarParentObject.insertBefore(s, this.settings.toolbarParentObject.firstChild)
        }
        _createToolbarIcon(e) {
            let t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttributeNS(null, "viewBox", "0 0 25 25"), t.setAttributeNS(null, "x", "0px"), t.setAttributeNS(null, "y", "0px"), t.setAttributeNS(null, "style", "enable-background:new 0 0 48 48;");
            let n = document.createElementNS("http://www.w3.org/2000/svg", "g");
            return n.setAttributeNS(null, "transform", "matrix(1, 0, 0, 1, -12, -12)"), e.forEach(e => {
                let t = document.createElementNS("http://www.w3.org/2000/svg", "path");
                t.setAttributeNS(null, "d", e), n.appendChild(t)
            }), t.appendChild(n), t
        }
        _createZoomOutIcon() {
            return this._createToolbarIcon(["M19.5,23c-0.275,0-0.5-0.225-0.5-0.5v-1c0-0.275,0.225-0.5,0.5-0.5h7c0.275,0,0.5,0.225,0.5,0.5v1c0,0.275-0.225,0.5-0.5,0.5H19.5z", "M37.219,34.257l-2.213,2.212c-0.202,0.202-0.534,0.202-0.736,0l-6.098-6.099c-1.537,0.993-3.362,1.577-5.323,1.577c-5.431,0-9.849-4.418-9.849-9.849c0-5.431,4.418-9.849,9.849-9.849c5.431,0,9.849,4.418,9.849,9.849c0,1.961-0.584,3.786-1.576,5.323l6.098,6.098C37.422,33.722,37.422,34.054,37.219,34.257z M29.568,22.099c0-3.706-3.014-6.72-6.72-6.72c-3.706,0-6.72,3.014-6.72,6.72c0,3.706,3.014,6.72,6.72,6.72C26.555,28.818,29.568,25.805,29.568,22.099z"])
        }
        _createZoomInIcon() {
            return this._createToolbarIcon(["M37.469,34.257l-2.213,2.212c-0.202,0.202-0.534,0.202-0.736,0l-6.098-6.099c-1.537,0.993-3.362,1.577-5.323,1.577c-5.431,0-9.849-4.418-9.849-9.849c0-5.431,4.418-9.849,9.849-9.849c5.431,0,9.849,4.418,9.849,9.849c0,1.961-0.584,3.786-1.576,5.323l6.098,6.098C37.672,33.722,37.672,34.054,37.469,34.257z M29.818,22.099c0-3.706-3.014-6.72-6.72-6.72c-3.706,0-6.72,3.014-6.72,6.72c0,3.706,3.014,6.72,6.72,6.72C26.805,28.818,29.818,25.805,29.818,22.099z M26.5,21H24v-2.5c0-0.275-0.225-0.5-0.5-0.5h-1c-0.275,0-0.5,0.225-0.5,0.5V21h-2.5c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5H22v2.5c0,0.275,0.225,0.5,0.5,0.5h1c0.275,0,0.5-0.225,0.5-0.5V23h2.5c0.275,0,0.5-0.225,0.5-0.5v-1C27,21.225,26.775,21,26.5,21z"])
        }
        _createGridMoreIcon() {
            return this._createToolbarIcon(["M29.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z"])
        }
        _createGridFewerIcon() {
            return this._createToolbarIcon(["M25.5,35c-0.275,0-0.5-0.225-0.5-0.5v-9c0-0.275,0.225-0.5,0.5-0.5h9c0.275,0,0.5,0.225,0.5,0.5v9c0,0.275-0.225,0.5-0.5,0.5H25.5z M22.5,35c0.275,0,0.5-0.225,0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5h-9c-0.275,0-0.5,0.225-0.5,0.5v9c0,0.275,0.225,0.5,0.5,0.5H22.5z M34.5,23c0.275,0,0.5-0.225,0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5h-9c-0.275,0-0.5,0.225-0.5,0.5v9c0,0.275,0.225,0.5,0.5,0.5H34.5z M22.5,23c0.275,0,0.5-0.225,0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5h-9c-0.275,0-0.5,0.225-0.5,0.5v9c0,0.275,0.225,0.5,0.5,0.5H22.5z"])
        }
        _createGridViewIcon() {
            return this._createToolbarIcon(["M29.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z"])
        }
        _createBookViewIcon() {
            return this._createToolbarIcon(["M35,16.8v-1.323c0,0-2.292-1.328-5.74-1.328c-3.448,0-5.26,1.25-5.26,1.25s-1.813-1.25-5.26-1.25c-3.448,0-5.74,1.328-5.74,1.328V16.8l-1,0.531v0.021v15.687c0,0,4.531-1.578,6.999-1.578c2.468,0,5.001,0.885,5.001,0.885s2.532-0.885,5-0.885c0.306,0,0.643,0.024,1,0.066v4.325l1.531-2.016L33,35.852v-3.72c2,0.43,3,0.906,3,0.906V17.352v-0.021L35,16.8z M23,29.03c-1-0.292-2.584-0.679-3.981-0.679c-2.246,0-3.019,0.404-4.019,0.699V16.634c0,0,1.125-0.699,4.019-0.699c1.694,0,2.981,0.417,3.981,1.126V29.03z M33,29.051c-1-0.295-1.773-0.699-4.02-0.699c-1.396,0-2.981,0.387-3.98,0.679V17.06c1-0.709,2.286-1.126,3.98-1.126c2.895,0,4.02,0.699,4.02,0.699V29.051z"])
        }
        _createPageViewIcon() {
            return this._createToolbarIcon(["M29.425,29h4.47L29,33.934v-4.47C29,29.19,29.151,29,29.425,29z M34,14.563V28h-5.569C28.157,28,28,28.196,28,28.47V34H14.497C14.223,34,14,33.71,14,33.437V14.563C14,14.29,14.223,14,14.497,14h18.9C33.672,14,34,14.29,34,14.563z M25.497,26.497C25.497,26.223,25.275,26,25,26h-7c-0.275,0-0.497,0.223-0.497,0.497v1.006C17.503,27.777,17.725,28,18,28h7c0.275,0,0.497-0.223,0.497-0.497V26.497z M30.497,22.497C30.497,22.223,30.275,22,30,22H18c-0.275,0-0.497,0.223-0.497,0.497v1.006C17.503,23.777,17.725,24,18,24h12c0.275,0,0.497-0.223,0.497-0.497V22.497z M30.497,18.497C30.497,18.223,30.275,18,30,18H18c-0.275,0-0.497,0.223-0.497,0.497v1.006C17.503,19.777,17.725,20,18,20h12c0.275,0,0.497-0.223,0.497-0.497V18.497z"])
        }
        _createFullscreenIcon() {
            return this._createToolbarIcon(["M35,12H13c-0.55,0-1,0.45-1,1v22c0,0.55,0.45,1,1,1h22c0.55,0,1-0.45,1-1V13C36,12.45,35.55,12,35,12z M34,34H14V14h20V34z", "M17,21.75v-4.5c0-0.138,0.112-0.25,0.25-0.25h4.5c0.138,0,0.17,0.08,0.073,0.177l-1.616,1.616l1.823,1.823c0.097,0.097,0.097,0.256,0,0.354l-1.061,1.06c-0.097,0.097-0.256,0.097-0.354,0l-1.823-1.823l-1.616,1.616C17.08,21.92,17,21.888,17,21.75z M20.97,25.97c-0.097-0.097-0.256-0.097-0.354,0l-1.823,1.823l-1.616-1.616C17.08,26.08,17,26.112,17,26.25v4.5c0,0.138,0.112,0.25,0.25,0.25h4.5c0.138,0,0.17-0.08,0.073-0.177l-1.616-1.616l1.823-1.823c0.097-0.097,0.097-0.256,0-0.354L20.97,25.97z M30.75,17h-4.5c-0.138,0-0.17,0.08-0.073,0.177l1.616,1.616l-1.823,1.823c-0.097,0.097-0.097,0.256,0,0.354l1.061,1.06c0.097,0.097,0.256,0.097,0.354,0l1.823-1.823l1.616,1.616C30.92,21.92,31,21.888,31,21.75v-4.5C31,17.112,30.888,17,30.75,17z M30.823,26.177l-1.616,1.616l-1.823-1.823c-0.097-0.097-0.256-0.097-0.354,0l-1.061,1.06c-0.097,0.097-0.097,0.256,0,0.354l1.823,1.823l-1.616,1.616C26.08,30.92,26.112,31,26.25,31h4.5c0.138,0,0.25-0.112,0.25-0.25v-4.5C31,26.112,30.92,26.08,30.823,26.177z M26,22.5c0-0.275-0.225-0.5-0.5-0.5h-3c-0.275,0-0.5,0.225-0.5,0.5v3c0,0.275,0.225,0.5,0.5,0.5h3c0.275,0,0.5-0.225,0.5-0.5V22.5z"])
        }
    }
    var le = {
        get: ue,
        update: function(e, t) {
            const n = ue(e),
                i = window.location.hash;
            if (n !== t)
                if ("string" == typeof n) {
                    const r = i.indexOf("&" + e + "=") > 0 ? i.indexOf("&" + e + "=") : i.indexOf("#" + e + "="),
                        s = r + e.length + 2 + n.length,
                        o = 0 === r ? "#" : "&";
                    window.location.replace(i.substring(0, r) + o + e + "=" + t + i.substring(s))
                } else 0 === i.length ? window.location.replace("#" + e + "=" + t) : window.location.replace(i + "&" + e + "=" + t)
        }
    };

    function ue(e) {
        const t = window.location.hash;
        if ("" !== t) {
            let n = t.indexOf("&" + e + "=") > 0 ? t.indexOf("&" + e + "=") : t.indexOf("#" + e + "=");
            if (n >= 0) {
                n += e.length + 2;
                const i = t.indexOf("&", n);
                return i > n ? decodeURIComponent(t.substring(n, i)) : i < 0 ? decodeURIComponent(t.substring(n)) : ""
            }
            return !1
        }
        return !1
    }
    class de {
        constructor(e, t) {
            if (!(e instanceof HTMLElement) && (this.element = document.getElementById(e), null === this.element)) throw new a;
            if (!t.objectData) throw new l("You must supply either a URL or a literal object to the `objectData` key.");
            this.options = Object.assign({
                adaptivePadding: .05,
                arrowScrollAmount: 40,
                blockMobileMove: !1,
                objectData: "",
                enableAutoTitle: !0,
                enableFilename: !0,
                enableFullscreen: !0,
                enableGotoPage: !0,
                enableGotoSuggestions: !0,
                enableGridIcon: !0,
                enableGridControls: "buttons",
                enableImageTitles: !0,
                enableIndexAsLabel: !1,
                enableKeyScroll: !0,
                enableLinkIcon: !0,
                enableNonPagedVisibilityIcon: !0,
                enableSpaceScroll: !1,
                enableToolbar: !0,
                enableZoomControls: "buttons",
                fillParentHeight: !0,
                fixedPadding: 10,
                fixedHeightGrid: !0,
                goDirectlyTo: 0,
                hashParamSuffix: null,
                imageCrossOrigin: "anonymous",
                inFullscreen: !1,
                inBookLayout: !1,
                inGrid: !1,
                maxPagesPerRow: 8,
                maxZoomLevel: -1,
                minPagesPerRow: 2,
                minZoomLevel: 0,
                onGotoSubmit: null,
                pageAliases: {},
                pageAliasFunction: function() {
                    return !1
                },
                pageLoadTimeout: 200,
                pagesPerRow: 5,
                requestHeaders: {
                    Accept: "application/json"
                },
                showNonPagedPages: !1,
                throbberTimeout: 100,
                tileHeight: 256,
                tileWidth: 256,
                toolbarParentObject: null,
                verticallyOriented: !0,
                viewportMargin: 200,
                zoomLevel: 2
            }, t);
            const n = i("div", {
                class: "diva-wrapper" + (this.options.fillParentHeight ? " diva-wrapper-flexbox" : "")
            });
            this.element.appendChild(n), this.options.toolbarParentObject = this.options.toolbarParentObject || n;
            const r = new X(n, this.options, this);
            this.viewerState = r.getInternalState(), this.settings = r.getSettings(), this.toolbar = this.settings.enableToolbar ? new ce(this) : null, n.id = this.settings.ID + "wrapper", this.divaState = {
                viewerCore: r,
                toolbar: this.toolbar
            };
            let s = u.Events.subscribe("ObjectDidLoad", () => {
                null !== this.toolbar && this.toolbar.render(), u.Events.unsubscribe(s)
            });
            this.hashState = this._getHashParamState(), this._loadOrFetchObjectData()
        }
        _loadOrFetchObjectData() {
            if ("object" == typeof this.settings.objectData) setTimeout(() => {
                this._loadObjectData(this.settings.objectData, this.hashState)
            }, 0);
            else {
                const e = fetch(this.settings.objectData, {
                    headers: this.settings.requestHeaders
                }).then(e => {
                    if (!e.ok) {
                        u.Events.publish("ManifestFetchError", [e], this), this._ajaxError(e);
                        let t = new Error(e.statusText);
                        throw t.response = e, t
                    }
                    return e.json()
                }).then(e => {
                    this._loadObjectData(e, this.hashState)
                });
                this.divaState.viewerCore.setPendingManifestRequest(e)
            }
        }
        _showError(e) {
            this.divaState.viewerCore.showError(e)
        }
        _ajaxError(e) {
            const t = ["Invalid objectData setting. Error code: " + e.status + " " + e.statusText];
            if (0 === this.settings.objectData.lastIndexOf("http", 0)) {
                const e = this.settings.objectData.replace(/https?:\/\//i, "").split(/[/?#]/)[0];
                window.location.hostname !== e && t.push(i("p", "Attempted to access cross-origin data without CORS."), i("p", "You may need to update your server configuration to support CORS. For help, see the ", i("a", {
                    href: "https://github.com/DDMAL/diva.js/wiki/Installation#a-note-about-cross-site-requests",
                    target: "_blank"
                }, "cross-site request documentation.")))
            }
            this._showError(t)
        }
        _loadObjectData(e, t) {
            let n;
            if (!e.hasOwnProperty("@context") && (-1 === e["@context"].indexOf("iiif") || -1 === e["@context"].indexOf("shared-canvas"))) throw new c("This does not appear to be a IIIF Manifest.");
            u.Events.publish("ManifestDidLoad", [e], this), n = oe.fromIIIF(e);
            const i = t ? this._getLoadOptionsForState(t, n) : {};
            this.divaState.viewerCore.setManifest(n, i)
        }
        _getHashParamState() {
            const e = {};
            return ["f", "v", "z", "n", "i", "p", "y", "x"].forEach(t => {
                const n = le.get(t + this.settings.hashParamSuffix);
                !1 !== n && (e[t] = n)
            }), "true" === e.f ? e.f = !0 : "false" === e.f && (e.f = !1), ["z", "n", "p", "x", "y"].forEach(t => {
                t in e && (e[t] = parseInt(e[t], 10))
            }), e
        }
        _getLoadOptionsForState(e, t) {
            t = t || this.settings.manifest;
            const n = "v" in e ? this._getViewState(e.v) : {};
            "f" in e && (n.inFullscreen = e.f), "z" in e && (n.zoomLevel = e.z), "n" in e && (n.pagesPerRow = e.n);
            let i = this._getPageIndexForManifest(t, e.i);
            if (i >= 0 && i < t.pages.length || (i = e.p - 1, i >= 0 && i < t.pages.length || (i = null)), null !== i) {
                const t = parseInt(e.x, 10),
                    r = parseInt(e.y, 10);
                n.goDirectlyTo = i, n.horizontalOffset = t, n.verticalOffset = r
            }
            return n
        }
        _getViewState(e) {
            switch (e) {
                case "d":
                    return {
                        inGrid: !1,
                        inBookLayout: !1
                    };
                case "b":
                    return {
                        inGrid: !1,
                        inBookLayout: !0
                    };
                case "g":
                    return {
                        inGrid: !0,
                        inBookLayout: !1
                    };
                default:
                    return {}
            }
        }
        _getPageIndexForManifest(e, t) {
            let n;
            const i = e.pages.length;
            for (n = 0; n < i; n++)
                if (e.pages[n].f === t) return n;
            return -1
        }
        _getState() {
            let e;
            e = this.settings.inGrid ? "g" : this.settings.inBookLayout ? "b" : "d";
            const t = this.divaState.viewerCore.getCurrentLayout().getPageToViewportCenterOffset(this.settings.activePageIndex, this.viewerState.viewport);
            return {
                f: this.settings.inFullscreen,
                v: e,
                z: this.settings.zoomLevel,
                n: this.settings.pagesPerRow,
                i: !!this.settings.enableFilename && this.settings.manifest.pages[this.settings.activePageIndex].f,
                p: !this.settings.enableFilename && this.settings.activePageIndex + 1,
                y: !!t && t.y,
                x: !!t && t.x
            }
        }
        _getURLHash() {
            const e = this._getState(),
                t = [];
            let n;
            for (n in e) !1 !== e[n] && t.push(n + this.settings.hashParamSuffix + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }
        _getPageIndex(e) {
            return this._getPageIndexForManifest(this.settings.manifest, e)
        }
        _checkLoaded() {
            return !!this.viewerState.loaded || (console.warn("The viewer is not completely initialized. This is likely because it is still downloading data. To fix this, only call this function if the isReady() method returns true."), !1)
        }
        _toggleFullscreen() {
            let e;
            this._reloadViewer({
                inFullscreen: !this.settings.inFullscreen
            });
            let t = !1,
                n = document.getElementById(this.settings.selector + "tools");

            function i() {
                n.style.opacity = 1, clearTimeout(e), !t && this.settings.inFullscreen && (e = setTimeout((function() {
                    n.style.opacity = 0
                }), 2e3))
            }
            this.settings.inFullscreen ? (n.classList.add("diva-fullscreen-tools"), document.addEventListener("mousemove", i.bind(this)), document.getElementsByClassName("diva-viewport")[0].addEventListener("scroll", i.bind(this)), n.addEventListener("mouseenter", (function() {
                t = !0
            })), n.addEventListener("mouseleave", (function() {
                t = !1
            }))) : n.classList.remove("diva-fullscreen-tools")
        }
        _togglePageLayoutOrientation() {
            const e = !this.settings.verticallyOriented;
            return this._reloadViewer({
                inGrid: !1,
                verticallyOriented: e,
                goDirectlyTo: this.settings.activePageIndex,
                verticalOffset: this.divaState.viewerCore.getYOffset(),
                horizontalOffset: this.divaState.viewerCore.getXOffset()
            }), e
        }
        _changeView(e) {
            switch (e) {
                case "document":
                    return this._reloadViewer({
                        inGrid: !1,
                        inBookLayout: !1
                    });
                case "book":
                    return this._reloadViewer({
                        inGrid: !1,
                        inBookLayout: !0
                    });
                case "grid":
                    return this._reloadViewer({
                        inGrid: !0
                    });
                default:
                    return !1
            }
        }
        _gotoPageByIndex(e, t, n) {
            let i = parseInt(e, 10);
            if (this._isPageIndexValid(i)) {
                const e = this.divaState.viewerCore.getXOffset(i, t),
                    r = this.divaState.viewerCore.getYOffset(i, n);
                return this.viewerState.renderer.goto(i, r, e), !0
            }
            return !1
        }
        _isPageIndexValid(e) {
            return this.settings.manifest.isPageValid(e, this.settings.showNonPagedPages)
        }
        _getPageIndexForPageXYValues(e, t) {
            const n = this.viewerState.outerElement.getBoundingClientRect(),
                i = n.top,
                r = n.left,
                s = n.bottom,
                o = n.right;
            if (e < r || e > o) return -1;
            if (t < i || t > s) return -1;
            const a = document.getElementsByClassName("diva-page");
            let c = a.length;
            for (; c--;) {
                const n = a[c],
                    i = n.getBoundingClientRect();
                if (!(e < i.left || e > i.right) && !(t < i.top || t > i.bottom)) return n.getAttribute("data-index")
            }
            return -1
        }
        _reloadViewer(e) {
            return this.divaState.viewerCore.reload(e)
        }
        _getCurrentURL() {
            return location.protocol + "//" + location.host + location.pathname + location.search + "#" + this._getURLHash()
        }
        activate() {
            this.viewerState.isActiveDiva = !0
        }
        changeObject(e) {
            this.viewerState.loaded = !1, this.divaState.viewerCore.clear(), this.viewerState.renderer && this.viewerState.renderer.destroy(), this.viewerState.options.objectData = e, this._loadOrFetchObjectData()
        }
        changeView(e) {
            this._changeView(e)
        }
        deactivate() {
            this.viewerState.isActiveDiva = !1
        }
        destroy() {
            this.divaState.viewerCore.destroy()
        }
        disableScrollable() {
            this.divaState.viewerCore.disableScrollable()
        }
        enableScrollable() {
            this.divaState.viewerCore.enableScrollable()
        }
        disableDragScrollable() {
            this.divaState.viewerCore.disableDragScrollable()
        }
        enableDragScrollable() {
            this.divaState.viewerCore.enableDragScrollable()
        }
        enterFullscreenMode() {
            return !this.settings.inFullscreen && (this._toggleFullscreen(), !0)
        }
        enterGridView() {
            return !this.settings.inGrid && (this._changeView("grid"), !0)
        }
        getAllPageURIs() {
            return this.settings.manifest.pages.map(e => e.f)
        }
        getCurrentCanvas() {
            return this.settings.manifest.pages[this.settings.activePageIndex].canvas
        }
        getCurrentPageDimensionsAtCurrentZoomLevel() {
            return this.getPageDimensionsAtCurrentZoomLevel(this.settings.activePageIndex)
        }
        getCurrentPageFilename() {
            return console.warn("This method will be deprecated in the next version of Diva. Please use getCurrentPageURI instead."), this.settings.manifest.pages[this.settings.activePageIndex].f
        }
        getCurrentPageIndices() {
            return this.settings.currentPageIndices
        }
        getActivePageIndex() {
            return this.settings.activePageIndex
        }
        getCurrentPageOffset() {
            return this.getPageOffset(this.settings.activePageIndex)
        }
        getCurrentPageURI() {
            return this.settings.manifest.pages[this.settings.activePageIndex].f
        }
        getCurrentURL() {
            return this._getCurrentURL()
        }
        getFilenames() {
            return console.warn("This will be removed in the next version of Diva. Use getAllPageURIs instead."), this.settings.manifest.pages.map(e => e.f)
        }
        getGridPagesPerRow() {
            return this.settings.pagesPerRow
        }
        getInstanceId() {
            return this.settings.ID
        }
        getInstanceSelector() {
            return this.divaState.viewerCore.selector
        }
        getItemTitle() {
            return this.settings.manifest.itemTitle
        }
        getMaxZoomLevel() {
            return this.settings.maxZoomLevel
        }
        getMaxZoomLevelForPage(e) {
            return !!this._checkLoaded() && this.settings.manifest.pages[e].m
        }
        getMinZoomLevel() {
            return this.settings.minZoomLevel
        }
        getNumberOfPages() {
            return !!this._checkLoaded() && this.settings.numPages
        }
        getOtherImages(e) {
            return this.settings.manifest.pages[e].otherImages
        }
        getPageDimensions(e) {
            return this._checkLoaded() ? this.divaState.viewerCore.getCurrentLayout().getPageDimensions(e) : null
        }
        getPageDimensionsAtCurrentZoomLevel(e) {
            let t = parseInt(e, 10);
            if (!this._isPageIndexValid(t)) throw new Error("Invalid Page Index");
            return this.divaState.viewerCore.getCurrentLayout().getPageDimensions(t)
        }
        getPageDimensionsAtZoomLevel(e, t) {
            if (!this._checkLoaded()) return !1;
            t > this.settings.maxZoomLevel && (t = this.settings.maxZoomLevel);
            const n = this.settings.manifest.pages[parseInt(e, 10)].d[parseInt(t, 10)];
            return {
                width: n.w,
                height: n.h
            }
        }
        getPageImageURL(e, t) {
            return this.settings.manifest.getPageImageURL(e, t)
        }
        getPageIndexForPageXYValues(e, t) {
            return this._getPageIndexForPageXYValues(e, t)
        }
        getPageOffset(e, t) {
            const n = this.divaState.viewerCore.getPageRegion(e, t);
            return {
                top: n.top,
                left: n.left
            }
        }
        getSettings() {
            return this.settings
        }
        getState() {
            return this._getState()
        }
        getZoomLevel() {
            return this.settings.zoomLevel
        }
        gotoPageByIndex(e, t, n) {
            return this._gotoPageByIndex(e, t, n)
        }
        gotoPageByLabel(e, t, n) {
            const i = this.settings.manifest.pages;
            let r = e.toLowerCase();
            for (let e = 0, s = i.length; e < s; e++)
                if (i[e].l.toLowerCase().indexOf(r) > -1) return this._gotoPageByIndex(e, t, n);
            const s = parseInt(e, 10) - 1;
            return this._gotoPageByIndex(s, t, n)
        }
        gotoPageByName(e, t, n) {
            console.warn("This method will be removed in the next version of Diva.js. Use gotoPageByURI instead.");
            const i = this._getPageIndex(e);
            return this._gotoPageByIndex(i, t, n)
        }
        gotoPageByURI(e, t, n) {
            const i = this._getPageIndex(e);
            return this._gotoPageByIndex(i, t, n)
        }
        hasOtherImages(e) {
            return !0 === this.settings.manifest.pages[e].otherImages
        }
        hideNonPagedPages() {
            this._reloadViewer({
                showNonPagedPages: !1
            })
        }
        isInFullscreen() {
            return this.settings.inFullscreen
        }
        isPageIndexValid(e) {
            return this._isPageIndexValid(e)
        }
        isPageInViewport(e) {
            return this.viewerState.renderer.isPageVisible(e)
        }
        isReady() {
            return this.viewerState.loaded
        }
        isRegionInViewport(e, t, n, i, r) {
            const s = this.divaState.viewerCore.getCurrentLayout();
            if (!s) return !1;
            const o = s.getPageOffset(e),
                a = o.top + n,
                c = o.left + t;
            return this.viewerState.viewport.intersectsRegion({
                top: a,
                bottom: a + r,
                left: c,
                right: c + i
            })
        }
        isVerticallyOriented() {
            return this.settings.verticallyOriented
        }
        leaveFullscreenMode() {
            return !!this.settings.inFullscreen && (this._toggleFullscreen(), !0)
        }
        leaveGridView() {
            return !!this.settings.inGrid && (this._reloadViewer({
                inGrid: !1
            }), !0)
        }
        setGridPagesPerRow(e) {
            return !!this.divaState.viewerCore.isValidOption("pagesPerRow", e) && this._reloadViewer({
                inGrid: !0,
                pagesPerRow: e
            })
        }
        setState(e) {
            this._reloadViewer(this._getLoadOptionsForState(e))
        }
        setZoomLevel(e) {
            return this.settings.inGrid && this._reloadViewer({
                inGrid: !1
            }), this.divaState.viewerCore.zoom(e)
        }
        showNonPagedPages() {
            this._reloadViewer({
                showNonPagedPages: !0
            })
        }
        toggleFullscreenMode() {
            this._toggleFullscreen()
        }
        toggleNonPagedPagesVisibility() {
            this._reloadViewer({
                showNonPagedPages: !this.settings.showNonPagedPages
            })
        }
        toggleOrientation() {
            return this._togglePageLayoutOrientation()
        }
        translateFromMaxZoomLevel(e) {
            const t = this.settings.maxZoomLevel - this.settings.zoomLevel;
            return e / Math.pow(2, t)
        }
        translateToMaxZoomLevel(e) {
            const t = this.settings.maxZoomLevel - this.settings.zoomLevel;
            return 0 === t ? e : e * Math.pow(2, t)
        }
        zoomIn() {
            return this.setZoomLevel(this.settings.zoomLevel + 1)
        }
        zoomOut() {
            return this.setZoomLevel(this.settings.zoomLevel - 1)
        }
    }
    de.Events = u.Events;
    var he;
    t.default = de;
    "undefined" != typeof window && ((he = window).Diva = he.Diva || de)
}]);
//# sourceMappingURL=editor.js.map