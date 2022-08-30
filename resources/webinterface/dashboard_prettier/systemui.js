/*! For license information please see systemui.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      6321: (e, t, i) => {
        i.d(t, {
          A4: () => R.A,
          Bl: () => b.Bl,
          CH: () => k.C,
          Dd: () => l.D,
          Fs: () => o.Fs,
          Fx: () => o.Fx,
          GC: () => T.GC,
          Ic: () => b.Ic,
          JR: () => o.JR,
          Kf: () => T.Kf,
          Kg: () => T.Kg,
          LL: () => T.LL,
          LY: () => o.LY,
          M9: () => o.M9,
          Nv: () => n.N,
          OK: () => u.OK,
          Op: () => T.Op,
          Oq: () => o.Oq,
          Pd: () => o.Pd,
          Pw: () => T.Pw,
          QZ: () => T.QZ,
          UU: () => o.UU,
          Uk: () => T.Uk,
          VW: () => a.V,
          Vv: () => b.Vv,
          XX: () => T.XX,
          Y9: () => r.Y,
          Z9: () => T.Z9,
          ZP: () => w,
          Zj: () => o.Zj,
          a0: () => T.a0,
          aB: () => o.aB,
          at: () => y.a,
          bt: () => g.b,
          dq: () => o.dq,
          eK: () => M.e,
          eQ: () => o.eQ,
          gO: () => h.g,
          gQ: () => m.g,
          hz: () => s.h,
          iC: () => S.i,
          iN: () => u.iN,
          jL: () => _.j,
          jm: () => f.j,
          kH: () => C.k,
          l0: () => T.l0,
          lx: () => T.lx,
          mT: () => o.mT,
          n0: () => p.n,
          q9: () => o.q9,
          qA: () => T.qA,
          qC: () => T.qC,
          qI: () => u.qI,
          qR: () => T.qR,
          rN: () => o.rN,
          s_: () => b.s_,
          sl: () => c.s,
          tS: () => o.tS,
          ui: () => o.ui,
          vS: () => T.vS,
          wU: () => T.wU,
          wx: () => d.w,
          x1: () => v.x,
          xY: () => T.xY,
          xj: () => m.x,
          zA: () => T.zA,
          zq: () => T.zq,
        });
        var n = i(4507),
          o = i(3573),
          s = i(1469),
          r = i(1976),
          a = i(1917),
          l = i(142),
          c = i(7986),
          d = i(6701),
          h = i(2509),
          u = i(6263),
          p = (i(3402), i(9495)),
          m = (i(6374), i(5565)),
          g = i(3033),
          v = i(8235),
          _ = i(9483),
          y = i(5230),
          b = i(4132),
          S = (i(9744), i(6721)),
          f = i(510),
          k = i(1077),
          R = i(1431),
          M = i(6730),
          C = i(6135),
          T = i(1731);
        const w = VRHTML;
      },
      1431: (e, t, i) => {
        i.d(t, { A: () => s });
        var n = i(7294),
          o = i(3402);
        class s extends o.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
              "vsg-callout-transform",
              { offset: (0, o.Kg)(this.props.vOffset) },
              this.props.children
            );
          }
        }
      },
      1077: (e, t, i) => {
        i.d(t, { C: () => r });
        var n = i(7294),
          o = i(1731),
          s = i(6701);
        class r extends n.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  o.Uk.RenderModelName_String
                );
                if (e) {
                  let i =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath
                    );
                  if (i) {
                    let n =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        i,
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
            return n.createElement(
              s.w,
              {
                id: this.props.id,
                parent_path: this.props.sDevicePath,
                transform: this.state.xfTransform,
              },
              this.props.children
            );
          }
        }
      },
      1976: (e, t, i) => {
        i.d(t, { Y: () => c });
        var n = i(655),
          o = i(7294),
          s = i(3402),
          r = i(7056),
          a = i(6263),
          l = i(7986);
        class c extends s.Mo {
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
            var i;
            const n = this.createSgNode(t);
            return (
              (n.properties.tab_name =
                null !== (i = this.props.tabName) && void 0 !== i ? i : ""),
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
            return o.createElement(
              "vsg-node",
              { id: this.props.id },
              o.createElement(
                l.C,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children
              )
            );
          }
        }
        (0, n.gn)([r.ZP], c.prototype, "buildNode", null);
      },
      6730: (e, t, i) => {
        i.d(t, { e: () => r });
        var n = i(655),
          o = i(3402),
          s = i(7056);
        class r extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var i;
            const n = this.createSgNode(t);
            return (
              (n.properties.continuous_relatch =
                null !== (i = this.props.bContinuousRelatch) &&
                void 0 !== i &&
                i),
              [e, n]
            );
          }
        }
        (0, n.gn)([s.ZP], r.prototype, "buildNode", null);
      },
      6721: (e, t, i) => {
        i.d(t, { i: () => r });
        var n,
          o = i(7294),
          s = i(3402);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(n || (n = {}));
        class r extends s.Mo {
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
              i = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              s = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return o.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": i,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": n,
                "max-angular-velocity": s,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children
            );
          }
        }
      },
      510: (e, t, i) => {
        i.d(t, { j: () => s });
        var n = i(7294),
          o = i(3402);
        class s extends o.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
              "vsg-head-facing-transform",
              null,
              this.props.children
            );
          }
        }
      },
      8235: (e, t, i) => {
        i.d(t, { x: () => s });
        var n = i(7294),
          o = i(3402);
        class s extends o.Mo {
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
      9744: (e, t, i) => {
        i(7294), i(3402);
      },
      3033: (e, t, i) => {
        i.d(t, { b: () => r });
        var n = i(655),
          o = i(3402),
          s = i(7056);
        class r extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "ltcquad";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (
              ((i.properties.width = this.props.width),
              (i.properties.height = this.props.height),
              (i.properties["near-z"] = this.props["near-z"]),
              (i.properties["far-z"] = this.props["far-z"]),
              (i.properties.debug = this.props.debug),
              this.props.diffuse)
            ) {
              let e = this.props.diffuse;
              (i.properties["diffuse-resolution"] = e.resolution),
                (i.properties["diffuse-size"] = e.size);
            }
            if (this.props.specular) {
              let e = this.props.specular;
              if ("string" == typeof e.color) i.properties.color = e.color;
              else {
                let t = (0, o.kh)(e.color, { r: 0, g: 0, b: 0 });
                i.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, i];
          }
        }
        (0, n.gn)([s.ZP], r.prototype, "buildNode", null);
      },
      6135: (e, t, i) => {
        i.d(t, { k: () => s });
        var n = i(7294),
          o = i(3402);
        class s extends o.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, o.Kg)(this.props.xfCurrent.translation),
              t = (0, o.xs)(this.props.xfCurrent.rotation),
              i = (0, o.Kg)(this.props.xfCurrent.scale);
            return n.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: i,
              },
              this.props.children
            );
          }
        }
      },
      7986: (e, t, i) => {
        i.d(t, { C: () => a, s: () => l });
        var n = i(655),
          o = i(3402),
          s = i(7056),
          r = i(6263);
        class a extends o.Mo {
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
        (0, n.gn)([s.ZP], a.prototype, "buildNode", null);
        class l extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (
              (i.properties.mountable_id = (0, r.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (i.properties.dashboard_scale = this.props.fDashboardScale),
              [e, i]
            );
          }
        }
        (0, n.gn)([s.ZP], l.prototype, "buildNode", null);
      },
      142: (e, t, i) => {
        i.d(t, { D: () => r });
        var n = i(655),
          o = i(3402),
          s = i(7056);
        class r extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "opacity";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (i.properties.opacity = this.props.value), [e, i];
          }
        }
        (0, n.gn)([s.ZP], r.prototype, "buildNode", null);
      },
      4132: (e, t, i) => {
        i.d(t, {
          Bl: () => r,
          Ic: () => n,
          Lb: () => m,
          Vv: () => o,
          s_: () => g,
        });
        var n,
          o,
          s,
          r,
          a = i(655),
          l = i(7294),
          c = i(3402),
          d = i(9495),
          h = i(7056),
          u = i(6263);
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
          })(o || (o = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(r || (r = {}));
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
          createOverdragBlockingElement(e, t, i, n) {
            let o = document.createElement("div");
            (o.style.position = "absolute"),
              (o.style.top = t + "px"),
              (o.style.left = e + "px"),
              (o.style.width = i + "px"),
              (o.style.height = n + "px"),
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
              : r.Visible;
          }
          buildNode(e, t) {
            var i, n, o, s, a;
            if (this.visibility != r.Visible) return [e, null];
            let l = Object.assign({}, e),
              d = this.createSgNode(t),
              h = { x: 0, y: 0 };
            h =
              "object" == typeof this.props.origin
                ? (0, c.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const g = this.props.overlay_key,
              v = (0, u.Gv)();
            return (
              g && g.length > 0
                ? (d.properties.key = g)
                : v
                ? (d.properties.key = v)
                : (d.properties.overlay_handle = (0, u.Mb)()),
              (d.properties.uv_min =
                null !== (i = p(this.m_UVsMin)) && void 0 !== i ? i : void 0),
              (d.properties.uv_max =
                null !== (n = p(this.m_UVsMax)) && void 0 !== n ? n : void 0),
              (d.properties.width =
                null !== (o = this.props.width) && void 0 !== o ? o : void 0),
              (d.properties.height =
                null !== (s = this.props.height) && void 0 !== s ? s : void 0),
              (d.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (d.properties["target-width-anchor-id"] = (0, u.Hb)(
                this.props.target_width_anchor_id
              )),
              (d.properties["target-dpi-panel-id"] = (0, u.Hb)(
                this.props.target_dpi_panel_id
              )),
              (d.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (d.properties.curvature = this.props.curvature),
              (d.properties["curvature-origin-id"] = (0, u.Hb)(
                this.props.curvature_origin_id
              )),
              (d.properties.interactive = this.props.interactive),
              (d.properties.scrollable = this.props.scrollable),
              (d.properties.modal = this.props.modal),
              (d.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (d.properties.origin = (0, c.D1)(h)),
              (d.properties.debug_name = this.props.debug_name),
              (d.properties.sampler = this.props.sampler),
              (d.properties.reflect = this.props.reflect),
              (d.properties.stereoscopy = this.props.stereoscopy),
              (d.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (d.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (d.properties["texture-id"] = (0, u.Hb)(this.props.texture_id)),
              (d.properties["sort-order"] = this.props.sort_order),
              (d.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (l.currentPanel = this),
              [l, d]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              i = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + i * e.v,
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
                style: { display: this.visibility == r.Hidden ? "none" : null },
              },
              this.props.children
            );
          }
        }
        (g.s_bPanelsAreDirty = !1),
          (0, a.gn)([h.ZP], g.prototype, "onResizeObserved", null),
          (0, a.gn)([h.ZP], g.prototype, "onPanelMouseDown", null),
          (0, a.gn)([h.ZP], g.prototype, "onWindowMouseUp", null),
          (0, a.gn)([h.ZP], g.prototype, "buildNode", null);
      },
      5230: (e, t, i) => {
        i.d(t, { a: () => a });
        var n = i(655),
          o = i(3402),
          s = i(4132),
          r = i(7056);
        class a extends o.Mo {
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
            let i = null;
            "object" == typeof this.props.location
              ? (i = (0, o.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (i = (0, s.Lb)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (i) {
              const t = { u: 0.5 * i.x + 0.5, v: -0.5 * i.y + 0.5 },
                o = e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = o.u),
                (n.properties["anchor-v"] = o.v);
            } else {
              const i = t.ownerDocument,
                o = t.getBoundingClientRect(),
                s = o.left + o.width / 2,
                r = o.top + o.height / 2,
                a = e.currentPanel.m_Rect;
              if (s < a.x || s > a.x + a.width || r < a.y || r > a.y + a.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = i.defaultView.innerWidth,
                c = i.defaultView.innerHeight;
              if (!(c > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (n.properties["anchor-u"] = s / l),
                (n.properties["anchor-v"] = r / c);
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
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      9483: (e, t, i) => {
        i.d(t, { j: () => s });
        var n = i(7294),
          o = i(3402);
        class s extends o.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
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
      },
      5565: (e, t, i) => {
        i.d(t, { g: () => l, x: () => n });
        var n,
          o = i(655),
          s = i(3402),
          r = i(7056),
          a = i(6263);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(n || (n = {}));
        class l extends s.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "rendermodel";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (
              ((i.properties.source = this.props.source),
              (i.properties["texture-id"] = (0, a.Hb)(
                this.props["texture-id"]
              )),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) i.properties.color = e.color;
              else {
                let t = (0, s.kh)(e.color, { r: 0, g: 0, b: 0 });
                i.properties.color = [t.r, t.g, t.b];
              }
              (i.properties.opacity = e.opacity ? e.opacity : 1),
                (i.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (i.properties.wireframe = this.props.wireframe),
              (i.properties.solid = this.props.solid),
              (i.properties.culling = this.props.culling),
              (i.properties["no-depth-write"] = this.props["no-depth-write"]),
              (i.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, i]
            );
          }
        }
        (0, o.gn)([r.ZP], l.prototype, "buildNode", null);
      },
      9495: (e, t, i) => {
        i.d(t, { n: () => l });
        var n = i(655),
          o = i(7294),
          s = i(4132),
          r = i(7056),
          a = i(6263);
        class l extends o.Component {
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
              (this.m_DomRef = o.createRef()),
              (this.m_scalingDomRef = o.createRef()),
              (this.m_CanvasRef = o.createRef()),
              (this.m_DebugPointerRef = o.createRef());
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
            (s.s_.s_bPanelsAreDirty = !0),
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
            let i = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3)
            );
            for (let e = 0; e < i; e++)
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
              o.createElement(
                "vsg-app",
                {
                  class: e.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                o.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                o.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: l.k_EmbeddedDataRows,
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
              i = t.width / this.m_fCurrentScale,
              n = t.height / this.m_fCurrentScale,
              o = { x: e.innerWidth / i, y: e.innerHeight / n },
              r = Math.min(o.x, o.y, 1);
            r != this.m_fCurrentScale &&
              (1 != r
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + r + "); transform-origin: top left"
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = r),
              (s.s_.s_bPanelsAreDirty = !0)),
              s.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, a.k7)(),
                (s.s_.s_bPanelsAreDirty = !1),
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
                let i = e.m_Rect.x,
                  n = e.m_Rect.x + e.m_Rect.width,
                  o = e.m_Rect.y,
                  s = e.m_Rect.y + e.m_Rect.height,
                  r = 1 + 3 * e.getEmbeddedIndex();
                if (e.isExternal() || i >= n || o >= s)
                  for (let e = 0; e < 3; e++) this.setPixel(r + 1, 0, 0, 0, 0);
                else
                  this.setPixel(r, (65280 & i) >> 8, 255 & i, 0),
                    this.setPixel(r + 1, (65280 & n) >> 8, 255 & n, 255 & o),
                    this.setPixel(
                      r + 2,
                      (65280 & s) >> 8,
                      255 & s,
                      (65280 & o) >> 8
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
          setPixel(e, t, i, n, o = 255) {
            (this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = i),
              (this.m_Pixels.data[4 * e + 2] = n),
              (this.m_Pixels.data[4 * e + 3] = o),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e);
          }
        }
        (l.s_Current = null),
          (l.k_EmbeddedDataRows = 1),
          (0, n.gn)([r.ak], l.prototype, "toggleDebugPointer", null),
          (0, n.gn)([r.ak], l.prototype, "onMouseMove", null),
          (0, n.gn)([r.ak], l.prototype, "forceLayoutUpdate", null),
          (0, n.gn)([r.ak], l.prototype, "onMutation", null);
      },
      3402: (e, t, i) => {
        i.d(t, {
          D1: () => l,
          Kg: () => c,
          Mo: () => h,
          QE: () => s,
          Uq: () => r,
          kh: () => a,
          xs: () => d,
        });
        var n = i(7294),
          o = i(6263);
        function s(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function r(e, t) {
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
        class h extends n.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = n.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID = h.s_NextSGID),
              (h.s_NextSGID = (h.s_NextSGID + 1) % 4294967296);
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
            return (0, o.ac)(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              (0, o.k7)();
          }
          componentDidUpdate() {
            (0, o.k7)();
          }
          componentWillUnmount() {
            (0, o.sX)(this.m_SGID),
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
        h.s_NextSGID = 1;
      },
      6263: (e, t, i) => {
        i.d(t, {
          Gv: () => C,
          Hb: () => M,
          Mb: () => u,
          OK: () => D,
          ac: () => h,
          iN: () => R,
          k7: () => E,
          mK: () => k,
          qI: () => w,
          sX: () => T,
        });
        var n = i(655),
          o = i(4507);
        function s(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) {
            if ("undefined" == i) return;
            let e = [];
            for (let t of i.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function r(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) return parseFloat(i);
        }
        function a(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) return parseInt(i);
        }
        function l(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0)
            return (
              "true" == i ||
              (i.length > 0 && 0 != parseInt(i) && !isNaN(parseInt(i)))
            );
        }
        function c(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) return i;
        }
        function d(e, t) {
          return M(c(e, t));
        }
        function h(e, t) {
          let i = { type: e, properties: {} };
          return (
            t.id && (i.properties.id = M(t.id)),
            (i.properties.sgid = a(t, "sgid")),
            i
          );
        }
        function u() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function p(e, t) {
          let [i, n] = (function (e, t) {
              let i = t.buildNode;
              if (i) return i(e, t);
              let n = Object.assign({}, e),
                o = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (o = h("transform", t)),
                    (o.properties.translation = s(t, "translation")),
                    (o.properties.rotation = s(t, "rotation")),
                    (o.properties.scale = s(t, "scale")),
                    (o.properties["curvature-pitch"] = r(t, "curvature-pitch")),
                    (o.properties["parent-path"] = c(t, "parent-path")),
                    (o.properties["parent-origin"] = c(t, "parent-origin")),
                    (o.properties["parent-id"] = d(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (o = h("trackingstatevisibility", t)),
                    (o.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (o.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (o.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (o = h("elasticheadtransform", t)),
                    (o.properties["start-angle-threshold"] = r(
                      t,
                      "start-angle-threshold"
                    )),
                    (o.properties["stop-angle-threshold"] = r(
                      t,
                      "stop-angle-threshold"
                    )),
                    (o.properties["ease-in-time"] = r(t, "ease-in-time")),
                    (o.properties["ease-in-power"] = r(t, "ease-in-power")),
                    (o.properties["ease-out-angle-threshold"] = r(
                      t,
                      "ease-out-angle-threshold"
                    )),
                    (o.properties["ease-out-power"] = r(t, "ease-out-power")),
                    (o.properties["min-angular-velocity"] = r(
                      t,
                      "min-angular-velocity"
                    )),
                    (o.properties["max-angular-velocity"] = r(
                      t,
                      "max-angular-velocity"
                    )),
                    (o.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (o.properties["translation-behavior"] = a(
                      t,
                      "translation-behavior"
                    ));
                  break;
                case "VSG-LINE":
                  (o = h("line", t)),
                    (o.properties["target-id"] = d(t, "target-id")),
                    (o.properties.thickness = r(t, "thickness")),
                    (o.properties["start-buffer"] = r(t, "start-buffer")),
                    (o.properties["end-buffer"] = r(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (o = h("line-constrained-transform", t)),
                    (o.properties["target-id"] = d(t, "target-id")),
                    (o.properties["source-id"] = d(t, "source-id")),
                    (o.properties["source-distance"] = r(t, "source-distance")),
                    (o.properties["target-limit"] = r(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (o = h("callout-transform", t)),
                    (o.properties.offset = s(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  o = h("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (o = h("pin-to-view-transform", t)),
                    (o.properties["offscreen-z-depth"] = r(
                      t,
                      "offscreen-z-depth"
                    )),
                    (o.properties["off-axis-limit"] = r(t, "off-axis-limit")),
                    (o.properties["transition-limit"] = r(
                      t,
                      "transition-limit"
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (o = h("manipulation-transform", t)),
                    (o.properties["is-moving"] = l(t, "is-moving")),
                    (o.properties["parent-path"] = c(t, "parent-path")),
                    (o.properties.translation = s(t, "translation")),
                    (o.properties.rotation = s(t, "rotation")),
                    (o.properties.scale = s(t, "scale"));
              }
              return [n, o];
            })(e, t),
            o = [];
          for (let e = 0; e < t.children.length; e++) {
            let n = t.children.item(e);
            if (n.children) {
              let e = p(i, n);
              e && (o = o.concat(e));
            }
          }
          return i.bShouldAbort
            ? null
            : n
            ? (o.length > 0 && (n.children = o), [n])
            : o.length > 0
            ? 1 == o.length
              ? o
              : [{ children: o }]
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
        function k(e, t, i) {
          (m = e),
            (g = t),
            (v = i),
            console.log("Setting owning overlay key to " + e);
        }
        function R(e, t) {
          return e + "::" + t;
        }
        function M(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : R(C(), e)
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
            : m;
        }
        function T(e) {
          y.push(e), E();
        }
        function w() {
          _ = !0;
        }
        function D(e) {
          var t, i;
          (i = e),
            (null == (t = f) || null == i
              ? t == i
              : t.color_mult == i.color_mult &&
                t.reflection_mult == i.reflection_mult) || ((f = e), E());
        }
        function E() {
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
                    (S = new o.N()),
                    yield S.Init("sg_mailbox", v));
                  let i = {
                    type: "update_scene_graph",
                    owning_overlay_key: C(),
                    scene_graph: t,
                    retired_sgids: y,
                  };
                  S.SendMessage("vrcompositor_systemlayer", i),
                    (b = null),
                    (y = []),
                    (_ = !1);
                }),
              0
            ));
        }
      },
      6374: (e, t, i) => {
        var n = i(655),
          o = i(3402),
          s = i(7056);
        class r extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "texture";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (
              (i.properties.id = this.props.id),
              (i.properties.source = this.props.source),
              [e, i]
            );
          }
        }
        (0, n.gn)([s.ZP], r.prototype, "buildNode", null);
      },
      1917: (e, t, i) => {
        i.d(t, { V: () => r });
        var n = i(655),
          o = i(3402),
          s = i(7056);
        class r extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tint";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (this.props.color)
              if ("string" == typeof this.props.color)
                i.properties.color = this.props.color;
              else {
                let e = (0, o.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                i.properties.color = [e.r, e.g, e.b];
              }
            else i.properties.color = [1, 1, 1];
            return [e, i];
          }
        }
        (0, n.gn)([s.ZP], r.prototype, "buildNode", null);
      },
      2509: (e, t, i) => {
        i.d(t, { g: () => s });
        var n = i(7294),
          o = i(3402);
        class s extends o.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
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
      },
      6701: (e, t, i) => {
        i.d(t, { w: () => a });
        var n,
          o = i(7294),
          s = i(3402),
          r = i(3573);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(n || (n = {}));
        class a extends s.Mo {
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
            let e, t, i;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (i = this.props.transform.scale))
              : ((e = (0, s.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t = (0, r.UU)(
                  (0, r.mT)(
                    (0, s.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                    Math.PI / 180
                  )
                )),
                (i =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, s.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let a = (0, s.Kg)(e),
              l = (0, s.xs)(t),
              c = (0, s.Kg)(i);
            return o.createElement(
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
      3573: (e, t, i) => {
        function n() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function o(e, t) {
          return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
        }
        function s(e, t, i) {
          return {
            x: t.x + e * (i.x - t.x),
            y: t.y + e * (i.y - t.y),
            z: t.z + e * (i.z - t.z),
          };
        }
        function r(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function l(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function c(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function d(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function h(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function u(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            i = 0.5 * e.y,
            n = 0.5 * e.z,
            o = Math.cos(t),
            s = Math.cos(i),
            r = Math.cos(n),
            a = Math.sin(t),
            l = Math.sin(i),
            c = Math.sin(n);
          return {
            w: o * s * r + a * l * c,
            x: a * s * r + o * l * c,
            y: o * l * r - a * s * c,
            z: o * s * c - a * l * r,
          };
        }
        function p(e) {
          let t = e[0][0] + e[1][1] + e[2][2];
          if (t > 0) {
            let i = 2 * Math.sqrt(t + 1);
            return {
              w: 0.25 * i,
              x: (e[1][2] - e[2][1]) / i,
              y: (e[2][0] - e[0][2]) / i,
              z: (e[0][1] - e[1][0]) / i,
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
        function m(e, t) {
          let i = 2 * (e.y * t.z - e.z * t.y),
            n = 2 * (e.z * t.x - e.x * t.z),
            o = 2 * (e.x * t.y - e.y * t.x);
          return {
            x: t.x + e.w * i + e.y * o - e.z * n,
            y: t.y + e.w * n + e.z * i - e.x * o,
            z: t.z + e.w * o + e.x * n - e.y * i,
          };
        }
        function g(e, t, i) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [i.x, i.y, i.z],
          ];
        }
        function v(e) {
          return m(e.rotation, { x: 0, y: 0, z: 1 });
        }
        function _(e) {
          let t = h(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function y(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        function b(e) {
          let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
          return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
        }
        i.d(t, {
          Fs: () => l,
          Fx: () => m,
          JR: () => d,
          LY: () => h,
          M9: () => _,
          Oq: () => n,
          Pd: () => p,
          UU: () => u,
          Zj: () => r,
          aB: () => v,
          dq: () => y,
          eQ: () => a,
          mT: () => c,
          q9: () => s,
          rN: () => b,
          tS: () => g,
          ui: () => o,
        });
      },
      1469: (e, t, i) => {
        i.d(t, { h: () => s });
        var n = i(655),
          o = i(4507);
        class s {
          constructor() {
            (this.m_mailbox = new o.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return s.instance || (s.instance = new s()), s.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((i, o) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                let n = { type: "transform_request", id: e, flPushDistance: t },
                  s = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    n,
                    "transform_response"
                  );
                s.id == e && s.transform
                  ? i(s.transform)
                  : o("requestSGTransform failed");
              })
            );
          }
        }
      },
      4507: (e, t, i) => {
        i.d(t, { N: () => s });
        var n = i(655),
          o = i(7056);
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
              console.log(
                "Connecting vrmailbox " + this.m_sMailboxName + "..."
              );
              let i = "ws://localhost:27062";
              this.m_sWebSecret && (i += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(i)),
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
              i = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (i = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let i of this.m_oWaits[t.type])
                i.nMessageId == t.message_id && (i.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`
                  ),
                (i = !0);
            }
            i || console.log("Received unhandled message: ", t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
          }
          WaitForMessage(e, t) {
            return new Promise((i, n) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: i, nMessageId: t });
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
          SendMessageAndWaitForResponse(e, t, i) {
            let n = Object.assign({}, t);
            return (
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
              (n.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, n),
              this.WaitForMessage(i, n.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let i = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (i.message_id = e.message_id), this.SendMessage(e.returnAddress, i);
          }
        }
        (s.s_nNextMailboxNumber = 1),
          (0, n.gn)([o.ak], s.prototype, "OpenWebSocketToHost", null),
          (0, n.gn)([o.ak], s.prototype, "OnWebSocketOpen", null),
          (0, n.gn)([o.ak], s.prototype, "OnWebSocketClose", null),
          (0, n.gn)([o.ak], s.prototype, "WebSocketSend", null),
          (0, n.gn)([o.ak], s.prototype, "OnWebSocketMessage", null);
      },
      1731: (e, t, i) => {
        var n, o, s, r;
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
        i.d(t, {
          GC: () => R,
          Kf: () => c,
          Kg: () => M,
          LL: () => o,
          Op: () => a,
          Pw: () => b,
          QZ: () => s,
          Uk: () => m,
          XX: () => h,
          Z9: () => u,
          a0: () => C,
          l0: () => S,
          lx: () => k,
          qA: () => n,
          qC: () => p,
          qR: () => g,
          vS: () => T,
          wU: () => l,
          xY: () => _,
          zA: () => w,
          zq: () => r,
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
          })(o || (o = {})),
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
          })(s || (s = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(r || (r = {}));
        let l = 0,
          c = -1;
        var d, h, u, p, m, g, v, _, y, b, S, f, k, R, M, C, T, w;
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
          })(h || (h = {})),
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
          })(u || (u = {})),
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
          })(R || (R = {})),
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
          })(C || (C = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
          })(T || (T = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(w || (w = {}));
      },
      1732: (e, t, i) => {
        i.d(t, { L: () => f });
        var n,
          o = i(655),
          s = i(7294),
          r = i(7056),
          a = i(3868),
          l = i(6321),
          c = i(3947),
          d = i(1428),
          h = i(2893),
          u = i(7062),
          p = i(2188),
          m = i(8052),
          g = i(8325);
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
          ComponentUpdated(e, t, i) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: i }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: i }),
              t == this.props.sourcePath + "/x" && this.setState({ x: i }),
              t == this.props.sourcePath + "/y" && this.setState({ y: i }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: i }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: i }));
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
                s.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                })
              )
            );
          }
          renderBar(e, t, i) {
            let n = { width: String(100 * i) + "%" };
            return s.createElement(
              "div",
              { className: "TriggerBar " + t },
              s.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, a.Xx)(e)
              ),
              s.createElement(
                "div",
                { className: "TriggerBarBackground" },
                s.createElement("div", {
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
                i = this.m_svgRef.current.children.namedItem("SourceCircle"),
                o = this.props.side == n.Right,
                s = this.m_nameRef.current.getBoundingClientRect(),
                r = this.m_containerRef.current.getBoundingClientRect(),
                a = this.GetPosition(),
                l = new d.E9(0, s.top + s.height / 2);
              l.x = o ? r.left - 10 : r.right + 10;
              let c = o ? -20 : 20,
                h = l.x + c + "," + l.y + " " + a.x + "," + a.y;
              e.setAttribute("points", h);
              let u = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
              t.setAttribute("points", u),
                i.setAttribute("cx", a.x + ""),
                i.setAttribute("cy", a.y + "");
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
                    c.I.LocalizeControllerString(
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
        (0, o.gn)([r.ak], v.prototype, "ComponentUpdated", null),
          (0, o.gn)([r.ak], v.prototype, "UpdateSVGPath", null);
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
                    (0, a.Xx)("#SourceInputMode_Position")
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
          renderSource(e, t, i) {
            let n = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return s.createElement(_, {
                  key: n,
                  side: i,
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
                  side: i,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "joystick":
              case "trackpad":
                return s.createElement(b, {
                  key: n,
                  side: i,
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
              i = this.ControllerTypeInfo;
            return (
              "/user/hand/left" == this.props.devicePath
                ? i.input_bindingui_left &&
                  ((e = i.input_bindingui_left.uri),
                  (t = i.input_bindingui_left.transform
                    ? i.input_bindingui_left.transform
                    : ""))
                : "/user/hand/right" == this.props.devicePath
                ? i.input_bindingui_right &&
                  ((e = i.input_bindingui_right.uri),
                  (t = i.input_bindingui_right.transform
                    ? i.input_bindingui_right.transform
                    : ""))
                : i.input_bindingui_left
                ? ((e = i.input_bindingui_left.uri),
                  (t = i.input_bindingui_left.transform
                    ? i.input_bindingui_left.transform
                    : ""))
                : i.input_bindingui_right &&
                  ((e = i.input_bindingui_right.uri),
                  (t = i.input_bindingui_right.transform
                    ? i.input_bindingui_right.transform
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
                    s.createElement(h.Z, { onReflow: this.OnImageReflow })
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              i = this.ControllerTypeInfo,
              o = 0,
              r = [];
            for (let e in i.input_source) {
              let t = i.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let n = this.EstimateSourceHeight(t);
              (o += n),
                r.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: n,
                });
            }
            let a = 8;
            o > 16 && (a = o / 2);
            let l = 0,
              c = r.sort((e, t) => e.order - t.order);
            for (let i of c) {
              l += i.height;
              let o = l > a ? n.Right : n.Left,
                s = this.renderSource(i.sSourcePath, i.inputSource, o);
              s && (o == n.Left ? e.push(s) : t.push(s));
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
        (0, o.gn)([r.ak], S.prototype, "OnImageLoaded", null),
          (0, o.gn)([r.ak], S.prototype, "OnImageReflow", null);
        let f = class extends s.Component {
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
              let i = e.device + t;
              this.m_componentRegistrations[i] &&
                this.m_componentRegistrations[i](e.device, t, e.components[t]);
            }
          }
          RegisterSourceVisualizer(e, t, i) {
            this.m_componentRegistrations[e + t] = i;
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
              i = this.GetSortedDevices();
            if (!i)
              return s.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, a.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                s.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, a.Xx)("#TestController_NoController")
                )
              );
            for (let n of i)
              "TrackedDeviceClass_HMD" != n.class &&
                (n.root_path == this.state.devicePath && (e = n.serial_number),
                t.push({
                  value: n.root_path,
                  sLabel: (0, a.Xx)("#" + n.root_path),
                }));
            return s.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, a.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: s.createElement(m.U5, {
                  leftControls: [
                    s.createElement(g.hu, {
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
                s.createElement(S, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                })
            );
          }
        };
        (0, o.gn)([r.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, o.gn)([r.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, o.gn)([u.Pi], f));
      },
      1884: (e, t, i) => {
        i.d(t, { V: () => c });
        var n = i(655),
          o = i(7294),
          s = i(7056),
          r = i(3868),
          a = i(6321);
        class l extends o.Component {
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
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:"
                )
              ),
              e.pressed)
            )
              for (let i of e.pressed)
                t.push(
                  o.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    i
                  )
                );
            else
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None"
                )
              );
            if (
              (t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Touched:"
                )
              ),
              e.touched)
            )
              for (let i of e.touched)
                t.push(
                  o.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    i
                  )
                );
            else
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None"
                )
              );
            if (
              (t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Supported:"
                )
              ),
              e.supported_buttons)
            )
              for (let i of e.supported_buttons)
                t.push(
                  o.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    i
                  )
                );
            else
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None"
                )
              );
            t.push(
              o.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Axis:"
              )
            );
            for (let i of e.axis)
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  i.x.toFixed(2),
                  " Y: ",
                  i.y.toFixed(2)
                )
              );
            return t;
          }
          render() {
            return this.state.currentState
              ? o.createElement(
                  "div",
                  { className: "FlexRow" },
                  o.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    o.createElement("div", { className: "Label" }, "Left"),
                    this.renderController(this.state.currentState.left)
                  ),
                  o.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    o.createElement("div", { className: "Label" }, "Right"),
                    this.renderController(this.state.currentState.right)
                  ),
                  o.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    o.createElement("div", { className: "Label" }, "HMD"),
                    this.renderController(this.state.currentState.hmd)
                  )
                )
              : o.createElement(
                  "div",
                  { className: "Label" },
                  (0, r.Xx)("#LegacyDebugger_NoApp")
                );
          }
        }
        (0, n.gn)([s.ak], l.prototype, "OnLegacyInputFrame", null);
        class c extends o.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return o.createElement(
              "div",
              { className: "FlexRowWithWrap" },
              o.createElement(
                "div",
                { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
                o.createElement(l, null)
              )
            );
          }
        }
      },
      7968: (e, t, i) => {
        i.d(t, { A: () => n, X: () => l });
        var n,
          o = i(655),
          s = i(7294),
          r = i(7056),
          a = i(6321);
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
              i = a.ZP.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex
              );
            let o = !1;
            if (t) {
              const t =
                null !==
                  (e = a.ZP.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    a.Uk.DeviceBatteryPercentage_Float
                  )) && void 0 !== e
                  ? e
                  : 0;
              (o = a.ZP.VRProperties.GetBoolProperty(
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
            let s = l.GetBatteryIcon(
                t,
                o,
                this.batteryLevelStable,
                n.HorizontalPips
              ),
              r = this.GetRoleIcon(i);
            (s == this.state.batteryIconPath && r == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: s, roleIconPath: r });
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
          static GetBatteryIcon(e, t, i, o) {
            if (!e) return null;
            const s =
              o == n.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? i < 0.15
                ? s + "_charging_red.png"
                : s + "_charging.png"
              : 0 == i
              ? null
              : i < 0.15
              ? s + "_low.png"
              : i < 0.3
              ? s + "_battery_1.png"
              : i < 0.6
              ? s + "_battery_2.png"
              : i < 0.9
              ? s + "_battery_3.png"
              : s + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, i) {
            e == a.XX.Activated &&
              i == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return s.createElement(
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
          (0, o.gn)([r.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, o.gn)([r.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, o.gn)([r.ak], l.prototype, "OnDeviceEvent", null);
      },
      8546: (e, t, i) => {
        i.d(t, { g: () => se, _: () => j });
        var n,
          o,
          s = i(655),
          r = i(6321),
          a = i(7056),
          l = i(7294),
          c = i(1818),
          d = i(197),
          h = i(3868),
          u = i(3446),
          p = i(7062),
          m = i(7679),
          g = i(2188),
          v = i(9392);
        let _ = (n = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.m_refWindowScrollPanel = l.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(n.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var i, n;
            null === (i = this.m_refWindowScrollPanel.current) ||
              void 0 === i ||
              i.scrollTo({
                left:
                  null === (n = this.m_refWindowScrollPanel.current) ||
                  void 0 === n
                    ? void 0
                    : n.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, i, n;
            if (
              !this.state.desktopView ||
              (null === (e = this.state.desktopView) || void 0 === e
                ? void 0
                : e.state.bIsUsingSteamDesktop)
            )
              return null;
            const o =
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
              o &&
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
                    null === (i = this.state.desktopView) || void 0 === i
                      ? void 0
                      : i.state.desktopIndices.map((e) => {
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
                            title: (0, h.Xx)("#Desktop_X", e),
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
                      var t, i, n;
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
                              null === (i = this.state.desktopView) ||
                                void 0 === i
                                ? void 0
                                : i.state.mapWindowInfo.get(e).sHwnd
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
                    title: (0, h.Xx)("#AddView"),
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
                  title: (0, h.Xx)("#Settings_ToggleDarkMode"),
                  onClick: this.props.onToggleDarkMode,
                })
              )
            );
          }
        });
        (_.k_sMailboxName = "systemui_desktoptray"),
          (_ = n = (0, s.gn)([p.Pi], _));
        let y = (o = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.state = {
                bIsUsingSteamDesktop: !1,
                bIsReady: !1,
                desktopIndices: [],
                mapWindowInfo: new Map(),
                sCurrentWindowOverlayKey: "",
              }),
              this.m_mailbox.Init(o.k_sMailboxName).then(() => {});
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
                  (e = u.G3.settings.get("/settings/dashboard/desktopIndex")) &&
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
              u.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e
              );
          }
          onDesktopChange(e) {
            u.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
              i = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));

            )
              i.push(t), t++;
            (null !==
              (e = u.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > i.length &&
              u.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: i });
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
                (e = u.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? d.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? l.createElement(r.sl, {
                    mountedId: (0, r.iN)(d.GN, "valve.steam.desktop"),
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
                          (0, h.Xx)("#NoDesktopFound")
                        )
                      )
                    )
                  : -1 == this.currentDesktopIndex
                  ? l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        r.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height:
                            this.props.fActiveOverlayScale *
                            o.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: r.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        l.createElement(r.at, {
                          id: m.t3,
                          location: r.Ic.TopCenter,
                        }),
                        l.createElement(r.sl, {
                          mountedId: (0, r.iN)(
                            d.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor"
                          ),
                        }),
                        l.createElement(r.at, {
                          id: m.Gl,
                          location: r.Ic.BottomCenter,
                        })
                      )
                    )
                  : l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        r.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height:
                            this.props.fActiveOverlayScale *
                            o.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: r.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        l.createElement(r.at, {
                          id: m.t3,
                          location: r.Ic.TopCenter,
                        }),
                        l.createElement(r.sl, {
                          mountedId: (0, r.iN)(
                            d.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor"
                          ),
                        }),
                        l.createElement(r.at, {
                          id: m.Gl,
                          location: r.Ic.BottomCenter,
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
                        (0, h.Xx)("#DesktopViewsUpdating")
                      )
                    )
                  )
              : null;
          }
        });
        (y.k_sMailboxName = "systemui_desktopview"),
          (y.k_nDesktopPanelBaseHeight = 2),
          (0, s.gn)([g.Fl], y.prototype, "desktopCount", null),
          (0, s.gn)([g.Fl], y.prototype, "sCurrentOverlayKey", null),
          (0, s.gn)([g.Fl], y.prototype, "currentDesktopIndex", null),
          (0, s.gn)([g.Fl], y.prototype, "currentWindowHwnd", null),
          (0, s.gn)([a.ZP], y.prototype, "onDesktopScaleChange", null),
          (0, s.gn)([a.ZP], y.prototype, "onDesktopChange", null),
          (0, s.gn)([a.ZP], y.prototype, "onDesktopViewUpdating", null),
          (0, s.gn)([a.ZP], y.prototype, "onDesktopViewReady", null),
          (0, s.gn)([a.ZP], y.prototype, "onWindowViewChange", null),
          (0, s.gn)([a.ZP], y.prototype, "ShowDesktop", null),
          (y = o = (0, s.gn)([p.Pi], y));
        var b,
          S = i(1058);
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
          (0, s.gn)([a.ak], f.prototype, "loadNextImage", null),
          (0, s.gn)([a.ak], f.prototype, "onLoad", null),
          (0, s.gn)([a.ak], f.prototype, "onError", null),
          (f = b = (0, s.gn)([p.Pi], f)),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(k || (k = {}));
        const R = (e) =>
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
        class M extends l.Component {
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
            const i = this.m_refScrollPanel.current;
            if (!i) return;
            if (i.isThrown)
              return void i.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const n = i.children;
            if (!n || 0 == n.length) return;
            const o =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              s = n[0],
              r = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : i.scrollLeft,
              a = s.getBoundingClientRect().left + i.scrollLeft,
              l = s.clientWidth,
              c = i.clientWidth,
              d = Math.floor(c / l) - 1,
              h = Math.round((r - a + o + 1) / l) + d * e - 0.4999,
              u = h > 0 ? h * l + a - o : 0;
            this.scrollToPosition(u);
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
                    l.createElement(R, {
                      side: k.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(R, {
                      side: k.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    })
                )
            );
          }
        }
        (0, s.gn)([a.ZP], M.prototype, "onAnimationFrame", null),
          (0, s.gn)([a.ZP], M.prototype, "onScroll", null),
          (0, s.gn)([a.ZP], M.prototype, "onLeftButtonClick", null),
          (0, s.gn)([a.ZP], M.prototype, "onRightButtonClick", null);
        let C = class extends l.Component {
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
                      u.G3.probablyOwnedAppkeys.has(this.props.appkey),
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
        (0, s.gn)([a.ZP], C.prototype, "buttonMouseEnter", null),
          (0, s.gn)([a.ZP], C.prototype, "buttonMouseLeave", null),
          (0, s.gn)([a.ZP], C.prototype, "onParentScrollStop", null),
          (C = (0, s.gn)([p.Pi], C));
        const T = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          w = (e) => {
            var t;
            const i = !!e.loading,
              n = null !== (t = e.apps) && void 0 !== t ? t : [];
            let o = "AppCarousel";
            return (
              e.className && (o += " " + e.className),
              (o += " NoAnimations"),
              l.createElement(
                M,
                { additionalClassNames: o, paginationAlignmentOffset: -20 },
                i &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(T, null),
                    l.createElement(T, null),
                    l.createElement(T, null),
                    l.createElement(T, null)
                  ),
                !i &&
                  n.map((e) =>
                    l.createElement(C, Object.assign({ key: e.appkey }, e))
                  )
              )
            );
          };
        var D = i(9015),
          E = i(9669),
          x = i.n(E),
          P = i(4916);
        function I() {
          return x()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
            )
            .then((e) => e.data);
        }
        const L = () =>
          l.createElement(
            c.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                D.y.Instance.openBigPictureStore(null, D.b.QuickStore),
            },
            l.createElement("span", null, (0, h.Xx)("#BrowseAll")),
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
        let O = class extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            I().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, i) {
            P.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              V[t].toLowerCase() + ":" + i,
              `steam.app.${e}`
            ),
              D.y.Instance.openBigPictureStore(e, D.b.QuickStore);
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
              const i = `steam.app.${e.appid}`;
              return {
                key: i,
                appkey: i,
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
        O = (0, s.gn)([p.Pi], O);
        class H extends l.Component {
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
              l.createElement(L, null),
              l.createElement(
                "h2",
                null,
                (0, h.Xx)("#StoreSection_TopSingleplayer")
              ),
              l.createElement(O, { section: V.Singleplayer }),
              l.createElement(
                "h2",
                null,
                (0, h.Xx)("#StoreSection_TopMultiplayer")
              ),
              l.createElement(O, { section: V.Multiplayer }),
              l.createElement("h2", null, (0, h.Xx)("#StoreSection_TopFree")),
              l.createElement(O, { section: V.Free })
            );
          }
        }
        var B;
        const N = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  D.y.Instance.openBigPictureLibrary(null, D.b.QuickLaunch),
              },
              l.createElement("span", null, (0, h.Xx)("#BrowseAll")),
              l.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              })
            ),
          F = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(d.wB),
              },
              l.createElement("span", null, (0, h.Xx)("#WelcomeBrowseStore"))
            ),
          A = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  D.y.Instance.openBigPictureLibrary(null, D.b.QuickLaunch),
              },
              l.createElement("span", null, (0, h.Xx)("#WelcomeInstall"))
            );
        class U extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            I().then((e) => this.setState({ storeData: e }));
          }
          render() {
            let e = [];
            if (this.state.storeData) {
              let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
                  this.state.storeData.apps_singleplayer[t],
                  this.state.storeData.apps_multiplayer[t],
                  this.state.storeData.apps_free[t],
                ]),
                i = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; i.has(t[0].appid); ) t.shift();
                let n = t.shift();
                i.add(n.appid),
                  e.push(
                    l.createElement(
                      c.z,
                      {
                        key: `appid_${n.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          D.y.Instance.openBigPictureStore(
                            n.appid,
                            D.b.QuickLaunch
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
                  (0, h.Xx)("#WelcomeHeader")
                ),
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, h.Xx)("#WelcomeMessage")
                ),
                l.createElement(F, null),
                l.createElement(A, null)
              )
            );
          }
        }
        let W = (B = class extends l.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          launchApplication(e, t, i) {
            var n, o;
            P.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + i,
              e.key
            ),
              null === (o = (n = this.props).onGameLaunched) ||
                void 0 === o ||
                o.call(n, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != u.G3.apps)
              for (let t of u.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  B.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let i = t.library_priority - e.library_priority;
              return 0 == i && (i = t.last_launch - e.last_launch), i;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, i) => {
              let n = i;
              const o = i < B.TOP_ROW_LENGTH;
              return (
                o || (n -= B.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, o, n),
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
            const i =
                0 == t.length ||
                u.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              n =
                0 == t.length ||
                u.G3.settings.get("/settings/dashboard/hideBigPictureLibrary");
            if (i) e = l.createElement(U, null);
            else {
              let i = t.slice(0, B.TOP_ROW_LENGTH),
                o = t.slice(B.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                !n && l.createElement(N, null),
                l.createElement("h2", null, (0, h.Xx)("#RecentlyPlayed")),
                l.createElement(w, { className: "TopRow", apps: i }),
                l.createElement(w, { className: "BottomRow", apps: o })
              );
            }
            return l.createElement(
              m.lL,
              {
                visible: this.props.visible,
                scrollable: !i,
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
          (W = B = (0, s.gn)([p.Pi], W));
        var z = i(505),
          G = i(3371),
          K = i(8052),
          q = i(6192);
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
              i = q.H.Instance.SceneAppName,
              n = q.H.Instance.SceneApplicationState,
              o = q.H.Instance.SceneAppIsHome,
              s = u.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              a = !(
                null !==
                  (e = u.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              d = u.G3.apps && u.G3.apps.find((e) => e.key == t);
            let p = !1;
            switch (n) {
              case r.xY.Quitting:
              case r.xY.Starting:
              case r.xY.Waiting:
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
                l.createElement(f, { appkey: t, title: i, imageUrl: g })
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, i),
                l.createElement(
                  c.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  o
                    ? (0, h.Xx)("#Return_To_Home")
                    : (0, h.Xx)("#Return_To_Game")
                ),
                a &&
                  l.createElement(
                    K.ls,
                    {
                      icon: K.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, h.Xx)("#Controller_Bindings")
                  ),
                a &&
                  l.createElement(
                    K.ls,
                    { icon: K.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, h.Xx)("#App_Video_Settings")
                  ),
                !o &&
                  s &&
                  l.createElement(
                    c.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, h.Xx)("#Exit_Game")
                  )
              )
            );
          }
        }
        (0, s.gn)([a.ak], X.prototype, "onExitApp", null),
          (0, s.gn)([a.ak], X.prototype, "onReturnToGame", null),
          (0, s.gn)(
            [a.ak],
            X.prototype,
            "onOpenAppControllerBindingSettings",
            null
          ),
          (0, s.gn)([a.ak], X.prototype, "onOpenAppVideoSettings", null);
        var Z,
          j,
          Q,
          Y = i(6882),
          J = i(7264),
          $ = i(9942),
          ee = i(7968),
          te = i(1219),
          ie = i(79);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
        })(j || (j = {}));
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
        function oe(e) {
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
        })(Q || (Q = {}));
        let se = (Z = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new r.Nv()),
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
                eShowPopupMenu: Q.None,
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
              u.G3.Init(!1),
              r.hz.getInstance(),
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
                e == r.a0.AppLaunch_Unknown ||
                e == r.a0.AppLaunch_Steam ||
                e == r.a0.Unknown,
              i = u.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
              ),
              n = u.G3.settings.get("/settings/steamvr/enableHomeApp"),
              o = u.G3.settings.get(d.y3);
            ((t || (!i && n)) && !o) ||
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != o ? o : ""),
                500
              ),
              (this.m_appStateChangedAutorunDisposer = (0, g.EH)(() => {
                const e = q.H.Instance.SceneApplicationState != r.xY.None;
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
            var i;
            const n = this.getActiveOverlaySummonKey();
            let o = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (J.G.Instance.playSound(
                  this.state.bShown ? J.y.DashboardOpen : J.y.DashboardClose
                ),
                (o = !0)),
              this.state.bShown &&
                !o &&
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
            const s = this.getActiveOverlayKey(),
              a = s ? this.state.mapOverlayState.get(s) : null,
              l = s ? t.mapOverlayState.get(s) : null,
              c = a && l && a.fScale != l.fScale;
            if (
              ((t.sActiveOverlayID != this.state.sActiveOverlayID || c) &&
                a &&
                this.isDesktopOverlayActive() &&
                (null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onDesktopScaleChange(a.fScale)),
              t.sActiveOverlayID != this.state.sActiveOverlayID &&
                (this.setState({ bKeyboardVisible: !1 }),
                this.isOverlayActive(d.Y8)))
            )
              switch (D.y.Instance.lastBigPictureEntryPoint) {
                case D.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case D.b.QuickStore:
                  this.m_bQuickStoreShouldReturnToBigPicture = !0;
              }
            if (t.bKeyboardVisible != this.state.bKeyboardVisible)
              if (this.state.bKeyboardVisible) {
                let e = this.getActiveOverlayKey();
                VRHTML.VROverlay.ShowKeyboardForOverlay(
                  e,
                  r.Pw.Normal,
                  r.l0.SingleLine,
                  r.vS.Minimal,
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
            let i = 1;
            if (e.startsWith("system.desktop.")) {
              let n = "/settings/dashboard/desktopScale" + e.split(".")[2];
              i = null !== (t = u.G3.settings.get(n)) && void 0 !== t ? t : 1;
            }
            let n = {
              dockLocation: m.RA.Dashboard,
              refOverlayWidget: l.createRef(),
              xfInitial: null,
              fScale: i,
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
              (0, r.OK)({ color_mult: 1, reflection_mult: 1 }),
              this.m_roomViewChangedEventHandle &&
                (this.m_roomViewChangedEventHandle.unregister(),
                (this.m_roomViewChangedEventHandle = null)),
              this.m_linkStreamActiveEventHandle &&
                (this.m_linkStreamActiveEventHandle.unregister(),
                (this.m_linkStreamActiveEventHandle = null));
          }
          static getDashboardDistance() {
            if (Z.s_dashboardUserDistance) return Z.s_dashboardUserDistance;
            const e = u.G3.settings.get(d.o1);
            return e == j.Near
              ? 0.925
              : e == j.Screenshot_Only
              ? 5
              : e == j.Middle
              ? 1.05
              : 1.2;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = u.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2"
                  )) && void 0 !== e
                  ? e
                  : 0),
              i = u.G3.settings.get(d.o1);
            return i == j.Screenshot_Only
              ? -0.57
              : i == j.Near
              ? -0.07 + t
              : i == j.Middle
              ? -0.08 + t
              : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (Z.s_dashboardUserScale) return Z.s_dashboardUserScale;
            let t = 1;
            const i = u.G3.settings.get(d.o1),
              n = i == j.Screenshot_Only;
            return (
              (t = n ? 2 : i == j.Near ? 0.36 : i == j.Middle ? 0.41 : 0.47),
              n ||
                (t *=
                  null !==
                    (e =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetFloatProperty(
                            r.wU,
                            r.Uk.DashboardScale_Float
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
            this.setState((t, i) => {
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
            var t, i;
            this.switchToOverlay(d.gB),
              null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewCreated(e.overlay_key, e.hwnd),
              null === (i = this.m_refDesktopTray.current) ||
                void 0 === i ||
                i.onWindowViewCreated(e.overlay_key, e.hwnd);
          }
          onWindowViewDestroyed(e) {}
          onUpdateWindowList(e) {
            var t;
            let i = new Map();
            e.windows.forEach((e) => {
              i.set(e.hwnd, e);
            }),
              this.setState({
                mapWindows: i,
                bWindowViewEnabled:
                  null === (t = u.G3.settings.get(d.fj)) || void 0 === t || t,
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
          onDockOverlay(e, t, i) {
            var n, o;
            if (
              ((t != m.RA.LeftHand && t != m.RA.RightHand) ||
                this.state.mapOverlayState.forEach((e, i) => {
                  e.dockLocation == t && (e.dockLocation = m.RA.Dashboard);
                }),
              (this.state.mapOverlayState.get(e).dockLocation = t),
              (this.state.mapOverlayState.get(e).xfInitial = i),
              t === m.RA.Dashboard)
            )
              if (e.startsWith(d.r4)) {
                const t = Number.parseInt(e.substring(d.r4.length + 1));
                null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t);
              } else
                e.startsWith(d.Vq) &&
                  (null === (o = this.m_refDesktopView.current) ||
                    void 0 === o ||
                    o.onWindowViewChange(e));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlay();
            if (!e) return null;
            const t = this.getActiveOverlayKey(),
              i = this.state.mapOverlayState.get(t),
              n = i ? i.fScale : 1;
            return l.createElement(r.sl, {
              mountedId: e.mountable_id,
              fDashboardScale: n,
            });
          }
          computeFilteredOverlayTabs() {
            if (this.screenshotMode) return [];
            let e = [];
            for (let t in this.m_mapExternalOverlays) {
              const i = this.m_mapExternalOverlays[t];
              (void 0 === i.icon_overlay_key && null == i.icon_uri) ||
                (i.summon_overlay_key &&
                  i.summon_overlay_key != d.A4 &&
                  i.summon_overlay_key != d.Y8 &&
                  i.summon_overlay_key != d.Xl &&
                  (i.summon_overlay_key.startsWith(d.r4) ||
                    i.summon_overlay_key.startsWith(d.Vq) ||
                    i.summon_overlay_key.startsWith(d.MZ) ||
                    oe(i.summon_overlay_key) ||
                    e.push(i)));
            }
            return (
              (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e
            );
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let i = this.m_mapExternalOverlays[t];
              if (i.summon_overlay_key == e) return i;
            }
            return null;
          }
          switchToOverlay(e, t) {
            var i, n;
            switch (e) {
              case d.Y8:
                D.y.Instance.latchBigPictureEntryPoint();
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
                  i = "bindingui/" + r.qA[(0, r.Op)()];
                this.m_mailbox.SendMessage(i, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = d.RM);
            }
            if (e.startsWith(d.r4)) {
              const t = Number.parseInt(e.substring(d.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onDesktopChange(t)),
                (e = d.gB);
            }
            let o = this.findDashboardTab(e);
            return o
              ? (this.computeFilteredOverlayTabs().includes(o) &&
                  u.G3.SetSettingsValue(
                    d.nf,
                    null !== (n = o.summon_overlay_key) && void 0 !== n ? n : ""
                  ),
                this.setState({ sActiveOverlayID: o.mountable_id }),
                P.e.instance.RecordUIEvent(
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
            P.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = q.H.Instance.SceneAppKey,
              i = q.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              this.switchToOverlay(i ? d.O5 : d.PF)),
              this.setState({ bShown: !0 });
            let n = { type: Z.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n),
              (0, r.qI)();
          }
          hide(e) {
            this.isShown() &&
              (this.setState({ bShown: !1, eShowPopupMenu: Q.None }),
              P.e.instance.EndDashboardSession(e));
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
            D.y.Instance.lastBigPictureEntryPoint == D.b.QuickLaunch &&
            !this.isOverlayActive(d.Y8)
              ? D.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlay(d.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            D.y.Instance.lastBigPictureEntryPoint == D.b.QuickStore &&
            !this.isOverlayActive(d.Y8)
              ? D.y.Instance.openBigPictureThroughLastEntryPoint()
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
              this.m_mailbox.SendMessage(ie.BB, {
                type: ie.KU,
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
              t = u.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              i = u.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let n = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (n = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                r.Uk.DeviceCanPowerOff_Bool
              ));
            const o = q.H.Instance.SceneAppName,
              s = q.H.Instance.SceneAppIsHome;
            let a, c;
            (a = s
              ? (0, h.Xx)("#Exit_SteamVR_Home")
              : o
              ? (0, h.Xx)("#PowerMenuQuitSceneApp", o)
              : (0, h.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (c = s
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg");
            const p = this.findDashboardTab(d.Y8);
            return this.renderPopupMenu(
              l.createElement(
                l.Fragment,
                null,
                p &&
                  l.createElement(m.dy, {
                    label: (0, h.Xx)("#PowerMenuSteamOverlay"),
                    lineBelow: !0,
                    onClick: () => {
                      this.switchToOverlay(d.Y8), this.showPopupMenu(Q.None);
                    },
                  }),
                n &&
                  l.createElement(m.dy, {
                    label: (0, h.Xx)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopupMenu(Q.None);
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
                        this.showPopupMenu(Q.None);
                    },
                  }),
                l.createElement(m.dy, {
                  label: (0, h.Xx)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                i &&
                  l.createElement(m.dy, {
                    label: (0, h.Xx)("#PowerMenuShutdown"),
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
              this.setState({ eShowPopupMenu: Q.None });
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
                !(function (e, t, i) {
                  let n = i.getBoundingClientRect();
                  return (
                    e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
                this.startPopupMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, i, n;
            let o = this.getActiveOverlay();
            if (!o) return null;
            if (
              (o.summon_overlay_key == d.Y8 &&
                (D.y.Instance.lastBigPictureEntryPoint == D.b.QuickLaunch
                  ? (o = this.findDashboardTab(d.O5))
                  : D.y.Instance.lastBigPictureEntryPoint == D.b.QuickStore &&
                    (o = this.findDashboardTab(d.wB))),
              o.summon_overlay_key == d.gB)
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
                    null === (i = this.state.mapWindows.get(e)) || void 0 === i
                      ? void 0
                      : i.title,
                  iconUrl: this.getDashboardIconUri(o),
                });
              }
              return l.createElement(m.Rk, {
                name:
                  "Desktop " +
                  (null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(o),
              });
            }
            return o.summon_overlay_key == d.RM
              ? l.createElement(m.Rk, {
                  name: (0, h.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(m.Rk, {
                  name: o.tab_name,
                  iconUrl: this.getDashboardIconUri(o),
                });
          }
          get isDarkMode() {
            return (
              (this.state.bDesktopDarkMode && this.isOverlayActive(d.gB)) ||
              this.state.bTheaterMode
            );
          }
          get screenshotMode() {
            return u.G3.settings.get(d.o1) == j.Screenshot_Only;
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
            let i = [];
            const n =
              null !== (e = u.G3.settings.get(d.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, r.M9)((0, r.eQ)(e[3], e[0])),
                o = (0, r.M9)((0, r.eQ)(e[1], e[0])),
                s = (0, r.dq)(t, o),
                a = (0, r.Pd)((0, r.tS)(t, o, s)),
                c = (0, r.LY)((0, r.eQ)(e[0], e[3]));
              if (c < 0.4) continue;
              let d = Math.max(1, Math.floor(c));
              for (let t = 0; t < d; t++) {
                let o = (t + 1) / (d + 1),
                  s = (0, r.Oq)();
                (s.rotation = a),
                  (s.translation = (0, r.q9)(o, e[0], e[3])),
                  (s.scale = { x: 0.005, y: 0.005, z: n });
                let c = l.createElement(
                  r.wx,
                  { transform: s },
                  l.createElement(
                    r.Dd,
                    { value: 0.25 },
                    l.createElement(
                      r.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      l.createElement(r.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: r.xj.Backface,
                      })
                    )
                  )
                );
                i.push(c);
              }
              if (i.length > 20) break;
            }
            return i;
          }
          render() {
            var e, t;
            const i =
                null !==
                  (e = u.G3.settings.get(
                    "/settings/dashboard/theaterModeBrightness"
                  )) && void 0 !== e
                  ? e
                  : 1,
              n =
                null !==
                  (t = u.G3.settings.get(
                    "/settings/dashboard/theaterModeReflection"
                  )) && void 0 !== t
                  ? t
                  : 1;
            if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == d.A4,
                t = u.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
                ),
                o = !q.H.Instance.SceneAppIsHome || !t;
              this.screenshotMode
                ? (0, r.OK)({ color_mult: 0, reflection_mult: 0 })
                : o && !e
                ? this.isTheaterMode
                  ? (0, r.OK)({
                      color_mult: Math.pow(i, 2.2),
                      reflection_mult: Math.pow(n, 2.2),
                    })
                  : this.isDarkMode
                  ? (0, r.OK)({ color_mult: 0.1, reflection_mult: 1 })
                  : q.H.Instance.SceneApplicationState !== r.xY.None
                  ? (0, r.OK)({ color_mult: 0.15, reflection_mult: 1 })
                  : (0, r.OK)({ color_mult: 1, reflection_mult: 1 })
                : (0, r.OK)({ color_mult: 1, reflection_mult: 1 });
            } else (0, r.OK)({ color_mult: 1, reflection_mult: 1 });
            const o = this.getActiveOverlaySummonKey(),
              s = this.state.bShown && this.state.setForcingBoundsVisible[o],
              a = s && s.size > 0;
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
            return oe(this.getActiveOverlaySummonKey()) || t
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
            return oe(this.getActiveOverlaySummonKey()) || t
              ? m.Gl
              : this.state.sActiveOverlayID + "_BottomCenter";
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              i = m.IO.Center;
            return l.createElement(m.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: i,
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
              (this.state.eShowPopupMenu == Q.None ||
                this.state.eShowPopupMenu == Q.Windows)
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
                    r.Uk.PeerButtonInfo_String
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
            var i, n, o, s, a, p, g, v;
            const y = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              b = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              S = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
              f = Z.k_nControlBarWidthMeters,
              k =
                null ===
                  (i = u.G3.settings.get(
                    "/settings/dashboard/showPowerOptions"
                  )) ||
                void 0 === i ||
                i,
              R =
                null ===
                  (n = u.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === n ||
                n,
              M =
                null ===
                  (o = u.G3.settings.get(
                    "/settings/dashboard/showQuickStore"
                  )) ||
                void 0 === o ||
                o,
              C = !(
                null !==
                  (s = u.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== s &&
                s
              ),
              T = this.getPeerButtonInfo(),
              w = VRHTML.BIsLinkServer(),
              E = (VRHTML.BIsLinkClient(), this.state.bLinkStreamActive || w),
              x = q.H.Instance.SceneApplicationState,
              P = q.H.Instance.SceneAppIsHome,
              I =
                null ===
                  (a = u.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === a ||
                a
                  ? d.ml
                  : null,
              L = q.H.Instance.SceneAppKey;
            let V = "images/appimage_default.png";
            L && (V = "/app/image?app_key=" + L);
            const O =
                null !== (p = u.G3.settings.get(d.Av)) && void 0 !== p && p,
              H =
                null !== (g = u.G3.settings.get(d.k_)) && void 0 !== g ? g : 0;
            let B = O && H > 0,
              N =
                null !==
                  (v = u.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode"
                  )) &&
                void 0 !== v &&
                v,
              F = !0;
            (this.state.bLinkStreamActive || w) &&
              ((N = !1), w && ((B = !1), (F = !1)));
            let A = { y: -0.25, z: 0 };
            return (
              this.isOverlayActive(d.gB) && (A = { y: -0.4, z: 0 }),
              l.createElement(
                r.Dd,
                { value: y },
                l.createElement(
                  r.VW,
                  { color: b },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: I,
                      width: f,
                      interactive: !1,
                      debug_name: "ControlBarBackground",
                      sampler: r.Vv.SingleTap,
                      reflect: 0.05,
                    },
                    l.createElement("div", {
                      className: "ControlBarBackground",
                    })
                  ),
                  l.createElement(
                    r.wx,
                    { translation: { z: 1e-5 } },
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: I,
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
                              label: (0, h.Xx)("#Menu"),
                              style: m.zk.Small,
                              onClick: () => this.showPopupMenu(Q.Power),
                              onMouseEnter: this.clearPopupMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopupMenuTimeout(500),
                            }),
                          R &&
                            l.createElement(m.NT, {
                              style: m.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, h.Xx)("#Desktops"),
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
                                  label: (0, h.Xx)(
                                    "#X_More_Overlays",
                                    t.length
                                  ),
                                  active:
                                    this.state.eShowPopupMenu ==
                                    Q.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopupMenu(Q.ExternalOverlays),
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
                            label: (0, h.Xx)("#Library"),
                            imageUrl: "/dashboard/images/icons/svr_items.svg",
                            active:
                              this.isOverlayActive(d.O5) ||
                              (this.isOverlayActive(d.Y8) &&
                                D.y.Instance.lastBigPictureEntryPoint ==
                                  D.b.QuickLaunch),
                            style: m.zk.Large,
                            onClick: this.onQuickLaunchButtonClick,
                          }),
                          x != r.xY.None &&
                            l.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              l.createElement(
                                Y.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                l.createElement(
                                  r.VW,
                                  { color: b },
                                  l.createElement(
                                    r.wx,
                                    { translation: { z: 0.02 } },
                                    l.createElement(
                                      r.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: I,
                                      },
                                      l.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        l.createElement(m.NT, {
                                          label: P
                                            ? (0, h.Xx)("#SteamVR_Home")
                                            : (0, h.Xx)("#Now_Playing"),
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
                          M &&
                            l.createElement(m.NT, {
                              label: (0, h.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(d.wB) ||
                                (this.isOverlayActive(d.Y8) &&
                                  D.y.Instance.lastBigPictureEntryPoint ==
                                    D.b.QuickStore),
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
                            N &&
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
                            F &&
                              l.createElement(m.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, h.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            B &&
                              l.createElement(m.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, h.Xx)("#Toggle_Room_View"),
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
                              active: this.state.eShowPopupMenu == Q.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopupMenu(Q.Volume),
                              onHideTray: () => this.showPopupMenu(Q.None),
                              onMouseEnter: this.clearPopupMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopupMenuTimeout(500),
                            })
                          ),
                          C &&
                            l.createElement(m.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(d.A4),
                              enabled: this.hasOverlay(d.A4),
                              label: (0, h.Xx)("#Settings"),
                              style: m.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlay(d.A4),
                            }),
                          E &&
                            T &&
                            l.createElement(m.NT, {
                              imageUrl: T.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, h.Xx)(T.sButtonName),
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
                        onToggleWindowList: () => this.showPopupMenu(Q.Windows),
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
                          this.state.eShowPopupMenu == Q.Volume &&
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
                  r.wx,
                  { translation: A, scale: { y: 1.5, x: 1.5 } },
                  l.createElement(r.sl, {
                    mountedId: (0, r.iN)(d.GN, "system.keyboard"),
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
            const i =
              null !==
                (t = u.G3.settings.get(
                  "/settings/dashboard/allowTheaterMode"
                )) &&
              void 0 !== t &&
              t;
            e.starts_theater_mode && i && this.setState({ bTheaterMode: !0 }),
              (!e.is_dashboard_overlay ||
                (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, i, n;
            const o =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              s =
                null !==
                  (n =
                    null === (i = this.m_refDesktopView.current) || void 0 === i
                      ? void 0
                      : i.desktopCount) && void 0 !== n
                  ? n
                  : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.Y9,
                {
                  tabName: (0, h.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: d.O5,
                },
                l.createElement(W, {
                  visible: this.state.bShown && this.isOverlayActive(d.O5),
                  onGameLaunched: this.onGameLaunched,
                })
              ),
              l.createElement(
                r.Y9,
                {
                  tabName: (0, h.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: d.wB,
                },
                l.createElement(H, {
                  visible: this.state.bShown && this.isOverlayActive(d.wB),
                })
              ),
              l.createElement(
                r.Y9,
                { tabName: (0, h.Xx)("#Now_Playing"), summonOverlayKey: d.PF },
                l.createElement(X, {
                  visible: this.state.bShown && this.isOverlayActive(d.PF),
                  onExitGame: () => this.switchToOverlay(d.O5),
                })
              ),
              l.createElement(
                r.Y9,
                {
                  summonOverlayKey: d.gB,
                  tabName:
                    s > 1 ? (0, h.Xx)("#Desktop_X", o) : (0, h.Xx)("#Desktop"),
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
              const i = new Map(t.mapOverlayState),
                n = Object.assign(
                  Object.assign({}, i.get(this.getActiveOverlayKey())),
                  { fScale: e }
                );
              return { mapOverlayState: i.set(this.getActiveOverlayKey(), n) };
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
            var e, t, i, n;
            const o = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            let s = !1,
              a = !1,
              c = this.getActiveOverlayKey();
            if (c) {
              let e = VRHTML.VROverlay.FindOverlay(c);
              (s =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, r.Z9.EnableControlBarKeyboard)),
                (a =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, r.Z9.EnableControlBarClose));
            }
            const p =
                null !==
                  (e = u.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin"
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              g =
                null !==
                  (t = u.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax"
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              v =
                null ===
                  (i = u.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === i ||
                i
                  ? d.ml
                  : null,
              _ = { x: 0, y: -0.15, z: 0.1 };
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003 },
                },
                l.createElement(
                  r.VW,
                  { color: o },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: v,
                      origin: r.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: this.controlBarAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: r.Vv.SingleTap,
                      reflect: 0.1,
                    },
                    l.createElement("div", {
                      className: "OverlayControlBarBackground",
                    })
                  )
                )
              ),
              l.createElement(
                r.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                l.createElement(
                  r.VW,
                  { color: o },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: v,
                      origin: r.Ic.TopCenter,
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
                          (0, h.Xx)("#Size")
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
                        s &&
                          l.createElement(m.zN, {
                            iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                            title: this.state.bKeyboardVisible
                              ? (0, h.Xx)("#HideKeyboardTooltip")
                              : (0, h.Xx)("#ShowKeyboardTooltip"),
                            tooltipTranslation: _,
                            additionalClassNames: "Keyboard",
                            onClick: this.toggleKeyboard,
                            active: this.state.bKeyboardVisible,
                          }),
                        l.createElement(m.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, h.Xx)("#DockOnLeftController"),
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
                              r.Kg.TrackedControllerRole_LeftHand
                            ) != r.Kf,
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
                          title: (0, h.Xx)("#DockOnRightController"),
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
                              r.Kg.TrackedControllerRole_RightHand
                            ) != r.Kf,
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
                          title: (0, h.Xx)("#FloatInWorld"),
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
                            title: (0, h.Xx)("#CloseOverlay"),
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
            var e, t, i, n, o;
            const s = this.computeFilteredOverlayTabs(),
              a = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null;
            let p = [],
              g = [],
              v =
                null !== (e = u.G3.settings.get(d.FM)) && void 0 !== e ? e : 2;
            if (s.length > v) {
              const e = u.G3.settings.get(d.nf);
              (p = [
                null !== (t = s.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : s[0],
              ]),
                (g = s.filter((e) => !p.includes(e)));
            } else p = s;
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
              R = !1,
              M = this.getActiveOverlayKey();
            if (M) {
              let e = VRHTML.VROverlay.FindOverlay(M);
              (R = !!e && VRHTML.VROverlay.GetFlag(e, r.Z9.EnableControlBar)),
                (k =
                  !this.state.mapOverlayState.has(M) ||
                  this.state.mapOverlayState.get(M).dockLocation ==
                    m.RA.Dashboard),
                (f =
                  this.state.mapOverlayState.has(M) &&
                  this.state.mapOverlayState.get(M).dockLocation == m.RA.World);
            }
            this.state.bLaserMouseSuppressionActive && (R = !1);
            let C = 2,
              T = 2.5;
            const w = u.G3.settings.get("/settings/dashboard/theaterPosition");
            w == j.Near
              ? ((C *= 1), (T *= 1))
              : w == j.Middle
              ? ((C *= 4), (T *= 2.5))
              : w == j.Far && ((C *= 12), (T *= 8));
            const D =
                null !==
                  (i =
                    0.01 *
                    u.G3.settings.get(
                      "/settings/dashboard/theaterVerticalOffsetCm"
                    )) && void 0 !== i
                  ? i
                  : 0,
              E =
                null ===
                  (n = u.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === n ||
                n,
              x = E ? d.ml : null;
            let P,
              I,
              L,
              V,
              O,
              H = 0.05,
              B =
                null !==
                  (o = u.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections"
                  )) &&
                void 0 !== o &&
                o,
              N = this.state.bTheaterMode
                ? { y: -1.2, z: 1 }
                : { y: -1.2, z: 0.15 },
              F = this.state.bTheaterMode
                ? { x: 0.75, y: 0.75, z: 0.75 }
                : { x: 1, y: 1, z: 1 },
              A = !E && this.state.bTheaterMode ? 0.75 : 1,
              U = E ? 1 : 0;
            return (
              this.state.bTheaterMode
                ? ((P = { y: -0.8 * T + D, z: -C }),
                  (I = T),
                  (L = 1.72),
                  (V = 0.82),
                  (O = 10))
                : ((P = { y: R ? -0.9 : -1.03375, z: 0.05 }),
                  (I = 1),
                  (L = 2),
                  (V = 0.68),
                  (O = 5),
                  (B = !1)),
              l.createElement(
                r.eK,
                { bContinuousRelatch: this.state.bPlacementModeActive },
                l.createElement(r.wx, { id: x, translation: { z: S } }),
                l.createElement(
                  r.wx,
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
                    r.wx,
                    {
                      parent_id: this.statusBarAnchorID,
                      translation: { y: 0.008 },
                      scale: { x: A, y: A },
                    },
                    l.createElement(
                      r.VW,
                      { color: a },
                      l.createElement(
                        r.s_,
                        {
                          curvature_origin_id: x,
                          origin: r.Ic.BottomCenter,
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
                              role: r.Kg.TrackedControllerRole_LeftHand,
                              style: ee.A.HorizontalPips,
                            })
                          ),
                          l.createElement(
                            "div",
                            { className: "Section Center" },
                            l.createElement(m.j6, {
                              deviceIndex: r.wU,
                              style: ee.A.VerticalBattery,
                            }),
                            l.createElement(m.M3, null)
                          ),
                          l.createElement(
                            "div",
                            { className: "Section Right" },
                            l.createElement(m.j6, {
                              role: r.Kg.TrackedControllerRole_RightHand,
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
                    r.wx,
                    {
                      id: "active_overlay_transform",
                      translation: P,
                      ref: this.m_refOverlayTransform,
                    },
                    l.createElement(
                      r.wx,
                      { scale: { x: I, y: I } },
                      !f && k && this.renderActiveOverlay(),
                      !f &&
                        !k &&
                        l.createElement(
                          m.lL,
                          {
                            additionalClassNames: R ? "WithControlBar" : "",
                            visible: !0,
                          },
                          l.createElement(
                            "div",
                            { className: "NoDesktopFound" },
                            l.createElement(
                              "h2",
                              null,
                              this.state.mapOverlayState.get(M).dockLocation ==
                                m.RA.LeftHand &&
                                (0, h.Xx)("#DockedOnLeftController"),
                              this.state.mapOverlayState.get(M).dockLocation ==
                                m.RA.RightHand &&
                                (0, h.Xx)("#DockedOnRightController")
                            ),
                            l.createElement(
                              c.z,
                              {
                                className: "ButtonControl",
                                onClick: () => {
                                  this.onDockOverlay(M, m.RA.Dashboard);
                                },
                              },
                              (0, h.Xx)("#DockHere")
                            )
                          )
                        ),
                      B &&
                        l.createElement(
                          r.wx,
                          { translation: { y: V, z: 0.25 } },
                          l.createElement(r.bt, {
                            width: 2.8,
                            height: L,
                            "near-z": -1,
                            "far-z": 1,
                            debug: !1,
                            specular: { color: { r: H, g: H, b: H } },
                            diffuse: { size: O, resolution: 512 },
                          })
                        )
                    )
                  ),
                  R && k && this.renderOverlayControlBar(),
                  l.createElement(
                    r.wx,
                    { translation: N, scale: F },
                    l.createElement(
                      r.wx,
                      { rotation: { x: -35 }, curvature_pitch: -35 },
                      this.renderControlBar(p, g)
                    ),
                    this.state.eShowPopupMenu == Q.Power &&
                      l.createElement(
                        r.wx,
                        {
                          translation: { x: -0.4, y: 0.15, z: 0.05 },
                          rotation: { y: 19 * U },
                        },
                        l.createElement(
                          r.s_,
                          {
                            curvature_origin_id: x,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: r.Ic.BottomRight,
                            debug_name: "Power Menu",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPowerMenu()
                        )
                      ),
                    this.state.eShowPopupMenu == Q.ExternalOverlays &&
                      l.createElement(
                        r.wx,
                        {
                          translation: { x: 0.2, y: 0.15, z: 0.05 },
                          rotation: { y: 6 * U },
                        },
                        l.createElement(
                          r.s_,
                          {
                            curvature_origin_id: x,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: r.Ic.BottomRight,
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
                                      this.showPopupMenu(Q.None);
                                  },
                                })
                              ),
                              " "
                            )
                          )
                        )
                      ),
                    this.state.eShowPopupMenu == Q.Windows &&
                      l.createElement(
                        r.wx,
                        {
                          translation: { x: 1.25, y: -0.1, z: 0.35 },
                          rotation: { y: -16 * U },
                        },
                        l.createElement(
                          r.s_,
                          {
                            curvature_origin_id: x,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: r.Ic.BottomRight,
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
                                      this.showPopupMenu(Q.None);
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
          (se.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (se.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (se.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (se.k_sWindowViewCreatedMessage = "window_view_created"),
          (se.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (se.k_sUpdateWindowListMessage = "update_window_list"),
          (se.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (se.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (se.k_sLaserMouseSuppressionUpdate =
            "laser_mouse_suppression_update"),
          (se.k_nControlBarWidthMeters = 2.667),
          (se.s_dashboardUserDistance = void 0),
          (se.s_dashboardUserScale = void 0),
          (0, s.gn)(
            [a.ak],
            se.prototype,
            "OnSetDashboardFadeSuppression",
            null
          ),
          (0, s.gn)([a.ak], se.prototype, "onRoomViewChanged", null),
          (0, s.gn)([a.ak], se.prototype, "onLinkStreamActiveEvents", null),
          (0, s.gn)(
            [a.ak],
            se.prototype,
            "OnSetDashboardForceBoundsVisible",
            null
          ),
          (0, s.gn)(
            [a.ak],
            se.prototype,
            "onLaserMouseSuppressionUpdate",
            null
          ),
          (0, s.gn)([a.ak], se.prototype, "onDashboardOverlayCreated", null),
          (0, s.gn)([a.ak], se.prototype, "onDashboardOverlayDestroyed", null),
          (0, s.gn)([a.ak], se.prototype, "onUpdateDashboardTabs", null),
          (0, s.gn)([a.ak], se.prototype, "onWindowViewCreated", null),
          (0, s.gn)([a.ak], se.prototype, "onWindowViewDestroyed", null),
          (0, s.gn)([a.ak], se.prototype, "onUpdateWindowList", null),
          (0, s.gn)([a.ak], se.prototype, "onUpdateDebugInfo", null),
          (0, s.gn)([a.ak], se.prototype, "onDockOverlay", null),
          (0, s.gn)([a.ak], se.prototype, "show", null),
          (0, s.gn)([a.ak], se.prototype, "hide", null),
          (0, s.gn)([a.ak], se.prototype, "setPlacementModeActive", null),
          (0, s.gn)([a.ak], se.prototype, "onToggleRoomView", null),
          (0, s.gn)([a.ak], se.prototype, "onQuickLaunchButtonClick", null),
          (0, s.gn)([a.ak], se.prototype, "onQuickStoreButtonClick", null),
          (0, s.gn)([a.ak], se.prototype, "onRecenterClick", null),
          (0, s.gn)([a.ak], se.prototype, "renderPowerMenu", null),
          (0, s.gn)([a.ak], se.prototype, "startPopupMenuTimeout", null),
          (0, s.gn)([a.ak], se.prototype, "clearPopupMenuTimeout", null),
          (0, s.gn)([a.ak], se.prototype, "showPopupMenu", null),
          (0, s.gn)([a.ak], se.prototype, "popupMenuMouseLeave", null),
          (0, s.gn)([a.ak], se.prototype, "popupMenuMouseUp", null),
          (0, s.gn)([g.Fl], se.prototype, "isDarkMode", null),
          (0, s.gn)([g.Fl], se.prototype, "screenshotMode", null),
          (0, s.gn)([g.Fl], se.prototype, "isTheaterMode", null),
          (0, s.gn)(
            [a.ak],
            se.prototype,
            "renderExternalOverlayControlBarButton",
            null
          ),
          (0, s.gn)([a.ak], se.prototype, "isDesktopTrayActive", null),
          (0, s.gn)([a.ak], se.prototype, "isDesktopOverlayActive", null),
          (0, s.gn)([a.ak], se.prototype, "handlePeerButton", null),
          (0, s.gn)([a.ak], se.prototype, "isDesktopViewVisible", null),
          (0, s.gn)([a.ak], se.prototype, "onGameLaunched", null),
          (0, s.gn)([a.ak], se.prototype, "toggleKeyboard", null),
          (0, s.gn)([a.ak], se.prototype, "onKeyboardClosed", null),
          (0, s.gn)([g.Fl], se.prototype, "activeOverlayScale", null),
          (0, s.gn)([a.ak], se.prototype, "onActiveOverlayScaleChange", null),
          (0, s.gn)([a.ak], se.prototype, "onActiveOverlayClosed", null),
          (0, s.gn)([g.LO], se, "s_dashboardUserDistance", void 0),
          (0, s.gn)([g.LO], se, "s_dashboardUserScale", void 0),
          (se = Z = (0, s.gn)([p.Pi], se));
      },
      7679: (e, t, i) => {
        i.d(t, {
          B8: () => z,
          D6: () => Y,
          Gl: () => E,
          IO: () => U,
          M3: () => H,
          NT: () => G,
          RA: () => I,
          Rk: () => q,
          WR: () => x,
          dw: () => W,
          dy: () => B,
          j4: () => X,
          j6: () => K,
          lL: () => P,
          qo: () => V,
          t3: () => D,
          wC: () => O,
          z: () => Z,
          zN: () => J,
          zk: () => A,
        });
        var n,
          o,
          s,
          r = i(655),
          a = i(7294),
          l = i(7056),
          c = i(3868),
          d = i(1818),
          h = i(7264),
          u = i(1058),
          p = i(6321),
          m = i(197),
          g = i(2188),
          v = i(6882),
          _ = i(7062),
          y = i(9392),
          b = i(1219),
          S = i(4435),
          f = i(9981),
          k = i(7968),
          R = i(3446),
          M = i(6547),
          C = i(8322),
          T = i.n(C),
          w = i(1307);
        const D = "DashboardPanelTopCenter",
          E = "DashboardPanelBottomCenter",
          x = "DashboardControlStrip",
          P = (e) => {
            var t, i, n;
            const o = a.useRef(null),
              s = a.useRef(null);
            a.useEffect(() => {
              var e, t;
              return null === (e = o.current) || void 0 === e
                ? void 0
                : e.setFloatingViewStack(
                    null === (t = s.current) || void 0 === t
                      ? void 0
                      : t.viewStack
                  );
            });
            const r = null === (t = e.scrollable) || void 0 === t || t,
              l =
                null !== (i = e.foregroundReflectMultiplier) && void 0 !== i
                  ? i
                  : 1,
              c =
                null ===
                  (n = R.G3.settings.get(
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
                  target_dpi_panel_id: x,
                  target_dpi_multiplier: 2,
                  reflect: 0.01,
                  sampler: p.Vv.SingleTap,
                },
                a.createElement(p.at, { id: D, location: p.Ic.TopCenter }),
                a.createElement(
                  M.vz,
                  { ref: o },
                  a.createElement("div", {
                    className: (0, u.LJ)(
                      "DashboardPanelBackground",
                      e.additionalClassNames
                    ),
                    style: e.additionalStyle,
                  })
                ),
                a.createElement(p.at, { id: E, location: p.Ic.BottomCenter })
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
                    scrollable: r,
                    target_dpi_panel_id: x,
                    reflect: 0.2 * l,
                  },
                  a.createElement(
                    M.sC,
                    { ref: s },
                    a.createElement(
                      d.q,
                      null,
                      a.createElement(
                        y.P,
                        {
                          scrollDirection: r ? y.I.Vertical : y.I.None,
                          className: (0, u.LJ)(
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
        var I;
        function L(e) {
          switch (e) {
            case I.LeftHand:
              return "/user/hand/left";
            case I.RightHand:
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
        })(I || (I = {}));
        let V = (n = class extends a.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.GetDefaultScaleForLocation(),
                xfTransform: (0, p.Oq)(),
                sParent: L(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = p.Kf),
              (this.m_moveDeviceRole = p.Kg.TrackedControllerRole_Invalid);
          }
          GetDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case I.Dashboard:
              case I.LeftHand:
              case I.RightHand:
                return 0.25;
              case I.World:
                return 0.5;
            }
          }
          SetInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case I.LeftHand:
                case I.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, n.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case I.World: {
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
              case I.Dashboard:
              case I.LeftHand:
              case I.RightHand:
                this.setState({ xfTransform: e });
                break;
              case I.World:
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
                  sParent: L(this.props.dockLocation),
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
            let i = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              p.Kg.TrackedControllerRole_RightHand
            ) != p.Kf &&
              (i = VRHTML.GetPose("/user/hand/right", p.zq.Standing));
            let o = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                i && o.push({ pose: i, location: I.RightHand });
                break;
              case "/user/hand/right":
                t && o.push({ pose: t, location: I.LeftHand });
                break;
              case "/user/head":
                t && o.push({ pose: t, location: I.LeftHand }),
                  i && o.push({ pose: i, location: I.RightHand });
            }
            if (0 == o.length)
              return void setTimeout(this.computeDestination, n.sfMovePulseMS);
            let s = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform
            );
            o.forEach((e) => {
              let t = VRHTML.ChangeBasis(s, e.pose.xfDeviceToAbsoluteTracking);
              (0, p.LY)(t.translation) > n.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (w.LJ.Instance.triggerHaptic(w.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: I.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == I.World &&
                      this.state.destination == I.World)) &&
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
              i = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.zq.Standing);
            switch (this.props.dockLocation) {
              case I.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    p.Kg.TrackedControllerRole_LeftHand
                  ) == p.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", p.zq.Standing);
                break;
              case I.RightHand:
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
              o = VRHTML.ChangeBasis(n, i.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: o,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == I.World,
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
              this.state.destination == I.LeftHand
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
              this.state.destination == I.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  p.Kg.TrackedControllerRole_RightHand
                ) == p.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", p.zq.Standing);
            }
            let i,
              n = {
                xfDeviceToAbsoluteTracking: (0, p.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: p.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case I.LeftHand:
                i = e;
                break;
              case I.RightHand:
                i = t;
                break;
              default:
                i = n;
            }
            let o = VRHTML.GetPose(this.m_nMoveDeviceIndex, p.zq.Standing),
              s = VRHTML.MultiplyTransforms(
                o.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              r = VRHTML.ChangeBasis(s, i.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: r,
              sParent: L(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                r
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let i = { x: 0, y: 0 };
            try {
              i = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let o =
                (null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1) * this.state.fOverlayScale,
              s = (o * i.y) / i.x;
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
                    height: s,
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
            let r = s + n.sfOverlayTrayHeight,
              l = Math.max(o, 0.175),
              c = r / 2 - n.sfOverlayTrayHeight;
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
                  scale: { x: l, y: r, z: 0.008 },
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
                  height: s,
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
                          I.Dashboard
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
                        this.state.destination == I.LeftHand
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
        function O() {
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
          (0, r.gn)([l.ak], V.prototype, "onOverlayScaleChanged", null),
          (0, r.gn)([l.ak], V.prototype, "computeDestination", null),
          (0, r.gn)([l.ak], V.prototype, "startMove", null),
          (0, r.gn)([l.ak], V.prototype, "endMove", null),
          (V = n = (0, r.gn)([_.Pi], V));
        class H extends a.Component {
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
              i = null;
            const n = t.toLowerCase(),
              o = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
            return (
              o >= 0 && ((i = t.substring(o)), (t = t.substring(0, o - 1))),
              a.createElement(
                "div",
                { className: "ClockContainer" },
                a.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  a.createElement("span", { className: "Suffix" }, i)
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
        (0, r.gn)([l.ak], H.prototype, "updateTime", null);
        let N = (o = class extends a.Component {
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
              i = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              n =
                null ===
                  (e = R.G3.settings.get(
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
                  { translation: i },
                  a.createElement(
                    p.s_,
                    {
                      visibility: t ? p.Bl.Visible : p.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: x,
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
          (0, r.gn)([g.Fl], N.prototype, "isShowingTooltip", null),
          (0, r.gn)([g.aD.bound], N.prototype, "show", null),
          (0, r.gn)([g.aD.bound], N.prototype, "hide", null),
          (0, r.gn)([g.LO], N, "s_CurrentlyShownTooltip", void 0),
          (N = o = (0, r.gn)([_.Pi], N));
        class F extends a.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !F.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  F.k_rsThumbnailHashesToInvert.indexOf(T().hash(e)) >= 0 &&
                  (t = !0),
                F.s_mapShouldInvertThumbnail.set(e, t);
            }
            return F.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              i = F.ShouldInvertThumbnail(this.props.src);
            return a.createElement(
              "div",
              { className: "Icon" },
              t &&
                a.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              a.createElement("img", {
                className: (0, u.LJ)(["BlackToWhite", i]),
                src: this.props.src,
              })
            );
          }
        }
        var A, U;
        (F.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "0ea4aa3d9529b716f0f1957684247dee",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (F.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(A || (A = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(U || (U = {}));
        const W = (e) =>
          a.createElement(
            "div",
            { className: (0, u.LJ)("ControlBarGroup", A[e.style]) },
            e.children
          );
        let z = class extends a.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = a.createRef());
          }
          onMouseEnter() {
            var e, t, i;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (i = (t = this.props).onMouseEnter) ||
                void 0 === i ||
                i.call(t);
          }
          onMouseLeave() {
            var e, t, i;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (i = (t = this.props).onMouseLeave) ||
                void 0 === i ||
                i.call(t);
          }
          render() {
            var e;
            return a.createElement(
              d.z,
              {
                className: (0, u.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  U[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : U.Center
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
                pressSoundEffect: h.y.ControlBarButtonPress,
                releaseSoundEffect: h.y.ControlBarButtonRelease,
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
              a.createElement(F, { src: this.props.imageUrl })
            );
          }
        };
        (0, r.gn)([l.ak], z.prototype, "onMouseEnter", null),
          (0, r.gn)([l.ak], z.prototype, "onMouseLeave", null),
          (z = (0, r.gn)([_.Pi], z));
        const G = (e) =>
          a.createElement(
            W,
            { style: e.style },
            a.createElement(z, Object.assign({}, e))
          );
        class K extends a.Component {
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
              i = p.Kf;
            if (
              (void 0 !== this.props.role
                ? (i = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (i = this.props.deviceIndex),
              i != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = i)),
              i != p.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  i,
                  p.Uk.DeviceProvidesBatteryStatus_Bool
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  i,
                  p.Uk.DeviceBatteryPercentage_Float
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  i,
                  p.Uk.DeviceIsCharging_Bool
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + K.kBatteryLevelHysteresis,
                        1
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - K.kBatteryLevelHysteresis,
                        0
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                i,
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
          onDeviceEvent(e, t, i) {
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
        (K.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([l.ak], K.prototype, "updateControllerStatus", null),
          (0, r.gn)([l.ak], K.prototype, "onBatteryStateChanged", null),
          (0, r.gn)([l.ak], K.prototype, "onDeviceRoleChanged", null),
          (0, r.gn)([l.ak], K.prototype, "onDeviceEvent", null),
          a.Component;
        const q = (e) =>
          a.createElement(
            "div",
            { className: "Title" },
            a.createElement(F, { src: e.iconUrl, shadow: !0 }),
            a.createElement("span", { className: "NoWrapText" }, e.name)
          );
        class X extends a.Component {
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
              i = Math.asin(t) / Math.PI,
              n =
                null ===
                  (e = R.G3.settings.get(
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
                    y: 0.01 * Math.abs(i),
                    z: -0.03 * Math.abs(i),
                  },
                  rotation: { y: 15 * i, z: 2 * i },
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
                          target_dpi_panel_id: x,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        a.createElement(
                          "div",
                          {
                            className: (0, u.LJ)(
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
                            target_dpi_panel_id: x,
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
        (0, r.gn)([l.ak], X.prototype, "onResizeObserved", null),
          (0, r.gn)([l.ak], X.prototype, "updateBackgroundSize", null),
          (0, r.gn)([l.ak], X.prototype, "onPortalDidMount", null);
        let Z = class extends a.Component {
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
              R.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume"
              ) && R.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!R.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice"
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return a.createElement(
              X,
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
                a.createElement(j, {
                  title: (0, c.Xx)("#MicrophoneVolume"),
                  value: S.f.Instance.microphoneVolume,
                  onChange: S.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: b.px.OnHandle,
                  additionalClassName: (0, u.LJ)([
                    "Muted",
                    S.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: h.y.VolumePreview,
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
                  a.createElement(j, {
                    title: (0, c.Xx)("#AudioMirrorVolume"),
                    value: S.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: S.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: b.px.OnHandle,
                    additionalClassName: (0, u.LJ)([
                      "Muted",
                      S.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: h.y.VolumePreview,
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
                a.createElement(j, {
                  title: (0, c.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: S.f.Instance.volume,
                  onChange: S.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: b.px.OnHandle,
                  additionalClassName: (0, u.LJ)(["Muted", S.f.Instance.muted]),
                  interactionEndSoundEffect: h.y.VolumePreview,
                })
              )
            );
          }
        };
        (0, r.gn)([l.ak], Z.prototype, "onSliderMouseEnter", null),
          (0, r.gn)([l.ak], Z.prototype, "onSliderMouseLeave", null),
          (0, r.gn)([l.ak], Z.prototype, "onSliderFinalChange", null),
          (0, r.gn)([g.Fl], Z.prototype, "showAudioMirrorControls", null),
          (0, r.gn)([g.Fl], Z.prototype, "enableAudioMirrorControls", null),
          (Z = (0, r.gn)([_.Pi], Z));
        let j = class extends a.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, i;
            this.setState({ bHover: !0 }),
              null === (i = (t = this.props).onMouseEnter) ||
                void 0 === i ||
                i.call(t, e);
          }
          onMouseLeave(e) {
            var t, i;
            this.setState({ bHover: !1 }),
              null === (i = (t = this.props).onMouseLeave) ||
                void 0 === i ||
                i.call(t, e);
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
        (0, r.gn)([l.ak], j.prototype, "onMouseEnter", null),
          (0, r.gn)([l.ak], j.prototype, "onMouseLeave", null),
          (0, r.gn)([l.ak], j.prototype, "onInteractionStart", null),
          (0, r.gn)([l.ak], j.prototype, "onInteractionEnd", null),
          (j = (0, r.gn)([_.Pi], j));
        let Q = class extends a.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = a.createRef());
          }
          onMouseEnter(e) {
            var t, i, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (n = (i = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(i, e);
          }
          onMouseLeave(e) {
            var t, i, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (n = (i = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(i, e);
          }
          render() {
            return a.createElement(
              d.z,
              Object.assign({}, this.props, {
                className: (0, u.LJ)(
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
        (0, r.gn)([l.ak], Q.prototype, "onMouseEnter", null),
          (0, r.gn)([l.ak], Q.prototype, "onMouseLeave", null),
          (Q = (0, r.gn)([_.Pi], Q));
        let Y = (s = class extends a.Component {
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
            var t, i;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              null === (i = (t = this.props).onShowTray) ||
                void 0 === i ||
                i.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, p.JR)((0, p.Zj)(t, this.m_vecOriginalMousePosition)) >
              s.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
            var e, t, i, n;
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
                (null === (i = (t = this.props).onHideTray) ||
                  void 0 === i ||
                  i.call(t)),
              null === (n = this.slider) ||
                void 0 === n ||
                n.stopExternalSliding();
          }
          render() {
            return a.createElement(z, {
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
        (Y.MIN_DRAG_THRESHOLD = 35),
          (0, r.gn)([l.ak], Y.prototype, "onButtonMouseDown", null),
          (0, r.gn)([l.ak], Y.prototype, "onWindowMouseMove", null),
          (0, r.gn)([l.ak], Y.prototype, "onWindowMouseUp", null),
          (Y = s = (0, r.gn)([_.Pi], Y));
        const J = (e) => {
          const t = a.useRef();
          return a.createElement(
            d.z,
            {
              className: (0, u.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl],
                e.additionalClassNames
              ),
              onClick: e.onClick,
              onMouseEnter: () => {
                var i;
                null === (i = t.current) || void 0 === i || i.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var i;
                null === (i = t.current) || void 0 === i || i.hide(),
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
      79: (e, t, i) => {
        i.d(t, { BB: () => h, KU: () => u, Y6: () => p });
        var n,
          o = i(655),
          s = i(7294),
          r = i(7056),
          a = i(6321),
          l = i(3868),
          c = i(7062),
          d = i(1058);
        const h = "resetuniverseorigincountdown",
          u = "begin_reset_universe_origin_countdown";
        let p = (n = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new a.Nv()),
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
              null === a.ZP || void 0 === a.ZP
                ? void 0
                : a.ZP.VRApplications.GetSceneApplicationKey();
            let i = !t || "system.generated.xrservice" == t;
            i
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === a.ZP ||
                void 0 === a.ZP ||
                a.ZP.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                in_dash_mode: i,
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
            return s.createElement(
              a.s_,
              {
                width: void 0,
                height: n.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              s.createElement(
                "div",
                {
                  className: (0, d.LJ)("ResetSeatedCountdownParent", [
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
              i =
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
              ? (n && ((t *= 2), (i *= 2)),
                s.createElement(
                  a.eK,
                  { bContinuousRelatch: !0 },
                  s.createElement(
                    a.wx,
                    { translation: { y: -0.05, z: -t }, scale: i },
                    this.renderPanel()
                  )
                ))
              : s.createElement(
                  a.wx,
                  { parent_path: "/user/head" },
                  s.createElement(
                    a.wx,
                    { translation: { y: -0.05, z: -t }, scale: i },
                    this.renderPanel()
                  )
                );
          }
        });
        (p.kPanelHeight = 0.2),
          (p.kPixelWidth = 400),
          (p.kFadeDurationMs = 1e3),
          (0, o.gn)(
            [r.ak],
            p.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null
          ),
          (0, o.gn)([r.ak], p.prototype, "CountdownTick", null),
          (0, o.gn)([r.ak], p.prototype, "HideOverlay", null),
          (p = n = (0, o.gn)([c.Pi], p));
      },
      9867: (e, t, i) => {
        var n,
          o = i(655),
          s = i(7294),
          r = i(3935),
          a = i(7056),
          l = i(6321),
          c = i(7062),
          d = i(1058);
        let h = (n = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_fadeFinishTimeout = 0),
              (this.m_countdownTimeout = 0),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("roomsetup-ui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "floorHeightUpdated",
                  this.OnFloorHeightUpdated
                );
              }),
              (this.state = {
                visible: !1,
                fading: !1,
                secondsRemaining: 0,
                floorId: null,
              });
          }
          componentWillUnmount() {
            clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
          }
          OnFloorHeightUpdated(e) {
            null ===
            ("number" == typeof e.floorHeightAtHead
              ? e.floorHeightAtHead
              : null)
              ? this.StartFadeout()
              : e.floorId != this.state.floorId &&
                "number" == typeof e.floorId &&
                this.StartCountdown(e.floorId);
          }
          StartCountdown(e) {
            console.log("StartCountdown " + JSON.stringify(e)),
              this.setState({
                visible: !0,
                fading: !1,
                secondsRemaining: 5,
                floorId: e,
              }),
              clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
          }
          CountdownTick() {
            this.setState({
              secondsRemaining: this.state.secondsRemaining - 1,
            }),
              this.state.secondsRemaining <= 0
                ? (clearTimeout(this.m_countdownTimeout),
                  (this.m_countdownTimeout = 0),
                  this.onPanelTimeout())
                : (clearTimeout(this.m_countdownTimeout),
                  (this.m_countdownTimeout = setTimeout(
                    this.CountdownTick,
                    1e3
                  )));
          }
          StartFadeout() {
            this.state.visible &&
              !this.state.fading &&
              (clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideImmediate,
                n.kFadeDurationMs
              )),
              this.setState({ visible: !0, fading: !0 }));
          }
          HideImmediate() {
            clearTimeout(this.m_fadeFinishTimeout),
              clearTimeout(this.m_countdownTimeout),
              (this.m_fadeFinishTimeout = 0),
              (this.m_countdownTimeout = 0),
              this.setState({ visible: !1, fading: !1 });
          }
          onAcceptButtonClicked() {
            this.m_mailbox.SendMessage("roomsetup-controller", {
              type: "onAcceptButtonClicked",
            }),
              this.HideImmediate();
          }
          onPanelTimeout() {
            this.m_mailbox.SendMessage("roomsetup-controller", {
              type: "onAcceptPanelTimeout",
            }),
              this.StartFadeout();
          }
          render() {
            return this.state.visible
              ? (console.log(
                  "Render: fading " + JSON.stringify(this.state.fading)
                ),
                s.createElement(
                  l.wx,
                  { parent_path: "/user/head" },
                  s.createElement(
                    l.wx,
                    {
                      translation: {
                        y: -0.4 * n.kOverlayMetersScaler,
                        z: -1 * n.kOverlayMetersScaler,
                      },
                      rotation: { x: -28 },
                    },
                    s.createElement(
                      l.s_,
                      { width: void 0, height: 0.15, interactive: !0 },
                      s.createElement(
                        "div",
                        {
                          className: (0, d.LJ)("ResetSeatedCountdownParent", [
                            "Fading",
                            this.state.fading,
                          ]),
                        },
                        s.createElement(
                          "div",
                          { className: "FlexColumn" },
                          s.createElement(
                            "div",
                            {
                              className: "Label IPDSettingTextDesc",
                              style: { padding: "10px" },
                            },
                            " Floor detected "
                          ),
                          s.createElement(
                            "div",
                            { className: "FlexRow" },
                            s.createElement(
                              "div",
                              {
                                className: "Label ButtonControl",
                                onClick: this.onAcceptButtonClicked,
                              },
                              " Accept to Recenter (",
                              this.state.secondsRemaining.toFixed(0),
                              ") "
                            )
                          )
                        )
                      )
                    )
                  )
                ))
              : null;
          }
        });
        var u;
        (h.kFadeDurationMs = 1e3),
          (h.kOverlayMetersScaler = 0.75),
          (0, o.gn)([a.ak], h.prototype, "OnFloorHeightUpdated", null),
          (0, o.gn)([a.ak], h.prototype, "StartCountdown", null),
          (0, o.gn)([a.ak], h.prototype, "CountdownTick", null),
          (0, o.gn)([a.ak], h.prototype, "StartFadeout", null),
          (0, o.gn)([a.ak], h.prototype, "HideImmediate", null),
          (0, o.gn)([a.ak], h.prototype, "onAcceptButtonClicked", null),
          (0, o.gn)([a.ak], h.prototype, "onPanelTimeout", null),
          (h = n = (0, o.gn)([c.Pi], h)),
          (function (e) {
            (e[(e.FindFloor_Touch = 0)] = "FindFloor_Touch"),
              (e[(e.FindFloor_Height = 1)] = "FindFloor_Height"),
              (e[(e.Room_Walls = 2)] = "Room_Walls"),
              (e[(e.SaveSuccessful = 3)] = "SaveSuccessful"),
              (e[(e.SaveFailed = 4)] = "SaveFailed");
          })(u || (u = {}));
        class p extends s.Component {
          constructor(e) {
            if ((super(e), !VRHTML)) throw new Error("VRHTML is required.");
            (this.state = {
              phase: u.FindFloor_Touch,
              qRawFromRoom: { w: 1, x: 0, y: 0, z: 0 },
              qRoomFromRaw: { w: 1, x: 0, y: 0, z: 0 },
              vMin: { x: 0, y: 0, z: 0 },
              vMax: { x: 0, y: 0, z: 0 },
              vStartingHmdPosition: { x: 0, y: 0, z: 0 },
              fUserHeight: 196,
            }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame
              ));
          }
          componentDidMount() {
            this.computeDirectionFromHeadset(), this.resetBoundsToDefault(!0);
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.animationFrameHandle),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperone.ForceBoundsVisible(!1),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.HideWorkingSetPreview(),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.RevertWorkingCopy();
          }
          updateLimitsUsingDevice(e) {
            let t = null;
            try {
              t = VRHTML.GetPose(e, l.zq.RawAndUncalibrated);
            } catch (e) {
              return;
            }
            if (!t.bPoseIsValid) return;
            let i = t.xfDeviceToAbsoluteTracking,
              n = (0, l.Fx)(this.state.qRoomFromRaw, i.translation);
            switch (this.state.phase) {
              case u.FindFloor_Touch:
                n.y < this.state.vMin.y &&
                  this.setState({
                    vMin: {
                      x: this.state.vMin.x,
                      y: n.y,
                      z: this.state.vMin.z,
                    },
                  }),
                  n.y > this.state.vMax.y &&
                    this.setState({
                      vMax: {
                        x: this.state.vMax.x,
                        y: n.y,
                        z: this.state.vMax.z,
                      },
                    });
                break;
              case u.Room_Walls:
                n.x < this.state.vMin.x &&
                  this.setState({
                    vMin: {
                      x: n.x,
                      y: this.state.vMin.y,
                      z: this.state.vMin.z,
                    },
                  }),
                  n.x > this.state.vMax.x &&
                    this.setState({
                      vMax: {
                        x: n.x,
                        y: this.state.vMax.y,
                        z: this.state.vMax.z,
                      },
                    }),
                  n.z < this.state.vMin.z &&
                    this.setState({
                      vMin: {
                        x: this.state.vMin.x,
                        y: this.state.vMin.y,
                        z: n.z,
                      },
                    }),
                  n.z > this.state.vMax.z &&
                    this.setState({
                      vMax: {
                        x: this.state.vMax.x,
                        y: this.state.vMax.y,
                        z: n.z,
                      },
                    });
            }
          }
          onAnimationFrame() {
            if (VRHTML) {
              switch (this.state.phase) {
                case u.FindFloor_Touch:
                case u.Room_Walls:
                  this.updateLimitsUsingDevice("/user/head"),
                    this.updateLimitsUsingDevice("/user/hand/right"),
                    this.updateLimitsUsingDevice("/user/hand/left");
              }
              this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame
              );
            }
          }
          componentDidUpdate() {
            this.updatePreview();
          }
          updatePreview() {
            if (!VRHTML) return;
            let e = this.state.vMax.x - this.state.vMin.x,
              t = this.state.vMax.z - this.state.vMin.z;
            VRHTML.VRChaperoneSetup.SetWorkingPlayAreaSize(e, t);
            let i = (0, l.mT)((0, l.ui)(this.state.vMin, this.state.vMax), 0.5),
              n = { x: i.x, y: this.state.vMin.y, z: i.z },
              o = (0, l.Oq)();
            (o.rotation = this.state.qRawFromRoom),
              (o.translation = (0, l.Fx)(this.state.qRawFromRoom, n)),
              VRHTML.VRChaperoneSetup.SetWorkingStandingZeroPoseToRawTrackingPose(
                o
              );
            let s = [];
            s.push({ x: -e / 2, y: -t / 2 }),
              s.push({ x: e / 2, y: -t / 2 }),
              s.push({ x: e / 2, y: t / 2 }),
              s.push({ x: -e / 2, y: t / 2 }),
              VRHTML.VRChaperoneSetup.SetWorkingPerimeter(s),
              VRHTML.VRChaperoneSetup.ShowWorkingSetPreview();
          }
          computeDirectionFromHeadset() {
            if (!VRHTML) return;
            let e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              t = (0, l.aB)(e.xfDeviceToAbsoluteTracking);
            (t.y = 0), (t = (0, l.M9)(t));
            let i = Math.atan2(t.x, t.z),
              n = (0, l.UU)({ x: 0, y: i, z: 0 }),
              o = (0, l.rN)(n),
              s = (0, l.Fx)(o, e.xfDeviceToAbsoluteTracking.translation);
            this.setState({
              qRawFromRoom: n,
              qRoomFromRaw: o,
              vStartingHmdPosition: s,
            });
          }
          resetBoundsToDefault(e) {
            if (!VRHTML) return;
            let t = 1,
              i = 1;
            e || ((t = 1.5), (i = 1.1));
            let n = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              o = (0, l.Fx)(
                this.state.qRoomFromRaw,
                n.xfDeviceToAbsoluteTracking.translation
              ),
              s = (0, l.ui)(o, { x: -t / 2, y: 0, z: -i / 2 }),
              r = (0, l.ui)(o, { x: t / 2, y: 0, z: i / 2 });
            (s.y = this.state.vMin.y),
              (r.y = this.state.vMax.y),
              this.setState({ vMin: s, vMax: r, vStartingHmdPosition: o });
          }
          resetWalls() {
            this.resetBoundsToDefault(this.state.phase == u.Room_Walls);
          }
          resetFloorToDefault() {
            if (!VRHTML) return;
            let e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              t = (0, l.Fx)(
                this.state.qRoomFromRaw,
                e.xfDeviceToAbsoluteTracking.translation
              ),
              i = this.state.vMin;
            i.y = t.y - 1;
            let n = this.state.vMax;
            (n.y = t.y + 0.5),
              this.setState({ vMin: i, vMax: n, vStartingHmdPosition: t });
          }
          onSkipWalls() {
            this.resetBoundsToDefault(!0),
              this.setState({}, () => {
                this.saveSetup();
              });
          }
          restartSetup() {
            VRHTML.VRChaperoneSetup.RevertWorkingCopy(),
              this.setState({ phase: u.FindFloor_Touch });
          }
          onFindFloorFromHeight() {
            this.resetFloorToDefault(),
              this.setState({ phase: u.FindFloor_Height });
          }
          onFindFloorFromTouch() {
            this.resetFloorToDefault(),
              this.setState({ phase: u.FindFloor_Touch });
          }
          onConfirmFloor() {
            this.computeDirectionFromHeadset(),
              this.resetBoundsToDefault(!1),
              this.updatePreview(),
              this.setState({ phase: u.Room_Walls });
          }
          confirmWalls() {
            this.saveSetup();
          }
          onConfirmHeight() {
            let e = null;
            try {
              e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated);
            } catch (e) {
              return void this.setState({ phase: u.Room_Walls });
            }
            if (!e.bPoseIsValid)
              return void this.setState({ phase: u.Room_Walls });
            let t = e.xfDeviceToAbsoluteTracking.translation;
            this.computeDirectionFromHeadset(),
              this.setState({
                phase: u.Room_Walls,
                vMin: {
                  x: this.state.vMin.x,
                  y: t.y + 0.08 - this.state.fUserHeight / 100,
                  z: this.state.vMin.z,
                },
              });
          }
          saveSetup() {
            VRHTML.VRChaperoneSetup.CommitWorkingCopy()
              ? this.setState({ phase: u.SaveSuccessful })
              : this.setState({ phase: u.SaveFailed }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperone.ForceBoundsVisible(!1),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.HideWorkingSetPreview();
          }
          onSliderChange(e) {
            let t = parseFloat(e.target.value);
            this.setState({ fUserHeight: t });
          }
          onSetRoomNow() {
            this.setState({ phase: u.Room_Walls });
          }
          onSetRoomLater() {
            this.saveSetup();
          }
          renderMainUI() {
            let e = this.state.fUserHeight / 2.54,
              t = Math.floor(e / 12),
              i = Math.round(e - 12 * t);
            switch (this.state.phase) {
              case u.FindFloor_Touch:
                return s.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  s.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Hello there! To give you the best Virtual Reality experience (and keep you safe) we need to know a few things about your room."
                    ),
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'Let\'s start with where your floor is. Please touch the floor with one of your controllers and click "Done".'
                    ),
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'If would rather estimate the floor\'s position from your own height, you can click the "use my height" button below to do that instead.'
                    ),
                    s.createElement(
                      "div",
                      { className: "FlexRow" },
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onConfirmFloor,
                        },
                        "Done"
                      ),
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromHeight,
                        },
                        "Let me tell you how tall I am"
                      )
                    ),
                    s.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit"
                    )
                  )
                );
              case u.FindFloor_Height:
                return s.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  s.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Maybe your VR system can't see your floor? Or maybe you just don't want to touch the floor with your controller. No problem, we can figure it out if you tell us how tall you are. "
                    ),
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'Please select your height using the slider below, stand up straight, and click "Done" when you\'re finished.'
                    ),
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Height: ",
                      this.state.fUserHeight,
                      " cm (",
                      t,
                      "ft ",
                      i,
                      "in)"
                    ),
                    s.createElement(
                      "div",
                      { className: "FlexColumn HeightSlider" },
                      s.createElement("input", {
                        type: "range",
                        min: 100,
                        max: 250,
                        step: 1,
                        value: this.state.fUserHeight,
                        onChange: this.onSliderChange,
                      })
                    ),
                    s.createElement(
                      "div",
                      { className: "FlexRow" },
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onConfirmHeight,
                        },
                        "Done"
                      ),
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromTouch,
                        },
                        "Let me touch the floor instead"
                      )
                    ),
                    s.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit"
                    )
                  )
                );
              case u.Room_Walls:
                return s.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  s.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Please reach out with your controllers to stretch the room to include your clear space."
                    ),
                    s.createElement(
                      "div",
                      { className: "FlexRow" },
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.computeDirectionFromHeadset,
                        },
                        "Set Forward Direction"
                      ),
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.resetWalls,
                        },
                        "Reset Walls"
                      ),
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.confirmWalls,
                        },
                        "Done"
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: "FlexRow" },
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onSkipWalls,
                        },
                        "Skip"
                      ),
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromTouch,
                        },
                        "Back"
                      ),
                      s.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.props.returnToMenu,
                        },
                        "Exit"
                      )
                    )
                  )
                );
              case u.SaveSuccessful:
                return s.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  s.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Your new room setup has been saved."
                    ),
                    s.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit"
                    )
                  )
                );
              case u.SaveFailed:
                return s.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  s.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    s.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Your new room setup could not be saved for some reason. Maybe your hard drive is full?"
                    ),
                    s.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit"
                    )
                  )
                );
            }
            return null;
          }
          render() {
            return s.createElement(
              l.wx,
              { parent_path: "/user/head" },
              s.createElement(
                l.iC,
                {
                  start_angle_threshold: 40,
                  stop_angle_threshold: 17,
                  ease_out_angle_threshold: 90,
                  min_angular_velocity: 105,
                  ease_in_power: 1.5,
                },
                s.createElement(
                  l.wx,
                  { translation: { z: -1 } },
                  this.renderMainUI()
                )
              )
            );
          }
        }
        (0, o.gn)([a.ak], p.prototype, "onAnimationFrame", null),
          (0, o.gn)([a.ak], p.prototype, "updatePreview", null),
          (0, o.gn)([a.ak], p.prototype, "computeDirectionFromHeadset", null),
          (0, o.gn)([a.ak], p.prototype, "resetWalls", null),
          (0, o.gn)([a.ak], p.prototype, "resetFloorToDefault", null),
          (0, o.gn)([a.ak], p.prototype, "onSkipWalls", null),
          (0, o.gn)([a.ak], p.prototype, "restartSetup", null),
          (0, o.gn)([a.ak], p.prototype, "onFindFloorFromHeight", null),
          (0, o.gn)([a.ak], p.prototype, "onFindFloorFromTouch", null),
          (0, o.gn)([a.ak], p.prototype, "onConfirmFloor", null),
          (0, o.gn)([a.ak], p.prototype, "confirmWalls", null),
          (0, o.gn)([a.ak], p.prototype, "onConfirmHeight", null),
          (0, o.gn)([a.ak], p.prototype, "saveSetup", null),
          (0, o.gn)([a.ak], p.prototype, "onSliderChange", null),
          (0, o.gn)([a.ak], p.prototype, "onSetRoomNow", null),
          (0, o.gn)([a.ak], p.prototype, "onSetRoomLater", null);
        var m = i(8546),
          g = i(3446),
          v = i(5774);
        class _ extends s.Component {
          constructor(e) {
            super(e),
              (this.m_deviceEventHandle = null),
              (this.m_progressIndicatorEventHandle = null);
            this.state = {
              sIconPath: "",
              sDevicePath: "",
              sInputPath: "",
              sCurrentAction: void 0,
              flProgress: 0,
            };
          }
          componentDidMount() {
            VRHTML
              ? ((this.m_progressIndicatorEventHandle =
                  VRHTML.RegisterForProgressIndicatorEvents(
                    this.ProgressIndicatorEvent
                  )),
                (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
                  this.DeviceEvent
                )))
              : this.setState({
                  sCurrentAction: "/actions/foo/bar",
                  flProgress: 0.63,
                });
          }
          componentWillUnmount() {
            this.m_progressIndicatorEventHandle &&
              this.m_progressIndicatorEventHandle.unregister(),
              this.m_deviceEventHandle && this.m_deviceEventHandle.unregister();
          }
          ProgressIndicatorEvent(e, t, i, n, o) {
            let s = this.state;
            null == s.sCurrentAction &&
              0 != e &&
              ((s.sCurrentAction = o), (s.sDevicePath = i), (s.sInputPath = n)),
              s.sCurrentAction == o &&
                (0 == e
                  ? ((s.sCurrentAction = void 0), (s.flProgress = 0))
                  : (s.flProgress = e)),
              this.setState(s);
          }
          DeviceEvent(e, t, i) {
            e == l.XX.Deactivated &&
              t == this.state.sDevicePath &&
              this.setState({ sCurrentAction: null, flProgress: 0 });
          }
          render() {
            if (!this.state.sCurrentAction || this.state.flProgress < 0.25)
              return null;
            {
              let e = { x: -0.05, y: 0.06, z: 0.02 };
              "/user/hand/left" == this.state.sDevicePath && (e.x = -e.x);
              let t = 0.05;
              "/user/head" == this.state.sDevicePath && (t = 0.15);
              let i = (100 * (this.state.flProgress - 0.25) * 4) / 3,
                n = s.createElement(
                  l.s_,
                  { width: t },
                  s.createElement(
                    "div",
                    { className: "ProgressContainer" },
                    s.createElement(v.Ip, {
                      background: !0,
                      backgroundPadding: 2,
                      value: i,
                    }),
                    s.createElement("img", {
                      src: "/shared/images/steam_logo.svg",
                      className: "ProgressIcon",
                    })
                  )
                );
              return "/user/head" == this.state.sDevicePath
                ? s.createElement(
                    l.wx,
                    { parent_path: "/user/head" },
                    s.createElement(
                      l.wx,
                      { translation: { z: -1.2, y: -0.5 } },
                      s.createElement(l.jm, null, n)
                    )
                  )
                : s.createElement(
                    "div",
                    null,
                    s.createElement(
                      l.CH,
                      {
                        id: "progress_component",
                        sDevicePath: this.state.sDevicePath,
                        sInputPath: this.state.sInputPath,
                      },
                      s.createElement(
                        l.A4,
                        { vOffset: e },
                        s.createElement(
                          l.jL,
                          {
                            fOffscreenZDepth: -0.3,
                            fOffAxisLimit: 21,
                            fTransitionLimit: 1,
                          },
                          s.createElement(l.x1, {
                            target_id: "progress_component",
                            thickness: 0.002,
                            start_buffer: 0.03,
                            end_buffer: 0.01,
                          }),
                          s.createElement(l.jm, null, n)
                        )
                      )
                    )
                  );
            }
          }
        }
        (0, o.gn)([a.ak], _.prototype, "ProgressIndicatorEvent", null),
          (0, o.gn)([a.ak], _.prototype, "DeviceEvent", null);
        var y,
          b = i(3868);
        function S(e, t, i, n, o) {
          return t == i ? 0 : ((e - t) / (i - t)) * (o - n) + n;
        }
        let f = (y = class extends s.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_fadeStartTimeout = void 0),
              (this.m_fadeFinishTimeout = void 0);
            const i =
              1e3 *
              (null !==
                (t =
                  null === l.ZP || void 0 === l.ZP
                    ? void 0
                    : l.ZP.VRProperties.GetFloatProperty(
                        l.wU,
                        l.Uk.UserIpdMeters_Float
                      )) && void 0 !== t
                ? t
                : 0.065);
            (this.state = { ipdValue: i, visible: !1, fading: !1 }),
              null === l.ZP ||
                void 0 === l.ZP ||
                l.ZP.RegisterForIPDEvents(this.IPDChanged),
              g.G3.Init(!1);
          }
          StartFade() {
            clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = 0),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                y.kFadeDurationMs
              )),
              this.setState({ fading: !0 });
          }
          HideOverlay() {
            this.setState({ visible: !1 });
          }
          IPDChanged(e) {
            clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = setTimeout(
                this.StartFade,
                y.kFadeDelayMs
              )),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({
                ipdValue: 1e3 * (null != e ? e : 0.065),
                visible: !0,
                fading: !1,
              });
          }
          ipdLensSpacer() {
            return s.createElement("div", {
              className: "IPDLensSpacer",
              style: { minWidth: "32px" },
            });
          }
          render() {
            var e, t, i;
            if (!this.state.visible) return null;
            let n = ["IPDParent"];
            this.state.fading && n.push("Fading");
            const o =
                0.9 *
                (null !==
                  (e =
                    null === l.ZP || void 0 === l.ZP
                      ? void 0
                      : l.ZP.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.DashboardScale_Float
                        )) && void 0 !== e
                  ? e
                  : 1),
              r =
                1e3 *
                (null !==
                  (t =
                    null === l.ZP || void 0 === l.ZP
                      ? void 0
                      : l.ZP.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.IpdUIRangeMinMeters_Float
                        )) && void 0 !== t
                  ? t
                  : 0.058),
              a =
                1e3 *
                (null !==
                  (i =
                    null === l.ZP || void 0 === l.ZP
                      ? void 0
                      : l.ZP.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.IpdUIRangeMaxMeters_Float
                        )) && void 0 !== i
                  ? i
                  : 0.07),
              c = (function (e, t, i, n, o) {
                if (
                  !(
                    isFinite(e) &&
                    isFinite(t) &&
                    isFinite(i) &&
                    isFinite(n) &&
                    isFinite(o)
                  )
                )
                  return null;
                const r = 10,
                  a = [],
                  l = t / 25,
                  c = 10 * l,
                  d = c - 5 * l,
                  h = c - 10 * l,
                  u = c + 10 * l,
                  p = c + 5 * l;
                for (let t = n; t <= o; t += 0.5) {
                  const i = S(t, n, o, r, e - r);
                  a.push(
                    s.createElement("circle", {
                      key: "pip" + t,
                      cx: i,
                      cy: c,
                      r: "0.75",
                      stroke: "none",
                      fill: "rgb(128,128,128)",
                    })
                  );
                }
                for (let t = n; t <= o; t += 2) {
                  const i = S(t, n, o, r, e - r);
                  a.push(
                    s.createElement("line", {
                      key: "line" + t,
                      x1: i,
                      y1: c,
                      x2: i,
                      y2: d,
                      style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                    })
                  );
                }
                {
                  let t = S(64, n, o, r, e - r);
                  a.push(
                    s.createElement("line", {
                      key: "centraltick",
                      x1: t,
                      y1: c,
                      x2: t,
                      y2: h,
                      style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                    })
                  );
                }
                {
                  let t = S(i - 0.5, n, o, r, e - r),
                    l = S(i + 0.5, n, o, r, e - r),
                    c =
                      t +
                      "," +
                      u +
                      " " +
                      l +
                      "," +
                      u +
                      " " +
                      0.5 * (t + l) +
                      "," +
                      p;
                  a.push(
                    s.createElement("polygon", {
                      key: "triangle",
                      points: c,
                      style: {
                        stroke: "rgb(128,128,128)",
                        strokeWidth: 1.5,
                        fill: "rgb(30,30,30)",
                      },
                    })
                  );
                }
                return s.createElement(
                  "svg",
                  { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                  a
                );
              })(240, 50, this.state.ipdValue, r, a);
            return s.createElement(
              l.wx,
              { parent_path: "/user/head" },
              s.createElement(
                l.wx,
                {
                  translation: { y: -0.3, z: -0.87 },
                  rotation: { x: -28 },
                  scale: o,
                },
                s.createElement(
                  l.s_,
                  {
                    width: void 0,
                    height: y.kPanelHeight,
                    interactive: !1,
                    sort_order: 1e3,
                  },
                  s.createElement(
                    "div",
                    { className: n.join(" "), style: { width: y.kPixelWidth } },
                    s.createElement(
                      "div",
                      { className: "FlexColumn" },
                      s.createElement(
                        "div",
                        { className: "IPDNumberRow" },
                        s.createElement(
                          "div",
                          { className: "IPDNumberText" },
                          this.state.ipdValue.toFixed(1)
                        ),
                        s.createElement(
                          "div",
                          { className: "IPDLabelText" },
                          "mm"
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: "IPDSettingTextDesc" },
                        (0, b.Xx)("#IPD_Description")
                      ),
                      s.createElement(
                        "div",
                        { className: "IPDLensRow" },
                        s.createElement(
                          "div",
                          { className: "IPDLens FlipImageHorizontal" },
                          " ",
                          c,
                          " "
                        ),
                        this.ipdLensSpacer(),
                        s.createElement(
                          "div",
                          { className: "IPDLens" },
                          " ",
                          c,
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
        (f.kPanelHeight = 0.2),
          (f.kPixelWidth = 600),
          (f.kFadeDelayMs = 1e3),
          (f.kFadeDurationMs = 1e3),
          (0, o.gn)([a.ak], f.prototype, "StartFade", null),
          (0, o.gn)([a.ak], f.prototype, "HideOverlay", null),
          (0, o.gn)([a.ak], f.prototype, "IPDChanged", null),
          (f = y = (0, o.gn)([c.Pi], f));
        var k,
          R,
          M = i(7679);
        !(function (e) {
          (e[(e.Opaque = 0)] = "Opaque"),
            (e[(e.FadingIn = 1)] = "FadingIn"),
            (e[(e.FadingOut = 2)] = "FadingOut");
        })(R || (R = {}));
        let C = (k = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_hideTimeout = void 0),
              (this.m_fadeTimeout = void 0),
              (this.m_unresponsiveTimeout = void 0),
              (this.m_sceneApplicationStateChangedEventHandle = null),
              (this.m_mountedTime = void 0),
              (this.state = {
                visible: !1,
                opacity: R.Opaque,
                latchedAppName: "",
                latchedAppKey: "",
                latchedSceneApplicationState: null,
                alreadyHidDashboard: !1,
              }),
              g.G3.Init(!1);
          }
          componentDidMount() {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === l.ZP || void 0 === l.ZP
                ? void 0
                : l.ZP.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged
                  )),
              (this.m_mountedTime = new Date().getTime()),
              this.updateTransitionState();
          }
          log(e) {
            let t = (new Date().getTime() - this.m_mountedTime) / 1e3;
            console.log("[transition] " + t + " " + e);
          }
          componentWillUnmount() {
            this.m_unresponsiveTimeout &&
              (clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0)),
              this.m_fadeTimeout &&
                (clearTimeout(this.m_fadeTimeout),
                (this.m_fadeTimeout = void 0)),
              this.m_hideTimeout &&
                (clearTimeout(this.m_hideTimeout),
                (this.m_hideTimeout = void 0)),
              this.m_sceneApplicationStateChangedEventHandle &&
                (this.m_sceneApplicationStateChangedEventHandle.unregister(),
                (this.m_sceneApplicationStateChangedEventHandle = null));
          }
          maybeHideDashboard(e) {
            if (this.state.alreadyHidDashboard) return;
            const t = l.ZP.VRApplications.GetStartingApplicationKey();
            t &&
              t != k.k_sHomeAppKey &&
              (l.ZP.VRDashboardManager.HideDashboard(e),
              this.setState({ alreadyHidDashboard: !0 }));
          }
          updateTransitionState() {
            if (!l.ZP) return;
            let e = l.ZP.VRApplications.GetSceneApplicationState();
            e == l.xY.Starting
              ? (this.state.latchedSceneApplicationState == l.xY.Quitting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_starting"))
              : e == l.xY.Quitting
              ? (this.state.latchedSceneApplicationState == l.xY.Starting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_quitting"))
              : e == l.xY.Running
              ? (this.cancelUnresponsiveTimeout(),
                this.state.visible && this.startFadeOut())
              : e == l.xY.None
              ? (this.cancelUnresponsiveTimeout(),
                this.state.visible && this.hideSoon())
              : e == l.xY.Waiting &&
                (this.state.visible
                  ? (this.cancelUnresponsiveTimeout(), this.show(!0))
                  : this.startUnresponsiveTimer());
          }
          startUnresponsiveTimer() {
            null == this.m_unresponsiveTimeout &&
              (this.m_unresponsiveTimeout = setTimeout(
                this.onUnresponsiveTimeout,
                k.kUnresponsiveDelayMs
              ));
          }
          cancelUnresponsiveTimeout() {
            this.m_unresponsiveTimeout &&
              (clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0));
          }
          onUnresponsiveTimeout() {
            clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0),
              this.setState({ latchedSceneApplicationState: l.xY.Waiting }),
              this.show(!0),
              this.updateLatchedValues();
          }
          updateLatchedValues() {
            if (l.ZP)
              if (
                l.ZP.VRApplications.GetSceneApplicationState() == l.xY.Starting
              ) {
                let e = l.ZP.VRApplications.GetStartingApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = l.ZP.GetStartingAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              } else {
                let e = l.ZP.VRApplications.GetSceneApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = l.ZP.GetCurrentSceneFocusAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              }
          }
          onSceneApplicationStateChanged() {
            this.updateTransitionState();
          }
          show(e) {
            this.cancelFadeOutTimers(),
              e
                ? this.state.visible ||
                  this.setState({ visible: !0, opacity: R.FadingIn })
                : this.setState({ visible: !0, opacity: R.Opaque });
          }
          cancelFadeOutTimers() {
            this.m_fadeTimeout && clearTimeout(this.m_fadeTimeout),
              this.m_hideTimeout && clearTimeout(this.m_hideTimeout),
              (this.m_fadeTimeout = 0),
              (this.m_hideTimeout = 0);
          }
          hideSoon() {
            this.m_hideTimeout ||
              this.m_fadeTimeout ||
              (this.m_fadeTimeout = setTimeout(
                this.startFadeOut,
                k.kHideDelayMs
              ));
          }
          startFadeOut() {
            this.m_fadeTimeout &&
              (clearTimeout(this.m_fadeTimeout), (this.m_fadeTimeout = 0)),
              this.setState({ opacity: R.FadingOut }),
              (this.m_hideTimeout = setTimeout(
                this.hideAndResetLatchedValues,
                k.kFadeoutTimeMs
              ));
          }
          resetLatchedValued() {
            this.setState({
              latchedAppName: "",
              latchedAppKey: "",
              latchedSceneApplicationState: null,
            });
          }
          hideAndResetLatchedValues() {
            this.cancelFadeOutTimers(),
              this.resetLatchedValued(),
              this.setState({
                visible: !1,
                opacity: R.Opaque,
                alreadyHidDashboard: !1,
              });
          }
          render() {
            if (!this.state.visible) return null;
            if (
              !this.props.dashboardRef.current ||
              this.props.dashboardRef.current.isShown()
            )
              return null;
            let e = "",
              t = "";
            if (
              this.state.latchedAppKey &&
              this.state.latchedAppKey.length > 0 &&
              !this.state.latchedAppKey.includes("system.generated")
            )
              e = "/app/image?app_key=" + this.state.latchedAppKey;
            else {
              let i = 8;
              if (
                ((e =
                  "images/dynamictitle.000" +
                  (Math.abs(
                    (function (e) {
                      let t = 0,
                        i = 0;
                      for (; t < e.length; t++)
                        i = (Math.imul(31, i) + e.charCodeAt(t)) | 0;
                      return i;
                    })(this.state.latchedAppKey)
                  ) %
                    i) +
                  ".png"),
                (t = this.state.latchedAppName),
                !t)
              )
                return null;
            }
            let i = this.state.latchedAppKey === k.k_sHomeAppKey,
              n = !1,
              o = "";
            switch (this.state.latchedSceneApplicationState) {
              case l.xY.Quitting:
                o = (0, b.Xx)("#Now_Quitting");
                break;
              case l.xY.Starting:
                o = (0, b.Xx)(i ? "" : "#Now_Starting");
                break;
              case l.xY.Waiting:
                (o = (0, b.Xx)("#Now_Waiting")), (n = !0);
            }
            let r = o.length > 0,
              a = ["TransitionAppImage"],
              c = ["TransitionAppLabels"],
              d = ["TransitionAppSpinner"];
            this.state.opacity == R.FadingIn
              ? (a.push("FadingIn"), c.push("FadingIn"), d.push("FadingIn"))
              : this.state.opacity == R.FadingOut &&
                (a.push("FadingOut"), c.push("FadingOut"), d.push("FadingOut")),
              n && a.push("Waiting");
            let h = null;
            e.includes("revive.app") && (h = 310);
            const u = m.g.getDashboardDistance();
            return s.createElement(
              l.eK,
              null,
              s.createElement(
                l.wx,
                { translation: { y: -0.1125, z: -u }, scale: 0.244 },
                s.createElement(
                  l.s_,
                  {
                    width: 1.5,
                    height: void 0,
                    interactive: !1,
                    origin: l.Ic.BottomCenter,
                    reflect: 0.05,
                  },
                  s.createElement(
                    "div",
                    {
                      className: a.join(" "),
                      style: {
                        backgroundImage: e ? "url('" + e + "')" : null,
                        height: h,
                      },
                    },
                    " ",
                    t,
                    " "
                  )
                ),
                r &&
                  s.createElement(
                    l.wx,
                    { translation: { y: 0.08, z: -0.08 } },
                    s.createElement(
                      l.s_,
                      {
                        width: 1.275,
                        height: void 0,
                        interactive: !1,
                        origin: l.Ic.TopCenter,
                      },
                      s.createElement(
                        "div",
                        { className: c.join(" ") },
                        s.createElement("div", { className: "AppStatus" }, o)
                      )
                    )
                  ),
                n &&
                  s.createElement(
                    l.wx,
                    { translation: { y: 0.35, z: 0.05 } },
                    s.createElement(
                      l.s_,
                      { width: 1.5 * 0.1, height: void 0, interactive: !1 },
                      s.createElement(
                        "div",
                        { className: d.join(" ") },
                        s.createElement(M.wC, null)
                      )
                    )
                  )
              )
            );
          }
        });
        (C.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
          (C.kHideDelayMs = 5e3),
          (C.kUnresponsiveDelayMs = 2e3),
          (C.kFadeoutTimeMs = 550),
          (0, o.gn)([a.ak], C.prototype, "startUnresponsiveTimer", null),
          (0, o.gn)([a.ak], C.prototype, "cancelUnresponsiveTimeout", null),
          (0, o.gn)([a.ak], C.prototype, "onUnresponsiveTimeout", null),
          (0, o.gn)([a.ak], C.prototype, "updateLatchedValues", null),
          (0, o.gn)(
            [a.ak],
            C.prototype,
            "onSceneApplicationStateChanged",
            null
          ),
          (0, o.gn)([a.ak], C.prototype, "show", null),
          (0, o.gn)([a.ak], C.prototype, "cancelFadeOutTimers", null),
          (0, o.gn)([a.ak], C.prototype, "hideSoon", null),
          (0, o.gn)([a.ak], C.prototype, "startFadeOut", null),
          (0, o.gn)([a.ak], C.prototype, "resetLatchedValued", null),
          (0, o.gn)([a.ak], C.prototype, "hideAndResetLatchedValues", null),
          (C = k = (0, o.gn)([c.Pi], C));
        class T extends s.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            if (!VRHTML) return null;
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = [];
            return (
              e.forEach((e) => {
                e.eClass == l.qR.TrackingReference &&
                  e.sDevicePath &&
                  t.push(
                    s.createElement(
                      l.wx,
                      { parent_path: e.sDevicePath },
                      s.createElement(
                        l.jm,
                        null,
                        s.createElement(
                          l.s_,
                          { width: 0.5 },
                          s.createElement(
                            "div",
                            { className: "FlexColumn" },
                            s.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.SerialNumber_String
                              )
                            ),
                            s.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ManufacturerName_String
                              )
                            ),
                            s.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ModelNumber_String
                              )
                            ),
                            s.createElement(
                              "div",
                              { className: "Label" },
                              "Channel: ",
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ModeLabel_String
                              )
                            )
                          )
                        )
                      )
                    )
                  );
              }),
              s.createElement(
                "div",
                { className: "CalloutTopLevelContainer" },
                t
              )
            );
          }
        }
        var w,
          D,
          E = i(2188),
          x = i(7968),
          P = i(1818),
          I = i(6192),
          L = i(79),
          V = i(7264),
          O = i(197),
          H = i(3947),
          B = i(1428),
          N = i(9670),
          F = i(9093);
        class A extends s.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("systemui_devpanel");
          }
          onShowSceneAppBindings() {
            const e = I.H.Instance.SceneAppKey;
            if (e) {
              let t = { type: "request_binding_callouts", app_key: e };
              this.m_mailbox.SendMessage(O.Ml, t);
            }
          }
          onShowDashboardBindings() {
            this.m_mailbox.SendMessage(O.Ml, {
              type: "request_binding_callouts",
              app_key: "openvr.component.vrcompositor",
            });
          }
          onCrashRenderer() {
            null === VRHTML || void 0 === VRHTML || VRHTML.CrashRenderer();
          }
          onHangRenderer() {
            for (;;);
          }
          render() {
            return s.createElement(
              l.Y9,
              {
                id: "dev_panel",
                tabName: "Dev Panel",
                iconUri: "/dashboard/images/icons/icon_settings.png",
                summonOverlayKey: "system.devpanel",
              },
              s.createElement(
                l.s_,
                {
                  height: void 0,
                  width: 2,
                  interactive: !0,
                  scrollable: !0,
                  origin: l.Ic.BottomCenter,
                  debug_name: "DevPanel",
                },
                s.createElement(
                  P.q,
                  { className: "panel DevPanel" },
                  s.createElement("h1", null, "Developer Panel"),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onStartRoomSetup,
                    },
                    "Start Room Setup"
                  ),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onToggleBaseInfo,
                    },
                    "Show Basestation Info"
                  ),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowSceneAppBindings,
                    },
                    "Show Scene App Bindings"
                  ),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowDashboardBindings,
                    },
                    "Show Dashboard Bindings"
                  ),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onCrashRenderer,
                    },
                    "Crash Renderer"
                  ),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onHangRenderer,
                    },
                    "Hang Renderer"
                  ),
                  s.createElement(
                    P.z,
                    {
                      className: "ButtonControl",
                      onClick: () => l.n0.Current().toggleDebugPointer(),
                    },
                    "Toggle Debug Pointer"
                  )
                )
              )
            );
          }
        }
        (0, o.gn)([a.ak], A.prototype, "onShowSceneAppBindings", null),
          (0, o.gn)([a.ak], A.prototype, "onShowDashboardBindings", null),
          (0, o.gn)([a.ak], A.prototype, "onCrashRenderer", null),
          (0, o.gn)([a.ak], A.prototype, "onHangRenderer", null);
        class U extends s.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("base_station_status_overlay").then(() => {
                this.m_mailbox.RegisterHandler(
                  "waking_base_stations_state_changed",
                  this.onWakingBaseStationsStateChanged
                );
              }),
              (this.state = {
                bWakingBaseStations:
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.MonitorController.GetWakingBaseStationsState()) &&
                  void 0 !== t &&
                  t,
                nImagesLoaded: 0,
              });
          }
          onWakingBaseStationsStateChanged(e) {
            this.setState({ bWakingBaseStations: !!e.waking_base_stations });
          }
          onImageLoaded() {
            this.setState({ nImagesLoaded: this.state.nImagesLoaded + 1 });
          }
          render() {
            let e = this.state.nImagesLoaded >= 2;
            return s.createElement(
              l.gO,
              { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
              this.state.bWakingBaseStations &&
                s.createElement(
                  l.wx,
                  { parent_path: "/user/head", translation: { z: -2.75 } },
                  s.createElement(
                    l.s_,
                    { width: 2, height: void 0, interactive: !1 },
                    s.createElement(
                      "div",
                      {
                        className:
                          "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                      },
                      s.createElement("img", {
                        className: "Rainbow",
                        src: "/dashboard/images/rainbow.png",
                        onLoad: this.onImageLoaded,
                      }),
                      s.createElement("div", { className: "Ground" })
                    )
                  ),
                  s.createElement(
                    l.wx,
                    { translation: { z: 0.23 } },
                    s.createElement(
                      l.s_,
                      { width: 2, height: void 0, interactive: !1 },
                      s.createElement(
                        "div",
                        {
                          className:
                            "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                        },
                        s.createElement("img", {
                          className: "Base",
                          src: "/dashboard/images/base.png",
                          onLoad: this.onImageLoaded,
                        }),
                        s.createElement(
                          "h1",
                          null,
                          (0, b.Xx)("#WakingUpBaseStations")
                        )
                      )
                    )
                  )
                )
            );
          }
        }
        (0, o.gn)(
          [a.ak],
          U.prototype,
          "onWakingBaseStationsStateChanged",
          null
        ),
          (0, o.gn)([a.ak], U.prototype, "onImageLoaded", null),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.RoomSetup = 1)] = "RoomSetup");
          })(D || (D = {}));
        let W = (w = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_DashboardRequestedCallbackHandle = null),
              (this.m_mailbox = new l.Nv()),
              (this.m_DashboardRef = null),
              (this.m_fidelitySettingsObserver = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.m_DashboardRef = s.createRef()),
              this.m_mailbox.Init("systemui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "show_dashboard_requested",
                  this.onShowDashboardRequested
                ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested
                  );
              }),
              (this.state = { mode: D.Normal, bShowBaseInfo: !1 });
          }
          static bootstrap(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let t = document.querySelector(e);
              if (t)
                if ((0, l.Op)() == l.qA.Overlay) {
                  console.log("Bootstrapping " + e),
                    V.G.Instance.preloadSounds(),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetFlag(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        l.Z9.MakeOverlaysInteractiveIfVisible,
                        !0
                      ),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetInputMethod(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        l.qC.Mouse
                      );
                  try {
                    yield Promise.all([
                      (0, b.CK)(
                        ["vrmonitor", "dashboard", "bindingui"],
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.GetSteamVRLanguage()
                      ),
                      g.G3.Init(!0),
                      H.I.Init(!0),
                      B.c6.Init(),
                      N.S.Init(),
                      F.E.Init(),
                    ]);
                  } catch (e) {
                    console.error("Failed to initialize systemui:", e);
                  }
                  r.render(
                    s.createElement(l.n0, null, s.createElement(w, null)),
                    t
                  );
                } else
                  console.error(
                    "Unable to boostrap systemUI because CurrentEnvironment() returns " +
                      l.qA[(0, l.Op)()]
                  );
              else
                console.error(
                  "Unable to boostrap systemUI because " + e + " was not found"
                );
            });
          }
          componentDidMount() {
            (window.toggleDevPanel = this.toggleDevPanel),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.DeviceEvent)),
              (this.m_fidelitySettingsObserver = new d.kB());
          }
          componentWillUnmount() {
            var e, t, i;
            null === (e = this.m_DashboardRequestedCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              (this.m_DashboardRequestedCallbackHandle = null),
              null === (t = this.m_DeviceEventCallbackHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_DeviceEventCallbackHandle = null),
              null === (i = this.m_fidelitySettingsObserver) ||
                void 0 === i ||
                i.cleanup(),
              (this.m_fidelitySettingsObserver = null);
          }
          onOpenRoomSetup() {
            this.setState({ mode: D.RoomSetup });
          }
          onShowDashboardRequested(e) {
            var t;
            g.G3.settings.get("/settings/dashboard/enableDashboard") &&
              this.m_DashboardRef.current &&
              (this.m_DashboardRef.current.show(
                null !== (t = e.summoned_by) && void 0 !== t ? t : "unknown"
              ),
              e.overlay_key &&
                this.m_DashboardRef.current.switchToOverlay(e.overlay_key),
              this.setDashboardVisibility(!0, e.tracked_device_index));
          }
          onHideDashboardRequested(e) {
            this.m_DashboardRef.current &&
              (VRHTML.VRDashboardManager.HasMessageOverlay()
                ? this.m_DashboardRef.current.switchToOverlay(O.f8)
                : (this.m_DashboardRef.current.hideMessageOverlay(),
                  this.m_mailbox.SendMessage("keyboard", {
                    type: "hide_keyboard",
                  }),
                  this.m_DashboardRef.current.hide(e.reason),
                  this.setDashboardVisibility(!1)));
          }
          setDashboardVisibility(e, t) {
            let i = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", i);
          }
          toggleDevPanel() {
            this.setDevPanelVisible(!this.devPanelVisible);
          }
          get devPanelVisible() {
            return g.G3.settings.get(w.k_sPropShowDevPanel);
          }
          setDevPanelVisible(e) {
            g.G3.SetSettingsValue(w.k_sPropShowDevPanel, e);
          }
          onToggleBaseInfo() {
            this.setState({ bShowBaseInfo: !this.state.bShowBaseInfo });
          }
          onExitMode() {
            this.setState({ mode: D.Normal });
          }
          DeviceEvent(e, t, i) {
            e == l.XX.Activated &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                    (e) => e.unIndex == i && e.eClass == l.qR.Controller
                  )) &&
              this.forceUpdate();
          }
          render() {
            let e = [],
              t = 0;
            return (
              VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                (i) => (
                  i.eClass == l.qR.Controller &&
                    (t++,
                    e.push(
                      s.createElement(x.X, {
                        key: "controllerstatus_" + i.unIndex,
                        trackedDeviceIndex: i.unIndex,
                      })
                    )),
                  t >= 8
                )
              ),
              e.push(s.createElement(U, { key: "basestationstatus" })),
              e.push(
                s.createElement(m.g, {
                  key: "dashboard",
                  ref: this.m_DashboardRef,
                })
              ),
              e.push(
                s.createElement(C, {
                  key: "transition",
                  dashboardRef: this.m_DashboardRef,
                })
              ),
              this.devPanelVisible &&
                e.push(
                  s.createElement(A, {
                    key: "devpanel",
                    onCloseDevPanel: () => this.setDevPanelVisible(!1),
                    onStartRoomSetup: this.onOpenRoomSetup,
                    onToggleBaseInfo: this.onToggleBaseInfo,
                  })
                ),
              this.state.mode === D.RoomSetup &&
                e.push(
                  s.createElement(p, {
                    key: "roomsetup",
                    returnToMenu: this.onExitMode,
                  })
                ),
              this.state.bShowBaseInfo && e.push(s.createElement(T, null)),
              e.push(
                s.createElement(L.Y6, {
                  key: "resetseatedcountdown",
                  dashboardRef: this.m_DashboardRef,
                })
              ),
              e.push(s.createElement(f, { key: "ipd" })),
              e.push(s.createElement(_, { key: "progressindicator" })),
              e.push(s.createElement(h, { key: "roomsetup" })),
              s.createElement("span", null, e)
            );
          }
        });
        (W.k_sPropShowDevPanel = "/settings/dashboard/showDevPanel"),
          (0, o.gn)([a.ak], W.prototype, "onOpenRoomSetup", null),
          (0, o.gn)([a.ak], W.prototype, "onShowDashboardRequested", null),
          (0, o.gn)([a.ak], W.prototype, "onHideDashboardRequested", null),
          (0, o.gn)([a.ak], W.prototype, "toggleDevPanel", null),
          (0, o.gn)([E.Fl], W.prototype, "devPanelVisible", null),
          (0, o.gn)([a.ak], W.prototype, "setDevPanelVisible", null),
          (0, o.gn)([a.ak], W.prototype, "onToggleBaseInfo", null),
          (0, o.gn)([a.ak], W.prototype, "onExitMode", null),
          (0, o.gn)([a.ak], W.prototype, "DeviceEvent", null),
          (W = w = (0, o.gn)([c.Pi], W)),
          console.log("systemui.tsx is running"),
          W.bootstrap("SystemUIRoot");
      },
      2379: (e, t, i) => {
        i.d(t, { s: () => v });
        var n = i(655),
          o = i(7294),
          s = i(7062),
          r = i(7056),
          a = i(3868),
          l = i(1428),
          c = i(9093),
          d = i(2188),
          h = i(3947),
          u = i(1818),
          p = i(1058),
          m = i(8052);
        let g = class extends o.Component {
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
            return h.I.GetDeviceInfo(this.props.trackerPath);
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
            let i = t;
            const n = "vive_tracker";
            i.includes(n) &&
              (i = i.substring(i.indexOf(n) + n.length, i.length));
            let s = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (s = (0, a.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable"
                  ))
                : (s = (0, a.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected"
                  )),
              o.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                o.createElement(
                  "div",
                  { className: "Label", title: t },
                  o.createElement("span", null, i),
                  o.createElement("div", {
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
                o.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  o.createElement(
                    m.GV,
                    { title: s },
                    o.createElement(
                      u.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, a.Xx)("#TrackerEditor_BuzzTracker")
                    )
                  )
                ),
                o.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  o.createElement(m.Xp, {
                    label: (0, a.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, a.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    o.createElement(m.Xp, {
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
          (0, n.gn)([r.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, n.gn)([r.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, n.gn)([r.ak], g.prototype, "BuzzTracker", null),
          (0, n.gn)([d.Fl], g.prototype, "deviceInfo", null),
          (g = (0, n.gn)([s.Pi], g));
        let v = class extends o.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => h.I.GetInputState(),
              2e3
            )),
              h.I.GetInputState();
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
                (e = t.trackers.map((e, i) =>
                  o.createElement(g, {
                    key: i,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  })
                )),
              o.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        v = (0, n.gn)([s.Pi], v);
      },
      6889: (e, t, i) => {
        i.d(t, { u: () => o });
        var n = i(7294);
        function o(e) {
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
    i = {};
  function n(e) {
    var o = i[e];
    if (void 0 !== o) return o.exports;
    var s = (i[e] = { id: e, exports: {} });
    return t[e](s, s.exports, n), s.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, i, o, s) => {
      if (!i) {
        var r = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [i, o, s] = e[d], a = !0, l = 0; l < i.length; l++)
            (!1 & s || r >= s) && Object.keys(n.O).every((e) => n.O[e](i[l]))
              ? i.splice(l--, 1)
              : ((a = !1), s < r && (r = s));
          if (a) {
            e.splice(d--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      s = s || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
      e[d] = [i, o, s];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
    (n.j = 929),
    (() => {
      var e = { 929: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var o,
            s,
            [r, a, l] = i,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (l) var d = l(n);
          }
          for (t && t(i); c < r.length; c++)
            (s = r[c]), n.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return n.O(d);
        },
        i = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })(),
    (n.nc = void 0);
  var o = n.O(void 0, [968, 683], () => n(9867));
  o = n.O(o);
})();
//# sourceMappingURL=systemui.js.map?v=dddf968dbfa5a637bda6
