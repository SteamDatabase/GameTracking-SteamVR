/*! For license information please see controllerbindingui.js.LICENSE.txt */
(() => {
  var e,
    t = {
      1569: (e, t, o) => {
        "use strict";
        o.d(t, {
          Bl: () => v.Bl,
          Co: () => E,
          Dd: () => l.D,
          Fs: () => i.Fs,
          GC: () => k.GC,
          Ic: () => v.Ic,
          JR: () => i.JR,
          Kf: () => k.Kf,
          Kg: () => k.Kg,
          Ko: () => v.Ko,
          LL: () => k.LL,
          LY: () => i.LY,
          M9: () => i.M9,
          Nv: () => n.N,
          OK: () => p.OK,
          Op: () => k.Op,
          Oq: () => i.Oq,
          Pd: () => i.Pd,
          Pw: () => k.Pw,
          QZ: () => k.QZ,
          Qu: () => k.Qu,
          Sb: () => C.S,
          UU: () => i.UU,
          Uk: () => I.Uk,
          VW: () => s.V,
          Vv: () => v.Vv,
          XX: () => k.XX,
          Y9: () => a.Y,
          Z9: () => k.Z9,
          Zj: () => i.Zj,
          a0: () => k.a0,
          at: () => _.a,
          bt: () => m.b,
          dq: () => i.dq,
          eK: () => S.e,
          eQ: () => i.eQ,
          gQ: () => u.g,
          hz: () => r.h,
          iN: () => p.iN,
          kH: () => b.k,
          kL: () => f.k,
          l0: () => k.l0,
          lx: () => k.lx,
          mT: () => i.mT,
          n0: () => h.n,
          q9: () => i.q9,
          qA: () => k.qA,
          qC: () => k.qC,
          qI: () => p.qI,
          qR: () => k.qR,
          sH: () => I.sH,
          sO: () => y.s,
          s_: () => v.s_,
          sl: () => c.s,
          tS: () => i.tS,
          ui: () => i.ui,
          vS: () => I.vS,
          wU: () => k.wU,
          wx: () => d.w,
          x1: () => g.x,
          xY: () => k.xY,
          xj: () => u.x,
          zA: () => k.zA,
          zq: () => k.zq,
        });
        var n = o(4671),
          i = o(4727),
          r = o(7500),
          a = o(2071),
          s = o(6626),
          l = o(751),
          c = o(8116),
          d = o(390),
          p = (o(8257), o(233)),
          h = (o(7313), o(6765)),
          u = (o(491), o(171), o(8811)),
          m = o(5157),
          g = o(5486),
          _ = (o(5829), o(7973)),
          v = o(2214),
          S = (o(2360), o(5627), o(3841), o(2467), o(7996), o(1364), o(5146)),
          y = o(163),
          b = o(2109),
          f = o(8221),
          C = (o(684), o(9481)),
          k = o(5867),
          I = o(7074);
        const E = VRHTML;
      },
      1364: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      7996: (e, t, o) => {
        "use strict";
        var n = o(7294);
        o(7074), o(390), n.Component;
      },
      2360: (e, t, o) => {
        "use strict";
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "context";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (o.properties.construct = this.props.construct), [e, o];
          }
        }
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      2071: (e, t, o) => {
        "use strict";
        o.d(t, { Y: () => c });
        var n = o(655),
          i = o(7294),
          r = o(7313),
          a = o(7056),
          s = o(233),
          l = o(8116);
        class c extends r.Mo {
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
            const n = this.createSgNode(t);
            return (
              (n.properties.tab_name =
                null !== (o = this.props.tabName) && void 0 !== o ? o : ""),
              (n.properties.mountable_id = (0, s.Hb)(
                this.m_sMountableUnqualifiedID,
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
                this.props.children,
              ),
            );
          }
        }
        (0, n.gn)([a.ZP], c.prototype, "buildNode", null);
      },
      5146: (e, t, o) => {
        "use strict";
        o.d(t, { e: () => a });
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var o, n;
            const i = this.createSgNode(t);
            return (
              (i.properties.continuous_relatch =
                null !== (o = this.props.bContinuousRelatch) &&
                void 0 !== o &&
                o),
              (i.properties.free_dashboard_transform =
                null !== (n = this.props.bFreeDashboardTransform) &&
                void 0 !== n &&
                n),
              [e, i]
            );
          }
        }
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      3841: (e, t, o) => {
        "use strict";
        var n;
        o(7294),
          o(7313),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(n || (n = {}));
      },
      163: (e, t, o) => {
        "use strict";
        o.d(t, { s: () => r });
        var n = o(7294),
          i = o(7313);
        class r extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, i.Kg)(this.props.transform.translation),
              t = (0, i.xs)(this.props.transform.rotation),
              o = (0, i.Kg)(this.props.transform.scale);
            return n.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.parent_path,
                translation: e,
                rotation: t,
                scale: o,
                "should-head-align": this.props.should_head_align,
                "stop-distance": this.props.stop_distance,
                "start-angle": this.props.start_angle,
                "start-quat-difference": this.props.start_quat_difference,
                "stop-quat-difference": this.props.stop_quat_difference,
                "scale-margin": this.props.scale_margin,
                "lerp-speed": this.props.lerp_speed,
                "min-distance": this.props.min_distance,
                "max-distance": this.props.max_distance,
                "one-to-one-radius": this.props.one_to_one_radius,
                "max-x-squared-contribution":
                  this.props.max_x_squared_contribution,
                "acceleration-factor-x-coefficient":
                  this.props.acceleration_factor_x_coefficient,
                "acceleration-factor-x-squared-coefficient":
                  this.props.acceleration_factor_x_squared_coefficient,
                "acceleration-factor-scale-term":
                  this.props.acceleration_factor_scale_term,
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
        o.d(t, { x: () => r });
        var n = o(7294),
          i = o(7313);
        class r extends i.Mo {
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
      5627: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      5157: (e, t, o) => {
        "use strict";
        o.d(t, { b: () => a });
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
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
                let t = (0, i.kh)(e.color, { r: 0, g: 0, b: 0 });
                o.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, o];
          }
        }
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      2109: (e, t, o) => {
        "use strict";
        o.d(t, { k: () => r });
        var n = o(7294),
          i = o(7313);
        class r extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, i.Kg)(this.props.xfCurrent.translation),
              t = (0, i.xs)(this.props.xfCurrent.rotation),
              o = (0, i.Kg)(this.props.xfCurrent.scale);
            return n.createElement(
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
        var n = o(655),
          i = o(7313),
          r = o(7056),
          a = o(233);
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
        (0, n.gn)([r.ZP], s.prototype, "buildNode", null);
        class l extends i.Mo {
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
        (0, n.gn)([r.ZP], l.prototype, "buildNode", null);
      },
      751: (e, t, o) => {
        "use strict";
        o.d(t, { D: () => a });
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
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
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      2214: (e, t, o) => {
        "use strict";
        o.d(t, {
          Bl: () => a,
          Ic: () => n,
          Ko: () => r,
          Lb: () => m,
          Vv: () => i,
          s_: () => g,
        });
        var n,
          i,
          r,
          a,
          s = o(655),
          l = o(7294),
          c = o(7313),
          d = o(6765),
          p = o(7056),
          h = o(233);
        function u(e) {
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
                void 0 !== this.props.width || void 0 !== this.props.height,
              o = void 0 !== this.props.meters_per_pixel,
              n = void 0 !== this.props.target_dpi_panel_id,
              i =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              i &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const r = [t, o, n, i].filter((e) => e).length,
              a =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == r)
              throw new Error(
                `Panel requires one of the following props: ${a}.`,
              );
            if (r > 1)
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
            g.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = d.n.Current().addEmbeddedPanelUVs(this)),
              (g.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
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
                this.onPanelMouseDown,
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
          createOverdragBlockingElement(e, t, o, n) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = o + "px"),
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
              : a.Visible;
          }
          buildNode(e, t) {
            var o, n, i, r, s, l;
            if (this.visibility != a.Visible) return [e, null];
            let d = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              p = this.createSgNode(t),
              g = { x: 0, y: 0 };
            g =
              "object" == typeof this.props.origin
                ? (0, c.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const _ = this.props.overlay_key,
              v = (0, h.Gv)();
            return (
              _ && _.length > 0
                ? (p.properties.key = _)
                : v
                  ? (p.properties.key = v)
                  : (p.properties.overlay_handle = (0, h.Mb)()),
              (p.properties.uv_min =
                null !== (o = u(this.m_UVsMin)) && void 0 !== o ? o : void 0),
              (p.properties.uv_max =
                null !== (n = u(this.m_UVsMax)) && void 0 !== n ? n : void 0),
              (p.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (p.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (p.properties["scale-index"] =
                null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
              (p.properties["min-width"] =
                null !== (l = this.props.min_width) && void 0 !== l
                  ? l
                  : void 0),
              (p.properties["target-width-anchor-id"] = (0, h.Hb)(
                this.props.target_width_anchor_id,
              )),
              (p.properties["target-dpi-panel-id"] = (0, h.Hb)(
                this.props.target_dpi_panel_id,
              )),
              (p.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (p.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (p.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (p.properties.curvature = this.props.curvature),
              (p.properties["curvature-origin-id"] = (0, h.Hb)(
                this.props.curvature_origin_id,
              )),
              (p.properties.spherical = this.props.spherical),
              (p.properties.interactive = this.props.interactive),
              (p.properties.scrollable = this.props.scrollable),
              (p.properties.undocked = this.props.undocked),
              (p.properties.modal = this.props.modal),
              (p.properties["requires-laser"] = this.props.requires_laser),
              (p.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (p.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (p.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (p.properties["is-grab-handle"] = this.props.is_grab_handle),
              (p.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (p.properties.origin = (0, c.D1)(g)),
              (p.properties.debug_name = this.props.debug_name),
              (p.properties.sampler = this.props.sampler),
              (p.properties.reflect = this.props.reflect),
              (p.properties.stereoscopy = this.props.stereoscopy),
              (p.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (p.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (p.properties["texture-id"] = (0, h.Hb)(this.props.texture_id)),
              (p.properties["sort-order"] = this.props.sort_order),
              (p.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              [d, p]
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
        (g.s_bPanelsAreDirty = !1),
          (0, s.gn)([p.ZP], g.prototype, "onResizeObserved", null),
          (0, s.gn)([p.ZP], g.prototype, "onPanelMouseDown", null),
          (0, s.gn)([p.ZP], g.prototype, "onWindowMouseUp", null),
          (0, s.gn)([p.ZP], g.prototype, "buildNode", null);
      },
      7973: (e, t, o) => {
        "use strict";
        o.d(t, { a: () => s });
        var n = o(655),
          i = o(7313),
          r = o(2214),
          a = o(7056);
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
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let o = null;
            "object" == typeof this.props.location
              ? (o = (0, i.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (o = (0, r.Lb)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (o) {
              const t = { u: 0.5 * o.x + 0.5, v: -0.5 * o.y + 0.5 },
                i =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = i.u),
                (n.properties["anchor-v"] = i.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const o = t.ownerDocument,
                i = t.getBoundingClientRect(),
                r = i.left + i.width / 2,
                a = i.top + i.height / 2,
                s = e.currentPanel.m_Rect;
              if (r < s.x || r > s.x + s.width || a < s.y || a > s.y + s.height)
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
              (n.properties["anchor-u"] = r / l),
                (n.properties["anchor-v"] = a / c);
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
        (0, n.gn)([a.ZP], s.prototype, "buildNode", null);
      },
      5829: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      8811: (e, t, o) => {
        "use strict";
        o.d(t, { g: () => l, x: () => n });
        var n,
          i = o(655),
          r = o(7313),
          a = o(7056),
          s = o(233);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(n || (n = {}));
        class l extends r.Mo {
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
                let t = (0, r.kh)(e.color, { r: 0, g: 0, b: 0 });
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
        (0, i.gn)([a.ZP], l.prototype, "buildNode", null);
      },
      9481: (e, t, o) => {
        "use strict";
        o.d(t, { S: () => a });
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "reparent-to-panel";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t),
              n = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !0,
                currentPanel: null,
              });
            return (
              this.props.parent_overlay_key &&
                (o.properties["parent-overlay-key"] =
                  this.props.parent_overlay_key),
              [n, o]
            );
          }
        }
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      8221: (e, t, o) => {
        "use strict";
        o.d(t, { k: () => a });
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
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
              (o.properties["is-active"] = this.props.is_active),
              (o.properties["min-target-scale"] = this.props.min_target_scale),
              (o.properties["max-target-scale"] = this.props.max_target_scale),
              (o.properties.displacement = this.props.displacement),
              [e, o]
            );
          }
        }
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      6765: (e, t, o) => {
        "use strict";
        o.d(t, { n: () => c });
        var n,
          i = o(655),
          r = o(7294),
          a = o(2214),
          s = o(7056),
          l = o(233);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(n || (n = {}));
        class c extends r.Component {
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
              (c.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? n.Canvas
                  : n.Image,
              }),
              (this.m_DomRef = r.createRef()),
              (this.m_scalingDomRef = r.createRef()),
              (this.m_CanvasRef = r.createRef()),
              (this.m_EmbeddedDataImgRef = r.createRef()),
              (this.m_DebugPointerRef = r.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== c.Current();
          }
          static Current() {
            return c.s_Current;
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
            const e = this.state.eRenderMode == n.Image,
              t = this.state.eRenderMode == n.Canvas;
            let o = [];
            return (
              this.state.bShowDebugPointer && o.push("ShowDebugPointer"),
              r.createElement(
                "vsg-app",
                {
                  class: o.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                r.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  r.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: c.k_EmbeddedDataRows,
                  }),
                t &&
                  r.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: c.k_EmbeddedDataRows,
                  }),
                r.createElement(
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
            this.state.eRenderMode == n.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == n.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    c.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              o = t.width / this.m_fCurrentScale,
              n = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / o, y: e.innerHeight / n },
              r = Math.min(i.x, i.y, 1);
            r != this.m_fCurrentScale &&
              (1 != r
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + r + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = r),
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
                    n = e.m_Rect.x + e.m_Rect.width,
                    i = e.m_Rect.y,
                    r = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || o >= n || i >= r)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & o) >> 8, 255 & o, 0),
                      this.setPixel(a + 1, (65280 & n) >> 8, 255 & n, 255 & i),
                      this.setPixel(
                        a + 2,
                        (65280 & r) >> 8,
                        255 & r,
                        (65280 & i) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == n.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == n.Canvas
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
          setPixel(e, t, o, i, r = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == n.Image
            ) {
              const n = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              n.setUint8(4 * e + 0, t),
                n.setUint8(4 * e + 1, o),
                n.setUint8(4 * e + 2, i),
                n.setUint8(4 * e + 3, r);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == n.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = o),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = r),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (c.s_Current = null),
          (c.k_EmbeddedDataRows = 1),
          (0, i.gn)([s.ak], c.prototype, "toggleDebugPointer", null),
          (0, i.gn)([s.ak], c.prototype, "onMouseMove", null),
          (0, i.gn)([s.ak], c.prototype, "forceLayoutUpdate", null),
          (0, i.gn)([s.ak], c.prototype, "onMutation", null);
      },
      7313: (e, t, o) => {
        "use strict";
        o.d(t, {
          D1: () => c,
          Kg: () => d,
          Mo: () => h,
          QE: () => a,
          Uq: () => s,
          kh: () => l,
          xs: () => p,
        });
        var n = o(7294),
          i = o(5867),
          r = o(233);
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
        function c(e) {
          if (e) return [e.x, e.y];
        }
        function d(e) {
          var t;
          return null ===
            (t = (function (e) {
              if (e) return [e.x, e.y, e.z];
            })(e)) || void 0 === t
            ? void 0
            : t.join(" ");
        }
        function p(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class h extends n.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = n.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.NextSGID()) && void 0 !== t
                  ? t
                  : i.nX);
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
      },
      233: (e, t, o) => {
        "use strict";
        o.d(t, {
          Gv: () => E,
          Hb: () => I,
          Mb: () => h,
          OK: () => w,
          ac: () => p,
          iN: () => k,
          k7: () => T,
          mK: () => C,
          qI: () => R,
          sX: () => M,
        });
        var n = o(655),
          i = o(4671);
        function r(e, t) {
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
        function c(e, t) {
          let o = e.getAttribute(t);
          if (o && o.length > 0) return o;
        }
        function d(e, t) {
          return I(c(e, t));
        }
        function p(e, t) {
          let o = { type: e, properties: {} };
          return (
            t.id && (o.properties.id = I(t.id)),
            (o.properties.sgid = s(t, "sgid")),
            o
          );
        }
        function h() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function u(e, t) {
          let [o, n] = (function (e, t) {
              let o = t.buildNode;
              if (o) return o(e, t);
              let n = Object.assign({}, e),
                i = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (i = p("transform", t)),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale")),
                    (i.properties["curvature-pitch"] = a(t, "curvature-pitch")),
                    (i.properties["transform-path"] = c(t, "transform-path")),
                    (i.properties["invert-parent-panel-pitch"] = l(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (i.properties["ignore-parent-scale"] = l(
                      t,
                      "ignore-parent-scale",
                    )),
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
                      "start-angle-threshold",
                    )),
                    (i.properties["stop-angle-threshold"] = a(
                      t,
                      "stop-angle-threshold",
                    )),
                    (i.properties["ease-in-time"] = a(t, "ease-in-time")),
                    (i.properties["ease-in-power"] = a(t, "ease-in-power")),
                    (i.properties["ease-out-angle-threshold"] = a(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (i.properties["ease-out-power"] = a(t, "ease-out-power")),
                    (i.properties["min-angular-velocity"] = a(
                      t,
                      "min-angular-velocity",
                    )),
                    (i.properties["max-angular-velocity"] = a(
                      t,
                      "max-angular-velocity",
                    )),
                    (i.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (i.properties["translation-behavior"] = s(
                      t,
                      "translation-behavior",
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
                      "offscreen-z-depth",
                    )),
                    (i.properties["off-axis-limit"] = a(t, "off-axis-limit")),
                    (i.properties["transition-limit"] = a(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (i = p("manipulation-transform", t)),
                    (i.properties["is-moving"] = l(t, "is-moving")),
                    (i.properties["parent-path"] = c(t, "parent-path")),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (i = p("grab-transform", t)),
                    (i.properties["parent-path"] = c(t, "parent-path")),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale")),
                    (i.properties["should-head-align"] = l(
                      t,
                      "should-head-align",
                    )),
                    (i.properties["stop-distance"] = a(t, "stop-distance")),
                    (i.properties["start-angle"] = a(t, "start-angle")),
                    (i.properties["start-quat-difference"] = a(
                      t,
                      "start-quat-difference",
                    )),
                    (i.properties["stop-quat-difference"] = a(
                      t,
                      "stop-quat-difference",
                    )),
                    (i.properties["scale-margin"] = a(t, "scale-margin")),
                    (i.properties["lerp-speed"] = a(t, "lerp-speed")),
                    (i.properties["min-distance"] = a(t, "min-distance")),
                    (i.properties["max-distance"] = a(t, "max-distance")),
                    (i.properties["one-to-one-radius"] = a(
                      t,
                      "one-to-one-radius",
                    )),
                    (i.properties["max-x-squared-contribution"] = a(
                      t,
                      "max-x-squared-contribution",
                    )),
                    (i.properties["acceleration-factor-x-coefficient"] = a(
                      t,
                      "acceleration-factor-x-coefficient",
                    )),
                    (i.properties["acceleration-factor-x-squared-coefficient"] =
                      a(t, "acceleration-factor-x-squared-coefficient")),
                    (i.properties["acceleration-factor-scale-term"] = a(
                      t,
                      "acceleration-factor-scale-term",
                    ));
              }
              return [n, i];
            })(e, t),
            i = [];
          for (let e = 0; e < t.children.length; e++) {
            let n = t.children.item(e);
            if (n.children) {
              let e = u(o, n);
              e && (i = i.concat(e));
            }
          }
          return o.bShouldAbort
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
          _,
          v,
          S = [],
          y = null,
          b = null,
          f = null;
        function C(e, t, o) {
          (m = e),
            (g = t),
            (_ = o),
            console.log("Setting owning overlay key to " + e);
        }
        function k(e, t) {
          return e + "::" + t;
        }
        function I(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : k(E(), e)
            : null;
        }
        function E() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : m;
        }
        function M(e) {
          S.push(e), T();
        }
        function R() {
          v = !0;
        }
        function w(e) {
          var t, o;
          (o = e),
            (null == (t = f) || null == o
              ? t == o
              : t.color_mult == o.color_mult &&
                t.reflection_mult == o.reflection_mult &&
                t.roomview_mult.toString() == o.roomview_mult.toString() &&
                t.allow_skydome == o.allow_skydome) || ((f = e), T());
        }
        function T() {
          y ||
            (y = window.setTimeout(
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  g && (e = g);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: v,
                      allowDismissOnClick: true,
                      sceneColorCorrection: f,
                    },
                    children: u(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      e,
                    ),
                  };
                  b ||
                    (console.log("Initializing sg_mailbox"),
                    (b = new i.N()),
                    yield b.Init("sg_mailbox", _));
                  let o = {
                    type: "update_scene_graph",
                    owning_overlay_key: E(),
                    scene_graph: t,
                    retired_sgids: S,
                  };
                  b.SendMessage("vrcompositor_systemlayer", o),
                    (y = null),
                    (S = []),
                    (v = !1);
                }),
              0,
            ));
        }
      },
      491: (e, t, o) => {
        "use strict";
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
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
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      171: (e, t, o) => {
        "use strict";
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
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
              let e = (0, i.kh)(this.props.color, { r: 0, g: 0, b: 0 });
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
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      6626: (e, t, o) => {
        "use strict";
        o.d(t, { V: () => a });
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return Array.isArray(this.props.color) &&
              this.props.color.length > 1
              ? "tint-anim"
              : "tint";
          }
          buildNode(e, t) {
            const o = this.createSgNode(t);
            return (
              this.props.color
                ? "string" == typeof this.props.color
                  ? (o.properties.color = this.props.color)
                  : Array.isArray(this.props.color)
                    ? (this.props.color.length > 0 &&
                      "string" == typeof this.props.color[0]
                        ? (o.properties.color =
                            this.props.color.length > 1
                              ? this.props.color
                              : this.props.color[0])
                        : (o.properties.color = this.props.color
                            .map((e) => [e.r, e.g, e.b])
                            .reduce((e, t) => e.concat(t), [])),
                      (o.properties["animation-seconds"] =
                        this.props.animationSeconds))
                    : (o.properties.color = [
                        this.props.color.r,
                        this.props.color.g,
                        this.props.color.b,
                      ])
                : (o.properties.color = [1, 1, 1]),
              [e, o]
            );
          }
        }
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      8257: (e, t, o) => {
        "use strict";
        o(7294), o(7313);
      },
      390: (e, t, o) => {
        "use strict";
        o.d(t, { w: () => s });
        var n,
          i = o(7294),
          r = o(7313),
          a = o(4727);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(n || (n = {}));
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
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            let e, t, o;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (o = this.props.transform.scale))
              : ((e = (0, r.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, a.UU)(
                        (0, a.mT)(
                          (0, r.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
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
                    : (0, r.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let s = (0, r.Kg)(e),
              l = (0, r.xs)(t),
              c = (0, r.Kg)(o);
            return i.createElement(
              "vsg-transform",
              {
                translation: s,
                rotation: l,
                scale: c,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": n[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
      },
      684: (e, t, o) => {
        "use strict";
        var n = o(655),
          i = o(7313),
          r = o(7056);
        class a extends i.Mo {
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
        (0, n.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      4727: (e, t, o) => {
        "use strict";
        function n() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function i(e, t) {
          return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
        }
        function r(e, t, o) {
          return {
            x: t.x + e * (o.x - t.x),
            y: t.y + e * (o.y - t.y),
            z: t.z + e * (o.z - t.z),
          };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function s(e, t) {
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
        function p(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function h(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            o = 0.5 * e.y,
            n = 0.5 * e.z,
            i = Math.cos(t),
            r = Math.cos(o),
            a = Math.cos(n),
            s = Math.sin(t),
            l = Math.sin(o),
            c = Math.sin(n);
          return {
            w: i * r * a + s * l * c,
            x: s * r * a + i * l * c,
            y: i * l * a - s * r * c,
            z: i * r * c - s * l * a,
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
        function m(e, t, o) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [o.x, o.y, o.z],
          ];
        }
        function g(e) {
          let t = p(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function _(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        o.d(t, {
          Fs: () => l,
          JR: () => d,
          LY: () => p,
          M9: () => g,
          Oq: () => n,
          Pd: () => u,
          UU: () => h,
          Zj: () => a,
          dq: () => _,
          eQ: () => s,
          mT: () => c,
          q9: () => r,
          tS: () => m,
          ui: () => i,
        });
      },
      7500: (e, t, o) => {
        "use strict";
        o.d(t, { h: () => r });
        var n = o(655),
          i = o(4671);
        class r {
          constructor() {
            (this.m_mailbox = new i.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return r.instance || (r.instance = new r()), r.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((o, i) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                let n = { type: "transform_request", id: e, flPushDistance: t },
                  r = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    n,
                    "transform_response",
                  );
                r.id == e && r.transform
                  ? o(r.transform)
                  : i("requestSGTransform failed");
              }),
            );
          }
        }
      },
      4671: (e, t, o) => {
        "use strict";
        o.d(t, { N: () => r });
        var n = o(655),
          i = o(7056);
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
            return (0, n.mG)(this, void 0, void 0, function* () {
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
            return new Promise((o, n) => {
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
            return (0, n.mG)(this, void 0, void 0, function* () {
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
            let n = Object.assign({}, t);
            return (
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
              (n.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, n),
              this.WaitForMessage(o, n.message_id)
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
        (r.s_nNextMailboxNumber = 1),
          (0, n.gn)([i.ak], r.prototype, "OpenWebSocketToHost", null),
          (0, n.gn)([i.ak], r.prototype, "OnWebSocketOpen", null),
          (0, n.gn)([i.ak], r.prototype, "OnWebSocketClose", null),
          (0, n.gn)([i.ak], r.prototype, "WebSocketSend", null),
          (0, n.gn)([i.ak], r.prototype, "OnWebSocketMessage", null);
      },
      5867: (e, t, o) => {
        "use strict";
        var n, i, r, a;
        function s() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : n.Unknown;
        }
        o.d(t, {
          GC: () => k,
          Kf: () => d,
          Kg: () => I,
          LL: () => i,
          Op: () => s,
          Pw: () => y,
          QZ: () => r,
          Qu: () => R,
          XX: () => h,
          Z9: () => u,
          a0: () => E,
          l0: () => b,
          lx: () => C,
          nX: () => l,
          qA: () => n,
          qC: () => m,
          qR: () => g,
          wU: () => c,
          xY: () => v,
          zA: () => M,
          zq: () => a,
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
          })(r || (r = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let l = 0,
          c = 0,
          d = -1;
        var p, h, u, m, g, _, v, S, y, b, f, C, k, I, E, M, R;
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
        })(p || (p = {})),
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
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
              (e[(e.EnableClickStabilization = 134217728)] =
                "EnableClickStabilization"),
              (e[(e.MultiCursor = 268435456)] = "MultiCursor");
          })(u || (u = {})),
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
          })(C || (C = {})),
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
          })(I || (I = {})),
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
          })(E || (E = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(M || (M = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(R || (R = {}));
      },
      7074: (e, t, o) => {
        "use strict";
        var n, i, r, a, s, l, c;
        o.d(t, { Uk: () => n, sH: () => a, vS: () => s }),
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
              (e[(e.Prop_Driver_Reserved_03 = 2111)] =
                "Prop_Driver_Reserved_03"),
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.SecondaryClick = 1)] = "SecondaryClick"),
              (e[(e.PrimaryClick = 2)] = "PrimaryClick");
          })(i || (i = {})),
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
          })(r || (r = {})),
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
          })(c || (c = {}));
      },
      5928: (e, t, o) => {
        "use strict";
        o.d(t, { L: () => f });
        var n,
          i = o(655),
          r = o(7294),
          a = o(7056),
          s = o(3568),
          l = o(1569),
          c = o(9809),
          d = o(5211),
          p = o(2893),
          h = o(7062),
          u = o(2188),
          m = o(8242),
          g = o(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(n || (n = {}));
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
              r.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                r.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                }),
              )
            );
          }
          renderBar(e, t, o) {
            let n = { width: String(100 * o) + "%" };
            return r.createElement(
              "div",
              { className: "TriggerBar " + t },
              r.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e),
              ),
              r.createElement(
                "div",
                { className: "TriggerBarBackground" },
                r.createElement("div", {
                  className: "TriggerBarContent",
                  style: n,
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
                i = this.props.side == n.Right,
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
              this.props.side == n.Left
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
                      this.props.sourcePath,
                    ),
                  ),
                  this.renderHeaderVisualization(),
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
                      }),
                    ),
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
                  }),
                ),
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
                    (0, s.Xx)("#SourceInputMode_Position"),
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
                            r.createElement("div", { className: t }),
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
          renderSource(e, t, o) {
            let n = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return r.createElement(v, {
                  key: n,
                  side: o,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return r.createElement(S, {
                  key: n,
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
                return r.createElement(y, {
                  key: n,
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
                return r.createElement(
                  "div",
                  { key: n },
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
                    r.createElement(p.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              o = this.ControllerTypeInfo,
              i = 0,
              a = [];
            for (let e in o.input_source) {
              let t = o.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let n = this.EstimateSourceHeight(t);
              (i += n),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: n,
                });
            }
            let s = 8;
            i > 16 && (s = i / 2);
            let l = 0,
              c = a.sort((e, t) => e.order - t.order);
            for (let o of c) {
              l += o.height;
              let i = l > s ? n.Right : n.Left,
                r = this.renderSource(o.sSourcePath, o.inputSource, i);
              r && (i == n.Left ? e.push(r) : t.push(r));
            }
            return r.createElement(
              "div",
              { className: "ControllerVisualizer" },
              r.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e,
              ),
              this.renderImage(),
              r.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t,
              ),
            );
          }
        }
        (0, i.gn)([a.ak], b.prototype, "OnImageLoaded", null),
          (0, i.gn)([a.ak], b.prototype, "OnImageReflow", null);
        let f = class extends r.Component {
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
                    (this.m_observeDisposer = (0, u.N7)(
                      c.I,
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
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
            );
          }
          render() {
            let e,
              t = [],
              o = this.GetSortedDevices();
            if (!o)
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
                  (0, s.Xx)("#TestController_NoController"),
                ),
              );
            for (let n of o)
              "TrackedDeviceClass_HMD" != n.class &&
                (n.root_path == this.state.devicePath && (e = n.serial_number),
                t.push({
                  value: n.root_path,
                  sLabel: (0, s.Xx)("#" + n.root_path),
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
                }),
            );
          }
        };
        (0, i.gn)([a.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, i.gn)([a.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, i.gn)([h.Pi], f));
      },
      9671: (e, t, o) => {
        "use strict";
        o.d(t, { V: () => c });
        var n = o(655),
          i = o(7294),
          r = o(7056),
          a = o(3568),
          s = o(1569);
        class l extends i.Component {
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
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:",
                ),
              ),
              e.pressed)
            )
              for (let o of e.pressed)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o,
                  ),
                );
            else
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Touched:",
                ),
              ),
              e.touched)
            )
              for (let o of e.touched)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o,
                  ),
                );
            else
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Supported:",
                ),
              ),
              e.supported_buttons)
            )
              for (let o of e.supported_buttons)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    o,
                  ),
                );
            else
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Axis:",
              ),
            );
            for (let o of e.axis)
              t.push(
                i.createElement(
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
              ? i.createElement(
                  "div",
                  { className: "FlexRow" },
                  i.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    i.createElement("div", { className: "Label" }, "Left"),
                    this.renderController(this.state.currentState.left),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    i.createElement("div", { className: "Label" }, "Right"),
                    this.renderController(this.state.currentState.right),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    i.createElement("div", { className: "Label" }, "HMD"),
                    this.renderController(this.state.currentState.hmd),
                  ),
                )
              : i.createElement(
                  "div",
                  { className: "Label" },
                  (0, a.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, n.gn)([r.ak], l.prototype, "OnLegacyInputFrame", null);
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
                i.createElement(l, null),
              ),
            );
          }
        }
      },
      792: (e, t, o) => {
        "use strict";
        o.d(t, { C: () => l });
        var n = o(655),
          i = o(7056),
          r = o(2188),
          a = o(1628);
        class s {
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.Load(), (0, r.EH)(() => this.Save());
            });
          }
          Load() {
            var e, t, o, i, r;
            return (0, n.mG)(this, void 0, void 0, function* () {
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
                    (i = a.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetX",
                    )) && void 0 !== i
                    ? i
                    : 0),
                (this.m_fBackgroundOffsetZ =
                  null !==
                    (r = a.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetZ",
                    )) && void 0 !== r
                    ? r
                    : 0);
            });
          }
          Save() {
            return (0, n.mG)(this, void 0, void 0, function* () {});
          }
        }
        (0, n.gn)([r.LO], s.prototype, "m_bShowFloor", void 0),
          (0, n.gn)([r.LO], s.prototype, "m_bShowFloorFar", void 0),
          (0, n.gn)([r.LO], s.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, n.gn)([r.LO], s.prototype, "m_fBackgroundOffsetX", void 0),
          (0, n.gn)([r.LO], s.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, n.gn)([i.ak], s.prototype, "Load", null),
          (0, n.gn)([i.ak], s.prototype, "Save", null);
        const l = new s();
        window.ConstructStore = l;
      },
      9626: (e, t, o) => {
        "use strict";
        o.d(t, {
          A3: () => m,
          BV: () => y,
          Dz: () => g,
          J_: () => h,
          fq: () => u,
        });
        var n = o(655),
          i = o(1569),
          r = o(7056),
          a = o(2188),
          s = o(4790),
          l = o(1628),
          c = o(7176),
          d = o(7373),
          p = o(2758);
        const h = ["system.dashboard.quicklaunch", void 0].filter(Boolean);
        var u, m, g, _;
        function v(e) {
          return (
            !(!(null == e ? void 0 : e.startsWith(c.wX)) || e == c.T2) ||
            e == c.AC
          );
        }
        !(function (e) {
          (e[(e.Large = 0)] = "Large"), (e[(e.Medium = 1)] = "Medium");
        })(u || (u = {})),
          (function (e) {
            (e[(e.PlayArea = 0)] = "PlayArea"),
              (e[(e.Dashboard = 1)] = "Dashboard");
          })(m || (m = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.View = 1)] = "View"),
              (e[(e.Theater = 2)] = "Theater");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Persistent = 0)] = "Persistent"),
              (e[(e.OnDemand = 1)] = "OnDemand");
          })(_ || (_ = {}));
        class S {
          constructor() {
            (this.m_bVS = !1),
              (this.m_eVSMode = g.None),
              (this.m_sVSOverlayKey = void 0),
              (this.m_nNumRemoteUsers = 0),
              (this.m_nNumRemoteVS = 0),
              (this.m_eTheaterStereo = i.Ko.Mono),
              (this.m_eIncognitoMode = i.Qu.Unavailable),
              (this.m_mapOverlayState = new Map()),
              (this.m_setOverlaysViewedThisSession = new Set()),
              (this.m_mapActivePooledPopupRequests = new Map()),
              (this.m_bRoomViewActive = void 0),
              (this.m_bRoomViewStreaming = void 0),
              (this.m_bGamepadFocusActive = void 0),
              (this.m_bLinkStreamActive = void 0),
              (this.m_bIsLinkClient = void 0),
              (this.m_bIsLinkServer = void 0),
              (this.m_streamingMode = void 0),
              (this.m_mapTabIdForSummonKey = new Map()),
              (this.m_mapSummonKeyForTabId = new Map()),
              (this.m_unNextTabId = 1);
          }
          Init() {
            var e;
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, a.EH)(() => this.SaveSessionDevData()),
                (0, a.EH)(this.updateBodyClasses),
                null ===
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.RegisterForRoomViewChangedEvents) ||
                  void 0 === e ||
                  e.call(VRHTML, this.onRoomViewChanged),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForGamepadFocusChangedEvents(
                    this.onGamepadFocusChanged,
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForLinkStreamStatusEvents(
                    this.onLinkStreamStatusEvents,
                  );
            });
          }
          LoadSessionDevData() {
            var e, t, o, i, r;
            return (0, n.mG)(this, void 0, void 0, function* () {
              const n = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(S.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bShowLegacyBar =
                null !== (t = n.m_bShowLegacyBar) && void 0 !== t && t),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (o = n.m_fVRGamepadUI_MetersPerPixel) && void 0 !== o
                    ? o
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (i = n.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== i
                    ? i
                    : 1.17);
              for (const e of null !== (r = n.m_rgPooledPopups) && void 0 !== r
                ? r
                : [])
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {
                m_bShowLegacyBar: this.m_bShowLegacyBar,
                m_rgPooledPopups: Array.from(
                  this.m_mapActivePooledPopupRequests.values(),
                ),
                m_fVRGamepadUI_MetersPerPixel:
                  this.m_fVRGamepadUI_MetersPerPixel,
                m_fVRGamepadUI_GlobalActiveOverlayScale:
                  this.m_fVRGamepadUI_GlobalActiveOverlayScale,
              };
              sessionStorage.setItem(
                S.k_strSessionStorageKey,
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
          getTheaterOverlay() {
            for (const [e, t] of this.m_mapOverlayState.entries())
              if (t.dockLocation == s.RA.Theater) return e;
            return null;
          }
          get priorityGamepadFocusOverlay() {
            const e = [s.RA.Theater, s.RA.World, s.RA.RightHand, s.RA.LeftHand];
            for (const t of e)
              for (const [e, o] of this.m_mapOverlayState.entries())
                if (o.dockLocation == t && v(e)) return e;
            return null;
          }
          get eTheaterCurvature() {
            return l.G3.settings.get(c.Ob);
          }
          ToggleTheaterCurvature() {
            const e =
              this.eTheaterCurvature == s.Uj.Curved ? s.Uj.Flat : s.Uj.Curved;
            l.G3.SetSettingsValue(c.Ob, e.toString());
          }
          ToggleTheaterStereo() {
            const e =
              this.m_eTheaterStereo == i.Ko.Mono ? i.Ko.Parallel : i.Ko.Mono;
            this.m_eTheaterStereo = e;
          }
          HideTheaterOverlay(e = s.RA.Dashboard, t) {
            for (const [o, n] of this.m_mapOverlayState.entries())
              n.dockLocation == s.RA.Theater &&
                ((n.dockLocation = e),
                t &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(o)));
          }
          get isDarkMode() {
            return this.isTheaterMode;
          }
          setIncognitoMode(e) {
            this.m_eIncognitoMode = e;
          }
          get ControlBarTint() {
            return this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null;
          }
          get GrabHandleTint() {
            return this.isDarkMode ? { r: 0.3, g: 0.3, b: 0.3 } : null;
          }
          get WorldLightingGain() {
            return this.isDarkMode ? { r: 0.2, g: 0.2, b: 0.2 } : null;
          }
          get isGroupMode() {
            return !1;
          }
          get allowScreenSharing() {
            return !1;
          }
          get isVRGamepadUIReady() {
            return p.U.BOverlayExists(c.T2) && p.U.BOverlayExists(c.BZ);
          }
          get isVRGamepadUI() {
            return (
              !l.G3.settings.get(c.YL) ||
              p.U.BOverlayExists(c.T2) ||
              p.U.BOverlayExists(c.BZ)
            );
          }
          get currentDashboardPosition() {
            return this.isVRGamepadUI
              ? d._.VRGamepadUI
              : l.G3.settings.get(c.o1);
          }
          get currentTheaterScreenSize() {
            return l.G3.settings.get(c.CS);
          }
          get currentTheaterScreenAlignment() {
            return l.G3.settings.get(c.rT);
          }
          updateBodyClasses() {
            this.isVRGamepadUI
              ? window.document.body.classList.add("VRGamepadUI")
              : window.document.body.classList.remove("VRGamepadUI");
          }
          onRoomViewChanged(e) {
            this.m_bRoomViewActive = e;
          }
          onRoomViewStreamChanged(e) {
            this.m_bRoomViewStreaming = e;
          }
          onGamepadFocusChanged(e) {
            this.m_bGamepadFocusActive = e;
          }
          onLinkStreamStatusEvents(e) {
            const t = !!(1 & e),
              o = !!(2 & e),
              n = !!(4 & e),
              i = 8 & e ? _.OnDemand : _.Persistent;
            t != this.m_bLinkStreamActive && (this.m_bLinkStreamActive = t),
              o != this.m_bIsLinkClient && (this.m_bIsLinkClient = o),
              n != this.m_bIsLinkServer && (this.m_bIsLinkServer = n),
              i != this.m_streamingMode && (this.m_streamingMode = i);
          }
        }
        (S.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
          (0, n.gn)([a.LO], S.prototype, "m_bShowLegacyBar", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_bVS", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_eVSMode", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_sVSOverlayKey", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_nNumRemoteUsers", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_nNumRemoteVS", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_eTheaterStereo", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_eIncognitoMode", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_mapOverlayState", void 0),
          (0, n.gn)(
            [a.LO],
            S.prototype,
            "m_setOverlaysViewedThisSession",
            void 0,
          ),
          (0, n.gn)(
            [a.LO],
            S.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, n.gn)(
            [a.LO],
            S.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, n.gn)(
            [a.LO],
            S.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, n.gn)([a.LO], S.prototype, "m_bRoomViewActive", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_bRoomViewStreaming", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_bGamepadFocusActive", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_bLinkStreamActive", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_bIsLinkClient", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_bIsLinkServer", void 0),
          (0, n.gn)([a.LO], S.prototype, "m_streamingMode", void 0),
          (0, n.gn)([r.ak], S.prototype, "LoadSessionDevData", null),
          (0, n.gn)([r.ak], S.prototype, "SaveSessionDevData", null),
          (0, n.gn)([a.Fl], S.prototype, "priorityGamepadFocusOverlay", null),
          (0, n.gn)([a.Fl], S.prototype, "eTheaterCurvature", null),
          (0, n.gn)([a.aD], S.prototype, "setIncognitoMode", null),
          (0, n.gn)([a.Fl], S.prototype, "WorldLightingGain", null),
          (0, n.gn)([a.Fl], S.prototype, "isVRGamepadUIReady", null),
          (0, n.gn)([a.Fl], S.prototype, "isVRGamepadUI", null),
          (0, n.gn)([r.ak], S.prototype, "updateBodyClasses", null),
          (0, n.gn)([r.ak], S.prototype, "onRoomViewChanged", null),
          (0, n.gn)([r.ak], S.prototype, "onRoomViewStreamChanged", null),
          (0, n.gn)([r.ak], S.prototype, "onGamepadFocusChanged", null),
          (0, n.gn)([r.ak], S.prototype, "onLinkStreamStatusEvents", null);
        const y = new S();
        window.DashboardStore = y;
      },
      1176: (e, t, o) => {
        "use strict";
        var n = o(655),
          i = o(7294),
          r = o(3935),
          a = o(7062),
          s = o(3365),
          l = (o(1783), o(1569)),
          c = o(8980),
          d = o(3568),
          p = o(5211),
          h = o(7056),
          u = o(8048),
          m = o(2893),
          g = o(2188),
          _ = o(1114),
          v = o(8155),
          S = o(355);
        o(6592);
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
                        "#SourceInputMode_" + e.GetMode(this.props.iMode),
                      ),
                      e.GetControllerInputName,
                    ),
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
                      (0, d.Xx)("#Button_Delete"),
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, d.Xx)("#Button_Cancel"),
                    ),
                  ),
                ),
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
                    (0, d.Xx)(
                      "#SourceInputMode_" + e.GetMode(this.props.iMode),
                    ),
                  ),
                ),
                !this.props.bReadOnly &&
                  i.createElement("img", {
                    className:
                      "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                    src: "images/bindingui/icon_trash.svg",
                    onClick: this.OnDelete,
                  }),
                this.renderDeleteConfirmModal(),
              );
            let t = p.c6.GetInputModesForSourceType(
              e.GetInputSourceType,
              e.GetInputSourceForceSupport,
            );
            if (0 == t.length) return null;
            let o = t.map(
              (e, t) =>
                new v.GZ(
                  e,
                  (0, d.Xx)("#SourceInputMode_" + e),
                  null,
                  (0, d.Xx)("#SourceInputMode_" + e + "_tooltip"),
                ),
            );
            o.push(new v.GZ("none", (0, d.Xx)("#SourceInputMode_none")));
            let n =
                e.GetButtonSide == p.ik.eButtonSide_Left
                  ? "#BindingUI_LeftHandController"
                  : "#BindingUI_RightHandController",
              r = p.c6.SelectedControllerTypeLocalizedName;
            e.GetButtonSide != p.ik.eButtonSide_None &&
              (r = (0, d.Xx)(n, r, ""));
            let a = (0, d.Xx)(
              "#SourceInputMode_SelectMode",
              r,
              e.GetControllerInputName,
            );
            return i.createElement(
              "div",
              { className: "FlexRow BindingHeaderWrapper" },
              i.createElement(v.vs, {
                sModalTitleString: a,
                vecOptions: o,
                sValueSelectedItem: e.GetMode(this.props.iMode),
                bShowOptionsOnStart: this.props.bShowModeOptionsDropDownOnStart,
                sLocalizedSelectedItem: (0, d.Xx)(
                  "#SourceInputMode_" + e.GetMode(this.props.iMode),
                ),
                fnOptionSelected: this.OnSourceModeChanged,
              }),
              i.createElement("img", {
                className:
                  "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                src: "images/bindingui/icon_trash.svg",
                onClick: this.OnDelete,
              }),
              this.renderDeleteConfirmModal(),
            );
          }
        };
        (0, n.gn)([h.ak], y.prototype, "OnDelete", null),
          (0, n.gn)([h.ak], y.prototype, "OnDeleteConfirmed", null),
          (0, n.gn)([h.ak], y.prototype, "OnDeleteCancel", null),
          (0, n.gn)([h.ak], y.prototype, "OnSourceModeChanged", null),
          (0, n.gn)([h.ak], y.prototype, "renderDeleteConfirmModal", null),
          (y = (0, n.gn)([a.Pi], y));
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
              o = "FlexRow BindingActionWrapper";
            null == this.props.SelectedAction && (o += " None");
            let n = "Label BindingLabel";
            return (
              this.props.bReadOnly && (n += " ReadOnly"),
              i.createElement(
                "div",
                { className: o },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, d.Xx)(
                      this.props.sLocalizedInputType + "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "div",
                    { className: n },
                    (0, d.Xx)(this.props.sLocalizedInputType),
                  ),
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
                    { className: n + " BindingLabelAction" },
                    t,
                  ),
              )
            );
          }
        }
        class f extends i.Component {
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
                let o = t.GetParameter(this.props.iMode, e.mode, e.property);
                (o =
                  null == o
                    ? e.default
                    : "float" == e.type
                      ? parseFloat(o)
                      : "int" == e.type
                        ? parseInt(o)
                        : "bool" == e.type
                          ? "true" == o || "1" == o
                          : o.toString()),
                  (this.state[e.variableName] = o);
              });
          }
          EnsurePropertySet(e) {
            let t = !1;
            for (let o of this.defaultProperties)
              if (o.property == e) {
                (t = !0),
                  this.props.controllerWatcher.forEach((e) => {
                    if (
                      null ==
                      e.GetParameter(this.props.iMode, o.mode, o.property)
                    ) {
                      console.log(
                        "Setting currently unset param to default: ",
                        e.GetParameter(this.props.iMode, o.mode, o.property),
                        this.props.iMode,
                        o.mode,
                        o.property,
                        o.default.toString(),
                      ),
                        e.SetParameter(
                          this.props.iMode,
                          o.mode,
                          o.property,
                          o.default.toString(),
                        );
                      let t = {};
                      (t[o.variableName] = o.default), this.setState(t);
                    }
                  });
                break;
              }
            t ||
              console.log(
                "Tried to ensure property value %s was set, which is not in the property map.",
                e,
              );
          }
          onPropertyChanged(e, t) {
            let o = !1;
            for (let n of this.defaultProperties)
              if (n.property == e) {
                o = !0;
                let e = {};
                (e[n.variableName] = t),
                  this.setState(e),
                  this.props.controllerWatcher.forEach((e) => {
                    e.SetParameter(
                      this.props.iMode,
                      n.mode,
                      n.property,
                      t.toString(),
                    );
                  });
                break;
              }
            o ||
              console.log(
                "Tried to set property %s which is not in the property map.",
                e,
              );
          }
          onPropertyReset(e) {
            return new Promise((t) => {
              for (let o of this.defaultProperties)
                if (o.property == e) {
                  let e = {};
                  (e[o.variableName] = o.default),
                    this.setState(e, t),
                    this.props.controllerWatcher.forEach((e) => {
                      e.SetParameter(
                        this.props.iMode,
                        o.mode,
                        o.property,
                        void 0,
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
                  this.props.iMode,
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
              this.state.bSettingsVisible && this.renderSettingsContent(),
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
                        }),
                    ),
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
              e && this.renderSettingsModal(),
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
              new v.GZ("-nonitem", (0, d.Xx)("#SourceInputAction_NoItems")),
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
            let o = p.c6.GetBooleanActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector1DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector1Actions");
            let o = p.c6.GetVector1ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector2DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector2Actions");
            let o = p.c6.GetVector2ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector3DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector3Actions");
            let o = p.c6.GetVector3ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetSkeletonDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_SkeletonActions");
            let o = p.c6.GetSkeletonActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetPoseDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_PoseActions");
            let o = p.c6.GetPoseActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetHapticsDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_HapticsActions");
            let o = p.c6.GetHapticsActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetActionDropDownItem(e) {
            let t,
              o = e.localized_name;
            return (
              "mandatory" == e.requirement &&
                (t =
                  " (" + (0, d.Xx)("#BindingUI_SelectAction_Required") + ")"),
              new v.GZ(e.name, o, t)
            );
          }
        }
        (0, n.gn)([h.ak], f.prototype, "onPropertyChanged", null),
          (0, n.gn)([h.ak], f.prototype, "onPropertyReset", null),
          (0, n.gn)([h.ak], f.prototype, "OnEdit", null),
          (0, n.gn)([h.ak], f.prototype, "OnShowModeSettings", null),
          (0, n.gn)([h.ak], f.prototype, "CloseModeSettings", null),
          (0, n.gn)([h.ak], f.prototype, "renderFooter", null),
          (0, n.gn)([h.ak], f.prototype, "renderHeader", null),
          (0, n.gn)([g.Fl], f.prototype, "WrapperClasses", null);
        p.NK.eTrackPadInvert_None;
        class C extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, d.Xx)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.Xx)(this.props.labelName),
                ),
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
                  }),
                ),
                i.createElement(
                  "div",
                  { className: "Label RangeLabel" },
                  this.props.renderValue(this.props.value),
                ),
              ),
              this.props.onReset &&
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsResetButton",
                    onClick: this.props.onReset,
                  },
                  (0, d.Xx)("#SourceInputMode_ResetParameterToDefault"),
                ),
            );
          }
        }
        class k extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, d.Xx)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.Xx)(this.props.labelName),
                ),
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
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, d.Xx)("#SourceInputMode_ResetParameterToDefault"),
              ),
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
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.Xx)(this.props.labelName),
                ),
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
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, d.Xx)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        }
        let E = class extends f {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0].GetInputSource,
              o = t.value || t.force ? 0.2 : 0;
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
                mode: "click",
              },
              {
                property: "haptic_amplitude",
                default: o,
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
              case "touch":
                return (0, d.Xx)("#SourceInputMode_Touch");
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
              o,
              n = this.props.controllerWatcher[0].GetInputSource,
              r = [];
            n.click &&
              r.push(
                new v.GZ("click", this.LocalizeForceInputModeString("click")),
              ),
              n.touch &&
                r.push(
                  new v.GZ("touch", this.LocalizeForceInputModeString("touch")),
                ),
              n.value &&
                r.push(
                  new v.GZ("value", this.LocalizeForceInputModeString("value")),
                ),
              n.force &&
                r.push(
                  new v.GZ("force", this.LocalizeForceInputModeString("force")),
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
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              s &&
                (t = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(C, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(C, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: l,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              this.props.bToggleButtonMode &&
                (o = [
                  i.createElement(k, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: l,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state",
                    ),
                  }),
                  i.createElement(k, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: l,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state",
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                o,
                r.length > 1 &&
                  i.createElement(I, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: l,
                    vecValues: r,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: l,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: l,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: l,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close"),
                ),
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
              this.renderFooter(),
            );
          }
        };
        (0, n.gn)([h.ak], E.prototype, "OnClickActionChanged", null),
          (0, n.gn)([h.ak], E.prototype, "OnTouchActionChanged", null),
          (0, n.gn)([g.Fl], E.prototype, "BShowClickOptions", null),
          (0, n.gn)([g.Fl], E.prototype, "BShowTouchOptions", null),
          (E = (0, n.gn)([a.Pi], E));
        let M = class extends f {
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
              case "touch":
                return (0, d.Xx)("#SourceInputMode_Touch");
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
              o = e.GetInputSource;
            return (
              o.value ||
              o.force ||
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
              e.touch && t.push("touch"),
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
              o,
              n = this.props.controllerWatcher[0],
              r = (n.GetInputSource, this.RInputOptions),
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
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              l &&
                (t = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(C, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(C, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              this.props.bToggleButtonMode &&
                (o = [
                  i.createElement(k, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: c,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state",
                    ),
                  }),
                  i.createElement(k, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: c,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state",
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                o,
                a.length > 1 &&
                  i.createElement(I, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: c,
                    vecValues: a,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: c,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: c,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: c,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                "complex" == this.state.sSubMode &&
                  i.createElement(
                    "div",
                    null,
                    i.createElement(C, {
                      labelName: "#SourceInputMode_LongPressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flLongPressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "long_press_delay",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "long_press_delay",
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                    i.createElement(C, {
                      labelName: "#SourceInputMode_DoublePressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flDoublePressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "double_press_delay",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "double_press_delay",
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                  ),
                n.GetInputSourceTouchSupport &&
                  i.createElement(k, {
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
                  (0, d.Xx)("#Button_Close"),
                ),
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
              o = this.IsComplex;
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              o &&
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
                    }),
                ),
              !o &&
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
                    (0, d.Xx)("#SourceInputMode_MoreOptions"),
                  ),
                ),
              this.renderFooter(),
            );
          }
        };
        (0, n.gn)([g.Fl], M.prototype, "IsComplex", null),
          (0, n.gn)([g.Fl], M.prototype, "BShowClickOptions", null),
          (0, n.gn)([g.Fl], M.prototype, "BShowTouchOptions", null),
          (0, n.gn)([g.Fl], M.prototype, "RInputOptions", null),
          (0, n.gn)([h.ak], M.prototype, "OnHeldActionChanged", null),
          (0, n.gn)([h.ak], M.prototype, "OnLongActionChanged", null),
          (0, n.gn)([h.ak], M.prototype, "OnSingleActionChanged", null),
          (0, n.gn)([h.ak], M.prototype, "OnDoubleActionChanged", null),
          (0, n.gn)([h.ak], M.prototype, "OnClickActionChanged", null),
          (0, n.gn)([h.ak], M.prototype, "OnTouchActionChanged", null),
          (0, n.gn)([h.ak], M.prototype, "OnToggleComplex", null),
          (M = (0, n.gn)([a.Pi], M));
        let R = class extends f {
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(C, {
                  labelName: "#SourceInputMode_LongPressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flLongPressDelay,
                  onReset: this.onPropertyReset.bind(this, "long_press_delay"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "long_press_delay",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(C, {
                  labelName: "#SourceInputMode_DoublePressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flDoublePressDelay,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "double_press_delay",
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "double_press_delay",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close"),
                ),
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
                  }),
              ),
              this.renderFooter(),
            );
          }
        };
        (0, n.gn)([h.ak], R.prototype, "OnHeldActionChanged", null),
          (0, n.gn)([h.ak], R.prototype, "OnLongActionChanged", null),
          (0, n.gn)([h.ak], R.prototype, "OnSingleActionChanged", null),
          (0, n.gn)([h.ak], R.prototype, "OnDoubleActionChanged", null),
          (0, n.gn)([h.ak], R.prototype, "OnClickActionChanged", null),
          (0, n.gn)([h.ak], R.prototype, "OnTouchActionChanged", null),
          (R = (0, n.gn)([a.Pi], R));
        let w = class extends f {
          render() {
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              this.renderFooter(),
            );
          }
        };
        w = (0, n.gn)([a.Pi], w);
        let T = class extends f {
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(C, {
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
                i.createElement(C, {
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
                i.createElement(k, {
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
                  (0, d.Xx)("#Button_Close"),
                ),
              )
            );
          }
          OnActionChanged(e, t) {
            this.props.controllerWatcher.forEach((o) => {
              p.c6.SetActionForInputModeType(
                o.GetFullInputPath,
                this.props.iMode,
                e,
                t,
                ["dpad", "dpad_click", "dpad_touch"],
              );
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = "dpad" == this.props.sMode,
              n = [
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
              o &&
                i.createElement(
                  "div",
                  { className: "FlexRow BindingActionWrapper" },
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel" },
                    (0, d.Xx)("#SourceInputMode_SubMode"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel BindingAction" },
                    this.state.bEditMode &&
                      i.createElement(v.vs, {
                        sLocalizedSelectedItem: r,
                        sValueSelectedItem: this.state.sSubMode,
                        vecOptions: n,
                        fnOptionSelected: this.onPropertyChanged.bind(
                          this,
                          "sub_mode",
                        ),
                      }),
                    !this.state.bEditMode && r,
                  ),
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
              this.renderFooter(),
            );
          }
        };
        (0, n.gn)([h.ak], T.prototype, "OnActionChanged", null),
          (T = (0, n.gn)([a.Pi], T));
        let O = class extends f {
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
                  },
                );
            let o = t.GetInputSourceDefaultDeadzone;
            this.defaultProperties.push(
              {
                property: "deadzone_pct",
                default: o,
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
              },
            ),
              this.LoadDefaults(),
              (this.state.eTrackpadInvertMode = t.GetTrackpadInvertState(
                this.props.iMode,
              ));
          }
          BModeHasSettings() {
            return !0;
          }
          OnTrackpadInvertModeChanged(e, t) {
            let o = this.props.controllerWatcher[0],
              n = o.GetTrackpadInvertState(this.props.iMode);
            switch (e) {
              case "y":
                n = t
                  ? n == p.NK.eTrackPadInvert_X
                    ? p.NK.eTrackPadInvert_XY
                    : p.NK.eTrackPadInvert_Y
                  : n == p.NK.eTrackPadInvert_XY
                    ? p.NK.eTrackPadInvert_X
                    : p.NK.eTrackPadInvert_None;
                break;
              case "x":
                n = t
                  ? n == p.NK.eTrackPadInvert_Y
                    ? p.NK.eTrackPadInvert_XY
                    : p.NK.eTrackPadInvert_X
                  : n == p.NK.eTrackPadInvert_XY
                    ? p.NK.eTrackPadInvert_Y
                    : p.NK.eTrackPadInvert_None;
            }
            o.SetTrackpadInvertState(this.props.iMode, n),
              this.setState({ eTrackpadInvertMode: n });
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
                  i.createElement(k, {
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
                    i.createElement(C, {
                      labelName: "#SourceInputMode_StickyClick_Activate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyActivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_activate_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_activate_threshold",
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    }),
                  ),
                  t.push(
                    i.createElement(C, {
                      labelName: "#SourceInputMode_StickyClick_Deactivate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyDeactivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_deactivate_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_deactivate_threshold",
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    }),
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(k, {
                  labelName: "#SourceInputMode_InvertYAxis",
                  elementId: e,
                  value:
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_Y ||
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_XY,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "y"),
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_InvertXAxis",
                  elementId: e,
                  value:
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_X ||
                    this.state.eTrackpadInvertMode == p.NK.eTrackPadInvert_XY,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "x"),
                }),
                i.createElement(C, {
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
                i.createElement(C, {
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
                i.createElement(C, {
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
                  (0, d.Xx)("#Button_Close"),
                ),
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
              o = [];
            return (
              this.GetVector2DropDownItems(o, !0),
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
                  vecOptions: o,
                  fnOptionSelected: this.OnPositionActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.gn)([h.ak], O.prototype, "OnTrackpadInvertModeChanged", null),
          (0, n.gn)([h.ak], O.prototype, "OnTrackpadInvertModeReset", null),
          (0, n.gn)([h.ak], O.prototype, "OnClickActionChanged", null),
          (0, n.gn)([h.ak], O.prototype, "OnTouchActionChanged", null),
          (0, n.gn)([h.ak], O.prototype, "OnPositionActionChanged", null),
          (O = (0, n.gn)([a.Pi], O));
        let D = class extends f {
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
              o = "smooth" === this.state.sScrollMode,
              n =
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
                    (0, d.Xx)("#BindingSettingsModal_Title"),
                  ),
                ),
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
                    this.state.sScrollMode,
                  ),
                  onReset: this.onPropertyReset.bind(this, "scroll_mode"),
                  onChange: this.onPropertyChanged.bind(this, "scroll_mode"),
                }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_TrackpadAspectRatio",
                    elementId: e,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollTrackpadAspectRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName: "#SourceInputMode_SmoothScroll_Multiplier",
                    elementId: e,
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: this.state.fSmoothScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_multiplier",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_multiplier",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_AccelerationPower",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollAccelerationPower,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_acceleration_power",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_acceleration_power",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_NotchesPerTouchpad",
                    elementId: e,
                    min: 1,
                    max: 64,
                    step: 1,
                    value: this.state.fSmoothScrollHapticNotchesPerTouchpad,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName: "#SourceInputMode_SmoothScroll_StartDistance",
                    elementId: e,
                    min: 0.01,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollMinScrollStartDistance,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName: "#SourceInputMode_SmoothScroll_MinThrowVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollMinThrowVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_throw_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_throw_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 15,
                    step: 0.1,
                    value: this.state.fSmoothScrollMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName: "#SourceInputMode_SmoothScroll_Deceleration",
                    elementId: e,
                    min: 0.5,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollDeceleration,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_deceleration",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_deceleration",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 10,
                    step: 1,
                    value: this.state.unSmoothScrollMinLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 20,
                    step: 1,
                    value: this.state.unSmoothScrollMaxLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_ThrownTerminationVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollThrownTerminationVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThreshold",
                    elementId: e,
                    min: 0.1,
                    max: 2,
                    step: 0.05,
                    value: this.state.fSmoothScrollEdgeScrollThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
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
                      "smooth_scroll_edge_scroll_threshold_vertical_bias",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollVelocity",
                    elementId: e,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName: "#SourceInputMode_SmoothScroll_EdgeMinSwipe",
                    elementId: e,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeMinSwipe,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_min_swipe",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_min_swipe",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinSideScrollRatio",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.5,
                    value: this.state.fSmoothScrollMinSideScrollRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 50,
                    step: 0.1,
                    value: this.state.fSmoothScrollJoystickMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  n &&
                  i.createElement(C, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_Joystick_MinInputMagnitude",
                    elementId: e,
                    min: 0.005,
                    max: 0.2,
                    step: 0.005,
                    value: this.state.fSmoothScrollJoystickMinInputMagnitude,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_globalscalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(k, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_HapticOnTouchStart",
                    key: "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadHapticOnTouchStartEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(k, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_DirectDirectionLock",
                    key: "discrete_scroll_trackpad_direct_directionlock_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadLockGestureDirectionEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_noisethreshold_ontouch",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_noisethreshold_onmove",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_noisethreshold_onreversal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_accumthreshold_ontouch",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_accumthreshold_onmove",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_accumthreshold_onreversal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(k, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickEnabled",
                    key: "discrete_scroll_trackpad_flick_enabled",
                    value: this.state.bDiscreteScrollTrackpadFlickEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_flick_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_flick_multiplier",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_flick_speed",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(k, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldGestureEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_slideandhold_scalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_slideandhold_bordertop",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(C, {
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
                      "discrete_scroll_trackpad_slideandhold_borderbottom",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(k, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldHapticEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldHapticEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(C, {
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
                      "discrete_scroll_joystick_ratefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(C, {
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
                      "discrete_scroll_joystick_scalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(C, {
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
                      "discrete_scroll_joystick_deadzone_horizontal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(C, {
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
                      "discrete_scroll_joystick_deadzone_vertical",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical",
                    ),
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.Xx)("#Button_Close"),
              ),
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
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.gn)([h.ak], D.prototype, "OnSave", null),
          (0, n.gn)([h.ak], D.prototype, "OnScrollActionChanged", null),
          (D = (0, n.gn)([a.Pi], D));
        let x = class extends f {
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
              o = [];
            return (
              this.GetVector1DropDownItems(o, !0),
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
                  vecOptions: o,
                  fnOptionSelected: this.OnPullActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.gn)([h.ak], x.prototype, "OnClickActionChanged", null),
          (0, n.gn)([h.ak], x.prototype, "OnTouchActionChanged", null),
          (0, n.gn)([h.ak], x.prototype, "OnPullActionChanged", null),
          (x = (0, n.gn)([a.Pi], x));
        let B = class extends f {
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
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.gn)([h.ak], B.prototype, "OnForceActionChanged", null),
          (B = (0, n.gn)([a.Pi], B));
        let V = class extends f {
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
          renderNormalizedSplitSliderValue(e, t, o) {
            let n = (e > 1 ? o : t) + ": ";
            return (e = e > 1 ? e - 1 : e), n + Math.round(100 * e).toString();
          }
          renderSpeedSliderValue(e) {
            return (
              e.toString() + " " + (0, d.Xx)("#MetersPerSecond_Abbreviation")
            );
          }
          renderSettingsContent() {
            let e = this.props.controllerWatcher[0],
              t = "pinch" == e.GetInputSourceType,
              o = (0, d.Xx)(
                "pinch" == e.GetInputSourceType
                  ? "#SourceInputMode_Pull"
                  : "#SourceInputMode_Proximity",
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  t &&
                    i.createElement(C, {
                      labelName: "#SourceInputMode_CapsenseEnableThreshold",
                      elementId: a,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flCapsenseEnableThreshold,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "capsense_enable_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "capsense_enable_threshold",
                      ),
                      renderValue: this.renderNormalizedSliderValue,
                    }),
                  i.createElement(C, {
                    labelName: "#SourceInputMode_GrabThreshold",
                    elementId: a,
                    halfSplit: r,
                    min: 0,
                    max: r ? 2 : 1,
                    step: 0.05,
                    value: this.state.flGrabThreshold,
                    onReset: () =>
                      (0, n.mG)(this, void 0, void 0, function* () {
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
                        o,
                        (0, d.Xx)("#SourceInputMode_Force"),
                      ),
                  }),
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ReleaseThreshold",
                    elementId: a,
                    halfSplit: r,
                    min: 0,
                    max: r ? 2 : 1,
                    step: 0.05,
                    value: this.state.flReleaseThreshold,
                    onReset: () =>
                      (0, n.mG)(this, void 0, void 0, function* () {
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
                        o,
                        (0, d.Xx)("#SourceInputMode_Force"),
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
                        : "#DisplaySettings_ShowAdvancedSettings",
                    ),
                  ),
                  this.state.bShowAdvanced &&
                    i.createElement(
                      "div",
                      null,
                      !1,
                      i.createElement(C, {
                        labelName: "#SourceInputMode_ForceHoldThreshold",
                        elementId: a,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceHoldThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_hold_threshold",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_hold_threshold",
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      i.createElement(C, {
                        labelName: "#SourceInputMode_ForceReleaseThreshold",
                        elementId: a,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceReleaseThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_release_threshold",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_release_threshold",
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      i.createElement(C, {
                        labelName: "#SourceInputMode_DowngradeSpeed",
                        elementId: a,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDowngradeSpeed,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "downgrade_speed",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "downgrade_speed",
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                      i.createElement(C, {
                        labelName: "#SourceInputMode_DropSpeed",
                        elementId: a,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDropSpeed,
                        onReset: this.onPropertyReset.bind(this, "drop_speed"),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "drop_speed",
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                    ),
                ),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.Xx)("#Button_Close"),
                ),
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
              this.renderFooter(),
            );
          }
        };
        (0, n.gn)([h.ak], V.prototype, "OnGrabActionChanged", null),
          (V = (0, n.gn)([a.Pi], V));
        let A = class extends f {
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
                    (0, d.Xx)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                t >= 1 &&
                  i.createElement(C, {
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
                  i.createElement(C, {
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
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ScalarOffZ",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffZ,
                    onReset: this.onPropertyReset.bind(this, "off/z"),
                    onChange: this.onPropertyChanged.bind(this, "off/z"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.Xx)("#Button_Close"),
              ),
            );
          }
          GetActionArity() {
            let e = this.props.controllerWatcher[0].GetValueAction(
              this.props.iMode,
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
            let o = "";
            this.hasOwnProperty("nextUniqueId") && (o = this.nextUniqueId());
            let n = this.GetActionArity();
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
              n >= 1 &&
                i.createElement(C, {
                  labelName: "#SourceInputMode_ScalarOnX",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnX,
                  onChange: this.onPropertyChanged.bind(this, "on/x"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              n >= 2 &&
                i.createElement(C, {
                  labelName: "#SourceInputMode_ScalarOnY",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnY,
                  onChange: this.onPropertyChanged.bind(this, "on/y"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              n >= 3 &&
                i.createElement(C, {
                  labelName: "#SourceInputMode_ScalarOnZ",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnZ,
                  onChange: this.onPropertyChanged.bind(this, "on/z"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              this.renderFooter(),
            );
          }
        };
        (0, n.gn)([h.ak], A.prototype, "OnValueActionChanged", null),
          (A = (0, n.gn)([a.Pi], A));
        var P = o(9809);
        let L = class extends i.Component {
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
                  this.props.iMode,
                ),
            });
          }
          componentWillReceiveProps(e) {
            e.iMode != this.props.iMode &&
              this.setState({
                bInEditMode:
                  this.props.controllerWatcher[0].BHasModeSelectionPending(
                    e.iMode,
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
                  this.props.iMode,
                ),
              bToggleButtonMode: "toggle_button" == this.props.sMode,
              sActionSet: p.c6.SelectedActionSet,
            };
            switch (this.props.sMode) {
              case "toggle_button":
                return i.createElement(E, Object.assign({}, e));
              case "trackpad":
              case "joystick":
                return i.createElement(O, Object.assign({}, e));
              case "complex_button":
                return i.createElement(R, Object.assign({}, e));
              case "button":
                return i.createElement(M, Object.assign({}, e));
              case "dpad":
              case "dpad_touch":
              case "dpad_click":
                return i.createElement(T, Object.assign({}, e));
              case "scroll":
              case "trackpad_scroll":
                return i.createElement(D, Object.assign({}, e));
              case "trigger":
                return i.createElement(x, Object.assign({}, e));
              case "force_sensor":
                return i.createElement(B, Object.assign({}, e));
              case "grab":
                return i.createElement(V, Object.assign({}, e));
              case "scalar_constant":
                return i.createElement(A, Object.assign({}, e));
              default:
                return i.createElement(w, Object.assign({}, e));
            }
          }
        };
        (0, n.gn)([h.ak], L.prototype, "OnEdit", null),
          (L = (0, n.gn)([a.Pi], L));
        class N {
          constructor(e, t, o, n) {
            (this.x = e),
              (this.y = t),
              (this.width = o),
              (this.nPointScale = n),
              this.toString.bind(this);
          }
          toString() {
            return (
              this.x + "," + this.y + "," + this.width + "," + this.nPointScale
            );
          }
        }
        let H = class extends i.Component {
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
                o = this.m_SVGElement.children.namedItem("SourceCircle"),
                n = this.props.controllerWatcher[0],
                i = this.props.eControllerButtonSide == p.ik.eButtonSide_Right,
                r = this.props.eControllerButtonSide == p.ik.eButtonSide_None,
                a = this.m_HTMLButton.getBoundingClientRect(),
                s = this.m_SVGElement.getBoundingClientRect(),
                l = n.GetSVGEndPoint();
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
                o.setAttribute("cx", l.x + ""),
                o.setAttribute("cy", l.y + "");
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
              o = 0,
              n = t.GetModes.map(
                (e, t) => (
                  ++o,
                  i.createElement(L, {
                    key: t,
                    sMode: e.mode,
                    iMode: t,
                    controllerWatcher: this.props.controllerWatcher,
                    bReadOnly: this.props.bReadOnly,
                  })
                ),
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
                  t.GetControllerInputName,
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
                    }),
                  ),
              ),
              i.createElement("hr", { ref: this.BindButtonRef }),
              o > 0 && i.createElement("div", { className: "FlexColumn" }, n),
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
                      stopColor: "#ffffff",
                      stopOpacity: "0.8",
                    }),
                    i.createElement("stop", {
                      offset: "100%",
                      stopColor: "#ffffff",
                      stopOpacity: "0",
                    }),
                  ),
                ),
                i.createElement("polyline", {
                  id: "SourceLine",
                  stroke: "#ffffff",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("polyline", {
                  id: "SourcePath",
                  stroke: "#ffffff",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("circle", {
                  id: "SourceCircle",
                  r: "2rem",
                  fill: "url(#buttonGradient)",
                }),
              ),
            );
          }
        };
        (0, n.gn)([h.ak], H.prototype, "AddMode", null),
          (0, n.gn)([h.ak], H.prototype, "BindButtonRef", null),
          (0, n.gn)([h.ak], H.prototype, "BindSVGRef", null),
          (0, n.gn)([h.ak], H.prototype, "UpdateSVGPath", null),
          (0, n.gn)([h.ak], H.prototype, "OnMouseEnter", null),
          (0, n.gn)([h.ak], H.prototype, "OnMouseLeave", null),
          (H = (0, n.gn)([a.Pi], H));
        let F = class extends i.Component {
          render() {
            let e = p.c6.SelectedControllerTypeInfo;
            if (!e || !this.props.selectedActionSet) return null;
            p.c6.SelectedControllerTypeLocalizedName;
            let t = [];
            Object.keys(e.input_source).forEach((o) => {
              t.push({ name: o, order: e.input_source[o].order });
            }),
              t.sort((e, t) => e.order - t.order);
            let o = t.map((t, o) => {
              let n = e.input_source[t.name];
              if ("pose" == n.type || "vibration" == n.type) return null;
              if (
                "InputValueVisibility_SteamVRInternal" == n.visibility &&
                !p.c6.CurrentAppCanAccessPrivateInputs
              )
                return null;
              if (
                "InputValueVisibility_AvailableButHidden" == n.visibility &&
                !P.I.ShowHiddenInputs
              )
                return null;
              if (null != n.side)
                switch (n.side) {
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
                    this.props.selectedActionSet.name,
                  ),
                ),
                this.props.eControllerButtonOtherSide &&
                  this.props.eControllerButtonOtherSide.valueOf() !=
                    p.ik.eButtonSide_None &&
                  r.push(
                    p.c6.GetControllerWatcherForSourceFromControllerType(
                      e,
                      this.props.eControllerButtonOtherSide,
                      t.name,
                      this.props.selectedActionSet.name,
                    ),
                  ),
                i.createElement(H, {
                  key: o,
                  controllerWatcher: r,
                  strSVGClass: this.props.strSVGClass,
                  bReadOnly: this.props.bReadOnly,
                  eControllerButtonSide: this.props.eControllerButtonSide,
                  ptControllerImagePosition:
                    this.props.ptControllerImagePosition,
                })
              );
            });
            return i.createElement("div", null, o);
          }
        };
        F = (0, n.gn)([a.Pi], F);
        let G = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              this.props.bSingleMode
                ? (this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new N(0, 0, 0, 0),
                    ptRightController: new N(0, 0, 0, 0),
                  })
                : this.props.selectedActionSet &&
                    "single" != this.props.selectedActionSet.usage
                  ? ((this.state = {
                      bMirrorBinding: !1,
                      ptLeftController: new N(0, 0, 0, 0),
                      ptRightController: new N(0, 0, 0, 0),
                    }),
                    this.props.fnSetMirroredMode(!1))
                  : this.props.selectedActionSet &&
                    ((this.state = {
                      bMirrorBinding: !0,
                      ptLeftController: new N(0, 0, 0, 0),
                      ptRightController: new N(0, 0, 0, 0),
                    }),
                    this.props.fnSetMirroredMode(!0));
          }
          componentWillReceiveProps(e) {
            let t = !1,
              o = e.selectedActionSet;
            !o ||
              (this.props.selectedActionSet &&
                o.name == this.props.selectedActionSet.name) ||
              ("single" == o.usage &&
                ((t = !0),
                Object.keys(
                  p.c6.SelectedControllerTypeInfo.input_source,
                ).forEach((e) => {
                  let n = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      p.ik.eButtonSide_Left,
                      e,
                      o.name,
                    ),
                    i = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      p.ik.eButtonSide_Right,
                      e,
                      o.name,
                    );
                  t = t && i.BindingsMatch(n);
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
                    p.c6.SelectedControllerTypeInfo.input_source,
                  ).forEach((e) => {
                    let t =
                      p.c6.GetControllerWatcherForSourceFromControllerType(
                        p.c6.SelectedControllerTypeInfo,
                        p.ik.eButtonSide_Left,
                        e,
                        this.props.selectedActionSet.name,
                      );
                    p.c6
                      .GetControllerWatcherForSourceFromControllerType(
                        p.c6.SelectedControllerTypeInfo,
                        p.ik.eButtonSide_Right,
                        e,
                        this.props.selectedActionSet.name,
                      )
                      .CopyActions(t);
                  });
            }
          }
          UpdatePositionHelper(e) {
            let t = 1,
              o = 0,
              n = 0,
              i = 0;
            if (e) {
              let r = e.getBoundingClientRect();
              if (((i = r.width), e.naturalWidth > 0))
                return (
                  (t = r.height / e.naturalHeight),
                  (n = r.left),
                  (o = r.top),
                  new N(n, o, i, t)
                );
            }
          }
          OnUpdateControllerPicturePosition() {
            this.setState({
              ptLeftController: this.UpdatePositionHelper(
                this.m_LeftControllerImage,
              ),
            }),
              this.setState({
                ptRightController: this.UpdatePositionHelper(
                  this.m_RightControllerImage,
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
              o = "";
            this.props.bSingleMode ||
              ((t = e.input_bindingui_left.transform
                ? e.input_bindingui_left.transform
                : ""),
              (o = e.input_bindingui_left.uri
                ? e.input_bindingui_left.uri
                : ""));
            let n = e.input_bindingui_right.transform
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
                    "ControllerBindingHandedControllers::render - Got undefined actionSet.",
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
            const y = p.c6.GetSimulatedControllerProperties();
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
                        src: o,
                        style: { transform: t },
                        ref: this.BindLeftControllerImage,
                        onLoad: this.OnUpdateControllerPicturePosition,
                      }),
                      i.createElement(m.Z, {
                        onReflow: this.OnUpdateControllerPicturePosition,
                      }),
                    ),
                  i.createElement(
                    "div",
                    { className: a + " ControllerImageColumn FlexColumn" },
                    i.createElement("img", {
                      className: "ControllerImage ControllerImageRight",
                      src: r,
                      style: { transform: n },
                      ref: this.BindRightControllerImage,
                      onLoad: this.OnUpdateControllerPicturePosition,
                    }),
                    i.createElement(m.Z, {
                      onReflow: this.OnUpdateControllerPicturePosition,
                    }),
                  ),
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
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenChordBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_ChordsButton"),
                        ),
                      ),
                    p.c6.BSelectedActionSetHasPoses &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)("#BindingUI_PosesButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenPoseBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_PosesButton"),
                        ),
                      ),
                    p.c6.BSelectedActionSetHasHaptics &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)(
                            "#BindingUI_HapticsButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenHapticsBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_HapticsButton"),
                        ),
                      ),
                    p.c6.BSelectedActionSetHasSkeletons &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)(
                            "#BindingUI_SkeletonButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenSkeletonBindingsModal,
                          },
                          (0, d.Xx)("#BindingUI_SkeletonButton"),
                        ),
                      ),
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
                        (0, d.Xx)("#BindingUI_MirrorMode"),
                      ),
                    ),
                ),
                y.bIsSimulatingController &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexFullWidthRowCentered SimulatedControllerInfoSection",
                    },
                    i.createElement(
                      "p",
                      null,
                      i.createElement(
                        "b",
                        null,
                        (0, d.Xx)("#BindingUI_CompatibilityModeInfo"),
                      ),
                      ": ",
                      (0, d.Xx)("#BindingUI_CompatibilityModeAppearingAsInfo"),
                      " ",
                      i.createElement(
                        "u",
                        null,
                        y.strLocalizedSimulatedControllerType,
                      ),
                    ),
                    i.createElement(
                      S.ZP,
                      {
                        content: (0, d.Xx)(
                          "#BindingUI_SimulatingControllerInfo_tooltip",
                        ),
                        theme: "ControllerBindingToolTip",
                      },
                      i.createElement(
                        "span",
                        { className: "SimulatedControllerInfoHelp" },
                        "?",
                      ),
                    ),
                  ),
              ),
              this.props.bSingleMode &&
                i.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    i.createElement(F, {
                      eControllerButtonSide: p.ik.eButtonSide_None,
                      strSVGClass: "Left",
                      bReadOnly: this.props.bReadOnly,
                      selectedActionSet: p.c6.SelectedActionSetDetails,
                      ptControllerImagePosition: this.state.ptRightController,
                    }),
                  ),
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
                      g,
                    ),
                    i.createElement(F, {
                      eControllerButtonSide: p.ik.eButtonSide_Left,
                      strSVGClass: "MenuLeftLine",
                      bReadOnly: this.props.bReadOnly,
                      eControllerButtonOtherSide: h,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptLeftController,
                    }),
                  ),
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn " + a },
                    i.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      _,
                    ),
                    i.createElement(F, {
                      eControllerButtonSide: s,
                      strSVGClass: "MenuRightLine",
                      bReadOnly:
                        this.props.bReadOnly || this.state.bMirrorBinding,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptRightController,
                    }),
                  ),
                ),
            );
          }
        };
        var U;
        (0, n.gn)([h.ak], G.prototype, "ToggleMirrorMode", null),
          (0, n.gn)([h.ak], G.prototype, "UpdatePositionHelper", null),
          (0, n.gn)(
            [h.ak],
            G.prototype,
            "OnUpdateControllerPicturePosition",
            null,
          ),
          (0, n.gn)([h.ak], G.prototype, "BindLeftControllerImage", null),
          (0, n.gn)([h.ak], G.prototype, "BindRightControllerImage", null),
          (G = (0, n.gn)([a.Pi], G)),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Pose = 1)] = "Pose"),
              (e[(e.Haptics = 2)] = "Haptics"),
              (e[(e.Skeleton = 3)] = "Skeleton");
          })(U || (U = {}));
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
                o = this.state.SVGElement.children.namedItem("SourceCircle"),
                n = Object.assign({}, this.props.endPoint),
                i = Object.assign({}, this.props.startPoint);
              if (this.state.WrapperHTMLElement) {
                let e = this.state.WrapperHTMLElement.getBoundingClientRect(),
                  t =
                    this.state.WrapperHTMLElement.parentElement.parentElement.parentElement.getBoundingClientRect();
                i.y += e.top - t.top + e.height / 2;
              }
              let r = 20,
                a = i.x + r + "," + i.y + " " + n.x + "," + n.y;
              e.setAttribute("points", a);
              let s = i.x + "," + i.y + " " + (i.x + r) + "," + i.y;
              t.setAttribute("points", s),
                o.setAttribute("cx", n.x + ""),
                o.setAttribute("cy", n.y + "");
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
              (e) => e + this.props.sInputPath,
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
              o = "",
              n = (0, d.Xx)("#SourceInputMode_none"),
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
                  this.props.type,
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
                ) && e.type == this.props.type,
            ).map((t, i) => {
              let r;
              return (
                e &&
                  e[0].output.toLowerCase() == t.name.toLowerCase() &&
                  ((this.currentAction = t),
                  (o = t.name),
                  (n = t.localized_name)),
                "mandatory" == t.requirement &&
                  (r =
                    " (" + (0, d.Xx)("#BindingUI_SelectAction_Required") + ")"),
                new v.GZ(t.name, t.localized_name, r)
              );
            });
            return (
              (null != s && 0 != s.length) ||
                s.push(
                  new v.GZ("-nonitem", (0, d.Xx)("#SourceInputAction_NoItems")),
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
                    a,
                  ),
                  i.createElement(
                    "div",
                    null,
                    i.createElement(v.vs, {
                      vecOptions: s,
                      sValueSelectedItem: o,
                      sHeaderClass: "PoseActionLabelDropdown",
                      bReadOnly: !1,
                      sLocalizedSelectedItem: n,
                      fnOptionSelected: this.OnActionChanged,
                    }),
                    i.createElement(m.Z, { onReflow: this.UpdateSVGPath }),
                  ),
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
                this.props.bIncludeHR && i.createElement("hr", null),
              )
            );
          }
        };
        (0, n.gn)([h.ak], z.prototype, "BindSVGRef", null),
          (0, n.gn)([h.ak], z.prototype, "BindWrapperElement", null),
          (0, n.gn)([h.ak], z.prototype, "UpdateSVGPath", null),
          (0, n.gn)([h.ak], z.prototype, "OnActionChanged", null),
          (0, n.gn)([h.ak], z.prototype, "OnPoseActionChanged", null),
          (0, n.gn)([h.ak], z.prototype, "OnHapticsActionChanged", null),
          (0, n.gn)([h.ak], z.prototype, "OnSkeletonActionChanged", null),
          (z = (0, n.gn)([a.Pi], z));
        let W = class extends i.Component {
          render() {
            let e;
            switch (this.props.eActionType) {
              case U.Pose:
                e = "pose";
                break;
              case U.Haptics:
                e = "vibration";
                break;
              case U.Skeleton:
                e = "skeleton";
            }
            let t = p.c6.SelectedActionSetActions.filter((t) => t.type == e);
            if (0 == t.length) return null;
            let o = p.c6.SelectedControllerTypeInfo,
              n = p.c6.SelectedControllerTypeInfo.input_source,
              r = [];
            if (
              "controller_handed" ==
              p.c6.SelectedControllerTypeInfo.input_bindingui_mode
            )
              r = ["/user/hand/left", "/user/hand/right"];
            else {
              let e = p.c6.DeviceForControllerType(o.controller_type);
              e &&
                (e.root_path && r.push(e.root_path),
                e.root_path_alt && r.push(e.root_path_alt));
            }
            if (0 == r.length)
              return console.log("Missing base root path for controller"), null;
            p.c6.GetPoseActionBindings;
            let a,
              s = [];
            for (let o in n) {
              let a = n[o];
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
                let d = l + o,
                  h = "left" == c,
                  u = h
                    ? this.props.ptLeftController.x
                    : this.props.ptRightController.x,
                  m = h
                    ? this.props.ptLeftController.y
                    : this.props.ptRightController.y,
                  g = new p.E9(0, 0);
                if (
                  (n.hasOwnProperty(o) &&
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
                      sInputPath: o,
                      type: e,
                      vecDevicePathsToSet: v,
                      startPoint: _,
                      endPoint: g,
                    }),
                  );
              }
            }
            switch (this.props.eActionType) {
              case U.Pose:
                a = (0, d.Xx)("#BindingUI_PoseListTitle");
                break;
              case U.Haptics:
                a = (0, d.Xx)("#BindingUI_HapticsListTitle");
                break;
              case U.Skeleton:
                a = (0, d.Xx)("#BindingUI_SkeletonListTitle");
            }
            return i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement("div", { className: "Label Title AllCaps" }, a),
              s,
            );
          }
        };
        W = (0, n.gn)([a.Pi], W);
        let X = class extends i.Component {
          render() {
            let e = p.c6.SelectedControllerTypeInfo.input_source,
              t = new p.E9(
                e[this.props.vecPosePath[0]].binding_image_point[0],
                e[this.props.vecPosePath[0]].binding_image_point[1],
              );
            (t.x *= this.props.nPointScale),
              (t.y *= this.props.nPointScale),
              this.props.bLeftHandController
                ? (t.x = this.props.ptController.x - t.x)
                : (t.x += this.props.ptController.x),
              (t.y += this.props.ptController.y);
            let o = "";
            this.props.vecPosePath.forEach((e, t) => {
              0 != t && (o += ","),
                (o += p.c6.LocalizeStringForSelectedControllerType(e));
            });
            let n = this.props.bLeftHandController ? "start" : "end",
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
                  }),
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
                  i.createElement("feComposite", { in: "SourceGraphic" }),
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
                  i.createElement("feOffset", { dx: "1", dy: "1" }),
                ),
              ),
              i.createElement(
                "text",
                {
                  textAnchor: n,
                  filter: "url(#shadow)",
                  x: t.x + r,
                  y: t.y,
                  style: { fill: "black", fontSize: 24 },
                },
                o,
              ),
              i.createElement(
                "text",
                {
                  textAnchor: n,
                  filter: "url(#background)",
                  x: t.x + r,
                  y: t.y,
                  style: { fill: "var(--descriptiontext)", fontSize: 24 },
                },
                o,
              ),
              i.createElement("circle", {
                id: "SourceCircle",
                cx: t.x,
                cy: t.y,
                r: "0.5rem",
                fill: "url(#buttonGradient)",
              }),
            );
          }
        };
        X = (0, n.gn)([a.Pi], X);
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
                o = this.m_LeftControllerImage;
              if (o) {
                let n = o.getBoundingClientRect();
                o.naturalWidth > 0 &&
                  ((t =
                    n.right -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (e =
                    n.top -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({ ptLeftController: new p.E9(t, e) });
            }
            if (this.m_RightControllerImage) {
              let e = 1,
                t = 0,
                o = 0,
                n = this.m_RightControllerImage;
              if (n) {
                let i = n.getBoundingClientRect();
                n.naturalWidth > 0 &&
                  ((e = i.height / n.naturalHeight),
                  (o =
                    i.left -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (o += (i.width - n.naturalWidth * e) / 2),
                  (t =
                    i.top -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({
                ptRightController: new p.E9(o, t),
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
              o = "",
              n = "",
              r = "",
              a = "",
              s = p.c6.SelectedControllerTypeInfo;
            switch (this.props.eActionSourceType) {
              case U.Pose:
                (e = "pose"), (t = (0, d.Xx)("#BindingUI_PoseTitle"));
                break;
              case U.Haptics:
                (e = "vibration"), (t = (0, d.Xx)("#BindingUI_HapticsTitle"));
                break;
              case U.Skeleton:
                (e = "skeleton"), (t = (0, d.Xx)("#BindingUI_SkeletonTitle"));
            }
            (a = s.input_bindingui_right.uri),
              (n = s.input_bindingui_right.transform),
              this.props.bSlaveSecondaryControllerBinding ||
                ((o = s.input_bindingui_left.transform),
                (r = s.input_bindingui_left.uri));
            let l = function (t, o, n, i, r) {
                let a = t.input_source[i];
                if (a.type == e && (null == a.side || a.side == n)) {
                  let e = new p.E9(
                    a.binding_image_point[0],
                    a.binding_image_point[1],
                  );
                  o.hasOwnProperty(e.toString()) || (o[e.toString()] = []),
                    o[e.toString()].push(i);
                }
              },
              c = {},
              h = {};
            Object.keys(s.input_source).forEach(l.bind(null, s, c, "left")),
              Object.keys(s.input_source).forEach(l.bind(null, s, h, "right"));
            let u = Object.keys(c).map((e, t) =>
                i.createElement(X, {
                  key: t,
                  vecPosePath: c[e],
                  ptController: this.state.ptLeftController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !0,
                }),
              ),
              g = Object.keys(h).map((e, t) =>
                i.createElement(X, {
                  key: t,
                  vecPosePath: h[e],
                  ptController: this.state.ptRightController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !1,
                }),
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
                  t,
                ),
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
                  g,
                ),
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn PoseActionsList",
                    ref: this.BindPropsListDiv,
                  },
                  i.createElement(W, {
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
                  }),
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
                        style: { transform: o },
                        ref: this.BindLeftControllerImage,
                      }),
                    ),
                  i.createElement(
                    "div",
                    { className: "ControllerImageContainer" },
                    i.createElement("img", {
                      className: "ControllerImage",
                      src: a,
                      style: { transform: n },
                      ref: this.BindRightControllerImage,
                    }),
                  ),
                ),
                i.createElement(m.Z, {
                  onReflow: this.OnUpdateControllerPicturePosition,
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, d.Xx)("#Button_Close"),
              ),
            );
          }
        };
        (0, n.gn)(
          [h.ak],
          q.prototype,
          "OnUpdateControllerPicturePosition",
          null,
        ),
          (0, n.gn)([h.ak], q.prototype, "BindLeftControllerImage", null),
          (0, n.gn)([h.ak], q.prototype, "BindRightControllerImage", null),
          (0, n.gn)([h.ak], q.prototype, "BindPropsListDiv", null),
          (q = (0, n.gn)([a.Pi], q));
        let K = class extends i.Component {
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
              p.c6.SelectedActionSetSources[e].path,
            );
          }
          render() {
            let e = p.c6.SelectedActionSetActions.filter(
                (e) => "boolean" == e.type,
              ),
              t = "",
              o = "none",
              n = !1;
            this.props.chord.output
              ? ((t = this.props.chord.output),
                (o = this.props.chord.output.toLowerCase()))
              : (n = !0);
            let r,
              a = e.map(
                (e, o) => (
                  this.props.chord.output &&
                    e.name.toLowerCase() ==
                      this.props.chord.output.toLowerCase() &&
                    (t = e.localized_name),
                  new v.GZ(e.name.toLowerCase(), e.localized_name)
                ),
              ),
              s = p.c6.SelectedActionSetSources;
            return s && 0 != s.length
              ? (this.props.chord.inputs
                  ? (r = this.props.chord.inputs.map((e, t) => {
                      let o = i.createElement(
                        "div",
                        { className: "Label ChordBindingPlusLabel" },
                        i.createElement("img", {
                          className: "ActionButtonImage ChordBindingImage",
                          src: "images/bindingui/icon_plus.svg",
                        }),
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
                            (function (e, t, o, n) {
                              let r = t
                                .filter((t) => {
                                  let n = o.inputs.filter(
                                    (e) => e[0] == t.path,
                                  );
                                  return t.path == e || 0 == n.length;
                                })
                                .map(
                                  (e, t) =>
                                    new v.GZ(
                                      e.path,
                                      p.c6.LocalizePathNameForSelectedControllerType(
                                        e.path,
                                      ),
                                    ),
                                );
                              return i.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                i.createElement(v.vs, {
                                  vecOptions: r,
                                  sValueSelectedItem: e,
                                  sLocalizedSelectedItem:
                                    p.c6.LocalizePathNameForSelectedControllerType(
                                      e,
                                    ),
                                  fnOptionSelected: function (t) {
                                    p.c6.SetInputSourceForChord(o, t, e);
                                  },
                                  bReadOnly: n,
                                }),
                              );
                            })(e[0], s, this.props.chord, this.props.bReadOnly),
                            (function (e, t, o, n) {
                              let r = p.c6.GetActionBinding(
                                e,
                                p.c6.SelectedActionSet,
                              );
                              if (!r || 0 == r.length) return null;
                              let a = [],
                                s = "";
                              if (
                                (r.forEach((e) => {
                                  let o = p.c6.GetBooleanInputOptionsForMode(
                                    e.mode,
                                  );
                                  for (let n of o)
                                    a.push({
                                      sActionBindMode: e.mode,
                                      sInputOption: n,
                                    }),
                                      n == t && (s = e.mode);
                                }),
                                0 == a.length)
                              )
                                return null;
                              let l = a.map(
                                (e, t) =>
                                  new v.GZ(
                                    e.sInputOption,
                                    (0, d.Xx)(
                                      "#SourceInputMode_" + e.sActionBindMode,
                                    ) +
                                      " " +
                                      (0, d.Xx)(
                                        "#SourceInputMode_" + e.sInputOption,
                                      ),
                                  ),
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
                                    p.c6.SetInputTypeForChord(o, e, t);
                                  },
                                  bReadOnly: n,
                                }),
                              );
                            })(
                              e[0],
                              e[1],
                              this.props.chord,
                              this.props.bReadOnly,
                            ),
                          ),
                          !this.props.bReadOnly &&
                            i.createElement("img", {
                              onClick: () => {
                                this.DeleteSourceFromChord(e[0], e[1]);
                              },
                              className:
                                "ActionButtonImage ChordBindingEntryDelete",
                              src: "images/bindingui/icon_trash.svg",
                            }),
                        ),
                        t != this.props.chord.inputs.length - 1 && o,
                      );
                    }))
                  : n || this.AddSourceToChord(),
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
                        sValueSelectedItem: o,
                        sModalTitleString: (0, d.Xx)(
                          "#BindingUI_Chord_SelectActionModalHeader",
                        ),
                        bShowOptionsOnStart: n,
                        sLocalizedSelectedItem: t,
                        fnOptionSelected: this.OnActionOutputChanged,
                        bReadOnly: this.props.bReadOnly,
                      }),
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
                      r,
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
                          (0, d.Xx)("#BindingUI_AddChordInput"),
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
                          (0, d.Xx)("#BindingUI_DeleteChord"),
                        ),
                      ),
                  ),
                  i.createElement("div", {
                    className: "FlexRow ChordButtonRow",
                  }),
                ))
              : null;
          }
        };
        (0, n.gn)([h.ak], K.prototype, "OnActionOutputChanged", null),
          (0, n.gn)([h.ak], K.prototype, "DeleteChord", null),
          (0, n.gn)([h.ak], K.prototype, "DeleteSourceFromChord", null),
          (0, n.gn)([h.ak], K.prototype, "AddSourceToChord", null),
          (K = (0, n.gn)([a.Pi], K));
        let Z = class extends i.Component {
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
                (e = t.map((e, o) =>
                  i.createElement(
                    "div",
                    { key: o },
                    i.createElement(K, {
                      chord: e,
                      bReadOnly: this.props.bReadOnly,
                    }),
                    o != t.length - 1 && i.createElement("hr", null),
                  ),
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
                      (0, d.Xx)("#BindingUI_ChordTitle"),
                    ),
                  ),
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
                      (0, d.Xx)("#BindingUI_AddChord"),
                    ),
                ),
                i.createElement(
                  "div",
                  {
                    className: "ChordBindingCloseButton Label AllCaps",
                    onClick: this.props.fnCloseModal,
                  },
                  (0, d.Xx)("#Button_Close"),
                ),
              )
            );
          }
        };
        (0, n.gn)([h.ak], Z.prototype, "AddChord", null),
          (Z = (0, n.gn)([a.Pi], Z));
        var j = o(1380);
        let J = class extends i.Component {
          render() {
            let e =
                null == this.props.bShowBackButton ||
                this.props.bShowBackButton,
              t = null != this.props.fnOpenOptionsModal,
              o = "PageTitleLabel";
            return (
              this.props.strSubTitle || (o += " SingleTitle"),
              i.createElement(
                "div",
                {
                  className:
                    "PageTitleBar" + (P.I.IsSteamAvailable ? "" : " NoSteam"),
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
                            "ButtonControl FlexRow PageTitleButton PageTitleBackButton AllCaps",
                          onClick: () => {
                            this.props.fnOnClick();
                          },
                        },
                        i.createElement("img", {
                          className: "ActionButtonImage",
                          src: "images/bindingui/icon_back.svg",
                        }),
                        (0, d.Xx)("#Button_Back"),
                      ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "AllCaps PageTitle TitleBarSection FlexColumn",
                    },
                    i.createElement(
                      "div",
                      { className: o },
                      this.props.strTitle,
                    ),
                    this.props.strSubTitle &&
                      i.createElement(
                        "div",
                        { className: "AllCaps PageSubTitle PageTitleLabel" },
                        this.props.strSubTitle,
                      ),
                  ),
                  t &&
                    i.createElement(
                      "div",
                      { className: "TitleBarSection" },
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, d.Xx)(
                            "#BindingUI_OptionsButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "ButtonControl FlexRow OptionsButton PageTitleButton AllCaps",
                            onClick: this.props.fnOpenOptionsModal,
                          },
                          (0, d.Xx)("#BindingUI_OptionsButton"),
                        ),
                      ),
                    ),
                ),
                !P.I.IsSteamAvailable &&
                  i.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, d.Xx)("#NoSteamWarning"),
                  ),
              )
            );
          }
        };
        J = (0, n.gn)([a.Pi], J);
        let Q = class extends i.Component {
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
                  let o = p.c6.GetAliasInfo(t.name);
                  o &&
                    o.hidden &&
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
                          t.localized_name,
                        ),
                        i.createElement(
                          "div",
                          {
                            className: "Label ButtonControl",
                            onClick: () => {
                              p.c6.SetAliasHidden(t.name, !1);
                            },
                          },
                          (0, d.Xx)("#ShowActionButton"),
                        ),
                      ),
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
                  e,
                ),
              )
            );
          }
        };
        (0, n.gn)([h.ak], Q.prototype, "CloseSaveDialog", null),
          (Q = (0, n.gn)([a.Pi], Q));
        let Y = class extends i.Component {
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
                  p.c6.GetActionByName(this.props.sAction).localized_name,
                ),
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
                  (0, d.Xx)("#HideActionButton"),
                ),
            );
          }
        };
        (0, n.gn)([h.ak], Y.prototype, "onHiddenChanged", null),
          (0, n.gn)([h.ak], Y.prototype, "onNameChanged", null),
          (Y = (0, n.gn)([a.Pi], Y));
        let $ = class extends i.Component {
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
                  let o = p.c6.GetAliasInfo(t.name);
                  (o && o.hidden) ||
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
                    (0, d.Xx)("#LegacySetup_ActionAliasesHeader"),
                  ),
                  e.map((e, t) =>
                    i.createElement(Y, {
                      sAction: e,
                      key: e,
                      readOnly: this.props.readOnly,
                    }),
                  ),
                ),
                this.state.bShowHiddenActions &&
                  i.createElement(Q, { ParentClose: this.OnCloseHidden }),
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
                      (0, d.Xx)("#ShowAllAliases"),
                    ),
                  ),
              )
            );
          }
        };
        (0, n.gn)([h.ak], $.prototype, "OnShowHidden", null),
          (0, n.gn)([h.ak], $.prototype, "OnCloseHidden", null),
          ($ = (0, n.gn)([a.Pi], $));
        class ee extends i.Component {
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
                }),
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: e },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, n.gn)([h.ak], ee.prototype, "onCheckboxChanged", null);
        class te extends i.Component {
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
            for (let o of e)
              "TrackedDeviceClass_Controller" == o.device_type &&
                t.push(
                  new v.GZ(
                    o.controller_type,
                    (0, d.Xx)("#" + o.controller_type),
                  ),
                );
            t.push(new v.GZ("none", (0, d.Xx)("#None")));
            let o = "InputOption" + this.props.sOptionName;
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
                }),
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: o },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, n.gn)([h.ak], te.prototype, "OnControllerDropdownChanged", null);
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
                  return i.createElement(ee, {
                    sOptionName: e.name,
                    sOptionLocalizedName: e.localized_name,
                    key: e.name,
                    readOnly: this.props.readOnly,
                  });
                case "string":
                  return "simulated_controller_type" == e.name
                    ? i.createElement(te, {
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
        (0, n.gn)([h.ak], oe.prototype, "onCheckboxChanged", null);
        class ne extends i.Component {
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
            let o = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(o, t);
          }
          onActionChanged(e) {
            this.setState({ sOutputAction: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let o = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(o, t);
          }
          onDelete() {
            let e = p.c6.ComputeSimulatedActionPathFromId(
              this.props.simAction.id,
            );
            p.c6.DeleteSimulatedActionByPath(e);
          }
          render() {
            let e = p.c6.GetLiteralVector1ActionBindings.map(
              (e, t) => new v.GZ(e.name, e.localized_name),
            );
            e.push(new v.GZ("none", (0, d.Xx)("#SourceInputAction_none")));
            let t = "InputOption" + this.props.simAction.id;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, d.Xx)("#SimulatedAction_FakeTrigger"),
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
                  (0, d.Xx)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, n.gn)([h.ak], ne.prototype, "onNameChanged", null),
          (0, n.gn)([h.ak], ne.prototype, "onActionChanged", null),
          (0, n.gn)([h.ak], ne.prototype, "onDelete", null);
        class ie extends i.Component {
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
            let o = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(o, t);
          }
          onOutputChanged(e) {
            this.setState({ sOutputHand: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let o = p.c6.ComputeSimulatedActionPathFromId(t.id);
            p.c6.SetSimulatedActionByPath(o, t);
          }
          onDelete() {
            let e = p.c6.ComputeSimulatedActionPathFromId(
              this.props.simAction.id,
            );
            p.c6.DeleteSimulatedActionByPath(e);
          }
          OnClickTrackpad(e) {
            let t = e.currentTarget.getBoundingClientRect(),
              o = (e.clientX - t.left) / (0.5 * t.width) - 1,
              n = -1 * ((e.clientY - t.top) / (0.5 * t.height) - 1);
            this.setState({ fPositionX: o, fPositionY: n });
            let i = this.props.simAction;
            (i.position_x = o), (i.position_y = n);
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
              o = {
                left: (100 * (this.state.fPositionX + 1)) / 2 + "%",
                top: 100 - (100 * (this.state.fPositionY + 1)) / 2 + "%",
              };
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, d.Xx)("#SimulatedAction_FakeTrackpadClick"),
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
                  style: o,
                }),
              ),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, d.Xx)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, n.gn)([h.ak], ie.prototype, "onNameChanged", null),
          (0, n.gn)([h.ak], ie.prototype, "onOutputChanged", null),
          (0, n.gn)([h.ak], ie.prototype, "onDelete", null),
          (0, n.gn)([h.ak], ie.prototype, "OnClickTrackpad", null);
        let re = class extends i.Component {
          constructor(e) {
            super(e);
          }
          OnCreateSimAction(e) {
            p.c6.AddSimulatedAction(e);
          }
          CreateEntry(e) {
            switch (e.type) {
              case "fake_trigger":
                return i.createElement(ne, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              case "fake_trackpad_click":
                return i.createElement(ie, {
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
                  (0, d.Xx)("#SimulatedAction_FakeTrigger"),
                ),
              ),
              e.push(
                new v.GZ(
                  "fake_trackpad_click",
                  (0, d.Xx)("#SimulatedAction_FakeTrackpadClick"),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(
                  "div",
                  { className: "LegacySectionHeader Label" },
                  (0, d.Xx)("#LegacySetup_SimulatedActionHeader"),
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
                    }),
                  ),
              )
            );
          }
        };
        (0, n.gn)([h.ak], re.prototype, "OnCreateSimAction", null),
          (re = (0, n.gn)([a.Pi], re));
        let ae = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            var e;
            let t = "openxr" == p.c6.SelectedAppActions.category,
              o =
                (null === (e = p.c6.SelectedAppActions.interaction_profiles) ||
                void 0 === e
                  ? void 0
                  : e.length) > 0,
              n = p.c6.GetOptionValue("simulated_controller_type"),
              r = n && "none" != n;
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
                    (0, d.Xx)("#BindingUI_OptionsTitle"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexColumn ChordBindingContents ChordBindingChordsList",
                },
                t &&
                  o &&
                  i.createElement(se, { bReadOnly: this.props.bReadOnly }),
                !t &&
                  i.createElement(le, {
                    sOptionName: "simulated_controller_type",
                    bAllowNone: !0,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  r &&
                  i.createElement(ce, {
                    sOptionName: "simulate_rendermodel",
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  r &&
                  i.createElement(ce, {
                    sOptionName: "simulate_hmd",
                    bReadOnly: this.props.bReadOnly,
                    bDefaultValue: !0,
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, d.Xx)("#Button_Close"),
              ),
            );
          }
        };
        ae = (0, n.gn)([a.Pi], ae);
        class se extends i.Component {
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
                let o = e.replace("/interaction_profiles/", "");
                t.push(new v.GZ(e, o, null, e));
              }),
              t.push(new v.GZ(" ", (0, d.Xx)("#None"))),
              i.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, d.Xx)(
                      "#BindingUI_Options_InteractionProfile_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, d.Xx)("#BindingUI_Options_InteractionProfile_Label"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    S.ZP,
                    {
                      content: this.state.sValue,
                      theme: "ControllerBindingToolTip",
                    },
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
                      }),
                    ),
                  ),
                ),
              )
            );
          }
        }
        (0, n.gn)(
          [h.ak],
          se.prototype,
          "OnInteractionProfileDropdownChanged",
          null,
        );
        class le extends i.Component {
          constructor(e) {
            if (
              (super(e), (this.option_items = []), this.props.mapOptionValues)
            )
              for (let e in this.props.mapOptionValues) {
                let t = { sName: (0, d.Xx)("#" + e), sValue: e };
                this.option_items.push(t);
              }
            else if ("simulated_controller_type" == this.props.sOptionName) {
              let e = p.c6.SelectedAppActions.simulation_types.sort(
                function (e, t) {
                  return e.device_type < t.device_type;
                },
              );
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
                        "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, d.Xx)(
                      "#BindingUI_Options_" + this.props.sOptionName + "_Label",
                    ),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    S.ZP,
                    {
                      content: this.state.sValue,
                      theme: "ControllerBindingToolTip",
                    },
                    i.createElement(
                      "div",
                      null,
                      i.createElement(v.vs, {
                        vecOptions: e,
                        sModalClass: "PinTop",
                        sValueSelectedItem: this.state.sValue,
                        fnOptionSelected: this.OnStringDropdownChanged,
                        bReadOnly: this.props.bReadOnly,
                      }),
                    ),
                  ),
                ),
              )
            );
          }
        }
        (0, n.gn)([h.ak], le.prototype, "OnStringDropdownChanged", null);
        class ce extends i.Component {
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
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip",
                  ),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, d.Xx)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_Label",
                  ),
                ),
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
                }),
              ),
            );
          }
        }
        (0, n.gn)([h.ak], ce.prototype, "onCheckboxChanged", null);
        var de,
          pe = o(7475);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Personal = 1)] = "Personal"),
            (e[(e.Public = 2)] = "Public"),
            (e[(e.LocalFile = 3)] = "LocalFile"),
            (e[(e.ReplaceDefault = 4)] = "ReplaceDefault"),
            (e[(e.AddNewDefault = 5)] = "AddNewDefault");
        })(de || (de = {}));
        let he = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_KeyboardVisibilityCallbackHandle = void 0),
              (this.m_NameInput = void 0),
              (this.m_DescriptionInput = void 0),
              (this.m_NameInputCallbackHandle = void 0),
              (this.m_DescriptionCallbackHandle = void 0),
              (this.m_bSavedOnce = !1),
              (this.state = { sError: void 0 });
          }
          componentDidMount() {
            this.m_KeyboardVisibilityCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForKeyboardVisibilityChangedEvents((e) => {
                    var t, o;
                    e ||
                      (null === (t = this.m_NameInputCallbackHandle) ||
                        void 0 === t ||
                        t.unregister(),
                      (this.m_NameInputCallbackHandle = void 0),
                      null === (o = this.m_DescriptionCallbackHandle) ||
                        void 0 === o ||
                        o.unregister(),
                      (this.m_DescriptionCallbackHandle = void 0));
                  });
          }
          componentWillUnmount() {
            var e;
            null === (e = this.m_KeyboardVisibilityCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              (this.m_KeyboardVisibilityCallbackHandle = void 0);
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
              case de.Personal:
                return "personal";
              case de.Public:
                return "public";
              case de.LocalFile:
                return "local_file";
              case de.AddNewDefault:
              case de.ReplaceDefault:
                return "replace_default";
            }
          }
          ConfirmBindingName() {
            if (this.m_bSavedOnce) return;
            (this.m_bSavedOnce = !0),
              console.log(
                "Confirmed: ",
                this.m_NameInput.value,
                this.m_DescriptionInput.value,
              );
            let e = this.GetSaveTypeString(this.props.eSaveType);
            e
              ? p.c6
                  .SaveCurrentBinding(
                    this.m_NameInput.value,
                    this.m_DescriptionInput.value,
                    e,
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
                      this.OnOverlayNameText,
                    )),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ThisOverlayKey(),
                  {},
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
                      this.OnOverlayDescriptionText,
                    )),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ThisOverlayKey(),
                  {},
                ));
          }
          OnOverlayDescriptionText(e) {
            (this.m_DescriptionInput.value = e),
              this.m_DescriptionCallbackHandle.unregister(),
              (this.m_DescriptionCallbackHandle = void 0);
          }
          GetUnboundActionItems() {
            const e = p.c6.UnboundActions;
            let t = [];
            for (const o of e) {
              const [e, { vecRequired: n }] = o;
              for (const o of n)
                t.push(
                  `${p.c6.GetActionSetLocalizedNameByName(e)}: ${o.localized_name}`,
                );
            }
            const o = t.length;
            return o > 5 && ((t = t.slice(0, 5)), t.push("+ " + (o - 5))), t;
          }
          render() {
            let e = p.c6.GetDefaultBindingNameForSaveType(
              this.GetSaveTypeString(this.props.eSaveType),
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
                    (0, d.Xx)("#BindingUI_SaveTitle"),
                  ),
                ),
                this.state.sError &&
                  i.createElement(
                    "div",
                    { className: "BindingSaveErrorHeader" },
                    i.createElement(
                      "div",
                      { className: "BindingSaveErrorMessage" },
                      (0, d.Xx)(this.state.sError),
                    ),
                    p.c6.HasUnboundActions &&
                      i.createElement(
                        "div",
                        { className: "MissingBindingsErrorSection" },
                        i.createElement(
                          "div",
                          null,
                          i.createElement(
                            "b",
                            null,
                            (0, d.Xx)("#SaveError_BindingMissingActionsList"),
                            ":",
                          ),
                        ),
                        this.GetUnboundActionItems().map((e, t) =>
                          i.createElement("div", { key: t }, e),
                        ),
                      ),
                  ),
                this.props.eSaveType == de.Personal &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_Personal"),
                  ),
                this.props.eSaveType == de.Public &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_Public"),
                  ),
                this.props.eSaveType == de.LocalFile &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_Export"),
                  ),
                (this.props.eSaveType == de.ReplaceDefault ||
                  this.props.eSaveType == de.AddNewDefault) &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.Xx)("#BindingUI_Save_ReplaceDefault"),
                  ),
                this.props.eSaveType == de.AddNewDefault &&
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.Xx)("#BindingUI_Save_AddNewDefault"),
                  ),
                i.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogName" },
                  (0, d.Xx)("#BindingUI_Binding_Name"),
                  " ",
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
                  (0, d.Xx)("#BindingUI_Binding_Description"),
                ),
                i.createElement("textarea", {
                  cols: 80,
                  rows: 5,
                  ref: this.BindDescriptionInput,
                  defaultValue: this.props.sDescription,
                  onFocus: this.OnDescriptionFocus,
                  placeholder: (0, d.Xx)(
                    "BindingUI_SaveDescriptionPlaceholder",
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
                    (0, d.Xx)("#BindingUI_SaveBinding"),
                  ),
                  i.createElement(
                    "div",
                    {
                      onClick: this.CloseSaveDialog,
                      className: "ButtonControl",
                    },
                    (0, d.Xx)("#Button_Cancel"),
                  ),
                ),
              ),
            );
          }
        };
        (0, n.gn)([h.ak], he.prototype, "CloseSaveDialog", null),
          (0, n.gn)([h.ak], he.prototype, "ConfirmBindingName", null),
          (0, n.gn)([h.ak], he.prototype, "BindNameInput", null),
          (0, n.gn)([h.ak], he.prototype, "BindDescriptionInput", null),
          (0, n.gn)([h.ak], he.prototype, "OnNameFocus", null),
          (0, n.gn)([h.ak], he.prototype, "OnOverlayNameText", null),
          (0, n.gn)([h.ak], he.prototype, "OnDescriptionFocus", null),
          (0, n.gn)([h.ak], he.prototype, "OnOverlayDescriptionText", null),
          (0, n.gn)([h.ak], he.prototype, "GetUnboundActionItems", null),
          (he = (0, n.gn)([a.Pi], he));
        let ue = class extends i.Component {
          render() {
            let e = this.props.UnboundActions.vecRequired.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, d.Xx)(
                    "#BindingUI_UnboundActions_Required",
                    e.localized_name,
                  ),
                ),
              ),
              t = this.props.UnboundActions.vecSuggested.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, d.Xx)(
                    "#BindingUI_UnboundActions_Suggested",
                    e.localized_name,
                  ),
                ),
              ),
              o = "UnboundActionsOverlay";
            return (
              this.props.Visible && (e.length || t.length) && (o += " Visible"),
              this.props.Visible &&
                i.createElement(
                  "div",
                  { className: o },
                  i.createElement(
                    "div",
                    { className: "FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, d.Xx)("#BindingUI_UnboundActions_Title"),
                    ),
                    e,
                    t,
                  ),
                )
            );
          }
        };
        var me;
        (ue = (0, n.gn)([a.Pi], ue)),
          (function (e) {
            (e[(e.ActionSet = 0)] = "ActionSet"),
              (e[(e.LegacySetup = 1)] = "LegacySetup"),
              (e[(e.SecondaryControllerSetup = 2)] =
                "SecondaryControllerSetup");
          })(me || (me = {}));
        let ge = class extends i.Component {
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
                eSaveType: de.None,
                bShowSelectConfirmModal: !1,
                bShowSkeletonBindings: !1,
                bEditBindingOnSelectConfirm: !1,
                bShowUnboundActionsOverlay: !1,
                vecUnboundActions: { vecRequired: [], vecSuggested: [] },
                eTabType: me.ActionSet,
              });
          }
          OnAppDropdownChanged(e) {
            p.c6.SetSelectedApp(e);
          }
          OnActionSetDropdownChanged(e) {
            this.setState({ eTabType: me.ActionSet }),
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
            this.setState({ eSaveType: de.None });
          }
          ShowPublicModal() {
            this.setState({ eSaveType: de.Public });
          }
          ShowPersonalModal() {
            this.setState({ eSaveType: de.Personal });
          }
          ShowExportModal() {
            this.setState({ eSaveType: de.LocalFile });
          }
          ShowReplaceDefaultModal() {
            let e =
              null !=
              p.c6.GetSelectedAppDefaultBinding(
                p.c6.SelectedControllerTypeInfo.controller_type,
              );
            this.setState({
              eSaveType: e ? de.ReplaceDefault : de.AddNewDefault,
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
            let o = p.c6.SelectedControllerTypeInfo;
            p.c6
              .SelectConfig(p.c6.SelectedApp, o ? o.controller_type : "", e)
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
              o = !0,
              n = (0, d.Xx)("#Button_Discard");
            if (this.ThisConfigNeedsUpgrade()) {
              let i = j.S.GetApp(p.c6.SelectedApp);
              (e = (0, d.Xx)("#BindingUI_List_Upgrade_Confirm", i.name)),
                (o = this.SelectWouldOverwriteAutosave()),
                o
                  ? (t = (0, d.Xx)("#BindingUI_List_Select_Confirm_Convert"))
                  : (n = (0, d.Xx)("#Button_Import"));
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
                      (0, d.Xx)("#BindingUI_ConfirmSelect_Title"),
                    ),
                    i.createElement("div", { className: "Label" }, e),
                    t &&
                      i.createElement(
                        "div",
                        { className: "Label SecondRow" },
                        t,
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
                              this.state.bEditBindingOnSelectConfirm,
                            ),
                        },
                        n,
                      ),
                      o &&
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: this.OnSaveClicked,
                          },
                          (0, d.Xx)("#Button_Save"),
                        ),
                      i.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: this.OnSelectDone,
                        },
                        (0, d.Xx)("#Button_Cancel"),
                      ),
                    ),
                  ),
              )
            );
          }
          OnSaveClicked() {
            let e = p.c6.LoadedBindingURL;
            this.OnSaveCurrentBinding(() =>
              this.OnSelectConfirmed(e, this.state.bEditBindingOnSelectConfirm),
            );
          }
          OnLegacySetup() {
            this.setState({ eTabType: me.LegacySetup });
          }
          OnSecondaryControllerSetup() {
            this.setState({ eTabType: me.SecondaryControllerSetup });
          }
          render() {
            let e = p.c6.ActionSets,
              t = e.map((e, t) => {
                let o = "Label Tab PositionRelative",
                  n = new p.Fv();
                p.c6.UnboundActions.has(e.name) &&
                  (n = p.c6.UnboundActions.get(e.name));
                let r = n.vecRequired.length + n.vecSuggested.length;
                return (
                  n.vecRequired.length > 0
                    ? (o += " Error")
                    : n.vecSuggested.length > 0 && (o += " Warning"),
                  e.name == p.c6.SelectedActionSet &&
                    this.state.eTabType == me.ActionSet &&
                    (o += " Selected"),
                  i.createElement(
                    "div",
                    {
                      key: t,
                      className: o,
                      onMouseEnter: () => {
                        this.ShowUnboundActionsOverlay(n);
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
                        r,
                      ),
                  )
                );
              });
            if (
              p.c6.SelectedBindingIsLegacy ||
              p.c6.ManifestOptions.length > 0
            ) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == me.LegacySetup && (e += " Selected"),
                t.push(
                  i.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnLegacySetup,
                    },
                    (0, d.Xx)("#LegacySetupTab"),
                  ),
                );
            }
            if (p.c6.IsSecondaryController) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == me.SecondaryControllerSetup &&
                (e += " Selected"),
                t.push(
                  i.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnSecondaryControllerSetup,
                    },
                    (0, d.Xx)("#SecondaryControllerTab"),
                  ),
                );
            }
            let o,
              n = !1,
              r = !1;
            p.c6.SelectedControllerTypeInfo &&
              this.state.eTabType == me.ActionSet &&
              ((o = p.c6.SelectedControllerTypeInfo),
              (n = "controller_handed" == o.input_bindingui_mode),
              (r =
                "hmd" == o.input_bindingui_mode ||
                "single_device" == o.input_bindingui_mode));
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
            let m = j.S.GetApp(p.c6.SelectedApp),
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
                  "#BindingUI_BindingType_" + p.c6.CurrentBindingSaveType,
                ),
                _,
              ),
              f = !this.ThisConfigNeedsUpgrade() && this.props.bReadOnlyView,
              C = this.ThisConfigNeedsUpgrade();
            return i.createElement(
              "div",
              { className: "FlexColumn FullPage" },
              i.createElement(
                "div",
                { className: "TopRow FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexColumn DescriptionTopRow" },
                  i.createElement(J, {
                    fnOnClick: u.w.ShowBindingList,
                    strTitle: v,
                    strSubTitle: b,
                    fnOpenOptionsModal: this.OpenOptionsModal,
                  }),
                ),
                e.length > 0 &&
                  i.createElement(
                    pe.P,
                    {
                      scrollDirection: pe.I.Horizontal,
                      className: (0, c.LJ)("ActionTabContainer", "TabRow"),
                    },
                    t,
                  ),
                this.state.eTabType == me.ActionSet &&
                  i.createElement(ue, {
                    Visible: this.state.bShowUnboundActionsOverlay,
                    UnboundActions: this.state.vecUnboundActions,
                  }),
                p.c6.SaveNoticeText &&
                  i.createElement(
                    "div",
                    { className: "UnboundActionsOverlay Visible" },
                    (0, d.Xx)(p.c6.SaveNoticeText),
                  ),
              ),
              n &&
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
              this.state.eTabType == me.LegacySetup &&
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
                    i.createElement($, { readOnly: this.props.bReadOnlyView }),
                    i.createElement(re, { readOnly: this.props.bReadOnlyView }),
                  ),
                ),
              this.state.eTabType == me.SecondaryControllerSetup &&
                i.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  i.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    i.createElement(oe, {
                      readOnly: this.props.bReadOnlyView,
                      options: p.c6.SecondaryControllerOptions,
                    }),
                  ),
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
                      (0, d.Xx)("#BindingUI_PublishToWorkshop"),
                    ),
                  !this.props.bReadOnlyView &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPersonalModal,
                      },
                      (0, d.Xx)("#BindingUI_SavePersonal"),
                    ),
                  f &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!1);
                        },
                      },
                      (0, d.Xx)("#BindingUI_SelectThisBinding"),
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
                      (0, d.Xx)("#BindingUI_EditThisBinding"),
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
                      (0, d.Xx)("#BindingUI_ImportThisBinding"),
                    ),
                  P.I.BDevMode &&
                    i.createElement("div", {
                      className: "BindingManageButtonsHR",
                    }),
                  P.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ToggleDeveloperOutput,
                      },
                      a,
                    ),
                  P.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowExportModal,
                      },
                      (0, d.Xx)("#BindingUI_ExportBindingFile"),
                    ),
                  P.I.BDevMode &&
                    !p.c6.SelectedBindingIsLegacy &&
                    !p.c6.SelectedBindingIsOpenXR &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowReplaceDefaultModal,
                      },
                      (0, d.Xx)("#BindingUI_ReplaceDefaultFile"),
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
                          eActionSourceType: U.Pose,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
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
                          eActionSourceType: U.Haptics,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
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
                          eActionSourceType: U.Skeleton,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
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
                      i.createElement(Z, {
                        fnCloseModal: this.CloseChordBindingsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      }),
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
                      i.createElement(ae, {
                        fnCloseModal: this.CloseOptionsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      }),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "DebugButtons FlexFullWidthRowCentered" },
                  this.state.bDeveloperOutput &&
                    i.createElement("textarea", {
                      readOnly: !0,
                      style: { width: "1000px", height: "400px" },
                      value: p.c6.BindingConfig,
                    }),
                ),
              ),
              this.state.eSaveType != de.None &&
                i.createElement(he, {
                  sDescription: p.c6.ConfigDescription,
                  eSaveType: this.state.eSaveType,
                  ParentClose: this.CloseSaveModal,
                }),
              this.renderSelectConfirmModal(),
            );
          }
        };
        (0, n.gn)([h.ak], ge.prototype, "OnAppDropdownChanged", null),
          (0, n.gn)([h.ak], ge.prototype, "OnActionSetDropdownChanged", null),
          (0, n.gn)([h.ak], ge.prototype, "ToggleDeveloperOutput", null),
          (0, n.gn)([h.ak], ge.prototype, "OpenPoseBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "ClosePoseBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "OpenHapticsBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "CloseHapticsBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "OpenSkeletonBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "CloseSkeletonBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "OpenChordBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "CloseChordBindingsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "OpenOptionsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "CloseOptionsModal", null),
          (0, n.gn)([h.ak], ge.prototype, "CloseSaveModal", null),
          (0, n.gn)([h.ak], ge.prototype, "ShowPublicModal", null),
          (0, n.gn)([h.ak], ge.prototype, "ShowPersonalModal", null),
          (0, n.gn)([h.ak], ge.prototype, "ShowExportModal", null),
          (0, n.gn)([h.ak], ge.prototype, "ShowReplaceDefaultModal", null),
          (0, n.gn)([h.ak], ge.prototype, "ShowUnboundActionsOverlay", null),
          (0, n.gn)([h.ak], ge.prototype, "HideUnboundActionsOverlay", null),
          (0, n.gn)([h.ak], ge.prototype, "SetBindingUIInMirroredMode", null),
          (0, n.gn)([h.ak], ge.prototype, "SelectThisBinding", null),
          (0, n.gn)([h.ak], ge.prototype, "OnSelectBinding", null),
          (0, n.gn)([h.ak], ge.prototype, "OnSelectConfirmed", null),
          (0, n.gn)([h.ak], ge.prototype, "OnSelectDone", null),
          (0, n.gn)([h.ak], ge.prototype, "OnSaveCurrentBinding", null),
          (0, n.gn)([h.ak], ge.prototype, "renderSelectConfirmModal", null),
          (0, n.gn)([h.ak], ge.prototype, "OnSaveClicked", null),
          (0, n.gn)([h.ak], ge.prototype, "OnLegacySetup", null),
          (0, n.gn)([h.ak], ge.prototype, "OnSecondaryControllerSetup", null),
          (ge = (0, n.gn)([a.Pi], ge));
        var _e = o(6166);
        let ve = class extends i.Component {
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
                    this.props.sError,
                  ),
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SaveBottomButtonRow LoadErrorCloseButton",
                    },
                    this.props.bCanClose
                      ? i.createElement(
                          "div",
                          {
                            onClick: this.CloseDialog,
                            className: "ButtonControl",
                          },
                          (0, d.Xx)("#Button_Close"),
                        )
                      : i.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              p.c6.ClearSelectedApp(),
                                u.w.ShowAppSelect(),
                                this.CloseDialog();
                            },
                          },
                          (0, d.Xx)("#BindingUI_List_ErrorReturnToAppSelect"),
                        ),
                  ),
                ),
              )
            );
          }
        };
        (0, n.gn)([h.ak], ve.prototype, "CloseDialog", null),
          (ve = (0, n.gn)([a.Pi], ve));
        let Se = class extends i.Component {
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
                _e.s.RequestUserInformation(this.props.result.steamIDOwner);
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              this.setState({ bShowDeleteConfirmModal: !1 }),
                yield p.c6.DeleteBinding(this.props.result.url),
                yield u.w.GetBindingList();
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
                    (0, d.Xx)("#BindingUI_List_Delete_Confirm", e.name),
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
                      (0, d.Xx)("#Button_Delete"),
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, d.Xx)("#Button_Cancel"),
                    ),
                  ),
                ),
            );
          }
          OnView() {
            this.props.fnViewBinding(
              this.props.result.url,
              !this.props.bCurrentlySelectedBinding,
            );
          }
          OnSelect() {
            this.props.fnSelectBinding(this.props.result.url);
          }
          render() {
            var e;
            let t,
              o,
              n = new Date(),
              r = new Date(1e3 * this.props.result.time),
              a =
                n.getTime() - r.getTime() > 1728e5
                  ? r.toLocaleDateString()
                  : r.toLocaleString(),
              s = this.props.result,
              l = "developer" == s.type,
              c = "0" != s.steamIDOwner && !l,
              h = j.S.GetApp(p.c6.SelectedApp),
              u = h ? h.name : "";
            l &&
              ((s.name && 0 != s.name.length) ||
                (p.c6.SelectedBindingIsLegacy
                  ? (s.name = (0, d.Xx)(
                      "#BindingUI_List_Legacy_Binding_Title",
                      u,
                    ))
                  : (s.name = (0, d.Xx)(
                      "#BindingUI_List_Developer_Binding_Title",
                      u,
                    ))),
              (s.description && 0 != s.description.length) ||
                (p.c6.SelectedBindingIsLegacy
                  ? (s.description = (0, d.Xx)(
                      "#BindingUI_List_Legacy_Binding_Description",
                    ))
                  : (s.description = (0, d.Xx)(
                      "#BindingUI_List_Developer_Binding_Description",
                    )))),
              c &&
                ((o = _e.s.GetUserInformation(s.steamIDOwner).avatar_url),
                (t = _e.s.GetUserInformation(s.steamIDOwner).persona_name));
            let m = this.props.bCurrentlySelectedBinding
                ? (0, d.Xx)("#BindingUI_List_Edit")
                : (0, d.Xx)("#BindingUI_List_View"),
              g = s.name;
            "autosave" == s.type &&
              (g = (0, d.Xx)("#BindingUI_List_Autosave", s.name));
            let _ = null;
            this.state.bOldVersion &&
              (_ = this.props.bCurrentlySelectedBinding
                ? (0, d.Xx)(
                    "#BindingUI_List_OldVersionWarning_CurrentBinding",
                    u,
                  )
                : (0, d.Xx)("#BindingUI_List_OldVersionWarning", u));
            let v = null;
            if (s.secondsPlayed > 0) {
              let e = s.secondsPlayed / 60;
              v = (0, d.Xx)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
            }
            let S = null;
            if (s.secondsPlayedThisMonth > 0) {
              let e = s.secondsPlayedThisMonth / 60;
              S = (0, d.Xx)(
                "#BindingUI_List_MinutesPlayedThisMonth",
                e.toFixed(0),
              );
            }
            let y =
                null === (e = p.c6.SelectedControllerTypeInfo) || void 0 === e
                  ? void 0
                  : e.controller_type,
              b =
                null != s.controllerType &&
                "" != s.controllerType &&
                s.controllerType != y;
            return i.createElement(
              "div",
              { className: "BindingEntry FlexRow" },
              o &&
                i.createElement("img", {
                  className: "SteamCommunityProfileImage",
                  src: o,
                }),
              c &&
                !o &&
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
                    (0, d.Xx)("#BindingUI_List_Select"),
                  ),
                !p.c6.HasBindingUriFailedToLoad(s.url) &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnView,
                    },
                    m,
                  ),
                s.owned &&
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
                    }),
                  ),
                i.createElement(
                  "span",
                  { className: "BindingName" },
                  g,
                  i.createElement("br", null),
                ),
                i.createElement(
                  "span",
                  { className: "BindingDescription" },
                  s.description,
                  i.createElement("br", null),
                ),
                t &&
                  i.createElement(
                    "span",
                    { className: "BindingSteamPersonaName Label" },
                    (0, d.Xx)("#BindingUI_List_PublishedBy", t),
                    i.createElement("br", null),
                  ),
                s.time > 0 &&
                  i.createElement(
                    "span",
                    { className: "BindingLastUpdated" },
                    (0, d.Xx)("#BindingUI_List_LastUpdated"),
                    a,
                    S && " - " + S,
                    v && " - " + v,
                    i.createElement("br", null),
                  ),
                _ &&
                  i.createElement(
                    "span",
                    { className: "ConvertWarning" },
                    _,
                    i.createElement("br", null),
                  ),
                b &&
                  i.createElement(
                    "div",
                    { className: "RemappedInfo" },
                    i.createElement("hr", { className: "RemappedInfoHr" }),
                    i.createElement(
                      "span",
                      { className: "RemappedInfoSpan" },
                      i.createElement("img", {
                        className: "InformationButtonImage",
                        src: "images/bindingui/icon_information.svg",
                      }),
                      (0, d.Xx)("#BindingUI_Compatibility_Remapped_Text"),
                    ),
                  ),
              ),
              i.createElement("div", {
                className: "FlexRow BindingEntryActionButtons",
              }),
              this.renderDeleteConfirmModal(s),
            );
          }
        };
        (0, n.gn)([h.ak], Se.prototype, "OnDelete", null),
          (0, n.gn)([h.ak], Se.prototype, "OnDeleteConfirmed", null),
          (0, n.gn)([h.ak], Se.prototype, "OnDeleteCancel", null),
          (0, n.gn)([h.ak], Se.prototype, "renderDeleteConfirmModal", null),
          (0, n.gn)([h.ak], Se.prototype, "OnView", null),
          (0, n.gn)([h.ak], Se.prototype, "OnSelect", null),
          (Se = (0, n.gn)([a.Pi], Se));
        let ye = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bIsBindingsLoading: !0 });
          }
          RefreshBindingList() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              this.setState({ bIsBindingsLoading: !0 }),
                yield u.w.GetBindingList(),
                this.setState({ bIsBindingsLoading: !1 });
            });
          }
          componentDidMount() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.RefreshBindingList();
            });
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
            return (0, n.mG)(this, void 0, void 0, function* () {
              p.c6.SetSelectedController(e), yield this.RefreshBindingList();
            });
          }
          ComputeResultsSection(e, t) {
            u.w.CurrentBinding && u.w.CurrentBinding.type;
            let o = u.w.BindingQueryResults,
              n = [];
            return (
              o &&
                o.length > 0 &&
                (n = o
                  .filter(t)
                  .map((e, t) =>
                    i.createElement(Se, {
                      key: t,
                      currentBinding: u.w.CurrentBinding,
                      result: e,
                      fnViewBinding: this.ViewBinding,
                      fnSelectBinding: this.SelectBinding,
                      bCurrentlySelectedBinding: !1,
                    }),
                  )),
              n.length > 0 &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(
                    "div",
                    { className: "BindingListSectionHeader" },
                    (0, d.Xx)(e),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRowWithWrap BindingListSection" },
                    n,
                  ),
                )
            );
          }
          CreateControllerTypeDropdown() {
            let e = [],
              t = j.S.IsAppAllowedPrivateInputs(p.c6.SelectedApp);
            P.I.ControllerTypes.forEach((o) => {
              (t || "InputValueVisibility_SteamVRInternal" != o.visibility) &&
                "InputValueVisibility_None" != o.visibility &&
                e.push(o);
            }),
              e.sort((e, t) => e.priority - t.priority);
            let o = [];
            e.forEach((e) => {
              o.push(
                new v.GZ(
                  e.controller_type,
                  P.I.LocalizeDriverString(e.resource_root, e.controller_type),
                ),
              );
            });
            let n = "",
              r = "",
              a = p.c6.SelectedControllerTypeInfo;
            return (
              a &&
                (a.input_bindingui_right.transform &&
                  (n = a.input_bindingui_right.transform),
                (r = a.input_bindingui_right.uri)),
              a.device_class,
              i.createElement(
                "div",
                { className: "FlexColumn ControllerTypeWrapper" },
                i.createElement(
                  "div",
                  { className: "BindingListSectionHeader Label" },
                  (0, d.Xx)("#BindingList_ControllerOption"),
                ),
                i.createElement(
                  "div",
                  { className: "FlexRow ControllerTypeButton BindingEntry" },
                  i.createElement("img", {
                    className: "ControllerImage",
                    src: r,
                    style: { transform: n },
                  }),
                  i.createElement(v.vs, {
                    vecOptions: o,
                    sModalClass: "PinTop",
                    sValueSelectedItem: a ? a.controller_type : "",
                    sLocalizedSelectedItem: P.I.LocalizeControllerString(
                      a,
                      a ? a.controller_type : "",
                    ),
                    fnOptionSelected: this.OnControllerDropdownChanged,
                  }),
                ),
              )
            );
          }
          render() {
            let e = j.S.GetApp(p.c6.SelectedApp),
              t = "";
            e && (t = e.name);
            let o = u.w.CurrentBinding,
              n = "#BindingUI_List_DeveloperSection";
            p.c6.SelectedBindingIsLegacy &&
              (n = "#BindingUI_List_LegacySection");
            let r = [];
            return (
              null != u.w.BindingQueryResults &&
                (r = u.w.BindingQueryResults.filter(
                  (e) => "autosave" != e.type,
                )),
              i.createElement(
                "div",
                { className: "FlexColumn FullPage" },
                i.createElement(J, {
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
                      (0, d.Xx)("#BindingUI_List_CurrentSection"),
                    ),
                    o &&
                      i.createElement(Se, {
                        result: o,
                        currentBinding: u.w.CurrentBinding,
                        fnViewBinding: this.ViewBinding,
                        bCurrentlySelectedBinding: !0,
                      }),
                  ),
                  this.CreateControllerTypeDropdown(),
                ),
                i.createElement("hr", null),
                this.state.bIsBindingsLoading
                  ? i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        "div",
                        { className: "BindingUILoadingSection" },
                        i.createElement(
                          "p",
                          { className: "BindingUILoadingHeader" },
                          (0, d.Xx)("#BindingUI_List_Loading"),
                        ),
                      ),
                    )
                  : i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        "div",
                        { className: "AppBindingSection" },
                        this.ComputeResultsSection(
                          n,
                          (e) =>
                            "developer" == e.type &&
                            e.url != p.c6.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_ImportSection",
                          (e) =>
                            "local_file" == e.type &&
                            e.url != p.c6.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_PersonalSection",
                          (e) =>
                            "personal" == e.type &&
                            e.url != p.c6.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_OwnedSection",
                          (e) =>
                            "public" == e.type &&
                            e.owned &&
                            e.url != p.c6.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_PublicSection",
                          (e) =>
                            "public" == e.type &&
                            !e.owned &&
                            e.url != p.c6.SelectedBindingURL,
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
                                (0, d.Xx)("#BindingUI_List_NoBindingsFound"),
                              ),
                            ),
                          ),
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl DeveloperLabel Inline",
                            onClick: this.CreateBinding,
                          },
                          (0, d.Xx)("#BindingUI_List_CreateBinding"),
                        ),
                      ),
                    ),
                u.w.ShowBindingListError &&
                  i.createElement(ve, {
                    sError: u.w.BindingListError,
                    bCanClose: u.w.CanCloseBindingListError,
                  }),
              )
            );
          }
        };
        (0, n.gn)([h.ak], ye.prototype, "RefreshBindingList", null),
          (0, n.gn)([h.ak], ye.prototype, "CreateBinding", null),
          (0, n.gn)([h.ak], ye.prototype, "SelectBinding", null),
          (0, n.gn)([h.ak], ye.prototype, "ViewBinding", null),
          (0, n.gn)([h.ak], ye.prototype, "OnControllerDropdownChanged", null),
          (0, n.gn)([h.ak], ye.prototype, "ComputeResultsSection", null),
          (0, n.gn)([h.ak], ye.prototype, "CreateControllerTypeDropdown", null),
          (ye = (0, n.gn)([a.Pi], ye));
        let be = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                strImageURL: j.S.GetAppImageURL(this.props.app.key),
              });
          }
          componentWillReceiveProps(e) {
            e.app.key != this.props.app.key &&
              this.setState({ strImageURL: j.S.GetAppImageURL(e.app.key) });
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
                this.props.app.name,
              ),
            );
          }
        };
        be = (0, n.gn)([a.Pi], be);
        let fe = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_bInHeadset = !1),
              (this.m_bInHeadset = !!l.Co && !u.w.DesktopMode),
              (this.state = { bShowRecentApps: !1 });
          }
          SelectApplication(e) {
            p.c6.SetSelectedApp(e), u.w.ShowBindingList();
          }
          OnShowMoreApps() {
            this.setState({ bShowRecentApps: !0 });
          }
          renderAppColumn() {
            let e = j.S.GetApp("openvr.component.vrcompositor"),
              t = j.S.GetApp("openvr.tool.steamvr_environments"),
              o = j.S.GetRecentApps();
            t && (o = o.filter((e) => e.key != t.key));
            let n,
              r = j.S.GetCurrentSceneProcess();
            return (
              !r && o.length > 0 && (r = o[0]),
              r && (o = o.filter((e) => e.key != r.key)),
              (n = this.state.bShowRecentApps
                ? i.createElement(
                    "div",
                    { className: "AppSelectList" },
                    i.createElement(
                      "div",
                      { className: "AppSelectListItems" },
                      o.map((e, t) =>
                        i.createElement(be, {
                          key: t,
                          app: e,
                          fnSelectApp: this.SelectApplication,
                        }),
                      ),
                    ),
                  )
                : i.createElement(
                    "div",
                    {
                      className: "ButtonControl AppSelectShowMoreButton",
                      onClick: this.OnShowMoreApps,
                    },
                    (0, d.Xx)("#AppSelect_ShowMoreApps"),
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
                      i.createElement(be, {
                        app: r,
                        fnSelectApp: this.SelectApplication,
                      }),
                    e &&
                      i.createElement(be, {
                        app: e,
                        fnSelectApp: this.SelectApplication,
                      }),
                    t &&
                      i.createElement(be, {
                        app: t,
                        fnSelectApp: this.SelectApplication,
                      }),
                  ),
                ),
                n,
              )
            );
          }
          render() {
            return i.createElement(
              "div",
              { className: "AppSelectPageWrapper" },
              i.createElement(J, {
                fnOnClick: u.w.ReturnToSettingsUI,
                strTitle: (0, d.Xx)("#AppSelect_EditBindings"),
                bShowBackButton: this.m_bInHeadset,
              }),
              i.createElement(
                "div",
                { className: "AppSelectColumnWrapper" },
                this.renderAppColumn(),
              ),
            );
          }
        };
        (0, n.gn)([h.ak], fe.prototype, "SelectApplication", null),
          (0, n.gn)([h.ak], fe.prototype, "OnShowMoreApps", null),
          (fe = (0, n.gn)([a.Pi], fe));
        var Ce,
          ke,
          Ie,
          Ee = o(3010),
          Me = o(5177),
          Re = o(3930),
          we = o(2609);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Boolean = 1)] = "Boolean"),
            (e[(e.Vector1 = 2)] = "Vector1"),
            (e[(e.Vector2 = 3)] = "Vector2"),
            (e[(e.Vector3 = 4)] = "Vector3"),
            (e[(e.Pose = 20)] = "Pose"),
            (e[(e.SimpleHaptic = 21)] = "SimpleHaptic"),
            (e[(e.Skeleton = 22)] = "Skeleton"),
            (e[(e.EyeTracking = 23)] = "EyeTracking");
        })(Ce || (Ce = {})),
          (function (e) {
            (e[(e.Estimated = 0)] = "Estimated"),
              (e[(e.Partial = 1)] = "Partial"),
              (e[(e.Full = 2)] = "Full");
          })(ke || (ke = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Boolean = 1)] = "Boolean"),
              (e[(e.Scalar = 2)] = "Scalar"),
              (e[(e.Pose = 3)] = "Pose"),
              (e[(e.Skeleton = 4)] = "Skeleton"),
              (e[(e.Haptic = 5)] = "Haptic");
          })(Ie || (Ie = {}));
        let Te = 16777216;
        function Oe(e) {
          return "number" != typeof e
            ? "-"
            : e >= Te && e <= 33554431
              ? (0, d.Xx)("#InputDebugger_Priority_Overlay", e - Te)
              : e.toFixed(0);
        }
        class De extends i.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              (this.m_msgNextState = null),
              this.m_mailbox.Init("input_debugger"),
              this.m_mailbox.RegisterHandler("input_frame", this.OnInputFrame),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetInt32PathProperty(
                  "/input_debugger_pid",
                  0,
                ),
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
            let t = j.S.GetApp(e);
            t.pid &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetInt32PathProperty(
                  "/input_debugger_pid",
                  t.pid,
                )),
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
              let t = j.S.FindAppByPid(e.pid);
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
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/input_debugger_pid",
                0,
              ),
              this.m_timerStateUpdate &&
                window.clearInterval(this.m_timerStateUpdate);
          }
          GetActionSetName(e) {
            let t;
            return (
              this.state.actionManifest &&
                (t = this.state.actionManifest.action_sets.find(
                  (t) => t.name.toLowerCase() == e.toLowerCase(),
                )),
              t ? t.localized_name : e
            );
          }
          GetActionName(e) {
            let t;
            if (this.state.actionManifest)
              for (let o of this.state.actionManifest.action_sets)
                if (
                  ((t = o.actions.find(
                    (t) => t.name.toLowerCase() == e.toLowerCase(),
                  )),
                  t)
                )
                  break;
            return t ? t.localized_name : e;
          }
          GetMaxPriority(e) {
            var t, o, n, i, r, a;
            return Math.max(
              null !==
                (n =
                  null ===
                    (o =
                      null === (t = this.state.latestState) || void 0 === t
                        ? void 0
                        : t.priorityMap) || void 0 === o
                    ? void 0
                    : o[e]) && void 0 !== n
                ? n
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
                : null,
            );
          }
          renderActionSets() {
            if (!this.state.latestState.activeActionSets)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, d.Xx)("#InputDebugger_NoActiveActionSets"),
              );
            let e = [];
            for (let t of this.state.latestState.activeActionSets) {
              let o, n;
              t.secondaryActionSet
                ? ((o = t.secondaryActionSet), (n = this.GetActionSetName(o)))
                : ((n = (0, d.Xx)("#InputDebugger_None")), (o = ""));
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
                    r,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetPath" },
                    t.actionSet,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetPriority" },
                    Oe(t.priority),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetDevice" },
                    a,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryName" },
                    n,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryPath" },
                    o,
                  ),
                ),
              );
            }
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, d.Xx)("#InputDebugger_ActiveActionSets"),
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
                    (0, d.Xx)("#InputDebugger_ActionSetName"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "3" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_Priority"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "4" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_Device"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "5 / span 2" }, className: "Label" },
                    (0, d.Xx)("#InputDebugger_SecondaryActionSetName"),
                  ),
                ),
                e,
              ),
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
              case Ce.Boolean:
              case Ce.Vector1:
              case Ce.Vector2:
              case Ce.Vector3:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.Xx)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.Xx)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.Xx)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.Xx)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "value" },
                    (0, d.Xx)("#InputDebugger_Value"),
                  ),
                ];
              case Ce.Pose:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.Xx)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.Xx)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.Xx)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.Xx)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "position" },
                    (0, d.Xx)("#InputDebugger_Pose_Position"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "rotation" },
                    (0, d.Xx)("#InputDebugger_Pose_Rotation"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "state" },
                    (0, d.Xx)("#InputDebugger_Pose_State"),
                  ),
                ];
              case Ce.EyeTracking:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.Xx)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.Xx)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.Xx)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.Xx)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "tracked" },
                    (0, d.Xx)("#InputDebugger_Tracked"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "valid" },
                    (0, d.Xx)("#InputDebugger_Valid"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin_position" },
                    (0, d.Xx)("#InputDebugger_EyeTracking_Origin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "target_position" },
                    (0, d.Xx)("#InputDebugger_EyeTracking_Target"),
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
                  "ActionEntry",
                ),
                key: t,
              },
              e ? "TRUE" : "false",
            );
          }
          renderScalar(e, t) {
            return i.createElement(
              "div",
              { className: (0, c.LJ)("Label", "ActionEntry"), key: t },
              e.toFixed(2),
            );
          }
          renderBinding(e, t) {
            var o, n;
            if (
              null === (o = e.binding) || void 0 === o
                ? void 0
                : o.startsWith("/filters/")
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
                  (0, d.Xx)("#InputDebugger_FilterDetails"),
                ),
              );
            {
              let o = this.GetMaxPriority(e.binding),
                r = null !== (n = e.binding) && void 0 !== n ? n : "-";
              return (
                "number" == typeof o &&
                  (r += " " + (0, d.Xx)("#InputDebugger_PriorityValue", Oe(o))),
                i.createElement(
                  "div",
                  {
                    className: "Label ActionEntry",
                    key: t + e.inputSource + "_binding",
                  },
                  r,
                )
              );
            }
          }
          renderActionEntry(e, t, o) {
            var n, r, a, s, l, c, d, p, h;
            switch (e.type) {
              case Ce.Boolean:
                let e = t.data;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (n = t.inputSource) && void 0 !== n ? n : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (r = t.data.activeOrigin) && void 0 !== r
                      ? r
                      : "-",
                  ),
                  this.renderBoolean(e.state, o + "_value"),
                ];
              case Ce.Vector1:
              case Ce.Vector2:
              case Ce.Vector3:
                let u = t.data,
                  m = u.x.toFixed(2);
                return (
                  void 0 !== u.y && (m += ", " + u.y.toFixed(2)),
                  void 0 !== u.z && (m += ", " + u.z.toFixed(2)),
                  [
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_source" },
                      null !== (a = t.inputSource) && void 0 !== a ? a : "-",
                    ),
                    this.renderBinding(t, o),
                    this.renderBoolean(t.data.active, o + "_active"),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_origin" },
                      null !== (s = t.data.activeOrigin) && void 0 !== s
                        ? s
                        : "-",
                    ),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_value" },
                      m,
                    ),
                  ]
                );
              case Ce.Pose:
                let g = t.data,
                  _ = `${g.position_x.toFixed(2)}, ${g.position_y.toFixed(2)}, ${g.position_z.toFixed(2)}`,
                  v = {
                    x: g.rotation_x,
                    y: g.rotation_y,
                    z: g.rotation_z,
                    w: g.rotation_w,
                  },
                  S = `(${g.rotation_x.toFixed(2)}, ${g.rotation_y.toFixed(2)}, ${g.rotation_z.toFixed(2)})`;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (l = t.inputSource) && void 0 !== l ? l : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (c = t.data.activeOrigin) && void 0 !== c
                      ? c
                      : "-",
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_position" },
                    g ? _ : "-",
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_rotation" },
                    null != S ? S : "-",
                    i.createElement(we.Z, {
                      quaternion: v,
                      width: 50,
                      height: 50,
                    }),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_state" },
                    null !== (d = g.tracking) && void 0 !== d ? d : "-",
                  ),
                ];
              case Ce.EyeTracking:
                let y = t.data,
                  b = `${y.origin_position_x.toFixed(5)}, ${y.origin_position_y.toFixed(5)}, ${y.origin_position_z.toFixed(5)}`,
                  f = `${y.target_position_x.toFixed(5)}, ${y.target_position_y.toFixed(5)}, ${y.target_position_z.toFixed(5)}`;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (p = t.inputSource) && void 0 !== p ? p : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (h = t.data.activeOrigin) && void 0 !== h
                      ? h
                      : "-",
                  ),
                  this.renderBoolean(y.tracked, o + "_tracked"),
                  this.renderBoolean(y.valid, o + "_valid"),
                  i.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: o + "_origin_position",
                    },
                    y ? b : "-",
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: o + "_target_position",
                    },
                    y ? f : "-",
                  ),
                ];
              default:
                return null;
            }
          }
          renderAction(e) {
            if (!e) return [null, 0];
            let t = this.renderActionHeader(e.type);
            if (!t) return [null, 0];
            let o = [t],
              n = 1;
            if (e.entries)
              for (let i of e.entries) {
                let r = this.renderActionEntry(e, i, (n++).toString());
                if (r) {
                  if (r.length != t.length)
                    throw new Error(
                      "Values must have the same length as header",
                    );
                  o.push(r);
                }
              }
            let r = [];
            for (let e = 0; e < o[0].length; e++)
              for (let t = 0; t < o.length; t++) r.push(o[t][e]);
            let a = Math.max(o.length, 5);
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
                    ")",
                  ),
                ),
                r,
              ),
              a,
            ];
          }
          renderCurrentActions() {
            if (!this.state.sCurrentActionSet) return null;
            let e = new Set(),
              t = [],
              o = 0;
            for (let n of this.state.latestState.actions)
              if (n.actionSet == this.state.sCurrentActionSet) {
                let [i, r] = this.renderAction(n);
                if (!i) continue;
                (o = Math.max(r, o)), t.push(i), e.add(n.path.toLowerCase());
              }
            if (this.state.actionManifest) {
              let n = this.state.actionManifest.action_sets.find(
                (e) => e.name == this.state.sCurrentActionSet,
              );
              if (n)
                for (let r of n.actions)
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
                              style: { gridColumn: "1 / " + (o + 1) },
                            },
                            r.localized_name,
                            i.createElement(
                              "span",
                              { className: "ActionPath" },
                              " (",
                              r.name,
                              ")",
                            ),
                          ),
                          i.createElement(
                            "div",
                            { className: "Unbound Label" },
                            (0, d.Xx)("#InputDebugger_ActionUnbound"),
                          ),
                        ),
                      ),
                      e.add(r.name.toLowerCase())));
            }
            return i.createElement(
              "div",
              { className: "ActionListWrapper" },
              i.createElement("div", { className: "ActionList" }, t),
            );
          }
          renderActions() {
            if (!this.state.latestState.actions)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, d.Xx)("#InputDebugger_NoActions"),
              );
            let e = new Set();
            for (let t of this.state.latestState.actions) e.add(t.actionSet);
            let t = [];
            for (let o of e)
              t.push(
                i.createElement(
                  Me.z,
                  {
                    onClick: () => {
                      this.SetActionSet(o);
                    },
                    key: o,
                    className: (0, c.LJ)("ActionSetButton", "ButtonControl", [
                      "Selected",
                      o == this.state.sCurrentActionSet,
                    ]),
                  },
                  this.GetActionSetName(o),
                ),
              );
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, d.Xx)("#InputDebugger_Actions"),
              ),
              i.createElement(
                "div",
                { className: "ActionContainer" },
                i.createElement("div", { className: "ActionSetButtons" }, t),
                this.renderCurrentActions(),
              ),
            );
          }
          renderLatestState() {
            return this.state.latestState
              ? i.createElement(
                  "div",
                  { className: "DebuggerState" },
                  this.renderActionSets(),
                  this.renderActions(),
                )
              : i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_WaitingForApp"),
                );
          }
          FindFilter(e) {
            var t, o;
            if (this.state.latestState && this.state.latestState.filters)
              for (let n of this.state.latestState.filters) {
                if (
                  null === (t = n.inputs) || void 0 === t
                    ? void 0
                    : t.find((t) => t.path == e)
                )
                  return n;
                if (
                  null === (o = n.outputs) || void 0 === o
                    ? void 0
                    : o.find((t) => t.path == e)
                )
                  return n;
              }
          }
          renderFilterIO(e, t) {
            let o;
            switch (e.type) {
              case Ie.Boolean:
                o = this.renderBoolean(e.value);
                break;
              case Ie.Scalar:
                o = this.renderScalar(e.value);
                break;
              default:
                o = i.createElement("div", { className: "Label" }, Ie[e.type]);
            }
            let n = this.GetMaxPriority(e.path);
            return i.createElement(
              "div",
              { className: "FilterIO", key: e.path },
              i.createElement("div", { className: "Label" }, e.path, ": "),
              o,
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
                  (0, d.Xx)("#InputDebugger_FilterDetails"),
                ),
              "number" == typeof n &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_PriorityValue", Oe(n)),
                ),
              e.suppressedByPriority &&
                i.createElement(
                  "div",
                  { className: "Label Suppressed" },
                  (0, d.Xx)("#InputDebugger_Suppressed"),
                ),
            );
          }
          renderFilterState() {
            if (!this.state.sFilterPath) return null;
            let e = this.FindFilter(this.state.sFilterPath),
              t = [];
            for (let o in e.parameters) {
              let n,
                r = e.parameters[o];
              switch (typeof r) {
                case "boolean":
                  n = r ? "true" : "false";
                  break;
                case "number":
                  n = r.toFixed(2);
                  break;
                default:
                  n = JSON.stringify(r);
              }
              t.push(
                i.createElement(
                  "div",
                  { className: "Label", key: o },
                  o,
                  ": ",
                  n,
                ),
              );
            }
            let o = [];
            for (let t of e.inputs) o.push(this.renderFilterIO(t, !0));
            o ||
              o.push(
                i.createElement(
                  "div",
                  { className: "Label", key: "none" },
                  (0, d.Xx)("#InputDebugger_None"),
                ),
              );
            let n = [];
            for (let t of e.outputs) n.push(this.renderFilterIO(t, !1));
            return (
              n ||
                n.push(
                  i.createElement(
                    "div",
                    { className: "Label", key: "none" },
                    (0, d.Xx)("#InputDebugger_None"),
                  ),
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
                  " ",
                ),
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_FilterType"),
                  e.type,
                ),
                t &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: "Label InputDebuggerHeading" },
                      (0, d.Xx)("#InputDebugger_Parameters"),
                    ),
                    i.createElement("div", { className: "ParameterList" }, t),
                  ),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.Xx)("#InputDebugger_Inputs"),
                ),
                i.createElement("div", { className: "InputList" }, o),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.Xx)("#InputDebugger_Outputs"),
                ),
                i.createElement("div", { className: "OutputList" }, n),
              )
            );
          }
          render() {
            let e = j.S.GetRunningApps(),
              t = [];
            for (let o of e)
              t.push({ value: o.key, sLabel: `${o.name} (pid: ${o.pid})` });
            return i.createElement(
              "div",
              { className: "DebuggerMain" },
              i.createElement(J, {
                fnOnClick: u.w.ReturnToSettingsUI,
                strTitle: (0, d.Xx)("#InputDebugger_Title"),
              }),
              i.createElement(
                "div",
                { className: "AppDropdownWrapper" },
                i.createElement(Ee.Lt, {
                  items: t,
                  onChange: this.OnSelectApp,
                  value: this.state.sCurrentApp,
                  defaultLabel: (0, d.Xx)("#InputDebugger_SelectApplication"),
                }),
              ),
              !this.state.actionManifest &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_ActionManifestLoading"),
                ),
              this.state.sError &&
                i.createElement(
                  "div",
                  { className: "Label Error" },
                  this.state.sError,
                ),
              this.renderLatestState(),
              this.renderFilterState(),
            );
          }
        }
        (0, n.gn)([h.ak], De.prototype, "OnSelectApp", null),
          (0, n.gn)([h.ak], De.prototype, "OnInputFrame", null),
          (0, n.gn)([h.ak], De.prototype, "SetActionSet", null);
        var xe = o(775),
          Be = o(1628);
        let Ve = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return (
              u.w.Loading
                ? document.body.classList.add("Loading")
                : document.body.classList.remove("Loading"),
              P.I.IsSteamAvailable
                ? document.body.classList.remove("SteamUnavailable")
                : document.body.classList.add("SteamUnavailable"),
              (0, l.Op)() === l.qA.Overlay &&
                document
                  .getElementsByClassName("ControllerMain")[0]
                  .classList.add("ControllerMainBorderRadius"),
              i.createElement(
                "div",
                { className: "FullPage InputContainer" },
                (u.w.GetUIState == u.g.ViewBinding ||
                  u.w.GetUIState == u.g.EditBinding) &&
                  i.createElement(ge, {
                    bReadOnlyView: u.w.GetUIState == u.g.ViewBinding,
                  }),
                u.w.GetUIState == u.g.List && i.createElement(ye, null),
                u.w.GetUIState == u.g.AppSelect && i.createElement(fe, null),
                u.w.GetUIState == u.g.Debugger && i.createElement(De, null),
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
                      (0, d.Xx)("#BindingUI_SteamVRUnavailable"),
                    ),
                  ),
                ),
              )
            );
          }
        };
        Ve = (0, n.gn)([a.Pi], Ve);
        const Ae = document.getElementById("root");
        (0, d.CK)(
          ["bindingui"],
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage(),
        )
          .then(() => xe.n.Init())
          .then(() => j.S.Init())
          .then(() => P.I.Init())
          .then(() => Be.G3.Init(!1))
          .then(() => p.c6.Init())
          .then(() =>
            (function () {
              return (0, n.mG)(this, void 0, void 0, function* () {
                u.w.SetDesktopMode((0, c.Fc)("desktop").length > 0),
                  VRHTML &&
                    !u.w.DesktopMode &&
                    (document.body.parentElement.classList.add("VROverlay"),
                    VRHTML.VROverlay.SetWidthInMeters(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      3,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.Z9.NoDashboardTab,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.Z9.ShowTouchPadScrollWheel,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.Z9.SendVRSmoothScrollEvents,
                      !0,
                    ),
                    VRHTML.VROverlay.SetInputMethod(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      l.qC.Mouse,
                    ));
                let e = (0, c.Fc)("debugger");
                if (null != e && e.length > 0) return void u.w.ShowDebugger();
                let t = (0, c.Fc)("app");
                if (null != t && t.length > 0 && j.S.GetApp(t)) {
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
            })(),
          )
          .then(() => u.w.Init())
          .then(() => {
            var e;
            (e = Ve), r.render(i.createElement(e, null), Ae);
          })
          .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
      },
      2758: (e, t, o) => {
        "use strict";
        o.d(t, { U: () => s });
        var n = o(655),
          i = o(2188),
          r = o(4687);
        class a {
          constructor() {
            (this.m_mapAllOverlays = new Map()),
              (this.m_rgOverlayCreatedCallbacks = new r.p()),
              (this.m_rgOverlayDestroyedCallbacks = new r.p());
          }
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
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
              n = [];
            for (const n of e)
              (null == n ? void 0 : n.sOverlayKey) &&
                (this.m_mapAllOverlays.has(n.sOverlayKey) || o.push(n),
                this.m_mapAllOverlays.set(n.sOverlayKey, n),
                t.delete(n.sOverlayKey));
            for (const e of t)
              n.push(this.m_mapAllOverlays.get(e)),
                this.m_mapAllOverlays.delete(e);
            o.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
              n.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
          }
        }
        (0, n.gn)([i.LO], a.prototype, "m_mapAllOverlays", void 0),
          (0, n.gn)([i.aD.bound], a.prototype, "OnAllOverlayInfo", null);
        const s = new a();
        window.OverlayStore = s;
      },
      9764: (e, t, o) => {
        "use strict";
        o.d(t, { J: () => c });
        var n = o(655),
          i = o(7056),
          r = o(2188),
          a = o(2477),
          s = o(2758);
        class l {
          constructor() {
            (this.m_mapActivePooledPopupRequests = new Map()),
              (this.m_mapRemoteVSIds = new Map());
          }
          GetActivePooledPopups() {
            return Array.from(this.m_mapActivePooledPopupRequests.values());
          }
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, r.EH)(() => this.SaveSessionDevData()),
                a.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) => {
                  this.m_mapActivePooledPopupRequests.set(
                    e.dashboard_popup_request_id,
                    e,
                  );
                }),
                a.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
                  this.m_mapActivePooledPopupRequests.delete(
                    e.dashboard_popup_request_id,
                  );
                }),
                s.U.RegisterForOverlayDestroyed((e) => {
                  [...this.m_mapActivePooledPopupRequests.values()]
                    .filter((t) => t.popup_overlay_key === e.sOverlayKey)
                    .forEach((e) =>
                      this.m_mapActivePooledPopupRequests.delete(
                        e.dashboard_popup_request_id,
                      ),
                    );
                });
            });
          }
          LoadSessionDevData() {
            var e, t;
            return (0, n.mG)(this, void 0, void 0, function* () {
              const o = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              for (const e of null !== (t = o.m_rgPooledPopups) && void 0 !== t
                ? t
                : [])
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {
                m_rgPooledPopups: Array.from(
                  this.m_mapActivePooledPopupRequests.values(),
                ),
              };
              sessionStorage.setItem(
                l.k_strSessionStorageKey,
                JSON.stringify(e),
              );
            });
          }
        }
        (l.k_strSessionStorageKey = "PooledPopupStoreSessionStorage"),
          (0, n.gn)(
            [r.LO],
            l.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, n.gn)([r.LO], l.prototype, "m_mapRemoteVSIds", void 0),
          (0, n.gn)([i.ak], l.prototype, "LoadSessionDevData", null),
          (0, n.gn)([i.ak], l.prototype, "SaveSessionDevData", null);
        const c = new l();
        window.PooledPopupStore = c;
      },
      7726: (e, t, o) => {
        "use strict";
        o.d(t, { A: () => i, X: () => d });
        var n,
          i,
          r = o(655),
          a = o(7294),
          s = o(7056),
          l = o(1569),
          c = (o(7176), o(6698), o(9626), o(7062));
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(i || (i = {}));
        let d = (n = class extends a.Component {
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
              null === l.Co || void 0 === l.Co
                ? void 0
                : l.Co.RegisterForBatteryStateChangedEvents(
                    this.OnBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === l.Co || void 0 === l.Co
                  ? void 0
                  : l.Co.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged,
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === l.Co || void 0 === l.Co
                  ? void 0
                  : l.Co.RegisterForDeviceEvents(this.OnDeviceEvent)),
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
            if (!l.Co) return;
            const t = l.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                l.Uk.DeviceProvidesBatteryStatus_Bool,
              ),
              o = l.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let r = !1;
            if (t) {
              const t =
                null !==
                  (e = l.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    l.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (r = l.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                l.Uk.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = t)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      t + n.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - n.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            let a = n.GetBatteryIcon(
                t,
                r,
                this.batteryLevelStable,
                i.HorizontalPips,
              ),
              s = this.GetRoleIcon(o);
            (a == this.state.batteryIconPath && s == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: a, roleIconPath: s });
          }
          GetRoleIcon(e) {
            switch (e) {
              case l.Kg.TrackedControllerRole_RightHand:
                return "images/icons/controller_model_right.png";
              case l.Kg.TrackedControllerRole_LeftHand:
                return "images/icons/controller_model_left.png";
            }
            return null;
          }
          static GetBatteryIcon(e, t, o, n) {
            if (!e) return null;
            const r =
              n == i.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? o < 0.15
                ? r + "_charging_red.png"
                : r + "_charging.png"
              : 0 == o
                ? null
                : o < 0.15
                  ? r + "_low.png"
                  : o < 0.3
                    ? r + "_battery_1.png"
                    : o < 0.6
                      ? r + "_battery_2.png"
                      : o < 0.9
                        ? r + "_battery_3.png"
                        : r + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, o) {
            e == l.XX.Activated &&
              o == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            const e =
              null === l.Co || void 0 === l.Co
                ? void 0
                : l.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                    this.props.trackedDeviceIndex,
                  );
            let t,
              o = 0;
            return (
              e == l.Kg.TrackedControllerRole_LeftHand
                ? ((t = "/user/hand/left"), (o = -0.05))
                : e == l.Kg.TrackedControllerRole_RightHand
                  ? ((t = "/user/hand/right"), (o = 0.05))
                  : (t = void 0),
              a.createElement(
                a.Fragment,
                null,
                !1,
                a.createElement(
                  l.s_,
                  {
                    width: void 0,
                    height: void 0,
                    interactive: !1,
                    rendermodel_component_device_index:
                      this.props.trackedDeviceIndex,
                    rendermodel_component_name: "status",
                    debug_name:
                      "controllerstatus_" + this.props.trackedDeviceIndex,
                  },
                  a.createElement(
                    "div",
                    {
                      className: "ControllerStatusRoot",
                      style: { width: 256, height: 256 },
                    },
                    a.createElement(
                      "div",
                      { className: "ControllerStatusFrame" },
                      a.createElement(
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
                        a.createElement("img", {
                          className: "ControllerHand",
                          src: this.state.roleIconPath,
                        }),
                      ),
                      a.createElement(
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
                        a.createElement("img", {
                          className: "ControllerBattery",
                          src: this.state.batteryIconPath,
                        }),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
        });
        (d.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], d.prototype, "OnBatteryStateChanged", null),
          (0, r.gn)([s.ak], d.prototype, "OnDeviceRoleChanged", null),
          (0, r.gn)([s.ak], d.prototype, "OnDeviceEvent", null),
          (d = n = (0, r.gn)([c.Pi], d));
      },
      7373: (e, t, o) => {
        "use strict";
        o.d(t, { g: () => pe, _: () => $ });
        var n,
          i = o(655),
          r = o(1569),
          a = o(7056),
          s = o(2188),
          l = o(7294),
          c = o(1509),
          d = o(5177),
          p = o(3107),
          h = o(7176),
          u = o(3568),
          m = o(8495),
          g = o(7008),
          _ = o(9942),
          v = o(1628),
          S = o(7062),
          y = o(7726),
          b = o(4790),
          f = o(6459),
          C = o(9347),
          k = o(2743),
          I = o(7095),
          E = o(8980);
        let M = (n = class extends l.Component {
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
                (e) => !n.s_failedImages.includes(e),
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
              n.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
                  className: (0, E.LJ)("PortraitAppImageContainer", [
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
        (M.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (M.s_failedImages = []),
          (0, i.gn)([a.ak], M.prototype, "loadNextImage", null),
          (0, i.gn)([a.ak], M.prototype, "onLoad", null),
          (0, i.gn)([a.ak], M.prototype, "onError", null),
          (M = n = (0, i.gn)([S.Pi], M));
        var R = o(8242);
        class w extends l.Component {
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
            I.f.OpenDeepLink(I.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = _.H.Instance.SceneAppKey;
            k.Ux.OpenDeepLink(k.Yw.Name, e);
          }
          render() {
            var e;
            const t = _.H.Instance.SceneAppKey,
              o = _.H.Instance.SceneAppName,
              n = _.H.Instance.SceneApplicationState,
              i = _.H.Instance.SceneAppIsHome,
              a = v.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = v.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              c = v.G3.apps && v.G3.apps.find((e) => e.key == t);
            let p = !1;
            switch (n) {
              case r.xY.Quitting:
              case r.xY.Starting:
              case r.xY.Waiting:
                p = !0;
            }
            const m = ((e) => {
                if (null == e) return "";
                let t = e.image_path;
                return (
                  t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                );
              })(c),
              g = m.includes("header.jpg"),
              S = m.replace(/header\.jpg$/, "library_hero.jpg");
            return l.createElement(
              f.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: h.PF,
                scrollable: !1,
              },
              g &&
                l.createElement("div", {
                  className: "HeroBackground",
                  style: { backgroundImage: `url('${S}')` },
                }),
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(M, { appkey: t, title: o, imageUrl: m }),
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, o),
                l.createElement(
                  d.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  i
                    ? (0, u.Xx)("#Return_To_Home")
                    : (0, u.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    R.ls,
                    {
                      icon: R.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, u.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    R.ls,
                    { icon: R.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, u.Xx)("#App_Video_Settings"),
                  ),
                a &&
                  l.createElement(
                    d.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    i ? (0, u.Xx)("#Exit_Home") : (0, u.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, i.gn)([a.ak], w.prototype, "onExitApp", null),
          (0, i.gn)([a.ak], w.prototype, "onReturnToGame", null),
          (0, i.gn)(
            [a.ak],
            w.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, i.gn)([a.ak], w.prototype, "onOpenAppVideoSettings", null);
        var T,
          O = o(9669),
          D = o.n(O),
          x = o(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(T || (T = {}));
        const B = (e) =>
          l.createElement(
            "div",
            {
              className: (0, E.LJ)("ButtonContainer", T[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              d.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == T.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class V extends l.Component {
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
            const n = o.children;
            if (!n || 0 == n.length) return;
            const i =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              r = n[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : o.scrollLeft,
              s = r.getBoundingClientRect().left + o.scrollLeft,
              l = r.clientWidth,
              c = o.clientWidth,
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
            return l.createElement(
              "div",
              {
                className: (0, E.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames,
                ),
              },
              l.createElement(
                x.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: x.I.Horizontal,
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
                    l.createElement(B, {
                      side: T.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(B, {
                      side: T.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, i.gn)([a.ZP], V.prototype, "onAnimationFrame", null),
          (0, i.gn)([a.ZP], V.prototype, "onScroll", null),
          (0, i.gn)([a.ZP], V.prototype, "onLeftButtonClick", null),
          (0, i.gn)([a.ZP], V.prototype, "onRightButtonClick", null);
        let A = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new E.cB()),
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
                  className: (0, E.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      v.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents],
                  ),
                },
                l.createElement(
                  d.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  l.createElement(M, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, i.gn)([a.ZP], A.prototype, "buttonMouseEnter", null),
          (0, i.gn)([a.ZP], A.prototype, "buttonMouseLeave", null),
          (0, i.gn)([a.ZP], A.prototype, "onParentScrollStop", null),
          (A = (0, i.gn)([S.Pi], A));
        const P = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          L = (e) => {
            var t;
            const o = !!e.loading,
              n = null !== (t = e.apps) && void 0 !== t ? t : [];
            let i = "AppCarousel";
            return (
              e.className && (i += " " + e.className),
              (i += " NoAnimations"),
              l.createElement(
                V,
                { additionalClassNames: i, paginationAlignmentOffset: -20 },
                o &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(P, null),
                    l.createElement(P, null),
                    l.createElement(P, null),
                    l.createElement(P, null),
                  ),
                !o &&
                  n.map((e) =>
                    l.createElement(A, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var N;
        class H extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            D()
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
                let n = t.shift();
                o.add(n.appid),
                  e.push(
                    l.createElement(
                      d.z,
                      {
                        key: `appid_${n.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        enabled: !1,
                      },
                      l.createElement("img", { src: n.logo }),
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
                  (0, u.Xx)("#WelcomeToSteamVR"),
                ),
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, u.Xx)("#LaunchSteamToFindGames"),
                ),
              ),
            );
          }
        }
        let F = (N = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, o) {
            var n, i;
            m.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + o,
              e.key,
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
            if (null != v.G3.apps)
              for (let t of v.G3.apps)
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
              let n = o;
              const i = o < N.TOP_ROW_LENGTH;
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
              v.G3.settings.get("/settings/dashboard/forceWelcomeScreen");
            if (o) e = l.createElement(H, null);
            else {
              let o = t.slice(0, N.TOP_ROW_LENGTH),
                n = t.slice(N.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                l.createElement(L, { className: "TopRow", apps: o }),
                l.createElement(L, { className: "BottomRow", apps: n }),
              );
            }
            return l.createElement(
              f.lL,
              {
                visible: this.props.visible,
                scrollable: !o,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: h.po,
              },
              e,
            );
          }
        });
        (F.TOP_ROW_LENGTH = 4),
          (F.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            h.W4,
            h.jW,
          ])),
          (0, i.gn)([a.ak], F.prototype, "onRoomSetup", null),
          (F = N = (0, i.gn)([S.Pi], F));
        var G,
          U = o(16),
          z = o(421),
          W = o(6063),
          X = (o(9462), o(9626)),
          q = o(792),
          K = o(6346),
          Z = o(6821),
          j = o(2477);
        function J(e) {
          const { debugHostLocation: t, onGrabStart: o, onGrabEnd: n } = e,
            i = X.BV.isVRGamepadUI,
            a = (0, E.aB)();
          if (!a) return null;
          const s =
              null != (null == a ? void 0 : a.overlayKey) &&
              "" != (null == a ? void 0 : a.overlayKey),
            c = !!(a.keyboardFlags & r.vS.Minimal),
            d = i ? 2 : 1.5,
            p = i ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            u = i
              ? c
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : c
                ? { y: -0.73, z: 0.05 }
                : { y: -0.87, z: 0.05 };
          return l.createElement(
            r.wx,
            { translation: p },
            l.createElement(
              r.wx,
              { scale: { y: d, x: d } },
              l.createElement(r.sl, { mountedId: (0, r.iN)(h.GN, h.gC) }),
              l.createElement(r.sl, { mountedId: (0, r.iN)(h.GN, h.jw) }),
            ),
            !1,
            s &&
              l.createElement(
                r.wx,
                { translation: u },
                l.createElement(W.J, {
                  tint: X.BV.GrabHandleTint,
                  onStartMove: o,
                  onEndMove: n,
                }),
              ),
          );
        }
        function Q(e) {
          const t = (0, E.aB)();
          if (!t) return null;
          const o = pe.k_nControlBarPitch;
          return (
            t.visible &&
            !t.dockedInDashboard &&
            l.createElement(
              r.eK,
              { bContinuousRelatch: !1 },
              l.createElement(
                r.wx,
                {
                  translation: {
                    x: 0,
                    y: pe.getDashboardVerticalPosition(),
                    z: 1 * -pe.getDashboardDistance(),
                  },
                  scale: pe.getDashboardScale(),
                },
                l.createElement(
                  r.wx,
                  { translation: pe.getControlBarTranslation() },
                  l.createElement(
                    r.wx,
                    { translation: pe.k_nKeyboardGrabTransformOffset },
                    l.createElement(
                      z.Z,
                      { min_distance: 0.2, should_head_align: !1 },
                      l.createElement(
                        r.wx,
                        {
                          translation: {
                            x: -1 * pe.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * pe.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * pe.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        l.createElement(
                          r.wx,
                          { rotation: { x: o }, curvature_pitch: o },
                          l.createElement(J, { debugHostLocation: "Undocked" }),
                        ),
                      ),
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
            (e[(e.ToggleVideoStream = 3)] = "ToggleVideoStream"),
            (e[(e.IncognitoMode = 4)] = "IncognitoMode"),
            (e[(e.RoomSetupMenu = 5)] = "RoomSetupMenu"),
            (e[(e.Recenter = 6)] = "Recenter"),
            (e[(e.RoomSetup = 7)] = "RoomSetup"),
            (e[(e.RoomSetupInstant = 8)] = "RoomSetupInstant"),
            (e[(e.Volume = 9)] = "Volume"),
            (e[(e.ToggleDarkMode = 10)] = "ToggleDarkMode"),
            (e[(e.UserGuide = 11)] = "UserGuide");
        })(G || (G = {}));
        var Y,
          $,
          ee,
          te = o(138),
          oe = o(4614),
          ne = o(2758),
          ie = o(6698);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
        })($ || ($ = {}));
        class re extends l.Component {
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
        function ae(e) {
          return e == h.AC || e.startsWith(h.wX);
        }
        function se(e) {
          var t;
          const o =
            null === (t = ne.U.GetOverlayInfo(e)) || void 0 === t
              ? void 0
              : t.sHandle;
          return o ? VRHTML.VROverlay.GetVisibleTimeInSeconds(o) : 0;
        }
        function le(e, t, o) {
          var n;
          const i = Date.now(),
            r = i - t.nDockStartMs;
          if (r >= 1e3) {
            const i = /^valve\.steam\.desktopgame\.(\d+)$/,
              a = e.match(i),
              s = _.H.Instance.SceneAppKey,
              l =
                t.dockLocation == b.RA.Theater &&
                null !==
                  (n = v.G3.settings.get(
                    "/settings/dashboard/autoShowGameTheater",
                  )) &&
                void 0 !== n &&
                n;
            void 0 === o && (o = se(e));
            const c = Math.floor(1e3 * (o - t.fLastTotalVisibleTimeInSeconds)),
              d = {
                OverlayKeyID: e,
                Location: b.RA[t.dockLocation],
                DurationMs: r,
                VisibleMs: c > 0 ? c : void 0,
                OverlayAppID:
                  2 == (null == a ? void 0 : a.length)
                    ? parseInt(a[1], 10)
                    : void 0,
                SceneAppKeyID: "" != s ? s : void 0,
                autoShowGameTheater: l,
              };
            (t.fLastTotalVisibleTimeInSeconds = o),
              m.e.instance.AddRow("SteamVROverlayDockStats", d);
          }
          t.nDockStartMs = i;
        }
        function ce(e, t, o) {
          t.dockLocation != o && (le(e, t), (t.dockLocation = o));
        }
        function de(e) {
          e &&
            e != h.T2 &&
            (null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard(
                "AutoHideDashboardForOverlay",
              ));
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(ee || (ee = {}));
        let pe = (Y = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new r.Nv()),
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
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              (this.m_keyboardVisibilityChangedEventHandle = null),
              (this.m_miscEventHandles = []),
              (this.m_eSceneApplicationState = r.xY.None),
              (this.m_vrGamepadUIPathPropertiesAutorunDisposer = null),
              (this.m_gamepadFocusAutorunDisposer = null),
              this.ImplementFutureMethods(),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bMuted: !1,
                bGrabbed: !1,
                sLastShownAppKey: "",
                eShowPopoverMenu: ee.None,
                setForcingBoundsVisible: {},
                mapWindows: new Map(),
                desktopViewDebugInfo: {
                  inputFrameTime: 0,
                  mapOverlayFrameTimes: new Map(),
                },
                bWindowViewEnabled: !1,
                bPlacementModeActive: !1,
                bKeyboardVisible: !1,
                mapPortals: new Map(),
              }),
              (window.setDashboardScale = (e) => (Y.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (Y.s_dashboardUserDistance = e)),
              v.G3.Init(!1),
              r.hz.getInstance(),
              this.m_mailbox.Init(Y.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  Y.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Y.k_sSetDashboardForceBoundsVisible,
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
                    X.BV.ToggleTheaterStereo(),
                  );
              }),
              j.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = X.BV.GetSummonKeyForTabId(e);
                  if (
                    !this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab",
                    )
                  )
                    throw new Error("Failed to switch to overlay: " + t);
                },
              ),
              j.Q.SteamVR.SetImplementation("ShowGame", this.onShowOverlay),
              j.Q.SteamVR.SetImplementation("ShowOverlay", this.onShowOverlay),
              j.Q.SteamVR.SetImplementation(
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
                    case G.UserGuide:
                      this.onUserGuideClick();
                  }
                },
              );
          }
          ImplementFutureMethods() {}
          componentDidMount() {
            var e;
            (window.Dashboard = this),
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
            const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              o =
                t == r.a0.AppLaunch_Unknown ||
                t == r.a0.AppLaunch_Steam ||
                t == r.a0.Unknown,
              n = v.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              i = v.G3.settings.get("/settings/steamvr/enableHomeApp"),
              a = v.G3.settings.get(h.y3);
            ((o || (!n && i)) && !a) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != a ? a : ""),
                500,
              )),
              (this.m_appStateChangedAutorunDisposer = (0, s.EH)(() => {
                var e;
                const t = _.H.Instance.SceneApplicationState,
                  o = t != r.xY.None;
                if (o && this.m_eSceneApplicationState == r.xY.None)
                  X.BV.HideTheaterOverlay();
                else if (
                  !o &&
                  this.m_eSceneApplicationState != r.xY.None &&
                  !X.BV.isTheaterMode &&
                  null !==
                    (e = v.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of X.BV.m_mapOverlayState)
                    if (e.startsWith(h.wX)) {
                      this.setOverlayDockLocation(e, b.RA.Theater), de(e);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(h.PF) &&
                    !o &&
                    this.switchToHomeOverlay();
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                },
              ),
              this.updateSiblingReferences(),
              (this.m_vrGamepadUIPathPropertiesAutorunDisposer = (0, s.EH)(
                () => {
                  this.updateVRGamepadUIPathProperties();
                },
              )),
              (this.m_gamepadFocusAutorunDisposer = (0, s.EH)(() => {
                const e = X.BV.priorityGamepadFocusOverlay,
                  t = _.H.Instance.SceneApplicationState !== r.xY.None;
                this.state.bShown || !e || t
                  ? this.SetGamepadFocusEnable(!1, null)
                  : this.SetGamepadFocusEnable(!0, e);
              }));
            const l = new K.JN();
            l.set_can_sleep(!1),
              l.set_can_shutdown(
                v.G3.settings.get("/settings/dashboard/allowSystemShutdown"),
              ),
              l.set_can_restart_system(
                v.G3.settings.get("/settings/dashboard/allowSystemRestart"),
              ),
              l.set_can_exitvr(
                null ===
                  (e = v.G3.settings.get("/settings/dashboard/allowExitVR")) ||
                  void 0 === e ||
                  e,
              ),
              (0, Z.W)(l);
          }
          componentDidUpdate(e, t) {
            t.bShown !== this.state.bShown &&
              p.G.Instance.playSound(
                this.state.bShown ? p.y.DashboardOpen : p.y.DashboardClose,
              ),
              this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e, t, o, n;
            const i = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(_e),
              r = this.getActiveOverlaySummonKey(),
              a = te.l.BHasMutualCapability(
                oe.R
                  .k_SteamVRMutualCapability_SupportForDashboardTabsInDashboardMenu,
              ),
              s = te.l.BHasMutualCapability(
                oe.R.k_SteamVRMutualCapability_SupportForSteamPowerMenu,
              ),
              l = new K.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                o = X.BV.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == h.gB) continue;
              const n = new K.D3();
              n.set_tab_id(o);
              const i = this.shouldShowOverlayTab(t, !0),
                s = a && X.J_.includes(t.summon_overlay_key),
                c = X.BV.m_setOverlaysViewedThisSession.has(
                  t.summon_overlay_key,
                );
              n.set_visible_in_dashboard_menu(i && s),
                n.set_visible_in_dashboard_bar(i && (!s || c)),
                t.summon_overlay_key == h.T2
                  ? n.set_display_name((0, u.Xx)("#Steam"))
                  : n.set_display_name(t.tab_name);
              const d = new K.I_();
              switch (t.summon_overlay_key) {
                case h.T2:
                  d.set_enum(K.mw.k_EVRDashboardTabIcon_Steam);
                  break;
                case h.Xl:
                  d.set_enum(K.mw.k_EVRDashboardTabIcon_DesktopDisplay);
                  break;
                case h.A4:
                  d.set_enum(K.mw.k_EVRDashboardTabIcon_Cog);
                  break;
                case h.PF:
                  if (
                    (d.set_enum(K.mw.k_EVRDashboardTabIcon_RunningGame),
                    _.H.Instance.SceneAppKey.startsWith(h.I8))
                  ) {
                    const e = Number.parseInt(
                      _.H.Instance.SceneAppKey.substring(h.I8.length),
                    );
                    Number.isInteger(e) && d.set_appid(e);
                  }
                  break;
                default:
                  d.set_overlay(t.summon_overlay_key),
                    d.set_enum(K.mw.k_EVRDashboardTabIcon_Unknown);
              }
              n.set_icon(d),
                l.add_tabs(n),
                r == t.summon_overlay_key && l.set_selected_tab_id(o),
                h.A4 == t.summon_overlay_key && l.set_vr_settings_tab_id(o),
                t.summon_overlay_key == h.T2 && l.set_vr_steam_tab_id(o);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (o = this.m_refDesktopView.current) ||
                void 0 === o ||
                o.state.desktopIndices.forEach((t) => {
                  var o;
                  const n = `${h.r4}.${t}`,
                    i = X.BV.GetTabIdForSummonKey(n),
                    a = new K.D3();
                  a.set_tab_id(i),
                    a.set_display_name(
                      e > 1
                        ? (0, u.Xx)("#Desktop_X", t)
                        : (0, u.Xx)("#Desktop"),
                    ),
                    a.set_visible_in_dashboard_bar(!0);
                  const s = new K.I_();
                  s.set_enum(K.mw.k_EVRDashboardTabIcon_DesktopDisplay),
                    a.set_icon(s),
                    l.add_tabs(a),
                    (null == r ? void 0 : r.startsWith(h.gB)) &&
                      (null === (o = this.m_refDesktopView.current) ||
                      void 0 === o
                        ? void 0
                        : o.currentDesktopIndex) == t &&
                      l.set_selected_tab_id(i);
                });
            }
            for (const e of i) {
              if (!e.overlay_key) continue;
              const t = X.BV.GetTabIdForSummonKey(e.overlay_key),
                o = new K.D3();
              o.set_tab_id(t),
                o.set_display_name(e.title),
                o.set_visible_in_dashboard_bar(!0);
              const i = new K.I_();
              i.set_enum(K.mw.k_EVRDashboardTabIcon_DesktopWindow),
                i.set_hwnd(Number.parseInt(e.hwnd)),
                o.set_icon(i),
                l.add_tabs(o),
                (null == r ? void 0 : r.startsWith(h.gB)) &&
                  (null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.sCurrentOverlayKey) == e.overlay_key &&
                  l.set_selected_tab_id(t);
            }
            l.tabs().sort(ge), (0, Z.W)(l);
            const c = new K.yt();
            c.add_actions(
              K.z3.fromObject({
                action_id: G.UserGuide,
                display_name: "User Guide",
                visible_in_menu: this.BShouldShowDashboardAction(G.UserGuide),
                invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                icon: { enum: K.Cj.k_EVRDashboardActionIcon_Unknown },
              }),
            );
            const d =
              te.l.BHasMutualCapability(
                oe.R.k_SteamVRMutualCapability_SupportForDashboardActionMenus,
              ) && this.BShouldShowDashboardAction(G.RoomSetup);
            c.add_actions(
              K.z3.fromObject({
                action_id: G.RoomSetup,
                parent_menu_action_id: d ? G.RoomSetupMenu : null,
                display_name: (0, u.Xx)("#MenuPlayspaceSetup"),
                visible_in_menu: this.BShouldShowDashboardAction(G.RoomSetup),
                invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                icon: { enum: K.Cj.k_EVRDashboardActionIcon_PlayspaceSetup },
              }),
            ),
              c.add_actions(
                K.z3.fromObject({
                  action_id: G.RoomSetupInstant,
                  parent_menu_action_id: d ? G.RoomSetupMenu : null,
                  display_name: "Room Setup (Instant)",
                  visible_in_menu: this.BShouldShowDashboardAction(
                    G.RoomSetupInstant,
                  ),
                  invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: K.Cj.k_EVRDashboardActionIcon_FloorHeight },
                }),
              ),
              d &&
                c.add_actions(
                  K.z3.fromObject({
                    action_id: G.Recenter,
                    parent_menu_action_id: G.RoomSetupMenu,
                    display_name: (0, u.Xx)("#Button_Recenter"),
                    visible_in_menu: this.BShouldShowDashboardAction(
                      G.Recenter,
                    ),
                    invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                    icon: { enum: K.Cj.k_EVRDashboardActionIcon_Recenter },
                  }),
                ),
              s ||
                (c.add_actions(
                  K.z3.fromObject({
                    action_id: G.ExitVR,
                    display_name: (0, u.Xx)("#PowerMenuExitVR"),
                    visible_in_menu: this.BShouldShowDashboardAction(G.ExitVR),
                    invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                    icon: { enum: K.Cj.k_EVRDashboardActionIcon_ExitVR },
                  }),
                ),
                c.add_actions(
                  K.z3.fromObject({
                    action_id: G.Shutdown,
                    display_name: (0, u.Xx)("#PowerMenuShutdown"),
                    visible_in_menu: this.BShouldShowDashboardAction(
                      G.Shutdown,
                    ),
                    invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                    icon: { enum: K.Cj.k_EVRDashboardActionIcon_Shutdown },
                  }),
                )),
              c.add_actions(
                K.z3.fromObject({
                  action_id: G.ToggleRoomView,
                  display_name: (0, u.Xx)("#Toggle_Room_View"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    G.ToggleRoomView,
                  ),
                  invocation: K.w7.k_EVRDashboardActionInvocation_Toggle,
                  active: X.BV.m_bRoomViewActive,
                  enabled:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                  icon: { enum: K.Cj.k_EVRDashboardActionIcon_RoomViewOff },
                  icon_active: {
                    enum: K.Cj.k_EVRDashboardActionIcon_RoomViewOn,
                  },
                }),
              ),
              d
                ? c.add_actions(
                    K.z3.fromObject({
                      action_id: G.RoomSetupMenu,
                      display_name: (0, u.Xx)("#MenuPlayspaceMenu"),
                      visible_in_dashboard_bar: !0,
                      icon: {
                        enum: K.Cj.k_EVRDashboardActionIcon_PlayspaceSetup,
                      },
                      is_menu: !0,
                    }),
                  )
                : c.add_actions(
                    K.z3.fromObject({
                      action_id: G.Recenter,
                      display_name: (0, u.Xx)("#Button_Recenter"),
                      visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                        G.Recenter,
                      ),
                      invocation: K.w7.k_EVRDashboardActionInvocation_Trigger,
                      icon: { enum: K.Cj.k_EVRDashboardActionIcon_Recenter },
                    }),
                  ),
              te.l.BHasMutualCapability(
                oe.R
                  .k_SteamVRMutualCapability_SupportForActionSpecialInvocation_Volume,
              ) &&
                c.add_actions(
                  K.z3.fromObject({
                    action_id: G.Volume,
                    invocation: K.w7.k_EVRDashboardActionInvocation_Special,
                    special_invocation:
                      K.Hr.k_EVRDashboardActionSpecialInvocation_Volume,
                    visible_in_dashboard_bar: !0,
                  }),
                ),
              (0, Z.W)(c);
            const p = new K.Jl();
            p.set_windows(
              i.map((e) => {
                const t = new K.fY();
                return (
                  t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key &&
                    t.set_tab_id(X.BV.GetTabIdForSummonKey(e.overlay_key)),
                  t
                );
              }),
            ),
              (0, Z.W)(p);
          }
          initializeOverlayState(e) {
            v.G3.GetAppInfo(e).then((t) => {
              var o, n;
              let i = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                i = null !== (o = v.G3.settings.get(t)) && void 0 !== o ? o : 1;
              }
              X.BV.m_mapOverlayState.set(e, {
                refOverlayWidget: l.createRef(),
                dockLocation: b.RA.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: i,
                fLastTotalVisibleTimeInSeconds: se(e),
              }),
                (null == t ? void 0 : t.starts_theater_mode)
                  ? (this.setOverlayDockLocation(e, b.RA.Theater), de(e))
                  : ae(e) &&
                    (null !==
                      (n = v.G3.settings.get(
                        "/settings/dashboard/autoShowGameTheater",
                      )) &&
                    void 0 !== n &&
                    n
                      ? (this.setOverlayDockLocation(e, b.RA.Theater), de(e))
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
            var e, t, o, n;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              null === (e = this.m_vrGamepadUIPathPropertiesAutorunDisposer) ||
                void 0 === e ||
                e.call(this),
              (this.m_vrGamepadUIPathPropertiesAutorunDisposer = null),
              null === (t = this.m_gamepadFocusAutorunDisposer) ||
                void 0 === t ||
                t.call(this),
              (this.m_gamepadFocusAutorunDisposer = null),
              (0, r.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              }),
              null === (o = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === o ||
                o.unregister(),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              null === (n = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === n ||
                n.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            return Y.s_dashboardUserDistance
              ? Y.s_dashboardUserDistance
              : {
                  [$.Near]: 0.925,
                  [$.Middle]: 1.05,
                  [$.Far]: 1.2,
                  [$.VRGamepadUI]: 1.15,
                }[X.BV.currentDashboardPosition];
          }
          static getDashboardVerticalPosition() {
            var e;
            let t =
              0.01 *
              (null !==
                (e = v.G3.settings.get(
                  "/settings/dashboard/verticalOffsetCm_2",
                )) && void 0 !== e
                ? e
                : 0);
            return (
              (t += {
                [$.Near]: -0.07,
                [$.Middle]: -0.08,
                [$.Far]: -0.09,
                [$.VRGamepadUI]: -0.09,
              }[X.BV.currentDashboardPosition]),
              (t += X.BV.isTheaterMode ? -0.15 : 0),
              t
            );
          }
          static getDashboardScale() {
            var e;
            if (Y.s_dashboardUserScale) return Y.s_dashboardUserScale;
            let t = 1;
            const o = X.BV.currentDashboardPosition;
            return (
              (t =
                o == $.Near
                  ? 0.36
                  : o == $.Middle
                    ? 0.41
                    : o == $.Far
                      ? 0.47
                      : 0.41),
              (t *=
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetFloatProperty(
                          r.wU,
                          r.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              t
            );
          }
          static getUiScaleForLocation(e) {
            const t = X.BV.currentTheaterScreenSize;
            switch (e) {
              case b.RA.LeftHand:
              case b.RA.RightHand:
                return 0.4 * Y.getDashboardScale();
              case b.RA.Dashboard:
              case b.RA.World:
                return 1 * Y.getDashboardScale();
              case b.RA.Theater:
                return Y.getDashboardScale() * (t == X.fq.Large ? 2.35 : 1.8);
            }
            return Y.getDashboardScale();
          }
          static getControlBarTranslation() {
            return X.BV.isVRGamepadUI
              ? { y: -1.2, z: 0.35 }
              : { y: -1.2, z: 0.15 };
          }
          onShowOverlay(e) {
            if (!e.overlay_key)
              return void console.log(
                "ShowGame called with invalid overlay_key",
                e.overlay_key,
              );
            const t = X.BV.m_mapOverlayState.get(e.overlay_key);
            t &&
              (t.dockLocation == b.RA.Theater
                ? e.overlay_key != h.T2 &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("ShowGame/theater"))
                : t.dockLocation == b.RA.Dashboard
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e.overlay_key)
                  : null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("ShowGame/other"));
          }
          onSetDashboardFadeSuppression(e) {
            e.suppress_dashboard_fade
              ? this.m_setSuppressingFade.add(e.for_id)
              : this.m_setSuppressingFade.delete(e.for_id),
              this.forceUpdate();
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
          onDashboardOverlayCreated(e) {
            this.initializeOverlayState(e.overlay_key);
          }
          onDashboardOverlayDestroyed(e) {
            var t;
            e.overlay_key.startsWith(h.Vq)
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay();
            const o = X.BV.m_mapOverlayState.get(e.overlay_key);
            o && le(e.overlay_key, o, e.visible_time_in_seconds),
              X.BV.m_mapOverlayState.delete(e.overlay_key);
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
            const o = v.G3.settings.get(h.y3);
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
            this.switchToOverlayInternal(h.gB),
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
                  null === (t = v.G3.settings.get(h.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setOverlayDockLocation(e, t, o) {
            var n, i;
            (t != b.RA.LeftHand && t != b.RA.RightHand && t != b.RA.Theater) ||
              X.BV.m_mapOverlayState.forEach((o, n) => {
                o.dockLocation == t && ce(e, o, b.RA.Dashboard);
              });
            const r = X.BV.m_mapOverlayState.get(e);
            if (
              (r &&
                (r.dockLocation == b.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                ce(e, r, t),
                (r.xfInitial = o)),
              t === b.RA.Dashboard)
            )
              if (e.startsWith(h.r4)) {
                const t = Number.parseInt(e.substring(h.r4.length + 1));
                null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t);
              } else
                e.startsWith(h.Vq) &&
                  (null === (i = this.m_refDesktopView.current) ||
                    void 0 === i ||
                    i.onWindowViewChange(e));
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = this.getActiveOverlay();
            if (!t) return null;
            const o = X.BV.m_mapOverlayState.get(e),
              n = o ? o.fScale : 1,
              i = X.BV.isVRGamepadUI
                ? X.BV.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { scale: i },
                l.createElement(r.sl, {
                  mountedId: t.mountable_id,
                  fDashboardScale: n,
                }),
              ),
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == h.PF
              ? _.H.Instance.SceneApplicationState != r.xY.None
              : !(
                  (void 0 === e.icon_overlay_key && null == e.icon_uri) ||
                  !e.summon_overlay_key ||
                  (!t && e.summon_overlay_key == h.A4) ||
                  (!t && e.summon_overlay_key == h.Xl) ||
                  (!t && e.summon_overlay_key.startsWith(h.r4)) ||
                  (!t && e.summon_overlay_key.startsWith(h.Vq)) ||
                  (!t &&
                    e.summon_overlay_key.startsWith(h.MZ) &&
                    !e.summon_overlay_key.startsWith(h.wX)) ||
                  (!t &&
                    ((o = e.summon_overlay_key),
                    null !== (n = null == o ? void 0 : o.startsWith(h.MI)) &&
                      void 0 !== n &&
                      n))
                );
            var o, n;
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
            const e = [h.T2, h.po];
            for (const t of e)
              if (this.hasDashboardOverlay(t)) {
                this.switchToOverlayInternal(t, "switchToDashboardLibrary");
                break;
              }
          }
          switchToSteamOverlay() {
            X.BV.isVRGamepadUI &&
              this.switchToOverlayInternal(h.T2, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var o, n, i, a;
            if (!e) return !1;
            if (e == h.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                o = "bindingui/" + r.qA[(0, r.Op)()];
              this.m_mailbox.SendMessage(o, t), (e = h.RM);
            }
            if (e.startsWith(h.r4)) {
              const t = Number.parseInt(e.substring(h.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t)),
                (e = h.gB);
            } else if (e.startsWith(h.Vq)) {
              if (
                !(null === (n = this.m_refDesktopView.current) || void 0 === n
                  ? void 0
                  : n.hasWindowView(e))
              )
                return !1;
              null === (i = this.m_refDesktopView.current) ||
                void 0 === i ||
                i.onWindowViewChange(e),
                (e = h.gB);
            }
            let s = this.findDashboardTab(e);
            return (
              !!s &&
              (this.computeFilteredOverlayTabs(!1).includes(s) &&
                v.G3.SetSettingsValue(
                  h.nf,
                  null !== (a = s.summon_overlay_key) && void 0 !== a ? a : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              X.BV.m_setOverlaysViewedThisSession.add(s.summon_overlay_key),
              this.setState({ sActiveOverlayID: s.mountable_id }),
              m.e.instance.RecordUIEvent(
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
              e.push(v.G3.settings.get(h.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  Y.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == h.po && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(h.T2),
              null == t && e.push(h.po);
            const o = e.find(this.hasDashboardOverlay);
            o && this.switchToOverlayInternal(o, "autoSwitchOverlayIfNeeded");
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
            return t == h.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          getActiveOverlayState() {
            const e = this.getActiveOverlayKey();
            return X.BV.m_mapOverlayState.get(e);
          }
          getActiveOverlayDockLocation() {
            var e;
            const t = this.getActiveOverlayState();
            return null !== (e = null == t ? void 0 : t.dockLocation) &&
              void 0 !== e
              ? e
              : b.RA.Dashboard;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == h.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e, t) {
            var o;
            if (!v.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const n = X.BV.m_mapOverlayState.get(e.overlay_key);
            (null == n ? void 0 : n.dockLocation) != b.RA.Theater &&
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
                ? this.switchToOverlayInternal(e.overlay_key, e.reason)
                : X.BV.isTheaterMode
                  ? X.BV.getTheaterOverlay() != h.T2 &&
                    j.Q.Steam.ExecuteSteamURL({
                      url: "steam://open/apprunningcontrols",
                    }).catch((e) => {
                      console.error("ExecuteSteamURL Error:", e);
                    })
                  : this.autoSwitchOverlayIfNeeded());
          }
          onDockOverlayRequested(e) {
            if (!e.dock_location)
              return void console.log(
                "dock_overlay_requested: dock_location not specified",
                e,
              );
            const t = b.RA[e.dock_location.toString()];
            if (void 0 === t)
              return void console.log(
                "dock_overlay_requested: invalid dock_location",
                e,
              );
            const o = X.BV.m_mapOverlayState.get(e.overlay_key);
            o
              ? o.dockLocation != t
                ? this.setOverlayDockLocation(e.overlay_key, t)
                : console.log(
                    "dock_overlay_requested: ignoring redundant request",
                    e,
                  )
              : console.log("dock_overlay_requested: unknown overlay_key", e);
          }
          onHideTheaterMode() {
            var e;
            const t = this.getActiveOverlayKey();
            (null === (e = X.BV.m_mapOverlayState.get(t)) || void 0 === e
              ? void 0
              : e.dockLocation) == b.RA.Theater &&
              this.setOverlayDockLocation(t, b.RA.Dashboard);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(h.f8, "onHideDashboardRequested")
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          setDashboardVisibility(e, t, o) {
            let n = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: o,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n);
          }
          show(e) {
            if (this.isShown()) return;
            m.e.instance.StartDashboardSession(e),
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
                : this.switchToOverlayInternal(h.PF, "show")),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let n = { type: Y.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n),
              (0, r.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: ee.None }),
              m.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView(e) {
            const t = X.BV.m_bRoomViewActive,
              o = "boolean" == typeof e ? e : !t;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(o);
          }
          onLegacyQuickLaunchButtonClick() {
            this.switchToOverlayInternal(h.po);
          }
          onRecenterClick() {
            X.BV.m_bLinkStreamActive && X.BV.m_bIsLinkServer
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active",
                ))
              : this.m_mailbox.SendMessage(U.BB, {
                  type: U.KU,
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
              X.BV.m_bLinkStreamActive && X.BV.m_bIsLinkServer
                ? this.m_mailbox.SendMessage("svl", { type: t })
                : (this.onHideTheaterMode(),
                  this.m_mailbox.SendMessage("driver_hmd", { type: t }));
          }
          SetGamepadFocusEnable(e, t) {
            if (
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    r.Uk.Prop_Driver_Reserved_03,
                  )
            ) {
              let o = {
                type: "set_enable_vr_gamepad_focus",
                enable: e,
                sOverlayKey: t,
              };
              this.m_mailbox.SendMessage("vrcompositor_systemlayer", o);
            }
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
                      e.icon_overlay_key,
                    );
            } catch (e) {}
            return null;
          }
          renderLegacyPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = v.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              o = this.BShouldShowDashboardAction(G.Shutdown);
            let n = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (n = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                r.Uk.DeviceCanPowerOff_Bool,
              ));
            const i = _.H.Instance.SceneAppName,
              a = _.H.Instance.SceneAppIsHome;
            let s, c;
            return (
              (s = a
                ? (0, u.Xx)("#Exit_SteamVR_Home")
                : i
                  ? (0, u.Xx)("#PowerMenuQuitSceneApp", i)
                  : (0, u.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (c = a
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  X.BV.isVRGamepadUI &&
                    l.createElement(f.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(h.po),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  n &&
                    l.createElement(f.dy, {
                      label: (0, u.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  t &&
                    e &&
                    l.createElement(f.dy, {
                      label: s,
                      imageUrl: c,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  l.createElement(f.dy, {
                    label: (0, u.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  o &&
                    l.createElement(f.dy, {
                      label: (0, u.Xx)("#PowerMenuShutdown"),
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
              this.setState({ eShowPopoverMenu: ee.None });
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
              l.createElement(d.q, { className: "PowerMenuPanel" }, e),
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
                  let n = o.getBoundingClientRect();
                  return (
                    e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, o, n;
            let i = this.getActiveOverlay();
            if (!i) return null;
            if (i.summon_overlay_key == h.gB) {
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
                return l.createElement(f.Rk, {
                  name:
                    null === (o = this.state.mapWindows.get(e)) || void 0 === o
                      ? void 0
                      : o.title,
                  iconUrl: this.getDashboardIconUri(i),
                });
              }
              return l.createElement(f.Rk, {
                name:
                  "Desktop " +
                  (null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(i),
              });
            }
            return i.summon_overlay_key == h.RM
              ? l.createElement(f.Rk, {
                  name: (0, u.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(f.Rk, {
                  name: i.tab_name,
                  iconUrl: this.getDashboardIconUri(i),
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
            const n =
              null !== (e = v.G3.settings.get(h.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, r.M9)((0, r.eQ)(e[3], e[0])),
                i = (0, r.M9)((0, r.eQ)(e[1], e[0])),
                a = (0, r.dq)(t, i),
                s = (0, r.Pd)((0, r.tS)(t, i, a)),
                c = (0, r.LY)((0, r.eQ)(e[0], e[3]));
              if (c < 0.4) continue;
              let d = Math.max(1, Math.floor(c));
              for (let t = 0; t < d; t++) {
                let i = (t + 1) / (d + 1),
                  a = (0, r.Oq)();
                (a.rotation = s),
                  (a.translation = (0, r.q9)(i, e[0], e[3])),
                  (a.scale = { x: 0.005, y: 0.005, z: n });
                let c = l.createElement(
                  r.wx,
                  { transform: a },
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
                      }),
                    ),
                  ),
                );
                o.push(c);
              }
              if (o.length > 20) break;
            }
            return o;
          }
          render() {
            var e, t;
            const o = _.H.Instance.SceneApplicationState !== r.xY.None;
            if (!o && X.BV.isDarkMode) {
              const o =
                  null !==
                    (e = v.G3.settings.get(
                      "/settings/dashboard/theaterModeBrightness",
                    )) && void 0 !== e
                    ? e
                    : 0.5,
                n =
                  null !==
                    (t = v.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== t
                    ? t
                    : 0.5;
              (0, r.OK)({
                color_mult: Math.pow(o, 2.2),
                reflection_mult: Math.pow(n, 2.2),
                roomview_mult: [0.12, 0.16, 0.6],
                allow_skydome: !q.C.m_bShowFloor,
              });
            } else {
              const e = [0.35, 0.35, 0.35],
                t =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == h.A4,
                n = v.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                ),
                i = !_.H.Instance.SceneAppIsHome || !n,
                a = this.state.bShown && i && !t && o ? 0.15 : 1;
              (0, r.OK)({
                color_mult: a,
                reflection_mult: 1,
                roomview_mult: e,
                allow_skydome: !0,
              });
            }
            const n = this.getActiveOverlaySummonKey(),
              i = this.state.bShown && this.state.setForcingBoundsVisible[n],
              a = i && i.size > 0;
            let s = [];
            return (
              a && (s = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                "div",
                { className: "DashboardMain" },
                a && l.createElement(re, null),
                a && l.createElement("span", null, s),
                this.state.bShown && this.renderDashboard(),
                l.createElement(Q, null),
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
            return f.Eu.has(e)
              ? f.Eu.get(e)
              : {
                  strTopCenterAnchorID:
                    this.state.sActiveOverlayID + "_TopCenter",
                  strCenterLeftAnchorID:
                    this.state.sActiveOverlayID + "_CenterLeft",
                  strCenterRightAnchorID:
                    this.state.sActiveOverlayID + "_CenterRight",
                  strBottomCenterAnchorID:
                    this.state.sActiveOverlayID + "_BottomCenter",
                  strBottomRightAnchorID:
                    this.state.sActiveOverlayID + "_BottomRight",
                };
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              o = f.IO.Center;
            return l.createElement(f.B8, {
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
              (this.isOverlayActive(h.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith(h.Vq))) &&
              (this.state.eShowPopoverMenu == ee.None ||
                this.state.eShowPopoverMenu == ee.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == ee.Volume;
          }
          isSteamOverlayActive() {
            return (
              this.isOverlayActive(h.T2) &&
              this.state.eShowPopoverMenu == ee.None
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(h.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith(h.Vq))
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
              enable: null != e ? e : !X.BV.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          BShouldShowDashboardAction(e) {
            var t, o, n, i, r, a;
            const s =
                null !== (t = v.G3.settings.get(h.Av)) && void 0 !== t && t,
              l =
                null !== (o = v.G3.settings.get(h.k_)) && void 0 !== o ? o : 0;
            switch (e) {
              case G.ExitVR:
                return (
                  null ===
                    (n = v.G3.settings.get(
                      "/settings/dashboard/allowExitVR",
                    )) ||
                  void 0 === n ||
                  n
                );
              case G.Shutdown:
                return v.G3.settings.get(
                  "/settings/dashboard/allowSystemShutdown",
                );
              case G.ToggleRoomView:
                return (
                  s &&
                  l > 0 &&
                  !(X.BV.m_bLinkStreamActive && X.BV.m_bIsLinkServer)
                );
              case G.ToggleVideoStream:
                return !1;
              case G.Recenter:
                return (
                  1 !=
                  (null !==
                    (i =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            2109,
                          )) && void 0 !== i
                    ? i
                    : 0)
                );
              case G.IncognitoMode:
                return !1;
              case G.ToggleDarkMode:
                return X.BV.isTheaterMode || q.C.m_bShowFloor;
              case G.UserGuide:
                return (
                  null !==
                    (r = v.G3.settings.get(
                      "/settings/dashboard/allowUserGuide",
                    )) &&
                  void 0 !== r &&
                  r
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
          renderLegacyControlBar(e, t) {
            var o, n, i, a;
            const s =
                null ===
                  (o = v.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === o ||
                o,
              c =
                null ===
                  (n = v.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === n ||
                n,
              p = ne.U.BOverlayExists(h.T2),
              m = !X.BV.isVRGamepadUI,
              S = !(
                null !==
                  (i = v.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== i &&
                i
              ),
              y = _.H.Instance.SceneApplicationState,
              b = _.H.Instance.SceneAppIsHome,
              C =
                null ===
                  (a = v.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === a ||
                a
                  ? h.ml
                  : null,
              k = _.H.Instance.SceneAppKey;
            let I = "images/appimage_default.png";
            return (
              k && (I = "/app/image?app_key=" + k),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    r.VW,
                    { color: X.BV.ControlBarTint },
                    l.createElement(
                      r.wx,
                      { translation: { z: 1e-5 } },
                      l.createElement(
                        r.s_,
                        {
                          curvature_origin_id: C,
                          meters_per_pixel: h.F$,
                          interactive: !0,
                          debug_name: "Controls",
                        },
                        l.createElement(
                          d.q,
                          { className: "ControlBar MainControlBar" },
                          l.createElement(
                            "div",
                            { className: "Section Left" },
                            s &&
                              l.createElement(f.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_menu_c.svg",
                                label: (0, u.Xx)("#Menu"),
                                style: f.zk.Small,
                                onClick: () => this.showPopoverMenu(ee.Power),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            l.createElement(
                              f.dw,
                              { style: f.zk.Small },
                              p &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/vr_steam.svg",
                                  label: (0, u.Xx)("#Steam"),
                                  active: this.isSteamOverlayActive(),
                                  onClick: () => this.switchToSteamOverlay(),
                                }),
                              m &&
                                l.createElement(f.B8, {
                                  label: (0, u.Xx)("#Library"),
                                  imageUrl:
                                    "/dashboard/images/icons/svr_items.svg",
                                  active: this.isOverlayActive(h.po),
                                  onClick: this.onLegacyQuickLaunchButtonClick,
                                }),
                              c &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_desktop_alt.svg",
                                  label: (0, u.Xx)("#Desktops"),
                                  active: this.isDesktopTrayActive(),
                                  onClick: () =>
                                    this.switchToOverlayInternal(h.gB),
                                }),
                            ),
                            l.createElement(
                              f.dw,
                              { style: f.zk.Small },
                              l.createElement(
                                l.Fragment,
                                null,
                                e.map(
                                  this.renderExternalOverlayControlBarButton,
                                ),
                                t.length > 0 &&
                                  l.createElement(f.B8, {
                                    imageUrl:
                                      "/dashboard/images/icons/svr_more.svg",
                                    label: (0, u.Xx)(
                                      "#X_More_Overlays",
                                      t.length,
                                    ),
                                    active:
                                      this.state.eShowPopoverMenu ==
                                      ee.ExternalOverlays,
                                    onClick: () =>
                                      this.showPopoverMenu(ee.ExternalOverlays),
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
                            y != r.xY.None &&
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
                                    r.VW,
                                    { color: X.BV.ControlBarTint },
                                    l.createElement(
                                      r.wx,
                                      { translation: { z: 0.02 } },
                                      l.createElement(
                                        r.s_,
                                        {
                                          debug_name: "NowPlayingButton",
                                          interactive: !0,
                                          curvature_origin_id: C,
                                          meters_per_pixel: h.F$,
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "ControlBar" },
                                          l.createElement(f.NT, {
                                            label: b
                                              ? (0, u.Xx)("#SteamVR_Home")
                                              : (0, u.Xx)("#Now_Playing"),
                                            active: this.isOverlayActive(h.PF),
                                            style: f.zk.App,
                                            imageUrl: I,
                                            onClick: () =>
                                              this.switchToOverlayInternal(
                                                h.PF,
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
                              f.dw,
                              { style: f.zk.Small },
                              this.BShouldShowDashboardAction(G.Recenter) &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_recenter.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, u.Xx)("#Button_Recenter"),
                                  onClick: this.onRecenterClick,
                                }),
                              this.BShouldShowDashboardAction(G.RoomSetup) &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_room_setup.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, u.Xx)("#RoomSetup"),
                                  onClick: () => this.onRoomSetupClick(!1),
                                }),
                              this.BShouldShowDashboardAction(
                                G.ToggleRoomView,
                              ) &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_eye.svg",
                                  label: (0, u.Xx)("#Toggle_Room_View"),
                                  onClick: this.onToggleRoomView,
                                  active: X.BV.m_bRoomViewActive,
                                  enabled:
                                    null === VRHTML || void 0 === VRHTML
                                      ? void 0
                                      : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                                }),
                              l.createElement(f.D6, {
                                active:
                                  this.state.eShowPopoverMenu == ee.Volume,
                                refVolumeTray: this.m_refVolumeTray,
                                onShowTray: () =>
                                  this.showPopoverMenu(ee.Volume),
                                onHideTray: () => this.showPopoverMenu(ee.None),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            ),
                            S &&
                              l.createElement(f.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_settings.svg",
                                active: this.isOverlayActive(h.A4),
                                enabled: this.hasDashboardOverlay(h.A4),
                                label: (0, u.Xx)("#VRSettings"),
                                style: f.zk.Small,
                                centerPanelAnchorID: "VolumeButton",
                                onClick: () =>
                                  this.switchToOverlayInternal(h.A4),
                              }),
                          ),
                        ),
                        this.renderLegacyControlBarTrays(C),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const o = X.BV.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(C.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: o,
                onToggleWindowList: () => this.showPopoverMenu(ee.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(f.z, {
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
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          r.Uk.DashboardLinkSupport_Int32,
                        )) && void 0 !== t
                  ? t
                  : 0,
              n = X.BV.isVRGamepadUI && !!(1 & o) && X.BV.m_bLinkStreamActive;
            let i = n ? 0.425 : 0.35;
            return l.createElement(
              l.Fragment,
              null,
              n &&
                l.createElement(
                  r.wx,
                  { translation: { y: 0.075, z: 0 } },
                  l.createElement(he, {
                    onClick: () => this.handleVRLinkInfoClick(),
                  }),
                ),
              l.createElement(
                r.s_,
                {
                  id: "VRGamepadUI-DashboardBar-Panel",
                  debug_name: "VRGamepadUI-DashboardBar-Panel",
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e,
                  overlay_key: h.BZ,
                  origin: r.Ic.TopCenter,
                  meters_per_pixel: X.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                l.createElement(r.at, {
                  id: "VRGamepadUI-DashboardBar-Panel-TopCenter",
                  location: r.Ic.TopCenter,
                }),
                l.createElement(
                  r.at,
                  {
                    id: "VRGamepadUI-DashboardBar-Panel-BottomCenter",
                    location: r.Ic.BottomCenter,
                  },
                  l.createElement(r.wx, { id: h.ZN, translation: { y: i } }),
                  l.createElement(r.wx, { id: h.dG, translation: { y: -0.1 } }),
                ),
              ),
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(X.BV.m_mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != b.RA.Dashboard);
            return l.createElement(
              l.Fragment,
              null,
              e.map((e) => {
                var t;
                return l.createElement(b.Sm, {
                  bDashboardShown: this.state.bShown,
                  bHasSceneApp:
                    _.H.Instance.SceneApplicationState !== r.xY.None,
                  dockLocation: e.overlayState.dockLocation,
                  setOverlayDockLocation: this.setOverlayDockLocation,
                  ShowMultitaskingView:
                    null === (t = this.m_refDesktopView.current) || void 0 === t
                      ? void 0
                      : t.ShowMultitaskingView,
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
              this.isOverlayActive(h.gB) &&
              (0, b.sg)(this.getActiveOverlayDockLocation())
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
            var e, t, o, n;
            const i =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              a =
                null !==
                  (n =
                    null === (o = this.m_refDesktopView.current) || void 0 === o
                      ? void 0
                      : o.desktopCount) && void 0 !== n
                  ? n
                  : 1,
              s = v.G3.settings.get(h.YL) || X.BV.m_bShowLegacyBar;
            return l.createElement(
              l.Fragment,
              null,
              s &&
                l.createElement(
                  r.Y9,
                  {
                    tabName: (0, u.Xx)("#Library"),
                    iconUri: "/dashboard/images/icons/svr_items.svg",
                    summonOverlayKey: h.po,
                  },
                  l.createElement(F, {
                    visible: this.state.bShown && this.isOverlayActive(h.po),
                    onGameLaunched: this.onGameLaunched,
                  }),
                ),
              l.createElement(
                r.Y9,
                { tabName: (0, u.Xx)("#Now_Playing"), summonOverlayKey: h.PF },
                l.createElement(w, {
                  visible: this.state.bShown && this.isOverlayActive(h.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                r.Y9,
                {
                  summonOverlayKey: h.gB,
                  tabName:
                    a > 1 ? (0, u.Xx)("#Desktop_X", i) : (0, u.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(C.N, {
                  visible: this.isDesktopViewVisible(),
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              l.createElement(c._, {
                visible: this.state.bShown && this.isOverlayActive(h.A4),
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
              (t.startsWith(h.Vq)
                ? null === (e = this.m_refDesktopView.current) ||
                  void 0 === e ||
                  e.onWindowViewClosed(t)
                : this.switchToHomeOverlay(),
              VRHTML.VRDashboardManager.SendOverlayClosed(t));
          }
          renderOverlayControlBar() {
            var e, t, o, n;
            let i = !1,
              a = !1;
            const s = this.getActiveOverlayKey(),
              c =
                null === (e = ne.U.GetOverlayInfo(s)) || void 0 === e
                  ? void 0
                  : e.sHandle;
            if (!c) return null;
            try {
              (i = VRHTML.VROverlay.GetFlag(c, r.Z9.EnableControlBarKeyboard)),
                (a = VRHTML.VROverlay.GetFlag(c, r.Z9.EnableControlBarClose));
            } catch (e) {
              return (
                console.log(
                  "Error getting flag on sOverlayKey/sOverlayHandle ",
                  s,
                  c,
                ),
                null
              );
            }
            const d =
                null ===
                  (t = v.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === t ||
                t
                  ? h.ml
                  : null,
              p = { x: 0, y: 0.15, z: 0 },
              m =
                (null === (o = X.BV.m_mapOverlayState.get(s)) || void 0 === o
                  ? void 0
                  : o.dockLocation) == b.RA.Dashboard;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { parent_id: h.ZN },
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: d,
                      origin: r.Ic.TopCenter,
                      interactive: !0,
                      meters_per_pixel: h.F$,
                      debug_name: "ActiveOverlayControlBar",
                      reflect: 0.1,
                    },
                    l.createElement(
                      "div",
                      { className: "TransparentOverlayControlBar" },
                      l.createElement(
                        "div",
                        { className: "Section" },
                        l.createElement(f.CS, {
                          tooltipTranslation: p,
                          overlayKey: this.getActiveOverlayKey(),
                          additionalClassNames: "LargeIcon",
                        }),
                        null === (n = this.m_refDesktopView.current) ||
                          void 0 === n
                          ? void 0
                          : n.renderControlBarButtons(p),
                      ),
                      l.createElement(
                        "div",
                        { className: "Section" },
                        !m &&
                          l.createElement(f.zN, {
                            icon: l.createElement(ie.gR, null),
                            title: (0, u.Xx)("#ReturnToDashboard"),
                            tooltipTranslation: p,
                            onClick: () => {
                              const e = this.getActiveOverlayKey();
                              this.setOverlayDockLocation(e, b.RA.Dashboard);
                            },
                            additionalClassNames: "LargeIcon",
                          }),
                        m &&
                          l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(f.zN, {
                              iconUrl:
                                "/dashboard/images/icons/mirror_left.png",
                              title: (0, u.Xx)("#DockOnLeftController"),
                              tooltipTranslation: p,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, b.RA.LeftHand);
                              },
                              enabled:
                                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                  r.Kg.TrackedControllerRole_LeftHand,
                                ) != r.Kf,
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.LeftHand,
                              additionalClassNames: "LargeIcon",
                            }),
                            l.createElement(f.zN, {
                              iconUrl:
                                "/dashboard/images/icons/mirror_right.png",
                              title: (0, u.Xx)("#DockOnRightController"),
                              tooltipTranslation: p,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, b.RA.RightHand);
                              },
                              enabled:
                                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                  r.Kg.TrackedControllerRole_RightHand,
                                ) != r.Kf,
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.RightHand,
                              additionalClassNames: "LargeIcon",
                            }),
                            " ",
                          ),
                      ),
                      (m || a) &&
                        l.createElement(
                          "div",
                          { className: "Section" },
                          m &&
                            l.createElement(f.zN, {
                              icon: l.createElement(ie.yR, null),
                              title: (0, u.Xx)("#FloatInWorld"),
                              tooltipTranslation: p,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, b.RA.World);
                              },
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.World,
                            }),
                          m &&
                            l.createElement(f.zN, {
                              icon: l.createElement(ie.SV, null),
                              title: (0, u.Xx)("#ViewInTheater"),
                              tooltipTranslation: p,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, b.RA.Theater);
                              },
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.Theater,
                              additionalClassNames: "LargeIcon",
                            }),
                          a &&
                            l.createElement(f.zN, {
                              iconUrl:
                                "/dashboard/images/icons/icon_close_black.png",
                              title: (0, u.Xx)(
                                ae(s) ? "#QuitApp" : "#CloseOverlay",
                              ),
                              tooltipTranslation: p,
                              onClick: this.onActiveOverlayClosed,
                              additionalClassNames: "LargeIcon",
                            }),
                        ),
                      !1,
                    ),
                  ),
                ),
              ),
            );
          }
          renderLegacyHeader(e) {
            const t = X.BV.isDarkMode,
              o = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              n = t ? 0 : 0.1,
              i = !t;
            let a = null;
            return (
              this.isDesktopOverlayActive() && (a = 2048),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  r.wx,
                  { translation: { y: 0.008 } },
                  l.createElement(
                    r.VW,
                    { color: o },
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: e,
                        origin: r.Ic.BottomCenter,
                        interactive: !1,
                        meters_per_pixel: h.F$,
                        debug_name: "StatusBar",
                        reflect: n,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: a } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          i && this.renderStatusBarTitle(),
                          l.createElement(f.j6, {
                            role: r.Kg.TrackedControllerRole_LeftHand,
                            style: y.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(f.j6, {
                            deviceIndex: r.wU,
                            style: y.A.VerticalBattery,
                          }),
                          l.createElement(f.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(f.j6, {
                            role: r.Kg.TrackedControllerRole_RightHand,
                            style: y.A.HorizontalPips,
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
                r.wx,
                { translation: { y: 0.01 } },
                l.createElement(
                  r.s_,
                  {
                    id: "VRGamepadUI-Header-Panel",
                    debug_name: "VRGamepadUI-Header-Panel",
                    interactive: !0,
                    curvature_origin_id: e,
                    overlay_key: h.rl,
                    origin: r.Ic.BottomCenter,
                    width: 2.667,
                    reflect: 0.01,
                  },
                  l.createElement(r.at, {
                    id: "VRGamepadUI-Header-Panel-TopCenter",
                    location: r.Ic.TopCenter,
                  }),
                ),
              ),
            );
          }
          renderDashboard() {
            var e, t, o, n, i;
            const a = this.computeFilteredOverlayTabs(!1),
              s = X.BV.isVRGamepadUIReady,
              c = !X.BV.isVRGamepadUI || X.BV.m_bShowLegacyBar;
            let d = [],
              p = [],
              u =
                null !== (e = v.G3.settings.get(h.FM)) && void 0 !== e ? e : 2;
            if (a.length > u) {
              const e = v.G3.settings.get(h.nf);
              (d = [
                null !== (t = a.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : a[0],
              ]),
                (p = a.filter((e) => !d.includes(e)));
            } else d = a;
            let m = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && m.push(e);
            });
            const g = this.getActiveOverlayDockLocation(),
              _ = (0, b.fT)(g),
              S = (0, b.sg)(g),
              y = this.getActiveOverlayKey(),
              C =
                null === (o = ne.U.GetOverlayInfo(y)) || void 0 === o
                  ? void 0
                  : o.sHandle,
              k = !!C && VRHTML.VROverlay.GetFlag(C, r.Z9.MinimalControlBar),
              I =
                null ===
                  (n = v.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === n ||
                n,
              E = I ? h.ml : null,
              M = { y: k ? -1.03375 : -0.9, z: 0.05 },
              R = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              w = Y.k_nControlBarPitch;
            let T = I ? 1 : 0;
            const O =
                null !==
                  (i = v.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== i &&
                i,
              D = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: O && this.state.bPlacementModeActive,
                },
                l.createElement(
                  r.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    r.wx,
                    {
                      translation: {
                        x: 0,
                        y: Y.getDashboardVerticalPosition(),
                        z: 1 * -Y.getDashboardDistance(),
                      },
                      rotation: { x: 0 },
                    },
                    l.createElement(
                      r.wx,
                      { translation: { y: -0.15 } },
                      l.createElement(
                        z.Z,
                        {
                          should_head_align: !0,
                          min_distance: 0.7,
                          lerp_speed: 0.175,
                          one_to_one_radius: 0,
                          max_x_squared_contribution: 0,
                          acceleration_factor_x_coefficient: 2.5,
                          acceleration_factor_x_squared_coefficient: 0,
                        },
                        !1,
                        l.createElement(
                          r.wx,
                          { translation: { y: 0.15 } },
                          l.createElement(r.wx, {
                            id: E,
                            translation: { z: Y.getDashboardDistance() + 1.8 },
                          }),
                          l.createElement(
                            r.wx,
                            { scale: Y.getDashboardScale() },
                            l.createElement(
                              r.wx,
                              { parent_id: D },
                              X.BV.isVRGamepadUI
                                ? this.renderVRGamepadUIHeader(E)
                                : this.renderLegacyHeader(E),
                            ),
                            l.createElement(
                              r.wx,
                              {
                                id: "active_overlay_transform",
                                translation: M,
                                ref: this.m_refOverlayTransform,
                              },
                              !_ && S && this.renderActiveOverlay(),
                            ),
                            !1,
                            !1,
                            l.createElement(
                              r.wx,
                              { parent_id: s ? h.dG : h.f$ },
                              l.createElement(W.J, {
                                curvature_origin_id: E,
                                tint: X.BV.GrabHandleTint,
                                onStartMove: this.onGrabStart,
                                onEndMove: this.onGrabEnd,
                              }),
                            ),
                            !1,
                            l.createElement(
                              r.wx,
                              { translation: R, id: h.Qg },
                              !k && this.renderOverlayControlBar(),
                              l.createElement(r.wx, {
                                id: h.f$,
                                translation: { y: 0.08, z: -0.12 },
                              }),
                              l.createElement(
                                r.wx,
                                {
                                  rotation: { x: w },
                                  curvature_pitch: w,
                                  translation: s ? { y: -0.65, z: 0.2 } : {},
                                },
                                c && this.renderLegacyControlBar(d, p),
                                l.createElement(
                                  r.wx,
                                  { translation: { y: -0.65, z: -0.01 } },
                                  l.createElement(ue, null),
                                ),
                              ),
                              s &&
                                l.createElement(
                                  r.wx,
                                  { rotation: { x: w }, curvature_pitch: w },
                                  this.renderVRGamepadUIBar(E),
                                ),
                              l.createElement(
                                r.wx,
                                { rotation: { x: w } },
                                l.createElement(
                                  r.wx,
                                  {
                                    translation:
                                      Y.k_nKeyboardGrabTransformOffset,
                                  },
                                  l.createElement(
                                    z.Z,
                                    {
                                      min_distance: 0.2,
                                      should_head_align: !1,
                                    },
                                    l.createElement(
                                      r.wx,
                                      {
                                        translation: {
                                          x:
                                            -1 *
                                            Y.k_nKeyboardGrabTransformOffset.x,
                                          y:
                                            -1 *
                                            Y.k_nKeyboardGrabTransformOffset.y,
                                          z:
                                            -1 *
                                            Y.k_nKeyboardGrabTransformOffset.z,
                                        },
                                      },
                                      l.createElement(
                                        r.wx,
                                        {
                                          rotation: { x: -10 },
                                          curvature_pitch: w,
                                        },
                                        !1,
                                        this.state.bKeyboardVisible &&
                                          l.createElement(J, {
                                            debugHostLocation: "Dashboard",
                                            onGrabStart: this.onGrabStart,
                                            onGrabEnd: this.onGrabEnd,
                                          }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              this.state.eShowPopoverMenu == ee.Power &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                                    rotation: { y: 19 * T },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: E,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: r.Ic.BottomRight,
                                      debug_name: "Power Menu",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderLegacyPowerMenu(),
                                  ),
                                ),
                              this.state.eShowPopoverMenu ==
                                ee.ExternalOverlays &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                                    rotation: { y: 6 * T },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: E,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: r.Ic.BottomRight,
                                      debug_name: "OverlaysList",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderPopoverMenu(
                                      l.createElement(
                                        l.Fragment,
                                        null,
                                        " ",
                                        p.map((e) =>
                                          l.createElement(f.dy, {
                                            key: e.mountable_id,
                                            imageUrl:
                                              this.getDashboardIconUri(e),
                                            label: e.tab_name,
                                            onClick: () => {
                                              this.switchToOverlayInternal(
                                                e.summon_overlay_key,
                                              ),
                                                this.showPopoverMenu(ee.None);
                                            },
                                          }),
                                        ),
                                        " ",
                                      ),
                                    ),
                                  ),
                                ),
                              this.state.eShowPopoverMenu == ee.Windows &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                                    rotation: { y: -16 * T },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: E,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: r.Ic.BottomRight,
                                      debug_name: "WindowList",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderPopoverMenu(
                                      l.createElement(
                                        l.Fragment,
                                        null,
                                        " ",
                                        m.map((e) =>
                                          l.createElement(f.dy, {
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
                                                this.showPopoverMenu(ee.None);
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
        (pe.k_sDashboardMailboxName = "systemui_dashboard"),
          (pe.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (pe.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (pe.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (pe.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (pe.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (pe.k_sWindowViewCreatedMessage = "window_view_created"),
          (pe.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (pe.k_sUpdateWindowListMessage = "update_window_list"),
          (pe.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (pe.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (pe.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (pe.k_nControlBarPitch = -40),
          (pe.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
          (pe.s_dashboardUserDistance = void 0),
          (pe.s_dashboardUserScale = void 0),
          (0, i.gn)(
            [a.ak],
            pe.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, i.gn)([a.ak], pe.prototype, "onKeyboardVisibilityChanged", null),
          (0, i.gn)([a.ak], pe.prototype, "onGrabStart", null),
          (0, i.gn)([a.ak], pe.prototype, "onGrabEnd", null),
          (0, i.gn)(
            [a.ak],
            pe.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, i.gn)([a.ak], pe.prototype, "onDashboardOverlayCreated", null),
          (0, i.gn)([a.ak], pe.prototype, "onDashboardOverlayDestroyed", null),
          (0, i.gn)([a.ak], pe.prototype, "onUpdateDashboardTabs", null),
          (0, i.gn)([a.ak], pe.prototype, "onWindowViewCreated", null),
          (0, i.gn)([a.ak], pe.prototype, "onWindowViewDestroyed", null),
          (0, i.gn)([a.ak], pe.prototype, "onUpdateWindowList", null),
          (0, i.gn)([a.ak], pe.prototype, "onUpdateDebugInfo", null),
          (0, i.gn)([a.ak], pe.prototype, "setOverlayDockLocation", null),
          (0, i.gn)([a.ak], pe.prototype, "onShowDashboardRequested", null),
          (0, i.gn)([a.ak], pe.prototype, "onDockOverlayRequested", null),
          (0, i.gn)([a.ak], pe.prototype, "onHideTheaterMode", null),
          (0, i.gn)([a.ak], pe.prototype, "onHideDashboardRequested", null),
          (0, i.gn)([a.ak], pe.prototype, "show", null),
          (0, i.gn)([a.ak], pe.prototype, "hide", null),
          (0, i.gn)([a.ak], pe.prototype, "setPlacementModeActive", null),
          (0, i.gn)([a.ak], pe.prototype, "onToggleRoomView", null),
          (0, i.gn)(
            [a.ak],
            pe.prototype,
            "onLegacyQuickLaunchButtonClick",
            null,
          ),
          (0, i.gn)([a.ak], pe.prototype, "onRecenterClick", null),
          (0, i.gn)([a.ak], pe.prototype, "onUserGuideClick", null),
          (0, i.gn)([a.ak], pe.prototype, "onRoomSetupClick", null),
          (0, i.gn)([a.ak], pe.prototype, "SetGamepadFocusEnable", null),
          (0, i.gn)([a.ak], pe.prototype, "renderLegacyPowerMenu", null),
          (0, i.gn)([a.ak], pe.prototype, "startPopoverMenuTimeout", null),
          (0, i.gn)([a.ak], pe.prototype, "clearPopoverMenuTimeout", null),
          (0, i.gn)([a.ak], pe.prototype, "showPopoverMenu", null),
          (0, i.gn)([a.ak], pe.prototype, "popoverMenuMouseLeave", null),
          (0, i.gn)([a.ak], pe.prototype, "popoverMenuMouseUp", null),
          (0, i.gn)([a.ak], pe.prototype, "hasDashboardOverlay", null),
          (0, i.gn)(
            [a.ak],
            pe.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, i.gn)([a.ak], pe.prototype, "isDesktopTrayActive", null),
          (0, i.gn)([a.ak], pe.prototype, "isVolumeTrayActive", null),
          (0, i.gn)([a.ak], pe.prototype, "isSteamOverlayActive", null),
          (0, i.gn)([a.ak], pe.prototype, "isDesktopOverlayActive", null),
          (0, i.gn)([a.ak], pe.prototype, "handleVRLinkInfoClick", null),
          (0, i.gn)([a.ak], pe.prototype, "ToggleIncognitoMode", null),
          (0, i.gn)([a.ak], pe.prototype, "getRenderModelForShape", null),
          (0, i.gn)([a.ak], pe.prototype, "isDesktopViewVisible", null),
          (0, i.gn)([a.ak], pe.prototype, "onGameLaunched", null),
          (0, i.gn)([a.ak], pe.prototype, "onAddPortal", null),
          (0, i.gn)([a.ak], pe.prototype, "onRemovePortal", null),
          (0, i.gn)([a.ak], pe.prototype, "onActiveOverlayScaleChange", null),
          (0, i.gn)([a.ak], pe.prototype, "onActiveOverlayClosed", null),
          (0, i.gn)([s.LO], pe, "s_dashboardUserDistance", void 0),
          (0, i.gn)([s.LO], pe, "s_dashboardUserScale", void 0),
          (pe = Y = (0, i.gn)([S.Pi], pe));
        const he = (0, S.Pi)(function (e) {
            var t;
            let o =
              null !== (t = VRHTML.GetHostInfo(r.zA.Hostname)) && void 0 !== t
                ? t
                : "unknown";
            return l.createElement(
              r.s_,
              { meters_per_pixel: h.F$, interactive: !0 },
              l.createElement(
                "div",
                { className: "FloatingButtonRow" },
                l.createElement(
                  d.z,
                  { className: "ButtonControl", onClick: e.onClick },
                  l.createElement("span", null, o.toLowerCase(), " "),
                ),
              ),
            );
          }),
          ue = (0, S.Pi)(function (e) {
            return null;
          }),
          me = [
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                K.mw.k_EVRDashboardTabIcon_Steam
              );
            },
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                K.mw.k_EVRDashboardTabIcon_RunningGame
              );
            },
            (e) => null == e.icon(),
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                K.mw.k_EVRDashboardTabIcon_DesktopDisplay
              );
            },
          ];
        function ge(e, t) {
          let o = -1,
            n = -1;
          for (let i = 0; i < me.length && o < 0 && n < 0; i++)
            me[i](e) && (o = i), me[i](t) && (n = i);
          return (
            o < 0 && (o = me.length),
            n < 0 && (n = me.length),
            o == n ? e.tab_id() - t.tab_id() : o - n
          );
        }
        function _e(e, t) {
          var o, n, i, r, a, s;
          let l;
          const c =
              null !== (o = null == e ? void 0 : e.product_name) && void 0 !== o
                ? o
                : "",
            d =
              null !== (n = null == t ? void 0 : t.product_name) && void 0 !== n
                ? n
                : "";
          if (((l = c.localeCompare(d)), 0 != l)) return l;
          const p =
              null !== (i = null == e ? void 0 : e.title) && void 0 !== i
                ? i
                : "",
            h =
              null !== (r = null == t ? void 0 : t.title) && void 0 !== r
                ? r
                : "";
          if (((l = p.localeCompare(h)), 0 != l)) return l;
          const u =
              null !== (a = null == e ? void 0 : e.hwnd) && void 0 !== a
                ? a
                : "",
            m =
              null !== (s = null == t ? void 0 : t.hwnd) && void 0 !== s
                ? s
                : "";
          return u.localeCompare(m);
        }
      },
      4790: (e, t, o) => {
        "use strict";
        o.d(t, {
          MH: () => I,
          RA: () => i,
          Sm: () => O,
          Uj: () => r,
          fT: () => R,
          sg: () => M,
        });
        var n,
          i,
          r,
          a = o(655),
          s = o(1569),
          l = o(7056),
          c = o(7062),
          d = o(7294),
          p = o(424),
          h = o(7176),
          u = o(1628),
          m = o(9626),
          g = o(421),
          _ = o(6063),
          v = o(6509),
          S = o(792),
          y = o(9347),
          b = o(7373),
          f = o(6459),
          C = o(6698),
          k = o(3568);
        function I(e) {
          switch (e) {
            case i.Dashboard:
            case i.World:
              return 1;
            case i.Theater:
              return 3;
            case i.LeftHand:
            case i.RightHand:
              return 4;
            default:
              return 0;
          }
        }
        !(function (e) {
          (e[(e.Dashboard = 0)] = "Dashboard"),
            (e[(e.LeftHand = 1)] = "LeftHand"),
            (e[(e.RightHand = 2)] = "RightHand"),
            (e[(e.World = 3)] = "World"),
            (e[(e.Theater = 4)] = "Theater");
        })(i || (i = {})),
          (function (e) {
            (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
          })(r || (r = {}));
        const E = "TheaterCurvatureOriginId";
        function M(e) {
          return e == i.Dashboard;
        }
        function R(e) {
          return e == i.World;
        }
        function w(e) {
          return e == i.LeftHand || e == i.RightHand;
        }
        function T(e) {
          switch (e) {
            case i.LeftHand:
              return "/user/hand/left";
            case i.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let O = (n = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: (0, s.Oq)(),
                sParent: T(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
                bIsResizing: !1,
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
                  sParent: T(this.props.dockLocation),
                  xfTransform: (0, s.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation,
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
            let n =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              i = (n * o.y) / o.x;
            return (
              (this.props.sOverlayKey.startsWith(h.r4) ||
                this.props.sOverlayKey.startsWith(h.Vq)) &&
                ((i = y.N.k_nDesktopPanelBaseHeight), (n = (i * o.x) / o.y)),
              { width: n, height: i }
            );
          }
          getPanelScaleForLocation() {
            const e = m.BV.currentTheaterScreenSize;
            switch (this.props.dockLocation) {
              case i.LeftHand:
              case i.RightHand:
                return 0.15;
              case i.Dashboard:
              case i.World:
                let t = m.BV.isVRGamepadUI
                  ? m.BV.m_fVRGamepadUI_GlobalActiveOverlayScale
                  : 1;
                t *= b.g.getDashboardScale();
                const o = m.BV.m_mapOverlayState.get(this.props.sOverlayKey);
                return t * (o ? o.fScale : 1);
              case i.Theater:
                let n = e == m.fq.Large ? 2.35 : 1.8;
                const r = this.getCurrentOverlaySize();
                return null === r || 0 == r.height ? n : n / r.height;
            }
            return 1;
          }
          setInitialTransformForTheater() {
            const e = m.BV.currentTheaterScreenSize == m.fq.Large ? 0.6 : 0.4;
            let t = (0, s.Oq)();
            switch (m.BV.currentTheaterScreenAlignment) {
              case m.A3.PlayArea:
                (t.translation.y = e),
                  (t.translation.z = -3.3),
                  this.setState({ xfTransform: t });
                break;
              case m.A3.Dashboard: {
                let o = 3;
                s.hz
                  .getInstance()
                  .requestSGTransform(h.Az + "::active_overlay_transform", o)
                  .then((o) => {
                    (t.rotation = o.rotation),
                      (t.translation = {
                        x: o.translation.x,
                        y: e,
                        z: o.translation.z,
                      }),
                      this.setState({ xfTransform: t });
                  });
                break;
              }
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case i.LeftHand:
                case i.RightHand:
                case i.World:
                  this.setState({ xfTransform: this.props.xfInitial });
              }
              return;
            }
            let e = (0, s.Oq)();
            switch (
              ((e.rotation = (0, s.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case i.Dashboard:
              case i.LeftHand:
              case i.RightHand:
                this.setState({ xfTransform: e });
                break;
              case i.World:
                let t = 0;
                s.hz
                  .getInstance()
                  .requestSGTransform(h.Az + "::active_overlay_transform", t)
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
              case i.Theater:
                this.setInitialTransformForTheater();
            }
          }
          computeDestination() {
            if (!this.state.bIsMoving) return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_LeftHand,
            ) != s.Kf && (t = VRHTML.GetPose("/user/hand/left", s.zq.Standing));
            let o = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand,
            ) != s.Kf &&
              (o = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let r = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                o && r.push({ pose: o, location: i.RightHand });
                break;
              case "/user/hand/right":
                t && r.push({ pose: t, location: i.LeftHand });
                break;
              case "/user/head":
                t && r.push({ pose: t, location: i.LeftHand }),
                  o && r.push({ pose: o, location: i.RightHand });
            }
            if (0 == r.length)
              return void setTimeout(this.computeDestination, n.sfMovePulseMS);
            let a = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            r.forEach((e) => {
              let t = VRHTML.ChangeBasis(a, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > n.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (p.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: i.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == i.World &&
                      this.state.destination == i.World)) &&
                  (p.L.Instance.triggerHaptic(s.sH.SlidingEdge),
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
                "Starting to move " + this.props.sOverlayKey + "...\n",
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == s.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex,
              );
            let e,
              t,
              o = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
            switch (this.props.dockLocation) {
              case i.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_LeftHand,
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
                break;
              case i.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_RightHand,
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
            let n = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              r = VRHTML.ChangeBasis(n, o.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: r,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == i.World,
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
              this.state.destination == i.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_LeftHand,
                ) == s.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == i.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_RightHand,
                ) == s.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
            }
            let o,
              n = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case i.LeftHand:
                o = e;
                break;
              case i.RightHand:
                o = t;
                break;
              default:
                o = n;
            }
            let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                r.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(a, o.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: T(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.setOverlayDockLocation(
                this.props.sOverlayKey,
                this.state.destination,
                l,
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e, t, o;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let a = this.getCurrentOverlaySize();
            if (null === a) return null;
            let l,
              c = !this.props.bDashboardShown,
              p = !1;
            if (this.props.dockLocation == i.Theater) {
              if (this.props.bHasSceneApp && S.C.m_bShowFloor) return null;
              c = !0;
              const t =
                null !==
                  (e = u.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e;
              (p = !m.BV.isGroupMode && m.BV.isDarkMode && t),
                m.BV.eTheaterCurvature == r.Curved && (l = E);
            }
            const y = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              M =
                y && VRHTML.VROverlay.GetFlag(y, s.Z9.EnableControlBarKeyboard),
              R =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(h.r4),
              T = { x: 0, y: -0.15, z: 0.1 },
              O = (0, s.iN)(h.Az, "Floating-Panel"),
              D = (e) =>
                d.createElement(
                  s.wx,
                  {
                    parent_id: e.parent_id,
                    translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                  },
                  d.createElement(v.O, {
                    id: e.target_id + ".ResizeHandle",
                    target_id: e.target_id,
                    min_target_scale: h.k3,
                    max_target_scale: h.qV,
                    displacement: e.displacement,
                    bVisible: !0,
                    scale: e.scale,
                    tint: m.BV.GrabHandleTint,
                  }),
                );
            if (c) {
              const e =
                  this.props.dockLocation == i.Theater ||
                  (null !==
                    (t = u.G3.settings.get(
                      "/settings/dashboard/inputCaptureEnabled",
                    )) &&
                    void 0 !== t &&
                    t),
                r =
                  null !==
                    (o = u.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== o
                    ? o
                    : 0.5,
                c = 0.5 * Math.pow(r, 2.2);
              let v = -0.1,
                S = 4;
              const y = !0;
              let M = y ? 0.075 : -0.05,
                w = a.width,
                x = a.height,
                B = 0.75;
              return d.createElement(
                s.wx,
                { parent_path: void 0 },
                d.createElement(
                  s.wx,
                  {
                    transform_path: this.state.sParent,
                    transform: this.state.xfTransform,
                    id: "xf_widget",
                  },
                  d.createElement(
                    s.wx,
                    { translation: { y: B } },
                    d.createElement(
                      g.Z,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: n.flGrabTransformLerpSpeed,
                      },
                      d.createElement(s.wx, { id: E, translation: { z: S } }),
                      d.createElement(
                        s.wx,
                        { translation: { y: -1 * B } },
                        d.createElement(
                          s.wx,
                          { scale: this.getPanelScaleForLocation() },
                          d.createElement(
                            s.s_,
                            {
                              id: O,
                              overlay_key: this.props.sOverlayKey,
                              height: x,
                              width:
                                m.BV.m_eTheaterStereo != s.Ko.Mono ? w : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == i.Theater
                                  ? { x: 0, y: -0.75 }
                                  : s.Ic.BottomCenter,
                              curvature_origin_id: l,
                              stereoscopy: m.BV.m_eTheaterStereo,
                              scale_index: I(this.props.dockLocation),
                            },
                            d.createElement(s.at, {
                              id: "Floating-Panel-BottomLeft",
                              location: s.Ic.BottomLeft,
                            }),
                            d.createElement(s.at, {
                              id: "Floating-Panel-BottomRight",
                              location: s.Ic.BottomRight,
                            }),
                            d.createElement(s.at, {
                              id: "Floating-Panel-BottomCenter",
                              location: s.Ic.BottomCenter,
                            }),
                            d.createElement(s.sl, {
                              mountedId: (0, s.iN)(
                                h.GN,
                                this.props.sOverlayKey + ".cursor",
                              ),
                            }),
                          ),
                        ),
                        p &&
                          d.createElement(s.bt, {
                            target_id: O,
                            "near-z": v,
                            "far-z": 0.1,
                            specular: { color: { r: c, g: c, b: c } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == i.Theater &&
                          d.createElement(
                            d.Fragment,
                            null,
                            d.createElement(
                              s.Dd,
                              { value: 1 },
                              d.createElement(
                                s.wx,
                                {
                                  parent_id: "Floating-Panel-BottomCenter",
                                  translation: { z: 0.02, y: -0.04 },
                                  ignore_parent_scale: !0,
                                  scale: b.g.getUiScaleForLocation(
                                    this.props.dockLocation,
                                  ),
                                },
                                y &&
                                  d.createElement(
                                    s.s_,
                                    {
                                      height: M,
                                      width: void 0,
                                      interactive: !0,
                                      requires_laser: !0,
                                      origin: s.Ic.TopCenter,
                                      curvature_origin_id: l,
                                    },
                                    d.createElement(
                                      "div",
                                      {
                                        className:
                                          "TransparentOverlayControlBar",
                                      },
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        R &&
                                          d.createElement(f.zN, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: T,
                                            onClick:
                                              this.props.ShowMultitaskingView,
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        d.createElement(f.zN, {
                                          icon: d.createElement(C.gR, null),
                                          title: (0, k.Xx)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: T,
                                          onClick: () => {
                                            this.props.setOverlayDockLocation(
                                              this.props.sOverlayKey,
                                              i.Dashboard,
                                            );
                                          },
                                          additionalClassNames: "LargeIcon",
                                        }),
                                      ),
                                    ),
                                  ),
                                d.createElement(
                                  s.wx,
                                  { translation: { y: -M - 0.065, z: 0.03 } },
                                  d.createElement(_.J, {
                                    scale: 1,
                                    tint: m.BV.GrabHandleTint,
                                    curvature_origin_id: l,
                                  }),
                                ),
                              ),
                              d.createElement(D, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: O,
                                scale: b.g.getUiScaleForLocation(
                                  this.props.dockLocation,
                                ),
                                displacement: 1.75,
                                x_offset: 0.03,
                                y_offset: 0,
                              }),
                            ),
                          ),
                      ),
                    ),
                  ),
                ),
              );
            }
            const x = a.height,
              B = Math.max(a.width, 0.175),
              V = m.BV.isVRGamepadUI
                ? {
                    r: (14 / 255) * 0.1,
                    g: (20 / 255) * 0.1,
                    b: (27 / 255) * 0.1,
                  }
                : { r: 0.016, g: 0.017, b: 0.02 };
            return d.createElement(
              s.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              d.createElement(
                s.wx,
                { scale: this.getPanelScaleForLocation() },
                d.createElement(
                  s.s_,
                  {
                    id: O,
                    overlay_key: this.props.sOverlayKey,
                    height: a.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: s.Ic.BottomCenter,
                    scale_index: I(this.props.dockLocation),
                  },
                  d.createElement(
                    s.wx,
                    {
                      translation: { z: -0.005 },
                      scale: { x: B, y: x, z: 0.008 },
                    },
                    d.createElement(
                      s.VW,
                      { color: V },
                      d.createElement(s.gQ, { solid: !0, source: "unit_cube" }),
                    ),
                  ),
                  d.createElement(s.at, {
                    id: "Floating-Panel-BottomLeft",
                    location: s.Ic.BottomLeft,
                  }),
                  d.createElement(s.at, {
                    id: "Floating-Panel-BottomRight",
                    location: s.Ic.BottomRight,
                  }),
                  d.createElement(s.at, {
                    id: "Floating-Panel-BottomCenter",
                    location: s.Ic.BottomCenter,
                  }),
                  d.createElement(s.sl, {
                    mountedId: (0, s.iN)(
                      h.GN,
                      this.props.sOverlayKey + ".cursor",
                    ),
                  }),
                ),
              ),
              d.createElement(D, {
                parent_id: "Floating-Panel-BottomRight",
                target_id: O,
                scale:
                  b.g.getUiScaleForLocation(this.props.dockLocation) *
                  (w(this.props.dockLocation) ? 1.5 : 1),
                displacement: 0,
                x_offset: w(this.props.dockLocation) ? 0.02 : 0.01,
                y_offset: 0,
              }),
              d.createElement(
                s.wx,
                {
                  parent_id: "Floating-Panel-BottomCenter",
                  translation: { y: -0.01, z: 0 },
                  ignore_parent_scale: !0,
                  scale: b.g.getUiScaleForLocation(this.props.dockLocation),
                },
                d.createElement(
                  s.s_,
                  {
                    height: n.sfOverlayTrayHeight,
                    width: void 0,
                    interactive: !0,
                    origin: s.Ic.TopCenter,
                  },
                  d.createElement(
                    "div",
                    { className: "TransparentOverlayControlBar" },
                    d.createElement(
                      "div",
                      { className: "Section" },
                      R &&
                        d.createElement(f.zN, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: T,
                          onClick: this.props.ShowMultitaskingView,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      M &&
                        d.createElement(f.CS, {
                          overlayKey: this.props.sOverlayKey,
                          showTooltip: !1,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      d.createElement(f.zN, {
                        key: "undock",
                        icon: d.createElement(C.yR, null),
                        onClick: () =>
                          this.props.setOverlayDockLocation(
                            this.props.sOverlayKey,
                            i.Dashboard,
                          ),
                      }),
                      d.createElement(f.zN, {
                        key: "move",
                        iconUrl: "/dashboard/images/icons/icon_move.png",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                        additionalClassNames: "LargeIcon",
                      }),
                    ),
                  ),
                ),
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    s.wx,
                    {
                      parent_path:
                        this.state.destination == i.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    d.createElement(s.x1, {
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
        (O.sfMaxDockDist = 0.4),
          (O.sfMovePulseMS = 100),
          (O.sfOverlayTrayHeight = 0.12),
          (O.flGrabTransformLerpSpeed = 0.125),
          (0, a.gn)([l.ZP], O.prototype, "computeDestination", null),
          (0, a.gn)([l.ZP], O.prototype, "startMove", null),
          (0, a.gn)([l.ZP], O.prototype, "endMove", null),
          (O = n = (0, a.gn)([c.Pi], O));
      },
      6459: (e, t, o) => {
        "use strict";
        o.d(t, {
          B8: () => H,
          CS: () => j,
          D6: () => K,
          Eu: () => w,
          IO: () => L,
          M3: () => x,
          NT: () => F,
          Rk: () => U,
          Yd: () => T,
          dw: () => N,
          dy: () => B,
          j4: () => z,
          j6: () => G,
          lL: () => O,
          z: () => W,
          zN: () => Z,
          zk: () => P,
        });
        var n,
          i,
          r = o(655),
          a = o(1569),
          s = o(7056),
          l = o(2188),
          c = o(7062),
          d = o(7294),
          p = o(5177),
          h = o(9755),
          u = o(7475),
          m = o(4979),
          g = o(3107),
          _ = o(2749),
          v = o(7176),
          S = o(3568),
          y = o(7008),
          b = o(8980),
          f = o(9897),
          C = o(1628),
          k = o(8322),
          I = o.n(k),
          E = o(7726),
          M = o(7471),
          R = o(9626);
        const w = new l.vP();
        function T(e) {
          const { summonOverlayKey: t } = e,
            { ids: o, anchors: n } = d.useMemo(() => {
              const e = "DashboardPanel_" + t,
                o = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                  strBottomRightAnchorID: e + "_BottomRight",
                };
              return {
                ids: o,
                anchors: d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(a.at, {
                    id: o.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  d.createElement(a.at, {
                    id: o.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  d.createElement(a.at, {
                    id: o.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  d.createElement(a.at, {
                    id: o.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  }),
                  d.createElement(a.at, {
                    id: o.strBottomRightAnchorID,
                    location: a.Ic.BottomRight,
                  }),
                ),
              };
            }, [t]);
          return (
            d.useEffect(
              () => (
                w.set(t, o),
                () => {
                  w.get(t) === o && w.delete(t);
                }
              ),
              [t, o],
            ),
            t ? n : null
          );
        }
        const O = (0, c.Pi)(function (e) {
            return d.createElement(
              D,
              Object.assign({}, e, { VRGamepadUI: R.BV.isVRGamepadUI }),
            );
          }),
          D = (e) => {
            var t, o, n;
            const i = e.VRGamepadUI,
              r = d.useRef(null),
              s = d.useRef(null);
            d.useEffect(() => {
              var e, t;
              return null === (e = r.current) || void 0 === e
                ? void 0
                : e.setFloatingViewStack(
                    null === (t = s.current) || void 0 === t
                      ? void 0
                      : t.viewStack,
                  );
            });
            const l = null === (t = e.scrollable) || void 0 === t || t,
              c =
                null !== (o = e.foregroundReflectMultiplier) && void 0 !== o
                  ? o
                  : 1,
              m =
                null ===
                  (n = C.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === n ||
                n
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
                  curvature_origin_id: m,
                  origin: a.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  meters_per_pixel: i ? void 0 : 2 * v.F$,
                  width: i ? 2.67 : void 0,
                  reflect: i ? 0 : 0.01,
                  sampler: a.Vv.SingleTap,
                },
                d.createElement(T, { summonOverlayKey: e.summonOverlayKey }),
                d.createElement(
                  h.vz,
                  { ref: r },
                  d.createElement("div", {
                    className: (0, b.LJ)(
                      "DashboardPanelBackground",
                      e.additionalClassNames,
                    ),
                    style: e.additionalStyle,
                  }),
                ),
              ),
              d.createElement(
                a.wx,
                { translation: { z: 1e-5 } },
                d.createElement(
                  a.s_,
                  {
                    id: "dashboard_widget_panel_id",
                    visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: m,
                    origin: a.Ic.BottomCenter,
                    interactive: !0,
                    scrollable: l,
                    meters_per_pixel: i ? void 0 : v.F$,
                    reflect: i ? void 0 : 0.2 * c,
                    width: i ? 2.67 : void 0,
                  },
                  d.createElement(
                    h.sC,
                    { ref: s },
                    d.createElement(
                      p.q,
                      null,
                      d.createElement(
                        u.P,
                        {
                          scrollDirection: l ? u.I.Vertical : u.I.None,
                          className: (0, b.LJ)(
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
        class x extends d.Component {
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
            const e = S.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              o = null;
            const n = t.toLowerCase(),
              i = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
            return (
              i >= 0 && ((o = t.substring(i)), (t = t.substring(0, i - 1))),
              d.createElement(
                "div",
                { className: "ClockContainer" },
                d.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  d.createElement("span", { className: "Suffix" }, o),
                ),
              )
            );
          }
        }
        function B(e) {
          return d.createElement(
            p.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, r.gn)([s.ak], x.prototype, "updateTime", null);
        let V = (n = class extends d.Component {
          get isShowingTooltip() {
            return n.s_CurrentlyShownTooltip === this;
          }
          show() {
            n.s_CurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip && (n.s_CurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              o = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              n =
                null ===
                  (e = C.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
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
                  { translation: o },
                  d.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      meters_per_pixel: v.F$,
                      curvature_origin_id: n,
                    },
                    d.createElement(
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
        (V.s_CurrentlyShownTooltip = null),
          (0, r.gn)([l.Fl], V.prototype, "isShowingTooltip", null),
          (0, r.gn)([l.aD.bound], V.prototype, "show", null),
          (0, r.gn)([l.aD.bound], V.prototype, "hide", null),
          (0, r.gn)([l.LO], V, "s_CurrentlyShownTooltip", void 0),
          (V = n = (0, r.gn)([c.Pi], V));
        class A extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !A.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  A.k_rsThumbnailHashesToInvert.indexOf(I().hash(e)) >= 0 &&
                  (t = !0),
                A.s_mapShouldInvertThumbnail.set(e, t);
            }
            return A.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              o = A.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, b.LJ)(["BlackToWhite", o]),
                src: this.props.src,
              }),
            );
          }
        }
        var P, L;
        (A.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (A.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(L || (L = {}));
        const N = (e) =>
          d.createElement(
            "div",
            { className: (0, b.LJ)("ControlBarGroup", P[e.style]) },
            e.children,
          );
        let H = class extends d.Component {
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
              p.z,
              {
                className: (0, b.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  L[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : L.Center
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
                releaseSoundEffect: g.y.ControlBarButtonClick,
              },
              this.props.centerPanelAnchorID &&
                d.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  d.createElement(y.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              d.createElement(V, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(A, { src: this.props.imageUrl }),
            );
          }
        };
        (0, r.gn)([s.ak], H.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], H.prototype, "onMouseLeave", null),
          (H = (0, r.gn)([c.Pi], H));
        const F = (e) =>
          d.createElement(
            N,
            { style: e.style },
            d.createElement(H, Object.assign({}, e)),
          );
        class G extends d.Component {
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
                        e + G.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - G.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                o,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let n = E.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style,
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
          onDeviceEvent(e, t, o) {
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
                  " W ",
                ),
              d.createElement("img", { src: this.state.batteryIconPath }),
            );
          }
        }
        (G.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], G.prototype, "updateControllerStatus", null),
          (0, r.gn)([s.ak], G.prototype, "onBatteryStateChanged", null),
          (0, r.gn)([s.ak], G.prototype, "onDeviceRoleChanged", null),
          (0, r.gn)([s.ak], G.prototype, "onDeviceEvent", null),
          d.Component;
        const U = (e) =>
          d.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && d.createElement(A, { src: e.iconUrl, shadow: !0 }),
            d.createElement("span", { className: "NoWrapText" }, e.name),
          );
        class z extends d.Component {
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
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.m_refPanelElem.current),
              this.updateBackgroundSize());
          }
          render() {
            var e, t, o;
            const n = this.props.position,
              i = Math.asin(n) / Math.PI,
              r = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.at,
                { location: { x: n, y: -1 } },
                d.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(i),
                    z: -0.03 * Math.abs(i),
                  },
                  rotation: { y: 15 * i, z: 2 * i },
                }),
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
                        translation: { y: 0.04 * r, z: -0.01 },
                        scale: r,
                      },
                      d.createElement(
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
                          meters_per_pixel: v.F$,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        d.createElement(
                          "div",
                          {
                            className: (0, b.LJ)(
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
                      d.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        d.createElement(
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
                            meters_per_pixel: 2 * v.F$,
                            reflect: 0.005,
                            sampler: a.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                          },
                          d.createElement("div", {
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
        (0, r.gn)([s.ak], z.prototype, "onResizeObserved", null),
          (0, r.gn)([s.ak], z.prototype, "updateBackgroundSize", null),
          (0, r.gn)([s.ak], z.prototype, "onPortalDidMount", null);
        let W = class extends d.Component {
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
              C.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && C.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!C.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice",
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return d.createElement(
              z,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  q,
                  {
                    onClick: f.f.Instance.toggleMicrophoneMute,
                    title: f.f.Instance.microphoneMuted
                      ? (0, S.Xx)("#UnmuteMicrophone")
                      : (0, S.Xx)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                d.createElement(X, {
                  title: (0, S.Xx)("#MicrophoneVolume"),
                  value: f.f.Instance.microphoneVolume,
                  onChange: f.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, b.LJ)([
                    "Muted",
                    f.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                d.createElement(
                  "div",
                  { className: "Section" },
                  d.createElement(
                    q,
                    {
                      onClick: f.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: f.f.Instance.mirrorMuted
                        ? (0, S.Xx)("#UnmuteAudioMirror")
                        : (0, S.Xx)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: f.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  d.createElement(X, {
                    title: (0, S.Xx)("#AudioMirrorVolume"),
                    value: f.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: f.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, b.LJ)([
                      "Muted",
                      f.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: g.y.VolumePreview,
                  }),
                ),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  q,
                  {
                    onClick: f.f.Instance.toggleMute,
                    title: f.f.Instance.muted
                      ? (0, S.Xx)("#Unmute_Headset")
                      : (0, S.Xx)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                d.createElement(X, {
                  title: (0, S.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: f.f.Instance.volume,
                  onChange: f.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, b.LJ)(["Muted", f.f.Instance.muted]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, r.gn)([s.ak], W.prototype, "onSliderMouseEnter", null),
          (0, r.gn)([s.ak], W.prototype, "onSliderMouseLeave", null),
          (0, r.gn)([s.ak], W.prototype, "onSliderFinalChange", null),
          (0, r.gn)([l.Fl], W.prototype, "showAudioMirrorControls", null),
          (0, r.gn)([l.Fl], W.prototype, "enableAudioMirrorControls", null),
          (W = (0, r.gn)([c.Pi], W));
        let X = class extends d.Component {
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
                d.createElement(V, {
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
                }),
              ),
            );
          }
        };
        (0, r.gn)([s.ak], X.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], X.prototype, "onMouseLeave", null),
          (0, r.gn)([s.ak], X.prototype, "onInteractionStart", null),
          (0, r.gn)([s.ak], X.prototype, "onInteractionEnd", null),
          (X = (0, r.gn)([c.Pi], X));
        let q = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, o, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (n = (o = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(o, e);
          }
          onMouseLeave(e) {
            var t, o, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (n = (o = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(o, e);
          }
          render() {
            return d.createElement(
              p.z,
              Object.assign({}, this.props, {
                className: (0, b.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className,
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                d.createElement(V, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, r.gn)([s.ak], q.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], q.prototype, "onMouseLeave", null),
          (q = (0, r.gn)([c.Pi], q));
        let K = (i = class extends d.Component {
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
            var e, t, o, n;
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
              null === (n = this.slider) ||
                void 0 === n ||
                n.stopExternalSliding();
          }
          render() {
            return d.createElement(H, {
              imageUrl: f.f.Instance.muted
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
        (K.MIN_DRAG_THRESHOLD = 35),
          (0, r.gn)([s.ak], K.prototype, "onButtonMouseDown", null),
          (0, r.gn)([s.ak], K.prototype, "onWindowMouseMove", null),
          (0, r.gn)([s.ak], K.prototype, "onWindowMouseUp", null),
          (K = i = (0, r.gn)([c.Pi], K));
        const Z = (e) => {
          var t;
          const o = d.useRef();
          return d.createElement(
            p.z,
            {
              className: (0, b.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl || !!e.icon],
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
              d.createElement(V, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: o,
              }),
            e.label && d.createElement("span", null, e.label),
            e.iconUrl &&
              d.createElement("img", {
                className: (0, M.Z)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            !e.iconUrl && e.icon,
          );
        };
        function j(e) {
          var t, o;
          const n = (0, b.aB)(),
            i =
              null !== (t = null == n ? void 0 : n.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == n.overlayKey,
            r = d.useRef(!1),
            s =
              null === (o = e.showTooltip) || void 0 === o || o
                ? i
                  ? (0, S.Xx)("#HideKeyboardTooltip")
                  : (0, S.Xx)("#ShowKeyboardTooltip")
                : void 0;
          return d.createElement(
            Z,
            Object.assign(
              {
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: s,
                additionalClassNames: (0, b.LJ)(
                  "Keyboard",
                  e.additionalClassNames,
                ),
                onMouseDown: () => {
                  r.current = i;
                },
                onClick: () => {
                  if (r.current) VRHTML.VROverlay.HideKeyboard();
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
                active: i,
              },
              e,
            ),
          );
        }
      },
      9347: (e, t, o) => {
        "use strict";
        o.d(t, { N: () => C, e: () => f });
        var n,
          i,
          r = o(655),
          a = o(1569),
          s = o(7056),
          l = o(2477),
          c = o(2188),
          d = o(7062),
          p = o(7294),
          h = o(7475),
          u = o(7176),
          m = o(3568),
          g = o(1628),
          _ = o(6459),
          v = o(9626),
          S = o(7373),
          y = o(6509),
          b = o(4790);
        let f = (n = class extends p.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = p.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(n.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var o, n;
            null === (o = this.m_refWindowScrollPanel.current) ||
              void 0 === o ||
              o.scrollTo({
                left:
                  null === (n = this.m_refWindowScrollPanel.current) ||
                  void 0 === n
                    ? void 0
                    : n.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, o, n;
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
                  : t.state.desktopIndices.length) > 1,
              r = { x: 0, y: -0.15, z: 0.1 };
            return p.createElement(
              _.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              i &&
                p.createElement(
                  h.P,
                  {
                    scrollDirection: h.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  p.createElement(
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
                          return p.createElement(_.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, m.Xx)("#Desktop_X", e),
                            tooltipTranslation: r,
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
                        : n.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, o, n;
                      return p.createElement(_.zN, {
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
                              null === (o = this.state.desktopView) ||
                                void 0 === o
                                ? void 0
                                : o.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === n
                            ? void 0
                            : n.title,
                        tooltipTranslation: r,
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
                p.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  p.createElement(_.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, m.Xx)("#AddView"),
                    tooltipTranslation: r,
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  }),
                ),
            );
          }
        });
        (f.k_sMailboxName = "systemui_desktoptray"),
          (f = n = (0, r.gn)([d.Pi], f));
        let C = (i = class extends p.Component {
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
              this.m_mailbox.Init(i.k_sMailboxName).then(() => {}),
              l.Q.SteamVR.SetImplementation(
                "DashboardDesktopWindowClicked",
                (e) => {
                  var t, o;
                  const n =
                    null !==
                      (o =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== o
                      ? o
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == n)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(u.gB)
                      );
                  const i = { type: "request_spawn_window_view", hwnd: n };
                  if (!this.m_mailbox.SendMessage("desktopview", i))
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
              : VRHTML.VROverlay.FindOverlay(u.Xl))
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
                    (e = g.G3.settings.get(
                      "/settings/dashboard/desktopIndex",
                    )) && void 0 !== e
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
              g.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e,
              );
          }
          onDesktopChange(e) {
            g.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
              (e = g.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > o.length &&
              g.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
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
            return p.createElement(
              p.Fragment,
              null,
              t &&
                p.createElement(_.zN, {
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
                  (e = g.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? u.ml
                  : null,
              o = u.Az + "::id.panel.desktop." + this.currentDesktopIndex,
              n = (e) =>
                p.createElement(
                  a.wx,
                  {
                    parent_id: e.parent_id,
                    translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                  },
                  p.createElement(y.O, {
                    id: e.target_id + ".ResizeHandle",
                    target_id: e.target_id,
                    min_target_scale: u.k3,
                    max_target_scale: u.qV,
                    displacement: e.displacement,
                    bVisible: !0,
                    scale: e.scale,
                    tint: v.BV.GrabHandleTint,
                  }),
                );
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? p.createElement(a.sl, { mountedId: (0, a.iN)(u.GN, u.Xl) })
                : this.state.bIsReady
                  ? 0 === this.state.desktopIndices.length
                    ? p.createElement(
                        _.lL,
                        { visible: !0, summonOverlayKey: u.gB },
                        p.createElement(
                          "div",
                          { className: "NoDesktopFound" },
                          p.createElement(
                            "h2",
                            null,
                            (0, m.Xx)("#NoDesktopFound"),
                          ),
                        ),
                      )
                    : p.createElement(
                        p.Fragment,
                        null,
                        p.createElement(
                          a.s_,
                          {
                            id: o,
                            overlay_key:
                              -1 == this.currentDesktopIndex
                                ? this.state.sCurrentWindowOverlayKey
                                : "system.desktop." + this.currentDesktopIndex,
                            height: i.k_nDesktopPanelBaseHeight,
                            curvature_origin_id: t,
                            interactive: !0,
                            origin: a.Ic.BottomCenter,
                            debug_name: "System Desktop",
                            scale_index: (0, b.MH)(b.RA.Dashboard),
                          },
                          p.createElement(_.Yd, { summonOverlayKey: u.gB }),
                          p.createElement(a.sl, {
                            mountedId:
                              -1 == this.currentDesktopIndex
                                ? (0, a.iN)(
                                    u.GN,
                                    this.state.sCurrentWindowOverlayKey +
                                      ".cursor",
                                  )
                                : (0, a.iN)(
                                    u.GN,
                                    "system.desktop." +
                                      this.currentDesktopIndex +
                                      ".cursor",
                                  ),
                          }),
                        ),
                        p.createElement(n, {
                          parent_id: "DashboardPanel_" + u.gB + "_BottomRight",
                          scale: S.g.getUiScaleForLocation(b.RA.Dashboard),
                          target_id: o,
                          displacement: 0,
                          x_offset: 0.03,
                          y_offset: 0,
                        }),
                      )
                  : p.createElement(
                      _.lL,
                      { visible: !0, summonOverlayKey: u.gB },
                      p.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        p.createElement(
                          "h2",
                          null,
                          (0, m.Xx)("#DesktopViewsUpdating"),
                        ),
                      ),
                    )
              : null;
          }
        });
        (C.k_sMailboxName = "systemui_desktopview"),
          (C.k_nDesktopPanelBaseHeight = 2),
          (0, r.gn)([c.Fl], C.prototype, "desktopCount", null),
          (0, r.gn)([c.Fl], C.prototype, "sCurrentOverlayKey", null),
          (0, r.gn)([c.Fl], C.prototype, "currentDesktopIndex", null),
          (0, r.gn)([c.Fl], C.prototype, "currentWindowHwnd", null),
          (0, r.gn)([s.ZP], C.prototype, "onDesktopScaleChange", null),
          (0, r.gn)([s.ZP], C.prototype, "onDesktopChange", null),
          (0, r.gn)([s.ZP], C.prototype, "onDesktopViewUpdating", null),
          (0, r.gn)([s.ZP], C.prototype, "onDesktopViewReady", null),
          (0, r.gn)([s.ZP], C.prototype, "onWindowViewChange", null),
          (0, r.gn)([s.ZP], C.prototype, "ShowMultitaskingView", null),
          (C = i = (0, r.gn)([d.Pi], C));
      },
      6063: (e, t, o) => {
        "use strict";
        o.d(t, { J: () => p });
        var n = o(655),
          i = o(7294),
          r = o(7056),
          a = o(1569),
          s = o(7062),
          l = o(5177),
          c = o(421),
          d = o(8980);
        let p = class extends i.Component {
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
              n = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
            return (
              o &&
              i.createElement(
                a.wx,
                null,
                i.createElement(
                  a.Dd,
                  { value: this.props.opacity },
                  i.createElement(
                    a.VW,
                    { color: this.props.tint },
                    i.createElement(
                      a.s_,
                      {
                        width: 0.66675 * n,
                        interactive: !0,
                        requires_laser: !0,
                        debug_name: "DashboardGrabHandle",
                        origin: a.Ic.BottomCenter,
                        curvature_origin_id: this.props.curvature_origin_id,
                        hide_lasermouse_when_clicking: !0,
                        is_grab_handle: !0,
                      },
                      i.createElement(
                        l.z,
                        {
                          className: "GrabHandleButton",
                          key: "move",
                          onMouseDown: this.startMove,
                          onMouseUp: this.endMove,
                        },
                        i.createElement("div", {
                          className: (0, d.LJ)("GrabHandleBar", [
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
        (p.contextType = c.E),
          (0, n.gn)([r.ZP], p.prototype, "startMove", null),
          (0, n.gn)([r.ZP], p.prototype, "endMove", null),
          (p = (0, n.gn)([s.Pi], p));
      },
      421: (e, t, o) => {
        "use strict";
        o.d(t, { E: () => s, Z: () => l });
        var n = o(655),
          i = o(1569),
          r = o(7062),
          a = o(7294);
        const s = a.createContext(void 0);
        let l = class extends a.Component {
          constructor(e) {
            super(e),
              (this.state = { transform: (0, i.Oq)(), parent_path: "" });
          }
          render() {
            return a.createElement(
              i.sO,
              {
                parent_path: this.state.parent_path,
                transform: this.state.transform,
                id: this.props.id,
                should_head_align: this.props.should_head_align,
                stop_distance: this.props.stop_distance,
                start_angle: this.props.start_angle,
                start_quat_difference: this.props.start_quat_difference,
                stop_quat_difference: this.props.stop_quat_difference,
                scale_margin: this.props.scale_margin,
                lerp_speed: this.props.lerp_speed,
                min_distance: this.props.min_distance,
                max_distance: this.props.max_distance,
                one_to_one_radius: this.props.one_to_one_radius,
                max_x_squared_contribution:
                  this.props.max_x_squared_contribution,
                acceleration_factor_x_coefficient:
                  this.props.acceleration_factor_x_coefficient,
                acceleration_factor_x_squared_coefficient:
                  this.props.acceleration_factor_x_squared_coefficient,
                acceleration_factor_scale_term:
                  this.props.acceleration_factor_scale_term,
              },
              a.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, n.gn)([r.Pi], l);
      },
      3033: (e, t, o) => {
        "use strict";
        o.d(t, { p: () => u });
        var n = o(1569),
          i = o(7294),
          r = o(7062),
          a = o(9626),
          s = o(4820),
          l = o(7176),
          c = o(9764);
        function d(e) {
          const { children: t, invertParentPanelPitch: o, pitch: r } = e;
          return o || 0 != r
            ? i.createElement(
                n.wx,
                {
                  invert_parent_panel_pitch: null != o && o,
                  curvature_pitch: null != r ? r : 0,
                },
                t,
              )
            : i.createElement(i.Fragment, null, t);
        }
        function p(e) {
          let { children: t, offsetPixels: o, offsetMeters: r } = e;
          (o = null != o ? o : { x: 0, y: 0, z: 0 }),
            (r = null != r ? r : { x: 0, y: 0, z: 0 });
          const s = (0, n.ui)(
            r,
            (0, n.mT)(o, a.BV.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != s.x || 0 != s.y || 0 != s.z
            ? i.createElement(n.wx, { translation: s }, t)
            : i.createElement(i.Fragment, null, t);
        }
        function h(e) {
          const { children: t, rotation: o } = e;
          return null == o || (0 == o.x && 0 == o.y && 0 == o.z)
            ? i.createElement(i.Fragment, null, t)
            : i.createElement(n.wx, { rotation: o }, t);
        }
        function u(e) {
          var t,
            o,
            r,
            c,
            u,
            m,
            g,
            _,
            v,
            S,
            y,
            b,
            f,
            C,
            k,
            I,
            E,
            M,
            R,
            w,
            T,
            O,
            D,
            x,
            B,
            V,
            A,
            P,
            L,
            N,
            H,
            F,
            G,
            U,
            z,
            W,
            X;
          const { popupRequest: q, reparent: K } = e,
            Z = null == K || K,
            j = {
              x:
                null !==
                  (o =
                    null === (t = q.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== o
                  ? o
                  : 0,
              y:
                null !==
                  (c =
                    null === (r = q.origin_on_parent) || void 0 === r
                      ? void 0
                      : r.y) && void 0 !== c
                  ? c
                  : 0,
            },
            J = {
              x:
                null !==
                  (m =
                    null === (u = q.origin_on_popup) || void 0 === u
                      ? void 0
                      : u.x) && void 0 !== m
                  ? m
                  : 0,
              y:
                null !==
                  (_ =
                    null === (g = q.origin_on_popup) || void 0 === g
                      ? void 0
                      : g.y) && void 0 !== _
                  ? _
                  : 0,
            },
            Q = {
              u:
                null !==
                  (S =
                    null === (v = q.clip_rect) || void 0 === v
                      ? void 0
                      : v.u_min) && void 0 !== S
                  ? S
                  : 0,
              v:
                null !==
                  (b =
                    null === (y = q.clip_rect) || void 0 === y
                      ? void 0
                      : y.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            Y = {
              u:
                null !==
                  (C =
                    null === (f = q.clip_rect) || void 0 === f
                      ? void 0
                      : f.u_max) && void 0 !== C
                  ? C
                  : 1,
              v:
                null !==
                  (I =
                    null === (k = q.clip_rect) || void 0 === k
                      ? void 0
                      : k.v_max) && void 0 !== I
                  ? I
                  : 1,
            },
            $ = {
              x:
                null !==
                  (M =
                    null === (E = q.offset) || void 0 === E
                      ? void 0
                      : E.x_pixels) && void 0 !== M
                  ? M
                  : 0,
              y:
                null !==
                  (w =
                    null === (R = q.offset) || void 0 === R
                      ? void 0
                      : R.y_pixels) && void 0 !== w
                  ? w
                  : 0,
              z:
                null !==
                  (O =
                    null === (T = q.offset) || void 0 === T
                      ? void 0
                      : T.z_pixels) && void 0 !== O
                  ? O
                  : 0,
            },
            ee = {
              x:
                null !==
                  (x =
                    null === (D = q.offset) || void 0 === D
                      ? void 0
                      : D.x_meters) && void 0 !== x
                  ? x
                  : 0,
              y:
                null !==
                  (V =
                    null === (B = q.offset) || void 0 === B
                      ? void 0
                      : B.y_meters) && void 0 !== V
                  ? V
                  : 0,
              z:
                null !==
                  (P =
                    null === (A = q.offset) || void 0 === A
                      ? void 0
                      : A.z_meters) && void 0 !== P
                  ? P
                  : 0,
            },
            te = {
              x:
                null !==
                  (N =
                    null === (L = q.rotation) || void 0 === L
                      ? void 0
                      : L.pitch_degrees) && void 0 !== N
                  ? N
                  : 0,
              y:
                null !==
                  (F =
                    null === (H = q.rotation) || void 0 === H
                      ? void 0
                      : H.yaw_degrees) && void 0 !== F
                  ? F
                  : 0,
            },
            oe = null === (G = q.inherit_parent_pitch) || void 0 === G || G,
            ne = null === (U = q.inherit_parent_curvature) || void 0 === U || U,
            ie = null === (z = q.interactive) || void 0 === z || z,
            re = null !== (W = q.requires_laser) && void 0 !== W && W,
            ae =
              (null !== (X = q.sort_order) && void 0 !== X
                ? X
                : s.rz.k_eDefault) == s.rz.k_eQRPopup
                ? 101
                : null,
            se = (function (e) {
              var t, o, n;
              const i =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                r =
                  null !==
                    (n =
                      null === (o = null == e ? void 0 : e.offset) ||
                      void 0 === o
                        ? void 0
                        : o.z_pixels) && void 0 !== n
                    ? n
                    : 0;
              return i == l.BZ && r >= 0 ? -0.5 : 0;
            })(q);
          i.useLayoutEffect(
            () => n.n0.Current().forceLayoutUpdate(),
            [Q.u, Q.v, Y.u, Y.v],
          );
          const le = i.createElement(
            d,
            { invertParentPanelPitch: !oe },
            i.createElement(
              p,
              { offsetPixels: $, offsetMeters: ee },
              i.createElement(
                h,
                { rotation: te },
                i.createElement(n.s_, {
                  debug_name: `VRGamepadUI-PooledPopup-${q.dashboard_popup_request_id}`,
                  interactive: ie,
                  requires_laser: re,
                  curvature: ne ? "inherit-from-parent-panel" : void 0,
                  overlay_key: q.popup_overlay_key,
                  origin: J,
                  meters_per_pixel: a.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.03,
                  sort_depth_bias: se,
                  uv_min: Q,
                  uv_max: Y,
                  sort_order: ae,
                }),
              ),
            ),
          );
          return q.parent_device_path
            ? i.createElement(n.wx, { parent_path: q.parent_device_path }, le)
            : Z
              ? i.createElement(
                  n.Sb,
                  {
                    parent_overlay_key: q.parent_overlay_key,
                    key: q.dashboard_popup_request_id,
                  },
                  i.createElement(
                    n.at,
                    { key: q.dashboard_popup_request_id, location: j },
                    le,
                  ),
                )
              : i.createElement(
                  n.at,
                  { key: q.dashboard_popup_request_id, location: j },
                  le,
                );
        }
        (0, r.Pi)((e) => {
          const t = c.J.GetActivePooledPopups();
          return i.createElement(
            i.Fragment,
            null,
            t.map((e) =>
              i.createElement(u, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              }),
            ),
          );
        });
      },
      16: (e, t, o) => {
        "use strict";
        o.d(t, { BB: () => h, KU: () => u });
        var n,
          i = o(655),
          r = o(7294),
          a = o(7056),
          s = o(1569),
          l = o(3568),
          c = o(7062),
          d = o(8980),
          p = o(1628);
        const h = "resetuniverseorigincountdown",
          u = "begin_reset_universe_origin_countdown";
        let m = (n = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(h).then(() => {
                this.m_mailbox.RegisterHandler(
                  u,
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
              p.G3.settings.get(
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
                    n.kFadeDurationMs,
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
            return r.createElement(
              s.s_,
              {
                width: void 0,
                height: n.kPanelHeight,
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
                  style: { width: n.kPixelWidth },
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
                      this.state.countdown_seconds,
                    ),
                  ),
                  r.createElement(
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
              n =
                null !==
                  (t = p.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? r.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: n },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: o },
                    this.renderPanel(),
                  ),
                )
              : r.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  r.createElement(
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
          (0, i.gn)(
            [a.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null,
          ),
          (0, i.gn)([a.ak], m.prototype, "CountdownTick", null),
          (0, i.gn)([a.ak], m.prototype, "HideOverlay", null),
          (m = n = (0, i.gn)([c.Pi], m));
      },
      6509: (e, t, o) => {
        "use strict";
        o.d(t, { O: () => d });
        var n = o(655),
          i = o(7294),
          r = o(7056),
          a = o(7062),
          s = o(5177),
          l = o(8980),
          c = o(1569);
        let d = class extends i.Component {
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
            const t = null !== (e = this.props.scale) && void 0 !== e ? e : 1,
              o = 0.2667 * t;
            return i.createElement(
              c.wx,
              { ignore_parent_scale: !0 },
              i.createElement(
                c.kL,
                {
                  id: this.props.id,
                  target_id: this.props.target_id,
                  is_active: this.state.bActive,
                  min_target_scale: this.props.min_target_scale,
                  max_target_scale: this.props.max_target_scale,
                  displacement: this.props.displacement,
                },
                i.createElement(
                  c.Dd,
                  { value: this.props.opacity },
                  i.createElement(
                    c.VW,
                    { color: this.props.tint },
                    i.createElement(
                      c.wx,
                      { translation: { y: o / 2 } },
                      i.createElement(
                        c.s_,
                        {
                          height: o,
                          interactive: !0,
                          requires_laser: !0,
                          debug_name: "ResizeHandle",
                          hide_lasermouse_when_clicking: !0,
                        },
                        i.createElement(
                          s.z,
                          {
                            className:
                              t < 0.5
                                ? "ResizeHandleButtonMini"
                                : "ResizeHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                          },
                          i.createElement("div", {
                            className: (0, l.LJ)("ResizeHandleBar", [
                              "ForceActive",
                              this.state.bActive,
                            ]),
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        };
        (0, n.gn)([r.ZP], d.prototype, "startMove", null),
          (0, n.gn)([r.ZP], d.prototype, "endMove", null),
          (d = (0, n.gn)([a.Pi], d));
      },
      1283: (e, t, o) => {
        "use strict";
        o.d(t, { s: () => _ });
        var n = o(655),
          i = o(7294),
          r = o(7062),
          a = o(7056),
          s = o(3568),
          l = o(5211),
          c = o(4285),
          d = o(2188),
          p = o(9809),
          h = o(5177),
          u = o(8980),
          m = o(8242);
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
            let o = t;
            const n = "vive_tracker";
            o.includes(n) &&
              (o = o.substring(o.indexOf(n) + n.length, o.length));
            let r = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (r = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable",
                  ))
                : (r = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected",
                  )),
              i.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                i.createElement(
                  "div",
                  { className: "Label", title: t },
                  i.createElement("span", null, o),
                  i.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected",
                    ),
                    className: (0, u.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", c.E.connected && this.IsConnected()],
                      ["Disconnected", c.E.connected && !this.IsConnected()],
                    ),
                  }),
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
                      (0, s.Xx)("#TrackerEditor_BuzzTracker"),
                    ),
                  ),
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
                    }),
                ),
              )
            );
          }
        };
        (0, n.gn)([d.Fl], g.prototype, "trackerConfig", null),
          (0, n.gn)([a.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, n.gn)([a.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, n.gn)([a.ak], g.prototype, "BuzzTracker", null),
          (0, n.gn)([d.Fl], g.prototype, "deviceInfo", null),
          (g = (0, n.gn)([r.Pi], g));
        let _ = class extends i.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => p.I.GetInputState(),
              2e3,
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
                (e = t.trackers.map((e, o) =>
                  i.createElement(g, {
                    key: o,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              i.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        _ = (0, n.gn)([r.Pi], _);
      },
      6698: (e, t, o) => {
        "use strict";
        o.d(t, {
          SV: () => h,
          X7: () => d,
          Y2: () => c,
          gR: () => p,
          ur: () => r,
          yR: () => a,
        });
        var n = o(655),
          i = o(7294);
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
              e,
            ),
            i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
        function a(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                fill: "#FFFFFF",
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Popout",
                viewBox: "0 0 8 8",
                x: "0px",
                y: "0px",
              },
              e,
            ),
            i.createElement("path", {
              d: "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
            }),
          );
        }
        function s(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_ShareScreen",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            i.createElement("path", {
              fill: "currentColor",
              d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
            }),
          );
        }
        function l(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_ShareScreenOff",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            i.createElement("path", {
              fill: "currentColor",
              d: "M1 30.6985L7.90454 23.7939C6.78948 23.3564 6 22.2705 6 21.0002C6 19.3434 7.34315 18.0002 9 18.0002C10.2703 18.0002 11.3561 18.7897 11.7937 19.9048L22.6985 9H11V15.3415C10.3744 15.1203 9.70126 15 9 15C8.65929 15 8.32521 15.0284 8 15.083V6H25.6985L30.6985 1L32.8198 3.12132L3.12132 32.8198L1 30.6985Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M22.0095 18.1743L18.1741 22.0097C18.5886 23.17 19.6973 24.0002 21 24.0002C22.6569 24.0002 24 22.6571 24 21.0002C24 19.6976 23.1697 18.5888 22.0095 18.1743Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M8.18356 32.0002H14V30.0002C14 28.9217 13.6585 27.9229 13.0777 27.1061L8.18356 32.0002Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M26 30.0002C26 27.2388 23.7614 25.0002 21 25.0002C18.2386 25.0002 16 27.2388 16 30.0002V32.0002H26V30.0002Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M29 19V11.1836L32 8.18356V22H26.917C26.9716 21.6748 27 21.3407 27 21C27 20.2987 26.8797 19.6256 26.6585 19H29Z",
            }),
          );
        }
        function c(e) {
          const { off: t } = e,
            o = (0, n._T)(e, ["off"]);
          return t
            ? i.createElement(l, Object.assign({}, o))
            : i.createElement(s, Object.assign({}, o));
        }
        function d(e) {
          const { none: t, partial: o } = e,
            r = (0, n._T)(e, ["none", "partial"]);
          return t
            ? i.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "SVGIcon_Button SVGIcon_ControllerStatus",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  r,
                ),
                i.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : o
              ? i.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    r,
                  ),
                  i.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  i.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.5",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : i.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    r,
                  ),
                  i.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
        }
        function p(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Minimize",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            i.createElement("path", {
              d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
              fill: "currentColor",
            }),
          );
        }
        function h(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_TheaterMode",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            i.createElement("path", {
              fill: "currentColor",
              d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
            }),
          );
        }
      },
      2477: (e, t, o) => {
        "use strict";
        o.d(t, { Q: () => l });
        var n = o(655),
          i = o(1569),
          r = o(328),
          a = o(4820);
        const s = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new r.fH(this, a.Al)),
              (this.m_Steam_Client = new r.q0(this)),
              (this.m_Steam_ClientMethods = new a.x2(this.m_Steam_Client)),
              (this.m_mailbox = new i.Nv()),
              (this.m_unNextVRGamepadUIMessageId = 1);
          }
          get Steam() {
            return this.m_Steam_ClientMethods;
          }
          get SteamVR() {
            return this.m_SteamVR_Provider;
          }
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.m_mailbox.Init("vrgamepadui_messages"),
                this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                  const t = (0, r.u8)(e.header);
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
            if (!this.m_mailbox.connected) return r.n5.SendFailure;
            let o, n;
            try {
              o = a.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return r.n5.HeaderSerializationFailure;
            }
            try {
              n = t.serializeBase64String();
            } catch (e) {
              return r.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: o,
                payload: n,
              });
            } catch (e) {
              return r.n5.SendFailure;
            }
            return r.n5.Success;
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
  function n(e) {
    var i = o[e];
    if (void 0 !== i) return i.exports;
    var r = (o[e] = { id: e, exports: {} });
    return t[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, o, i, r) => {
      if (!o) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, i, r] = e[d], s = !0, l = 0; l < o.length; l++)
            (!1 & r || a >= r) && Object.keys(n.O).every((e) => n.O[e](o[l]))
              ? o.splice(l--, 1)
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
      e[d] = [o, i, r];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
    (n.j = 381),
    (() => {
      var e = { 381: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var i,
            r,
            [a, s, l] = o,
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) var d = l(n);
          }
          for (t && t(o); c < a.length; c++)
            (r = a[c]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return n.O(d);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })(),
    (n.nc = void 0);
  var i = n.O(void 0, [968, 683], () => n(1176));
  i = n.O(i);
})();
//# sourceMappingURL=controllerbindingui.js.map?v=7ba767f95c6b56ee6193
