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
        var n = r(7),
            o = r(8),
            a = r(9);
        t.exports = function(t) {
            return n(t) || o(t) || a();
        };
    },
    function(t, e, r) {
        var n = r(10),
            o = r(11),
            a = r(12);
        t.exports = function(t, e) {
            return n(t) || o(t, e) || a();
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
                i = n.toStringTag || '@@toStringTag';
            function c(t, e, r, n) {
                var o = e && e.prototype instanceof l ? e : l,
                    a = Object.create(o.prototype),
                    i = new O(n || []);
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
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
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
            var d = Object.getPrototypeOf,
                y = d && d(d(S([])));
            y && y !== e && r.call(y, o) && (h = y);
            var g = (p.prototype = l.prototype = Object.create(h));
            function v(t) {
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
            function b(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (((e.delegate = null), 'throw' === e.method)) {
                        if (
                            t.iterator.return &&
                            ((e.method = 'return'), (e.arg = void 0), b(t, e), 'throw' === e.method)
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
            function O(t) {
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
                return {next: j};
            }
            function j() {
                return {value: void 0, done: !0};
            }
            return (
                (f.prototype = g.constructor = p),
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
                        (t.prototype = Object.create(g)),
                        t
                    );
                }),
                (t.awrap = function(t) {
                    return {__await: t};
                }),
                v(m.prototype),
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
                v(g),
                (g[i] = 'Generator'),
                (g[o] = function() {
                    return this;
                }),
                (g.toString = function() {
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
                (O.prototype = {
                    constructor: O,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), w(r), s;
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
            a = r(2),
            i = r.n(a),
            c = r(3),
            u = r.n(c),
            s = r(1),
            l = r.n(s);
        function f(t) {
            return 'number' != typeof t || Number.isNaN(t);
        }
        function p(t, e) {
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
        var h = r(4),
            d = r.n(h),
            y = 60 * new Date().getTimezoneOffset() * 1e3;
        function g() {
            return new Date().getTime() + y;
        }
        function v(t) {
            return new Promise(function(e) {
                setTimeout(e, t);
            });
        }
        function m(t) {
            return b.apply(this, arguments);
        }
        function b() {
            return (b = l()(
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
        function x(t, e) {
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
        function w(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? x(Object(r), !0).forEach(function(e) {
                          i()(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : x(Object(r)).forEach(function(e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      });
            }
            return t;
        }
        function O(t) {
            return S.apply(this, arguments);
        }
        function S() {
            return (S = l()(
                o.a.mark(function t(e) {
                    var r, n, a, i, c, u, s, l, f, p, h, d, y, g, b, x;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), v(1200);
                                case 2:
                                    return (t.next = 4), m('/user/'.concat(e, '/'));
                                case 4:
                                    if (
                                        ((r = t.sent),
                                        (n = 0),
                                        (a = r.querySelector('div[class^=profile]')
                                            ? 'div[class^=profile]'
                                            : '#gameBody'),
                                        (i = r.querySelector(''.concat(a, ' > .c_da'))),
                                        (c = r.querySelector(''.concat(a, ' > .c_99'))),
                                        (u = r.querySelector(''.concat(a, ' > .pt2.small > .fl'))),
                                        (s =
                                            r.querySelector(''.concat(a, ' > .c_orange.mt10.cntr.small')) ||
                                            r.querySelector('.ml5.mr3.pt2 > .c_da')),
                                        (l = r.querySelector(''.concat(a, ' > .small.c_99.mt10.ml8.lh16 > .c_da'))),
                                        (f = r.querySelector('.brd.fl.mr8.ml5.mb5 img')) && i && c && u && s && l)
                                    ) {
                                        t.next = 18;
                                        break;
                                    }
                                    return (
                                        console.error('getManDataById: can not get nodes, id:', e, f, i, c, u, s, l),
                                        t.abrupt('return', null)
                                    );
                                case 18:
                                    if (
                                        ((p = i.textContent.trim()),
                                        (h = f.getAttribute('src') || ''),
                                        (d = parseInt(c.textContent.replace(/\D/g, ''), 10)),
                                        (y = u.textContent.trim()),
                                        (g = parseInt(s.textContent.replace(/\D/g, ''), 10)),
                                        (b = parseInt(l.textContent.replace(/\D/g, ''), 10)),
                                        (x = {
                                            id: e,
                                            name: p,
                                            level: d,
                                            rank: y,
                                            deckValue: g,
                                            daysInGame: b,
                                            avatarSrc: h,
                                            warData: null,
                                            daysInGuild: n,
                                        }),
                                        p && d && y && g && b && h)
                                    ) {
                                        t.next = 29;
                                        break;
                                    }
                                    return (
                                        console.error('getManDataById: can not got data, id:', e),
                                        console.log(x),
                                        t.abrupt('return', null)
                                    );
                                case 29:
                                    return t.abrupt('return', x);
                                case 30:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function j(t) {
            var e = u()(t.querySelectorAll('.small.c_99.mt10')),
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
        function L(t) {
            return k.apply(this, arguments);
        }
        function k() {
            return (k = l()(
                o.a.mark(function t(e) {
                    var r, n, a, i, c, u, s, l, p, h, y;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), v(1200);
                                case 2:
                                    return (t.next = 4), m('/gwprofile/'.concat(e, '/'));
                                case 4:
                                    if (
                                        ((r = t.sent),
                                        (n = r.querySelector('.c_orange.mt10.cntr.small')),
                                        (a = r.querySelector('img[src="/img/ico16-battle-sum.png"]')),
                                        (i = a ? a.parentElement : null),
                                        (c = j(r)),
                                        n && i)
                                    ) {
                                        t.next = 12;
                                        break;
                                    }
                                    return (
                                        console.error('getManWarDataById: can not get nodes, id:', e, n, i, c),
                                        t.abrupt('return', null)
                                    );
                                case 12:
                                    if (
                                        ((u = parseInt(n.textContent.replace(/\D/g, ''), 10)),
                                        (s = parseInt(i.textContent.replace(/\D/g, ''), 10)),
                                        (l = 0),
                                        (p = 0),
                                        c.forEach(function(t) {
                                            var e = t.textContent
                                                    .trim()
                                                    .split(/\D+/gi)
                                                    .map(function(t) {
                                                        return parseInt(t.trim(), 10);
                                                    }),
                                                r = d()(e, 2),
                                                n = r[0],
                                                o = r[1];
                                            (l += n), (p += o);
                                        }),
                                        (h = r.innerHTML.indexOf('<span class="stat">6000</span>') > 0),
                                        (y = {
                                            deckValue: u,
                                            damageValue: s,
                                            fightCount: l,
                                            keyCount: p,
                                            hasGoblinCard: h,
                                        }),
                                        !f(u) && !f(s))
                                    ) {
                                        t.next = 23;
                                        break;
                                    }
                                    return (
                                        console.error('getManWarDataById: can not got data, id:', e),
                                        console.log(y),
                                        t.abrupt('return', null)
                                    );
                                case 23:
                                    return t.abrupt('return', y);
                                case 24:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function E(t) {
            return _.apply(this, arguments);
        }
        function _() {
            return (_ = l()(
                o.a.mark(function t(e) {
                    var r, n, a, i, c;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    (r = []), (n = 0), (a = [1, 2, 3, 4, 5]);
                                case 3:
                                    if (!(n < a.length)) {
                                        t.next = 15;
                                        break;
                                    }
                                    return (i = a[n]), (t.next = 7), v(1e3);
                                case 7:
                                    return (
                                        (t.t0 = r),
                                        (t.next = 10),
                                        m('/guild'.concat(e ? '/' + e : '', '/members/page_').concat(i))
                                    );
                                case 10:
                                    (t.t1 = t.sent), t.t0.push.call(t.t0, t.t1);
                                case 12:
                                    n++, (t.next = 3);
                                    break;
                                case 15:
                                    return (
                                        (c = []),
                                        r.forEach(function(t) {
                                            t.querySelectorAll('.bl.tdn.small.c_dblue.ptb5').forEach(function(t) {
                                                var r = t.getAttribute('href') || '',
                                                    n = parseInt(r.replace(/\D/g, ''), 10),
                                                    o = t.querySelector('.fr.c_cc .c_99');
                                                o ||
                                                    e ||
                                                    console.error('getManShortDataList: can not get daysInGuildNode');
                                                var a = o ? o.textContent.replace(/\D/gi, '') : '',
                                                    i = parseInt(a, 10);
                                                f(i) &&
                                                    !e &&
                                                    console.error(
                                                        'getManShortDataList: daysInGuild should be a number',
                                                    ),
                                                    c.find(function(t) {
                                                        return t.id === n;
                                                    }) || c.push({id: n, daysInGuild: i || 0});
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
        function P(t, e) {
            return D.apply(this, arguments);
        }
        function D() {
            return (D = l()(
                o.a.mark(function t(e, r) {
                    var n, a, i, c, u, s, l, f, p, h, d, y, g;
                    return o.a.wrap(
                        function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (t.next = 2), E(r);
                                    case 2:
                                        (n = t.sent),
                                            (a = n.length),
                                            console.log('manShortDataList', n),
                                            (i = []),
                                            (c = !0),
                                            (u = !1),
                                            (s = void 0),
                                            (t.prev = 9),
                                            (l = n[Symbol.iterator]());
                                    case 11:
                                        if ((c = (f = l.next()).done)) {
                                            t.next = 30;
                                            break;
                                        }
                                        return (p = f.value), (h = p.id), (d = p.daysInGuild), (t.next = 16), O(h);
                                    case 16:
                                        if (((y = t.sent), 'war' !== e)) {
                                            t.next = 23;
                                            break;
                                        }
                                        return (t.next = 20), L(h);
                                    case 20:
                                        (t.t0 = t.sent), (t.next = 24);
                                        break;
                                    case 23:
                                        t.t0 = null;
                                    case 24:
                                        (g = t.t0),
                                            y
                                                ? i.push(w({}, y, {warData: g, daysInGuild: d}))
                                                : console.error('getManList: can not get man with manShortData:', p),
                                            console.log(
                                                'getManList progress:',
                                                ((i.length / a) * 100).toFixed(2) + '%',
                                            );
                                    case 27:
                                        (c = !0), (t.next = 11);
                                        break;
                                    case 30:
                                        t.next = 36;
                                        break;
                                    case 32:
                                        (t.prev = 32), (t.t1 = t.catch(9)), (u = !0), (s = t.t1);
                                    case 36:
                                        (t.prev = 36), (t.prev = 37), c || null == l.return || l.return();
                                    case 39:
                                        if (((t.prev = 39), !u)) {
                                            t.next = 42;
                                            break;
                                        }
                                        throw s;
                                    case 42:
                                        return t.finish(39);
                                    case 43:
                                        return t.finish(36);
                                    case 44:
                                        return t.abrupt('return', i);
                                    case 45:
                                    case 'end':
                                        return t.stop();
                                }
                        },
                        t,
                        null,
                        [
                            [9, 32, 36, 44],
                            [37, , 39, 43],
                        ],
                    );
                }),
            )).apply(this, arguments);
        }
        function I(t) {
            return A.apply(this, arguments);
        }
        function A() {
            return (A = l()(
                o.a.mark(function t(e) {
                    var r, n, a, i;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (r = 0), (n = 0), (a = {value: 0, level: 0}), (t.next = 5), P('usual', e);
                                case 5:
                                    return (
                                        (i = t.sent),
                                        t.abrupt('return', {
                                            timeStamp: g(),
                                            guildLevel: r,
                                            altarLevel: n,
                                            guildCard: a,
                                            manList: i,
                                        })
                                    );
                                case 7:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        function N(t, e) {
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
        function q(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? N(Object(r), !0).forEach(function(e) {
                          i()(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : N(Object(r)).forEach(function(e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      });
            }
            return t;
        }
        l()(
            o.a.mark(function t() {
                var e, r, n, a, i, c, s, l, f, h;
                return o.a.wrap(
                    function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), m('/ratings/guild/combat/');
                                case 2:
                                    (e = t.sent),
                                        (r = u()(e.querySelectorAll('table.ulist tr'))),
                                        console.log(r),
                                        r.shift(),
                                        console.log(r),
                                        (n = r.map(function(t) {
                                            var e = t.querySelector('.user a[href^="/guild/"]'),
                                                r = t.querySelector('img[src^="/img/gs/"]');
                                            if (!e || !r)
                                                return (
                                                    console.error('can not get linkNode or logoNode'),
                                                    {guildId: 'N/A', name: 'N/A', logoSrc: 'N/A'}
                                                );
                                            var n = e.getAttribute('href');
                                            return 'string' != typeof n
                                                ? (console.error('can not detect href of', e),
                                                  {guildId: 'N/A', name: 'N/A', logoSrc: 'N/A'})
                                                : {
                                                      logoSrc: r.getAttribute('src') || 'N/A',
                                                      guildId: n.replace(/\D/g, ''),
                                                      name: e.textContent,
                                                  };
                                        })),
                                        (a = {timeStamp: g(), guildList: []}),
                                        (i = !0),
                                        (c = !1),
                                        (s = void 0),
                                        (t.prev = 12),
                                        (l = n[Symbol.iterator]());
                                case 14:
                                    if ((i = (f = l.next()).done)) {
                                        t.next = 29;
                                        break;
                                    }
                                    return (
                                        (h = f.value),
                                        (t.t0 = a.guildList),
                                        (t.t1 = q),
                                        (t.t2 = {}),
                                        (t.t3 = h),
                                        (t.next = 22),
                                        I(h.guildId)
                                    );
                                case 22:
                                    (t.t4 = t.sent),
                                        (t.t5 = {report: t.t4}),
                                        (t.t6 = (0, t.t1)(t.t2, t.t3, t.t5)),
                                        t.t0.push.call(t.t0, t.t6);
                                case 26:
                                    (i = !0), (t.next = 14);
                                    break;
                                case 29:
                                    t.next = 35;
                                    break;
                                case 31:
                                    (t.prev = 31), (t.t7 = t.catch(12)), (c = !0), (s = t.t7);
                                case 35:
                                    (t.prev = 35), (t.prev = 36), i || null == l.return || l.return();
                                case 38:
                                    if (((t.prev = 38), !c)) {
                                        t.next = 41;
                                        break;
                                    }
                                    throw s;
                                case 41:
                                    return t.finish(38);
                                case 42:
                                    return t.finish(35);
                                case 43:
                                    return (
                                        console.log(a),
                                        (t.next = 46),
                                        p(
                                            'report-top-10-guild-' +
                                                ((o = a.timeStamp),
                                                new Date(o - y)
                                                    .toISOString()
                                                    .replace(/:/g, '-')
                                                    .replace(/\.\d{3}Z$/, '')
                                                    .replace('T', '-')),
                                            a,
                                        )
                                    );
                                case 46:
                                case 'end':
                                    return t.stop();
                            }
                        var o;
                    },
                    t,
                    null,
                    [
                        [12, 31, 35, 43],
                        [36, , 38, 42],
                    ],
                );
            }),
        )();
    },
]);
