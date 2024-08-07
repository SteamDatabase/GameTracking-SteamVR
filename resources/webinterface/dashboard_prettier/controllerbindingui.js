/*! For license information please see controllerbindingui.js.LICENSE.txt */
(() => {
  var e,
    t = {
      1569: (e, t, n) => {
        "use strict";
        n.d(t, {
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
          Nv: () => o.N,
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
          ZP: () => I.ZP,
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
          sl: () => d.s,
          tS: () => i.tS,
          vS: () => I.vS,
          wU: () => k.wU,
          wx: () => c.w,
          x1: () => g.x,
          xY: () => k.xY,
          xj: () => u.x,
          zA: () => k.zA,
          zq: () => k.zq,
        });
        var o = n(4671),
          i = n(4727),
          r = n(7500),
          a = n(2071),
          s = n(6626),
          l = n(751),
          d = n(8116),
          c = n(390),
          p = (n(8257), n(233)),
          h = (n(7313), n(6765)),
          u = (n(491), n(171), n(8811)),
          m = n(5157),
          g = n(5486),
          _ = (n(5829), n(7973)),
          v = n(2214),
          S = (n(5627), n(3841), n(2467), n(7996), n(1364), n(5146)),
          y = n(163),
          b = n(2109),
          f = n(8221),
          C = (n(684), n(9481)),
          k = n(5867),
          I = n(7074);
        const E = VRHTML;
      },
      1364: (e, t, n) => {
        "use strict";
        n(7294), n(7313);
      },
      7996: (e, t, n) => {
        "use strict";
        var o = n(7294);
        n(7074), n(390), o.Component;
      },
      2071: (e, t, n) => {
        "use strict";
        n.d(t, { Y: () => d });
        var o = n(655),
          i = n(7294),
          r = n(7313),
          a = n(7056),
          s = n(233),
          l = n(8116);
        class d extends r.Mo {
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
            var n;
            const o = this.createSgNode(t);
            return (
              (o.properties.tab_name =
                null !== (n = this.props.tabName) && void 0 !== n ? n : ""),
              (o.properties.mountable_id = (0, s.Hb)(
                this.m_sMountableUnqualifiedID,
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
                this.props.children,
              ),
            );
          }
        }
        (0, o.gn)([a.ZP], d.prototype, "buildNode", null);
      },
      5146: (e, t, n) => {
        "use strict";
        n.d(t, { e: () => a });
        var o = n(655),
          i = n(7313),
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
      3841: (e, t, n) => {
        "use strict";
        var o;
        n(7294),
          n(7313),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(o || (o = {}));
      },
      163: (e, t, n) => {
        "use strict";
        n.d(t, { s: () => r });
        var o = n(7294),
          i = n(7313);
        class r extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, i.Kg)(this.props.transform.translation),
              t = (0, i.xs)(this.props.transform.rotation),
              n = (0, i.Kg)(this.props.transform.scale);
            return o.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.parent_path,
                translation: e,
                rotation: t,
                scale: n,
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
      2467: (e, t, n) => {
        "use strict";
        n(7294), n(7313);
      },
      5486: (e, t, n) => {
        "use strict";
        n.d(t, { x: () => r });
        var o = n(7294),
          i = n(7313);
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
      5627: (e, t, n) => {
        "use strict";
        n(7294), n(7313);
      },
      5157: (e, t, n) => {
        "use strict";
        n.d(t, { b: () => a });
        var o = n(655),
          i = n(7313),
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
              (n.properties["target-id"] = this.props.target_id),
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
      2109: (e, t, n) => {
        "use strict";
        n.d(t, { k: () => r });
        var o = n(7294),
          i = n(7313);
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
              this.props.children,
            );
          }
        }
      },
      8116: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => s, s: () => l });
        var o = n(655),
          i = n(7313),
          r = n(7056),
          a = n(233);
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
      751: (e, t, n) => {
        "use strict";
        n.d(t, { D: () => a });
        var o = n(655),
          i = n(7313),
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
      2214: (e, t, n) => {
        "use strict";
        n.d(t, {
          Bl: () => a,
          Ic: () => o,
          Ko: () => r,
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
          d = n(7313),
          c = n(6765),
          p = n(7056),
          h = n(233);
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
        class g extends d.Mo {
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
              n = void 0 !== this.props.meters_per_pixel,
              o = void 0 !== this.props.target_dpi_panel_id,
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
            const r = [t, n, o, i].filter((e) => e).length,
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
              (this.m_nEmbeddedIndex = c.n.Current().addEmbeddedPanelUVs(this)),
              (g.s_bPanelsAreDirty = !0),
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
              (g.s_bPanelsAreDirty = !0),
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
            let l = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              c = this.createSgNode(t),
              p = { x: 0, y: 0 };
            p =
              "object" == typeof this.props.origin
                ? (0, d.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const g = this.props.overlay_key,
              _ = (0, h.Gv)();
            return (
              g && g.length > 0
                ? (c.properties.key = g)
                : _
                ? (c.properties.key = _)
                : (c.properties.overlay_handle = (0, h.Mb)()),
              (c.properties.uv_min =
                null !== (n = u(this.m_UVsMin)) && void 0 !== n ? n : void 0),
              (c.properties.uv_max =
                null !== (o = u(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (c.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (c.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (c.properties["min-width"] =
                null !== (s = this.props.min_width) && void 0 !== s
                  ? s
                  : void 0),
              (c.properties["target-width-anchor-id"] = (0, h.Hb)(
                this.props.target_width_anchor_id,
              )),
              (c.properties["target-dpi-panel-id"] = (0, h.Hb)(
                this.props.target_dpi_panel_id,
              )),
              (c.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (c.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (c.properties["subview-parent-panel-id"] = (0, h.Hb)(
                this.props.subview_parent_panel_id,
              )),
              (c.properties.curvature = this.props.curvature),
              (c.properties["curvature-origin-id"] = (0, h.Hb)(
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
              (c.properties.origin = (0, d.D1)(p)),
              (c.properties.debug_name = this.props.debug_name),
              (c.properties.sampler = this.props.sampler),
              (c.properties.reflect = this.props.reflect),
              (c.properties.stereoscopy = this.props.stereoscopy),
              (c.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (c.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (c.properties["texture-id"] = (0, h.Hb)(this.props.texture_id)),
              (c.properties["sort-order"] = this.props.sort_order),
              (c.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              [l, c]
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
      7973: (e, t, n) => {
        "use strict";
        n.d(t, { a: () => s });
        var o = n(655),
          i = n(7313),
          r = n(2214),
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
            if (!e.currentPanel && !e.bInsideReparentedPanel)
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
                i =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (o.properties["anchor-u"] = i.u),
                (o.properties["anchor-v"] = i.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
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
                d = n.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (o.properties["anchor-u"] = r / l),
                (o.properties["anchor-v"] = a / d);
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
      5829: (e, t, n) => {
        "use strict";
        n(7294), n(7313);
      },
      8811: (e, t, n) => {
        "use strict";
        n.d(t, { g: () => l, x: () => o });
        var o,
          i = n(655),
          r = n(7313),
          a = n(7056),
          s = n(233);
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
                this.props["texture-id"],
              )),
              (n.properties["input-path"] = this.props["input-path"]),
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
              (n.properties.stencil_mask = this.props.stencil_mask),
              (n.properties["no-depth-write"] = this.props["no-depth-write"]),
              (n.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, n]
            );
          }
        }
        (0, i.gn)([a.ZP], l.prototype, "buildNode", null);
      },
      9481: (e, t, n) => {
        "use strict";
        n.d(t, { S: () => a });
        var o = n(655),
          i = n(7313),
          r = n(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "reparent-to-panel";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t),
              o = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !0,
                currentPanel: null,
              });
            return (
              this.props.parent_overlay_key &&
                (n.properties["parent-overlay-key"] =
                  this.props.parent_overlay_key),
              [o, n]
            );
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      8221: (e, t, n) => {
        "use strict";
        n.d(t, { k: () => a });
        var o = n(655),
          i = n(7313),
          r = n(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "resize-handle";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties["target-id"] = this.props.target_id),
              (n.properties["min-target-scale"] = this.props.min_target_scale),
              (n.properties["max-target-scale"] = this.props.max_target_scale),
              [e, n]
            );
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      6765: (e, t, n) => {
        "use strict";
        n.d(t, { n: () => d });
        var o,
          i = n(655),
          r = n(7294),
          a = n(2214),
          s = n(7056),
          l = n(233);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(o || (o = {}));
        class d extends r.Component {
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
                  ? o.Canvas
                  : o.Image,
              }),
              (this.m_DomRef = r.createRef()),
              (this.m_scalingDomRef = r.createRef()),
              (this.m_CanvasRef = r.createRef()),
              (this.m_EmbeddedDataImgRef = r.createRef()),
              (this.m_DebugPointerRef = r.createRef());
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
            let n = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
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
            const e = this.state.eRenderMode == o.Image,
              t = this.state.eRenderMode == o.Canvas;
            let n = [];
            return (
              this.state.bShowDebugPointer && n.push("ShowDebugPointer"),
              r.createElement(
                "vsg-app",
                {
                  class: n.join(" "),
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
                    height: d.k_EmbeddedDataRows,
                  }),
                t &&
                  r.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
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
            this.state.eRenderMode == o.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == o.Canvas &&
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
              n = t.width / this.m_fCurrentScale,
              o = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / n, y: e.innerHeight / o },
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
                  let n = e.m_Rect.x,
                    o = e.m_Rect.x + e.m_Rect.width,
                    i = e.m_Rect.y,
                    r = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || n >= o || i >= r)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & n) >> 8, 255 & n, 0),
                      this.setPixel(a + 1, (65280 & o) >> 8, 255 & o, 255 & i),
                      this.setPixel(
                        a + 2,
                        (65280 & r) >> 8,
                        255 & r,
                        (65280 & i) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == o.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == o.Canvas
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
          setPixel(e, t, n, i, r = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == o.Image
            ) {
              const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              o.setUint8(4 * e + 0, t),
                o.setUint8(4 * e + 1, n),
                o.setUint8(4 * e + 2, i),
                o.setUint8(4 * e + 3, r);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == o.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = n),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = r),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, i.gn)([s.ak], d.prototype, "toggleDebugPointer", null),
          (0, i.gn)([s.ak], d.prototype, "onMouseMove", null),
          (0, i.gn)([s.ak], d.prototype, "forceLayoutUpdate", null),
          (0, i.gn)([s.ak], d.prototype, "onMutation", null);
      },
      7313: (e, t, n) => {
        "use strict";
        n.d(t, {
          D1: () => d,
          Kg: () => c,
          Mo: () => h,
          QE: () => a,
          Uq: () => s,
          kh: () => l,
          xs: () => p,
        });
        var o = n(7294),
          i = n(5867),
          r = n(233);
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
        function p(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class h extends o.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = o.createRef()),
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
      },
      233: (e, t, n) => {
        "use strict";
        n.d(t, {
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
        var o = n(655),
          i = n(4671);
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
        function d(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return n;
        }
        function c(e, t) {
          return I(d(e, t));
        }
        function p(e, t) {
          let n = { type: e, properties: {} };
          return (
            t.id && (n.properties.id = I(t.id)),
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
                    (i.properties["transform-path"] = d(t, "transform-path")),
                    (i.properties["invert-parent-panel-pitch"] = l(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (i.properties["parent-path"] = d(t, "parent-path")),
                    (i.properties["parent-origin"] = d(t, "parent-origin")),
                    (i.properties["parent-id"] = c(t, "parent-id"));
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
                    (i.properties["target-id"] = c(t, "target-id")),
                    (i.properties.thickness = a(t, "thickness")),
                    (i.properties["start-buffer"] = a(t, "start-buffer")),
                    (i.properties["end-buffer"] = a(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (i = p("line-constrained-transform", t)),
                    (i.properties["target-id"] = c(t, "target-id")),
                    (i.properties["source-id"] = c(t, "source-id")),
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
                    (i.properties["parent-path"] = d(t, "parent-path")),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (i = p("grab-transform", t)),
                    (i.properties["parent-path"] = d(t, "parent-path")),
                    (i.properties.translation = r(t, "translation")),
                    (i.properties.rotation = r(t, "rotation")),
                    (i.properties.scale = r(t, "scale")),
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
                    (i.properties["lerp-speed"] = a(t, "lerp-speed"));
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
          f = null;
        function C(e, t, n) {
          (m = e),
            (g = t),
            (_ = n),
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
          var t, n;
          (n = e),
            (null == (t = f) || null == n
              ? t == n
              : t.color_mult == n.color_mult &&
                t.reflection_mult == n.reflection_mult &&
                t.roomview_mult.toString() == n.roomview_mult.toString() &&
                t.allow_skydome == n.allow_skydome) || ((f = e), T());
        }
        function T() {
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
                  let n = {
                    type: "update_scene_graph",
                    owning_overlay_key: E(),
                    scene_graph: t,
                    retired_sgids: S,
                  };
                  b.SendMessage("vrcompositor_systemlayer", n),
                    (y = null),
                    (S = []),
                    (v = !1);
                }),
              0,
            ));
        }
      },
      491: (e, t, n) => {
        "use strict";
        var o = n(655),
          i = n(7313),
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
      171: (e, t, n) => {
        "use strict";
        var o = n(655),
          i = n(7313),
          r = n(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            if (
              ((n.properties["tile-size"] = this.props["tile-size"]),
              (n.properties["tile-gap"] = this.props["tile-gap"]),
              (n.properties["inner-radius"] = this.props["inner-radius"]),
              (n.properties["outer-radius"] = this.props["outer-radius"]),
              (n.properties["fade-distance"] = this.props["fade-distance"]),
              (n.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (n.properties.height = this.props.height),
              (n.properties.offset = [
                this.props.offset.x,
                this.props.offset.y,
              ]),
              "string" == typeof this.props.color)
            )
              n.properties.color = this.props.color;
            else if (this.props.color) {
              let e = (0, i.kh)(this.props.color, { r: 0, g: 0, b: 0 });
              n.properties.color = [e.r, e.g, e.b];
            }
            return (
              (n.properties["center-randomization"] =
                this.props["center-randomization"]),
              (n.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (n.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"]),
              (n.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (n.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"]),
              (n.properties["normal-randomization-degrees"] =
                this.props["normal-randomization-degrees"]),
              this.props.chevron &&
                ((n.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (n.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (n.properties["auto-subdivide"] = this.props["auto-subdivide"]),
              [e, n]
            );
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      6626: (e, t, n) => {
        "use strict";
        n.d(t, { V: () => a });
        var o = n(655),
          i = n(7313),
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
      8257: (e, t, n) => {
        "use strict";
        n(7294), n(7313);
      },
      390: (e, t, n) => {
        "use strict";
        n.d(t, { w: () => s });
        var o,
          i = n(7294),
          r = n(7313),
          a = n(4727);
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
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            let e, t, n;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (n = this.props.transform.scale))
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
              d = (0, r.Kg)(n);
            return i.createElement(
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
                "parent-origin": o[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
      },
      684: (e, t, n) => {
        "use strict";
        var o = n(655),
          i = n(7313),
          r = n(7056);
        class a extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "videocapturequad";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties.width = this.props.width),
              (n.properties.height = this.props.height),
              (n.properties["target-id"] = this.props.target_id),
              (n.properties["near-z"] = this.props["near-z"]),
              (n.properties["far-z"] = this.props["far-z"]),
              (n.properties.debug = this.props.debug),
              [e, n]
            );
          }
        }
        (0, o.gn)([r.ZP], a.prototype, "buildNode", null);
      },
      4727: (e, t, n) => {
        "use strict";
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
        function d(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function c(e) {
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
            d = Math.sin(o);
          return {
            w: i * r * a + s * l * d,
            x: s * r * a + i * l * d,
            y: i * l * a - s * r * d,
            z: i * r * d - s * l * a,
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
          let t = c(e);
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
          JR: () => d,
          LY: () => c,
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
      7500: (e, t, n) => {
        "use strict";
        n.d(t, { h: () => r });
        var o = n(655),
          i = n(4671);
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
                    "transform_response",
                  );
                r.id == e && r.transform
                  ? n(r.transform)
                  : i("requestSGTransform failed");
              }),
            );
          }
        }
      },
      4671: (e, t, n) => {
        "use strict";
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
                "Connecting vrmailbox " + this.m_sMailboxName + "...",
              );
              let n = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (n += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(n)),
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
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(e), !0)
            );
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
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (n = !0);
            }
            n || console.log("Received unhandled message: ", t);
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
                "mailbox_registered",
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
      5867: (e, t, n) => {
        "use strict";
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
          qA: () => o,
          qC: () => m,
          qR: () => g,
          wU: () => d,
          xY: () => v,
          zA: () => M,
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
          d = 0,
          c = -1;
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
              (e[(e.EnableControlBar = 8388608)] = "EnableControlBar"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.EnableSteamUIButtons = 67108864)] = "EnableSteamUIButtons");
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
      7074: (e, t, n) => {
        "use strict";
        var o, i, r, a, s, l, d;
        n.d(t, { Uk: () => o, ZP: () => r, sH: () => a, vS: () => s }),
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
          })(o || (o = {})),
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
          })(d || (d = {}));
      },
      5928: (e, t, n) => {
        "use strict";
        n.d(t, { L: () => f });
        var o,
          i = n(655),
          r = n(7294),
          a = n(7056),
          s = n(3568),
          l = n(1569),
          d = n(9809),
          c = n(5211),
          p = n(2893),
          h = n(7062),
          u = n(2188),
          m = n(8242),
          g = n(3010);
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
                }),
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
                (0, s.Xx)(e),
              ),
              r.createElement(
                "div",
                { className: "TriggerBarBackground" },
                r.createElement("div", {
                  className: "TriggerBarContent",
                  style: o,
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
                n = this.m_svgRef.current.children.namedItem("SourceCircle"),
                i = this.props.side == o.Right,
                r = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new c.E9(0, r.top + r.height / 2);
              l.x = i ? a.left - 10 : a.right + 10;
              let d = i ? -20 : 20,
                p = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", p);
              let h = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
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
                    d.I.LocalizeControllerString(
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
                    r.createElement(p.Z, { onReflow: this.OnImageReflow }),
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
              d = a.sort((e, t) => e.order - t.order);
            for (let n of d) {
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
            return d.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
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
                  (0, s.Xx)("#TestController_NoController"),
                ),
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
                }),
            );
          }
        };
        (0, i.gn)([a.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, i.gn)([a.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, i.gn)([h.Pi], f));
      },
      9671: (e, t, n) => {
        "use strict";
        n.d(t, { V: () => d });
        var o = n(655),
          i = n(7294),
          r = n(7056),
          a = n(3568),
          s = n(1569);
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
              for (let n of e.pressed)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n,
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
              for (let n of e.touched)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n,
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
              for (let n of e.supported_buttons)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n,
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
            for (let n of e.axis)
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  n.x.toFixed(2),
                  " Y: ",
                  n.y.toFixed(2),
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
        (0, o.gn)([r.ak], l.prototype, "OnLegacyInputFrame", null);
        class d extends i.Component {
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
      792: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => l });
        var o = n(655),
          i = n(7056),
          r = n(2188),
          a = n(1628);
        class s {
          Init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.Load(), (0, r.EH)(() => this.Save());
            });
          }
          Load() {
            var e, t, n, i, r;
            return (0, o.mG)(this, void 0, void 0, function* () {
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
                    (n = a.G3.settings.get(
                      "/settings/steamvr/backgroundDomeRadius",
                    )) && void 0 !== n
                    ? n
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
            return (0, o.mG)(this, void 0, void 0, function* () {});
          }
        }
        (0, o.gn)([r.LO], s.prototype, "m_bShowFloor", void 0),
          (0, o.gn)([r.LO], s.prototype, "m_bShowFloorFar", void 0),
          (0, o.gn)([r.LO], s.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, o.gn)([r.LO], s.prototype, "m_fBackgroundOffsetX", void 0),
          (0, o.gn)([r.LO], s.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, o.gn)([i.ak], s.prototype, "Load", null),
          (0, o.gn)([i.ak], s.prototype, "Save", null);
        const l = new s();
        window.ConstructStore = l;
      },
      5328: (e, t, n) => {
        "use strict";
        n.d(t, { O: () => d });
        var o = n(655),
          i = n(7056),
          r = n(2188),
          a = n(2477),
          s = n(2758);
        class l {
          constructor() {
            this.m_mapActiveDashboardPopupRequests = new Map();
          }
          GetActiveDashboardPopups() {
            return Array.from(this.m_mapActiveDashboardPopupRequests.values());
          }
          Init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, r.EH)(() => this.SaveSessionDevData()),
                a.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
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
            return (0, o.mG)(this, void 0, void 0, function* () {
              const n = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              for (const e of null !== (t = n.m_rgDashboardPopups) &&
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
            return (0, o.mG)(this, void 0, void 0, function* () {
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
          (0, o.gn)(
            [r.LO],
            l.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0,
          ),
          (0, o.gn)([i.ak], l.prototype, "LoadSessionDevData", null),
          (0, o.gn)([i.ak], l.prototype, "SaveSessionDevData", null);
        const d = new l();
        window.DashboardPopupStore = d;
      },
      9626: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => m, J: () => h });
        var o = n(655),
          i = n(1569),
          r = n(7056),
          a = n(2188),
          s = n(8178),
          l = n(1628),
          d = n(7176),
          c = n(7373),
          p = n(2758);
        const h = ["system.dashboard.quicklaunch", void 0].filter(Boolean);
        class u {
          constructor() {
            (this.m_bDarkMode = !1),
              (this.m_eTheaterStereo = i.Ko.Mono),
              (this.m_eIncognitoMode = i.Qu.Unavailable),
              (this.m_mapOverlayState = new Map()),
              (this.m_setOverlaysViewedThisSession = new Set()),
              (this.m_mapActiveDashboardPopupRequests = new Map()),
              (this.m_mapTabIdForSummonKey = new Map()),
              (this.m_mapSummonKeyForTabId = new Map()),
              (this.m_unNextTabId = 1);
          }
          Init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, a.EH)(() => this.SaveSessionDevData()),
                (0, a.EH)(this.updateBodyClasses);
            });
          }
          LoadSessionDevData() {
            var e, t, n, i, r;
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(u.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bShowLegacyBar =
                null !== (t = o.m_bShowLegacyBar) && void 0 !== t && t),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (n = o.m_fVRGamepadUI_MetersPerPixel) && void 0 !== n
                    ? n
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (i = o.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== i
                    ? i
                    : 1.17);
              for (const e of null !== (r = o.m_rgDashboardPopups) &&
              void 0 !== r
                ? r
                : [])
                this.m_mapActiveDashboardPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, o.mG)(this, void 0, void 0, function* () {
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
                u.k_strSessionStorageKey,
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
              this.m_eTheaterStereo == i.Ko.Mono ? i.Ko.Parallel : i.Ko.Mono;
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
              p.U.BOverlayExists(d.T2) ||
              p.U.BOverlayExists(d.BZ)
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
        (u.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
          (0, o.gn)([a.LO], u.prototype, "m_bShowLegacyBar", void 0),
          (0, o.gn)([a.LO], u.prototype, "m_bDarkMode", void 0),
          (0, o.gn)([a.LO], u.prototype, "m_eTheaterStereo", void 0),
          (0, o.gn)([a.LO], u.prototype, "m_eIncognitoMode", void 0),
          (0, o.gn)([a.LO], u.prototype, "m_mapOverlayState", void 0),
          (0, o.gn)(
            [a.LO],
            u.prototype,
            "m_setOverlaysViewedThisSession",
            void 0,
          ),
          (0, o.gn)(
            [a.LO],
            u.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0,
          ),
          (0, o.gn)(
            [a.LO],
            u.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, o.gn)(
            [a.LO],
            u.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, o.gn)([r.ak], u.prototype, "LoadSessionDevData", null),
          (0, o.gn)([r.ak], u.prototype, "SaveSessionDevData", null),
          (0, o.gn)([a.Fl], u.prototype, "eTheaterScreen", null),
          (0, o.gn)([a.Fl], u.prototype, "isVRGamepadUI", null),
          (0, o.gn)([a.Fl], u.prototype, "isVRGamepadUIViaGamescope", null),
          (0, o.gn)([r.ak], u.prototype, "updateBodyClasses", null);
        const m = new u();
        window.DashboardStore = m;
      },
      1176: (e, t, n) => {
        "use strict";
        var o = n(655),
          i = n(7294),
          r = n(3935),
          a = n(7062),
          s = n(3365),
          l = (n(1783), n(1569)),
          d = n(8980),
          c = n(3568),
          p = n(5211),
          h = n(7056),
          u = n(8048),
          m = n(2893),
          g = n(2188),
          _ = n(1114),
          v = n(8155),
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
                    (0, c.Xx)(
                      "#BindingUI_Mode_Delete_Confirm",
                      (0, c.Xx)(
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
                      (0, c.Xx)("#Button_Delete"),
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, c.Xx)("#Button_Cancel"),
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
                  (0, c.Xx)(
                    "#SourceInputMode_UseAs",
                    (0, c.Xx)(
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
            let n = t.map(
              (e, t) =>
                new v.GZ(
                  e,
                  (0, c.Xx)("#SourceInputMode_" + e),
                  null,
                  (0, c.Xx)("#SourceInputMode_" + e + "_tooltip"),
                ),
            );
            n.push(new v.GZ("none", (0, c.Xx)("#SourceInputMode_none")));
            let o =
                e.GetButtonSide == p.ik.eButtonSide_Left
                  ? "#BindingUI_LeftHandController"
                  : "#BindingUI_RightHandController",
              r = p.c6.SelectedControllerTypeLocalizedName;
            e.GetButtonSide != p.ik.eButtonSide_None &&
              (r = (0, c.Xx)(o, r, ""));
            let a = (0, c.Xx)(
              "#SourceInputMode_SelectMode",
              r,
              e.GetControllerInputName,
            );
            return i.createElement(
              "div",
              { className: "FlexRow BindingHeaderWrapper" },
              i.createElement(v.vs, {
                sModalTitleString: a,
                vecOptions: n,
                sValueSelectedItem: e.GetMode(this.props.iMode),
                bShowOptionsOnStart: this.props.bShowModeOptionsDropDownOnStart,
                sLocalizedSelectedItem: (0, c.Xx)(
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
                  ? (0, c.Xx)("#SourceInputAction_none")
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
                    content: (0, c.Xx)(
                      this.props.sLocalizedInputType + "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "div",
                    { className: o },
                    (0, c.Xx)(this.props.sLocalizedInputType),
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
                    { className: o + " BindingLabelAction" },
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
                        n.default.toString(),
                      ),
                        e.SetParameter(
                          this.props.iMode,
                          n.mode,
                          n.property,
                          n.default.toString(),
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
                e,
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
                      t.toString(),
                    );
                  });
                break;
              }
            n ||
              console.log(
                "Tried to set property %s which is not in the property map.",
                e,
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
              e.push(new v.GZ("none", (0, c.Xx)("#SourceInputAction_none")));
          }
          AddBlankItem(e) {
            e.push(new v.GZ("-blank", ""));
          }
          AddNoActionsItem(e) {
            e.push(
              new v.GZ("-nonitem", (0, c.Xx)("#SourceInputAction_NoItems")),
            );
          }
          AddHeaderItem(e, t) {
            e.push(new v.GZ("-subHeader", (0, c.Xx)(t)));
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
              this.GetActionDropDownItem(e),
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
              this.GetActionDropDownItem(e),
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
              this.GetActionDropDownItem(e),
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
              this.GetActionDropDownItem(e),
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
              this.GetActionDropDownItem(e),
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
              this.GetActionDropDownItem(e),
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
              this.GetActionDropDownItem(e),
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
                  " (" + (0, c.Xx)("#BindingUI_SelectAction_Required") + ")"),
              new v.GZ(e.name, n, t)
            );
          }
        }
        (0, o.gn)([h.ak], f.prototype, "onPropertyChanged", null),
          (0, o.gn)([h.ak], f.prototype, "onPropertyReset", null),
          (0, o.gn)([h.ak], f.prototype, "OnEdit", null),
          (0, o.gn)([h.ak], f.prototype, "OnShowModeSettings", null),
          (0, o.gn)([h.ak], f.prototype, "CloseModeSettings", null),
          (0, o.gn)([h.ak], f.prototype, "renderFooter", null),
          (0, o.gn)([h.ak], f.prototype, "renderHeader", null),
          (0, o.gn)([g.Fl], f.prototype, "WrapperClasses", null);
        p.NK.eTrackPadInvert_None;
        class C extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                S.ZP,
                {
                  content: (0, c.Xx)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, c.Xx)(this.props.labelName),
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
                  (0, c.Xx)("#SourceInputMode_ResetParameterToDefault"),
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
                  content: (0, c.Xx)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, c.Xx)(this.props.labelName),
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
                (0, c.Xx)("#SourceInputMode_ResetParameterToDefault"),
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
                  content: (0, c.Xx)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, c.Xx)(this.props.labelName),
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
                (0, c.Xx)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        }
        let E = class extends f {
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
                return (0, c.Xx)("#SourceInputMode_Click");
              case "value":
                return (0, c.Xx)("#SourceInputMode_Pull");
              case "force":
                return (0, c.Xx)("#SourceInputMode_Force");
              case "":
                return (0, c.Xx)("#SourceInputMode_Default");
            }
            return (0, c.Xx)("#SourceInputMode_Default");
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
                new v.GZ("click", this.LocalizeForceInputModeString("click")),
              ),
              o.value &&
                r.push(
                  new v.GZ("value", this.LocalizeForceInputModeString("value")),
                ),
              o.force &&
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
                (n = [
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
                      (0, c.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
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
                  (0, c.Xx)("#Button_Close"),
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
        (0, o.gn)([h.ak], E.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], E.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([g.Fl], E.prototype, "BShowClickOptions", null),
          (0, o.gn)([g.Fl], E.prototype, "BShowTouchOptions", null),
          (E = (0, o.gn)([a.Pi], E));
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
                return (0, c.Xx)("#SourceInputMode_Click");
              case "value":
                return (0, c.Xx)("#SourceInputMode_Pull");
              case "force":
                return (0, c.Xx)("#SourceInputMode_Force");
              case "position":
                return (0, c.Xx)("#SourceInputMode_Position");
              case "":
                return (0, c.Xx)("#SourceInputMode_Default");
            }
            return (0, c.Xx)("#SourceInputMode_Default");
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
              d = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (d = this.nextUniqueId()),
              s &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(C, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: d,
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
                    elementId: d,
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
                    elementId: d,
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
                    elementId: d,
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
                (n = [
                  i.createElement(k, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: d,
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
                    elementId: d,
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
                      (0, c.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                n,
                a.length > 1 &&
                  i.createElement(I, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: d,
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
                  elementId: d,
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
                  elementId: d,
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
                  elementId: d,
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
                      elementId: d,
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
                      elementId: d,
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
                o.GetInputSourceTouchSupport &&
                  i.createElement(k, {
                    key: "touchy_click",
                    labelName: "#SourceInputMode_TouchyClick",
                    elementId: d,
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
                  (0, c.Xx)("#Button_Close"),
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
                    }),
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
                    (0, c.Xx)("#SourceInputMode_MoreOptions"),
                  ),
                ),
              this.renderFooter(),
            );
          }
        };
        (0, o.gn)([g.Fl], M.prototype, "IsComplex", null),
          (0, o.gn)([g.Fl], M.prototype, "BShowClickOptions", null),
          (0, o.gn)([g.Fl], M.prototype, "BShowTouchOptions", null),
          (0, o.gn)([g.Fl], M.prototype, "RInputOptions", null),
          (0, o.gn)([h.ak], M.prototype, "OnHeldActionChanged", null),
          (0, o.gn)([h.ak], M.prototype, "OnLongActionChanged", null),
          (0, o.gn)([h.ak], M.prototype, "OnSingleActionChanged", null),
          (0, o.gn)([h.ak], M.prototype, "OnDoubleActionChanged", null),
          (0, o.gn)([h.ak], M.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], M.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], M.prototype, "OnToggleComplex", null),
          (M = (0, o.gn)([a.Pi], M));
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
                      (0, c.Xx)("#BindingSettingsModal_Title"),
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
                  (0, c.Xx)("#Button_Close"),
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
        (0, o.gn)([h.ak], R.prototype, "OnHeldActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnLongActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnSingleActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnDoubleActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnTouchActionChanged", null),
          (R = (0, o.gn)([a.Pi], R));
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
        w = (0, o.gn)([a.Pi], w);
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
                      (0, c.Xx)("#BindingSettingsModal_Title"),
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
                  (0, c.Xx)("#Button_Close"),
                ),
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
                ["dpad", "dpad_click", "dpad_touch"],
              );
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              n = "dpad" == this.props.sMode,
              o = [
                new v.GZ("click", (0, c.Xx)("#SourceInputMode_Click")),
                new v.GZ("touch", (0, c.Xx)("#SourceInputMode_Touch")),
              ],
              r =
                (this.state.sSubMode,
                "click" == this.state.sSubMode
                  ? (0, c.Xx)("#SourceInputMode_Click")
                  : (0, c.Xx)("#SourceInputMode_Touch"));
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
                    (0, c.Xx)("#SourceInputMode_SubMode"),
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
        (0, o.gn)([h.ak], T.prototype, "OnActionChanged", null),
          (T = (0, o.gn)([a.Pi], T));
        let D = class extends f {
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
                      (0, c.Xx)("#BindingSettingsModal_Title"),
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
                  (0, c.Xx)("#Button_Close"),
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
                this.renderFooter(),
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
        let O = class extends f {
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
                return (0, c.Xx)("#SourceInputMode_ScrollMode_Smooth");
              case "discrete":
                return (0, c.Xx)("#SourceInputMode_ScrollMode_Discrete");
            }
            return (0, c.Xx)("#SourceInputMode_Default");
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
                    (0, c.Xx)("#BindingSettingsModal_Title"),
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  !o &&
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
                n &&
                  o &&
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
                n &&
                  o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  !o &&
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
                !n &&
                  o &&
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
                !n &&
                  o &&
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
                !n &&
                  o &&
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
                !n &&
                  o &&
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
                (0, c.Xx)("#Button_Close"),
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
        (0, o.gn)([h.ak], O.prototype, "OnSave", null),
          (0, o.gn)([h.ak], O.prototype, "OnScrollActionChanged", null),
          (O = (0, o.gn)([a.Pi], O));
        let B = class extends f {
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
                this.renderFooter(),
              )
            );
          }
        };
        (0, o.gn)([h.ak], B.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], B.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], B.prototype, "OnPullActionChanged", null),
          (B = (0, o.gn)([a.Pi], B));
        let x = class extends f {
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
        (0, o.gn)([h.ak], x.prototype, "OnForceActionChanged", null),
          (x = (0, o.gn)([a.Pi], x));
        let A = class extends f {
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
              e.toString() + " " + (0, c.Xx)("#MetersPerSecond_Abbreviation")
            );
          }
          renderSettingsContent() {
            let e = this.props.controllerWatcher[0],
              t = "pinch" == e.GetInputSourceType,
              n = (0, c.Xx)(
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
                      (0, c.Xx)("#BindingSettingsModal_Title"),
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
                        (0, c.Xx)("#SourceInputMode_Force"),
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
                        (0, c.Xx)("#SourceInputMode_Force"),
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
                    (0, c.Xx)(
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
                  (0, c.Xx)("#Button_Close"),
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
        (0, o.gn)([h.ak], A.prototype, "OnGrabActionChanged", null),
          (A = (0, o.gn)([a.Pi], A));
        let P = class extends f {
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
                    (0, c.Xx)("#BindingSettingsModal_Title"),
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
                (0, c.Xx)("#Button_Close"),
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
                i.createElement(C, {
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
                i.createElement(C, {
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
                i.createElement(C, {
                  labelName: "#SourceInputMode_ScalarOnZ",
                  elementId: n,
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
        (0, o.gn)([h.ak], P.prototype, "OnValueActionChanged", null),
          (P = (0, o.gn)([a.Pi], P));
        var V = n(9809);
        let N = class extends i.Component {
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
                return i.createElement(D, Object.assign({}, e));
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
                return i.createElement(O, Object.assign({}, e));
              case "trigger":
                return i.createElement(B, Object.assign({}, e));
              case "force_sensor":
                return i.createElement(x, Object.assign({}, e));
              case "grab":
                return i.createElement(A, Object.assign({}, e));
              case "scalar_constant":
                return i.createElement(P, Object.assign({}, e));
              default:
                return i.createElement(w, Object.assign({}, e));
            }
          }
        };
        (0, o.gn)([h.ak], N.prototype, "OnEdit", null),
          (N = (0, o.gn)([a.Pi], N));
        class L {
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
              let d = new p.E9(0, a.top - s.top);
              d.x = i ? a.left - 10 : a.right + 10;
              let c = i ? -20 : 20,
                h = d.x + c + "," + d.y + " " + l.x + "," + l.y;
              e.setAttribute("points", h);
              let u = d.x + "," + d.y + " " + (d.x + c) + "," + d.y;
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
                  i.createElement(N, {
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
        (0, o.gn)([h.ak], H.prototype, "AddMode", null),
          (0, o.gn)([h.ak], H.prototype, "BindButtonRef", null),
          (0, o.gn)([h.ak], H.prototype, "BindSVGRef", null),
          (0, o.gn)([h.ak], H.prototype, "UpdateSVGPath", null),
          (0, o.gn)([h.ak], H.prototype, "OnMouseEnter", null),
          (0, o.gn)([h.ak], H.prototype, "OnMouseLeave", null),
          (H = (0, o.gn)([a.Pi], H));
        let F = class extends i.Component {
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
                !V.I.ShowHiddenInputs
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
        F = (0, o.gn)([a.Pi], F);
        let G = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              this.props.bSingleMode
                ? (this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new L(0, 0, 0, 0),
                    ptRightController: new L(0, 0, 0, 0),
                  })
                : this.props.selectedActionSet &&
                  "single" != this.props.selectedActionSet.usage
                ? ((this.state = {
                    bMirrorBinding: !1,
                    ptLeftController: new L(0, 0, 0, 0),
                    ptRightController: new L(0, 0, 0, 0),
                  }),
                  this.props.fnSetMirroredMode(!1))
                : this.props.selectedActionSet &&
                  ((this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new L(0, 0, 0, 0),
                    ptRightController: new L(0, 0, 0, 0),
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
                  p.c6.SelectedControllerTypeInfo.input_source,
                ).forEach((e) => {
                  let o = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      p.ik.eButtonSide_Left,
                      e,
                      n.name,
                    ),
                    i = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      p.ik.eButtonSide_Right,
                      e,
                      n.name,
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
                  new L(o, n, i, t)
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
              d = !1,
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
                (d = !this.props.bReadOnly),
                this.state.bMirrorBinding && (h = p.ik.eButtonSide_Right));
            }
            let u = p.c6.SelectedControllerTypeLocalizedName,
              g = (0, c.Xx)("#BindingUI_LeftHandController", u),
              _ = (0, c.Xx)("#BindingUI_RightHandController", u),
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
                        src: n,
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
                      style: { transform: o },
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
                          content: (0, c.Xx)("#BindingUI_ChordsButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenChordBindingsModal,
                          },
                          (0, c.Xx)("#BindingUI_ChordsButton"),
                        ),
                      ),
                    p.c6.BSelectedActionSetHasPoses &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, c.Xx)("#BindingUI_PosesButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenPoseBindingsModal,
                          },
                          (0, c.Xx)("#BindingUI_PosesButton"),
                        ),
                      ),
                    p.c6.BSelectedActionSetHasHaptics &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, c.Xx)(
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
                          (0, c.Xx)("#BindingUI_HapticsButton"),
                        ),
                      ),
                    p.c6.BSelectedActionSetHasSkeletons &&
                      i.createElement(
                        S.ZP,
                        {
                          content: (0, c.Xx)(
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
                          (0, c.Xx)("#BindingUI_SkeletonButton"),
                        ),
                      ),
                  ),
                  d &&
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
                        (0, c.Xx)("#BindingUI_MirrorMode"),
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
                        (0, c.Xx)("#BindingUI_CompatibilityModeInfo"),
                      ),
                      ": ",
                      (0, c.Xx)("#BindingUI_CompatibilityModeAppearingAsInfo"),
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
                        content: (0, c.Xx)(
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
        (0, o.gn)([h.ak], G.prototype, "ToggleMirrorMode", null),
          (0, o.gn)([h.ak], G.prototype, "UpdatePositionHelper", null),
          (0, o.gn)(
            [h.ak],
            G.prototype,
            "OnUpdateControllerPicturePosition",
            null,
          ),
          (0, o.gn)([h.ak], G.prototype, "BindLeftControllerImage", null),
          (0, o.gn)([h.ak], G.prototype, "BindRightControllerImage", null),
          (G = (0, o.gn)([a.Pi], G)),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Pose = 1)] = "Pose"),
              (e[(e.Haptics = 2)] = "Haptics"),
              (e[(e.Skeleton = 3)] = "Skeleton");
          })(U || (U = {}));
        let W = class extends i.Component {
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
              n = "",
              o = (0, c.Xx)("#SourceInputMode_none"),
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
                  (n = t.name),
                  (o = t.localized_name)),
                "mandatory" == t.requirement &&
                  (r =
                    " (" + (0, c.Xx)("#BindingUI_SelectAction_Required") + ")"),
                new v.GZ(t.name, t.localized_name, r)
              );
            });
            return (
              (null != s && 0 != s.length) ||
                s.push(
                  new v.GZ("-nonitem", (0, c.Xx)("#SourceInputAction_NoItems")),
                ),
              s.unshift(new v.GZ("-subHeader", (0, c.Xx)(t))),
              s.push(new v.GZ("-blank", "")),
              s.push(new v.GZ("none", (0, c.Xx)("#SourceInputMode_none"))),
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
                      sValueSelectedItem: n,
                      sHeaderClass: "PoseActionLabelDropdown",
                      bReadOnly: !1,
                      sLocalizedSelectedItem: o,
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
        (0, o.gn)([h.ak], W.prototype, "BindSVGRef", null),
          (0, o.gn)([h.ak], W.prototype, "BindWrapperElement", null),
          (0, o.gn)([h.ak], W.prototype, "UpdateSVGPath", null),
          (0, o.gn)([h.ak], W.prototype, "OnActionChanged", null),
          (0, o.gn)([h.ak], W.prototype, "OnPoseActionChanged", null),
          (0, o.gn)([h.ak], W.prototype, "OnHapticsActionChanged", null),
          (0, o.gn)([h.ak], W.prototype, "OnSkeletonActionChanged", null),
          (W = (0, o.gn)([a.Pi], W));
        let z = class extends i.Component {
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
                let d = "none";
                if (
                  ("/user/hand/right" == l
                    ? (d = "right")
                    : "/user/hand/left" == l && (d = "left"),
                  a.side && a.side != d)
                )
                  continue;
                let c = l + n,
                  h = "left" == d,
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
                    i.createElement(W, {
                      key: c,
                      InputSource: a,
                      sInputPath: n,
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
                a = (0, c.Xx)("#BindingUI_PoseListTitle");
                break;
              case U.Haptics:
                a = (0, c.Xx)("#BindingUI_HapticsListTitle");
                break;
              case U.Skeleton:
                a = (0, c.Xx)("#BindingUI_SkeletonListTitle");
            }
            return i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement("div", { className: "Label Title AllCaps" }, a),
              s,
            );
          }
        };
        z = (0, o.gn)([a.Pi], z);
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
                  textAnchor: o,
                  filter: "url(#shadow)",
                  x: t.x + r,
                  y: t.y,
                  style: { fill: "black", fontSize: 24 },
                },
                n,
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
                n,
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
        X = (0, o.gn)([a.Pi], X);
        let K = class extends i.Component {
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
              case U.Pose:
                (e = "pose"), (t = (0, c.Xx)("#BindingUI_PoseTitle"));
                break;
              case U.Haptics:
                (e = "vibration"), (t = (0, c.Xx)("#BindingUI_HapticsTitle"));
                break;
              case U.Skeleton:
                (e = "skeleton"), (t = (0, c.Xx)("#BindingUI_SkeletonTitle"));
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
                    a.binding_image_point[1],
                  );
                  n.hasOwnProperty(e.toString()) || (n[e.toString()] = []),
                    n[e.toString()].push(i);
                }
              },
              d = {},
              h = {};
            Object.keys(s.input_source).forEach(l.bind(null, s, d, "left")),
              Object.keys(s.input_source).forEach(l.bind(null, s, h, "right"));
            let u = Object.keys(d).map((e, t) =>
                i.createElement(X, {
                  key: t,
                  vecPosePath: d[e],
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
                  i.createElement(z, {
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
                        style: { transform: n },
                        ref: this.BindLeftControllerImage,
                      }),
                    ),
                  i.createElement(
                    "div",
                    { className: "ControllerImageContainer" },
                    i.createElement("img", {
                      className: "ControllerImage",
                      src: a,
                      style: { transform: o },
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
                (0, c.Xx)("#Button_Close"),
              ),
            );
          }
        };
        (0, o.gn)(
          [h.ak],
          K.prototype,
          "OnUpdateControllerPicturePosition",
          null,
        ),
          (0, o.gn)([h.ak], K.prototype, "BindLeftControllerImage", null),
          (0, o.gn)([h.ak], K.prototype, "BindRightControllerImage", null),
          (0, o.gn)([h.ak], K.prototype, "BindPropsListDiv", null),
          (K = (0, o.gn)([a.Pi], K));
        let q = class extends i.Component {
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
                ),
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
                            (function (e, t, n, o) {
                              let r = t
                                .filter((t) => {
                                  let o = n.inputs.filter(
                                    (e) => e[0] == t.path,
                                  );
                                  return t.path == e || 0 == o.length;
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
                                    p.c6.SetInputSourceForChord(n, t, e);
                                  },
                                  bReadOnly: o,
                                }),
                              );
                            })(e[0], s, this.props.chord, this.props.bReadOnly),
                            (function (e, t, n, o) {
                              let r = p.c6.GetActionBinding(
                                e,
                                p.c6.SelectedActionSet,
                              );
                              if (!r || 0 == r.length) return null;
                              let a = [],
                                s = "";
                              if (
                                (r.forEach((e) => {
                                  let n = p.c6.GetBooleanInputOptionsForMode(
                                    e.mode,
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
                                    (0, c.Xx)(
                                      "#SourceInputMode_" + e.sActionBindMode,
                                    ) +
                                      " " +
                                      (0, c.Xx)(
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
                                    (0, c.Xx)("#SourceInputMode_" + s) +
                                    " " +
                                    (0, c.Xx)("#SourceInputMode_" + t),
                                  fnOptionSelected: function (t) {
                                    p.c6.SetInputTypeForChord(n, e, t);
                                  },
                                  bReadOnly: o,
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
                        t != this.props.chord.inputs.length - 1 && n,
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
                        sModalTitleString: (0, c.Xx)(
                          "#BindingUI_Chord_SelectActionModalHeader",
                        ),
                        bShowOptionsOnStart: o,
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
                          (0, c.Xx)("#BindingUI_AddChordInput"),
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
                          (0, c.Xx)("#BindingUI_DeleteChord"),
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
        (0, o.gn)([h.ak], q.prototype, "OnActionOutputChanged", null),
          (0, o.gn)([h.ak], q.prototype, "DeleteChord", null),
          (0, o.gn)([h.ak], q.prototype, "DeleteSourceFromChord", null),
          (0, o.gn)([h.ak], q.prototype, "AddSourceToChord", null),
          (q = (0, o.gn)([a.Pi], q));
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
                (e = t.map((e, n) =>
                  i.createElement(
                    "div",
                    { key: n },
                    i.createElement(q, {
                      chord: e,
                      bReadOnly: this.props.bReadOnly,
                    }),
                    n != t.length - 1 && i.createElement("hr", null),
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
                      (0, c.Xx)("#BindingUI_ChordTitle"),
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
                      (0, c.Xx)("#BindingUI_AddChord"),
                    ),
                ),
                i.createElement(
                  "div",
                  {
                    className: "ChordBindingCloseButton Label AllCaps",
                    onClick: this.props.fnCloseModal,
                  },
                  (0, c.Xx)("#Button_Close"),
                ),
              )
            );
          }
        };
        (0, o.gn)([h.ak], Z.prototype, "AddChord", null),
          (Z = (0, o.gn)([a.Pi], Z));
        var j = n(1380);
        let J = class extends i.Component {
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
                    "PageTitleBar" + (V.I.IsSteamAvailable ? "" : " NoSteam"),
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
                        (0, c.Xx)("#Button_Back"),
                      ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "AllCaps PageTitle TitleBarSection FlexColumn",
                    },
                    i.createElement(
                      "div",
                      { className: n },
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
                          content: (0, c.Xx)(
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
                          (0, c.Xx)("#BindingUI_OptionsButton"),
                        ),
                      ),
                    ),
                ),
                !V.I.IsSteamAvailable &&
                  i.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, c.Xx)("#NoSteamWarning"),
                  ),
              )
            );
          }
        };
        J = (0, o.gn)([a.Pi], J);
        let Y = class extends i.Component {
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
                          (0, c.Xx)("#ShowActionButton"),
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
        (0, o.gn)([h.ak], Y.prototype, "CloseSaveDialog", null),
          (Y = (0, o.gn)([a.Pi], Y));
        let Q = class extends i.Component {
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
                (0, c.Xx)(
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
                  (0, c.Xx)("#HideActionButton"),
                ),
            );
          }
        };
        (0, o.gn)([h.ak], Q.prototype, "onHiddenChanged", null),
          (0, o.gn)([h.ak], Q.prototype, "onNameChanged", null),
          (Q = (0, o.gn)([a.Pi], Q));
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
                    (0, c.Xx)("#LegacySetup_ActionAliasesHeader"),
                  ),
                  e.map((e, t) =>
                    i.createElement(Q, {
                      sAction: e,
                      key: e,
                      readOnly: this.props.readOnly,
                    }),
                  ),
                ),
                this.state.bShowHiddenActions &&
                  i.createElement(Y, { ParentClose: this.OnCloseHidden }),
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
                      (0, c.Xx)("#ShowAllAliases"),
                    ),
                  ),
              )
            );
          }
        };
        (0, o.gn)([h.ak], $.prototype, "OnShowHidden", null),
          (0, o.gn)([h.ak], $.prototype, "OnCloseHidden", null),
          ($ = (0, o.gn)([a.Pi], $));
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
        (0, o.gn)([h.ak], ee.prototype, "onCheckboxChanged", null);
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
            for (let n of e)
              "TrackedDeviceClass_Controller" == n.device_type &&
                t.push(
                  new v.GZ(
                    n.controller_type,
                    (0, c.Xx)("#" + n.controller_type),
                  ),
                );
            t.push(new v.GZ("none", (0, c.Xx)("#None")));
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
                }),
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: n },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, o.gn)([h.ak], te.prototype, "OnControllerDropdownChanged", null);
        class ne extends i.Component {
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
        (0, o.gn)([h.ak], ne.prototype, "onCheckboxChanged", null);
        class oe extends i.Component {
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
              this.props.simAction.id,
            );
            p.c6.DeleteSimulatedActionByPath(e);
          }
          render() {
            let e = p.c6.GetLiteralVector1ActionBindings.map(
              (e, t) => new v.GZ(e.name, e.localized_name),
            );
            e.push(new v.GZ("none", (0, c.Xx)("#SourceInputAction_none")));
            let t = "InputOption" + this.props.simAction.id;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, c.Xx)("#SimulatedAction_FakeTrigger"),
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
                  (0, c.Xx)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, o.gn)([h.ak], oe.prototype, "onNameChanged", null),
          (0, o.gn)([h.ak], oe.prototype, "onActionChanged", null),
          (0, o.gn)([h.ak], oe.prototype, "onDelete", null);
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
              this.props.simAction.id,
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
              (e.push(new v.GZ("left", (0, c.Xx)("#TrackpadClickLeft"))),
              e.push(new v.GZ("right", (0, c.Xx)("#TrackpadClickRight"))),
              e.push(new v.GZ("none", (0, c.Xx)("#TrackpadClickNone"))));
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
                (0, c.Xx)("#SimulatedAction_FakeTrackpadClick"),
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
                }),
              ),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, c.Xx)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, o.gn)([h.ak], ie.prototype, "onNameChanged", null),
          (0, o.gn)([h.ak], ie.prototype, "onOutputChanged", null),
          (0, o.gn)([h.ak], ie.prototype, "onDelete", null),
          (0, o.gn)([h.ak], ie.prototype, "OnClickTrackpad", null);
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
                return i.createElement(oe, {
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
                  (0, c.Xx)("#SimulatedAction_FakeTrigger"),
                ),
              ),
              e.push(
                new v.GZ(
                  "fake_trackpad_click",
                  (0, c.Xx)("#SimulatedAction_FakeTrackpadClick"),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(
                  "div",
                  { className: "LegacySectionHeader Label" },
                  (0, c.Xx)("#LegacySetup_SimulatedActionHeader"),
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
                      sLocalizedSelectedItem: (0, c.Xx)("#AddSimulatedAction"),
                      sHeaderClass: "BindingLabelAction",
                      fnOptionSelected: this.OnCreateSimAction,
                    }),
                  ),
              )
            );
          }
        };
        (0, o.gn)([h.ak], re.prototype, "OnCreateSimAction", null),
          (re = (0, o.gn)([a.Pi], re));
        let ae = class extends i.Component {
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
                    (0, c.Xx)("#BindingUI_OptionsTitle"),
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
                  n &&
                  i.createElement(se, { bReadOnly: this.props.bReadOnly }),
                !t &&
                  i.createElement(le, {
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
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, c.Xx)("#Button_Close"),
              ),
            );
          }
        };
        ae = (0, o.gn)([a.Pi], ae);
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
                let n = e.replace("/interaction_profiles/", "");
                t.push(new v.GZ(e, n, null, e));
              }),
              t.push(new v.GZ(" ", (0, c.Xx)("#None"))),
              i.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, c.Xx)(
                      "#BindingUI_Options_InteractionProfile_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, c.Xx)("#BindingUI_Options_InteractionProfile_Label"),
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
        (0, o.gn)(
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
                let t = { sName: (0, c.Xx)("#" + e), sValue: e };
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
                    sName: (0, c.Xx)("#" + t.controller_type),
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
                e.push(new v.GZ("none", (0, c.Xx)("#None"))),
              i.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                i.createElement(
                  S.ZP,
                  {
                    content: (0, c.Xx)(
                      "#BindingUI_Options_" +
                        this.props.sOptionName +
                        "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, c.Xx)(
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
        (0, o.gn)([h.ak], le.prototype, "OnStringDropdownChanged", null);
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
                  content: (0, c.Xx)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip",
                  ),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, c.Xx)(
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
        (0, o.gn)([h.ak], de.prototype, "onCheckboxChanged", null);
        var ce,
          pe = n(7475);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Personal = 1)] = "Personal"),
            (e[(e.Public = 2)] = "Public"),
            (e[(e.LocalFile = 3)] = "LocalFile"),
            (e[(e.ReplaceDefault = 4)] = "ReplaceDefault"),
            (e[(e.AddNewDefault = 5)] = "AddNewDefault");
        })(ce || (ce = {}));
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
                    var t, n;
                    e ||
                      (null === (t = this.m_NameInputCallbackHandle) ||
                        void 0 === t ||
                        t.unregister(),
                      (this.m_NameInputCallbackHandle = void 0),
                      null === (n = this.m_DescriptionCallbackHandle) ||
                        void 0 === n ||
                        n.unregister(),
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
              case ce.Personal:
                return "personal";
              case ce.Public:
                return "public";
              case ce.LocalFile:
                return "local_file";
              case ce.AddNewDefault:
              case ce.ReplaceDefault:
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
                      (0, c.Xx)("#BindingUI_Binding_Name"),
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
                      (0, c.Xx)("#BindingUI_Binding_Description"),
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
            for (const n of e) {
              const [e, { vecRequired: o }] = n;
              for (const n of o)
                t.push(
                  `${p.c6.GetActionSetLocalizedNameByName(e)}: ${
                    n.localized_name
                  }`,
                );
            }
            const n = t.length;
            return n > 5 && ((t = t.slice(0, 5)), t.push("+ " + (n - 5))), t;
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
                    (0, c.Xx)("#BindingUI_SaveTitle"),
                  ),
                ),
                this.state.sError &&
                  i.createElement(
                    "div",
                    { className: "BindingSaveErrorHeader" },
                    i.createElement(
                      "div",
                      { className: "BindingSaveErrorMessage" },
                      (0, c.Xx)(this.state.sError),
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
                            (0, c.Xx)("#SaveError_BindingMissingActionsList"),
                            ":",
                          ),
                        ),
                        this.GetUnboundActionItems().map((e, t) =>
                          i.createElement("div", { key: t }, e),
                        ),
                      ),
                  ),
                this.props.eSaveType == ce.Personal &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, c.Xx)("#BindingUI_Save_Personal"),
                  ),
                this.props.eSaveType == ce.Public &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, c.Xx)("#BindingUI_Save_Public"),
                  ),
                this.props.eSaveType == ce.LocalFile &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, c.Xx)("#BindingUI_Save_Export"),
                  ),
                (this.props.eSaveType == ce.ReplaceDefault ||
                  this.props.eSaveType == ce.AddNewDefault) &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, c.Xx)("#BindingUI_Save_ReplaceDefault"),
                  ),
                this.props.eSaveType == ce.AddNewDefault &&
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, c.Xx)("#BindingUI_Save_AddNewDefault"),
                  ),
                i.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogName" },
                  (0, c.Xx)("#BindingUI_Binding_Name"),
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
                  (0, c.Xx)("#BindingUI_Binding_Description"),
                ),
                i.createElement("textarea", {
                  cols: 80,
                  rows: 5,
                  ref: this.BindDescriptionInput,
                  defaultValue: this.props.sDescription,
                  onFocus: this.OnDescriptionFocus,
                  placeholder: (0, c.Xx)(
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
                    (0, c.Xx)("#BindingUI_SaveBinding"),
                  ),
                  i.createElement(
                    "div",
                    {
                      onClick: this.CloseSaveDialog,
                      className: "ButtonControl",
                    },
                    (0, c.Xx)("#Button_Cancel"),
                  ),
                ),
              ),
            );
          }
        };
        (0, o.gn)([h.ak], he.prototype, "CloseSaveDialog", null),
          (0, o.gn)([h.ak], he.prototype, "ConfirmBindingName", null),
          (0, o.gn)([h.ak], he.prototype, "BindNameInput", null),
          (0, o.gn)([h.ak], he.prototype, "BindDescriptionInput", null),
          (0, o.gn)([h.ak], he.prototype, "OnNameFocus", null),
          (0, o.gn)([h.ak], he.prototype, "OnOverlayNameText", null),
          (0, o.gn)([h.ak], he.prototype, "OnDescriptionFocus", null),
          (0, o.gn)([h.ak], he.prototype, "OnOverlayDescriptionText", null),
          (0, o.gn)([h.ak], he.prototype, "GetUnboundActionItems", null),
          (he = (0, o.gn)([a.Pi], he));
        let ue = class extends i.Component {
          render() {
            let e = this.props.UnboundActions.vecRequired.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, c.Xx)(
                    "#BindingUI_UnboundActions_Required",
                    e.localized_name,
                  ),
                ),
              ),
              t = this.props.UnboundActions.vecSuggested.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, c.Xx)(
                    "#BindingUI_UnboundActions_Suggested",
                    e.localized_name,
                  ),
                ),
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
                      (0, c.Xx)("#BindingUI_UnboundActions_Title"),
                    ),
                    e,
                    t,
                  ),
                )
            );
          }
        };
        var me;
        (ue = (0, o.gn)([a.Pi], ue)),
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
                eSaveType: ce.None,
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
            this.setState({ eSaveType: ce.None });
          }
          ShowPublicModal() {
            this.setState({ eSaveType: ce.Public });
          }
          ShowPersonalModal() {
            this.setState({ eSaveType: ce.Personal });
          }
          ShowExportModal() {
            this.setState({ eSaveType: ce.LocalFile });
          }
          ShowReplaceDefaultModal() {
            let e =
              null !=
              p.c6.GetSelectedAppDefaultBinding(
                p.c6.SelectedControllerTypeInfo.controller_type,
              );
            this.setState({
              eSaveType: e ? ce.ReplaceDefault : ce.AddNewDefault,
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
              o = (0, c.Xx)("#Button_Discard");
            if (this.ThisConfigNeedsUpgrade()) {
              let i = j.S.GetApp(p.c6.SelectedApp);
              (e = (0, c.Xx)("#BindingUI_List_Upgrade_Confirm", i.name)),
                (n = this.SelectWouldOverwriteAutosave()),
                n
                  ? (t = (0, c.Xx)("#BindingUI_List_Select_Confirm_Convert"))
                  : (o = (0, c.Xx)("#Button_Import"));
            } else e = (0, c.Xx)("#BindingUI_List_Select_Confirm");
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
                      (0, c.Xx)("#BindingUI_ConfirmSelect_Title"),
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
                        o,
                      ),
                      n &&
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: this.OnSaveClicked,
                          },
                          (0, c.Xx)("#Button_Save"),
                        ),
                      i.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: this.OnSelectDone,
                        },
                        (0, c.Xx)("#Button_Cancel"),
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
                    this.state.eTabType == me.ActionSet &&
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
                    (0, c.Xx)("#LegacySetupTab"),
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
                    (0, c.Xx)("#SecondaryControllerTab"),
                  ),
                );
            }
            let n,
              o = !1,
              r = !1;
            p.c6.SelectedControllerTypeInfo &&
              this.state.eTabType == me.ActionSet &&
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
            let m = j.S.GetApp(p.c6.SelectedApp),
              g = "";
            m && (g = m.name);
            let _,
              v = this.props.bReadOnlyView
                ? (0, c.Xx)("#BindingUI_ViewPageTitle", p.c6.ConfigName)
                : (0, c.Xx)("#BindingUI_EditPageTitle", p.c6.ConfigName),
              S = "#BindingUI_PageSubTitle",
              y = p.c6.GetOptionValue("variant");
            y &&
              ((_ = (0, c.Xx)("#BindingVariant_" + y)),
              (S = "#BindingUI_PageSubTitle_WithVariant"));
            let b = (0, c.Xx)(
                S,
                p.c6.SelectedControllerTypeLocalizedName,
                g,
                (0, c.Xx)(
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
                      className: (0, d.LJ)("ActionTabContainer", "TabRow"),
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
                    (0, c.Xx)(p.c6.SaveNoticeText),
                  ),
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
              this.state.eTabType == me.LegacySetup &&
                i.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  i.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    i.createElement(ne, {
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
                    i.createElement(ne, {
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
                      (0, c.Xx)("#BindingUI_PublishToWorkshop"),
                    ),
                  !this.props.bReadOnlyView &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPersonalModal,
                      },
                      (0, c.Xx)("#BindingUI_SavePersonal"),
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
                      (0, c.Xx)("#BindingUI_SelectThisBinding"),
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
                      (0, c.Xx)("#BindingUI_EditThisBinding"),
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
                      (0, c.Xx)("#BindingUI_ImportThisBinding"),
                    ),
                  V.I.BDevMode &&
                    i.createElement("div", {
                      className: "BindingManageButtonsHR",
                    }),
                  V.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ToggleDeveloperOutput,
                      },
                      a,
                    ),
                  V.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowExportModal,
                      },
                      (0, c.Xx)("#BindingUI_ExportBindingFile"),
                    ),
                  V.I.BDevMode &&
                    !p.c6.SelectedBindingIsLegacy &&
                    !p.c6.SelectedBindingIsOpenXR &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowReplaceDefaultModal,
                      },
                      (0, c.Xx)("#BindingUI_ReplaceDefaultFile"),
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
                        i.createElement(K, {
                          fnCloseModal: this.ClosePoseBindingsModal,
                          eActionSourceType: U.Pose,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            o && !this.state.bBindingUIInMirroredMode
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
                        i.createElement(K, {
                          fnCloseModal: this.CloseHapticsBindingsModal,
                          eActionSourceType: U.Haptics,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            o && !this.state.bBindingUIInMirroredMode
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
                        i.createElement(K, {
                          fnCloseModal: this.CloseSkeletonBindingsModal,
                          eActionSourceType: U.Skeleton,
                          bSingleControllerMode: r,
                          bSlaveSecondaryControllerBinding: !(
                            o && !this.state.bBindingUIInMirroredMode
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
              this.state.eSaveType != ce.None &&
                i.createElement(he, {
                  sDescription: p.c6.ConfigDescription,
                  eSaveType: this.state.eSaveType,
                  ParentClose: this.CloseSaveModal,
                }),
              this.renderSelectConfirmModal(),
            );
          }
        };
        (0, o.gn)([h.ak], ge.prototype, "OnAppDropdownChanged", null),
          (0, o.gn)([h.ak], ge.prototype, "OnActionSetDropdownChanged", null),
          (0, o.gn)([h.ak], ge.prototype, "ToggleDeveloperOutput", null),
          (0, o.gn)([h.ak], ge.prototype, "OpenPoseBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "ClosePoseBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "OpenHapticsBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "CloseHapticsBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "OpenSkeletonBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "CloseSkeletonBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "OpenChordBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "CloseChordBindingsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "OpenOptionsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "CloseOptionsModal", null),
          (0, o.gn)([h.ak], ge.prototype, "CloseSaveModal", null),
          (0, o.gn)([h.ak], ge.prototype, "ShowPublicModal", null),
          (0, o.gn)([h.ak], ge.prototype, "ShowPersonalModal", null),
          (0, o.gn)([h.ak], ge.prototype, "ShowExportModal", null),
          (0, o.gn)([h.ak], ge.prototype, "ShowReplaceDefaultModal", null),
          (0, o.gn)([h.ak], ge.prototype, "ShowUnboundActionsOverlay", null),
          (0, o.gn)([h.ak], ge.prototype, "HideUnboundActionsOverlay", null),
          (0, o.gn)([h.ak], ge.prototype, "SetBindingUIInMirroredMode", null),
          (0, o.gn)([h.ak], ge.prototype, "SelectThisBinding", null),
          (0, o.gn)([h.ak], ge.prototype, "OnSelectBinding", null),
          (0, o.gn)([h.ak], ge.prototype, "OnSelectConfirmed", null),
          (0, o.gn)([h.ak], ge.prototype, "OnSelectDone", null),
          (0, o.gn)([h.ak], ge.prototype, "OnSaveCurrentBinding", null),
          (0, o.gn)([h.ak], ge.prototype, "renderSelectConfirmModal", null),
          (0, o.gn)([h.ak], ge.prototype, "OnSaveClicked", null),
          (0, o.gn)([h.ak], ge.prototype, "OnLegacySetup", null),
          (0, o.gn)([h.ak], ge.prototype, "OnSecondaryControllerSetup", null),
          (ge = (0, o.gn)([a.Pi], ge));
        var _e = n(6166);
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
                          (0, c.Xx)("#Button_Close"),
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
                          (0, c.Xx)("#BindingUI_List_ErrorReturnToAppSelect"),
                        ),
                  ),
                ),
              )
            );
          }
        };
        (0, o.gn)([h.ak], ve.prototype, "CloseDialog", null),
          (ve = (0, o.gn)([a.Pi], ve));
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
            return (0, o.mG)(this, void 0, void 0, function* () {
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
                    (0, c.Xx)("#BindingUI_List_Delete_Confirm", e.name),
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
                      (0, c.Xx)("#Button_Delete"),
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, c.Xx)("#Button_Cancel"),
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
              n,
              o = new Date(),
              r = new Date(1e3 * this.props.result.time),
              a =
                o.getTime() - r.getTime() > 1728e5
                  ? r.toLocaleDateString()
                  : r.toLocaleString(),
              s = this.props.result,
              l = "developer" == s.type,
              d = "0" != s.steamIDOwner && !l,
              h = j.S.GetApp(p.c6.SelectedApp),
              u = h ? h.name : "";
            l &&
              ((s.name && 0 != s.name.length) ||
                (p.c6.SelectedBindingIsLegacy
                  ? (s.name = (0, c.Xx)(
                      "#BindingUI_List_Legacy_Binding_Title",
                      u,
                    ))
                  : (s.name = (0, c.Xx)(
                      "#BindingUI_List_Developer_Binding_Title",
                      u,
                    ))),
              (s.description && 0 != s.description.length) ||
                (p.c6.SelectedBindingIsLegacy
                  ? (s.description = (0, c.Xx)(
                      "#BindingUI_List_Legacy_Binding_Description",
                    ))
                  : (s.description = (0, c.Xx)(
                      "#BindingUI_List_Developer_Binding_Description",
                    )))),
              d &&
                ((n = _e.s.GetUserInformation(s.steamIDOwner).avatar_url),
                (t = _e.s.GetUserInformation(s.steamIDOwner).persona_name));
            let m = this.props.bCurrentlySelectedBinding
                ? (0, c.Xx)("#BindingUI_List_Edit")
                : (0, c.Xx)("#BindingUI_List_View"),
              g = s.name;
            "autosave" == s.type &&
              (g = (0, c.Xx)("#BindingUI_List_Autosave", s.name));
            let _ = null;
            this.state.bOldVersion &&
              (_ = this.props.bCurrentlySelectedBinding
                ? (0, c.Xx)(
                    "#BindingUI_List_OldVersionWarning_CurrentBinding",
                    u,
                  )
                : (0, c.Xx)("#BindingUI_List_OldVersionWarning", u));
            let v = null;
            if (s.secondsPlayed > 0) {
              let e = s.secondsPlayed / 60;
              v = (0, c.Xx)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
            }
            let S = null;
            if (s.secondsPlayedThisMonth > 0) {
              let e = s.secondsPlayedThisMonth / 60;
              S = (0, c.Xx)(
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
              n &&
                i.createElement("img", {
                  className: "SteamCommunityProfileImage",
                  src: n,
                }),
              d &&
                !n &&
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
                    (0, c.Xx)("#BindingUI_List_Select"),
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
                    (0, c.Xx)("#BindingUI_List_PublishedBy", t),
                    i.createElement("br", null),
                  ),
                s.time > 0 &&
                  i.createElement(
                    "span",
                    { className: "BindingLastUpdated" },
                    (0, c.Xx)("#BindingUI_List_LastUpdated"),
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
                      (0, c.Xx)("#BindingUI_Compatibility_Remapped_Text"),
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
        (0, o.gn)([h.ak], Se.prototype, "OnDelete", null),
          (0, o.gn)([h.ak], Se.prototype, "OnDeleteConfirmed", null),
          (0, o.gn)([h.ak], Se.prototype, "OnDeleteCancel", null),
          (0, o.gn)([h.ak], Se.prototype, "renderDeleteConfirmModal", null),
          (0, o.gn)([h.ak], Se.prototype, "OnView", null),
          (0, o.gn)([h.ak], Se.prototype, "OnSelect", null),
          (Se = (0, o.gn)([a.Pi], Se));
        let ye = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bIsBindingsLoading: !0 });
          }
          RefreshBindingList() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              this.setState({ bIsBindingsLoading: !0 }),
                yield u.w.GetBindingList(),
                this.setState({ bIsBindingsLoading: !1 });
            });
          }
          componentDidMount() {
            return (0, o.mG)(this, void 0, void 0, function* () {
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
            return (0, o.mG)(this, void 0, void 0, function* () {
              p.c6.SetSelectedController(e), yield this.RefreshBindingList();
            });
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
                    i.createElement(Se, {
                      key: t,
                      currentBinding: u.w.CurrentBinding,
                      result: e,
                      fnViewBinding: this.ViewBinding,
                      fnSelectBinding: this.SelectBinding,
                      bCurrentlySelectedBinding: !1,
                    }),
                  )),
              o.length > 0 &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(
                    "div",
                    { className: "BindingListSectionHeader" },
                    (0, c.Xx)(e),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRowWithWrap BindingListSection" },
                    o,
                  ),
                )
            );
          }
          CreateControllerTypeDropdown() {
            let e = [],
              t = j.S.IsAppAllowedPrivateInputs(p.c6.SelectedApp);
            V.I.ControllerTypes.forEach((n) => {
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
                  V.I.LocalizeDriverString(e.resource_root, e.controller_type),
                ),
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
                  (0, c.Xx)("#BindingList_ControllerOption"),
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
                    sLocalizedSelectedItem: V.I.LocalizeControllerString(
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
            let n = u.w.CurrentBinding,
              o = "#BindingUI_List_DeveloperSection";
            p.c6.SelectedBindingIsLegacy &&
              (o = "#BindingUI_List_LegacySection");
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
                  strTitle: (0, c.Xx)("#BindingList_PageTitle", t),
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
                      (0, c.Xx)("#BindingUI_List_CurrentSection"),
                    ),
                    n &&
                      i.createElement(Se, {
                        result: n,
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
                          (0, c.Xx)("#BindingUI_List_Loading"),
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
                          o,
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
                                (0, c.Xx)("#BindingUI_List_NoBindingsFound"),
                              ),
                            ),
                          ),
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl DeveloperLabel Inline",
                            onClick: this.CreateBinding,
                          },
                          (0, c.Xx)("#BindingUI_List_CreateBinding"),
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
        (0, o.gn)([h.ak], ye.prototype, "RefreshBindingList", null),
          (0, o.gn)([h.ak], ye.prototype, "CreateBinding", null),
          (0, o.gn)([h.ak], ye.prototype, "SelectBinding", null),
          (0, o.gn)([h.ak], ye.prototype, "ViewBinding", null),
          (0, o.gn)([h.ak], ye.prototype, "OnControllerDropdownChanged", null),
          (0, o.gn)([h.ak], ye.prototype, "ComputeResultsSection", null),
          (0, o.gn)([h.ak], ye.prototype, "CreateControllerTypeDropdown", null),
          (ye = (0, o.gn)([a.Pi], ye));
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
        be = (0, o.gn)([a.Pi], be);
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
              n = j.S.GetRecentApps();
            t && (n = n.filter((e) => e.key != t.key));
            let o,
              r = j.S.GetCurrentSceneProcess();
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
                    (0, c.Xx)("#AppSelect_ShowMoreApps"),
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
                o,
              )
            );
          }
          render() {
            return i.createElement(
              "div",
              { className: "AppSelectPageWrapper" },
              i.createElement(J, {
                fnOnClick: u.w.ReturnToSettingsUI,
                strTitle: (0, c.Xx)("#AppSelect_EditBindings"),
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
        (0, o.gn)([h.ak], fe.prototype, "SelectApplication", null),
          (0, o.gn)([h.ak], fe.prototype, "OnShowMoreApps", null),
          (fe = (0, o.gn)([a.Pi], fe));
        var Ce,
          ke,
          Ie,
          Ee = n(3010),
          Me = n(5177),
          Re = n(3930);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Boolean = 1)] = "Boolean"),
            (e[(e.Vector1 = 2)] = "Vector1"),
            (e[(e.Vector2 = 3)] = "Vector2"),
            (e[(e.Vector3 = 4)] = "Vector3"),
            (e[(e.Pose = 20)] = "Pose"),
            (e[(e.SimpleHaptic = 21)] = "SimpleHaptic"),
            (e[(e.Skeleton = 22)] = "Skeleton");
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
        let we = 16777216;
        function Te(e) {
          return "number" != typeof e
            ? "-"
            : e >= we && e <= 33554431
            ? (0, c.Xx)("#InputDebugger_Priority_Overlay", e - we)
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
                    sError: (0, c.Xx)("InputDebugger_ActionManifestFailed"),
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
              for (let n of this.state.actionManifest.action_sets)
                if (
                  ((t = n.actions.find(
                    (t) => t.name.toLowerCase() == e.toLowerCase(),
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
                : null,
            );
          }
          renderActionSets() {
            if (!this.state.latestState.activeActionSets)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, c.Xx)("#InputDebugger_NoActiveActionSets"),
              );
            let e = [];
            for (let t of this.state.latestState.activeActionSets) {
              let n, o;
              t.secondaryActionSet
                ? ((n = t.secondaryActionSet), (o = this.GetActionSetName(n)))
                : ((o = (0, c.Xx)("#InputDebugger_None")), (n = ""));
              let r = this.GetActionSetName(t.actionSet),
                a = t.restrictToDevice
                  ? t.restrictToDevice
                  : (0, c.Xx)("#InputDebugger_None");
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
                    Te(t.priority),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetDevice" },
                    a,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryName" },
                    o,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryPath" },
                    n,
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
                (0, c.Xx)("#InputDebugger_ActiveActionSets"),
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
                    (0, c.Xx)("#InputDebugger_ActionSetName"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "3" }, className: "Label" },
                    (0, c.Xx)("#InputDebugger_Priority"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "4" }, className: "Label" },
                    (0, c.Xx)("#InputDebugger_Device"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "5 / span 2" }, className: "Label" },
                    (0, c.Xx)("#InputDebugger_SecondaryActionSetName"),
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
                    (0, c.Xx)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, c.Xx)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, c.Xx)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, c.Xx)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "value" },
                    (0, c.Xx)("#InputDebugger_Value"),
                  ),
                ];
              case Ce.Pose:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, c.Xx)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, c.Xx)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, c.Xx)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, c.Xx)("#InputDebugger_ActiveOrigin"),
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
                className: (0, d.LJ)(
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
              { className: (0, d.LJ)("Label", "ActionEntry"), key: t },
              e.toFixed(2),
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
                  (0, c.Xx)("#InputDebugger_FilterDetails"),
                ),
              );
            {
              let t = this.GetMaxPriority(e.binding),
                n = null !== (o = e.binding) && void 0 !== o ? o : "-";
              return (
                "number" == typeof t &&
                  (n += " " + (0, c.Xx)("#InputDebugger_PriorityValue", Te(t))),
                i.createElement(
                  "div",
                  {
                    className: "Label ActionEntry",
                    key: e.inputSource + "_binding",
                  },
                  n,
                )
              );
            }
          }
          renderActionEntry(e, t, n) {
            var o, r, a, s, l, d;
            switch (e.type) {
              case Ce.Boolean:
                let e = t.data;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_source" },
                    null !== (o = t.inputSource) && void 0 !== o ? o : "-",
                  ),
                  this.renderBinding(t, n),
                  this.renderBoolean(t.data.active, n + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_origin" },
                    null !== (r = t.data.activeOrigin) && void 0 !== r
                      ? r
                      : "-",
                  ),
                  this.renderBoolean(e.state, n + "_value"),
                ];
              case Ce.Vector1:
              case Ce.Vector2:
              case Ce.Vector3:
                let c = t.data,
                  p = c.x.toFixed(2);
                return (
                  void 0 !== c.y && (p += ", " + c.y.toFixed(2)),
                  void 0 !== c.z && (p += ", " + c.z.toFixed(2)),
                  [
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_source" },
                      null !== (a = t.inputSource) && void 0 !== a ? a : "-",
                    ),
                    this.renderBinding(t, n),
                    this.renderBoolean(t.data.active, n + "_active"),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_origin" },
                      null !== (s = t.data.activeOrigin) && void 0 !== s
                        ? s
                        : "-",
                    ),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_value" },
                      p,
                    ),
                  ]
                );
              case Ce.Pose:
                let h = t.data;
                return (
                  h.position_x.toFixed(2),
                  h.position_y.toFixed(2),
                  h.position_z.toFixed(2),
                  [
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_source" },
                      null !== (l = t.inputSource) && void 0 !== l ? l : "-",
                    ),
                    this.renderBinding(t, n),
                    this.renderBoolean(t.data.active, n + "_active"),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_origin" },
                      null !== (d = t.data.activeOrigin) && void 0 !== d
                        ? d
                        : "-",
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
                      "Values must have the same length as header",
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
              n = 0;
            for (let o of this.state.latestState.actions)
              if (o.actionSet == this.state.sCurrentActionSet) {
                let [i, r] = this.renderAction(o);
                if (!i) continue;
                (n = Math.max(r, n)), t.push(i), e.add(o.path.toLowerCase());
              }
            if (this.state.actionManifest) {
              let o = this.state.actionManifest.action_sets.find(
                (e) => e.name == this.state.sCurrentActionSet,
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
                              ")",
                            ),
                          ),
                          i.createElement(
                            "div",
                            { className: "Unbound Label" },
                            (0, c.Xx)("#InputDebugger_ActionUnbound"),
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
                (0, c.Xx)("#InputDebugger_NoActions"),
              );
            let e = new Set();
            for (let t of this.state.latestState.actions) e.add(t.actionSet);
            let t = [];
            for (let n of e)
              t.push(
                i.createElement(
                  Me.z,
                  {
                    onClick: () => {
                      this.SetActionSet(n);
                    },
                    key: n,
                    className: (0, d.LJ)("ActionSetButton", "ButtonControl", [
                      "Selected",
                      n == this.state.sCurrentActionSet,
                    ]),
                  },
                  this.GetActionSetName(n),
                ),
              );
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, c.Xx)("#InputDebugger_Actions"),
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
                  (0, c.Xx)("#InputDebugger_WaitingForApp"),
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
              case Ie.Boolean:
                n = this.renderBoolean(e.value);
                break;
              case Ie.Scalar:
                n = this.renderScalar(e.value);
                break;
              default:
                n = i.createElement("div", { className: "Label" }, Ie[e.type]);
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
                  (0, c.Xx)("#InputDebugger_FilterDetails"),
                ),
              "number" == typeof o &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, c.Xx)("#InputDebugger_PriorityValue", Te(o)),
                ),
              e.suppressedByPriority &&
                i.createElement(
                  "div",
                  { className: "Label Suppressed" },
                  (0, c.Xx)("#InputDebugger_Suppressed"),
                ),
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
                  o,
                ),
              );
            }
            let n = [];
            for (let t of e.inputs) n.push(this.renderFilterIO(t, !0));
            n ||
              n.push(
                i.createElement(
                  "div",
                  { className: "Label", key: "none" },
                  (0, c.Xx)("#InputDebugger_None"),
                ),
              );
            let o = [];
            for (let t of e.outputs) o.push(this.renderFilterIO(t, !1));
            return (
              o ||
                o.push(
                  i.createElement(
                    "div",
                    { className: "Label", key: "none" },
                    (0, c.Xx)("#InputDebugger_None"),
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
                  (0, c.Xx)("#InputDebugger_FilterState_Title", e.name),
                  " ",
                ),
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, c.Xx)("#InputDebugger_FilterType"),
                  e.type,
                ),
                t &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: "Label InputDebuggerHeading" },
                      (0, c.Xx)("#InputDebugger_Parameters"),
                    ),
                    i.createElement("div", { className: "ParameterList" }, t),
                  ),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, c.Xx)("#InputDebugger_Inputs"),
                ),
                i.createElement("div", { className: "InputList" }, n),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, c.Xx)("#InputDebugger_Outputs"),
                ),
                i.createElement("div", { className: "OutputList" }, o),
              )
            );
          }
          render() {
            let e = j.S.GetRunningApps(),
              t = [];
            for (let n of e)
              t.push({ value: n.key, sLabel: `${n.name} (pid: ${n.pid})` });
            return i.createElement(
              "div",
              { className: "DebuggerMain" },
              i.createElement(J, {
                fnOnClick: u.w.ReturnToSettingsUI,
                strTitle: (0, c.Xx)("#InputDebugger_Title"),
              }),
              i.createElement(
                "div",
                { className: "AppDropdownWrapper" },
                i.createElement(Ee.Lt, {
                  items: t,
                  onChange: this.OnSelectApp,
                  value: this.state.sCurrentApp,
                  defaultLabel: (0, c.Xx)("#InputDebugger_SelectApplication"),
                }),
              ),
              !this.state.actionManifest &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, c.Xx)("#InputDebugger_ActionManifestLoading"),
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
        (0, o.gn)([h.ak], De.prototype, "OnSelectApp", null),
          (0, o.gn)([h.ak], De.prototype, "OnInputFrame", null),
          (0, o.gn)([h.ak], De.prototype, "SetActionSet", null);
        var Oe = n(775),
          Be = n(1628);
        let xe = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return (
              u.w.Loading
                ? document.body.classList.add("Loading")
                : document.body.classList.remove("Loading"),
              V.I.IsSteamAvailable
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
                      (0, c.Xx)("#BindingUI_SteamVRUnavailable"),
                    ),
                  ),
                ),
              )
            );
          }
        };
        xe = (0, o.gn)([a.Pi], xe);
        const Ae = document.getElementById("root");
        (0, c.CK)(
          ["bindingui"],
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage(),
        )
          .then(() => Oe.n.Init())
          .then(() => j.S.Init())
          .then(() => V.I.Init())
          .then(() => Be.G3.Init(!1))
          .then(() => p.c6.Init())
          .then(() =>
            (function () {
              return (0, o.mG)(this, void 0, void 0, function* () {
                u.w.SetDesktopMode((0, d.Fc)("desktop").length > 0),
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
                let e = (0, d.Fc)("debugger");
                if (null != e && e.length > 0) return void u.w.ShowDebugger();
                let t = (0, d.Fc)("app");
                if (null != t && t.length > 0 && j.S.GetApp(t)) {
                  p.c6.SetSelectedApp(t);
                  let e = (0, d.Fc)("controller");
                  if (null != e && e.length > 0) {
                    p.c6.SetSelectedController(e);
                    let t = (0, d.Fc)("action_set");
                    return (
                      null != t &&
                        t.length > 0 &&
                        p.c6.SetSelectedActionSet("/actions/" + t),
                      void ((0, d.Fc)("read_only").length > 0
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
            (e = xe), r.render(i.createElement(e, null), Ae);
          })
          .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
      },
      2758: (e, t, n) => {
        "use strict";
        n.d(t, { U: () => s });
        var o = n(655),
          i = n(2188),
          r = n(4687);
        class a {
          constructor() {
            (this.m_mapAllOverlays = new Map()),
              (this.m_rgOverlayCreatedCallbacks = new r.p()),
              (this.m_rgOverlayDestroyedCallbacks = new r.p());
          }
          Init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
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
              n = [],
              o = [];
            for (const o of e)
              (null == o ? void 0 : o.sOverlayKey) &&
                (this.m_mapAllOverlays.has(o.sOverlayKey) || n.push(o),
                this.m_mapAllOverlays.set(o.sOverlayKey, o),
                t.delete(o.sOverlayKey));
            for (const e of t)
              o.push(this.m_mapAllOverlays.get(e)),
                this.m_mapAllOverlays.delete(e);
            n.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
              o.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
          }
        }
        (0, o.gn)([i.LO], a.prototype, "m_mapAllOverlays", void 0),
          (0, o.gn)([i.aD.bound], a.prototype, "OnAllOverlayInfo", null);
        const s = new a();
        window.OverlayStore = s;
      },
      7726: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => o, X: () => l });
        var o,
          i = n(655),
          r = n(7294),
          a = n(7056),
          s = n(1569);
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
              n = s.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let i = !1;
            if (t) {
              const t =
                null !==
                  (e = s.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    s.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (i = s.Co.VRProperties.GetBoolProperty(
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
            let r = l.GetBatteryIcon(
                t,
                i,
                this.batteryLevelStable,
                o.HorizontalPips,
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
                    }),
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
                    }),
                  ),
                ),
              ),
            );
          }
        }
        (l.kBatteryLevelHysteresis = 0.02),
          (0, i.gn)([a.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, i.gn)([a.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, i.gn)([a.ak], l.prototype, "OnDeviceEvent", null);
      },
      7373: (e, t, n) => {
        "use strict";
        n.d(t, { g: () => de, _: () => ne });
        var o,
          i = n(655),
          r = n(1569),
          a = n(7056),
          s = n(2188),
          l = n(7294),
          d = n(1509),
          c = n(5177),
          p = n(4979),
          h = n(3107),
          u = n(7176),
          m = n(3568),
          g = n(8495),
          _ = n(7008),
          v = n(9942),
          S = n(1628),
          y = n(7062),
          b = n(7726),
          f = n(8178),
          C = n(6459),
          k = n(9347),
          I = n(2743),
          E = n(7095),
          M = n(8980);
        let R = (o = class extends l.Component {
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
                (e) => !o.s_failedImages.includes(e),
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
              o.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
                  className: (0, M.LJ)("PortraitAppImageContainer", [
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
        (R.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (R.s_failedImages = []),
          (0, i.gn)([a.ak], R.prototype, "loadNextImage", null),
          (0, i.gn)([a.ak], R.prototype, "onLoad", null),
          (0, i.gn)([a.ak], R.prototype, "onError", null),
          (R = o = (0, i.gn)([y.Pi], R));
        var w = n(8242);
        class T extends l.Component {
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
            const e = v.H.Instance.SceneAppKey;
            E.f.OpenDeepLink(E.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = v.H.Instance.SceneAppKey;
            I.Ux.OpenDeepLink(I.Yw.Name, e);
          }
          render() {
            var e;
            const t = v.H.Instance.SceneAppKey,
              n = v.H.Instance.SceneAppName,
              o = v.H.Instance.SceneApplicationState,
              i = v.H.Instance.SceneAppIsHome,
              a = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              d = S.G3.apps && S.G3.apps.find((e) => e.key == t);
            let p = !1;
            switch (o) {
              case r.xY.Quitting:
              case r.xY.Starting:
              case r.xY.Waiting:
                p = !0;
            }
            const h = ((e) => {
                if (null == e) return "";
                let t = e.image_path;
                return (
                  t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                );
              })(d),
              g = h.includes("header.jpg"),
              _ = h.replace(/header\.jpg$/, "library_hero.jpg");
            return l.createElement(
              C.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: u.PF,
                scrollable: !1,
              },
              g &&
                l.createElement("div", {
                  className: "HeroBackground",
                  style: { backgroundImage: `url('${_}')` },
                }),
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(R, { appkey: t, title: n, imageUrl: h }),
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, n),
                l.createElement(
                  c.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  i
                    ? (0, m.Xx)("#Return_To_Home")
                    : (0, m.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    w.ls,
                    {
                      icon: w.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, m.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    w.ls,
                    { icon: w.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, m.Xx)("#App_Video_Settings"),
                  ),
                a &&
                  l.createElement(
                    c.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    i ? (0, m.Xx)("#Exit_Home") : (0, m.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, i.gn)([a.ak], T.prototype, "onExitApp", null),
          (0, i.gn)([a.ak], T.prototype, "onReturnToGame", null),
          (0, i.gn)(
            [a.ak],
            T.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, i.gn)([a.ak], T.prototype, "onOpenAppVideoSettings", null);
        var D,
          O = n(9669),
          B = n.n(O),
          x = n(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(D || (D = {}));
        const A = (e) =>
          l.createElement(
            "div",
            {
              className: (0, M.LJ)("ButtonContainer", D[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              c.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == D.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class P extends l.Component {
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
              d = n.clientWidth,
              c = Math.floor(d / l) - 1,
              p = Math.round((a - s + i + 1) / l) + c * e - 0.4999,
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
                className: (0, M.LJ)(
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
                    l.createElement(A, {
                      side: D.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(A, {
                      side: D.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, i.gn)([a.ZP], P.prototype, "onAnimationFrame", null),
          (0, i.gn)([a.ZP], P.prototype, "onScroll", null),
          (0, i.gn)([a.ZP], P.prototype, "onLeftButtonClick", null),
          (0, i.gn)([a.ZP], P.prototype, "onRightButtonClick", null);
        let V = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new M.cB()),
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
                  className: (0, M.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      S.G3.probablyOwnedAppkeys.has(this.props.appkey),
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
                  l.createElement(R, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, i.gn)([a.ZP], V.prototype, "buttonMouseEnter", null),
          (0, i.gn)([a.ZP], V.prototype, "buttonMouseLeave", null),
          (0, i.gn)([a.ZP], V.prototype, "onParentScrollStop", null),
          (V = (0, i.gn)([y.Pi], V));
        const N = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          L = (e) => {
            var t;
            const n = !!e.loading,
              o = null !== (t = e.apps) && void 0 !== t ? t : [];
            let i = "AppCarousel";
            return (
              e.className && (i += " " + e.className),
              (i += " NoAnimations"),
              l.createElement(
                P,
                { additionalClassNames: i, paginationAlignmentOffset: -20 },
                n &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(N, null),
                    l.createElement(N, null),
                    l.createElement(N, null),
                    l.createElement(N, null),
                  ),
                !n &&
                  o.map((e) =>
                    l.createElement(V, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var H;
        class F extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            B()
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
                n = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; n.has(t[0].appid); ) t.shift();
                let o = t.shift();
                n.add(o.appid),
                  e.push(
                    l.createElement(
                      c.z,
                      {
                        key: `appid_${o.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        enabled: !1,
                      },
                      l.createElement("img", { src: o.logo }),
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
        let G = (H = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, n) {
            var o, i;
            g.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + n,
              e.key,
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
            if (null != S.G3.apps)
              for (let t of S.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  H.s_setBlacklistedAppkeys.has(t.key) ||
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
              const i = n < H.TOP_ROW_LENGTH;
              return (
                i || (o -= H.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, i, o),
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
            const n =
              0 == t.length ||
              S.G3.settings.get("/settings/dashboard/forceWelcomeScreen");
            if (n) e = l.createElement(F, null);
            else {
              let n = t.slice(0, H.TOP_ROW_LENGTH),
                o = t.slice(H.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                l.createElement(L, { className: "TopRow", apps: n }),
                l.createElement(L, { className: "BottomRow", apps: o }),
              );
            }
            return l.createElement(
              C.lL,
              {
                visible: this.props.visible,
                scrollable: !n,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: u.po,
              },
              e,
            );
          }
        });
        (G.TOP_ROW_LENGTH = 4),
          (G.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            u.W4,
            u.jW,
          ])),
          (0, i.gn)([a.ak], G.prototype, "onRoomSetup", null),
          (G = H = (0, i.gn)([y.Pi], G));
        var U,
          W = n(16),
          z = n(421),
          X = n(6063),
          K = n(3619),
          q = n(4138),
          Z = (n(9462), n(9626)),
          j = n(792),
          J = n(6346),
          Y = n(6821),
          Q = n(2477);
        function $(e) {
          const { debugHostLocation: t, onGrabStart: n, onGrabEnd: o } = e,
            i = Z.B.isVRGamepadUI,
            a = (0, M.aB)();
          if (!a) return null;
          const s =
              null != (null == a ? void 0 : a.overlayKey) &&
              "" != (null == a ? void 0 : a.overlayKey),
            d = !!(a.keyboardFlags & r.vS.Minimal),
            c = i ? 2 : 1.5,
            p = i ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            h = i
              ? d
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : d
              ? { y: -0.73, z: 0.05 }
              : { y: -0.87, z: 0.05 };
          return l.createElement(
            r.wx,
            { translation: p },
            l.createElement(
              r.wx,
              { scale: { y: c, x: c } },
              l.createElement(r.sl, { mountedId: (0, r.iN)(u.GN, u.gC) }),
              l.createElement(r.sl, { mountedId: (0, r.iN)(u.GN, u.jw) }),
            ),
            !1,
            s &&
              l.createElement(
                r.wx,
                { translation: h },
                l.createElement(X.J, {
                  tint: Z.B.ControlBarTint,
                  onStartMove: n,
                  onEndMove: o,
                }),
              ),
          );
        }
        function ee(e) {
          const t = (0, M.aB)();
          if (!t) return null;
          const n = de.k_nControlBarPitch;
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
                    y: de.getDashboardVerticalPosition(),
                    z: 1 * -de.getDashboardDistance(),
                  },
                  scale: de.getDashboardScale(),
                },
                l.createElement(
                  r.wx,
                  { translation: de.getControlBarTranslation() },
                  l.createElement(
                    z.Z,
                    null,
                    l.createElement(
                      r.wx,
                      { rotation: { x: n }, curvature_pitch: n },
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
        })(U || (U = {}));
        var te,
          ne,
          oe,
          ie = n(138),
          re = n(4614),
          ae = n(2758);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Standard = 3)] = "Standard");
        })(ne || (ne = {}));
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
          return "steamlink_openvr-overlay" == e || e.startsWith(u.wX);
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(oe || (oe = {}));
        let de = (te = class extends l.Component {
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
              (this.m_roomViewChangedEventHandle = null),
              (this.m_linkStreamActiveEventHandle = null),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              (this.m_keyboardVisibilityChangedEventHandle = null),
              (this.m_miscEventHandles = []),
              (this.m_eSceneApplicationState = r.xY.None),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bMuted: !1,
                bGrabbed: !1,
                sLastShownAppKey: "",
                bStreamVideo: !1,
                eShowPopoverMenu: oe.None,
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
              S.G3.Init(!1),
              r.hz.getInstance(),
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
                    Z.B.ToggleTheaterStereo(),
                  );
              }),
              Q.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = Z.B.GetSummonKeyForTabId(e);
                  if (
                    !this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab",
                    )
                  )
                    throw new Error("Failed to switch to overlay: " + t);
                },
              ),
              Q.Q.SteamVR.SetImplementation(
                "DashboardActionInvoked",
                ({ action_id: e, toggle_value: t }) => {
                  switch (e) {
                    case U.ExitVR:
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitOpenVR();
                      break;
                    case U.Shutdown:
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.ShutdownSystem();
                      break;
                    case U.RoomSetup:
                      this.onRoomSetupClick(!1);
                      break;
                    case U.RoomSetupInstant:
                      this.onRoomSetupClick(!0);
                      break;
                    case U.ToggleRoomView:
                      this.onToggleRoomView(t);
                      break;
                    case U.Recenter:
                      this.onRecenterClick();
                      break;
                    case U.ToggleVideoStream:
                    case U.IncognitoMode:
                      break;
                    case U.ToggleDarkMode:
                      Z.B.m_bDarkMode = !Z.B.isDarkMode;
                      break;
                    case U.UserGuide:
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
                e == r.a0.AppLaunch_Unknown ||
                e == r.a0.AppLaunch_Steam ||
                e == r.a0.Unknown,
              n = S.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              o = S.G3.settings.get("/settings/steamvr/enableHomeApp"),
              i = S.G3.settings.get(u.y3);
            ((t || (!n && o)) && !i) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != i ? i : ""),
                500,
              )),
              (this.m_appStateChangedAutorunDisposer = (0, s.EH)(() => {
                var e;
                const t = v.H.Instance.SceneApplicationState,
                  n = t != r.xY.None;
                if (n && this.m_eSceneApplicationState == r.xY.None)
                  Z.B.HideTheaterOverlay();
                else if (
                  !n &&
                  this.m_eSceneApplicationState != r.xY.None &&
                  !Z.B.isTheaterMode &&
                  null !==
                    (e = S.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of Z.B.m_mapOverlayState)
                    if (e.startsWith(u.wX)) {
                      this.setDockLocation(e, t, f.RA.Theater);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(u.PF) &&
                    !n &&
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
            let n = !1;
            t.bShown !== this.state.bShown &&
              h.G.Instance.playSound(
                this.state.bShown ? h.y.DashboardOpen : h.y.DashboardClose,
              ),
              this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e, t, n, o;
            const i = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(me),
              r = this.getActiveOverlaySummonKey(),
              a = ie.l.BHasMutualCapability(
                re.R
                  .k_SteamVRMutualCapability_SupportForDashboardTabsInDashboardMenu,
              ),
              s = new J.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                n = Z.B.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == u.gB) continue;
              const o = new J.D3();
              o.set_tab_id(n);
              const i = this.shouldShowOverlayTab(t, !0),
                l = a && Z.J.includes(t.summon_overlay_key),
                d = Z.B.m_setOverlaysViewedThisSession.has(
                  t.summon_overlay_key,
                );
              o.set_visible_in_dashboard_menu(i && l),
                o.set_visible_in_dashboard_bar(i && (!l || d)),
                t.summon_overlay_key == u.T2
                  ? o.set_display_name((0, m.Xx)("#Steam"))
                  : o.set_display_name(t.tab_name);
              const c = new J.I_();
              switch (t.summon_overlay_key) {
                case u.T2:
                  c.set_enum(J.mw.k_EVRDashboardTabIcon_Steam);
                  break;
                case u.Xl:
                  c.set_enum(J.mw.k_EVRDashboardTabIcon_DesktopDisplay);
                  break;
                case u.A4:
                  c.set_enum(J.mw.k_EVRDashboardTabIcon_Cog);
                  break;
                case u.PF:
                  if (
                    (c.set_enum(J.mw.k_EVRDashboardTabIcon_RunningGame),
                    v.H.Instance.SceneAppKey.startsWith(u.I8))
                  ) {
                    const e = Number.parseInt(
                      v.H.Instance.SceneAppKey.substring(u.I8.length),
                    );
                    Number.isInteger(e) && c.set_appid(e);
                  }
                  break;
                default:
                  c.set_overlay(t.summon_overlay_key),
                    c.set_enum(J.mw.k_EVRDashboardTabIcon_Unknown);
              }
              o.set_icon(c),
                s.add_tabs(o),
                r == t.summon_overlay_key && s.set_selected_tab_id(n),
                u.A4 == t.summon_overlay_key && s.set_vr_settings_tab_id(n),
                t.summon_overlay_key == u.T2 && s.set_vr_steam_tab_id(n);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.state.desktopIndices.forEach((t) => {
                  var n;
                  const o = `${u.r4}.${t}`,
                    i = Z.B.GetTabIdForSummonKey(o),
                    a = new J.D3();
                  a.set_tab_id(i),
                    a.set_display_name(
                      e > 1
                        ? (0, m.Xx)("#Desktop_X", t)
                        : (0, m.Xx)("#Desktop"),
                    ),
                    a.set_visible_in_dashboard_bar(!0);
                  const l = new J.I_();
                  l.set_enum(J.mw.k_EVRDashboardTabIcon_DesktopDisplay),
                    a.set_icon(l),
                    s.add_tabs(a),
                    (null == r ? void 0 : r.startsWith(u.gB)) &&
                      (null === (n = this.m_refDesktopView.current) ||
                      void 0 === n
                        ? void 0
                        : n.currentDesktopIndex) == t &&
                      s.set_selected_tab_id(i);
                });
            }
            for (const e of i) {
              if (!e.overlay_key) continue;
              const t = Z.B.GetTabIdForSummonKey(e.overlay_key),
                n = new J.D3();
              n.set_tab_id(t),
                n.set_display_name(e.title),
                n.set_visible_in_dashboard_bar(!0);
              const i = new J.I_();
              i.set_enum(J.mw.k_EVRDashboardTabIcon_DesktopWindow),
                i.set_hwnd(Number.parseInt(e.hwnd)),
                n.set_icon(i),
                s.add_tabs(n),
                (null == r ? void 0 : r.startsWith(u.gB)) &&
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.sCurrentOverlayKey) == e.overlay_key &&
                  s.set_selected_tab_id(t);
            }
            s.tabs().sort(ue), (0, Y.W)(s);
            const l = new J.yt();
            l.add_actions(
              J.z3.fromObject({
                action_id: U.UserGuide,
                display_name: "User Guide",
                visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                  U.UserGuide,
                ),
                invocation: J.w7.k_EVRDashboardActionInvocation_Trigger,
                icon: { enum: J.Cj.k_EVRDashboardActionIcon_Unknown },
              }),
            ),
              l.add_actions(
                J.z3.fromObject({
                  action_id: U.RoomSetupInstant,
                  display_name: "Room Setup (Instant)",
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    U.RoomSetupInstant,
                  ),
                  invocation: J.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: {
                    enum: J.Cj.k_EVRDashboardActionIcon_RoomSetupInstant,
                  },
                }),
              ),
              l.add_actions(
                J.z3.fromObject({
                  action_id: U.RoomSetup,
                  display_name: (0, m.Xx)("#RoomSetup"),
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    U.RoomSetup,
                  ),
                  invocation: J.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: J.Cj.k_EVRDashboardActionIcon_RoomSetup },
                }),
              ),
              l.add_actions(
                J.z3.fromObject({
                  action_id: U.ExitVR,
                  display_name: (0, m.Xx)("#PowerMenuExitVR"),
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    U.ExitVR,
                  ),
                  invocation: J.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: J.Cj.k_EVRDashboardActionIcon_ExitVR },
                }),
              ),
              l.add_actions(
                J.z3.fromObject({
                  action_id: U.Shutdown,
                  display_name: (0, m.Xx)("#PowerMenuShutdown"),
                  visible_in_dashboard_menu: this.BShouldShowDashboardAction(
                    U.Shutdown,
                  ),
                  invocation: J.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: J.Cj.k_EVRDashboardActionIcon_Shutdown },
                }),
              ),
              l.add_actions(
                J.z3.fromObject({
                  action_id: U.ToggleRoomView,
                  display_name: (0, m.Xx)("#Toggle_Room_View"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    U.ToggleRoomView,
                  ),
                  invocation: J.w7.k_EVRDashboardActionInvocation_Toggle,
                  active:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                  enabled:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                  icon: { enum: J.Cj.k_EVRDashboardActionIcon_RoomViewOff },
                  icon_active: {
                    enum: J.Cj.k_EVRDashboardActionIcon_RoomViewOn,
                  },
                }),
              ),
              l.add_actions(
                J.z3.fromObject({
                  action_id: U.Recenter,
                  display_name: (0, m.Xx)("#Button_Recenter"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    U.Recenter,
                  ),
                  invocation: J.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: J.Cj.k_EVRDashboardActionIcon_Recenter },
                }),
              ),
              ie.l.BHasMutualCapability(
                re.R
                  .k_SteamVRMutualCapability_SupportForActionSpecialInvocation_Volume,
              ) &&
                l.add_actions(
                  J.z3.fromObject({
                    action_id: U.Volume,
                    invocation: J.w7.k_EVRDashboardActionInvocation_Special,
                    special_invocation:
                      J.Hr.k_EVRDashboardActionSpecialInvocation_Volume,
                    visible_in_dashboard_bar: !0,
                  }),
                ),
              (0, Y.W)(l);
            const d = new J.Jl();
            d.set_windows(
              i.map((e) => {
                const t = new J.fY();
                return (
                  t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key &&
                    t.set_tab_id(Z.B.GetTabIdForSummonKey(e.overlay_key)),
                  t
                );
              }),
            ),
              (0, Y.W)(d);
          }
          GetOverlayVisibleTimeInSeconds(e) {
            var t;
            const n =
              null === (t = ae.U.GetOverlayInfo(e)) || void 0 === t
                ? void 0
                : t.sHandle;
            return n ? VRHTML.VROverlay.GetVisibleTimeInSeconds(n) : 0;
          }
          initializeOverlayState(e) {
            S.G3.GetAppInfo(e).then((t) => {
              var n, o;
              let i = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                i = null !== (n = S.G3.settings.get(t)) && void 0 !== n ? n : 1;
              }
              Z.B.m_mapOverlayState.set(e, {
                refOverlayWidget: l.createRef(),
                dockLocation: f.RA.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: i,
                fLastTotalVisibleTimeInSeconds:
                  this.GetOverlayVisibleTimeInSeconds(e),
              }),
                (null == t ? void 0 : t.starts_theater_mode)
                  ? this.onDockOverlay(e, f.RA.Theater)
                  : le(e) &&
                    (null !==
                      (o = S.G3.settings.get(
                        "/settings/dashboard/autoShowGameTheater",
                      )) &&
                    void 0 !== o &&
                    o
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
            var e, t, n;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, r.OK)({
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
              null === (n = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === n ||
                n.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            if (te.s_dashboardUserDistance) return te.s_dashboardUserDistance;
            const e = Z.B.currentDashboardPosition;
            return e == ne.Near
              ? 0.925
              : e == ne.Middle
              ? 1.05
              : e == ne.Far
              ? 1.2
              : 1.15;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2",
                  )) && void 0 !== e
                  ? e
                  : 0),
              n = Z.B.currentDashboardPosition;
            return n == ne.Near
              ? -0.07 + t
              : n == ne.Middle
              ? -0.08 + t
              : (ne.Far, -0.09 + t);
          }
          static getDashboardScale() {
            var e;
            if (te.s_dashboardUserScale) return te.s_dashboardUserScale;
            let t = 1;
            const n = Z.B.currentDashboardPosition;
            return (
              (t =
                n == ne.Near
                  ? 0.36
                  : n == ne.Middle
                  ? 0.41
                  : n == ne.Far
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
          static getControlBarTranslation() {
            return Z.B.isVRGamepadUI
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
          onDashboardOverlayCreated(e) {
            this.initializeOverlayState(e.overlay_key);
          }
          onDashboardOverlayDestroyed(e) {
            var t;
            e.overlay_key.startsWith(u.Vq)
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay();
            const n = Z.B.m_mapOverlayState.get(e.overlay_key);
            n &&
              this.recordDockStats(e.overlay_key, n, e.visible_time_in_seconds),
              Z.B.m_mapOverlayState.delete(e.overlay_key);
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
            const n = S.G3.settings.get(u.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(n) &&
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
            var t, n;
            this.switchToOverlayInternal(u.gB),
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
                  null === (t = S.G3.settings.get(u.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setDockLocation(e, t, n) {
            t.dockLocation != n &&
              (this.recordDockStats(e, t), (t.dockLocation = n));
          }
          recordDockStats(e, t, n) {
            var o;
            const i = Date.now(),
              r = i - t.nDockStartMs;
            if (r >= 1e3) {
              const i = /^valve\.steam\.desktopgame\.(\d+)$/,
                a = e.match(i),
                s = v.H.Instance.SceneAppKey,
                l =
                  t.dockLocation == f.RA.Theater &&
                  null !==
                    (o = S.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== o &&
                  o;
              void 0 === n && (n = this.GetOverlayVisibleTimeInSeconds(e));
              const d = Math.floor(
                  1e3 * (n - t.fLastTotalVisibleTimeInSeconds),
                ),
                c = {
                  OverlayKeyID: e,
                  Location: f.RA[t.dockLocation],
                  DurationMs: r,
                  VisibleMs: d > 0 ? d : void 0,
                  OverlayAppID:
                    2 == (null == a ? void 0 : a.length)
                      ? parseInt(a[1], 10)
                      : void 0,
                  SceneAppKeyID: "" != s ? s : void 0,
                  autoShowGameTheater: l,
                };
              (t.fLastTotalVisibleTimeInSeconds = n),
                g.e.instance.AddRow("SteamVROverlayDockStats", c);
            }
            t.nDockStartMs = i;
          }
          onDockOverlay(e, t, n) {
            var o, i;
            let r = !1;
            (t != f.RA.LeftHand && t != f.RA.RightHand && t != f.RA.Theater) ||
              Z.B.m_mapOverlayState.forEach((n, o) => {
                n.dockLocation == t &&
                  (this.setDockLocation(e, n, f.RA.Dashboard), (r = !0));
              });
            const a = Z.B.m_mapOverlayState.get(e);
            if (
              (a &&
                (a.dockLocation == f.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                this.setDockLocation(e, a, t),
                (a.xfInitial = n)),
              t === f.RA.Dashboard)
            )
              if (e.startsWith(u.r4)) {
                const t = Number.parseInt(e.substring(u.r4.length + 1));
                null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t);
              } else
                e.startsWith(u.Vq) &&
                  (null === (i = this.m_refDesktopView.current) ||
                    void 0 === i ||
                    i.onWindowViewChange(e));
            else
              t == f.RA.Theater &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("theater_mode"),
                r || j.C.m_bShowFloor || (Z.B.m_bDarkMode = !0));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = Z.B.isVRGamepadUI,
              n = this.getActiveOverlay();
            if (!n) return null;
            const o = Z.B.m_mapOverlayState.get(e),
              i = o ? o.fScale : 1,
              a = t ? Z.B.m_fVRGamepadUI_GlobalActiveOverlayScale : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { scale: a },
                l.createElement(r.sl, {
                  mountedId: n.mountable_id,
                  fDashboardScale: i,
                }),
              ),
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == u.PF
              ? v.H.Instance.SceneApplicationState != r.xY.None
              : !(
                  (void 0 === e.icon_overlay_key && null == e.icon_uri) ||
                  !e.summon_overlay_key ||
                  (!t && e.summon_overlay_key == u.A4) ||
                  (!t && e.summon_overlay_key == u.Xl) ||
                  (!t && e.summon_overlay_key.startsWith(u.r4)) ||
                  (!t && e.summon_overlay_key.startsWith(u.Vq)) ||
                  (!t &&
                    e.summon_overlay_key.startsWith(u.MZ) &&
                    !e.summon_overlay_key.startsWith(u.wX)) ||
                  (!t &&
                    ((n = e.summon_overlay_key),
                    null !== (o = null == n ? void 0 : n.startsWith(u.MI)) &&
                      void 0 !== o &&
                      o))
                );
            var n, o;
          }
          computeFilteredOverlayTabs(e) {
            return Object.values(this.m_mapExternalOverlays)
              .filter((t) => this.shouldShowOverlayTab(t, e))
              .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let n = this.m_mapExternalOverlays[t];
              if (n.summon_overlay_key == e) return n;
            }
            return null;
          }
          switchToHomeOverlay() {
            const e = ["gamescope.steam", u.T2, u.po];
            for (const t of e)
              if (this.hasDashboardOverlay(t)) {
                this.switchToOverlayInternal(t, "switchToDashboardLibrary");
                break;
              }
          }
          switchToSteamOverlay() {
            Z.B.isVRGamepadUI &&
              this.switchToOverlayInternal(u.T2, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var n, o, i, a;
            if (!e) return !1;
            if (e == u.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                n = "bindingui/" + r.qA[(0, r.Op)()];
              this.m_mailbox.SendMessage(n, t), (e = u.RM);
            }
            if (e.startsWith(u.r4)) {
              const t = Number.parseInt(e.substring(u.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t)),
                (e = u.gB);
            } else if (e.startsWith(u.Vq)) {
              if (
                !(null === (o = this.m_refDesktopView.current) || void 0 === o
                  ? void 0
                  : o.hasWindowView(e))
              )
                return !1;
              null === (i = this.m_refDesktopView.current) ||
                void 0 === i ||
                i.onWindowViewChange(e),
                (e = u.gB);
            }
            let s = this.findDashboardTab(e);
            return (
              !!s &&
              (this.computeFilteredOverlayTabs(!1).includes(s) &&
                S.G3.SetSettingsValue(
                  u.nf,
                  null !== (a = s.summon_overlay_key) && void 0 !== a ? a : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              Z.B.m_setOverlaysViewedThisSession.add(s.summon_overlay_key),
              this.setState({ sActiveOverlayID: s.mountable_id }),
              g.e.instance.RecordUIEvent(
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
              e.push(S.G3.settings.get(u.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  te.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == u.po && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(u.T2),
              null == t && e.push(u.po);
            const n = e.find(this.hasDashboardOverlay);
            n && this.switchToOverlayInternal(n);
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
            return t == u.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          getActiveOverlayState() {
            const e = this.getActiveOverlayKey();
            return Z.B.m_mapOverlayState.get(e);
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
            this.getActiveOverlaySummonKey() == u.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e, t) {
            var n;
            if (!S.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const o = Z.B.m_mapOverlayState.get(e.overlay_key);
            (null == o ? void 0 : o.dockLocation) != f.RA.Theater &&
              (t &&
                (this.show(
                  null !== (n = e.reason) && void 0 !== n ? n : "unknown",
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
            const n = Z.B.m_mapOverlayState.get(e.overlay_key);
            n
              ? n.dockLocation != t
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
            (null === (e = Z.B.m_mapOverlayState.get(t)) || void 0 === e
              ? void 0
              : e.dockLocation) == f.RA.Theater &&
              this.onDockOverlay(t, f.RA.Dashboard);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(u.f8)
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
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
            g.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = v.H.Instance.SceneAppKey,
              n = v.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              n
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(u.PF)),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let o = { type: te.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
              (0, r.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: oe.None }),
              g.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView(e) {
            var t;
            const n =
                null !==
                  (t = VRHTML.VRControlPanel.GetCameraRoomViewVisible()) &&
                void 0 !== t &&
                t,
              o = "boolean" == typeof e ? e : !n;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(o);
          }
          onLegacyQuickLaunchButtonClick() {
            this.switchToOverlayInternal(u.po);
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
              t = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              n = this.BShouldShowDashboardAction(U.Shutdown);
            let o = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (o = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                r.Uk.DeviceCanPowerOff_Bool,
              ));
            const i = v.H.Instance.SceneAppName,
              a = v.H.Instance.SceneAppIsHome;
            let s, d;
            return (
              (s = a
                ? (0, m.Xx)("#Exit_SteamVR_Home")
                : i
                ? (0, m.Xx)("#PowerMenuQuitSceneApp", i)
                : (0, m.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (d = a
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  !!Z.B.isVRGamepadUI &&
                    l.createElement(C.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(u.po),
                          this.showPopoverMenu(oe.None);
                      },
                    }),
                  o &&
                    l.createElement(C.dy, {
                      label: (0, m.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(oe.None);
                      },
                    }),
                  t &&
                    e &&
                    l.createElement(C.dy, {
                      label: s,
                      imageUrl: d,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(oe.None);
                      },
                    }),
                  l.createElement(C.dy, {
                    label: (0, m.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  n &&
                    l.createElement(C.dy, {
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
              this.setState({ eShowPopoverMenu: oe.None });
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
            if (i.summon_overlay_key == u.gB) {
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
                return l.createElement(C.Rk, {
                  name:
                    null === (n = this.state.mapWindows.get(e)) || void 0 === n
                      ? void 0
                      : n.title,
                  iconUrl: this.getDashboardIconUri(i),
                });
              }
              return l.createElement(C.Rk, {
                name:
                  "Desktop " +
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(i),
              });
            }
            if (i.summon_overlay_key == u.RM)
              return l.createElement(C.Rk, {
                name: (0, m.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              });
            let r = i.tab_name;
            return l.createElement(C.Rk, {
              name: r,
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
            let n = [];
            const o =
              null !== (e = S.G3.settings.get(u.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, r.M9)((0, r.eQ)(e[3], e[0])),
                i = (0, r.M9)((0, r.eQ)(e[1], e[0])),
                a = (0, r.dq)(t, i),
                s = (0, r.Pd)((0, r.tS)(t, i, a)),
                d = (0, r.LY)((0, r.eQ)(e[0], e[3]));
              if (d < 0.4) continue;
              let c = Math.max(1, Math.floor(d));
              for (let t = 0; t < c; t++) {
                let i = (t + 1) / (c + 1),
                  a = (0, r.Oq)();
                (a.rotation = s),
                  (a.translation = (0, r.q9)(i, e[0], e[3])),
                  (a.scale = { x: 0.005, y: 0.005, z: o });
                let d = l.createElement(
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
                n.push(d);
              }
              if (n.length > 20) break;
            }
            return n;
          }
          render() {
            var e, t;
            const n = v.H.Instance.SceneApplicationState !== r.xY.None;
            if (!n && Z.B.isDarkMode) {
              const n =
                  null !==
                    (e = S.G3.settings.get(
                      "/settings/dashboard/theaterModeBrightness",
                    )) && void 0 !== e
                    ? e
                    : 0.5,
                o =
                  null !==
                    (t = S.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== t
                    ? t
                    : 0.5;
              (0, r.OK)({
                color_mult: Math.pow(n, 2.2),
                reflection_mult: Math.pow(o, 2.2),
                roomview_mult: [0.12, 0.16, 0.6],
                allow_skydome: !j.C.m_bShowFloor,
              });
            } else if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == u.A4,
                t = S.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                );
              (v.H.Instance.SceneAppIsHome && t) || e || !n
                ? (0, r.OK)({
                    color_mult: 1,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  })
                : (0, r.OK)({
                    color_mult: 0.15,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  });
            } else
              (0, r.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              });
            const o = this.getActiveOverlaySummonKey(),
              i = this.state.bShown && this.state.setForcingBoundsVisible[o],
              a = i && i.size > 0;
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
            return C.Eu.has(e)
              ? C.Eu.get(e)
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
              n = C.IO.Center;
            return l.createElement(C.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: n,
              active: this.isOverlayActive(e.summon_overlay_key),
              onClick: () => this.switchToOverlayInternal(e.summon_overlay_key),
            });
          }
          isDesktopTrayActive() {
            var e;
            return (
              (this.isOverlayActive(u.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith(u.Vq))) &&
              (this.state.eShowPopoverMenu == oe.None ||
                this.state.eShowPopoverMenu == oe.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == oe.Volume;
          }
          isSteamOverlayActive() {
            return (
              this.isOverlayActive(u.T2) &&
              this.state.eShowPopoverMenu == oe.None
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(u.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith(u.Vq))
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
              enable: null != e ? e : !Z.B.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          ToggleVideoStream() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_videostream",
            });
          }
          BShouldShowDashboardAction(e) {
            var t, n, o, i, r, a;
            const s =
                null !== (t = S.G3.settings.get(u.Av)) && void 0 !== t && t,
              l =
                null !== (n = S.G3.settings.get(u.k_)) && void 0 !== n ? n : 0,
              d = VRHTML.BIsLinkServer();
            switch (e) {
              case U.ExitVR:
                return (
                  null ===
                    (o = S.G3.settings.get(
                      "/settings/dashboard/allowExitVR",
                    )) ||
                  void 0 === o ||
                  o
                );
              case U.Shutdown:
                return S.G3.settings.get(
                  "/settings/dashboard/allowSystemShutdown",
                );
              case U.ToggleRoomView:
                return s && l > 0 && !(this.state.bLinkStreamActive && d);
              case U.ToggleVideoStream:
                return !1;
              case U.Recenter:
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
              case U.IncognitoMode:
                return !1;
              case U.ToggleDarkMode:
                return Z.B.isTheaterMode || j.C.m_bShowFloor;
              case U.UserGuide:
                return (
                  null !==
                    (r = S.G3.settings.get(
                      "/settings/dashboard/allowUserGuide",
                    )) &&
                  void 0 !== r &&
                  r
                );
              case U.RoomSetup:
              case U.RoomSetupInstant:
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
          renderLegacyControlBar(e, t, n) {
            var o, i, a, s;
            const d = Z.B.isVRGamepadUI,
              p = Z.B.isDarkMode,
              h = n ? 1 : 0,
              g = te.k_nControlBarWidthMeters,
              y =
                null ===
                  (o = S.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === o ||
                o,
              b =
                null ===
                  (i = S.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === i ||
                i,
              f = ae.U.BOverlayExists(u.T2),
              k = !d && !0,
              I = !(
                null !==
                  (a = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== a &&
                a
              ),
              E = (VRHTML.BIsLinkServer(), v.H.Instance.SceneApplicationState),
              M = v.H.Instance.SceneAppIsHome,
              R =
                null ===
                  (s = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === s ||
                s
                  ? u.ml
                  : null,
              w = v.H.Instance.SceneAppKey;
            let T = "images/appimage_default.png";
            return (
              w && (T = "/app/image?app_key=" + w),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  r.Dd,
                  { value: h },
                  l.createElement(
                    r.VW,
                    { color: Z.B.ControlBarTint },
                    l.createElement(
                      r.wx,
                      { translation: { z: 1e-5 } },
                      l.createElement(
                        r.s_,
                        {
                          curvature_origin_id: R,
                          width: g,
                          interactive: n,
                          id: u.WR,
                          debug_name: "Controls",
                        },
                        l.createElement(
                          c.q,
                          { className: "ControlBar MainControlBar" },
                          l.createElement(
                            "div",
                            { className: "Section Left" },
                            y &&
                              l.createElement(C.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_menu_c.svg",
                                label: (0, m.Xx)("#Menu"),
                                style: C.zk.Small,
                                onClick: () => this.showPopoverMenu(oe.Power),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            l.createElement(
                              C.dw,
                              { style: C.zk.Small },
                              f &&
                                l.createElement(C.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/vr_steam.svg",
                                  label: (0, m.Xx)("#Steam"),
                                  active: this.isSteamOverlayActive(),
                                  onClick: () => this.switchToSteamOverlay(),
                                }),
                              !1,
                              k &&
                                l.createElement(C.B8, {
                                  label: (0, m.Xx)("#Library"),
                                  imageUrl:
                                    "/dashboard/images/icons/svr_items.svg",
                                  active: this.isOverlayActive(u.po),
                                  onClick: this.onLegacyQuickLaunchButtonClick,
                                }),
                              b &&
                                l.createElement(C.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_desktop_alt.svg",
                                  label: (0, m.Xx)("#Desktops"),
                                  active: this.isDesktopTrayActive(),
                                  onClick: () =>
                                    this.switchToOverlayInternal(u.gB),
                                }),
                            ),
                            l.createElement(
                              C.dw,
                              { style: C.zk.Small },
                              l.createElement(
                                l.Fragment,
                                null,
                                e.map(
                                  this.renderExternalOverlayControlBarButton,
                                ),
                                t.length > 0 &&
                                  l.createElement(C.B8, {
                                    imageUrl:
                                      "/dashboard/images/icons/svr_more.svg",
                                    label: (0, m.Xx)(
                                      "#X_More_Overlays",
                                      t.length,
                                    ),
                                    active:
                                      this.state.eShowPopoverMenu ==
                                      oe.ExternalOverlays,
                                    onClick: () =>
                                      this.showPopoverMenu(oe.ExternalOverlays),
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
                            E != r.xY.None &&
                              n &&
                              l.createElement(
                                "div",
                                { className: "NowPlayingSpacer" },
                                l.createElement(
                                  _.d,
                                  {
                                    allowableParentSelectors: [
                                      ".DashboardMain",
                                    ],
                                  },
                                  l.createElement(
                                    r.VW,
                                    { color: Z.B.ControlBarTint },
                                    l.createElement(
                                      r.wx,
                                      { translation: { z: 0.02 } },
                                      l.createElement(
                                        r.s_,
                                        {
                                          debug_name: "NowPlayingButton",
                                          interactive: !0,
                                          target_dpi_panel_id: u.WR,
                                          curvature_origin_id: R,
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "ControlBar" },
                                          l.createElement(C.NT, {
                                            label: M
                                              ? (0, m.Xx)("#SteamVR_Home")
                                              : (0, m.Xx)("#Now_Playing"),
                                            active: this.isOverlayActive(u.PF),
                                            style: C.zk.App,
                                            imageUrl: T,
                                            onClick: () =>
                                              this.switchToOverlayInternal(
                                                u.PF,
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
                              C.dw,
                              { style: C.zk.Small },
                              this.BShouldShowDashboardAction(
                                U.ToggleDarkMode,
                              ) &&
                                l.createElement(C.B8, {
                                  imageUrl: p
                                    ? "/dashboard/images/icons/svr_nightmode.svg"
                                    : "/dashboard/images/icons/svr_lightmode.svg",
                                  label: (0, m.Xx)("#Settings_ToggleDarkMode"),
                                  onClick: () => (Z.B.m_bDarkMode = !p),
                                  active: p,
                                }),
                              !1,
                              !1,
                              this.BShouldShowDashboardAction(U.Recenter) &&
                                l.createElement(C.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_recenter.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, m.Xx)("#Button_Recenter"),
                                  onClick: this.onRecenterClick,
                                }),
                              this.BShouldShowDashboardAction(U.RoomSetup) &&
                                l.createElement(C.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_room_setup.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, m.Xx)("#RoomSetup"),
                                  onClick: () => this.onRoomSetupClick(!1),
                                }),
                              this.BShouldShowDashboardAction(
                                U.ToggleRoomView,
                              ) &&
                                l.createElement(C.B8, {
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
                              l.createElement(C.D6, {
                                active:
                                  this.state.eShowPopoverMenu == oe.Volume,
                                refVolumeTray: this.m_refVolumeTray,
                                onShowTray: () =>
                                  this.showPopoverMenu(oe.Volume),
                                onHideTray: () => this.showPopoverMenu(oe.None),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            ),
                            I &&
                              l.createElement(C.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_settings.svg",
                                active: this.isOverlayActive(u.A4),
                                enabled: this.hasDashboardOverlay(u.A4),
                                label: (0, m.Xx)("#VRSettings"),
                                style: C.zk.Small,
                                centerPanelAnchorID: "VolumeButton",
                                onClick: () =>
                                  this.switchToOverlayInternal(u.A4),
                              }),
                          ),
                        ),
                        n && this.renderLegacyControlBarTrays(R),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const n = Z.B.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(k.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: n,
                onToggleWindowList: () => this.showPopoverMenu(oe.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(C.z, {
                ref: this.m_refVolumeTray,
                curvatureOriginId: e,
                scale: t,
                position: 0.337,
                visible: this.isVolumeTrayActive(),
                tintColor: n,
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
            const n =
              !!(
                1 &
                (null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          r.Uk.DashboardLinkSupport_Int32,
                        )) && void 0 !== t
                  ? t
                  : 0)
              ) && this.state.bLinkStreamActive;
            return l.createElement(
              l.Fragment,
              null,
              n &&
                l.createElement(
                  r.wx,
                  { translation: { y: 0.075, z: 0 } },
                  l.createElement(ce, {
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
                  overlay_key: u.BZ,
                  origin: r.Ic.TopCenter,
                  meters_per_pixel: Z.B.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.08,
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
                  l.createElement(r.wx, { id: u.dG, translation: { y: -0.1 } }),
                ),
              ),
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(Z.B.m_mapOverlayState, ([e, t]) => ({
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
                    v.H.Instance.SceneApplicationState !== r.xY.None,
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
              this.isOverlayActive(u.gB) &&
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
            var e, t, n, o;
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
                  (o =
                    null === (n = this.m_refDesktopView.current) || void 0 === n
                      ? void 0
                      : n.desktopCount) && void 0 !== o
                  ? o
                  : 1,
              s = S.G3.settings.get(u.YL) || Z.B.m_bShowLegacyBar;
            return l.createElement(
              l.Fragment,
              null,
              s &&
                l.createElement(
                  r.Y9,
                  {
                    tabName: (0, m.Xx)("#Library"),
                    iconUri: "/dashboard/images/icons/svr_items.svg",
                    summonOverlayKey: u.po,
                  },
                  l.createElement(G, {
                    visible: this.state.bShown && this.isOverlayActive(u.po),
                    onGameLaunched: this.onGameLaunched,
                  }),
                ),
              l.createElement(
                r.Y9,
                { tabName: (0, m.Xx)("#Now_Playing"), summonOverlayKey: u.PF },
                l.createElement(T, {
                  visible: this.state.bShown && this.isOverlayActive(u.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                r.Y9,
                {
                  summonOverlayKey: u.gB,
                  tabName:
                    a > 1 ? (0, m.Xx)("#Desktop_X", i) : (0, m.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(k.N, {
                  visible: this.isDesktopViewVisible(),
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              l.createElement(d._, {
                visible: this.state.bShown && this.isOverlayActive(u.A4),
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
              (t.startsWith(u.Vq)
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
            var e, t, n, o, i;
            const a = Z.B.isDarkMode,
              s = a ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              d = a ? 0 : 0.1;
            let c = !1,
              h = !1,
              g = !1;
            const _ = this.getActiveOverlayKey(),
              v =
                null === (e = ae.U.GetOverlayInfo(_)) || void 0 === e
                  ? void 0
                  : e.sHandle;
            if (v) {
              (c = VRHTML.VROverlay.GetFlag(v, r.Z9.EnableControlBarKeyboard)),
                (h = VRHTML.VROverlay.GetFlag(v, r.Z9.EnableControlBarClose));
              const e = !1;
              g = VRHTML.VROverlay.GetFlag(v, r.Z9.EnableSteamUIButtons) && !e;
            }
            const y =
                null !==
                  (t = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin",
                  )) && void 0 !== t
                  ? t
                  : 0.75,
              b =
                null !==
                  (n = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax",
                  )) && void 0 !== n
                  ? n
                  : 1.5,
              k =
                null ===
                  (o = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o
                  ? u.ml
                  : null,
              I = { x: 0, y: -0.15, z: 0.1 },
              E = this.GetActiveOverlayAnchorIDs();
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                {
                  parent_id: E.strBottomCenterAnchorID,
                  translation: { y: 0.003 },
                },
                l.createElement(
                  r.VW,
                  { color: s },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: k,
                      origin: r.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: E.strBottomCenterAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: r.Vv.SingleTap,
                      reflect: d,
                    },
                    l.createElement("div", {
                      className: "OverlayControlBarBackground",
                    }),
                  ),
                ),
              ),
              l.createElement(
                r.wx,
                {
                  parent_id: E.strBottomCenterAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                l.createElement(
                  r.VW,
                  { color: s },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: k,
                      origin: r.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: u.WR,
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
                        l.createElement(p.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: y,
                          max: b,
                          value: this.activeOverlayScale,
                          valueStyleVariant: p.px.OnHandle,
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
                        g &&
                          l.createElement(C.zN, {
                            icon: l.createElement(K.VC, {
                              button: q.F.HomeMenu,
                              type: K.yV.Knockout,
                              size: K.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: I,
                            onClick: () => {
                              this.onSteamButtonPressed(
                                r.ZP.k_EButton_Reserved0,
                              );
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        g &&
                          l.createElement(C.zN, {
                            icon: l.createElement(K.VC, {
                              button: q.F.QuickMenu,
                              type: K.yV.Knockout,
                              size: K.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: I,
                            onClick: () => {
                              this.onSteamButtonPressed(
                                r.ZP.k_EButton_Reserved1,
                              );
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        !1,
                        this.isDesktopOverlayActive() &&
                          (null === (i = this.m_refDesktopView.current) ||
                          void 0 === i
                            ? void 0
                            : i.renderControlBarButtons(I)),
                        c &&
                          l.createElement(C.CS, {
                            tooltipTranslation: I,
                            overlayKey: this.getActiveOverlayKey(),
                          }),
                        l.createElement(C.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, m.Xx)("#DockOnLeftController"),
                          tooltipTranslation: I,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = Z.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.LeftHand
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              r.Kg.TrackedControllerRole_LeftHand,
                            ) != r.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            f.RA.LeftHand,
                        }),
                        l.createElement(C.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, m.Xx)("#DockOnRightController"),
                          tooltipTranslation: I,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = Z.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.RightHand
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              r.Kg.TrackedControllerRole_RightHand,
                            ) != r.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            f.RA.RightHand,
                        }),
                        l.createElement(C.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, m.Xx)("#FloatInWorld"),
                          tooltipTranslation: I,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (0, f.fT)(
                              null === (e = Z.B.m_mapOverlayState.get(t)) ||
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
                        l.createElement(C.zN, {
                          iconUrl: "/dashboard/images/icons/svr_theater.svg",
                          title: (0, m.Xx)("#ToggleTheaterMode"),
                          tooltipTranslation: I,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = Z.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.Theater
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.Theater);
                          },
                          active:
                            this.getActiveOverlayDockLocation() == f.RA.Theater,
                        }),
                        h &&
                          l.createElement(C.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, m.Xx)(
                              le(_) ? "#QuitApp" : "#CloseOverlay",
                            ),
                            tooltipTranslation: I,
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
            const t = Z.B.isDarkMode,
              n = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              o = t ? 0 : 0.1,
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
                    { color: n },
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: e,
                        origin: r.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: u.WR,
                        debug_name: "StatusBar",
                        reflect: o,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: a } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          i && this.renderStatusBarTitle(),
                          l.createElement(C.j6, {
                            role: r.Kg.TrackedControllerRole_LeftHand,
                            style: b.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(C.j6, {
                            deviceIndex: r.wU,
                            style: b.A.VerticalBattery,
                          }),
                          l.createElement(C.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(C.j6, {
                            role: r.Kg.TrackedControllerRole_RightHand,
                            style: b.A.HorizontalPips,
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
                    overlay_key: u.rl,
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
            var e, t, n, o, i;
            const a = this.computeFilteredOverlayTabs(!1),
              s = Z.B.isVRGamepadUI,
              d = s,
              p = !s || Z.B.m_bShowLegacyBar;
            let h = [],
              g = [],
              _ =
                null !== (e = S.G3.settings.get(u.FM)) && void 0 !== e ? e : 2;
            if (a.length > _) {
              const e = S.G3.settings.get(u.nf);
              (h = [
                null !== (t = a.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : a[0],
              ]),
                (g = a.filter((e) => !h.includes(e)));
            } else h = a;
            let v = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && v.push(e);
            });
            const y = this.getActiveOverlayDockLocation(),
              b = (0, f.fT)(y),
              k = (0, f.sg)(y);
            let I = this.getActiveOverlayKey();
            const E =
                null === (n = ae.U.GetOverlayInfo(I)) || void 0 === n
                  ? void 0
                  : n.sHandle,
              M = !!E && VRHTML.VROverlay.GetFlag(E, r.Z9.EnableControlBar);
            let R = 2,
              w = 2.5;
            const T = S.G3.settings.get("/settings/dashboard/theaterPosition");
            T == ne.Near
              ? ((R *= 0.5), (w *= 0.5))
              : T == ne.Middle
              ? ((R *= 1), (w *= 1))
              : T == ne.Far
              ? ((R *= 4), (w *= 2.5))
              : T == ne.Standard && ((R *= 1), (w *= 1));
            const D =
                null ===
                  (o = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o,
              O = D ? u.ml : null,
              B = { y: M ? -0.9 : -1.03375, z: 0.05 },
              x = d ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              A = te.k_nControlBarPitch;
            let P = D ? 1 : 0;
            const V =
                null !==
                  (i = S.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== i &&
                i,
              N = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: V && this.state.bPlacementModeActive,
                },
                l.createElement(
                  r.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    r.wx,
                    {
                      translation: {
                        x: 0,
                        y: te.getDashboardVerticalPosition(),
                        z: 1 * -te.getDashboardDistance(),
                      },
                      rotation: { x: 0 },
                    },
                    l.createElement(
                      r.wx,
                      { translation: { y: -0.15 } },
                      l.createElement(
                        z.Z,
                        null,
                        !1,
                        l.createElement(
                          r.wx,
                          { translation: { y: 0.15 } },
                          l.createElement(r.wx, {
                            id: O,
                            translation: { z: te.getDashboardDistance() + 1.8 },
                          }),
                          l.createElement(
                            r.wx,
                            { scale: te.getDashboardScale() },
                            l.createElement(
                              r.wx,
                              { parent_id: N },
                              s
                                ? this.renderVRGamepadUIHeader(O)
                                : this.renderLegacyHeader(O),
                            ),
                            l.createElement(
                              r.wx,
                              {
                                id: "active_overlay_transform",
                                translation: B,
                                ref: this.m_refOverlayTransform,
                              },
                              !b && k && this.renderActiveOverlay(),
                              !b &&
                                !k &&
                                l.createElement(
                                  C.lL,
                                  {
                                    additionalClassNames: M
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
                                          this.onDockOverlay(I, f.RA.Dashboard);
                                        },
                                      },
                                      (0, m.Xx)("#DockHere"),
                                    ),
                                  ),
                                ),
                            ),
                            M && k && this.renderOverlayControlBar(),
                            !1,
                            l.createElement(
                              r.wx,
                              { parent_id: d ? u.dG : u.f$ },
                              l.createElement(X.J, {
                                curvature_origin_id: O,
                                tint: Z.B.ControlBarTint,
                                onStartMove: this.onGrabStart,
                                onEndMove: this.onGrabEnd,
                              }),
                            ),
                            l.createElement(
                              r.wx,
                              { translation: x, id: u.Qg },
                              l.createElement(r.wx, {
                                id: u.f$,
                                translation: { y: 0.08, z: -0.12 },
                              }),
                              l.createElement(
                                r.wx,
                                {
                                  rotation: { x: A },
                                  curvature_pitch: A,
                                  translation: d ? { y: -0.65, z: 0.2 } : {},
                                },
                                this.renderLegacyControlBar(h, g, p),
                                l.createElement(
                                  r.wx,
                                  { translation: { y: -0.65, z: -0.01 } },
                                  l.createElement(pe, null),
                                ),
                              ),
                              d &&
                                l.createElement(
                                  r.wx,
                                  { rotation: { x: A }, curvature_pitch: A },
                                  this.renderVRGamepadUIBar(O),
                                ),
                              l.createElement(
                                r.wx,
                                { rotation: { x: A } },
                                l.createElement(
                                  z.Z,
                                  null,
                                  l.createElement(
                                    r.wx,
                                    {
                                      rotation: { x: -10 },
                                      curvature_pitch: A,
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
                              this.state.eShowPopoverMenu == oe.Power &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                                    rotation: { y: 19 * P },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: O,
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
                                oe.ExternalOverlays &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                                    rotation: { y: 6 * P },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: O,
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
                                        g.map((e) =>
                                          l.createElement(C.dy, {
                                            key: e.mountable_id,
                                            imageUrl:
                                              this.getDashboardIconUri(e),
                                            label: e.tab_name,
                                            onClick: () => {
                                              this.switchToOverlayInternal(
                                                e.summon_overlay_key,
                                              ),
                                                this.showPopoverMenu(oe.None);
                                            },
                                          }),
                                        ),
                                        " ",
                                      ),
                                    ),
                                  ),
                                ),
                              this.state.eShowPopoverMenu == oe.Windows &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                                    rotation: { y: -16 * P },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: O,
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
                                        v.map((e) =>
                                          l.createElement(C.dy, {
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
                                                this.showPopoverMenu(oe.None);
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
          (0, i.gn)(
            [a.ak],
            de.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, i.gn)([a.ak], de.prototype, "onRoomViewChanged", null),
          (0, i.gn)([a.ak], de.prototype, "onLinkStreamActiveEvents", null),
          (0, i.gn)([a.ak], de.prototype, "onKeyboardVisibilityChanged", null),
          (0, i.gn)([a.ak], de.prototype, "onGrabStart", null),
          (0, i.gn)([a.ak], de.prototype, "onGrabEnd", null),
          (0, i.gn)(
            [a.ak],
            de.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, i.gn)([a.ak], de.prototype, "onDashboardOverlayCreated", null),
          (0, i.gn)([a.ak], de.prototype, "onDashboardOverlayDestroyed", null),
          (0, i.gn)([a.ak], de.prototype, "onUpdateDashboardTabs", null),
          (0, i.gn)([a.ak], de.prototype, "onWindowViewCreated", null),
          (0, i.gn)([a.ak], de.prototype, "onWindowViewDestroyed", null),
          (0, i.gn)([a.ak], de.prototype, "onUpdateWindowList", null),
          (0, i.gn)([a.ak], de.prototype, "onUpdateDebugInfo", null),
          (0, i.gn)([a.ak], de.prototype, "onDockOverlay", null),
          (0, i.gn)([a.ak], de.prototype, "onShowDashboardRequested", null),
          (0, i.gn)([a.ak], de.prototype, "onDockOverlayRequested", null),
          (0, i.gn)([a.ak], de.prototype, "onHideTheaterMode", null),
          (0, i.gn)([a.ak], de.prototype, "onHideDashboardRequested", null),
          (0, i.gn)([a.ak], de.prototype, "show", null),
          (0, i.gn)([a.ak], de.prototype, "hide", null),
          (0, i.gn)([a.ak], de.prototype, "setPlacementModeActive", null),
          (0, i.gn)([a.ak], de.prototype, "onToggleRoomView", null),
          (0, i.gn)(
            [a.ak],
            de.prototype,
            "onLegacyQuickLaunchButtonClick",
            null,
          ),
          (0, i.gn)([a.ak], de.prototype, "onRecenterClick", null),
          (0, i.gn)([a.ak], de.prototype, "onUserGuideClick", null),
          (0, i.gn)([a.ak], de.prototype, "onRoomSetupClick", null),
          (0, i.gn)([a.ak], de.prototype, "onToggleGamepadFocus", null),
          (0, i.gn)([a.ak], de.prototype, "renderLegacyPowerMenu", null),
          (0, i.gn)([a.ak], de.prototype, "startPopoverMenuTimeout", null),
          (0, i.gn)([a.ak], de.prototype, "clearPopoverMenuTimeout", null),
          (0, i.gn)([a.ak], de.prototype, "showPopoverMenu", null),
          (0, i.gn)([a.ak], de.prototype, "popoverMenuMouseLeave", null),
          (0, i.gn)([a.ak], de.prototype, "popoverMenuMouseUp", null),
          (0, i.gn)([a.ak], de.prototype, "hasDashboardOverlay", null),
          (0, i.gn)(
            [a.ak],
            de.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, i.gn)([a.ak], de.prototype, "isDesktopTrayActive", null),
          (0, i.gn)([a.ak], de.prototype, "isVolumeTrayActive", null),
          (0, i.gn)([a.ak], de.prototype, "isSteamOverlayActive", null),
          (0, i.gn)([a.ak], de.prototype, "isDesktopOverlayActive", null),
          (0, i.gn)([a.ak], de.prototype, "handleVRLinkInfoClick", null),
          (0, i.gn)([a.ak], de.prototype, "ToggleIncognitoMode", null),
          (0, i.gn)([a.ak], de.prototype, "ToggleVideoStream", null),
          (0, i.gn)([a.ak], de.prototype, "getRenderModelForShape", null),
          (0, i.gn)([a.ak], de.prototype, "isDesktopViewVisible", null),
          (0, i.gn)([a.ak], de.prototype, "onGameLaunched", null),
          (0, i.gn)([a.ak], de.prototype, "onAddPortal", null),
          (0, i.gn)([a.ak], de.prototype, "onRemovePortal", null),
          (0, i.gn)([a.ak], de.prototype, "onActiveOverlayScaleChange", null),
          (0, i.gn)([a.ak], de.prototype, "onActiveOverlayClosed", null),
          (0, i.gn)([a.ak], de.prototype, "onSteamButtonPressed", null),
          (0, i.gn)([s.LO], de, "s_dashboardUserDistance", void 0),
          (0, i.gn)([s.LO], de, "s_dashboardUserScale", void 0),
          (de = te = (0, i.gn)([y.Pi], de));
        const ce = (0, y.Pi)(function (e) {
            var t;
            if (!Z.B.isVRGamepadUI) return null;
            let n =
              null !== (t = VRHTML.GetHostInfo(r.zA.Hostname)) && void 0 !== t
                ? t
                : "unknown";
            return l.createElement(
              r.s_,
              { target_dpi_panel_id: u.WR, interactive: !0 },
              l.createElement(
                "div",
                { className: "FloatingButtonRow" },
                l.createElement(
                  c.z,
                  { className: "ButtonControl", onClick: e.onClick },
                  l.createElement("span", null, n.toLowerCase(), " "),
                ),
              ),
            );
          }),
          pe = (0, y.Pi)(function (e) {
            return null;
          }),
          he = [
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                J.mw.k_EVRDashboardTabIcon_Steam
              );
            },
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                J.mw.k_EVRDashboardTabIcon_RunningGame
              );
            },
            (e) => null == e.icon(),
            (e) => {
              var t;
              return (
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
                J.mw.k_EVRDashboardTabIcon_DesktopDisplay
              );
            },
          ];
        function ue(e, t) {
          let n = -1,
            o = -1;
          for (let i = 0; i < he.length && n < 0 && o < 0; i++)
            he[i](e) && (n = i), he[i](t) && (o = i);
          return (
            n < 0 && (n = he.length),
            o < 0 && (o = he.length),
            n == o ? e.tab_id() - t.tab_id() : n - o
          );
        }
        function me(e, t) {
          var n, o, i, r, a, s;
          let l;
          const d =
              null !== (n = null == e ? void 0 : e.product_name) && void 0 !== n
                ? n
                : "",
            c =
              null !== (o = null == t ? void 0 : t.product_name) && void 0 !== o
                ? o
                : "";
          if (((l = d.localeCompare(c)), 0 != l)) return l;
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
      8178: (e, t, n) => {
        "use strict";
        n.d(t, {
          Sm: () => T,
          RA: () => b,
          sg: () => M,
          fT: () => R,
          Y3: () => f,
        });
        var o = n(655),
          i = n(1569),
          r = n(7056),
          a = n(7062),
          s = n(7294),
          l = n(424),
          d = n(4979),
          c = n(7176),
          p = n(1628),
          h = n(9626),
          u = n(421),
          m = n(6063),
          g = n(5177),
          _ = n(8980),
          v = n(7373);
        let S = class extends s.Component {
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
              i.kL,
              {
                target_id: this.state.bActive ? this.props.target_id : void 0,
                min_target_scale: this.props.min_target_scale,
                max_target_scale: this.props.max_target_scale,
              },
              s.createElement(
                i.Dd,
                { value: this.props.opacity },
                s.createElement(
                  i.VW,
                  { color: this.props.tint },
                  s.createElement(
                    i.s_,
                    {
                      height: 0.1 * v.g.k_nControlBarWidthMeters * t,
                      interactive: !0,
                      requires_laser: !0,
                      debug_name: "ResizeHandle",
                      hide_lasermouse_when_clicking: !0,
                    },
                    s.createElement(
                      g.z,
                      {
                        className: "ResizeHandleButton",
                        key: "move",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                      },
                      s.createElement("div", {
                        className: (0, _.LJ)("ResizeHandleBar", [
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
        (0, o.gn)([r.ZP], S.prototype, "startMove", null),
          (0, o.gn)([r.ZP], S.prototype, "endMove", null),
          (S = (0, o.gn)([a.Pi], S));
        var y,
          b,
          f,
          C = n(792),
          k = n(9347),
          I = n(6459);
        !(function (e) {
          (e[(e.Dashboard = 0)] = "Dashboard"),
            (e[(e.LeftHand = 1)] = "LeftHand"),
            (e[(e.RightHand = 2)] = "RightHand"),
            (e[(e.World = 3)] = "World"),
            (e[(e.Theater = 4)] = "Theater");
        })(b || (b = {})),
          (function (e) {
            (e[(e.Flat = 0)] = "Flat"), (e[(e.Curved = 1)] = "Curved");
          })(f || (f = {}));
        const E = "TheaterCurvatureOriginId";
        function M(e) {
          return e == b.Dashboard || e == b.Theater;
        }
        function R(e) {
          return e == b.World;
        }
        function w(e) {
          switch (e) {
            case b.LeftHand:
              return "/user/hand/left";
            case b.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let T = (y = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, i.Oq)(),
                sParent: w(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = i.Kf),
              (this.m_moveDeviceRole = i.Kg.TrackedControllerRole_Invalid);
          }
          componentDidMount() {
            this.setInitialTransformForLocation();
          }
          componentDidUpdate(e, t) {
            e.dockLocation != this.props.dockLocation &&
              this.setState(
                {
                  sParent: w(this.props.dockLocation),
                  xfTransform: (0, i.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation,
              );
          }
          getDashboardScale() {
            return (
              (h.B.isVRGamepadUI
                ? h.B.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1) * v.g.getDashboardScale()
            );
          }
          getCurrentOverlaySize() {
            var e;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let n = { x: 0, y: 0 };
            try {
              n = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let o =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              i = (o * n.y) / n.x;
            if (
              ((this.props.sOverlayKey.startsWith(c.r4) ||
                this.props.sOverlayKey.startsWith(c.Vq)) &&
                ((i = k.N.k_nDesktopPanelBaseHeight * this.getDashboardScale()),
                (o = (i * n.x) / n.y)),
              this.m_fLastOverlayHeight && this.m_fLastOverlayHeight != i)
            ) {
              const e =
                (this.state.fOverlayScale * this.m_fLastOverlayHeight) / i;
              this.setState({ fOverlayScale: e });
            }
            return (this.m_fLastOverlayHeight = i), { width: o, height: i };
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case b.Dashboard:
              case b.LeftHand:
              case b.RightHand:
                return 0.25;
              case b.World:
                const e = h.B.m_mapOverlayState.get(this.props.sOverlayKey);
                return e ? e.fScale : 1;
              case b.Theater:
                const t = 2.35,
                  n = this.getCurrentOverlaySize();
                return null === n || 0 == n.height ? t : t / n.height;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case b.LeftHand:
                case b.RightHand: {
                  let e = this.state.fOverlayScale;
                  Math.abs(this.props.xfInitial.scale.x - 2) < 0.1 &&
                    (e = Math.min(2 * e, y.sfOverlayScaleMax)),
                    this.setState({
                      xfTransform: this.props.xfInitial,
                      fOverlayScale: e,
                    });
                  break;
                }
                case b.World: {
                  let e = this.state.fOverlayScale;
                  Math.abs(this.props.xfInitial.scale.x - 1) < 0.1 &&
                    (e = Math.max(e / 2, y.sfOverlayScaleMin)),
                    this.setState({
                      xfTransform: this.props.xfInitial,
                      fOverlayScale: e,
                    });
                  break;
                }
              }
              return;
            }
            let e = (0, i.Oq)();
            switch (
              ((e.rotation = (0, i.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case b.Dashboard:
              case b.LeftHand:
              case b.RightHand:
                this.setState({ xfTransform: e });
                break;
              case b.World:
                let t = 0;
                i.hz
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
              case b.Theater:
                (e = (0, i.Oq)()),
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
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, i.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              i.Kg.TrackedControllerRole_LeftHand,
            ) != i.Kf && (t = VRHTML.GetPose("/user/hand/left", i.zq.Standing));
            let n = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              i.Kg.TrackedControllerRole_RightHand,
            ) != i.Kf &&
              (n = VRHTML.GetPose("/user/hand/right", i.zq.Standing));
            let o = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                n && o.push({ pose: n, location: b.RightHand });
                break;
              case "/user/hand/right":
                t && o.push({ pose: t, location: b.LeftHand });
                break;
              case "/user/head":
                t && o.push({ pose: t, location: b.LeftHand }),
                  n && o.push({ pose: n, location: b.RightHand });
            }
            if (0 == o.length)
              return void setTimeout(this.computeDestination, y.sfMovePulseMS);
            let r = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            o.forEach((e) => {
              let t = VRHTML.ChangeBasis(r, e.pose.xfDeviceToAbsoluteTracking);
              (0, i.LY)(t.translation) > y.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (l.L.Instance.triggerHaptic(i.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: b.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == b.World &&
                      this.state.destination == b.World)) &&
                  (l.L.Instance.triggerHaptic(i.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, y.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n",
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == i.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex,
              );
            let e,
              t,
              n = VRHTML.GetPose(this.m_nMoveDeviceIndex, i.zq.Standing);
            switch (this.props.dockLocation) {
              case b.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    i.Kg.TrackedControllerRole_LeftHand,
                  ) == i.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", i.zq.Standing);
                break;
              case b.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    i.Kg.TrackedControllerRole_RightHand,
                  ) == i.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", i.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, i.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: i.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case i.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case i.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let o = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              r = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: r,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == b.World,
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
              this.state.destination == b.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  i.Kg.TrackedControllerRole_LeftHand,
                ) == i.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", i.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == b.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  i.Kg.TrackedControllerRole_RightHand,
                ) == i.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", i.zq.Standing);
            }
            let n,
              o = {
                xfDeviceToAbsoluteTracking: (0, i.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: i.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case b.LeftHand:
                n = e;
                break;
              case b.RightHand:
                n = t;
                break;
              default:
                n = o;
            }
            let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, i.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                r.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              s = VRHTML.ChangeBasis(a, n.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: s,
              sParent: w(this.state.destination),
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
            var e, t, n;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let o = this.getCurrentOverlaySize();
            if (null === o) return null;
            (o.width *= this.state.fOverlayScale),
              (o.height *= this.state.fOverlayScale);
            let r,
              a = !this.props.bDashboardShown,
              l = !1,
              g = !1;
            if (this.props.dockLocation == b.Theater) {
              if (this.props.bHasSceneApp && C.C.m_bShowFloor) return null;
              a = !0;
              const t =
                null !==
                  (e = p.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e;
              (l = h.B.isDarkMode && t),
                (g = this.props.bCaptureVideo),
                h.B.eTheaterScreen == f.Curved && (r = E);
            }
            const _ = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              v =
                _ && VRHTML.VROverlay.GetFlag(_, i.Z9.EnableControlBarKeyboard),
              k =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(c.r4),
              M = { x: 0, y: -0.15, z: 0.1 };
            if (a) {
              const e =
                  this.props.dockLocation == b.Theater ||
                  (null !==
                    (t = p.G3.settings.get(
                      "/settings/dashboard/inputCaptureEnabled",
                    )) &&
                    void 0 !== t &&
                    t),
                a =
                  null !==
                    (n = p.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== n
                    ? n
                    : 0.5,
                d = 0.5 * Math.pow(a, 2.2);
              let g = -0.1,
                _ = 4,
                C = 1,
                R = 0.15,
                w = o.width,
                T = o.height,
                D = 0.75;
              const O = (0, i.iN)(c.Az, "Floating-Panel"),
                B = (e) =>
                  s.createElement(
                    i.wx,
                    {
                      parent_id: e.parent_id,
                      translation: { x: e.x_offset, y: 0.2, z: 0.01 },
                    },
                    s.createElement(S, {
                      target_id: O,
                      min_target_scale: 0.5,
                      max_target_scale: 1.5,
                      bVisible: !0,
                      scale: 1.5 * C,
                      tint: h.B.ControlBarTint,
                    }),
                  );
              return s.createElement(
                i.wx,
                { parent_path: void 0 },
                s.createElement(
                  i.wx,
                  {
                    transform_path: this.state.sParent,
                    transform: this.state.xfTransform,
                    id: "xf_widget",
                  },
                  s.createElement(
                    i.wx,
                    { translation: { y: D } },
                    s.createElement(
                      u.Z,
                      { lerp_speed: y.flGrabTransformLerpSpeed },
                      s.createElement(i.wx, { id: E, translation: { z: _ } }),
                      s.createElement(
                        i.wx,
                        { translation: { y: -1 * D } },
                        s.createElement(
                          i.s_,
                          {
                            id: "Floating-Panel",
                            overlay_key: this.props.sOverlayKey,
                            height: T,
                            width:
                              h.B.m_eTheaterStereo != i.Ko.Mono ? w : void 0,
                            interactive: !0,
                            allow_input_capture: e,
                            undocked: !0,
                            origin:
                              this.props.dockLocation == b.Theater
                                ? { x: 0, y: -0.75 }
                                : i.Ic.BottomCenter,
                            curvature_origin_id: r,
                            stereoscopy: h.B.m_eTheaterStereo,
                          },
                          s.createElement(i.at, {
                            id: "Floating-Panel-BottomLeft",
                            location: i.Ic.BottomLeft,
                          }),
                          s.createElement(i.at, {
                            id: "Floating-Panel-BottomRight",
                            location: i.Ic.BottomRight,
                          }),
                          s.createElement(i.at, {
                            id: "Floating-Panel-BottomCenter",
                            location: i.Ic.BottomCenter,
                          }),
                          s.createElement(i.sl, {
                            mountedId: (0, i.iN)(
                              c.GN,
                              this.props.sOverlayKey + ".cursor",
                            ),
                          }),
                        ),
                        l &&
                          s.createElement(i.bt, {
                            target_id: O,
                            "near-z": g,
                            "far-z": 0.1,
                            specular: { color: { r: d, g: d, b: d } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == b.Theater &&
                          s.createElement(
                            s.Fragment,
                            null,
                            s.createElement(
                              i.wx,
                              {
                                parent_id: "Floating-Panel-BottomCenter",
                                translation: { z: 0.02 },
                              },
                              s.createElement(
                                i.s_,
                                {
                                  height: R,
                                  width: void 0,
                                  interactive: !0,
                                  requires_laser: !0,
                                  origin: i.Ic.TopCenter,
                                  curvature_origin_id: r,
                                },
                                s.createElement(
                                  "div",
                                  { className: "OverlayControlBar" },
                                  s.createElement(
                                    "div",
                                    { className: "Section" },
                                    !1,
                                    k &&
                                      s.createElement(I.zN, {
                                        key: "multitask",
                                        iconUrl:
                                          "/dashboard/images/icons/icon_multitasking_view.png",
                                        tooltipTranslation: M,
                                        onClick:
                                          this.props.ShowMultitaskingView,
                                      }),
                                    v &&
                                      s.createElement(I.CS, {
                                        overlayKey: this.props.sOverlayKey,
                                        showTooltip: !1,
                                        modal: !0,
                                        additionalClassNames: "LargeIcon",
                                      }),
                                    s.createElement(I.zN, {
                                      key: "darkmode",
                                      iconUrl: h.B.isDarkMode
                                        ? "/dashboard/images/icons/svr_lights_on.svg"
                                        : "/dashboard/images/icons/svr_lights_off.svg",
                                      iconIsInverted: !1,
                                      onClick: () =>
                                        (h.B.m_bDarkMode = !h.B.isDarkMode),
                                      additionalClassNames: "LargeIcon",
                                    }),
                                    s.createElement(I.zN, {
                                      key: "curved",
                                      iconUrl:
                                        h.B.eTheaterScreen == f.Curved
                                          ? "/dashboard/images/icons/svr_screen_curvature_off.svg"
                                          : "/dashboard/images/icons/svr_screen_curvature_on.svg",
                                      iconIsInverted: !1,
                                      onClick: () =>
                                        h.B.ToggleTheaterCurvature(),
                                      additionalClassNames: "LargeIcon",
                                    }),
                                    s.createElement(I.zN, {
                                      key: "dock",
                                      iconUrl:
                                        "/dashboard/images/icons/svr_theater.svg",
                                      onClick: () =>
                                        this.props.onDockOverlay(
                                          this.props.sOverlayKey,
                                          b.Dashboard,
                                        ),
                                    }),
                                  ),
                                ),
                              ),
                              s.createElement(
                                i.wx,
                                { translation: { y: -R - 0.03, z: 0.03 } },
                                s.createElement(m.J, {
                                  scale: C,
                                  tint: h.B.ControlBarTint,
                                  curvature_origin_id: r,
                                }),
                              ),
                            ),
                            s.createElement(B, {
                              parent_id: "Floating-Panel-BottomLeft",
                              x_offset: -0.03,
                            }),
                            s.createElement(B, {
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
            let R = y.sfOverlayTrayHeight * this.getDashboardScale(),
              w = y.sfOverlayScaleMin,
              T = y.sfOverlayScaleMax,
              D = [0.5, 1, 1.5];
            (this.props.dockLocation != b.LeftHand &&
              this.props.dockLocation != b.RightHand) ||
              ((R *= 0.4), (w = 0.1), (T = 1.5), (D = [0.25, 0.5, 1]));
            const O = o.height + R,
              B = Math.max(o.width, 0.175),
              x = O / 2 - R,
              A = h.B.isVRGamepadUI
                ? {
                    r: (14 / 255) * 0.1,
                    g: (20 / 255) * 0.1,
                    b: (27 / 255) * 0.1,
                  }
                : { r: 0.016, g: 0.017, b: 0.02 };
            return s.createElement(
              i.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              s.createElement(
                i.wx,
                {
                  translation: { y: x, z: -0.005 },
                  scale: { x: B, y: O, z: 0.008 },
                },
                s.createElement(
                  i.VW,
                  { color: A },
                  s.createElement(i.gQ, { solid: !0, source: "unit_cube" }),
                ),
              ),
              s.createElement(
                i.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: o.height,
                  width: void 0,
                  interactive: !0,
                  undocked: !0,
                  origin: i.Ic.BottomCenter,
                },
                s.createElement(i.sl, {
                  mountedId: (0, i.iN)(
                    c.GN,
                    this.props.sOverlayKey + ".cursor",
                  ),
                }),
              ),
              s.createElement(
                i.s_,
                {
                  height: R,
                  width: void 0,
                  interactive: !0,
                  origin: i.Ic.TopCenter,
                },
                s.createElement(
                  "div",
                  { className: "OverlayControlBar" },
                  s.createElement(
                    "div",
                    { className: "Section" },
                    s.createElement(d.iR, {
                      additionalClassName: "OverlayControlBarSlider",
                      min: w,
                      max: T,
                      value: this.state.fOverlayScale,
                      valueStyleVariant: d.px.OnHandle,
                      onChange: this.onOverlayScaleChanged,
                      detents: D,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                    }),
                    k &&
                      s.createElement(I.zN, {
                        key: "multitask",
                        iconUrl:
                          "/dashboard/images/icons/icon_multitasking_view.png",
                        tooltipTranslation: M,
                        onClick: this.props.ShowMultitaskingView,
                      }),
                    v &&
                      s.createElement(I.CS, {
                        overlayKey: this.props.sOverlayKey,
                        showTooltip: !1,
                      }),
                    s.createElement(I.zN, {
                      key: "move",
                      iconUrl: "/dashboard/images/icons/icon_move.png",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                    }),
                    s.createElement(I.zN, {
                      key: "undock",
                      iconUrl: "/dashboard/images/icons/icon_return.png",
                      iconIsInverted: !1,
                      onClick: () =>
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          b.Dashboard,
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
                    i.wx,
                    {
                      parent_path:
                        this.state.destination == b.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    s.createElement(i.x1, {
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
        (T.sfMaxDockDist = 0.4),
          (T.sfMovePulseMS = 100),
          (T.sfOverlayTrayHeight = 0.12),
          (T.sfOverlayScaleMin = 0.25),
          (T.sfOverlayScaleMax = 2),
          (T.flGrabTransformLerpSpeed = 0.15),
          (0, o.gn)([r.ZP], T.prototype, "onOverlayScaleChanged", null),
          (0, o.gn)([r.ZP], T.prototype, "computeDestination", null),
          (0, o.gn)([r.ZP], T.prototype, "startMove", null),
          (0, o.gn)([r.ZP], T.prototype, "endMove", null),
          (T = y = (0, o.gn)([a.Pi], T));
      },
      1464: (e, t, n) => {
        "use strict";
        n.d(t, { a: () => h });
        var o = n(1569),
          i = n(7294),
          r = n(7062),
          a = n(9626),
          s = n(7176),
          l = n(5328);
        function d(e) {
          const { children: t, invertParentPanelPitch: n, pitch: r } = e;
          return n || 0 != r
            ? i.createElement(
                o.wx,
                {
                  invert_parent_panel_pitch: null != n && n,
                  curvature_pitch: null != r ? r : 0,
                },
                t,
              )
            : i.createElement(i.Fragment, null, t);
        }
        function c(e) {
          const { children: t, offsetPixels: n } = e;
          if (null == n || (0 == n.x && 0 == n.y && 0 == n.z))
            return i.createElement(i.Fragment, null, t);
          const r = (0, o.mT)(n, a.B.m_fVRGamepadUI_MetersPerPixel);
          return i.createElement(o.wx, { translation: r }, t);
        }
        function p(e) {
          const { children: t, rotation: n } = e;
          return null == n || (0 == n.x && 0 == n.y && 0 == n.z)
            ? i.createElement(i.Fragment, null, t)
            : i.createElement(o.wx, { rotation: n }, t);
        }
        function h(e) {
          var t,
            n,
            r,
            l,
            h,
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
            D,
            O,
            B,
            x,
            A,
            P,
            V;
          const { popupRequest: N, reparent: L } = e,
            H = null == L || L,
            F = {
              x:
                null !==
                  (n =
                    null === (t = N.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== n
                  ? n
                  : 0,
              y:
                null !==
                  (l =
                    null === (r = N.origin_on_parent) || void 0 === r
                      ? void 0
                      : r.y) && void 0 !== l
                  ? l
                  : 0,
            },
            G = {
              x:
                null !==
                  (u =
                    null === (h = N.origin_on_popup) || void 0 === h
                      ? void 0
                      : h.x) && void 0 !== u
                  ? u
                  : 0,
              y:
                null !==
                  (g =
                    null === (m = N.origin_on_popup) || void 0 === m
                      ? void 0
                      : m.y) && void 0 !== g
                  ? g
                  : 0,
            },
            U = {
              u:
                null !==
                  (v =
                    null === (_ = N.clip_rect) || void 0 === _
                      ? void 0
                      : _.u_min) && void 0 !== v
                  ? v
                  : 0,
              v:
                null !==
                  (y =
                    null === (S = N.clip_rect) || void 0 === S
                      ? void 0
                      : S.v_min) && void 0 !== y
                  ? y
                  : 0,
            },
            W = {
              u:
                null !==
                  (f =
                    null === (b = N.clip_rect) || void 0 === b
                      ? void 0
                      : b.u_max) && void 0 !== f
                  ? f
                  : 1,
              v:
                null !==
                  (k =
                    null === (C = N.clip_rect) || void 0 === C
                      ? void 0
                      : C.v_max) && void 0 !== k
                  ? k
                  : 1,
            },
            z = {
              x:
                null !==
                  (E =
                    null === (I = N.offset) || void 0 === I
                      ? void 0
                      : I.x_pixels) && void 0 !== E
                  ? E
                  : 0,
              y:
                null !==
                  (R =
                    null === (M = N.offset) || void 0 === M
                      ? void 0
                      : M.y_pixels) && void 0 !== R
                  ? R
                  : 0,
              z:
                null !==
                  (T =
                    null === (w = N.offset) || void 0 === w
                      ? void 0
                      : w.z_pixels) && void 0 !== T
                  ? T
                  : 0,
            },
            X = {
              x:
                null !==
                  (O =
                    null === (D = N.rotation) || void 0 === D
                      ? void 0
                      : D.pitch_degrees) && void 0 !== O
                  ? O
                  : 0,
              y:
                null !==
                  (x =
                    null === (B = N.rotation) || void 0 === B
                      ? void 0
                      : B.yaw_degrees) && void 0 !== x
                  ? x
                  : 0,
            },
            K = null === (A = N.inherit_parent_pitch) || void 0 === A || A,
            q = null === (P = N.inherit_parent_curvature) || void 0 === P || P,
            Z = null === (V = N.interactive) || void 0 === V || V,
            j = (function (e) {
              var t, n, o;
              const i =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                r =
                  null !==
                    (o =
                      null === (n = null == e ? void 0 : e.offset) ||
                      void 0 === n
                        ? void 0
                        : n.z_pixels) && void 0 !== o
                    ? o
                    : 0;
              return i == s.BZ && r >= 0 ? -0.5 : 0;
            })(N);
          i.useLayoutEffect(
            () => o.n0.Current().forceLayoutUpdate(),
            [U.u, U.v, W.u, W.v],
          );
          const J = i.createElement(
            o.at,
            { key: N.dashboard_popup_request_id, location: F },
            i.createElement(
              d,
              { invertParentPanelPitch: !K },
              i.createElement(
                c,
                { offsetPixels: z },
                i.createElement(
                  p,
                  { rotation: X },
                  i.createElement(o.s_, {
                    debug_name: `VRGamepadUI-DashboardPopup-Panel-${N.dashboard_popup_request_id}`,
                    interactive: Z,
                    curvature: q ? "inherit-from-parent-panel" : void 0,
                    overlay_key: N.popup_overlay_key,
                    origin: G,
                    meters_per_pixel: a.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.03,
                    sort_depth_bias: j,
                    uv_min: U,
                    uv_max: W,
                  }),
                ),
              ),
            ),
          );
          return H
            ? i.createElement(
                o.Sb,
                {
                  parent_overlay_key: N.parent_overlay_key,
                  key: N.dashboard_popup_request_id,
                },
                J,
              )
            : J;
        }
        (0, r.Pi)((e) => {
          const t = l.O.GetActiveDashboardPopups();
          return i.createElement(
            i.Fragment,
            null,
            t.map((e) =>
              i.createElement(h, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              }),
            ),
          );
        });
      },
      6459: (e, t, n) => {
        "use strict";
        n.d(t, {
          B8: () => H,
          CS: () => j,
          D6: () => q,
          Eu: () => w,
          IO: () => N,
          M3: () => B,
          NT: () => F,
          Rk: () => U,
          Yd: () => T,
          dw: () => L,
          dy: () => x,
          j4: () => W,
          j6: () => G,
          lL: () => D,
          z: () => z,
          zN: () => Z,
          zk: () => V,
        });
        var o,
          i,
          r = n(655),
          a = n(1569),
          s = n(7056),
          l = n(2188),
          d = n(7062),
          c = n(7294),
          p = n(5177),
          h = n(9755),
          u = n(7475),
          m = n(4979),
          g = n(3107),
          _ = n(2749),
          v = n(7176),
          S = n(3568),
          y = n(7008),
          b = n(8980),
          f = n(9897),
          C = n(1628),
          k = n(8322),
          I = n.n(k),
          E = n(7726),
          M = n(7471),
          R = n(9626);
        const w = new l.vP();
        function T(e) {
          const { summonOverlayKey: t } = e,
            { ids: n, anchors: o } = c.useMemo(() => {
              const e = "DashboardPanel_" + t,
                n = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                };
              return {
                ids: n,
                anchors: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(a.at, {
                    id: n.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  c.createElement(a.at, {
                    id: n.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  c.createElement(a.at, {
                    id: n.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  c.createElement(a.at, {
                    id: n.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  }),
                ),
              };
            }, [t]);
          return (
            c.useEffect(
              () => (
                w.set(t, n),
                () => {
                  w.get(t) === n && w.delete(t);
                }
              ),
              [t, n],
            ),
            t ? o : null
          );
        }
        const D = (0, d.Pi)(function (e) {
            return c.createElement(
              O,
              Object.assign({}, e, { VRGamepadUI: R.B.isVRGamepadUI }),
            );
          }),
          O = (e) => {
            var t, n, o;
            const i = e.VRGamepadUI,
              r = c.useRef(null),
              s = c.useRef(null);
            c.useEffect(() => {
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
              d =
                null !== (n = e.foregroundReflectMultiplier) && void 0 !== n
                  ? n
                  : 1,
              m =
                null ===
                  (o = C.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o
                  ? v.ml
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
                  target_dpi_panel_id: i ? void 0 : v.WR,
                  target_dpi_multiplier: i ? void 0 : 2,
                  width: i ? 2.67 : void 0,
                  reflect: i ? 0 : 0.01,
                  sampler: a.Vv.SingleTap,
                },
                c.createElement(T, { summonOverlayKey: e.summonOverlayKey }),
                c.createElement(
                  h.vz,
                  { ref: r },
                  c.createElement("div", {
                    className: (0, b.LJ)(
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
                    target_dpi_panel_id: i ? void 0 : v.WR,
                    reflect: i ? void 0 : 0.2 * d,
                    width: i ? 2.67 : void 0,
                  },
                  c.createElement(
                    h.sC,
                    { ref: s },
                    c.createElement(
                      p.q,
                      null,
                      c.createElement(
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
        class B extends c.Component {
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
              n = null;
            const o = t.toLowerCase(),
              i = Math.max(o.lastIndexOf("am"), o.lastIndexOf("pm"));
            return (
              i >= 0 && ((n = t.substring(i)), (t = t.substring(0, i - 1))),
              c.createElement(
                "div",
                { className: "ClockContainer" },
                c.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  c.createElement("span", { className: "Suffix" }, n),
                ),
              )
            );
          }
        }
        function x(e) {
          return c.createElement(
            p.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, r.gn)([s.ak], B.prototype, "updateTime", null);
        let A = (o = class extends c.Component {
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
                  (e = C.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? v.ml
                  : null;
            return c.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              c.createElement(
                y.d,
                { allowableParentSelectors: [".DashboardMain"] },
                c.createElement(
                  a.wx,
                  { translation: n },
                  c.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: v.WR,
                      curvature_origin_id: o,
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
        (A.s_CurrentlyShownTooltip = null),
          (0, r.gn)([l.Fl], A.prototype, "isShowingTooltip", null),
          (0, r.gn)([l.aD.bound], A.prototype, "show", null),
          (0, r.gn)([l.aD.bound], A.prototype, "hide", null),
          (0, r.gn)([l.LO], A, "s_CurrentlyShownTooltip", void 0),
          (A = o = (0, r.gn)([d.Pi], A));
        class P extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !P.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  P.k_rsThumbnailHashesToInvert.indexOf(I().hash(e)) >= 0 &&
                  (t = !0),
                P.s_mapShouldInvertThumbnail.set(e, t);
            }
            return P.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              n = P.ShouldInvertThumbnail(this.props.src);
            return c.createElement(
              "div",
              { className: "Icon" },
              t &&
                c.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              c.createElement("img", {
                className: (0, b.LJ)(["BlackToWhite", n]),
                src: this.props.src,
              }),
            );
          }
        }
        var V, N;
        (P.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (P.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(V || (V = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(N || (N = {}));
        const L = (e) =>
          c.createElement(
            "div",
            { className: (0, b.LJ)("ControlBarGroup", V[e.style]) },
            e.children,
          );
        let H = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
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
            return c.createElement(
              p.z,
              {
                className: (0, b.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  N[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : N.Center
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
                c.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  c.createElement(y.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              c.createElement(A, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(P, { src: this.props.imageUrl }),
            );
          }
        };
        (0, r.gn)([s.ak], H.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], H.prototype, "onMouseLeave", null),
          (H = (0, r.gn)([d.Pi], H));
        const F = (e) =>
          c.createElement(
            L,
            { style: e.style },
            c.createElement(H, Object.assign({}, e)),
          );
        class G extends c.Component {
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
              n = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
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
                  a.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  n,
                  a.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  n,
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
                n,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let o = E.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style,
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
        (G.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], G.prototype, "updateControllerStatus", null),
          (0, r.gn)([s.ak], G.prototype, "onBatteryStateChanged", null),
          (0, r.gn)([s.ak], G.prototype, "onDeviceRoleChanged", null),
          (0, r.gn)([s.ak], G.prototype, "onDeviceEvent", null),
          c.Component;
        const U = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && c.createElement(P, { src: e.iconUrl, shadow: !0 }),
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
            var e, t, n;
            const o = this.props.position,
              i = Math.asin(o) / Math.PI,
              r = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: o, y: -1 } },
                c.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(i),
                    z: -0.03 * Math.abs(i),
                  },
                  rotation: { y: 15 * i, z: 2 * i },
                }),
              ),
              c.createElement(
                y.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                c.createElement(
                  a.VW,
                  { color: this.props.tintColor },
                  c.createElement(
                    _.Ti,
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
                        translation: { y: 0.04 * r, z: -0.01 },
                        scale: r,
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
                          target_dpi_panel_id: v.WR,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        c.createElement(
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
                      c.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        c.createElement(
                          a.s_,
                          {
                            curvature_origin_id:
                              null !== (n = this.props.curvatureOriginId) &&
                              void 0 !== n
                                ? n
                                : null,
                            origin: a.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: v.WR,
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
        (0, r.gn)([s.ak], W.prototype, "onResizeObserved", null),
          (0, r.gn)([s.ak], W.prototype, "updateBackgroundSize", null),
          (0, r.gn)([s.ak], W.prototype, "onPortalDidMount", null);
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
                  K,
                  {
                    onClick: f.f.Instance.toggleMicrophoneMute,
                    title: f.f.Instance.microphoneMuted
                      ? (0, S.Xx)("#UnmuteMicrophone")
                      : (0, S.Xx)("#MuteMicrophone"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                c.createElement(X, {
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
                c.createElement(
                  "div",
                  { className: "Section" },
                  c.createElement(
                    K,
                    {
                      onClick: f.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: f.f.Instance.mirrorMuted
                        ? (0, S.Xx)("#UnmuteAudioMirror")
                        : (0, S.Xx)("#MuteAudioMirror"),
                    },
                    c.createElement("img", {
                      className: "BlackToWhite",
                      src: f.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  c.createElement(X, {
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
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  K,
                  {
                    onClick: f.f.Instance.toggleMute,
                    title: f.f.Instance.muted
                      ? (0, S.Xx)("#Unmute_Headset")
                      : (0, S.Xx)("#Mute_Headset"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                c.createElement(X, {
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
        (0, r.gn)([s.ak], z.prototype, "onSliderMouseEnter", null),
          (0, r.gn)([s.ak], z.prototype, "onSliderMouseLeave", null),
          (0, r.gn)([s.ak], z.prototype, "onSliderFinalChange", null),
          (0, r.gn)([l.Fl], z.prototype, "showAudioMirrorControls", null),
          (0, r.gn)([l.Fl], z.prototype, "enableAudioMirrorControls", null),
          (z = (0, r.gn)([d.Pi], z));
        let X = class extends c.Component {
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
            return c.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                c.createElement(A, {
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
        (0, r.gn)([s.ak], X.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], X.prototype, "onMouseLeave", null),
          (0, r.gn)([s.ak], X.prototype, "onInteractionStart", null),
          (0, r.gn)([s.ak], X.prototype, "onInteractionEnd", null),
          (X = (0, r.gn)([d.Pi], X));
        let K = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
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
            return c.createElement(
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
                c.createElement(A, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, r.gn)([s.ak], K.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], K.prototype, "onMouseLeave", null),
          (K = (0, r.gn)([d.Pi], K));
        let q = (i = class extends c.Component {
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
                this.onWindowMouseMove,
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
              this.onWindowMouseUp,
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove,
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
            return c.createElement(H, {
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
        (q.MIN_DRAG_THRESHOLD = 35),
          (0, r.gn)([s.ak], q.prototype, "onButtonMouseDown", null),
          (0, r.gn)([s.ak], q.prototype, "onWindowMouseMove", null),
          (0, r.gn)([s.ak], q.prototype, "onWindowMouseUp", null),
          (q = i = (0, r.gn)([d.Pi], q));
        const Z = (e) => {
          var t;
          const n = c.useRef();
          return c.createElement(
            p.z,
            {
              className: (0, b.LJ)(
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
                null === (t = n.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = n.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              c.createElement(A, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: n,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: (0, M.Z)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            e.icon,
          );
        };
        function j(e) {
          var t, n;
          const o = (0, b.aB)(),
            i =
              null !== (t = null == o ? void 0 : o.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == o.overlayKey,
            r = c.useRef(!1),
            s =
              null === (n = e.showTooltip) || void 0 === n || n
                ? i
                  ? (0, S.Xx)("#HideKeyboardTooltip")
                  : (0, S.Xx)("#ShowKeyboardTooltip")
                : void 0;
          return c.createElement(
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
      9347: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => S, e: () => v });
        var o,
          i,
          r = n(655),
          a = n(1569),
          s = n(7056),
          l = n(2477),
          d = n(2188),
          c = n(7062),
          p = n(7294),
          h = n(7475),
          u = n(7176),
          m = n(3568),
          g = n(1628),
          _ = n(6459);
        let v = (o = class extends p.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = p.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(o.k_sMailboxName);
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
                    null === (n = this.state.desktopView) || void 0 === n
                      ? void 0
                      : n.state.desktopIndices.map((e) => {
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
                      null === (o = this.state.desktopView) || void 0 === o
                        ? void 0
                        : o.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, n, o;
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
                            (o = this.props.mapWindows.get(
                              null === (n = this.state.desktopView) ||
                                void 0 === n
                                ? void 0
                                : n.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === o
                            ? void 0
                            : o.title,
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
        (v.k_sMailboxName = "systemui_desktoptray"),
          (v = o = (0, r.gn)([c.Pi], v));
        let S = (i = class extends p.Component {
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
                  var t, n;
                  const o =
                    null !==
                      (n =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== n
                      ? n
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == o)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(u.gB)
                      );
                  const i = { type: "request_spawn_window_view", hwnd: o };
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
                  (e = g.G3.settings.get("/settings/dashboard/desktopIndex")) &&
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
              (e = g.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > n.length &&
              g.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: n });
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
                (e = g.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? u.ml
                : null;
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
                  : -1 == this.currentDesktopIndex
                  ? p.createElement(
                      p.Fragment,
                      null,
                      p.createElement(
                        a.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height: i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        p.createElement(_.Yd, { summonOverlayKey: u.gB }),
                        p.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            u.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor",
                          ),
                        }),
                      ),
                    )
                  : p.createElement(
                      p.Fragment,
                      null,
                      p.createElement(
                        a.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height: i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        p.createElement(_.Yd, { summonOverlayKey: u.gB }),
                        p.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            u.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor",
                          ),
                        }),
                      ),
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
        (S.k_sMailboxName = "systemui_desktopview"),
          (S.k_nDesktopPanelBaseHeight = 2),
          (0, r.gn)([d.Fl], S.prototype, "desktopCount", null),
          (0, r.gn)([d.Fl], S.prototype, "sCurrentOverlayKey", null),
          (0, r.gn)([d.Fl], S.prototype, "currentDesktopIndex", null),
          (0, r.gn)([d.Fl], S.prototype, "currentWindowHwnd", null),
          (0, r.gn)([s.ZP], S.prototype, "onDesktopScaleChange", null),
          (0, r.gn)([s.ZP], S.prototype, "onDesktopChange", null),
          (0, r.gn)([s.ZP], S.prototype, "onDesktopViewUpdating", null),
          (0, r.gn)([s.ZP], S.prototype, "onDesktopViewReady", null),
          (0, r.gn)([s.ZP], S.prototype, "onWindowViewChange", null),
          (0, r.gn)([s.ZP], S.prototype, "ShowMultitaskingView", null),
          (S = i = (0, r.gn)([c.Pi], S));
      },
      6063: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => h });
        var o = n(655),
          i = n(7294),
          r = n(7056),
          a = n(1569),
          s = n(7062),
          l = n(5177),
          d = n(7373),
          c = n(421),
          p = n(8980);
        let h = class extends i.Component {
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
            var n;
            e.bVisible != this.props.bVisible &&
              (null === (n = this.props.bVisible) ||
                void 0 === n ||
                n ||
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
            const n = null === (e = this.props.bVisible) || void 0 === e || e,
              o = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
            return (
              n &&
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
                        width: 0.25 * d.g.k_nControlBarWidthMeters * o,
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
                          className: (0, p.LJ)("GrabHandleBar", [
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
        (h.contextType = c.E),
          (0, o.gn)([r.ZP], h.prototype, "startMove", null),
          (0, o.gn)([r.ZP], h.prototype, "endMove", null),
          (h = (0, o.gn)([s.Pi], h));
      },
      421: (e, t, n) => {
        "use strict";
        n.d(t, { E: () => s, Z: () => l });
        var o = n(655),
          i = n(1569),
          r = n(7062),
          a = n(7294);
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
        l = (0, o.gn)([r.Pi], l);
      },
      16: (e, t, n) => {
        "use strict";
        n.d(t, { BB: () => h, KU: () => u });
        var o,
          i = n(655),
          r = n(7294),
          a = n(7056),
          s = n(1569),
          l = n(3568),
          d = n(7062),
          c = n(8980),
          p = n(1628);
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
                    o.kFadeDurationMs,
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
                height: o.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              r.createElement(
                "div",
                {
                  className: (0, c.LJ)("ResetSeatedCountdownParent", [
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
            let n =
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
              o =
                null !==
                  (t = p.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? r.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: o },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: n },
                    this.renderPanel(),
                  ),
                )
              : r.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: n },
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
          (m = o = (0, i.gn)([d.Pi], m));
      },
      1283: (e, t, n) => {
        "use strict";
        n.d(t, { s: () => _ });
        var o = n(655),
          i = n(7294),
          r = n(7062),
          a = n(7056),
          s = n(3568),
          l = n(5211),
          d = n(4285),
          c = n(2188),
          p = n(9809),
          h = n(5177),
          u = n(8980),
          m = n(8242);
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
            let n = t;
            const o = "vive_tracker";
            n.includes(o) &&
              (n = n.substring(n.indexOf(o) + o.length, n.length));
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
                  i.createElement("span", null, n),
                  i.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected",
                    ),
                    className: (0, u.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", d.E.connected && this.IsConnected()],
                      ["Disconnected", d.E.connected && !this.IsConnected()],
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
        (0, o.gn)([c.Fl], g.prototype, "trackerConfig", null),
          (0, o.gn)([a.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, o.gn)([a.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, o.gn)([a.ak], g.prototype, "BuzzTracker", null),
          (0, o.gn)([c.Fl], g.prototype, "deviceInfo", null),
          (g = (0, o.gn)([r.Pi], g));
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
                (e = t.trackers.map((e, n) =>
                  i.createElement(g, {
                    key: n,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              i.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        _ = (0, o.gn)([r.Pi], _);
      },
      6698: (e, t, n) => {
        "use strict";
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
              e,
            ),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
      },
      2477: (e, t, n) => {
        "use strict";
        n.d(t, { Q: () => l });
        var o = n(655),
          i = n(1569),
          r = n(328),
          a = n(4820);
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
            return (0, o.mG)(this, void 0, void 0, function* () {
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
            let n, o;
            try {
              n = a.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return r.n5.HeaderSerializationFailure;
            }
            try {
              o = t.serializeBase64String();
            } catch (e) {
              return r.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: n,
                payload: o,
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
    n = {};
  function o(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var r = (n[e] = { id: e, exports: {} });
    return t[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, i, r) => {
      if (!n) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, i, r] = e[c], s = !0, l = 0; l < n.length; l++)
            (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(c--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      r = r || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
      e[c] = [n, i, r];
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
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (l) var c = l(o);
          }
          for (t && t(n); d < a.length; d++)
            (r = a[d]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (o.nc = void 0);
  var i = o.O(void 0, [968, 683], () => o(1176));
  i = o.O(i);
})();
//# sourceMappingURL=controllerbindingui.js.map?v=00960b6b6255a3a66bb8
