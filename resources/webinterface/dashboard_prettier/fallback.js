/*! For license information please see fallback.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      844: (e, t, a) => {
        var n = a(655),
          r = a(7294),
          s = a(3935),
          l = a(4285),
          c = a(9313),
          o = a(7062),
          i = a(3568),
          m = a(8155);
        class d extends r.Component {
          constructor(e) {
            super(e);
          }
          OnActionSelected(e, t) {
            "DeviceAction_Identify" == t
              ? l.E.IdentifyController(e)
              : console.log("Unknown action: " + t + " for serial " + e);
          }
          render() {
            let e = this.props.status,
              t =
                "DeviceStatusRow " +
                (e.is_connected ? "Connected" : "Disconnected"),
              a = [];
            return (
              e.submenu &&
                (a = e.submenu.reduce(
                  (e, t) => (
                    t &&
                      t.action &&
                      e.push({ sValue: t.action, sLocalized: t.name }),
                    e
                  ),
                  [],
                )),
              r.createElement(
                "div",
                { className: "FlexColumn" },
                r.createElement(
                  "div",
                  { className: t },
                  r.createElement(
                    "div",
                    { className: "StateIcon" },
                    r.createElement("img", { src: e.state_icon }),
                  ),
                  r.createElement(
                    "div",
                    { className: "Label Status" },
                    r.createElement(
                      "div",
                      { className: "FlexColumn" },
                      r.createElement(
                        "div",
                        { className: "Label" },
                        e.state_text,
                      ),
                      e.has_battery &&
                        r.createElement(
                          "div",
                          { className: "FlexRow" },
                          r.createElement(
                            "div",
                            { className: "BatteryIcon" },
                            r.createElement("img", {
                              src: e.battery_state_icon,
                            }),
                          ),
                          r.createElement(
                            "div",
                            { className: "Label SubLabel" },
                            " ",
                            e.battery_percent,
                            "%",
                          ),
                        ),
                      e.state_secondary_text &&
                        r.createElement(
                          "div",
                          { className: "Label SubLabel" },
                          e.state_secondary_text,
                        ),
                    ),
                  ),
                  r.createElement(
                    "div",
                    { className: "Actions" },
                    a.length > 0 &&
                      r.createElement(m.vs, {
                        vecOptions: a,
                        sModalTitleString: (0, i.Xx)(
                          "#BindingUI_Chord_SelectActionModalHeader",
                        ),
                        fnOptionSelected: this.OnActionSelected.bind(
                          this,
                          e.serial,
                        ),
                        sLocalizedSelectedItem: "▼",
                      }),
                  ),
                ),
              )
            );
          }
        }
        let u = class extends r.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return null;
          }
        };
        u = (0, n.gn)([o.Pi], u);
        class E extends d {
          constructor(e) {
            super(e);
          }
          render() {
            let e = this.props.status;
            return r.createElement(
              "div",
              {
                className:
                  "DeviceStatus " +
                  (e.is_connected ? "Connected" : "Disconnected"),
              },
              r.createElement(
                c.wx,
                { rotation: { x: -20, y: 180 } },
                r.createElement(c.gQ, { source: e.rendermodelname }),
              ),
              r.createElement(
                c.wx,
                { translation: { y: -0.37 } },
                r.createElement(
                  c.s_,
                  { height: 0.18, width: void 0, debug_name: "fallback-2" },
                  r.createElement(
                    "div",
                    { className: "DeviceStatusLabel" },
                    e.model || e.class_string,
                  ),
                ),
              ),
            );
          }
        }
        let v = class extends r.Component {
          render() {
            let e = [],
              t = Math.min(e.length, 4),
              a = e.map((e, a) => {
                let n = Math.floor(a / t),
                  s = Math.floor(a % t);
                return r.createElement(
                  c.wx,
                  {
                    key: e.serial,
                    translation: { x: 0.8 * (s - (t - 1) / 2), y: 0.7 * -n },
                  },
                  r.createElement(E, { status: e }),
                );
              }),
              n = Math.floor(e.length / t),
              s = "system ready" == l.E.status.status_string.toLowerCase(),
              o = "system not ready" == l.E.status.status_string.toLowerCase(),
              i = null;
            return (
              l.E.status.is_perforce
                ? (i = "Perforce")
                : l.E.status.is_main && (i = "Main"),
              r.createElement(
                "div",
                null,
                a,
                r.createElement(
                  c.wx,
                  { translation: { y: -0.7 * (n + 1) }, rotation: { x: -20 } },
                  r.createElement(
                    c.s_,
                    { width: 3.2, height: void 0, debug_name: "fallback-1" },
                    r.createElement(
                      "div",
                      { className: "MonitorPanel" },
                      r.createElement(
                        "div",
                        { className: "SteamTitleLabel" },
                        null !== i &&
                          r.createElement("span", null, "[", i, "] "),
                        "SteamVR",
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "SteamStatusLabel " +
                            (s ? "Ready" : o ? "NotReady" : ""),
                        },
                        !l.E.connected &&
                          r.createElement(
                            "span",
                            null,
                            "Loading System Status",
                          ),
                        l.E.status && l.E.status.status_string,
                      ),
                      l.E.connected &&
                        r.createElement(
                          "div",
                          { className: "SteamStatusRight" },
                          l.E.status.hostname &&
                            r.createElement(
                              "div",
                              { className: "Hostname" },
                              "Hostname:",
                              r.createElement("br", null),
                              l.E.status.hostname,
                            ),
                        ),
                    ),
                  ),
                ),
              )
            );
          }
        };
        v = (0, n.gn)([o.Pi], v);
        class h extends r.Component {
          constructor(e) {
            super(e), l.E.Init(), (this.state = { Message: "Loading..." });
          }
          render() {
            return r.createElement(
              c.gO,
              { visibleIn3DOF: !0, visibleIn6DOF: !1 },
              r.createElement(
                c.wx,
                { parent_path: "/user/head" },
                r.createElement(
                  c.iC,
                  null,
                  r.createElement(
                    c.wx,
                    { translation: { z: -5, y: 1 } },
                    r.createElement(
                      c.wx,
                      { translation: { y: 0.35 }, rotation: { x: 20 } },
                      r.createElement(
                        c.s_,
                        {
                          width: 3.2,
                          height: void 0,
                          debug_name: "tracking-lost",
                        },
                        r.createElement(
                          "div",
                          { className: "TrackingLostPanel" },
                          "Tracking lost",
                        ),
                      ),
                    ),
                    r.createElement(
                      c.wx,
                      { translation: { y: -0.2 } },
                      r.createElement(v, null),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        s.render(
          r.createElement(c.n0, null, r.createElement(h, null)),
          document.getElementById("root"),
        );
      },
    },
    a = {};
  function n(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var s = (a[e] = { id: e, exports: {} });
    return t[e].call(s.exports, s, s.exports, n), s.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, a, r, s) => {
      if (!a) {
        var l = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [a, r, s] = e[m], c = !0, o = 0; o < a.length; o++)
            (!1 & s || l >= s) && Object.keys(n.O).every((e) => n.O[e](a[o]))
              ? a.splice(o--, 1)
              : ((c = !1), s < l && (l = s));
          if (c) {
            e.splice(m--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      s = s || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > s; m--) e[m] = e[m - 1];
      e[m] = [a, r, s];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.j = 865),
    (() => {
      var e = { 865: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, a) => {
          var r,
            s,
            [l, c, o] = a,
            i = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in c) n.o(c, r) && (n.m[r] = c[r]);
            if (o) var m = o(n);
          }
          for (t && t(a); i < l.length; i++)
            (s = l[i]), n.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return n.O(m);
        },
        a = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (n.nc = void 0);
  var r = n.O(void 0, [968, 683], () => n(844));
  r = n.O(r);
})();
//# sourceMappingURL=fallback.js.map?v=b3f1b7e3f5984fc671d6
