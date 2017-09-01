function replySomeone(e) {
    var t = $("#comment-content"),
        n = t.val();
    prefix = "@" + e + " ";
    var i = "";
    i = n.length > 0 ? n + "\n" + prefix : prefix, t.focus(), t.val(i), moveEnd(t)
}
if (!
        function (e, t) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            function n(e) {
                var t = !!e && "length" in e && e.length,
                    n = oe.type(e);
                return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function i(e, t, n) {
                if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
                    return !!t.call(e, i, e) !== n
                });
                if (t.nodeType) return oe.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (ge.test(t)) return oe.filter(t, e, n);
                    t = oe.filter(t, e)
                }
                return oe.grep(e, function (e) {
                    return J.call(t, e) > -1 !== n
                })
            }

            function r(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function o(e) {
                var t = {};
                return oe.each(e.match(xe) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function s() {
                K.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
            }

            function a() {
                this.expando = oe.expando + a.uid++
            }

            function l(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Ee, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? oe.parseJSON(n) : n)
                    } catch (r) {
                    }
                    Ne.set(e, t, n)
                } else n = void 0;
                return n
            }

            function c(e, t, n, i) {
                var r, o = 1,
                    s = 20,
                    a = i ?
                        function () {
                            return i.cur()
                        } : function () {
                        return oe.css(e, t, "")
                    }, l = a(), c = n && n[3] || (oe.cssNumber[t] ? "" : "px"), u = (oe.cssNumber[t] || "px" !== c && +l) && Ae.exec(oe.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3], n = n || [], u = +l || 1;
                    do o = o || ".5", u /= o, oe.style(e, t, u + c);
                    while (o !== (o = a() / l) && 1 !== o && --s)
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }

            function u(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
            }

            function d(e, t) {
                for (var n = 0, i = e.length; i > n; n++) Te.set(e[n], "globalEval", !t || Te.get(t[n], "globalEval"))
            }

            function p(e, t, n, i, r) {
                for (var o, s, a, l, c, p, f = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++) if (o = e[g], o || 0 === o) if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (Oe.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (De.exec(o) || ["", ""])[1].toLowerCase(), l = je[a] || je._default, s.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], p = l[0]; p--;) s = s.lastChild;
                    oe.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
                } else h.push(t.createTextNode(o));
                for (f.textContent = "", g = 0; o = h[g++];) if (i && oe.inArray(o, i) > -1) r && r.push(o);
                else if (c = oe.contains(o.ownerDocument, o), s = u(f.appendChild(o), "script"), c && d(s), n) for (p = 0; o = s[p++];) Me.test(o.type || "") && n.push(o);
                return f
            }

            function f() {
                return !0
            }

            function h() {
                return !1
            }

            function g() {
                try {
                    return K.activeElement
                } catch (e) {
                }
            }

            function m(e, t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (a in t) m(e, a, n, i, t[a], o);
                    return e
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
                else if (!r) return e;
                return 1 === o && (s = r, r = function (e) {
                    return oe().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = oe.guid++)), e.each(function () {
                    oe.event.add(this, t, r, i, n)
                })
            }

            function v(e, t) {
                return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function b(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function y(e) {
                var t = Ue.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function w(e, t) {
                var n, i, r, o, s, a, l, c;
                if (1 === t.nodeType) {
                    if (Te.hasData(e) && (o = Te.access(e), s = Te.set(t, o), c = o.events)) {
                        delete s.handle, s.events = {};
                        for (r in c) for (n = 0, i = c[r].length; i > n; n++) oe.event.add(t, r, c[r][n])
                    }
                    Ne.hasData(e) && (a = Ne.access(e), l = oe.extend({}, a), Ne.set(t, l))
                }
            }

            function x(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function k(e, t, n, i) {
                t = Y.apply([], t);
                var r, o, s, a, l, c, d = 0,
                    f = e.length,
                    h = f - 1,
                    g = t[0],
                    m = oe.isFunction(g);
                if (m || f > 1 && "string" == typeof g && !ie.checkClone && He.test(g)) return e.each(function (r) {
                    var o = e.eq(r);
                    m && (t[0] = g.call(this, r, o.html())), k(o, t, n, i)
                });
                if (f && (r = p(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                    for (s = oe.map(u(r, "script"), b), a = s.length; f > d; d++) l = r, d !== h && (l = oe.clone(l, !0, !0), a && oe.merge(s, u(l, "script"))), n.call(e[d], l, d);
                    if (a) for (c = s[s.length - 1].ownerDocument, oe.map(s, y), d = 0; a > d; d++) l = s[d], Me.test(l.type || "") && !Te.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(We, "")))
                }
                return e
            }

            function _(e, t, n) {
                for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(u(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
                return e
            }

            function C(e, t) {
                var n = oe(t.createElement(e)).appendTo(t.body),
                    i = oe.css(n[0], "display");
                return n.detach(), i
            }

            function T(e) {
                var t = K,
                    n = Xe[e];
                return n || (n = C(e, t), "none" !== n && n || (Ve = (Ve || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), n = C(e, t), Ve.detach()), Xe[e] = n), n
            }

            function N(e, t, n) {
                var i, r, o, s, a = e.style;
                return n = n || Ze(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !ie.pixelMarginRight() && Ke.test(s) && Qe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
            }

            function S(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function E(e) {
                if (e in it) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;) if (e = nt[n] + t, e in it) return e
            }

            function $(e, t, n) {
                var i = Ae.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function A(e, t, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += oe.css(e, n + Le[o], !0, r)), i ? ("content" === n && (s -= oe.css(e, "padding" + Le[o], !0, r)), "margin" !== n && (s -= oe.css(e, "border" + Le[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + Le[o], !0, r), "padding" !== n && (s += oe.css(e, "border" + Le[o] + "Width", !0, r)));
                return s
            }

            function L(e, t, n) {
                var i = !0,
                    r = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = Ze(e),
                    s = "border-box" === oe.css(e, "boxSizing", !1, o);
                if (0 >= r || null == r) {
                    if (r = N(e, t, o), (0 > r || null == r) && (r = e.style[t]), Ke.test(r)) return r;
                    i = s && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
                }
                return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
            }

            function I(e, t) {
                for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = Te.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ie(i) && (o[s] = Te.access(i, "olddisplay", T(i.nodeName)))) : (r = Ie(i), "none" === n && r || Te.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
                for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
                return e
            }

            function q(e, t, n, i, r) {
                return new q.prototype.init(e, t, n, i, r)
            }

            function D() {
                return e.setTimeout(function () {
                    rt = void 0
                }), rt = oe.now()
            }

            function M(e, t) {
                var n, i = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Le[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function j(e, t, n) {
                for (var i, r = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, t, e)) return i
            }

            function O(e, t, n) {
                var i, r, o, s, a, l, c, u, d = this,
                    p = {},
                    f = e.style,
                    h = e.nodeType && Ie(e),
                    g = Te.get(e, "fxshow");
                n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function () {
                    d.always(function () {
                        a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), u = "none" === c ? Te.get(e, "olddisplay") || T(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (i in t) if (r = t[i], st.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    p[i] = g && g[i] || oe.style(e, i)
                } else c = void 0;
                if (oe.isEmptyObject(p))"inline" === ("none" === c ? T(e.nodeName) : c) && (f.display = c);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = Te.access(e, "fxshow", {}), o && (g.hidden = !h), h ? oe(e).show() : d.done(function () {
                        oe(e).hide()
                    }), d.done(function () {
                        var t;
                        Te.remove(e, "fxshow");
                        for (t in p) oe.style(e, t, p[t])
                    });
                    for (i in p) s = j(h ? g[i] : 0, i, d), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function R(e, t) {
                var n, i, r, o, s;
                for (n in e) if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
            }

            function B(e, t, n) {
                var i, r, o = 0,
                    s = B.prefilters.length,
                    a = oe.Deferred().always(function () {
                        delete l.elem
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var t = rt || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                        return a.notifyWith(e, [c, o, n]), 1 > o && l ? n : (a.resolveWith(e, [c]), !1)
                    },
                    c = a.promise({
                        elem: e,
                        props: oe.extend({}, t),
                        opts: oe.extend(!0, {
                            specialEasing: {},
                            easing: oe.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: rt || D(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function (t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; i > n; n++) c.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (R(u, c.opts.specialEasing); s > o; o++) if (i = B.prefilters[o].call(c, e, u, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
                return oe.map(u, j, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function F(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function P(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0,
                        o = t.toLowerCase().match(xe) || [];
                    if (oe.isFunction(n)) for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function z(e, t, n, i) {
                function r(a) {
                    var l;
                    return o[a] = !0, oe.each(e[a] || [], function (e, a) {
                        var c = a(t, n, i);
                        return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                    }), l
                }

                var o = {},
                    s = e === Nt;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }

            function H(e, t) {
                var n, i, r = oe.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && oe.extend(!0, e, i), e
            }

            function U(e, t, n) {
                for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                     "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i) for (r in a) if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
                if (l[0] in n) o = l[0];
                else {
                    for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                            o = r;
                            break
                        }
                        s || (s = r)
                    }
                    o = o || s
                }
                return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
            }

            function W(e, t, n, i) {
                var r, o, s, a, l, c = {},
                    u = e.dataTypes.slice();
                if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
                    if (s = c[l + " " + o] || c["* " + o], !s) for (r in c) if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    }
                    if (s !== !0) if (s && e["throws"]) t = s(t);
                    else try {
                            t = s(t)
                        } catch (d) {
                            return {
                                state: "parsererror",
                                error: s ? d : "No conversion from " + l + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function V(e, t, n, i) {
                var r;
                if (oe.isArray(t)) oe.each(t, function (t, r) {
                    n || At.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                });
                else if (n || "object" !== oe.type(t)) i(e, t);
                else for (r in t) V(e + "[" + r + "]", t[r], n, i)
            }

            function X(e) {
                return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var Q = [],
                K = e.document,
                Z = Q.slice,
                Y = Q.concat,
                G = Q.push,
                J = Q.indexOf,
                ee = {},
                te = ee.toString,
                ne = ee.hasOwnProperty,
                ie = {},
                re = "2.2.4",
                oe = function (e, t) {
                    return new oe.fn.init(e, t)
                },
                se = /^[\s﻿ ]+|[\s﻿ ]+$/g,
                ae = /^-ms-/,
                le = /-([\da-z])/gi,
                ce = function (e, t) {
                    return t.toUpperCase()
                };
            oe.fn = oe.prototype = {
                jquery: re,
                constructor: oe,
                selector: "",
                length: 0,
                toArray: function () {
                    return Z.call(this)
                },
                get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
                },
                pushStack: function (e) {
                    var t = oe.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e) {
                    return oe.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(oe.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(Z.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: G,
                sort: Q.sort,
                splice: Q.splice
            }, oe.extend = oe.fn.extend = function () {
                var e, t, n, i, r, o, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(c, o, i)) : void 0 !== i && (s[t] = i));
                return s
            }, oe.extend({
                expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {
                },
                isFunction: function (e) {
                    return "function" === oe.type(e)
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                    return null != e && e === e.window
                },
                isNumeric: function (e) {
                    var t = e && e.toString();
                    return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function (e) {
                    var t;
                    if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                    if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                    for (t in e);
                    return void 0 === t || ne.call(e, t)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
                },
                globalEval: function (e) {
                    var t, n = eval;
                    e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function (e) {
                    return e.replace(ae, "ms-").replace(le, ce)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t) {
                    var i, r = 0;
                    if (n(e)) for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
                    else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(se, "")
                },
                makeArray: function (e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : J.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
                    return r
                },
                map: function (e, t, i) {
                    var r, o, s = 0,
                        a = [];
                    if (n(e)) for (r = e.length; r > s; s++) o = t(e[s], s, i), null != o && a.push(o);
                    else for (s in e) o = t(e[s], s, i), null != o && a.push(o);
                    return Y.apply([], a)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, i, r;
                    return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (i = Z.call(arguments, 2), r = function () {
                        return e.apply(t || this, i.concat(Z.call(arguments)))
                    }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
                },
                now: Date.now,
                support: ie
            }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Q[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                ee["[object " + t + "]"] = t.toLowerCase()
            });
            var ue = function (e) {
                function t(e, t, n, i) {
                    var r, o, s, a, l, c, d, f, h = t && t.ownerDocument,
                        g = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!i && ((t ? t.ownerDocument || t : F) !== I && L(t), t = t || I, D)) {
                        if (11 !== g && (c = ve.exec(e))) if (r = c[1]) {
                            if (9 === g) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (h && (s = h.getElementById(r)) && R(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (c[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), n
                        }
                        if (x.qsa && !W[e + " "] && (!M || !M.test(e))) {
                            if (1 !== g) h = t, f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((a = t.getAttribute("id")) ? a = a.replace(ye, "\\$&") : t.setAttribute("id", a = B), d = T(e), o = d.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + p(d[o]);
                                f = d.join(","), h = be.test(e) && u(t.parentNode) || t
                            }
                            if (f) try {
                                return G.apply(n, h.querySelectorAll(f)), n
                            } catch (m) {
                            } finally {
                                a === B && t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(ae, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }

                    var t = [];
                    return e
                }

                function i(e) {
                    return e[B] = !0, e
                }

                function r(e) {
                    var t = I.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {
                }

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = z++;
                    return t.first ?
                        function (t, n, o) {
                            for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
                        } : function (t, n, s) {
                        var a, l, c, u = [P, o];
                        if (s) {
                            for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                        } else for (; t = t[i];) if (1 === t.nodeType || r) {
                            if (c = t[B] || (t[B] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[i]) && a[0] === P && a[1] === o) return u[2] = a[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
                    }
                }

                function h(e) {
                    return e.length > 1 ?
                        function (t, n, i) {
                            for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                            return !0
                        } : e[0]
                }

                function g(e, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                    return i
                }

                function m(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
                    return s
                }

                function v(e, t, n, r, o, s) {
                    return r && !r[B] && (r = v(r)), o && !o[B] && (o = v(o, s)), i(function (i, s, a, l) {
                        var c, u, d, p = [],
                            f = [],
                            h = s.length,
                            v = i || g(t || "*", a.nodeType ? [a] : a, []),
                            b = !e || !i && t ? v : m(v, p, e, a, l),
                            y = n ? o || (i ? e : h || r) ? [] : s : b;
                        if (n && n(b, y, a, l), r) for (c = m(y, f), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[f[u]] = !(b[f[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                                    o(null, y = [], c, l)
                                }
                                for (u = y.length; u--;)(d = y[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                            }
                        } else y = m(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, l) : G.apply(s, y)
                    })
                }

                function b(e) {
                    for (var t, n, i, r = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = f(function (e) {
                        return e === t
                    }, s, !0), c = f(function (e) {
                        return ee(t, e) > -1
                    }, s, !0), u = [function (e, n, i) {
                        var r = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; r > a; a++) if (n = k.relative[e[a].type]) u = [f(h(u), n)];
                    else {
                        if (n = k.filter[e[a].type].apply(null, e[a].matches), n[B]) {
                            for (i = ++a; r > i && !k.relative[e[i].type]; i++);
                            return v(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(ae, "$1"), n, i > a && b(e.slice(a, i)), r > i && b(e = e.slice(i)), r > i && p(e))
                        }
                        u.push(n)
                    }
                    return h(u)
                }

                function y(e, n) {
                    var r = n.length > 0,
                        o = e.length > 0,
                        s = function (i, s, a, l, c) {
                            var u, d, p, f = 0,
                                h = "0",
                                g = i && [],
                                v = [],
                                b = E,
                                y = i || o && k.find.TAG("*", c),
                                w = P += null == b ? 1 : Math.random() || .1,
                                x = y.length;
                            for (c && (E = s === I || s || c); h !== x && null != (u = y[h]); h++) {
                                if (o && u) {
                                    for (d = 0, s || u.ownerDocument === I || (L(u), a = !D); p = e[d++];) if (p(u, s || I, a)) {
                                        l.push(u);
                                        break
                                    }
                                    c && (P = w)
                                }
                                r && ((u = !p && u) && f--, i && g.push(u))
                            }
                            if (f += h, r && h !== f) {
                                for (d = 0; p = n[d++];) p(g, v, s, a);
                                if (i) {
                                    if (f > 0) for (; h--;) g[h] || v[h] || (v[h] = Z.call(l));
                                    v = m(v)
                                }
                                G.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                            }
                            return c && (P = w, E = b), g
                        };
                    return r ? i(s) : s
                }

                var w, x, k, _, C, T, N, S, E, $, A, L, I, q, D, M, j, O, R, B = "sizzle" + 1 * new Date,
                    F = e.document,
                    P = 0,
                    z = 0,
                    H = n(),
                    U = n(),
                    W = n(),
                    V = function (e, t) {
                        return e === t && (A = !0), 0
                    },
                    X = 1 << 31,
                    Q = {}.hasOwnProperty,
                    K = [],
                    Z = K.pop,
                    Y = K.push,
                    G = K.push,
                    J = K.slice,
                    ee = function (e, t) {
                        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\ \\t\\r\\n\\f]",
                    ie = "(?:\\\\.|[\\w-]|[^\-\ ])+",
                    re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    de = new RegExp(oe),
                    pe = new RegExp("^" + ie + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    ye = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    xe = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    ke = function () {
                        L()
                    };
                try {
                    G.apply(K = J.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
                } catch (_e) {
                    G = {
                        apply: K.length ?
                            function (e, t) {
                                Y.apply(e, J.call(t))
                            } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                x = t.support = {}, C = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, L = t.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : F;
                    return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, q = I.documentElement, D = !C(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), x.attributes = r(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = r(function (e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = me.test(I.getElementsByClassName), x.getById = r(function (e) {
                        return q.appendChild(e).id = B, !I.getElementsByName || !I.getElementsByName(B).length
                    }), x.getById ? (k.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && D) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, k.filter.ID = function (e) {
                        var t = e.replace(we, xe);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete k.find.ID, k.filter.ID = function (e) {
                        var t = e.replace(we, xe);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), k.find.TAG = x.getElementsByTagName ?
                        function (e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, k.find.CLASS = x.getElementsByClassName &&
                        function (e, t) {
                            return "undefined" != typeof t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
                        }, j = [], M = [], (x.qsa = me.test(I.querySelectorAll)) && (r(function (e) {
                        q.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || M.push(".#.+[+~]")
                    }), r(function (e) {
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                    })), (x.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && r(function (e) {
                        x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), j.push("!=", oe)
                    }), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ?
                        function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, V = t ?
                        function (e, t) {
                            if (e === t) return A = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === F && R(F, e) ? -1 : t === I || t.ownerDocument === F && R(F, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & n ? -1 : 1)
                        } : function (e, t) {
                        if (e === t) return A = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            l = [t];
                        if (!r || !o) return e === I ? -1 : t === I ? 1 : r ? -1 : o ? 1 : $ ? ee($, e) - ee($, t) : 0;
                        if (r === o) return s(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
                    }, I) : I
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== I && L(e), n = n.replace(ue, "='$1']"), x.matchesSelector && D && !W[n + " "] && (!j || !j.test(n)) && (!M || !M.test(n))) try {
                        var i = O.call(e, n);
                        if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {
                    }
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== I && L(e), R(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== I && L(e);
                    var n = k.attrHandle[t.toLowerCase()],
                        i = n && Q.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                    return void 0 !== i ? i : x.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (A = !x.detectDuplicates, $ = !x.sortStable && e.slice(0), e.sort(V), A) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return $ = null, e
                }, _ = t.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else for (; t = e[i++];) n += _(t);
                    return n
                }, k = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(we, xe).toLowerCase();
                            return "*" === e ?
                                function () {
                                    return !0
                                } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = H[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        },
                        ATTR: function (e, n, i) {
                            return function (r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function (e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === r ?
                                function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                var c, u, d, p, f, h, g = o !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    b = !l && !a,
                                    y = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild], s && b) {
                                        for (p = m, d = p[B] || (p[B] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === P && c[1], y = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (y = f = 0) || h.pop();) if (1 === p.nodeType && ++y && p === t) {
                                            u[e] = [P, f, y];
                                            break
                                        }
                                    } else if (b && (p = t, d = p[B] || (p[B] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === P && c[1], y = f), y === !1) for (;
                                        (p = ++f && p && p[g] || (y = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && (d = p[B] || (p[B] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [P, y]), p !== t)););
                                    return y -= r, y === i || y % i === 0 && y / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, n) {
                            var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[B] ? o(n) : o.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                            }) : function (e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [],
                                n = [],
                                r = N(e.replace(ae, "$1"));
                            return r[B] ? i(function (e, t, n, i) {
                                for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function (e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function (e) {
                            return e = e.replace(we, xe), function (t) {
                                return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function (e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(), function (t) {
                                var n;
                                do
                                    if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === q
                        },
                        focus: function (e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !k.pseudos.empty(e)
                        },
                        header: function (e) {
                            return ge.test(e.nodeName)
                        },
                        input: function (e) {
                            return he.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function () {
                            return [0];
                        }),
                        last: c(function (e, t) {
                            return [t - 1]
                        }),
                        eq: c(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[w] = a(w);
                for (w in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[w] = l(w);
                return d.prototype = k.filters = k.pseudos, k.setFilters = new d, T = t.tokenize = function (e, n) {
                    var i, r, o, s, a, l, c, u = U[e + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = e, l = [], c = k.preFilter; a;) {
                        i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(ae, " ")
                        }), a = a.slice(i.length));
                        for (s in k.filter)!(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
                }, N = t.compile = function (e, t) {
                    var n, i = [],
                        r = [],
                        o = W[e + " "];
                    if (!o) {
                        for (t || (t = T(e)), n = t.length; n--;) o = b(t[n]), o[B] ? i.push(o) : r.push(o);
                        o = W(e, y(r, i)), o.selector = e
                    }
                    return o
                }, S = t.select = function (e, t, n, i) {
                    var r, o, s, a, l, c = "function" == typeof e && e,
                        d = !i && T(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === t.nodeType && D && k.relative[o[1].type]) {
                            if (t = (k.find.ID(s.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]);) if ((l = k.find[a]) && (i = l(s.matches[0].replace(we, xe), be.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && p(o), !e) return G.apply(n, i), n;
                            break
                        }
                    }
                    return (c || N(e, d))(i, t, !D, n, !t || be.test(e) && u(t.parentNode) || t), n
                }, x.sortStable = B.split("").sort(V).join("") === B, x.detectDuplicates = !!A, L(), x.sortDetached = r(function (e) {
                    return 1 & e.compareDocumentPosition(I.createElement("div"))
                }), r(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && r(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), r(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function (e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
            oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
            var de = function (e, t, n) {
                    for (var i = [], r = void 0 !== n;
                         (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                        if (r && oe(e).is(n)) break;
                        i.push(e)
                    }
                    return i
                },
                pe = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                fe = oe.expr.match.needsContext,
                he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                ge = /^.[^:#\[\.,]*$/;
            oe.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, oe.fn.extend({
                find: function (e) {
                    var t, n = this.length,
                        i = [],
                        r = this;
                    if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                        for (t = 0; n > t; t++) if (oe.contains(r[t], this)) return !0
                    }));
                    for (t = 0; n > t; t++) oe.find(e, r[t], i);
                    return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
                },
                filter: function (e) {
                    return this.pushStack(i(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(i(this, e || [], !0))
                },
                is: function (e) {
                    return !!i(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
                }
            });
            var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                be = oe.fn.init = function (e, t, n) {
                    var i, r;
                    if (!e) return this;
                    if (n = n || me, "string" == typeof e) {
                        if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (i[1]) {
                            if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), he.test(i[1]) && oe.isPlainObject(t)) for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this
                        }
                        return r = K.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
                };
            be.prototype = oe.fn, me = oe(K);
            var ye = /^(?:parents|prev(?:Until|All))/,
                we = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            oe.fn.extend({
                has: function (e) {
                    var t = oe(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++) if (oe.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    for (var n, i = 0, r = this.length, o = [], s = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? J.call(oe(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), oe.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return de(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return de(e, "parentNode", n)
                },
                next: function (e) {
                    return r(e, "nextSibling")
                },
                prev: function (e) {
                    return r(e, "previousSibling")
                },
                nextAll: function (e) {
                    return de(e, "nextSibling")
                },
                prevAll: function (e) {
                    return de(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return de(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return de(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return pe((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return pe(e.firstChild)
                },
                contents: function (e) {
                    return e.contentDocument || oe.merge([], e.childNodes)
                }
            }, function (e, t) {
                oe.fn[e] = function (n, i) {
                    var r = oe.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (we[e] || oe.uniqueSort(r), ye.test(e) && r.reverse()), this.pushStack(r)
                }
            });
            var xe = /\S+/g;
            oe.Callbacks = function (e) {
                e = "string" == typeof e ? o(e) : oe.extend({}, e);
                var t, n, i, r, s = [],
                    a = [],
                    l = -1,
                    c = function () {
                        for (r = e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
                    },
                    u = {
                        add: function () {
                            return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) {
                                oe.each(t, function (t, n) {
                                    oe.isFunction(n) ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
                                })
                            }(arguments), n && !t && c()), this
                        },
                        remove: function () {
                            return oe.each(arguments, function (e, t) {
                                for (var n;
                                     (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                            }), this
                        },
                        has: function (e) {
                            return e ? oe.inArray(e, s) > -1 : s.length > 0
                        },
                        empty: function () {
                            return s && (s = []), this
                        },
                        disable: function () {
                            return r = a = [], s = n = "", this
                        },
                        disabled: function () {
                            return !s
                        },
                        lock: function () {
                            return r = a = [], n || (s = n = ""), this
                        },
                        locked: function () {
                            return !!r
                        },
                        fireWith: function (e, n) {
                            return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                        },
                        fire: function () {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!i
                        }
                    };
                return u
            }, oe.extend({
                Deferred: function (e) {
                    var t = [
                            ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", oe.Callbacks("memory")]
                        ],
                        n = "pending",
                        i = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return r.done(arguments).fail(arguments), this
                            },
                            then: function () {
                                var e = arguments;
                                return oe.Deferred(function (n) {
                                    oe.each(t, function (t, o) {
                                        var s = oe.isFunction(e[t]) && e[t];
                                        r[o[1]](function () {
                                            var e = s && s.apply(this, arguments);
                                            e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? oe.extend(e, i) : i
                            }
                        },
                        r = {};
                    return i.pipe = i.then, oe.each(t, function (e, o) {
                        var s = o[2],
                            a = o[3];
                        i[o[1]] = s.add, a && s.add(function () {
                            n = a
                        }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                            return r[o[0] + "With"](this === r ? i : this, arguments), this
                        }, r[o[0] + "With"] = s.fireWith
                    }), i.promise(r), e && e.call(r, r), r
                },
                when: function (e) {
                    var t, n, i, r = 0,
                        o = Z.call(arguments),
                        s = o.length,
                        a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                        l = 1 === a ? e : oe.Deferred(),
                        c = function (e, n, i) {
                            return function (r) {
                                n[e] = this, i[e] = arguments.length > 1 ? Z.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                            }
                        };
                    if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --a;
                    return a || l.resolveWith(i, o), l.promise()
                }
            });
            var ke;
            oe.fn.ready = function (e) {
                return oe.ready.promise().done(e), this
            }, oe.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? oe.readyWait++ : oe.ready(!0)
                },
                ready: function (e) {
                    (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (ke.resolveWith(K, [oe]), oe.fn.triggerHandler && (oe(K).triggerHandler("ready"), oe(K).off("ready"))))
                }
            }), oe.ready.promise = function (t) {
                return ke || (ke = oe.Deferred(), "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? e.setTimeout(oe.ready) : (K.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), ke.promise(t)
            }, oe.ready.promise();
            var _e = function (e, t, n, i, r, o, s) {
                    var a = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === oe.type(n)) {
                        r = !0;
                        for (a in n) _e(e, t, a, n[a], !0, o, s)
                    } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                            return c.call(oe(e), n)
                        })), t)) for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
                },
                Ce = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            a.uid = 1, a.prototype = {
                register: function (e, t) {
                    var n = t || {};
                    return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }), e[this.expando]
                },
                cache: function (e) {
                    if (!Ce(e)) return {};
                    var t = e[this.expando];
                    return t || (t = {}, Ce(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t) r[t] = n;
                    else for (i in t) r[i] = t[i];
                    return r
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                },
                access: function (e, t, n) {
                    var i;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, i, r, o = e[this.expando];
                    if (void 0 !== o) {
                        if (void 0 === t) this.register(e);
                        else {
                            oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(xe) || [])), n = i.length;
                            for (; n--;) delete o[i[n]]
                        }
                        (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !oe.isEmptyObject(t)
                }
            };
            var Te = new a,
                Ne = new a,
                Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ee = /[A-Z]/g;
            oe.extend({
                hasData: function (e) {
                    return Ne.hasData(e) || Te.hasData(e)
                },
                data: function (e, t, n) {
                    return Ne.access(e, t, n)
                },
                removeData: function (e, t) {
                    Ne.remove(e, t)
                },
                _data: function (e, t, n) {
                    return Te.access(e, t, n)
                },
                _removeData: function (e, t) {
                    Te.remove(e, t)
                }
            }), oe.fn.extend({
                data: function (e, t) {
                    var n, i, r, o = this[0],
                        s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = Ne.get(o), 1 === o.nodeType && !Te.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i])));
                            Te.set(o, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function () {
                        Ne.set(this, e)
                    }) : _e(this, function (t) {
                        var n, i;
                        if (o && void 0 === t) {
                            if (n = Ne.get(o, e) || Ne.get(o, e.replace(Ee, "-$&").toLowerCase()), void 0 !== n) return n;
                            if (i = oe.camelCase(e), n = Ne.get(o, i), void 0 !== n) return n;
                            if (n = l(o, i, void 0), void 0 !== n) return n
                        } else i = oe.camelCase(e), this.each(function () {
                            var n = Ne.get(this, i);
                            Ne.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ne.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        Ne.remove(this, e)
                    })
                }
            }), oe.extend({
                queue: function (e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = Te.get(e, t), n && (!i || oe.isArray(n) ? i = Te.access(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = oe.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        o = oe._queueHooks(e, t),
                        s = function () {
                            oe.dequeue(e, t)
                        };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return Te.get(e, n) || Te.access(e, n, {
                            empty: oe.Callbacks("once memory").add(function () {
                                Te.remove(e, [t + "queue", n])
                            })
                        })
                }
            }), oe.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = oe.queue(this, e, t);
                        oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        oe.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, i = 1,
                        r = oe.Deferred(),
                        o = this,
                        s = this.length,
                        a = function () {
                            --i || r.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Te.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                    return a(), r.promise(t)
                }
            });
            var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ae = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
                Le = ["Top", "Right", "Bottom", "Left"],
                Ie = function (e, t) {
                    return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
                },
                qe = /^(?:checkbox|radio)$/i,
                De = /<([\w:-]+)/,
                Me = /^$|\/(?:java|ecma)script/i,
                je = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            je.optgroup = je.option, je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td;
            var Oe = /<|&#?\w+;/;
            !
                function () {
                    var e = K.createDocumentFragment(),
                        t = e.appendChild(K.createElement("div")),
                        n = K.createElement("input");
                    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
                }();
            var Re = /^key/,
                Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Fe = /^([^.]*)(?:\.(.+)|)/;
            oe.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, s, a, l, c, u, d, p, f, h, g, m = Te.get(e);
                    if (m) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(xe) || [""], c = t.length; c--;) a = Fe.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (d = oe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = oe.event.special[f] || {}, u = oe.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[f] = !0)
                },
                remove: function (e, t, n, i, r) {
                    var o, s, a, l, c, u, d, p, f, h, g, m = Te.hasData(e) && Te.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(xe) || [""], c = t.length; c--;) if (a = Fe.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                            for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, f, m.handle), delete l[f])
                        } else for (f in l) oe.event.remove(e, f + t[c], n, i, !0);
                        oe.isEmptyObject(l) && Te.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = oe.event.fix(e);
                    var t, n, i, r, o, s = [],
                        a = Z.call(arguments),
                        l = (Te.get(this, "events") || {})[e.type] || [],
                        c = oe.event.special[e.type] || {};
                    if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (s = oe.event.handlers.call(this, e, l), t = 0;
                             (r = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0;
                                                                              (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, i, r, o, s = [],
                        a = t.delegateCount,
                        l = e.target;
                    if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
                    return a < t.length && s.push({
                        elem: this,
                        handlers: t.slice(a)
                    }), s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, i, r, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[oe.expando]) return e;
                    var t, n, i, r = e.type,
                        o = e,
                        s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = Be.test(r) ? this.mouseHooks : Re.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                    return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            return this !== g() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === g() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function (e) {
                            return oe.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, oe.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, oe.Event = function (e, t) {
                return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
            }, oe.Event.prototype = {
                constructor: oe.Event,
                isDefaultPrevented: h,
                isPropagationStopped: h,
                isImmediatePropagationStopped: h,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = f, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = f, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = f, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, oe.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                oe.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), oe.fn.extend({
                on: function (e, t, n, i) {
                    return m(this, e, t, n, i)
                },
                one: function (e, t, n, i) {
                    return m(this, e, t, n, i, 1)
                },
                off: function (e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                        oe.event.remove(this, e, n, t)
                    })
                }
            });
            var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                ze = /<script|<style|<link/i,
                He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ue = /^true\/(.*)/,
                We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            oe.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Pe, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var i, r, o, s, a = e.cloneNode(!0),
                        l = oe.contains(e.ownerDocument, e);
                    if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e))) for (s = u(a), o = u(e), i = 0, r = o.length; r > i; i++) x(o[i], s[i]);
                    if (t) if (n) for (o = o || u(e), s = s || u(a), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
                    else w(e, a);
                    return s = u(a, "script"), s.length > 0 && d(s, !l && u(e, "script")), a
                },
                cleanData: function (e) {
                    for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Ce(n)) {
                        if (t = n[Te.expando]) {
                            if (t.events) for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                            n[Te.expando] = void 0
                        }
                        n[Ne.expando] && (n[Ne.expando] = void 0)
                    }
                }
            }), oe.fn.extend({
                domManip: k,
                detach: function (e) {
                    return _(this, e, !0)
                },
                remove: function (e) {
                    return _(this, e)
                },
                text: function (e) {
                    return _e(this, function (e) {
                        return void 0 === e ? oe.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return k(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = v(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function () {
                    return k(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = v(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return k(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return k(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return oe.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return _e(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ze.test(e) && !je[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = oe.htmlPrefilter(e);
                            try {
                                for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (r) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = [];
                    return k(this, arguments, function (t) {
                        var n = this.parentNode;
                        oe.inArray(this, e) < 0 && (oe.cleanData(u(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), oe.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                oe.fn[e] = function (e) {
                    for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(r[s])[t](n), G.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Ve, Xe = {
                    HTML: "block",
                    BODY: "block"
                },
                Qe = /^margin/,
                Ke = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
                Ze = function (t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                Ye = function (e, t, n, i) {
                    var r, o, s = {};
                    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                    r = n.apply(e, i || []);
                    for (o in t) e.style[o] = s[o];
                    return r
                },
                Ge = K.documentElement;
            !
                function () {
                    function t() {
                        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ge.appendChild(s);
                        var t = e.getComputedStyle(a);
                        n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Ge.removeChild(s)
                    }

                    var n, i, r, o, s = K.createElement("div"),
                        a = K.createElement("div");
                    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
                        pixelPosition: function () {
                            return t(), n
                        },
                        boxSizingReliable: function () {
                            return null == i && t(), i
                        },
                        pixelMarginRight: function () {
                            return null == i && t(), r
                        },
                        reliableMarginLeft: function () {
                            return null == i && t(), o
                        },
                        reliableMarginRight: function () {
                            var t, n = a.appendChild(K.createElement("div"));
                            return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ge.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ge.removeChild(s), a.removeChild(n), t
                        }
                    }))
                }();
            var Je = /^(none|table(?!-c[ea]).+)/,
                et = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                tt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                nt = ["Webkit", "O", "Moz", "ms"],
                it = K.createElement("div").style;
            oe.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = N(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, s, a = oe.camelCase(t),
                            l = e.style;
                        return t = oe.cssProps[a] || (oe.cssProps[a] = E(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Ae.exec(n)) && r[1] && (n = c(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
                    }
                },
                css: function (e, t, n, i) {
                    var r, o, s, a = oe.camelCase(t);
                    return t = oe.cssProps[a] || (oe.cssProps[a] = E(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = N(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }), oe.each(["height", "width"], function (e, t) {
                oe.cssHooks[t] = {
                    get: function (e, n, i) {
                        return n ? Je.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ye(e, et, function () {
                            return L(e, t, i)
                        }) : L(e, t, i) : void 0
                    },
                    set: function (e, n, i) {
                        var r, o = i && Ze(e),
                            s = i && A(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                        return s && (r = Ae.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), $(e, n, s)
                    }
                }
            }), oe.cssHooks.marginLeft = S(ie.reliableMarginLeft, function (e, t) {
                return t ? (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Ye(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px" : void 0
            }), oe.cssHooks.marginRight = S(ie.reliableMarginRight, function (e, t) {
                return t ? Ye(e, {
                    display: "inline-block"
                }, N, [e, "marginRight"]) : void 0
            }), oe.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                oe.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Le[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, Qe.test(e) || (oe.cssHooks[e + t].set = $)
            }), oe.fn.extend({
                css: function (e, t) {
                    return _e(this, function (e, t, n) {
                        var i, r, o = {},
                            s = 0;
                        if (oe.isArray(t)) {
                            for (i = Ze(e), r = t.length; r > s; s++) o[t[s]] = oe.css(e, t[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function () {
                    return I(this, !0)
                },
                hide: function () {
                    return I(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Ie(this) ? oe(this).show() : oe(this).hide()
                    })
                }
            }), oe.Tween = q, q.prototype = {
                constructor: q,
                init: function (e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = q.propHooks[this.prop];
                    return e && e.get ? e.get(this) : q.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = q.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
                }
            }, q.prototype.init.prototype = q.prototype, q.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    },
                    set: function (e) {
                        oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, oe.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, oe.fx = q.prototype.init, oe.fx.step = {};
            var rt, ot, st = /^(?:toggle|show|hide)$/,
                at = /queueHooks$/;
            oe.Animation = oe.extend(B, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return c(n.elem, e, Ae.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
                },
                prefilters: [O],
                prefilter: function (e, t) {
                    t ? B.prefilters.unshift(e) : B.prefilters.push(e)
                }
            }), oe.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
                }, i
            }, oe.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(Ie).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function (e, t, n, i) {
                    var r = oe.isEmptyObject(e),
                        o = oe.speed(t, n, i),
                        s = function () {
                            var t = B(this, oe.extend({}, e), o);
                            (r || Te.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = oe.timers,
                            s = Te.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || oe.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = Te.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = oe.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function (e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function (e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, r)
                }
            }), oe.each({
                slideDown: M("show"),
                slideUp: M("hide"),
                slideToggle: M("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                oe.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), oe.timers = [], oe.fx.tick = function () {
                var e, t = 0,
                    n = oe.timers;
                for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || oe.fx.stop(), rt = void 0
            }, oe.fx.timer = function (e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function () {
                ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function () {
                e.clearInterval(ot), ot = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function (t, n) {
                return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(r)
                    }
                })
            }, function () {
                var e = K.createElement("input"),
                    t = K.createElement("select"),
                    n = t.appendChild(K.createElement("option"));
                e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
            }();
            var lt, ct = oe.expr.attrHandle;
            oe.fn.extend({
                attr: function (e, t) {
                    return _e(this, oe.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        oe.removeAttr(this, e)
                    })
                }
            }), oe.extend({
                attr: function (e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, i, r = 0,
                        o = t && t.match(xe);
                    if (o && 1 === e.nodeType) for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
                }
            }), lt = {
                set: function (e, t, n) {
                    return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = ct[t] || oe.find.attr;
                ct[t] = function (e, t, i) {
                    var r, o;
                    return i || (o = ct[t], ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = o), r
                }
            });
            var ut = /^(?:input|select|textarea|button)$/i,
                dt = /^(?:a|area)$/i;
            oe.fn.extend({
                prop: function (e, t) {
                    return _e(this, oe.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[oe.propFix[e] || e]
                    })
                }
            }), oe.extend({
                prop: function (e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = oe.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), ie.optSelected || (oe.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                oe.propFix[this.toLowerCase()] = this
            });
            var pt = /[\t\r\n\f]/g;
            oe.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, s, a, l = 0;
                    if (oe.isFunction(e)) return this.each(function (t) {
                        oe(this).addClass(e.call(this, t, F(this)))
                    });
                    if ("string" == typeof e && e) for (t = e.match(xe) || []; n = this[l++];) if (r = F(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
                    return this
                },
                removeClass: function (e) {
                    var t, n, i, r, o, s, a, l = 0;
                    if (oe.isFunction(e)) return this.each(function (t) {
                        oe(this).removeClass(e.call(this, t, F(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e) for (t = e.match(xe) || []; n = this[l++];) if (r = F(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                        for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                        oe(this).toggleClass(e.call(this, n, F(this), t), t)
                    }) : this.each(function () {
                        var t, i, r, o;
                        if ("string" === n) for (i = 0, r = oe(this), o = e.match(xe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else void 0 !== e && "boolean" !== n || (t = F(this), t && Te.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Te.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + F(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var ft = /\r/g,
                ht = /[ \t\r\n\f]+/g;
            oe.fn.extend({
                val: function (e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = oe.isFunction(e), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    })) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
                }
            }), oe.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = oe.find.attr(e, "value");
                            return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
                        }
                    },
                    select: {
                        get: function (e) {
                            for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), o) return t;
                                s.push(t)
                            }
                            return s
                        },
                        set: function (e, t) {
                            for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), oe.each(["radio", "checkbox"], function () {
                oe.valHooks[this] = {
                    set: function (e, t) {
                        return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
                    }
                }, ie.checkOn || (oe.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var gt = /^(?:focusinfocus|focusoutblur)$/;
            oe.extend(oe.event, {
                trigger: function (t, n, i, r) {
                    var o, s, a, l, c, u, d, p = [i || K],
                        f = ne.call(t, "type") ? t.type : t,
                        h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                        if (!r && !d.noBubble && !oe.isWindow(i)) {
                            for (l = d.delegateType || f, gt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                            a === (i.ownerDocument || K) && p.push(a.defaultView || a.parentWindow || e)
                        }
                        for (o = 0;
                             (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, u = (Te.get(s, "events") || {})[t.type] && Te.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Ce(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                        return t.type = f, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Ce(i) || c && oe.isFunction(i[f]) && !oe.isWindow(i) && (a = i[c], a && (i[c] = null), oe.event.triggered = f, i[f](), oe.event.triggered = void 0, a && (i[c] = a)), t.result
                    }
                },
                simulate: function (e, t, n) {
                    var i = oe.extend(new oe.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    oe.event.trigger(i, null, t)
                }
            }), oe.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        oe.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? oe.event.trigger(e, t, n, !0) : void 0
                }
            }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                oe.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), oe.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    oe.event.simulate(t, e.target, oe.event.fix(e))
                };
                oe.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this,
                            r = Te.access(i, t);
                        r || i.addEventListener(e, n, !0), Te.access(i, t, (r || 0) + 1)
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this,
                            r = Te.access(i, t) - 1;
                        r ? Te.access(i, t, r) : (i.removeEventListener(e, n, !0), Te.remove(i, t))
                    }
                }
            });
            var mt = e.location,
                vt = oe.now(),
                bt = /\?/;
            oe.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, oe.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (i) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
            };
            var yt = /#.*$/,
                wt = /([?&])_=[^&]*/,
                xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                _t = /^(?:GET|HEAD)$/,
                Ct = /^\/\//,
                Tt = {},
                Nt = {},
                St = "*/".concat("*"),
                Et = K.createElement("a");
            Et.href = mt.href, oe.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: mt.href,
                    type: "GET",
                    isLocal: kt.test(mt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": St,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": oe.parseJSON,
                        "text xml": oe.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? H(H(e, oe.ajaxSettings), t) : H(oe.ajaxSettings, e)
                },
                ajaxPrefilter: P(Tt),
                ajaxTransport: P(Nt),
                ajax: function (t, n) {
                    function i(t, n, i, a) {
                        var c, d, b, y, x, _ = n;
                        2 !== w && (w = 2, l && e.clearTimeout(l), r = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (y = U(p, k, i)), y = W(p, y, k, c), c ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (oe.lastModified[o] = x), x = k.getResponseHeader("etag"), x && (oe.etag[o] = x)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, d = y.data, b = y.error, c = !b)) : (b = _, !t && _ || (_ = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || _) + "", c ? g.resolveWith(f, [d, _, k]) : g.rejectWith(f, [k, _, b]), k.statusCode(v), v = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? d : b]), m.fireWith(f, [k, _]), u && (h.trigger("ajaxComplete", [k, p]), --oe.active || oe.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var r, o, s, a, l, c, u, d, p = oe.ajaxSetup({}, n),
                        f = p.context || p,
                        h = p.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                        g = oe.Deferred(),
                        m = oe.Callbacks("once memory"),
                        v = p.statusCode || {},
                        b = {},
                        y = {},
                        w = 0,
                        x = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === w) {
                                    if (!a) for (a = {}; t = xt.exec(s);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === w ? s : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return w || (e = y[n] = y[n] || e, b[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return w || (p.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e) if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                                else k.always(e[k.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || x;
                                return r && r.abort(t), i(0, t), this
                            }
                        };
                    if (g.promise(k).complete = m.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || mt.href) + "").replace(yt, "").replace(Ct, mt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain) {
                        c = K.createElement("a");
                        try {
                            c.href = p.url, c.href = c.href, p.crossDomain = Et.protocol + "//" + Et.host != c.protocol + "//" + c.host
                        } catch (_) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), z(Tt, p, n, k), 2 === w) return k;
                    u = oe.event && p.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !_t.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wt.test(o) ? o.replace(wt, "$1_=" + vt++) : o + (bt.test(o) ? "&" : "?") + "_=" + vt++)), p.ifModified && (oe.lastModified[o] && k.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && k.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + St + "; q=0.01" : "") : p.accepts["*"]);
                    for (d in p.headers) k.setRequestHeader(d, p.headers[d]);
                    if (p.beforeSend && (p.beforeSend.call(f, k, p) === !1 || 2 === w)) return k.abort();
                    x = "abort";
                    for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) k[d](p[d]);
                    if (r = z(Nt, p, n, k)) {
                        if (k.readyState = 1, u && h.trigger("ajaxSend", [k, p]), 2 === w) return k;
                        p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                            k.abort("timeout")
                        }, p.timeout));
                        try {
                            w = 1, r.send(b, i)
                        } catch (_) {
                            if (!(2 > w)) throw _;
                            i(-1, _)
                        }
                    } else i(-1, "No Transport");
                    return k
                },
                getJSON: function (e, t, n) {
                    return oe.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return oe.get(e, void 0, t, "script")
                }
            }), oe.each(["get", "post"], function (e, t) {
                oe[t] = function (e, n, i, r) {
                    return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, oe.isPlainObject(e) && e))
                }
            }), oe._evalUrl = function (e) {
                return oe.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, oe.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return oe.isFunction(e) ? this.each(function (t) {
                        oe(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function (e) {
                    return oe.isFunction(e) ? this.each(function (t) {
                        oe(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = oe(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = oe.isFunction(e);
                    return this.each(function (n) {
                        oe(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), oe.expr.filters.hidden = function (e) {
                return !oe.expr.filters.visible(e)
            }, oe.expr.filters.visible = function (e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
            };
            var $t = /%20/g,
                At = /\[\]$/,
                Lt = /\r?\n/g,
                It = /^(?:submit|button|image|reset|file)$/i,
                qt = /^(?:input|select|textarea|keygen)/i;
            oe.param = function (e, t) {
                var n, i = [],
                    r = function (e, t) {
                        t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
                    r(this.name, this.value)
                });
                else for (n in e) V(n, e[n], t, r);
                return i.join("&").replace($t, "+")
            }, oe.fn.extend({
                serialize: function () {
                    return oe.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = oe.prop(this, "elements");
                        return e ? oe.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !oe(this).is(":disabled") && qt.test(this.nodeName) && !It.test(e) && (this.checked || !qe.test(e))
                    }).map(function (e, t) {
                        var n = oe(this).val();
                        return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Lt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Lt, "\r\n")
                        }
                    }).get()
                }
            }), oe.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {
                }
            };
            var Dt = {
                    0: 200,
                    1223: 204
                },
                Mt = oe.ajaxSettings.xhr();
            ie.cors = !!Mt && "withCredentials" in Mt, ie.ajax = Mt = !!Mt, oe.ajaxTransport(function (t) {
                var n, i;
                return ie.cors || Mt && !t.crossDomain ? {
                    send: function (r, o) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (s in r) a.setRequestHeader(s, r[s]);
                        n = function (e) {
                            return function () {
                                n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Dt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                            4 === a.readyState && e.setTimeout(function () {
                                n && i()
                            })
                        }, n = n("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (l) {
                            if (n) throw l
                        }
                    },
                    abort: function () {
                        n && n()
                    }
                } : void 0
            }), oe.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return oe.globalEval(e), e
                    }
                }
            }), oe.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), oe.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (i, r) {
                            t = oe("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                            }), K.head.appendChild(t[0])
                        },
                        abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var jt = [],
                Ot = /(=)\?(?=&|$)|\?\?/;
            oe.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = jt.pop() || oe.expando + "_" + vt++;
                    return this[e] = !0, e
                }
            }), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
                var r, o, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
                return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + r) : t.jsonp !== !1 && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                    return s || oe.error(r + " was not called"), s[0]
                }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
                    s = arguments
                }, i.always(function () {
                    void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, jt.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
                }), "script") : void 0
            }), oe.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || K;
                var i = he.exec(e),
                    r = !n && [];
                return i ? [t.createElement(i[1])] : (i = p([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
            };
            var Rt = oe.fn.load;
            oe.fn.load = function (e, t, n) {
                if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
                var i, r, o, s = this,
                    a = e.indexOf(" ");
                return a > -1 && (i = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
                }).always(n &&
                    function (e, t) {
                        s.each(function () {
                            n.apply(this, o || [e.responseText, t, e])
                        })
                    }), this
            }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                oe.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), oe.expr.filters.animated = function (e) {
                return oe.grep(oe.timers, function (t) {
                    return e === t.elem
                }).length
            }, oe.offset = {
                setOffset: function (e, t, n) {
                    var i, r, o, s, a, l, c, u = oe.css(e, "position"),
                        d = oe(e),
                        p = {};
                    "static" === u && (e.style.position = "relative"), a = d.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
                }
            }, oe.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        oe.offset.setOffset(this, e, t)
                    });
                    var t, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        },
                        o = i && i.ownerDocument;
                    return o ? (t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = X(o), {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    }) : r) : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - i.top - oe.css(n, "marginTop", !0),
                            left: t.left - i.left - oe.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                        return e || Ge
                    })
                }
            }), oe.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var n = "pageYOffset" === t;
                oe.fn[e] = function (i) {
                    return _e(this, function (e, i, r) {
                        var o = X(e);
                        return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                    }, e, i, arguments.length)
                }
            }), oe.each(["top", "left"], function (e, t) {
                oe.cssHooks[t] = S(ie.pixelPosition, function (e, n) {
                    return n ? (n = N(e, t), Ke.test(n) ? oe(e).position()[t] + "px" : n) : void 0
                })
            }), oe.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                oe.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, i) {
                    oe.fn[i] = function (i, r) {
                        var o = arguments.length && (n || "boolean" != typeof i),
                            s = n || (i === !0 || r === !0 ? "margin" : "border");
                        return _e(this, function (t, n, i) {
                            var r;
                            return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                        }, t, o ? i : void 0, o, null)
                    }
                })
            }), oe.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                size: function () {
                    return this.length
                }
            }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return oe
            });
            var Bt = e.jQuery,
                Ft = e.$;
            return oe.noConflict = function (t) {
                return e.$ === oe && (e.$ = Ft), t && e.jQuery === oe && (e.jQuery = Bt), oe
            }, t || (e.jQuery = e.$ = oe), oe
        }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+
    function (e) {
        "use strict";
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(jQuery), +
    function (e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t) if (void 0 !== e.style[n]) return {
                end: t[n]
            };
            return !1
        }

        e.fn.emulateTransitionEnd = function (t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function () {
                n = !0
            });
            var r = function () {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(r, t), this
        }, e(function () {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.alert");
                r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
            })
        }

        var n = '[data-dismiss="alert"]',
            i = function (t) {
                e(t).on("click", n, this.close)
            };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (t) {
            function n() {
                s.detach().trigger("closed.bs.alert").remove()
            }

            var r = e(this),
                o = r.attr("data-target");
            o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
            var s = e("#" === o ? [] : o);
            t && t.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var r = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function () {
            return e.fn.alert = r, this
        }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.button"),
                    o = "object" == typeof t && t;
                r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
            })
        }

        var n = function (t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.7", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function (t) {
            var n = "disabled",
                i = this.$element,
                r = i.is("input") ? "val" : "html",
                o = i.data();
            t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function () {
                i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }, n.prototype.toggle = function () {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
            return e.fn.button = i, this
        }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
            var i = e(n.target).closest(".btn");
            t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.carousel"),
                    o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                    s = "string" == typeof t ? t : o.slide;
                r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : s ? r[s]() : o.interval && r.pause().cycle()
            })
        }

        var n = function (t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }
        }, n.prototype.cycle = function (t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function (e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, n.prototype.getItemForDirection = function (e, t) {
            var n = this.getItemIndex(t),
                i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
            if (i && !this.options.wrap) return t;
            var r = "prev" == e ? -1 : 1,
                o = (n + r) % this.$items.length;
            return this.$items.eq(o)
        }, n.prototype.to = function (e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
        }, n.prototype.pause = function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, n.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, n.prototype.slide = function (t, i) {
            var r = this.$element.find(".item.active"),
                o = i || this.getItemForDirection(t, r),
                s = this.interval,
                a = "next" == t ? "left" : "right",
                l = this;
            if (o.hasClass("active")) return this.sliding = !1;
            var c = o[0],
                u = e.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                    d && d.addClass("active")
                }
                var p = e.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
                return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function () {
                    o.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
            }
        };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
            return e.fn.carousel = i, this
        };
        var r = function (n) {
            var i, r = e(this),
                o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (o.hasClass("carousel")) {
                var s = e.extend({}, o.data(), r.data()),
                    a = r.attr("data-slide-to");
                a && (s.interval = !1), t.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function () {
            e('[data-ride="carousel"]').each(function () {
                var n = e(this);
                t.call(n, n.data())
            })
        })
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i)
        }

        function n(t) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.collapse"),
                    o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
            })
        }

        var i = function (t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, i.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                    var o = e.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition) return a.call(this);
                        var l = e.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l]);
                    }
                }
            }
        }, i.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var r = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
                }
            }
        }, i.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function () {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
                var r = e(i);
                this.addAriaAndCollapsedClass(t(r), r)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var r = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
            return e.fn.collapse = r, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
            var r = e(this);
            r.attr("data-target") || i.preventDefault();
            var o = t(r),
                s = o.data("bs.collapse"),
                a = s ? "toggle" : r.data();
            n.call(o, a)
        })
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent()
        }

        function n(n) {
            n && 3 === n.which || (e(r).remove(), e(o).each(function () {
                var i = e(this),
                    r = t(i),
                    o = {
                        relatedTarget: this
                    };
                r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
            }))
        }

        function i(t) {
            return this.each(function () {
                var n = e(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
            })
        }

        var r = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            s = function (t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
            var r = e(this);
            if (!r.is(".disabled, :disabled")) {
                var o = t(r),
                    s = o.hasClass("open");
                if (n(), !s) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                    var a = {
                        relatedTarget: this
                    };
                    if (o.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                    r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, s.prototype.keydown = function (n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = e(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = t(i),
                        s = r.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                    var a = " li:not(.disabled):visible a",
                        l = r.find(".dropdown-menu" + a);
                    if (l.length) {
                        var c = l.index(n.target);
                        38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = e.fn.dropdown;
        e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
            return e.fn.dropdown = a, this
        }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t, i) {
            return this.each(function () {
                var r = e(this),
                    o = r.data("bs.modal"),
                    s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
                o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) : s.show && o.show(i)
            })
        }

        var n = function (t, n) {
            this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function (e) {
            return this.isShown ? this.hide() : this.show(e)
        }, n.prototype.show = function (t) {
            var i = this,
                r = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                    e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var r = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var o = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                r ? i.$dialog.one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
            }))
        }, n.prototype.hide = function (t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function () {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
                document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function () {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function () {
            var e = this;
            this.$element.hide(), this.backdrop(function () {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function (t) {
            var i = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = e.support.transition && r;
                if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function () {
                    i.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else t && t()
        }, n.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function () {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function () {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function () {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function () {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function () {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
            var i = e(this),
                r = i.attr("href"),
                o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = o.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(r) && r
                }, o.data(), i.data());
            i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (e) {
                e.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                    i.is(":visible") && i.trigger("focus")
                })
            }), t.call(o, s, this)
        })
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.tooltip"),
                    o = "object" == typeof t && t;
                !r && /destroy|hide/.test(t) || (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
            })
        }

        var n = function (e, t) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function (t, n, i) {
            if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
                var s = r[o];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focusin",
                        l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.getOptions = function (t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, n.prototype.getDelegateOptions = function () {
            var t = {},
                n = this.getDefaults();
            return this._options && e.each(this._options, function (e, i) {
                n[e] != i && (t[e] = i)
            }), t
        }, n.prototype.enter = function (t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function () {
            for (var e in this.inState) if (this.inState[e]) return !0;
            return !1
        }, n.prototype.leave = function (t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
        }, n.prototype.show = function () {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !i) return;
                var r = this,
                    o = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(a);
                c && (a = a.replace(l, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(),
                    d = o[0].offsetWidth,
                    p = o[0].offsetHeight;
                if (c) {
                    var f = a,
                        h = this.getPosition(this.$viewport);
                    a = "bottom" == a && u.bottom + p > h.bottom ? "top" : "top" == a && u.top - p < h.top ? "bottom" : "right" == a && u.right + d > h.width ? "left" : "left" == a && u.left - d < h.left ? "right" : a, o.removeClass(f).addClass(a)
                }
                var g = this.getCalculatedOffset(a, u, d, p);
                this.applyPlacement(g, a);
                var m = function () {
                    var e = r.hoverState;
                    r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
                };
                e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
            }
        }, n.prototype.applyPlacement = function (t, n) {
            var i = this.tip(),
                r = i[0].offsetWidth,
                o = i[0].offsetHeight,
                s = parseInt(i.css("margin-top"), 10),
                a = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, e.offset.setOffset(i[0], e.extend({
                using: function (e) {
                    i.css({
                        top: Math.round(e.top),
                        left: Math.round(e.left)
                    })
                }
            }, t), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                c = i[0].offsetHeight;
            "top" == n && c != o && (t.top = t.top + o - c);
            var u = this.getViewportAdjustedDelta(n, t, l, c);
            u.left ? t.left += u.left : t.top += u.top;
            var d = /top|bottom/.test(n),
                p = d ? 2 * u.left - r + l : 2 * u.top - o + c,
                f = d ? "offsetWidth" : "offsetHeight";
            i.offset(t), this.replaceArrow(p, i[0][f], d)
        }, n.prototype.replaceArrow = function (e, t, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function () {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function (t) {
            function i() {
                "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
            }

            var r = this,
                o = e(this.$tip),
                s = e.Event("hide.bs." + this.type);
            if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
        }, n.prototype.fixTitle = function () {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function () {
            return this.getTitle()
        }, n.prototype.getPosition = function (t) {
            t = t || this.$element;
            var n = t[0],
                i = "BODY" == n.tagName,
                r = n.getBoundingClientRect();
            null == r.width && (r = e.extend({}, r, {
                width: r.right - r.left,
                height: r.bottom - r.top
            }));
            var o = window.SVGElement && n instanceof window.SVGElement,
                s = i ? {
                    top: 0,
                    left: 0
                } : o ? null : t.offset(),
                a = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                l = i ? {
                    width: e(window).width(),
                    height: e(window).height()
                } : null;
            return e.extend({}, r, a, l, s)
        }, n.prototype.getCalculatedOffset = function (e, t, n, i) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - n / 2
            } : "top" == e ? {
                top: t.top - i,
                left: t.left + t.width / 2 - n / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - i / 2,
                left: t.left - n
            } : {
                top: t.top + t.height / 2 - i / 2,
                left: t.left + t.width
            }
        }, n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
            var r = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return r;
            var o = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var a = t.top - o - s.scroll,
                    l = t.top + o - s.scroll + i;
                a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
            } else {
                var c = t.left - o,
                    u = t.left + o + n;
                c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
            }
            return r
        }, n.prototype.getTitle = function () {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        }, n.prototype.getUID = function (e) {
            do e += ~~(1e6 * Math.random());
            while (document.getElementById(e));
            return e
        }, n.prototype.tip = function () {
            if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function () {
            this.enabled = !0
        }, n.prototype.disable = function () {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function (t) {
            var n = this;
            t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function () {
            var e = this;
            clearTimeout(this.timeout), this.hide(function () {
                e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
            })
        };
        var i = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
            return e.fn.tooltip = i, this
        }
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.popover"),
                    o = "object" == typeof t && t;
                !r && /destroy|hide/.test(t) || (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
            })
        }

        var n = function (e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.setContent = function () {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, n.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function () {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
            return e.fn.popover = i, this
        }
    }(jQuery), +
    function (e) {
        "use strict";

        function t(n, i) {
            this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.scrollspy"),
                    o = "object" == typeof n && n;
                r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }

        t.VERSION = "3.3.7", t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function () {
            var t = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var t = e(this),
                    r = t.data("target") || t.attr("href"),
                    o = /^#./.test(r) && e(r);
                return o && o.length && o.is(":visible") && [
                        [o[n]().top + i, r]
                    ] || null
            }).sort(function (e, t) {
                return e[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, t.prototype.process = function () {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                r = this.offsets,
                o = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = o[o.length - 1]) && this.activate(e);
            if (s && t < r[0]) return this.activeTarget = null, this.clear();
            for (e = r.length; e--;) s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
        }, t.prototype.activate = function (t) {
            this.activeTarget = t, this.clear();
            var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                i = e(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, t.prototype.clear = function () {
            e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = e.fn.scrollspy;
        e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
            return e.fn.scrollspy = i, this
        }, e(window).on("load.bs.scrollspy.data-api", function () {
            e('[data-spy="scroll"]').each(function () {
                var t = e(this);
                n.call(t, t.data())
            })
        })
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.tab");
                r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
            })
        }

        var n = function (t) {
            this.element = e(t)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var r = n.find(".active:last a"),
                    o = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    s = e.Event("show.bs.tab", {
                        relatedTarget: r[0]
                    });
                if (r.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var a = e(i);
                    this.activate(t.closest("li"), n), this.activate(a, a.parent(), function () {
                        r.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function (t, i, r) {
            function o() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
            }

            var s = i.find("> .active"),
                a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
            s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
        };
        var i = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
            return e.fn.tab = i, this
        };
        var r = function (n) {
            n.preventDefault(), t.call(e(this), "show")
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
    }(jQuery), +
    function (e) {
        "use strict";

        function t(t) {
            return this.each(function () {
                var i = e(this),
                    r = i.data("bs.affix"),
                    o = "object" == typeof t && t;
                r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
            })
        }

        var n = function (t, i) {
            this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function (e, t, n, i) {
            var r = this.$target.scrollTop(),
                o = this.$element.offset(),
                s = this.$target.height();
            if (null != n && "top" == this.affixed) return r < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
            var a = null == this.affixed,
                l = a ? r : o.top,
                c = a ? s : t;
            return null != n && r <= n ? "top" : null != i && l + c >= e - i && "bottom"
        }, n.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e
        }, n.prototype.checkPositionWithEventLoop = function () {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    i = this.options.offset,
                    r = i.top,
                    o = i.bottom,
                    s = Math.max(e(document).height(), e(document.body).height());
                "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
                var a = this.getState(s, t, r, o);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""),
                        c = e.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({
                    top: s - t - o
                })
            }
        };
        var i = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
            return e.fn.affix = i, this
        }, e(window).on("load", function () {
            e('[data-spy="affix"]').each(function () {
                var n = e(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
            })
        })
    }(jQuery), !
    function (e) {
        var t = "object" == typeof window && window || "object" == typeof self && self;
        "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
            return t.hljs
        }))
    }(function (e) {
        function t(e) {
            return e.replace(/[&<>]/gm, function (e) {
                return A[e]
            })
        }

        function n(e) {
            return e.nodeName.toLowerCase()
        }

        function i(e, t) {
            var n = e && e.exec(t);
            return n && 0 === n.index
        }

        function r(e) {
            return T.test(e)
        }

        function o(e) {
            var t, n, i, o, s = e.className + " ";
            if (s += e.parentNode ? e.parentNode.className : "", n = N.exec(s)) return w(n[1]) ? n[1] : "no-highlight";
            for (s = s.split(/\s+/), t = 0, i = s.length; i > t; t++) if (o = s[t], r(o) || w(o)) return o
        }

        function s(e, t) {
            var n, i = {};
            for (n in e) i[n] = e[n];
            if (t) for (n in t) i[n] = t[n];
            return i
        }

        function a(e) {
            var t = [];
            return function i(e, r) {
                for (var o = e.firstChild; o; o = o.nextSibling) 3 === o.nodeType ? r += o.nodeValue.length : 1 === o.nodeType && (t.push({
                    event: "start",
                    offset: r,
                    node: o
                }), r = i(o, r), n(o).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: r,
                    node: o
                }));
                return r
            }(e, 0), t
        }

        function l(e, i, r) {
            function o() {
                return e.length && i.length ? e[0].offset !== i[0].offset ? e[0].offset < i[0].offset ? e : i : "start" === i[0].event ? e : i : e.length ? e : i
            }

            function s(e) {
                function i(e) {
                    return " " + e.nodeName + '="' + t(e.value) + '"'
                }

                u += "<" + n(e) + x.map.call(e.attributes, i).join("") + ">"
            }

            function a(e) {
                u += "</" + n(e) + ">"
            }

            function l(e) {
                ("start" === e.event ? s : a)(e.node)
            }

            for (var c = 0, u = "", d = []; e.length || i.length;) {
                var p = o();
                if (u += t(r.substr(c, p[0].offset - c)), c = p[0].offset, p === e) {
                    d.reverse().forEach(a);
                    do l(p.splice(0, 1)[0]), p = o();
                    while (p === e && p.length && p[0].offset === c);
                    d.reverse().forEach(s)
                } else "start" === p[0].event ? d.push(p[0].node) : d.pop(), l(p.splice(0, 1)[0])
            }
            return u + t(r.substr(c))
        }

        function c(e) {
            function t(e) {
                return e && e.source || e
            }

            function n(n, i) {
                return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (i ? "g" : ""))
            }

            function i(r, o) {
                if (!r.compiled) {
                    if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
                        var a = {},
                            l = function (t, n) {
                                e.cI && (n = n.toLowerCase()), n.split(" ").forEach(function (e) {
                                    var n = e.split("|");
                                    a[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                                })
                            };
                        "string" == typeof r.k ? l("keyword", r.k) : k(r.k).forEach(function (e) {
                            l(e, r.k[e])
                        }), r.k = a
                    }
                    r.lR = n(r.l || /\w+/, !0), o && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = n(r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = n(r.e)), r.tE = t(r.e) || "", r.eW && o.tE && (r.tE += (r.e ? "|" : "") + o.tE)), r.i && (r.iR = n(r.i)), null == r.r && (r.r = 1), r.c || (r.c = []);
                    var c = [];
                    r.c.forEach(function (e) {
                        e.v ? e.v.forEach(function (t) {
                            c.push(s(e, t))
                        }) : c.push("self" === e ? r : e)
                    }), r.c = c, r.c.forEach(function (e) {
                        i(e, r)
                    }), r.starts && i(r.starts, o);
                    var u = r.c.map(function (e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([r.tE, r.i]).map(t).filter(Boolean);
                    r.t = u.length ? n(u.join("|"), !0) : {
                        exec: function () {
                            return null
                        }
                    }
                }
            }

            i(e)
        }

        function u(e, n, r, o) {
            function s(e, t) {
                var n, r;
                for (n = 0, r = t.c.length; r > n; n++) if (i(t.c[n].bR, e)) return t.c[n]
            }

            function a(e, t) {
                if (i(e.eR, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                return e.eW ? a(e.parent, t) : void 0
            }

            function l(e, t) {
                return !r && i(t.iR, e)
            }

            function p(e, t) {
                var n = y.cI ? t[0].toLowerCase() : t[0];
                return e.k.hasOwnProperty(n) && e.k[n]
            }

            function f(e, t, n, i) {
                var r = i ? "" : $.classPrefix,
                    o = '<span class="' + r,
                    s = n ? "" : E;
                return o += e + '">', o + t + s
            }

            function h() {
                var e, n, i, r;
                if (!k.k) return t(N);
                for (r = "", n = 0, k.lR.lastIndex = 0, i = k.lR.exec(N); i;) r += t(N.substr(n, i.index - n)), e = p(k, i), e ? (S += e[1], r += f(e[0], t(i[0]))) : r += t(i[0]), n = k.lR.lastIndex, i = k.lR.exec(N);
                return r + t(N.substr(n))
            }

            function g() {
                var e = "string" == typeof k.sL;
                if (e && !_[k.sL]) return t(N);
                var n = e ? u(k.sL, N, !0, C[k.sL]) : d(N, k.sL.length ? k.sL : void 0);
                return k.r > 0 && (S += n.r), e && (C[k.sL] = n.top), f(n.language, n.value, !1, !0)
            }

            function m() {
                T += null != k.sL ? g() : h(), N = ""
            }

            function v(e) {
                T += e.cN ? f(e.cN, "", !0) : "", k = Object.create(e, {
                    parent: {
                        value: k
                    }
                })
            }

            function b(e, t) {
                if (N += e, null == t) return m(), 0;
                var n = s(t, k);
                if (n) return n.skip ? N += t : (n.eB && (N += t), m(), n.rB || n.eB || (N = t)), v(n, t), n.rB ? 0 : t.length;
                var i = a(k, t);
                if (i) {
                    var r = k;
                    r.skip ? N += t : (r.rE || r.eE || (N += t), m(), r.eE && (N = t));
                    do k.cN && (T += E), k.skip || (S += k.r), k = k.parent;
                    while (k !== i.parent);
                    return i.starts && v(i.starts, ""), r.rE ? 0 : t.length
                }
                if (l(t, k)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (k.cN || "<unnamed>") + '"');
                return N += t, t.length || 1
            }

            var y = w(e);
            if (!y) throw new Error('Unknown language: "' + e + '"');
            c(y);
            var x, k = o || y,
                C = {},
                T = "";
            for (x = k; x !== y; x = x.parent) x.cN && (T = f(x.cN, "", !0) + T);
            var N = "",
                S = 0;
            try {
                for (var A, L, I = 0; k.t.lastIndex = I, A = k.t.exec(n), A;) L = b(n.substr(I, A.index - I), A[0]), I = A.index + L;
                for (b(n.substr(I)), x = k; x.parent; x = x.parent) x.cN && (T += E);
                return {
                    r: S,
                    value: T,
                    language: e,
                    top: k
                }
            } catch (q) {
                if (q.message && -1 !== q.message.indexOf("Illegal")) return {
                    r: 0,
                    value: t(n)
                };
                throw q
            }
        }

        function d(e, n) {
            n = n || $.languages || k(_);
            var i = {
                    r: 0,
                    value: t(e)
                },
                r = i;
            return n.filter(w).forEach(function (t) {
                var n = u(t, e, !1);
                n.language = t, n.r > r.r && (r = n), n.r > i.r && (r = i, i = n)
            }), r.language && (i.second_best = r), i
        }

        function p(e) {
            return $.tabReplace || $.useBR ? e.replace(S, function (e, t) {
                return $.useBR && "\n" === e ? "<br>" : $.tabReplace ? t.replace(/\t/g, $.tabReplace) : void 0
            }) : e
        }

        function f(e, t, n) {
            var i = t ? C[t] : n,
                r = [e.trim()];
            return e.match(/\bhljs\b/) || r.push("hljs"), -1 === e.indexOf(i) && r.push(i), r.join(" ").trim()
        }

        function h(e) {
            var t, n, i, s, c, h = o(e);
            r(h) || ($.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, c = t.textContent, i = h ? u(h, c, !0) : d(c), n = a(t), n.length && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), s.innerHTML = i.value, i.value = l(n, a(s), c)), i.value = p(i.value), e.innerHTML = i.value, e.className = f(e.className, h, i.language), e.result = {
                language: i.language,
                re: i.r
            }, i.second_best && (e.second_best = {
                language: i.second_best.language,
                re: i.second_best.r
            }))
        }

        function g(e) {
            $ = s($, e)
        }

        function m() {
            if (!m.called) {
                m.called = !0;
                var e = document.querySelectorAll("pre code");
                x.forEach.call(e, h)
            }
        }

        function v() {
            addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1)
        }

        function b(t, n) {
            var i = _[t] = n(e);
            i.aliases && i.aliases.forEach(function (e) {
                C[e] = t
            })
        }

        function y() {
            return k(_)
        }

        function w(e) {
            return e = (e || "").toLowerCase(), _[e] || _[C[e]]
        }

        var x = [],
            k = Object.keys,
            _ = {},
            C = {},
            T = /^(no-?highlight|plain|text)$/i,
            N = /\blang(?:uage)?-([\w-]+)\b/i,
            S = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            E = "</span>",
            $ = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            },
            A = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            };
        return e.highlight = u, e.highlightAuto = d, e.fixMarkup = p, e.highlightBlock = h, e.configure = g, e.initHighlighting = m, e.initHighlightingOnLoad = v, e.registerLanguage = b, e.listLanguages = y, e.getLanguage = w, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
            b: "\\\\[\\s\\S]",
            r: 0
        }, e.ASM = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE]
        }, e.QSM = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, e.PWM = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
        }, e.C = function (t, n, i) {
            var r = e.inherit({
                cN: "comment",
                b: t,
                e: n,
                c: []
            }, i || {});
            return r.c.push(e.PWM), r.c.push({
                cN: "doctag",
                b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                r: 0
            }), r
        }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
            cN: "number",
            b: e.NR,
            r: 0
        }, e.CNM = {
            cN: "number",
            b: e.CNR,
            r: 0
        }, e.BNM = {
            cN: "number",
            b: e.BNR,
            r: 0
        }, e.CSSNM = {
            cN: "number",
            b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            r: 0
        }, e.RM = {
            cN: "regexp",
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE,
                {
                    b: /\[/,
                    e: /\]/,
                    r: 0,
                    c: [e.BE]
                }]
        }, e.TM = {
            cN: "title",
            b: e.IR,
            r: 0
        }, e.UTM = {
            cN: "title",
            b: e.UIR,
            r: 0
        }, e.METHOD_GUARD = {
            b: "\\.\\s*" + e.UIR,
            r: 0
        }, e.registerLanguage("apache", function (e) {
            var t = {
                cN: "number",
                b: "[\\$%]\\d+"
            };
            return {
                aliases: ["apacheconf"],
                cI: !0,
                c: [e.HCM,
                    {
                        cN: "section",
                        b: "</?",
                        e: ">"
                    }, {
                        cN: "attribute",
                        b: /\w+/,
                        r: 0,
                        k: {
                            nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                        },
                        starts: {
                            e: /$/,
                            r: 0,
                            k: {
                                literal: "on off all"
                            },
                            c: [{
                                cN: "meta",
                                b: "\\s\\[",
                                e: "\\]$"
                            }, {
                                cN: "variable",
                                b: "[\\$%]\\{",
                                e: "\\}",
                                c: ["self", t]
                            },
                                t, e.QSM]
                        }
                    }],
                i: /\S/
            }
        }), e.registerLanguage("bash", function (e) {
            var t = {
                    cN: "variable",
                    v: [{
                        b: /\$[\w\d#@][\w\d_]*/
                    }, {
                        b: /\$\{(.*?)}/
                    }]
                },
                n = {
                    cN: "string",
                    b: /"/,
                    e: /"/,
                    c: [e.BE, t,
                        {
                            cN: "variable",
                            b: /\$\(/,
                            e: /\)/,
                            c: [e.BE]
                        }]
                },
                i = {
                    cN: "string",
                    b: /'/,
                    e: /'/
                };
            return {
                aliases: ["sh", "zsh"],
                l: /-?[a-z\._]+/,
                k: {
                    keyword: "if then else elif fi for while in do done case esac function",
                    literal: "true false",
                    built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                    _: "-ne -eq -lt -gt -f -d -e -s -l -a"
                },
                c: [{
                    cN: "meta",
                    b: /^#![^\n]+sh\s*$/,
                    r: 10
                }, {
                    cN: "function",
                    b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                    rB: !0,
                    c: [e.inherit(e.TM, {
                        b: /\w[\w\d_]*/
                    })],
                    r: 0
                },
                    e.HCM, n, i, t]
            }
        }), e.registerLanguage("coffeescript", function (e) {
            var t = {
                    keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
                    literal: "true false null undefined yes no on off",
                    built_in: "npm require console print module global window document"
                },
                n = "[A-Za-z$_][0-9A-Za-z$_]*",
                i = {
                    cN: "subst",
                    b: /#\{/,
                    e: /}/,
                    k: t
                },
                r = [e.BNM, e.inherit(e.CNM, {
                    starts: {
                        e: "(\\s*/)?",
                        r: 0
                    }
                }),
                    {
                        cN: "string",
                        v: [{
                            b: /'''/,
                            e: /'''/,
                            c: [e.BE]
                        }, {
                            b: /'/,
                            e: /'/,
                            c: [e.BE]
                        }, {
                            b: /"""/,
                            e: /"""/,
                            c: [e.BE, i]
                        }, {
                            b: /"/,
                            e: /"/,
                            c: [e.BE, i]
                        }]
                    }, {
                        cN: "regexp",
                        v: [{
                            b: "///",
                            e: "///",
                            c: [i, e.HCM]
                        }, {
                            b: "//[gim]*",
                            r: 0
                        }, {
                            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                        }]
                    }, {
                        b: "@" + n
                    }, {
                        b: "`",
                        e: "`",
                        eB: !0,
                        eE: !0,
                        sL: "javascript"
                    }];
            i.c = r;
            var o = e.inherit(e.TM, {
                    b: n
                }),
                s = "(\\(.*\\))?\\s*\\B[-=]>",
                a = {
                    cN: "params",
                    b: "\\([^\\(]",
                    rB: !0,
                    c: [{
                        b: /\(/,
                        e: /\)/,
                        k: t,
                        c: ["self"].concat(r)
                    }]
                };
            return {
                aliases: ["coffee", "cson", "iced"],
                k: t,
                i: /\/\*/,
                c: r.concat([e.C("###", "###"), e.HCM,
                    {
                        cN: "function",
                        b: "^\\s*" + n + "\\s*=\\s*" + s,
                        e: "[-=]>",
                        rB: !0,
                        c: [o, a]
                    }, {
                        b: /[:\(,=]\s*/,
                        r: 0,
                        c: [{
                            cN: "function",
                            b: s,
                            e: "[-=]>",
                            rB: !0,
                            c: [a]
                        }]
                    }, {
                        cN: "class",
                        bK: "class",
                        e: "$",
                        i: /[:="\[\]]/,
                        c: [{
                            bK: "extends",
                            eW: !0,
                            i: /[:="\[\]]/,
                            c: [o]
                        },
                            o]
                    }, {
                        b: n + ":",
                        e: ":",
                        rB: !0,
                        rE: !0,
                        r: 0
                    }])
            }
        }), e.registerLanguage("cpp", function (e) {
            var t = {
                    cN: "keyword",
                    b: "\\b[a-z\\d_]*_t\\b"
                },
                n = {
                    cN: "string",
                    v: [{
                        b: '(u8?|U)?L?"',
                        e: '"',
                        i: "\\n",
                        c: [e.BE]
                    }, {
                        b: '(u8?|U)?R"',
                        e: '"',
                        c: [e.BE]
                    }, {
                        b: "'\\\\?.",
                        e: "'",
                        i: "."
                    }]
                },
                i = {
                    cN: "number",
                    v: [{
                        b: "\\b(0b[01'_]+)"
                    }, {
                        b: "\\b([\\d'_]+(\\.[\\d'_]*)?|\\.[\\d'_]+)(u|U|l|L|ul|UL|f|F|b|B)"
                    }, {
                        b: "(-?)(\\b0[xX][a-fA-F0-9'_]+|(\\b[\\d'_]+(\\.[\\d'_]*)?|\\.[\\d'_]+)([eE][-+]?[\\d'_]+)?)"
                    }],
                    r: 0
                },
                r = {
                    cN: "meta",
                    b: /#\s*[a-z]+\b/,
                    e: /$/,
                    k: {
                        "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
                    },
                    c: [{
                        b: /\\\n/,
                        r: 0
                    },
                        e.inherit(n, {
                            cN: "meta-string"
                        }),
                        {
                            cN: "meta-string",
                            b: "<",
                            e: ">",
                            i: "\\n"
                        },
                        e.CLCM, e.CBCM]
                },
                o = e.IR + "\\s*\\(",
                s = {
                    keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return",
                    built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
                    literal: "true false nullptr NULL"
                },
                a = [t, e.CLCM, e.CBCM, i, n];
            return {
                aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
                k: s,
                i: "</",
                c: a.concat([r,
                    {
                        b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                        e: ">",
                        k: s,
                        c: ["self", t]
                    }, {
                        b: e.IR + "::",
                        k: s
                    }, {
                        v: [{
                            b: /=/,
                            e: /;/
                        }, {
                            b: /\(/,
                            e: /\)/
                        }, {
                            bK: "new throw return else",
                            e: /;/
                        }],
                        k: s,
                        c: a.concat([{
                            b: /\(/,
                            e: /\)/,
                            k: s,
                            c: a.concat(["self"]),
                            r: 0
                        }]),
                        r: 0
                    }, {
                        cN: "function",
                        b: "(" + e.IR + "[\\*&\\s]+)+" + o,
                        rB: !0,
                        e: /[{;=]/,
                        eE: !0,
                        k: s,
                        i: /[^\w\s\*&]/,
                        c: [{
                            b: o,
                            rB: !0,
                            c: [e.TM],
                            r: 0
                        }, {
                            cN: "params",
                            b: /\(/,
                            e: /\)/,
                            k: s,
                            r: 0,
                            c: [e.CLCM, e.CBCM, n, i, t]
                        },
                            e.CLCM, e.CBCM, r]
                    }]),
                exports: {
                    preprocessor: r,
                    strings: n,
                    k: s
                }
            }
        }), e.registerLanguage("cs", function (e) {
            var t = {
                    keyword: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async nameof ascending descending from get group into join let orderby partial select set value var where yield",
                    literal: "null false true"
                },
                n = {
                    cN: "string",
                    b: '@"',
                    e: '"',
                    c: [{
                        b: '""'
                    }]
                },
                i = e.inherit(n, {
                    i: /\n/
                }),
                r = {
                    cN: "subst",
                    b: "{",
                    e: "}",
                    k: t
                },
                o = e.inherit(r, {
                    i: /\n/
                }),
                s = {
                    cN: "string",
                    b: /\$"/,
                    e: '"',
                    i: /\n/,
                    c: [{
                        b: "{{"
                    }, {
                        b: "}}"
                    },
                        e.BE, o]
                },
                a = {
                    cN: "string",
                    b: /\$@"/,
                    e: '"',
                    c: [{
                        b: "{{"
                    }, {
                        b: "}}"
                    }, {
                        b: '""'
                    },
                        r]
                },
                l = e.inherit(a, {
                    i: /\n/,
                    c: [{
                        b: "{{"
                    }, {
                        b: "}}"
                    }, {
                        b: '""'
                    },
                        o]
                });
            r.c = [a, s, n, e.ASM, e.QSM, e.CNM, e.CBCM], o.c = [l, s, i, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
                i: /\n/
            })];
            var c = {
                    v: [a, s, n, e.ASM, e.QSM]
                },
                u = e.IR + "(<" + e.IR + ">)?(\\[\\])?";
            return {
                aliases: ["csharp"],
                k: t,
                i: /::/,
                c: [e.C("///", "$", {
                    rB: !0,
                    c: [{
                        cN: "doctag",
                        v: [{
                            b: "///",
                            r: 0
                        }, {
                            b: "<!--|-->"
                        }, {
                            b: "</?",
                            e: ">"
                        }]
                    }]
                }), e.CLCM, e.CBCM,
                    {
                        cN: "meta",
                        b: "#",
                        e: "$",
                        k: {
                            "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                        }
                    },
                    c, e.CNM,
                    {
                        bK: "class interface",
                        e: /[{;=]/,
                        i: /[^\s:]/,
                        c: [e.TM, e.CLCM, e.CBCM]
                    }, {
                        bK: "namespace",
                        e: /[{;=]/,
                        i: /[^\s:]/,
                        c: [e.inherit(e.TM, {
                            b: "[a-zA-Z](\\.?\\w)*"
                        }), e.CLCM, e.CBCM]
                    }, {
                        bK: "new return throw await",
                        r: 0
                    }, {
                        cN: "function",
                        b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(",
                        rB: !0,
                        e: /[{;=]/,
                        eE: !0,
                        k: t,
                        c: [{
                            b: e.IR + "\\s*\\(",
                            rB: !0,
                            c: [e.TM],
                            r: 0
                        }, {
                            cN: "params",
                            b: /\(/,
                            e: /\)/,
                            eB: !0,
                            eE: !0,
                            k: t,
                            r: 0,
                            c: [c, e.CNM, e.CBCM]
                        },
                            e.CLCM, e.CBCM]
                    }]
            }
        }), e.registerLanguage("css", function (e) {
            var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
                n = {
                    b: /[A-Z\_\.\-]+\s*:/,
                    rB: !0,
                    e: ";",
                    eW: !0,
                    c: [{
                        cN: "attribute",
                        b: /\S/,
                        e: ":",
                        eE: !0,
                        starts: {
                            eW: !0,
                            eE: !0,
                            c: [{
                                b: /[\w-]+\(/,
                                rB: !0,
                                c: [{
                                    cN: "built_in",
                                    b: /[\w-]+/
                                }, {
                                    b: /\(/,
                                    e: /\)/,
                                    c: [e.ASM, e.QSM]
                                }]
                            },
                                e.CSSNM, e.QSM, e.ASM, e.CBCM,
                                {
                                    cN: "number",
                                    b: "#[0-9A-Fa-f]+"
                                }, {
                                    cN: "meta",
                                    b: "!important"
                                }]
                        }
                    }]
                };
            return {
                cI: !0,
                i: /[=\/|'\$]/,
                c: [e.CBCM,
                    {
                        cN: "selector-id",
                        b: /#[A-Za-z0-9_-]+/
                    }, {
                        cN: "selector-class",
                        b: /\.[A-Za-z0-9_-]+/
                    }, {
                        cN: "selector-attr",
                        b: /\[/,
                        e: /\]/,
                        i: "$"
                    }, {
                        cN: "selector-pseudo",
                        b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                    }, {
                        b: "@(font-face|page)",
                        l: "[a-z-]+",
                        k: "font-face page"
                    }, {
                        b: "@",
                        e: "[{;]",
                        i: /:/,
                        c: [{
                            cN: "keyword",
                            b: /\w+/
                        }, {
                            b: /\s/,
                            eW: !0,
                            eE: !0,
                            r: 0,
                            c: [e.ASM, e.QSM, e.CSSNM]
                        }]
                    }, {
                        cN: "selector-tag",
                        b: t,
                        r: 0
                    }, {
                        b: "{",
                        e: "}",
                        i: /\S/,
                        c: [e.CBCM, n]
                    }]
            }
        }), e.registerLanguage("diff", function (e) {
            return {
                aliases: ["patch"],
                c: [{
                    cN: "meta",
                    r: 10,
                    v: [{
                        b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                    }, {
                        b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                    }, {
                        b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                    }]
                }, {
                    cN: "comment",
                    v: [{
                        b: /Index: /,
                        e: /$/
                    }, {
                        b: /={3,}/,
                        e: /$/
                    }, {
                        b: /^\-{3}/,
                        e: /$/
                    }, {
                        b: /^\*{3} /,
                        e: /$/
                    }, {
                        b: /^\+{3}/,
                        e: /$/
                    }, {
                        b: /\*{5}/,
                        e: /\*{5}$/
                    }]
                }, {
                    cN: "addition",
                    b: "^\\+",
                    e: "$"
                }, {
                    cN: "deletion",
                    b: "^\\-",
                    e: "$"
                }, {
                    cN: "addition",
                    b: "^\\!",
                    e: "$"
                }]
            }
        }), e.registerLanguage("http", function (e) {
            var t = "HTTP/[0-9\\.]+";
            return {
                aliases: ["https"],
                i: "\\S",
                c: [{
                    b: "^" + t,
                    e: "$",
                    c: [{
                        cN: "number",
                        b: "\\b\\d{3}\\b"
                    }]
                }, {
                    b: "^[A-Z]+ (.*?) " + t + "$",
                    rB: !0,
                    e: "$",
                    c: [{
                        cN: "string",
                        b: " ",
                        e: " ",
                        eB: !0,
                        eE: !0
                    }, {
                        b: t
                    }, {
                        cN: "keyword",
                        b: "[A-Z]+"
                    }]
                }, {
                    cN: "attribute",
                    b: "^\\w",
                    e: ": ",
                    eE: !0,
                    i: "\\n|\\s|=",
                    starts: {
                        e: "$",
                        r: 0
                    }
                }, {
                    b: "\\n\\n",
                    starts: {
                        sL: [],
                        eW: !0
                    }
                }]
            }
        }), e.registerLanguage("ini", function (e) {
            var t = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: "'''",
                    e: "'''",
                    r: 10
                }, {
                    b: '"""',
                    e: '"""',
                    r: 10
                }, {
                    b: '"',
                    e: '"'
                }, {
                    b: "'",
                    e: "'"
                }]
            };
            return {
                aliases: ["toml"],
                cI: !0,
                i: /\S/,
                c: [e.C(";", "$"), e.HCM,
                    {
                        cN: "section",
                        b: /^\s*\[+/,
                        e: /\]+/
                    }, {
                        b: /^[a-z0-9\[\]_-]+\s*=\s*/,
                        e: "$",
                        rB: !0,
                        c: [{
                            cN: "attr",
                            b: /[a-z0-9\[\]_-]+/
                        }, {
                            b: /=/,
                            eW: !0,
                            r: 0,
                            c: [{
                                cN: "literal",
                                b: /\bon|off|true|false|yes|no\b/
                            }, {
                                cN: "variable",
                                v: [{
                                    b: /\$[\w\d"][\w\d_]*/
                                }, {
                                    b: /\$\{(.*?)}/
                                }]
                            },
                                t,
                                {
                                    cN: "number",
                                    b: /([\+\-]+)?[\d]+_[\d_]+/
                                },
                                e.NM]
                        }]
                    }]
            }
        }), e.registerLanguage("java", function (e) {
            var t = e.UIR + "(<" + e.UIR + "(\\s*,\\s*" + e.UIR + ")*>)?",
                n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports",
                i = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
                r = {
                    cN: "number",
                    b: i,
                    r: 0
                };
            return {
                aliases: ["jsp"],
                k: n,
                i: /<\/|#/,
                c: [e.C("/\\*\\*", "\\*/", {
                    r: 0,
                    c: [{
                        b: /\w+@/,
                        r: 0
                    }, {
                        cN: "doctag",
                        b: "@[A-Za-z]+"
                    }]
                }), e.CLCM, e.CBCM, e.ASM, e.QSM,
                    {
                        cN: "class",
                        bK: "class interface",
                        e: /[{;=]/,
                        eE: !0,
                        k: "class interface",
                        i: /[:"\[\]]/,
                        c: [{
                            bK: "extends implements"
                        },
                            e.UTM]
                    }, {
                        bK: "new throw return else",
                        r: 0
                    }, {
                        cN: "function",
                        b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
                        rB: !0,
                        e: /[{;=]/,
                        eE: !0,
                        k: n,
                        c: [{
                            b: e.UIR + "\\s*\\(",
                            rB: !0,
                            r: 0,
                            c: [e.UTM]
                        }, {
                            cN: "params",
                            b: /\(/,
                            e: /\)/,
                            k: n,
                            r: 0,
                            c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                        },
                            e.CLCM, e.CBCM]
                    },
                    r,
                    {
                        cN: "meta",
                        b: "@[A-Za-z]+"
                    }]
            }
        }), e.registerLanguage("javascript", function (e) {
            return {
                aliases: ["js", "jsx"],
                k: {
                    keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                    literal: "true false null undefined NaN Infinity",
                    built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
                },
                c: [{
                    cN: "meta",
                    r: 10,
                    b: /^\s*['"]use (strict|asm)['"]/
                }, {
                    cN: "meta",
                    b: /^#!/,
                    e: /$/
                },
                    e.ASM, e.QSM,
                    {
                        cN: "string",
                        b: "`",
                        e: "`",
                        c: [e.BE,
                            {
                                cN: "subst",
                                b: "\\$\\{",
                                e: "\\}"
                            }]
                    },
                    e.CLCM, e.CBCM,
                    {
                        cN: "number",
                        v: [{
                            b: "\\b(0[bB][01]+)"
                        }, {
                            b: "\\b(0[oO][0-7]+)"
                        }, {
                            b: e.CNR
                        }],
                        r: 0
                    }, {
                        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                        k: "return throw case",
                        c: [e.CLCM, e.CBCM, e.RM,
                            {
                                b: /</,
                                e: /(\/\w+|\w+\/)>/,
                                sL: "xml",
                                c: [{
                                    b: /<\w+\s*\/>/,
                                    skip: !0
                                }, {
                                    b: /<\w+/,
                                    e: /(\/\w+|\w+\/)>/,
                                    skip: !0,
                                    c: ["self"]
                                }]
                            }],
                        r: 0
                    }, {
                        cN: "function",
                        bK: "function",
                        e: /\{/,
                        eE: !0,
                        c: [e.inherit(e.TM, {
                            b: /[A-Za-z$_][0-9A-Za-z$_]*/
                        }),
                            {
                                cN: "params",
                                b: /\(/,
                                e: /\)/,
                                eB: !0,
                                eE: !0,
                                c: [e.CLCM, e.CBCM]
                            }],
                        i: /\[|%/
                    }, {
                        b: /\$[(.]/
                    },
                    e.METHOD_GUARD,
                    {
                        cN: "class",
                        bK: "class",
                        e: /[{;=]/,
                        eE: !0,
                        i: /[:"\[\]]/,
                        c: [{
                            bK: "extends"
                        },
                            e.UTM]
                    }, {
                        bK: "constructor",
                        e: /\{/,
                        eE: !0
                    }],
                i: /#(?!!)/
            }
        }), e.registerLanguage("json", function (e) {
            var t = {
                    literal: "true false null"
                },
                n = [e.QSM, e.CNM],
                i = {
                    e: ",",
                    eW: !0,
                    eE: !0,
                    c: n,
                    k: t
                },
                r = {
                    b: "{",
                    e: "}",
                    c: [{
                        cN: "attr",
                        b: /"/,
                        e: /"/,
                        c: [e.BE],
                        i: "\\n"
                    },
                        e.inherit(i, {
                            b: /:/
                        })],
                    i: "\\S"
                },
                o = {
                    b: "\\[",
                    e: "\\]",
                    c: [e.inherit(i)],
                    i: "\\S"
                };
            return n.splice(n.length, 0, r, o), {
                c: n,
                k: t,
                i: "\\S"
            }
        }), e.registerLanguage("makefile", function (e) {
            var t = {
                cN: "variable",
                b: /\$\(/,
                e: /\)/,
                c: [e.BE]
            };
            return {
                aliases: ["mk", "mak"],
                c: [e.HCM,
                    {
                        b: /^\w+\s*\W*=/,
                        rB: !0,
                        r: 0,
                        starts: {
                            e: /\s*\W*=/,
                            eE: !0,
                            starts: {
                                e: /$/,
                                r: 0,
                                c: [t]
                            }
                        }
                    }, {
                        cN: "section",
                        b: /^[\w]+:\s*$/
                    }, {
                        cN: "meta",
                        b: /^\.PHONY:/,
                        e: /$/,
                        k: {
                            "meta-keyword": ".PHONY"
                        },
                        l: /[\.\w]+/
                    }, {
                        b: /^\t+/,
                        e: /$/,
                        r: 0,
                        c: [e.QSM, t]
                    }]
            }
        }), e.registerLanguage("xml", function (e) {
            var t = "[A-Za-z0-9\\._:-]+",
                n = {
                    eW: !0,
                    i: /</,
                    r: 0,
                    c: [{
                        cN: "attr",
                        b: t,
                        r: 0
                    }, {
                        b: /=\s*/,
                        r: 0,
                        c: [{
                            cN: "string",
                            endsParent: !0,
                            v: [{
                                b: /"/,
                                e: /"/
                            }, {
                                b: /'/,
                                e: /'/
                            }, {
                                b: /[^\s"'=<>`]+/
                            }]
                        }]
                    }]
                };
            return {
                aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
                cI: !0,
                c: [{
                    cN: "meta",
                    b: "<!DOCTYPE",
                    e: ">",
                    r: 10,
                    c: [{
                        b: "\\[",
                        e: "\\]"
                    }]
                },
                    e.C("<!--", "-->", {
                        r: 10
                    }),
                    {
                        b: "<\\!\\[CDATA\\[",
                        e: "\\]\\]>",
                        r: 10
                    }, {
                        b: /<\?(php)?/,
                        e: /\?>/,
                        sL: "php",
                        c: [{
                            b: "/\\*",
                            e: "\\*/",
                            skip: !0
                        }]
                    }, {
                        cN: "tag",
                        b: "<style(?=\\s|>|$)",
                        e: ">",
                        k: {
                            name: "style"
                        },
                        c: [n],
                        starts: {
                            e: "</style>",
                            rE: !0,
                            sL: ["css", "xml"]
                        }
                    }, {
                        cN: "tag",
                        b: "<script(?=\\s|>|$)",
                        e: ">",
                        k: {
                            name: "script"
                        },
                        c: [n],
                        starts: {
                            e: "</script>",
                            rE: !0,
                            sL: ["actionscript", "javascript", "handlebars", "xml"]
                        }
                    }, {
                        cN: "meta",
                        v: [{
                            b: /<\?xml/,
                            e: /\?>/,
                            r: 10
                        }, {
                            b: /<\?\w+/,
                            e: /\?>/
                        }]
                    }, {
                        cN: "tag",
                        b: "</?",
                        e: "/?>",
                        c: [{
                            cN: "name",
                            b: /[^\/><\s]+/,
                            r: 0
                        },
                            n]
                    }]
            }
        }), e.registerLanguage("markdown", function (e) {
            return {
                aliases: ["md", "mkdown", "mkd"],
                c: [{
                    cN: "section",
                    v: [{
                        b: "^#{1,6}",
                        e: "$"
                    }, {
                        b: "^.+?\\n[=-]{2,}$"
                    }]
                }, {
                    b: "<",
                    e: ">",
                    sL: "xml",
                    r: 0
                }, {
                    cN: "bullet",
                    b: "^([*+-]|(\\d+\\.))\\s+"
                }, {
                    cN: "strong",
                    b: "[*_]{2}.+?[*_]{2}"
                }, {
                    cN: "emphasis",
                    v: [{
                        b: "\\*.+?\\*"
                    }, {
                        b: "_.+?_",
                        r: 0
                    }]
                }, {
                    cN: "quote",
                    b: "^>\\s+",
                    e: "$"
                }, {
                    cN: "code",
                    v: [{
                        b: "^```w*s*$",
                        e: "^```s*$"
                    }, {
                        b: "`.+?`"
                    }, {
                        b: "^( {4}|\t)",
                        e: "$",
                        r: 0
                    }]
                }, {
                    b: "^[-\\*]{3,}",
                    e: "$"
                }, {
                    b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                    rB: !0,
                    c: [{
                        cN: "string",
                        b: "\\[",
                        e: "\\]",
                        eB: !0,
                        rE: !0,
                        r: 0
                    }, {
                        cN: "link",
                        b: "\\]\\(",
                        e: "\\)",
                        eB: !0,
                        eE: !0
                    }, {
                        cN: "symbol",
                        b: "\\]\\[",
                        e: "\\]",
                        eB: !0,
                        eE: !0
                    }],
                    r: 10
                }, {
                    b: /^\[[^\n]+\]:/,
                    rB: !0,
                    c: [{
                        cN: "symbol",
                        b: /\[/,
                        e: /\]/,
                        eB: !0,
                        eE: !0
                    }, {
                        cN: "link",
                        b: /:\s*/,
                        e: /$/,
                        eB: !0
                    }]
                }]
            }
        }), e.registerLanguage("nginx", function (e) {
            var t = {
                    cN: "variable",
                    v: [{
                        b: /\$\d+/
                    }, {
                        b: /\$\{/,
                        e: /}/
                    }, {
                        b: "[\\$\\@]" + e.UIR
                    }]
                },
                n = {
                    eW: !0,
                    l: "[a-z/_]+",
                    k: {
                        literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                    },
                    r: 0,
                    i: "=>",
                    c: [e.HCM,
                        {
                            cN: "string",
                            c: [e.BE, t],
                            v: [{
                                b: /"/,
                                e: /"/
                            }, {
                                b: /'/,
                                e: /'/
                            }]
                        }, {
                            b: "([a-z]+):/",
                            e: "\\s",
                            eW: !0,
                            eE: !0,
                            c: [t]
                        }, {
                            cN: "regexp",
                            c: [e.BE, t],
                            v: [{
                                b: "\\s\\^",
                                e: "\\s|{|;",
                                rE: !0
                            }, {
                                b: "~\\*?\\s+",
                                e: "\\s|{|;",
                                rE: !0
                            }, {
                                b: "\\*(\\.[a-z\\-]+)+"
                            }, {
                                b: "([a-z\\-]+\\.)+\\*"
                            }]
                        }, {
                            cN: "number",
                            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                        }, {
                            cN: "number",
                            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                            r: 0
                        },
                        t]
                };
            return {
                aliases: ["nginxconf"],
                c: [e.HCM,
                    {
                        b: e.UIR + "\\s+{",
                        rB: !0,
                        e: "{",
                        c: [{
                            cN: "section",
                            b: e.UIR
                        }],
                        r: 0
                    }, {
                        b: e.UIR + "\\s",
                        e: ";|{",
                        rB: !0,
                        c: [{
                            cN: "attribute",
                            b: e.UIR,
                            starts: n
                        }],
                        r: 0
                    }],
                i: "[^\\s\\}]"
            }
        }), e.registerLanguage("objectivec", function (e) {
            var t = {
                    cN: "built_in",
                    b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                },
                n = {
                    keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
                    literal: "false true FALSE TRUE nil YES NO NULL",
                    built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
                },
                i = /[a-zA-Z@][a-zA-Z0-9_]*/,
                r = "@interface @class @protocol @implementation";
            return {
                aliases: ["mm", "objc", "obj-c"],
                k: n,
                l: i,
                i: "</",
                c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM,
                    {
                        cN: "string",
                        v: [{
                            b: '@"',
                            e: '"',
                            i: "\\n",
                            c: [e.BE]
                        }, {
                            b: "'",
                            e: "[^\\\\]'",
                            i: "[^\\\\][^']"
                        }]
                    }, {
                        cN: "meta",
                        b: "#",
                        e: "$",
                        c: [{
                            cN: "meta-string",
                            v: [{
                                b: '"',
                                e: '"'
                            }, {
                                b: "<",
                                e: ">"
                            }]
                        }]
                    }, {
                        cN: "class",
                        b: "(" + r.split(" ").join("|") + ")\\b",
                        e: "({|$)",
                        eE: !0,
                        k: r,
                        l: i,
                        c: [e.UTM]
                    }, {
                        b: "\\." + e.UIR,
                        r: 0
                    }]
            }
        }), e.registerLanguage("perl", function (e) {
            var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
                n = {
                    cN: "subst",
                    b: "[$@]\\{",
                    e: "\\}",
                    k: t
                },
                i = {
                    b: "->{",
                    e: "}"
                },
                r = {
                    v: [{
                        b: /\$\d/
                    }, {
                        b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                    }, {
                        b: /[\$%@][^\s\w{]/,
                        r: 0
                    }]
                },
                o = [e.BE, n, r],
                s = [r, e.HCM, e.C("^\\=\\w", "\\=cut", {
                    eW: !0
                }), i,
                    {
                        cN: "string",
                        c: o,
                        v: [{
                            b: "q[qwxr]?\\s*\\(",
                            e: "\\)",
                            r: 5
                        }, {
                            b: "q[qwxr]?\\s*\\[",
                            e: "\\]",
                            r: 5
                        }, {
                            b: "q[qwxr]?\\s*\\{",
                            e: "\\}",
                            r: 5
                        }, {
                            b: "q[qwxr]?\\s*\\|",
                            e: "\\|",
                            r: 5
                        }, {
                            b: "q[qwxr]?\\s*\\<",
                            e: "\\>",
                            r: 5
                        }, {
                            b: "qw\\s+q",
                            e: "q",
                            r: 5
                        }, {
                            b: "'",
                            e: "'",
                            c: [e.BE]
                        }, {
                            b: '"',
                            e: '"'
                        }, {
                            b: "`",
                            e: "`",
                            c: [e.BE]
                        }, {
                            b: "{\\w+}",
                            c: [],
                            r: 0
                        }, {
                            b: "-?\\w+\\s*\\=\\>",
                            c: [],
                            r: 0
                        }]
                    }, {
                        cN: "number",
                        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        r: 0
                    }, {
                        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                        k: "split return print reverse grep",
                        r: 0,
                        c: [e.HCM,
                            {
                                cN: "regexp",
                                b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                                r: 10
                            }, {
                                cN: "regexp",
                                b: "(m|qr)?/",
                                e: "/[a-z]*",
                                c: [e.BE],
                                r: 0
                            }]
                    }, {
                        cN: "function",
                        bK: "sub",
                        e: "(\\s*\\(.*?\\))?[;{]",
                        eE: !0,
                        r: 5,
                        c: [e.TM]
                    }, {
                        b: "-\\w\\b",
                        r: 0
                    }, {
                        b: "^__DATA__$",
                        e: "^__END__$",
                        sL: "mojolicious",
                        c: [{
                            b: "^@@.*",
                            e: "$",
                            cN: "comment"
                        }]
                    }];
            return n.c = s, i.c = s, {
                aliases: ["pl", "pm"],
                l: /[\w\.]+/,
                k: t,
                c: s
            }
        }), e.registerLanguage("php", function (e) {
            var t = {
                    b: "\\$+[a-zA-Z_-每][a-zA-Z0-9_-每]*"
                },
                n = {
                    cN: "meta",
                    b: /<\?(php)?|\?>/
                },
                i = {
                    cN: "string",
                    c: [e.BE, n],
                    v: [{
                        b: 'b"',
                        e: '"'
                    }, {
                        b: "b'",
                        e: "'"
                    },
                        e.inherit(e.ASM, {
                            i: null
                        }), e.inherit(e.QSM, {
                            i: null
                        })]
                },
                r = {
                    v: [e.BNM, e.CNM]
                };
            return {
                aliases: ["php3", "php4", "php5", "php6"],
                cI: !0,
                k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
                c: [e.HCM, e.C("//", "$", {
                    c: [n]
                }), e.C("/\\*", "\\*/", {
                    c: [{
                        cN: "doctag",
                        b: "@[A-Za-z]+"
                    }]
                }), e.C("__halt_compiler.+?;", !1, {
                    eW: !0,
                    k: "__halt_compiler",
                    l: e.UIR
                }),
                    {
                        cN: "string",
                        b: /<<<['"]?\w+['"]?$/,
                        e: /^\w+;?$/,
                        c: [e.BE,
                            {
                                cN: "subst",
                                v: [{
                                    b: /\$\w+/
                                }, {
                                    b: /\{\$/,
                                    e: /\}/
                                }]
                            }]
                    },
                    n,
                    {
                        cN: "keyword",
                        b: /\$this\b/
                    },
                    t,
                    {
                        b: /(::|->)+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*/
                    }, {
                        cN: "function",
                        bK: "function",
                        e: /[;{]/,
                        eE: !0,
                        i: "\\$|\\[|%",
                        c: [e.UTM,
                            {
                                cN: "params",
                                b: "\\(",
                                e: "\\)",
                                c: ["self", t, e.CBCM, i, r]
                            }]
                    }, {
                        cN: "class",
                        bK: "class interface",
                        e: "{",
                        eE: !0,
                        i: /[:\(\$"]/,
                        c: [{
                            bK: "extends implements"
                        },
                            e.UTM]
                    }, {
                        bK: "namespace",
                        e: ";",
                        i: /[\.']/,
                        c: [e.UTM]
                    }, {
                        bK: "use",
                        e: ";",
                        c: [e.UTM]
                    }, {
                        b: "=>"
                    },
                    i, r]
            }
        }), e.registerLanguage("python", function (e) {
            var t = {
                    cN: "meta",
                    b: /^(>>>|\.\.\.) /
                },
                n = {
                    cN: "string",
                    c: [e.BE],
                    v: [{
                        b: /(u|b)?r?'''/,
                        e: /'''/,
                        c: [t],
                        r: 10
                    }, {
                        b: /(u|b)?r?"""/,
                        e: /"""/,
                        c: [t],
                        r: 10
                    }, {
                        b: /(u|r|ur)'/,
                        e: /'/,
                        r: 10
                    }, {
                        b: /(u|r|ur)"/,
                        e: /"/,
                        r: 10
                    }, {
                        b: /(b|br)'/,
                        e: /'/
                    }, {
                        b: /(b|br)"/,
                        e: /"/
                    },
                        e.ASM, e.QSM]
                },
                i = {
                    cN: "number",
                    r: 0,
                    v: [{
                        b: e.BNR + "[lLjJ]?"
                    }, {
                        b: "\\b(0o[0-7]+)[lLjJ]?"
                    }, {
                        b: e.CNR + "[lLjJ]?"
                    }]
                },
                r = {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    c: ["self", t, i, n]
                };
            return {
                aliases: ["py", "gyp"],
                k: {
                    keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
                    built_in: "Ellipsis NotImplemented"
                },
                i: /(<\/|->|\?)/,
                c: [t, i, n, e.HCM,
                    {
                        v: [{
                            cN: "function",
                            bK: "def",
                            r: 10
                        }, {
                            cN: "class",
                            bK: "class"
                        }],
                        e: /:/,
                        i: /[${=;\n,]/,
                        c: [e.UTM, r,
                            {
                                b: /->/,
                                eW: !0,
                                k: "None"
                            }]
                    }, {
                        cN: "meta",
                        b: /^[\t ]*@/,
                        e: /$/
                    }, {
                        b: /\b(print|exec)\(/
                    }]
            }
        }), e.registerLanguage("ruby", function (e) {
            var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
                n = {
                    keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
                    literal: "true false nil"
                },
                i = {
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                },
                r = {
                    b: "#<",
                    e: ">"
                },
                o = [e.C("#", "$", {
                    c: [i]
                }), e.C("^\\=begin", "^\\=end", {
                    c: [i],
                    r: 10
                }), e.C("^__END__", "\\n$")],
                s = {
                    cN: "subst",
                    b: "#\\{",
                    e: "}",
                    k: n
                },
                a = {
                    cN: "string",
                    c: [e.BE, s],
                    v: [{
                        b: /'/,
                        e: /'/
                    }, {
                        b: /"/,
                        e: /"/
                    }, {
                        b: /`/,
                        e: /`/
                    }, {
                        b: "%[qQwWx]?\\(",
                        e: "\\)"
                    }, {
                        b: "%[qQwWx]?\\[",
                        e: "\\]"
                    }, {
                        b: "%[qQwWx]?{",
                        e: "}"
                    }, {
                        b: "%[qQwWx]?<",
                        e: ">"
                    }, {
                        b: "%[qQwWx]?/",
                        e: "/"
                    }, {
                        b: "%[qQwWx]?%",
                        e: "%"
                    }, {
                        b: "%[qQwWx]?-",
                        e: "-"
                    }, {
                        b: "%[qQwWx]?\\|",
                        e: "\\|"
                    }, {
                        b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                    }]
                },
                l = {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    endsParent: !0,
                    k: n
                },
                c = [a, r,
                    {
                        cN: "class",
                        bK: "class module",
                        e: "$|;",
                        i: /=/,
                        c: [e.inherit(e.TM, {
                            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                        }),
                            {
                                b: "<\\s*",
                                c: [{
                                    b: "(" + e.IR + "::)?" + e.IR
                                }]
                            }].concat(o)
                    }, {
                        cN: "function",
                        bK: "def",
                        e: "$|;",
                        c: [e.inherit(e.TM, {
                            b: t
                        }), l].concat(o)
                    }, {
                        b: e.IR + "::"
                    }, {
                        cN: "symbol",
                        b: e.UIR + "(\\!|\\?)?:",
                        r: 0
                    }, {
                        cN: "symbol",
                        b: ":(?!\\s)",
                        c: [a,
                            {
                                b: t
                            }],
                        r: 0
                    }, {
                        cN: "number",
                        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        r: 0
                    }, {
                        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
                    }, {
                        cN: "params",
                        b: /\|/,
                        e: /\|/,
                        k: n
                    }, {
                        b: "(" + e.RSR + ")\\s*",
                        c: [r,
                            {
                                cN: "regexp",
                                c: [e.BE, s],
                                i: /\n/,
                                v: [{
                                    b: "/",
                                    e: "/[a-z]*"
                                }, {
                                    b: "%r{",
                                    e: "}[a-z]*"
                                }, {
                                    b: "%r\\(",
                                    e: "\\)[a-z]*"
                                }, {
                                    b: "%r!",
                                    e: "![a-z]*"
                                }, {
                                    b: "%r\\[",
                                    e: "\\][a-z]*"
                                }]
                            }].concat(o),
                        r: 0
                    }].concat(o);
            s.c = c, l.c = c;
            var u = "[>?]>",
                d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
                p = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
                f = [{
                    b: /^\s*=>/,
                    starts: {
                        e: "$",
                        c: c
                    }
                }, {
                    cN: "meta",
                    b: "^(" + u + "|" + d + "|" + p + ")",
                    starts: {
                        e: "$",
                        c: c
                    }
                }];
            return {
                aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                k: n,
                i: /\/\*/,
                c: o.concat(f).concat(c)
            }
        }), e.registerLanguage("sql", function (e) {
            var t = e.C("--", "$");
            return {
                cI: !0,
                i: /[<>{}*#]/,
                c: [{
                    bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
                    e: /;/,
                    eW: !0,
                    l: /[\w\.]+/,
                    k: {
                        keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                        literal: "true false null",
                        built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
                    },
                    c: [{
                        cN: "string",
                        b: "'",
                        e: "'",
                        c: [e.BE,
                            {
                                b: "''"
                            }]
                    }, {
                        cN: "string",
                        b: '"',
                        e: '"',
                        c: [e.BE,
                            {
                                b: '""'
                            }]
                    }, {
                        cN: "string",
                        b: "`",
                        e: "`",
                        c: [e.BE]
                    },
                        e.CNM, e.CBCM, t]
                },
                    e.CBCM, t]
            }
        }), e
    }), function () {
    function e(e) {
        this.tokens = [], this.tokens.links = {}, this.options = e || c.defaults, this.rules = u.normal, this.options.gfm && (this.options.tables ? this.rules = u.tables : this.rules = u.gfm)
    }

    function t(e, t) {
        if (this.options = t || c.defaults, this.links = e, this.rules = d.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.options.breaks ? this.rules = d.breaks : this.rules = d.gfm : this.options.pedantic && (this.rules = d.pedantic)
    }

    function n(e) {
        this.options = e || {}
    }

    function i(e) {
        this.tokens = [], this.token = null, this.options = e || c.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
    }

    function r(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function o(e) {
        return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (e, t) {
            return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
    }

    function s(e, t) {
        return e = e.source, t = t || "", function n(i, r) {
            return i ? (r = r.source || r, r = r.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, r), n) : new RegExp(e, t)
        }
    }

    function a() {
    }

    function l(e) {
        for (var t, n, i = 1; i < arguments.length; i++) {
            t = arguments[i];
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }

    function c(t, n, o) {
        if (o || "function" == typeof n) {
            o || (o = n, n = null), n = l({}, c.defaults, n || {});
            var s, a, u = n.highlight,
                d = 0;
            try {
                s = e.lex(t, n)
            } catch (p) {
                return o(p)
            }
            a = s.length;
            var f = function (e) {
                if (e) return n.highlight = u, o(e);
                var t;
                try {
                    t = i.parse(s, n)
                } catch (r) {
                    e = r
                }
                return n.highlight = u, e ? o(e) : o(null, t)
            };
            if (!u || u.length < 3) return f();
            if (delete n.highlight, !a) return f();
            for (; d < s.length; d++)!
                function (e) {
                    return "code" !== e.type ? --a || f() : u(e.text, e.lang, function (t, n) {
                        return t ? f(t) : null == n || n === e.text ? --a || f() : (e.text = n, e.escaped = !0, void(--a || f()))
                    })
                }(s[d])
        } else try {
            return n && (n = l({}, c.defaults, n)), i.parse(e.lex(t, n), n)
        } catch (p) {
            if (p.message += "\nPlease report this to https://github.com/chjj/marked.", (n || c.defaults).silent) return "<p>An error occured:</p><pre>" + r(p.message + "", !0) + "</pre>";
            throw p
        }
    }

    var u = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: a,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: a,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: a,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    u.bullet = /(?:[*+-]|\d+\.)/, u.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, u.item = s(u.item, "gm")(/bull/g, u.bullet)(), u.list = s(u.list)(/bull/g, u.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + u.def.source + ")")(), u.blockquote = s(u.blockquote)("def", u.def)(), u._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", u.html = s(u.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, u._tag)(), u.paragraph = s(u.paragraph)("hr", u.hr)("heading", u.heading)("lheading", u.lheading)("blockquote", u.blockquote)("tag", "<" + u._tag)("def", u.def)(), u.normal = l({}, u), u.gfm = l({}, u.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    }), u.gfm.paragraph = s(u.paragraph)("(?!", "(?!" + u.gfm.fences.source.replace("\\1", "\\2") + "|" + u.list.source.replace("\\1", "\\3") + "|")(), u.tables = l({}, u.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    }), e.rules = u, e.lex = function (t, n) {
        var i = new e(n);
        return i.lex(t)
    }, e.prototype.lex = function (e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/ /g, " ").replace(/␤/g, "\n"), this.token(e, !0)
    }, e.prototype.token = function (e, t, n) {
        for (var i, r, o, s, a, l, c, d, p, e = e.replace(/^ +$/gm, ""); e;) if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                type: "space"
            })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
            type: "code",
            text: this.options.pedantic ? o : o.replace(/\n+$/, "")
        });
        else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "code",
            lang: o[2],
            text: o[3] || ""
        });
        else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "heading",
            depth: o[1].length,
            text: o[2]
        });
        else if (t && (o = this.rules.nptable.exec(e))) {
            for (e = e.substring(o[0].length), l = {
                type: "table",
                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: o[3].replace(/\n$/, "").split("\n")
            }, d = 0; d < l.align.length; d++) / ^ * -+: * $ /.test(l.align[d]) ? l.align[d] = "right" : /^ *:-+: *$/.test(l.align[d]) ? l.align[d] = "center" : /^ *:-+ *$/.test(l.align[d]) ? l.align[d] = "left" : l.align[d] = null;
            for (d = 0; d < l.cells.length; d++) l.cells[d] = l.cells[d].split(/ *\| */);
            this.tokens.push(l)
        } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === o[2] ? 1 : 2,
            text: o[1]
        });
        else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "hr"
        });
        else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "blockquote_start"
        }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
            type: "blockquote_end"
        });
        else if (o = this.rules.list.exec(e)) {
            for (e = e.substring(o[0].length), s = o[2], this.tokens.push({
                type: "list_start",
                ordered: s.length > 1
            }), o = o[0].match(this.rules.item), i = !1, p = o.length, d = 0; p > d; d++) l = o[d], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && d !== p - 1 && (a = u.bullet.exec(o[d + 1])[0], s === a || s.length > 1 && a.length > 1 || (e = o.slice(d + 1).join("\n") + e, d = p - 1)), r = i || /\n\n(?!\s*$)/.test(l), d !== p - 1 && (i = "\n" === l.charAt(l.length - 1), r || (r = i)), this.tokens.push({
                type: r ? "loose_item_start" : "list_item_start"
            }), this.token(l, !1, n), this.tokens.push({
                type: "list_item_end"
            });
            this.tokens.push({
                type: "list_end"
            })
        } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
            text: o[0]
        });
        else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
            href: o[2],
            title: o[3]
        };
        else if (t && (o = this.rules.table.exec(e))) {
            for (e = e.substring(o[0].length), l = {
                type: "table",
                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
            }, d = 0; d < l.align.length; d++) / ^ * -+: * $ /.test(l.align[d]) ? l.align[d] = "right" : /^ *:-+: *$/.test(l.align[d]) ? l.align[d] = "center" : /^ *:-+ *$/.test(l.align[d]) ? l.align[d] = "left" : l.align[d] = null;
            for (d = 0; d < l.cells.length; d++) l.cells[d] = l.cells[d].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
            this.tokens.push(l)
        } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
        });
        else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "text",
            text: o[0]
        });
        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
        return this.tokens
    };
    var d = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: a,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: a,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };
    d._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, d._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, d.link = s(d.link)("inside", d._inside)("href", d._href)(), d.reflink = s(d.reflink)("inside", d._inside)(), d.normal = l({}, d), d.pedantic = l({}, d.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), d.gfm = l({}, d.normal, {
        escape: s(d.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: s(d.text)("]|", "~]|")("|", "|https?://|")()
    }), d.breaks = l({}, d.gfm, {
        br: s(d.br)("{2,}", "*")(),
        text: s(d.gfm.text)("{2,}", "*")()
    }), t.rules = d, t.output = function (e, n, i) {
        var r = new t(n, i);
        return r.output(e)
    }, t.prototype.output = function (e) {
        for (var t, n, i, o, s = ""; e;) if (o = this.rules.escape.exec(e)) e = e.substring(o[0].length), s += o[1];
        else if (o = this.rules.autolink.exec(e)) e = e.substring(o[0].length), "@" === o[2] ? (n = ":" === o[1].charAt(6) ? this.mangle(o[1].substring(7)) : this.mangle(o[1]), i = this.mangle("mailto:") + n) : (n = r(o[1]), i = n), s += this.renderer.link(i, null, n);
        else if (this.inLink || !(o = this.rules.url.exec(e))) {
            if (o = this.rules.tag.exec(e))!this.inLink && /^<a /i.test(o[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1), e = e.substring(o[0].length), s += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(o[0]) : r(o[0]) : o[0];
            else if (o = this.rules.link.exec(e)) e = e.substring(o[0].length), this.inLink = !0, s += this.outputLink(o, {
                href: o[2],
                title: o[3]
            }), this.inLink = !1;
            else if ((o = this.rules.reflink.exec(e)) || (o = this.rules.nolink.exec(e))) {
                if (e = e.substring(o[0].length), t = (o[2] || o[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
                    s += o[0].charAt(0), e = o[0].substring(1) + e;
                    continue
                }
                this.inLink = !0, s += this.outputLink(o, t), this.inLink = !1
            } else if (o = this.rules.strong.exec(e)) e = e.substring(o[0].length), s += this.renderer.strong(this.output(o[2] || o[1]));
            else if (o = this.rules.em.exec(e)) e = e.substring(o[0].length), s += this.renderer.em(this.output(o[2] || o[1]));
            else if (o = this.rules.code.exec(e)) e = e.substring(o[0].length), s += this.renderer.codespan(r(o[2], !0));
            else if (o = this.rules.br.exec(e)) e = e.substring(o[0].length), s += this.renderer.br();
            else if (o = this.rules.del.exec(e)) e = e.substring(o[0].length), s += this.renderer.del(this.output(o[1]));
            else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), s += this.renderer.text(r(this.smartypants(o[0])));
            else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        } else e = e.substring(o[0].length), n = r(o[1]), i = n, s += this.renderer.link(i, null, n);
        return s
    }, t.prototype.outputLink = function (e, t) {
        var n = r(t.href),
            i = t.title ? r(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, i, this.output(e[1])) : this.renderer.image(n, i, r(e[1]))
    }, t.prototype.smartypants = function (e) {
        return this.options.smartypants ? e.replace(/---/g, "鈥�").replace(/--/g, "鈥�").replace(/(^|[-—\/(\[{"\s])'/g, "$1鈥�").replace(/'/g, "鈥�").replace(/(^|[-—\/(\[{‘\s])"/g, "$1鈥�").replace(/"/g, "鈥�").replace(/\.{3}/g, "鈥�") : e
    }, t.prototype.mangle = function (e) {
        if (!this.options.mangle) return e;
        for (var t, n = "", i = e.length, r = 0; i > r; r++) t = e.charCodeAt(r), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
    }, n.prototype.code = function (e, t, n) {
        if (this.options.highlight) {
            var i = this.options.highlight(e, t);
            null != i && i !== e && (n = !0, e = i)
        }
        return t ? '<pre><code class="' + this.options.langPrefix + r(t, !0) + '">' + (n ? e : r(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : r(e, !0)) + "\n</code></pre>"
    }, n.prototype.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
    }, n.prototype.html = function (e) {
        return e
    }, n.prototype.heading = function (e, t, n) {
        return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
    }, n.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    }, n.prototype.list = function (e, t) {
        var n = t ? "ol" : "ul";
        return "<" + n + ">\n" + e + "</" + n + ">\n"
    }, n.prototype.listitem = function (e) {
        return "<li>" + e + "</li>\n"
    }, n.prototype.paragraph = function (e) {
        return "<p>" + e + "</p>\n"
    }, n.prototype.table = function (e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
    }, n.prototype.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n"
    }, n.prototype.tablecell = function (e, t) {
        var n = t.header ? "th" : "td",
            i = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
        return i + e + "</" + n + ">\n"
    }, n.prototype.strong = function (e) {
        return "<strong>" + e + "</strong>"
    }, n.prototype.em = function (e) {
        return "<em>" + e + "</em>"
    }, n.prototype.codespan = function (e) {
        return "<code>" + e + "</code>"
    }, n.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>"
    }, n.prototype.del = function (e) {
        return "<del>" + e + "</del>"
    }, n.prototype.link = function (e, t, n) {
        if (this.options.sanitize) {
            try {
                var i = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (r) {
                return ""
            }
            if (0 === i.indexOf("javascript:") || 0 === i.indexOf("vbscript:")) return ""
        }
        var s = '<a href="' + e + '"';
        return t && (s += ' title="' + t + '"'), s += ">" + n + "</a>"
    }, n.prototype.image = function (e, t, n) {
        var i = '<img src="' + e + '" alt="' + n + '"';
        return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">"
    }, n.prototype.text = function (e) {
        return e
    }, i.parse = function (e, t, n) {
        var r = new i(t, n);
        return r.parse(e)
    }, i.prototype.parse = function (e) {
        this.inline = new t(e.links, this.options, this.renderer), this.tokens = e.reverse();
        for (var n = ""; this.next();) n += this.tok();
        return n
    }, i.prototype.next = function () {
        return this.token = this.tokens.pop()
    }, i.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
    }, i.prototype.parseText = function () {
        for (var e = this.token.text;
             "text" === this.peek().type;) e += "\n" + this.next().text;
        return this.inline.output(e)
    }, i.prototype.tok = function () {
        switch (this.token.type) {
            case "space":
                return "";
            case "hr":
                return this.renderer.hr();
            case "heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
            case "code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case "table":
                var e, t, n, i, r, o = "",
                    s = "";
                for (n = "", e = 0; e < this.token.header.length; e++) i = {
                    header: !0,
                    align: this.token.align[e]
                }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                    header: !0,
                    align: this.token.align[e]
                });
                for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                    for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r]
                    });
                    s += this.renderer.tablerow(n)
                }
                return this.renderer.table(o, s);
            case "blockquote_start":
                for (var s = "";
                     "blockquote_end" !== this.next().type;) s += this.tok();
                return this.renderer.blockquote(s);
            case "list_start":
                for (var s = "", a = this.token.ordered;
                     "list_end" !== this.next().type;) s += this.tok();
                return this.renderer.list(s, a);
            case "list_item_start":
                for (var s = "";
                     "list_item_end" !== this.next().type;) s += "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(s);
            case "loose_item_start":
                for (var s = "";
                     "list_item_end" !== this.next().type;) s += this.tok();
                return this.renderer.listitem(s);
            case "html":
                var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                return this.renderer.html(l);
            case "paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case "text":
                return this.renderer.paragraph(this.parseText())
        }
    }, a.exec = a, c.options = c.setOptions = function (e) {
        return l(c.defaults, e), c
    }, c.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: null,
        mangle: !0,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new n,
        xhtml: !1
    }, c.Parser = i, c.parser = i.parse, c.Renderer = n, c.Lexer = e, c.lexer = e.lex, c.InlineLexer = t, c.inlineLexer = t.output, c.parse = c, "undefined" != typeof module && "object" == typeof exports ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
        return c
    }) : this.marked = c
}.call(function () {
    return this || ("undefined" != typeof window ? window : global)
}()), !
    function (e, t) {
        if ("function" == typeof define && define.amd) define(["exports", "module"], t);
        else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module);
        else {
            var n = {
                exports: {}
            };
            t(n.exports, n), e.autosize = n.exports
        }
    }(this, function (e, t) {
        "use strict";

        function n(e) {
            function t() {
                var t = window.getComputedStyle(e, null);
                "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), l = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(l) && (l = 0), a()
            }

            function n(t) {
                var n = e.style.width;
                e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t, r()
            }

            function i(e) {
                for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                    node: e.parentNode,
                    scrollTop: e.parentNode.scrollTop
                }), e = e.parentNode;
                return t
            }

            function r() {
                var t = e.style.height,
                    n = i(e),
                    r = document.documentElement && document.documentElement.scrollTop;
                e.style.height = "auto";
                var o = e.scrollHeight + l;
                return 0 === e.scrollHeight ? void(e.style.height = t) : (e.style.height = o + "px", c = e.clientWidth, n.forEach(function (e) {
                    e.node.scrollTop = e.scrollTop
                }), void(r && (document.documentElement.scrollTop = r)))
            }

            function a() {
                r();
                var t = window.getComputedStyle(e, null),
                    i = Math.round(parseFloat(t.height)),
                    o = Math.round(parseFloat(e.style.height));
                if (i !== o ? "visible" !== t.overflowY && n("visible") : "hidden" !== t.overflowY && n("hidden"), u !== i) {
                    u = i;
                    var a = s("autosize:resized");
                    e.dispatchEvent(a)
                }
            }

            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                var l = null,
                    c = e.clientWidth,
                    u = null,
                    d = function () {
                        e.clientWidth !== c && a()
                    },
                    p = function (t) {
                        window.removeEventListener("resize", d, !1), e.removeEventListener("input", a, !1), e.removeEventListener("keyup", a, !1), e.removeEventListener("autosize:destroy", p, !1), e.removeEventListener("autosize:update", a, !1), o["delete"](e), Object.keys(t).forEach(function (n) {
                            e.style[n] = t[n]
                        })
                    }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                e.addEventListener("autosize:destroy", p, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", a, !1), window.addEventListener("resize", d, !1), e.addEventListener("input", a, !1), e.addEventListener("autosize:update", a, !1), o.add(e), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", t()
            }
        }

        function i(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
                var t = s("autosize:destroy");
                e.dispatchEvent(t)
            }
        }

        function r(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
                var t = s("autosize:update");
                e.dispatchEvent(t)
            }
        }

        var o = "function" == typeof Set ? new Set : function () {
                var e = [];
                return {
                    has: function (t) {
                        return Boolean(e.indexOf(t) > -1)
                    },
                    add: function (t) {
                        e.push(t)
                    },
                    "delete": function (t) {
                        e.splice(e.indexOf(t), 1)
                    }
                }
            }(),
            s = function (e) {
                return new Event(e)
            };
        try {
            new Event("test")
        } catch (a) {
            s = function (e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !1), t
            }
        }
        var l = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function (e) {
            return e
        }, l.destroy = function (e) {
            return e
        }, l.update = function (e) {
            return e
        }) : (l = function (e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                return n(e, t)
            }), e
        }, l.destroy = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
        }, l.update = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
        }), t.exports = l
    });
var imgLiquid = imgLiquid || {
        VER: "0.9.944"
    };
imgLiquid.bgs_Available = !1, imgLiquid.bgs_CheckRunned = !1, imgLiquid.injectCss = ".imgLiquid img {visibility:hidden}", function (e) {
    function t() {
        if (!imgLiquid.bgs_CheckRunned) {
            imgLiquid.bgs_CheckRunned = !0;
            var t = e('<span style="background-size:cover" />');
            e("body").append(t), !
                function () {
                    var e = t[0];
                    if (e && window.getComputedStyle) {
                        var n = window.getComputedStyle(e, null);
                        n && n.backgroundSize && (imgLiquid.bgs_Available = "cover" === n.backgroundSize)
                    }
                }(), t.remove()
        }
    }

    e.fn.extend({
        imgLiquid: function (n) {
            this.defaults = {
                fill: !0,
                verticalAlign: "center",
                horizontalAlign: "center",
                useBackgroundSize: !0,
                useDataHtmlAttr: !0,
                responsive: !0,
                delay: 0,
                fadeInTime: 0,
                removeBoxBackground: !0,
                hardPixels: !0,
                responsiveCheckTime: 500,
                timecheckvisibility: 500,
                onStart: null,
                onFinish: null,
                onItemStart: null,
                onItemFinish: null,
                onItemError: null
            }, t();
            var i = this;
            return this.options = n, this.settings = e.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function (t) {
                function n() {
                    -1 === d.css("background-image").indexOf(encodeURI(p.attr("src"))) && d.css({
                        "background-image": 'url("' + encodeURI(p.attr("src")) + '")'
                    }), d.css({
                        "background-size": u.fill ? "cover" : "contain",
                        "background-position": (u.horizontalAlign + " " + u.verticalAlign).toLowerCase(),
                        "background-repeat": "no-repeat"
                    }), e("a:first", d).css({
                        display: "block",
                        width: "100%",
                        height: "100%"
                    }), e("img", d).css({
                        display: "none"
                    }), u.onItemFinish && u.onItemFinish(t, d, p), d.addClass("imgLiquid_bgSize"), d.addClass("imgLiquid_ready"), c()
                }

                function r() {
                    function n() {
                        p.data("imgLiquid_error") || p.data("imgLiquid_loaded") || p.data("imgLiquid_oldProcessed") || (d.is(":visible") && p[0].complete && p[0].width > 0 && p[0].height > 0 ? (p.data("imgLiquid_loaded", !0), setTimeout(l, t * u.delay)) : setTimeout(n, u.timecheckvisibility))
                    }

                    if (p.data("oldSrc") && p.data("oldSrc") !== p.attr("src")) {
                        var i = p.clone().removeAttr("style");
                        return i.data("imgLiquid_settings", p.data("imgLiquid_settings")), p.parent().prepend(i), p.remove(), p = i, p[0].width = 0, void setTimeout(r, 10)
                    }
                    return p.data("imgLiquid_oldProcessed") ? void l() : (p.data("imgLiquid_oldProcessed", !1), p.data("oldSrc", p.attr("src")), e("img:not(:first)", d).css("display", "none"), d.css({
                        overflow: "hidden"
                    }), p.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
                        visibility: "visible",
                        "max-width": "none",
                        "max-height": "none",
                        width: "auto",
                        height: "auto",
                        display: "block"
                    }), p.on("error", s), p[0].onerror = s, n(), void o())
                }

                function o() {
                    (u.responsive || p.data("imgLiquid_oldProcessed")) && p.data("imgLiquid_settings") && (u = p.data("imgLiquid_settings"), d.actualSize = d.get(0).offsetWidth + d.get(0).offsetHeight / 1e4, d.sizeOld && d.actualSize !== d.sizeOld && l(), d.sizeOld = d.actualSize, setTimeout(o, u.responsiveCheckTime))
                }

                function s() {
                    p.data("imgLiquid_error", !0), d.addClass("imgLiquid_error"), u.onItemError && u.onItemError(t, d, p), c()
                }

                function a() {
                    var e = {};
                    if (i.settings.useDataHtmlAttr) {
                        var t = d.attr("data-imgLiquid-fill"),
                            n = d.attr("data-imgLiquid-horizontalAlign"),
                            r = d.attr("data-imgLiquid-verticalAlign");
                        ("true" === t || "false" === t) && (e.fill = Boolean("true" === t)), void 0 === n || "left" !== n && "center" !== n && "right" !== n && -1 === n.indexOf("%") || (e.horizontalAlign = n), void 0 === r || "top" !== r && "bottom" !== r && "center" !== r && -1 === r.indexOf("%") || (e.verticalAlign = r)
                    }
                    return imgLiquid.isIE && i.settings.ieFadeInDisabled && (e.fadeInTime = 0), e
                }

                function l() {
                    var e, n, i, r, o, s, a, l, f = 0,
                        h = 0,
                        g = d.width(),
                        m = d.height();
                    void 0 === p.data("owidth") && p.data("owidth", p[0].width), void 0 === p.data("oheight") && p.data("oheight", p[0].height), u.fill === g / m >= p.data("owidth") / p.data("oheight") ? (e = "100%", n = "auto", i = Math.floor(g), r = Math.floor(g * (p.data("oheight") / p.data("owidth")))) : (e = "auto", n = "100%", i = Math.floor(m * (p.data("owidth") / p.data("oheight"))), r = Math.floor(m)), o = u.horizontalAlign.toLowerCase(), a = g - i, "left" === o && (h = 0), "center" === o && (h = .5 * a), "right" === o && (h = a), -1 !== o.indexOf("%") && (o = parseInt(o.replace("%", ""), 10), o > 0 && (h = .01 * a * o)), s = u.verticalAlign.toLowerCase(), l = m - r, "left" === s && (f = 0), "center" === s && (f = .5 * l), "bottom" === s && (f = l), -1 !== s.indexOf("%") && (s = parseInt(s.replace("%", ""), 10), s > 0 && (f = .01 * l * s)), u.hardPixels && (e = i, n = r), p.css({
                        width: e,
                        height: n,
                        "margin-left": Math.floor(h),
                        "margin-top": Math.floor(f)
                    }), p.data("imgLiquid_oldProcessed") || (p.fadeTo(u.fadeInTime, 1), p.data("imgLiquid_oldProcessed", !0), u.removeBoxBackground && d.css("background-image", "none"), d.addClass("imgLiquid_nobgSize"), d.addClass("imgLiquid_ready")), u.onItemFinish && u.onItemFinish(t, d, p), c()
                }

                function c() {
                    t === i.length - 1 && i.settings.onFinish && i.settings.onFinish()
                }

                var u = i.settings,
                    d = e(this),
                    p = e("img:first", d);
                return p.length ? (p.data("imgLiquid_settings") ? (d.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"), u = e.extend({}, p.data("imgLiquid_settings"), i.options)) : u = e.extend({}, i.settings, a()), p.data("imgLiquid_settings", u), u.onItemStart && u.onItemStart(t, d, p), void(imgLiquid.bgs_Available && u.useBackgroundSize ? n() : r())) : void s()
            })
        }
    })
}(jQuery), !
    function () {
        var e = imgLiquid.injectCss,
            t = document.getElementsByTagName("head")[0],
            n = document.createElement("style");
        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n)
    }(), function (e, t) {
    "use strict";
    var n = function (e, t) {
        this.settings = n.util.merge(e, n.defaults), this.editor = t, this.filenameTag = "{filename}", this.lastValue = null
    };
    n.editors = {}, n.util = {
        merge: function () {
            for (var e = {}, t = arguments.length - 1; t >= 0; t--) {
                var n = arguments[t];
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
            }
            return e
        },
        appendInItsOwnLine: function (e, t) {
            return (e + "\n\n[[D]]" + t).replace(/(\n{2,})\[\[D\]\]/, "\n\n").replace(/^(\n*)/, "")
        },
        insertTextAtCursor: function (t, n) {
            var i, r = t.scrollTop,
                o = 0,
                s = !1;
            t.selectionStart || "0" === t.selectionStart ? s = "ff" : e.selection && (s = "ie"), "ie" === s ? (t.focus(), i = e.selection.createRange(), i.moveStart("character", -t.value.length), o = i.text.length) : "ff" === s && (o = t.selectionStart);
            var a = t.value.substring(0, o),
                l = t.value.substring(o, t.value.length);
            t.value = a + n + l, o += n.length, "ie" === s ? (t.focus(), i = e.selection.createRange(), i.moveStart("character", -t.value.length), i.moveStart("character", o), i.moveEnd("character", 0), i.select()) : "ff" === s && (t.selectionStart = o, t.selectionEnd = o, t.focus()), t.scrollTop = r
        }
    }, n.defaults = {
        uploadUrl: "upload_attachment.php",
        uploadMethod: "POST",
        uploadFieldName: "file",
        defaultExtension: "png",
        jsonFieldName: "filename",
        allowedTypes: ["image/jpeg", "image/png", "image/jpg", "image/gif"],
        progressText: "![Uploading file...]()",
        urlText: "![file]({filename})",
        errorText: "Error uploading file",
        extraParams: {},
        extraHeaders: {},
        beforeFileUpload: function () {
            return !0
        },
        onFileReceived: function () {
        },
        onFileUploadResponse: function () {
            return !0
        },
        onFileUploadError: function () {
            return !0
        },
        onFileUploaded: function () {
        }
    }, n.prototype.uploadFile = function (e) {
        var t = this,
            n = new FormData,
            i = new XMLHttpRequest,
            r = this.settings,
            o = r.defaultExtension || r.defualtExtension;
        if ("function" == typeof r.setupFormData && r.setupFormData(n, e), e.name) {
            var s = e.name.match(/\.(.+)$/);
            s && (o = s[1])
        }
        var a = "image-" + Date.now() + "." + o;
        if ("function" == typeof r.remoteFilename && (a = r.remoteFilename(e)), n.append(r.uploadFieldName, e, a), "object" == typeof r.extraParams) for (var l in r.extraParams) r.extraParams.hasOwnProperty(l) && n.append(l, r.extraParams[l]);
        if (i.open("POST", r.uploadUrl), "object" == typeof r.extraHeaders) for (var c in r.extraHeaders) r.extraHeaders.hasOwnProperty(c) && i.setRequestHeader(c, r.extraHeaders[c]);
        return i.onload = function () {
            200 === i.status || 201 === i.status ? t.onFileUploadResponse(i) : t.onFileUploadError(i)
        }, r.beforeFileUpload(i) !== !1 && i.send(n), i
    }, n.prototype.isFileAllowed = function (e) {
        return "string" !== e.kind && (0 === this.settings.allowedTypes.indexOf("*") || this.settings.allowedTypes.indexOf(e.type) >= 0)
    }, n.prototype.onFileUploadResponse = function (e) {
        if (this.settings.onFileUploadResponse.call(this, e) !== !1) {
            var t = JSON.parse(e.responseText),
                n = t[this.settings.jsonFieldName];
            if (t && n) {
                var i;
                i = "function" == typeof this.settings.urlText ? this.settings.urlText.call(this, n, t) : this.settings.urlText.replace(this.filenameTag, n);
                var r = this.editor.getValue().replace(this.lastValue, i);
                this.editor.setValue(r), this.settings.onFileUploaded.call(this, n)
            }
        }
    }, n.prototype.onFileUploadError = function (e) {
        if (this.settings.onFileUploadError.call(this, e) !== !1) {
            var t = this.editor.getValue().replace(this.lastValue, "");
            this.editor.setValue(t)
        }
    }, n.prototype.onFileInserted = function (e) {
        this.settings.onFileReceived.call(this, e) !== !1 && (this.lastValue = this.settings.progressText, this.editor.insertValue(this.lastValue))
    }, n.prototype.onPaste = function (e) {
        var t, n = !1,
            i = e.clipboardData;
        if ("object" == typeof i) {
            t = i.items || i.files || [];
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                this.isFileAllowed(o) && (n = !0, this.onFileInserted(o.getAsFile()), this.uploadFile(o.getAsFile()))
            }
        }
        return n && e.preventDefault(), n
    }, n.prototype.onDrop = function (e) {
        for (var t = !1, n = 0; n < e.dataTransfer.files.length; n++) {
            var i = e.dataTransfer.files[n];
            this.isFileAllowed(i) && (t = !0, this.onFileInserted(i), this.uploadFile(i))
        }
        return t
    }, t.inlineAttachment = n
}(document, window), function () {
    "use strict";
    var e = function (e) {
        if (!e.getWrapperElement) throw "Invalid CodeMirror object given";
        this.codeMirror = e
    };
    e.prototype.getValue = function () {
        return this.codeMirror.getValue()
    }, e.prototype.insertValue = function (e) {
        this.codeMirror.replaceSelection(e)
    }, e.prototype.setValue = function (e) {
        var t = this.codeMirror.getCursor();
        this.codeMirror.setValue(e), this.codeMirror.setCursor(t)
    }, e.attach = function (t, n) {
        n = n || {};
        var i = new e(t),
            r = new inlineAttachment(n, i),
            o = t.getWrapperElement();
        o.addEventListener("paste", function (e) {
            r.onPaste(e)
        }, !1), t.setOption("onDragEvent", function (e, t) {
            if ("drop" === t.type) return t.stopPropagation(), t.preventDefault(), r.onDrop(t)
        })
    };
    var t = function (t) {
        e.call(this, t)
    };
    t.attach = function (t, n) {
        n = n || {};
        var i = new e(t),
            r = new inlineAttachment(n, i),
            o = t.getWrapperElement();
        o.addEventListener("paste", function (e) {
            r.onPaste(e)
        }, !1), t.on("drop", function (e, t) {
            return !!r.onDrop(t) && (t.stopPropagation(), t.preventDefault(), !0)
        })
    }, inlineAttachment.editors.codemirror4 = t
}(), !
    function (e, t, n) {
        "use strict";
        !
            function i(e, t, n) {
                function r(s, a) {
                    if (!t[s]) {
                        if (!e[s]) {
                            var l = "function" == typeof require && require;
                            if (!a && l) return l(s, !0);
                            if (o) return o(s, !0);
                            var c = new Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var u = t[s] = {
                            exports: {}
                        };
                        e[s][0].call(u.exports, function (t) {
                            var n = e[s][1][t];
                            return r(n ? n : t)
                        }, u, u.exports, i, e, t, n)
                    }
                    return t[s].exports
                }

                for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
                return r
            }({
                1: [function (i, r, o) {
                    var s = function (e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    };
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    });
                    var a, l, c, u, d = i("./modules/handle-dom"),
                        p = i("./modules/utils"),
                        f = i("./modules/handle-swal-dom"),
                        h = i("./modules/handle-click"),
                        g = i("./modules/handle-key"),
                        m = s(g),
                        v = i("./modules/default-params"),
                        b = s(v),
                        y = i("./modules/set-params"),
                        w = s(y);
                    o["default"] = c = u = function () {
                        function i(e) {
                            var t = r;
                            return t[e] === n ? b["default"][e] : t[e]
                        }

                        var r = arguments[0];
                        if (d.addClass(t.body, "stop-scrolling"), f.resetInput(), r === n) return p.logStr("SweetAlert expects at least 1 attribute!"), !1;
                        var o = p.extend({}, b["default"]);
                        switch (typeof r) {
                            case "string":
                                o.title = r, o.text = arguments[1] || "", o.type = arguments[2] || "";
                                break;
                            case "object":
                                if (r.title === n) return p.logStr('Missing "title" argument!'), !1;
                                o.title = r.title;
                                for (var s in b["default"]) o[s] = i(s);
                                o.confirmButtonText = o.showCancelButton ? "Confirm" : b["default"].confirmButtonText, o.confirmButtonText = i("confirmButtonText"), o.doneFunction = arguments[1] || null;
                                break;
                            default:
                                return p.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof r), !1
                        }
                        w["default"](o), f.fixVerticalPosition(), f.openModal(arguments[1]);
                        for (var c = f.getModal(), g = c.querySelectorAll("button"), v = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], y = function (e) {
                            return h.handleButton(e, o, c)
                        }, x = 0; x < g.length; x++) for (var k = 0; k < v.length; k++) {
                            var _ = v[k];
                            g[x][_] = y
                        }
                        f.getOverlay().onclick = y, a = e.onkeydown;
                        var C = function (e) {
                            return m["default"](e, o, c)
                        };
                        e.onkeydown = C, e.onfocus = function () {
                            setTimeout(function () {
                                l !== n && (l.focus(), l = n)
                            }, 0)
                        }, u.enableButtons()
                    }, c.setDefaults = u.setDefaults = function (e) {
                        if (!e) throw new Error("userParams is required");
                        if ("object" != typeof e) throw new Error("userParams has to be a object");
                        p.extend(b["default"], e)
                    }, c.close = u.close = function () {
                        var i = f.getModal();
                        d.fadeOut(f.getOverlay(), 5), d.fadeOut(i, 5), d.removeClass(i, "showSweetAlert"), d.addClass(i, "hideSweetAlert"), d.removeClass(i, "visible");
                        var r = i.querySelector(".sa-icon.sa-success");
                        d.removeClass(r, "animate"), d.removeClass(r.querySelector(".sa-tip"), "animateSuccessTip"), d.removeClass(r.querySelector(".sa-long"), "animateSuccessLong");
                        var o = i.querySelector(".sa-icon.sa-error");
                        d.removeClass(o, "animateErrorIcon"), d.removeClass(o.querySelector(".sa-x-mark"), "animateXMark");
                        var s = i.querySelector(".sa-icon.sa-warning");
                        return d.removeClass(s, "pulseWarning"), d.removeClass(s.querySelector(".sa-body"), "pulseWarningIns"), d.removeClass(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
                            var e = i.getAttribute("data-custom-class");
                            d.removeClass(i, e)
                        }, 300), d.removeClass(t.body, "stop-scrolling"), e.onkeydown = a, e.previousActiveElement && e.previousActiveElement.focus(), l = n, clearTimeout(i.timeout), !0
                    }, c.showInputError = u.showInputError = function (e) {
                        var t = f.getModal(),
                            n = t.querySelector(".sa-input-error");
                        d.addClass(n, "show");
                        var i = t.querySelector(".sa-error-container");
                        d.addClass(i, "show"), i.querySelector("p").innerHTML = e, setTimeout(function () {
                            c.enableButtons()
                        }, 1), t.querySelector("input").focus()
                    }, c.resetInputError = u.resetInputError = function (e) {
                        if (e && 13 === e.keyCode) return !1;
                        var t = f.getModal(),
                            n = t.querySelector(".sa-input-error");
                        d.removeClass(n, "show");
                        var i = t.querySelector(".sa-error-container");
                        d.removeClass(i, "show")
                    }, c.disableButtons = u.disableButtons = function () {
                        var e = f.getModal(),
                            t = e.querySelector("button.confirm"),
                            n = e.querySelector("button.cancel");
                        t.disabled = !0, n.disabled = !0
                    }, c.enableButtons = u.enableButtons = function () {
                        var e = f.getModal(),
                            t = e.querySelector("button.confirm"),
                            n = e.querySelector("button.cancel");
                        t.disabled = !1, n.disabled = !1
                    }, "undefined" != typeof e ? e.sweetAlert = e.swal = c : p.logStr("SweetAlert is a frontend module!"), r.exports = o["default"]
                }, {
                    "./modules/default-params": 2,
                    "./modules/handle-click": 3,
                    "./modules/handle-dom": 4,
                    "./modules/handle-key": 5,
                    "./modules/handle-swal-dom": 6,
                    "./modules/set-params": 8,
                    "./modules/utils": 9
                }],
                2: [function (e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var i = {
                        title: "",
                        text: "",
                        type: null,
                        allowOutsideClick: !1,
                        showConfirmButton: !0,
                        showCancelButton: !1,
                        closeOnConfirm: !0,
                        closeOnCancel: !0,
                        confirmButtonText: "OK",
                        confirmButtonColor: "#8CD4F5",
                        cancelButtonText: "Cancel",
                        imageUrl: null,
                        imageSize: null,
                        timer: null,
                        customClass: "",
                        html: !1,
                        animation: !0,
                        allowEscapeKey: !0,
                        inputType: "text",
                        inputPlaceholder: "",
                        inputValue: "",
                        showLoaderOnConfirm: !1
                    };
                    n["default"] = i, t.exports = n["default"]
                }, {}],
                3: [function (t, n, i) {
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    });
                    var r = t("./utils"),
                        o = (t("./handle-swal-dom"), t("./handle-dom")),
                        s = function (t, n, i) {
                            function s(e) {
                                h && n.confirmButtonColor && (f.style.backgroundColor = e)
                            }

                            var c, u, d, p = t || e.event,
                                f = p.target || p.srcElement,
                                h = -1 !== f.className.indexOf("confirm"),
                                g = -1 !== f.className.indexOf("sweet-overlay"),
                                m = o.hasClass(i, "visible"),
                                v = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
                            switch (h && n.confirmButtonColor && (c = n.confirmButtonColor, u = r.colorLuminance(c, -.04), d = r.colorLuminance(c, -.14)), p.type) {
                                case "mouseover":
                                    s(u);
                                    break;
                                case "mouseout":
                                    s(c);
                                    break;
                                case "mousedown":
                                    s(d);
                                    break;
                                case "mouseup":
                                    s(u);
                                    break;
                                case "focus":
                                    var b = i.querySelector("button.confirm"),
                                        y = i.querySelector("button.cancel");
                                    h ? y.style.boxShadow = "none" : b.style.boxShadow = "none";
                                    break;
                                case "click":
                                    var w = i === f,
                                        x = o.isDescendant(i, f);
                                    if (!w && !x && m && !n.allowOutsideClick) break;
                                    h && v && m ? a(i, n) : v && m || g ? l(i, n) : o.isDescendant(i, f) && "BUTTON" === f.tagName && sweetAlert.close()
                            }
                        },
                        a = function (e, t) {
                            var n = !0;
                            o.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                        },
                        l = function (e, t) {
                            var n = String(t.doneFunction).replace(/\s/g, ""),
                                i = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                            i && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                        };
                    i["default"] = {
                        handleButton: s,
                        handleConfirm: a,
                        handleCancel: l
                    }, n.exports = i["default"]
                }, {
                    "./handle-dom": 4,
                    "./handle-swal-dom": 6,
                    "./utils": 9
                }],
                4: [function (n, i, r) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var o = function (e, t) {
                            return new RegExp(" " + t + " ").test(" " + e.className + " ")
                        },
                        s = function (e, t) {
                            o(e, t) || (e.className += " " + t)
                        },
                        a = function (e, t) {
                            var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                            if (o(e, t)) {
                                for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                                e.className = n.replace(/^\s+|\s+$/g, "")
                            }
                        },
                        l = function (e) {
                            var n = t.createElement("div");
                            return n.appendChild(t.createTextNode(e)), n.innerHTML
                        },
                        c = function (e) {
                            e.style.opacity = "", e.style.display = "block"
                        },
                        u = function (e) {
                            if (e && !e.length) return c(e);
                            for (var t = 0; t < e.length; ++t) c(e[t])
                        },
                        d = function (e) {
                            e.style.opacity = "", e.style.display = "none"
                        },
                        p = function (e) {
                            if (e && !e.length) return d(e);
                            for (var t = 0; t < e.length; ++t) d(e[t])
                        },
                        f = function (e, t) {
                            for (var n = t.parentNode; null !== n;) {
                                if (n === e) return !0;
                                n = n.parentNode
                            }
                            return !1
                        },
                        h = function (e) {
                            e.style.left = "-9999px", e.style.display = "block";
                            var t, n = e.clientHeight;
                            return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
                        },
                        g = function (e, t) {
                            if (+e.style.opacity < 1) {
                                t = t || 16, e.style.opacity = 0, e.style.display = "block";
                                var n = +new Date,
                                    i = function (e) {
                                        function t() {
                                            return e.apply(this, arguments)
                                        }

                                        return t.toString = function () {
                                            return e.toString()
                                        }, t
                                    }(function () {
                                        e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
                                    });
                                i()
                            }
                            e.style.display = "block"
                        },
                        m = function (e, t) {
                            t = t || 16, e.style.opacity = 1;
                            var n = +new Date,
                                i = function (e) {
                                    function t() {
                                        return e.apply(this, arguments)
                                    }

                                    return t.toString = function () {
                                        return e.toString()
                                    }, t
                                }(function () {
                                    e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
                                });
                            i()
                        },
                        v = function (n) {
                            if ("function" == typeof MouseEvent) {
                                var i = new MouseEvent("click", {
                                    view: e,
                                    bubbles: !1,
                                    cancelable: !0
                                });
                                n.dispatchEvent(i)
                            } else if (t.createEvent) {
                                var r = t.createEvent("MouseEvents");
                                r.initEvent("click", !1, !1), n.dispatchEvent(r)
                            } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                        },
                        b = function (t) {
                            "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
                        };
                    r.hasClass = o, r.addClass = s, r.removeClass = a, r.escapeHtml = l, r._show = c, r.show = u, r._hide = d, r.hide = p, r.isDescendant = f, r.getTopMargin = h, r.fadeIn = g, r.fadeOut = m, r.fireClick = v, r.stopEventPropagation = b
                }, {}],
                5: [function (t, i, r) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var o = t("./handle-dom"),
                        s = t("./handle-swal-dom"),
                        a = function (t, i, r) {
                            var a = t || e.event,
                                l = a.keyCode || a.which,
                                c = r.querySelector("button.confirm"),
                                u = r.querySelector("button.cancel"),
                                d = r.querySelectorAll("button[tabindex]");
                            if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                                for (var p = a.target || a.srcElement, f = -1, h = 0; h < d.length; h++) if (p === d[h]) {
                                    f = h;
                                    break
                                }
                                9 === l ? (p = -1 === f ? c : f === d.length - 1 ? d[0] : d[f + 1], o.stopEventPropagation(a), p.focus(), i.confirmButtonColor && s.setFocusStyle(p, i.confirmButtonColor)) : 13 === l ? ("INPUT" === p.tagName && (p = c, c.focus()), p = -1 === f ? c : n) : 27 === l && i.allowEscapeKey === !0 ? (p = u, o.fireClick(p, a)) : p = n
                            }
                        };
                    r["default"] = a, i.exports = r["default"]
                }, {
                    "./handle-dom": 4,
                    "./handle-swal-dom": 6
                }],
                6: [function (n, i, r) {
                    var o = function (e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    };
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var s = n("./utils"),
                        a = n("./handle-dom"),
                        l = n("./default-params"),
                        c = o(l),
                        u = n("./injected-html"),
                        d = o(u),
                        p = ".sweet-alert",
                        f = ".sweet-overlay",
                        h = function () {
                            var e = t.createElement("div");
                            for (e.innerHTML = d["default"]; e.firstChild;) t.body.appendChild(e.firstChild)
                        },
                        g = function (e) {
                            function t() {
                                return e.apply(this, arguments)
                            }

                            return t.toString = function () {
                                return e.toString()
                            }, t
                        }(function () {
                            var e = t.querySelector(p);
                            return e || (h(), e = g()), e
                        }),
                        m = function () {
                            var e = g();
                            return e ? e.querySelector("input") : void 0
                        },
                        v = function () {
                            return t.querySelector(f)
                        },
                        b = function (e, t) {
                            var n = s.hexToRgb(t);
                            e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                        },
                        y = function (n) {
                            var i = g();
                            a.fadeIn(v(), 10), a.show(i), a.addClass(i, "showSweetAlert"), a.removeClass(i, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
                            var r = i.querySelector("button.confirm");
                            r.focus(), setTimeout(function () {
                                a.addClass(i, "visible")
                            }, 500);
                            var o = i.getAttribute("data-timer");
                            if ("null" !== o && "" !== o) {
                                var s = n;
                                i.timeout = setTimeout(function () {
                                    var e = (s || null) && "true" === i.getAttribute("data-has-done-function");
                                    e ? s(null) : sweetAlert.close()
                                }, o)
                            }
                        },
                        w = function () {
                            var e = g(),
                                t = m();
                            a.removeClass(e, "show-input"), t.value = c["default"].inputValue, t.setAttribute("type", c["default"].inputType), t.setAttribute("placeholder", c["default"].inputPlaceholder), x()
                        },
                        x = function (e) {
                            if (e && 13 === e.keyCode) return !1;
                            var t = g(),
                                n = t.querySelector(".sa-input-error");
                            a.removeClass(n, "show");
                            var i = t.querySelector(".sa-error-container");
                            a.removeClass(i, "show")
                        },
                        k = function () {
                            var e = g();
                            e.style.marginTop = a.getTopMargin(g())
                        };
                    r.sweetAlertInitialize = h, r.getModal = g, r.getOverlay = v, r.getInput = m, r.setFocusStyle = b, r.openModal = y, r.resetInput = w, r.resetInputError = x, r.fixVerticalPosition = k
                }, {
                    "./default-params": 2,
                    "./handle-dom": 4,
                    "./injected-html": 7,
                    "./utils": 9
                }],
                7: [function (e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var i = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
                    n["default"] = i, t.exports = n["default"]
                }, {}],
                8: [function (e, t, i) {
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    });
                    var r = e("./utils"),
                        o = e("./handle-swal-dom"),
                        s = e("./handle-dom"),
                        a = ["error", "warning", "info", "success", "input", "prompt"],
                        l = function (e) {
                            var t = o.getModal(),
                                i = t.querySelector("h2"),
                                l = t.querySelector("p"),
                                c = t.querySelector("button.cancel"),
                                u = t.querySelector("button.confirm");
                            if (i.innerHTML = e.html ? e.title : s.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text : s.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && s.show(l), e.customClass) s.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
                            else {
                                var d = t.getAttribute("data-custom-class");
                                s.removeClass(t, d), t.setAttribute("data-custom-class", "")
                            }
                            if (s.hide(t.querySelectorAll(".sa-icon")), e.type && !r.isIE8()) {
                                var p = function () {
                                    for (var i = !1, r = 0; r < a.length; r++) if (e.type === a[r]) {
                                        i = !0;
                                        break
                                    }
                                    if (!i) return logStr("Unknown alert type: " + e.type), {
                                        v: !1
                                    };
                                    var l = ["success", "error", "warning", "info"],
                                        c = n;
                                    -1 !== l.indexOf(e.type) && (c = t.querySelector(".sa-icon.sa-" + e.type), s.show(c));
                                    var u = o.getInput();
                                    switch (e.type) {
                                        case "success":
                                            s.addClass(c, "animate"), s.addClass(c.querySelector(".sa-tip"), "animateSuccessTip"), s.addClass(c.querySelector(".sa-long"), "animateSuccessLong");
                                            break;
                                        case "error":
                                            s.addClass(c, "animateErrorIcon"), s.addClass(c.querySelector(".sa-x-mark"), "animateXMark");
                                            break;
                                        case "warning":
                                            s.addClass(c, "pulseWarning"), s.addClass(c.querySelector(".sa-body"), "pulseWarningIns"), s.addClass(c.querySelector(".sa-dot"), "pulseWarningIns");
                                            break;
                                        case "input":
                                        case "prompt":
                                            u.setAttribute("type", e.inputType), u.value = e.inputValue, u.setAttribute("placeholder", e.inputPlaceholder), s.addClass(t, "show-input"), setTimeout(function () {
                                                u.focus(), u.addEventListener("keyup", swal.resetInputError)
                                            }, 400)
                                    }
                                }();
                                if ("object" == typeof p) return p.v
                            }
                            if (e.imageUrl) {
                                var f = t.querySelector(".sa-icon.sa-custom");
                                f.style.backgroundImage = "url(" + e.imageUrl + ")", s.show(f);
                                var h = 80,
                                    g = 80;
                                if (e.imageSize) {
                                    var m = e.imageSize.toString().split("x"),
                                        v = m[0],
                                        b = m[1];
                                    v && b ? (h = v, g = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                                }
                                f.setAttribute("style", f.getAttribute("style") + "width:" + h + "px; height:" + g + "px")
                            }
                            t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? c.style.display = "inline-block" : s.hide(c), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? u.style.display = "inline-block" : s.hide(u), e.cancelButtonText && (c.innerHTML = s.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (u.innerHTML = s.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (u.style.backgroundColor = e.confirmButtonColor, u.style.borderLeftColor = e.confirmLoadingButtonColor, u.style.borderRightColor = e.confirmLoadingButtonColor, o.setFocusStyle(u, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                            var y = !!e.doneFunction;
                            t.setAttribute("data-has-done-function", y), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
                        };
                    i["default"] = l, t.exports = i["default"]
                }, {
                    "./handle-dom": 4,
                    "./handle-swal-dom": 6,
                    "./utils": 9
                }],
                9: [function (t, n, i) {
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    });
                    var r = function (e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        },
                        o = function (e) {
                            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                            return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                        },
                        s = function () {
                            return e.attachEvent && !e.addEventListener
                        },
                        a = function (t) {
                            e.console && e.console.log("SweetAlert: " + t)
                        },
                        l = function (e, t) {
                            e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                            var n, i, r = "#";
                            for (i = 0; 3 > i; i++) n = parseInt(e.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), r += ("00" + n).substr(n.length);
                            return r
                        };
                    i.extend = r, i.hexToRgb = o, i.isIE8 = s, i.logStr = a, i.colorLuminance = l
                }, {}]
            }, {}, [1]), "function" == typeof define && define.amd ? define(function () {
            return sweetAlert
        }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
    }(window, document), function ($) {
    function initDeleteTarget() {
        $(".swal-dialog-target").append(function () {
            return "\n<form action='" + $(this).attr("data-url") + "' method='post' style='display:none'>\n   <input type='hidden' name='_method' value='" + ($(this).data("method") ? $(this).data("method") : "delete") + "'>\n   <input type='hidden' name='_token' value='" + XblogConfig.csrfToken + "'>\n</form>\n"
        }).click(function () {
            var e = $(this).find("form"),
                t = $(this).data("method") ? $(this).data("method") : "delete",
                n = $(this).attr("data-url"),
                i = $(this).data("request-data") ? $(this).data("request-data") : "",
                r = $(this).data("dialog-title") ? $(this).data("dialog-title") : "删除",
                o = $(this).data("dialog-msg"),
                s = $(this).data("dialog-type") ? $(this).data("dialog-type") : "warning",
                a = $(this).data("dialog-cancel-text") ? $(this).data("dialog-cancel-text") : "取消",
                l = $(this).data("dialog-confirm-text") ? $(this).data("dialog-confirm-text") : "确定",
                c = "1" == $(this).data("dialog-enable-html"),
                u = "1" == $(this).data("enable-ajax");
            u ? swal({
                title: r,
                text: o,
                type: s,
                html: c,
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                cancelButtonText: a,
                confirmButtonText: l,
                showLoaderOnConfirm: !0,
                closeOnConfirm: !0
            }, function () {
                $.ajax({
                    headers: {
                        "X-CSRF-TOKEN": XblogConfig.csrfToken
                    },
                    url: n,
                    type: t,
                    data: i,
                    success: function (e) {
                        200 == e.code ? swal({
                            title: "Succeed",
                            text: e.msg,
                            type: "success",
                            timer: 1e3,
                            confirmButtonText: "OK"
                        }) : swal({
                            title: "Failed",
                            text: "操作失败",
                            type: "error",
                            timer: 1e3,
                            confirmButtonText: "OK"
                        })
                    },
                    error: function (e) {
                        swal({
                            title: "Failed",
                            text: "操作失败",
                            type: "error",
                            timer: 1e3,
                            confirmButtonText: "OK"
                        })
                    }
                })
            }) : swal({
                title: r,
                text: o,
                type: s,
                html: c,
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                cancelButtonText: a,
                confirmButtonText: l,
                closeOnConfirm: !0
            }, function () {
                e.submit()
            })
        })
    }

    function loadComments(e, t) {
        var n = $("#comments-container");
        (t || n.children().length <= 0) && $.ajax({
            method: "get",
            url: n.data("api-url")
        }).done(function (t) {
            n.html(t), initDeleteTarget(), highLightCodeOfChild(n), e && moveEnd($("#comment-submit"))
        })
    }

    function initComment() {
        var e = $("#comment-form"),
            t = e.find("#comment-submit"),
            n = e.find("#comment-content"),
            i = e.find("input[name=username]"),
            r = e.find("input[name=email]"),
            o = e.find("input[name=site]");
        window.localStorage && (i.val(void 0 == localStorage.getItem("comment_username") ? "" : localStorage.getItem("comment_username")), r.val(void 0 == localStorage.getItem("comment_email") ? "" : localStorage.getItem("comment_email")), o.val(void 0 == localStorage.getItem("comment_site") ? "" : localStorage.getItem("comment_site"))), e.on("submit", function () {
            if (i.length > 0) {
                if ("" == $.trim(i.val())) return i.focus(), !1;
                if ("" == $.trim(r.val())) return r.focus(), !1
            }
            if ("" == $.trim(n.val())) return n.focus(), !1;
            var s = i.val(),
                a = r.val(),
                l = o.val();
            return t.val("提交中...").addClass("disabled").prop("disabled", !0), $.ajax({
                method: "post",
                url: $(this).attr("action"),
                headers: {
                    "X-CSRF-TOKEN": XblogConfig.csrfToken
                },
                data: {
                    commentable_id: e.find("input[name=commentable_id]").val(),
                    commentable_type: e.find("input[name=commentable_type]").val(),
                    content: n.val(),
                    username: s,
                    email: a,
                    site: l
                }
            }).done(function (t) {
                200 === t.status ? (window.localStorage && (localStorage.setItem("comment_username", s), localStorage.setItem("comment_email", a), localStorage.setItem("comment_site", l)), i.val(""), r.val(""), o.val(""), n.val(""), e.find("#comment_error_msg").text(""), loadComments(!0, !0)) : e.find("#comment_error_msg").text(t.msg)
            }).always(function () {
                t.val("回复").removeClass("disabled").prop("disabled", !1)
            }), !1
        })
    }

    function initMarkdownTarget() {
        $(".markdown-target").each(function (e, t) {
            t.innerHTML = marked($(t).data("markdown"), {
                renderer: new marked.Renderer,
                gfm: !0,
                tables: !0,
                breaks: !1,
                pedantic: !1,
                smartLists: !0,
                smartypants: !1
            })
        })
    }

    function highLightCode() {
        $("pre code").each(function (e, t) {
            hljs.highlightBlock(t)
        })
    }

    function highLightCodeOfChild(e) {
        $("pre code", e).each(function (e, t) {
            hljs.highlightBlock(t)
        })
    }

    function initTables() {
        $("table").addClass("table table-bordered table-responsive")
    }

    function autoSize() {
        autosize($(".autosize-target"))
    }

    function imageLiquid() {
        $(".js-imgLiquid").imgLiquid({
            fill: !0,
            horizontalAlign: "center",
            verticalAlign: "top"
        })
    }

    function initProjects() {
        var projects = $(".projects");
        projects.length > 0 && $.get("https://api.github.com/users/" + XblogConfig.github_username + "/repos?type=owner", function (repositories) {
            return repositories ? (projects.html(""), repositories = repositories.sort(function (e, t) {
                return t.stargazers_count - e.stargazers_count
            }), repositories = repositories.filter(function (e) {
                return null != e.description
            }), void repositories.forEach(function (repo) {
                var repoTemplate = $("#repo-template").html(),
                    item = repoTemplate.replace(/\[(.*?)\]/g, function () {
                        return eval(arguments[1])
                    });
                projects.append(item)
            })) : void projects.html("<div><h3>加载失败</h3><p>请刷新或稍后再试...</p></div>")
        })
    }

    var Xblog = {
        init: function () {
            this.bootUp()
        },
        bootUp: function () {
            loadComments(!1, !1), initComment(), initMarkdownTarget(), initTables(), autoSize(), initProjects(), initDeleteTarget(), highLightCode(), imageLiquid()
        }
    };
    window.Xblog = Xblog
}(jQuery), $(document).ready(function () {
    Xblog.init()
});
var moveEnd = function (e) {
    e.focus();
    var t = void 0 === e.value ? 0 : e.value.length;
    if (document.selection) {
        var n = e.createTextRange();
        n.moveStart("character", t), n.collapse(), n.select()
    } else "number" == typeof e.selectionStart && "number" == typeof e.selectionEnd && (e.selectionStart = e.selectionEnd = t)
};