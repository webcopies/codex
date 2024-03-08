(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185], {
    4440: function(e, t) {
      var r;
      /*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
      */
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var a = i.apply(null, r);
                  a && e.push(a)
                }
              } else if ("object" === o) {
                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                  e.push(r.toString());
                  continue
                }
                for (var s in r) n.call(r, s) && r[s] && e.push(s)
              }
            }
          }
          return e.join(" ")
        }
        e.exports ? (i.default = i, e.exports = i) : void 0 !== (r = (function() {
          return i
        }).apply(t, [])) && (e.exports = r)
      }()
    },
    2492: function(e, t, r) {
      Promise.resolve().then(r.bind(r, 8561))
    },
    3313: function(e, t) {
      "use strict";
      let r;
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          DOMAttributeNames: function() {
            return n
          },
          isEqualNode: function() {
            return o
          },
          default: function() {
            return a
          }
        });
      let n = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule"
      };

      function i(e) {
        let {
          type: t,
          props: r
        } = e, i = document.createElement(t);
        for (let e in r) {
          if (!r.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === r[e]) continue;
          let o = n[e] || e.toLowerCase();
          "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? i[o] = !!r[e] : i.setAttribute(o, r[e])
        }
        let {
          children: o,
          dangerouslySetInnerHTML: a
        } = r;
        return a ? i.innerHTML = a.__html || "" : o && (i.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), i
      }

      function o(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let r = t.getAttribute("nonce");
          if (r && !e.getAttribute("nonce")) {
            let n = t.cloneNode(!0);
            return n.setAttribute("nonce", ""), n.nonce = r, r === e.nonce && e.isEqualNode(n)
          }
        }
        return e.isEqualNode(t)
      }

      function a() {
        return {
          mountedInstances: new Set,
          updateHead: e => {
            let t = {};
            e.forEach(e => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
              }
              let r = t[e.type] || [];
              r.push(e), t[e.type] = r
            });
            let n = t.title ? t.title[0] : null,
              i = "";
            if (n) {
              let {
                children: e
              } = n.props;
              i = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
            }
            i !== document.title && (document.title = i), ["meta", "base", "link", "style", "script"].forEach(e => {
              r(e, t[e] || [])
            })
          }
        }
      }
      r = (e, t) => {
        let r = document.getElementsByTagName("head")[0],
          n = r.querySelector("meta[name=next-head-count]"),
          a = Number(n.content),
          s = [];
        for (let t = 0, r = n.previousElementSibling; t < a; t++, r = (null == r ? void 0 : r.previousElementSibling) || null) {
          var l;
          (null == r ? void 0 : null == (l = r.tagName) ? void 0 : l.toLowerCase()) === e && s.push(r)
        }
        let c = t.map(i).filter(e => {
          for (let t = 0, r = s.length; t < r; t++)
            if (o(s[t], e)) return s.splice(t, 1), !1;
          return !0
        });
        s.forEach(e => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
        }), c.forEach(e => r.insertBefore(e, n)), n.content = (a - s.length + c.length).toString()
      }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    5935: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          handleClientScriptLoad: function() {
            return h
          },
          initScriptLoader: function() {
            return x
          },
          default: function() {
            return y
          }
        });
      let n = r(1024),
        i = r(8533),
        o = n._(r(4887)),
        a = i._(r(2265)),
        s = r(3634),
        l = r(3313),
        c = r(2185),
        d = new Map,
        u = new Set,
        p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
        f = e => {
          if (o.default.preinit) {
            e.forEach(e => {
              o.default.preinit(e, {
                as: "style"
              })
            });
            return
          } {
            let t = document.head;
            e.forEach(e => {
              let r = document.createElement("link");
              r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
            })
          }
        },
        m = e => {
          let {
            src: t,
            id: r,
            onLoad: n = () => {},
            onReady: i = null,
            dangerouslySetInnerHTML: o,
            children: a = "",
            strategy: s = "afterInteractive",
            onError: c,
            stylesheets: m
          } = e, h = r || t;
          if (h && u.has(h)) return;
          if (d.has(t)) {
            u.add(h), d.get(t).then(n, c);
            return
          }
          let x = () => {
              i && i(), u.add(h)
            },
            g = document.createElement("script"),
            y = new Promise((e, t) => {
              g.addEventListener("load", function(t) {
                e(), n && n.call(this, t), x()
              }), g.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              c && c(e)
            });
          for (let [r, n] of(o ? (g.innerHTML = o.__html || "", x()) : a ? (g.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", x()) : t && (g.src = t, d.set(t, y)), Object.entries(e))) {
            if (void 0 === n || p.includes(r)) continue;
            let e = l.DOMAttributeNames[r] || r.toLowerCase();
            g.setAttribute(e, n)
          }
          "worker" === s && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", s), m && f(m), document.body.appendChild(g)
        };

      function h(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, c.requestIdleCallback)(() => m(e))
        }) : m(e)
      }

      function x(e) {
        e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          u.add(t)
        })
      }

      function g(e) {
        let {
          id: t,
          src: r = "",
          onLoad: n = () => {},
          onReady: i = null,
          strategy: l = "afterInteractive",
          onError: d,
          stylesheets: p,
          ...f
        } = e, {
          updateScripts: h,
          scripts: x,
          getIsSsr: g,
          appDir: y,
          nonce: b
        } = (0, a.useContext)(s.HeadManagerContext), v = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          let e = t || r;
          v.current || (i && e && u.has(e) && i(), v.current = !0)
        }, [i, t, r]);
        let w = (0, a.useRef)(!1);
        if ((0, a.useEffect)(() => {
            !w.current && ("afterInteractive" === l ? m(e) : "lazyOnload" === l && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => m(e))
            })), w.current = !0)
          }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (h ? (x[l] = (x[l] || []).concat([{
            id: t,
            src: r,
            onLoad: n,
            onReady: i,
            onError: d,
            ...f
          }]), h(x)) : g && g() ? u.add(t || r) : g && !g() && m(e)), y) {
          if (p && p.forEach(e => {
              o.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === l) return r ? (o.default.preload(r, f.integrity ? {
            as: "script",
            integrity: f.integrity
          } : {
            as: "script"
          }), a.default.createElement("script", {
            nonce: b,
            dangerouslySetInnerHTML: {
              __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r]) + ")"
            }
          })) : (f.dangerouslySetInnerHTML && (f.children = f.dangerouslySetInnerHTML.__html, delete f.dangerouslySetInnerHTML), a.default.createElement("script", {
            nonce: b,
            dangerouslySetInnerHTML: {
              __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                ...f
              }]) + ")"
            }
          }));
          "afterInteractive" === l && r && o.default.preload(r, f.integrity ? {
            as: "script",
            integrity: f.integrity
          } : {
            as: "script"
          })
        }
        return null
      }
      Object.defineProperty(g, "__nextScript", {
        value: !0
      });
      let y = g;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    8561: function(e, t, r) {
      "use strict";
      let n, i;
      r.r(t), r.d(t, {
        default: function() {
          return eJ
        }
      });
      var o, a = r(7437),
        s = r(6385),
        l = r.n(s);
      r(1359);
      var c = r(2265),
        d = r(5824),
        u = r(4440),
        p = r.n(u),
        f = r(4033),
        m = r(1396),
        h = r.n(m),
        x = r(4962),
        g = r.n(x),
        y = r(6691),
        b = r.n(y);
      let v = {
        visible: e => ({
          opacity: 1,
          transition: {
            delay: .12 * e
          },
          ease: "easeInOut"
        }),
        hidden: {
          opacity: 0
        }
      };

      function w(e, t, r, n) {
        let i = (0, f.usePathname)() === t;
        return (0, a.jsx)(d.E.li, {
          className: "flex-1",
          variants: v,
          initial: "hidden",
          animate: "visible",
          custom: r,
          children: (0, a.jsx)(h(), {
            href: t,
            className: "block tracking-wider uppercase py-2 px-4 text-center text-xs hover:opacity-80 transition-all duration-300 ".concat(i ? "text-white/80" : "text-white/50"),
            target: t.startsWith("http") ? "_blank" : "",
            onClick: () => n(!1),
            children: e
          })
        })
      }

      function j(e) {
        return (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5 absolute text-neutral-100",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: [(0, a.jsx)("path", {
            d: "M2.5 2.5H17.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, a.jsx)("path", {
            d: "M2.5 7.5H17.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, a.jsx)("path", {
            d: "M2.5 12.5H17.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        })
      }

      function E(e) {
        return (0, a.jsxs)("svg", {
          className: "h-5 w-5 absolute text-neutral-100",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          shapeRendering: "geometricPrecision",
          ...e,
          children: [(0, a.jsx)("path", {
            d: "M18 6L6 18"
          }), (0, a.jsx)("path", {
            d: "M6 6l12 12"
          })]
        })
      }
      var k = () => {
          let [e, t] = (0, c.useState)(!1);
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("nav", {
              className: "border border-white/5 fixed transition-all duration-300 p-2 top-0 inset-x-0 z-[100] backdrop-blur-xl fixed w-full",
              children: [(0, a.jsx)("div", {
                className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
                children: (0, a.jsxs)("div", {
                  className: "relative flex items-center justify-between h-16",
                  children: [(0, a.jsx)("div", {
                    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                    children: (0, a.jsxs)("button", {
                      onClick: () => t(!e),
                      className: p()(g().burger, "transform inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300"),
                      "aria-controls": "mobile-menu",
                      "aria-expanded": "false",
                      children: [(0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Open main menu"
                      }), (0, a.jsx)(j, {
                        "data-hide": e
                      }), (0, a.jsx)(E, {
                        "data-hide": !e
                      })]
                    })
                  }), (0, a.jsxs)("div", {
                    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-between",
                    children: [(0, a.jsx)(h(), {
                      href: "/",
                      className: "flex flex-row items-center space-x-1.5",
                      children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(b(), {
                          src: "/static/icons/icon.svg",
                          alt: "Codex",
                          width: 32,
                          height: 32
                        }), (0, a.jsx)("h2", {
                          className: "flex items-center tracking-wide uppercase font-semibold",
                          children: "Codex"
                        })]
                      })
                    }), (0, a.jsxs)("ul", {
                      className: "hidden sm:flex items-center",
                      children: [w("Home", "/", 0), w("Windows", "/windows", 1), w("iOS", "/ios", 2), w("Android", "/android", 3), (0, a.jsx)("li", {
                        className: "flex-1",
                        children: (0, a.jsx)(h(), {
                          href: "https://discord.gg/robloxexploits",
                          target: "_blank",
                          children: (0, a.jsx)(d.E.button, {
                            variants: v,
                            custom: 1,
                            initial: "hidden",
                            animate: "visible",
                            className: "whitespace-nowrap ml-2 text-xs text-white/90 transition-all duration-300 hover:bg-white/5 uppercase rounded-lg border border border-white/10 px-5 py-3",
                            children: "Discord"
                          })
                        })
                      })]
                    })]
                  })]
                })
              }), (0, a.jsx)(d.E.div, {
                className: "".concat(e ? "block" : "hidden pointer-events-none", " sm:hidden"),
                initial: {
                  opacity: 0,
                  height: 0
                },
                animate: {
                  opacity: e ? 1 : 0,
                  height: e ? "auto" : 0
                },
                transition: {
                  duration: .3,
                  ease: "easeInOut"
                },
                children: (0, a.jsxs)("ul", {
                  className: "px-2 pt-2 pb-3 space-y-1 border-t border-white/5",
                  children: [w("Home", "/", 0, t), w("iOS", "/ios", 1, t), w("Android", "/android", 2, t), w("Discord", "https://discord.gg/robloxexploits", 3, t)]
                })
              })]
            })
          })
        },
        _ = r(1332),
        C = r(4132),
        N = r(538);

      function O() {
        let e = (0, c.useRef)(!1);
        return (0, N.L)(() => (e.current = !0, () => {
          e.current = !1
        }), []), e
      }
      var L = r(8243),
        S = r(961);
      class A extends c.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }

      function M({
        children: e,
        isPresent: t
      }) {
        let r = (0, c.useId)(),
          n = (0, c.useRef)(null),
          i = (0, c.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          });
        return (0, c.useInsertionEffect)(() => {
          let {
            width: e,
            height: o,
            top: a,
            left: s
          } = i.current;
          if (t || !n.current || !e || !o) return;
          n.current.dataset.motionPopId = r;
          let l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `), () => {
            document.head.removeChild(l)
          }
        }, [t]), c.createElement(A, {
          isPresent: t,
          childRef: n,
          sizeRef: i
        }, c.cloneElement(e, {
          ref: n
        }))
      }
      let P = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: n,
        custom: i,
        presenceAffectsLayout: o,
        mode: a
      }) => {
        let s = (0, S.h)(I),
          l = (0, c.useId)(),
          d = (0, c.useMemo)(() => ({
            id: l,
            initial: t,
            isPresent: r,
            custom: i,
            onExitComplete: e => {
              for (let t of (s.set(e, !0), s.values()))
                if (!t) return;
              n && n()
            },
            register: e => (s.set(e, !1), () => s.delete(e))
          }), o ? void 0 : [r]);
        return (0, c.useMemo)(() => {
          s.forEach((e, t) => s.set(t, !1))
        }, [r]), c.useEffect(() => {
          r || s.size || !n || n()
        }, [r]), "popLayout" === a && (e = c.createElement(M, {
          isPresent: r
        }, e)), c.createElement(L.O.Provider, {
          value: d
        }, e)
      };

      function I() {
        return new Map
      }
      var R = r(781),
        H = r(3276),
        $ = r(8704);
      let z = e => e.key || "",
        T = ({
          children: e,
          custom: t,
          initial: r = !0,
          onExitComplete: n,
          exitBeforeEnter: i,
          presenceAffectsLayout: o = !0,
          mode: a = "sync"
        }) => {
          i && (a = "wait", (0, $.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
          let [s] = function() {
            let e = O(),
              [t, r] = (0, c.useState)(0),
              n = (0, c.useCallback)(() => {
                e.current && r(t + 1)
              }, [t]);
            return [(0, c.useCallback)(() => C.Z_.postRender(n), [n]), t]
          }(), l = (0, c.useContext)(R.p).forceRender;
          l && (s = l);
          let d = O(),
            u = function(e) {
              let t = [];
              return c.Children.forEach(e, e => {
                (0, c.isValidElement)(e) && t.push(e)
              }), t
            }(e),
            p = u,
            f = new Set,
            m = (0, c.useRef)(p),
            h = (0, c.useRef)(new Map).current,
            x = (0, c.useRef)(!0);
          if ((0, N.L)(() => {
              x.current = !1,
                function(e, t) {
                  e.forEach(e => {
                    let r = z(e);
                    t.set(r, e)
                  })
                }(u, h), m.current = p
            }), (0, H.z)(() => {
              x.current = !0, h.clear(), f.clear()
            }), x.current) return c.createElement(c.Fragment, null, p.map(e => c.createElement(P, {
            key: z(e),
            isPresent: !0,
            initial: !!r && void 0,
            presenceAffectsLayout: o,
            mode: a
          }, e)));
          p = [...p];
          let g = m.current.map(z),
            y = u.map(z),
            b = g.length;
          for (let e = 0; e < b; e++) {
            let t = g[e]; - 1 === y.indexOf(t) && f.add(t)
          }
          return "wait" === a && f.size && (p = []), f.forEach(e => {
            if (-1 !== y.indexOf(e)) return;
            let r = h.get(e);
            if (!r) return;
            let i = g.indexOf(e);
            p.splice(i, 0, c.createElement(P, {
              key: z(r),
              isPresent: !1,
              onExitComplete: () => {
                h.delete(e), f.delete(e);
                let t = m.current.findIndex(t => t.key === e);
                if (m.current.splice(t, 1), !f.size) {
                  if (m.current = u, !1 === d.current) return;
                  s(), n && n()
                }
              },
              custom: t,
              presenceAffectsLayout: o,
              mode: a
            }, r))
          }), p = p.map(e => {
            let t = e.key;
            return f.has(t) ? e : c.createElement(P, {
              key: z(e),
              isPresent: !0,
              presenceAffectsLayout: o,
              mode: a
            }, e)
          }), "production" !== _.O && "wait" === a && p.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), c.createElement(c.Fragment, null, f.size ? p : p.map(e => (0, c.cloneElement)(e)))
        },
        F = {
          data: ""
        },
        D = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
          innerHTML: " ",
          id: "_goober"
        })).firstChild : e || F,
        q = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        B = /\/\*[^]*?\*\/|  +/g,
        W = /\n+/g,
        G = (e, t) => {
          let r = "",
            n = "",
            i = "";
          for (let o in e) {
            let a = e[o];
            "@" == o[0] ? "i" == o[1] ? r = o + " " + a + ";" : n += "f" == o[1] ? G(a, o) : o + "{" + G(a, "k" == o[1] ? "" : t) + "}" : "object" == typeof a ? n += G(a, t ? t.replace(/([^,])+/g, e => o.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : o) : null != a && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += G.p ? G.p(o, a) : o + ":" + a + ";")
          }
          return r + (t && i ? t + "{" + i + "}" : i) + n
        },
        U = {},
        K = e => {
          if ("object" == typeof e) {
            let t = "";
            for (let r in e) t += r + K(e[r]);
            return t
          }
          return e
        },
        J = (e, t, r, n, i) => {
          var o;
          let a = K(e),
            s = U[a] || (U[a] = (e => {
              let t = 0,
                r = 11;
              for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
              return "go" + r
            })(a));
          if (!U[s]) {
            let t = a !== e ? e : (e => {
              let t, r, n = [{}];
              for (; t = q.exec(e.replace(B, ""));) t[4] ? n.shift() : t[3] ? (r = t[3].replace(W, " ").trim(), n.unshift(n[0][r] = n[0][r] || {})) : n[0][t[1]] = t[2].replace(W, " ").trim();
              return n[0]
            })(e);
            U[s] = G(i ? {
              ["@keyframes " + s]: t
            } : t, r ? "" : "." + s)
          }
          let l = r && U.g ? U.g : null;
          return r && (U.g = U[s]), o = U[s], l ? t.data = t.data.replace(l, o) : -1 === t.data.indexOf(o) && (t.data = n ? o + t.data : t.data + o), s
        },
        Y = (e, t, r) => e.reduce((e, n, i) => {
          let o = t[i];
          if (o && o.call) {
            let e = o(r),
              t = e && e.props && e.props.className || /^go/.test(e) && e;
            o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : G(e, "") : !1 === e ? "" : e
          }
          return e + n + (null == o ? "" : o)
        }, "");

      function Z(e) {
        let t = this || {},
          r = e.call ? e(t.p) : e;
        return J(r.unshift ? r.raw ? Y(r, [].slice.call(arguments, 1), t.p) : r.reduce((e, r) => Object.assign(e, r && r.call ? r(t.p) : r), {}) : r, D(t.target), t.g, t.o, t.k)
      }
      Z.bind({
        g: 1
      });
      let V, Q, X, ee = Z.bind({
        k: 1
      });

      function et(e, t) {
        let r = this || {};
        return function() {
          let n = arguments;

          function i(o, a) {
            let s = Object.assign({}, o),
              l = s.className || i.className;
            r.p = Object.assign({
              theme: Q && Q()
            }, s), r.o = / *go\d+/.test(l), s.className = Z.apply(r, n) + (l ? " " + l : ""), t && (s.ref = a);
            let c = e;
            return e[0] && (c = s.as || e, delete s.as), X && c[0] && X(s), V(c, s)
          }
          return t ? t(i) : i
        }
      }
      var er = e => "function" == typeof e,
        en = (e, t) => er(e) ? e(t) : e,
        ei = (n = 0, () => (++n).toString()),
        eo = () => {
          if (void 0 === i && "u" > typeof window) {
            let e = matchMedia("(prefers-reduced-motion: reduce)");
            i = !e || e.matches
          }
          return i
        },
        ea = new Map,
        es = e => {
          if (ea.has(e)) return;
          let t = setTimeout(() => {
            ea.delete(e), ep({
              type: 4,
              toastId: e
            })
          }, 1e3);
          ea.set(e, t)
        },
        el = e => {
          let t = ea.get(e);
          t && clearTimeout(t)
        },
        ec = (e, t) => {
          switch (t.type) {
            case 0:
              return {
                ...e, toasts: [t.toast, ...e.toasts].slice(0, 20)
              };
            case 1:
              return t.toast.id && el(t.toast.id), {
                ...e,
                toasts: e.toasts.map(e => e.id === t.toast.id ? {
                  ...e,
                  ...t.toast
                } : e)
              };
            case 2:
              let {
                toast: r
              } = t;
              return e.toasts.find(e => e.id === r.id) ? ec(e, {
                type: 1,
                toast: r
              }) : ec(e, {
                type: 0,
                toast: r
              });
            case 3:
              let {
                toastId: n
              } = t;
              return n ? es(n) : e.toasts.forEach(e => {
                es(e.id)
              }), {
                ...e,
                toasts: e.toasts.map(e => e.id === n || void 0 === n ? {
                  ...e,
                  visible: !1
                } : e)
              };
            case 4:
              return void 0 === t.toastId ? {
                ...e,
                toasts: []
              } : {
                ...e,
                toasts: e.toasts.filter(e => e.id !== t.toastId)
              };
            case 5:
              return {
                ...e, pausedAt: t.time
              };
            case 6:
              let i = t.time - (e.pausedAt || 0);
              return {
                ...e, pausedAt: void 0, toasts: e.toasts.map(e => ({
                  ...e,
                  pauseDuration: e.pauseDuration + i
                }))
              }
          }
        },
        ed = [],
        eu = {
          toasts: [],
          pausedAt: void 0
        },
        ep = e => {
          eu = ec(eu, e), ed.forEach(e => {
            e(eu)
          })
        },
        ef = {
          blank: 4e3,
          error: 4e3,
          success: 2e3,
          loading: 1 / 0,
          custom: 4e3
        },
        em = (e = {}) => {
          let [t, r] = (0, c.useState)(eu);
          (0, c.useEffect)(() => (ed.push(r), () => {
            let e = ed.indexOf(r);
            e > -1 && ed.splice(e, 1)
          }), [t]);
          let n = t.toasts.map(t => {
            var r, n;
            return {
              ...e,
              ...e[t.type],
              ...t,
              duration: t.duration || (null == (r = e[t.type]) ? void 0 : r.duration) || (null == e ? void 0 : e.duration) || ef[t.type],
              style: {
                ...e.style,
                ...null == (n = e[t.type]) ? void 0 : n.style,
                ...t.style
              }
            }
          });
          return {
            ...t,
            toasts: n
          }
        },
        eh = (e, t = "blank", r) => ({
          createdAt: Date.now(),
          visible: !0,
          type: t,
          ariaProps: {
            role: "status",
            "aria-live": "polite"
          },
          message: e,
          pauseDuration: 0,
          ...r,
          id: (null == r ? void 0 : r.id) || ei()
        }),
        ex = e => (t, r) => {
          let n = eh(t, e, r);
          return ep({
            type: 2,
            toast: n
          }), n.id
        },
        eg = (e, t) => ex("blank")(e, t);
      eg.error = ex("error"), eg.success = ex("success"), eg.loading = ex("loading"), eg.custom = ex("custom"), eg.dismiss = e => {
        ep({
          type: 3,
          toastId: e
        })
      }, eg.remove = e => ep({
        type: 4,
        toastId: e
      }), eg.promise = (e, t, r) => {
        let n = eg.loading(t.loading, {
          ...r,
          ...null == r ? void 0 : r.loading
        });
        return e.then(e => (eg.success(en(t.success, e), {
          id: n,
          ...r,
          ...null == r ? void 0 : r.success
        }), e)).catch(e => {
          eg.error(en(t.error, e), {
            id: n,
            ...r,
            ...null == r ? void 0 : r.error
          })
        }), e
      };
      var ey = (e, t) => {
          ep({
            type: 1,
            toast: {
              id: e,
              height: t
            }
          })
        },
        eb = () => {
          ep({
            type: 5,
            time: Date.now()
          })
        },
        ev = e => {
          let {
            toasts: t,
            pausedAt: r
          } = em(e);
          (0, c.useEffect)(() => {
            if (r) return;
            let e = Date.now(),
              n = t.map(t => {
                if (t.duration === 1 / 0) return;
                let r = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                if (r < 0) {
                  t.visible && eg.dismiss(t.id);
                  return
                }
                return setTimeout(() => eg.dismiss(t.id), r)
              });
            return () => {
              n.forEach(e => e && clearTimeout(e))
            }
          }, [t, r]);
          let n = (0, c.useCallback)(() => {
              r && ep({
                type: 6,
                time: Date.now()
              })
            }, [r]),
            i = (0, c.useCallback)((e, r) => {
              let {
                reverseOrder: n = !1,
                gutter: i = 8,
                defaultPosition: o
              } = r || {}, a = t.filter(t => (t.position || o) === (e.position || o) && t.height), s = a.findIndex(t => t.id === e.id), l = a.filter((e, t) => t < s && e.visible).length;
              return a.filter(e => e.visible).slice(...n ? [l + 1] : [0, l]).reduce((e, t) => e + (t.height || 0) + i, 0)
            }, [t]);
          return {
            toasts: t,
            handlers: {
              updateHeight: ey,
              startPause: eb,
              endPause: n,
              calculateOffset: i
            }
          }
        },
        ew = ee`
from {
  transform: scale(0) rotate(45deg);
  opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
        ej = ee`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        eE = ee`
from {
  transform: scale(0) rotate(90deg);
  opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
  opacity: 1;
}`,
        ek = et("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ew} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ej} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${eE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
        e_ = ee`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
        eC = et("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${e_} 1s linear infinite;
`,
        eN = ee`
from {
  transform: scale(0) rotate(45deg);
  opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
        eO = ee`
0% {
  height: 0;
  width: 0;
  opacity: 0;
}
40% {
  height: 0;
  width: 6px;
  opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
        eL = et("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${eO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
        eS = et("div")`
  position: absolute;
`,
        eA = et("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
        eM = ee`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        eP = et("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eM} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
        eI = ({
          toast: e
        }) => {
          let {
            icon: t,
            type: r,
            iconTheme: n
          } = e;
          return void 0 !== t ? "string" == typeof t ? c.createElement(eP, null, t) : t : "blank" === r ? null : c.createElement(eA, null, c.createElement(eC, {
            ...n
          }), "loading" !== r && c.createElement(eS, null, "error" === r ? c.createElement(ek, {
            ...n
          }) : c.createElement(eL, {
            ...n
          })))
        },
        eR = e => `
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
        eH = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,
        e$ = et("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
        ez = et("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
        eT = (e, t) => {
          let r = e.includes("top") ? 1 : -1,
            [n, i] = eo() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [eR(r), eH(r)];
          return {
            animation: t ? `${ee(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ee(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
          }
        },
        eF = c.memo(({
          toast: e,
          position: t,
          style: r,
          children: n
        }) => {
          let i = e.height ? eT(e.position || t || "top-center", e.visible) : {
              opacity: 0
            },
            o = c.createElement(eI, {
              toast: e
            }),
            a = c.createElement(ez, {
              ...e.ariaProps
            }, en(e.message, e));
          return c.createElement(e$, {
            className: e.className,
            style: {
              ...i,
              ...r,
              ...e.style
            }
          }, "function" == typeof n ? n({
            icon: o,
            message: a
          }) : c.createElement(c.Fragment, null, o, a))
        });
      o = c.createElement, G.p = void 0, V = o, Q = void 0, X = void 0;
      var eD = ({
          id: e,
          className: t,
          style: r,
          onHeightUpdate: n,
          children: i
        }) => {
          let o = c.useCallback(t => {
            if (t) {
              let r = () => {
                n(e, t.getBoundingClientRect().height)
              };
              r(), new MutationObserver(r).observe(t, {
                subtree: !0,
                childList: !0,
                characterData: !0
              })
            }
          }, [e, n]);
          return c.createElement("div", {
            ref: o,
            className: t,
            style: r
          }, i)
        },
        eq = (e, t) => {
          let r = e.includes("top"),
            n = e.includes("center") ? {
              justifyContent: "center"
            } : e.includes("right") ? {
              justifyContent: "flex-end"
            } : {};
          return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: eo() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t*(r?1:-1)}px)`,
            ...r ? {
              top: 0
            } : {
              bottom: 0
            },
            ...n
          }
        },
        eB = Z`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
        eW = ({
          reverseOrder: e,
          position: t = "top-center",
          toastOptions: r,
          gutter: n,
          children: i,
          containerStyle: o,
          containerClassName: a
        }) => {
          let {
            toasts: s,
            handlers: l
          } = ev(r);
          return c.createElement("div", {
            style: {
              position: "fixed",
              zIndex: 9999,
              top: 16,
              left: 16,
              right: 16,
              bottom: 16,
              pointerEvents: "none",
              ...o
            },
            className: a,
            onMouseEnter: l.startPause,
            onMouseLeave: l.endPause
          }, s.map(r => {
            let o = r.position || t,
              a = eq(o, l.calculateOffset(r, {
                reverseOrder: e,
                gutter: n,
                defaultPosition: t
              }));
            return c.createElement(eD, {
              id: r.id,
              key: r.id,
              onHeightUpdate: l.updateHeight,
              className: r.visible ? eB : "",
              style: a
            }, "custom" === r.type ? en(r.message, r) : i ? i(r) : c.createElement(eF, {
              toast: r,
              position: o
            }))
          }))
        },
        eG = r(8475),
        eU = r.n(eG);
      let eK = {
        hidden: {
          opacity: 0
        },
        enter: {
          opacity: 1,
          x: 0,
          y: 0
        },
        exit: {
          opacity: 0,
          x: 0,
          y: -100
        }
      };
      var eJ = e => {
        let {
          children: t
        } = e, r = (0, c.useRef)(null);
        return (0, a.jsx)(T, {
          mode: "wait",
          children: (0, a.jsxs)("html", {
            lang: "en",
            children: [(0, a.jsxs)("head", {
              children: [(0, a.jsx)("meta", {
                charSet: "utf-8"
              }), (0, a.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              }), (0, a.jsx)("meta", {
                name: "description",
                content: "Codex, the best FREE Roblox Exploit/Executor for Android, iOS & PC. Bypass Byfron Anti-Cheat & Exploit on your favorite Roblox games, with no key system & no crashes!"
              }), (0, a.jsx)("meta", {
                name: "theme-color",
                content: "#d32642"
              }), (0, a.jsx)("meta", {
                name: "robots",
                content: "index,follow"
              }), (0, a.jsx)("link", {
                rel: "manifest",
                href: "/manifest.json"
              }), (0, a.jsx)("link", {
                rel: "canonical",
                href: "https://www.codex.lol"
              }), (0, a.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              }), (0, a.jsx)("meta", {
                property: "og:type",
                content: "website"
              }), (0, a.jsx)("meta", {
                property: "og:url",
                content: "https://www.codex.lol"
              }), (0, a.jsx)("meta", {
                property: "og:title",
                content: "Codex Roblox Executor - #1 Free Android, iOS & PC Exploit"
              }), (0, a.jsx)("meta", {
                property: "og:description",
                content: "Codex, the best FREE Roblox Exploit/Executor for Android, iOS & PC. Bypass Byfron Anti-Cheat & Exploit on your favorite Roblox games, with no key system & no crashes!"
              }), (0, a.jsx)("meta", {
                name: "msapplication-TileColor",
                content: "#da532c"
              }), (0, a.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
              }), (0, a.jsx)("title", {
                children: "Codex Roblox Executor - #1 Free Windows, Android, iOS & PC Exploit"
              }), (0, a.jsx)("script", {
                async: !0,
                src: "https://www.googletagmanager.com/gtag/js?id=G-1PR3KL1NPC"
              }), (0, a.jsx)("script", {
                dangerouslySetInnerHTML: {
                  __html: "\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-1PR3KL1NPC');\n              "
                }
              }), (0, a.jsx)(eU(), {
                src: "https://www.googletagmanager.com/gtag/js?id=G-1PR3KL1NPC",
                strategy: "afterInteractive"
              })]
            }), (0, a.jsxs)("body", {
              className: l().className,
              children: [(0, a.jsx)("svg", {
                width: "0",
                height: "0",
                children: (0, a.jsxs)("linearGradient", {
                  id: "red-gradient",
                  x1: "100%",
                  y1: "100%",
                  x2: "0%",
                  y2: "0%",
                  children: [(0, a.jsx)("stop", {
                    stopColor: "#e22551",
                    offset: "0%"
                  }), (0, a.jsx)("stop", {
                    stopColor: "#ba3f5c",
                    offset: "100%"
                  })]
                })
              }), (0, a.jsx)(k, {}), (0, a.jsxs)(d.E.main, {
                variants: eK,
                initial: "hidden",
                animate: "enter",
                exit: "exit",
                transition: {
                  type: "linear",
                  duration: 1
                },
                "data-scroll-container": "true",
                ref: r,
                children: [(0, a.jsx)(eW, {
                  position: "bottom-right"
                }), (0, a.jsx)(d.E.div, {
                  initial: "initial",
                  animate: "visible",
                  variants: eK,
                  children: t
                })]
              })]
            })]
          })
        })
      }
    },
    1359: function() {},
    4962: function(e) {
      e.exports = {
        burger: "mobile-menu_burger__A_ajg"
      }
    },
    6385: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_67d29c', '__Manrope_Fallback_67d29c'",
          fontStyle: "normal"
        },
        className: "__className_67d29c"
      }
    },
    4033: function(e, t, r) {
      e.exports = r(5313)
    },
    8475: function(e, t, r) {
      e.exports = r(5935)
    }
  },
  function(e) {
    e.O(0, [414, 971, 938, 744], function() {
      return e(e.s = 2492)
    }), _N_E = e.O()
  }
]);
