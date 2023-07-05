/*! For license information please see scenegraphtest.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      8431: (e, t, r) => {
        var i = r(655),
          o = r(7294),
          n = r(3935),
          s = r(7056);
        class a {
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
              console.log(
                "Connecting vrmailbox " + this.m_sMailboxName + "..."
              );
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
            return (0, i.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = a.EnsureUniqueName(e)),
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
            return new Promise((r, i) => {
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
            return (0, i.mG)(this, void 0, void 0, function* () {
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
            let i = Object.assign({}, t);
            return (
              null == i.returnAddress &&
                (i.returnAddress = this.m_sMailboxName),
              (i.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, i),
              this.WaitForMessage(r, i.message_id)
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
        function l(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) {
            if ("undefined" == r) return;
            let e = [];
            for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function d(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseFloat(r);
        }
        function p(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseInt(r);
        }
        function c(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0)
            return (
              "true" == r ||
              (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
            );
        }
        function u(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return r;
        }
        function m(e, t) {
          return R(u(e, t));
        }
        function h(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = R(t.id)),
            (r.properties.sgid = p(t, "sgid")),
            r
          );
        }
        function _(e, t) {
          let [r, i] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let i = Object.assign({}, e),
                o = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (o = h("transform", t)),
                    (o.properties.translation = l(t, "translation")),
                    (o.properties.rotation = l(t, "rotation")),
                    (o.properties.scale = l(t, "scale")),
                    (o.properties["curvature-pitch"] = d(t, "curvature-pitch")),
                    (o.properties["parent-path"] = u(t, "parent-path")),
                    (o.properties["parent-origin"] = u(t, "parent-origin")),
                    (o.properties["parent-id"] = m(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (o = h("trackingstatevisibility", t)),
                    (o.properties["visible-0dof"] = c(t, "visible-0dof")),
                    (o.properties["visible-3dof"] = c(t, "visible-3dof")),
                    (o.properties["visible-6dof"] = c(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (o = h("elasticheadtransform", t)),
                    (o.properties["start-angle-threshold"] = d(
                      t,
                      "start-angle-threshold"
                    )),
                    (o.properties["stop-angle-threshold"] = d(
                      t,
                      "stop-angle-threshold"
                    )),
                    (o.properties["ease-in-time"] = d(t, "ease-in-time")),
                    (o.properties["ease-in-power"] = d(t, "ease-in-power")),
                    (o.properties["ease-out-angle-threshold"] = d(
                      t,
                      "ease-out-angle-threshold"
                    )),
                    (o.properties["ease-out-power"] = d(t, "ease-out-power")),
                    (o.properties["min-angular-velocity"] = d(
                      t,
                      "min-angular-velocity"
                    )),
                    (o.properties["max-angular-velocity"] = d(
                      t,
                      "max-angular-velocity"
                    )),
                    (o.properties["lock-to-horizon"] = c(t, "lock-to-horizon")),
                    (o.properties["translation-behavior"] = p(
                      t,
                      "translation-behavior"
                    ));
                  break;
                case "VSG-LINE":
                  (o = h("line", t)),
                    (o.properties["target-id"] = m(t, "target-id")),
                    (o.properties.thickness = d(t, "thickness")),
                    (o.properties["start-buffer"] = d(t, "start-buffer")),
                    (o.properties["end-buffer"] = d(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (o = h("line-constrained-transform", t)),
                    (o.properties["target-id"] = m(t, "target-id")),
                    (o.properties["source-id"] = m(t, "source-id")),
                    (o.properties["source-distance"] = d(t, "source-distance")),
                    (o.properties["target-limit"] = d(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (o = h("callout-transform", t)),
                    (o.properties.offset = l(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  o = h("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (o = h("pin-to-view-transform", t)),
                    (o.properties["offscreen-z-depth"] = d(
                      t,
                      "offscreen-z-depth"
                    )),
                    (o.properties["off-axis-limit"] = d(t, "off-axis-limit")),
                    (o.properties["transition-limit"] = d(
                      t,
                      "transition-limit"
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (o = h("manipulation-transform", t)),
                    (o.properties["is-moving"] = c(t, "is-moving")),
                    (o.properties["parent-path"] = u(t, "parent-path")),
                    (o.properties.translation = l(t, "translation")),
                    (o.properties.rotation = l(t, "rotation")),
                    (o.properties.scale = l(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (o = h("grab-transform", t)),
                    (o.properties["parent-path"] = u(t, "parent-path")),
                    (o.properties.translation = l(t, "translation")),
                    (o.properties.rotation = l(t, "rotation")),
                    (o.properties.scale = l(t, "scale"));
              }
              return [i, o];
            })(e, t),
            o = [];
          for (let e = 0; e < t.children.length; e++) {
            let i = t.children.item(e);
            if (i.children) {
              let e = _(r, i);
              e && (o = o.concat(e));
            }
          }
          return r.bShouldAbort
            ? null
            : i
            ? (o.length > 0 && (i.children = o), [i])
            : o.length > 0
            ? 1 == o.length
              ? o
              : [{ children: o }]
            : null;
        }
        (a.s_nNextMailboxNumber = 1),
          (0, i.gn)([s.ak], a.prototype, "OpenWebSocketToHost", null),
          (0, i.gn)([s.ak], a.prototype, "OnWebSocketOpen", null),
          (0, i.gn)([s.ak], a.prototype, "OnWebSocketClose", null),
          (0, i.gn)([s.ak], a.prototype, "WebSocketSend", null),
          (0, i.gn)([s.ak], a.prototype, "OnWebSocketMessage", null);
        let g,
          v,
          f,
          b,
          S = [],
          y = null,
          D = null;
        function R(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : C() + "::" + e
            : null;
        }
        function C() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : g;
        }
        function I() {
          y ||
            (y = window.setTimeout(
              () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  v && (e = v);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: b,
                      sceneColorCorrection: null,
                    },
                    children: _({ currentPanel: null, bShouldAbort: !1 }, e),
                  };
                  D ||
                    (console.log("Initializing sg_mailbox"),
                    (D = new a()),
                    yield D.Init("sg_mailbox", f));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: C(),
                    scene_graph: t,
                    retired_sgids: S,
                  };
                  D.SendMessage("vrcompositor_systemlayer", r),
                    (y = null),
                    (S = []),
                    (b = !1);
                }),
              0
            ));
        }
        function M(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function P(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function w(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function E(e) {
          var t;
          return null ===
            (t = (function (e) {
              if (e) return [e.x, e.y, e.z];
            })(e)) || void 0 === t
            ? void 0
            : t.join(" ");
        }
        class T extends o.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = o.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID = T.s_NextSGID),
              (T.s_NextSGID = (T.s_NextSGID + 1) % 4294967296);
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
            return h(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              I();
          }
          componentDidUpdate() {
            I();
          }
          componentWillUnmount() {
            var e;
            (e = this.m_SGID),
              S.push(e),
              I(),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return o.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? o.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        T.s_NextSGID = 1;
        class F extends T {
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
        (0, i.gn)([s.ZP], F.prototype, "buildNode", null),
          (0, i.gn)(
            [s.ZP],
            class extends T {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "mountedscenegraph";
              }
              buildNode(e, t) {
                const r = this.createSgNode(t);
                return (
                  (r.properties.mountable_id = R(this.props.mountedId)),
                  this.props.fDashboardScale &&
                    (r.properties.dashboard_scale = this.props.fDashboardScale),
                  [e, r]
                );
              }
            }.prototype,
            "buildNode",
            null
          );
        class k extends T {
          constructor(e) {
            var t;
            if (
              (super(e),
              void 0 !== this.props.iconUri &&
                void 0 !== this.props.iconOverlayKey)
            )
              throw new Error(
                "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props."
              );
            super.setBuildNodeOverride(this.buildNode),
              (this.m_sMountableUnqualifiedID =
                null !== (t = e.mountableUnqualifiedID) && void 0 !== t
                  ? t
                  : this.getSGID() + "_mountable");
          }
          getNodeType() {
            return "dashboardtab";
          }
          buildNode(e, t) {
            var r;
            const i = this.createSgNode(t);
            return (
              (i.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
              (i.properties.mountable_id = R(this.m_sMountableUnqualifiedID)),
              (i.properties.icon_uri = this.props.iconUri),
              (i.properties.icon_overlay_key = this.props.iconOverlayKey),
              (i.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, i]
            );
          }
          internalRender() {
            return o.createElement(
              "vsg-node",
              { id: this.props.id },
              o.createElement(
                F,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children
              )
            );
          }
        }
        (0, i.gn)([s.ZP], k.prototype, "buildNode", null);
        class x extends T {
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
                let e = w(this.props.color, { r: 1, g: 1, b: 1 });
                r.properties.color = [e.r, e.g, e.b];
              }
            else r.properties.color = [1, 1, 1];
            return [e, r];
          }
        }
        (0, i.gn)([s.ZP], x.prototype, "buildNode", null);
        class N extends T {
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
        var B,
          O,
          A,
          V,
          U,
          L,
          H,
          W,
          G,
          z,
          q,
          K,
          Z,
          X,
          j,
          Q,
          J,
          Y,
          $,
          ee,
          te,
          re,
          ie,
          oe,
          ne,
          se,
          ae,
          le,
          de,
          pe,
          ce,
          ue,
          me;
        (0, i.gn)([s.ZP], N.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.Raw = 2)] = "Raw");
          })(B || (B = {}));
        class he extends T {
          constructor(e) {
            if (
              (super(e),
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
                1)
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set."
              );
          }
          internalRender() {
            let e, t, r;
            var i, n;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (r = this.props.transform.scale))
              : ((e = P(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t = (function (e) {
                  if (void 0 === e) return;
                  let t = 0.5 * e.x,
                    r = 0.5 * e.y,
                    i = 0.5 * e.z,
                    o = Math.cos(t),
                    n = Math.cos(r),
                    s = Math.cos(i),
                    a = Math.sin(t),
                    l = Math.sin(r),
                    d = Math.sin(i);
                  return {
                    w: o * n * s + a * l * d,
                    x: a * n * s + o * l * d,
                    y: o * l * s - a * n * d,
                    z: o * n * d - a * l * s,
                  };
                })(
                  ((i = P(this.props.rotation, { x: 0, y: 0, z: 0 })),
                  (n = Math.PI / 180),
                  { x: i.x * n, y: i.y * n, z: i.z * n })
                )),
                (r =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : P(this.props.scale, { x: 1, y: 1, z: 1 })));
            let s = E(e),
              a = (function (e) {
                if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
              })(t),
              l = E(r);
            return o.createElement(
              "vsg-transform",
              {
                translation: s,
                rotation: a,
                scale: l,
                "curvature-pitch": this.props.curvature_pitch,
                "parent-path": this.props.parent_path,
                "parent-origin": B[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children
            );
          }
        }
        function _e(e) {
          if (e) return [e.u, e.v];
        }
        function ge(e) {
          switch (e) {
            case O.TopLeft:
              return { x: -1, y: 1 };
            case O.TopCenter:
              return { x: 0, y: 1 };
            case O.TopRight:
              return { x: 1, y: 1 };
            case O.CenterLeft:
              return { x: -1, y: 0 };
            case O.Center:
              return { x: 0, y: 0 };
            case O.CenterRight:
              return { x: 1, y: 0 };
            case O.BottomLeft:
              return { x: -1, y: -1 };
            case O.BottomCenter:
              return { x: 0, y: -1 };
            case O.BottomRight:
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
        })(O || (O = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(A || (A = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(V || (V = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(U || (U = {}));
        class ve extends T {
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
            ve.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = fe.Current().addEmbeddedPanelUVs(this)),
              (ve.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            fe.Current().forceLayoutUpdate();
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown
              ),
              (ve.s_bPanelsAreDirty = !0),
              fe.Current().removeEmbeddedPanelUVs(this),
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
              window.document.removeEventListener(
                "mouseup",
                this.onWindowMouseUp
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(e, t, r, i) {
            let o = document.createElement("div");
            (o.style.position = "absolute"),
              (o.style.top = t + "px"),
              (o.style.left = e + "px"),
              (o.style.width = r + "px"),
              (o.style.height = i + "px"),
              (o.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(o),
              document.body.appendChild(o);
          }
          onWindowMouseUp(e) {
            this.stopOverDragBlocking();
          }
          getNodeType() {
            return "panel";
          }
          get visibility() {
            var e;
            return null !== (e = this.props.visibility) && void 0 !== e
              ? e
              : U.Visible;
          }
          buildNode(e, t) {
            var r, i, o, n, s;
            if (this.visibility != U.Visible) return [e, null];
            let a = Object.assign({}, e),
              l = this.createSgNode(t),
              d = { x: 0, y: 0 };
            d =
              "object" == typeof this.props.origin
                ? M(this.props.origin, { x: 0, y: 0 })
                : ge(this.props.origin);
            const p = this.props.overlay_key,
              c = C();
            return (
              p && p.length > 0
                ? (l.properties.key = p)
                : c
                ? (l.properties.key = c)
                : (l.properties.overlay_handle =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlay.ThisOverlayHandle()),
              (l.properties.uv_min =
                null !== (r = _e(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (l.properties.uv_max =
                null !== (i = _e(this.m_UVsMax)) && void 0 !== i ? i : void 0),
              (l.properties.width =
                null !== (o = this.props.width) && void 0 !== o ? o : void 0),
              (l.properties.height =
                null !== (n = this.props.height) && void 0 !== n ? n : void 0),
              (l.properties["min-width"] =
                null !== (s = this.props.min_width) && void 0 !== s
                  ? s
                  : void 0),
              (l.properties["target-width-anchor-id"] = R(
                this.props.target_width_anchor_id
              )),
              (l.properties["target-dpi-panel-id"] = R(
                this.props.target_dpi_panel_id
              )),
              (l.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (l.properties["subview-parent-panel-id"] = R(
                this.props.subview_parent_panel_id
              )),
              (l.properties.curvature = this.props.curvature),
              (l.properties["curvature-origin-id"] = R(
                this.props.curvature_origin_id
              )),
              (l.properties.interactive = this.props.interactive),
              (l.properties.scrollable = this.props.scrollable),
              (l.properties.modal = this.props.modal),
              (l.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (l.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (l.properties.origin = (function (e) {
                if (e) return [e.x, e.y];
              })(d)),
              (l.properties.debug_name = this.props.debug_name),
              (l.properties.sampler = this.props.sampler),
              (l.properties.reflect = this.props.reflect),
              (l.properties.stereoscopy = this.props.stereoscopy),
              (l.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (l.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (l.properties["texture-id"] = R(this.props.texture_id)),
              (l.properties["sort-order"] = this.props.sort_order),
              (l.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (a.currentPanel = this),
              [a, l]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              r = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + r * e.v,
            };
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
            return o.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == U.Hidden ? "none" : null },
              },
              this.props.children
            );
          }
        }
        (ve.s_bPanelsAreDirty = !1),
          (0, i.gn)([s.ZP], ve.prototype, "onResizeObserved", null),
          (0, i.gn)([s.ZP], ve.prototype, "onPanelMouseDown", null),
          (0, i.gn)([s.ZP], ve.prototype, "onWindowMouseUp", null),
          (0, i.gn)([s.ZP], ve.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
          })(L || (L = {}));
        class fe extends o.Component {
          constructor(e) {
            super(e),
              (this.m_DomRef = null),
              (this.m_scalingDomRef = null),
              (this.m_DebugPointerRef = null),
              (this.m_Observer = null),
              (this.m_nEmbeddedDataWidth = 0),
              (this.m_mapPanels = new Map()),
              (this.m_rAvailableEmbeddedIndicesQueue = []),
              (this.m_rEmbeddedIndicesToClear = []),
              (this.m_fCurrentScale = 1),
              (this.m_CanvasRef = null),
              (this.m_CanvasContext = null),
              (this.m_Pixels = null),
              (this.m_nDirtyXMin = -1),
              (this.m_nDirtyXMax = -1),
              (this.m_EmbeddedDataImgRef = null),
              (this.m_EmbeddedDataImgRGBBuffer = null),
              (fe.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? L.Canvas
                  : L.Image,
              }),
              (this.m_DomRef = o.createRef()),
              (this.m_scalingDomRef = o.createRef()),
              (this.m_CanvasRef = o.createRef()),
              (this.m_EmbeddedDataImgRef = o.createRef()),
              (this.m_DebugPointerRef = o.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== fe.Current();
          }
          static Current() {
            return fe.s_Current;
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
            (ve.s_bPanelsAreDirty = !0),
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
            let r = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3)
            );
            for (let e = 0; e < r; e++)
              this.m_rAvailableEmbeddedIndicesQueue.push(e);
            var i, o, n;
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
                (o = this.m_DomRef.current),
                (n = this.props.web_secret),
                (g = i),
                (v = o),
                (f = n),
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
            const e = this.state.eRenderMode == L.Image,
              t = this.state.eRenderMode == L.Canvas;
            let r = [];
            return (
              this.state.bShowDebugPointer && r.push("ShowDebugPointer"),
              o.createElement(
                "vsg-app",
                {
                  class: r.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                o.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  o.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: fe.k_EmbeddedDataRows,
                  }),
                t &&
                  o.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: fe.k_EmbeddedDataRows,
                  }),
                o.createElement(
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
            this.state.eRenderMode == L.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4
                    )))
              : this.state.eRenderMode == L.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    fe.k_EmbeddedDataRows
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              r = t.width / this.m_fCurrentScale,
              i = t.height / this.m_fCurrentScale,
              o = { x: e.innerWidth / r, y: e.innerHeight / i },
              n = Math.min(o.x, o.y, 1);
            n != this.m_fCurrentScale &&
              (1 != n
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + n + "); transform-origin: top left"
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = n),
              (ve.s_bPanelsAreDirty = !0)),
              ve.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                I(),
                (ve.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
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
                    i = e.m_Rect.x + e.m_Rect.width,
                    o = e.m_Rect.y,
                    n = e.m_Rect.y + e.m_Rect.height,
                    s = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || r >= i || o >= n)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(s + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(s, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(s + 1, (65280 & i) >> 8, 255 & i, 255 & o),
                      this.setPixel(
                        s + 2,
                        (65280 & n) >> 8,
                        255 & n,
                        (65280 & o) >> 8
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == L.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == L.Canvas
              ) {
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
          }
          setPixel(e, t, r, i, o = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == L.Image
            ) {
              const n = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              n.setUint8(4 * e + 0, t),
                n.setUint8(4 * e + 1, r),
                n.setUint8(4 * e + 2, i),
                n.setUint8(4 * e + 3, o);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == L.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = o),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (fe.s_Current = null),
          (fe.k_EmbeddedDataRows = 1),
          (0, i.gn)([s.ak], fe.prototype, "toggleDebugPointer", null),
          (0, i.gn)([s.ak], fe.prototype, "onMouseMove", null),
          (0, i.gn)([s.ak], fe.prototype, "forceLayoutUpdate", null),
          (0, i.gn)([s.ak], fe.prototype, "onMutation", null),
          (0, i.gn)(
            [s.ZP],
            class extends T {
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
          })(H || (H = {}));
        class be extends T {
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
              (r.properties["texture-id"] = R(this.props["texture-id"])),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = w(e.color, { r: 0, g: 0, b: 0 });
                r.properties.color = [t.r, t.g, t.b];
              }
              (r.properties.opacity = e.opacity ? e.opacity : 1),
                (r.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (r.properties.wireframe = this.props.wireframe),
              (r.properties.solid = this.props.solid),
              (r.properties.culling = this.props.culling),
              (r.properties.stencil_mask = this.props.stencil_mask),
              (r.properties["no-depth-write"] = this.props["no-depth-write"]),
              (r.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, r]
            );
          }
        }
        (0, i.gn)([s.ZP], be.prototype, "buildNode", null),
          (0, i.gn)(
            [s.ZP],
            class extends T {
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
                    let t = w(e.color, { r: 0, g: 0, b: 0 });
                    r.properties.color = [t.r, t.g, t.b];
                  }
                }
                return [e, r];
              }
            }.prototype,
            "buildNode",
            null
          );
        class Se extends T {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
        (0, i.gn)(
          [s.ZP],
          class extends T {
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
                ? (r = M(this.props.location, { x: 0, y: 0 }))
                : "number" == typeof this.props.location &&
                  (r = ge(this.props.location));
              let i = this.createSgNode(t);
              if (this.props.latched && null !== this.m_latchedPosition)
                (i.properties["anchor-u"] = this.m_latchedPosition.u),
                  (i.properties["anchor-v"] = this.m_latchedPosition.v);
              else if (r) {
                const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
                  o = e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
                (i.properties["anchor-u"] = o.u),
                  (i.properties["anchor-v"] = o.v);
              } else {
                const r = t.ownerDocument,
                  o = t.getBoundingClientRect(),
                  n = o.left + o.width / 2,
                  s = o.top + o.height / 2,
                  a = e.currentPanel.m_Rect;
                if (
                  n < a.x ||
                  n > a.x + a.width ||
                  s < a.y ||
                  s > a.y + a.height
                )
                  return [
                    Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                    null,
                  ];
                const l = r.defaultView.innerWidth,
                  d = r.defaultView.innerHeight;
                if (!(d > 0 && l > 0))
                  return [
                    Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                    null,
                  ];
                (i.properties["anchor-u"] = n / l),
                  (i.properties["anchor-v"] = s / d);
              }
              return (
                (this.m_latchedPosition = {
                  u: i.properties["anchor-u"],
                  v: i.properties["anchor-v"],
                }),
                [e, i]
              );
            }
          }.prototype,
          "buildNode",
          null
        ),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(W || (W = {}));
        class ye extends T {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-head-facing-transform",
              null,
              this.props.children
            );
          }
        }
        function De() {
          const [e, t] = o.useState(0);
          return (
            o.useEffect(() => {
              const r = window.setInterval(() => {
                t(e + 1);
              });
              return () => window.clearInterval(r);
            }),
            o.createElement(
              k,
              {
                summonOverlayKey: "system.dashboardtabtest",
                tabName: "3D Test",
                id: "settingsOverlay",
                iconUri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/3D_model_of_a_Cube.stl/1200px-3D_model_of_a_Cube.stl.png",
              },
              o.createElement(
                he,
                { translation: { y: 0.5 }, scale: 0.2, rotation: { y: e } },
                o.createElement(be, { source: "locator" })
              ),
              o.createElement(
                ye,
                null,
                o.createElement(
                  ve,
                  { width: 1, origin: O.BottomCenter },
                  o.createElement(
                    "div",
                    {
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        fontSize: 50,
                        padding: 20,
                      },
                    },
                    "The future of overlays is 3D!"
                  )
                )
              )
            )
          );
        }
        !(function (e) {
          (e[(e.Desktop = 1)] = "Desktop"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Unknown = 100)] = "Unknown");
        })(G || (G = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(z || (z = {})),
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
          })(q || (q = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(K || (K = {})),
          (function (e) {
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
          })(Z || (Z = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(X || (X = {})),
          (function (e) {
            (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
              (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
              (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
              (e[(e.SendVRDiscreteScrollEvents = 64)] =
                "SendVRDiscreteScrollEvents"),
              (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
              (e[(e.ShowTouchPadScrollWheel = 256)] =
                "ShowTouchPadScrollWheel"),
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
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.EnableSteamUIButtons = 67108864)] = "EnableSteamUIButtons");
          })(j || (j = {})),
          (function (e) {
            (e[(e.HomeMenu = 50)] = "HomeMenu"),
              (e[(e.QuickMenu = 51)] = "QuickMenu");
          })(Q || (Q = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(J || (J = {})),
          ((me = Y || (Y = {}))[(me.Invalid = 0)] = "Invalid"),
          (me[(me.TrackingSystemName_String = 1e3)] =
            "TrackingSystemName_String"),
          (me[(me.ModelNumber_String = 1001)] = "ModelNumber_String"),
          (me[(me.SerialNumber_String = 1002)] = "SerialNumber_String"),
          (me[(me.RenderModelName_String = 1003)] = "RenderModelName_String"),
          (me[(me.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
          (me[(me.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
          (me[(me.TrackingFirmwareVersion_String = 1006)] =
            "TrackingFirmwareVersion_String"),
          (me[(me.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
          (me[(me.AllWirelessDongleDescriptions_String = 1008)] =
            "AllWirelessDongleDescriptions_String"),
          (me[(me.ConnectedWirelessDongle_String = 1009)] =
            "ConnectedWirelessDongle_String"),
          (me[(me.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
          (me[(me.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
          (me[(me.DeviceBatteryPercentage_Float = 1012)] =
            "DeviceBatteryPercentage_Float"),
          (me[(me.StatusDisplayTransform_Matrix34 = 1013)] =
            "StatusDisplayTransform_Matrix34"),
          (me[(me.Firmware_UpdateAvailable_Bool = 1014)] =
            "Firmware_UpdateAvailable_Bool"),
          (me[(me.Firmware_ManualUpdate_Bool = 1015)] =
            "Firmware_ManualUpdate_Bool"),
          (me[(me.Firmware_ManualUpdateURL_String = 1016)] =
            "Firmware_ManualUpdateURL_String"),
          (me[(me.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
          (me[(me.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
          (me[(me.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
          (me[(me.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
          (me[(me.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
          (me[(me.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
          (me[(me.BlockServerShutdown_Bool = 1023)] =
            "BlockServerShutdown_Bool"),
          (me[(me.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
            "CanUnifyCoordinateSystemWithHmd_Bool"),
          (me[(me.ContainsProximitySensor_Bool = 1025)] =
            "ContainsProximitySensor_Bool"),
          (me[(me.DeviceProvidesBatteryStatus_Bool = 1026)] =
            "DeviceProvidesBatteryStatus_Bool"),
          (me[(me.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
          (me[(me.Firmware_ProgrammingTarget_String = 1028)] =
            "Firmware_ProgrammingTarget_String"),
          (me[(me.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
          (me[(me.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
          (me[(me.DriverVersion_String = 1031)] = "DriverVersion_String"),
          (me[(me.Firmware_ForceUpdateRequired_Bool = 1032)] =
            "Firmware_ForceUpdateRequired_Bool"),
          (me[(me.ViveSystemButtonFixRequired_Bool = 1033)] =
            "ViveSystemButtonFixRequired_Bool"),
          (me[(me.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
          (me[(me.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
          (me[(me.RegisteredDeviceType_String = 1036)] =
            "RegisteredDeviceType_String"),
          (me[(me.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
          (me[(me.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
          (me[(me.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
          (me[(me.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
          (me[(me.CameraStreamFormat_Int32 = 1041)] =
            "CameraStreamFormat_Int32"),
          (me[(me.AdditionalDeviceSettingsPath_String = 1042)] =
            "AdditionalDeviceSettingsPath_String"),
          (me[(me.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
          (me[(me.ReportsTimeSinceVSync_Bool = 2e3)] =
            "ReportsTimeSinceVSync_Bool"),
          (me[(me.SecondsFromVsyncToPhotons_Float = 2001)] =
            "SecondsFromVsyncToPhotons_Float"),
          (me[(me.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
          (me[(me.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
          (me[(me.CurrentUniverseId_Uint64 = 2004)] =
            "CurrentUniverseId_Uint64"),
          (me[(me.PreviousUniverseId_Uint64 = 2005)] =
            "PreviousUniverseId_Uint64"),
          (me[(me.DisplayFirmwareVersion_Uint64 = 2006)] =
            "DisplayFirmwareVersion_Uint64"),
          (me[(me.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
          (me[(me.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
          (me[(me.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
          (me[(me.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
          (me[(me.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
          (me[(me.DisplayMCImageLeft_String = 2012)] =
            "DisplayMCImageLeft_String"),
          (me[(me.DisplayMCImageRight_String = 2013)] =
            "DisplayMCImageRight_String"),
          (me[(me.DisplayGCBlackClamp_Float = 2014)] =
            "DisplayGCBlackClamp_Float"),
          (me[(me.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
          (me[(me.CameraToHeadTransform_Matrix34 = 2016)] =
            "CameraToHeadTransform_Matrix34"),
          (me[(me.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
          (me[(me.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
          (me[(me.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
          (me[(me.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
          (me[(me.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
          (me[(me.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
          (me[(me.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
          (me[(me.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
          (me[(me.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
          (me[(me.UserHeadToEyeDepthMeters_Float = 2026)] =
            "UserHeadToEyeDepthMeters_Float"),
          (me[(me.CameraFirmwareVersion_Uint64 = 2027)] =
            "CameraFirmwareVersion_Uint64"),
          (me[(me.CameraFirmwareDescription_String = 2028)] =
            "CameraFirmwareDescription_String"),
          (me[(me.DisplayFPGAVersion_Uint64 = 2029)] =
            "DisplayFPGAVersion_Uint64"),
          (me[(me.DisplayBootloaderVersion_Uint64 = 2030)] =
            "DisplayBootloaderVersion_Uint64"),
          (me[(me.DisplayHardwareVersion_Uint64 = 2031)] =
            "DisplayHardwareVersion_Uint64"),
          (me[(me.AudioFirmwareVersion_Uint64 = 2032)] =
            "AudioFirmwareVersion_Uint64"),
          (me[(me.CameraCompatibilityMode_Int32 = 2033)] =
            "CameraCompatibilityMode_Int32"),
          (me[(me.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
            "ScreenshotHorizontalFieldOfViewDegrees_Float"),
          (me[(me.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
            "ScreenshotVerticalFieldOfViewDegrees_Float"),
          (me[(me.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
          (me[(me.DisplayAllowNightMode_Bool = 2037)] =
            "DisplayAllowNightMode_Bool"),
          (me[(me.DisplayMCImageWidth_Int32 = 2038)] =
            "DisplayMCImageWidth_Int32"),
          (me[(me.DisplayMCImageHeight_Int32 = 2039)] =
            "DisplayMCImageHeight_Int32"),
          (me[(me.DisplayMCImageNumChannels_Int32 = 2040)] =
            "DisplayMCImageNumChannels_Int32"),
          (me[(me.DisplayMCImageData_Binary = 2041)] =
            "DisplayMCImageData_Binary"),
          (me[(me.SecondsFromPhotonsToVblank_Float = 2042)] =
            "SecondsFromPhotonsToVblank_Float"),
          (me[(me.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
            "DriverDirectModeSendsVsyncEvents_Bool"),
          (me[(me.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
          (me[(me.GraphicsAdapterLuid_Uint64 = 2045)] =
            "GraphicsAdapterLuid_Uint64"),
          (me[(me.DriverProvidedChaperonePath_String = 2048)] =
            "DriverProvidedChaperonePath_String"),
          (me[(me.ExpectedTrackingReferenceCount_Int32 = 2049)] =
            "ExpectedTrackingReferenceCount_Int32"),
          (me[(me.ExpectedControllerCount_Int32 = 2050)] =
            "ExpectedControllerCount_Int32"),
          (me[(me.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
            "NamedIconPathControllerLeftDeviceOff_String"),
          (me[(me.NamedIconPathControllerRightDeviceOff_String = 2052)] =
            "NamedIconPathControllerRightDeviceOff_String"),
          (me[(me.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
            "NamedIconPathTrackingReferenceDeviceOff_String"),
          (me[(me.DoNotApplyPrediction_Bool = 2054)] =
            "DoNotApplyPrediction_Bool"),
          (me[(me.CameraToHeadTransforms_Matrix34_Array = 2055)] =
            "CameraToHeadTransforms_Matrix34_Array"),
          (me[(me.DistortionMeshResolution_Int32 = 2056)] =
            "DistortionMeshResolution_Int32"),
          (me[(me.DriverIsDrawingControllers_Bool = 2057)] =
            "DriverIsDrawingControllers_Bool"),
          (me[(me.DriverRequestsApplicationPause_Bool = 2058)] =
            "DriverRequestsApplicationPause_Bool"),
          (me[(me.DriverRequestsReducedRendering_Bool = 2059)] =
            "DriverRequestsReducedRendering_Bool"),
          (me[(me.MinimumIpdStepMeters_Float = 2060)] =
            "MinimumIpdStepMeters_Float"),
          (me[(me.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
            "AudioBridgeFirmwareVersion_Uint64"),
          (me[(me.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
            "ImageBridgeFirmwareVersion_Uint64"),
          (me[(me.ImuToHeadTransform_Matrix34 = 2063)] =
            "ImuToHeadTransform_Matrix34"),
          (me[(me.ImuFactoryGyroBias_Vector3 = 2064)] =
            "ImuFactoryGyroBias_Vector3"),
          (me[(me.ImuFactoryGyroScale_Vector3 = 2065)] =
            "ImuFactoryGyroScale_Vector3"),
          (me[(me.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
            "ImuFactoryAccelerometerBias_Vector3"),
          (me[(me.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
            "ImuFactoryAccelerometerScale_Vector3"),
          (me[(me.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
            "ConfigurationIncludesLighthouse20Features_Bool"),
          (me[(me.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
            "Prop_AdditionalRadioFeatures_Uint64"),
          (me[(me.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
            "Prop_CameraWhiteBalance_Vector4_Array"),
          (me[(me.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
            "Prop_CameraDistortionFunction_Int32_Array"),
          (me[(me.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
            "Prop_CameraDistortionCoefficients_Float_Array"),
          (me[(me.Prop_ExpectedControllerType_String = 2074)] =
            "Prop_ExpectedControllerType_String"),
          (me[(me.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
          (me[(me.DriverProvidedChaperoneVisibility_Bool = 2076)] =
            "DriverProvidedChaperoneVisibility_Bool"),
          (me[(me.HmdColumnCorrectionSettingPrefix_String = 2077)] =
            "HmdColumnCorrectionSettingPrefix_String"),
          (me[(me.CameraSupportsCompatibilityModes_Bool = 2078)] =
            "CameraSupportsCompatibilityModes_Bool"),
          (me[(me.SupportsRoomViewDepthProjection_Bool = 2079)] =
            "SupportsRoomViewDepthProjection_Bool"),
          (me[(me.DisplayAvailableFrameRates_Float_Array = 2080)] =
            "DisplayAvailableFrameRates_Float_Array"),
          (me[(me.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
            "DisplaySupportsRuntimeFramerateChange_Bool"),
          (me[(me.DisplaySupportsAnalogGain_Bool = 2085)] =
            "DisplaySupportsAnalogGain_Bool"),
          (me[(me.DisplayMinAnalogGain_Float = 2086)] =
            "DisplayMinAnalogGain_Float"),
          (me[(me.DisplayMaxAnalogGain_Float = 2087)] =
            "DisplayMaxAnalogGain_Float"),
          (me[(me.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
          (me[(me.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
          (me[(me.IpdUIRangeMinMeters_Float = 2100)] =
            "IpdUIRangeMinMeters_Float"),
          (me[(me.IpdUIRangeMaxMeters_Float = 2101)] =
            "IpdUIRangeMaxMeters_Float"),
          (me[(me.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
            "Hmd_SupportsHDCP14LegacyCompat_Bool"),
          (me[(me.Hmd_SupportsMicMonitoring_Bool = 2103)] =
            "Hmd_SupportsMicMonitoring_Bool"),
          (me[(me.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
            "Hmd_SupportsDisplayPortTrainingMode_Bool"),
          (me[(me.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
            "Hmd_SupportsRoomViewDirect_Bool"),
          (me[(me.Hmd_SupportsAppThrottling_Bool = 2106)] =
            "Hmd_SupportsAppThrottling_Bool"),
          (me[(me.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
            "Hmd_SupportsGpuBusMonitoring_Bool"),
          (me[(me.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
            "DriverRequestedMuraCorrectionMode_Int32"),
          (me[(me.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
            "DriverRequestedMuraFeather_InnerLeft_Int32"),
          (me[(me.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
            "DriverRequestedMuraFeather_InnerRight_Int32"),
          (me[(me.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
            "DriverRequestedMuraFeather_InnerTop_Int32"),
          (me[(me.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
            "DriverRequestedMuraFeather_InnerBottom_Int32"),
          (me[(me.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
            "DriverRequestedMuraFeather_OuterLeft_Int32"),
          (me[(me.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
            "DriverRequestedMuraFeather_OuterRight_Int32"),
          (me[(me.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
            "DriverRequestedMuraFeather_OuterTop_Int32"),
          (me[(me.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
            "DriverRequestedMuraFeather_OuterBottom_Int32"),
          (me[(me.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
            "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
          (me[(me.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
          (me[(me.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
          (me[(me.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
          (me[(me.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
          (me[(me.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
          (me[(me.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
          (me[(me.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
          (me[(me.ControllerRoleHint_Int32 = 3007)] =
            "ControllerRoleHint_Int32"),
          (me[(me.FieldOfViewLeftDegrees_Float = 4e3)] =
            "FieldOfViewLeftDegrees_Float"),
          (me[(me.FieldOfViewRightDegrees_Float = 4001)] =
            "FieldOfViewRightDegrees_Float"),
          (me[(me.FieldOfViewTopDegrees_Float = 4002)] =
            "FieldOfViewTopDegrees_Float"),
          (me[(me.FieldOfViewBottomDegrees_Float = 4003)] =
            "FieldOfViewBottomDegrees_Float"),
          (me[(me.TrackingRangeMinimumMeters_Float = 4004)] =
            "TrackingRangeMinimumMeters_Float"),
          (me[(me.TrackingRangeMaximumMeters_Float = 4005)] =
            "TrackingRangeMaximumMeters_Float"),
          (me[(me.ModeLabel_String = 4006)] = "ModeLabel_String"),
          (me[(me.IconPathName_String = 5e3)] = "IconPathName_String"),
          (me[(me.NamedIconPathDeviceOff_String = 5001)] =
            "NamedIconPathDeviceOff_String"),
          (me[(me.NamedIconPathDeviceSearching_String = 5002)] =
            "NamedIconPathDeviceSearching_String"),
          (me[(me.NamedIconPathDeviceSearchingAlert_String = 5003)] =
            "NamedIconPathDeviceSearchingAlert_String"),
          (me[(me.NamedIconPathDeviceReady_String = 5004)] =
            "NamedIconPathDeviceReady_String"),
          (me[(me.NamedIconPathDeviceReadyAlert_String = 5005)] =
            "NamedIconPathDeviceReadyAlert_String"),
          (me[(me.NamedIconPathDeviceNotReady_String = 5006)] =
            "NamedIconPathDeviceNotReady_String"),
          (me[(me.NamedIconPathDeviceStandby_String = 5007)] =
            "NamedIconPathDeviceStandby_String"),
          (me[(me.NamedIconPathDeviceAlertLow_String = 5008)] =
            "NamedIconPathDeviceAlertLow_String"),
          (me[(me.DisplayHiddenArea_Binary_Start = 5100)] =
            "DisplayHiddenArea_Binary_Start"),
          (me[(me.DisplayHiddenArea_Binary_End = 5150)] =
            "DisplayHiddenArea_Binary_End"),
          (me[(me.ParentContainer = 5151)] = "ParentContainer"),
          (me[(me.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
          (me[(me.InstallPath_String = 6001)] = "InstallPath_String"),
          (me[(me.HasDisplayComponent_Bool = 6002)] =
            "HasDisplayComponent_Bool"),
          (me[(me.HasControllerComponent_Bool = 6003)] =
            "HasControllerComponent_Bool"),
          (me[(me.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
          (me[(me.HasDriverDirectModeComponent_Bool = 6005)] =
            "HasDriverDirectModeComponent_Bool"),
          (me[(me.HasVirtualDisplayComponent_Bool = 6006)] =
            "HasVirtualDisplayComponent_Bool"),
          (me[(me.HasSpatialAnchorsSupport_Bool = 6007)] =
            "HasSpatialAnchorsSupport_Bool"),
          (me[(me.ControllerType_String = 7e3)] = "ControllerType_String"),
          (me[(me.LegacyInputProfile_String = 7001)] =
            "LegacyInputProfile_String"),
          (me[(me.VendorSpecific_Reserved_Start = 1e4)] =
            "VendorSpecific_Reserved_Start"),
          (me[(me.VendorSpecific_Reserved_End = 10999)] =
            "VendorSpecific_Reserved_End"),
          (me[(me.TrackedDeviceProperty_Max = 1e6)] =
            "TrackedDeviceProperty_Max"),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })($ || ($ = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(ee || (ee = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(te || (te = {})),
          (function (e) {
            (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (e[(e.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
          })(re || (re = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(ie || (ie = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(oe || (oe = {})),
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
          })(ne || (ne = {})),
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
          })(se || (se = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(ae || (ae = {})),
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
              (e[(e.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(le || (le = {})),
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
          })(de || (de = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
          })(pe || (pe = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(ce || (ce = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(ue || (ue = {})),
          o.Component,
          (0, i.gn)(
            [s.ZP],
            class extends T {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "dashboardtransform";
              }
              buildNode(e, t) {
                var r, i;
                const o = this.createSgNode(t);
                return (
                  (o.properties.continuous_relatch =
                    null !== (r = this.props.bContinuousRelatch) &&
                    void 0 !== r &&
                    r),
                  (o.properties.free_dashboard_transform =
                    null !== (i = this.props.bFreeDashboardTransform) &&
                    void 0 !== i &&
                    i),
                  [e, o]
                );
              }
            }.prototype,
            "buildNode",
            null
          ),
          VRHTML;
        class Re extends o.Component {
          constructor(e) {
            super(e),
              (this.state = {
                Frame: 1,
                Degrees: 0,
                Transform: {
                  translation: { x: 0, y: 0, z: 0 },
                  rotation: { w: 1, x: 0, y: 0, z: 0 },
                  scale: { x: 1, y: 1, z: 1 },
                },
                LabelValue: "                                               ",
                ShowElasticPanel: !0,
              }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame
              )),
              (this.mailbox = new a()),
              this.mailbox.Init("scenegraphtest"),
              this.mailbox.RegisterHandler("fnord", this.onMailboxMessage);
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.animationFrameHandle);
          }
          componentDidMount() {
            I();
          }
          onAnimationFrame() {
            var e;
            let t = this.state.Transform;
            t.translation.x = 8451e3;
            try {
              t =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.GetPose("/user/hand/right", K.Standing)
                          .xfDeviceToAbsoluteTracking) && void 0 !== e
                  ? e
                  : this.state.Transform;
            } catch (e) {}
            this.setState({
              Frame: this.state.Frame + 1,
              Degrees: ((new Date().getTime() / 1e3) * 90) % 360,
              Transform: t,
              LabelValue: this.state.LabelValue,
              ShowElasticPanel: this.state.ShowElasticPanel,
            }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame
              ));
          }
          onNumberClicked(e) {
            let t = this.state.LabelValue;
            (t += "" + e),
              t.length > 23 && (t = t.substr(t.length - 23, 23)),
              this.setState({
                Frame: this.state.Frame,
                Degrees: this.state.Degrees,
                Transform: this.state.Transform,
                LabelValue: t,
                ShowElasticPanel: this.state.ShowElasticPanel,
              });
          }
          onHideElasticPanel() {
            this.setState({
              Frame: this.state.Frame,
              Degrees: this.state.Degrees,
              Transform: this.state.Transform,
              LabelValue: this.state.LabelValue,
              ShowElasticPanel: !1,
            });
          }
          onMailboxMessage(e) {
            console.log("Received message ", e);
          }
          render() {
            return o.createElement(
              "div",
              null,
              o.createElement(
                k,
                {
                  summonOverlayKey: "keypadtest",
                  id: "bigpicture",
                  tabName: "Steam",
                  iconUri:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png",
                },
                o.createElement(
                  ve,
                  { width: 1.2, interactive: !0 },
                  o.createElement(
                    "div",
                    {
                      className: "panel FlexBox",
                      style: {
                        textAlign: "center",
                        width: 350,
                        height: 450,
                        borderRadius: 30,
                      },
                    },
                    o.createElement("h1", null, "Elastic panel!"),
                    o.createElement("hr", null),
                    o.createElement("pre", null, this.state.LabelValue),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(7),
                      },
                      "7"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(8),
                      },
                      "8"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(9),
                      },
                      "9"
                    ),
                    o.createElement("br", null),
                    o.createElement("br", null),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(4),
                      },
                      "4"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(5),
                      },
                      "5"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(6),
                      },
                      "6"
                    ),
                    o.createElement("br", null),
                    o.createElement("br", null),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(1),
                      },
                      "1"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(2),
                      },
                      "2"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(3),
                      },
                      "3"
                    ),
                    o.createElement("br", null),
                    o.createElement("br", null),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.onHideElasticPanel,
                      },
                      "Close"
                    )
                  )
                )
              ),
              o.createElement(
                he,
                { transform: this.state.Transform, parent_origin: B.Standing },
                o.createElement(be, { source: "generic_hmd" })
              ),
              o.createElement(
                he,
                {
                  translation: { x: 0, y: 0.3, z: 0 },
                  rotation: { x: 30, y: this.state.Degrees, z: 90 },
                  parent_origin: B.Standing,
                },
                o.createElement(be, { source: "locator" })
              ),
              o.createElement(he, {
                translation: { x: 0, y: 1.8, z: 0 },
                parent_origin: B.Standing,
                id: "line_origin",
              }),
              o.createElement(
                he,
                {
                  translation: { x: 0, y: 0, z: -0.5 },
                  scale: { x: 2, y: 2, z: 2 },
                  parent_origin: B.Seated,
                },
                o.createElement(
                  ve,
                  { height: 0.45, width: 0.45, interactive: !0 },
                  o.createElement("iframe", {
                    src: "https://www.valvesoftware.com",
                    style: { width: "400px", height: "400px", padding: 0 },
                    height: "400",
                    width: "400",
                  })
                )
              ),
              o.createElement(
                he,
                {
                  translation: { x: 0, y: 0, z: -0.5 },
                  parent_path: "/user/hand/left",
                  id: "left_hand_model",
                },
                o.createElement(be, { source: "locator_one_sided" })
              ),
              o.createElement(
                he,
                { parent_path: "/user/hand/right" },
                o.createElement(Se, {
                  target_id: "line_origin",
                  thickness: 0.01,
                  end_buffer: 0.5,
                }),
                o.createElement(Se, {
                  target_id: "left_hand_model",
                  thickness: 0.001,
                  end_buffer: 0.1,
                  start_buffer: 0.2,
                })
              ),
              o.createElement(
                k,
                {
                  summonOverlayKey: "bigpicturetest",
                  id: "bigpicture",
                  tabName: "Steam",
                  iconUri:
                    "data:image/png;base64,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",
                },
                o.createElement(ve, {
                  overlay_key: "valve.steam.bigpicture",
                  uv_min: { u: 0, v: 0 },
                  uv_max: { u: 1, v: 0.3 },
                  width: 0.5,
                  interactive: !1,
                })
              ),
              o.createElement(he, {
                translation: { x: 0, y: 0, z: -0.5 },
                parent_path: "/user/hand/right/pose/base",
              }),
              o.createElement(
                he,
                {
                  translation: { x: 0, y: -1.2, z: -2 },
                  rotation: { x: -45 },
                  parent_path: "/user/head/pose/raw",
                },
                o.createElement(
                  ve,
                  { height: 0.2, width: void 0, interactive: !1 },
                  o.createElement(
                    "div",
                    {
                      className: "panel",
                      style: { height: "150px", width: "600px" },
                    },
                    o.createElement("h1", null, "Some Text for the panel."),
                    "Frame: ",
                    this.state.Frame,
                    o.createElement("br", null),
                    "Degrees: ",
                    Math.round(this.state.Degrees),
                    o.createElement("br", null)
                  )
                )
              ),
              o.createElement(
                he,
                { parent_origin: B.Standing },
                o.createElement(be, {
                  source: "{knuckles}valve_controller_knu_ev2_0_left",
                })
              ),
              o.createElement(
                he,
                { translation: { y: 0.5 } },
                o.createElement(
                  N,
                  { value: 0.1 },
                  o.createElement(
                    x,
                    { color: { b: 1, g: 1, r: 0 } },
                    o.createElement(be, {
                      source: "generic_hmd",
                      wireframe: !0,
                      fresnel: { color: { r: 1 }, opacity: 0.7, strength: 1 },
                    })
                  )
                )
              ),
              o.createElement(De, null)
            );
          }
        }
        (0, i.gn)([s.ak], Re.prototype, "onAnimationFrame", null),
          (0, i.gn)([s.ak], Re.prototype, "onNumberClicked", null),
          (0, i.gn)([s.ak], Re.prototype, "onHideElasticPanel", null),
          (0, i.gn)([s.ak], Re.prototype, "onMailboxMessage", null),
          n.render(
            o.createElement(fe, null, o.createElement(Re, null)),
            document.getElementById("root")
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              j.ShowTouchPadScrollWheel,
              !0
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              j.SendVRSmoothScrollEvents,
              !0
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              J.Mouse
            );
      },
    },
    r = {};
  function i(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var n = (r[e] = { id: e, exports: {} });
    return t[e](n, n.exports, i), n.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, r, o, n) => {
      if (!r) {
        var s = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [r, o, n] = e[p], a = !0, l = 0; l < r.length; l++)
            (!1 & n || s >= n) && Object.keys(i.O).every((e) => i.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(p--, 1);
            var d = o();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [r, o, n];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.j = 446),
    (() => {
      var e = { 446: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [s, a, l] = r,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (o in a) i.o(a, o) && (i.m[o] = a[o]);
            if (l) var p = l(i);
          }
          for (t && t(r); d < s.length; d++)
            (n = s[d]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(p);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (i.nc = void 0);
  var o = i.O(void 0, [968], () => i(8431));
  o = i.O(o);
})();
//# sourceMappingURL=scenegraphtest.js.map?v=4db0ef0fbbd0c5dc8c7d
