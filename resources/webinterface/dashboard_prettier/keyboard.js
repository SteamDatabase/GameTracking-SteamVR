/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var n, o, a = t[0], l = t[1], c = t[2], u = 0, h = [];
      u < a.length;
      u++
    )
      (o = a[u]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && h.push(i[o][0]),
        (i[o] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (d && d(t); h.length; ) h.shift()();
    return s.push.apply(s, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], n = !0, a = 1; a < r.length; a++) {
        var l = r[a];
        0 !== i[l] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = o((o.s = r[0]))));
    }
    return e;
  }
  var n = {},
    i = { 6: 0 },
    s = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    l = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var c = 0; c < a.length; c++) t(a[c]);
  var d = l;
  s.push(["xCzn", 0, 1]), r();
})({
  "/i/y": function (e, t, r) {
    "use strict";
    var n = r("mrSG"),
      i = r("7wIv"),
      s = r.n(i);
    class o {
      constructor() {
        (this.m_wsWebSocketToServer = void 0),
          (this.m_oHandlers = {}),
          (this.m_oWaits = {}),
          (this.m_oConnectWaits = []),
          (this.m_fnConnectResolve = void 0),
          (this.m_nNextMessageNumber = 1);
      }
      OpenWebSocketToHost() {
        return new Promise((e, t) => {
          console.log("Connecting vrmailbox " + this.m_sMailboxName + "...");
          let r = "ws://localhost:27062";
          this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret),
            (this.m_fnConnectResolve = e),
            (this.m_wsWebSocketToServer = new WebSocket(r)),
            this.m_wsWebSocketToServer.addEventListener("open", (t) => {
              this.OnWebSocketOpen(t), e();
            }),
            this.m_wsWebSocketToServer.addEventListener(
              "message",
              this.OnWebSocketMessage
            ),
            this.m_wsWebSocketToServer.addEventListener(
              "close",
              this.OnWebSocketClose
            );
        });
      }
      static EnsureUniqueName(e) {
        if (e.includes("/")) return e;
        let t;
        return (
          (t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
          e + "/" + t + "_" + this.s_nNextMailboxNumber++
        );
      }
      Init(e, t) {
        return Object(n.a)(this, void 0, void 0, function* () {
          return (
            (this.m_sMailboxName = o.EnsureUniqueName(e)),
            (this.m_sWebSecret = t),
            (this.connected = !1),
            this.OpenWebSocketToHost()
          );
        });
      }
      get name() {
        return this.m_sMailboxName;
      }
      OnWebSocketOpen(e) {
        (this.connected = !0),
          this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
          window.addEventListener("beforeunload", () => {
            this.WebSocketSend("websocket_close");
          }),
          this.m_fnConnectResolve &&
            (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
        for (let e of this.m_oConnectWaits) e();
        this.m_oConnectWaits = [];
      }
      OnWebSocketClose(e) {
        console.log("Lost connection to host..."),
          (this.connected = !1),
          this.OpenWebSocketToHost();
      }
      WebSocketSend(e) {
        null != this.m_wsWebSocketToServer &&
          1 == this.m_wsWebSocketToServer.readyState &&
          this.m_wsWebSocketToServer.send(e);
      }
      OnWebSocketMessage(e) {
        let t = JSON.parse(e.data),
          r = !1;
        if (
          (this.m_oHandlers.hasOwnProperty(t.type) &&
            (this.m_oHandlers[t.type](t), (r = !0)),
          this.m_oWaits.hasOwnProperty(t.type))
        ) {
          let e = !1;
          for (let r of this.m_oWaits[t.type])
            r.nMessageId == t.message_id && (r.callback(t), (e = !0));
          e
            ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                (e) => e.nMessageId == t.message_id
              ))
            : console.log(
                `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`
              ),
            (r = !0);
        }
        r || console.log("Received unhandled message: ", t);
      }
      RegisterHandler(e, t) {
        this.m_oHandlers[e] = t;
      }
      SendMessage(e, t) {
        this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
      }
      WaitForMessage(e, t) {
        return new Promise((r, n) => {
          this.m_oWaits[e] || (this.m_oWaits[e] = []),
            this.m_oWaits[e].push({ callback: r, nMessageId: t });
        });
      }
      WaitForConnect() {
        return new Promise((e, t) => {
          this.connected ? e() : this.m_oConnectWaits.push(e);
        });
      }
      WaitForMailbox(e) {
        return Object(n.a)(this, void 0, void 0, function* () {
          let t = {
            type: "request_mailbox_registration_notification",
            mailbox_name: e,
          };
          return this.SendMessageAndWaitForResponse(
            "web_server_mailbox",
            t,
            "mailbox_registered"
          );
        });
      }
      SendMessageAndWaitForResponse(e, t, r) {
        let n = Object.assign({}, t);
        return (
          null == n.returnAddress && (n.returnAddress = this.m_sMailboxName),
          (n.message_id = this.m_nNextMessageNumber++),
          this.SendMessage(e, n),
          this.WaitForMessage(r, n.message_id)
        );
      }
      SendResponse(e, t) {
        if (!e.returnAddress)
          throw new Error("Missing return address on message");
        let r = Object.assign(Object.assign({}, t), {
          message_id: e.message_id,
        });
        (r.message_id = e.message_id), this.SendMessage(e.returnAddress, r);
      }
    }
    function a() {
      return {
        translation: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      };
    }
    function l(e, t) {
      return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
    }
    function c(e, t, r) {
      return {
        x: t.x + e * (r.x - t.x),
        y: t.y + e * (r.y - t.y),
        z: t.z + e * (r.z - t.z),
      };
    }
    function d(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function u(e, t) {
      return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
    }
    function h(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function p(e, t) {
      return { x: e.x * t, y: e.y * t, z: e.z * t };
    }
    function m(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function g(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
    }
    function b(e) {
      if (void 0 === e) return;
      let t = 0.5 * e.x,
        r = 0.5 * e.y,
        n = 0.5 * e.z,
        i = Math.cos(t),
        s = Math.cos(r),
        o = Math.cos(n),
        a = Math.sin(t),
        l = Math.sin(r),
        c = Math.sin(n);
      return {
        w: i * s * o + a * l * c,
        x: a * s * o + i * l * c,
        y: i * l * o - a * s * c,
        z: i * s * c - a * l * o,
      };
    }
    function v(e) {
      let t = e[0][0] + e[1][1] + e[2][2];
      if (t > 0) {
        let r = 2 * Math.sqrt(t + 1);
        return {
          w: 0.25 * r,
          x: (e[1][2] - e[2][1]) / r,
          y: (e[2][0] - e[0][2]) / r,
          z: (e[0][1] - e[1][0]) / r,
        };
      }
      if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
        let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
        return {
          w: (e[1][2] - e[2][1]) / t,
          x: 0.25 * t,
          y: (e[1][0] + e[0][1]) / t,
          z: (e[2][2] + e[0][2]) / t,
        };
      }
      if (e[1][1] > e[2][2]) {
        let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
        return {
          w: (e[2][0] - e[0][2]) / t,
          x: (e[1][0] + e[0][1]) / t,
          y: 0.25 * t,
          z: (e[2][1] + e[1][2]) / t,
        };
      }
      {
        let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
        return {
          w: (e[0][1] - e[1][0]) / t,
          x: (e[2][0] + e[0][2]) / t,
          y: (e[2][1] + e[1][2]) / t,
          z: 0.25 * t,
        };
      }
    }
    function _(e, t) {
      let r = 2 * (e.y * t.z - e.z * t.y),
        n = 2 * (e.z * t.x - e.x * t.z),
        i = 2 * (e.x * t.y - e.y * t.x);
      return {
        x: t.x + e.w * r + e.y * i - e.z * n,
        y: t.y + e.w * n + e.z * r - e.x * i,
        z: t.z + e.w * i + e.x * n - e.y * r,
      };
    }
    function y(e, t, r) {
      return [
        [e.x, e.y, e.z],
        [t.x, t.y, t.z],
        [r.x, r.y, r.z],
      ];
    }
    function f(e) {
      return _(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function S(e) {
      let t = g(e);
      return { x: e.x / t, y: e.y / t, z: e.z / t };
    }
    function O(e, t) {
      return {
        x: e.y * t.z - e.z * t.y,
        y: e.z * t.x - e.x * t.z,
        z: e.x * t.y - e.y * t.x,
      };
    }
    function k(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    (o.s_nNextMailboxNumber = 1),
      Object(n.b)([i.bind], o.prototype, "OpenWebSocketToHost", null),
      Object(n.b)([i.bind], o.prototype, "OnWebSocketOpen", null),
      Object(n.b)([i.bind], o.prototype, "OnWebSocketClose", null),
      Object(n.b)([i.bind], o.prototype, "WebSocketSend", null),
      Object(n.b)([i.bind], o.prototype, "OnWebSocketMessage", null);
    class C {
      constructor() {
        (this.m_mailbox = new o()), this.m_mailbox.Init("sgtransformcache");
      }
      static getInstance() {
        return C.instance || (C.instance = new C()), C.instance;
      }
      requestSGTransform(e, t = 0) {
        return new Promise((r, i) =>
          Object(n.a)(this, void 0, void 0, function* () {
            let n = { type: "transform_request", id: e, flPushDistance: t },
              s = yield this.m_mailbox.SendMessageAndWaitForResponse(
                "vrcompositor_systemlayer",
                n,
                "transform_response"
              );
            s.id == e && s.transform
              ? r(s.transform)
              : i("requestSGTransform failed");
          })
        );
      }
    }
    var w = r("q1tI");
    function M(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) {
        if ("undefined" == r) return;
        let e = [];
        for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
        if (e.length > 0) return e;
      }
    }
    function D(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return parseFloat(r);
    }
    function R(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return parseInt(r);
    }
    function T(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0)
        return (
          "true" == r ||
          (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
        );
    }
    function E(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return r;
    }
    function I(e, t) {
      return W(E(e, t));
    }
    function P(e, t) {
      let r = { type: e, properties: {} };
      return (
        t.id && (r.properties.id = W(t.id)),
        (r.properties.sgid = R(t, "sgid")),
        r
      );
    }
    function x(e, t) {
      let [r, n] = (function (e, t) {
          let r = t.buildNode;
          if (r) return r(e, t);
          let n = Object.assign({}, e),
            i = null;
          switch (t.nodeName.toUpperCase()) {
            case "VSG-TRANSFORM":
              (i = P("transform", t)),
                (i.properties.translation = M(t, "translation")),
                (i.properties.rotation = M(t, "rotation")),
                (i.properties.scale = M(t, "scale")),
                (i.properties["curvature-pitch"] = D(t, "curvature-pitch")),
                (i.properties["parent-path"] = E(t, "parent-path")),
                (i.properties["parent-origin"] = E(t, "parent-origin")),
                (i.properties["parent-id"] = I(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (i = P("trackingstatevisibility", t)),
                (i.properties["visible-0dof"] = T(t, "visible-0dof")),
                (i.properties["visible-3dof"] = T(t, "visible-3dof")),
                (i.properties["visible-6dof"] = T(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (i = P("elasticheadtransform", t)),
                (i.properties["start-angle-threshold"] = D(
                  t,
                  "start-angle-threshold"
                )),
                (i.properties["stop-angle-threshold"] = D(
                  t,
                  "stop-angle-threshold"
                )),
                (i.properties["ease-in-time"] = D(t, "ease-in-time")),
                (i.properties["ease-in-power"] = D(t, "ease-in-power")),
                (i.properties["ease-out-angle-threshold"] = D(
                  t,
                  "ease-out-angle-threshold"
                )),
                (i.properties["ease-out-power"] = D(t, "ease-out-power")),
                (i.properties["min-angular-velocity"] = D(
                  t,
                  "min-angular-velocity"
                )),
                (i.properties["max-angular-velocity"] = D(
                  t,
                  "max-angular-velocity"
                )),
                (i.properties["lock-to-horizon"] = T(t, "lock-to-horizon")),
                (i.properties["translation-behavior"] = R(
                  t,
                  "translation-behavior"
                ));
              break;
            case "VSG-LINE":
              (i = P("line", t)),
                (i.properties["target-id"] = I(t, "target-id")),
                (i.properties.thickness = D(t, "thickness")),
                (i.properties["start-buffer"] = D(t, "start-buffer")),
                (i.properties["end-buffer"] = D(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (i = P("line-constrained-transform", t)),
                (i.properties["target-id"] = I(t, "target-id")),
                (i.properties["source-id"] = I(t, "source-id")),
                (i.properties["source-distance"] = D(t, "source-distance")),
                (i.properties["target-limit"] = D(t, "target-limit"));
              break;
            case "VSG-CALLOUT-TRANSFORM":
              (i = P("callout-transform", t)),
                (i.properties.offset = M(t, "offset"));
              break;
            case "VSG-HEAD-FACING-TRANSFORM":
              i = P("head-facing-transform", t);
              break;
            case "VSG-PIN-TO-VIEW-TRANSFORM":
              (i = P("pin-to-view-transform", t)),
                (i.properties["offscreen-z-depth"] = D(t, "offscreen-z-depth")),
                (i.properties["off-axis-limit"] = D(t, "off-axis-limit")),
                (i.properties["transition-limit"] = D(t, "transition-limit"));
          }
          return [n, i];
        })(e, t),
        i = [];
      for (let e = 0; e < t.children.length; e++) {
        let n = t.children.item(e);
        if (n.children) {
          let e = x(r, n);
          e && (i = i.concat(e));
        }
      }
      return r.bShouldAbort
        ? null
        : n
        ? (i.length > 0 && (n.children = i), [n])
        : i.length > 0
        ? 1 == i.length
          ? i
          : [{ children: i }]
        : null;
    }
    let V,
      L,
      B,
      N,
      H = [],
      A = null,
      F = null,
      j = null;
    function U(e, t) {
      return e + "::" + t;
    }
    function W(e) {
      return e
        ? (function (e) {
            return e && e.includes("::");
          })(e)
          ? e
          : U(z(), e)
        : null;
    }
    function z() {
      var e, t;
      return null !=
        (t =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.ThisOverlayKey())
        ? t
        : V;
    }
    function G() {
      N = !0;
    }
    function K(e) {
      e != j && ((j = e), q());
    }
    function q() {
      A ||
        (A = window.setTimeout(
          () =>
            Object(n.a)(this, void 0, void 0, function* () {
              let e = document.body;
              L && (e = L);
              let t = {
                type: "root",
                rootproperties: {
                  relatchDashboardTransform: N,
                  sceneCompositeMult: j,
                },
                children: x({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              F ||
                (console.log("Initializing sg_mailbox"),
                (F = new o()),
                yield F.Init("sg_mailbox", B));
              let r = {
                type: "update_scene_graph",
                owning_overlay_key: z(),
                scene_graph: t,
                retired_sgids: H,
              };
              F.SendMessage("vrcompositor_systemlayer", r),
                (A = null),
                (H = []),
                (N = !1);
            }),
          0
        ));
    }
    function Q(e, t) {
      return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
    }
    function X(e, t) {
      return e
        ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
        : t;
    }
    function Y(e, t) {
      return e
        ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
        : t;
    }
    function J(e) {
      if (e) return [e.x, e.y];
    }
    function Z(e) {
      var t;
      return null ===
        (t = (function (e) {
          if (e) return [e.x, e.y, e.z];
        })(e)) || void 0 === t
        ? void 0
        : t.join(" ");
    }
    class $ extends w.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = w.createRef()),
          (this.m_buildNodeOverride = null),
          (this.m_SGID = $.s_NextSGID),
          ($.s_NextSGID = ($.s_NextSGID + 1) % 4294967296);
      }
      setBuildNodeOverride(e) {
        this.m_buildNodeOverride = e;
      }
      getSGID() {
        return this.m_SGID;
      }
      getNodeType() {
        return "base";
      }
      createSgNode(e) {
        return P(this.getNodeType(), e);
      }
      getCurrentRootElement() {
        return this.m_domRef.current;
      }
      componentDidMount() {
        this.m_buildNodeOverride &&
          (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
          q();
      }
      componentDidUpdate() {
        q();
      }
      componentWillUnmount() {
        var e;
        (e = this.m_SGID),
          H.push(e),
          q(),
          this.m_domRef.current &&
            this.m_buildNodeOverride &&
            delete this.m_domRef.current.buildNode;
      }
      render() {
        return w.cloneElement(this.internalRender(), {
          id: this.props.id,
          "vsg-type": this.getNodeType(),
          sgid: this.m_SGID,
          ref: this.m_domRef,
        });
      }
      internalRender() {
        return this.m_buildNodeOverride
          ? w.createElement("vsg-node", null, this.props.children)
          : null;
      }
    }
    $.s_NextSGID = 1;
    class ee extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "mountable";
      }
      buildNode(e, t) {
        return [e, this.createSgNode(t)];
      }
    }
    Object(n.b)([s.a], ee.prototype, "buildNode", null);
    class te extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "mountedscenegraph";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        return (
          (r.properties.mountable_id = W(this.props.mountedId)),
          this.props.fDashboardScale &&
            (r.properties.dashboard_scale = this.props.fDashboardScale),
          [e, r]
        );
      }
    }
    Object(n.b)([s.a], te.prototype, "buildNode", null);
    class re extends $ {
      constructor(e) {
        var t;
        if (
          (super(e),
          void 0 !== this.props.iconUri && void 0 !== this.props.iconOverlayKey)
        )
          throw new Error(
            "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props."
          );
        super.setBuildNodeOverride(this.buildNode),
          (this.m_sMountableUnqualifiedID =
            null != (t = e.mountableUnqualifiedID)
              ? t
              : this.getSGID() + "_mountable");
      }
      getNodeType() {
        return "dashboardtab";
      }
      buildNode(e, t) {
        var r;
        const n = this.createSgNode(t);
        return (
          (n.properties.tab_name = null != (r = this.props.tabName) ? r : ""),
          (n.properties.mountable_id = W(this.m_sMountableUnqualifiedID)),
          (n.properties.icon_uri = this.props.iconUri),
          (n.properties.icon_overlay_key = this.props.iconOverlayKey),
          (n.properties.summon_overlay_key = this.props.summonOverlayKey),
          [e, n]
        );
      }
      internalRender() {
        return w.createElement(
          "vsg-node",
          { id: this.props.id },
          w.createElement(
            ee,
            { id: this.m_sMountableUnqualifiedID },
            this.props.children
          )
        );
      }
    }
    Object(n.b)([s.a], re.prototype, "buildNode", null);
    class ne extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "tint";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        if (this.props.color)
          if ("string" == typeof this.props.color)
            r.properties.color = this.props.color;
          else {
            let e = Y(this.props.color, { r: 1, g: 1, b: 1 });
            r.properties.color = [e.r, e.g, e.b];
          }
        else r.properties.color = [1, 1, 1];
        return [e, r];
      }
    }
    Object(n.b)([s.a], ne.prototype, "buildNode", null);
    class ie extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "opacity";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        return (r.properties.opacity = this.props.value), [e, r];
      }
    }
    var se, oe, ae, le, ce, de, ue, he, pe, me, ge;
    Object(n.b)([s.a], ie.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(se || (se = {}));
    class be extends $ {
      constructor(e) {
        super(e);
        if (
          (void 0 === e.parent_path ? 0 : 1) +
            (void 0 === e.parent_origin ? 0 : 1) +
            (void 0 === e.parent_id ? 0 : 1) >
          1
        )
          throw new Error(
            "Transform cannot have more than one parent_ property set."
          );
      }
      internalRender() {
        let e, t, r;
        this.props.transform
          ? ((e = this.props.transform.translation),
            (t = this.props.transform.rotation),
            (r = this.props.transform.scale))
          : ((e = X(this.props.translation, { x: 0, y: 0, z: 0 })),
            (t = b(
              p(X(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180)
            )),
            (r =
              "number" == typeof this.props.scale
                ? {
                    x: this.props.scale,
                    y: this.props.scale,
                    z: this.props.scale,
                  }
                : X(this.props.scale, { x: 1, y: 1, z: 1 })));
        let n = Z(e),
          i = (function (e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          })(t),
          s = Z(r);
        return w.createElement(
          "vsg-transform",
          {
            translation: n,
            rotation: i,
            scale: s,
            "curvature-pitch": this.props.curvature_pitch,
            "parent-path": this.props.parent_path,
            "parent-origin": se[this.props.parent_origin],
            "parent-id": this.props.parent_id,
          },
          this.props.children
        );
      }
    }
    class ve extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return w.createElement(
          "vsg-tracking-state-visibility",
          {
            "visible-0dof": this.props.visibleIn0DOF,
            "visible-3dof": this.props.visibleIn3DOF,
            "visible-6dof": this.props.visibleIn6DOF,
          },
          this.props.children
        );
      }
    }
    function _e(e) {
      if (e) return [e.u, e.v];
    }
    function ye(e) {
      switch (e) {
        case oe.TopLeft:
          return { x: -1, y: 1 };
        case oe.TopCenter:
          return { x: 0, y: 1 };
        case oe.TopRight:
          return { x: 1, y: 1 };
        case oe.CenterLeft:
          return { x: -1, y: 0 };
        case oe.Center:
          return { x: 0, y: 0 };
        case oe.CenterRight:
          return { x: 1, y: 0 };
        case oe.BottomLeft:
          return { x: -1, y: -1 };
        case oe.BottomCenter:
          return { x: 0, y: -1 };
        case oe.BottomRight:
          return { x: 1, y: -1 };
      }
    }
    !(function (e) {
      (e[(e.TopLeft = 0)] = "TopLeft"),
        (e[(e.TopCenter = 1)] = "TopCenter"),
        (e[(e.TopRight = 2)] = "TopRight"),
        (e[(e.CenterLeft = 3)] = "CenterLeft"),
        (e[(e.Center = 4)] = "Center"),
        (e[(e.CenterRight = 5)] = "CenterRight"),
        (e[(e.BottomLeft = 6)] = "BottomLeft"),
        (e[(e.BottomCenter = 7)] = "BottomCenter"),
        (e[(e.BottomRight = 8)] = "BottomRight");
    })(oe || (oe = {})),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
      })(ae || (ae = {})),
      (function (e) {
        (e[(e.Mono = 0)] = "Mono"),
          (e[(e.Parallel = 1)] = "Parallel"),
          (e[(e.Crossed = 2)] = "Crossed"),
          (e[(e.Panorama = 3)] = "Panorama"),
          (e[(e.StackedPanorama = 4)] = "StackedPanorama");
      })(le || (le = {})),
      (function (e) {
        (e[(e.Visible = 0)] = "Visible"),
          (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
          (e[(e.Hidden = 2)] = "Hidden");
      })(ce || (ce = {}));
    class fe extends $ {
      constructor(e) {
        super(e),
          (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
          (this.m_nEmbeddedIndex = null),
          (this.m_resizeObserver = null),
          (this.m_UVsMin = void 0),
          (this.m_UVsMax = void 0),
          (this.m_bOverdragBlocking = !1),
          (this.m_overdragBlockingElements = []);
        const t =
          void 0 !== this.props.rendermodel_component_device_index ||
          void 0 !== this.props.rendermodel_component_name;
        if (
          t &&
          (void 0 === this.props.rendermodel_component_device_index ||
            void 0 === this.props.rendermodel_component_name)
        )
          throw new Error(
            "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture."
          );
        if (
          void 0 === this.props.width &&
          void 0 === this.props.height &&
          void 0 === this.props.target_dpi_panel_id &&
          !t
        )
          throw new Error(
            "Panel requires either an explicit width, an explicit height, both an explicit width and height, a target_panel_dpi, or be a rendermodel panel."
          );
        if (
          (void 0 !== this.props.width || void 0 !== this.props.height) &&
          void 0 !== this.props.target_dpi_panel_id
        )
          throw new Error(
            "Panel cannot have both an explicit width/height and target_panel_dpi."
          );
        super.setBuildNodeOverride(this.buildNode);
      }
      isExternal() {
        return !!this.props.overlay_key;
      }
      getEmbeddedIndex() {
        return this.m_nEmbeddedIndex;
      }
      componentWillReceiveProps_UNSAFE() {
        fe.s_bPanelsAreDirty = !0;
      }
      componentDidMount() {
        super.componentDidMount(),
          (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
          this.m_resizeObserver.observe(this.getCurrentRootElement()),
          (this.m_nEmbeddedIndex = Se.Current().addEmbeddedPanelUVs(this)),
          (fe.s_bPanelsAreDirty = !0),
          this.getCurrentRootElement().addEventListener(
            "mousedown",
            this.onPanelMouseDown
          ),
          this.forceUpdate();
      }
      onResizeObserved(e, t) {
        Se.Current().forceLayoutUpdate();
      }
      componentWillUnmount() {
        this.m_resizeObserver &&
          (this.m_resizeObserver.disconnect(), (this.m_resizeObserver = null)),
          this.stopOverDragBlocking(),
          this.getCurrentRootElement().removeEventListener(
            "mousedown",
            this.onPanelMouseDown
          ),
          (fe.s_bPanelsAreDirty = !0),
          Se.Current().removeEmbeddedPanelUVs(this),
          super.componentWillUnmount();
      }
      onPanelMouseDown() {
        this.startOverDragBlocking();
      }
      startOverDragBlocking() {
        if (this.m_bOverdragBlocking) return;
        const e = document.body.getBoundingClientRect(),
          t = this.getCurrentRootElement().getBoundingClientRect();
        this.createOverdragBlockingElement(0, 0, e.width, t.y),
          this.createOverdragBlockingElement(
            0,
            t.y + t.height,
            e.width,
            e.height - t.height - t.y
          ),
          this.createOverdragBlockingElement(0, t.y, t.x, t.height),
          this.createOverdragBlockingElement(
            t.x + t.width,
            t.y,
            e.width - t.width - t.x,
            t.height
          ),
          window.document.addEventListener("mouseup", this.onWindowMouseUp),
          (this.m_bOverdragBlocking = !0);
      }
      stopOverDragBlocking() {
        this.m_bOverdragBlocking &&
          (this.m_overdragBlockingElements.forEach((e) => {
            document.body.removeChild(e);
          }),
          (this.m_overdragBlockingElements = []),
          window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          (this.m_bOverdragBlocking = !1));
      }
      createOverdragBlockingElement(e, t, r, n) {
        let i = document.createElement("div");
        (i.style.position = "absolute"),
          (i.style.top = t + "px"),
          (i.style.left = e + "px"),
          (i.style.width = r + "px"),
          (i.style.height = n + "px"),
          (i.style.zIndex = "90019001"),
          this.m_overdragBlockingElements.push(i),
          document.body.appendChild(i);
      }
      onWindowMouseUp(e) {
        this.stopOverDragBlocking();
      }
      getNodeType() {
        return "panel";
      }
      get visibility() {
        var e;
        return null != (e = this.props.visibility) ? e : ce.Visible;
      }
      buildNode(e, t) {
        var r, n, i, s, o;
        if (this.visibility != ce.Visible) return [e, null];
        let a = Object.assign({}, e),
          l = this.createSgNode(t),
          c = { x: 0, y: 0 };
        c =
          "object" == typeof this.props.origin
            ? Q(this.props.origin, { x: 0, y: 0 })
            : ye(this.props.origin);
        const d = this.props.overlay_key,
          u = z();
        return (
          d && d.length > 0
            ? (l.properties.key = d)
            : u
            ? (l.properties.key = u)
            : (l.properties.overlay_handle = (function () {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VROverlay.ThisOverlayHandle();
              })()),
          (l.properties.uv_min = null != (r = _e(this.m_UVsMin)) ? r : void 0),
          (l.properties.uv_max = null != (n = _e(this.m_UVsMax)) ? n : void 0),
          (l.properties.width = null != (i = this.props.width) ? i : void 0),
          (l.properties.height = null != (s = this.props.height) ? s : void 0),
          (l.properties["min-width"] =
            null != (o = this.props.min_width) ? o : void 0),
          (l.properties["target-width-anchor-id"] = W(
            this.props.target_width_anchor_id
          )),
          (l.properties["target-dpi-panel-id"] = W(
            this.props.target_dpi_panel_id
          )),
          (l.properties["target-dpi-multiplier"] =
            this.props.target_dpi_multiplier),
          (l.properties.curvature = this.props.curvature),
          (l.properties["curvature-origin-id"] = W(
            this.props.curvature_origin_id
          )),
          (l.properties.interactive = this.props.interactive),
          (l.properties.scrollable = this.props.scrollable),
          (l.properties.modal = this.props.modal),
          (l.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
          (l.properties.origin = J(c)),
          (l.properties.debug_name = this.props.debug_name),
          (l.properties.sampler = this.props.sampler),
          (l.properties.reflect = this.props.reflect),
          (l.properties.stereoscopy = this.props.stereoscopy),
          (l.properties.rendermodel_component_device_index =
            this.props.rendermodel_component_device_index),
          (l.properties.rendermodel_component_name =
            this.props.rendermodel_component_name),
          (l.properties["texture-id"] = W(this.props.texture_id)),
          (l.properties["sort-order"] = this.props.sort_order),
          (l.properties["sort-depth-bias"] = this.props.sort_depth_bias),
          (a.currentPanel = this),
          [a, l]
        );
      }
      scaleLocalUVToGlobal(e) {
        const t = this.m_UVsMax.u - this.m_UVsMin.u,
          r = this.m_UVsMax.v - this.m_UVsMin.v;
        return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + r * e.v };
      }
      updateLayoutValues() {
        if (this.props.overlay_key)
          return (
            (this.m_UVsMin = this.props.uv_min),
            void (this.m_UVsMax = this.props.uv_max)
          );
        this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
        let e = this.getCurrentRootElement().ownerDocument.defaultView;
        (this.m_UVsMin = {
          u: this.m_Rect.x / e.innerWidth,
          v: this.m_Rect.y / e.innerHeight,
        }),
          (this.m_UVsMax = {
            u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
            v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
          });
      }
      internalRender() {
        return w.createElement(
          "vsg-node",
          { style: { display: this.visibility == ce.Hidden ? "none" : null } },
          this.props.children
        );
      }
    }
    (fe.s_bPanelsAreDirty = !1),
      Object(n.b)([s.a], fe.prototype, "onResizeObserved", null),
      Object(n.b)([s.a], fe.prototype, "onPanelMouseDown", null),
      Object(n.b)([s.a], fe.prototype, "onWindowMouseUp", null),
      Object(n.b)([s.a], fe.prototype, "buildNode", null);
    class Se extends w.Component {
      constructor(e) {
        super(e),
          (this.m_DomRef = null),
          (this.m_scalingDomRef = null),
          (this.m_CanvasRef = null),
          (this.m_DebugPointerRef = null),
          (this.m_Observer = null),
          (this.m_nEmbeddedDataWidth = 0),
          (this.m_nPixelX = 0),
          (this.m_CanvasContext = null),
          (this.m_Pixels = null),
          (this.m_mapPanels = new Map()),
          (this.m_rAvailableEmbeddedIndicesQueue = []),
          (this.m_rEmbeddedIndicesToClear = []),
          (this.m_nDirtyXMin = -1),
          (this.m_nDirtyXMax = -1),
          (this.m_fCurrentScale = 1),
          (Se.s_Current = this),
          (this.state = {
            bFontsLoaded: !1,
            nForcedUpdateNumber: 0,
            bShowDebugPointer: !1,
          }),
          (this.m_DomRef = w.createRef()),
          (this.m_scalingDomRef = w.createRef()),
          (this.m_CanvasRef = w.createRef()),
          (this.m_DebugPointerRef = w.createRef());
      }
      static get IsSceneGraphApp() {
        return null !== Se.Current();
      }
      static Current() {
        return Se.s_Current;
      }
      toggleDebugPointer() {
        this.setState({ bShowDebugPointer: !this.state.bShowDebugPointer });
      }
      onMouseMove(e) {
        this.state.bShowDebugPointer &&
          this.m_DebugPointerRef.current &&
          (this.m_DebugPointerRef.current.style.transform =
            "translateX( " +
            e.clientX +
            "px ) translateY( " +
            e.clientY +
            "px )");
      }
      forceLayoutUpdate() {
        (fe.s_bPanelsAreDirty = !0),
          this.setState({
            nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
          });
      }
      componentDidMount() {
        let e = this.m_DomRef.current.ownerDocument,
          t = e.defaultView;
        e.body.classList.add("SGApp"),
          document.documentElement.classList.add("VROverlay"),
          (this.m_nEmbeddedDataWidth = t.innerWidth);
        let r = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
        for (let e = 0; e < r; e++)
          this.m_rAvailableEmbeddedIndicesQueue.push(e);
        var n, i, s;
        e.addEventListener("mousemove", this.onMouseMove),
          (this.m_Observer = new MutationObserver(this.onMutation)),
          this.m_Observer.observe(this.m_DomRef.current, {
            attributes: !0,
            attributeFilter: ["sg-forced-update-number", "overlay-key"],
            childList: !0,
            subtree: !0,
          }),
          this.createEmbeddedData(),
          t.addEventListener("load", this.forceLayoutUpdate),
          e.fonts.ready.then(() => this.setState({ bFontsLoaded: !0 })),
          (t.forceLayoutUpdate = this.forceLayoutUpdate),
          (t.toggleDebugPointer = this.toggleDebugPointer),
          (this.props.owning_overlay_key || this.props.web_secret) &&
            ((n = this.props.owning_overlay_key),
            (i = this.m_DomRef.current),
            (s = this.props.web_secret),
            (V = n),
            (L = i),
            (B = s),
            console.log("Setting owning overlay key to " + n));
      }
      componentWillUnmount() {
        let e = this.m_DomRef.current.ownerDocument;
        e.body.classList.remove("SGApp"),
          document.documentElement.classList.remove("VROverlay"),
          this.m_Observer && this.m_Observer.disconnect(),
          e.removeEventListener("mousemove", this.onMouseMove);
      }
      render() {
        let e = [];
        return (
          this.state.bShowDebugPointer && e.push("ShowDebugPointer"),
          w.createElement(
            "vsg-app",
            {
              class: e.join(" "),
              ref: this.m_DomRef,
              "sg-forced-update-number": this.state.nForcedUpdateNumber,
            },
            w.createElement("div", {
              className: "DebugPointer",
              ref: this.m_DebugPointerRef,
            }),
            w.createElement("canvas", {
              ref: this.m_CanvasRef,
              className: "EmbeddedData",
              height: Se.k_EmbeddedDataRows,
            }),
            w.createElement(
              "div",
              { className: "AppSceneGraph", ref: this.m_scalingDomRef },
              this.state.bFontsLoaded && this.props.children
            )
          )
        );
      }
      addEmbeddedPanelUVs(e) {
        return 0 === this.m_rAvailableEmbeddedIndicesQueue.length
          ? null
          : (this.m_mapPanels.set(e.getSGID(), e),
            this.m_rAvailableEmbeddedIndicesQueue.shift());
      }
      removeEmbeddedPanelUVs(e) {
        this.m_mapPanels.has(e.getSGID()) &&
          (this.m_mapPanels.delete(e.getSGID()),
          this.m_rAvailableEmbeddedIndicesQueue.push(e.getEmbeddedIndex()),
          this.m_rEmbeddedIndicesToClear.push(e.getEmbeddedIndex()));
      }
      onMutation(e, t) {
        this.updateAllPanelBounds();
      }
      createEmbeddedData() {
        (this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
          (this.m_CanvasContext = this.m_CanvasRef.current.getContext("2d")),
          (this.m_CanvasContext.globalCompositeOperation = "copy"),
          (this.m_CanvasContext.imageSmoothingEnabled = !1),
          null === this.m_Pixels &&
            (this.m_Pixels = this.m_CanvasContext.createImageData(
              this.m_nEmbeddedDataWidth,
              Se.k_EmbeddedDataRows
            )),
          this.updateAllPanelBounds();
      }
      updateAllPanelBounds() {
        let e = this.m_DomRef.current.ownerDocument.defaultView,
          t = this.m_scalingDomRef.current.getBoundingClientRect(),
          r = t.width / this.m_fCurrentScale,
          n = t.height / this.m_fCurrentScale,
          i = { x: e.innerWidth / r, y: e.innerHeight / n },
          s = Math.min(i.x, i.y, 1);
        s != this.m_fCurrentScale &&
          (1 != s
            ? this.m_scalingDomRef.current.setAttribute(
                "style",
                "transform: scale(" + s + "); transform-origin: top left"
              )
            : this.m_scalingDomRef.current.removeAttribute("style"),
          (this.m_fCurrentScale = s),
          (fe.s_bPanelsAreDirty = !0)),
          fe.s_bPanelsAreDirty &&
            (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
            q(),
            (fe.s_bPanelsAreDirty = !1),
            this.updateEmbeddedData());
      }
      updateEmbeddedData() {
        if (!this.m_CanvasRef) return;
        (this.m_nPixelX = 0),
          this.setPixel(
            0,
            "V".charCodeAt(0),
            "S".charCodeAt(0),
            "G".charCodeAt(0)
          ),
          this.m_rEmbeddedIndicesToClear.forEach((e) => {
            let t = 1 + 3 * e;
            for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
          }),
          (this.m_rEmbeddedIndicesToClear = []),
          this.m_mapPanels.forEach((e, t) => {
            let r = e.m_Rect.x,
              n = e.m_Rect.x + e.m_Rect.width,
              i = e.m_Rect.y,
              s = e.m_Rect.y + e.m_Rect.height,
              o = 1 + 3 * e.getEmbeddedIndex();
            if (e.isExternal() || r >= n || i >= s)
              for (let e = 0; e < 3; e++) this.setPixel(o + 1, 0, 0, 0, 0);
            else
              this.setPixel(o, (65280 & r) >> 8, 255 & r, 0),
                this.setPixel(o + 1, (65280 & n) >> 8, 255 & n, 255 & i),
                this.setPixel(
                  o + 2,
                  (65280 & s) >> 8,
                  255 & s,
                  (65280 & i) >> 8
                );
          });
        let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
        this.m_CanvasContext.putImageData(
          this.m_Pixels,
          0,
          0,
          this.m_nDirtyXMin,
          0,
          e,
          this.m_Pixels.height
        ),
          (this.m_nDirtyXMin = -1),
          (this.m_nDirtyXMax = -1);
      }
      setPixel(e, t, r, n, i = 255) {
        (this.m_Pixels.data[4 * e + 0] = t),
          (this.m_Pixels.data[4 * e + 1] = r),
          (this.m_Pixels.data[4 * e + 2] = n),
          (this.m_Pixels.data[4 * e + 3] = i),
          (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
            (this.m_nDirtyXMin = e),
          (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
            (this.m_nDirtyXMax = e);
      }
    }
    (Se.s_Current = null),
      (Se.k_EmbeddedDataRows = 1),
      Object(n.b)([i.bind], Se.prototype, "toggleDebugPointer", null),
      Object(n.b)([i.bind], Se.prototype, "onMouseMove", null),
      Object(n.b)([i.bind], Se.prototype, "forceLayoutUpdate", null),
      Object(n.b)([i.bind], Se.prototype, "onMutation", null);
    Object(n.b)(
      [s.a],
      class extends $ {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.id = this.props.id),
            (r.properties.source = this.props.source),
            [e, r]
          );
        }
      }.prototype,
      "buildNode",
      null
    ),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(de || (de = {}));
    class Oe extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "rendermodel";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        if (
          ((r.properties.source = this.props.source),
          (r.properties["texture-id"] = W(this.props["texture-id"])),
          this.props.fresnel)
        ) {
          let e = this.props.fresnel;
          if ("string" == typeof e.color) r.properties.color = e.color;
          else {
            let t = Y(e.color, { r: 0, g: 0, b: 0 });
            r.properties.color = [t.r, t.g, t.b];
          }
          (r.properties.opacity = e.opacity ? e.opacity : 1),
            (r.properties.strength = e.strength ? e.strength : 1);
        }
        return (
          (r.properties.wireframe = this.props.wireframe),
          (r.properties.solid = this.props.solid),
          (r.properties.culling = this.props.culling),
          (r.properties["no-depth-write"] = this.props["no-depth-write"]),
          (r.properties["no-depth-test"] = this.props["no-depth-test"]),
          [e, r]
        );
      }
    }
    Object(n.b)([s.a], Oe.prototype, "buildNode", null);
    class ke extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "ltcquad";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        if (
          ((r.properties.width = this.props.width),
          (r.properties.height = this.props.height),
          (r.properties["near-z"] = this.props["near-z"]),
          (r.properties["far-z"] = this.props["far-z"]),
          (r.properties.debug = this.props.debug),
          this.props.diffuse)
        ) {
          let e = this.props.diffuse;
          (r.properties["diffuse-resolution"] = e.resolution),
            (r.properties["diffuse-size"] = e.size);
        }
        if (this.props.specular) {
          let e = this.props.specular;
          if ("string" == typeof e.color) r.properties.color = e.color;
          else {
            let t = Y(e.color, { r: 0, g: 0, b: 0 });
            r.properties.color = [t.r, t.g, t.b];
          }
        }
        return [e, r];
      }
    }
    Object(n.b)([s.a], ke.prototype, "buildNode", null);
    class Ce extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return w.createElement("vsg-line", {
          "target-id": this.props.target_id,
          thickness: this.props.thickness,
          "start-buffer": this.props.start_buffer,
          "end-buffer": this.props.end_buffer,
        });
      }
    }
    class we extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return w.createElement(
          "vsg-pin-to-view-transform",
          {
            "offscreen-z-depth": this.props.fOffscreenZDepth,
            "off-axis-limit": this.props.fOffAxisLimit,
            "transition-limit": this.props.fTransitionLimit,
          },
          this.props.children
        );
      }
    }
    class Me extends $ {
      constructor(e) {
        super(e),
          (this.m_latchedPosition = null),
          super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "panel-anchor";
      }
      relatch() {
        this.m_latchedPosition = null;
      }
      buildNode(e, t) {
        if (!e.currentPanel)
          return [
            Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
            null,
          ];
        let r = null;
        "object" == typeof this.props.location
          ? (r = Q(this.props.location, { x: 0, y: 0 }))
          : "number" == typeof this.props.location &&
            (r = ye(this.props.location));
        let n = this.createSgNode(t);
        if (this.props.latched && null !== this.m_latchedPosition)
          (n.properties["anchor-u"] = this.m_latchedPosition.u),
            (n.properties["anchor-v"] = this.m_latchedPosition.v);
        else if (r) {
          const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
            i = e.currentPanel.props.overlay_key
              ? t
              : e.currentPanel.scaleLocalUVToGlobal(t);
          (n.properties["anchor-u"] = i.u), (n.properties["anchor-v"] = i.v);
        } else {
          const r = t.ownerDocument,
            i = t.getBoundingClientRect(),
            s = i.left + i.width / 2,
            o = i.top + i.height / 2,
            a = e.currentPanel.m_Rect;
          if (s < a.x || s > a.x + a.width || o < a.y || o > a.y + a.height)
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          const l = r.defaultView.innerWidth,
            c = r.defaultView.innerHeight;
          if (!(c > 0 && l > 0))
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          (n.properties["anchor-u"] = s / l),
            (n.properties["anchor-v"] = o / c);
        }
        return (
          (this.m_latchedPosition = {
            u: n.properties["anchor-u"],
            v: n.properties["anchor-v"],
          }),
          [e, n]
        );
      }
    }
    Object(n.b)([s.a], Me.prototype, "buildNode", null);
    !(function (e) {
      (e[(e.LockedToParent = 0)] = "LockedToParent"),
        (e[(e.LockedToWorld = 1)] = "LockedToWorld");
    })(ue || (ue = {}));
    class De extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        let e = this.props.start_angle_threshold
            ? (this.props.start_angle_threshold * Math.PI) / 180
            : null,
          t = this.props.stop_angle_threshold
            ? (this.props.stop_angle_threshold * Math.PI) / 180
            : null,
          r = this.props.ease_out_angle_threshold
            ? (this.props.ease_out_angle_threshold * Math.PI) / 180
            : null,
          n = this.props.min_angular_velocity
            ? (this.props.min_angular_velocity * Math.PI) / 180
            : null,
          i = this.props.max_angular_velocity
            ? (this.props.max_angular_velocity * Math.PI) / 180
            : null;
        return w.createElement(
          "vsg-elastic-head-transform",
          {
            "start-angle-threshold": e,
            "stop-angle-threshold": t,
            "ease-in-time": this.props.ease_in_time,
            "ease-in-power": this.props.ease_in_power,
            "ease-out-angle-threshold": r,
            "ease-out-power": this.props.ease_out_power,
            "min-angular-velocity": n,
            "max-angular-velocity": i,
            "lock-to-horizon": this.props.lock_to_horizon,
            "translation-behavior": this.props.translation_behavior,
          },
          this.props.children
        );
      }
    }
    class Re extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return w.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children
        );
      }
    }
    function Te() {
      var e, t;
      return null !=
        (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment())
        ? t
        : he.Unknown;
    }
    !(function (e) {
      (e[(e.Desktop = 1)] = "Desktop"),
        (e[(e.Overlay = 2)] = "Overlay"),
        (e[(e.Unknown = 100)] = "Unknown");
    })(he || (he = {})),
      window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"),
          (e[(e.Low = 1)] = "Low"),
          (e[(e.Medium = 2)] = "Medium"),
          (e[(e.High = 3)] = "High");
      })(pe || (pe = {})),
      (function (e) {
        (e[(e.TrackingResult_Uninitialized = 1)] =
          "TrackingResult_Uninitialized"),
          (e[(e.TrackingResult_Calibrating_InProgress = 100)] =
            "TrackingResult_Calibrating_InProgress"),
          (e[(e.TrackingResult_Calibrating_OutOfRange = 101)] =
            "TrackingResult_Calibrating_OutOfRange"),
          (e[(e.TrackingResult_Running_OK = 200)] =
            "TrackingResult_Running_OK"),
          (e[(e.TrackingResult_Running_OutOfRange = 201)] =
            "TrackingResult_Running_OutOfRange"),
          (e[(e.TrackingResult_Fallback_RotationOnly = 300)] =
            "TrackingResult_Fallback_RotationOnly");
      })(me || (me = {})),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
      })(ge || (ge = {}));
    var Ee, Ie, Pe, xe, Ve, Le, Be, Ne, He, Ae, Fe, je, Ue, We, ze, Ge, Ke, qe;
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Shown = 1)] = "Shown"),
        (e[(e.Hidden = 2)] = "Hidden"),
        (e[(e.Exposed = 3)] = "Exposed"),
        (e[(e.Moved = 4)] = "Moved"),
        (e[(e.Resized = 5)] = "Resized"),
        (e[(e.SizeChanged = 6)] = "SizeChanged"),
        (e[(e.Minimized = 7)] = "Minimized"),
        (e[(e.Maximized = 8)] = "Maximized"),
        (e[(e.Restored = 9)] = "Restored"),
        (e[(e.Enter = 10)] = "Enter"),
        (e[(e.Leave = 11)] = "Leave"),
        (e[(e.FocusGained = 12)] = "FocusGained"),
        (e[(e.FocusLost = 13)] = "FocusLost"),
        (e[(e.Close = 14)] = "Close"),
        (e[(e.TakeFocus = 15)] = "TakeFocus"),
        (e[(e.HitTest = 16)] = "HitTest");
    })(Ee || (Ee = {})),
      (function (e) {
        (e[(e.Activated = 0)] = "Activated"),
          (e[(e.Deactivated = 1)] = "Deactivated");
      })(Ie || (Ie = {})),
      (function (e) {
        (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
          (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
          (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
          (e[(e.SendVRDiscreteScrollEvents = 64)] =
            "SendVRDiscreteScrollEvents"),
          (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
          (e[(e.ShowTouchPadScrollWheel = 256)] = "ShowTouchPadScrollWheel"),
          (e[(e.TransferOwnershipToInternalProcess = 512)] =
            "TransferOwnershipToInternalProcess"),
          (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
          (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
          (e[(e.Panorama = 4096)] = "Panorama"),
          (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
          (e[(e.SortWithNonSceneOverlays = 16384)] =
            "SortWithNonSceneOverlays"),
          (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
          (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
            "MakeOverlaysInteractiveIfVisible"),
          (e[(e.SendVRSmoothScrollEvents = 131072)] =
            "SendVRSmoothScrollEvents"),
          (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
          (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
          (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior"),
          (e[(e.IsPremultiplied = 2097152)] = "IsPremultiplied"),
          (e[(e.IgnoreTextureAlpha = 4194304)] = "IgnoreTextureAlpha"),
          (e[(e.EnableControlBar = 8388608)] = "EnableControlBar"),
          (e[(e.EnableControlBarKeyboard = 16777216)] =
            "EnableControlBarKeyboard"),
          (e[(e.EnableControlBarClose = 33554432)] = "EnableControlBarClose");
      })(Pe || (Pe = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
      })(xe || (xe = {})),
      (function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.TrackingSystemName_String = 1e3)] =
            "TrackingSystemName_String"),
          (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
          (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
          (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
          (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
          (e[(e.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
          (e[(e.TrackingFirmwareVersion_String = 1006)] =
            "TrackingFirmwareVersion_String"),
          (e[(e.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
          (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
            "AllWirelessDongleDescriptions_String"),
          (e[(e.ConnectedWirelessDongle_String = 1009)] =
            "ConnectedWirelessDongle_String"),
          (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
          (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
          (e[(e.DeviceBatteryPercentage_Float = 1012)] =
            "DeviceBatteryPercentage_Float"),
          (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
            "StatusDisplayTransform_Matrix34"),
          (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
            "Firmware_UpdateAvailable_Bool"),
          (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
            "Firmware_ManualUpdate_Bool"),
          (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
            "Firmware_ManualUpdateURL_String"),
          (e[(e.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
          (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
          (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
          (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
          (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
          (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
          (e[(e.BlockServerShutdown_Bool = 1023)] = "BlockServerShutdown_Bool"),
          (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
            "CanUnifyCoordinateSystemWithHmd_Bool"),
          (e[(e.ContainsProximitySensor_Bool = 1025)] =
            "ContainsProximitySensor_Bool"),
          (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
            "DeviceProvidesBatteryStatus_Bool"),
          (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
          (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
            "Firmware_ProgrammingTarget_String"),
          (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
          (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
          (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
          (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
            "Firmware_ForceUpdateRequired_Bool"),
          (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
            "ViveSystemButtonFixRequired_Bool"),
          (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
          (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
          (e[(e.RegisteredDeviceType_String = 1036)] =
            "RegisteredDeviceType_String"),
          (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
          (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
          (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
          (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
          (e[(e.CameraStreamFormat_Int32 = 1041)] = "CameraStreamFormat_Int32"),
          (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
            "AdditionalDeviceSettingsPath_String"),
          (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
          (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
            "ReportsTimeSinceVSync_Bool"),
          (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
            "SecondsFromVsyncToPhotons_Float"),
          (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
          (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
          (e[(e.CurrentUniverseId_Uint64 = 2004)] = "CurrentUniverseId_Uint64"),
          (e[(e.PreviousUniverseId_Uint64 = 2005)] =
            "PreviousUniverseId_Uint64"),
          (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
            "DisplayFirmwareVersion_Uint64"),
          (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
          (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
          (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
          (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
          (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
          (e[(e.DisplayMCImageLeft_String = 2012)] =
            "DisplayMCImageLeft_String"),
          (e[(e.DisplayMCImageRight_String = 2013)] =
            "DisplayMCImageRight_String"),
          (e[(e.DisplayGCBlackClamp_Float = 2014)] =
            "DisplayGCBlackClamp_Float"),
          (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
          (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
            "CameraToHeadTransform_Matrix34"),
          (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
          (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
          (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
          (e[(e.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
          (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
          (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
          (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
          (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
          (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
          (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
            "UserHeadToEyeDepthMeters_Float"),
          (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
            "CameraFirmwareVersion_Uint64"),
          (e[(e.CameraFirmwareDescription_String = 2028)] =
            "CameraFirmwareDescription_String"),
          (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
            "DisplayFPGAVersion_Uint64"),
          (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
            "DisplayBootloaderVersion_Uint64"),
          (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
            "DisplayHardwareVersion_Uint64"),
          (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
            "AudioFirmwareVersion_Uint64"),
          (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
            "CameraCompatibilityMode_Int32"),
          (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
            "ScreenshotHorizontalFieldOfViewDegrees_Float"),
          (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
            "ScreenshotVerticalFieldOfViewDegrees_Float"),
          (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
          (e[(e.DisplayAllowNightMode_Bool = 2037)] =
            "DisplayAllowNightMode_Bool"),
          (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
            "DisplayMCImageWidth_Int32"),
          (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
            "DisplayMCImageHeight_Int32"),
          (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
            "DisplayMCImageNumChannels_Int32"),
          (e[(e.DisplayMCImageData_Binary = 2041)] =
            "DisplayMCImageData_Binary"),
          (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
            "SecondsFromPhotonsToVblank_Float"),
          (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
            "DriverDirectModeSendsVsyncEvents_Bool"),
          (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
          (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
            "GraphicsAdapterLuid_Uint64"),
          (e[(e.DriverProvidedChaperonePath_String = 2048)] =
            "DriverProvidedChaperonePath_String"),
          (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
            "ExpectedTrackingReferenceCount_Int32"),
          (e[(e.ExpectedControllerCount_Int32 = 2050)] =
            "ExpectedControllerCount_Int32"),
          (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
            "NamedIconPathControllerLeftDeviceOff_String"),
          (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
            "NamedIconPathControllerRightDeviceOff_String"),
          (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
            "NamedIconPathTrackingReferenceDeviceOff_String"),
          (e[(e.DoNotApplyPrediction_Bool = 2054)] =
            "DoNotApplyPrediction_Bool"),
          (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
            "CameraToHeadTransforms_Matrix34_Array"),
          (e[(e.DistortionMeshResolution_Int32 = 2056)] =
            "DistortionMeshResolution_Int32"),
          (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
            "DriverIsDrawingControllers_Bool"),
          (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
            "DriverRequestsApplicationPause_Bool"),
          (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
            "DriverRequestsReducedRendering_Bool"),
          (e[(e.MinimumIpdStepMeters_Float = 2060)] =
            "MinimumIpdStepMeters_Float"),
          (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
            "AudioBridgeFirmwareVersion_Uint64"),
          (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
            "ImageBridgeFirmwareVersion_Uint64"),
          (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
            "ImuToHeadTransform_Matrix34"),
          (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
            "ImuFactoryGyroBias_Vector3"),
          (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
            "ImuFactoryGyroScale_Vector3"),
          (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
            "ImuFactoryAccelerometerBias_Vector3"),
          (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
            "ImuFactoryAccelerometerScale_Vector3"),
          (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
            "ConfigurationIncludesLighthouse20Features_Bool"),
          (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
            "Prop_AdditionalRadioFeatures_Uint64"),
          (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
            "Prop_CameraWhiteBalance_Vector4_Array"),
          (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
            "Prop_CameraDistortionFunction_Int32_Array"),
          (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
            "Prop_CameraDistortionCoefficients_Float_Array"),
          (e[(e.Prop_ExpectedControllerType_String = 2074)] =
            "Prop_ExpectedControllerType_String"),
          (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
          (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
            "DriverProvidedChaperoneVisibility_Bool"),
          (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
            "HmdColumnCorrectionSettingPrefix_String"),
          (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
            "CameraSupportsCompatibilityModes_Bool"),
          (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
            "SupportsRoomViewDepthProjection_Bool"),
          (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
            "DisplayAvailableFrameRates_Float_Array"),
          (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
            "DisplaySupportsRuntimeFramerateChange_Bool"),
          (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
            "DisplaySupportsAnalogGain_Bool"),
          (e[(e.DisplayMinAnalogGain_Float = 2086)] =
            "DisplayMinAnalogGain_Float"),
          (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
            "DisplayMaxAnalogGain_Float"),
          (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
          (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
          (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
            "IpdUIRangeMinMeters_Float"),
          (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
            "IpdUIRangeMaxMeters_Float"),
          (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
            "Hmd_SupportsHDCP14LegacyCompat_Bool"),
          (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
            "Hmd_SupportsMicMonitoring_Bool"),
          (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
            "Hmd_SupportsDisplayPortTrainingMode_Bool"),
          (e[(e.SupportsRoomViewDirect_Bool = 2105)] =
            "SupportsRoomViewDirect_Bool"),
          (e[(e.SupportsAppThrottling_Bool = 2106)] =
            "SupportsAppThrottling_Bool"),
          (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
            "DriverRequestedMuraCorrectionMode_Int32"),
          (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
            "DriverRequestedMuraFeather_InnerLeft_Int32"),
          (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
            "DriverRequestedMuraFeather_InnerRight_Int32"),
          (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
            "DriverRequestedMuraFeather_InnerTop_Int32"),
          (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
            "DriverRequestedMuraFeather_InnerBottom_Int32"),
          (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
            "DriverRequestedMuraFeather_OuterLeft_Int32"),
          (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
            "DriverRequestedMuraFeather_OuterRight_Int32"),
          (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
            "DriverRequestedMuraFeather_OuterTop_Int32"),
          (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
            "DriverRequestedMuraFeather_OuterBottom_Int32"),
          (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
            "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
          (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
          (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
          (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
          (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
          (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
          (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
          (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
          (e[(e.ControllerRoleHint_Int32 = 3007)] = "ControllerRoleHint_Int32"),
          (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
            "FieldOfViewLeftDegrees_Float"),
          (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
            "FieldOfViewRightDegrees_Float"),
          (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
            "FieldOfViewTopDegrees_Float"),
          (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
            "FieldOfViewBottomDegrees_Float"),
          (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
            "TrackingRangeMinimumMeters_Float"),
          (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
            "TrackingRangeMaximumMeters_Float"),
          (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
          (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
          (e[(e.NamedIconPathDeviceOff_String = 5001)] =
            "NamedIconPathDeviceOff_String"),
          (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
            "NamedIconPathDeviceSearching_String"),
          (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
            "NamedIconPathDeviceSearchingAlert_String"),
          (e[(e.NamedIconPathDeviceReady_String = 5004)] =
            "NamedIconPathDeviceReady_String"),
          (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
            "NamedIconPathDeviceReadyAlert_String"),
          (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
            "NamedIconPathDeviceNotReady_String"),
          (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
            "NamedIconPathDeviceStandby_String"),
          (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
            "NamedIconPathDeviceAlertLow_String"),
          (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
            "DisplayHiddenArea_Binary_Start"),
          (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
            "DisplayHiddenArea_Binary_End"),
          (e[(e.ParentContainer = 5151)] = "ParentContainer"),
          (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
          (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
          (e[(e.HasDisplayComponent_Bool = 6002)] = "HasDisplayComponent_Bool"),
          (e[(e.HasControllerComponent_Bool = 6003)] =
            "HasControllerComponent_Bool"),
          (e[(e.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
          (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
            "HasDriverDirectModeComponent_Bool"),
          (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
            "HasVirtualDisplayComponent_Bool"),
          (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
            "HasSpatialAnchorsSupport_Bool"),
          (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
          (e[(e.LegacyInputProfile_String = 7001)] =
            "LegacyInputProfile_String"),
          (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
            "VendorSpecific_Reserved_Start"),
          (e[(e.VendorSpecific_Reserved_End = 10999)] =
            "VendorSpecific_Reserved_End"),
          (e[(e.TrackedDeviceProperty_Max = 1e6)] =
            "TrackedDeviceProperty_Max");
      })(Ve || (Ve = {})),
      (function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.HMD = 1)] = "HMD"),
          (e[(e.Controller = 2)] = "Controller"),
          (e[(e.GenericTracker = 3)] = "GenericTracker"),
          (e[(e.TrackingReference = 4)] = "TrackingReference"),
          (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
      })(Le || (Le = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NVIDIA = 1)] = "NVIDIA"),
          (e[(e.AMD = 2)] = "AMD");
      })(Be || (Be = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Starting = 1)] = "Starting"),
          (e[(e.Quitting = 2)] = "Quitting"),
          (e[(e.Running = 3)] = "Running"),
          (e[(e.Waiting = 4)] = "Waiting");
      })(Ne || (Ne = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(He || (He = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(Ae || (Ae = {})),
      (function (e) {
        (e[(e.SingleLine = 0)] = "SingleLine"),
          (e[(e.MultipleLines = 1)] = "MultipleLines");
      })(Fe || (Fe = {})),
      (function (e) {
        (e[(e.LaserMouse = 1)] = "LaserMouse"),
          (e[(e.Keyboard = 2)] = "Keyboard"),
          (e[(e.RoomView = 4)] = "RoomView"),
          (e[(e.DisplaySuppressed = 8)] = "DisplaySuppressed"),
          (e[(e.SystemButtonDown = 16)] = "SystemButtonDown"),
          (e[(e.DriverIsDrawingControllers = 32)] =
            "DriverIsDrawingControllers"),
          (e[(e.DriverRequestsApplicationPause = 64)] =
            "DriverRequestsApplicationPause"),
          (e[(e.DriverRequestsReducedRendering = 128)] =
            "DriverRequestsReducedRendering");
      })(je || (je = {})),
      (function (e) {
        (e[(e.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
          (e[(e.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
          (e[(e.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
          (e[(e.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
          (e[(e.ISO_52FPS = 4)] = "ISO_52FPS"),
          (e[(e.ISO_50FPS = 5)] = "ISO_50FPS"),
          (e[(e.ISO_48FPS = 6)] = "ISO_48FPS"),
          (e[(e.ISO_46FPS = 7)] = "ISO_46FPS"),
          (e[(e.ISO_44FPS = 8)] = "ISO_44FPS"),
          (e[(e.ISO_42FPS = 9)] = "ISO_42FPS"),
          (e[(e.ISO_40FPS = 10)] = "ISO_40FPS"),
          (e[(e.ISO_35FPS = 11)] = "ISO_35FPS"),
          (e[(e.ISO_30FPS = 12)] = "ISO_30FPS"),
          (e[(e.ISO_15FPS = 13)] = "ISO_15FPS"),
          (e[(e.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
      })(Ue || (Ue = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
          (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
          (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
          (e[(e.Error = -1)] = "Error");
      })(We || (We = {})),
      (function (e) {
        (e[(e.TrackedControllerRole_Invalid = 0)] =
          "TrackedControllerRole_Invalid"),
          (e[(e.TrackedControllerRole_LeftHand = 1)] =
            "TrackedControllerRole_LeftHand"),
          (e[(e.TrackedControllerRole_RightHand = 2)] =
            "TrackedControllerRole_RightHand"),
          (e[(e.TrackedControllerRole_OptOut = 3)] =
            "TrackedControllerRole_OptOut"),
          (e[(e.TrackedControllerRole_Treadmill = 4)] =
            "TrackedControllerRole_Treadmill"),
          (e[(e.TrackedControllerRole_Max = 5)] = "TrackedControllerRole_Max");
      })(ze || (ze = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Steam_VRButton = 1)] = "Steam_VRButton"),
          (e[(e.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
          (e[(e.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
          (e[(e.Watchdog_Controller = 11)] = "Watchdog_Controller"),
          (e[(e.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
          (e[(e.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
          (e[(e.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
          (e[(e.SteamVR_Restart = 30)] = "SteamVR_Restart"),
          (e[(e.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
      })(Ge || (Ge = {})),
      (function (e) {
        (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
      })(Ke || (Ke = {})),
      (function (e) {
        (e[(e.Hostname = 0)] = "Hostname"),
          (e[(e.IP = 1)] = "IP"),
          (e[(e.Version = 2)] = "Version"),
          (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
          (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
      })(qe || (qe = {}));
    class Qe extends w.Component {
      constructor(e) {
        super(e);
        let t = {};
        if (VRHTML)
          try {
            let e = VRHTML.VRProperties.GetStringProperty(
              this.props.sDevicePath,
              Ve.RenderModelName_String
            );
            if (e) {
              let r = VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                e,
                this.props.sInputPath
              );
              if (r) {
                let n = VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                  e,
                  r,
                  this.props.sDevicePath
                );
                n && (t.xfTransform = n.xfTrackingToComponentLocal);
              }
            }
          } catch (e) {
            console.log(
              "Component transform invalid for ",
              this.props.sDevicePath
            );
          }
        this.state = t;
      }
      render() {
        return w.createElement(
          be,
          {
            id: this.props.id,
            parent_path: this.props.sDevicePath,
            transform: this.state.xfTransform,
          },
          this.props.children
        );
      }
    }
    class Xe extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return w.createElement(
          "vsg-callout-transform",
          { offset: Z(this.props.vOffset) },
          this.props.children
        );
      }
    }
    class Ye extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "dashboardtransform";
      }
      buildNode(e, t) {
        var r;
        const n = this.createSgNode(t);
        return (
          (n.properties.continuous_relatch =
            null != (r = this.props.bContinuousRelatch) && r),
          [e, n]
        );
      }
    }
    Object(n.b)([s.a], Ye.prototype, "buildNode", null),
      r.d(t, "c", function () {
        return o;
      }),
      r.d(t, "g", function () {
        return a;
      }),
      r.d(t, "a", function () {
        return l;
      }),
      r.d(t, "Q", function () {
        return c;
      }),
      r.d(t, "jb", function () {
        return d;
      }),
      r.d(t, "kb", function () {
        return u;
      }),
      r.d(t, "W", function () {
        return h;
      }),
      r.d(t, "X", function () {
        return p;
      }),
      r.d(t, "O", function () {
        return m;
      }),
      r.d(t, "P", function () {
        return g;
      }),
      r.d(t, "J", function () {
        return b;
      }),
      r.d(t, "T", function () {
        return v;
      }),
      r.d(t, "V", function () {
        return _;
      }),
      r.d(t, "b", function () {
        return y;
      }),
      r.d(t, "K", function () {
        return f;
      }),
      r.d(t, "Y", function () {
        return S;
      }),
      r.d(t, "h", function () {
        return O;
      }),
      r.d(t, "M", function () {
        return k;
      }),
      r.d(t, "hb", function () {
        return C;
      }),
      r.d(t, "j", function () {
        return re;
      }),
      r.d(t, "lb", function () {
        return ne;
      }),
      r.d(t, "Z", function () {
        return ie;
      }),
      r.d(t, "U", function () {
        return te;
      }),
      r.d(t, "C", function () {
        return se;
      }),
      r.d(t, "nb", function () {
        return be;
      }),
      r.d(t, "mb", function () {
        return ve;
      }),
      r.d(t, "f", function () {
        return U;
      }),
      r.d(t, "eb", function () {
        return G;
      }),
      r.d(t, "ib", function () {
        return K;
      }),
      r.d(t, "S", function () {
        return q;
      }),
      r.d(t, "gb", function () {
        return Se;
      }),
      r.d(t, "v", function () {
        return de;
      }),
      r.d(t, "fb", function () {
        return Oe;
      }),
      r.d(t, "N", function () {
        return ke;
      }),
      r.d(t, "R", function () {
        return Ce;
      }),
      r.d(t, "db", function () {
        return we;
      }),
      r.d(t, "bb", function () {
        return Me;
      }),
      r.d(t, "t", function () {
        return oe;
      }),
      r.d(t, "u", function () {
        return ae;
      }),
      r.d(t, "cb", function () {
        return ce;
      }),
      r.d(t, "ab", function () {
        return fe;
      }),
      r.d(t, "H", function () {
        return De;
      }),
      r.d(t, "L", function () {
        return Re;
      }),
      r.d(t, "e", function () {
        return Qe;
      }),
      r.d(t, "d", function () {
        return Xe;
      }),
      r.d(t, "k", function () {
        return Ye;
      }),
      r.d(t, "I", function () {
        return he;
      }),
      r.d(t, "i", function () {
        return Te;
      }),
      r.d(t, "r", function () {
        return pe;
      }),
      r.d(t, "A", function () {
        return me;
      }),
      r.d(t, "B", function () {
        return ge;
      }),
      r.d(t, "qb", function () {
        return 0;
      }),
      r.d(t, "pb", function () {
        return -1;
      }),
      r.d(t, "m", function () {
        return Ie;
      }),
      r.d(t, "E", function () {
        return Pe;
      }),
      r.d(t, "F", function () {
        return xe;
      }),
      r.d(t, "z", function () {
        return Ve;
      }),
      r.d(t, "y", function () {
        return Le;
      }),
      r.d(t, "w", function () {
        return Ne;
      }),
      r.d(t, "D", function () {
        return He;
      }),
      r.d(t, "q", function () {
        return Ae;
      }),
      r.d(t, "p", function () {
        return Fe;
      }),
      r.d(t, "l", function () {
        return Ue;
      }),
      r.d(t, "s", function () {
        return We;
      }),
      r.d(t, "x", function () {
        return ze;
      }),
      r.d(t, "G", function () {
        return Ge;
      }),
      r.d(t, "o", function () {
        return Ke;
      }),
      r.d(t, "n", function () {
        return qe;
      });
    t.ob = VRHTML;
  },
  "8GAN": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return u;
    }),
      r.d(t, "a", function () {
        return h;
      }),
      r.d(t, "c", function () {
        return p;
      });
    var n,
      i = r("mrSG"),
      s = r("q1tI"),
      o = r("7wIv"),
      a = r("/i/y"),
      l = r("GXif"),
      c = r("okNM"),
      d = r("hcOo");
    const u = "resetuniverseorigincountdown",
      h = "begin_reset_universe_origin_countdown";
    let p = (n = class extends s.Component {
      constructor(e) {
        super(e),
          (this.m_countdownTimeout = 0),
          (this.m_fadeFinishTimeout = 0),
          (this.m_mailbox = new a.c()),
          this.m_mailbox.Init(u).then(() => {
            this.m_mailbox.RegisterHandler(
              h,
              this.OnBeginResetUniverseOriginCountdown
            );
          }),
          (this.state = {
            visible: !1,
            fading: !1,
            countdown_seconds: 0,
            in_dash_mode: !1,
          });
      }
      componentWillUnmount() {
        clearTimeout(this.m_countdownTimeout),
          (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0);
      }
      OnBeginResetUniverseOriginCountdown(e) {
        var t, r;
        clearTimeout(this.m_countdownTimeout),
          (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0);
        const n =
          null === (t = a.ob) || void 0 === t
            ? void 0
            : t.VRApplications.GetSceneApplicationKey();
        let i = !n || "system.generated.xrservice" == n;
        i
          ? this.props.dashboardRef.current &&
            this.props.dashboardRef.current.setPlacementModeActive(!0)
          : null === (r = a.ob) ||
            void 0 === r ||
            r.VRDashboardManager.HideDashboard("reset_universe_origin"),
          this.setState({
            visible: !0,
            fading: !1,
            countdown_seconds: e.countdown_seconds,
            in_dash_mode: i,
          });
      }
      CountdownTick() {
        var e, t, r;
        clearTimeout(this.m_countdownTimeout),
          1 == this.state.countdown_seconds
            ? ((this.m_countdownTimeout = 0),
              this.state.in_dash_mode &&
                this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!1),
              null === (e = a.ob) ||
                void 0 === e ||
                e.VRChaperone.ResetZeroPose(
                  null !=
                    (r =
                      null === (t = a.ob) || void 0 === t
                        ? void 0
                        : t.VRCompositor.GetTrackingSpace())
                    ? r
                    : a.B.Standing
                ),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                n.kFadeDurationMs
              )),
              this.setState({
                visible: !0,
                fading: !0,
                countdown_seconds: 0,
                in_dash_mode: !1,
              }))
            : ((this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: this.state.countdown_seconds - 1,
              }));
      }
      HideOverlay() {
        clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0),
          this.setState({ visible: !1, fading: !1, countdown_seconds: 0 });
      }
      renderPanel() {
        return s.createElement(
          a.ab,
          {
            width: void 0,
            height: n.kPanelHeight,
            interactive: !1,
            sort_order: 1e3,
          },
          s.createElement(
            "div",
            {
              className: Object(d.a)("ResetSeatedCountdownParent", [
                "Fading",
                this.state.fading,
              ]),
              style: { width: n.kPixelWidth },
            },
            s.createElement(
              "div",
              { className: "FlexColumn" },
              s.createElement(
                "div",
                { className: "ResetSeatedCountdownRow" },
                s.createElement(
                  "div",
                  { className: "ResetSeatedCountdownText" },
                  this.state.countdown_seconds
                )
              ),
              s.createElement(
                "div",
                { className: "ResetSeatedCountdownTextDesc" },
                Object(l.c)("#Recentering_Countdown")
              )
            )
          )
        );
      }
      render() {
        var e, t;
        if (!this.state.visible) return null;
        let r = 0.9,
          n =
            0.8 *
            (null !=
            (t =
              null === (e = a.ob) || void 0 === e
                ? void 0
                : e.VRProperties.GetFloatProperty(
                    a.qb,
                    a.z.DashboardScale_Float
                  ))
              ? t
              : 1);
        const i =
          this.props.dashboardRef.current &&
          this.props.dashboardRef.current.isTheaterMode;
        return this.state.in_dash_mode
          ? (i && ((r *= 2), (n *= 2)),
            s.createElement(
              a.k,
              { bContinuousRelatch: !0 },
              s.createElement(
                a.nb,
                { translation: { y: -0.05, z: -r }, scale: n },
                this.renderPanel()
              )
            ))
          : s.createElement(
              a.nb,
              { parent_path: "/user/head" },
              s.createElement(
                a.nb,
                { translation: { y: -0.05, z: -r }, scale: n },
                this.renderPanel()
              )
            );
      }
    });
    (p.kPanelHeight = 0.2),
      (p.kPixelWidth = 400),
      (p.kFadeDurationMs = 1e3),
      Object(i.b)(
        [o.bind],
        p.prototype,
        "OnBeginResetUniverseOriginCountdown",
        null
      ),
      Object(i.b)([o.bind], p.prototype, "CountdownTick", null),
      Object(i.b)([o.bind], p.prototype, "HideOverlay", null),
      (p = n = Object(i.b)([c.a], p));
  },
  Ck0r: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    var n = r("q1tI");
    function i(e) {
      return n.createElement(
        "svg",
        Object.assign(
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            xmlSpace: "preserve",
          },
          e
        ),
        n.createElement(
          "g",
          null,
          n.createElement("path", {
            d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
          })
        )
      );
    }
  },
  Gmup: function (e, t, r) {
    "use strict";
    var n,
      i,
      s = r("mrSG"),
      o = r("/i/y"),
      a = r("7wIv"),
      l = r.n(a),
      c = r("q1tI"),
      d = r("6YgL"),
      u = r("7uy8"),
      h = r("GXif"),
      p = r("Q+Z6"),
      m = r("okNM"),
      g = r("YRJX"),
      b = r("2vnA"),
      v = r("p9CI");
    let _ = (n = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new o.c()),
          (this.m_refWindowScrollPanel = c.createRef()),
          (this.state = { desktopView: null }),
          this.m_mailbox.Init(n.k_sMailboxName);
      }
      setSiblingReferences(e) {
        this.setState({ desktopView: e });
      }
      onWindowViewCreated(e, t) {
        var r, n;
        null === (r = this.m_refWindowScrollPanel.current) ||
          void 0 === r ||
          r.scrollTo({
            left:
              null === (n = this.m_refWindowScrollPanel.current) || void 0 === n
                ? void 0
                : n.scrollWidth,
            behavior: "smooth",
          });
      }
      render() {
        var e, t, r, n;
        if (
          !this.state.desktopView ||
          (null === (e = this.state.desktopView) || void 0 === e
            ? void 0
            : e.state.bIsUsingSteamDesktop)
        )
          return null;
        const i =
          this.props.bWindowViewEnabled ||
          (null === (t = this.state.desktopView) || void 0 === t
            ? void 0
            : t.state.desktopIndices.length) > 1;
        return c.createElement(
          g.f,
          Object.assign({}, this.props, {
            additionalClassNames: this.props.bWindowViewEnabled
              ? "DesktopTray FixedWidth"
              : "DesktopTray",
          }),
          i &&
            c.createElement(
              v.b,
              {
                scrollDirection: v.a.Horizontal,
                className: "Section Grow",
                style: { marginRight: 0, marginLeft: "9px" },
                ref: this.m_refWindowScrollPanel,
              },
              c.createElement(
                "div",
                {
                  style: {
                    paddingRight: "16px",
                    display: "flex",
                    flexDirection: "row",
                    margin: 0,
                  },
                },
                null === (r = this.state.desktopView) || void 0 === r
                  ? void 0
                  : r.state.desktopIndices.map((e) => {
                      var t;
                      return c.createElement(g.o, {
                        additionalClassNames: "ViewButton Fixed",
                        key: e,
                        label: e.toString(),
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.currentDesktopIndex) == e,
                        title: Object(h.c)("#Desktop_X", e),
                        onClick: () => {
                          var t;
                          return null === (t = this.state.desktopView) ||
                            void 0 === t
                            ? void 0
                            : t.onDesktopChange(e);
                        },
                      });
                    }),
                Array.from(
                  null === (n = this.state.desktopView) || void 0 === n
                    ? void 0
                    : n.state.mapWindowInfo.keys()
                ).map((e) => {
                  var t, r, n;
                  return c.createElement(g.o, {
                    additionalClassNames: "ViewButton",
                    iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                    key: e,
                    active:
                      (null === (t = this.state.desktopView) || void 0 === t
                        ? void 0
                        : t.state.sCurrentWindowOverlayKey) == e,
                    title:
                      null ===
                        (n = this.props.mapWindows.get(
                          null === (r = this.state.desktopView) || void 0 === r
                            ? void 0
                            : r.state.mapWindowInfo.get(e).sHwnd
                        )) || void 0 === n
                        ? void 0
                        : n.title,
                    onClick: () => {
                      var t;
                      return null === (t = this.state.desktopView) ||
                        void 0 === t
                        ? void 0
                        : t.onWindowViewChange(e);
                    },
                  });
                })
              )
            ),
          this.props.bWindowViewEnabled &&
            c.createElement(
              "div",
              { className: "Section", style: { marginRight: 0 } },
              c.createElement(g.o, {
                iconUrl: "/dashboard/images/icons/icon_add.png",
                additionalClassNames: "AddWindow",
                title: Object(h.c)("#AddView"),
                onClick: this.props.onToggleWindowList,
                onMouseEnter: this.props.onClearPopupMenuTimeout,
                onMouseLeave: () => this.props.onStartPopupMenuTimeout(500),
              })
            ),
          c.createElement(
            "div",
            { className: "Section" },
            c.createElement(g.o, {
              iconUrl: this.props.bDarkMode
                ? "/dashboard/images/icons/svr_nightmode.svg"
                : "/dashboard/images/icons/svr_lightmode.svg",
              title: Object(h.c)("#Settings_ToggleDarkMode"),
              onClick: this.props.onToggleDarkMode,
            })
          )
        );
      }
    });
    (_.k_sMailboxName = "systemui_desktoptray"),
      (_ = n = Object(s.b)([m.a], _));
    let y = (i = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new o.c()),
          (this.state = {
            bIsUsingSteamDesktop: !1,
            bIsReady: !1,
            desktopIndices: [],
            mapWindowInfo: new Map(),
            sCurrentWindowOverlayKey: "",
          }),
          this.m_mailbox.Init(i.k_sMailboxName).then(() => {});
      }
      componentDidMount() {
        var e, t, r;
        null ===
        (null === (e = VRHTML) || void 0 === e
          ? void 0
          : e.VROverlay.FindOverlay("valve.steam.desktop"))
          ? (null === (t = VRHTML) ||
              void 0 === t ||
              t.RegisterForDesktopViewReadyEvents(this.onDesktopViewReady),
            null === (r = VRHTML) ||
              void 0 === r ||
              r.RegisterForDesktopViewUpdatingEvents(
                this.onDesktopViewUpdating
              ),
            this.updateDesktopIndices())
          : this.setState({ bIsUsingSteamDesktop: !0 });
      }
      get desktopCount() {
        return this.state.desktopIndices.length;
      }
      get sCurrentOverlayKey() {
        return "" != this.state.sCurrentWindowOverlayKey
          ? this.state.sCurrentWindowOverlayKey
          : "system.desktop." + this.currentDesktopIndex;
      }
      get currentDesktopIndex() {
        var e;
        return "" != this.state.sCurrentWindowOverlayKey
          ? -1
          : null != (e = p.d.settings.get("/settings/dashboard/desktopIndex"))
          ? e
          : 1;
      }
      get currentWindowHwnd() {
        return "" == this.state.sCurrentWindowOverlayKey
          ? ""
          : this.state.mapWindowInfo.get(this.state.sCurrentWindowOverlayKey)
              .sHwnd;
      }
      onDesktopScaleChange(e) {
        this.currentDesktopIndex > 0 &&
          p.d.SetSettingsValue(
            "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
            e
          );
      }
      onDesktopChange(e) {
        p.d.SetSettingsValue("/settings/dashboard/desktopIndex", e),
          this.setState({ sCurrentWindowOverlayKey: "" });
      }
      onDesktopViewUpdating() {
        this.setState({ bIsReady: !1, desktopIndices: [] });
      }
      onDesktopViewReady() {
        this.updateDesktopIndices();
      }
      onWindowViewCreated(e, t) {
        this.state.mapWindowInfo.set(e, { sHwnd: t }),
          this.setState({ sCurrentWindowOverlayKey: e });
      }
      onWindowViewClosed(e) {
        this.state.sCurrentWindowOverlayKey == e && this.onDesktopChange(1);
      }
      onWindowViewDestroyed(e) {
        this.state.mapWindowInfo.delete(e);
      }
      onWindowViewChange(e) {
        this.setState({ sCurrentWindowOverlayKey: e });
      }
      updateDesktopIndices() {
        var e, t;
        let r = 1,
          n = [];
        for (
          ;
          null !==
          (null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.FindOverlay("system.desktop." + r));

        )
          n.push(r), r++;
        (null != (t = p.d.settings.get("/settings/dashboard/desktopIndex"))
          ? t
          : 1) > n.length &&
          p.d.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
          this.setState({ bIsReady: !0, desktopIndices: n });
      }
      ShowDesktop() {
        this.m_mailbox.SendMessage("desktopview", {
          type: "request_show_desktop",
        });
      }
      renderControlBarButtons(e) {
        return c.createElement(
          c.Fragment,
          null,
          "" == this.state.sCurrentWindowOverlayKey &&
            c.createElement(g.o, {
              iconUrl: "/dashboard/images/icons/icon_showdesktop.png",
              title: "Show Desktop",
              tooltipTranslation: e,
              onClick: this.ShowDesktop,
            })
        );
      }
      render() {
        var e;
        const t =
          null ==
            (e = p.d.settings.get("/settings/dashboard/allowCurvature")) || e
            ? u.j
            : null;
        return this.props.visible
          ? this.state.bIsUsingSteamDesktop
            ? c.createElement(o.U, {
                mountedId: Object(o.f)(u.F, "valve.steam.desktop"),
              })
            : this.state.bIsReady
            ? 0 === this.state.desktopIndices.length
              ? c.createElement(
                  g.h,
                  { visible: !0 },
                  c.createElement(
                    "div",
                    { className: "NoDesktopFound" },
                    c.createElement("h2", null, Object(h.c)("#NoDesktopFound"))
                  )
                )
              : -1 == this.currentDesktopIndex
              ? c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    o.ab,
                    {
                      overlay_key: this.state.sCurrentWindowOverlayKey,
                      height:
                        this.props.fActiveOverlayScale *
                        i.k_nDesktopPanelBaseHeight,
                      curvature_origin_id: t,
                      interactive: !0,
                      origin: o.t.BottomCenter,
                      debug_name: "System Desktop",
                    },
                    c.createElement(o.bb, { id: g.t, location: o.t.TopCenter }),
                    c.createElement(o.U, {
                      mountedId: Object(o.f)(
                        u.F,
                        this.state.sCurrentWindowOverlayKey + ".cursor"
                      ),
                    }),
                    c.createElement(o.bb, {
                      id: g.s,
                      location: o.t.BottomCenter,
                    })
                  )
                )
              : c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    o.ab,
                    {
                      overlay_key: "system.desktop." + this.currentDesktopIndex,
                      height:
                        this.props.fActiveOverlayScale *
                        i.k_nDesktopPanelBaseHeight,
                      curvature_origin_id: t,
                      interactive: !0,
                      origin: o.t.BottomCenter,
                      debug_name: "System Desktop",
                    },
                    c.createElement(o.bb, { id: g.t, location: o.t.TopCenter }),
                    c.createElement(o.U, {
                      mountedId: Object(o.f)(
                        u.F,
                        "system.desktop." + this.currentDesktopIndex + ".cursor"
                      ),
                    }),
                    c.createElement(o.bb, {
                      id: g.s,
                      location: o.t.BottomCenter,
                    })
                  )
                )
            : c.createElement(
                g.h,
                { visible: !0 },
                c.createElement(
                  "div",
                  { className: "NoDesktopFound" },
                  c.createElement(
                    "h2",
                    null,
                    Object(h.c)("#DesktopViewsUpdating")
                  )
                )
              )
          : null;
      }
    });
    (y.k_sMailboxName = "systemui_desktopview"),
      (y.k_nDesktopPanelBaseHeight = 2),
      Object(s.b)([b.f], y.prototype, "desktopCount", null),
      Object(s.b)([b.f], y.prototype, "sCurrentOverlayKey", null),
      Object(s.b)([b.f], y.prototype, "currentDesktopIndex", null),
      Object(s.b)([b.f], y.prototype, "currentWindowHwnd", null),
      Object(s.b)([l.a], y.prototype, "onDesktopScaleChange", null),
      Object(s.b)([l.a], y.prototype, "onDesktopChange", null),
      Object(s.b)([l.a], y.prototype, "onDesktopViewUpdating", null),
      Object(s.b)([l.a], y.prototype, "onDesktopViewReady", null),
      Object(s.b)([l.a], y.prototype, "onWindowViewChange", null),
      Object(s.b)([l.a], y.prototype, "ShowDesktop", null),
      (y = i = Object(s.b)([m.a], y));
    var f,
      S = r("hcOo");
    let O = (f = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_imageSources = []),
          (this.m_imageIndex = -1),
          this.updateImageSources(),
          (this.state = { image: null });
      }
      updateImageSources() {
        let e = [],
          t = this.props.imageUrl.replace(
            /header\.jpg$/,
            "library_600x900.jpg"
          );
        t !== this.props.imageUrl &&
          (e.push(t),
          e.push(this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"))),
          e.push(this.props.imageUrl),
          this.props.fallbackImageUrl && e.push(this.props.fallbackImageUrl),
          (this.m_imageSources = e.filter(
            (e) => !f.s_failedImages.includes(e)
          )),
          (this.m_imageIndex = -1);
      }
      componentDidMount() {
        this.m_imageIndex < 0 &&
          ((this.m_loadingImage = new window.Image()), this.loadNextImage());
      }
      componentWillUnmount() {
        this.m_loadingImage &&
          ((this.m_loadingImage.onerror = null),
          (this.m_loadingImage.onload = null),
          (this.m_loadingImage = null));
      }
      componentDidUpdate(e) {
        this.props.imageUrl != e.imageUrl &&
          (this.setState({ image: null }),
          this.updateImageSources(),
          this.loadNextImage());
      }
      loadNextImage() {
        this.m_imageIndex >= 0 &&
          this.m_imageIndex < this.m_imageSources.length &&
          f.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
          this.m_imageIndex++,
          this.m_imageIndex < this.m_imageSources.length
            ? ((this.m_loadingImage.onerror = this.loadNextImage),
              (this.m_loadingImage.onload = this.onLoad),
              (this.m_loadingImage.src =
                this.m_imageSources[this.m_imageIndex]))
            : this.onError();
      }
      onLoad() {
        this.setState({
          image: this.m_loadingImage.src,
          width: this.m_loadingImage.width,
          height: this.m_loadingImage.height,
          isFallback:
            this.props.fallbackImageUrl &&
            this.m_imageIndex == this.m_imageSources.length - 1,
        });
      }
      onError() {
        this.setState({ isFallback: !0 });
      }
      render() {
        let e = { backgroundImage: `url(${this.state.image})` },
          t = c.createElement("div", { className: "Icon", style: e });
        return (
          this.state.width / this.state.height != 600 / 900 &&
            (t = c.createElement(
              c.Fragment,
              null,
              c.createElement("div", {
                className: "IconBackgroundBlur",
                style: e,
              }),
              t
            )),
          c.createElement(
            "div",
            {
              className: Object(S.a)("PortraitAppImageContainer", [
                "Fallback",
                this.state.isFallback,
              ]),
            },
            this.state.image && t,
            c.createElement("div", { className: "Title" }, this.props.title),
            this.props.children && this.props.children
          )
        );
      }
    });
    var k;
    (O.defaultProps = {
      fallbackImageUrl: "images/appimage_default_portrait.png",
    }),
      (O.s_failedImages = []),
      Object(s.b)([a.bind], O.prototype, "loadNextImage", null),
      Object(s.b)([a.bind], O.prototype, "onLoad", null),
      Object(s.b)([a.bind], O.prototype, "onError", null),
      (O = f = Object(s.b)([m.a], O)),
      (function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(k || (k = {}));
    const C = (e) =>
      c.createElement(
        "div",
        {
          className: Object(S.a)("ButtonContainer", k[e.side], [
            "Disabled",
            !1 === e.enabled,
          ]),
        },
        c.createElement(
          d.a,
          { className: "ButtonControl", onClick: e.onClick },
          e.side == k.Left
            ? c.createElement(c.Fragment, null, "‹")
            : c.createElement(c.Fragment, null, "›")
        )
      );
    class w extends c.Component {
      constructor(e) {
        super(e),
          (this.m_refScrollPanel = c.createRef()),
          (this.m_nLastScrollWidth = 0),
          (this.m_nLastScrollLeft = 0),
          (this.m_bScrolling = !1),
          (this.m_nCurrentScrollTarget = null),
          (this.m_animationFrameRequestHandle = 0),
          (this.state = { bScrolledToStart: null, bScrolledToEnd: null });
      }
      componentDidMount() {
        this.updateButtonVisibilities(), this.requestAnimationFrame();
      }
      componentWillUnmount() {
        window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
      }
      requestAnimationFrame() {
        this.m_animationFrameRequestHandle = window.requestAnimationFrame(
          this.onAnimationFrame
        );
      }
      onAnimationFrame() {
        if (this.m_refScrollPanel.current) {
          const e = this.m_refScrollPanel.current.scrollWidth;
          e != this.m_nLastScrollWidth &&
            (this.updateButtonVisibilities(), (this.m_nLastScrollWidth = e));
          const t = this.m_refScrollPanel.current.scrollLeft;
          (this.m_bScrolling = t != this.m_nLastScrollLeft),
            this.m_bScrolling && (this.m_nLastScrollLeft = t);
        }
        this.requestAnimationFrame();
      }
      onScroll(e) {
        this.updateButtonVisibilities();
      }
      updateButtonVisibilities() {
        const e = this.m_refScrollPanel.current;
        e &&
          this.setState({
            bScrolledToStart: 0 == e.scrollLeft,
            bScrolledToEnd: e.scrollLeft + e.clientWidth == e.scrollWidth,
          });
      }
      onLeftButtonClick() {
        this.scroll(-1);
      }
      onRightButtonClick() {
        this.scroll(1);
      }
      scroll(e) {
        var t;
        const r = this.m_refScrollPanel.current;
        if (!r) return;
        if (r.isThrown)
          return void r.cancelThrowing(() => {
            (this.m_bScrolling = !1), this.scroll(e);
          });
        const n = r.children;
        if (!n || 0 == n.length) return;
        const i = null != (t = this.props.paginationAlignmentOffset) ? t : 0,
          s = n[0],
          o = this.m_bScrolling ? this.m_nCurrentScrollTarget : r.scrollLeft,
          a = s.getBoundingClientRect().left + r.scrollLeft,
          l = s.clientWidth,
          c = r.clientWidth,
          d = Math.floor(c / l) - 1,
          u = Math.round((o - a + i + 1) / l) + d * e - 0.4999,
          h = u > 0 ? u * l + a - i : 0;
        this.scrollToPosition(h);
      }
      scrollToPosition(e) {
        const t = this.m_refScrollPanel.current;
        t &&
          (t.scrollTo({ left: e, behavior: "smooth" }),
          (this.m_bScrolling = !0),
          (this.m_nCurrentScrollTarget = e));
      }
      render() {
        return c.createElement(
          "div",
          {
            className: Object(S.a)(
              "PaginatedCarousel",
              this.props.additionalClassNames
            ),
          },
          c.createElement(
            v.b,
            {
              ref: this.m_refScrollPanel,
              scrollDirection: v.a.Horizontal,
              onScroll: this.onScroll,
            },
            this.props.children
          ),
          (!1 === this.state.bScrolledToStart ||
            !1 === this.state.bScrolledToEnd) &&
            c.createElement(
              "div",
              { className: "PaginationButtons" },
              null !== this.state.bScrolledToStart &&
                c.createElement(C, {
                  side: k.Left,
                  enabled: !this.state.bScrolledToStart,
                  onClick: this.onLeftButtonClick,
                }),
              null !== this.state.bScrolledToEnd &&
                c.createElement(C, {
                  side: k.Right,
                  enabled: !this.state.bScrolledToEnd,
                  onClick: this.onRightButtonClick,
                })
            )
        );
      }
    }
    Object(s.b)([l.a], w.prototype, "onAnimationFrame", null),
      Object(s.b)([l.a], w.prototype, "onScroll", null),
      Object(s.b)([l.a], w.prototype, "onLeftButtonClick", null),
      Object(s.b)([l.a], w.prototype, "onRightButtonClick", null);
    let M = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_scrollWatcher = new S.e()),
          (this.m_refAnchoredParentPortal = c.createRef()),
          (this.m_refButton = c.createRef()),
          (this.state = { bShowPlay: !1 }),
          (this.m_scrollWatcher.onScrollStop = this.onParentScrollStop);
      }
      componentDidUpdate() {
        this.m_scrollWatcher.updateScrollableParents();
      }
      componentWillUnmount() {
        this.m_scrollWatcher.cleanup();
      }
      buttonMouseEnter() {
        var e, t;
        this.setState({ bShowPlay: !0 }),
          null ===
            (t =
              null === (e = this.m_refAnchoredParentPortal.current) ||
              void 0 === e
                ? void 0
                : e.panelAnchor) ||
            void 0 === t ||
            t.relatch();
      }
      buttonMouseLeave() {
        this.setState({ bShowPlay: !1 });
      }
      onParentScrollStop() {
        var e, t;
        null ===
          (t =
            null === (e = this.m_refAnchoredParentPortal.current) ||
            void 0 === e
              ? void 0
              : e.panelAnchor) ||
          void 0 === t ||
          t.relatch();
      }
      get shouldShowHoverContents() {
        return !this.m_scrollWatcher.isScrolling && this.state.bShowPlay;
      }
      render() {
        let e = Object.assign({}, this.props);
        return (
          delete e.onClick,
          c.createElement(
            "div",
            {
              className: Object(S.a)(
                "AppButtonContainer",
                ["AppOwned", p.d.probablyOwnedAppkeys.has(this.props.appkey)],
                ["ShowingPopovers", this.shouldShowHoverContents]
              ),
            },
            c.createElement(
              d.a,
              {
                className: "AppButton",
                ref: this.m_refButton,
                onMouseEnter: this.buttonMouseEnter,
                onMouseLeave: this.buttonMouseLeave,
                onClick: this.props.onClick,
              },
              c.createElement(O, Object.assign({}, e), this.props.children)
            )
          )
        );
      }
    };
    Object(s.b)([l.a], M.prototype, "buttonMouseEnter", null),
      Object(s.b)([l.a], M.prototype, "buttonMouseLeave", null),
      Object(s.b)([l.a], M.prototype, "onParentScrollStop", null),
      (M = Object(s.b)([m.a], M));
    const D = () =>
        c.createElement("div", { className: "AppButton Placeholder" }),
      R = (e) => {
        var t;
        const r = !!e.loading,
          n = null != (t = e.apps) ? t : [];
        let i = "AppCarousel";
        return (
          e.className && (i += " " + e.className),
          (i += " NoAnimations"),
          c.createElement(
            w,
            { additionalClassNames: i, paginationAlignmentOffset: -20 },
            r &&
              c.createElement(
                c.Fragment,
                null,
                c.createElement(D, null),
                c.createElement(D, null),
                c.createElement(D, null),
                c.createElement(D, null)
              ),
            !r &&
              n.map((e) =>
                c.createElement(M, Object.assign({ key: e.appkey }, e))
              )
          )
        );
      };
    var T = r("Ibgz"),
      E = r("vDqi"),
      I = r.n(E),
      P = r("uTck");
    function x() {
      return I.a
        .get(
          "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
        )
        .then((e) => e.data);
    }
    const V = () =>
      c.createElement(
        d.a,
        {
          className: "ButtonControl WithIcon PanelTopRight",
          onClick: () => T.b.Instance.openBigPictureStore(null, T.a.QuickStore),
        },
        c.createElement("span", null, Object(h.c)("#BrowseAll")),
        c.createElement("img", {
          className: "Icon BlackToWhite",
          src: "/dashboard/images/icons/svr_store.svg",
        })
      );
    var L;
    !(function (e) {
      (e[(e.Free = 0)] = "Free"),
        (e[(e.Singleplayer = 1)] = "Singleplayer"),
        (e[(e.Multiplayer = 2)] = "Multiplayer");
    })(L || (L = {}));
    let B = class extends c.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        x().then((e) => this.setState({ storeData: e }));
      }
      openSteamApp(e, t, r) {
        P.a.instance.RecordUIEvent(
          "QuickStoreAppClick",
          L[t].toLowerCase() + ":" + r,
          "steam.app." + e
        ),
          T.b.Instance.openBigPictureStore(e, T.a.QuickStore);
      }
      makeAppButtonList() {
        let e = [];
        switch (this.props.section) {
          case L.Free:
            e = this.state.storeData.apps_free;
            break;
          case L.Singleplayer:
            e = this.state.storeData.apps_singleplayer;
            break;
          case L.Multiplayer:
            e = this.state.storeData.apps_multiplayer;
        }
        return e.map((e, t) => {
          const r = "steam.app." + e.appid;
          return {
            key: r,
            appkey: r,
            title: e.name,
            imageUrl: e.logo,
            onClick: () => this.openSteamApp(e.appid, this.props.section, t),
          };
        });
      }
      render() {
        return this.state.storeData
          ? c.createElement(R, { apps: this.makeAppButtonList() })
          : c.createElement(R, { loading: !0 });
      }
    };
    B = Object(s.b)([m.a], B);
    class N extends c.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        return c.createElement(
          g.h,
          { visible: this.props.visible, additionalClassNames: "QuickStore" },
          c.createElement(V, null),
          c.createElement(
            "h2",
            null,
            Object(h.c)("#StoreSection_TopSingleplayer")
          ),
          c.createElement(B, { section: L.Singleplayer }),
          c.createElement(
            "h2",
            null,
            Object(h.c)("#StoreSection_TopMultiplayer")
          ),
          c.createElement(B, { section: L.Multiplayer }),
          c.createElement("h2", null, Object(h.c)("#StoreSection_TopFree")),
          c.createElement(B, { section: L.Free })
        );
      }
    }
    var H;
    const A = () =>
        c.createElement(
          d.a,
          {
            className: "ButtonControl WithIcon PanelTopRight",
            onClick: () =>
              T.b.Instance.openBigPictureLibrary(null, T.a.QuickLaunch),
          },
          c.createElement("span", null, Object(h.c)("#BrowseAll")),
          c.createElement("img", {
            className: "Icon BlackToWhite",
            src: "/dashboard/images/icons/svr_items.svg",
          })
        ),
      F = () =>
        c.createElement(
          d.a,
          {
            className: "ButtonControl Colorful WelcomeBrowseStore",
            onClick: () => {
              var e;
              return null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VROverlay.ShowDashboard(u.s);
            },
          },
          c.createElement("span", null, Object(h.c)("#WelcomeBrowseStore"))
        ),
      j = () =>
        c.createElement(
          d.a,
          {
            className: "ButtonControl Colorful WelcomeInstall",
            onClick: () =>
              T.b.Instance.openBigPictureLibrary(null, T.a.QuickLaunch),
          },
          c.createElement("span", null, Object(h.c)("#WelcomeInstall"))
        );
    class U extends c.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        x().then((e) => this.setState({ storeData: e }));
      }
      render() {
        let e = [];
        if (this.state.storeData) {
          let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
              this.state.storeData.apps_singleplayer[t],
              this.state.storeData.apps_multiplayer[t],
              this.state.storeData.apps_free[t],
            ]),
            r = new Set();
          for (; e.length < 12 && t.length; ) {
            for (; r.has(t[0].appid); ) t.shift();
            let n = t.shift();
            r.add(n.appid),
              e.push(
                c.createElement(
                  d.a,
                  {
                    key: "appid_" + n.appid,
                    className:
                      "WelcomeFloatingApp WelcomeFloatingApp" + e.length,
                    onClick: () =>
                      T.b.Instance.openBigPictureStore(
                        n.appid,
                        T.a.QuickLaunch
                      ),
                  },
                  c.createElement("img", { src: n.logo })
                )
              );
          }
        }
        return c.createElement(
          "div",
          { className: "QuickLaunchWelcome" },
          e,
          c.createElement(
            "div",
            { className: "QuickLaunchWelcomePrompt" },
            c.createElement(
              "div",
              { className: "QuickLaunchWelcomeHeader" },
              Object(h.c)("#WelcomeHeader")
            ),
            c.createElement(
              "div",
              { className: "QuickLaunchWelcomeMessage" },
              Object(h.c)("#WelcomeMessage")
            ),
            c.createElement(F, null),
            c.createElement(j, null)
          )
        );
      }
    }
    let W = (H = class extends c.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      launchApplication(e, t, r) {
        var n, i, s;
        P.a.instance.RecordUIEvent(
          "QuickLaunchAppClick",
          (t ? "top" : "bottom") + ":" + r,
          e.key
        ),
          null === (i = (n = this.props).onGameLaunched) ||
            void 0 === i ||
            i.call(n, e),
          null === (s = VRHTML) ||
            void 0 === s ||
            s.VRApplications.LaunchApplication(e.key);
      }
      makeAppButtonList() {
        let e = [];
        if (null != p.d.apps)
          for (let t of p.d.apps)
            t.is_internal ||
              (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
              t.is_hidden ||
              t.is_instance ||
              H.s_setBlacklistedAppkeys.has(t.key) ||
              e.push(t);
        e.sort((e, t) => {
          let r = t.library_priority - e.library_priority;
          return 0 == r && (r = t.last_launch - e.last_launch), r;
        });
        const t = (e) => {
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
        return e.map((e, r) => {
          let n = r;
          const i = r < H.TOP_ROW_LENGTH;
          return (
            i || (n -= H.TOP_ROW_LENGTH),
            {
              key: e.key,
              appkey: e.key,
              title: e.name,
              imageUrl: t(e),
              onClick: () => this.launchApplication(e, i, n),
              children: c.createElement(
                c.Fragment,
                null,
                c.createElement("div", { className: "PlayIconFade" }),
                c.createElement("img", {
                  className: "PlayIcon",
                  src: "/dashboard/images/icons/svr_play.svg",
                })
              ),
            }
          );
        });
      }
      render() {
        let e,
          t = this.makeAppButtonList();
        const r =
            0 == t.length ||
            p.d.settings.get("/settings/dashboard/forceWelcomeScreen"),
          n =
            0 == t.length ||
            p.d.settings.get("/settings/dashboard/hideBigPictureLibrary");
        if (r) e = c.createElement(U, null);
        else {
          let r = t.slice(0, H.TOP_ROW_LENGTH),
            i = t.slice(H.TOP_ROW_LENGTH);
          e = c.createElement(
            c.Fragment,
            null,
            !n && c.createElement(A, null),
            c.createElement("h2", null, Object(h.c)("#RecentlyPlayed")),
            c.createElement(R, { className: "TopRow", apps: r }),
            c.createElement(R, { className: "BottomRow", apps: i })
          );
        }
        return c.createElement(
          g.h,
          {
            visible: this.props.visible,
            scrollable: !r,
            debugName: "homepanel",
            additionalClassNames: "QuickLaunch",
          },
          e
        );
      }
    });
    (W.TOP_ROW_LENGTH = 4),
      (W.s_setBlacklistedAppkeys = new Set([
        "openvr.tool.steamvr_room_setup",
        "openvr.tool.steamvr_media_player",
        "openvr.tool.steamvr_desktop_gametheatre",
        "openvr.tool.steamvr_tutorial",
        "openvr.tool.steamvr_environments",
        "openvr.tool.steamvr_environments_tools",
        u.K,
        u.M,
      ])),
      (W = H = Object(s.b)([m.a], W));
    var z = r("vzqD"),
      G = r("tALH"),
      K = r("TbT/"),
      q = r("P8UO");
    class Q extends c.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      onExitApp() {
        var e, t, r;
        null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
          null === (r = (t = this.props).onExitGame) ||
            void 0 === r ||
            r.call(t);
      }
      onReturnToGame() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRDashboardManager.HideDashboard("return_to_game");
      }
      onOpenAppControllerBindingSettings() {
        const e = q.a.Instance.SceneAppKey;
        G.b.OpenDeepLink(G.a.Name, e);
      }
      onOpenAppVideoSettings() {
        const e = q.a.Instance.SceneAppKey;
        z.b.OpenDeepLink(z.c.Name, e);
      }
      render() {
        var e;
        const t = q.a.Instance.SceneAppKey,
          r = q.a.Instance.SceneAppName,
          n = q.a.Instance.SceneApplicationState,
          i = q.a.Instance.SceneAppIsHome,
          s = p.d.settings.get("/settings/dashboard/allowAppQuitting"),
          a = !(
            null != (e = p.d.settings.get("/settings/dashboard/arcadeMode")) &&
            e
          ),
          l = p.d.apps && p.d.apps.find((e) => e.key == t);
        let u = !1;
        switch (n) {
          case o.w.Quitting:
          case o.w.Starting:
          case o.w.Waiting:
            u = !0;
        }
        const m = ((e) => {
          if (null == e) return "";
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        })(l);
        return c.createElement(
          g.h,
          {
            visible: this.props.visible,
            debugName: "nowplaying",
            additionalClassNames: "NowPlaying",
          },
          c.createElement(
            "div",
            { className: "ArtworkColumn" },
            c.createElement(O, { appkey: t, title: r, imageUrl: m })
          ),
          c.createElement(
            "div",
            { className: "InfoColumn" },
            c.createElement("div", { className: "NowPlayingAppTitle" }, r),
            c.createElement(
              d.a,
              {
                className: "ButtonControl Colorful",
                onClick: this.onReturnToGame,
              },
              i
                ? Object(h.c)("#Return_To_Home")
                : Object(h.c)("#Return_To_Game")
            ),
            a &&
              c.createElement(
                K.e,
                {
                  icon: K.f.PopOut,
                  onClick: this.onOpenAppControllerBindingSettings,
                },
                Object(h.c)("#Controller_Bindings")
              ),
            a &&
              c.createElement(
                K.e,
                { icon: K.f.PopOut, onClick: this.onOpenAppVideoSettings },
                Object(h.c)("#App_Video_Settings")
              ),
            !i &&
              s &&
              c.createElement(
                d.a,
                { className: "ButtonControl", onClick: this.onExitApp },
                Object(h.c)("#Exit_Game")
              )
          )
        );
      }
    }
    Object(s.b)([a.bind], Q.prototype, "onExitApp", null),
      Object(s.b)([a.bind], Q.prototype, "onReturnToGame", null),
      Object(s.b)(
        [a.bind],
        Q.prototype,
        "onOpenAppControllerBindingSettings",
        null
      ),
      Object(s.b)([a.bind], Q.prototype, "onOpenAppVideoSettings", null);
    var X,
      Y,
      J,
      Z = r("Vp/w"),
      $ = r("CzjV"),
      ee = r("5/du"),
      te = r("vvDA"),
      re = r("X3sx"),
      ne = r("8GAN");
    r.d(t, "b", function () {
      return Y;
    }),
      r.d(t, "a", function () {
        return oe;
      }),
      (function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
      })(Y || (Y = {}));
    class ie extends c.Component {
      componentDidMount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRChaperone.ForceBoundsVisible(!0);
      }
      componentWillUnmount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRChaperone.ForceBoundsVisible(!1);
      }
      render() {
        return null;
      }
    }
    function se(e) {
      var t, r;
      return (
        null !=
          (r = null === (t = e) || void 0 === t ? void 0 : t.startsWith(u.n)) &&
        r
      );
    }
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Power = 1)] = "Power"),
        (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
        (e[(e.Volume = 3)] = "Volume"),
        (e[(e.Windows = 4)] = "Windows");
    })(J || (J = {}));
    let oe = (X = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_mapExternalOverlays = {}),
          (this.m_setSuppressingFade = new Set()),
          (this.m_mailbox = new o.c()),
          (this.m_timeoutPopupMenuHide = 0),
          (this.m_refPopupMenu = c.createRef()),
          (this.m_appStateChangedAutorunDisposer = null),
          (this.m_refDesktopView = c.createRef()),
          (this.m_refDesktopTray = c.createRef()),
          (this.m_refOverlayTransform = c.createRef()),
          (this.m_refVolumeTray = c.createRef()),
          (this.m_sOverlayToSwitchToOnLoad = u.r),
          (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
          (this.m_bQuickStoreShouldReturnToBigPicture = !1),
          (this.m_roomViewChangedEventHandle = null),
          (this.state = {
            bShown: !1,
            sActiveOverlayID: null,
            bDesktopDarkMode: !1,
            bTheaterMode: !1,
            bMuted: !1,
            sLastShownAppKey: "",
            eShowPopupMenu: J.None,
            setForcingBoundsVisible: {},
            mapWindows: new Map(),
            desktopViewDebugInfo: {
              inputFrameTime: 0,
              mapOverlayFrameTimes: new Map(),
            },
            bWindowViewEnabled: !1,
            mapOverlayState: new Map(),
            bKeyboardVisible: !1,
            bLaserMouseSuppressionActive: !1,
            bPlacementModeActive: !1,
          }),
          (window.setDashboardScale = (e) => (X.s_dashboardUserScale = e)),
          (window.setDashboardDistance = (e) =>
            (X.s_dashboardUserDistance = e)),
          p.d.Init(!1),
          o.hb.getInstance(),
          this.m_mailbox.Init(X.k_sDashboardMailboxName).then(() => {
            this.m_mailbox.RegisterHandler(
              X.k_sSetDashboardFadeSupressionMessage,
              this.OnSetDashboardFadeSuppression
            ),
              this.m_mailbox.RegisterHandler(
                X.k_sOverlayKeyboardClosedMessage,
                this.onKeyboardClosed
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sDashboardOverlayCreatedMessage,
                this.onDashboardOverlayCreated
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sDashboardOverlayDestroyedMessage,
                this.onDashboardOverlayDestroyed
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sUpdateDashboardTabsMessage,
                this.onUpdateDashboardTabs
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sWindowViewCreatedMessage,
                this.onWindowViewCreated
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sWindowViewDestroyedMessage,
                this.onWindowViewDestroyed
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sUpdateWindowListMessage,
                this.onUpdateWindowList
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sUpdateDebugInfoMessage,
                this.onUpdateDebugInfo
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sSetDashboardForceBoundsVisible,
                this.OnSetDashboardForceBoundsVisible
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sLaserMouseSuppressionUpdate,
                this.onLaserMouseSuppressionUpdate
              );
          });
      }
      componentDidMount() {
        var e, t;
        (window.Dashboard = this),
          (this.m_roomViewChangedEventHandle =
            null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VRCompositor.RegisterForRoomViewChangedEvents(
                  this.onRoomViewChanged
                ));
        const r =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.GetVRStartupReason(),
          n =
            r == o.G.AppLaunch_Unknown ||
            r == o.G.AppLaunch_Steam ||
            r == o.G.Unknown,
          i = p.d.settings.get(
            "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
          ),
          s = p.d.settings.get("/settings/steamvr/enableHomeApp"),
          a = p.d.settings.get(u.m);
        ((n || (!i && s)) && !a) ||
          setTimeout(() => {
            var e;
            return null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VROverlay.ShowDashboard(null != a ? a : "");
          }, 500),
          (this.m_appStateChangedAutorunDisposer = Object(b.e)(() => {
            const e = q.a.Instance.SceneApplicationState != o.w.None;
            this.isOverlayActive(u.p) && !e && this.switchToOverlay(u.r);
          })),
          VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach((e) => {
            this.initializeOverlayState(e);
          }),
          this.updateSiblingReferences();
      }
      componentDidUpdate(e, t) {
        var r;
        const n = this.getActiveOverlaySummonKey();
        let i = !1;
        t.bShown !== this.state.bShown &&
          ($.b.Instance.playSound(
            this.state.bShown ? $.a.DashboardOpen : $.a.DashboardClose
          ),
          (i = !0));
        if (
          this.state.bShown &&
          !i &&
          t.sActiveOverlayID != this.state.sActiveOverlayID
        )
          switch (n) {
            case u.D:
              $.b.Instance.playSound($.a.ThemeSettings);
              break;
            case u.k:
              $.b.Instance.playSound($.a.ThemeDesktop);
              break;
            case u.r:
              $.b.Instance.playSound($.a.ThemeLibrary);
              break;
            case u.s:
              $.b.Instance.playSound($.a.ThemeStore);
              break;
            case u.p:
              $.b.Instance.playSound($.a.ThemeNowPlaying);
          }
        const s = this.getActiveOverlayKey(),
          a = s ? this.state.mapOverlayState.get(s) : null,
          l = s ? t.mapOverlayState.get(s) : null,
          c = a && l && a.fScale != l.fScale;
        if (
          ((t.sActiveOverlayID != this.state.sActiveOverlayID || c) &&
            a &&
            this.isDesktopOverlayActive() &&
            (null === (r = this.m_refDesktopView.current) ||
              void 0 === r ||
              r.onDesktopScaleChange(a.fScale)),
          t.sActiveOverlayID != this.state.sActiveOverlayID &&
            (this.setState({ bKeyboardVisible: !1 }),
            this.isOverlayActive(u.H)))
        )
          switch (T.b.Instance.lastBigPictureEntryPoint) {
            case T.a.QuickLaunch:
              this.m_bQuickLaunchShouldReturnToBigPicture = !0;
              break;
            case T.a.QuickStore:
              this.m_bQuickStoreShouldReturnToBigPicture = !0;
          }
        if (t.bKeyboardVisible != this.state.bKeyboardVisible)
          if (this.state.bKeyboardVisible) {
            let e = this.getActiveOverlayKey();
            VRHTML.VROverlay.ShowKeyboardForOverlay(
              e,
              o.q.Normal,
              o.p.SingleLine,
              o.o.Minimal,
              "Desktop Text",
              1024,
              "",
              0
            ),
              VRHTML.VROverlay.SetKeyboardPositionForOverlay(e, {});
          } else VRHTML.VROverlay.HideKeyboard();
        if (t.bTheaterMode != this.state.bTheaterMode) {
          let e = {
            type: "set_laser_mouse_suppression_enabled",
            suppression_enabled: this.state.bTheaterMode,
            suppress_immediately: !1,
          };
          this.m_mailbox.SendMessage("vrcompositor_systemlayer", e);
        }
        this.updateSiblingReferences();
      }
      initializeOverlayState(e) {
        var t;
        let r = 1;
        if (e.startsWith("system.desktop.")) {
          let n = "/settings/dashboard/desktopScale" + e.split(".")[2];
          r = null != (t = p.d.settings.get(n)) ? t : 1;
        }
        let n = {
          dockLocation: g.i.Dashboard,
          refOverlayWidget: c.createRef(),
          xfInitial: null,
          fScale: r,
        };
        this.state.mapOverlayState.set(e, n);
      }
      updateSiblingReferences() {
        var e;
        null === (e = this.m_refDesktopTray.current) ||
          void 0 === e ||
          e.setSiblingReferences(this.m_refDesktopView.current);
      }
      componentWillUnmount() {
        clearTimeout(this.m_timeoutHoverStateEnd),
          clearTimeout(this.m_timeoutPopupMenuHide),
          this.m_appStateChangedAutorunDisposer &&
            (this.m_appStateChangedAutorunDisposer(),
            (this.m_appStateChangedAutorunDisposer = null)),
          Object(o.ib)(1),
          this.m_roomViewChangedEventHandle &&
            (this.m_roomViewChangedEventHandle.unregister(),
            (this.m_roomViewChangedEventHandle = null));
      }
      static getDashboardDistance() {
        if (X.s_dashboardUserDistance) return X.s_dashboardUserDistance;
        const e = p.d.settings.get(u.q);
        return e == Y.Near
          ? 0.925
          : e == Y.Screenshot_Only
          ? 5
          : e == Y.Middle
          ? 1.05
          : 1.2;
      }
      static getDashboardVerticalPosition() {
        var e;
        const t =
            0.01 *
            (null !=
            (e = p.d.settings.get("/settings/dashboard/verticalOffsetCm_2"))
              ? e
              : 0),
          r = p.d.settings.get(u.q);
        return r == Y.Screenshot_Only
          ? -0.57
          : r == Y.Near
          ? -0.07 + t
          : r == Y.Middle
          ? -0.08 + t
          : -0.09 + t;
      }
      static getDashboardScale() {
        var e, t;
        if (X.s_dashboardUserScale) return X.s_dashboardUserScale;
        let r = 1;
        const n = p.d.settings.get(u.q),
          i = n == Y.Screenshot_Only;
        return (
          (r = i ? 2 : n == Y.Near ? 0.36 : n == Y.Middle ? 0.41 : 0.47),
          i ||
            (r *=
              null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetFloatProperty(
                      o.qb,
                      o.z.DashboardScale_Float
                    ))
                ? t
                : 1),
          r
        );
      }
      OnSetDashboardFadeSuppression(e) {
        e.suppress_dashboard_fade
          ? this.m_setSuppressingFade.add(e.for_id)
          : this.m_setSuppressingFade.delete(e.for_id),
          this.forceUpdate();
      }
      onRoomViewChanged() {
        this.forceUpdate();
      }
      OnSetDashboardForceBoundsVisible(e) {
        this.setState((t, r) => {
          let n = Object.assign({}, t.setForcingBoundsVisible);
          return (
            (n[e.for_overlay_key] = new Set(n[e.for_overlay_key])),
            e.force_bounds_visible
              ? n[e.for_overlay_key].add(e.for_id)
              : n[e.for_overlay_key].delete(e.for_id),
            { setForcingBoundsVisible: n }
          );
        });
      }
      onLaserMouseSuppressionUpdate(e) {
        this.setState({ bLaserMouseSuppressionActive: e.suppression_active });
      }
      onDashboardOverlayCreated(e) {
        this.initializeOverlayState(e.overlay_key);
      }
      onDashboardOverlayDestroyed(e) {
        var t;
        e.overlay_key.startsWith("system.window.")
          ? null === (t = this.m_refDesktopView.current) ||
            void 0 === t ||
            t.onWindowViewDestroyed(e.overlay_key)
          : e.overlay_key == this.getActiveOverlayKey() &&
            this.switchToOverlay(u.r),
          this.state.mapOverlayState.has(e.overlay_key) &&
            this.state.mapOverlayState.delete(e.overlay_key);
      }
      onUpdateDashboardTabs(e) {
        (this.m_mapExternalOverlays = {}),
          e.tabs.forEach((e) => {
            e.mountable_id && (this.m_mapExternalOverlays[e.mountable_id] = e);
          }),
          this.m_sOverlayToSwitchToOnLoad &&
            this.hasOverlay(this.m_sOverlayToSwitchToOnLoad) &&
            (this.switchToOverlay(this.m_sOverlayToSwitchToOnLoad),
            (this.m_sOverlayToSwitchToOnLoad = null)),
          this.forceUpdate();
      }
      onWindowViewCreated(e) {
        var t, r;
        this.switchToOverlay(u.k),
          null === (t = this.m_refDesktopView.current) ||
            void 0 === t ||
            t.onWindowViewCreated(e.overlay_key, e.hwnd),
          null === (r = this.m_refDesktopTray.current) ||
            void 0 === r ||
            r.onWindowViewCreated(e.overlay_key, e.hwnd);
      }
      onWindowViewDestroyed(e) {}
      onUpdateWindowList(e) {
        var t;
        let r = new Map();
        e.windows.forEach((e) => {
          r.set(e.hwnd, e);
        }),
          this.setState({
            mapWindows: r,
            bWindowViewEnabled: ((t = p.d.settings.get(u.w)), null == t || t),
          });
      }
      onUpdateDebugInfo(e) {
        let t = {
          inputFrameTime: e.input_frame_time,
          mapOverlayFrameTimes: new Map(),
        };
        e.overlay_frame_times.forEach((e) => {
          t.mapOverlayFrameTimes.set(e.overlay_key, e.frame_time);
        }),
          this.setState({ desktopViewDebugInfo: t });
      }
      onDockOverlay(e, t, r) {
        var n, i;
        if (
          ((t != g.i.LeftHand && t != g.i.RightHand) ||
            this.state.mapOverlayState.forEach((e, r) => {
              e.dockLocation == t && (e.dockLocation = g.i.Dashboard);
            }),
          (this.state.mapOverlayState.get(e).dockLocation = t),
          (this.state.mapOverlayState.get(e).xfInitial = r),
          t === g.i.Dashboard)
        )
          if (e.startsWith(u.L)) {
            const t = Number.parseInt(e.substring(u.L.length + 1));
            null === (n = this.m_refDesktopView.current) ||
              void 0 === n ||
              n.onDesktopChange(t);
          } else
            e.startsWith(u.N) &&
              (null === (i = this.m_refDesktopView.current) ||
                void 0 === i ||
                i.onWindowViewChange(e));
        this.forceUpdate();
      }
      renderActiveOverlay() {
        if (null === this.state.sActiveOverlayID) return null;
        const e = this.getActiveOverlay();
        if (!e) return null;
        const t = this.getActiveOverlayKey(),
          r = this.state.mapOverlayState.get(t),
          n = r ? r.fScale : 1;
        return c.createElement(o.U, {
          mountedId: e.mountable_id,
          fDashboardScale: n,
        });
      }
      computeFilteredOverlayTabs() {
        if (this.screenshotMode) return [];
        let e = [];
        for (let t in this.m_mapExternalOverlays) {
          const r = this.m_mapExternalOverlays[t];
          (void 0 === r.icon_overlay_key && null == r.icon_uri) ||
            (r.summon_overlay_key &&
              r.summon_overlay_key != u.D &&
              r.summon_overlay_key != u.H &&
              r.summon_overlay_key != u.I &&
              (r.summon_overlay_key.startsWith(u.L) ||
                r.summon_overlay_key.startsWith(u.N) ||
                r.summon_overlay_key.startsWith(u.J) ||
                se(r.summon_overlay_key) ||
                e.push(r)));
        }
        return (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e;
      }
      findDashboardTab(e) {
        for (let t in this.m_mapExternalOverlays) {
          let r = this.m_mapExternalOverlays[t];
          if (r.summon_overlay_key == e) return r;
        }
        return null;
      }
      switchToOverlay(e, t) {
        var r, n, i;
        switch (e) {
          case u.H:
            T.b.Instance.latchBigPictureEntryPoint();
            break;
          case u.r:
            this.m_bQuickLaunchShouldReturnToBigPicture = !1;
            break;
          case u.s:
            this.m_bQuickStoreShouldReturnToBigPicture = !1;
            break;
          case u.h:
            let t = {
                type: "show_app_binding",
                app_key:
                  null === (r = VRHTML) || void 0 === r
                    ? void 0
                    : r.VRApplications.GetSceneApplicationKey(),
              },
              n = "bindingui/" + o.I[Object(o.i)()];
            this.m_mailbox.SendMessage(n, t),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (e = u.c);
        }
        if (e.startsWith(u.L)) {
          const t = Number.parseInt(e.substring(u.L.length + 1));
          Number.isSafeInteger(t) &&
            (null === (n = this.m_refDesktopView.current) ||
              void 0 === n ||
              n.onDesktopChange(t)),
            (e = u.k);
        }
        let s = this.findDashboardTab(e);
        return s
          ? (this.computeFilteredOverlayTabs().includes(s) &&
              p.d.SetSettingsValue(
                u.A,
                null != (i = s.summon_overlay_key) ? i : ""
              ),
            this.setState({ sActiveOverlayID: s.mountable_id }),
            P.a.instance.RecordUIEvent(
              "SetDashboardOverlay",
              null != t ? t : "Button",
              e
            ),
            !0)
          : ((this.m_sOverlayToSwitchToOnLoad = e), !1);
      }
      getActiveOverlay() {
        var e;
        return this.state.sActiveOverlayID
          ? null !=
            (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID])
            ? e
            : null
          : null;
      }
      getActiveOverlaySummonKey() {
        var e, t;
        return null !=
          (t =
            null === (e = this.getActiveOverlay()) || void 0 === e
              ? void 0
              : e.summon_overlay_key)
          ? t
          : null;
      }
      getActiveOverlayKey() {
        var e;
        let t = this.getActiveOverlaySummonKey();
        return t == u.k
          ? null === (e = this.m_refDesktopView.current) || void 0 === e
            ? void 0
            : e.sCurrentOverlayKey
          : t;
      }
      hideMessageOverlay() {
        this.getActiveOverlaySummonKey() == u.B && this.switchToOverlay(u.r);
      }
      show(e) {
        if (this.isShown()) return;
        P.a.instance.StartDashboardSession(e);
        this.m_mailbox.SendMessage("desktopview", {
          type: "request_window_list_update",
        });
        const t = q.a.Instance.SceneAppKey,
          r = q.a.Instance.SceneAppIsHome;
        t &&
          t != this.state.sLastShownAppKey &&
          (this.setState({ sLastShownAppKey: t }),
          this.switchToOverlay(r ? u.r : u.p)),
          this.setState({ bShown: !0 });
        let n = { type: X.k_sRequestDashboardTabsMessage };
        this.m_mailbox.SendMessage("vrcompositor_systemlayer", n),
          Object(o.eb)();
      }
      hide(e) {
        this.isShown() &&
          (this.setState({ bShown: !1, eShowPopupMenu: J.None }),
          P.a.instance.EndDashboardSession(e));
      }
      isShown() {
        return this.state.bShown;
      }
      setPlacementModeActive(e) {
        this.setState({ bPlacementModeActive: e });
      }
      onToggleRoomView() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRControlPanel.SetCameraRoomViewVisible(
            !VRHTML.VRControlPanel.GetCameraRoomViewVisible()
          );
      }
      onQuickLaunchButtonClick() {
        this.m_bQuickLaunchShouldReturnToBigPicture &&
        T.b.Instance.lastBigPictureEntryPoint == T.a.QuickLaunch &&
        !this.isOverlayActive(u.H)
          ? T.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(u.r);
      }
      onQuickStoreButtonClick() {
        this.m_bQuickStoreShouldReturnToBigPicture &&
        T.b.Instance.lastBigPictureEntryPoint == T.a.QuickStore &&
        !this.isOverlayActive(u.H)
          ? T.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(u.s);
      }
      getDashboardIconUri(e) {
        var t;
        try {
          if ("turn_signal_menu.thumb" == e.icon_overlay_key)
            return "/dashboard/images/icons/turnsignal.svg";
          if (e.icon_uri) return e.icon_uri;
          if (e.icon_overlay_key)
            return null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.VRDashboardManager.GetOverlayImage(e.icon_overlay_key);
        } catch (e) {}
        return null;
      }
      renderPowerMenu() {
        var e;
        const t = !!(null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.SceneAppRunning()),
          r = p.d.settings.get("/settings/dashboard/allowAppQuitting"),
          n = p.d.settings.get("/settings/dashboard/allowSystemShutdown");
        let i = !1;
        if (VRHTML) {
          VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
            (i = VRHTML.VRProperties.GetBoolProperty(
              VRHTML.VROverlay.GetPrimaryDashboardDevice(),
              o.z.DeviceCanPowerOff_Bool
            ));
        }
        const s = q.a.Instance.SceneAppName,
          a = q.a.Instance.SceneAppIsHome;
        let l, d;
        (l = a
          ? Object(h.c)("#Exit_SteamVR_Home")
          : s
          ? Object(h.c)("#PowerMenuQuitSceneApp", s)
          : Object(h.c)("#PowerMenuQuitSceneApp_NoApp")),
          (d = a
            ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
            : "/dashboard/images/icons/svr_app_quit.svg");
        const m = this.findDashboardTab(u.H);
        return this.renderPopupMenu(
          c.createElement(
            c.Fragment,
            null,
            m &&
              c.createElement(g.k, {
                label: Object(h.c)("#PowerMenuSteamOverlay"),
                lineBelow: !0,
                onClick: () => {
                  this.switchToOverlay(u.H), this.showPopupMenu(J.None);
                },
              }),
            i &&
              c.createElement(g.k, {
                label: Object(h.c)("#PowerMenuTurnOffController"),
                imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                onClick: () => {
                  var e;
                  null === (e = VRHTML) ||
                    void 0 === e ||
                    e.TurnOffVRController(),
                    this.showPopupMenu(J.None);
                },
              }),
            r &&
              t &&
              c.createElement(g.k, {
                label: l,
                imageUrl: d,
                onClick: () => {
                  var e;
                  null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
                    this.showPopupMenu(J.None);
                },
              }),
            c.createElement(g.k, {
              label: Object(h.c)("#PowerMenuExitVR"),
              imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
              onClick: () => {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.QuitOpenVR();
              },
            }),
            n &&
              c.createElement(g.k, {
                label: Object(h.c)("#PowerMenuShutdown"),
                imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                onClick: () => {
                  var e;
                  return null === (e = VRHTML) || void 0 === e
                    ? void 0
                    : e.ShutdownSystem();
                },
              })
          )
        );
      }
      startPopupMenuTimeout(e) {
        this.m_timeoutPopupMenuHide = window.setTimeout(() => {
          this.setState({ eShowPopupMenu: J.None });
        }, e);
      }
      clearPopupMenuTimeout() {
        this.m_timeoutPopupMenuHide &&
          (clearTimeout(this.m_timeoutPopupMenuHide),
          (this.m_timeoutPopupMenuHide = 0));
      }
      showPopupMenu(e) {
        this.setState({ eShowPopupMenu: e }), this.clearPopupMenuTimeout();
      }
      renderPopupMenu(e) {
        return c.createElement(
          "div",
          {
            className: "PowerMenuContainer",
            onMouseLeave: this.popupMenuMouseLeave,
            onMouseEnter: this.clearPopupMenuTimeout,
            ref: this.m_refPopupMenu,
          },
          c.createElement(d.b, { className: "PowerMenuPanel" }, e)
        );
      }
      popupMenuMouseLeave(e) {
        0 == e.buttons
          ? this.startPopupMenuTimeout(100)
          : window.document.addEventListener("mouseup", this.popupMenuMouseUp);
      }
      popupMenuMouseUp(e) {
        window.document.removeEventListener("mouseup", this.popupMenuMouseUp),
          this.m_refPopupMenu.current &&
            !(function (e, t, r) {
              let n = r.getBoundingClientRect();
              return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
            })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
            this.startPopupMenuTimeout(100);
      }
      renderStatusBarTitle() {
        var e, t, r, n;
        let i = this.getActiveOverlay();
        if (!i) return null;
        if (
          (i.summon_overlay_key == u.H &&
            (T.b.Instance.lastBigPictureEntryPoint == T.a.QuickLaunch
              ? (i = this.findDashboardTab(u.r))
              : T.b.Instance.lastBigPictureEntryPoint == T.a.QuickStore &&
                (i = this.findDashboardTab(u.s))),
          i.summon_overlay_key == u.k)
        ) {
          if (
            -1 ==
            (null === (e = this.m_refDesktopView.current) || void 0 === e
              ? void 0
              : e.currentDesktopIndex)
          ) {
            let e =
              null === (t = this.m_refDesktopView.current) || void 0 === t
                ? void 0
                : t.currentWindowHwnd;
            return c.createElement(g.n, {
              name:
                null === (r = this.state.mapWindows.get(e)) || void 0 === r
                  ? void 0
                  : r.title,
              iconUrl: this.getDashboardIconUri(i),
            });
          }
          return c.createElement(g.n, {
            name:
              "Desktop " +
              (null === (n = this.m_refDesktopView.current) || void 0 === n
                ? void 0
                : n.currentDesktopIndex),
            iconUrl: this.getDashboardIconUri(i),
          });
        }
        return i.summon_overlay_key == u.c
          ? c.createElement(g.n, {
              name: Object(h.c)("#BindingUI_WindowTitle_ControllerBinding"),
              iconUrl: "/dashboard/images/icons/svr_settings.svg",
            })
          : c.createElement(g.n, {
              name: i.tab_name,
              iconUrl: this.getDashboardIconUri(i),
            });
      }
      get isDarkMode() {
        return (
          (this.state.bDesktopDarkMode && this.isOverlayActive(u.k)) ||
          this.state.bTheaterMode
        );
      }
      get screenshotMode() {
        return p.d.settings.get(u.q) == Y.Screenshot_Only;
      }
      get isTheaterMode() {
        return this.state.bTheaterMode;
      }
      getCollisionBoundsFadeVisualizationElements() {
        var e, t;
        const r =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
        if (!r) return [];
        let n = [];
        const i = null != (t = p.d.settings.get(u.g)) ? t : 0.7;
        for (let e of r) {
          let t = Object(o.Y)(Object(o.kb)(e[3], e[0])),
            r = Object(o.Y)(Object(o.kb)(e[1], e[0])),
            s = Object(o.h)(t, r),
            a = Object(o.T)(Object(o.b)(t, r, s)),
            l = Object(o.P)(Object(o.kb)(e[0], e[3]));
          if (l < 0.4) continue;
          let d = Math.max(1, Math.floor(l));
          for (let t = 0; t < d; t++) {
            let r = (t + 1) / (d + 1),
              s = Object(o.g)();
            (s.rotation = a),
              (s.translation = Object(o.Q)(r, e[0], e[3])),
              (s.scale = { x: 0.005, y: 0.005, z: i });
            let l = c.createElement(
              o.nb,
              { transform: s },
              c.createElement(
                o.Z,
                { value: 0.25 },
                c.createElement(
                  o.lb,
                  { color: { r: 0.2, g: 0.2, b: 0.2 } },
                  c.createElement(o.fb, {
                    source: "laser_pointer",
                    wireframe: !1,
                    culling: o.v.Backface,
                  })
                )
              )
            );
            n.push(l);
          }
          if (n.length > 20) break;
        }
        return n;
      }
      render() {
        if (this.state.bShown) {
          const e =
              this.m_setSuppressingFade.size > 0 &&
              this.getActiveOverlaySummonKey() == u.D,
            t = p.d.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
            ),
            r = !q.a.Instance.SceneAppIsHome || !t;
          this.screenshotMode
            ? Object(o.ib)(0)
            : r && !e
            ? this.isDarkMode
              ? Object(o.ib)(0.1)
              : q.a.Instance.SceneApplicationState !== o.w.None
              ? Object(o.ib)(0.15)
              : Object(o.ib)(1)
            : Object(o.ib)(1);
        } else Object(o.ib)(1);
        const e = this.getActiveOverlaySummonKey(),
          t = this.state.bShown && this.state.setForcingBoundsVisible[e],
          r = t && t.size > 0;
        let n = [];
        return (
          r && (n = this.getCollisionBoundsFadeVisualizationElements()),
          c.createElement(
            "div",
            { className: "DashboardMain" },
            r && c.createElement(ie, null),
            r && c.createElement("span", null, n),
            this.state.bShown && this.renderDashboard(),
            this.renderInternalOverlays(),
            this.renderOverlayWidgets()
          )
        );
      }
      hasOverlay(e) {
        return Object.values(this.m_mapExternalOverlays).some(
          (t) => t.summon_overlay_key == e
        );
      }
      isOverlayActive(e) {
        return (
          !!this.state.sActiveOverlayID && this.getActiveOverlaySummonKey() == e
        );
      }
      get statusBarAnchorID() {
        let e = this.getActiveOverlayKey(),
          t =
            this.state.mapOverlayState.has(e) &&
            (this.state.mapOverlayState.get(e).dockLocation == g.i.LeftHand ||
              this.state.mapOverlayState.get(e).dockLocation == g.i.RightHand);
        return se(this.getActiveOverlaySummonKey()) || t
          ? g.t
          : this.state.sActiveOverlayID + "_TopCenter";
      }
      get controlBarAnchorID() {
        let e = this.getActiveOverlayKey(),
          t =
            this.state.mapOverlayState.has(e) &&
            (this.state.mapOverlayState.get(e).dockLocation == g.i.LeftHand ||
              this.state.mapOverlayState.get(e).dockLocation == g.i.RightHand);
        return se(this.getActiveOverlaySummonKey()) || t
          ? g.s
          : this.state.sActiveOverlayID + "_BottomCenter";
      }
      renderExternalOverlayControlBarButton(e) {
        const t = this.getDashboardIconUri(e),
          r = g.c.Center;
        return c.createElement(g.b, {
          key: e.mountable_id,
          label: e.tab_name,
          imageUrl: t,
          imageStyle: r,
          active: this.isOverlayActive(e.summon_overlay_key),
          onClick: () => this.switchToOverlay(e.summon_overlay_key),
        });
      }
      isDesktopTrayActive() {
        var e;
        return (
          (this.isOverlayActive(u.k) ||
            (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
              ? void 0
              : e.startsWith("system.window"))) &&
          (this.state.eShowPopupMenu == J.None ||
            this.state.eShowPopupMenu == J.Windows)
        );
      }
      isDesktopOverlayActive() {
        var e;
        return (
          this.isOverlayActive(u.k) ||
          (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
            ? void 0
            : e.startsWith("system.window"))
        );
      }
      getPeerButtonInfo() {
        var e;
        const t =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRProperties.GetStringProperty(0, o.z.PeerButtonInfo_String);
        if (t) return JSON.parse(t);
      }
      handlePeerButton() {
        const e = this.getPeerButtonInfo();
        if (!e) return;
        let t = { type: e.sMessageType };
        (t.whichDevice = VRHTML.VROverlay.GetPrimaryDashboardDevice()),
          this.m_mailbox.SendMessage(e.sMailbox, t);
      }
      renderControlBar(e, t) {
        var r, n, i, s, a, l, m, b, v, y;
        const f = this.state.bLaserMouseSuppressionActive ? 0.5 : 1,
          S = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
          O = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
          k = X.k_nControlBarWidthMeters,
          C =
            null ==
              (r = p.d.settings.get("/settings/dashboard/showPowerOptions")) ||
            r,
          w =
            null == (n = p.d.settings.get("/settings/dashboard/showDesktop")) ||
            n,
          M =
            null ==
              (i = p.d.settings.get("/settings/dashboard/showQuickStore")) || i,
          D = !(
            null != (s = p.d.settings.get("/settings/dashboard/arcadeMode")) &&
            s
          ),
          R = this.getPeerButtonInfo(),
          E = VRHTML.BIsLinkStreamActive(),
          I = VRHTML.BIsLinkServer(),
          P = E || I,
          x = q.a.Instance.SceneApplicationState,
          V = q.a.Instance.SceneAppIsHome,
          L =
            null ==
              (a = p.d.settings.get("/settings/dashboard/allowCurvature")) || a
              ? u.j
              : null,
          B = q.a.Instance.SceneAppKey;
        let N = "images/appimage_default.png";
        B && (N = "/app/image?app_key=" + B);
        const H = null != (l = p.d.settings.get(u.d)) && l,
          A = null != (m = p.d.settings.get(u.e)) ? m : 0,
          F = H && A > 0,
          j =
            null !=
              (b = p.d.settings.get("/settings/dashboard/allowTheaterMode")) &&
            b;
        let U = { y: -0.25, z: 0 };
        return (
          this.isOverlayActive(u.k) && (U = { y: -0.4, z: 0 }),
          c.createElement(
            o.Z,
            { value: f },
            c.createElement(
              o.lb,
              { color: S },
              c.createElement(
                o.ab,
                {
                  curvature_origin_id: L,
                  width: k,
                  interactive: !1,
                  debug_name: "ControlBarBackground",
                  sampler: o.u.SingleTap,
                  reflect: 0.05,
                },
                c.createElement("div", { className: "ControlBarBackground" })
              ),
              c.createElement(
                o.nb,
                { translation: { z: 1e-5 } },
                c.createElement(
                  o.ab,
                  {
                    curvature_origin_id: L,
                    width: k,
                    interactive: !0,
                    id: g.r,
                    debug_name: "Controls",
                  },
                  c.createElement(
                    d.b,
                    { className: "ControlBar MainControlBar" },
                    c.createElement(
                      "div",
                      { className: "Section Left" },
                      C &&
                        c.createElement(g.l, {
                          imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                          label: Object(h.c)("#Menu"),
                          style: g.d.Small,
                          onClick: () => this.showPopupMenu(J.Power),
                          onMouseEnter: this.clearPopupMenuTimeout,
                          onMouseLeave: () => this.startPopupMenuTimeout(500),
                        }),
                      w &&
                        c.createElement(g.l, {
                          style: g.d.Small,
                          imageUrl:
                            "/dashboard/images/icons/svr_desktop_alt.svg",
                          label: Object(h.c)("#Desktops"),
                          active: this.isDesktopTrayActive(),
                          onClick: () => this.switchToOverlay(u.k),
                        }),
                      c.createElement(
                        g.e,
                        { style: g.d.Small },
                        c.createElement(
                          c.Fragment,
                          null,
                          e.map(this.renderExternalOverlayControlBarButton),
                          t.length > 0 &&
                            c.createElement(g.b, {
                              imageUrl: "/dashboard/images/icons/svr_more.svg",
                              label: Object(h.c)("#X_More_Overlays", t.length),
                              active:
                                this.state.eShowPopupMenu == J.ExternalOverlays,
                              onClick: () =>
                                this.showPopupMenu(J.ExternalOverlays),
                              onMouseEnter: this.clearPopupMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopupMenuTimeout(500),
                            })
                        )
                      )
                    ),
                    c.createElement(
                      "div",
                      { className: "Section Center" },
                      c.createElement(g.l, {
                        label: Object(h.c)("#Library"),
                        imageUrl: "/dashboard/images/icons/svr_items.svg",
                        active:
                          this.isOverlayActive(u.r) ||
                          (this.isOverlayActive(u.H) &&
                            T.b.Instance.lastBigPictureEntryPoint ==
                              T.a.QuickLaunch),
                        style: g.d.Large,
                        onClick: this.onQuickLaunchButtonClick,
                      }),
                      x != o.w.None &&
                        c.createElement(
                          "div",
                          { className: "NowPlayingSpacer" },
                          c.createElement(
                            Z.a,
                            { allowableParentSelectors: [".DashboardMain"] },
                            c.createElement(
                              o.lb,
                              { color: S },
                              c.createElement(
                                o.nb,
                                { translation: { z: 0.02 } },
                                c.createElement(
                                  o.ab,
                                  {
                                    debug_name: "NowPlayingButton",
                                    interactive: !0,
                                    target_dpi_panel_id: g.r,
                                    curvature_origin_id: L,
                                  },
                                  c.createElement(
                                    "div",
                                    { className: "ControlBar" },
                                    c.createElement(g.l, {
                                      label: V
                                        ? Object(h.c)("#SteamVR_Home")
                                        : Object(h.c)("#Now_Playing"),
                                      active: this.isOverlayActive(u.p),
                                      style: g.d.App,
                                      imageUrl: N,
                                      onClick: () => this.switchToOverlay(u.p),
                                    })
                                  )
                                )
                              )
                            )
                          )
                        ),
                      M &&
                        c.createElement(g.l, {
                          label: Object(h.c)("#Store"),
                          imageUrl: "/dashboard/images/icons/svr_store.svg",
                          additionalClassNames: "Store",
                          active:
                            this.isOverlayActive(u.s) ||
                            (this.isOverlayActive(u.H) &&
                              T.b.Instance.lastBigPictureEntryPoint ==
                                T.a.QuickStore),
                          style: g.d.Large,
                          onClick: this.onQuickStoreButtonClick,
                        })
                    ),
                    c.createElement(
                      "div",
                      { className: "Section Right" },
                      c.createElement(
                        g.e,
                        { style: g.d.Small },
                        j &&
                          c.createElement(g.b, {
                            imageUrl: "/dashboard/images/icons/svr_theater.svg",
                            label: "Toggle Theater Mode",
                            onClick: () =>
                              this.setState({
                                bTheaterMode: !this.state.bTheaterMode,
                              }),
                            active: this.state.bTheaterMode,
                          }),
                        c.createElement(g.b, {
                          imageUrl: "/dashboard/images/icons/svr_recenter.svg",
                          additionalClassNames: "CenterImageLarge",
                          label: Object(h.c)("#Button_Recenter"),
                          onClick: () =>
                            this.m_mailbox.SendMessage(ne.b, {
                              type: ne.a,
                              countdown_seconds: 3,
                            }),
                        }),
                        F &&
                          c.createElement(g.b, {
                            imageUrl: "/dashboard/images/icons/svr_eye.svg",
                            label: Object(h.c)("#Toggle_Room_View"),
                            onClick: this.onToggleRoomView,
                            active:
                              null === (v = VRHTML) || void 0 === v
                                ? void 0
                                : v.VRControlPanel.GetCameraRoomViewVisible(),
                            enabled:
                              null === (y = VRHTML) || void 0 === y
                                ? void 0
                                : y.VROverlayInternal.HasCameraRoomViewCapability(),
                          }),
                        c.createElement(g.p, {
                          active: this.state.eShowPopupMenu == J.Volume,
                          refVolumeTray: this.m_refVolumeTray,
                          onShowTray: () => this.showPopupMenu(J.Volume),
                          onHideTray: () => this.showPopupMenu(J.None),
                          onMouseEnter: this.clearPopupMenuTimeout,
                          onMouseLeave: () => this.startPopupMenuTimeout(500),
                        })
                      ),
                      D &&
                        c.createElement(g.l, {
                          imageUrl: "/dashboard/images/icons/svr_settings.svg",
                          active: this.isOverlayActive(u.D),
                          enabled: this.hasOverlay(u.D),
                          label: Object(h.c)("#Settings"),
                          style: g.d.Small,
                          centerPanelAnchorID: "VolumeButton",
                          onClick: () => this.switchToOverlay(u.D),
                        }),
                      P &&
                        R &&
                        c.createElement(g.l, {
                          imageUrl: R.sIcon,
                          active: !1,
                          enabled: !0,
                          label: Object(h.c)(R.sButtonName),
                          style: g.d.Small,
                          centerPanelAnchorID: "VolumeButton",
                          onClick: () => this.handlePeerButton(),
                        })
                    )
                  ),
                  c.createElement(_, {
                    ref: this.m_refDesktopTray,
                    position: 0,
                    visible:
                      this.isDesktopTrayActive() &&
                      !this.state.bLaserMouseSuppressionActive,
                    tintColor: O,
                    bDarkMode: this.state.bDesktopDarkMode,
                    onToggleDarkMode: () =>
                      this.setState({
                        bDesktopDarkMode: !this.state.bDesktopDarkMode,
                      }),
                    onToggleWindowList: () => this.showPopupMenu(J.Windows),
                    onClearPopupMenuTimeout: () => this.clearPopupMenuTimeout(),
                    onStartPopupMenuTimeout: (e) =>
                      this.startPopupMenuTimeout(e),
                    onDockOverlay: this.onDockOverlay,
                    mapWindows: this.state.mapWindows,
                    sort_depth_bias: 0.2,
                    bWindowViewEnabled: this.state.bWindowViewEnabled,
                  }),
                  c.createElement(g.q, {
                    ref: this.m_refVolumeTray,
                    position: 0.337,
                    visible:
                      this.state.eShowPopupMenu == J.Volume &&
                      !this.state.bLaserMouseSuppressionActive,
                    tintColor: O,
                    onFinalChangeMouseOutside: () => {
                      this.startPopupMenuTimeout(800);
                    },
                    onMouseMove: this.clearPopupMenuTimeout,
                    onMouseLeave: this.popupMenuMouseLeave,
                    sort_depth_bias: 0.4,
                  })
                )
              )
            ),
            c.createElement(
              o.nb,
              { translation: U, scale: { y: 1.5, x: 1.5 } },
              c.createElement(o.U, {
                mountedId: Object(o.f)(u.F, "system.keyboard"),
              })
            )
          )
        );
      }
      renderOverlayWidgets() {
        let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
          sOverlayKey: e,
          overlayState: t,
        })).filter((e) => e.overlayState.dockLocation != g.i.Dashboard);
        return c.createElement(
          c.Fragment,
          null,
          e.map((e) =>
            c.createElement(g.j, {
              bVisible: this.state.bShown,
              bTheaterMode: this.state.bTheaterMode,
              dockLocation: e.overlayState.dockLocation,
              onDockOverlay: this.onDockOverlay,
              sOverlayKey: e.sOverlayKey,
              xfInitial: e.overlayState.xfInitial,
              key: e.sOverlayKey,
              ref: e.overlayState.refOverlayWidget,
            })
          )
        );
      }
      isDesktopViewVisible() {
        let e = this.getActiveOverlayKey(),
          t =
            !this.state.mapOverlayState.has(e) ||
            this.state.mapOverlayState.get(e).dockLocation == g.i.Dashboard;
        return this.state.bShown && this.isOverlayActive(u.k) && t;
      }
      onGameLaunched(e) {
        var t, r;
        const n =
          null !=
            (t = p.d.settings.get("/settings/dashboard/allowTheaterMode")) && t;
        e.starts_theater_mode && n && this.setState({ bTheaterMode: !0 }),
          (!e.is_dashboard_overlay ||
            (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
            (null === (r = VRHTML) ||
              void 0 === r ||
              r.VRDashboardManager.HideDashboard("game_launched"));
      }
      renderInternalOverlays() {
        var e, t, r, n;
        const i =
            null !=
            (t =
              null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.currentDesktopIndex)
              ? t
              : 1,
          s =
            null !=
            (n =
              null === (r = this.m_refDesktopView.current) || void 0 === r
                ? void 0
                : r.desktopCount)
              ? n
              : 1;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            o.j,
            {
              tabName: Object(h.c)("#Library"),
              iconUri: "/dashboard/images/icons/svr_items.svg",
              summonOverlayKey: u.r,
            },
            c.createElement(W, {
              visible: this.state.bShown && this.isOverlayActive(u.r),
              onGameLaunched: this.onGameLaunched,
            })
          ),
          c.createElement(
            o.j,
            {
              tabName: Object(h.c)("#Store"),
              iconUri: "/dashboard/images/icons/svr_store.svg",
              summonOverlayKey: u.s,
            },
            c.createElement(N, {
              visible: this.state.bShown && this.isOverlayActive(u.s),
            })
          ),
          c.createElement(
            o.j,
            { tabName: Object(h.c)("#Now_Playing"), summonOverlayKey: u.p },
            c.createElement(Q, {
              visible: this.state.bShown && this.isOverlayActive(u.p),
              onExitGame: () => this.switchToOverlay(u.r),
            })
          ),
          c.createElement(
            o.j,
            {
              summonOverlayKey: u.k,
              tabName:
                s > 1 ? Object(h.c)("#Desktop_X", i) : Object(h.c)("#Desktop"),
              iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
            },
            c.createElement(y, {
              visible: this.isDesktopViewVisible(),
              onDockOverlay: this.onDockOverlay,
              fActiveOverlayScale: this.activeOverlayScale,
              mapWindows: this.state.mapWindows,
              bWindowViewEnabled: this.state.bWindowViewEnabled,
              ref: this.m_refDesktopView,
            })
          ),
          c.createElement(ee.a, {
            visible: this.state.bShown && this.isOverlayActive(u.D),
          })
        );
      }
      toggleKeyboard() {
        this.setState((e) => ({ bKeyboardVisible: !e.bKeyboardVisible }));
      }
      onKeyboardClosed() {
        this.setState({ bKeyboardVisible: !1 });
      }
      get activeOverlayScale() {
        let e = 1;
        if (this.getActiveOverlayKey()) {
          let t = this.state.mapOverlayState.get(this.getActiveOverlayKey());
          t && (e = t.fScale);
        }
        return e;
      }
      onActiveOverlayScaleChange(e) {
        this.setState((t) => {
          const r = new Map(t.mapOverlayState),
            n = Object.assign(
              Object.assign({}, r.get(this.getActiveOverlayKey())),
              { fScale: e }
            );
          return { mapOverlayState: r.set(this.getActiveOverlayKey(), n) };
        });
      }
      onActiveOverlayClosed() {
        var e;
        const t = this.getActiveOverlayKey();
        t &&
          (t.startsWith("system.window.")
            ? null === (e = this.m_refDesktopView.current) ||
              void 0 === e ||
              e.onWindowViewClosed(t)
            : this.switchToOverlay(u.r),
          VRHTML.VRDashboardManager.SendOverlayClosed(t));
      }
      renderOverlayControlBar() {
        var e, t, r, n;
        const i = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
        let s = !1,
          a = !1,
          l = this.getActiveOverlayKey();
        if (l) {
          let e = VRHTML.VROverlay.FindOverlay(l);
          (s =
            !!e && VRHTML.VROverlay.GetFlag(e, o.E.EnableControlBarKeyboard)),
            (a = !!e && VRHTML.VROverlay.GetFlag(e, o.E.EnableControlBarClose));
        }
        const d =
            null != (e = p.d.settings.get("/settings/dashboard/scaleSliderMin"))
              ? e
              : 0.75,
          m =
            null != (t = p.d.settings.get("/settings/dashboard/scaleSliderMax"))
              ? t
              : 1.5,
          b =
            null ==
              (r = p.d.settings.get("/settings/dashboard/allowCurvature")) || r
              ? u.j
              : null,
          v = { x: 0, y: -0.15, z: 0.1 };
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            o.nb,
            { parent_id: this.controlBarAnchorID, translation: { y: 0.003 } },
            c.createElement(
              o.lb,
              { color: i },
              c.createElement(
                o.ab,
                {
                  curvature_origin_id: b,
                  origin: o.t.TopCenter,
                  interactive: !1,
                  target_width_anchor_id: this.controlBarAnchorID,
                  height: 0.15,
                  min_width: 1.66,
                  debug_name: "ActiveOverlayControlBarBackground",
                  sampler: o.u.SingleTap,
                  reflect: 0.1,
                },
                c.createElement("div", {
                  className: "OverlayControlBarBackground",
                })
              )
            )
          ),
          c.createElement(
            o.nb,
            {
              parent_id: this.controlBarAnchorID,
              translation: { y: 0.003, z: 0.001 },
            },
            c.createElement(
              o.lb,
              { color: i },
              c.createElement(
                o.ab,
                {
                  curvature_origin_id: b,
                  origin: o.t.TopCenter,
                  interactive: !0,
                  target_dpi_panel_id: g.r,
                  debug_name: "ActiveOverlayControlBar",
                },
                c.createElement(
                  "div",
                  { className: "OverlayControlBar" },
                  c.createElement(
                    "div",
                    { className: "Section" },
                    c.createElement(
                      "div",
                      { className: "Label" },
                      Object(h.c)("#Size")
                    ),
                    c.createElement(re.a, {
                      additionalClassName: "OverlayControlBarSlider",
                      min: d,
                      max: m,
                      value: this.activeOverlayScale,
                      valueStyleVariant: re.c.OnHandle,
                      onChange: this.onActiveOverlayScaleChange,
                      detents: [1],
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                    }),
                    s &&
                      c.createElement(g.o, {
                        iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                        title: this.state.bKeyboardVisible
                          ? Object(h.c)("#HideKeyboardTooltip")
                          : Object(h.c)("#ShowKeyboardTooltip"),
                        tooltipTranslation: v,
                        additionalClassNames: "Keyboard",
                        onClick: this.toggleKeyboard,
                        active: this.state.bKeyboardVisible,
                      }),
                    c.createElement(g.o, {
                      iconUrl: "/dashboard/images/icons/mirror_left.png",
                      title: Object(h.c)("#DockOnLeftController"),
                      tooltipTranslation: v,
                      onClick: () => {
                        let e = this.getActiveOverlayKey();
                        this.state.mapOverlayState.has(e) &&
                        this.state.mapOverlayState.get(e).dockLocation ==
                          g.i.LeftHand
                          ? this.onDockOverlay(e, g.i.Dashboard)
                          : this.onDockOverlay(e, g.i.LeftHand);
                      },
                      enabled:
                        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                          o.x.TrackedControllerRole_LeftHand
                        ) != o.pb,
                      active:
                        this.state.mapOverlayState.has(
                          this.getActiveOverlayKey()
                        ) &&
                        this.state.mapOverlayState.get(
                          this.getActiveOverlayKey()
                        ).dockLocation == g.i.LeftHand,
                    }),
                    c.createElement(g.o, {
                      iconUrl: "/dashboard/images/icons/mirror_right.png",
                      title: Object(h.c)("#DockOnRightController"),
                      tooltipTranslation: v,
                      onClick: () => {
                        let e = this.getActiveOverlayKey();
                        this.state.mapOverlayState.has(e) &&
                        this.state.mapOverlayState.get(e).dockLocation ==
                          g.i.RightHand
                          ? this.onDockOverlay(e, g.i.Dashboard)
                          : this.onDockOverlay(e, g.i.RightHand);
                      },
                      enabled:
                        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                          o.x.TrackedControllerRole_RightHand
                        ) != o.pb,
                      active:
                        this.state.mapOverlayState.has(
                          this.getActiveOverlayKey()
                        ) &&
                        this.state.mapOverlayState.get(
                          this.getActiveOverlayKey()
                        ).dockLocation == g.i.RightHand,
                    }),
                    c.createElement(g.o, {
                      iconUrl: "/dashboard/images/icons/icon_move.png",
                      title: Object(h.c)("#FloatInWorld"),
                      tooltipTranslation: v,
                      onClick: () => {
                        let e = this.getActiveOverlayKey();
                        this.state.mapOverlayState.has(e) &&
                        this.state.mapOverlayState.get(e).dockLocation ==
                          g.i.World
                          ? this.onDockOverlay(e, g.i.Dashboard)
                          : this.onDockOverlay(e, g.i.World);
                      },
                      active:
                        this.state.mapOverlayState.has(
                          this.getActiveOverlayKey()
                        ) &&
                        this.state.mapOverlayState.get(
                          this.getActiveOverlayKey()
                        ).dockLocation == g.i.World,
                    }),
                    a &&
                      c.createElement(g.o, {
                        iconUrl: "/dashboard/images/icons/icon_close_black.png",
                        title: Object(h.c)("#CloseOverlay"),
                        tooltipTranslation: v,
                        onClick: this.onActiveOverlayClosed,
                      }),
                    this.isDesktopOverlayActive() &&
                      (null === (n = this.m_refDesktopView.current) ||
                      void 0 === n
                        ? void 0
                        : n.renderControlBarButtons(v))
                  )
                )
              )
            )
          )
        );
      }
      renderDashboard() {
        var e, t, r, n, i, s, a;
        const l = this.computeFilteredOverlayTabs(),
          m = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null;
        let b = [],
          v = [],
          _ = null != (e = p.d.settings.get(u.o)) ? e : 2;
        if (l.length > _) {
          const e = p.d.settings.get(u.A);
          (b = [
            ((t = l.find((t) => t.summon_overlay_key == e)),
            null != t ? t : l[0]),
          ]),
            (v = l.filter((e) => !b.includes(e)));
        } else b = l;
        let y = null;
        this.isDesktopOverlayActive() && (y = 2048);
        let f = [];
        this.state.mapWindows.forEach((e) => {
          "" == e.overlay_key && f.push(e);
        });
        const S = this.screenshotMode,
          O = S ? 2.5 : 1.8;
        let k = !1,
          C = !0,
          w = !1,
          M = this.getActiveOverlayKey();
        if (M) {
          let e = VRHTML.VROverlay.FindOverlay(M);
          (w = !!e && VRHTML.VROverlay.GetFlag(e, o.E.EnableControlBar)),
            (C =
              !this.state.mapOverlayState.has(M) ||
              this.state.mapOverlayState.get(M).dockLocation == g.i.Dashboard),
            (k =
              this.state.mapOverlayState.has(M) &&
              this.state.mapOverlayState.get(M).dockLocation == g.i.World);
        }
        this.state.bLaserMouseSuppressionActive && (w = !1);
        const D =
            null !=
            (r = p.d.settings.get("/settings/dashboard/theaterDistance"))
              ? r
              : 4,
          R =
            null != (n = p.d.settings.get("/settings/dashboard/theaterScale"))
              ? n
              : 2,
          T =
            null !=
            (i =
              0.01 *
              p.d.settings.get("/settings/dashboard/theaterVerticalOffsetCm"))
              ? i
              : 0,
          E =
            null ==
              (s = p.d.settings.get("/settings/dashboard/allowCurvature")) || s,
          I = E ? u.j : null;
        let P,
          x,
          V,
          L,
          B,
          N =
            null !=
              (a = p.d.settings.get(
                "/settings/dashboard/enableLTCReflections"
              )) && a,
          H = this.state.bTheaterMode
            ? { y: -1.2, z: 1 }
            : { y: -1.2, z: 0.15 },
          A = this.state.bTheaterMode
            ? { x: 0.75, y: 0.75, z: 0.75 }
            : { x: 1, y: 1, z: 1 },
          F = !E && this.state.bTheaterMode ? 0.75 : 1,
          j = E ? 1 : 0;
        return (
          this.state.bTheaterMode
            ? ((P = { y: -0.8 * R + T, z: -D }),
              (x = R),
              (V = 1.72),
              (L = 0.82),
              (B = 10))
            : ((P = { y: w ? -0.9 : -1.03375, z: 0.05 }),
              (x = 1),
              (V = 2),
              (L = 0.68),
              (B = 5),
              (N = !1)),
          c.createElement(
            o.k,
            { bContinuousRelatch: this.state.bPlacementModeActive },
            c.createElement(o.nb, { id: I, translation: { z: O } }),
            c.createElement(
              o.nb,
              {
                translation: {
                  x: S ? 0.1 : 0,
                  y: X.getDashboardVerticalPosition(),
                  z: -X.getDashboardDistance() * (S ? 1.1 : 1),
                },
                rotation: { x: S ? -20 : 0 },
                scale: X.getDashboardScale(),
              },
              c.createElement(
                o.nb,
                {
                  parent_id: this.statusBarAnchorID,
                  translation: { y: 0.008 },
                  scale: { x: F, y: F },
                },
                c.createElement(
                  o.lb,
                  { color: m },
                  c.createElement(
                    o.ab,
                    {
                      curvature_origin_id: I,
                      origin: o.t.BottomCenter,
                      interactive: !1,
                      target_dpi_panel_id: g.r,
                      debug_name: "StatusBar",
                      reflect: 0.1,
                    },
                    c.createElement(
                      "div",
                      { className: "StatusBar", style: { width: y } },
                      c.createElement(
                        "div",
                        { className: "Section Left" },
                        this.renderStatusBarTitle(),
                        c.createElement(g.m, {
                          role: o.x.TrackedControllerRole_LeftHand,
                          style: te.b.HorizontalPips,
                        })
                      ),
                      c.createElement(
                        "div",
                        { className: "Section Center" },
                        c.createElement(g.m, {
                          deviceIndex: o.qb,
                          style: te.b.VerticalBattery,
                        }),
                        c.createElement(g.g, null)
                      ),
                      c.createElement(
                        "div",
                        { className: "Section Right" },
                        c.createElement(g.m, {
                          role: o.x.TrackedControllerRole_RightHand,
                          style: te.b.HorizontalPips,
                        }),
                        c.createElement(
                          "div",
                          { className: "SteamLogo" },
                          c.createElement("img", {
                            src: "/dashboard/images/icons/vr_steam.svg",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              c.createElement(
                o.nb,
                {
                  id: "active_overlay_transform",
                  translation: P,
                  ref: this.m_refOverlayTransform,
                },
                c.createElement(
                  o.nb,
                  { scale: { x: x, y: x } },
                  !k && C && this.renderActiveOverlay(),
                  !k &&
                    !C &&
                    c.createElement(
                      g.h,
                      {
                        additionalClassNames: w ? "WithControlBar" : "",
                        visible: !0,
                      },
                      c.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        c.createElement(
                          "h2",
                          null,
                          this.state.mapOverlayState.get(M).dockLocation ==
                            g.i.LeftHand &&
                            Object(h.c)("#DockedOnLeftController"),
                          this.state.mapOverlayState.get(M).dockLocation ==
                            g.i.RightHand &&
                            Object(h.c)("#DockedOnRightController")
                        ),
                        c.createElement(
                          d.a,
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              this.onDockOverlay(M, g.i.Dashboard);
                            },
                          },
                          Object(h.c)("#DockHere")
                        )
                      )
                    ),
                  N &&
                    c.createElement(
                      o.nb,
                      { translation: { y: L, z: 0.25 } },
                      c.createElement(o.N, {
                        width: 2.8,
                        height: V,
                        "near-z": -1,
                        "far-z": 1,
                        debug: !1,
                        specular: { color: { r: 0.015, g: 0.015, b: 0.015 } },
                        diffuse: { size: B, resolution: 512 },
                      })
                    )
                )
              ),
              w && C && this.renderOverlayControlBar(),
              c.createElement(
                o.nb,
                { translation: H, scale: A },
                c.createElement(
                  o.nb,
                  { rotation: { x: -35 }, curvature_pitch: -35 },
                  this.renderControlBar(b, v)
                ),
                this.state.eShowPopupMenu == J.Power &&
                  c.createElement(
                    o.nb,
                    {
                      translation: { x: -0.4, y: 0.15, z: 0.05 },
                      rotation: { y: 19 * j },
                    },
                    c.createElement(
                      o.ab,
                      {
                        curvature_origin_id: I,
                        height: void 0,
                        width: 0.925,
                        interactive: !0,
                        origin: o.t.BottomRight,
                        debug_name: "Power Menu",
                        sort_depth_bias: -0.1,
                      },
                      this.renderPowerMenu()
                    )
                  ),
                this.state.eShowPopupMenu == J.ExternalOverlays &&
                  c.createElement(
                    o.nb,
                    {
                      translation: { x: 0.2, y: 0.15, z: 0.05 },
                      rotation: { y: 6 * j },
                    },
                    c.createElement(
                      o.ab,
                      {
                        curvature_origin_id: I,
                        height: void 0,
                        width: 0.925,
                        interactive: !0,
                        origin: o.t.BottomRight,
                        debug_name: "OverlaysList",
                        sort_depth_bias: -0.1,
                      },
                      this.renderPopupMenu(
                        c.createElement(
                          c.Fragment,
                          null,
                          " ",
                          v.map((e) =>
                            c.createElement(g.k, {
                              key: e.mountable_id,
                              imageUrl: this.getDashboardIconUri(e),
                              label: e.tab_name,
                              onClick: () => {
                                this.switchToOverlay(e.summon_overlay_key),
                                  this.showPopupMenu(J.None);
                              },
                            })
                          ),
                          " "
                        )
                      )
                    )
                  ),
                this.state.eShowPopupMenu == J.Windows &&
                  c.createElement(
                    o.nb,
                    {
                      translation: { x: 1.25, y: -0.1, z: 0.35 },
                      rotation: { y: -16 * j },
                    },
                    c.createElement(
                      o.ab,
                      {
                        curvature_origin_id: I,
                        height: void 0,
                        width: 0.925,
                        interactive: !0,
                        origin: o.t.BottomRight,
                        debug_name: "WindowList",
                        sort_depth_bias: -0.1,
                      },
                      this.renderPopupMenu(
                        c.createElement(
                          c.Fragment,
                          null,
                          " ",
                          f.map((e) =>
                            c.createElement(g.k, {
                              key: e.hwnd,
                              imageUrl: "/dashboard/images/icons/icon_add.png",
                              label: e.title,
                              onClick: () => {
                                let t = {
                                  type: "request_spawn_window_view",
                                  hwnd: e.hwnd,
                                };
                                this.m_mailbox.SendMessage("desktopview", t),
                                  this.showPopupMenu(J.None);
                              },
                            })
                          ),
                          " "
                        )
                      )
                    )
                  )
              )
            )
          )
        );
      }
    });
    (oe.k_sDashboardMailboxName = "systemui_dashboard"),
      (oe.k_sSetDashboardFadeSupressionMessage =
        "set_dashboard_fade_suppression"),
      (oe.k_sOverlayKeyboardClosedMessage = "overlay_keyboard_closed"),
      (oe.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
      (oe.k_sDashboardOverlayDestroyedMessage = "dashboard_overlay_destroyed"),
      (oe.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
      (oe.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
      (oe.k_sWindowViewCreatedMessage = "window_view_created"),
      (oe.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
      (oe.k_sUpdateWindowListMessage = "update_window_list"),
      (oe.k_sUpdateDebugInfoMessage = "update_debug_info"),
      (oe.k_sSetDashboardForceBoundsVisible =
        "set_dashboard_force_bounds_visible"),
      (oe.k_sLaserMouseSuppressionUpdate = "laser_mouse_suppression_update"),
      (oe.k_nControlBarWidthMeters = 2.667),
      (oe.s_dashboardUserDistance = void 0),
      (oe.s_dashboardUserScale = void 0),
      Object(s.b)(
        [a.bind],
        oe.prototype,
        "OnSetDashboardFadeSuppression",
        null
      ),
      Object(s.b)([a.bind], oe.prototype, "onRoomViewChanged", null),
      Object(s.b)(
        [a.bind],
        oe.prototype,
        "OnSetDashboardForceBoundsVisible",
        null
      ),
      Object(s.b)(
        [a.bind],
        oe.prototype,
        "onLaserMouseSuppressionUpdate",
        null
      ),
      Object(s.b)([a.bind], oe.prototype, "onDashboardOverlayCreated", null),
      Object(s.b)([a.bind], oe.prototype, "onDashboardOverlayDestroyed", null),
      Object(s.b)([a.bind], oe.prototype, "onUpdateDashboardTabs", null),
      Object(s.b)([a.bind], oe.prototype, "onWindowViewCreated", null),
      Object(s.b)([a.bind], oe.prototype, "onWindowViewDestroyed", null),
      Object(s.b)([a.bind], oe.prototype, "onUpdateWindowList", null),
      Object(s.b)([a.bind], oe.prototype, "onUpdateDebugInfo", null),
      Object(s.b)([a.bind], oe.prototype, "onDockOverlay", null),
      Object(s.b)([a.bind], oe.prototype, "show", null),
      Object(s.b)([a.bind], oe.prototype, "hide", null),
      Object(s.b)([a.bind], oe.prototype, "setPlacementModeActive", null),
      Object(s.b)([a.bind], oe.prototype, "onToggleRoomView", null),
      Object(s.b)([a.bind], oe.prototype, "onQuickLaunchButtonClick", null),
      Object(s.b)([a.bind], oe.prototype, "onQuickStoreButtonClick", null),
      Object(s.b)([a.bind], oe.prototype, "renderPowerMenu", null),
      Object(s.b)([a.bind], oe.prototype, "startPopupMenuTimeout", null),
      Object(s.b)([a.bind], oe.prototype, "clearPopupMenuTimeout", null),
      Object(s.b)([a.bind], oe.prototype, "showPopupMenu", null),
      Object(s.b)([a.bind], oe.prototype, "popupMenuMouseLeave", null),
      Object(s.b)([a.bind], oe.prototype, "popupMenuMouseUp", null),
      Object(s.b)([b.f], oe.prototype, "isDarkMode", null),
      Object(s.b)([b.f], oe.prototype, "screenshotMode", null),
      Object(s.b)([b.f], oe.prototype, "isTheaterMode", null),
      Object(s.b)(
        [a.bind],
        oe.prototype,
        "renderExternalOverlayControlBarButton",
        null
      ),
      Object(s.b)([a.bind], oe.prototype, "isDesktopTrayActive", null),
      Object(s.b)([a.bind], oe.prototype, "isDesktopOverlayActive", null),
      Object(s.b)([a.bind], oe.prototype, "handlePeerButton", null),
      Object(s.b)([a.bind], oe.prototype, "isDesktopViewVisible", null),
      Object(s.b)([a.bind], oe.prototype, "onGameLaunched", null),
      Object(s.b)([a.bind], oe.prototype, "toggleKeyboard", null),
      Object(s.b)([a.bind], oe.prototype, "onKeyboardClosed", null),
      Object(s.b)([b.f], oe.prototype, "activeOverlayScale", null),
      Object(s.b)([a.bind], oe.prototype, "onActiveOverlayScaleChange", null),
      Object(s.b)([a.bind], oe.prototype, "onActiveOverlayClosed", null),
      Object(s.b)([b.m], oe, "s_dashboardUserDistance", void 0),
      Object(s.b)([b.m], oe, "s_dashboardUserScale", void 0),
      (oe = X = Object(s.b)([m.a], oe));
  },
  N46P: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return c;
    });
    var n = r("mrSG"),
      i = r("q1tI"),
      s = r("7wIv"),
      o = r("GXif"),
      a = r("/i/y");
    class l extends i.Component {
      constructor(e) {
        if (
          (super(e),
          (this.m_mailbox = new a.c()),
          this.m_mailbox.Init("legacy_debugger"),
          this.m_mailbox.RegisterHandler(
            "legacy_input_frame",
            this.OnLegacyInputFrame
          ),
          VRHTML)
        ) {
          let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
          VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", e);
        }
        this.state = { currentState: null };
      }
      componentWillUnmount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRProperties.SetInt32Path("/legacy_debugger_pid", 0);
      }
      OnLegacyInputFrame(e) {
        this.setState({ currentState: e });
      }
      renderController(e) {
        let t = [];
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Pressed:"
            )
          ),
          e.pressed)
        )
          for (let r of e.pressed)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                r
              )
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Touched:"
            )
          ),
          e.touched)
        )
          for (let r of e.touched)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                r
              )
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Supported:"
            )
          ),
          e.supported_buttons)
        )
          for (let r of e.supported_buttons)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                r
              )
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        t.push(
          i.createElement(
            "div",
            { className: "Label LegacyDebuggerGroup" },
            "Axis:"
          )
        );
        for (let r of e.axis)
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "X: ",
              r.x.toFixed(2),
              " Y: ",
              r.y.toFixed(2)
            )
          );
        return t;
      }
      render() {
        return this.state.currentState
          ? i.createElement(
              "div",
              { className: "FlexRow" },
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "Left"),
                this.renderController(this.state.currentState.left)
              ),
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "Right"),
                this.renderController(this.state.currentState.right)
              ),
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "HMD"),
                this.renderController(this.state.currentState.hmd)
              )
            )
          : i.createElement(
              "div",
              { className: "Label" },
              Object(o.c)("#LegacyDebugger_NoApp")
            );
      }
    }
    Object(n.b)([s.bind], l.prototype, "OnLegacyInputFrame", null);
    class c extends i.Component {
      constructor(e) {
        super(e);
      }
      render() {
        return i.createElement(
          "div",
          { className: "FlexRowWithWrap" },
          i.createElement(
            "div",
            { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
            i.createElement(l, null)
          )
        );
      }
    }
  },
  V1oe: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return O;
    });
    var n,
      i = r("mrSG"),
      s = r("q1tI"),
      o = r("7wIv"),
      a = r("GXif"),
      l = r("/i/y"),
      c = r("uFkT"),
      d = r("MYgy"),
      u = r("Yd4P"),
      h = r.n(u),
      p = r("okNM"),
      m = r("2vnA"),
      g = r("TbT/"),
      b = r("GxMB");
    !(function (e) {
      (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
    })(n || (n = {}));
    class v extends s.Component {
      constructor(e) {
        super(e),
          (this.m_containerRef = null),
          (this.m_nameRef = null),
          (this.m_svgRef = null),
          (this.m_containerRef = s.createRef()),
          (this.m_nameRef = s.createRef()),
          (this.m_svgRef = s.createRef()),
          (this.state = {
            click: !1,
            touch: !1,
            x: 0,
            y: 0,
            value: 0,
            force: 0,
          });
      }
      componentDidMount() {
        this.RegisterForSourceUpdates();
      }
      componentWillUnmount() {
        this.UnregisterForSourceUpdates();
      }
      componentWillUpdate() {
        this.RegisterForSourceUpdates();
      }
      GetHeightEstimate() {
        return 1;
      }
      RegisterForSourceUpdates() {
        this.props.source.click &&
          this.props.visualizer.RegisterSourceVisualizer(
            this.props.devicePath,
            this.props.sourcePath + "/click",
            this.ComponentUpdated
          ),
          this.props.source.touch &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/touch",
              this.ComponentUpdated
            ),
          this.props.source.value &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/value",
              this.ComponentUpdated
            ),
          ("joystick" != this.props.source.type &&
            "trackpad" != this.props.source.type) ||
            (this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/x",
              this.ComponentUpdated
            ),
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/y",
              this.ComponentUpdated
            )),
          this.props.source.force &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/force",
              this.ComponentUpdated
            );
      }
      UnregisterForSourceUpdates() {
        this.props.source.click &&
          this.props.visualizer.UnregisterSourceVisualizer(
            this.props.devicePath,
            this.props.sourcePath + "/click"
          ),
          this.props.source.touch &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/touch"
            ),
          this.props.source.value &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/value"
            ),
          ("joystick" != this.props.source.type &&
            "trackpad" != this.props.source.type) ||
            (this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath
            ),
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath
            )),
          this.props.source.force &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/force"
            );
      }
      ComponentUpdated(e, t, r) {
        e == this.props.devicePath &&
          (t == this.props.sourcePath + "/click" && this.setState({ click: r }),
          t == this.props.sourcePath + "/touch" && this.setState({ touch: r }),
          t == this.props.sourcePath + "/x" && this.setState({ x: r }),
          t == this.props.sourcePath + "/y" && this.setState({ y: r }),
          t == this.props.sourcePath + "/value" && this.setState({ value: r }),
          t == this.props.sourcePath + "/force" && this.setState({ force: r }));
      }
      GetPositionStyle() {
        let e;
        return (
          (e =
            "/user/hand/left" == this.props.devicePath
              ? this.props.imageScale.right -
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]
              : this.props.imageScale.left +
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]),
          {
            position: "absolute",
            left: e,
            top:
              this.props.imageScale.scale *
                this.props.source.binding_image_point[1] +
              this.props.imageScale.top,
          }
        );
      }
      GetPosition() {
        let e;
        return (
          (e =
            "/user/hand/left" == this.props.devicePath
              ? this.props.imageScale.right -
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]
              : this.props.imageScale.left +
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]),
          {
            x: e,
            y:
              this.props.imageScale.scale *
                this.props.source.binding_image_point[1] +
              this.props.imageScale.top,
          }
        );
      }
      renderHeaderVisualization() {
        return this.props.source.touch || this.props.source.click
          ? this.renderTouchClickVisualization()
          : null;
      }
      renderBodyVisualization() {
        return null;
      }
      renderTouchClickVisualization() {
        let e = "";
        return (
          this.state.click && (e += " Clicked"),
          this.state.touch && (e += " Touched"),
          s.createElement(
            "div",
            { className: "VisualizerButtonContainer" },
            s.createElement("div", { className: "VisualizerButtonBase" + e })
          )
        );
      }
      renderBar(e, t, r) {
        let n = { width: String(100 * r) + "%" };
        return s.createElement(
          "div",
          { className: "TriggerBar " + t },
          s.createElement(
            "div",
            { className: "VisualizerLabel" },
            Object(a.c)(e)
          ),
          s.createElement(
            "div",
            { className: "TriggerBarBackground" },
            s.createElement("div", { className: "TriggerBarContent", style: n })
          )
        );
      }
      UpdateSVGPath() {
        if (
          this.m_nameRef &&
          this.m_nameRef.current &&
          this.m_containerRef &&
          this.m_containerRef.current &&
          this.m_svgRef &&
          this.m_svgRef.current
        ) {
          let e = this.m_svgRef.current.children.namedItem("SourcePath"),
            t = this.m_svgRef.current.children.namedItem("SourceLine"),
            r = this.m_svgRef.current.children.namedItem("SourceCircle"),
            i = this.props.side == n.Right,
            s = this.m_nameRef.current.getBoundingClientRect(),
            o = this.m_containerRef.current.getBoundingClientRect(),
            a = this.GetPosition(),
            l = new d.e(0, s.top + s.height / 2);
          l.x = i ? o.left - 10 : o.right + 10;
          let c = i ? -20 : 20,
            u = l.x + c + "," + l.y + " " + a.x + "," + a.y;
          e.setAttribute("points", u);
          let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
          t.setAttribute("points", h),
            r.setAttribute("cx", a.x + ""),
            r.setAttribute("cy", a.y + "");
        }
      }
      componentDidUpdate() {
        this.UpdateSVGPath();
      }
      IsEngaged() {
        return (
          this.state.touch ||
          this.state.click ||
          (this.state.value && this.state.value > 0.1) ||
          (this.state.force && this.state.force > 0.1) ||
          (this.state.x && Math.abs(this.state.x) > 0.1) ||
          (this.state.y && Math.abs(this.state.x) > 0.1)
        );
      }
      render() {
        let e = "MenuSVG";
        return (
          this.props.side == n.Left
            ? (e += " MenuLeftLine")
            : (e += " MenuRightLine"),
          this.IsEngaged() && (e += " MenuSVGVisible"),
          s.createElement(
            "div",
            { className: "VisualizerControl", ref: this.m_containerRef },
            s.createElement(
              "div",
              { className: "VisualizerSectionHeader" },
              s.createElement(
                "div",
                { className: "Label Title", ref: this.m_nameRef },
                c.a.LocalizeControllerString(
                  this.props.controllerType,
                  this.props.sourcePath
                )
              ),
              this.renderHeaderVisualization()
            ),
            this.renderBodyVisualization(),
            s.createElement(
              "svg",
              {
                className: e,
                xmlns: "http://www.w3.org/2000/svg",
                ref: this.m_svgRef,
              },
              s.createElement(
                "defs",
                null,
                s.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  s.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0.8",
                  }),
                  s.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  })
                )
              ),
              s.createElement("polyline", {
                id: "SourceLine",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              s.createElement("polyline", {
                id: "SourcePath",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              s.createElement("circle", {
                id: "SourceCircle",
                r: "2rem",
                fill: "url(#buttonGradient)",
              })
            )
          )
        );
      }
    }
    Object(i.b)([o.bind], v.prototype, "ComponentUpdated", null),
      Object(i.b)([o.bind], v.prototype, "UpdateSVGPath", null);
    class _ extends v {
      constructor(e) {
        super(e);
      }
    }
    class y extends v {
      constructor(e) {
        super(e);
      }
      GetHeightEstimate() {
        let e = 1;
        return (
          this.props.source.value && e++, this.props.source.force && e++, e
        );
      }
      renderBodyVisualization() {
        return s.createElement(
          "div",
          { className: "TriggerVisualizerContainer" },
          this.props.source.value &&
            this.renderBar(
              "#SourceInputMode_Pull",
              "TriggerValue",
              this.state.value
            ),
          this.props.source.force &&
            this.renderBar(
              "#SourceInputMode_Force",
              "TriggerForce",
              this.state.force
            )
        );
      }
    }
    class f extends v {
      constructor(e) {
        super(e);
      }
      renderBodyVisualization() {
        let e = null,
          t = "TrackpadVisualizerPip";
        return (
          (!this.state.touch &&
            (this.props.source.touch ||
              (0 == this.state.x && 0 == this.state.y))) ||
            ((e = {
              position: "absolute",
              top: String(2 * (1 - this.state.y)) + "rem",
              left: String(2 * (1 + this.state.x)) + "rem",
            }),
            this.state.click && (t += " Clicked")),
          s.createElement(
            "div",
            {
              className:
                "TrackpadVisualizerContainer" +
                (this.state.touch ? " Touched" : ""),
            },
            s.createElement(
              "div",
              { className: "TrackpadPosition" },
              s.createElement(
                "div",
                { className: "VisualizerLabel" },
                Object(a.c)("#SourceInputMode_Position")
              ),
              s.createElement(
                "div",
                { className: "TrackpadVisualizerContainer" },
                s.createElement(
                  "div",
                  { className: "TrackpadVisualizerBackground" },
                  e &&
                    s.createElement(
                      "div",
                      { style: e },
                      s.createElement(
                        "div",
                        { className: "TrackpadVisualizerPipContainer" },
                        s.createElement("div", { className: t })
                      )
                    )
                )
              )
            ),
            this.props.source.force &&
              this.renderBar(
                "#SourceInputMode_Force",
                "TriggerForce",
                this.state.force
              )
          )
        );
      }
    }
    class S extends s.Component {
      constructor(e) {
        super(e),
          (this.m_imageRef = s.createRef()),
          (this.state = { imageScale: this.GetPointScale() });
      }
      get ControllerTypeInfo() {
        let e = c.a.GetDeviceInfo(this.props.devicePath);
        return c.a.GetControllerTypeInfo(e.controller_type);
      }
      componentDidMount() {
        this.setState({ imageScale: this.GetPointScale() });
      }
      EstimateSourceHeight(e) {
        let t;
        switch (e.type) {
          case "button":
            return 1;
          case "trigger":
            return (t = 1), e.force && t++, e.value && t++, t;
          case "joystick":
          case "trackpad":
            return (t = 3), e.force && t++, t;
          case "pose":
          case "pinch":
          case "skeleton":
          case "vibration":
            return 0;
          default:
            return 1;
        }
      }
      renderSource(e, t, r) {
        let n = e + this.ControllerTypeInfo.controller_type;
        switch (t.type) {
          case "button":
            return s.createElement(_, {
              key: n,
              side: r,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "trigger":
            return s.createElement(y, {
              key: n,
              side: r,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "joystick":
          case "trackpad":
            return s.createElement(f, {
              key: n,
              side: r,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "pose":
          case "pinch":
          case "skeleton":
          case "vibration":
            return null;
          default:
            return s.createElement(
              "div",
              { key: n },
              "Need to add visualizer for ",
              t.type
            );
        }
      }
      GetPointScale() {
        let e = { scale: 1, left: 0, right: 0, top: 0 };
        if (
          this.m_imageRef.current &&
          this.m_imageRef.current.naturalWidth > 0
        ) {
          let t = this.m_imageRef.current.getBoundingClientRect();
          (e.scale = t.height / this.m_imageRef.current.naturalHeight),
            (e.left = t.left + window.scrollX),
            (e.right = t.right + window.scrollX),
            (e.top = t.top + window.scrollY);
        }
        return e;
      }
      OnImageLoaded() {
        this.setState({ imageScale: this.GetPointScale() });
      }
      OnImageReflow() {
        this.setState({ imageScale: this.GetPointScale() });
      }
      renderImage() {
        let e = null,
          t = null,
          r = this.ControllerTypeInfo;
        return (
          "/user/hand/left" == this.props.devicePath
            ? r.input_bindingui_left &&
              ((e = r.input_bindingui_left.uri),
              (t = r.input_bindingui_left.transform
                ? r.input_bindingui_left.transform
                : ""))
            : "/user/hand/right" == this.props.devicePath
            ? r.input_bindingui_right &&
              ((e = r.input_bindingui_right.uri),
              (t = r.input_bindingui_right.transform
                ? r.input_bindingui_right.transform
                : ""))
            : r.input_bindingui_left
            ? ((e = r.input_bindingui_left.uri),
              (t = r.input_bindingui_left.transform
                ? r.input_bindingui_left.transform
                : ""))
            : r.input_bindingui_right &&
              ((e = r.input_bindingui_right.uri),
              (t = r.input_bindingui_right.transform
                ? r.input_bindingui_right.transform
                : "")),
          e
            ? s.createElement(
                "div",
                { className: "VisualizerImageContainer" },
                s.createElement("img", {
                  className: "VisualizerImage",
                  ref: this.m_imageRef,
                  onLoad: this.OnImageLoaded,
                  src: e,
                  style: { transform: t },
                }),
                s.createElement(h.a, { onReflow: this.OnImageReflow })
              )
            : null
        );
      }
      render() {
        let e = [],
          t = [],
          r = this.ControllerTypeInfo,
          i = 0,
          o = [];
        for (let e in r.input_source) {
          let t = r.input_source[e];
          if ("InputValueVisibility_AvailableButHidden" == t.visibility)
            continue;
          let n = this.EstimateSourceHeight(t);
          (i += n),
            o.push({
              sSourcePath: e,
              inputSource: t,
              order: t.order ? t.order : 0,
              height: n,
            });
        }
        let a = 8;
        i > 16 && (a = i / 2);
        let l = 0,
          c = o.sort((e, t) => e.order - t.order);
        for (let r of c) {
          l += r.height;
          let i = l > a ? n.Right : n.Left,
            s = this.renderSource(r.sSourcePath, r.inputSource, i);
          s && (i == n.Left ? e.push(s) : t.push(s));
        }
        return s.createElement(
          "div",
          { className: "ControllerVisualizer" },
          s.createElement(
            "div",
            { className: "VisualizerLeft ControllerVisualizerEntries" },
            e
          ),
          this.renderImage(),
          s.createElement(
            "div",
            { className: "VisualizerRight ControllerVisualizerEntries" },
            t
          )
        );
      }
    }
    Object(i.b)([o.bind], S.prototype, "OnImageLoaded", null),
      Object(i.b)([o.bind], S.prototype, "OnImageReflow", null);
    let O = class extends s.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new l.c()),
          (this.m_componentRegistrations = {}),
          (this.m_observeDisposer = null),
          this.m_mailbox.RegisterHandler(
            "update_component_states",
            this.OnUpdateComponentStates
          ),
          this.m_mailbox
            .Init("controller_visualizer")
            .then(
              () => (
                this.UpdateDeviceInputStateSubscriptions(),
                (this.m_observeDisposer = Object(m.n)(
                  c.a,
                  "ConnectedDevices",
                  this.OnConnectedDevicesChanged
                )),
                this.SetDefaultDeviceIfNecessary(),
                null
              )
            ),
          (this.state = { devicePath: null });
      }
      componentWillUnmount() {
        this.m_observeDisposer && this.m_observeDisposer();
        for (let e of c.a.ConnectedDevices) {
          let t = {
            type: "cancel_input_state_updates",
            device_path: e.root_path,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("input_server", t);
        }
      }
      UpdateDeviceInputStateSubscriptions() {
        for (let e of c.a.ConnectedDevices) {
          let t = {
            type: "request_input_state_updates",
            device_path: e.root_path,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("input_server", t);
        }
      }
      SetDefaultDeviceIfNecessary() {
        let e = this.GetSortedDevices();
        !this.state.devicePath &&
          e &&
          this.setState({ devicePath: e[0].root_path });
      }
      OnConnectedDevicesChanged() {
        this.UpdateDeviceInputStateSubscriptions();
      }
      OnUpdateComponentStates(e) {
        for (let t in e.components) {
          let r = e.device + t;
          this.m_componentRegistrations[r] &&
            this.m_componentRegistrations[r](e.device, t, e.components[t]);
        }
      }
      RegisterSourceVisualizer(e, t, r) {
        this.m_componentRegistrations[e + t] = r;
      }
      UnregisterSourceVisualizer(e, t) {
        delete this.m_componentRegistrations[e + t];
      }
      GetDeviceSortOrder(e) {
        switch (e.root_path) {
          case "/user/hand/left":
            return 0;
          case "/user/hand/right":
            return 1;
          default:
            return 2;
        }
      }
      GetSortedDevices() {
        return c.a.ConnectedDevices.sort(
          (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t)
        );
      }
      render() {
        let e,
          t = [],
          r = this.GetSortedDevices();
        if (!r)
          return s.createElement(
            g.i,
            {
              className: "ControllerVisualizerWrapper",
              header: Object(a.c)("#TestControllerTitle", ""),
              onDismissRequested: this.props.onDismissRequested,
            },
            s.createElement(
              "div",
              { className: "VisualizerLabel" },
              Object(a.c)("#TestController_NoController")
            )
          );
        for (let n of r)
          "TrackedDeviceClass_HMD" != n.class &&
            (n.root_path == this.state.devicePath && (e = n.serial_number),
            t.push({
              value: n.root_path,
              sLabel: Object(a.c)("#" + n.root_path),
            }));
        return s.createElement(
          g.i,
          {
            className: "ControllerVisualizerWrapper",
            header: Object(a.c)("#TestControllerTitle", e),
            onDismissRequested: this.props.onDismissRequested,
            footer: s.createElement(g.j, {
              leftControls: [
                s.createElement(b.c, {
                  key: "dropdown",
                  items: t,
                  value: this.state.devicePath,
                  defaultLabel: Object(a.c)("#" + this.state.devicePath),
                  onChange: (e) => {
                    this.setState({ devicePath: e });
                  },
                }),
              ],
              onDismissRequested: this.props.onDismissRequested,
            }),
          },
          this.state.devicePath &&
            s.createElement(S, {
              devicePath: this.state.devicePath,
              serialNumber: e,
              visualizer: this,
            })
        );
      }
    };
    Object(i.b)([o.bind], O.prototype, "OnConnectedDevicesChanged", null),
      Object(i.b)([o.bind], O.prototype, "OnUpdateComponentStates", null),
      (O = Object(i.b)([p.a], O));
  },
  YRJX: function (e, t, r) {
    "use strict";
    r.d(t, "t", function () {
      return R;
    }),
      r.d(t, "s", function () {
        return T;
      }),
      r.d(t, "r", function () {
        return E;
      }),
      r.d(t, "h", function () {
        return I;
      }),
      r.d(t, "i", function () {
        return P;
      }),
      r.d(t, "j", function () {
        return V;
      }),
      r.d(t, "a", function () {
        return L;
      }),
      r.d(t, "g", function () {
        return B;
      }),
      r.d(t, "k", function () {
        return N;
      }),
      r.d(t, "d", function () {
        return F;
      }),
      r.d(t, "c", function () {
        return j;
      }),
      r.d(t, "e", function () {
        return U;
      }),
      r.d(t, "b", function () {
        return W;
      }),
      r.d(t, "l", function () {
        return z;
      }),
      r.d(t, "m", function () {
        return G;
      }),
      r.d(t, "n", function () {
        return K;
      }),
      r.d(t, "f", function () {
        return q;
      }),
      r.d(t, "q", function () {
        return Q;
      }),
      r.d(t, "p", function () {
        return J;
      }),
      r.d(t, "o", function () {
        return Z;
      });
    var n,
      i,
      s,
      o = r("mrSG"),
      a = r("q1tI"),
      l = r("7wIv"),
      c = r("GXif"),
      d = r("6YgL"),
      u = r("CzjV"),
      h = r("hcOo"),
      p = r("/i/y"),
      m = r("7uy8"),
      g = r("2vnA"),
      b = r("Vp/w"),
      v = r("okNM"),
      _ = r("p9CI"),
      y = r("X3sx"),
      f = r("39GS"),
      S = r("nsy5"),
      O = r("vvDA"),
      k = r("Q+Z6"),
      C = r("/CXA"),
      w = r("aaBP"),
      M = r.n(w),
      D = r("nAcY");
    const R = "DashboardPanelTopCenter",
      T = "DashboardPanelBottomCenter",
      E = "DashboardControlStrip",
      I = (e) => {
        var t, r, n;
        const i = a.useRef(null),
          s = a.useRef(null);
        a.useEffect(() => {
          var e, t;
          return null === (e = i.current) || void 0 === e
            ? void 0
            : e.setFloatingViewStack(
                null === (t = s.current) || void 0 === t ? void 0 : t.viewStack
              );
        });
        const o = null == (t = e.scrollable) || t,
          l = null != (r = e.foregroundReflectMultiplier) ? r : 1,
          c =
            null ==
              (n = k.d.settings.get("/settings/dashboard/allowCurvature")) || n
              ? m.j
              : null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            p.ab,
            {
              visibility: e.visible ? p.cb.Visible : p.cb.Hidden,
              debug_name: "homepanelbackground",
              curvature_origin_id: c,
              origin: p.t.BottomCenter,
              interactive: !1,
              scrollable: !1,
              target_dpi_panel_id: E,
              target_dpi_multiplier: 2,
              reflect: 0.01,
              sampler: p.u.SingleTap,
            },
            a.createElement(p.bb, { id: R, location: p.t.TopCenter }),
            a.createElement(
              C.a,
              { ref: i },
              a.createElement("div", {
                className: Object(h.a)(
                  "DashboardPanelBackground",
                  e.additionalClassNames
                ),
                style: e.additionalStyle,
              })
            ),
            a.createElement(p.bb, { id: T, location: p.t.BottomCenter })
          ),
          a.createElement(
            p.nb,
            { translation: { z: 1e-5 } },
            a.createElement(
              p.ab,
              {
                visibility: e.visible ? p.cb.Visible : p.cb.Hidden,
                debug_name: e.debugName,
                curvature_origin_id: c,
                origin: p.t.BottomCenter,
                interactive: !0,
                scrollable: o,
                target_dpi_panel_id: E,
                reflect: 0.2 * l,
              },
              a.createElement(
                C.c,
                { ref: s },
                a.createElement(
                  d.b,
                  null,
                  a.createElement(
                    _.b,
                    {
                      scrollDirection: o ? _.a.Vertical : _.a.None,
                      className: Object(h.a)(
                        "DashboardPanel",
                        e.additionalClassNames
                      ),
                      style: e.additionalStyle,
                    },
                    e.children
                  )
                )
              )
            )
          )
        );
      };
    var P;
    function x(e) {
      switch (e) {
        case P.LeftHand:
          return "/user/hand/left";
        case P.RightHand:
          return "/user/hand/right";
        default:
          return "";
      }
    }
    !(function (e) {
      (e[(e.Dashboard = 0)] = "Dashboard"),
        (e[(e.LeftHand = 1)] = "LeftHand"),
        (e[(e.RightHand = 2)] = "RightHand"),
        (e[(e.World = 3)] = "World");
    })(P || (P = {}));
    let V = (n = class extends a.Component {
      constructor(e) {
        super(e),
          (this.state = {
            fOverlayScale: this.GetDefaultScaleForLocation(),
            xfTransform: null,
            sParent: x(this.props.dockLocation),
            bIsOutsideMaxDist: !1,
            destination: this.props.dockLocation,
          }),
          (this.m_bIsMoving = !1),
          (this.m_nMoveDeviceIndex = p.pb),
          (this.m_moveDeviceRole = p.x.TrackedControllerRole_Invalid);
      }
      GetDefaultScaleForLocation() {
        switch (this.props.dockLocation) {
          case P.Dashboard:
          case P.LeftHand:
          case P.RightHand:
            return 0.25;
          case P.World:
            return 0.5;
        }
      }
      SetInitialTransformForLocation() {
        if (this.props.xfInitial) {
          switch (this.props.dockLocation) {
            case P.LeftHand:
            case P.RightHand: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 2) < 0.1 &&
                (t = Math.min(2 * t, n.sfOverlayScaleMax)),
                (e.scale = { x: 1, y: 1, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
            case P.World: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 1) < 0.1 &&
                (t = Math.max(t / 2, n.sfOverlayScaleMin)),
                (e.scale = { x: 2, y: 2, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
          }
          return;
        }
        let e = Object(p.g)();
        switch (
          ((e.rotation = Object(p.J)({ x: -45, y: 0, z: 0 })),
          this.props.dockLocation)
        ) {
          case P.Dashboard:
          case P.LeftHand:
          case P.RightHand:
            this.setState({ xfTransform: e });
            break;
          case P.World:
            let t = 0;
            p.hb
              .getInstance()
              .requestSGTransform(
                "system.systemui::active_overlay_transform",
                t
              )
              .then((t) => {
                (e.rotation = t.rotation),
                  (e.scale = { x: 2, y: 2, z: 1 }),
                  (e.translation = {
                    x: t.translation.x,
                    y: t.translation.y,
                    z: t.translation.z,
                  }),
                  this.setState({ xfTransform: e });
              });
        }
      }
      componentDidMount() {
        this.SetInitialTransformForLocation();
      }
      componentDidUpdate(e, t) {
        e.dockLocation != this.props.dockLocation &&
          this.setState(
            {
              sParent: x(this.props.dockLocation),
              xfTransform: null,
              bIsOutsideMaxDist: !1,
              destination: this.props.dockLocation,
            },
            this.SetInitialTransformForLocation
          );
      }
      onOverlayScaleChanged(e) {
        this.setState({ fOverlayScale: e });
      }
      computeDestination() {
        if (!this.m_bIsMoving) return;
        let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.B.Standing),
          t = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          p.x.TrackedControllerRole_LeftHand
        ) != p.pb && (t = VRHTML.GetPose("/user/hand/left", p.B.Standing));
        let r = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          p.x.TrackedControllerRole_RightHand
        ) != p.pb && (r = VRHTML.GetPose("/user/hand/right", p.B.Standing));
        let i = [];
        switch (this.state.sParent) {
          case "/user/hand/left":
            r && i.push({ pose: r, location: P.RightHand });
            break;
          case "/user/hand/right":
            t && i.push({ pose: t, location: P.LeftHand });
            break;
          case "/user/head":
            t && i.push({ pose: t, location: P.LeftHand }),
              r && i.push({ pose: r, location: P.RightHand });
        }
        if (0 == i.length)
          return void setTimeout(this.computeDestination, n.sfMovePulseMS);
        let s = VRHTML.MultiplyTransforms(
          e.xfDeviceToAbsoluteTracking,
          this.state.xfTransform
        );
        i.forEach((e) => {
          let t = VRHTML.ChangeBasis(s, e.pose.xfDeviceToAbsoluteTracking);
          Object(p.P)(t.translation) > n.sfMaxDockDist
            ? this.state.bIsOutsideMaxDist ||
              (D.b.Instance.triggerHaptic(D.a.SlidingEdge),
              this.setState({ bIsOutsideMaxDist: !0, destination: P.World }))
            : (this.state.bIsOutsideMaxDist ||
                (this.props.dockLocation == P.World &&
                  this.state.destination == P.World)) &&
              (D.b.Instance.triggerHaptic(D.a.SlidingEdge),
              this.setState({
                bIsOutsideMaxDist: !1,
                destination: e.location,
              }));
        }),
          setTimeout(this.computeDestination, n.sfMovePulseMS);
      }
      startMove() {
        if (this.m_bIsMoving) return;
        if (
          (console.log("Starting to move " + this.props.sOverlayKey + "...\n"),
          (this.m_nMoveDeviceIndex =
            VRHTML.VROverlay.GetPrimaryDashboardDevice()),
          this.m_nMoveDeviceIndex == p.pb)
        )
          return;
        this.m_moveDeviceRole =
          VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.m_nMoveDeviceIndex
          );
        let e,
          t,
          r = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.B.Standing);
        switch (this.props.dockLocation) {
          case P.LeftHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                p.x.TrackedControllerRole_LeftHand
              ) == p.pb
            )
              return;
            e = VRHTML.GetPose("/user/hand/left", p.B.Standing);
            break;
          case P.RightHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                p.x.TrackedControllerRole_RightHand
              ) == p.pb
            )
              return;
            e = VRHTML.GetPose("/user/hand/right", p.B.Standing);
            break;
          default:
            e = {
              xfDeviceToAbsoluteTracking: Object(p.g)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: p.A.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
        }
        switch (this.m_moveDeviceRole) {
          case p.x.TrackedControllerRole_LeftHand:
            t = "/user/hand/left";
            break;
          case p.x.TrackedControllerRole_RightHand:
            t = "/user/hand/right";
            break;
          default:
            t = "/user/head";
        }
        this.m_bIsMoving = !0;
        let n = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          i = VRHTML.ChangeBasis(n, r.xfDeviceToAbsoluteTracking);
        this.setState(
          {
            xfTransform: i,
            sParent: t,
            bIsOutsideMaxDist: this.props.dockLocation == P.World,
          },
          this.computeDestination
        ),
          window.addEventListener("mouseup", this.endMove);
      }
      endMove() {
        if (!this.m_bIsMoving) return;
        let e, t;
        if (
          "/user/hand/left" == this.state.sParent ||
          this.state.destination == P.LeftHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              p.x.TrackedControllerRole_LeftHand
            ) == p.pb
          )
            return;
          e = VRHTML.GetPose("/user/hand/left", p.B.Standing);
        }
        if (
          "/user/hand/right" == this.state.sParent ||
          this.state.destination == P.RightHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              p.x.TrackedControllerRole_RightHand
            ) == p.pb
          )
            return;
          t = VRHTML.GetPose("/user/hand/right", p.B.Standing);
        }
        let r,
          n = {
            xfDeviceToAbsoluteTracking: Object(p.g)(),
            vVelocity: { x: 0, y: 0, z: 0 },
            eTrackingResult: p.A.TrackingResult_Running_OK,
            bPoseIsValid: !0,
          };
        switch (this.state.destination) {
          case P.LeftHand:
            r = e;
            break;
          case P.RightHand:
            r = t;
            break;
          default:
            r = n;
        }
        let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.B.Standing),
          s = VRHTML.MultiplyTransforms(
            i.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          o = VRHTML.ChangeBasis(s, r.xfDeviceToAbsoluteTracking);
        this.setState({ xfTransform: o, sParent: x(this.state.destination) }),
          (this.m_bIsMoving = !1),
          this.props.onDockOverlay(
            this.props.sOverlayKey,
            this.state.destination,
            o
          ),
          window.removeEventListener("mouseup", this.endMove);
      }
      render() {
        if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
          return null;
        if (!this.props.bVisible)
          return a.createElement(
            p.nb,
            {
              parent_path: this.state.sParent,
              transform: this.state.xfTransform,
              id: "xf_widget",
            },
            a.createElement(
              p.ab,
              {
                overlay_key: this.props.sOverlayKey,
                height: this.state.fOverlayScale,
                width: void 0,
                interactive: !0,
                origin: p.t.BottomCenter,
              },
              a.createElement(p.U, {
                mountedId: Object(p.f)(m.F, this.props.sOverlayKey + ".cursor"),
              })
            )
          );
        let e = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
        if (!e) return null;
        let t = { x: 0, y: 0 };
        try {
          t = VRHTML.VROverlay.GetOverlayMouseScale(e);
        } catch (e) {
          return console.log(JSON.stringify(e)), null;
        }
        let r = this.state.fOverlayScale,
          i = (r / t.y) * t.x,
          s = r + n.sfOverlayTrayHeight,
          o = Math.max(i, 0.175),
          l = s / 2 - n.sfOverlayTrayHeight;
        return a.createElement(
          p.nb,
          {
            parent_path: this.state.sParent,
            transform: this.state.xfTransform,
            id: "xf_widget",
          },
          a.createElement(
            p.nb,
            {
              translation: { y: l, z: -0.005 },
              scale: { x: o, y: s, z: 0.008 },
            },
            a.createElement(
              p.lb,
              { color: { r: 0.016, g: 0.017, b: 0.02 } },
              a.createElement(p.fb, { solid: !0, source: "unit_cube" })
            )
          ),
          a.createElement(
            p.ab,
            {
              overlay_key: this.props.sOverlayKey,
              height: this.state.fOverlayScale,
              width: void 0,
              interactive: !0,
              origin: p.t.BottomCenter,
            },
            a.createElement(p.U, {
              mountedId: Object(p.f)(m.F, this.props.sOverlayKey + ".cursor"),
            })
          ),
          a.createElement(
            p.ab,
            {
              height: n.sfOverlayTrayHeight,
              width: void 0,
              interactive: !0,
              origin: p.t.TopCenter,
            },
            a.createElement(
              "div",
              { className: "WindowTray" },
              a.createElement(y.a, {
                additionalClassName: "WindowTraySlider",
                min: n.sfOverlayScaleMin,
                max: n.sfOverlayScaleMax,
                value: this.state.fOverlayScale,
                valueStyleVariant: y.c.OnHandle,
                onChange: this.onOverlayScaleChanged,
                detents: [0.25, 0.5, 1],
                renderValue: (e) => (100 * e).toFixed(0) + "%",
              }),
              a.createElement(
                d.a,
                {
                  className: "WindowTrayButton",
                  key: "move",
                  onMouseDown: this.startMove,
                  onMouseUp: this.endMove,
                  style: { padding: "0.5em", paddingBottom: "0.25em" },
                },
                a.createElement("img", {
                  className: "Icon BlackToWhite",
                  src: "/dashboard/images/icons/icon_move.png",
                })
              ),
              a.createElement(
                d.a,
                {
                  className: "WindowTrayButton",
                  key: "undock",
                  style: { padding: "0.5em", paddingBottom: "0.25em" },
                  title: "Return to Dashboard",
                  onClick: () => {
                    this.props.onDockOverlay(
                      this.props.sOverlayKey,
                      P.Dashboard
                    );
                  },
                },
                a.createElement("img", {
                  className: "Icon",
                  src: "/dashboard/images/icons/icon_return.png",
                })
              )
            )
          ),
          this.m_bIsMoving &&
            !this.state.bIsOutsideMaxDist &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                p.nb,
                {
                  parent_path:
                    this.state.destination == P.LeftHand
                      ? "/user/hand/left"
                      : "/user/hand/right",
                },
                a.createElement(p.R, {
                  target_id: "xf_widget",
                  thickness: 0.001,
                  start_buffer: 0.01,
                  end_buffer: 0.01,
                })
              )
            )
        );
      }
    });
    function L() {
      return a.createElement(
        "div",
        { className: "ActivitySpinner" },
        a.createElement("div", { className: "Bar" }),
        a.createElement("div", { className: "Bar" }),
        a.createElement("div", { className: "Bar" })
      );
    }
    (V.sfMaxDockDist = 0.4),
      (V.sfMovePulseMS = 100),
      (V.sfOverlayTrayHeight = 0.025),
      (V.sfOverlayScaleMin = 0.1),
      (V.sfOverlayScaleMax = 2),
      Object(o.b)([l.bind], V.prototype, "onOverlayScaleChanged", null),
      Object(o.b)([l.bind], V.prototype, "computeDestination", null),
      Object(o.b)([l.bind], V.prototype, "startMove", null),
      Object(o.b)([l.bind], V.prototype, "endMove", null),
      (V = n = Object(o.b)([v.a], V));
    class B extends a.Component {
      constructor(e) {
        super(e), (this.state = { time: new Date() });
      }
      componentDidMount() {
        let e = 60 - (new Date().getSeconds() % 60) + 0.01;
        this.m_clockUpdateTimeout = window.setTimeout(this.updateTime, 1e3 * e);
      }
      componentWillUnmount() {
        clearTimeout(this.m_clockUpdateTimeout);
      }
      updateTime() {
        this.setState({ time: new Date() }),
          (this.m_clockUpdateTimeout = window.setTimeout(this.updateTime, 6e4));
      }
      render() {
        const e = c.a.GetLocale();
        let t = this.state.time.toLocaleTimeString(e, {
            hour: "numeric",
            minute: "2-digit",
          }),
          r = null;
        const n = t.toLowerCase(),
          i = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
        return (
          i >= 0 && ((r = t.substring(i)), (t = t.substring(0, i - 1))),
          a.createElement(
            "div",
            { className: "ClockContainer" },
            a.createElement(
              "div",
              { className: "Clock" },
              t,
              " ",
              a.createElement("span", { className: "Suffix" }, r)
            )
          )
        );
      }
    }
    function N(e) {
      return a.createElement(
        d.a,
        { className: "PowerMenuButton", onClick: e.onClick },
        a.createElement("div", { className: "HoverGradient" }),
        a.createElement("div", { className: "ClickGradient" }),
        a.createElement("span", null, e.label),
        e.lineBelow && a.createElement("div", { className: "LineBelow" })
      );
    }
    Object(o.b)([l.bind], B.prototype, "updateTime", null);
    let H = (i = class extends a.Component {
      get isShowingTooltip() {
        return i.s_CurrentlyShownTooltip === this;
      }
      show() {
        i.s_CurrentlyShownTooltip = this;
      }
      hide() {
        this.isShowingTooltip && (i.s_CurrentlyShownTooltip = null);
      }
      render() {
        var e;
        const t =
            this.props.text && (this.props.shown || this.isShowingTooltip),
          r = this.props.translation
            ? this.props.translation
            : { x: 0, y: -0.2, z: 0.05 },
          n =
            null ==
              (e = k.d.settings.get("/settings/dashboard/allowCurvature")) || e
              ? m.j
              : null;
        return a.createElement(
          "div",
          { style: { position: "absolute", left: "50%", top: "50%" } },
          a.createElement(
            b.a,
            { allowableParentSelectors: [".DashboardMain"] },
            a.createElement(
              p.nb,
              { translation: r },
              a.createElement(
                p.ab,
                {
                  visibility: t ? p.cb.Visible : p.cb.SkipInSceneGraph,
                  target_dpi_panel_id: E,
                  curvature_origin_id: n,
                },
                a.createElement(
                  "div",
                  { className: "ControlBarButtonTooltip" },
                  this.props.text
                )
              )
            )
          )
        );
      }
    });
    (H.s_CurrentlyShownTooltip = null),
      Object(o.b)([g.f], H.prototype, "isShowingTooltip", null),
      Object(o.b)([g.d.bound], H.prototype, "show", null),
      Object(o.b)([g.d.bound], H.prototype, "hide", null),
      Object(o.b)([g.m], H, "s_CurrentlyShownTooltip", void 0),
      (H = i = Object(o.b)([v.a], H));
    class A extends a.Component {
      static ShouldInvertThumbnail(e) {
        if (!e) return !1;
        if (((e = e.toLowerCase()), !A.s_mapShouldInvertThumbnail.has(e))) {
          let t = !1;
          e.endsWith(".svg") && (t = !0),
            e.startsWith("data:") &&
              A.k_rsThumbnailHashesToInvert.indexOf(M.a.hash(e)) >= 0 &&
              (t = !0),
            A.s_mapShouldInvertThumbnail.set(e, t);
        }
        return A.s_mapShouldInvertThumbnail.get(e);
      }
      render() {
        var e;
        const t = null != (e = this.props.shadow) && e,
          r = A.ShouldInvertThumbnail(this.props.src);
        return a.createElement(
          "div",
          { className: "Icon" },
          t &&
            a.createElement("img", {
              className: "Shadow",
              src: this.props.src,
            }),
          a.createElement("img", {
            className: Object(h.a)(["BlackToWhite", r]),
            src: this.props.src,
          })
        );
      }
    }
    var F, j;
    (A.k_rsThumbnailHashesToInvert = [
      "5cbd0ebd6459cdaf75fdcafc5051f4e0",
      "c77452e60fc29227b33773ff6e74f8a1",
      "44b62220b39ba717fbfc65e3b4225491",
      "0ea4aa3d9529b716f0f1957684247dee",
      "86bbab56235b55f6e5e7d288342931d7",
    ]),
      (A.s_mapShouldInvertThumbnail = new Map()),
      (function (e) {
        (e[(e.Large = 0)] = "Large"),
          (e[(e.Small = 1)] = "Small"),
          (e[(e.App = 2)] = "App");
      })(F || (F = {})),
      (function (e) {
        (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
      })(j || (j = {}));
    const U = (e) =>
      a.createElement(
        "div",
        { className: Object(h.a)("ControlBarGroup", F[e.style]) },
        e.children
      );
    let W = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter() {
        var e, t, r;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.show(),
          null === (r = (t = this.props).onMouseEnter) ||
            void 0 === r ||
            r.call(t);
      }
      onMouseLeave() {
        var e, t, r;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(),
          null === (r = (t = this.props).onMouseLeave) ||
            void 0 === r ||
            r.call(t);
      }
      render() {
        var e;
        return a.createElement(
          d.a,
          {
            className: Object(h.a)(
              "ControlBarButton",
              this.props.additionalClassNames,
              j[((e = this.props.imageStyle), null != e ? e : j.Center)] +
                "Image",
              ["Disabled", !1 === this.props.enabled],
              ["Active", !!this.props.active]
            ),
            style: {
              "--image-url": this.props.imageUrl
                ? "url('" + this.props.imageUrl + "')"
                : void 0,
            },
            onClick: this.props.onClick,
            onMouseDown: this.props.onMouseDown,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            pressSoundEffect: u.a.ControlBarButtonPress,
            releaseSoundEffect: u.a.ControlBarButtonRelease,
          },
          this.props.centerPanelAnchorID &&
            a.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              a.createElement(b.a, {
                allowableParentSelectors: [".DashboardMain"],
                panelAnchorID: this.props.centerPanelAnchorID,
              })
            ),
          a.createElement(H, {
            text: this.props.label,
            ref: this.m_refTooltip,
          }),
          a.createElement(A, { src: this.props.imageUrl })
        );
      }
    };
    Object(o.b)([l.bind], W.prototype, "onMouseEnter", null),
      Object(o.b)([l.bind], W.prototype, "onMouseLeave", null),
      (W = Object(o.b)([v.a], W));
    const z = (e) =>
      a.createElement(
        U,
        { style: e.style },
        a.createElement(W, Object.assign({}, e))
      );
    class G extends a.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.deviceIndex = p.pb),
          (this.batteryLevelStable = null),
          (this.devicePowerUsage = null),
          (this.state = { batteryIconPath: null });
      }
      componentDidMount() {
        var e, t, r;
        (this.m_BatteryStateChangedCallbackHandle =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.onBatteryStateChanged
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.onDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (r = VRHTML) || void 0 === r
              ? void 0
              : r.RegisterForDeviceEvents(this.onDeviceEvent)),
          this.update();
      }
      componentWillUnmount() {
        this.m_BatteryStateChangedCallbackHandle &&
          (this.m_BatteryStateChangedCallbackHandle.unregister(),
          (this.m_BatteryStateChangedCallbackHandle = null)),
          this.m_DeviceRoleChangedCallbackHandle &&
            (this.m_DeviceRoleChangedCallbackHandle.unregister(),
            (this.m_DeviceRoleChangedCallbackHandle = null)),
          this.m_DeviceEventCallbackHandle &&
            (this.m_DeviceEventCallbackHandle.unregister(),
            (this.m_DeviceEventCallbackHandle = null));
      }
      updateControllerStatus() {
        if (!VRHTML) return;
        let e = !1,
          t = !1,
          r = p.pb;
        if (
          (void 0 !== this.props.role
            ? (r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                this.props.role
              ))
            : void 0 !== this.props.deviceIndex && (r = this.props.deviceIndex),
          r != this.deviceIndex &&
            ((this.batteryLevelStable = null),
            (this.devicePowerUsage = null),
            (this.deviceIndex = r)),
          r != p.pb)
        ) {
          if (
            ((e = VRHTML.VRProperties.GetBoolProperty(
              r,
              p.z.DeviceProvidesBatteryStatus_Bool
            )),
            e)
          ) {
            const e = VRHTML.VRProperties.GetFloatProperty(
              r,
              p.z.DeviceBatteryPercentage_Float
            );
            (t = VRHTML.VRProperties.GetBoolProperty(
              r,
              p.z.DeviceIsCharging_Bool
            )),
              null == this.batteryLevelStable || 0 == this.batteryLevelStable
                ? (this.batteryLevelStable = e)
                : ((this.batteryLevelStable = Math.min(
                    this.batteryLevelStable,
                    e + G.kBatteryLevelHysteresis,
                    1
                  )),
                  (this.batteryLevelStable = Math.max(
                    this.batteryLevelStable,
                    e - G.kBatteryLevelHysteresis,
                    0
                  )));
          }
          this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
            r,
            p.z.DevicePowerUsage_Float
          );
        }
        let n = O.a.GetBatteryIcon(
          e,
          t,
          this.batteryLevelStable,
          this.props.style
        );
        n != this.state.batteryIconPath &&
          this.setState({ batteryIconPath: n });
      }
      update() {
        window.setTimeout(this.updateControllerStatus, 0);
      }
      onBatteryStateChanged(e) {
        this.update();
      }
      onDeviceRoleChanged() {
        this.update();
      }
      onDeviceEvent(e, t, r) {
        (e != p.m.Activated && e != p.m.Deactivated) || this.update();
      }
      render() {
        return a.createElement(
          "div",
          { className: "BatteryStatus" },
          this.devicePowerUsage &&
            a.createElement(
              "div",
              { className: "Label" },
              " ",
              Math.round(10 * this.devicePowerUsage) / 10,
              " W "
            ),
          a.createElement("img", { src: this.state.batteryIconPath })
        );
      }
    }
    (G.kBatteryLevelHysteresis = 0.02),
      Object(o.b)([l.bind], G.prototype, "updateControllerStatus", null),
      Object(o.b)([l.bind], G.prototype, "onBatteryStateChanged", null),
      Object(o.b)([l.bind], G.prototype, "onDeviceRoleChanged", null),
      Object(o.b)([l.bind], G.prototype, "onDeviceEvent", null);
    a.Component;
    const K = (e) =>
      a.createElement(
        "div",
        { className: "Title" },
        a.createElement(A, { src: e.iconUrl, shadow: !0 }),
        a.createElement("span", { className: "NoWrapText" }, e.name)
      );
    class q extends a.Component {
      constructor() {
        super(...arguments),
          (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
          (this.m_resizeObserver = null),
          (this.m_refPanelElem = a.createRef()),
          (this.m_refBackgroundElem = a.createRef());
      }
      componentWillUnmount() {
        this.m_resizeObserver &&
          (this.m_resizeObserver.disconnect(), (this.m_resizeObserver = null));
      }
      componentDidUpdate() {
        this.updateBackgroundSize();
      }
      onResizeObserved(e, t) {
        this.updateBackgroundSize();
      }
      updateBackgroundSize() {
        this.m_refPanelElem.current &&
          this.m_refBackgroundElem.current &&
          ((this.m_refBackgroundElem.current.style.width =
            this.m_refPanelElem.current.clientWidth / 2 + "px"),
          (this.m_refBackgroundElem.current.style.height =
            this.m_refPanelElem.current.clientHeight / 2 + "px"));
      }
      onPortalDidMount() {
        this.m_refPanelElem.current &&
          ((this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
          this.m_resizeObserver.observe(this.m_refPanelElem.current),
          this.updateBackgroundSize());
      }
      render() {
        var e;
        const t = this.props.position,
          r = Math.asin(t) / Math.PI,
          n =
            null ==
              (e = k.d.settings.get("/settings/dashboard/allowCurvature")) || e
              ? m.j
              : null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            p.bb,
            { location: { x: t, y: -1 } },
            a.createElement(p.nb, {
              id: this.m_sAnchorID,
              translation: { y: 0.01 * Math.abs(r), z: -0.03 * Math.abs(r) },
              rotation: { y: 15 * r, z: 2 * r },
            })
          ),
          a.createElement(
            b.b,
            {
              allowableParentSelectors: [".DashboardMain"],
              onPortalDidMount: this.onPortalDidMount,
            },
            a.createElement(
              p.lb,
              { color: this.props.tintColor },
              a.createElement(
                S.a,
                {
                  additionalClassName: "ControlBarTrayAnimation",
                  visible: this.props.visible,
                  duration: 0.25,
                  onStartShowing: this.updateBackgroundSize,
                  onShown: this.updateBackgroundSize,
                },
                a.createElement(
                  p.nb,
                  {
                    parent_id: this.m_sAnchorID,
                    translation: { y: 0.04, z: -0.01 },
                  },
                  a.createElement(
                    p.ab,
                    {
                      curvature_origin_id: n,
                      origin: p.t.TopCenter,
                      interactive: !0,
                      scrollable: !0,
                      target_dpi_panel_id: E,
                      sort_depth_bias: this.props.sort_depth_bias,
                    },
                    a.createElement(
                      "div",
                      {
                        className: Object(h.a)(
                          "ControlBarTray",
                          this.props.additionalClassNames
                        ),
                        onMouseEnter: this.props.onMouseEnter,
                        onMouseMove: this.props.onMouseMove,
                        onMouseLeave: this.props.onMouseLeave,
                        ref: this.m_refPanelElem,
                      },
                      this.props.children
                    )
                  ),
                  a.createElement(
                    p.nb,
                    { translation: { z: -1e-5 } },
                    a.createElement(
                      p.ab,
                      {
                        curvature_origin_id: n,
                        origin: p.t.TopCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: E,
                        target_dpi_multiplier: 2,
                        reflect: 0.04,
                        sampler: p.u.SingleTap,
                        sort_depth_bias: this.props.sort_depth_bias,
                      },
                      a.createElement("div", {
                        className: "ControlBarTrayBackground",
                        ref: this.m_refBackgroundElem,
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
    Object(o.b)([l.bind], q.prototype, "onResizeObserved", null),
      Object(o.b)([l.bind], q.prototype, "updateBackgroundSize", null),
      Object(o.b)([l.bind], q.prototype, "onPortalDidMount", null);
    let Q = class extends a.Component {
      constructor() {
        super(...arguments),
          (this.m_refSlider = a.createRef()),
          (this.m_refTray = a.createRef()),
          (this.m_bMouseInSlider = !1);
      }
      get slider() {
        return this.m_refSlider.current;
      }
      onSliderMouseEnter() {
        this.m_bMouseInSlider = !0;
      }
      onSliderMouseLeave() {
        this.m_bMouseInSlider = !1;
      }
      onSliderFinalChange() {
        var e, t;
        this.m_bMouseInSlider ||
          null === (t = (e = this.props).onFinalChangeMouseOutside) ||
          void 0 === t ||
          t.call(e);
      }
      get showAudioMirrorControls() {
        return (
          k.d.settings.get(
            "/settings/audio/enablePlaybackMirrorIndependentVolume"
          ) && k.d.settings.get("/settings/audio/enablePlaybackMirror")
        );
      }
      get enableAudioMirrorControls() {
        return !!k.d.settings.get("/settings/audio/activePlaybackMirrorDevice");
      }
      render() {
        const e =
          (this.showAudioMirrorControls ? 3 : 2) >= 3 ? 0 : this.props.position;
        return a.createElement(
          q,
          Object.assign({}, this.props, {
            position: e,
            ref: this.m_refTray,
            additionalClassNames: "VolumeTray",
          }),
          a.createElement(
            "div",
            { className: "Section" },
            a.createElement(
              Y,
              {
                onClick: f.a.Instance.toggleMicrophoneMute,
                title: f.a.Instance.microphoneMuted
                  ? Object(c.c)("#UnmuteMicrophone")
                  : Object(c.c)("#MuteMicrophone"),
              },
              a.createElement("img", {
                className: "BlackToWhite",
                src: f.a.Instance.microphoneMuted
                  ? "/dashboard/images/icons/svr_mic_mute.svg"
                  : "/dashboard/images/icons/svr_mic_active.svg",
              })
            ),
            a.createElement(X, {
              title: Object(c.c)("#MicrophoneVolume"),
              value: f.a.Instance.microphoneVolume,
              onChange: f.a.Instance.setMicrophoneVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: y.c.OnHandle,
              additionalClassName: Object(h.a)([
                "Muted",
                f.a.Instance.microphoneMuted,
              ]),
              interactionEndSoundEffect: u.a.VolumePreview,
            })
          ),
          this.showAudioMirrorControls &&
            a.createElement(
              "div",
              { className: "Section" },
              a.createElement(
                Y,
                {
                  onClick: f.a.Instance.toggleMirrorMute,
                  enabled: this.enableAudioMirrorControls,
                  title: f.a.Instance.mirrorMuted
                    ? Object(c.c)("#UnmuteAudioMirror")
                    : Object(c.c)("#MuteAudioMirror"),
                },
                a.createElement("img", {
                  className: "BlackToWhite",
                  src: f.a.Instance.mirrorMuted
                    ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                    : "/dashboard/images/icons/svr_volume_mirror.svg",
                })
              ),
              a.createElement(X, {
                title: Object(c.c)("#AudioMirrorVolume"),
                value: f.a.Instance.mirrorVolume,
                enabled: this.enableAudioMirrorControls,
                onChange: f.a.Instance.setMirrorVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: y.c.OnHandle,
                additionalClassName: Object(h.a)([
                  "Muted",
                  f.a.Instance.mirrorMuted,
                ]),
                interactionEndSoundEffect: u.a.VolumePreview,
              })
            ),
          a.createElement(
            "div",
            { className: "Section" },
            a.createElement(
              Y,
              {
                onClick: f.a.Instance.toggleMute,
                title: f.a.Instance.muted
                  ? Object(c.c)("#Unmute_Headset")
                  : Object(c.c)("#Mute_Headset"),
              },
              a.createElement("img", {
                className: "BlackToWhite",
                src: f.a.Instance.muted
                  ? "/dashboard/images/icons/svr_volume_mute.svg"
                  : "/dashboard/images/icons/svr_volume.svg",
              })
            ),
            a.createElement(X, {
              title: Object(c.c)("#HeadsetVolume"),
              sliderRef: this.m_refSlider,
              value: f.a.Instance.volume,
              onChange: f.a.Instance.setVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: y.c.OnHandle,
              additionalClassName: Object(h.a)(["Muted", f.a.Instance.muted]),
              interactionEndSoundEffect: u.a.VolumePreview,
            })
          )
        );
      }
    };
    Object(o.b)([l.bind], Q.prototype, "onSliderMouseEnter", null),
      Object(o.b)([l.bind], Q.prototype, "onSliderMouseLeave", null),
      Object(o.b)([l.bind], Q.prototype, "onSliderFinalChange", null),
      Object(o.b)([g.f], Q.prototype, "showAudioMirrorControls", null),
      Object(o.b)([g.f], Q.prototype, "enableAudioMirrorControls", null),
      (Q = Object(o.b)([v.a], Q));
    let X = class extends a.Component {
      constructor(e) {
        super(e), (this.state = { bSliding: !1, bHover: !1 });
      }
      onMouseEnter(e) {
        var t, r;
        this.setState({ bHover: !0 }),
          null === (r = (t = this.props).onMouseEnter) ||
            void 0 === r ||
            r.call(t, e);
      }
      onMouseLeave(e) {
        var t, r;
        this.setState({ bHover: !1 }),
          null === (r = (t = this.props).onMouseLeave) ||
            void 0 === r ||
            r.call(t, e);
      }
      onInteractionStart() {
        var e, t;
        this.setState({ bSliding: !0 }),
          null === (t = (e = this.props).onInteractionStart) ||
            void 0 === t ||
            t.call(e);
      }
      onInteractionEnd() {
        var e, t;
        this.setState({ bSliding: !1 }),
          null === (t = (e = this.props).onInteractionEnd) ||
            void 0 === t ||
            t.call(e);
      }
      render() {
        let e = Object.assign({}, this.props);
        return a.createElement(
          "div",
          { className: "SliderContainer" },
          this.props.title &&
            a.createElement(H, {
              text: this.props.title,
              shown: this.state.bHover || this.state.bSliding,
            }),
          a.createElement(
            y.a,
            Object.assign({}, e, {
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              onInteractionStart: this.onInteractionStart,
              onInteractionEnd: this.onInteractionEnd,
              ref: this.props.sliderRef,
            })
          )
        );
      }
    };
    Object(o.b)([l.bind], X.prototype, "onMouseEnter", null),
      Object(o.b)([l.bind], X.prototype, "onMouseLeave", null),
      Object(o.b)([l.bind], X.prototype, "onInteractionStart", null),
      Object(o.b)([l.bind], X.prototype, "onInteractionEnd", null),
      (X = Object(o.b)([v.a], X));
    let Y = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter(e) {
        var t, r, n;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
          null === (n = (r = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(r, e);
      }
      onMouseLeave(e) {
        var t, r, n;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
          null === (n = (r = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(r, e);
      }
      render() {
        return a.createElement(
          d.a,
          Object.assign({}, this.props, {
            className: Object(h.a)(
              "ButtonControl",
              "Round",
              this.props.className
            ),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          }),
          this.props.title &&
            a.createElement(H, {
              text: this.props.title,
              ref: this.m_refTooltip,
            }),
          this.props.children
        );
      }
    };
    Object(o.b)([l.bind], Y.prototype, "onMouseEnter", null),
      Object(o.b)([l.bind], Y.prototype, "onMouseLeave", null),
      (Y = Object(o.b)([v.a], Y));
    let J = (s = class extends a.Component {
      constructor() {
        super(...arguments), (this.m_vecOriginalMousePosition = null);
      }
      componentWillUnmount() {
        this.stopSliding();
      }
      get slider() {
        var e;
        return null === (e = this.props.refVolumeTray.current) || void 0 === e
          ? void 0
          : e.slider;
      }
      onButtonMouseDown(e) {
        var t, r;
        (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
          window.document.addEventListener("mouseup", this.onWindowMouseUp),
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
          null === (r = (t = this.props).onShowTray) ||
            void 0 === r ||
            r.call(t);
      }
      onWindowMouseMove(e) {
        if (!this.slider || this.slider.isSliding) return;
        const t = { x: e.clientX, y: e.clientY };
        Object(p.O)(Object(p.jb)(t, this.m_vecOriginalMousePosition)) >
          s.MIN_DRAG_THRESHOLD && this.startSliding(t);
      }
      onWindowMouseUp(e) {
        this.stopSliding();
      }
      startSliding(e) {
        var t;
        null === (t = this.slider) || void 0 === t || t.startExternalSliding(e);
      }
      stopSliding() {
        var e, t, r, n;
        window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove
          ),
          (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) &&
            (null === (r = (t = this.props).onHideTray) ||
              void 0 === r ||
              r.call(t)),
          null === (n = this.slider) || void 0 === n || n.stopExternalSliding();
      }
      render() {
        return a.createElement(W, {
          imageUrl: f.a.Instance.muted
            ? "/dashboard/images/icons/svr_volume_mute.svg"
            : "/dashboard/images/icons/svr_volume.svg",
          active: this.props.active,
          label: this.props.active ? null : Object(c.c)("#Volume"),
          onMouseDown: this.onButtonMouseDown,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave,
        });
      }
    });
    (J.MIN_DRAG_THRESHOLD = 35),
      Object(o.b)([l.bind], J.prototype, "onButtonMouseDown", null),
      Object(o.b)([l.bind], J.prototype, "onWindowMouseMove", null),
      Object(o.b)([l.bind], J.prototype, "onWindowMouseUp", null),
      (J = s = Object(o.b)([v.a], J));
    const Z = (e) => {
      const t = a.useRef();
      return a.createElement(
        d.a,
        {
          className: Object(h.a)(
            "ButtonControl",
            ["Active", e.active],
            ["WithIcon", !!e.iconUrl],
            e.additionalClassNames
          ),
          onClick: e.onClick,
          onMouseEnter: () => {
            var r;
            null === (r = t.current) || void 0 === r || r.show(),
              e.onMouseEnter && e.onMouseEnter();
          },
          onMouseLeave: () => {
            var r;
            null === (r = t.current) || void 0 === r || r.hide(),
              e.onMouseLeave && e.onMouseLeave();
          },
          enabled: e.enabled,
        },
        e.title &&
          a.createElement(H, {
            text: e.title,
            translation: e.tooltipTranslation,
            ref: t,
          }),
        e.label && a.createElement("span", null, e.label),
        e.iconUrl &&
          a.createElement("img", {
            className: "Icon BlackToWhite",
            src: e.iconUrl,
          })
      );
    };
  },
  "ru2+": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return b;
    });
    var n = r("mrSG"),
      i = r("q1tI"),
      s = r("okNM"),
      o = r("7wIv"),
      a = r("GXif"),
      l = r("MYgy"),
      c = r("Z0gP"),
      d = r("2vnA"),
      u = r("uFkT"),
      h = r("6YgL"),
      p = r("hcOo"),
      m = r("TbT/");
    let g = class extends i.Component {
      constructor(e) {
        super(e), (this.state = { deviceStatus: null });
      }
      get trackerConfig() {
        return l.a.GetTrackerBinding(this.props.trackerPath);
      }
      OnTrackerRoleChanged(e) {
        l.a.SetTrackerBinding(
          this.props.trackerPath,
          e,
          this.trackerConfig.controller_role
        );
      }
      OnControllerRoleChanged(e) {
        l.a.SetTrackerBinding(
          this.props.trackerPath,
          this.trackerConfig.role,
          e
        );
      }
      BuzzTracker() {
        l.a.PulseHaptics(this.trackerConfig.device_path_handle);
      }
      get deviceInfo() {
        return u.a.GetDeviceInfo(this.props.trackerPath);
      }
      IsConnected() {
        return !(!this.deviceInfo || !this.deviceInfo.is_connected);
      }
      IsIdentifiable() {
        return !(!this.IsConnected() || !this.deviceInfo.is_identifiable);
      }
      render() {
        let e = [];
        if ("TrackerRole_Handed" == this.trackerConfig.role) {
          e = [
            "TrackedControllerRole_Invalid",
            "TrackedControllerRole_LeftHand",
            "TrackedControllerRole_RightHand",
          ].map((e) => ({ value: e, sLabel: Object(a.c)("#" + e) }));
        }
        const t = this.trackerConfig.device_path_string;
        let r = t;
        r.includes("vive_tracker") &&
          (r = r.substring(
            r.indexOf("vive_tracker") + "vive_tracker".length,
            r.length
          ));
        let n = null;
        return (
          this.IsConnected()
            ? this.IsIdentifiable() ||
              (n = Object(a.c)(
                "#Settings_ViveTracker_Identify_NotIdentifiable"
              ))
            : (n = Object(a.c)("#Settings_ViveTracker_Identify_NotConnected")),
          i.createElement(
            m.c,
            { className: "SettingsItem TrackerEntry" },
            i.createElement(
              "div",
              { className: "Label", title: t },
              i.createElement("span", null, r),
              i.createElement("div", {
                title: Object(a.c)(
                  this.IsConnected()
                    ? "#Settings_ViveTracker_Connected"
                    : "#Settings_ViveTracker_Disconnected"
                ),
                className: Object(p.a)(
                  "TrackerConnectionIndicator",
                  ["Connected", c.a.connected && this.IsConnected()],
                  ["Disconnected", c.a.connected && !this.IsConnected()]
                ),
              })
            ),
            i.createElement(
              "div",
              { className: Object(p.a)("SubsectionStem") },
              i.createElement(
                m.c,
                { title: n },
                i.createElement(
                  h.a,
                  {
                    className: "ButtonControl",
                    enabled: this.IsIdentifiable(),
                    onClick: this.BuzzTracker,
                  },
                  Object(a.c)("#TrackerEditor_BuzzTracker")
                )
              )
            ),
            i.createElement(
              "div",
              { className: "Subsection WithStem" },
              i.createElement(m.h, {
                label: Object(a.c)("#Settings_ViveTracker_Role"),
                items: this.props.validTrackerRoles.map((e) => ({
                  value: e,
                  sLabel: Object(a.c)("#" + e),
                })),
                value: this.trackerConfig.role,
                onChange: this.OnTrackerRoleChanged,
              }),
              e.length > 0 &&
                i.createElement(m.h, {
                  label: Object(a.c)("#Settings_ViveTracker_Hand"),
                  items: e,
                  value: this.trackerConfig.controller_role,
                  onChange: this.OnControllerRoleChanged,
                })
            )
          )
        );
      }
    };
    Object(n.b)([d.f], g.prototype, "trackerConfig", null),
      Object(n.b)([o.bind], g.prototype, "OnTrackerRoleChanged", null),
      Object(n.b)([o.bind], g.prototype, "OnControllerRoleChanged", null),
      Object(n.b)([o.bind], g.prototype, "BuzzTracker", null),
      Object(n.b)([d.f], g.prototype, "deviceInfo", null),
      (g = Object(n.b)([s.a], g));
    let b = class extends i.Component {
      constructor(e) {
        super(e), (this.m_nGetInputStateIntervalHandle = 0);
      }
      componentDidMount() {
        (this.m_nGetInputStateIntervalHandle = window.setInterval(
          () => u.a.GetInputState(),
          2e3
        )),
          u.a.GetInputState();
      }
      componentWillUnmount() {
        window.clearInterval(this.m_nGetInputStateIntervalHandle);
      }
      render() {
        let e = l.a.TrackerBindings,
          t = void 0;
        return (
          e &&
            e.trackers &&
            (t = e.trackers.map((t, r) =>
              i.createElement(g, {
                key: r,
                trackerPath: t.device_path_string,
                validTrackerRoles: e.valid_roles,
              })
            )),
          i.createElement("div", { className: "TrackerEditorModal" }, t)
        );
      }
    };
    b = Object(n.b)([s.a], b);
  },
  vvDA: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return n;
    }),
      r.d(t, "a", function () {
        return l;
      });
    var n,
      i = r("mrSG"),
      s = r("q1tI"),
      o = r("7wIv"),
      a = r("/i/y");
    !(function (e) {
      (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
        (e[(e.VerticalBattery = 1)] = "VerticalBattery");
    })(n || (n = {}));
    class l extends s.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.batteryLevelStable = null),
          (this.state = { batteryIconPath: null, roleIconPath: null });
      }
      componentDidMount() {
        var e, t, r;
        (this.m_BatteryStateChangedCallbackHandle =
          null === (e = a.ob) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.OnBatteryStateChanged
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = a.ob) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.OnDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (r = a.ob) || void 0 === r
              ? void 0
              : r.RegisterForDeviceEvents(this.OnDeviceEvent)),
          this.UpdateControllerStatus();
      }
      componentWillUnmount() {
        this.m_BatteryStateChangedCallbackHandle &&
          (this.m_BatteryStateChangedCallbackHandle.unregister(),
          (this.m_BatteryStateChangedCallbackHandle = null)),
          this.m_DeviceRoleChangedCallbackHandle &&
            (this.m_DeviceRoleChangedCallbackHandle.unregister(),
            (this.m_DeviceRoleChangedCallbackHandle = null)),
          this.m_DeviceEventCallbackHandle &&
            (this.m_DeviceEventCallbackHandle.unregister(),
            (this.m_DeviceEventCallbackHandle = null));
      }
      UpdateControllerStatus() {
        var e;
        if (!a.ob) return;
        const t = a.ob.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            a.z.DeviceProvidesBatteryStatus_Bool
          ),
          r = a.ob.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.props.trackedDeviceIndex
          );
        let i = !1;
        if (t) {
          const t =
            null !=
            (e = a.ob.VRProperties.GetFloatProperty(
              this.props.trackedDeviceIndex,
              a.z.DeviceBatteryPercentage_Float
            ))
              ? e
              : 0;
          (i = a.ob.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            a.z.DeviceIsCharging_Bool
          )),
            null == this.batteryLevelStable || 0 == this.batteryLevelStable
              ? (this.batteryLevelStable = t)
              : ((this.batteryLevelStable = Math.min(
                  this.batteryLevelStable,
                  t + l.kBatteryLevelHysteresis,
                  1
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  t - l.kBatteryLevelHysteresis,
                  0
                )));
        }
        let s = l.GetBatteryIcon(
            t,
            i,
            this.batteryLevelStable,
            n.HorizontalPips
          ),
          o = this.GetRoleIcon(r);
        (s == this.state.batteryIconPath && o == this.state.roleIconPath) ||
          this.setState({ batteryIconPath: s, roleIconPath: o });
      }
      GetRoleIcon(e) {
        switch (e) {
          case a.x.TrackedControllerRole_RightHand:
            return "images/icons/controller_model_right.png";
          case a.x.TrackedControllerRole_LeftHand:
            return "images/icons/controller_model_left.png";
        }
        return null;
      }
      static GetBatteryIcon(e, t, r, i) {
        if (!e) return null;
        const s =
          i == n.VerticalBattery
            ? "images/icons/vert"
            : "images/icons/controller_model";
        return t
          ? r < 0.15
            ? s + "_charging_red.png"
            : s + "_charging.png"
          : 0 == r
          ? null
          : r < 0.15
          ? s + "_low.png"
          : r < 0.3
          ? s + "_battery_1.png"
          : r < 0.6
          ? s + "_battery_2.png"
          : r < 0.9
          ? s + "_battery_3.png"
          : s + "_battery_4.png";
      }
      OnBatteryStateChanged(e) {
        e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
      }
      OnDeviceRoleChanged() {
        this.UpdateControllerStatus();
      }
      OnDeviceEvent(e, t, r) {
        e == a.m.Activated &&
          r == this.props.trackedDeviceIndex &&
          this.UpdateControllerStatus();
      }
      render() {
        return s.createElement(
          a.ab,
          {
            width: void 0,
            height: void 0,
            interactive: !1,
            rendermodel_component_device_index: this.props.trackedDeviceIndex,
            rendermodel_component_name: "status",
            debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
          },
          s.createElement(
            "div",
            {
              className: "ControllerStatusRoot",
              style: { width: 256, height: 256 },
            },
            s.createElement(
              "div",
              { className: "ControllerStatusFrame" },
              s.createElement(
                "div",
                {
                  className: "ControllerHandFrame",
                  style: {
                    width: 210,
                    marginLeft: 23,
                    height: 110,
                    marginTop: 18,
                  },
                },
                s.createElement("img", {
                  className: "ControllerHand",
                  src: this.state.roleIconPath,
                })
              ),
              s.createElement(
                "div",
                {
                  className: "ControllerBatteryFrame",
                  style: {
                    width: 210,
                    marginLeft: 23,
                    height: 110,
                    marginTop: 18,
                    opacity: 0.85,
                  },
                },
                s.createElement("img", {
                  className: "ControllerBattery",
                  src: this.state.batteryIconPath,
                })
              )
            )
          )
        );
      }
    }
    (l.kBatteryLevelHysteresis = 0.02),
      Object(i.b)([o.bind], l.prototype, "OnBatteryStateChanged", null),
      Object(i.b)([o.bind], l.prototype, "OnDeviceRoleChanged", null),
      Object(i.b)([o.bind], l.prototype, "OnDeviceEvent", null);
  },
  xCzn: function (e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "VRKeyboard", function () {
        return f;
      });
    var n,
      i,
      s,
      o,
      a = r("mrSG"),
      l = r("q1tI"),
      c = r("i8i4"),
      d = r("vDqi"),
      u = r.n(d),
      h = r("7wIv"),
      p = r("/i/y"),
      m = r("GXif"),
      g = r("Q+Z6"),
      b = r("uFkT"),
      v = r("Kysl"),
      _ = r("6YgL"),
      y = r("CzjV");
    class f extends l.Component {
      constructor(e) {
        var t, r;
        super(e),
          (this.m_genid = 0),
          (this.m_language = null),
          (this.m_languageToLayout = new Map()),
          (this.m_keyTypeToHandler = null),
          (this.m_curShiftPlane = null),
          (this.m_keyElements = null),
          (this.m_mailbox = new p.c()),
          this.m_mailbox.Init("keyboard").then(() => {
            this.m_mailbox.RegisterHandler(
              "show_keyboard",
              this.OnRequestShowKeyboard
            ),
              this.m_mailbox.RegisterHandler(
                "hide_keyboard",
                this.OnRequestHideKeyboard
              );
          }),
          this.initializeKeyHandlers(),
          (this.state = {
            bFading: !1,
            bVisible: !1,
            bMinimalMode: !1,
            bMultilinePreview: !1,
            inputMode: p.q.Normal,
            activeKey: { nCol: -1, nRow: -1 },
            presentation: "overlay",
            shiftPlaneName: "normal",
            layout: null,
            langLayout: null,
            text: "",
            textPos: 0,
            suggestions: [],
          }),
          null === (t = VRHTML) ||
            void 0 === t ||
            t.VRKeyboard.LoadSuggestionsForLanguage(this.language()),
          null === (r = VRHTML) ||
            void 0 === r ||
            r.RegisterForModalCancel(this.OnModalCancel),
          g.d.Init(!1);
      }
      OnModalCancel() {
        this.startClose();
      }
      OnRequestShowKeyboard(e) {
        var t;
        let r =
          null === (t = VRHTML) || void 0 === t
            ? void 0
            : t.VRDashboardManager.GetKeyboardInputInfo();
        this.onShowKeyboard(r);
      }
      OnRequestHideKeyboard(e) {
        var t, r;
        null === (t = VRHTML) || void 0 === t || t.VROverlay.Hide(),
          null === (r = VRHTML) ||
            void 0 === r ||
            r.VRDashboardManager.CloseKeyboard();
      }
      onShowKeyboard(e) {
        var t, r;
        let n = !!(p.o.Modal & e.keyboardFlags);
        null === (t = VRHTML) ||
          void 0 === t ||
          t.VROverlay.SetFlag(
            VRHTML.VROverlay.ThisOverlayHandle(),
            p.E.WantsModalBehavior,
            n
          ),
          this.setState({
            bVisible: !0,
            inputMode: e.inputMode,
            bMinimalMode: !!(p.o.Minimal & e.keyboardFlags),
            bMultilinePreview: e.lineMode == p.p.MultipleLines,
            text: e.keyboardBuffer,
            textPos: e.keyboardBuffer.length,
          }),
          this.updateSuggestions(e.keyboardBuffer),
          this.getLayout("base"),
          this.getLayout(this.language()),
          "overlay" == this.state.presentation &&
            (null === (r = VRHTML) || void 0 === r || r.VROverlay.Show());
      }
      startClose() {
        var e, t;
        this.setState({ bVisible: !1 }),
          null === (e = VRHTML) ||
            void 0 === e ||
            e.VRDashboardManager.CloseKeyboard(),
          null === (t = VRHTML) || void 0 === t || t.VROverlay.Hide();
      }
      genid() {
        return (this.m_genid += 1), "vk" + this.m_genid;
      }
      language() {
        var e, t;
        return (
          this.m_language ||
            (this.props.language
              ? (this.m_language = this.props.language)
              : (this.m_language =
                  null !=
                  (t =
                    null === (e = VRHTML) || void 0 === e
                      ? void 0
                      : e.GetSteamVRLanguage())
                    ? t
                    : "english")),
          this.m_language
        );
      }
      bShowPasswordPreview() {
        return this.state.inputMode == p.q.Password;
      }
      getLayoutFile(e) {
        return Object(a.a)(this, void 0, void 0, function* () {
          let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
          return u.a
            .get(t)
            .then((e) => (200 != e.status ? null : e.data))
            .catch((t) =>
              "english" != e ? this.getLayoutFile("english") : null
            );
        });
      }
      getLayout(e) {
        this.m_languageToLayout.has(e)
          ? this.onLayoutLoaded()
          : this.getLayoutFile(e).then((t) => {
              t && (this.m_languageToLayout.set(e, t), this.onLayoutLoaded());
            });
      }
      onLayoutLoaded() {
        this.m_languageToLayout.has("base") &&
          this.m_languageToLayout.has(this.language()) &&
          ((this.m_keyElements = null),
          this.setState({
            layout: this.m_languageToLayout.get("base"),
            langLayout: this.m_languageToLayout.get(this.language()),
            shiftPlaneName: "normal",
          }),
          this.toggleShiftPlaneWith("normal"));
      }
      initializeKeyHandlers() {
        (this.m_keyTypeToHandler = new Map()),
          this.m_keyTypeToHandler.set("key", this.handleKey),
          this.m_keyTypeToHandler.set("del", this.handleDel),
          this.m_keyTypeToHandler.set("shift", this.handleShift),
          this.m_keyTypeToHandler.set("symbols", this.handleSymbols),
          this.m_keyTypeToHandler.set("done", this.handleDone),
          this.m_keyTypeToHandler.set("cancel", this.handleCancel),
          this.m_keyTypeToHandler.set("clear", this.handleClear),
          this.m_keyTypeToHandler.set("return", this.handleReturn);
      }
      findShiftPlane(e) {
        for (let t of this.state.langLayout.shiftPlanes)
          if (t.name == e) return t;
        return null;
      }
      toggleShiftPlaneWith(e) {
        (this.m_curShiftPlane && this.m_curShiftPlane.name != e) ||
          (e = "normal");
        let t = this.findShiftPlane(e);
        t && ((this.m_curShiftPlane = t), this.setState({ shiftPlaneName: e }));
      }
      onKey(e, t) {
        if (
          e < this.state.layout.geometry.length &&
          t < this.state.layout.geometry[e].keys.length
        ) {
          let r = this.state.layout.geometry[e].keys[t];
          if ("string" == typeof r);
          else if ("key" != r.type)
            return void this.m_keyTypeToHandler.get(r.type)(r);
        }
        if (
          e < this.m_curShiftPlane.rows.length &&
          t < this.m_curShiftPlane.rows[e].length
        ) {
          let r = this.m_curShiftPlane.rows[e][t];
          "string" == typeof r
            ? this.m_keyTypeToHandler.get("key")(r)
            : this.m_keyTypeToHandler.has(r.type) &&
              this.m_keyTypeToHandler.get(r.type)(r);
        }
      }
      handleKey(e) {
        let t;
        if (((t = "string" == typeof e ? e : e.value), this.state.bMinimalMode))
          this.UpdateText(t, 1);
        else {
          let e =
              this.state.text.substr(0, this.state.textPos) +
              t +
              this.state.text.substr(this.state.textPos),
            r = this.state.textPos + t.length;
          this.UpdateText(e, r);
        }
      }
      handleReturn() {
        this.handleKey("\n");
      }
      handleDel() {
        if (this.state.bMinimalMode) this.handleKey("\b");
        else {
          let e = this.state.text.substr(0, this.state.textPos),
            t = this.state.text.substr(this.state.textPos);
          if (e.length > 0) {
            let r = e.substr(0, e.length - 1) + t,
              n = this.state.textPos - 1;
            this.UpdateText(r, n);
          }
        }
      }
      handleShift() {
        this.toggleShiftPlaneWith("shift");
      }
      handleSymbols() {
        this.toggleShiftPlaneWith("symbols");
      }
      UpdateText(e, t) {
        var r;
        this.setState({ text: e, textPos: t }),
          null === (r = VRHTML) ||
            void 0 === r ||
            r.VRKeyboard.SetKeyboardText(e),
          this.updateSuggestions(this.getSuggestionBase(e, t));
      }
      handleDone(e) {
        var t;
        null === (t = VRHTML) ||
          void 0 === t ||
          t.VRDashboardManager.SendKeyboardDone(),
          this.startClose();
      }
      handleCancel(e) {
        this.startClose();
      }
      handleClear(e) {
        this.setState({ text: "", textPos: 0 }), this.updateSuggestions("");
      }
      isWhite(e) {
        return " " == e;
      }
      findWordLimits(e, t) {
        if (
          t < e.length &&
          this.isWhite(e[t]) &&
          (0 == t || (t > 1 && this.isWhite(e[t - 1])))
        )
          return null;
        let r = t;
        for (; r > 0 && !this.isWhite(e[r]); ) r -= 1;
        r < e.length && this.isWhite(e[r]) && (r += 1);
        let n = r;
        for (; n < e.length && !this.isWhite(e[n]); ) n += 1;
        return [r, n];
      }
      getSuggestionBase(e, t) {
        let r = this.findWordLimits(e, t);
        return r ? e.substr(r[0], r[1] - r[0]) : null;
      }
      updateSuggestions(e) {
        var t, r;
        if (null != this.state.layout)
          if (this.bShowPasswordPreview()) this.setState({ suggestions: [] });
          else if (
            (null == e &&
              (e = this.getSuggestionBase(this.state.text, this.state.textPos)),
            null != e && e.length > 0)
          ) {
            new Array(this.state.layout.previewSuggestionCount);
            let n =
              null !=
              (r =
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.VRKeyboard.GetSuggestions(
                      e,
                      this.state.layout.previewSuggestionCount
                    ))
                ? r
                : [];
            this.setState({ suggestions: n });
          } else this.setState({ suggestions: [] });
      }
      handleSuggestionClick(e) {
        if (e >= this.state.suggestions.length) return;
        let t = this.state.suggestions[e],
          r = this.findWordLimits(this.state.text, this.state.textPos);
        if (r) {
          let e = this.state.text.substr(0, r[0]);
          t += " ";
          let n = e + t + this.state.text.substr(r[1]),
            i = e.length + t.length;
          this.UpdateText(n, i);
        }
      }
      onMouseEnter(e, t) {}
      makeKeyFaceElement(e, t) {
        let r = "VRKBKeyFace";
        if ((t && (r += " VRKBShift_" + t.name), "string" == typeof e))
          return l.createElement(
            "span",
            { key: this.genid(), className: r },
            e
          );
        {
          let t = e.text;
          e.value ? e.value : e.text;
          switch (
            (e.img &&
              (t = l.createElement("img", {
                src: `/dashboard/images/vrkeyboard/${e.img}.png`,
              })),
            "string" == typeof t && t.startsWith("#") && (t = Object(m.c)(t)),
            e.type)
          ) {
            case "key":
            case "symbols":
            case "del":
            case "cancel":
            case "shift":
            case "symbols":
            case "return":
              return l.createElement(
                "span",
                { key: this.genid(), className: r },
                t
              );
            case "done":
              return l.createElement(
                "span",
                { key: this.genid(), className: r + " VRKBDone" },
                t
              );
            case "hole":
              return l.createElement("span", {
                key: this.genid(),
                className: r,
              });
            default:
              return (
                console.log("unknown key type ", e.type, " in keyboard layout"),
                null
              );
          }
        }
      }
      getKeyFaces(e, t) {
        let r = [];
        if (
          e < this.state.layout.geometry.length &&
          t < this.state.layout.geometry[e].keys.length
        ) {
          "key" != this.state.layout.geometry[e].keys[t].type &&
            r.push(
              this.makeKeyFaceElement(
                this.state.layout.geometry[e].keys[t],
                null
              )
            );
        }
        if (0 == r.length)
          for (let n of this.state.langLayout.shiftPlanes)
            e < n.rows.length &&
              t < n.rows[e].length &&
              r.push(this.makeKeyFaceElement(n.rows[e][t], n));
        return r;
      }
      getKeyElements() {
        let e = [];
        for (let t = 0; t < this.state.layout.geometry.length; ++t) {
          let r = this.state.layout.geometry[t],
            n = [];
          for (let e = 0; e < r.keys.length; ++e) {
            let i = r.keys[e],
              s = {};
            i.flexGrow && (s.flexGrow = i.flexGrow),
              i.flexShrink && (s.flexShrink = i.flexShrink),
              this.state.shiftPlaneName == i.type && (s.background = "#000"),
              this.state.activeKey.nCol == e &&
                this.state.activeKey.nRow == t &&
                (s.background = "#000");
            let o = this.getKeyFaces(t, e),
              a = () => {
                "done" == i.type && this.onKey(t, e);
              },
              c = () => {
                "done" != i.type &&
                  (this.setState({ activeKey: { nRow: t, nCol: e } }),
                  this.onKey(t, e));
              },
              d = () => {
                "done" != i.type &&
                  this.setState({ activeKey: { nRow: -1, nCol: -1 } });
              };
            n.push(
              l.createElement(
                _.a,
                {
                  key: this.genid(),
                  className: "VRKBKey",
                  pressSoundEffect: y.a.KeyboardClick,
                  releaseSoundEffect: null,
                  onClick: a,
                  onMouseDown: c,
                  onMouseUp: d,
                  style: s,
                },
                o
              )
            );
          }
          let i = {};
          r.height && (i.height = r.height),
            e.push(
              l.createElement(
                "div",
                { key: this.genid(), className: "VRKBRow", style: i },
                n
              )
            );
        }
        return l.createElement("div", { className: "VRKBRows" }, e);
      }
      makeCursor() {
        return l.createElement(
          "span",
          { key: this.genid(), className: "VRKBPreviewTextCursor" },
          "|"
        );
      }
      makePreviewText() {
        let e = this.state.text.substr(0, this.state.textPos),
          t = this.state.text.substr(this.state.textPos);
        return this.bShowPasswordPreview()
          ? ((e = f.kPasswordChar.repeat(e.length)),
            (t = f.kPasswordChar.repeat(t.length)),
            [
              l.createElement(
                "span",
                { key: this.genid(), className: "VRKBPreviewTextPart" },
                f.kPasswordChar.repeat(e.length)
              ),
              this.makeCursor(),
              l.createElement(
                "span",
                { key: this.genid(), className: "VRKBPreviewTextPart" },
                f.kPasswordChar.repeat(t.length)
              ),
            ])
          : [
              l.createElement(
                "span",
                { key: this.genid(), className: "VRKBPreviewTextPart" },
                e
              ),
              this.makeCursor(),
              l.createElement(
                "span",
                { key: this.genid(), className: "VRKBPreviewTextPart" },
                t
              ),
            ];
      }
      makeSuggestionElements() {
        let e = [];
        if (this.state.suggestions)
          for (let t = 0; t < this.state.suggestions.length; ++t)
            e.push(
              l.createElement(
                "div",
                {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                  onClick: () => this.handleSuggestionClick(t),
                },
                this.state.suggestions[t]
              )
            );
        for (
          let t = e.length;
          t < this.state.layout.previewSuggestionCount;
          ++t
        )
          e.push(
            l.createElement("div", {
              key: this.genid(),
              className: "VRKBSuggestion",
            })
          );
        return e;
      }
      renderFlatPreview() {
        return this.state.bMinimalMode
          ? null
          : l.createElement(
              "div",
              { className: "VRKBPreviewWrapper" },
              l.createElement(
                "div",
                { key: this.genid(), className: "VRKBPreviewText" },
                this.makePreviewText()
              ),
              l.createElement(
                "div",
                { key: this.genid(), className: "VRKBSuggestionWrapper" },
                this.makeSuggestionElements()
              )
            );
      }
      render_flat() {
        return l.createElement(
          p.nb,
          { parent_path: "/user/head" },
          l.createElement(
            p.H,
            null,
            l.createElement(
              p.nb,
              { translation: this.state.layout.translation },
              l.createElement(
                p.ab,
                {
                  width: void 0,
                  height: 1,
                  interactive: !0,
                  sort_depth_bias: 0.2,
                },
                l.createElement(
                  "div",
                  {
                    className:
                      "VRKBShiftState VRKBChooseShift_" +
                      this.state.shiftPlaneName,
                  },
                  l.createElement(
                    "div",
                    { className: "VRKBBackground" },
                    this.renderFlatPreview(),
                    this.m_keyElements
                  )
                )
              )
            )
          )
        );
      }
      render_overlay() {
        return l.createElement(
          "div",
          {
            className:
              "VRKBContainer VRKBShiftState VRKBChooseShift_" +
              this.state.shiftPlaneName,
          },
          l.createElement(
            "div",
            { className: "VRKBBackground" },
            this.renderFlatPreview(),
            this.m_keyElements
          )
        );
      }
      render3dPreview() {
        return null;
      }
      render_3d() {
        return null;
      }
      render() {
        if (!this.state.layout)
          return console.log("xxx render layout==null, bailing"), null;
        if (!this.state.bVisible)
          return console.log("xxx render !visible, so bailing"), null;
        switch (
          ((this.m_keyElements = this.getKeyElements()),
          this.state.presentation)
        ) {
          case "flat":
            return this.render_flat();
          case "3d":
            return this.render_3d();
          case "overlay":
            return this.render_overlay();
          default:
            return (
              console.log(
                "bad keyboard presentation:",
                this.state.presentation
              ),
              null
            );
        }
      }
    }
    (f.kPasswordChar = "●"),
      Object(a.b)([h.bind], f.prototype, "OnModalCancel", null),
      Object(a.b)([h.bind], f.prototype, "OnRequestShowKeyboard", null),
      Object(a.b)([h.bind], f.prototype, "OnRequestHideKeyboard", null),
      Object(a.b)([h.bind], f.prototype, "onShowKeyboard", null),
      Object(a.b)([h.bind], f.prototype, "handleKey", null),
      Object(a.b)([h.bind], f.prototype, "handleReturn", null),
      Object(a.b)([h.bind], f.prototype, "handleDel", null),
      Object(a.b)([h.bind], f.prototype, "handleShift", null),
      Object(a.b)([h.bind], f.prototype, "handleSymbols", null),
      Object(a.b)([h.bind], f.prototype, "handleDone", null),
      Object(a.b)([h.bind], f.prototype, "handleCancel", null),
      Object(a.b)([h.bind], f.prototype, "handleClear", null),
      Object(a.b)([h.bind], f.prototype, "handleSuggestionClick", null),
      Object(a.b)([h.bind], f.prototype, "onMouseEnter", null);
    const S =
      null === (n = VRHTML) || void 0 === n ? void 0 : n.GetSteamVRLanguage();
    null === (i = VRHTML) ||
      void 0 === i ||
      i.VROverlay.SetFlag(
        VRHTML.VROverlay.ThisOverlayHandle(),
        p.E.MakeOverlaysInteractiveIfVisible,
        !0
      ),
      null === (s = VRHTML) ||
        void 0 === s ||
        s.VROverlay.SetInputMethod(
          VRHTML.VROverlay.ThisOverlayHandle(),
          p.F.Mouse
        ),
      null === (o = VRHTML) ||
        void 0 === o ||
        o.VRDashboardManager.SetKeyboardOverlayToThis(),
      Object(m.b)(["systemui"], S)
        .then(() => b.a.Init())
        .then(() => v.a.Init())
        .then(() => {
          c.render(
            l.createElement(f, { language: S }),
            document.getElementById("root")
          );
        });
  },
});
//# sourceMappingURL=keyboard.js.map?v=0fad265808d1e02ae16c
