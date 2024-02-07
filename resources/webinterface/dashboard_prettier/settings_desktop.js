/*! For license information please see settings_desktop.js.LICENSE.txt */
(() => {
  var e,
    t = {
      1569: (e, t, r) => {
        "use strict";
        r.d(t, {
          Bl: () => _.Bl,
          Co: () => M,
          Dd: () => l.D,
          Fs: () => n.Fs,
          GC: () => k.GC,
          Ic: () => _.Ic,
          JR: () => n.JR,
          Kf: () => k.Kf,
          Kg: () => k.Kg,
          LL: () => k.LL,
          LY: () => n.LY,
          M9: () => n.M9,
          Nv: () => o.N,
          OK: () => u.OK,
          Op: () => k.Op,
          Oq: () => n.Oq,
          Pd: () => n.Pd,
          Pw: () => k.Pw,
          QZ: () => k.QZ,
          Qu: () => k.Qu,
          Sb: () => R.S,
          UU: () => n.UU,
          Uk: () => w.Uk,
          VW: () => s.V,
          Vv: () => _.Vv,
          XX: () => k.XX,
          Y9: () => a.Y,
          Z9: () => k.Z9,
          ZP: () => k.ZP,
          Zj: () => n.Zj,
          a0: () => k.a0,
          at: () => g.a,
          bt: () => m.b,
          dq: () => n.dq,
          eK: () => y.e,
          eQ: () => n.eQ,
          gQ: () => p.g,
          hz: () => i.h,
          iN: () => u.iN,
          kH: () => S.k,
          kL: () => f.k,
          l0: () => k.l0,
          lx: () => k.lx,
          mT: () => n.mT,
          n0: () => h.n,
          q9: () => n.q9,
          qA: () => k.qA,
          qI: () => u.qI,
          sH: () => w.sH,
          sO: () => b.s,
          s_: () => _.s_,
          sl: () => d.s,
          tS: () => n.tS,
          vS: () => w.vS,
          wU: () => k.wU,
          wx: () => c.w,
          x1: () => v.x,
          xY: () => k.xY,
          xj: () => p.x,
          zA: () => k.zA,
          zq: () => k.zq,
        });
        var o = r(4671),
          n = r(4727),
          i = r(7500),
          a = r(2071),
          s = r(6626),
          l = r(751),
          d = r(8116),
          c = r(390),
          u = (r(8257), r(233)),
          h = (r(7313), r(6765)),
          p = (r(491), r(171), r(8811)),
          m = r(5157),
          v = r(5486),
          g = (r(5829), r(7973)),
          _ = r(2214),
          y = (r(5627), r(3841), r(2467), r(7996), r(1364), r(5146)),
          b = r(163),
          S = r(2109),
          f = r(8221),
          R = (r(684), r(9481)),
          k = r(5867),
          w = r(7074);
        const M = VRHTML;
      },
      1364: (e, t, r) => {
        "use strict";
        r(7294), r(7313);
      },
      7996: (e, t, r) => {
        "use strict";
        var o = r(7294);
        r(7074), r(390), o.Component;
      },
      2071: (e, t, r) => {
        "use strict";
        r.d(t, { Y: () => d });
        var o = r(655),
          n = r(7294),
          i = r(7313),
          a = r(7056),
          s = r(233),
          l = r(8116);
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
            var r;
            const o = this.createSgNode(t);
            return (
              (o.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
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
        (0, o.gn)([a.ZP], d.prototype, "buildNode", null);
      },
      5146: (e, t, r) => {
        "use strict";
        r.d(t, { e: () => a });
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var r, o;
            const n = this.createSgNode(t);
            return (
              (n.properties.continuous_relatch =
                null !== (r = this.props.bContinuousRelatch) &&
                void 0 !== r &&
                r),
              (n.properties.free_dashboard_transform =
                null !== (o = this.props.bFreeDashboardTransform) &&
                void 0 !== o &&
                o),
              [e, n]
            );
          }
        }
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      3841: (e, t, r) => {
        "use strict";
        var o;
        r(7294),
          r(7313),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(o || (o = {}));
      },
      163: (e, t, r) => {
        "use strict";
        r.d(t, { s: () => i });
        var o = r(7294),
          n = r(7313);
        class i extends n.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, n.Kg)(this.props.xfCurrent.translation),
              t = (0, n.xs)(this.props.xfCurrent.rotation),
              r = (0, n.Kg)(this.props.xfCurrent.scale);
            return o.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: r,
              },
              this.props.children,
            );
          }
        }
      },
      2467: (e, t, r) => {
        "use strict";
        r(7294), r(7313);
      },
      5486: (e, t, r) => {
        "use strict";
        r.d(t, { x: () => i });
        var o = r(7294),
          n = r(7313);
        class i extends n.Mo {
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
      5627: (e, t, r) => {
        "use strict";
        r(7294), r(7313);
      },
      5157: (e, t, r) => {
        "use strict";
        r.d(t, { b: () => a });
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
                let t = (0, n.kh)(e.color, { r: 0, g: 0, b: 0 });
                r.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, r];
          }
        }
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      2109: (e, t, r) => {
        "use strict";
        r.d(t, { k: () => i });
        var o = r(7294),
          n = r(7313);
        class i extends n.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, n.Kg)(this.props.xfCurrent.translation),
              t = (0, n.xs)(this.props.xfCurrent.rotation),
              r = (0, n.Kg)(this.props.xfCurrent.scale);
            return o.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: r,
              },
              this.props.children,
            );
          }
        }
      },
      8116: (e, t, r) => {
        "use strict";
        r.d(t, { C: () => s, s: () => l });
        var o = r(655),
          n = r(7313),
          i = r(7056),
          a = r(233);
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
        (0, o.gn)([i.ZP], s.prototype, "buildNode", null);
        class l extends n.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (
              (r.properties.mountable_id = (0, a.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (r.properties.dashboard_scale = this.props.fDashboardScale),
              [e, r]
            );
          }
        }
        (0, o.gn)([i.ZP], l.prototype, "buildNode", null);
      },
      751: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => a });
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      2214: (e, t, r) => {
        "use strict";
        r.d(t, {
          Bl: () => a,
          Ic: () => o,
          Lb: () => m,
          Vv: () => n,
          s_: () => v,
        });
        var o,
          n,
          i,
          a,
          s = r(655),
          l = r(7294),
          d = r(7313),
          c = r(6765),
          u = r(7056),
          h = r(233);
        function p(e) {
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
              r = void 0 !== this.props.meters_per_pixel,
              o = void 0 !== this.props.target_dpi_panel_id,
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
            const i = [t, r, o, n].filter((e) => e).length,
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
          createOverdragBlockingElement(e, t, r, o) {
            let n = document.createElement("div");
            (n.style.position = "absolute"),
              (n.style.top = t + "px"),
              (n.style.left = e + "px"),
              (n.style.width = r + "px"),
              (n.style.height = o + "px"),
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
            var r, o, n, i, s;
            if (this.visibility != a.Visible) return [e, null];
            let l = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              c = this.createSgNode(t),
              u = { x: 0, y: 0 };
            u =
              "object" == typeof this.props.origin
                ? (0, d.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const v = this.props.overlay_key,
              g = (0, h.Gv)();
            return (
              v && v.length > 0
                ? (c.properties.key = v)
                : g
                ? (c.properties.key = g)
                : (c.properties.overlay_handle = (0, h.Mb)()),
              (c.properties.uv_min =
                null !== (r = p(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (c.properties.uv_max =
                null !== (o = p(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (c.properties.width =
                null !== (n = this.props.width) && void 0 !== n ? n : void 0),
              (c.properties.height =
                null !== (i = this.props.height) && void 0 !== i ? i : void 0),
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
              (c.properties.origin = (0, d.D1)(u)),
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
                style: { display: this.visibility == a.Hidden ? "none" : null },
              },
              this.props.children,
            );
          }
        }
        (v.s_bPanelsAreDirty = !1),
          (0, s.gn)([u.ZP], v.prototype, "onResizeObserved", null),
          (0, s.gn)([u.ZP], v.prototype, "onPanelMouseDown", null),
          (0, s.gn)([u.ZP], v.prototype, "onWindowMouseUp", null),
          (0, s.gn)([u.ZP], v.prototype, "buildNode", null);
      },
      7973: (e, t, r) => {
        "use strict";
        r.d(t, { a: () => s });
        var o = r(655),
          n = r(7313),
          i = r(2214),
          a = r(7056);
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
            let r = null;
            "object" == typeof this.props.location
              ? (r = (0, n.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (r = (0, i.Lb)(this.props.location));
            let o = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (o.properties["anchor-u"] = this.m_latchedPosition.u),
                (o.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (r) {
              const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
                n =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (o.properties["anchor-u"] = n.u),
                (o.properties["anchor-v"] = n.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const r = t.ownerDocument,
                n = t.getBoundingClientRect(),
                i = n.left + n.width / 2,
                a = n.top + n.height / 2,
                s = e.currentPanel.m_Rect;
              if (i < s.x || i > s.x + s.width || a < s.y || a > s.y + s.height)
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
              (o.properties["anchor-u"] = i / l),
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
      5829: (e, t, r) => {
        "use strict";
        r(7294), r(7313);
      },
      8811: (e, t, r) => {
        "use strict";
        r.d(t, { g: () => l, x: () => o });
        var o,
          n = r(655),
          i = r(7313),
          a = r(7056),
          s = r(233);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(o || (o = {}));
        class l extends i.Mo {
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
              (r.properties["texture-id"] = (0, s.Hb)(
                this.props["texture-id"],
              )),
              (r.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = (0, i.kh)(e.color, { r: 0, g: 0, b: 0 });
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
        (0, n.gn)([a.ZP], l.prototype, "buildNode", null);
      },
      9481: (e, t, r) => {
        "use strict";
        r.d(t, { S: () => a });
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      8221: (e, t, r) => {
        "use strict";
        r.d(t, { k: () => a });
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      6765: (e, t, r) => {
        "use strict";
        r.d(t, { n: () => d });
        var o,
          n = r(655),
          i = r(7294),
          a = r(2214),
          s = r(7056),
          l = r(233);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(o || (o = {}));
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
                  ? o.Canvas
                  : o.Image,
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
              i.createElement(
                "vsg-app",
                {
                  class: r.join(" "),
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
              n = { x: e.innerWidth / r, y: e.innerHeight / o },
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
                  let r = e.m_Rect.x,
                    o = e.m_Rect.x + e.m_Rect.width,
                    n = e.m_Rect.y,
                    i = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || r >= o || n >= i)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(a + 1, (65280 & o) >> 8, 255 & o, 255 & n),
                      this.setPixel(
                        a + 2,
                        (65280 & i) >> 8,
                        255 & i,
                        (65280 & n) >> 8,
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
          setPixel(e, t, r, n, i = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == o.Image
            ) {
              const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              o.setUint8(4 * e + 0, t),
                o.setUint8(4 * e + 1, r),
                o.setUint8(4 * e + 2, n),
                o.setUint8(4 * e + 3, i);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == o.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
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
      7313: (e, t, r) => {
        "use strict";
        r.d(t, {
          D1: () => d,
          Kg: () => c,
          Mo: () => h,
          QE: () => a,
          Uq: () => s,
          kh: () => l,
          xs: () => u,
        });
        var o = r(7294),
          n = r(5867),
          i = r(233);
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
        function u(e) {
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
        "use strict";
        r.d(t, {
          Gv: () => M,
          Hb: () => w,
          Mb: () => h,
          OK: () => I,
          ac: () => u,
          iN: () => k,
          k7: () => T,
          mK: () => R,
          qI: () => D,
          sX: () => C,
        });
        var o = r(655),
          n = r(4671);
        function i(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) {
            if ("undefined" == r) return;
            let e = [];
            for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function a(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseFloat(r);
        }
        function s(e, t) {
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
        function c(e, t) {
          return w(d(e, t));
        }
        function u(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = w(t.id)),
            (r.properties.sgid = s(t, "sgid")),
            r
          );
        }
        function h() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function p(e, t) {
          let [r, o] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let o = Object.assign({}, e),
                n = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (n = u("transform", t)),
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
                  (n = u("trackingstatevisibility", t)),
                    (n.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (n.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (n.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (n = u("elasticheadtransform", t)),
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
                  (n = u("line", t)),
                    (n.properties["target-id"] = c(t, "target-id")),
                    (n.properties.thickness = a(t, "thickness")),
                    (n.properties["start-buffer"] = a(t, "start-buffer")),
                    (n.properties["end-buffer"] = a(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (n = u("line-constrained-transform", t)),
                    (n.properties["target-id"] = c(t, "target-id")),
                    (n.properties["source-id"] = c(t, "source-id")),
                    (n.properties["source-distance"] = a(t, "source-distance")),
                    (n.properties["target-limit"] = a(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (n = u("callout-transform", t)),
                    (n.properties.offset = i(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  n = u("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (n = u("pin-to-view-transform", t)),
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
                  (n = u("manipulation-transform", t)),
                    (n.properties["is-moving"] = l(t, "is-moving")),
                    (n.properties["parent-path"] = d(t, "parent-path")),
                    (n.properties.translation = i(t, "translation")),
                    (n.properties.rotation = i(t, "rotation")),
                    (n.properties.scale = i(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (n = u("grab-transform", t)),
                    (n.properties["parent-path"] = d(t, "parent-path")),
                    (n.properties.translation = i(t, "translation")),
                    (n.properties.rotation = i(t, "rotation")),
                    (n.properties.scale = i(t, "scale"));
              }
              return [o, n];
            })(e, t),
            n = [];
          for (let e = 0; e < t.children.length; e++) {
            let o = t.children.item(e);
            if (o.children) {
              let e = p(r, o);
              e && (n = n.concat(e));
            }
          }
          return r.bShouldAbort
            ? null
            : o
            ? (n.length > 0 && (o.children = n), [o])
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
        function R(e, t, r) {
          (m = e),
            (v = t),
            (g = r),
            console.log("Setting owning overlay key to " + e);
        }
        function k(e, t) {
          return e + "::" + t;
        }
        function w(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : k(M(), e)
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
        function C(e) {
          y.push(e), T();
        }
        function D() {
          _ = !0;
        }
        function I(e) {
          var t, r;
          (r = e),
            (null == (t = f) || null == r
              ? t == r
              : t.color_mult == r.color_mult &&
                t.reflection_mult == r.reflection_mult &&
                t.roomview_mult.toString() == r.roomview_mult.toString() &&
                t.allow_skydome == r.allow_skydome) || ((f = e), T());
        }
        function T() {
          b ||
            (b = window.setTimeout(
              () =>
                (0, o.mG)(this, void 0, void 0, function* () {
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
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: M(),
                    scene_graph: t,
                    retired_sgids: y,
                  };
                  S.SendMessage("vrcompositor_systemlayer", r),
                    (b = null),
                    (y = []),
                    (_ = !1);
                }),
              0,
            ));
        }
      },
      491: (e, t, r) => {
        "use strict";
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      171: (e, t, r) => {
        "use strict";
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
              let e = (0, n.kh)(this.props.color, { r: 0, g: 0, b: 0 });
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
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      6626: (e, t, r) => {
        "use strict";
        r.d(t, { V: () => a });
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
                let e = (0, n.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                r.properties.color = [e.r, e.g, e.b];
              }
            else r.properties.color = [1, 1, 1];
            return [e, r];
          }
        }
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      8257: (e, t, r) => {
        "use strict";
        r(7294), r(7313);
      },
      390: (e, t, r) => {
        "use strict";
        r.d(t, { w: () => s });
        var o,
          n = r(7294),
          i = r(7313),
          a = r(4727);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(o || (o = {}));
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
            let e, t, r;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (r = this.props.transform.scale))
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
                (r =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, i.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let s = (0, i.Kg)(e),
              l = (0, i.xs)(t),
              d = (0, i.Kg)(r);
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
                "parent-origin": o[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
      },
      684: (e, t, r) => {
        "use strict";
        var o = r(655),
          n = r(7313),
          i = r(7056);
        class a extends n.Mo {
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
        (0, o.gn)([i.ZP], a.prototype, "buildNode", null);
      },
      4727: (e, t, r) => {
        "use strict";
        function o() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function n(e, t, r) {
          return {
            x: t.x + e * (r.x - t.x),
            y: t.y + e * (r.y - t.y),
            z: t.z + e * (r.z - t.z),
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
        function u(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            r = 0.5 * e.y,
            o = 0.5 * e.z,
            n = Math.cos(t),
            i = Math.cos(r),
            a = Math.cos(o),
            s = Math.sin(t),
            l = Math.sin(r),
            d = Math.sin(o);
          return {
            w: n * i * a + s * l * d,
            x: s * i * a + n * l * d,
            y: n * l * a - s * i * d,
            z: n * i * d - s * l * a,
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
        r.d(t, {
          Fs: () => s,
          JR: () => d,
          LY: () => c,
          M9: () => m,
          Oq: () => o,
          Pd: () => h,
          UU: () => u,
          Zj: () => i,
          dq: () => v,
          eQ: () => a,
          mT: () => l,
          q9: () => n,
          tS: () => p,
        });
      },
      7500: (e, t, r) => {
        "use strict";
        r.d(t, { h: () => i });
        var o = r(655),
          n = r(4671);
        class i {
          constructor() {
            (this.m_mailbox = new n.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return i.instance || (i.instance = new i()), i.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((r, n) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                let o = { type: "transform_request", id: e, flPushDistance: t },
                  i = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    o,
                    "transform_response",
                  );
                i.id == e && i.transform
                  ? r(i.transform)
                  : n("requestSGTransform failed");
              }),
            );
          }
        }
      },
      4671: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => i });
        var o = r(655),
          n = r(7056);
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
        (i.s_nNextMailboxNumber = 1),
          (0, o.gn)([n.ak], i.prototype, "OpenWebSocketToHost", null),
          (0, o.gn)([n.ak], i.prototype, "OnWebSocketOpen", null),
          (0, o.gn)([n.ak], i.prototype, "OnWebSocketClose", null),
          (0, o.gn)([n.ak], i.prototype, "WebSocketSend", null),
          (0, o.gn)([n.ak], i.prototype, "OnWebSocketMessage", null);
      },
      5867: (e, t, r) => {
        "use strict";
        var o, n, i, a;
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
        r.d(t, {
          GC: () => w,
          Kf: () => c,
          Kg: () => M,
          LL: () => n,
          Op: () => s,
          Pw: () => S,
          QZ: () => i,
          Qu: () => I,
          XX: () => h,
          Z9: () => p,
          ZP: () => m,
          a0: () => C,
          l0: () => f,
          lx: () => k,
          nX: () => l,
          qA: () => o,
          wU: () => d,
          xY: () => y,
          zA: () => D,
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
        var u, h, p, m, v, g, _, y, b, S, f, R, k, w, M, C, D, I;
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
        })(u || (u = {})),
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
          })(p || (p = {})),
          (function (e) {
            (e[(e.HomeMenu = 50)] = "HomeMenu"),
              (e[(e.QuickMenu = 51)] = "QuickMenu");
          })(m || (m = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(v || (v = {})),
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
          })(y || (y = {})),
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
          })(b || (b = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(S || (S = {})),
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
          })(R || (R = {})),
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
          })(w || (w = {})),
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
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(D || (D = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(I || (I = {}));
      },
      7074: (e, t, r) => {
        "use strict";
        var o, n, i, a, s;
        r.d(t, { Uk: () => o, sH: () => i, vS: () => a }),
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(i || (i = {})),
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
          })(s || (s = {}));
      },
      5928: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => f });
        var o,
          n = r(655),
          i = r(7294),
          a = r(7056),
          s = r(3568),
          l = r(1569),
          d = r(9809),
          c = r(5211),
          u = r(2893),
          h = r(7062),
          p = r(2188),
          m = r(8242),
          v = r(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(o || (o = {}));
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
              i.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                i.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                }),
              )
            );
          }
          renderBar(e, t, r) {
            let o = { width: String(100 * r) + "%" };
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
                r = this.m_svgRef.current.children.namedItem("SourceCircle"),
                n = this.props.side == o.Right,
                i = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new c.E9(0, i.top + i.height / 2);
              l.x = n ? a.left - 10 : a.right + 10;
              let d = n ? -20 : 20,
                u = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", u);
              let h = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
              t.setAttribute("points", h),
                r.setAttribute("cx", s.x + ""),
                r.setAttribute("cy", s.y + "");
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
          renderSource(e, t, r) {
            let o = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return i.createElement(_, {
                  key: o,
                  side: r,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return i.createElement(y, {
                  key: o,
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
                return i.createElement(b, {
                  key: o,
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
                return i.createElement(
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
                    i.createElement(u.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              r = this.ControllerTypeInfo,
              n = 0,
              a = [];
            for (let e in r.input_source) {
              let t = r.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let o = this.EstimateSourceHeight(t);
              (n += o),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: o,
                });
            }
            let s = 8;
            n > 16 && (s = n / 2);
            let l = 0,
              d = a.sort((e, t) => e.order - t.order);
            for (let r of d) {
              l += r.height;
              let n = l > s ? o.Right : o.Left,
                i = this.renderSource(r.sSourcePath, r.inputSource, n);
              i && (n == o.Left ? e.push(i) : t.push(i));
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
            return d.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
            );
          }
          render() {
            let e,
              t = [],
              r = this.GetSortedDevices();
            if (!r)
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
            for (let o of r)
              "TrackedDeviceClass_HMD" != o.class &&
                (o.root_path == this.state.devicePath && (e = o.serial_number),
                t.push({
                  value: o.root_path,
                  sLabel: (0, s.Xx)("#" + o.root_path),
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
          (f = (0, n.gn)([h.Pi], f));
      },
      9671: (e, t, r) => {
        "use strict";
        r.d(t, { V: () => d });
        var o = r(655),
          n = r(7294),
          i = r(7056),
          a = r(3568),
          s = r(1569);
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
              for (let r of e.pressed)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    r,
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
              for (let r of e.touched)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    r,
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
              for (let r of e.supported_buttons)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    r,
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
            for (let r of e.axis)
              t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  r.x.toFixed(2),
                  " Y: ",
                  r.y.toFixed(2),
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
        (0, o.gn)([i.ak], l.prototype, "OnLegacyInputFrame", null);
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
      792: (e, t, r) => {
        "use strict";
        r.d(t, { C: () => l });
        var o = r(655),
          n = r(7056),
          i = r(2188),
          a = r(1628);
        class s {
          Init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.Load(), (0, i.EH)(() => this.Save());
            });
          }
          Load() {
            var e, t, r, n, i;
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
                    (r = a.G3.settings.get(
                      "/settings/steamvr/backgroundDomeRadius",
                    )) && void 0 !== r
                    ? r
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
            return (0, o.mG)(this, void 0, void 0, function* () {});
          }
        }
        (0, o.gn)([i.LO], s.prototype, "m_bShowFloor", void 0),
          (0, o.gn)([i.LO], s.prototype, "m_bShowFloorFar", void 0),
          (0, o.gn)([i.LO], s.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, o.gn)([i.LO], s.prototype, "m_fBackgroundOffsetX", void 0),
          (0, o.gn)([i.LO], s.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, o.gn)([n.ak], s.prototype, "Load", null),
          (0, o.gn)([n.ak], s.prototype, "Save", null);
        const l = new s();
        window.ConstructStore = l;
      },
      9626: (e, t, r) => {
        "use strict";
        r.d(t, { B: () => m });
        var o = r(655),
          n = r(1569),
          i = r(7056),
          a = r(2188),
          s = r(8178),
          l = r(2477),
          d = r(1628),
          c = r(7176),
          u = r(7373);
        const h = "DashboardStoreSessionStorage";
        class p {
          constructor() {
            (this.k_sDashboardVRGamepadUI = "steam/dashboard/isvrgamepadui"),
              (this.m_bDarkMode = !1),
              (this.m_eIncognitoMode = n.Qu.Unavailable),
              (this.m_mapOverlayState = new Map()),
              (this.m_mapActiveDashboardPopupRequests = new Map()),
              (this.m_bHasGamepadUIOverlay = !1),
              (this.m_bIsVRGamepadUI = !1),
              (this.m_bIsSystemUIProcess = !1),
              (this.m_mapTabIdForSummonKey = new Map()),
              (this.m_mapSummonKeyForTabId = new Map()),
              (this.m_unNextTabId = 1);
          }
          GetActiveDashboardPopups() {
            return Array.from(this.m_mapActiveDashboardPopupRequests.values());
          }
          ClearActiveDashboardPopups() {
            this.m_mapActiveDashboardPopupRequests.clear();
          }
          Init(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((this.m_bIsSystemUIProcess = e),
                yield this.LoadSessionDevData(),
                (0, a.EH)(() => this.SaveSessionDevData()),
                this.m_bIsSystemUIProcess)
              )
                l.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    this.m_mapActiveDashboardPopupRequests.set(
                      e.dashboard_popup_request_id,
                      e,
                    );
                  }),
                ),
                  l.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
                    this.m_mapActiveDashboardPopupRequests.delete(
                      e.dashboard_popup_request_id,
                    );
                  });
              else {
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  this.k_sDashboardVRGamepadUI,
                  (e) => {
                    this.m_bIsVRGamepadUI = e;
                  },
                );
                try {
                  this.m_bIsVRGamepadUI =
                    VRHTML.VRPathProperties.GetBoolPathProperty(
                      this.k_sDashboardVRGamepadUI,
                    );
                } catch (e) {}
              }
              (0, a.EH)(this.updateBodyClasses);
            });
          }
          LoadSessionDevData() {
            var e, t, r, n, i, a, s, l;
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = JSON.parse(
                null !== (e = sessionStorage.getItem(h)) && void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bIgnoreVRGamepadUI =
                null !== (t = o.m_bIgnoreVRGamepadUI) && void 0 !== t && t),
                (this.m_bShowLegacyBar =
                  null !== (r = o.m_bShowLegacyBar) && void 0 !== r && r),
                (this.m_bHasGamepadUIOverlay =
                  null !== (n = o.m_bHasGamepadUIOverlay) && void 0 !== n && n),
                (this.m_bIsVRGamepadUI =
                  null !== (i = o.m_bIsVRGamepadUI) && void 0 !== i && i),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (a = o.m_fVRGamepadUI_MetersPerPixel) && void 0 !== a
                    ? a
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (s = o.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== s
                    ? s
                    : 1.17);
              for (const e of null !== (l = o.m_rgDashboardPopups) &&
              void 0 !== l
                ? l
                : [])
                this.m_mapActiveDashboardPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
              this.updatePathProperties();
            });
          }
          SaveSessionDevData() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = {
                m_bIgnoreVRGamepadUI: this.m_bIgnoreVRGamepadUI,
                m_bShowLegacyBar: this.m_bShowLegacyBar,
                m_rgDashboardPopups: Array.from(
                  this.m_mapActiveDashboardPopupRequests.values(),
                ),
                m_bHasGamepadUIOverlay: this.m_bHasGamepadUIOverlay,
                m_bIsVRGamepadUI: this.m_bIsVRGamepadUI,
                m_fVRGamepadUI_MetersPerPixel:
                  this.m_fVRGamepadUI_MetersPerPixel,
                m_fVRGamepadUI_GlobalActiveOverlayScale:
                  this.m_fVRGamepadUI_GlobalActiveOverlayScale,
              };
              sessionStorage.setItem(h, JSON.stringify(e));
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
          SetIgnoreVRGamepadUI(e) {
            (this.m_bIgnoreVRGamepadUI = e), this.updatePathProperties();
          }
          SetHasGamepadUIOVerlay(e) {
            (this.m_bHasGamepadUIOverlay = e), this.updatePathProperties();
          }
          get isTheaterMode() {
            for (const e of this.m_mapOverlayState.values())
              if (e.dockLocation == s.RA.Theater) return !0;
            return !1;
          }
          get eTheaterScreen() {
            return d.G3.settings.get(c.ZO);
          }
          ToggleTheaterCurvature() {
            const e =
              this.eTheaterScreen == s.Y3.Curved ? s.Y3.Flat : s.Y3.Curved;
            d.G3.SetSettingsValue(c.ZO, e.toString());
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
          get ignoreVRGamepadUI() {
            return this.m_bIgnoreVRGamepadUI;
          }
          get isVRGamepadUI() {
            return this.m_bIsVRGamepadUI;
          }
          get currentDashboardPosition() {
            return this.isVRGamepadUI ? u._.Standard : d.G3.settings.get(c.o1);
          }
          updatePathProperties() {
            this.m_bIsSystemUIProcess &&
              ((this.m_bIsVRGamepadUI =
                this.m_bHasGamepadUIOverlay && !this.m_bIgnoreVRGamepadUI),
              VRHTML.VRPathProperties.SetBoolPathProperty(
                this.k_sDashboardVRGamepadUI,
                this.m_bIsVRGamepadUI,
              ));
          }
          updateBodyClasses() {
            this.m_bIsVRGamepadUI
              ? window.document.body.classList.add("VRGamepadUI")
              : window.document.body.classList.remove("VRGamepadUI");
          }
        }
        (0, o.gn)([a.LO], p.prototype, "m_bIgnoreVRGamepadUI", void 0),
          (0, o.gn)([a.LO], p.prototype, "m_bShowLegacyBar", void 0),
          (0, o.gn)([a.LO], p.prototype, "m_bDarkMode", void 0),
          (0, o.gn)([a.LO], p.prototype, "m_eIncognitoMode", void 0),
          (0, o.gn)([a.LO], p.prototype, "m_mapOverlayState", void 0),
          (0, o.gn)(
            [a.LO],
            p.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0,
          ),
          (0, o.gn)(
            [a.LO],
            p.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, o.gn)(
            [a.LO],
            p.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, o.gn)([a.LO], p.prototype, "m_bIsVRGamepadUI", void 0),
          (0, o.gn)([i.ak], p.prototype, "LoadSessionDevData", null),
          (0, o.gn)([i.ak], p.prototype, "SaveSessionDevData", null),
          (0, o.gn)([a.Fl], p.prototype, "eTheaterScreen", null),
          (0, o.gn)([i.ak], p.prototype, "updateBodyClasses", null);
        const m = new p();
        window.DashboardStore = m;
      },
      1983: (e, t, r) => {
        "use strict";
        var o = r(7294),
          n = r(3935),
          i = r(1569),
          a = r(3568),
          s = r(1628),
          l = r(9809),
          d = r(1380),
          c = r(5211),
          u = r(4285),
          h = r(3081),
          p = r(9626);
        Promise.all([
          (0, a.CK)(
            ["vrmonitor", "bindingui"],
            null === i.Co || void 0 === i.Co ? void 0 : i.Co.GetSteamLanguage(),
          ),
          s.G3.Init(!0),
          l.I.Init(!0),
          c.c6.Init(),
          d.S.Init(),
          u.E.Init(),
          p.B.Init(!1),
        ])
          .then(() => {
            (document.title = (0, a.Xx)("#Settings_Header_SteamVR")),
              n.render(
                o.createElement(h._, { visible: !0 }),
                document.getElementById("settingsRoot"),
              );
          })
          .catch((e) => console.error("Failed to initialize vr settings:", e));
      },
      7726: (e, t, r) => {
        "use strict";
        r.d(t, { A: () => o, X: () => l });
        var o,
          n = r(655),
          i = r(7294),
          a = r(7056),
          s = r(1569);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(o || (o = {}));
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
              r = s.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
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
                o.HorizontalPips,
              ),
              a = this.GetRoleIcon(r);
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
          static GetBatteryIcon(e, t, r, n) {
            if (!e) return null;
            const i =
              n == o.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? r < 0.15
                ? i + "_charging_red.png"
                : i + "_charging.png"
              : 0 == r
              ? null
              : r < 0.15
              ? i + "_low.png"
              : r < 0.3
              ? i + "_battery_1.png"
              : r < 0.6
              ? i + "_battery_2.png"
              : r < 0.9
              ? i + "_battery_3.png"
              : i + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, r) {
            e == s.XX.Activated &&
              r == this.props.trackedDeviceIndex &&
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
      7373: (e, t, r) => {
        "use strict";
        r.d(t, { g: () => ae, _: () => z });
        var o,
          n = r(655),
          i = r(1569),
          a = r(7056),
          s = r(2188),
          l = r(7294),
          d = r(3081),
          c = r(5177),
          u = r(4979),
          h = r(3107),
          p = r(7176),
          m = r(3568),
          v = r(8495),
          g = r(7008),
          _ = r(9942),
          y = r(1628),
          b = r(7062),
          S = r(7726),
          f = r(8178),
          R = r(6459),
          k = r(9347),
          w = r(2743),
          M = r(7095),
          C = r(8980);
        let D = (o = class extends l.Component {
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
                  className: (0, C.LJ)("PortraitAppImageContainer", [
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
        (D.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (D.s_failedImages = []),
          (0, n.gn)([a.ak], D.prototype, "loadNextImage", null),
          (0, n.gn)([a.ak], D.prototype, "onLoad", null),
          (0, n.gn)([a.ak], D.prototype, "onError", null),
          (D = o = (0, n.gn)([b.Pi], D));
        var I = r(8242);
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
              r = _.H.Instance.SceneAppName,
              o = _.H.Instance.SceneApplicationState,
              n = _.H.Instance.SceneAppIsHome,
              a = y.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = y.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              d = y.G3.apps && y.G3.apps.find((e) => e.key == t);
            let u = !1;
            switch (o) {
              case i.xY.Quitting:
              case i.xY.Starting:
              case i.xY.Waiting:
                u = !0;
            }
            const h = ((e) => {
                if (null == e) return "";
                let t = e.image_path;
                return (
                  t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                );
              })(d),
              v = h.includes("header.jpg"),
              g = h.replace(/header\.jpg$/, "library_hero.jpg");
            return l.createElement(
              R.lL,
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
                l.createElement(D, { appkey: t, title: r, imageUrl: h }),
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
                  n
                    ? (0, m.Xx)("#Return_To_Home")
                    : (0, m.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    I.ls,
                    {
                      icon: I.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, m.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    I.ls,
                    { icon: I.uc.PopOut, onClick: this.onOpenAppVideoSettings },
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
        (0, n.gn)([a.ak], T.prototype, "onExitApp", null),
          (0, n.gn)([a.ak], T.prototype, "onReturnToGame", null),
          (0, n.gn)(
            [a.ak],
            T.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, n.gn)([a.ak], T.prototype, "onOpenAppVideoSettings", null);
        var V,
          E = r(9669),
          P = r.n(E),
          x = r(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(V || (V = {}));
        const O = (e) =>
          l.createElement(
            "div",
            {
              className: (0, C.LJ)("ButtonContainer", V[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              c.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == V.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class L extends l.Component {
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
            const r = this.m_refScrollPanel.current;
            if (!r) return;
            if (r.isThrown)
              return void r.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const o = r.children;
            if (!o || 0 == o.length) return;
            const n =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              i = o[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : r.scrollLeft,
              s = i.getBoundingClientRect().left + r.scrollLeft,
              l = i.clientWidth,
              d = r.clientWidth,
              c = Math.floor(d / l) - 1,
              u = Math.round((a - s + n + 1) / l) + c * e - 0.4999,
              h = u > 0 ? u * l + s - n : 0;
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
                className: (0, C.LJ)(
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
                    l.createElement(O, {
                      side: V.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(O, {
                      side: V.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, n.gn)([a.ZP], L.prototype, "onAnimationFrame", null),
          (0, n.gn)([a.ZP], L.prototype, "onScroll", null),
          (0, n.gn)([a.ZP], L.prototype, "onLeftButtonClick", null),
          (0, n.gn)([a.ZP], L.prototype, "onRightButtonClick", null);
        let B = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new C.cB()),
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
                  className: (0, C.LJ)(
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
                  l.createElement(D, Object.assign({}, e), this.props.children),
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
            const r = !!e.loading,
              o = null !== (t = e.apps) && void 0 !== t ? t : [];
            let n = "AppCarousel";
            return (
              e.className && (n += " " + e.className),
              (n += " NoAnimations"),
              l.createElement(
                L,
                { additionalClassNames: n, paginationAlignmentOffset: -20 },
                r &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(H, null),
                    l.createElement(H, null),
                    l.createElement(H, null),
                    l.createElement(H, null),
                  ),
                !r &&
                  o.map((e) =>
                    l.createElement(B, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var N;
        class U extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            P()
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
                r = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; r.has(t[0].appid); ) t.shift();
                let o = t.shift();
                r.add(o.appid),
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
        let F = (N = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new i.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, r) {
            var o, n;
            v.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + r,
              e.key,
            ),
              null === (n = (o = this.props).onGameLaunched) ||
                void 0 === n ||
                n.call(o, e),
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
              let o = r;
              const n = r < N.TOP_ROW_LENGTH;
              return (
                n || (o -= N.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, n, o),
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
            var e;
            let t,
              r = this.makeAppButtonList();
            const o =
                0 == r.length ||
                y.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              n =
                0 == r.length ||
                (null !==
                  (e = y.G3.settings.get(
                    "/settings/dashboard/showRoomSetup",
                  )) &&
                  void 0 !== e &&
                  e);
            if (o) t = l.createElement(U, null);
            else {
              let e = r.slice(0, N.TOP_ROW_LENGTH),
                o = r.slice(N.TOP_ROW_LENGTH);
              t = l.createElement(
                l.Fragment,
                null,
                n &&
                  l.createElement(
                    c.z,
                    {
                      className: "ButtonControl WithIcon PanelTopRight",
                      onClick: this.onRoomSetup,
                    },
                    l.createElement("span", null, (0, m.Xx)("#RoomSetup")),
                    l.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/svr_recenter.svg",
                    }),
                  ),
                l.createElement(A, { className: "TopRow", apps: e }),
                l.createElement(A, { className: "BottomRow", apps: o }),
              );
            }
            return l.createElement(
              R.lL,
              {
                visible: this.props.visible,
                scrollable: !o,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: p.O5,
              },
              t,
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
            p.W4,
            p.jW,
          ])),
          (0, n.gn)([a.ak], F.prototype, "onRoomSetup", null),
          (F = N = (0, n.gn)([b.Pi], F));
        var G,
          W,
          z,
          K,
          q = r(16),
          X = r(421),
          Z = r(6063),
          j = r(3619),
          Q = r(4138),
          Y = (r(9462), r(9626)),
          J = r(792),
          $ = r(6346),
          ee = r(6821),
          te = r(2477);
        function re(e) {
          const { debugHostLocation: t, onGrabStart: r, onGrabEnd: o } = e,
            n = Y.B.isVRGamepadUI,
            a = (0, C.aB)();
          if (!a) return null;
          const s =
              null != (null == a ? void 0 : a.overlayKey) &&
              "" != (null == a ? void 0 : a.overlayKey),
            d = !!(a.keyboardFlags & i.vS.Minimal),
            c = n ? 2 : 1.5,
            u = n ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            h = n
              ? d
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : d
              ? { y: -0.73, z: 0.05 }
              : { y: -0.87, z: 0.05 };
          return l.createElement(
            i.wx,
            { translation: u },
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
                { translation: h },
                l.createElement(Z.J, {
                  tint: Y.B.ControlBarTint,
                  onStartMove: r,
                  onEndMove: o,
                }),
              ),
          );
        }
        function oe(e) {
          const t = (0, C.aB)();
          if (!t) return null;
          const r = ae.k_nControlBarPitch;
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
                    y: ae.getDashboardVerticalPosition(),
                    z: 1 * -ae.getDashboardDistance(),
                  },
                  scale: ae.getDashboardScale(),
                },
                l.createElement(
                  i.wx,
                  { translation: ae.getControlBarTranslation() },
                  l.createElement(
                    i.wx,
                    { rotation: { x: r }, curvature_pitch: r },
                    l.createElement(
                      X.Z,
                      null,
                      l.createElement(re, { debugHostLocation: "Undocked" }),
                    ),
                  ),
                ),
              ),
            )
          );
        }
        !(function (e) {
          (e[(e.ToggleRoomView = 0)] = "ToggleRoomView"),
            (e[(e.Recenter = 1)] = "Recenter"),
            (e[(e.ToggleVideoStream = 2)] = "ToggleVideoStream"),
            (e[(e.IncognitoMode = 3)] = "IncognitoMode"),
            (e[(e.Volume = 4)] = "Volume"),
            (e[(e.ToggleDarkMode = 5)] = "ToggleDarkMode");
        })(G || (G = {})),
          (function (e) {
            (e[(e.Near = 0)] = "Near"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Far = 2)] = "Far"),
              (e[(e.Standard = 3)] = "Standard");
          })(z || (z = {}));
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
          return "steamlink_openvr-overlay" == e || e.startsWith(p.wX);
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(K || (K = {}));
        let ae = (W = class extends l.Component {
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
                eShowPopoverMenu: K.None,
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
              (window.setDashboardScale = (e) => (W.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (W.s_dashboardUserDistance = e)),
              y.G3.Init(!1),
              i.hz.getInstance(),
              this.m_mailbox.Init(W.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  W.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    W.k_sSetDashboardForceBoundsVisible,
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
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_theater_mode",
                    this.onHideTheaterMode,
                  );
              }),
              te.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = Y.B.GetSummonKeyForTabId(e);
                  if (
                    !this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab",
                    )
                  )
                    throw new Error("Failed to switch to overlay: " + t);
                },
              ),
              te.Q.SteamVR.SetImplementation(
                "DashboardActionInvoked",
                ({ action_id: e, toggle_value: t }) => {
                  switch (e) {
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
                      Y.B.m_bDarkMode = !Y.B.isDarkMode;
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
              r = y.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              o = y.G3.settings.get("/settings/steamvr/enableHomeApp"),
              n = y.G3.settings.get(p.y3);
            ((t || (!r && o)) && !n) ||
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
                  r = t != i.xY.None;
                if (r && this.m_eSceneApplicationState == i.xY.None)
                  Y.B.HideTheaterOverlay();
                else if (
                  !r &&
                  this.m_eSceneApplicationState != i.xY.None &&
                  !Y.B.isTheaterMode &&
                  null !==
                    (e = y.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of Y.B.m_mapOverlayState)
                    if (e.startsWith(p.wX)) {
                      this.setDockLocation(e, t, f.RA.Theater);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(p.PF) &&
                    !r &&
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
            let r = !1;
            t.bShown !== this.state.bShown &&
              h.G.Instance.playSound(
                this.state.bShown ? h.y.DashboardOpen : h.y.DashboardClose,
              ),
              this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e, t, r, o;
            const n = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(de),
              i = this.getActiveOverlaySummonKey(),
              a = new $.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                r = Y.B.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == p.gB) continue;
              const o = new $.D3();
              o.set_tab_id(r),
                o.set_visible(this.shouldShowOverlayTab(t, !0)),
                t.summon_overlay_key == p.T2
                  ? o.set_display_name((0, m.Xx)("#Steam"))
                  : o.set_display_name(t.tab_name);
              const n = new $.I_();
              switch (t.summon_overlay_key) {
                case p.T2:
                  n.set_enum($.mw.k_EVRDashboardTabIcon_Steam);
                  break;
                case p.Xl:
                  n.set_enum($.mw.k_EVRDashboardTabIcon_DesktopDisplay);
                  break;
                case p.A4:
                  n.set_enum($.mw.k_EVRDashboardTabIcon_Cog);
                  break;
                case p.PF:
                  if (
                    (n.set_enum($.mw.k_EVRDashboardTabIcon_RunningGame),
                    _.H.Instance.SceneAppKey.startsWith(p.I8))
                  ) {
                    const e = Number.parseInt(
                      _.H.Instance.SceneAppKey.substring(p.I8.length),
                    );
                    Number.isInteger(e) && n.set_appid(e);
                  }
                  break;
                default:
                  n.set_overlay(t.summon_overlay_key),
                    n.set_enum($.mw.k_EVRDashboardTabIcon_Unknown);
              }
              o.set_icon(n),
                a.add_tabs(o),
                i == t.summon_overlay_key && a.set_selected_tab_id(r),
                p.A4 == t.summon_overlay_key && a.set_vr_settings_tab_id(r);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (r = this.m_refDesktopView.current) ||
                void 0 === r ||
                r.state.desktopIndices.forEach((t) => {
                  var r;
                  const o = `${p.r4}.${t}`,
                    n = Y.B.GetTabIdForSummonKey(o),
                    s = new $.D3();
                  s.set_tab_id(n),
                    s.set_display_name(
                      e > 1
                        ? (0, m.Xx)("#Desktop_X", t)
                        : (0, m.Xx)("#Desktop"),
                    ),
                    s.set_visible(!0);
                  const l = new $.I_();
                  l.set_enum($.mw.k_EVRDashboardTabIcon_DesktopDisplay),
                    s.set_icon(l),
                    a.add_tabs(s),
                    (null == i ? void 0 : i.startsWith(p.gB)) &&
                      (null === (r = this.m_refDesktopView.current) ||
                      void 0 === r
                        ? void 0
                        : r.currentDesktopIndex) == t &&
                      a.set_selected_tab_id(n);
                });
            }
            for (const e of n) {
              if (!e.overlay_key) continue;
              const t = Y.B.GetTabIdForSummonKey(e.overlay_key),
                r = new $.D3();
              r.set_tab_id(t), r.set_display_name(e.title), r.set_visible(!0);
              const n = new $.I_();
              n.set_enum($.mw.k_EVRDashboardTabIcon_DesktopWindow),
                n.set_hwnd(Number.parseInt(e.hwnd)),
                r.set_icon(n),
                a.add_tabs(r),
                (null == i ? void 0 : i.startsWith(p.gB)) &&
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.sCurrentOverlayKey) == e.overlay_key &&
                  a.set_selected_tab_id(t);
            }
            a.tabs().sort(le), (0, ee.W)(a);
            const s = new $.yt();
            s.add_actions(
              $.z3.fromObject({
                action_id: G.ToggleRoomView,
                display_name: (0, m.Xx)("#Toggle_Room_View"),
                visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                  G.ToggleRoomView,
                ),
                invocation: $.w7.k_EVRDashboardActionInvocation_Toggle,
                active:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                enabled:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                icon: { enum: $.Cj.k_EVRDashboardActionIcon_RoomViewOff },
                icon_active: { enum: $.Cj.k_EVRDashboardActionIcon_RoomViewOn },
              }),
            ),
              s.add_actions(
                $.z3.fromObject({
                  action_id: G.Recenter,
                  display_name: (0, m.Xx)("#Button_Recenter"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    G.Recenter,
                  ),
                  invocation: $.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: $.Cj.k_EVRDashboardActionIcon_Recenter },
                }),
              ),
              (0, ee.W)(s);
            const l = new $.Jl();
            l.set_windows(
              n.map((e) => {
                const t = new $.fY();
                return (
                  t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key &&
                    t.set_tab_id(Y.B.GetTabIdForSummonKey(e.overlay_key)),
                  t
                );
              }),
            ),
              (0, ee.W)(l);
          }
          GetOverlayVisibleTimeInSeconds(e) {
            const t = VRHTML.VROverlay.FindOverlay(e);
            return t ? VRHTML.VROverlay.GetVisibleTimeInSeconds(t) : 0;
          }
          initializeOverlayState(e) {
            y.G3.GetAppInfo(e).then((t) => {
              var r, o;
              let n = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                n = null !== (r = y.G3.settings.get(t)) && void 0 !== r ? r : 1;
              }
              Y.B.m_mapOverlayState.set(e, {
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
                  : ie(e) &&
                    (null !==
                      (o = y.G3.settings.get(
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
            var e, t, r;
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
              null === (r = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === r ||
                r.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            if (W.s_dashboardUserDistance) return W.s_dashboardUserDistance;
            const e = Y.B.currentDashboardPosition;
            return e == z.Near
              ? 0.925
              : e == z.Middle
              ? 1.05
              : e == z.Far
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
              r = Y.B.currentDashboardPosition;
            return r == z.Near
              ? -0.07 + t
              : r == z.Middle
              ? -0.08 + t
              : (z.Far, -0.09 + t);
          }
          static getDashboardScale() {
            var e;
            if (W.s_dashboardUserScale) return W.s_dashboardUserScale;
            let t = 1;
            const r = Y.B.currentDashboardPosition;
            return (
              (t =
                r == z.Near
                  ? 0.36
                  : r == z.Middle
                  ? 0.41
                  : r == z.Far
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
            return Y.B.isVRGamepadUI
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
            this.setState((t, r) => {
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
            e.overlay_key.startsWith(p.Vq)
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay(),
              e.overlay_key == p.T2 && Y.B.ClearActiveDashboardPopups();
            const r = Y.B.m_mapOverlayState.get(e.overlay_key);
            r &&
              this.recordDockStats(e.overlay_key, r, e.visible_time_in_seconds),
              Y.B.m_mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            const t = this.getActiveOverlaySummonKey();
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              }),
              Y.B.SetHasGamepadUIOVerlay(this.hasVRGamepadUIOverlay()),
              this.autoSwitchOverlayIfNeeded(),
              this.m_activeOverlayThatVanished &&
                this.hasDashboardOverlay(
                  this.m_activeOverlayThatVanished.sSummonKey,
                ) &&
                (this.m_activeOverlayThatVanished = null);
            const r = y.G3.settings.get(p.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(r) &&
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
            var t, r;
            this.switchToOverlayInternal(p.gB),
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
                  null === (t = y.G3.settings.get(p.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setDockLocation(e, t, r) {
            t.dockLocation != r &&
              (this.recordDockStats(e, t), (t.dockLocation = r));
          }
          recordDockStats(e, t, r) {
            var o;
            const n = Date.now(),
              i = n - t.nDockStartMs;
            if (i >= 1e3) {
              const n = /^valve\.steam\.desktopgame\.(\d+)$/,
                a = e.match(n),
                s = _.H.Instance.SceneAppKey,
                l =
                  t.dockLocation == f.RA.Theater &&
                  null !==
                    (o = y.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== o &&
                  o;
              void 0 === r && (r = this.GetOverlayVisibleTimeInSeconds(e));
              const d = Math.floor(
                  1e3 * (r - t.fLastTotalVisibleTimeInSeconds),
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
              (t.fLastTotalVisibleTimeInSeconds = r),
                v.e.instance.AddRow("SteamVROverlayDockStats", c);
            }
            t.nDockStartMs = n;
          }
          onDockOverlay(e, t, r) {
            var o, n;
            let i = !1;
            (t != f.RA.LeftHand && t != f.RA.RightHand && t != f.RA.Theater) ||
              Y.B.m_mapOverlayState.forEach((r, o) => {
                r.dockLocation == t &&
                  (this.setDockLocation(e, r, f.RA.Dashboard), (i = !0));
              });
            const a = Y.B.m_mapOverlayState.get(e);
            if (
              (a &&
                (a.dockLocation == f.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                this.setDockLocation(e, a, t),
                (a.xfInitial = r)),
              t === f.RA.Dashboard)
            )
              if (e.startsWith(p.r4)) {
                const t = Number.parseInt(e.substring(p.r4.length + 1));
                null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t);
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
                i || J.C.m_bShowFloor || (Y.B.m_bDarkMode = !0));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = Y.B.isVRGamepadUI,
              r = this.getActiveOverlay();
            if (!r) return null;
            const o = Y.B.m_mapOverlayState.get(e),
              n = o ? o.fScale : 1,
              a = t ? Y.B.m_fVRGamepadUI_GlobalActiveOverlayScale : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                { scale: a },
                l.createElement(i.sl, {
                  mountedId: r.mountable_id,
                  fDashboardScale: n,
                }),
                t && this.renderVRGamepadUISidePanels(),
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
                  (t && e.summon_overlay_key == p.O5) ||
                  (!t &&
                    ((r = e.summon_overlay_key),
                    null !== (o = null == r ? void 0 : r.startsWith(p.MI)) &&
                      void 0 !== o &&
                      o))
                );
            var r, o;
          }
          computeFilteredOverlayTabs(e) {
            return Object.values(this.m_mapExternalOverlays)
              .filter((t) => this.shouldShowOverlayTab(t, e))
              .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let r = this.m_mapExternalOverlays[t];
              if (r.summon_overlay_key == e) return r;
            }
            return null;
          }
          hasVRGamepadUIOverlay() {
            return this.hasDashboardOverlay(p.T2);
          }
          switchToHomeOverlay() {
            let e;
            (e = Y.B.isVRGamepadUI ? p.T2 : p.O5),
              this.switchToOverlayInternal(e, "switchToDashboardLibrary");
          }
          switchToSteamOverlay() {
            Y.B.isVRGamepadUI &&
              this.switchToOverlayInternal(p.T2, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var r, o, n, a;
            if (!e) return !1;
            if (e == p.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                r = "bindingui/" + i.qA[(0, i.Op)()];
              this.m_mailbox.SendMessage(r, t), (e = p.RM);
            }
            if (e.startsWith(p.r4)) {
              const t = Number.parseInt(e.substring(p.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (r = this.m_refDesktopView.current) ||
                  void 0 === r ||
                  r.onDesktopChange(t)),
                (e = p.gB);
            } else if (e.startsWith(p.Vq)) {
              if (
                !(null === (o = this.m_refDesktopView.current) || void 0 === o
                  ? void 0
                  : o.hasWindowView(e))
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
                  W.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == p.O5 && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(p.T2),
              null == t && e.push(p.O5),
              t == p.T2 && Y.B.ignoreVRGamepadUI && e.push(p.O5);
            const r = e.find(this.hasDashboardOverlay);
            r && this.switchToOverlayInternal(r);
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
            return Y.B.m_mapOverlayState.get(e);
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
            var r;
            if (!y.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const o = Y.B.m_mapOverlayState.get(e.overlay_key);
            (null == o ? void 0 : o.dockLocation) != f.RA.Theater &&
              (this.show(
                null !== (r = e.reason) && void 0 !== r ? r : "unknown",
              ),
              e.overlay_key
                ? this.switchToOverlayInternal(e.overlay_key)
                : this.autoSwitchOverlayIfNeeded(),
              t &&
                this.setDashboardVisibility(
                  !0,
                  e.tracked_device_index,
                  e.reason,
                ));
          }
          onHideTheaterMode() {
            let e = this.getActiveOverlayKey();
            this.onDockOverlay(e, f.RA.Theater);
            let t = this.getActiveOverlayKey();
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
          setDashboardVisibility(e, t, r) {
            let o = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: r,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o);
          }
          show(e) {
            if (this.isShown()) return;
            v.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = _.H.Instance.SceneAppKey,
              r = _.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              r
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(p.PF)),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let o = { type: W.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
              (0, i.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: K.None }),
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
            const r =
                null !==
                  (t = VRHTML.VRControlPanel.GetCameraRoomViewVisible()) &&
                void 0 !== t &&
                t,
              o = "boolean" == typeof e ? e : !r;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(o);
          }
          onQuickLaunchButtonClick() {
            this.switchToOverlayInternal(p.O5);
          }
          onRecenterClick() {
            this.state.bLinkStreamActive && VRHTML.BIsLinkServer()
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active",
                ))
              : this.m_mailbox.SendMessage(q.BB, {
                  type: q.KU,
                  countdown_seconds: 3,
                });
          }
          onImmersiveRoomSetupClick() {
            this.m_mailbox.SendMessage("driver_hmd", { type: "room_setup" });
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
          renderPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = y.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              r = y.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let o = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (o = VRHTML.VRProperties.GetBoolProperty(
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
                  !!Y.B.isVRGamepadUI &&
                    l.createElement(R.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(p.O5),
                          this.showPopoverMenu(K.None);
                      },
                    }),
                  o &&
                    l.createElement(R.dy, {
                      label: (0, m.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(K.None);
                      },
                    }),
                  t &&
                    e &&
                    l.createElement(R.dy, {
                      label: s,
                      imageUrl: d,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(K.None);
                      },
                    }),
                  l.createElement(R.dy, {
                    label: (0, m.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  r &&
                    l.createElement(R.dy, {
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
              this.setState({ eShowPopoverMenu: K.None });
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
                !(function (e, t, r) {
                  let o = r.getBoundingClientRect();
                  return (
                    e >= o.left && e <= o.right && t >= o.top && t <= o.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, r, o;
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
                return l.createElement(R.Rk, {
                  name:
                    null === (r = this.state.mapWindows.get(e)) || void 0 === r
                      ? void 0
                      : r.title,
                  iconUrl: this.getDashboardIconUri(n),
                });
              }
              return l.createElement(R.Rk, {
                name:
                  "Desktop " +
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(n),
              });
            }
            if (n.summon_overlay_key == p.RM)
              return l.createElement(R.Rk, {
                name: (0, m.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              });
            let i = n.tab_name;
            return l.createElement(R.Rk, {
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
            let r = [];
            const o =
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
                  (a.scale = { x: 0.005, y: 0.005, z: o });
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
                r.push(d);
              }
              if (r.length > 20) break;
            }
            return r;
          }
          render() {
            var e, t;
            const r = _.H.Instance.SceneApplicationState !== i.xY.None;
            if (!r && Y.B.isDarkMode) {
              const r =
                  null !==
                    (e = y.G3.settings.get(
                      "/settings/dashboard/theaterModeBrightness",
                    )) && void 0 !== e
                    ? e
                    : 0.5,
                o =
                  null !==
                    (t = y.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== t
                    ? t
                    : 0.5;
              (0, i.OK)({
                color_mult: Math.pow(r, 2.2),
                reflection_mult: Math.pow(o, 2.2),
                roomview_mult: [0.12, 0.16, 0.6],
                allow_skydome: !J.C.m_bShowFloor,
              });
            } else if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == p.A4,
                t = y.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                );
              (_.H.Instance.SceneAppIsHome && t) || e || !r
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
            const o = this.getActiveOverlaySummonKey(),
              n = this.state.bShown && this.state.setForcingBoundsVisible[o],
              a = n && n.size > 0;
            let s = [];
            return (
              a && (s = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                "div",
                { className: "DashboardMain" },
                a && l.createElement(ne, null),
                a && l.createElement("span", null, s),
                this.state.bShown && this.renderDashboard(),
                l.createElement(oe, null),
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
            return R.Eu.has(e)
              ? R.Eu.get(e)
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
              r = R.IO.Center;
            return l.createElement(R.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: r,
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
              (this.state.eShowPopoverMenu == K.None ||
                this.state.eShowPopoverMenu == K.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == K.Volume;
          }
          isSteamOverlayActive() {
            return (
              this.isOverlayActive(p.T2) &&
              this.state.eShowPopoverMenu == K.None
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
          getPeerButtonInfo() {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    0,
                    i.Uk.PeerButtonInfo_String,
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
          ToggleIncognitoMode(e) {
            let t = {
              type: "toggle_voicechat",
              enable: null != e ? e : !Y.B.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          ToggleVideoStream() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_videostream",
            });
          }
          renderVRGamepadUISidePanels() {
            var e;
            const t =
                null ===
                  (e = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? p.ml
                  : null,
              r = y.G3.settings.get("/settings/dashboard/theaterPosition");
            let o = W.k_nControlBarWidthMeters / 2;
            r == z.Near ||
              (r == z.Middle
                ? (o *= 1.5)
                : r == z.Far
                ? (o *= 1.85)
                : r == z.Standard && (o *= 1.5));
            const n = this.GetActiveOverlayAnchorIDs();
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                {
                  parent_id: n.strCenterLeftAnchorID,
                  translation: { x: -0.08 },
                  rotation: { y: 20 },
                },
                l.createElement(i.s_, {
                  id: "VRGamepadUI-MainMenu-Panel",
                  debug_name: "VRGamepadUI-MainMenu-Panel",
                  interactive: !0,
                  curvature_origin_id: t,
                  overlay_key: p.v2,
                  origin: i.Ic.CenterRight,
                  meters_per_pixel: Y.B.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.01,
                }),
              ),
              l.createElement(
                i.wx,
                {
                  parent_id: n.strCenterRightAnchorID,
                  translation: { x: 0.08 },
                  rotation: { y: -20 },
                },
                l.createElement(i.s_, {
                  id: "VRGamepadUI-QuickAccessMenu-Panel",
                  debug_name: "VRGamepadUI-QuickAccessMenu-Panel",
                  interactive: !0,
                  curvature_origin_id: t,
                  overlay_key: p.Tn,
                  origin: i.Ic.CenterLeft,
                  meters_per_pixel: Y.B.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.01,
                }),
              ),
            );
          }
          BShouldShowDashboardAction(e) {
            var t, r, o;
            switch (e) {
              case G.ToggleRoomView:
                const e =
                    null !== (t = y.G3.settings.get(p.Av)) && void 0 !== t && t,
                  n =
                    null !== (r = y.G3.settings.get(p.k_)) && void 0 !== r
                      ? r
                      : 0,
                  i = VRHTML.BIsLinkServer();
                return e && n > 0 && !(this.state.bLinkStreamActive && i);
              case G.ToggleVideoStream:
                return !1;
              case G.Recenter:
                return (
                  1 !=
                  (null !==
                    (o =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            2109,
                          )) && void 0 !== o
                    ? o
                    : 0)
                );
              case G.IncognitoMode:
                return !1;
              case G.ToggleDarkMode:
                return Y.B.isTheaterMode || J.C.m_bShowFloor;
              default:
                return !1;
            }
          }
          renderLegacyControlBar(e, t, r) {
            var o, n, a, s;
            const d = Y.B.isVRGamepadUI,
              u = Y.B.isDarkMode,
              h = r ? 1 : 0,
              v = W.k_nControlBarWidthMeters,
              b =
                null ===
                  (o = y.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === o ||
                o,
              S =
                null ===
                  (n = y.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === n ||
                n,
              f = d,
              k = !d && !0,
              w = !(
                null !==
                  (a = y.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== a &&
                a
              ),
              M = this.getPeerButtonInfo(),
              C = (VRHTML.BIsLinkServer(), VRHTML.BIsLinkClient()),
              D = _.H.Instance.SceneApplicationState,
              I = _.H.Instance.SceneAppIsHome,
              T =
                null ===
                  (s = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === s ||
                s
                  ? p.ml
                  : null,
              V = _.H.Instance.SceneAppKey;
            let E = "images/appimage_default.png";
            V && (E = "/app/image?app_key=" + V);
            let P = C || this.state.bLinkStreamActive;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.Dd,
                { value: h },
                l.createElement(
                  i.VW,
                  { color: Y.B.ControlBarTint },
                  l.createElement(
                    i.wx,
                    { translation: { z: 1e-5 } },
                    l.createElement(
                      i.s_,
                      {
                        curvature_origin_id: T,
                        width: v,
                        interactive: r,
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
                            l.createElement(R.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, m.Xx)("#Menu"),
                              style: R.zk.Small,
                              onClick: () => this.showPopoverMenu(K.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          l.createElement(
                            R.dw,
                            { style: R.zk.Small },
                            f &&
                              l.createElement(R.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/vr_steam.svg",
                                label: (0, m.Xx)("#Steam"),
                                active: this.isSteamOverlayActive(),
                                onClick: () => this.switchToSteamOverlay(),
                              }),
                            !1,
                            k &&
                              l.createElement(R.B8, {
                                label: (0, m.Xx)("#RecentlyPlayed"),
                                imageUrl:
                                  "/dashboard/images/icons/svr_items.svg",
                                active: this.isOverlayActive(p.O5),
                                onClick: this.onQuickLaunchButtonClick,
                              }),
                            S &&
                              l.createElement(R.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_desktop_alt.svg",
                                label: (0, m.Xx)("#Desktops"),
                                active: this.isDesktopTrayActive(),
                                onClick: () =>
                                  this.switchToOverlayInternal(p.gB),
                              }),
                          ),
                          l.createElement(
                            R.dw,
                            { style: R.zk.Small },
                            l.createElement(
                              l.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                l.createElement(R.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, m.Xx)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    K.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(K.ExternalOverlays),
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
                          D != i.xY.None &&
                            r &&
                            l.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              l.createElement(
                                g.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                l.createElement(
                                  i.VW,
                                  { color: Y.B.ControlBarTint },
                                  l.createElement(
                                    i.wx,
                                    { translation: { z: 0.02 } },
                                    l.createElement(
                                      i.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: p.WR,
                                        curvature_origin_id: T,
                                      },
                                      l.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        l.createElement(R.NT, {
                                          label: I
                                            ? (0, m.Xx)("#SteamVR_Home")
                                            : (0, m.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(p.PF),
                                          style: R.zk.App,
                                          imageUrl: E,
                                          onClick: () =>
                                            this.switchToOverlayInternal(p.PF),
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
                            R.dw,
                            { style: R.zk.Small },
                            this.BShouldShowDashboardAction(G.ToggleDarkMode) &&
                              l.createElement(R.B8, {
                                imageUrl: u
                                  ? "/dashboard/images/icons/svr_nightmode.svg"
                                  : "/dashboard/images/icons/svr_lightmode.svg",
                                label: (0, m.Xx)("#Settings_ToggleDarkMode"),
                                onClick: () => (Y.B.m_bDarkMode = !u),
                                active: u,
                              }),
                            !1,
                            !1,
                            this.BShouldShowDashboardAction(G.Recenter) &&
                              l.createElement(R.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, m.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            P &&
                              l.createElement(R.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: "Room Setup",
                                onClick: this.onImmersiveRoomSetupClick,
                              }),
                            this.BShouldShowDashboardAction(G.ToggleRoomView) &&
                              l.createElement(R.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
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
                            l.createElement(R.D6, {
                              active: this.state.eShowPopoverMenu == K.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(K.Volume),
                              onHideTray: () => this.showPopoverMenu(K.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          w &&
                            l.createElement(R.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(p.A4),
                              enabled: this.hasDashboardOverlay(p.A4),
                              label: (0, m.Xx)("#VRSettings"),
                              style: R.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(p.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            M &&
                            l.createElement(R.NT, {
                              imageUrl: M.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, m.Xx)(M.sButtonName),
                              style: R.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            }),
                        ),
                      ),
                      r && this.renderLegacyControlBarTrays(T),
                    ),
                  ),
                ),
              ),
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const r = Y.B.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(k.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: r,
                onToggleWindowList: () => this.showPopoverMenu(K.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(R.z, {
                ref: this.m_refVolumeTray,
                curvatureOriginId: e,
                scale: t,
                position: 0.337,
                visible: this.isVolumeTrayActive(),
                tintColor: r,
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
            return (
              Y.B.m_bShowLegacyBar,
              l.createElement(
                l.Fragment,
                null,
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
                    meters_per_pixel: Y.B.m_fVRGamepadUI_MetersPerPixel,
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
                    l.createElement(i.wx, {
                      id: p.dG,
                      translation: { y: -0.1 },
                    }),
                  ),
                  l.createElement(i.wx, { scale: 0.5 }),
                ),
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(Y.B.m_mapOverlayState, ([e, t]) => ({
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
            var e, t, r, o;
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
                  (o =
                    null === (r = this.m_refDesktopView.current) || void 0 === r
                      ? void 0
                      : r.desktopCount) && void 0 !== o
                  ? o
                  : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.Y9,
                {
                  tabName: (0, m.Xx)("#RecentlyPlayed"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: p.O5,
                },
                l.createElement(F, {
                  visible: this.state.bShown && this.isOverlayActive(p.O5),
                  onGameLaunched: this.onGameLaunched,
                }),
              ),
              l.createElement(
                i.Y9,
                { tabName: (0, m.Xx)("#Now_Playing"), summonOverlayKey: p.PF },
                l.createElement(T, {
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
                l.createElement(k.N, {
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
            var e, t, r, o;
            const n = Y.B.isDarkMode,
              a = n ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              s = n ? 0 : 0.1;
            let d = !1,
              c = !1,
              h = !1,
              v = this.getActiveOverlayKey();
            if (v) {
              let e = VRHTML.VROverlay.FindOverlay(v);
              (d =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, i.Z9.EnableControlBarKeyboard)),
                (c =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, i.Z9.EnableControlBarClose)),
                (h =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, i.Z9.EnableSteamUIButtons));
            }
            const g =
                null !==
                  (e = y.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin",
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              _ =
                null !==
                  (t = y.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax",
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              b =
                null ===
                  (r = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r
                  ? p.ml
                  : null,
              S = { x: 0, y: -0.15, z: 0.1 },
              k = this.GetActiveOverlayAnchorIDs();
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                {
                  parent_id: k.strBottomCenterAnchorID,
                  translation: { y: 0.003 },
                },
                l.createElement(
                  i.VW,
                  { color: a },
                  l.createElement(
                    i.s_,
                    {
                      curvature_origin_id: b,
                      origin: i.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: k.strBottomCenterAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: i.Vv.SingleTap,
                      reflect: s,
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
                  parent_id: k.strBottomCenterAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                l.createElement(
                  i.VW,
                  { color: a },
                  l.createElement(
                    i.s_,
                    {
                      curvature_origin_id: b,
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
                        l.createElement(u.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: g,
                          max: _,
                          value: this.activeOverlayScale,
                          valueStyleVariant: u.px.OnHandle,
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
                        h &&
                          l.createElement(R.zN, {
                            icon: l.createElement(j.VC, {
                              button: Q.F.HomeMenu,
                              type: j.yV.Knockout,
                              size: j.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: S,
                            onClick: () => {
                              this.onSteamButtonPressed(i.ZP.HomeMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        h &&
                          l.createElement(R.zN, {
                            icon: l.createElement(j.VC, {
                              button: Q.F.QuickMenu,
                              type: j.yV.Knockout,
                              size: j.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: S,
                            onClick: () => {
                              this.onSteamButtonPressed(i.ZP.QuickMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        !1,
                        this.isDesktopOverlayActive() &&
                          (null === (o = this.m_refDesktopView.current) ||
                          void 0 === o
                            ? void 0
                            : o.renderControlBarButtons(S)),
                        d &&
                          l.createElement(R.CS, {
                            tooltipTranslation: S,
                            overlayKey: this.getActiveOverlayKey(),
                          }),
                        l.createElement(R.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, m.Xx)("#DockOnLeftController"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = Y.B.m_mapOverlayState.get(t)) ||
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
                        l.createElement(R.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, m.Xx)("#DockOnRightController"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = Y.B.m_mapOverlayState.get(t)) ||
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
                        l.createElement(R.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, m.Xx)("#FloatInWorld"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (0, f.fT)(
                              null === (e = Y.B.m_mapOverlayState.get(t)) ||
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
                        l.createElement(R.zN, {
                          iconUrl: "/dashboard/images/icons/svr_theater.svg",
                          title: (0, m.Xx)("#ToggleTheaterMode"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = Y.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == f.RA.Theater
                              ? this.onDockOverlay(t, f.RA.Dashboard)
                              : this.onDockOverlay(t, f.RA.Theater);
                          },
                          active:
                            this.getActiveOverlayDockLocation() == f.RA.Theater,
                        }),
                        c &&
                          l.createElement(R.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, m.Xx)(
                              ie(v) ? "#QuitApp" : "#CloseOverlay",
                            ),
                            tooltipTranslation: S,
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
            const t = Y.B.isDarkMode,
              r = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              o = t ? 0 : 0.1,
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
                    { color: r },
                    l.createElement(
                      i.s_,
                      {
                        curvature_origin_id: e,
                        origin: i.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: p.WR,
                        debug_name: "StatusBar",
                        reflect: o,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: a } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          n && this.renderStatusBarTitle(),
                          l.createElement(R.j6, {
                            role: i.Kg.TrackedControllerRole_LeftHand,
                            style: S.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(R.j6, {
                            deviceIndex: i.wU,
                            style: S.A.VerticalBattery,
                          }),
                          l.createElement(R.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(R.j6, {
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
            var e, t, r, o;
            const n = this.computeFilteredOverlayTabs(!1),
              a = Y.B.isVRGamepadUI,
              s = a,
              d = !a || Y.B.m_bShowLegacyBar;
            let u = [],
              h = [],
              v =
                null !== (e = y.G3.settings.get(p.FM)) && void 0 !== e ? e : 2;
            if (n.length > v) {
              const e = y.G3.settings.get(p.nf);
              (u = [
                null !== (t = n.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : n[0],
              ]),
                (h = n.filter((e) => !u.includes(e)));
            } else u = n;
            let g = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && g.push(e);
            });
            const _ = this.getActiveOverlayDockLocation(),
              b = (0, f.fT)(_),
              S = (0, f.sg)(_);
            let k = !1,
              w = this.getActiveOverlayKey();
            if (w) {
              let e = VRHTML.VROverlay.FindOverlay(w);
              k = !!e && VRHTML.VROverlay.GetFlag(e, i.Z9.EnableControlBar);
            }
            let M = 2,
              C = 2.5;
            const D = y.G3.settings.get("/settings/dashboard/theaterPosition");
            D == z.Near
              ? ((M *= 0.5), (C *= 0.5))
              : D == z.Middle
              ? ((M *= 1), (C *= 1))
              : D == z.Far
              ? ((M *= 4), (C *= 2.5))
              : D == z.Standard && ((M *= 1), (C *= 1));
            const I =
                null ===
                  (r = y.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r,
              T = I ? p.ml : null,
              V = { y: k ? -0.9 : -1.03375, z: 0.05 },
              E = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              P = W.k_nControlBarPitch;
            let x = I ? 1 : 0;
            const O =
                null !==
                  (o = y.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== o &&
                o,
              L = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: O && this.state.bPlacementModeActive,
                },
                l.createElement(
                  i.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    X.Z,
                    null,
                    !1,
                    l.createElement(i.wx, { id: T, translation: { z: 1.8 } }),
                    l.createElement(
                      i.wx,
                      {
                        translation: {
                          x: 0,
                          y: W.getDashboardVerticalPosition(),
                          z: 1 * -W.getDashboardDistance(),
                        },
                        rotation: { x: 0 },
                        scale: W.getDashboardScale(),
                      },
                      l.createElement(
                        i.wx,
                        { parent_id: L },
                        a
                          ? this.renderVRGamepadUIHeader(T)
                          : this.renderLegacyHeader(T),
                      ),
                      l.createElement(
                        i.wx,
                        {
                          id: "active_overlay_transform",
                          translation: V,
                          ref: this.m_refOverlayTransform,
                        },
                        !b && S && this.renderActiveOverlay(),
                        !b &&
                          !S &&
                          l.createElement(
                            R.lL,
                            {
                              additionalClassNames: k ? "WithControlBar" : "",
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
                      k && S && this.renderOverlayControlBar(),
                      !1,
                      l.createElement(
                        i.wx,
                        { parent_id: s ? p.dG : p.f$ },
                        l.createElement(Z.J, {
                          curvature_origin_id: T,
                          tint: Y.B.ControlBarTint,
                          onStartMove: this.onGrabStart,
                          onEndMove: this.onGrabEnd,
                        }),
                      ),
                      l.createElement(
                        i.wx,
                        { translation: E, id: p.Qg },
                        l.createElement(i.wx, {
                          id: p.f$,
                          translation: { y: 0.08, z: -0.12 },
                        }),
                        l.createElement(
                          i.wx,
                          {
                            rotation: { x: P },
                            curvature_pitch: P,
                            translation: s ? { y: -0.65, z: 0.2 } : {},
                          },
                          this.renderLegacyControlBar(u, h, d),
                          !1,
                        ),
                        s &&
                          l.createElement(
                            i.wx,
                            { rotation: { x: P }, curvature_pitch: P },
                            this.renderVRGamepadUIBar(T),
                          ),
                        l.createElement(
                          i.wx,
                          { rotation: { x: P }, curvature_pitch: P },
                          l.createElement(
                            X.Z,
                            null,
                            this.state.bKeyboardVisible &&
                              l.createElement(re, {
                                debugHostLocation: "Dashboard",
                                onGrabStart: this.onGrabStart,
                                onGrabEnd: this.onGrabEnd,
                              }),
                          ),
                        ),
                        this.state.eShowPopoverMenu == K.Power &&
                          l.createElement(
                            i.wx,
                            {
                              translation: { x: -0.4, y: 0.15, z: 0.05 },
                              rotation: { y: 19 * x },
                            },
                            l.createElement(
                              i.s_,
                              {
                                curvature_origin_id: T,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: i.Ic.BottomRight,
                                debug_name: "Power Menu",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPowerMenu(),
                            ),
                          ),
                        this.state.eShowPopoverMenu == K.ExternalOverlays &&
                          l.createElement(
                            i.wx,
                            {
                              translation: { x: 0.2, y: 0.15, z: 0.05 },
                              rotation: { y: 6 * x },
                            },
                            l.createElement(
                              i.s_,
                              {
                                curvature_origin_id: T,
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
                                  h.map((e) =>
                                    l.createElement(R.dy, {
                                      key: e.mountable_id,
                                      imageUrl: this.getDashboardIconUri(e),
                                      label: e.tab_name,
                                      onClick: () => {
                                        this.switchToOverlayInternal(
                                          e.summon_overlay_key,
                                        ),
                                          this.showPopoverMenu(K.None);
                                      },
                                    }),
                                  ),
                                  " ",
                                ),
                              ),
                            ),
                          ),
                        this.state.eShowPopoverMenu == K.Windows &&
                          l.createElement(
                            i.wx,
                            {
                              translation: { x: 1.25, y: -0.1, z: 0.35 },
                              rotation: { y: -16 * x },
                            },
                            l.createElement(
                              i.s_,
                              {
                                curvature_origin_id: T,
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
                                  g.map((e) =>
                                    l.createElement(R.dy, {
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
                                          this.showPopoverMenu(K.None);
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
            );
          }
        });
        (ae.k_sDashboardMailboxName = "systemui_dashboard"),
          (ae.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (ae.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (ae.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (ae.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (ae.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (ae.k_sWindowViewCreatedMessage = "window_view_created"),
          (ae.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (ae.k_sUpdateWindowListMessage = "update_window_list"),
          (ae.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (ae.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (ae.k_nControlBarWidthMeters = 2.667),
          (ae.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (ae.k_nControlBarPitch = -40),
          (ae.s_dashboardUserDistance = void 0),
          (ae.s_dashboardUserScale = void 0),
          (0, n.gn)(
            [a.ak],
            ae.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, n.gn)([a.ak], ae.prototype, "onRoomViewChanged", null),
          (0, n.gn)([a.ak], ae.prototype, "onLinkStreamActiveEvents", null),
          (0, n.gn)([a.ak], ae.prototype, "onKeyboardVisibilityChanged", null),
          (0, n.gn)([a.ak], ae.prototype, "onGrabStart", null),
          (0, n.gn)([a.ak], ae.prototype, "onGrabEnd", null),
          (0, n.gn)(
            [a.ak],
            ae.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, n.gn)([a.ak], ae.prototype, "onDashboardOverlayCreated", null),
          (0, n.gn)([a.ak], ae.prototype, "onDashboardOverlayDestroyed", null),
          (0, n.gn)([a.ak], ae.prototype, "onUpdateDashboardTabs", null),
          (0, n.gn)([a.ak], ae.prototype, "onWindowViewCreated", null),
          (0, n.gn)([a.ak], ae.prototype, "onWindowViewDestroyed", null),
          (0, n.gn)([a.ak], ae.prototype, "onUpdateWindowList", null),
          (0, n.gn)([a.ak], ae.prototype, "onUpdateDebugInfo", null),
          (0, n.gn)([a.ak], ae.prototype, "onDockOverlay", null),
          (0, n.gn)([a.ak], ae.prototype, "onShowDashboardRequested", null),
          (0, n.gn)([a.ak], ae.prototype, "onHideTheaterMode", null),
          (0, n.gn)([a.ak], ae.prototype, "onHideDashboardRequested", null),
          (0, n.gn)([a.ak], ae.prototype, "show", null),
          (0, n.gn)([a.ak], ae.prototype, "hide", null),
          (0, n.gn)([a.ak], ae.prototype, "setPlacementModeActive", null),
          (0, n.gn)([a.ak], ae.prototype, "onToggleRoomView", null),
          (0, n.gn)([a.ak], ae.prototype, "onQuickLaunchButtonClick", null),
          (0, n.gn)([a.ak], ae.prototype, "onRecenterClick", null),
          (0, n.gn)([a.ak], ae.prototype, "onImmersiveRoomSetupClick", null),
          (0, n.gn)([a.ak], ae.prototype, "onToggleGamepadFocus", null),
          (0, n.gn)([a.ak], ae.prototype, "renderPowerMenu", null),
          (0, n.gn)([a.ak], ae.prototype, "startPopoverMenuTimeout", null),
          (0, n.gn)([a.ak], ae.prototype, "clearPopoverMenuTimeout", null),
          (0, n.gn)([a.ak], ae.prototype, "showPopoverMenu", null),
          (0, n.gn)([a.ak], ae.prototype, "popoverMenuMouseLeave", null),
          (0, n.gn)([a.ak], ae.prototype, "popoverMenuMouseUp", null),
          (0, n.gn)([a.ak], ae.prototype, "hasDashboardOverlay", null),
          (0, n.gn)(
            [a.ak],
            ae.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, n.gn)([a.ak], ae.prototype, "isDesktopTrayActive", null),
          (0, n.gn)([a.ak], ae.prototype, "isVolumeTrayActive", null),
          (0, n.gn)([a.ak], ae.prototype, "isSteamOverlayActive", null),
          (0, n.gn)([a.ak], ae.prototype, "isDesktopOverlayActive", null),
          (0, n.gn)([a.ak], ae.prototype, "handlePeerButton", null),
          (0, n.gn)([a.ak], ae.prototype, "ToggleIncognitoMode", null),
          (0, n.gn)([a.ak], ae.prototype, "ToggleVideoStream", null),
          (0, n.gn)([a.ak], ae.prototype, "getRenderModelForShape", null),
          (0, n.gn)([a.ak], ae.prototype, "isDesktopViewVisible", null),
          (0, n.gn)([a.ak], ae.prototype, "onGameLaunched", null),
          (0, n.gn)([a.ak], ae.prototype, "onAddPortal", null),
          (0, n.gn)([a.ak], ae.prototype, "onRemovePortal", null),
          (0, n.gn)([a.ak], ae.prototype, "onActiveOverlayScaleChange", null),
          (0, n.gn)([a.ak], ae.prototype, "onActiveOverlayClosed", null),
          (0, n.gn)([a.ak], ae.prototype, "onSteamButtonPressed", null),
          (0, n.gn)([s.LO], ae, "s_dashboardUserDistance", void 0),
          (0, n.gn)([s.LO], ae, "s_dashboardUserScale", void 0),
          (ae = W = (0, n.gn)([b.Pi], ae));
        const se = [
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              $.mw.k_EVRDashboardTabIcon_Steam
            );
          },
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              $.mw.k_EVRDashboardTabIcon_RunningGame
            );
          },
          (e) => null == e.icon(),
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              $.mw.k_EVRDashboardTabIcon_DesktopDisplay
            );
          },
        ];
        function le(e, t) {
          let r = -1,
            o = -1;
          for (let n = 0; n < se.length && r < 0 && o < 0; n++)
            se[n](e) && (r = n), se[n](t) && (o = n);
          return (
            r < 0 && (r = se.length),
            o < 0 && (o = se.length),
            r == o ? e.tab_id() - t.tab_id() : r - o
          );
        }
        function de(e, t) {
          var r, o, n, i, a, s;
          let l;
          const d =
              null !== (r = null == e ? void 0 : e.product_name) && void 0 !== r
                ? r
                : "",
            c =
              null !== (o = null == t ? void 0 : t.product_name) && void 0 !== o
                ? o
                : "";
          if (((l = d.localeCompare(c)), 0 != l)) return l;
          const u =
              null !== (n = null == e ? void 0 : e.title) && void 0 !== n
                ? n
                : "",
            h =
              null !== (i = null == t ? void 0 : t.title) && void 0 !== i
                ? i
                : "";
          if (((l = u.localeCompare(h)), 0 != l)) return l;
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
      8178: (e, t, r) => {
        "use strict";
        r.d(t, {
          Sm: () => T,
          RA: () => S,
          sg: () => C,
          fT: () => D,
          Y3: () => f,
        });
        var o = r(655),
          n = r(1569),
          i = r(7056),
          a = r(7062),
          s = r(7294),
          l = r(424),
          d = r(4979),
          c = r(7176),
          u = r(1628),
          h = r(9626),
          p = r(421),
          m = r(6063),
          v = r(5177),
          g = r(8980),
          _ = r(7373);
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
        (0, o.gn)([i.ZP], y.prototype, "startMove", null),
          (0, o.gn)([i.ZP], y.prototype, "endMove", null),
          (y = (0, o.gn)([a.Pi], y));
        var b,
          S,
          f,
          R = r(792),
          k = r(9347),
          w = r(6459);
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
        function C(e) {
          return e == S.Dashboard || e == S.Theater;
        }
        function D(e) {
          return e == S.World;
        }
        function I(e) {
          switch (e) {
            case S.LeftHand:
              return "/user/hand/left";
            case S.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let T = (b = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, n.Oq)(),
                sParent: I(this.props.dockLocation),
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
                  sParent: I(this.props.dockLocation),
                  xfTransform: (0, n.Oq)(),
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
                : 1) * _.g.getDashboardScale()
            );
          }
          getCurrentOverlaySize() {
            var e;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let r = { x: 0, y: 0 };
            try {
              r = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let o =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              n = (o * r.y) / r.x;
            if (
              ((this.props.sOverlayKey.startsWith(c.r4) ||
                this.props.sOverlayKey.startsWith(c.Vq)) &&
                ((n = k.N.k_nDesktopPanelBaseHeight * this.getDashboardScale()),
                (o = (n * r.x) / r.y)),
              this.m_fLastOverlayHeight && this.m_fLastOverlayHeight != n)
            ) {
              const e =
                (this.state.fOverlayScale * this.m_fLastOverlayHeight) / n;
              this.setState({ fOverlayScale: e });
            }
            return (this.m_fLastOverlayHeight = n), { width: o, height: n };
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case S.Dashboard:
              case S.LeftHand:
              case S.RightHand:
                return 0.25;
              case S.World:
                const e = h.B.m_mapOverlayState.get(this.props.sOverlayKey);
                return e ? e.fScale : 1;
              case S.Theater:
                const t = 2.35,
                  r = this.getCurrentOverlaySize();
                return null === r || 0 == r.height ? t : t / r.height;
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
            let r = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              n.Kg.TrackedControllerRole_RightHand,
            ) != n.Kf &&
              (r = VRHTML.GetPose("/user/hand/right", n.zq.Standing));
            let o = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                r && o.push({ pose: r, location: S.RightHand });
                break;
              case "/user/hand/right":
                t && o.push({ pose: t, location: S.LeftHand });
                break;
              case "/user/head":
                t && o.push({ pose: t, location: S.LeftHand }),
                  r && o.push({ pose: r, location: S.RightHand });
            }
            if (0 == o.length)
              return void setTimeout(this.computeDestination, b.sfMovePulseMS);
            let i = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            o.forEach((e) => {
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
              r = VRHTML.GetPose(this.m_nMoveDeviceIndex, n.zq.Standing);
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
            let o = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              i = VRHTML.ChangeBasis(o, r.xfDeviceToAbsoluteTracking);
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
            let r,
              o = {
                xfDeviceToAbsoluteTracking: (0, n.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: n.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case S.LeftHand:
                r = e;
                break;
              case S.RightHand:
                r = t;
                break;
              default:
                r = o;
            }
            let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, n.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                i.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              s = VRHTML.ChangeBasis(a, r.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: s,
              sParent: I(this.state.destination),
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
            var e, t, r;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let o = this.getCurrentOverlaySize();
            if (null === o) return null;
            (o.width *= this.state.fOverlayScale),
              (o.height *= this.state.fOverlayScale);
            let i,
              a = !this.props.bDashboardShown,
              l = !1,
              v = !1;
            if (this.props.dockLocation == S.Theater) {
              if (this.props.bHasSceneApp && R.C.m_bShowFloor) return null;
              a = !0;
              const t =
                null !==
                  (e = u.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e;
              (l = h.B.isDarkMode && t),
                (v = this.props.bCaptureVideo),
                h.B.eTheaterScreen == f.Curved && (i = M);
            }
            const g = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              _ =
                g && VRHTML.VROverlay.GetFlag(g, n.Z9.EnableControlBarKeyboard),
              k =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(c.r4),
              C = { x: 0, y: -0.15, z: 0.1 };
            if (a) {
              const e =
                  this.props.dockLocation == S.Theater ||
                  (null !==
                    (t = u.G3.settings.get(
                      "/settings/dashboard/inputCaptureEnabled",
                    )) &&
                    void 0 !== t &&
                    t),
                a =
                  null !==
                    (r = u.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== r
                    ? r
                    : 0.5,
                d = 0.5 * Math.pow(a, 2.2);
              let v = -0.1,
                g = 4,
                b = 1,
                R = 0.15,
                D = (o.width, o.height);
              const I = (0, n.iN)(c.Az, "Floating-Panel"),
                T = (e) =>
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
                      scale: 1.5 * b,
                      tint: h.B.ControlBarTint,
                    }),
                  );
              return s.createElement(
                n.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                s.createElement(
                  p.Z,
                  null,
                  s.createElement(n.wx, { id: M, translation: { z: g } }),
                  s.createElement(
                    n.s_,
                    {
                      id: "Floating-Panel",
                      overlay_key: this.props.sOverlayKey,
                      height: D,
                      width: void 0,
                      interactive: !0,
                      allow_input_capture: e,
                      undocked: !0,
                      origin:
                        this.props.dockLocation == S.Theater
                          ? { x: 0, y: -0.75 }
                          : n.Ic.BottomCenter,
                      curvature_origin_id: i,
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
                            height: R,
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
                              k &&
                                s.createElement(w.zN, {
                                  key: "multitask",
                                  iconUrl:
                                    "/dashboard/images/icons/icon_multitasking_view.png",
                                  tooltipTranslation: C,
                                  onClick: this.props.ShowMultitaskingView,
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
                                iconUrl: h.B.isDarkMode
                                  ? "/dashboard/images/icons/svr_lights_on.svg"
                                  : "/dashboard/images/icons/svr_lights_off.svg",
                                iconIsInverted: !1,
                                onClick: () =>
                                  (h.B.m_bDarkMode = !h.B.isDarkMode),
                                additionalClassNames: "LargeIcon",
                              }),
                              s.createElement(w.zN, {
                                key: "curved",
                                iconUrl:
                                  h.B.eTheaterScreen == f.Curved
                                    ? "/dashboard/images/icons/svr_screen_curvature_off.svg"
                                    : "/dashboard/images/icons/svr_screen_curvature_on.svg",
                                iconIsInverted: !1,
                                onClick: () => h.B.ToggleTheaterCurvature(),
                                additionalClassNames: "LargeIcon",
                              }),
                              s.createElement(w.zN, {
                                key: "dock",
                                iconUrl:
                                  "/dashboard/images/icons/icon_close_black.png",
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
                          { translation: { y: -R - 0.03, z: 0.03 } },
                          s.createElement(m.J, {
                            scale: b,
                            tint: h.B.ControlBarTint,
                            curvature_origin_id: i,
                          }),
                        ),
                      ),
                      s.createElement(T, {
                        parent_id: "Floating-Panel-BottomLeft",
                        x_offset: -0.03,
                      }),
                      s.createElement(T, {
                        parent_id: "Floating-Panel-BottomRight",
                        x_offset: 0.03,
                      }),
                    ),
                ),
              );
            }
            let D = b.sfOverlayTrayHeight * this.getDashboardScale(),
              I = b.sfOverlayScaleMin,
              T = b.sfOverlayScaleMax,
              V = [0.5, 1, 1.5];
            (this.props.dockLocation != S.LeftHand &&
              this.props.dockLocation != S.RightHand) ||
              ((D *= 0.4), (I = 0.1), (T = 1.5), (V = [0.25, 0.5, 1]));
            const E = o.height + D,
              P = Math.max(o.width, 0.175),
              x = E / 2 - D,
              O = h.B.isVRGamepadUI
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
                  translation: { y: x, z: -0.005 },
                  scale: { x: P, y: E, z: 0.008 },
                },
                s.createElement(
                  n.VW,
                  { color: O },
                  s.createElement(n.gQ, { solid: !0, source: "unit_cube" }),
                ),
              ),
              s.createElement(
                n.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: o.height,
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
                  height: D,
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
                      min: I,
                      max: T,
                      value: this.state.fOverlayScale,
                      valueStyleVariant: d.px.OnHandle,
                      onChange: this.onOverlayScaleChanged,
                      detents: V,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                    }),
                    k &&
                      s.createElement(w.zN, {
                        key: "multitask",
                        iconUrl:
                          "/dashboard/images/icons/icon_multitasking_view.png",
                        tooltipTranslation: C,
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
        (T.sfMaxDockDist = 0.4),
          (T.sfMovePulseMS = 100),
          (T.sfOverlayTrayHeight = 0.12),
          (T.sfOverlayScaleMin = 0.25),
          (T.sfOverlayScaleMax = 2),
          (0, o.gn)([i.ZP], T.prototype, "onOverlayScaleChanged", null),
          (0, o.gn)([i.ZP], T.prototype, "computeDestination", null),
          (0, o.gn)([i.ZP], T.prototype, "startMove", null),
          (0, o.gn)([i.ZP], T.prototype, "endMove", null),
          (T = b = (0, o.gn)([a.Pi], T));
      },
      1464: (e, t, r) => {
        "use strict";
        r.d(t, { a: () => u });
        var o = r(1569),
          n = r(7294),
          i = r(7062),
          a = r(9626),
          s = r(7176);
        function l(e) {
          const { children: t, invertParentPanelPitch: r, pitch: i } = e;
          return r || 0 != i
            ? n.createElement(
                o.wx,
                {
                  invert_parent_panel_pitch: null != r && r,
                  curvature_pitch: null != i ? i : 0,
                },
                t,
              )
            : n.createElement(n.Fragment, null, t);
        }
        function d(e) {
          const { children: t, offsetPixels: r } = e;
          if (null == r || (0 == r.x && 0 == r.y && 0 == r.z))
            return n.createElement(n.Fragment, null, t);
          const i = (0, o.mT)(r, a.B.m_fVRGamepadUI_MetersPerPixel);
          return n.createElement(o.wx, { translation: i }, t);
        }
        function c(e) {
          const { children: t, rotation: r } = e;
          return null == r || (0 == r.x && 0 == r.y && 0 == r.z)
            ? n.createElement(n.Fragment, null, t)
            : n.createElement(o.wx, { rotation: r }, t);
        }
        function u(e) {
          var t,
            r,
            i,
            u,
            h,
            p,
            m,
            v,
            g,
            _,
            y,
            b,
            S,
            f,
            R,
            k,
            w,
            M,
            C,
            D,
            I,
            T,
            V,
            E,
            P,
            x,
            O,
            L,
            B;
          const { popupRequest: H, reparent: A } = e,
            N = null == A || A,
            U = {
              x:
                null !==
                  (r =
                    null === (t = H.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== r
                  ? r
                  : 0,
              y:
                null !==
                  (u =
                    null === (i = H.origin_on_parent) || void 0 === i
                      ? void 0
                      : i.y) && void 0 !== u
                  ? u
                  : 0,
            },
            F = {
              x:
                null !==
                  (p =
                    null === (h = H.origin_on_popup) || void 0 === h
                      ? void 0
                      : h.x) && void 0 !== p
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
                  (k =
                    null === (R = H.clip_rect) || void 0 === R
                      ? void 0
                      : R.v_max) && void 0 !== k
                  ? k
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
                  (D =
                    null === (C = H.offset) || void 0 === C
                      ? void 0
                      : C.y_pixels) && void 0 !== D
                  ? D
                  : 0,
              z:
                null !==
                  (T =
                    null === (I = H.offset) || void 0 === I
                      ? void 0
                      : I.z_pixels) && void 0 !== T
                  ? T
                  : 0,
            },
            K = {
              x:
                null !==
                  (E =
                    null === (V = H.rotation) || void 0 === V
                      ? void 0
                      : V.pitch_degrees) && void 0 !== E
                  ? E
                  : 0,
              y:
                null !==
                  (x =
                    null === (P = H.rotation) || void 0 === P
                      ? void 0
                      : P.yaw_degrees) && void 0 !== x
                  ? x
                  : 0,
            },
            q = null === (O = H.inherit_parent_pitch) || void 0 === O || O,
            X = null === (L = H.inherit_parent_curvature) || void 0 === L || L,
            Z = null === (B = H.interactive) || void 0 === B || B,
            j = (function (e) {
              var t, r, o;
              const n =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                i =
                  null !==
                    (o =
                      null === (r = null == e ? void 0 : e.offset) ||
                      void 0 === r
                        ? void 0
                        : r.z_pixels) && void 0 !== o
                    ? o
                    : 0;
              return n == s.BZ && i >= 0 ? -0.5 : 0;
            })(H);
          n.useLayoutEffect(
            () => o.n0.Current().forceLayoutUpdate(),
            [G.u, G.v, W.u, W.v],
          );
          const Q = n.createElement(
            o.at,
            { key: H.dashboard_popup_request_id, location: U },
            n.createElement(
              l,
              { invertParentPanelPitch: !q },
              n.createElement(
                d,
                { offsetPixels: z },
                n.createElement(
                  c,
                  { rotation: K },
                  n.createElement(o.s_, {
                    debug_name: `VRGamepadUI-DashboardPopup-Panel-${H.dashboard_popup_request_id}`,
                    interactive: Z,
                    curvature: X ? "inherit-from-parent-panel" : void 0,
                    overlay_key: H.popup_overlay_key,
                    origin: F,
                    meters_per_pixel: a.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.03,
                    sort_depth_bias: j,
                    uv_min: G,
                    uv_max: W,
                  }),
                ),
              ),
            ),
          );
          return N
            ? n.createElement(
                o.Sb,
                {
                  parent_overlay_key: H.parent_overlay_key,
                  key: H.dashboard_popup_request_id,
                },
                Q,
              )
            : Q;
        }
        (0, i.Pi)((e) => {
          const t = a.B.GetActiveDashboardPopups();
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
      6459: (e, t, r) => {
        "use strict";
        r.d(t, {
          B8: () => N,
          CS: () => j,
          D6: () => X,
          Eu: () => I,
          IO: () => H,
          M3: () => P,
          NT: () => U,
          Rk: () => G,
          Yd: () => T,
          dw: () => A,
          dy: () => x,
          j4: () => W,
          j6: () => F,
          lL: () => V,
          z: () => z,
          zN: () => Z,
          zk: () => B,
        });
        var o,
          n,
          i = r(655),
          a = r(1569),
          s = r(7056),
          l = r(2188),
          d = r(7062),
          c = r(7294),
          u = r(5177),
          h = r(9755),
          p = r(7475),
          m = r(4979),
          v = r(3107),
          g = r(2749),
          _ = r(7176),
          y = r(3568),
          b = r(7008),
          S = r(8980),
          f = r(9897),
          R = r(1628),
          k = r(8322),
          w = r.n(k),
          M = r(7726),
          C = r(7471),
          D = r(9626);
        const I = new l.vP();
        function T(e) {
          const { summonOverlayKey: t } = e,
            { ids: r, anchors: o } = c.useMemo(() => {
              const e = "DashboardPanel_" + t,
                r = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                };
              return {
                ids: r,
                anchors: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(a.at, {
                    id: r.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  c.createElement(a.at, {
                    id: r.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  c.createElement(a.at, {
                    id: r.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  c.createElement(a.at, {
                    id: r.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  }),
                ),
              };
            }, [t]);
          return (
            c.useEffect(
              () => (
                I.set(t, r),
                () => {
                  I.get(t) === r && I.delete(t);
                }
              ),
              [t, r],
            ),
            t ? o : null
          );
        }
        const V = (0, d.Pi)(function (e) {
            return c.createElement(
              E,
              Object.assign({}, e, { VRGamepadUI: D.B.isVRGamepadUI }),
            );
          }),
          E = (e) => {
            var t, r, o;
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
                null !== (r = e.foregroundReflectMultiplier) && void 0 !== r
                  ? r
                  : 1,
              m =
                null ===
                  (o = R.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o
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
                c.createElement(T, { summonOverlayKey: e.summonOverlayKey }),
                c.createElement(
                  h.vz,
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
                    h.sC,
                    { ref: s },
                    c.createElement(
                      u.q,
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
        class P extends c.Component {
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
              r = null;
            const o = t.toLowerCase(),
              n = Math.max(o.lastIndexOf("am"), o.lastIndexOf("pm"));
            return (
              n >= 0 && ((r = t.substring(n)), (t = t.substring(0, n - 1))),
              c.createElement(
                "div",
                { className: "ClockContainer" },
                c.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  c.createElement("span", { className: "Suffix" }, r),
                ),
              )
            );
          }
        }
        function x(e) {
          return c.createElement(
            u.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, i.gn)([s.ak], P.prototype, "updateTime", null);
        let O = (o = class extends c.Component {
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
              r = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              o =
                null ===
                  (e = R.G3.settings.get(
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
                  { translation: r },
                  c.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: _.WR,
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
        (O.s_CurrentlyShownTooltip = null),
          (0, i.gn)([l.Fl], O.prototype, "isShowingTooltip", null),
          (0, i.gn)([l.aD.bound], O.prototype, "show", null),
          (0, i.gn)([l.aD.bound], O.prototype, "hide", null),
          (0, i.gn)([l.LO], O, "s_CurrentlyShownTooltip", void 0),
          (O = o = (0, i.gn)([d.Pi], O));
        class L extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !L.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  L.k_rsThumbnailHashesToInvert.indexOf(w().hash(e)) >= 0 &&
                  (t = !0),
                L.s_mapShouldInvertThumbnail.set(e, t);
            }
            return L.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              r = L.ShouldInvertThumbnail(this.props.src);
            return c.createElement(
              "div",
              { className: "Icon" },
              t &&
                c.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              c.createElement("img", {
                className: (0, S.LJ)(["BlackToWhite", r]),
                src: this.props.src,
              }),
            );
          }
        }
        var B, H;
        (L.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (L.s_mapShouldInvertThumbnail = new Map()),
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
            return c.createElement(
              u.z,
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
              c.createElement(O, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(L, { src: this.props.imageUrl }),
            );
          }
        };
        (0, i.gn)([s.ak], N.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], N.prototype, "onMouseLeave", null),
          (N = (0, i.gn)([d.Pi], N));
        const U = (e) =>
          c.createElement(
            A,
            { style: e.style },
            c.createElement(N, Object.assign({}, e)),
          );
        class F extends c.Component {
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
              r = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (r = this.props.deviceIndex),
              r != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = r)),
              r != a.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  r,
                  a.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  r,
                  a.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  r,
                  a.Uk.DeviceIsCharging_Bool,
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + F.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - F.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                r,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let o = M.X.GetBatteryIcon(
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
          onDeviceEvent(e, t, r) {
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
        (F.kBatteryLevelHysteresis = 0.02),
          (0, i.gn)([s.ak], F.prototype, "updateControllerStatus", null),
          (0, i.gn)([s.ak], F.prototype, "onBatteryStateChanged", null),
          (0, i.gn)([s.ak], F.prototype, "onDeviceRoleChanged", null),
          (0, i.gn)([s.ak], F.prototype, "onDeviceEvent", null),
          c.Component;
        const G = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && c.createElement(L, { src: e.iconUrl, shadow: !0 }),
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
            var e, t, r;
            const o = this.props.position,
              n = Math.asin(o) / Math.PI,
              i = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: o, y: -1 } },
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
                              null !== (r = this.props.curvatureOriginId) &&
                              void 0 !== r
                                ? r
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
              R.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && R.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!R.G3.settings.get(
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
            return c.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                c.createElement(O, {
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
            var t, r, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (o = (r = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(r, e);
          }
          onMouseLeave(e) {
            var t, r, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (o = (r = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(r, e);
          }
          render() {
            return c.createElement(
              u.z,
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
                c.createElement(O, {
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
            var t, r;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              null === (r = (t = this.props).onShowTray) ||
                void 0 === r ||
                r.call(t);
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
            var e, t, r, o;
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
                (null === (r = (t = this.props).onHideTray) ||
                  void 0 === r ||
                  r.call(t)),
              null === (o = this.slider) ||
                void 0 === o ||
                o.stopExternalSliding();
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
        const Z = (e) => {
          var t;
          const r = c.useRef();
          return c.createElement(
            u.z,
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
                null === (t = r.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = r.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              c.createElement(O, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: r,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: (0, C.Z)(
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
          var t, r;
          const o = (0, S.aB)(),
            n =
              null !== (t = null == o ? void 0 : o.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == o.overlayKey,
            i = c.useRef(!1),
            s =
              null === (r = e.showTooltip) || void 0 === r || r
                ? n
                  ? (0, y.Xx)("#HideKeyboardTooltip")
                  : (0, y.Xx)("#ShowKeyboardTooltip")
                : void 0;
          return c.createElement(
            Z,
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
      9347: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => y, e: () => _ });
        var o,
          n,
          i = r(655),
          a = r(1569),
          s = r(7056),
          l = r(2477),
          d = r(2188),
          c = r(7062),
          u = r(7294),
          h = r(7475),
          p = r(7176),
          m = r(3568),
          v = r(1628),
          g = r(6459);
        let _ = (o = class extends u.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = u.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(o.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var r, o;
            null === (r = this.m_refWindowScrollPanel.current) ||
              void 0 === r ||
              r.scrollTo({
                left:
                  null === (o = this.m_refWindowScrollPanel.current) ||
                  void 0 === o
                    ? void 0
                    : o.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, r, o;
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
            return u.createElement(
              g.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              n &&
                u.createElement(
                  h.P,
                  {
                    scrollDirection: h.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  u.createElement(
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
                          return u.createElement(g.zN, {
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
                      null === (o = this.state.desktopView) || void 0 === o
                        ? void 0
                        : o.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, r, o;
                      return u.createElement(g.zN, {
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
                              null === (r = this.state.desktopView) ||
                                void 0 === r
                                ? void 0
                                : r.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === o
                            ? void 0
                            : o.title,
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
                u.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  u.createElement(g.zN, {
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
          (_ = o = (0, i.gn)([c.Pi], _));
        let y = (n = class extends u.Component {
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
                  var t, r;
                  const o =
                    null !==
                      (r =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== r
                      ? r
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == o)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(p.gB)
                      );
                  const n = { type: "request_spawn_window_view", hwnd: o };
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
              (e = v.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > r.length &&
              v.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: r });
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
            return u.createElement(
              u.Fragment,
              null,
              t &&
                u.createElement(g.zN, {
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
                ? u.createElement(a.sl, { mountedId: (0, a.iN)(p.GN, p.Xl) })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? u.createElement(
                      g.lL,
                      { visible: !0, summonOverlayKey: p.gB },
                      u.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        u.createElement(
                          "h2",
                          null,
                          (0, m.Xx)("#NoDesktopFound"),
                        ),
                      ),
                    )
                  : -1 == this.currentDesktopIndex
                  ? u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(
                        a.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height: n.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        u.createElement(g.Yd, { summonOverlayKey: p.gB }),
                        u.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            p.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor",
                          ),
                        }),
                      ),
                    )
                  : u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(
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
                        u.createElement(g.Yd, { summonOverlayKey: p.gB }),
                        u.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            p.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor",
                          ),
                        }),
                      ),
                    )
                : u.createElement(
                    g.lL,
                    { visible: !0, summonOverlayKey: p.gB },
                    u.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      u.createElement(
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
      6063: (e, t, r) => {
        "use strict";
        r.d(t, { J: () => h });
        var o = r(655),
          n = r(7294),
          i = r(7056),
          a = r(1569),
          s = r(7062),
          l = r(5177),
          d = r(7373),
          c = r(421),
          u = r(8980);
        let h = class extends n.Component {
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
            var r;
            e.bVisible != this.props.bVisible &&
              (null === (r = this.props.bVisible) ||
                void 0 === r ||
                r ||
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
              this.context.setState({ sParent: e }),
                this.setState({ bActive: !0 }),
                window.addEventListener("mouseup", this.endMove),
                this.props.onStartMove && this.props.onStartMove();
            }
          }
          endMove() {
            this.context.setState({ sParent: "", nHandleSGID: 0 }),
              this.setState({ bActive: !1 }),
              window.removeEventListener("mouseup", this.endMove),
              this.props.onEndMove && this.props.onEndMove();
          }
          render() {
            var e, t;
            if (null == this.state.xfTransform) return null;
            const r = null === (e = this.props.bVisible) || void 0 === e || e,
              o = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
            return (
              r &&
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
                        width: 0.25 * d.g.k_nControlBarWidthMeters * o,
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
                          className: (0, u.LJ)("GrabHandleBar", [
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
          (0, o.gn)([i.ZP], h.prototype, "startMove", null),
          (0, o.gn)([i.ZP], h.prototype, "endMove", null),
          (h = (0, o.gn)([s.Pi], h));
      },
      421: (e, t, r) => {
        "use strict";
        r.d(t, { E: () => s, Z: () => l });
        var o = r(655),
          n = r(1569),
          i = r(7062),
          a = r(7294);
        const s = a.createContext(void 0);
        let l = class extends a.Component {
          constructor(e) {
            super(e), (this.state = { xfTransform: (0, n.Oq)(), sParent: "" });
          }
          render() {
            return a.createElement(
              n.sO,
              {
                sParentPath: this.state.sParent,
                xfCurrent: this.state.xfTransform,
                id: this.props.id,
              },
              a.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, o.gn)([i.Pi], l);
      },
      16: (e, t, r) => {
        "use strict";
        r.d(t, { BB: () => h, KU: () => p });
        var o,
          n = r(655),
          i = r(7294),
          a = r(7056),
          s = r(1569),
          l = r(3568),
          d = r(7062),
          c = r(8980),
          u = r(1628);
        const h = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (o = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(h).then(() => {
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
              u.G3.settings.get(
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
            return i.createElement(
              s.s_,
              {
                width: void 0,
                height: o.kPanelHeight,
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
                  style: { width: o.kPixelWidth },
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
            let r =
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
                  (t = u.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? i.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: o },
                  i.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: r },
                    this.renderPanel(),
                  ),
                )
              : i.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  i.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: r },
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
          (m = o = (0, n.gn)([d.Pi], m));
      },
      1283: (e, t, r) => {
        "use strict";
        r.d(t, { s: () => g });
        var o = r(655),
          n = r(7294),
          i = r(7062),
          a = r(7056),
          s = r(3568),
          l = r(5211),
          d = r(4285),
          c = r(2188),
          u = r(9809),
          h = r(5177),
          p = r(8980),
          m = r(8242);
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
              ].map((e) => ({ value: e, sLabel: (0, s.Xx)("#" + e) })));
            const t = this.trackerConfig.device_path_string;
            let r = t;
            const o = "vive_tracker";
            r.includes(o) &&
              (r = r.substring(r.indexOf(o) + o.length, r.length));
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
                  n.createElement("span", null, r),
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
        (0, o.gn)([c.Fl], v.prototype, "trackerConfig", null),
          (0, o.gn)([a.ak], v.prototype, "OnTrackerRoleChanged", null),
          (0, o.gn)([a.ak], v.prototype, "OnControllerRoleChanged", null),
          (0, o.gn)([a.ak], v.prototype, "BuzzTracker", null),
          (0, o.gn)([c.Fl], v.prototype, "deviceInfo", null),
          (v = (0, o.gn)([i.Pi], v));
        let g = class extends n.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => u.I.GetInputState(),
              2e3,
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
                  n.createElement(v, {
                    key: r,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              n.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        g = (0, o.gn)([i.Pi], g);
      },
      6698: (e, t, r) => {
        "use strict";
        r.d(t, { u: () => n });
        var o = r(7294);
        function n(e) {
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
      2477: (e, t, r) => {
        "use strict";
        r.d(t, { Q: () => s });
        var o = r(655),
          n = r(1569),
          i = r(328),
          a = r(4820);
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
            return (0, o.mG)(this, void 0, void 0, function* () {
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
            let r, o;
            try {
              r = a.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return i.n5.HeaderSerializationFailure;
            }
            try {
              o = t.serializeBase64String();
            } catch (e) {
              return i.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: r,
                payload: o,
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
      },
      9462: () => {},
    },
    r = {};
  function o(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var i = (r[e] = { id: e, exports: {} });
    return t[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, r, n, i) => {
      if (!r) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [r, n, i] = e[c], s = !0, l = 0; l < r.length; l++)
            (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](r[l]))
              ? r.splice(l--, 1)
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
      e[c] = [r, n, i];
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
    (o.j = 863),
    (() => {
      var e = { 863: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var n,
            i,
            [a, s, l] = r,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) o.o(s, n) && (o.m[n] = s[n]);
            if (l) var c = l(o);
          }
          for (t && t(r); d < a.length; d++)
            (i = a[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(c);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (o.nc = void 0);
  var n = o.O(void 0, [968, 683], () => o(1983));
  n = o.O(n);
})();
//# sourceMappingURL=settings_desktop.js.map?v=ae556138bea9cc35238d
