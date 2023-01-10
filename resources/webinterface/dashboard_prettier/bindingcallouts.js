/*! For license information please see bindingcallouts.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      6321: (e, t, o) => {
        o.d(t, {
          A4: () => S.A,
          Bl: () => _.Bl,
          CH: () => f.C,
          Dd: () => l.D,
          Fs: () => r.Fs,
          GC: () => M.GC,
          Ic: () => _.Ic,
          JR: () => r.JR,
          Kf: () => M.Kf,
          Kg: () => M.Kg,
          LL: () => M.LL,
          LY: () => r.LY,
          M9: () => r.M9,
          Nv: () => i.N,
          OK: () => u.OK,
          Op: () => M.Op,
          Oq: () => r.Oq,
          Pd: () => r.Pd,
          Pw: () => M.Pw,
          QZ: () => M.QZ,
          UU: () => r.UU,
          Uk: () => M.Uk,
          VW: () => a.V,
          Vv: () => _.Vv,
          XX: () => M.XX,
          Y9: () => s.Y,
          Z9: () => M.Z9,
          ZP: () => w,
          Zj: () => r.Zj,
          a0: () => M.a0,
          at: () => v.a,
          bt: () => m.b,
          dq: () => r.dq,
          eK: () => k.e,
          eQ: () => r.eQ,
          gQ: () => p.g,
          hz: () => n.h,
          iC: () => y.i,
          iN: () => u.iN,
          jm: () => b.j,
          kH: () => C.k,
          l0: () => M.l0,
          lx: () => M.lx,
          n0: () => h.n,
          q9: () => r.q9,
          qA: () => M.qA,
          qC: () => M.qC,
          qI: () => u.qI,
          qR: () => M.qR,
          s_: () => _.s_,
          sl: () => c.s,
          tS: () => r.tS,
          vS: () => M.vS,
          wU: () => M.wU,
          wx: () => d.w,
          x1: () => g.x,
          xY: () => M.xY,
          xj: () => p.x,
          zA: () => M.zA,
          zq: () => M.zq,
        });
        var i = o(4507),
          r = o(3573),
          n = o(1469),
          s = o(1976),
          a = o(1917),
          l = o(142),
          c = o(7986),
          d = o(6701),
          u = (o(2509), o(6263)),
          h = (o(3402), o(9495)),
          p = (o(6374), o(5565)),
          m = o(3033),
          g = o(8235),
          v = (o(9483), o(5230)),
          _ = o(4132),
          y = (o(9744), o(6721)),
          b = o(510),
          f = o(1077),
          S = o(1431),
          k = o(6730),
          C = o(6135),
          M = o(1731);
        const w = VRHTML;
      },
      1431: (e, t, o) => {
        o.d(t, { A: () => n });
        var i = o(7294),
          r = o(3402);
        class n extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
              "vsg-callout-transform",
              { offset: (0, r.Kg)(this.props.vOffset) },
              this.props.children
            );
          }
        }
      },
      1077: (e, t, o) => {
        o.d(t, { C: () => s });
        var i = o(7294),
          r = o(1731),
          n = o(6701);
        class s extends i.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  r.Uk.RenderModelName_String
                );
                if (e) {
                  let o =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath
                    );
                  if (o) {
                    let i =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        o,
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
            return i.createElement(
              n.w,
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
      1976: (e, t, o) => {
        o.d(t, { Y: () => c });
        var i = o(655),
          r = o(7294),
          n = o(3402),
          s = o(7056),
          a = o(6263),
          l = o(7986);
        class c extends n.Mo {
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
            var o;
            const i = this.createSgNode(t);
            return (
              (i.properties.tab_name =
                null !== (o = this.props.tabName) && void 0 !== o ? o : ""),
              (i.properties.mountable_id = (0, a.Hb)(
                this.m_sMountableUnqualifiedID
              )),
              (i.properties.icon_uri = this.props.iconUri),
              (i.properties.icon_overlay_key = this.props.iconOverlayKey),
              (i.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, i]
            );
          }
          internalRender() {
            return r.createElement(
              "vsg-node",
              { id: this.props.id },
              r.createElement(
                l.C,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children
              )
            );
          }
        }
        (0, i.gn)([s.ZP], c.prototype, "buildNode", null);
      },
      6730: (e, t, o) => {
        o.d(t, { e: () => s });
        var i = o(655),
          r = o(3402),
          n = o(7056);
        class s extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var o, i;
            const r = this.createSgNode(t);
            return (
              (r.properties.continuous_relatch =
                null !== (o = this.props.bContinuousRelatch) &&
                void 0 !== o &&
                o),
              (r.properties.free_dashboard_transform =
                null !== (i = this.props.bFreeDashboardTransform) &&
                void 0 !== i &&
                i),
              [e, r]
            );
          }
        }
        (0, i.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      6721: (e, t, o) => {
        o.d(t, { i: () => s });
        var i,
          r = o(7294),
          n = o(3402);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(i || (i = {}));
        class s extends n.Mo {
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
              o = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              i = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              n = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return r.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": o,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": i,
                "max-angular-velocity": n,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children
            );
          }
        }
      },
      510: (e, t, o) => {
        o.d(t, { j: () => n });
        var i = o(7294),
          r = o(3402);
        class n extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
              "vsg-head-facing-transform",
              null,
              this.props.children
            );
          }
        }
      },
      8235: (e, t, o) => {
        o.d(t, { x: () => n });
        var i = o(7294),
          r = o(3402);
        class n extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      9744: (e, t, o) => {
        o(7294), o(3402);
      },
      3033: (e, t, o) => {
        o.d(t, { b: () => s });
        var i = o(655),
          r = o(3402),
          n = o(7056);
        class s extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "ltcquad";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            if (
              ((o.properties.width = this.props.width),
              (o.properties.height = this.props.height),
              (o.properties["near-z"] = this.props["near-z"]),
              (o.properties["far-z"] = this.props["far-z"]),
              (o.properties.debug = this.props.debug),
              this.props.diffuse)
            ) {
              let e = this.props.diffuse;
              (o.properties["diffuse-resolution"] = e.resolution),
                (o.properties["diffuse-size"] = e.size);
            }
            if (this.props.specular) {
              let e = this.props.specular;
              if ("string" == typeof e.color) o.properties.color = e.color;
              else {
                let t = (0, r.kh)(e.color, { r: 0, g: 0, b: 0 });
                o.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, o];
          }
        }
        (0, i.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      6135: (e, t, o) => {
        o.d(t, { k: () => n });
        var i = o(7294),
          r = o(3402);
        class n extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, r.Kg)(this.props.xfCurrent.translation),
              t = (0, r.xs)(this.props.xfCurrent.rotation),
              o = (0, r.Kg)(this.props.xfCurrent.scale);
            return i.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: o,
              },
              this.props.children
            );
          }
        }
      },
      7986: (e, t, o) => {
        o.d(t, { C: () => a, s: () => l });
        var i = o(655),
          r = o(3402),
          n = o(7056),
          s = o(6263);
        class a extends r.Mo {
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
        (0, i.gn)([n.ZP], a.prototype, "buildNode", null);
        class l extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (
              (o.properties.mountable_id = (0, s.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (o.properties.dashboard_scale = this.props.fDashboardScale),
              [e, o]
            );
          }
        }
        (0, i.gn)([n.ZP], l.prototype, "buildNode", null);
      },
      142: (e, t, o) => {
        o.d(t, { D: () => s });
        var i = o(655),
          r = o(3402),
          n = o(7056);
        class s extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "opacity";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (o.properties.opacity = this.props.value), [e, o];
          }
        }
        (0, i.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      4132: (e, t, o) => {
        o.d(t, {
          Bl: () => s,
          Ic: () => i,
          Lb: () => m,
          Vv: () => r,
          s_: () => g,
        });
        var i,
          r,
          n,
          s,
          a = o(655),
          l = o(7294),
          c = o(3402),
          d = o(9495),
          u = o(7056),
          h = o(6263);
        function p(e) {
          if (e) return [e.u, e.v];
        }
        function m(e) {
          switch (e) {
            case i.TopLeft:
              return { x: -1, y: 1 };
            case i.TopCenter:
              return { x: 0, y: 1 };
            case i.TopRight:
              return { x: 1, y: 1 };
            case i.CenterLeft:
              return { x: -1, y: 0 };
            case i.Center:
              return { x: 0, y: 0 };
            case i.CenterRight:
              return { x: 1, y: 0 };
            case i.BottomLeft:
              return { x: -1, y: -1 };
            case i.BottomCenter:
              return { x: 0, y: -1 };
            case i.BottomRight:
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
        })(i || (i = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(r || (r = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(n || (n = {})),
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
          createOverdragBlockingElement(e, t, o, i) {
            let r = document.createElement("div");
            (r.style.position = "absolute"),
              (r.style.top = t + "px"),
              (r.style.left = e + "px"),
              (r.style.width = o + "px"),
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
            return null !== (e = this.props.visibility) && void 0 !== e
              ? e
              : s.Visible;
          }
          buildNode(e, t) {
            var o, i, r, n, a;
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
                null !== (o = p(this.m_UVsMin)) && void 0 !== o ? o : void 0),
              (d.properties.uv_max =
                null !== (i = p(this.m_UVsMax)) && void 0 !== i ? i : void 0),
              (d.properties.width =
                null !== (r = this.props.width) && void 0 !== r ? r : void 0),
              (d.properties.height =
                null !== (n = this.props.height) && void 0 !== n ? n : void 0),
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
              o = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + o * e.v,
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
      5230: (e, t, o) => {
        o.d(t, { a: () => a });
        var i = o(655),
          r = o(3402),
          n = o(4132),
          s = o(7056);
        class a extends r.Mo {
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
            let o = null;
            "object" == typeof this.props.location
              ? (o = (0, r.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (o = (0, n.Lb)(this.props.location));
            let i = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (i.properties["anchor-u"] = this.m_latchedPosition.u),
                (i.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (o) {
              const t = { u: 0.5 * o.x + 0.5, v: -0.5 * o.y + 0.5 },
                r = e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
              (i.properties["anchor-u"] = r.u),
                (i.properties["anchor-v"] = r.v);
            } else {
              const o = t.ownerDocument,
                r = t.getBoundingClientRect(),
                n = r.left + r.width / 2,
                s = r.top + r.height / 2,
                a = e.currentPanel.m_Rect;
              if (n < a.x || n > a.x + a.width || s < a.y || s > a.y + a.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = o.defaultView.innerWidth,
                c = o.defaultView.innerHeight;
              if (!(c > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (i.properties["anchor-u"] = n / l),
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
        (0, i.gn)([s.ZP], a.prototype, "buildNode", null);
      },
      9483: (e, t, o) => {
        o(7294), o(3402);
      },
      5565: (e, t, o) => {
        o.d(t, { g: () => l, x: () => i });
        var i,
          r = o(655),
          n = o(3402),
          s = o(7056),
          a = o(6263);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(i || (i = {}));
        class l extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "rendermodel";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            if (
              ((o.properties.source = this.props.source),
              (o.properties["texture-id"] = (0, a.Hb)(
                this.props["texture-id"]
              )),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) o.properties.color = e.color;
              else {
                let t = (0, n.kh)(e.color, { r: 0, g: 0, b: 0 });
                o.properties.color = [t.r, t.g, t.b];
              }
              (o.properties.opacity = e.opacity ? e.opacity : 1),
                (o.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (o.properties.wireframe = this.props.wireframe),
              (o.properties.solid = this.props.solid),
              (o.properties.culling = this.props.culling),
              (o.properties["no-depth-write"] = this.props["no-depth-write"]),
              (o.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, o]
            );
          }
        }
        (0, r.gn)([s.ZP], l.prototype, "buildNode", null);
      },
      9495: (e, t, o) => {
        o.d(t, { n: () => l });
        var i = o(655),
          r = o(7294),
          n = o(4132),
          s = o(7056),
          a = o(6263);
        class l extends r.Component {
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
              (this.m_DomRef = r.createRef()),
              (this.m_scalingDomRef = r.createRef()),
              (this.m_CanvasRef = r.createRef()),
              (this.m_DebugPointerRef = r.createRef());
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
            (n.s_.s_bPanelsAreDirty = !0),
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
            let o = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3)
            );
            for (let e = 0; e < o; e++)
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
              r.createElement(
                "vsg-app",
                {
                  class: e.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                r.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                r.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: l.k_EmbeddedDataRows,
                }),
                r.createElement(
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
              o = t.width / this.m_fCurrentScale,
              i = t.height / this.m_fCurrentScale,
              r = { x: e.innerWidth / o, y: e.innerHeight / i },
              s = Math.min(r.x, r.y, 1);
            s != this.m_fCurrentScale &&
              (1 != s
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + s + "); transform-origin: top left"
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = s),
              (n.s_.s_bPanelsAreDirty = !0)),
              n.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, a.k7)(),
                (n.s_.s_bPanelsAreDirty = !1),
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
                let o = e.m_Rect.x,
                  i = e.m_Rect.x + e.m_Rect.width,
                  r = e.m_Rect.y,
                  n = e.m_Rect.y + e.m_Rect.height,
                  s = 1 + 3 * e.getEmbeddedIndex();
                if (e.isExternal() || o >= i || r >= n)
                  for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
                else
                  this.setPixel(s, (65280 & o) >> 8, 255 & o, 0),
                    this.setPixel(s + 1, (65280 & i) >> 8, 255 & i, 255 & r),
                    this.setPixel(
                      s + 2,
                      (65280 & n) >> 8,
                      255 & n,
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
          setPixel(e, t, o, i, r = 255) {
            (this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = o),
              (this.m_Pixels.data[4 * e + 2] = i),
              (this.m_Pixels.data[4 * e + 3] = r),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e);
          }
        }
        (l.s_Current = null),
          (l.k_EmbeddedDataRows = 1),
          (0, i.gn)([s.ak], l.prototype, "toggleDebugPointer", null),
          (0, i.gn)([s.ak], l.prototype, "onMouseMove", null),
          (0, i.gn)([s.ak], l.prototype, "forceLayoutUpdate", null),
          (0, i.gn)([s.ak], l.prototype, "onMutation", null);
      },
      3402: (e, t, o) => {
        o.d(t, {
          D1: () => l,
          Kg: () => c,
          Mo: () => u,
          QE: () => n,
          Uq: () => s,
          kh: () => a,
          xs: () => d,
        });
        var i = o(7294),
          r = o(6263);
        function n(e, t) {
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
        class u extends i.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = i.createRef()),
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
            return (0, r.ac)(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              (0, r.k7)();
          }
          componentDidUpdate() {
            (0, r.k7)();
          }
          componentWillUnmount() {
            (0, r.sX)(this.m_SGID),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return i.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? i.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        u.s_NextSGID = 1;
      },
      6263: (e, t, o) => {
        o.d(t, {
          Gv: () => w,
          Hb: () => M,
          Mb: () => h,
          OK: () => T,
          ac: () => u,
          iN: () => C,
          k7: () => E,
          mK: () => k,
          qI: () => D,
          sX: () => R,
        });
        var i = o(655),
          r = o(4507);
        function n(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) {
            if ("undefined" == o) return;
            let e = [];
            for (let t of o.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function s(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) return parseFloat(o);
        }
        function a(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) return parseInt(o);
        }
        function l(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0)
            return (
              "true" == o ||
              (o.length > 0 && 0 != parseInt(o) && !isNaN(parseInt(o)))
            );
        }
        function c(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) return o;
        }
        function d(e, t) {
          return M(c(e, t));
        }
        function u(e, t) {
          let o = { type: e, properties: {} };
          return (
            t.id && (o.properties.id = M(t.id)),
            (o.properties.sgid = a(t, "sgid")),
            o
          );
        }
        function h() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function p(e, t) {
          let [o, i] = (function (e, t) {
              let o = t.buildNode;
              if (o) return o(e, t);
              let i = Object.assign({}, e),
                r = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (r = u("transform", t)),
                    (r.properties.translation = n(t, "translation")),
                    (r.properties.rotation = n(t, "rotation")),
                    (r.properties.scale = n(t, "scale")),
                    (r.properties["curvature-pitch"] = s(t, "curvature-pitch")),
                    (r.properties["parent-path"] = c(t, "parent-path")),
                    (r.properties["parent-origin"] = c(t, "parent-origin")),
                    (r.properties["parent-id"] = d(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (r = u("trackingstatevisibility", t)),
                    (r.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (r.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (r.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (r = u("elasticheadtransform", t)),
                    (r.properties["start-angle-threshold"] = s(
                      t,
                      "start-angle-threshold"
                    )),
                    (r.properties["stop-angle-threshold"] = s(
                      t,
                      "stop-angle-threshold"
                    )),
                    (r.properties["ease-in-time"] = s(t, "ease-in-time")),
                    (r.properties["ease-in-power"] = s(t, "ease-in-power")),
                    (r.properties["ease-out-angle-threshold"] = s(
                      t,
                      "ease-out-angle-threshold"
                    )),
                    (r.properties["ease-out-power"] = s(t, "ease-out-power")),
                    (r.properties["min-angular-velocity"] = s(
                      t,
                      "min-angular-velocity"
                    )),
                    (r.properties["max-angular-velocity"] = s(
                      t,
                      "max-angular-velocity"
                    )),
                    (r.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (r.properties["translation-behavior"] = a(
                      t,
                      "translation-behavior"
                    ));
                  break;
                case "VSG-LINE":
                  (r = u("line", t)),
                    (r.properties["target-id"] = d(t, "target-id")),
                    (r.properties.thickness = s(t, "thickness")),
                    (r.properties["start-buffer"] = s(t, "start-buffer")),
                    (r.properties["end-buffer"] = s(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (r = u("line-constrained-transform", t)),
                    (r.properties["target-id"] = d(t, "target-id")),
                    (r.properties["source-id"] = d(t, "source-id")),
                    (r.properties["source-distance"] = s(t, "source-distance")),
                    (r.properties["target-limit"] = s(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (r = u("callout-transform", t)),
                    (r.properties.offset = n(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  r = u("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (r = u("pin-to-view-transform", t)),
                    (r.properties["offscreen-z-depth"] = s(
                      t,
                      "offscreen-z-depth"
                    )),
                    (r.properties["off-axis-limit"] = s(t, "off-axis-limit")),
                    (r.properties["transition-limit"] = s(
                      t,
                      "transition-limit"
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (r = u("manipulation-transform", t)),
                    (r.properties["is-moving"] = l(t, "is-moving")),
                    (r.properties["parent-path"] = c(t, "parent-path")),
                    (r.properties.translation = n(t, "translation")),
                    (r.properties.rotation = n(t, "rotation")),
                    (r.properties.scale = n(t, "scale"));
              }
              return [i, r];
            })(e, t),
            r = [];
          for (let e = 0; e < t.children.length; e++) {
            let i = t.children.item(e);
            if (i.children) {
              let e = p(o, i);
              e && (r = r.concat(e));
            }
          }
          return o.bShouldAbort
            ? null
            : i
            ? (r.length > 0 && (i.children = r), [i])
            : r.length > 0
            ? 1 == r.length
              ? r
              : [{ children: r }]
            : null;
        }
        let m,
          g,
          v,
          _,
          y = [],
          b = null,
          f = null,
          S = null;
        function k(e, t, o) {
          (m = e),
            (g = t),
            (v = o),
            console.log("Setting owning overlay key to " + e);
        }
        function C(e, t) {
          return e + "::" + t;
        }
        function M(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : C(w(), e)
            : null;
        }
        function w() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : m;
        }
        function R(e) {
          y.push(e), E();
        }
        function D() {
          _ = !0;
        }
        function T(e) {
          var t, o;
          (o = e),
            (null == (t = S) || null == o
              ? t == o
              : t.color_mult == o.color_mult &&
                t.reflection_mult == o.reflection_mult &&
                t.roomview_mult.toString() == o.roomview_mult.toString() &&
                t.allow_skydome == o.allow_skydome &&
                t.allow_floornear == o.allow_floornear &&
                t.allow_floorfar == o.allow_floorfar) || ((S = e), E());
        }
        function E() {
          b ||
            (b = window.setTimeout(
              () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  g && (e = g);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: _,
                      sceneColorCorrection: S,
                    },
                    children: p({ currentPanel: null, bShouldAbort: !1 }, e),
                  };
                  f ||
                    (console.log("Initializing sg_mailbox"),
                    (f = new r.N()),
                    yield f.Init("sg_mailbox", v));
                  let o = {
                    type: "update_scene_graph",
                    owning_overlay_key: w(),
                    scene_graph: t,
                    retired_sgids: y,
                  };
                  f.SendMessage("vrcompositor_systemlayer", o),
                    (b = null),
                    (y = []),
                    (_ = !1);
                }),
              0
            ));
        }
      },
      6374: (e, t, o) => {
        var i = o(655),
          r = o(3402),
          n = o(7056);
        class s extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "texture";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (
              (o.properties.id = this.props.id),
              (o.properties.source = this.props.source),
              [e, o]
            );
          }
        }
        (0, i.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      1917: (e, t, o) => {
        o.d(t, { V: () => s });
        var i = o(655),
          r = o(3402),
          n = o(7056);
        class s extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tint";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            if (this.props.color)
              if ("string" == typeof this.props.color)
                o.properties.color = this.props.color;
              else {
                let e = (0, r.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                o.properties.color = [e.r, e.g, e.b];
              }
            else o.properties.color = [1, 1, 1];
            return [e, o];
          }
        }
        (0, i.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      2509: (e, t, o) => {
        o(7294), o(3402);
      },
      6701: (e, t, o) => {
        o.d(t, { w: () => a });
        var i,
          r = o(7294),
          n = o(3402),
          s = o(3573);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(i || (i = {}));
        class a extends n.Mo {
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
            let e, t, o;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (o = this.props.transform.scale))
              : ((e = (0, n.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t = (0, s.UU)(
                  (0, s.mT)(
                    (0, n.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                    Math.PI / 180
                  )
                )),
                (o =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, n.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let a = (0, n.Kg)(e),
              l = (0, n.xs)(t),
              c = (0, n.Kg)(o);
            return r.createElement(
              "vsg-transform",
              {
                translation: a,
                rotation: l,
                scale: c,
                "curvature-pitch": this.props.curvature_pitch,
                "parent-path": this.props.parent_path,
                "parent-origin": i[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children
            );
          }
        }
      },
      3573: (e, t, o) => {
        function i() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function r(e, t, o) {
          return {
            x: t.x + e * (o.x - t.x),
            y: t.y + e * (o.y - t.y),
            z: t.z + e * (o.z - t.z),
          };
        }
        function n(e, t) {
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
            o = 0.5 * e.y,
            i = 0.5 * e.z,
            r = Math.cos(t),
            n = Math.cos(o),
            s = Math.cos(i),
            a = Math.sin(t),
            l = Math.sin(o),
            c = Math.sin(i);
          return {
            w: r * n * s + a * l * c,
            x: a * n * s + r * l * c,
            y: r * l * s - a * n * c,
            z: r * n * c - a * l * s,
          };
        }
        function h(e) {
          let t = e[0][0] + e[1][1] + e[2][2];
          if (t > 0) {
            let o = 2 * Math.sqrt(t + 1);
            return {
              w: 0.25 * o,
              x: (e[1][2] - e[2][1]) / o,
              y: (e[2][0] - e[0][2]) / o,
              z: (e[0][1] - e[1][0]) / o,
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
        function p(e, t, o) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [o.x, o.y, o.z],
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
        o.d(t, {
          Fs: () => a,
          JR: () => c,
          LY: () => d,
          M9: () => m,
          Oq: () => i,
          Pd: () => h,
          UU: () => u,
          Zj: () => n,
          dq: () => g,
          eQ: () => s,
          mT: () => l,
          q9: () => r,
          tS: () => p,
        });
      },
      1469: (e, t, o) => {
        o.d(t, { h: () => n });
        var i = o(655),
          r = o(4507);
        class n {
          constructor() {
            (this.m_mailbox = new r.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return n.instance || (n.instance = new n()), n.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((o, r) =>
              (0, i.mG)(this, void 0, void 0, function* () {
                let i = { type: "transform_request", id: e, flPushDistance: t },
                  n = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    i,
                    "transform_response"
                  );
                n.id == e && n.transform
                  ? o(n.transform)
                  : r("requestSGTransform failed");
              })
            );
          }
        }
      },
      4507: (e, t, o) => {
        o.d(t, { N: () => n });
        var i = o(655),
          r = o(7056);
        class n {
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
              let o = "ws://localhost:27062";
              this.m_sWebSecret && (o += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(o)),
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
                (this.m_sMailboxName = n.EnsureUniqueName(e)),
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
              o = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (o = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let o of this.m_oWaits[t.type])
                o.nMessageId == t.message_id && (o.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`
                  ),
                (o = !0);
            }
            o || console.log("Received unhandled message: ", t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
          }
          WaitForMessage(e, t) {
            return new Promise((o, i) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: o, nMessageId: t });
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
          SendMessageAndWaitForResponse(e, t, o) {
            let i = Object.assign({}, t);
            return (
              null == i.returnAddress &&
                (i.returnAddress = this.m_sMailboxName),
              (i.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, i),
              this.WaitForMessage(o, i.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let o = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (o.message_id = e.message_id), this.SendMessage(e.returnAddress, o);
          }
        }
        (n.s_nNextMailboxNumber = 1),
          (0, i.gn)([r.ak], n.prototype, "OpenWebSocketToHost", null),
          (0, i.gn)([r.ak], n.prototype, "OnWebSocketOpen", null),
          (0, i.gn)([r.ak], n.prototype, "OnWebSocketClose", null),
          (0, i.gn)([r.ak], n.prototype, "WebSocketSend", null),
          (0, i.gn)([r.ak], n.prototype, "OnWebSocketMessage", null);
      },
      1731: (e, t, o) => {
        var i, r, n, s;
        function a() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : i.Unknown;
        }
        o.d(t, {
          GC: () => C,
          Kf: () => c,
          Kg: () => M,
          LL: () => r,
          Op: () => a,
          Pw: () => b,
          QZ: () => n,
          Uk: () => m,
          XX: () => u,
          Z9: () => h,
          a0: () => w,
          l0: () => f,
          lx: () => k,
          qA: () => i,
          qC: () => p,
          qR: () => g,
          vS: () => R,
          wU: () => l,
          xY: () => _,
          zA: () => D,
          zq: () => s,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(i || (i = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(r || (r = {})),
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(s || (s = {}));
        let l = 0,
          c = -1;
        var d, u, h, p, m, g, v, _, y, b, f, S, k, C, M, w, R, D;
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
          })(f || (f = {})),
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
          })(S || (S = {})),
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
          })(C || (C = {})),
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
          })(w || (w = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
          })(R || (R = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(D || (D = {}));
      },
      1732: (e, t, o) => {
        o.d(t, { L: () => S });
        var i,
          r = o(655),
          n = o(7294),
          s = o(7056),
          a = o(3868),
          l = o(6321),
          c = o(3947),
          d = o(1428),
          u = o(2893),
          h = o(7062),
          p = o(2188),
          m = o(8052),
          g = o(8325);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(i || (i = {}));
        class v extends n.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = n.createRef()),
              (this.m_nameRef = n.createRef()),
              (this.m_svgRef = n.createRef()),
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
          ComponentUpdated(e, t, o) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: o }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: o }),
              t == this.props.sourcePath + "/x" && this.setState({ x: o }),
              t == this.props.sourcePath + "/y" && this.setState({ y: o }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: o }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: o }));
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
              n.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                n.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                })
              )
            );
          }
          renderBar(e, t, o) {
            let i = { width: String(100 * o) + "%" };
            return n.createElement(
              "div",
              { className: "TriggerBar " + t },
              n.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, a.Xx)(e)
              ),
              n.createElement(
                "div",
                { className: "TriggerBarBackground" },
                n.createElement("div", {
                  className: "TriggerBarContent",
                  style: i,
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
                o = this.m_svgRef.current.children.namedItem("SourceCircle"),
                r = this.props.side == i.Right,
                n = this.m_nameRef.current.getBoundingClientRect(),
                s = this.m_containerRef.current.getBoundingClientRect(),
                a = this.GetPosition(),
                l = new d.E9(0, n.top + n.height / 2);
              l.x = r ? s.left - 10 : s.right + 10;
              let c = r ? -20 : 20,
                u = l.x + c + "," + l.y + " " + a.x + "," + a.y;
              e.setAttribute("points", u);
              let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
              t.setAttribute("points", h),
                o.setAttribute("cx", a.x + ""),
                o.setAttribute("cy", a.y + "");
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
              n.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                n.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  n.createElement(
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
                n.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
                  },
                  n.createElement(
                    "defs",
                    null,
                    n.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      n.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      n.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      })
                    )
                  ),
                  n.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  n.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  n.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  })
                )
              )
            );
          }
        }
        (0, r.gn)([s.ak], v.prototype, "ComponentUpdated", null),
          (0, r.gn)([s.ak], v.prototype, "UpdateSVGPath", null);
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
            return n.createElement(
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
              n.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                n.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  n.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, a.Xx)("#SourceInputMode_Position")
                  ),
                  n.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    n.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        n.createElement(
                          "div",
                          { style: e },
                          n.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            n.createElement("div", { className: t })
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
        class f extends n.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = n.createRef()),
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
          renderSource(e, t, o) {
            let i = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return n.createElement(_, {
                  key: i,
                  side: o,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return n.createElement(y, {
                  key: i,
                  side: o,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "joystick":
              case "trackpad":
                return n.createElement(b, {
                  key: i,
                  side: o,
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
                return n.createElement(
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
              o = this.ControllerTypeInfo;
            return (
              "/user/hand/left" == this.props.devicePath
                ? o.input_bindingui_left &&
                  ((e = o.input_bindingui_left.uri),
                  (t = o.input_bindingui_left.transform
                    ? o.input_bindingui_left.transform
                    : ""))
                : "/user/hand/right" == this.props.devicePath
                ? o.input_bindingui_right &&
                  ((e = o.input_bindingui_right.uri),
                  (t = o.input_bindingui_right.transform
                    ? o.input_bindingui_right.transform
                    : ""))
                : o.input_bindingui_left
                ? ((e = o.input_bindingui_left.uri),
                  (t = o.input_bindingui_left.transform
                    ? o.input_bindingui_left.transform
                    : ""))
                : o.input_bindingui_right &&
                  ((e = o.input_bindingui_right.uri),
                  (t = o.input_bindingui_right.transform
                    ? o.input_bindingui_right.transform
                    : "")),
              e
                ? n.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    n.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    n.createElement(u.Z, { onReflow: this.OnImageReflow })
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              o = this.ControllerTypeInfo,
              r = 0,
              s = [];
            for (let e in o.input_source) {
              let t = o.input_source[e];
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
            for (let o of c) {
              l += o.height;
              let r = l > a ? i.Right : i.Left,
                n = this.renderSource(o.sSourcePath, o.inputSource, r);
              n && (r == i.Left ? e.push(n) : t.push(n));
            }
            return n.createElement(
              "div",
              { className: "ControllerVisualizer" },
              n.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e
              ),
              this.renderImage(),
              n.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t
              )
            );
          }
        }
        (0, r.gn)([s.ak], f.prototype, "OnImageLoaded", null),
          (0, r.gn)([s.ak], f.prototype, "OnImageReflow", null);
        let S = class extends n.Component {
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
              let o = e.device + t;
              this.m_componentRegistrations[o] &&
                this.m_componentRegistrations[o](e.device, t, e.components[t]);
            }
          }
          RegisterSourceVisualizer(e, t, o) {
            this.m_componentRegistrations[e + t] = o;
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
              o = this.GetSortedDevices();
            if (!o)
              return n.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, a.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                n.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, a.Xx)("#TestController_NoController")
                )
              );
            for (let i of o)
              "TrackedDeviceClass_HMD" != i.class &&
                (i.root_path == this.state.devicePath && (e = i.serial_number),
                t.push({
                  value: i.root_path,
                  sLabel: (0, a.Xx)("#" + i.root_path),
                }));
            return n.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, a.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: n.createElement(m.U5, {
                  leftControls: [
                    n.createElement(g.hu, {
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
                n.createElement(f, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                })
            );
          }
        };
        (0, r.gn)([s.ak], S.prototype, "OnConnectedDevicesChanged", null),
          (0, r.gn)([s.ak], S.prototype, "OnUpdateComponentStates", null),
          (S = (0, r.gn)([h.Pi], S));
      },
      1884: (e, t, o) => {
        o.d(t, { V: () => c });
        var i = o(655),
          r = o(7294),
          n = o(7056),
          s = o(3868),
          a = o(6321);
        class l extends r.Component {
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
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:"
                )
              ),
              e.pressed)
            )
              for (let o of e.pressed)
                t.push(
                  r.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o
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
              for (let o of e.touched)
                t.push(
                  r.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o
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
              for (let o of e.supported_buttons)
                t.push(
                  r.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o
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
            for (let o of e.axis)
              t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  o.x.toFixed(2),
                  " Y: ",
                  o.y.toFixed(2)
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
                  (0, s.Xx)("#LegacyDebugger_NoApp")
                );
          }
        }
        (0, i.gn)([n.ak], l.prototype, "OnLegacyInputFrame", null);
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
      1776: (e, t, o) => {
        var i = o(655),
          r = o(7294),
          n = o(3935),
          s = o(7056),
          a = o(6321),
          l = o(1428),
          c = o(3868),
          d = o(3947),
          u = o(9670),
          h = o(1818),
          p = o(7677),
          m = o(3446),
          g = o(7062),
          v = o(197);
        function _(e, t) {
          let o = "";
          switch (t.mode) {
            case "dpad":
            case "dpad_touch":
            case "dpad_click":
              o =
                "/input/thumbstick" == t.input_path ||
                "/input/joystick" == t.input_path
                  ? "_" + t.slot
                  : "_dpad_" + t.slot;
              break;
            case "button":
              ("/input/trackpad" != t.input_path &&
                "/input/joystick" != t.input_path) ||
                (o = "_click");
          }
          switch (t.slot) {
            case "position":
              o = "_move";
              break;
            case "scroll":
              o = "_scroll";
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
                ? i + "button_trackbutton" + o + ".svg"
                : i + "button_trackpad" + o + ".svg";
            case "/input/thumbstick":
            case "/input/joystick":
              return i + "button_thumbstick" + o + ".svg";
            case "/input/trigger":
              return i + "button_trigger.svg";
          }
          return null;
        }
        function y(e) {
          switch (e) {
            case "north":
            case "south":
            case "east":
            case "west":
            case "center":
              return "dpad";
            default:
              return "button";
          }
        }
        class b extends r.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          renderSlot(e, t) {
            let o,
              i = _(this.props.controllerType, e);
            o = i
              ? r.createElement("img", {
                  className: "BindingCalloutIcon",
                  src: i,
                })
              : r.createElement("div", { className: "BindingCalloutIcon" });
            let n,
              s = (function (e) {
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
              (n = s
                ? r.createElement("img", {
                    className: "BindingCalloutModifierIcon",
                    src: s,
                  })
                : r.createElement("div", {
                    className: "BindingCalloutModifierIcon",
                  })),
              r.createElement(
                "div",
                { className: "BindingCalloutContents", key: t },
                o,
                n,
                r.createElement(
                  "div",
                  { className: "BindingCalloutLabelContainer" },
                  r.createElement(
                    "div",
                    { className: "Label" },
                    e.localized_action_name
                  ),
                  r.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot" },
                    this.props.localizedInputName,
                    " : ",
                    (0, c.Xx)("#SourceInputMode_" + e.slot)
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
            let o =
              this.props.devicePath +
              this.props.inputCallout.input_path +
              "_component";
            return r.createElement(
              "div",
              { className: "BindingCalloutContainer" },
              r.createElement(a.CH, {
                id: o,
                sDevicePath: this.props.devicePath,
                sInputPath: this.props.inputCallout.input_path,
                key: o,
              }),
              r.createElement(
                "div",
                { className: t },
                this.props.inputCallout.slot_callouts.map((e, t) =>
                  this.renderSlot(e, String(t))
                ),
                r.createElement(
                  "div",
                  { className: "CalloutAnchorPoint" },
                  r.createElement(
                    a.at,
                    null,
                    this.props.inputActive &&
                      r.createElement(a.x1, {
                        target_id: o,
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
        class f extends r.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            let e = [],
              t = [];
            for (let o of this.props.chordCallout.inputs) {
              let i = o.device_path + o.input_path + o.slot,
                n = {
                  device_path: o.device_path,
                  input_path: o.input_path,
                  mode: y(o.slot),
                  slot: o.slot,
                  localized_action_name:
                    this.props.chordCallout.localized_action_name,
                };
              e.length > 0 &&
                e.push(
                  r.createElement(
                    "div",
                    { className: "ChordCalloutPlus", key: "plus" + e.length },
                    "+"
                  )
                ),
                e.push(
                  r.createElement("img", {
                    className: "BindingCalloutIcon",
                    key: i + "_icon",
                    src: _(this.props.controllerType, n),
                  })
                ),
                t.push(
                  r.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot", key: i + "_text" },
                    d.I.LocalizeControllerString(
                      this.props.controllerTypeInfo,
                      o.input_path
                    ),
                    " : ",
                    (0, c.Xx)("#SourceInputMode_" + o.slot)
                  )
                );
            }
            let o = "ChordCalloutContainer";
            return (
              this.props.inputActive && (o += " CalloutInputActive"),
              r.createElement(
                "div",
                { className: o },
                r.createElement("div", { className: "ChordCalloutHeader" }, e),
                r.createElement(
                  "div",
                  { className: "ChordCalloutBody" },
                  r.createElement(
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
        class S extends r.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
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
            for (let e of Object.keys(this.props.device.input_callouts))
              t[e] = !1;
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
            if (
              !VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path)
            )
              return null;
            let e = -0.05,
              t = { x: -0.08, y: 0.05, z: 0.12 },
              o = !0;
            "/user/hand/left" == this.props.device.device_path &&
              ((t.x = -t.x), (e = -e), (o = !1));
            let i = d.I.GetControllerTypeInfo(this.props.controllerType);
            if (!i) return null;
            let n = [],
              s = Object.keys(this.props.device.input_callouts);
            for (let e of s) {
              let t = this.props.device.input_callouts[e],
                a = (t.slot_callouts.length, e);
              i && (a = d.I.LocalizeControllerString(i, e));
              let l = i.input_source[e],
                c = 999;
              l && l.order && (c = l.order);
              let u = r.createElement(b, {
                devicePath: this.props.device.device_path,
                inputCallout: t,
                leftAlign: o,
                inputActive:
                  1 == s.length || this.state.input_state[t.input_path],
                localizedInputName: a,
                controllerType: this.props.controllerType,
                key: this.props.device.device_path + e,
              });
              n.push({ order: c, callout: u });
            }
            n.sort((e, t) => e.order - t.order);
            let l = n.map((e) => e.callout),
              c = [];
            for (let e of this.props.device.chords) {
              let t = !1;
              for (let o of e.inputs)
                t = t || this.state.input_state[o.input_path];
              c.push(
                r.createElement(f, {
                  controllerTypeInfo: i,
                  chordCallout: e,
                  controllerType: this.props.controllerType,
                  key: "chord_" + c.length,
                  inputActive: t,
                })
              );
            }
            return r.createElement(
              a.wx,
              { parent_path: this.props.device.device_path },
              r.createElement(
                a.A4,
                { vOffset: t },
                r.createElement(
                  a.jm,
                  null,
                  r.createElement(
                    a.wx,
                    { rotation: { y: o ? 7 : -7 } },
                    r.createElement(
                      a.wx,
                      { translation: { x: e } },
                      r.createElement(
                        a.s_,
                        { width: 0.1 },
                        r.createElement(
                          "div",
                          { className: "FlexColumn BindingCalloutColumn" },
                          l,
                          c
                        )
                      )
                    )
                  )
                )
              )
            );
          }
        }
        (0, i.gn)([s.ak], S.prototype, "OnInputActiveState", null);
        class k extends r.Component {
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
                  o = (7 * Math.PI) / 8,
                  i = [];
                for (let r = 0; r < e; r++) {
                  let n = t + ((o - t) * r) / (e - 1),
                    s = { x: -Math.cos(n), y: Math.sin(n) };
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
            return !(
              e.right < t.left ||
              e.left > t.right ||
              e.bottom < t.top ||
              e.top > t.bottom
            );
          }
          HasCollision(e, t) {
            for (let o = 0; o < e.length; o++)
              for (let i = 0; i < e.length; i++) {
                if (o == i) continue;
                let r = this.ComputeActualRect(e[o], t),
                  n = this.ComputeActualRect(e[i], t);
                if (this.HasIntersection(r, n)) return !0;
              }
            return !1;
          }
          FindDistanceThatFits(e, t, o) {
            let i = t;
            for (; this.HasCollision(e, i); ) i += o;
            return i;
          }
          render() {
            return this.props.devices
              ? r.createElement(
                  "div",
                  { className: "DeviceCalloutList" },
                  Object.keys(this.props.devices).map((e) =>
                    r.createElement(
                      "div",
                      { key: e, className: "DeviceCalloutListEntry" },
                      r.createElement(S, {
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
        let C = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              this.m_mailbox.Init(v.Ml).then(() => {
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
              m.G3.Init(!1),
              (this.state = {});
          }
          GetDefaultControllerType() {
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = e.find((e) => e.eClass == a.qR.Controller);
            return (
              t || (t = e.find((e) => e.eClass == a.qR.HMD)),
              t
                ? VRHTML.VRProperties.GetStringProperty(
                    t.unIndex,
                    a.Uk.ControllerType_String
                  )
                : null
            );
          }
          SendShouldShowBindingCalloutsResponse(e, t) {
            let o = {
              type: "should_show_binding_callouts_response",
              app_key: e.app_key,
              has_callouts: t,
            };
            this.m_mailbox.SendResponse(e, o);
          }
          OnShouldShowBindingCallouts(e) {
            let t = this.GetDefaultControllerType();
            (0, l._l)(e.app_key)
              .then((o) => {
                let i = "legacy" == o.category,
                  r = !i;
                return (
                  i &&
                    (r =
                      o.current_binding_url[t] !=
                      (o.default_bindings && o.default_bindings[t])),
                  r
                    ? (this.SendShouldShowBindingCalloutsResponse(e, !0), null)
                    : (0, l.Cl)(e.app_key, t, o.current_binding_url[t])
                );
              })
              .then((t) => {
                let o = !1;
                if (t.binding_config.alias_info)
                  for (let e in t.binding_config.alias_info) {
                    let i = t.binding_config.alias_info[e];
                    if (!i.hidden && i.alias_name) {
                      o = !0;
                      break;
                    }
                  }
                t.binding_config.simulated_actions &&
                  t.binding_config.simulated_actions.length > 0 &&
                  (o = !0),
                  this.SendShouldShowBindingCalloutsResponse(e, o);
              })
              .catch((t) => {
                this.SendShouldShowBindingCalloutsResponse(e, !1);
              });
          }
          OnRequestBindingCallouts(e) {
            let t,
              o = e.controller_type
                ? e.controller_type
                : this.GetDefaultControllerType();
            (0, l._l)(e.app_key)
              .then(
                (i) => (
                  (t = i), (0, l.Cl)(e.app_key, o, t.current_binding_url[o])
                )
              )
              .then((i) => {
                (Object.assign({}, e).controller_type = o),
                  this.ShowCallouts(e, o, t, i.binding_config);
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
              for (let o of e.required_options) if (!t.options[o]) return !1;
            if (e.forbidden_options)
              for (let o of e.forbidden_options) if (t.options[o]) return !1;
            return !0;
          }
          DoesActionSetHaveBindings(e, t) {
            if (
              t.bindings &&
              t.bindings[e.name] &&
              t.bindings[e.name].sources.length > 0
            ) {
              let t = !1;
              for (let o of e.actions)
                if (!o.hide_callout) {
                  t = !0;
                  break;
                }
              return t;
            }
            return !1;
          }
          DetermineDefaultActionSet(e, t) {
            for (let o of e.action_sets)
              if (
                this.IsActionSetAllowed(o, t) &&
                this.DoesActionSetHaveBindings(o, t)
              )
                return o.name;
          }
          ShowCallouts(e, t, o, i) {
            let r = null,
              n = null;
            if (e.action) {
              e: for (let t of o.action_sets)
                if (this.DoesActionSetHaveBindings(t, i))
                  for (let o of t.actions)
                    if (o.name.toUpperCase() == e.action.toUpperCase()) {
                      r = t.name;
                      break e;
                    }
              n = e.action.toUpperCase();
            } else
              r = e.action_sets
                ? e.action_sets[0]
                : this.DetermineDefaultActionSet(o, i);
            r &&
              this.setState({
                actionManifest: o,
                bindingConfig: i,
                sActionSet: r,
                sRestrictToAction: n,
                sAppKey: e.app_key,
                sControllerType: t,
              });
          }
          ComputeCalloutsForActionSet(e) {
            let t = [],
              o = this.state.bindingConfig.bindings[e.name];
            if (o && o.sources)
              for (let i of o.sources)
                if (i.inputs)
                  for (let o of Object.keys(i.inputs)) {
                    let r = i.inputs[o];
                    if (!r.output) continue;
                    if (
                      this.state.sRestrictToAction &&
                      r.output.toUpperCase() != this.state.sRestrictToAction
                    )
                      continue;
                    let n = i.path.indexOf("/input");
                    if (-1 == n) continue;
                    let s = {
                        device_path: i.path.substring(0, n),
                        input_path: i.path.substring(n),
                        mode: i.mode,
                        slot: o,
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
              o = this.state.bindingConfig.bindings[e.name];
            if (o && o.chords)
              for (let i of o.chords) {
                if (!i.inputs || !i.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  i.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let o = e.actions.find(
                  (e) => e.name.toUpperCase() == i.output.toUpperCase()
                );
                if (!o) continue;
                let r = { inputs: [], localized_action_name: o.localized_name };
                for (let e of i.inputs) {
                  if (2 != e.length) continue;
                  let t = e[0].indexOf("/input");
                  if (-1 == t) continue;
                  let o = {
                    device_path: e[0].substring(0, t),
                    input_path: e[0].substring(t),
                    slot: e[1],
                  };
                  r.inputs.push(o);
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
            for (let o of this.state.actionManifest.action_sets)
              (o.name != this.state.sActionSet &&
                o.display_with != this.state.sActionSet) ||
                ((e = e.concat(this.ComputeCalloutsForActionSet(o))),
                (t = t.concat(this.ComputeChordCalloutsForActionSet(o))));
            return this.GroupCallouts(e, t);
          }
          GroupCallouts(e, t) {
            let o = {};
            for (let t of e) {
              let e = t.device_path.toLowerCase();
              o.hasOwnProperty(e) ||
                (o[e] = { device_path: e, input_callouts: {}, chords: [] });
              let i = o[e];
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
              for (let o of e.inputs)
                if (o.device_path.toLowerCase() != t) {
                  i = !0;
                  break;
                }
              i
                ? console.log(
                    "chord is multi-device, which we don't know how to draw yet",
                    e
                  )
                : o[t].chords.push(e);
            }
            return o;
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
              o = {
                device_path: this.state.tutorialCallout.device_path,
                input_callouts: {},
                chords: [],
              };
            o.input_callouts[this.state.tutorialCallout.input_path] = t;
            let i = {};
            return (
              (i[this.state.tutorialCallout.device_path] = o),
              r.createElement(k, {
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
                let o = "ActionSetName ButtonControl";
                e.name == this.state.sActionSet && (o += " ActionSetSelected"),
                  t.push(
                    r.createElement(
                      h.z,
                      {
                        className: o,
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
            let o = u.S.GetApp(this.state.sAppKey);
            return r.createElement(
              "div",
              { className: "CalloutTopLevelContainer" },
              !this.state.sRestrictToAction &&
                r.createElement(
                  "div",
                  { className: "CalloutActionSetDialogContainer" },
                  r.createElement(
                    a.wx,
                    { parent_path: "/user/head" },
                    r.createElement(
                      a.iC,
                      { start_angle_threshold: 40, stop_angle_threshold: 5 },
                      r.createElement(
                        a.wx,
                        { rotation: { x: -10, y: 10, z: 0 } },
                        r.createElement(
                          a.wx,
                          {
                            translation: {
                              x: -0,
                              y: -0,
                              z: -0.85 * p.g.getDashboardDistance(),
                            },
                          },
                          r.createElement(
                            a.s_,
                            {
                              width: 0.65 * p.g.getDashboardScale(),
                              interactive: !0,
                            },
                            r.createElement(
                              h.q,
                              { className: "BindingCalloutActionPanel" },
                              o &&
                                r.createElement(
                                  "div",
                                  { className: "BindingCalloutAppHeader" },
                                  r.createElement("img", {
                                    className: "BindingCalloutImage",
                                    src: u.S.GetAppImageURL(this.state.sAppKey),
                                  }),
                                  r.createElement(
                                    "div",
                                    { className: "BindingCalloutTitle" },
                                    "Controller Bindings"
                                  ),
                                  r.createElement(
                                    "div",
                                    { className: "BindingCalloutConfigName" },
                                    this.state.bindingConfig.name
                                  )
                                ),
                              r.createElement(
                                "div",
                                { className: "BindingCalloutActionList" },
                                t,
                                r.createElement(
                                  h.z,
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
              r.createElement(k, {
                devices: e,
                controllerType: this.state.sControllerType,
              })
            );
          }
        };
        (0, i.gn)([s.ak], C.prototype, "OnShouldShowBindingCallouts", null),
          (0, i.gn)([s.ak], C.prototype, "OnRequestBindingCallouts", null),
          (0, i.gn)([s.ak], C.prototype, "OnCancelBindingCallouts", null),
          (0, i.gn)([s.ak], C.prototype, "OnRequestTutorialCallout", null),
          (0, i.gn)([s.ak], C.prototype, "OnCloseCallouts", null),
          (C = (0, i.gn)([g.Pi], C)),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              a.Z9.MakeOverlaysInteractiveIfVisible,
              !0
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              a.qC.Mouse
            ),
          (0, c.CK)(
            ["bindingui"],
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetSteamVRLanguage()
          )
            .then(() => d.I.Init())
            .then(() => u.S.Init())
            .then(() => {
              n.render(
                r.createElement(a.n0, null, r.createElement(C, null)),
                document.getElementById("root")
              );
            });
      },
      7968: (e, t, o) => {
        o.d(t, { A: () => i, X: () => l });
        var i,
          r = o(655),
          n = o(7294),
          s = o(7056),
          a = o(6321);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(i || (i = {}));
        class l extends n.Component {
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
              o = a.ZP.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex
              );
            let r = !1;
            if (t) {
              const t =
                null !==
                  (e = a.ZP.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    a.Uk.DeviceBatteryPercentage_Float
                  )) && void 0 !== e
                  ? e
                  : 0;
              (r = a.ZP.VRProperties.GetBoolProperty(
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
            let n = l.GetBatteryIcon(
                t,
                r,
                this.batteryLevelStable,
                i.HorizontalPips
              ),
              s = this.GetRoleIcon(o);
            (n == this.state.batteryIconPath && s == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: n, roleIconPath: s });
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
          static GetBatteryIcon(e, t, o, r) {
            if (!e) return null;
            const n =
              r == i.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? o < 0.15
                ? n + "_charging_red.png"
                : n + "_charging.png"
              : 0 == o
              ? null
              : o < 0.15
              ? n + "_low.png"
              : o < 0.3
              ? n + "_battery_1.png"
              : o < 0.6
              ? n + "_battery_2.png"
              : o < 0.9
              ? n + "_battery_3.png"
              : n + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, o) {
            e == a.XX.Activated &&
              o == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return n.createElement(
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
              n.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                n.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  n.createElement(
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
                    n.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    })
                  ),
                  n.createElement(
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
                    n.createElement("img", {
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
          (0, r.gn)([s.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, r.gn)([s.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, r.gn)([s.ak], l.prototype, "OnDeviceEvent", null);
      },
      7677: (e, t, o) => {
        o.d(t, { g: () => de, _: () => ne });
        var i,
          r,
          n = o(655),
          s = o(6321),
          a = o(7056),
          l = o(2188),
          c = o(7294),
          d = o(9942),
          u = o(1818),
          h = o(1219),
          p = o(7264),
          m = o(197),
          g = o(3868),
          v = o(4916),
          _ = o(6882),
          y = o(6192),
          b = o(9015),
          f = o(3446),
          S = o(7062),
          k = o(7968),
          C = o(1307);
        function M(e) {
          switch (e) {
            case r.LeftHand:
              return "/user/hand/left";
            case r.RightHand:
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
        })(r || (r = {}));
        let w = (i = class extends c.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, s.Oq)(),
                sParent: M(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = s.Kf),
              (this.m_moveDeviceRole = s.Kg.TrackedControllerRole_Invalid);
          }
          componentDidMount() {
            this.setInitialTransformForLocation();
          }
          componentDidUpdate(e, t) {
            e.dockLocation != this.props.dockLocation &&
              this.setState(
                {
                  sParent: M(this.props.dockLocation),
                  xfTransform: (0, s.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation
              );
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case r.Dashboard:
              case r.LeftHand:
              case r.RightHand:
                return 0.25;
              case r.World:
                return 0.5;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case r.LeftHand:
                case r.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, i.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case r.World: {
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
            let e = (0, s.Oq)();
            switch (
              ((e.rotation = (0, s.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case r.Dashboard:
              case r.LeftHand:
              case r.RightHand:
                this.setState({ xfTransform: e });
                break;
              case r.World:
                let t = 0;
                s.hz
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
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_LeftHand
            ) != s.Kf && (t = VRHTML.GetPose("/user/hand/left", s.zq.Standing));
            let o = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand
            ) != s.Kf &&
              (o = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let n = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                o && n.push({ pose: o, location: r.RightHand });
                break;
              case "/user/hand/right":
                t && n.push({ pose: t, location: r.LeftHand });
                break;
              case "/user/head":
                t && n.push({ pose: t, location: r.LeftHand }),
                  o && n.push({ pose: o, location: r.RightHand });
            }
            if (0 == n.length)
              return void setTimeout(this.computeDestination, i.sfMovePulseMS);
            let a = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform
            );
            n.forEach((e) => {
              let t = VRHTML.ChangeBasis(a, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > i.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (C.LJ.Instance.triggerHaptic(C.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: r.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == r.World &&
                      this.state.destination == r.World)) &&
                  (C.LJ.Instance.triggerHaptic(C.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, i.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n"
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == s.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex
              );
            let e,
              t,
              o = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
            switch (this.props.dockLocation) {
              case r.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_LeftHand
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
                break;
              case r.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_RightHand
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: s.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case s.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case s.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let i = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              n = VRHTML.ChangeBasis(i, o.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: n,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == r.World,
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
              this.state.destination == r.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_LeftHand
                ) == s.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == r.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_RightHand
                ) == s.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
            }
            let o,
              i = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case r.LeftHand:
                o = e;
                break;
              case r.RightHand:
                o = t;
                break;
              default:
                o = i;
            }
            let n = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                n.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              l = VRHTML.ChangeBasis(a, o.xfDeviceToAbsoluteTracking);
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
            let o = { x: 0, y: 0 };
            try {
              o = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let n =
                (null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1) * this.state.fOverlayScale,
              a = (n * o.y) / o.x;
            if (!this.props.bVisible)
              return c.createElement(
                s.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                c.createElement(
                  s.s_,
                  {
                    overlay_key: this.props.sOverlayKey,
                    height: a,
                    width: void 0,
                    interactive: !0,
                    origin: s.Ic.BottomCenter,
                  },
                  c.createElement(s.sl, {
                    mountedId: (0, s.iN)(
                      m.GN,
                      this.props.sOverlayKey + ".cursor"
                    ),
                  })
                )
              );
            let l = a + i.sfOverlayTrayHeight,
              d = Math.max(n, 0.175),
              p = l / 2 - i.sfOverlayTrayHeight;
            return c.createElement(
              s.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              c.createElement(
                s.wx,
                {
                  translation: { y: p, z: -0.005 },
                  scale: { x: d, y: l, z: 0.008 },
                },
                c.createElement(
                  s.VW,
                  { color: { r: 0.016, g: 0.017, b: 0.02 } },
                  c.createElement(s.gQ, { solid: !0, source: "unit_cube" })
                )
              ),
              c.createElement(
                s.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: a,
                  width: void 0,
                  interactive: !0,
                  origin: s.Ic.BottomCenter,
                },
                c.createElement(s.sl, {
                  mountedId: (0, s.iN)(
                    m.GN,
                    this.props.sOverlayKey + ".cursor"
                  ),
                })
              ),
              c.createElement(
                s.s_,
                {
                  height: i.sfOverlayTrayHeight,
                  width: void 0,
                  interactive: !0,
                  origin: s.Ic.TopCenter,
                },
                c.createElement(
                  "div",
                  { className: "WindowTray" },
                  c.createElement(h.iR, {
                    additionalClassName: "WindowTraySlider",
                    min: i.sfOverlayScaleMin,
                    max: i.sfOverlayScaleMax,
                    value: this.state.fOverlayScale,
                    valueStyleVariant: h.px.OnHandle,
                    onChange: this.onOverlayScaleChanged,
                    detents: [0.25, 0.5, 1],
                    renderValue: (e) => (100 * e).toFixed(0) + "%",
                  }),
                  c.createElement(
                    u.z,
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
                    u.z,
                    {
                      className: "WindowTrayButton",
                      key: "undock",
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                      title: "Return to Dashboard",
                      onClick: () => {
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          r.Dashboard
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
                    s.wx,
                    {
                      parent_path:
                        this.state.destination == r.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    c.createElement(s.x1, {
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
        (w.sfMaxDockDist = 0.4),
          (w.sfMovePulseMS = 100),
          (w.sfOverlayTrayHeight = 0.025),
          (w.sfOverlayScaleMin = 0.1),
          (w.sfOverlayScaleMax = 2),
          (0, n.gn)([a.ZP], w.prototype, "onOverlayScaleChanged", null),
          (0, n.gn)([a.ZP], w.prototype, "computeDestination", null),
          (0, n.gn)([a.ZP], w.prototype, "startMove", null),
          (0, n.gn)([a.ZP], w.prototype, "endMove", null),
          (w = i = (0, n.gn)([S.Pi], w));
        var R,
          D,
          T = o(7679),
          E = o(9392);
        let I = (R = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new s.Nv()),
              (this.m_refWindowScrollPanel = c.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(R.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var o, i;
            null === (o = this.m_refWindowScrollPanel.current) ||
              void 0 === o ||
              o.scrollTo({
                left:
                  null === (i = this.m_refWindowScrollPanel.current) ||
                  void 0 === i
                    ? void 0
                    : i.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, o, i;
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
              T.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              r &&
                c.createElement(
                  E.P,
                  {
                    scrollDirection: E.I.Horizontal,
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
                    null === (o = this.state.desktopView) || void 0 === o
                      ? void 0
                      : o.state.desktopIndices.map((e) => {
                          var t;
                          return c.createElement(T.zN, {
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
                      null === (i = this.state.desktopView) || void 0 === i
                        ? void 0
                        : i.state.mapWindowInfo.keys()
                    ).map((e) => {
                      var t, o, i;
                      return c.createElement(T.zN, {
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
                              null === (o = this.state.desktopView) ||
                                void 0 === o
                                ? void 0
                                : o.state.mapWindowInfo.get(e).sHwnd
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
                  c.createElement(T.zN, {
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
                c.createElement(T.zN, {
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
        (I.k_sMailboxName = "systemui_desktoptray"),
          (I = R = (0, n.gn)([S.Pi], I));
        let x = (D = class extends c.Component {
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
              this.m_mailbox.Init(D.k_sMailboxName).then(() => {});
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
                  (e = f.G3.settings.get("/settings/dashboard/desktopIndex")) &&
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
              f.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e
              );
          }
          onDesktopChange(e) {
            f.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
              o = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));

            )
              o.push(t), t++;
            (null !==
              (e = f.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > o.length &&
              f.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: o });
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
                c.createElement(T.zN, {
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
                (e = f.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? m.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? c.createElement(s.sl, {
                    mountedId: (0, s.iN)(m.GN, "valve.steam.desktop"),
                  })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? c.createElement(
                      T.lL,
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
                        s.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height:
                            this.props.fActiveOverlayScale *
                            D.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: s.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        c.createElement(s.at, {
                          id: m.t3,
                          location: s.Ic.TopCenter,
                        }),
                        c.createElement(s.sl, {
                          mountedId: (0, s.iN)(
                            m.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor"
                          ),
                        }),
                        c.createElement(s.at, {
                          id: m.Gl,
                          location: s.Ic.BottomCenter,
                        })
                      )
                    )
                  : c.createElement(
                      c.Fragment,
                      null,
                      c.createElement(
                        s.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height:
                            this.props.fActiveOverlayScale *
                            D.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: s.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        c.createElement(s.at, {
                          id: m.t3,
                          location: s.Ic.TopCenter,
                        }),
                        c.createElement(s.sl, {
                          mountedId: (0, s.iN)(
                            m.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor"
                          ),
                        }),
                        c.createElement(s.at, {
                          id: m.Gl,
                          location: s.Ic.BottomCenter,
                        })
                      )
                    )
                : c.createElement(
                    T.lL,
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
        (x.k_sMailboxName = "systemui_desktopview"),
          (x.k_nDesktopPanelBaseHeight = 2),
          (0, n.gn)([l.Fl], x.prototype, "desktopCount", null),
          (0, n.gn)([l.Fl], x.prototype, "sCurrentOverlayKey", null),
          (0, n.gn)([l.Fl], x.prototype, "currentDesktopIndex", null),
          (0, n.gn)([l.Fl], x.prototype, "currentWindowHwnd", null),
          (0, n.gn)([a.ZP], x.prototype, "onDesktopScaleChange", null),
          (0, n.gn)([a.ZP], x.prototype, "onDesktopChange", null),
          (0, n.gn)([a.ZP], x.prototype, "onDesktopViewUpdating", null),
          (0, n.gn)([a.ZP], x.prototype, "onDesktopViewReady", null),
          (0, n.gn)([a.ZP], x.prototype, "onWindowViewChange", null),
          (0, n.gn)([a.ZP], x.prototype, "ShowDesktop", null),
          (x = D = (0, n.gn)([S.Pi], x));
        var P,
          O = o(505),
          V = o(3371),
          L = o(1058);
        let B = (P = class extends c.Component {
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
                  className: (0, L.LJ)("PortraitAppImageContainer", [
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
        (B.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (B.s_failedImages = []),
          (0, n.gn)([a.ak], B.prototype, "loadNextImage", null),
          (0, n.gn)([a.ak], B.prototype, "onLoad", null),
          (0, n.gn)([a.ak], B.prototype, "onError", null),
          (B = P = (0, n.gn)([S.Pi], B));
        var N,
          H = o(8052);
        class A extends c.Component {
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
            const e = y.H.Instance.SceneAppKey;
            V.f.OpenDeepLink(V.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = y.H.Instance.SceneAppKey;
            O.Ux.OpenDeepLink(O.Yw.Name, e);
          }
          render() {
            var e;
            const t = y.H.Instance.SceneAppKey,
              o = y.H.Instance.SceneAppName,
              i = y.H.Instance.SceneApplicationState,
              r = y.H.Instance.SceneAppIsHome,
              n = f.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              a = !(
                null !==
                  (e = f.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              l = f.G3.apps && f.G3.apps.find((e) => e.key == t);
            let d = !1;
            switch (i) {
              case s.xY.Quitting:
              case s.xY.Starting:
              case s.xY.Waiting:
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
              T.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
              },
              c.createElement(
                "div",
                { className: "ArtworkColumn" },
                c.createElement(B, { appkey: t, title: o, imageUrl: h })
              ),
              c.createElement(
                "div",
                { className: "InfoColumn" },
                c.createElement("div", { className: "NowPlayingAppTitle" }, o),
                c.createElement(
                  u.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  r
                    ? (0, g.Xx)("#Return_To_Home")
                    : (0, g.Xx)("#Return_To_Game")
                ),
                a &&
                  c.createElement(
                    H.ls,
                    {
                      icon: H.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, g.Xx)("#Controller_Bindings")
                  ),
                a &&
                  c.createElement(
                    H.ls,
                    { icon: H.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, g.Xx)("#App_Video_Settings")
                  ),
                !r &&
                  n &&
                  c.createElement(
                    u.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, g.Xx)("#Exit_Game")
                  )
              )
            );
          }
        }
        (0, n.gn)([a.ak], A.prototype, "onExitApp", null),
          (0, n.gn)([a.ak], A.prototype, "onReturnToGame", null),
          (0, n.gn)(
            [a.ak],
            A.prototype,
            "onOpenAppControllerBindingSettings",
            null
          ),
          (0, n.gn)([a.ak], A.prototype, "onOpenAppVideoSettings", null),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(N || (N = {}));
        const F = (e) =>
          c.createElement(
            "div",
            {
              className: (0, L.LJ)("ButtonContainer", N[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            c.createElement(
              u.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == N.Left
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
            const o = this.m_refScrollPanel.current;
            if (!o) return;
            if (o.isThrown)
              return void o.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const i = o.children;
            if (!i || 0 == i.length) return;
            const r =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              n = i[0],
              s = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : o.scrollLeft,
              a = n.getBoundingClientRect().left + o.scrollLeft,
              l = n.clientWidth,
              c = o.clientWidth,
              d = Math.floor(c / l) - 1,
              u = Math.round((s - a + r + 1) / l) + d * e - 0.4999,
              h = u > 0 ? u * l + a - r : 0;
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
                className: (0, L.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames
                ),
              },
              c.createElement(
                E.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: E.I.Horizontal,
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
                      side: N.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    c.createElement(F, {
                      side: N.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    })
                )
            );
          }
        }
        (0, n.gn)([a.ZP], U.prototype, "onAnimationFrame", null),
          (0, n.gn)([a.ZP], U.prototype, "onScroll", null),
          (0, n.gn)([a.ZP], U.prototype, "onLeftButtonClick", null),
          (0, n.gn)([a.ZP], U.prototype, "onRightButtonClick", null);
        let W = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new L.cB()),
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
                  className: (0, L.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      f.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents]
                  ),
                },
                c.createElement(
                  u.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  c.createElement(B, Object.assign({}, e), this.props.children)
                )
              )
            );
          }
        };
        (0, n.gn)([a.ZP], W.prototype, "buttonMouseEnter", null),
          (0, n.gn)([a.ZP], W.prototype, "buttonMouseLeave", null),
          (0, n.gn)([a.ZP], W.prototype, "onParentScrollStop", null),
          (W = (0, n.gn)([S.Pi], W));
        const z = () =>
            c.createElement("div", { className: "AppButton Placeholder" }),
          G = (e) => {
            var t;
            const o = !!e.loading,
              i = null !== (t = e.apps) && void 0 !== t ? t : [];
            let r = "AppCarousel";
            return (
              e.className && (r += " " + e.className),
              (r += " NoAnimations"),
              c.createElement(
                U,
                { additionalClassNames: r, paginationAlignmentOffset: -20 },
                o &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(z, null),
                    c.createElement(z, null),
                    c.createElement(z, null),
                    c.createElement(z, null)
                  ),
                !o &&
                  i.map((e) =>
                    c.createElement(W, Object.assign({ key: e.appkey }, e))
                  )
              )
            );
          };
        var K = o(9669),
          q = o.n(K);
        function X() {
          return q()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
            )
            .then((e) => e.data);
        }
        const Z = () =>
          c.createElement(
            u.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                b.y.Instance.openBigPictureStore(null, b.b.QuickStore),
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
            X().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, o) {
            v.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              j[t].toLowerCase() + ":" + o,
              `steam.app.${e}`
            ),
              b.y.Instance.openBigPictureStore(e, b.b.QuickStore);
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
              const o = `steam.app.${e.appid}`;
              return {
                key: o,
                appkey: o,
                title: e.name,
                imageUrl: e.logo,
                onClick: () =>
                  this.openSteamApp(e.appid, this.props.section, t),
              };
            });
          }
          render() {
            return this.state.storeData
              ? c.createElement(G, { apps: this.makeAppButtonList() })
              : c.createElement(G, { loading: !0 });
          }
        };
        Q = (0, n.gn)([S.Pi], Q);
        class Y extends c.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return c.createElement(
              T.lL,
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
              u.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              c.createElement("span", null, (0, g.Xx)("#BrowseAll")),
              c.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              })
            ),
          ee = () =>
            c.createElement(
              u.z,
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
              u.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              c.createElement("span", null, (0, g.Xx)("#WelcomeInstall"))
            );
        class oe extends c.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            X().then((e) => this.setState({ storeData: e }));
          }
          render() {
            let e = [];
            if (this.state.storeData) {
              let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
                  this.state.storeData.apps_singleplayer[t],
                  this.state.storeData.apps_multiplayer[t],
                  this.state.storeData.apps_free[t],
                ]),
                o = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; o.has(t[0].appid); ) t.shift();
                let i = t.shift();
                o.add(i.appid),
                  e.push(
                    c.createElement(
                      u.z,
                      {
                        key: `appid_${i.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          b.y.Instance.openBigPictureStore(
                            i.appid,
                            b.b.QuickLaunch
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
        let ie = (J = class extends c.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          launchApplication(e, t, o) {
            var i, r;
            v.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + o,
              e.key
            ),
              null === (r = (i = this.props).onGameLaunched) ||
                void 0 === r ||
                r.call(i, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != f.G3.apps)
              for (let t of f.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  J.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let o = t.library_priority - e.library_priority;
              return 0 == o && (o = t.last_launch - e.last_launch), o;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, o) => {
              let i = o;
              const r = o < J.TOP_ROW_LENGTH;
              return (
                r || (i -= J.TOP_ROW_LENGTH),
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
            const o =
                0 == t.length ||
                f.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              i =
                0 == t.length ||
                f.G3.settings.get("/settings/dashboard/hideBigPictureLibrary");
            if (o) e = c.createElement(oe, null);
            else {
              let o = t.slice(0, J.TOP_ROW_LENGTH),
                r = t.slice(J.TOP_ROW_LENGTH);
              e = c.createElement(
                c.Fragment,
                null,
                !i && c.createElement($, null),
                c.createElement("h2", null, (0, g.Xx)("#RecentlyPlayed")),
                c.createElement(G, { className: "TopRow", apps: o }),
                c.createElement(G, { className: "BottomRow", apps: r })
              );
            }
            return c.createElement(
              T.lL,
              {
                visible: this.props.visible,
                scrollable: !o,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
              },
              e
            );
          }
        });
        (ie.TOP_ROW_LENGTH = 4),
          (ie.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            m.W4,
            m.jW,
          ])),
          (ie = J = (0, n.gn)([S.Pi], ie));
        var re,
          ne,
          se,
          ae = o(79);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
        })(ne || (ne = {}));
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
        })(se || (se = {}));
        let de = (re = class extends c.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new s.Nv()),
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
                eShowPopoverMenu: se.None,
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
              (window.setDashboardScale = (e) => (re.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (re.s_dashboardUserDistance = e)),
              f.G3.Init(!1),
              s.hz.getInstance(),
              this.m_mailbox.Init(re.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  re.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression
                ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sOverlayKeyboardClosedMessage,
                    this.onKeyboardClosed
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible
                  ),
                  this.m_mailbox.RegisterHandler(
                    re.k_sLaserMouseSuppressionUpdate,
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
                e == s.a0.AppLaunch_Unknown ||
                e == s.a0.AppLaunch_Steam ||
                e == s.a0.Unknown,
              o = f.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
              ),
              i = f.G3.settings.get("/settings/steamvr/enableHomeApp"),
              r = f.G3.settings.get(m.y3);
            ((t || (!o && i)) && !r) ||
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != r ? r : ""),
                500
              ),
              (this.m_appStateChangedAutorunDisposer = (0, l.EH)(() => {
                const e = y.H.Instance.SceneApplicationState != s.xY.None;
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
            var o;
            const i = this.getActiveOverlaySummonKey();
            let r = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (p.G.Instance.playSound(
                  this.state.bShown ? p.y.DashboardOpen : p.y.DashboardClose
                ),
                (r = !0)),
              this.state.bShown &&
                !r &&
                t.sActiveOverlayID != this.state.sActiveOverlayID)
            )
              switch (i) {
                case m.A4:
                  p.G.Instance.playSound(p.y.ThemeSettings);
                  break;
                case m.gB:
                  p.G.Instance.playSound(p.y.ThemeDesktop);
                  break;
                case m.O5:
                  p.G.Instance.playSound(p.y.ThemeLibrary);
                  break;
                case m.wB:
                  p.G.Instance.playSound(p.y.ThemeStore);
                  break;
                case m.PF:
                  p.G.Instance.playSound(p.y.ThemeNowPlaying);
              }
            const n = this.getActiveOverlayKey(),
              a = n ? this.state.mapOverlayState.get(n) : null,
              l = n ? t.mapOverlayState.get(n) : null,
              c = a && l && a.fScale != l.fScale;
            if (
              ((t.sActiveOverlayID != this.state.sActiveOverlayID || c) &&
                a &&
                this.isDesktopOverlayActive() &&
                (null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopScaleChange(a.fScale)),
              t.sActiveOverlayID != this.state.sActiveOverlayID &&
                (this.setState({ bKeyboardVisible: !1 }),
                this.isOverlayActive(m.Y8)))
            )
              switch (b.y.Instance.lastBigPictureEntryPoint) {
                case b.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case b.b.QuickStore:
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
            let o = 1;
            if (e.startsWith("system.desktop.")) {
              let i = "/settings/dashboard/desktopScale" + e.split(".")[2];
              o = null !== (t = f.G3.settings.get(i)) && void 0 !== t ? t : 1;
            }
            let i = {
              dockLocation: r.Dashboard,
              refOverlayWidget: c.createRef(),
              xfInitial: null,
              fScale: o,
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
            var e;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, s.OK)({
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
            if (re.s_dashboardUserDistance) return re.s_dashboardUserDistance;
            const e = f.G3.settings.get(m.o1);
            return e == ne.Near
              ? 0.925
              : e == ne.Screenshot_Only
              ? 5
              : e == ne.Middle
              ? 1.05
              : 1.2;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = f.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2"
                  )) && void 0 !== e
                  ? e
                  : 0),
              o = f.G3.settings.get(m.o1);
            return o == ne.Screenshot_Only
              ? -0.57
              : o == ne.Near
              ? -0.07 + t
              : o == ne.Middle
              ? -0.08 + t
              : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (re.s_dashboardUserScale) return re.s_dashboardUserScale;
            let t = 1;
            const o = f.G3.settings.get(m.o1),
              i = o == ne.Screenshot_Only;
            return (
              (t = i ? 2 : o == ne.Near ? 0.36 : o == ne.Middle ? 0.41 : 0.47),
              i ||
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
            this.setState((t, o) => {
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
            var t, o;
            this.switchToOverlay(m.gB),
              null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewCreated(e.overlay_key, e.hwnd),
              null === (o = this.m_refDesktopTray.current) ||
                void 0 === o ||
                o.onWindowViewCreated(e.overlay_key, e.hwnd);
          }
          onWindowViewDestroyed(e) {}
          onUpdateWindowList(e) {
            var t;
            let o = new Map();
            e.windows.forEach((e) => {
              o.set(e.hwnd, e);
            }),
              this.setState({
                mapWindows: o,
                bWindowViewEnabled:
                  null === (t = f.G3.settings.get(m.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          onDockOverlay(e, t, o) {
            var i, n;
            if (
              ((t != r.LeftHand && t != r.RightHand) ||
                this.state.mapOverlayState.forEach((e, o) => {
                  e.dockLocation == t && (e.dockLocation = r.Dashboard);
                }),
              (this.state.mapOverlayState.get(e).dockLocation = t),
              (this.state.mapOverlayState.get(e).xfInitial = o),
              t === r.Dashboard)
            )
              if (e.startsWith(m.r4)) {
                const t = Number.parseInt(e.substring(m.r4.length + 1));
                null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onDesktopChange(t);
              } else
                e.startsWith(m.Vq) &&
                  (null === (n = this.m_refDesktopView.current) ||
                    void 0 === n ||
                    n.onWindowViewChange(e));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlay();
            if (!e) return null;
            const t = this.getActiveOverlayKey(),
              o = this.state.mapOverlayState.get(t),
              i = o ? o.fScale : 1;
            return c.createElement(s.sl, {
              mountedId: e.mountable_id,
              fDashboardScale: i,
            });
          }
          computeFilteredOverlayTabs() {
            if (this.isScreenshotMode) return [];
            let e = [];
            for (let t in this.m_mapExternalOverlays) {
              const o = this.m_mapExternalOverlays[t];
              (void 0 === o.icon_overlay_key && null == o.icon_uri) ||
                (o.summon_overlay_key &&
                  o.summon_overlay_key != m.A4 &&
                  o.summon_overlay_key != m.Y8 &&
                  o.summon_overlay_key != m.Xl &&
                  (o.summon_overlay_key.startsWith(m.r4) ||
                    o.summon_overlay_key.startsWith(m.Vq) ||
                    o.summon_overlay_key.startsWith(m.MZ) ||
                    ce(o.summon_overlay_key) ||
                    e.push(o)));
            }
            return (
              (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e
            );
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let o = this.m_mapExternalOverlays[t];
              if (o.summon_overlay_key == e) return o;
            }
            return null;
          }
          switchToOverlay(e, t) {
            var o, i;
            switch (e) {
              case m.Y8:
                b.y.Instance.latchBigPictureEntryPoint();
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
                  o = "bindingui/" + s.qA[(0, s.Op)()];
                this.m_mailbox.SendMessage(o, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = m.RM);
            }
            if (e.startsWith(m.r4)) {
              const t = Number.parseInt(e.substring(m.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t)),
                (e = m.gB);
            }
            let r = this.findDashboardTab(e);
            return r
              ? (this.computeFilteredOverlayTabs().includes(r) &&
                  f.G3.SetSettingsValue(
                    m.nf,
                    null !== (i = r.summon_overlay_key) && void 0 !== i ? i : ""
                  ),
                this.setState({ sActiveOverlayID: r.mountable_id }),
                v.e.instance.RecordUIEvent(
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
            f.G3.settings.get("/settings/dashboard/enableDashboard") &&
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
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          setDashboardVisibility(e, t, o) {
            let i = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: o,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", i);
          }
          show(e) {
            if (this.isShown()) return;
            v.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = y.H.Instance.SceneAppKey,
              o = y.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              this.switchToOverlay(o ? m.O5 : m.PF)),
              this.setState({ bShown: !0 });
            let i = { type: re.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", i),
              (0, s.qI)();
          }
          hide(e) {
            this.isShown() &&
              (this.setState({ bShown: !1, eShowPopoverMenu: se.None }),
              v.e.instance.EndDashboardSession(e));
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
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlay(m.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
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
              this.m_mailbox.SendMessage(ae.BB, {
                type: ae.KU,
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
              t = f.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              o = f.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let i = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (i = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                s.Uk.DeviceCanPowerOff_Bool
              ));
            const r = y.H.Instance.SceneAppName,
              n = y.H.Instance.SceneAppIsHome;
            let a, l;
            (a = n
              ? (0, g.Xx)("#Exit_SteamVR_Home")
              : r
              ? (0, g.Xx)("#PowerMenuQuitSceneApp", r)
              : (0, g.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (l = n
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg");
            const d = this.findDashboardTab(m.Y8),
              u = this.findDashboardTab(m.T2),
              h = d && u;
            return this.renderPopoverMenu(
              c.createElement(
                c.Fragment,
                null,
                u &&
                  c.createElement(T.dy, {
                    label:
                      (0, g.Xx)("#PowerMenuSteamOverlay") +
                      (h ? " (GamepadUI)" : ""),
                    lineBelow: !h,
                    onClick: () => {
                      this.switchToOverlay(m.T2), this.showPopoverMenu(se.None);
                    },
                  }),
                d &&
                  c.createElement(T.dy, {
                    label:
                      (0, g.Xx)("#PowerMenuSteamOverlay") +
                      (h ? " (Tenfoot)" : ""),
                    lineBelow: !0,
                    onClick: () => {
                      this.switchToOverlay(m.Y8), this.showPopoverMenu(se.None);
                    },
                  }),
                i &&
                  c.createElement(T.dy, {
                    label: (0, g.Xx)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopoverMenu(se.None);
                    },
                  }),
                t &&
                  e &&
                  c.createElement(T.dy, {
                    label: a,
                    imageUrl: l,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        this.showPopoverMenu(se.None);
                    },
                  }),
                c.createElement(T.dy, {
                  label: (0, g.Xx)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                o &&
                  c.createElement(T.dy, {
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
              this.setState({ eShowPopoverMenu: se.None });
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
              c.createElement(u.q, { className: "PowerMenuPanel" }, e)
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
                !(function (e, t, o) {
                  let i = o.getBoundingClientRect();
                  return (
                    e >= i.left && e <= i.right && t >= i.top && t <= i.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, o, i;
            let r = this.getActiveOverlay();
            if (!r) return null;
            if (
              (r.summon_overlay_key == m.Y8 &&
                (b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch
                  ? (r = this.findDashboardTab(m.O5))
                  : b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
                    (r = this.findDashboardTab(m.wB))),
              r.summon_overlay_key == m.gB)
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
                return c.createElement(T.Rk, {
                  name:
                    null === (o = this.state.mapWindows.get(e)) || void 0 === o
                      ? void 0
                      : o.title,
                  iconUrl: this.getDashboardIconUri(r),
                });
              }
              return c.createElement(T.Rk, {
                name:
                  "Desktop " +
                  (null === (i = this.m_refDesktopView.current) || void 0 === i
                    ? void 0
                    : i.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(r),
              });
            }
            return r.summon_overlay_key == m.RM
              ? c.createElement(T.Rk, {
                  name: (0, g.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : c.createElement(T.Rk, {
                  name: r.tab_name,
                  iconUrl: this.getDashboardIconUri(r),
                });
          }
          get isDarkMode() {
            return (
              (this.state.bDesktopDarkMode && this.isOverlayActive(m.gB)) ||
              this.state.bTheaterMode
            );
          }
          get isScreenshotMode() {
            return f.G3.settings.get(m.o1) == ne.Screenshot_Only;
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
            let o = [];
            const i =
              null !== (e = f.G3.settings.get(m.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, s.M9)((0, s.eQ)(e[3], e[0])),
                r = (0, s.M9)((0, s.eQ)(e[1], e[0])),
                n = (0, s.dq)(t, r),
                a = (0, s.Pd)((0, s.tS)(t, r, n)),
                l = (0, s.LY)((0, s.eQ)(e[0], e[3]));
              if (l < 0.4) continue;
              let d = Math.max(1, Math.floor(l));
              for (let t = 0; t < d; t++) {
                let r = (t + 1) / (d + 1),
                  n = (0, s.Oq)();
                (n.rotation = a),
                  (n.translation = (0, s.q9)(r, e[0], e[3])),
                  (n.scale = { x: 0.005, y: 0.005, z: i });
                let l = c.createElement(
                  s.wx,
                  { transform: n },
                  c.createElement(
                    s.Dd,
                    { value: 0.25 },
                    c.createElement(
                      s.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      c.createElement(s.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: s.xj.Backface,
                      })
                    )
                  )
                );
                o.push(l);
              }
              if (o.length > 20) break;
            }
            return o;
          }
          render() {
            var e, t;
            const o =
                null !==
                  (e = f.G3.settings.get(
                    "/settings/dashboard/theaterModeBrightness"
                  )) && void 0 !== e
                  ? e
                  : 1,
              i =
                null !==
                  (t = f.G3.settings.get(
                    "/settings/dashboard/theaterModeReflection"
                  )) && void 0 !== t
                  ? t
                  : 1;
            if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == m.A4,
                t = f.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
                ),
                r = !y.H.Instance.SceneAppIsHome || !t;
              if (this.isScreenshotMode)
                (0, s.OK)({
                  color_mult: 0,
                  reflection_mult: 0,
                  roomview_mult: [1, 1, 1],
                  allow_skydome: !0,
                  allow_floorfar: !0,
                  allow_floornear: !0,
                });
              else if (r && !e)
                if (this.isTheaterMode) {
                  const e = f.G3.settings.get(
                    "/settings/dashboard/theaterPosition"
                  );
                  (0, s.OK)({
                    color_mult: Math.pow(o, 2.2),
                    reflection_mult: Math.pow(i, 2.2),
                    roomview_mult: [0.12, 0.12, 0.6],
                    allow_skydome: !1,
                    allow_floorfar: !1,
                    allow_floornear: e != ne.Far,
                  });
                } else
                  this.isDarkMode
                    ? (0, s.OK)({
                        color_mult: 0.1,
                        reflection_mult: 1,
                        roomview_mult: [1, 1, 1],
                        allow_skydome: !0,
                        allow_floorfar: !0,
                        allow_floornear: !0,
                      })
                    : y.H.Instance.SceneApplicationState !== s.xY.None
                    ? (0, s.OK)({
                        color_mult: 0.15,
                        reflection_mult: 1,
                        roomview_mult: [1, 1, 1],
                        allow_skydome: !0,
                        allow_floorfar: !0,
                        allow_floornear: !0,
                      })
                    : (0, s.OK)({
                        color_mult: 1,
                        reflection_mult: 1,
                        roomview_mult: [1, 1, 1],
                        allow_skydome: !0,
                        allow_floorfar: !0,
                        allow_floornear: !0,
                      });
              else
                (0, s.OK)({
                  color_mult: 1,
                  reflection_mult: 1,
                  roomview_mult: [1, 1, 1],
                  allow_skydome: !0,
                  allow_floorfar: !0,
                  allow_floornear: !0,
                });
            } else
              (0, s.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
                allow_floorfar: !0,
                allow_floornear: !0,
              });
            const r = this.getActiveOverlaySummonKey(),
              n = this.state.bShown && this.state.setForcingBoundsVisible[r],
              a = n && n.size > 0;
            let l = [];
            return (
              a && (l = this.getCollisionBoundsFadeVisualizationElements()),
              c.createElement(
                "div",
                { className: "DashboardMain" },
                a && c.createElement(le, null),
                a && c.createElement("span", null, l),
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
                (this.state.mapOverlayState.get(e).dockLocation == r.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    r.RightHand);
            return ce(this.getActiveOverlaySummonKey()) || t
              ? m.t3
              : this.state.sActiveOverlayID + "_TopCenter";
          }
          get controlBarAnchorID() {
            let e = this.getActiveOverlayKey(),
              t =
                this.state.mapOverlayState.has(e) &&
                (this.state.mapOverlayState.get(e).dockLocation == r.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    r.RightHand);
            return ce(this.getActiveOverlaySummonKey()) || t
              ? m.Gl
              : this.state.sActiveOverlayID + "_BottomCenter";
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              o = T.IO.Center;
            return c.createElement(T.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: o,
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
              (this.state.eShowPopoverMenu == se.None ||
                this.state.eShowPopoverMenu == se.Windows)
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
            var o, i, r, n, a, l, d, h;
            const p = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              v = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              S = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
              k = this.isDarkMode ? 0.02 : 0.05,
              C = re.k_nControlBarWidthMeters,
              M =
                null ===
                  (o = f.G3.settings.get(
                    "/settings/dashboard/showPowerOptions"
                  )) ||
                void 0 === o ||
                o,
              w =
                null ===
                  (i = f.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === i ||
                i,
              R =
                null ===
                  (r = f.G3.settings.get(
                    "/settings/dashboard/showQuickStore"
                  )) ||
                void 0 === r ||
                r,
              D = !(
                null !==
                  (n = f.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== n &&
                n
              ),
              E = this.getPeerButtonInfo(),
              x = VRHTML.BIsLinkServer(),
              P = y.H.Instance.SceneApplicationState,
              O = y.H.Instance.SceneAppIsHome,
              V =
                null ===
                  (a = f.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === a ||
                a
                  ? m.ml
                  : null,
              L = y.H.Instance.SceneAppKey;
            let B = "images/appimage_default.png";
            L && (B = "/app/image?app_key=" + L);
            const N =
                null !== (l = f.G3.settings.get(m.Av)) && void 0 !== l && l,
              H =
                null !== (d = f.G3.settings.get(m.k_)) && void 0 !== d ? d : 0;
            let A = N && H > 0,
              F =
                null !==
                  (h = f.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode"
                  )) &&
                void 0 !== h &&
                h,
              U = !0;
            this.state.bLinkStreamActive &&
              ((F = !1), x && ((A = !1), (U = !1)));
            let W = { y: -0.25, z: 0 };
            return (
              this.isOverlayActive(m.gB) && (W = { y: -0.4, z: 0 }),
              c.createElement(
                s.Dd,
                { value: p },
                c.createElement(
                  s.VW,
                  { color: v },
                  c.createElement(
                    s.s_,
                    {
                      curvature_origin_id: V,
                      width: C,
                      interactive: !1,
                      debug_name: "ControlBarBackground",
                      sampler: s.Vv.SingleTap,
                      reflect: k,
                    },
                    c.createElement("div", {
                      className: "ControlBarBackground",
                    })
                  ),
                  c.createElement(
                    s.wx,
                    { translation: { z: 1e-5 } },
                    c.createElement(
                      s.s_,
                      {
                        curvature_origin_id: V,
                        width: C,
                        interactive: !0,
                        id: m.WR,
                        debug_name: "Controls",
                      },
                      c.createElement(
                        u.q,
                        { className: "ControlBar MainControlBar" },
                        c.createElement(
                          "div",
                          { className: "Section Left" },
                          M &&
                            c.createElement(T.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, g.Xx)("#Menu"),
                              style: T.zk.Small,
                              onClick: () => this.showPopoverMenu(se.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          w &&
                            c.createElement(T.NT, {
                              style: T.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, g.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlay(m.gB),
                            }),
                          c.createElement(
                            T.dw,
                            { style: T.zk.Small },
                            c.createElement(
                              c.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                c.createElement(T.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, g.Xx)(
                                    "#X_More_Overlays",
                                    t.length
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    se.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(se.ExternalOverlays),
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
                          c.createElement(T.NT, {
                            label: (0, g.Xx)("#Library"),
                            imageUrl: "/dashboard/images/icons/svr_items.svg",
                            active:
                              this.isOverlayActive(m.O5) ||
                              (this.isOverlayActive(m.Y8) &&
                                b.y.Instance.lastBigPictureEntryPoint ==
                                  b.b.QuickLaunch),
                            style: T.zk.Large,
                            onClick: this.onQuickLaunchButtonClick,
                          }),
                          P != s.xY.None &&
                            c.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              c.createElement(
                                _.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                c.createElement(
                                  s.VW,
                                  { color: v },
                                  c.createElement(
                                    s.wx,
                                    { translation: { z: 0.02 } },
                                    c.createElement(
                                      s.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: V,
                                      },
                                      c.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        c.createElement(T.NT, {
                                          label: O
                                            ? (0, g.Xx)("#SteamVR_Home")
                                            : (0, g.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(m.PF),
                                          style: T.zk.App,
                                          imageUrl: B,
                                          onClick: () =>
                                            this.switchToOverlay(m.PF),
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                          R &&
                            c.createElement(T.NT, {
                              label: (0, g.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(m.wB) ||
                                (this.isOverlayActive(m.Y8) &&
                                  b.y.Instance.lastBigPictureEntryPoint ==
                                    b.b.QuickStore),
                              style: T.zk.Large,
                              onClick: this.onQuickStoreButtonClick,
                            })
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Right" },
                          c.createElement(
                            T.dw,
                            { style: T.zk.Small },
                            F &&
                              c.createElement(T.B8, {
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
                              c.createElement(T.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, g.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            A &&
                              c.createElement(T.B8, {
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
                            c.createElement(T.D6, {
                              active: this.state.eShowPopoverMenu == se.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(se.Volume),
                              onHideTray: () => this.showPopoverMenu(se.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            })
                          ),
                          D &&
                            c.createElement(T.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(m.A4),
                              enabled: this.hasOverlay(m.A4),
                              label: (0, g.Xx)("#Settings"),
                              style: T.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlay(m.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            E &&
                            c.createElement(T.NT, {
                              imageUrl: E.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, g.Xx)(E.sButtonName),
                              style: T.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            })
                        )
                      ),
                      c.createElement(I, {
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
                        onToggleWindowList: () =>
                          this.showPopoverMenu(se.Windows),
                        onClearPopoverMenuTimeout: () =>
                          this.clearPopoverMenuTimeout(),
                        onStartPopoverMenuTimeout: (e) =>
                          this.startPopoverMenuTimeout(e),
                        mapWindows: this.state.mapWindows,
                        sort_depth_bias: 0.2,
                        bWindowViewEnabled: this.state.bWindowViewEnabled,
                      }),
                      c.createElement(T.z, {
                        ref: this.m_refVolumeTray,
                        position: 0.337,
                        visible:
                          this.state.eShowPopoverMenu == se.Volume &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: S,
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
                  s.wx,
                  { translation: W, scale: { y: 1.5, x: 1.5 } },
                  c.createElement(s.sl, {
                    mountedId: (0, s.iN)(m.GN, "system.keyboard"),
                  })
                )
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != r.Dashboard);
            return c.createElement(
              c.Fragment,
              null,
              e.map((e) =>
                c.createElement(w, {
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
                this.state.mapOverlayState.get(e).dockLocation == r.Dashboard;
            return this.state.bShown && this.isOverlayActive(m.gB) && t;
          }
          onGameLaunched(e) {
            var t;
            const o =
              null !==
                (t = f.G3.settings.get(
                  "/settings/dashboard/allowTheaterMode"
                )) &&
              void 0 !== t &&
              t;
            e.starts_theater_mode && o && this.setState({ bTheaterMode: !0 }),
              (!e.is_dashboard_overlay ||
                (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, o, i;
            const r =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              n =
                null !==
                  (i =
                    null === (o = this.m_refDesktopView.current) || void 0 === o
                      ? void 0
                      : o.desktopCount) && void 0 !== i
                  ? i
                  : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                s.Y9,
                {
                  tabName: (0, g.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: m.O5,
                },
                c.createElement(ie, {
                  visible: this.state.bShown && this.isOverlayActive(m.O5),
                  onGameLaunched: this.onGameLaunched,
                })
              ),
              c.createElement(
                s.Y9,
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
                s.Y9,
                { tabName: (0, g.Xx)("#Now_Playing"), summonOverlayKey: m.PF },
                c.createElement(A, {
                  visible: this.state.bShown && this.isOverlayActive(m.PF),
                  onExitGame: () => this.switchToOverlay(m.O5),
                })
              ),
              c.createElement(
                s.Y9,
                {
                  summonOverlayKey: m.gB,
                  tabName:
                    n > 1 ? (0, g.Xx)("#Desktop_X", r) : (0, g.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                c.createElement(x, {
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
              const o = new Map(t.mapOverlayState),
                i = Object.assign(
                  Object.assign({}, o.get(this.getActiveOverlayKey())),
                  { fScale: e }
                );
              return { mapOverlayState: o.set(this.getActiveOverlayKey(), i) };
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
            var e, t, o, i;
            const n = this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              a = this.isDarkMode ? 0 : 0.1;
            let l = !1,
              d = !1,
              u = this.getActiveOverlayKey();
            if (u) {
              let e = VRHTML.VROverlay.FindOverlay(u);
              (l =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, s.Z9.EnableControlBarKeyboard)),
                (d =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, s.Z9.EnableControlBarClose));
            }
            const p =
                null !==
                  (e = f.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin"
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              v =
                null !==
                  (t = f.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax"
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              _ =
                null ===
                  (o = f.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === o ||
                o
                  ? m.ml
                  : null,
              y = { x: 0, y: -0.15, z: 0.1 };
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                s.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003 },
                },
                c.createElement(
                  s.VW,
                  { color: n },
                  c.createElement(
                    s.s_,
                    {
                      curvature_origin_id: _,
                      origin: s.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: this.controlBarAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: s.Vv.SingleTap,
                      reflect: a,
                    },
                    c.createElement("div", {
                      className: "OverlayControlBarBackground",
                    })
                  )
                )
              ),
              c.createElement(
                s.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                c.createElement(
                  s.VW,
                  { color: n },
                  c.createElement(
                    s.s_,
                    {
                      curvature_origin_id: _,
                      origin: s.Ic.TopCenter,
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
                          min: p,
                          max: v,
                          value: this.activeOverlayScale,
                          valueStyleVariant: h.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        l &&
                          c.createElement(T.zN, {
                            iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                            title: this.state.bKeyboardVisible
                              ? (0, g.Xx)("#HideKeyboardTooltip")
                              : (0, g.Xx)("#ShowKeyboardTooltip"),
                            tooltipTranslation: y,
                            additionalClassNames: "Keyboard",
                            onClick: this.toggleKeyboard,
                            active: this.state.bKeyboardVisible,
                          }),
                        c.createElement(T.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, g.Xx)("#DockOnLeftController"),
                          tooltipTranslation: y,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              r.LeftHand
                              ? this.onDockOverlay(e, r.Dashboard)
                              : this.onDockOverlay(e, r.LeftHand);
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
                            ).dockLocation == r.LeftHand,
                        }),
                        c.createElement(T.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, g.Xx)("#DockOnRightController"),
                          tooltipTranslation: y,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              r.RightHand
                              ? this.onDockOverlay(e, r.Dashboard)
                              : this.onDockOverlay(e, r.RightHand);
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
                            ).dockLocation == r.RightHand,
                        }),
                        c.createElement(T.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, g.Xx)("#FloatInWorld"),
                          tooltipTranslation: y,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              r.World
                              ? this.onDockOverlay(e, r.Dashboard)
                              : this.onDockOverlay(e, r.World);
                          },
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey()
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey()
                            ).dockLocation == r.World,
                        }),
                        d &&
                          c.createElement(T.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, g.Xx)("#CloseOverlay"),
                            tooltipTranslation: y,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (i = this.m_refDesktopView.current) ||
                          void 0 === i
                            ? void 0
                            : i.renderControlBarButtons(y))
                      )
                    )
                  )
                )
              )
            );
          }
          renderDashboard() {
            var e, t, o, i, n, a;
            const l = this.computeFilteredOverlayTabs(),
              d = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              h = this.isDarkMode ? 0 : 0.1,
              p = !this.isDarkMode,
              v = !this.isDarkMode;
            let _ = [],
              y = [],
              b =
                null !== (e = f.G3.settings.get(m.FM)) && void 0 !== e ? e : 2;
            if (l.length > b) {
              const e = f.G3.settings.get(m.nf);
              (_ = [
                null !== (t = l.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : l[0],
              ]),
                (y = l.filter((e) => !_.includes(e)));
            } else _ = l;
            let S = null;
            this.isDesktopOverlayActive() && (S = 2048);
            let C = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && C.push(e);
            });
            const M = this.isScreenshotMode,
              w = M ? 2.5 : 1.8;
            let R = !1,
              D = !0,
              E = !1,
              I = this.getActiveOverlayKey();
            if (I) {
              let e = VRHTML.VROverlay.FindOverlay(I);
              (E = !!e && VRHTML.VROverlay.GetFlag(e, s.Z9.EnableControlBar)),
                (D =
                  !this.state.mapOverlayState.has(I) ||
                  this.state.mapOverlayState.get(I).dockLocation ==
                    r.Dashboard),
                (R =
                  this.state.mapOverlayState.has(I) &&
                  this.state.mapOverlayState.get(I).dockLocation == r.World);
            }
            this.state.bLaserMouseSuppressionActive && (E = !1);
            let x = 2,
              P = 2.5;
            const O = f.G3.settings.get("/settings/dashboard/theaterPosition");
            O == ne.Near
              ? ((x *= 0.5), (P *= 0.5))
              : O == ne.Middle
              ? ((x *= 1), (P *= 1))
              : O == ne.Far && ((x *= 4), (P *= 2.5));
            const V =
                null !==
                  (o =
                    0.01 *
                    f.G3.settings.get(
                      "/settings/dashboard/theaterVerticalOffsetCm"
                    )) && void 0 !== o
                  ? o
                  : 0,
              L =
                null ===
                  (i = f.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === i ||
                i,
              B = L ? m.ml : null;
            let N,
              H,
              A,
              F,
              U,
              W = 0.05,
              z =
                null !==
                  (n = f.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections"
                  )) &&
                void 0 !== n &&
                n,
              G = this.state.bTheaterMode
                ? { y: -1.2, z: 1 }
                : { y: -1.2, z: 0.15 },
              K = this.state.bTheaterMode
                ? { x: 0.75, y: 0.75, z: 0.75 }
                : { x: 1, y: 1, z: 1 },
              q = !L && this.state.bTheaterMode ? 0.75 : 1,
              X = L ? 1 : 0;
            this.state.bTheaterMode
              ? ((N = { y: -0.8 * P + V, z: -x }),
                (H = P),
                (A = 1.72),
                (F = 0.82),
                (U = 10))
              : ((N = { y: E ? -0.9 : -1.03375, z: 0.05 }),
                (H = 1),
                (A = 2),
                (F = 0.68),
                (U = 5),
                (z = !1));
            let Z =
              null !==
                (a = f.G3.settings.get(
                  "/settings/dashboard/allowFreeTransform"
                )) &&
              void 0 !== a &&
              a;
            return c.createElement(
              s.eK,
              {
                bContinuousRelatch: this.state.bPlacementModeActive,
                bFreeDashboardTransform: Z && this.state.bPlacementModeActive,
              },
              c.createElement(s.wx, { id: B, translation: { z: w } }),
              c.createElement(
                s.wx,
                {
                  translation: {
                    x: M ? 0.1 : 0,
                    y: re.getDashboardVerticalPosition(),
                    z: -re.getDashboardDistance() * (M ? 1.1 : 1),
                  },
                  rotation: { x: M ? -20 : 0 },
                  scale: re.getDashboardScale(),
                },
                c.createElement(
                  s.wx,
                  {
                    parent_id: this.statusBarAnchorID,
                    translation: { y: 0.008 },
                    scale: { x: q, y: q },
                  },
                  c.createElement(
                    s.VW,
                    { color: d },
                    c.createElement(
                      s.s_,
                      {
                        curvature_origin_id: B,
                        origin: s.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: m.WR,
                        debug_name: "StatusBar",
                        reflect: h,
                      },
                      c.createElement(
                        "div",
                        { className: "StatusBar", style: { width: S } },
                        c.createElement(
                          "div",
                          { className: "Section Left" },
                          p && this.renderStatusBarTitle(),
                          c.createElement(T.j6, {
                            role: s.Kg.TrackedControllerRole_LeftHand,
                            style: k.A.HorizontalPips,
                          })
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Center" },
                          c.createElement(T.j6, {
                            deviceIndex: s.wU,
                            style: k.A.VerticalBattery,
                          }),
                          c.createElement(T.M3, null)
                        ),
                        c.createElement(
                          "div",
                          { className: "Section Right" },
                          c.createElement(T.j6, {
                            role: s.Kg.TrackedControllerRole_RightHand,
                            style: k.A.HorizontalPips,
                          }),
                          v &&
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
                  s.wx,
                  {
                    id: "active_overlay_transform",
                    translation: N,
                    ref: this.m_refOverlayTransform,
                  },
                  c.createElement(
                    s.wx,
                    { scale: { x: H, y: H } },
                    !R && D && this.renderActiveOverlay(),
                    !R &&
                      !D &&
                      c.createElement(
                        T.lL,
                        {
                          additionalClassNames: E ? "WithControlBar" : "",
                          visible: !0,
                        },
                        c.createElement(
                          "div",
                          { className: "NoDesktopFound" },
                          c.createElement(
                            "h2",
                            null,
                            this.state.mapOverlayState.get(I).dockLocation ==
                              r.LeftHand &&
                              (0, g.Xx)("#DockedOnLeftController"),
                            this.state.mapOverlayState.get(I).dockLocation ==
                              r.RightHand &&
                              (0, g.Xx)("#DockedOnRightController")
                          ),
                          c.createElement(
                            u.z,
                            {
                              className: "ButtonControl",
                              onClick: () => {
                                this.onDockOverlay(I, r.Dashboard);
                              },
                            },
                            (0, g.Xx)("#DockHere")
                          )
                        )
                      ),
                    z &&
                      c.createElement(
                        s.wx,
                        { translation: { y: F, z: 0.25 } },
                        c.createElement(s.bt, {
                          width: 2.8,
                          height: A,
                          "near-z": -1,
                          "far-z": 1,
                          debug: !1,
                          specular: { color: { r: W, g: W, b: W } },
                          diffuse: { size: U, resolution: 512 },
                        })
                      )
                  )
                ),
                E && D && this.renderOverlayControlBar(),
                !1,
                c.createElement(
                  s.wx,
                  { translation: G, scale: K },
                  c.createElement(
                    s.wx,
                    { rotation: { x: -35 }, curvature_pitch: -35 },
                    this.renderControlBar(_, y)
                  ),
                  this.state.eShowPopoverMenu == se.Power &&
                    c.createElement(
                      s.wx,
                      {
                        translation: { x: -0.4, y: 0.15, z: 0.05 },
                        rotation: { y: 19 * X },
                      },
                      c.createElement(
                        s.s_,
                        {
                          curvature_origin_id: B,
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
                  this.state.eShowPopoverMenu == se.ExternalOverlays &&
                    c.createElement(
                      s.wx,
                      {
                        translation: { x: 0.2, y: 0.15, z: 0.05 },
                        rotation: { y: 6 * X },
                      },
                      c.createElement(
                        s.s_,
                        {
                          curvature_origin_id: B,
                          height: void 0,
                          width: 0.925,
                          interactive: !0,
                          origin: s.Ic.BottomRight,
                          debug_name: "OverlaysList",
                          sort_depth_bias: -0.1,
                        },
                        this.renderPopoverMenu(
                          c.createElement(
                            c.Fragment,
                            null,
                            " ",
                            y.map((e) =>
                              c.createElement(T.dy, {
                                key: e.mountable_id,
                                imageUrl: this.getDashboardIconUri(e),
                                label: e.tab_name,
                                onClick: () => {
                                  this.switchToOverlay(e.summon_overlay_key),
                                    this.showPopoverMenu(se.None);
                                },
                              })
                            ),
                            " "
                          )
                        )
                      )
                    ),
                  this.state.eShowPopoverMenu == se.Windows &&
                    c.createElement(
                      s.wx,
                      {
                        translation: { x: 1.25, y: -0.1, z: 0.35 },
                        rotation: { y: -16 * X },
                      },
                      c.createElement(
                        s.s_,
                        {
                          curvature_origin_id: B,
                          height: void 0,
                          width: 0.925,
                          interactive: !0,
                          origin: s.Ic.BottomRight,
                          debug_name: "WindowList",
                          sort_depth_bias: -0.1,
                        },
                        this.renderPopoverMenu(
                          c.createElement(
                            c.Fragment,
                            null,
                            " ",
                            C.map((e) =>
                              c.createElement(T.dy, {
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
                                    this.showPopoverMenu(se.None);
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
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "onSetDashboardFadeSuppression",
            null
          ),
          (0, n.gn)([a.ak], de.prototype, "onRoomViewChanged", null),
          (0, n.gn)([a.ak], de.prototype, "onLinkStreamActiveEvents", null),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "onSetDashboardForceBoundsVisible",
            null
          ),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "onLaserMouseSuppressionUpdate",
            null
          ),
          (0, n.gn)([a.ak], de.prototype, "onDashboardOverlayCreated", null),
          (0, n.gn)([a.ak], de.prototype, "onDashboardOverlayDestroyed", null),
          (0, n.gn)([a.ak], de.prototype, "onUpdateDashboardTabs", null),
          (0, n.gn)([a.ak], de.prototype, "onWindowViewCreated", null),
          (0, n.gn)([a.ak], de.prototype, "onWindowViewDestroyed", null),
          (0, n.gn)([a.ak], de.prototype, "onUpdateWindowList", null),
          (0, n.gn)([a.ak], de.prototype, "onUpdateDebugInfo", null),
          (0, n.gn)([a.ak], de.prototype, "onDockOverlay", null),
          (0, n.gn)([a.ak], de.prototype, "onShowDashboardRequested", null),
          (0, n.gn)([a.ak], de.prototype, "onHideDashboardRequested", null),
          (0, n.gn)([a.ak], de.prototype, "show", null),
          (0, n.gn)([a.ak], de.prototype, "hide", null),
          (0, n.gn)([a.ak], de.prototype, "setPlacementModeActive", null),
          (0, n.gn)([a.ak], de.prototype, "onToggleRoomView", null),
          (0, n.gn)([a.ak], de.prototype, "onQuickLaunchButtonClick", null),
          (0, n.gn)([a.ak], de.prototype, "onQuickStoreButtonClick", null),
          (0, n.gn)([a.ak], de.prototype, "onRecenterClick", null),
          (0, n.gn)([a.ak], de.prototype, "renderPowerMenu", null),
          (0, n.gn)([a.ak], de.prototype, "startPopoverMenuTimeout", null),
          (0, n.gn)([a.ak], de.prototype, "clearPopoverMenuTimeout", null),
          (0, n.gn)([a.ak], de.prototype, "showPopoverMenu", null),
          (0, n.gn)([a.ak], de.prototype, "popoverMenuMouseLeave", null),
          (0, n.gn)([a.ak], de.prototype, "popoverMenuMouseUp", null),
          (0, n.gn)([l.Fl], de.prototype, "isDarkMode", null),
          (0, n.gn)([l.Fl], de.prototype, "isScreenshotMode", null),
          (0, n.gn)([l.Fl], de.prototype, "isTheaterMode", null),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "renderExternalOverlayControlBarButton",
            null
          ),
          (0, n.gn)([a.ak], de.prototype, "isDesktopTrayActive", null),
          (0, n.gn)([a.ak], de.prototype, "isDesktopOverlayActive", null),
          (0, n.gn)([a.ak], de.prototype, "handlePeerButton", null),
          (0, n.gn)([a.ak], de.prototype, "isDesktopViewVisible", null),
          (0, n.gn)([a.ak], de.prototype, "onGameLaunched", null),
          (0, n.gn)([a.ak], de.prototype, "toggleKeyboard", null),
          (0, n.gn)([a.ak], de.prototype, "onKeyboardClosed", null),
          (0, n.gn)([l.Fl], de.prototype, "activeOverlayScale", null),
          (0, n.gn)([a.ak], de.prototype, "onActiveOverlayScaleChange", null),
          (0, n.gn)([a.ak], de.prototype, "onActiveOverlayClosed", null),
          (0, n.gn)([l.LO], de, "s_dashboardUserDistance", void 0),
          (0, n.gn)([l.LO], de, "s_dashboardUserScale", void 0),
          (de = re = (0, n.gn)([S.Pi], de));
      },
      7679: (e, t, o) => {
        o.d(t, {
          B8: () => V,
          D6: () => W,
          IO: () => P,
          M3: () => D,
          NT: () => L,
          Rk: () => N,
          dw: () => O,
          dy: () => T,
          j4: () => H,
          j6: () => B,
          lL: () => R,
          z: () => A,
          zN: () => z,
          zk: () => x,
        });
        var i,
          r,
          n = o(655),
          s = o(6321),
          a = o(7056),
          l = o(2188),
          c = o(7062),
          d = o(7294),
          u = o(1818),
          h = o(6547),
          p = o(9392),
          m = o(1219),
          g = o(7264),
          v = o(9981),
          _ = o(197),
          y = o(3868),
          b = o(6882),
          f = o(1058),
          S = o(4435),
          k = o(3446),
          C = o(8322),
          M = o.n(C),
          w = o(7968);
        const R = (e) => {
          var t, o, i;
          const r = d.useRef(null),
            n = d.useRef(null);
          d.useEffect(() => {
            var e, t;
            return null === (e = r.current) || void 0 === e
              ? void 0
              : e.setFloatingViewStack(
                  null === (t = n.current) || void 0 === t
                    ? void 0
                    : t.viewStack
                );
          });
          const a = null === (t = e.scrollable) || void 0 === t || t,
            l =
              null !== (o = e.foregroundReflectMultiplier) && void 0 !== o
                ? o
                : 1,
            c =
              null ===
                (i = k.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === i ||
              i
                ? _.ml
                : null;
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              s.s_,
              {
                visibility: e.visible ? s.Bl.Visible : s.Bl.Hidden,
                debug_name: "homepanelbackground",
                curvature_origin_id: c,
                origin: s.Ic.BottomCenter,
                interactive: !1,
                scrollable: !1,
                target_dpi_panel_id: _.WR,
                target_dpi_multiplier: 2,
                reflect: 0.01,
                sampler: s.Vv.SingleTap,
              },
              d.createElement(s.at, { id: _.t3, location: s.Ic.TopCenter }),
              d.createElement(
                h.vz,
                { ref: r },
                d.createElement("div", {
                  className: (0, f.LJ)(
                    "DashboardPanelBackground",
                    e.additionalClassNames
                  ),
                  style: e.additionalStyle,
                })
              ),
              d.createElement(s.at, { id: _.Gl, location: s.Ic.BottomCenter })
            ),
            d.createElement(
              s.wx,
              { translation: { z: 1e-5 } },
              d.createElement(
                s.s_,
                {
                  visibility: e.visible ? s.Bl.Visible : s.Bl.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: c,
                  origin: s.Ic.BottomCenter,
                  interactive: !0,
                  scrollable: a,
                  target_dpi_panel_id: _.WR,
                  reflect: 0.2 * l,
                },
                d.createElement(
                  h.sC,
                  { ref: n },
                  d.createElement(
                    u.q,
                    null,
                    d.createElement(
                      p.P,
                      {
                        scrollDirection: a ? p.I.Vertical : p.I.None,
                        className: (0, f.LJ)(
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
        class D extends d.Component {
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
            const e = y.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              o = null;
            const i = t.toLowerCase(),
              r = Math.max(i.lastIndexOf("am"), i.lastIndexOf("pm"));
            return (
              r >= 0 && ((o = t.substring(r)), (t = t.substring(0, r - 1))),
              d.createElement(
                "div",
                { className: "ClockContainer" },
                d.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  d.createElement("span", { className: "Suffix" }, o)
                )
              )
            );
          }
        }
        function T(e) {
          return d.createElement(
            u.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" })
          );
        }
        (0, n.gn)([a.ak], D.prototype, "updateTime", null);
        let E = (i = class extends d.Component {
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
              o = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              i =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return d.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              d.createElement(
                b.d,
                { allowableParentSelectors: [".DashboardMain"] },
                d.createElement(
                  s.wx,
                  { translation: o },
                  d.createElement(
                    s.s_,
                    {
                      visibility: t ? s.Bl.Visible : s.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: _.WR,
                      curvature_origin_id: i,
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
        (E.s_CurrentlyShownTooltip = null),
          (0, n.gn)([l.Fl], E.prototype, "isShowingTooltip", null),
          (0, n.gn)([l.aD.bound], E.prototype, "show", null),
          (0, n.gn)([l.aD.bound], E.prototype, "hide", null),
          (0, n.gn)([l.LO], E, "s_CurrentlyShownTooltip", void 0),
          (E = i = (0, n.gn)([c.Pi], E));
        class I extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !I.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  I.k_rsThumbnailHashesToInvert.indexOf(M().hash(e)) >= 0 &&
                  (t = !0),
                I.s_mapShouldInvertThumbnail.set(e, t);
            }
            return I.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              o = I.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, f.LJ)(["BlackToWhite", o]),
                src: this.props.src,
              })
            );
          }
        }
        var x, P;
        (I.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "0ea4aa3d9529b716f0f1957684247dee",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (I.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(x || (x = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(P || (P = {}));
        const O = (e) =>
          d.createElement(
            "div",
            { className: (0, f.LJ)("ControlBarGroup", x[e.style]) },
            e.children
          );
        let V = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter() {
            var e, t, o;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (o = (t = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(t);
          }
          onMouseLeave() {
            var e, t, o;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (o = (t = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(t);
          }
          render() {
            var e;
            return d.createElement(
              u.z,
              {
                className: (0, f.LJ)(
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
                  d.createElement(b.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  })
                ),
              d.createElement(E, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(I, { src: this.props.imageUrl })
            );
          }
        };
        (0, n.gn)([a.ak], V.prototype, "onMouseEnter", null),
          (0, n.gn)([a.ak], V.prototype, "onMouseLeave", null),
          (V = (0, n.gn)([c.Pi], V));
        const L = (e) =>
          d.createElement(
            O,
            { style: e.style },
            d.createElement(V, Object.assign({}, e))
          );
        class B extends d.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.deviceIndex = s.Kf),
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
              o = s.Kf;
            if (
              (void 0 !== this.props.role
                ? (o = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (o = this.props.deviceIndex),
              o != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = o)),
              o != s.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  o,
                  s.Uk.DeviceProvidesBatteryStatus_Bool
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  o,
                  s.Uk.DeviceBatteryPercentage_Float
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  o,
                  s.Uk.DeviceIsCharging_Bool
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + B.kBatteryLevelHysteresis,
                        1
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - B.kBatteryLevelHysteresis,
                        0
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                o,
                s.Uk.DevicePowerUsage_Float
              );
            }
            let i = w.X.GetBatteryIcon(
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
          onDeviceEvent(e, t, o) {
            (e != s.XX.Activated && e != s.XX.Deactivated) || this.update();
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
        (B.kBatteryLevelHysteresis = 0.02),
          (0, n.gn)([a.ak], B.prototype, "updateControllerStatus", null),
          (0, n.gn)([a.ak], B.prototype, "onBatteryStateChanged", null),
          (0, n.gn)([a.ak], B.prototype, "onDeviceRoleChanged", null),
          (0, n.gn)([a.ak], B.prototype, "onDeviceEvent", null),
          d.Component;
        const N = (e) =>
          d.createElement(
            "div",
            { className: "Title" },
            d.createElement(I, { src: e.iconUrl, shadow: !0 }),
            d.createElement("span", { className: "NoWrapText" }, e.name)
          );
        class H extends d.Component {
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
              o = Math.asin(t) / Math.PI,
              i =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                s.at,
                { location: { x: t, y: -1 } },
                d.createElement(s.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(o),
                    z: -0.03 * Math.abs(o),
                  },
                  rotation: { y: 15 * o, z: 2 * o },
                })
              ),
              d.createElement(
                b.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                d.createElement(
                  s.VW,
                  { color: this.props.tintColor },
                  d.createElement(
                    v.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    d.createElement(
                      s.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04, z: -0.01 },
                      },
                      d.createElement(
                        s.s_,
                        {
                          curvature_origin_id: i,
                          origin: s.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          target_dpi_panel_id: _.WR,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        d.createElement(
                          "div",
                          {
                            className: (0, f.LJ)(
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
                        s.wx,
                        { translation: { z: -1e-5 } },
                        d.createElement(
                          s.s_,
                          {
                            curvature_origin_id: i,
                            origin: s.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: _.WR,
                            target_dpi_multiplier: 2,
                            reflect: 0.04,
                            sampler: s.Vv.SingleTap,
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
        (0, n.gn)([a.ak], H.prototype, "onResizeObserved", null),
          (0, n.gn)([a.ak], H.prototype, "updateBackgroundSize", null),
          (0, n.gn)([a.ak], H.prototype, "onPortalDidMount", null);
        let A = class extends d.Component {
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
              k.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume"
              ) && k.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!k.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice"
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return d.createElement(
              H,
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
                    onClick: S.f.Instance.toggleMicrophoneMute,
                    title: S.f.Instance.microphoneMuted
                      ? (0, y.Xx)("#UnmuteMicrophone")
                      : (0, y.Xx)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: S.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  })
                ),
                d.createElement(F, {
                  title: (0, y.Xx)("#MicrophoneVolume"),
                  value: S.f.Instance.microphoneVolume,
                  onChange: S.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, f.LJ)([
                    "Muted",
                    S.f.Instance.microphoneMuted,
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
                      onClick: S.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: S.f.Instance.mirrorMuted
                        ? (0, y.Xx)("#UnmuteAudioMirror")
                        : (0, y.Xx)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: S.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    })
                  ),
                  d.createElement(F, {
                    title: (0, y.Xx)("#AudioMirrorVolume"),
                    value: S.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: S.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, f.LJ)([
                      "Muted",
                      S.f.Instance.mirrorMuted,
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
                    onClick: S.f.Instance.toggleMute,
                    title: S.f.Instance.muted
                      ? (0, y.Xx)("#Unmute_Headset")
                      : (0, y.Xx)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: S.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  })
                ),
                d.createElement(F, {
                  title: (0, y.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: S.f.Instance.volume,
                  onChange: S.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, f.LJ)(["Muted", S.f.Instance.muted]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                })
              )
            );
          }
        };
        (0, n.gn)([a.ak], A.prototype, "onSliderMouseEnter", null),
          (0, n.gn)([a.ak], A.prototype, "onSliderMouseLeave", null),
          (0, n.gn)([a.ak], A.prototype, "onSliderFinalChange", null),
          (0, n.gn)([l.Fl], A.prototype, "showAudioMirrorControls", null),
          (0, n.gn)([l.Fl], A.prototype, "enableAudioMirrorControls", null),
          (A = (0, n.gn)([c.Pi], A));
        let F = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, o;
            this.setState({ bHover: !0 }),
              null === (o = (t = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(t, e);
          }
          onMouseLeave(e) {
            var t, o;
            this.setState({ bHover: !1 }),
              null === (o = (t = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(t, e);
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
                d.createElement(E, {
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
        (0, n.gn)([a.ak], F.prototype, "onMouseEnter", null),
          (0, n.gn)([a.ak], F.prototype, "onMouseLeave", null),
          (0, n.gn)([a.ak], F.prototype, "onInteractionStart", null),
          (0, n.gn)([a.ak], F.prototype, "onInteractionEnd", null),
          (F = (0, n.gn)([c.Pi], F));
        let U = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, o, i;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (i = (o = this.props).onMouseEnter) ||
                void 0 === i ||
                i.call(o, e);
          }
          onMouseLeave(e) {
            var t, o, i;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (i = (o = this.props).onMouseLeave) ||
                void 0 === i ||
                i.call(o, e);
          }
          render() {
            return d.createElement(
              u.z,
              Object.assign({}, this.props, {
                className: (0, f.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                d.createElement(E, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children
            );
          }
        };
        (0, n.gn)([a.ak], U.prototype, "onMouseEnter", null),
          (0, n.gn)([a.ak], U.prototype, "onMouseLeave", null),
          (U = (0, n.gn)([c.Pi], U));
        let W = (r = class extends d.Component {
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
            var t, o;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              null === (o = (t = this.props).onShowTray) ||
                void 0 === o ||
                o.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, s.JR)((0, s.Zj)(t, this.m_vecOriginalMousePosition)) >
              r.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
            var e, t, o, i;
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
                (null === (o = (t = this.props).onHideTray) ||
                  void 0 === o ||
                  o.call(t)),
              null === (i = this.slider) ||
                void 0 === i ||
                i.stopExternalSliding();
          }
          render() {
            return d.createElement(V, {
              imageUrl: S.f.Instance.muted
                ? "/dashboard/images/icons/svr_volume_mute.svg"
                : "/dashboard/images/icons/svr_volume.svg",
              active: this.props.active,
              label: this.props.active ? null : (0, y.Xx)("#Volume"),
              onMouseDown: this.onButtonMouseDown,
              onMouseEnter: this.props.onMouseEnter,
              onMouseLeave: this.props.onMouseLeave,
            });
          }
        });
        (W.MIN_DRAG_THRESHOLD = 35),
          (0, n.gn)([a.ak], W.prototype, "onButtonMouseDown", null),
          (0, n.gn)([a.ak], W.prototype, "onWindowMouseMove", null),
          (0, n.gn)([a.ak], W.prototype, "onWindowMouseUp", null),
          (W = r = (0, n.gn)([c.Pi], W));
        const z = (e) => {
          const t = d.useRef();
          return d.createElement(
            u.z,
            {
              className: (0, f.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl],
                e.additionalClassNames
              ),
              onClick: e.onClick,
              onMouseEnter: () => {
                var o;
                null === (o = t.current) || void 0 === o || o.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var o;
                null === (o = t.current) || void 0 === o || o.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              d.createElement(E, {
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
      79: (e, t, o) => {
        o.d(t, { BB: () => h, KU: () => p });
        var i,
          r = o(655),
          n = o(7294),
          s = o(7056),
          a = o(6321),
          l = o(3868),
          c = o(7062),
          d = o(1058),
          u = o(3446);
        const h = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (i = class extends n.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new a.Nv()),
              this.m_mailbox.Init(h).then(() => {
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
            clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
            const t =
              null === a.ZP || void 0 === a.ZP
                ? void 0
                : a.ZP.VRApplications.GetSceneApplicationKey();
            let o = !t || "system.generated.xrservice" == t;
            o
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === a.ZP ||
                void 0 === a.ZP ||
                a.ZP.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                in_dash_mode: o,
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
                    i.kFadeDurationMs
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
            return n.createElement(
              a.s_,
              {
                width: void 0,
                height: i.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              n.createElement(
                "div",
                {
                  className: (0, d.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: i.kPixelWidth },
                },
                n.createElement(
                  "div",
                  { className: "FlexColumn" },
                  n.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    n.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds
                    )
                  ),
                  n.createElement(
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
            let o = 0.9,
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
            const r =
              this.props.dashboardRef.current &&
              this.props.dashboardRef.current.isTheaterMode;
            let s =
              null !==
                (t = u.G3.settings.get(
                  "/settings/dashboard/allowFreeTransform"
                )) &&
              void 0 !== t &&
              t;
            return this.state.in_dash_mode
              ? (r && ((o *= 2), (i *= 2)),
                n.createElement(
                  a.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: s },
                  n.createElement(
                    a.wx,
                    { translation: { y: -0.05, z: -o }, scale: i },
                    this.renderPanel()
                  )
                ))
              : n.createElement(
                  a.wx,
                  { parent_path: "/user/head" },
                  n.createElement(
                    a.wx,
                    { translation: { y: -0.05, z: -o }, scale: i },
                    this.renderPanel()
                  )
                );
          }
        });
        (m.kPanelHeight = 0.2),
          (m.kPixelWidth = 400),
          (m.kFadeDurationMs = 1e3),
          (0, r.gn)(
            [s.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null
          ),
          (0, r.gn)([s.ak], m.prototype, "CountdownTick", null),
          (0, r.gn)([s.ak], m.prototype, "HideOverlay", null),
          (m = i = (0, r.gn)([c.Pi], m));
      },
      2379: (e, t, o) => {
        o.d(t, { s: () => v });
        var i = o(655),
          r = o(7294),
          n = o(7062),
          s = o(7056),
          a = o(3868),
          l = o(1428),
          c = o(9093),
          d = o(2188),
          u = o(3947),
          h = o(1818),
          p = o(1058),
          m = o(8052);
        let g = class extends r.Component {
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
            let o = t;
            const i = "vive_tracker";
            o.includes(i) &&
              (o = o.substring(o.indexOf(i) + i.length, o.length));
            let n = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (n = (0, a.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable"
                  ))
                : (n = (0, a.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected"
                  )),
              r.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                r.createElement(
                  "div",
                  { className: "Label", title: t },
                  r.createElement("span", null, o),
                  r.createElement("div", {
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
                r.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  r.createElement(
                    m.GV,
                    { title: n },
                    r.createElement(
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
                r.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  r.createElement(m.Xp, {
                    label: (0, a.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, a.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    r.createElement(m.Xp, {
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
        (0, i.gn)([d.Fl], g.prototype, "trackerConfig", null),
          (0, i.gn)([s.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, i.gn)([s.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, i.gn)([s.ak], g.prototype, "BuzzTracker", null),
          (0, i.gn)([d.Fl], g.prototype, "deviceInfo", null),
          (g = (0, i.gn)([n.Pi], g));
        let v = class extends r.Component {
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
                (e = t.trackers.map((e, o) =>
                  r.createElement(g, {
                    key: o,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  })
                )),
              r.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        v = (0, i.gn)([n.Pi], v);
      },
      6889: (e, t, o) => {
        o.d(t, { u: () => r });
        var i = o(7294);
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
    },
    o = {};
  function i(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var n = (o[e] = { id: e, exports: {} });
    return t[e](n, n.exports, i), n.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, o, r, n) => {
      if (!o) {
        var s = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, n] = e[d], a = !0, l = 0; l < o.length; l++)
            (!1 & n || s >= n) && Object.keys(i.O).every((e) => i.O[e](o[l]))
              ? o.splice(l--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [o, r, n];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var o in t)
        i.o(t, o) &&
          !i.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
    (i.j = 627),
    (() => {
      var e = { 627: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [s, a, l] = o,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (r in a) i.o(a, r) && (i.m[r] = a[r]);
            if (l) var d = l(i);
          }
          for (t && t(o); c < s.length; c++)
            (n = s[c]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(d);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })(),
    (i.nc = void 0);
  var r = i.O(void 0, [968, 683], () => i(1776));
  r = i.O(r);
})();
//# sourceMappingURL=bindingcallouts.js.map?v=1920b10de2d78b871023
