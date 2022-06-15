/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var i, s, a = t[0], l = t[1], c = t[2], u = 0, p = [];
      u < a.length;
      u++
    )
      (s = a[u]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]),
        (r[s] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    for (d && d(t); p.length; ) p.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, a = 1; a < n.length; a++) {
        var l = n[a];
        0 !== r[l] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var i = {},
    r = { 2: 0 },
    o = [];
  function s(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = i),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          s.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    l = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var c = 0; c < a.length; c++) t(a[c]);
  var d = l;
  o.push(["Lkzh", 0, 1]), n();
})({
  "/i/y": function (e, t, n) {
    "use strict";
    var i = n("mrSG"),
      r = n("7wIv"),
      o = n.n(r);
    class s {
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
          let n = "ws://localhost:27062";
          this.m_sWebSecret && (n += "?secret=" + this.m_sWebSecret),
            (this.m_fnConnectResolve = e),
            (this.m_wsWebSocketToServer = new WebSocket(n)),
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
        return Object(i.a)(this, void 0, void 0, function* () {
          return (
            (this.m_sMailboxName = s.EnsureUniqueName(e)),
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
          n = !1;
        if (
          (this.m_oHandlers.hasOwnProperty(t.type) &&
            (this.m_oHandlers[t.type](t), (n = !0)),
          this.m_oWaits.hasOwnProperty(t.type))
        ) {
          let e = !1;
          for (let n of this.m_oWaits[t.type])
            n.nMessageId == t.message_id && (n.callback(t), (e = !0));
          e
            ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                (e) => e.nMessageId == t.message_id
              ))
            : console.log(
                `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`
              ),
            (n = !0);
        }
        n || console.log("Received unhandled message: ", t);
      }
      RegisterHandler(e, t) {
        this.m_oHandlers[e] = t;
      }
      SendMessage(e, t) {
        this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
      }
      WaitForMessage(e, t) {
        return new Promise((n, i) => {
          this.m_oWaits[e] || (this.m_oWaits[e] = []),
            this.m_oWaits[e].push({ callback: n, nMessageId: t });
        });
      }
      WaitForConnect() {
        return new Promise((e, t) => {
          this.connected ? e() : this.m_oConnectWaits.push(e);
        });
      }
      WaitForMailbox(e) {
        return Object(i.a)(this, void 0, void 0, function* () {
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
      SendMessageAndWaitForResponse(e, t, n) {
        let i = Object.assign({}, t);
        return (
          null == i.returnAddress && (i.returnAddress = this.m_sMailboxName),
          (i.message_id = this.m_nNextMessageNumber++),
          this.SendMessage(e, i),
          this.WaitForMessage(n, i.message_id)
        );
      }
      SendResponse(e, t) {
        if (!e.returnAddress)
          throw new Error("Missing return address on message");
        let n = Object.assign(Object.assign({}, t), {
          message_id: e.message_id,
        });
        (n.message_id = e.message_id), this.SendMessage(e.returnAddress, n);
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
    function c(e, t, n) {
      return {
        x: t.x + e * (n.x - t.x),
        y: t.y + e * (n.y - t.y),
        z: t.z + e * (n.z - t.z),
      };
    }
    function d(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function u(e, t) {
      return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
    }
    function p(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function h(e, t) {
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
        n = 0.5 * e.y,
        i = 0.5 * e.z,
        r = Math.cos(t),
        o = Math.cos(n),
        s = Math.cos(i),
        a = Math.sin(t),
        l = Math.sin(n),
        c = Math.sin(i);
      return {
        w: r * o * s + a * l * c,
        x: a * o * s + r * l * c,
        y: r * l * s - a * o * c,
        z: r * o * c - a * l * s,
      };
    }
    function v(e) {
      let t = e[0][0] + e[1][1] + e[2][2];
      if (t > 0) {
        let n = 2 * Math.sqrt(t + 1);
        return {
          w: 0.25 * n,
          x: (e[1][2] - e[2][1]) / n,
          y: (e[2][0] - e[0][2]) / n,
          z: (e[0][1] - e[1][0]) / n,
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
      let n = 2 * (e.y * t.z - e.z * t.y),
        i = 2 * (e.z * t.x - e.x * t.z),
        r = 2 * (e.x * t.y - e.y * t.x);
      return {
        x: t.x + e.w * n + e.y * r - e.z * i,
        y: t.y + e.w * i + e.z * n - e.x * r,
        z: t.z + e.w * r + e.x * i - e.y * n,
      };
    }
    function y(e, t, n) {
      return [
        [e.x, e.y, e.z],
        [t.x, t.y, t.z],
        [n.x, n.y, n.z],
      ];
    }
    function f(e) {
      return _(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function S(e) {
      let t = g(e);
      return { x: e.x / t, y: e.y / t, z: e.z / t };
    }
    function C(e, t) {
      return {
        x: e.y * t.z - e.z * t.y,
        y: e.z * t.x - e.x * t.z,
        z: e.x * t.y - e.y * t.x,
      };
    }
    function O(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    (s.s_nNextMailboxNumber = 1),
      Object(i.b)([r.bind], s.prototype, "OpenWebSocketToHost", null),
      Object(i.b)([r.bind], s.prototype, "OnWebSocketOpen", null),
      Object(i.b)([r.bind], s.prototype, "OnWebSocketClose", null),
      Object(i.b)([r.bind], s.prototype, "WebSocketSend", null),
      Object(i.b)([r.bind], s.prototype, "OnWebSocketMessage", null);
    class k {
      constructor() {
        (this.m_mailbox = new s()), this.m_mailbox.Init("sgtransformcache");
      }
      static getInstance() {
        return k.instance || (k.instance = new k()), k.instance;
      }
      requestSGTransform(e, t = 0) {
        return new Promise((n, r) =>
          Object(i.a)(this, void 0, void 0, function* () {
            let i = { type: "transform_request", id: e, flPushDistance: t },
              o = yield this.m_mailbox.SendMessageAndWaitForResponse(
                "vrcompositor_systemlayer",
                i,
                "transform_response"
              );
            o.id == e && o.transform
              ? n(o.transform)
              : r("requestSGTransform failed");
          })
        );
      }
    }
    var D = n("q1tI");
    function w(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) {
        if ("undefined" == n) return;
        let e = [];
        for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
        if (e.length > 0) return e;
      }
    }
    function M(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseFloat(n);
    }
    function R(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseInt(n);
    }
    function E(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0)
        return (
          "true" == n ||
          (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
        );
    }
    function T(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return n;
    }
    function I(e, t) {
      return W(T(e, t));
    }
    function P(e, t) {
      let n = { type: e, properties: {} };
      return (
        t.id && (n.properties.id = W(t.id)),
        (n.properties.sgid = R(t, "sgid")),
        n
      );
    }
    function x(e, t) {
      let [n, i] = (function (e, t) {
          let n = t.buildNode;
          if (n) return n(e, t);
          let i = Object.assign({}, e),
            r = null;
          switch (t.nodeName.toUpperCase()) {
            case "VSG-TRANSFORM":
              (r = P("transform", t)),
                (r.properties.translation = w(t, "translation")),
                (r.properties.rotation = w(t, "rotation")),
                (r.properties.scale = w(t, "scale")),
                (r.properties["curvature-pitch"] = M(t, "curvature-pitch")),
                (r.properties["parent-path"] = T(t, "parent-path")),
                (r.properties["parent-origin"] = T(t, "parent-origin")),
                (r.properties["parent-id"] = I(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (r = P("trackingstatevisibility", t)),
                (r.properties["visible-0dof"] = E(t, "visible-0dof")),
                (r.properties["visible-3dof"] = E(t, "visible-3dof")),
                (r.properties["visible-6dof"] = E(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (r = P("elasticheadtransform", t)),
                (r.properties["start-angle-threshold"] = M(
                  t,
                  "start-angle-threshold"
                )),
                (r.properties["stop-angle-threshold"] = M(
                  t,
                  "stop-angle-threshold"
                )),
                (r.properties["ease-in-time"] = M(t, "ease-in-time")),
                (r.properties["ease-in-power"] = M(t, "ease-in-power")),
                (r.properties["ease-out-angle-threshold"] = M(
                  t,
                  "ease-out-angle-threshold"
                )),
                (r.properties["ease-out-power"] = M(t, "ease-out-power")),
                (r.properties["min-angular-velocity"] = M(
                  t,
                  "min-angular-velocity"
                )),
                (r.properties["max-angular-velocity"] = M(
                  t,
                  "max-angular-velocity"
                )),
                (r.properties["lock-to-horizon"] = E(t, "lock-to-horizon")),
                (r.properties["translation-behavior"] = R(
                  t,
                  "translation-behavior"
                ));
              break;
            case "VSG-LINE":
              (r = P("line", t)),
                (r.properties["target-id"] = I(t, "target-id")),
                (r.properties.thickness = M(t, "thickness")),
                (r.properties["start-buffer"] = M(t, "start-buffer")),
                (r.properties["end-buffer"] = M(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (r = P("line-constrained-transform", t)),
                (r.properties["target-id"] = I(t, "target-id")),
                (r.properties["source-id"] = I(t, "source-id")),
                (r.properties["source-distance"] = M(t, "source-distance")),
                (r.properties["target-limit"] = M(t, "target-limit"));
              break;
            case "VSG-CALLOUT-TRANSFORM":
              (r = P("callout-transform", t)),
                (r.properties.offset = w(t, "offset"));
              break;
            case "VSG-HEAD-FACING-TRANSFORM":
              r = P("head-facing-transform", t);
              break;
            case "VSG-PIN-TO-VIEW-TRANSFORM":
              (r = P("pin-to-view-transform", t)),
                (r.properties["offscreen-z-depth"] = M(t, "offscreen-z-depth")),
                (r.properties["off-axis-limit"] = M(t, "off-axis-limit")),
                (r.properties["transition-limit"] = M(t, "transition-limit"));
          }
          return [i, r];
        })(e, t),
        r = [];
      for (let e = 0; e < t.children.length; e++) {
        let i = t.children.item(e);
        if (i.children) {
          let e = x(n, i);
          e && (r = r.concat(e));
        }
      }
      return n.bShouldAbort
        ? null
        : i
        ? (r.length > 0 && (i.children = r), [i])
        : r.length > 0
        ? 1 == r.length
          ? r
          : [{ children: r }]
        : null;
    }
    let V,
      L,
      B,
      A,
      N = [],
      H = null,
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
      A = !0;
    }
    function K(e) {
      e != j && ((j = e), q());
    }
    function q() {
      H ||
        (H = window.setTimeout(
          () =>
            Object(i.a)(this, void 0, void 0, function* () {
              let e = document.body;
              L && (e = L);
              let t = {
                type: "root",
                rootproperties: {
                  relatchDashboardTransform: A,
                  sceneCompositeMult: j,
                },
                children: x({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              F ||
                (console.log("Initializing sg_mailbox"),
                (F = new s()),
                yield F.Init("sg_mailbox", B));
              let n = {
                type: "update_scene_graph",
                owning_overlay_key: z(),
                scene_graph: t,
                retired_sgids: N,
              };
              F.SendMessage("vrcompositor_systemlayer", n),
                (H = null),
                (N = []),
                (A = !1);
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
    class $ extends D.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = D.createRef()),
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
          N.push(e),
          q(),
          this.m_domRef.current &&
            this.m_buildNodeOverride &&
            delete this.m_domRef.current.buildNode;
      }
      render() {
        return D.cloneElement(this.internalRender(), {
          id: this.props.id,
          "vsg-type": this.getNodeType(),
          sgid: this.m_SGID,
          ref: this.m_domRef,
        });
      }
      internalRender() {
        return this.m_buildNodeOverride
          ? D.createElement("vsg-node", null, this.props.children)
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
    Object(i.b)([o.a], ee.prototype, "buildNode", null);
    class te extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "mountedscenegraph";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        return (
          (n.properties.mountable_id = W(this.props.mountedId)),
          this.props.fDashboardScale &&
            (n.properties.dashboard_scale = this.props.fDashboardScale),
          [e, n]
        );
      }
    }
    Object(i.b)([o.a], te.prototype, "buildNode", null);
    class ne extends $ {
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
        var n;
        const i = this.createSgNode(t);
        return (
          (i.properties.tab_name = null != (n = this.props.tabName) ? n : ""),
          (i.properties.mountable_id = W(this.m_sMountableUnqualifiedID)),
          (i.properties.icon_uri = this.props.iconUri),
          (i.properties.icon_overlay_key = this.props.iconOverlayKey),
          (i.properties.summon_overlay_key = this.props.summonOverlayKey),
          [e, i]
        );
      }
      internalRender() {
        return D.createElement(
          "vsg-node",
          { id: this.props.id },
          D.createElement(
            ee,
            { id: this.m_sMountableUnqualifiedID },
            this.props.children
          )
        );
      }
    }
    Object(i.b)([o.a], ne.prototype, "buildNode", null);
    class ie extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "tint";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        if (this.props.color)
          if ("string" == typeof this.props.color)
            n.properties.color = this.props.color;
          else {
            let e = Y(this.props.color, { r: 1, g: 1, b: 1 });
            n.properties.color = [e.r, e.g, e.b];
          }
        else n.properties.color = [1, 1, 1];
        return [e, n];
      }
    }
    Object(i.b)([o.a], ie.prototype, "buildNode", null);
    class re extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "opacity";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        return (n.properties.opacity = this.props.value), [e, n];
      }
    }
    var oe, se, ae, le, ce, de, ue, pe, he, me, ge;
    Object(i.b)([o.a], re.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(oe || (oe = {}));
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
        let e, t, n;
        this.props.transform
          ? ((e = this.props.transform.translation),
            (t = this.props.transform.rotation),
            (n = this.props.transform.scale))
          : ((e = X(this.props.translation, { x: 0, y: 0, z: 0 })),
            (t = b(
              h(X(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180)
            )),
            (n =
              "number" == typeof this.props.scale
                ? {
                    x: this.props.scale,
                    y: this.props.scale,
                    z: this.props.scale,
                  }
                : X(this.props.scale, { x: 1, y: 1, z: 1 })));
        let i = Z(e),
          r = (function (e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          })(t),
          o = Z(n);
        return D.createElement(
          "vsg-transform",
          {
            translation: i,
            rotation: r,
            scale: o,
            "curvature-pitch": this.props.curvature_pitch,
            "parent-path": this.props.parent_path,
            "parent-origin": oe[this.props.parent_origin],
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
        return D.createElement(
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
        case se.TopLeft:
          return { x: -1, y: 1 };
        case se.TopCenter:
          return { x: 0, y: 1 };
        case se.TopRight:
          return { x: 1, y: 1 };
        case se.CenterLeft:
          return { x: -1, y: 0 };
        case se.Center:
          return { x: 0, y: 0 };
        case se.CenterRight:
          return { x: 1, y: 0 };
        case se.BottomLeft:
          return { x: -1, y: -1 };
        case se.BottomCenter:
          return { x: 0, y: -1 };
        case se.BottomRight:
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
    })(se || (se = {})),
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
      createOverdragBlockingElement(e, t, n, i) {
        let r = document.createElement("div");
        (r.style.position = "absolute"),
          (r.style.top = t + "px"),
          (r.style.left = e + "px"),
          (r.style.width = n + "px"),
          (r.style.height = i + "px"),
          (r.style.zIndex = "90019001"),
          this.m_overdragBlockingElements.push(r),
          document.body.appendChild(r);
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
        var n, i, r, o, s;
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
          (l.properties.uv_min = null != (n = _e(this.m_UVsMin)) ? n : void 0),
          (l.properties.uv_max = null != (i = _e(this.m_UVsMax)) ? i : void 0),
          (l.properties.width = null != (r = this.props.width) ? r : void 0),
          (l.properties.height = null != (o = this.props.height) ? o : void 0),
          (l.properties["min-width"] =
            null != (s = this.props.min_width) ? s : void 0),
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
          n = this.m_UVsMax.v - this.m_UVsMin.v;
        return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + n * e.v };
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
        return D.createElement(
          "vsg-node",
          { style: { display: this.visibility == ce.Hidden ? "none" : null } },
          this.props.children
        );
      }
    }
    (fe.s_bPanelsAreDirty = !1),
      Object(i.b)([o.a], fe.prototype, "onResizeObserved", null),
      Object(i.b)([o.a], fe.prototype, "onPanelMouseDown", null),
      Object(i.b)([o.a], fe.prototype, "onWindowMouseUp", null),
      Object(i.b)([o.a], fe.prototype, "buildNode", null);
    class Se extends D.Component {
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
          (this.m_DomRef = D.createRef()),
          (this.m_scalingDomRef = D.createRef()),
          (this.m_CanvasRef = D.createRef()),
          (this.m_DebugPointerRef = D.createRef());
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
        let n = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
        for (let e = 0; e < n; e++)
          this.m_rAvailableEmbeddedIndicesQueue.push(e);
        var i, r, o;
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
            ((i = this.props.owning_overlay_key),
            (r = this.m_DomRef.current),
            (o = this.props.web_secret),
            (V = i),
            (L = r),
            (B = o),
            console.log("Setting owning overlay key to " + i));
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
          D.createElement(
            "vsg-app",
            {
              class: e.join(" "),
              ref: this.m_DomRef,
              "sg-forced-update-number": this.state.nForcedUpdateNumber,
            },
            D.createElement("div", {
              className: "DebugPointer",
              ref: this.m_DebugPointerRef,
            }),
            D.createElement("canvas", {
              ref: this.m_CanvasRef,
              className: "EmbeddedData",
              height: Se.k_EmbeddedDataRows,
            }),
            D.createElement(
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
          n = t.width / this.m_fCurrentScale,
          i = t.height / this.m_fCurrentScale,
          r = { x: e.innerWidth / n, y: e.innerHeight / i },
          o = Math.min(r.x, r.y, 1);
        o != this.m_fCurrentScale &&
          (1 != o
            ? this.m_scalingDomRef.current.setAttribute(
                "style",
                "transform: scale(" + o + "); transform-origin: top left"
              )
            : this.m_scalingDomRef.current.removeAttribute("style"),
          (this.m_fCurrentScale = o),
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
            let n = e.m_Rect.x,
              i = e.m_Rect.x + e.m_Rect.width,
              r = e.m_Rect.y,
              o = e.m_Rect.y + e.m_Rect.height,
              s = 1 + 3 * e.getEmbeddedIndex();
            if (e.isExternal() || n >= i || r >= o)
              for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
            else
              this.setPixel(s, (65280 & n) >> 8, 255 & n, 0),
                this.setPixel(s + 1, (65280 & i) >> 8, 255 & i, 255 & r),
                this.setPixel(
                  s + 2,
                  (65280 & o) >> 8,
                  255 & o,
                  (65280 & r) >> 8
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
      setPixel(e, t, n, i, r = 255) {
        (this.m_Pixels.data[4 * e + 0] = t),
          (this.m_Pixels.data[4 * e + 1] = n),
          (this.m_Pixels.data[4 * e + 2] = i),
          (this.m_Pixels.data[4 * e + 3] = r),
          (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
            (this.m_nDirtyXMin = e),
          (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
            (this.m_nDirtyXMax = e);
      }
    }
    (Se.s_Current = null),
      (Se.k_EmbeddedDataRows = 1),
      Object(i.b)([r.bind], Se.prototype, "toggleDebugPointer", null),
      Object(i.b)([r.bind], Se.prototype, "onMouseMove", null),
      Object(i.b)([r.bind], Se.prototype, "forceLayoutUpdate", null),
      Object(i.b)([r.bind], Se.prototype, "onMutation", null);
    Object(i.b)(
      [o.a],
      class extends $ {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.id = this.props.id),
            (n.properties.source = this.props.source),
            [e, n]
          );
        }
      }.prototype,
      "buildNode",
      null
    ),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(de || (de = {}));
    class Ce extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "rendermodel";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        if (
          ((n.properties.source = this.props.source),
          (n.properties["texture-id"] = W(this.props["texture-id"])),
          this.props.fresnel)
        ) {
          let e = this.props.fresnel;
          if ("string" == typeof e.color) n.properties.color = e.color;
          else {
            let t = Y(e.color, { r: 0, g: 0, b: 0 });
            n.properties.color = [t.r, t.g, t.b];
          }
          (n.properties.opacity = e.opacity ? e.opacity : 1),
            (n.properties.strength = e.strength ? e.strength : 1);
        }
        return (
          (n.properties.wireframe = this.props.wireframe),
          (n.properties.solid = this.props.solid),
          (n.properties.culling = this.props.culling),
          (n.properties["no-depth-write"] = this.props["no-depth-write"]),
          (n.properties["no-depth-test"] = this.props["no-depth-test"]),
          [e, n]
        );
      }
    }
    Object(i.b)([o.a], Ce.prototype, "buildNode", null);
    class Oe extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "ltcquad";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        if (
          ((n.properties.width = this.props.width),
          (n.properties.height = this.props.height),
          (n.properties["near-z"] = this.props["near-z"]),
          (n.properties["far-z"] = this.props["far-z"]),
          (n.properties.debug = this.props.debug),
          this.props.diffuse)
        ) {
          let e = this.props.diffuse;
          (n.properties["diffuse-resolution"] = e.resolution),
            (n.properties["diffuse-size"] = e.size);
        }
        if (this.props.specular) {
          let e = this.props.specular;
          if ("string" == typeof e.color) n.properties.color = e.color;
          else {
            let t = Y(e.color, { r: 0, g: 0, b: 0 });
            n.properties.color = [t.r, t.g, t.b];
          }
        }
        return [e, n];
      }
    }
    Object(i.b)([o.a], Oe.prototype, "buildNode", null);
    class ke extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement("vsg-line", {
          "target-id": this.props.target_id,
          thickness: this.props.thickness,
          "start-buffer": this.props.start_buffer,
          "end-buffer": this.props.end_buffer,
        });
      }
    }
    class De extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement(
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
    class we extends $ {
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
        let n = null;
        "object" == typeof this.props.location
          ? (n = Q(this.props.location, { x: 0, y: 0 }))
          : "number" == typeof this.props.location &&
            (n = ye(this.props.location));
        let i = this.createSgNode(t);
        if (this.props.latched && null !== this.m_latchedPosition)
          (i.properties["anchor-u"] = this.m_latchedPosition.u),
            (i.properties["anchor-v"] = this.m_latchedPosition.v);
        else if (n) {
          const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
            r = e.currentPanel.props.overlay_key
              ? t
              : e.currentPanel.scaleLocalUVToGlobal(t);
          (i.properties["anchor-u"] = r.u), (i.properties["anchor-v"] = r.v);
        } else {
          const n = t.ownerDocument,
            r = t.getBoundingClientRect(),
            o = r.left + r.width / 2,
            s = r.top + r.height / 2,
            a = e.currentPanel.m_Rect;
          if (o < a.x || o > a.x + a.width || s < a.y || s > a.y + a.height)
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          const l = n.defaultView.innerWidth,
            c = n.defaultView.innerHeight;
          if (!(c > 0 && l > 0))
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          (i.properties["anchor-u"] = o / l),
            (i.properties["anchor-v"] = s / c);
        }
        return (
          (this.m_latchedPosition = {
            u: i.properties["anchor-u"],
            v: i.properties["anchor-v"],
          }),
          [e, i]
        );
      }
    }
    Object(i.b)([o.a], we.prototype, "buildNode", null);
    !(function (e) {
      (e[(e.LockedToParent = 0)] = "LockedToParent"),
        (e[(e.LockedToWorld = 1)] = "LockedToWorld");
    })(ue || (ue = {}));
    class Me extends $ {
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
          n = this.props.ease_out_angle_threshold
            ? (this.props.ease_out_angle_threshold * Math.PI) / 180
            : null,
          i = this.props.min_angular_velocity
            ? (this.props.min_angular_velocity * Math.PI) / 180
            : null,
          r = this.props.max_angular_velocity
            ? (this.props.max_angular_velocity * Math.PI) / 180
            : null;
        return D.createElement(
          "vsg-elastic-head-transform",
          {
            "start-angle-threshold": e,
            "stop-angle-threshold": t,
            "ease-in-time": this.props.ease_in_time,
            "ease-in-power": this.props.ease_in_power,
            "ease-out-angle-threshold": n,
            "ease-out-power": this.props.ease_out_power,
            "min-angular-velocity": i,
            "max-angular-velocity": r,
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
        return D.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children
        );
      }
    }
    function Ee() {
      var e, t;
      return null !=
        (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment())
        ? t
        : pe.Unknown;
    }
    !(function (e) {
      (e[(e.Desktop = 1)] = "Desktop"),
        (e[(e.Overlay = 2)] = "Overlay"),
        (e[(e.Unknown = 100)] = "Unknown");
    })(pe || (pe = {})),
      window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"),
          (e[(e.Low = 1)] = "Low"),
          (e[(e.Medium = 2)] = "Medium"),
          (e[(e.High = 3)] = "High");
      })(he || (he = {})),
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
    var Te, Ie, Pe, xe, Ve, Le, Be, Ae, Ne, He, Fe, je, Ue, We, ze, Ge, Ke, qe;
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
    })(Te || (Te = {})),
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
      })(Ae || (Ae = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(Ne || (Ne = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(He || (He = {})),
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
    class Qe extends D.Component {
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
              let n = VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                e,
                this.props.sInputPath
              );
              if (n) {
                let i = VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                  e,
                  n,
                  this.props.sDevicePath
                );
                i && (t.xfTransform = i.xfTrackingToComponentLocal);
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
        return D.createElement(
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
        return D.createElement(
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
        var n;
        const i = this.createSgNode(t);
        return (
          (i.properties.continuous_relatch =
            null != (n = this.props.bContinuousRelatch) && n),
          [e, i]
        );
      }
    }
    Object(i.b)([o.a], Ye.prototype, "buildNode", null),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "Q", function () {
        return c;
      }),
      n.d(t, "jb", function () {
        return d;
      }),
      n.d(t, "kb", function () {
        return u;
      }),
      n.d(t, "W", function () {
        return p;
      }),
      n.d(t, "X", function () {
        return h;
      }),
      n.d(t, "O", function () {
        return m;
      }),
      n.d(t, "P", function () {
        return g;
      }),
      n.d(t, "J", function () {
        return b;
      }),
      n.d(t, "T", function () {
        return v;
      }),
      n.d(t, "V", function () {
        return _;
      }),
      n.d(t, "b", function () {
        return y;
      }),
      n.d(t, "K", function () {
        return f;
      }),
      n.d(t, "Y", function () {
        return S;
      }),
      n.d(t, "h", function () {
        return C;
      }),
      n.d(t, "M", function () {
        return O;
      }),
      n.d(t, "hb", function () {
        return k;
      }),
      n.d(t, "j", function () {
        return ne;
      }),
      n.d(t, "lb", function () {
        return ie;
      }),
      n.d(t, "Z", function () {
        return re;
      }),
      n.d(t, "U", function () {
        return te;
      }),
      n.d(t, "C", function () {
        return oe;
      }),
      n.d(t, "nb", function () {
        return be;
      }),
      n.d(t, "mb", function () {
        return ve;
      }),
      n.d(t, "f", function () {
        return U;
      }),
      n.d(t, "eb", function () {
        return G;
      }),
      n.d(t, "ib", function () {
        return K;
      }),
      n.d(t, "S", function () {
        return q;
      }),
      n.d(t, "gb", function () {
        return Se;
      }),
      n.d(t, "v", function () {
        return de;
      }),
      n.d(t, "fb", function () {
        return Ce;
      }),
      n.d(t, "N", function () {
        return Oe;
      }),
      n.d(t, "R", function () {
        return ke;
      }),
      n.d(t, "db", function () {
        return De;
      }),
      n.d(t, "bb", function () {
        return we;
      }),
      n.d(t, "t", function () {
        return se;
      }),
      n.d(t, "u", function () {
        return ae;
      }),
      n.d(t, "cb", function () {
        return ce;
      }),
      n.d(t, "ab", function () {
        return fe;
      }),
      n.d(t, "H", function () {
        return Me;
      }),
      n.d(t, "L", function () {
        return Re;
      }),
      n.d(t, "e", function () {
        return Qe;
      }),
      n.d(t, "d", function () {
        return Xe;
      }),
      n.d(t, "k", function () {
        return Ye;
      }),
      n.d(t, "I", function () {
        return pe;
      }),
      n.d(t, "i", function () {
        return Ee;
      }),
      n.d(t, "r", function () {
        return he;
      }),
      n.d(t, "A", function () {
        return me;
      }),
      n.d(t, "B", function () {
        return ge;
      }),
      n.d(t, "qb", function () {
        return 0;
      }),
      n.d(t, "pb", function () {
        return -1;
      }),
      n.d(t, "m", function () {
        return Ie;
      }),
      n.d(t, "E", function () {
        return Pe;
      }),
      n.d(t, "F", function () {
        return xe;
      }),
      n.d(t, "z", function () {
        return Ve;
      }),
      n.d(t, "y", function () {
        return Le;
      }),
      n.d(t, "w", function () {
        return Ae;
      }),
      n.d(t, "D", function () {
        return Ne;
      }),
      n.d(t, "q", function () {
        return He;
      }),
      n.d(t, "p", function () {
        return Fe;
      }),
      n.d(t, "l", function () {
        return Ue;
      }),
      n.d(t, "s", function () {
        return We;
      }),
      n.d(t, "x", function () {
        return ze;
      }),
      n.d(t, "G", function () {
        return Ge;
      }),
      n.d(t, "o", function () {
        return Ke;
      }),
      n.d(t, "n", function () {
        return qe;
      });
    t.ob = VRHTML;
  },
  "8GAN": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "a", function () {
        return p;
      }),
      n.d(t, "c", function () {
        return h;
      });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      s = n("7wIv"),
      a = n("/i/y"),
      l = n("GXif"),
      c = n("okNM"),
      d = n("hcOo");
    const u = "resetuniverseorigincountdown",
      p = "begin_reset_universe_origin_countdown";
    let h = (i = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_countdownTimeout = 0),
          (this.m_fadeFinishTimeout = 0),
          (this.m_mailbox = new a.c()),
          this.m_mailbox.Init(u).then(() => {
            this.m_mailbox.RegisterHandler(
              p,
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
        var t, n;
        clearTimeout(this.m_countdownTimeout),
          (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0);
        const i =
          null === (t = a.ob) || void 0 === t
            ? void 0
            : t.VRApplications.GetSceneApplicationKey();
        let r = !i || "system.generated.xrservice" == i;
        r
          ? this.props.dashboardRef.current &&
            this.props.dashboardRef.current.setPlacementModeActive(!0)
          : null === (n = a.ob) ||
            void 0 === n ||
            n.VRDashboardManager.HideDashboard("reset_universe_origin"),
          this.setState({
            visible: !0,
            fading: !1,
            countdown_seconds: e.countdown_seconds,
            in_dash_mode: r,
          });
      }
      CountdownTick() {
        var e, t, n;
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
                    (n =
                      null === (t = a.ob) || void 0 === t
                        ? void 0
                        : t.VRCompositor.GetTrackingSpace())
                    ? n
                    : a.B.Standing
                ),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                i.kFadeDurationMs
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
        return o.createElement(
          a.ab,
          {
            width: void 0,
            height: i.kPanelHeight,
            interactive: !1,
            sort_order: 1e3,
          },
          o.createElement(
            "div",
            {
              className: Object(d.a)("ResetSeatedCountdownParent", [
                "Fading",
                this.state.fading,
              ]),
              style: { width: i.kPixelWidth },
            },
            o.createElement(
              "div",
              { className: "FlexColumn" },
              o.createElement(
                "div",
                { className: "ResetSeatedCountdownRow" },
                o.createElement(
                  "div",
                  { className: "ResetSeatedCountdownText" },
                  this.state.countdown_seconds
                )
              ),
              o.createElement(
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
        let n = 0.9,
          i =
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
        const r =
          this.props.dashboardRef.current &&
          this.props.dashboardRef.current.isTheaterMode;
        return this.state.in_dash_mode
          ? (r && ((n *= 2), (i *= 2)),
            o.createElement(
              a.k,
              { bContinuousRelatch: !0 },
              o.createElement(
                a.nb,
                { translation: { y: -0.05, z: -n }, scale: i },
                this.renderPanel()
              )
            ))
          : o.createElement(
              a.nb,
              { parent_path: "/user/head" },
              o.createElement(
                a.nb,
                { translation: { y: -0.05, z: -n }, scale: i },
                this.renderPanel()
              )
            );
      }
    });
    (h.kPanelHeight = 0.2),
      (h.kPixelWidth = 400),
      (h.kFadeDurationMs = 1e3),
      Object(r.b)(
        [s.bind],
        h.prototype,
        "OnBeginResetUniverseOriginCountdown",
        null
      ),
      Object(r.b)([s.bind], h.prototype, "CountdownTick", null),
      Object(r.b)([s.bind], h.prototype, "HideOverlay", null),
      (h = i = Object(r.b)([c.a], h));
  },
  Ck0r: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = n("q1tI");
    function r(e) {
      return i.createElement(
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
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
          })
        )
      );
    }
  },
  Gmup: function (e, t, n) {
    "use strict";
    var i,
      r,
      o = n("mrSG"),
      s = n("/i/y"),
      a = n("7wIv"),
      l = n.n(a),
      c = n("q1tI"),
      d = n("6YgL"),
      u = n("7uy8"),
      p = n("GXif"),
      h = n("Q+Z6"),
      m = n("okNM"),
      g = n("YRJX"),
      b = n("2vnA"),
      v = n("p9CI");
    let _ = (i = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new s.c()),
          (this.m_refWindowScrollPanel = c.createRef()),
          (this.state = { desktopView: null }),
          this.m_mailbox.Init(i.k_sMailboxName);
      }
      setSiblingReferences(e) {
        this.setState({ desktopView: e });
      }
      onWindowViewCreated(e, t) {
        var n, i;
        null === (n = this.m_refWindowScrollPanel.current) ||
          void 0 === n ||
          n.scrollTo({
            left:
              null === (i = this.m_refWindowScrollPanel.current) || void 0 === i
                ? void 0
                : i.scrollWidth,
            behavior: "smooth",
          });
      }
      render() {
        var e, t, n, i;
        if (
          !this.state.desktopView ||
          (null === (e = this.state.desktopView) || void 0 === e
            ? void 0
            : e.state.bIsUsingSteamDesktop)
        )
          return null;
        const r =
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
          r &&
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
                null === (n = this.state.desktopView) || void 0 === n
                  ? void 0
                  : n.state.desktopIndices.map((e) => {
                      var t;
                      return c.createElement(g.o, {
                        additionalClassNames: "ViewButton Fixed",
                        key: e,
                        label: e.toString(),
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.currentDesktopIndex) == e,
                        title: Object(p.c)("#Desktop_X", e),
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
                  null === (i = this.state.desktopView) || void 0 === i
                    ? void 0
                    : i.state.mapWindowInfo.keys()
                ).map((e) => {
                  var t, n, i;
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
                        (i = this.props.mapWindows.get(
                          null === (n = this.state.desktopView) || void 0 === n
                            ? void 0
                            : n.state.mapWindowInfo.get(e).sHwnd
                        )) || void 0 === i
                        ? void 0
                        : i.title,
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
                title: Object(p.c)("#AddView"),
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
              title: Object(p.c)("#Settings_ToggleDarkMode"),
              onClick: this.props.onToggleDarkMode,
            })
          )
        );
      }
    });
    (_.k_sMailboxName = "systemui_desktoptray"),
      (_ = i = Object(o.b)([m.a], _));
    let y = (r = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new s.c()),
          (this.state = {
            bIsUsingSteamDesktop: !1,
            bIsReady: !1,
            desktopIndices: [],
            mapWindowInfo: new Map(),
            sCurrentWindowOverlayKey: "",
          }),
          this.m_mailbox.Init(r.k_sMailboxName).then(() => {});
      }
      componentDidMount() {
        var e, t, n;
        null ===
        (null === (e = VRHTML) || void 0 === e
          ? void 0
          : e.VROverlay.FindOverlay("valve.steam.desktop"))
          ? (null === (t = VRHTML) ||
              void 0 === t ||
              t.RegisterForDesktopViewReadyEvents(this.onDesktopViewReady),
            null === (n = VRHTML) ||
              void 0 === n ||
              n.RegisterForDesktopViewUpdatingEvents(
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
          : null != (e = h.d.settings.get("/settings/dashboard/desktopIndex"))
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
          h.d.SetSettingsValue(
            "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
            e
          );
      }
      onDesktopChange(e) {
        h.d.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
        let n = 1,
          i = [];
        for (
          ;
          null !==
          (null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.FindOverlay("system.desktop." + n));

        )
          i.push(n), n++;
        (null != (t = h.d.settings.get("/settings/dashboard/desktopIndex"))
          ? t
          : 1) > i.length &&
          h.d.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
          this.setState({ bIsReady: !0, desktopIndices: i });
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
            (e = h.d.settings.get("/settings/dashboard/allowCurvature")) || e
            ? u.j
            : null;
        return this.props.visible
          ? this.state.bIsUsingSteamDesktop
            ? c.createElement(s.U, {
                mountedId: Object(s.f)(u.F, "valve.steam.desktop"),
              })
            : this.state.bIsReady
            ? 0 === this.state.desktopIndices.length
              ? c.createElement(
                  g.h,
                  { visible: !0 },
                  c.createElement(
                    "div",
                    { className: "NoDesktopFound" },
                    c.createElement("h2", null, Object(p.c)("#NoDesktopFound"))
                  )
                )
              : -1 == this.currentDesktopIndex
              ? c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    s.ab,
                    {
                      overlay_key: this.state.sCurrentWindowOverlayKey,
                      height:
                        this.props.fActiveOverlayScale *
                        r.k_nDesktopPanelBaseHeight,
                      curvature_origin_id: t,
                      interactive: !0,
                      origin: s.t.BottomCenter,
                      debug_name: "System Desktop",
                    },
                    c.createElement(s.bb, { id: g.t, location: s.t.TopCenter }),
                    c.createElement(s.U, {
                      mountedId: Object(s.f)(
                        u.F,
                        this.state.sCurrentWindowOverlayKey + ".cursor"
                      ),
                    }),
                    c.createElement(s.bb, {
                      id: g.s,
                      location: s.t.BottomCenter,
                    })
                  )
                )
              : c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    s.ab,
                    {
                      overlay_key: "system.desktop." + this.currentDesktopIndex,
                      height:
                        this.props.fActiveOverlayScale *
                        r.k_nDesktopPanelBaseHeight,
                      curvature_origin_id: t,
                      interactive: !0,
                      origin: s.t.BottomCenter,
                      debug_name: "System Desktop",
                    },
                    c.createElement(s.bb, { id: g.t, location: s.t.TopCenter }),
                    c.createElement(s.U, {
                      mountedId: Object(s.f)(
                        u.F,
                        "system.desktop." + this.currentDesktopIndex + ".cursor"
                      ),
                    }),
                    c.createElement(s.bb, {
                      id: g.s,
                      location: s.t.BottomCenter,
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
                    Object(p.c)("#DesktopViewsUpdating")
                  )
                )
              )
          : null;
      }
    });
    (y.k_sMailboxName = "systemui_desktopview"),
      (y.k_nDesktopPanelBaseHeight = 2),
      Object(o.b)([b.f], y.prototype, "desktopCount", null),
      Object(o.b)([b.f], y.prototype, "sCurrentOverlayKey", null),
      Object(o.b)([b.f], y.prototype, "currentDesktopIndex", null),
      Object(o.b)([b.f], y.prototype, "currentWindowHwnd", null),
      Object(o.b)([l.a], y.prototype, "onDesktopScaleChange", null),
      Object(o.b)([l.a], y.prototype, "onDesktopChange", null),
      Object(o.b)([l.a], y.prototype, "onDesktopViewUpdating", null),
      Object(o.b)([l.a], y.prototype, "onDesktopViewReady", null),
      Object(o.b)([l.a], y.prototype, "onWindowViewChange", null),
      Object(o.b)([l.a], y.prototype, "ShowDesktop", null),
      (y = r = Object(o.b)([m.a], y));
    var f,
      S = n("hcOo");
    let C = (f = class extends c.Component {
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
    var O;
    (C.defaultProps = {
      fallbackImageUrl: "images/appimage_default_portrait.png",
    }),
      (C.s_failedImages = []),
      Object(o.b)([a.bind], C.prototype, "loadNextImage", null),
      Object(o.b)([a.bind], C.prototype, "onLoad", null),
      Object(o.b)([a.bind], C.prototype, "onError", null),
      (C = f = Object(o.b)([m.a], C)),
      (function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(O || (O = {}));
    const k = (e) =>
      c.createElement(
        "div",
        {
          className: Object(S.a)("ButtonContainer", O[e.side], [
            "Disabled",
            !1 === e.enabled,
          ]),
        },
        c.createElement(
          d.a,
          { className: "ButtonControl", onClick: e.onClick },
          e.side == O.Left
            ? c.createElement(c.Fragment, null, "‹")
            : c.createElement(c.Fragment, null, "›")
        )
      );
    class D extends c.Component {
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
        const n = this.m_refScrollPanel.current;
        if (!n) return;
        if (n.isThrown)
          return void n.cancelThrowing(() => {
            (this.m_bScrolling = !1), this.scroll(e);
          });
        const i = n.children;
        if (!i || 0 == i.length) return;
        const r = null != (t = this.props.paginationAlignmentOffset) ? t : 0,
          o = i[0],
          s = this.m_bScrolling ? this.m_nCurrentScrollTarget : n.scrollLeft,
          a = o.getBoundingClientRect().left + n.scrollLeft,
          l = o.clientWidth,
          c = n.clientWidth,
          d = Math.floor(c / l) - 1,
          u = Math.round((s - a + r + 1) / l) + d * e - 0.4999,
          p = u > 0 ? u * l + a - r : 0;
        this.scrollToPosition(p);
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
                c.createElement(k, {
                  side: O.Left,
                  enabled: !this.state.bScrolledToStart,
                  onClick: this.onLeftButtonClick,
                }),
              null !== this.state.bScrolledToEnd &&
                c.createElement(k, {
                  side: O.Right,
                  enabled: !this.state.bScrolledToEnd,
                  onClick: this.onRightButtonClick,
                })
            )
        );
      }
    }
    Object(o.b)([l.a], D.prototype, "onAnimationFrame", null),
      Object(o.b)([l.a], D.prototype, "onScroll", null),
      Object(o.b)([l.a], D.prototype, "onLeftButtonClick", null),
      Object(o.b)([l.a], D.prototype, "onRightButtonClick", null);
    let w = class extends c.Component {
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
                ["AppOwned", h.d.probablyOwnedAppkeys.has(this.props.appkey)],
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
              c.createElement(C, Object.assign({}, e), this.props.children)
            )
          )
        );
      }
    };
    Object(o.b)([l.a], w.prototype, "buttonMouseEnter", null),
      Object(o.b)([l.a], w.prototype, "buttonMouseLeave", null),
      Object(o.b)([l.a], w.prototype, "onParentScrollStop", null),
      (w = Object(o.b)([m.a], w));
    const M = () =>
        c.createElement("div", { className: "AppButton Placeholder" }),
      R = (e) => {
        var t;
        const n = !!e.loading,
          i = null != (t = e.apps) ? t : [];
        let r = "AppCarousel";
        return (
          e.className && (r += " " + e.className),
          (r += " NoAnimations"),
          c.createElement(
            D,
            { additionalClassNames: r, paginationAlignmentOffset: -20 },
            n &&
              c.createElement(
                c.Fragment,
                null,
                c.createElement(M, null),
                c.createElement(M, null),
                c.createElement(M, null),
                c.createElement(M, null)
              ),
            !n &&
              i.map((e) =>
                c.createElement(w, Object.assign({ key: e.appkey }, e))
              )
          )
        );
      };
    var E = n("Ibgz"),
      T = n("vDqi"),
      I = n.n(T),
      P = n("uTck");
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
          onClick: () => E.b.Instance.openBigPictureStore(null, E.a.QuickStore),
        },
        c.createElement("span", null, Object(p.c)("#BrowseAll")),
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
      openSteamApp(e, t, n) {
        P.a.instance.RecordUIEvent(
          "QuickStoreAppClick",
          L[t].toLowerCase() + ":" + n,
          "steam.app." + e
        ),
          E.b.Instance.openBigPictureStore(e, E.a.QuickStore);
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
          const n = "steam.app." + e.appid;
          return {
            key: n,
            appkey: n,
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
    B = Object(o.b)([m.a], B);
    class A extends c.Component {
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
            Object(p.c)("#StoreSection_TopSingleplayer")
          ),
          c.createElement(B, { section: L.Singleplayer }),
          c.createElement(
            "h2",
            null,
            Object(p.c)("#StoreSection_TopMultiplayer")
          ),
          c.createElement(B, { section: L.Multiplayer }),
          c.createElement("h2", null, Object(p.c)("#StoreSection_TopFree")),
          c.createElement(B, { section: L.Free })
        );
      }
    }
    var N;
    const H = () =>
        c.createElement(
          d.a,
          {
            className: "ButtonControl WithIcon PanelTopRight",
            onClick: () =>
              E.b.Instance.openBigPictureLibrary(null, E.a.QuickLaunch),
          },
          c.createElement("span", null, Object(p.c)("#BrowseAll")),
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
          c.createElement("span", null, Object(p.c)("#WelcomeBrowseStore"))
        ),
      j = () =>
        c.createElement(
          d.a,
          {
            className: "ButtonControl Colorful WelcomeInstall",
            onClick: () =>
              E.b.Instance.openBigPictureLibrary(null, E.a.QuickLaunch),
          },
          c.createElement("span", null, Object(p.c)("#WelcomeInstall"))
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
            n = new Set();
          for (; e.length < 12 && t.length; ) {
            for (; n.has(t[0].appid); ) t.shift();
            let i = t.shift();
            n.add(i.appid),
              e.push(
                c.createElement(
                  d.a,
                  {
                    key: "appid_" + i.appid,
                    className:
                      "WelcomeFloatingApp WelcomeFloatingApp" + e.length,
                    onClick: () =>
                      E.b.Instance.openBigPictureStore(
                        i.appid,
                        E.a.QuickLaunch
                      ),
                  },
                  c.createElement("img", { src: i.logo })
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
              Object(p.c)("#WelcomeHeader")
            ),
            c.createElement(
              "div",
              { className: "QuickLaunchWelcomeMessage" },
              Object(p.c)("#WelcomeMessage")
            ),
            c.createElement(F, null),
            c.createElement(j, null)
          )
        );
      }
    }
    let W = (N = class extends c.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      launchApplication(e, t, n) {
        var i, r, o;
        P.a.instance.RecordUIEvent(
          "QuickLaunchAppClick",
          (t ? "top" : "bottom") + ":" + n,
          e.key
        ),
          null === (r = (i = this.props).onGameLaunched) ||
            void 0 === r ||
            r.call(i, e),
          null === (o = VRHTML) ||
            void 0 === o ||
            o.VRApplications.LaunchApplication(e.key);
      }
      makeAppButtonList() {
        let e = [];
        if (null != h.d.apps)
          for (let t of h.d.apps)
            t.is_internal ||
              (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
              t.is_hidden ||
              t.is_instance ||
              N.s_setBlacklistedAppkeys.has(t.key) ||
              e.push(t);
        e.sort((e, t) => {
          let n = t.library_priority - e.library_priority;
          return 0 == n && (n = t.last_launch - e.last_launch), n;
        });
        const t = (e) => {
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
        return e.map((e, n) => {
          let i = n;
          const r = n < N.TOP_ROW_LENGTH;
          return (
            r || (i -= N.TOP_ROW_LENGTH),
            {
              key: e.key,
              appkey: e.key,
              title: e.name,
              imageUrl: t(e),
              onClick: () => this.launchApplication(e, r, i),
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
        const n =
            0 == t.length ||
            h.d.settings.get("/settings/dashboard/forceWelcomeScreen"),
          i =
            0 == t.length ||
            h.d.settings.get("/settings/dashboard/hideBigPictureLibrary");
        if (n) e = c.createElement(U, null);
        else {
          let n = t.slice(0, N.TOP_ROW_LENGTH),
            r = t.slice(N.TOP_ROW_LENGTH);
          e = c.createElement(
            c.Fragment,
            null,
            !i && c.createElement(H, null),
            c.createElement("h2", null, Object(p.c)("#RecentlyPlayed")),
            c.createElement(R, { className: "TopRow", apps: n }),
            c.createElement(R, { className: "BottomRow", apps: r })
          );
        }
        return c.createElement(
          g.h,
          {
            visible: this.props.visible,
            scrollable: !n,
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
      (W = N = Object(o.b)([m.a], W));
    var z = n("vzqD"),
      G = n("tALH"),
      K = n("TbT/"),
      q = n("P8UO");
    class Q extends c.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      onExitApp() {
        var e, t, n;
        null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
          null === (n = (t = this.props).onExitGame) ||
            void 0 === n ||
            n.call(t);
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
          n = q.a.Instance.SceneAppName,
          i = q.a.Instance.SceneApplicationState,
          r = q.a.Instance.SceneAppIsHome,
          o = h.d.settings.get("/settings/dashboard/allowAppQuitting"),
          a = !(
            null != (e = h.d.settings.get("/settings/dashboard/arcadeMode")) &&
            e
          ),
          l = h.d.apps && h.d.apps.find((e) => e.key == t);
        let u = !1;
        switch (i) {
          case s.w.Quitting:
          case s.w.Starting:
          case s.w.Waiting:
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
            c.createElement(C, { appkey: t, title: n, imageUrl: m })
          ),
          c.createElement(
            "div",
            { className: "InfoColumn" },
            c.createElement("div", { className: "NowPlayingAppTitle" }, n),
            c.createElement(
              d.a,
              {
                className: "ButtonControl Colorful",
                onClick: this.onReturnToGame,
              },
              r
                ? Object(p.c)("#Return_To_Home")
                : Object(p.c)("#Return_To_Game")
            ),
            a &&
              c.createElement(
                K.e,
                {
                  icon: K.f.PopOut,
                  onClick: this.onOpenAppControllerBindingSettings,
                },
                Object(p.c)("#Controller_Bindings")
              ),
            a &&
              c.createElement(
                K.e,
                { icon: K.f.PopOut, onClick: this.onOpenAppVideoSettings },
                Object(p.c)("#App_Video_Settings")
              ),
            !r &&
              o &&
              c.createElement(
                d.a,
                { className: "ButtonControl", onClick: this.onExitApp },
                Object(p.c)("#Exit_Game")
              )
          )
        );
      }
    }
    Object(o.b)([a.bind], Q.prototype, "onExitApp", null),
      Object(o.b)([a.bind], Q.prototype, "onReturnToGame", null),
      Object(o.b)(
        [a.bind],
        Q.prototype,
        "onOpenAppControllerBindingSettings",
        null
      ),
      Object(o.b)([a.bind], Q.prototype, "onOpenAppVideoSettings", null);
    var X,
      Y,
      J,
      Z = n("Vp/w"),
      $ = n("CzjV"),
      ee = n("5/du"),
      te = n("vvDA"),
      ne = n("X3sx"),
      ie = n("8GAN");
    n.d(t, "b", function () {
      return Y;
    }),
      n.d(t, "a", function () {
        return se;
      }),
      (function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
      })(Y || (Y = {}));
    class re extends c.Component {
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
    function oe(e) {
      var t, n;
      return (
        null !=
          (n = null === (t = e) || void 0 === t ? void 0 : t.startsWith(u.n)) &&
        n
      );
    }
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Power = 1)] = "Power"),
        (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
        (e[(e.Volume = 3)] = "Volume"),
        (e[(e.Windows = 4)] = "Windows");
    })(J || (J = {}));
    let se = (X = class extends c.Component {
      constructor(e) {
        super(e),
          (this.m_mapExternalOverlays = {}),
          (this.m_setSuppressingFade = new Set()),
          (this.m_mailbox = new s.c()),
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
          h.d.Init(!1),
          s.hb.getInstance(),
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
        const n =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.GetVRStartupReason(),
          i =
            n == s.G.AppLaunch_Unknown ||
            n == s.G.AppLaunch_Steam ||
            n == s.G.Unknown,
          r = h.d.settings.get(
            "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
          ),
          o = h.d.settings.get("/settings/steamvr/enableHomeApp"),
          a = h.d.settings.get(u.m);
        ((i || (!r && o)) && !a) ||
          setTimeout(() => {
            var e;
            return null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VROverlay.ShowDashboard(null != a ? a : "");
          }, 500),
          (this.m_appStateChangedAutorunDisposer = Object(b.e)(() => {
            const e = q.a.Instance.SceneApplicationState != s.w.None;
            this.isOverlayActive(u.p) && !e && this.switchToOverlay(u.r);
          })),
          VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach((e) => {
            this.initializeOverlayState(e);
          }),
          this.updateSiblingReferences();
      }
      componentDidUpdate(e, t) {
        var n;
        const i = this.getActiveOverlaySummonKey();
        let r = !1;
        t.bShown !== this.state.bShown &&
          ($.b.Instance.playSound(
            this.state.bShown ? $.a.DashboardOpen : $.a.DashboardClose
          ),
          (r = !0));
        if (
          this.state.bShown &&
          !r &&
          t.sActiveOverlayID != this.state.sActiveOverlayID
        )
          switch (i) {
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
        const o = this.getActiveOverlayKey(),
          a = o ? this.state.mapOverlayState.get(o) : null,
          l = o ? t.mapOverlayState.get(o) : null,
          c = a && l && a.fScale != l.fScale;
        if (
          ((t.sActiveOverlayID != this.state.sActiveOverlayID || c) &&
            a &&
            this.isDesktopOverlayActive() &&
            (null === (n = this.m_refDesktopView.current) ||
              void 0 === n ||
              n.onDesktopScaleChange(a.fScale)),
          t.sActiveOverlayID != this.state.sActiveOverlayID &&
            (this.setState({ bKeyboardVisible: !1 }),
            this.isOverlayActive(u.H)))
        )
          switch (E.b.Instance.lastBigPictureEntryPoint) {
            case E.a.QuickLaunch:
              this.m_bQuickLaunchShouldReturnToBigPicture = !0;
              break;
            case E.a.QuickStore:
              this.m_bQuickStoreShouldReturnToBigPicture = !0;
          }
        if (t.bKeyboardVisible != this.state.bKeyboardVisible)
          if (this.state.bKeyboardVisible) {
            let e = this.getActiveOverlayKey();
            VRHTML.VROverlay.ShowKeyboardForOverlay(
              e,
              s.q.Normal,
              s.p.SingleLine,
              s.o.Minimal,
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
        let n = 1;
        if (e.startsWith("system.desktop.")) {
          let i = "/settings/dashboard/desktopScale" + e.split(".")[2];
          n = null != (t = h.d.settings.get(i)) ? t : 1;
        }
        let i = {
          dockLocation: g.i.Dashboard,
          refOverlayWidget: c.createRef(),
          xfInitial: null,
          fScale: n,
        };
        this.state.mapOverlayState.set(e, i);
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
          Object(s.ib)(1),
          this.m_roomViewChangedEventHandle &&
            (this.m_roomViewChangedEventHandle.unregister(),
            (this.m_roomViewChangedEventHandle = null));
      }
      static getDashboardDistance() {
        if (X.s_dashboardUserDistance) return X.s_dashboardUserDistance;
        const e = h.d.settings.get(u.q);
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
            (e = h.d.settings.get("/settings/dashboard/verticalOffsetCm_2"))
              ? e
              : 0),
          n = h.d.settings.get(u.q);
        return n == Y.Screenshot_Only
          ? -0.57
          : n == Y.Near
          ? -0.07 + t
          : n == Y.Middle
          ? -0.08 + t
          : -0.09 + t;
      }
      static getDashboardScale() {
        var e, t;
        if (X.s_dashboardUserScale) return X.s_dashboardUserScale;
        let n = 1;
        const i = h.d.settings.get(u.q),
          r = i == Y.Screenshot_Only;
        return (
          (n = r ? 2 : i == Y.Near ? 0.36 : i == Y.Middle ? 0.41 : 0.47),
          r ||
            (n *=
              null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetFloatProperty(
                      s.qb,
                      s.z.DashboardScale_Float
                    ))
                ? t
                : 1),
          n
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
        this.setState((t, n) => {
          let i = Object.assign({}, t.setForcingBoundsVisible);
          return (
            (i[e.for_overlay_key] = new Set(i[e.for_overlay_key])),
            e.force_bounds_visible
              ? i[e.for_overlay_key].add(e.for_id)
              : i[e.for_overlay_key].delete(e.for_id),
            { setForcingBoundsVisible: i }
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
        var t, n;
        this.switchToOverlay(u.k),
          null === (t = this.m_refDesktopView.current) ||
            void 0 === t ||
            t.onWindowViewCreated(e.overlay_key, e.hwnd),
          null === (n = this.m_refDesktopTray.current) ||
            void 0 === n ||
            n.onWindowViewCreated(e.overlay_key, e.hwnd);
      }
      onWindowViewDestroyed(e) {}
      onUpdateWindowList(e) {
        var t;
        let n = new Map();
        e.windows.forEach((e) => {
          n.set(e.hwnd, e);
        }),
          this.setState({
            mapWindows: n,
            bWindowViewEnabled: ((t = h.d.settings.get(u.w)), null == t || t),
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
      onDockOverlay(e, t, n) {
        var i, r;
        if (
          ((t != g.i.LeftHand && t != g.i.RightHand) ||
            this.state.mapOverlayState.forEach((e, n) => {
              e.dockLocation == t && (e.dockLocation = g.i.Dashboard);
            }),
          (this.state.mapOverlayState.get(e).dockLocation = t),
          (this.state.mapOverlayState.get(e).xfInitial = n),
          t === g.i.Dashboard)
        )
          if (e.startsWith(u.L)) {
            const t = Number.parseInt(e.substring(u.L.length + 1));
            null === (i = this.m_refDesktopView.current) ||
              void 0 === i ||
              i.onDesktopChange(t);
          } else
            e.startsWith(u.N) &&
              (null === (r = this.m_refDesktopView.current) ||
                void 0 === r ||
                r.onWindowViewChange(e));
        this.forceUpdate();
      }
      renderActiveOverlay() {
        if (null === this.state.sActiveOverlayID) return null;
        const e = this.getActiveOverlay();
        if (!e) return null;
        const t = this.getActiveOverlayKey(),
          n = this.state.mapOverlayState.get(t),
          i = n ? n.fScale : 1;
        return c.createElement(s.U, {
          mountedId: e.mountable_id,
          fDashboardScale: i,
        });
      }
      computeFilteredOverlayTabs() {
        if (this.screenshotMode) return [];
        let e = [];
        for (let t in this.m_mapExternalOverlays) {
          const n = this.m_mapExternalOverlays[t];
          (void 0 === n.icon_overlay_key && null == n.icon_uri) ||
            (n.summon_overlay_key &&
              n.summon_overlay_key != u.D &&
              n.summon_overlay_key != u.H &&
              n.summon_overlay_key != u.I &&
              (n.summon_overlay_key.startsWith(u.L) ||
                n.summon_overlay_key.startsWith(u.N) ||
                n.summon_overlay_key.startsWith(u.J) ||
                oe(n.summon_overlay_key) ||
                e.push(n)));
        }
        return (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e;
      }
      findDashboardTab(e) {
        for (let t in this.m_mapExternalOverlays) {
          let n = this.m_mapExternalOverlays[t];
          if (n.summon_overlay_key == e) return n;
        }
        return null;
      }
      switchToOverlay(e, t) {
        var n, i, r;
        switch (e) {
          case u.H:
            E.b.Instance.latchBigPictureEntryPoint();
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
                  null === (n = VRHTML) || void 0 === n
                    ? void 0
                    : n.VRApplications.GetSceneApplicationKey(),
              },
              i = "bindingui/" + s.I[Object(s.i)()];
            this.m_mailbox.SendMessage(i, t),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (e = u.c);
        }
        if (e.startsWith(u.L)) {
          const t = Number.parseInt(e.substring(u.L.length + 1));
          Number.isSafeInteger(t) &&
            (null === (i = this.m_refDesktopView.current) ||
              void 0 === i ||
              i.onDesktopChange(t)),
            (e = u.k);
        }
        let o = this.findDashboardTab(e);
        return o
          ? (this.computeFilteredOverlayTabs().includes(o) &&
              h.d.SetSettingsValue(
                u.A,
                null != (r = o.summon_overlay_key) ? r : ""
              ),
            this.setState({ sActiveOverlayID: o.mountable_id }),
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
          n = q.a.Instance.SceneAppIsHome;
        t &&
          t != this.state.sLastShownAppKey &&
          (this.setState({ sLastShownAppKey: t }),
          this.switchToOverlay(n ? u.r : u.p)),
          this.setState({ bShown: !0 });
        let i = { type: X.k_sRequestDashboardTabsMessage };
        this.m_mailbox.SendMessage("vrcompositor_systemlayer", i),
          Object(s.eb)();
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
        E.b.Instance.lastBigPictureEntryPoint == E.a.QuickLaunch &&
        !this.isOverlayActive(u.H)
          ? E.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(u.r);
      }
      onQuickStoreButtonClick() {
        this.m_bQuickStoreShouldReturnToBigPicture &&
        E.b.Instance.lastBigPictureEntryPoint == E.a.QuickStore &&
        !this.isOverlayActive(u.H)
          ? E.b.Instance.openBigPictureThroughLastEntryPoint()
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
          n = h.d.settings.get("/settings/dashboard/allowAppQuitting"),
          i = h.d.settings.get("/settings/dashboard/allowSystemShutdown");
        let r = !1;
        if (VRHTML) {
          VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
            (r = VRHTML.VRProperties.GetBoolProperty(
              VRHTML.VROverlay.GetPrimaryDashboardDevice(),
              s.z.DeviceCanPowerOff_Bool
            ));
        }
        const o = q.a.Instance.SceneAppName,
          a = q.a.Instance.SceneAppIsHome;
        let l, d;
        (l = a
          ? Object(p.c)("#Exit_SteamVR_Home")
          : o
          ? Object(p.c)("#PowerMenuQuitSceneApp", o)
          : Object(p.c)("#PowerMenuQuitSceneApp_NoApp")),
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
                label: Object(p.c)("#PowerMenuSteamOverlay"),
                lineBelow: !0,
                onClick: () => {
                  this.switchToOverlay(u.H), this.showPopupMenu(J.None);
                },
              }),
            r &&
              c.createElement(g.k, {
                label: Object(p.c)("#PowerMenuTurnOffController"),
                imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                onClick: () => {
                  var e;
                  null === (e = VRHTML) ||
                    void 0 === e ||
                    e.TurnOffVRController(),
                    this.showPopupMenu(J.None);
                },
              }),
            n &&
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
              label: Object(p.c)("#PowerMenuExitVR"),
              imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
              onClick: () => {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.QuitOpenVR();
              },
            }),
            i &&
              c.createElement(g.k, {
                label: Object(p.c)("#PowerMenuShutdown"),
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
            !(function (e, t, n) {
              let i = n.getBoundingClientRect();
              return e >= i.left && e <= i.right && t >= i.top && t <= i.bottom;
            })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
            this.startPopupMenuTimeout(100);
      }
      renderStatusBarTitle() {
        var e, t, n, i;
        let r = this.getActiveOverlay();
        if (!r) return null;
        if (
          (r.summon_overlay_key == u.H &&
            (E.b.Instance.lastBigPictureEntryPoint == E.a.QuickLaunch
              ? (r = this.findDashboardTab(u.r))
              : E.b.Instance.lastBigPictureEntryPoint == E.a.QuickStore &&
                (r = this.findDashboardTab(u.s))),
          r.summon_overlay_key == u.k)
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
                null === (n = this.state.mapWindows.get(e)) || void 0 === n
                  ? void 0
                  : n.title,
              iconUrl: this.getDashboardIconUri(r),
            });
          }
          return c.createElement(g.n, {
            name:
              "Desktop " +
              (null === (i = this.m_refDesktopView.current) || void 0 === i
                ? void 0
                : i.currentDesktopIndex),
            iconUrl: this.getDashboardIconUri(r),
          });
        }
        return c.createElement(g.n, {
          name: r.tab_name,
          iconUrl: this.getDashboardIconUri(r),
        });
      }
      get isDarkMode() {
        return (
          (this.state.bDesktopDarkMode && this.isOverlayActive(u.k)) ||
          this.state.bTheaterMode
        );
      }
      get screenshotMode() {
        return h.d.settings.get(u.q) == Y.Screenshot_Only;
      }
      get isTheaterMode() {
        return this.state.bTheaterMode;
      }
      getCollisionBoundsFadeVisualizationElements() {
        var e, t;
        const n =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
        if (!n) return [];
        let i = [];
        const r = null != (t = h.d.settings.get(u.g)) ? t : 0.7;
        for (let e of n) {
          let t = Object(s.Y)(Object(s.kb)(e[3], e[0])),
            n = Object(s.Y)(Object(s.kb)(e[1], e[0])),
            o = Object(s.h)(t, n),
            a = Object(s.T)(Object(s.b)(t, n, o)),
            l = Object(s.P)(Object(s.kb)(e[0], e[3]));
          if (l < 0.4) continue;
          let d = Math.max(1, Math.floor(l));
          for (let t = 0; t < d; t++) {
            let n = (t + 1) / (d + 1),
              o = Object(s.g)();
            (o.rotation = a),
              (o.translation = Object(s.Q)(n, e[0], e[3])),
              (o.scale = { x: 0.005, y: 0.005, z: r });
            let l = c.createElement(
              s.nb,
              { transform: o },
              c.createElement(
                s.Z,
                { value: 0.25 },
                c.createElement(
                  s.lb,
                  { color: { r: 0.2, g: 0.2, b: 0.2 } },
                  c.createElement(s.fb, {
                    source: "laser_pointer",
                    wireframe: !1,
                    culling: s.v.Backface,
                  })
                )
              )
            );
            i.push(l);
          }
          if (i.length > 20) break;
        }
        return i;
      }
      render() {
        if (this.state.bShown) {
          const e =
              this.m_setSuppressingFade.size > 0 &&
              this.getActiveOverlaySummonKey() == u.D,
            t = h.d.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
            ),
            n = !q.a.Instance.SceneAppIsHome || !t;
          this.screenshotMode
            ? Object(s.ib)(0)
            : n && !e
            ? this.isDarkMode
              ? Object(s.ib)(0.1)
              : q.a.Instance.SceneApplicationState !== s.w.None
              ? Object(s.ib)(0.15)
              : Object(s.ib)(1)
            : Object(s.ib)(1);
        } else Object(s.ib)(1);
        const e = this.getActiveOverlaySummonKey(),
          t = this.state.bShown && this.state.setForcingBoundsVisible[e],
          n = t && t.size > 0;
        let i = [];
        return (
          n && (i = this.getCollisionBoundsFadeVisualizationElements()),
          c.createElement(
            "div",
            { className: "DashboardMain" },
            n && c.createElement(re, null),
            n && c.createElement("span", null, i),
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
        return oe(this.getActiveOverlaySummonKey()) || t
          ? g.t
          : this.state.sActiveOverlayID + "_TopCenter";
      }
      get controlBarAnchorID() {
        let e = this.getActiveOverlayKey(),
          t =
            this.state.mapOverlayState.has(e) &&
            (this.state.mapOverlayState.get(e).dockLocation == g.i.LeftHand ||
              this.state.mapOverlayState.get(e).dockLocation == g.i.RightHand);
        return oe(this.getActiveOverlaySummonKey()) || t
          ? g.s
          : this.state.sActiveOverlayID + "_BottomCenter";
      }
      renderExternalOverlayControlBarButton(e) {
        const t = this.getDashboardIconUri(e),
          n = g.c.Center;
        return c.createElement(g.b, {
          key: e.mountable_id,
          label: e.tab_name,
          imageUrl: t,
          imageStyle: n,
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
            : e.VRProperties.GetStringProperty(0, s.z.PeerButtonInfo_String);
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
        var n, i, r, o, a, l, m, b, v, y;
        const f = this.state.bLaserMouseSuppressionActive ? 0.5 : 1,
          S = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
          C = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
          O = X.k_nControlBarWidthMeters,
          k =
            null ==
              (n = h.d.settings.get("/settings/dashboard/showPowerOptions")) ||
            n,
          D =
            null == (i = h.d.settings.get("/settings/dashboard/showDesktop")) ||
            i,
          w =
            null ==
              (r = h.d.settings.get("/settings/dashboard/showQuickStore")) || r,
          M = !(
            null != (o = h.d.settings.get("/settings/dashboard/arcadeMode")) &&
            o
          ),
          R = this.getPeerButtonInfo(),
          T = VRHTML.BIsLinkStreamActive(),
          I = VRHTML.BIsLinkServer(),
          P = T || I,
          x = q.a.Instance.SceneApplicationState,
          V = q.a.Instance.SceneAppIsHome,
          L =
            null ==
              (a = h.d.settings.get("/settings/dashboard/allowCurvature")) || a
              ? u.j
              : null,
          B = q.a.Instance.SceneAppKey;
        let A = "images/appimage_default.png";
        B && (A = "/app/image?app_key=" + B);
        const N = null != (l = h.d.settings.get(u.d)) && l,
          H = null != (m = h.d.settings.get(u.e)) ? m : 0,
          F = N && H > 0,
          j =
            null !=
              (b = h.d.settings.get("/settings/dashboard/allowTheaterMode")) &&
            b;
        let U = { y: -0.25, z: 0 };
        return (
          this.isOverlayActive(u.k) && (U = { y: -0.4, z: 0 }),
          c.createElement(
            s.Z,
            { value: f },
            c.createElement(
              s.lb,
              { color: S },
              c.createElement(
                s.ab,
                {
                  curvature_origin_id: L,
                  width: O,
                  interactive: !1,
                  debug_name: "ControlBarBackground",
                  sampler: s.u.SingleTap,
                  reflect: 0.05,
                },
                c.createElement("div", { className: "ControlBarBackground" })
              ),
              c.createElement(
                s.nb,
                { translation: { z: 1e-5 } },
                c.createElement(
                  s.ab,
                  {
                    curvature_origin_id: L,
                    width: O,
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
                      k &&
                        c.createElement(g.l, {
                          imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                          label: Object(p.c)("#Menu"),
                          style: g.d.Small,
                          onClick: () => this.showPopupMenu(J.Power),
                          onMouseEnter: this.clearPopupMenuTimeout,
                          onMouseLeave: () => this.startPopupMenuTimeout(500),
                        }),
                      D &&
                        c.createElement(g.l, {
                          style: g.d.Small,
                          imageUrl:
                            "/dashboard/images/icons/svr_desktop_alt.svg",
                          label: Object(p.c)("#Desktops"),
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
                              label: Object(p.c)("#X_More_Overlays", t.length),
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
                        label: Object(p.c)("#Library"),
                        imageUrl: "/dashboard/images/icons/svr_items.svg",
                        active:
                          this.isOverlayActive(u.r) ||
                          (this.isOverlayActive(u.H) &&
                            E.b.Instance.lastBigPictureEntryPoint ==
                              E.a.QuickLaunch),
                        style: g.d.Large,
                        onClick: this.onQuickLaunchButtonClick,
                      }),
                      x != s.w.None &&
                        c.createElement(
                          "div",
                          { className: "NowPlayingSpacer" },
                          c.createElement(
                            Z.a,
                            { allowableParentSelectors: [".DashboardMain"] },
                            c.createElement(
                              s.lb,
                              { color: S },
                              c.createElement(
                                s.nb,
                                { translation: { z: 0.02 } },
                                c.createElement(
                                  s.ab,
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
                                        ? Object(p.c)("#SteamVR_Home")
                                        : Object(p.c)("#Now_Playing"),
                                      active: this.isOverlayActive(u.p),
                                      style: g.d.App,
                                      imageUrl: A,
                                      onClick: () => this.switchToOverlay(u.p),
                                    })
                                  )
                                )
                              )
                            )
                          )
                        ),
                      w &&
                        c.createElement(g.l, {
                          label: Object(p.c)("#Store"),
                          imageUrl: "/dashboard/images/icons/svr_store.svg",
                          additionalClassNames: "Store",
                          active:
                            this.isOverlayActive(u.s) ||
                            (this.isOverlayActive(u.H) &&
                              E.b.Instance.lastBigPictureEntryPoint ==
                                E.a.QuickStore),
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
                          label: Object(p.c)("#Button_Recenter"),
                          onClick: () =>
                            this.m_mailbox.SendMessage(ie.b, {
                              type: ie.a,
                              countdown_seconds: 3,
                            }),
                        }),
                        F &&
                          c.createElement(g.b, {
                            imageUrl: "/dashboard/images/icons/svr_eye.svg",
                            label: Object(p.c)("#Toggle_Room_View"),
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
                      M &&
                        c.createElement(g.l, {
                          imageUrl: "/dashboard/images/icons/svr_settings.svg",
                          active: this.isOverlayActive(u.D),
                          enabled: this.hasOverlay(u.D),
                          label: Object(p.c)("#Settings"),
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
                          label: Object(p.c)(R.sButtonName),
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
                    tintColor: C,
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
                    tintColor: C,
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
              s.nb,
              { translation: U, scale: { y: 1.5, x: 1.5 } },
              c.createElement(s.U, {
                mountedId: Object(s.f)(u.F, "system.keyboard"),
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
        var t, n;
        const i =
          null !=
            (t = h.d.settings.get("/settings/dashboard/allowTheaterMode")) && t;
        e.starts_theater_mode && i && this.setState({ bTheaterMode: !0 }),
          (!e.is_dashboard_overlay ||
            (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
            (null === (n = VRHTML) ||
              void 0 === n ||
              n.VRDashboardManager.HideDashboard("game_launched"));
      }
      renderInternalOverlays() {
        var e, t, n, i;
        const r =
            null !=
            (t =
              null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.currentDesktopIndex)
              ? t
              : 1,
          o =
            null !=
            (i =
              null === (n = this.m_refDesktopView.current) || void 0 === n
                ? void 0
                : n.desktopCount)
              ? i
              : 1;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            s.j,
            {
              tabName: Object(p.c)("#Library"),
              iconUri: "/dashboard/images/icons/svr_items.svg",
              summonOverlayKey: u.r,
            },
            c.createElement(W, {
              visible: this.state.bShown && this.isOverlayActive(u.r),
              onGameLaunched: this.onGameLaunched,
            })
          ),
          c.createElement(
            s.j,
            {
              tabName: Object(p.c)("#Store"),
              iconUri: "/dashboard/images/icons/svr_store.svg",
              summonOverlayKey: u.s,
            },
            c.createElement(A, {
              visible: this.state.bShown && this.isOverlayActive(u.s),
            })
          ),
          c.createElement(
            s.j,
            { tabName: Object(p.c)("#Now_Playing"), summonOverlayKey: u.p },
            c.createElement(Q, {
              visible: this.state.bShown && this.isOverlayActive(u.p),
              onExitGame: () => this.switchToOverlay(u.r),
            })
          ),
          c.createElement(
            s.j,
            {
              summonOverlayKey: u.k,
              tabName:
                o > 1 ? Object(p.c)("#Desktop_X", r) : Object(p.c)("#Desktop"),
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
          const n = new Map(t.mapOverlayState),
            i = Object.assign(
              Object.assign({}, n.get(this.getActiveOverlayKey())),
              { fScale: e }
            );
          return { mapOverlayState: n.set(this.getActiveOverlayKey(), i) };
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
        var e, t, n, i;
        const r = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
        let o = !1,
          a = !1,
          l = this.getActiveOverlayKey();
        if (l) {
          let e = VRHTML.VROverlay.FindOverlay(l);
          (o =
            !!e && VRHTML.VROverlay.GetFlag(e, s.E.EnableControlBarKeyboard)),
            (a = !!e && VRHTML.VROverlay.GetFlag(e, s.E.EnableControlBarClose));
        }
        const d =
            null != (e = h.d.settings.get("/settings/dashboard/scaleSliderMin"))
              ? e
              : 0.75,
          m =
            null != (t = h.d.settings.get("/settings/dashboard/scaleSliderMax"))
              ? t
              : 1.5,
          b =
            null ==
              (n = h.d.settings.get("/settings/dashboard/allowCurvature")) || n
              ? u.j
              : null,
          v = { x: 0, y: -0.15, z: 0.1 };
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            s.nb,
            { parent_id: this.controlBarAnchorID, translation: { y: 0.003 } },
            c.createElement(
              s.lb,
              { color: r },
              c.createElement(
                s.ab,
                {
                  curvature_origin_id: b,
                  origin: s.t.TopCenter,
                  interactive: !1,
                  target_width_anchor_id: this.controlBarAnchorID,
                  height: 0.15,
                  min_width: 1.66,
                  debug_name: "ActiveOverlayControlBarBackground",
                  sampler: s.u.SingleTap,
                  reflect: 0.1,
                },
                c.createElement("div", {
                  className: "OverlayControlBarBackground",
                })
              )
            )
          ),
          c.createElement(
            s.nb,
            {
              parent_id: this.controlBarAnchorID,
              translation: { y: 0.003, z: 0.001 },
            },
            c.createElement(
              s.lb,
              { color: r },
              c.createElement(
                s.ab,
                {
                  curvature_origin_id: b,
                  origin: s.t.TopCenter,
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
                      Object(p.c)("#Size")
                    ),
                    c.createElement(ne.a, {
                      additionalClassName: "OverlayControlBarSlider",
                      min: d,
                      max: m,
                      value: this.activeOverlayScale,
                      valueStyleVariant: ne.c.OnHandle,
                      onChange: this.onActiveOverlayScaleChange,
                      detents: [1],
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                    }),
                    o &&
                      c.createElement(g.o, {
                        iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                        title: this.state.bKeyboardVisible
                          ? Object(p.c)("#HideKeyboardTooltip")
                          : Object(p.c)("#ShowKeyboardTooltip"),
                        tooltipTranslation: v,
                        additionalClassNames: "Keyboard",
                        onClick: this.toggleKeyboard,
                        active: this.state.bKeyboardVisible,
                      }),
                    c.createElement(g.o, {
                      iconUrl: "/dashboard/images/icons/mirror_left.png",
                      title: Object(p.c)("#DockOnLeftController"),
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
                          s.x.TrackedControllerRole_LeftHand
                        ) != s.pb,
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
                      title: Object(p.c)("#DockOnRightController"),
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
                          s.x.TrackedControllerRole_RightHand
                        ) != s.pb,
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
                      title: Object(p.c)("#FloatInWorld"),
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
                        title: Object(p.c)("#CloseOverlay"),
                        tooltipTranslation: v,
                        onClick: this.onActiveOverlayClosed,
                      }),
                    this.isDesktopOverlayActive() &&
                      (null === (i = this.m_refDesktopView.current) ||
                      void 0 === i
                        ? void 0
                        : i.renderControlBarButtons(v))
                  )
                )
              )
            )
          )
        );
      }
      renderDashboard() {
        var e, t, n, i, r, o, a;
        const l = this.computeFilteredOverlayTabs(),
          m = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null;
        let b = [],
          v = [],
          _ = null != (e = h.d.settings.get(u.o)) ? e : 2;
        if (l.length > _) {
          const e = h.d.settings.get(u.A);
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
          C = S ? 2.5 : 1.8;
        let O = !1,
          k = !0,
          D = !1,
          w = this.getActiveOverlayKey();
        if (w) {
          let e = VRHTML.VROverlay.FindOverlay(w);
          (D = !!e && VRHTML.VROverlay.GetFlag(e, s.E.EnableControlBar)),
            (k =
              !this.state.mapOverlayState.has(w) ||
              this.state.mapOverlayState.get(w).dockLocation == g.i.Dashboard),
            (O =
              this.state.mapOverlayState.has(w) &&
              this.state.mapOverlayState.get(w).dockLocation == g.i.World);
        }
        this.state.bLaserMouseSuppressionActive && (D = !1);
        const M =
            null !=
            (n = h.d.settings.get("/settings/dashboard/theaterDistance"))
              ? n
              : 4,
          R =
            null != (i = h.d.settings.get("/settings/dashboard/theaterScale"))
              ? i
              : 2,
          E =
            null !=
            (r =
              0.01 *
              h.d.settings.get("/settings/dashboard/theaterVerticalOffsetCm"))
              ? r
              : 0,
          T =
            null ==
              (o = h.d.settings.get("/settings/dashboard/allowCurvature")) || o,
          I = T ? u.j : null;
        let P,
          x,
          V,
          L,
          B,
          A =
            null !=
              (a = h.d.settings.get(
                "/settings/dashboard/enableLTCReflections"
              )) && a,
          N = this.state.bTheaterMode
            ? { y: -1.2, z: 1 }
            : { y: -1.2, z: 0.15 },
          H = this.state.bTheaterMode
            ? { x: 0.75, y: 0.75, z: 0.75 }
            : { x: 1, y: 1, z: 1 },
          F = !T && this.state.bTheaterMode ? 0.75 : 1,
          j = T ? 1 : 0;
        return (
          this.state.bTheaterMode
            ? ((P = { y: -0.8 * R + E, z: -M }),
              (x = R),
              (V = 1.72),
              (L = 0.82),
              (B = 10))
            : ((P = { y: D ? -0.9 : -1.03375, z: 0.05 }),
              (x = 1),
              (V = 2),
              (L = 0.68),
              (B = 5),
              (A = !1)),
          c.createElement(
            s.k,
            { bContinuousRelatch: this.state.bPlacementModeActive },
            c.createElement(s.nb, { id: I, translation: { z: C } }),
            c.createElement(
              s.nb,
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
                s.nb,
                {
                  parent_id: this.statusBarAnchorID,
                  translation: { y: 0.008 },
                  scale: { x: F, y: F },
                },
                c.createElement(
                  s.lb,
                  { color: m },
                  c.createElement(
                    s.ab,
                    {
                      curvature_origin_id: I,
                      origin: s.t.BottomCenter,
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
                          role: s.x.TrackedControllerRole_LeftHand,
                          style: te.b.HorizontalPips,
                        })
                      ),
                      c.createElement(
                        "div",
                        { className: "Section Center" },
                        c.createElement(g.m, {
                          deviceIndex: s.qb,
                          style: te.b.VerticalBattery,
                        }),
                        c.createElement(g.g, null)
                      ),
                      c.createElement(
                        "div",
                        { className: "Section Right" },
                        c.createElement(g.m, {
                          role: s.x.TrackedControllerRole_RightHand,
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
                s.nb,
                {
                  id: "active_overlay_transform",
                  translation: P,
                  ref: this.m_refOverlayTransform,
                },
                c.createElement(
                  s.nb,
                  { scale: { x: x, y: x } },
                  !O && k && this.renderActiveOverlay(),
                  !O &&
                    !k &&
                    c.createElement(
                      g.h,
                      {
                        additionalClassNames: D ? "WithControlBar" : "",
                        visible: !0,
                      },
                      c.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        c.createElement(
                          "h2",
                          null,
                          this.state.mapOverlayState.get(w).dockLocation ==
                            g.i.LeftHand &&
                            Object(p.c)("#DockedOnLeftController"),
                          this.state.mapOverlayState.get(w).dockLocation ==
                            g.i.RightHand &&
                            Object(p.c)("#DockedOnRightController")
                        ),
                        c.createElement(
                          d.a,
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              this.onDockOverlay(w, g.i.Dashboard);
                            },
                          },
                          Object(p.c)("#DockHere")
                        )
                      )
                    ),
                  A &&
                    c.createElement(
                      s.nb,
                      { translation: { y: L, z: 0.25 } },
                      c.createElement(s.N, {
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
              D && k && this.renderOverlayControlBar(),
              c.createElement(
                s.nb,
                { translation: N, scale: H },
                c.createElement(
                  s.nb,
                  { rotation: { x: -35 }, curvature_pitch: -35 },
                  this.renderControlBar(b, v)
                ),
                this.state.eShowPopupMenu == J.Power &&
                  c.createElement(
                    s.nb,
                    {
                      translation: { x: -0.4, y: 0.15, z: 0.05 },
                      rotation: { y: 19 * j },
                    },
                    c.createElement(
                      s.ab,
                      {
                        curvature_origin_id: I,
                        height: void 0,
                        width: 0.925,
                        interactive: !0,
                        origin: s.t.BottomRight,
                        debug_name: "Power Menu",
                        sort_depth_bias: -0.1,
                      },
                      this.renderPowerMenu()
                    )
                  ),
                this.state.eShowPopupMenu == J.ExternalOverlays &&
                  c.createElement(
                    s.nb,
                    {
                      translation: { x: 0.2, y: 0.15, z: 0.05 },
                      rotation: { y: 6 * j },
                    },
                    c.createElement(
                      s.ab,
                      {
                        curvature_origin_id: I,
                        height: void 0,
                        width: 0.925,
                        interactive: !0,
                        origin: s.t.BottomRight,
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
                    s.nb,
                    {
                      translation: { x: 1.25, y: -0.1, z: 0.35 },
                      rotation: { y: -16 * j },
                    },
                    c.createElement(
                      s.ab,
                      {
                        curvature_origin_id: I,
                        height: void 0,
                        width: 0.925,
                        interactive: !0,
                        origin: s.t.BottomRight,
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
    (se.k_sDashboardMailboxName = "systemui_dashboard"),
      (se.k_sSetDashboardFadeSupressionMessage =
        "set_dashboard_fade_suppression"),
      (se.k_sOverlayKeyboardClosedMessage = "overlay_keyboard_closed"),
      (se.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
      (se.k_sDashboardOverlayDestroyedMessage = "dashboard_overlay_destroyed"),
      (se.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
      (se.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
      (se.k_sWindowViewCreatedMessage = "window_view_created"),
      (se.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
      (se.k_sUpdateWindowListMessage = "update_window_list"),
      (se.k_sUpdateDebugInfoMessage = "update_debug_info"),
      (se.k_sSetDashboardForceBoundsVisible =
        "set_dashboard_force_bounds_visible"),
      (se.k_sLaserMouseSuppressionUpdate = "laser_mouse_suppression_update"),
      (se.k_nControlBarWidthMeters = 2.667),
      (se.s_dashboardUserDistance = void 0),
      (se.s_dashboardUserScale = void 0),
      Object(o.b)(
        [a.bind],
        se.prototype,
        "OnSetDashboardFadeSuppression",
        null
      ),
      Object(o.b)([a.bind], se.prototype, "onRoomViewChanged", null),
      Object(o.b)(
        [a.bind],
        se.prototype,
        "OnSetDashboardForceBoundsVisible",
        null
      ),
      Object(o.b)(
        [a.bind],
        se.prototype,
        "onLaserMouseSuppressionUpdate",
        null
      ),
      Object(o.b)([a.bind], se.prototype, "onDashboardOverlayCreated", null),
      Object(o.b)([a.bind], se.prototype, "onDashboardOverlayDestroyed", null),
      Object(o.b)([a.bind], se.prototype, "onUpdateDashboardTabs", null),
      Object(o.b)([a.bind], se.prototype, "onWindowViewCreated", null),
      Object(o.b)([a.bind], se.prototype, "onWindowViewDestroyed", null),
      Object(o.b)([a.bind], se.prototype, "onUpdateWindowList", null),
      Object(o.b)([a.bind], se.prototype, "onUpdateDebugInfo", null),
      Object(o.b)([a.bind], se.prototype, "onDockOverlay", null),
      Object(o.b)([a.bind], se.prototype, "show", null),
      Object(o.b)([a.bind], se.prototype, "hide", null),
      Object(o.b)([a.bind], se.prototype, "setPlacementModeActive", null),
      Object(o.b)([a.bind], se.prototype, "onToggleRoomView", null),
      Object(o.b)([a.bind], se.prototype, "onQuickLaunchButtonClick", null),
      Object(o.b)([a.bind], se.prototype, "onQuickStoreButtonClick", null),
      Object(o.b)([a.bind], se.prototype, "renderPowerMenu", null),
      Object(o.b)([a.bind], se.prototype, "startPopupMenuTimeout", null),
      Object(o.b)([a.bind], se.prototype, "clearPopupMenuTimeout", null),
      Object(o.b)([a.bind], se.prototype, "showPopupMenu", null),
      Object(o.b)([a.bind], se.prototype, "popupMenuMouseLeave", null),
      Object(o.b)([a.bind], se.prototype, "popupMenuMouseUp", null),
      Object(o.b)([b.f], se.prototype, "isDarkMode", null),
      Object(o.b)([b.f], se.prototype, "screenshotMode", null),
      Object(o.b)([b.f], se.prototype, "isTheaterMode", null),
      Object(o.b)(
        [a.bind],
        se.prototype,
        "renderExternalOverlayControlBarButton",
        null
      ),
      Object(o.b)([a.bind], se.prototype, "isDesktopTrayActive", null),
      Object(o.b)([a.bind], se.prototype, "isDesktopOverlayActive", null),
      Object(o.b)([a.bind], se.prototype, "handlePeerButton", null),
      Object(o.b)([a.bind], se.prototype, "isDesktopViewVisible", null),
      Object(o.b)([a.bind], se.prototype, "onGameLaunched", null),
      Object(o.b)([a.bind], se.prototype, "toggleKeyboard", null),
      Object(o.b)([a.bind], se.prototype, "onKeyboardClosed", null),
      Object(o.b)([b.f], se.prototype, "activeOverlayScale", null),
      Object(o.b)([a.bind], se.prototype, "onActiveOverlayScaleChange", null),
      Object(o.b)([a.bind], se.prototype, "onActiveOverlayClosed", null),
      Object(o.b)([b.m], se, "s_dashboardUserDistance", void 0),
      Object(o.b)([b.m], se, "s_dashboardUserScale", void 0),
      (se = X = Object(o.b)([m.a], se));
  },
  Lkzh: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "BindingDeviceCallouts", function () {
        return k;
      }),
      n.d(t, "BindingCallouts", function () {
        return D;
      }),
      n.d(t, "BindingCalloutContainer", function () {
        return w;
      });
    var i,
      r,
      o,
      s = n("mrSG"),
      a = n("q1tI"),
      l = n("i8i4"),
      c = n("7wIv"),
      d = n("/i/y"),
      u = n("MYgy"),
      p = n("GXif"),
      h = n("uFkT"),
      m = n("Kysl"),
      g = n("6YgL"),
      b = n("Gmup"),
      v = n("Q+Z6"),
      _ = n("okNM"),
      y = n("7uy8");
    function f(e, t) {
      let n = "";
      switch (t.mode) {
        case "dpad":
        case "dpad_touch":
        case "dpad_click":
          n =
            "/input/thumbstick" == t.input_path ||
            "/input/joystick" == t.input_path
              ? "_" + t.slot
              : "_dpad_" + t.slot;
          break;
        case "button":
          ("/input/trackpad" != t.input_path &&
            "/input/joystick" != t.input_path) ||
            (n = "_click");
      }
      switch (t.slot) {
        case "position":
          n = "_move";
          break;
        case "scroll":
          n = "_scroll";
      }
      let i = "/dashboard/images/bindingcallouts/";
      switch (t.input_path) {
        case "/input/a":
          return i + "button_a.svg";
        case "/input/b":
          return i + "button_b.svg";
        case "/input/x":
          return i + "button_x.svg";
        case "/input/y":
          return i + "button_y.svg";
        case "/input/grip":
          return i + "button_grip.svg";
        case "/input/system":
          return i + "button_system.svg";
        case "/input/application_menu":
          return i + "button_menu.svg";
        case "/input/trackpad":
          return "knuckles" == e
            ? i + "button_trackbutton" + n + ".svg"
            : i + "button_trackpad" + n + ".svg";
        case "/input/thumbstick":
        case "/input/joystick":
          return i + "button_thumbstick" + n + ".svg";
        case "/input/trigger":
          return i + "button_trigger.svg";
      }
      return null;
    }
    function S(e) {
      switch (e) {
        case "north":
        case "south":
        case "east":
        case "west":
        case "center":
          return "dpad";
        case "click":
        case "single":
        case "double":
        case "long":
        case "held":
        default:
          return "button";
      }
    }
    class C extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      renderSlot(e, t) {
        let n,
          i = f(this.props.controllerType, e);
        n = i
          ? a.createElement("img", { className: "BindingCalloutIcon", src: i })
          : a.createElement("div", { className: "BindingCalloutIcon" });
        let r,
          o = (function (e) {
            let t = "/dashboard/images/bindingcallouts/";
            switch (e.mode) {
              case "dpad":
              case "dpad_click":
                return t + "modifier_click.svg";
              case "dpad_touch":
                return t + "modifier_touch.svg";
            }
            switch (e.slot) {
              case "grab":
              case "click":
              case "single":
                return t + "modifier_click.svg";
              case "double":
                return t + "modifier_doubleclick.svg";
              case "long":
                return t + "modifier_long.svg";
              case "held":
                return t + "modifier_held.svg";
              case "scroll":
              case "position":
              case "touch":
                return t + "modifier_touch.svg";
              case "force":
                return t + "modifier_force.svg";
            }
            return null;
          })(e);
        return (
          (r = o
            ? a.createElement("img", {
                className: "BindingCalloutModifierIcon",
                src: o,
              })
            : a.createElement("div", {
                className: "BindingCalloutModifierIcon",
              })),
          a.createElement(
            "div",
            { className: "BindingCalloutContents", key: t },
            n,
            r,
            a.createElement(
              "div",
              { className: "BindingCalloutLabelContainer" },
              a.createElement(
                "div",
                { className: "Label" },
                e.localized_action_name
              ),
              a.createElement(
                "div",
                { className: "BindingCalloutModeSlot" },
                this.props.localizedInputName,
                " : ",
                Object(p.c)("#SourceInputMode_" + e.slot)
              )
            )
          )
        );
      }
      render() {
        let e,
          t = "BindingCallout";
        this.props.leftAlign
          ? ((e = -0.05), (t += " AlignCalloutRight"))
          : ((e = 0.05), (t += " AlignCalloutLeft")),
          this.props.inputActive && (t += " CalloutInputActive");
        let n =
          this.props.devicePath +
          this.props.inputCallout.input_path +
          "_component";
        return a.createElement(
          "div",
          { className: "BindingCalloutContainer" },
          a.createElement(d.e, {
            id: n,
            sDevicePath: this.props.devicePath,
            sInputPath: this.props.inputCallout.input_path,
            key: n,
          }),
          a.createElement(
            "div",
            { className: t },
            this.props.inputCallout.slot_callouts.map((e, t) =>
              this.renderSlot(e, String(t))
            ),
            a.createElement(
              "div",
              { className: "CalloutAnchorPoint" },
              a.createElement(
                d.bb,
                null,
                this.props.inputActive &&
                  a.createElement(d.R, {
                    target_id: n,
                    thickness: 0.002,
                    start_buffer: 0,
                    end_buffer: 0,
                  })
              )
            )
          )
        );
      }
    }
    class O extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        let e = [],
          t = [];
        for (let n of this.props.chordCallout.inputs) {
          let i = n.device_path + n.input_path + n.slot,
            r = {
              device_path: n.device_path,
              input_path: n.input_path,
              mode: S(n.slot),
              slot: n.slot,
              localized_action_name:
                this.props.chordCallout.localized_action_name,
            };
          e.length > 0 &&
            e.push(
              a.createElement(
                "div",
                { className: "ChordCalloutPlus", key: "plus" + e.length },
                "+"
              )
            ),
            e.push(
              a.createElement("img", {
                className: "BindingCalloutIcon",
                key: i + "_icon",
                src: f(this.props.controllerType, r),
              })
            ),
            t.push(
              a.createElement(
                "div",
                { className: "BindingCalloutModeSlot", key: i + "_text" },
                h.a.LocalizeControllerString(
                  this.props.controllerTypeInfo,
                  n.input_path
                ),
                " : ",
                Object(p.c)("#SourceInputMode_" + n.slot)
              )
            );
        }
        let n = "ChordCalloutContainer";
        return (
          this.props.inputActive && (n += " CalloutInputActive"),
          a.createElement(
            "div",
            { className: n },
            a.createElement("div", { className: "ChordCalloutHeader" }, e),
            a.createElement(
              "div",
              { className: "ChordCalloutBody" },
              a.createElement(
                "div",
                { className: "Label" },
                this.props.chordCallout.localized_action_name
              ),
              t
            )
          )
        );
      }
    }
    class k extends a.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new d.c()),
          (this.m_sMailboxName = void 0),
          (this.m_sMailboxName =
            "devicecallout/" +
            this.props.device.device_path.replace(/\//g, "_")),
          this.m_mailbox.Init(this.m_sMailboxName).then(() => {
            this.m_mailbox.RegisterHandler(
              "input_active_state",
              this.OnInputActiveState
            );
            let e = {
              type: "request_input_in_use_updates",
              device_path: this.props.device.device_path,
              mailbox: this.m_sMailboxName,
            };
            this.m_mailbox.SendMessage("input_server", e);
          });
        let t = {};
        for (let e of Object.keys(this.props.device.input_callouts)) t[e] = !1;
        this.state = { input_state: t };
      }
      OnInputActiveState(e) {
        let t = Object.assign({}, this.state.input_state);
        (t[e.input_path] = e.state), this.setState({ input_state: t });
      }
      componentWillUnmount() {
        let e = {
          type: "cancel_input_in_use_updates",
          device_path: this.props.device.device_path,
          mailbox: this.m_sMailboxName,
        };
        this.m_mailbox.SendMessage("input_server", e);
      }
      render() {
        if (!VRHTML) return null;
        if (!VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path))
          return null;
        let e = -0.05,
          t = { x: -0.08, y: 0.05, z: 0.12 },
          n = !0;
        "/user/hand/left" == this.props.device.device_path &&
          ((t.x = -t.x), (e = -e), (n = !1));
        let i = h.a.GetControllerTypeInfo(this.props.controllerType);
        if (!i) return null;
        let r = [],
          o = Object.keys(this.props.device.input_callouts);
        for (let e of o) {
          let t = this.props.device.input_callouts[e],
            s = (t.slot_callouts.length, e);
          i && (s = h.a.LocalizeControllerString(i, e));
          let l = i.input_source[e],
            c = 999;
          l && l.order && (c = l.order);
          let d = a.createElement(C, {
            devicePath: this.props.device.device_path,
            inputCallout: t,
            leftAlign: n,
            inputActive: 1 == o.length || this.state.input_state[t.input_path],
            localizedInputName: s,
            controllerType: this.props.controllerType,
            key: this.props.device.device_path + e,
          });
          r.push({ order: c, callout: d });
        }
        r.sort((e, t) => e.order - t.order);
        let s = r.map((e) => e.callout),
          l = [];
        for (let e of this.props.device.chords) {
          let t = !1;
          for (let n of e.inputs) t = t || this.state.input_state[n.input_path];
          l.push(
            a.createElement(O, {
              controllerTypeInfo: i,
              chordCallout: e,
              controllerType: this.props.controllerType,
              key: "chord_" + l.length,
              inputActive: t,
            })
          );
        }
        return a.createElement(
          d.nb,
          { parent_path: this.props.device.device_path },
          a.createElement(
            d.d,
            { vOffset: t },
            a.createElement(
              d.L,
              null,
              a.createElement(
                d.nb,
                { rotation: { y: n ? 7 : -7 } },
                a.createElement(
                  d.nb,
                  { translation: { x: e } },
                  a.createElement(
                    d.ab,
                    { width: 0.1 },
                    a.createElement(
                      "div",
                      { className: "FlexColumn BindingCalloutColumn" },
                      s,
                      l
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
    Object(s.b)([c.bind], k.prototype, "OnInputActiveState", null);
    class D extends a.Component {
      constructor(e) {
        super(e);
      }
      GenerateCalloutDirections(e) {
        switch (e) {
          case 0:
            return [];
          case 1:
            return [{ x: -0.05, y: 0.06 }];
          default: {
            let t = Math.PI / 8,
              n = (7 * Math.PI) / 8,
              i = [];
            for (let r = 0; r < e; r++) {
              let o = t + ((n - t) * r) / (e - 1),
                s = { x: -Math.cos(o), y: Math.sin(o) };
              i.push(s);
            }
            return i;
          }
        }
      }
      ComputeActualRect(e, t) {
        return e.dir.x <= 0
          ? {
              left: e.dir.x * t - e.size.x,
              right: e.dir.x * t,
              top: e.dir.y * t - e.size.y / 2,
              bottom: e.dir.y * t + e.size.y / 2,
            }
          : {
              left: e.dir.x * t,
              right: e.dir.x * t + e.size.x,
              top: e.dir.y * t - e.size.y / 2,
              bottom: e.dir.y * t + e.size.y / 2,
            };
      }
      HasIntersection(e, t) {
        return (
          !(e.right < t.left || e.left > t.right) &&
          !(e.bottom < t.top || e.top > t.bottom)
        );
      }
      HasCollision(e, t) {
        for (let n = 0; n < e.length; n++)
          for (let i = 0; i < e.length; i++) {
            if (n == i) continue;
            let r = this.ComputeActualRect(e[n], t),
              o = this.ComputeActualRect(e[i], t);
            if (this.HasIntersection(r, o)) return !0;
          }
        return !1;
      }
      FindDistanceThatFits(e, t, n) {
        let i = t;
        for (; this.HasCollision(e, i); ) i += n;
        return i;
      }
      render() {
        return this.props.devices
          ? a.createElement(
              "div",
              { className: "DeviceCalloutList" },
              Object.keys(this.props.devices).map((e) =>
                a.createElement(
                  "div",
                  { key: e, className: "DeviceCalloutListEntry" },
                  a.createElement(k, {
                    device: this.props.devices[e],
                    controllerType: this.props.controllerType,
                    key: e,
                  })
                )
              )
            )
          : null;
      }
    }
    let w = class extends a.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new d.c()),
          this.m_mailbox.Init(y.b).then(() => {
            this.m_mailbox.RegisterHandler(
              "request_binding_callouts",
              this.OnRequestBindingCallouts
            ),
              this.m_mailbox.RegisterHandler(
                "cancel_binding_callouts",
                this.OnCancelBindingCallouts
              ),
              this.m_mailbox.RegisterHandler(
                "should_show_binding_callouts",
                this.OnShouldShowBindingCallouts
              ),
              this.m_mailbox.RegisterHandler(
                "request_tutorial_callout",
                this.OnRequestTutorialCallout
              );
          }),
          v.d.Init(!1),
          (this.state = {});
      }
      GetDefaultControllerType() {
        let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
          t = e.find((e) => e.eClass == d.y.Controller);
        return (
          t || (t = e.find((e) => e.eClass == d.y.HMD)),
          t
            ? VRHTML.VRProperties.GetStringProperty(
                t.unIndex,
                d.z.ControllerType_String
              )
            : null
        );
      }
      SendShouldShowBindingCalloutsResponse(e, t) {
        let n = {
          type: "should_show_binding_callouts_response",
          app_key: e.app_key,
          has_callouts: t,
        };
        this.m_mailbox.SendResponse(e, n);
      }
      OnShouldShowBindingCallouts(e) {
        let t = this.GetDefaultControllerType();
        Object(u.f)(e.app_key)
          .then((n) => {
            let i = !n.legacy;
            if (n.legacy) {
              i =
                n.current_binding_url[t] !=
                (n.default_bindings && n.default_bindings[t]);
            }
            return i
              ? (this.SendShouldShowBindingCalloutsResponse(e, !0), null)
              : Object(u.d)(e.app_key, t, n.current_binding_url[t]);
          })
          .then((t) => {
            let n = !1;
            if (t.binding_config.alias_info)
              for (let e in t.binding_config.alias_info) {
                let i = t.binding_config.alias_info[e];
                if (!i.hidden && i.alias_name) {
                  n = !0;
                  break;
                }
              }
            t.binding_config.simulated_actions &&
              t.binding_config.simulated_actions.length > 0 &&
              (n = !0),
              this.SendShouldShowBindingCalloutsResponse(e, n);
          })
          .catch((t) => {
            this.SendShouldShowBindingCalloutsResponse(e, !1);
          });
      }
      OnRequestBindingCallouts(e) {
        let t,
          n = e.controller_type
            ? e.controller_type
            : this.GetDefaultControllerType();
        Object(u.f)(e.app_key)
          .then(
            (i) => (
              (t = i), Object(u.d)(e.app_key, n, t.current_binding_url[n])
            )
          )
          .then((i) => {
            (Object.assign({}, e).controller_type = n),
              this.ShowCallouts(e, n, t, i.binding_config);
          })
          .catch((e) => {
            console.log("Request for bindings failed: ", e);
          });
      }
      OnCancelBindingCallouts(e) {
        this.state.sAppKey == e.app_key && this.OnCloseCallouts();
      }
      OnRequestTutorialCallout(e) {
        this.setState({
          actionManifest: null,
          bindingConfig: null,
          sActionSet: null,
          sRestrictToAction: null,
          sAppKey: e.app_key,
          sControllerType: e.controller_type,
          tutorialCallout: e,
        });
      }
      IsActionSetAllowed(e, t) {
        if (e.required_options)
          for (let n of e.required_options) if (!t.options[n]) return !1;
        if (e.forbidden_options)
          for (let n of e.forbidden_options) if (t.options[n]) return !1;
        return !0;
      }
      DoesActionSetHaveBindings(e, t) {
        if (
          t.bindings &&
          t.bindings[e.name] &&
          t.bindings[e.name].sources.length > 0
        ) {
          let t = !1;
          for (let n of e.actions)
            if (!n.hide_callout) {
              t = !0;
              break;
            }
          return t;
        }
        return !1;
      }
      DetermineDefaultActionSet(e, t) {
        for (let n of e.action_sets)
          if (
            this.IsActionSetAllowed(n, t) &&
            this.DoesActionSetHaveBindings(n, t)
          )
            return n.name;
      }
      ShowCallouts(e, t, n, i) {
        let r = null,
          o = null;
        if (e.action) {
          e: for (let t of n.action_sets)
            if (this.DoesActionSetHaveBindings(t, i))
              for (let n of t.actions)
                if (n.name.toUpperCase() == e.action.toUpperCase()) {
                  r = t.name;
                  break e;
                }
          o = e.action.toUpperCase();
        } else
          r = e.action_sets
            ? e.action_sets[0]
            : this.DetermineDefaultActionSet(n, i);
        r &&
          this.setState({
            actionManifest: n,
            bindingConfig: i,
            sActionSet: r,
            sRestrictToAction: o,
            sAppKey: e.app_key,
            sControllerType: t,
          });
      }
      ComputeCalloutsForActionSet(e) {
        let t = [],
          n = this.state.bindingConfig.bindings[e.name];
        if (n && n.sources)
          for (let i of n.sources)
            if (i.inputs)
              for (let n of Object.keys(i.inputs)) {
                let r = i.inputs[n];
                if (!r.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  r.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let o = i.path.indexOf("/input");
                if (-1 == o) continue;
                let s = {
                    device_path: i.path.substring(0, o),
                    input_path: i.path.substring(o),
                    mode: i.mode,
                    slot: n,
                    localized_action_name: null,
                  },
                  a = e.actions.find(
                    (e) => e.name.toUpperCase() == r.output.toUpperCase()
                  );
                if (a) {
                  if (a.hide_callout) continue;
                  let e = a.localized_name,
                    t =
                      this.state.bindingConfig.alias_info &&
                      this.state.bindingConfig.alias_info[a.name];
                  if (t && (t.alias_name && (e = t.alias_name), t.hidden))
                    continue;
                  s.localized_action_name = e;
                } else if (r.output.startsWith("/simactions/")) {
                  let e = parseInt(
                      r.output.slice(r.output.lastIndexOf("/") + 1)
                    ),
                    t = this.state.bindingConfig.simulated_actions.find(
                      (t) => t.id == e
                    );
                  if (!t) continue;
                  s.localized_action_name = t.name;
                }
                s.localized_action_name && t.push(s);
              }
        return t;
      }
      ComputeChordCalloutsForActionSet(e) {
        let t = [],
          n = this.state.bindingConfig.bindings[e.name];
        if (n && n.chords)
          for (let i of n.chords) {
            if (!i.inputs || !i.output) continue;
            if (
              this.state.sRestrictToAction &&
              i.output.toUpperCase() != this.state.sRestrictToAction
            )
              continue;
            let n = e.actions.find(
              (e) => e.name.toUpperCase() == i.output.toUpperCase()
            );
            if (!n) continue;
            let r = { inputs: [], localized_action_name: n.localized_name };
            for (let e of i.inputs) {
              if (2 != e.length) continue;
              let t = e[0].indexOf("/input");
              if (-1 == t) continue;
              let n = {
                device_path: e[0].substring(0, t),
                input_path: e[0].substring(t),
                slot: e[1],
              };
              r.inputs.push(n);
            }
            r.inputs.length > 0 && t.push(r);
          }
        return t;
      }
      ComputeGroupedCallouts() {
        if (
          !(
            this.state.actionManifest &&
            this.state.bindingConfig &&
            this.state.sActionSet &&
            this.state.sAppKey &&
            this.state.sControllerType
          )
        )
          return {};
        let e = [],
          t = [];
        for (let n of this.state.actionManifest.action_sets)
          (n.name != this.state.sActionSet &&
            n.display_with != this.state.sActionSet) ||
            ((e = e.concat(this.ComputeCalloutsForActionSet(n))),
            (t = t.concat(this.ComputeChordCalloutsForActionSet(n))));
        return this.GroupCallouts(e, t);
      }
      GroupCallouts(e, t) {
        let n = {};
        for (let t of e) {
          let e = t.device_path.toLowerCase();
          n.hasOwnProperty(e) ||
            (n[e] = { device_path: e, input_callouts: {}, chords: [] });
          let i = n[e];
          i.input_callouts.hasOwnProperty(t.input_path) ||
            (i.input_callouts[t.input_path] = {
              input_path: t.input_path,
              slot_callouts: [],
            }),
            i.input_callouts[t.input_path].slot_callouts.push(t);
        }
        for (let e of t) {
          if (0 == e.inputs.length) continue;
          let t = e.inputs[0].device_path.toLowerCase(),
            i = !1;
          for (let n of e.inputs)
            if (n.device_path.toLowerCase() != t) {
              i = !0;
              break;
            }
          i
            ? console.log(
                "chord is multi-device, which we don't know how to draw yet",
                e
              )
            : n[t].chords.push(e);
        }
        return n;
      }
      OnSelectActionSet(e) {
        this.setState({ sActionSet: e });
      }
      OnCloseCallouts() {
        this.setState({
          actionManifest: void 0,
          bindingConfig: void 0,
          sActionSet: void 0,
          sRestrictToAction: void 0,
          sAppKey: void 0,
          sControllerType: void 0,
          tutorialCallout: void 0,
        });
      }
      renderTutorialCallout() {
        let e = {
            device_path: this.state.tutorialCallout.device_path,
            input_path: this.state.tutorialCallout.input_path,
            mode: this.state.tutorialCallout.mode,
            slot: this.state.tutorialCallout.slot,
            localized_action_name:
              this.state.tutorialCallout.localized_action_name,
          },
          t = {
            input_path: this.state.tutorialCallout.input_path,
            slot_callouts: [e],
          },
          n = {
            device_path: this.state.tutorialCallout.device_path,
            input_callouts: {},
            chords: [],
          };
        n.input_callouts[this.state.tutorialCallout.input_path] = t;
        let i = {};
        return (
          (i[this.state.tutorialCallout.device_path] = n),
          a.createElement(D, {
            devices: i,
            controllerType: this.state.sControllerType,
          })
        );
      }
      render() {
        if (this.state.tutorialCallout) return this.renderTutorialCallout();
        let e = this.ComputeGroupedCallouts();
        if (0 == Object.keys(e).length) return null;
        let t = [];
        this.state.actionManifest.action_sets.forEach((e) => {
          if (
            this.IsActionSetAllowed(e, this.state.bindingConfig) &&
            !e.display_with &&
            this.DoesActionSetHaveBindings(e, this.state.bindingConfig)
          ) {
            let n = "ActionSetName ButtonControl";
            e.name == this.state.sActionSet && (n += " ActionSetSelected"),
              t.push(
                a.createElement(
                  g.a,
                  {
                    className: n,
                    onClick: () => {
                      this.OnSelectActionSet(e.name);
                    },
                    key: e.name,
                  },
                  e.localized_name
                )
              );
          }
        });
        let n = m.a.GetApp(this.state.sAppKey);
        return a.createElement(
          "div",
          { className: "CalloutTopLevelContainer" },
          !this.state.sRestrictToAction &&
            a.createElement(
              "div",
              { className: "CalloutActionSetDialogContainer" },
              a.createElement(
                d.nb,
                { parent_path: "/user/head" },
                a.createElement(
                  d.H,
                  { start_angle_threshold: 40, stop_angle_threshold: 5 },
                  a.createElement(
                    d.nb,
                    { rotation: { x: -10, y: 10, z: 0 } },
                    a.createElement(
                      d.nb,
                      {
                        translation: {
                          x: -0,
                          y: -0,
                          z: -0.85 * b.a.getDashboardDistance(),
                        },
                      },
                      a.createElement(
                        d.ab,
                        {
                          width: 0.65 * b.a.getDashboardScale(),
                          interactive: !0,
                        },
                        a.createElement(
                          g.b,
                          { className: "BindingCalloutActionPanel" },
                          n &&
                            a.createElement(
                              "div",
                              { className: "BindingCalloutAppHeader" },
                              a.createElement("img", {
                                className: "BindingCalloutImage",
                                src: m.a.GetAppImageURL(this.state.sAppKey),
                              }),
                              a.createElement(
                                "div",
                                { className: "BindingCalloutTitle" },
                                "Controller Bindings"
                              ),
                              a.createElement(
                                "div",
                                { className: "BindingCalloutConfigName" },
                                this.state.bindingConfig.name
                              )
                            ),
                          a.createElement(
                            "div",
                            { className: "BindingCalloutActionList" },
                            t,
                            a.createElement(
                              g.a,
                              {
                                className: "ButtonControl CloseButton",
                                onClick: this.OnCloseCallouts,
                              },
                              "Close"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
          a.createElement(D, {
            devices: e,
            controllerType: this.state.sControllerType,
          })
        );
      }
    };
    Object(s.b)([c.bind], w.prototype, "OnShouldShowBindingCallouts", null),
      Object(s.b)([c.bind], w.prototype, "OnRequestBindingCallouts", null),
      Object(s.b)([c.bind], w.prototype, "OnCancelBindingCallouts", null),
      Object(s.b)([c.bind], w.prototype, "OnRequestTutorialCallout", null),
      Object(s.b)([c.bind], w.prototype, "OnCloseCallouts", null),
      (w = Object(s.b)([_.a], w)),
      null === (i = VRHTML) ||
        void 0 === i ||
        i.VROverlay.SetFlag(
          VRHTML.VROverlay.ThisOverlayHandle(),
          d.E.MakeOverlaysInteractiveIfVisible,
          !0
        ),
      null === (r = VRHTML) ||
        void 0 === r ||
        r.VROverlay.SetInputMethod(
          VRHTML.VROverlay.ThisOverlayHandle(),
          d.F.Mouse
        ),
      Object(p.b)(
        ["bindingui"],
        null === (o = VRHTML) || void 0 === o ? void 0 : o.GetSteamVRLanguage()
      )
        .then(() => h.a.Init())
        .then(() => m.a.Init())
        .then(() => {
          l.render(
            a.createElement(d.gb, null, a.createElement(w, null)),
            document.getElementById("root")
          );
        });
  },
  N46P: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var i = n("mrSG"),
      r = n("q1tI"),
      o = n("7wIv"),
      s = n("GXif"),
      a = n("/i/y");
    class l extends r.Component {
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
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Pressed:"
            )
          ),
          e.pressed)
        )
          for (let n of e.pressed)
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Touched:"
            )
          ),
          e.touched)
        )
          for (let n of e.touched)
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Supported:"
            )
          ),
          e.supported_buttons)
        )
          for (let n of e.supported_buttons)
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        t.push(
          r.createElement(
            "div",
            { className: "Label LegacyDebuggerGroup" },
            "Axis:"
          )
        );
        for (let n of e.axis)
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "X: ",
              n.x.toFixed(2),
              " Y: ",
              n.y.toFixed(2)
            )
          );
        return t;
      }
      render() {
        return this.state.currentState
          ? r.createElement(
              "div",
              { className: "FlexRow" },
              r.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                r.createElement("div", { className: "Label" }, "Left"),
                this.renderController(this.state.currentState.left)
              ),
              r.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                r.createElement("div", { className: "Label" }, "Right"),
                this.renderController(this.state.currentState.right)
              ),
              r.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                r.createElement("div", { className: "Label" }, "HMD"),
                this.renderController(this.state.currentState.hmd)
              )
            )
          : r.createElement(
              "div",
              { className: "Label" },
              Object(s.c)("#LegacyDebugger_NoApp")
            );
      }
    }
    Object(i.b)([o.bind], l.prototype, "OnLegacyInputFrame", null);
    class c extends r.Component {
      constructor(e) {
        super(e);
      }
      render() {
        return r.createElement(
          "div",
          { className: "FlexRowWithWrap" },
          r.createElement(
            "div",
            { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
            r.createElement(l, null)
          )
        );
      }
    }
  },
  V1oe: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return C;
    });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      s = n("7wIv"),
      a = n("GXif"),
      l = n("/i/y"),
      c = n("uFkT"),
      d = n("MYgy"),
      u = n("Yd4P"),
      p = n.n(u),
      h = n("okNM"),
      m = n("2vnA"),
      g = n("TbT/"),
      b = n("GxMB");
    !(function (e) {
      (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
    })(i || (i = {}));
    class v extends o.Component {
      constructor(e) {
        super(e),
          (this.m_containerRef = null),
          (this.m_nameRef = null),
          (this.m_svgRef = null),
          (this.m_containerRef = o.createRef()),
          (this.m_nameRef = o.createRef()),
          (this.m_svgRef = o.createRef()),
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
      ComponentUpdated(e, t, n) {
        e == this.props.devicePath &&
          (t == this.props.sourcePath + "/click" && this.setState({ click: n }),
          t == this.props.sourcePath + "/touch" && this.setState({ touch: n }),
          t == this.props.sourcePath + "/x" && this.setState({ x: n }),
          t == this.props.sourcePath + "/y" && this.setState({ y: n }),
          t == this.props.sourcePath + "/value" && this.setState({ value: n }),
          t == this.props.sourcePath + "/force" && this.setState({ force: n }));
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
          o.createElement(
            "div",
            { className: "VisualizerButtonContainer" },
            o.createElement("div", { className: "VisualizerButtonBase" + e })
          )
        );
      }
      renderBar(e, t, n) {
        let i = { width: String(100 * n) + "%" };
        return o.createElement(
          "div",
          { className: "TriggerBar " + t },
          o.createElement(
            "div",
            { className: "VisualizerLabel" },
            Object(a.c)(e)
          ),
          o.createElement(
            "div",
            { className: "TriggerBarBackground" },
            o.createElement("div", { className: "TriggerBarContent", style: i })
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
            n = this.m_svgRef.current.children.namedItem("SourceCircle"),
            r = this.props.side == i.Right,
            o = this.m_nameRef.current.getBoundingClientRect(),
            s = this.m_containerRef.current.getBoundingClientRect(),
            a = this.GetPosition(),
            l = new d.e(0, o.top + o.height / 2);
          l.x = r ? s.left - 10 : s.right + 10;
          let c = r ? -20 : 20,
            u = l.x + c + "," + l.y + " " + a.x + "," + a.y;
          e.setAttribute("points", u);
          let p = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
          t.setAttribute("points", p),
            n.setAttribute("cx", a.x + ""),
            n.setAttribute("cy", a.y + "");
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
          this.props.side == i.Left
            ? (e += " MenuLeftLine")
            : (e += " MenuRightLine"),
          this.IsEngaged() && (e += " MenuSVGVisible"),
          o.createElement(
            "div",
            { className: "VisualizerControl", ref: this.m_containerRef },
            o.createElement(
              "div",
              { className: "VisualizerSectionHeader" },
              o.createElement(
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
            o.createElement(
              "svg",
              {
                className: e,
                xmlns: "http://www.w3.org/2000/svg",
                ref: this.m_svgRef,
              },
              o.createElement(
                "defs",
                null,
                o.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  o.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0.8",
                  }),
                  o.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  })
                )
              ),
              o.createElement("polyline", {
                id: "SourceLine",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              o.createElement("polyline", {
                id: "SourcePath",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              o.createElement("circle", {
                id: "SourceCircle",
                r: "2rem",
                fill: "url(#buttonGradient)",
              })
            )
          )
        );
      }
    }
    Object(r.b)([s.bind], v.prototype, "ComponentUpdated", null),
      Object(r.b)([s.bind], v.prototype, "UpdateSVGPath", null);
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
        return o.createElement(
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
          o.createElement(
            "div",
            {
              className:
                "TrackpadVisualizerContainer" +
                (this.state.touch ? " Touched" : ""),
            },
            o.createElement(
              "div",
              { className: "TrackpadPosition" },
              o.createElement(
                "div",
                { className: "VisualizerLabel" },
                Object(a.c)("#SourceInputMode_Position")
              ),
              o.createElement(
                "div",
                { className: "TrackpadVisualizerContainer" },
                o.createElement(
                  "div",
                  { className: "TrackpadVisualizerBackground" },
                  e &&
                    o.createElement(
                      "div",
                      { style: e },
                      o.createElement(
                        "div",
                        { className: "TrackpadVisualizerPipContainer" },
                        o.createElement("div", { className: t })
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
    class S extends o.Component {
      constructor(e) {
        super(e),
          (this.m_imageRef = o.createRef()),
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
      renderSource(e, t, n) {
        let i = e + this.ControllerTypeInfo.controller_type;
        switch (t.type) {
          case "button":
            return o.createElement(_, {
              key: i,
              side: n,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "trigger":
            return o.createElement(y, {
              key: i,
              side: n,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "joystick":
          case "trackpad":
            return o.createElement(f, {
              key: i,
              side: n,
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
            return o.createElement(
              "div",
              { key: i },
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
          n = this.ControllerTypeInfo;
        return (
          "/user/hand/left" == this.props.devicePath
            ? n.input_bindingui_left &&
              ((e = n.input_bindingui_left.uri),
              (t = n.input_bindingui_left.transform
                ? n.input_bindingui_left.transform
                : ""))
            : "/user/hand/right" == this.props.devicePath
            ? n.input_bindingui_right &&
              ((e = n.input_bindingui_right.uri),
              (t = n.input_bindingui_right.transform
                ? n.input_bindingui_right.transform
                : ""))
            : n.input_bindingui_left
            ? ((e = n.input_bindingui_left.uri),
              (t = n.input_bindingui_left.transform
                ? n.input_bindingui_left.transform
                : ""))
            : n.input_bindingui_right &&
              ((e = n.input_bindingui_right.uri),
              (t = n.input_bindingui_right.transform
                ? n.input_bindingui_right.transform
                : "")),
          e
            ? o.createElement(
                "div",
                { className: "VisualizerImageContainer" },
                o.createElement("img", {
                  className: "VisualizerImage",
                  ref: this.m_imageRef,
                  onLoad: this.OnImageLoaded,
                  src: e,
                  style: { transform: t },
                }),
                o.createElement(p.a, { onReflow: this.OnImageReflow })
              )
            : null
        );
      }
      render() {
        let e = [],
          t = [],
          n = this.ControllerTypeInfo,
          r = 0,
          s = [];
        for (let e in n.input_source) {
          let t = n.input_source[e];
          if ("InputValueVisibility_AvailableButHidden" == t.visibility)
            continue;
          let i = this.EstimateSourceHeight(t);
          (r += i),
            s.push({
              sSourcePath: e,
              inputSource: t,
              order: t.order ? t.order : 0,
              height: i,
            });
        }
        let a = 8;
        r > 16 && (a = r / 2);
        let l = 0,
          c = s.sort((e, t) => e.order - t.order);
        for (let n of c) {
          l += n.height;
          let r = l > a ? i.Right : i.Left,
            o = this.renderSource(n.sSourcePath, n.inputSource, r);
          o && (r == i.Left ? e.push(o) : t.push(o));
        }
        return o.createElement(
          "div",
          { className: "ControllerVisualizer" },
          o.createElement(
            "div",
            { className: "VisualizerLeft ControllerVisualizerEntries" },
            e
          ),
          this.renderImage(),
          o.createElement(
            "div",
            { className: "VisualizerRight ControllerVisualizerEntries" },
            t
          )
        );
      }
    }
    Object(r.b)([s.bind], S.prototype, "OnImageLoaded", null),
      Object(r.b)([s.bind], S.prototype, "OnImageReflow", null);
    let C = class extends o.Component {
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
          let n = e.device + t;
          this.m_componentRegistrations[n] &&
            this.m_componentRegistrations[n](e.device, t, e.components[t]);
        }
      }
      RegisterSourceVisualizer(e, t, n) {
        this.m_componentRegistrations[e + t] = n;
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
          n = this.GetSortedDevices();
        if (!n)
          return o.createElement(
            g.i,
            {
              className: "ControllerVisualizerWrapper",
              header: Object(a.c)("#TestControllerTitle", ""),
              onDismissRequested: this.props.onDismissRequested,
            },
            o.createElement(
              "div",
              { className: "VisualizerLabel" },
              Object(a.c)("#TestController_NoController")
            )
          );
        for (let i of n)
          "TrackedDeviceClass_HMD" != i.class &&
            (i.root_path == this.state.devicePath && (e = i.serial_number),
            t.push({
              value: i.root_path,
              sLabel: Object(a.c)("#" + i.root_path),
            }));
        return o.createElement(
          g.i,
          {
            className: "ControllerVisualizerWrapper",
            header: Object(a.c)("#TestControllerTitle", e),
            onDismissRequested: this.props.onDismissRequested,
            footer: o.createElement(g.j, {
              leftControls: [
                o.createElement(b.c, {
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
            o.createElement(S, {
              devicePath: this.state.devicePath,
              serialNumber: e,
              visualizer: this,
            })
        );
      }
    };
    Object(r.b)([s.bind], C.prototype, "OnConnectedDevicesChanged", null),
      Object(r.b)([s.bind], C.prototype, "OnUpdateComponentStates", null),
      (C = Object(r.b)([h.a], C));
  },
  YRJX: function (e, t, n) {
    "use strict";
    n.d(t, "t", function () {
      return R;
    }),
      n.d(t, "s", function () {
        return E;
      }),
      n.d(t, "r", function () {
        return T;
      }),
      n.d(t, "h", function () {
        return I;
      }),
      n.d(t, "i", function () {
        return P;
      }),
      n.d(t, "j", function () {
        return V;
      }),
      n.d(t, "a", function () {
        return L;
      }),
      n.d(t, "g", function () {
        return B;
      }),
      n.d(t, "k", function () {
        return A;
      }),
      n.d(t, "d", function () {
        return F;
      }),
      n.d(t, "c", function () {
        return j;
      }),
      n.d(t, "e", function () {
        return U;
      }),
      n.d(t, "b", function () {
        return W;
      }),
      n.d(t, "l", function () {
        return z;
      }),
      n.d(t, "m", function () {
        return G;
      }),
      n.d(t, "n", function () {
        return K;
      }),
      n.d(t, "f", function () {
        return q;
      }),
      n.d(t, "q", function () {
        return Q;
      }),
      n.d(t, "p", function () {
        return J;
      }),
      n.d(t, "o", function () {
        return Z;
      });
    var i,
      r,
      o,
      s = n("mrSG"),
      a = n("q1tI"),
      l = n("7wIv"),
      c = n("GXif"),
      d = n("6YgL"),
      u = n("CzjV"),
      p = n("hcOo"),
      h = n("/i/y"),
      m = n("7uy8"),
      g = n("2vnA"),
      b = n("Vp/w"),
      v = n("okNM"),
      _ = n("p9CI"),
      y = n("X3sx"),
      f = n("39GS"),
      S = n("nsy5"),
      C = n("vvDA"),
      O = n("Q+Z6"),
      k = n("/CXA"),
      D = n("aaBP"),
      w = n.n(D),
      M = n("nAcY");
    const R = "DashboardPanelTopCenter",
      E = "DashboardPanelBottomCenter",
      T = "DashboardControlStrip",
      I = (e) => {
        var t, n, i;
        const r = a.useRef(null),
          o = a.useRef(null);
        a.useEffect(() => {
          var e, t;
          return null === (e = r.current) || void 0 === e
            ? void 0
            : e.setFloatingViewStack(
                null === (t = o.current) || void 0 === t ? void 0 : t.viewStack
              );
        });
        const s = null == (t = e.scrollable) || t,
          l = null != (n = e.foregroundReflectMultiplier) ? n : 1,
          c =
            null ==
              (i = O.d.settings.get("/settings/dashboard/allowCurvature")) || i
              ? m.j
              : null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            h.ab,
            {
              visibility: e.visible ? h.cb.Visible : h.cb.Hidden,
              debug_name: "homepanelbackground",
              curvature_origin_id: c,
              origin: h.t.BottomCenter,
              interactive: !1,
              scrollable: !1,
              target_dpi_panel_id: T,
              target_dpi_multiplier: 2,
              reflect: 0.01,
              sampler: h.u.SingleTap,
            },
            a.createElement(h.bb, { id: R, location: h.t.TopCenter }),
            a.createElement(
              k.a,
              { ref: r },
              a.createElement("div", {
                className: Object(p.a)(
                  "DashboardPanelBackground",
                  e.additionalClassNames
                ),
                style: e.additionalStyle,
              })
            ),
            a.createElement(h.bb, { id: E, location: h.t.BottomCenter })
          ),
          a.createElement(
            h.nb,
            { translation: { z: 1e-5 } },
            a.createElement(
              h.ab,
              {
                visibility: e.visible ? h.cb.Visible : h.cb.Hidden,
                debug_name: e.debugName,
                curvature_origin_id: c,
                origin: h.t.BottomCenter,
                interactive: !0,
                scrollable: s,
                target_dpi_panel_id: T,
                reflect: 0.2 * l,
              },
              a.createElement(
                k.c,
                { ref: o },
                a.createElement(
                  d.b,
                  null,
                  a.createElement(
                    _.b,
                    {
                      scrollDirection: s ? _.a.Vertical : _.a.None,
                      className: Object(p.a)(
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
    let V = (i = class extends a.Component {
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
          (this.m_nMoveDeviceIndex = h.pb),
          (this.m_moveDeviceRole = h.x.TrackedControllerRole_Invalid);
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
                (t = Math.min(2 * t, i.sfOverlayScaleMax)),
                (e.scale = { x: 1, y: 1, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
            case P.World: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 1) < 0.1 &&
                (t = Math.max(t / 2, i.sfOverlayScaleMin)),
                (e.scale = { x: 2, y: 2, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
          }
          return;
        }
        let e = Object(h.g)();
        switch (
          ((e.rotation = Object(h.J)({ x: -45, y: 0, z: 0 })),
          this.props.dockLocation)
        ) {
          case P.Dashboard:
          case P.LeftHand:
          case P.RightHand:
            this.setState({ xfTransform: e });
            break;
          case P.World:
            let t = 0;
            h.hb
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
        let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, h.B.Standing),
          t = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          h.x.TrackedControllerRole_LeftHand
        ) != h.pb && (t = VRHTML.GetPose("/user/hand/left", h.B.Standing));
        let n = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          h.x.TrackedControllerRole_RightHand
        ) != h.pb && (n = VRHTML.GetPose("/user/hand/right", h.B.Standing));
        let r = [];
        switch (this.state.sParent) {
          case "/user/hand/left":
            n && r.push({ pose: n, location: P.RightHand });
            break;
          case "/user/hand/right":
            t && r.push({ pose: t, location: P.LeftHand });
            break;
          case "/user/head":
            t && r.push({ pose: t, location: P.LeftHand }),
              n && r.push({ pose: n, location: P.RightHand });
        }
        if (0 == r.length)
          return void setTimeout(this.computeDestination, i.sfMovePulseMS);
        let o = VRHTML.MultiplyTransforms(
          e.xfDeviceToAbsoluteTracking,
          this.state.xfTransform
        );
        r.forEach((e) => {
          let t = VRHTML.ChangeBasis(o, e.pose.xfDeviceToAbsoluteTracking);
          Object(h.P)(t.translation) > i.sfMaxDockDist
            ? this.state.bIsOutsideMaxDist ||
              (M.b.Instance.triggerHaptic(M.a.SlidingEdge),
              this.setState({ bIsOutsideMaxDist: !0, destination: P.World }))
            : (this.state.bIsOutsideMaxDist ||
                (this.props.dockLocation == P.World &&
                  this.state.destination == P.World)) &&
              (M.b.Instance.triggerHaptic(M.a.SlidingEdge),
              this.setState({
                bIsOutsideMaxDist: !1,
                destination: e.location,
              }));
        }),
          setTimeout(this.computeDestination, i.sfMovePulseMS);
      }
      startMove() {
        if (this.m_bIsMoving) return;
        if (
          (console.log("Starting to move " + this.props.sOverlayKey + "...\n"),
          (this.m_nMoveDeviceIndex =
            VRHTML.VROverlay.GetPrimaryDashboardDevice()),
          this.m_nMoveDeviceIndex == h.pb)
        )
          return;
        this.m_moveDeviceRole =
          VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.m_nMoveDeviceIndex
          );
        let e,
          t,
          n = VRHTML.GetPose(this.m_nMoveDeviceIndex, h.B.Standing);
        switch (this.props.dockLocation) {
          case P.LeftHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                h.x.TrackedControllerRole_LeftHand
              ) == h.pb
            )
              return;
            e = VRHTML.GetPose("/user/hand/left", h.B.Standing);
            break;
          case P.RightHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                h.x.TrackedControllerRole_RightHand
              ) == h.pb
            )
              return;
            e = VRHTML.GetPose("/user/hand/right", h.B.Standing);
            break;
          default:
            e = {
              xfDeviceToAbsoluteTracking: Object(h.g)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: h.A.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
        }
        switch (this.m_moveDeviceRole) {
          case h.x.TrackedControllerRole_LeftHand:
            t = "/user/hand/left";
            break;
          case h.x.TrackedControllerRole_RightHand:
            t = "/user/hand/right";
            break;
          default:
            t = "/user/head";
        }
        this.m_bIsMoving = !0;
        let i = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          r = VRHTML.ChangeBasis(i, n.xfDeviceToAbsoluteTracking);
        this.setState(
          {
            xfTransform: r,
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
              h.x.TrackedControllerRole_LeftHand
            ) == h.pb
          )
            return;
          e = VRHTML.GetPose("/user/hand/left", h.B.Standing);
        }
        if (
          "/user/hand/right" == this.state.sParent ||
          this.state.destination == P.RightHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              h.x.TrackedControllerRole_RightHand
            ) == h.pb
          )
            return;
          t = VRHTML.GetPose("/user/hand/right", h.B.Standing);
        }
        let n,
          i = {
            xfDeviceToAbsoluteTracking: Object(h.g)(),
            vVelocity: { x: 0, y: 0, z: 0 },
            eTrackingResult: h.A.TrackingResult_Running_OK,
            bPoseIsValid: !0,
          };
        switch (this.state.destination) {
          case P.LeftHand:
            n = e;
            break;
          case P.RightHand:
            n = t;
            break;
          default:
            n = i;
        }
        let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, h.B.Standing),
          o = VRHTML.MultiplyTransforms(
            r.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          s = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
        this.setState({ xfTransform: s, sParent: x(this.state.destination) }),
          (this.m_bIsMoving = !1),
          this.props.onDockOverlay(
            this.props.sOverlayKey,
            this.state.destination,
            s
          ),
          window.removeEventListener("mouseup", this.endMove);
      }
      render() {
        if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
          return null;
        if (!this.props.bVisible)
          return a.createElement(
            h.nb,
            {
              parent_path: this.state.sParent,
              transform: this.state.xfTransform,
              id: "xf_widget",
            },
            a.createElement(
              h.ab,
              {
                overlay_key: this.props.sOverlayKey,
                height: this.state.fOverlayScale,
                width: void 0,
                interactive: !0,
                origin: h.t.BottomCenter,
              },
              a.createElement(h.U, {
                mountedId: Object(h.f)(m.F, this.props.sOverlayKey + ".cursor"),
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
        let n = this.state.fOverlayScale,
          r = (n / t.y) * t.x,
          o = n + i.sfOverlayTrayHeight,
          s = Math.max(r, 0.175),
          l = o / 2 - i.sfOverlayTrayHeight;
        return a.createElement(
          h.nb,
          {
            parent_path: this.state.sParent,
            transform: this.state.xfTransform,
            id: "xf_widget",
          },
          a.createElement(
            h.nb,
            {
              translation: { y: l, z: -0.005 },
              scale: { x: s, y: o, z: 0.008 },
            },
            a.createElement(
              h.lb,
              { color: { r: 0.016, g: 0.017, b: 0.02 } },
              a.createElement(h.fb, { solid: !0, source: "unit_cube" })
            )
          ),
          a.createElement(
            h.ab,
            {
              overlay_key: this.props.sOverlayKey,
              height: this.state.fOverlayScale,
              width: void 0,
              interactive: !0,
              origin: h.t.BottomCenter,
            },
            a.createElement(h.U, {
              mountedId: Object(h.f)(m.F, this.props.sOverlayKey + ".cursor"),
            })
          ),
          a.createElement(
            h.ab,
            {
              height: i.sfOverlayTrayHeight,
              width: void 0,
              interactive: !0,
              origin: h.t.TopCenter,
            },
            a.createElement(
              "div",
              { className: "WindowTray" },
              a.createElement(y.a, {
                additionalClassName: "WindowTraySlider",
                min: i.sfOverlayScaleMin,
                max: i.sfOverlayScaleMax,
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
                h.nb,
                {
                  parent_path:
                    this.state.destination == P.LeftHand
                      ? "/user/hand/left"
                      : "/user/hand/right",
                },
                a.createElement(h.R, {
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
      Object(s.b)([l.bind], V.prototype, "onOverlayScaleChanged", null),
      Object(s.b)([l.bind], V.prototype, "computeDestination", null),
      Object(s.b)([l.bind], V.prototype, "startMove", null),
      Object(s.b)([l.bind], V.prototype, "endMove", null),
      (V = i = Object(s.b)([v.a], V));
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
          n = null;
        const i = t.toLowerCase(),
          r = Math.max(i.lastIndexOf("am"), i.lastIndexOf("pm"));
        return (
          r >= 0 && ((n = t.substring(r)), (t = t.substring(0, r - 1))),
          a.createElement(
            "div",
            { className: "ClockContainer" },
            a.createElement(
              "div",
              { className: "Clock" },
              t,
              " ",
              a.createElement("span", { className: "Suffix" }, n)
            )
          )
        );
      }
    }
    function A(e) {
      return a.createElement(
        d.a,
        { className: "PowerMenuButton", onClick: e.onClick },
        a.createElement("div", { className: "HoverGradient" }),
        a.createElement("div", { className: "ClickGradient" }),
        a.createElement("span", null, e.label),
        e.lineBelow && a.createElement("div", { className: "LineBelow" })
      );
    }
    Object(s.b)([l.bind], B.prototype, "updateTime", null);
    let N = (r = class extends a.Component {
      get isShowingTooltip() {
        return r.s_CurrentlyShownTooltip === this;
      }
      show() {
        r.s_CurrentlyShownTooltip = this;
      }
      hide() {
        this.isShowingTooltip && (r.s_CurrentlyShownTooltip = null);
      }
      render() {
        var e;
        const t =
            this.props.text && (this.props.shown || this.isShowingTooltip),
          n = this.props.translation
            ? this.props.translation
            : { x: 0, y: -0.2, z: 0.05 },
          i =
            null ==
              (e = O.d.settings.get("/settings/dashboard/allowCurvature")) || e
              ? m.j
              : null;
        return a.createElement(
          "div",
          { style: { position: "absolute", left: "50%", top: "50%" } },
          a.createElement(
            b.a,
            { allowableParentSelectors: [".DashboardMain"] },
            a.createElement(
              h.nb,
              { translation: n },
              a.createElement(
                h.ab,
                {
                  visibility: t ? h.cb.Visible : h.cb.SkipInSceneGraph,
                  target_dpi_panel_id: T,
                  curvature_origin_id: i,
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
    (N.s_CurrentlyShownTooltip = null),
      Object(s.b)([g.f], N.prototype, "isShowingTooltip", null),
      Object(s.b)([g.d.bound], N.prototype, "show", null),
      Object(s.b)([g.d.bound], N.prototype, "hide", null),
      Object(s.b)([g.m], N, "s_CurrentlyShownTooltip", void 0),
      (N = r = Object(s.b)([v.a], N));
    class H extends a.Component {
      static ShouldInvertThumbnail(e) {
        if (!e) return !1;
        if (((e = e.toLowerCase()), !H.s_mapShouldInvertThumbnail.has(e))) {
          let t = !1;
          e.endsWith(".svg") && (t = !0),
            e.startsWith("data:") &&
              H.k_rsThumbnailHashesToInvert.indexOf(w.a.hash(e)) >= 0 &&
              (t = !0),
            H.s_mapShouldInvertThumbnail.set(e, t);
        }
        return H.s_mapShouldInvertThumbnail.get(e);
      }
      render() {
        var e;
        const t = null != (e = this.props.shadow) && e,
          n = H.ShouldInvertThumbnail(this.props.src);
        return a.createElement(
          "div",
          { className: "Icon" },
          t &&
            a.createElement("img", {
              className: "Shadow",
              src: this.props.src,
            }),
          a.createElement("img", {
            className: Object(p.a)(["BlackToWhite", n]),
            src: this.props.src,
          })
        );
      }
    }
    var F, j;
    (H.k_rsThumbnailHashesToInvert = [
      "5cbd0ebd6459cdaf75fdcafc5051f4e0",
      "c77452e60fc29227b33773ff6e74f8a1",
      "44b62220b39ba717fbfc65e3b4225491",
      "0ea4aa3d9529b716f0f1957684247dee",
      "86bbab56235b55f6e5e7d288342931d7",
    ]),
      (H.s_mapShouldInvertThumbnail = new Map()),
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
        { className: Object(p.a)("ControlBarGroup", F[e.style]) },
        e.children
      );
    let W = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter() {
        var e, t, n;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.show(),
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t);
      }
      onMouseLeave() {
        var e, t, n;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(),
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t);
      }
      render() {
        var e;
        return a.createElement(
          d.a,
          {
            className: Object(p.a)(
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
          a.createElement(N, {
            text: this.props.label,
            ref: this.m_refTooltip,
          }),
          a.createElement(H, { src: this.props.imageUrl })
        );
      }
    };
    Object(s.b)([l.bind], W.prototype, "onMouseEnter", null),
      Object(s.b)([l.bind], W.prototype, "onMouseLeave", null),
      (W = Object(s.b)([v.a], W));
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
          (this.deviceIndex = h.pb),
          (this.batteryLevelStable = null),
          (this.devicePowerUsage = null),
          (this.state = { batteryIconPath: null });
      }
      componentDidMount() {
        var e, t, n;
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
            null === (n = VRHTML) || void 0 === n
              ? void 0
              : n.RegisterForDeviceEvents(this.onDeviceEvent)),
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
          n = h.pb;
        if (
          (void 0 !== this.props.role
            ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                this.props.role
              ))
            : void 0 !== this.props.deviceIndex && (n = this.props.deviceIndex),
          n != this.deviceIndex &&
            ((this.batteryLevelStable = null),
            (this.devicePowerUsage = null),
            (this.deviceIndex = n)),
          n != h.pb)
        ) {
          if (
            ((e = VRHTML.VRProperties.GetBoolProperty(
              n,
              h.z.DeviceProvidesBatteryStatus_Bool
            )),
            e)
          ) {
            const e = VRHTML.VRProperties.GetFloatProperty(
              n,
              h.z.DeviceBatteryPercentage_Float
            );
            (t = VRHTML.VRProperties.GetBoolProperty(
              n,
              h.z.DeviceIsCharging_Bool
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
            n,
            h.z.DevicePowerUsage_Float
          );
        }
        let i = C.a.GetBatteryIcon(
          e,
          t,
          this.batteryLevelStable,
          this.props.style
        );
        i != this.state.batteryIconPath &&
          this.setState({ batteryIconPath: i });
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
      onDeviceEvent(e, t, n) {
        (e != h.m.Activated && e != h.m.Deactivated) || this.update();
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
      Object(s.b)([l.bind], G.prototype, "updateControllerStatus", null),
      Object(s.b)([l.bind], G.prototype, "onBatteryStateChanged", null),
      Object(s.b)([l.bind], G.prototype, "onDeviceRoleChanged", null),
      Object(s.b)([l.bind], G.prototype, "onDeviceEvent", null);
    a.Component;
    const K = (e) =>
      a.createElement(
        "div",
        { className: "Title" },
        a.createElement(H, { src: e.iconUrl, shadow: !0 }),
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
          n = Math.asin(t) / Math.PI,
          i =
            null ==
              (e = O.d.settings.get("/settings/dashboard/allowCurvature")) || e
              ? m.j
              : null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            h.bb,
            { location: { x: t, y: -1 } },
            a.createElement(h.nb, {
              id: this.m_sAnchorID,
              translation: { y: 0.01 * Math.abs(n), z: -0.03 * Math.abs(n) },
              rotation: { y: 15 * n, z: 2 * n },
            })
          ),
          a.createElement(
            b.b,
            {
              allowableParentSelectors: [".DashboardMain"],
              onPortalDidMount: this.onPortalDidMount,
            },
            a.createElement(
              h.lb,
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
                  h.nb,
                  {
                    parent_id: this.m_sAnchorID,
                    translation: { y: 0.04, z: -0.01 },
                  },
                  a.createElement(
                    h.ab,
                    {
                      curvature_origin_id: i,
                      origin: h.t.TopCenter,
                      interactive: !0,
                      scrollable: !0,
                      target_dpi_panel_id: T,
                      sort_depth_bias: this.props.sort_depth_bias,
                    },
                    a.createElement(
                      "div",
                      {
                        className: Object(p.a)(
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
                    h.nb,
                    { translation: { z: -1e-5 } },
                    a.createElement(
                      h.ab,
                      {
                        curvature_origin_id: i,
                        origin: h.t.TopCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: T,
                        target_dpi_multiplier: 2,
                        reflect: 0.04,
                        sampler: h.u.SingleTap,
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
    Object(s.b)([l.bind], q.prototype, "onResizeObserved", null),
      Object(s.b)([l.bind], q.prototype, "updateBackgroundSize", null),
      Object(s.b)([l.bind], q.prototype, "onPortalDidMount", null);
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
          O.d.settings.get(
            "/settings/audio/enablePlaybackMirrorIndependentVolume"
          ) && O.d.settings.get("/settings/audio/enablePlaybackMirror")
        );
      }
      get enableAudioMirrorControls() {
        return !!O.d.settings.get("/settings/audio/activePlaybackMirrorDevice");
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
              additionalClassName: Object(p.a)([
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
                additionalClassName: Object(p.a)([
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
              additionalClassName: Object(p.a)(["Muted", f.a.Instance.muted]),
              interactionEndSoundEffect: u.a.VolumePreview,
            })
          )
        );
      }
    };
    Object(s.b)([l.bind], Q.prototype, "onSliderMouseEnter", null),
      Object(s.b)([l.bind], Q.prototype, "onSliderMouseLeave", null),
      Object(s.b)([l.bind], Q.prototype, "onSliderFinalChange", null),
      Object(s.b)([g.f], Q.prototype, "showAudioMirrorControls", null),
      Object(s.b)([g.f], Q.prototype, "enableAudioMirrorControls", null),
      (Q = Object(s.b)([v.a], Q));
    let X = class extends a.Component {
      constructor(e) {
        super(e), (this.state = { bSliding: !1, bHover: !1 });
      }
      onMouseEnter(e) {
        var t, n;
        this.setState({ bHover: !0 }),
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e);
      }
      onMouseLeave(e) {
        var t, n;
        this.setState({ bHover: !1 }),
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t, e);
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
            a.createElement(N, {
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
    Object(s.b)([l.bind], X.prototype, "onMouseEnter", null),
      Object(s.b)([l.bind], X.prototype, "onMouseLeave", null),
      Object(s.b)([l.bind], X.prototype, "onInteractionStart", null),
      Object(s.b)([l.bind], X.prototype, "onInteractionEnd", null),
      (X = Object(s.b)([v.a], X));
    let Y = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter(e) {
        var t, n, i;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
          null === (i = (n = this.props).onMouseEnter) ||
            void 0 === i ||
            i.call(n, e);
      }
      onMouseLeave(e) {
        var t, n, i;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
          null === (i = (n = this.props).onMouseLeave) ||
            void 0 === i ||
            i.call(n, e);
      }
      render() {
        return a.createElement(
          d.a,
          Object.assign({}, this.props, {
            className: Object(p.a)(
              "ButtonControl",
              "Round",
              this.props.className
            ),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          }),
          this.props.title &&
            a.createElement(N, {
              text: this.props.title,
              ref: this.m_refTooltip,
            }),
          this.props.children
        );
      }
    };
    Object(s.b)([l.bind], Y.prototype, "onMouseEnter", null),
      Object(s.b)([l.bind], Y.prototype, "onMouseLeave", null),
      (Y = Object(s.b)([v.a], Y));
    let J = (o = class extends a.Component {
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
        var t, n;
        (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
          window.document.addEventListener("mouseup", this.onWindowMouseUp),
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
          null === (n = (t = this.props).onShowTray) ||
            void 0 === n ||
            n.call(t);
      }
      onWindowMouseMove(e) {
        if (!this.slider || this.slider.isSliding) return;
        const t = { x: e.clientX, y: e.clientY };
        Object(h.O)(Object(h.jb)(t, this.m_vecOriginalMousePosition)) >
          o.MIN_DRAG_THRESHOLD && this.startSliding(t);
      }
      onWindowMouseUp(e) {
        this.stopSliding();
      }
      startSliding(e) {
        var t;
        null === (t = this.slider) || void 0 === t || t.startExternalSliding(e);
      }
      stopSliding() {
        var e, t, n, i;
        window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove
          ),
          (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) &&
            (null === (n = (t = this.props).onHideTray) ||
              void 0 === n ||
              n.call(t)),
          null === (i = this.slider) || void 0 === i || i.stopExternalSliding();
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
      Object(s.b)([l.bind], J.prototype, "onButtonMouseDown", null),
      Object(s.b)([l.bind], J.prototype, "onWindowMouseMove", null),
      Object(s.b)([l.bind], J.prototype, "onWindowMouseUp", null),
      (J = o = Object(s.b)([v.a], J));
    const Z = (e) => {
      const t = a.useRef();
      return a.createElement(
        d.a,
        {
          className: Object(p.a)(
            "ButtonControl",
            ["Active", e.active],
            ["WithIcon", !!e.iconUrl],
            e.additionalClassNames
          ),
          onClick: e.onClick,
          onMouseEnter: () => {
            var n;
            null === (n = t.current) || void 0 === n || n.show(),
              e.onMouseEnter && e.onMouseEnter();
          },
          onMouseLeave: () => {
            var n;
            null === (n = t.current) || void 0 === n || n.hide(),
              e.onMouseLeave && e.onMouseLeave();
          },
          enabled: e.enabled,
        },
        e.title &&
          a.createElement(N, {
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
  "ru2+": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return b;
    });
    var i = n("mrSG"),
      r = n("q1tI"),
      o = n("okNM"),
      s = n("7wIv"),
      a = n("GXif"),
      l = n("MYgy"),
      c = n("Z0gP"),
      d = n("2vnA"),
      u = n("uFkT"),
      p = n("6YgL"),
      h = n("hcOo"),
      m = n("TbT/");
    let g = class extends r.Component {
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
        let n = t;
        n.includes("vive_tracker") &&
          (n = n.substring(
            n.indexOf("vive_tracker") + "vive_tracker".length,
            n.length
          ));
        let i = null;
        return (
          this.IsConnected()
            ? this.IsIdentifiable() ||
              (i = Object(a.c)(
                "#Settings_ViveTracker_Identify_NotIdentifiable"
              ))
            : (i = Object(a.c)("#Settings_ViveTracker_Identify_NotConnected")),
          r.createElement(
            m.c,
            { className: "SettingsItem TrackerEntry" },
            r.createElement(
              "div",
              { className: "Label", title: t },
              r.createElement("span", null, n),
              r.createElement("div", {
                title: Object(a.c)(
                  this.IsConnected()
                    ? "#Settings_ViveTracker_Connected"
                    : "#Settings_ViveTracker_Disconnected"
                ),
                className: Object(h.a)(
                  "TrackerConnectionIndicator",
                  ["Connected", c.a.connected && this.IsConnected()],
                  ["Disconnected", c.a.connected && !this.IsConnected()]
                ),
              })
            ),
            r.createElement(
              "div",
              { className: Object(h.a)("SubsectionStem") },
              r.createElement(
                m.c,
                { title: i },
                r.createElement(
                  p.a,
                  {
                    className: "ButtonControl",
                    enabled: this.IsIdentifiable(),
                    onClick: this.BuzzTracker,
                  },
                  Object(a.c)("#TrackerEditor_BuzzTracker")
                )
              )
            ),
            r.createElement(
              "div",
              { className: "Subsection WithStem" },
              r.createElement(m.h, {
                label: Object(a.c)("#Settings_ViveTracker_Role"),
                items: this.props.validTrackerRoles.map((e) => ({
                  value: e,
                  sLabel: Object(a.c)("#" + e),
                })),
                value: this.trackerConfig.role,
                onChange: this.OnTrackerRoleChanged,
              }),
              e.length > 0 &&
                r.createElement(m.h, {
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
    Object(i.b)([d.f], g.prototype, "trackerConfig", null),
      Object(i.b)([s.bind], g.prototype, "OnTrackerRoleChanged", null),
      Object(i.b)([s.bind], g.prototype, "OnControllerRoleChanged", null),
      Object(i.b)([s.bind], g.prototype, "BuzzTracker", null),
      Object(i.b)([d.f], g.prototype, "deviceInfo", null),
      (g = Object(i.b)([o.a], g));
    let b = class extends r.Component {
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
            (t = e.trackers.map((t, n) =>
              r.createElement(g, {
                key: n,
                trackerPath: t.device_path_string,
                validTrackerRoles: e.valid_roles,
              })
            )),
          r.createElement("div", { className: "TrackerEditorModal" }, t)
        );
      }
    };
    b = Object(i.b)([o.a], b);
  },
  vvDA: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return l;
      });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      s = n("7wIv"),
      a = n("/i/y");
    !(function (e) {
      (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
        (e[(e.VerticalBattery = 1)] = "VerticalBattery");
    })(i || (i = {}));
    class l extends o.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.batteryLevelStable = null),
          (this.state = { batteryIconPath: null, roleIconPath: null });
      }
      componentDidMount() {
        var e, t, n;
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
            null === (n = a.ob) || void 0 === n
              ? void 0
              : n.RegisterForDeviceEvents(this.OnDeviceEvent)),
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
          n = a.ob.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.props.trackedDeviceIndex
          );
        let r = !1;
        if (t) {
          const t =
            null !=
            (e = a.ob.VRProperties.GetFloatProperty(
              this.props.trackedDeviceIndex,
              a.z.DeviceBatteryPercentage_Float
            ))
              ? e
              : 0;
          (r = a.ob.VRProperties.GetBoolProperty(
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
        let o = l.GetBatteryIcon(
            t,
            r,
            this.batteryLevelStable,
            i.HorizontalPips
          ),
          s = this.GetRoleIcon(n);
        (o == this.state.batteryIconPath && s == this.state.roleIconPath) ||
          this.setState({ batteryIconPath: o, roleIconPath: s });
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
      static GetBatteryIcon(e, t, n, r) {
        if (!e) return null;
        const o =
          r == i.VerticalBattery
            ? "images/icons/vert"
            : "images/icons/controller_model";
        return t
          ? n < 0.15
            ? o + "_charging_red.png"
            : o + "_charging.png"
          : 0 == n
          ? null
          : n < 0.15
          ? o + "_low.png"
          : n < 0.3
          ? o + "_battery_1.png"
          : n < 0.6
          ? o + "_battery_2.png"
          : n < 0.9
          ? o + "_battery_3.png"
          : o + "_battery_4.png";
      }
      OnBatteryStateChanged(e) {
        e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
      }
      OnDeviceRoleChanged() {
        this.UpdateControllerStatus();
      }
      OnDeviceEvent(e, t, n) {
        e == a.m.Activated &&
          n == this.props.trackedDeviceIndex &&
          this.UpdateControllerStatus();
      }
      render() {
        return o.createElement(
          a.ab,
          {
            width: void 0,
            height: void 0,
            interactive: !1,
            rendermodel_component_device_index: this.props.trackedDeviceIndex,
            rendermodel_component_name: "status",
            debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
          },
          o.createElement(
            "div",
            {
              className: "ControllerStatusRoot",
              style: { width: 256, height: 256 },
            },
            o.createElement(
              "div",
              { className: "ControllerStatusFrame" },
              o.createElement(
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
                o.createElement("img", {
                  className: "ControllerHand",
                  src: this.state.roleIconPath,
                })
              ),
              o.createElement(
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
                o.createElement("img", {
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
      Object(r.b)([s.bind], l.prototype, "OnBatteryStateChanged", null),
      Object(r.b)([s.bind], l.prototype, "OnDeviceRoleChanged", null),
      Object(r.b)([s.bind], l.prototype, "OnDeviceEvent", null);
  },
});
//# sourceMappingURL=bindingcallouts.js.map?v=3ac55052a53d496c3bc5
