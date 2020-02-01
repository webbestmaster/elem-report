!(function(t) {
    var e = {};
    function r(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = {i: n, l: !1, exports: {}});
        return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    (r.m = t),
        (r.c = e),
        (r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n});
        }),
        (r.r = function(t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
        }),
        (r.t = function(t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (r.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t)
            )
                for (var o in t)
                    r.d(
                        n,
                        o,
                        function(e) {
                            return t[e];
                        }.bind(null, o),
                    );
            return n;
        }),
        (r.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t.default;
                      }
                    : function() {
                          return t;
                      };
            return r.d(e, 'a', e), e;
        }),
        (r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (r.p = '/wife/elem-report/'),
        r((r.s = 5));
})([
    function(t, e, r) {
        t.exports = r(6);
    },
    function(t, e) {
        function r(t, e, r, n, o, a, c) {
            try {
                var i = t[a](c),
                    u = i.value;
            } catch (t) {
                return void r(t);
            }
            i.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        t.exports = function(t) {
            return function() {
                var e = this,
                    n = arguments;
                return new Promise(function(o, a) {
                    var c = t.apply(e, n);
                    function i(t) {
                        r(c, o, a, i, u, 'next', t);
                    }
                    function u(t) {
                        r(c, o, a, i, u, 'throw', t);
                    }
                    i(void 0);
                });
            };
        };
    },
    function(t, e, r) {
        var n = r(7),
            o = r(8),
            a = r(9);
        t.exports = function(t, e) {
            return n(t) || o(t, e) || a();
        };
    },
    function(t, e) {
        t.exports = function(t, e, r) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
                    : (t[e] = r),
                t
            );
        };
    },
    function(t, e, r) {
        var n = r(10),
            o = r(11),
            a = r(12);
        t.exports = function(t) {
            return n(t) || o(t) || a();
        };
    },
    function(t, e, r) {
        t.exports = r(13);
    },
    function(t, e, r) {
        var n = (function(t) {
            'use strict';
            var e = Object.prototype,
                r = e.hasOwnProperty,
                n = 'function' == typeof Symbol ? Symbol : {},
                o = n.iterator || '@@iterator',
                a = n.asyncIterator || '@@asyncIterator',
                c = n.toStringTag || '@@toStringTag';
            function i(t, e, r, n) {
                var o = e && e.prototype instanceof s ? e : s,
                    a = Object.create(o.prototype),
                    c = new L(n || []);
                return (
                    (a._invoke = (function(t, e, r) {
                        var n = 'suspendedStart';
                        return function(o, a) {
                            if ('executing' === n) throw new Error('Generator is already running');
                            if ('completed' === n) {
                                if ('throw' === o) throw a;
                                return {value: void 0, done: !0};
                            }
                            for (r.method = o, r.arg = a; ; ) {
                                var c = r.delegate;
                                if (c) {
                                    var i = b(c, r);
                                    if (i) {
                                        if (i === l) continue;
                                        return i;
                                    }
                                }
                                if ('next' === r.method) r.sent = r._sent = r.arg;
                                else if ('throw' === r.method) {
                                    if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                                    r.dispatchException(r.arg);
                                } else 'return' === r.method && r.abrupt('return', r.arg);
                                n = 'executing';
                                var s = u(t, e, r);
                                if ('normal' === s.type) {
                                    if (((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)) continue;
                                    return {value: s.arg, done: r.done};
                                }
                                'throw' === s.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg));
                            }
                        };
                    })(t, r, c)),
                    a
                );
            }
            function u(t, e, r) {
                try {
                    return {type: 'normal', arg: t.call(e, r)};
                } catch (t) {
                    return {type: 'throw', arg: t};
                }
            }
            t.wrap = i;
            var l = {};
            function s() {}
            function f() {}
            function p() {}
            var h = {};
            h[o] = function() {
                return this;
            };
            var d = Object.getPrototypeOf,
                y = d && d(d(S([])));
            y && y !== e && r.call(y, o) && (h = y);
            var v = (p.prototype = s.prototype = Object.create(h));
            function g(t) {
                ['next', 'throw', 'return'].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t);
                    };
                });
            }
            function m(t) {
                var e;
                this._invoke = function(n, o) {
                    function a() {
                        return new Promise(function(e, a) {
                            !(function e(n, o, a, c) {
                                var i = u(t[n], t, o);
                                if ('throw' !== i.type) {
                                    var l = i.arg,
                                        s = l.value;
                                    return s && 'object' == typeof s && r.call(s, '__await')
                                        ? Promise.resolve(s.__await).then(
                                              function(t) {
                                                  e('next', t, a, c);
                                              },
                                              function(t) {
                                                  e('throw', t, a, c);
                                              },
                                          )
                                        : Promise.resolve(s).then(
                                              function(t) {
                                                  (l.value = t), a(l);
                                              },
                                              function(t) {
                                                  return e('throw', t, a, c);
                                              },
                                          );
                                }
                                c(i.arg);
                            })(n, o, e, a);
                        });
                    }
                    return (e = e ? e.then(a, a) : a());
                };
            }
            function b(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (((e.delegate = null), 'throw' === e.method)) {
                        if (
                            t.iterator.return &&
                            ((e.method = 'return'), (e.arg = void 0), b(t, e), 'throw' === e.method)
                        )
                            return l;
                        (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return l;
                }
                var n = u(r, t.iterator, e.arg);
                if ('throw' === n.type) return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), l;
                var o = n.arg;
                return o
                    ? o.done
                        ? ((e[t.resultName] = o.value),
                          (e.next = t.nextLoc),
                          'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
                          (e.delegate = null),
                          l)
                        : o
                    : ((e.method = 'throw'),
                      (e.arg = new TypeError('iterator result is not an object')),
                      (e.delegate = null),
                      l);
            }
            function x(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e);
            }
            function w(t) {
                var e = t.completion || {};
                (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function L(t) {
                (this.tryEntries = [{tryLoc: 'root'}]), t.forEach(x, this), this.reset(!0);
            }
            function S(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ('function' == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            a = function e() {
                                for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                                return (e.value = void 0), (e.done = !0), e;
                            };
                        return (a.next = a);
                    }
                }
                return {next: O};
            }
            function O() {
                return {value: void 0, done: !0};
            }
            return (
                (f.prototype = v.constructor = p),
                (p.constructor = f),
                (p[c] = f.displayName = 'GeneratorFunction'),
                (t.isGeneratorFunction = function(t) {
                    var e = 'function' == typeof t && t.constructor;
                    return !!e && (e === f || 'GeneratorFunction' === (e.displayName || e.name));
                }),
                (t.mark = function(t) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, p)
                            : ((t.__proto__ = p), c in t || (t[c] = 'GeneratorFunction')),
                        (t.prototype = Object.create(v)),
                        t
                    );
                }),
                (t.awrap = function(t) {
                    return {__await: t};
                }),
                g(m.prototype),
                (m.prototype[a] = function() {
                    return this;
                }),
                (t.AsyncIterator = m),
                (t.async = function(e, r, n, o) {
                    var a = new m(i(e, r, n, o));
                    return t.isGeneratorFunction(r)
                        ? a
                        : a.next().then(function(t) {
                              return t.done ? t.value : a.next();
                          });
                }),
                g(v),
                (v[c] = 'Generator'),
                (v[o] = function() {
                    return this;
                }),
                (v.toString = function() {
                    return '[object Generator]';
                }),
                (t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return (
                        e.reverse(),
                        function r() {
                            for (; e.length; ) {
                                var n = e.pop();
                                if (n in t) return (r.value = n), (r.done = !1), r;
                            }
                            return (r.done = !0), r;
                        }
                    );
                }),
                (t.values = S),
                (L.prototype = {
                    constructor: L,
                    reset: function(t) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = void 0),
                            this.tryEntries.forEach(w),
                            !t)
                        )
                            for (var e in this)
                                't' === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ('throw' === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function n(r, n) {
                            return (
                                (c.type = 'throw'),
                                (c.arg = t),
                                (e.next = r),
                                n && ((e.method = 'next'), (e.arg = void 0)),
                                !!n
                            );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                c = a.completion;
                            if ('root' === a.tryLoc) return n('end');
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, 'catchLoc'),
                                    u = r.call(a, 'finallyLoc');
                                if (i && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                } else {
                                    if (!u) throw new Error('try statement without catch or finally');
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                var a = o;
                                break;
                            }
                        }
                        a && ('break' === t || 'continue' === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var c = a ? a.completion : {};
                        return (
                            (c.type = t),
                            (c.arg = e),
                            a ? ((this.method = 'next'), (this.next = a.finallyLoc), l) : this.complete(c)
                        );
                    },
                    complete: function(t, e) {
                        if ('throw' === t.type) throw t.arg;
                        return (
                            'break' === t.type || 'continue' === t.type
                                ? (this.next = t.arg)
                                : 'return' === t.type
                                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === t.type && e && (this.next = e),
                            l
                        );
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), w(r), l;
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ('throw' === n.type) {
                                    var o = n.arg;
                                    w(r);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function(t, e, r) {
                        return (
                            (this.delegate = {iterator: S(t), resultName: e, nextLoc: r}),
                            'next' === this.method && (this.arg = void 0),
                            l
                        );
                    },
                }),
                t
            );
        })(t.exports);
        try {
            regeneratorRuntime = n;
        } catch (t) {
            Function('r', 'regeneratorRuntime = r')(n);
        }
    },
    function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) return t;
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) {
                var r = [],
                    n = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (
                        var c, i = t[Symbol.iterator]();
                        !(n = (c = i.next()).done) && (r.push(c.value), !e || r.length !== e);
                        n = !0
                    );
                } catch (t) {
                    (o = !0), (a = t);
                } finally {
                    try {
                        n || null == i.return || i.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return r;
            }
        };
    },
    function(t, e) {
        t.exports = function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        };
    },
    function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                return r;
            }
        };
    },
    function(t, e) {
        t.exports = function(t) {
            if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
                return Array.from(t);
        };
    },
    function(t, e) {
        t.exports = function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
        };
    },
    function(t, e, r) {
        'use strict';
        r.r(e);
        var n = r(0),
            o = r.n(n),
            a = r(1),
            c = r.n(a),
            i = r(2),
            u = r.n(i);
        function l(t) {
            return 'number' != typeof t || Number.isNaN(t);
        }
        var s = 60 * new Date().getTimezoneOffset() * 1e3;
        function f() {
            return new Date().getTime() + s;
        }
        function p(t) {
            return new Promise(function(e) {
                setTimeout(e, t);
            });
        }
        function h(t) {
            return d.apply(this, arguments);
        }
        function d() {
            return (d = c()(
                o.a.mark(function t(e) {
                    var r, n, a;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), fetch(e);
                                case 2:
                                    return (r = t.sent), (t.next = 5), r.text();
                                case 5:
                                    return (
                                        (n = t.sent),
                                        ((a = document.createElement('html')).innerHTML = n),
                                        t.abrupt('return', a)
                                    );
                                case 9:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function y() {
            return v.apply(this, arguments);
        }
        function v() {
            return (v = c()(
                o.a.mark(function t() {
                    var e, r, n;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), h('/ratings/guild/war/');
                                case 2:
                                    if (((e = t.sent), (r = e.querySelector('.num.c_orange')))) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildLevel: can not get levelNode'), t.abrupt('return', null)
                                    );
                                case 7:
                                    if ((n = parseInt(r.textContent, 10))) {
                                        t.next = 11;
                                        break;
                                    }
                                    return console.error('getGuildLevel: can not get level'), t.abrupt('return', null);
                                case 11:
                                    return t.abrupt('return', n);
                                case 12:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function g() {
            return m.apply(this, arguments);
        }
        function m() {
            return (m = c()(
                o.a.mark(function t() {
                    var e, r, n, a;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), h('/guild/graids/tweens/');
                                case 2:
                                    if (((e = t.sent), (r = e.querySelector('.fttl.green.mt5.mb10 .lf .rt')))) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getAltarLevel: can not get levelNode'), t.abrupt('return', null)
                                    );
                                case 7:
                                    if (((n = r.textContent.replace(/\D/g, '')), (a = parseInt(n, 10)))) {
                                        t.next = 12;
                                        break;
                                    }
                                    return console.error('getAltarLevel: can not get level'), t.abrupt('return', null);
                                case 12:
                                    return t.abrupt('return', a - 1);
                                case 13:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function b() {
            return x.apply(this, arguments);
        }
        function x() {
            return (x = c()(
                o.a.mark(function t() {
                    var e, r, n, a, c, i, l, s, f;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), h('/guild/card/');
                                case 2:
                                    if (
                                        ((e = t.sent),
                                        (r = e.querySelectorAll('.cimp.mt10.c_cc .wr1 .wr2 .pt5.small')),
                                        (n = u()(r, 2)),
                                        (a = n[0]),
                                        (c = n[1]),
                                        a && c)
                                    ) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildCardData: can not get valueNode or levelNode'),
                                        t.abrupt('return', null)
                                    );
                                case 7:
                                    if (
                                        ((i = a.textContent.replace(/\D/g, '')),
                                        (l = parseInt(i, 10)),
                                        (s = c.textContent.replace(/\D/g, '')),
                                        (f = parseInt(s, 10)),
                                        l && f)
                                    ) {
                                        t.next = 14;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildCardData: can not get value or level'),
                                        t.abrupt('return', null)
                                    );
                                case 14:
                                    return t.abrupt('return', {value: l, level: f});
                                case 15:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        var w = r(3),
            L = r.n(w),
            S = r(4),
            O = r.n(S);
        function k(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e &&
                    (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function j(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? k(Object(r), !0).forEach(function(e) {
                          L()(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : k(Object(r)).forEach(function(e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      });
            }
            return t;
        }
        function _(t) {
            return E.apply(this, arguments);
        }
        function E() {
            return (E = c()(
                o.a.mark(function t(e) {
                    var r, n, a, c, i, u, l, s, f, p, d, y, v, g, m, b;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), h('/user/'.concat(e, '/'));
                                case 2:
                                    if (
                                        ((r = t.sent),
                                        (n = 0),
                                        (a = r.querySelector('div[class^=profile]')
                                            ? 'div[class^=profile]'
                                            : '#gameBody'),
                                        (c = r.querySelector(''.concat(a, ' > .c_da'))),
                                        (i = r.querySelector(''.concat(a, ' > .c_99'))),
                                        (u = r.querySelector(''.concat(a, ' > .pt2.small > .fl'))),
                                        (l =
                                            r.querySelector(''.concat(a, ' > .c_orange.mt10.cntr.small')) ||
                                            r.querySelector('.ml5.mr3.pt2 > .c_da')),
                                        (s = r.querySelector(''.concat(a, ' > .small.c_99.mt10.ml8.lh16 > .c_da'))),
                                        (f = r.querySelector('.brd.fl.mr8.ml5.mb5 img')) && c && i && u && l && s)
                                    ) {
                                        t.next = 16;
                                        break;
                                    }
                                    return (
                                        console.error('getManDataById: can not get nodes, id:', e, f, c, i, u, l, s),
                                        t.abrupt('return', null)
                                    );
                                case 16:
                                    if (
                                        ((p = c.textContent.trim()),
                                        (d = f.getAttribute('src') || ''),
                                        (y = parseInt(i.textContent.replace(/\D/g, ''), 10)),
                                        (v = u.textContent.trim()),
                                        (g = parseInt(l.textContent.replace(/\D/g, ''), 10)),
                                        (m = parseInt(s.textContent.replace(/\D/g, ''), 10)),
                                        (b = {
                                            id: e,
                                            name: p,
                                            level: y,
                                            rank: v,
                                            deckValue: g,
                                            daysInGame: m,
                                            avatarSrc: d,
                                            warData: null,
                                            daysInGuild: n,
                                        }),
                                        p && y && v && g && m && d)
                                    ) {
                                        t.next = 27;
                                        break;
                                    }
                                    return (
                                        console.error('getManDataById: can not got data, id:', e),
                                        console.log(b),
                                        t.abrupt('return', null)
                                    );
                                case 27:
                                    return t.abrupt('return', b);
                                case 28:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function D(t) {
            var e = O()(t.querySelectorAll('.small.c_99.mt10')),
                r = [];
            return (
                e.forEach(function(t) {
                    if (t.textContent.includes('Использовано ключей')) {
                        var e = t.querySelector('.c_orange');
                        e && r.push(e);
                    }
                }),
                r
            );
        }
        function I(t) {
            return P.apply(this, arguments);
        }
        function P() {
            return (P = c()(
                o.a.mark(function t(e) {
                    var r, n, a, c, i, s, f, p, d, y, v;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), h('/gwprofile/'.concat(e, '/'));
                                case 2:
                                    if (
                                        ((r = t.sent),
                                        (n = r.querySelector('.c_orange.mt10.cntr.small')),
                                        (a = r.querySelector('img[src="/img/ico16-battle-sum.png"]')),
                                        (c = a ? a.parentElement : null),
                                        (i = D(r)),
                                        n && c)
                                    ) {
                                        t.next = 10;
                                        break;
                                    }
                                    return (
                                        console.error('getManWarDataById: can not get nodes, id:', e, n, c, i),
                                        t.abrupt('return', null)
                                    );
                                case 10:
                                    if (
                                        ((s = parseInt(n.textContent.replace(/\D/g, ''), 10)),
                                        (f = parseInt(c.textContent.replace(/\D/g, ''), 10)),
                                        (p = 0),
                                        (d = 0),
                                        i.forEach(function(t) {
                                            var e = t.textContent
                                                    .trim()
                                                    .split(/\D+/gi)
                                                    .map(function(t) {
                                                        return parseInt(t.trim(), 10);
                                                    }),
                                                r = u()(e, 2),
                                                n = r[0],
                                                o = r[1];
                                            (p += n), (d += o);
                                        }),
                                        (y = r.innerHTML.indexOf('<span class="stat">6000</span>') > 0),
                                        (v = {
                                            deckValue: s,
                                            damageValue: f,
                                            fightCount: p,
                                            keyCount: d,
                                            hasGoblinCard: y,
                                        }),
                                        !l(s) && !l(f))
                                    ) {
                                        t.next = 21;
                                        break;
                                    }
                                    return (
                                        console.error('getManWarDataById: can not got data, id:', e),
                                        console.log(v),
                                        t.abrupt('return', null)
                                    );
                                case 21:
                                    return t.abrupt('return', v);
                                case 22:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function C() {
            return G.apply(this, arguments);
        }
        function G() {
            return (G = c()(
                o.a.mark(function t() {
                    var e, r, n, a, c;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    (e = []), (r = 0), (n = [1, 2, 3, 4, 5]);
                                case 3:
                                    if (!(r < n.length)) {
                                        t.next = 15;
                                        break;
                                    }
                                    return (a = n[r]), (t.next = 7), p(1e3);
                                case 7:
                                    return (t.t0 = e), (t.next = 10), h('/guild/members/page_' + a);
                                case 10:
                                    (t.t1 = t.sent), t.t0.push.call(t.t0, t.t1);
                                case 12:
                                    r++, (t.next = 3);
                                    break;
                                case 15:
                                    return (
                                        (c = []),
                                        e.forEach(function(t) {
                                            t.querySelectorAll('.bl.tdn.small.c_dblue.ptb5').forEach(function(t) {
                                                var e = t.getAttribute('href') || '',
                                                    r = parseInt(e.replace(/\D/g, ''), 10),
                                                    n = t.querySelector('.fr.c_cc .c_99');
                                                if (n) {
                                                    var o = n.textContent.replace(/\D/gi, ''),
                                                        a = parseInt(o, 10);
                                                    l(a) &&
                                                        console.error(
                                                            'getManShortDataList: daysInGuild should be a number',
                                                        ),
                                                        c.push({id: r, daysInGuild: a || 0});
                                                } else console.error('getManShortDataList: can not get daysInGuildNode');
                                            });
                                        }),
                                        t.abrupt('return', c)
                                    );
                                case 18:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function q(t) {
            return A.apply(this, arguments);
        }
        function A() {
            return (A = c()(
                o.a.mark(function t(e) {
                    var r, n, a, c, i, u, l, s, f, h, d, y, v;
                    return o.a.wrap(
                        function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (t.next = 2), C();
                                    case 2:
                                        (r = t.sent),
                                            (n = r.length),
                                            console.log('manShortDataList', r),
                                            (a = []),
                                            (c = !0),
                                            (i = !1),
                                            (u = void 0),
                                            (t.prev = 9),
                                            (l = r[Symbol.iterator]());
                                    case 11:
                                        if ((c = (s = l.next()).done)) {
                                            t.next = 34;
                                            break;
                                        }
                                        return (f = s.value), (h = f.id), (d = f.daysInGuild), (t.next = 16), p(1500);
                                    case 16:
                                        return (t.next = 18), _(h);
                                    case 18:
                                        return (y = t.sent), (t.next = 21), p(1500);
                                    case 21:
                                        if ('war' !== e) {
                                            t.next = 27;
                                            break;
                                        }
                                        return (t.next = 24), I(h);
                                    case 24:
                                        (t.t0 = t.sent), (t.next = 28);
                                        break;
                                    case 27:
                                        t.t0 = null;
                                    case 28:
                                        (v = t.t0),
                                            y
                                                ? a.push(j({}, y, {warData: v, daysInGuild: d}))
                                                : console.error('getManList: can not get man with manShortData:', f),
                                            console.log(
                                                'getManList progress:',
                                                ((a.length / n) * 100).toFixed(2) + '%',
                                            );
                                    case 31:
                                        (c = !0), (t.next = 11);
                                        break;
                                    case 34:
                                        t.next = 40;
                                        break;
                                    case 36:
                                        (t.prev = 36), (t.t1 = t.catch(9)), (i = !0), (u = t.t1);
                                    case 40:
                                        (t.prev = 40), (t.prev = 41), c || null == l.return || l.return();
                                    case 43:
                                        if (((t.prev = 43), !i)) {
                                            t.next = 46;
                                            break;
                                        }
                                        throw u;
                                    case 46:
                                        return t.finish(43);
                                    case 47:
                                        return t.finish(40);
                                    case 48:
                                        return t.abrupt('return', a);
                                    case 49:
                                    case 'end':
                                        return t.stop();
                                }
                        },
                        t,
                        null,
                        [
                            [9, 36, 40, 48],
                            [41, , 43, 47],
                        ],
                    );
                }),
            )).apply(this, arguments);
        }
        function N(t) {
            return T.apply(this, arguments);
        }
        function T() {
            return (T = c()(
                o.a.mark(function t(e) {
                    var r, n, a, c;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), p(1e3);
                                case 2:
                                    return (t.next = 4), y();
                                case 4:
                                    return (r = t.sent), console.log('guildLevel:', r), (t.next = 8), p(1e3);
                                case 8:
                                    return (t.next = 10), g();
                                case 10:
                                    return (n = t.sent), console.log('altarLevel:', n), (t.next = 14), p(1e3);
                                case 14:
                                    return (t.next = 16), b();
                                case 16:
                                    return (a = t.sent), console.log('guildCard:', a), (t.next = 20), p(1e3);
                                case 20:
                                    return (t.next = 22), q(e);
                                case 22:
                                    return (
                                        (c = t.sent),
                                        console.log('manList:', c),
                                        t.abrupt('return', {
                                            timeStamp: f(),
                                            guildLevel: r,
                                            altarLevel: n,
                                            guildCard: a,
                                            manList: c,
                                        })
                                    );
                                case 25:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function M(t, e) {
            var r = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(e, null, 4) + '\n');
            return fetch(r)
                .then(function(t) {
                    return t.blob();
                })
                .then(function(e) {
                    if ('undefined' == typeof document) return console.error('document is not define'), null;
                    var r = document.body;
                    if (!r) return console.error('body is not define'), null;
                    var n = URL.createObjectURL(e),
                        o = document.createElement('a');
                    return (
                        (o.style.display = 'none'),
                        (o.href = n),
                        (o.download = t + '.json'),
                        r.append(o),
                        o.click(),
                        console.log('Your file has downloaded!'),
                        URL.revokeObjectURL(n),
                        r.removeChild(o),
                        null
                    );
                })
                .catch(function(t) {
                    return console.error(t.message), t;
                });
        }
        c()(
            o.a.mark(function t() {
                var e;
                return o.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), N('war');
                            case 2:
                                return (
                                    (e = t.sent),
                                    (t.next = 5),
                                    M(
                                        'report-' +
                                            ((r = e.timeStamp),
                                            new Date(r - s)
                                                .toISOString()
                                                .replace(/:/g, '-')
                                                .replace(/\.\d{3}Z$/, '')
                                                .replace('T', '-')) +
                                            '-war',
                                        e,
                                    )
                                );
                            case 5:
                                console.log('reportData'), console.log(e);
                            case 7:
                            case 'end':
                                return t.stop();
                        }
                    var r;
                }, t);
            }),
        )();
    },
]);
