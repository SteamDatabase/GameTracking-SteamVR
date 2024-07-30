/*! For license information please see keyboard.js.LICENSE.txt */
(() => {
  var e,
    t = {
      1569: (e, t, o) => {
        "use strict";
        o.d(t, {
          Bl: () => _.Bl,
          Co: () => D,
          Dd: () => l.D,
          Fs: () => n.Fs,
          GC: () => w.GC,
          Ic: () => _.Ic,
          JR: () => n.JR,
          Kf: () => w.Kf,
          Kg: () => w.Kg,
          Ko: () => _.Ko,
          LL: () => w.LL,
          LY: () => n.LY,
          M9: () => n.M9,
          Nv: () => r.N,
          OK: () => h.OK,
          Op: () => w.Op,
          Oq: () => n.Oq,
          Pd: () => n.Pd,
          Pw: () => w.Pw,
          QZ: () => w.QZ,
          Qu: () => w.Qu,
          Sb: () => R.S,
          UU: () => n.UU,
          Uk: () => M.Uk,
          VW: () => s.V,
          Vv: () => _.Vv,
          XX: () => w.XX,
          Y9: () => a.Y,
          Z9: () => w.Z9,
          ZP: () => M.ZP,
          Zj: () => n.Zj,
          a0: () => w.a0,
          at: () => g.a,
          bt: () => m.b,
          dq: () => n.dq,
          eK: () => b.e,
          eQ: () => n.eQ,
          gQ: () => p.g,
          hz: () => i.h,
          iC: () => y.i,
          iN: () => h.iN,
          kH: () => f.k,
          kL: () => k.k,
          l0: () => w.l0,
          lx: () => w.lx,
          mT: () => n.mT,
          n0: () => u.n,
          q9: () => n.q9,
          qA: () => w.qA,
          qC: () => w.qC,
          qI: () => h.qI,
          qR: () => w.qR,
          sH: () => M.sH,
          sO: () => S.s,
          s_: () => _.s_,
          sl: () => d.s,
          tS: () => n.tS,
          vS: () => M.vS,
          wU: () => w.wU,
          wx: () => c.w,
          x1: () => v.x,
          xY: () => w.xY,
          xj: () => p.x,
          zA: () => w.zA,
          zq: () => w.zq,
        });
        var r = o(4671),
          n = o(4727),
          i = o(7500),
          a = o(2071),
          s = o(6626),
          l = o(751),
          d = o(8116),
          c = o(390),
          h = (o(8257), o(233)),
          u = (o(7313), o(6765)),
          p = (o(491), o(171), o(8811)),
          m = o(5157),
          v = o(5486),
          g = (o(5829), o(7973)),
          _ = o(2214),
          y = (o(5627), o(3841)),
          b = (o(2467), o(7996), o(1364), o(5146)),
          S = o(163),
          f = o(2109),
          k = o(8221),
          R = (o(684), o(9481)),
          w = o(5867),
          M = o(7074);
        const D = VRHTML;
      },
      1364: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      7996: (e, t, o) => {
        "use strict";
        var r = o(7294);
        o(7074), o(390), r.Component;
      },
      2071: (e, t, o) => {
        "use strict";
        o.d(t, { Y: () => d });
        var r = o(655),
          n = o(7294),
          i = o(7313),
          a = o(7056),
          s = o(233),
          l = o(8116);
        class d extends i.Mo {
          constructor(e) {
            var t;
            if (
              (super(e),
              void 0 !== this.props.iconUri &&
                void 0 !== this.props.iconOverlayKey)
            )
              throw new Error(
                "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.",
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
            const r = this.createSgNode(t);
            return (
              (r.properties.tab_name =
                null !== (o = this.props.tabName) && void 0 !== o ? o : ""),
              (r.properties.mountable_id = (0, s.Hb)(
                this.m_sMountableUnqualifiedID,
              )),
              (r.properties.icon_uri = this.props.iconUri),
              (r.properties.icon_overlay_key = this.props.iconOverlayKey),
              (r.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, r]
            );
          }
          internalRender() {
            return n.createElement(
              "vsg-node",
              { id: this.props.id },
              n.createElement(
                l.C,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children,
              ),
            );
          }
        }
        (0, r.gn)([a.ZP], d.prototype, "buildNode", null);
      },
      5146: (e, t, o) => {
        "use strict";
        o.d(t, { e: () => a });
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var o, r;
            const n = this.createSgNode(t);
            return (
              (n.properties.continuous_relatch =
                null !== (o = this.props.bContinuousRelatch) &&
                void 0 !== o &&
                o),
              (n.properties.free_dashboard_transform =
                null !== (r = this.props.bFreeDashboardTransform) &&
                void 0 !== r &&
                r),
              [e, n]
            );
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      3841: (e, t, o) => {
        "use strict";
        o.d(t, { i: () => a });
        var r,
          n = o(7294),
          i = o(7313);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(r || (r = {}));
        class a extends i.Mo {
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
              r = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              i = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return n.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": o,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": r,
                "max-angular-velocity": i,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children,
            );
          }
        }
      },
      163: (e, t, o) => {
        "use strict";
        o.d(t, { s: () => i });
        var r = o(7294),
          n = o(7313);
        class i extends n.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, n.Kg)(this.props.transform.translation),
              t = (0, n.xs)(this.props.transform.rotation),
              o = (0, n.Kg)(this.props.transform.scale);
            return r.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.parent_path,
                translation: e,
                rotation: t,
                scale: o,
                "stop-distance": this.props.stop_distance,
                "start-angle": this.props.start_angle,
                "start-quat-difference": this.props.start_quat_difference,
                "stop-quat-difference": this.props.stop_quat_difference,
                "scale-margin": this.props.scale_margin,
                "lerp-speed": this.props.lerp_speed,
              },
              this.props.children,
            );
          }
        }
      },
      2467: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      5486: (e, t, o) => {
        "use strict";
        o.d(t, { x: () => i });
        var r = o(7294),
          n = o(7313);
        class i extends n.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return r.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      5627: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      5157: (e, t, o) => {
        "use strict";
        o.d(t, { b: () => a });
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
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
              (o.properties["target-id"] = this.props.target_id),
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
                let t = (0, n.kh)(e.color, { r: 0, g: 0, b: 0 });
                o.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, o];
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      2109: (e, t, o) => {
        "use strict";
        o.d(t, { k: () => i });
        var r = o(7294),
          n = o(7313);
        class i extends n.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, n.Kg)(this.props.xfCurrent.translation),
              t = (0, n.xs)(this.props.xfCurrent.rotation),
              o = (0, n.Kg)(this.props.xfCurrent.scale);
            return r.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: o,
              },
              this.props.children,
            );
          }
        }
      },
      8116: (e, t, o) => {
        "use strict";
        o.d(t, { C: () => s, s: () => l });
        var r = o(655),
          n = o(7313),
          i = o(7056),
          a = o(233);
        class s extends n.Mo {
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
        (0, r.gn)([i.ZP], s.prototype, "buildNode", null);
        class l extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (
              (o.properties.mountable_id = (0, a.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (o.properties.dashboard_scale = this.props.fDashboardScale),
              [e, o]
            );
          }
        }
        (0, r.gn)([i.ZP], l.prototype, "buildNode", null);
      },
      751: (e, t, o) => {
        "use strict";
        o.d(t, { D: () => a });
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
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
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      2214: (e, t, o) => {
        "use strict";
        o.d(t, {
          Bl: () => a,
          Ic: () => r,
          Ko: () => i,
          Lb: () => m,
          Vv: () => n,
          s_: () => v,
        });
        var r,
          n,
          i,
          a,
          s = o(655),
          l = o(7294),
          d = o(7313),
          c = o(6765),
          h = o(7056),
          u = o(233);
        function p(e) {
          if (e) return [e.u, e.v];
        }
        function m(e) {
          switch (e) {
            case r.TopLeft:
              return { x: -1, y: 1 };
            case r.TopCenter:
              return { x: 0, y: 1 };
            case r.TopRight:
              return { x: 1, y: 1 };
            case r.CenterLeft:
              return { x: -1, y: 0 };
            case r.Center:
              return { x: 0, y: 0 };
            case r.CenterRight:
              return { x: 1, y: 0 };
            case r.BottomLeft:
              return { x: -1, y: -1 };
            case r.BottomCenter:
              return { x: 0, y: -1 };
            case r.BottomRight:
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
        })(r || (r = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(n || (n = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(a || (a = {}));
        class v extends d.Mo {
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
                void 0 !== this.props.width || void 0 !== this.props.height,
              o = void 0 !== this.props.meters_per_pixel,
              r = void 0 !== this.props.target_dpi_panel_id,
              n =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              n &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const i = [t, o, r, n].filter((e) => e).length,
              a =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == i)
              throw new Error(
                `Panel requires one of the following props: ${a}.`,
              );
            if (i > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${a}.`,
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
            v.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = c.n.Current().addEmbeddedPanelUVs(this)),
              (v.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            c.n.Current().forceLayoutUpdate();
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (v.s_bPanelsAreDirty = !0),
              c.n.Current().removeEmbeddedPanelUVs(this),
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
                e.height - t.height - t.y,
              ),
              this.createOverdragBlockingElement(0, t.y, t.x, t.height),
              this.createOverdragBlockingElement(
                t.x + t.width,
                t.y,
                e.width - t.width - t.x,
                t.height,
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
                this.onWindowMouseUp,
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(e, t, o, r) {
            let n = document.createElement("div");
            (n.style.position = "absolute"),
              (n.style.top = t + "px"),
              (n.style.left = e + "px"),
              (n.style.width = o + "px"),
              (n.style.height = r + "px"),
              (n.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(n),
              document.body.appendChild(n);
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
            var o, r, n, i, s;
            if (this.visibility != a.Visible) return [e, null];
            let l = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              c = this.createSgNode(t),
              h = { x: 0, y: 0 };
            h =
              "object" == typeof this.props.origin
                ? (0, d.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const v = this.props.overlay_key,
              g = (0, u.Gv)();
            return (
              v && v.length > 0
                ? (c.properties.key = v)
                : g
                ? (c.properties.key = g)
                : (c.properties.overlay_handle = (0, u.Mb)()),
              (c.properties.uv_min =
                null !== (o = p(this.m_UVsMin)) && void 0 !== o ? o : void 0),
              (c.properties.uv_max =
                null !== (r = p(this.m_UVsMax)) && void 0 !== r ? r : void 0),
              (c.properties.width =
                null !== (n = this.props.width) && void 0 !== n ? n : void 0),
              (c.properties.height =
                null !== (i = this.props.height) && void 0 !== i ? i : void 0),
              (c.properties["min-width"] =
                null !== (s = this.props.min_width) && void 0 !== s
                  ? s
                  : void 0),
              (c.properties["target-width-anchor-id"] = (0, u.Hb)(
                this.props.target_width_anchor_id,
              )),
              (c.properties["target-dpi-panel-id"] = (0, u.Hb)(
                this.props.target_dpi_panel_id,
              )),
              (c.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (c.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (c.properties["subview-parent-panel-id"] = (0, u.Hb)(
                this.props.subview_parent_panel_id,
              )),
              (c.properties.curvature = this.props.curvature),
              (c.properties["curvature-origin-id"] = (0, u.Hb)(
                this.props.curvature_origin_id,
              )),
              (c.properties.spherical = this.props.spherical),
              (c.properties.interactive = this.props.interactive),
              (c.properties.scrollable = this.props.scrollable),
              (c.properties.undocked = this.props.undocked),
              (c.properties.modal = this.props.modal),
              (c.properties["requires-laser"] = this.props.requires_laser),
              (c.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (c.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (c.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (c.properties["is-grab-handle"] = this.props.is_grab_handle),
              (c.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (c.properties.origin = (0, d.D1)(h)),
              (c.properties.debug_name = this.props.debug_name),
              (c.properties.sampler = this.props.sampler),
              (c.properties.reflect = this.props.reflect),
              (c.properties.stereoscopy = this.props.stereoscopy),
              (c.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (c.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (c.properties["texture-id"] = (0, u.Hb)(this.props.texture_id)),
              (c.properties["sort-order"] = this.props.sort_order),
              (c.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              [l, c]
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
                style: { display: this.visibility == a.Hidden ? "none" : null },
              },
              this.props.children,
            );
          }
        }
        (v.s_bPanelsAreDirty = !1),
          (0, s.gn)([h.ZP], v.prototype, "onResizeObserved", null),
          (0, s.gn)([h.ZP], v.prototype, "onPanelMouseDown", null),
          (0, s.gn)([h.ZP], v.prototype, "onWindowMouseUp", null),
          (0, s.gn)([h.ZP], v.prototype, "buildNode", null);
      },
      7973: (e, t, o) => {
        "use strict";
        o.d(t, { a: () => s });
        var r = o(655),
          n = o(7313),
          i = o(2214),
          a = o(7056);
        class s extends n.Mo {
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
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let o = null;
            "object" == typeof this.props.location
              ? (o = (0, n.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (o = (0, i.Lb)(this.props.location));
            let r = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (r.properties["anchor-u"] = this.m_latchedPosition.u),
                (r.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (o) {
              const t = { u: 0.5 * o.x + 0.5, v: -0.5 * o.y + 0.5 },
                n =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (r.properties["anchor-u"] = n.u),
                (r.properties["anchor-v"] = n.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const o = t.ownerDocument,
                n = t.getBoundingClientRect(),
                i = n.left + n.width / 2,
                a = n.top + n.height / 2,
                s = e.currentPanel.m_Rect;
              if (i < s.x || i > s.x + s.width || a < s.y || a > s.y + s.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = o.defaultView.innerWidth,
                d = o.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (r.properties["anchor-u"] = i / l),
                (r.properties["anchor-v"] = a / d);
            }
            return (
              (this.m_latchedPosition = {
                u: r.properties["anchor-u"],
                v: r.properties["anchor-v"],
              }),
              [e, r]
            );
          }
        }
        (0, r.gn)([a.ZP], s.prototype, "buildNode", null);
      },
      5829: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      8811: (e, t, o) => {
        "use strict";
        o.d(t, { g: () => l, x: () => r });
        var r,
          n = o(655),
          i = o(7313),
          a = o(7056),
          s = o(233);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(r || (r = {}));
        class l extends i.Mo {
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
              (o.properties["texture-id"] = (0, s.Hb)(
                this.props["texture-id"],
              )),
              (o.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) o.properties.color = e.color;
              else {
                let t = (0, i.kh)(e.color, { r: 0, g: 0, b: 0 });
                o.properties.color = [t.r, t.g, t.b];
              }
              (o.properties.opacity = e.opacity ? e.opacity : 1),
                (o.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (o.properties.wireframe = this.props.wireframe),
              (o.properties.solid = this.props.solid),
              (o.properties.culling = this.props.culling),
              (o.properties.stencil_mask = this.props.stencil_mask),
              (o.properties["no-depth-write"] = this.props["no-depth-write"]),
              (o.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, o]
            );
          }
        }
        (0, n.gn)([a.ZP], l.prototype, "buildNode", null);
      },
      9481: (e, t, o) => {
        "use strict";
        o.d(t, { S: () => a });
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "reparent-to-panel";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t),
              r = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !0,
                currentPanel: null,
              });
            return (
              this.props.parent_overlay_key &&
                (o.properties["parent-overlay-key"] =
                  this.props.parent_overlay_key),
              [r, o]
            );
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      8221: (e, t, o) => {
        "use strict";
        o.d(t, { k: () => a });
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "resize-handle";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (
              (o.properties["target-id"] = this.props.target_id),
              (o.properties["min-target-scale"] = this.props.min_target_scale),
              (o.properties["max-target-scale"] = this.props.max_target_scale),
              [e, o]
            );
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      6765: (e, t, o) => {
        "use strict";
        o.d(t, { n: () => d });
        var r,
          n = o(655),
          i = o(7294),
          a = o(2214),
          s = o(7056),
          l = o(233);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(r || (r = {}));
        class d extends i.Component {
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
              (d.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? r.Canvas
                  : r.Image,
              }),
              (this.m_DomRef = i.createRef()),
              (this.m_scalingDomRef = i.createRef()),
              (this.m_CanvasRef = i.createRef()),
              (this.m_EmbeddedDataImgRef = i.createRef()),
              (this.m_DebugPointerRef = i.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== d.Current();
          }
          static Current() {
            return d.s_Current;
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
            (a.s_.s_bPanelsAreDirty = !0),
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
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
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
                (0, l.mK)(
                  this.props.owning_overlay_key,
                  this.m_DomRef.current,
                  this.props.web_secret,
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
            const e = this.state.eRenderMode == r.Image,
              t = this.state.eRenderMode == r.Canvas;
            let o = [];
            return (
              this.state.bShowDebugPointer && o.push("ShowDebugPointer"),
              i.createElement(
                "vsg-app",
                {
                  class: o.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                i.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  i.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                t &&
                  i.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                i.createElement(
                  "div",
                  { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                  this.state.bFontsLoaded && this.props.children,
                ),
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
            this.state.eRenderMode == r.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == r.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    d.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              o = t.width / this.m_fCurrentScale,
              r = t.height / this.m_fCurrentScale,
              n = { x: e.innerWidth / o, y: e.innerHeight / r },
              i = Math.min(n.x, n.y, 1);
            i != this.m_fCurrentScale &&
              (1 != i
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + i + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = i),
              (a.s_.s_bPanelsAreDirty = !0)),
              a.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.k7)(),
                (a.s_.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0),
                ),
                this.m_rEmbeddedIndicesToClear.forEach((e) => {
                  let t = 1 + 3 * e;
                  for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                this.m_mapPanels.forEach((e, t) => {
                  let o = e.m_Rect.x,
                    r = e.m_Rect.x + e.m_Rect.width,
                    n = e.m_Rect.y,
                    i = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || o >= r || n >= i)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & o) >> 8, 255 & o, 0),
                      this.setPixel(a + 1, (65280 & r) >> 8, 255 & r, 255 & n),
                      this.setPixel(
                        a + 2,
                        (65280 & i) >> 8,
                        255 & i,
                        (65280 & n) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == r.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == r.Canvas
              ) {
                let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
                this.m_CanvasContext.putImageData(
                  this.m_Pixels,
                  0,
                  0,
                  this.m_nDirtyXMin,
                  0,
                  e,
                  this.m_Pixels.height,
                ),
                  (this.m_nDirtyXMin = -1),
                  (this.m_nDirtyXMax = -1);
              }
          }
          setPixel(e, t, o, n, i = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == r.Image
            ) {
              const r = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              r.setUint8(4 * e + 0, t),
                r.setUint8(4 * e + 1, o),
                r.setUint8(4 * e + 2, n),
                r.setUint8(4 * e + 3, i);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == r.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = o),
                (this.m_Pixels.data[4 * e + 2] = n),
                (this.m_Pixels.data[4 * e + 3] = i),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, n.gn)([s.ak], d.prototype, "toggleDebugPointer", null),
          (0, n.gn)([s.ak], d.prototype, "onMouseMove", null),
          (0, n.gn)([s.ak], d.prototype, "forceLayoutUpdate", null),
          (0, n.gn)([s.ak], d.prototype, "onMutation", null);
      },
      7313: (e, t, o) => {
        "use strict";
        o.d(t, {
          D1: () => d,
          Kg: () => c,
          Mo: () => u,
          QE: () => a,
          Uq: () => s,
          kh: () => l,
          xs: () => h,
        });
        var r = o(7294),
          n = o(5867),
          i = o(233);
        function a(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function s(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function l(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function d(e) {
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
        function h(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class u extends r.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = r.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.NextSGID()) && void 0 !== t
                  ? t
                  : n.nX);
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
            return r.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? r.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
      },
      233: (e, t, o) => {
        "use strict";
        o.d(t, {
          Gv: () => M,
          Hb: () => w,
          Mb: () => u,
          OK: () => T,
          ac: () => h,
          iN: () => R,
          k7: () => V,
          mK: () => k,
          qI: () => C,
          sX: () => D,
        });
        var r = o(655),
          n = o(4671);
        function i(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) {
            if ("undefined" == o) return;
            let e = [];
            for (let t of o.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function a(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) return parseFloat(o);
        }
        function s(e, t) {
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
        function d(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) return o;
        }
        function c(e, t) {
          return w(d(e, t));
        }
        function h(e, t) {
          let o = { type: e, properties: {} };
          return (
            t.id && (o.properties.id = w(t.id)),
            (o.properties.sgid = s(t, "sgid")),
            o
          );
        }
        function u() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function p(e, t) {
          let [o, r] = (function (e, t) {
              let o = t.buildNode;
              if (o) return o(e, t);
              let r = Object.assign({}, e),
                n = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (n = h("transform", t)),
                    (n.properties.translation = i(t, "translation")),
                    (n.properties.rotation = i(t, "rotation")),
                    (n.properties.scale = i(t, "scale")),
                    (n.properties["curvature-pitch"] = a(t, "curvature-pitch")),
                    (n.properties["transform-path"] = d(t, "transform-path")),
                    (n.properties["invert-parent-panel-pitch"] = l(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (n.properties["parent-path"] = d(t, "parent-path")),
                    (n.properties["parent-origin"] = d(t, "parent-origin")),
                    (n.properties["parent-id"] = c(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (n = h("trackingstatevisibility", t)),
                    (n.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (n.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (n.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (n = h("elasticheadtransform", t)),
                    (n.properties["start-angle-threshold"] = a(
                      t,
                      "start-angle-threshold",
                    )),
                    (n.properties["stop-angle-threshold"] = a(
                      t,
                      "stop-angle-threshold",
                    )),
                    (n.properties["ease-in-time"] = a(t, "ease-in-time")),
                    (n.properties["ease-in-power"] = a(t, "ease-in-power")),
                    (n.properties["ease-out-angle-threshold"] = a(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (n.properties["ease-out-power"] = a(t, "ease-out-power")),
                    (n.properties["min-angular-velocity"] = a(
                      t,
                      "min-angular-velocity",
                    )),
                    (n.properties["max-angular-velocity"] = a(
                      t,
                      "max-angular-velocity",
                    )),
                    (n.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (n.properties["translation-behavior"] = s(
                      t,
                      "translation-behavior",
                    ));
                  break;
                case "VSG-LINE":
                  (n = h("line", t)),
                    (n.properties["target-id"] = c(t, "target-id")),
                    (n.properties.thickness = a(t, "thickness")),
                    (n.properties["start-buffer"] = a(t, "start-buffer")),
                    (n.properties["end-buffer"] = a(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (n = h("line-constrained-transform", t)),
                    (n.properties["target-id"] = c(t, "target-id")),
                    (n.properties["source-id"] = c(t, "source-id")),
                    (n.properties["source-distance"] = a(t, "source-distance")),
                    (n.properties["target-limit"] = a(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (n = h("callout-transform", t)),
                    (n.properties.offset = i(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  n = h("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (n = h("pin-to-view-transform", t)),
                    (n.properties["offscreen-z-depth"] = a(
                      t,
                      "offscreen-z-depth",
                    )),
                    (n.properties["off-axis-limit"] = a(t, "off-axis-limit")),
                    (n.properties["transition-limit"] = a(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (n = h("manipulation-transform", t)),
                    (n.properties["is-moving"] = l(t, "is-moving")),
                    (n.properties["parent-path"] = d(t, "parent-path")),
                    (n.properties.translation = i(t, "translation")),
                    (n.properties.rotation = i(t, "rotation")),
                    (n.properties.scale = i(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (n = h("grab-transform", t)),
                    (n.properties["parent-path"] = d(t, "parent-path")),
                    (n.properties.translation = i(t, "translation")),
                    (n.properties.rotation = i(t, "rotation")),
                    (n.properties.scale = i(t, "scale")),
                    (n.properties["stop-distance"] = a(t, "stop-distance")),
                    (n.properties["start-angle"] = a(t, "start-angle")),
                    (n.properties["start-quat-difference"] = a(
                      t,
                      "start-quat-difference",
                    )),
                    (n.properties["stop-quat-difference"] = a(
                      t,
                      "stop-quat-difference",
                    )),
                    (n.properties["scale-margin"] = a(t, "scale-margin")),
                    (n.properties["lerp-speed"] = a(t, "lerp-speed"));
              }
              return [r, n];
            })(e, t),
            n = [];
          for (let e = 0; e < t.children.length; e++) {
            let r = t.children.item(e);
            if (r.children) {
              let e = p(o, r);
              e && (n = n.concat(e));
            }
          }
          return o.bShouldAbort
            ? null
            : r
            ? (n.length > 0 && (r.children = n), [r])
            : n.length > 0
            ? 1 == n.length
              ? n
              : [{ children: n }]
            : null;
        }
        let m,
          v,
          g,
          _,
          y = [],
          b = null,
          S = null,
          f = null;
        function k(e, t, o) {
          (m = e),
            (v = t),
            (g = o),
            console.log("Setting owning overlay key to " + e);
        }
        function R(e, t) {
          return e + "::" + t;
        }
        function w(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : R(M(), e)
            : null;
        }
        function M() {
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
          y.push(e), V();
        }
        function C() {
          _ = !0;
        }
        function T(e) {
          var t, o;
          (o = e),
            (null == (t = f) || null == o
              ? t == o
              : t.color_mult == o.color_mult &&
                t.reflection_mult == o.reflection_mult &&
                t.roomview_mult.toString() == o.roomview_mult.toString() &&
                t.allow_skydome == o.allow_skydome) || ((f = e), V());
        }
        function V() {
          b ||
            (b = window.setTimeout(
              () =>
                (0, r.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  v && (e = v);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: _,
                      allowDismissOnClick: true,
                      sceneColorCorrection: f,
                    },
                    children: p(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      e,
                    ),
                  };
                  S ||
                    (console.log("Initializing sg_mailbox"),
                    (S = new n.N()),
                    yield S.Init("sg_mailbox", g));
                  let o = {
                    type: "update_scene_graph",
                    owning_overlay_key: M(),
                    scene_graph: t,
                    retired_sgids: y,
                  };
                  S.SendMessage("vrcompositor_systemlayer", o),
                    (b = null),
                    (y = []),
                    (_ = !1);
                }),
              0,
            ));
        }
      },
      491: (e, t, o) => {
        "use strict";
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
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
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      171: (e, t, o) => {
        "use strict";
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            if (
              ((o.properties["tile-size"] = this.props["tile-size"]),
              (o.properties["tile-gap"] = this.props["tile-gap"]),
              (o.properties["inner-radius"] = this.props["inner-radius"]),
              (o.properties["outer-radius"] = this.props["outer-radius"]),
              (o.properties["fade-distance"] = this.props["fade-distance"]),
              (o.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (o.properties.height = this.props.height),
              (o.properties.offset = [
                this.props.offset.x,
                this.props.offset.y,
              ]),
              "string" == typeof this.props.color)
            )
              o.properties.color = this.props.color;
            else if (this.props.color) {
              let e = (0, n.kh)(this.props.color, { r: 0, g: 0, b: 0 });
              o.properties.color = [e.r, e.g, e.b];
            }
            return (
              (o.properties["center-randomization"] =
                this.props["center-randomization"]),
              (o.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (o.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"]),
              (o.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (o.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"]),
              (o.properties["normal-randomization-degrees"] =
                this.props["normal-randomization-degrees"]),
              this.props.chevron &&
                ((o.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (o.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (o.properties["auto-subdivide"] = this.props["auto-subdivide"]),
              [e, o]
            );
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      6626: (e, t, o) => {
        "use strict";
        o.d(t, { V: () => a });
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
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
                let e = (0, n.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                o.properties.color = [e.r, e.g, e.b];
              }
            else o.properties.color = [1, 1, 1];
            return [e, o];
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      8257: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      390: (e, t, o) => {
        "use strict";
        o.d(t, { w: () => s });
        var r,
          n = o(7294),
          i = o(7313),
          a = o(4727);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(r || (r = {}));
        class s extends i.Mo {
          constructor(e) {
            if (
              (super(e),
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
                1)
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            let e, t, o;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (o = this.props.transform.scale))
              : ((e = (0, i.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, a.UU)(
                        (0, a.mT)(
                          (0, i.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                          Math.PI / 180,
                        ),
                      )),
                (o =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, i.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let s = (0, i.Kg)(e),
              l = (0, i.xs)(t),
              d = (0, i.Kg)(o);
            return n.createElement(
              "vsg-transform",
              {
                translation: s,
                rotation: l,
                scale: d,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": r[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
      },
      684: (e, t, o) => {
        "use strict";
        var r = o(655),
          n = o(7313),
          i = o(7056);
        class a extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "videocapturequad";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (
              (o.properties.width = this.props.width),
              (o.properties.height = this.props.height),
              (o.properties["target-id"] = this.props.target_id),
              (o.properties["near-z"] = this.props["near-z"]),
              (o.properties["far-z"] = this.props["far-z"]),
              (o.properties.debug = this.props.debug),
              [e, o]
            );
          }
        }
        (0, r.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      4727: (e, t, o) => {
        "use strict";
        function r() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function n(e, t, o) {
          return {
            x: t.x + e * (o.x - t.x),
            y: t.y + e * (o.y - t.y),
            z: t.z + e * (o.z - t.z),
          };
        }
        function i(e, t) {
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
        function d(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function c(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function h(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            o = 0.5 * e.y,
            r = 0.5 * e.z,
            n = Math.cos(t),
            i = Math.cos(o),
            a = Math.cos(r),
            s = Math.sin(t),
            l = Math.sin(o),
            d = Math.sin(r);
          return {
            w: n * i * a + s * l * d,
            x: s * i * a + n * l * d,
            y: n * l * a - s * i * d,
            z: n * i * d - s * l * a,
          };
        }
        function u(e) {
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
          let t = c(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function v(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        o.d(t, {
          Fs: () => s,
          JR: () => d,
          LY: () => c,
          M9: () => m,
          Oq: () => r,
          Pd: () => u,
          UU: () => h,
          Zj: () => i,
          dq: () => v,
          eQ: () => a,
          mT: () => l,
          q9: () => n,
          tS: () => p,
        });
      },
      7500: (e, t, o) => {
        "use strict";
        o.d(t, { h: () => i });
        var r = o(655),
          n = o(4671);
        class i {
          constructor() {
            (this.m_mailbox = new n.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return i.instance || (i.instance = new i()), i.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((o, n) =>
              (0, r.mG)(this, void 0, void 0, function* () {
                let r = { type: "transform_request", id: e, flPushDistance: t },
                  i = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    r,
                    "transform_response",
                  );
                i.id == e && i.transform
                  ? o(i.transform)
                  : n("requestSGTransform failed");
              }),
            );
          }
        }
      },
      4671: (e, t, o) => {
        "use strict";
        o.d(t, { N: () => i });
        var r = o(655),
          n = o(7056);
        class i {
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
                "Connecting vrmailbox " + this.m_sMailboxName + "...",
              );
              let o = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (o += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(o)),
                this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                  this.OnWebSocketOpen(t), e();
                }),
                this.m_wsWebSocketToServer.addEventListener(
                  "message",
                  this.OnWebSocketMessage,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "close",
                  this.OnWebSocketClose,
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
            return (0, r.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = i.EnsureUniqueName(e)),
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
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(e), !0)
            );
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
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (o = !0);
            }
            o || console.log("Received unhandled message: ", t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            return this.WebSocketSend(
              "mailbox_send " + e + " " + JSON.stringify(t),
            );
          }
          WaitForMessage(e, t) {
            return new Promise((o, r) => {
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
            return (0, r.mG)(this, void 0, void 0, function* () {
              let t = {
                type: "request_mailbox_registration_notification",
                mailbox_name: e,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                t,
                "mailbox_registered",
              );
            });
          }
          SendMessageAndWaitForResponse(e, t, o) {
            let r = Object.assign({}, t);
            return (
              null == r.returnAddress &&
                (r.returnAddress = this.m_sMailboxName),
              (r.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, r),
              this.WaitForMessage(o, r.message_id)
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
        (i.s_nNextMailboxNumber = 1),
          (0, r.gn)([n.ak], i.prototype, "OpenWebSocketToHost", null),
          (0, r.gn)([n.ak], i.prototype, "OnWebSocketOpen", null),
          (0, r.gn)([n.ak], i.prototype, "OnWebSocketClose", null),
          (0, r.gn)([n.ak], i.prototype, "WebSocketSend", null),
          (0, r.gn)([n.ak], i.prototype, "OnWebSocketMessage", null);
      },
      5867: (e, t, o) => {
        "use strict";
        var r, n, i, a;
        function s() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : r.Unknown;
        }
        o.d(t, {
          GC: () => R,
          Kf: () => c,
          Kg: () => w,
          LL: () => n,
          Op: () => s,
          Pw: () => b,
          QZ: () => i,
          Qu: () => C,
          XX: () => u,
          Z9: () => p,
          a0: () => M,
          l0: () => S,
          lx: () => k,
          nX: () => l,
          qA: () => r,
          qC: () => m,
          qR: () => v,
          wU: () => d,
          xY: () => _,
          zA: () => D,
          zq: () => a,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(r || (r = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(n || (n = {})),
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
          })(i || (i = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let l = 0,
          d = 0,
          c = -1;
        var h, u, p, m, v, g, _, y, b, S, f, k, R, w, M, D, C;
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
        })(h || (h = {})),
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
                "EnableControlBarClose"),
              (e[(e.EnableSteamUIButtons = 67108864)] = "EnableSteamUIButtons");
          })(p || (p = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(m || (m = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(g || (g = {})),
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
          })(w || (w = {})),
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
          })(M || (M = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(D || (D = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(C || (C = {}));
      },
      7074: (e, t, o) => {
        "use strict";
        var r, n, i, a, s, l, d;
        o.d(t, { Uk: () => r, ZP: () => i, sH: () => a, vS: () => s }),
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
              (e[(e.ActualTrackingSystemName_String = 1054)] =
                "ActualTrackingSystemName_String"),
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
              (e[(e.DashboardLinkSupport_Int32 = 2097)] =
                "DashboardLinkSupport_Int32"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
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
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
                "DriverProvidedIPDVisibility_Bool"),
              (e[(e.Prop_Driver_Reserved_01 = 2109)] =
                "Prop_Driver_Reserved_01"),
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
          })(r || (r = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.SecondaryClick = 1)] = "SecondaryClick"),
              (e[(e.PrimaryClick = 2)] = "PrimaryClick");
          })(n || (n = {})),
          (function (e) {
            (e[(e.k_EButton_System = 0)] = "k_EButton_System"),
              (e[(e.k_EButton_ApplicationMenu = 1)] =
                "k_EButton_ApplicationMenu"),
              (e[(e.k_EButton_Grip = 2)] = "k_EButton_Grip"),
              (e[(e.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
              (e[(e.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
              (e[(e.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
              (e[(e.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
              (e[(e.k_EButton_A = 7)] = "k_EButton_A"),
              (e[(e.k_EButton_ProximitySensor = 31)] =
                "k_EButton_ProximitySensor"),
              (e[(e.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
              (e[(e.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
              (e[(e.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
              (e[(e.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
              (e[(e.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
              (e[(e.k_EButton_SteamVR_Touchpad = 32)] =
                "k_EButton_SteamVR_Touchpad"),
              (e[(e.k_EButton_SteamVR_Trigger = 33)] =
                "k_EButton_SteamVR_Trigger"),
              (e[(e.k_EButton_Dashboard_Back = 2)] =
                "k_EButton_Dashboard_Back"),
              (e[(e.k_EButton_IndexController_A = 2)] =
                "k_EButton_IndexController_A"),
              (e[(e.k_EButton_IndexController_B = 1)] =
                "k_EButton_IndexController_B"),
              (e[(e.k_EButton_IndexController_JoyStick = 35)] =
                "k_EButton_IndexController_JoyStick"),
              (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
              (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
              (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
          })(i || (i = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(a || (a = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(l || (l = {})),
          (function (e) {
            (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
              (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
              (e[(e.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(d || (d = {}));
      },
      5928: (e, t, o) => {
        "use strict";
        o.d(t, { L: () => f });
        var r,
          n = o(655),
          i = o(7294),
          a = o(7056),
          s = o(3568),
          l = o(1569),
          d = o(9809),
          c = o(5211),
          h = o(2893),
          u = o(7062),
          p = o(2188),
          m = o(8242),
          v = o(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(r || (r = {}));
        class g extends i.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = i.createRef()),
              (this.m_nameRef = i.createRef()),
              (this.m_svgRef = i.createRef()),
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
                this.ComponentUpdated,
              ),
              this.props.source.touch &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/touch",
                  this.ComponentUpdated,
                ),
              this.props.source.value &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/value",
                  this.ComponentUpdated,
                ),
              ("joystick" != this.props.source.type &&
                "trackpad" != this.props.source.type) ||
                (this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/x",
                  this.ComponentUpdated,
                ),
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/y",
                  this.ComponentUpdated,
                )),
              this.props.source.force &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/force",
                  this.ComponentUpdated,
                );
          }
          UnregisterForSourceUpdates() {
            this.props.source.click &&
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/click",
              ),
              this.props.source.touch &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/touch",
                ),
              this.props.source.value &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/value",
                ),
              ("joystick" != this.props.source.type &&
                "trackpad" != this.props.source.type) ||
                (this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath,
                ),
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath,
                )),
              this.props.source.force &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/force",
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
              i.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                i.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                }),
              )
            );
          }
          renderBar(e, t, o) {
            let r = { width: String(100 * o) + "%" };
            return i.createElement(
              "div",
              { className: "TriggerBar " + t },
              i.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e),
              ),
              i.createElement(
                "div",
                { className: "TriggerBarBackground" },
                i.createElement("div", {
                  className: "TriggerBarContent",
                  style: r,
                }),
              ),
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
                n = this.props.side == r.Right,
                i = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new c.E9(0, i.top + i.height / 2);
              l.x = n ? a.left - 10 : a.right + 10;
              let d = n ? -20 : 20,
                h = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", h);
              let u = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
              t.setAttribute("points", u),
                o.setAttribute("cx", s.x + ""),
                o.setAttribute("cy", s.y + "");
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
              this.props.side == r.Left
                ? (e += " MenuLeftLine")
                : (e += " MenuRightLine"),
              this.IsEngaged() && (e += " MenuSVGVisible"),
              i.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                i.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  i.createElement(
                    "div",
                    { className: "Label Title", ref: this.m_nameRef },
                    d.I.LocalizeControllerString(
                      this.props.controllerType,
                      this.props.sourcePath,
                    ),
                  ),
                  this.renderHeaderVisualization(),
                ),
                this.renderBodyVisualization(),
                i.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
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
                      }),
                    ),
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
                  }),
                ),
              )
            );
          }
        }
        (0, n.gn)([a.ak], g.prototype, "ComponentUpdated", null),
          (0, n.gn)([a.ak], g.prototype, "UpdateSVGPath", null);
        class _ extends g {
          constructor(e) {
            super(e);
          }
        }
        class y extends g {
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
            return i.createElement(
              "div",
              { className: "TriggerVisualizerContainer" },
              this.props.source.value &&
                this.renderBar(
                  "#SourceInputMode_Pull",
                  "TriggerValue",
                  this.state.value,
                ),
              this.props.source.force &&
                this.renderBar(
                  "#SourceInputMode_Force",
                  "TriggerForce",
                  this.state.force,
                ),
            );
          }
        }
        class b extends g {
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
              i.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                i.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  i.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, s.Xx)("#SourceInputMode_Position"),
                  ),
                  i.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    i.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        i.createElement(
                          "div",
                          { style: e },
                          i.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            i.createElement("div", { className: t }),
                          ),
                        ),
                    ),
                  ),
                ),
                this.props.source.force &&
                  this.renderBar(
                    "#SourceInputMode_Force",
                    "TriggerForce",
                    this.state.force,
                  ),
              )
            );
          }
        }
        class S extends i.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = i.createRef()),
              (this.state = { imageScale: this.GetPointScale() });
          }
          get ControllerTypeInfo() {
            let e = d.I.GetDeviceInfo(this.props.devicePath);
            return d.I.GetControllerTypeInfo(e.controller_type);
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
            let r = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return i.createElement(_, {
                  key: r,
                  side: o,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return i.createElement(y, {
                  key: r,
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
                return i.createElement(b, {
                  key: r,
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
                return i.createElement(
                  "div",
                  { key: r },
                  "Need to add visualizer for ",
                  t.type,
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
                ? i.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    i.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    i.createElement(h.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              o = this.ControllerTypeInfo,
              n = 0,
              a = [];
            for (let e in o.input_source) {
              let t = o.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let r = this.EstimateSourceHeight(t);
              (n += r),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: r,
                });
            }
            let s = 8;
            n > 16 && (s = n / 2);
            let l = 0,
              d = a.sort((e, t) => e.order - t.order);
            for (let o of d) {
              l += o.height;
              let n = l > s ? r.Right : r.Left,
                i = this.renderSource(o.sSourcePath, o.inputSource, n);
              i && (n == r.Left ? e.push(i) : t.push(i));
            }
            return i.createElement(
              "div",
              { className: "ControllerVisualizer" },
              i.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e,
              ),
              this.renderImage(),
              i.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t,
              ),
            );
          }
        }
        (0, n.gn)([a.ak], S.prototype, "OnImageLoaded", null),
          (0, n.gn)([a.ak], S.prototype, "OnImageReflow", null);
        let f = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              (this.m_componentRegistrations = {}),
              (this.m_observeDisposer = null),
              this.m_mailbox.RegisterHandler(
                "update_component_states",
                this.OnUpdateComponentStates,
              ),
              this.m_mailbox
                .Init("controller_visualizer")
                .then(
                  () => (
                    this.UpdateDeviceInputStateSubscriptions(),
                    (this.m_observeDisposer = (0, p.N7)(
                      d.I,
                      "ConnectedDevices",
                      this.OnConnectedDevicesChanged,
                    )),
                    this.SetDefaultDeviceIfNecessary(),
                    null
                  ),
                ),
              (this.state = { devicePath: null });
          }
          componentWillUnmount() {
            this.m_observeDisposer && this.m_observeDisposer();
            for (let e of d.I.ConnectedDevices) {
              let t = {
                type: "cancel_input_state_updates",
                device_path: e.root_path,
                returnAddress: this.m_mailbox.name,
              };
              this.m_mailbox.SendMessage("input_server", t);
            }
          }
          UpdateDeviceInputStateSubscriptions() {
            for (let e of d.I.ConnectedDevices) {
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
            return d.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
            );
          }
          render() {
            let e,
              t = [],
              o = this.GetSortedDevices();
            if (!o)
              return i.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, s.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                i.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, s.Xx)("#TestController_NoController"),
                ),
              );
            for (let r of o)
              "TrackedDeviceClass_HMD" != r.class &&
                (r.root_path == this.state.devicePath && (e = r.serial_number),
                t.push({
                  value: r.root_path,
                  sLabel: (0, s.Xx)("#" + r.root_path),
                }));
            return i.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: i.createElement(m.U5, {
                  leftControls: [
                    i.createElement(v.hu, {
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
                i.createElement(S, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                }),
            );
          }
        };
        (0, n.gn)([a.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, n.gn)([a.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, n.gn)([u.Pi], f));
      },
      9671: (e, t, o) => {
        "use strict";
        o.d(t, { V: () => d });
        var r = o(655),
          n = o(7294),
          i = o(7056),
          a = o(3568),
          s = o(1569);
        class l extends n.Component {
          constructor(e) {
            if (
              (super(e),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init("legacy_debugger"),
              this.m_mailbox.RegisterHandler(
                "legacy_input_frame",
                this.OnLegacyInputFrame,
              ),
              VRHTML)
            ) {
              let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/legacy_debugger_pid",
                e,
              );
            }
            this.state = { currentState: null };
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/legacy_debugger_pid",
                0,
              );
          }
          OnLegacyInputFrame(e) {
            this.setState({ currentState: e });
          }
          renderController(e) {
            let t = [];
            if (
              (t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:",
                ),
              ),
              e.pressed)
            )
              for (let o of e.pressed)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o,
                  ),
                );
            else
              t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Touched:",
                ),
              ),
              e.touched)
            )
              for (let o of e.touched)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o,
                  ),
                );
            else
              t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Supported:",
                ),
              ),
              e.supported_buttons)
            )
              for (let o of e.supported_buttons)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o,
                  ),
                );
            else
              t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            t.push(
              n.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Axis:",
              ),
            );
            for (let o of e.axis)
              t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  o.x.toFixed(2),
                  " Y: ",
                  o.y.toFixed(2),
                ),
              );
            return t;
          }
          render() {
            return this.state.currentState
              ? n.createElement(
                  "div",
                  { className: "FlexRow" },
                  n.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    n.createElement("div", { className: "Label" }, "Left"),
                    this.renderController(this.state.currentState.left),
                  ),
                  n.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    n.createElement("div", { className: "Label" }, "Right"),
                    this.renderController(this.state.currentState.right),
                  ),
                  n.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    n.createElement("div", { className: "Label" }, "HMD"),
                    this.renderController(this.state.currentState.hmd),
                  ),
                )
              : n.createElement(
                  "div",
                  { className: "Label" },
                  (0, a.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, r.gn)([i.ak], l.prototype, "OnLegacyInputFrame", null);
        class d extends n.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return n.createElement(
              "div",
              { className: "FlexRowWithWrap" },
              n.createElement(
                "div",
                { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
                n.createElement(l, null),
              ),
            );
          }
        }
      },
      792: (e, t, o) => {
        "use strict";
        o.d(t, { C: () => l });
        var r = o(655),
          n = o(7056),
          i = o(2188),
          a = o(1628);
        class s {
          Init() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield this.Load(), (0, i.EH)(() => this.Save());
            });
          }
          Load() {
            var e, t, o, n, i;
            return (0, r.mG)(this, void 0, void 0, function* () {
              (this.m_bShowFloor =
                null !==
                  (e = a.G3.settings.get("/settings/steamvr/showFloor")) &&
                void 0 !== e &&
                e),
                (this.m_bShowFloorFar =
                  null !==
                    (t = a.G3.settings.get("/settings/steamvr/showFloorFar")) &&
                  void 0 !== t &&
                  t),
                (this.m_fBackgroundDomeRadius =
                  null !==
                    (o = a.G3.settings.get(
                      "/settings/steamvr/backgroundDomeRadius",
                    )) && void 0 !== o
                    ? o
                    : 20),
                (this.m_fBackgroundOffsetX =
                  null !==
                    (n = a.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetX",
                    )) && void 0 !== n
                    ? n
                    : 0),
                (this.m_fBackgroundOffsetZ =
                  null !==
                    (i = a.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetZ",
                    )) && void 0 !== i
                    ? i
                    : 0);
            });
          }
          Save() {
            return (0, r.mG)(this, void 0, void 0, function* () {});
          }
        }
        (0, r.gn)([i.LO], s.prototype, "m_bShowFloor", void 0),
          (0, r.gn)([i.LO], s.prototype, "m_bShowFloorFar", void 0),
          (0, r.gn)([i.LO], s.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, r.gn)([i.LO], s.prototype, "m_fBackgroundOffsetX", void 0),
          (0, r.gn)([i.LO], s.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, r.gn)([n.ak], s.prototype, "Load", null),
          (0, r.gn)([n.ak], s.prototype, "Save", null);
        const l = new s();
        window.ConstructStore = l;
      },
      5328: (e, t, o) => {
        "use strict";
        o.d(t, { O: () => d });
        var r = o(655),
          n = o(7056),
          i = o(2188),
          a = o(2477),
          s = o(2758);
        class l {
          constructor() {
            this.m_mapActiveDashboardPopupRequests = new Map();
          }
          GetActiveDashboardPopups() {
            return Array.from(this.m_mapActiveDashboardPopupRequests.values());
          }
          Init() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, i.EH)(() => this.SaveSessionDevData()),
                a.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) =>
                  (0, r.mG)(this, void 0, void 0, function* () {
                    this.m_mapActiveDashboardPopupRequests.set(
                      e.dashboard_popup_request_id,
                      e,
                    );
                  }),
                ),
                a.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
                  this.m_mapActiveDashboardPopupRequests.delete(
                    e.dashboard_popup_request_id,
                  );
                }),
                s.U.RegisterForOverlayDestroyed((e) => {
                  [...this.m_mapActiveDashboardPopupRequests.values()]
                    .filter((t) => t.popup_overlay_key === e.sOverlayKey)
                    .forEach((e) =>
                      this.m_mapActiveDashboardPopupRequests.delete(
                        e.dashboard_popup_request_id,
                      ),
                    );
                });
            });
          }
          LoadSessionDevData() {
            var e, t;
            return (0, r.mG)(this, void 0, void 0, function* () {
              const o = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              for (const e of null !== (t = o.m_rgDashboardPopups) &&
              void 0 !== t
                ? t
                : [])
                this.m_mapActiveDashboardPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              const e = {
                m_rgDashboardPopups: Array.from(
                  this.m_mapActiveDashboardPopupRequests.values(),
                ),
              };
              sessionStorage.setItem(
                l.k_strSessionStorageKey,
                JSON.stringify(e),
              );
            });
          }
        }
        (l.k_strSessionStorageKey = "DashboardPopupStoreSessionStorage"),
          (0, r.gn)(
            [i.LO],
            l.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0,
          ),
          (0, r.gn)([n.ak], l.prototype, "LoadSessionDevData", null),
          (0, r.gn)([n.ak], l.prototype, "SaveSessionDevData", null);
        const d = new l();
        window.DashboardPopupStore = d;
      },
      9626: (e, t, o) => {
        "use strict";
        o.d(t, { B: () => m, J: () => u });
        var r = o(655),
          n = o(1569),
          i = o(7056),
          a = o(2188),
          s = o(8178),
          l = o(1628),
          d = o(7176),
          c = o(7373),
          h = o(2758);
        const u = ["system.dashboard.quicklaunch", void 0].filter(Boolean);
        class p {
          constructor() {
            (this.m_bDarkMode = !1),
              (this.m_eTheaterStereo = n.Ko.Mono),
              (this.m_eIncognitoMode = n.Qu.Unavailable),
              (this.m_mapOverlayState = new Map()),
              (this.m_setOverlaysViewedThisSession = new Set()),
              (this.m_mapActiveDashboardPopupRequests = new Map()),
              (this.m_mapTabIdForSummonKey = new Map()),
              (this.m_mapSummonKeyForTabId = new Map()),
              (this.m_unNextTabId = 1);
          }
          Init() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, a.EH)(() => this.SaveSessionDevData()),
                (0, a.EH)(this.updateBodyClasses);
            });
          }
          LoadSessionDevData() {
            var e, t, o, n, i;
            return (0, r.mG)(this, void 0, void 0, function* () {
              const r = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(p.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bShowLegacyBar =
                null !== (t = r.m_bShowLegacyBar) && void 0 !== t && t),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (o = r.m_fVRGamepadUI_MetersPerPixel) && void 0 !== o
                    ? o
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (n = r.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== n
                    ? n
                    : 1.17);
              for (const e of null !== (i = r.m_rgDashboardPopups) &&
              void 0 !== i
                ? i
                : [])
                this.m_mapActiveDashboardPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              const e = {
                m_bShowLegacyBar: this.m_bShowLegacyBar,
                m_rgDashboardPopups: Array.from(
                  this.m_mapActiveDashboardPopupRequests.values(),
                ),
                m_fVRGamepadUI_MetersPerPixel:
                  this.m_fVRGamepadUI_MetersPerPixel,
                m_fVRGamepadUI_GlobalActiveOverlayScale:
                  this.m_fVRGamepadUI_GlobalActiveOverlayScale,
              };
              sessionStorage.setItem(
                p.k_strSessionStorageKey,
                JSON.stringify(e),
              );
            });
          }
          GetTabIdForSummonKey(e) {
            if (!this.m_mapTabIdForSummonKey.has(e)) {
              const t = this.m_unNextTabId;
              this.m_unNextTabId++,
                this.m_mapTabIdForSummonKey.set(e, t),
                this.m_mapSummonKeyForTabId.set(t, e);
            }
            return this.m_mapTabIdForSummonKey.get(e);
          }
          GetSummonKeyForTabId(e) {
            return this.m_mapSummonKeyForTabId.get(e);
          }
          get isTheaterMode() {
            for (const e of this.m_mapOverlayState.values())
              if (e.dockLocation == s.RA.Theater) return !0;
            return !1;
          }
          get eTheaterScreen() {
            return l.G3.settings.get(d.ZO);
          }
          ToggleTheaterCurvature() {
            const e =
              this.eTheaterScreen == s.Y3.Curved ? s.Y3.Flat : s.Y3.Curved;
            l.G3.SetSettingsValue(d.ZO, e.toString());
          }
          ToggleTheaterStereo() {
            const e =
              this.m_eTheaterStereo == n.Ko.Mono ? n.Ko.Parallel : n.Ko.Mono;
            this.m_eTheaterStereo = e;
          }
          HideTheaterOverlay(e = s.RA.Dashboard) {
            for (const t of this.m_mapOverlayState.values())
              t.dockLocation == s.RA.Theater && (t.dockLocation = e);
          }
          get isDarkMode() {
            return this.m_bDarkMode && this.isTheaterMode;
          }
          get ControlBarTint() {
            return this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null;
          }
          get isGroupMode() {
            return !1;
          }
          get isVRGamepadUI() {
            return (
              !l.G3.settings.get(d.YL) ||
              h.U.BOverlayExists(d.T2) ||
              h.U.BOverlayExists(d.BZ)
            );
          }
          get isVRGamepadUIViaGamescope() {
            return !1;
          }
          get currentDashboardPosition() {
            return this.isVRGamepadUI ? c._.Standard : l.G3.settings.get(d.o1);
          }
          updateBodyClasses() {
            this.isVRGamepadUI
              ? window.document.body.classList.add("VRGamepadUI")
              : window.document.body.classList.remove("VRGamepadUI");
          }
        }
        (p.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
          (0, r.gn)([a.LO], p.prototype, "m_bShowLegacyBar", void 0),
          (0, r.gn)([a.LO], p.prototype, "m_bDarkMode", void 0),
          (0, r.gn)([a.LO], p.prototype, "m_eTheaterStereo", void 0),
          (0, r.gn)([a.LO], p.prototype, "m_eIncognitoMode", void 0),
          (0, r.gn)([a.LO], p.prototype, "m_mapOverlayState", void 0),
          (0, r.gn)(
            [a.LO],
            p.prototype,
            "m_setOverlaysViewedThisSession",
            void 0,
          ),
          (0, r.gn)(
            [a.LO],
            p.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0,
          ),
          (0, r.gn)(
            [a.LO],
            p.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, r.gn)(
            [a.LO],
            p.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, r.gn)([i.ak], p.prototype, "LoadSessionDevData", null),
          (0, r.gn)([i.ak], p.prototype, "SaveSessionDevData", null),
          (0, r.gn)([a.Fl], p.prototype, "eTheaterScreen", null),
          (0, r.gn)([a.Fl], p.prototype, "isVRGamepadUI", null),
          (0, r.gn)([a.Fl], p.prototype, "isVRGamepadUIViaGamescope", null),
          (0, r.gn)([i.ak], p.prototype, "updateBodyClasses", null);
        const m = new p();
        window.DashboardStore = m;
      },
      2758: (e, t, o) => {
        "use strict";
        o.d(t, { U: () => s });
        var r = o(655),
          n = o(2188),
          i = o(4687);
        class a {
          constructor() {
            (this.m_mapAllOverlays = new Map()),
              (this.m_rgOverlayCreatedCallbacks = new i.p()),
              (this.m_rgOverlayDestroyedCallbacks = new i.p());
          }
          Init() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              VRHTML.RegisterForAllOverlayInfo(this.OnAllOverlayInfo);
            });
          }
          BOverlayExists(e) {
            return this.m_mapAllOverlays.has(e);
          }
          GetOverlayInfo(e) {
            return this.m_mapAllOverlays.get(e);
          }
          GetOverlays() {
            return this.m_mapAllOverlays;
          }
          RegisterForOverlayCreated(e) {
            return this.m_rgOverlayCreatedCallbacks.Register(e);
          }
          RegisterForOverlayDestroyed(e) {
            return this.m_rgOverlayDestroyedCallbacks.Register(e);
          }
          OnAllOverlayInfo(e) {
            const t = new Set(this.m_mapAllOverlays.keys()),
              o = [],
              r = [];
            for (const r of e)
              (null == r ? void 0 : r.sOverlayKey) &&
                (this.m_mapAllOverlays.has(r.sOverlayKey) || o.push(r),
                this.m_mapAllOverlays.set(r.sOverlayKey, r),
                t.delete(r.sOverlayKey));
            for (const e of t)
              r.push(this.m_mapAllOverlays.get(e)),
                this.m_mapAllOverlays.delete(e);
            o.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
              r.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
          }
        }
        (0, r.gn)([n.LO], a.prototype, "m_mapAllOverlays", void 0),
          (0, r.gn)([n.aD.bound], a.prototype, "OnAllOverlayInfo", null);
        const s = new a();
        window.OverlayStore = s;
      },
      7726: (e, t, o) => {
        "use strict";
        o.d(t, { A: () => r, X: () => l });
        var r,
          n = o(655),
          i = o(7294),
          a = o(7056),
          s = o(1569);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(r || (r = {}));
        class l extends i.Component {
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
              null === s.Co || void 0 === s.Co
                ? void 0
                : s.Co.RegisterForBatteryStateChangedEvents(
                    this.OnBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged,
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceEvents(this.OnDeviceEvent)),
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
            if (!s.Co) return;
            const t = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceProvidesBatteryStatus_Bool,
              ),
              o = s.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let n = !1;
            if (t) {
              const t =
                null !==
                  (e = s.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    s.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (n = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = t)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      t + l.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - l.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            let i = l.GetBatteryIcon(
                t,
                n,
                this.batteryLevelStable,
                r.HorizontalPips,
              ),
              a = this.GetRoleIcon(o);
            (i == this.state.batteryIconPath && a == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: i, roleIconPath: a });
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
          static GetBatteryIcon(e, t, o, n) {
            if (!e) return null;
            const i =
              n == r.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? o < 0.15
                ? i + "_charging_red.png"
                : i + "_charging.png"
              : 0 == o
              ? null
              : o < 0.15
              ? i + "_low.png"
              : o < 0.3
              ? i + "_battery_1.png"
              : o < 0.6
              ? i + "_battery_2.png"
              : o < 0.9
              ? i + "_battery_3.png"
              : i + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, o) {
            e == s.XX.Activated &&
              o == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return i.createElement(
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
              i.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                i.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  i.createElement(
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
                    i.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    }),
                  ),
                  i.createElement(
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
                    i.createElement("img", {
                      className: "ControllerBattery",
                      src: this.state.batteryIconPath,
                    }),
                  ),
                ),
              ),
            );
          }
        }
        (l.kBatteryLevelHysteresis = 0.02),
          (0, n.gn)([a.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, n.gn)([a.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, n.gn)([a.ak], l.prototype, "OnDeviceEvent", null);
      },
      7373: (e, t, o) => {
        "use strict";
        o.d(t, { g: () => de, _: () => oe });
        var r,
          n = o(655),
          i = o(1569),
          a = o(7056),
          s = o(2188),
          l = o(7294),
          d = o(1509),
          c = o(5177),
          h = o(4979),
          u = o(3107),
          p = o(7176),
          m = o(3568),
          v = o(8495),
          g = o(7008),
          _ = o(9942),
          y = o(1628),
          b = o(7062),
          S = o(7726),
          f = o(8178),
          k = o(6459),
          R = o(9347),
          w = o(2743),
          M = o(7095),
          D = o(8980);
        let C = (r = class extends l.Component {
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
                "library_600x900.jpg",
              );
            t !== this.props.imageUrl &&
              (e.push(t),
              e.push(
                this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"),
              )),
              e.push(this.props.imageUrl),
              this.props.fallbackImageUrl &&
                e.push(this.props.fallbackImageUrl),
              (this.m_imageSources = e.filter(
                (e) => !r.s_failedImages.includes(e),
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
              r.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
                  t,
                )),
              l.createElement(
                "div",
                {
                  className: (0, D.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                l.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title,
                ),
                this.props.children && this.props.children,
              )
            );
          }
        });
        (C.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (C.s_failedImages = []),
          (0, n.gn)([a.ak], C.prototype, "loadNextImage", null),
          (0, n.gn)([a.ak], C.prototype, "onLoad", null),
          (0, n.gn)([a.ak], C.prototype, "onError", null),
          (C = r = (0, n.gn)([b.Pi], C));
        var T = o(8242);
        class V extends l.Component {
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
            const e = _.H.Instance.SceneAppKey;
            M.f.OpenDeepLink(M.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = _.H.Instance.SceneAppKey;
            w.Ux.OpenDeepLink(w.Yw.Name, e);
          }
          render() {
            var e;
            const t = _.H.Instance.SceneAppKey,
              o = _.H.Instance.SceneAppName,
              r = _.H.Instance.SceneApplicationState,
              n = _.H.Instance.SceneAppIsHome,
              a = y.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = y.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              d = y.G3.apps && y.G3.apps.find((e) => e.key == t);
            let h = !1;
            switch (r) {
              case i.xY.Quitting:
              case i.xY.Starting:
              case i.xY.Waiting:
                h = !0;
            }
            const u = ((e) => {
                if (null == e) return "";
                let t = e.image_path;
                return (
                  t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                );
              })(d),
              v = u.includes("header.jpg"),
              g = u.replace(/header\.jpg$/, "library_hero.jpg");
            return l.createElement(
              k.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: p.PF,
                scrollable: !1,
              },
              v &&
                l.createElement("div", {
                  className: "HeroBackground",
                  style: { backgroundImage: `url('${g}')` },
                }),
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(C, { appkey: t, title: o, imageUrl: u }),
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, o),
                l.createElement(
                  c.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  n
                    ? (0, m.Xx)("#Return_To_Home")
                    : (0, m.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    T.ls,
                    {
                      icon: T.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, m.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    T.ls,
                    { icon: T.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, m.Xx)("#App_Video_Settings"),
                  ),
                a &&
                  l.createElement(
                    c.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    n ? (0, m.Xx)("#Exit_Home") : (0, m.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, n.gn)([a.ak], V.prototype, "onExitApp", null),
          (0, n.gn)([a.ak], V.prototype, "onReturnToGame", null),
          (0, n.gn)(
            [a.ak],
            V.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, n.gn)([a.ak], V.prototype, "onOpenAppVideoSettings", null);
        var E,
          I = o(9669),
          x = o.n(I),
          P = o(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(E || (E = {}));
        const L = (e) =>
          l.createElement(
            "div",
            {
              className: (0, D.LJ)("ButtonContainer", E[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              c.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == E.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class O extends l.Component {
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
              this.onAnimationFrame,
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
            const r = o.children;
            if (!r || 0 == r.length) return;
            const n =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              i = r[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : o.scrollLeft,
              s = i.getBoundingClientRect().left + o.scrollLeft,
              l = i.clientWidth,
              d = o.clientWidth,
              c = Math.floor(d / l) - 1,
              h = Math.round((a - s + n + 1) / l) + c * e - 0.4999,
              u = h > 0 ? h * l + s - n : 0;
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
                className: (0, D.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames,
                ),
              },
              l.createElement(
                P.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: P.I.Horizontal,
                  onScroll: this.onScroll,
                },
                this.props.children,
              ),
              (!1 === this.state.bScrolledToStart ||
                !1 === this.state.bScrolledToEnd) &&
                l.createElement(
                  "div",
                  { className: "PaginationButtons" },
                  null !== this.state.bScrolledToStart &&
                    l.createElement(L, {
                      side: E.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(L, {
                      side: E.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, n.gn)([a.ZP], O.prototype, "onAnimationFrame", null),
          (0, n.gn)([a.ZP], O.prototype, "onScroll", null),
          (0, n.gn)([a.ZP], O.prototype, "onLeftButtonClick", null),
          (0, n.gn)([a.ZP], O.prototype, "onRightButtonClick", null);
        let B = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new D.cB()),
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
                  className: (0, D.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      y.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents],
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
                  l.createElement(C, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, n.gn)([a.ZP], B.prototype, "buttonMouseEnter", null),
          (0, n.gn)([a.ZP], B.prototype, "buttonMouseLeave", null),
          (0, n.gn)([a.ZP], B.prototype, "onParentScrollStop", null),
          (B = (0, n.gn)([b.Pi], B));
        const H = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          A = (e) => {
            var t;
            const o = !!e.loading,
              r = null !== (t = e.apps) && void 0 !== t ? t : [];
            let n = "AppCarousel";
            return (
              e.className && (n += " " + e.className),
              (n += " NoAnimations"),
              l.createElement(
                O,
                { additionalClassNames: n, paginationAlignmentOffset: -20 },
                o &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(H, null),
                    l.createElement(H, null),
                    l.createElement(H, null),
                    l.createElement(H, null),
                  ),
                !o &&
                  r.map((e) =>
                    l.createElement(B, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var N;
        class F extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            x()
              .get(
                "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20",
              )
              .then((e) => e.data)
              .then((e) => this.setState({ storeData: e }));
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
                let r = t.shift();
                o.add(r.appid),
                  e.push(
                    l.createElement(
                      c.z,
                      {
                        key: `appid_${r.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        enabled: !1,
                      },
                      l.createElement("img", { src: r.logo }),
                    ),
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
                  (0, m.Xx)("#WelcomeToSteamVR"),
                ),
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, m.Xx)("#LaunchSteamToFindGames"),
                ),
              ),
            );
          }
        }
        let U = (N = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new i.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, o) {
            var r, n;
            v.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + o,
              e.key,
            ),
              null === (n = (r = this.props).onGameLaunched) ||
                void 0 === n ||
                n.call(r, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != y.G3.apps)
              for (let t of y.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  N.s_setBlacklistedAppkeys.has(t.key) ||
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
              let r = o;
              const n = o < N.TOP_ROW_LENGTH;
              return (
                n || (r -= N.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, n, r),
                  children: l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", { className: "PlayIconFade" }),
                    l.createElement("img", {
                      className: "PlayIcon",
                      src: "/dashboard/images/icons/svr_play.svg",
                    }),
                  ),
                }
              );
            });
          }
          onRoomSetup() {
            VRHTML.VRDashboardManager.HideDashboard("RoomSetup"),
              this.m_mailbox.SendMessage("driver_hmd", { type: "room_setup" });
          }
          render() {
            let e,
              t = this.makeAppButtonList();
            const o =
              0 == t.length ||
              y.G3.settings.get("/settings/dashboard/forceWelcomeScreen");
            if (o) e = l.createElement(F, null);
            else {
              let o = t.slice(0, N.TOP_ROW_LENGTH),
                r = t.slice(N.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                l.createElement(A, { className: "TopRow", apps: o }),
                l.createElement(A, { className: "BottomRow", apps: r }),
              );
            }
            return l.createElement(
              k.lL,
              {
                visible: this.props.visible,
                scrollable: !o,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: p.po,
              },
              e,
            );
          }
        });
        (U.TOP_ROW_LENGTH = 4),
          (U.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            p.W4,
            p.jW,
          ])),
          (0, n.gn)([a.ak], U.prototype, "onRoomSetup", null),
          (U = N = (0, n.gn)([b.Pi], U));
        var G,
          W = o(16),
          z = o(421),
          K = o(6063),
          q = o(3619),
          X = o(4138),
          j = (o(9462), o(9626)),
          Z = o(792),
          Q = o(6346),
          Y = o(6821),
          J = o(2477);
        function $(e) {
          const { debugHostLocation: t, onGrabStart: o, onGrabEnd: r } = e,
            n = j.B.isVRGamepadUI,
            a = (0, D.aB)();
          if (!a) return null;
          const s =
              null != (null == a ? void 0 : a.overlayKey) &&
              "" != (null == a ? void 0 : a.overlayKey),
            d = !!(a.keyboardFlags & i.vS.Minimal),
            c = n ? 2 : 1.5,
            h = n ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            u = n
              ? d
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : d
              ? { y: -0.73, z: 0.05 }
              : { y: -0.87, z: 0.05 };
          return l.createElement(
            i.wx,
            { translation: h },
            l.createElement(
              i.wx,
              { scale: { y: c, x: c } },
              l.createElement(i.sl, { mountedId: (0, i.iN)(p.GN, p.gC) }),
              l.createElement(i.sl, { mountedId: (0, i.iN)(p.GN, p.jw) }),
            ),
            !1,
            s &&
              l.createElement(
                i.wx,
                { translation: u },
                l.createElement(K.J, {
                  tint: j.B.ControlBarTint,
                  onStartMove: o,
                  onEndMove: r,
                }),
              ),
          );
        }
        function ee(e) {
          const t = (0, D.aB)();
          if (!t) return null;
          const o = de.k_nControlBarPitch;
          return (
            t.visible &&
            !t.dockedInDashboard &&
            l.createElement(
              i.eK,
              { bContinuousRelatch: !1 },
              l.createElement(
                i.wx,
                {
                  translation: {
                    x: 0,
                    y: de.getDashboardVerticalPosition(),
                    z: 1 * -de.getDashboardDistance(),
                  },
                  scale: de.getDashboardScale(),
                },
                l.createElement(
                  i.wx,
                  { translation: de.getControlBarTranslation() },
                  l.createElement(
                    z.Z,
                    null,
                    l.createElement(
                      i.wx,
                      { rotation: { x: o }, curvature_pitch: o },
                      l.createElement($, { debugHostLocation: "Undocked" }),
                    ),
                  ),
                ),
              ),
            )
          );
        }
        !(function (e) {
          (e[(e.ExitVR = 0)] = "ExitVR"),
            (e[(e.Shutdown = 1)] = "Shutdown"),
            (e[(e.ToggleRoomView = 2)] = "ToggleRoomView"),
            (e[(e.Recenter = 3)] = "Recenter"),
            (e[(e.ToggleVideoStream = 4)] = "ToggleVideoStream"),
            (e[(e.IncognitoMode = 5)] = "IncognitoMode"),
            (e[(e.RoomSetup = 6)] = "RoomSetup"),
            (e[(e.RoomSetupInstant = 7)] = "RoomSetupInstant"),
            (e[(e.Volume = 8)] = "Volume"),
            (e[(e.ToggleDarkMode = 9)] = "ToggleDarkMode"),
            (e[(e.UserGuide = 10)] = "UserGuide");
        })(G || (G = {}));
        var te,
          oe,
          re,
          ne = o(138),
          ie = o(4614),
          ae = o(2758);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Standard = 3)] = "Standard");
        })(oe || (oe = {}));
        class se extends l.Component {
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
        function le(e) {
          return "steamlink_openvr-overlay" == e || e.startsWith(p.wX);
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(re || (re = {}));
        let de = (te = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new i.Nv()),
              (this.m_timeoutPopoverMenuHide = 0),
              (this.m_refPopoverMenu = l.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = l.createRef()),
              (this.m_refDesktopTray = l.createRef()),
              (this.m_refOverlayTransform = l.createRef()),
              (this.m_refVolumeTray = l.createRef()),
              (this.m_activeOverlayThatVanished = void 0),
              (this.m_bUserManuallySwitchToOldLibrary = !1),
              (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
              (this.m_roomViewChangedEventHandle = null),
              (this.m_linkStreamActiveEventHandle = null),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              (this.m_keyboardVisibilityChangedEventHandle = null),
              (this.m_miscEventHandles = []),
              (this.m_eSceneApplicationState = i.xY.None),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bMuted: !1,
                bGrabbed: !1,
                sLastShownAppKey: "",
                bStreamVideo: !1,
                eShowPopoverMenu: re.None,
                setForcingBoundsVisible: {},
                mapWindows: new Map(),
                desktopViewDebugInfo: {
                  inputFrameTime: 0,
                  mapOverlayFrameTimes: new Map(),
                },
                bWindowViewEnabled: !1,
                bPlacementModeActive: !1,
                bLinkStreamActive: !1,
                bKeyboardVisible: !1,
                mapPortals: new Map(),
              }),
              (window.setDashboardScale = (e) => (te.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (te.s_dashboardUserDistance = e)),
              y.G3.Init(!1),
              i.hz.getInstance(),
              this.m_mailbox.Init(te.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  te.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "show_dashboard_requested",
                    (e) => this.onShowDashboardRequested(e, !0),
                  ),
                  this.m_mailbox.RegisterHandler(
                    "switch_dashboard_overlay_requested",
                    (e) => this.onShowDashboardRequested(e, !1),
                  ),
                  this.m_mailbox.RegisterHandler(
                    "dock_overlay_requested",
                    (e) => this.onDockOverlayRequested(e),
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_theater_mode",
                    this.onHideTheaterMode,
                  ),
                  this.m_mailbox.RegisterHandler("toggle_theater_stereo", () =>
                    j.B.ToggleTheaterStereo(),
                  );
              }),
              J.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = j.B.GetSummonKeyForTabId(e);
                  if (
                    !this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab",
                    )
                  )
                    throw new Error("Failed to switch to overlay: " + t);
                },
              ),
              J.Q.SteamVR.SetImplementation(
                "DashboardActionInvoked",
                ({ action_id: e, toggle_value: t }) => {
                  switch (e) {
                    case G.ExitVR:
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitOpenVR();
                      break;
                    case G.Shutdown:
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.ShutdownSystem();
                      break;
                    case G.RoomSetup:
                      this.onRoomSetupClick(!1);
                      break;
                    case G.RoomSetupInstant:
                      this.onRoomSetupClick(!0);
                      break;
                    case G.ToggleRoomView:
                      this.onToggleRoomView(t);
                      break;
                    case G.Recenter:
                      this.onRecenterClick();
                      break;
                    case G.ToggleVideoStream:
                    case G.IncognitoMode:
                      break;
                    case G.ToggleDarkMode:
                      j.B.m_bDarkMode = !j.B.isDarkMode;
                      break;
                    case G.UserGuide:
                      this.onUserGuideClick();
                  }
                },
              );
          }
          componentDidMount() {
            (window.Dashboard = this),
              (this.m_roomViewChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRCompositor.RegisterForRoomViewChangedEvents(
                      this.onRoomViewChanged,
                    )),
              (this.m_linkStreamActiveEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForLinkStreamActiveEvents(
                      this.onLinkStreamActiveEvents,
                    )),
              (this.m_dashboardThumbnailsChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForOverlayThumbnailsChanged(() =>
                      this.forceUpdate(),
                    )),
              (this.m_keyboardVisibilityChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForKeyboardVisibilityChangedEvents(
                      this.onKeyboardVisibilityChanged,
                    ));
            const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              t =
                e == i.a0.AppLaunch_Unknown ||
                e == i.a0.AppLaunch_Steam ||
                e == i.a0.Unknown,
              o = y.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              r = y.G3.settings.get("/settings/steamvr/enableHomeApp"),
              n = y.G3.settings.get(p.y3);
            ((t || (!o && r)) && !n) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != n ? n : ""),
                500,
              )),
              (this.m_appStateChangedAutorunDisposer = (0, s.EH)(() => {
                var e;
                const t = _.H.Instance.SceneApplicationState,
                  o = t != i.xY.None;
                if (o && this.m_eSceneApplicationState == i.xY.None)
                  j.B.HideTheaterOverlay();
                else if (
                  !o &&
                  this.m_eSceneApplicationState != i.xY.None &&
                  !j.B.isTheaterMode &&
                  null !==
                    (e = y.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of j.B.m_mapOverlayState)
                    if (e.startsWith(p.wX)) {
                      this.setDockLocation(e, t, f.RA.Theater);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(p.PF) &&
                    !o &&
                    this.switchToHomeOverlay();
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                },
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            let o = !1;
            t.bShown !== this.state.bShown &&
              u.G.Instance.playSound(
                this.state.bShown ? u.y.DashboardOpen : u.y.DashboardClose,
              ),
              this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e, t, o, r;
            const n = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(me),
              i = this.getActiveOverlaySummonKey(),
              a = ne.l.BHasMutualCapability(
                ie.R
                  .k_SteamVRMutualCapability_SupportForDashboardTabsInDashboardMenu,
              ),
              s = new Q.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                o = j.B.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == p.gB) continue;
              const r = new Q.D3();
              r.set_tab_id(o);
              const n = this.shouldShowOverlayTab(t, !0),
                l = a && j.J.includes(t.summon_overlay_key),
                d = j.B.m_setOverlaysViewedThisSession.has(
                  t.summon_overlay_key,
                );
              r.set_visible_in_dashboard_menu(n && l),
                r.set_visible_in_dashboard_bar(n && (!l || d)),
                t.summon_overlay_key == p.T2
                  ? r.set_display_name((0, m.Xx)("#Steam"))
                  : r.set_display_name(t.tab_name);
              const c = new Q.I_();
              switch (t.summon_overlay_key) {
                case p.T2:
                  c.set_enum(Q.mw.k_EVRDashboardTabIcon_Steam);
                  break;
                case p.Xl:
                  c.set_enum(Q.mw.k_EVRDashboardTabIcon_DesktopDisplay);
                  break;
                case p.A4:
                  c.set_enum(Q.mw.k_EVRDashboardTabIcon_Cog);
                  break;
                case p.PF:
                  if (
                    (c.set_enum(Q.mw.k_EVRDashboardTabIcon_RunningGame),
                    _.H.Instance.SceneAppKey.startsWith(p.I8))
                  ) {
                    const e = Number.parseInt(
                      _.H.Instance.SceneAppKey.substring(p.I8.length),
                    );
                    Number.isInteger(e) && c.set_appid(e);
                  }
                  break;
                default:
                  c.set_overlay(t.summon_overlay_key),
                    c.set_enum(Q.mw.k_EVRDashboardTabIcon_Unknown);
              }
              r.set_icon(c),
                s.add_tabs(r),
                i == t.summon_overlay_key && s.set_selected_tab_id(o),
                p.A4 == t.summon_overlay_key && s.set_vr_settings_tab_id(o),
                t.summon_overlay_key == p.T2 && s.set_vr_steam_tab_id(o);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (o = this.m_refDesktopView.current) ||
                void 0 === o ||
                o.state.desktopIndices.forEach((t) => {
                  var o;
                  const r = `${p.r4}.${t}`,
                    n = j.B.GetTabIdForSummonKey(r),
                    a = new Q.D3();
                  a.set_tab_id(n),
                    a.set_display_name(
                      e > 1
                        ? (0, m.Xx)("#Desktop_X", t)
                        : (0, m.Xx)("#Desktop"),
                    ),
                    a.set_visible_in_dashboard_bar(!0);
                  const l = new Q.I_();
                  l.set_enum(Q.mw.k_EVRDashboardTabIcon_DesktopDisplay),
                    a.set_icon(l),
                    s.add_tabs(a),
                    (null == i ? void 0 : i.startsWith(p.gB)) &&
                      (null === (o = this.m_refDesktopView.current) ||
                      void 0 === o
                        ? void 0
                        : o.currentDesktopIndex) == t &&
                      s.set_selected_tab_id(n);
                });
            }
            for (const e of n) {
              if (!e.overlay_key) continue;
              const t = j.B.GetTabIdForSummonKey(e.overlay_key),
                o = new Q.D3();
              o.set_tab_id(t),
                o.set_display_name(e.title),
                o.set_visible_in_dashboard_bar(!0);
              const n = new Q.I_();
              n.set_enum(Q.mw.k_EVRDashboardTabIcon_DesktopWindow),
                n.set_hwnd(Number.parseInt(e.hwnd)),
                o.set_icon(n),
                s.add_tabs(o),
                (null == i ? void 0 : i.startsWith(p.gB)) &&
                  (null === (r = this.m_refDesktopView.current) || void 0 === r
                    ? void 0
                    : r.sCurrentOverlayKey) == e.overlay_key &&
                  s.set_selected_tab_id(t);
            }
            s.tabs().sort(pe), (0, Y.W)(s);
            const l = new Q.yt();
            l.add_actions(
              Q.z3.fromObject({
                action_id: G.UserGuide,
                display_name: "User Guide",
                visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                  G.UserGuide,
                ),
                invocation: Q.w7.k_EVRDashboardActionInvocation_Trigger,
                icon: { enum: Q.Cj.k_EVRDashboardActionIcon_Unknown },
              }),
            ),
              l.add_actions(
                Q.z3.fromObject({
                  action_id: G.RoomSetupInstant,
                  display_name: "Room Setup (Instant)",
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    G.RoomSetupInstant,
                  ),
                  invocation: Q.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: {
                    enum: Q.Cj.k_EVRDashboardActionIcon_RoomSetupInstant,
                  },
                }),
              ),
              l.add_actions(
                Q.z3.fromObject({
                  action_id: G.RoomSetup,
                  display_name: (0, m.Xx)("#RoomSetup"),
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    G.RoomSetup,
                  ),
                  invocation: Q.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: Q.Cj.k_EVRDashboardActionIcon_RoomSetup },
                }),
              ),
              l.add_actions(
                Q.z3.fromObject({
                  action_id: G.ExitVR,
                  display_name: (0, m.Xx)("#PowerMenuExitVR"),
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    G.ExitVR,
                  ),
                  invocation: Q.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: Q.Cj.k_EVRDashboardActionIcon_ExitVR },
                }),
              ),
              l.add_actions(
                Q.z3.fromObject({
                  action_id: G.Shutdown,
                  display_name: (0, m.Xx)("#PowerMenuShutdown"),
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    G.Shutdown,
                  ),
                  invocation: Q.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: Q.Cj.k_EVRDashboardActionIcon_Shutdown },
                }),
              ),
              l.add_actions(
                Q.z3.fromObject({
                  action_id: G.ToggleRoomView,
                  display_name: (0, m.Xx)("#Toggle_Room_View"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    G.ToggleRoomView,
                  ),
                  invocation: Q.w7.k_EVRDashboardActionInvocation_Toggle,
                  active:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                  enabled:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                  icon: { enum: Q.Cj.k_EVRDashboardActionIcon_RoomViewOff },
                  icon_active: {
                    enum: Q.Cj.k_EVRDashboardActionIcon_RoomViewOn,
                  },
                }),
              ),
              l.add_actions(
                Q.z3.fromObject({
                  action_id: G.Recenter,
                  display_name: (0, m.Xx)("#Button_Recenter"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    G.Recenter,
                  ),
                  invocation: Q.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: Q.Cj.k_EVRDashboardActionIcon_Recenter },
                }),
              ),
              ne.l.BHasMutualCapability(
                ie.R
                  .k_SteamVRMutualCapability_SupportForActionSpecialInvocation_Volume,
              ) &&
                l.add_actions(
                  Q.z3.fromObject({
                    action_id: G.Volume,
                    invocation: Q.w7.k_EVRDashboardActionInvocation_Special,
                    special_invocation:
                      Q.Hr.k_EVRDashboardActionSpecialInvocation_Volume,
                    visible_in_dashboard_bar: !0,
                  }),
                ),
              (0, Y.W)(l);
            const d = new Q.Jl();
            d.set_windows(
              n.map((e) => {
                const t = new Q.fY();
                return (
                  t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key &&
                    t.set_tab_id(j.B.GetTabIdForSummonKey(e.overlay_key)),
                  t
                );
              }),
            ),
              (0, Y.W)(d);
          }
          GetOverlayVisibleTimeInSeconds(e) {
            var t;
            const o =
              null === (t = ae.U.GetOverlayInfo(e)) || void 0 === t
                ? void 0
                : t.sHandle;
            return o ? VRHTML.VROverlay.GetVisibleTimeInSeconds(o) : 0;
          }
          initializeOverlayState(e) {
            y.G3.GetAppInfo(e).then((t) => {
              var o, r;
              let n = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                n = null !== (o = y.G3.settings.get(t)) && void 0 !== o ? o : 1;
              }
              j.B.m_mapOverlayState.set(e, {
                refOverlayWidget: l.createRef(),
                dockLocation: f.RA.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: n,
                fLastTotalVisibleTimeInSeconds:
                  this.GetOverlayVisibleTimeInSeconds(e),
              }),
                (null == t ? void 0 : t.starts_theater_mode)
                  ? this.onDockOverlay(e, f.RA.Theater)
                  : le(e) &&
                    (null !==
                      (r = y.G3.settings.get(
                        "/settings/dashboard/autoShowGameTheater",
                      )) &&
                    void 0 !== r &&
                    r
                      ? this.onDockOverlay(e, f.RA.Theater)
                      : this.switchToOverlayInternal(e, "switchToDesktopApp"));
            });
          }
          updateSiblingReferences() {
            var e;
            null === (e = this.m_refDesktopTray.current) ||
              void 0 === e ||
              e.setSiblingReferences(this.m_refDesktopView.current);
          }
          componentWillUnmount() {
            var e, t, o;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, i.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              }),
              this.m_roomViewChangedEventHandle &&
                (this.m_roomViewChangedEventHandle.unregister(),
                (this.m_roomViewChangedEventHandle = null)),
              null === (e = this.m_linkStreamActiveEventHandle) ||
                void 0 === e ||
                e.unregister(),
              (this.m_linkStreamActiveEventHandle = null),
              null === (t = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              null === (o = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === o ||
                o.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            if (te.s_dashboardUserDistance) return te.s_dashboardUserDistance;
            const e = j.B.currentDashboardPosition;
            return e == oe.Near
              ? 0.925
              : e == oe.Middle
              ? 1.05
              : e == oe.Far
              ? 1.2
              : 1.15;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = y.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2",
                  )) && void 0 !== e
                  ? e
                  : 0),
              o = j.B.currentDashboardPosition;
            return o == oe.Near
              ? -0.07 + t
              : o == oe.Middle
              ? -0.08 + t
              : (oe.Far, -0.09 + t);
          }
          static getDashboardScale() {
            var e;
            if (te.s_dashboardUserScale) return te.s_dashboardUserScale;
            let t = 1;
            const o = j.B.currentDashboardPosition;
            return (
              (t =
                o == oe.Near
                  ? 0.36
                  : o == oe.Middle
                  ? 0.41
                  : o == oe.Far
                  ? 0.47
                  : 0.41),
              (t *=
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetFloatProperty(
                          i.wU,
                          i.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              t
            );
          }
          static getControlBarTranslation() {
            return j.B.isVRGamepadUI
              ? { y: -1.2, z: 0.35 }
              : { y: -1.2, z: 0.15 };
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
          onKeyboardVisibilityChanged(e) {
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetKeyboardInputInfo();
            this.setState({
              bKeyboardVisible: e && (null == t ? void 0 : t.dockedInDashboard),
            });
          }
          onGrabStart() {
            this.setState({ bGrabbed: !0 });
          }
          onGrabEnd() {
            this.setState({ bGrabbed: !1 });
          }
          onSetDashboardForceBoundsVisible(e) {
            this.setState((t, o) => {
              let r = Object.assign({}, t.setForcingBoundsVisible);
              return (
                (r[e.for_overlay_key] = new Set(r[e.for_overlay_key])),
                e.force_bounds_visible
                  ? r[e.for_overlay_key].add(e.for_id)
                  : r[e.for_overlay_key].delete(e.for_id),
                { setForcingBoundsVisible: r }
              );
            });
          }
          onDashboardOverlayCreated(e) {
            this.initializeOverlayState(e.overlay_key);
          }
          onDashboardOverlayDestroyed(e) {
            var t;
            e.overlay_key.startsWith(p.Vq)
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay();
            const o = j.B.m_mapOverlayState.get(e.overlay_key);
            o &&
              this.recordDockStats(e.overlay_key, o, e.visible_time_in_seconds),
              j.B.m_mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            const t = this.getActiveOverlaySummonKey();
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              }),
              this.autoSwitchOverlayIfNeeded(),
              this.m_activeOverlayThatVanished &&
                this.hasDashboardOverlay(
                  this.m_activeOverlayThatVanished.sSummonKey,
                ) &&
                (this.m_activeOverlayThatVanished = null);
            const o = y.G3.settings.get(p.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(o) &&
              (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
              t &&
                !this.hasDashboardOverlay(t) &&
                (this.switchToHomeOverlay(),
                (this.m_activeOverlayThatVanished = {
                  sSummonKey: t,
                  timeVanished: new Date(),
                })),
              this.forceUpdate();
          }
          onWindowViewCreated(e) {
            var t, o;
            this.switchToOverlayInternal(p.gB),
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
                  null === (t = y.G3.settings.get(p.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setDockLocation(e, t, o) {
            t.dockLocation != o &&
              (this.recordDockStats(e, t), (t.dockLocation = o));
          }
          recordDockStats(e, t, o) {
            var r;
            const n = Date.now(),
              i = n - t.nDockStartMs;
            if (i >= 1e3) {
              const n = /^valve\.steam\.desktopgame\.(\d+)$/,
                a = e.match(n),
                s = _.H.Instance.SceneAppKey,
                l =
                  t.dockLocation == f.RA.Theater &&
                  null !==
                    (r = y.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== r &&
                  r;
              void 0 === o && (o = this.GetOverlayVisibleTimeInSeconds(e));
              const d = Math.floor(
                  1e3 * (o - t.fLastTotalVisibleTimeInSeconds),
                ),
                c = {
                  OverlayKeyID: e,
                  Location: f.RA[t.dockLocation],
                  DurationMs: i,
                  VisibleMs: d > 0 ? d : void 0,
                  OverlayAppID:
                    2 == (null == a ? void 0 : a.length)
                      ? parseInt(a[1], 10)
                      : void 0,
                  SceneAppKeyID: "" != s ? s : void 0,
                  autoShowGameTheater: l,
                };
              (t.fLastTotalVisibleTimeInSeconds = o),
                v.e.instance.AddRow("SteamVROverlayDockStats", c);
            }
            t.nDockStartMs = n;
          }
          onDockOverlay(e, t, o) {
            var r, n;
            let i = !1;
            (t != f.RA.LeftHand && t != f.RA.RightHand && t != f.RA.Theater) ||
              j.B.m_mapOverlayState.forEach((o, r) => {
                o.dockLocation == t &&
                  (this.setDockLocation(e, o, f.RA.Dashboard), (i = !0));
              });
            const a = j.B.m_mapOverlayState.get(e);
            if (
              (a &&
                (a.dockLocation == f.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                this.setDockLocation(e, a, t),
                (a.xfInitial = o)),
              t === f.RA.Dashboard)
            )
              if (e.startsWith(p.r4)) {
                const t = Number.parseInt(e.substring(p.r4.length + 1));
                null === (r = this.m_refDesktopView.current) ||
                  void 0 === r ||
                  r.onDesktopChange(t);
              } else
                e.startsWith(p.Vq) &&
                  (null === (n = this.m_refDesktopView.current) ||
                    void 0 === n ||
                    n.onWindowViewChange(e));
            else
              t == f.RA.Theater &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("theater_mode"),
                i || Z.C.m_bShowFloor || (j.B.m_bDarkMode = !0));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = j.B.isVRGamepadUI,
              o = this.getActiveOverlay();
            if (!o) return null;
            const r = j.B.m_mapOverlayState.get(e),
              n = r ? r.fScale : 1,
              a = t ? j.B.m_fVRGamepadUI_GlobalActiveOverlayScale : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                { scale: a },
                l.createElement(i.sl, {
                  mountedId: o.mountable_id,
                  fDashboardScale: n,
                }),
              ),
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == p.PF
              ? _.H.Instance.SceneApplicationState != i.xY.None
              : !(
                  (void 0 === e.icon_overlay_key && null == e.icon_uri) ||
                  !e.summon_overlay_key ||
                  (!t && e.summon_overlay_key == p.A4) ||
                  (!t && e.summon_overlay_key == p.Xl) ||
                  (!t && e.summon_overlay_key.startsWith(p.r4)) ||
                  (!t && e.summon_overlay_key.startsWith(p.Vq)) ||
                  (!t &&
                    e.summon_overlay_key.startsWith(p.MZ) &&
                    !e.summon_overlay_key.startsWith(p.wX)) ||
                  (!t &&
                    ((o = e.summon_overlay_key),
                    null !== (r = null == o ? void 0 : o.startsWith(p.MI)) &&
                      void 0 !== r &&
                      r))
                );
            var o, r;
          }
          computeFilteredOverlayTabs(e) {
            return Object.values(this.m_mapExternalOverlays)
              .filter((t) => this.shouldShowOverlayTab(t, e))
              .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let o = this.m_mapExternalOverlays[t];
              if (o.summon_overlay_key == e) return o;
            }
            return null;
          }
          switchToHomeOverlay() {
            const e = ["gamescope.steam", p.T2, p.po];
            for (const t of e)
              if (this.hasDashboardOverlay(t)) {
                this.switchToOverlayInternal(t, "switchToDashboardLibrary");
                break;
              }
          }
          switchToSteamOverlay() {
            j.B.isVRGamepadUI &&
              this.switchToOverlayInternal(p.T2, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var o, r, n, a;
            if (!e) return !1;
            if (e == p.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                o = "bindingui/" + i.qA[(0, i.Op)()];
              this.m_mailbox.SendMessage(o, t), (e = p.RM);
            }
            if (e.startsWith(p.r4)) {
              const t = Number.parseInt(e.substring(p.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t)),
                (e = p.gB);
            } else if (e.startsWith(p.Vq)) {
              if (
                !(null === (r = this.m_refDesktopView.current) || void 0 === r
                  ? void 0
                  : r.hasWindowView(e))
              )
                return !1;
              null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.onWindowViewChange(e),
                (e = p.gB);
            }
            let s = this.findDashboardTab(e);
            return (
              !!s &&
              (this.computeFilteredOverlayTabs(!1).includes(s) &&
                y.G3.SetSettingsValue(
                  p.nf,
                  null !== (a = s.summon_overlay_key) && void 0 !== a ? a : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              j.B.m_setOverlaysViewedThisSession.add(s.summon_overlay_key),
              this.setState({ sActiveOverlayID: s.mountable_id }),
              v.e.instance.RecordUIEvent(
                "SetDashboardOverlay",
                null != t ? t : "Button",
                e,
              ),
              !0)
            );
          }
          autoSwitchOverlayIfNeeded() {
            const e = [],
              t = this.getActiveOverlaySummonKey();
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              e.push(y.G3.settings.get(p.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  te.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == p.po && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(p.T2),
              null == t && e.push(p.po);
            const o = e.find(this.hasDashboardOverlay);
            o && this.switchToOverlayInternal(o);
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
            return t == p.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          getActiveOverlayState() {
            const e = this.getActiveOverlayKey();
            return j.B.m_mapOverlayState.get(e);
          }
          getActiveOverlayDockLocation() {
            var e;
            const t = this.getActiveOverlayState();
            return null !== (e = null == t ? void 0 : t.dockLocation) &&
              void 0 !== e
              ? e
              : f.RA.Dashboard;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == p.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e, t) {
            var o;
            if (!y.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const r = j.B.m_mapOverlayState.get(e.overlay_key);
            (null == r ? void 0 : r.dockLocation) != f.RA.Theater &&
              (t &&
                (this.show(
                  null !== (o = e.reason) && void 0 !== o ? o : "unknown",
                ),
                this.setDashboardVisibility(
                  !0,
                  e.tracked_device_index,
                  e.reason,
                )),
              e.overlay_key
                ? this.switchToOverlayInternal(e.overlay_key)
                : this.autoSwitchOverlayIfNeeded());
          }
          onDockOverlayRequested(e) {
            if (!e.dock_location)
              return void console.log(
                "dock_overlay_requested: dock_location not specified",
                e,
              );
            const t = f.RA[e.dock_location.toString()];
            if (void 0 === t)
              return void console.log(
                "dock_overlay_requested: invalid dock_location",
                e,
              );
            const o = j.B.m_mapOverlayState.get(e.overlay_key);
            o
              ? o.dockLocation != t
                ? this.onDockOverlay(e.overlay_key, t)
                : console.log(
                    "dock_overlay_requested: ignoring redundant request",
                    e,
                  )
              : console.log("dock_overlay_requested: unknown overlay_key", e);
          }
          onHideTheaterMode() {
            var e;
            const t = this.getActiveOverlayKey();
            (null === (e = j.B.m_mapOverlayState.get(t)) || void 0 === e
              ? void 0
              : e.dockLocation) == f.RA.Theater &&
              this.onDockOverlay(t, f.RA.Dashboard);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(p.f8)
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          setDashboardVisibility(e, t, o) {
            let r = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: o,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", r);
          }
          show(e) {
            if (this.isShown()) return;
            v.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = _.H.Instance.SceneAppKey,
              o = _.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              o
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(p.PF)),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let r = { type: te.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", r),
              (0, i.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: re.None }),
              v.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView(e) {
            var t;
            const o =
                null !==
                  (t = VRHTML.VRControlPanel.GetCameraRoomViewVisible()) &&
                void 0 !== t &&
                t,
              r = "boolean" == typeof e ? e : !o;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(r);
          }
          onLegacyQuickLaunchButtonClick() {
            this.switchToOverlayInternal(p.po);
          }
          onRecenterClick() {
            this.state.bLinkStreamActive && VRHTML.BIsLinkServer()
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active",
                ))
              : this.m_mailbox.SendMessage(W.BB, {
                  type: W.KU,
                  countdown_seconds: 3,
                });
          }
          onUserGuideClick() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRApplications.LaunchApplication("user_guide");
          }
          onRoomSetupClick(e) {
            const t = e ? "instant_room_setup" : "room_setup";
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard(
                "onRoomSetupClick " + JSON.stringify(t),
              ),
              this.state.bLinkStreamActive && VRHTML.BIsLinkServer()
                ? this.m_mailbox.SendMessage("svl", { type: t })
                : this.m_mailbox.SendMessage("driver_hmd", { type: t });
          }
          onToggleGamepadFocus() {}
          getDashboardIconUri(e) {
            try {
              if ("turn_signal_menu.thumb" == e.icon_overlay_key)
                return "/dashboard/images/icons/turnsignal.svg";
              if (e.icon_uri) return e.icon_uri;
              if (e.icon_overlay_key)
                return null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetOverlayImage(
                      e.icon_overlay_key,
                    );
            } catch (e) {}
            return null;
          }
          renderLegacyPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = y.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              o = this.BShouldShowDashboardAction(G.Shutdown);
            let r = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (r = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                i.Uk.DeviceCanPowerOff_Bool,
              ));
            const n = _.H.Instance.SceneAppName,
              a = _.H.Instance.SceneAppIsHome;
            let s, d;
            return (
              (s = a
                ? (0, m.Xx)("#Exit_SteamVR_Home")
                : n
                ? (0, m.Xx)("#PowerMenuQuitSceneApp", n)
                : (0, m.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (d = a
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  !!j.B.isVRGamepadUI &&
                    l.createElement(k.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(p.po),
                          this.showPopoverMenu(re.None);
                      },
                    }),
                  r &&
                    l.createElement(k.dy, {
                      label: (0, m.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(re.None);
                      },
                    }),
                  t &&
                    e &&
                    l.createElement(k.dy, {
                      label: s,
                      imageUrl: d,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(re.None);
                      },
                    }),
                  l.createElement(k.dy, {
                    label: (0, m.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  o &&
                    l.createElement(k.dy, {
                      label: (0, m.Xx)("#PowerMenuShutdown"),
                      imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                      onClick: () =>
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.ShutdownSystem(),
                    }),
                ),
              )
            );
          }
          startPopoverMenuTimeout(e) {
            this.m_timeoutPopoverMenuHide = window.setTimeout(() => {
              this.setState({ eShowPopoverMenu: re.None });
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
            return l.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popoverMenuMouseLeave,
                onMouseEnter: this.clearPopoverMenuTimeout,
                ref: this.m_refPopoverMenu,
              },
              l.createElement(c.q, { className: "PowerMenuPanel" }, e),
            );
          }
          popoverMenuMouseLeave(e) {
            0 == e.buttons
              ? this.startPopoverMenuTimeout(100)
              : window.document.addEventListener(
                  "mouseup",
                  this.popoverMenuMouseUp,
                );
          }
          popoverMenuMouseUp(e) {
            window.document.removeEventListener(
              "mouseup",
              this.popoverMenuMouseUp,
            ),
              this.m_refPopoverMenu.current &&
                !(function (e, t, o) {
                  let r = o.getBoundingClientRect();
                  return (
                    e >= r.left && e <= r.right && t >= r.top && t <= r.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, o, r;
            let n = this.getActiveOverlay();
            if (!n) return null;
            if (n.summon_overlay_key == p.gB) {
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
                return l.createElement(k.Rk, {
                  name:
                    null === (o = this.state.mapWindows.get(e)) || void 0 === o
                      ? void 0
                      : o.title,
                  iconUrl: this.getDashboardIconUri(n),
                });
              }
              return l.createElement(k.Rk, {
                name:
                  "Desktop " +
                  (null === (r = this.m_refDesktopView.current) || void 0 === r
                    ? void 0
                    : r.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(n),
              });
            }
            if (n.summon_overlay_key == p.RM)
              return l.createElement(k.Rk, {
                name: (0, m.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              });
            let i = n.tab_name;
            return l.createElement(k.Rk, {
              name: i,
              iconUrl: this.getDashboardIconUri(n),
            });
          }
          getCollisionBoundsFadeVisualizationElements() {
            var e;
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
            if (!t) return [];
            let o = [];
            const r =
              null !== (e = y.G3.settings.get(p.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, i.M9)((0, i.eQ)(e[3], e[0])),
                n = (0, i.M9)((0, i.eQ)(e[1], e[0])),
                a = (0, i.dq)(t, n),
                s = (0, i.Pd)((0, i.tS)(t, n, a)),
                d = (0, i.LY)((0, i.eQ)(e[0], e[3]));
              if (d < 0.4) continue;
              let c = Math.max(1, Math.floor(d));
              for (let t = 0; t < c; t++) {
                let n = (t + 1) / (c + 1),
                  a = (0, i.Oq)();
                (a.rotation = s),
                  (a.translation = (0, i.q9)(n, e[0], e[3])),
                  (a.scale = { x: 0.005, y: 0.005, z: r });
                let d = l.createElement(
                  i.wx,
                  { transform: a },
                  l.createElement(
                    i.Dd,
                    { value: 0.25 },
                    l.createElement(
                      i.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      l.createElement(i.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: i.xj.Backface,
                      }),
                    ),
                  ),
                );
                o.push(d);
              }
              if (o.length > 20) break;
            }
            return o;
          }
          render() {
            var e, t;
            const o = _.H.Instance.SceneApplicationState !== i.xY.None;
            if (!o && j.B.isDarkMode) {
              const o =
                  null !==
                    (e = y.G3.settings.get(
                      "/settings/dashboard/theaterModeBrightness",
                    )) && void 0 !== e
                    ? e
                    : 0.5,
                r =
                  null !==
                    (t = y.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== t
                    ? t
                    : 0.5;
              (0, i.OK)({
                color_mult: Math.pow(o, 2.2),
                reflection_mult: Math.pow(r, 2.2),
                roomview_mult: [0.12, 0.16, 0.6],
                allow_skydome: !Z.C.m_bShowFloor,
              });
            } else if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == p.A4,
                t = y.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                );
              (_.H.Instance.SceneAppIsHome && t) || e || !o
                ? (0, i.OK)({
                    color_mult: 1,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  })
                : (0, i.OK)({
                    color_mult: 0.15,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  });
            } else
              (0, i.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              });
            const r = this.getActiveOverlaySummonKey(),
              n = this.state.bShown && this.state.setForcingBoundsVisible[r],
              a = n && n.size > 0;
            let s = [];
            return (
              a && (s = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                "div",
                { className: "DashboardMain" },
                a && l.createElement(se, null),
                a && l.createElement("span", null, s),
                this.state.bShown && this.renderDashboard(),
                l.createElement(ee, null),
                this.renderInternalOverlays(),
                this.renderOverlayWidgets(),
                !1,
              )
            );
          }
          hasDashboardOverlay(e) {
            return Object.values(this.m_mapExternalOverlays).some(
              (t) => t.summon_overlay_key == e,
            );
          }
          isOverlayActive(e) {
            return (
              !!this.state.sActiveOverlayID &&
              this.getActiveOverlaySummonKey() == e
            );
          }
          GetActiveOverlayAnchorIDs() {
            const e = this.getActiveOverlaySummonKey();
            return k.Eu.has(e)
              ? k.Eu.get(e)
              : {
                  strTopCenterAnchorID:
                    this.state.sActiveOverlayID + "_TopCenter",
                  strCenterLeftAnchorID:
                    this.state.sActiveOverlayID + "_CenterLeft",
                  strCenterRightAnchorID:
                    this.state.sActiveOverlayID + "_CenterRight",
                  strBottomCenterAnchorID:
                    this.state.sActiveOverlayID + "_BottomCenter",
                };
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              o = k.IO.Center;
            return l.createElement(k.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: o,
              active: this.isOverlayActive(e.summon_overlay_key),
              onClick: () => this.switchToOverlayInternal(e.summon_overlay_key),
            });
          }
          isDesktopTrayActive() {
            var e;
            return (
              (this.isOverlayActive(p.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith(p.Vq))) &&
              (this.state.eShowPopoverMenu == re.None ||
                this.state.eShowPopoverMenu == re.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == re.Volume;
          }
          isSteamOverlayActive() {
            return (
              this.isOverlayActive(p.T2) &&
              this.state.eShowPopoverMenu == re.None
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(p.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith(p.Vq))
            );
          }
          handleVRLinkInfoClick() {
            let e = {
              type: "handle_link_button",
              whichDevice: VRHTML.VROverlay.GetPrimaryDashboardDevice(),
            };
            this.m_mailbox.SendMessage("svl", e);
          }
          ToggleIncognitoMode(e) {
            let t = {
              type: "toggle_voicechat",
              enable: null != e ? e : !j.B.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          ToggleVideoStream() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_videostream",
            });
          }
          BShouldShowDashboardAction(e) {
            var t, o, r, n, i, a;
            const s =
                null !== (t = y.G3.settings.get(p.Av)) && void 0 !== t && t,
              l =
                null !== (o = y.G3.settings.get(p.k_)) && void 0 !== o ? o : 0,
              d = VRHTML.BIsLinkServer();
            switch (e) {
              case G.ExitVR:
                return (
                  null ===
                    (r = y.G3.settings.get(
                      "/settings/dashboard/allowExitVR",
                    )) ||
                  void 0 === r ||
                  r
                );
              case G.Shutdown:
                return y.G3.settings.get(
                  "/settings/dashboard/allowSystemShutdown",
                );
              case G.ToggleRoomView:
                return s && l > 0 && !(this.state.bLinkStreamActive && d);
              case G.ToggleVideoStream:
                return !1;
              case G.Recenter:
                return (
                  1 !=
                  (null !==
                    (n =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            2109,
                          )) && void 0 !== n
                    ? n
                    : 0)
                );
              case G.IncognitoMode:
                return !1;
              case G.ToggleDarkMode:
                return j.B.isTheaterMode || Z.C.m_bShowFloor;
              case G.UserGuide:
                return (
                  null !==
                    (i = y.G3.settings.get(
                      "/settings/dashboard/allowUserGuide",
                    )) &&
                  void 0 !== i &&
                  i
                );
              case G.RoomSetup:
              case G.RoomSetupInstant:
                return !(
                  null ===
                    (a =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            2110,
                          )) ||
                  void 0 === a ||
                  !a
                );
              default:
                return !1;
            }
          }
          renderLegacyControlBar(e, t, o) {
            var r, n, a, s;
            const d = j.B.isVRGamepadUI,
              h = j.B.isDarkMode,
              u = o ? 1 : 0,
              v = te.k_nControlBarWidthMeters,
              b =
                null ===
                  (r = y.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === r ||
                r,
              S =
                null ===
                  (n = y.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === n ||
                n,
              f = ae.U.BOverlayExists(p.T2),
              R = !d && !0,
              w = !(
                null !==
                  (a = y.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== a &&
                a
              ),
              M = (VRHTML.BIsLinkServer(), _.H.Instance.SceneApplicationState),
              D = _.H.Instance.SceneAppIsHome,
              C =
                null ===
                  (s = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === s ||
                s
                  ? p.ml
                  : null,
              T = _.H.Instance.SceneAppKey;
            let V = "images/appimage_default.png";
            return (
              T && (V = "/app/image?app_key=" + T),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  i.Dd,
                  { value: u },
                  l.createElement(
                    i.VW,
                    { color: j.B.ControlBarTint },
                    l.createElement(
                      i.wx,
                      { translation: { z: 1e-5 } },
                      l.createElement(
                        i.s_,
                        {
                          curvature_origin_id: C,
                          width: v,
                          interactive: o,
                          id: p.WR,
                          debug_name: "Controls",
                        },
                        l.createElement(
                          c.q,
                          { className: "ControlBar MainControlBar" },
                          l.createElement(
                            "div",
                            { className: "Section Left" },
                            b &&
                              l.createElement(k.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_menu_c.svg",
                                label: (0, m.Xx)("#Menu"),
                                style: k.zk.Small,
                                onClick: () => this.showPopoverMenu(re.Power),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            l.createElement(
                              k.dw,
                              { style: k.zk.Small },
                              f &&
                                l.createElement(k.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/vr_steam.svg",
                                  label: (0, m.Xx)("#Steam"),
                                  active: this.isSteamOverlayActive(),
                                  onClick: () => this.switchToSteamOverlay(),
                                }),
                              !1,
                              R &&
                                l.createElement(k.B8, {
                                  label: (0, m.Xx)("#Library"),
                                  imageUrl:
                                    "/dashboard/images/icons/svr_items.svg",
                                  active: this.isOverlayActive(p.po),
                                  onClick: this.onLegacyQuickLaunchButtonClick,
                                }),
                              S &&
                                l.createElement(k.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_desktop_alt.svg",
                                  label: (0, m.Xx)("#Desktops"),
                                  active: this.isDesktopTrayActive(),
                                  onClick: () =>
                                    this.switchToOverlayInternal(p.gB),
                                }),
                            ),
                            l.createElement(
                              k.dw,
                              { style: k.zk.Small },
                              l.createElement(
                                l.Fragment,
                                null,
                                e.map(
                                  this.renderExternalOverlayControlBarButton,
                                ),
                                t.length > 0 &&
                                  l.createElement(k.B8, {
                                    imageUrl:
                                      "/dashboard/images/icons/svr_more.svg",
                                    label: (0, m.Xx)(
                                      "#X_More_Overlays",
                                      t.length,
                                    ),
                                    active:
                                      this.state.eShowPopoverMenu ==
                                      re.ExternalOverlays,
                                    onClick: () =>
                                      this.showPopoverMenu(re.ExternalOverlays),
                                    onMouseEnter: this.clearPopoverMenuTimeout,
                                    onMouseLeave: () =>
                                      this.startPopoverMenuTimeout(500),
                                  }),
                              ),
                            ),
                          ),
                          l.createElement(
                            "div",
                            { className: "Section Center" },
                            M != i.xY.None &&
                              o &&
                              l.createElement(
                                "div",
                                { className: "NowPlayingSpacer" },
                                l.createElement(
                                  g.d,
                                  {
                                    allowableParentSelectors: [
                                      ".DashboardMain",
                                    ],
                                  },
                                  l.createElement(
                                    i.VW,
                                    { color: j.B.ControlBarTint },
                                    l.createElement(
                                      i.wx,
                                      { translation: { z: 0.02 } },
                                      l.createElement(
                                        i.s_,
                                        {
                                          debug_name: "NowPlayingButton",
                                          interactive: !0,
                                          target_dpi_panel_id: p.WR,
                                          curvature_origin_id: C,
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "ControlBar" },
                                          l.createElement(k.NT, {
                                            label: D
                                              ? (0, m.Xx)("#SteamVR_Home")
                                              : (0, m.Xx)("#Now_Playing"),
                                            active: this.isOverlayActive(p.PF),
                                            style: k.zk.App,
                                            imageUrl: V,
                                            onClick: () =>
                                              this.switchToOverlayInternal(
                                                p.PF,
                                              ),
                                          }),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                          ),
                          l.createElement(
                            "div",
                            { className: "Section Right" },
                            l.createElement(
                              k.dw,
                              { style: k.zk.Small },
                              this.BShouldShowDashboardAction(
                                G.ToggleDarkMode,
                              ) &&
                                l.createElement(k.B8, {
                                  imageUrl: h
                                    ? "/dashboard/images/icons/svr_nightmode.svg"
                                    : "/dashboard/images/icons/svr_lightmode.svg",
                                  label: (0, m.Xx)("#Settings_ToggleDarkMode"),
                                  onClick: () => (j.B.m_bDarkMode = !h),
                                  active: h,
                                }),
                              !1,
                              !1,
                              this.BShouldShowDashboardAction(G.Recenter) &&
                                l.createElement(k.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_recenter.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, m.Xx)("#Button_Recenter"),
                                  onClick: this.onRecenterClick,
                                }),
                              this.BShouldShowDashboardAction(G.RoomSetup) &&
                                l.createElement(k.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_room_setup.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, m.Xx)("#RoomSetup"),
                                  onClick: () => this.onRoomSetupClick(!1),
                                }),
                              this.BShouldShowDashboardAction(
                                G.ToggleRoomView,
                              ) &&
                                l.createElement(k.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_eye.svg",
                                  label: (0, m.Xx)("#Toggle_Room_View"),
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
                              l.createElement(k.D6, {
                                active:
                                  this.state.eShowPopoverMenu == re.Volume,
                                refVolumeTray: this.m_refVolumeTray,
                                onShowTray: () =>
                                  this.showPopoverMenu(re.Volume),
                                onHideTray: () => this.showPopoverMenu(re.None),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            ),
                            w &&
                              l.createElement(k.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_settings.svg",
                                active: this.isOverlayActive(p.A4),
                                enabled: this.hasDashboardOverlay(p.A4),
                                label: (0, m.Xx)("#VRSettings"),
                                style: k.zk.Small,
                                centerPanelAnchorID: "VolumeButton",
                                onClick: () =>
                                  this.switchToOverlayInternal(p.A4),
                              }),
                          ),
                        ),
                        o && this.renderLegacyControlBarTrays(C),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const o = j.B.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(R.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: o,
                onToggleWindowList: () => this.showPopoverMenu(re.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(k.z, {
                ref: this.m_refVolumeTray,
                curvatureOriginId: e,
                scale: t,
                position: 0.337,
                visible: this.isVolumeTrayActive(),
                tintColor: o,
                onFinalChangeMouseOutside: () => {
                  this.startPopoverMenuTimeout(800);
                },
                onMouseMove: this.clearPopoverMenuTimeout,
                onMouseLeave: this.popoverMenuMouseLeave,
                sort_depth_bias: 0.4,
              }),
            );
          }
          renderVRGamepadUIBar(e) {
            var t;
            const o =
              !!(
                1 &
                (null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          i.Uk.DashboardLinkSupport_Int32,
                        )) && void 0 !== t
                  ? t
                  : 0)
              ) && this.state.bLinkStreamActive;
            return l.createElement(
              l.Fragment,
              null,
              o &&
                l.createElement(
                  i.wx,
                  { translation: { y: 0.075, z: 0 } },
                  l.createElement(ce, {
                    onClick: () => this.handleVRLinkInfoClick(),
                  }),
                ),
              l.createElement(
                i.s_,
                {
                  id: "VRGamepadUI-DashboardBar-Panel",
                  debug_name: "VRGamepadUI-DashboardBar-Panel",
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e,
                  overlay_key: p.BZ,
                  origin: i.Ic.TopCenter,
                  meters_per_pixel: j.B.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.08,
                },
                l.createElement(i.at, {
                  id: "VRGamepadUI-DashboardBar-Panel-TopCenter",
                  location: i.Ic.TopCenter,
                }),
                l.createElement(
                  i.at,
                  {
                    id: "VRGamepadUI-DashboardBar-Panel-BottomCenter",
                    location: i.Ic.BottomCenter,
                  },
                  l.createElement(i.wx, { id: p.dG, translation: { y: -0.1 } }),
                ),
              ),
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(j.B.m_mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != f.RA.Dashboard);
            return l.createElement(
              l.Fragment,
              null,
              e.map((e) => {
                var t;
                return l.createElement(f.Sm, {
                  bDashboardShown: this.state.bShown,
                  bHasSceneApp:
                    _.H.Instance.SceneApplicationState !== i.xY.None,
                  bCaptureVideo: !1,
                  dockLocation: e.overlayState.dockLocation,
                  onDockOverlay: this.onDockOverlay,
                  ShowMultitaskingView:
                    null === (t = this.m_refDesktopView.current) || void 0 === t
                      ? void 0
                      : t.ShowMultitaskingView,
                  ToggleGamepadFocus: this.onToggleGamepadFocus,
                  sOverlayKey: e.sOverlayKey,
                  xfInitial: e.overlayState.xfInitial,
                  key: e.sOverlayKey,
                  ref: e.overlayState.refOverlayWidget,
                });
              }),
            );
          }
          getRenderModelForShape(e) {
            return "";
          }
          renderPassthroughPortals() {
            return null;
          }
          isDesktopViewVisible() {
            return (
              this.state.bShown &&
              this.isOverlayActive(p.gB) &&
              (0, f.sg)(this.getActiveOverlayDockLocation())
            );
          }
          onGameLaunched(e) {
            (!e.is_dashboard_overlay ||
              (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, o, r;
            const n =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              a =
                null !==
                  (r =
                    null === (o = this.m_refDesktopView.current) || void 0 === o
                      ? void 0
                      : o.desktopCount) && void 0 !== r
                  ? r
                  : 1,
              s = y.G3.settings.get(p.YL) || j.B.m_bShowLegacyBar;
            return l.createElement(
              l.Fragment,
              null,
              s &&
                l.createElement(
                  i.Y9,
                  {
                    tabName: (0, m.Xx)("#Library"),
                    iconUri: "/dashboard/images/icons/svr_items.svg",
                    summonOverlayKey: p.po,
                  },
                  l.createElement(U, {
                    visible: this.state.bShown && this.isOverlayActive(p.po),
                    onGameLaunched: this.onGameLaunched,
                  }),
                ),
              l.createElement(
                i.Y9,
                { tabName: (0, m.Xx)("#Now_Playing"), summonOverlayKey: p.PF },
                l.createElement(V, {
                  visible: this.state.bShown && this.isOverlayActive(p.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                i.Y9,
                {
                  summonOverlayKey: p.gB,
                  tabName:
                    a > 1 ? (0, m.Xx)("#Desktop_X", n) : (0, m.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(R.N, {
                  visible: this.isDesktopViewVisible(),
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              l.createElement(d._, {
                visible: this.state.bShown && this.isOverlayActive(p.A4),
              }),
              !1,
            );
          }
          onAddPortal(e, t) {}
          onRemovePortal(e) {}
          get activeOverlayScale() {
            var e, t;
            return null !==
              (t =
                null === (e = this.getActiveOverlayState()) || void 0 === e
                  ? void 0
                  : e.fScale) && void 0 !== t
              ? t
              : 1;
          }
          onActiveOverlayScaleChange(e) {
            const t = this.getActiveOverlayState();
            t && (t.fScale = e);
          }
          onActiveOverlayClosed() {
            var e;
            const t = this.getActiveOverlayKey();
            t &&
              (t.startsWith(p.Vq)
                ? null === (e = this.m_refDesktopView.current) ||
                  void 0 === e ||
                  e.onWindowViewClosed(t)
                : this.switchToHomeOverlay(),
              VRHTML.VRDashboardManager.SendOverlayClosed(t));
          }
          onSteamButtonPressed(e) {
            const t = this.getActiveOverlayKey();
            t &&
              (VRHTML.VRDashboardManager.SendOverlayButtonPress(t, e),
              VRHTML.VRDashboardManager.SendOverlayButtonUnpress(t, e));
          }
          renderOverlayControlBar() {
            var e, t, o, r, n;
            const a = j.B.isDarkMode,
              s = a ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              d = a ? 0 : 0.1;
            let c = !1,
              u = !1,
              v = !1;
            const g = this.getActiveOverlayKey(),
              _ =
                null === (e = ae.U.GetOverlayInfo(g)) || void 0 === e
                  ? void 0
                  : e.sHandle;
            if (_) {
              (c = VRHTML.VROverlay.GetFlag(_, i.Z9.EnableControlBarKeyboard)),
                (u = VRHTML.VROverlay.GetFlag(_, i.Z9.EnableControlBarClose));
              const e = !1;
              v = VRHTML.VROverlay.GetFlag(_, i.Z9.EnableSteamUIButtons) && !e;
            }
            const b =
                null !==
                  (t = y.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin",
                  )) && void 0 !== t
                  ? t
                  : 0.75,
              S =
                null !==
                  (o = y.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax",
                  )) && void 0 !== o
                  ? o
                  : 1.5,
              R =
                null ===
                  (r = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r
                  ? p.ml
                  : null,
              w = { x: 0, y: -0.15, z: 0.1 },
              M = this.GetActiveOverlayAnchorIDs();
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                {
                  parent_id: M.strBottomCenterAnchorID,
                  translation: { y: 0.003 },
                },
                l.createElement(
                  i.VW,
                  { color: s },
                  l.createElement(
                    i.s_,
                    {
                      curvature_origin_id: R,
                      origin: i.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: M.strBottomCenterAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: i.Vv.SingleTap,
                      reflect: d,
                    },
                    l.createElement("div", {
                      className: "OverlayControlBarBackground",
                    }),
                  ),
                ),
              ),
              l.createElement(
                i.wx,
                {
                  parent_id: M.strBottomCenterAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                l.createElement(
                  i.VW,
                  { color: s },
                  l.createElement(
                    i.s_,
                    {
                      curvature_origin_id: R,
                      origin: i.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: p.WR,
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
                          (0, m.Xx)("#Size"),
                        ),
                        l.createElement(h.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: b,
                          max: S,
                          value: this.activeOverlayScale,
                          valueStyleVariant: h.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          onFinalChange: (e) => {
                            var t;
                            this.isDesktopOverlayActive() &&
                              (null === (t = this.m_refDesktopView.current) ||
                                void 0 === t ||
                                t.onDesktopScaleChange(e));
                          },
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        v &&
                          l.createElement(k.zN, {
                            icon: l.createElement(q.VC, {
                              button: X.F.HomeMenu,
                              type: q.yV.Knockout,
                              size: q.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: w,
                            onClick: () => {
                              this.onSteamButtonPressed(
                                i.ZP.k_EButton_Reserved0,
                              );
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        v &&
                          l.createElement(k.zN, {
                            icon: l.createElement(q.VC, {
                              button: X.F.QuickMenu,
                              type: q.yV.Knockout,
                              size: q.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: w,
                            onClick: () => {
                              this.onSteamButtonPressed(
                                i.ZP.k_EButton_Reserved1,
                              );
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        !1,
                        this.isDesktopOverlayActive() &&
                          (null === (n = this.m_refDesktopView.current) ||
                          void 0 === n
                            ? void 0
                            : n.renderControlBarButtons(w)),
                        c &&
                          l.createElement(k.CS, {
                            tooltipTranslation: w,
                            overlayKey: this.getActiveOverlayKey(),
                          }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, m.Xx)("#DockOnLeftController"),
                          tooltipTranslation: w,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = j.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.LeftHand
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              i.Kg.TrackedControllerRole_LeftHand,
                            ) != i.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            f.RA.LeftHand,
                        }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, m.Xx)("#DockOnRightController"),
                          tooltipTranslation: w,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = j.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.RightHand
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              i.Kg.TrackedControllerRole_RightHand,
                            ) != i.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            f.RA.RightHand,
                        }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, m.Xx)("#FloatInWorld"),
                          tooltipTranslation: w,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (0, f.fT)(
                              null === (e = j.B.m_mapOverlayState.get(t)) ||
                                void 0 === e
                                ? void 0
                                : e.dockLocation,
                            )
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.World);
                          },
                          active:
                            this.getActiveOverlayDockLocation() == f.RA.World,
                        }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/svr_theater.svg",
                          title: (0, m.Xx)("#ToggleTheaterMode"),
                          tooltipTranslation: w,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = j.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.Theater
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.Theater);
                          },
                          active:
                            this.getActiveOverlayDockLocation() == f.RA.Theater,
                        }),
                        u &&
                          l.createElement(k.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, m.Xx)(
                              le(g) ? "#QuitApp" : "#CloseOverlay",
                            ),
                            tooltipTranslation: w,
                            onClick: this.onActiveOverlayClosed,
                          }),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          renderLegacyHeader(e) {
            const t = j.B.isDarkMode,
              o = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              r = t ? 0 : 0.1,
              n = !t;
            let a = null;
            return (
              this.isDesktopOverlayActive() && (a = 2048),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  i.wx,
                  { translation: { y: 0.008 } },
                  l.createElement(
                    i.VW,
                    { color: o },
                    l.createElement(
                      i.s_,
                      {
                        curvature_origin_id: e,
                        origin: i.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: p.WR,
                        debug_name: "StatusBar",
                        reflect: r,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: a } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          n && this.renderStatusBarTitle(),
                          l.createElement(k.j6, {
                            role: i.Kg.TrackedControllerRole_LeftHand,
                            style: S.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(k.j6, {
                            deviceIndex: i.wU,
                            style: S.A.VerticalBattery,
                          }),
                          l.createElement(k.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(k.j6, {
                            role: i.Kg.TrackedControllerRole_RightHand,
                            style: S.A.HorizontalPips,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderVRGamepadUIHeader(e) {
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                { translation: { y: 0.01 } },
                l.createElement(
                  i.s_,
                  {
                    id: "VRGamepadUI-Header-Panel",
                    debug_name: "VRGamepadUI-Header-Panel",
                    interactive: !0,
                    curvature_origin_id: e,
                    overlay_key: p.rl,
                    origin: i.Ic.BottomCenter,
                    width: 2.667,
                    reflect: 0.01,
                  },
                  l.createElement(i.at, {
                    id: "VRGamepadUI-Header-Panel-TopCenter",
                    location: i.Ic.TopCenter,
                  }),
                ),
              ),
            );
          }
          renderDashboard() {
            var e, t, o, r, n;
            const a = this.computeFilteredOverlayTabs(!1),
              s = j.B.isVRGamepadUI,
              d = s,
              h = !s || j.B.m_bShowLegacyBar;
            let u = [],
              v = [],
              g =
                null !== (e = y.G3.settings.get(p.FM)) && void 0 !== e ? e : 2;
            if (a.length > g) {
              const e = y.G3.settings.get(p.nf);
              (u = [
                null !== (t = a.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : a[0],
              ]),
                (v = a.filter((e) => !u.includes(e)));
            } else u = a;
            let _ = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && _.push(e);
            });
            const b = this.getActiveOverlayDockLocation(),
              S = (0, f.fT)(b),
              R = (0, f.sg)(b);
            let w = this.getActiveOverlayKey();
            const M =
                null === (o = ae.U.GetOverlayInfo(w)) || void 0 === o
                  ? void 0
                  : o.sHandle,
              D = !!M && VRHTML.VROverlay.GetFlag(M, i.Z9.EnableControlBar);
            let C = 2,
              T = 2.5;
            const V = y.G3.settings.get("/settings/dashboard/theaterPosition");
            V == oe.Near
              ? ((C *= 0.5), (T *= 0.5))
              : V == oe.Middle
              ? ((C *= 1), (T *= 1))
              : V == oe.Far
              ? ((C *= 4), (T *= 2.5))
              : V == oe.Standard && ((C *= 1), (T *= 1));
            const E =
                null ===
                  (r = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r,
              I = E ? p.ml : null,
              x = { y: D ? -0.9 : -1.03375, z: 0.05 },
              P = d ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              L = te.k_nControlBarPitch;
            let O = E ? 1 : 0;
            const B =
                null !==
                  (n = y.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== n &&
                n,
              H = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: B && this.state.bPlacementModeActive,
                },
                l.createElement(
                  i.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    i.wx,
                    {
                      translation: {
                        x: 0,
                        y: te.getDashboardVerticalPosition(),
                        z: 1 * -te.getDashboardDistance(),
                      },
                      rotation: { x: 0 },
                    },
                    l.createElement(
                      i.wx,
                      { translation: { y: -0.15 } },
                      l.createElement(
                        z.Z,
                        null,
                        !1,
                        l.createElement(
                          i.wx,
                          { translation: { y: 0.15 } },
                          l.createElement(i.wx, {
                            id: I,
                            translation: { z: te.getDashboardDistance() + 1.8 },
                          }),
                          l.createElement(
                            i.wx,
                            { scale: te.getDashboardScale() },
                            l.createElement(
                              i.wx,
                              { parent_id: H },
                              s
                                ? this.renderVRGamepadUIHeader(I)
                                : this.renderLegacyHeader(I),
                            ),
                            l.createElement(
                              i.wx,
                              {
                                id: "active_overlay_transform",
                                translation: x,
                                ref: this.m_refOverlayTransform,
                              },
                              !S && R && this.renderActiveOverlay(),
                              !S &&
                                !R &&
                                l.createElement(
                                  k.lL,
                                  {
                                    additionalClassNames: D
                                      ? "WithControlBar"
                                      : "",
                                    visible: !0,
                                  },
                                  l.createElement(
                                    "div",
                                    { className: "NoDesktopFound" },
                                    l.createElement(
                                      "h2",
                                      null,
                                      this.getActiveOverlayDockLocation() ==
                                        f.RA.LeftHand &&
                                        (0, m.Xx)("#DockedOnLeftController"),
                                      this.getActiveOverlayDockLocation() ==
                                        f.RA.RightHand &&
                                        (0, m.Xx)("#DockedOnRightController"),
                                    ),
                                    l.createElement(
                                      c.z,
                                      {
                                        className: "ButtonControl",
                                        onClick: () => {
                                          this.onDockOverlay(w, f.RA.Dashboard);
                                        },
                                      },
                                      (0, m.Xx)("#DockHere"),
                                    ),
                                  ),
                                ),
                            ),
                            D && R && this.renderOverlayControlBar(),
                            !1,
                            l.createElement(
                              i.wx,
                              { parent_id: d ? p.dG : p.f$ },
                              l.createElement(K.J, {
                                curvature_origin_id: I,
                                tint: j.B.ControlBarTint,
                                onStartMove: this.onGrabStart,
                                onEndMove: this.onGrabEnd,
                              }),
                            ),
                            l.createElement(
                              i.wx,
                              { translation: P, id: p.Qg },
                              l.createElement(i.wx, {
                                id: p.f$,
                                translation: { y: 0.08, z: -0.12 },
                              }),
                              l.createElement(
                                i.wx,
                                {
                                  rotation: { x: L },
                                  curvature_pitch: L,
                                  translation: d ? { y: -0.65, z: 0.2 } : {},
                                },
                                this.renderLegacyControlBar(u, v, h),
                                l.createElement(
                                  i.wx,
                                  { translation: { y: -0.65, z: -0.01 } },
                                  l.createElement(he, null),
                                ),
                              ),
                              d &&
                                l.createElement(
                                  i.wx,
                                  { rotation: { x: L }, curvature_pitch: L },
                                  this.renderVRGamepadUIBar(I),
                                ),
                              l.createElement(
                                i.wx,
                                { rotation: { x: L } },
                                l.createElement(
                                  z.Z,
                                  null,
                                  l.createElement(
                                    i.wx,
                                    {
                                      rotation: { x: -10 },
                                      curvature_pitch: L,
                                    },
                                    !1,
                                    this.state.bKeyboardVisible &&
                                      l.createElement($, {
                                        debugHostLocation: "Dashboard",
                                        onGrabStart: this.onGrabStart,
                                        onGrabEnd: this.onGrabEnd,
                                      }),
                                  ),
                                ),
                              ),
                              this.state.eShowPopoverMenu == re.Power &&
                                l.createElement(
                                  i.wx,
                                  {
                                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                                    rotation: { y: 19 * O },
                                  },
                                  l.createElement(
                                    i.s_,
                                    {
                                      curvature_origin_id: I,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: i.Ic.BottomRight,
                                      debug_name: "Power Menu",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderLegacyPowerMenu(),
                                  ),
                                ),
                              this.state.eShowPopoverMenu ==
                                re.ExternalOverlays &&
                                l.createElement(
                                  i.wx,
                                  {
                                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                                    rotation: { y: 6 * O },
                                  },
                                  l.createElement(
                                    i.s_,
                                    {
                                      curvature_origin_id: I,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: i.Ic.BottomRight,
                                      debug_name: "OverlaysList",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderPopoverMenu(
                                      l.createElement(
                                        l.Fragment,
                                        null,
                                        " ",
                                        v.map((e) =>
                                          l.createElement(k.dy, {
                                            key: e.mountable_id,
                                            imageUrl:
                                              this.getDashboardIconUri(e),
                                            label: e.tab_name,
                                            onClick: () => {
                                              this.switchToOverlayInternal(
                                                e.summon_overlay_key,
                                              ),
                                                this.showPopoverMenu(re.None);
                                            },
                                          }),
                                        ),
                                        " ",
                                      ),
                                    ),
                                  ),
                                ),
                              this.state.eShowPopoverMenu == re.Windows &&
                                l.createElement(
                                  i.wx,
                                  {
                                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                                    rotation: { y: -16 * O },
                                  },
                                  l.createElement(
                                    i.s_,
                                    {
                                      curvature_origin_id: I,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: i.Ic.BottomRight,
                                      debug_name: "WindowList",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderPopoverMenu(
                                      l.createElement(
                                        l.Fragment,
                                        null,
                                        " ",
                                        _.map((e) =>
                                          l.createElement(k.dy, {
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
                                                t,
                                              ),
                                                this.showPopoverMenu(re.None);
                                            },
                                          }),
                                        ),
                                        " ",
                                      ),
                                    ),
                                  ),
                                ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (de.k_sDashboardMailboxName = "systemui_dashboard"),
          (de.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
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
          (de.k_nControlBarWidthMeters = 2.667),
          (de.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (de.k_nControlBarPitch = -40),
          (de.s_dashboardUserDistance = void 0),
          (de.s_dashboardUserScale = void 0),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, n.gn)([a.ak], de.prototype, "onRoomViewChanged", null),
          (0, n.gn)([a.ak], de.prototype, "onLinkStreamActiveEvents", null),
          (0, n.gn)([a.ak], de.prototype, "onKeyboardVisibilityChanged", null),
          (0, n.gn)([a.ak], de.prototype, "onGrabStart", null),
          (0, n.gn)([a.ak], de.prototype, "onGrabEnd", null),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
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
          (0, n.gn)([a.ak], de.prototype, "onDockOverlayRequested", null),
          (0, n.gn)([a.ak], de.prototype, "onHideTheaterMode", null),
          (0, n.gn)([a.ak], de.prototype, "onHideDashboardRequested", null),
          (0, n.gn)([a.ak], de.prototype, "show", null),
          (0, n.gn)([a.ak], de.prototype, "hide", null),
          (0, n.gn)([a.ak], de.prototype, "setPlacementModeActive", null),
          (0, n.gn)([a.ak], de.prototype, "onToggleRoomView", null),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "onLegacyQuickLaunchButtonClick",
            null,
          ),
          (0, n.gn)([a.ak], de.prototype, "onRecenterClick", null),
          (0, n.gn)([a.ak], de.prototype, "onUserGuideClick", null),
          (0, n.gn)([a.ak], de.prototype, "onRoomSetupClick", null),
          (0, n.gn)([a.ak], de.prototype, "onToggleGamepadFocus", null),
          (0, n.gn)([a.ak], de.prototype, "renderLegacyPowerMenu", null),
          (0, n.gn)([a.ak], de.prototype, "startPopoverMenuTimeout", null),
          (0, n.gn)([a.ak], de.prototype, "clearPopoverMenuTimeout", null),
          (0, n.gn)([a.ak], de.prototype, "showPopoverMenu", null),
          (0, n.gn)([a.ak], de.prototype, "popoverMenuMouseLeave", null),
          (0, n.gn)([a.ak], de.prototype, "popoverMenuMouseUp", null),
          (0, n.gn)([a.ak], de.prototype, "hasDashboardOverlay", null),
          (0, n.gn)(
            [a.ak],
            de.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, n.gn)([a.ak], de.prototype, "isDesktopTrayActive", null),
          (0, n.gn)([a.ak], de.prototype, "isVolumeTrayActive", null),
          (0, n.gn)([a.ak], de.prototype, "isSteamOverlayActive", null),
          (0, n.gn)([a.ak], de.prototype, "isDesktopOverlayActive", null),
          (0, n.gn)([a.ak], de.prototype, "handleVRLinkInfoClick", null),
          (0, n.gn)([a.ak], de.prototype, "ToggleIncognitoMode", null),
          (0, n.gn)([a.ak], de.prototype, "ToggleVideoStream", null),
          (0, n.gn)([a.ak], de.prototype, "getRenderModelForShape", null),
          (0, n.gn)([a.ak], de.prototype, "isDesktopViewVisible", null),
          (0, n.gn)([a.ak], de.prototype, "onGameLaunched", null),
          (0, n.gn)([a.ak], de.prototype, "onAddPortal", null),
          (0, n.gn)([a.ak], de.prototype, "onRemovePortal", null),
          (0, n.gn)([a.ak], de.prototype, "onActiveOverlayScaleChange", null),
          (0, n.gn)([a.ak], de.prototype, "onActiveOverlayClosed", null),
          (0, n.gn)([a.ak], de.prototype, "onSteamButtonPressed", null),
          (0, n.gn)([s.LO], de, "s_dashboardUserDistance", void 0),
          (0, n.gn)([s.LO], de, "s_dashboardUserScale", void 0),
          (de = te = (0, n.gn)([b.Pi], de));
        const ce = (0, b.Pi)(function (e) {
            var t;
            if (!j.B.isVRGamepadUI) return null;
            let o =
              null !== (t = VRHTML.GetHostInfo(i.zA.Hostname)) && void 0 !== t
                ? t
                : "unknown";
            return l.createElement(
              i.s_,
              { target_dpi_panel_id: p.WR, interactive: !0 },
              l.createElement(
                "div",
                { className: "FloatingButtonRow" },
                l.createElement(
                  c.z,
                  { className: "ButtonControl", onClick: e.onClick },
                  l.createElement("span", null, o.toLowerCase(), " "),
                ),
              ),
            );
          }),
          he = (0, b.Pi)(function (e) {
            return null;
          }),
          ue = [
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                Q.mw.k_EVRDashboardTabIcon_Steam
              );
            },
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                Q.mw.k_EVRDashboardTabIcon_RunningGame
              );
            },
            (e) => null == e.icon(),
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                Q.mw.k_EVRDashboardTabIcon_DesktopDisplay
              );
            },
          ];
        function pe(e, t) {
          let o = -1,
            r = -1;
          for (let n = 0; n < ue.length && o < 0 && r < 0; n++)
            ue[n](e) && (o = n), ue[n](t) && (r = n);
          return (
            o < 0 && (o = ue.length),
            r < 0 && (r = ue.length),
            o == r ? e.tab_id() - t.tab_id() : o - r
          );
        }
        function me(e, t) {
          var o, r, n, i, a, s;
          let l;
          const d =
              null !== (o = null == e ? void 0 : e.product_name) && void 0 !== o
                ? o
                : "",
            c =
              null !== (r = null == t ? void 0 : t.product_name) && void 0 !== r
                ? r
                : "";
          if (((l = d.localeCompare(c)), 0 != l)) return l;
          const h =
              null !== (n = null == e ? void 0 : e.title) && void 0 !== n
                ? n
                : "",
            u =
              null !== (i = null == t ? void 0 : t.title) && void 0 !== i
                ? i
                : "";
          if (((l = h.localeCompare(u)), 0 != l)) return l;
          const p =
              null !== (a = null == e ? void 0 : e.hwnd) && void 0 !== a
                ? a
                : "",
            m =
              null !== (s = null == t ? void 0 : t.hwnd) && void 0 !== s
                ? s
                : "";
          return p.localeCompare(m);
        }
      },
      8178: (e, t, o) => {
        "use strict";
        o.d(t, {
          Sm: () => V,
          RA: () => S,
          sg: () => D,
          fT: () => C,
          Y3: () => f,
        });
        var r = o(655),
          n = o(1569),
          i = o(7056),
          a = o(7062),
          s = o(7294),
          l = o(424),
          d = o(4979),
          c = o(7176),
          h = o(1628),
          u = o(9626),
          p = o(421),
          m = o(6063),
          v = o(5177),
          g = o(8980),
          _ = o(7373);
        let y = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { bActive: !1 });
          }
          componentDidUpdate(e, t) {
            e.bVisible != this.props.bVisible &&
              (this.props.bVisible || this.endMove());
          }
          startMove() {
            this.setState({ bActive: !0 }),
              window.addEventListener("mouseup", this.endMove),
              this.props.onStartMove && this.props.onStartMove();
          }
          endMove() {
            this.setState({ bActive: !1 }),
              window.removeEventListener("mouseup", this.endMove),
              this.props.onEndMove && this.props.onEndMove();
          }
          render() {
            var e;
            if (!this.props.bVisible) return null;
            const t = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return s.createElement(
              n.kL,
              {
                target_id: this.state.bActive ? this.props.target_id : void 0,
                min_target_scale: this.props.min_target_scale,
                max_target_scale: this.props.max_target_scale,
              },
              s.createElement(
                n.Dd,
                { value: this.props.opacity },
                s.createElement(
                  n.VW,
                  { color: this.props.tint },
                  s.createElement(
                    n.s_,
                    {
                      height: 0.1 * _.g.k_nControlBarWidthMeters * t,
                      interactive: !0,
                      requires_laser: !0,
                      debug_name: "ResizeHandle",
                      hide_lasermouse_when_clicking: !0,
                    },
                    s.createElement(
                      v.z,
                      {
                        className: "ResizeHandleButton",
                        key: "move",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                      },
                      s.createElement("div", {
                        className: (0, g.LJ)("ResizeHandleBar", [
                          "ForceActive",
                          this.state.bActive,
                        ]),
                      }),
                    ),
                  ),
                ),
              ),
            );
          }
        };
        (0, r.gn)([i.ZP], y.prototype, "startMove", null),
          (0, r.gn)([i.ZP], y.prototype, "endMove", null),
          (y = (0, r.gn)([a.Pi], y));
        var b,
          S,
          f,
          k = o(792),
          R = o(9347),
          w = o(6459);
        !(function (e) {
          (e[(e.Dashboard = 0)] = "Dashboard"),
            (e[(e.LeftHand = 1)] = "LeftHand"),
            (e[(e.RightHand = 2)] = "RightHand"),
            (e[(e.World = 3)] = "World"),
            (e[(e.Theater = 4)] = "Theater");
        })(S || (S = {})),
          (function (e) {
            (e[(e.Flat = 0)] = "Flat"), (e[(e.Curved = 1)] = "Curved");
          })(f || (f = {}));
        const M = "TheaterCurvatureOriginId";
        function D(e) {
          return e == S.Dashboard || e == S.Theater;
        }
        function C(e) {
          return e == S.World;
        }
        function T(e) {
          switch (e) {
            case S.LeftHand:
              return "/user/hand/left";
            case S.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let V = (b = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, n.Oq)(),
                sParent: T(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = n.Kf),
              (this.m_moveDeviceRole = n.Kg.TrackedControllerRole_Invalid);
          }
          componentDidMount() {
            this.setInitialTransformForLocation();
          }
          componentDidUpdate(e, t) {
            e.dockLocation != this.props.dockLocation &&
              this.setState(
                {
                  sParent: T(this.props.dockLocation),
                  xfTransform: (0, n.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation,
              );
          }
          getDashboardScale() {
            return (
              (u.B.isVRGamepadUI
                ? u.B.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1) * _.g.getDashboardScale()
            );
          }
          getCurrentOverlaySize() {
            var e;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let o = { x: 0, y: 0 };
            try {
              o = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let r =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              n = (r * o.y) / o.x;
            if (
              ((this.props.sOverlayKey.startsWith(c.r4) ||
                this.props.sOverlayKey.startsWith(c.Vq)) &&
                ((n = R.N.k_nDesktopPanelBaseHeight * this.getDashboardScale()),
                (r = (n * o.x) / o.y)),
              this.m_fLastOverlayHeight && this.m_fLastOverlayHeight != n)
            ) {
              const e =
                (this.state.fOverlayScale * this.m_fLastOverlayHeight) / n;
              this.setState({ fOverlayScale: e });
            }
            return (this.m_fLastOverlayHeight = n), { width: r, height: n };
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case S.Dashboard:
              case S.LeftHand:
              case S.RightHand:
                return 0.25;
              case S.World:
                const e = u.B.m_mapOverlayState.get(this.props.sOverlayKey);
                return e ? e.fScale : 1;
              case S.Theater:
                const t = 2.35,
                  o = this.getCurrentOverlaySize();
                return null === o || 0 == o.height ? t : t / o.height;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case S.LeftHand:
                case S.RightHand: {
                  let e = this.state.fOverlayScale;
                  Math.abs(this.props.xfInitial.scale.x - 2) < 0.1 &&
                    (e = Math.min(2 * e, b.sfOverlayScaleMax)),
                    this.setState({
                      xfTransform: this.props.xfInitial,
                      fOverlayScale: e,
                    });
                  break;
                }
                case S.World: {
                  let e = this.state.fOverlayScale;
                  Math.abs(this.props.xfInitial.scale.x - 1) < 0.1 &&
                    (e = Math.max(e / 2, b.sfOverlayScaleMin)),
                    this.setState({
                      xfTransform: this.props.xfInitial,
                      fOverlayScale: e,
                    });
                  break;
                }
              }
              return;
            }
            let e = (0, n.Oq)();
            switch (
              ((e.rotation = (0, n.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case S.Dashboard:
              case S.LeftHand:
              case S.RightHand:
                this.setState({ xfTransform: e });
                break;
              case S.World:
                let t = 0;
                n.hz
                  .getInstance()
                  .requestSGTransform(
                    "system.systemui::active_overlay_transform",
                    t,
                  )
                  .then((t) => {
                    (e.rotation = t.rotation),
                      (e.translation = {
                        x: t.translation.x,
                        y: t.translation.y,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: e });
                  });
                break;
              case S.Theater:
                (e = (0, n.Oq)()),
                  (e.translation.y = 0.6),
                  (e.translation.z = -3.3),
                  this.setState({ xfTransform: e });
            }
          }
          onOverlayScaleChanged(e) {
            this.setState({ fOverlayScale: e });
          }
          computeDestination() {
            if (!this.state.bIsMoving) return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, n.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              n.Kg.TrackedControllerRole_LeftHand,
            ) != n.Kf && (t = VRHTML.GetPose("/user/hand/left", n.zq.Standing));
            let o = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              n.Kg.TrackedControllerRole_RightHand,
            ) != n.Kf &&
              (o = VRHTML.GetPose("/user/hand/right", n.zq.Standing));
            let r = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                o && r.push({ pose: o, location: S.RightHand });
                break;
              case "/user/hand/right":
                t && r.push({ pose: t, location: S.LeftHand });
                break;
              case "/user/head":
                t && r.push({ pose: t, location: S.LeftHand }),
                  o && r.push({ pose: o, location: S.RightHand });
            }
            if (0 == r.length)
              return void setTimeout(this.computeDestination, b.sfMovePulseMS);
            let i = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            r.forEach((e) => {
              let t = VRHTML.ChangeBasis(i, e.pose.xfDeviceToAbsoluteTracking);
              (0, n.LY)(t.translation) > b.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (l.L.Instance.triggerHaptic(n.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: S.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == S.World &&
                      this.state.destination == S.World)) &&
                  (l.L.Instance.triggerHaptic(n.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, b.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n",
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == n.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex,
              );
            let e,
              t,
              o = VRHTML.GetPose(this.m_nMoveDeviceIndex, n.zq.Standing);
            switch (this.props.dockLocation) {
              case S.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    n.Kg.TrackedControllerRole_LeftHand,
                  ) == n.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", n.zq.Standing);
                break;
              case S.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    n.Kg.TrackedControllerRole_RightHand,
                  ) == n.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", n.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, n.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: n.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case n.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case n.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let r = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              i = VRHTML.ChangeBasis(r, o.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: i,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == S.World,
                bIsMoving: !0,
              },
              this.computeDestination,
            ),
              window.addEventListener("mouseup", this.endMove);
          }
          endMove() {
            if (!this.state.bIsMoving) return;
            let e, t;
            if (
              "/user/hand/left" == this.state.sParent ||
              this.state.destination == S.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  n.Kg.TrackedControllerRole_LeftHand,
                ) == n.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", n.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == S.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  n.Kg.TrackedControllerRole_RightHand,
                ) == n.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", n.zq.Standing);
            }
            let o,
              r = {
                xfDeviceToAbsoluteTracking: (0, n.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: n.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case S.LeftHand:
                o = e;
                break;
              case S.RightHand:
                o = t;
                break;
              default:
                o = r;
            }
            let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, n.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                i.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              s = VRHTML.ChangeBasis(a, o.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: s,
              sParent: T(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                s,
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e, t, o;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let r = this.getCurrentOverlaySize();
            if (null === r) return null;
            (r.width *= this.state.fOverlayScale),
              (r.height *= this.state.fOverlayScale);
            let i,
              a = !this.props.bDashboardShown,
              l = !1,
              v = !1;
            if (this.props.dockLocation == S.Theater) {
              if (this.props.bHasSceneApp && k.C.m_bShowFloor) return null;
              a = !0;
              const t =
                null !==
                  (e = h.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e;
              (l = u.B.isDarkMode && t),
                (v = this.props.bCaptureVideo),
                u.B.eTheaterScreen == f.Curved && (i = M);
            }
            const g = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              _ =
                g && VRHTML.VROverlay.GetFlag(g, n.Z9.EnableControlBarKeyboard),
              R =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(c.r4),
              D = { x: 0, y: -0.15, z: 0.1 };
            if (a) {
              const e =
                  this.props.dockLocation == S.Theater ||
                  (null !==
                    (t = h.G3.settings.get(
                      "/settings/dashboard/inputCaptureEnabled",
                    )) &&
                    void 0 !== t &&
                    t),
                a =
                  null !==
                    (o = h.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== o
                    ? o
                    : 0.5,
                d = 0.5 * Math.pow(a, 2.2);
              let v = -0.1,
                g = 4,
                k = 1,
                C = 0.15,
                T = r.width,
                V = r.height,
                E = 0.75;
              const I = (0, n.iN)(c.Az, "Floating-Panel"),
                x = (e) =>
                  s.createElement(
                    n.wx,
                    {
                      parent_id: e.parent_id,
                      translation: { x: e.x_offset, y: 0.2, z: 0.01 },
                    },
                    s.createElement(y, {
                      target_id: I,
                      min_target_scale: 0.5,
                      max_target_scale: 1.5,
                      bVisible: !0,
                      scale: 1.5 * k,
                      tint: u.B.ControlBarTint,
                    }),
                  );
              return s.createElement(
                n.wx,
                { parent_path: void 0 },
                s.createElement(
                  n.wx,
                  {
                    transform_path: this.state.sParent,
                    transform: this.state.xfTransform,
                    id: "xf_widget",
                  },
                  s.createElement(
                    n.wx,
                    { translation: { y: E } },
                    s.createElement(
                      p.Z,
                      { lerp_speed: b.flGrabTransformLerpSpeed },
                      s.createElement(n.wx, { id: M, translation: { z: g } }),
                      s.createElement(
                        n.wx,
                        { translation: { y: -1 * E } },
                        s.createElement(
                          n.s_,
                          {
                            id: "Floating-Panel",
                            overlay_key: this.props.sOverlayKey,
                            height: V,
                            width:
                              u.B.m_eTheaterStereo != n.Ko.Mono ? T : void 0,
                            interactive: !0,
                            allow_input_capture: e,
                            undocked: !0,
                            origin:
                              this.props.dockLocation == S.Theater
                                ? { x: 0, y: -0.75 }
                                : n.Ic.BottomCenter,
                            curvature_origin_id: i,
                            stereoscopy: u.B.m_eTheaterStereo,
                          },
                          s.createElement(n.at, {
                            id: "Floating-Panel-BottomLeft",
                            location: n.Ic.BottomLeft,
                          }),
                          s.createElement(n.at, {
                            id: "Floating-Panel-BottomRight",
                            location: n.Ic.BottomRight,
                          }),
                          s.createElement(n.at, {
                            id: "Floating-Panel-BottomCenter",
                            location: n.Ic.BottomCenter,
                          }),
                          s.createElement(n.sl, {
                            mountedId: (0, n.iN)(
                              c.GN,
                              this.props.sOverlayKey + ".cursor",
                            ),
                          }),
                        ),
                        l &&
                          s.createElement(n.bt, {
                            target_id: I,
                            "near-z": v,
                            "far-z": 0.1,
                            specular: { color: { r: d, g: d, b: d } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == S.Theater &&
                          s.createElement(
                            s.Fragment,
                            null,
                            s.createElement(
                              n.wx,
                              {
                                parent_id: "Floating-Panel-BottomCenter",
                                translation: { z: 0.02 },
                              },
                              s.createElement(
                                n.s_,
                                {
                                  height: C,
                                  width: void 0,
                                  interactive: !0,
                                  requires_laser: !0,
                                  origin: n.Ic.TopCenter,
                                  curvature_origin_id: i,
                                },
                                s.createElement(
                                  "div",
                                  { className: "OverlayControlBar" },
                                  s.createElement(
                                    "div",
                                    { className: "Section" },
                                    !1,
                                    R &&
                                      s.createElement(w.zN, {
                                        key: "multitask",
                                        iconUrl:
                                          "/dashboard/images/icons/icon_multitasking_view.png",
                                        tooltipTranslation: D,
                                        onClick:
                                          this.props.ShowMultitaskingView,
                                      }),
                                    _ &&
                                      s.createElement(w.CS, {
                                        overlayKey: this.props.sOverlayKey,
                                        showTooltip: !1,
                                        modal: !0,
                                        additionalClassNames: "LargeIcon",
                                      }),
                                    s.createElement(w.zN, {
                                      key: "darkmode",
                                      iconUrl: u.B.isDarkMode
                                        ? "/dashboard/images/icons/svr_lights_on.svg"
                                        : "/dashboard/images/icons/svr_lights_off.svg",
                                      iconIsInverted: !1,
                                      onClick: () =>
                                        (u.B.m_bDarkMode = !u.B.isDarkMode),
                                      additionalClassNames: "LargeIcon",
                                    }),
                                    s.createElement(w.zN, {
                                      key: "curved",
                                      iconUrl:
                                        u.B.eTheaterScreen == f.Curved
                                          ? "/dashboard/images/icons/svr_screen_curvature_off.svg"
                                          : "/dashboard/images/icons/svr_screen_curvature_on.svg",
                                      iconIsInverted: !1,
                                      onClick: () =>
                                        u.B.ToggleTheaterCurvature(),
                                      additionalClassNames: "LargeIcon",
                                    }),
                                    s.createElement(w.zN, {
                                      key: "dock",
                                      iconUrl:
                                        "/dashboard/images/icons/svr_theater.svg",
                                      onClick: () =>
                                        this.props.onDockOverlay(
                                          this.props.sOverlayKey,
                                          S.Dashboard,
                                        ),
                                    }),
                                  ),
                                ),
                              ),
                              s.createElement(
                                n.wx,
                                { translation: { y: -C - 0.03, z: 0.03 } },
                                s.createElement(m.J, {
                                  scale: k,
                                  tint: u.B.ControlBarTint,
                                  curvature_origin_id: i,
                                }),
                              ),
                            ),
                            s.createElement(x, {
                              parent_id: "Floating-Panel-BottomLeft",
                              x_offset: -0.03,
                            }),
                            s.createElement(x, {
                              parent_id: "Floating-Panel-BottomRight",
                              x_offset: 0.03,
                            }),
                          ),
                      ),
                    ),
                  ),
                ),
              );
            }
            let C = b.sfOverlayTrayHeight * this.getDashboardScale(),
              T = b.sfOverlayScaleMin,
              V = b.sfOverlayScaleMax,
              E = [0.5, 1, 1.5];
            (this.props.dockLocation != S.LeftHand &&
              this.props.dockLocation != S.RightHand) ||
              ((C *= 0.4), (T = 0.1), (V = 1.5), (E = [0.25, 0.5, 1]));
            const I = r.height + C,
              x = Math.max(r.width, 0.175),
              P = I / 2 - C,
              L = u.B.isVRGamepadUI
                ? {
                    r: (14 / 255) * 0.1,
                    g: (20 / 255) * 0.1,
                    b: (27 / 255) * 0.1,
                  }
                : { r: 0.016, g: 0.017, b: 0.02 };
            return s.createElement(
              n.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              s.createElement(
                n.wx,
                {
                  translation: { y: P, z: -0.005 },
                  scale: { x, y: I, z: 0.008 },
                },
                s.createElement(
                  n.VW,
                  { color: L },
                  s.createElement(n.gQ, { solid: !0, source: "unit_cube" }),
                ),
              ),
              s.createElement(
                n.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: r.height,
                  width: void 0,
                  interactive: !0,
                  undocked: !0,
                  origin: n.Ic.BottomCenter,
                },
                s.createElement(n.sl, {
                  mountedId: (0, n.iN)(
                    c.GN,
                    this.props.sOverlayKey + ".cursor",
                  ),
                }),
              ),
              s.createElement(
                n.s_,
                {
                  height: C,
                  width: void 0,
                  interactive: !0,
                  origin: n.Ic.TopCenter,
                },
                s.createElement(
                  "div",
                  { className: "OverlayControlBar" },
                  s.createElement(
                    "div",
                    { className: "Section" },
                    s.createElement(d.iR, {
                      additionalClassName: "OverlayControlBarSlider",
                      min: T,
                      max: V,
                      value: this.state.fOverlayScale,
                      valueStyleVariant: d.px.OnHandle,
                      onChange: this.onOverlayScaleChanged,
                      detents: E,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                    }),
                    R &&
                      s.createElement(w.zN, {
                        key: "multitask",
                        iconUrl:
                          "/dashboard/images/icons/icon_multitasking_view.png",
                        tooltipTranslation: D,
                        onClick: this.props.ShowMultitaskingView,
                      }),
                    _ &&
                      s.createElement(w.CS, {
                        overlayKey: this.props.sOverlayKey,
                        showTooltip: !1,
                      }),
                    s.createElement(w.zN, {
                      key: "move",
                      iconUrl: "/dashboard/images/icons/icon_move.png",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                    }),
                    s.createElement(w.zN, {
                      key: "undock",
                      iconUrl: "/dashboard/images/icons/icon_return.png",
                      iconIsInverted: !1,
                      onClick: () =>
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          S.Dashboard,
                        ),
                    }),
                  ),
                ),
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    n.wx,
                    {
                      parent_path:
                        this.state.destination == S.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    s.createElement(n.x1, {
                      target_id: "xf_widget",
                      thickness: 0.001,
                      start_buffer: 0.01,
                      end_buffer: 0.01,
                    }),
                  ),
                ),
            );
          }
        });
        (V.sfMaxDockDist = 0.4),
          (V.sfMovePulseMS = 100),
          (V.sfOverlayTrayHeight = 0.12),
          (V.sfOverlayScaleMin = 0.25),
          (V.sfOverlayScaleMax = 2),
          (V.flGrabTransformLerpSpeed = 0.15),
          (0, r.gn)([i.ZP], V.prototype, "onOverlayScaleChanged", null),
          (0, r.gn)([i.ZP], V.prototype, "computeDestination", null),
          (0, r.gn)([i.ZP], V.prototype, "startMove", null),
          (0, r.gn)([i.ZP], V.prototype, "endMove", null),
          (V = b = (0, r.gn)([a.Pi], V));
      },
      1464: (e, t, o) => {
        "use strict";
        o.d(t, { a: () => u });
        var r = o(1569),
          n = o(7294),
          i = o(7062),
          a = o(9626),
          s = o(7176),
          l = o(5328);
        function d(e) {
          const { children: t, invertParentPanelPitch: o, pitch: i } = e;
          return o || 0 != i
            ? n.createElement(
                r.wx,
                {
                  invert_parent_panel_pitch: null != o && o,
                  curvature_pitch: null != i ? i : 0,
                },
                t,
              )
            : n.createElement(n.Fragment, null, t);
        }
        function c(e) {
          const { children: t, offsetPixels: o } = e;
          if (null == o || (0 == o.x && 0 == o.y && 0 == o.z))
            return n.createElement(n.Fragment, null, t);
          const i = (0, r.mT)(o, a.B.m_fVRGamepadUI_MetersPerPixel);
          return n.createElement(r.wx, { translation: i }, t);
        }
        function h(e) {
          const { children: t, rotation: o } = e;
          return null == o || (0 == o.x && 0 == o.y && 0 == o.z)
            ? n.createElement(n.Fragment, null, t)
            : n.createElement(r.wx, { rotation: o }, t);
        }
        function u(e) {
          var t,
            o,
            i,
            l,
            u,
            p,
            m,
            v,
            g,
            _,
            y,
            b,
            S,
            f,
            k,
            R,
            w,
            M,
            D,
            C,
            T,
            V,
            E,
            I,
            x,
            P,
            L,
            O,
            B;
          const { popupRequest: H, reparent: A } = e,
            N = null == A || A,
            F = {
              x:
                null !==
                  (o =
                    null === (t = H.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== o
                  ? o
                  : 0,
              y:
                null !==
                  (l =
                    null === (i = H.origin_on_parent) || void 0 === i
                      ? void 0
                      : i.y) && void 0 !== l
                  ? l
                  : 0,
            },
            U = {
              x:
                null !==
                  (p =
                    null === (u = H.origin_on_popup) || void 0 === u
                      ? void 0
                      : u.x) && void 0 !== p
                  ? p
                  : 0,
              y:
                null !==
                  (v =
                    null === (m = H.origin_on_popup) || void 0 === m
                      ? void 0
                      : m.y) && void 0 !== v
                  ? v
                  : 0,
            },
            G = {
              u:
                null !==
                  (_ =
                    null === (g = H.clip_rect) || void 0 === g
                      ? void 0
                      : g.u_min) && void 0 !== _
                  ? _
                  : 0,
              v:
                null !==
                  (b =
                    null === (y = H.clip_rect) || void 0 === y
                      ? void 0
                      : y.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            W = {
              u:
                null !==
                  (f =
                    null === (S = H.clip_rect) || void 0 === S
                      ? void 0
                      : S.u_max) && void 0 !== f
                  ? f
                  : 1,
              v:
                null !==
                  (R =
                    null === (k = H.clip_rect) || void 0 === k
                      ? void 0
                      : k.v_max) && void 0 !== R
                  ? R
                  : 1,
            },
            z = {
              x:
                null !==
                  (M =
                    null === (w = H.offset) || void 0 === w
                      ? void 0
                      : w.x_pixels) && void 0 !== M
                  ? M
                  : 0,
              y:
                null !==
                  (C =
                    null === (D = H.offset) || void 0 === D
                      ? void 0
                      : D.y_pixels) && void 0 !== C
                  ? C
                  : 0,
              z:
                null !==
                  (V =
                    null === (T = H.offset) || void 0 === T
                      ? void 0
                      : T.z_pixels) && void 0 !== V
                  ? V
                  : 0,
            },
            K = {
              x:
                null !==
                  (I =
                    null === (E = H.rotation) || void 0 === E
                      ? void 0
                      : E.pitch_degrees) && void 0 !== I
                  ? I
                  : 0,
              y:
                null !==
                  (P =
                    null === (x = H.rotation) || void 0 === x
                      ? void 0
                      : x.yaw_degrees) && void 0 !== P
                  ? P
                  : 0,
            },
            q = null === (L = H.inherit_parent_pitch) || void 0 === L || L,
            X = null === (O = H.inherit_parent_curvature) || void 0 === O || O,
            j = null === (B = H.interactive) || void 0 === B || B,
            Z = (function (e) {
              var t, o, r;
              const n =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                i =
                  null !==
                    (r =
                      null === (o = null == e ? void 0 : e.offset) ||
                      void 0 === o
                        ? void 0
                        : o.z_pixels) && void 0 !== r
                    ? r
                    : 0;
              return n == s.BZ && i >= 0 ? -0.5 : 0;
            })(H);
          n.useLayoutEffect(
            () => r.n0.Current().forceLayoutUpdate(),
            [G.u, G.v, W.u, W.v],
          );
          const Q = n.createElement(
            r.at,
            { key: H.dashboard_popup_request_id, location: F },
            n.createElement(
              d,
              { invertParentPanelPitch: !q },
              n.createElement(
                c,
                { offsetPixels: z },
                n.createElement(
                  h,
                  { rotation: K },
                  n.createElement(r.s_, {
                    debug_name: `VRGamepadUI-DashboardPopup-Panel-${H.dashboard_popup_request_id}`,
                    interactive: j,
                    curvature: X ? "inherit-from-parent-panel" : void 0,
                    overlay_key: H.popup_overlay_key,
                    origin: U,
                    meters_per_pixel: a.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.03,
                    sort_depth_bias: Z,
                    uv_min: G,
                    uv_max: W,
                  }),
                ),
              ),
            ),
          );
          return N
            ? n.createElement(
                r.Sb,
                {
                  parent_overlay_key: H.parent_overlay_key,
                  key: H.dashboard_popup_request_id,
                },
                Q,
              )
            : Q;
        }
        (0, i.Pi)((e) => {
          const t = l.O.GetActiveDashboardPopups();
          return n.createElement(
            n.Fragment,
            null,
            t.map((e) =>
              n.createElement(u, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              }),
            ),
          );
        });
      },
      6459: (e, t, o) => {
        "use strict";
        o.d(t, {
          B8: () => N,
          CS: () => Z,
          D6: () => X,
          Eu: () => T,
          IO: () => H,
          M3: () => x,
          NT: () => F,
          Rk: () => G,
          Yd: () => V,
          dw: () => A,
          dy: () => P,
          j4: () => W,
          j6: () => U,
          lL: () => E,
          z: () => z,
          zN: () => j,
          zk: () => B,
        });
        var r,
          n,
          i = o(655),
          a = o(1569),
          s = o(7056),
          l = o(2188),
          d = o(7062),
          c = o(7294),
          h = o(5177),
          u = o(9755),
          p = o(7475),
          m = o(4979),
          v = o(3107),
          g = o(2749),
          _ = o(7176),
          y = o(3568),
          b = o(7008),
          S = o(8980),
          f = o(9897),
          k = o(1628),
          R = o(8322),
          w = o.n(R),
          M = o(7726),
          D = o(7471),
          C = o(9626);
        const T = new l.vP();
        function V(e) {
          const { summonOverlayKey: t } = e,
            { ids: o, anchors: r } = c.useMemo(() => {
              const e = "DashboardPanel_" + t,
                o = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                };
              return {
                ids: o,
                anchors: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(a.at, {
                    id: o.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  c.createElement(a.at, {
                    id: o.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  c.createElement(a.at, {
                    id: o.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  c.createElement(a.at, {
                    id: o.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  }),
                ),
              };
            }, [t]);
          return (
            c.useEffect(
              () => (
                T.set(t, o),
                () => {
                  T.get(t) === o && T.delete(t);
                }
              ),
              [t, o],
            ),
            t ? r : null
          );
        }
        const E = (0, d.Pi)(function (e) {
            return c.createElement(
              I,
              Object.assign({}, e, { VRGamepadUI: C.B.isVRGamepadUI }),
            );
          }),
          I = (e) => {
            var t, o, r;
            const n = e.VRGamepadUI,
              i = c.useRef(null),
              s = c.useRef(null);
            c.useEffect(() => {
              var e, t;
              return null === (e = i.current) || void 0 === e
                ? void 0
                : e.setFloatingViewStack(
                    null === (t = s.current) || void 0 === t
                      ? void 0
                      : t.viewStack,
                  );
            });
            const l = null === (t = e.scrollable) || void 0 === t || t,
              d =
                null !== (o = e.foregroundReflectMultiplier) && void 0 !== o
                  ? o
                  : 1,
              m =
                null ===
                  (r = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r
                  ? _.ml
                  : null;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.s_,
                {
                  visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                  debug_name: "homepanelbackground",
                  curvature_origin_id: m,
                  origin: a.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  target_dpi_panel_id: n ? void 0 : _.WR,
                  target_dpi_multiplier: n ? void 0 : 2,
                  width: n ? 2.67 : void 0,
                  reflect: n ? 0 : 0.01,
                  sampler: a.Vv.SingleTap,
                },
                c.createElement(V, { summonOverlayKey: e.summonOverlayKey }),
                c.createElement(
                  u.vz,
                  { ref: i },
                  c.createElement("div", {
                    className: (0, S.LJ)(
                      "DashboardPanelBackground",
                      e.additionalClassNames,
                    ),
                    style: e.additionalStyle,
                  }),
                ),
              ),
              c.createElement(
                a.wx,
                { translation: { z: 1e-5 } },
                c.createElement(
                  a.s_,
                  {
                    visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: m,
                    origin: a.Ic.BottomCenter,
                    interactive: !0,
                    scrollable: l,
                    target_dpi_panel_id: n ? void 0 : _.WR,
                    reflect: n ? void 0 : 0.2 * d,
                    width: n ? 2.67 : void 0,
                  },
                  c.createElement(
                    u.sC,
                    { ref: s },
                    c.createElement(
                      h.q,
                      null,
                      c.createElement(
                        p.P,
                        {
                          scrollDirection: l ? p.I.Vertical : p.I.None,
                          className: (0, S.LJ)(
                            "DashboardPanel",
                            e.additionalClassNames,
                          ),
                          style: e.additionalStyle,
                        },
                        e.children,
                      ),
                    ),
                  ),
                ),
              ),
            );
          };
        class x extends c.Component {
          constructor(e) {
            super(e), (this.state = { time: new Date() });
          }
          componentDidMount() {
            let e = 60 - (new Date().getSeconds() % 60) + 0.01;
            this.m_clockUpdateTimeout = window.setTimeout(
              this.updateTime,
              1e3 * e,
            );
          }
          componentWillUnmount() {
            clearTimeout(this.m_clockUpdateTimeout);
          }
          updateTime() {
            this.setState({ time: new Date() }),
              (this.m_clockUpdateTimeout = window.setTimeout(
                this.updateTime,
                6e4,
              ));
          }
          render() {
            const e = y.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              o = null;
            const r = t.toLowerCase(),
              n = Math.max(r.lastIndexOf("am"), r.lastIndexOf("pm"));
            return (
              n >= 0 && ((o = t.substring(n)), (t = t.substring(0, n - 1))),
              c.createElement(
                "div",
                { className: "ClockContainer" },
                c.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  c.createElement("span", { className: "Suffix" }, o),
                ),
              )
            );
          }
        }
        function P(e) {
          return c.createElement(
            h.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, i.gn)([s.ak], x.prototype, "updateTime", null);
        let L = (r = class extends c.Component {
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
              o = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              r =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return c.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              c.createElement(
                b.d,
                { allowableParentSelectors: [".DashboardMain"] },
                c.createElement(
                  a.wx,
                  { translation: o },
                  c.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: _.WR,
                      curvature_origin_id: r,
                    },
                    c.createElement(
                      "div",
                      { className: "ControlBarButtonTooltip" },
                      this.props.text,
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (L.s_CurrentlyShownTooltip = null),
          (0, i.gn)([l.Fl], L.prototype, "isShowingTooltip", null),
          (0, i.gn)([l.aD.bound], L.prototype, "show", null),
          (0, i.gn)([l.aD.bound], L.prototype, "hide", null),
          (0, i.gn)([l.LO], L, "s_CurrentlyShownTooltip", void 0),
          (L = r = (0, i.gn)([d.Pi], L));
        class O extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !O.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  O.k_rsThumbnailHashesToInvert.indexOf(w().hash(e)) >= 0 &&
                  (t = !0),
                O.s_mapShouldInvertThumbnail.set(e, t);
            }
            return O.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              o = O.ShouldInvertThumbnail(this.props.src);
            return c.createElement(
              "div",
              { className: "Icon" },
              t &&
                c.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              c.createElement("img", {
                className: (0, S.LJ)(["BlackToWhite", o]),
                src: this.props.src,
              }),
            );
          }
        }
        var B, H;
        (O.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (O.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(B || (B = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(H || (H = {}));
        const A = (e) =>
          c.createElement(
            "div",
            { className: (0, S.LJ)("ControlBarGroup", B[e.style]) },
            e.children,
          );
        let N = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
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
            return c.createElement(
              h.z,
              {
                className: (0, S.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  H[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : H.Center
                  ] + "Image",
                  ["Disabled", !1 === this.props.enabled],
                  ["Active", !!this.props.active],
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
                releaseSoundEffect: v.y.ControlBarButtonClick,
              },
              this.props.centerPanelAnchorID &&
                c.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  c.createElement(b.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              c.createElement(L, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(O, { src: this.props.imageUrl }),
            );
          }
        };
        (0, i.gn)([s.ak], N.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], N.prototype, "onMouseLeave", null),
          (N = (0, i.gn)([d.Pi], N));
        const F = (e) =>
          c.createElement(
            A,
            { style: e.style },
            c.createElement(N, Object.assign({}, e)),
          );
        class U extends c.Component {
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
                    this.onBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceRoleChangedEvents(
                      this.onDeviceRoleChanged,
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
              o = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (o = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (o = this.props.deviceIndex),
              o != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = o)),
              o != a.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  o,
                  a.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  o,
                  a.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  o,
                  a.Uk.DeviceIsCharging_Bool,
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + U.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - U.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                o,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let r = M.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style,
            );
            r != this.state.batteryIconPath &&
              this.setState({ batteryIconPath: r });
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
            (e != a.XX.Activated && e != a.XX.Deactivated) || this.update();
          }
          render() {
            return c.createElement(
              "div",
              { className: "BatteryStatus" },
              this.devicePowerUsage &&
                c.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  Math.round(10 * this.devicePowerUsage) / 10,
                  " W ",
                ),
              c.createElement("img", { src: this.state.batteryIconPath }),
            );
          }
        }
        (U.kBatteryLevelHysteresis = 0.02),
          (0, i.gn)([s.ak], U.prototype, "updateControllerStatus", null),
          (0, i.gn)([s.ak], U.prototype, "onBatteryStateChanged", null),
          (0, i.gn)([s.ak], U.prototype, "onDeviceRoleChanged", null),
          (0, i.gn)([s.ak], U.prototype, "onDeviceEvent", null),
          c.Component;
        const G = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && c.createElement(O, { src: e.iconUrl, shadow: !0 }),
            c.createElement("span", { className: "NoWrapText" }, e.name),
          );
        class W extends c.Component {
          constructor() {
            super(...arguments),
              (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
              (this.m_resizeObserver = null),
              (this.m_refPanelElem = c.createRef()),
              (this.m_refBackgroundElem = c.createRef());
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
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.m_refPanelElem.current),
              this.updateBackgroundSize());
          }
          render() {
            var e, t, o;
            const r = this.props.position,
              n = Math.asin(r) / Math.PI,
              i = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: r, y: -1 } },
                c.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(n),
                    z: -0.03 * Math.abs(n),
                  },
                  rotation: { y: 15 * n, z: 2 * n },
                }),
              ),
              c.createElement(
                b.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                c.createElement(
                  a.VW,
                  { color: this.props.tintColor },
                  c.createElement(
                    g.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    c.createElement(
                      a.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * i, z: -0.01 },
                        scale: i,
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id:
                            null !== (t = this.props.curvatureOriginId) &&
                            void 0 !== t
                              ? t
                              : null,
                          origin: a.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          target_dpi_panel_id: _.WR,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        c.createElement(
                          "div",
                          {
                            className: (0, S.LJ)(
                              "ControlBarTray",
                              this.props.additionalClassNames,
                            ),
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseMove: this.props.onMouseMove,
                            onMouseLeave: this.props.onMouseLeave,
                            ref: this.m_refPanelElem,
                          },
                          this.props.children,
                        ),
                      ),
                      c.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        c.createElement(
                          a.s_,
                          {
                            curvature_origin_id:
                              null !== (o = this.props.curvatureOriginId) &&
                              void 0 !== o
                                ? o
                                : null,
                            origin: a.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: _.WR,
                            target_dpi_multiplier: 2,
                            reflect: 0.005,
                            sampler: a.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                          },
                          c.createElement("div", {
                            className: "ControlBarTrayBackground",
                            ref: this.m_refBackgroundElem,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, i.gn)([s.ak], W.prototype, "onResizeObserved", null),
          (0, i.gn)([s.ak], W.prototype, "updateBackgroundSize", null),
          (0, i.gn)([s.ak], W.prototype, "onPortalDidMount", null);
        let z = class extends c.Component {
          constructor() {
            super(...arguments),
              (this.m_refSlider = c.createRef()),
              (this.m_refTray = c.createRef()),
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
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && k.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!k.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice",
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return c.createElement(
              W,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  q,
                  {
                    onClick: f.f.Instance.toggleMicrophoneMute,
                    title: f.f.Instance.microphoneMuted
                      ? (0, y.Xx)("#UnmuteMicrophone")
                      : (0, y.Xx)("#MuteMicrophone"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                c.createElement(K, {
                  title: (0, y.Xx)("#MicrophoneVolume"),
                  value: f.f.Instance.microphoneVolume,
                  onChange: f.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, S.LJ)([
                    "Muted",
                    f.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                c.createElement(
                  "div",
                  { className: "Section" },
                  c.createElement(
                    q,
                    {
                      onClick: f.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: f.f.Instance.mirrorMuted
                        ? (0, y.Xx)("#UnmuteAudioMirror")
                        : (0, y.Xx)("#MuteAudioMirror"),
                    },
                    c.createElement("img", {
                      className: "BlackToWhite",
                      src: f.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  c.createElement(K, {
                    title: (0, y.Xx)("#AudioMirrorVolume"),
                    value: f.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: f.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, S.LJ)([
                      "Muted",
                      f.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: v.y.VolumePreview,
                  }),
                ),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  q,
                  {
                    onClick: f.f.Instance.toggleMute,
                    title: f.f.Instance.muted
                      ? (0, y.Xx)("#Unmute_Headset")
                      : (0, y.Xx)("#Mute_Headset"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                c.createElement(K, {
                  title: (0, y.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: f.f.Instance.volume,
                  onChange: f.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.muted]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, i.gn)([s.ak], z.prototype, "onSliderMouseEnter", null),
          (0, i.gn)([s.ak], z.prototype, "onSliderMouseLeave", null),
          (0, i.gn)([s.ak], z.prototype, "onSliderFinalChange", null),
          (0, i.gn)([l.Fl], z.prototype, "showAudioMirrorControls", null),
          (0, i.gn)([l.Fl], z.prototype, "enableAudioMirrorControls", null),
          (z = (0, i.gn)([d.Pi], z));
        let K = class extends c.Component {
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
            return c.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                c.createElement(L, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              c.createElement(
                m.iR,
                Object.assign({}, e, {
                  onMouseEnter: this.onMouseEnter,
                  onMouseLeave: this.onMouseLeave,
                  onInteractionStart: this.onInteractionStart,
                  onInteractionEnd: this.onInteractionEnd,
                  ref: this.props.sliderRef,
                }),
              ),
            );
          }
        };
        (0, i.gn)([s.ak], K.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], K.prototype, "onMouseLeave", null),
          (0, i.gn)([s.ak], K.prototype, "onInteractionStart", null),
          (0, i.gn)([s.ak], K.prototype, "onInteractionEnd", null),
          (K = (0, i.gn)([d.Pi], K));
        let q = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter(e) {
            var t, o, r;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (r = (o = this.props).onMouseEnter) ||
                void 0 === r ||
                r.call(o, e);
          }
          onMouseLeave(e) {
            var t, o, r;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (r = (o = this.props).onMouseLeave) ||
                void 0 === r ||
                r.call(o, e);
          }
          render() {
            return c.createElement(
              h.z,
              Object.assign({}, this.props, {
                className: (0, S.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className,
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                c.createElement(L, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, i.gn)([s.ak], q.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], q.prototype, "onMouseLeave", null),
          (q = (0, i.gn)([d.Pi], q));
        let X = (n = class extends c.Component {
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
                this.onWindowMouseMove,
              ),
              null === (o = (t = this.props).onShowTray) ||
                void 0 === o ||
                o.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, a.JR)((0, a.Zj)(t, this.m_vecOriginalMousePosition)) >
              n.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
            var e, t, o, r;
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              (null === (e = this.slider) || void 0 === e
                ? void 0
                : e.isSliding) &&
                (null === (o = (t = this.props).onHideTray) ||
                  void 0 === o ||
                  o.call(t)),
              null === (r = this.slider) ||
                void 0 === r ||
                r.stopExternalSliding();
          }
          render() {
            return c.createElement(N, {
              imageUrl: f.f.Instance.muted
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
        (X.MIN_DRAG_THRESHOLD = 35),
          (0, i.gn)([s.ak], X.prototype, "onButtonMouseDown", null),
          (0, i.gn)([s.ak], X.prototype, "onWindowMouseMove", null),
          (0, i.gn)([s.ak], X.prototype, "onWindowMouseUp", null),
          (X = n = (0, i.gn)([d.Pi], X));
        const j = (e) => {
          var t;
          const o = c.useRef();
          return c.createElement(
            h.z,
            {
              className: (0, S.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl],
                e.additionalClassNames,
              ),
              onClick: e.onClick,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onMouseEnter: () => {
                var t;
                null === (t = o.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = o.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              c.createElement(L, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: o,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: (0, D.Z)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            e.icon,
          );
        };
        function Z(e) {
          var t, o;
          const r = (0, S.aB)(),
            n =
              null !== (t = null == r ? void 0 : r.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == r.overlayKey,
            i = c.useRef(!1),
            s =
              null === (o = e.showTooltip) || void 0 === o || o
                ? n
                  ? (0, y.Xx)("#HideKeyboardTooltip")
                  : (0, y.Xx)("#ShowKeyboardTooltip")
                : void 0;
          return c.createElement(
            j,
            Object.assign(
              {
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: s,
                additionalClassNames: (0, S.LJ)(
                  "Keyboard",
                  e.additionalClassNames,
                ),
                onMouseDown: () => {
                  i.current = n;
                },
                onClick: () => {
                  if (i.current) VRHTML.VROverlay.HideKeyboard();
                  else {
                    let t =
                      a.vS.Minimal | a.vS.HideDoneKey | a.vS.ShowArrowKeys;
                    e.modal && (t |= a.vS.Modal),
                      VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.overlayKey,
                        a.Pw.Normal,
                        a.l0.SingleLine,
                        t,
                        "Desktop Text",
                        1024,
                        "",
                        0,
                      ),
                      VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                        e.overlayKey,
                        {},
                      );
                  }
                },
                active: n,
              },
              e,
            ),
          );
        }
      },
      9347: (e, t, o) => {
        "use strict";
        o.d(t, { N: () => y, e: () => _ });
        var r,
          n,
          i = o(655),
          a = o(1569),
          s = o(7056),
          l = o(2477),
          d = o(2188),
          c = o(7062),
          h = o(7294),
          u = o(7475),
          p = o(7176),
          m = o(3568),
          v = o(1628),
          g = o(6459);
        let _ = (r = class extends h.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = h.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(r.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var o, r;
            null === (o = this.m_refWindowScrollPanel.current) ||
              void 0 === o ||
              o.scrollTo({
                left:
                  null === (r = this.m_refWindowScrollPanel.current) ||
                  void 0 === r
                    ? void 0
                    : r.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, o, r;
            if (
              !this.state.desktopView ||
              (null === (e = this.state.desktopView) || void 0 === e
                ? void 0
                : e.state.bIsUsingSteamDesktop)
            )
              return null;
            const n =
                this.props.bWindowViewEnabled ||
                (null === (t = this.state.desktopView) || void 0 === t
                  ? void 0
                  : t.state.desktopIndices.length) > 1,
              i = { x: 0, y: -0.15, z: 0.1 };
            return h.createElement(
              g.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              n &&
                h.createElement(
                  u.P,
                  {
                    scrollDirection: u.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  h.createElement(
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
                          return h.createElement(g.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, m.Xx)("#Desktop_X", e),
                            tooltipTranslation: i,
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
                      null === (r = this.state.desktopView) || void 0 === r
                        ? void 0
                        : r.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, o, r;
                      return h.createElement(g.zN, {
                        additionalClassNames: "ViewButton",
                        iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        key: e,
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.state.sCurrentWindowOverlayKey) == e,
                        title:
                          null ===
                            (r = this.props.mapWindows.get(
                              null === (o = this.state.desktopView) ||
                                void 0 === o
                                ? void 0
                                : o.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === r
                            ? void 0
                            : r.title,
                        tooltipTranslation: i,
                        onClick: () => {
                          var t;
                          return null === (t = this.state.desktopView) ||
                            void 0 === t
                            ? void 0
                            : t.onWindowViewChange(e);
                        },
                      });
                    }),
                  ),
                ),
              this.props.bWindowViewEnabled &&
                h.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  h.createElement(g.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, m.Xx)("#AddView"),
                    tooltipTranslation: i,
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  }),
                ),
            );
          }
        });
        (_.k_sMailboxName = "systemui_desktoptray"),
          (_ = r = (0, i.gn)([c.Pi], _));
        let y = (n = class extends h.Component {
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
              this.m_mailbox.Init(n.k_sMailboxName).then(() => {}),
              l.Q.SteamVR.SetImplementation(
                "DashboardDesktopWindowClicked",
                (e) => {
                  var t, o;
                  const r =
                    null !==
                      (o =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== o
                      ? o
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == r)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(p.gB)
                      );
                  const n = { type: "request_spawn_window_view", hwnd: r };
                  if (!this.m_mailbox.SendMessage("desktopview", n))
                    throw new Error(
                      "Failed to send mailbox message request_spawn_window_view",
                    );
                },
              );
          }
          componentDidMount() {
            null ===
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay(p.Xl))
              ? (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewReadyEvents(
                    this.onDesktopViewReady,
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewUpdatingEvents(
                    this.onDesktopViewUpdating,
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
                  (e = v.G3.settings.get("/settings/dashboard/desktopIndex")) &&
                void 0 !== e
              ? e
              : 1;
          }
          get currentWindowHwnd() {
            return "" == this.state.sCurrentWindowOverlayKey
              ? ""
              : this.state.mapWindowInfo.get(
                  this.state.sCurrentWindowOverlayKey,
                ).sHwnd;
          }
          onDesktopScaleChange(e) {
            this.currentDesktopIndex > 0 &&
              v.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e,
              );
          }
          onDesktopChange(e) {
            v.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
          hasWindowView(e) {
            return this.state.mapWindowInfo.has(e);
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
              (e = v.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > o.length &&
              v.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: o });
          }
          ShowMultitaskingView() {
            this.m_mailbox.SendMessage("desktopview", {
              type: "request_task_view",
            });
          }
          renderControlBarButtons(e) {
            const t =
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView()) &&
              "" == this.state.sCurrentWindowOverlayKey;
            return h.createElement(
              h.Fragment,
              null,
              t &&
                h.createElement(g.zN, {
                  iconUrl: "/dashboard/images/icons/icon_multitasking_view.png",
                  title: (0, m.Xx)("#MultitaskingView"),
                  tooltipTranslation: e,
                  onClick: this.ShowMultitaskingView,
                }),
            );
          }
          render() {
            var e;
            const t =
              null ===
                (e = v.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? p.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? h.createElement(a.sl, { mountedId: (0, a.iN)(p.GN, p.Xl) })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? h.createElement(
                      g.lL,
                      { visible: !0, summonOverlayKey: p.gB },
                      h.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        h.createElement(
                          "h2",
                          null,
                          (0, m.Xx)("#NoDesktopFound"),
                        ),
                      ),
                    )
                  : -1 == this.currentDesktopIndex
                  ? h.createElement(
                      h.Fragment,
                      null,
                      h.createElement(
                        a.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height: n.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        h.createElement(g.Yd, { summonOverlayKey: p.gB }),
                        h.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            p.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor",
                          ),
                        }),
                      ),
                    )
                  : h.createElement(
                      h.Fragment,
                      null,
                      h.createElement(
                        a.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height: n.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        h.createElement(g.Yd, { summonOverlayKey: p.gB }),
                        h.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            p.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor",
                          ),
                        }),
                      ),
                    )
                : h.createElement(
                    g.lL,
                    { visible: !0, summonOverlayKey: p.gB },
                    h.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      h.createElement(
                        "h2",
                        null,
                        (0, m.Xx)("#DesktopViewsUpdating"),
                      ),
                    ),
                  )
              : null;
          }
        });
        (y.k_sMailboxName = "systemui_desktopview"),
          (y.k_nDesktopPanelBaseHeight = 2),
          (0, i.gn)([d.Fl], y.prototype, "desktopCount", null),
          (0, i.gn)([d.Fl], y.prototype, "sCurrentOverlayKey", null),
          (0, i.gn)([d.Fl], y.prototype, "currentDesktopIndex", null),
          (0, i.gn)([d.Fl], y.prototype, "currentWindowHwnd", null),
          (0, i.gn)([s.ZP], y.prototype, "onDesktopScaleChange", null),
          (0, i.gn)([s.ZP], y.prototype, "onDesktopChange", null),
          (0, i.gn)([s.ZP], y.prototype, "onDesktopViewUpdating", null),
          (0, i.gn)([s.ZP], y.prototype, "onDesktopViewReady", null),
          (0, i.gn)([s.ZP], y.prototype, "onWindowViewChange", null),
          (0, i.gn)([s.ZP], y.prototype, "ShowMultitaskingView", null),
          (y = n = (0, i.gn)([c.Pi], y));
      },
      6063: (e, t, o) => {
        "use strict";
        o.d(t, { J: () => u });
        var r = o(655),
          n = o(7294),
          i = o(7056),
          a = o(1569),
          s = o(7062),
          l = o(5177),
          d = o(7373),
          c = o(421),
          h = o(8980);
        let u = class extends n.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: this.props.xfTransform
                  ? this.props.xfTransform
                  : (0, a.Oq)(),
                bActive: !1,
              });
          }
          componentDidUpdate(e, t) {
            var o;
            e.bVisible != this.props.bVisible &&
              (null === (o = this.props.bVisible) ||
                void 0 === o ||
                o ||
                this.endMove()),
              e.xfTransform != this.props.xfTransform &&
                this.setState({
                  xfTransform: this.props.xfTransform
                    ? this.props.xfTransform
                    : (0, a.Oq)(),
                });
          }
          startMove() {
            let e,
              t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
            if (t != a.Kf) {
              switch (
                VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)
              ) {
                case a.Kg.TrackedControllerRole_LeftHand:
                  e = "/user/hand/left/pose/tip";
                  break;
                case a.Kg.TrackedControllerRole_RightHand:
                  e = "/user/hand/right/pose/tip";
                  break;
                default:
                  e = "/user/head";
              }
              this.context.setState({ parent_path: e }),
                this.setState({ bActive: !0 }),
                window.addEventListener("mouseup", this.endMove),
                this.props.onStartMove && this.props.onStartMove();
            }
          }
          endMove() {
            this.context.setState({ parent_path: "", nHandleSGID: 0 }),
              this.setState({ bActive: !1 }),
              window.removeEventListener("mouseup", this.endMove),
              this.props.onEndMove && this.props.onEndMove();
          }
          render() {
            var e, t;
            if (null == this.state.xfTransform) return null;
            const o = null === (e = this.props.bVisible) || void 0 === e || e,
              r = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
            return (
              o &&
              n.createElement(
                a.wx,
                null,
                n.createElement(
                  a.Dd,
                  { value: this.props.opacity },
                  n.createElement(
                    a.VW,
                    { color: this.props.tint },
                    n.createElement(
                      a.s_,
                      {
                        width: 0.25 * d.g.k_nControlBarWidthMeters * r,
                        interactive: !0,
                        requires_laser: !0,
                        debug_name: "DashboardGrabHandle",
                        origin: a.Ic.BottomCenter,
                        curvature_origin_id: this.props.curvature_origin_id,
                        hide_lasermouse_when_clicking: !0,
                        is_grab_handle: !0,
                      },
                      n.createElement(
                        l.z,
                        {
                          className: "GrabHandleButton",
                          key: "move",
                          onMouseDown: this.startMove,
                          onMouseUp: this.endMove,
                        },
                        n.createElement("div", {
                          className: (0, h.LJ)("GrabHandleBar", [
                            "ForceActive",
                            this.state.bActive,
                          ]),
                        }),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
        };
        (u.contextType = c.E),
          (0, r.gn)([i.ZP], u.prototype, "startMove", null),
          (0, r.gn)([i.ZP], u.prototype, "endMove", null),
          (u = (0, r.gn)([s.Pi], u));
      },
      421: (e, t, o) => {
        "use strict";
        o.d(t, { E: () => s, Z: () => l });
        var r = o(655),
          n = o(1569),
          i = o(7062),
          a = o(7294);
        const s = a.createContext(void 0);
        let l = class extends a.Component {
          constructor(e) {
            super(e),
              (this.state = { transform: (0, n.Oq)(), parent_path: "" });
          }
          render() {
            return a.createElement(
              n.sO,
              {
                parent_path: this.state.parent_path,
                transform: this.state.transform,
                id: this.props.id,
                stop_distance: this.props.stop_distance,
                start_angle: this.props.start_angle,
                start_quat_difference: this.props.start_quat_difference,
                stop_quat_difference: this.props.stop_quat_difference,
                scale_margin: this.props.scale_margin,
                lerp_speed: this.props.lerp_speed,
              },
              a.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, r.gn)([i.Pi], l);
      },
      5103: (e, t, o) => {
        "use strict";
        var r = o(655),
          n = o(7294),
          i = o(3935),
          a = o(9669),
          s = o.n(a),
          l = o(7056),
          d = o(1569),
          c = o(3568),
          h = o(1628),
          u = o(9809),
          p = o(1380),
          m = o(5177);
        class v extends n.Component {
          constructor(e) {
            super(e),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_mailbox = new d.Nv()),
              this.m_mailbox.Init("keyboard_vrwebui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "keyboard_shown",
                  this.OnKeyboardShown,
                ),
                  this.m_mailbox.RegisterHandler(
                    "keyboard_hidden",
                    this.OnKeyboardHidden,
                  );
              }),
              this.initializeKeyHandlers(),
              (this.state = {
                bFading: !1,
                bVisible: !1,
                bDockedInDashboard: !1,
                bMinimalMode: !1,
                bMultilinePreview: !1,
                inputMode: d.Pw.Normal,
                activeKey: { nCol: -1, nRow: -1 },
                presentation: "overlay",
                shiftPlaneName: "normal",
                layout: null,
                langLayout: null,
                text: "",
                textPos: 0,
                suggestions: [],
              }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.LoadSuggestionsForLanguage(this.language()),
              h.G3.Init(!1);
          }
          OnKeyboardHidden(e) {
            this.setState({ bVisible: !1 });
          }
          OnKeyboardShown(e) {
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetKeyboardInputInfo();
            this.setState({
              bVisible: !0,
              bDockedInDashboard: t.dockedInDashboard,
              inputMode: t.inputMode,
              bMinimalMode: !!(d.vS.Minimal & t.keyboardFlags),
              bMultilinePreview: t.lineMode == d.l0.MultipleLines,
              text: t.keyboardBuffer,
              textPos: t.keyboardBuffer.length,
            }),
              this.updateSuggestions(t.keyboardBuffer),
              this.getLayout("base"),
              this.getLayout(this.language());
          }
          startClose() {
            this.setState({ bVisible: !1 }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.CloseKeyboard();
          }
          genid() {
            return (this.m_genid += 1), "vk" + this.m_genid;
          }
          language() {
            var e;
            return (
              this.m_language ||
                (this.props.language
                  ? (this.m_language = this.props.language)
                  : (this.m_language =
                      null !==
                        (e =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.GetSteamLanguage()) && void 0 !== e
                        ? e
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == d.Pw.Password;
          }
          getLayoutFile(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return s()
                .get(t)
                .then((e) => (200 != e.status ? null : e.data))
                .catch((t) =>
                  "english" != e ? this.getLayoutFile("english") : null,
                );
            });
          }
          getLayout(e) {
            this.m_languageToLayout.has(e)
              ? this.onLayoutLoaded()
              : this.getLayoutFile(e).then((t) => {
                  t &&
                    (this.m_languageToLayout.set(e, t), this.onLayoutLoaded());
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
            t &&
              ((this.m_curShiftPlane = t),
              this.setState({ shiftPlaneName: e }));
          }
          onKey(e, t) {
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              let o = this.state.layout.geometry[e].keys[t];
              if ("string" == typeof o);
              else if ("key" != o.type)
                return void this.m_keyTypeToHandler.get(o.type)(o);
            }
            if (
              e < this.m_curShiftPlane.rows.length &&
              t < this.m_curShiftPlane.rows[e].length
            ) {
              let o = this.m_curShiftPlane.rows[e][t];
              "string" == typeof o
                ? this.m_keyTypeToHandler.get("key")(o)
                : this.m_keyTypeToHandler.has(o.type) &&
                  this.m_keyTypeToHandler.get(o.type)(o);
            }
          }
          handleKey(e) {
            let t;
            if (
              ((t = "string" == typeof e ? e : e.value),
              this.state.bMinimalMode)
            )
              this.UpdateText(t, 1);
            else {
              let e =
                  this.state.text.substr(0, this.state.textPos) +
                  t +
                  this.state.text.substr(this.state.textPos),
                o = this.state.textPos + t.length;
              this.UpdateText(e, o);
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
                let o = e.substr(0, e.length - 1) + t,
                  r = this.state.textPos - 1;
                this.UpdateText(o, r);
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
            this.setState({ text: e, textPos: t }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.SetKeyboardText(e),
              this.updateSuggestions(this.getSuggestionBase(e, t));
          }
          handleDone(e) {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.SendKeyboardDone(),
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
            let o = t;
            for (; o > 0 && !this.isWhite(e[o]); ) o -= 1;
            o < e.length && this.isWhite(e[o]) && (o += 1);
            let r = o;
            for (; r < e.length && !this.isWhite(e[r]); ) r += 1;
            return [o, r];
          }
          getSuggestionBase(e, t) {
            let o = this.findWordLimits(e, t);
            return o ? e.substr(o[0], o[1] - o[0]) : null;
          }
          updateSuggestions(e) {
            var t;
            if (null != this.state.layout)
              if (this.bShowPasswordPreview())
                this.setState({ suggestions: [] });
              else if (
                (null == e &&
                  (e = this.getSuggestionBase(
                    this.state.text,
                    this.state.textPos,
                  )),
                null != e && e.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let o =
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            e,
                            this.state.layout.previewSuggestionCount,
                          )) && void 0 !== t
                    ? t
                    : [];
                this.setState({ suggestions: o });
              } else this.setState({ suggestions: [] });
          }
          handleSuggestionClick(e) {
            if (e >= this.state.suggestions.length) return;
            let t = this.state.suggestions[e],
              o = this.findWordLimits(this.state.text, this.state.textPos);
            if (o) {
              let e = this.state.text.substr(0, o[0]);
              t += " ";
              let r = e + t + this.state.text.substr(o[1]),
                n = e.length + t.length;
              this.UpdateText(r, n);
            }
          }
          makeKeyFaceElement(e, t) {
            let o = "VRKBKeyFace";
            if ((t && (o += ` VRKBShift_${t.name}`), "string" == typeof e))
              return n.createElement(
                "span",
                { key: this.genid(), className: o },
                e,
              );
            {
              let t = e.text;
              switch (
                (e.value ? e.value : e.text,
                e.img &&
                  (t = n.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${e.img}.png`,
                  })),
                "string" == typeof t && t.startsWith("#") && (t = (0, c.Xx)(t)),
                e.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return n.createElement(
                    "span",
                    { key: this.genid(), className: o },
                    t,
                  );
                case "done":
                  return n.createElement(
                    "span",
                    { key: this.genid(), className: o + " VRKBDone" },
                    t,
                  );
                case "hole":
                  return n.createElement("span", {
                    key: this.genid(),
                    className: o,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      e.type,
                      " in keyboard layout",
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(e, t) {
            let o = [];
            if (
              (e < this.state.layout.geometry.length &&
                t < this.state.layout.geometry[e].keys.length &&
                "key" != this.state.layout.geometry[e].keys[t].type &&
                o.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[e].keys[t],
                    null,
                  ),
                ),
              0 == o.length)
            )
              for (let r of this.state.langLayout.shiftPlanes)
                e < r.rows.length &&
                  t < r.rows[e].length &&
                  o.push(this.makeKeyFaceElement(r.rows[e][t], r));
            return o;
          }
          getKeyElements() {
            let e = [];
            for (let t = 0; t < this.state.layout.geometry.length; ++t) {
              let o = this.state.layout.geometry[t],
                r = [];
              for (let e = 0; e < o.keys.length; ++e) {
                let i = o.keys[e],
                  a = {};
                i.flexGrow && (a.flexGrow = i.flexGrow),
                  i.flexShrink && (a.flexShrink = i.flexShrink),
                  this.state.shiftPlaneName == i.type &&
                    (a.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (a.background = "#000");
                let s = this.getKeyFaces(t, e),
                  l = () => {
                    "done" == i.type && this.onKey(t, e);
                  },
                  d = () => {
                    "done" != i.type &&
                      (this.setState({ activeKey: { nRow: t, nCol: e } }),
                      this.onKey(t, e));
                  },
                  c = () => {
                    "done" != i.type &&
                      this.setState({ activeKey: { nRow: -1, nCol: -1 } });
                  };
                r.push(
                  n.createElement(
                    m.z,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: l,
                      onMouseDown: d,
                      onMouseUp: c,
                      style: a,
                    },
                    s,
                  ),
                );
              }
              let i = {};
              o.height && (i.height = o.height),
                e.push(
                  n.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: i },
                    r,
                  ),
                );
            }
            return n.createElement("div", { className: "VRKBRows" }, e);
          }
          makeCursor() {
            return n.createElement(
              "span",
              { key: this.genid(), className: "VRKBPreviewTextCursor" },
              "|",
            );
          }
          makePreviewText() {
            let e = this.state.text.substr(0, this.state.textPos),
              t = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((e = v.kPasswordChar.repeat(e.length)),
                (t = v.kPasswordChar.repeat(t.length)),
                [
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    v.kPasswordChar.repeat(e.length),
                  ),
                  this.makeCursor(),
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    v.kPasswordChar.repeat(t.length),
                  ),
                ])
              : [
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    e,
                  ),
                  this.makeCursor(),
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    t,
                  ),
                ];
          }
          makeSuggestionElements() {
            let e = [];
            if (this.state.suggestions)
              for (let t = 0; t < this.state.suggestions.length; ++t)
                e.push(
                  n.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(t),
                    },
                    this.state.suggestions[t],
                  ),
                );
            for (
              let t = e.length;
              t < this.state.layout.previewSuggestionCount;
              ++t
            )
              e.push(
                n.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return e;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : n.createElement(
                  "div",
                  { className: "VRKBPreviewWrapper" },
                  n.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBPreviewText" },
                    this.makePreviewText(),
                  ),
                  n.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBSuggestionWrapper" },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return n.createElement(
              d.wx,
              { parent_path: "/user/head" },
              n.createElement(
                d.iC,
                null,
                n.createElement(
                  d.wx,
                  { translation: this.state.layout.translation },
                  n.createElement(
                    d.s_,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      sort_depth_bias: 0.2,
                    },
                    n.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      n.createElement(
                        "div",
                        { className: "VRKBBackground" },
                        this.renderFlatPreview(),
                        this.m_keyElements,
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          render_overlay() {
            return n.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              n.createElement(
                "div",
                { className: "VRKBBackground" },
                this.renderFlatPreview(),
                this.m_keyElements,
              ),
            );
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
              case "overlay":
                return this.render_overlay();
              default:
                return (
                  console.log(
                    "bad keyboard presentation:",
                    this.state.presentation,
                  ),
                  null
                );
            }
          }
        }
        (v.kPasswordChar = "●"),
          (0, r.gn)([l.ak], v.prototype, "OnKeyboardHidden", null),
          (0, r.gn)([l.ak], v.prototype, "OnKeyboardShown", null),
          (0, r.gn)([l.ak], v.prototype, "handleKey", null),
          (0, r.gn)([l.ak], v.prototype, "handleReturn", null),
          (0, r.gn)([l.ak], v.prototype, "handleDel", null),
          (0, r.gn)([l.ak], v.prototype, "handleShift", null),
          (0, r.gn)([l.ak], v.prototype, "handleSymbols", null),
          (0, r.gn)([l.ak], v.prototype, "handleDone", null),
          (0, r.gn)([l.ak], v.prototype, "handleCancel", null),
          (0, r.gn)([l.ak], v.prototype, "handleClear", null),
          (0, r.gn)([l.ak], v.prototype, "handleSuggestionClick", null);
        const g =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            d.qC.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, c.CK)(["systemui"], g)
            .then(() => u.I.Init())
            .then(() => p.S.Init())
            .then(() => {
              i.render(
                n.createElement(v, { language: g }),
                document.getElementById("root"),
              );
            });
      },
      16: (e, t, o) => {
        "use strict";
        o.d(t, { BB: () => u, KU: () => p });
        var r,
          n = o(655),
          i = o(7294),
          a = o(7056),
          s = o(1569),
          l = o(3568),
          d = o(7062),
          c = o(8980),
          h = o(1628);
        const u = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (r = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(u).then(() => {
                this.m_mailbox.RegisterHandler(
                  p,
                  this.OnBeginResetUniverseOriginCountdown,
                );
              }),
              (this.state = {
                visible: !1,
                fading: !1,
                countdown_seconds: 0,
                bDashboardPlacementActive: !1,
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
            let t = !1;
            if (
              h.G3.settings.get(
                "/settings/dashboard/allowPlacementDuringRecenter",
              )
            ) {
              const e =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.VRApplications.GetSceneApplicationKey();
              t = !e || "system.generated.xrservice" == e;
            }
            t
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === s.Co ||
                void 0 === s.Co ||
                s.Co.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                bDashboardPlacementActive: t,
              });
          }
          CountdownTick() {
            clearTimeout(this.m_countdownTimeout),
              1 == this.state.countdown_seconds
                ? ((this.m_countdownTimeout = 0),
                  this.state.bDashboardPlacementActive &&
                    this.props.dashboardRef.current &&
                    this.props.dashboardRef.current.setPlacementModeActive(!1),
                  null === s.Co ||
                    void 0 === s.Co ||
                    s.Co.VRChaperone.ResetZeroPose(s.zq.Seated),
                  null === s.Co ||
                    void 0 === s.Co ||
                    s.Co.VRChaperone.ResetZeroPose(s.zq.Standing),
                  clearTimeout(this.m_fadeFinishTimeout),
                  (this.m_fadeFinishTimeout = setTimeout(
                    this.HideOverlay,
                    r.kFadeDurationMs,
                  )),
                  this.setState({
                    visible: !0,
                    fading: !0,
                    countdown_seconds: 0,
                    bDashboardPlacementActive: !1,
                  }))
                : ((this.m_countdownTimeout = setTimeout(
                    this.CountdownTick,
                    1e3,
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
            return i.createElement(
              s.s_,
              {
                width: void 0,
                height: r.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              i.createElement(
                "div",
                {
                  className: (0, c.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: r.kPixelWidth },
                },
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    i.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds,
                    ),
                  ),
                  i.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    (0, l.Xx)("#Recentering_Countdown"),
                  ),
                ),
              ),
            );
          }
          render() {
            var e, t;
            if (!this.state.visible) return null;
            let o =
                0.8 *
                (null !==
                  (e =
                    null === s.Co || void 0 === s.Co
                      ? void 0
                      : s.Co.VRProperties.GetFloatProperty(
                          s.wU,
                          s.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              r =
                null !==
                  (t = h.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? i.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: r },
                  i.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: o },
                    this.renderPanel(),
                  ),
                )
              : i.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  i.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: o },
                    this.renderPanel(),
                  ),
                );
          }
        });
        (m.kPanelHeight = 0.2),
          (m.kPixelWidth = 400),
          (m.kFadeDurationMs = 1e3),
          (0, n.gn)(
            [a.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null,
          ),
          (0, n.gn)([a.ak], m.prototype, "CountdownTick", null),
          (0, n.gn)([a.ak], m.prototype, "HideOverlay", null),
          (m = r = (0, n.gn)([d.Pi], m));
      },
      1283: (e, t, o) => {
        "use strict";
        o.d(t, { s: () => g });
        var r = o(655),
          n = o(7294),
          i = o(7062),
          a = o(7056),
          s = o(3568),
          l = o(5211),
          d = o(4285),
          c = o(2188),
          h = o(9809),
          u = o(5177),
          p = o(8980),
          m = o(8242);
        let v = class extends n.Component {
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
              this.trackerConfig.controller_role,
            );
          }
          OnControllerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              this.trackerConfig.role,
              e,
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
              ].map((e) => ({ value: e, sLabel: (0, s.Xx)("#" + e) })));
            const t = this.trackerConfig.device_path_string;
            let o = t;
            const r = "vive_tracker";
            o.includes(r) &&
              (o = o.substring(o.indexOf(r) + r.length, o.length));
            let i = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (i = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable",
                  ))
                : (i = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected",
                  )),
              n.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                n.createElement(
                  "div",
                  { className: "Label", title: t },
                  n.createElement("span", null, o),
                  n.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected",
                    ),
                    className: (0, p.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", d.E.connected && this.IsConnected()],
                      ["Disconnected", d.E.connected && !this.IsConnected()],
                    ),
                  }),
                ),
                n.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  n.createElement(
                    m.GV,
                    { title: i },
                    n.createElement(
                      u.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, s.Xx)("#TrackerEditor_BuzzTracker"),
                    ),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  n.createElement(m.Xp, {
                    label: (0, s.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, s.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    n.createElement(m.Xp, {
                      label: (0, s.Xx)("#Settings_ViveTracker_Hand"),
                      items: e,
                      value: this.trackerConfig.controller_role,
                      onChange: this.OnControllerRoleChanged,
                    }),
                ),
              )
            );
          }
        };
        (0, r.gn)([c.Fl], v.prototype, "trackerConfig", null),
          (0, r.gn)([a.ak], v.prototype, "OnTrackerRoleChanged", null),
          (0, r.gn)([a.ak], v.prototype, "OnControllerRoleChanged", null),
          (0, r.gn)([a.ak], v.prototype, "BuzzTracker", null),
          (0, r.gn)([c.Fl], v.prototype, "deviceInfo", null),
          (v = (0, r.gn)([i.Pi], v));
        let g = class extends n.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => h.I.GetInputState(),
              2e3,
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
                (e = t.trackers.map((e, o) =>
                  n.createElement(v, {
                    key: o,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              n.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        g = (0, r.gn)([i.Pi], g);
      },
      6698: (e, t, o) => {
        "use strict";
        o.d(t, { u: () => n });
        var r = o(7294);
        function n(e) {
          return r.createElement(
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
              e,
            ),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
      },
      2477: (e, t, o) => {
        "use strict";
        o.d(t, { Q: () => l });
        var r = o(655),
          n = o(1569),
          i = o(328),
          a = o(4820);
        const s = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new i.fH(this, a.Al)),
              (this.m_Steam_Client = new i.q0(this)),
              (this.m_Steam_ClientMethods = new a.x2(this.m_Steam_Client)),
              (this.m_mailbox = new n.Nv()),
              (this.m_unNextVRGamepadUIMessageId = 1);
          }
          get Steam() {
            return this.m_Steam_ClientMethods;
          }
          get SteamVR() {
            return this.m_SteamVR_Provider;
          }
          Init() {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield this.m_mailbox.Init("vrgamepadui_messages"),
                this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                  const t = (0, i.u8)(e.header);
                  t &&
                    (null == t.response_to_message_id
                      ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                          t,
                          e.payload,
                        )
                      : this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                          t,
                          e.payload,
                        ));
                });
            });
          }
          CreateVRGamepadUIMessageId() {
            return this.m_unNextVRGamepadUIMessageId++;
          }
          SendVRGamepadUIMessage(e, t) {
            if (!this.m_mailbox.connected) return i.n5.SendFailure;
            let o, r;
            try {
              o = a.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return i.n5.HeaderSerializationFailure;
            }
            try {
              r = t.serializeBase64String();
            } catch (e) {
              return i.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: o,
                payload: r,
              });
            } catch (e) {
              return i.n5.SendFailure;
            }
            return i.n5.Success;
          }
          IsConnected() {
            return this.m_mailbox.connected;
          }
        })();
        window.VRGamepadUIMessages = s;
        const l = s;
      },
      9462: () => {},
    },
    o = {};
  function r(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var i = (o[e] = { id: e, exports: {} });
    return t[e].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, o, n, i) => {
      if (!o) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [o, n, i] = e[c], s = !0, l = 0; l < o.length; l++)
            (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](o[l]))
              ? o.splice(l--, 1)
              : ((s = !1), i < a && (a = i));
          if (s) {
            e.splice(c--, 1);
            var d = n();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      i = i || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
      e[c] = [o, n, i];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var o in t)
        r.o(t, o) &&
          !r.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.j = 987),
    (() => {
      var e = { 987: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var n,
            i,
            [a, s, l] = o,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) r.o(s, n) && (r.m[n] = s[n]);
            if (l) var c = l(r);
          }
          for (t && t(o); d < a.length; d++)
            (i = a[d]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return r.O(c);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })(),
    (r.nc = void 0);
  var n = r.O(void 0, [968, 683], () => r(5103));
  n = r.O(n);
})();
//# sourceMappingURL=keyboard.js.map?v=2c4da850a5ff5af15228
