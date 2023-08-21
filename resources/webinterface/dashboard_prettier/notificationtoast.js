/*! For license information please see notificationtoast.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      1569: (e, t, r) => {
        r.d(t, {
          Bl: () => _.Bl,
          Co: () => k,
          Dd: () => l.D,
          Fs: () => n.Fs,
          GC: () => f.GC,
          Ic: () => _.Ic,
          JR: () => n.JR,
          Kf: () => f.Kf,
          Kg: () => f.Kg,
          LL: () => f.LL,
          LY: () => n.LY,
          M9: () => n.M9,
          Nv: () => o.N,
          OK: () => h.OK,
          Op: () => f.Op,
          Oq: () => n.Oq,
          Pd: () => n.Pd,
          Pw: () => f.Pw,
          QZ: () => f.QZ,
          Qu: () => f.Qu,
          UU: () => n.UU,
          Uk: () => f.Uk,
          VW: () => s.V,
          Vv: () => _.Vv,
          XX: () => f.XX,
          Y9: () => a.Y,
          Z9: () => f.Z9,
          ZP: () => f.ZP,
          Zj: () => n.Zj,
          a0: () => f.a0,
          at: () => v.a,
          bt: () => m.b,
          dq: () => n.dq,
          eK: () => y.e,
          eQ: () => n.eQ,
          gQ: () => p.g,
          hz: () => i.h,
          iN: () => h.iN,
          kH: () => S.k,
          l0: () => f.l0,
          lx: () => f.lx,
          n0: () => u.n,
          q9: () => n.q9,
          qA: () => f.qA,
          qI: () => h.qI,
          sO: () => b.s,
          s_: () => _.s_,
          sl: () => d.s,
          tS: () => n.tS,
          vS: () => f.vS,
          wU: () => f.wU,
          wx: () => c.w,
          x1: () => g.x,
          xY: () => f.xY,
          xj: () => p.x,
          zA: () => f.zA,
          zq: () => f.zq,
        });
        var o = r(4671),
          n = r(4727),
          i = r(7500),
          a = r(2071),
          s = r(6626),
          l = r(751),
          d = r(8116),
          c = r(390),
          h = (r(8257), r(233)),
          u = (r(7313), r(6765)),
          p = (r(491), r(8811)),
          m = r(5157),
          g = r(5486),
          v = (r(5829), r(7973)),
          _ = r(2214),
          y = (r(5627), r(3841), r(2467), r(7996), r(1364), r(5146)),
          b = r(163),
          S = r(2109),
          f = r(5867);
        const k = VRHTML;
      },
      1364: (e, t, r) => {
        r(7294), r(7313);
      },
      7996: (e, t, r) => {
        var o = r(7294);
        r(5867), r(390), o.Component;
      },
      2071: (e, t, r) => {
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
        var o;
        r(7294),
          r(7313),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(o || (o = {}));
      },
      163: (e, t, r) => {
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
        r(7294), r(7313);
      },
      5486: (e, t, r) => {
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
        r(7294), r(7313);
      },
      5157: (e, t, r) => {
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
        r.d(t, {
          Bl: () => a,
          Ic: () => o,
          Lb: () => m,
          Vv: () => n,
          s_: () => g,
        });
        var o,
          n,
          i,
          a,
          s = r(655),
          l = r(7294),
          d = r(7313),
          c = r(6765),
          h = r(7056),
          u = r(233);
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
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name;
            if (
              t &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            if (
              void 0 === this.props.width &&
              void 0 === this.props.height &&
              void 0 === this.props.target_dpi_panel_id &&
              !t
            )
              throw new Error(
                "Panel requires either an explicit width, an explicit height, both an explicit width and height, a target_panel_dpi, or be a rendermodel panel.",
              );
            if (
              (void 0 !== this.props.width || void 0 !== this.props.height) &&
              void 0 !== this.props.target_dpi_panel_id
            )
              throw new Error(
                "Panel cannot have both an explicit width/height and target_panel_dpi.",
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
            let l = Object.assign({}, e),
              c = this.createSgNode(t),
              h = { x: 0, y: 0 };
            h =
              "object" == typeof this.props.origin
                ? (0, d.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const g = this.props.overlay_key,
              v = (0, u.Gv)();
            return (
              g && g.length > 0
                ? (c.properties.key = g)
                : v
                ? (c.properties.key = v)
                : (c.properties.overlay_handle = (0, u.Mb)()),
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
              (c.properties["target-width-anchor-id"] = (0, u.Hb)(
                this.props.target_width_anchor_id,
              )),
              (c.properties["target-dpi-panel-id"] = (0, u.Hb)(
                this.props.target_dpi_panel_id,
              )),
              (c.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (c.properties["subview-parent-panel-id"] = (0, u.Hb)(
                this.props.subview_parent_panel_id,
              )),
              (c.properties.curvature = this.props.curvature),
              (c.properties["curvature-origin-id"] = (0, u.Hb)(
                this.props.curvature_origin_id,
              )),
              (c.properties.interactive = this.props.interactive),
              (c.properties.scrollable = this.props.scrollable),
              (c.properties.modal = this.props.modal),
              (c.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
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
              (l.currentPanel = this),
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
        (g.s_bPanelsAreDirty = !1),
          (0, s.gn)([h.ZP], g.prototype, "onResizeObserved", null),
          (0, s.gn)([h.ZP], g.prototype, "onPanelMouseDown", null),
          (0, s.gn)([h.ZP], g.prototype, "onWindowMouseUp", null),
          (0, s.gn)([h.ZP], g.prototype, "buildNode", null);
      },
      7973: (e, t, r) => {
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
            if (!e.currentPanel)
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
                n = e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
              (o.properties["anchor-u"] = n.u),
                (o.properties["anchor-v"] = n.v);
            } else {
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
        r(7294), r(7313);
      },
      8811: (e, t, r) => {
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
      6765: (e, t, r) => {
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
        r.d(t, {
          D1: () => l,
          Kg: () => d,
          Mo: () => h,
          QE: () => i,
          Uq: () => a,
          kh: () => s,
          xs: () => c,
        });
        var o = r(7294),
          n = r(233);
        function i(e, t) {
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
        function d(e) {
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
        class h extends o.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = o.createRef()),
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
        h.s_NextSGID = 1;
      },
      233: (e, t, r) => {
        r.d(t, {
          Gv: () => R,
          Hb: () => C,
          Mb: () => u,
          OK: () => T,
          ac: () => h,
          iN: () => M,
          k7: () => E,
          mK: () => k,
          qI: () => D,
          sX: () => w,
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
          return C(d(e, t));
        }
        function h(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = C(t.id)),
            (r.properties.sgid = s(t, "sgid")),
            r
          );
        }
        function u() {
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
                  (n = h("transform", t)),
                    (n.properties.translation = i(t, "translation")),
                    (n.properties.rotation = i(t, "rotation")),
                    (n.properties.scale = i(t, "scale")),
                    (n.properties["curvature-pitch"] = a(t, "curvature-pitch")),
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
        function w(e) {
          y.push(e), E();
        }
        function D() {
          _ = !0;
        }
        function T(e) {
          var t, r;
          (r = e),
            (null == (t = f) || null == r
              ? t == r
              : t.color_mult == r.color_mult &&
                t.reflection_mult == r.reflection_mult &&
                t.roomview_mult.toString() == r.roomview_mult.toString() &&
                t.allow_skydome == r.allow_skydome &&
                t.allow_floornear == r.allow_floornear &&
                t.allow_floorfar == r.allow_floorfar) || ((f = e), E());
        }
        function E() {
          b ||
            (b = window.setTimeout(
              () =>
                (0, o.mG)(this, void 0, void 0, function* () {
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
                    (S = new n.N()),
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
              0,
            ));
        }
      },
      491: (e, t, r) => {
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
      6626: (e, t, r) => {
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
        r(7294), r(7313);
      },
      390: (e, t, r) => {
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
                (t = (0, a.UU)(
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
                "parent-path": this.props.parent_path,
                "parent-origin": o[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
      },
      4727: (e, t, r) => {
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
        function h(e) {
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
        function u(e) {
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
        function g(e, t) {
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
          Pd: () => u,
          UU: () => h,
          Zj: () => i,
          dq: () => g,
          eQ: () => a,
          mT: () => l,
          q9: () => n,
          tS: () => p,
        });
      },
      7500: (e, t, r) => {
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
              let r = "ws://localhost:27062";
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
            this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
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
          GC: () => C,
          Kf: () => d,
          Kg: () => R,
          LL: () => n,
          Op: () => s,
          Pw: () => S,
          QZ: () => i,
          Qu: () => E,
          Uk: () => g,
          XX: () => h,
          Z9: () => u,
          ZP: () => p,
          a0: () => w,
          l0: () => f,
          lx: () => M,
          qA: () => o,
          vS: () => D,
          wU: () => l,
          xY: () => y,
          zA: () => T,
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
          d = -1;
        var c, h, u, p, m, g, v, _, y, b, S, f, k, M, C, R, w, D, T, E;
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
        })(c || (c = {})),
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
            (e[(e.HomeMenu = 50)] = "HomeMenu"),
              (e[(e.QuickMenu = 51)] = "QuickMenu");
          })(p || (p = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(m || (m = {})),
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
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
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
          })(g || (g = {})),
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
          })(k || (k = {})),
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
          })(M || (M = {})),
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
          })(R || (R = {})),
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
          })(D || (D = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(E || (E = {}));
      },
      5928: (e, t, r) => {
        r.d(t, { L: () => f });
        var o,
          n = r(655),
          i = r(7294),
          a = r(7056),
          s = r(3568),
          l = r(1569),
          d = r(9809),
          c = r(5211),
          h = r(2893),
          u = r(7062),
          p = r(2188),
          m = r(9595),
          g = r(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(o || (o = {}));
        class v extends i.Component {
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
                h = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", h);
              let u = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
              t.setAttribute("points", u),
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
        (0, n.gn)([a.ak], v.prototype, "ComponentUpdated", null),
          (0, n.gn)([a.ak], v.prototype, "UpdateSVGPath", null);
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
                    i.createElement(h.Z, { onReflow: this.OnImageReflow }),
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
                    i.createElement(g.hu, {
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
      9671: (e, t, r) => {
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
      855: (e, t, r) => {
        var o = r(655),
          n = r(7294),
          i = r(3935),
          a = r(7056),
          s = r(1569),
          l = r(3568),
          d = r(1628);
        class c extends n.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new s.Nv()),
              (this.state = { title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              d.G3.Init(!1);
          }
          OnRenderToast(e) {
            let t = s.Co.VROverlayInternal.GetToastInfo(e.notification_id);
            this.setState({
              title: t.sTitle,
              header: t.sHeader || "",
              text: t.sText,
              image: t.sImageData,
            });
          }
          render() {
            return n.createElement(
              "div",
              { className: "VRNotificationRoot" },
              n.createElement(
                "div",
                { className: "VRNotificationApplicationName" },
                this.state.title,
              ),
              n.createElement(
                "div",
                { className: "VRNotificationFrame" },
                n.createElement("div", {
                  className: "VRToastImage",
                  style: {
                    backgroundImage: this.state.image
                      ? "url('" + this.state.image + "')"
                      : "url('/dashboard/images/icons/notification_steamcog.png')",
                  },
                }),
                n.createElement(
                  "div",
                  { className: "VRNotificationTextWrapper" },
                  n.createElement(
                    "div",
                    { className: "VRNotificationHeader" },
                    this.state.header,
                  ),
                  n.createElement(
                    "div",
                    { className: "VRNotificationText" },
                    this.state.text,
                  ),
                ),
              ),
            );
          }
        }
        (0, o.gn)([a.ak], c.prototype, "OnRenderToast", null),
          (0, l.CK)(
            [],
            null === s.Co || void 0 === s.Co
              ? void 0
              : s.Co.GetSteamVRLanguage(),
          )
            .then(() => {
              i.render(
                n.createElement(c, null),
                document.getElementById("root"),
              );
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
      7726: (e, t, r) => {
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
      1125: (e, t, r) => {
        r.d(t, { g: () => ye, _: () => me });
        var o,
          n,
          i = r(655),
          a = r(1569),
          s = r(7056),
          l = r(2188),
          d = r(7294),
          c = r(3081),
          h = r(5177),
          u = r(4979),
          p = r(3107),
          m = r(7176),
          g = r(3568),
          v = r(8495),
          _ = r(7008),
          y = r(9942),
          b = r(8583),
          S = r(1628),
          f = r(7062),
          k = r(7726),
          M = r(424);
        function C(e) {
          switch (e) {
            case n.LeftHand:
              return "/user/hand/left";
            case n.RightHand:
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
        })(n || (n = {}));
        let R = (o = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, a.Oq)(),
                sParent: C(this.props.dockLocation),
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
                  sParent: C(this.props.dockLocation),
                  xfTransform: (0, a.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation,
              );
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case n.Dashboard:
              case n.LeftHand:
              case n.RightHand:
                return 0.25;
              case n.World:
                return 0.5;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case n.LeftHand:
                case n.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, o.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case n.World: {
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
              case n.Dashboard:
              case n.LeftHand:
              case n.RightHand:
                this.setState({ xfTransform: e });
                break;
              case n.World:
                let t = 0;
                a.hz
                  .getInstance()
                  .requestSGTransform(
                    "system.systemui::active_overlay_transform",
                    t,
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
              a.Kg.TrackedControllerRole_LeftHand,
            ) != a.Kf && (t = VRHTML.GetPose("/user/hand/left", a.zq.Standing));
            let r = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.Kg.TrackedControllerRole_RightHand,
            ) != a.Kf &&
              (r = VRHTML.GetPose("/user/hand/right", a.zq.Standing));
            let i = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                r && i.push({ pose: r, location: n.RightHand });
                break;
              case "/user/hand/right":
                t && i.push({ pose: t, location: n.LeftHand });
                break;
              case "/user/head":
                t && i.push({ pose: t, location: n.LeftHand }),
                  r && i.push({ pose: r, location: n.RightHand });
            }
            if (0 == i.length)
              return void setTimeout(this.computeDestination, o.sfMovePulseMS);
            let s = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            i.forEach((e) => {
              let t = VRHTML.ChangeBasis(s, e.pose.xfDeviceToAbsoluteTracking);
              (0, a.LY)(t.translation) > o.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (M.LJ.Instance.triggerHaptic(M.Kf.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: n.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == n.World &&
                      this.state.destination == n.World)) &&
                  (M.LJ.Instance.triggerHaptic(M.Kf.SlidingEdge),
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
                "Starting to move " + this.props.sOverlayKey + "...\n",
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == a.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex,
              );
            let e,
              t,
              r = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing);
            switch (this.props.dockLocation) {
              case n.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    a.Kg.TrackedControllerRole_LeftHand,
                  ) == a.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", a.zq.Standing);
                break;
              case n.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    a.Kg.TrackedControllerRole_RightHand,
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
                this.state.xfTransform,
              ),
              i = VRHTML.ChangeBasis(o, r.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: i,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == n.World,
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
              this.state.destination == n.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.Kg.TrackedControllerRole_LeftHand,
                ) == a.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", a.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == n.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.Kg.TrackedControllerRole_RightHand,
                ) == a.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", a.zq.Standing);
            }
            let r,
              o = {
                xfDeviceToAbsoluteTracking: (0, a.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: a.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case n.LeftHand:
                r = e;
                break;
              case n.RightHand:
                r = t;
                break;
              default:
                r = o;
            }
            let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing),
              s = VRHTML.MultiplyTransforms(
                i.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(s, r.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: C(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                l,
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
              s = (i * r.y) / r.x;
            if (!this.props.bVisible)
              return d.createElement(
                a.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                d.createElement(
                  a.s_,
                  {
                    overlay_key: this.props.sOverlayKey,
                    height: s,
                    width: void 0,
                    interactive: !0,
                    origin: a.Ic.BottomCenter,
                  },
                  d.createElement(a.sl, {
                    mountedId: (0, a.iN)(
                      m.GN,
                      this.props.sOverlayKey + ".cursor",
                    ),
                  }),
                ),
              );
            let l = s + o.sfOverlayTrayHeight,
              c = Math.max(i, 0.175),
              p = l / 2 - o.sfOverlayTrayHeight;
            return d.createElement(
              a.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              d.createElement(
                a.wx,
                {
                  translation: { y: p, z: -0.005 },
                  scale: { x: c, y: l, z: 0.008 },
                },
                d.createElement(
                  a.VW,
                  { color: { r: 0.016, g: 0.017, b: 0.02 } },
                  d.createElement(a.gQ, { solid: !0, source: "unit_cube" }),
                ),
              ),
              d.createElement(
                a.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: s,
                  width: void 0,
                  interactive: !0,
                  origin: a.Ic.BottomCenter,
                },
                d.createElement(a.sl, {
                  mountedId: (0, a.iN)(
                    m.GN,
                    this.props.sOverlayKey + ".cursor",
                  ),
                }),
              ),
              d.createElement(
                a.s_,
                {
                  height: o.sfOverlayTrayHeight,
                  width: void 0,
                  interactive: !0,
                  origin: a.Ic.TopCenter,
                },
                d.createElement(
                  "div",
                  { className: "WindowTray" },
                  d.createElement(u.iR, {
                    additionalClassName: "WindowTraySlider",
                    min: o.sfOverlayScaleMin,
                    max: o.sfOverlayScaleMax,
                    value: this.state.fOverlayScale,
                    valueStyleVariant: u.px.OnHandle,
                    onChange: this.onOverlayScaleChanged,
                    detents: [0.25, 0.5, 1],
                    renderValue: (e) => (100 * e).toFixed(0) + "%",
                  }),
                  d.createElement(
                    h.z,
                    {
                      className: "WindowTrayButton",
                      key: "move",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                    },
                    d.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/icon_move.png",
                    }),
                  ),
                  d.createElement(
                    h.z,
                    {
                      className: "WindowTrayButton",
                      key: "undock",
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                      title: "Return to Dashboard",
                      onClick: () => {
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          n.Dashboard,
                        );
                      },
                    },
                    d.createElement("img", {
                      className: "Icon",
                      src: "/dashboard/images/icons/icon_return.png",
                    }),
                  ),
                ),
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    a.wx,
                    {
                      parent_path:
                        this.state.destination == n.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    d.createElement(a.x1, {
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
        (R.sfMaxDockDist = 0.4),
          (R.sfMovePulseMS = 100),
          (R.sfOverlayTrayHeight = 0.025),
          (R.sfOverlayScaleMin = 0.1),
          (R.sfOverlayScaleMax = 2),
          (0, i.gn)([s.ZP], R.prototype, "onOverlayScaleChanged", null),
          (0, i.gn)([s.ZP], R.prototype, "computeDestination", null),
          (0, i.gn)([s.ZP], R.prototype, "startMove", null),
          (0, i.gn)([s.ZP], R.prototype, "endMove", null),
          (R = o = (0, i.gn)([f.Pi], R));
        var w,
          D,
          T = r(6459),
          E = r(7475);
        let I = (w = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = d.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(w.k_sMailboxName);
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
                : t.state.desktopIndices.length) > 1;
            return d.createElement(
              T.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              n &&
                d.createElement(
                  E.P,
                  {
                    scrollDirection: E.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  d.createElement(
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
                          return d.createElement(T.zN, {
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
                        : o.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, r, o;
                      return d.createElement(T.zN, {
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
                d.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  d.createElement(T.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, g.Xx)("#AddView"),
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  }),
                ),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(T.zN, {
                  iconUrl: this.props.bDarkMode
                    ? "/dashboard/images/icons/svr_nightmode.svg"
                    : "/dashboard/images/icons/svr_lightmode.svg",
                  title: (0, g.Xx)("#Settings_ToggleDarkMode"),
                  onClick: this.props.onToggleDarkMode,
                }),
              ),
            );
          }
        });
        (I.k_sMailboxName = "systemui_desktoptray"),
          (I = w = (0, i.gn)([f.Pi], I));
        let x = (D = class extends d.Component {
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
                  (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) &&
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
              S.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e,
              );
          }
          onDesktopChange(e) {
            S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
              (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > r.length &&
              S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: r });
          }
          ShowDesktop() {
            this.m_mailbox.SendMessage("desktopview", {
              type: "request_show_desktop",
            });
          }
          renderControlBarButtons(e) {
            return d.createElement(
              d.Fragment,
              null,
              "" == this.state.sCurrentWindowOverlayKey &&
                d.createElement(T.zN, {
                  iconUrl: "/dashboard/images/icons/icon_showdesktop.png",
                  title: "Show Desktop",
                  tooltipTranslation: e,
                  onClick: this.ShowDesktop,
                }),
            );
          }
          render() {
            var e;
            const t =
              null ===
                (e = S.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? m.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? d.createElement(a.sl, {
                    mountedId: (0, a.iN)(m.GN, "valve.steam.desktop"),
                  })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? d.createElement(
                      T.lL,
                      { visible: !0 },
                      d.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        d.createElement(
                          "h2",
                          null,
                          (0, g.Xx)("#NoDesktopFound"),
                        ),
                      ),
                    )
                  : -1 == this.currentDesktopIndex
                  ? d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        a.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height:
                            this.props.fActiveOverlayScale *
                            D.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        d.createElement(a.at, {
                          id: m.t3,
                          location: a.Ic.TopCenter,
                        }),
                        d.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            m.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor",
                          ),
                        }),
                        d.createElement(a.at, {
                          id: m.Gl,
                          location: a.Ic.BottomCenter,
                        }),
                      ),
                    )
                  : d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        a.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height:
                            this.props.fActiveOverlayScale *
                            D.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        d.createElement(a.at, {
                          id: m.t3,
                          location: a.Ic.TopCenter,
                        }),
                        d.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            m.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor",
                          ),
                        }),
                        d.createElement(a.at, {
                          id: m.Gl,
                          location: a.Ic.BottomCenter,
                        }),
                      ),
                    )
                : d.createElement(
                    T.lL,
                    { visible: !0 },
                    d.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      d.createElement(
                        "h2",
                        null,
                        (0, g.Xx)("#DesktopViewsUpdating"),
                      ),
                    ),
                  )
              : null;
          }
        });
        (x.k_sMailboxName = "systemui_desktopview"),
          (x.k_nDesktopPanelBaseHeight = 2),
          (0, i.gn)([l.Fl], x.prototype, "desktopCount", null),
          (0, i.gn)([l.Fl], x.prototype, "sCurrentOverlayKey", null),
          (0, i.gn)([l.Fl], x.prototype, "currentDesktopIndex", null),
          (0, i.gn)([l.Fl], x.prototype, "currentWindowHwnd", null),
          (0, i.gn)([s.ZP], x.prototype, "onDesktopScaleChange", null),
          (0, i.gn)([s.ZP], x.prototype, "onDesktopChange", null),
          (0, i.gn)([s.ZP], x.prototype, "onDesktopViewUpdating", null),
          (0, i.gn)([s.ZP], x.prototype, "onDesktopViewReady", null),
          (0, i.gn)([s.ZP], x.prototype, "onWindowViewChange", null),
          (0, i.gn)([s.ZP], x.prototype, "ShowDesktop", null),
          (x = D = (0, i.gn)([f.Pi], x));
        var P,
          O = r(2743),
          V = r(7095),
          L = r(8980);
        let B = (P = class extends d.Component {
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
                (e) => !P.s_failedImages.includes(e),
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
              t = d.createElement("div", { className: "Icon", style: e });
            return (
              this.state.width / this.state.height != 600 / 900 &&
                (t = d.createElement(
                  d.Fragment,
                  null,
                  d.createElement("div", {
                    className: "IconBackgroundBlur",
                    style: e,
                  }),
                  t,
                )),
              d.createElement(
                "div",
                {
                  className: (0, L.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                d.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title,
                ),
                this.props.children && this.props.children,
              )
            );
          }
        });
        (B.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (B.s_failedImages = []),
          (0, i.gn)([s.ak], B.prototype, "loadNextImage", null),
          (0, i.gn)([s.ak], B.prototype, "onLoad", null),
          (0, i.gn)([s.ak], B.prototype, "onError", null),
          (B = P = (0, i.gn)([f.Pi], B));
        var H,
          N = r(9595);
        class A extends d.Component {
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
              r = y.H.Instance.SceneAppName,
              o = y.H.Instance.SceneApplicationState,
              n = y.H.Instance.SceneAppIsHome,
              i = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              l = S.G3.apps && S.G3.apps.find((e) => e.key == t);
            let c = !1;
            switch (o) {
              case a.xY.Quitting:
              case a.xY.Starting:
              case a.xY.Waiting:
                c = !0;
            }
            const u = ((e) => {
              if (null == e) return "";
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            })(l);
            return d.createElement(
              T.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
              },
              d.createElement(
                "div",
                { className: "ArtworkColumn" },
                d.createElement(B, { appkey: t, title: r, imageUrl: u }),
              ),
              d.createElement(
                "div",
                { className: "InfoColumn" },
                d.createElement("div", { className: "NowPlayingAppTitle" }, r),
                d.createElement(
                  h.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  n
                    ? (0, g.Xx)("#Return_To_Home")
                    : (0, g.Xx)("#Return_To_Game"),
                ),
                s &&
                  d.createElement(
                    N.ls,
                    {
                      icon: N.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, g.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  d.createElement(
                    N.ls,
                    { icon: N.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, g.Xx)("#App_Video_Settings"),
                  ),
                !n &&
                  i &&
                  d.createElement(
                    h.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, g.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, i.gn)([s.ak], A.prototype, "onExitApp", null),
          (0, i.gn)([s.ak], A.prototype, "onReturnToGame", null),
          (0, i.gn)(
            [s.ak],
            A.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, i.gn)([s.ak], A.prototype, "onOpenAppVideoSettings", null),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(H || (H = {}));
        const F = (e) =>
          d.createElement(
            "div",
            {
              className: (0, L.LJ)("ButtonContainer", H[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            d.createElement(
              h.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == H.Left
                ? d.createElement(d.Fragment, null, "‹")
                : d.createElement(d.Fragment, null, "›"),
            ),
          );
        class U extends d.Component {
          constructor(e) {
            super(e),
              (this.m_refScrollPanel = d.createRef()),
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
            return d.createElement(
              "div",
              {
                className: (0, L.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames,
                ),
              },
              d.createElement(
                E.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: E.I.Horizontal,
                  onScroll: this.onScroll,
                },
                this.props.children,
              ),
              (!1 === this.state.bScrolledToStart ||
                !1 === this.state.bScrolledToEnd) &&
                d.createElement(
                  "div",
                  { className: "PaginationButtons" },
                  null !== this.state.bScrolledToStart &&
                    d.createElement(F, {
                      side: H.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    d.createElement(F, {
                      side: H.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, i.gn)([s.ZP], U.prototype, "onAnimationFrame", null),
          (0, i.gn)([s.ZP], U.prototype, "onScroll", null),
          (0, i.gn)([s.ZP], U.prototype, "onLeftButtonClick", null),
          (0, i.gn)([s.ZP], U.prototype, "onRightButtonClick", null);
        let W = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new L.cB()),
              (this.m_refAnchoredParentPortal = d.createRef()),
              (this.m_refButton = d.createRef()),
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
              d.createElement(
                "div",
                {
                  className: (0, L.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      S.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents],
                  ),
                },
                d.createElement(
                  h.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  d.createElement(B, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, i.gn)([s.ZP], W.prototype, "buttonMouseEnter", null),
          (0, i.gn)([s.ZP], W.prototype, "buttonMouseLeave", null),
          (0, i.gn)([s.ZP], W.prototype, "onParentScrollStop", null),
          (W = (0, i.gn)([f.Pi], W));
        const G = () =>
            d.createElement("div", { className: "AppButton Placeholder" }),
          z = (e) => {
            var t;
            const r = !!e.loading,
              o = null !== (t = e.apps) && void 0 !== t ? t : [];
            let n = "AppCarousel";
            return (
              e.className && (n += " " + e.className),
              (n += " NoAnimations"),
              d.createElement(
                U,
                { additionalClassNames: n, paginationAlignmentOffset: -20 },
                r &&
                  d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(G, null),
                    d.createElement(G, null),
                    d.createElement(G, null),
                    d.createElement(G, null),
                  ),
                !r &&
                  o.map((e) =>
                    d.createElement(W, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var K = r(9669),
          q = r.n(K);
        function X() {
          return q()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20",
            )
            .then((e) => e.data);
        }
        const Q = () =>
          d.createElement(
            h.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                b.y.Instance.openBigPictureStore(null, b.b.QuickStore),
            },
            d.createElement("span", null, (0, g.Xx)("#BrowseAll")),
            d.createElement("img", {
              className: "Icon BlackToWhite",
              src: "/dashboard/images/icons/svr_store.svg",
            }),
          );
        var j;
        !(function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.Singleplayer = 1)] = "Singleplayer"),
            (e[(e.Multiplayer = 2)] = "Multiplayer");
        })(j || (j = {}));
        let Z = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            X().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, r) {
            v.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              j[t].toLowerCase() + ":" + r,
              `steam.app.${e}`,
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
              ? d.createElement(z, { apps: this.makeAppButtonList() })
              : d.createElement(z, { loading: !0 });
          }
        };
        Z = (0, i.gn)([f.Pi], Z);
        class Y extends d.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return d.createElement(
              T.lL,
              {
                visible: this.props.visible,
                additionalClassNames: "QuickStore",
              },
              d.createElement(Q, null),
              d.createElement(
                "h2",
                null,
                (0, g.Xx)("#StoreSection_TopSingleplayer"),
              ),
              d.createElement(Z, { section: j.Singleplayer }),
              d.createElement(
                "h2",
                null,
                (0, g.Xx)("#StoreSection_TopMultiplayer"),
              ),
              d.createElement(Z, { section: j.Multiplayer }),
              d.createElement("h2", null, (0, g.Xx)("#StoreSection_TopFree")),
              d.createElement(Z, { section: j.Free }),
            );
          }
        }
        var J;
        const $ = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              d.createElement("span", null, (0, g.Xx)("#BrowseAll")),
              d.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              }),
            ),
          ee = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(m.wB),
              },
              d.createElement("span", null, (0, g.Xx)("#WelcomeBrowseStore")),
            ),
          te = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              d.createElement("span", null, (0, g.Xx)("#WelcomeInstall")),
            );
        class re extends d.Component {
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
                r = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; r.has(t[0].appid); ) t.shift();
                let o = t.shift();
                r.add(o.appid),
                  e.push(
                    d.createElement(
                      h.z,
                      {
                        key: `appid_${o.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          b.y.Instance.openBigPictureStore(
                            o.appid,
                            b.b.QuickLaunch,
                          ),
                      },
                      d.createElement("img", { src: o.logo }),
                    ),
                  );
              }
            }
            return d.createElement(
              "div",
              { className: "QuickLaunchWelcome" },
              e,
              d.createElement(
                "div",
                { className: "QuickLaunchWelcomePrompt" },
                d.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeHeader" },
                  (0, g.Xx)("#WelcomeHeader"),
                ),
                d.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, g.Xx)("#WelcomeMessage"),
                ),
                d.createElement(ee, null),
                d.createElement(te, null),
              ),
            );
          }
        }
        let oe = (J = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
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
            if (null != S.G3.apps)
              for (let t of S.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  J.s_setBlacklistedAppkeys.has(t.key) ||
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
              const n = r < J.TOP_ROW_LENGTH;
              return (
                n || (o -= J.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, n, o),
                  children: d.createElement(
                    d.Fragment,
                    null,
                    d.createElement("div", { className: "PlayIconFade" }),
                    d.createElement("img", {
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
                S.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              n =
                0 == r.length ||
                S.G3.settings.get("/settings/dashboard/hideBigPictureLibrary"),
              i =
                0 == r.length ||
                (null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/showRoomSetup",
                  )) &&
                  void 0 !== e &&
                  e);
            if (o) t = d.createElement(re, null);
            else {
              let e = r.slice(0, J.TOP_ROW_LENGTH),
                o = r.slice(J.TOP_ROW_LENGTH);
              t = d.createElement(
                d.Fragment,
                null,
                !n && d.createElement($, null),
                i &&
                  d.createElement(
                    h.z,
                    {
                      className: "ButtonControl WithIcon PanelTopRight",
                      onClick: this.onRoomSetup,
                    },
                    d.createElement("span", null, (0, g.Xx)("#RoomSetup")),
                    d.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/svr_recenter.svg",
                    }),
                  ),
                d.createElement("h2", null, (0, g.Xx)("#RecentlyPlayed")),
                d.createElement(z, { className: "TopRow", apps: e }),
                d.createElement(z, { className: "BottomRow", apps: o }),
              );
            }
            return d.createElement(
              T.lL,
              {
                visible: this.props.visible,
                scrollable: !o,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
              },
              t,
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
          (0, i.gn)([s.ak], oe.prototype, "onRoomSetup", null),
          (oe = J = (0, i.gn)([f.Pi], oe));
        var ne = r(16);
        const ie = d.createContext(void 0);
        let ae = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { xfTransform: (0, a.Oq)(), sParent: "" });
          }
          render() {
            return d.createElement(
              a.sO,
              {
                sParentPath: this.state.sParent,
                xfCurrent: this.state.xfTransform,
                id: this.props.id,
              },
              d.createElement(
                ie.Provider,
                { value: this },
                this.props.children,
              ),
            );
          }
        };
        ae = (0, i.gn)([f.Pi], ae);
        let se = class extends d.Component {
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
            e.bVisible != this.props.bVisible &&
              (this.props.bVisible || this.endMove()),
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
                window.addEventListener("mouseup", this.endMove);
            }
          }
          endMove() {
            this.context.setState({ sParent: "", nHandleSGID: 0 }),
              this.setState({ bActive: !1 }),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            return null == this.state.xfTransform
              ? null
              : d.createElement(
                  d.Fragment,
                  null,
                  " ",
                  this.props.bVisible &&
                    d.createElement(
                      a.wx,
                      null,
                      d.createElement(
                        a.Dd,
                        { value: this.props.opacity },
                        " ",
                        d.createElement(
                          a.VW,
                          { color: this.props.tint },
                          d.createElement(
                            a.s_,
                            {
                              width: 0.25 * ye.k_nControlBarWidthMeters,
                              interactive: !0,
                              debug_name: "DashboardGrabHandle",
                              origin: a.Ic.BottomCenter,
                              curvature_origin_id:
                                this.props.curvature_origin_id,
                              hide_lasermouse_when_clicking: !0,
                            },
                            d.createElement(
                              h.z,
                              {
                                className: "GrabHandleButton",
                                key: "move",
                                onMouseDown: this.startMove,
                                onMouseUp: this.endMove,
                              },
                              d.createElement("div", {
                                className: (0, L.LJ)("GrabHandleBar", [
                                  "ForceActive",
                                  this.state.bActive,
                                ]),
                              }),
                            ),
                          ),
                        ),
                        " ",
                      ),
                      " ",
                    ),
                  " ",
                );
          }
        };
        (se.contextType = ie),
          (0, i.gn)([s.ZP], se.prototype, "startMove", null),
          (0, i.gn)([s.ZP], se.prototype, "endMove", null),
          (se = (0, i.gn)([f.Pi], se));
        var le,
          de = r(3619),
          ce = r(4138);
        !(function (e) {
          (e[(e.Cube = 0)] = "Cube"),
            (e[(e.Cylinder = 1)] = "Cylinder"),
            (e[(e.Sphere = 2)] = "Sphere"),
            (e[(e.Square = 3)] = "Square"),
            (e[(e.Disk = 4)] = "Disk");
        })(le || (le = {}));
        let he = 0;
        function ue(e) {
          const [t, r] = (0, d.useState)(new Map());
          function o(o) {
            let n = new Map(t);
            const i = "portal" + he;
            he++,
              n.set(i, { ePortalShape: o, sName: i }),
              e.onAddPortal(i, o),
              r(n);
          }
          const n = Array.from(t, ([e, t]) => ({ sKey: e, portalInfo: t }));
          return d.createElement(
            T.lL,
            { visible: e.visible, debugName: "portalmanager" },
            d.createElement(
              "div",
              null,
              d.createElement("h2", null, "Passthrough Portals"),
              d.createElement(
                "div",
                { style: { flexDirection: "row", display: "flex" } },
                d.createElement(
                  h.z,
                  {
                    style: { flex: 1, width: "fit-content" },
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VROverlayInternal.SetPassthroughPortalEnabled(
                          !(null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VROverlayInternal.GetPassthroughPortalEnabled()),
                        );
                    },
                  },
                  "Toggle Passthrough/Portal",
                ),
              ),
              d.createElement(
                "div",
                { style: { flexDirection: "row", display: "flex" } },
                d.createElement(
                  h.z,
                  {
                    style: { flex: 1, width: "fit-content" },
                    className: "ButtonControl",
                    onClick: () => {
                      o(le.Cube);
                    },
                  },
                  "Add Cube",
                ),
                d.createElement(
                  h.z,
                  {
                    style: { flex: 1, width: "fit-content" },
                    className: "ButtonControl",
                    onClick: () => {
                      o(le.Cylinder);
                    },
                  },
                  "Add Cylinder",
                ),
                d.createElement(
                  h.z,
                  {
                    style: { flex: 1, width: "fit-content" },
                    className: "ButtonControl",
                    onClick: () => {
                      o(le.Sphere);
                    },
                  },
                  "Add Sphere",
                ),
                d.createElement(
                  h.z,
                  {
                    style: { flex: 1, width: "fit-content" },
                    className: "ButtonControl",
                    onClick: () => {
                      o(le.Disk);
                    },
                  },
                  "Add Disk",
                ),
                d.createElement(
                  h.z,
                  {
                    style: { flex: 1, width: "fit-content" },
                    className: "ButtonControl",
                    onClick: () => {
                      o(le.Square);
                    },
                  },
                  "Add Square",
                ),
              ),
              d.createElement(
                "div",
                { style: { flexDirection: "row", display: "flex" } },
                d.createElement(
                  "span",
                  { style: { flex: 1, padding: "16px", fontWeight: "bold" } },
                  "Name",
                ),
                d.createElement(
                  "span",
                  { style: { flex: 4, padding: "16px", fontWeight: "bold" } },
                  "Shape",
                ),
                d.createElement("span", { style: { flex: "15%" } }),
              ),
              n.map((o) =>
                d.createElement(
                  "div",
                  {
                    style: { flexDirection: "row", display: "flex" },
                    key: o.portalInfo.sName,
                  },
                  d.createElement(
                    "span",
                    { style: { flex: 1, padding: "16px" } },
                    o.portalInfo.sName,
                  ),
                  d.createElement(
                    "span",
                    { style: { flex: 4, padding: "16px" } },
                    (function (e) {
                      switch (e) {
                        case le.Cube:
                          return "Cube";
                        case le.Cylinder:
                          return "Cylinder";
                        case le.Sphere:
                          return "Sphere";
                        case le.Square:
                          return "Square";
                        case le.Disk:
                          return "Disk";
                      }
                      return "Unknown shape";
                    })(o.portalInfo.ePortalShape),
                  ),
                  d.createElement(
                    h.z,
                    {
                      style: { flex: "15%", width: "fit-content" },
                      className: "ButtonControl",
                      onClick: () => {
                        !(function (o) {
                          e.onRemovePortal(o);
                          let n = new Map(t);
                          n.delete(o), r(n);
                        })(o.sKey);
                      },
                    },
                    "Remove",
                  ),
                ),
              ),
            ),
          );
        }
        var pe, me, ge;
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
        })(me || (me = {}));
        class ve extends d.Component {
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
        function _e(e) {
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
        })(ge || (ge = {}));
        let ye = (pe = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new a.Nv()),
              (this.m_timeoutPopoverMenuHide = 0),
              (this.m_refPopoverMenu = d.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = d.createRef()),
              (this.m_refDesktopTray = d.createRef()),
              (this.m_refOverlayTransform = d.createRef()),
              (this.m_refVolumeTray = d.createRef()),
              (this.m_rgOverlaysToSwitchToOnLoad = [m.T2, m.O5]),
              (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (this.m_roomViewChangedEventHandle = null),
              (this.m_linkStreamActiveEventHandle = null),
              (this.m_incognitoModeEventHandle = null),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bDesktopDarkMode: !1,
                bTheaterMode: !1,
                bMuted: !1,
                sLastShownAppKey: "",
                eIncognitoMode: a.Qu.Unavailable,
                eShowPopoverMenu: ge.None,
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
                mapPortals: new Map(),
              }),
              (window.setDashboardScale = (e) => (pe.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (pe.s_dashboardUserDistance = e)),
              S.G3.Init(!1),
              a.hz.getInstance(),
              this.m_mailbox.Init(pe.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  pe.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sOverlayKeyboardClosedMessage,
                    this.onKeyboardClosed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible,
                  ),
                  this.m_mailbox.RegisterHandler(
                    pe.k_sLaserMouseSuppressionUpdate,
                    this.onLaserMouseSuppressionUpdate,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "show_dashboard_requested",
                    this.onShowDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested,
                  );
              });
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
              (this.m_incognitoModeEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForIncognitoModeEvents(
                      this.onIncognitoModeEvents,
                    ));
            const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              t =
                e == a.a0.AppLaunch_Unknown ||
                e == a.a0.AppLaunch_Steam ||
                e == a.a0.Unknown,
              r = S.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              o = S.G3.settings.get("/settings/steamvr/enableHomeApp"),
              n = S.G3.settings.get(m.y3);
            ((t || (!r && o)) && !n) ||
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != n ? n : ""),
                500,
              ),
              (this.m_appStateChangedAutorunDisposer = (0, l.EH)(() => {
                const e = y.H.Instance.SceneApplicationState != a.xY.None;
                this.isOverlayActive(m.PF) && !e && this.switchToHomeOverlay();
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                },
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            var r;
            const o = this.getActiveOverlaySummonKey();
            let n = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (p.G.Instance.playSound(
                  this.state.bShown ? p.y.DashboardOpen : p.y.DashboardClose,
                ),
                (n = !0)),
              this.state.bShown &&
                !n &&
                t.sActiveOverlayID != this.state.sActiveOverlayID)
            )
              switch (o) {
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
            const i = this.getActiveOverlayKey(),
              s = i ? this.state.mapOverlayState.get(i) : null,
              l = i ? t.mapOverlayState.get(i) : null,
              d = s && l && s.fScale != l.fScale;
            if (
              ((t.sActiveOverlayID != this.state.sActiveOverlayID || d) &&
                s &&
                this.isDesktopOverlayActive() &&
                (null === (r = this.m_refDesktopView.current) ||
                  void 0 === r ||
                  r.onDesktopScaleChange(s.fScale)),
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
                  a.Pw.Normal,
                  a.l0.SingleLine,
                  a.vS.Minimal,
                  "Desktop Text",
                  1024,
                  "",
                  0,
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
            t.bLinkStreamActive,
              this.state.bLinkStreamActive,
              this.updateSiblingReferences();
          }
          initializeOverlayState(e) {
            var t;
            let r = 1;
            if (e.startsWith("system.desktop.")) {
              let o = "/settings/dashboard/desktopScale" + e.split(".")[2];
              r = null !== (t = S.G3.settings.get(o)) && void 0 !== t ? t : 1;
            }
            let o = {
              dockLocation: n.Dashboard,
              refOverlayWidget: d.createRef(),
              xfInitial: null,
              fScale: r,
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
            var e, t;
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
              (this.m_linkStreamActiveEventHandle = null),
              null === (t = this.m_incognitoModeEventHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_incognitoModeEventHandle = null);
          }
          static getDashboardDistance() {
            if (pe.s_dashboardUserDistance) return pe.s_dashboardUserDistance;
            const e = S.G3.settings.get(m.o1);
            return e == me.Near
              ? 0.925
              : e == me.Screenshot_Only
              ? 5
              : e == me.Middle
              ? 1.05
              : 1.2;
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
              r = S.G3.settings.get(m.o1);
            return r == me.Screenshot_Only
              ? -0.57
              : r == me.Near
              ? -0.07 + t
              : r == me.Middle
              ? -0.08 + t
              : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (pe.s_dashboardUserScale) return pe.s_dashboardUserScale;
            let t = 1;
            const r = S.G3.settings.get(m.o1),
              o = r == me.Screenshot_Only;
            return (
              (t = o ? 2 : r == me.Near ? 0.36 : r == me.Middle ? 0.41 : 0.47),
              o ||
                (t *=
                  null !==
                    (e =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetFloatProperty(
                            a.wU,
                            a.Uk.DashboardScale_Float,
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
          onIncognitoModeEvents(e) {
            this.setState({ eIncognitoMode: e });
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
                this.switchToHomeOverlay(),
              this.state.mapOverlayState.has(e.overlay_key) &&
                this.state.mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              });
            const t = this.m_rgOverlaysToSwitchToOnLoad.find(this.hasOverlay);
            t && this.switchToOverlayInternal(t),
              (this.m_rgOverlaysToSwitchToOnLoad =
                this.m_rgOverlaysToSwitchToOnLoad.filter(
                  (e) => !this.hasOverlay(e),
                )),
              this.forceUpdate();
          }
          onWindowViewCreated(e) {
            var t, r;
            this.switchToOverlayInternal(m.gB),
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
                  null === (t = S.G3.settings.get(m.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          onDockOverlay(e, t, r) {
            var o, i;
            if (
              ((t != n.LeftHand && t != n.RightHand) ||
                this.state.mapOverlayState.forEach((e, r) => {
                  e.dockLocation == t && (e.dockLocation = n.Dashboard);
                }),
              (this.state.mapOverlayState.get(e).dockLocation = t),
              (this.state.mapOverlayState.get(e).xfInitial = r),
              t === n.Dashboard)
            )
              if (e.startsWith(m.r4)) {
                const t = Number.parseInt(e.substring(m.r4.length + 1));
                null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t);
              } else
                e.startsWith(m.Vq) &&
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
              o = r ? r.fScale : 1;
            return d.createElement(a.sl, {
              mountedId: e.mountable_id,
              fDashboardScale: o,
            });
          }
          computeFilteredOverlayTabs() {
            if (this.isScreenshotMode) return [];
            let e = [];
            for (let t in this.m_mapExternalOverlays) {
              const r = this.m_mapExternalOverlays[t];
              (void 0 === r.icon_overlay_key && null == r.icon_uri) ||
                (r.summon_overlay_key &&
                  r.summon_overlay_key != m.A4 &&
                  r.summon_overlay_key != m.Y8 &&
                  r.summon_overlay_key != m.Xl &&
                  (r.summon_overlay_key.startsWith(m.r4) ||
                    r.summon_overlay_key.startsWith(m.Vq) ||
                    r.summon_overlay_key.startsWith(m.MZ) ||
                    _e(r.summon_overlay_key) ||
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
          hasTenfootOverlay() {
            return this.hasOverlay(m.Y8);
          }
          hasVRGamepadUIOverlay() {
            return this.hasOverlay(m.T2);
          }
          switchToHomeOverlay() {
            const e = this.hasVRGamepadUIOverlay() ? m.T2 : m.O5;
            this.switchToOverlayInternal(e, "switchToDashboardLibrary");
          }
          switchToSteamOverlay() {
            let e = "";
            if (this.hasVRGamepadUIOverlay()) e = m.T2;
            else {
              if (!this.hasTenfootOverlay()) return;
              e = m.Y8;
            }
            this.switchToOverlayInternal(e, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var r, o;
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
                  r = "bindingui/" + a.qA[(0, a.Op)()];
                this.m_mailbox.SendMessage(r, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = m.RM);
            }
            if (e.startsWith(m.r4)) {
              const t = Number.parseInt(e.substring(m.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (r = this.m_refDesktopView.current) ||
                  void 0 === r ||
                  r.onDesktopChange(t)),
                (e = m.gB);
            }
            let n = this.findDashboardTab(e);
            return n
              ? (this.computeFilteredOverlayTabs().includes(n) &&
                  S.G3.SetSettingsValue(
                    m.nf,
                    null !== (o = n.summon_overlay_key) && void 0 !== o
                      ? o
                      : "",
                  ),
                this.setState({ sActiveOverlayID: n.mountable_id }),
                v.e.instance.RecordUIEvent(
                  "SetDashboardOverlay",
                  null != t ? t : "Button",
                  e,
                ),
                !0)
              : (this.m_rgOverlaysToSwitchToOnLoad.unshift(e), !1);
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
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e) {
            var t;
            S.G3.settings.get("/settings/dashboard/enableDashboard") &&
              (this.show(
                null !== (t = e.reason) && void 0 !== t ? t : "unknown",
              ),
              e.overlay_key && this.switchToOverlayInternal(e.overlay_key),
              this.setDashboardVisibility(
                !0,
                e.tracked_device_index,
                e.reason,
              ));
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(m.f8)
              : (this.hideMessageOverlay(),
                this.m_mailbox.SendMessage("keyboard", {
                  type: "hide_keyboard",
                }),
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
            const t = y.H.Instance.SceneAppKey,
              r = y.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              r
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(m.PF)),
              this.setState({ bShown: !0 });
            let o = { type: pe.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
              (0, a.qI)();
          }
          hide(e) {
            this.isShown() &&
              (this.setState({ bShown: !1, eShowPopoverMenu: ge.None }),
              v.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView() {
            const e = VRHTML.VRControlPanel.GetCameraRoomViewVisible();
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(!e);
          }
          onQuickLaunchButtonClick() {
            this.m_bQuickLaunchShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(m.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(m.wB);
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
              this.m_mailbox.SendMessage(ne.BB, {
                type: ne.KU,
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
                      e.icon_overlay_key,
                    );
            } catch (e) {}
            return null;
          }
          renderPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              r = S.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let o = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (o = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                a.Uk.DeviceCanPowerOff_Bool,
              ));
            const n = y.H.Instance.SceneAppName,
              i = y.H.Instance.SceneAppIsHome;
            let s, l;
            return (
              (s = i
                ? (0, g.Xx)("#Exit_SteamVR_Home")
                : n
                ? (0, g.Xx)("#PowerMenuQuitSceneApp", n)
                : (0, g.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (l = i
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                d.createElement(
                  d.Fragment,
                  null,
                  this.hasTenfootOverlay() &&
                    d.createElement(T.dy, {
                      label: (0, g.Xx)("#PowerMenuSteamOverlay"),
                      lineBelow: !0,
                      onClick: () => {
                        this.switchToOverlayInternal(m.Y8),
                          this.showPopoverMenu(ge.None);
                      },
                    }),
                  o &&
                    d.createElement(T.dy, {
                      label: (0, g.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(ge.None);
                      },
                    }),
                  t &&
                    e &&
                    d.createElement(T.dy, {
                      label: s,
                      imageUrl: l,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(ge.None);
                      },
                    }),
                  d.createElement(T.dy, {
                    label: (0, g.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  r &&
                    d.createElement(T.dy, {
                      label: (0, g.Xx)("#PowerMenuShutdown"),
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
              this.setState({ eShowPopoverMenu: ge.None });
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
            return d.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popoverMenuMouseLeave,
                onMouseEnter: this.clearPopoverMenuTimeout,
                ref: this.m_refPopoverMenu,
              },
              d.createElement(h.q, { className: "PowerMenuPanel" }, e),
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
            if (
              (n.summon_overlay_key == m.Y8 &&
                (b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch
                  ? (n = this.findDashboardTab(m.O5))
                  : b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
                    (n = this.findDashboardTab(m.wB))),
              n.summon_overlay_key == m.gB)
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
                return d.createElement(T.Rk, {
                  name:
                    null === (r = this.state.mapWindows.get(e)) || void 0 === r
                      ? void 0
                      : r.title,
                  iconUrl: this.getDashboardIconUri(n),
                });
              }
              return d.createElement(T.Rk, {
                name:
                  "Desktop " +
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(n),
              });
            }
            return n.summon_overlay_key == m.RM
              ? d.createElement(T.Rk, {
                  name: (0, g.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : d.createElement(T.Rk, {
                  name: n.tab_name,
                  iconUrl: this.getDashboardIconUri(n),
                });
          }
          get isDarkMode() {
            return (
              (this.state.bDesktopDarkMode && this.isOverlayActive(m.gB)) ||
              this.state.bTheaterMode
            );
          }
          get isScreenshotMode() {
            return S.G3.settings.get(m.o1) == me.Screenshot_Only;
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
            const o =
              null !== (e = S.G3.settings.get(m.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, a.M9)((0, a.eQ)(e[3], e[0])),
                n = (0, a.M9)((0, a.eQ)(e[1], e[0])),
                i = (0, a.dq)(t, n),
                s = (0, a.Pd)((0, a.tS)(t, n, i)),
                l = (0, a.LY)((0, a.eQ)(e[0], e[3]));
              if (l < 0.4) continue;
              let c = Math.max(1, Math.floor(l));
              for (let t = 0; t < c; t++) {
                let n = (t + 1) / (c + 1),
                  i = (0, a.Oq)();
                (i.rotation = s),
                  (i.translation = (0, a.q9)(n, e[0], e[3])),
                  (i.scale = { x: 0.005, y: 0.005, z: o });
                let l = d.createElement(
                  a.wx,
                  { transform: i },
                  d.createElement(
                    a.Dd,
                    { value: 0.25 },
                    d.createElement(
                      a.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      d.createElement(a.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: a.xj.Backface,
                      }),
                    ),
                  ),
                );
                r.push(l);
              }
              if (r.length > 20) break;
            }
            return r;
          }
          render() {
            var e, t;
            const r =
                null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/theaterModeBrightness",
                  )) && void 0 !== e
                  ? e
                  : 1,
              o =
                null !==
                  (t = S.G3.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== t
                  ? t
                  : 1;
            if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == m.A4,
                t = S.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                ),
                n = !y.H.Instance.SceneAppIsHome || !t;
              if (this.isScreenshotMode)
                (0, a.OK)({
                  color_mult: 0,
                  reflection_mult: 0,
                  roomview_mult: [1, 1, 1],
                  allow_skydome: !0,
                  allow_floorfar: !0,
                  allow_floornear: !0,
                });
              else if (n && !e)
                if (this.isTheaterMode) {
                  const e = S.G3.settings.get(
                    "/settings/dashboard/theaterPosition",
                  );
                  (0, a.OK)({
                    color_mult: Math.pow(r, 2.2),
                    reflection_mult: Math.pow(o, 2.2),
                    roomview_mult: [0.05, 0.05, 0.6],
                    allow_skydome: !1,
                    allow_floorfar: !1,
                    allow_floornear: e != me.Far,
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
                    : y.H.Instance.SceneApplicationState !== a.xY.None
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
            const n = this.getActiveOverlaySummonKey(),
              i = this.state.bShown && this.state.setForcingBoundsVisible[n],
              s = i && i.size > 0;
            let l = [];
            return (
              s && (l = this.getCollisionBoundsFadeVisualizationElements()),
              d.createElement(
                "div",
                { className: "DashboardMain" },
                s && d.createElement(ve, null),
                s && d.createElement("span", null, l),
                this.state.bShown && this.renderDashboard(),
                this.renderInternalOverlays(),
                this.renderOverlayWidgets(),
                this.renderPassthroughPortals(),
              )
            );
          }
          hasOverlay(e) {
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
          get statusBarAnchorID() {
            let e = this.getActiveOverlayKey(),
              t =
                this.state.mapOverlayState.has(e) &&
                (this.state.mapOverlayState.get(e).dockLocation == n.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    n.RightHand);
            return _e(this.getActiveOverlaySummonKey()) || t
              ? m.t3
              : this.state.sActiveOverlayID + "_TopCenter";
          }
          get controlBarAnchorID() {
            let e = this.getActiveOverlayKey(),
              t =
                this.state.mapOverlayState.has(e) &&
                (this.state.mapOverlayState.get(e).dockLocation == n.LeftHand ||
                  this.state.mapOverlayState.get(e).dockLocation ==
                    n.RightHand);
            return _e(this.getActiveOverlaySummonKey()) || t
              ? m.Gl
              : this.state.sActiveOverlayID + "_BottomCenter";
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              r = T.IO.Center;
            return d.createElement(T.B8, {
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
              (this.isOverlayActive(m.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith("system.window"))) &&
              (this.state.eShowPopoverMenu == ge.None ||
                this.state.eShowPopoverMenu == ge.Windows)
            );
          }
          isSteamOverlayActive() {
            return (
              (this.isOverlayActive(m.Y8) || this.isOverlayActive(m.T2)) &&
              this.state.eShowPopoverMenu == ge.None
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
                    a.Uk.PeerButtonInfo_String,
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
          ToggleIncognitoMode() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_voicechat",
            });
          }
          renderControlBar(e, t) {
            var r, o, n, i, s, l, c, u, p;
            const v = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              f = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              k = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
              M = this.isDarkMode ? 0.02 : 0.05,
              C = pe.k_nControlBarWidthMeters,
              R =
                null ===
                  (r = S.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === r ||
                r,
              w =
                null ===
                  (o = S.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === o ||
                o,
              D = this.hasVRGamepadUIOverlay(),
              E = !this.hasVRGamepadUIOverlay(),
              x =
                !this.hasVRGamepadUIOverlay() &&
                (null ===
                  (n = S.G3.settings.get(
                    "/settings/dashboard/showQuickStore",
                  )) ||
                  void 0 === n ||
                  n),
              P = !(
                null !==
                  (i = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== i &&
                i
              ),
              O = this.getPeerButtonInfo(),
              V = VRHTML.BIsLinkServer(),
              L = y.H.Instance.SceneApplicationState,
              B = y.H.Instance.SceneAppIsHome,
              H =
                null ===
                  (s = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === s ||
                s
                  ? m.ml
                  : null,
              N = y.H.Instance.SceneAppKey;
            let A = "images/appimage_default.png";
            N && (A = "/app/image?app_key=" + N);
            const F =
                null !== (l = S.G3.settings.get(m.Av)) && void 0 !== l && l,
              U =
                null !== (c = S.G3.settings.get(m.k_)) && void 0 !== c ? c : 0;
            let W = F && U > 0,
              G =
                this.state.eIncognitoMode != a.Qu.Unavailable &&
                null !==
                  (u = S.G3.settings.get(
                    "/settings/dashboard/allowIncognitoMode",
                  )) &&
                void 0 !== u &&
                u,
              z =
                null !==
                  (p = S.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode",
                  )) &&
                void 0 !== p &&
                p,
              K = !0;
            this.state.bLinkStreamActive &&
              ((z = !1), V && ((W = !1), (K = !1)));
            let q = { y: -0.25, z: 0 };
            return (
              this.isOverlayActive(m.gB) && (q = { y: -0.4, z: 0 }),
              d.createElement(
                a.Dd,
                { value: v },
                d.createElement(
                  a.VW,
                  { color: f },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: H,
                      width: C,
                      interactive: !1,
                      debug_name: "ControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: M,
                    },
                    d.createElement("div", {
                      className: "ControlBarBackground",
                    }),
                  ),
                  d.createElement(
                    a.wx,
                    { translation: { z: 1e-5 } },
                    d.createElement(
                      a.s_,
                      {
                        curvature_origin_id: H,
                        width: C,
                        interactive: !0,
                        id: m.WR,
                        debug_name: "Controls",
                      },
                      d.createElement(
                        h.q,
                        { className: "ControlBar MainControlBar" },
                        d.createElement(
                          "div",
                          { className: "Section Left" },
                          R &&
                            d.createElement(T.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, g.Xx)("#Menu"),
                              style: T.zk.Small,
                              onClick: () => this.showPopoverMenu(ge.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          D &&
                            d.createElement(T.NT, {
                              style: T.zk.Small,
                              imageUrl: "/dashboard/images/icons/vr_steam.svg",
                              label: (0, g.Xx)("#Steam"),
                              active: this.isSteamOverlayActive(),
                              onClick: () => this.switchToSteamOverlay(),
                            }),
                          w &&
                            d.createElement(T.NT, {
                              style: T.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, g.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlayInternal(m.gB),
                            }),
                          d.createElement(
                            T.dw,
                            { style: T.zk.Small },
                            d.createElement(
                              d.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                d.createElement(T.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, g.Xx)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    ge.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(ge.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                }),
                            ),
                          ),
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Center" },
                          E &&
                            d.createElement(T.NT, {
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
                          L != a.xY.None &&
                            d.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              d.createElement(
                                _.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                d.createElement(
                                  a.VW,
                                  { color: f },
                                  d.createElement(
                                    a.wx,
                                    { translation: { z: 0.02 } },
                                    d.createElement(
                                      a.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: H,
                                      },
                                      d.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        d.createElement(T.NT, {
                                          label: B
                                            ? (0, g.Xx)("#SteamVR_Home")
                                            : (0, g.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(m.PF),
                                          style: T.zk.App,
                                          imageUrl: A,
                                          onClick: () =>
                                            this.switchToOverlayInternal(m.PF),
                                        }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          x &&
                            d.createElement(T.NT, {
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
                            }),
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Right" },
                          d.createElement(
                            T.dw,
                            { style: T.zk.Small },
                            G &&
                              d.createElement(T.B8, {
                                additionalClassNames:
                                  "CenterImageLarge IncognitoButton",
                                imageUrl:
                                  this.state.eIncognitoMode == a.Qu.Off
                                    ? "/dashboard/images/icons/svr_people_a.svg"
                                    : "/dashboard/images/icons/svr_people_b.svg",
                                label: "Friends",
                                onClick: () => this.ToggleIncognitoMode(),
                                active: this.state.eIncognitoMode == a.Qu.Off,
                              }),
                            z &&
                              d.createElement(T.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_theater.svg",
                                label: "Toggle Theater Mode",
                                onClick: () =>
                                  this.setState({
                                    bTheaterMode: !this.state.bTheaterMode,
                                  }),
                                active: this.state.bTheaterMode,
                              }),
                            K &&
                              d.createElement(T.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, g.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            W &&
                              d.createElement(T.B8, {
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
                            d.createElement(T.D6, {
                              active: this.state.eShowPopoverMenu == ge.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(ge.Volume),
                              onHideTray: () => this.showPopoverMenu(ge.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          P &&
                            d.createElement(T.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(m.A4),
                              enabled: this.hasOverlay(m.A4),
                              label: (0, g.Xx)("#Settings"),
                              style: T.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(m.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            O &&
                            d.createElement(T.NT, {
                              imageUrl: O.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, g.Xx)(O.sButtonName),
                              style: T.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            }),
                        ),
                      ),
                      d.createElement(I, {
                        ref: this.m_refDesktopTray,
                        position: 0,
                        visible:
                          this.isDesktopTrayActive() &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: k,
                        bDarkMode: this.state.bDesktopDarkMode,
                        onToggleDarkMode: () =>
                          this.setState({
                            bDesktopDarkMode: !this.state.bDesktopDarkMode,
                          }),
                        onToggleWindowList: () =>
                          this.showPopoverMenu(ge.Windows),
                        onClearPopoverMenuTimeout: () =>
                          this.clearPopoverMenuTimeout(),
                        onStartPopoverMenuTimeout: (e) =>
                          this.startPopoverMenuTimeout(e),
                        mapWindows: this.state.mapWindows,
                        sort_depth_bias: 0.2,
                        bWindowViewEnabled: this.state.bWindowViewEnabled,
                      }),
                      d.createElement(T.z, {
                        ref: this.m_refVolumeTray,
                        position: 0.337,
                        visible:
                          this.state.eShowPopoverMenu == ge.Volume &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: k,
                        onFinalChangeMouseOutside: () => {
                          this.startPopoverMenuTimeout(800);
                        },
                        onMouseMove: this.clearPopoverMenuTimeout,
                        onMouseLeave: this.popoverMenuMouseLeave,
                        sort_depth_bias: 0.4,
                      }),
                    ),
                  ),
                ),
                d.createElement(
                  a.wx,
                  { translation: q, scale: { y: 1.5, x: 1.5 } },
                  d.createElement(a.sl, {
                    mountedId: (0, a.iN)(m.GN, "system.keyboard"),
                  }),
                ),
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != n.Dashboard);
            return d.createElement(
              d.Fragment,
              null,
              e.map((e) =>
                d.createElement(R, {
                  bVisible: this.state.bShown,
                  bTheaterMode: this.state.bTheaterMode,
                  dockLocation: e.overlayState.dockLocation,
                  onDockOverlay: this.onDockOverlay,
                  sOverlayKey: e.sOverlayKey,
                  xfInitial: e.overlayState.xfInitial,
                  key: e.sOverlayKey,
                  ref: e.overlayState.refOverlayWidget,
                }),
              ),
            );
          }
          getRenderModelForShape(e) {
            switch (e) {
              case le.Cube:
                return "unit_cube";
              case le.Cylinder:
                return "unit_cylinder";
              case le.Sphere:
                return "unit_sphere";
              case le.Square:
                return "unit_square";
              case le.Disk:
                return "unit_disk";
            }
            return "";
          }
          renderPassthroughPortals() {
            let e = Array.from(this.state.mapPortals, ([e, t]) => ({
              sPortalKey: e,
              portalState: t,
            }));
            return d.createElement(
              d.Fragment,
              null,
              e.map((e) =>
                d.createElement(
                  ae,
                  { key: e.sPortalKey },
                  d.createElement(
                    a.wx,
                    { translation: { x: 1.5, y: 1.5, z: 1.5 } },
                    d.createElement(a.gQ, {
                      key: e.sPortalKey,
                      source: this.getRenderModelForShape(
                        e.portalState.ePortalShape,
                      ),
                      id: e.sPortalKey,
                      solid: !0,
                      stencil_mask: !0,
                      "no-depth-test": !0,
                    }),
                    d.createElement(
                      a.wx,
                      { translation: { y: -1 }, rotation: { y: 180 } },
                      d.createElement(se, { bVisible: !0 }),
                    ),
                  ),
                ),
              ),
            );
          }
          isDesktopViewVisible() {
            let e = this.getActiveOverlayKey(),
              t =
                !this.state.mapOverlayState.has(e) ||
                this.state.mapOverlayState.get(e).dockLocation == n.Dashboard;
            return this.state.bShown && this.isOverlayActive(m.gB) && t;
          }
          onGameLaunched(e) {
            var t;
            const r =
              null !==
                (t = S.G3.settings.get(
                  "/settings/dashboard/allowTheaterMode",
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
            var e, t, r, o, n;
            const i =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              s =
                null !==
                  (o =
                    null === (r = this.m_refDesktopView.current) || void 0 === r
                      ? void 0
                      : r.desktopCount) && void 0 !== o
                  ? o
                  : 1,
              l = null !== (n = S.G3.settings.get(m.u3)) && void 0 !== n && n;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.Y9,
                {
                  tabName: (0, g.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: m.O5,
                },
                d.createElement(oe, {
                  visible: this.state.bShown && this.isOverlayActive(m.O5),
                  onGameLaunched: this.onGameLaunched,
                }),
              ),
              d.createElement(
                a.Y9,
                {
                  tabName: (0, g.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: m.wB,
                },
                d.createElement(Y, {
                  visible: this.state.bShown && this.isOverlayActive(m.wB),
                }),
              ),
              d.createElement(
                a.Y9,
                { tabName: (0, g.Xx)("#Now_Playing"), summonOverlayKey: m.PF },
                d.createElement(A, {
                  visible: this.state.bShown && this.isOverlayActive(m.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              d.createElement(
                a.Y9,
                {
                  summonOverlayKey: m.gB,
                  tabName:
                    s > 1 ? (0, g.Xx)("#Desktop_X", i) : (0, g.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                d.createElement(x, {
                  visible: this.isDesktopViewVisible(),
                  fActiveOverlayScale: this.activeOverlayScale,
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              d.createElement(c._, {
                visible: this.state.bShown && this.isOverlayActive(m.A4),
              }),
              l &&
                d.createElement(
                  a.Y9,
                  { summonOverlayKey: m.m3, tabName: "Portal Manager" },
                  d.createElement(ue, {
                    visible: this.state.bShown && this.isOverlayActive(m.m3),
                    onAddPortal: this.onAddPortal,
                    onRemovePortal: this.onRemovePortal,
                  }),
                ),
            );
          }
          onAddPortal(e, t) {
            this.state.mapPortals.set(e, { ePortalShape: t }),
              this.forceUpdate();
          }
          onRemovePortal(e) {
            this.state.mapPortals.delete(e), this.forceUpdate();
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
                this.getActiveOverlayKey(),
              );
              t && (e = t.fScale);
            }
            return e;
          }
          onActiveOverlayScaleChange(e) {
            this.setState((t) => {
              const r = new Map(t.mapOverlayState),
                o = Object.assign(
                  Object.assign({}, r.get(this.getActiveOverlayKey())),
                  { fScale: e },
                );
              return { mapOverlayState: r.set(this.getActiveOverlayKey(), o) };
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
            const i = this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              s = this.isDarkMode ? 0 : 0.1;
            let l = !1,
              c = !1,
              h = !1,
              p = this.getActiveOverlayKey();
            if (p) {
              let e = VRHTML.VROverlay.FindOverlay(p);
              (l =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarKeyboard)),
                (c =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarClose)),
                (h =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableSteamUIButtons));
            }
            const v =
                null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin",
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              _ =
                null !==
                  (t = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax",
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              y =
                null ===
                  (r = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r
                  ? m.ml
                  : null,
              b = { x: 0, y: -0.15, z: 0.1 };
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003 },
                },
                d.createElement(
                  a.VW,
                  { color: i },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: y,
                      origin: a.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: this.controlBarAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: s,
                    },
                    d.createElement("div", {
                      className: "OverlayControlBarBackground",
                    }),
                  ),
                ),
              ),
              d.createElement(
                a.wx,
                {
                  parent_id: this.controlBarAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                d.createElement(
                  a.VW,
                  { color: i },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: y,
                      origin: a.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: m.WR,
                      debug_name: "ActiveOverlayControlBar",
                    },
                    d.createElement(
                      "div",
                      { className: "OverlayControlBar" },
                      d.createElement(
                        "div",
                        { className: "Section" },
                        d.createElement(
                          "div",
                          { className: "Label" },
                          (0, g.Xx)("#Size"),
                        ),
                        d.createElement(u.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: v,
                          max: _,
                          value: this.activeOverlayScale,
                          valueStyleVariant: u.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        h &&
                          d.createElement(T.zN, {
                            icon: d.createElement(de.VC, {
                              button: ce.F.HomeMenu,
                              type: de.yV.Knockout,
                              size: de.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, g.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: b,
                            onClick: () => {
                              this.onSteamButtonPressed(a.ZP.HomeMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        h &&
                          d.createElement(T.zN, {
                            icon: d.createElement(de.VC, {
                              button: ce.F.QuickMenu,
                              type: de.yV.Knockout,
                              size: de.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, g.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: b,
                            onClick: () => {
                              this.onSteamButtonPressed(a.ZP.QuickMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        l &&
                          d.createElement(T.zN, {
                            iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                            title: this.state.bKeyboardVisible
                              ? (0, g.Xx)("#HideKeyboardTooltip")
                              : (0, g.Xx)("#ShowKeyboardTooltip"),
                            tooltipTranslation: b,
                            additionalClassNames: "Keyboard",
                            onClick: this.toggleKeyboard,
                            active: this.state.bKeyboardVisible,
                          }),
                        d.createElement(T.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, g.Xx)("#DockOnLeftController"),
                          tooltipTranslation: b,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              n.LeftHand
                              ? this.onDockOverlay(e, n.Dashboard)
                              : this.onDockOverlay(e, n.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_LeftHand,
                            ) != a.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey(),
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey(),
                            ).dockLocation == n.LeftHand,
                        }),
                        d.createElement(T.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, g.Xx)("#DockOnRightController"),
                          tooltipTranslation: b,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              n.RightHand
                              ? this.onDockOverlay(e, n.Dashboard)
                              : this.onDockOverlay(e, n.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_RightHand,
                            ) != a.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey(),
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey(),
                            ).dockLocation == n.RightHand,
                        }),
                        d.createElement(T.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, g.Xx)("#FloatInWorld"),
                          tooltipTranslation: b,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              n.World
                              ? this.onDockOverlay(e, n.Dashboard)
                              : this.onDockOverlay(e, n.World);
                          },
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey(),
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey(),
                            ).dockLocation == n.World,
                        }),
                        c &&
                          d.createElement(T.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, g.Xx)("#CloseOverlay"),
                            tooltipTranslation: b,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (o = this.m_refDesktopView.current) ||
                          void 0 === o
                            ? void 0
                            : o.renderControlBarButtons(b)),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          renderDashboard() {
            var e, t, r, o, i, s;
            const l = this.computeFilteredOverlayTabs(),
              c = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              u = this.isDarkMode ? 0 : 0.1,
              p = !this.isDarkMode,
              v = !this.isDarkMode;
            let _ = [],
              y = [],
              b =
                null !== (e = S.G3.settings.get(m.FM)) && void 0 !== e ? e : 2;
            if (l.length > b) {
              const e = S.G3.settings.get(m.nf);
              (_ = [
                null !== (t = l.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : l[0],
              ]),
                (y = l.filter((e) => !_.includes(e)));
            } else _ = l;
            let f = null;
            this.isDesktopOverlayActive() && (f = 2048);
            let M = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && M.push(e);
            });
            const C = this.isScreenshotMode,
              R = C ? 2.5 : 1.8;
            let w = !1,
              D = !0,
              E = !1,
              I = this.getActiveOverlayKey();
            if (I) {
              let e = VRHTML.VROverlay.FindOverlay(I);
              (E = !!e && VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBar)),
                (D =
                  !this.state.mapOverlayState.has(I) ||
                  this.state.mapOverlayState.get(I).dockLocation ==
                    n.Dashboard),
                (w =
                  this.state.mapOverlayState.has(I) &&
                  this.state.mapOverlayState.get(I).dockLocation == n.World);
            }
            this.state.bLaserMouseSuppressionActive && (E = !1);
            let x = 2,
              P = 2.5;
            const O = S.G3.settings.get("/settings/dashboard/theaterPosition");
            O == me.Near
              ? ((x *= 0.5), (P *= 0.5))
              : O == me.Middle
              ? ((x *= 1), (P *= 1))
              : O == me.Far && ((x *= 4), (P *= 2.5));
            const V =
                null !==
                  (r =
                    0.01 *
                    S.G3.settings.get(
                      "/settings/dashboard/theaterVerticalOffsetCm",
                    )) && void 0 !== r
                  ? r
                  : 0,
              L =
                null ===
                  (o = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o,
              B = L ? m.ml : null;
            let H,
              N,
              A,
              F,
              U,
              W = 0.05,
              G =
                null !==
                  (i = S.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== i &&
                i,
              z = this.state.bTheaterMode
                ? { y: -1.2, z: 1 }
                : { y: -1.2, z: 0.15 },
              K = this.state.bTheaterMode
                ? { x: 0.75, y: 0.75, z: 0.75 }
                : { x: 1, y: 1, z: 1 },
              q = !L && this.state.bTheaterMode ? 0.75 : 1;
            const X = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              Q = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null;
            let j = L ? 1 : 0;
            this.state.bTheaterMode
              ? ((H = { y: -0.8 * P + V, z: -x }),
                (N = P),
                (A = 1.72),
                (F = 0.82),
                (U = 10))
              : ((H = { y: E ? -0.9 : -1.03375, z: 0.05 }),
                (N = 1),
                (A = 2),
                (F = 0.68),
                (U = 5),
                (G = !1));
            let Z =
              null !==
                (s = S.G3.settings.get(
                  "/settings/dashboard/allowFreeTransform",
                )) &&
              void 0 !== s &&
              s;
            return d.createElement(
              a.eK,
              {
                bContinuousRelatch: this.state.bPlacementModeActive,
                bFreeDashboardTransform: Z && this.state.bPlacementModeActive,
              },
              d.createElement(
                ae,
                null,
                !1,
                d.createElement(a.wx, { id: B, translation: { z: R } }),
                d.createElement(
                  a.wx,
                  {
                    translation: {
                      x: C ? 0.1 : 0,
                      y: pe.getDashboardVerticalPosition(),
                      z: -pe.getDashboardDistance() * (C ? 1.1 : 1),
                    },
                    rotation: { x: C ? -20 : 0 },
                    scale: pe.getDashboardScale(),
                  },
                  d.createElement(
                    a.wx,
                    {
                      parent_id: this.statusBarAnchorID,
                      translation: { y: 0.008 },
                      scale: { x: q, y: q },
                    },
                    d.createElement(
                      a.VW,
                      { color: c },
                      d.createElement(
                        a.s_,
                        {
                          curvature_origin_id: B,
                          origin: a.Ic.BottomCenter,
                          interactive: !1,
                          target_dpi_panel_id: m.WR,
                          debug_name: "StatusBar",
                          reflect: u,
                        },
                        d.createElement(
                          "div",
                          { className: "StatusBar", style: { width: f } },
                          d.createElement(
                            "div",
                            { className: "Section Left" },
                            p && this.renderStatusBarTitle(),
                            d.createElement(T.j6, {
                              role: a.Kg.TrackedControllerRole_LeftHand,
                              style: k.A.HorizontalPips,
                            }),
                          ),
                          d.createElement(
                            "div",
                            { className: "Section Center" },
                            d.createElement(T.j6, {
                              deviceIndex: a.wU,
                              style: k.A.VerticalBattery,
                            }),
                            d.createElement(T.M3, null),
                          ),
                          d.createElement(
                            "div",
                            { className: "Section Right" },
                            d.createElement(T.j6, {
                              role: a.Kg.TrackedControllerRole_RightHand,
                              style: k.A.HorizontalPips,
                            }),
                            v &&
                              d.createElement(
                                "div",
                                { className: "SteamLogo" },
                                d.createElement("img", {
                                  src: "/dashboard/images/icons/vr_steam.svg",
                                }),
                              ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  d.createElement(
                    a.wx,
                    {
                      id: "active_overlay_transform",
                      translation: H,
                      ref: this.m_refOverlayTransform,
                    },
                    d.createElement(
                      a.wx,
                      { scale: { x: N, y: N } },
                      !w && D && this.renderActiveOverlay(),
                      !w &&
                        !D &&
                        d.createElement(
                          T.lL,
                          {
                            additionalClassNames: E ? "WithControlBar" : "",
                            visible: !0,
                          },
                          d.createElement(
                            "div",
                            { className: "NoDesktopFound" },
                            d.createElement(
                              "h2",
                              null,
                              this.state.mapOverlayState.get(I).dockLocation ==
                                n.LeftHand &&
                                (0, g.Xx)("#DockedOnLeftController"),
                              this.state.mapOverlayState.get(I).dockLocation ==
                                n.RightHand &&
                                (0, g.Xx)("#DockedOnRightController"),
                            ),
                            d.createElement(
                              h.z,
                              {
                                className: "ButtonControl",
                                onClick: () => {
                                  this.onDockOverlay(I, n.Dashboard);
                                },
                              },
                              (0, g.Xx)("#DockHere"),
                            ),
                          ),
                        ),
                      G &&
                        d.createElement(
                          a.wx,
                          { translation: { y: F, z: 0.25 } },
                          d.createElement(a.bt, {
                            width: 2.8,
                            height: A,
                            "near-z": -1,
                            "far-z": 1,
                            debug: !1,
                            specular: { color: { r: W, g: W, b: W } },
                            diffuse: { size: U, resolution: 512 },
                          }),
                        ),
                    ),
                  ),
                  E && D && this.renderOverlayControlBar(),
                  !1,
                  d.createElement(
                    a.wx,
                    { translation: { x: z.x, y: z.y + 0.08, z: z.z - 0.12 } },
                    d.createElement(se, {
                      bVisible: !0,
                      curvature_origin_id: B,
                      tint: Q,
                      opacity: X,
                    }),
                  ),
                  d.createElement(
                    a.wx,
                    { translation: z, scale: K },
                    d.createElement(
                      a.wx,
                      { rotation: { x: -35 }, curvature_pitch: -35 },
                      this.renderControlBar(_, y),
                    ),
                    this.state.eShowPopoverMenu == ge.Power &&
                      d.createElement(
                        a.wx,
                        {
                          translation: { x: -0.4, y: 0.15, z: 0.05 },
                          rotation: { y: 19 * j },
                        },
                        d.createElement(
                          a.s_,
                          {
                            curvature_origin_id: B,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: a.Ic.BottomRight,
                            debug_name: "Power Menu",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPowerMenu(),
                        ),
                      ),
                    this.state.eShowPopoverMenu == ge.ExternalOverlays &&
                      d.createElement(
                        a.wx,
                        {
                          translation: { x: 0.2, y: 0.15, z: 0.05 },
                          rotation: { y: 6 * j },
                        },
                        d.createElement(
                          a.s_,
                          {
                            curvature_origin_id: B,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: a.Ic.BottomRight,
                            debug_name: "OverlaysList",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPopoverMenu(
                            d.createElement(
                              d.Fragment,
                              null,
                              " ",
                              y.map((e) =>
                                d.createElement(T.dy, {
                                  key: e.mountable_id,
                                  imageUrl: this.getDashboardIconUri(e),
                                  label: e.tab_name,
                                  onClick: () => {
                                    this.switchToOverlayInternal(
                                      e.summon_overlay_key,
                                    ),
                                      this.showPopoverMenu(ge.None);
                                  },
                                }),
                              ),
                              " ",
                            ),
                          ),
                        ),
                      ),
                    this.state.eShowPopoverMenu == ge.Windows &&
                      d.createElement(
                        a.wx,
                        {
                          translation: { x: 1.25, y: -0.1, z: 0.35 },
                          rotation: { y: -16 * j },
                        },
                        d.createElement(
                          a.s_,
                          {
                            curvature_origin_id: B,
                            height: void 0,
                            width: 0.925,
                            interactive: !0,
                            origin: a.Ic.BottomRight,
                            debug_name: "WindowList",
                            sort_depth_bias: -0.1,
                          },
                          this.renderPopoverMenu(
                            d.createElement(
                              d.Fragment,
                              null,
                              " ",
                              M.map((e) =>
                                d.createElement(T.dy, {
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
                                      this.showPopoverMenu(ge.None);
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
            );
          }
        });
        (ye.k_sDashboardMailboxName = "systemui_dashboard"),
          (ye.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (ye.k_sOverlayKeyboardClosedMessage = "overlay_keyboard_closed"),
          (ye.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (ye.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (ye.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (ye.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (ye.k_sWindowViewCreatedMessage = "window_view_created"),
          (ye.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (ye.k_sUpdateWindowListMessage = "update_window_list"),
          (ye.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (ye.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (ye.k_sLaserMouseSuppressionUpdate =
            "laser_mouse_suppression_update"),
          (ye.k_nControlBarWidthMeters = 2.667),
          (ye.s_dashboardUserDistance = void 0),
          (ye.s_dashboardUserScale = void 0),
          (0, i.gn)(
            [s.ak],
            ye.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, i.gn)([s.ak], ye.prototype, "onRoomViewChanged", null),
          (0, i.gn)([s.ak], ye.prototype, "onLinkStreamActiveEvents", null),
          (0, i.gn)([s.ak], ye.prototype, "onIncognitoModeEvents", null),
          (0, i.gn)(
            [s.ak],
            ye.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, i.gn)(
            [s.ak],
            ye.prototype,
            "onLaserMouseSuppressionUpdate",
            null,
          ),
          (0, i.gn)([s.ak], ye.prototype, "onDashboardOverlayCreated", null),
          (0, i.gn)([s.ak], ye.prototype, "onDashboardOverlayDestroyed", null),
          (0, i.gn)([s.ak], ye.prototype, "onUpdateDashboardTabs", null),
          (0, i.gn)([s.ak], ye.prototype, "onWindowViewCreated", null),
          (0, i.gn)([s.ak], ye.prototype, "onWindowViewDestroyed", null),
          (0, i.gn)([s.ak], ye.prototype, "onUpdateWindowList", null),
          (0, i.gn)([s.ak], ye.prototype, "onUpdateDebugInfo", null),
          (0, i.gn)([s.ak], ye.prototype, "onDockOverlay", null),
          (0, i.gn)([s.ak], ye.prototype, "onShowDashboardRequested", null),
          (0, i.gn)([s.ak], ye.prototype, "onHideDashboardRequested", null),
          (0, i.gn)([s.ak], ye.prototype, "show", null),
          (0, i.gn)([s.ak], ye.prototype, "hide", null),
          (0, i.gn)([s.ak], ye.prototype, "setPlacementModeActive", null),
          (0, i.gn)([s.ak], ye.prototype, "onToggleRoomView", null),
          (0, i.gn)([s.ak], ye.prototype, "onQuickLaunchButtonClick", null),
          (0, i.gn)([s.ak], ye.prototype, "onQuickStoreButtonClick", null),
          (0, i.gn)([s.ak], ye.prototype, "onRecenterClick", null),
          (0, i.gn)([s.ak], ye.prototype, "renderPowerMenu", null),
          (0, i.gn)([s.ak], ye.prototype, "startPopoverMenuTimeout", null),
          (0, i.gn)([s.ak], ye.prototype, "clearPopoverMenuTimeout", null),
          (0, i.gn)([s.ak], ye.prototype, "showPopoverMenu", null),
          (0, i.gn)([s.ak], ye.prototype, "popoverMenuMouseLeave", null),
          (0, i.gn)([s.ak], ye.prototype, "popoverMenuMouseUp", null),
          (0, i.gn)([l.Fl], ye.prototype, "isDarkMode", null),
          (0, i.gn)([l.Fl], ye.prototype, "isScreenshotMode", null),
          (0, i.gn)([l.Fl], ye.prototype, "isTheaterMode", null),
          (0, i.gn)([s.ak], ye.prototype, "hasOverlay", null),
          (0, i.gn)(
            [s.ak],
            ye.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, i.gn)([s.ak], ye.prototype, "isDesktopTrayActive", null),
          (0, i.gn)([s.ak], ye.prototype, "isSteamOverlayActive", null),
          (0, i.gn)([s.ak], ye.prototype, "isDesktopOverlayActive", null),
          (0, i.gn)([s.ak], ye.prototype, "handlePeerButton", null),
          (0, i.gn)([s.ak], ye.prototype, "ToggleIncognitoMode", null),
          (0, i.gn)([s.ak], ye.prototype, "getRenderModelForShape", null),
          (0, i.gn)([s.ak], ye.prototype, "isDesktopViewVisible", null),
          (0, i.gn)([s.ak], ye.prototype, "onGameLaunched", null),
          (0, i.gn)([s.ak], ye.prototype, "onAddPortal", null),
          (0, i.gn)([s.ak], ye.prototype, "onRemovePortal", null),
          (0, i.gn)([s.ak], ye.prototype, "toggleKeyboard", null),
          (0, i.gn)([s.ak], ye.prototype, "onKeyboardClosed", null),
          (0, i.gn)([l.Fl], ye.prototype, "activeOverlayScale", null),
          (0, i.gn)([s.ak], ye.prototype, "onActiveOverlayScaleChange", null),
          (0, i.gn)([s.ak], ye.prototype, "onActiveOverlayClosed", null),
          (0, i.gn)([s.ak], ye.prototype, "onSteamButtonPressed", null),
          (0, i.gn)([l.LO], ye, "s_dashboardUserDistance", void 0),
          (0, i.gn)([l.LO], ye, "s_dashboardUserScale", void 0),
          (ye = pe = (0, i.gn)([f.Pi], ye));
      },
      6459: (e, t, r) => {
        r.d(t, {
          B8: () => V,
          D6: () => W,
          IO: () => P,
          M3: () => D,
          NT: () => L,
          Rk: () => H,
          dw: () => O,
          dy: () => T,
          j4: () => N,
          j6: () => B,
          lL: () => w,
          z: () => A,
          zN: () => G,
          zk: () => x,
        });
        var o,
          n,
          i = r(655),
          a = r(1569),
          s = r(7056),
          l = r(2188),
          d = r(7062),
          c = r(7294),
          h = r(5177),
          u = r(9755),
          p = r(7475),
          m = r(4979),
          g = r(3107),
          v = r(2749),
          _ = r(7176),
          y = r(3568),
          b = r(7008),
          S = r(8980),
          f = r(9897),
          k = r(1628),
          M = r(8322),
          C = r.n(M),
          R = r(7726);
        const w = (e) => {
          var t, r, o;
          const n = c.useRef(null),
            i = c.useRef(null);
          c.useEffect(() => {
            var e, t;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.setFloatingViewStack(
                  null === (t = i.current) || void 0 === t
                    ? void 0
                    : t.viewStack,
                );
          });
          const s = null === (t = e.scrollable) || void 0 === t || t,
            l =
              null !== (r = e.foregroundReflectMultiplier) && void 0 !== r
                ? r
                : 1,
            d =
              null ===
                (o = k.G3.settings.get("/settings/dashboard/allowCurvature")) ||
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
                curvature_origin_id: d,
                origin: a.Ic.BottomCenter,
                interactive: !1,
                scrollable: !1,
                target_dpi_panel_id: _.WR,
                target_dpi_multiplier: 2,
                reflect: 0.01,
                sampler: a.Vv.SingleTap,
              },
              c.createElement(a.at, { id: _.t3, location: a.Ic.TopCenter }),
              c.createElement(
                u.vz,
                { ref: n },
                c.createElement("div", {
                  className: (0, S.LJ)(
                    "DashboardPanelBackground",
                    e.additionalClassNames,
                  ),
                  style: e.additionalStyle,
                }),
              ),
              c.createElement(a.at, { id: _.Gl, location: a.Ic.BottomCenter }),
            ),
            c.createElement(
              a.wx,
              { translation: { z: 1e-5 } },
              c.createElement(
                a.s_,
                {
                  visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: d,
                  origin: a.Ic.BottomCenter,
                  interactive: !0,
                  scrollable: s,
                  target_dpi_panel_id: _.WR,
                  reflect: 0.2 * l,
                },
                c.createElement(
                  u.sC,
                  { ref: i },
                  c.createElement(
                    h.q,
                    null,
                    c.createElement(
                      p.P,
                      {
                        scrollDirection: s ? p.I.Vertical : p.I.None,
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
        class D extends c.Component {
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
        function T(e) {
          return c.createElement(
            h.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, i.gn)([s.ak], D.prototype, "updateTime", null);
        let E = (o = class extends c.Component {
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
        (E.s_CurrentlyShownTooltip = null),
          (0, i.gn)([l.Fl], E.prototype, "isShowingTooltip", null),
          (0, i.gn)([l.aD.bound], E.prototype, "show", null),
          (0, i.gn)([l.aD.bound], E.prototype, "hide", null),
          (0, i.gn)([l.LO], E, "s_CurrentlyShownTooltip", void 0),
          (E = o = (0, i.gn)([d.Pi], E));
        class I extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !I.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  I.k_rsThumbnailHashesToInvert.indexOf(C().hash(e)) >= 0 &&
                  (t = !0),
                I.s_mapShouldInvertThumbnail.set(e, t);
            }
            return I.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              r = I.ShouldInvertThumbnail(this.props.src);
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
          c.createElement(
            "div",
            { className: (0, S.LJ)("ControlBarGroup", x[e.style]) },
            e.children,
          );
        let V = class extends c.Component {
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
              h.z,
              {
                className: (0, S.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  P[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : P.Center
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
                pressSoundEffect: g.y.ControlBarButtonPress,
                releaseSoundEffect: g.y.ControlBarButtonRelease,
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
              c.createElement(E, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(I, { src: this.props.imageUrl }),
            );
          }
        };
        (0, i.gn)([s.ak], V.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], V.prototype, "onMouseLeave", null),
          (V = (0, i.gn)([d.Pi], V));
        const L = (e) =>
          c.createElement(
            O,
            { style: e.style },
            c.createElement(V, Object.assign({}, e)),
          );
        class B extends c.Component {
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
                        e + B.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - B.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                r,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let o = R.X.GetBatteryIcon(
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
        (B.kBatteryLevelHysteresis = 0.02),
          (0, i.gn)([s.ak], B.prototype, "updateControllerStatus", null),
          (0, i.gn)([s.ak], B.prototype, "onBatteryStateChanged", null),
          (0, i.gn)([s.ak], B.prototype, "onDeviceRoleChanged", null),
          (0, i.gn)([s.ak], B.prototype, "onDeviceEvent", null),
          c.Component;
        const H = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            c.createElement(I, { src: e.iconUrl, shadow: !0 }),
            c.createElement("span", { className: "NoWrapText" }, e.name),
          );
        class N extends c.Component {
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
            var e;
            const t = this.props.position,
              r = Math.asin(t) / Math.PI,
              o =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: t, y: -1 } },
                c.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(r),
                    z: -0.03 * Math.abs(r),
                  },
                  rotation: { y: 15 * r, z: 2 * r },
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
                    v.Ti,
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
                        translation: { y: 0.04, z: -0.01 },
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id: o,
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
                            curvature_origin_id: o,
                            origin: a.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: _.WR,
                            target_dpi_multiplier: 2,
                            reflect: 0.04,
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
        (0, i.gn)([s.ak], N.prototype, "onResizeObserved", null),
          (0, i.gn)([s.ak], N.prototype, "updateBackgroundSize", null),
          (0, i.gn)([s.ak], N.prototype, "onPortalDidMount", null);
        let A = class extends c.Component {
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
              N,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  U,
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
                c.createElement(F, {
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
                  interactionEndSoundEffect: g.y.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                c.createElement(
                  "div",
                  { className: "Section" },
                  c.createElement(
                    U,
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
                  c.createElement(F, {
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
                    interactionEndSoundEffect: g.y.VolumePreview,
                  }),
                ),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  U,
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
                c.createElement(F, {
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
                  interactionEndSoundEffect: g.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, i.gn)([s.ak], A.prototype, "onSliderMouseEnter", null),
          (0, i.gn)([s.ak], A.prototype, "onSliderMouseLeave", null),
          (0, i.gn)([s.ak], A.prototype, "onSliderFinalChange", null),
          (0, i.gn)([l.Fl], A.prototype, "showAudioMirrorControls", null),
          (0, i.gn)([l.Fl], A.prototype, "enableAudioMirrorControls", null),
          (A = (0, i.gn)([d.Pi], A));
        let F = class extends c.Component {
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
                c.createElement(E, {
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
        (0, i.gn)([s.ak], F.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], F.prototype, "onMouseLeave", null),
          (0, i.gn)([s.ak], F.prototype, "onInteractionStart", null),
          (0, i.gn)([s.ak], F.prototype, "onInteractionEnd", null),
          (F = (0, i.gn)([d.Pi], F));
        let U = class extends c.Component {
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
                c.createElement(E, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, i.gn)([s.ak], U.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], U.prototype, "onMouseLeave", null),
          (U = (0, i.gn)([d.Pi], U));
        let W = (n = class extends c.Component {
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
            return c.createElement(V, {
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
        (W.MIN_DRAG_THRESHOLD = 35),
          (0, i.gn)([s.ak], W.prototype, "onButtonMouseDown", null),
          (0, i.gn)([s.ak], W.prototype, "onWindowMouseMove", null),
          (0, i.gn)([s.ak], W.prototype, "onWindowMouseUp", null),
          (W = n = (0, i.gn)([d.Pi], W));
        const G = (e) => {
          const t = c.useRef();
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
              c.createElement(E, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: t,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: "Icon BlackToWhite",
                src: e.iconUrl,
              }),
            e.icon,
          );
        };
      },
      16: (e, t, r) => {
        r.d(t, { BB: () => u, KU: () => p });
        var o,
          n = r(655),
          i = r(7294),
          a = r(7056),
          s = r(1569),
          l = r(3568),
          d = r(7062),
          c = r(8980),
          h = r(1628);
        const u = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (o = class extends i.Component {
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
            let r = 0.9,
              o =
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
                  : 1);
            const n =
              this.props.dashboardRef.current &&
              this.props.dashboardRef.current.isTheaterMode;
            let a =
              null !==
                (t = h.G3.settings.get(
                  "/settings/dashboard/allowFreeTransform",
                )) &&
              void 0 !== t &&
              t;
            return this.state.bDashboardPlacementActive
              ? (n && ((r *= 2), (o *= 2)),
                i.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: a },
                  i.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -r }, scale: o },
                    this.renderPanel(),
                  ),
                ))
              : i.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  i.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -r }, scale: o },
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
        r.d(t, { s: () => v });
        var o = r(655),
          n = r(7294),
          i = r(7062),
          a = r(7056),
          s = r(3568),
          l = r(5211),
          d = r(4285),
          c = r(2188),
          h = r(9809),
          u = r(5177),
          p = r(8980),
          m = r(9595);
        let g = class extends n.Component {
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
        (0, o.gn)([c.Fl], g.prototype, "trackerConfig", null),
          (0, o.gn)([a.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, o.gn)([a.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, o.gn)([a.ak], g.prototype, "BuzzTracker", null),
          (0, o.gn)([c.Fl], g.prototype, "deviceInfo", null),
          (g = (0, o.gn)([i.Pi], g));
        let v = class extends n.Component {
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
                (e = t.trackers.map((e, r) =>
                  n.createElement(g, {
                    key: r,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              n.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        v = (0, o.gn)([i.Pi], v);
      },
      6698: (e, t, r) => {
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
    },
    r = {};
  function o(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var i = (r[e] = { id: e, exports: {} });
    return t[e](i, i.exports, o), i.exports;
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
    (o.j = 573),
    (() => {
      var e = { 573: 0 };
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
  var n = o.O(void 0, [968, 683], () => o(855));
  n = o.O(n);
})();
//# sourceMappingURL=notificationtoast.js.map?v=4aee45639b431a478ba1
