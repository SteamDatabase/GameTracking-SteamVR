/*! For license information please see controllerbindingui.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      6321: (e, t, n) => {
        n.d(t, {
          Bl: () => v.Bl,
          Dd: () => l.D,
          Fs: () => i.Fs,
          GC: () => b.GC,
          Ic: () => v.Ic,
          JR: () => i.JR,
          Kf: () => b.Kf,
          Kg: () => b.Kg,
          LL: () => b.LL,
          LY: () => i.LY,
          M9: () => i.M9,
          Nv: () => o.N,
          OK: () => p.OK,
          Op: () => b.Op,
          Oq: () => i.Oq,
          Pd: () => i.Pd,
          Pw: () => b.Pw,
          QZ: () => b.QZ,
          UU: () => i.UU,
          Uk: () => b.Uk,
          VW: () => s.V,
          Vv: () => v.Vv,
          XX: () => b.XX,
          Y9: () => a.Y,
          Z9: () => b.Z9,
          ZP: () => C,
          Zj: () => i.Zj,
          a0: () => b.a0,
          at: () => _.a,
          bt: () => m.b,
          dq: () => i.dq,
          eK: () => S.e,
          eQ: () => i.eQ,
          gQ: () => u.g,
          hz: () => r.h,
          iN: () => p.iN,
          kH: () => y.k,
          l0: () => b.l0,
          lx: () => b.lx,
          n0: () => h.n,
          q9: () => i.q9,
          qA: () => b.qA,
          qC: () => b.qC,
          qI: () => p.qI,
          s_: () => v.s_,
          sl: () => c.s,
          tS: () => i.tS,
          vS: () => b.vS,
          wU: () => b.wU,
          wx: () => d.w,
          x1: () => g.x,
          xY: () => b.xY,
          xj: () => u.x,
          zA: () => b.zA,
          zq: () => b.zq,
        });
        var o = n(4507),
          i = n(3573),
          r = n(1469),
          a = n(1976),
          s = n(1917),
          l = n(142),
          c = n(7986),
          d = n(6701),
          p = (n(2509), n(6263)),
          h = (n(3402), n(9495)),
          u = (n(6374), n(5565)),
          m = n(3033),
          g = n(8235),
          _ = (n(9483), n(5230)),
          v = n(4132),
          S = (n(9744), n(6721), n(510), n(1077), n(1431), n(6730)),
          y = n(6135),
          b = n(1731);
        const C = VRHTML;
      },
      1431: (e, t, n) => {
        n(7294), n(3402);
      },
      1077: (e, t, n) => {
        var o = n(7294);
        n(1731), n(6701), o.Component;
      },
      1976: (e, t, n) => {
        n.d(t, { Y: () => c });
        var o = n(655),
          i = n(7294),
          r = n(3402),
          a = n(7056),
          s = n(6263),
          l = n(7986);
        class c extends r.Mo {
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
            var n;
            const o = this.createSgNode(t);
            return (
              (o.properties.tab_name =
                null !== (n = this.props.tabName) && void 0 !== n ? n : ""),
              (o.properties.mountable_id = (0, s.Hb)(
                this.m_sMountableUnqualifiedID
              )),
              (o.properties.icon_uri = this.props.iconUri),
              (o.properties.icon_overlay_key = this.props.iconOverlayKey),
              (o.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, o]
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
        (0, o.gn)([a.ZP], c.prototype, "buildNode", null);
      },
      6730: (e, t, n) => {
        n.d(t, { e: () => a });
        var o = n(655),
          i = n(3402),
          r = n(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var n, o;
            const i = this.createSgNode(t);
            return (
              (i.properties.continuous_relatch =
                null !== (n = this.props.bContinuousRelatch) &&
                void 0 !== n &&
                n),
              (i.properties.free_dashboard_transform =
                null !== (o = this.props.bFreeDashboardTransform) &&
                void 0 !== o &&
                o),
              [e, i]
            );
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      6721: (e, t, n) => {
        var o;
        n(7294),
          n(3402),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(o || (o = {}));
      },
      510: (e, t, n) => {
        n(7294), n(3402);
      },
      8235: (e, t, n) => {
        n.d(t, { x: () => r });
        var o = n(7294),
          i = n(3402);
        class r extends i.Mo {
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
      },
      9744: (e, t, n) => {
        n(7294), n(3402);
      },
      3033: (e, t, n) => {
        n.d(t, { b: () => a });
        var o = n(655),
          i = n(3402),
          r = n(7056);
        class a extends i.Mo {
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
                let t = (0, i.kh)(e.color, { r: 0, g: 0, b: 0 });
                n.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, n];
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      6135: (e, t, n) => {
        n.d(t, { k: () => r });
        var o = n(7294),
          i = n(3402);
        class r extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, i.Kg)(this.props.xfCurrent.translation),
              t = (0, i.xs)(this.props.xfCurrent.rotation),
              n = (0, i.Kg)(this.props.xfCurrent.scale);
            return o.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: n,
              },
              this.props.children
            );
          }
        }
      },
      7986: (e, t, n) => {
        n.d(t, { C: () => s, s: () => l });
        var o = n(655),
          i = n(3402),
          r = n(7056),
          a = n(6263);
        class s extends i.Mo {
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
        (0, o.gn)([r.ZP], s.prototype, "buildNode", null);
        class l extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties.mountable_id = (0, a.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (n.properties.dashboard_scale = this.props.fDashboardScale),
              [e, n]
            );
          }
        }
        (0, o.gn)([r.ZP], l.prototype, "buildNode", null);
      },
      142: (e, t, n) => {
        n.d(t, { D: () => a });
        var o = n(655),
          i = n(3402),
          r = n(7056);
        class a extends i.Mo {
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
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      4132: (e, t, n) => {
        n.d(t, {
          Bl: () => a,
          Ic: () => o,
          Lb: () => m,
          Vv: () => i,
          s_: () => g,
        });
        var o,
          i,
          r,
          a,
          s = n(655),
          l = n(7294),
          c = n(3402),
          d = n(9495),
          p = n(7056),
          h = n(6263);
        function u(e) {
          if (e) return [e.u, e.v];
        }
        function m(e) {
          switch (e) {
            case o.TopLeft:
              return { x: -1, y: 1 };
            case o.TopCenter:
              return { x: 0, y: 1 };
            case o.TopRight:
              return { x: 1, y: 1 };
            case o.CenterLeft:
              return { x: -1, y: 0 };
            case o.Center:
              return { x: 0, y: 0 };
            case o.CenterRight:
              return { x: 1, y: 0 };
            case o.BottomLeft:
              return { x: -1, y: -1 };
            case o.BottomCenter:
              return { x: 0, y: -1 };
            case o.BottomRight:
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
        })(o || (o = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(r || (r = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(a || (a = {}));
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
          createOverdragBlockingElement(e, t, n, o) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = n + "px"),
              (i.style.height = o + "px"),
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
              : a.Visible;
          }
          buildNode(e, t) {
            var n, o, i, r, s;
            if (this.visibility != a.Visible) return [e, null];
            let l = Object.assign({}, e),
              d = this.createSgNode(t),
              p = { x: 0, y: 0 };
            p =
              "object" == typeof this.props.origin
                ? (0, c.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const g = this.props.overlay_key,
              _ = (0, h.Gv)();
            return (
              g && g.length > 0
                ? (d.properties.key = g)
                : _
                ? (d.properties.key = _)
                : (d.properties.overlay_handle = (0, h.Mb)()),
              (d.properties.uv_min =
                null !== (n = u(this.m_UVsMin)) && void 0 !== n ? n : void 0),
              (d.properties.uv_max =
                null !== (o = u(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (d.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (d.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (d.properties["min-width"] =
                null !== (s = this.props.min_width) && void 0 !== s
                  ? s
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
              (d.properties.origin = (0, c.D1)(p)),
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
              n = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + n * e.v,
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
                style: { display: this.visibility == a.Hidden ? "none" : null },
              },
              this.props.children
            );
          }
        }
        (g.s_bPanelsAreDirty = !1),
          (0, s.gn)([p.ZP], g.prototype, "onResizeObserved", null),
          (0, s.gn)([p.ZP], g.prototype, "onPanelMouseDown", null),
          (0, s.gn)([p.ZP], g.prototype, "onWindowMouseUp", null),
          (0, s.gn)([p.ZP], g.prototype, "buildNode", null);
      },
      5230: (e, t, n) => {
        n.d(t, { a: () => s });
        var o = n(655),
          i = n(3402),
          r = n(4132),
          a = n(7056);
        class s extends i.Mo {
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
              ? (n = (0, i.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = (0, r.Lb)(this.props.location));
            let o = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (o.properties["anchor-u"] = this.m_latchedPosition.u),
                (o.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                i = e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
              (o.properties["anchor-u"] = i.u),
                (o.properties["anchor-v"] = i.v);
            } else {
              const n = t.ownerDocument,
                i = t.getBoundingClientRect(),
                r = i.left + i.width / 2,
                a = i.top + i.height / 2,
                s = e.currentPanel.m_Rect;
              if (r < s.x || r > s.x + s.width || a < s.y || a > s.y + s.height)
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
              (o.properties["anchor-u"] = r / l),
                (o.properties["anchor-v"] = a / c);
            }
            return (
              (this.m_latchedPosition = {
                u: o.properties["anchor-u"],
                v: o.properties["anchor-v"],
              }),
              [e, o]
            );
          }
        }
        (0, o.gn)([a.ZP], s.prototype, "buildNode", null);
      },
      9483: (e, t, n) => {
        n(7294), n(3402);
      },
      5565: (e, t, n) => {
        n.d(t, { g: () => l, x: () => o });
        var o,
          i = n(655),
          r = n(3402),
          a = n(7056),
          s = n(6263);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(o || (o = {}));
        class l extends r.Mo {
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
              (n.properties["texture-id"] = (0, s.Hb)(
                this.props["texture-id"]
              )),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) n.properties.color = e.color;
              else {
                let t = (0, r.kh)(e.color, { r: 0, g: 0, b: 0 });
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
        (0, i.gn)([a.ZP], l.prototype, "buildNode", null);
      },
      9495: (e, t, n) => {
        n.d(t, { n: () => l });
        var o = n(655),
          i = n(7294),
          r = n(4132),
          a = n(7056),
          s = n(6263);
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
            (r.s_.s_bPanelsAreDirty = !0),
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
            let n = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3)
            );
            for (let e = 0; e < n; e++)
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
                (0, s.mK)(
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
              n = t.width / this.m_fCurrentScale,
              o = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / n, y: e.innerHeight / o },
              a = Math.min(i.x, i.y, 1);
            a != this.m_fCurrentScale &&
              (1 != a
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + a + "); transform-origin: top left"
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = a),
              (r.s_.s_bPanelsAreDirty = !0)),
              r.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, s.k7)(),
                (r.s_.s_bPanelsAreDirty = !1),
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
                  o = e.m_Rect.x + e.m_Rect.width,
                  i = e.m_Rect.y,
                  r = e.m_Rect.y + e.m_Rect.height,
                  a = 1 + 3 * e.getEmbeddedIndex();
                if (e.isExternal() || n >= o || i >= r)
                  for (let e = 0; e < 3; e++) this.setPixel(a + 1, 0, 0, 0, 0);
                else
                  this.setPixel(a, (65280 & n) >> 8, 255 & n, 0),
                    this.setPixel(a + 1, (65280 & o) >> 8, 255 & o, 255 & i),
                    this.setPixel(
                      a + 2,
                      (65280 & r) >> 8,
                      255 & r,
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
          setPixel(e, t, n, o, i = 255) {
            (this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = n),
              (this.m_Pixels.data[4 * e + 2] = o),
              (this.m_Pixels.data[4 * e + 3] = i),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e);
          }
        }
        (l.s_Current = null),
          (l.k_EmbeddedDataRows = 1),
          (0, o.gn)([a.ak], l.prototype, "toggleDebugPointer", null),
          (0, o.gn)([a.ak], l.prototype, "onMouseMove", null),
          (0, o.gn)([a.ak], l.prototype, "forceLayoutUpdate", null),
          (0, o.gn)([a.ak], l.prototype, "onMutation", null);
      },
      3402: (e, t, n) => {
        n.d(t, {
          D1: () => l,
          Kg: () => c,
          Mo: () => p,
          QE: () => r,
          Uq: () => a,
          kh: () => s,
          xs: () => d,
        });
        var o = n(7294),
          i = n(6263);
        function r(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function a(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function s(e, t) {
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
        class p extends o.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = o.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID = p.s_NextSGID),
              (p.s_NextSGID = (p.s_NextSGID + 1) % 4294967296);
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
        p.s_NextSGID = 1;
      },
      6263: (e, t, n) => {
        n.d(t, {
          Gv: () => I,
          Hb: () => M,
          Mb: () => h,
          OK: () => w,
          ac: () => p,
          iN: () => k,
          k7: () => R,
          mK: () => f,
          qI: () => O,
          sX: () => E,
        });
        var o = n(655),
          i = n(4507);
        function r(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) {
            if ("undefined" == n) return;
            let e = [];
            for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function a(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return parseFloat(n);
        }
        function s(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return parseInt(n);
        }
        function l(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0)
            return (
              "true" == n ||
              (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
            );
        }
        function c(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return n;
        }
        function d(e, t) {
          return M(c(e, t));
        }
        function p(e, t) {
          let n = { type: e, properties: {} };
          return (
            t.id && (n.properties.id = M(t.id)),
            (n.properties.sgid = s(t, "sgid")),
            n
          );
        }
        function h() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function u(e, t) {
          let [n, o] = (function (e, t) {
              let n = t.buildNode;
              if (n) return n(e, t);
              let o = Object.assign({}, e),
                i = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (i = p("transform", t)),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale")),
                    (i.properties["curvature-pitch"] = a(t, "curvature-pitch")),
                    (i.properties["parent-path"] = c(t, "parent-path")),
                    (i.properties["parent-origin"] = c(t, "parent-origin")),
                    (i.properties["parent-id"] = d(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (i = p("trackingstatevisibility", t)),
                    (i.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (i.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (i.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (i = p("elasticheadtransform", t)),
                    (i.properties["start-angle-threshold"] = a(
                      t,
                      "start-angle-threshold"
                    )),
                    (i.properties["stop-angle-threshold"] = a(
                      t,
                      "stop-angle-threshold"
                    )),
                    (i.properties["ease-in-time"] = a(t, "ease-in-time")),
                    (i.properties["ease-in-power"] = a(t, "ease-in-power")),
                    (i.properties["ease-out-angle-threshold"] = a(
                      t,
                      "ease-out-angle-threshold"
                    )),
                    (i.properties["ease-out-power"] = a(t, "ease-out-power")),
                    (i.properties["min-angular-velocity"] = a(
                      t,
                      "min-angular-velocity"
                    )),
                    (i.properties["max-angular-velocity"] = a(
                      t,
                      "max-angular-velocity"
                    )),
                    (i.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (i.properties["translation-behavior"] = s(
                      t,
                      "translation-behavior"
                    ));
                  break;
                case "VSG-LINE":
                  (i = p("line", t)),
                    (i.properties["target-id"] = d(t, "target-id")),
                    (i.properties.thickness = a(t, "thickness")),
                    (i.properties["start-buffer"] = a(t, "start-buffer")),
                    (i.properties["end-buffer"] = a(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (i = p("line-constrained-transform", t)),
                    (i.properties["target-id"] = d(t, "target-id")),
                    (i.properties["source-id"] = d(t, "source-id")),
                    (i.properties["source-distance"] = a(t, "source-distance")),
                    (i.properties["target-limit"] = a(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (i = p("callout-transform", t)),
                    (i.properties.offset = r(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  i = p("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (i = p("pin-to-view-transform", t)),
                    (i.properties["offscreen-z-depth"] = a(
                      t,
                      "offscreen-z-depth"
                    )),
                    (i.properties["off-axis-limit"] = a(t, "off-axis-limit")),
                    (i.properties["transition-limit"] = a(
                      t,
                      "transition-limit"
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (i = p("manipulation-transform", t)),
                    (i.properties["is-moving"] = l(t, "is-moving")),
                    (i.properties["parent-path"] = c(t, "parent-path")),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale"));
              }
              return [o, i];
            })(e, t),
            i = [];
          for (let e = 0; e < t.children.length; e++) {
            let o = t.children.item(e);
            if (o.children) {
              let e = u(n, o);
              e && (i = i.concat(e));
            }
          }
          return n.bShouldAbort
            ? null
            : o
            ? (i.length > 0 && (o.children = i), [o])
            : i.length > 0
            ? 1 == i.length
              ? i
              : [{ children: i }]
            : null;
        }
        let m,
          g,
          _,
          v,
          S = [],
          y = null,
          b = null,
          C = null;
        function f(e, t, n) {
          (m = e),
            (g = t),
            (_ = n),
            console.log("Setting owning overlay key to " + e);
        }
        function k(e, t) {
          return e + "::" + t;
        }
        function M(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : k(I(), e)
            : null;
        }
        function I() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : m;
        }
        function E(e) {
          S.push(e), R();
        }
        function O() {
          v = !0;
        }
        function w(e) {
          var t, n;
          (n = e),
            (null == (t = C) || null == n
              ? t == n
              : t.color_mult == n.color_mult &&
                t.reflection_mult == n.reflection_mult &&
                t.roomview_mult.toString() == n.roomview_mult.toString() &&
                t.allow_skydome == n.allow_skydome &&
                t.allow_floornear == n.allow_floornear &&
                t.allow_floorfar == n.allow_floorfar) || ((C = e), R());
        }
        function R() {
          y ||
            (y = window.setTimeout(
              () =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  g && (e = g);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: v,
                      sceneColorCorrection: C,
                    },
                    children: u({ currentPanel: null, bShouldAbort: !1 }, e),
                  };
                  b ||
                    (console.log("Initializing sg_mailbox"),
                    (b = new i.N()),
                    yield b.Init("sg_mailbox", _));
                  let n = {
                    type: "update_scene_graph",
                    owning_overlay_key: I(),
                    scene_graph: t,
                    retired_sgids: S,
                  };
                  b.SendMessage("vrcompositor_systemlayer", n),
                    (y = null),
                    (S = []),
                    (v = !1);
                }),
              0
            ));
        }
      },
      6374: (e, t, n) => {
        var o = n(655),
          i = n(3402),
          r = n(7056);
        class a extends i.Mo {
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
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      1917: (e, t, n) => {
        n.d(t, { V: () => a });
        var o = n(655),
          i = n(3402),
          r = n(7056);
        class a extends i.Mo {
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
                let e = (0, i.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                n.properties.color = [e.r, e.g, e.b];
              }
            else n.properties.color = [1, 1, 1];
            return [e, n];
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      2509: (e, t, n) => {
        n(7294), n(3402);
      },
      6701: (e, t, n) => {
        n.d(t, { w: () => s });
        var o,
          i = n(7294),
          r = n(3402),
          a = n(3573);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(o || (o = {}));
        class s extends r.Mo {
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
            let e, t, n;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (n = this.props.transform.scale))
              : ((e = (0, r.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t = (0, a.UU)(
                  (0, a.mT)(
                    (0, r.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                    Math.PI / 180
                  )
                )),
                (n =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, r.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let s = (0, r.Kg)(e),
              l = (0, r.xs)(t),
              c = (0, r.Kg)(n);
            return i.createElement(
              "vsg-transform",
              {
                translation: s,
                rotation: l,
                scale: c,
                "curvature-pitch": this.props.curvature_pitch,
                "parent-path": this.props.parent_path,
                "parent-origin": o[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children
            );
          }
        }
      },
      3573: (e, t, n) => {
        function o() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function i(e, t, n) {
          return {
            x: t.x + e * (n.x - t.x),
            y: t.y + e * (n.y - t.y),
            z: t.z + e * (n.z - t.z),
          };
        }
        function r(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function s(e, t) {
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
        function p(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            n = 0.5 * e.y,
            o = 0.5 * e.z,
            i = Math.cos(t),
            r = Math.cos(n),
            a = Math.cos(o),
            s = Math.sin(t),
            l = Math.sin(n),
            c = Math.sin(o);
          return {
            w: i * r * a + s * l * c,
            x: s * r * a + i * l * c,
            y: i * l * a - s * r * c,
            z: i * r * c - s * l * a,
          };
        }
        function h(e) {
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
        function u(e, t, n) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [n.x, n.y, n.z],
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
        n.d(t, {
          Fs: () => s,
          JR: () => c,
          LY: () => d,
          M9: () => m,
          Oq: () => o,
          Pd: () => h,
          UU: () => p,
          Zj: () => r,
          dq: () => g,
          eQ: () => a,
          mT: () => l,
          q9: () => i,
          tS: () => u,
        });
      },
      1469: (e, t, n) => {
        n.d(t, { h: () => r });
        var o = n(655),
          i = n(4507);
        class r {
          constructor() {
            (this.m_mailbox = new i.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return r.instance || (r.instance = new r()), r.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((n, i) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                let o = { type: "transform_request", id: e, flPushDistance: t },
                  r = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    o,
                    "transform_response"
                  );
                r.id == e && r.transform
                  ? n(r.transform)
                  : i("requestSGTransform failed");
              })
            );
          }
        }
      },
      4507: (e, t, n) => {
        n.d(t, { N: () => r });
        var o = n(655),
          i = n(7056);
        class r {
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
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = r.EnsureUniqueName(e)),
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
            return new Promise((n, o) => {
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
            return (0, o.mG)(this, void 0, void 0, function* () {
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
            let o = Object.assign({}, t);
            return (
              null == o.returnAddress &&
                (o.returnAddress = this.m_sMailboxName),
              (o.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, o),
              this.WaitForMessage(n, o.message_id)
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
        (r.s_nNextMailboxNumber = 1),
          (0, o.gn)([i.ak], r.prototype, "OpenWebSocketToHost", null),
          (0, o.gn)([i.ak], r.prototype, "OnWebSocketOpen", null),
          (0, o.gn)([i.ak], r.prototype, "OnWebSocketClose", null),
          (0, o.gn)([i.ak], r.prototype, "WebSocketSend", null),
          (0, o.gn)([i.ak], r.prototype, "OnWebSocketMessage", null);
      },
      1731: (e, t, n) => {
        var o, i, r, a;
        function s() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : o.Unknown;
        }
        n.d(t, {
          GC: () => k,
          Kf: () => c,
          Kg: () => M,
          LL: () => i,
          Op: () => s,
          Pw: () => y,
          QZ: () => r,
          Uk: () => m,
          XX: () => p,
          Z9: () => h,
          a0: () => I,
          l0: () => b,
          lx: () => f,
          qA: () => o,
          qC: () => u,
          vS: () => E,
          wU: () => l,
          xY: () => v,
          zA: () => O,
          zq: () => a,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(o || (o = {})),
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
          })(r || (r = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let l = 0,
          c = -1;
        var d, p, h, u, m, g, _, v, S, y, b, C, f, k, M, I, E, O;
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
          })(p || (p = {})),
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
          })(u || (u = {})),
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
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(v || (v = {})),
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
          })(S || (S = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(y || (y = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(b || (b = {})),
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
          })(C || (C = {})),
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
          })(f || (f = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(k || (k = {})),
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
          })(M || (M = {})),
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
          })(I || (I = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
          })(E || (E = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(O || (O = {}));
      },
      1732: (e, t, n) => {
        n.d(t, { L: () => C });
        var o,
          i = n(655),
          r = n(7294),
          a = n(7056),
          s = n(3868),
          l = n(6321),
          c = n(3947),
          d = n(1428),
          p = n(2893),
          h = n(7062),
          u = n(2188),
          m = n(8052),
          g = n(8325);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(o || (o = {}));
        class _ extends r.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = r.createRef()),
              (this.m_nameRef = r.createRef()),
              (this.m_svgRef = r.createRef()),
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
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: n }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: n }),
              t == this.props.sourcePath + "/x" && this.setState({ x: n }),
              t == this.props.sourcePath + "/y" && this.setState({ y: n }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: n }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: n }));
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
              r.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                r.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                })
              )
            );
          }
          renderBar(e, t, n) {
            let o = { width: String(100 * n) + "%" };
            return r.createElement(
              "div",
              { className: "TriggerBar " + t },
              r.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e)
              ),
              r.createElement(
                "div",
                { className: "TriggerBarBackground" },
                r.createElement("div", {
                  className: "TriggerBarContent",
                  style: o,
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
                n = this.m_svgRef.current.children.namedItem("SourceCircle"),
                i = this.props.side == o.Right,
                r = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new d.E9(0, r.top + r.height / 2);
              l.x = i ? a.left - 10 : a.right + 10;
              let c = i ? -20 : 20,
                p = l.x + c + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", p);
              let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
              t.setAttribute("points", h),
                n.setAttribute("cx", s.x + ""),
                n.setAttribute("cy", s.y + "");
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
              this.props.side == o.Left
                ? (e += " MenuLeftLine")
                : (e += " MenuRightLine"),
              this.IsEngaged() && (e += " MenuSVGVisible"),
              r.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                r.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  r.createElement(
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
                r.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
                  },
                  r.createElement(
                    "defs",
                    null,
                    r.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      r.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      r.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      })
                    )
                  ),
                  r.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  r.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  r.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  })
                )
              )
            );
          }
        }
        (0, i.gn)([a.ak], _.prototype, "ComponentUpdated", null),
          (0, i.gn)([a.ak], _.prototype, "UpdateSVGPath", null);
        class v extends _ {
          constructor(e) {
            super(e);
          }
        }
        class S extends _ {
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
            return r.createElement(
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
        class y extends _ {
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
              r.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                r.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  r.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, s.Xx)("#SourceInputMode_Position")
                  ),
                  r.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    r.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        r.createElement(
                          "div",
                          { style: e },
                          r.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            r.createElement("div", { className: t })
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
        class b extends r.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = r.createRef()),
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
          renderSource(e, t, n) {
            let o = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return r.createElement(v, {
                  key: o,
                  side: n,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return r.createElement(S, {
                  key: o,
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
                return r.createElement(y, {
                  key: o,
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
                return r.createElement(
                  "div",
                  { key: o },
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
                ? r.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    r.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    r.createElement(p.Z, { onReflow: this.OnImageReflow })
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              n = this.ControllerTypeInfo,
              i = 0,
              a = [];
            for (let e in n.input_source) {
              let t = n.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let o = this.EstimateSourceHeight(t);
              (i += o),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: o,
                });
            }
            let s = 8;
            i > 16 && (s = i / 2);
            let l = 0,
              c = a.sort((e, t) => e.order - t.order);
            for (let n of c) {
              l += n.height;
              let i = l > s ? o.Right : o.Left,
                r = this.renderSource(n.sSourcePath, n.inputSource, i);
              r && (i == o.Left ? e.push(r) : t.push(r));
            }
            return r.createElement(
              "div",
              { className: "ControllerVisualizer" },
              r.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e
              ),
              this.renderImage(),
              r.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t
              )
            );
          }
        }
        (0, i.gn)([a.ak], b.prototype, "OnImageLoaded", null),
          (0, i.gn)([a.ak], b.prototype, "OnImageReflow", null);
        let C = class extends r.Component {
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
                    (this.m_observeDisposer = (0, u.N7)(
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
            return c.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t)
            );
          }
          render() {
            let e,
              t = [],
              n = this.GetSortedDevices();
            if (!n)
              return r.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, s.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                r.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, s.Xx)("#TestController_NoController")
                )
              );
            for (let o of n)
              "TrackedDeviceClass_HMD" != o.class &&
                (o.root_path == this.state.devicePath && (e = o.serial_number),
                t.push({
                  value: o.root_path,
                  sLabel: (0, s.Xx)("#" + o.root_path),
                }));
            return r.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: r.createElement(m.U5, {
                  leftControls: [
                    r.createElement(g.hu, {
                      key: "dropdown",
                      items: t,
                      value: this.state.devicePath,
                      defaultLabel: (0, s.Xx)("#" + this.state.devicePath),
                      onChange: (e) => {
                        this.setState({ devicePath: e });
                      },
                    }),
                  ],
                  onDismissRequested: this.props.onDismissRequested,
                }),
              },
              this.state.devicePath &&
                r.createElement(b, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                })
            );
          }
        };
        (0, i.gn)([a.ak], C.prototype, "OnConnectedDevicesChanged", null),
          (0, i.gn)([a.ak], C.prototype, "OnUpdateComponentStates", null),
          (C = (0, i.gn)([h.Pi], C));
      },
      1884: (e, t, n) => {
        n.d(t, { V: () => c });
        var o = n(655),
          i = n(7294),
          r = n(7056),
          a = n(3868),
          s = n(6321);
        class l extends i.Component {
          constructor(e) {
            if (
              (super(e),
              (this.m_mailbox = new s.Nv()),
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
              for (let n of e.pressed)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n
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
              for (let n of e.touched)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n
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
              for (let n of e.supported_buttons)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n
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
            for (let n of e.axis)
              t.push(
                i.createElement(
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
                  (0, a.Xx)("#LegacyDebugger_NoApp")
                );
          }
        }
        (0, o.gn)([r.ak], l.prototype, "OnLegacyInputFrame", null);
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
      3804: (e, t, n) => {
        var o = n(655),
          i = n(7294),
          r = n(3935),
          a = n(7062),
          s = n(3365),
          l = (n(1783), n(6321)),
          c = n(1058),
          d = n(3868),
          p = n(1428),
          h = n(7056),
          u = n(6477),
          m = n(2893),
          g = n(2188),
          _ = n(1114),
          v = n(1790),
          S = n(355);
        n(6592);
        let y = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bShowDeleteConfirmModal: !1 });
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            this.setState({ bShowDeleteConfirmModal: !1 }),
              this.props.bReadOnly ||
                this.props.controllerWatcher.forEach((e) => {
                  e.DeleteInputMode(this.props.iMode);
                });
          }
          OnDeleteCancel() {
            this.setState({ bShowDeleteConfirmModal: !1 });
          }
          OnSourceModeChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetInputMode(e, this.props.iMode);
            });
          }
          renderDeleteConfirmModal() {
            let e = this.props.controllerWatcher[0];
            return i.createElement(
              s.Z,
              {
                visible: this.state.bShowDeleteConfirmModal,
                onClose: this.OnDeleteCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bShowDeleteConfirmModal &&
                i.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered" },
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.Xx)(
                      "#BindingUI_Mode_Delete_Confirm",
                      (0, d.Xx)(
                        "#SourceInputMode_" + e.GetMode(this.props.iMode)
                      ),
                      e.GetControllerInputName
                    )
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRow" },
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteConfirmed,
                      },
                      (0, d.Xx)("#Button_Delete")
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, d.Xx)("#Button_Cancel")
                    )
                  )
                )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0];
            if (!this.props.bEditMode)
              return i.createElement(
                "div",
                { className: "FlexRow BindingHeaderWrapper" },
                i.createElement(
                  "div",
                  { className: "Label BindingLabel ReadOnly BindingHeader" },
                  (0, d.Xx)(
                    "#SourceInputMode_UseAs",
                    (0, d.Xx)("#SourceInputMode_" + e.GetMode(this.props.iMode))
                  )
                ),
                !this.props.bReadOnly &&
                  i.createElement("img", {
                    className:
                      "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                    src: "images/bindingui/icon_trash.svg",
                    onClick: this.OnDelete,
                  }),
                this.renderDeleteConfirmModal()
              );
            let t = p.c6.GetInputModesForSourceType(
              e.GetInputSourceType,
              e.GetInputSourceForceSupport
            );
            if (0 == t.length) return null;
            let n = t.map(
              (e, t) =>
                new v.GZ(
                  e,
                  (0, d.Xx)("#SourceInputMode_" + e),
                  null,
                  (0, d.Xx)("#SourceInputMode_" + e + "_tooltip")
                )
            );
            n.push(new v.GZ("none", (0, d.Xx)("#SourceInputMode_none")));
            let o =
                e.GetButtonSide == p.ik.eButtonSide_Left
                  ? "#BindingUI_LeftHandController"
                  : "#BindingUI_RightHandController",
              r = p.c6.SelectedControllerTypeLocalizedName;
            e.GetButtonSide != p.ik.eButtonSide_None &&
              (r = (0, d.Xx)(o, r, ""));
            let a = (0, d.Xx)(
              "#SourceInputMode_SelectMode",
              r,
              e.GetControllerInputName
            );
            return i.createElement(
              "div",
              { className: "FlexRow BindingHeaderWrapper" },
              i.createElement(v.vs, {
                sModalTitleString: a,
                vecOptions: n,
                sValueSelectedItem: e.GetMode(this.props.iMode),
                bShowOptionsOnStart: this.props.bShowModeOptionsDropDownOnStart,
                sLocalizedSelectedItem: (0, d.Xx)(
                  "#SourceInputMode_" + e.GetMode(this.props.iMode)
                ),
                fnOptionSelected: this.OnSourceModeChanged,
              }),
              i.createElement("img", {
                className:
                  "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                src: "images/bindingui/icon_trash.svg",
                onClick: this.OnDelete,
              }),
              this.renderDeleteConfirmModal()
            );
          }
        };
        (0, o.gn)([h.ak], y.prototype, "OnDelete", null),
          (0, o.gn)([h.ak], y.prototype, "OnDeleteConfirmed", null),
          (0, o.gn)([h.ak], y.prototype, "OnDeleteCancel", null),
          (0, o.gn)([h.ak], y.prototype, "OnSourceModeChanged", null),
          (0, o.gn)([h.ak], y.prototype, "renderDeleteConfirmModal", null),
          (y = (0, o.gn)([a.Pi], y));
        class b extends i.Component {
          render() {
            let e =
                null == this.props.SelectedAction
                  ? "none"
                  : this.props.SelectedAction.name,
              t =
                null == this.props.SelectedAction
                  ? (0, d.Xx)("#SourceInputAction_none")
                  : this.props.SelectedAction.localized_name,
              n = "FlexRow BindingActionWrapper";
            null == this.props.SelectedAction && (n += " None");
            let o = "Label BindingLabel";
            return (
              this.props.bReadOnly && (o += " ReadOnly"),
              i.createElement(
                "div",
                { className: n },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, d.Xx)(
                      this.props.sLocalizedInputType + "_tooltip"
                    ),
                    theme: f,
                  },
                  i.createElement(
                    "div",
                    { className: o },
                    (0, d.Xx)(this.props.sLocalizedInputType)
                  )
                ),
                !this.props.bReadOnly &&
                  i.createElement(v.vs, {
                    vecOptions: this.props.vecOptions,
                    sValueSelectedItem: e,
                    sHeaderClass: "BindingLabelAction",
                    sLocalizedSelectedItem: t,
                    fnOptionSelected: this.props.fnOptionSelected,
                  }),
                this.props.bReadOnly &&
                  i.createElement(
                    "div",
                    { className: o + " BindingLabelAction" },
                    t
                  )
              )
            );
          }
        }
        class C extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bEditMode: this.props.bStartInEditMode,
                bSettingsVisible: !1,
              });
          }
          componentWillReceiveProps(e) {
            e.bReadOnly &&
              this.state.bEditMode &&
              (this.setState({ bEditMode: !1 }), this.props.ParentEdit(!1)),
              e.sActionSet != this.props.sActionSet && this.LoadDefaults();
          }
          LoadDefaults() {
            if (null == this.defaultProperties) return;
            let e = this.props.controllerWatcher[0];
            e.GetInputSourceClickSupport && e.GetClickAction(this.props.iMode);
            for (let e of this.defaultProperties)
              this.props.controllerWatcher.forEach((t) => {
                let n = t.GetParameter(this.props.iMode, e.mode, e.property);
                (n =
                  null == n
                    ? e.default
                    : "float" == e.type
                    ? parseFloat(n)
                    : "int" == e.type
                    ? parseInt(n)
                    : "bool" == e.type
                    ? "true" == n || "1" == n
                    : n.toString()),
                  (this.state[e.variableName] = n);
              });
          }
          EnsurePropertySet(e) {
            let t = !1;
            for (let n of this.defaultProperties)
              if (n.property == e) {
                (t = !0),
                  this.props.controllerWatcher.forEach((e) => {
                    if (
                      null ==
                      e.GetParameter(this.props.iMode, n.mode, n.property)
                    ) {
                      console.log(
                        "Setting currently unset param to default: ",
                        e.GetParameter(this.props.iMode, n.mode, n.property),
                        this.props.iMode,
                        n.mode,
                        n.property,
                        n.default.toString()
                      ),
                        e.SetParameter(
                          this.props.iMode,
                          n.mode,
                          n.property,
                          n.default.toString()
                        );
                      let t = {};
                      (t[n.variableName] = n.default), this.setState(t);
                    }
                  });
                break;
              }
            t ||
              console.log(
                "Tried to ensure property value %s was set, which is not in the property map.",
                e
              );
          }
          onPropertyChanged(e, t) {
            let n = !1;
            for (let o of this.defaultProperties)
              if (o.property == e) {
                n = !0;
                let e = {};
                (e[o.variableName] = t),
                  this.setState(e),
                  this.props.controllerWatcher.forEach((e) => {
                    e.SetParameter(
                      this.props.iMode,
                      o.mode,
                      o.property,
                      t.toString()
                    );
                  });
                break;
              }
            n ||
              console.log(
                "Tried to set property %s which is not in the property map.",
                e
              );
          }
          onPropertyReset(e) {
            return new Promise((t) => {
              for (let n of this.defaultProperties)
                if (n.property == e) {
                  let e = {};
                  (e[n.variableName] = n.default),
                    this.setState(e, t),
                    this.props.controllerWatcher.forEach((e) => {
                      e.SetParameter(
                        this.props.iMode,
                        n.mode,
                        n.property,
                        void 0
                      );
                    });
                  break;
                }
            });
          }
          OnEdit(e) {
            this.props.bReadOnly ||
              this.state.bEditMode == e ||
              (this.setState({ bEditMode: e }),
              this.props.ParentEdit(e),
              e &&
                this.props.controllerWatcher[0].ClearNewModeIfSet(
                  this.props.iMode
                ));
          }
          OnShowModeSettings() {
            this.setState({ bSettingsVisible: !0 });
          }
          CloseModeSettings() {
            this.setState({ bSettingsVisible: !1 });
          }
          BModeHasSettings() {
            return !1;
          }
          renderSettingsModal() {
            return i.createElement(
              s.Z,
              {
                visible: this.state.bSettingsVisible,
                customStyles: {
                  width: "80%",
                  maxWidth: "40em",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                  padding: "0px",
                },
                onClose: this.CloseModeSettings,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bSettingsVisible && this.renderSettingsContent()
            );
          }
          renderSettingsContent() {
            return i.createElement("div", null);
          }
          renderFooter() {
            return this.props.bReadOnly
              ? i.createElement("div", {
                  className:
                    "FlexFullHeightColumnCentered SourceModeFooterWrapper",
                })
              : i.createElement(
                  "div",
                  {
                    className:
                      "FlexFullHeightColumnCentered SourceModeFooterWrapper",
                  },
                  i.createElement("hr", { className: "SourceModeFooterHR" }),
                  !this.state.bEditMode &&
                    i.createElement("img", {
                      className:
                        "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                      src: "images/bindingui/icon_edit.svg",
                      onClick: (e) => {
                        this.OnEdit(!this.state.bEditMode);
                      },
                    }),
                  this.state.bEditMode &&
                    i.createElement(
                      "div",
                      {
                        className:
                          "FlexFullWidthRowLeftJustified SourceModeFooterButtons",
                      },
                      i.createElement("img", {
                        className:
                          "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                        src: "images/bindingui/icon_done.svg",
                        onClick: (e) => {
                          this.OnEdit(!this.state.bEditMode);
                        },
                      }),
                      this.BModeHasSettings() &&
                        i.createElement("img", {
                          className:
                            "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                          src: "images/bindingui/icon_settings.svg",
                          onClick: this.OnShowModeSettings,
                        })
                    )
                );
          }
          renderHeader() {
            let e = this.BModeHasSettings();
            return i.createElement(
              "div",
              null,
              i.createElement(y, {
                controllerWatcher: this.props.controllerWatcher,
                iMode: this.props.iMode,
                bReadOnly: this.props.bReadOnly,
                bEditMode: this.state.bEditMode,
                bShowModeOptionsDropDownOnStart:
                  this.props.bShowModeOptionsDropDownOnStart,
              }),
              e && this.renderSettingsModal()
            );
          }
          get WrapperClasses() {
            let e = "SourceModeGroup FlexColumn";
            return this.state.bEditMode && (e += " Edit"), e;
          }
          AddNoneItems(e) {
            e.push(new v.GZ("-blank", "")),
              e.push(new v.GZ("none", (0, d.Xx)("#SourceInputAction_none")));
          }
          AddBlankItem(e) {
            e.push(new v.GZ("-blank", ""));
          }
          AddNoActionsItem(e) {
            e.push(
              new v.GZ("-nonitem", (0, d.Xx)("#SourceInputAction_NoItems"))
            );
          }
          AddHeaderItem(e, t) {
            e.push(new v.GZ("-subHeader", (0, d.Xx)(t)));
          }
          GetCombinedBooleanVector1DropDownItems() {
            let e = [];
            return (
              this.GetBooleanDropDownItems(e, !1),
              this.GetVector1DropDownItems(e, !1),
              this.AddNoneItems(e),
              e
            );
          }
          GetBooleanDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_BooleanActions");
            let n = p.c6.GetBooleanActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector1DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector1Actions");
            let n = p.c6.GetVector1ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector2DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector2Actions");
            let n = p.c6.GetVector2ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector3DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector3Actions");
            let n = p.c6.GetVector3ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetSkeletonDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_SkeletonActions");
            let n = p.c6.GetSkeletonActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetPoseDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_PoseActions");
            let n = p.c6.GetPoseActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetHapticsDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_HapticsActions");
            let n = p.c6.GetHapticsActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e)
            );
            null == n || 0 == n.length
              ? this.AddNoActionsItem(e)
              : e.push(...n),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetActionDropDownItem(e) {
            let t,
              n = e.localized_name;
            return (
              "mandatory" == e.requirement &&
                (t =
                  " (" + (0, d.Xx)("#BindingUI_SelectAction_Required") + ")"),
              new v.GZ(e.name, n, t)
            );
          }
        }
        (0, o.gn)([h.ak], C.prototype, "onPropertyChanged", null),
          (0, o.gn)([h.ak], C.prototype, "onPropertyReset", null),
          (0, o.gn)([h.ak], C.prototype, "OnEdit", null),
          (0, o.gn)([h.ak], C.prototype, "OnShowModeSettings", null),
          (0, o.gn)([h.ak], C.prototype, "CloseModeSettings", null),
          (0, o.gn)([h.ak], C.prototype, "renderFooter", null),
          (0, o.gn)([h.ak], C.prototype, "renderHeader", null),
          (0, o.gn)([g.Fl], C.prototype, "WrapperClasses", null);
        const f = (p.NK.eTrackPadInvert_None, "BindingLabel");
        class k extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, d.Xx)(this.props.labelName + "_tooltip"),
                  theme: f,
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.Xx)(this.props.labelName)
                )
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexColumn InputSettingsInputContainer" +
                    (this.props.halfSplit ? " HalfSplit" : ""),
                },
                i.createElement(
                  "div",
                  null,
                  i.createElement("input", {
                    id: this.props.elementId,
                    type: "range",
                    min: this.props.min,
                    max: this.props.max,
                    step: this.props.step,
                    value: this.props.value,
                    onChange: (e) => {
                      this.props.onChange(parseFloat(e.target.value));
                    },
                  })
                ),
                i.createElement(
                  "div",
                  { className: "Label RangeLabel" },
                  this.props.renderValue(this.props.value)
                )
              ),
              this.props.onReset &&
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsResetButton",
                    onClick: this.props.onReset,
                  },
                  (0, d.Xx)("#SourceInputMode_ResetParameterToDefault")
                )
            );
          }
        }
        class M extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, d.Xx)(this.props.labelName + "_tooltip"),
                  theme: f,
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.Xx)(this.props.labelName)
                )
              ),
              i.createElement(
                "div",
                { className: "FlexColumn InputSettingsInputContainer" },
                i.createElement("input", {
                  id: this.props.elementId,
                  type: "checkbox",
                  checked: this.props.value,
                  onChange: (e) => {
                    this.props.onChange(e.target.checked);
                  },
                })
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, d.Xx)("#SourceInputMode_ResetParameterToDefault")
              )
            );
          }
        }
        class I extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, d.Xx)(this.props.labelName + "_tooltip"),
                  theme: f,
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.Xx)(this.props.labelName)
                )
              ),
              i.createElement(
                "div",
                { className: "FlexColumn InputSettingsInputContainer" },
                i.createElement(v.vs, {
                  vecOptions: this.props.vecValues,
                  sValueSelectedItem: this.props.selectedValue,
                  sHeaderClass: "BindingLabelAction",
                  sLocalizedSelectedItem: this.props.selectedValueLocalized,
                  fnOptionSelected: this.props.onChange,
                })
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, d.Xx)("#SourceInputMode_ResetParameterToDefault")
              )
            );
          }
        }
        let E = class extends C {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0].GetInputSource,
              n = t.value || t.force ? 0.2 : 0;
            (this.defaultProperties = [
              {
                property: "click_activate_threshold",
                default: 0.25,
                type: "float",
                variableName: "flClickActivateSensitivity",
                mode: "click",
              },
              {
                property: "touch_activate_threshold",
                default: 0.25,
                type: "float",
                variableName: "flTouchActivateSensitivity",
                mode: "touch",
              },
              {
                property: "click_deactivate_threshold",
                default: 0.2,
                type: "float",
                variableName: "flClickDeactivateSensitivity",
                mode: "click",
              },
              {
                property: "touch_deactivate_threshold",
                default: 0.2,
                type: "float",
                variableName: "flTouchDeactivateSensitivity",
                mode: "touch",
              },
              {
                property: "click_initial_state",
                default: !1,
                type: "bool",
                variableName: "bClickButtonInitialState",
                mode: "click",
              },
              {
                property: "touch_initial_state",
                default: !1,
                type: "bool",
                variableName: "bTouchButtonInitialState",
                mode: "touch",
              },
              {
                property: "force_input",
                default: "",
                type: "string",
                variableName: "strSelectedForceInput",
                mode: "cick",
              },
              {
                property: "haptic_amplitude",
                default: n,
                type: "float",
                variableName: "flHapticAmplitude",
                mode: "click",
              },
              {
                property: "haptic_frequency",
                default: 20,
                type: "float",
                variableName: "flHapticFrequency",
                mode: "click",
              },
              {
                property: "haptic_duration",
                default: 0,
                type: "float",
                variableName: "flHapticDuration",
                mode: "click",
              },
            ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, _.enableUniqueIds)(this);
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          LocalizeForceInputModeString(e) {
            switch (e) {
              case "click":
                return (0, d.Xx)("#SourceInputMode_Click");
              case "value":
                return (0, d.Xx)("#SourceInputMode_Pull");
              case "force":
                return (0, d.Xx)("#SourceInputMode_Force");
              case "":
                return (0, d.Xx)("#SourceInputMode_Default");
            }
            return (0, d.Xx)("#SourceInputMode_Default");
          }
          get BShowClickOptions() {
            let e = this.props.controllerWatcher[0],
              t = e.GetInputSource;
            return (
              (t.value || t.force) && null != e.GetClickAction(this.props.iMode)
            );
          }
          get BShowTouchOptions() {
            let e = this.props.controllerWatcher[0];
            return (
              e.GetInputSourceTouchSupport &&
              null != e.GetTouchAction(this.props.iMode)
            );
          }
          renderSettingsContent() {
            let e,
              t,
              n,
              o = this.props.controllerWatcher[0].GetInputSource,
              r = [];
            o.click &&
              r.push(
                new v.GZ("click", this.LocalizeForceInputModeString("click"))
              ),
              o.value &&
                r.push(
                  new v.GZ("value", this.LocalizeForceInputModeString("value"))
                ),
              o.force &&
                r.push(
                  new v.GZ("force", this.LocalizeForceInputModeString("force"))
                ),
              r.length > 1 &&
                r.push(new v.GZ("", this.LocalizeForceInputModeString("")));
            let a = this.BShowClickOptions,
              s = this.BShowTouchOptions,
              l = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (l = this.nextUniqueId()),
              a &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  })
                )),
              s &&
                (t = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(k, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(k, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  })
                )),
              this.props.bToggleButtonMode &&
                (n = [
                  i.createElement(M, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: l,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state"
                    ),
                  }),
                  i.createElement(M, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: l,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state"
                    ),
                  }),
                ]),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingSettingsModal_Title")
                    )
                  )
                ),
                e,
                t,
                n,
                r.length > 1 &&
                  i.createElement(I, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: l,
                    vecValues: r,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: l,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude"
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: l,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration"
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: l,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency"
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_Click",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              e.GetInputSourceTouchSupport &&
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Touch",
                  SelectedAction: e.GetTouchAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnTouchActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
              this.renderFooter()
            );
          }
        };
        (0, o.gn)([h.ak], E.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], E.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([g.Fl], E.prototype, "BShowClickOptions", null),
          (0, o.gn)([g.Fl], E.prototype, "BShowTouchOptions", null),
          (E = (0, o.gn)([a.Pi], E));
        let O = class extends C {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "long_press_delay",
                  default: 1,
                  type: "float",
                  variableName: "flLongPressDelay",
                  mode: "click",
                },
                {
                  property: "double_press_delay",
                  default: 0.25,
                  type: "float",
                  variableName: "flDoublePressDelay",
                  mode: "click",
                },
                {
                  property: "click_activate_threshold",
                  default: 0.25,
                  type: "float",
                  variableName: "flClickActivateSensitivity",
                  mode: "click",
                },
                {
                  property: "touch_activate_threshold",
                  default: 0.25,
                  type: "float",
                  variableName: "flTouchActivateSensitivity",
                  mode: "touch",
                },
                {
                  property: "click_deactivate_threshold",
                  default: 0.2,
                  type: "float",
                  variableName: "flClickDeactivateSensitivity",
                  mode: "click",
                },
                {
                  property: "touch_deactivate_threshold",
                  default: 0.2,
                  type: "float",
                  variableName: "flTouchDeactivateSensitivity",
                  mode: "touch",
                },
                {
                  property: "click_initial_state",
                  default: !1,
                  type: "bool",
                  variableName: "bClickButtonInitialState",
                  mode: "click",
                },
                {
                  property: "touch_initial_state",
                  default: !1,
                  type: "bool",
                  variableName: "bTouchButtonInitialState",
                  mode: "touch",
                },
                {
                  property: "force_input",
                  default: "",
                  type: "string",
                  variableName: "strSelectedForceInput",
                  mode: "cick",
                },
                {
                  property: "haptic_amplitude",
                  default: 0.2,
                  type: "float",
                  variableName: "flHapticAmplitude",
                  mode: "click",
                },
                {
                  property: "haptic_frequency",
                  default: 20,
                  type: "float",
                  variableName: "flHapticFrequency",
                  mode: "click",
                },
                {
                  property: "haptic_duration",
                  default: 0,
                  type: "float",
                  variableName: "flHapticDuration",
                  mode: "click",
                },
                {
                  property: "touchy_click",
                  default: !1,
                  type: "bool",
                  variableName: "bTouchyClick",
                  mode: "touch",
                },
              ]),
              this.LoadDefaults();
          }
          get IsComplex() {
            let e = this.props.controllerWatcher[0];
            return !!(
              this.state.bShowAdvanced ||
              e.GetHeldAction(this.props.iMode) ||
              e.GetDoubleAction(this.props.iMode) ||
              e.GetLongAction(this.props.iMode)
            );
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          LocalizeForceInputModeString(e) {
            switch (e) {
              case "click":
                return (0, d.Xx)("#SourceInputMode_Click");
              case "value":
                return (0, d.Xx)("#SourceInputMode_Pull");
              case "force":
                return (0, d.Xx)("#SourceInputMode_Force");
              case "position":
                return (0, d.Xx)("#SourceInputMode_Position");
              case "":
                return (0, d.Xx)("#SourceInputMode_Default");
            }
            return (0, d.Xx)("#SourceInputMode_Default");
          }
          get BShowClickOptions() {
            let e = this.props.controllerWatcher[0],
              t = this.RInputOptions,
              n = e.GetInputSource;
            return (
              n.value ||
              n.force ||
              "position" == this.state.strSelectedForceInput ||
              (1 == t.length &&
                "position" == t[0] &&
                null != e.GetClickAction(this.props.iMode))
            );
          }
          get BShowTouchOptions() {
            let e = this.props.controllerWatcher[0];
            return (
              e.GetInputSourceTouchSupport &&
              null != e.GetTouchAction(this.props.iMode)
            );
          }
          get RInputOptions() {
            let e = this.props.controllerWatcher[0].GetInputSource,
              t = [];
            return (
              e.click && t.push("click"),
              e.value && t.push("value"),
              e.force && t.push("force"),
              ("joystick" != e.type && "trackpad" != e.type) ||
                t.push("position"),
              t
            );
          }
          renderSettingsContent() {
            let e,
              t,
              n,
              o = this.props.controllerWatcher[0],
              r = (o.GetInputSource, this.RInputOptions),
              a = [];
            r.length > 1 && r.push("");
            for (let e of r)
              a.push(new v.GZ(e, this.LocalizeForceInputModeString(e)));
            let s = this.BShowClickOptions,
              l = this.BShowTouchOptions,
              c = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (c = this.nextUniqueId()),
              s &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  })
                )),
              l &&
                (t = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(k, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(k, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  })
                )),
              this.props.bToggleButtonMode &&
                (n = [
                  i.createElement(M, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: c,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state"
                    ),
                  }),
                  i.createElement(M, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: c,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state"
                    ),
                  }),
                ]),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingSettingsModal_Title")
                    )
                  )
                ),
                e,
                t,
                n,
                a.length > 1 &&
                  i.createElement(I, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: c,
                    vecValues: a,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: c,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude"
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: c,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration"
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: c,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency"
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                "complex" == this.state.sSubMode &&
                  i.createElement(
                    "div",
                    null,
                    i.createElement(k, {
                      labelName: "#SourceInputMode_LongPressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flLongPressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "long_press_delay"
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "long_press_delay"
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                    i.createElement(k, {
                      labelName: "#SourceInputMode_DoublePressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flDoublePressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "double_press_delay"
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "double_press_delay"
                      ),
                      renderValue: this.renderSliderValue,
                    })
                  ),
                o.GetInputSourceTouchSupport &&
                  i.createElement(M, {
                    key: "touchy_click",
                    labelName: "#SourceInputMode_TouchyClick",
                    elementId: c,
                    value: this.state.bTouchyClick,
                    onReset: this.onPropertyReset.bind(this, "touchy_click"),
                    onChange: this.onPropertyChanged.bind(this, "touchy_click"),
                  }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
          OnHeldActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetHeldAction(this.props.iMode, e);
            });
          }
          OnLongActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetLongAction(this.props.iMode, e);
            });
          }
          OnSingleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetSingleAction(this.props.iMode, e);
            });
          }
          OnDoubleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetDoubleAction(this.props.iMode, e);
            });
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnToggleComplex() {
            this.state.bEditMode && this.setState({ bShowAdvanced: !0 });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              n = this.IsComplex;
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              n &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Single",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Double",
                    SelectedAction: e.GetDoubleAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnDoubleActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Long",
                    SelectedAction: e.GetLongAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnLongActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Held",
                    SelectedAction: e.GetHeldAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnHeldActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  e.GetInputSourceTouchSupport &&
                    i.createElement(b, {
                      sLocalizedInputType: "#SourceInputMode_Touch",
                      SelectedAction: e.GetTouchAction(this.props.iMode),
                      vecOptions: t,
                      fnOptionSelected: this.OnTouchActionChanged,
                      bReadOnly: !this.state.bEditMode,
                    })
                ),
              !n &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Click",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  e.GetInputSourceTouchSupport &&
                    i.createElement(b, {
                      sLocalizedInputType: "#SourceInputMode_Touch",
                      SelectedAction: e.GetTouchAction(this.props.iMode),
                      vecOptions: t,
                      fnOptionSelected: this.OnTouchActionChanged,
                      bReadOnly: !this.state.bEditMode,
                    }),
                  i.createElement(
                    "div",
                    {
                      className:
                        "SourceInputShowMore" +
                        (this.state.bEditMode ? "" : " Disabled"),
                      onClick: this.OnToggleComplex,
                    },
                    (0, d.Xx)("#SourceInputMode_MoreOptions")
                  )
                ),
              this.renderFooter()
            );
          }
        };
        (0, o.gn)([g.Fl], O.prototype, "IsComplex", null),
          (0, o.gn)([g.Fl], O.prototype, "BShowClickOptions", null),
          (0, o.gn)([g.Fl], O.prototype, "BShowTouchOptions", null),
          (0, o.gn)([g.Fl], O.prototype, "RInputOptions", null),
          (0, o.gn)([h.ak], O.prototype, "OnHeldActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnLongActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnSingleActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnDoubleActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnToggleComplex", null),
          (O = (0, o.gn)([a.Pi], O));
        let w = class extends C {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "long_press_delay",
                  default: 1,
                  type: "float",
                  variableName: "flLongPressDelay",
                  mode: "click",
                },
                {
                  property: "double_press_delay",
                  default: 0.25,
                  type: "float",
                  variableName: "flDoublePressDelay",
                  mode: "click",
                },
              ]),
              this.LoadDefaults();
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return e.toString();
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingSettingsModal_Title")
                    )
                  )
                ),
                i.createElement(k, {
                  labelName: "#SourceInputMode_LongPressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flLongPressDelay,
                  onReset: this.onPropertyReset.bind(this, "long_press_delay"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "long_press_delay"
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_DoublePressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flDoublePressDelay,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "double_press_delay"
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "double_press_delay"
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
          OnHeldActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetHeldAction(this.props.iMode, e);
            });
          }
          OnLongActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetLongAction(this.props.iMode, e);
            });
          }
          OnSingleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetSingleAction(this.props.iMode, e);
            });
          }
          OnDoubleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetDoubleAction(this.props.iMode, e);
            });
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(
                "div",
                null,
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Single",
                  SelectedAction: e.GetSingleAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnSingleActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Double",
                  SelectedAction: e.GetDoubleAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnDoubleActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Long",
                  SelectedAction: e.GetLongAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnLongActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Held",
                  SelectedAction: e.GetHeldAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnHeldActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                e.GetInputSourceTouchSupport &&
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  })
              ),
              this.renderFooter()
            );
          }
        };
        (0, o.gn)([h.ak], w.prototype, "OnHeldActionChanged", null),
          (0, o.gn)([h.ak], w.prototype, "OnLongActionChanged", null),
          (0, o.gn)([h.ak], w.prototype, "OnSingleActionChanged", null),
          (0, o.gn)([h.ak], w.prototype, "OnDoubleActionChanged", null),
          (0, o.gn)([h.ak], w.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], w.prototype, "OnTouchActionChanged", null),
          (w = (0, o.gn)([a.Pi], w));
        let R = class extends C {
          render() {
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              this.renderFooter()
            );
          }
        };
        R = (0, o.gn)([a.Pi], R);
        let T = class extends C {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "sub_mode",
                  default:
                    "joystick" ==
                    this.props.controllerWatcher[0].GetInputSourceType
                      ? "touch"
                      : "click",
                  type: "string",
                  variableName: "sSubMode",
                  mode: "click",
                },
                {
                  property: "overlap_pct",
                  default: 50,
                  type: "float",
                  variableName: "flOverlapPct",
                  mode: "click",
                },
                {
                  property: "deadzone_pct",
                  default: 25,
                  type: "float",
                  variableName: "flDeadzonePct",
                  mode: "click",
                },
                {
                  property: "sticky",
                  default: !1,
                  type: "boolean",
                  variableName: "bStickyDpad",
                  mode: "click",
                },
              ]),
              this.LoadDefaults(),
              "dpad" == this.props.sMode && this.EnsurePropertySet("sub_mode");
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(e).toString();
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingSettingsModal_Title")
                    )
                  )
                ),
                i.createElement(k, {
                  labelName: "#SourceInputMode_OverlapPercent",
                  elementId: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flOverlapPct,
                  onReset: this.onPropertyReset.bind(this, "overlap_pct"),
                  onChange: this.onPropertyChanged.bind(this, "overlap_pct"),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_DeadzonePercent",
                  elementId: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flDeadzonePct,
                  onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(M, {
                  key: "click_initial_state",
                  labelName: "#SourceInputMode_StickyDpad",
                  elementId: e,
                  value: this.state.bStickyDpad,
                  onReset: this.onPropertyReset.bind(this, "sticky"),
                  onChange: this.onPropertyChanged.bind(this, "sticky"),
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
          OnActionChanged(e, t) {
            this.props.controllerWatcher.forEach((n) => {
              p.c6.SetActionForInputModeType(
                n.GetFullInputPath,
                this.props.iMode,
                e,
                t,
                ["dpad", "dpad_click", "dpad_touch"]
              );
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              n = "dpad" == this.props.sMode,
              o = [
                new v.GZ("click", (0, d.Xx)("#SourceInputMode_Click")),
                new v.GZ("touch", (0, d.Xx)("#SourceInputMode_Touch")),
              ],
              r =
                (this.state.sSubMode,
                "click" == this.state.sSubMode
                  ? (0, d.Xx)("#SourceInputMode_Click")
                  : (0, d.Xx)("#SourceInputMode_Touch"));
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              n &&
                i.createElement(
                  "div",
                  { className: "FlexRow BindingActionWrapper" },
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel" },
                    (0, d.Xx)("#SourceInputMode_SubMode")
                  ),
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel BindingAction" },
                    this.state.bEditMode &&
                      i.createElement(v.vs, {
                        sLocalizedSelectedItem: r,
                        sValueSelectedItem: this.state.sSubMode,
                        vecOptions: o,
                        fnOptionSelected: this.onPropertyChanged.bind(
                          this,
                          "sub_mode"
                        ),
                      }),
                    !this.state.bEditMode && r
                  )
                ),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_North",
                SelectedAction: e.GetNorthAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "north"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_East",
                SelectedAction: e.GetEastAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "east"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_South",
                SelectedAction: e.GetSouthAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "south"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_West",
                SelectedAction: e.GetWestAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "west"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_Center",
                SelectedAction: e.GetCenterAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "center"),
                bReadOnly: !this.state.bEditMode,
              }),
              this.renderFooter()
            );
          }
        };
        (0, o.gn)([h.ak], T.prototype, "OnActionChanged", null),
          (T = (0, o.gn)([a.Pi], T));
        let D = class extends C {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0];
            (this.defaultProperties = []),
              "joystick" == this.props.sMode &&
                this.defaultProperties.push(
                  {
                    property: "sticky_click",
                    default: !1,
                    type: "boolean",
                    variableName: "bStickyClick",
                    mode: "joystick",
                  },
                  {
                    property: "sticky_activate_threshold",
                    default: 0.4,
                    type: "float",
                    variableName: "flStickyActivate",
                    mode: "joystick",
                  },
                  {
                    property: "sticky_deactivate_threshold",
                    default: 0.3,
                    type: "float",
                    variableName: "flStickyDeactivate",
                    mode: "joystick",
                  }
                );
            let n = t.GetInputSourceDefaultDeadzone;
            this.defaultProperties.push(
              {
                property: "deadzone_pct",
                default: n,
                type: "float",
                variableName: "flDeadzonePct",
                mode: "joystick",
              },
              {
                property: "maxzone_pct",
                default: 100,
                type: "float",
                variableName: "flMaxzonePct",
                mode: "joystick",
              },
              {
                property: "exponent",
                default: 1,
                type: "float",
                variableName: "flExponent",
                mode: "trackpad",
              }
            ),
              this.LoadDefaults(),
              (this.state.eTrackpadInvertMode = t.GetTrackpadInvertState(
                this.props.iMode
              ));
          }
          BModeHasSettings() {
            return !0;
          }
          OnTrackpadInvertModeChanged(e, t) {
            let n = this.props.controllerWatcher[0],
              o = n.GetTrackpadInvertState(this.props.iMode);
            switch (e) {
              case "y":
                o = t
                  ? o == p.NK.eTrackPadInvert_X
                    ? p.NK.eTrackPadInvert_XY
                    : p.NK.eTrackPadInvert_Y
                  : o == p.NK.eTrackPadInvert_XY
                  ? p.NK.eTrackPadInvert_X
                  : p.NK.eTrackPadInvert_None;
                break;
              case "x":
                o = t
                  ? o == p.NK.eTrackPadInvert_Y
                    ? p.NK.eTrackPadInvert_XY
                    : p.NK.eTrackPadInvert_X
                  : o == p.NK.eTrackPadInvert_XY
                  ? p.NK.eTrackPadInvert_Y
                  : p.NK.eTrackPadInvert_None;
            }
            n.SetTrackpadInvertState(this.props.iMode, o),
              this.setState({ eTrackpadInvertMode: o });
          }
          OnTrackpadInvertModeReset() {
            this.setState({ eTrackpadInvertMode: p.NK.eTrackPadInvert_None });
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [];
            return (
              "joystick" == this.props.sMode &&
                ((t = [
                  i.createElement(M, {
                    labelName: "#SourceInputMode_StickyClick",
                    elementId: e,
                    key: e,
                    value: this.state.bStickyClick,
                    onReset: this.onPropertyReset.bind(this, "sticky_click"),
                    onChange: this.onPropertyChanged.bind(this, "sticky_click"),
                  }),
                ]),
                this.state.bStickyClick &&
                  (t.push(
                    i.createElement(k, {
                      labelName: "#SourceInputMode_StickyClick_Activate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyActivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_activate_threshold"
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_activate_threshold"
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    })
                  ),
                  t.push(
                    i.createElement(k, {
                      labelName: "#SourceInputMode_StickyClick_Deactivate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyDeactivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_deactivate_threshold"
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_deactivate_threshold"
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    })
                  ))),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingSettingsModal_Title")
                    )
                  )
                ),
                i.createElement(M, {
                  labelName: "#SourceInputMode_InvertYAxis",
                  elementId: e,
                  value:
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_Y ||
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_XY,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "y"),
                }),
                i.createElement(M, {
                  labelName: "#SourceInputMode_InvertXAxis",
                  elementId: e,
                  value:
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_X ||
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_XY,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "x"),
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_DeadZone",
                  elementId: e,
                  key: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flDeadzonePct,
                  onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
                  renderValue: (e) => (e ? e.toString() : "-"),
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_MaxZone",
                  elementId: e,
                  key: e,
                  min: 5,
                  max: 100,
                  step: 5,
                  value: this.state.flMaxzonePct,
                  onReset: this.onPropertyReset.bind(this, "maxzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "maxzone_pct"),
                  renderValue: (e) => (e ? e.toString() : "-"),
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_Exponent",
                  elementId: e,
                  key: e,
                  min: 0.25,
                  max: 4,
                  step: 0.05,
                  value: this.state.flExponent,
                  onReset: this.onPropertyReset.bind(this, "exponent"),
                  onChange: this.onPropertyChanged.bind(this, "exponent"),
                  renderValue: (e) => (e ? e.toFixed(2) : "-"),
                }),
                t,
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnPositionActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetPositionAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              n = [];
            return (
              this.GetVector2DropDownItems(n, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceClickSupport &&
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Click",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                e.GetInputSourceTouchSupport &&
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Position",
                  SelectedAction: e.GetPositionAction(this.props.iMode),
                  vecOptions: n,
                  fnOptionSelected: this.OnPositionActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter()
              )
            );
          }
        };
        (0, o.gn)([h.ak], D.prototype, "OnTrackpadInvertModeChanged", null),
          (0, o.gn)([h.ak], D.prototype, "OnTrackpadInvertModeReset", null),
          (0, o.gn)([h.ak], D.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], D.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], D.prototype, "OnPositionActionChanged", null),
          (D = (0, o.gn)([a.Pi], D));
        let P = class extends C {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "scroll_mode",
                  default: "discrete",
                  type: "string",
                  variableName: "sScrollMode",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_trackpad_aspect_ratio",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollTrackpadAspectRatio",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_multiplier",
                  type: "float",
                  default: 23.3,
                  variableName: "fSmoothScrollMultiplier",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_acceleration_power",
                  type: "float",
                  default: 1.5,
                  variableName: "fSmoothScrollAccelerationPower",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_haptic_notches_per_touchpad",
                  type: "float",
                  default: 16,
                  variableName: "fSmoothScrollHapticNotchesPerTouchpad",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_scroll_start_distance",
                  type: "float",
                  default: 0.2,
                  variableName: "fSmoothScrollMinScrollStartDistance",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_throw_velocity",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollMinThrowVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_max_scroll_velocity",
                  type: "float",
                  default: 4,
                  variableName: "fSmoothScrollMaxScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_deceleration",
                  type: "float",
                  default: 0.975,
                  variableName: "fSmoothScrollDeceleration",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_last_velocities_to_average",
                  type: "float",
                  default: 1,
                  variableName: "unSmoothScrollMinLastVelocitiesToAverage",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_max_last_velocities_to_average",
                  type: "float",
                  default: 4,
                  variableName: "unSmoothScrollMaxLastVelocitiesToAverage",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_thrown_termination_velocity",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollThrownTerminationVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_threshold",
                  type: "float",
                  default: 0.85,
                  variableName: "fSmoothScrollEdgeScrollThreshold",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_threshold_vertical_bias",
                  type: "float",
                  default: 0,
                  variableName: "fSmoothScrollEdgeScrollThresholdVerticalBias",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_velocity",
                  type: "float",
                  default: 0.77,
                  variableName: "fSmoothScrollEdgeScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_min_swipe",
                  type: "float",
                  default: 0.5,
                  variableName: "fSmoothScrollEdgeMinSwipe",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_side_scroll_ratio",
                  type: "float",
                  default: 3,
                  variableName: "fSmoothScrollMinSideScrollRatio",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_joystick_max_scroll_velocity",
                  type: "float",
                  default: 20,
                  variableName: "fSmoothScrollJoystickMaxScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_joystick_min_input_magnitude",
                  type: "float",
                  default: 0.01,
                  variableName: "fSmoothScrollJoystickMinInputMagnitude",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_globalscalefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollTrackpadGlobalScaleFactor",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                  type: "bool",
                  default: !1,
                  variableName:
                    "bDiscreteScrollTrackpadHapticOnTouchStartEnabled",
                  mode: "click",
                },
                {
                  property:
                    "discrete_scroll_trackpad_direct_directionlock_enabled",
                  type: "bool",
                  default: !1,
                  variableName:
                    "bDiscreteScrollTrackpadLockGestureDirectionEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_noisethreshold_ontouch",
                  type: "float",
                  default: 0.15,
                  variableName: "fDiscreteScrollTrackpadNoiseReductionOnTouch",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_noisethreshold_onmove",
                  type: "float",
                  default: 0.01,
                  variableName: "fDiscreteScrollTrackpadNoiseReductionOnMove",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_noisethreshold_onreversal",
                  type: "float",
                  default: 0.045,
                  variableName:
                    "fDiscreteScrollTrackpadNoiseReductionOnReversal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_accumthreshold_ontouch",
                  type: "float",
                  default: 0.78,
                  variableName: "fDiscreteScrollTrackpadAccumThresholdOnTouch",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_accumthreshold_onmove",
                  type: "float",
                  default: 0.28,
                  variableName: "fDiscreteScrollTrackpadAccumThresholdOnMove",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_accumthreshold_onreversal",
                  type: "float",
                  default: 0.84,
                  variableName:
                    "fDiscreteScrollTrackpadAccumThresholdOnReversal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_enabled",
                  type: "bool",
                  default: !0,
                  variableName: "bDiscreteScrollTrackpadFlickEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_flick_threshold",
                  type: "float",
                  default: 0.0025,
                  variableName: "fDiscreteScrollTrackpadFlickThreshold",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_multiplier",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollTrackpadFlickScrollMultiplier",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_speed",
                  type: "float",
                  default: 0.975,
                  variableName: "fDiscreteScrollTrackpadFlickSpeed",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_enabled",
                  type: "bool",
                  default: !0,
                  variableName:
                    "bDiscreteScrollTrackpadSlideAndHoldGestureEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_scalefactor",
                  type: "float",
                  default: 1,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldScaleFactor",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                  type: "float",
                  default: 1,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_bordertop",
                  type: "float",
                  default: 0.55,
                  variableName: "fDiscreteScrollTrackpadSlideAndHoldBorderTop",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_borderbottom",
                  type: "float",
                  default: -0.65,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldBorderBottom",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_hapticenabled",
                  type: "bool",
                  default: !0,
                  variableName:
                    "bDiscreteScrollTrackpadSlideAndHoldHapticEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_joystick_ratefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollJoystickScrollRate",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_scalefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollJoystickScrollScale",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_deadzone_horizontal",
                  type: "float",
                  default: 0.1,
                  variableName:
                    "fDiscreteScrollJoystickScrollDeadzoneHorizontal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_deadzone_vertical",
                  type: "float",
                  default: 0.1,
                  variableName: "fDiscreteScrollJoystickScrollDeadzoneVertical",
                  mode: "touch",
                },
              ]),
              this.LoadDefaults();
          }
          OnSave() {
            this.setState({ bEditMode: !1 });
          }
          OnScrollActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetScrollAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return e.toString();
          }
          LocalizeScrollModeString(e) {
            switch (e) {
              case "smooth":
                return (0, d.Xx)("#SourceInputMode_ScrollMode_Smooth");
              case "discrete":
                return (0, d.Xx)("#SourceInputMode_ScrollMode_Discrete");
            }
            return (0, d.Xx)("#SourceInputMode_Default");
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [
                new v.GZ("smooth", this.LocalizeScrollModeString("smooth")),
                new v.GZ("discrete", this.LocalizeScrollModeString("discrete")),
              ],
              n = "smooth" === this.state.sScrollMode,
              o =
                "joystick" ==
                this.props.controllerWatcher[0].GetInputSourceType;
            return i.createElement(
              "div",
              { className: "InputSettingsModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.Xx)("#BindingSettingsModal_Title")
                  )
                )
              ),
              i.createElement(
                "div",
                { className: "InputSettingsScrollablePanel" },
                i.createElement(I, {
                  labelName: "#SourceInputMode_ScrollMode",
                  elementId: e,
                  vecValues: t,
                  selectedValue: this.state.sScrollMode,
                  selectedValueLocalized: this.LocalizeScrollModeString(
                    this.state.sScrollMode
                  ),
                  onReset: this.onPropertyReset.bind(this, "scroll_mode"),
                  onChange: this.onPropertyChanged.bind(this, "scroll_mode"),
                }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_TrackpadAspectRatio",
                    elementId: e,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollTrackpadAspectRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_SmoothScroll_Multiplier",
                    elementId: e,
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: this.state.fSmoothScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_multiplier"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_multiplier"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_AccelerationPower",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollAccelerationPower,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_acceleration_power"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_acceleration_power"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_NotchesPerTouchpad",
                    elementId: e,
                    min: 1,
                    max: 64,
                    step: 1,
                    value: this.state.fSmoothScrollHapticNotchesPerTouchpad,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_SmoothScroll_StartDistance",
                    elementId: e,
                    min: 0.01,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollMinScrollStartDistance,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_SmoothScroll_MinThrowVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollMinThrowVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_throw_velocity"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_throw_velocity"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 15,
                    step: 0.1,
                    value: this.state.fSmoothScrollMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_SmoothScroll_Deceleration",
                    elementId: e,
                    min: 0.5,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollDeceleration,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_deceleration"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_deceleration"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 10,
                    step: 1,
                    value: this.state.unSmoothScrollMinLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 20,
                    step: 1,
                    value: this.state.unSmoothScrollMaxLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_ThrownTerminationVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollThrownTerminationVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThreshold",
                    elementId: e,
                    min: 0.1,
                    max: 2,
                    step: 0.05,
                    value: this.state.fSmoothScrollEdgeScrollThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThresholdVerticalBias",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.01,
                    value:
                      this.state.fSmoothScrollEdgeScrollThresholdVerticalBias,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollVelocity",
                    elementId: e,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_SmoothScroll_EdgeMinSwipe",
                    elementId: e,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeMinSwipe,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_min_swipe"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_min_swipe"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  !o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinSideScrollRatio",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.5,
                    value: this.state.fSmoothScrollMinSideScrollRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 50,
                    step: 0.1,
                    value: this.state.fSmoothScrollJoystickMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                n &&
                  o &&
                  i.createElement(k, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_Joystick_MinInputMagnitude",
                    elementId: e,
                    min: 0.005,
                    max: 0.2,
                    step: 0.005,
                    value: this.state.fSmoothScrollJoystickMinInputMagnitude,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude"
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_GlobalScaleFactor",
                    value: this.state.fDiscreteScrollTrackpadGlobalScaleFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(M, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_HapticOnTouchStart",
                    key: "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadHapticOnTouchStartEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(M, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_DirectDirectionLock",
                    key: "discrete_scroll_trackpad_direct_directionlock_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadLockGestureDirectionEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnTouch",
                    value:
                      this.state.fDiscreteScrollTrackpadNoiseReductionOnTouch,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnMove",
                    value:
                      this.state.fDiscreteScrollTrackpadNoiseReductionOnMove,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnReversal",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadNoiseReductionOnReversal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnTouch",
                    value:
                      this.state.fDiscreteScrollTrackpadAccumThresholdOnTouch,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnMove",
                    value:
                      this.state.fDiscreteScrollTrackpadAccumThresholdOnMove,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnReversal",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadAccumThresholdOnReversal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(M, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickEnabled",
                    key: "discrete_scroll_trackpad_flick_enabled",
                    value: this.state.bDiscreteScrollTrackpadFlickEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.001,
                    max: 0.1,
                    step: 0.001,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickThreshold",
                    value: this.state.fDiscreteScrollTrackpadFlickThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 3,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickScrollMultiplier",
                    value:
                      this.state.fDiscreteScrollTrackpadFlickScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.9,
                    max: 0.999,
                    step: 0.001,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickThrowSpeed",
                    value: this.state.fDiscreteScrollTrackpadFlickSpeed,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(M, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldGestureEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.02,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldScaleFactor",
                    value:
                      this.state.fDiscreteScrollTrackpadSlideAndHoldScaleFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.2,
                    max: 4,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldPulseRate",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderTop",
                    value:
                      this.state.fDiscreteScrollTrackpadSlideAndHoldBorderTop,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: -1,
                    max: 0,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderBottom",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadSlideAndHoldBorderBottom,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom"
                    ),
                  }),
                !n &&
                  !o &&
                  i.createElement(M, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldHapticEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldHapticEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled"
                    ),
                  }),
                !n &&
                  o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_ScrollRateFactor",
                    value: this.state.fDiscreteScrollJoystickScrollRate,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor"
                    ),
                  }),
                !n &&
                  o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_ScrollScaleFactor",
                    value: this.state.fDiscreteScrollJoystickScrollScale,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor"
                    ),
                  }),
                !n &&
                  o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.5,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Horizontal",
                    value:
                      this.state
                        .fDiscreteScrollJoystickScrollDeadzoneHorizontal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal"
                    ),
                  }),
                !n &&
                  o &&
                  i.createElement(k, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.5,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Vertical",
                    value:
                      this.state.fDiscreteScrollJoystickScrollDeadzoneVertical,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical"
                    ),
                  })
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.Xx)("#Button_Close")
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetVector2DropDownItems(t, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Scroll",
                  SelectedAction: e.GetScrollAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnScrollActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter()
              )
            );
          }
        };
        (0, o.gn)([h.ak], P.prototype, "OnSave", null),
          (0, o.gn)([h.ak], P.prototype, "OnScrollActionChanged", null),
          (P = (0, o.gn)([a.Pi], P));
        let x = class extends C {
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnPullActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetPullAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              n = [];
            return (
              this.GetVector1DropDownItems(n, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceClickSupport &&
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_TriggerClick",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                e.GetInputSourceTouchSupport &&
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                i.createElement(b, {
                  sLocalizedInputType: "#SourceInputMode_Pull",
                  SelectedAction: e.GetPullAction(this.props.iMode),
                  vecOptions: n,
                  fnOptionSelected: this.OnPullActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter()
              )
            );
          }
        };
        (0, o.gn)([h.ak], x.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], x.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], x.prototype, "OnPullActionChanged", null),
          (x = (0, o.gn)([a.Pi], x));
        let B = class extends C {
          OnForceActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetForceAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetVector1DropDownItems(t, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceForceSupport &&
                  i.createElement(b, {
                    sLocalizedInputType: "#SourceInputMode_Force",
                    SelectedAction: e.GetForceAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnForceActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                this.renderFooter()
              )
            );
          }
        };
        (0, o.gn)([h.ak], B.prototype, "OnForceActionChanged", null),
          (B = (0, o.gn)([a.Pi], B));
        let N = class extends C {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "capsense_enable_threshold",
                  default: 0.8,
                  type: "float",
                  variableName: "flCapsenseEnableThreshold",
                  mode: "grab",
                },
                {
                  property: "value_hold_threshold",
                  default: 0.7,
                  type: "float",
                  variableName: "flGrabThreshold",
                  mode: "grab",
                },
                {
                  property: "value_release_threshold",
                  default: 0.65,
                  type: "float",
                  variableName: "flReleaseThreshold",
                  mode: "grab",
                },
                {
                  property: "force_hold_threshold",
                  default: 0.1,
                  type: "float",
                  variableName: "flForceHoldThreshold",
                  mode: "grab",
                },
                {
                  property: "force_release_threshold",
                  default: 0.05,
                  type: "float",
                  variableName: "flForceReleaseThreshold",
                  mode: "grab",
                },
                {
                  property: "downgrade_speed",
                  default: 1,
                  type: "float",
                  variableName: "flDowngradeSpeed",
                  mode: "grab",
                },
                {
                  property: "drop_speed",
                  default: 0.1,
                  type: "float",
                  variableName: "flDropSpeed",
                  mode: "grab",
                },
                {
                  property: "haptic_amplitude",
                  default: 0,
                  type: "float",
                  variableName: "flHapticAmplitude",
                  mode: "grab",
                },
                {
                  property: "haptic_frequency",
                  default: 20,
                  type: "float",
                  variableName: "flHapticFrequency",
                  mode: "grab",
                },
                {
                  property: "haptic_duration",
                  default: 0,
                  type: "float",
                  variableName: "flHapticDuration",
                  mode: "grab",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, _.enableUniqueIds)(this);
          }
          OnGrabActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetGrabAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderNormalizedSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          renderNormalizedSplitSliderValue(e, t, n) {
            let o = (e > 1 ? n : t) + ": ";
            return (e = e > 1 ? e - 1 : e), o + Math.round(100 * e).toString();
          }
          renderSpeedSliderValue(e) {
            return (
              e.toString() + " " + (0, d.Xx)("#MetersPerSecond_Abbreviation")
            );
          }
          renderSettingsContent() {
            let e = this.props.controllerWatcher[0],
              t = "pinch" == e.GetInputSourceType,
              n = (0, d.Xx)(
                "pinch" == e.GetInputSourceType
                  ? "#SourceInputMode_Pull"
                  : "#SourceInputMode_Proximity"
              ),
              r = !("pinch" == e.GetInputSourceType),
              a = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (a = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingSettingsModal_Title")
                    )
                  )
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  t &&
                    i.createElement(k, {
                      labelName: "#SourceInputMode_CapsenseEnableThreshold",
                      elementId: a,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flCapsenseEnableThreshold,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "capsense_enable_threshold"
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "capsense_enable_threshold"
                      ),
                      renderValue: this.renderNormalizedSliderValue,
                    }),
                  i.createElement(k, {
                    labelName: "#SourceInputMode_GrabThreshold",
                    elementId: a,
                    halfSplit: r,
                    min: 0,
                    max: r ? 2 : 1,
                    step: 0.05,
                    value: this.state.flGrabThreshold,
                    onReset: () =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        yield this.onPropertyReset("value_hold_threshold");
                        const e = this.state.flGrabThreshold;
                        this.state.flReleaseThreshold > e &&
                          this.setState({ flReleaseThreshold: e });
                      }),
                    onChange: (e) => {
                      this.state.flReleaseThreshold > e &&
                        this.setState({ flReleaseThreshold: e }),
                        this.onPropertyChanged("value_hold_threshold", e);
                    },
                    renderValue: (e) =>
                      this.renderNormalizedSplitSliderValue(
                        e,
                        n,
                        (0, d.Xx)("#SourceInputMode_Force")
                      ),
                  }),
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ReleaseThreshold",
                    elementId: a,
                    halfSplit: r,
                    min: 0,
                    max: r ? 2 : 1,
                    step: 0.05,
                    value: this.state.flReleaseThreshold,
                    onReset: () =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        yield this.onPropertyReset("value_release_threshold");
                        const e = this.state.flReleaseThreshold;
                        this.state.flGrabThreshold < e &&
                          this.setState({ flGrabThreshold: e });
                      }),
                    onChange: (e) => {
                      this.state.flGrabThreshold < e &&
                        this.setState({ flGrabThreshold: e }),
                        this.onPropertyChanged("value_release_threshold", e);
                    },
                    renderValue: (e) =>
                      this.renderNormalizedSplitSliderValue(
                        e,
                        n,
                        (0, d.Xx)("#SourceInputMode_Force")
                      ),
                  }),
                  i.createElement(
                    "div",
                    {
                      className: "InputSettingsCloseButton Label AllCaps",
                      onClick: () => {
                        this.setState({
                          bShowAdvanced: !this.state.bShowAdvanced,
                        });
                      },
                    },
                    (0, d.Xx)(
                      this.state.bShowAdvanced
                        ? "#DisplaySettings_HideAdvancedSettings"
                        : "#DisplaySettings_ShowAdvancedSettings"
                    )
                  ),
                  this.state.bShowAdvanced &&
                    i.createElement(
                      "div",
                      null,
                      !1,
                      i.createElement(k, {
                        labelName: "#SourceInputMode_ForceHoldThreshold",
                        elementId: a,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceHoldThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_hold_threshold"
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_hold_threshold"
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      i.createElement(k, {
                        labelName: "#SourceInputMode_ForceReleaseThreshold",
                        elementId: a,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceReleaseThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_release_threshold"
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_release_threshold"
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      i.createElement(k, {
                        labelName: "#SourceInputMode_DowngradeSpeed",
                        elementId: a,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDowngradeSpeed,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "downgrade_speed"
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "downgrade_speed"
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                      i.createElement(k, {
                        labelName: "#SourceInputMode_DropSpeed",
                        elementId: a,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDropSpeed,
                        onReset: this.onPropertyReset.bind(this, "drop_speed"),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "drop_speed"
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      })
                    )
                ),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_Grab",
                SelectedAction: e.GetGrabAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnGrabActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              this.renderFooter()
            );
          }
        };
        (0, o.gn)([h.ak], N.prototype, "OnGrabActionChanged", null),
          (N = (0, o.gn)([a.Pi], N));
        let A = class extends C {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "on/x",
                  default: 1,
                  type: "float",
                  variableName: "flOnX",
                  mode: "scalar_constant",
                },
                {
                  property: "off/x",
                  default: 0,
                  type: "float",
                  variableName: "flOffX",
                  mode: "scalar_constant",
                },
                {
                  property: "on/y",
                  default: 1,
                  type: "float",
                  variableName: "flOnY",
                  mode: "scalar_constant",
                },
                {
                  property: "off/y",
                  default: 0,
                  type: "float",
                  variableName: "flOffY",
                  mode: "scalar_constant",
                },
                {
                  property: "on/z",
                  default: 1,
                  type: "float",
                  variableName: "flOnZ",
                  mode: "scalar_constant",
                },
                {
                  property: "off/z",
                  default: 0,
                  type: "float",
                  variableName: "flOffZ",
                  mode: "scalar_constant",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, _.enableUniqueIds)(this);
          }
          OnValueActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetValueAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return this.GetActionArity() >= 1;
          }
          renderNormalizedSliderValue(e) {
            return e.toFixed(1);
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = this.GetActionArity();
            return i.createElement(
              "div",
              { className: "InputSettingsModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.Xx)("#BindingSettingsModal_Title")
                  )
                )
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                t >= 1 &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ScalarOffX",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffX,
                    onReset: this.onPropertyReset.bind(this, "off/x"),
                    onChange: this.onPropertyChanged.bind(this, "off/x"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                t >= 2 &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ScalarOffY",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffY,
                    onReset: this.onPropertyReset.bind(this, "off/y"),
                    onChange: this.onPropertyChanged.bind(this, "off/y"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                t >= 3 &&
                  i.createElement(k, {
                    labelName: "#SourceInputMode_ScalarOffZ",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffZ,
                    onReset: this.onPropertyReset.bind(this, "off/z"),
                    onChange: this.onPropertyChanged.bind(this, "off/z"),
                    renderValue: this.renderNormalizedSliderValue,
                  })
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.Xx)("#Button_Close")
              )
            );
          }
          GetActionArity() {
            let e = this.props.controllerWatcher[0].GetValueAction(
              this.props.iMode
            );
            if (!e) return 0;
            switch (e.type) {
              case "vector1":
                return 1;
              case "vector2":
                return 2;
              case "vector3":
                return 3;
              default:
                return 0;
            }
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            this.GetVector1DropDownItems(t, !1),
              this.GetVector2DropDownItems(t, !1),
              this.GetVector3DropDownItems(t, !1),
              this.AddNoneItems(t);
            let n = "";
            this.hasOwnProperty("nextUniqueId") && (n = this.nextUniqueId());
            let o = this.GetActionArity();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(b, {
                sLocalizedInputType: "#SourceInputMode_ScalarValue",
                SelectedAction: e.GetValueAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnValueActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              o >= 1 &&
                i.createElement(k, {
                  labelName: "#SourceInputMode_ScalarOnX",
                  elementId: n,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnX,
                  onChange: this.onPropertyChanged.bind(this, "on/x"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              o >= 2 &&
                i.createElement(k, {
                  labelName: "#SourceInputMode_ScalarOnY",
                  elementId: n,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnY,
                  onChange: this.onPropertyChanged.bind(this, "on/y"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              o >= 3 &&
                i.createElement(k, {
                  labelName: "#SourceInputMode_ScalarOnZ",
                  elementId: n,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnZ,
                  onChange: this.onPropertyChanged.bind(this, "on/z"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              this.renderFooter()
            );
          }
        };
        (0, o.gn)([h.ak], A.prototype, "OnValueActionChanged", null),
          (A = (0, o.gn)([a.Pi], A));
        var L = n(3947);
        let V = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bInEditMode: !1 });
          }
          OnEdit(e) {
            this.setState({ bInEditMode: e });
          }
          componentWillMount() {
            this.setState({
              bInEditMode:
                this.props.controllerWatcher[0].BHasModeSelectionPending(
                  this.props.iMode
                ),
            });
          }
          componentWillReceiveProps(e) {
            e.iMode != this.props.iMode &&
              this.setState({
                bInEditMode:
                  this.props.controllerWatcher[0].BHasModeSelectionPending(
                    e.iMode
                  ),
              });
          }
          render() {
            let e = {
              controllerWatcher: this.props.controllerWatcher,
              iMode: this.props.iMode,
              sMode: this.props.sMode,
              ParentEdit: this.OnEdit,
              bReadOnly: this.props.bReadOnly,
              bStartInEditMode: this.state.bInEditMode,
              bShowModeOptionsDropDownOnStart:
                this.props.controllerWatcher[0].BHasModeSelectionPending(
                  this.props.iMode
                ),
              bToggleButtonMode: "toggle_button" == this.props.sMode,
              sActionSet: p.c6.SelectedActionSet,
            };
            switch (this.props.sMode) {
              case "toggle_button":
                return i.createElement(E, Object.assign({}, e));
              case "trackpad":
              case "joystick":
                return i.createElement(D, Object.assign({}, e));
              case "complex_button":
                return i.createElement(w, Object.assign({}, e));
              case "button":
                return i.createElement(O, Object.assign({}, e));
              case "dpad":
              case "dpad_touch":
              case "dpad_click":
                return i.createElement(T, Object.assign({}, e));
              case "scroll":
              case "trackpad_scroll":
                return i.createElement(P, Object.assign({}, e));
              case "trigger":
                return i.createElement(x, Object.assign({}, e));
              case "force_sensor":
                return i.createElement(B, Object.assign({}, e));
              case "grab":
                return i.createElement(N, Object.assign({}, e));
              case "scalar_constant":
                return i.createElement(A, Object.assign({}, e));
              default:
                return i.createElement(R, Object.assign({}, e));
            }
          }
        };
        (0, o.gn)([h.ak], V.prototype, "OnEdit", null),
          (V = (0, o.gn)([a.Pi], V));
        class H {
          constructor(e, t, n, o) {
            (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.nPointScale = o),
              this.toString.bind(this);
          }
          toString() {
            return (
              this.x + "," + this.y + "," + this.width + "," + this.nPointScale
            );
          }
        }
        let F = class extends i.Component {
          constructor() {
            super(...arguments),
              (this.m_HTMLButton = void 0),
              (this.m_SVGElement = void 0);
          }
          AddMode() {
            this.props.controllerWatcher.forEach((e) => {
              e.AddInputMode("none");
            });
          }
          componentWillUnmount() {
            this.props.controllerWatcher.forEach((e) => {
              e.cancelWatcher();
            });
          }
          BindButtonRef(e) {
            (this.m_HTMLButton = e), this.m_HTMLButton && this.UpdateSVGPath();
          }
          BindSVGRef(e) {
            (this.m_SVGElement = e), this.UpdateSVGPath();
          }
          UpdateSVGPath() {
            if (
              this.m_HTMLButton &&
              this.m_SVGElement &&
              this.props.ptControllerImagePosition
            ) {
              let e = this.m_SVGElement.children.namedItem("SourcePath"),
                t = this.m_SVGElement.children.namedItem("SourceLine"),
                n = this.m_SVGElement.children.namedItem("SourceCircle"),
                o = this.props.controllerWatcher[0],
                i = this.props.eControllerButtonSide == p.ik.eButtonSide_Right,
                r = this.props.eControllerButtonSide == p.ik.eButtonSide_None,
                a = this.m_HTMLButton.getBoundingClientRect(),
                s = this.m_SVGElement.getBoundingClientRect(),
                l = o.GetSVGEndPoint();
              (l.x *= this.props.ptControllerImagePosition.nPointScale),
                (l.y *= this.props.ptControllerImagePosition.nPointScale),
                r ||
                  i ||
                  (l.x = this.props.ptControllerImagePosition.width - l.x),
                (l.x += this.props.ptControllerImagePosition.x - s.left),
                (l.y += this.props.ptControllerImagePosition.y - s.top);
              let c = new p.E9(0, a.top - s.top);
              c.x = i ? a.left - 10 : a.right + 10;
              let d = i ? -20 : 20,
                h = c.x + d + "," + c.y + " " + l.x + "," + l.y;
              e.setAttribute("points", h);
              let u = c.x + "," + c.y + " " + (c.x + d) + "," + c.y;
              t.setAttribute("points", u),
                n.setAttribute("cx", l.x + ""),
                n.setAttribute("cy", l.y + "");
            }
          }
          OnMouseEnter(e) {
            this.UpdateSVGPath(),
              this.m_SVGElement &&
                this.m_SVGElement.classList.add("MenuSVGVisible");
          }
          OnMouseLeave(e) {
            this.m_SVGElement &&
              this.m_SVGElement.classList.remove("MenuSVGVisible");
          }
          render() {
            let e = this.props.strSVGClass;
            e += " MenuSVG";
            let t = this.props.controllerWatcher[0],
              n = 0,
              o = t.GetModes.map(
                (e, t) => (
                  ++n,
                  i.createElement(V, {
                    key: t,
                    sMode: e.mode,
                    iMode: t,
                    controllerWatcher: this.props.controllerWatcher,
                    bReadOnly: this.props.bReadOnly,
                  })
                )
              );
            return i.createElement(
              "div",
              {
                className: "FlexColumn BindingInputSection",
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              i.createElement(
                "div",
                { className: "FlexRow" },
                i.createElement(
                  "div",
                  { className: "Label Title" },
                  t.GetControllerInputName
                ),
                !this.props.bReadOnly &&
                  i.createElement(
                    "div",
                    {
                      className: "Label FlexRightAlignChild",
                      onClick: this.AddMode,
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_add.svg",
                    })
                  )
              ),
              i.createElement("hr", { ref: this.BindButtonRef }),
              n > 0 && i.createElement("div", { className: "FlexColumn" }, o),
              i.createElement(m.Z, { onReflow: this.UpdateSVGPath }),
              i.createElement(
                "svg",
                {
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg",
                  ref: this.BindSVGRef,
                },
                i.createElement(
                  "defs",
                  null,
                  i.createElement(
                    "radialGradient",
                    { id: "buttonGradient" },
                    i.createElement("stop", {
                      offset: "0%",
                      stopColor: "var(--bordercolor)",
                      stopOpacity: "0.8",
                    }),
                    i.createElement("stop", {
                      offset: "100%",
                      stopColor: "var(--bordercolor)",
                      stopOpacity: "0",
                    })
                  )
                ),
                i.createElement("polyline", {
                  id: "SourceLine",
                  stroke: "var(--bordercolor)",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("polyline", {
                  id: "SourcePath",
                  stroke: "var(--bordercolor)",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("circle", {
                  id: "SourceCircle",
                  r: "2rem",
                  fill: "url(#buttonGradient)",
                })
              )
            );
          }
        };
        (0, o.gn)([h.ak], F.prototype, "AddMode", null),
          (0, o.gn)([h.ak], F.prototype, "BindButtonRef", null),
          (0, o.gn)([h.ak], F.prototype, "BindSVGRef", null),
          (0, o.gn)([h.ak], F.prototype, "UpdateSVGPath", null),
          (0, o.gn)([h.ak], F.prototype, "OnMouseEnter", null),
          (0, o.gn)([h.ak], F.prototype, "OnMouseLeave", null),
          (F = (0, o.gn)([a.Pi], F));
        let U = class extends i.Component {
          render() {
            let e = p.c6.SelectedControllerTypeInfo;
            if (!e || !this.props.selectedActionSet) return null;
            p.c6.SelectedControllerTypeLocalizedName;
            let t = [];
            Object.keys(e.input_source).forEach((n) => {
              t.push({ name: n, order: e.input_source[n].order });
            }),
              t.sort((e, t) => e.order - t.order);
            let n = t.map((t, n) => {
              let o = e.input_source[t.name];
              if ("pose" == o.type || "vibration" == o.type) return null;
              if (
                "InputValueVisibility_SteamVRInternal" == o.visibility &&
                !p.c6.CurrentAppCanAccessPrivateInputs
              )
                return null;
              if (
                "InputValueVisibility_AvailableButHidden" == o.visibility &&
                !L.I.ShowHiddenInputs
              )
                return null;
              if (null != o.side)
                switch (o.side) {
                  case "left":
                    if (
                      this.props.eControllerButtonSide != p.ik.eButtonSide_Left
                    )
                      return null;
                    break;
                  case "right":
                    if (
                      this.props.eControllerButtonSide != p.ik.eButtonSide_Right
                    )
                      return null;
                }
              let r = [];
              return (
                r.push(
                  p.c6.GetControllerWatcherForSourceFromControllerType(
                    e,
                    this.props.eControllerButtonSide,
                    t.name,
                    this.props.selectedActionSet.name
                  )
                ),
                this.props.eControllerButtonOtherSide &&
                  this.props.eControllerButtonOtherSide.valueOf() !=
                    p.ik.eButtonSide_None &&
                  r.push(
                    p.c6.GetControllerWatcherForSourceFromControllerType(
                      e,
                      this.props.eControllerButtonOtherSide,
                      t.name,
                      this.props.selectedActionSet.name
                    )
                  ),
                i.createElement(F, {
                  key: n,
                  controllerWatcher: r,
                  strSVGClass: this.props.strSVGClass,
                  bReadOnly: this.props.bReadOnly,
                  eControllerButtonSide: this.props.eControllerButtonSide,
                  ptControllerImagePosition:
                    this.props.ptControllerImagePosition,
                })
              );
            });
            return i.createElement("div", null, n);
          }
        };
        U = (0, o.gn)([a.Pi], U);
        let G = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              this.props.bSingleMode
                ? (this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new H(0, 0, 0, 0),
                    ptRightController: new H(0, 0, 0, 0),
                  })
                : this.props.selectedActionSet &&
                  "single" != this.props.selectedActionSet.usage
                ? ((this.state = {
                    bMirrorBinding: !1,
                    ptLeftController: new H(0, 0, 0, 0),
                    ptRightController: new H(0, 0, 0, 0),
                  }),
                  this.props.fnSetMirroredMode(!1))
                : this.props.selectedActionSet &&
                  ((this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new H(0, 0, 0, 0),
                    ptRightController: new H(0, 0, 0, 0),
                  }),
                  this.props.fnSetMirroredMode(!0));
          }
          componentWillReceiveProps(e) {
            let t = !1,
              n = e.selectedActionSet;
            !n ||
              (this.props.selectedActionSet &&
                n.name == this.props.selectedActionSet.name) ||
              ("single" == n.usage &&
                ((t = !0),
                Object.keys(
                  p.c6.SelectedControllerTypeInfo.input_source
                ).forEach((e) => {
                  let o = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      p.ik.eButtonSide_Left,
                      e,
                      n.name
                    ),
                    i = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      p.ik.eButtonSide_Right,
                      e,
                      n.name
                    );
                  t = t && i.BindingsMatch(o);
                })),
              this.setState({ bMirrorBinding: t }),
              this.props.fnSetMirroredMode(t));
          }
          ToggleMirrorMode(e) {
            if ("single" == this.props.selectedActionSet.usage) {
              let t = this.state.bMirrorBinding;
              this.setState({ bMirrorBinding: e }),
                this.props.fnSetMirroredMode(!this.state.bMirrorBinding),
                t ||
                  Object.keys(
                    p.c6.SelectedControllerTypeInfo.input_source
                  ).forEach((e) => {
                    let t =
                      p.c6.GetControllerWatcherForSourceFromControllerType(
                        p.c6.SelectedControllerTypeInfo,
                        p.ik.eButtonSide_Left,
                        e,
                        this.props.selectedActionSet.name
                      );
                    p.c6
                      .GetControllerWatcherForSourceFromControllerType(
                        p.c6.SelectedControllerTypeInfo,
                        p.ik.eButtonSide_Right,
                        e,
                        this.props.selectedActionSet.name
                      )
                      .CopyActions(t);
                  });
            }
          }
          UpdatePositionHelper(e) {
            let t = 1,
              n = 0,
              o = 0,
              i = 0;
            if (e) {
              let r = e.getBoundingClientRect();
              if (((i = r.width), e.naturalWidth > 0))
                return (
                  (t = r.height / e.naturalHeight),
                  (o = r.left),
                  (n = r.top),
                  new H(o, n, i, t)
                );
            }
          }
          OnUpdateControllerPicturePosition() {
            this.setState({
              ptLeftController: this.UpdatePositionHelper(
                this.m_LeftControllerImage
              ),
            }),
              this.setState({
                ptRightController: this.UpdatePositionHelper(
                  this.m_RightControllerImage
                ),
              });
          }
          BindLeftControllerImage(e) {
            (this.m_LeftControllerImage = e),
              this.setState({ ptLeftController: this.UpdatePositionHelper(e) });
          }
          BindRightControllerImage(e) {
            (this.m_RightControllerImage = e),
              this.setState({
                ptRightController: this.UpdatePositionHelper(e),
              });
          }
          render() {
            let e = p.c6.SelectedControllerTypeInfo;
            if (!e) return null;
            let t = "",
              n = "";
            this.props.bSingleMode ||
              ((t = e.input_bindingui_left.transform
                ? e.input_bindingui_left.transform
                : ""),
              (n = e.input_bindingui_left.uri
                ? e.input_bindingui_left.uri
                : ""));
            let o = e.input_bindingui_right.transform
                ? e.input_bindingui_right.transform
                : "",
              r = e.input_bindingui_right.uri
                ? e.input_bindingui_right.uri
                : "",
              a = "",
              s = p.ik.eButtonSide_Right,
              l = this.props.selectedActionSet,
              c = !1,
              h = p.ik.eButtonSide_None;
            if (!this.props.bSingleMode) {
              if (null == l)
                return (
                  console.warn(
                    "ControllerBindingHandedControllers::render - Got undefined actionSet."
                  ),
                  null
                );
              "single" == l.usage &&
                ((a = this.state.bMirrorBinding ? "Mirrored" : ""),
                (c = !this.props.bReadOnly),
                this.state.bMirrorBinding && (h = p.ik.eButtonSide_Right));
            }
            let u = p.c6.SelectedControllerTypeLocalizedName,
              g = (0, d.Xx)("#BindingUI_LeftHandController", u),
              _ = (0, d.Xx)("#BindingUI_RightHandController", u),
              v =
                (this.props.bReadOnly,
                !this.props.bReadOnly ||
                  (p.c6.SelectedActionSetChords &&
                    p.c6.SelectedActionSetChords.length > 0));
            return i.createElement(
              "div",
              {
                className:
                  "BindingSectionWrapper " +
                  (this.props.bSingleMode
                    ? " BindingButtonRowSingleDevice"
                    : ""),
              },
              i.createElement(
                "div",
                { className: "BindingControllerImageColumns FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexRow" },
                  !this.props.bSingleMode &&
                    i.createElement(
                      "div",
                      { className: "FlexColumn ControllerImageColumn" },
                      i.createElement("img", {
                        className: "ControllerImage ControllerImageLeft",
                        src: n,
                        style: { transform: t },
                        ref: this.BindLeftControllerImage,
                        onLoad: this.OnUpdateControllerPicturePosition,
                      }),
                      i.createElement(m.Z, {
                        onReflow: this.OnUpdateControllerPicturePosition,
                      })
                    ),
                  i.createElement(
                    "div",
                    { className: a + " ControllerImageColumn FlexColumn" },
                    i.createElement("img", {
                      className: "ControllerImage ControllerImageRight",
                      src: r,
                      style: { transform: o },
                      ref: this.BindRightControllerImage,
                      onLoad: this.OnUpdateControllerPicturePosition,
                    }),
                    i.createElement(m.Z, {
                      onReflow: this.OnUpdateControllerPicturePosition,
                    })
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexColumnCentered ControllerImageColumnButtons",
                  },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    v &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)("#BindingUI_ChordsButton_tooltip"),
                          theme: "MainButton",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenChordBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_ChordsButton")
                        )
                      ),
                    p.c6.BSelectedActionSetHasPoses &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)("#BindingUI_PosesButton_tooltip"),
                          theme: "MainButton",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenPoseBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_PosesButton")
                        )
                      ),
                    p.c6.BSelectedActionSetHasHaptics &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)(
                            "#BindingUI_HapticsButton_tooltip"
                          ),
                          theme: "MainButton",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenHapticsBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_HapticsButton")
                        )
                      ),
                    p.c6.BSelectedActionSetHasSkeletons &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)(
                            "#BindingUI_SkeletonButton_tooltip"
                          ),
                          theme: "MainButton",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenSkeletonBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_SkeletonButton")
                        )
                      )
                  ),
                  c &&
                    i.createElement(
                      "div",
                      null,
                      i.createElement("input", {
                        type: "checkbox",
                        checked: this.state.bMirrorBinding,
                        onChange: (e) => {
                          this.ToggleMirrorMode(e.target.checked);
                        },
                      }),
                      i.createElement(
                        "div",
                        { className: "Label" },
                        (0, d.Xx)("#BindingUI_MirrorMode")
                      )
                    )
                )
              ),
              this.props.bSingleMode &&
                i.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    i.createElement(U, {
                      eControllerButtonSide: p.ik.eButtonSide_None,
                      strSVGClass: "Left",
                      bReadOnly: this.props.bReadOnly,
                      selectedActionSet: p.c6.SelectedActionSetDetails,
                      ptControllerImagePosition: this.state.ptRightController,
                    })
                  )
                ),
              !this.props.bSingleMode &&
                i.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      g
                    ),
                    i.createElement(U, {
                      eControllerButtonSide: p.ik.eButtonSide_Left,
                      strSVGClass: "MenuLeftLine",
                      bReadOnly: this.props.bReadOnly,
                      eControllerButtonOtherSide: h,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptLeftController,
                    })
                  ),
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn " + a },
                    i.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      _
                    ),
                    i.createElement(U, {
                      eControllerButtonSide: s,
                      strSVGClass: "MenuRightLine",
                      bReadOnly:
                        this.props.bReadOnly || this.state.bMirrorBinding,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptRightController,
                    })
                  )
                )
            );
          }
        };
        var W;
        (0, o.gn)([h.ak], G.prototype, "ToggleMirrorMode", null),
          (0, o.gn)([h.ak], G.prototype, "UpdatePositionHelper", null),
          (0, o.gn)(
            [h.ak],
            G.prototype,
            "OnUpdateControllerPicturePosition",
            null
          ),
          (0, o.gn)([h.ak], G.prototype, "BindLeftControllerImage", null),
          (0, o.gn)([h.ak], G.prototype, "BindRightControllerImage", null),
          (G = (0, o.gn)([a.Pi], G)),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Pose = 1)] = "Pose"),
              (e[(e.Haptics = 2)] = "Haptics"),
              (e[(e.Skeleton = 3)] = "Skeleton");
          })(W || (W = {}));
        let z = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = { SVGElement: void 0, WrapperHTMLElement: void 0 }),
              (this.currentAction = void 0);
          }
          componentDidUpdate() {
            this.UpdateSVGPath();
          }
          BindSVGRef(e) {
            this.setState({ SVGElement: e }), this.UpdateSVGPath();
          }
          BindWrapperElement(e) {
            this.setState({ WrapperHTMLElement: e }), this.UpdateSVGPath();
          }
          UpdateSVGPath() {
            if (this.state.SVGElement) {
              let e = this.state.SVGElement.children.namedItem("SourcePath"),
                t = this.state.SVGElement.children.namedItem("SourceLine"),
                n = this.state.SVGElement.children.namedItem("SourceCircle"),
                o = Object.assign({}, this.props.endPoint),
                i = Object.assign({}, this.props.startPoint);
              if (this.state.WrapperHTMLElement) {
                let e = this.state.WrapperHTMLElement.getBoundingClientRect(),
                  t =
                    this.state.WrapperHTMLElement.parentElement.parentElement.parentElement.getBoundingClientRect();
                i.y += e.top - t.top + e.height / 2;
              }
              let r = 20,
                a = i.x + r + "," + i.y + " " + o.x + "," + o.y;
              e.setAttribute("points", a);
              let s = i.x + "," + i.y + " " + (i.x + r) + "," + i.y;
              t.setAttribute("points", s),
                n.setAttribute("cx", o.x + ""),
                n.setAttribute("cy", o.y + "");
            }
          }
          OnActionChanged(e) {
            switch (this.props.type) {
              case "pose":
                return this.OnPoseActionChanged(e);
              case "vibration":
                return this.OnHapticsActionChanged(e);
              case "skeleton":
                return this.OnSkeletonActionChanged(e);
              default:
                console.log("Unknown type: ", this.props.type);
            }
          }
          FullInputPaths() {
            return this.props.vecDevicePathsToSet.map(
              (e) => e + this.props.sInputPath
            );
          }
          CurrentAction() {
            return this.currentAction;
          }
          OnPoseActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              p.c6.SetPoseForInputPath(t, e);
            });
          }
          OnHapticsActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              p.c6.SetHapticsForInputPath(t, e);
            });
          }
          OnSkeletonActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              p.c6.SetSkeletonForInputPath(t, e);
            });
          }
          render() {
            let e,
              t,
              n = "",
              o = (0, d.Xx)("#SourceInputMode_none"),
              r = this.FullInputPaths()[0],
              a = p.c6.LocalizePathNameForSelectedControllerType(r);
            switch (this.props.type) {
              case "pose":
                (e = p.c6.GetPoseActionByPath(r)),
                  (t = "#SourceInputSubHeader_PoseActions");
                break;
              case "skeleton":
                (e = p.c6.GetSkeletonActionByPath(r)),
                  (t = "#SourceInputSubHeader_SkeletonActions");
                break;
              case "vibration":
                (e = p.c6.GetHapticsActionByPath(r)),
                  (t = "#SourceInputSubHeader_HapticsActions");
                break;
              default:
                console.log(
                  "ControllerPoseBindingItem doesn't know how to handle items of type:",
                  this.props.type
                );
            }
            let s = p.c6.SelectedActionSetActions.filter(
              (e) =>
                !!(
                  "skeleton" != this.props.type ||
                  ("skeleton" == e.type &&
                    e.skeleton &&
                    this.props.InputSource.skeleton &&
                    e.skeleton.toLowerCase() ==
                      this.props.InputSource.skeleton.toLowerCase())
                ) && e.type == this.props.type
            ).map((t, i) => {
              let r;
              return (
                e &&
                  e[0].output.toLowerCase() == t.name.toLowerCase() &&
                  ((this.currentAction = t),
                  (n = t.name),
                  (o = t.localized_name)),
                "mandatory" == t.requirement &&
                  (r =
                    " (" + (0, d.Xx)("#BindingUI_SelectAction_Required") + ")"),
                new v.GZ(t.name, t.localized_name, r)
              );
            });
            return (
              (null != s && 0 != s.length) ||
                s.push(
                  new v.GZ("-nonitem", (0, d.Xx)("#SourceInputAction_NoItems"))
                ),
              s.unshift(new v.GZ("-subHeader", (0, d.Xx)(t))),
              s.push(new v.GZ("-blank", "")),
              s.push(new v.GZ("none", (0, d.Xx)("#SourceInputMode_none"))),
              i.createElement(
                "div",
                {
                  className: "PoseActionListEntryWrapper",
                  ref: this.BindWrapperElement,
                },
                i.createElement(
                  "div",
                  { className: "FlexRow PoseActionListEntry" },
                  i.createElement(
                    "div",
                    { className: "Label PoseActionLabel" },
                    a
                  ),
                  i.createElement(
                    "div",
                    null,
                    i.createElement(v.vs, {
                      vecOptions: s,
                      sValueSelectedItem: n,
                      sHeaderClass: "PoseActionLabelDropdown",
                      bReadOnly: !1,
                      sLocalizedSelectedItem: o,
                      fnOptionSelected: this.OnActionChanged,
                    }),
                    i.createElement(m.Z, { onReflow: this.UpdateSVGPath })
                  )
                ),
                null != this.CurrentAction() &&
                  this.props.endPoint.x > 0 &&
                  this.props.endPoint.y > 0 &&
                  i.createElement(
                    "svg",
                    {
                      className: "BindingPoseLineSVG",
                      xmlns: "http://www.w3.org/2000/svg",
                      ref: this.BindSVGRef,
                    },
                    i.createElement(
                      "defs",
                      null,
                      i.createElement(
                        "radialGradient",
                        { id: "buttonGradient" },
                        i.createElement("stop", {
                          offset: "0%",
                          stopColor: "var(--bordercolor)",
                          stopOpacity: "0.8",
                        }),
                        i.createElement("stop", {
                          offset: "100%",
                          stopColor: "var(--bordercolor)",
                          stopOpacity: "0",
                        })
                      )
                    ),
                    i.createElement("polyline", {
                      id: "SourceLine",
                      stroke: "var(--bordercolor)",
                      strokeWidth: "0.1rem",
                      fill: "transparent",
                    }),
                    i.createElement("polyline", {
                      id: "SourcePath",
                      stroke: "var(--bordercolor)",
                      strokeWidth: "0.1rem",
                      fill: "transparent",
                    }),
                    i.createElement("circle", {
                      id: "SourceCircle",
                      r: "2rem",
                      fill: "url(#buttonGradient)",
                    })
                  ),
                this.props.bIncludeHR && i.createElement("hr", null)
              )
            );
          }
        };
        (0, o.gn)([h.ak], z.prototype, "BindSVGRef", null),
          (0, o.gn)([h.ak], z.prototype, "BindWrapperElement", null),
          (0, o.gn)([h.ak], z.prototype, "UpdateSVGPath", null),
          (0, o.gn)([h.ak], z.prototype, "OnActionChanged", null),
          (0, o.gn)([h.ak], z.prototype, "OnPoseActionChanged", null),
          (0, o.gn)([h.ak], z.prototype, "OnHapticsActionChanged", null),
          (0, o.gn)([h.ak], z.prototype, "OnSkeletonActionChanged", null),
          (z = (0, o.gn)([a.Pi], z));
        let X = class extends i.Component {
          render() {
            let e;
            switch (this.props.eActionType) {
              case W.Pose:
                e = "pose";
                break;
              case W.Haptics:
                e = "vibration";
                break;
              case W.Skeleton:
                e = "skeleton";
            }
            let t = p.c6.SelectedActionSetActions.filter((t) => t.type == e);
            if (0 == t.length) return null;
            let n = p.c6.SelectedControllerTypeInfo,
              o = p.c6.SelectedControllerTypeInfo.input_source,
              r = [];
            if (
              "controller_handed" ==
              p.c6.SelectedControllerTypeInfo.input_bindingui_mode
            )
              r = ["/user/hand/left", "/user/hand/right"];
            else {
              let e = p.c6.DeviceForControllerType(n.controller_type);
              e &&
                (e.root_path && r.push(e.root_path),
                e.root_path_alt && r.push(e.root_path_alt));
            }
            if (0 == r.length)
              return console.log("Missing base root path for controller"), null;
            p.c6.GetPoseActionBindings;
            let a,
              s = [];
            for (let n in o) {
              let a = o[n];
              for (let l of r) {
                if (a.type != e) continue;
                let c = "none";
                if (
                  ("/user/hand/right" == l
                    ? (c = "right")
                    : "/user/hand/left" == l && (c = "left"),
                  a.side && a.side != c)
                )
                  continue;
                let d = l + n,
                  h = "left" == c,
                  u = h
                    ? this.props.ptLeftController.x
                    : this.props.ptRightController.x,
                  m = h
                    ? this.props.ptLeftController.y
                    : this.props.ptRightController.y,
                  g = new p.E9(0, 0);
                if (
                  (o.hasOwnProperty(n) &&
                    ((g.x = a.binding_image_point[0]),
                    (g.y = a.binding_image_point[1]),
                    (g.x *= this.props.nPointScale),
                    (g.y *= this.props.nPointScale)),
                  h ? (g.x = u - g.x) : (g.x += u),
                  (g.y += m),
                  h && this.props.bSlaveSecondaryControllerBinding)
                )
                  continue;
                let _ = new p.E9(this.props.ptPoseListOffset.x + 5, 0),
                  v = (t.length, [l]);
                this.props.bSlaveSecondaryControllerBinding && (v = r),
                  s.push(
                    i.createElement(z, {
                      key: d,
                      InputSource: a,
                      sInputPath: n,
                      type: e,
                      vecDevicePathsToSet: v,
                      startPoint: _,
                      endPoint: g,
                    })
                  );
              }
            }
            switch (this.props.eActionType) {
              case W.Pose:
                a = (0, d.Xx)("#BindingUI_PoseListTitle");
                break;
              case W.Haptics:
                a = (0, d.Xx)("#BindingUI_HapticsListTitle");
                break;
              case W.Skeleton:
                a = (0, d.Xx)("#BindingUI_SkeletonListTitle");
            }
            return i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement("div", { className: "Label Title AllCaps" }, a),
              s
            );
          }
        };
        X = (0, o.gn)([a.Pi], X);
        let K = class extends i.Component {
          render() {
            let e = p.c6.SelectedControllerTypeInfo.input_source,
              t = new p.E9(
                e[this.props.vecPosePath[0]].binding_image_point[0],
                e[this.props.vecPosePath[0]].binding_image_point[1]
              );
            (t.x *= this.props.nPointScale),
              (t.y *= this.props.nPointScale),
              this.props.bLeftHandController
                ? (t.x = this.props.ptController.x - t.x)
                : (t.x += this.props.ptController.x),
              (t.y += this.props.ptController.y);
            let n = "";
            this.props.vecPosePath.forEach((e, t) => {
              0 != t && (n += ","),
                (n += p.c6.LocalizeStringForSelectedControllerType(e));
            });
            let o = this.props.bLeftHandController ? "start" : "end",
              r = this.props.bLeftHandController ? 6 : -6;
            return i.createElement(
              "svg",
              {
                className: "BindingPosePointSVG ",
                xmlns: "http://www.w3.org/2000/svg",
              },
              i.createElement(
                "defs",
                null,
                i.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  i.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "1",
                  }),
                  i.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  })
                ),
                i.createElement(
                  "filter",
                  {
                    id: "background",
                    x: "-10%",
                    y: "-10%",
                    width: "120%",
                    height: "120%",
                  },
                  i.createElement("feFlood", { floodColor: "#1d4e62e0" }),
                  i.createElement("feComposite", { in: "SourceGraphic" })
                ),
                i.createElement(
                  "filter",
                  {
                    id: "shadow",
                    x: "-20%",
                    y: "-20%",
                    width: "140%",
                    height: "140%",
                  },
                  i.createElement("feGaussianBlur", {
                    stdDeviation: "2 2",
                    result: "shadow",
                  }),
                  i.createElement("feOffset", { dx: "1", dy: "1" })
                )
              ),
              i.createElement(
                "text",
                {
                  textAnchor: o,
                  filter: "url(#shadow)",
                  x: t.x + r,
                  y: t.y,
                  style: { fill: "black", fontSize: 24 },
                },
                n
              ),
              i.createElement(
                "text",
                {
                  textAnchor: o,
                  filter: "url(#background)",
                  x: t.x + r,
                  y: t.y,
                  style: { fill: "var(--descriptiontext)", fontSize: 24 },
                },
                n
              ),
              i.createElement("circle", {
                id: "SourceCircle",
                cx: t.x,
                cy: t.y,
                r: "0.5rem",
                fill: "url(#buttonGradient)",
              })
            );
          }
        };
        K = (0, o.gn)([a.Pi], K);
        let q = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              (this.m_SVGElement = void 0),
              (this.m_PropsListDiv = void 0),
              (this.state = {
                ptLeftController: new p.E9(0, 0),
                ptRightController: new p.E9(0, 0),
                nPointScale: 0,
                ptDivList: new p.E9(0, 0),
              });
          }
          OnUpdateControllerPicturePosition() {
            if (
              this.m_LeftControllerImage &&
              !this.props.bSlaveSecondaryControllerBinding
            ) {
              let e = 0,
                t = 0,
                n = this.m_LeftControllerImage;
              if (n) {
                let o = n.getBoundingClientRect();
                n.naturalWidth > 0 &&
                  ((t =
                    o.right -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (e =
                    o.top -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({ ptLeftController: new p.E9(t, e) });
            }
            if (this.m_RightControllerImage) {
              let e = 1,
                t = 0,
                n = 0,
                o = this.m_RightControllerImage;
              if (o) {
                let i = o.getBoundingClientRect();
                o.naturalWidth > 0 &&
                  ((e = i.height / o.naturalHeight),
                  (n =
                    i.left -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (n += (i.width - o.naturalWidth * e) / 2),
                  (t =
                    i.top -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({
                ptRightController: new p.E9(n, t),
                nPointScale: e,
              });
            }
            if (this.m_PropsListDiv) {
              let e = this.m_PropsListDiv.getBoundingClientRect(),
                t =
                  this.m_PropsListDiv.parentElement.parentElement.getBoundingClientRect();
              this.setState({ ptDivList: new p.E9(e.width, e.top - t.top) });
            }
          }
          BindLeftControllerImage(e) {
            (this.m_LeftControllerImage = e),
              this.OnUpdateControllerPicturePosition();
          }
          BindRightControllerImage(e) {
            (this.m_RightControllerImage = e),
              this.OnUpdateControllerPicturePosition();
          }
          BindPropsListDiv(e) {
            (this.m_PropsListDiv = e), this.OnUpdateControllerPicturePosition();
          }
          render() {
            let e,
              t,
              n = "",
              o = "",
              r = "",
              a = "",
              s = p.c6.SelectedControllerTypeInfo;
            switch (this.props.eActionSourceType) {
              case W.Pose:
                (e = "pose"), (t = (0, d.Xx)("#BindingUI_PoseTitle"));
                break;
              case W.Haptics:
                (e = "vibration"), (t = (0, d.Xx)("#BindingUI_HapticsTitle"));
                break;
              case W.Skeleton:
                (e = "skeleton"), (t = (0, d.Xx)("#BindingUI_SkeletonTitle"));
            }
            (a = s.input_bindingui_right.uri),
              (o = s.input_bindingui_right.transform),
              this.props.bSlaveSecondaryControllerBinding ||
                ((n = s.input_bindingui_left.transform),
                (r = s.input_bindingui_left.uri));
            let l = function (t, n, o, i, r) {
                let a = t.input_source[i];
                if (a.type == e && (null == a.side || a.side == o)) {
                  let e = new p.E9(
                    a.binding_image_point[0],
                    a.binding_image_point[1]
                  );
                  n.hasOwnProperty(e.toString()) || (n[e.toString()] = []),
                    n[e.toString()].push(i);
                }
              },
              c = {},
              h = {};
            Object.keys(s.input_source).forEach(l.bind(null, s, c, "left")),
              Object.keys(s.input_source).forEach(l.bind(null, s, h, "right"));
            let u = Object.keys(c).map((e, t) =>
                i.createElement(K, {
                  key: t,
                  vecPosePath: c[e],
                  ptController: this.state.ptLeftController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !0,
                })
              ),
              g = Object.keys(h).map((e, t) =>
                i.createElement(K, {
                  key: t,
                  vecPosePath: h[e],
                  ptController: this.state.ptRightController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !1,
                })
              );
            return i.createElement(
              "div",
              { className: "FlexFullHeightColumnCentered" },
              i.createElement(
                "div",
                { className: "FlexRow PoseTitleBar" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  t
                )
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexFullWidthRowCentered PoseMainContent PositionRelative",
                },
                i.createElement(
                  "div",
                  { className: "PoseBindingPoints" },
                  !this.props.bSlaveSecondaryControllerBinding && u,
                  g
                ),
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn PoseActionsList",
                    ref: this.BindPropsListDiv,
                  },
                  i.createElement(X, {
                    eActionType: this.props.eActionSourceType,
                    bSingleControllerMode: this.props.bSingleControllerMode,
                    ptRightController: this.state.ptRightController,
                    ptLeftController: this.state.ptLeftController,
                    bReadOnly: this.props.bReadOnly,
                    nPointScale: this.state.nPointScale,
                    ptPoseListOffset: this.state.ptDivList,
                    bSlaveSecondaryControllerBinding:
                      this.props.bSlaveSecondaryControllerBinding,
                  }),
                  i.createElement(m.Z, {
                    onReflow: this.OnUpdateControllerPicturePosition,
                  })
                ),
                i.createElement(
                  "div",
                  { className: "FlexRow PoseControllerPictures" },
                  !this.props.bSlaveSecondaryControllerBinding &&
                    i.createElement(
                      "div",
                      { className: "ControllerImageContainer" },
                      i.createElement("img", {
                        className: "ControllerImage",
                        src: r,
                        style: { transform: n },
                        ref: this.BindLeftControllerImage,
                      })
                    ),
                  i.createElement(
                    "div",
                    { className: "ControllerImageContainer" },
                    i.createElement("img", {
                      className: "ControllerImage",
                      src: a,
                      style: { transform: o },
                      ref: this.BindRightControllerImage,
                    })
                  )
                ),
                i.createElement(m.Z, {
                  onReflow: this.OnUpdateControllerPicturePosition,
                })
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, d.Xx)("#Button_Close")
              )
            );
          }
        };
        (0, o.gn)(
          [h.ak],
          q.prototype,
          "OnUpdateControllerPicturePosition",
          null
        ),
          (0, o.gn)([h.ak], q.prototype, "BindLeftControllerImage", null),
          (0, o.gn)([h.ak], q.prototype, "BindRightControllerImage", null),
          (0, o.gn)([h.ak], q.prototype, "BindPropsListDiv", null),
          (q = (0, o.gn)([a.Pi], q));
        let Z = class extends i.Component {
          OnActionOutputChanged(e) {
            p.c6.SetActionForChord(this.props.chord, e);
          }
          DeleteChord() {
            p.c6.DeleteChord(this.props.chord);
          }
          DeleteSourceFromChord(e, t) {
            p.c6.DeleteSourceFromChord(this.props.chord, e);
          }
          AddSourceToChord() {
            let e = this.props.chord.inputs
              ? this.props.chord.inputs.length
              : 0;
            p.c6.SetInputSourceForChord(
              this.props.chord,
              p.c6.SelectedActionSetSources[e].path
            );
          }
          render() {
            let e = p.c6.SelectedActionSetActions.filter(
                (e) => "boolean" == e.type
              ),
              t = "",
              n = "none",
              o = !1;
            this.props.chord.output
              ? ((t = this.props.chord.output),
                (n = this.props.chord.output.toLowerCase()))
              : (o = !0);
            let r,
              a = e.map(
                (e, n) => (
                  this.props.chord.output &&
                    e.name.toLowerCase() ==
                      this.props.chord.output.toLowerCase() &&
                    (t = e.localized_name),
                  new v.GZ(e.name.toLowerCase(), e.localized_name)
                )
              ),
              s = p.c6.SelectedActionSetSources;
            return s && 0 != s.length
              ? (this.props.chord.inputs
                  ? (r = this.props.chord.inputs.map((e, t) => {
                      let n = i.createElement(
                        "div",
                        { className: "Label ChordBindingPlusLabel" },
                        i.createElement("img", {
                          className: "ActionButtonImage ChordBindingImage",
                          src: "images/bindingui/icon_plus.svg",
                        })
                      );
                      return i.createElement(
                        "div",
                        { className: "FlexFullHeightColumnCentered", key: t },
                        i.createElement(
                          "div",
                          { className: "FlexRow ChordBindingEntry" },
                          i.createElement(
                            "div",
                            { className: "FlexColumn" },
                            (function (e, t, n, o) {
                              let r = t
                                .filter((t) => {
                                  let o = n.inputs.filter(
                                    (e) => e[0] == t.path
                                  );
                                  return t.path == e || 0 == o.length;
                                })
                                .map(
                                  (e, t) =>
                                    new v.GZ(
                                      e.path,
                                      p.c6.LocalizePathNameForSelectedControllerType(
                                        e.path
                                      )
                                    )
                                );
                              return i.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                i.createElement(v.vs, {
                                  vecOptions: r,
                                  sValueSelectedItem: e,
                                  sLocalizedSelectedItem:
                                    p.c6.LocalizePathNameForSelectedControllerType(
                                      e
                                    ),
                                  fnOptionSelected: function (t) {
                                    p.c6.SetInputSourceForChord(n, t, e);
                                  },
                                  bReadOnly: o,
                                })
                              );
                            })(e[0], s, this.props.chord, this.props.bReadOnly),
                            (function (e, t, n, o) {
                              let r = p.c6.GetActionBinding(
                                e,
                                p.c6.SelectedActionSet
                              );
                              if (!r || 0 == r.length) return null;
                              let a = [],
                                s = "";
                              if (
                                (r.forEach((e) => {
                                  let n = p.c6.GetBooleanInputOptionsForMode(
                                    e.mode
                                  );
                                  for (let o of n)
                                    a.push({
                                      sActionBindMode: e.mode,
                                      sInputOption: o,
                                    }),
                                      o == t && (s = e.mode);
                                }),
                                0 == a.length)
                              )
                                return null;
                              let l = a.map(
                                (e, t) =>
                                  new v.GZ(
                                    e.sInputOption,
                                    (0, d.Xx)(
                                      "#SourceInputMode_" + e.sActionBindMode
                                    ) +
                                      " " +
                                      (0, d.Xx)(
                                        "#SourceInputMode_" + e.sInputOption
                                      )
                                  )
                              );
                              return i.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                i.createElement(v.vs, {
                                  vecOptions: l,
                                  sValueSelectedItem: t,
                                  sLocalizedSelectedItem:
                                    (0, d.Xx)("#SourceInputMode_" + s) +
                                    " " +
                                    (0, d.Xx)("#SourceInputMode_" + t),
                                  fnOptionSelected: function (t) {
                                    p.c6.SetInputTypeForChord(n, e, t);
                                  },
                                  bReadOnly: o,
                                })
                              );
                            })(
                              e[0],
                              e[1],
                              this.props.chord,
                              this.props.bReadOnly
                            )
                          ),
                          !this.props.bReadOnly &&
                            i.createElement("img", {
                              onClick: () => {
                                this.DeleteSourceFromChord(e[0], e[1]);
                              },
                              className:
                                "ActionButtonImage ChordBindingEntryDelete",
                              src: "images/bindingui/icon_trash.svg",
                            })
                        ),
                        t != this.props.chord.inputs.length - 1 && n
                      );
                    }))
                  : o || this.AddSourceToChord(),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexRow ChordBindingRow" },
                    i.createElement(
                      "div",
                      { className: "FlexColumn ChordBindingSet" },
                      i.createElement(v.vs, {
                        sHeaderClass: "ChordBindingAction",
                        vecOptions: a,
                        sValueSelectedItem: n,
                        sModalTitleString: (0, d.Xx)(
                          "#BindingUI_Chord_SelectActionModalHeader"
                        ),
                        bShowOptionsOnStart: o,
                        sLocalizedSelectedItem: t,
                        fnOptionSelected: this.OnActionOutputChanged,
                        bReadOnly: this.props.bReadOnly,
                      })
                    ),
                    i.createElement("img", {
                      className: "ActionButtonImage ChordBindingImage",
                      src: "images/bindingui/icon_arrow_right.svg",
                    }),
                    i.createElement(
                      "div",
                      {
                        className:
                          "FlexFullHeightColumnCentered ChordBindingSet",
                      },
                      r
                    ),
                    !this.props.bReadOnly &&
                      i.createElement(
                        "div",
                        {
                          className:
                            "FlexFullHeightColumnCentered ChordEntryActionColumn",
                        },
                        i.createElement(
                          "div",
                          {
                            onClick: this.AddSourceToChord,
                            className:
                              "Label ChordManageButtons ChordBindingBigButton AllCaps",
                          },
                          i.createElement("img", {
                            className: "ActionButtonImage",
                            src: "images/bindingui/icon_add.svg",
                          }),
                          (0, d.Xx)("#BindingUI_AddChordInput")
                        ),
                        i.createElement(
                          "div",
                          {
                            onClick: this.DeleteChord,
                            className:
                              "Label ChordManageButtons ChordBindingBigButton AllCaps",
                          },
                          i.createElement("img", {
                            className: "ActionButtonImage",
                            src: "images/bindingui/icon_trash.svg",
                          }),
                          (0, d.Xx)("#BindingUI_DeleteChord")
                        )
                      )
                  ),
                  i.createElement("div", {
                    className: "FlexRow ChordButtonRow",
                  })
                ))
              : null;
          }
        };
        (0, o.gn)([h.ak], Z.prototype, "OnActionOutputChanged", null),
          (0, o.gn)([h.ak], Z.prototype, "DeleteChord", null),
          (0, o.gn)([h.ak], Z.prototype, "DeleteSourceFromChord", null),
          (0, o.gn)([h.ak], Z.prototype, "AddSourceToChord", null),
          (Z = (0, o.gn)([a.Pi], Z));
        let j = class extends i.Component {
          constructor(e) {
            super(e);
          }
          AddChord() {
            p.c6.AddChord();
          }
          render() {
            let e = [],
              t = p.c6.SelectedActionSetChords;
            return (
              t &&
                t.length &&
                (e = t.map((e, n) =>
                  i.createElement(
                    "div",
                    { key: n },
                    i.createElement(Z, {
                      chord: e,
                      bReadOnly: this.props.bReadOnly,
                    }),
                    n != t.length - 1 && i.createElement("hr", null)
                  )
                )),
              i.createElement(
                "div",
                { className: "FlexColumn ChordBindingModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.Xx)("#BindingUI_ChordTitle")
                    )
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexColumn ChordBindingContents ChordBindingChordsList",
                  },
                  e,
                  !this.props.bReadOnly &&
                    i.createElement(
                      "div",
                      {
                        className:
                          "Label ChordManageButtons ChordBindingBigButton AllCaps AddChordButton",
                        onClick: this.AddChord,
                      },
                      i.createElement("img", {
                        className: "ActionButtonImage",
                        src: "images/bindingui/icon_add.svg",
                      }),
                      (0, d.Xx)("#BindingUI_AddChord")
                    )
                ),
                i.createElement(
                  "div",
                  {
                    className: "ChordBindingCloseButton Label AllCaps",
                    onClick: this.props.fnCloseModal,
                  },
                  (0, d.Xx)("#Button_Close")
                )
              )
            );
          }
        };
        (0, o.gn)([h.ak], j.prototype, "AddChord", null),
          (j = (0, o.gn)([a.Pi], j));
        var Q = n(9670);
        let Y = class extends i.Component {
          render() {
            let e =
                null == this.props.bShowBackButton ||
                this.props.bShowBackButton,
              t = null != this.props.fnOpenOptionsModal,
              n = "PageTitleLabel";
            return (
              this.props.strSubTitle || (n += " SingleTitle"),
              i.createElement(
                "div",
                {
                  className:
                    "PageTitleBar" + (L.I.IsSteamAvailable ? "" : " NoSteam"),
                },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered TitleBarMainRow" },
                  i.createElement(
                    "div",
                    { className: "TitleBarSection" },
                    e &&
                      i.createElement(
                        "div",
                        {
                          className:
                            "ButtonControl FlexRow PageTitleBackButton AllCaps",
                          onClick: () => {
                            this.props.fnOnClick();
                          },
                        },
                        i.createElement("img", {
                          className: "ActionButtonImage",
                          src: "images/bindingui/icon_back.svg",
                        }),
                        (0, d.Xx)("#Button_Back")
                      )
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "AllCaps PageTitle TitleBarSection FlexColumn",
                    },
                    i.createElement(
                      "div",
                      { className: n },
                      this.props.strTitle
                    ),
                    this.props.strSubTitle &&
                      i.createElement(
                        "div",
                        { className: "AllCaps PageSubTitle PageTitleLabel" },
                        this.props.strSubTitle
                      )
                  ),
                  t &&
                    i.createElement(
                      "div",
                      { className: "TitleBarSection" },
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)(
                            "#BindingUI_OptionsButton_tooltip"
                          ),
                          theme: "MainButton",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "ButtonControl FlexRow OptionsButton AllCaps",
                            onClick: this.props.fnOpenOptionsModal,
                          },
                          (0, d.Xx)("#BindingUI_OptionsButton")
                        )
                      )
                    )
                ),
                !L.I.IsSteamAvailable &&
                  i.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, d.Xx)("#NoSteamWarning")
                  )
              )
            );
          }
        };
        Y = (0, o.gn)([a.Pi], Y);
        let J = class extends i.Component {
          constructor(e) {
            super(e);
          }
          CloseSaveDialog() {
            this.props.ParentClose();
          }
          render() {
            let e = [];
            return (
              p.c6.ActionSets.forEach((t) => {
                p.c6.GetActionSetActions(t.name).forEach((t) => {
                  let n = p.c6.GetAliasInfo(t.name);
                  n &&
                    n.hidden &&
                    "vibration" != t.type &&
                    "skeleton" != t.type &&
                    "pose" != t.type &&
                    e.push(
                      i.createElement(
                        "div",
                        { className: "FlexRow HiddenAliasRow" },
                        i.createElement(
                          "div",
                          { className: "Label HiddenAliasName" },
                          t.localized_name
                        ),
                        i.createElement(
                          "div",
                          {
                            className: "Label ButtonControl",
                            onClick: () => {
                              p.c6.SetAliasHidden(t.name, !1);
                            },
                          },
                          (0, d.Xx)("#ShowActionButton")
                        )
                      )
                    );
                });
              }),
              i.createElement(
                s.Z,
                {
                  visible: !0,
                  onClose: this.CloseSaveDialog,
                  animation: "fade",
                  customStyles: {
                    width: "fit-content",
                    height: "auto",
                    paddingTop: "4rem",
                    maxHeight: "90%",
                  },
                  className: "HiddenActionsModal",
                  closeOnEsc: !0,
                },
                i.createElement(
                  "div",
                  { className: "FlexColumn HiddenActionsWrapper" },
                  e
                )
              )
            );
          }
        };
        (0, o.gn)([h.ak], J.prototype, "CloseSaveDialog", null),
          (J = (0, o.gn)([a.Pi], J));
        let $ = class extends i.Component {
          constructor(e) {
            super(e);
            let t = p.c6.GetAliasInfo(this.props.sAction);
            this.state = t
              ? { sUserSuppliedName: t.alias_name, bHidden: t.hidden }
              : { sUserSuppliedName: "", bHidden: !1 };
          }
          onHiddenChanged(e) {
            this.setState({ bHidden: e }),
              p.c6.SetAliasHidden(this.props.sAction, e);
          }
          onNameChanged(e) {
            this.setState({ sUserSuppliedName: e }),
              p.c6.SetAliasName(this.props.sAction, e);
          }
          render() {
            let e = "InputOption" + this.props.sAction;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "Label ActionAliasAction" },
                (0, d.Xx)(
                  p.c6.GetActionByName(this.props.sAction).localized_name
                )
              ),
              i.createElement("input", {
                id: e + "name",
                type: "text",
                value: this.state.sUserSuppliedName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: () => {
                      p.c6.SetAliasHidden(this.props.sAction, !0);
                    },
                  },
                  (0, d.Xx)("#HideActionButton")
                )
            );
          }
        };
        (0, o.gn)([h.ak], $.prototype, "onHiddenChanged", null),
          (0, o.gn)([h.ak], $.prototype, "onNameChanged", null),
          ($ = (0, o.gn)([a.Pi], $));
        let ee = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = { bShowActionPicker: !1, bShowHiddenActions: !1 });
          }
          OnShowHidden() {
            this.setState({ bShowHiddenActions: !0 });
          }
          OnCloseHidden() {
            this.setState({ bShowHiddenActions: !1 });
          }
          render() {
            let e = [];
            return (
              p.c6.ActionSets.forEach((t) => {
                p.c6.GetActionSetActions(t.name).forEach((t) => {
                  let n = p.c6.GetAliasInfo(t.name);
                  (n && n.hidden) ||
                    ("vibration" != t.type &&
                      "skeleton" != t.type &&
                      "pose" != t.type &&
                      e.push(t.name));
                });
              }),
              i.createElement(
                "div",
                null,
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "LegacySectionHeader Label" },
                    (0, d.Xx)("#LegacySetup_ActionAliasesHeader")
                  ),
                  e.map((e, t) =>
                    i.createElement($, {
                      sAction: e,
                      key: e,
                      readOnly: this.props.readOnly,
                    })
                  )
                ),
                this.state.bShowHiddenActions &&
                  i.createElement(J, { ParentClose: this.OnCloseHidden }),
                !this.props.readOnly &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SetupLegacyRow ActionAliasButtonWrapper",
                    },
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.OnShowHidden,
                      },
                      (0, d.Xx)("#ShowAllAliases")
                    )
                  )
              )
            );
          }
        };
        (0, o.gn)([h.ak], ee.prototype, "OnShowHidden", null),
          (0, o.gn)([h.ak], ee.prototype, "OnCloseHidden", null),
          (ee = (0, o.gn)([a.Pi], ee));
        class te extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bValue: p.c6.GetOptionValue(this.props.sOptionName),
              });
          }
          onCheckboxChanged(e) {
            p.c6.SetOptionValue(this.props.sOptionName, e),
              this.setState({ bValue: e });
          }
          render() {
            let e = "InputOption" + this.props.sOptionName;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement("input", {
                  id: e,
                  type: "checkbox",
                  checked: this.state.bValue,
                  value: this.props.sOptionName,
                  onChange: (e) => {
                    this.onCheckboxChanged(e.target.checked);
                  },
                  disabled: this.props.readOnly,
                })
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: e },
                this.props.sOptionLocalizedName
              )
            );
          }
        }
        (0, o.gn)([h.ak], te.prototype, "onCheckboxChanged", null);
        class ne extends i.Component {
          constructor(e) {
            super(e);
            let t = p.c6.GetOptionValue(this.props.sOptionName);
            t || (t = "none"), (this.state = { sValue: t });
          }
          OnControllerDropdownChanged(e) {
            p.c6.SetOptionValue(this.props.sOptionName, e),
              this.setState({ sValue: e });
          }
          render() {
            let e = p.c6.SelectedAppActions.simulation_types,
              t = [];
            for (let n of e)
              "TrackedDeviceClass_Controller" == n.device_type &&
                t.push(
                  new v.GZ(
                    n.controller_type,
                    (0, d.Xx)("#" + n.controller_type)
                  )
                );
            t.push(new v.GZ("none", (0, d.Xx)("#None")));
            let n = "InputOption" + this.props.sOptionName;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(v.vs, {
                  vecOptions: t,
                  sModalClass: "PinTop",
                  sValueSelectedItem: this.state.sValue,
                  fnOptionSelected: this.OnControllerDropdownChanged,
                })
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: n },
                this.props.sOptionLocalizedName
              )
            );
          }
        }
        (0, o.gn)([h.ak], ne.prototype, "OnControllerDropdownChanged", null);
        class oe extends i.Component {
          constructor(e) {
            super(e);
          }
          onCheckboxChanged(e, t) {
            p.c6.SetOptionValue(e, t), this.forceUpdate();
          }
          render() {
            return this.props.options.map((e, t) => {
              switch (e.type) {
                case "bool":
                  return i.createElement(te, {
                    sOptionName: e.name,
                    sOptionLocalizedName: e.localized_name,
                    key: e.name,
                    readOnly: this.props.readOnly,
                  });
                case "string":
                  return "simulated_controller_type" == e.name
                    ? i.createElement(ne, {
                        sOptionName: e.name,
                        sOptionLocalizedName: e.localized_name,
                        key: e.name,
                        readOnly: this.props.readOnly,
                      })
                    : null;
                default:
                  return null;
              }
            });
          }
        }
        (0, o.gn)([h.ak], oe.prototype, "onCheckboxChanged", null);
        class ie extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sName: this.props.simAction.name,
                sOutputAction: this.props.simAction.output
                  ? this.props.simAction.output
                  : "none",
              });
          }
          onNameChanged(e) {
            this.setState({ sName: e });
            let t = this.props.simAction;
            t.name = e;
            let n = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(n, t);
          }
          onActionChanged(e) {
            this.setState({ sOutputAction: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let n = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(n, t);
          }
          onDelete() {
            let e = p.c6.ComputeSimulatedActionPathFromId(
              this.props.simAction.id
            );
            p.c6.DeleteSimulatedActionByPath(e);
          }
          render() {
            let e = p.c6.GetLiteralVector1ActionBindings.map(
              (e, t) => new v.GZ(e.name, e.localized_name)
            );
            e.push(new v.GZ("none", (0, d.Xx)("#SourceInputAction_none")));
            let t = "InputOption" + this.props.simAction.id;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, d.Xx)("#SimulatedAction_FakeTrigger")
              ),
              i.createElement("input", {
                id: t + "name",
                type: "text",
                value: this.state.sName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              i.createElement(v.vs, {
                vecOptions: e,
                sValueSelectedItem: this.state.sOutputAction,
                sHeaderClass: "BindingLabelAction",
                sMainButtonClass: "SimActionTargetLabel",
                fnOptionSelected: this.onActionChanged,
                bReadOnly: this.props.readOnly,
              }),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, d.Xx)("#DeleteSimulatedAction")
                )
            );
          }
        }
        (0, o.gn)([h.ak], ie.prototype, "onNameChanged", null),
          (0, o.gn)([h.ak], ie.prototype, "onActionChanged", null),
          (0, o.gn)([h.ak], ie.prototype, "onDelete", null);
        class re extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sName: this.props.simAction.name,
                sOutputHand: this.props.simAction.output
                  ? this.props.simAction.output
                  : "none",
                fPositionX: this.props.simAction.position_x
                  ? this.props.simAction.position_x
                  : 0,
                fPositionY: this.props.simAction.position_y
                  ? this.props.simAction.position_y
                  : 0,
              });
          }
          onNameChanged(e) {
            this.setState({ sName: e });
            let t = this.props.simAction;
            t.name = e;
            let n = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(n, t);
          }
          onOutputChanged(e) {
            this.setState({ sOutputHand: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let n = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(n, t);
          }
          onDelete() {
            let e = p.c6.ComputeSimulatedActionPathFromId(
              this.props.simAction.id
            );
            p.c6.DeleteSimulatedActionByPath(e);
          }
          OnClickTrackpad(e) {
            let t = e.currentTarget.getBoundingClientRect(),
              n = (e.clientX - t.left) / (0.5 * t.width) - 1,
              o = -1 * ((e.clientY - t.top) / (0.5 * t.height) - 1);
            this.setState({ fPositionX: n, fPositionY: o });
            let i = this.props.simAction;
            (i.position_x = n), (i.position_y = o);
            let r = p.c6.ComputeSimulatedActionPathFromId(i.id);
            p.c6.SetSimulatedActionByPath(r, i);
          }
          render() {
            let e = [];
            p.c6.GetOptionValue("mirror_actions") ||
              (e.push(new v.GZ("left", (0, d.Xx)("#TrackpadClickLeft"))),
              e.push(new v.GZ("right", (0, d.Xx)("#TrackpadClickRight"))),
              e.push(new v.GZ("none", (0, d.Xx)("#TrackpadClickNone"))));
            let t = "InputOption" + this.props.simAction.id,
              n = {
                left: (100 * (this.state.fPositionX + 1)) / 2 + "%",
                top: 100 - (100 * (this.state.fPositionY + 1)) / 2 + "%",
              };
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, d.Xx)("#SimulatedAction_FakeTrackpadClick")
              ),
              i.createElement("input", {
                id: t + "name",
                type: "text",
                value: this.state.sName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              e.length > 0 &&
                i.createElement(v.vs, {
                  sMainButtonClass: "SimActionTargetLabel",
                  vecOptions: e,
                  sValueSelectedItem: this.state.sOutputHand,
                  sHeaderClass: "BindingLabelAction",
                  fnOptionSelected: this.onOutputChanged,
                  bReadOnly: this.props.readOnly,
                }),
              i.createElement(
                "div",
                {
                  className: "TrackpadSelectionBackground",
                  onClick: this.props.readOnly
                    ? null
                    : (e) => this.OnClickTrackpad(e),
                },
                i.createElement("div", {
                  className: "TrackpadSelectionPip",
                  style: n,
                })
              ),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, d.Xx)("#DeleteSimulatedAction")
                )
            );
          }
        }
        (0, o.gn)([h.ak], re.prototype, "onNameChanged", null),
          (0, o.gn)([h.ak], re.prototype, "onOutputChanged", null),
          (0, o.gn)([h.ak], re.prototype, "onDelete", null),
          (0, o.gn)([h.ak], re.prototype, "OnClickTrackpad", null);
        let ae = class extends i.Component {
          constructor(e) {
            super(e);
          }
          OnCreateSimAction(e) {
            p.c6.AddSimulatedAction(e);
          }
          CreateEntry(e) {
            switch (e.type) {
              case "fake_trigger":
                return i.createElement(ie, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              case "fake_trackpad_click":
                return i.createElement(re, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              default:
                return null;
            }
          }
          render() {
            let e = [];
            return (
              e.push(
                new v.GZ(
                  "fake_trigger",
                  (0, d.Xx)("#SimulatedAction_FakeTrigger")
                )
              ),
              e.push(
                new v.GZ(
                  "fake_trackpad_click",
                  (0, d.Xx)("#SimulatedAction_FakeTrackpadClick")
                )
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(
                  "div",
                  { className: "LegacySectionHeader Label" },
                  (0, d.Xx)("#LegacySetup_SimulatedActionHeader")
                ),
                p.c6.SimulatedActions.map((e, t) => this.CreateEntry(e)),
                !this.props.readOnly &&
                  i.createElement(
                    "div",
                    { className: "SimulatedActionsAddWrapper" },
                    i.createElement(v.vs, {
                      sMainButtonClass: "AddSimActionButton",
                      vecOptions: e,
                      sValueSelectedItem: "",
                      sLocalizedSelectedItem: (0, d.Xx)("#AddSimulatedAction"),
                      sHeaderClass: "BindingLabelAction",
                      fnOptionSelected: this.OnCreateSimAction,
                    })
                  )
              )
            );
          }
        };
        (0, o.gn)([h.ak], ae.prototype, "OnCreateSimAction", null),
          (ae = (0, o.gn)([a.Pi], ae));
        let se = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            var e;
            let t = "openxr" == p.c6.SelectedAppActions.category,
              n =
                (null === (e = p.c6.SelectedAppActions.interaction_profiles) ||
                void 0 === e
                  ? void 0
                  : e.length) > 0,
              o = p.c6.GetOptionValue("simulated_controller_type"),
              r = o && "none" != o;
            return i.createElement(
              "div",
              { className: "FlexColumn ChordBindingModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.Xx)("#BindingUI_OptionsTitle")
                  )
                )
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexColumn ChordBindingContents ChordBindingChordsList",
                },
                t &&
                  n &&
                  i.createElement(le, { bReadOnly: this.props.bReadOnly }),
                !t &&
                  i.createElement(ce, {
                    sOptionName: "simulated_controller_type",
                    bAllowNone: !0,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  r &&
                  i.createElement(de, {
                    sOptionName: "simulate_rendermodel",
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  r &&
                  i.createElement(de, {
                    sOptionName: "simulate_hmd",
                    bReadOnly: this.props.bReadOnly,
                    bDefaultValue: !0,
                  })
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, d.Xx)("#Button_Close")
              )
            );
          }
        };
        se = (0, o.gn)([a.Pi], se);
        class le extends i.Component {
          constructor(e) {
            super(e);
            let t = p.c6.GetInteractionProfile();
            t || (t = " "), (this.state = { sValue: t });
          }
          OnInteractionProfileDropdownChanged(e) {
            p.c6.SetInteractionProfile(e), this.setState({ sValue: e });
          }
          render() {
            let e = p.c6.GetInteractionProfiles(),
              t = [];
            return (
              e.forEach(function (e) {
                let n = e.replace("/interaction_profiles/", "");
                t.push(new v.GZ(e, n, null, e));
              }),
              t.push(new v.GZ(" ", (0, d.Xx)("#None"))),
              i.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, d.Xx)(
                      "#BindingUI_Options_InteractionProfile_tooltip"
                    ),
                    theme: "OptionsItem",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, d.Xx)("#BindingUI_Options_InteractionProfile_Label")
                  )
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    S.ZP,
                    { content: this.state.sValue, theme: "OptionsItem" },
                    i.createElement(
                      "div",
                      null,
                      i.createElement(v.vs, {
                        vecOptions: t,
                        sModalClass: "PinTop",
                        sValueSelectedItem: this.state.sValue,
                        fnOptionSelected:
                          this.OnInteractionProfileDropdownChanged,
                        bReadOnly: this.props.bReadOnly,
                      })
                    )
                  )
                )
              )
            );
          }
        }
        (0, o.gn)(
          [h.ak],
          le.prototype,
          "OnInteractionProfileDropdownChanged",
          null
        );
        class ce extends i.Component {
          constructor(e) {
            if (
              (super(e), (this.option_items = []), this.props.mapOptionValues)
            )
              for (let e in this.props.mapOptionValues) {
                let t = { sName: (0, d.Xx)("#" + e), sValue: e };
                this.option_items.push(t);
              }
            else if ("simulated_controller_type" == this.props.sOptionName) {
              let e = p.c6.SelectedAppActions.simulation_types.sort(function (
                e,
                t
              ) {
                return e.device_type < t.device_type;
              });
              for (let t of e)
                if ("TrackedDeviceClass_Controller" == t.device_type) {
                  let e = {
                    sName: (0, d.Xx)("#" + t.controller_type),
                    sValue: t.controller_type,
                  };
                  this.option_items.push(e);
                }
            }
            let t = p.c6.GetOptionValue(e.sOptionName);
            t || (t = "none"), (this.state = { sValue: t });
          }
          OnStringDropdownChanged(e) {
            p.c6.SetOptionValue(this.props.sOptionName, e),
              this.setState({ sValue: e });
          }
          render() {
            let e = [];
            for (let t of this.option_items)
              e.push(new v.GZ(t.sValue, t.sName, null, t.sValue));
            return (
              this.props.bAllowNone &&
                e.push(new v.GZ("none", (0, d.Xx)("#None"))),
              i.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, d.Xx)(
                      "#BindingUI_Options_" +
                        this.props.sOptionName +
                        "_tooltip"
                    ),
                    theme: "OptionsItem",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, d.Xx)(
                      "#BindingUI_Options_" + this.props.sOptionName + "_Label"
                    )
                  )
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    S.ZP,
                    { content: this.state.sValue, theme: "OptionsItem" },
                    i.createElement(
                      "div",
                      null,
                      i.createElement(v.vs, {
                        vecOptions: e,
                        sModalClass: "PinTop",
                        sValueSelectedItem: this.state.sValue,
                        fnOptionSelected: this.OnStringDropdownChanged,
                        bReadOnly: this.props.bReadOnly,
                      })
                    )
                  )
                )
              )
            );
          }
        }
        (0, o.gn)([h.ak], ce.prototype, "OnStringDropdownChanged", null);
        class de extends i.Component {
          constructor(e) {
            super(e);
            let t = !1;
            p.c6.HasOptionValue(e.sOptionName)
              ? (t = p.c6.GetOptionValue(e.sOptionName))
              : null != e.bDefaultValue && (t = e.bDefaultValue),
              (this.state = { bValue: t });
          }
          onCheckboxChanged(e) {
            p.c6.SetOptionValue(this.props.sOptionName, e),
              this.setState({ bValue: e });
          }
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, d.Xx)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip"
                  ),
                  theme: "OptionsItem",
                },
                i.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, d.Xx)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_Label"
                  )
                )
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement("input", {
                  id: "BindingOption_" + this.props.sOptionName,
                  type: "checkbox",
                  checked: this.state.bValue,
                  value: this.props.sOptionName,
                  onChange: (e) => {
                    this.onCheckboxChanged(e.target.checked);
                  },
                  disabled: this.props.bReadOnly,
                })
              )
            );
          }
        }
        (0, o.gn)([h.ak], de.prototype, "onCheckboxChanged", null);
        var pe,
          he = n(9392);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Personal = 1)] = "Personal"),
            (e[(e.Public = 2)] = "Public"),
            (e[(e.LocalFile = 3)] = "LocalFile"),
            (e[(e.ReplaceDefault = 4)] = "ReplaceDefault"),
            (e[(e.AddNewDefault = 5)] = "AddNewDefault");
        })(pe || (pe = {}));
        let ue = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_NameInput = void 0),
              (this.m_DescriptionInput = void 0),
              (this.m_NameInputCallbackHandle = void 0),
              (this.m_DescriptionCallbackHandle = void 0),
              (this.m_bSavedOnce = !1),
              (this.state = { sError: void 0 });
          }
          CloseSaveDialog() {
            null != this.m_NameInputCallbackHandle &&
              this.m_NameInputCallbackHandle.unregister(),
              null != this.m_DescriptionCallbackHandle &&
                this.m_DescriptionCallbackHandle.unregister(),
              this.props.ParentClose();
          }
          GetSaveTypeString(e) {
            switch (e) {
              default:
                return null;
              case pe.Personal:
                return "personal";
              case pe.Public:
                return "public";
              case pe.LocalFile:
                return "local_file";
              case pe.AddNewDefault:
              case pe.ReplaceDefault:
                return "replace_default";
            }
          }
          ConfirmBindingName() {
            if (this.m_bSavedOnce) return;
            (this.m_bSavedOnce = !0),
              console.log(
                "Confirmed: ",
                this.m_NameInput.value,
                this.m_DescriptionInput.value
              );
            let e = this.GetSaveTypeString(this.props.eSaveType);
            e
              ? p.c6
                  .SaveCurrentBinding(
                    this.m_NameInput.value,
                    this.m_DescriptionInput.value,
                    e
                  )
                  .then((e) => {
                    p.c6.SetBindingURL(e.uri), this.CloseSaveDialog();
                  })
                  .catch((e) => {
                    console.log("Save failed:", e),
                      this.setState({ sError: e });
                  })
              : console.error("Invalid save type: ", this.props.eSaveType);
          }
          BindNameInput(e) {
            this.m_NameInput = e;
          }
          BindDescriptionInput(e) {
            this.m_DescriptionInput = e;
          }
          OnNameFocus(e) {
            (0, l.Op)() == l.qA.Overlay &&
              null == this.m_NameInputCallbackHandle &&
              (this.m_NameInput.blur(),
              (this.m_NameInputCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VROverlay.ShowKeyboard(
                      (0, d.Xx)("#BindingUI_Binding_Name"),
                      e.target.value,
                      128,
                      this.OnOverlayNameText
                    )),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ThisOverlayKey(),
                  {}
                ));
          }
          OnOverlayNameText(e) {
            (this.m_NameInput.value = e),
              this.m_NameInputCallbackHandle.unregister(),
              (this.m_NameInputCallbackHandle = void 0);
          }
          OnDescriptionFocus(e) {
            (0, l.Op)() == l.qA.Overlay &&
              null == this.m_DescriptionCallbackHandle &&
              (this.m_DescriptionInput.blur(),
              (this.m_DescriptionCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VROverlay.ShowKeyboard(
                      (0, d.Xx)("#BindingUI_Binding_Description"),
                      e.target.value,
                      128,
                      this.OnOverlayDescriptionText
                    )),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ThisOverlayKey(),
                  {}
                ));
          }
          OnOverlayDescriptionText(e) {
            (this.m_DescriptionInput.value = e),
              this.m_DescriptionCallbackHandle.unregister(),
              (this.m_DescriptionCallbackHandle = void 0);
          }
          render() {
            let e = p.c6.GetDefaultBindingNameForSaveType(
              this.GetSaveTypeString(this.props.eSaveType)
            );
            return i.createElement(
              s.Z,
              {
                visible: !0,
                onClose: this.CloseSaveDialog,
                showCloseButton: !1,
                animation: "fade",
                customStyles: { width: "60%", height: "fit-content" },
                className: "BindingChordsModal",
                closeOnEsc: !0,
              },
              i.createElement(
                "div",
                { className: "SaveDialogWrapper FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexRow SaveTitleBar" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_download.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.Xx)("#BindingUI_SaveTitle")
                  )
                ),
                this.state.sError &&
                  i.createElement(
                    "div",
                    { className: "Label Error" },
                    (0, d.Xx)(this.state.sError)
                  ),
                this.props.eSaveType == pe.Personal &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_Personal")
                  ),
                this.props.eSaveType == pe.Public &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_Public")
                  ),
                this.props.eSaveType == pe.LocalFile &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_Export")
                  ),
                (this.props.eSaveType == pe.ReplaceDefault ||
                  this.props.eSaveType == pe.AddNewDefault) &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_ReplaceDefault")
                  ),
                this.props.eSaveType == pe.AddNewDefault &&
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.Xx)("#BindingUI_Save_AddNewDefault")
                  ),
                i.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogName" },
                  (0, d.Xx)("#BindingUI_Binding_Name"),
                  " "
                ),
                i.createElement("input", {
                  type: "text",
                  defaultValue: e,
                  ref: this.BindNameInput,
                  onFocus: this.OnNameFocus,
                }),
                i.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogDescription" },
                  (0, d.Xx)("#BindingUI_Binding_Description")
                ),
                i.createElement("textarea", {
                  cols: 80,
                  rows: 5,
                  ref: this.BindDescriptionInput,
                  defaultValue: this.props.sDescription,
                  onFocus: this.OnDescriptionFocus,
                  placeholder: (0, d.Xx)(
                    "BindingUI_SaveDescriptionPlaceholder"
                  ),
                }),
                i.createElement(
                  "div",
                  { className: "FlexRow SaveBottomButtonRow" },
                  i.createElement(
                    "div",
                    {
                      onClick: this.ConfirmBindingName,
                      className: "ButtonControl",
                    },
                    (0, d.Xx)("#BindingUI_SaveBinding")
                  ),
                  i.createElement(
                    "div",
                    {
                      onClick: this.CloseSaveDialog,
                      className: "ButtonControl",
                    },
                    (0, d.Xx)("#Button_Cancel")
                  )
                )
              )
            );
          }
        };
        (0, o.gn)([h.ak], ue.prototype, "CloseSaveDialog", null),
          (0, o.gn)([h.ak], ue.prototype, "ConfirmBindingName", null),
          (0, o.gn)([h.ak], ue.prototype, "BindNameInput", null),
          (0, o.gn)([h.ak], ue.prototype, "BindDescriptionInput", null),
          (0, o.gn)([h.ak], ue.prototype, "OnNameFocus", null),
          (0, o.gn)([h.ak], ue.prototype, "OnOverlayNameText", null),
          (0, o.gn)([h.ak], ue.prototype, "OnDescriptionFocus", null),
          (0, o.gn)([h.ak], ue.prototype, "OnOverlayDescriptionText", null),
          (ue = (0, o.gn)([a.Pi], ue));
        let me = class extends i.Component {
          render() {
            let e = this.props.UnboundActions.vecRequired.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, d.Xx)(
                    "#BindingUI_UnboundActions_Required",
                    e.localized_name
                  )
                )
              ),
              t = this.props.UnboundActions.vecSuggested.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, d.Xx)(
                    "#BindingUI_UnboundActions_Suggested",
                    e.localized_name
                  )
                )
              ),
              n = "UnboundActionsOverlay";
            return (
              this.props.Visible && (e.length || t.length) && (n += " Visible"),
              this.props.Visible &&
                i.createElement(
                  "div",
                  { className: n },
                  i.createElement(
                    "div",
                    { className: "FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, d.Xx)("#BindingUI_UnboundActions_Title")
                    ),
                    e,
                    t
                  )
                )
            );
          }
        };
        var ge;
        (me = (0, o.gn)([a.Pi], me)),
          (function (e) {
            (e[(e.ActionSet = 0)] = "ActionSet"),
              (e[(e.LegacySetup = 1)] = "LegacySetup"),
              (e[(e.SecondaryControllerSetup = 2)] =
                "SecondaryControllerSetup");
          })(ge || (ge = {}));
        let _e = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bDeveloperOutput: !1,
                bShowPoseBindings: !1,
                bShowBindingSettings: !1,
                bBindingUIInMirroredMode: !1,
                bShowHapticsBindings: !1,
                bShowChordBindings: !1,
                bShowOptionsModal: !1,
                eSaveType: pe.None,
                bShowSelectConfirmModal: !1,
                bShowSkeletonBindings: !1,
                bEditBindingOnSelectConfirm: !1,
                bShowUnboundActionsOverlay: !1,
                vecUnboundActions: { vecRequired: [], vecSuggested: [] },
                eTabType: ge.ActionSet,
              });
          }
          OnAppDropdownChanged(e) {
            p.c6.SetSelectedApp(e);
          }
          OnActionSetDropdownChanged(e) {
            this.setState({ eTabType: ge.ActionSet }),
              p.c6.SetSelectedActionSet(e);
          }
          ToggleDeveloperOutput() {
            this.setState({ bDeveloperOutput: !this.state.bDeveloperOutput });
          }
          OpenPoseBindingsModal() {
            this.setState({ bShowPoseBindings: !0 });
          }
          ClosePoseBindingsModal() {
            this.setState({ bShowPoseBindings: !1 });
          }
          OpenHapticsBindingsModal() {
            this.setState({ bShowHapticsBindings: !0 });
          }
          CloseHapticsBindingsModal() {
            this.setState({ bShowHapticsBindings: !1 });
          }
          OpenSkeletonBindingsModal() {
            this.setState({ bShowSkeletonBindings: !0 });
          }
          CloseSkeletonBindingsModal() {
            this.setState({ bShowSkeletonBindings: !1 });
          }
          OpenChordBindingsModal() {
            this.setState({ bShowChordBindings: !0 });
          }
          CloseChordBindingsModal() {
            this.setState({ bShowChordBindings: !1 });
          }
          OpenOptionsModal() {
            this.setState({ bShowOptionsModal: !0 });
          }
          CloseOptionsModal() {
            this.setState({ bShowOptionsModal: !1 });
          }
          CloseSaveModal() {
            this.setState({ eSaveType: pe.None });
          }
          ShowPublicModal() {
            this.setState({ eSaveType: pe.Public });
          }
          ShowPersonalModal() {
            this.setState({ eSaveType: pe.Personal });
          }
          ShowExportModal() {
            this.setState({ eSaveType: pe.LocalFile });
          }
          ShowReplaceDefaultModal() {
            let e =
              null !=
              p.c6.GetSelectedAppDefaultBinding(
                p.c6.SelectedControllerTypeInfo.controller_type
              );
            this.setState({
              eSaveType: e ? pe.ReplaceDefault : pe.AddNewDefault,
            });
          }
          ShowUnboundActionsOverlay(e) {
            this.setState({
              bShowUnboundActionsOverlay: !0,
              vecUnboundActions: e,
            });
          }
          HideUnboundActionsOverlay() {
            this.setState({ bShowUnboundActionsOverlay: !1 });
          }
          SetBindingUIInMirroredMode(e) {
            this.state.bBindingUIInMirroredMode != e &&
              this.setState({ bBindingUIInMirroredMode: e });
          }
          SelectThisBinding(e, t) {
            u.w.Loading = !0;
            let n = p.c6.SelectedControllerTypeInfo;
            p.c6
              .SelectConfig(p.c6.SelectedApp, n ? n.controller_type : "", e)
              .then(() => {
                p.c6.ReloadCurrentApp().then(() => {
                  t ? u.w.EditCurrentBinding() : u.w.ShowBindingList(),
                    setTimeout(() => {
                      u.w.Loading = !1;
                    }, 1);
                });
              });
          }
          SelectWouldOverwriteAutosave() {
            let e = u.w.CurrentBinding;
            return (
              !!e &&
              this.props.bReadOnlyView &&
              "autosave" == e.type &&
              e.url != p.c6.LoadedBindingURL
            );
          }
          ShouldShowSelectConfirmDialog() {
            return (
              this.ThisConfigNeedsUpgrade() ||
              this.SelectWouldOverwriteAutosave()
            );
          }
          OnSelectBinding(e) {
            this.ShouldShowSelectConfirmDialog()
              ? this.setState({
                  bShowSelectConfirmModal: !0,
                  bEditBindingOnSelectConfirm: e,
                })
              : this.OnSelectConfirmed(p.c6.LoadedBindingURL, e);
          }
          ThisConfigNeedsUpgrade() {
            let e = p.c6.SelectedAppActions;
            return (
              p.c6.CurrentBindingActionManifestVersion <
              e.minimum_required_version
            );
          }
          OnSelectConfirmed(e, t) {
            this.ThisConfigNeedsUpgrade()
              ? (p.c6.PreserveCurrentBindingForUpgrade().then(() => {
                  p.c6.AutosaveBinding();
                }),
                this.OnSelectDone())
              : (this.SelectThisBinding(e, t), this.OnSelectDone());
          }
          OnSelectDone() {
            this.setState({ bShowSelectConfirmModal: !1 });
          }
          OnSaveCurrentBinding(e) {
            let t = u.w.CurrentBinding;
            p.c6.SetBindingURL(t.url),
              p.c6.ReloadControllerConfiguration().then(() => {
                p.c6
                  .SaveCurrentBinding(t.name, t.description, "personal")
                  .then(() => {
                    e();
                  });
              });
          }
          renderSelectConfirmModal() {
            let e,
              t = null,
              n = !0,
              o = (0, d.Xx)("#Button_Discard");
            if (this.ThisConfigNeedsUpgrade()) {
              let i = Q.S.GetApp(p.c6.SelectedApp);
              (e = (0, d.Xx)("#BindingUI_List_Upgrade_Confirm", i.name)),
                (n = this.SelectWouldOverwriteAutosave()),
                n
                  ? (t = (0, d.Xx)("#BindingUI_List_Select_Confirm_Convert"))
                  : (o = (0, d.Xx)("#Button_Import"));
            } else e = (0, d.Xx)("#BindingUI_List_Select_Confirm");
            let r = null;
            return (
              u.w.DesktopMode || (r = { height: "30%", width: "30%" }),
              i.createElement(
                s.Z,
                {
                  visible: this.state.bShowSelectConfirmModal,
                  onClose: this.OnSelectDone,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "ModeSettingsModal",
                  closeOnEsc: !0,
                  customStyles: r,
                },
                this.state.bShowSelectConfirmModal &&
                  i.createElement(
                    "div",
                    { className: "FlexFullHeightColumnCentered" },
                    i.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, d.Xx)("#BindingUI_ConfirmSelect_Title")
                    ),
                    i.createElement("div", { className: "Label" }, e),
                    t &&
                      i.createElement(
                        "div",
                        { className: "Label SecondRow" },
                        t
                      ),
                    i.createElement(
                      "div",
                      { className: "FlexRow BottomButtons" },
                      i.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: () =>
                            this.OnSelectConfirmed(
                              p.c6.LoadedBindingURL,
                              this.state.bEditBindingOnSelectConfirm
                            ),
                        },
                        o
                      ),
                      n &&
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: this.OnSaveClicked,
                          },
                          (0, d.Xx)("#Button_Save")
                        ),
                      i.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: this.OnSelectDone,
                        },
                        (0, d.Xx)("#Button_Cancel")
                      )
                    )
                  )
              )
            );
          }
          OnSaveClicked() {
            let e = p.c6.LoadedBindingURL;
            this.OnSaveCurrentBinding(() =>
              this.OnSelectConfirmed(e, this.state.bEditBindingOnSelectConfirm)
            );
          }
          OnLegacySetup() {
            this.setState({ eTabType: ge.LegacySetup });
          }
          OnSecondaryControllerSetup() {
            this.setState({ eTabType: ge.SecondaryControllerSetup });
          }
          render() {
            let e = p.c6.ActionSets,
              t = e.map((e, t) => {
                let n = "Label Tab PositionRelative",
                  o = new p.Fv();
                p.c6.UnboundActions.has(e.name) &&
                  (o = p.c6.UnboundActions.get(e.name));
                let r = o.vecRequired.length + o.vecSuggested.length;
                return (
                  o.vecRequired.length > 0
                    ? (n += " Error")
                    : o.vecSuggested.length > 0 && (n += " Warning"),
                  e.name == p.c6.SelectedActionSet &&
                    this.state.eTabType == ge.ActionSet &&
                    (n += " Selected"),
                  i.createElement(
                    "div",
                    {
                      key: t,
                      className: n,
                      onMouseEnter: () => {
                        this.ShowUnboundActionsOverlay(o);
                      },
                      onMouseLeave: this.HideUnboundActionsOverlay,
                      onClick: () => {
                        this.OnActionSetDropdownChanged(e.name);
                      },
                    },
                    e.localized_name,
                    r > 0 &&
                      i.createElement(
                        "div",
                        { className: "UnboundActionsCount" },
                        r
                      )
                  )
                );
              });
            if (
              p.c6.SelectedBindingIsLegacy ||
              p.c6.ManifestOptions.length > 0
            ) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == ge.LegacySetup && (e += " Selected"),
                t.push(
                  i.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnLegacySetup,
                    },
                    (0, d.Xx)("#LegacySetupTab")
                  )
                );
            }
            if (p.c6.IsSecondaryController) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == ge.SecondaryControllerSetup &&
                (e += " Selected"),
                t.push(
                  i.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnSecondaryControllerSetup,
                    },
                    (0, d.Xx)("#SecondaryControllerTab")
                  )
                );
            }
            let n,
              o = !1,
              r = !1;
            p.c6.SelectedControllerTypeInfo &&
              this.state.eTabType == ge.ActionSet &&
              ((n = p.c6.SelectedControllerTypeInfo),
              (o = "controller_handed" == n.input_bindingui_mode),
              (r =
                "hmd" == n.input_bindingui_mode ||
                "single_device" == n.input_bindingui_mode));
            let a = this.state.bDeveloperOutput
              ? "Hide Developer output"
              : "Show Developer output";
            const l = {
                width: "60%",
                height: "auto",
                padding: "0px",
                maxHeight: "90%",
              },
              h = {
                width: "fit-content",
                height: "fit-content",
                padding: "0px",
                maxHeight: "90%",
              };
            let m = Q.S.GetApp(p.c6.SelectedApp),
              g = "";
            m && (g = m.name);
            let _,
              v = this.props.bReadOnlyView
                ? (0, d.Xx)("#BindingUI_ViewPageTitle", p.c6.ConfigName)
                : (0, d.Xx)("#BindingUI_EditPageTitle", p.c6.ConfigName),
              S = "#BindingUI_PageSubTitle",
              y = p.c6.GetOptionValue("variant");
            y &&
              ((_ = (0, d.Xx)("#BindingVariant_" + y)),
              (S = "#BindingUI_PageSubTitle_WithVariant"));
            let b = (0, d.Xx)(
                S,
                p.c6.SelectedControllerTypeLocalizedName,
                g,
                (0, d.Xx)(
                  "#BindingUI_BindingType_" + p.c6.CurrentBindingSaveType
                ),
                _
              ),
              C = !this.ThisConfigNeedsUpgrade() && this.props.bReadOnlyView,
              f = this.ThisConfigNeedsUpgrade();
            return i.createElement(
              "div",
              { className: "FlexColumn FullPage" },
              i.createElement(
                "div",
                { className: "TopRow FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexColumn DescriptionTopRow" },
                  i.createElement(Y, {
                    fnOnClick: u.w.ShowBindingList,
                    strTitle: v,
                    strSubTitle: b,
                    fnOpenOptionsModal: this.OpenOptionsModal,
                  })
                ),
                e.length > 0 &&
                  i.createElement(
                    he.P,
                    {
                      scrollDirection: he.I.Horizontal,
                      className: (0, c.LJ)("ActionTabContainer", "TabRow"),
                    },
                    t
                  ),
                this.state.eTabType == ge.ActionSet &&
                  i.createElement(me, {
                    Visible: this.state.bShowUnboundActionsOverlay,
                    UnboundActions: this.state.vecUnboundActions,
                  }),
                p.c6.SaveNoticeText &&
                  i.createElement(
                    "div",
                    { className: "UnboundActionsOverlay Visible" },
                    (0, d.Xx)(p.c6.SaveNoticeText)
                  )
              ),
              o &&
                i.createElement(G, {
                  bSingleMode: !1,
                  selectedActionSet: p.c6.SelectedActionSetDetails,
                  fnSetMirroredMode: this.SetBindingUIInMirroredMode,
                  fnOpenChordBindingsModal: this.OpenChordBindingsModal,
                  fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
                  fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
                  fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
                  bReadOnly: this.props.bReadOnlyView,
                }),
              r &&
                i.createElement(G, {
                  bSingleMode: !0,
                  fnOpenChordBindingsModal: this.OpenChordBindingsModal,
                  fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
                  fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
                  fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
                  bReadOnly: this.props.bReadOnlyView,
                }),
              this.state.eTabType == ge.LegacySetup &&
                i.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  i.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    i.createElement(oe, {
                      readOnly: this.props.bReadOnlyView,
                      options: p.c6.ManifestOptions,
                    }),
                    i.createElement(ee, { readOnly: this.props.bReadOnlyView }),
                    i.createElement(ae, { readOnly: this.props.bReadOnlyView })
                  )
                ),
              this.state.eTabType == ge.SecondaryControllerSetup &&
                i.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  i.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    i.createElement(oe, {
                      readOnly: this.props.bReadOnlyView,
                      options: p.c6.SecondaryControllerOptions,
                    })
                  )
                ),
              i.createElement(
                "div",
                { className: "BottomButtonRow" },
                i.createElement("hr", null),
                i.createElement(
                  "div",
                  {
                    className: "BindingManageButtons FlexFullWidthRowCentered",
                  },
                  !this.props.bReadOnlyView &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPublicModal,
                      },
                      (0, d.Xx)("#BindingUI_PublishToWorkshop")
                    ),
                  !this.props.bReadOnlyView &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPersonalModal,
                      },
                      (0, d.Xx)("#BindingUI_SavePersonal")
                    ),
                  C &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!1);
                        },
                      },
                      (0, d.Xx)("#BindingUI_SelectThisBinding")
                    ),
                  C &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!0);
                        },
                      },
                      (0, d.Xx)("#BindingUI_EditThisBinding")
                    ),
                  f &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!0);
                        },
                      },
                      (0, d.Xx)("#BindingUI_ImportThisBinding")
                    ),
                  L.I.BDevMode &&
                    i.createElement("div", {
                      className: "BindingManageButtonsHR",
                    }),
                  L.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ToggleDeveloperOutput,
                      },
                      a
                    ),
                  L.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowExportModal,
                      },
                      (0, d.Xx)("#BindingUI_ExportBindingFile")
                    ),
                  L.I.BDevMode &&
                    !p.c6.SelectedBindingIsLegacy &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowReplaceDefaultModal,
                      },
                      (0, d.Xx)("#BindingUI_ReplaceDefaultFile")
                    ),
                  p.c6.BSelectedActionSetHasPoses &&
                    i.createElement(
                      s.Z,
                      {
                        visible: this.state.bShowPoseBindings,
                        onClose: this.ClosePoseBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: l,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowPoseBindings &&
                        i.createElement(q, {
                          fnCloseModal: this.ClosePoseBindingsModal,
                          eActionSourceType: W.Pose,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            o && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        })
                    ),
                  p.c6.BSelectedActionSetHasHaptics &&
                    i.createElement(
                      s.Z,
                      {
                        visible: this.state.bShowHapticsBindings,
                        onClose: this.CloseHapticsBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: l,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowHapticsBindings &&
                        i.createElement(q, {
                          fnCloseModal: this.CloseHapticsBindingsModal,
                          eActionSourceType: W.Haptics,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            o && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        })
                    ),
                  p.c6.BSelectedActionSetHasSkeletons &&
                    i.createElement(
                      s.Z,
                      {
                        visible: this.state.bShowSkeletonBindings,
                        onClose: this.CloseSkeletonBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: l,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowSkeletonBindings &&
                        i.createElement(q, {
                          fnCloseModal: this.CloseSkeletonBindingsModal,
                          eActionSourceType: W.Skeleton,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            o && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        })
                    ),
                  i.createElement(
                    s.Z,
                    {
                      visible: this.state.bShowChordBindings,
                      onClose: this.CloseChordBindingsModal,
                      showCloseButton: !1,
                      animation: "fade",
                      className: "BindingChordsModal",
                      closeOnEsc: !0,
                      customStyles: h,
                    },
                    this.state.bShowChordBindings &&
                      i.createElement(j, {
                        fnCloseModal: this.CloseChordBindingsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      })
                  ),
                  i.createElement(
                    s.Z,
                    {
                      visible: this.state.bShowOptionsModal,
                      onClose: this.CloseOptionsModal,
                      showCloseButton: !1,
                      animation: "fade",
                      className: "BindingChordsModal",
                      closeOnEsc: !0,
                      customStyles: h,
                    },
                    this.state.bShowOptionsModal &&
                      i.createElement(se, {
                        fnCloseModal: this.CloseOptionsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      })
                  )
                ),
                i.createElement(
                  "div",
                  { className: "DebugButtons FlexFullWidthRowCentered" },
                  this.state.bDeveloperOutput &&
                    i.createElement("textarea", {
                      readOnly: !0,
                      style: { width: "1000px", height: "400px" },
                      value: p.c6.BindingConfig,
                    })
                )
              ),
              this.state.eSaveType != pe.None &&
                i.createElement(ue, {
                  sDescription: p.c6.ConfigDescription,
                  eSaveType: this.state.eSaveType,
                  ParentClose: this.CloseSaveModal,
                }),
              this.renderSelectConfirmModal()
            );
          }
        };
        (0, o.gn)([h.ak], _e.prototype, "OnAppDropdownChanged", null),
          (0, o.gn)([h.ak], _e.prototype, "OnActionSetDropdownChanged", null),
          (0, o.gn)([h.ak], _e.prototype, "ToggleDeveloperOutput", null),
          (0, o.gn)([h.ak], _e.prototype, "OpenPoseBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "ClosePoseBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "OpenHapticsBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "CloseHapticsBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "OpenSkeletonBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "CloseSkeletonBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "OpenChordBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "CloseChordBindingsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "OpenOptionsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "CloseOptionsModal", null),
          (0, o.gn)([h.ak], _e.prototype, "CloseSaveModal", null),
          (0, o.gn)([h.ak], _e.prototype, "ShowPublicModal", null),
          (0, o.gn)([h.ak], _e.prototype, "ShowPersonalModal", null),
          (0, o.gn)([h.ak], _e.prototype, "ShowExportModal", null),
          (0, o.gn)([h.ak], _e.prototype, "ShowReplaceDefaultModal", null),
          (0, o.gn)([h.ak], _e.prototype, "ShowUnboundActionsOverlay", null),
          (0, o.gn)([h.ak], _e.prototype, "HideUnboundActionsOverlay", null),
          (0, o.gn)([h.ak], _e.prototype, "SetBindingUIInMirroredMode", null),
          (0, o.gn)([h.ak], _e.prototype, "SelectThisBinding", null),
          (0, o.gn)([h.ak], _e.prototype, "OnSelectBinding", null),
          (0, o.gn)([h.ak], _e.prototype, "OnSelectConfirmed", null),
          (0, o.gn)([h.ak], _e.prototype, "OnSelectDone", null),
          (0, o.gn)([h.ak], _e.prototype, "OnSaveCurrentBinding", null),
          (0, o.gn)([h.ak], _e.prototype, "renderSelectConfirmModal", null),
          (0, o.gn)([h.ak], _e.prototype, "OnSaveClicked", null),
          (0, o.gn)([h.ak], _e.prototype, "OnLegacySetup", null),
          (0, o.gn)([h.ak], _e.prototype, "OnSecondaryControllerSetup", null),
          (_e = (0, o.gn)([a.Pi], _e));
        var ve = n(4021);
        let Se = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bIsVisible: !0 });
          }
          CloseDialog() {
            this.setState({ bIsVisible: !1 });
          }
          render() {
            let e = null;
            return (
              u.w.DesktopMode || (e = { height: "30%", width: "30%" }),
              i.createElement(
                s.Z,
                {
                  visible: this.state.bIsVisible,
                  onClose: this.CloseDialog,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                  customStyles: e,
                },
                i.createElement(
                  "div",
                  {
                    className:
                      "SaveDialogWrapper FlexColumn LoadErrorDialogWrapper",
                  },
                  i.createElement(
                    "div",
                    { className: "Label TitleCenter" },
                    this.props.sError
                  ),
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SaveBottomButtonRow LoadErrorCloseButton",
                    },
                    i.createElement(
                      "div",
                      { onClick: this.CloseDialog, className: "ButtonControl" },
                      (0, d.Xx)("#Button_Close")
                    )
                  )
                )
              )
            );
          }
        };
        (0, o.gn)([h.ak], Se.prototype, "CloseDialog", null),
          (Se = (0, o.gn)([a.Pi], Se));
        let ye = class extends i.Component {
          constructor(e) {
            super(e);
            let t = p.c6.SelectedAppActions;
            (this.state = {
              bShowDeleteConfirmModal: !1,
              bShowUpgradeConfirmModal: !1,
              bOldVersion:
                !!t && this.props.result.actionManifestVersion < t.version,
            }),
              this.props.result.steamIDOwner.length &&
                "0" != this.props.result.steamIDOwner &&
                ve.s.RequestUserInformation(this.props.result.steamIDOwner);
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            this.setState({ bShowDeleteConfirmModal: !1 }),
              p.c6.DeleteBinding(this.props.result.url).then(() => {
                u.w.RefreshBindingList();
              });
          }
          OnDeleteCancel() {
            this.setState({ bShowDeleteConfirmModal: !1 });
          }
          renderDeleteConfirmModal(e) {
            return i.createElement(
              s.Z,
              {
                visible: this.state.bShowDeleteConfirmModal,
                onClose: this.OnDeleteCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bShowDeleteConfirmModal &&
                i.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered" },
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.Xx)("#BindingUI_List_Delete_Confirm", e.name)
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRow" },
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteConfirmed,
                      },
                      (0, d.Xx)("#Button_Delete")
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, d.Xx)("#Button_Cancel")
                    )
                  )
                )
            );
          }
          OnView() {
            this.props.fnViewBinding(
              this.props.result.url,
              !this.props.bCurrentlySelectedBinding
            );
          }
          OnSelect() {
            this.props.fnSelectBinding(this.props.result.url);
          }
          render() {
            let e,
              t,
              n = new Date(),
              o = new Date(1e3 * this.props.result.time),
              r =
                n.getTime() - o.getTime() > 1728e5
                  ? o.toLocaleDateString()
                  : o.toLocaleString(),
              a = this.props.result,
              s = "developer" == a.type,
              l = "0" != a.steamIDOwner && !s,
              c = Q.S.GetApp(p.c6.SelectedApp),
              h = c ? c.name : "";
            s &&
              ((a.name && 0 != a.name.length) ||
                (p.c6.SelectedBindingIsLegacy
                  ? (a.name = (0, d.Xx)(
                      "#BindingUI_List_Legacy_Binding_Title",
                      h
                    ))
                  : (a.name = (0, d.Xx)(
                      "#BindingUI_List_Developer_Binding_Title",
                      h
                    ))),
              (a.description && 0 != a.description.length) ||
                (p.c6.SelectedBindingIsLegacy
                  ? (a.description = (0, d.Xx)(
                      "#BindingUI_List_Legacy_Binding_Description"
                    ))
                  : (a.description = (0, d.Xx)(
                      "#BindingUI_List_Developer_Binding_Description"
                    )))),
              l &&
                ((t = ve.s.GetUserInformation(a.steamIDOwner).avatar_url),
                (e = ve.s.GetUserInformation(a.steamIDOwner).persona_name));
            let u = this.props.bCurrentlySelectedBinding
                ? (0, d.Xx)("#BindingUI_List_Edit")
                : (0, d.Xx)("#BindingUI_List_View"),
              m = a.name;
            "autosave" == a.type &&
              (m = (0, d.Xx)("#BindingUI_List_Autosave", a.name));
            let g = null;
            this.state.bOldVersion &&
              (g = this.props.bCurrentlySelectedBinding
                ? (0, d.Xx)(
                    "#BindingUI_List_OldVersionWarning_CurrentBinding",
                    h
                  )
                : (0, d.Xx)("#BindingUI_List_OldVersionWarning", h));
            let _ = null;
            if (a.secondsPlayed > 0) {
              let e = a.secondsPlayed / 60;
              _ = (0, d.Xx)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
            }
            let v = null;
            if (a.secondsPlayedThisMonth > 0) {
              let e = a.secondsPlayedThisMonth / 60;
              v = (0, d.Xx)(
                "#BindingUI_List_MinutesPlayedThisMonth",
                e.toFixed(0)
              );
            }
            return i.createElement(
              "div",
              { className: "BindingEntry FlexRow" },
              t &&
                i.createElement("img", {
                  className: "SteamCommunityProfileImage",
                  src: t,
                }),
              l &&
                !t &&
                i.createElement("div", {
                  className: "SteamCommunityProfileImage",
                }),
              i.createElement(
                "div",
                { className: "BindingDetails" },
                !this.props.bCurrentlySelectedBinding &&
                  this.props.fnSelectBinding &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnSelect,
                    },
                    (0, d.Xx)("#BindingUI_List_Select")
                  ),
                !p.c6.HasBindingUriFailedToLoad(a.url) &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnView,
                    },
                    u
                  ),
                a.owned &&
                  !this.props.bCurrentlySelectedBinding &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton BindingSelectButton DeleteButton ButtonControl",
                      onClick: () => {
                        this.OnDelete();
                      },
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_trash.svg",
                    })
                  ),
                i.createElement(
                  "span",
                  { className: "BindingName" },
                  m,
                  i.createElement("br", null)
                ),
                i.createElement(
                  "span",
                  { className: "BindingDescription" },
                  a.description,
                  i.createElement("br", null)
                ),
                e &&
                  i.createElement(
                    "span",
                    { className: "BindingSteamPersonaName Label" },
                    (0, d.Xx)("#BindingUI_List_PublishedBy", e),
                    i.createElement("br", null)
                  ),
                a.time > 0 &&
                  i.createElement(
                    "span",
                    { className: "BindingLastUpdated" },
                    (0, d.Xx)("#BindingUI_List_LastUpdated"),
                    r,
                    v && " - " + v,
                    _ && " - " + _,
                    i.createElement("br", null)
                  ),
                g &&
                  i.createElement(
                    "span",
                    { className: "ConvertWarning" },
                    g,
                    i.createElement("br", null)
                  )
              ),
              i.createElement("div", {
                className: "FlexRow BindingEntryActionButtons",
              }),
              this.renderDeleteConfirmModal(a)
            );
          }
        };
        (0, o.gn)([h.ak], ye.prototype, "OnDelete", null),
          (0, o.gn)([h.ak], ye.prototype, "OnDeleteConfirmed", null),
          (0, o.gn)([h.ak], ye.prototype, "OnDeleteCancel", null),
          (0, o.gn)([h.ak], ye.prototype, "renderDeleteConfirmModal", null),
          (0, o.gn)([h.ak], ye.prototype, "OnView", null),
          (0, o.gn)([h.ak], ye.prototype, "OnSelect", null),
          (ye = (0, o.gn)([a.Pi], ye));
        let be = class extends i.Component {
          constructor(e) {
            super(e);
          }
          CreateBinding() {
            this.ViewBinding(p.c6.SelectedBindingURL, !1);
          }
          SelectBinding(e) {
            u.w.Loading = !0;
            let t = p.c6.SelectedControllerTypeInfo;
            p.c6
              .SelectConfig(p.c6.SelectedApp, t ? t.controller_type : "", e)
              .then(() => {
                p.c6.ReloadCurrentApp();
              });
          }
          ViewBinding(e, t) {
            if (((u.w.Loading = !0), t))
              p.c6.SetBindingURL(e),
                p.c6.ReloadControllerConfiguration().then(() => {
                  u.w.ViewCurrentBinding(),
                    setTimeout(() => {
                      u.w.Loading = !1;
                    }, 1);
                });
            else {
              let t = p.c6.SelectedControllerTypeInfo;
              p.c6
                .SelectConfig(p.c6.SelectedApp, t ? t.controller_type : "", e)
                .then(() => {
                  p.c6.ReloadCurrentApp().then(() => {
                    u.w.EditCurrentBinding(),
                      setTimeout(() => {
                        u.w.Loading = !1;
                      }, 1);
                  });
                });
            }
          }
          OnControllerDropdownChanged(e) {
            p.c6.SetSelectedController(e), u.w.RefreshBindingList();
          }
          ComputeResultsSection(e, t) {
            u.w.CurrentBinding && u.w.CurrentBinding.type;
            let n = u.w.BindingQueryResults,
              o = [];
            return (
              n &&
                n.length > 0 &&
                (o = n
                  .filter(t)
                  .map((e, t) =>
                    i.createElement(ye, {
                      key: t,
                      currentBinding: u.w.CurrentBinding,
                      result: e,
                      fnViewBinding: this.ViewBinding,
                      fnSelectBinding: this.SelectBinding,
                      bCurrentlySelectedBinding: !1,
                    })
                  )),
              o.length > 0 &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(
                    "div",
                    { className: "BindingListSectionHeader" },
                    (0, d.Xx)(e)
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRowWithWrap BindingListSection" },
                    o
                  )
                )
            );
          }
          CreateControllerTypeDropdown() {
            let e = [],
              t = Q.S.IsAppAllowedPrivateInputs(p.c6.SelectedApp);
            L.I.ControllerTypes.forEach((n) => {
              (t || "InputValueVisibility_SteamVRInternal" != n.visibility) &&
                "InputValueVisibility_None" != n.visibility &&
                e.push(n);
            }),
              e.sort((e, t) => e.priority - t.priority);
            let n = [];
            e.forEach((e) => {
              n.push(
                new v.GZ(
                  e.controller_type,
                  L.I.LocalizeDriverString(e.resource_root, e.controller_type)
                )
              );
            });
            let o = "",
              r = "",
              a = p.c6.SelectedControllerTypeInfo;
            return (
              a &&
                (a.input_bindingui_right.transform &&
                  (o = a.input_bindingui_right.transform),
                (r = a.input_bindingui_right.uri)),
              a.device_class,
              i.createElement(
                "div",
                { className: "FlexColumn ControllerTypeWrapper" },
                i.createElement(
                  "div",
                  { className: "BindingListSectionHeader Label" },
                  (0, d.Xx)("#BindingList_ControllerOption")
                ),
                i.createElement(
                  "div",
                  { className: "FlexRow ControllerTypeButton BindingEntry" },
                  i.createElement("img", {
                    className: "ControllerImage",
                    src: r,
                    style: { transform: o },
                  }),
                  i.createElement(v.vs, {
                    vecOptions: n,
                    sModalClass: "PinTop",
                    sValueSelectedItem: a ? a.controller_type : "",
                    sLocalizedSelectedItem: L.I.LocalizeControllerString(
                      a,
                      a ? a.controller_type : ""
                    ),
                    fnOptionSelected: this.OnControllerDropdownChanged,
                  })
                )
              )
            );
          }
          render() {
            let e = Q.S.GetApp(p.c6.SelectedApp),
              t = "";
            e && (t = e.name);
            let n = u.w.CurrentBinding,
              o = "#BindingUI_List_DeveloperSection";
            p.c6.SelectedBindingIsLegacy &&
              (o = "#BindingUI_List_LegacySection");
            let r = [];
            return (
              null != u.w.BindingQueryResults &&
                (r = u.w.BindingQueryResults.filter(
                  (e) => "autosave" != e.type
                )),
              i.createElement(
                "div",
                { className: "FlexColumn FullPage" },
                i.createElement(Y, {
                  fnOnClick: u.w.ShowAppSelect,
                  strTitle: (0, d.Xx)("#BindingList_PageTitle", t),
                }),
                i.createElement(
                  "div",
                  { className: "BindingUITopSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "CurrentSection FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "BindingListSectionHeader" },
                      (0, d.Xx)("#BindingUI_List_CurrentSection")
                    ),
                    n &&
                      i.createElement(ye, {
                        result: n,
                        currentBinding: u.w.CurrentBinding,
                        fnViewBinding: this.ViewBinding,
                        bCurrentlySelectedBinding: !0,
                      })
                  ),
                  this.CreateControllerTypeDropdown()
                ),
                i.createElement("hr", null),
                i.createElement(
                  "div",
                  { className: "BindingListContent AppBindingSection" },
                  this.ComputeResultsSection(
                    o,
                    (e) =>
                      "developer" == e.type && e.url != p.c6.SelectedBindingURL
                  ),
                  this.ComputeResultsSection(
                    "#BindingUI_List_ImportSection",
                    (e) =>
                      "local_file" == e.type && e.url != p.c6.SelectedBindingURL
                  ),
                  this.ComputeResultsSection(
                    "#BindingUI_List_PersonalSection",
                    (e) =>
                      "personal" == e.type && e.url != p.c6.SelectedBindingURL
                  ),
                  this.ComputeResultsSection(
                    "#BindingUI_List_OwnedSection",
                    (e) =>
                      "public" == e.type &&
                      e.owned &&
                      e.url != p.c6.SelectedBindingURL
                  ),
                  this.ComputeResultsSection(
                    "#BindingUI_List_PublicSection",
                    (e) =>
                      "public" == e.type &&
                      !e.owned &&
                      e.url != p.c6.SelectedBindingURL
                  ),
                  0 == r.length &&
                    i.createElement(
                      "div",
                      null,
                      i.createElement(
                        "div",
                        null,
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, d.Xx)("#BindingUI_List_NoBindingsFound")
                        )
                      )
                    ),
                  i.createElement(
                    "div",
                    {
                      className: "ButtonControl DeveloperLabel Inline",
                      onClick: this.CreateBinding,
                    },
                    (0, d.Xx)("#BindingUI_List_CreateBinding")
                  )
                ),
                u.w.ShowBindingListError &&
                  i.createElement(Se, { sError: u.w.BindingListError })
              )
            );
          }
        };
        (0, o.gn)([h.ak], be.prototype, "CreateBinding", null),
          (0, o.gn)([h.ak], be.prototype, "SelectBinding", null),
          (0, o.gn)([h.ak], be.prototype, "ViewBinding", null),
          (0, o.gn)([h.ak], be.prototype, "OnControllerDropdownChanged", null),
          (0, o.gn)([h.ak], be.prototype, "ComputeResultsSection", null),
          (0, o.gn)([h.ak], be.prototype, "CreateControllerTypeDropdown", null),
          (be = (0, o.gn)([a.Pi], be));
        let Ce = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bIsVisible: !0 });
          }
          CloseDialog() {
            u.w.ManifestLoadErrorClose(), this.setState({ bIsVisible: !1 });
          }
          render() {
            return i.createElement(
              s.Z,
              {
                visible: this.state.bIsVisible,
                onClose: this.CloseDialog,
                showCloseButton: !1,
                animation: "fade",
                closeOnEsc: !0,
                width: 600,
              },
              i.createElement(
                "div",
                {
                  className:
                    "SaveDialogWrapper FlexColumn LoadErrorDialogWrapper",
                },
                i.createElement(
                  "div",
                  { className: "Label TitleCenter" },
                  this.props.sError
                ),
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#ActionManifestError_Path") +
                    " " +
                    this.props.sPath
                ),
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexRow SaveBottomButtonRow LoadErrorCloseButton",
                  },
                  i.createElement(
                    "div",
                    { onClick: this.CloseDialog, className: "ButtonControl" },
                    (0, d.Xx)("#Button_Close")
                  )
                )
              )
            );
          }
        };
        (0, o.gn)([h.ak], Ce.prototype, "CloseDialog", null),
          (Ce = (0, o.gn)([a.Pi], Ce));
        let fe = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                strImageURL: Q.S.GetAppImageURL(this.props.app.key),
              });
          }
          componentWillReceiveProps(e) {
            e.app.key != this.props.app.key &&
              this.setState({ strImageURL: Q.S.GetAppImageURL(e.app.key) });
          }
          render() {
            return i.createElement(
              "div",
              {
                className: "AppSelectContainer",
                onClick: () => {
                  this.props.fnSelectApp(this.props.app.key);
                },
              },
              i.createElement("div", {
                className: "AppImage",
                style: {
                  backgroundImage: "url('" + this.state.strImageURL + "')",
                },
              }),
              i.createElement(
                "div",
                { className: "AppSelectName AllCaps" },
                this.props.app.name
              )
            );
          }
        };
        fe = (0, o.gn)([a.Pi], fe);
        let ke = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_bInHeadset = !1),
              (this.m_bInHeadset = !!l.ZP && !u.w.DesktopMode),
              (this.state = { bShowRecentApps: !1 });
          }
          SelectApplication(e) {
            p.c6.SetSelectedApp(e), u.w.ShowBindingList();
          }
          OnShowMoreApps() {
            this.setState({ bShowRecentApps: !0 });
          }
          renderAppColumn() {
            let e = Q.S.GetApp("openvr.component.vrcompositor"),
              t = Q.S.GetApp("openvr.tool.steamvr_environments"),
              n = Q.S.GetRecentApps();
            t && (n = n.filter((e) => e.key != t.key));
            let o,
              r = Q.S.GetCurrentSceneProcess();
            return (
              !r && n.length > 0 && (r = n[0]),
              r && (n = n.filter((e) => e.key != r.key)),
              (o = this.state.bShowRecentApps
                ? i.createElement(
                    "div",
                    { className: "AppSelectList" },
                    i.createElement(
                      "div",
                      { className: "AppSelectListItems" },
                      n.map((e, t) =>
                        i.createElement(fe, {
                          key: t,
                          app: e,
                          fnSelectApp: this.SelectApplication,
                        })
                      )
                    )
                  )
                : i.createElement(
                    "div",
                    {
                      className: "ButtonControl AppSelectCenter",
                      onClick: this.OnShowMoreApps,
                    },
                    (0, d.Xx)("#AppSelect_ShowMoreApps")
                  )),
              i.createElement(
                "div",
                { className: "AppSelectColumn" },
                i.createElement(
                  "div",
                  { className: "AppSelectList" },
                  i.createElement(
                    "div",
                    { className: "AppSelectListItems" },
                    r &&
                      i.createElement(fe, {
                        app: r,
                        fnSelectApp: this.SelectApplication,
                      }),
                    e &&
                      i.createElement(fe, {
                        app: e,
                        fnSelectApp: this.SelectApplication,
                      }),
                    t &&
                      i.createElement(fe, {
                        app: t,
                        fnSelectApp: this.SelectApplication,
                      })
                  )
                ),
                o
              )
            );
          }
          render() {
            return i.createElement(
              "div",
              { className: "AppSelectPageWrapper" },
              i.createElement(Y, {
                fnOnClick: u.w.ReturnToSettingsUI,
                strTitle: (0, d.Xx)("#AppSelect_EditBindings"),
                bShowBackButton: this.m_bInHeadset,
              }),
              i.createElement(
                "div",
                { className: "AppSelectColumnWrapper" },
                this.renderAppColumn()
              ),
              u.w.ShowManifestError &&
                i.createElement(Ce, {
                  sError: u.w.ManifestError,
                  sPath: u.w.ManifestErrorPath,
                })
            );
          }
        };
        (0, o.gn)([h.ak], ke.prototype, "SelectApplication", null),
          (0, o.gn)([h.ak], ke.prototype, "OnShowMoreApps", null),
          (ke = (0, o.gn)([a.Pi], ke));
        var Me,
          Ie,
          Ee,
          Oe = n(8325),
          we = n(1818),
          Re = n(1415);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Boolean = 1)] = "Boolean"),
            (e[(e.Vector1 = 2)] = "Vector1"),
            (e[(e.Vector2 = 3)] = "Vector2"),
            (e[(e.Vector3 = 4)] = "Vector3"),
            (e[(e.Pose = 20)] = "Pose"),
            (e[(e.SimpleHaptic = 21)] = "SimpleHaptic"),
            (e[(e.Skeleton = 22)] = "Skeleton");
        })(Me || (Me = {})),
          (function (e) {
            (e[(e.Estimated = 0)] = "Estimated"),
              (e[(e.Partial = 1)] = "Partial"),
              (e[(e.Full = 2)] = "Full");
          })(Ie || (Ie = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Boolean = 1)] = "Boolean"),
              (e[(e.Scalar = 2)] = "Scalar"),
              (e[(e.Pose = 3)] = "Pose"),
              (e[(e.Skeleton = 4)] = "Skeleton"),
              (e[(e.Haptic = 5)] = "Haptic");
          })(Ee || (Ee = {}));
        let Te = 16777216;
        function De(e) {
          return "number" != typeof e
            ? "-"
            : e >= Te && e <= 33554431
            ? (0, d.Xx)("#InputDebugger_Priority_Overlay", e - Te)
            : e.toFixed(0);
        }
        class Pe extends i.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              (this.m_msgNextState = null),
              this.m_mailbox.Init("input_debugger"),
              this.m_mailbox.RegisterHandler("input_frame", this.OnInputFrame),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRProperties.SetInt32Path("/input_debugger_pid", 0),
              (this.state = {});
          }
          OnSelectApp(e) {
            this.setState({
              sCurrentApp: e,
              latestState: null,
              actionManifest: null,
              sError: null,
              sCurrentActionSet: null,
            });
            let t = Q.S.GetApp(e);
            t.pid &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRProperties.SetInt32Path("/input_debugger_pid", t.pid)),
              (0, p._l)(e)
                .then((e) => {
                  this.setState({ actionManifest: e });
                })
                .catch((e) => {
                  this.setState({
                    sError: (0, d.Xx)("InputDebugger_ActionManifestFailed"),
                  });
                });
          }
          OnInputFrame(e) {
            if (null == this.state.sCurrentApp) {
              let t = Q.S.FindAppByPid(e.pid);
              t && this.OnSelectApp(t.key);
            }
            !this.state.sCurrentActionSet &&
              e.actions &&
              this.SetActionSet(e.actions[0].actionSet),
              (this.m_msgNextState = e);
          }
          componentDidMount() {
            this.m_timerStateUpdate = window.setInterval(() => {
              this.m_msgNextState &&
                (this.setState({ latestState: this.m_msgNextState }),
                (this.m_msgNextState = null));
            }, 100);
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRProperties.SetInt32Path("/input_debugger_pid", 0),
              this.m_timerStateUpdate &&
                window.clearInterval(this.m_timerStateUpdate);
          }
          GetActionSetName(e) {
            let t;
            return (
              this.state.actionManifest &&
                (t = this.state.actionManifest.action_sets.find(
                  (t) => t.name.toLowerCase() == e.toLowerCase()
                )),
              t ? t.localized_name : e
            );
          }
          GetActionName(e) {
            let t;
            if (this.state.actionManifest)
              for (let n of this.state.actionManifest.action_sets)
                if (
                  ((t = n.actions.find(
                    (t) => t.name.toLowerCase() == e.toLowerCase()
                  )),
                  t)
                )
                  break;
            return t ? t.localized_name : e;
          }
          GetMaxPriority(e) {
            var t, n, o, i, r, a;
            return Math.max(
              null !==
                (o =
                  null ===
                    (n =
                      null === (t = this.state.latestState) || void 0 === t
                        ? void 0
                        : t.priorityMap) || void 0 === n
                    ? void 0
                    : n[e]) && void 0 !== o
                ? o
                : null,
              null !==
                (a =
                  null ===
                    (r =
                      null === (i = this.state.latestState) || void 0 === i
                        ? void 0
                        : i.globalPriorityMap) || void 0 === r
                    ? void 0
                    : r[e]) && void 0 !== a
                ? a
                : null
            );
          }
          renderActionSets() {
            if (!this.state.latestState.activeActionSets)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, d.Xx)("#InputDebugger_NoActiveActionSets")
              );
            let e = [];
            for (let t of this.state.latestState.activeActionSets) {
              let n, o;
              t.secondaryActionSet
                ? ((n = t.secondaryActionSet), (o = this.GetActionSetName(n)))
                : ((o = (0, d.Xx)("#InputDebugger_None")), (n = ""));
              let r = this.GetActionSetName(t.actionSet),
                a = t.restrictToDevice
                  ? t.restrictToDevice
                  : (0, d.Xx)("#InputDebugger_None");
              e.push(
                i.createElement(
                  "div",
                  {
                    className: "ActiveActionSet",
                    key: t.actionSet + t.restrictToDevice,
                  },
                  i.createElement(
                    "div",
                    { className: "Label ActionSetName" },
                    r
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetPath" },
                    t.actionSet
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetPriority" },
                    De(t.priority)
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetDevice" },
                    a
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryName" },
                    o
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryPath" },
                    n
                  )
                )
              );
            }
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, d.Xx)("#InputDebugger_ActiveActionSets")
              ),
              i.createElement(
                "div",
                { className: "ActiveActionSetContainer" },
                i.createElement(
                  "div",
                  { className: "ActiveActionSetsHeader" },
                  i.createElement(
                    "div",
                    { style: { gridColumn: "1 / span 2" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_ActionSetName")
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "3" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_Priority")
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "4" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_Device")
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "5 / span 2" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_SecondaryActionSetName")
                  )
                ),
                e
              )
            );
          }
          SetActionSet(e) {
            this.setState({ sCurrentActionSet: e });
          }
          ShowFilterState(e) {
            this.setState({ sFilterPath: e });
          }
          renderActionHeader(e) {
            switch (e) {
              case Me.Boolean:
              case Me.Vector1:
              case Me.Vector2:
              case Me.Vector3:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.Xx)("#InputDebugger_Source")
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.Xx)("#InputDebugger_Binding")
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.Xx)("#InputDebugger_Active")
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.Xx)("#InputDebugger_ActiveOrigin")
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "value" },
                    (0, d.Xx)("#InputDebugger_Value")
                  ),
                ];
              default:
                return null;
            }
          }
          renderBoolean(e, t) {
            return i.createElement(
              "div",
              {
                className: (0, c.LJ)(
                  "BooleanValue",
                  ["IsTrue", e],
                  "Label",
                  "ActionEntry"
                ),
                key: t,
              },
              e ? "TRUE" : "false"
            );
          }
          renderScalar(e, t) {
            return i.createElement(
              "div",
              { className: (0, c.LJ)("Label", "ActionEntry"), key: t },
              e.toFixed(2)
            );
          }
          renderBinding(e, t) {
            var n, o;
            if (
              null === (n = e.binding) || void 0 === n
                ? void 0
                : n.startsWith("/filters/")
            )
              return i.createElement(
                "div",
                {
                  className: "Label ActionEntry FilterLink",
                  key: t + "_binding",
                },
                i.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: () => {
                      this.ShowFilterState(e.binding);
                    },
                  },
                  (0, d.Xx)("#InputDebugger_FilterDetails")
                )
              );
            {
              let t = this.GetMaxPriority(e.binding),
                n = null !== (o = e.binding) && void 0 !== o ? o : "-";
              return (
                "number" == typeof t &&
                  (n += " " + (0, d.Xx)("#InputDebugger_PriorityValue", De(t))),
                i.createElement(
                  "div",
                  {
                    className: "Label ActionEntry",
                    key: e.inputSource + "_binding",
                  },
                  n
                )
              );
            }
          }
          renderActionEntry(e, t, n) {
            var o, r, a, s;
            switch (e.type) {
              case Me.Boolean:
                let e = t.data;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_source" },
                    null !== (o = t.inputSource) && void 0 !== o ? o : "-"
                  ),
                  this.renderBinding(t, n),
                  this.renderBoolean(t.data.active, n + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_origin" },
                    null !== (r = t.data.activeOrigin) && void 0 !== r ? r : "-"
                  ),
                  this.renderBoolean(e.state, n + "_value"),
                ];
              case Me.Vector1:
              case Me.Vector2:
              case Me.Vector3:
                let l = t.data,
                  c = l.x.toFixed(2);
                return (
                  void 0 !== l.y && (c += ", " + l.y.toFixed(2)),
                  void 0 !== l.z && (c += ", " + l.z.toFixed(2)),
                  [
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_source" },
                      null !== (a = t.inputSource) && void 0 !== a ? a : "-"
                    ),
                    this.renderBinding(t, n),
                    this.renderBoolean(t.data.active, n + "_active"),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_origin" },
                      null !== (s = t.data.activeOrigin) && void 0 !== s
                        ? s
                        : "-"
                    ),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_value" },
                      c
                    ),
                  ]
                );
              default:
                return null;
            }
          }
          renderAction(e) {
            if (!e) return [null, 0];
            let t = this.renderActionHeader(e.type);
            if (!t) return [null, 0];
            let n = [t],
              o = 1;
            if (e.entries)
              for (let i of e.entries) {
                let r = this.renderActionEntry(e, i, (o++).toString());
                if (r) {
                  if (r.length != t.length)
                    throw new Error(
                      "Values must have the same length as header"
                    );
                  n.push(r);
                }
              }
            let r = [];
            for (let e = 0; e < n[0].length; e++)
              for (let t = 0; t < n.length; t++) r.push(n[t][e]);
            let a = Math.max(n.length, 5);
            return [
              i.createElement(
                "div",
                { className: "Action", key: e.path },
                i.createElement(
                  "div",
                  {
                    className: "ActionName Label",
                    style: { gridColumn: "1 / " + (a + 1) },
                  },
                  this.GetActionName(e.path),
                  i.createElement(
                    "span",
                    { className: "ActionPath" },
                    " (",
                    e.path,
                    ")"
                  )
                ),
                r
              ),
              a,
            ];
          }
          renderCurrentActions() {
            if (!this.state.sCurrentActionSet) return null;
            let e = new Set(),
              t = [],
              n = 0;
            for (let o of this.state.latestState.actions)
              if (o.actionSet == this.state.sCurrentActionSet) {
                let [i, r] = this.renderAction(o);
                if (!i) continue;
                (n = Math.max(r, n)), t.push(i), e.add(o.path.toLowerCase());
              }
            if (this.state.actionManifest) {
              let o = this.state.actionManifest.action_sets.find(
                (e) => e.name == this.state.sCurrentActionSet
              );
              if (o)
                for (let r of o.actions)
                  e.has(r.name.toLowerCase()) ||
                    ("pose" != r.type &&
                      "skeleton" != r.type &&
                      "vibration" != r.type &&
                      (t.push(
                        i.createElement(
                          "div",
                          { className: "Action", key: r.name },
                          i.createElement(
                            "div",
                            {
                              className: "ActionName Label",
                              style: { gridColumn: "1 / " + (n + 1) },
                            },
                            r.localized_name,
                            i.createElement(
                              "span",
                              { className: "ActionPath" },
                              " (",
                              r.name,
                              ")"
                            )
                          ),
                          i.createElement(
                            "div",
                            { className: "Unbound Label" },
                            (0, d.Xx)("#InputDebugger_ActionUnbound")
                          )
                        )
                      ),
                      e.add(r.name.toLowerCase())));
            }
            return i.createElement(
              "div",
              { className: "ActionListWrapper" },
              i.createElement("div", { className: "ActionList" }, t)
            );
          }
          renderActions() {
            if (!this.state.latestState.actions)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, d.Xx)("#InputDebugger_NoActions")
              );
            let e = new Set();
            for (let t of this.state.latestState.actions) e.add(t.actionSet);
            let t = [];
            for (let n of e)
              t.push(
                i.createElement(
                  we.z,
                  {
                    onClick: () => {
                      this.SetActionSet(n);
                    },
                    key: n,
                    className: (0, c.LJ)("ActionSetButton", "ButtonControl", [
                      "Selected",
                      n == this.state.sCurrentActionSet,
                    ]),
                  },
                  this.GetActionSetName(n)
                )
              );
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, d.Xx)("#InputDebugger_Actions")
              ),
              i.createElement(
                "div",
                { className: "ActionContainer" },
                i.createElement("div", { className: "ActionSetButtons" }, t),
                this.renderCurrentActions()
              )
            );
          }
          renderLatestState() {
            return this.state.latestState
              ? i.createElement(
                  "div",
                  { className: "DebuggerState" },
                  this.renderActionSets(),
                  this.renderActions()
                )
              : i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_WaitingForApp")
                );
          }
          FindFilter(e) {
            var t, n;
            if (this.state.latestState && this.state.latestState.filters)
              for (let o of this.state.latestState.filters) {
                if (
                  null === (t = o.inputs) || void 0 === t
                    ? void 0
                    : t.find((t) => t.path == e)
                )
                  return o;
                if (
                  null === (n = o.outputs) || void 0 === n
                    ? void 0
                    : n.find((t) => t.path == e)
                )
                  return o;
              }
          }
          renderFilterIO(e, t) {
            let n;
            switch (e.type) {
              case Ee.Boolean:
                n = this.renderBoolean(e.value);
                break;
              case Ee.Scalar:
                n = this.renderScalar(e.value);
                break;
              default:
                n = i.createElement("div", { className: "Label" }, Ee[e.type]);
            }
            let o = this.GetMaxPriority(e.path);
            return i.createElement(
              "div",
              { className: "FilterIO", key: e.path },
              i.createElement("div", { className: "Label" }, e.path, ": "),
              n,
              t &&
                e.path.startsWith("/filters/") &&
                i.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: () => {
                      this.ShowFilterState(e.path);
                    },
                  },
                  (0, d.Xx)("#InputDebugger_FilterDetails")
                ),
              "number" == typeof o &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_PriorityValue", De(o))
                ),
              e.suppressedByPriority &&
                i.createElement(
                  "div",
                  { className: "Label Suppressed" },
                  (0, d.Xx)("#InputDebugger_Suppressed")
                )
            );
          }
          renderFilterState() {
            if (!this.state.sFilterPath) return null;
            let e = this.FindFilter(this.state.sFilterPath),
              t = [];
            for (let n in e.parameters) {
              let o,
                r = e.parameters[n];
              switch (typeof r) {
                case "boolean":
                  o = r ? "true" : "false";
                  break;
                case "number":
                  o = r.toFixed(2);
                  break;
                default:
                  o = JSON.stringify(r);
              }
              t.push(
                i.createElement(
                  "div",
                  { className: "Label", key: n },
                  n,
                  ": ",
                  o
                )
              );
            }
            let n = [];
            for (let t of e.inputs) n.push(this.renderFilterIO(t, !0));
            n ||
              n.push(
                i.createElement(
                  "div",
                  { className: "Label", key: "none" },
                  (0, d.Xx)("#InputDebugger_None")
                )
              );
            let o = [];
            for (let t of e.outputs) o.push(this.renderFilterIO(t, !1));
            return (
              o ||
                o.push(
                  i.createElement(
                    "div",
                    { className: "Label", key: "none" },
                    (0, d.Xx)("#InputDebugger_None")
                  )
                ),
              i.createElement(
                Re.u,
                {
                  onDismissRequested: () => {
                    this.ShowFilterState(null);
                  },
                  className: "FilterDetails",
                },
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerSectionHeading" },
                  (0, d.Xx)("#InputDebugger_FilterState_Title", e.name),
                  " "
                ),
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_FilterType"),
                  e.type
                ),
                t &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: "Label InputDebuggerHeading" },
                      (0, d.Xx)("#InputDebugger_Parameters")
                    ),
                    i.createElement("div", { className: "ParameterList" }, t)
                  ),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.Xx)("#InputDebugger_Inputs")
                ),
                i.createElement("div", { className: "InputList" }, n),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.Xx)("#InputDebugger_Outputs")
                ),
                i.createElement("div", { className: "OutputList" }, o)
              )
            );
          }
          render() {
            let e = Q.S.GetRunningApps(),
              t = [];
            for (let n of e)
              t.push({ value: n.key, sLabel: `${n.name} (pid: ${n.pid})` });
            return i.createElement(
              "div",
              { className: "DebuggerMain" },
              i.createElement(Y, {
                fnOnClick: u.w.ReturnToSettingsUI,
                strTitle: (0, d.Xx)("#InputDebugger_Title"),
              }),
              i.createElement(
                "div",
                { className: "AppDropdownWrapper" },
                i.createElement(Oe.Lt, {
                  items: t,
                  onChange: this.OnSelectApp,
                  value: this.state.sCurrentApp,
                  defaultLabel: (0, d.Xx)("#InputDebugger_SelectApplication"),
                })
              ),
              !this.state.actionManifest &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_ActionManifestLoading")
                ),
              this.state.sError &&
                i.createElement(
                  "div",
                  { className: "Label Error" },
                  this.state.sError
                ),
              this.renderLatestState(),
              this.renderFilterState()
            );
          }
        }
        (0, o.gn)([h.ak], Pe.prototype, "OnSelectApp", null),
          (0, o.gn)([h.ak], Pe.prototype, "OnInputFrame", null),
          (0, o.gn)([h.ak], Pe.prototype, "SetActionSet", null);
        var xe = n(6828),
          Be = n(3446);
        let Ne = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return (
              u.w.Loading
                ? document.body.classList.add("Loading")
                : document.body.classList.remove("Loading"),
              L.I.IsSteamAvailable
                ? document.body.classList.remove("SteamUnavailable")
                : document.body.classList.add("SteamUnavailable"),
              i.createElement(
                "div",
                { className: "FullPage" },
                (u.w.GetUIState == u.g.ViewBinding ||
                  u.w.GetUIState == u.g.EditBinding) &&
                  i.createElement(_e, {
                    bReadOnlyView: u.w.GetUIState == u.g.ViewBinding,
                  }),
                u.w.GetUIState == u.g.List && i.createElement(be, null),
                u.w.GetUIState == u.g.AppSelect && i.createElement(ke, null),
                u.w.GetUIState == u.g.Debugger && i.createElement(Pe, null),
                u.w.GetUIState == u.g.None && i.createElement("div", null),
                i.createElement(
                  s.Z,
                  {
                    visible: p.c6.SteamVRUnavailable,
                    showCloseButton: !1,
                    onClose: () => {},
                    animation: "fade",
                    className: "ModeSettingsModal",
                    closeOnEsc: !1,
                    customStyles: { width: "60%", height: "60%" },
                  },
                  i.createElement(
                    "div",
                    { className: "FlexFullHeightColumnCentered" },
                    i.createElement(
                      "div",
                      { className: "Title Label" },
                      (0, d.Xx)("#BindingUI_SteamVRUnavailable")
                    )
                  )
                )
              )
            );
          }
        };
        Ne = (0, o.gn)([a.Pi], Ne);
        const Ae = document.getElementById("root");
        (0, d.CK)(
          ["bindingui"],
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamVRLanguage()
        )
          .then(() => xe.n.Init())
          .then(() => Q.S.Init())
          .then(() => L.I.Init())
          .then(() => Be.G3.Init(!1))
          .then(() => p.c6.Init())
          .then(() =>
            (function () {
              return (0, o.mG)(this, void 0, void 0, function* () {
                u.w.SetDesktopMode((0, c.Fc)("desktop").length > 0),
                  VRHTML &&
                    !u.w.DesktopMode &&
                    (document.body.parentElement.classList.add("VROverlay"),
                    VRHTML.VROverlay.SetWidthInMeters(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      3
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.Z9.NoDashboardTab,
                      !0
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.Z9.ShowTouchPadScrollWheel,
                      !0
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.Z9.SendVRSmoothScrollEvents,
                      !0
                    ),
                    VRHTML.VROverlay.SetInputMethod(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.qC.Mouse
                    ));
                let e = (0, c.Fc)("debugger");
                if (null != e && e.length > 0) return void u.w.ShowDebugger();
                let t = (0, c.Fc)("app");
                if (null != t && t.length > 0 && Q.S.GetApp(t)) {
                  p.c6.SetSelectedApp(t);
                  let e = (0, c.Fc)("controller");
                  if (null != e && e.length > 0) {
                    p.c6.SetSelectedController(e);
                    let t = (0, c.Fc)("action_set");
                    return (
                      null != t &&
                        t.length > 0 &&
                        p.c6.SetSelectedActionSet("/actions/" + t),
                      void ((0, c.Fc)("read_only").length > 0
                        ? u.w.ViewCurrentBinding()
                        : u.w.EditCurrentBinding())
                    );
                  }
                  u.w.ShowBindingList();
                } else u.w.ShowAppSelect();
              });
            })()
          )
          .then(() => u.w.Init())
          .then(() => {
            var e;
            (e = Ne), r.render(i.createElement(e, null), Ae);
          })
          .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
      },
      7968: (e, t, n) => {
        n.d(t, { A: () => o, X: () => l });
        var o,
          i = n(655),
          r = n(7294),
          a = n(7056),
          s = n(6321);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(o || (o = {}));
        class l extends r.Component {
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
              null === s.ZP || void 0 === s.ZP
                ? void 0
                : s.ZP.RegisterForBatteryStateChangedEvents(
                    this.OnBatteryStateChanged
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === s.ZP || void 0 === s.ZP
                  ? void 0
                  : s.ZP.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === s.ZP || void 0 === s.ZP
                  ? void 0
                  : s.ZP.RegisterForDeviceEvents(this.OnDeviceEvent)),
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
            if (!s.ZP) return;
            const t = s.ZP.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceProvidesBatteryStatus_Bool
              ),
              n = s.ZP.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex
              );
            let i = !1;
            if (t) {
              const t =
                null !==
                  (e = s.ZP.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    s.Uk.DeviceBatteryPercentage_Float
                  )) && void 0 !== e
                  ? e
                  : 0;
              (i = s.ZP.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceIsCharging_Bool
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
            let r = l.GetBatteryIcon(
                t,
                i,
                this.batteryLevelStable,
                o.HorizontalPips
              ),
              a = this.GetRoleIcon(n);
            (r == this.state.batteryIconPath && a == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: r, roleIconPath: a });
          }
          GetRoleIcon(e) {
            switch (e) {
              case s.Kg.TrackedControllerRole_RightHand:
                return "images/icons/controller_model_right.png";
              case s.Kg.TrackedControllerRole_LeftHand:
                return "images/icons/controller_model_left.png";
            }
            return null;
          }
          static GetBatteryIcon(e, t, n, i) {
            if (!e) return null;
            const r =
              i == o.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? n < 0.15
                ? r + "_charging_red.png"
                : r + "_charging.png"
              : 0 == n
              ? null
              : n < 0.15
              ? r + "_low.png"
              : n < 0.3
              ? r + "_battery_1.png"
              : n < 0.6
              ? r + "_battery_2.png"
              : n < 0.9
              ? r + "_battery_3.png"
              : r + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, n) {
            e == s.XX.Activated &&
              n == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return r.createElement(
              s.s_,
              {
                width: void 0,
                height: void 0,
                interactive: !1,
                rendermodel_component_device_index:
                  this.props.trackedDeviceIndex,
                rendermodel_component_name: "status",
                debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
              },
              r.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                r.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  r.createElement(
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
                    r.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    })
                  ),
                  r.createElement(
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
                    r.createElement("img", {
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
          (0, i.gn)([a.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, i.gn)([a.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, i.gn)([a.ak], l.prototype, "OnDeviceEvent", null);
      },
      7677: (e, t, n) => {
        n.d(t, { g: () => de, _: () => re });
        var o,
          i,
          r = n(655),
          a = n(6321),
          s = n(7056),
          l = n(2188),
          c = n(7294),
          d = n(9942),
          p = n(1818),
          h = n(1219),
          u = n(7264),
          m = n(197),
          g = n(3868),
          _ = n(4916),
          v = n(6882),
          S = n(6192),
          y = n(9015),
          b = n(3446),
          C = n(7062),
          f = n(7968),
          k = n(1307);
        function M(e) {
          switch (e) {
            case i.LeftHand:
              return "/user/hand/left";
            case i.RightHand:
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
        })(i || (i = {}));
        let I = (o = class extends c.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, a.Oq)(),
                sParent: M(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = a.Kf),
              (this.m_moveDeviceRole = a.Kg.TrackedControllerRole_Invalid);
          }
          componentDidMount() {
            this.setInitialTransformForLocation();
          }
          componentDidUpdate(e, t) {
            e.dockLocation != this.props.dockLocation &&
              this.setState(
                {
                  sParent: M(this.props.dockLocation),
                  xfTransform: (0, a.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation
              );
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case i.Dashboard:
              case i.LeftHand:
              case i.RightHand:
                return 0.25;
              case i.World:
                return 0.5;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case i.LeftHand:
                case i.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, o.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case i.World: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 1) < 0.1 &&
                    (t = Math.max(t / 2, o.sfOverlayScaleMin)),
                    (e.scale = { x: 2, y: 2, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
              }
              return;
            }
            let e = (0, a.Oq)();
            switch (
              ((e.rotation = (0, a.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case i.Dashboard:
              case i.LeftHand:
              case i.RightHand:
                this.setState({ xfTransform: e });
                break;
              case i.World:
                let t = 0;
                a.hz
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
          onOverlayScaleChanged(e) {
            this.setState({ fOverlayScale: e });
          }
          computeDestination() {
            if (!this.state.bIsMoving) return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.Kg.TrackedControllerRole_LeftHand
            ) != a.Kf && (t = VRHTML.GetPose("/user/hand/left", a.zq.Standing));
            let n = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.Kg.TrackedControllerRole_RightHand
            ) != a.Kf &&
              (n = VRHTML.GetPose("/user/hand/right", a.zq.Standing));
            let r = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                n && r.push({ pose: n, location: i.RightHand });
                break;
              case "/user/hand/right":
                t && r.push({ pose: t, location: i.LeftHand });
                break;
              case "/user/head":
                t && r.push({ pose: t, location: i.LeftHand }),
                  n && r.push({ pose: n, location: i.RightHand });
            }
            if (0 == r.length)
              return void setTimeout(this.computeDestination, o.sfMovePulseMS);
            let s = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform
            );
            r.forEach((e) => {
              let t = VRHTML.ChangeBasis(s, e.pose.xfDeviceToAbsoluteTracking);
              (0, a.LY)(t.translation) > o.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (k.LJ.Instance.triggerHaptic(k.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: i.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == i.World &&
                      this.state.destination == i.World)) &&
                  (k.LJ.Instance.triggerHaptic(k.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, o.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n"
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == a.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex
              );
            let e,
              t,
              n = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing);
            switch (this.props.dockLocation) {
              case i.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    a.Kg.TrackedControllerRole_LeftHand
                  ) == a.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", a.zq.Standing);
                break;
              case i.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    a.Kg.TrackedControllerRole_RightHand
                  ) == a.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", a.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, a.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: a.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case a.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case a.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let o = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              r = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: r,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == i.World,
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
              this.state.destination == i.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.Kg.TrackedControllerRole_LeftHand
                ) == a.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", a.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == i.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.Kg.TrackedControllerRole_RightHand
                ) == a.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", a.zq.Standing);
            }
            let n,
              o = {
                xfDeviceToAbsoluteTracking: (0, a.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: a.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case i.LeftHand:
                n = e;
                break;
              case i.RightHand:
                n = t;
                break;
              default:
                n = o;
            }
            let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing),
              s = VRHTML.MultiplyTransforms(
                r.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              l = VRHTML.ChangeBasis(s, n.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: M(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                l
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let n = { x: 0, y: 0 };
            try {
              n = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let r =
                (null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1) * this.state.fOverlayScale,
              s = (r * n.y) / n.x;
            if (!this.props.bVisible)
              return c.createElement(
                a.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                c.createElement(
                  a.s_,
                  {
                    overlay_key: this.props.sOverlayKey,
                    height: s,
                    width: void 0,
                    interactive: !0,
                    origin: a.Ic.BottomCenter,
                  },
                  c.createElement(a.sl, {
                    mountedId: (0, a.iN)(
                      m.GN,
                      this.props.sOverlayKey + ".cursor"
                    ),
                  })
                )
              );
            let l = s + o.sfOverlayTrayHeight,
              d = Math.max(r, 0.175),
              u = l / 2 - o.sfOverlayTrayHeight;
            return c.createElement(
              a.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              c.createElement(
                a.wx,
                {
                  translation: { y: u, z: -0.005 },
                  scale: { x: d, y: l, z: 0.008 },
                },
                c.createElement(
                  a.VW,
                  { color: { r: 0.016, g: 0.017, b: 0.02 } },
                  c.createElement(a.gQ, { solid: !0, source: "unit_cube" })
                )
              ),
              c.createElement(
                a.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: s,
                  width: void 0,
                  interactive: !0,
                  origin: a.Ic.BottomCenter,
                },
                c.createElement(a.sl, {
                  mountedId: (0, a.iN)(
                    m.GN,
                    this.props.sOverlayKey + ".cursor"
                  ),
                })
              ),
              c.createElement(
                a.s_,
                {
                  height: o.sfOverlayTrayHeight,
                  width: void 0,
                  interactive: !0,
                  origin: a.Ic.TopCenter,
                },
                c.createElement(
                  "div",
                  { className: "WindowTray" },
                  c.createElement(h.iR, {
                    additionalClassName: "WindowTraySlider",
                    min: o.sfOverlayScaleMin,
                    max: o.sfOverlayScaleMax,
                    value: this.state.fOverlayScale,
                    valueStyleVariant: h.px.OnHandle,
                    onChange: this.onOverlayScaleChanged,
                    detents: [0.25, 0.5, 1],
                    renderValue: (e) => (100 * e).toFixed(0) + "%",
                  }),
                  c.createElement(
                    p.z,
                    {
                      className: "WindowTrayButton",
                      key: "move",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                    },
                    c.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/icon_move.png",
                    })
                  ),
                  c.createElement(
                    p.z,
                    {
                      className: "WindowTrayButton",
                      key: "undock",
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                      title: "Return to Dashboard",
                      onClick: () => {
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          i.Dashboard
                        );
                      },
                    },
                    c.createElement("img", {
                      className: "Icon",
                      src: "/dashboard/images/icons/icon_return.png",
                    })
                  )
                )
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    a.wx,
                    {
                      parent_path:
                        this.state.destination == i.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    c.createElement(a.x1, {
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
        (I.sfMaxDockDist = 0.4),
          (I.sfMovePulseMS = 100),
          (I.sfOverlayTrayHeight = 0.025),
          (I.sfOverlayScaleMin = 0.1),
          (I.sfOverlayScaleMax = 2),
          (0, r.gn)([s.ZP], I.prototype, "onOverlayScaleChanged", null),
          (0, r.gn)([s.ZP], I.prototype, "computeDestination", null),
          (0, r.gn)([s.ZP], I.prototype, "startMove", null),
          (0, r.gn)([s.ZP], I.prototype, "endMove", null),
          (I = o = (0, r.gn)([C.Pi], I));
        var E,
          O,
          w = n(7679),
          R = n(9392);
        let T = (E = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = c.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(E.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var n, o;
            null === (n = this.m_refWindowScrollPanel.current) ||
              void 0 === n ||
              n.scrollTo({
                left:
                  null === (o = this.m_refWindowScrollPanel.current) ||
                  void 0 === o
                    ? void 0
                    : o.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, n, o;
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
              w.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              i &&
                c.createElement(
                  R.P,
                  {
                    scrollDirection: R.I.Horizontal,
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
                          return c.createElement(w.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, g.Xx)("#Desktop_X", e),
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
                      null === (o = this.state.desktopView) || void 0 === o
                        ? void 0
                        : o.state.mapWindowInfo.keys()
                    ).map((e) => {
                      var t, n, o;
                      return c.createElement(w.zN, {
                        additionalClassNames: "ViewButton",
                        iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        key: e,
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.state.sCurrentWindowOverlayKey) == e,
                        title:
                          null ===
                            (o = this.props.mapWindows.get(
                              null === (n = this.state.desktopView) ||
                                void 0 === n
                                ? void 0
                                : n.state.mapWindowInfo.get(e).sHwnd
                            )) || void 0 === o
                            ? void 0
                            : o.title,
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
                  c.createElement(w.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, g.Xx)("#AddView"),
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  })
                ),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(w.zN, {
                  iconUrl: this.props.bDarkMode
                    ? "/dashboard/images/icons/svr_nightmode.svg"
                    : "/dashboard/images/icons/svr_lightmode.svg",
                  title: (0, g.Xx)("#Settings_ToggleDarkMode"),
                  onClick: this.props.onToggleDarkMode,
                })
              )
            );
          }
        });
        (T.k_sMailboxName = "systemui_desktoptray"),
          (T = E = (0, r.gn)([C.Pi], T));
        let D = (O = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.state = {
                bIsUsingSteamDesktop: !1,
                bIsReady: !1,
                desktopIndices: [],
                mapWindowInfo: new Map(),
                sCurrentWindowOverlayKey: "",
              }),
              this.m_mailbox.Init(O.k_sMailboxName).then(() => {});
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
                  (e = b.G3.settings.get("/settings/dashboard/desktopIndex")) &&
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
              b.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e
              );
          }
          onDesktopChange(e) {
            b.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
              n = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));

            )
              n.push(t), t++;
            (null !==
              (e = b.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > n.length &&
              b.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
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
                c.createElement(w.zN, {
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
                (e = b.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? m.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? c.createElement(a.sl, {
                    mountedId: (0, a.iN)(m.GN, "valve.steam.desktop"),
                  })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? c.createElement(
                      w.lL,
                      { visible: !0 },
                      c.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        c.createElement(
                          "h2",
                          null,
                          (0, g.Xx)("#NoDesktopFound")
                        )
                      )
                    )
                  : -1 == this.currentDesktopIndex
                  ? c.createElement(
                      c.Fragment,
                      null,
                      c.createElement(
                        a.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height:
                            this.props.fActiveOverlayScale *
                            O.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        c.createElement(a.at, {
                          id: m.t3,
                          location: a.Ic.TopCenter,
                        }),
                        c.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            m.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor"
                          ),
                        }),
                        c.createElement(a.at, {
                          id: m.Gl,
                          location: a.Ic.BottomCenter,
                        })
                      )
                    )
                  : c.createElement(
                      c.Fragment,
                      null,
                      c.createElement(
                        a.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height:
                            this.props.fActiveOverlayScale *
                            O.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        c.createElement(a.at, {
                          id: m.t3,
                          location: a.Ic.TopCenter,
                        }),
                        c.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            m.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor"
                          ),
                        }),
                        c.createElement(a.at, {
                          id: m.Gl,
                          location: a.Ic.BottomCenter,
                        })
                      )
                    )
                : c.createElement(
                    w.lL,
                    { visible: !0 },
                    c.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      c.createElement(
                        "h2",
                        null,
                        (0, g.Xx)("#DesktopViewsUpdating")
                      )
                    )
                  )
              : null;
          }
        });
        (D.k_sMailboxName = "systemui_desktopview"),
          (D.k_nDesktopPanelBaseHeight = 2),
          (0, r.gn)([l.Fl], D.prototype, "desktopCount", null),
          (0, r.gn)([l.Fl], D.prototype, "sCurrentOverlayKey", null),
          (0, r.gn)([l.Fl], D.prototype, "currentDesktopIndex", null),
          (0, r.gn)([l.Fl], D.prototype, "currentWindowHwnd", null),
          (0, r.gn)([s.ZP], D.prototype, "onDesktopScaleChange", null),
          (0, r.gn)([s.ZP], D.prototype, "onDesktopChange", null),
          (0, r.gn)([s.ZP], D.prototype, "onDesktopViewUpdating", null),
          (0, r.gn)([s.ZP], D.prototype, "onDesktopViewReady", null),
          (0, r.gn)([s.ZP], D.prototype, "onWindowViewChange", null),
          (0, r.gn)([s.ZP], D.prototype, "ShowDesktop", null),
          (D = O = (0, r.gn)([C.Pi], D));
        var P,
          x = n(505),
          B = n(3371),
          N = n(1058);
        let A = (P = class extends c.Component {
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
                (e) => !P.s_failedImages.includes(e)
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
              P.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
                  className: (0, N.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                c.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title
                ),
                this.props.children && this.props.children
              )
            );
          }
        });
        (A.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (A.s_failedImages = []),
          (0, r.gn)([s.ak], A.prototype, "loadNextImage", null),
          (0, r.gn)([s.ak], A.prototype, "onLoad", null),
          (0, r.gn)([s.ak], A.prototype, "onError", null),
          (A = P = (0, r.gn)([C.Pi], A));
        var L,
          V = n(8052);
        class H extends c.Component {
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
            const e = S.H.Instance.SceneAppKey;
            B.f.OpenDeepLink(B.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = S.H.Instance.SceneAppKey;
            x.Ux.OpenDeepLink(x.Yw.Name, e);
          }
          render() {
            var e;
            const t = S.H.Instance.SceneAppKey,
              n = S.H.Instance.SceneAppName,
              o = S.H.Instance.SceneApplicationState,
              i = S.H.Instance.SceneAppIsHome,
              r = b.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = b.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              l = b.G3.apps && b.G3.apps.find((e) => e.key == t);
            let d = !1;
            switch (o) {
              case a.xY.Quitting:
              case a.xY.Starting:
              case a.xY.Waiting:
                d = !0;
            }
            const h = ((e) => {
              if (null == e) return "";
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            })(l);
            return c.createElement(
              w.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
              },
              c.createElement(
                "div",
                { className: "ArtworkColumn" },
                c.createElement(A, { appkey: t, title: n, imageUrl: h })
              ),
              c.createElement(
                "div",
                { className: "InfoColumn" },
                c.createElement("div", { className: "NowPlayingAppTitle" }, n),
                c.createElement(
                  p.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  i
                    ? (0, g.Xx)("#Return_To_Home")
                    : (0, g.Xx)("#Return_To_Game")
                ),
                s &&
                  c.createElement(
                    V.ls,
                    {
                      icon: V.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, g.Xx)("#Controller_Bindings")
                  ),
                s &&
                  c.createElement(
                    V.ls,
                    { icon: V.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, g.Xx)("#App_Video_Settings")
                  ),
                !i &&
                  r &&
                  c.createElement(
                    p.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, g.Xx)("#Exit_Game")
                  )
              )
            );
          }
        }
        (0, r.gn)([s.ak], H.prototype, "onExitApp", null),
          (0, r.gn)([s.ak], H.prototype, "onReturnToGame", null),
          (0, r.gn)(
            [s.ak],
            H.prototype,
            "onOpenAppControllerBindingSettings",
            null
          ),
          (0, r.gn)([s.ak], H.prototype, "onOpenAppVideoSettings", null),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(L || (L = {}));
        const F = (e) =>
          c.createElement(
            "div",
            {
              className: (0, N.LJ)("ButtonContainer", L[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            c.createElement(
              p.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == L.Left
                ? c.createElement(c.Fragment, null, "‹")
                : c.createElement(c.Fragment, null, "›")
            )
          );
        class U extends c.Component {
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
            const n = this.m_refScrollPanel.current;
            if (!n) return;
            if (n.isThrown)
              return void n.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const o = n.children;
            if (!o || 0 == o.length) return;
            const i =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              r = o[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : n.scrollLeft,
              s = r.getBoundingClientRect().left + n.scrollLeft,
              l = r.clientWidth,
              c = n.clientWidth,
              d = Math.floor(c / l) - 1,
              p = Math.round((a - s + i + 1) / l) + d * e - 0.4999,
              h = p > 0 ? p * l + s - i : 0;
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
                className: (0, N.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames
                ),
              },
              c.createElement(
                R.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: R.I.Horizontal,
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
                    c.createElement(F, {
                      side: L.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    c.createElement(F, {
                      side: L.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    })
                )
            );
          }
        }
        (0, r.gn)([s.ZP], U.prototype, "onAnimationFrame", null),
          (0, r.gn)([s.ZP], U.prototype, "onScroll", null),
          (0, r.gn)([s.ZP], U.prototype, "onLeftButtonClick", null),
          (0, r.gn)([s.ZP], U.prototype, "onRightButtonClick", null);
        let G = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new N.cB()),
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
                  className: (0, N.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      b.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents]
                  ),
                },
                c.createElement(
                  p.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  c.createElement(A, Object.assign({}, e), this.props.children)
                )
              )
            );
          }
        };
        (0, r.gn)([s.ZP], G.prototype, "buttonMouseEnter", null),
          (0, r.gn)([s.ZP], G.prototype, "buttonMouseLeave", null),
          (0, r.gn)([s.ZP], G.prototype, "onParentScrollStop", null),
          (G = (0, r.gn)([C.Pi], G));
        const W = () =>
            c.createElement("div", { className: "AppButton Placeholder" }),
          z = (e) => {
            var t;
            const n = !!e.loading,
              o = null !== (t = e.apps) && void 0 !== t ? t : [];
            let i = "AppCarousel";
            return (
              e.className && (i += " " + e.className),
              (i += " NoAnimations"),
              c.createElement(
                U,
                { additionalClassNames: i, paginationAlignmentOffset: -20 },
                n &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(W, null),
                    c.createElement(W, null),
                    c.createElement(W, null),
                    c.createElement(W, null)
                  ),
                !n &&
                  o.map((e) =>
                    c.createElement(G, Object.assign({ key: e.appkey }, e))
                  )
              )
            );
          };
        var X = n(9669),
          K = n.n(X);
        function q() {
          return K()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
            )
            .then((e) => e.data);
        }
        const Z = () =>
          c.createElement(
            p.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                y.y.Instance.openBigPictureStore(null, y.b.QuickStore),
            },
            c.createElement("span", null, (0, g.Xx)("#BrowseAll")),
            c.createElement("img", {
              className: "Icon BlackToWhite",
              src: "/dashboard/images/icons/svr_store.svg",
            })
          );
        var j;
        !(function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.Singleplayer = 1)] = "Singleplayer"),
            (e[(e.Multiplayer = 2)] = "Multiplayer");
        })(j || (j = {}));
        let Q = class extends c.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            q().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, n) {
            _.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              j[t].toLowerCase() + ":" + n,
              `steam.app.${e}`
            ),
              y.y.Instance.openBigPictureStore(e, y.b.QuickStore);
          }
          makeAppButtonList() {
            let e = [];
            switch (this.props.section) {
              case j.Free:
                e = this.state.storeData.apps_free;
                break;
              case j.Singleplayer:
                e = this.state.storeData.apps_singleplayer;
                break;
              case j.Multiplayer:
                e = this.state.storeData.apps_multiplayer;
            }
            return e.map((e, t) => {
              const n = `steam.app.${e.appid}`;
              return {
                key: n,
                appkey: n,
                title: e.name,
                imageUrl: e.logo,
                onClick: () =>
                  this.openSteamApp(e.appid, this.props.section, t),
              };
            });
          }
          render() {
            return this.state.storeData
              ? c.createElement(z, { apps: this.makeAppButtonList() })
              : c.createElement(z, { loading: !0 });
          }
        };
        Q = (0, r.gn)([C.Pi], Q);
        class Y extends c.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return c.createElement(
              w.lL,
              {
                visible: this.props.visible,
                additionalClassNames: "QuickStore",
              },
              c.createElement(Z, null),
              c.createElement(
                "h2",
                null,
                (0, g.Xx)("#StoreSection_TopSingleplayer")
              ),
              c.createElement(Q, { section: j.Singleplayer }),
              c.createElement(
                "h2",
                null,
                (0, g.Xx)("#StoreSection_TopMultiplayer")
              ),
              c.createElement(Q, { section: j.Multiplayer }),
              c.createElement("h2", null, (0, g.Xx)("#StoreSection_TopFree")),
              c.createElement(Q, { section: j.Free })
            );
          }
        }
        var J;
        const $ = () =>
            c.createElement(
              p.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  y.y.Instance.openBigPictureLibrary(null, y.b.QuickLaunch),
              },
              c.createElement("span", null, (0, g.Xx)("#BrowseAll")),
              c.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              })
            ),
          ee = () =>
            c.createElement(
              p.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(m.wB),
              },
              c.createElement("span", null, (0, g.Xx)("#WelcomeBrowseStore"))
            ),
          te = () =>
            c.createElement(
              p.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  y.y.Instance.openBigPictureLibrary(null, y.b.QuickLaunch),
              },
              c.createElement("span", null, (0, g.Xx)("#WelcomeInstall"))
            );
        class ne extends c.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            q().then((e) => this.setState({ storeData: e }));
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
                let o = t.shift();
                n.add(o.appid),
                  e.push(
                    c.createElement(
                      p.z,
                      {
                        key: `appid_${o.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          y.y.Instance.openBigPictureStore(
                            o.appid,
                            y.b.QuickLaunch
                          ),
                      },
                      c.createElement("img", { src: o.logo })
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
                  (0, g.Xx)("#WelcomeHeader")
                ),
                c.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, g.Xx)("#WelcomeMessage")
                ),
                c.createElement(ee, null),
                c.createElement(te, null)
              )
            );
          }
        }
        let oe = (J = class extends c.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          launchApplication(e, t, n) {
            var o, i;
            _.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + n,
              e.key
            ),
              null === (i = (o = this.props).onGameLaunched) ||
                void 0 === i ||
                i.call(o, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != b.G3.apps)
              for (let t of b.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  J.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let n = t.library_priority - e.library_priority;
              return 0 == n && (n = t.last_launch - e.last_launch), n;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, n) => {
              let o = n;
              const i = n < J.TOP_ROW_LENGTH;
              return (
                i || (o -= J.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, i, o),
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
                b.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              o =
                0 == t.length ||
                b.G3.settings.get("/settings/dashboard/hideBigPictureLibrary");
            if (n) e = c.createElement(ne, null);
            else {
              let n = t.slice(0, J.TOP_ROW_LENGTH),
                i = t.slice(J.TOP_ROW_LENGTH);
              e = c.createElement(
                c.Fragment,
                null,
                !o && c.createElement($, null),
                c.createElement("h2", null, (0, g.Xx)("#RecentlyPlayed")),
                c.createElement(z, { className: "TopRow", apps: n }),
                c.createElement(z, { className: "BottomRow", apps: i })
              );
            }
            return c.createElement(
              w.lL,
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
        (oe.TOP_ROW_LENGTH = 4),
          (oe.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            m.W4,
            m.jW,
          ])),
          (oe = J = (0, r.gn)([C.Pi], oe));
        var ie,
          re,
          ae,
          se = n(79);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
        })(re || (re = {}));
        class le extends c.Component {
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
        function ce(e) {
          var t;
          return (
            null !== (t = null == e ? void 0 : e.startsWith(m.MI)) &&
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
        })(ae || (ae = {}));
        let de = (ie = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new a.Nv()),
              (this.m_timeoutPopoverMenuHide = 0),
              (this.m_refPopoverMenu = c.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = c.createRef()),
              (this.m_refDesktopTray = c.createRef()),
              (this.m_refOverlayTransform = c.createRef()),
              (this.m_refVolumeTray = c.createRef()),
              (this.m_sOverlayToSwitchToOnLoad = m.O5),
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
                eShowPopoverMenu: ae.None,
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
              (window.setDashboardScale = (e) => (ie.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (ie.s_dashboardUserDistance = e)),
              b.G3.Init(!1),
              a.hz.getInstance(),
              this.m_mailbox.Init(ie.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  ie.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression
                ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sOverlayKeyboardClosedMessage,
                    this.onKeyboardClosed
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible
                  ),
                  this.m_mailbox.RegisterHandler(
                    ie.k_sLaserMouseSuppressionUpdate,
                    this.onLaserMouseSuppressionUpdate
                  ),
                  this.m_mailbox.RegisterHandler(
                    "show_dashboard_requested",
                    this.onShowDashboardRequested
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested
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
                e == a.a0.AppLaunch_Unknown ||
                e == a.a0.AppLaunch_Steam ||
                e == a.a0.Unknown,
              n = b.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
              ),
              o = b.G3.settings.get("/settings/steamvr/enableHomeApp"),
              i = b.G3.settings.get(m.y3);
            ((t || (!n && o)) && !i) ||
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != i ? i : ""),
                500
              ),
              (this.m_appStateChangedAutorunDisposer = (0, l.EH)(() => {
                const e = S.H.Instance.SceneApplicationState != a.xY.None;
                this.isOverlayActive(m.PF) && !e && this.switchToOverlay(m.O5);
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                }
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            var n;
            const o = this.getActiveOverlaySummonKey();
            let i = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (u.G.Instance.playSound(
                  this.state.bShown ? u.y.DashboardOpen : u.y.DashboardClose
                ),
                (i = !0)),
              this.state.bShown &&
                !i &&
                t.sActiveOverlayID != this.state.sActiveOverlayID)
            )
              switch (o) {
                case m.A4:
                  u.G.Instance.playSound(u.y.ThemeSettings);
                  break;
                case m.gB:
                  u.G.Instance.playSound(u.y.ThemeDesktop);
                  break;
                case m.O5:
                  u.G.Instance.playSound(u.y.ThemeLibrary);
                  break;
                case m.wB:
                  u.G.Instance.playSound(u.y.ThemeStore);
                  break;
                case m.PF:
                  u.G.Instance.playSound(u.y.ThemeNowPlaying);
              }
            const r = this.getActiveOverlayKey(),
              s = r ? this.state.mapOverlayState.get(r) : null,
              l = r ? t.mapOverlayState.get(r) : null,
              c = s && l && s.fScale != l.fScale;
            if (
              ((t.sActiveOverlayID != this.state.sActiveOverlayID || c) &&
                s &&
                this.isDesktopOverlayActive() &&
                (null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopScaleChange(s.fScale)),
              t.sActiveOverlayID != this.state.sActiveOverlayID &&
                (this.setState({ bKeyboardVisible: !1 }),
                this.isOverlayActive(m.Y8)))
            )
              switch (y.y.Instance.lastBigPictureEntryPoint) {
                case y.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case y.b.QuickStore:
                  this.m_bQuickStoreShouldReturnToBigPicture = !0;
              }
            if (t.bKeyboardVisible != this.state.bKeyboardVisible)
              if (this.state.bKeyboardVisible) {
                let e = this.getActiveOverlayKey();
                VRHTML.VROverlay.ShowKeyboardForOverlay(
                  e,
                  a.Pw.Normal,
                  a.l0.SingleLine,
                  a.vS.Minimal,
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
              let o = "/settings/dashboard/desktopScale" + e.split(".")[2];
              n = null !== (t = b.G3.settings.get(o)) && void 0 !== t ? t : 1;
            }
            let o = {
              dockLocation: i.Dashboard,
              refOverlayWidget: c.createRef(),
              xfInitial: null,
              fScale: n,
            };
            this.state.mapOverlayState.set(e, o);
          }
          updateSiblingReferences() {
            var e;
            null === (e = this.m_refDesktopTray.current) ||
              void 0 === e ||
              e.setSiblingReferences(this.m_refDesktopView.current);
          }
          componentWillUnmount() {
            var e;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, a.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
                allow_floorfar: !0,
                allow_floornear: !0,
              }),
              this.m_roomViewChangedEventHandle &&
                (this.m_roomViewChangedEventHandle.unregister(),
                (this.m_roomViewChangedEventHandle = null)),
              null === (e = this.m_linkStreamActiveEventHandle) ||
                void 0 === e ||
                e.unregister(),
              (this.m_linkStreamActiveEventHandle = null);
          }
          static getDashboardDistance() {
            if (ie.s_dashboardUserDistance) return ie.s_dashboardUserDistance;
            const e = b.G3.settings.get(m.o1);
            return e == re.Near
              ? 0.925
              : e == re.Screenshot_Only
              ? 5
              : e == re.Middle
              ? 1.05
              : 1.2;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = b.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2"
                  )) && void 0 !== e
                  ? e
                  : 0),
              n = b.G3.settings.get(m.o1);
            return n == re.Screenshot_Only
              ? -0.57
              : n == re.Near
              ? -0.07 + t
              : n == re.Middle
              ? -0.08 + t
              : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (ie.s_dashboardUserScale) return ie.s_dashboardUserScale;
            let t = 1;
            const n = b.G3.settings.get(m.o1),
              o = n == re.Screenshot_Only;
            return (
              (t = o ? 2 : n == re.Near ? 0.36 : n == re.Middle ? 0.41 : 0.47),
              o ||
                (t *=
                  null !==
                    (e =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetFloatProperty(
                            a.wU,
                            a.Uk.DashboardScale_Float
                          )) && void 0 !== e
                    ? e
                    : 1),
              t
            );
          }
          onSetDashboardFadeSuppression(e) {
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
          onSetDashboardForceBoundsVisible(e) {
            this.setState((t, n) => {
              let o = Object.assign({}, t.setForcingBoundsVisible);
              return (
                (o[e.for_overlay_key] = new Set(o[e.for_overlay_key])),
                e.force_bounds_visible
                  ? o[e.for_overlay_key].add(e.for_id)
                  : o[e.for_overlay_key].delete(e.for_id),
                { setForcingBoundsVisible: o }
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
                this.switchToOverlay(m.O5),
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
            var t, n;
            this.switchToOverlay(m.gB),
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
                bWindowViewEnabled:
                  null === (t = b.G3.settings.get(m.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          onDockOverlay(e, t, n) {
            var o, r;
            if (
              ((t != i.LeftHand && t != i.RightHand) ||
                this.state.mapOverlayState.forEach((e, n) => {
                  e.dockLocation == t && (e.dockLocation = i.Dashboard);
                }),
              (this.state.mapOverlayState.get(e).dockLocation = t),
              (this.state.mapOverlayState.get(e).xfInitial = n),
              t === i.Dashboard)
            )
              if (e.startsWith(m.r4)) {
                const t = Number.parseInt(e.substring(m.r4.length + 1));
                null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t);
              } else
                e.startsWith(m.Vq) &&
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
              o = n ? n.fScale : 1;
            return c.createElement(a.sl, {
              mountedId: e.mountable_id,
              fDashboardScale: o,
            });
          }
          computeFilteredOverlayTabs() {
            if (this.isScreenshotMode) return [];
            let e = [];
            for (let t in this.m_mapExternalOverlays) {
              const n = this.m_mapExternalOverlays[t];
              (void 0 === n.icon_overlay_key && null == n.icon_uri) ||
                (n.summon_overlay_key &&
                  n.summon_overlay_key != m.A4 &&
                  n.summon_overlay_key != m.Y8 &&
                  n.summon_overlay_key != m.Xl &&
                  (n.summon_overlay_key.startsWith(m.r4) ||
                    n.summon_overlay_key.startsWith(m.Vq) ||
                    n.summon_overlay_key.startsWith(m.MZ) ||
                    ce(n.summon_overlay_key) ||
                    e.push(n)));
            }
            return (
              (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e
            );
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let n = this.m_mapExternalOverlays[t];
              if (n.summon_overlay_key == e) return n;
            }
            return null;
          }
          switchToOverlay(e, t) {
            var n, o;
            switch (e) {
              case m.Y8:
                y.y.Instance.latchBigPictureEntryPoint();
                break;
              case m.O5:
                this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                break;
              case m.wB:
                this.m_bQuickStoreShouldReturnToBigPicture = !1;
                break;
              case m.Us:
                let t = {
                    type: "show_app_binding",
                    app_key:
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRApplications.GetSceneApplicationKey(),
                  },
                  n = "bindingui/" + a.qA[(0, a.Op)()];
                this.m_mailbox.SendMessage(n, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = m.RM);
            }
            if (e.startsWith(m.r4)) {
              const t = Number.parseInt(e.substring(m.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t)),
                (e = m.gB);
            }
            let i = this.findDashboardTab(e);
            return i
              ? (this.computeFilteredOverlayTabs().includes(i) &&
                  b.G3.SetSettingsValue(
                    m.nf,
                    null !== (o = i.summon_overlay_key) && void 0 !== o ? o : ""
                  ),
                this.setState({ sActiveOverlayID: i.mountable_id }),
                _.e.instance.RecordUIEvent(
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
            return t == m.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == m.f8 &&
              this.switchToOverlay(m.O5);
          }
          onShowDashboardRequested(e) {
            var t;
            b.G3.settings.get("/settings/dashboard/enableDashboard") &&
              (this.show(
                null !== (t = e.reason) && void 0 !== t ? t : "unknown"
              ),
              e.overlay_key && this.switchToOverlay(e.overlay_key),
              this.setDashboardVisibility(
                !0,
                e.tracked_device_index,
                e.reason
              ));
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlay(m.f8)
              : (this.hideMessageOverlay(),
                this.m_mailbox.SendMessage("keyboard", {
                  type: "hide_keyboard",
                }),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, null, e.reason));
          }
          setDashboardVisibility(e, t, n) {
            let o = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: n,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o);
          }
          show(e) {
            if (this.isShown()) return;
            _.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = S.H.Instance.SceneAppKey,
              n = S.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              this.switchToOverlay(n ? m.O5 : m.PF)),
              this.setState({ bShown: !0 });
            let o = { type: ie.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
              (0, a.qI)();
          }
          hide(e) {
            this.isShown() &&
              (this.setState({ bShown: !1, eShowPopoverMenu: ae.None }),
              _.e.instance.EndDashboardSession(e));
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
            y.y.Instance.lastBigPictureEntryPoint == y.b.QuickLaunch &&
            !this.isOverlayActive(m.Y8)
              ? y.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlay(m.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            y.y.Instance.lastBigPictureEntryPoint == y.b.QuickStore &&
            !this.isOverlayActive(m.Y8)
              ? y.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlay(m.wB);
          }
          onRecenterClick() {
            if (this.state.bLinkStreamActive)
              if (VRHTML.BIsLinkClient()) {
                let e = {
                  type: "instant_room_setup",
                  returnAddress: this.m_mailbox.name,
                };
                this.m_mailbox.SendMessage("driver_hmd", e);
              } else console.log("onRecenterClick not handles on server");
            else
              this.m_mailbox.SendMessage(se.BB, {
                type: se.KU,
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
              t = b.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              n = b.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let o = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (o = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                a.Uk.DeviceCanPowerOff_Bool
              ));
            const i = S.H.Instance.SceneAppName,
              r = S.H.Instance.SceneAppIsHome;
            let s, l;
            (s = r
              ? (0, g.Xx)("#Exit_SteamVR_Home")
              : i
              ? (0, g.Xx)("#PowerMenuQuitSceneApp", i)
              : (0, g.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (l = r
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg");
            const d = this.findDashboardTab(m.Y8),
              p = this.findDashboardTab(m.T2),
              h = d && p;
            return this.renderPopoverMenu(
              c.createElement(
                c.Fragment,
                null,
                p &&
                  c.createElement(w.dy, {
                    label:
                      (0, g.Xx)("#PowerMenuSteamOverlay") +
                      (h ? " (GamepadUI)" : ""),
                    lineBelow: !h,
                    onClick: () => {
                      this.switchToOverlay(m.T2), this.showPopoverMenu(ae.None);
                    },
                  }),
                d &&
                  c.createElement(w.dy, {
                    label:
                      (0, g.Xx)("#PowerMenuSteamOverlay") +
                      (h ? " (Tenfoot)" : ""),
                    lineBelow: !0,
                    onClick: () => {
                      this.switchToOverlay(m.Y8), this.showPopoverMenu(ae.None);
                    },
                  }),
                o &&
                  c.createElement(w.dy, {
                    label: (0, g.Xx)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopoverMenu(ae.None);
                    },
                  }),
                t &&
                  e &&
                  c.createElement(w.dy, {
                    label: s,
                    imageUrl: l,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        this.showPopoverMenu(ae.None);
                    },
                  }),
                c.createElement(w.dy, {
                  label: (0, g.Xx)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                n &&
                  c.createElement(w.dy, {
                    label: (0, g.Xx)("#PowerMenuShutdown"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.ShutdownSystem(),
                  })
              )
            );
          }
          startPopoverMenuTimeout(e) {
            this.m_timeoutPopoverMenuHide = window.setTimeout(() => {
              this.setState({ eShowPopoverMenu: ae.None });
            }, e);
          }
          clearPopoverMenuTimeout() {
            this.m_timeoutPopoverMenuHide &&
              (clearTimeout(this.m_timeoutPopoverMenuHide),
              (this.m_timeoutPopoverMenuHide = 0));
          }
          showPopoverMenu(e) {
            this.setState({ eShowPopoverMenu: e }),
              this.clearPopoverMenuTimeout();
          }
          renderPopoverMenu(e) {
            return c.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popoverMenuMouseLeave,
                onMouseEnter: this.clearPopoverMenuTimeout,
                ref: this.m_refPopoverMenu,
              },
              c.createElement(p.q, { className: "PowerMenuPanel" }, e)
            );
          }
          popoverMenuMouseLeave(e) {
            0 == e.buttons
              ? this.startPopoverMenuTimeout(100)
              : window.document.addEventListener(
                  "mouseup",
                  this.popoverMenuMouseUp
                );
          }
          popoverMenuMouseUp(e) {
            window.document.removeEventListener(
              "mouseup",
              this.popoverMenuMouseUp
            ),
              this.m_refPopoverMenu.current &&
                !(function (e, t, n) {
                  let o = n.getBoundingClientRect();
                  return (
                    e >= o.left && e <= o.right && t >= o.top && t <= o.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, n, o;
            let i = this.getActiveOverlay();
            if (!i) return null;
            if (
              (i.summon_overlay_key == m.Y8 &&
                (y.y.Instance.lastBigPictureEntryPoint == y.b.QuickLaunch
                  ? (i = this.findDashboardTab(m.O5))
                  : y.y.Instance.lastBigPictureEntryPoint == y.b.QuickStore &&
                    (i = this.findDashboardTab(m.wB))),
              i.summon_overlay_key == m.gB)
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
                return c.createElement(w.Rk, {
                  name:
                    null === (n = this.state.mapWindows.get(e)) || void 0 === n
                      ? void 0
                      : n.title,
                  iconUrl: this.getDashboardIconUri(i),
                });
              }
              return c.createElement(w.Rk, {
                name:
                  "Desktop " +
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(i),
              });
            }
            return i.summon_overlay_key == m.RM
              ? c.createElement(w.Rk, {
                  name: (0, g.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : c.createElement(w.Rk, {
                  name: i.tab_name,
                  iconUrl: this.getDashboardIconUri(i),
                });
          }
          get isDarkMode() {
            return (
              (this.state.bDesktopDarkMode && this.isOverlayActive(m.gB)) ||
              this.state.bTheaterMode
            );
          }
          get isScreenshotMode() {
            return b.G3.settings.get(m.o1) == re.Screenshot_Only;
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
            let n = [];
            const o =
              null !== (e = b.G3.settings.get(m.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, a.M9)((0, a.eQ)(e[3], e[0])),
                i = (0, a.M9)((0, a.eQ)(e[1], e[0])),
                r = (0, a.dq)(t, i),
                s = (0, a.Pd)((0, a.tS)(t, i, r)),
                l = (0, a.LY)((0, a.eQ)(e[0], e[3]));
              if (l < 0.4) continue;
              let d = Math.max(1, Math.floor(l));
              for (let t = 0; t < d; t++) {
                let i = (t + 1) / (d + 1),
                  r = (0, a.Oq)();
                (r.rotation = s),
                  (r.translation = (0, a.q9)(i, e[0], e[3])),
                  (r.scale = { x: 0.005, y: 0.005, z: o });
                let l = c.createElement(
                  a.wx,
                  { transform: r },
                  c.createElement(
                    a.Dd,
                    { value: 0.25 },
                    c.createElement(
                      a.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      c.createElement(a.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: a.xj.Backface,
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
            var e, t;
            const n =
                null !==
                  (e = b.G3.settings.get(
                    "/settings/dashboard/theaterModeBrightness"
                  )) && void 0 !== e
                  ? e
                  : 1,
              o =
                null !==
                  (t = b.G3.settings.get(
                    "/settings/dashboard/theaterModeReflection"
                  )) && void 0 !== t
                  ? t
                  : 1;
            if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == m.A4,
                t = b.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
                ),
                i = !S.H.Instance.SceneAppIsHome || !t;
              if (this.isScreenshotMode)
                (0, a.OK)({
                  color_mult: 0,
                  reflection_mult: 0,
                  roomview_mult: [1, 1, 1],
                  allow_skydome: !0,
                  allow_floorfar: !0,
                  allow_floornear: !0,
                });
              else if (i && !e)
                if (this.isTheaterMode) {
                  const e = b.G3.settings.get(
                    "/settings/dashboard/theaterPosition"
                  );
                  (0, a.OK)({
                    color_mult: Math.pow(n, 2.2),
                    reflection_mult: Math.pow(o, 2.2),
                    roomview_mult: [0.12, 0.12, 0.6],
                    allow_skydome: !1,
                    allow_floorfar: !1,
                    allow_floornear: e != re.Far,
                  });
                } else
                  this.isDarkMode
                    ? (0, a.OK)({
                        color_mult: 0.1,
                        reflection_mult: 1,
                        roomview_mult: [1, 1, 1],
                        allow_skydome: !0,
                        allow_floorfar: !0,
                        allow_floornear: !0,
                      })
                    : S.H.Instance.SceneApplicationState !== a.xY.None
                    ? (0, a.OK)({
                        color_mult: 0.15,
                        reflection_mult: 1,
                        roomview_mult: [1, 1, 1],
                        allow_skydome: !0,
                        allow_floorfar: !0,
                        allow_floornear: !0,
                      })
                    : (0, a.OK)({
                        color_mult: 1,
                        reflection_mult: 1,
                        roomview_mult: [1, 1, 1],
                        allow_skydome: !0,
                        allow_floorfar: !0,
                        allow_floornear: !0,
                      });
              else
                (0, a.OK)({
                  color_mult: 1,
                  reflection_mult: 1,
                  roomview_mult: [1, 1, 1],
                  allow_skydome: !0,
                  allow_floorfar: !0,
                  allow_floornear: !0,
                });
            } else
              (0, a.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
                allow_floorfar: !0,
                allow_floornear: !0,
              });
            const i = this.getActiveOverlaySummonKey(),
              r = this.state.bShown && this.state.setForcingBoundsVisible[i],
              s = r && r.size > 0;
            let l = [];
            return (
              s && (l = this.getCollisionBoundsFadeVisualizationElements()),
              c.createElement(
                "div",
                { className: "DashboardMain" },
                s && c.createElement(le, null),
                s && c.createElement("span", null, l),
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
                (this.state.mapOverlayState.get(e).dockLocation == i.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    i.RightHand);
            return ce(this.getActiveOverlaySummonKey()) || t
              ? m.t3
              : this.state.sActiveOverlayID + "_TopCenter";
          }
          get controlBarAnchorID() {
            let e = this.getActiveOverlayKey(),
              t =
                this.state.mapOverlayState.has(e) &&
                (this.state.mapOverlayState.get(e).dockLocation == i.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    i.RightHand);
            return ce(this.getActiveOverlaySummonKey()) || t
              ? m.Gl
              : this.state.sActiveOverlayID + "_BottomCenter";
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              n = w.IO.Center;
            return c.createElement(w.B8, {
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
              (this.isOverlayActive(m.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith("system.window"))) &&
              (this.state.eShowPopoverMenu == ae.None ||
                this.state.eShowPopoverMenu == ae.Windows)
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(m.gB) ||
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
                    a.Uk.PeerButtonInfo_String
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
            var n, o, i, r, s, l, d, h;
            const u = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              _ = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              C = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
              f = this.isDarkMode ? 0.02 : 0.05,
              k = ie.k_nControlBarWidthMeters,
              M =
                null ===
                  (n = b.G3.settings.get(
                    "/settings/dashboard/showPowerOptions"
                  )) ||
                void 0 === n ||
                n,
              I =
                null ===
                  (o = b.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === o ||
                o,
              E =
                null ===
                  (i = b.G3.settings.get(
                    "/settings/dashboard/showQuickStore"
                  )) ||
                void 0 === i ||
                i,
              O = !(
                null !==
                  (r = b.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== r &&
                r
              ),
              R = this.getPeerButtonInfo(),
              D = VRHTML.BIsLinkServer(),
              P = S.H.Instance.SceneApplicationState,
              x = S.H.Instance.SceneAppIsHome,
              B =
                null ===
                  (s = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === s ||
                s
                  ? m.ml
                  : null,
              N = S.H.Instance.SceneAppKey;
            let A = "images/appimage_default.png";
            N && (A = "/app/image?app_key=" + N);
            const L =
                null !== (l = b.G3.settings.get(m.Av)) && void 0 !== l && l,
              V =
                null !== (d = b.G3.settings.get(m.k_)) && void 0 !== d ? d : 0;
            let H = L && V > 0,
              F =
                null !==
                  (h = b.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode"
                  )) &&
                void 0 !== h &&
                h,
              U = !0;
            this.state.bLinkStreamActive &&
              ((F = !1), D && ((H = !1), (U = !1)));
            let G = { y: -0.25, z: 0 };
            return (
              this.isOverlayActive(m.gB) && (G = { y: -0.4, z: 0 }),
              c.createElement(
                a.Dd,
                { value: u },
                c.createElement(
                  a.VW,
                  { color: _ },
                  c.createElement(
                    a.s_,
                    {
                      curvature_origin_id: B,
                      width: k,
                      interactive: !1,
                      debug_name: "ControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: f,
                    },
                    c.createElement("div", {
                      className: "ControlBarBackground",
                    })
                  ),
                  c.createElement(
                    a.wx,
                    { translation: { z: 1e-5 } },
                    c.createElement(
                      a.s_,
                      {
                        curvature_origin_id: B,
                        width: k,
                        interactive: !0,
                        id: m.WR,
                        debug_name: "Controls",
                      },
                      c.createElement(
                        p.q,
                        { className: "ControlBar MainControlBar" },
                        c.createElement(
                          "div",
                          { className: "Section Left" },
                          M &&
                            c.createElement(w.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, g.Xx)("#Menu"),
                              style: w.zk.Small,
                              onClick: () => this.showPopoverMenu(ae.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          I &&
                            c.createElement(w.NT, {
                              style: w.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, g.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlay(m.gB),
                            }),
                          c.createElement(
                            w.dw,
                            { style: w.zk.Small },
                            c.createElement(
                              c.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                c.createElement(w.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, g.Xx)(
                                    "#X_More_Overlays",
                                    t.length
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    ae.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(ae.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                })
                            )
                          )
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Center" },
                          c.createElement(w.NT, {
                            label: (0, g.Xx)("#Library"),
                            imageUrl: "/dashboard/images/icons/svr_items.svg",
                            active:
                              this.isOverlayActive(m.O5) ||
                              (this.isOverlayActive(m.Y8) &&
                                y.y.Instance.lastBigPictureEntryPoint ==
                                  y.b.QuickLaunch),
                            style: w.zk.Large,
                            onClick: this.onQuickLaunchButtonClick,
                          }),
                          P != a.xY.None &&
                            c.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              c.createElement(
                                v.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                c.createElement(
                                  a.VW,
                                  { color: _ },
                                  c.createElement(
                                    a.wx,
                                    { translation: { z: 0.02 } },
                                    c.createElement(
                                      a.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: B,
                                      },
                                      c.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        c.createElement(w.NT, {
                                          label: x
                                            ? (0, g.Xx)("#SteamVR_Home")
                                            : (0, g.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(m.PF),
                                          style: w.zk.App,
                                          imageUrl: A,
                                          onClick: () =>
                                            this.switchToOverlay(m.PF),
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                          E &&
                            c.createElement(w.NT, {
                              label: (0, g.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(m.wB) ||
                                (this.isOverlayActive(m.Y8) &&
                                  y.y.Instance.lastBigPictureEntryPoint ==
                                    y.b.QuickStore),
                              style: w.zk.Large,
                              onClick: this.onQuickStoreButtonClick,
                            })
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Right" },
                          c.createElement(
                            w.dw,
                            { style: w.zk.Small },
                            F &&
                              c.createElement(w.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_theater.svg",
                                label: "Toggle Theater Mode",
                                onClick: () =>
                                  this.setState({
                                    bTheaterMode: !this.state.bTheaterMode,
                                  }),
                                active: this.state.bTheaterMode,
                              }),
                            U &&
                              c.createElement(w.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, g.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            H &&
                              c.createElement(w.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, g.Xx)("#Toggle_Room_View"),
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
                            c.createElement(w.D6, {
                              active: this.state.eShowPopoverMenu == ae.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(ae.Volume),
                              onHideTray: () => this.showPopoverMenu(ae.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            })
                          ),
                          O &&
                            c.createElement(w.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(m.A4),
                              enabled: this.hasOverlay(m.A4),
                              label: (0, g.Xx)("#Settings"),
                              style: w.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlay(m.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            R &&
                            c.createElement(w.NT, {
                              imageUrl: R.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, g.Xx)(R.sButtonName),
                              style: w.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            })
                        )
                      ),
                      c.createElement(T, {
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
                        onToggleWindowList: () =>
                          this.showPopoverMenu(ae.Windows),
                        onClearPopoverMenuTimeout: () =>
                          this.clearPopoverMenuTimeout(),
                        onStartPopoverMenuTimeout: (e) =>
                          this.startPopoverMenuTimeout(e),
                        mapWindows: this.state.mapWindows,
                        sort_depth_bias: 0.2,
                        bWindowViewEnabled: this.state.bWindowViewEnabled,
                      }),
                      c.createElement(w.z, {
                        ref: this.m_refVolumeTray,
                        position: 0.337,
                        visible:
                          this.state.eShowPopoverMenu == ae.Volume &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: C,
                        onFinalChangeMouseOutside: () => {
                          this.startPopoverMenuTimeout(800);
                        },
                        onMouseMove: this.clearPopoverMenuTimeout,
                        onMouseLeave: this.popoverMenuMouseLeave,
                        sort_depth_bias: 0.4,
                      })
                    )
                  )
                ),
                c.createElement(
                  a.wx,
                  { translation: G, scale: { y: 1.5, x: 1.5 } },
                  c.createElement(a.sl, {
                    mountedId: (0, a.iN)(m.GN, "system.keyboard"),
                  })
                )
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != i.Dashboard);
            return c.createElement(
              c.Fragment,
              null,
              e.map((e) =>
                c.createElement(I, {
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
                this.state.mapOverlayState.get(e).dockLocation == i.Dashboard;
            return this.state.bShown && this.isOverlayActive(m.gB) && t;
          }
          onGameLaunched(e) {
            var t;
            const n =
              null !==
                (t = b.G3.settings.get(
                  "/settings/dashboard/allowTheaterMode"
                )) &&
              void 0 !== t &&
              t;
            e.starts_theater_mode && n && this.setState({ bTheaterMode: !0 }),
              (!e.is_dashboard_overlay ||
                (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, n, o;
            const i =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              r =
                null !==
                  (o =
                    null === (n = this.m_refDesktopView.current) || void 0 === n
                      ? void 0
                      : n.desktopCount) && void 0 !== o
                  ? o
                  : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.Y9,
                {
                  tabName: (0, g.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: m.O5,
                },
                c.createElement(oe, {
                  visible: this.state.bShown && this.isOverlayActive(m.O5),
                  onGameLaunched: this.onGameLaunched,
                })
              ),
              c.createElement(
                a.Y9,
                {
                  tabName: (0, g.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: m.wB,
                },
                c.createElement(Y, {
                  visible: this.state.bShown && this.isOverlayActive(m.wB),
                })
              ),
              c.createElement(
                a.Y9,
                { tabName: (0, g.Xx)("#Now_Playing"), summonOverlayKey: m.PF },
                c.createElement(H, {
                  visible: this.state.bShown && this.isOverlayActive(m.PF),
                  onExitGame: () => this.switchToOverlay(m.O5),
                })
              ),
              c.createElement(
                a.Y9,
                {
                  summonOverlayKey: m.gB,
                  tabName:
                    r > 1 ? (0, g.Xx)("#Desktop_X", i) : (0, g.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                c.createElement(D, {
                  visible: this.isDesktopViewVisible(),
                  fActiveOverlayScale: this.activeOverlayScale,
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                })
              ),
              c.createElement(d._, {
                visible: this.state.bShown && this.isOverlayActive(m.A4),
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
              const n = new Map(t.mapOverlayState),
                o = Object.assign(
                  Object.assign({}, n.get(this.getActiveOverlayKey())),
                  { fScale: e }
                );
              return { mapOverlayState: n.set(this.getActiveOverlayKey(), o) };
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
                : this.switchToOverlay(m.O5),
              VRHTML.VRDashboardManager.SendOverlayClosed(t));
          }
          renderOverlayControlBar() {
            var e, t, n, o;
            const r = this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              s = this.isDarkMode ? 0 : 0.1;
            let l = !1,
              d = !1,
              p = this.getActiveOverlayKey();
            if (p) {
              let e = VRHTML.VROverlay.FindOverlay(p);
              (l =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarKeyboard)),
                (d =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarClose));
            }
            const u =
                null !==
                  (e = b.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin"
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              _ =
                null !==
                  (t = b.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax"
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              v =
                null ===
                  (n = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === n ||
                n
                  ? m.ml
                  : null,
              S = { x: 0, y: -0.15, z: 0.1 };
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003 },
                },
                c.createElement(
                  a.VW,
                  { color: r },
                  c.createElement(
                    a.s_,
                    {
                      curvature_origin_id: v,
                      origin: a.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: this.controlBarAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: s,
                    },
                    c.createElement("div", {
                      className: "OverlayControlBarBackground",
                    })
                  )
                )
              ),
              c.createElement(
                a.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                c.createElement(
                  a.VW,
                  { color: r },
                  c.createElement(
                    a.s_,
                    {
                      curvature_origin_id: v,
                      origin: a.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: m.WR,
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
                          (0, g.Xx)("#Size")
                        ),
                        c.createElement(h.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: u,
                          max: _,
                          value: this.activeOverlayScale,
                          valueStyleVariant: h.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        l &&
                          c.createElement(w.zN, {
                            iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                            title: this.state.bKeyboardVisible
                              ? (0, g.Xx)("#HideKeyboardTooltip")
                              : (0, g.Xx)("#ShowKeyboardTooltip"),
                            tooltipTranslation: S,
                            additionalClassNames: "Keyboard",
                            onClick: this.toggleKeyboard,
                            active: this.state.bKeyboardVisible,
                          }),
                        c.createElement(w.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, g.Xx)("#DockOnLeftController"),
                          tooltipTranslation: S,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              i.LeftHand
                              ? this.onDockOverlay(e, i.Dashboard)
                              : this.onDockOverlay(e, i.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_LeftHand
                            ) != a.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == i.LeftHand,
                        }),
                        c.createElement(w.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, g.Xx)("#DockOnRightController"),
                          tooltipTranslation: S,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              i.RightHand
                              ? this.onDockOverlay(e, i.Dashboard)
                              : this.onDockOverlay(e, i.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_RightHand
                            ) != a.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == i.RightHand,
                        }),
                        c.createElement(w.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, g.Xx)("#FloatInWorld"),
                          tooltipTranslation: S,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              i.World
                              ? this.onDockOverlay(e, i.Dashboard)
                              : this.onDockOverlay(e, i.World);
                          },
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == i.World,
                        }),
                        d &&
                          c.createElement(w.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, g.Xx)("#CloseOverlay"),
                            tooltipTranslation: S,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (o = this.m_refDesktopView.current) ||
                          void 0 === o
                            ? void 0
                            : o.renderControlBarButtons(S))
                      )
                    )
                  )
                )
              )
            );
          }
          renderDashboard() {
            var e, t, n, o, r, s;
            const l = this.computeFilteredOverlayTabs(),
              d = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              h = this.isDarkMode ? 0 : 0.1,
              u = !this.isDarkMode,
              _ = !this.isDarkMode;
            let v = [],
              S = [],
              y =
                null !== (e = b.G3.settings.get(m.FM)) && void 0 !== e ? e : 2;
            if (l.length > y) {
              const e = b.G3.settings.get(m.nf);
              (v = [
                null !== (t = l.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : l[0],
              ]),
                (S = l.filter((e) => !v.includes(e)));
            } else v = l;
            let C = null;
            this.isDesktopOverlayActive() && (C = 2048);
            let k = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && k.push(e);
            });
            const M = this.isScreenshotMode,
              I = M ? 2.5 : 1.8;
            let E = !1,
              O = !0,
              R = !1,
              T = this.getActiveOverlayKey();
            if (T) {
              let e = VRHTML.VROverlay.FindOverlay(T);
              (R = !!e && VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBar)),
                (O =
                  !this.state.mapOverlayState.has(T) ||
                  this.state.mapOverlayState.get(T).dockLocation ==
                    i.Dashboard),
                (E =
                  this.state.mapOverlayState.has(T) &&
                  this.state.mapOverlayState.get(T).dockLocation == i.World);
            }
            this.state.bLaserMouseSuppressionActive && (R = !1);
            let D = 2,
              P = 2.5;
            const x = b.G3.settings.get("/settings/dashboard/theaterPosition");
            x == re.Near
              ? ((D *= 0.5), (P *= 0.5))
              : x == re.Middle
              ? ((D *= 1), (P *= 1))
              : x == re.Far && ((D *= 4), (P *= 2.5));
            const B =
                null !==
                  (n =
                    0.01 *
                    b.G3.settings.get(
                      "/settings/dashboard/theaterVerticalOffsetCm"
                    )) && void 0 !== n
                  ? n
                  : 0,
              N =
                null ===
                  (o = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === o ||
                o,
              A = N ? m.ml : null;
            let L,
              V,
              H,
              F,
              U,
              G = 0.05,
              W =
                null !==
                  (r = b.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections"
                  )) &&
                void 0 !== r &&
                r,
              z = this.state.bTheaterMode
                ? { y: -1.2, z: 1 }
                : { y: -1.2, z: 0.15 },
              X = this.state.bTheaterMode
                ? { x: 0.75, y: 0.75, z: 0.75 }
                : { x: 1, y: 1, z: 1 },
              K = !N && this.state.bTheaterMode ? 0.75 : 1,
              q = N ? 1 : 0;
            this.state.bTheaterMode
              ? ((L = { y: -0.8 * P + B, z: -D }),
                (V = P),
                (H = 1.72),
                (F = 0.82),
                (U = 10))
              : ((L = { y: R ? -0.9 : -1.03375, z: 0.05 }),
                (V = 1),
                (H = 2),
                (F = 0.68),
                (U = 5),
                (W = !1));
            let Z =
              null !==
                (s = b.G3.settings.get(
                  "/settings/dashboard/allowFreeTransform"
                )) &&
              void 0 !== s &&
              s;
            return c.createElement(
              a.eK,
              {
                bContinuousRelatch: this.state.bPlacementModeActive,
                bFreeDashboardTransform: Z && this.state.bPlacementModeActive,
              },
              c.createElement(a.wx, { id: A, translation: { z: I } }),
              c.createElement(
                a.wx,
                {
                  translation: {
                    x: M ? 0.1 : 0,
                    y: ie.getDashboardVerticalPosition(),
                    z: -ie.getDashboardDistance() * (M ? 1.1 : 1),
                  },
                  rotation: { x: M ? -20 : 0 },
                  scale: ie.getDashboardScale(),
                },
                c.createElement(
                  a.wx,
                  {
                    parent_id: this.statusBarAnchorID,
                    translation: { y: 0.008 },
                    scale: { x: K, y: K },
                  },
                  c.createElement(
                    a.VW,
                    { color: d },
                    c.createElement(
                      a.s_,
                      {
                        curvature_origin_id: A,
                        origin: a.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: m.WR,
                        debug_name: "StatusBar",
                        reflect: h,
                      },
                      c.createElement(
                        "div",
                        { className: "StatusBar", style: { width: C } },
                        c.createElement(
                          "div",
                          { className: "Section Left" },
                          u && this.renderStatusBarTitle(),
                          c.createElement(w.j6, {
                            role: a.Kg.TrackedControllerRole_LeftHand,
                            style: f.A.HorizontalPips,
                          })
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Center" },
                          c.createElement(w.j6, {
                            deviceIndex: a.wU,
                            style: f.A.VerticalBattery,
                          }),
                          c.createElement(w.M3, null)
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Right" },
                          c.createElement(w.j6, {
                            role: a.Kg.TrackedControllerRole_RightHand,
                            style: f.A.HorizontalPips,
                          }),
                          _ &&
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
                  a.wx,
                  {
                    id: "active_overlay_transform",
                    translation: L,
                    ref: this.m_refOverlayTransform,
                  },
                  c.createElement(
                    a.wx,
                    { scale: { x: V, y: V } },
                    !E && O && this.renderActiveOverlay(),
                    !E &&
                      !O &&
                      c.createElement(
                        w.lL,
                        {
                          additionalClassNames: R ? "WithControlBar" : "",
                          visible: !0,
                        },
                        c.createElement(
                          "div",
                          { className: "NoDesktopFound" },
                          c.createElement(
                            "h2",
                            null,
                            this.state.mapOverlayState.get(T).dockLocation ==
                              i.LeftHand &&
                              (0, g.Xx)("#DockedOnLeftController"),
                            this.state.mapOverlayState.get(T).dockLocation ==
                              i.RightHand &&
                              (0, g.Xx)("#DockedOnRightController")
                          ),
                          c.createElement(
                            p.z,
                            {
                              className: "ButtonControl",
                              onClick: () => {
                                this.onDockOverlay(T, i.Dashboard);
                              },
                            },
                            (0, g.Xx)("#DockHere")
                          )
                        )
                      ),
                    W &&
                      c.createElement(
                        a.wx,
                        { translation: { y: F, z: 0.25 } },
                        c.createElement(a.bt, {
                          width: 2.8,
                          height: H,
                          "near-z": -1,
                          "far-z": 1,
                          debug: !1,
                          specular: { color: { r: G, g: G, b: G } },
                          diffuse: { size: U, resolution: 512 },
                        })
                      )
                  )
                ),
                R && O && this.renderOverlayControlBar(),
                !1,
                c.createElement(
                  a.wx,
                  { translation: z, scale: X },
                  c.createElement(
                    a.wx,
                    { rotation: { x: -35 }, curvature_pitch: -35 },
                    this.renderControlBar(v, S)
                  ),
                  this.state.eShowPopoverMenu == ae.Power &&
                    c.createElement(
                      a.wx,
                      {
                        translation: { x: -0.4, y: 0.15, z: 0.05 },
                        rotation: { y: 19 * q },
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id: A,
                          height: void 0,
                          width: 0.925,
                          interactive: !0,
                          origin: a.Ic.BottomRight,
                          debug_name: "Power Menu",
                          sort_depth_bias: -0.1,
                        },
                        this.renderPowerMenu()
                      )
                    ),
                  this.state.eShowPopoverMenu == ae.ExternalOverlays &&
                    c.createElement(
                      a.wx,
                      {
                        translation: { x: 0.2, y: 0.15, z: 0.05 },
                        rotation: { y: 6 * q },
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id: A,
                          height: void 0,
                          width: 0.925,
                          interactive: !0,
                          origin: a.Ic.BottomRight,
                          debug_name: "OverlaysList",
                          sort_depth_bias: -0.1,
                        },
                        this.renderPopoverMenu(
                          c.createElement(
                            c.Fragment,
                            null,
                            " ",
                            S.map((e) =>
                              c.createElement(w.dy, {
                                key: e.mountable_id,
                                imageUrl: this.getDashboardIconUri(e),
                                label: e.tab_name,
                                onClick: () => {
                                  this.switchToOverlay(e.summon_overlay_key),
                                    this.showPopoverMenu(ae.None);
                                },
                              })
                            ),
                            " "
                          )
                        )
                      )
                    ),
                  this.state.eShowPopoverMenu == ae.Windows &&
                    c.createElement(
                      a.wx,
                      {
                        translation: { x: 1.25, y: -0.1, z: 0.35 },
                        rotation: { y: -16 * q },
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id: A,
                          height: void 0,
                          width: 0.925,
                          interactive: !0,
                          origin: a.Ic.BottomRight,
                          debug_name: "WindowList",
                          sort_depth_bias: -0.1,
                        },
                        this.renderPopoverMenu(
                          c.createElement(
                            c.Fragment,
                            null,
                            " ",
                            k.map((e) =>
                              c.createElement(w.dy, {
                                key: e.hwnd,
                                imageUrl:
                                  "/dashboard/images/icons/icon_add.png",
                                label: e.title,
                                onClick: () => {
                                  let t = {
                                    type: "request_spawn_window_view",
                                    hwnd: e.hwnd,
                                  };
                                  this.m_mailbox.SendMessage("desktopview", t),
                                    this.showPopoverMenu(ae.None);
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
            );
          }
        });
        (de.k_sDashboardMailboxName = "systemui_dashboard"),
          (de.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (de.k_sOverlayKeyboardClosedMessage = "overlay_keyboard_closed"),
          (de.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (de.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (de.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (de.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (de.k_sWindowViewCreatedMessage = "window_view_created"),
          (de.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (de.k_sUpdateWindowListMessage = "update_window_list"),
          (de.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (de.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (de.k_sLaserMouseSuppressionUpdate =
            "laser_mouse_suppression_update"),
          (de.k_nControlBarWidthMeters = 2.667),
          (de.s_dashboardUserDistance = void 0),
          (de.s_dashboardUserScale = void 0),
          (0, r.gn)(
            [s.ak],
            de.prototype,
            "onSetDashboardFadeSuppression",
            null
          ),
          (0, r.gn)([s.ak], de.prototype, "onRoomViewChanged", null),
          (0, r.gn)([s.ak], de.prototype, "onLinkStreamActiveEvents", null),
          (0, r.gn)(
            [s.ak],
            de.prototype,
            "onSetDashboardForceBoundsVisible",
            null
          ),
          (0, r.gn)(
            [s.ak],
            de.prototype,
            "onLaserMouseSuppressionUpdate",
            null
          ),
          (0, r.gn)([s.ak], de.prototype, "onDashboardOverlayCreated", null),
          (0, r.gn)([s.ak], de.prototype, "onDashboardOverlayDestroyed", null),
          (0, r.gn)([s.ak], de.prototype, "onUpdateDashboardTabs", null),
          (0, r.gn)([s.ak], de.prototype, "onWindowViewCreated", null),
          (0, r.gn)([s.ak], de.prototype, "onWindowViewDestroyed", null),
          (0, r.gn)([s.ak], de.prototype, "onUpdateWindowList", null),
          (0, r.gn)([s.ak], de.prototype, "onUpdateDebugInfo", null),
          (0, r.gn)([s.ak], de.prototype, "onDockOverlay", null),
          (0, r.gn)([s.ak], de.prototype, "onShowDashboardRequested", null),
          (0, r.gn)([s.ak], de.prototype, "onHideDashboardRequested", null),
          (0, r.gn)([s.ak], de.prototype, "show", null),
          (0, r.gn)([s.ak], de.prototype, "hide", null),
          (0, r.gn)([s.ak], de.prototype, "setPlacementModeActive", null),
          (0, r.gn)([s.ak], de.prototype, "onToggleRoomView", null),
          (0, r.gn)([s.ak], de.prototype, "onQuickLaunchButtonClick", null),
          (0, r.gn)([s.ak], de.prototype, "onQuickStoreButtonClick", null),
          (0, r.gn)([s.ak], de.prototype, "onRecenterClick", null),
          (0, r.gn)([s.ak], de.prototype, "renderPowerMenu", null),
          (0, r.gn)([s.ak], de.prototype, "startPopoverMenuTimeout", null),
          (0, r.gn)([s.ak], de.prototype, "clearPopoverMenuTimeout", null),
          (0, r.gn)([s.ak], de.prototype, "showPopoverMenu", null),
          (0, r.gn)([s.ak], de.prototype, "popoverMenuMouseLeave", null),
          (0, r.gn)([s.ak], de.prototype, "popoverMenuMouseUp", null),
          (0, r.gn)([l.Fl], de.prototype, "isDarkMode", null),
          (0, r.gn)([l.Fl], de.prototype, "isScreenshotMode", null),
          (0, r.gn)([l.Fl], de.prototype, "isTheaterMode", null),
          (0, r.gn)(
            [s.ak],
            de.prototype,
            "renderExternalOverlayControlBarButton",
            null
          ),
          (0, r.gn)([s.ak], de.prototype, "isDesktopTrayActive", null),
          (0, r.gn)([s.ak], de.prototype, "isDesktopOverlayActive", null),
          (0, r.gn)([s.ak], de.prototype, "handlePeerButton", null),
          (0, r.gn)([s.ak], de.prototype, "isDesktopViewVisible", null),
          (0, r.gn)([s.ak], de.prototype, "onGameLaunched", null),
          (0, r.gn)([s.ak], de.prototype, "toggleKeyboard", null),
          (0, r.gn)([s.ak], de.prototype, "onKeyboardClosed", null),
          (0, r.gn)([l.Fl], de.prototype, "activeOverlayScale", null),
          (0, r.gn)([s.ak], de.prototype, "onActiveOverlayScaleChange", null),
          (0, r.gn)([s.ak], de.prototype, "onActiveOverlayClosed", null),
          (0, r.gn)([l.LO], de, "s_dashboardUserDistance", void 0),
          (0, r.gn)([l.LO], de, "s_dashboardUserScale", void 0),
          (de = ie = (0, r.gn)([C.Pi], de));
      },
      7679: (e, t, n) => {
        n.d(t, {
          B8: () => B,
          D6: () => G,
          IO: () => P,
          M3: () => O,
          NT: () => N,
          Rk: () => L,
          dw: () => x,
          dy: () => w,
          j4: () => V,
          j6: () => A,
          lL: () => E,
          z: () => H,
          zN: () => W,
          zk: () => D,
        });
        var o,
          i,
          r = n(655),
          a = n(6321),
          s = n(7056),
          l = n(2188),
          c = n(7062),
          d = n(7294),
          p = n(1818),
          h = n(6547),
          u = n(9392),
          m = n(1219),
          g = n(7264),
          _ = n(9981),
          v = n(197),
          S = n(3868),
          y = n(6882),
          b = n(1058),
          C = n(4435),
          f = n(3446),
          k = n(8322),
          M = n.n(k),
          I = n(7968);
        const E = (e) => {
          var t, n, o;
          const i = d.useRef(null),
            r = d.useRef(null);
          d.useEffect(() => {
            var e, t;
            return null === (e = i.current) || void 0 === e
              ? void 0
              : e.setFloatingViewStack(
                  null === (t = r.current) || void 0 === t
                    ? void 0
                    : t.viewStack
                );
          });
          const s = null === (t = e.scrollable) || void 0 === t || t,
            l =
              null !== (n = e.foregroundReflectMultiplier) && void 0 !== n
                ? n
                : 1,
            c =
              null ===
                (o = f.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === o ||
              o
                ? v.ml
                : null;
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              a.s_,
              {
                visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                debug_name: "homepanelbackground",
                curvature_origin_id: c,
                origin: a.Ic.BottomCenter,
                interactive: !1,
                scrollable: !1,
                target_dpi_panel_id: v.WR,
                target_dpi_multiplier: 2,
                reflect: 0.01,
                sampler: a.Vv.SingleTap,
              },
              d.createElement(a.at, { id: v.t3, location: a.Ic.TopCenter }),
              d.createElement(
                h.vz,
                { ref: i },
                d.createElement("div", {
                  className: (0, b.LJ)(
                    "DashboardPanelBackground",
                    e.additionalClassNames
                  ),
                  style: e.additionalStyle,
                })
              ),
              d.createElement(a.at, { id: v.Gl, location: a.Ic.BottomCenter })
            ),
            d.createElement(
              a.wx,
              { translation: { z: 1e-5 } },
              d.createElement(
                a.s_,
                {
                  visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: c,
                  origin: a.Ic.BottomCenter,
                  interactive: !0,
                  scrollable: s,
                  target_dpi_panel_id: v.WR,
                  reflect: 0.2 * l,
                },
                d.createElement(
                  h.sC,
                  { ref: r },
                  d.createElement(
                    p.q,
                    null,
                    d.createElement(
                      u.P,
                      {
                        scrollDirection: s ? u.I.Vertical : u.I.None,
                        className: (0, b.LJ)(
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
        class O extends d.Component {
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
            const e = S.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              n = null;
            const o = t.toLowerCase(),
              i = Math.max(o.lastIndexOf("am"), o.lastIndexOf("pm"));
            return (
              i >= 0 && ((n = t.substring(i)), (t = t.substring(0, i - 1))),
              d.createElement(
                "div",
                { className: "ClockContainer" },
                d.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  d.createElement("span", { className: "Suffix" }, n)
                )
              )
            );
          }
        }
        function w(e) {
          return d.createElement(
            p.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" })
          );
        }
        (0, r.gn)([s.ak], O.prototype, "updateTime", null);
        let R = (o = class extends d.Component {
          get isShowingTooltip() {
            return o.s_CurrentlyShownTooltip === this;
          }
          show() {
            o.s_CurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip && (o.s_CurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              n = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              o =
                null ===
                  (e = f.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? v.ml
                  : null;
            return d.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              d.createElement(
                y.d,
                { allowableParentSelectors: [".DashboardMain"] },
                d.createElement(
                  a.wx,
                  { translation: n },
                  d.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: v.WR,
                      curvature_origin_id: o,
                    },
                    d.createElement(
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
        (R.s_CurrentlyShownTooltip = null),
          (0, r.gn)([l.Fl], R.prototype, "isShowingTooltip", null),
          (0, r.gn)([l.aD.bound], R.prototype, "show", null),
          (0, r.gn)([l.aD.bound], R.prototype, "hide", null),
          (0, r.gn)([l.LO], R, "s_CurrentlyShownTooltip", void 0),
          (R = o = (0, r.gn)([c.Pi], R));
        class T extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !T.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  T.k_rsThumbnailHashesToInvert.indexOf(M().hash(e)) >= 0 &&
                  (t = !0),
                T.s_mapShouldInvertThumbnail.set(e, t);
            }
            return T.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              n = T.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, b.LJ)(["BlackToWhite", n]),
                src: this.props.src,
              })
            );
          }
        }
        var D, P;
        (T.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "0ea4aa3d9529b716f0f1957684247dee",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (T.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(D || (D = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(P || (P = {}));
        const x = (e) =>
          d.createElement(
            "div",
            { className: (0, b.LJ)("ControlBarGroup", D[e.style]) },
            e.children
          );
        let B = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t);
          }
          onMouseLeave() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t);
          }
          render() {
            var e;
            return d.createElement(
              p.z,
              {
                className: (0, b.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  P[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : P.Center
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
                pressSoundEffect: g.y.ControlBarButtonPress,
                releaseSoundEffect: g.y.ControlBarButtonRelease,
              },
              this.props.centerPanelAnchorID &&
                d.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  d.createElement(y.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  })
                ),
              d.createElement(R, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(T, { src: this.props.imageUrl })
            );
          }
        };
        (0, r.gn)([s.ak], B.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], B.prototype, "onMouseLeave", null),
          (B = (0, r.gn)([c.Pi], B));
        const N = (e) =>
          d.createElement(
            x,
            { style: e.style },
            d.createElement(B, Object.assign({}, e))
          );
        class A extends d.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.deviceIndex = a.Kf),
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
              n = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (n = this.props.deviceIndex),
              n != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = n)),
              n != a.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  a.Uk.DeviceProvidesBatteryStatus_Bool
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  n,
                  a.Uk.DeviceBatteryPercentage_Float
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  a.Uk.DeviceIsCharging_Bool
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + A.kBatteryLevelHysteresis,
                        1
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - A.kBatteryLevelHysteresis,
                        0
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                n,
                a.Uk.DevicePowerUsage_Float
              );
            }
            let o = I.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style
            );
            o != this.state.batteryIconPath &&
              this.setState({ batteryIconPath: o });
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
            (e != a.XX.Activated && e != a.XX.Deactivated) || this.update();
          }
          render() {
            return d.createElement(
              "div",
              { className: "BatteryStatus" },
              this.devicePowerUsage &&
                d.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  Math.round(10 * this.devicePowerUsage) / 10,
                  " W "
                ),
              d.createElement("img", { src: this.state.batteryIconPath })
            );
          }
        }
        (A.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], A.prototype, "updateControllerStatus", null),
          (0, r.gn)([s.ak], A.prototype, "onBatteryStateChanged", null),
          (0, r.gn)([s.ak], A.prototype, "onDeviceRoleChanged", null),
          (0, r.gn)([s.ak], A.prototype, "onDeviceEvent", null),
          d.Component;
        const L = (e) =>
          d.createElement(
            "div",
            { className: "Title" },
            d.createElement(T, { src: e.iconUrl, shadow: !0 }),
            d.createElement("span", { className: "NoWrapText" }, e.name)
          );
        class V extends d.Component {
          constructor() {
            super(...arguments),
              (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
              (this.m_resizeObserver = null),
              (this.m_refPanelElem = d.createRef()),
              (this.m_refBackgroundElem = d.createRef());
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
              n = Math.asin(t) / Math.PI,
              o =
                null ===
                  (e = f.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? v.ml
                  : null;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.at,
                { location: { x: t, y: -1 } },
                d.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(n),
                    z: -0.03 * Math.abs(n),
                  },
                  rotation: { y: 15 * n, z: 2 * n },
                })
              ),
              d.createElement(
                y.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                d.createElement(
                  a.VW,
                  { color: this.props.tintColor },
                  d.createElement(
                    _.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    d.createElement(
                      a.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04, z: -0.01 },
                      },
                      d.createElement(
                        a.s_,
                        {
                          curvature_origin_id: o,
                          origin: a.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          target_dpi_panel_id: v.WR,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        d.createElement(
                          "div",
                          {
                            className: (0, b.LJ)(
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
                      d.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        d.createElement(
                          a.s_,
                          {
                            curvature_origin_id: o,
                            origin: a.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: v.WR,
                            target_dpi_multiplier: 2,
                            reflect: 0.04,
                            sampler: a.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                          },
                          d.createElement("div", {
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
        (0, r.gn)([s.ak], V.prototype, "onResizeObserved", null),
          (0, r.gn)([s.ak], V.prototype, "updateBackgroundSize", null),
          (0, r.gn)([s.ak], V.prototype, "onPortalDidMount", null);
        let H = class extends d.Component {
          constructor() {
            super(...arguments),
              (this.m_refSlider = d.createRef()),
              (this.m_refTray = d.createRef()),
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
              f.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume"
              ) && f.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!f.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice"
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return d.createElement(
              V,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  U,
                  {
                    onClick: C.f.Instance.toggleMicrophoneMute,
                    title: C.f.Instance.microphoneMuted
                      ? (0, S.Xx)("#UnmuteMicrophone")
                      : (0, S.Xx)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: C.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  })
                ),
                d.createElement(F, {
                  title: (0, S.Xx)("#MicrophoneVolume"),
                  value: C.f.Instance.microphoneVolume,
                  onChange: C.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, b.LJ)([
                    "Muted",
                    C.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                })
              ),
              this.showAudioMirrorControls &&
                d.createElement(
                  "div",
                  { className: "Section" },
                  d.createElement(
                    U,
                    {
                      onClick: C.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: C.f.Instance.mirrorMuted
                        ? (0, S.Xx)("#UnmuteAudioMirror")
                        : (0, S.Xx)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: C.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    })
                  ),
                  d.createElement(F, {
                    title: (0, S.Xx)("#AudioMirrorVolume"),
                    value: C.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: C.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, b.LJ)([
                      "Muted",
                      C.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: g.y.VolumePreview,
                  })
                ),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  U,
                  {
                    onClick: C.f.Instance.toggleMute,
                    title: C.f.Instance.muted
                      ? (0, S.Xx)("#Unmute_Headset")
                      : (0, S.Xx)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: C.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  })
                ),
                d.createElement(F, {
                  title: (0, S.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: C.f.Instance.volume,
                  onChange: C.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, b.LJ)(["Muted", C.f.Instance.muted]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                })
              )
            );
          }
        };
        (0, r.gn)([s.ak], H.prototype, "onSliderMouseEnter", null),
          (0, r.gn)([s.ak], H.prototype, "onSliderMouseLeave", null),
          (0, r.gn)([s.ak], H.prototype, "onSliderFinalChange", null),
          (0, r.gn)([l.Fl], H.prototype, "showAudioMirrorControls", null),
          (0, r.gn)([l.Fl], H.prototype, "enableAudioMirrorControls", null),
          (H = (0, r.gn)([c.Pi], H));
        let F = class extends d.Component {
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
            return d.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                d.createElement(R, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              d.createElement(
                m.iR,
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
        (0, r.gn)([s.ak], F.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], F.prototype, "onMouseLeave", null),
          (0, r.gn)([s.ak], F.prototype, "onInteractionStart", null),
          (0, r.gn)([s.ak], F.prototype, "onInteractionEnd", null),
          (F = (0, r.gn)([c.Pi], F));
        let U = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, n, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (o = (n = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(n, e);
          }
          onMouseLeave(e) {
            var t, n, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (o = (n = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(n, e);
          }
          render() {
            return d.createElement(
              p.z,
              Object.assign({}, this.props, {
                className: (0, b.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                d.createElement(R, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children
            );
          }
        };
        (0, r.gn)([s.ak], U.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], U.prototype, "onMouseLeave", null),
          (U = (0, r.gn)([c.Pi], U));
        let G = (i = class extends d.Component {
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
            var t, n;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              null === (n = (t = this.props).onShowTray) ||
                void 0 === n ||
                n.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, a.JR)((0, a.Zj)(t, this.m_vecOriginalMousePosition)) >
              i.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
            var e, t, n, o;
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
                (null === (n = (t = this.props).onHideTray) ||
                  void 0 === n ||
                  n.call(t)),
              null === (o = this.slider) ||
                void 0 === o ||
                o.stopExternalSliding();
          }
          render() {
            return d.createElement(B, {
              imageUrl: C.f.Instance.muted
                ? "/dashboard/images/icons/svr_volume_mute.svg"
                : "/dashboard/images/icons/svr_volume.svg",
              active: this.props.active,
              label: this.props.active ? null : (0, S.Xx)("#Volume"),
              onMouseDown: this.onButtonMouseDown,
              onMouseEnter: this.props.onMouseEnter,
              onMouseLeave: this.props.onMouseLeave,
            });
          }
        });
        (G.MIN_DRAG_THRESHOLD = 35),
          (0, r.gn)([s.ak], G.prototype, "onButtonMouseDown", null),
          (0, r.gn)([s.ak], G.prototype, "onWindowMouseMove", null),
          (0, r.gn)([s.ak], G.prototype, "onWindowMouseUp", null),
          (G = i = (0, r.gn)([c.Pi], G));
        const W = (e) => {
          const t = d.useRef();
          return d.createElement(
            p.z,
            {
              className: (0, b.LJ)(
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
              d.createElement(R, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: t,
              }),
            e.label && d.createElement("span", null, e.label),
            e.iconUrl &&
              d.createElement("img", {
                className: "Icon BlackToWhite",
                src: e.iconUrl,
              })
          );
        };
      },
      79: (e, t, n) => {
        n.d(t, { BB: () => h, KU: () => u });
        var o,
          i = n(655),
          r = n(7294),
          a = n(7056),
          s = n(6321),
          l = n(3868),
          c = n(7062),
          d = n(1058),
          p = n(3446);
        const h = "resetuniverseorigincountdown",
          u = "begin_reset_universe_origin_countdown";
        let m = (o = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(h).then(() => {
                this.m_mailbox.RegisterHandler(
                  u,
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
              null === s.ZP || void 0 === s.ZP
                ? void 0
                : s.ZP.VRApplications.GetSceneApplicationKey();
            let n = !t || "system.generated.xrservice" == t;
            n
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === s.ZP ||
                void 0 === s.ZP ||
                s.ZP.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                in_dash_mode: n,
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
                  null === s.ZP ||
                    void 0 === s.ZP ||
                    s.ZP.VRChaperone.ResetZeroPose(
                      null !==
                        (e =
                          null === s.ZP || void 0 === s.ZP
                            ? void 0
                            : s.ZP.VRCompositor.GetTrackingSpace()) &&
                        void 0 !== e
                        ? e
                        : s.zq.Standing
                    ),
                  clearTimeout(this.m_fadeFinishTimeout),
                  (this.m_fadeFinishTimeout = setTimeout(
                    this.HideOverlay,
                    o.kFadeDurationMs
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
            return r.createElement(
              s.s_,
              {
                width: void 0,
                height: o.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              r.createElement(
                "div",
                {
                  className: (0, d.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: o.kPixelWidth },
                },
                r.createElement(
                  "div",
                  { className: "FlexColumn" },
                  r.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    r.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    (0, l.Xx)("#Recentering_Countdown")
                  )
                )
              )
            );
          }
          render() {
            var e, t;
            if (!this.state.visible) return null;
            let n = 0.9,
              o =
                0.8 *
                (null !==
                  (e =
                    null === s.ZP || void 0 === s.ZP
                      ? void 0
                      : s.ZP.VRProperties.GetFloatProperty(
                          s.wU,
                          s.Uk.DashboardScale_Float
                        )) && void 0 !== e
                  ? e
                  : 1);
            const i =
              this.props.dashboardRef.current &&
              this.props.dashboardRef.current.isTheaterMode;
            let a =
              null !==
                (t = p.G3.settings.get(
                  "/settings/dashboard/allowFreeTransform"
                )) &&
              void 0 !== t &&
              t;
            return this.state.in_dash_mode
              ? (i && ((n *= 2), (o *= 2)),
                r.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: a },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -n }, scale: o },
                    this.renderPanel()
                  )
                ))
              : r.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -n }, scale: o },
                    this.renderPanel()
                  )
                );
          }
        });
        (m.kPanelHeight = 0.2),
          (m.kPixelWidth = 400),
          (m.kFadeDurationMs = 1e3),
          (0, i.gn)(
            [a.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null
          ),
          (0, i.gn)([a.ak], m.prototype, "CountdownTick", null),
          (0, i.gn)([a.ak], m.prototype, "HideOverlay", null),
          (m = o = (0, i.gn)([c.Pi], m));
      },
      2379: (e, t, n) => {
        n.d(t, { s: () => _ });
        var o = n(655),
          i = n(7294),
          r = n(7062),
          a = n(7056),
          s = n(3868),
          l = n(1428),
          c = n(9093),
          d = n(2188),
          p = n(3947),
          h = n(1818),
          u = n(1058),
          m = n(8052);
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
            return p.I.GetDeviceInfo(this.props.trackerPath);
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
              ].map((e) => ({ value: e, sLabel: (0, s.Xx)("#" + e) })));
            const t = this.trackerConfig.device_path_string;
            let n = t;
            const o = "vive_tracker";
            n.includes(o) &&
              (n = n.substring(n.indexOf(o) + o.length, n.length));
            let r = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (r = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable"
                  ))
                : (r = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected"
                  )),
              i.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                i.createElement(
                  "div",
                  { className: "Label", title: t },
                  i.createElement("span", null, n),
                  i.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected"
                    ),
                    className: (0, u.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", c.E.connected && this.IsConnected()],
                      ["Disconnected", c.E.connected && !this.IsConnected()]
                    ),
                  })
                ),
                i.createElement(
                  "div",
                  { className: (0, u.LJ)("SubsectionStem") },
                  i.createElement(
                    m.GV,
                    { title: r },
                    i.createElement(
                      h.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, s.Xx)("#TrackerEditor_BuzzTracker")
                    )
                  )
                ),
                i.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  i.createElement(m.Xp, {
                    label: (0, s.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, s.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    i.createElement(m.Xp, {
                      label: (0, s.Xx)("#Settings_ViveTracker_Hand"),
                      items: e,
                      value: this.trackerConfig.controller_role,
                      onChange: this.OnControllerRoleChanged,
                    })
                )
              )
            );
          }
        };
        (0, o.gn)([d.Fl], g.prototype, "trackerConfig", null),
          (0, o.gn)([a.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, o.gn)([a.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, o.gn)([a.ak], g.prototype, "BuzzTracker", null),
          (0, o.gn)([d.Fl], g.prototype, "deviceInfo", null),
          (g = (0, o.gn)([r.Pi], g));
        let _ = class extends i.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => p.I.GetInputState(),
              2e3
            )),
              p.I.GetInputState();
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
                (e = t.trackers.map((e, n) =>
                  i.createElement(g, {
                    key: n,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  })
                )),
              i.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        _ = (0, o.gn)([r.Pi], _);
      },
      6889: (e, t, n) => {
        n.d(t, { u: () => i });
        var o = n(7294);
        function i(e) {
          return o.createElement(
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
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              })
            )
          );
        }
      },
    },
    n = {};
  function o(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var r = (n[e] = { id: e, exports: {} });
    return t[e](r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, i, r) => {
      if (!n) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, i, r] = e[d], s = !0, l = 0; l < n.length; l++)
            (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(d--, 1);
            var c = i();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      r = r || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
      e[d] = [n, i, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.j = 381),
    (() => {
      var e = { 381: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var i,
            r,
            [a, s, l] = n,
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (l) var d = l(o);
          }
          for (t && t(n); c < a.length; c++)
            (r = a[c]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(d);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (o.nc = void 0);
  var i = o.O(void 0, [968, 683], () => o(3804));
  i = o.O(i);
})();
//# sourceMappingURL=controllerbindingui.js.map?v=074df43749a0e8d1ac85
