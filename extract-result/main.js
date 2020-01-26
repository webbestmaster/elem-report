!(function(t) {
    var r = {};
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = {i: n, l: !1, exports: {}});
        return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    (e.m = t),
        (e.c = r),
        (e.d = function(t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {enumerable: !0, get: n});
        }),
        (e.r = function(t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
        }),
        (e.t = function(t, r) {
            if ((1 & r && (t = e(t)), 8 & r)) return t;
            if (4 & r && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (e.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: t}), 2 & r && 'string' != typeof t)
            )
                for (var o in t)
                    e.d(
                        n,
                        o,
                        function(r) {
                            return t[r];
                        }.bind(null, o),
                    );
            return n;
        }),
        (e.n = function(t) {
            var r =
                t && t.__esModule
                    ? function() {
                          return t.default;
                      }
                    : function() {
                          return t;
                      };
            return e.d(r, 'a', r), r;
        }),
        (e.o = function(t, r) {
            return Object.prototype.hasOwnProperty.call(t, r);
        }),
        (e.p = '/static/'),
        e((e.s = 2));
})([
    function(t, r, e) {
        t.exports = e(3);
    },
    function(t, r) {
        function e(t, r, e, n, o, i, a) {
            try {
                var u = t[i](a),
                    c = u.value;
            } catch (t) {
                return void e(t);
            }
            u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        t.exports = function(t) {
            return function() {
                var r = this,
                    n = arguments;
                return new Promise(function(o, i) {
                    var a = t.apply(r, n);
                    function u(t) {
                        e(a, o, i, u, c, 'next', t);
                    }
                    function c(t) {
                        e(a, o, i, u, c, 'throw', t);
                    }
                    u(void 0);
                });
            };
        };
    },
    function(t, r, e) {
        t.exports = e(4);
    },
    function(t, r, e) {
        var n = (function(t) {
            'use strict';
            var r = Object.prototype,
                e = r.hasOwnProperty,
                n = 'function' == typeof Symbol ? Symbol : {},
                o = n.iterator || '@@iterator',
                i = n.asyncIterator || '@@asyncIterator',
                a = n.toStringTag || '@@toStringTag';
            function u(t, r, e, n) {
                var o = r && r.prototype instanceof f ? r : f,
                    i = Object.create(o.prototype),
                    a = new L(n || []);
                return (
                    (i._invoke = (function(t, r, e) {
                        var n = 'suspendedStart';
                        return function(o, i) {
                            if ('executing' === n) throw new Error('Generator is already running');
                            if ('completed' === n) {
                                if ('throw' === o) throw i;
                                return _();
                            }
                            for (e.method = o, e.arg = i; ; ) {
                                var a = e.delegate;
                                if (a) {
                                    var u = w(a, e);
                                    if (u) {
                                        if (u === s) continue;
                                        return u;
                                    }
                                }
                                if ('next' === e.method) e.sent = e._sent = e.arg;
                                else if ('throw' === e.method) {
                                    if ('suspendedStart' === n) throw ((n = 'completed'), e.arg);
                                    e.dispatchException(e.arg);
                                } else 'return' === e.method && e.abrupt('return', e.arg);
                                n = 'executing';
                                var f = c(t, r, e);
                                if ('normal' === f.type) {
                                    if (((n = e.done ? 'completed' : 'suspendedYield'), f.arg === s)) continue;
                                    return {value: f.arg, done: e.done};
                                }
                                'throw' === f.type && ((n = 'completed'), (e.method = 'throw'), (e.arg = f.arg));
                            }
                        };
                    })(t, e, a)),
                    i
                );
            }
            function c(t, r, e) {
                try {
                    return {type: 'normal', arg: t.call(r, e)};
                } catch (t) {
                    return {type: 'throw', arg: t};
                }
            }
            t.wrap = u;
            var s = {};
            function f() {}
            function l() {}
            function h() {}
            var p = {};
            p[o] = function() {
                return this;
            };
            var v = Object.getPrototypeOf,
                d = v && v(v(E([])));
            d && d !== r && e.call(d, o) && (p = d);
            var y = (h.prototype = f.prototype = Object.create(p));
            function g(t) {
                ['next', 'throw', 'return'].forEach(function(r) {
                    t[r] = function(t) {
                        return this._invoke(r, t);
                    };
                });
            }
            function m(t) {
                var r;
                this._invoke = function(n, o) {
                    function i() {
                        return new Promise(function(r, i) {
                            !(function r(n, o, i, a) {
                                var u = c(t[n], t, o);
                                if ('throw' !== u.type) {
                                    var s = u.arg,
                                        f = s.value;
                                    return f && 'object' == typeof f && e.call(f, '__await')
                                        ? Promise.resolve(f.__await).then(
                                              function(t) {
                                                  r('next', t, i, a);
                                              },
                                              function(t) {
                                                  r('throw', t, i, a);
                                              },
                                          )
                                        : Promise.resolve(f).then(
                                              function(t) {
                                                  (s.value = t), i(s);
                                              },
                                              function(t) {
                                                  return r('throw', t, i, a);
                                              },
                                          );
                                }
                                a(u.arg);
                            })(n, o, r, i);
                        });
                    }
                    return (r = r ? r.then(i, i) : i());
                };
            }
            function w(t, r) {
                var e = t.iterator[r.method];
                if (void 0 === e) {
                    if (((r.delegate = null), 'throw' === r.method)) {
                        if (
                            t.iterator.return &&
                            ((r.method = 'return'), (r.arg = void 0), w(t, r), 'throw' === r.method)
                        )
                            return s;
                        (r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return s;
                }
                var n = c(e, t.iterator, r.arg);
                if ('throw' === n.type) return (r.method = 'throw'), (r.arg = n.arg), (r.delegate = null), s;
                var o = n.arg;
                return o
                    ? o.done
                        ? ((r[t.resultName] = o.value),
                          (r.next = t.nextLoc),
                          'return' !== r.method && ((r.method = 'next'), (r.arg = void 0)),
                          (r.delegate = null),
                          s)
                        : o
                    : ((r.method = 'throw'),
                      (r.arg = new TypeError('iterator result is not an object')),
                      (r.delegate = null),
                      s);
            }
            function x(t) {
                var r = {tryLoc: t[0]};
                1 in t && (r.catchLoc = t[1]),
                    2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                    this.tryEntries.push(r);
            }
            function b(t) {
                var r = t.completion || {};
                (r.type = 'normal'), delete r.arg, (t.completion = r);
            }
            function L(t) {
                (this.tryEntries = [{tryLoc: 'root'}]), t.forEach(x, this), this.reset(!0);
            }
            function E(t) {
                if (t) {
                    var r = t[o];
                    if (r) return r.call(t);
                    if ('function' == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            i = function r() {
                                for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                                return (r.value = void 0), (r.done = !0), r;
                            };
                        return (i.next = i);
                    }
                }
                return {next: _};
            }
            function _() {
                return {value: void 0, done: !0};
            }
            return (
                (l.prototype = y.constructor = h),
                (h.constructor = l),
                (h[a] = l.displayName = 'GeneratorFunction'),
                (t.isGeneratorFunction = function(t) {
                    var r = 'function' == typeof t && t.constructor;
                    return !!r && (r === l || 'GeneratorFunction' === (r.displayName || r.name));
                }),
                (t.mark = function(t) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, h)
                            : ((t.__proto__ = h), a in t || (t[a] = 'GeneratorFunction')),
                        (t.prototype = Object.create(y)),
                        t
                    );
                }),
                (t.awrap = function(t) {
                    return {__await: t};
                }),
                g(m.prototype),
                (m.prototype[i] = function() {
                    return this;
                }),
                (t.AsyncIterator = m),
                (t.async = function(r, e, n, o) {
                    var i = new m(u(r, e, n, o));
                    return t.isGeneratorFunction(e)
                        ? i
                        : i.next().then(function(t) {
                              return t.done ? t.value : i.next();
                          });
                }),
                g(y),
                (y[a] = 'Generator'),
                (y[o] = function() {
                    return this;
                }),
                (y.toString = function() {
                    return '[object Generator]';
                }),
                (t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return (
                        r.reverse(),
                        function e() {
                            for (; r.length; ) {
                                var n = r.pop();
                                if (n in t) return (e.value = n), (e.done = !1), e;
                            }
                            return (e.done = !0), e;
                        }
                    );
                }),
                (t.values = E),
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
                            for (var r in this)
                                't' === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ('throw' === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;
                        function n(e, n) {
                            return (
                                (a.type = 'throw'),
                                (a.arg = t),
                                (r.next = e),
                                n && ((r.method = 'next'), (r.arg = void 0)),
                                !!n
                            );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ('root' === i.tryLoc) return n('end');
                            if (i.tryLoc <= this.prev) {
                                var u = e.call(i, 'catchLoc'),
                                    c = e.call(i, 'finallyLoc');
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error('try statement without catch or finally');
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return (
                            (a.type = t),
                            (a.arg = r),
                            i ? ((this.method = 'next'), (this.next = i.finallyLoc), s) : this.complete(a)
                        );
                    },
                    complete: function(t, r) {
                        if ('throw' === t.type) throw t.arg;
                        return (
                            'break' === t.type || 'continue' === t.type
                                ? (this.next = t.arg)
                                : 'return' === t.type
                                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === t.type && r && (this.next = r),
                            s
                        );
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), b(e), s;
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ('throw' === n.type) {
                                    var o = n.arg;
                                    b(e);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function(t, r, e) {
                        return (
                            (this.delegate = {iterator: E(t), resultName: r, nextLoc: e}),
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
    function(t, r, e) {
        'use strict';
        e.r(r);
        var n = e(0),
            o = e.n(n),
            i = e(1),
            a = e.n(i);
        function u(t) {
            return c.apply(this, arguments);
        }
        function c() {
            return (c = a()(
                o.a.mark(function t(r) {
                    var e, n, i;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), fetch(r);
                                case 2:
                                    return (e = t.sent), (t.next = 5), e.text();
                                case 5:
                                    return (
                                        (n = t.sent),
                                        ((i = document.createElement('html')).innerHTML = n),
                                        t.abrupt('return', i)
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
            return f.apply(this, arguments);
        }
        function f() {
            return (f = a()(
                o.a.mark(function t() {
                    var r, e, n;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), u('/ratings/guild/war/');
                                case 2:
                                    if (((r = t.sent), (e = r.querySelector('.num.c_orange')))) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        console.error('getGuildLevel: can not get levelNode'), t.abrupt('return', -1)
                                    );
                                case 7:
                                    if ((n = parseInt(e.innerHTML, 10))) {
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
        function l() {
            return 60 * new Date().getTimezoneOffset() * 1e3;
        }
        var h = l();
        function p() {
            return new Date().getTime() + h;
        }
        function v() {
            return d.apply(this, arguments);
        }
        function d() {
            return (d = a()(
                o.a.mark(function t() {
                    var r;
                    return o.a.wrap(function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), s();
                                case 2:
                                    return (r = t.sent), t.abrupt('return', {guildLevel: r, time: p()});
                                case 4:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                }),
            )).apply(this, arguments);
        }
        a()(
            o.a.mark(function t() {
                var r;
                return o.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), v();
                            case 2:
                                (r = t.sent), console.log('reportData'), console.log(r);
                            case 5:
                            case 'end':
                                return t.stop();
                        }
                }, t);
            }),
        )();
    },
]);
