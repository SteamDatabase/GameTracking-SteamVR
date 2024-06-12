/*! For license information please see fallback.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      1569: (e, t, r) => {
        r.d(t, {
          gO: () => i.g,
          gQ: () => s.g,
          iC: () => l.i,
          n0: () => n.n,
          s_: () => a.s_,
          wx: () => o.w,
        }),
          r(4671),
          r(7500),
          r(2071),
          r(6626),
          r(751),
          r(8116);
        var o = r(390),
          i = r(8257),
          n = (r(233), r(7313), r(6765)),
          s = (r(491), r(171), r(8811)),
          a = (r(5157), r(5486), r(5829), r(7973), r(2214)),
          l = (r(5627), r(3841));
        r(2467),
          r(7996),
          r(1364),
          r(5146),
          r(163),
          r(2109),
          r(8221),
          r(684),
          r(9481),
          r(5867),
          r(7074),
          VRHTML;
      },
      1364: (e, t, r) => {
        r(7294), r(7313);
      },
      7996: (e, t, r) => {
        var o = r(7294);
        r(7074), r(390), o.Component;
      },
      2071: (e, t, r) => {
        var o = r(655),
          i = r(7294),
          n = r(7313),
          s = r(7056),
          a = r(233),
          l = r(8116);
        class d extends n.Mo {
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
            var r;
            const o = this.createSgNode(t);
            return (
              (o.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
              (o.properties.mountable_id = (0, a.Hb)(
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
        (0, o.gn)([s.ZP], d.prototype, "buildNode", null);
      },
      5146: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
        class s extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var r, o;
            const i = this.createSgNode(t);
            return (
              (i.properties.continuous_relatch =
                null !== (r = this.props.bContinuousRelatch) &&
                void 0 !== r &&
                r),
              (i.properties.free_dashboard_transform =
                null !== (o = this.props.bFreeDashboardTransform) &&
                void 0 !== o &&
                o),
              [e, i]
            );
          }
        }
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      3841: (e, t, r) => {
        r.d(t, { i: () => s });
        var o,
          i = r(7294),
          n = r(7313);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(o || (o = {}));
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
              r = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              o = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              n = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return i.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": r,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": o,
                "max-angular-velocity": n,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children,
            );
          }
        }
      },
      163: (e, t, r) => {
        r(7294), r(7313);
      },
      2467: (e, t, r) => {
        r(7294), r(7313);
      },
      5486: (e, t, r) => {
        r(7294), r(7313);
      },
      5627: (e, t, r) => {
        r(7294), r(7313);
      },
      5157: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
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
              (r.properties["target-id"] = this.props.target_id),
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
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      2109: (e, t, r) => {
        r(7294), r(7313);
      },
      8116: (e, t, r) => {
        r.d(t, { C: () => a });
        var o = r(655),
          i = r(7313),
          n = r(7056),
          s = r(233);
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
        (0, o.gn)([n.ZP], a.prototype, "buildNode", null);
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
        (0, o.gn)([n.ZP], l.prototype, "buildNode", null);
      },
      751: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
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
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      2214: (e, t, r) => {
        r.d(t, { Lb: () => h, s_: () => m });
        var o,
          i,
          n,
          s,
          a = r(655),
          l = r(7294),
          d = r(7313),
          p = r(6765),
          c = r(7056),
          u = r(233);
        function _(e) {
          if (e) return [e.u, e.v];
        }
        function h(e) {
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(s || (s = {}));
        class m extends d.Mo {
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
              r = void 0 !== this.props.meters_per_pixel,
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
            const n = [t, r, o, i].filter((e) => e).length,
              s =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == n)
              throw new Error(
                `Panel requires one of the following props: ${s}.`,
              );
            if (n > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${s}.`,
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
            m.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = p.n.Current().addEmbeddedPanelUVs(this)),
              (m.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            p.n.Current().forceLayoutUpdate();
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
              (m.s_bPanelsAreDirty = !0),
              p.n.Current().removeEmbeddedPanelUVs(this),
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
          createOverdragBlockingElement(e, t, r, o) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = r + "px"),
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
              : s.Visible;
          }
          buildNode(e, t) {
            var r, o, i, n, a;
            if (this.visibility != s.Visible) return [e, null];
            let l = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              p = this.createSgNode(t),
              c = { x: 0, y: 0 };
            c =
              "object" == typeof this.props.origin
                ? (0, d.QE)(this.props.origin, { x: 0, y: 0 })
                : h(this.props.origin);
            const m = this.props.overlay_key,
              g = (0, u.Gv)();
            return (
              m && m.length > 0
                ? (p.properties.key = m)
                : g
                ? (p.properties.key = g)
                : (p.properties.overlay_handle = (0, u.Mb)()),
              (p.properties.uv_min =
                null !== (r = _(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (p.properties.uv_max =
                null !== (o = _(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (p.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (p.properties.height =
                null !== (n = this.props.height) && void 0 !== n ? n : void 0),
              (p.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (p.properties["target-width-anchor-id"] = (0, u.Hb)(
                this.props.target_width_anchor_id,
              )),
              (p.properties["target-dpi-panel-id"] = (0, u.Hb)(
                this.props.target_dpi_panel_id,
              )),
              (p.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (p.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (p.properties["subview-parent-panel-id"] = (0, u.Hb)(
                this.props.subview_parent_panel_id,
              )),
              (p.properties.curvature = this.props.curvature),
              (p.properties["curvature-origin-id"] = (0, u.Hb)(
                this.props.curvature_origin_id,
              )),
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
              (p.properties.origin = (0, d.D1)(c)),
              (p.properties.debug_name = this.props.debug_name),
              (p.properties.sampler = this.props.sampler),
              (p.properties.reflect = this.props.reflect),
              (p.properties.stereoscopy = this.props.stereoscopy),
              (p.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (p.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (p.properties["texture-id"] = (0, u.Hb)(this.props.texture_id)),
              (p.properties["sort-order"] = this.props.sort_order),
              (p.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              [l, p]
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
              this.props.children,
            );
          }
        }
        (m.s_bPanelsAreDirty = !1),
          (0, a.gn)([c.ZP], m.prototype, "onResizeObserved", null),
          (0, a.gn)([c.ZP], m.prototype, "onPanelMouseDown", null),
          (0, a.gn)([c.ZP], m.prototype, "onWindowMouseUp", null),
          (0, a.gn)([c.ZP], m.prototype, "buildNode", null);
      },
      7973: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(2214),
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
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let r = null;
            "object" == typeof this.props.location
              ? (r = (0, i.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (r = (0, n.Lb)(this.props.location));
            let o = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (o.properties["anchor-u"] = this.m_latchedPosition.u),
                (o.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (r) {
              const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
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
              const r = t.ownerDocument,
                i = t.getBoundingClientRect(),
                n = i.left + i.width / 2,
                s = i.top + i.height / 2,
                a = e.currentPanel.m_Rect;
              if (n < a.x || n > a.x + a.width || s < a.y || s > a.y + a.height)
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
              (o.properties["anchor-u"] = n / l),
                (o.properties["anchor-v"] = s / d);
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
        (0, o.gn)([s.ZP], a.prototype, "buildNode", null);
      },
      5829: (e, t, r) => {
        r(7294), r(7313);
      },
      8811: (e, t, r) => {
        r.d(t, { g: () => l });
        var o,
          i = r(655),
          n = r(7313),
          s = r(7056),
          a = r(233);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(o || (o = {}));
        class l extends n.Mo {
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
                this.props["texture-id"],
              )),
              (r.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = (0, n.kh)(e.color, { r: 0, g: 0, b: 0 });
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
        (0, i.gn)([s.ZP], l.prototype, "buildNode", null);
      },
      9481: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
        class s extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "reparent-to-panel";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t),
              o = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !0,
                currentPanel: null,
              });
            return (
              this.props.parent_overlay_key &&
                (r.properties["parent-overlay-key"] =
                  this.props.parent_overlay_key),
              [o, r]
            );
          }
        }
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      8221: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
        class s extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "resize-handle";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (
              (r.properties["target-id"] = this.props.target_id),
              (r.properties["min-target-scale"] = this.props.min_target_scale),
              (r.properties["max-target-scale"] = this.props.max_target_scale),
              [e, r]
            );
          }
        }
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      6765: (e, t, r) => {
        r.d(t, { n: () => d });
        var o,
          i = r(655),
          n = r(7294),
          s = r(2214),
          a = r(7056),
          l = r(233);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(o || (o = {}));
        class d extends n.Component {
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
              (this.m_DomRef = n.createRef()),
              (this.m_scalingDomRef = n.createRef()),
              (this.m_CanvasRef = n.createRef()),
              (this.m_EmbeddedDataImgRef = n.createRef()),
              (this.m_DebugPointerRef = n.createRef());
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
            let r = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
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
            let r = [];
            return (
              this.state.bShowDebugPointer && r.push("ShowDebugPointer"),
              n.createElement(
                "vsg-app",
                {
                  class: r.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                n.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  n.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                t &&
                  n.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                n.createElement(
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
              r = t.width / this.m_fCurrentScale,
              o = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / r, y: e.innerHeight / o },
              n = Math.min(i.x, i.y, 1);
            n != this.m_fCurrentScale &&
              (1 != n
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + n + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = n),
              (s.s_.s_bPanelsAreDirty = !0)),
              s.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.k7)(),
                (s.s_.s_bPanelsAreDirty = !1),
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
                  let r = e.m_Rect.x,
                    o = e.m_Rect.x + e.m_Rect.width,
                    i = e.m_Rect.y,
                    n = e.m_Rect.y + e.m_Rect.height,
                    s = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || r >= o || i >= n)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(s + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(s, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(s + 1, (65280 & o) >> 8, 255 & o, 255 & i),
                      this.setPixel(
                        s + 2,
                        (65280 & n) >> 8,
                        255 & n,
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
          setPixel(e, t, r, i, n = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == o.Image
            ) {
              const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              o.setUint8(4 * e + 0, t),
                o.setUint8(4 * e + 1, r),
                o.setUint8(4 * e + 2, i),
                o.setUint8(4 * e + 3, n);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == o.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = n),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, i.gn)([a.ak], d.prototype, "toggleDebugPointer", null),
          (0, i.gn)([a.ak], d.prototype, "onMouseMove", null),
          (0, i.gn)([a.ak], d.prototype, "forceLayoutUpdate", null),
          (0, i.gn)([a.ak], d.prototype, "onMutation", null);
      },
      7313: (e, t, r) => {
        r.d(t, {
          D1: () => d,
          Kg: () => p,
          Mo: () => u,
          QE: () => s,
          Uq: () => a,
          kh: () => l,
          xs: () => c,
        });
        var o = r(7294),
          i = r(5867),
          n = r(233);
        function s(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function a(e, t) {
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
        function p(e) {
          var t;
          return null ===
            (t = (function (e) {
              if (e) return [e.x, e.y, e.z];
            })(e)) || void 0 === t
            ? void 0
            : t.join(" ");
        }
        function c(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class u extends o.Component {
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
            return (0, n.ac)(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              (0, n.k7)();
          }
          componentDidUpdate() {
            (0, n.k7)();
          }
          componentWillUnmount() {
            (0, n.sX)(this.m_SGID),
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
      233: (e, t, r) => {
        r.d(t, {
          Gv: () => R,
          Hb: () => D,
          Mb: () => u,
          ac: () => c,
          k7: () => C,
          mK: () => y,
          sX: () => I,
        });
        var o = r(655),
          i = r(4671);
        function n(e, t) {
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
        function d(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return r;
        }
        function p(e, t) {
          return D(d(e, t));
        }
        function c(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = D(t.id)),
            (r.properties.sgid = a(t, "sgid")),
            r
          );
        }
        function u() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function _(e, t) {
          let [r, o] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let o = Object.assign({}, e),
                i = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (i = c("transform", t)),
                    (i.properties.translation = n(t, "translation")),
                    (i.properties.rotation = n(t, "rotation")),
                    (i.properties.scale = n(t, "scale")),
                    (i.properties["curvature-pitch"] = s(t, "curvature-pitch")),
                    (i.properties["transform-path"] = d(t, "transform-path")),
                    (i.properties["invert-parent-panel-pitch"] = l(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (i.properties["parent-path"] = d(t, "parent-path")),
                    (i.properties["parent-origin"] = d(t, "parent-origin")),
                    (i.properties["parent-id"] = p(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (i = c("trackingstatevisibility", t)),
                    (i.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (i.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (i.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (i = c("elasticheadtransform", t)),
                    (i.properties["start-angle-threshold"] = s(
                      t,
                      "start-angle-threshold",
                    )),
                    (i.properties["stop-angle-threshold"] = s(
                      t,
                      "stop-angle-threshold",
                    )),
                    (i.properties["ease-in-time"] = s(t, "ease-in-time")),
                    (i.properties["ease-in-power"] = s(t, "ease-in-power")),
                    (i.properties["ease-out-angle-threshold"] = s(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (i.properties["ease-out-power"] = s(t, "ease-out-power")),
                    (i.properties["min-angular-velocity"] = s(
                      t,
                      "min-angular-velocity",
                    )),
                    (i.properties["max-angular-velocity"] = s(
                      t,
                      "max-angular-velocity",
                    )),
                    (i.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (i.properties["translation-behavior"] = a(
                      t,
                      "translation-behavior",
                    ));
                  break;
                case "VSG-LINE":
                  (i = c("line", t)),
                    (i.properties["target-id"] = p(t, "target-id")),
                    (i.properties.thickness = s(t, "thickness")),
                    (i.properties["start-buffer"] = s(t, "start-buffer")),
                    (i.properties["end-buffer"] = s(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (i = c("line-constrained-transform", t)),
                    (i.properties["target-id"] = p(t, "target-id")),
                    (i.properties["source-id"] = p(t, "source-id")),
                    (i.properties["source-distance"] = s(t, "source-distance")),
                    (i.properties["target-limit"] = s(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (i = c("callout-transform", t)),
                    (i.properties.offset = n(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  i = c("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (i = c("pin-to-view-transform", t)),
                    (i.properties["offscreen-z-depth"] = s(
                      t,
                      "offscreen-z-depth",
                    )),
                    (i.properties["off-axis-limit"] = s(t, "off-axis-limit")),
                    (i.properties["transition-limit"] = s(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (i = c("manipulation-transform", t)),
                    (i.properties["is-moving"] = l(t, "is-moving")),
                    (i.properties["parent-path"] = d(t, "parent-path")),
                    (i.properties.translation = n(t, "translation")),
                    (i.properties.rotation = n(t, "rotation")),
                    (i.properties.scale = n(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (i = c("grab-transform", t)),
                    (i.properties["parent-path"] = d(t, "parent-path")),
                    (i.properties.translation = n(t, "translation")),
                    (i.properties.rotation = n(t, "rotation")),
                    (i.properties.scale = n(t, "scale"));
              }
              return [o, i];
            })(e, t),
            i = [];
          for (let e = 0; e < t.children.length; e++) {
            let o = t.children.item(e);
            if (o.children) {
              let e = _(r, o);
              e && (i = i.concat(e));
            }
          }
          return r.bShouldAbort
            ? null
            : o
            ? (i.length > 0 && (o.children = i), [o])
            : i.length > 0
            ? 1 == i.length
              ? i
              : [{ children: i }]
            : null;
        }
        let h,
          m,
          g,
          v,
          b = [],
          S = null,
          f = null;
        function y(e, t, r) {
          (h = e),
            (m = t),
            (g = r),
            console.log("Setting owning overlay key to " + e);
        }
        function D(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : R() + "::" + e
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
            : h;
        }
        function I(e) {
          b.push(e), C();
        }
        function C() {
          S ||
            (S = window.setTimeout(
              () =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  m && (e = m);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: v,
                      allowDismissOnClick: true,
                      sceneColorCorrection: null,
                    },
                    children: _(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      e,
                    ),
                  };
                  f ||
                    (console.log("Initializing sg_mailbox"),
                    (f = new i.N()),
                    yield f.Init("sg_mailbox", g));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: R(),
                    scene_graph: t,
                    retired_sgids: b,
                  };
                  f.SendMessage("vrcompositor_systemlayer", r),
                    (S = null),
                    (b = []),
                    (v = !1);
                }),
              0,
            ));
        }
      },
      491: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
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
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      171: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
        class s extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            if (
              ((r.properties["tile-size"] = this.props["tile-size"]),
              (r.properties["tile-gap"] = this.props["tile-gap"]),
              (r.properties["inner-radius"] = this.props["inner-radius"]),
              (r.properties["outer-radius"] = this.props["outer-radius"]),
              (r.properties["fade-distance"] = this.props["fade-distance"]),
              (r.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (r.properties.height = this.props.height),
              (r.properties.offset = [
                this.props.offset.x,
                this.props.offset.y,
              ]),
              "string" == typeof this.props.color)
            )
              r.properties.color = this.props.color;
            else if (this.props.color) {
              let e = (0, i.kh)(this.props.color, { r: 0, g: 0, b: 0 });
              r.properties.color = [e.r, e.g, e.b];
            }
            return (
              (r.properties["center-randomization"] =
                this.props["center-randomization"]),
              (r.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (r.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"]),
              (r.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (r.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"]),
              (r.properties["normal-randomization-degrees"] =
                this.props["normal-randomization-degrees"]),
              this.props.chevron &&
                ((r.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (r.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (r.properties["auto-subdivide"] = this.props["auto-subdivide"]),
              [e, r]
            );
          }
        }
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      6626: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
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
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      8257: (e, t, r) => {
        r.d(t, { g: () => n });
        var o = r(7294),
          i = r(7313);
        class n extends i.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-tracking-state-visibility",
              {
                "visible-0dof": this.props.visibleIn0DOF,
                "visible-3dof": this.props.visibleIn3DOF,
                "visible-6dof": this.props.visibleIn6DOF,
              },
              this.props.children,
            );
          }
        }
      },
      390: (e, t, r) => {
        r.d(t, { w: () => a });
        var o,
          i = r(7294),
          n = r(7313),
          s = r(4727);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(o || (o = {}));
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
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            let e, t, r;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (r = this.props.transform.scale))
              : ((e = (0, n.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, s.UU)(
                        (0, s.mT)(
                          (0, n.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                          Math.PI / 180,
                        ),
                      )),
                (r =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, n.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let a = (0, n.Kg)(e),
              l = (0, n.xs)(t),
              d = (0, n.Kg)(r);
            return i.createElement(
              "vsg-transform",
              {
                translation: a,
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
      684: (e, t, r) => {
        var o = r(655),
          i = r(7313),
          n = r(7056);
        class s extends i.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "videocapturequad";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (
              (r.properties.width = this.props.width),
              (r.properties.height = this.props.height),
              (r.properties["target-id"] = this.props.target_id),
              (r.properties["near-z"] = this.props["near-z"]),
              (r.properties["far-z"] = this.props["far-z"]),
              (r.properties.debug = this.props.debug),
              [e, r]
            );
          }
        }
        (0, o.gn)([n.ZP], s.prototype, "buildNode", null);
      },
      4727: (e, t, r) => {
        function o(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function i(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            r = 0.5 * e.y,
            o = 0.5 * e.z,
            i = Math.cos(t),
            n = Math.cos(r),
            s = Math.cos(o),
            a = Math.sin(t),
            l = Math.sin(r),
            d = Math.sin(o);
          return {
            w: i * n * s + a * l * d,
            x: a * n * s + i * l * d,
            y: i * l * s - a * n * d,
            z: i * n * d - a * l * s,
          };
        }
        r.d(t, { UU: () => i, mT: () => o });
      },
      7500: (e, t, r) => {
        r(4671);
      },
      4671: (e, t, r) => {
        r.d(t, { N: () => n });
        var o = r(655),
          i = r(7056);
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
                "Connecting vrmailbox " + this.m_sMailboxName + "...",
              );
              let r = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(r)),
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
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(e), !0)
            );
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
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (r = !0);
            }
            r || console.log("Received unhandled message: ", t);
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
            return new Promise((r, o) => {
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
          SendMessageAndWaitForResponse(e, t, r) {
            let o = Object.assign({}, t);
            return (
              null == o.returnAddress &&
                (o.returnAddress = this.m_sMailboxName),
              (o.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, o),
              this.WaitForMessage(r, o.message_id)
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
        (n.s_nNextMailboxNumber = 1),
          (0, o.gn)([i.ak], n.prototype, "OpenWebSocketToHost", null),
          (0, o.gn)([i.ak], n.prototype, "OnWebSocketOpen", null),
          (0, o.gn)([i.ak], n.prototype, "OnWebSocketClose", null),
          (0, o.gn)([i.ak], n.prototype, "WebSocketSend", null),
          (0, o.gn)([i.ak], n.prototype, "OnWebSocketMessage", null);
      },
      5867: (e, t, r) => {
        var o, i, n, s;
        r.d(t, { nX: () => a }),
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(s || (s = {}));
        let a = 0;
        var l, d, p, c, u, _, h, m, g, v, b, S, f, y, D, R, I;
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
        })(l || (l = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(d || (d = {})),
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
          })(c || (c = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(u || (u = {})),
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
          })(h || (h = {})),
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(g || (g = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(v || (v = {})),
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
          })(b || (b = {})),
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
          })(S || (S = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(f || (f = {})),
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
          })(y || (y = {})),
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
          })(D || (D = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(R || (R = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(I || (I = {}));
      },
      7074: (e, t, r) => {
        var o, i, n, s, a, l, d;
        !(function (e) {
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
            (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
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
            (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
              "DriverProvidedIPDVisibility_Bool"),
            (e[(e.Prop_Driver_Reserved_01 = 2109)] = "Prop_Driver_Reserved_01"),
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(a || (a = {})),
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
      844: (e, t, r) => {
        var o = r(655),
          i = r(7294),
          n = r(3935),
          s = r(4285),
          a = r(1569),
          l = r(7062),
          d = r(3568),
          p = r(8155);
        class c extends i.Component {
          constructor(e) {
            super(e);
          }
          OnActionSelected(e, t) {
            "DeviceAction_Identify" == t
              ? s.E.IdentifyController(e)
              : console.log("Unknown action: " + t + " for serial " + e);
          }
          render() {
            let e = this.props.status,
              t =
                "DeviceStatusRow " +
                (e.is_connected ? "Connected" : "Disconnected"),
              r = [];
            return (
              e.submenu &&
                (r = e.submenu.reduce(
                  (e, t) => (
                    t &&
                      t.action &&
                      e.push({ sValue: t.action, sLocalized: t.name }),
                    e
                  ),
                  [],
                )),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(
                  "div",
                  { className: t },
                  i.createElement(
                    "div",
                    { className: "StateIcon" },
                    i.createElement("img", { src: e.state_icon }),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label Status" },
                    i.createElement(
                      "div",
                      { className: "FlexColumn" },
                      i.createElement(
                        "div",
                        { className: "Label" },
                        e.state_text,
                      ),
                      e.has_battery &&
                        i.createElement(
                          "div",
                          { className: "FlexRow" },
                          i.createElement(
                            "div",
                            { className: "BatteryIcon" },
                            i.createElement("img", {
                              src: e.battery_state_icon,
                            }),
                          ),
                          i.createElement(
                            "div",
                            { className: "Label SubLabel" },
                            " ",
                            e.battery_percent,
                            "%",
                          ),
                        ),
                      e.state_secondary_text &&
                        i.createElement(
                          "div",
                          { className: "Label SubLabel" },
                          e.state_secondary_text,
                        ),
                    ),
                  ),
                  i.createElement(
                    "div",
                    { className: "Actions" },
                    r.length > 0 &&
                      i.createElement(p.vs, {
                        vecOptions: r,
                        sModalTitleString: (0, d.Xx)(
                          "#BindingUI_Chord_SelectActionModalHeader",
                        ),
                        fnOptionSelected: this.OnActionSelected.bind(
                          this,
                          e.serial,
                        ),
                        sLocalizedSelectedItem: "▼",
                      }),
                  ),
                ),
              )
            );
          }
        }
        let u = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return null;
          }
        };
        u = (0, o.gn)([l.Pi], u);
        class _ extends c {
          constructor(e) {
            super(e);
          }
          render() {
            let e = this.props.status;
            return i.createElement(
              "div",
              {
                className:
                  "DeviceStatus " +
                  (e.is_connected ? "Connected" : "Disconnected"),
              },
              i.createElement(
                a.wx,
                { rotation: { x: -20, y: 180 } },
                i.createElement(a.gQ, { source: e.rendermodelname }),
              ),
              i.createElement(
                a.wx,
                { translation: { y: -0.37 } },
                i.createElement(
                  a.s_,
                  { height: 0.18, width: void 0 },
                  i.createElement(
                    "div",
                    { className: "DeviceStatusLabel" },
                    e.model || e.class_string,
                  ),
                ),
              ),
            );
          }
        }
        let h = class extends i.Component {
          render() {
            let e = [],
              t = Math.min(e.length, 4),
              r = e.map((e, r) => {
                let o = Math.floor(r / t),
                  n = Math.floor(r % t);
                return i.createElement(
                  a.wx,
                  {
                    key: e.serial,
                    translation: { x: 0.8 * (n - (t - 1) / 2), y: 0.7 * -o },
                  },
                  i.createElement(_, { status: e }),
                );
              }),
              o = Math.floor(e.length / t),
              n = "system ready" == s.E.status.status_string.toLowerCase(),
              l = "system not ready" == s.E.status.status_string.toLowerCase(),
              d = null;
            return (
              s.E.status.is_perforce
                ? (d = "Perforce")
                : s.E.status.is_main && (d = "Main"),
              i.createElement(
                "div",
                null,
                r,
                i.createElement(
                  a.wx,
                  { translation: { y: -0.7 * (o + 1) }, rotation: { x: -20 } },
                  i.createElement(
                    a.s_,
                    { width: 3.2, height: void 0 },
                    i.createElement(
                      "div",
                      { className: "MonitorPanel" },
                      i.createElement(
                        "div",
                        { className: "SteamTitleLabel" },
                        null !== d &&
                          i.createElement("span", null, "[", d, "] "),
                        "SteamVR",
                      ),
                      i.createElement(
                        "div",
                        {
                          className:
                            "SteamStatusLabel " +
                            (n ? "Ready" : l ? "NotReady" : ""),
                        },
                        !s.E.connected &&
                          i.createElement(
                            "span",
                            null,
                            "Loading System Status",
                          ),
                        s.E.status && s.E.status.status_string,
                      ),
                      s.E.connected &&
                        i.createElement(
                          "div",
                          { className: "SteamStatusRight" },
                          s.E.status.hostname &&
                            i.createElement(
                              "div",
                              { className: "Hostname" },
                              "Hostname:",
                              i.createElement("br", null),
                              s.E.status.hostname,
                            ),
                        ),
                    ),
                  ),
                ),
              )
            );
          }
        };
        h = (0, o.gn)([l.Pi], h);
        class m extends i.Component {
          constructor(e) {
            super(e), s.E.Init(), (this.state = { Message: "Loading..." });
          }
          render() {
            return i.createElement(
              a.gO,
              { visibleIn3DOF: !0, visibleIn6DOF: !1 },
              i.createElement(
                a.wx,
                { parent_path: "/user/head" },
                i.createElement(
                  a.iC,
                  null,
                  i.createElement(
                    a.wx,
                    { translation: { z: -5, y: 1 } },
                    i.createElement(
                      a.wx,
                      { translation: { y: 0.35 }, rotation: { x: 20 } },
                      i.createElement(
                        a.s_,
                        { width: 3.2, height: void 0 },
                        i.createElement(
                          "div",
                          { className: "TrackingLostPanel" },
                          "Tracking lost",
                        ),
                      ),
                    ),
                    i.createElement(
                      a.wx,
                      { translation: { y: -0.2 } },
                      i.createElement(h, null),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        n.render(
          i.createElement(a.n0, null, i.createElement(m, null)),
          document.getElementById("root"),
        );
      },
    },
    r = {};
  function o(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var n = (r[e] = { id: e, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), n.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, r, i, n) => {
      if (!r) {
        var s = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [r, i, n] = e[p], a = !0, l = 0; l < r.length; l++)
            (!1 & n || s >= n) && Object.keys(o.O).every((e) => o.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(p--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [r, i, n];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
    (o.j = 865),
    (() => {
      var e = { 865: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var i,
            n,
            [s, a, l] = r,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in a) o.o(a, i) && (o.m[i] = a[i]);
            if (l) var p = l(o);
          }
          for (t && t(r); d < s.length; d++)
            (n = s[d]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return o.O(p);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (o.nc = void 0);
  var i = o.O(void 0, [968, 683], () => o(844));
  i = o.O(i);
})();
//# sourceMappingURL=fallback.js.map?v=7bc4bcc5016f9f735b23
