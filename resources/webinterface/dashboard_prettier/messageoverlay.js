/*! For license information please see messageoverlay.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      6321: (e, t, r) => {
        r.d(t, {
          Bl: () => _.Bl,
          Dd: () => l.D,
          Fs: () => i.Fs,
          GC: () => S.GC,
          Ic: () => _.Ic,
          JR: () => i.JR,
          Kf: () => S.Kf,
          Kg: () => S.Kg,
          LL: () => S.LL,
          LY: () => i.LY,
          M9: () => i.M9,
          Nv: () => n.N,
          OK: () => u.OK,
          Op: () => S.Op,
          Oq: () => i.Oq,
          Pd: () => i.Pd,
          Pw: () => S.Pw,
          QZ: () => S.QZ,
          UU: () => i.UU,
          Uk: () => S.Uk,
          VW: () => a.V,
          Vv: () => _.Vv,
          XX: () => S.XX,
          Y9: () => s.Y,
          Z9: () => S.Z9,
          ZP: () => f,
          Zj: () => i.Zj,
          a0: () => S.a0,
          at: () => v.a,
          bt: () => m.b,
          dq: () => i.dq,
          du: () => S.du,
          eK: () => y.e,
          eQ: () => i.eQ,
          gQ: () => p.g,
          hz: () => o.h,
          iN: () => u.iN,
          kH: () => b.k,
          l0: () => S.l0,
          lx: () => S.lx,
          n0: () => h.n,
          q9: () => i.q9,
          qA: () => S.qA,
          qC: () => S.qC,
          qI: () => u.qI,
          s_: () => _.s_,
          sl: () => c.s,
          tS: () => i.tS,
          vS: () => S.vS,
          wU: () => S.wU,
          wx: () => d.w,
          x1: () => g.x,
          xY: () => S.xY,
          xj: () => p.x,
          zA: () => S.zA,
          zq: () => S.zq,
        });
        var n = r(4507),
          i = r(3573),
          o = r(1469),
          s = r(1976),
          a = r(1917),
          l = r(142),
          c = r(7986),
          d = r(6701),
          u = (r(2509), r(6263)),
          h = (r(3402), r(9495)),
          p = (r(6374), r(5565)),
          m = r(3033),
          g = r(8235),
          v = (r(9483), r(5230)),
          _ = r(4132),
          y = (r(9744), r(6721), r(510), r(1077), r(1431), r(6730)),
          b = r(6135),
          S = r(1731);
        const f = VRHTML;
      },
      1431: (e, t, r) => {
        r(7294), r(3402);
      },
      1077: (e, t, r) => {
        var n = r(7294);
        r(1731), r(6701), n.Component;
      },
      1976: (e, t, r) => {
        r.d(t, { Y: () => c });
        var n = r(655),
          i = r(7294),
          o = r(3402),
          s = r(7056),
          a = r(6263),
          l = r(7986);
        class c extends o.Mo {
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
            const n = this.createSgNode(t);
            return (
              (n.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
              (n.properties.mountable_id = (0, a.Hb)(
                this.m_sMountableUnqualifiedID
              )),
              (n.properties.icon_uri = this.props.iconUri),
              (n.properties.icon_overlay_key = this.props.iconOverlayKey),
              (n.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, n]
            );
          }
          internalRender() {
            return i.createElement(
              "vsg-node",
              { id: this.props.id },
              i.createElement(
                l.C,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children
              )
            );
          }
        }
        (0, n.gn)([s.ZP], c.prototype, "buildNode", null);
      },
      6730: (e, t, r) => {
        r.d(t, { e: () => s });
        var n = r(655),
          i = r(3402),
          o = r(7056);
        class s extends i.Mo {
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
                null !== (r = this.props.bContinuousRelatch) &&
                void 0 !== r &&
                r),
              [e, n]
            );
          }
        }
        (0, n.gn)([o.ZP], s.prototype, "buildNode", null);
      },
      6721: (e, t, r) => {
        var n;
        r(7294),
          r(3402),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(n || (n = {}));
      },
      510: (e, t, r) => {
        r(7294), r(3402);
      },
      8235: (e, t, r) => {
        r.d(t, { x: () => o });
        var n = r(7294),
          i = r(3402);
        class o extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      9744: (e, t, r) => {
        r(7294), r(3402);
      },
      3033: (e, t, r) => {
        r.d(t, { b: () => s });
        var n = r(655),
          i = r(3402),
          o = r(7056);
        class s extends i.Mo {
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
                let t = (0, i.kh)(e.color, { r: 0, g: 0, b: 0 });
                r.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, r];
          }
        }
        (0, n.gn)([o.ZP], s.prototype, "buildNode", null);
      },
      6135: (e, t, r) => {
        r.d(t, { k: () => o });
        var n = r(7294),
          i = r(3402);
        class o extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, i.Kg)(this.props.xfCurrent.translation),
              t = (0, i.xs)(this.props.xfCurrent.rotation),
              r = (0, i.Kg)(this.props.xfCurrent.scale);
            return n.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: r,
              },
              this.props.children
            );
          }
        }
      },
      7986: (e, t, r) => {
        r.d(t, { C: () => a, s: () => l });
        var n = r(655),
          i = r(3402),
          o = r(7056),
          s = r(6263);
        class a extends i.Mo {
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
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
        class l extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (
              (r.properties.mountable_id = (0, s.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (r.properties.dashboard_scale = this.props.fDashboardScale),
              [e, r]
            );
          }
        }
        (0, n.gn)([o.ZP], l.prototype, "buildNode", null);
      },
      142: (e, t, r) => {
        r.d(t, { D: () => s });
        var n = r(655),
          i = r(3402),
          o = r(7056);
        class s extends i.Mo {
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
        (0, n.gn)([o.ZP], s.prototype, "buildNode", null);
      },
      4132: (e, t, r) => {
        r.d(t, {
          Bl: () => s,
          Ic: () => n,
          Lb: () => m,
          Vv: () => i,
          s_: () => g,
        });
        var n,
          i,
          o,
          s,
          a = r(655),
          l = r(7294),
          c = r(3402),
          d = r(9495),
          u = r(7056),
          h = r(6263);
        function p(e) {
          if (e) return [e.u, e.v];
        }
        function m(e) {
          switch (e) {
            case n.TopLeft:
              return { x: -1, y: 1 };
            case n.TopCenter:
              return { x: 0, y: 1 };
            case n.TopRight:
              return { x: 1, y: 1 };
            case n.CenterLeft:
              return { x: -1, y: 0 };
            case n.Center:
              return { x: 0, y: 0 };
            case n.CenterRight:
              return { x: 1, y: 0 };
            case n.BottomLeft:
              return { x: -1, y: -1 };
            case n.BottomCenter:
              return { x: 0, y: -1 };
            case n.BottomRight:
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
        })(n || (n = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(o || (o = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(s || (s = {}));
        class g extends c.Mo {
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
            g.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = d.n.Current().addEmbeddedPanelUVs(this)),
              (g.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            d.n.Current().forceLayoutUpdate();
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
              (g.s_bPanelsAreDirty = !0),
              d.n.Current().removeEmbeddedPanelUVs(this),
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
            return null !== (e = this.props.visibility) && void 0 !== e
              ? e
              : s.Visible;
          }
          buildNode(e, t) {
            var r, n, i, o, a;
            if (this.visibility != s.Visible) return [e, null];
            let l = Object.assign({}, e),
              d = this.createSgNode(t),
              u = { x: 0, y: 0 };
            u =
              "object" == typeof this.props.origin
                ? (0, c.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const g = this.props.overlay_key,
              v = (0, h.Gv)();
            return (
              g && g.length > 0
                ? (d.properties.key = g)
                : v
                ? (d.properties.key = v)
                : (d.properties.overlay_handle = (0, h.Mb)()),
              (d.properties.uv_min =
                null !== (r = p(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (d.properties.uv_max =
                null !== (n = p(this.m_UVsMax)) && void 0 !== n ? n : void 0),
              (d.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (d.properties.height =
                null !== (o = this.props.height) && void 0 !== o ? o : void 0),
              (d.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (d.properties["target-width-anchor-id"] = (0, h.Hb)(
                this.props.target_width_anchor_id
              )),
              (d.properties["target-dpi-panel-id"] = (0, h.Hb)(
                this.props.target_dpi_panel_id
              )),
              (d.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (d.properties.curvature = this.props.curvature),
              (d.properties["curvature-origin-id"] = (0, h.Hb)(
                this.props.curvature_origin_id
              )),
              (d.properties.interactive = this.props.interactive),
              (d.properties.scrollable = this.props.scrollable),
              (d.properties.modal = this.props.modal),
              (d.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (d.properties.origin = (0, c.D1)(u)),
              (d.properties.debug_name = this.props.debug_name),
              (d.properties.sampler = this.props.sampler),
              (d.properties.reflect = this.props.reflect),
              (d.properties.stereoscopy = this.props.stereoscopy),
              (d.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (d.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (d.properties["texture-id"] = (0, h.Hb)(this.props.texture_id)),
              (d.properties["sort-order"] = this.props.sort_order),
              (d.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (l.currentPanel = this),
              [l, d]
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
            return l.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == s.Hidden ? "none" : null },
              },
              this.props.children
            );
          }
        }
        (g.s_bPanelsAreDirty = !1),
          (0, a.gn)([u.ZP], g.prototype, "onResizeObserved", null),
          (0, a.gn)([u.ZP], g.prototype, "onPanelMouseDown", null),
          (0, a.gn)([u.ZP], g.prototype, "onWindowMouseUp", null),
          (0, a.gn)([u.ZP], g.prototype, "buildNode", null);
      },
      5230: (e, t, r) => {
        r.d(t, { a: () => a });
        var n = r(655),
          i = r(3402),
          o = r(4132),
          s = r(7056);
        class a extends i.Mo {
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
              ? (r = (0, i.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (r = (0, o.Lb)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (r) {
              const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
                i = e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = i.u),
                (n.properties["anchor-v"] = i.v);
            } else {
              const r = t.ownerDocument,
                i = t.getBoundingClientRect(),
                o = i.left + i.width / 2,
                s = i.top + i.height / 2,
                a = e.currentPanel.m_Rect;
              if (o < a.x || o > a.x + a.width || s < a.y || s > a.y + a.height)
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
              (n.properties["anchor-u"] = o / l),
                (n.properties["anchor-v"] = s / c);
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
        (0, n.gn)([s.ZP], a.prototype, "buildNode", null);
      },
      9483: (e, t, r) => {
        r(7294), r(3402);
      },
      5565: (e, t, r) => {
        r.d(t, { g: () => l, x: () => n });
        var n,
          i = r(655),
          o = r(3402),
          s = r(7056),
          a = r(6263);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(n || (n = {}));
        class l extends o.Mo {
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
              (r.properties["texture-id"] = (0, a.Hb)(
                this.props["texture-id"]
              )),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = (0, o.kh)(e.color, { r: 0, g: 0, b: 0 });
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
        (0, i.gn)([s.ZP], l.prototype, "buildNode", null);
      },
      9495: (e, t, r) => {
        r.d(t, { n: () => l });
        var n = r(655),
          i = r(7294),
          o = r(4132),
          s = r(7056),
          a = r(6263);
        class l extends i.Component {
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
              (l.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
              }),
              (this.m_DomRef = i.createRef()),
              (this.m_scalingDomRef = i.createRef()),
              (this.m_CanvasRef = i.createRef()),
              (this.m_DebugPointerRef = i.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== l.Current();
          }
          static Current() {
            return l.s_Current;
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
            (o.s_.s_bPanelsAreDirty = !0),
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
                (0, a.mK)(
                  this.props.owning_overlay_key,
                  this.m_DomRef.current,
                  this.props.web_secret
                );
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
              i.createElement(
                "vsg-app",
                {
                  class: e.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                i.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                i.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: l.k_EmbeddedDataRows,
                }),
                i.createElement(
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
              (this.m_CanvasContext =
                this.m_CanvasRef.current.getContext("2d")),
              (this.m_CanvasContext.globalCompositeOperation = "copy"),
              (this.m_CanvasContext.imageSmoothingEnabled = !1),
              null === this.m_Pixels &&
                (this.m_Pixels = this.m_CanvasContext.createImageData(
                  this.m_nEmbeddedDataWidth,
                  l.k_EmbeddedDataRows
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
              (o.s_.s_bPanelsAreDirty = !0)),
              o.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, a.k7)(),
                (o.s_.s_bPanelsAreDirty = !1),
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
                  o = e.m_Rect.y + e.m_Rect.height,
                  s = 1 + 3 * e.getEmbeddedIndex();
                if (e.isExternal() || r >= n || i >= o)
                  for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
                else
                  this.setPixel(s, (65280 & r) >> 8, 255 & r, 0),
                    this.setPixel(s + 1, (65280 & n) >> 8, 255 & n, 255 & i),
                    this.setPixel(
                      s + 2,
                      (65280 & o) >> 8,
                      255 & o,
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
        (l.s_Current = null),
          (l.k_EmbeddedDataRows = 1),
          (0, n.gn)([s.ak], l.prototype, "toggleDebugPointer", null),
          (0, n.gn)([s.ak], l.prototype, "onMouseMove", null),
          (0, n.gn)([s.ak], l.prototype, "forceLayoutUpdate", null),
          (0, n.gn)([s.ak], l.prototype, "onMutation", null);
      },
      3402: (e, t, r) => {
        r.d(t, {
          D1: () => l,
          Kg: () => c,
          Mo: () => u,
          QE: () => o,
          Uq: () => s,
          kh: () => a,
          xs: () => d,
        });
        var n = r(7294),
          i = r(6263);
        function o(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function s(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function a(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function l(e) {
          if (e) return [e.x, e.y];
        }
        function c(e) {
          var t;
          return null ===
            (t = (function (e) {
              if (e) return [e.x, e.y, e.z];
            })(e)) || void 0 === t
            ? void 0
            : t.join(" ");
        }
        function d(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class u extends n.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = n.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID = u.s_NextSGID),
              (u.s_NextSGID = (u.s_NextSGID + 1) % 4294967296);
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
            return (0, i.ac)(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              (0, i.k7)();
          }
          componentDidUpdate() {
            (0, i.k7)();
          }
          componentWillUnmount() {
            (0, i.sX)(this.m_SGID),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return n.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? n.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        u.s_NextSGID = 1;
      },
      6263: (e, t, r) => {
        r.d(t, {
          Gv: () => R,
          Hb: () => C,
          Mb: () => h,
          OK: () => T,
          ac: () => u,
          iN: () => M,
          k7: () => P,
          mK: () => k,
          qI: () => w,
          sX: () => D,
        });
        var n = r(655),
          i = r(4507);
        function o(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) {
            if ("undefined" == r) return;
            let e = [];
            for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function s(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseFloat(r);
        }
        function a(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseInt(r);
        }
        function l(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0)
            return (
              "true" == r ||
              (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
            );
        }
        function c(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return r;
        }
        function d(e, t) {
          return C(c(e, t));
        }
        function u(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = C(t.id)),
            (r.properties.sgid = a(t, "sgid")),
            r
          );
        }
        function h() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function p(e, t) {
          let [r, n] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let n = Object.assign({}, e),
                i = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (i = u("transform", t)),
                    (i.properties.translation = o(t, "translation")),
                    (i.properties.rotation = o(t, "rotation")),
                    (i.properties.scale = o(t, "scale")),
                    (i.properties["curvature-pitch"] = s(t, "curvature-pitch")),
                    (i.properties["parent-path"] = c(t, "parent-path")),
                    (i.properties["parent-origin"] = c(t, "parent-origin")),
                    (i.properties["parent-id"] = d(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (i = u("trackingstatevisibility", t)),
                    (i.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (i.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (i.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (i = u("elasticheadtransform", t)),
                    (i.properties["start-angle-threshold"] = s(
                      t,
                      "start-angle-threshold"
                    )),
                    (i.properties["stop-angle-threshold"] = s(
                      t,
                      "stop-angle-threshold"
                    )),
                    (i.properties["ease-in-time"] = s(t, "ease-in-time")),
                    (i.properties["ease-in-power"] = s(t, "ease-in-power")),
                    (i.properties["ease-out-angle-threshold"] = s(
                      t,
                      "ease-out-angle-threshold"
                    )),
                    (i.properties["ease-out-power"] = s(t, "ease-out-power")),
                    (i.properties["min-angular-velocity"] = s(
                      t,
                      "min-angular-velocity"
                    )),
                    (i.properties["max-angular-velocity"] = s(
                      t,
                      "max-angular-velocity"
                    )),
                    (i.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (i.properties["translation-behavior"] = a(
                      t,
                      "translation-behavior"
                    ));
                  break;
                case "VSG-LINE":
                  (i = u("line", t)),
                    (i.properties["target-id"] = d(t, "target-id")),
                    (i.properties.thickness = s(t, "thickness")),
                    (i.properties["start-buffer"] = s(t, "start-buffer")),
                    (i.properties["end-buffer"] = s(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (i = u("line-constrained-transform", t)),
                    (i.properties["target-id"] = d(t, "target-id")),
                    (i.properties["source-id"] = d(t, "source-id")),
                    (i.properties["source-distance"] = s(t, "source-distance")),
                    (i.properties["target-limit"] = s(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (i = u("callout-transform", t)),
                    (i.properties.offset = o(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  i = u("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (i = u("pin-to-view-transform", t)),
                    (i.properties["offscreen-z-depth"] = s(
                      t,
                      "offscreen-z-depth"
                    )),
                    (i.properties["off-axis-limit"] = s(t, "off-axis-limit")),
                    (i.properties["transition-limit"] = s(
                      t,
                      "transition-limit"
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (i = u("manipulation-transform", t)),
                    (i.properties["is-moving"] = l(t, "is-moving")),
                    (i.properties["parent-path"] = c(t, "parent-path")),
                    (i.properties.translation = o(t, "translation")),
                    (i.properties.rotation = o(t, "rotation")),
                    (i.properties.scale = o(t, "scale"));
              }
              return [n, i];
            })(e, t),
            i = [];
          for (let e = 0; e < t.children.length; e++) {
            let n = t.children.item(e);
            if (n.children) {
              let e = p(r, n);
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
        let m,
          g,
          v,
          _,
          y = [],
          b = null,
          S = null,
          f = null;
        function k(e, t, r) {
          (m = e),
            (g = t),
            (v = r),
            console.log("Setting owning overlay key to " + e);
        }
        function M(e, t) {
          return e + "::" + t;
        }
        function C(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : M(R(), e)
            : null;
        }
        function R() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : m;
        }
        function D(e) {
          y.push(e), P();
        }
        function w() {
          _ = !0;
        }
        function T(e) {
          var t, r;
          (r = e),
            (null == (t = f) || null == r
              ? t == r
              : t.color_mult == r.color_mult &&
                t.reflection_mult == r.reflection_mult) || ((f = e), P());
        }
        function P() {
          b ||
            (b = window.setTimeout(
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  g && (e = g);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: _,
                      sceneColorCorrection: f,
                    },
                    children: p({ currentPanel: null, bShouldAbort: !1 }, e),
                  };
                  S ||
                    (console.log("Initializing sg_mailbox"),
                    (S = new i.N()),
                    yield S.Init("sg_mailbox", v));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: R(),
                    scene_graph: t,
                    retired_sgids: y,
                  };
                  S.SendMessage("vrcompositor_systemlayer", r),
                    (b = null),
                    (y = []),
                    (_ = !1);
                }),
              0
            ));
        }
      },
      6374: (e, t, r) => {
        var n = r(655),
          i = r(3402),
          o = r(7056);
        class s extends i.Mo {
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
        }
        (0, n.gn)([o.ZP], s.prototype, "buildNode", null);
      },
      1917: (e, t, r) => {
        r.d(t, { V: () => s });
        var n = r(655),
          i = r(3402),
          o = r(7056);
        class s extends i.Mo {
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
                let e = (0, i.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                r.properties.color = [e.r, e.g, e.b];
              }
            else r.properties.color = [1, 1, 1];
            return [e, r];
          }
        }
        (0, n.gn)([o.ZP], s.prototype, "buildNode", null);
      },
      2509: (e, t, r) => {
        r(7294), r(3402);
      },
      6701: (e, t, r) => {
        r.d(t, { w: () => a });
        var n,
          i = r(7294),
          o = r(3402),
          s = r(3573);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(n || (n = {}));
        class a extends o.Mo {
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
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (r = this.props.transform.scale))
              : ((e = (0, o.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t = (0, s.UU)(
                  (0, s.mT)(
                    (0, o.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                    Math.PI / 180
                  )
                )),
                (r =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, o.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let a = (0, o.Kg)(e),
              l = (0, o.xs)(t),
              c = (0, o.Kg)(r);
            return i.createElement(
              "vsg-transform",
              {
                translation: a,
                rotation: l,
                scale: c,
                "curvature-pitch": this.props.curvature_pitch,
                "parent-path": this.props.parent_path,
                "parent-origin": n[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children
            );
          }
        }
      },
      3573: (e, t, r) => {
        function n() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function i(e, t, r) {
          return {
            x: t.x + e * (r.x - t.x),
            y: t.y + e * (r.y - t.y),
            z: t.z + e * (r.z - t.z),
          };
        }
        function o(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function s(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function a(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function l(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function c(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function d(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function u(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            r = 0.5 * e.y,
            n = 0.5 * e.z,
            i = Math.cos(t),
            o = Math.cos(r),
            s = Math.cos(n),
            a = Math.sin(t),
            l = Math.sin(r),
            c = Math.sin(n);
          return {
            w: i * o * s + a * l * c,
            x: a * o * s + i * l * c,
            y: i * l * s - a * o * c,
            z: i * o * c - a * l * s,
          };
        }
        function h(e) {
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
        function p(e, t, r) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [r.x, r.y, r.z],
          ];
        }
        function m(e) {
          let t = d(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function g(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        r.d(t, {
          Fs: () => a,
          JR: () => c,
          LY: () => d,
          M9: () => m,
          Oq: () => n,
          Pd: () => h,
          UU: () => u,
          Zj: () => o,
          dq: () => g,
          eQ: () => s,
          mT: () => l,
          q9: () => i,
          tS: () => p,
        });
      },
      1469: (e, t, r) => {
        r.d(t, { h: () => o });
        var n = r(655),
          i = r(4507);
        class o {
          constructor() {
            (this.m_mailbox = new i.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return o.instance || (o.instance = new o()), o.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((r, i) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                let n = { type: "transform_request", id: e, flPushDistance: t },
                  o = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    n,
                    "transform_response"
                  );
                o.id == e && o.transform
                  ? r(o.transform)
                  : i("requestSGTransform failed");
              })
            );
          }
        }
      },
      4507: (e, t, r) => {
        r.d(t, { N: () => o });
        var n = r(655),
          i = r(7056);
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
            return (0, n.mG)(this, void 0, void 0, function* () {
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
            return (0, n.mG)(this, void 0, void 0, function* () {
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
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
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
        (o.s_nNextMailboxNumber = 1),
          (0, n.gn)([i.ak], o.prototype, "OpenWebSocketToHost", null),
          (0, n.gn)([i.ak], o.prototype, "OnWebSocketOpen", null),
          (0, n.gn)([i.ak], o.prototype, "OnWebSocketClose", null),
          (0, n.gn)([i.ak], o.prototype, "WebSocketSend", null),
          (0, n.gn)([i.ak], o.prototype, "OnWebSocketMessage", null);
      },
      1731: (e, t, r) => {
        var n, i, o, s;
        function a() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : n.Unknown;
        }
        r.d(t, {
          GC: () => M,
          Kf: () => c,
          Kg: () => C,
          LL: () => i,
          Op: () => a,
          Pw: () => b,
          QZ: () => o,
          Uk: () => m,
          XX: () => u,
          Z9: () => h,
          a0: () => R,
          du: () => y,
          l0: () => S,
          lx: () => k,
          qA: () => n,
          qC: () => p,
          vS: () => D,
          wU: () => l,
          xY: () => _,
          zA: () => w,
          zq: () => s,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(n || (n = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(i || (i = {})),
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
          })(o || (o = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(s || (s = {}));
        let l = 0,
          c = -1;
        var d, u, h, p, m, g, v, _, y, b, S, f, k, M, C, R, D, w;
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
        })(d || (d = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(u || (u = {})),
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
                "EnableControlBarClose");
          })(h || (h = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (e[(e.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (e[(e.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (e[(e.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
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
              (e[(e.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (e[(e.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
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
              (e[(e.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (e[(e.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (e[(e.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
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
              (e[(e.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
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
              (e[(e.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (e[(e.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (e[(e.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
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
              (e[(e.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (e[(e.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (e[(e.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(v || (v = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(_ || (_ = {})),
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
          })(y || (y = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(b || (b = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(S || (S = {})),
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
          })(f || (f = {})),
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
          })(k || (k = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(M || (M = {})),
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
          })(C || (C = {})),
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
          })(R || (R = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
          })(D || (D = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(w || (w = {}));
      },
      1732: (e, t, r) => {
        r.d(t, { L: () => f });
        var n,
          i = r(655),
          o = r(7294),
          s = r(7056),
          a = r(3868),
          l = r(6321),
          c = r(3947),
          d = r(1428),
          u = r(2893),
          h = r(7062),
          p = r(2188),
          m = r(8052),
          g = r(8325);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(n || (n = {}));
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
          ComponentUpdated(e, t, r) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: r }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: r }),
              t == this.props.sourcePath + "/x" && this.setState({ x: r }),
              t == this.props.sourcePath + "/y" && this.setState({ y: r }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: r }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: r }));
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
                o.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                })
              )
            );
          }
          renderBar(e, t, r) {
            let n = { width: String(100 * r) + "%" };
            return o.createElement(
              "div",
              { className: "TriggerBar " + t },
              o.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, a.Xx)(e)
              ),
              o.createElement(
                "div",
                { className: "TriggerBarBackground" },
                o.createElement("div", {
                  className: "TriggerBarContent",
                  style: n,
                })
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
                o = this.m_nameRef.current.getBoundingClientRect(),
                s = this.m_containerRef.current.getBoundingClientRect(),
                a = this.GetPosition(),
                l = new d.E9(0, o.top + o.height / 2);
              l.x = i ? s.left - 10 : s.right + 10;
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
              o.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                o.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  o.createElement(
                    "div",
                    { className: "Label Title", ref: this.m_nameRef },
                    c.I.LocalizeControllerString(
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
        (0, i.gn)([s.ak], v.prototype, "ComponentUpdated", null),
          (0, i.gn)([s.ak], v.prototype, "UpdateSVGPath", null);
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
        class b extends v {
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
                    (0, a.Xx)("#SourceInputMode_Position")
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
            let e = c.I.GetDeviceInfo(this.props.devicePath);
            return c.I.GetControllerTypeInfo(e.controller_type);
          }
          componentDidMount() {
            this.setState({ imageScale: this.GetPointScale() });
          }
          EstimateSourceHeight(e) {
            let t;
            switch (e.type) {
              case "button":
              default:
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
            }
          }
          renderSource(e, t, r) {
            let n = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return o.createElement(_, {
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
                return o.createElement(y, {
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
                return o.createElement(b, {
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
                return o.createElement(
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
                    o.createElement(u.Z, { onReflow: this.OnImageReflow })
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              r = this.ControllerTypeInfo,
              i = 0,
              s = [];
            for (let e in r.input_source) {
              let t = r.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let n = this.EstimateSourceHeight(t);
              (i += n),
                s.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: n,
                });
            }
            let a = 8;
            i > 16 && (a = i / 2);
            let l = 0,
              c = s.sort((e, t) => e.order - t.order);
            for (let r of c) {
              l += r.height;
              let i = l > a ? n.Right : n.Left,
                o = this.renderSource(r.sSourcePath, r.inputSource, i);
              o && (i == n.Left ? e.push(o) : t.push(o));
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
        (0, i.gn)([s.ak], S.prototype, "OnImageLoaded", null),
          (0, i.gn)([s.ak], S.prototype, "OnImageReflow", null);
        let f = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
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
                    (this.m_observeDisposer = (0, p.N7)(
                      c.I,
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
            for (let e of c.I.ConnectedDevices) {
              let t = {
                type: "cancel_input_state_updates",
                device_path: e.root_path,
                returnAddress: this.m_mailbox.name,
              };
              this.m_mailbox.SendMessage("input_server", t);
            }
          }
          UpdateDeviceInputStateSubscriptions() {
            for (let e of c.I.ConnectedDevices) {
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
            return c.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t)
            );
          }
          render() {
            let e,
              t = [],
              r = this.GetSortedDevices();
            if (!r)
              return o.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, a.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                o.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, a.Xx)("#TestController_NoController")
                )
              );
            for (let n of r)
              "TrackedDeviceClass_HMD" != n.class &&
                (n.root_path == this.state.devicePath && (e = n.serial_number),
                t.push({
                  value: n.root_path,
                  sLabel: (0, a.Xx)("#" + n.root_path),
                }));
            return o.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, a.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: o.createElement(m.U5, {
                  leftControls: [
                    o.createElement(g.hu, {
                      key: "dropdown",
                      items: t,
                      value: this.state.devicePath,
                      defaultLabel: (0, a.Xx)("#" + this.state.devicePath),
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
        (0, i.gn)([s.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, i.gn)([s.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, i.gn)([h.Pi], f));
      },
      1884: (e, t, r) => {
        r.d(t, { V: () => c });
        var n = r(655),
          i = r(7294),
          o = r(7056),
          s = r(3868),
          a = r(6321);
        class l extends i.Component {
          constructor(e) {
            if (
              (super(e),
              (this.m_mailbox = new a.Nv()),
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
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", 0);
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
                  (0, s.Xx)("#LegacyDebugger_NoApp")
                );
          }
        }
        (0, n.gn)([o.ak], l.prototype, "OnLegacyInputFrame", null);
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
      7968: (e, t, r) => {
        r.d(t, { A: () => n, X: () => l });
        var n,
          i = r(655),
          o = r(7294),
          s = r(7056),
          a = r(6321);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(n || (n = {}));
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
            (this.m_BatteryStateChangedCallbackHandle =
              null === a.ZP || void 0 === a.ZP
                ? void 0
                : a.ZP.RegisterForBatteryStateChangedEvents(
                    this.OnBatteryStateChanged
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === a.ZP || void 0 === a.ZP
                  ? void 0
                  : a.ZP.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === a.ZP || void 0 === a.ZP
                  ? void 0
                  : a.ZP.RegisterForDeviceEvents(this.OnDeviceEvent)),
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
            if (!a.ZP) return;
            const t = a.ZP.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                a.Uk.DeviceProvidesBatteryStatus_Bool
              ),
              r = a.ZP.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex
              );
            let i = !1;
            if (t) {
              const t =
                null !==
                  (e = a.ZP.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    a.Uk.DeviceBatteryPercentage_Float
                  )) && void 0 !== e
                  ? e
                  : 0;
              (i = a.ZP.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                a.Uk.DeviceIsCharging_Bool
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
                i,
                this.batteryLevelStable,
                n.HorizontalPips
              ),
              s = this.GetRoleIcon(r);
            (o == this.state.batteryIconPath && s == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: o, roleIconPath: s });
          }
          GetRoleIcon(e) {
            switch (e) {
              case a.Kg.TrackedControllerRole_RightHand:
                return "images/icons/controller_model_right.png";
              case a.Kg.TrackedControllerRole_LeftHand:
                return "images/icons/controller_model_left.png";
            }
            return null;
          }
          static GetBatteryIcon(e, t, r, i) {
            if (!e) return null;
            const o =
              i == n.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? r < 0.15
                ? o + "_charging_red.png"
                : o + "_charging.png"
              : 0 == r
              ? null
              : r < 0.15
              ? o + "_low.png"
              : r < 0.3
              ? o + "_battery_1.png"
              : r < 0.6
              ? o + "_battery_2.png"
              : r < 0.9
              ? o + "_battery_3.png"
              : o + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, r) {
            e == a.XX.Activated &&
              r == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return o.createElement(
              a.s_,
              {
                width: void 0,
                height: void 0,
                interactive: !1,
                rendermodel_component_device_index:
                  this.props.trackedDeviceIndex,
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
          (0, i.gn)([s.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, i.gn)([s.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, i.gn)([s.ak], l.prototype, "OnDeviceEvent", null);
      },
      8546: (e, t, r) => {
        r.d(t, { g: () => oe, _: () => Q });
        var n,
          i,
          o = r(655),
          s = r(6321),
          a = r(7056),
          l = r(7294),
          c = r(1818),
          d = r(197),
          u = r(3868),
          h = r(3446),
          p = r(7062),
          m = r(7679),
          g = r(2188),
          v = r(9392);
        let _ = (n = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new s.Nv()),
              (this.m_refWindowScrollPanel = l.createRef()),
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
                  null === (n = this.m_refWindowScrollPanel.current) ||
                  void 0 === n
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
            return l.createElement(
              m.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              i &&
                l.createElement(
                  v.P,
                  {
                    scrollDirection: v.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  l.createElement(
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
                          return l.createElement(m.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, u.Xx)("#Desktop_X", e),
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
                      return l.createElement(m.zN, {
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
                              null === (r = this.state.desktopView) ||
                                void 0 === r
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
                l.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  l.createElement(m.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, u.Xx)("#AddView"),
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopupMenuTimeout,
                    onMouseLeave: () => this.props.onStartPopupMenuTimeout(500),
                  })
                ),
              l.createElement(
                "div",
                { className: "Section" },
                l.createElement(m.zN, {
                  iconUrl: this.props.bDarkMode
                    ? "/dashboard/images/icons/svr_nightmode.svg"
                    : "/dashboard/images/icons/svr_lightmode.svg",
                  title: (0, u.Xx)("#Settings_ToggleDarkMode"),
                  onClick: this.props.onToggleDarkMode,
                })
              )
            );
          }
        });
        (_.k_sMailboxName = "systemui_desktoptray"),
          (_ = n = (0, o.gn)([p.Pi], _));
        let y = (i = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new s.Nv()),
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
            null ===
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay("valve.steam.desktop"))
              ? (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewReadyEvents(
                    this.onDesktopViewReady
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewUpdatingEvents(
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
              : null !==
                  (e = h.G3.settings.get("/settings/dashboard/desktopIndex")) &&
                void 0 !== e
              ? e
              : 1;
          }
          get currentWindowHwnd() {
            return "" == this.state.sCurrentWindowOverlayKey
              ? ""
              : this.state.mapWindowInfo.get(
                  this.state.sCurrentWindowOverlayKey
                ).sHwnd;
          }
          onDesktopScaleChange(e) {
            this.currentDesktopIndex > 0 &&
              h.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e
              );
          }
          onDesktopChange(e) {
            h.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
            var e;
            let t = 1,
              r = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));

            )
              r.push(t), t++;
            (null !==
              (e = h.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > r.length &&
              h.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: r });
          }
          ShowDesktop() {
            this.m_mailbox.SendMessage("desktopview", {
              type: "request_show_desktop",
            });
          }
          renderControlBarButtons(e) {
            return l.createElement(
              l.Fragment,
              null,
              "" == this.state.sCurrentWindowOverlayKey &&
                l.createElement(m.zN, {
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
              null ===
                (e = h.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? d.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? l.createElement(s.sl, {
                    mountedId: (0, s.iN)(d.GN, "valve.steam.desktop"),
                  })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? l.createElement(
                      m.lL,
                      { visible: !0 },
                      l.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        l.createElement(
                          "h2",
                          null,
                          (0, u.Xx)("#NoDesktopFound")
                        )
                      )
                    )
                  : -1 == this.currentDesktopIndex
                  ? l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        s.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height:
                            this.props.fActiveOverlayScale *
                            i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: s.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        l.createElement(s.at, {
                          id: m.t3,
                          location: s.Ic.TopCenter,
                        }),
                        l.createElement(s.sl, {
                          mountedId: (0, s.iN)(
                            d.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor"
                          ),
                        }),
                        l.createElement(s.at, {
                          id: m.Gl,
                          location: s.Ic.BottomCenter,
                        })
                      )
                    )
                  : l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        s.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height:
                            this.props.fActiveOverlayScale *
                            i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: s.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        l.createElement(s.at, {
                          id: m.t3,
                          location: s.Ic.TopCenter,
                        }),
                        l.createElement(s.sl, {
                          mountedId: (0, s.iN)(
                            d.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor"
                          ),
                        }),
                        l.createElement(s.at, {
                          id: m.Gl,
                          location: s.Ic.BottomCenter,
                        })
                      )
                    )
                : l.createElement(
                    m.lL,
                    { visible: !0 },
                    l.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      l.createElement(
                        "h2",
                        null,
                        (0, u.Xx)("#DesktopViewsUpdating")
                      )
                    )
                  )
              : null;
          }
        });
        (y.k_sMailboxName = "systemui_desktopview"),
          (y.k_nDesktopPanelBaseHeight = 2),
          (0, o.gn)([g.Fl], y.prototype, "desktopCount", null),
          (0, o.gn)([g.Fl], y.prototype, "sCurrentOverlayKey", null),
          (0, o.gn)([g.Fl], y.prototype, "currentDesktopIndex", null),
          (0, o.gn)([g.Fl], y.prototype, "currentWindowHwnd", null),
          (0, o.gn)([a.ZP], y.prototype, "onDesktopScaleChange", null),
          (0, o.gn)([a.ZP], y.prototype, "onDesktopChange", null),
          (0, o.gn)([a.ZP], y.prototype, "onDesktopViewUpdating", null),
          (0, o.gn)([a.ZP], y.prototype, "onDesktopViewReady", null),
          (0, o.gn)([a.ZP], y.prototype, "onWindowViewChange", null),
          (0, o.gn)([a.ZP], y.prototype, "ShowDesktop", null),
          (y = i = (0, o.gn)([p.Pi], y));
        var b,
          S = r(1058);
        let f = (b = class extends l.Component {
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
              e.push(
                this.props.imageUrl.replace(/header\.jpg$/, "portrait.png")
              )),
              e.push(this.props.imageUrl),
              this.props.fallbackImageUrl &&
                e.push(this.props.fallbackImageUrl),
              (this.m_imageSources = e.filter(
                (e) => !b.s_failedImages.includes(e)
              )),
              (this.m_imageIndex = -1);
          }
          componentDidMount() {
            this.m_imageIndex < 0 &&
              ((this.m_loadingImage = new window.Image()),
              this.loadNextImage());
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
              b.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
              t = l.createElement("div", { className: "Icon", style: e });
            return (
              this.state.width / this.state.height != 600 / 900 &&
                (t = l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("div", {
                    className: "IconBackgroundBlur",
                    style: e,
                  }),
                  t
                )),
              l.createElement(
                "div",
                {
                  className: (0, S.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                l.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title
                ),
                this.props.children && this.props.children
              )
            );
          }
        });
        var k;
        (f.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (f.s_failedImages = []),
          (0, o.gn)([a.ak], f.prototype, "loadNextImage", null),
          (0, o.gn)([a.ak], f.prototype, "onLoad", null),
          (0, o.gn)([a.ak], f.prototype, "onError", null),
          (f = b = (0, o.gn)([p.Pi], f)),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(k || (k = {}));
        const M = (e) =>
          l.createElement(
            "div",
            {
              className: (0, S.LJ)("ButtonContainer", k[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              c.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == k.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›")
            )
          );
        class C extends l.Component {
          constructor(e) {
            super(e),
              (this.m_refScrollPanel = l.createRef()),
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
                (this.updateButtonVisibilities(),
                (this.m_nLastScrollWidth = e));
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
            const i =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              o = n[0],
              s = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : r.scrollLeft,
              a = o.getBoundingClientRect().left + r.scrollLeft,
              l = o.clientWidth,
              c = r.clientWidth,
              d = Math.floor(c / l) - 1,
              u = Math.round((s - a + i + 1) / l) + d * e - 0.4999,
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
            return l.createElement(
              "div",
              {
                className: (0, S.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames
                ),
              },
              l.createElement(
                v.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: v.I.Horizontal,
                  onScroll: this.onScroll,
                },
                this.props.children
              ),
              (!1 === this.state.bScrolledToStart ||
                !1 === this.state.bScrolledToEnd) &&
                l.createElement(
                  "div",
                  { className: "PaginationButtons" },
                  null !== this.state.bScrolledToStart &&
                    l.createElement(M, {
                      side: k.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(M, {
                      side: k.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    })
                )
            );
          }
        }
        (0, o.gn)([a.ZP], C.prototype, "onAnimationFrame", null),
          (0, o.gn)([a.ZP], C.prototype, "onScroll", null),
          (0, o.gn)([a.ZP], C.prototype, "onLeftButtonClick", null),
          (0, o.gn)([a.ZP], C.prototype, "onRightButtonClick", null);
        let R = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new S.cB()),
              (this.m_refAnchoredParentPortal = l.createRef()),
              (this.m_refButton = l.createRef()),
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
              l.createElement(
                "div",
                {
                  className: (0, S.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      h.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents]
                  ),
                },
                l.createElement(
                  c.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  l.createElement(f, Object.assign({}, e), this.props.children)
                )
              )
            );
          }
        };
        (0, o.gn)([a.ZP], R.prototype, "buttonMouseEnter", null),
          (0, o.gn)([a.ZP], R.prototype, "buttonMouseLeave", null),
          (0, o.gn)([a.ZP], R.prototype, "onParentScrollStop", null),
          (R = (0, o.gn)([p.Pi], R));
        const D = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          w = (e) => {
            var t;
            const r = !!e.loading,
              n = null !== (t = e.apps) && void 0 !== t ? t : [];
            let i = "AppCarousel";
            return (
              e.className && (i += " " + e.className),
              (i += " NoAnimations"),
              l.createElement(
                C,
                { additionalClassNames: i, paginationAlignmentOffset: -20 },
                r &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(D, null),
                    l.createElement(D, null),
                    l.createElement(D, null),
                    l.createElement(D, null)
                  ),
                !r &&
                  n.map((e) =>
                    l.createElement(R, Object.assign({ key: e.appkey }, e))
                  )
              )
            );
          };
        var T = r(9015),
          P = r(9669),
          E = r.n(P),
          I = r(4916);
        function O() {
          return E()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
            )
            .then((e) => e.data);
        }
        const x = () =>
          l.createElement(
            c.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                T.y.Instance.openBigPictureStore(null, T.b.QuickStore),
            },
            l.createElement("span", null, (0, u.Xx)("#BrowseAll")),
            l.createElement("img", {
              className: "Icon BlackToWhite",
              src: "/dashboard/images/icons/svr_store.svg",
            })
          );
        var V;
        !(function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.Singleplayer = 1)] = "Singleplayer"),
            (e[(e.Multiplayer = 2)] = "Multiplayer");
        })(V || (V = {}));
        let L = class extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            O().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, r) {
            I.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              V[t].toLowerCase() + ":" + r,
              `steam.app.${e}`
            ),
              T.y.Instance.openBigPictureStore(e, T.b.QuickStore);
          }
          makeAppButtonList() {
            let e = [];
            switch (this.props.section) {
              case V.Free:
                e = this.state.storeData.apps_free;
                break;
              case V.Singleplayer:
                e = this.state.storeData.apps_singleplayer;
                break;
              case V.Multiplayer:
                e = this.state.storeData.apps_multiplayer;
            }
            return e.map((e, t) => {
              const r = `steam.app.${e.appid}`;
              return {
                key: r,
                appkey: r,
                title: e.name,
                imageUrl: e.logo,
                onClick: () =>
                  this.openSteamApp(e.appid, this.props.section, t),
              };
            });
          }
          render() {
            return this.state.storeData
              ? l.createElement(w, { apps: this.makeAppButtonList() })
              : l.createElement(w, { loading: !0 });
          }
        };
        L = (0, o.gn)([p.Pi], L);
        class B extends l.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return l.createElement(
              m.lL,
              {
                visible: this.props.visible,
                additionalClassNames: "QuickStore",
              },
              l.createElement(x, null),
              l.createElement(
                "h2",
                null,
                (0, u.Xx)("#StoreSection_TopSingleplayer")
              ),
              l.createElement(L, { section: V.Singleplayer }),
              l.createElement(
                "h2",
                null,
                (0, u.Xx)("#StoreSection_TopMultiplayer")
              ),
              l.createElement(L, { section: V.Multiplayer }),
              l.createElement("h2", null, (0, u.Xx)("#StoreSection_TopFree")),
              l.createElement(L, { section: V.Free })
            );
          }
        }
        var N;
        const H = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  T.y.Instance.openBigPictureLibrary(null, T.b.QuickLaunch),
              },
              l.createElement("span", null, (0, u.Xx)("#BrowseAll")),
              l.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              })
            ),
          A = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(d.wB),
              },
              l.createElement("span", null, (0, u.Xx)("#WelcomeBrowseStore"))
            ),
          F = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  T.y.Instance.openBigPictureLibrary(null, T.b.QuickLaunch),
              },
              l.createElement("span", null, (0, u.Xx)("#WelcomeInstall"))
            );
        class U extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            O().then((e) => this.setState({ storeData: e }));
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
                    l.createElement(
                      c.z,
                      {
                        key: `appid_${n.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          T.y.Instance.openBigPictureStore(
                            n.appid,
                            T.b.QuickLaunch
                          ),
                      },
                      l.createElement("img", { src: n.logo })
                    )
                  );
              }
            }
            return l.createElement(
              "div",
              { className: "QuickLaunchWelcome" },
              e,
              l.createElement(
                "div",
                { className: "QuickLaunchWelcomePrompt" },
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeHeader" },
                  (0, u.Xx)("#WelcomeHeader")
                ),
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, u.Xx)("#WelcomeMessage")
                ),
                l.createElement(A, null),
                l.createElement(F, null)
              )
            );
          }
        }
        let W = (N = class extends l.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          launchApplication(e, t, r) {
            var n, i;
            I.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + r,
              e.key
            ),
              null === (i = (n = this.props).onGameLaunched) ||
                void 0 === i ||
                i.call(n, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != h.G3.apps)
              for (let t of h.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  N.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let r = t.library_priority - e.library_priority;
              return 0 == r && (r = t.last_launch - e.last_launch), r;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, r) => {
              let n = r;
              const i = r < N.TOP_ROW_LENGTH;
              return (
                i || (n -= N.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, i, n),
                  children: l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", { className: "PlayIconFade" }),
                    l.createElement("img", {
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
                h.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              n =
                0 == t.length ||
                h.G3.settings.get("/settings/dashboard/hideBigPictureLibrary");
            if (r) e = l.createElement(U, null);
            else {
              let r = t.slice(0, N.TOP_ROW_LENGTH),
                i = t.slice(N.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                !n && l.createElement(H, null),
                l.createElement("h2", null, (0, u.Xx)("#RecentlyPlayed")),
                l.createElement(w, { className: "TopRow", apps: r }),
                l.createElement(w, { className: "BottomRow", apps: i })
              );
            }
            return l.createElement(
              m.lL,
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
            d.W4,
            d.jW,
          ])),
          (W = N = (0, o.gn)([p.Pi], W));
        var z = r(505),
          G = r(3371),
          K = r(8052),
          q = r(6192);
        class X extends l.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          onExitApp() {
            var e, t;
            null === VRHTML || void 0 === VRHTML || VRHTML.QuitSceneApp(),
              null === (t = (e = this.props).onExitGame) ||
                void 0 === t ||
                t.call(e);
          }
          onReturnToGame() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard("return_to_game");
          }
          onOpenAppControllerBindingSettings() {
            const e = q.H.Instance.SceneAppKey;
            G.f.OpenDeepLink(G.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = q.H.Instance.SceneAppKey;
            z.Ux.OpenDeepLink(z.Yw.Name, e);
          }
          render() {
            var e;
            const t = q.H.Instance.SceneAppKey,
              r = q.H.Instance.SceneAppName,
              n = q.H.Instance.SceneApplicationState,
              i = q.H.Instance.SceneAppIsHome,
              o = h.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              a = !(
                null !==
                  (e = h.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              d = h.G3.apps && h.G3.apps.find((e) => e.key == t);
            let p = !1;
            switch (n) {
              case s.xY.Quitting:
              case s.xY.Starting:
              case s.xY.Waiting:
                p = !0;
            }
            const g = ((e) => {
              if (null == e) return "";
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            })(d);
            return l.createElement(
              m.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
              },
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(f, { appkey: t, title: r, imageUrl: g })
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, r),
                l.createElement(
                  c.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  i
                    ? (0, u.Xx)("#Return_To_Home")
                    : (0, u.Xx)("#Return_To_Game")
                ),
                a &&
                  l.createElement(
                    K.ls,
                    {
                      icon: K.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, u.Xx)("#Controller_Bindings")
                  ),
                a &&
                  l.createElement(
                    K.ls,
                    { icon: K.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, u.Xx)("#App_Video_Settings")
                  ),
                !i &&
                  o &&
                  l.createElement(
                    c.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, u.Xx)("#Exit_Game")
                  )
              )
            );
          }
        }
        (0, o.gn)([a.ak], X.prototype, "onExitApp", null),
          (0, o.gn)([a.ak], X.prototype, "onReturnToGame", null),
          (0, o.gn)(
            [a.ak],
            X.prototype,
            "onOpenAppControllerBindingSettings",
            null
          ),
          (0, o.gn)([a.ak], X.prototype, "onOpenAppVideoSettings", null);
        var Z,
          Q,
          j,
          Y = r(6882),
          J = r(7264),
          $ = r(9942),
          ee = r(7968),
          te = r(1219),
          re = r(79);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
        })(Q || (Q = {}));
        class ne extends l.Component {
          componentDidMount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRChaperone.ForceBoundsVisible(!0);
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRChaperone.ForceBoundsVisible(!1);
          }
          render() {
            return null;
          }
        }
        function ie(e) {
          var t;
          return (
            null !== (t = null == e ? void 0 : e.startsWith(d.MI)) &&
            void 0 !== t &&
            t
          );
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(j || (j = {}));
        let oe = (Z = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new s.Nv()),
              (this.m_timeoutPopupMenuHide = 0),
              (this.m_refPopupMenu = l.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = l.createRef()),
              (this.m_refDesktopTray = l.createRef()),
              (this.m_refOverlayTransform = l.createRef()),
              (this.m_refVolumeTray = l.createRef()),
              (this.m_sOverlayToSwitchToOnLoad = d.O5),
              (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (this.m_roomViewChangedEventHandle = null),
              (this.m_linkStreamActiveEventHandle = null),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bDesktopDarkMode: !1,
                bTheaterMode: !1,
                bMuted: !1,
                sLastShownAppKey: "",
                eShowPopupMenu: j.None,
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
                bLinkStreamActive: !1,
              }),
              (window.setDashboardScale = (e) => (Z.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (Z.s_dashboardUserDistance = e)),
              h.G3.Init(!1),
              s.hz.getInstance(),
              this.m_mailbox.Init(Z.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  Z.k_sSetDashboardFadeSupressionMessage,
                  this.OnSetDashboardFadeSuppression
                ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sOverlayKeyboardClosedMessage,
                    this.onKeyboardClosed
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sSetDashboardForceBoundsVisible,
                    this.OnSetDashboardForceBoundsVisible
                  ),
                  this.m_mailbox.RegisterHandler(
                    Z.k_sLaserMouseSuppressionUpdate,
                    this.onLaserMouseSuppressionUpdate
                  );
              });
          }
          componentDidMount() {
            (window.Dashboard = this),
              (this.m_roomViewChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRCompositor.RegisterForRoomViewChangedEvents(
                      this.onRoomViewChanged
                    )),
              (this.m_linkStreamActiveEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForLinkStreamActiveEvents(
                      this.onLinkStreamActiveEvents
                    ));
            const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              t =
                e == s.a0.AppLaunch_Unknown ||
                e == s.a0.AppLaunch_Steam ||
                e == s.a0.Unknown,
              r = h.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
              ),
              n = h.G3.settings.get("/settings/steamvr/enableHomeApp"),
              i = h.G3.settings.get(d.y3);
            ((t || (!r && n)) && !i) ||
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != i ? i : ""),
                500
              ),
              (this.m_appStateChangedAutorunDisposer = (0, g.EH)(() => {
                const e = q.H.Instance.SceneApplicationState != s.xY.None;
                this.isOverlayActive(d.PF) && !e && this.switchToOverlay(d.O5);
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                }
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            var r;
            const n = this.getActiveOverlaySummonKey();
            let i = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (J.G.Instance.playSound(
                  this.state.bShown ? J.y.DashboardOpen : J.y.DashboardClose
                ),
                (i = !0)),
              this.state.bShown &&
                !i &&
                t.sActiveOverlayID != this.state.sActiveOverlayID)
            )
              switch (n) {
                case d.A4:
                  J.G.Instance.playSound(J.y.ThemeSettings);
                  break;
                case d.gB:
                  J.G.Instance.playSound(J.y.ThemeDesktop);
                  break;
                case d.O5:
                  J.G.Instance.playSound(J.y.ThemeLibrary);
                  break;
                case d.wB:
                  J.G.Instance.playSound(J.y.ThemeStore);
                  break;
                case d.PF:
                  J.G.Instance.playSound(J.y.ThemeNowPlaying);
              }
            const o = this.getActiveOverlayKey(),
              a = o ? this.state.mapOverlayState.get(o) : null,
              l = o ? t.mapOverlayState.get(o) : null,
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
                this.isOverlayActive(d.Y8)))
            )
              switch (T.y.Instance.lastBigPictureEntryPoint) {
                case T.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case T.b.QuickStore:
                  this.m_bQuickStoreShouldReturnToBigPicture = !0;
              }
            if (t.bKeyboardVisible != this.state.bKeyboardVisible)
              if (this.state.bKeyboardVisible) {
                let e = this.getActiveOverlayKey();
                VRHTML.VROverlay.ShowKeyboardForOverlay(
                  e,
                  s.Pw.Normal,
                  s.l0.SingleLine,
                  s.vS.Minimal,
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
              r = null !== (t = h.G3.settings.get(n)) && void 0 !== t ? t : 1;
            }
            let n = {
              dockLocation: m.RA.Dashboard,
              refOverlayWidget: l.createRef(),
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
              (0, s.OK)({ color_mult: 1, reflection_mult: 1 }),
              this.m_roomViewChangedEventHandle &&
                (this.m_roomViewChangedEventHandle.unregister(),
                (this.m_roomViewChangedEventHandle = null)),
              this.m_linkStreamActiveEventHandle &&
                (this.m_linkStreamActiveEventHandle.unregister(),
                (this.m_linkStreamActiveEventHandle = null));
          }
          static getDashboardDistance() {
            if (Z.s_dashboardUserDistance) return Z.s_dashboardUserDistance;
            const e = h.G3.settings.get(d.o1);
            return e == Q.Near
              ? 0.925
              : e == Q.Screenshot_Only
              ? 5
              : e == Q.Middle
              ? 1.05
              : 1.2;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = h.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2"
                  )) && void 0 !== e
                  ? e
                  : 0),
              r = h.G3.settings.get(d.o1);
            return r == Q.Screenshot_Only
              ? -0.57
              : r == Q.Near
              ? -0.07 + t
              : r == Q.Middle
              ? -0.08 + t
              : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (Z.s_dashboardUserScale) return Z.s_dashboardUserScale;
            let t = 1;
            const r = h.G3.settings.get(d.o1),
              n = r == Q.Screenshot_Only;
            return (
              (t = n ? 2 : r == Q.Near ? 0.36 : r == Q.Middle ? 0.41 : 0.47),
              n ||
                (t *=
                  null !==
                    (e =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetFloatProperty(
                            s.wU,
                            s.Uk.DashboardScale_Float
                          )) && void 0 !== e
                    ? e
                    : 1),
              t
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
          onLinkStreamActiveEvents(e) {
            this.setState({ bLinkStreamActive: e });
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
            this.setState({
              bLaserMouseSuppressionActive: e.suppression_active,
            });
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
                this.switchToOverlay(d.O5),
              this.state.mapOverlayState.has(e.overlay_key) &&
                this.state.mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              }),
              this.m_sOverlayToSwitchToOnLoad &&
                this.hasOverlay(this.m_sOverlayToSwitchToOnLoad) &&
                (this.switchToOverlay(this.m_sOverlayToSwitchToOnLoad),
                (this.m_sOverlayToSwitchToOnLoad = null)),
              this.forceUpdate();
          }
          onWindowViewCreated(e) {
            var t, r;
            this.switchToOverlay(d.gB),
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
                bWindowViewEnabled:
                  null === (t = h.G3.settings.get(d.fj)) || void 0 === t || t,
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
              ((t != m.RA.LeftHand && t != m.RA.RightHand) ||
                this.state.mapOverlayState.forEach((e, r) => {
                  e.dockLocation == t && (e.dockLocation = m.RA.Dashboard);
                }),
              (this.state.mapOverlayState.get(e).dockLocation = t),
              (this.state.mapOverlayState.get(e).xfInitial = r),
              t === m.RA.Dashboard)
            )
              if (e.startsWith(d.r4)) {
                const t = Number.parseInt(e.substring(d.r4.length + 1));
                null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t);
              } else
                e.startsWith(d.Vq) &&
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
            return l.createElement(s.sl, {
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
                  r.summon_overlay_key != d.A4 &&
                  r.summon_overlay_key != d.Y8 &&
                  r.summon_overlay_key != d.Xl &&
                  (r.summon_overlay_key.startsWith(d.r4) ||
                    r.summon_overlay_key.startsWith(d.Vq) ||
                    r.summon_overlay_key.startsWith(d.MZ) ||
                    ie(r.summon_overlay_key) ||
                    e.push(r)));
            }
            return (
              (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e
            );
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let r = this.m_mapExternalOverlays[t];
              if (r.summon_overlay_key == e) return r;
            }
            return null;
          }
          switchToOverlay(e, t) {
            var r, n;
            switch (e) {
              case d.Y8:
                T.y.Instance.latchBigPictureEntryPoint();
                break;
              case d.O5:
                this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                break;
              case d.wB:
                this.m_bQuickStoreShouldReturnToBigPicture = !1;
                break;
              case d.Us:
                let t = {
                    type: "show_app_binding",
                    app_key:
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRApplications.GetSceneApplicationKey(),
                  },
                  r = "bindingui/" + s.qA[(0, s.Op)()];
                this.m_mailbox.SendMessage(r, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = d.RM);
            }
            if (e.startsWith(d.r4)) {
              const t = Number.parseInt(e.substring(d.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (r = this.m_refDesktopView.current) ||
                  void 0 === r ||
                  r.onDesktopChange(t)),
                (e = d.gB);
            }
            let i = this.findDashboardTab(e);
            return i
              ? (this.computeFilteredOverlayTabs().includes(i) &&
                  h.G3.SetSettingsValue(
                    d.nf,
                    null !== (n = i.summon_overlay_key) && void 0 !== n ? n : ""
                  ),
                this.setState({ sActiveOverlayID: i.mountable_id }),
                I.e.instance.RecordUIEvent(
                  "SetDashboardOverlay",
                  null != t ? t : "Button",
                  e
                ),
                !0)
              : ((this.m_sOverlayToSwitchToOnLoad = e), !1);
          }
          getActiveOverlay() {
            var e;
            return this.state.sActiveOverlayID &&
              null !==
                (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID]) &&
              void 0 !== e
              ? e
              : null;
          }
          getActiveOverlaySummonKey() {
            var e, t;
            return null !==
              (t =
                null === (e = this.getActiveOverlay()) || void 0 === e
                  ? void 0
                  : e.summon_overlay_key) && void 0 !== t
              ? t
              : null;
          }
          getActiveOverlayKey() {
            var e;
            let t = this.getActiveOverlaySummonKey();
            return t == d.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == d.f8 &&
              this.switchToOverlay(d.O5);
          }
          show(e) {
            if (this.isShown()) return;
            I.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = q.H.Instance.SceneAppKey,
              r = q.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              this.switchToOverlay(r ? d.O5 : d.PF)),
              this.setState({ bShown: !0 });
            let n = { type: Z.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n),
              (0, s.qI)();
          }
          hide(e) {
            this.isShown() &&
              (this.setState({ bShown: !1, eShowPopupMenu: j.None }),
              I.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(
                !VRHTML.VRControlPanel.GetCameraRoomViewVisible()
              );
          }
          onQuickLaunchButtonClick() {
            this.m_bQuickLaunchShouldReturnToBigPicture &&
            T.y.Instance.lastBigPictureEntryPoint == T.b.QuickLaunch &&
            !this.isOverlayActive(d.Y8)
              ? T.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlay(d.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            T.y.Instance.lastBigPictureEntryPoint == T.b.QuickStore &&
            !this.isOverlayActive(d.Y8)
              ? T.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlay(d.wB);
          }
          onRecenterClick() {
            const e = VRHTML.BIsLinkClient();
            if (this.state.bLinkStreamActive)
              if (e) {
                let e = {
                  type: "instant_room_setup",
                  returnAddress: this.m_mailbox.name,
                };
                this.m_mailbox.SendMessage("driver_hmd", e);
              } else console.log("onRecenterClick not handles on server");
            else
              this.m_mailbox.SendMessage(re.BB, {
                type: re.KU,
                countdown_seconds: 3,
              });
          }
          getDashboardIconUri(e) {
            try {
              if ("turn_signal_menu.thumb" == e.icon_overlay_key)
                return "/dashboard/images/icons/turnsignal.svg";
              if (e.icon_uri) return e.icon_uri;
              if (e.icon_overlay_key)
                return null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetOverlayImage(
                      e.icon_overlay_key
                    );
            } catch (e) {}
            return null;
          }
          renderPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = h.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              r = h.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let n = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (n = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                s.Uk.DeviceCanPowerOff_Bool
              ));
            const i = q.H.Instance.SceneAppName,
              o = q.H.Instance.SceneAppIsHome;
            let a, c;
            (a = o
              ? (0, u.Xx)("#Exit_SteamVR_Home")
              : i
              ? (0, u.Xx)("#PowerMenuQuitSceneApp", i)
              : (0, u.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (c = o
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg");
            const p = this.findDashboardTab(d.Y8);
            return this.renderPopupMenu(
              l.createElement(
                l.Fragment,
                null,
                p &&
                  l.createElement(m.dy, {
                    label: (0, u.Xx)("#PowerMenuSteamOverlay"),
                    lineBelow: !0,
                    onClick: () => {
                      this.switchToOverlay(d.Y8), this.showPopupMenu(j.None);
                    },
                  }),
                n &&
                  l.createElement(m.dy, {
                    label: (0, u.Xx)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopupMenu(j.None);
                    },
                  }),
                t &&
                  e &&
                  l.createElement(m.dy, {
                    label: a,
                    imageUrl: c,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        this.showPopupMenu(j.None);
                    },
                  }),
                l.createElement(m.dy, {
                  label: (0, u.Xx)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                r &&
                  l.createElement(m.dy, {
                    label: (0, u.Xx)("#PowerMenuShutdown"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.ShutdownSystem(),
                  })
              )
            );
          }
          startPopupMenuTimeout(e) {
            this.m_timeoutPopupMenuHide = window.setTimeout(() => {
              this.setState({ eShowPopupMenu: j.None });
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
            return l.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popupMenuMouseLeave,
                onMouseEnter: this.clearPopupMenuTimeout,
                ref: this.m_refPopupMenu,
              },
              l.createElement(c.q, { className: "PowerMenuPanel" }, e)
            );
          }
          popupMenuMouseLeave(e) {
            0 == e.buttons
              ? this.startPopupMenuTimeout(100)
              : window.document.addEventListener(
                  "mouseup",
                  this.popupMenuMouseUp
                );
          }
          popupMenuMouseUp(e) {
            window.document.removeEventListener(
              "mouseup",
              this.popupMenuMouseUp
            ),
              this.m_refPopupMenu.current &&
                !(function (e, t, r) {
                  let n = r.getBoundingClientRect();
                  return (
                    e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
                this.startPopupMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, r, n;
            let i = this.getActiveOverlay();
            if (!i) return null;
            if (
              (i.summon_overlay_key == d.Y8 &&
                (T.y.Instance.lastBigPictureEntryPoint == T.b.QuickLaunch
                  ? (i = this.findDashboardTab(d.O5))
                  : T.y.Instance.lastBigPictureEntryPoint == T.b.QuickStore &&
                    (i = this.findDashboardTab(d.wB))),
              i.summon_overlay_key == d.gB)
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
                return l.createElement(m.Rk, {
                  name:
                    null === (r = this.state.mapWindows.get(e)) || void 0 === r
                      ? void 0
                      : r.title,
                  iconUrl: this.getDashboardIconUri(i),
                });
              }
              return l.createElement(m.Rk, {
                name:
                  "Desktop " +
                  (null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(i),
              });
            }
            return i.summon_overlay_key == d.RM
              ? l.createElement(m.Rk, {
                  name: (0, u.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(m.Rk, {
                  name: i.tab_name,
                  iconUrl: this.getDashboardIconUri(i),
                });
          }
          get isDarkMode() {
            return (
              (this.state.bDesktopDarkMode && this.isOverlayActive(d.gB)) ||
              this.state.bTheaterMode
            );
          }
          get screenshotMode() {
            return h.G3.settings.get(d.o1) == Q.Screenshot_Only;
          }
          get isTheaterMode() {
            return this.state.bTheaterMode;
          }
          getCollisionBoundsFadeVisualizationElements() {
            var e;
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
            if (!t) return [];
            let r = [];
            const n =
              null !== (e = h.G3.settings.get(d.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, s.M9)((0, s.eQ)(e[3], e[0])),
                i = (0, s.M9)((0, s.eQ)(e[1], e[0])),
                o = (0, s.dq)(t, i),
                a = (0, s.Pd)((0, s.tS)(t, i, o)),
                c = (0, s.LY)((0, s.eQ)(e[0], e[3]));
              if (c < 0.4) continue;
              let d = Math.max(1, Math.floor(c));
              for (let t = 0; t < d; t++) {
                let i = (t + 1) / (d + 1),
                  o = (0, s.Oq)();
                (o.rotation = a),
                  (o.translation = (0, s.q9)(i, e[0], e[3])),
                  (o.scale = { x: 0.005, y: 0.005, z: n });
                let c = l.createElement(
                  s.wx,
                  { transform: o },
                  l.createElement(
                    s.Dd,
                    { value: 0.25 },
                    l.createElement(
                      s.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      l.createElement(s.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: s.xj.Backface,
                      })
                    )
                  )
                );
                r.push(c);
              }
              if (r.length > 20) break;
            }
            return r;
          }
          render() {
            var e, t;
            const r =
                null !==
                  (e = h.G3.settings.get(
                    "/settings/dashboard/theaterModeBrightness"
                  )) && void 0 !== e
                  ? e
                  : 1,
              n =
                null !==
                  (t = h.G3.settings.get(
                    "/settings/dashboard/theaterModeReflection"
                  )) && void 0 !== t
                  ? t
                  : 1;
            if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == d.A4,
                t = h.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
                ),
                i = !q.H.Instance.SceneAppIsHome || !t;
              this.screenshotMode
                ? (0, s.OK)({ color_mult: 0, reflection_mult: 0 })
                : i && !e
                ? this.isTheaterMode
                  ? (0, s.OK)({
                      color_mult: Math.pow(r, 2.2),
                      reflection_mult: Math.pow(n, 2.2),
                    })
                  : this.isDarkMode
                  ? (0, s.OK)({ color_mult: 0.1, reflection_mult: 1 })
                  : q.H.Instance.SceneApplicationState !== s.xY.None
                  ? (0, s.OK)({ color_mult: 0.15, reflection_mult: 1 })
                  : (0, s.OK)({ color_mult: 1, reflection_mult: 1 })
                : (0, s.OK)({ color_mult: 1, reflection_mult: 1 });
            } else (0, s.OK)({ color_mult: 1, reflection_mult: 1 });
            const i = this.getActiveOverlaySummonKey(),
              o = this.state.bShown && this.state.setForcingBoundsVisible[i],
              a = o && o.size > 0;
            let c = [];
            return (
              a && (c = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                "div",
                { className: "DashboardMain" },
                a && l.createElement(ne, null),
                a && l.createElement("span", null, c),
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
              !!this.state.sActiveOverlayID &&
              this.getActiveOverlaySummonKey() == e
            );
          }
          get statusBarAnchorID() {
            let e = this.getActiveOverlayKey(),
              t =
                this.state.mapOverlayState.has(e) &&
                (this.state.mapOverlayState.get(e).dockLocation ==
                  m.RA.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    m.RA.RightHand);
            return ie(this.getActiveOverlaySummonKey()) || t
              ? m.t3
              : this.state.sActiveOverlayID + "_TopCenter";
          }
          get controlBarAnchorID() {
            let e = this.getActiveOverlayKey(),
              t =
                this.state.mapOverlayState.has(e) &&
                (this.state.mapOverlayState.get(e).dockLocation ==
                  m.RA.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    m.RA.RightHand);
            return ie(this.getActiveOverlaySummonKey()) || t
              ? m.Gl
              : this.state.sActiveOverlayID + "_BottomCenter";
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              r = m.IO.Center;
            return l.createElement(m.B8, {
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
              (this.isOverlayActive(d.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith("system.window"))) &&
              (this.state.eShowPopupMenu == j.None ||
                this.state.eShowPopupMenu == j.Windows)
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(d.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith("system.window"))
            );
          }
          getPeerButtonInfo() {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    0,
                    s.Uk.PeerButtonInfo_String
                  );
            if (e) return JSON.parse(e);
          }
          handlePeerButton() {
            const e = this.getPeerButtonInfo();
            if (!e) return;
            let t = { type: e.sMessageType };
            (t.whichDevice = VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_mailbox.SendMessage(e.sMailbox, t);
          }
          renderControlBar(e, t) {
            var r, n, i, o, a, p, g, v;
            const y = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              b = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              S = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
              f = Z.k_nControlBarWidthMeters,
              k =
                null ===
                  (r = h.G3.settings.get(
                    "/settings/dashboard/showPowerOptions"
                  )) ||
                void 0 === r ||
                r,
              M =
                null ===
                  (n = h.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === n ||
                n,
              C =
                null ===
                  (i = h.G3.settings.get(
                    "/settings/dashboard/showQuickStore"
                  )) ||
                void 0 === i ||
                i,
              R = !(
                null !==
                  (o = h.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== o &&
                o
              ),
              D = this.getPeerButtonInfo(),
              w = VRHTML.BIsLinkServer(),
              P = (VRHTML.BIsLinkClient(), this.state.bLinkStreamActive || w),
              E = q.H.Instance.SceneApplicationState,
              I = q.H.Instance.SceneAppIsHome,
              O =
                null ===
                  (a = h.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === a ||
                a
                  ? d.ml
                  : null,
              x = q.H.Instance.SceneAppKey;
            let V = "images/appimage_default.png";
            x && (V = "/app/image?app_key=" + x);
            const L =
                null !== (p = h.G3.settings.get(d.Av)) && void 0 !== p && p,
              B =
                null !== (g = h.G3.settings.get(d.k_)) && void 0 !== g ? g : 0;
            let N = L && B > 0,
              H =
                null !==
                  (v = h.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode"
                  )) &&
                void 0 !== v &&
                v,
              A = !0;
            (this.state.bLinkStreamActive || w) &&
              ((H = !1), w && ((N = !1), (A = !1)));
            let F = { y: -0.25, z: 0 };
            return (
              this.isOverlayActive(d.gB) && (F = { y: -0.4, z: 0 }),
              l.createElement(
                s.Dd,
                { value: y },
                l.createElement(
                  s.VW,
                  { color: b },
                  l.createElement(
                    s.s_,
                    {
                      curvature_origin_id: O,
                      width: f,
                      interactive: !1,
                      debug_name: "ControlBarBackground",
                      sampler: s.Vv.SingleTap,
                      reflect: 0.05,
                    },
                    l.createElement("div", {
                      className: "ControlBarBackground",
                    })
                  ),
                  l.createElement(
                    s.wx,
                    { translation: { z: 1e-5 } },
                    l.createElement(
                      s.s_,
                      {
                        curvature_origin_id: O,
                        width: f,
                        interactive: !0,
                        id: m.WR,
                        debug_name: "Controls",
                      },
                      l.createElement(
                        c.q,
                        { className: "ControlBar MainControlBar" },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          k &&
                            l.createElement(m.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, u.Xx)("#Menu"),
                              style: m.zk.Small,
                              onClick: () => this.showPopupMenu(j.Power),
                              onMouseEnter: this.clearPopupMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopupMenuTimeout(500),
                            }),
                          M &&
                            l.createElement(m.NT, {
                              style: m.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, u.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlay(d.gB),
                            }),
                          l.createElement(
                            m.dw,
                            { style: m.zk.Small },
                            l.createElement(
                              l.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                l.createElement(m.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, u.Xx)(
                                    "#X_More_Overlays",
                                    t.length
                                  ),
                                  active:
                                    this.state.eShowPopupMenu ==
                                    j.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopupMenu(j.ExternalOverlays),
                                  onMouseEnter: this.clearPopupMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopupMenuTimeout(500),
                                })
                            )
                          )
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(m.NT, {
                            label: (0, u.Xx)("#Library"),
                            imageUrl: "/dashboard/images/icons/svr_items.svg",
                            active:
                              this.isOverlayActive(d.O5) ||
                              (this.isOverlayActive(d.Y8) &&
                                T.y.Instance.lastBigPictureEntryPoint ==
                                  T.b.QuickLaunch),
                            style: m.zk.Large,
                            onClick: this.onQuickLaunchButtonClick,
                          }),
                          E != s.xY.None &&
                            l.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              l.createElement(
                                Y.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                l.createElement(
                                  s.VW,
                                  { color: b },
                                  l.createElement(
                                    s.wx,
                                    { translation: { z: 0.02 } },
                                    l.createElement(
                                      s.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: O,
                                      },
                                      l.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        l.createElement(m.NT, {
                                          label: I
                                            ? (0, u.Xx)("#SteamVR_Home")
                                            : (0, u.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(d.PF),
                                          style: m.zk.App,
                                          imageUrl: V,
                                          onClick: () =>
                                            this.switchToOverlay(d.PF),
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                          C &&
                            l.createElement(m.NT, {
                              label: (0, u.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(d.wB) ||
                                (this.isOverlayActive(d.Y8) &&
                                  T.y.Instance.lastBigPictureEntryPoint ==
                                    T.b.QuickStore),
                              style: m.zk.Large,
                              onClick: this.onQuickStoreButtonClick,
                            })
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(
                            m.dw,
                            { style: m.zk.Small },
                            H &&
                              l.createElement(m.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_theater.svg",
                                label: "Toggle Theater Mode",
                                onClick: () =>
                                  this.setState({
                                    bTheaterMode: !this.state.bTheaterMode,
                                  }),
                                active: this.state.bTheaterMode,
                              }),
                            A &&
                              l.createElement(m.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, u.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            N &&
                              l.createElement(m.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, u.Xx)("#Toggle_Room_View"),
                                onClick: this.onToggleRoomView,
                                active:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                                enabled:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                              }),
                            l.createElement(m.D6, {
                              active: this.state.eShowPopupMenu == j.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopupMenu(j.Volume),
                              onHideTray: () => this.showPopupMenu(j.None),
                              onMouseEnter: this.clearPopupMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopupMenuTimeout(500),
                            })
                          ),
                          R &&
                            l.createElement(m.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(d.A4),
                              enabled: this.hasOverlay(d.A4),
                              label: (0, u.Xx)("#Settings"),
                              style: m.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlay(d.A4),
                            }),
                          P &&
                            D &&
                            l.createElement(m.NT, {
                              imageUrl: D.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, u.Xx)(D.sButtonName),
                              style: m.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            })
                        )
                      ),
                      l.createElement(_, {
                        ref: this.m_refDesktopTray,
                        position: 0,
                        visible:
                          this.isDesktopTrayActive() &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: S,
                        bDarkMode: this.state.bDesktopDarkMode,
                        onToggleDarkMode: () =>
                          this.setState({
                            bDesktopDarkMode: !this.state.bDesktopDarkMode,
                          }),
                        onToggleWindowList: () => this.showPopupMenu(j.Windows),
                        onClearPopupMenuTimeout: () =>
                          this.clearPopupMenuTimeout(),
                        onStartPopupMenuTimeout: (e) =>
                          this.startPopupMenuTimeout(e),
                        onDockOverlay: this.onDockOverlay,
                        mapWindows: this.state.mapWindows,
                        sort_depth_bias: 0.2,
                        bWindowViewEnabled: this.state.bWindowViewEnabled,
                      }),
                      l.createElement(m.z, {
                        ref: this.m_refVolumeTray,
                        position: 0.337,
                        visible:
                          this.state.eShowPopupMenu == j.Volume &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: S,
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
                l.createElement(
                  s.wx,
                  { translation: F, scale: { y: 1.5, x: 1.5 } },
                  l.createElement(s.sl, {
                    mountedId: (0, s.iN)(d.GN, "system.keyboard"),
                  })
                )
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != m.RA.Dashboard);
            return l.createElement(
              l.Fragment,
              null,
              e.map((e) =>
                l.createElement(m.qo, {
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
                this.state.mapOverlayState.get(e).dockLocation ==
                  m.RA.Dashboard;
            return this.state.bShown && this.isOverlayActive(d.gB) && t;
          }
          onGameLaunched(e) {
            var t;
            const r =
              null !==
                (t = h.G3.settings.get(
                  "/settings/dashboard/allowTheaterMode"
                )) &&
              void 0 !== t &&
              t;
            e.starts_theater_mode && r && this.setState({ bTheaterMode: !0 }),
              (!e.is_dashboard_overlay ||
                (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, r, n;
            const i =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              o =
                null !==
                  (n =
                    null === (r = this.m_refDesktopView.current) || void 0 === r
                      ? void 0
                      : r.desktopCount) && void 0 !== n
                  ? n
                  : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                s.Y9,
                {
                  tabName: (0, u.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: d.O5,
                },
                l.createElement(W, {
                  visible: this.state.bShown && this.isOverlayActive(d.O5),
                  onGameLaunched: this.onGameLaunched,
                })
              ),
              l.createElement(
                s.Y9,
                {
                  tabName: (0, u.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: d.wB,
                },
                l.createElement(B, {
                  visible: this.state.bShown && this.isOverlayActive(d.wB),
                })
              ),
              l.createElement(
                s.Y9,
                { tabName: (0, u.Xx)("#Now_Playing"), summonOverlayKey: d.PF },
                l.createElement(X, {
                  visible: this.state.bShown && this.isOverlayActive(d.PF),
                  onExitGame: () => this.switchToOverlay(d.O5),
                })
              ),
              l.createElement(
                s.Y9,
                {
                  summonOverlayKey: d.gB,
                  tabName:
                    o > 1 ? (0, u.Xx)("#Desktop_X", i) : (0, u.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(y, {
                  visible: this.isDesktopViewVisible(),
                  onDockOverlay: this.onDockOverlay,
                  fActiveOverlayScale: this.activeOverlayScale,
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                })
              ),
              l.createElement($._, {
                visible: this.state.bShown && this.isOverlayActive(d.A4),
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
              let t = this.state.mapOverlayState.get(
                this.getActiveOverlayKey()
              );
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
                : this.switchToOverlay(d.O5),
              VRHTML.VRDashboardManager.SendOverlayClosed(t));
          }
          renderOverlayControlBar() {
            var e, t, r, n;
            const i = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            let o = !1,
              a = !1,
              c = this.getActiveOverlayKey();
            if (c) {
              let e = VRHTML.VROverlay.FindOverlay(c);
              (o =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, s.Z9.EnableControlBarKeyboard)),
                (a =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, s.Z9.EnableControlBarClose));
            }
            const p =
                null !==
                  (e = h.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin"
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              g =
                null !==
                  (t = h.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax"
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              v =
                null ===
                  (r = h.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === r ||
                r
                  ? d.ml
                  : null,
              _ = { x: 0, y: -0.15, z: 0.1 };
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                s.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003 },
                },
                l.createElement(
                  s.VW,
                  { color: i },
                  l.createElement(
                    s.s_,
                    {
                      curvature_origin_id: v,
                      origin: s.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: this.controlBarAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: s.Vv.SingleTap,
                      reflect: 0.1,
                    },
                    l.createElement("div", {
                      className: "OverlayControlBarBackground",
                    })
                  )
                )
              ),
              l.createElement(
                s.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                l.createElement(
                  s.VW,
                  { color: i },
                  l.createElement(
                    s.s_,
                    {
                      curvature_origin_id: v,
                      origin: s.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: m.WR,
                      debug_name: "ActiveOverlayControlBar",
                    },
                    l.createElement(
                      "div",
                      { className: "OverlayControlBar" },
                      l.createElement(
                        "div",
                        { className: "Section" },
                        l.createElement(
                          "div",
                          { className: "Label" },
                          (0, u.Xx)("#Size")
                        ),
                        l.createElement(te.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: p,
                          max: g,
                          value: this.activeOverlayScale,
                          valueStyleVariant: te.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        o &&
                          l.createElement(m.zN, {
                            iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                            title: this.state.bKeyboardVisible
                              ? (0, u.Xx)("#HideKeyboardTooltip")
                              : (0, u.Xx)("#ShowKeyboardTooltip"),
                            tooltipTranslation: _,
                            additionalClassNames: "Keyboard",
                            onClick: this.toggleKeyboard,
                            active: this.state.bKeyboardVisible,
                          }),
                        l.createElement(m.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, u.Xx)("#DockOnLeftController"),
                          tooltipTranslation: _,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              m.RA.LeftHand
                              ? this.onDockOverlay(e, m.RA.Dashboard)
                              : this.onDockOverlay(e, m.RA.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              s.Kg.TrackedControllerRole_LeftHand
                            ) != s.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == m.RA.LeftHand,
                        }),
                        l.createElement(m.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, u.Xx)("#DockOnRightController"),
                          tooltipTranslation: _,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              m.RA.RightHand
                              ? this.onDockOverlay(e, m.RA.Dashboard)
                              : this.onDockOverlay(e, m.RA.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              s.Kg.TrackedControllerRole_RightHand
                            ) != s.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == m.RA.RightHand,
                        }),
                        l.createElement(m.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, u.Xx)("#FloatInWorld"),
                          tooltipTranslation: _,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              m.RA.World
                              ? this.onDockOverlay(e, m.RA.Dashboard)
                              : this.onDockOverlay(e, m.RA.World);
                          },
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == m.RA.World,
                        }),
                        a &&
                          l.createElement(m.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, u.Xx)("#CloseOverlay"),
                            tooltipTranslation: _,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (n = this.m_refDesktopView.current) ||
                          void 0 === n
                            ? void 0
                            : n.renderControlBarButtons(_))
                      )
                    )
                  )
                )
              )
            );
          }
          renderDashboard() {
            var e, t, r, n, i;
            const o = this.computeFilteredOverlayTabs(),
              a = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null;
            let p = [],
              g = [],
              v =
                null !== (e = h.G3.settings.get(d.FM)) && void 0 !== e ? e : 2;
            if (o.length > v) {
              const e = h.G3.settings.get(d.nf);
              (p = [
                null !== (t = o.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : o[0],
              ]),
                (g = o.filter((e) => !p.includes(e)));
            } else p = o;
            let _ = null;
            this.isDesktopOverlayActive() && (_ = 2048);
            let y = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && y.push(e);
            });
            const b = this.screenshotMode,
              S = b ? 2.5 : 1.8;
            let f = !1,
              k = !0,
              M = !1,
              C = this.getActiveOverlayKey();
            if (C) {
              let e = VRHTML.VROverlay.FindOverlay(C);
              (M = !!e && VRHTML.VROverlay.GetFlag(e, s.Z9.EnableControlBar)),
                (k =
                  !this.state.mapOverlayState.has(C) ||
                  this.state.mapOverlayState.get(C).dockLocation ==
                    m.RA.Dashboard),
                (f =
                  this.state.mapOverlayState.has(C) &&
                  this.state.mapOverlayState.get(C).dockLocation == m.RA.World);
            }
            this.state.bLaserMouseSuppressionActive && (M = !1);
            let R = 2,
              D = 2.5;
            const w = h.G3.settings.get("/settings/dashboard/theaterPosition");
            w == Q.Near
              ? ((R *= 1), (D *= 1))
              : w == Q.Middle
              ? ((R *= 4), (D *= 2.5))
              : w == Q.Far && ((R *= 12), (D *= 8));
            const T =
                null !==
                  (r =
                    0.01 *
                    h.G3.settings.get(
                      "/settings/dashboard/theaterVerticalOffsetCm"
                    )) && void 0 !== r
                  ? r
                  : 0,
              P =
                null ===
                  (n = h.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === n ||
                n,
              E = P ? d.ml : null;
            let I,
              O,
              x,
              V,
              L,
              B = 0.05,
              N =
                null !==
                  (i = h.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections"
                  )) &&
                void 0 !== i &&
                i,
              H = this.state.bTheaterMode
                ? { y: -1.2, z: 1 }
                : { y: -1.2, z: 0.15 },
              A = this.state.bTheaterMode
                ? { x: 0.75, y: 0.75, z: 0.75 }
                : { x: 1, y: 1, z: 1 },
              F = !P && this.state.bTheaterMode ? 0.75 : 1,
              U = P ? 1 : 0;
            return (
              this.state.bTheaterMode
                ? ((I = { y: -0.8 * D + T, z: -R }),
                  (O = D),
                  (x = 1.72),
                  (V = 0.82),
                  (L = 10))
                : ((I = { y: M ? -0.9 : -1.03375, z: 0.05 }),
                  (O = 1),
                  (x = 2),
                  (V = 0.68),
                  (L = 5),
                  (N = !1)),
              l.createElement(
                s.eK,
                { bContinuousRelatch: this.state.bPlacementModeActive },
                l.createElement(s.wx, { id: E, translation: { z: S } }),
                l.createElement(
                  s.wx,
                  {
                    translation: {
                      x: b ? 0.1 : 0,
                      y: Z.getDashboardVerticalPosition(),
                      z: -Z.getDashboardDistance() * (b ? 1.1 : 1),
                    },
                    rotation: { x: b ? -20 : 0 },
                    scale: Z.getDashboardScale(),
                  },
                  l.createElement(
                    s.wx,
                    {
                      parent_id: this.statusBarAnchorID,
                      translation: { y: 0.008 },
                      scale: { x: F, y: F },
                    },
                    l.createElement(
                      s.VW,
                      { color: a },
                      l.createElement(
                        s.s_,
                        {
                          curvature_origin_id: E,
                          origin: s.Ic.BottomCenter,
                          interactive: !1,
                          target_dpi_panel_id: m.WR,
                          debug_name: "StatusBar",
                          reflect: 0.1,
                        },
                        l.createElement(
                          "div",
                          { className: "StatusBar", style: { width: _ } },
                          l.createElement(
                            "div",
                            { className: "Section Left" },
                            this.renderStatusBarTitle(),
                            l.createElement(m.j6, {
                              role: s.Kg.TrackedControllerRole_LeftHand,
                              style: ee.A.HorizontalPips,
                            })
                          ),
                          l.createElement(
                            "div",
                            { className: "Section Center" },
                            l.createElement(m.j6, {
                              deviceIndex: s.wU,
                              style: ee.A.VerticalBattery,
                            }),
                            l.createElement(m.M3, null)
                          ),
                          l.createElement(
                            "div",
                            { className: "Section Right" },
                            l.createElement(m.j6, {
                              role: s.Kg.TrackedControllerRole_RightHand,
                              style: ee.A.HorizontalPips,
                            }),
                            l.createElement(
                              "div",
                              { className: "SteamLogo" },
                              l.createElement("img", {
                                src: "/dashboard/images/icons/vr_steam.svg",
                              })
                            )
                          )
                        )
                      )
                    )
                  ),
                  l.createElement(
                    s.wx,
                    {
                      id: "active_overlay_transform",
                      translation: I,
                      ref: this.m_refOverlayTransform,
                    },
                    l.createElement(
                      s.wx,
                      { scale: { x: O, y: O } },
                      !f && k && this.renderActiveOverlay(),
                      !f &&
                        !k &&
                        l.createElement(
                          m.lL,
                          {
                            additionalClassNames: M ? "WithControlBar" : "",
                            visible: !0,
                          },
                          l.createElement(
                            "div",
                            { className: "NoDesktopFound" },
                            l.createElement(
                              "h2",
                              null,
                              this.state.mapOverlayState.get(C).dockLocation ==
                                m.RA.LeftHand &&
                                (0, u.Xx)("#DockedOnLeftController"),
                              this.state.mapOverlayState.get(C).dockLocation ==
                                m.RA.RightHand &&
                                (0, u.Xx)("#DockedOnRightController")
                            ),
                            l.createElement(
                              c.z,
                              {
                                className: "ButtonControl",
                                onClick: () => {
                                  this.onDockOverlay(C, m.RA.Dashboard);
                                },
                              },
                              (0, u.Xx)("#DockHere")
                            )
                          )
                        ),
                      N &&
                        l.createElement(
                          s.wx,
                          { translation: { y: V, z: 0.25 } },
                          l.createElement(s.bt, {
                            width: 2.8,
                            height: x,
                            "near-z": -1,
                            "far-z": 1,
                            debug: !1,
                            specular: { color: { r: B, g: B, b: B } },
                            diffuse: { size: L, resolution: 512 },
                          })
                        )
                    )
                  ),
                  M && k && this.renderOverlayControlBar(),
                  l.createElement(
                    s.wx,
                    { translation: H, scale: A },
                    l.createElement(
                      s.wx,
                      { rotation: { x: -35 }, curvature_pitch: -35 },
                      this.renderControlBar(p, g)
                    ),
                    this.state.eShowPopupMenu == j.Power &&
                      l.createElement(
                        s.wx,
                        {
                          translation: { x: -0.4, y: 0.15, z: 0.05 },
                          rotation: { y: 19 * U },
                        },
                        l.createElement(
                          s.s_,
                          {
                            curvature_origin_id: E,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: s.Ic.BottomRight,
                            debug_name: "Power Menu",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPowerMenu()
                        )
                      ),
                    this.state.eShowPopupMenu == j.ExternalOverlays &&
                      l.createElement(
                        s.wx,
                        {
                          translation: { x: 0.2, y: 0.15, z: 0.05 },
                          rotation: { y: 6 * U },
                        },
                        l.createElement(
                          s.s_,
                          {
                            curvature_origin_id: E,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: s.Ic.BottomRight,
                            debug_name: "OverlaysList",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPopupMenu(
                            l.createElement(
                              l.Fragment,
                              null,
                              " ",
                              g.map((e) =>
                                l.createElement(m.dy, {
                                  key: e.mountable_id,
                                  imageUrl: this.getDashboardIconUri(e),
                                  label: e.tab_name,
                                  onClick: () => {
                                    this.switchToOverlay(e.summon_overlay_key),
                                      this.showPopupMenu(j.None);
                                  },
                                })
                              ),
                              " "
                            )
                          )
                        )
                      ),
                    this.state.eShowPopupMenu == j.Windows &&
                      l.createElement(
                        s.wx,
                        {
                          translation: { x: 1.25, y: -0.1, z: 0.35 },
                          rotation: { y: -16 * U },
                        },
                        l.createElement(
                          s.s_,
                          {
                            curvature_origin_id: E,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: s.Ic.BottomRight,
                            debug_name: "WindowList",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPopupMenu(
                            l.createElement(
                              l.Fragment,
                              null,
                              " ",
                              y.map((e) =>
                                l.createElement(m.dy, {
                                  key: e.hwnd,
                                  imageUrl:
                                    "/dashboard/images/icons/icon_add.png",
                                  label: e.title,
                                  onClick: () => {
                                    let t = {
                                      type: "request_spawn_window_view",
                                      hwnd: e.hwnd,
                                    };
                                    this.m_mailbox.SendMessage(
                                      "desktopview",
                                      t
                                    ),
                                      this.showPopupMenu(j.None);
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
          (oe.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (oe.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (oe.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (oe.k_sWindowViewCreatedMessage = "window_view_created"),
          (oe.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (oe.k_sUpdateWindowListMessage = "update_window_list"),
          (oe.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (oe.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (oe.k_sLaserMouseSuppressionUpdate =
            "laser_mouse_suppression_update"),
          (oe.k_nControlBarWidthMeters = 2.667),
          (oe.s_dashboardUserDistance = void 0),
          (oe.s_dashboardUserScale = void 0),
          (0, o.gn)(
            [a.ak],
            oe.prototype,
            "OnSetDashboardFadeSuppression",
            null
          ),
          (0, o.gn)([a.ak], oe.prototype, "onRoomViewChanged", null),
          (0, o.gn)([a.ak], oe.prototype, "onLinkStreamActiveEvents", null),
          (0, o.gn)(
            [a.ak],
            oe.prototype,
            "OnSetDashboardForceBoundsVisible",
            null
          ),
          (0, o.gn)(
            [a.ak],
            oe.prototype,
            "onLaserMouseSuppressionUpdate",
            null
          ),
          (0, o.gn)([a.ak], oe.prototype, "onDashboardOverlayCreated", null),
          (0, o.gn)([a.ak], oe.prototype, "onDashboardOverlayDestroyed", null),
          (0, o.gn)([a.ak], oe.prototype, "onUpdateDashboardTabs", null),
          (0, o.gn)([a.ak], oe.prototype, "onWindowViewCreated", null),
          (0, o.gn)([a.ak], oe.prototype, "onWindowViewDestroyed", null),
          (0, o.gn)([a.ak], oe.prototype, "onUpdateWindowList", null),
          (0, o.gn)([a.ak], oe.prototype, "onUpdateDebugInfo", null),
          (0, o.gn)([a.ak], oe.prototype, "onDockOverlay", null),
          (0, o.gn)([a.ak], oe.prototype, "show", null),
          (0, o.gn)([a.ak], oe.prototype, "hide", null),
          (0, o.gn)([a.ak], oe.prototype, "setPlacementModeActive", null),
          (0, o.gn)([a.ak], oe.prototype, "onToggleRoomView", null),
          (0, o.gn)([a.ak], oe.prototype, "onQuickLaunchButtonClick", null),
          (0, o.gn)([a.ak], oe.prototype, "onQuickStoreButtonClick", null),
          (0, o.gn)([a.ak], oe.prototype, "onRecenterClick", null),
          (0, o.gn)([a.ak], oe.prototype, "renderPowerMenu", null),
          (0, o.gn)([a.ak], oe.prototype, "startPopupMenuTimeout", null),
          (0, o.gn)([a.ak], oe.prototype, "clearPopupMenuTimeout", null),
          (0, o.gn)([a.ak], oe.prototype, "showPopupMenu", null),
          (0, o.gn)([a.ak], oe.prototype, "popupMenuMouseLeave", null),
          (0, o.gn)([a.ak], oe.prototype, "popupMenuMouseUp", null),
          (0, o.gn)([g.Fl], oe.prototype, "isDarkMode", null),
          (0, o.gn)([g.Fl], oe.prototype, "screenshotMode", null),
          (0, o.gn)([g.Fl], oe.prototype, "isTheaterMode", null),
          (0, o.gn)(
            [a.ak],
            oe.prototype,
            "renderExternalOverlayControlBarButton",
            null
          ),
          (0, o.gn)([a.ak], oe.prototype, "isDesktopTrayActive", null),
          (0, o.gn)([a.ak], oe.prototype, "isDesktopOverlayActive", null),
          (0, o.gn)([a.ak], oe.prototype, "handlePeerButton", null),
          (0, o.gn)([a.ak], oe.prototype, "isDesktopViewVisible", null),
          (0, o.gn)([a.ak], oe.prototype, "onGameLaunched", null),
          (0, o.gn)([a.ak], oe.prototype, "toggleKeyboard", null),
          (0, o.gn)([a.ak], oe.prototype, "onKeyboardClosed", null),
          (0, o.gn)([g.Fl], oe.prototype, "activeOverlayScale", null),
          (0, o.gn)([a.ak], oe.prototype, "onActiveOverlayScaleChange", null),
          (0, o.gn)([a.ak], oe.prototype, "onActiveOverlayClosed", null),
          (0, o.gn)([g.LO], oe, "s_dashboardUserDistance", void 0),
          (0, o.gn)([g.LO], oe, "s_dashboardUserScale", void 0),
          (oe = Z = (0, o.gn)([p.Pi], oe));
      },
      7679: (e, t, r) => {
        r.d(t, {
          B8: () => W,
          D6: () => j,
          Gl: () => P,
          IO: () => F,
          M3: () => L,
          NT: () => z,
          RA: () => O,
          Rk: () => K,
          WR: () => E,
          dw: () => U,
          dy: () => B,
          j4: () => q,
          j6: () => G,
          lL: () => I,
          qo: () => V,
          t3: () => T,
          z: () => X,
          zN: () => Y,
          zk: () => A,
        });
        var n,
          i,
          o,
          s = r(655),
          a = r(7294),
          l = r(7056),
          c = r(3868),
          d = r(1818),
          u = r(7264),
          h = r(1058),
          p = r(6321),
          m = r(197),
          g = r(2188),
          v = r(6882),
          _ = r(7062),
          y = r(9392),
          b = r(1219),
          S = r(4435),
          f = r(9981),
          k = r(7968),
          M = r(3446),
          C = r(6547),
          R = r(8322),
          D = r.n(R),
          w = r(1307);
        const T = "DashboardPanelTopCenter",
          P = "DashboardPanelBottomCenter",
          E = "DashboardControlStrip",
          I = (e) => {
            var t, r, n;
            const i = a.useRef(null),
              o = a.useRef(null);
            a.useEffect(() => {
              var e, t;
              return null === (e = i.current) || void 0 === e
                ? void 0
                : e.setFloatingViewStack(
                    null === (t = o.current) || void 0 === t
                      ? void 0
                      : t.viewStack
                  );
            });
            const s = null === (t = e.scrollable) || void 0 === t || t,
              l =
                null !== (r = e.foregroundReflectMultiplier) && void 0 !== r
                  ? r
                  : 1,
              c =
                null ===
                  (n = M.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === n ||
                n
                  ? m.ml
                  : null;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                p.s_,
                {
                  visibility: e.visible ? p.Bl.Visible : p.Bl.Hidden,
                  debug_name: "homepanelbackground",
                  curvature_origin_id: c,
                  origin: p.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  target_dpi_panel_id: E,
                  target_dpi_multiplier: 2,
                  reflect: 0.01,
                  sampler: p.Vv.SingleTap,
                },
                a.createElement(p.at, { id: T, location: p.Ic.TopCenter }),
                a.createElement(
                  C.vz,
                  { ref: i },
                  a.createElement("div", {
                    className: (0, h.LJ)(
                      "DashboardPanelBackground",
                      e.additionalClassNames
                    ),
                    style: e.additionalStyle,
                  })
                ),
                a.createElement(p.at, { id: P, location: p.Ic.BottomCenter })
              ),
              a.createElement(
                p.wx,
                { translation: { z: 1e-5 } },
                a.createElement(
                  p.s_,
                  {
                    visibility: e.visible ? p.Bl.Visible : p.Bl.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: c,
                    origin: p.Ic.BottomCenter,
                    interactive: !0,
                    scrollable: s,
                    target_dpi_panel_id: E,
                    reflect: 0.2 * l,
                  },
                  a.createElement(
                    C.sC,
                    { ref: o },
                    a.createElement(
                      d.q,
                      null,
                      a.createElement(
                        y.P,
                        {
                          scrollDirection: s ? y.I.Vertical : y.I.None,
                          className: (0, h.LJ)(
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
        var O;
        function x(e) {
          switch (e) {
            case O.LeftHand:
              return "/user/hand/left";
            case O.RightHand:
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
        })(O || (O = {}));
        let V = (n = class extends a.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.GetDefaultScaleForLocation(),
                xfTransform: (0, p.Oq)(),
                sParent: x(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = p.Kf),
              (this.m_moveDeviceRole = p.Kg.TrackedControllerRole_Invalid);
          }
          GetDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case O.Dashboard:
              case O.LeftHand:
              case O.RightHand:
                return 0.25;
              case O.World:
                return 0.5;
            }
          }
          SetInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case O.LeftHand:
                case O.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, n.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case O.World: {
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
            let e = (0, p.Oq)();
            switch (
              ((e.rotation = (0, p.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case O.Dashboard:
              case O.LeftHand:
              case O.RightHand:
                this.setState({ xfTransform: e });
                break;
              case O.World:
                let t = 0;
                p.hz
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
                  xfTransform: (0, p.Oq)(),
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
            if (!this.state.bIsMoving) return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              p.Kg.TrackedControllerRole_LeftHand
            ) != p.Kf && (t = VRHTML.GetPose("/user/hand/left", p.zq.Standing));
            let r = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              p.Kg.TrackedControllerRole_RightHand
            ) != p.Kf &&
              (r = VRHTML.GetPose("/user/hand/right", p.zq.Standing));
            let i = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                r && i.push({ pose: r, location: O.RightHand });
                break;
              case "/user/hand/right":
                t && i.push({ pose: t, location: O.LeftHand });
                break;
              case "/user/head":
                t && i.push({ pose: t, location: O.LeftHand }),
                  r && i.push({ pose: r, location: O.RightHand });
            }
            if (0 == i.length)
              return void setTimeout(this.computeDestination, n.sfMovePulseMS);
            let o = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform
            );
            i.forEach((e) => {
              let t = VRHTML.ChangeBasis(o, e.pose.xfDeviceToAbsoluteTracking);
              (0, p.LY)(t.translation) > n.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (w.LJ.Instance.triggerHaptic(w.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: O.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == O.World &&
                      this.state.destination == O.World)) &&
                  (w.LJ.Instance.triggerHaptic(w.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, n.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n"
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == p.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex
              );
            let e,
              t,
              r = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.zq.Standing);
            switch (this.props.dockLocation) {
              case O.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    p.Kg.TrackedControllerRole_LeftHand
                  ) == p.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", p.zq.Standing);
                break;
              case O.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    p.Kg.TrackedControllerRole_RightHand
                  ) == p.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", p.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, p.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: p.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case p.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case p.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let n = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              i = VRHTML.ChangeBasis(n, r.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: i,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == O.World,
                bIsMoving: !0,
              },
              this.computeDestination
            ),
              window.addEventListener("mouseup", this.endMove);
          }
          endMove() {
            if (!this.state.bIsMoving) return;
            let e, t;
            if (
              "/user/hand/left" == this.state.sParent ||
              this.state.destination == O.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  p.Kg.TrackedControllerRole_LeftHand
                ) == p.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", p.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == O.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  p.Kg.TrackedControllerRole_RightHand
                ) == p.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", p.zq.Standing);
            }
            let r,
              n = {
                xfDeviceToAbsoluteTracking: (0, p.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: p.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case O.LeftHand:
                r = e;
                break;
              case O.RightHand:
                r = t;
                break;
              default:
                r = n;
            }
            let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.zq.Standing),
              o = VRHTML.MultiplyTransforms(
                i.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              s = VRHTML.ChangeBasis(o, r.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: s,
              sParent: x(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                s
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let r = { x: 0, y: 0 };
            try {
              r = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let i =
                (null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1) * this.state.fOverlayScale,
              o = (i * r.y) / r.x;
            if (!this.props.bVisible)
              return a.createElement(
                p.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                a.createElement(
                  p.s_,
                  {
                    overlay_key: this.props.sOverlayKey,
                    height: o,
                    width: void 0,
                    interactive: !0,
                    origin: p.Ic.BottomCenter,
                  },
                  a.createElement(p.sl, {
                    mountedId: (0, p.iN)(
                      m.GN,
                      this.props.sOverlayKey + ".cursor"
                    ),
                  })
                )
              );
            let s = o + n.sfOverlayTrayHeight,
              l = Math.max(i, 0.175),
              c = s / 2 - n.sfOverlayTrayHeight;
            return a.createElement(
              p.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              a.createElement(
                p.wx,
                {
                  translation: { y: c, z: -0.005 },
                  scale: { x: l, y: s, z: 0.008 },
                },
                a.createElement(
                  p.VW,
                  { color: { r: 0.016, g: 0.017, b: 0.02 } },
                  a.createElement(p.gQ, { solid: !0, source: "unit_cube" })
                )
              ),
              a.createElement(
                p.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: o,
                  width: void 0,
                  interactive: !0,
                  origin: p.Ic.BottomCenter,
                },
                a.createElement(p.sl, {
                  mountedId: (0, p.iN)(
                    m.GN,
                    this.props.sOverlayKey + ".cursor"
                  ),
                })
              ),
              a.createElement(
                p.s_,
                {
                  height: n.sfOverlayTrayHeight,
                  width: void 0,
                  interactive: !0,
                  origin: p.Ic.TopCenter,
                },
                a.createElement(
                  "div",
                  { className: "WindowTray" },
                  a.createElement(b.iR, {
                    additionalClassName: "WindowTraySlider",
                    min: n.sfOverlayScaleMin,
                    max: n.sfOverlayScaleMax,
                    value: this.state.fOverlayScale,
                    valueStyleVariant: b.px.OnHandle,
                    onChange: this.onOverlayScaleChanged,
                    detents: [0.25, 0.5, 1],
                    renderValue: (e) => (100 * e).toFixed(0) + "%",
                  }),
                  a.createElement(
                    d.z,
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
                    d.z,
                    {
                      className: "WindowTrayButton",
                      key: "undock",
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                      title: "Return to Dashboard",
                      onClick: () => {
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          O.Dashboard
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
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    p.wx,
                    {
                      parent_path:
                        this.state.destination == O.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    a.createElement(p.x1, {
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
        (V.sfMaxDockDist = 0.4),
          (V.sfMovePulseMS = 100),
          (V.sfOverlayTrayHeight = 0.025),
          (V.sfOverlayScaleMin = 0.1),
          (V.sfOverlayScaleMax = 2),
          (0, s.gn)([l.ak], V.prototype, "onOverlayScaleChanged", null),
          (0, s.gn)([l.ak], V.prototype, "computeDestination", null),
          (0, s.gn)([l.ak], V.prototype, "startMove", null),
          (0, s.gn)([l.ak], V.prototype, "endMove", null),
          (V = n = (0, s.gn)([_.Pi], V));
        class L extends a.Component {
          constructor(e) {
            super(e), (this.state = { time: new Date() });
          }
          componentDidMount() {
            let e = 60 - (new Date().getSeconds() % 60) + 0.01;
            this.m_clockUpdateTimeout = window.setTimeout(
              this.updateTime,
              1e3 * e
            );
          }
          componentWillUnmount() {
            clearTimeout(this.m_clockUpdateTimeout);
          }
          updateTime() {
            this.setState({ time: new Date() }),
              (this.m_clockUpdateTimeout = window.setTimeout(
                this.updateTime,
                6e4
              ));
          }
          render() {
            const e = c.LJ.GetLocale();
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
        function B(e) {
          return a.createElement(
            d.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            a.createElement("div", { className: "HoverGradient" }),
            a.createElement("div", { className: "ClickGradient" }),
            a.createElement("span", null, e.label),
            e.lineBelow && a.createElement("div", { className: "LineBelow" })
          );
        }
        (0, s.gn)([l.ak], L.prototype, "updateTime", null);
        let N = (i = class extends a.Component {
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
                null ===
                  (e = M.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? m.ml
                  : null;
            return a.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              a.createElement(
                v.d,
                { allowableParentSelectors: [".DashboardMain"] },
                a.createElement(
                  p.wx,
                  { translation: r },
                  a.createElement(
                    p.s_,
                    {
                      visibility: t ? p.Bl.Visible : p.Bl.SkipInSceneGraph,
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
        (N.s_CurrentlyShownTooltip = null),
          (0, s.gn)([g.Fl], N.prototype, "isShowingTooltip", null),
          (0, s.gn)([g.aD.bound], N.prototype, "show", null),
          (0, s.gn)([g.aD.bound], N.prototype, "hide", null),
          (0, s.gn)([g.LO], N, "s_CurrentlyShownTooltip", void 0),
          (N = i = (0, s.gn)([_.Pi], N));
        class H extends a.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !H.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  H.k_rsThumbnailHashesToInvert.indexOf(D().hash(e)) >= 0 &&
                  (t = !0),
                H.s_mapShouldInvertThumbnail.set(e, t);
            }
            return H.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              r = H.ShouldInvertThumbnail(this.props.src);
            return a.createElement(
              "div",
              { className: "Icon" },
              t &&
                a.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              a.createElement("img", {
                className: (0, h.LJ)(["BlackToWhite", r]),
                src: this.props.src,
              })
            );
          }
        }
        var A, F;
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
          })(A || (A = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(F || (F = {}));
        const U = (e) =>
          a.createElement(
            "div",
            { className: (0, h.LJ)("ControlBarGroup", A[e.style]) },
            e.children
          );
        let W = class extends a.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = a.createRef());
          }
          onMouseEnter() {
            var e, t, r;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (r = (t = this.props).onMouseEnter) ||
                void 0 === r ||
                r.call(t);
          }
          onMouseLeave() {
            var e, t, r;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (r = (t = this.props).onMouseLeave) ||
                void 0 === r ||
                r.call(t);
          }
          render() {
            var e;
            return a.createElement(
              d.z,
              {
                className: (0, h.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  F[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : F.Center
                  ] + "Image",
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
                pressSoundEffect: u.y.ControlBarButtonPress,
                releaseSoundEffect: u.y.ControlBarButtonRelease,
              },
              this.props.centerPanelAnchorID &&
                a.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  a.createElement(v.d, {
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
        (0, s.gn)([l.ak], W.prototype, "onMouseEnter", null),
          (0, s.gn)([l.ak], W.prototype, "onMouseLeave", null),
          (W = (0, s.gn)([_.Pi], W));
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
              (this.deviceIndex = p.Kf),
              (this.batteryLevelStable = null),
              (this.devicePowerUsage = null),
              (this.state = { batteryIconPath: null });
          }
          componentDidMount() {
            (this.m_BatteryStateChangedCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForBatteryStateChangedEvents(
                    this.onBatteryStateChanged
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceRoleChangedEvents(
                      this.onDeviceRoleChanged
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent)),
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
              r = p.Kf;
            if (
              (void 0 !== this.props.role
                ? (r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (r = this.props.deviceIndex),
              r != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = r)),
              r != p.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  r,
                  p.Uk.DeviceProvidesBatteryStatus_Bool
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  r,
                  p.Uk.DeviceBatteryPercentage_Float
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  r,
                  p.Uk.DeviceIsCharging_Bool
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
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
                p.Uk.DevicePowerUsage_Float
              );
            }
            let n = k.X.GetBatteryIcon(
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
            (e != p.XX.Activated && e != p.XX.Deactivated) || this.update();
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
          (0, s.gn)([l.ak], G.prototype, "updateControllerStatus", null),
          (0, s.gn)([l.ak], G.prototype, "onBatteryStateChanged", null),
          (0, s.gn)([l.ak], G.prototype, "onDeviceRoleChanged", null),
          (0, s.gn)([l.ak], G.prototype, "onDeviceEvent", null),
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
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null));
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
              ((this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved
              )),
              this.m_resizeObserver.observe(this.m_refPanelElem.current),
              this.updateBackgroundSize());
          }
          render() {
            var e;
            const t = this.props.position,
              r = Math.asin(t) / Math.PI,
              n =
                null ===
                  (e = M.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? m.ml
                  : null;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                p.at,
                { location: { x: t, y: -1 } },
                a.createElement(p.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(r),
                    z: -0.03 * Math.abs(r),
                  },
                  rotation: { y: 15 * r, z: 2 * r },
                })
              ),
              a.createElement(
                v.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                a.createElement(
                  p.VW,
                  { color: this.props.tintColor },
                  a.createElement(
                    f.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    a.createElement(
                      p.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04, z: -0.01 },
                      },
                      a.createElement(
                        p.s_,
                        {
                          curvature_origin_id: n,
                          origin: p.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          target_dpi_panel_id: E,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        a.createElement(
                          "div",
                          {
                            className: (0, h.LJ)(
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
                        p.wx,
                        { translation: { z: -1e-5 } },
                        a.createElement(
                          p.s_,
                          {
                            curvature_origin_id: n,
                            origin: p.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: E,
                            target_dpi_multiplier: 2,
                            reflect: 0.04,
                            sampler: p.Vv.SingleTap,
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
        (0, s.gn)([l.ak], q.prototype, "onResizeObserved", null),
          (0, s.gn)([l.ak], q.prototype, "updateBackgroundSize", null),
          (0, s.gn)([l.ak], q.prototype, "onPortalDidMount", null);
        let X = class extends a.Component {
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
              M.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume"
              ) && M.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!M.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice"
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
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
                  Q,
                  {
                    onClick: S.f.Instance.toggleMicrophoneMute,
                    title: S.f.Instance.microphoneMuted
                      ? (0, c.Xx)("#UnmuteMicrophone")
                      : (0, c.Xx)("#MuteMicrophone"),
                  },
                  a.createElement("img", {
                    className: "BlackToWhite",
                    src: S.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  })
                ),
                a.createElement(Z, {
                  title: (0, c.Xx)("#MicrophoneVolume"),
                  value: S.f.Instance.microphoneVolume,
                  onChange: S.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: b.px.OnHandle,
                  additionalClassName: (0, h.LJ)([
                    "Muted",
                    S.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: u.y.VolumePreview,
                })
              ),
              this.showAudioMirrorControls &&
                a.createElement(
                  "div",
                  { className: "Section" },
                  a.createElement(
                    Q,
                    {
                      onClick: S.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: S.f.Instance.mirrorMuted
                        ? (0, c.Xx)("#UnmuteAudioMirror")
                        : (0, c.Xx)("#MuteAudioMirror"),
                    },
                    a.createElement("img", {
                      className: "BlackToWhite",
                      src: S.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    })
                  ),
                  a.createElement(Z, {
                    title: (0, c.Xx)("#AudioMirrorVolume"),
                    value: S.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: S.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: b.px.OnHandle,
                    additionalClassName: (0, h.LJ)([
                      "Muted",
                      S.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: u.y.VolumePreview,
                  })
                ),
              a.createElement(
                "div",
                { className: "Section" },
                a.createElement(
                  Q,
                  {
                    onClick: S.f.Instance.toggleMute,
                    title: S.f.Instance.muted
                      ? (0, c.Xx)("#Unmute_Headset")
                      : (0, c.Xx)("#Mute_Headset"),
                  },
                  a.createElement("img", {
                    className: "BlackToWhite",
                    src: S.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  })
                ),
                a.createElement(Z, {
                  title: (0, c.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: S.f.Instance.volume,
                  onChange: S.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: b.px.OnHandle,
                  additionalClassName: (0, h.LJ)(["Muted", S.f.Instance.muted]),
                  interactionEndSoundEffect: u.y.VolumePreview,
                })
              )
            );
          }
        };
        (0, s.gn)([l.ak], X.prototype, "onSliderMouseEnter", null),
          (0, s.gn)([l.ak], X.prototype, "onSliderMouseLeave", null),
          (0, s.gn)([l.ak], X.prototype, "onSliderFinalChange", null),
          (0, s.gn)([g.Fl], X.prototype, "showAudioMirrorControls", null),
          (0, s.gn)([g.Fl], X.prototype, "enableAudioMirrorControls", null),
          (X = (0, s.gn)([_.Pi], X));
        let Z = class extends a.Component {
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
                a.createElement(N, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              a.createElement(
                b.iR,
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
        (0, s.gn)([l.ak], Z.prototype, "onMouseEnter", null),
          (0, s.gn)([l.ak], Z.prototype, "onMouseLeave", null),
          (0, s.gn)([l.ak], Z.prototype, "onInteractionStart", null),
          (0, s.gn)([l.ak], Z.prototype, "onInteractionEnd", null),
          (Z = (0, s.gn)([_.Pi], Z));
        let Q = class extends a.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = a.createRef());
          }
          onMouseEnter(e) {
            var t, r, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (n = (r = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(r, e);
          }
          onMouseLeave(e) {
            var t, r, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (n = (r = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(r, e);
          }
          render() {
            return a.createElement(
              d.z,
              Object.assign({}, this.props, {
                className: (0, h.LJ)(
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
        (0, s.gn)([l.ak], Q.prototype, "onMouseEnter", null),
          (0, s.gn)([l.ak], Q.prototype, "onMouseLeave", null),
          (Q = (0, s.gn)([_.Pi], Q));
        let j = (o = class extends a.Component {
          constructor() {
            super(...arguments), (this.m_vecOriginalMousePosition = null);
          }
          componentWillUnmount() {
            this.stopSliding();
          }
          get slider() {
            var e;
            return null === (e = this.props.refVolumeTray.current) ||
              void 0 === e
              ? void 0
              : e.slider;
          }
          onButtonMouseDown(e) {
            var t, r;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              null === (r = (t = this.props).onShowTray) ||
                void 0 === r ||
                r.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, p.JR)((0, p.Zj)(t, this.m_vecOriginalMousePosition)) >
              o.MIN_DRAG_THRESHOLD && this.startSliding(t);
          }
          onWindowMouseUp(e) {
            this.stopSliding();
          }
          startSliding(e) {
            var t;
            null === (t = this.slider) ||
              void 0 === t ||
              t.startExternalSliding(e);
          }
          stopSliding() {
            var e, t, r, n;
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              (null === (e = this.slider) || void 0 === e
                ? void 0
                : e.isSliding) &&
                (null === (r = (t = this.props).onHideTray) ||
                  void 0 === r ||
                  r.call(t)),
              null === (n = this.slider) ||
                void 0 === n ||
                n.stopExternalSliding();
          }
          render() {
            return a.createElement(W, {
              imageUrl: S.f.Instance.muted
                ? "/dashboard/images/icons/svr_volume_mute.svg"
                : "/dashboard/images/icons/svr_volume.svg",
              active: this.props.active,
              label: this.props.active ? null : (0, c.Xx)("#Volume"),
              onMouseDown: this.onButtonMouseDown,
              onMouseEnter: this.props.onMouseEnter,
              onMouseLeave: this.props.onMouseLeave,
            });
          }
        });
        (j.MIN_DRAG_THRESHOLD = 35),
          (0, s.gn)([l.ak], j.prototype, "onButtonMouseDown", null),
          (0, s.gn)([l.ak], j.prototype, "onWindowMouseMove", null),
          (0, s.gn)([l.ak], j.prototype, "onWindowMouseUp", null),
          (j = o = (0, s.gn)([_.Pi], j));
        const Y = (e) => {
          const t = a.useRef();
          return a.createElement(
            d.z,
            {
              className: (0, h.LJ)(
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
      1297: (e, t, r) => {
        var n = r(655),
          i = r(7294),
          o = r(3935),
          s = r(7062),
          a = r(7056),
          l = r(6321),
          c = r(3868),
          d = r(1818),
          u = r(3446),
          h = r(197);
        function p(e) {
          return i.createElement(
            d.z,
            { className: "ButtonControl", onClick: e.onClick },
            e.label
          );
        }
        let m = class extends i.Component {
          constructor(e) {
            super(e),
              (this.nMaxButtons = 4),
              (this.m_mailbox = new l.Nv()),
              this.ResetState(),
              this.m_mailbox.Init("message_overlay/main").then(() => {
                this.m_mailbox.RegisterHandler(
                  "render_message",
                  this.OnRenderMessageOverlay
                ),
                  this.m_mailbox.RegisterHandler(
                    "close_requested",
                    this.OnMessageOverlayCloseRequested
                  ),
                  this.m_mailbox.RegisterHandler(
                    "process_quit",
                    this.OnProcessQuit
                  );
              }),
              u.G3.Init(!1);
          }
          ResetState() {
            this.setState({
              unCallingProcessID: 0,
              sCaptionText: "Default Caption",
              sMessageText: "Default text.",
              sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
            });
          }
          OnProcessQuit(e) {
            return this.OnMessageOverlayCloseRequested(e);
          }
          OnMessageOverlayCloseRequested(e) {
            return e.unProcessID == this.state.unCallingProcessID
              ? (console.log(
                  "Close requested from owning process " +
                    this.state.unCallingProcessID
                ),
                null === l.ZP ||
                  void 0 === l.ZP ||
                  l.ZP.VRDashboardManager.OnMessageOverlayResponse(
                    l.du.ApplicationQuit
                  ),
                this.ResetState(),
                !0)
              : (console.log(
                  "Error: Close requested from process " +
                    e.unProcessID +
                    ", but owning process is " +
                    this.state.unCallingProcessID
                ),
                !1);
          }
          OnRenderMessageOverlay(e) {
            console.log(
              "Message overlay requested from process " + e.unCallingProcessID
            ),
              this.setState({
                unCallingProcessID: e.unCallingProcessID,
                sCaptionText: e.sCaptionText,
                sMessageText: e.sMessageText,
                sButtonTexts: e.sButtonTexts,
              }),
              null === l.ZP ||
                void 0 === l.ZP ||
                l.ZP.VROverlay.ShowDashboard(h.f8);
          }
          ButtonClicked(e) {
            if (!l.ZP)
              return (
                console.log(
                  "Error: VRHTML isn't present--exiting without sending response."
                ),
                void this.ResetState()
              );
            console.log(
              "Button " + e + " clicked, sending OnMessageOverlayResponse."
            ),
              null === l.ZP ||
                void 0 === l.ZP ||
                l.ZP.VRDashboardManager.OnMessageOverlayResponse(e),
              this.ResetState();
          }
          render() {
            return i.createElement(
              "div",
              { className: "MessageOverlayContainer" },
              i.createElement(
                d.q,
                { className: "MessageOverlayPanel" },
                i.createElement(
                  "div",
                  { className: "MessageOverlayTextPanel" },
                  i.createElement("h1", null, this.state.sCaptionText),
                  i.createElement("p", null, this.state.sMessageText)
                ),
                i.createElement(
                  "div",
                  { className: "MessageOverlayButtonContainer" },
                  this.state.sButtonTexts[0] &&
                    i.createElement(p, {
                      label: this.state.sButtonTexts[0],
                      onClick: () => {
                        this.ButtonClicked(l.du.ButtonPress_0);
                      },
                    }),
                  this.state.sButtonTexts[1] &&
                    i.createElement(p, {
                      label: this.state.sButtonTexts[1],
                      onClick: () => {
                        this.ButtonClicked(l.du.ButtonPress_1);
                      },
                    }),
                  this.state.sButtonTexts[2] &&
                    i.createElement(p, {
                      label: this.state.sButtonTexts[2],
                      onClick: () => {
                        this.ButtonClicked(l.du.ButtonPress_2);
                      },
                    }),
                  this.state.sButtonTexts[3] &&
                    i.createElement(p, {
                      label: this.state.sButtonTexts[3],
                      onClick: () => {
                        this.ButtonClicked(l.du.ButtonPress_3);
                      },
                    })
                )
              )
            );
          }
        };
        (0, n.gn)([a.ak], m.prototype, "OnProcessQuit", null),
          (0, n.gn)(
            [a.ak],
            m.prototype,
            "OnMessageOverlayCloseRequested",
            null
          ),
          (0, n.gn)([a.ak], m.prototype, "OnRenderMessageOverlay", null),
          (0, n.gn)([a.ak], m.prototype, "ButtonClicked", null),
          (m = (0, n.gn)([s.Pi], m)),
          null === l.ZP ||
            void 0 === l.ZP ||
            l.ZP.VROverlay.SetWidthInMeters(
              l.ZP.VROverlay.ThisOverlayHandle(),
              1.92
            ),
          null === l.ZP ||
            void 0 === l.ZP ||
            l.ZP.VROverlay.SetFlag(
              l.ZP.VROverlay.ThisOverlayHandle(),
              l.Z9.NoDashboardTab,
              !0
            ),
          null === l.ZP ||
            void 0 === l.ZP ||
            l.ZP.VROverlay.SetInputMethod(
              l.ZP.VROverlay.ThisOverlayHandle(),
              l.qC.Mouse
            ),
          (0, c.CK)(
            [],
            null === l.ZP || void 0 === l.ZP
              ? void 0
              : l.ZP.GetSteamVRLanguage()
          )
            .then(() => {
              o.render(
                i.createElement(m, null),
                document.getElementById("root")
              );
            })
            .catch((e) =>
              console.error("Failed to initialize message Overlay:", e)
            );
      },
      79: (e, t, r) => {
        r.d(t, { BB: () => u, KU: () => h });
        var n,
          i = r(655),
          o = r(7294),
          s = r(7056),
          a = r(6321),
          l = r(3868),
          c = r(7062),
          d = r(1058);
        const u = "resetuniverseorigincountdown",
          h = "begin_reset_universe_origin_countdown";
        let p = (n = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new a.Nv()),
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
            clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
            const t =
              null === a.ZP || void 0 === a.ZP
                ? void 0
                : a.ZP.VRApplications.GetSceneApplicationKey();
            let r = !t || "system.generated.xrservice" == t;
            r
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === a.ZP ||
                void 0 === a.ZP ||
                a.ZP.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                in_dash_mode: r,
              });
          }
          CountdownTick() {
            var e;
            clearTimeout(this.m_countdownTimeout),
              1 == this.state.countdown_seconds
                ? ((this.m_countdownTimeout = 0),
                  this.state.in_dash_mode &&
                    this.props.dashboardRef.current &&
                    this.props.dashboardRef.current.setPlacementModeActive(!1),
                  null === a.ZP ||
                    void 0 === a.ZP ||
                    a.ZP.VRChaperone.ResetZeroPose(
                      null !==
                        (e =
                          null === a.ZP || void 0 === a.ZP
                            ? void 0
                            : a.ZP.VRCompositor.GetTrackingSpace()) &&
                        void 0 !== e
                        ? e
                        : a.zq.Standing
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
                : ((this.m_countdownTimeout = setTimeout(
                    this.CountdownTick,
                    1e3
                  )),
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
              a.s_,
              {
                width: void 0,
                height: n.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              o.createElement(
                "div",
                {
                  className: (0, d.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: n.kPixelWidth },
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
                    (0, l.Xx)("#Recentering_Countdown")
                  )
                )
              )
            );
          }
          render() {
            var e;
            if (!this.state.visible) return null;
            let t = 0.9,
              r =
                0.8 *
                (null !==
                  (e =
                    null === a.ZP || void 0 === a.ZP
                      ? void 0
                      : a.ZP.VRProperties.GetFloatProperty(
                          a.wU,
                          a.Uk.DashboardScale_Float
                        )) && void 0 !== e
                  ? e
                  : 1);
            const n =
              this.props.dashboardRef.current &&
              this.props.dashboardRef.current.isTheaterMode;
            return this.state.in_dash_mode
              ? (n && ((t *= 2), (r *= 2)),
                o.createElement(
                  a.eK,
                  { bContinuousRelatch: !0 },
                  o.createElement(
                    a.wx,
                    { translation: { y: -0.05, z: -t }, scale: r },
                    this.renderPanel()
                  )
                ))
              : o.createElement(
                  a.wx,
                  { parent_path: "/user/head" },
                  o.createElement(
                    a.wx,
                    { translation: { y: -0.05, z: -t }, scale: r },
                    this.renderPanel()
                  )
                );
          }
        });
        (p.kPanelHeight = 0.2),
          (p.kPixelWidth = 400),
          (p.kFadeDurationMs = 1e3),
          (0, i.gn)(
            [s.ak],
            p.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null
          ),
          (0, i.gn)([s.ak], p.prototype, "CountdownTick", null),
          (0, i.gn)([s.ak], p.prototype, "HideOverlay", null),
          (p = n = (0, i.gn)([c.Pi], p));
      },
      2379: (e, t, r) => {
        r.d(t, { s: () => v });
        var n = r(655),
          i = r(7294),
          o = r(7062),
          s = r(7056),
          a = r(3868),
          l = r(1428),
          c = r(9093),
          d = r(2188),
          u = r(3947),
          h = r(1818),
          p = r(1058),
          m = r(8052);
        let g = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { deviceStatus: null });
          }
          get trackerConfig() {
            return l.c6.GetTrackerBinding(this.props.trackerPath);
          }
          OnTrackerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              e,
              this.trackerConfig.controller_role
            );
          }
          OnControllerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              this.trackerConfig.role,
              e
            );
          }
          BuzzTracker() {
            l.c6.PulseHaptics(this.trackerConfig.device_path_handle);
          }
          get deviceInfo() {
            return u.I.GetDeviceInfo(this.props.trackerPath);
          }
          IsConnected() {
            return !(!this.deviceInfo || !this.deviceInfo.is_connected);
          }
          IsIdentifiable() {
            return !(!this.IsConnected() || !this.deviceInfo.is_identifiable);
          }
          render() {
            let e = [];
            "TrackerRole_Handed" == this.trackerConfig.role &&
              (e = [
                "TrackedControllerRole_Invalid",
                "TrackedControllerRole_LeftHand",
                "TrackedControllerRole_RightHand",
              ].map((e) => ({ value: e, sLabel: (0, a.Xx)("#" + e) })));
            const t = this.trackerConfig.device_path_string;
            let r = t;
            const n = "vive_tracker";
            r.includes(n) &&
              (r = r.substring(r.indexOf(n) + n.length, r.length));
            let o = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (o = (0, a.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable"
                  ))
                : (o = (0, a.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected"
                  )),
              i.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                i.createElement(
                  "div",
                  { className: "Label", title: t },
                  i.createElement("span", null, r),
                  i.createElement("div", {
                    title: (0, a.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected"
                    ),
                    className: (0, p.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", c.E.connected && this.IsConnected()],
                      ["Disconnected", c.E.connected && !this.IsConnected()]
                    ),
                  })
                ),
                i.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  i.createElement(
                    m.GV,
                    { title: o },
                    i.createElement(
                      h.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, a.Xx)("#TrackerEditor_BuzzTracker")
                    )
                  )
                ),
                i.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  i.createElement(m.Xp, {
                    label: (0, a.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, a.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    i.createElement(m.Xp, {
                      label: (0, a.Xx)("#Settings_ViveTracker_Hand"),
                      items: e,
                      value: this.trackerConfig.controller_role,
                      onChange: this.OnControllerRoleChanged,
                    })
                )
              )
            );
          }
        };
        (0, n.gn)([d.Fl], g.prototype, "trackerConfig", null),
          (0, n.gn)([s.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, n.gn)([s.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, n.gn)([s.ak], g.prototype, "BuzzTracker", null),
          (0, n.gn)([d.Fl], g.prototype, "deviceInfo", null),
          (g = (0, n.gn)([o.Pi], g));
        let v = class extends i.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => u.I.GetInputState(),
              2e3
            )),
              u.I.GetInputState();
          }
          componentWillUnmount() {
            window.clearInterval(this.m_nGetInputStateIntervalHandle);
          }
          render() {
            let e,
              t = l.c6.TrackerBindings;
            return (
              t &&
                t.trackers &&
                (e = t.trackers.map((e, r) =>
                  i.createElement(g, {
                    key: r,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  })
                )),
              i.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        v = (0, n.gn)([o.Pi], v);
      },
      6889: (e, t, r) => {
        r.d(t, { u: () => i });
        var n = r(7294);
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
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var o = (r[e] = { id: e, exports: {} });
    return t[e](o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, i, o) => {
      if (!r) {
        var s = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, i, o] = e[d], a = !0, l = 0; l < r.length; l++)
            (!1 & o || s >= o) && Object.keys(n.O).every((e) => n.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), o < s && (s = o));
          if (a) {
            e.splice(d--, 1);
            var c = i();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [r, i, o];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
    (n.j = 846),
    (() => {
      var e = { 846: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var i,
            o,
            [s, a, l] = r,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in a) n.o(a, i) && (n.m[i] = a[i]);
            if (l) var d = l(n);
          }
          for (t && t(r); c < s.length; c++)
            (o = s[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(d);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (n.nc = void 0);
  var i = n.O(void 0, [968, 683], () => n(1297));
  i = n.O(i);
})();
//# sourceMappingURL=messageoverlay.js.map?v=7c045c54ff7f4ff66a85
