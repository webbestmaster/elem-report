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
        (r.p = '/static/'),
        r((r.s = 3));
})([
    function(t, e, r) {
        t.exports = r(4);
    },
    function(t, e) {
        function r(t, e, r, n, o, a, i) {
            try {
                var c = t[a](i),
                    u = c.value;
            } catch (t) {
                return void r(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        t.exports = function(t) {
            return function() {
                var e = this,
                    n = arguments;
                return new Promise(function(o, a) {
                    var i = t.apply(e, n);
                    function c(t) {
                        r(i, o, a, c, u, 'next', t);
                    }
                    function u(t) {
                        r(i, o, a, c, u, 'throw', t);
                    }
                    c(void 0);
                });
            };
        };
    },
    function(t, e, r) {
        var n = r(5),
            o = r(6),
            a = r(7);
        t.exports = function(t, e) {
            return n(t) || o(t, e) || a();
        };
    },
    function(t, e, r) {
        t.exports = r(8);
    },
    function(t, e, r) {
        var n = (function(t) {
            'use strict';
            var e = Object.prototype,
                r = e.hasOwnProperty,
                n = 'function' == typeof Symbol ? Symbol : {},
                o = n.iterator || '@@iterator',
                a = n.asyncIterator || '@@asyncIterator',
                i = n.toStringTag || '@@toStringTag';
            function c(t, e, r, n) {
                var o = e && e.prototype instanceof l ? e : l,
                    a = Object.create(o.prototype),
                    i = new L(n || []);
                return (
                    (a._invoke = (function(t, e, r) {
                        var n = 'suspendedStart';
                        return function(o, a) {
                            if ('executing' === n) throw new Error('Generator is already running');
                            if ('completed' === n) {
                                if ('throw' === o) throw a;
                                return _();
                            }
                            for (r.method = o, r.arg = a; ; ) {
                                var i = r.delegate;
                                if (i) {
                                    var c = x(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c;
                                    }
                                }
                                if ('next' === r.method) r.sent = r._sent = r.arg;
                                else if ('throw' === r.method) {
                                    if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                                    r.dispatchException(r.arg);
                                } else 'return' === r.method && r.abrupt('return', r.arg);
                                n = 'executing';
                                var l = u(t, e, r);
                                if ('normal' === l.type) {
                                    if (((n = r.done ? 'completed' : 'suspendedYield'), l.arg === s)) continue;
                                    return {value: l.arg, done: r.done};
                                }
                                'throw' === l.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
                            }
                        };
                    })(t, r, i)),
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
            t.wrap = c;
            var s = {};
            function l() {}
            function f() {}
            function p() {}
            var h = {};
            h[o] = function() {
                return this;
            };
            var v = Object.getPrototypeOf,
                d = v && v(v(k([])));
            d && d !== e && r.call(d, o) && (h = d);
            var y = (p.prototype = l.prototype = Object.create(h));
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
                            !(function e(n, o, a, i) {
                                var c = u(t[n], t, o);
                                if ('throw' !== c.type) {
                                    var s = c.arg,
                                        l = s.value;
                                    return l && 'object' == typeof l && r.call(l, '__await')
                                        ? Promise.resolve(l.__await).then(
                                              function(t) {
                                                  e('next', t, a, i);
                                              },
                                              function(t) {
                                                  e('throw', t, a, i);
                                              },
                                          )
                                        : Promise.resolve(l).then(
                                              function(t) {
                                                  (s.value = t), a(s);
                                              },
                                              function(t) {
                                                  return e('throw', t, a, i);
                                              },
                                          );
                                }
                                i(c.arg);
                            })(n, o, e, a);
                        });
                    }
                    return (e = e ? e.then(a, a) : a());
                };
            }
            function x(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (((e.delegate = null), 'throw' === e.method)) {
                        if (
                            t.iterator.return &&
                            ((e.method = 'return'), (e.arg = void 0), x(t, e), 'throw' === e.method)
                        )
                            return s;
                        (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return s;
                }
                var n = u(r, t.iterator, e.arg);
                if ('throw' === n.type) return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), s;
                var o = n.arg;
                return o
                    ? o.done
                        ? ((e[t.resultName] = o.value),
                          (e.next = t.nextLoc),
                          'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
                          (e.delegate = null),
                          s)
                        : o
                    : ((e.method = 'throw'),
                      (e.arg = new TypeError('iterator result is not an object')),
                      (e.delegate = null),
                      s);
            }
            function w(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e);
            }
            function b(t) {
                var e = t.completion || {};
                (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function L(t) {
                (this.tryEntries = [{tryLoc: 'root'}]), t.forEach(w, this), this.reset(!0);
            }
            function k(t) {
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
                return {next: _};
            }
            function _() {
                return {value: void 0, done: !0};
            }
            return (
                (f.prototype = y.constructor = p),
                (p.constructor = f),
                (p[i] = f.displayName = 'GeneratorFunction'),
                (t.isGeneratorFunction = function(t) {
                    var e = 'function' == typeof t && t.constructor;
                    return !!e && (e === f || 'GeneratorFunction' === (e.displayName || e.name));
                }),
                (t.mark = function(t) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, p)
                            : ((t.__proto__ = p), i in t || (t[i] = 'GeneratorFunction')),
                        (t.prototype = Object.create(y)),
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
                    var a = new m(c(e, r, n, o));
                    return t.isGeneratorFunction(r)
                        ? a
                        : a.next().then(function(t) {
                              return t.done ? t.value : a.next();
                          });
                }),
                g(y),
                (y[i] = 'Generator'),
                (y[o] = function() {
                    return this;
                }),
                (y.toString = function() {
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
                (t.values = k),
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
                            this.tryEntries.forEach(b),
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
                                (i.type = 'throw'),
                                (i.arg = t),
                                (e.next = r),
                                n && ((e.method = 'next'), (e.arg = void 0)),
                                !!n
                            );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ('root' === a.tryLoc) return n('end');
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, 'catchLoc'),
                                    u = r.call(a, 'finallyLoc');
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                } else if (c) {
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
                        var i = a ? a.completion : {};
                        return (
                            (i.type = t),
                            (i.arg = e),
                            a ? ((this.method = 'next'), (this.next = a.finallyLoc), s) : this.complete(i)
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
                            s
                        );
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), b(r), s;
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ('throw' === n.type) {
                                    var o = n.arg;
                                    b(r);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function(t, e, r) {
                        return (
                            (this.delegate = {iterator: k(t), resultName: e, nextLoc: r}),
                            'next' === this.method && (this.arg = void 0),
                            s
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
                        var i, c = t[Symbol.iterator]();
                        !(n = (i = c.next()).done) && (r.push(i.value), !e || r.length !== e);
                        n = !0
                    );
                } catch (t) {
                    (o = !0), (a = t);
                } finally {
                    try {
                        n || null == c.return || c.return();
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
    function(t, e, r) {
        'use strict';
        r.r(e);
        var n = r(0),
            o = r.n(n),
            a = r(1),
            i = r.n(a);
        function c(t) {
            return u.apply(this, arguments);
        }
        function u() {
            return (u = i()(
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
        function s() {
            return l.apply(this, arguments);
        }
        function l() {
            return (l = i()(
                o.a.mark(function t() {
                    var e, r, n;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), c('/ratings/guild/war/');
                                case 2:
                                    if (((e = t.sent), (r = e.querySelector('.num.c_orange')))) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildLevel: can not get levelNode'), t.abrupt('return', -1)
                                    );
                                case 7:
                                    if ((n = parseInt(r.textContent, 10))) {
                                        t.next = 11;
                                        break;
                                    }
                                    return console.error('getGuildLevel: can not get level'), t.abrupt('return', -1);
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
        function f() {
            return 60 * new Date().getTimezoneOffset() * 1e3;
        }
        var p = f();
        function h() {
            return new Date().getTime() + p;
        }
        function v(t) {
            return new Promise(function(e) {
                setTimeout(e, t);
            });
        }
        function d() {
            return y.apply(this, arguments);
        }
        function y() {
            return (y = i()(
                o.a.mark(function t() {
                    var e, r, n, a;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), c('/guild/graids/tweens/');
                                case 2:
                                    if (((e = t.sent), (r = e.querySelector('.fttl.green.mt5.mb10 .lf .rt')))) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getAltarLevel: can not get levelNode'), t.abrupt('return', -1)
                                    );
                                case 7:
                                    if (((n = r.textContent.replace(/\D/g, '')), (a = parseInt(n, 10)))) {
                                        t.next = 12;
                                        break;
                                    }
                                    return console.error('getAltarLevel: can not get level'), t.abrupt('return', -1);
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
        var g = r(2),
            m = r.n(g);
        function x() {
            return w.apply(this, arguments);
        }
        function w() {
            return (w = i()(
                o.a.mark(function t() {
                    var e, r, n, a, i, u, s, l, f;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), c('/guild/card/');
                                case 2:
                                    if (
                                        ((e = t.sent),
                                        (r = e.querySelectorAll('.cimp.mt10.c_cc .wr1 .wr2 .pt5.small')),
                                        (n = m()(r, 2)),
                                        (a = n[0]),
                                        (i = n[1]),
                                        a && i)
                                    ) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildCardData: can not get valueNode or levelNode'),
                                        t.abrupt('return', {value: -1, level: -1})
                                    );
                                case 7:
                                    if (
                                        ((u = a.textContent.replace(/\D/g, '')),
                                        (s = parseInt(u, 10)),
                                        (l = i.textContent.replace(/\D/g, '')),
                                        (f = parseInt(l, 10)),
                                        s && f)
                                    ) {
                                        t.next = 14;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildCardData: can not get value or level'),
                                        t.abrupt('return', {value: -1, level: -1})
                                    );
                                case 14:
                                    return t.abrupt('return', {value: s, level: f});
                                case 15:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function b(t) {
            return L.apply(this, arguments);
        }
        function L() {
            return (L = i()(
                o.a.mark(function t(e) {
                    var r, n, a, i, u, s, l, f, p, h, v, d, y, g;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (
                                        (r = {
                                            id: e,
                                            name: 'N/A',
                                            level: -1,
                                            rank: 'N/A',
                                            deckValue: -1,
                                            daysInGame: -1,
                                        }),
                                        (t.next = 3),
                                        c('/user/'.concat(e, '/'))
                                    );
                                case 3:
                                    if (
                                        ((n = t.sent),
                                        '#gameBody',
                                        'div[class^=profile]',
                                        (a = n.querySelector('div[class^=profile]')
                                            ? 'div[class^=profile]'
                                            : '#gameBody'),
                                        (i = n.querySelector(''.concat(a, ' > .c_da'))),
                                        (u = n.querySelector(''.concat(a, ' > .c_99'))),
                                        (s = n.querySelector(''.concat(a, ' > .pt2.small > .fl'))),
                                        (l =
                                            n.querySelector(''.concat(a, ' > .c_orange.mt10.cntr.small')) ||
                                            n.querySelector('.ml5.mr3.pt2 > .c_da')),
                                        (f = n.querySelector(''.concat(a, ' > .small.c_99.mt10.ml8.lh16 > .c_da'))),
                                        i && u && s && l && f)
                                    ) {
                                        t.next = 15;
                                        break;
                                    }
                                    return (
                                        console.error('getManDataById: can not get nodes', i, u, s, l, f),
                                        t.abrupt('return', r)
                                    );
                                case 15:
                                    if (
                                        ((p = i.textContent.trim()),
                                        (h = parseInt(u.textContent.replace(/\D/g, ''), 10)),
                                        (v = s.textContent.trim()),
                                        (d = parseInt(l.textContent.replace(/\D/g, ''), 10)),
                                        (y = parseInt(f.textContent.replace(/\D/g, ''), 10)),
                                        (g = {id: e, name: p, level: h, rank: v, deckValue: d, daysInGame: y}),
                                        p && h && v && d && y)
                                    ) {
                                        t.next = 25;
                                        break;
                                    }
                                    return (
                                        console.error('getManDataById: can not got data'),
                                        console.log(g),
                                        t.abrupt('return', r)
                                    );
                                case 25:
                                    return t.abrupt('return', g);
                                case 26:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function k() {
            return _.apply(this, arguments);
        }
        function _() {
            return (_ = i()(
                o.a.mark(function t() {
                    var e, r;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (
                                        (t.next = 2),
                                        Promise.all(
                                            [1, 2, 3, 4, 5].map(function(t) {
                                                return c('/guild/members/page_' + t);
                                            }),
                                        )
                                    );
                                case 2:
                                    return (
                                        (e = t.sent),
                                        (r = []),
                                        e.forEach(function(t) {
                                            t.querySelectorAll('.bl.tdn.small.c_dblue.ptb5').forEach(function(t) {
                                                var e = t.getAttribute('href') || '',
                                                    n = parseInt(e.replace(/\D/g, ''), 10);
                                                r.push(n);
                                            });
                                        }),
                                        t.abrupt('return', r)
                                    );
                                case 6:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function S() {
            return E.apply(this, arguments);
        }
        function E() {
            return (E = i()(
                o.a.mark(function t() {
                    var e, r, n, a, i, c, u, s, l, f;
                    return o.a.wrap(
                        function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (t.next = 2), k();
                                    case 2:
                                        (e = t.sent),
                                            (r = e.length),
                                            console.log('idList', e),
                                            (n = []),
                                            (a = !0),
                                            (i = !1),
                                            (c = void 0),
                                            (t.prev = 9),
                                            (u = e[Symbol.iterator]());
                                    case 11:
                                        if ((a = (s = u.next()).done)) {
                                            t.next = 23;
                                            break;
                                        }
                                        return (l = s.value), (t.next = 15), b(l);
                                    case 15:
                                        return (f = t.sent), n.push(f), (t.next = 19), v(1e3);
                                    case 19:
                                        console.log('getManList progress:', Math.floor((n.length / r) * 100) + '%');
                                    case 20:
                                        (a = !0), (t.next = 11);
                                        break;
                                    case 23:
                                        t.next = 29;
                                        break;
                                    case 25:
                                        (t.prev = 25), (t.t0 = t.catch(9)), (i = !0), (c = t.t0);
                                    case 29:
                                        (t.prev = 29), (t.prev = 30), a || null == u.return || u.return();
                                    case 32:
                                        if (((t.prev = 32), !i)) {
                                            t.next = 35;
                                            break;
                                        }
                                        throw c;
                                    case 35:
                                        return t.finish(32);
                                    case 36:
                                        return t.finish(29);
                                    case 37:
                                        return t.abrupt('return', n);
                                    case 38:
                                    case 'end':
                                        return t.stop();
                                }
                        },
                        t,
                        null,
                        [
                            [9, 25, 29, 37],
                            [30, , 32, 36],
                        ],
                    );
                }),
            )).apply(this, arguments);
        }
        function O() {
            return j.apply(this, arguments);
        }
        function j() {
            return (j = i()(
                o.a.mark(function t() {
                    var e, r, n, a;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), s();
                                case 2:
                                    return (e = t.sent), console.log('guildLevel', e), (t.next = 6), d();
                                case 6:
                                    return (r = t.sent), console.log('altarLevel', r), (t.next = 10), x();
                                case 10:
                                    return (n = t.sent), console.log('guildCard', n), (t.next = 14), S();
                                case 14:
                                    return (
                                        (a = t.sent),
                                        console.log('manList', a),
                                        t.abrupt('return', {
                                            timeStamp: h(),
                                            guildLevel: e,
                                            altarLevel: r,
                                            guildCard: n,
                                            manList: a,
                                        })
                                    );
                                case 17:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        i()(
            o.a.mark(function t() {
                var e;
                return o.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), O();
                            case 2:
                                (e = t.sent), console.log('reportData'), console.log(e);
                            case 5:
                            case 'end':
                                return t.stop();
                        }
                }, t);
            }),
        )();
    },
]);
