var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = []
                            , s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    }
                    , r = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    }
                    , n = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                    }
                    , a = 1e-10
                    , o = i._internals
                    , l = o.isSelector
                    , h = o.isArray
                    , _ = n.prototype = i.to({}, .1, {})
                    , u = [];
                n.version = "1.19.1", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, _.updateTo = function(t, e) {
                    var s, r = this.ratio
                        , n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || n)
                        for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                    return this
                }, _.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, n, l, h, _, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration
                        , p = this._time
                        , d = this._totalTime
                        , m = this._cycle
                        , g = this._duration
                        , v = this._rawPrevTime;
                    if (t >= c - 1e-7 && t >= 0 ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= d && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), 1 === _ ? this.ratio = 1 - h : 2 === _ ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void(d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = d, this._rawPrevTime = v, this._cycle = m, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
                }, n.to = function(t, e, i) {
                    return new n(t, e, i)
                }, n.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
                }, n.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
                }, n.staggerTo = n.allTo = function(t, e, a, o, _, f, c) {
                    o = o || 0;
                    var p, d, m, g, v = 0
                        , y = []
                        , T = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(c || a.callbackScope || this, f || u)
                        }
                        , x = a.cycle
                        , b = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        d = {};
                        for (g in a) d[g] = a[g];
                        if (x && (r(d, t, m), null != d.duration && (e = d.duration, delete d.duration)), b) {
                            b = d.startAt = {};
                            for (g in a.startAt) b[g] = a.startAt[g];
                            r(d.startAt, t, m)
                        }
                        d.delay = v + (d.delay || 0), m === p && _ && (d.onComplete = T), y[m] = new n(t[m], e, d), v += o
                    }
                    return y
                }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
                }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
                }, n.delayedCall = function(t, e, i, s, r) {
                    return new n(e, 0, {
                        delay: t
                        , onComplete: e
                        , onCompleteParams: i
                        , callbackScope: s
                        , onReverseComplete: e
                        , onReverseCompleteParams: i
                        , immediateRender: !1
                        , useFrames: r
                        , overwrite: 0
                    })
                }, n.set = function(t, e) {
                    return new n(t, 0, e)
                }, n.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(f(n, e)), r = s.length), n = n._next;
                        return s
                    }
                    , c = n.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                n.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, l = c(0 != r)
                        , h = l.length
                        , _ = i && s && r;
                    for (o = 0; h > o; o++) a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, a, _, u, f, c = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (_ in c)
                                for (a = c[_].target.parentNode; a;) a === t && (r = r.concat(c[_].tweens)), a = a.parentNode;
                            for (f = r.length, u = 0; f > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = c(r), l = i && s && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return n.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, n.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, n.globalTimeScale = function(e) {
                    var s = t._rootTimeline
                        , r = i.ticker.time;
                    return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, _.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    }
                    , r = 1e-10
                    , n = i._internals
                    , a = s._internals = {}
                    , o = n.isSelector
                    , l = n.isArray
                    , h = n.lazyTweens
                    , _ = n.lazyRender
                    , u = _gsScope._gsDefine.globals
                    , f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    }
                    , c = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    }
                    , p = a.pauseCallback = function() {}
                    , d = function(t) {
                        var e, i = []
                            , s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    }
                    , m = s.prototype = new e;
                return s.version = "1.19.1", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, s, r) {
                    var n = s.repeat && u.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, m.from = function(t, e, s, r) {
                    return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
                }, m.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, m.staggerTo = function(t, e, r, n, a, l, h, _) {
                    var u, p, m = new s({
                            onComplete: l
                            , onCompleteParams: h
                            , callbackScope: _
                            , smoothChildTiming: this.smoothChildTiming
                        })
                        , g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), n = n || 0, 0 > n && (t = d(t), t.reverse(), n *= -1), p = 0; p < t.length; p++) u = f(r), u.startAt && (u.startAt = f(u.startAt), u.startAt.cycle && c(u.startAt, t, p)), g && (c(u, t, p), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[p], e, u, p * n);
                    return this.add(m, a)
                }, m.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, m.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
                }, m.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, m.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t)
                        , o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, m.add = function(r, n, a, o) {
                    var h, _, u, f, c, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(f = r[u]) && (f = new s({
                                tweens: f
                            })), this.add(f, h), "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, m.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, s, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, l, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration
                        , p = this._time
                        , d = this._startTime
                        , m = this._timeScale
                        , g = this._paused;
                    if (t >= c - 1e-7 && t >= 0) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= p)
                            for (s = this._first; s && (a = s._next, f === this._time && (!this._paused || g));)(s._active || s._startTime <= f && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, f === this._time && (!this._paused || g));) {
                                if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                                    if (u === s) {
                                        for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = a
                            }
                        this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, m.getTweensOf = function(t, e) {
                    var s, r, n = this._gc
                        , a = []
                        , o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0)
                        , i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, s) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    }
                    , r = 1e-10
                    , n = e._internals
                    , a = n.lazyTweens
                    , o = n.lazyRender
                    , l = _gsScope._gsDefine.globals
                    , h = new i(null, null, 1, 0)
                    , _ = s.prototype = new t;
                return _.constructor = s, _.kill()._gc = !1, s.version = "1.19.1", _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, _.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, _.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, _.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, _.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                            ease: h
                            , useFrames: this.usesFrames()
                            , immediateRender: !1
                        }
                        , o = i.repeat && l.TweenMax || e;
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new o(this, s, a), a.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || n, i.onStartParams || [])
                    }, n
                }, _.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek
                        , onCompleteParams: [t]
                        , callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, l, h, _, u, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration
                        , d = this._duration
                        , m = this._time
                        , g = this._totalTime
                        , v = this._startTime
                        , y = this._timeScale
                        , T = this._rawPrevTime
                        , x = this._paused
                        , b = this._cycle;
                    if (t >= p - 1e-7 && t >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === r) && T !== t && this._first && (_ = !0, T > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && T !== r && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : T >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (_ = !0)
                        }
                    else if (0 === d && 0 > T && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && d > t) {
                        if ((t = this._time) >= m || this._repeat && b !== this._cycle)
                            for (s = this._first; s && s._startTime <= t && !f;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !f;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s), s = s._prev;
                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 != (1 & b)
                            , P = w === (this._yoyo && 0 != (1 & this._cycle))
                            , O = this._totalTime
                            , S = this._cycle
                            , k = this._rawPrevTime
                            , R = this._time;
                        if (this._totalTime = b * d, this._cycle < b ? w = !w : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? T - 1e-4 : T, this._cycle = b, this._locked = !0, m = w ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), m !== this._time) return;
                        if (P && (this._cycle = b, this._locked = !0, m = w ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = R, this._totalTime = O, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || _ || f)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (c = this._time) >= m)
                        for (s = this._first; s && (l = s._next, c === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, c === this._time && (!this._paused || x));) {
                            if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                                if (f === s) {
                                    for (f = s._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, _.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = []
                        , a = this.getChildren(t, e, i)
                        , o = 0
                        , l = a.length;
                    for (s = 0; l > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray()
                        , s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, _.getLabelsArray = function() {
                    var t, e = []
                        , i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t]
                        , name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, _.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, _.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, _.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0)
            , function() {
                var t = 180 / Math.PI
                    , e = []
                    , i = []
                    , s = []
                    , r = {}
                    , n = _gsScope._gsDefine.globals
                    , a = function(t, e, i, s) {
                        i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    }
                    , o = function(t, e, i, s) {
                        var r = {
                                a: t
                            }
                            , n = {}
                            , a = {}
                            , o = {
                                c: s
                            }
                            , l = (t + e) / 2
                            , h = (e + i) / 2
                            , _ = (i + s) / 2
                            , u = (l + h) / 2
                            , f = (h + _) / 2
                            , c = (f - u) / 8;
                        return r.b = l + (t - l) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + f) / 2, a.b = f - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    }
                    , l = function(t, r, n, a, l) {
                        var h, _, u, f, c, p, d, m, g, v, y, T, x, b = t.length - 1
                            , w = 0
                            , P = t[0].a;
                        for (h = 0; b > h; h++) c = t[w], _ = c.a, u = c.d, f = t[w + 1].d, l ? (y = e[h], T = i[h], x = (T + y) * r * .25 / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), d = u + (f - u) * (a ? .5 * r : 0 !== T ? x / T : 0), m = u - (p + ((d - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - (u - _) * r * .5, d = u + (f - u) * r * .5, m = u - (p + d) / 2), p += m, d += m, c.c = g = p, c.b = 0 !== h ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = o(_, P, g, u), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++, P = d;
                        c = t[w], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = o(c.a, P, c.c, c.d), t.splice(w, 1, v[0], v[1], v[2], v[3]))
                    }
                    , h = function(t, s, r, n) {
                        var o, l, h, _, u, f, c = [];
                        if (n)
                            for (t = [n].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][s]) && "=" === f.charAt(1) && (t[l][s] = n[s] + Number(f.charAt(0) + f.substr(2)));
                        if (0 > (o = t.length - 2)) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
                        for (l = 0; o > l; l++) h = t[l][s], _ = t[l + 1][s], c[l] = new a(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
                        return c[l] = new a(t[l][s], 0, 0, t[l + 1][s]), c
                    }
                    , _ = function(t, n, a, o, _, u) {
                        var f, c, p, d, m, g, v, y, T = {}
                            , x = []
                            , b = u || t[0];
                        _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == n && (n = 1);
                        for (c in t[0]) x.push(c);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], v = !0, f = x.length; --f > -1;)
                                if (c = x[f], Math.abs(b[c] - y[c]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = x.length; --f > -1;) c = x[f], r[c] = -1 !== _.indexOf("," + c + ","), T[c] = h(t, c, r[c], u);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!o) {
                            for (f = x.length; --f > -1;)
                                if (r[c])
                                    for (p = T[x[f]], g = p.length - 1, d = 0; g > d; d++) m = p[d + 1].da / i[d] + p[d].da / e[d] || 0, s[d] = (s[d] || 0) + m * m;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = x.length, d = a ? 4 : 1; --f > -1;) c = x[f], p = T[c], l(p, n, a, o, r[c]), v && (p.splice(0, d), p.splice(p.length - d, d));
                        return T
                    }
                    , u = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, l, h, _, u, f, c, p, d = {}
                            , m = "cubic" === e ? 3 : 2
                            , g = "soft" === e
                            , v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (f in t[0]) v.push(f);
                        for (h = v.length; --h > -1;) {
                            for (f = v[h], d[f] = l = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][f] : "string" == typeof(p = t[_][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[c++] = (s + l[c - 2]) / 2), l[c++] = s;
                            for (u = c - m + 1, c = 0, _ = 0; u > _; _ += m) s = l[_], r = l[_ + 1], n = l[_ + 2], o = 2 === m ? 0 : l[_ + 3], l[c++] = p = 3 === m ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            l.length = c
                        }
                        return d
                    }
                    , f = function(t, e, i) {
                        for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, d = t.length; --d > -1;)
                            for (f = t[d], n = f.a, a = f.d - n, o = f.c - n, l = f.b - n
                                , s = r = 0, _ = 1; i >= _; _++) h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), c = d * i + _ - 1, e[c] = (e[c] || 0) + s * s
                    }
                    , c = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = []
                            , o = []
                            , l = 0
                            , h = 0
                            , _ = e - 1
                            , u = []
                            , c = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]), n = s % e, c[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
                        return {
                            length: h
                            , lengths: o
                            , segments: u
                        }
                    }
                    , p = _gsScope._gsDefine.plugin({
                        propName: "bezier"
                        , priority: -1
                        , version: "1.3.7"
                        , API: 2
                        , global: !0
                        , init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, l = e.values || []
                                , h = {}
                                , f = l[0]
                                , p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (s in f) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                                var d = c(this._beziers, this._timeRes);
                                this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), n = p.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = p[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                                    s = p[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        }
                        , set: function(e) {
                            var i, s, r, n, a, o, l, h, _, u, f = this._segCount
                                , c = this._func
                                , p = this._target
                                , d = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (h = f - 1; h > r && (this._l2 = _[++r]) <= e;);
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                    for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;);
                                    this._s1 = u[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e - i * (1 / f)) * f;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l;
                            if (this._autoRotate) {
                                var m, g, v, y, T, x, b, w = this._autoRotate;
                                for (r = w.length; --r > -1;) n = w[r][2], x = w[r][3] || 0, b = w[r][4] === !0 ? 1 : t, a = this._beziers[w[r][0]], m = this._beziers[w[r][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, T = m.b + (m.c - m.b) * o, v += (T - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, l = d ? Math.atan2(T - v, y - g) * b + x : this._initialRotations[r], this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l)
                            }
                        }
                    })
                    , d = p.prototype;
                p.bezierThrough = _, p.cubicToQuadratic = o, p._autoCSS = !0, p.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, p._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals
                            , i = e._parseToProxy
                            , s = e._setPluginRatio
                            , r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new p;
                                var h, _, u, f = e.values
                                    , c = f.length - 1
                                    , d = []
                                    , m = {};
                                if (0 > c) return o;
                                for (h = 0; c >= h; h++) u = i(t, f[h], a, o, l, c !== h), d[h] = u.end;
                                for (_ in e) m[_] = e[_];
                                return m.values = d, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x && [
                                    ["x", "y", "rotation", h, !1]
                                ]), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, a._tween), o
                            }
                        })
                    }
                }, d._mod = function(t) {
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    if (s = this._autoRotate)
                        for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    }
                    , o = _gsScope._gsDefine.globals
                    , l = {}
                    , h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.19.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h
                    , right: h
                    , bottom: h
                    , left: h
                    , width: h
                    , height: h
                    , fontSize: h
                    , padding: h
                    , margin: h
                    , perspective: h
                    , lineHeight: ""
                };
                var _, u, f, c, p, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g
                    , y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g
                    , T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi
                    , x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g
                    , b = /(?:\d|\-|\+|=|#|\.)*/g
                    , w = /opacity *= *([^)]*)/i
                    , P = /opacity:([^;]*)/i
                    , O = /^(rgb|hsl)/
                    , S = /([A-Z])/g
                    , k = /-([a-z])/gi
                    , R = function(t, e) {
                        return e.toUpperCase()
                    }
                    , A = /(?:Left|Right|Width)/i
                    , C = /,(?=[^\)]*(?:\(|$))/gi
                    , M = /[\s,\(]/i
                    , D = Math.PI / 180
                    , F = 180 / Math.PI
                    , z = {}
                    , I = {
                        style: {}
                    }
                    , X = _gsScope.document || {
                        createElement: function() {
                            return I
                        }
                    }
                    , N = function(t, e) {
                        return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                    }
                    , L = N("div")
                    , E = N("img")
                    , B = a._internals = {
                        _specialProps: l
                    }
                    , Y = (_gsScope.navigator || {}).userAgent || ""
                    , j = function() {
                        var t = Y.indexOf("Android")
                            , e = N("a");
                        return f = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || parseFloat(Y.substr(t + 8, 2)) > 3), p = f && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (d = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }()
                    , V = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    }
                    , U = function(t) {
                        _gsScope.console && console.log(t)
                    }
                    , q = ""
                    , W = ""
                    , G = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (W = 3 === s ? "ms" : i[s], q = "-" + W.toLowerCase() + "-", W + t) : null
                    }
                    , Z = X.defaultView ? X.defaultView.getComputedStyle : function() {}
                    , $ = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : V(t)
                    }
                    , Q = B.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, l, h, _ = A.test(i)
                            , u = t
                            , f = L.style
                            , c = 0 > s
                            , p = 1 === s;
                        if (c && (s = -s), p && (s *= 100), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || X.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                                f[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = o / s * 100), 0 !== o || n || (o = Q(t, i, s, r, !0))
                        }
                        return p && (o /= 100), c ? -o : o
                    }
                    , H = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== $(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top"
                            , r = $(t, "margin" + s, i);
                        return t["offset" + s] - (Q(t, e, parseFloat(r), r.replace(b, "")) || 0)
                    }
                    , K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Ot === r) && (n[r.replace(k, R)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Pt === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(k, R)] = e[i]);
                        return j || (n.opacity = V(t)), s = Et(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, kt && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    }
                    , J = function(t, e, i, s, r) {
                        var n, a, o, l = {}
                            , h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new pt(h, a, h[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (l[a] = s[a]);
                        return {
                            difs: l
                            , firstMPT: o
                        }
                    }
                    , tt = {
                        width: ["Left", "Right"]
                        , height: ["Top", "Bottom"]
                    }
                    , et = ["marginLeft", "marginRight", "marginTop", "marginBottom"]
                    , it = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
                        if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                            , r = tt[e]
                            , n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat($(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat($(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    }
                    , st = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, s = t.split(" ")
                            , r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0]
                            , n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                        if (s.length > 3 && !e) {
                            for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(st(s[i]));
                            return t.join(",")
                        }
                        return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t), e || t
                    }
                    , rt = function(t, e) {
                        return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    }
                    , nt = function(t, e) {
                        return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    }
                    , at = function(t, e, i, s) {
                        var r, n, a, o, l;
                        return "function" == typeof t && (t = t(g, m)), null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
                    }
                    , ot = {
                        aqua: [0, 255, 255]
                        , lime: [0, 255, 0]
                        , silver: [192, 192, 192]
                        , black: [0, 0, 0]
                        , maroon: [128, 0, 0]
                        , teal: [0, 128, 128]
                        , blue: [0, 0, 255]
                        , navy: [0, 0, 128]
                        , white: [255, 255, 255]
                        , fuchsia: [255, 0, 255]
                        , olive: [128, 128, 0]
                        , yellow: [255, 255, 0]
                        , orange: [255, 165, 0]
                        , gray: [128, 128, 128]
                        , purple: [128, 0, 128]
                        , green: [0, 128, 0]
                        , red: [255, 0, 0]
                        , pink: [255, 192, 203]
                        , cyan: [0, 255, 255]
                        , transparent: [255, 255, 255, 0]
                    }
                    , lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    }
                    , ht = a.parseColor = function(t, e) {
                        var i, s, r, n, a, o, l, h, _, u, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t]) i = ot[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(v), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(a + 1 / 3, s, r), i[1] = lt(a, s, r), i[2] = lt(a - 1 / 3, s, r);
                                else i = t.match(v) || ot.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ot.black;
                        return e && !f && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    }
                    , _t = function(t, e) {
                        var i, s, r, n = t.match(ut) || []
                            , a = 0
                            , o = n.length ? "" : t;
                        for (i = 0; i < n.length; i++) s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = ht(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return o + t.substr(a)
                    }
                    , ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ot) ut += "|" + h + "\\b";
                ut = new RegExp(ut + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e)), ut.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var ft = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(ut) || [""])[0] : ""
                            , a = t.split(n).join("").match(T) || []
                            , o = t.substr(0, t.indexOf(a[0]))
                            , l = ")" === t.charAt(t.length - 1) ? ")" : ""
                            , h = -1 !== t.indexOf(" ") ? " " : ","
                            , _ = a.length
                            , u = _ > 0 ? a[0].replace(v, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, f, c, p;
                            if ("number" == typeof t) t += u;
                            else if (s && C.test(t)) {
                                for (p = t.replace(C, "|").split("|"), c = 0; c < p.length; c++) p[c] = r(p[c]);
                                return p.join(",")
                            }
                            if (e = (t.match(ut) || [n])[0], f = t.split(e).join("").match(T) || [], c = f.length, _ > c--)
                                for (; ++c < _;) f[c] = i ? f[(c - 1) / 2 | 0] : a[c];
                            return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, f;
                            if ("number" == typeof t) t += u;
                            else if (s && C.test(t)) {
                                for (n = t.replace(C, "|").split("|"), f = 0; f < n.length; f++) n[f] = r(n[f]);
                                return n.join(",")
                            }
                            if (e = t.match(T) || [], f = e.length, _ > f--)
                                for (; ++f < _;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    }
                    , ct = function(t) {
                        return t = t.split(",")
                            , function(e, i, s, r, n, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    }
                    , pt = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t)
                            for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i[n] = r
                                    }
                                } else i[n] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    })
                    , dt = (B._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, l, h, _, u = s
                            , f = {}
                            , c = {}
                            , p = i._transform
                            , d = z;
                        for (i._transform = null, z = e, s = _ = i.parse(t, e, s, r), z = d, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (s.type <= 1 && (o = s.p, c[o] = s.s + s.c, f[o] = s.s, n || (h = new pt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, c[o] = s.data[l], f[o] = s[l], n || (h = new pt(s, l, o, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: f
                            , end: c
                            , firstMPT: h
                            , pt: _
                        }
                    }, B.CSSPropTween = function(t, e, s, r, a, o, l, h, _, u, f) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof dt || n.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === f ? s + r : f, a && (this._next = a, a._prev = this)
                    })
                    , mt = function(t, e, i, s, r, n) {
                        var a = new dt(t, e, i, s - i, r, -1, n);
                        return a.b = i, a.e = a.xs0 = s, a
                    }
                    , gt = a.parseComplex = function(t, e, i, s, r, n, o, l, h, u) {
                        i = i || n || "", "function" == typeof s && (s = s(g, m)), o = new dt(t, e, 0, 0, o, u ? 2 : 1, null, !1, l, i, s), s += "", r && ut.test(s + i) && (s = [i, s], a.colorStringFilter(s), i = s[0], s = s[1]);
                        var f, c, p, d, T, x, b, w, P, O, S, k, R, A = i.split(", ").join(",").split(" ")
                            , M = s.split(", ").join(",").split(" ")
                            , D = A.length
                            , F = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(C, ", ").split(" "), M = M.join(" ").replace(C, ", ").split(" "), D = A.length), D !== M.length && (A = (n || "").split(" "), D = A.length), o.plugin = h, o.setRatio = u, ut.lastIndex = 0, f = 0; D > f; f++)
                            if (d = A[f], T = M[f], (w = parseFloat(d)) || 0 === w) o.appendXtra("", w, rt(T, w), T.replace(y, ""), F && -1 !== T.indexOf("px"), !0);
                            else if (r && ut.test(d)) k = T.indexOf(")") + 1, k = ")" + (k ? T.substr(k) : ""), R = -1 !== T.indexOf("hsl") && j, d = ht(d, R), T = ht(T, R), P = d.length + T.length > 6, P && !j && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(M[f]).join("transparent")) : (j || (P = !1), R ? o.appendXtra(P ? "hsla(" : "hsl(", d[0], rt(T[0], d[0]), ",", !1, !0).appendXtra("", d[1], rt(T[1], d[1]), "%,", !1).appendXtra("", d[2], rt(T[2], d[2]), P ? "%," : "%" + k, !1) : o.appendXtra(P ? "rgba(" : "rgb(", d[0], T[0] - d[0], ",", !0, !0).appendXtra("", d[1], T[1] - d[1], ",", !0).appendXtra("", d[2], T[2] - d[2], P ? "," : k, !0), P && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (T.length < 4 ? 1 : T[3]) - d, k, !1))), ut.lastIndex = 0;
                        else if (x = d.match(v)) {
                            if (!(b = T.match(y)) || b.length !== x.length) return o;
                            for (p = 0, c = 0; c < x.length; c++) S = x[c], O = d.indexOf(S, p), o.appendXtra(d.substr(p, O - p), Number(S), rt(b[c], S), "", F && "px" === d.substr(O + S.length, 2), 0 === c), p = O + S.length;
                            o["xs" + o.l] += d.substr(p)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
                        if (-1 !== s.indexOf("=") && o.data) {
                            for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++) k += o["xs" + f] + o.data["xn" + f];
                            o.e = k + o["xs" + f]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    }
                    , vt = 9;
                for (h = dt.prototype, h.l = h.pr = 0; --vt > 0;) h["xn" + vt] = 0, h["xs" + vt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this
                        , o = a.l;
                    return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new dt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? G(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    }
                    , Tt = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r = t.split(",")
                            , n = e.defaultValue;
                        for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new yt(r[s], e)
                    }
                    , xt = B._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Tt(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (U("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = yt.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, f = this.keyword;
                    if (this.multi && (C.test(i) || C.test(e) ? (o = e.replace(C, "|").split("|"), l = i.replace(C, "|").split("|")) : f && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (_ = e.indexOf(f), u = i.indexOf(f), _ !== u && (-1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a, o) {
                    return this.parseComplex(t.style, this.format($(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    Tt(t, {
                        parser: function(t, s, r, n, a, o, l) {
                            var h = new dt(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        }
                        , priority: i
                    })
                }, a.useSVGTransformAttr = !0;
                var bt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",")
                    , Pt = G("transform")
                    , Ot = q + "transform"
                    , St = G("transformOrigin")
                    , kt = null !== G("perspective")
                    , Rt = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !kt) && (a.defaultForce3D || "auto")
                    }
                    , At = _gsScope.SVGElement
                    , Ct = function(t, e, i) {
                        var s, r = X.createElementNS("http://www.w3.org/2000/svg", t);
                        for (s in i) r.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    }
                    , Mt = X.documentElement || {}
                    , Dt = function() {
                        var t, e, i, s = d || /Android/i.test(Y) && !_gsScope.chrome;
                        return X.createElementNS && !s && (t = Ct("svg", Mt), e = Ct("rect", t, {
                            width: 100
                            , height: 50
                            , x: 100
                        }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Pt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && kt), Mt.removeChild(t)), s
                    }()
                    , Ft = function(t, e, i, s, r, n) {
                        var o, l, h, _, u, f, c, p, d, m, g, v, y, T, x = t._gsTransform
                            , b = Lt(t, !0);
                        x && (y = x.xOrigin, T = x.yOrigin), (!s || (o = s.split(" ")).length < 2) && (c = t.getBBox(), 0 === c.x && 0 === c.y && c.width + c.height === 0 && (c = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0
                            , y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0
                            , width: 0
                            , height: 0
                        }), e = st(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = _ = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), s && b !== Nt && (f = b[0], c = b[1], p = b[2], d = b[3], m = b[4], g = b[5], (v = f * d - c * p) && (l = _ * (d / v) + u * (-p / v) + (p * g - d * m) / v, h = _ * (-c / v) + u * (f / v) - (f * g - c * m) / v, _ = i.xOrigin = o[0] = l, u = i.yOrigin = o[1] = h)), x && (n && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (l = _ - y, h = u - T, x.xOffset += l * b[0] + h * b[2] - l, x.yOffset += l * b[1] + h * b[3] - h) : x.xOffset = x.yOffset = 0), n || t.setAttribute("data-svg-origin", o.join(" "))
                    }
                    , zt = function(t) {
                        var e, i = N("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg")
                            , s = this.parentNode
                            , r = this.nextSibling
                            , n = this.style.cssText;
                        if (Mt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? s.insertBefore(this, r) : s.appendChild(this), Mt.removeChild(i), this.style.cssText = n, e
                    }
                    , It = function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return zt.call(t, !0)
                        }
                    }
                    , Xt = function(t) {
                        return !(!(At && t.getCTM && It(t)) || t.parentNode && !t.ownerSVGElement)
                    }
                    , Nt = [1, 0, 0, 1, 0, 0]
                    , Lt = function(t, e) {
                        var i, s, r, n, a, o, l = t._gsTransform || new Rt
                            , h = t.style;
                        if (Pt ? s = $(t, Ot, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, i && Pt && ((o = "none" === Z(t).display) || !t.parentNode) && (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, Mt.appendChild(t)), s = $(t, Ot, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? h.display = n : o && Vt(h, "display"), a && Mt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (h[Pt] + "").indexOf("matrix") && (s = h[Pt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Nt;
                        for (r = (s || "").match(v) || [], vt = r.length; --vt > -1;) n = Number(r[vt]), r[vt] = (a = n - (n |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + n : n;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    }
                    , Et = B.getTransform = function(t, i, s, r) {
                        if (t._gsTransform && s && !r) return t._gsTransform;
                        var n, o, l, h, _, u, f = s ? t._gsTransform || new Rt : new Rt
                            , c = f.scaleX < 0
                            , p = 1e5
                            , d = kt ? parseFloat($(t, St, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0
                            , m = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getCTM || !Xt(t)), f.svg && (Ft(t, $(t, St, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), bt = a.useSVGTransformAttr || Dt), (n = Lt(t)) !== Nt) {
                            if (16 === n.length) {
                                var g, v, y, T, x, b = n[0]
                                    , w = n[1]
                                    , P = n[2]
                                    , O = n[3]
                                    , S = n[4]
                                    , k = n[5]
                                    , R = n[6]
                                    , A = n[7]
                                    , C = n[8]
                                    , M = n[9]
                                    , D = n[10]
                                    , z = n[12]
                                    , I = n[13]
                                    , X = n[14]
                                    , N = n[11]
                                    , L = Math.atan2(R, D);
                                f.zOrigin && (X = -f.zOrigin, z = C * X - n[12], I = M * X - n[13], X = D * X + f.zOrigin - n[14]), f.rotationX = L * F, L && (T = Math.cos(-L), x = Math.sin(-L), g = S * T + C * x, v = k * T + M * x, y = R * T + D * x, C = S * -x + C * T, M = k * -x + M * T, D = R * -x + D * T, N = A * -x + N * T, S = g, k = v, R = y), L = Math.atan2(-P, D), f.rotationY = L * F, L && (T = Math.cos(-L), x = Math.sin(-L), g = b * T - C * x, v = w * T - M * x, y = P * T - D * x, M = w * x + M * T, D = P * x + D * T, N = O * x + N * T, b = g, w = v, P = y), L = Math.atan2(w, b), f.rotation = L * F, L && (T = Math.cos(-L), x = Math.sin(-L), b = b * T + S * x, v = w * T + k * x, k = w * -x + k * T, R = P * -x + R * T, w = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(b * b + w * w) * p + .5 | 0) / p, f.scaleY = (Math.sqrt(k * k + M * M) * p + .5 | 0) / p, f.scaleZ = (Math.sqrt(R * R + D * D) * p + .5 | 0) / p, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = S || k ? Math.atan2(S, k) * F + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = N ? 1 / (0 > N ? -N : N) : 0, f.x = z, f.y = I, f.z = X, f.svg && (f.x -= f.xOrigin - (f.xOrigin * b - f.yOrigin * S), f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * k))
                            } else if (!kt || r || !n.length || f.x !== n[4] || f.y !== n[5] || !f.rotationX && !f.rotationY) {
                                var E = n.length >= 6
                                    , B = E ? n[0] : 1
                                    , Y = n[1] || 0
                                    , j = n[2] || 0
                                    , V = E ? n[3] : 1;
                                f.x = n[4] || 0, f.y = n[5] || 0, l = Math.sqrt(B * B + Y * Y), h = Math.sqrt(V * V + j * j), _ = B || Y ? Math.atan2(Y, B) * F : f.rotation || 0, u = j || V ? Math.atan2(j, V) * F + _ : f.skewX || 0, Math.abs(u) > 90 && Math.abs(u) < 270 && (c ? (l *= -1, u += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (h *= -1, u += 0 >= u ? 180 : -180)), f.scaleX = l, f.scaleY = h, f.rotation = _, f.skewX = u, kt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = m, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * B + f.yOrigin * j), f.y -= f.yOrigin - (f.xOrigin * Y + f.yOrigin * V))
                            }
                            f.zOrigin = d;
                            for (o in f) f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (bt && t.style[Pt] ? e.delayedCall(.001, function() {
                            Vt(t.style, Pt)
                        }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    }
                    , Bt = function(t) {
                        var e, i, s = this.data
                            , r = -s.rotation * D
                            , n = r + s.skewX * D
                            , a = 1e5
                            , o = (Math.cos(r) * s.scaleX * a | 0) / a
                            , l = (Math.sin(r) * s.scaleX * a | 0) / a
                            , h = (Math.sin(n) * -s.scaleY * a | 0) / a
                            , _ = (Math.cos(n) * s.scaleY * a | 0) / a
                            , u = this.t.style
                            , f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -h, h = -i, e = f.filter, u.filter = "";
                            var c, p, m = this.t.offsetWidth
                                , g = this.t.offsetHeight
                                , v = "absolute" !== f.position
                                , y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _
                                , T = s.x + m * s.xPercent / 100
                                , x = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (c = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2, p = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, T += c - (c * o + p * l), x += p - (c * h + p * _)), v ? (c = m / 2, p = g / 2, y += ", Dx=" + (c - (c * o + p * l) + T) + ", Dy=" + (p - (c * h + p * _) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, O, S, k = 8 > d ? 1 : -1;
                                for (c = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * m)) / 2 + x), vt = 0; 4 > vt; vt++) O = et[vt], P = f[O], i = -1 !== P.indexOf("px") ? parseFloat(P) : Q(this.t, O, parseFloat(P), P.replace(b, "")) || 0, S = i !== s[O] ? 2 > vt ? -s.ieOffsetX : -s.ieOffsetY : 2 > vt ? c - s.ieOffsetX : p - s.ieOffsetY, u[O] = (s[O] = Math.round(i - S * (0 === vt || 2 === vt ? 1 : k))) + "px"
                            }
                        }
                    }
                    , Yt = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, l, h, _, u, f, p, d, m, g, v, y, T, x, b, w, P, O = this.data
                            , S = this.t.style
                            , k = O.rotation
                            , R = O.rotationX
                            , A = O.rotationY
                            , C = O.scaleX
                            , M = O.scaleY
                            , F = O.scaleZ
                            , z = O.x
                            , I = O.y
                            , X = O.z
                            , N = O.svg
                            , L = O.perspective
                            , E = O.force3D
                            , B = O.skewY
                            , Y = O.skewX;
                        if (B && (Y += B, k += B), ((1 === t || 0 === t) && "auto" === E && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !E) && !X && !L && !A && !R && 1 === F || bt && N || !kt) return void(k || Y || N ? (k *= D, w = Y * D, P = 1e5, i = Math.cos(k) * C, n = Math.sin(k) * C, s = Math.sin(k - w) * -M, a = Math.cos(k - w) * M, w && "simple" === O.skewType && (e = Math.tan(w - B * D), e = Math.sqrt(1 + e * e), s *= e, a *= e, B && (e = Math.tan(B * D), e = Math.sqrt(1 + e * e), i *= e, n *= e)), N && (z += O.xOrigin - (O.xOrigin * i + O.yOrigin * s) + O.xOffset, I += O.yOrigin - (O.xOrigin * n + O.yOrigin * a) + O.yOffset, bt && (O.xPercent || O.yPercent) && (m = this.t.getBBox(), z += .01 * O.xPercent * m.width, I += .01 * O.yPercent * m.height), m = 1e-6, m > z && z > -m && (z = 0), m > I && I > -m && (I = 0)), T = (i * P | 0) / P + "," + (n * P | 0) / P + "," + (s * P | 0) / P + "," + (a * P | 0) / P + "," + z + "," + I + ")", N && bt ? this.t.setAttribute("transform", "matrix(" + T) : S[Pt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + T) : S[Pt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + M + "," + z + "," + I + ")");
                        if (c && (m = 1e-4, m > C && C > -m && (C = F = 2e-5), m > M && M > -m && (M = F = 2e-5), !L || O.z || O.rotationX || O.rotationY || (L = 0)), k || Y) k *= D, g = i = Math.cos(k), v = n = Math.sin(k), Y && (k -= Y * D, g = Math.cos(k), v = Math.sin(k), "simple" === O.skewType && (e = Math.tan((Y - B) * D), e = Math.sqrt(1 + e * e), g *= e, v *= e, O.skewY && (e = Math.tan(B * D), e = Math.sqrt(1 + e * e), i *= e, n *= e))), s = -v, a = g;
                        else {
                            if (!(A || R || 1 !== F || L || N)) return void(S[Pt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + I + "px," + X + "px)" + (1 !== C || 1 !== M ? " scale(" + C + "," + M + ")" : ""));
                            i = a = 1, s = n = 0
                        }
                        _ = 1, r = o = l = h = u = f = 0, p = L ? -1 / L : 0, d = O.zOrigin, m = 1e-6, x = ",", b = "0", k = A * D, k && (g = Math.cos(k), v = Math.sin(k), l = -v, u = p * -v, r = i * v, o = n * v, _ = g, p *= g, i *= g, n *= g), k = R * D, k && (g = Math.cos(k), v = Math.sin(k), e = s * g + r * v, y = a * g + o * v, h = _ * v, f = p * v, r = s * -v + r * g, o = a * -v + o * g, _ *= g, p *= g, s = e, a = y), 1 !== F && (r *= F, o *= F, _ *= F, p *= F), 1 !== M && (s *= M, a *= M, h *= M, f *= M), 1 !== C && (i *= C, n *= C, l *= C, u *= C), (d || N) && (d && (z += r * -d, I += o * -d, X += _ * -d + d), N && (z += O.xOrigin - (O.xOrigin * i + O.yOrigin * s) + O.xOffset, I += O.yOrigin - (O.xOrigin * n + O.yOrigin * a) + O.yOffset), m > z && z > -m && (z = b), m > I && I > -m && (I = b), m > X && X > -m && (X = 0)), T = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > i && i > -m ? b : i) + x + (m > n && n > -m ? b : n) + x + (m > l && l > -m ? b : l), T += x + (m > u && u > -m ? b : u) + x + (m > s && s > -m ? b : s) + x + (m > a && a > -m ? b : a), R || A || 1 !== F ? (T += x + (m > h && h > -m ? b : h) + x + (m > f && f > -m ? b : f) + x + (m > r && r > -m ? b : r), T += x + (m > o && o > -m ? b : o) + x + (m > _ && _ > -m ? b : _) + x + (m > p && p > -m ? b : p) + x) : T += ",0,0,0,0,1,0,", T += z + x + I + x + X + x + (L ? 1 + -X / L : 1) + ")", S[Pt] = T
                    };
                h = Rt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, l) {
                        if (s._lastParsedTransform === l) return n;
                        s._lastParsedTransform = l;
                        var h, _ = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), _ && (l.scale = _(g, t));
                        var u, f, c, p, d, v, y, T, x, b = t._gsTransform
                            , w = t.style
                            , P = wt.length
                            , O = l
                            , S = {}
                            , k = "transformOrigin"
                            , R = Et(t, r, !0, O.parseTransform)
                            , A = O.transform && ("function" == typeof O.transform ? O.transform(g, m) : O.transform);
                        if (s._transform = R, A && "string" == typeof A && Pt) f = L.style, f[Pt] = A, f.display = "block", f.position = "absolute", X.body.appendChild(L), u = Et(L, null, !1), R.svg && (v = R.xOrigin, y = R.yOrigin, u.x -= R.xOffset, u.y -= R.yOffset, (O.transformOrigin || O.svgOrigin) && (A = {}, Ft(t, st(O.transformOrigin), A, O.svgOrigin, O.smoothOrigin, !0), v = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset - R.xOffset, u.y -= A.yOffset - R.yOffset), (v || y) && (T = Lt(L, !0), u.x -= v - (v * T[0] + y * T[2]), u.y -= y - (v * T[1] + y * T[3]))), X.body.removeChild(L), u.perspective || (u.perspective = R.perspective), null != O.xPercent && (u.xPercent = nt(O.xPercent, R.xPercent)), null != O.yPercent && (u.yPercent = nt(O.yPercent, R.yPercent));
                        else if ("object" == typeof O) {
                            if (u = {
                                    scaleX: nt(null != O.scaleX ? O.scaleX : O.scale, R.scaleX)
                                    , scaleY: nt(null != O.scaleY ? O.scaleY : O.scale, R.scaleY)
                                    , scaleZ: nt(O.scaleZ, R.scaleZ)
                                    , x: nt(O.x, R.x)
                                    , y: nt(O.y, R.y)
                                    , z: nt(O.z, R.z)
                                    , xPercent: nt(O.xPercent, R.xPercent)
                                    , yPercent: nt(O.yPercent, R.yPercent)
                                    , perspective: nt(O.transformPerspective, R.perspective)
                                }
                                , null != (d = O.directionalRotation))
                                if ("object" == typeof d)
                                    for (f in d) O[f] = d[f];
                                else O.rotation = d;
                            "string" == typeof O.x && -1 !== O.x.indexOf("%") && (u.x = 0, u.xPercent = nt(O.x, R.xPercent)), "string" == typeof O.y && -1 !== O.y.indexOf("%") && (u.y = 0, u.yPercent = nt(O.y, R.yPercent)), u.rotation = at("rotation" in O ? O.rotation : "shortRotation" in O ? O.shortRotation + "_short" : "rotationZ" in O ? O.rotationZ : R.rotation, R.rotation, "rotation", S), kt && (u.rotationX = at("rotationX" in O ? O.rotationX : "shortRotationX" in O ? O.shortRotationX + "_short" : R.rotationX || 0, R.rotationX, "rotationX", S), u.rotationY = at("rotationY" in O ? O.rotationY : "shortRotationY" in O ? O.shortRotationY + "_short" : R.rotationY || 0, R.rotationY, "rotationY", S)), u.skewX = at(O.skewX, R.skewX), u.skewY = at(O.skewY, R.skewY)
                        }
                        for (kt && null != O.force3D && (R.force3D = O.force3D, p = !0), R.skewType = O.skewType || R.skewType || a.defaultSkewType, (c = R.force3D || R.z || R.rotationX || R.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == O.scale || (u.scaleZ = 1); --P > -1;) x = wt[P], ((A = u[x] - R[x]) > 1e-6 || -1e-6 > A || null != O[x] || null != z[x]) && (p = !0, n = new dt(R, x, R[x], A, n), x in S && (n.e = S[x]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return A = O.transformOrigin, R.svg && (A || O.svgOrigin) && (v = R.xOffset, y = R.yOffset, Ft(t, st(A), u, O.svgOrigin, O.smoothOrigin), n = mt(R, "xOrigin", (b ? R : u).xOrigin, u.xOrigin, n, k), n = mt(R, "yOrigin", (b ? R : u).yOrigin, u.yOrigin, n, k), (v !== R.xOffset || y !== R.yOffset) && (n = mt(R, "xOffset", b ? v : R.xOffset, R.xOffset, n, k), n = mt(R, "yOffset", b ? y : R.yOffset, R.yOffset, n, k)), A = "0px 0px"), (A || kt && c && R.zOrigin) && (Pt ? (p = !0, x = St, A = (A || $(t, x, r, !1, "50% 50%")) + "", n = new dt(w, x, 0, 0, n, -1, k), n.b = w[x], n.plugin = o, kt ? (f = R.zOrigin, A = A.split(" "), R.zOrigin = (A.length > 2 && (0 === f || "0px" !== A[2]) ? parseFloat(A[2]) : f) || 0, n.xs0 = n.e = A[0] + " " + (A[1] || "50%") + " 0px", n = new dt(R, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = R.zOrigin) : n.xs0 = n.e = A) : st(A + "", R)), p && (s._transformType = R.svg && bt || !c && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), _ && (l.scale = _), n
                    }
                    , prefix: !0
                }), Tt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999"
                    , prefix: !0
                    , color: !0
                    , multi: !0
                    , keyword: "inset"
                }), Tt("borderRadius", {
                    defaultValue: "0px"
                    , parser: function(t, e, i, n, a, o) {
                        e = this.format(e);
                        var l, h, _, u, f, c, p, d, m, g, v, y, T, x, b, w, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]
                            , O = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = G(P[h])), f = u = $(t, P[h], r, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), c = _ = l[h], p = parseFloat(f), y = f.substr((p + "").length), T = "=" === c.charAt(1), T ? (d = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), d *= parseFloat(c), v = c.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(c), v = c.substr((d + "").length)), "" === v && (v = s[i] || y), v !== y && (x = Q(t, "borderLeft", p, y), b = Q(t, "borderTop", p, y), "%" === v ? (f = x / m * 100 + "%", u = b / g * 100 + "%") : "em" === v ? (w = Q(t, "borderLeft", 1, "em"), f = x / w + "em", u = b / w + "em") : (f = x + "px", u = b + "px"), T && (c = parseFloat(f) + d + v, _ = parseFloat(u) + d + v)), a = gt(O, P[h], f + " " + u, c + " " + _, !1, "0px", a);
                        return a
                    }
                    , prefix: !0
                    , formatter: ft("0px 0px 0px 0px", !1, !0)
                }), Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px"
                    , parser: function(t, e, i, s, n, a) {
                        return gt(t.style, i, this.format($(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", n)
                    }
                    , prefix: !0
                    , formatter: ft("0px 0px", !1, !0)
                }), Tt("backgroundPosition", {
                    defaultValue: "0 0"
                    , parser: function(t, e, i, s, n, a) {
                        var o, l, h, _, u, f, c = "background-position"
                            , p = r || Z(t, null)
                            , m = this.format((p ? d ? p.getPropertyValue(c + "-x") + " " + p.getPropertyValue(c + "-y") : p.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0")
                            , g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = $(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== f) {
                            for (o = m.split(" "), l = g.split(" "), E.setAttribute("src", f), h = 2; --h > -1;) m = o[h], (_ = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - E.width : t.offsetHeight - E.height, o[h] = _ ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, n, a)
                    }
                    , formatter: st
                }), Tt("backgroundSize", {
                    defaultValue: "0 0"
                    , formatter: function(t) {
                        return t += "", st(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), Tt("perspective", {
                    defaultValue: "0px"
                    , prefix: !0
                }), Tt("perspectiveOrigin", {
                    defaultValue: "50% 50%"
                    , prefix: !0
                }), Tt("transformStyle", {
                    prefix: !0
                }), Tt("backfaceVisibility", {
                    prefix: !0
                }), Tt("userSelect", {
                    prefix: !0
                }), Tt("margin", {
                    parser: ct("marginTop,marginRight,marginBottom,marginLeft")
                }), Tt("padding", {
                    parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Tt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)"
                    , parser: function(t, e, i, s, n, a) {
                        var o, l, h;
                        return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format($(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), Tt("textShadow", {
                    defaultValue: "0px 0px 0px #999"
                    , color: !0
                    , multi: !0
                }), Tt("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), Tt("border", {
                    defaultValue: "0px solid #000"
                    , parser: function(t, e, i, s, n, a) {
                        var o = $(t, "borderTopWidth", r, !1, "0px")
                            , l = this.format(e).split(" ")
                            , h = l[0].replace(b, "");
                        return "px" !== h && (o = parseFloat(o) / Q(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + $(t, "borderTopStyle", r, !1, "solid") + " " + $(t, "borderTopColor", r, !1, "#000")), l.join(" "), n, a)
                    }
                    , color: !0
                    , formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                    }
                }), Tt("borderWidth", {
                    parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Tt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r, n) {
                        var a = t.style
                            , o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new dt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
                    }
                });
                var jt = function(t) {
                    var e, i = this.t
                        , s = i.filter || $(this.data, "filter") || ""
                        , r = this.s + this.c * t | 0;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !$(this.data, "filter")) : (i.filter = s.replace(/alpha\(opacity *=.+?\)/i, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r))
                };
                Tt("opacity,alpha,autoAlpha", {
                    defaultValue: "1"
                    , parser: function(t, e, i, s, n, a) {
                        var o = parseFloat($(t, "opacity", r, !1, "1"))
                            , l = t.style
                            , h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === $(t, "visibility", r) && 0 !== e && (o = 0), j ? n = new dt(l, "opacity", o, e - o, n) : (n = new dt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = jt), h && (n = new dt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Vt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                    }
                    , Ut = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Vt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Tt("className", {
                    parser: function(t, e, s, n, a, o, l) {
                        var h, _, u, f, c, p = t.getAttribute("class") || ""
                            , d = t.style.cssText;
                        if (a = n._classNamePT = new dt(t, s, 0, 0, a, 2), a.setRatio = Ut, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                            for (f = {}, c = u.data; c;) f[c.p] = 1, c = c._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, _, K(t), l, f), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)
                    }
                });
                var qt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style
                            , o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? St : l[i].p), Vt(a, i);
                        r && (Vt(a, Pt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Tt("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new dt(t, s, 0, 0, n, 2), n.setRatio = qt, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), vt = h.length; vt--;) xt(h[vt]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o, h) {
                    if (!t.nodeType) return !1;
                    this._target = m = t, this._tween = o, this._vars = e, g = h, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var c, d, v, y, T, x, b, w, O, S = t.style;
                    if (u && "" === S.zIndex && ("auto" === (c = $(t, "zIndex", r)) || "" === c) && this._addLazySet(S, "zIndex", 0), "string" == typeof e && (y = S.cssText, c = K(t, r), S.cssText = y + ";" + e, c = J(t, c, K(t)).difs, !j && P.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, S.cssText = y), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                        for (O = 3 === this._transformType, Pt ? f && (u = !0, "" === S.zIndex && ("auto" === (b = $(t, "zIndex", r)) || "" === b) && this._addLazySet(S, "zIndex", 0), p && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : S.zoom = 1, v = d; v && v._next;) v = v._next;
                        w = new dt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, v), w.setRatio = Pt ? Yt : Bt, w.data = this._transform || Et(t, r, !0), w.tween = o, w.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (x = d._next, v = y; v && v.pr > d.pr;) v = v._next;
                            (d._prev = v ? v._prev : T) ? d._prev._next = d: y = d, (d._next = v) ? v._prev = d : T = d, d = x
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, o, h, u, f, c, p, d, v, y, T = t.style;
                    for (a in e) c = e[a], "function" == typeof c && (c = c(g, m)), o = l[a], o ? i = o.parse(t, c, a, this, i, n, e) : (f = $(t, a, r) + "", v = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && O.test(c) ? (v || (c = ht(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = gt(T, a, f, c, !0, "transparent", i, 0, n)) : v && M.test(c) ? i = gt(T, a, f, c, !0, null, i, 0, n) : (h = parseFloat(f), p = h || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (h = it(t, a, r), p = "px") : "left" === a || "top" === a ? (h = H(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), y = v && "=" === c.charAt(1), y ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), d = c.replace(b, "")) : (u = parseFloat(c), d = v ? c.replace(b, "") : ""), "" === d && (d = a in s ? s[a] : p), c = u || 0 === u ? (y ? u + h : u) + d : e[a], p !== d && "" !== d && (u || 0 === u) && h && (h = Q(t, a, h, p), "%" === d ? (h /= Q(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= Q(t, a, 1, d) : "px" !== d && (u = Q(t, a, u, d), d = "px"), y && (u || 0 === u) && (c = u + h + d)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (i = new dt(T, a, u || h || 0, 0, i, -1, a, !1, 0, f, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f) : U("invalid " + a + " tween value: " + e[a]) : (i = new dt(T, a, h, u - h, i, 0, a, _ !== !1 && ("px" === d || "zIndex" === a), 0, f, c), i.xs0 = d))), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Et(this._target, r, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Wt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Wt, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, n)
                };
                var Gt = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Gt(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Gt(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, l = e.to(t, i, s)
                        , h = [l]
                        , _ = []
                        , u = []
                        , f = []
                        , c = e._internals.reservedProps;
                    for (t = l._targets || l.target, Gt(t, _, f), l.render(i, !0, !0), Gt(t, u), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (n = J(f[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) c[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            h.push(e.fromTo(f[r], i, o, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0)
            , function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps"
                        , version: "1.6.0"
                        , priority: -1
                        , API: 2
                        , init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    })
                    , e = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    }
                    , i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[n[a]] = Math.round;
                    for (a = n.length; --a > -1;)
                        for (t = n[a], i = r._firstPT; i;) s = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
                    return !1
                }, i._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e)
                }
            }()
            , function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr"
                    , API: 2
                    , version: "0.6.0"
                    , init: function(t, e, i, s) {
                        var r, n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (r in e) n = e[r], "function" == typeof n && (n = n(s, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation"
                , version: "0.3.0"
                , API: 2
                , init: function(t, e, i, s) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, n, a, o, l, h, _ = e.useRadians === !0 ? 2 * Math.PI : 360;
                    for (r in e) "useRadians" !== r && (o = e[r], "function" == typeof o && (o = o(s, t)), h = (o + "").split("_"), n = h[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, l = o - a, h.length && (n = h.join("_"), -1 !== n.indexOf("short") && (l %= _) !== l % (_ / 2) && (l = 0 > l ? l + _ : l - _), -1 !== n.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
                    return !0
                }
                , set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope
                    , n = r.com.greensock
                    , a = 2 * Math.PI
                    , o = Math.PI / 2
                    , l = n._class
                    , h = function(e, i) {
                        var s = l("easing." + e, function() {}, !0)
                            , r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    }
                    , _ = t.register || function() {}
                    , u = function(t, e, i, s, r) {
                        var n = l("easing." + t, {
                            easeOut: new e
                            , easeIn: new i
                            , easeInOut: new s
                        }, !0);
                        return _(n, t), n
                    }
                    , f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    }
                    , c = function(e, i) {
                        var s = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0)
                            , r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    }
                    , p = u("Back", c("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), c("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), c("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    }))
                    , d = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0)
                    , m = d.prototype = new t;
                return m.constructor = d, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, d.ease = new d(.7, .7), m.config = d.config = function(t, e, i) {
                    return new d(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), c = u, p = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = p ? Math.random() : 1 / u * c, s = m ? m.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = n * n * .5 * g) : (n = 2 * (1 - i), r = n * n * .5 * g), p ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, d && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                        x: i
                        , y: s
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new f(1, 1, null), c = u; --c > -1;) a = h[c], o = new f(a.x, a.y, o);
                    this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0)
                        , n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return 1 - Math.cos(t * o)
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()()
    , function(t, e) {
        "use strict";
        var i = {}
            , s = t.document
            , r = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!r.TweenLite) {
            var n, a, o, l, h, _ = function(t) {
                    var e, i = t.split(".")
                        , s = r;
                    for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                }
                , u = _("com.greensock")
                , f = 1e-10
                , c = function(t) {
                    var e, i = []
                        , s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                }
                , p = function() {}
                , d = function() {
                    var t = Object.prototype.toString
                        , e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }()
                , m = {}
                , g = function(s, n, a, o) {
                    this.sc = m[s] ? m[s].sc : [], m[s] = this, this.gsClass = null, this.func = a;
                    var l = [];
                    this.check = function(h) {
                        for (var u, f, c, p, d, v = n.length, y = v; --v > -1;)(u = m[n[v]] || new g(n[v], [])).gsClass ? (l[v] = u.gsClass, y--) : h && u.sc.push(this);
                        if (0 === y && a) {
                            if (f = ("com.greensock." + s).split("."), c = f.pop(), p = _(f.join("."))[c] = this.gsClass = a.apply(a, l), o)
                                if (r[c] = i[c] = p, !(d = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return p
                                });
                                else if (d)
                                if (s === e) {
                                    module.exports = i[e] = p;
                                    for (v in i) p[v] = i[v]
                                } else i[e] && (i[e][c] = p);
                            for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                        }
                    }, this.check(!0)
                }
                , v = t._gsDefine = function(t, e, i, s) {
                    return new g(t, e, i, s)
                }
                , y = u._class = function(t, e, i) {
                    return e = e || function() {}, v(t, [], function() {
                        return e
                    }, i), e
                };
            v.globals = r;
            var T = [0, 0, 1, 1]
                , x = y("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? T.concat(e) : T
                }, !0)
                , b = x.map = {}
                , w = x.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (n = l[h], r = s ? y("easing." + n, null, !0) : u.easing[n] || {}, a = _.length; --a > -1;) o = _[a], b[n + "." + o] = b[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type
                        , i = this._power
                        , s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = n.length; --a > -1;) o = n[a] + ",Power" + a, w(new x(null, null, 1, a), o, "easeOut", !0), w(new x(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), w(new x(null, null, 3, a), o, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var P = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = P.prototype, o.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, a, o = this._listeners[t]
                    , _ = 0;
                for (this !== l || h || l.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) n = o[a], n.c === e && n.s === i ? o.splice(a, 1) : 0 === _ && n.pr < r && (_ = a + 1);
                o.splice(_, 0, {
                    c: e
                    , s: i
                    , up: s
                    , pr: r
                })
            }, o.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                        type: t
                        , target: i
                    }) : s.c.call(s.s || i))
            };
            var O = t.requestAnimationFrame
                , S = t.cancelAnimationFrame
                , k = Date.now || function() {
                    return (new Date).getTime()
                }
                , R = k();
            for (n = ["ms", "moz", "webkit", "o"], a = n.length; --a > -1 && !O;) O = t[n[a] + "RequestAnimationFrame"], S = t[n[a] + "CancelAnimationFrame"] || t[n[a] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, r, n, a, o, _ = this
                    , u = k()
                    , c = !(e === !1 || !O) && "auto"
                    , d = 500
                    , m = 33
                    , g = function(t) {
                        var e, s, l = k() - R;
                        l > d && (u += l - m), R += l, _.time = (R - u) / 1e3, e = _.time - o, (!i || e > 0 || t === !0) && (_.frame++, o += e + (e >= a ? .004 : a - e), s = !0), t !== !0 && (n = r(g)), s && _.dispatchEvent("tick")
                    };
                P.call(_), _.time = _.frame = 0, _.tick = function() {
                    g(!0)
                }, _.lagSmoothing = function(t, e) {
                    d = t || 1 / f, m = Math.min(e, d, 0)
                }, _.sleep = function() {
                    null != n && (c && S ? S(n) : clearTimeout(n), r = p, n = null, _ === l && (h = !1))
                }, _.wake = function(t) {
                    null !== n ? _.sleep() : t ? u += -R + (R = k()) : _.frame > 10 && (R = k() - d + 5), r = 0 === i ? p : c && O ? O : function(t) {
                        return setTimeout(t, 1e3 * (o - _.time) + 1 | 0)
                    }, _ === l && (h = !0), g(2)
                }, _.fps = function(t) {
                    return arguments.length ? (i = t, a = 1 / (i || 60), o = this.time + a, void _.wake()) : i
                }, _.useRAF = function(t) {
                    return arguments.length ? (_.sleep(), c = t, void _.fps(i)) : c
                }, _.fps(t), setTimeout(function() {
                    "auto" === c && _.frame < 5 && "hidden" !== s.visibilityState && _.useRAF(!1)
                }, 1500)
            }), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
            var A = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Z) {
                    h || l.wake();
                    var i = this.vars.useFrames ? G : Z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = A.ticker = new u.Ticker, o = A.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var C = function() {
                h && k() - R > 2e3 && l.wake(), setTimeout(C, 2e3)
            };
            C(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function(t, e, i) {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline
                    , i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
            }, o._enabled = function(t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o._callback = function(t) {
                var e = this.vars
                    , i = e[t]
                    , s = e[t + "Params"]
                    , r = e[t + "Scope"] || e.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, s[0]);
                        break;
                    case 2:
                        i.call(r, s[0], s[1]);
                        break;
                    default:
                        i.apply(r, s)
                }
            }, o.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration
                            , r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && Q(), this.render(t, e, !1), I.length && Q())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || f, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime
                        , i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (h || t || l.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var M = y("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = M.prototype = new A, o.constructor = M, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, s) {
                var r, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (n = t._startTime; r && r._startTime > n;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, o.rawTime = function() {
                return h || l.wake(), this._totalTime
            };
            var D = y("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                        , l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                        for (this._targets = a = c(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(c(n))) : (this._siblings[r] = H(n, this, !1), 1 === l && this._siblings[r].length > 1 && J(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = a[r--] = D.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = H(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -f, this.render(Math.min(0, -this._delay)))
                }, !0)
                , F = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                }
                , z = function(t, e) {
                    var i, s = {};
                    for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            o = D.prototype = new A, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.19.1", D.defaultEase = o._ease = new x(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = l, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : void 0 === s ? e : s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = []
                , X = {}
                , N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                , L = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }
                , E = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = []
                        , f = 0
                        , c = ""
                        , p = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(N) || [], n = e.match(N) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; l > o; o++) _ = n[o], h = e.substr(f, e.indexOf(_, f) - f), c += h || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT
                        , t: u
                        , p: u.length - 1
                        , s: a
                        , c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0
                        , f: 0
                        , m: p && 4 > p ? Math.round : 0
                    }), f += _.length;
                    return c += e.substr(f), c && u.push(c), u.setRatio = L, u
                }
                , B = function(t, e, i, s, r, n, a, o, l) {
                    "function" == typeof s && (s = s(l || 0, t));
                    var h, _ = typeof t[e]
                        , u = "function" !== _ ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
                        , f = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e]
                        , c = "string" == typeof s && "=" === s.charAt(1)
                        , p = {
                            t: t
                            , p: e
                            , s: f
                            , f: "function" === _
                            , pg: 0
                            , n: r || e
                            , m: n ? "function" == typeof n ? n : Math.round : 0
                            , pr: 0
                            , c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - f || 0
                        };
                    return ("number" != typeof f || "number" != typeof s && !c) && (a || isNaN(f) || !c && isNaN(s) || "boolean" == typeof f || "boolean" == typeof s ? (p.fp = a, h = E(f, c ? p.s + p.c : s, o || D.defaultStringFilter, p), p = {
                        t: h
                        , p: "setRatio"
                        , s: 0
                        , c: 1
                        , f: 2
                        , pg: 0
                        , n: r || e
                        , pr: 0
                        , m: 0
                    }) : (p.s = parseFloat(f), c || (p.c = parseFloat(s) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                }
                , Y = D._internals = {
                    isArray: d
                    , isSelector: F
                    , lazyTweens: I
                    , blobDif: E
                }
                , j = D._plugins = {}
                , V = Y.tweenLookup = {}
                , U = 0
                , q = Y.reservedProps = {
                    ease: 1
                    , delay: 1
                    , overwrite: 1
                    , onComplete: 1
                    , onCompleteParams: 1
                    , onCompleteScope: 1
                    , useFrames: 1
                    , runBackwards: 1
                    , startAt: 1
                    , onUpdate: 1
                    , onUpdateParams: 1
                    , onUpdateScope: 1
                    , onStart: 1
                    , onStartParams: 1
                    , onStartScope: 1
                    , onReverseComplete: 1
                    , onReverseCompleteParams: 1
                    , onReverseCompleteScope: 1
                    , onRepeat: 1
                    , onRepeatParams: 1
                    , onRepeatScope: 1
                    , easeParams: 1
                    , yoyo: 1
                    , immediateRender: 1
                    , repeat: 1
                    , repeatDelay: 1
                    , data: 1
                    , paused: 1
                    , reversed: 1
                    , autoCSS: 1
                    , lazy: 1
                    , onOverwrite: 1
                    , callbackScope: 1
                    , stringFilter: 1
                    , id: 1
                }
                , W = {
                    none: 0
                    , all: 1
                    , auto: 2
                    , concurrent: 3
                    , allOnStart: 4
                    , preexisting: 5
                    , true: 1
                    , false: 0
                }
                , G = A._rootFramesTimeline = new M
                , Z = A._rootTimeline = new M
                , $ = 30
                , Q = Y.lazyRender = function() {
                    var t, e = I.length;
                    for (X = {}; --e > -1;)(t = I[e]) && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            Z._startTime = l.time, G._startTime = l.frame, Z._active = G._active = !0, setTimeout(Q, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && Q(), Z.render((l.time - Z._startTime) * Z._timeScale, !1, !1), G.render((l.frame - G._startTime) * G._timeScale, !1, !1), I.length && Q(), l.frame >= $) {
                    $ = l.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in V) {
                        for (e = V[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete V[i]
                    }
                    if ((!(i = Z._first) || i._paused) && D.autoSleep && !G._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", A._updateRoot);
            var H = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (V[n || (t._gsTweenID = n = "t" + U++)] || (V[n] = {
                            target: t
                            , tweens: []
                        }), e && (s = V[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return V[n].tweens
                }
                , K = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                }
                , J = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = r.length, n = 0; l > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, _ = e._startTime + f
                        , u = []
                        , c = 0
                        , p = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || tt(e, 0, p), 0 === tt(o, h, p) && (u[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((p || !o._initted) && _ - o._startTime <= 2e-10 || (u[c++] = o)));
                    for (n = c; --n > -1;)
                        if (o = u[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !K(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                }
                , tt = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * f > n - e ? f : (n += t.totalDuration() / t._timeScale / r) > e + f ? 0 : n - e - f
                };
            o._init = function() {
                var t, e, i, s, r, n, a = this.vars
                    , o = this._overwrittenProps
                    , l = this._duration
                    , h = !!a.immediateRender
                    , _ = a.ease;
                if (a.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in a.startAt) r[s] = a.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && a.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (a.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (s in a) q[s] && "autoCSS" !== s || (i[s] = a[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && a.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = _ = _ ? _ instanceof x ? _ : "function" == typeof _ ? new x(_, a.easeParams) : b[_] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (n = this._targets.length, t = 0; n > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, s, r, n) {
                var a, o, l, h, _, u;
                if (null == e) return !1;
                X[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (a in this.vars)
                    if (u = this.vars[a], q[a]) u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                    else if (j[a] && (h = new j[a])._onInitTween(e, this.vars[a], this, n)) {
                    for (this._firstPT = _ = {
                            _next: this._firstPT
                            , t: h
                            , p: "setRatio"
                            , s: 0
                            , c: 1
                            , f: 1
                            , n: a
                            , pg: 1
                            , pr: h._priority
                            , m: 0
                        }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), _._next && (_._next._prev = _)
                } else i[a] = B.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
                return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (X[e._gsTweenID] = !0), l)
            }, o.render = function(t, e, i) {
                var s, r, n, a, o = this._time
                    , l = this._duration
                    , h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === f && "isPause" !== this.data) && h !== t && (i = !0, h > f && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : f);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : f)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var _ = t / l
                        , u = this._easeType
                        , c = this._easePower;
                    (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === f && a !== f && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || F(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !K(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(Math.min(0, -this._delay))), this
            }, o._enabled = function(t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = H(s[i], this, !0);
                    else this._siblings = H(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t
                    , onComplete: e
                    , onCompleteParams: i
                    , callbackScope: s
                    , onReverseComplete: e
                    , onReverseCompleteParams: i
                    , immediateRender: !1
                    , lazy: !1
                    , useFrames: r
                    , overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((d(t) || F(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = H(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var et = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (o = et.prototype, et.version = "1.19.0", et.API = 2, o._firstPT = null, o._addTween = B, o.setRatio = L, o._kill = function(t) {
                    var e, i = this._overwriteProps
                        , s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, o._mod = o._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, et.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === et.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName
                        , s = t.priority || 0
                        , r = t.overwriteProps
                        , n = {
                            init: "_onInitTween"
                            , set: "setRatio"
                            , kill: "_kill"
                            , round: "_mod"
                            , mod: "_mod"
                            , initAll: "_onInitAllProps"
                        }
                        , a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0)
                        , o = a.prototype = new et(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, et.activate([a]), a
                }, n = t._gsQueue) {
                for (a = 0; a < n.length; a++) n[a]();
                for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";

    function t(t, s) {
        this.element = t, this.options = e.extend({}, l, s);
        var i = this.options.locale;
        void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
    }

    function s(t) {
        if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
            var s = e("div.jq-selectbox.opened")
                , l = e("div.jq-selectbox__search input", s)
                , o = e("div.jq-selectbox__dropdown", s);
            s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown")
        }
    }
    var i = "styler"
        , l = {
            idSuffix: "-styler"
            , filePlaceholder: "Файл не выбран"
            , fileBrowse: "Обзор..."
            , fileNumber: "Выбрано файлов: %s"
            , selectPlaceholder: "Выберите..."
            , selectSearch: !1
            , selectSearchLimit: 10
            , selectSearchNotFound: "Совпадений не найдено"
            , selectSearchPlaceholder: "Поиск..."
            , selectVisibleOptions: 0
            , singleSelectzIndex: "100"
            , selectSmartPositioning: !0
            , locale: "ru"
            , locales: {
                en: {
                    filePlaceholder: "No file selected"
                    , fileBrowse: "Browse..."
                    , fileNumber: "Selected files: %s"
                    , selectPlaceholder: "Select..."
                    , selectSearchNotFound: "No matches found"
                    , selectSearchPlaceholder: "Search..."
                }
            }
            , onSelectOpened: function() {}
            , onSelectClosed: function() {}
            , onFormStyled: function() {}
        };
    t.prototype = {
        init: function() {
            function t() {
                void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data()
            }
            var i = e(this.element)
                , l = this.options
                , o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i))
                , a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
            if (i.is(":checkbox")) {
                var d = function() {
                    var s = new t
                        , l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                            id: s.id
                            , title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.css({
                        position: "absolute"
                        , zIndex: "-1"
                        , opacity: 0
                        , margin: 0
                        , padding: 0
                    }).after(l).prependTo(l), l.attr("unselectable", "on").css({
                        "-webkit-user-select": "none"
                        , "-moz-user-select": "none"
                        , "-ms-user-select": "none"
                        , "-o-user-select": "none"
                        , "user-select": "none"
                        , display: "inline-block"
                        , position: "relative"
                        , overflow: "hidden"
                    }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function(e) {
                        e.preventDefault(), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change())
                    }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function(t) {
                        e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                    }), i.on("change.styler", function() {
                        i.is(":checked") ? l.addClass("checked") : l.removeClass("checked")
                    }).on("keydown.styler", function(e) {
                        32 == e.which && l.click()
                    }).on("focus.styler", function() {
                        l.is(".disabled") || l.addClass("focused")
                    }).on("blur.styler", function() {
                        l.removeClass("focused")
                    })
                };
                d(), i.on("refresh", function() {
                    i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d()
                })
            } else if (i.is(":radio")) {
                var r = function() {
                    var s = new t
                        , l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                            id: s.id
                            , title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.css({
                        position: "absolute"
                        , zIndex: "-1"
                        , opacity: 0
                        , margin: 0
                        , padding: 0
                    }).after(l).prependTo(l), l.attr("unselectable", "on").css({
                        "-webkit-user-select": "none"
                        , "-moz-user-select": "none"
                        , "-ms-user-select": "none"
                        , "-o-user-select": "none"
                        , "user-select": "none"
                        , display: "inline-block"
                        , position: "relative"
                    }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function() {
                        var t = this;
                        return t.first().parents().filter(function() {
                            return e(this).find(t).length === t.length
                        })
                    }, e.fn.commonParent = function() {
                        return e(this).commonParents().first()
                    }, l.click(function(t) {
                        if (t.preventDefault(), !l.is(".disabled")) {
                            var s = e('input[name="' + i.attr("name") + '"]');
                            s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change()
                        }
                    }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function(t) {
                        e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                    }), i.on("change.styler", function() {
                        i.parent().addClass("checked")
                    }).on("focus.styler", function() {
                        l.is(".disabled") || l.addClass("focused")
                    }).on("blur.styler", function() {
                        l.removeClass("focused")
                    })
                };
                r(), i.on("refresh", function() {
                    i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r()
                })
            } else if (i.is(":file")) {
                i.css({
                    position: "absolute"
                    , top: 0
                    , right: 0
                    , margin: 0
                    , padding: 0
                    , opacity: 0
                    , fontSize: "100px"
                });
                var n = function() {
                    var s = new t
                        , o = i.data("placeholder");
                    void 0 === o && (o = l.filePlaceholder);
                    var a = i.data("browse");
                    void 0 !== a && "" !== a || (a = l.fileBrowse);
                    var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").css({
                        display: "inline-block"
                        , position: "relative"
                        , overflow: "hidden"
                    }).attr({
                        id: s.id
                        , title: s.title
                    }).addClass(s.classes).data(s.data);
                    i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled"), i.on("change.styler", function() {
                        var t = i.val()
                            , s = e("div.jq-file__name", d);
                        if (i.is("[multiple]")) {
                            t = "";
                            var a = i[0].files.length;
                            if (a > 0) {
                                var r = i.data("number");
                                void 0 === r && (r = l.fileNumber), r = r.replace("%s", a), t = r
                            }
                        }
                        s.text(t.replace(/.+[\\\/]/, "")), "" === t ? (s.text(o), d.removeClass("changed")) : d.addClass("changed")
                    }).on("focus.styler", function() {
                        d.addClass("focused")
                    }).on("blur.styler", function() {
                        d.removeClass("focused")
                    }).on("click.styler", function() {
                        d.removeClass("focused")
                    })
                };
                n(), i.on("refresh", function() {
                    i.off(".styler").parent().before(i).remove(), n()
                })
            } else if (i.is('input[type="number"]')) {
                var c = function() {
                    var s = new t
                        , l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
                            id: s.id
                            , title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
                    var o, a, d, r = null
                        , n = null;
                    void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
                    var c = function(t) {
                        var s, l = i.val();
                        e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
                        var r = (d.toString().split(".")[1] || []).length;
                        if (r > 0) {
                            for (var n = "1"; n.length <= r;) n += "0";
                            s = Math.round(s * n) / n
                        }
                        e.isNumeric(o) && e.isNumeric(a) ? s >= o && a >= s && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? a >= s && i.val(s) : i.val(s)
                    };
                    l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function() {
                        var t = e(this);
                        c(t), r = setTimeout(function() {
                            n = setInterval(function() {
                                c(t)
                            }, 40)
                        }, 350)
                    }).on("mouseup mouseout", "div.jq-number__spin", function() {
                        clearTimeout(r), clearInterval(n)
                    }).on("mouseup", "div.jq-number__spin", function() {
                        i.change()
                    }), i.on("focus.styler", function() {
                        l.addClass("focused")
                    }).on("blur.styler", function() {
                        l.removeClass("focused")
                    }))
                };
                c(), i.on("refresh", function() {
                    i.off(".styler").closest(".jq-number").before(i).remove(), c()
                })
            } else if (i.is("select")) {
                var f = function() {
                    function d(t) {
                        t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(t) {
                            var s = null;
                            "mousewheel" == t.type ? s = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" == t.type && (s = 40 * t.originalEvent.detail), s && (t.stopPropagation(), t.preventDefault(), e(this).scrollTop(s + e(this).scrollTop()))
                        })
                    }

                    function r() {
                        for (var e = 0; e < n.length; e++) {
                            var t = n.eq(e)
                                , s = ""
                                , i = ""
                                , o = ""
                                , a = ""
                                , d = ""
                                , r = ""
                                , f = ""
                                , h = ""
                                , u = "";
                            t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== n.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
                            var p = t.data();
                            for (var v in p) "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
                            i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), c += s
                        }
                    }
                    var n = e("option", i)
                        , c = "";
                    if (i.is("[multiple]")) {
                        if (a || o) return;
                        ! function() {
                            var s = new t
                                , l = e('<div class="jq-select-multiple jqselect"></div>').css({
                                    display: "inline-block"
                                    , position: "relative"
                                }).attr({
                                    id: s.id
                                    , title: s.title
                                }).addClass(s.classes).data(s.data);
                            i.css({
                                margin: 0
                                , padding: 0
                            }).after(l), r(), l.append("<ul>" + c + "</ul>");
                            var o = e("ul", l).css({
                                    position: "relative"
                                    , "overflow-x": "hidden"
                                    , "-webkit-overflow-scrolling": "touch"
                                })
                                , a = e("li", l).attr("unselectable", "on")
                                , f = i.attr("size")
                                , h = o.outerHeight()
                                , u = a.outerHeight();
                            void 0 !== f && f > 0 ? o.css({
                                height: u * f
                            }) : o.css({
                                height: 4 * u
                            }), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l).css({
                                position: "absolute"
                                , left: 0
                                , top: 0
                                , width: "100%"
                                , height: "100%"
                                , opacity: 0
                            }), i.is(":disabled") ? (l.addClass("disabled"), n.each(function() {
                                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected")
                            })) : (a.filter(":not(.disabled):not(.optgroup)").click(function(t) {
                                i.focus();
                                var s = e(this);
                                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                                    var l = !1
                                        , o = !1;
                                    s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function() {
                                        e(this).is(".first") && (l = !0)
                                    }), s.nextAll().each(function() {
                                        e(this).is(".first") && (o = !0)
                                    }), l && s.prevAll().each(function() {
                                        return !e(this).is(".selected") && void e(this).not(".disabled, .optgroup").addClass("selected")
                                    }), o && s.nextAll().each(function() {
                                        return !e(this).is(".selected") && void e(this).not(".disabled, .optgroup").addClass("selected")
                                    }), 1 == a.filter(".selected").length && s.addClass("first")
                                }
                                n.prop("selected", !1), a.filter(".selected").each(function() {
                                    var t = e(this)
                                        , s = t.index();
                                    t.is(".option") && (s -= t.prevAll(".optgroup").length), n.eq(s).prop("selected", !0)
                                }), i.change()
                            }), n.each(function(t) {
                                e(this).data("optionIndex", t)
                            }), i.on("change.styler", function() {
                                a.removeClass("selected");
                                var t = [];
                                n.filter(":selected").each(function() {
                                    t.push(e(this).data("optionIndex"))
                                }), a.not(".optgroup").filter(function(s) {
                                    return e.inArray(s, t) > -1
                                }).addClass("selected")
                            }).on("focus.styler", function() {
                                l.addClass("focused")
                            }).on("blur.styler", function() {
                                l.removeClass("focused")
                            }), h > l.height() && i.on("keydown.styler", function(e) {
                                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u)
                            }))
                        }()
                    } else ! function() {
                        var a = new t
                            , f = ""
                            , h = i.data("placeholder")
                            , u = i.data("search")
                            , p = i.data("search-limit")
                            , v = i.data("search-not-found")
                            , m = i.data("search-placeholder")
                            , g = i.data("z-index")
                            , b = i.data("smart-positioning");
                        void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.singleSelectzIndex), void 0 !== b && "" !== b || (b = l.selectSmartPositioning);
                        var y = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({
                            display: "inline-block"
                            , position: "relative"
                            , zIndex: g
                        }).attr({
                            id: a.id
                            , title: a.title
                        }).addClass(a.classes).data(a.data);
                        i.css({
                            margin: 0
                            , padding: 0
                        }).after(y).prependTo(y);
                        var C = e("div.jq-selectbox__select", y)
                            , x = e("div.jq-selectbox__select-text", y)
                            , w = n.filter(":selected");
                        r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
                        var q = e('<div class="jq-selectbox__dropdown" style="position: absolute">' + f + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + c + "</ul></div>");
                        y.append(q);
                        var _ = e("ul", q)
                            , j = e("li", q)
                            , k = e("input", q)
                            , S = e("div.jq-selectbox__not-found", q).hide();
                        j.length < p && k.parent().hide(), "" === n.first().text() && n.first().is(":selected") && h !== !1 ? x.text(h).addClass("placeholder") : x.text(w.text());
                        var T = 0
                            , N = 0;
                        if (j.css({
                                display: "inline-block"
                            }), j.each(function() {
                                var t = e(this);
                                t.innerWidth() > T && (T = t.innerWidth(), N = t.width())
                            }), j.css({
                                display: ""
                            }), x.is(".placeholder") && x.width() > T) x.width(x.width());
                        else {
                            var P = y.clone().appendTo("body").width("auto")
                                , A = P.outerWidth();
                            P.remove(), A == y.outerWidth() && x.width(N)
                        }
                        T > y.width() && q.width(T), "" === n.first().text() && "" !== i.data("placeholder") && j.first().hide(), i.css({
                            position: "absolute"
                            , left: 0
                            , top: 0
                            , width: "100%"
                            , height: "100%"
                            , opacity: 0
                        });
                        var D = y.outerHeight(!0)
                            , H = k.parent().outerHeight(!0) || 0
                            , I = _.css("max-height")
                            , z = j.filter(".selected");
                        if (z.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
                            var K = j.outerHeight();
                            h !== !1 && (K = j.eq(1).outerHeight()), j.data("li-height", K)
                        }
                        var M = q.css("top");
                        if ("auto" == q.css("left") && q.css({
                                left: 0
                            }), "auto" == q.css("top") && (q.css({
                                top: D
                            }), M = D), q.hide(), z.length && (n.first().text() != w.text() && y.addClass("changed"), y.data("jqfs-class", z.data("jqfs-class")), y.addClass(z.data("jqfs-class"))), i.is(":disabled")) return y.addClass("disabled"), !1;
                        C.click(function() {
                            if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                                var t = e(window)
                                    , s = j.data("li-height")
                                    , a = y.offset().top
                                    , r = t.height() - D - (a - t.scrollTop())
                                    , c = i.data("visible-options");
                                void 0 !== c && "" !== c || (c = l.selectVisibleOptions);
                                var f = 5 * s
                                    , h = s * c;
                                c > 0 && 6 > c && (f = h), 0 === c && (h = "auto");
                                var u = function() {
                                    q.height("auto").css({
                                        bottom: "auto"
                                        , top: M
                                    });
                                    var e = function() {
                                        _.css("max-height", Math.floor((r - 20 - H) / s) * s)
                                    };
                                    e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e()
                                };
                                b === !0 || 1 === b ? r > f + H + 20 ? (u(), y.removeClass("dropup").addClass("dropdown")) : (function() {
                                    q.height("auto").css({
                                        top: "auto"
                                        , bottom: M
                                    });
                                    var e = function() {
                                        _.css("max-height", Math.floor((a - t.scrollTop() - 20 - H) / s) * s)
                                    };
                                    e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e()
                                }(), y.removeClass("dropdown").addClass("dropup")) : b === !1 || 0 === b ? r > f + H + 20 && (u(), y.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                                    bottom: "auto"
                                    , top: M
                                }), _.css("max-height", h), "none" != I && _.css("max-height", I)), y.offset().left + q.outerWidth() > t.width() && q.css({
                                    left: "auto"
                                    , right: 0
                                }), e("div.jqselect").css({
                                    zIndex: g - 1
                                }).removeClass("opened"), y.css({
                                    zIndex: g
                                }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), y.addClass("opened focused"), l.onSelectOpened.call(y)) : (q.hide(), y.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(y)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function() {
                                    var t = e(this).val();
                                    j.each(function() {
                                        e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide()
                                    }), "" === n.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide()
                                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_)
                            }
                        }), j.hover(function() {
                            e(this).siblings().removeClass("selected")
                        });
                        var O = j.filter(".selected").text();
                        j.filter(":not(.disabled):not(.optgroup)").click(function() {
                            i.focus();
                            var t = e(this)
                                , s = t.text();
                            if (!t.is(".selected")) {
                                var o = t.index();
                                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), n.prop("selected", !1).eq(o).prop("selected", !0), O = s, x.text(s), y.data("jqfs-class") && y.removeClass(y.data("jqfs-class")), y.data("jqfs-class", t.data("jqfs-class")), y.addClass(t.data("jqfs-class")), i.change()
                            }
                            q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y)
                        }), q.mouseout(function() {
                            e("li.sel", q).addClass("selected")
                        }), i.on("change.styler", function() {
                            x.text(n.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), n.first().text() != j.filter(".selected").text() ? y.addClass("changed") : y.removeClass("changed")
                        }).on("focus.styler", function() {
                            y.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                        }).on("blur.styler", function() {
                            y.removeClass("focused")
                        }).on("keydown.styler keyup.styler", function(e) {
                            var t = j.data("li-height");
                            "" === i.val() ? x.text(h).addClass("placeholder") : x.text(n.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y))
                        }).on("keydown.styler", function(e) {
                            32 == e.which && (e.preventDefault(), C.click())
                        }), s.registered || (e(document).on("click", s), s.registered = !0)
                    }()
                };
                f(), i.on("refresh", function() {
                    i.off(".styler").parent().before(i).remove(), f()
                })
            } else i.is(":reset") && i.on("click", function() {
                setTimeout(function() {
                    i.closest("form").find("input, select").trigger("refresh")
                }, 1)
            })
        }
        , destroy: function() {
            var t = e(this.element);
            t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove()
        }
    }, e.fn[i] = function(s) {
        var l = arguments;
        if (void 0 === s || "object" == typeof s) return this.each(function() {
            e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s))
        }).promise().done(function() {
            var t = e(this[0]).data("_" + i);
            t && t.options.onFormStyled.call()
        }), this;
        if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
            var o;
            return this.each(function() {
                var a = e.data(this, "_" + i);
                a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)))
            }), void 0 !== o ? o : this
        }
    }, s.registered = !1
});
! function(T, e) {
    T(function() {
        "use strict";

        function T(T, e) {
            return null != T && null != e && T.toLowerCase() === e.toLowerCase()
        }

        function S(T, e) {
            var S, i, o = T.length;
            if (!o || !e) return !1;
            for (S = e.toLowerCase(), i = 0; i < o; ++i)
                if (S === T[i].toLowerCase()) return !0;
            return !1
        }

        function i(T) {
            for (var e in T) b.call(T, e) && (T[e] = new RegExp(T[e], "i"))
        }

        function o(T, e) {
            this.ua = T || "", this._cache = {}, this.maxPhoneWidth = e || 600
        }
        var P = {};
        P.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b"
                , BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+"
                , HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m"
                , Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6"
                , Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b"
                , Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b"
                , Samsung: "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F"
                , LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)"
                , Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533"
                , Asus: "Asus.*Galaxy|PadFone.*Mobile"
                , NokiaLumia: "Lumia [0-9]{3,4}"
                , Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b"
                , Palm: "PalmSource|Palm"
                , Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature"
                , Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790"
                , Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250"
                , Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM"
                , iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)"
                , SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b"
                , Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q"
                , Alcatel: "Alcatel"
                , Nintendo: "Nintendo 3DS"
                , Amoi: "Amoi"
                , INQ: "INQ"
                , GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            }
            , tablets: {
                iPad: "iPad|iPad.*Mobile"
                , NexusTablet: "Android.*Nexus[\\s]+(7|9|10)"
                , SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280"
                , Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b"
                , SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)"
                , HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10"
                , AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z"
                , BlackBerryTablet: "PlayBook|RIM Tablet"
                , HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410"
                , MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617"
                , NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2"
                , AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30"
                , ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO"
                , LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b"
                , FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b"
                , PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002"
                , LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)"
                , DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7"
                , YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b"
                , MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB"
                , ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2"
                , IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004"
                , IRUTablet: "M702pro"
                , MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b"
                , EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)"
                , AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)"
                , ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b"
                , AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark"
                , NokiaLumiaTablet: "Lumia 2520"
                , SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31"
                , PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b"
                , CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT"
                , CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010"
                , MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10"
                , MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b"
                , SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)"
                , RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A"
                , FlyTablet: "IQ310|Fly Vision"
                , bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus"
                , HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim"
                , NecTablet: "\\bN-06D|\\bN-08D"
                , PantechTablet: "Pantech.*P4100"
                , BronchoTablet: "Broncho.*(N701|N708|N802|a710)"
                , VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b"
                , ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900"
                , PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA"
                , NabiTablet: "Android.*\\bNabi"
                , KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build"
                , DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b"
                , TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE"
                , PlaystationTablet: "Playstation.*(Portable|Vita)"
                , TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab"
                , PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b"
                , AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b "
                , DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1"
                , GalapadTablet: "Android.*\\bG1\\b"
                , MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b"
                , KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b"
                , AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide"
                , PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b"
                , YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026"
                , ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503"
                , GUTablet: "TX-A1301|TX-M9002|Q702|kf026"
                , PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10"
                , OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)"
                , HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync"
                , DPSTablet: "DPS Dream 9|DPS Dual 7"
                , VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10"
                , CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989"
                , MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b"
                , ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan"
                , GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042"
                , ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003"
                , VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b"
                , ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1"
                , StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab"
                , VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497"
                , EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2"
                , RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711"
                , iMobileTablet: "i-mobile i-note"
                , TolinoTablet: "tolino tab [0-9.]+|tolino shine"
                , AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b"
                , AMPETablet: "Android.* A78 "
                , SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)"
                , TecnoTablet: "TECNO P9"
                , JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b"
                , iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)"
                , FX2Tablet: "FX2 PAD7|FX2 PAD10"
                , XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151"
                , ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a"
                , OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10"
                , CaptivaTablet: "CAPTIVA PAD"
                , IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S"
                , TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi"
                , OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+"
                , JaytechTablet: "TPC-PA762"
                , BlaupunktTablet: "Endeavour 800NG|Endeavour 1010"
                , DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b"
                , EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b"
                , LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b"
                , AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712"
                , MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010"
                , CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b"
                , WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b"
                , MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b"
                , NibiruTablet: "Nibiru M1|Nibiru Jupiter One"
                , NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI"
                , LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100"
                , UbislateTablet: "UbiSlate[\\s]?7C"
                , PocketBookTablet: "Pocketbook"
                , KocasoTablet: "\\b(TB-1207)\\b"
                , HisenseTablet: "\\b(F5281|E2371)\\b"
                , Hudl: "Hudl HT7S3|Hudl 2"
                , TelstraTablet: "T-Hub2"
                , GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b"
            }
            , oss: {
                AndroidOS: "Android"
                , BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os"
                , PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino"
                , SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b"
                , WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;"
                , WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;"
                , iOS: "\\biPhone.*Mobile|\\biPod|\\biPad"
                , MeeGoOS: "MeeGo"
                , MaemoOS: "Maemo"
                , JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b"
                , webOS: "webOS|hpwOS"
                , badaOS: "\\bBada\\b"
                , BREWOS: "BREW"
            }
            , uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?"
                , Dolfin: "\\bDolfin\\b"
                , Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+"
                , Skyfire: "Skyfire"
                , Edge: "Mobile Safari/[.0-9]* Edge"
                , IE: "IEMobile|MSIEMobile"
                , Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS"
                , Bolt: "bolt"
                , TeaShark: "teashark"
                , Blazer: "Blazer"
                , Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari"
                , UCBrowser: "UC.*Browser|UCWEB"
                , baiduboxapp: "baiduboxapp"
                , baidubrowser: "baidubrowser"
                , DiigoBrowser: "DiigoBrowser"
                , Puffin: "Puffin"
                , Mercury: "\\bMercury\\b"
                , ObigoBrowser: "Obigo"
                , NetFront: "NF-Browser"
                , GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
                , PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
            }
            , props: {
                Mobile: "Mobile/[VER]"
                , Build: "Build/[VER]"
                , Version: "Version/[VER]"
                , VendorID: "VendorID/[VER]"
                , iPad: "iPad.*CPU[a-z ]+[VER]"
                , iPhone: "iPhone.*CPU[a-z ]+[VER]"
                , iPod: "iPod.*CPU[a-z ]+[VER]"
                , Kindle: "Kindle/[VER]"
                , Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"]
                , Coast: ["Coast/[VER]"]
                , Dolfin: "Dolfin/[VER]"
                , Firefox: ["Firefox/[VER]", "FxiOS/[VER]"]
                , Fennec: "Fennec/[VER]"
                , Edge: "Edge/[VER]"
                , IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"]
                , NetFront: "NetFront/[VER]"
                , NokiaBrowser: "NokiaBrowser/[VER]"
                , Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"]
                , "Opera Mini": "Opera Mini/[VER]"
                , "Opera Mobi": "Version/[VER]"
                , "UC Browser": "UC Browser[VER]"
                , MQQBrowser: "MQQBrowser/[VER]"
                , MicroMessenger: "MicroMessenger/[VER]"
                , baiduboxapp: "baiduboxapp/[VER]"
                , baidubrowser: "baidubrowser/[VER]"
                , SamsungBrowser: "SamsungBrowser/[VER]"
                , Iron: "Iron/[VER]"
                , Safari: ["Version/[VER]", "Safari/[VER]"]
                , Skyfire: "Skyfire/[VER]"
                , Tizen: "Tizen/[VER]"
                , Webkit: "webkit[ /][VER]"
                , PaleMoon: "PaleMoon/[VER]"
                , Gecko: "Gecko/[VER]"
                , Trident: "Trident/[VER]"
                , Presto: "Presto/[VER]"
                , Goanna: "Goanna/[VER]"
                , iOS: " \\bi?OS\\b [VER][ ;]{1}"
                , Android: "Android [VER]"
                , BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"]
                , BREW: "BREW [VER]"
                , Java: "Java/[VER]"
                , "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"]
                , "Windows Phone": "Windows Phone [VER]"
                , "Windows CE": "Windows CE/[VER]"
                , "Windows NT": "Windows NT [VER]"
                , Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"]
                , webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            }
            , utils: {
                Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom"
                , MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2"
                , DesktopMode: "WPDesktop"
                , TV: "SonyDTV|HbbTV"
                , WebKit: "(webkit)[ /]([\\w.]+)"
                , Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b"
                , Watch: "SM-V700"
            }
        }, P.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
            , shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
            , tabletPattern: /android|ipad|playbook|silk/i
        };
        var a, b = Object.prototype.hasOwnProperty;
        return P.FALLBACK_PHONE = "UnknownPhone", P.FALLBACK_TABLET = "UnknownTablet"
            , P.FALLBACK_MOBILE = "UnknownMobile", a = "isArray" in Array ? Array.isArray : function(T) {
                return "[object Array]" === Object.prototype.toString.call(T)
            }
            , function() {
                var T, e, S, o, n, A, G = P.mobileDetectRules;
                for (T in G.props)
                    if (b.call(G.props, T)) {
                        for (e = G.props[T], a(e) || (e = [e]), n = e.length, o = 0; o < n; ++o) S = e[o], A = S.indexOf("[VER]"), A >= 0 && (S = S.substring(0, A) + "([\\w._\\+]+)" + S.substring(A + 5)), e[o] = new RegExp(S, "i");
                        G.props[T] = e
                    }
                i(G.oss), i(G.phones), i(G.tablets), i(G.uas), i(G.utils), G.oss0 = {
                    WindowsPhoneOS: G.oss.WindowsPhoneOS
                    , WindowsMobileOS: G.oss.WindowsMobileOS
                }
            }(), P.findMatch = function(T, e) {
                for (var S in T)
                    if (b.call(T, S) && T[S].test(e)) return S;
                return null
            }, P.findMatches = function(T, e) {
                var S = [];
                for (var i in T) b.call(T, i) && T[i].test(e) && S.push(i);
                return S
            }, P.getVersionStr = function(T, e) {
                var S, i, o, a, n = P.mobileDetectRules.props;
                if (b.call(n, T))
                    for (S = n[T], o = S.length, i = 0; i < o; ++i)
                        if (null !== (a = S[i].exec(e))) return a[1];
                return null
            }, P.getVersion = function(T, e) {
                var S = P.getVersionStr(T, e);
                return S ? P.prepareVersionNo(S) : NaN
            }, P.prepareVersionNo = function(T) {
                var e;
                return e = T.split(/[a-z._ \/\-]/i), 1 === e.length && (T = e[0]), e.length > 1 && (T = e[0] + ".", e.shift(), T += e.join("")), Number(T)
            }, P.isMobileFallback = function(T) {
                return P.detectMobileBrowsers.fullPattern.test(T) || P.detectMobileBrowsers.shortPattern.test(T.substr(0, 4))
            }, P.isTabletFallback = function(T) {
                return P.detectMobileBrowsers.tabletPattern.test(T)
            }, P.prepareDetectionCache = function(T, S, i) {
                if (T.mobile === e) {
                    var a, b, n;
                    return (b = P.findMatch(P.mobileDetectRules.tablets, S)) ? (T.mobile = T.tablet = b, void(T.phone = null)) : (a = P.findMatch(P.mobileDetectRules.phones, S)) ? (T.mobile = T.phone = a, void(T.tablet = null)) : void(P.isMobileFallback(S) ? (n = o.isPhoneSized(i), n === e ? (T.mobile = P.FALLBACK_MOBILE, T.tablet = T.phone = null) : n ? (T.mobile = T.phone = P.FALLBACK_PHONE, T.tablet = null) : (T.mobile = T.tablet = P.FALLBACK_TABLET, T.phone = null)) : P.isTabletFallback(S) ? (T.mobile = T.tablet = P.FALLBACK_TABLET, T.phone = null) : T.mobile = T.tablet = T.phone = null)
                }
            }, P.mobileGrade = function(T) {
                var e = null !== T.mobile();
                return T.os("iOS") && T.version("iPad") >= 4.3 || T.os("iOS") && T.version("iPhone") >= 3.1 || T.os("iOS") && T.version("iPod") >= 3.1 || T.version("Android") > 2.1 && T.is("Webkit") || T.version("Windows Phone OS") >= 7 || T.is("BlackBerry") && T.version("BlackBerry") >= 6 || T.match("Playbook.*Tablet") || T.version("webOS") >= 1.4 && T.match("Palm|Pre|Pixi") || T.match("hp.*TouchPad") || T.is("Firefox") && T.version("Firefox") >= 12 || T.is("Chrome") && T.is("AndroidOS") && T.version("Android") >= 4 || T.is("Skyfire") && T.version("Skyfire") >= 4.1 && T.is("AndroidOS") && T.version("Android") >= 2.3 || T.is("Opera") && T.version("Opera Mobi") > 11 && T.is("AndroidOS") || T.is("MeeGoOS") || T.is("Tizen") || T.is("Dolfin") && T.version("Bada") >= 2 || (T.is("UC Browser") || T.is("Dolfin")) && T.version("Android") >= 2.3 || T.match("Kindle Fire") || T.is("Kindle") && T.version("Kindle") >= 3 || T.is("AndroidOS") && T.is("NookTablet") || T.version("Chrome") >= 11 && !e || T.version("Safari") >= 5 && !e || T.version("Firefox") >= 4 && !e || T.version("MSIE") >= 7 && !e || T.version("Opera") >= 10 && !e ? "A" : T.os("iOS") && T.version("iPad") < 4.3 || T.os("iOS") && T.version("iPhone") < 3.1 || T.os("iOS") && T.version("iPod") < 3.1 || T.is("Blackberry") && T.version("BlackBerry") >= 5 && T.version("BlackBerry") < 6 || T.version("Opera Mini") >= 5 && T.version("Opera Mini") <= 6.5 && (T.version("Android") >= 2.3 || T.is("iOS")) || T.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || T.version("Opera Mobi") >= 11 && T.is("SymbianOS") ? "B" : (T.version("BlackBerry") < 5 || T.match("MSIEMobile|Windows CE.*Mobile") || T.version("Windows Mobile"), "C")
            }, P.detectOS = function(T) {
                return P.findMatch(P.mobileDetectRules.oss0, T) || P.findMatch(P.mobileDetectRules.oss, T)
            }, P.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, o.prototype = {
                constructor: o
                , mobile: function() {
                    return P.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                }
                , phone: function() {
                    return P.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                }
                , tablet: function() {
                    return P.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                }
                , userAgent: function() {
                    return this._cache.userAgent === e && (this._cache.userAgent = P.findMatch(P.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                }
                , userAgents: function() {
                    return this._cache.userAgents === e && (this._cache.userAgents = P.findMatches(P.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                }
                , os: function() {
                    return this._cache.os === e && (this._cache.os = P.detectOS(this.ua)), this._cache.os
                }
                , version: function(T) {
                    return P.getVersion(T, this.ua)
                }
                , versionStr: function(T) {
                    return P.getVersionStr(T, this.ua)
                }
                , is: function(e) {
                    return S(this.userAgents(), e) || T(e, this.os()) || T(e, this.phone()) || T(e, this.tablet()) || S(P.findMatches(P.mobileDetectRules.utils, this.ua), e)
                }
                , match: function(T) {
                    return T instanceof RegExp || (T = new RegExp(T, "i")), T.test(this.ua)
                }
                , isPhoneSized: function(T) {
                    return o.isPhoneSized(T || this.maxPhoneWidth)
                }
                , mobileGrade: function() {
                    return this._cache.grade === e && (this._cache.grade = P.mobileGrade(this)), this._cache.grade
                }
            }, "undefined" != typeof window && window.screen ? o.isPhoneSized = function(T) {
                return T < 0 ? e : P.getDeviceSmallerSide() <= T
            } : o.isPhoneSized = function() {}, o._impl = P, o.version = "1.3.5 2016-11-14", o
    })
}(function(T) {
    if ("undefined" != typeof module && module.exports) return function(T) {
        module.exports = T()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(T) {
        window.MobileDetect = T()
    };
    throw new Error("unknown environment")
}());
! function(n, e, o) {
    function t(n, e) {
        return typeof n === e
    }

    function s(n) {
        var e = c.className
            , o = l._config.classPrefix || "";
        if (p && (e = e.baseVal), l._config.enableJSClass) {
            var t = new RegExp("(^|\\s)" + o + "no-js(\\s|$)");
            e = e.replace(t, "$1" + o + "js$2")
        }
        l._config.enableClasses && (e += " " + o + n.join(" " + o), p ? c.className.baseVal = e : c.className = e)
    }

    function i(n, e) {
        if ("object" == typeof n)
            for (var o in n) u(n, o) && i(o, n[o]);
        else {
            n = n.toLowerCase();
            var t = n.split(".")
                , a = l[t[0]];
            if (2 == t.length && (a = a[t[1]]), void 0 !== a) return l;
            e = "function" == typeof e ? e() : e, 1 == t.length ? l[t[0]] = e : (!l[t[0]] || l[t[0]] instanceof Boolean || (l[t[0]] = new Boolean(l[t[0]])), l[t[0]][t[1]] = e), s([(e && 0 != e ? "" : "no-") + t.join("-")]), l._trigger(n, e)
        }
        return l
    }
    var a = []
        , r = []
        , f = {
            _version: "3.3.1"
            , _config: {
                classPrefix: ""
                , enableClasses: !0
                , enableJSClass: !0
                , usePrefixes: !0
            }
            , _q: []
            , on: function(n, e) {
                var o = this;
                setTimeout(function() {
                    e(o[n])
                }, 0)
            }
            , addTest: function(n, e, o) {
                r.push({
                    name: n
                    , fn: e
                    , options: o
                })
            }
            , addAsyncTest: function(n) {
                r.push({
                    name: null
                    , fn: n
                })
            }
        }
        , l = function() {};
    l.prototype = f, l = new l;
    var u, c = e.documentElement
        , p = "svg" === c.nodeName.toLowerCase();
    ! function() {
        var n = {}.hasOwnProperty;
        u = t(n, "undefined") || t(n.call, "undefined") ? function(n, e) {
            return e in n && t(n.constructor.prototype[e], "undefined")
        } : function(e, o) {
            return n.call(e, o)
        }
    }(), f._l = {}, f.on = function(n, e) {
            this._l[n] || (this._l[n] = []), this._l[n].push(e), l.hasOwnProperty(n) && setTimeout(function() {
                l._trigger(n, l[n])
            }, 0)
        }, f._trigger = function(n, e) {
            if (this._l[n]) {
                var o = this._l[n];
                setTimeout(function() {
                    var n;
                    for (n = 0; n < o.length; n++)(0, o[n])(e)
                }, 0), delete this._l[n]
            }
        }, l._q.push(function() {
            f.addTest = i
        })
        , function() {
            var n, e, o, s, i, f, u;
            for (var c in r)
                if (r.hasOwnProperty(c)) {
                    if (n = [], e = r[c], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                        for (o = 0; o < e.options.aliases.length; o++) n.push(e.options.aliases[o].toLowerCase());
                    for (s = t(e.fn, "function") ? e.fn() : e.fn, i = 0; i < n.length; i++) f = n[i], u = f.split("."), 1 === u.length ? l[u[0]] = s : (!l[u[0]] || l[u[0]] instanceof Boolean || (l[u[0]] = new Boolean(l[u[0]])), l[u[0]][u[1]] = s), a.push((s ? "" : "no-") + u.join("-"))
                }
        }(), s(a), delete f.addTest, delete f.addAsyncTest;
    for (var d = 0; d < l._q.length; d++) l._q[d]();
    n.Modernizr = l
}(window, document);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    ! function(t) {
        var o = "function" == typeof define && define.amd
            , a = "undefined" != typeof module && module.exports
            , n = "https:" == document.location.protocol ? "https:" : "http:";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")))
            , function() {
                var t, o = "mCustomScrollbar"
                    , a = {
                        setTop: 0
                        , setLeft: 0
                        , axis: "y"
                        , scrollbarPosition: "inside"
                        , scrollInertia: 950
                        , autoDraggerLength: !0
                        , alwaysShowScrollbar: 0
                        , snapOffset: 0
                        , mouseWheel: {
                            enable: !0
                            , scrollAmount: "auto"
                            , axis: "y"
                            , deltaFactor: "auto"
                            , disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                        }
                        , scrollButtons: {
                            scrollType: "stepless"
                            , scrollAmount: "auto"
                        }
                        , keyboard: {
                            enable: !0
                            , scrollType: "stepless"
                            , scrollAmount: "auto"
                        }
                        , contentTouchScroll: 25
                        , documentTouchScroll: !0
                        , advanced: {
                            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']"
                            , updateOnContentResize: !0
                            , updateOnImageLoad: "auto"
                            , autoUpdateTimeout: 60
                        }
                        , theme: "light"
                        , callbacks: {
                            onTotalScrollOffset: 0
                            , onTotalScrollBackOffset: 0
                            , alwaysTriggerOffsets: !0
                        }
                    }
                    , n = 0
                    , i = {}
                    , r = window.attachEvent && !window.addEventListener ? 1 : 0
                    , l = !1
                    , s = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"]
                    , c = {
                        init: function(t) {
                            var t = e.extend(!0, {}, a, t)
                                , o = d.call(this);
                            if (t.live) {
                                var r = t.liveSelector || this.selector || ".mCustomScrollbar"
                                    , l = e(r);
                                if ("off" === t.live) return void f(r);
                                i[r] = setTimeout(function() {
                                    l.mCustomScrollbar(t), "once" === t.live && l.length && f(r)
                                }, 500)
                            } else f(r);
                            return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                                enable: !0
                                , scrollAmount: "auto"
                                , axis: "y"
                                , preventDefault: !1
                                , deltaFactor: "auto"
                                , normalizeDelta: !1
                                , invert: !1
                            }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = h(t.scrollButtons.scrollType), u(t), e(o).each(function() {
                                var o = e(this);
                                if (!o.data("mCS")) {
                                    o.data("mCS", {
                                        idx: ++n
                                        , opt: t
                                        , scrollRatio: {
                                            y: null
                                            , x: null
                                        }
                                        , overflowed: null
                                        , contentReset: {
                                            y: null
                                            , x: null
                                        }
                                        , bindEvents: !1
                                        , tweenRunning: !1
                                        , sequential: {}
                                        , langDir: o.css("direction")
                                        , cbOffsets: null
                                        , trigger: null
                                        , poll: {
                                            size: {
                                                o: 0
                                                , n: 0
                                            }
                                            , img: {
                                                o: 0
                                                , n: 0
                                            }
                                            , change: {
                                                o: 0
                                                , n: 0
                                            }
                                        }
                                    });
                                    var a = o.data("mCS")
                                        , i = a.opt
                                        , r = o.data("mcs-axis")
                                        , l = o.data("mcs-scrollbar-position")
                                        , d = o.data("mcs-theme");
                                    r && (i.axis = r), l && (i.scrollbarPosition = l), d && (i.theme = d, u(i)), p.call(this), a && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + a.idx + "_container img:not(." + s[2] + ")").addClass(s[2]), c.update.call(null, o)
                                }
                            })
                        }
                        , update: function(t, o) {
                            return e(t || d.call(this)).each(function() {
                                var t = e(this);
                                if (t.data("mCS")) {
                                    var a = t.data("mCS")
                                        , n = a.opt
                                        , i = e("#mCSB_" + a.idx + "_container")
                                        , r = e("#mCSB_" + a.idx)
                                        , l = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                                    if (!i.length) return;
                                    a.tweenRunning && N(t), o && a && n.callbacks.onBeforeUpdate && "function" == typeof n.callbacks.onBeforeUpdate && n.callbacks.onBeforeUpdate.call(this), t.hasClass(s[3]) && t.removeClass(s[3]), t.hasClass(s[4]) && t.removeClass(s[4]), r.css("max-height", "none"), r.height() !== t.height() && r.css("max-height", t.height()), v.call(this), "y" === n.axis || n.advanced.autoExpandHorizontalScroll || i.css("width", g(i)), a.overflowed = C.call(this), T.call(this), n.autoDraggerLength && S.call(this), _.call(this), y.call(this);
                                    var c = [Math.abs(i[0].offsetTop), Math.abs(i[0].offsetLeft)];
                                    "x" !== n.axis && (a.overflowed[0] ? l[0].height() > l[0].parent().height() ? b.call(this) : (V(t, c[0].toString(), {
                                        dir: "y"
                                        , dur: 0
                                        , overwrite: "none"
                                    }), a.contentReset.y = null) : (b.call(this), "y" === n.axis ? B.call(this) : "yx" === n.axis && a.overflowed[1] && V(t, c[1].toString(), {
                                        dir: "x"
                                        , dur: 0
                                        , overwrite: "none"
                                    }))), "y" !== n.axis && (a.overflowed[1] ? l[1].width() > l[1].parent().width() ? b.call(this) : (V(t, c[1].toString(), {
                                        dir: "x"
                                        , dur: 0
                                        , overwrite: "none"
                                    }), a.contentReset.x = null) : (b.call(this), "x" === n.axis ? B.call(this) : "yx" === n.axis && a.overflowed[0] && V(t, c[0].toString(), {
                                        dir: "y"
                                        , dur: 0
                                        , overwrite: "none"
                                    }))), o && a && (2 === o && n.callbacks.onImageLoad && "function" == typeof n.callbacks.onImageLoad ? n.callbacks.onImageLoad.call(this) : 3 === o && n.callbacks.onSelectorChange && "function" == typeof n.callbacks.onSelectorChange ? n.callbacks.onSelectorChange.call(this) : n.callbacks.onUpdate && "function" == typeof n.callbacks.onUpdate && n.callbacks.onUpdate.call(this)), Y.call(this)
                                }
                            })
                        }
                        , scrollTo: function(t, o) {
                            if (void 0 !== t && null != t) {
                                return e(d.call(this)).each(function() {
                                    var a = e(this);
                                    if (a.data("mCS")) {
                                        var n = a.data("mCS")
                                            , i = n.opt
                                            , r = {
                                                trigger: "external"
                                                , scrollInertia: i.scrollInertia
                                                , scrollEasing: "mcsEaseInOut"
                                                , moveDragger: !1
                                                , timeout: 60
                                                , callbacks: !0
                                                , onStart: !0
                                                , onUpdate: !0
                                                , onComplete: !0
                                            }
                                            , l = e.extend(!0, {}, r, o)
                                            , s = q.call(this, t)
                                            , c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                        s[0] = j.call(this, s[0], "y"), s[1] = j.call(this, s[1], "x"), l.moveDragger && (s[0] *= n.scrollRatio.y, s[1] *= n.scrollRatio.x), l.dur = oe() ? 0 : c, setTimeout(function() {
                                            null !== s[0] && void 0 !== s[0] && "x" !== i.axis && n.overflowed[0] && (l.dir = "y", l.overwrite = "all", V(a, s[0].toString(), l)), null !== s[1] && void 0 !== s[1] && "y" !== i.axis && n.overflowed[1] && (l.dir = "x", l.overwrite = "none", V(a, s[1].toString(), l))
                                        }, l.timeout)
                                    }
                                })
                            }
                        }
                        , stop: function() {
                            return e(d.call(this)).each(function() {
                                var t = e(this);
                                t.data("mCS") && N(t)
                            })
                        }
                        , disable: function(t) {
                            return e(d.call(this)).each(function() {
                                var o = e(this);
                                o.data("mCS") && (o.data("mCS"), Y.call(this, "remove"), B.call(this), t && b.call(this), T.call(this, !0), o.addClass(s[3]))
                            })
                        }
                        , destroy: function() {
                            var t = d.call(this);
                            return e(t).each(function() {
                                var a = e(this);
                                if (a.data("mCS")) {
                                    var n = a.data("mCS")
                                        , i = n.opt
                                        , r = e("#mCSB_" + n.idx)
                                        , l = e("#mCSB_" + n.idx + "_container")
                                        , c = e(".mCSB_" + n.idx + "_scrollbar");
                                    i.live && f(i.liveSelector || e(t).selector), Y.call(this, "remove"), B.call(this), b.call(this), a.removeData("mCS"), K(this, "mcs"), c.remove(), l.find("img." + s[2]).removeClass(s[2]), r.replaceWith(l.contents()), a.removeClass(o + " _mCS_" + n.idx + " " + s[6] + " " + s[7] + " " + s[5] + " " + s[3]).addClass(s[4])
                                }
                            })
                        }
                    }
                    , d = function() {
                        return "object" != typeof e(this) || e(this).length < 1 ? ".mCustomScrollbar" : this
                    }
                    , u = function(t) {
                        var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
                            , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
                            , n = ["minimal", "minimal-dark"]
                            , i = ["minimal", "minimal-dark"]
                            , r = ["minimal", "minimal-dark"];
                        t.autoDraggerLength = !(e.inArray(t.theme, o) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, a) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, n) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
                    }
                    , f = function(e) {
                        i[e] && (clearTimeout(i[e]), K(i, e))
                    }
                    , m = function(e) {
                        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
                    }
                    , h = function(e) {
                        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
                    }
                    , p = function() {
                        var t = e(this)
                            , a = t.data("mCS")
                            , n = a.opt
                            , i = n.autoExpandScrollbar ? " " + s[1] + "_expand" : ""
                            , r = ["<div id='mCSB_" + a.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_vertical" + i + "'><div class='" + s[12] + "'><div id='mCSB_" + a.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + a.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_horizontal" + i + "'><div class='" + s[12] + "'><div id='mCSB_" + a.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
                            , l = "yx" === n.axis ? "mCSB_vertical_horizontal" : "x" === n.axis ? "mCSB_horizontal" : "mCSB_vertical"
                            , c = "yx" === n.axis ? r[0] + r[1] : "x" === n.axis ? r[1] : r[0]
                            , d = "yx" === n.axis ? "<div id='mCSB_" + a.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
                            , u = n.autoHideScrollbar ? " " + s[6] : ""
                            , f = "x" !== n.axis && "rtl" === a.langDir ? " " + s[7] : "";
                        n.setWidth && t.css("width", n.setWidth), n.setHeight && t.css("height", n.setHeight), n.setLeft = "y" !== n.axis && "rtl" === a.langDir ? "989999px" : n.setLeft, t.addClass(o + " _mCS_" + a.idx + u + f).wrapInner("<div id='mCSB_" + a.idx + "' class='mCustomScrollBox mCS-" + n.theme + " " + l + "'><div id='mCSB_" + a.idx + "_container' class='mCSB_container' style='position:relative; top:" + n.setTop + "; left:" + n.setLeft + ";' dir='" + a.langDir + "' /></div>");
                        var m = e("#mCSB_" + a.idx)
                            , h = e("#mCSB_" + a.idx + "_container");
                        "y" === n.axis || n.advanced.autoExpandHorizontalScroll || h.css("width", g(h)), "outside" === n.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), h.wrap(d)), x.call(this);
                        var p = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                        p[0].css("min-height", p[0].height()), p[1].css("min-width", p[1].width())
                    }
                    , g = function(t) {
                        var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                                return e(this).outerWidth(!0)
                            }).get())]
                            , a = t.parent().width();
                        return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
                    }
                    , v = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = o.opt
                            , n = e("#mCSB_" + o.idx + "_container");
                        if (a.advanced.autoExpandHorizontalScroll && "y" !== a.axis) {
                            n.css({
                                width: "auto"
                                , "min-width": 0
                                , "overflow-x": "scroll"
                            });
                            var i = Math.ceil(n[0].scrollWidth);
                            3 === a.advanced.autoExpandHorizontalScroll || 2 !== a.advanced.autoExpandHorizontalScroll && i > n.parent().width() ? n.css({
                                width: i
                                , "min-width": "100%"
                                , "overflow-x": "inherit"
                            }) : n.css({
                                "overflow-x": "inherit"
                                , position: "absolute"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left)
                                , "min-width": "100%"
                                , position: "relative"
                            }).unwrap()
                        }
                    }
                    , x = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = o.opt
                            , n = e(".mCSB_" + o.idx + "_scrollbar:first")
                            , i = ee(a.scrollButtons.tabindex) ? "tabindex='" + a.scrollButtons.tabindex + "'" : ""
                            , r = ["<a href='#' class='" + s[13] + "' " + i + " />", "<a href='#' class='" + s[14] + "' " + i + " />", "<a href='#' class='" + s[15] + "' " + i + " />", "<a href='#' class='" + s[16] + "' " + i + " />"]
                            , l = ["x" === a.axis ? r[2] : r[0], "x" === a.axis ? r[3] : r[1], r[2], r[3]];
                        a.scrollButtons.enable && n.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                    }
                    , S = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = e("#mCSB_" + o.idx)
                            , n = e("#mCSB_" + o.idx + "_container")
                            , i = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
                            , l = [a.height() / n.outerHeight(!1), a.width() / n.outerWidth(!1)]
                            , s = [parseInt(i[0].css("min-height")), Math.round(l[0] * i[0].parent().height()), parseInt(i[1].css("min-width")), Math.round(l[1] * i[1].parent().width())]
                            , c = r && s[1] < s[0] ? s[0] : s[1]
                            , d = r && s[3] < s[2] ? s[2] : s[3];
                        i[0].css({
                            height: c
                            , "max-height": i[0].parent().height() - 10
                        }).find(".mCSB_dragger_bar").css({
                            "line-height": s[0] + "px"
                        }), i[1].css({
                            width: d
                            , "max-width": i[1].parent().width() - 10
                        })
                    }
                    , _ = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = e("#mCSB_" + o.idx)
                            , n = e("#mCSB_" + o.idx + "_container")
                            , i = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
                            , r = [n.outerHeight(!1) - a.height(), n.outerWidth(!1) - a.width()]
                            , l = [r[0] / (i[0].parent().height() - i[0].height()), r[1] / (i[1].parent().width() - i[1].width())];
                        o.scrollRatio = {
                            y: l[0]
                            , x: l[1]
                        }
                    }
                    , w = function(e, t, o) {
                        var a = o ? s[0] + "_expanded" : ""
                            , n = e.closest(".mCSB_scrollTools");
                        "active" === t ? (e.toggleClass(s[0] + " " + a), n.toggleClass(s[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(s[0]), n.removeClass(s[1])) : (e.addClass(s[0]), n.addClass(s[1])))
                    }
                    , C = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = e("#mCSB_" + o.idx)
                            , n = e("#mCSB_" + o.idx + "_container")
                            , i = null == o.overflowed ? n.height() : n.outerHeight(!1)
                            , r = null == o.overflowed ? n.width() : n.outerWidth(!1)
                            , l = n[0].scrollHeight
                            , s = n[0].scrollWidth;
                        return l > i && (i = l), s > r && (r = s), [i > a.height(), r > a.width()]
                    }
                    , b = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = o.opt
                            , n = e("#mCSB_" + o.idx)
                            , i = e("#mCSB_" + o.idx + "_container")
                            , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                        if (N(t), ("x" !== a.axis && !o.overflowed[0] || "y" === a.axis && o.overflowed[0]) && (r[0].add(i).css("top", 0), V(t, "_resetY")), "y" !== a.axis && !o.overflowed[1] || "x" === a.axis && o.overflowed[1]) {
                            var l = dx = 0;
                            "rtl" === o.langDir && (l = n.width() - i.outerWidth(!1), dx = Math.abs(l / o.scrollRatio.x)), i.css("left", l), r[1].css("left", dx), V(t, "_resetX")
                        }
                    }
                    , y = function() {
                        function t() {
                            i = setTimeout(function() {
                                e.event.special.mousewheel ? (clearTimeout(i), D.call(o[0])) : t()
                            }, 100)
                        }
                        var o = e(this)
                            , a = o.data("mCS")
                            , n = a.opt;
                        if (!a.bindEvents) {
                            if (M.call(this), n.contentTouchScroll && O.call(this), I.call(this), n.mouseWheel.enable) {
                                var i;
                                t()
                            }
                            L.call(this), P.call(this), n.advanced.autoScrollOnFocus && z.call(this), n.scrollButtons.enable && H.call(this), n.keyboard.enable && U.call(this), a.bindEvents = !0
                        }
                    }
                    , B = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = o.opt
                            , n = "mCS_" + o.idx
                            , i = ".mCSB_" + o.idx + "_scrollbar"
                            , r = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + i + " ." + s[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + i + ">a")
                            , l = e("#mCSB_" + o.idx + "_container");
                        a.advanced.releaseDraggableSelectors && r.add(e(a.advanced.releaseDraggableSelectors)), a.advanced.extraDraggableSelectors && r.add(e(a.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!W() || top.document)).unbind("." + n), r.each(function() {
                            e(this).unbind("." + n)
                        }), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), K(o.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), K(l[0], "onCompleteTimeout"), o.bindEvents = !1)
                    }
                    , T = function(t) {
                        var o = e(this)
                            , a = o.data("mCS")
                            , n = a.opt
                            , i = e("#mCSB_" + a.idx + "_container_wrapper")
                            , r = i.length ? i : e("#mCSB_" + a.idx + "_container")
                            , l = [e("#mCSB_" + a.idx + "_scrollbar_vertical"), e("#mCSB_" + a.idx + "_scrollbar_horizontal")]
                            , c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                        "x" !== n.axis && (a.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(s[8] + " " + s[10])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && c[0].css("display", "none"), r.removeClass(s[10])) : (l[0].css("display", "none"), r.addClass(s[10])), r.addClass(s[8]))), "y" !== n.axis && (a.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(s[9] + " " + s[11])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && c[1].css("display", "none"), r.removeClass(s[11])) : (l[1].css("display", "none"), r.addClass(s[11])), r.addClass(s[9]))), a.overflowed[0] || a.overflowed[1] ? o.removeClass(s[5]) : o.addClass(s[5])
                    }
                    , k = function(t) {
                        var o = t.type
                            , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
                            , n = W() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                        switch (o) {
                            case "pointerdown":
                            case "MSPointerDown":
                            case "pointermove":
                            case "MSPointerMove":
                            case "pointerup":
                            case "MSPointerUp":
                                return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                            case "touchstart":
                            case "touchmove":
                            case "touchend":
                                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                                    , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                            default:
                                return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
                        }
                    }
                    , M = function() {
                        function t(e, t, a, n) {
                            if (f[0].idleTimer = c.scrollInertia < 233 ? 250 : 0, o.attr("id") === u[1]) var r = "x"
                                , l = (o[0].offsetLeft - t + n) * s.scrollRatio.x;
                            else var r = "y"
                                , l = (o[0].offsetTop - e + a) * s.scrollRatio.y;
                            V(i, l.toString(), {
                                dir: r
                                , drag: !0
                            })
                        }
                        var o, a, n, i = e(this)
                            , s = i.data("mCS")
                            , c = s.opt
                            , d = "mCS_" + s.idx
                            , u = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"]
                            , f = e("#mCSB_" + s.idx + "_container")
                            , m = e("#" + u[0] + ",#" + u[1])
                            , h = c.advanced.releaseDraggableSelectors ? m.add(e(c.advanced.releaseDraggableSelectors)) : m
                            , p = c.advanced.extraDraggableSelectors ? e(!W() || top.document).add(e(c.advanced.extraDraggableSelectors)) : e(!W() || top.document);
                        m.bind("contextmenu." + d, function(e) {
                            e.preventDefault()
                        }).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function(t) {
                            if (t.stopImmediatePropagation(), t.preventDefault(), Z(t)) {
                                l = !0, r && (document.onselectstart = function() {
                                    return !1
                                }), R.call(f, !1), N(i), o = e(this);
                                var s = o.offset()
                                    , d = k(t)[0] - s.top
                                    , u = k(t)[1] - s.left
                                    , m = o.height() + s.top
                                    , h = o.width() + s.left;
                                d < m && d > 0 && u < h && u > 0 && (a = d, n = u), w(o, "active", c.autoExpandScrollbar)
                            }
                        }).bind("touchmove." + d, function(e) {
                            e.stopImmediatePropagation(), e.preventDefault();
                            var i = o.offset();
                            t(a, n, k(e)[0] - i.top, k(e)[1] - i.left)
                        }), e(document).add(p).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, function(e) {
                            if (o) {
                                var i = o.offset()
                                    , r = k(e)[0] - i.top
                                    , l = k(e)[1] - i.left;
                                if (a === r && n === l) return;
                                t(a, n, r, l)
                            }
                        }).add(h).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, function(e) {
                            o && (w(o, "active", c.autoExpandScrollbar), o = null), l = !1, r && (document.onselectstart = null), R.call(f, !0)
                        })
                    }
                    , O = function() {
                        function o(e) {
                            if (!$(e) || l || k(e)[2]) return void(t = 0);
                            t = 1, w = 0, C = 0, c = 1, b.removeClass("mCS_touch_action");
                            var o = O.offset();
                            d = k(e)[0] - o.top, u = k(e)[1] - o.left, L = [k(e)[0], k(e)[1]]
                        }

                        function a(e) {
                            if ($(e) && !l && !k(e)[2] && (B.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || w) && c)) {
                                p = G();
                                var t = M.offset()
                                    , o = k(e)[0] - t.top
                                    , a = k(e)[1] - t.left;
                                if (D.push(o), E.push(a), L[2] = Math.abs(k(e)[0] - L[0]), L[3] = Math.abs(k(e)[1] - L[1]), y.overflowed[0]) var n = I[0].parent().height() - I[0].height()
                                    , i = d - o > 0 && o - d > -(n * y.scrollRatio.y) && (2 * L[3] < L[2] || "yx" === B.axis);
                                if (y.overflowed[1]) var r = I[1].parent().width() - I[1].width()
                                    , f = u - a > 0 && a - u > -(r * y.scrollRatio.x) && (2 * L[2] < L[3] || "yx" === B.axis);
                                i || f ? (H || e.preventDefault(), w = 1) : (C = 1, b.addClass("mCS_touch_action")), H && e.preventDefault(), S = "yx" === B.axis ? [d - o, u - a] : "x" === B.axis ? [null, u - a] : [d - o, null], O[0].idleTimer = 250, y.overflowed[0] && s(S[0], R, "mcsLinearOut", "y", "all", !0), y.overflowed[1] && s(S[1], R, "mcsLinearOut", "x", A, !0)
                            }
                        }

                        function n(e) {
                            if (!$(e) || l || k(e)[2]) return void(t = 0);
                            t = 1, e.stopImmediatePropagation(), N(b), h = G();
                            var o = M.offset();
                            f = k(e)[0] - o.top, m = k(e)[1] - o.left, D = [], E = []
                        }

                        function i(e) {
                            if ($(e) && !l && !k(e)[2]) {
                                c = 0, e.stopImmediatePropagation(), w = 0, C = 0, g = G();
                                var t = M.offset()
                                    , o = k(e)[0] - t.top
                                    , a = k(e)[1] - t.left;
                                if (!(g - p > 30)) {
                                    x = 1e3 / (g - h);
                                    var n = x < 2.5
                                        , i = n ? [D[D.length - 2], E[E.length - 2]] : [0, 0];
                                    v = n ? [o - i[0], a - i[1]] : [o - f, a - m];
                                    var d = [Math.abs(v[0]), Math.abs(v[1])];
                                    x = n ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [x, x];
                                    var u = [Math.abs(O[0].offsetTop) - v[0] * r(d[0] / x[0], x[0]), Math.abs(O[0].offsetLeft) - v[1] * r(d[1] / x[1], x[1])];
                                    S = "yx" === B.axis ? [u[0], u[1]] : "x" === B.axis ? [null, u[1]] : [u[0], null], _ = [4 * d[0] + B.scrollInertia, 4 * d[1] + B.scrollInertia];
                                    var b = parseInt(B.contentTouchScroll) || 0;
                                    S[0] = d[0] > b ? S[0] : 0, S[1] = d[1] > b ? S[1] : 0, y.overflowed[0] && s(S[0], _[0], "mcsEaseOut", "y", A, !1), y.overflowed[1] && s(S[1], _[1], "mcsEaseOut", "x", A, !1)
                                }
                            }
                        }

                        function r(e, t) {
                            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                            return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
                        }

                        function s(e, t, o, a, n, i) {
                            e && V(b, e.toString(), {
                                dur: t
                                , scrollEasing: o
                                , dir: a
                                , overwrite: n
                                , drag: i
                            })
                        }
                        var c, d, u, f, m, h, p, g, v, x, S, _, w, C, b = e(this)
                            , y = b.data("mCS")
                            , B = y.opt
                            , T = "mCS_" + y.idx
                            , M = e("#mCSB_" + y.idx)
                            , O = e("#mCSB_" + y.idx + "_container")
                            , I = [e("#mCSB_" + y.idx + "_dragger_vertical"), e("#mCSB_" + y.idx + "_dragger_horizontal")]
                            , D = []
                            , E = []
                            , R = 0
                            , A = "yx" === B.axis ? "none" : "all"
                            , L = []
                            , z = O.find("iframe")
                            , P = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T]
                            , H = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                        O.bind(P[0], function(e) {
                            o(e)
                        }).bind(P[1], function(e) {
                            a(e)
                        }), M.bind(P[0], function(e) {
                            n(e)
                        }).bind(P[2], function(e) {
                            i(e)
                        }), z.length && z.each(function() {
                            e(this).bind("load", function() {
                                W(this) && e(this.contentDocument || this.contentWindow.document).bind(P[0], function(e) {
                                    o(e), n(e)
                                }).bind(P[1], function(e) {
                                    a(e)
                                }).bind(P[2], function(e) {
                                    i(e)
                                })
                            })
                        })
                    }
                    , I = function() {
                        function o() {
                            return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                        }

                        function a(e, t, o) {
                            c.type = o && n ? "stepped" : "stepless", c.scrollAmount = 10, F(i, e, t, "mcsLinearOut", o ? 60 : null)
                        }
                        var n, i = e(this)
                            , r = i.data("mCS")
                            , s = r.opt
                            , c = r.sequential
                            , d = "mCS_" + r.idx
                            , u = e("#mCSB_" + r.idx + "_container")
                            , f = u.parent();
                        u.bind("mousedown." + d, function(e) {
                            t || n || (n = 1, l = !0)
                        }).add(document).bind("mousemove." + d, function(e) {
                            if (!t && n && o()) {
                                var i = u.offset()
                                    , l = k(e)[0] - i.top + u[0].offsetTop
                                    , d = k(e)[1] - i.left + u[0].offsetLeft;
                                l > 0 && l < f.height() && d > 0 && d < f.width() ? c.step && a("off", null, "stepped") : ("x" !== s.axis && r.overflowed[0] && (l < 0 ? a("on", 38) : l > f.height() && a("on", 40)), "y" !== s.axis && r.overflowed[1] && (d < 0 ? a("on", 37) : d > f.width() && a("on", 39)))
                            }
                        }).bind("mouseup." + d + " dragend." + d, function(e) {
                            t || (n && (n = 0, a("off", null)), l = !1)
                        })
                    }
                    , D = function() {
                        function t(t, i) {
                            if (N(o), !A(o, t.target)) {
                                var c = "auto" !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor) : r && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100
                                    , d = n.scrollInertia;
                                if ("x" === n.axis || "x" === n.mouseWheel.axis) var u = "x"
                                    , f = [Math.round(c * a.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)]
                                    , m = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0]
                                    , h = Math.abs(e("#mCSB_" + a.idx + "_container")[0].offsetLeft)
                                    , p = s[1][0].offsetLeft
                                    , g = s[1].parent().width() - s[1].width()
                                    , v = "y" === n.mouseWheel.axis ? t.deltaY || i : t.deltaX;
                                else var u = "y"
                                    , f = [Math.round(c * a.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)]
                                    , m = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0]
                                    , h = Math.abs(e("#mCSB_" + a.idx + "_container")[0].offsetTop)
                                    , p = s[0][0].offsetTop
                                    , g = s[0].parent().height() - s[0].height()
                                    , v = t.deltaY || i;
                                "y" === u && !a.overflowed[0] || "x" === u && !a.overflowed[1] || ((n.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), n.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (v > 0 && 0 !== p || v < 0 && p !== g || n.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !n.mouseWheel.normalizeDelta && (m = t.deltaFactor, d = 17), V(o, (h - v * m).toString(), {
                                    dir: u
                                    , dur: d
                                }))
                            }
                        }
                        if (e(this).data("mCS")) {
                            var o = e(this)
                                , a = o.data("mCS")
                                , n = a.opt
                                , i = "mCS_" + a.idx
                                , l = e("#mCSB_" + a.idx)
                                , s = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")]
                                , c = e("#mCSB_" + a.idx + "_container").find("iframe");
                            c.length && c.each(function() {
                                e(this).bind("load", function() {
                                    W(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + i, function(e, o) {
                                        t(e, o)
                                    })
                                })
                            }), l.bind("mousewheel." + i, function(e, o) {
                                t(e, o)
                            })
                        }
                    }
                    , E = new Object
                    , W = function(t) {
                        var o = !1
                            , a = !1
                            , n = null;
                        if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== E[a]) return E[a];
                        if (t) {
                            try {
                                var i = t.contentDocument || t.contentWindow.document;
                                n = i.body.innerHTML
                            } catch (e) {}
                            o = null !== n
                        } else {
                            try {
                                var i = top.document;
                                n = i.body.innerHTML
                            } catch (e) {}
                            o = null !== n
                        }
                        return a !== !1 && (E[a] = o), o
                    }
                    , R = function(e) {
                        var t = this.find("iframe");
                        if (t.length) {
                            var o = e ? "auto" : "none";
                            t.css("pointer-events", o)
                        }
                    }
                    , A = function(t, o) {
                        var a = o.nodeName.toLowerCase()
                            , n = t.data("mCS").opt.mouseWheel.disableOver
                            , i = ["select", "textarea"];
                        return e.inArray(a, n) > -1 && !(e.inArray(a, i) > -1 && !e(o).is(":focus"))
                    }
                    , L = function() {
                        var t, o = e(this)
                            , a = o.data("mCS")
                            , n = "mCS_" + a.idx
                            , i = e("#mCSB_" + a.idx + "_container")
                            , r = i.parent()
                            , c = e(".mCSB_" + a.idx + "_scrollbar ." + s[12]);
                        c.bind("mousedown." + n + " touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(o) {
                            l = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
                        }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function(e) {
                            l = !1
                        }).bind("click." + n, function(n) {
                            if (t && (t = 0, e(n.target).hasClass(s[12]) || e(n.target).hasClass("mCSB_draggerRail"))) {
                                N(o);
                                var l = e(this)
                                    , c = l.find(".mCSB_dragger");
                                if (l.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!a.overflowed[1]) return;
                                    var d = "x"
                                        , u = n.pageX > c.offset().left ? -1 : 1
                                        , f = Math.abs(i[0].offsetLeft) - u * (.9 * r.width())
                                } else {
                                    if (!a.overflowed[0]) return;
                                    var d = "y"
                                        , u = n.pageY > c.offset().top ? -1 : 1
                                        , f = Math.abs(i[0].offsetTop) - u * (.9 * r.height())
                                }
                                V(o, f.toString(), {
                                    dir: d
                                    , scrollEasing: "mcsEaseInOut"
                                })
                            }
                        })
                    }
                    , z = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = o.opt
                            , n = "mCS_" + o.idx
                            , i = e("#mCSB_" + o.idx + "_container")
                            , r = i.parent();
                        i.bind("focusin." + n, function(o) {
                            var n = e(document.activeElement)
                                , l = i.find(".mCustomScrollBox").length;
                            n.is(a.advanced.autoScrollOnFocus) && (N(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = l ? 17 * l : 0, t[0]._focusTimeout = setTimeout(function() {
                                var e = [te(n)[0], te(n)[1]]
                                    , o = [i[0].offsetTop, i[0].offsetLeft]
                                    , l = [o[0] + e[0] >= 0 && o[0] + e[0] < r.height() - n.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < r.width() - n.outerWidth(!1)]
                                    , s = "yx" !== a.axis || l[0] || l[1] ? "all" : "none";
                                "x" === a.axis || l[0] || V(t, e[0].toString(), {
                                    dir: "y"
                                    , scrollEasing: "mcsEaseInOut"
                                    , overwrite: s
                                    , dur: 0
                                }), "y" === a.axis || l[1] || V(t, e[1].toString(), {
                                    dir: "x"
                                    , scrollEasing: "mcsEaseInOut"
                                    , overwrite: s
                                    , dur: 0
                                })
                            }, t[0]._focusTimer))
                        })
                    }
                    , P = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = "mCS_" + o.idx
                            , n = e("#mCSB_" + o.idx + "_container").parent();
                        n.bind("scroll." + a, function(t) {
                            0 === n.scrollTop() && 0 === n.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
                        })
                    }
                    , H = function() {
                        var t = e(this)
                            , o = t.data("mCS")
                            , a = o.opt
                            , n = o.sequential
                            , i = "mCS_" + o.idx;
                        e(".mCSB_" + o.idx + "_scrollbar>a").bind("contextmenu." + i, function(e) {
                            e.preventDefault()
                        }).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i + " mouseup." + i + " touchend." + i + " pointerup." + i + " MSPointerUp." + i + " mouseout." + i + " pointerout." + i + " MSPointerOut." + i + " click." + i, function(i) {
                            function r(e, o) {
                                n.scrollAmount = a.scrollButtons.scrollAmount, F(t, e, o)
                            }
                            if (i.preventDefault(), Z(i)) {
                                var s = e(this).attr("class");
                                switch (n.type = a.scrollButtons.scrollType, i.type) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === n.type) return;
                                        l = !0, o.tweenRunning = !1, r("on", s);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === n.type) return;
                                        l = !1, n.dir && r("off", s);
                                        break;
                                    case "click":
                                        if ("stepped" !== n.type || o.tweenRunning) return;
                                        r("on", s)
                                }
                            }
                        })
                    }
                    , U = function() {
                        function t(t) {
                            function r(e, t) {
                                i.type = n.keyboard.scrollType, i.scrollAmount = n.keyboard.scrollAmount, "stepped" === i.type && a.tweenRunning || F(o, e, t)
                            }
                            switch (t.type) {
                                case "blur":
                                    a.tweenRunning && i.dir && r("off", null);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var l = t.keyCode ? t.keyCode : t.which
                                        , u = "on";
                                    if ("x" !== n.axis && (38 === l || 40 === l) || "y" !== n.axis && (37 === l || 39 === l)) {
                                        if ((38 === l || 40 === l) && !a.overflowed[0] || (37 === l || 39 === l) && !a.overflowed[1]) return;
                                        "keyup" === t.type && (u = "off"), e(document.activeElement).is(d) || (t.preventDefault(), t.stopImmediatePropagation(), r(u, l))
                                    } else if (33 === l || 34 === l) {
                                        if ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                            N(o);
                                            var f = 34 === l ? -1 : 1;
                                            if ("x" === n.axis || "yx" === n.axis && a.overflowed[1] && !a.overflowed[0]) var m = "x"
                                                , h = Math.abs(s[0].offsetLeft) - f * (.9 * c.width());
                                            else var m = "y"
                                                , h = Math.abs(s[0].offsetTop) - f * (.9 * c.height());
                                            V(o, h.toString(), {
                                                dir: m
                                                , scrollEasing: "mcsEaseInOut"
                                            })
                                        }
                                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(d) && ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                        if ("x" === n.axis || "yx" === n.axis && a.overflowed[1] && !a.overflowed[0]) var m = "x"
                                            , h = 35 === l ? Math.abs(c.width() - s.outerWidth(!1)) : 0;
                                        else var m = "y"
                                            , h = 35 === l ? Math.abs(c.height() - s.outerHeight(!1)) : 0;
                                        V(o, h.toString(), {
                                            dir: m
                                            , scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                            }
                        }
                        var o = e(this)
                            , a = o.data("mCS")
                            , n = a.opt
                            , i = a.sequential
                            , r = "mCS_" + a.idx
                            , l = e("#mCSB_" + a.idx)
                            , s = e("#mCSB_" + a.idx + "_container")
                            , c = s.parent()
                            , d = "input,textarea,select,datalist,keygen,[contenteditable='true']"
                            , u = s.find("iframe")
                            , f = ["blur." + r + " keydown." + r + " keyup." + r];
                        u.length && u.each(function() {
                            e(this).bind("load", function() {
                                W(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], function(e) {
                                    t(e)
                                })
                            })
                        }), l.attr("tabindex", "0").bind(f[0], function(e) {
                            t(e)
                        })
                    }
                    , F = function(t, o, a, n, i) {
                        function r(e) {
                            c.snapAmount && (d.scrollAmount = c.snapAmount instanceof Array ? "x" === d.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                            var o = "stepped" !== d.type
                                , a = i ? i : e ? o ? m / 1.5 : h : 1e3 / 60
                                , s = e ? o ? 7.5 : 40 : 2.5
                                , f = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)]
                                , p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x]
                                , g = "x" === d.dir[0] ? f[1] + d.dir[1] * (p[1] * s) : f[0] + d.dir[1] * (p[0] * s)
                                , v = "x" === d.dir[0] ? f[1] + d.dir[1] * parseInt(d.scrollAmount) : f[0] + d.dir[1] * parseInt(d.scrollAmount)
                                , x = "auto" !== d.scrollAmount ? v : g
                                , S = n ? n : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                                , _ = !!e;
                            if (e && a < 17 && (x = "x" === d.dir[0] ? f[1] : f[0]), V(t, x.toString(), {
                                    dir: d.dir[0]
                                    , scrollEasing: S
                                    , dur: a
                                    , onComplete: _
                                }), e) return void(d.dir = !1);
                            clearTimeout(d.step), d.step = setTimeout(function() {
                                r()
                            }, a)
                        }
                        var l = t.data("mCS")
                            , c = l.opt
                            , d = l.sequential
                            , u = e("#mCSB_" + l.idx + "_container")
                            , f = "stepped" === d.type
                            , m = c.scrollInertia < 26 ? 26 : c.scrollInertia
                            , h = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                        switch (o) {
                            case "on":
                                if (d.dir = [a === s[16] || a === s[15] || 39 === a || 37 === a ? "x" : "y", a === s[13] || a === s[15] || 38 === a || 37 === a ? -1 : 1], N(t), ee(a) && "stepped" === d.type) return;
                                r(f);
                                break;
                            case "off":
                                ! function() {
                                    clearTimeout(d.step), K(d, "step"), N(t)
                                }(), (f || l.tweenRunning && d.dir) && r(!0)
                        }
                    }
                    , q = function(t) {
                        var o = e(this).data("mCS").opt
                            , a = [];
                        return "function" == typeof t && (t = t()), t instanceof Array ? a = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (a[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, a[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof a[0] && (a[0] = a[0]()), "function" == typeof a[1] && (a[1] = a[1]()), a
                    }
                    , j = function(t, o) {
                        if (null != t && void 0 !== t) {
                            var a = e(this)
                                , n = a.data("mCS")
                                , i = n.opt
                                , r = e("#mCSB_" + n.idx + "_container")
                                , l = r.parent()
                                , s = typeof t;
                            o || (o = "x" === i.axis ? "x" : "y");
                            var d = "x" === o ? r.outerWidth(!1) - l.width() : r.outerHeight(!1) - l.height()
                                , u = "x" === o ? r[0].offsetLeft : r[0].offsetTop
                                , f = "x" === o ? "left" : "top";
                            switch (s) {
                                case "function":
                                    return t();
                                case "object":
                                    var m = t.jquery ? t : e(t);
                                    if (!m.length) return;
                                    return "x" === o ? te(m)[1] : te(m)[0];
                                case "string":
                                case "number":
                                    if (ee(t)) return Math.abs(t);
                                    if (t.indexOf("%") !== -1) return Math.abs(d * parseInt(t) / 100);
                                    if (t.indexOf("-=") !== -1) return Math.abs(u - parseInt(t.split("-=")[1]));
                                    if (t.indexOf("+=") !== -1) {
                                        var h = u + parseInt(t.split("+=")[1]);
                                        return h >= 0 ? 0 : Math.abs(h)
                                    }
                                    if (t.indexOf("px") !== -1 && ee(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                    if ("top" === t || "left" === t) return 0;
                                    if ("bottom" === t) return Math.abs(l.height() - r.outerHeight(!1));
                                    if ("right" === t) return Math.abs(l.width() - r.outerWidth(!1));
                                    if ("first" === t || "last" === t) {
                                        var m = r.find(":" + t);
                                        return "x" === o ? te(m)[1] : te(m)[0]
                                    }
                                    return e(t).length ? "x" === o ? te(e(t))[1] : te(e(t))[0] : (r.css(f, t), void c.update.call(null, a[0]))
                            }
                        }
                    }
                    , Y = function(t) {
                        function o() {
                            if (clearTimeout(u[0].autoUpdate), 0 === r.parents("html").length) return void(r = null);
                            u[0].autoUpdate = setTimeout(function() {
                                return d.advanced.updateOnSelectorChange && (l.poll.change.n = n(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void i(3)) : d.advanced.updateOnContentResize && (l.poll.size.n = r[0].scrollHeight + r[0].scrollWidth + u[0].offsetHeight + r[0].offsetHeight + r[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void i(1)) : !d.advanced.updateOnImageLoad || "auto" === d.advanced.updateOnImageLoad && "y" === d.axis || (l.poll.img.n = u.find("img").length, l.poll.img.n === l.poll.img.o) ? void((d.advanced.updateOnSelectorChange || d.advanced.updateOnContentResize || d.advanced.updateOnImageLoad) && o()) : (l.poll.img.o = l.poll.img.n, void u.find("img").each(function() {
                                    a(this)
                                }))
                            }, d.advanced.autoUpdateTimeout)
                        }

                        function a(t) {
                            function o() {
                                this.onload = null, e(t).addClass(s[2]), i(2)
                            }
                            if (e(t).hasClass(s[2])) return void i();
                            var a = new Image;
                            a.onload = function(e, t) {
                                return function() {
                                    return t.apply(e, arguments)
                                }
                            }(a, o), a.src = t.src
                        }

                        function n() {
                            d.advanced.updateOnSelectorChange === !0 && (d.advanced.updateOnSelectorChange = "*");
                            var e = 0
                                , t = u.find(d.advanced.updateOnSelectorChange);
                            return d.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                                e += this.offsetHeight + this.offsetWidth
                            }), e
                        }

                        function i(e) {
                            clearTimeout(u[0].autoUpdate), c.update.call(null, r[0], e)
                        }
                        var r = e(this)
                            , l = r.data("mCS")
                            , d = l.opt
                            , u = e("#mCSB_" + l.idx + "_container");
                        if (t) return clearTimeout(u[0].autoUpdate), void K(u[0], "autoUpdate");
                        o()
                    }
                    , X = function(e, t, o) {
                        return Math.round(e / t) * t - o
                    }
                    , N = function(t) {
                        var o = t.data("mCS");
                        e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal").each(function() {
                            J.call(this)
                        })
                    }
                    , V = function(t, o, a) {
                        function n(e) {
                            return l && s.callbacks[e] && "function" == typeof s.callbacks[e]
                        }

                        function i() {
                            return [s.callbacks.alwaysTriggerOffsets || x >= S[0] + C, s.callbacks.alwaysTriggerOffsets || x <= -b]
                        }

                        function r() {
                            var e = [f[0].offsetTop, f[0].offsetLeft]
                                , o = [g[0].offsetTop, g[0].offsetLeft]
                                , n = [f.outerHeight(!1), f.outerWidth(!1)]
                                , i = [u.height(), u.width()];
                            t[0].mcs = {
                                content: f
                                , top: e[0]
                                , left: e[1]
                                , draggerTop: o[0]
                                , draggerLeft: o[1]
                                , topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - i[0]))
                                , leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - i[1]))
                                , direction: a.dir
                            }
                        }
                        var l = t.data("mCS")
                            , s = l.opt
                            , c = {
                                trigger: "internal"
                                , dir: "y"
                                , scrollEasing: "mcsEaseOut"
                                , drag: !1
                                , dur: s.scrollInertia
                                , overwrite: "all"
                                , callbacks: !0
                                , onStart: !0
                                , onUpdate: !0
                                , onComplete: !0
                            }
                            , a = e.extend(c, a)
                            , d = [a.dur, a.drag ? 0 : a.dur]
                            , u = e("#mCSB_" + l.idx)
                            , f = e("#mCSB_" + l.idx + "_container")
                            , m = f.parent()
                            , h = s.callbacks.onTotalScrollOffset ? q.call(t, s.callbacks.onTotalScrollOffset) : [0, 0]
                            , p = s.callbacks.onTotalScrollBackOffset ? q.call(t, s.callbacks.onTotalScrollBackOffset) : [0, 0];
                        if (l.trigger = a.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || l.contentReset.y || (n("onOverflowYNone") && s.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== o || l.contentReset.x || (n("onOverflowXNone") && s.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                            if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (n("onOverflowY") && s.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (n("onOverflowX") && s.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), s.snapAmount) {
                                o = X(o, s.snapAmount instanceof Array ? "x" === a.dir ? s.snapAmount[1] : s.snapAmount[0] : s.snapAmount, s.snapOffset)
                            }
                            switch (a.dir) {
                                case "x":
                                    var g = e("#mCSB_" + l.idx + "_dragger_horizontal")
                                        , v = "left"
                                        , x = f[0].offsetLeft
                                        , S = [u.width() - f.outerWidth(!1), g.parent().width() - g.width()]
                                        , _ = [o, 0 === o ? 0 : o / l.scrollRatio.x]
                                        , C = h[1]
                                        , b = p[1]
                                        , y = C > 0 ? C / l.scrollRatio.x : 0
                                        , B = b > 0 ? b / l.scrollRatio.x : 0;
                                    break;
                                case "y":
                                    var g = e("#mCSB_" + l.idx + "_dragger_vertical")
                                        , v = "top"
                                        , x = f[0].offsetTop
                                        , S = [u.height() - f.outerHeight(!1), g.parent().height() - g.height()]
                                        , _ = [o, 0 === o ? 0 : o / l.scrollRatio.y]
                                        , C = h[0]
                                        , b = p[0]
                                        , y = C > 0 ? C / l.scrollRatio.y : 0
                                        , B = b > 0 ? b / l.scrollRatio.y : 0
                            }
                            _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= S[1] ? _ = [S[0], S[1]] : _[0] = -_[0], t[0].mcs || (r(), n("onInit") && s.callbacks.onInit.call(t[0])), clearTimeout(f[0].onCompleteTimeout), Q(g[0], v, Math.round(_[1]), d[1], a.scrollEasing), !l.tweenRunning && (0 === x && _[0] >= 0 || x === S[0] && _[0] <= S[0]) || Q(f[0], v, Math.round(_[0]), d[0], a.scrollEasing, a.overwrite, {
                                onStart: function() {
                                    a.callbacks && a.onStart && !l.tweenRunning && (n("onScrollStart") && (r(), s.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, w(g), l.cbOffsets = i())
                                }
                                , onUpdate: function() {
                                    a.callbacks && a.onUpdate && n("whileScrolling") && (r(), s.callbacks.whileScrolling.call(t[0]))
                                }
                                , onComplete: function() {
                                    if (a.callbacks && a.onComplete) {
                                        "yx" === s.axis && clearTimeout(f[0].onCompleteTimeout);
                                        var e = f[0].idleTimer || 0;
                                        f[0].onCompleteTimeout = setTimeout(function() {
                                            n("onScroll") && (r(), s.callbacks.onScroll.call(t[0])), n("onTotalScroll") && _[1] >= S[1] - y && l.cbOffsets[0] && (r(), s.callbacks.onTotalScroll.call(t[0])), n("onTotalScrollBack") && _[1] <= B && l.cbOffsets[1] && (r(), s.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, f[0].idleTimer = 0, w(g, "hide")
                                        }, e)
                                    }
                                }
                            })
                        }
                    }
                    , Q = function(e, t, o, a, n, i, r) {
                        function l() {
                            S.stop || (g || f.call(), g = G() - p, s(), g >= S.time && (S.time = g > S.time ? g + d - (g - S.time) : g + d - 1, S.time < g + 1 && (S.time = g + 1)), S.time < a ? S.id = u(l) : h.call())
                        }

                        function s() {
                            a > 0 ? (S.currVal = c(S.time, v, _, a, n), x[t] = Math.round(S.currVal) + "px") : x[t] = o + "px", m.call()
                        }

                        function c(e, t, o, a, n) {
                            switch (n) {
                                case "linear":
                                case "mcsLinear":
                                    return o * e / a + t;
                                case "mcsLinearOut":
                                    return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                                case "easeInOutSmooth":
                                    return (e /= a / 2) < 1 ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                                case "easeInOutStrong":
                                    return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);
                                case "easeInOut":
                                case "mcsEaseInOut":
                                    return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                                case "easeOutSmooth":
                                    return e /= a, e--, -o * (e * e * e * e - 1) + t;
                                case "easeOutStrong":
                                    return o * (1 - Math.pow(2, -10 * e / a)) + t;
                                case "easeOut":
                                case "mcsEaseOut":
                                default:
                                    var i = (e /= a) * e
                                        , r = i * e;
                                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                            }
                        }
                        e._mTween || (e._mTween = {
                            top: {}
                            , left: {}
                        });
                        var d, u, r = r || {}
                            , f = r.onStart || function() {}
                            , m = r.onUpdate || function() {}
                            , h = r.onComplete || function() {}
                            , p = G()
                            , g = 0
                            , v = e.offsetTop
                            , x = e.style
                            , S = e._mTween[t];
                        "left" === t && (v = e.offsetLeft);
                        var _ = o - v;
                        S.stop = 0, "none" !== i && function() {
                                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
                            }()
                            , function() {
                                d = 1e3 / 60, S.time = g + d, u = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                                    return s(), setTimeout(e, .01)
                                }, S.id = u(l)
                            }()
                    }
                    , G = function() {
                        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                    }
                    , J = function() {
                        var e = this;
                        e._mTween || (e._mTween = {
                            top: {}
                            , left: {}
                        });
                        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                            var a = t[o];
                            e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
                        }
                    }
                    , K = function(e, t) {
                        try {
                            delete e[t]
                        } catch (o) {
                            e[t] = null
                        }
                    }
                    , Z = function(e) {
                        return !(e.which && 1 !== e.which)
                    }
                    , $ = function(e) {
                        var t = e.originalEvent.pointerType;
                        return !(t && "touch" !== t && 2 !== t)
                    }
                    , ee = function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    , te = function(e) {
                        var t = e.parents(".mCSB_container");
                        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
                    }
                    , oe = function() {
                        var e = function() {
                            var e = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var t = 0; t < e.length; t++)
                                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                            return null
                        }();
                        return !!e && document[e]
                    };
                e.fn[o] = function(t) {
                    return c[t] ? c[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : c.init.apply(this, arguments)
                }, e[o] = function(t) {
                    return c[t] ? c[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : c.init.apply(this, arguments)
                }, e[o].defaults = a, window[o] = !0, e(window).bind("load", function() {
                    e(".mCustomScrollbar")[o](), e.extend(e.expr[":"], {
                        mcsInView: e.expr[":"].mcsInView || function(t) {
                            var o, a, n = e(t)
                                , i = n.parents(".mCSB_container");
                            if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + te(n)[0] >= 0 && a[0] + te(n)[0] < o.height() - n.outerHeight(!1) && a[1] + te(n)[1] >= 0 && a[1] + te(n)[1] < o.width() - n.outerWidth(!1)
                        }
                        , mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                            var n, i, r, l, s = e(t)
                                , c = s.parents(".mCSB_container")
                                , d = "exact" === a[3] ? [
                                    [1, 0]
                                    , [1, 0]
                                ] : [
                                    [.9, .1]
                                    , [.6, .4]
                                ];
                            if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + te(s)[0], c[0].offsetLeft + te(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                        }
                        , mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                            var o = e(t).data("mCS");
                            if (o) return o.overflowed[0] || o.overflowed[1]
                        }
                    })
                })
            }()
    }()
});
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Carousel3d = e() : t.Carousel3d = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                exports: {}
                , id: i
                , loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Slide = e.Carousel3d = void 0;
        var r = n(1)
            , o = i(r)
            , s = n(15)
            , a = i(s)
            , u = function(t) {
                t.component("carousel3d", o.default), t.component("slide", a.default)
            };
        e.default = {
            install: u
        }, e.Carousel3d = o.default, e.Slide = a.default
    }, function(t, e, n) {
        n(2);
        var i = n(7)(n(8), n(57), "data-v-c06c963c", null);
        t.exports = i.exports
    }, function(t, e, n) {
        var i = n(3);
        "string" == typeof i && (i = [
            [t.id, i, ""]
        ]), i.locals && (t.exports = i.locals);
        n(5)("e749a8c4", i, !0)
    }, function(t, e, n) {
        e = t.exports = n(4)(), e.push([t.id, ".carousel-3d-container[data-v-c06c963c]{min-height:1px;width:100%;position:relative;z-index:0;overflow:hidden;margin:20px auto;box-sizing:border-box}.carousel-3d-slider[data-v-c06c963c]{position:relative;margin:0 auto;transform-style:preserve-3d;-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px}", ""])
    }, function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var s = e[r];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function(t, e, n) {
        function i(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                    , i = c[n.id];
                if (i) {
                    i.refs++;
                    for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) i.parts.push(o(n.parts[r]));
                    i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
                } else {
                    for (var s = [], r = 0; r < n.parts.length; r++) s.push(o(n.parts[r]));
                    c[n.id] = {
                        id: n.id
                        , refs: 1
                        , parts: s
                    }
                }
            }
        }

        function r() {
            var t = document.createElement("style");
            return t.type = "text/css", d.appendChild(t), t
        }

        function o(t) {
            var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
            if (i) {
                if (f) return v;
                i.parentNode.removeChild(i)
            }
            if (x) {
                var o = p++;
                i = h || (h = r()), e = s.bind(null, i, o, !1), n = s.bind(null, i, o, !0)
            } else i = r(), e = a.bind(null, i), n = function() {
                i.parentNode.removeChild(i)
            };
            return e(t)
                , function(i) {
                    if (i) {
                        if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                        e(t = i)
                    } else n()
                }
        }

        function s(t, e, n, i) {
            var r = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, r);
            else {
                var o = document.createTextNode(r)
                    , s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
            }
        }

        function a(t, e) {
            var n = e.css
                , i = e.media
                , r = e.sourceMap;
            if (i && t.setAttribute("media", i), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }
        var u = "undefined" != typeof document
            , l = n(6)
            , c = {}
            , d = u && (document.head || document.getElementsByTagName("head")[0])
            , h = null
            , p = 0
            , f = !1
            , v = function() {}
            , x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        t.exports = function(t, e, n) {
            f = n;
            var r = l(t, e);
            return i(r)
                , function(e) {
                    for (var n = [], o = 0; o < r.length; o++) {
                        var s = r[o]
                            , a = c[s.id];
                        a.refs--, n.push(a)
                    }
                    e ? (r = l(t, e), i(r)) : r = [];
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o];
                        if (0 === a.refs) {
                            for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                            delete c[a.id]
                        }
                    }
                }
        };
        var m = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var n = [], i = {}, r = 0; r < e.length; r++) {
                var o = e[r]
                    , s = o[0]
                    , a = o[1]
                    , u = o[2]
                    , l = o[3]
                    , c = {
                        id: t + ":" + r
                        , css: a
                        , media: u
                        , sourceMap: l
                    };
                i[s] ? i[s].parts.push(c) : n.push(i[s] = {
                    id: s
                    , parts: [c]
                })
            }
            return n
        }
    }, function(t, e) {
        t.exports = function(t, e, n, i) {
            var r, o = t = t || {}
                , s = typeof t.default;
            "object" !== s && "function" !== s || (r = t, o = t.default);
            var a = "function" == typeof o ? o.options : o;
            if (e && (a.render = e.render, a.staticRenderFns = e.staticRenderFns), n && (a._scopeId = n), i) {
                var u = a.computed || (a.computed = {});
                Object.keys(i).forEach(function(t) {
                    var e = i[t];
                    u[t] = function() {
                        return e
                    }
                })
            }
            return {
                esModule: r
                , exports: o
                , options: a
            }
        }
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(9)
            , o = i(r)
            , s = n(10)
            , a = i(s)
            , u = n(15)
            , l = i(u)
            , c = function() {};
        e.default = {
            name: "carousel3d"
            , components: {
                Controls: a.default
                , Slide: l.default
            }
            , props: {
                count: {
                    type: [Number, String]
                    , default: 0
                }
                , perspective: {
                    type: [Number, String]
                    , default: 35
                }
                , display: {
                    type: [Number, String]
                    , default: 5
                }
                , loop: {
                    type: Boolean
                    , default: !0
                }
                , animationSpeed: {
                    type: [Number, String]
                    , default: 500
                }
                , dir: {
                    type: String
                    , default: "rtl"
                }
                , width: {
                    type: [Number, String]
                    , default: 360
                }
                , height: {
                    type: [Number, String]
                    , default: 270
                }
                , border: {
                    type: [Number, String]
                    , default: 1
                }
                , space: {
                    type: [Number, String]
                    , default: "auto"
                }
                , startIndex: {
                    type: [Number, String]
                    , default: 0
                }
                , clickable: {
                    type: Boolean
                    , default: !0
                }
                , disable3d: {
                    type: Boolean
                    , default: !1
                }
                , minSwipeDistance: {
                    type: Number
                    , default: 10
                }
                , inverseScaling: {
                    type: [Number, String]
                    , default: 300
                }
                , controlsVisible: {
                    type: Boolean
                    , default: !1
                }
                , controlsPrevHtml: {
                    type: String
                    , default: "&lsaquo;"
                }
                , controlsNextHtml: {
                    type: String
                    , default: "&rsaquo;"
                }
                , controlsWidth: {
                    type: [String, Number]
                    , default: 50
                }
                , controlsHeight: {
                    type: [String, Number]
                    , default: 50
                }
                , onLastSlide: {
                    type: Function
                    , default: c
                }
                , onSlideChange: {
                    type: Function
                    , default: c
                }
            }
            , data: function() {
                return {
                    viewport: 0
                    , currentIndex: 0
                    , total: 0
                    , lock: !1
                    , dragOffset: 0
                    , dragStartX: 0
                    , mousedown: !1
                    , zIndex: 998
                }
            }
            , mixins: [o.default]
            , watch: {
                count: function() {
                    this.computeData()
                }
            }
            , computed: {
                isLastSlide: function() {
                    return this.currentIndex === this.total - 1
                }
                , isFirstSlide: function() {
                    return 0 === this.currentIndex
                }
                , isNextPossible: function() {
                    return !(!this.loop && this.isLastSlide)
                }
                , isPrevPossible: function() {
                    return !(!this.loop && this.isFirstSlide)
                }
                , slideWidth: function() {
                    var t = this.viewport
                        , e = parseInt(this.width) + 2 * parseInt(this.border, 10);
                    return t < e ? t : e
                }
                , slideHeight: function() {
                    var t = parseInt(this.width, 10) + 2 * parseInt(this.border, 10)
                        , e = parseInt(parseInt(this.height) + 2 * this.border, 10)
                        , n = this.calculateAspectRatio(t, e);
                    return this.slideWidth / n
                }
                , visible: function() {
                    var t = this.display > this.total ? this.total : this.display;
                    return 2 !== t ? t % 2 ? t : t - 1 : t
                }
                , hasHiddenSlides: function() {
                    return this.total > this.visible
                }
                , leftIndices: function() {
                    for (var t = Math.floor(this.visible / 2) + 1, e = [], n = 1; n < t; n++) e.push("ltr" === this.dir ? (this.currentIndex + n) % this.total : (this.currentIndex - n) % this.total);
                    return e
                }
                , rightIndices: function() {
                    for (var t = Math.floor(this.visible / 2) + 1, e = [], n = 1; n < t; n++) e.push("ltr" === this.dir ? (this.currentIndex - n) % this.total : (this.currentIndex + n) % this.total);
                    return e
                }
                , leftOutIndex: function() {
                    var t = Math.floor(this.visible / 2) + 1;
                    return "ltr" === this.dir ? this.total - this.currentIndex - t <= 0 ? -parseInt(this.total - this.currentIndex - t) : this.currentIndex + t : this.currentIndex - t
                }
                , rightOutIndex: function() {
                    var t = Math.floor(this.visible / 2) + 1;
                    return "ltr" === this.dir ? this.currentIndex - t : this.total - this.currentIndex - t <= 0 ? -parseInt(this.total - this.currentIndex - t, 10) : this.currentIndex + t
                }
            }
            , methods: {
                goNext: function() {
                    this.isNextPossible && (this.isLastSlide ? this.goSlide(0) : this.goSlide(this.currentIndex + 1))
                }
                , goPrev: function() {
                    this.isPrevPossible && (this.isFirstSlide ? this.goSlide(this.total - 1) : this.goSlide(this.currentIndex - 1))
                }
                , goSlide: function(t) {
                    var e = this;
                    this.currentIndex = t < 0 || t > this.total - 1 ? 0 : t, this.lock = !0, this.isLastSlide && (this.onLastSlide !== c && console.warn("onLastSlide deprecated, please use @last-slide"), this.onLastSlide(this.currentIndex), this.$emit("last-slide", this.currentIndex)), this.$emit("before-slide-change", this.currentIndex), setTimeout(function() {
                        return e.animationEnd()
                    }, this.animationSpeed)
                }
                , goFar: function(t) {
                    var e = this
                        , n = t === this.total - 1 && this.isFirstSlide ? -1 : t - this.currentIndex;
                    this.isLastSlide && 0 === t && (n = 1);
                    for (var i = n < 0 ? -n : n, r = 0, o = 0; o < i;) {
                        o += 1;
                        var s = 1 === i ? 0 : r;
                        setTimeout(function() {
                            return n < 0 ? e.goPrev(i) : e.goNext(i)
                        }, s), r += this.animationSpeed / i
                    }
                }
                , animationEnd: function() {
                    this.lock = !1, this.onSlideChange !== c && console.warn("onSlideChange deprecated, please use @after-slide-change"), this.onSlideChange(this.currentIndex), this.$emit("after-slide-change", this.currentIndex)
                }
                , handleMouseup: function() {
                    /*this.mousedown = !1, this.dragOffset = 0*/
                }
                , handleMousedown: function(t) {
                    /*t.touches || t.preventDefault(), this.mousedown = !0, this.dragStartX = "ontouchstart" in window ? t.touches[0].clientX : t.clientX*/
                }
                , handleMousemove: function(t) {
                    /*if (this.mousedown) {
                        var e = "ontouchstart" in window ? t.touches[0].clientX : t.clientX
                            , n = this.dragStartX - e;
                        this.dragOffset = n, this.dragOffset > this.minSwipeDistance ? (this.handleMouseup(), this.goNext()) : this.dragOffset < -this.minSwipeDistance && (this.handleMouseup(), this.goPrev())
                    }*/
                }
                , attachMutationObserver: function() {
                    var t = this
                        , e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    if (e) {
                        var n = {
                            attributes: !0
                            , childList: !0
                            , characterData: !0
                        };
                        this.mutationObserver = new e(function() {
                            t.$nextTick(function() {
                                t.computeData()
                            })
                        }), this.$el && this.mutationObserver.observe(this.$el, n)
                    }
                }
                , detachMutationObserver: function() {
                    this.mutationObserver && this.mutationObserver.disconnect()
                }
                , getSlideCount: function() {
                    return void 0 !== this.$slots.default ? this.$slots.default.filter(function(t) {
                        return void 0 !== t.tag
                    }).length : 0
                }
                , calculateAspectRatio: function(t, e) {
                    return Math.min(t / e)
                }
                , computeData: function() {
                    this.total = this.getSlideCount(), this.currentIndex = parseInt(this.startIndex) > this.total - 1 ? this.total - 1 : parseInt(this.startIndex), this.viewport = this.$el.clientWidth
                }
                , setSize: function() {
                    this.$el.style.cssText += "height:" + this.slideHeight + "px;", this.$el.childNodes[0].style.cssText += "width:" + this.slideWidth + "px; height:" + this.slideHeight + "px;"
                }
            }
            , mounted: function() {
                this.computeData(), this.attachMutationObserver(), this.$isServer || (window.addEventListener("resize", this.setSize), "ontouchstart" in window ? (this.$el.addEventListener("touchstart", this.handleMousedown), this.$el.addEventListener("touchend", this.handleMouseup), this.$el.addEventListener("touchmove", this.handleMousemove)) : (this.$el.addEventListener("mousedown", this.handleMousedown), this.$el.addEventListener("mouseup", this.handleMouseup), this.$el.addEventListener("mousemove", this.handleMousemove)))
            }
            , beforeDestroy: function() {
                this.$isServer || (this.detachMutationObserver(), "ontouchstart" in window ? this.$el.removeEventListener("touchmove", this.handleMousemove) : this.$el.removeEventListener("mousemove", this.handleMousemove), window.removeEventListener("resize", this.setSize))
            }
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            props: {
                autoplay: {
                    type: Boolean
                    , default: !1
                }
                , autoplayTimeout: {
                    type: Number
                    , default: 2e3
                }
                , autoplayHoverPause: {
                    type: Boolean
                    , default: !0
                }
            }
            , data: function() {
                return {
                    autoplayInterval: null
                }
            }
            , destroyed: function() {
                this.pauseAutoplay(), this.$isServer || (this.$el.removeEventListener("mouseenter", this.pauseAutoplay), this.$el.removeEventListener("mouseleave", this.startAutoplay))
            }
            , methods: {
                pauseAutoplay: function() {
                    this.autoplayInterval && (this.autoplayInterval = clearInterval(this.autoplayInterval))
                }
                , startAutoplay: function() {
                    var t = this;
                    this.autoplay && (this.autoplayInterval = setInterval(function() {
                        "ltr" === t.dir ? t.goPrev() : t.goNext()
                    }, this.autoplayTimeout))
                }
            }
            , mounted: function() {
                !this.$isServer && this.autoplayHoverPause && (this.$el.addEventListener("mouseenter", this.pauseAutoplay), this.$el.addEventListener("mouseleave", this.startAutoplay)), this.startAutoplay()
            }
        };
        e.default = n
    }, function(t, e, n) {
        n(11);
        var i = n(7)(n(13), n(14), "data-v-43e93932", null);
        t.exports = i.exports
    }, function(t, e, n) {
        var i = n(12);
        "string" == typeof i && (i = [
            [t.id, i, ""]
        ]), i.locals && (t.exports = i.locals);
        n(5)("06c66230", i, !0)
    }, function(t, e, n) {
        e = t.exports = n(4)(), e.push([t.id, ".carousel-3d-controls[data-v-43e93932]{position:absolute;top:50%;height:0;margin-top:-30px;left:0;width:100%;z-index:9099}.next[data-v-43e93932],.prev[data-v-43e93932]{width:60px;position:absolute;z-index:9999;font-size:60px;height:60px;line-height:60px;color:#333;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;top:0}.next[data-v-43e93932]:hover,.prev[data-v-43e93932]:hover{cursor:pointer;opacity:.7}.prev[data-v-43e93932]{left:10px;text-align:left}.next[data-v-43e93932]{right:10px;text-align:right}.disabled[data-v-43e93932],.disabled[data-v-43e93932]:hover{opacity:.2;cursor:default}", ""])
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "controls"
            , props: {
                width: {
                    type: [String, Number]
                    , default: 50
                }
                , height: {
                    type: [String, Number]
                    , default: 60
                }
                , prevHtml: {
                    type: String
                    , default: "&lsaquo;"
                }
                , nextHtml: {
                    type: String
                    , default: "&rsaquo;"
                }
            }
            , data: function() {
                return {
                    parent: this.$parent
                }
            }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "carousel-3d-controls"
                }, [n("a", {
                    staticClass: "prev"
                    , class: {
                        disabled: !t.parent.isPrevPossible
                    }
                    , style: "width: " + t.width + "px; height: " + t.height + "px; line-height: " + t.height + "px;"
                    , attrs: {
                        href: "#"
                    }
                    , on: {
                        click: function(e) {
                            e.preventDefault(), t.parent.goPrev()
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.prevHtml)
                    }
                })]), t._v(" "), n("a", {
                    staticClass: "next"
                    , class: {
                        disabled: !t.parent.isNextPossible
                    }
                    , style: "width: " + t.width + "px; height: " + t.height + "px; line-height: " + t.height + "px;"
                    , attrs: {
                        href: "#"
                    }
                    , on: {
                        click: function(e) {
                            e.preventDefault(), t.parent.goNext()
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.nextHtml)
                    }
                })])])
            }
            , staticRenderFns: []
        }
    }, function(t, e, n) {
        n(16);
        var i = n(7)(n(18), n(56), null, null);
        t.exports = i.exports
    }, function(t, e, n) {
        var i = n(17);
        "string" == typeof i && (i = [
            [t.id, i, ""]
        ]), i.locals && (t.exports = i.locals);
        n(5)("1dbacf8a", i, !0)
    }, function(t, e, n) {
        e = t.exports = n(4)(), e.push([t.id, ".carousel-3d-slide{position:absolute;opacity:0;visibility:hidden;overflow:hidden;top:0;border-radius:1px;border-color:#000;border-color:rgba(0,0,0,.4);border-style:solid;background-size:cover;background-color:#ccc;display:block;margin:0;box-sizing:border-box;text-align:left}.carousel-3d-slide img{width:100%}.carousel-3d-slide.current{opacity:1!important;visibility:visible!important;transform:none!important;z-index:999}", ""])
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(19)
            , o = i(r);
        e.default = {
            name: "slide"
            , props: {
                index: {
                    type: Number
                }
            }
            , data: function() {
                return {
                    parent: this.$parent
                    , styles: {}
                    , zIndex: 999
                }
            }
            , computed: {
                isCurrent: function() {
                    return this.index === this.parent.currentIndex
                }
                , slideStyle: function() {
                    var t = {};
                    if (!this.isCurrent) {
                        var e = this.getSideIndex(this.parent.rightIndices)
                            , n = this.getSideIndex(this.parent.leftIndices);
                        (e >= 0 || n >= 0) && (t = e >= 0 ? this.calculatePosition(e, !0, this.zIndex) : this.calculatePosition(n, !1, this.zIndex), t.opacity = 1, t.visibility = "visible"), this.parent.hasHiddenSlides && (this.matchIndex(this.parent.leftOutIndex) ? t = this.calculatePosition(this.parent.leftIndices.length - 1, !1, this.zIndex) : this.matchIndex(this.parent.rightOutIndex) && (t = this.calculatePosition(this.parent.rightIndices.length - 1, !0, this.zIndex)))
                    }
                    return (0, o.default)(t, {
                        "border-width": this.parent.border + "px"
                        , width: this.parent.slideWidth + "px"
                        , height: this.parent.slideHeight + "px"
                        , transition: " transform " + this.parent.animationSpeed + "ms,                opacity " + this.parent.animationSpeed + "ms,                visibility " + this.parent.animationSpeed + "ms"
                    })
                }
            }
            , methods: {
                getSideIndex: function(t) {
                    var e = this
                        , n = -1;
                    return t.forEach(function(t, i) {
                        e.matchIndex(t) && (n = i)
                    }), n
                }
                , matchIndex: function(t) {
                    return t >= 0 ? this.index === t : this.parent.total + t === this.index
                }
                , calculatePosition: function(t, e, n) {
                    var i = this.parent.disable3d ? 0 : parseInt(this.parent.inverseScaling) + 100 * (t + 1)
                        , r = this.parent.disable3d ? 0 : parseInt(this.parent.perspective)
                        , o = "auto" === this.parent.space ? parseInt((t + 1) * (this.parent.width / 1.5), 10) : parseInt((t + 1) * this.parent.space, 10)
                        , s = e ? "translateX(" + o + "px) translateZ(-" + i + "px) rotateY(-" + r + "deg)" : "translateX(-" + o + "px) translateZ(-" + i + "px) rotateY(" + r + "deg)"
                        , a = "auto" === this.parent.space ? 0 : parseInt((t + 1) * this.parent.space);
                    return {
                        transform: s
                        , top: a
                        , zIndex: n - (Math.abs(t) + 1)
                    }
                }
                , goTo: function() {
                    this.parent.clickable === !0 && this.parent.goSlide(this.index)
                }
            }
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(20)
            , __esModule: !0
        }
    }, function(t, e, n) {
        n(21), t.exports = n(24).Object.assign
    }, function(t, e, n) {
        var i = n(22);
        i(i.S + i.F, "Object", {
            assign: n(37)
        })
    }, function(t, e, n) {
        var i = n(23)
            , r = n(24)
            , o = n(25)
            , s = n(27)
            , a = "prototype"
            , u = function(t, e, n) {
                var l, c, d, h = t & u.F
                    , p = t & u.G
                    , f = t & u.S
                    , v = t & u.P
                    , x = t & u.B
                    , m = t & u.W
                    , g = p ? r : r[e] || (r[e] = {})
                    , y = g[a]
                    , b = p ? i : f ? i[e] : (i[e] || {})[a];
                p && (n = e);
                for (l in n) c = !h && b && void 0 !== b[l], c && l in g || (d = c ? b[l] : n[l], g[l] = p && "function" != typeof b[l] ? n[l] : x && c ? o(d, i) : m && b[l] == d ? function(t) {
                    var e = function(e, n, i) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, i)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[a] = t[a], e
                }(d) : v && "function" == typeof d ? o(Function.call, d) : d, v && ((g.virtual || (g.virtual = {}))[l] = d, t & u.R && y && !y[l] && s(y, l, d)))
            };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var i = n(26);
        t.exports = function(t, e, n) {
            if (i(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        var i = n(28)
            , r = n(36);
        t.exports = n(32) ? function(t, e, n) {
            return i.f(t, e, r(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var i = n(29)
            , r = n(31)
            , o = n(35)
            , s = Object.defineProperty;
        e.f = n(32) ? Object.defineProperty : function(t, e, n) {
            if (i(t), e = o(e, !0), i(n), r) try {
                return s(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var i = n(30);
        t.exports = function(t) {
            if (!i(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        t.exports = !n(32) && !n(33)(function() {
            return 7 != Object.defineProperty(n(34)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        t.exports = !n(33)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        var i = n(30)
            , r = n(23).document
            , o = i(r) && i(r.createElement);
        t.exports = function(t) {
            return o ? r.createElement(t) : {}
        }
    }, function(t, e, n) {
        var i = n(30);
        t.exports = function(t, e) {
            if (!i(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t)
                , configurable: !(2 & t)
                , writable: !(4 & t)
                , value: e
            }
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(38)
            , r = n(53)
            , o = n(54)
            , s = n(55)
            , a = n(42)
            , u = Object.assign;
        t.exports = !u || n(33)(function() {
            var t = {}
                , e = {}
                , n = Symbol()
                , i = "abcdefghijklmnopqrst";
            return t[n] = 7, i.split("").forEach(function(t) {
                e[t] = t
            }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != i
        }) ? function(t, e) {
            for (var n = s(t), u = arguments.length, l = 1, c = r.f, d = o.f; u > l;)
                for (var h, p = a(arguments[l++]), f = c ? i(p).concat(c(p)) : i(p), v = f.length, x = 0; v > x;) d.call(p, h = f[x++]) && (n[h] = p[h]);
            return n
        } : u
    }, function(t, e, n) {
        var i = n(39)
            , r = n(52);
        t.exports = Object.keys || function(t) {
            return i(t, r)
        }
    }, function(t, e, n) {
        var i = n(40)
            , r = n(41)
            , o = n(45)(!1)
            , s = n(49)("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = r(t)
                , u = 0
                , l = [];
            for (n in a) n != s && i(a, n) && l.push(n);
            for (; e.length > u;) i(a, n = e[u++]) && (~o(l, n) || l.push(n));
            return l
        }
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        var i = n(42)
            , r = n(44);
        t.exports = function(t) {
            return i(r(t))
        }
    }, function(t, e, n) {
        var i = n(43);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == i(t) ? t.split("") : Object(t)
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e, n) {
        var i = n(41)
            , r = n(46)
            , o = n(48);
        t.exports = function(t) {
            return function(e, n, s) {
                var a, u = i(e)
                    , l = r(u.length)
                    , c = o(s, l);
                if (t && n != n) {
                    for (; l > c;)
                        if (a = u[c++], a != a) return !0
                } else
                    for (; l > c; c++)
                        if ((t || c in u) && u[c] === n) return t || c || 0;
                return !t && -1
            }
        }
    }, function(t, e, n) {
        var i = n(47)
            , r = Math.min;
        t.exports = function(t) {
            return t > 0 ? r(i(t), 9007199254740991) : 0
        }
    }, function(t, e) {
        var n = Math.ceil
            , i = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
        }
    }, function(t, e, n) {
        var i = n(47)
            , r = Math.max
            , o = Math.min;
        t.exports = function(t, e) {
            return t = i(t), t < 0 ? r(t + e, 0) : o(t, e)
        }
    }, function(t, e, n) {
        var i = n(50)("keys")
            , r = n(51);
        t.exports = function(t) {
            return i[t] || (i[t] = r(t))
        }
    }, function(t, e, n) {
        var i = n(23)
            , r = "__core-js_shared__"
            , o = i[r] || (i[r] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    }, function(t, e) {
        var n = 0
            , i = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e, n) {
        var i = n(44);
        t.exports = function(t) {
            return Object(i(t))
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "carousel-3d-slide"
                    , class: {
                        current: t.isCurrent
                    }
                    , style: t.slideStyle
                    , on: {
                        click: function(e) {
                            t.goTo()
                        }
                    }
                }, [t._t("default")], 2)
            }
            , staticRenderFns: []
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "carousel-3d-container"
                    , style: {
                        height: this.slideHeight + "px"
                    }
                }, [n("div", {
                    staticClass: "carousel-3d-slider"
                    , style: {
                        width: this.slideWidth + "px"
                        , height: this.slideHeight + "px"
                    }
                }, [t._t("default")], 2), t._v(" "), t.controlsVisible ? n("controls", {
                    attrs: {
                        "next-html": t.controlsNextHtml
                        , "prev-html": t.controlsPrevHtml
                        , width: t.controlsWidth
                        , height: t.controlsHeight
                    }
                }) : t._e()], 1)
            }
            , staticRenderFns: []
        }
    }])
});
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
}(this, function() {
    "use strict";

    function e(e) {
        return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
    }

    function t(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }

    function n(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()]
        } : function(e) {
            return n[e]
        }
    }

    function r(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1)
        }
    }

    function i(e, t) {
        return Ni.call(e, t)
    }

    function o(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function a(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n))
        }
    }

    function s(e, t) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }
        return n._length = e.length, n
    }

    function c(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
        return r
    }

    function l(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function u(e) {
        return null !== e && "object" == typeof e
    }

    function f(e) {
        return Li.call(e) === Ri
    }

    function d(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && l(t, e[n]);
        return t
    }

    function p() {}

    function v(e, t) {
        var n = u(e)
            , r = u(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
            return JSON.stringify(e) === JSON.stringify(t)
        } catch (n) {
            return e === t
        }
    }

    function h(e, t) {
        for (var n = 0; n < e.length; n++)
            if (v(e[n], t)) return n;
        return -1
    }

    function m(e) {
        var t = !1;
        return function() {
            t || (t = !0, e())
        }
    }

    function g(e) {
        return /native code/.test(e.toString())
    }

    function y(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t
    }

    function _(e, t, n, r) {
        Object.defineProperty(e, t, {
            value: n
            , enumerable: !!r
            , writable: !0
            , configurable: !0
        })
    }

    function b(e) {
        if (!io.test(e)) {
            var t = e.split(".");
            return function(e) {
                for (var n = 0; n < t.length; n++) {
                    if (!e) return;
                    e = e[t[n]]
                }
                return e
            }
        }
    }

    function $(e) {
        fo.target && po.push(fo.target), fo.target = e
    }

    function w() {
        fo.target = po.pop()
    }

    function x(e, t) {
        e.__proto__ = t
    }

    function k(e, t, n) {
        for (var r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            _(e, o, t[o])
        }
    }

    function C(e, t) {
        if (u(e)) {
            var n;
            return i(e, "__ob__") && e.__ob__ instanceof yo ? n = e.__ob__ : go.shouldConvert && !Gi() && (Array.isArray(e) || f(e)) && Object.isExtensible(e) && !e._isVue && (n = new yo(e)), t && n && n.vmCount++, n
        }
    }

    function A(e, t, n, r) {
        var i = new fo
            , o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || o.configurable !== !1) {
            var a = o && o.get
                , s = o && o.set
                , c = C(n);
            Object.defineProperty(e, t, {
                enumerable: !0
                , configurable: !0
                , get: function() {
                    var t = a ? a.call(e) : n;
                    return fo.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && T(t)), t
                }
                , set: function(t) {
                    var o = a ? a.call(e) : n;
                    t === o || t !== t && o !== o || (r && r(), s ? s.call(e, t) : n = t, c = C(t), i.notify())
                }
            })
        }
    }

    function O(e, t, n) {
        if (Array.isArray(e)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (i(e, t)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? (oo("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : r ? (A(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function S(e, t) {
        if (Array.isArray(e)) return void e.splice(t, 1);
        var n = e.__ob__;
        if (e._isVue || n && n.vmCount) return void oo("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
        i(e, t) && (delete e[t], n && n.dep.notify())
    }

    function T(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && T(t)
    }

    function j(e, t) {
        if (!t) return e;
        for (var n, r, o, a = Object.keys(t), s = 0; s < a.length; s++) n = a[s], r = e[n], o = t[n], i(e, n) ? f(r) && f(o) && j(r, o) : O(e, n, o);
        return e
    }

    function E(e, t) {
        return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
    }

    function I(e, t) {
        var n = Object.create(e || null);
        return t ? l(n, t) : n
    }

    function N(e) {
        for (var t in e.components) {
            var n = t.toLowerCase();
            (Ii(n) || Vi.isReservedTag(n)) && oo("Do not use built-in or reserved HTML elements as component id: " + t)
        }
    }

    function M(e) {
        var t = e.props;
        if (t) {
            var n, r, i, o = {};
            if (Array.isArray(t))
                for (n = t.length; n--;) r = t[n], "string" == typeof r ? (i = Mi(r), o[i] = {
                    type: null
                }) : oo("props must be strings when using array syntax.");
            else if (f(t))
                for (var a in t) r = t[a], i = Mi(a), o[i] = f(r) ? r : {
                    type: r
                };
            e.props = o
        }
    }

    function D(e) {
        var t = e.directives;
        if (t)
            for (var n in t) {
                var r = t[n];
                "function" == typeof r && (t[n] = {
                    bind: r
                    , update: r
                })
            }
    }

    function P(e, t, n) {
        function r(r) {
            var i = _o[r] || $o;
            u[r] = i(e[r], t[r], n, r)
        }
        N(t), M(t), D(t);
        var o = t.extends;
        if (o && (e = "function" == typeof o ? P(e, o.options, n) : P(e, o, n)), t.mixins)
            for (var a = 0, s = t.mixins.length; a < s; a++) {
                var c = t.mixins[a];
                c.prototype instanceof ct && (c = c.options), e = P(e, c, n)
            }
        var l, u = {};
        for (l in e) r(l);
        for (l in t) i(e, l) || r(l);
        return u
    }

    function L(e, t, n, r) {
        if ("string" == typeof n) {
            var o = e[t];
            if (i(o, n)) return o[n];
            var a = Mi(n);
            if (i(o, a)) return o[a];
            var s = Di(a);
            if (i(o, s)) return o[s];
            var c = o[n] || o[a] || o[s];
            return r && !c && oo("Failed to resolve " + t.slice(0, -1) + ": " + n, e), c
        }
    }

    function R(e, t, n, r) {
        var o = t[e]
            , a = !i(n, e)
            , s = n[e];
        if (B(Boolean, o.type) && (a && !i(o, "default") ? s = !1 : B(String, o.type) || "" !== s && s !== Pi(e) || (s = !0)), void 0 === s) {
            s = F(r, o, e);
            var c = go.shouldConvert;
            go.shouldConvert = !0, C(s), go.shouldConvert = c
        }
        return U(o, e, s, r, a), s
    }

    function F(e, t, n) {
        if (i(t, "default")) {
            var r = t.default;
            return u(r) && oo('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', e), e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== H(t.type) ? r.call(e) : r
        }
    }

    function U(e, t, n, r, i) {
        if (e.required && i) return void oo('Missing required prop: "' + t + '"', r);
        if (null != n || e.required) {
            var o = e.type
                , a = !o || o === !0
                , s = [];
            if (o) {
                Array.isArray(o) || (o = [o]);
                for (var c = 0; c < o.length && !a; c++) {
                    var l = V(n, o[c]);
                    s.push(l.expectedType || ""), a = l.valid
                }
            }
            if (!a) return void oo('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(Di).join(", ") + ", got " + Object.prototype.toString.call(n).slice(8, -1) + ".", r);
            var u = e.validator;
            u && (u(n) || oo('Invalid prop: custom validator check failed for prop "' + t + '".', r))
        }
    }

    function V(e, t) {
        var n, r = H(t);
        return n = "String" === r ? typeof e == (r = "string") : "Number" === r ? typeof e == (r = "number") : "Boolean" === r ? typeof e == (r = "boolean") : "Function" === r ? typeof e == (r = "function") : "Object" === r ? f(e) : "Array" === r ? Array.isArray(e) : e instanceof t, {
            valid: n
            , expectedType: r
        }
    }

    function H(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t && t[1]
    }

    function B(e, t) {
        if (!Array.isArray(t)) return H(t) === H(e);
        for (var n = 0, r = t.length; n < r; n++)
            if (H(t[n]) === H(e)) return !0;
        return !1
    }

    function q(e, t, n) {
        if (Vi.errorHandler) Vi.errorHandler.call(null, e, t, n);
        else {
            if (oo("Error in " + n + ":", t), !Bi || "undefined" == typeof console) throw e;
            console.error(e)
        }
    }

    function J(e) {
        return new So(void 0, void 0, void 0, String(e))
    }

    function z(e) {
        var t = new So(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t
    }

    function K(e) {
        for (var t = e.length, n = new Array(t), r = 0; r < t; r++) n[r] = z(e[r]);
        return n
    }

    function W(e) {
        function t() {
            var e = arguments
                , n = t.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = 0; r < n.length; r++) n[r].apply(null, e)
        }
        return t.fns = e, t
    }

    function Z(e, t, n, r, i) {
        var o, a, s, c;
        for (o in e) a = e[o], s = t[o], c = Io(o), a ? s ? a !== s && (s.fns = a, e[o] = s) : (a.fns || (a = e[o] = W(a)), n(c.name, a, c.once, c.capture)) : oo('Invalid handler for event "' + c.name + '": got ' + String(a), i);
        for (o in t) e[o] || (c = Io(o), r(c.name, t[o], c.capture))
    }

    function Y(e, t, n) {
        function i() {
            n.apply(this, arguments), r(o.fns, i)
        }
        var o, a = e[t];
        a ? a.fns && a.merged ? (o = a, o.fns.push(i)) : o = W([a, i]) : o = W([i]), o.merged = !0, e[t] = o
    }

    function G(e) {
        for (var t = 0; t < e.length; t++)
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
        return e
    }

    function Q(e) {
        return o(e) ? [J(e)] : Array.isArray(e) ? X(e) : void 0
    }

    function X(e, t) {
        var n, r, i, a = [];
        for (n = 0; n < e.length; n++) null != (r = e[n]) && "boolean" != typeof r && (i = a[a.length - 1], Array.isArray(r) ? a.push.apply(a, X(r, (t || "") + "_" + n)) : o(r) ? i && i.text ? i.text += String(r) : "" !== r && a.push(J(r)) : r.text && i && i.text ? a[a.length - 1] = J(i.text + r.text) : (r.tag && null == r.key && null != t && (r.key = "__vlist" + t + "_" + n + "__"), a.push(r)));
        return a
    }

    function ee(e) {
        return e && e.filter(function(e) {
            return e && e.componentOptions
        })[0]
    }

    function te(e) {
        e._events = Object.create(null), e._hasHookEvent = !1;
        var t = e.$options._parentListeners;
        t && ie(e, t)
    }

    function ne(e, t, n) {
        n ? jo.$once(e, t) : jo.$on(e, t)
    }

    function re(e, t) {
        jo.$off(e, t)
    }

    function ie(e, t, n) {
        jo = e, Z(t, n || {}, ne, re, e)
    }

    function oe(e, t) {
        var n = {};
        if (!e) return n;
        for (var r, i, o = [], a = 0, s = e.length; a < s; a++)
            if (i = e[a], (i.context === t || i.functionalContext === t) && i.data && (r = i.data.slot)) {
                var c = n[r] || (n[r] = []);
                "template" === i.tag ? c.push.apply(c, i.children) : c.push(i)
            } else o.push(i);
        return o.every(ae) || (n.default = o), n
    }

    function ae(e) {
        return e.isComment || " " === e.text
    }

    function se(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n][0]] = e[n][1];
        return t
    }

    function ce(e) {
        var t = e.$options
            , n = t.parent;
        if (n && !t.abstract) {
            for (; n.$options.abstract && n.$parent;) n = n.$parent;
            n.$children.push(e)
        }
        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
    }

    function le(e, t, n) {
        e.$el = t, e.$options.render || (e.$options.render = Eo, e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || t ? oo("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : oo("Failed to mount component: template or render function not defined.", e)), ve(e, "beforeMount");
        var r;
        return r = Vi.performance && to ? function() {
            var t = e._name
                , r = "start " + t
                , i = "end " + t;
            to.mark(r);
            var o = e._render();
            to.mark(i), to.measure(t + " render", r, i), to.mark(r), e._update(o, n), to.mark(i), to.measure(t + " patch", r, i)
        } : function() {
            e._update(e._render(), n)
        }, e._watcher = new Vo(e, r, p), n = !1, null == e.$vnode && (e._isMounted = !0, ve(e, "mounted")), e
    }

    function ue(e, t, n, r, i) {
        var o = !!(i || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== ro);
        if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, t && e.$options.props) {
            go.shouldConvert = !1, go.isSettingProps = !0;
            for (var a = e._props, s = e.$options._propKeys || [], c = 0; c < s.length; c++) {
                var l = s[c];
                a[l] = R(l, e.$options.props, t, e)
            }
            go.shouldConvert = !0, go.isSettingProps = !1, e.$options.propsData = t
        }
        if (n) {
            var u = e.$options._parentListeners;
            e.$options._parentListeners = n, ie(e, n, u)
        }
        o && (e.$slots = oe(i, r.context), e.$forceUpdate())
    }

    function fe(e) {
        for (; e && (e = e.$parent);)
            if (e._inactive) return !0;
        return !1
    }

    function de(e, t) {
        if (t) {
            if (e._directInactive = !1, fe(e)) return
        } else if (e._directInactive) return;
        if (e._inactive || null == e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) de(e.$children[n]);
            ve(e, "activated")
        }
    }

    function pe(e, t) {
        if (!(t && (e._directInactive = !0, fe(e)) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) pe(e.$children[n]);
            ve(e, "deactivated")
        }
    }

    function ve(e, t) {
        var n = e.$options[t];
        if (n)
            for (var r = 0, i = n.length; r < i; r++) try {
                n[r].call(e)
            } catch (n) {
                q(n, e, t + " hook")
            }
        e._hasHookEvent && e.$emit("hook:" + t)
    }

    function he() {
        Mo.length = 0, Do = {}, Po = {}, Lo = Ro = !1
    }

    function me() {
        Ro = !0;
        var e, t, n;
        for (Mo.sort(function(e, t) {
                return e.id - t.id
            }), Fo = 0; Fo < Mo.length; Fo++)
            if (e = Mo[Fo], t = e.id, Do[t] = null, e.run(), null != Do[t] && (Po[t] = (Po[t] || 0) + 1, Po[t] > Vi._maxUpdateCount)) {
                oo("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
                break
            }
        for (Fo = Mo.length; Fo--;) e = Mo[Fo], n = e.vm, n._watcher === e && n._isMounted && ve(n, "updated");
        Qi && Vi.devtools && Qi.emit("flush"), he()
    }

    function ge(e) {
        var t = e.id;
        if (null == Do[t]) {
            if (Do[t] = !0, Ro) {
                for (var n = Mo.length - 1; n >= 0 && Mo[n].id > e.id;) n--;
                Mo.splice(Math.max(n, Fo) + 1, 0, e)
            } else Mo.push(e);
            Lo || (Lo = !0, eo(me))
        }
    }

    function ye(e) {
        Ho.clear(), _e(e, Ho)
    }

    function _e(e, t) {
        var n, r, i = Array.isArray(e);
        if ((i || u(e)) && Object.isExtensible(e)) {
            if (e.__ob__) {
                var o = e.__ob__.dep.id;
                if (t.has(o)) return;
                t.add(o)
            }
            if (i)
                for (n = e.length; n--;) _e(e[n], t);
            else
                for (r = Object.keys(e), n = r.length; n--;) _e(e[r[n]], t)
        }
    }

    function be(e, t, n) {
        Bo.get = function() {
            return this[t][n]
        }, Bo.set = function(e) {
            this[t][n] = e
        }, Object.defineProperty(e, n, Bo)
    }

    function $e(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && we(e, t.props), t.methods && Oe(e, t.methods), t.data ? xe(e) : C(e._data = {}, !0), t.computed && ke(e, t.computed), t.watch && Se(e, t.watch)
    }

    function we(e, t) {
        var n = e.$options.propsData || {}
            , r = e._props = {}
            , i = e.$options._propKeys = []
            , o = !e.$parent;
        go.shouldConvert = o;
        for (var a in t) ! function(o) {
            i.push(o);
            var a = R(o, t, n, e);
            qo[o] && oo('"' + o + '" is a reserved attribute and cannot be used as component prop.', e), A(r, o, a, function() {
                e.$parent && !go.isSettingProps && oo("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + o + '"', e)
            }), o in e || be(e, "_props", o)
        }(a);
        go.shouldConvert = !0
    }

    function xe(e) {
        var t = e.$options.data;
        t = e._data = "function" == typeof t ? t.call(e) : t || {}, f(t) || (t = {}, oo("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e));
        for (var n = Object.keys(t), r = e.$options.props, o = n.length; o--;) r && i(r, n[o]) ? oo('The data property "' + n[o] + '" is already declared as a prop. Use prop default value instead.', e) : y(n[o]) || be(e, "_data", n[o]);
        C(t, !0)
    }

    function ke(e, t) {
        var n = e._computedWatchers = Object.create(null);
        for (var r in t) {
            var i = t[r]
                , o = "function" == typeof i ? i : i.get;
            n[r] = new Vo(e, o, p, Jo), r in e || Ce(e, r, i)
        }
    }

    function Ce(e, t, n) {
        "function" == typeof n ? (Bo.get = Ae(t), Bo.set = p) : (Bo.get = n.get ? n.cache !== !1 ? Ae(t) : n.get : p, Bo.set = n.set ? n.set : p), Object.defineProperty(e, t, Bo)
    }

    function Ae(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), fo.target && t.depend(), t.value
        }
    }

    function Oe(e, t) {
        var n = e.$options.props;
        for (var r in t) e[r] = null == t[r] ? p : s(t[r], e), null == t[r] && oo('method "' + r + '" has an undefined value in the component definition. Did you reference the function correctly?', e), n && i(n, r) && oo('method "' + r + '" has already been defined as a prop.', e)
    }

    function Se(e, t) {
        for (var n in t) {
            var r = t[n];
            if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) Te(e, n, r[i]);
            else Te(e, n, r)
        }
    }

    function Te(e, t, n) {
        var r;
        f(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }

    function je(e, t, n, r, i) {
        if (e) {
            var o = n.$options._base;
            if (u(e) && (e = o.extend(e)), "function" != typeof e) return void oo("Invalid Component definition: " + String(e), n);
            if (!e.cid)
                if (e.resolved) e = e.resolved;
                else if (!(e = Le(e, o, function() {
                    n.$forceUpdate()
                }))) return;
            ot(e), t = t || {}, t.model && He(e.options, t);
            var a = Re(t, e);
            if (e.options.functional) return Ee(e, a, t, n, r);
            var s = t.on;
            t.on = t.nativeOn, e.options.abstract && (t = {}), Ue(t);
            var c = e.options.name || i;
            return new So("vue-component-" + e.cid + (c ? "-" + c : ""), t, void 0, void 0, void 0, n, {
                Ctor: e
                , propsData: a
                , listeners: s
                , tag: i
                , children: r
            })
        }
    }

    function Ee(e, t, n, r, i) {
        var o = {}
            , a = e.options.props;
        if (a)
            for (var s in a) o[s] = R(s, a, t);
        var c = Object.create(r)
            , l = function(e, t, n, r) {
                return Be(c, e, t, n, r, !0)
            }
            , u = e.options.render.call(null, l, {
                props: o
                , data: n
                , parent: r
                , children: i
                , slots: function() {
                    return oe(i, r)
                }
            });
        return u instanceof So && (u.functionalContext = r, n.slot && ((u.data || (u.data = {})).slot = n.slot)), u
    }

    function Ie(e, t, n, r) {
        var i = e.componentOptions
            , o = {
                _isComponent: !0
                , parent: t
                , propsData: i.propsData
                , _componentTag: i.tag
                , _parentVnode: e
                , _parentListeners: i.listeners
                , _renderChildren: i.children
                , _parentElm: n || null
                , _refElm: r || null
            }
            , a = e.data.inlineTemplate;
        return a && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new i.Ctor(o)
    }

    function Ne(e, t, n, r) {
        if (!e.componentInstance || e.componentInstance._isDestroyed) {
            (e.componentInstance = Ie(e, No, n, r)).$mount(t ? e.elm : void 0, t)
        } else if (e.data.keepAlive) {
            var i = e;
            Me(i, i)
        }
    }

    function Me(e, t) {
        var n = t.componentOptions;
        ue(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
    }

    function De(e) {
        e.componentInstance._isMounted || (e.componentInstance._isMounted = !0, ve(e.componentInstance, "mounted")), e.data.keepAlive && de(e.componentInstance, !0)
    }

    function Pe(e) {
        e.componentInstance._isDestroyed || (e.data.keepAlive ? pe(e.componentInstance, !0) : e.componentInstance.$destroy())
    }

    function Le(e, t, n) {
        if (!e.requested) {
            e.requested = !0;
            var r = e.pendingCallbacks = [n]
                , i = !0
                , o = function(n) {
                    if (u(n) && (n = t.extend(n)), e.resolved = n, !i)
                        for (var o = 0, a = r.length; o < a; o++) r[o](n)
                }
                , a = function(t) {
                    oo("Failed to resolve async component: " + String(e) + (t ? "\nReason: " + t : ""))
                }
                , s = e(o, a);
            return s && "function" == typeof s.then && !e.resolved && s.then(o, a), i = !1, e.resolved
        }
        e.pendingCallbacks.push(n)
    }

    function Re(e, t) {
        var n = t.options.props;
        if (n) {
            var r = {}
                , i = e.attrs
                , o = e.props
                , a = e.domProps;
            if (i || o || a)
                for (var s in n) {
                    var c = Pi(s);
                    Fe(r, o, s, c, !0) || Fe(r, i, s, c) || Fe(r, a, s, c)
                }
            return r
        }
    }

    function Fe(e, t, n, r, o) {
        if (t) {
            if (i(t, n)) return e[n] = t[n], o || delete t[n], !0;
            if (i(t, r)) return e[n] = t[r], o || delete t[r], !0
        }
        return !1
    }

    function Ue(e) {
        e.hook || (e.hook = {});
        for (var t = 0; t < Ko.length; t++) {
            var n = Ko[t]
                , r = e.hook[n]
                , i = zo[n];
            e.hook[n] = r ? Ve(i, r) : i
        }
    }

    function Ve(e, t) {
        return function(n, r, i, o) {
            e(n, r, i, o), t(n, r, i, o)
        }
    }

    function He(e, t) {
        var n = e.model && e.model.prop || "value"
            , r = e.model && e.model.event || "input";
        (t.props || (t.props = {}))[n] = t.model.value;
        var i = t.on || (t.on = {});
        i[r] ? i[r] = [t.model.callback].concat(i[r]) : i[r] = t.model.callback
    }

    function Be(e, t, n, r, i, a) {
        return (Array.isArray(n) || o(n)) && (i = r, r = n, n = void 0), a && (i = Zo), qe(e, t, n, r, i)
    }

    function qe(e, t, n, r, i) {
        if (n && n.__ob__) return oo("Avoid using observed data object as vnode data: " + JSON.stringify(n) + "\nAlways create fresh vnode data objects in each render!", e), Eo();
        if (!t) return Eo();
        Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {
            default: r[0]
        }, r.length = 0), i === Zo ? r = Q(r) : i === Wo && (r = G(r));
        var o, a;
        if ("string" == typeof t) {
            var s;
            a = Vi.getTagNamespace(t), o = Vi.isReservedTag(t) ? new So(Vi.parsePlatformTagName(t), n, r, void 0, void 0, e) : (s = L(e.$options, "components", t)) ? je(s, n, e, r, t) : new So(t, n, r, void 0, void 0, e)
        } else o = je(t, n, e, r);
        return o ? (a && Je(o, a), o) : Eo()
    }

    function Je(e, t) {
        if (e.ns = t, "foreignObject" !== e.tag && e.children)
            for (var n = 0, r = e.children.length; n < r; n++) {
                var i = e.children[n];
                i.tag && !i.ns && Je(i, t)
            }
    }

    function ze(e, t) {
        var n, r, i, o, a;
        if (Array.isArray(e) || "string" == typeof e)
            for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
        else if ("number" == typeof e)
            for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
        else if (u(e))
            for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++) a = o[r], n[r] = t(e[a], a, r);
        return n
    }

    function Ke(e, t, n, r) {
        var i = this.$scopedSlots[e];
        if (i) return n = n || {}, r && l(n, r), i(n) || t;
        var o = this.$slots[e];
        return o && (o._rendered && oo('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this), o._rendered = !0), o || t
    }

    function We(e) {
        return L(this.$options, "filters", e, !0) || Ui
    }

    function Ze(e, t, n) {
        var r = Vi.keyCodes[t] || n;
        return Array.isArray(r) ? r.indexOf(e) === -1 : r !== e
    }

    function Ye(e, t, n, r) {
        if (n)
            if (u(n)) {
                Array.isArray(n) && (n = d(n));
                for (var i in n)
                    if ("class" === i || "style" === i) e[i] = n[i];
                    else {
                        var o = e.attrs && e.attrs.type
                            , a = r || Vi.mustUseProp(t, o, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        a[i] = n[i]
                    }
            } else oo("v-bind without argument expects an Object or Array value", this);
        return e
    }

    function Ge(e, t) {
        var n = this._staticTrees[e];
        return n && !t ? Array.isArray(n) ? K(n) : z(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), Xe(n, "__static__" + e, !1), n)
    }

    function Qe(e, t, n) {
        return Xe(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function Xe(e, t, n) {
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && et(e[r], t + "_" + r, n);
        else et(e, t, n)
    }

    function et(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function tt(e) {
        e.$vnode = null, e._vnode = null, e._staticTrees = null;
        var t = e.$options._parentVnode
            , n = t && t.context;
        e.$slots = oe(e.$options._renderChildren, n), e.$scopedSlots = ro, e._c = function(t, n, r, i) {
            return Be(e, t, n, r, i, !1)
        }, e.$createElement = function(t, n, r, i) {
            return Be(e, t, n, r, i, !0)
        }
    }

    function nt(e) {
        var t = e.$options.provide;
        t && (e._provided = "function" == typeof t ? t.call(e) : t)
    }

    function rt(e) {
        var t = e.$options.inject;
        if (t)
            for (var n = Array.isArray(t), r = n ? t : Xi ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++)
                for (var o = r[i], a = n ? o : t[o], s = e; s;) {
                    if (s._provided && a in s._provided) {
                        e[o] = s._provided[a];
                        break
                    }
                    s = s.$parent
                }
    }

    function it(e, t) {
        var n = e.$options = Object.create(e.constructor.options);
        n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
    }

    function ot(e) {
        var t = e.options;
        if (e.super) {
            var n = ot(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = at(e);
                r && l(e.extendOptions, r), t = e.options = P(n, e.extendOptions), t.name && (t.components[t.name] = e)
            }
        }
        return t
    }

    function at(e) {
        var t, n = e.options
            , r = e.sealedOptions;
        for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = st(n[i], r[i]));
        return t
    }

    function st(e, t) {
        if (Array.isArray(e)) {
            var n = [];
            t = Array.isArray(t) ? t : [t];
            for (var r = 0; r < e.length; r++) t.indexOf(e[r]) < 0 && n.push(e[r]);
            return n
        }
        return e
    }

    function ct(e) {
        this instanceof ct || oo("Vue is a constructor and should be called with the `new` keyword"), this._init(e)
    }

    function lt(e) {
        e.use = function(e) {
            if (!e.installed) {
                var t = c(arguments, 1);
                return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t), e.installed = !0, this
            }
        }
    }

    function ut(e) {
        e.mixin = function(e) {
            this.options = P(this.options, e)
        }
    }

    function ft(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this
                , r = n.cid
                , i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var o = e.name || n.options.name;
            /^[a-zA-Z][\w-]*$/.test(o) || oo('Invalid component name: "' + o + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
            var a = function(e) {
                this._init(e)
            };
            return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = P(n.options, e), a.super = n, a.options.props && dt(a), a.options.computed && pt(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Vi._assetTypes.forEach(function(e) {
                a[e] = n[e]
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = l({}, a.options), i[r] = a, a
        }
    }

    function dt(e) {
        var t = e.options.props;
        for (var n in t) be(e.prototype, "_props", n)
    }

    function pt(e) {
        var t = e.options.computed;
        for (var n in t) Ce(e.prototype, n, t[n])
    }

    function vt(e) {
        Vi._assetTypes.forEach(function(t) {
            e[t] = function(e, n) {
                return n ? ("component" === t && Vi.isReservedTag(e) && oo("Do not use built-in or reserved HTML elements as component id: " + e), "component" === t && f(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                    bind: n
                    , update: n
                }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
            }
        })
    }

    function ht(e) {
        return e && (e.Ctor.options.name || e.tag)
    }

    function mt(e, t) {
        return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e instanceof RegExp && e.test(t)
    }

    function gt(e, t) {
        for (var n in e) {
            var r = e[n];
            if (r) {
                var i = ht(r.componentOptions);
                i && !t(i) && (yt(r), e[n] = null)
            }
        }
    }

    function yt(e) {
        e && (e.componentInstance._inactive || ve(e.componentInstance, "deactivated"), e.componentInstance.$destroy())
    }

    function _t(e) {
        for (var t = e.data, n = e, r = e; r.componentInstance;) r = r.componentInstance._vnode, r.data && (t = bt(r.data, t));
        for (; n = n.parent;) n.data && (t = bt(t, n.data));
        return $t(t)
    }

    function bt(e, t) {
        return {
            staticClass: wt(e.staticClass, t.staticClass)
            , class: e.class ? [e.class, t.class] : t.class
        }
    }

    function $t(e) {
        var t = e.class
            , n = e.staticClass;
        return n || t ? wt(n, xt(t)) : ""
    }

    function wt(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function xt(e) {
        var t = "";
        if (!e) return t;
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) {
            for (var n, r = 0, i = e.length; r < i; r++) e[r] && (n = xt(e[r])) && (t += n + " ");
            return t.slice(0, -1)
        }
        if (u(e)) {
            for (var o in e) e[o] && (t += o + " ");
            return t.slice(0, -1)
        }
        return t
    }

    function kt(e) {
        return _a(e) ? "svg" : "math" === e ? "math" : void 0
    }

    function Ct(e) {
        if (!Bi) return !0;
        if ($a(e)) return !1;
        if (e = e.toLowerCase(), null != wa[e]) return wa[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? wa[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : wa[e] = /HTMLUnknownElement/.test(t.toString())
    }

    function At(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t ? t : (oo("Cannot find element: " + e), document.createElement("div"))
        }
        return e
    }

    function Ot(e, t) {
        var n = document.createElement(e);
        return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
    }

    function St(e, t) {
        return document.createElementNS(ga[e], t)
    }

    function Tt(e) {
        return document.createTextNode(e)
    }

    function jt(e) {
        return document.createComment(e)
    }

    function Et(e, t, n) {
        e.insertBefore(t, n)
    }

    function It(e, t) {
        e.removeChild(t)
    }

    function Nt(e, t) {
        e.appendChild(t)
    }

    function Mt(e) {
        return e.parentNode
    }

    function Dt(e) {
        return e.nextSibling
    }

    function Pt(e) {
        return e.tagName
    }

    function Lt(e, t) {
        e.textContent = t
    }

    function Rt(e, t, n) {
        e.setAttribute(t, n)
    }

    function Ft(e, t) {
        var n = e.data.ref;
        if (n) {
            var i = e.context
                , o = e.componentInstance || e.elm
                , a = i.$refs;
            t ? Array.isArray(a[n]) ? r(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(o) < 0 ? a[n].push(o) : a[n] = [o] : a[n] = o
        }
    }

    function Ut(e) {
        return null == e
    }

    function Vt(e) {
        return null != e
    }

    function Ht(e, t) {
        return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && !e.data == !t.data
    }

    function Bt(e, t, n) {
        var r, i, o = {};
        for (r = t; r <= n; ++r) i = e[r].key, Vt(i) && (o[i] = r);
        return o
    }

    function qt(e, t) {
        (e.data.directives || t.data.directives) && Jt(e, t)
    }

    function Jt(e, t) {
        var n, r, i, o = e === Ca
            , a = t === Ca
            , s = zt(e.data.directives, e.context)
            , c = zt(t.data.directives, t.context)
            , l = []
            , u = [];
        for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, Wt(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (Wt(i, "bind", t, e), i.def && i.def.inserted && l.push(i));
        if (l.length) {
            var f = function() {
                for (var n = 0; n < l.length; n++) Wt(l[n], "inserted", t, e)
            };
            o ? Y(t.data.hook || (t.data.hook = {}), "insert", f) : f()
        }
        if (u.length && Y(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                for (var n = 0; n < u.length; n++) Wt(u[n], "componentUpdated", t, e)
            }), !o)
            for (n in s) c[n] || Wt(s[n], "unbind", e, e, a)
    }

    function zt(e, t) {
        var n = Object.create(null);
        if (!e) return n;
        var r, i;
        for (r = 0; r < e.length; r++) i = e[r], i.modifiers || (i.modifiers = Sa), n[Kt(i)] = i, i.def = L(t.$options, "directives", i.name, !0);
        return n
    }

    function Kt(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function Wt(e, t, n, r, i) {
        var o = e.def && e.def[t];
        o && o(n.elm, e, n, r, i)
    }

    function Zt(e, t) {
        if (e.data.attrs || t.data.attrs) {
            var n, r, i = t.elm
                , o = e.data.attrs || {}
                , a = t.data.attrs || {};
            a.__ob__ && (a = t.data.attrs = l({}, a));
            for (n in a) r = a[n], o[n] !== r && Yt(i, n, r);
            zi && a.value !== o.value && Yt(i, "value", a.value);
            for (n in o) null == a[n] && (va(n) ? i.removeAttributeNS(pa, ha(n)) : fa(n) || i.removeAttribute(n))
        }
    }

    function Yt(e, t, n) {
        da(t) ? ma(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : fa(t) ? e.setAttribute(t, ma(n) || "false" === n ? "false" : "true") : va(t) ? ma(n) ? e.removeAttributeNS(pa, ha(t)) : e.setAttributeNS(pa, t, n) : ma(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function Gt(e, t) {
        var n = t.elm
            , r = t.data
            , i = e.data;
        if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
            var o = _t(t)
                , a = n._transitionClasses;
            a && (o = wt(o, xt(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
        }
    }

    function Qt(e) {
        function t() {
            (a || (a = [])).push(e.slice(v, i).trim()), v = i + 1
        }
        var n, r, i, o, a, s = !1
            , c = !1
            , l = !1
            , u = !1
            , f = 0
            , d = 0
            , p = 0
            , v = 0;
        for (i = 0; i < e.length; i++)
            if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);
            else if (c) 34 === n && 92 !== r && (c = !1);
        else if (l) 96 === n && 92 !== r && (l = !1);
        else if (u) 47 === n && 92 !== r && (u = !1);
        else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || d || p) {
            switch (n) {
                case 34:
                    c = !0;
                    break;
                case 39:
                    s = !0;
                    break;
                case 96:
                    l = !0;
                    break;
                case 40:
                    p++;
                    break;
                case 41:
                    p--;
                    break;
                case 91:
                    d++;
                    break;
                case 93:
                    d--;
                    break;
                case 123:
                    f++;
                    break;
                case 125:
                    f--
            }
            if (47 === n) {
                for (var h = i - 1, m = void 0; h >= 0 && " " === (m = e.charAt(h)); h--);
                m && Ia.test(m) || (u = !0)
            }
        } else void 0 === o ? (v = i + 1, o = e.slice(0, i).trim()) : t();
        if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== v && t(), a)
            for (i = 0; i < a.length; i++) o = Xt(o, a[i]);
        return o
    }

    function Xt(e, t) {
        var n = t.indexOf("(");
        return n < 0 ? '_f("' + t + '")(' + e + ")" : '_f("' + t.slice(0, n) + '")(' + e + "," + t.slice(n + 1)
    }

    function en(e) {
        console.error("[Vue compiler]: " + e)
    }

    function tn(e, t) {
        return e ? e.map(function(e) {
            return e[t]
        }).filter(function(e) {
            return e
        }) : []
    }

    function nn(e, t, n) {
        (e.props || (e.props = [])).push({
            name: t
            , value: n
        })
    }

    function rn(e, t, n) {
        (e.attrs || (e.attrs = [])).push({
            name: t
            , value: n
        })
    }

    function on(e, t, n, r, i, o) {
        (e.directives || (e.directives = [])).push({
            name: t
            , rawName: n
            , value: r
            , arg: i
            , modifiers: o
        })
    }

    function an(e, t, n, r, i) {
        r && r.capture && (delete r.capture, t = "!" + t), r && r.once && (delete r.once, t = "~" + t);
        var o;
        r && r.native ? (delete r.native, o = e.nativeEvents || (e.nativeEvents = {})) : o = e.events || (e.events = {});
        var a = {
                value: n
                , modifiers: r
            }
            , s = o[t];
        Array.isArray(s) ? i ? s.unshift(a) : s.push(a) : o[t] = s ? i ? [a, s] : [s, a] : a
    }

    function sn(e, t, n) {
        var r = cn(e, ":" + t) || cn(e, "v-bind:" + t);
        if (null != r) return Qt(r);
        if (n !== !1) {
            var i = cn(e, t);
            if (null != i) return JSON.stringify(i)
        }
    }

    function cn(e, t) {
        var n;
        if (null != (n = e.attrsMap[t]))
            for (var r = e.attrsList, i = 0, o = r.length; i < o; i++)
                if (r[i].name === t) {
                    r.splice(i, 1);
                    break
                }
        return n
    }

    function ln(e, t, n) {
        var r = n || {}
            , i = r.number
            , o = r.trim
            , a = "$$v";
        o && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")");
        var s = un(t, a);
        e.model = {
            value: "(" + t + ")"
            , expression: '"' + t + '"'
            , callback: "function ($$v) {" + s + "}"
        }
    }

    function un(e, t) {
        var n = fn(e);
        return null === n.idx ? e + "=" + t : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}"
    }

    function fn(e) {
        if (ta = e, ea = ta.length, ra = ia = oa = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < ea - 1) return {
            exp: e
            , idx: null
        };
        for (; !pn();) na = dn(), vn(na) ? mn(na) : 91 === na && hn(na);
        return {
            exp: e.substring(0, ia)
            , idx: e.substring(ia + 1, oa)
        }
    }

    function dn() {
        return ta.charCodeAt(++ra)
    }

    function pn() {
        return ra >= ea
    }

    function vn(e) {
        return 34 === e || 39 === e
    }

    function hn(e) {
        var t = 1;
        for (ia = ra; !pn();)
            if (e = dn(), vn(e)) mn(e);
            else if (91 === e && t++, 93 === e && t--, 0 === t) {
            oa = ra;
            break
        }
    }

    function mn(e) {
        for (var t = e; !pn() && (e = dn()) !== t;);
    }

    function gn(e, t, n) {
        aa = n;
        var r = t.value
            , i = t.modifiers
            , o = e.tag
            , a = e.attrsMap.type
            , s = e.attrsMap["v-bind:type"] || e.attrsMap[":type"];
        if ("input" === o && s && aa('<input :type="' + s + '" v-model="' + r + '">:\nv-model does not support dynamic input types. Use v-if branches instead.'), "input" === o && "file" === a && aa("<" + e.tag + ' v-model="' + r + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'), "select" === o) bn(e, r, i);
        else if ("input" === o && "checkbox" === a) yn(e, r, i);
        else if ("input" === o && "radio" === a) _n(e, r, i);
        else if ("input" === o || "textarea" === o) $n(e, r, i);
        else {
            if (!Vi.isReservedTag(o)) return ln(e, r, i), !1;
            aa("<" + e.tag + ' v-model="' + r + "\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.")
        }
        return !0
    }

    function yn(e, t, n) {
        var r = n && n.number
            , i = sn(e, "value") || "null"
            , o = sn(e, "true-value") || "true"
            , a = sn(e, "false-value") || "false";
        nn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), an(e, Ma, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0)
    }

    function _n(e, t, n) {
        var r = n && n.number
            , i = sn(e, "value") || "null";
        i = r ? "_n(" + i + ")" : i, nn(e, "checked", "_q(" + t + "," + i + ")"), an(e, Ma, un(t, i), null, !0)
    }

    function bn(e, t, n) {
        var r = n && n.number
            , i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})"
            , o = "var $$selectedVal = " + i + ";";
        o = o + " " + un(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), an(e, "change", o, null, !0)
    }

    function $n(e, t, n) {
        var r = e.attrsMap.type
            , i = n || {}
            , o = i.lazy
            , a = i.number
            , s = i.trim
            , c = !o && "range" !== r
            , l = o ? "change" : "range" === r ? Na : "input"
            , u = "$event.target.value";
        s && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")");
        var f = un(t, u);
        c && (f = "if($event.target.composing)return;" + f), nn(e, "value", "(" + t + ")"), an(e, l, f, null, !0), (s || a || "number" === r) && an(e, "blur", "$forceUpdate()")
    }

    function wn(e) {
        var t;
        e[Na] && (t = Ji ? "change" : "input", e[t] = [].concat(e[Na], e[t] || []), delete e[Na]), e[Ma] && (t = Yi ? "click" : "change", e[t] = [].concat(e[Ma], e[t] || []), delete e[Ma])
    }

    function xn(e, t, n, r) {
        if (n) {
            var i = t
                , o = sa;
            t = function(n) {
                null !== (1 === arguments.length ? i(n) : i.apply(null, arguments)) && kn(e, t, r, o)
            }
        }
        sa.addEventListener(e, t, r)
    }

    function kn(e, t, n, r) {
        (r || sa).removeEventListener(e, t, n)
    }

    function Cn(e, t) {
        if (e.data.on || t.data.on) {
            var n = t.data.on || {}
                , r = e.data.on || {};
            sa = t.elm, wn(n), Z(n, r, xn, kn, t.context)
        }
    }

    function An(e, t) {
        if (e.data.domProps || t.data.domProps) {
            var n, r, i = t.elm
                , o = e.data.domProps || {}
                , a = t.data.domProps || {};
            a.__ob__ && (a = t.data.domProps = l({}, a));
            for (n in o) null == a[n] && (i[n] = "");
            for (n in a)
                if (r = a[n], "textContent" !== n && "innerHTML" !== n || (t.children && (t.children.length = 0), r !== o[n]))
                    if ("value" === n) {
                        i._value = r;
                        var s = null == r ? "" : String(r);
                        On(i, t, s) && (i.value = s)
                    } else i[n] = r
        }
    }

    function On(e, t, n) {
        return !e.composing && ("option" === t.tag || Sn(e, n) || Tn(e, n))
    }

    function Sn(e, t) {
        return document.activeElement !== e && e.value !== t
    }

    function Tn(e, n) {
        var r = e.value
            , i = e._vModifiers;
        return i && i.number || "number" === e.type ? t(r) !== t(n) : i && i.trim ? r.trim() !== n.trim() : r !== n
    }

    function jn(e) {
        var t = En(e.style);
        return e.staticStyle ? l(e.staticStyle, t) : t
    }

    function En(e) {
        return Array.isArray(e) ? d(e) : "string" == typeof e ? La(e) : e
    }

    function In(e, t) {
        var n, r = {};
        if (t)
            for (var i = e; i.componentInstance;) i = i.componentInstance._vnode, i.data && (n = jn(i.data)) && l(r, n);
        (n = jn(e.data)) && l(r, n);
        for (var o = e; o = o.parent;) o.data && (n = jn(o.data)) && l(r, n);
        return r
    }

    function Nn(e, t) {
        var n = t.data
            , r = e.data;
        if (n.staticStyle || n.style || r.staticStyle || r.style) {
            var i, o, a = t.elm
                , s = e.data.staticStyle
                , c = e.data.style || {}
                , u = s || c
                , f = En(t.data.style) || {};
            t.data.style = f.__ob__ ? l({}, f) : f;
            var d = In(t, !0);
            for (o in u) null == d[o] && Ua(a, o, "");
            for (o in d)(i = d[o]) !== u[o] && Ua(a, o, null == i ? "" : i)
        }
    }

    function Mn(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                return e.classList.add(t)
            }) : e.classList.add(t);
            else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
    }

    function Dn(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                return e.classList.remove(t)
            }) : e.classList.remove(t);
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                e.setAttribute("class", n.trim())
            }
    }

    function Pn(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return e.css !== !1 && l(t, qa(e.name || "v")), l(t, e), t
            }
            return "string" == typeof e ? qa(e) : void 0
        }
    }

    function Ln(e) {
        Qa(function() {
            Qa(e)
        })
    }

    function Rn(e, t) {
        (e._transitionClasses || (e._transitionClasses = [])).push(t), Mn(e, t)
    }

    function Fn(e, t) {
        e._transitionClasses && r(e._transitionClasses, t), Dn(e, t)
    }

    function Un(e, t, n) {
        var r = Vn(e, t)
            , i = r.type
            , o = r.timeout
            , a = r.propCount;
        if (!i) return n();
        var s = i === za ? Za : Ga
            , c = 0
            , l = function() {
                e.removeEventListener(s, u), n()
            }
            , u = function(t) {
                t.target === e && ++c >= a && l()
            };
        setTimeout(function() {
            c < a && l()
        }, o + 1), e.addEventListener(s, u)
    }

    function Vn(e, t) {
        var n, r = window.getComputedStyle(e)
            , i = r[Wa + "Delay"].split(", ")
            , o = r[Wa + "Duration"].split(", ")
            , a = Hn(i, o)
            , s = r[Ya + "Delay"].split(", ")
            , c = r[Ya + "Duration"].split(", ")
            , l = Hn(s, c)
            , u = 0
            , f = 0;
        return t === za ? a > 0 && (n = za, u = a, f = o.length) : t === Ka ? l > 0 && (n = Ka, u = l, f = c.length) : (u = Math.max(a, l), n = u > 0 ? a > l ? za : Ka : null, f = n ? n === za ? o.length : c.length : 0), {
            type: n
            , timeout: u
            , propCount: f
            , hasTransform: n === za && Xa.test(r[Wa + "Property"])
        }
    }

    function Hn(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max.apply(null, t.map(function(t, n) {
            return Bn(t) + Bn(e[n])
        }))
    }

    function Bn(e) {
        return 1e3 * Number(e.slice(0, -1))
    }

    function qn(e, n) {
        var r = e.elm;
        r._leaveCb && (r._leaveCb.cancelled = !0, r._leaveCb());
        var i = Pn(e.data.transition);
        if (i && !r._enterCb && 1 === r.nodeType) {
            for (var o = i.css, a = i.type, s = i.enterClass, c = i.enterToClass, l = i.enterActiveClass, f = i.appearClass, d = i.appearToClass, p = i.appearActiveClass, v = i.beforeEnter, h = i.enter, g = i.afterEnter, y = i.enterCancelled, _ = i.beforeAppear, b = i.appear, $ = i.afterAppear, w = i.appearCancelled, x = i.duration, k = No, C = No.$vnode; C && C.parent;) C = C.parent, k = C.context;
            var A = !k._isMounted || !e.isRootInsert;
            if (!A || b || "" === b) {
                var O = A && f ? f : s
                    , S = A && p ? p : l
                    , T = A && d ? d : c
                    , j = A ? _ || v : v
                    , E = A && "function" == typeof b ? b : h
                    , I = A ? $ || g : g
                    , N = A ? w || y : y
                    , M = t(u(x) ? x.enter : x);
                null != M && zn(M, "enter", e);
                var D = o !== !1 && !zi
                    , P = Wn(E)
                    , L = r._enterCb = m(function() {
                        D && (Fn(r, T), Fn(r, S)), L.cancelled ? (D && Fn(r, O), N && N(r)) : I && I(r), r._enterCb = null
                    });
                e.data.show || Y(e.data.hook || (e.data.hook = {}), "insert", function() {
                    var t = r.parentNode
                        , n = t && t._pending && t._pending[e.key];
                    n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), E && E(r, L)
                }), j && j(r), D && (Rn(r, O), Rn(r, S), Ln(function() {
                    Rn(r, T), Fn(r, O), L.cancelled || P || (Kn(M) ? setTimeout(L, M) : Un(r, a, L))
                })), e.data.show && (n && n(), E && E(r, L)), D || P || L()
            }
        }
    }

    function Jn(e, n) {
        function r() {
            w.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), d && d(i), _ && (Rn(i, c), Rn(i, f), Ln(function() {
                Rn(i, l), Fn(i, c), w.cancelled || b || (Kn($) ? setTimeout(w, $) : Un(i, s, w))
            })), p && p(i, w), _ || b || w())
        }
        var i = e.elm;
        i._enterCb && (i._enterCb.cancelled = !0, i._enterCb());
        var o = Pn(e.data.transition);
        if (!o) return n();
        if (!i._leaveCb && 1 === i.nodeType) {
            var a = o.css
                , s = o.type
                , c = o.leaveClass
                , l = o.leaveToClass
                , f = o.leaveActiveClass
                , d = o.beforeLeave
                , p = o.leave
                , v = o.afterLeave
                , h = o.leaveCancelled
                , g = o.delayLeave
                , y = o.duration
                , _ = a !== !1 && !zi
                , b = Wn(p)
                , $ = t(u(y) ? y.leave : y);
            null != $ && zn($, "leave", e);
            var w = i._leaveCb = m(function() {
                i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (Fn(i, l), Fn(i, f)), w.cancelled ? (_ && Fn(i, c), h && h(i)) : (n(), v && v(i)), i._leaveCb = null
            });
            g ? g(r) : r()
        }
    }

    function zn(e, t, n) {
        "number" != typeof e ? oo("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && oo("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context)
    }

    function Kn(e) {
        return "number" == typeof e && !isNaN(e)
    }

    function Wn(e) {
        if (!e) return !1;
        var t = e.fns;
        return t ? Wn(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
    }

    function Zn(e, t) {
        t.data.show || qn(t)
    }

    function Yn(e, t, n) {
        var r = t.value
            , i = e.multiple;
        if (i && !Array.isArray(r)) return void oo('<select multiple v-model="' + t.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(r).slice(8, -1), n);
        for (var o, a, s = 0, c = e.options.length; s < c; s++)
            if (a = e.options[s], i) o = h(r, Qn(a)) > -1, a.selected !== o && (a.selected = o);
            else if (v(Qn(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
        i || (e.selectedIndex = -1)
    }

    function Gn(e, t) {
        for (var n = 0, r = t.length; n < r; n++)
            if (v(Qn(t[n]), e)) return !1;
        return !0
    }

    function Qn(e) {
        return "_value" in e ? e._value : e.value
    }

    function Xn(e) {
        e.target.composing = !0
    }

    function er(e) {
        e.target.composing = !1, tr(e.target, "input")
    }

    function tr(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function nr(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : nr(e.componentInstance._vnode)
    }

    function rr(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? rr(ee(t.children)) : e
    }

    function ir(e) {
        var t = {}
            , n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var i = n._parentListeners;
        for (var o in i) t[Mi(o)] = i[o];
        return t
    }

    function or(e, t) {
        return /\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
    }

    function ar(e) {
        for (; e = e.parent;)
            if (e.data.transition) return !0
    }

    function sr(e, t) {
        return t.key === e.key && t.tag === e.tag
    }

    function cr(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function lr(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }

    function ur(e) {
        var t = e.data.pos
            , n = e.data.newPos
            , r = t.left - n.left
            , i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var o = e.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
        }
    }

    function fr(e) {
        return ds = ds || document.createElement("div"), ds.innerHTML = e, ds.textContent
    }

    function dr(e, t) {
        var n = t ? Zs : Ws;
        return e.replace(n, function(e) {
            return Ks[e]
        })
    }

    function pr(e, t) {
        function n(t) {
            l += t, e = e.substring(t)
        }

        function r(e, n, r) {
            var i, s;
            if (null == n && (n = l), null == r && (r = l), e && (s = e.toLowerCase()), e)
                for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--);
            else i = 0;
            if (i >= 0) {
                for (var c = a.length - 1; c >= i; c--)(c > i || !e) && t.warn && t.warn("tag <" + a[c].tag + "> has no matching end tag."), t.end && t.end(a[c].tag, n, r);
                a.length = i, o = i && a[i - 1].tag
            } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
        }
        for (var i, o, a = [], s = t.expectHTML, c = t.isUnaryTag || Fi, l = 0; e;) {
            if (i = e, o && Js(o)) {
                var u = o.toLowerCase()
                    , f = zs[u] || (zs[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i"))
                    , d = 0
                    , p = e.replace(f, function(e, n, r) {
                        return d = r.length, "script" !== u && "style" !== u && "noscript" !== u && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), t.chars && t.chars(n), ""
                    });
                l += e.length - p.length, e = p, r(u, l - d, l)
            } else {
                var v = e.indexOf("<");
                if (0 === v) {
                    if (ks.test(e)) {
                        var h = e.indexOf("-->");
                        if (h >= 0) {
                            n(h + 3);
                            continue
                        }
                    }
                    if (Cs.test(e)) {
                        var m = e.indexOf("]>");
                        if (m >= 0) {
                            n(m + 2);
                            continue
                        }
                    }
                    var g = e.match(xs);
                    if (g) {
                        n(g[0].length);
                        continue
                    }
                    var y = e.match(ws);
                    if (y) {
                        var _ = l;
                        n(y[0].length), r(y[1], _, l);
                        continue
                    }
                    var b = function() {
                        var t = e.match(bs);
                        if (t) {
                            var r = {
                                tagName: t[1]
                                , attrs: []
                                , start: l
                            };
                            n(t[0].length);
                            for (var i, o; !(i = e.match($s)) && (o = e.match(ys));) n(o[0].length), r.attrs.push(o);
                            if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r
                        }
                    }();
                    if (b) {
                        ! function(e) {
                            var n = e.tagName
                                , i = e.unarySlash;
                            s && ("p" === o && ms(n) && r(o), hs(n) && o === n && r(n));
                            for (var l = c(n) || "html" === n && "head" === o || !!i, u = e.attrs.length, f = new Array(u), d = 0; d < u; d++) {
                                var p = e.attrs[d];
                                As && p[0].indexOf('""') === -1 && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);
                                var v = p[3] || p[4] || p[5] || "";
                                f[d] = {
                                    name: p[1]
                                    , value: dr(v, t.shouldDecodeNewlines)
                                }
                            }
                            l || (a.push({
                                tag: n
                                , lowerCasedTag: n.toLowerCase()
                                , attrs: f
                            }), o = n), t.start && t.start(n, f, l, e.start, e.end)
                        }(b);
                        continue
                    }
                }
                var $ = void 0
                    , w = void 0
                    , x = void 0;
                if (v >= 0) {
                    for (w = e.slice(v); !(ws.test(w) || bs.test(w) || ks.test(w) || Cs.test(w)) && !((x = w.indexOf("<", 1)) < 0);) v += x, w = e.slice(v);
                    $ = e.substring(0, v), n(v)
                }
                v < 0 && ($ = e, e = ""), t.chars && $ && t.chars($)
            }
            if (e === i) {
                t.chars && t.chars(e), !a.length && t.warn && t.warn('Mal-formatted tag at end of template: "' + e + '"');
                break
            }
        }
        r()
    }

    function vr(e, t) {
        var n = t ? Gs(t) : Ys;
        if (n.test(e)) {
            for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(e);) {
                i = r.index, i > a && o.push(JSON.stringify(e.slice(a, i)));
                var s = Qt(r[1].trim());
                o.push("_s(" + s + ")"), a = i + r[0].length
            }
            return a < e.length && o.push(JSON.stringify(e.slice(a))), o.join("+")
        }
    }

    function hr(e, t) {
        function n(e) {
            e.pre && (s = !1), js(e.tag) && (c = !1)
        }
        Os = t.warn || en, Ss = t.getTagNamespace || Fi, Ts = t.mustUseProp || Fi, js = t.isPreTag || Fi, Es = tn(t.modules, "preTransformNode"), Is = tn(t.modules, "transformNode"), Ns = tn(t.modules, "postTransformNode"), Ms = t.delimiters;
        var r, i, o = []
            , a = t.preserveWhitespace !== !1
            , s = !1
            , c = !1
            , l = !1;
        return pr(e, {
            warn: Os
            , expectHTML: t.expectHTML
            , isUnaryTag: t.isUnaryTag
            , shouldDecodeNewlines: t.shouldDecodeNewlines
            , start: function(e, a, u) {
                function f(e) {
                    l || ("slot" !== e.tag && "template" !== e.tag || (l = !0, Os("Cannot use <" + e.tag + "> as component root element because it may contain multiple nodes.")), e.attrsMap.hasOwnProperty("v-for") && (l = !0, Os("Cannot use v-for on stateful component root element because it renders multiple elements.")))
                }
                var d = i && i.ns || Ss(e);
                Ji && "svg" === d && (a = Nr(a));
                var p = {
                    type: 1
                    , tag: e
                    , attrsList: a
                    , attrsMap: Er(a)
                    , parent: i
                    , children: []
                };
                d && (p.ns = d), Ir(p) && !Gi() && (p.forbidden = !0, Os("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + e + ">, as they will not be parsed."));
                for (var v = 0; v < Es.length; v++) Es[v](p, t);
                if (s || (mr(p), p.pre && (s = !0)), js(p.tag) && (c = !0), s) gr(p);
                else {
                    br(p), $r(p), Cr(p), yr(p), p.plain = !p.key && !a.length, _r(p), Ar(p), Or(p);
                    for (var h = 0; h < Is.length; h++) Is[h](p, t);
                    Sr(p)
                }
                if (r ? o.length || (r.if && (p.elseif || p.else) ? (f(p), kr(r, {
                        exp: p.elseif
                        , block: p
                    })) : l || (l = !0, Os("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead."))) : (r = p, f(r)), i && !p.forbidden)
                    if (p.elseif || p.else) wr(p, i);
                    else if (p.slotScope) {
                    i.plain = !1;
                    var m = p.slotTarget || '"default"';
                    (i.scopedSlots || (i.scopedSlots = {}))[m] = p
                } else i.children.push(p), p.parent = i;
                u ? n(p) : (i = p, o.push(p));
                for (var g = 0; g < Ns.length; g++) Ns[g](p, t)
            }
            , end: function() {
                var e = o[o.length - 1]
                    , t = e.children[e.children.length - 1];
                t && 3 === t.type && " " === t.text && !c && e.children.pop(), o.length -= 1, i = o[o.length - 1], n(e)
            }
            , chars: function(t) {
                if (!i) return void(l || t !== e || (l = !0, Os("Component template requires a root element, rather than just text.")));
                if (!Ji || "textarea" !== i.tag || i.attrsMap.placeholder !== t) {
                    var n = i.children;
                    if (t = c || t.trim() ? oc(t) : a && n.length ? " " : "") {
                        var r;
                        !s && " " !== t && (r = vr(t, Ms)) ? n.push({
                            type: 2
                            , expression: r
                            , text: t
                        }) : " " === t && n.length && " " === n[n.length - 1].text || n.push({
                            type: 3
                            , text: t
                        })
                    }
                }
            }
        }), r
    }

    function mr(e) {
        null != cn(e, "v-pre") && (e.pre = !0)
    }

    function gr(e) {
        var t = e.attrsList.length;
        if (t)
            for (var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = {
                name: e.attrsList[r].name
                , value: JSON.stringify(e.attrsList[r].value)
            };
        else e.pre || (e.plain = !0)
    }

    function yr(e) {
        var t = sn(e, "key");
        t && ("template" === e.tag && Os("<template> cannot be keyed. Place the key on real elements instead."), e.key = t)
    }

    function _r(e) {
        var t = sn(e, "ref");
        t && (e.ref = t, e.refInFor = Tr(e))
    }

    function br(e) {
        var t;
        if (t = cn(e, "v-for")) {
            var n = t.match(ec);
            if (!n) return void Os("Invalid v-for expression: " + t);
            e.for = n[2].trim();
            var r = n[1].trim()
                , i = r.match(tc);
            i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = r
        }
    }

    function $r(e) {
        var t = cn(e, "v-if");
        if (t) e.if = t, kr(e, {
            exp: t
            , block: e
        });
        else {
            null != cn(e, "v-else") && (e.else = !0);
            var n = cn(e, "v-else-if");
            n && (e.elseif = n)
        }
    }

    function wr(e, t) {
        var n = xr(t.children);
        n && n.if ? kr(n, {
            exp: e.elseif
            , block: e
        }) : Os("v-" + (e.elseif ? 'else-if="' + e.elseif + '"' : "else") + " used on element <" + e.tag + "> without corresponding v-if.")
    }

    function xr(e) {
        for (var t = e.length; t--;) {
            if (1 === e[t].type) return e[t];
            " " !== e[t].text && Os('text "' + e[t].text.trim() + '" between v-if and v-else(-if) will be ignored.'), e.pop()
        }
    }

    function kr(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function Cr(e) {
        null != cn(e, "v-once") && (e.once = !0)
    }

    function Ar(e) {
        if ("slot" === e.tag) e.slotName = sn(e, "name"), e.key && Os("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.");
        else {
            var t = sn(e, "slot");
            t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = cn(e, "scope"))
        }
    }

    function Or(e) {
        var t;
        (t = sn(e, "is")) && (e.component = t), null != cn(e, "inline-template") && (e.inlineTemplate = !0)
    }

    function Sr(e) {
        var t, n, r, i, o, a, s, c, l = e.attrsList;
        for (t = 0, n = l.length; t < n; t++)
            if (r = i = l[t].name, o = l[t].value, Qs.test(r))
                if (e.hasBindings = !0, s = jr(r), s && (r = r.replace(ic, "")), nc.test(r)) r = r.replace(nc, ""), o = Qt(o), c = !1, s && (s.prop && (c = !0, "innerHtml" === (r = Mi(r)) && (r = "innerHTML")), s.camel && (r = Mi(r))), c || Ts(e.tag, e.attrsMap.type, r) ? nn(e, r, o) : rn(e, r, o);
                else if (Xs.test(r)) r = r.replace(Xs, ""), an(e, r, o, s);
        else {
            r = r.replace(Qs, "");
            var u = r.match(rc);
            u && (a = u[1]) && (r = r.slice(0, -(a.length + 1))), on(e, r, i, o, a, s), "model" === r && Mr(e, o)
        } else {
            var f = vr(o, Ms);
            f && Os(r + '="' + o + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'), rn(e, r, JSON.stringify(o))
        }
    }

    function Tr(e) {
        for (var t = e; t;) {
            if (void 0 !== t.for) return !0;
            t = t.parent
        }
        return !1
    }

    function jr(e) {
        var t = e.match(ic);
        if (t) {
            var n = {};
            return t.forEach(function(e) {
                n[e.slice(1)] = !0
            }), n
        }
    }

    function Er(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] && !Ji && Os("duplicate attribute: " + e[n].name), t[e[n].name] = e[n].value;
        return t
    }

    function Ir(e) {
        return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
    }

    function Nr(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            ac.test(r.name) || (r.name = r.name.replace(sc, ""), t.push(r))
        }
        return t
    }

    function Mr(e, t) {
        for (var n = e; n;) n.for && n.alias === t && Os("<" + e.tag + ' v-model="' + t + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'), n = n.parent
    }

    function Dr(e, t) {
        e && (Ds = cc(t.staticKeys || ""), Ps = t.isReservedTag || Fi, Lr(e), Rr(e, !1))
    }

    function Pr(e) {
        return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
    }

    function Lr(e) {
        if (e.static = Ur(e), 1 === e.type) {
            if (!Ps(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
            for (var t = 0, n = e.children.length; t < n; t++) {
                var r = e.children[t];
                Lr(r), r.static || (e.static = !1)
            }
        }
    }

    function Rr(e, t) {
        if (1 === e.type) {
            if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
            if (e.staticRoot = !1, e.children)
                for (var n = 0, r = e.children.length; n < r; n++) Rr(e.children[n], t || !!e.for);
            e.ifConditions && Fr(e.ifConditions, t)
        }
    }

    function Fr(e, t) {
        for (var n = 1, r = e.length; n < r; n++) Rr(e[n].block, t)
    }

    function Ur(e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || Ii(e.tag) || !Ps(e.tag) || Vr(e) || !Object.keys(e).every(Ds))))
    }

    function Vr(e) {
        for (; e.parent;) {
            if (e = e.parent, "template" !== e.tag) return !1;
            if (e.for) return !0
        }
        return !1
    }

    function Hr(e, t) {
        var n = t ? "nativeOn:{" : "on:{";
        for (var r in e) n += '"' + r + '":' + Br(r, e[r]) + ",";
        return n.slice(0, -1) + "}"
    }

    function Br(e, t) {
        if (!t) return "function(){}";
        if (Array.isArray(t)) return "[" + t.map(function(t) {
            return Br(e, t)
        }).join(",") + "]";
        var n = uc.test(t.value)
            , r = lc.test(t.value);
        if (t.modifiers) {
            var i = ""
                , o = [];
            for (var a in t.modifiers) pc[a] ? (i += pc[a], fc[a] && o.push(a)) : o.push(a);
            o.length && (i += qr(o));
            return "function($event){" + i + (n ? t.value + "($event)" : r ? "(" + t.value + ")($event)" : t.value) + "}"
        }
        return n || r ? t.value : "function($event){" + t.value + "}"
    }

    function qr(e) {
        return "if(!('button' in $event)&&" + e.map(Jr).join("&&") + ")return null;"
    }

    function Jr(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = fc[e];
        return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")"
    }

    function zr(e, t) {
        e.wrapData = function(n) {
            return "_b(" + n + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")"
        }
    }

    function Kr(e, t) {
        var n = Hs
            , r = Hs = []
            , i = Bs;
        Bs = 0, qs = t, Ls = t.warn || en, Rs = tn(t.modules, "transformCode"), Fs = tn(t.modules, "genData"), Us = t.directives || {}, Vs = t.isReservedTag || Fi;
        var o = e ? Wr(e) : '_c("div")';
        return Hs = n, Bs = i, {
            render: "with(this){return " + o + "}"
            , staticRenderFns: r
        }
    }

    function Wr(e) {
        if (e.staticRoot && !e.staticProcessed) return Zr(e);
        if (e.once && !e.onceProcessed) return Yr(e);
        if (e.for && !e.forProcessed) return Xr(e);
        if (e.if && !e.ifProcessed) return Gr(e);
        if ("template" !== e.tag || e.slotTarget) {
            if ("slot" === e.tag) return fi(e);
            var t;
            if (e.component) t = di(e.component, e);
            else {
                var n = e.plain ? void 0 : ei(e)
                    , r = e.inlineTemplate ? null : oi(e, !0);
                t = "_c('" + e.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")"
            }
            for (var i = 0; i < Rs.length; i++) t = Rs[i](e, t);
            return t
        }
        return oi(e) || "void 0"
    }

    function Zr(e) {
        return e.staticProcessed = !0, Hs.push("with(this){return " + Wr(e) + "}"), "_m(" + (Hs.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function Yr(e) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Gr(e);
        if (e.staticInFor) {
            for (var t = "", n = e.parent; n;) {
                if (n.for) {
                    t = n.key;
                    break
                }
                n = n.parent
            }
            return t ? "_o(" + Wr(e) + "," + Bs++ + (t ? "," + t : "") + ")" : (Ls("v-once can only be used inside v-for that is keyed. "), Wr(e))
        }
        return Zr(e)
    }

    function Gr(e) {
        return e.ifProcessed = !0, Qr(e.ifConditions.slice())
    }

    function Qr(e) {
        function t(e) {
            return e.once ? Yr(e) : Wr(e)
        }
        if (!e.length) return "_e()";
        var n = e.shift();
        return n.exp ? "(" + n.exp + ")?" + t(n.block) + ":" + Qr(e) : "" + t(n.block)
    }

    function Xr(e) {
        var t = e.for
            , n = e.alias
            , r = e.iterator1 ? "," + e.iterator1 : ""
            , i = e.iterator2 ? "," + e.iterator2 : "";
        return ci(e) && "slot" !== e.tag && "template" !== e.tag && !e.key && Ls("<" + e.tag + ' v-for="' + n + " in " + t + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', !0), e.forProcessed = !0, "_l((" + t + "),function(" + n + r + i + "){return " + Wr(e) + "})"
    }

    function ei(e) {
        var t = "{"
            , n = ti(e);
        n && (t += n + ","), e.key && (t += "key:" + e.key + ","), e.ref && (t += "ref:" + e.ref + ","), e.refInFor && (t += "refInFor:true,"), e.pre && (t += "pre:true,"), e.component && (t += 'tag:"' + e.tag + '",');
        for (var r = 0; r < Fs.length; r++) t += Fs[r](e);
        if (e.attrs && (t += "attrs:{" + pi(e.attrs) + "},"), e.props && (t += "domProps:{" + pi(e.props) + "},"), e.events && (t += Hr(e.events) + ","), e.nativeEvents && (t += Hr(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += ri(e.scopedSlots) + ","), e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var i = ni(e);
            i && (t += i + ",")
        }
        return t = t.replace(/,$/, "") + "}", e.wrapData && (t = e.wrapData(t)), t
    }

    function ti(e) {
        var t = e.directives;
        if (t) {
            var n, r, i, o, a = "directives:["
                , s = !1;
            for (n = 0, r = t.length; n < r; n++) {
                i = t[n], o = !0;
                var c = Us[i.name] || vc[i.name];
                c && (o = !!c(e, i, Ls)), o && (s = !0, a += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
            }
            return s ? a.slice(0, -1) + "]" : void 0
        }
    }

    function ni(e) {
        var t = e.children[0];
        if ((e.children.length > 1 || 1 !== t.type) && Ls("Inline-template components must have exactly one child element."), 1 === t.type) {
            var n = Kr(t, qs);
            return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function(e) {
                return "function(){" + e + "}"
            }).join(",") + "]}"
        }
    }

    function ri(e) {
        return "scopedSlots:_u([" + Object.keys(e).map(function(t) {
            return ii(t, e[t])
        }).join(",") + "])"
    }

    function ii(e, t) {
        return "[" + e + ",function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? oi(t) || "void 0" : Wr(t)) + "}]"
    }

    function oi(e, t) {
        var n = e.children;
        if (n.length) {
            var r = n[0];
            if (1 === n.length && r.for && "template" !== r.tag && "slot" !== r.tag) return Wr(r);
            var i = t ? ai(n) : 0;
            return "[" + n.map(li).join(",") + "]" + (i ? "," + i : "")
        }
    }

    function ai(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = e[n];
            if (1 === r.type) {
                if (si(r) || r.ifConditions && r.ifConditions.some(function(e) {
                        return si(e.block)
                    })) {
                    t = 2;
                    break
                }(ci(r) || r.ifConditions && r.ifConditions.some(function(e) {
                    return ci(e.block)
                })) && (t = 1)
            }
        }
        return t
    }

    function si(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function ci(e) {
        return !Vs(e.tag)
    }

    function li(e) {
        return 1 === e.type ? Wr(e) : ui(e)
    }

    function ui(e) {
        return "_v(" + (2 === e.type ? e.expression : vi(JSON.stringify(e.text))) + ")"
    }

    function fi(e) {
        var t = e.slotName || '"default"'
            , n = oi(e)
            , r = "_t(" + t + (n ? "," + n : "")
            , i = e.attrs && "{" + e.attrs.map(function(e) {
                return Mi(e.name) + ":" + e.value
            }).join(",") + "}"
            , o = e.attrsMap["v-bind"];
        return !i && !o || n || (r += ",null"), i && (r += "," + i), o && (r += (i ? "" : ",null") + "," + o), r + ")"
    }

    function di(e, t) {
        var n = t.inlineTemplate ? null : oi(t, !0);
        return "_c(" + e + "," + ei(t) + (n ? "," + n : "") + ")"
    }

    function pi(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            t += '"' + r.name + '":' + vi(r.value) + ","
        }
        return t.slice(0, -1)
    }

    function vi(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }

    function hi(e) {
        var t = [];
        return e && mi(e, t), t
    }

    function mi(e, t) {
        if (1 === e.type) {
            for (var n in e.attrsMap)
                if (Qs.test(n)) {
                    var r = e.attrsMap[n];
                    r && ("v-for" === n ? yi(e, 'v-for="' + r + '"', t) : Xs.test(n) ? gi(r, n + '="' + r + '"', t) : bi(r, n + '="' + r + '"', t))
                }
            if (e.children)
                for (var i = 0; i < e.children.length; i++) mi(e.children[i], t)
        } else 2 === e.type && bi(e.expression, e.text, t)
    }

    function gi(e, t, n) {
        var r = e.replace(yc, "").match(mc);
        r && n.push('avoid using JavaScript unary operator as property name: "' + r[0] + '" in expression ' + t.trim()), bi(e, t, n)
    }

    function yi(e, t, n) {
        bi(e.for || "", t, n), _i(e.alias, "v-for alias", t, n), _i(e.iterator1, "v-for iterator", t, n), _i(e.iterator2, "v-for iterator", t, n)
    }

    function _i(e, t, n, r) {
        "string" != typeof e || gc.test(e) || r.push("invalid " + t + ' "' + e + '" in expression: ' + n.trim())
    }

    function bi(e, t, n) {
        try {
            new Function("return " + e)
        } catch (i) {
            var r = e.replace(yc, "").match(hc);
            r ? n.push('avoid using JavaScript keyword as property name: "' + r[0] + '" in expression ' + t.trim()) : n.push("invalid expression: " + t.trim())
        }
    }

    function $i(e, t) {
        var n = hr(e.trim(), t);
        Dr(n, t);
        var r = Kr(n, t);
        return {
            ast: n
            , render: r.render
            , staticRenderFns: r.staticRenderFns
        }
    }

    function wi(e, t) {
        try {
            return new Function(e)
        } catch (n) {
            return t.push({
                err: n
                , code: e
            }), p
        }
    }

    function xi(e, t) {
        var n = t.warn || en
            , r = cn(e, "class");
        if (r) {
            vr(r, t.delimiters) && n('class="' + r + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.')
        }
        r && (e.staticClass = JSON.stringify(r));
        var i = sn(e, "class", !1);
        i && (e.classBinding = i)
    }

    function ki(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
    }

    function Ci(e, t) {
        var n = t.warn || en
            , r = cn(e, "style");
        if (r) {
            vr(r, t.delimiters) && n('style="' + r + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'), e.staticStyle = JSON.stringify(La(r))
        }
        var i = sn(e, "style", !1);
        i && (e.styleBinding = i)
    }

    function Ai(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
    }

    function Oi(e, t) {
        t.value && nn(e, "textContent", "_s(" + t.value + ")")
    }

    function Si(e, t) {
        t.value && nn(e, "innerHTML", "_s(" + t.value + ")")
    }

    function Ti(e) {
        if (e.outerHTML) return e.outerHTML;
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML
    }
    var ji, Ei, Ii = n("slot,component", !0)
        , Ni = Object.prototype.hasOwnProperty
        , Mi = a(function(e) {
            return e.replace(/-(\w)/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        })
        , Di = a(function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        })
        , Pi = a(function(e) {
            return e.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase()
        })
        , Li = Object.prototype.toString
        , Ri = "[object Object]"
        , Fi = function() {
            return !1
        }
        , Ui = function(e) {
            return e
        }
        , Vi = {
            optionMergeStrategies: Object.create(null)
            , silent: !1
            , productionTip: 1
            , devtools: 1
            , performance: 1
            , errorHandler: null
            , ignoredElements: []
            , keyCodes: Object.create(null)
            , isReservedTag: Fi
            , isUnknownElement: Fi
            , getTagNamespace: p
            , parsePlatformTagName: Ui
            , mustUseProp: Fi
            , _assetTypes: ["component", "directive", "filter"]
            , _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"]
            , _maxUpdateCount: 100
        }
        , Hi = "__proto__" in {}
        , Bi = "undefined" != typeof window
        , qi = Bi && window.navigator.userAgent.toLowerCase()
        , Ji = qi && /msie|trident/.test(qi)
        , zi = qi && qi.indexOf("msie 9.0") > 0
        , Ki = qi && qi.indexOf("edge/") > 0
        , Wi = qi && qi.indexOf("android") > 0
        , Zi = qi && /iphone|ipad|ipod|ios/.test(qi)
        , Yi = qi && /chrome\/\d+/.test(qi) && !Ki
        , Gi = function() {
            return void 0 === ji && (ji = !Bi && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), ji
        }
        , Qi = Bi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
        , Xi = "undefined" != typeof Symbol && g(Symbol) && "undefined" != typeof Reflect && g(Reflect.ownKeys)
        , eo = function() {
            function e() {
                r = !1;
                var e = n.slice(0);
                n.length = 0;
                for (var t = 0; t < e.length; t++) e[t]()
            }
            var t, n = []
                , r = !1;
            if ("undefined" != typeof Promise && g(Promise)) {
                var i = Promise.resolve()
                    , o = function(e) {
                        console.error(e)
                    };
                t = function() {
                    i.then(e).catch(o), Zi && setTimeout(p)
                }
            } else if ("undefined" == typeof MutationObserver || !g(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function() {
                setTimeout(e, 0)
            };
            else {
                var a = 1
                    , s = new MutationObserver(e)
                    , c = document.createTextNode(String(a));
                s.observe(c, {
                    characterData: !0
                }), t = function() {
                    a = (a + 1) % 2, c.data = String(a)
                }
            }
            return function(e, i) {
                var o;
                if (n.push(function() {
                        e && e.call(i), o && o(i)
                    }), r || (r = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    o = e
                })
            }
        }();
    Ei = "undefined" != typeof Set && g(Set) ? Set : function() {
        function e() {
            this.set = Object.create(null)
        }
        return e.prototype.has = function(e) {
            return this.set[e] === !0
        }, e.prototype.add = function(e) {
            this.set[e] = !0
        }, e.prototype.clear = function() {
            this.set = Object.create(null)
        }, e
    }();
    var to;
    !(to = Bi && window.performance) || to.mark && to.measure || (to = void 0);
    var no, ro = Object.freeze({})
        , io = /[^\w.$]/
        , oo = p
        , ao = p
        , so = "undefined" != typeof console
        , co = function(e) {
            return e.replace(/(?:^|[-_])(\w)/g, function(e) {
                return e.toUpperCase()
            }).replace(/[-_]/g, "")
        };
    oo = function(e, t) {
        so && !Vi.silent && console.error("[Vue warn]: " + e + " " + (t ? lo(no(t)) : ""))
    }, ao = function(e, t) {
        so && !Vi.silent && console.warn("[Vue tip]: " + e + " " + (t ? lo(no(t)) : ""))
    }, no = function(e, t) {
        if (e.$root === e) return "<Root>";
        var n = e._isVue ? e.$options.name || e.$options._componentTag : e.name
            , r = e._isVue && e.$options.__file;
        if (!n && r) {
            var i = r.match(/([^\/\\]+)\.vue$/);
            n = i && i[1]
        }
        return (n ? "<" + co(n) + ">" : "<Anonymous>") + (r && t !== !1 ? " at " + r : "")
    };
    var lo = function(e) {
            return "<Anonymous>" === e && (e += ' - use the "name" option for better debugging messages.'), "\n(found in " + e + ")"
        }
        , uo = 0
        , fo = function() {
            this.id = uo++, this.subs = []
        };
    fo.prototype.addSub = function(e) {
        this.subs.push(e)
    }, fo.prototype.removeSub = function(e) {
        r(this.subs, e)
    }, fo.prototype.depend = function() {
        fo.target && fo.target.addDep(this)
    }, fo.prototype.notify = function() {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
    }, fo.target = null;
    var po = []
        , vo = Array.prototype
        , ho = Object.create(vo);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
        var t = vo[e];
        _(ho, e, function() {
            for (var n = arguments, r = arguments.length, i = new Array(r); r--;) i[r] = n[r];
            var o, a = t.apply(this, i)
                , s = this.__ob__;
            switch (e) {
                case "push":
                    o = i;
                    break;
                case "unshift":
                    o = i;
                    break;
                case "splice":
                    o = i.slice(2)
            }
            return o && s.observeArray(o), s.dep.notify(), a
        })
    });
    var mo = Object.getOwnPropertyNames(ho)
        , go = {
            shouldConvert: !0
            , isSettingProps: !1
        }
        , yo = function(e) {
            if (this.value = e, this.dep = new fo, this.vmCount = 0, _(e, "__ob__", this), Array.isArray(e)) {
                (Hi ? x : k)(e, ho, mo), this.observeArray(e)
            } else this.walk(e)
        };
    yo.prototype.walk = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) A(e, t[n], e[t[n]])
    }, yo.prototype.observeArray = function(e) {
        for (var t = 0, n = e.length; t < n; t++) C(e[t])
    };
    var _o = Vi.optionMergeStrategies;
    _o.el = _o.propsData = function(e, t, n, r) {
        return n || oo('option "' + r + '" can only be used during instance creation with the `new` keyword.'), $o(e, t)
    }, _o.data = function(e, t, n) {
        return n ? e || t ? function() {
            var r = "function" == typeof t ? t.call(n) : t
                , i = "function" == typeof e ? e.call(n) : void 0;
            return r ? j(r, i) : i
        } : void 0 : t ? "function" != typeof t ? (oo('The "data" option should be a function that returns a per-instance value in component definitions.', n), e) : e ? function() {
            return j(t.call(this), e.call(this))
        } : t : e
    }, Vi._lifecycleHooks.forEach(function(e) {
        _o[e] = E
    }), Vi._assetTypes.forEach(function(e) {
        _o[e + "s"] = I
    }), _o.watch = function(e, t) {
        if (!t) return Object.create(e || null);
        if (!e) return t;
        var n = {};
        l(n, e);
        for (var r in t) {
            var i = n[r]
                , o = t[r];
            i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o]
        }
        return n
    }, _o.props = _o.methods = _o.computed = function(e, t) {
        if (!t) return Object.create(e || null);
        if (!e) return t;
        var n = Object.create(null);
        return l(n, e), l(n, t), n
    };
    var bo, $o = function(e, t) {
            return void 0 === t ? e : t
        }
        , wo = n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require")
        , xo = function(e, t) {
            oo('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.', e)
        }
        , ko = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
    if (ko) {
        var Co = n("stop,prevent,self,ctrl,shift,alt,meta");
        Vi.keyCodes = new Proxy(Vi.keyCodes, {
            set: function(e, t, n) {
                return Co(t) ? (oo("Avoid overwriting built-in modifier in config.keyCodes: ." + t), !1) : (e[t] = n, !0)
            }
        })
    }
    var Ao = {
            has: function e(t, n) {
                var e = n in t
                    , r = wo(n) || "_" === n.charAt(0);
                return e || r || xo(t, n), e || !r
            }
        }
        , Oo = {
            get: function(e, t) {
                return "string" != typeof t || t in e || xo(e, t), e[t]
            }
        };
    bo = function(e) {
        if (ko) {
            var t = e.$options
                , n = t.render && t.render._withStripped ? Oo : Ao;
            e._renderProxy = new Proxy(e, n)
        } else e._renderProxy = e
    };
    var So = function(e, t, n, r, i, o, a) {
            this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1
        }
        , To = {
            child: {}
        };
    To.child.get = function() {
        return this.componentInstance
    }, Object.defineProperties(So.prototype, To);
    var jo, Eo = function() {
            var e = new So;
            return e.text = "", e.isComment = !0, e
        }
        , Io = a(function(e) {
            var t = "~" === e.charAt(0);
            e = t ? e.slice(1) : e;
            var n = "!" === e.charAt(0);
            return e = n ? e.slice(1) : e, {
                name: e
                , once: t
                , capture: n
            }
        })
        , No = null
        , Mo = []
        , Do = {}
        , Po = {}
        , Lo = !1
        , Ro = !1
        , Fo = 0
        , Uo = 0
        , Vo = function(e, t, n, r) {
            this.vm = e, e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n
                , this.id = ++Uo, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ei, this.newDepIds = new Ei, this.expression = t.toString(), "function" == typeof t ? this.getter = t : (this.getter = b(t), this.getter || (this.getter = function() {}, oo('Failed watching path: "' + t + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e))), this.value = this.lazy ? void 0 : this.get()
        };
    Vo.prototype.get = function() {
        $(this);
        var e, t = this.vm;
        if (this.user) try {
            e = this.getter.call(t, t)
        } catch (e) {
            q(e, t, 'getter for watcher "' + this.expression + '"')
        } else e = this.getter.call(t, t);
        return this.deep && ye(e), w(), this.cleanupDeps(), e
    }, Vo.prototype.addDep = function(e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
    }, Vo.prototype.cleanupDeps = function() {
        for (var e = this, t = this.deps.length; t--;) {
            var n = e.deps[t];
            e.newDepIds.has(n.id) || n.removeSub(e)
        }
        var r = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
    }, Vo.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : ge(this)
    }, Vo.prototype.run = function() {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || u(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, t)
                } catch (e) {
                    q(e, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, t)
            }
        }
    }, Vo.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1
    }, Vo.prototype.depend = function() {
        for (var e = this, t = this.deps.length; t--;) e.deps[t].depend()
    }, Vo.prototype.teardown = function() {
        var e = this;
        if (this.active) {
            this.vm._isBeingDestroyed || r(this.vm._watchers, this);
            for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);
            this.active = !1
        }
    };
    var Ho = new Ei
        , Bo = {
            enumerable: !0
            , configurable: !0
            , get: p
            , set: p
        }
        , qo = {
            key: 1
            , ref: 1
            , slot: 1
        }
        , Jo = {
            lazy: !0
        }
        , zo = {
            init: Ne
            , prepatch: Me
            , insert: De
            , destroy: Pe
        }
        , Ko = Object.keys(zo)
        , Wo = 1
        , Zo = 2
        , Yo = 0;
    ! function(e) {
        e.prototype._init = function(e) {
            Vi.performance && to && to.mark("init");
            var t = this;
            t._uid = Yo++, t._isVue = !0, e && e._isComponent ? it(t, e) : t.$options = P(ot(t.constructor), e || {}, t), bo(t), t._self = t, ce(t), te(t), tt(t), ve(t, "beforeCreate"), rt(t), $e(t), nt(t), ve(t, "created"), Vi.performance && to && (t._name = no(t, !1), to.mark("init end"), to.measure(t._name + " init", "init", "init end")), t.$options.el && t.$mount(t.$options.el)
        }
    }(ct)
    , function(e) {
        var t = {};
        t.get = function() {
            return this._data
        };
        var n = {};
        n.get = function() {
            return this._props
        }, t.set = function(e) {
            oo("Avoid replacing instance root $data. Use nested data properties instead.", this)
        }, n.set = function() {
            oo("$props is readonly.", this)
        }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = O, e.prototype.$delete = S, e.prototype.$watch = function(e, t, n) {
            var r = this;
            n = n || {}, n.user = !0;
            var i = new Vo(r, e, t, n);
            return n.immediate && t.call(r, i.value)
                , function() {
                    i.teardown()
                }
        }
    }(ct)
    , function(e) {
        var t = /^hook:/;
        e.prototype.$on = function(e, n) {
            var r = this
                , i = this;
            if (Array.isArray(e))
                for (var o = 0, a = e.length; o < a; o++) r.$on(e[o], n);
            else(i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
            return i
        }, e.prototype.$once = function(e, t) {
            function n() {
                r.$off(e, n), t.apply(r, arguments)
            }
            var r = this;
            return n.fn = t, r.$on(e, n), r
        }, e.prototype.$off = function(e, t) {
            var n = this
                , r = this;
            if (!arguments.length) return r._events = Object.create(null), r;
            if (Array.isArray(e)) {
                for (var i = 0, o = e.length; i < o; i++) n.$off(e[i], t);
                return r
            }
            var a = r._events[e];
            if (!a) return r;
            if (1 === arguments.length) return r._events[e] = null, r;
            for (var s, c = a.length; c--;)
                if ((s = a[c]) === t || s.fn === t) {
                    a.splice(c, 1);
                    break
                }
            return r
        }, e.prototype.$emit = function(e) {
            var t = this
                , n = t._events[e];
            if (n) {
                n = n.length > 1 ? c(n) : n;
                for (var r = c(arguments, 1), i = 0, o = n.length; i < o; i++) n[i].apply(t, r)
            }
            return t
        }
    }(ct)
    , function(e) {
        e.prototype._update = function(e, t) {
            var n = this;
            n._isMounted && ve(n, "beforeUpdate");
            var r = n.$el
                , i = n._vnode
                , o = No;
            No = n, n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), No = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, e.prototype.$forceUpdate = function() {
            var e = this;
            e._watcher && e._watcher.update()
        }, e.prototype.$destroy = function() {
            var e = this;
            if (!e._isBeingDestroyed) {
                ve(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || r(t.$children, e), e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, ve(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.__patch__(e._vnode, null)
            }
        }
    }(ct)
    , function(n) {
        n.prototype.$nextTick = function(e) {
            return eo(e, this)
        }, n.prototype._render = function() {
            var e = this
                , t = e.$options
                , n = t.render
                , r = t.staticRenderFns
                , i = t._parentVnode;
            if (e._isMounted)
                for (var o in e.$slots) e.$slots[o] = K(e.$slots[o]);
            e.$scopedSlots = i && i.data.scopedSlots || ro, r && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;
            var a;
            try {
                a = n.call(e._renderProxy, e.$createElement)
            } catch (t) {
                q(t, e, "render function"), a = e.$options.renderError ? e.$options.renderError.call(e._renderProxy, e.$createElement, t) : e._vnode
            }
            return a instanceof So || (Array.isArray(a) && oo("Multiple root nodes returned from render function. Render function should return a single root node.", e), a = Eo()), a.parent = i, a
        }, n.prototype._o = Qe, n.prototype._n = t, n.prototype._s = e, n.prototype._l = ze, n.prototype._t = Ke, n.prototype._q = v, n.prototype._i = h, n.prototype._m = Ge, n.prototype._f = We, n.prototype._k = Ze, n.prototype._b = Ye, n.prototype._v = J, n.prototype._e = Eo, n.prototype._u = se
    }(ct);
    var Go = [String, RegExp]
        , Qo = {
            name: "keep-alive"
            , abstract: !0
            , props: {
                include: Go
                , exclude: Go
            }
            , created: function() {
                this.cache = Object.create(null)
            }
            , destroyed: function() {
                var e = this;
                for (var t in e.cache) yt(e.cache[t])
            }
            , watch: {
                include: function(e) {
                    gt(this.cache, function(t) {
                        return mt(e, t)
                    })
                }
                , exclude: function(e) {
                    gt(this.cache, function(t) {
                        return !mt(e, t)
                    })
                }
            }
            , render: function() {
                var e = ee(this.$slots.default)
                    , t = e && e.componentOptions;
                if (t) {
                    var n = ht(t);
                    if (n && (this.include && !mt(this.include, n) || this.exclude && mt(this.exclude, n))) return e;
                    var r = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                    this.cache[r] ? e.componentInstance = this.cache[r].componentInstance : this.cache[r] = e, e.data.keepAlive = !0
                }
                return e
            }
        }
        , Xo = {
            KeepAlive: Qo
        };
    ! function(e) {
        var t = {};
        t.get = function() {
            return Vi
        }, t.set = function() {
            oo("Do not replace the Vue.config object, set individual fields instead.")
        }, Object.defineProperty(e, "config", t), e.util = {
            warn: oo
            , extend: l
            , mergeOptions: P
            , defineReactive: A
        }, e.set = O, e.delete = S, e.nextTick = eo, e.options = Object.create(null), Vi._assetTypes.forEach(function(t) {
            e.options[t + "s"] = Object.create(null)
        }), e.options._base = e, l(e.options.components, Xo), lt(e), ut(e), ft(e), vt(e)
    }(ct), Object.defineProperty(ct.prototype, "$isServer", {
        get: Gi
    }), ct.version = "2.2.2";
    var ea, ta, na, ra, ia, oa, aa, sa, ca, la = n("input,textarea,option,select")
        , ua = function(e, t, n) {
            return "value" === n && la(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }
        , fa = n("contenteditable,draggable,spellcheck")
        , da = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible")
        , pa = "http://www.w3.org/1999/xlink"
        , va = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        }
        , ha = function(e) {
            return va(e) ? e.slice(6, e.length) : ""
        }
        , ma = function(e) {
            return null == e || e === !1
        }
        , ga = {
            svg: "http://www.w3.org/2000/svg"
            , math: "http://www.w3.org/1998/Math/MathML"
        }
        , ya = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template")
        , _a = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0)
        , ba = function(e) {
            return "pre" === e
        }
        , $a = function(e) {
            return ya(e) || _a(e)
        }
        , wa = Object.create(null)
        , xa = Object.freeze({
            createElement: Ot
            , createElementNS: St
            , createTextNode: Tt
            , createComment: jt
            , insertBefore: Et
            , removeChild: It
            , appendChild: Nt
            , parentNode: Mt
            , nextSibling: Dt
            , tagName: Pt
            , setTextContent: Lt
            , setAttribute: Rt
        })
        , ka = {
            create: function(e, t) {
                Ft(t)
            }
            , update: function(e, t) {
                e.data.ref !== t.data.ref && (Ft(e, !0), Ft(t))
            }
            , destroy: function(e) {
                Ft(e, !0)
            }
        }
        , Ca = new So("", {}, [])
        , Aa = ["create", "activate", "update", "remove", "destroy"]
        , Oa = {
            create: qt
            , update: qt
            , destroy: function(e) {
                qt(e, Ca)
            }
        }
        , Sa = Object.create(null)
        , Ta = [ka, Oa]
        , ja = {
            create: Zt
            , update: Zt
        }
        , Ea = {
            create: Gt
            , update: Gt
        }
        , Ia = /[\w).+\-_$\]]/
        , Na = "__r"
        , Ma = "__c"
        , Da = {
            create: Cn
            , update: Cn
        }
        , Pa = {
            create: An
            , update: An
        }
        , La = a(function(e) {
            var t = {};
            return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                if (e) {
                    var n = e.split(/:(.+)/);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                }
            }), t
        })
        , Ra = /^--/
        , Fa = /\s*!important$/
        , Ua = function(e, t, n) {
            Ra.test(t) ? e.style.setProperty(t, n) : Fa.test(n) ? e.style.setProperty(t, n.replace(Fa, ""), "important") : e.style[Ha(t)] = n
        }
        , Va = ["Webkit", "Moz", "ms"]
        , Ha = a(function(e) {
            if (ca = ca || document.createElement("div"), "filter" !== (e = Mi(e)) && e in ca.style) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Va.length; n++) {
                var r = Va[n] + t;
                if (r in ca.style) return r
            }
        })
        , Ba = {
            create: Nn
            , update: Nn
        }
        , qa = a(function(e) {
            return {
                enterClass: e + "-enter"
                , enterToClass: e + "-enter-to"
                , enterActiveClass: e + "-enter-active"
                , leaveClass: e + "-leave"
                , leaveToClass: e + "-leave-to"
                , leaveActiveClass: e + "-leave-active"
            }
        })
        , Ja = Bi && !zi
        , za = "transition"
        , Ka = "animation"
        , Wa = "transition"
        , Za = "transitionend"
        , Ya = "animation"
        , Ga = "animationend";
    Ja && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Wa = "WebkitTransition", Za = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ya = "WebkitAnimation", Ga = "webkitAnimationEnd"));
    var Qa = Bi && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout
        , Xa = /\b(transform|all)(,|$)/
        , es = Bi ? {
            create: Zn
            , activate: Zn
            , remove: function(e, t) {
                e.data.show ? t() : Jn(e, t)
            }
        } : {}
        , ts = [ja, Ea, Da, Pa, Ba, es]
        , ns = ts.concat(Ta)
        , rs = function(e) {
            function t(e) {
                return new So(S.tagName(e).toLowerCase(), {}, [], void 0, e)
            }

            function r(e, t) {
                function n() {
                    0 == --n.listeners && i(e)
                }
                return n.listeners = t, n
            }

            function i(e) {
                var t = S.parentNode(e);
                t && S.removeChild(t, e)
            }

            function a(e, t, n, r, i) {
                if (e.isRootInsert = !i, !s(e, t, n, r)) {
                    var o = e.data
                        , a = e.children
                        , c = e.tag;
                    Vt(c) ? (o && o.pre && T++, T || e.ns || Vi.ignoredElements.length && Vi.ignoredElements.indexOf(c) > -1 || !Vi.isUnknownElement(c) || oo("Unknown custom element: <" + c + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context), e.elm = e.ns ? S.createElementNS(e.ns, c) : S.createElement(c, e), v(e), f(e, a, t), Vt(o) && p(e, t), u(n, e.elm, r), o && o.pre && T--) : e.isComment ? (e.elm = S.createComment(e.text), u(n, e.elm, r)) : (e.elm = S.createTextNode(e.text), u(n, e.elm, r))
                }
            }

            function s(e, t, n, r) {
                var i = e.data;
                if (Vt(i)) {
                    var o = Vt(e.componentInstance) && i.keepAlive;
                    if (Vt(i = i.hook) && Vt(i = i.init) && i(e, !1, n, r), Vt(e.componentInstance)) return c(e, t), o && l(e, t, n, r), !0
                }
            }

            function c(e, t) {
                e.data.pendingInsert && t.push.apply(t, e.data.pendingInsert), e.elm = e.componentInstance.$el, d(e) ? (p(e, t), v(e)) : (Ft(e), t.push(e))
            }

            function l(e, t, n, r) {
                for (var i, o = e; o.componentInstance;)
                    if (o = o.componentInstance._vnode, Vt(i = o.data) && Vt(i = i.transition)) {
                        for (i = 0; i < A.activate.length; ++i) A.activate[i](Ca, o);
                        t.push(o);
                        break
                    }
                u(n, e.elm, r)
            }

            function u(e, t, n) {
                e && (n ? S.insertBefore(e, t, n) : S.appendChild(e, t))
            }

            function f(e, t, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; ++r) a(t[r], n, e.elm, null, !0);
                else o(e.text) && S.appendChild(e.elm, S.createTextNode(e.text))
            }

            function d(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return Vt(e.tag)
            }

            function p(e, t) {
                for (var n = 0; n < A.create.length; ++n) A.create[n](Ca, e);
                k = e.data.hook, Vt(k) && (k.create && k.create(Ca, e), k.insert && t.push(e))
            }

            function v(e) {
                for (var t, n = e; n;) Vt(t = n.context) && Vt(t = t.$options._scopeId) && S.setAttribute(e.elm, t, ""), n = n.parent;
                Vt(t = No) && t !== e.context && Vt(t = t.$options._scopeId) && S.setAttribute(e.elm, t, "")
            }

            function h(e, t, n, r, i, o) {
                for (; r <= i; ++r) a(n[r], o, e, t)
            }

            function m(e) {
                var t, n, r = e.data;
                if (Vt(r))
                    for (Vt(t = r.hook) && Vt(t = t.destroy) && t(e), t = 0; t < A.destroy.length; ++t) A.destroy[t](e);
                if (Vt(t = e.children))
                    for (n = 0; n < e.children.length; ++n) m(e.children[n])
            }

            function g(e, t, n, r) {
                for (; n <= r; ++n) {
                    var o = t[n];
                    Vt(o) && (Vt(o.tag) ? (y(o), m(o)) : i(o.elm))
                }
            }

            function y(e, t) {
                if (t || Vt(e.data)) {
                    var n = A.remove.length + 1;
                    for (t ? t.listeners += n : t = r(e.elm, n), Vt(k = e.componentInstance) && Vt(k = k._vnode) && Vt(k.data) && y(k, t), k = 0; k < A.remove.length; ++k) A.remove[k](e, t);
                    Vt(k = e.data.hook) && Vt(k = k.remove) ? k(e, t) : t()
                } else i(e.elm)
            }

            function _(e, t, n, r, i) {
                for (var o, s, c, l, u = 0, f = 0, d = t.length - 1, p = t[0], v = t[d], m = n.length - 1, y = n[0], _ = n[m], $ = !i; u <= d && f <= m;) Ut(p) ? p = t[++u] : Ut(v) ? v = t[--d] : Ht(p, y) ? (b(p, y, r), p = t[++u], y = n[++f]) : Ht(v, _) ? (b(v, _, r), v = t[--d], _ = n[--m]) : Ht(p, _) ? (b(p, _, r), $ && S.insertBefore(e, p.elm, S.nextSibling(v.elm)), p = t[++u], _ = n[--m]) : Ht(v, y) ? (b(v, y, r), $ && S.insertBefore(e, v.elm, p.elm), v = t[--d], y = n[++f]) : (Ut(o) && (o = Bt(t, u, d)), s = Vt(y.key) ? o[y.key] : null, Ut(s) ? (a(y, r, e, p.elm), y = n[++f]) : (c = t[s], c || oo("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."), Ht(c, y) ? (b(c, y, r), t[s] = void 0, $ && S.insertBefore(e, y.elm, p.elm), y = n[++f]) : (a(y, r, e, p.elm), y = n[++f])));
                u > d ? (l = Ut(n[m + 1]) ? null : n[m + 1].elm, h(e, l, n, f, m, r)) : f > m && g(e, t, u, d)
            }

            function b(e, t, n, r) {
                if (e !== t) {
                    if (t.isStatic && e.isStatic && t.key === e.key && (t.isCloned || t.isOnce)) return t.elm = e.elm, void(t.componentInstance = e.componentInstance);
                    var i, o = t.data
                        , a = Vt(o);
                    a && Vt(i = o.hook) && Vt(i = i.prepatch) && i(e, t);
                    var s = t.elm = e.elm
                        , c = e.children
                        , l = t.children;
                    if (a && d(t)) {
                        for (i = 0; i < A.update.length; ++i) A.update[i](e, t);
                        Vt(i = o.hook) && Vt(i = i.update) && i(e, t)
                    }
                    Ut(t.text) ? Vt(c) && Vt(l) ? c !== l && _(s, c, l, n, r) : Vt(l) ? (Vt(e.text) && S.setTextContent(s, ""), h(s, null, l, 0, l.length - 1, n)) : Vt(c) ? g(s, c, 0, c.length - 1) : Vt(e.text) && S.setTextContent(s, "") : e.text !== t.text && S.setTextContent(s, t.text), a && Vt(i = o.hook) && Vt(i = i.postpatch) && i(e, t)
                }
            }

            function $(e, t, n) {
                if (n && e.parent) e.parent.data.pendingInsert = t;
                else
                    for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
            }

            function w(e, t, n) {
                if (!x(e, t)) return !1;
                t.elm = e;
                var r = t.tag
                    , i = t.data
                    , o = t.children;
                if (Vt(i) && (Vt(k = i.hook) && Vt(k = k.init) && k(t, !0), Vt(k = t.componentInstance))) return c(t, n), !0;
                if (Vt(r)) {
                    if (Vt(o))
                        if (e.hasChildNodes()) {
                            for (var a = !0, s = e.firstChild, l = 0; l < o.length; l++) {
                                if (!s || !w(s, o[l], n)) {
                                    a = !1;
                                    break
                                }
                                s = s.nextSibling
                            }
                            if (!a || s) return "undefined" == typeof console || j || (j = !0, console.warn("Parent: ", e), console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, o)), !1
                        } else f(t, o, n);
                    if (Vt(i))
                        for (var u in i)
                            if (!E(u)) {
                                p(t, n);
                                break
                            }
                } else e.data !== t.text && (e.data = t.text);
                return !0
            }

            function x(e, t) {
                return t.tag ? 0 === t.tag.indexOf("vue-component") || t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()) : e.nodeType === (t.isComment ? 8 : 3)
            }
            var k, C, A = {}
                , O = e.modules
                , S = e.nodeOps;
            for (k = 0; k < Aa.length; ++k)
                for (A[Aa[k]] = [], C = 0; C < O.length; ++C) void 0 !== O[C][Aa[k]] && A[Aa[k]].push(O[C][Aa[k]]);
            var T = 0
                , j = !1
                , E = n("attrs,style,class,staticClass,staticStyle,key");
            return function(e, n, r, i, o, s) {
                if (!n) return void(e && m(e));
                var c = !1
                    , l = [];
                if (e) {
                    var u = Vt(e.nodeType);
                    if (!u && Ht(e, n)) b(e, n, l, i);
                    else {
                        if (u) {
                            if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), r = !0), r) {
                                if (w(e, n, l)) return $(n, l, !0), e;
                                oo("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
                            }
                            e = t(e)
                        }
                        var f = e.elm
                            , p = S.parentNode(f);
                        if (a(n, l, f._leaveCb ? null : p, S.nextSibling(f)), n.parent) {
                            for (var v = n.parent; v;) v.elm = n.elm, v = v.parent;
                            if (d(n))
                                for (var h = 0; h < A.create.length; ++h) A.create[h](Ca, n.parent)
                        }
                        null !== p ? g(p, [e], 0, 0) : Vt(e.tag) && m(e)
                    }
                } else c = !0, a(n, l, o, s);
                return $(n, l, c), n.elm
            }
        }({
            nodeOps: xa
            , modules: ns
        });
    zi && document.addEventListener("selectionchange", function() {
        var e = document.activeElement;
        e && e.vmodel && tr(e, "input")
    });
    var is = {
            inserted: function(e, t, n) {
                if ("select" === n.tag) {
                    var r = function() {
                        Yn(e, t, n.context)
                    };
                    r(), (Ji || Ki) && setTimeout(r, 0)
                } else "textarea" !== n.tag && "text" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (Wi || (e.addEventListener("compositionstart", Xn), e.addEventListener("compositionend", er)), zi && (e.vmodel = !0)))
            }
            , componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    Yn(e, t, n.context);
                    (e.multiple ? t.value.some(function(t) {
                        return Gn(t, e.options)
                    }) : t.value !== t.oldValue && Gn(t.value, e.options)) && tr(e, "change")
                }
            }
        }
        , os = {
            bind: function(e, t, n) {
                var r = t.value;
                n = nr(n);
                var i = n.data && n.data.transition
                    , o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i && !zi ? (n.data.show = !0, qn(n, function() {
                    e.style.display = o
                })) : e.style.display = r ? o : "none"
            }
            , update: function(e, t, n) {
                var r = t.value;
                r !== t.oldValue && (n = nr(n), n.data && n.data.transition && !zi ? (n.data.show = !0, r ? qn(n, function() {
                    e.style.display = e.__vOriginalDisplay
                }) : Jn(n, function() {
                    e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none")
            }
            , unbind: function(e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        }
        , as = {
            model: is
            , show: os
        }
        , ss = {
            name: String
            , appear: Boolean
            , css: Boolean
            , mode: String
            , type: String
            , enterClass: String
            , leaveClass: String
            , enterToClass: String
            , leaveToClass: String
            , enterActiveClass: String
            , leaveActiveClass: String
            , appearClass: String
            , appearActiveClass: String
            , appearToClass: String
            , duration: [Number, String, Object]
        }
        , cs = {
            name: "transition"
            , props: ss
            , abstract: !0
            , render: function(e) {
                var t = this
                    , n = this.$slots.default;
                if (n && (n = n.filter(function(e) {
                        return e.tag
                    }), n.length)) {
                    n.length > 1 && oo("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                    var r = this.mode;
                    r && "in-out" !== r && "out-in" !== r && oo("invalid <transition> mode: " + r, this.$parent);
                    var i = n[0];
                    if (ar(this.$vnode)) return i;
                    var a = rr(i);
                    if (!a) return i;
                    if (this._leaving) return or(e, i);
                    var s = "__transition-" + this._uid + "-";
                    a.key = null == a.key ? s + a.tag : o(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                    var c = (a.data || (a.data = {})).transition = ir(this)
                        , u = this._vnode
                        , f = rr(u);
                    if (a.data.directives && a.data.directives.some(function(e) {
                            return "show" === e.name
                        }) && (a.data.show = !0), f && f.data && !sr(a, f)) {
                        var d = f && (f.data.transition = l({}, c));
                        if ("out-in" === r) return this._leaving = !0, Y(d, "afterLeave", function() {
                            t._leaving = !1, t.$forceUpdate()
                        }), or(e, i);
                        if ("in-out" === r) {
                            var p, v = function() {
                                p()
                            };
                            Y(c, "afterEnter", v), Y(c, "enterCancelled", v), Y(d, "delayLeave", function(e) {
                                p = e
                            })
                        }
                    }
                    return i
                }
            }
        }
        , ls = l({
            tag: String
            , moveClass: String
        }, ss);
    delete ls.mode;
    var us = {
            props: ls
            , render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = ir(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    if (c.tag)
                        if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a;
                        else {
                            var l = c.componentOptions
                                , u = l ? l.Ctor.options.name || l.tag || "" : c.tag;
                            oo("<transition-group> children must be keyed: <" + u + ">")
                        }
                }
                if (r) {
                    for (var f = [], d = [], p = 0; p < r.length; p++) {
                        var v = r[p];
                        v.data.transition = a, v.data.pos = v.elm.getBoundingClientRect(), n[v.key] ? f.push(v) : d.push(v)
                    }
                    this.kept = e(t, null, f), this.removed = d
                }
                return e(t, null, o)
            }
            , beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
            }
            , updated: function() {
                var e = this.prevChildren
                    , t = this.moveClass || (this.name || "v") + "-move";
                if (e.length && this.hasMove(e[0].elm, t)) {
                    e.forEach(cr), e.forEach(lr), e.forEach(ur);
                    var n = document.body;
                    n.offsetHeight;
                    e.forEach(function(e) {
                        if (e.data.moved) {
                            var n = e.elm
                                , r = n.style;
                            Rn(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Za, n._moveCb = function e(r) {
                                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Za, e), n._moveCb = null, Fn(n, t))
                            })
                        }
                    })
                }
            }
            , methods: {
                hasMove: function(e, t) {
                    if (!Ja) return !1;
                    if (null != this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function(e) {
                        Dn(n, e)
                    }), Mn(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = Vn(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        }
        , fs = {
            Transition: cs
            , TransitionGroup: us
        };
    ct.config.mustUseProp = ua, ct.config.isReservedTag = $a, ct.config.getTagNamespace = kt, ct.config.isUnknownElement = Ct, l(ct.options.directives, as), l(ct.options.components, fs), ct.prototype.__patch__ = Bi ? rs : p, ct.prototype.$mount = function(e, t) {
        return e = e && Bi ? At(e) : void 0, le(this, e, t)
    }, setTimeout(function() {
        Vi.devtools && (Qi ? Qi.emit("init", ct) : Yi && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), Vi.productionTip !== !1 && Bi && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")
    }, 0);
    var ds, ps = !!Bi && function(e, t) {
            var n = document.createElement("div");
            return n.innerHTML = '<div a="' + e + '">', n.innerHTML.indexOf(t) > 0
        }("\n", "&#10;")
        , vs = n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr")
        , hs = n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source")
        , ms = n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track")
        , gs = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source]
        , ys = new RegExp("^\\s*" + /([^\s"'<>\/=]+)/.source + "(?:\\s*(" + /(?:=)/.source + ")\\s*(?:" + gs.join("|") + "))?")
        , _s = "[a-zA-Z_][\\w\\-\\.]*"
        , bs = new RegExp("^<((?:" + _s + "\\:)?" + _s + ")")
        , $s = /^\s*(\/?)>/
        , ws = new RegExp("^<\\/((?:" + _s + "\\:)?" + _s + ")[^>]*>")
        , xs = /^<!DOCTYPE [^>]+>/i
        , ks = /^<!--/
        , Cs = /^<!\[/
        , As = !1;
    "x".replace(/x(.)?/g, function(e, t) {
        As = "" === t
    });
    var Os, Ss, Ts, js, Es, Is, Ns, Ms, Ds, Ps, Ls, Rs, Fs, Us, Vs, Hs, Bs, qs, Js = n("script,style", !0)
        , zs = {}
        , Ks = {
            "&lt;": "<"
            , "&gt;": ">"
            , "&quot;": '"'
            , "&amp;": "&"
            , "&#10;": "\n"
        }
        , Ws = /&(?:lt|gt|quot|amp);/g
        , Zs = /&(?:lt|gt|quot|amp|#10);/g
        , Ys = /\{\{((?:.|\n)+?)\}\}/g
        , Gs = a(function(e) {
            var t = e[0].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&")
                , n = e[1].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
        })
        , Qs = /^v-|^@|^:/
        , Xs = /^@|^v-on:/
        , ec = /(.*?)\s+(?:in|of)\s+(.*)/
        , tc = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/
        , nc = /^:|^v-bind:/
        , rc = /:(.*)$/
        , ic = /\.[^.]+/g
        , oc = a(fr)
        , ac = /^xmlns:NS\d+/
        , sc = /^NS\d+:/
        , cc = a(Pr)
        , lc = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/
        , uc = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/
        , fc = {
            esc: 27
            , tab: 9
            , enter: 13
            , space: 32
            , up: 38
            , left: 37
            , right: 39
            , down: 40
            , delete: [8, 46]
        }
        , dc = function(e) {
            return "if(" + e + ")return null;"
        }
        , pc = {
            stop: "$event.stopPropagation();"
            , prevent: "$event.preventDefault();"
            , self: dc("$event.target !== $event.currentTarget")
            , ctrl: dc("!$event.ctrlKey")
            , shift: dc("!$event.shiftKey")
            , alt: dc("!$event.altKey")
            , meta: dc("!$event.metaKey")
            , left: dc("'button' in $event && $event.button !== 0")
            , middle: dc("'button' in $event && $event.button !== 1")
            , right: dc("'button' in $event && $event.button !== 2")
        }
        , vc = {
            bind: zr
            , cloak: p
        }
        , hc = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b")
        , mc = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)")
        , gc = /[A-Za-z_$][\w$]*/
        , yc = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g
        , _c = {
            staticKeys: ["staticClass"]
            , transformNode: xi
            , genData: ki
        }
        , bc = {
            staticKeys: ["staticStyle"]
            , transformNode: Ci
            , genData: Ai
        }
        , $c = [_c, bc]
        , wc = {
            model: gn
            , text: Oi
            , html: Si
        }
        , xc = {
            expectHTML: !0
            , modules: $c
            , directives: wc
            , isPreTag: ba
            , isUnaryTag: vs
            , mustUseProp: ua
            , isReservedTag: $a
            , getTagNamespace: kt
            , staticKeys: function(e) {
                return e.reduce(function(e, t) {
                    return e.concat(t.staticKeys || [])
                }, []).join(",")
            }($c)
        }
        , kc = function(e) {
            function t(t, n) {
                var r = Object.create(e)
                    , i = []
                    , o = [];
                if (r.warn = function(e, t) {
                        (t ? o : i).push(e)
                    }, n) {
                    n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = l(Object.create(e.directives), n.directives));
                    for (var a in n) "modules" !== a && "directives" !== a && (r[a] = n[a])
                }
                var s = $i(t, r);
                return i.push.apply(i, hi(s.ast)), s.errors = i, s.tips = o, s
            }

            function n(e, n, i) {
                n = n || {};
                try {
                    new Function("return 1")
                } catch (e) {
                    e.toString().match(/unsafe-eval|CSP/) && oo("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")
                }
                var o = n.delimiters ? String(n.delimiters) + e : e;
                if (r[o]) return r[o];
                var a = t(e, n);
                a.errors && a.errors.length && oo("Error compiling template:\n\n" + e + "\n\n" + a.errors.map(function(e) {
                    return "- " + e
                }).join("\n") + "\n", i), a.tips && a.tips.length && a.tips.forEach(function(e) {
                    return ao(e, i)
                });
                var s = {}
                    , c = [];
                s.render = wi(a.render, c);
                var l = a.staticRenderFns.length;
                s.staticRenderFns = new Array(l);
                for (var u = 0; u < l; u++) s.staticRenderFns[u] = wi(a.staticRenderFns[u], c);
                return a.errors && a.errors.length || !c.length || oo("Failed to generate render function:\n\n" + c.map(function(e) {
                    var t = e.err
                        , n = e.code;
                    return t.toString() + " in\n\n" + n + "\n"
                }).join("\n"), i), r[o] = s
            }
            var r = Object.create(null);
            return {
                compile: t
                , compileToFunctions: n
            }
        }(xc)
        , Cc = kc.compileToFunctions
        , Ac = a(function(e) {
            var t = At(e);
            return t && t.innerHTML
        })
        , Oc = ct.prototype.$mount;
    return ct.prototype.$mount = function(e, t) {
        if ((e = e && At(e)) === document.body || e === document.documentElement) return oo("Do not mount Vue to <html> or <body> - mount to normal elements instead."), this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r)
                if ("string" == typeof r) "#" === r.charAt(0) && ((r = Ac(r)) || oo("Template element not found or is empty: " + n.template, this));
                else {
                    if (!r.nodeType) return oo("invalid template option:" + r, this), this;
                    r = r.innerHTML
                }
            else e && (r = Ti(e));
            if (r) {
                Vi.performance && to && to.mark("compile");
                var i = Cc(r, {
                        shouldDecodeNewlines: ps
                        , delimiters: n.delimiters
                    }, this)
                    , o = i.render
                    , a = i.staticRenderFns;
                n.render = o, n.staticRenderFns = a, Vi.performance && to && (to.mark("compile end"), to.measure(this._name + " compile", "compile", "compile end"))
            }
        }
        return Oc.call(this, e, t)
    }, ct.compile = Cc, ct
});
