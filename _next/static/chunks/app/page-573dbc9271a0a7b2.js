(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
  4058: function(e, s, r) {
      Promise.resolve().then(r.bind(r, 6568))
  },
  6568: function(e, s, r) {
      "use strict";
      r.r(s),
      r.d(s, {
          default: function() {
              return E
          }
      });
      var a = r(7437)
        , t = r(1448)
        , l = r(2622)
        , i = r(5824)
        , c = r(1396)
        , o = r.n(c)
        , n = r(3159)
        , m = r(4606)
        , x = r(6691)
        , y = r.n(x)
        , d = r(2265)
        , p = r(7712)
        , f = r(4327);
      function h(e) {
          let {text: s, className: r} = e
            , t = (0,
          p._)()
            , {ref: l, inView: c} = (0,
          f.YD)({
              threshold: .5,
              triggerOnce: !0
          });
          (0,
          d.useEffect)(()=>{
              c && t.start("visible"),
              c || t.start("hidden")
          }
          , [t, c]);
          let o = {
              hidden: {},
              visible: {}
          }
            , n = {
              hidden: {
                  opacity: 0,
                  y: "0.25em"
              },
              visible: {
                  opacity: 1,
                  y: "0em",
                  transition: {
                      duration: .5,
                      ease: [.2, .65, .3, .9]
                  }
              }
          };
          return (0,
          a.jsx)("h2", {
              className: r || "text-6xl",
              "aria-label": s,
              role: "heading",
              children: s.split(" ").map((e,s)=>(0,
              a.jsx)(i.E.span, {
                  className: "inline-block whitespace-nowrap mr-2",
                  ref: l,
                  "aria-hidden": "true",
                  initial: "hidden",
                  animate: t,
                  variants: o,
                  transition: {
                      delayChildren: .25 * s,
                      staggerChildren: .05
                  },
                  children: e.split("").map((e,s)=>(0,
                  a.jsx)(i.E.span, {
                      className: "inline-block whitespace-nowrap",
                      "aria-hidden": "true",
                      variants: n,
                      children: e
                  }, s))
              }, s))
          })
      }
      var g = r(6440)
        , j = r.n(g)
        , u = r(8436)
        , v = r(510)
        , N = r(1850)
        , b = r(7002)
        , w = r.n(b)
        , O = r(609)
        , k = r(8552)
        , R = r(3622)
        , C = r(9804)
        , L = r(9771);
      function D(e) {
          let {children: s, baseVelocity: r=100} = e
            , c = (0,
          O.c)(0)
            , {scrollY: o} = (0,
          t.v)()
            , n = (0,
          k.T)(o)
            , m = (0,
          R.q)(n, {
              damping: 50,
              stiffness: 400
          })
            , x = (0,
          l.H)(m, [0, 1e3], [0, 5], {
              clamp: !1
          })
            , y = (0,
          l.H)(c, e=>"".concat((0,
          L.r)(-20, -45, e), "%"))
            , p = (0,
          d.useRef)(1);
          return (0,
          C.p)((e,s)=>{
              let a = p.current * r * (s / 1e3);
              0 > x.get() ? p.current = -1 : x.get() > 0 && (p.current = 1),
              a += p.current * a * x.get(),
              c.set(c.get() + a)
          }
          ),
          (0,
          a.jsx)("div", {
              className: "parallax",
              children: (0,
              a.jsx)(i.E.div, {
                  className: w().className + " scroller",
                  style: {
                      x: y
                  },
                  children: [...Array(25)].map((e,r)=>(0,
                  a.jsx)("span", {
                      children: s
                  }, r))
              })
          })
      }
      var E = ()=>{
          let {scrollYProgress: e} = (0,
          t.v)()
            , s = (0,
          l.H)(e, [0, .5, 1], [.7, .9, 1])
            , r = (0,
          l.H)(e, [0, .5, 1], [0, 2, 0]);
          return (0,
          d.useEffect)(()=>{
              j().init(document.querySelectorAll("#tilt"), {
                  speed: 400,
                  glare: !0,
                  "max-glare": .1,
                  gyroscope: !0,
                  scale: 1.1,
                  perspective: 1e3
              })
          }
          , []),
          (0,
          a.jsx)(a.Fragment, {
              children: (0,
              a.jsxs)(i.E.section, {
                  "data-scroll-section": "true",
                  className: "flex min-h-full flex-col",
                  children: [(0,
                  a.jsxs)("div", {
                      className: "lg:flex relative isolate",
                      children: [(0,
                      a.jsx)("div", {
                          className: "absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80",
                          "aria-hidden": "true",
                          children: (0,
                          a.jsx)("div", {
                              className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e22551] via-[#df5898] to-[#d32642] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
                              style: {
                                  clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                              }
                          })
                      }), (0,
                      a.jsx)("div", {
                          className: "absolute inset-x-0 transform-gpu overflow-hidden blur-[100px]",
                          "aria-hidden": "true",
                          children: (0,
                          a.jsx)("div", {
                              className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e22551] to-[#ba3f5c] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
                              style: {
                                  clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                              }
                          })
                      })]
                  }), (0,
                  a.jsxs)("section", {
                      className: "min-h-screen flex flex-col justify-center items-center",
                      children: [(0,
                      a.jsx)(d.Suspense, {
                          fallback: (0,
                          a.jsx)("div", {
                              children: "Loading..."
                          })
                      }), (0,
                      a.jsxs)("div", {
                          className: "h-screen w-full grid grid-cols-1 lg:grid-cols-2",
                          children: [(0,
                          a.jsx)("div", {
                              className: "hidden lg:block",
                              children: (0,
                              a.jsx)("div", {
                                  className: "relative flex-none overflow-hidden px-6 lg:pointer-events-none h-full lg:inset-0 lg:z-40 lg:flex lg:px-0",
                                  children: (0,
                                  a.jsx)("div", {
                                      className: "relative flex w-full lg:pointer-events-auto lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden flex justify-center w-full",
                                      children: (0,
                                      a.jsxs)("div", {
                                          className: "mx-auto max-w-lg lg:mx-0 lg:flex lg:w-[34rem] lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6",
                                          children: [(0,
                                          a.jsx)("div", {
                                              className: "pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20",
                                              children: (0,
                                              a.jsxs)("div", {
                                                  className: "relative",
                                                  children: [(0,
                                                  a.jsx)(S, {}), (0,
                                                  a.jsxs)("h1", {
                                                      className: "mt-14 text-4xl font-bold lg:text-5xl text-white",
                                                      children: ["Download Codex for", " ", (0,
                                                      a.jsx)("span", {
                                                          className: "text-gradient",
                                                          children: "Windows"
                                                      }), "."]
                                                  }), (0,
                                                  a.jsx)("p", {
                                                      className: "mt-6 text-neutral-400",
                                                      children: "Supported low-end PCs and let you enjoy the stable and smooth. Unleashes your graphics performance with exclusive graphics technology, supports high frame rate and 4K-quality graphics. New keyboard & mouse plan restores the PC experience for you. Take control in the game with ease."
                                                  }), (0,
                                                  a.jsx)("div", {
                                                      className: "flex gap-3",
                                                      children: (0,
                                                      a.jsx)(o(), {
                                                          href: "/windows",
                                                          children: (0,
                                                          a.jsxs)("button", {
                                                              className: "mt-10 primary-button button-padding gap-x-2 w-full justify-center lg:w-auto flex flex-row items-center",
                                                              children: ["Download for Windows ", (0,
                                                              a.jsx)(n.zTP, {
                                                                  size: 19
                                                              })]
                                                          })
                                                      })
                                                  })]
                                              })
                                          }), (0,
                                          a.jsx)("div", {
                                              className: "flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6",
                                              children: (0,
                                              a.jsxs)("p", {
                                                  className: "flex items-center flex-row gap-x-1.5 text-[0.8125rem]/6 text-neutral-500",
                                                  children: ["Join the", " ", (0,
                                                  a.jsxs)(o(), {
                                                      className: "text-neutral-400 flex items-center flex-row gap-x-1",
                                                      href: "https://discord.gg/robloxexploits",
                                                      target: "_blank",
                                                      children: [(0,
                                                      a.jsx)(m.KpZ, {
                                                          size: 15
                                                      }), " Discord"]
                                                  })]
                                              })
                                          })]
                                      })
                                  })
                              })
                          }), (0,
                          a.jsxs)("div", {
                              className: "flex justify-center relative min-w-[320px]",
                              children: [(0,
                              a.jsx)("div", {
                                  className: "pointer-events-none absolute inset-0 z-50 overflow-hidden lg:overflow-visible",
                                  children: (0,
                                  a.jsxs)("svg", {
                                      className: "absolute top-0 h-full w-1.5",
                                      "aria-hidden": "true",
                                      children: [(0,
                                      a.jsx)("defs", {
                                          children: (0,
                                          a.jsx)("pattern", {
                                              id: ":S4:",
                                              width: 6,
                                              height: 8,
                                              patternUnits: "userSpaceOnUse",
                                              children: (0,
                                              a.jsx)("path", {
                                                  d: "M0 0H6M0 8H6",
                                                  className: "stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10",
                                                  fill: "none"
                                              })
                                          })
                                      }), (0,
                                      a.jsx)("rect", {
                                          width: "100%",
                                          height: "100%",
                                          fill: "url(#:S4:)"
                                      })]
                                  })
                              }), (0,
                              a.jsx)("div", {
                                  className: "w-full h-full justify-center items-center",
                                  children: (0,
                                  a.jsx)("div", {
                                      className: "flex flex-col items-center justify-center xl:max-w-7xl mx-4 text-center h-full",
                                      children: (0,
                                      a.jsxs)("div", {
                                          className: "flex flex-col items-center",
                                          children: [(0,
                                          a.jsxs)("header", {
                                              className: "w-full flex flex-col text-center items-center justify-center mb-10",
                                              children: [(0,
                                              a.jsxs)("h1", {
                                                  className: "z-10 text-5xl font-bold mb-5",
                                                  children: ["Download Codex for ", (0,
                                                  a.jsx)("span", {
                                                      className: "text-gradient",
                                                      children: "Mobile"
                                                  }), "."]
                                              }), (0,
                                              a.jsx)("p", {
                                                  className: "z-10 text-neutral-400 mx-4 xl:w-[600px] xl:mx-0",
                                                  children: "Codex stands out as the premier Roblox script executor, providing unparalleled functionality to effortlessly run scripts for your preferred Roblox games."
                                              })]
                                          }), (0,
                                          a.jsxs)("div", {
                                              className: "grid grid-cols-2 gap-6 mx-4 xl:mx-0 items-center",
                                              children: [(0,
                                              a.jsx)(o(), {
                                                  href: "/android",
                                                  children: (0,
                                                  a.jsxs)("button", {
                                                      className: "backdrop-blur flex flex-col items-center text-center from-transparent to-white/5 shadow-md rounded-md border border-white/5 bg-gradient-to-tr p-[1.9rem] xs:p-[2.5rem] sm:p-[3rem] md:p-[4rem] lg:p-[6rem]",
                                                      id: "tilt",
                                                      children: [(0,
                                                      a.jsx)(n.q2m, {
                                                          className: "text-6xl"
                                                      }), (0,
                                                      a.jsx)("caption", {
                                                          className: "text-sm text-neutral-400 mt-2",
                                                          children: "Android"
                                                      })]
                                                  })
                                              }), (0,
                                              a.jsx)(o(), {
                                                  href: "/ios",
                                                  children: (0,
                                                  a.jsxs)("button", {
                                                      className: "backdrop-blur flex flex-col items-center text-center from-transparent to-white/5 shadow-md rounded-md border border-white/5 bg-gradient-to-tr p-[1.9rem] xs:p-[2.5rem] sm:p-[3rem] md:p-[4rem] lg:p-[6rem]",
                                                      id: "tilt",
                                                      children: [(0,
                                                      a.jsx)(n.oPZ, {
                                                          className: "text-6xl"
                                                      }), (0,
                                                      a.jsx)("caption", {
                                                          className: "text-sm text-neutral-400 mt-2",
                                                          children: "iOS"
                                                      })]
                                                  })
                                              })]
                                          })]
                                      })
                                  })
                              })]
                          }), (0,
                          a.jsx)("div", {
                              className: "grid-lines",
                              children: (0,
                              a.jsx)("div", {
                                  className: "grid"
                              })
                          })]
                      })]
                  }), (0,
                  a.jsxs)(i.E.section, {
                      "data-scroll-section": "true",
                      className: "h-full flex flex-col gap-y-10 items-center justify-center",
                      children: [(0,
                      a.jsx)("div", {
                          className: "flex py-5 border-t border-b border-neutral-800 w-full",
                          children: (0,
                          a.jsx)(D, {
                              "data-scroll": !0,
                              baseVelocity: 2,
                              children: "Codex"
                          })
                      }), (0,
                      a.jsx)(i.E.div, {
                          "data-scroll": !0,
                          style: {
                              scale: s,
                              rotateZ: r
                          },
                          className: "min-h-screen p-0 lg:p-10 xl:p-10 2xl:p-10 md:p-10 sm:p-10",
                          children: (0,
                          a.jsx)("div", {
                              className: "max-w-6xl mx-auto space-y-32",
                              children: (0,
                              a.jsxs)("section", {
                                  className: "md:flex md:space-x-10 items-start",
                                  children: [(0,
                                  a.jsxs)("div", {
                                      className: "xl:w-4/6 w-full leading-snug text-white",
                                      children: [(0,
                                      a.jsx)(i.E.div, {
                                          initial: {
                                              opacity: 0,
                                              y: 50
                                          },
                                          animate: {
                                              opacity: 1,
                                              y: 0
                                          },
                                          transition: {
                                              duration: .7
                                          },
                                          className: "px-4 max-w-xl mx-auto mb-40 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0",
                                          children: (0,
                                          a.jsxs)("div", {
                                              className: "sm:mt-6 xl:w-2/3 2xl:w-2/3 w-full",
                                              children: [(0,
                                              a.jsxs)("span", {
                                                  className: "flex flex-row gap-x-3 items-center",
                                                  children: [(0,
                                                  a.jsx)(u.Z, {
                                                      style: {
                                                          stroke: "url(#red-gradient)"
                                                      },
                                                      size: 20
                                                  }), (0,
                                                  a.jsx)(h, {
                                                      text: "Unrivaled execution.",
                                                      className: "text-3xl font-custom font-semibold tracking-tight text-white"
                                                  })]
                                              }), (0,
                                              a.jsx)("p", {
                                                  className: "mt-6 text-lg text-gray-400",
                                                  children: "Codex boasts exceptional support for a wide array of essential libraries and scripts, ensuring smooth development and gameplay. Focus on what matters most - having a great time!"
                                              })]
                                          })
                                      }), (0,
                                      a.jsx)(i.E.div, {
                                          initial: {
                                              opacity: 0,
                                              y: 50
                                          },
                                          animate: {
                                              opacity: 1,
                                              y: 0
                                          },
                                          transition: {
                                              duration: .7
                                          },
                                          className: "px-4 max-w-xl mx-auto mb-40 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0",
                                          children: (0,
                                          a.jsxs)("div", {
                                              className: "sm:mt-6  xl:w-2/3 2xl:w-2/3 w-full",
                                              children: [(0,
                                              a.jsxs)("span", {
                                                  className: "flex flex-row gap-x-3 items-center",
                                                  children: [(0,
                                                  a.jsx)(v.Z, {
                                                      style: {
                                                          stroke: "url(#red-gradient)"
                                                      },
                                                      size: 20
                                                  }), (0,
                                                  a.jsx)(h, {
                                                      text: "Exclusive Script Hub.",
                                                      className: "text-3xl font-custom font-semibold tracking-tight text-white"
                                                  })]
                                              }), (0,
                                              a.jsx)("p", {
                                                  className: "mt-6 text-lg text-gray-400",
                                                  children: "Our regularly updated Script Hub provides a vast selection of games and scripts, saving you the trouble of searching through third-party sites. With Codex, enjoy one-stop access to everything you need."
                                              })]
                                          })
                                      }), (0,
                                      a.jsx)(i.E.div, {
                                          initial: {
                                              opacity: 0,
                                              y: 50
                                          },
                                          animate: {
                                              opacity: 1,
                                              y: 0
                                          },
                                          transition: {
                                              duration: .7
                                          },
                                          className: "px-4 max-w-xl mx-auto mb-40 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0",
                                          children: (0,
                                          a.jsxs)("div", {
                                              className: "sm:mt-6 xl:w-2/3 2xl:w-2/3 w-full",
                                              children: [(0,
                                              a.jsxs)("span", {
                                                  className: "flex flex-row gap-x-3 items-center",
                                                  children: [(0,
                                                  a.jsx)(N.Z, {
                                                      style: {
                                                          stroke: "url(#red-gradient)"
                                                      },
                                                      size: 20
                                                  }), (0,
                                                  a.jsx)(h, {
                                                      text: "Cross-Platform Compatibility.",
                                                      className: "text-3xl font-custom font-semibold tracking-tight text-white"
                                                  })]
                                              }), (0,
                                              a.jsx)("p", {
                                                  className: "mt-6 text-lg text-gray-400",
                                                  children: "Our products are designed to work seamlessly across various platforms, allowing you to transition from Android & iOS to PC without missing a beat."
                                              })]
                                          })
                                      })]
                                  }), (0,
                                  a.jsx)("div", {
                                      className: "mx-auto justify-center w-2/3 md:sticky flex md:top-48 py-4 text-white",
                                      children: (0,
                                      a.jsx)("div", {
                                          className: "md:absolute opacity-100",
                                          children: (0,
                                          a.jsx)(y(), {
                                              src: "/assets/ios.webp",
                                              alt: "Copied by Yokiro, an image would be here.",
                                              className: "rounded-lg red-shadow",
                                              width: 600,
                                              height: 400
                                          })
                                      })
                                  })]
                              })
                          })
                      })]
                  })]
              })
          })
      }
      ;
      let S = ()=>(0,
      a.jsxs)("svg", {
          viewBox: "0 0 881 211",
          fill: "white",
          "aria-hidden": "true",
          className: "pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70 -right-44 top-14",
          children: [(0,
          a.jsx)("defs", {
              children: (0,
              a.jsx)("filter", {
                  id: ":Rb6mla:",
                  children: (0,
                  a.jsx)("feGaussianBlur", {
                      in: "SourceGraphic",
                      stdDeviation: ".5"
                  })
              })
          }), (0,
          a.jsx)("path", {
              stroke: "white",
              strokeOpacity: "0.2",
              strokeDasharray: 1,
              strokeDashoffset: 1,
              pathLength: 1,
              fill: "transparent",
              d: "M 247,103L261,86L307,104L357,36",
              className: "invisible",
              style: {
                  strokeDashoffset: 0,
                  visibility: "visible"
              }
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 247,
                  cy: 103,
                  r: 1,
                  style: {
                      transformOrigin: "15.4375rem 6.4375rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 261,
                  cy: 86,
                  r: 1,
                  style: {
                      transformOrigin: "16.3125rem 5.375rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 307,
                  cy: 104,
                  r: 1,
                  style: {
                      transformOrigin: "19.1875rem 6.5rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 357,
                  cy: 36,
                  r: 1,
                  style: {
                      transformOrigin: "22.3125rem 2.25rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("path", {
              stroke: "white",
              strokeOpacity: "0.2",
              strokeDasharray: 1,
              strokeDashoffset: 1,
              pathLength: 1,
              fill: "transparent",
              d: "M 586,120L516,100L491,62L440,107L477,180L516,100",
              className: "invisible",
              style: {
                  strokeDashoffset: 0,
                  visibility: "visible",
                  fill: "rgba(255, 255, 255, 0.02)"
              }
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 586,
                  cy: 120,
                  r: 1,
                  style: {
                      transformOrigin: "36.625rem 7.5rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 516,
                  cy: 100,
                  r: 1,
                  style: {
                      transformOrigin: "32.25rem 6.25rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 491,
                  cy: 62,
                  r: 1,
                  style: {
                      transformOrigin: "30.6875rem 3.875rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 440,
                  cy: 107,
                  r: 1,
                  style: {
                      transformOrigin: "27.5rem 6.6875rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 477,
                  cy: 180,
                  r: 1,
                  style: {
                      transformOrigin: "29.8125rem 11.25rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("path", {
              stroke: "white",
              strokeOpacity: "0.2",
              strokeDasharray: 1,
              strokeDashoffset: 1,
              pathLength: 1,
              fill: "transparent",
              d: "M 733,100L803,120L879,113L823,164L803,120",
              className: "invisible",
              style: {
                  strokeDashoffset: 0,
                  visibility: "visible",
                  fill: "rgba(255, 255, 255, 0.02)"
              }
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 733,
                  cy: 100,
                  r: 1,
                  style: {
                      transformOrigin: "45.8125rem 6.25rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 803,
                  cy: 120,
                  r: 1,
                  style: {
                      transformOrigin: "50.1875rem 7.5rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 879,
                  cy: 113,
                  r: 1,
                  style: {
                      transformOrigin: "54.9375rem 7.0625rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 823,
                  cy: 164,
                  r: 1,
                  style: {
                      transformOrigin: "51.4375rem 10.25rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 4,
                  cy: 4,
                  r: 1,
                  style: {
                      transformOrigin: "0.25rem 0.25rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 4,
                  cy: 44,
                  r: 1,
                  style: {
                      transformOrigin: "0.25rem 2.75rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 36,
                  cy: 22,
                  r: 1,
                  style: {
                      transformOrigin: "2.25rem 1.375rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 50,
                  cy: 146,
                  r: 1,
                  style: {
                      transformOrigin: "3.125rem 9.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 64,
                  cy: 43,
                  r: 1,
                  style: {
                      transformOrigin: "4rem 2.6875rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 76,
                  cy: 30,
                  r: 1,
                  style: {
                      transformOrigin: "4.75rem 1.875rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 101,
                  cy: 116,
                  r: 1,
                  style: {
                      transformOrigin: "6.3125rem 7.25rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 140,
                  cy: 36,
                  r: 1,
                  style: {
                      transformOrigin: "8.75rem 2.25rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 149,
                  cy: 134,
                  r: 1,
                  style: {
                      transformOrigin: "9.3125rem 8.375rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 162,
                  cy: 74,
                  r: 1,
                  style: {
                      transformOrigin: "10.125rem 4.625rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 171,
                  cy: 96,
                  r: 1,
                  style: {
                      transformOrigin: "10.6875rem 6rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 210,
                  cy: 56,
                  r: 1,
                  style: {
                      transformOrigin: "13.125rem 3.5rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 235,
                  cy: 90,
                  r: 1,
                  style: {
                      transformOrigin: "14.6875rem 5.625rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 275,
                  cy: 82,
                  r: 1,
                  style: {
                      transformOrigin: "17.1875rem 5.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 306,
                  cy: 6,
                  r: 1,
                  style: {
                      transformOrigin: "19.125rem 0.375rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 307,
                  cy: 64,
                  r: 1,
                  style: {
                      transformOrigin: "19.1875rem 4rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 380,
                  cy: 68,
                  r: 1,
                  style: {
                      transformOrigin: "23.75rem 4.25rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 380,
                  cy: 108,
                  r: 1,
                  style: {
                      transformOrigin: "23.75rem 6.75rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 391,
                  cy: 148,
                  r: 1,
                  style: {
                      transformOrigin: "24.4375rem 9.25rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 405,
                  cy: 18,
                  r: 1,
                  style: {
                      transformOrigin: "25.3125rem 1.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 412,
                  cy: 86,
                  r: 1,
                  style: {
                      transformOrigin: "25.75rem 5.375rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 426,
                  cy: 210,
                  r: 1,
                  style: {
                      transformOrigin: "26.625rem 13.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 427,
                  cy: 56,
                  r: 1,
                  style: {
                      transformOrigin: "26.6875rem 3.5rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 538,
                  cy: 138,
                  r: 1,
                  style: {
                      transformOrigin: "33.625rem 8.625rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 563,
                  cy: 88,
                  r: 1,
                  style: {
                      transformOrigin: "35.1875rem 5.5rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 611,
                  cy: 154,
                  r: 1,
                  style: {
                      transformOrigin: "38.1875rem 9.625rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 637,
                  cy: 150,
                  r: 1,
                  style: {
                      transformOrigin: "39.8125rem 9.375rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 651,
                  cy: 146,
                  r: 1,
                  style: {
                      transformOrigin: "40.6875rem 9.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 682,
                  cy: 70,
                  r: 1,
                  style: {
                      transformOrigin: "42.625rem 4.375rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 683,
                  cy: 128,
                  r: 1,
                  style: {
                      transformOrigin: "42.6875rem 8rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 781,
                  cy: 82,
                  r: 1,
                  style: {
                      transformOrigin: "48.8125rem 5.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 785,
                  cy: 158,
                  r: 1,
                  style: {
                      transformOrigin: "49.0625rem 9.875rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  }
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 832,
                  cy: 146,
                  r: 1,
                  style: {
                      transformOrigin: "52rem 9.125rem",
                      opacity: "0.2",
                      transform: "scale(var(--motion-scale))"
                  },
                  filter: "url(#:Rb6mla:)"
              })
          }), (0,
          a.jsx)("g", {
              className: "opacity-0",
              style: {
                  opacity: 1
              },
              children: (0,
              a.jsx)("circle", {
                  cx: 852,
                  cy: 89,
                  r: 1,
                  style: {
                      transformOrigin: "53.25rem 5.5625rem",
                      opacity: 1,
                      transform: "scale(var(--motion-scale))"
                  }
              })
          })]
      })
  }
}, function(e) {
  e.O(0, [420, 447, 414, 850, 971, 938, 744], function() {
      return e(e.s = 4058)
  }),
  _N_E = e.O()
}
]);
